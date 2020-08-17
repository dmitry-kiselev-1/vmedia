import { BaseModel } from './base.model';
import { RightModel } from './right.model';

export class RoleModel extends BaseModel {
  rights?: RightModel[];
  selected: boolean = false;
}
