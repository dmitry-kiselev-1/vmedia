import { BaseModel } from './base.model';
import { RoleModel } from './role.model';

export class GroupModel extends BaseModel {
  roles?: RoleModel[];
}
