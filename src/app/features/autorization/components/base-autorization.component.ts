import { MatSnackBar } from '@angular/material/snack-bar';

export class BaseAutorizationComponent {

  protected defaultPageSize = 10;

  constructor(protected materialSnackBar: MatSnackBar) { }

  protected materialSnackBarOpen(message: string): void {
    this.materialSnackBar.open(message, 'close', {duration: 5000});
  }
}
