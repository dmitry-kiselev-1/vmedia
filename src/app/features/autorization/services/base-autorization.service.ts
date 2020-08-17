import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { BaseHttpService } from '../../../shared/services/base-http.service';
import { catchError, concatMap, map, skip, take, tap, toArray } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { BaseModel } from '../models/base.model';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseAutorizationService extends BaseHttpService {

  constructor(protected httpClient: HttpClient) {
    super();
  }

  protected maxPageSize = 1000;

  protected get<T extends BaseModel>(pageIndex: number = 0, pageSize = this.maxPageSize): Observable<T[]> {
    return this.httpClient.get<{ data: T[] }>(
      `${this.apiDomain}/${this.apiUrl}`)
      .pipe(
        tap(entities => environment.production ? null : console.log(`http get`, entities)),
        // filter for paging by array:
        // map(data => data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)),
        // filter for paging by RxJs:
        concatMap(response => from(response.data)
          .pipe(
            skip(pageIndex * pageSize),
            take(pageSize),
            toArray())),
        catchError(this.handleError)
      );
  }

  protected getById<T extends BaseModel>(id: string): Observable<T> {
    return this.httpClient.get<{ data: T }>(
      `${this.apiDomain}/${this.apiUrl}/${id}`)
      .pipe(
        tap(entities => environment.production ? null : console.log(`http get/${id}`, entities)),
        map(entities => entities.data),
        catchError(this.handleError)
      );
  }

  protected delete<T extends BaseModel>(entity: T): Observable<any> {
    return this.httpClient.delete<any>(
      `${this.apiDomain}/${this.apiUrl}/${entity.id}`)
      .pipe(
        tap(entities => environment.production ? null : console.log(`http delete/${entity.id}`)),
        catchError(this.handleError)
      );
  }

  /*
      Update with respect to Paging (must be implemented on real API)
  */
  protected update<T extends BaseModel>(entity: T): Observable<any> {
    return this.httpClient.post(
      `${this.apiDomain}/${this.apiUrl}`, entity)
      .pipe(
        tap(() => environment.production ? null : console.log(`http post ${entity.id}`, entity)),
        catchError(this.handleError)
      );
  }

  protected create<T extends BaseModel>(entity: T): Observable<any> {
    // we need new id for create new record
    return this.get<T>()
      .pipe(
        concatMap(entities => {
          // debugger;
          const maxId = entities?.sort((a, b) => +b.id - +a.id)[0]?.id || '0';
          entity.id = (parseInt(maxId, 10) + 1).toString();
          return this.update(entity);
        }),
        catchError(this.handleError));
  }
}
