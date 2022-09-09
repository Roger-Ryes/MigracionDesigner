import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Priorities } from "../../../../entities/Priorities";
export class Model {
public Priorities!: any;
private _prioritiesRowData!: Priorities;
constructor(private formGroupArray: any) {
this.Priorities = [];
this._prioritiesRowData = new Priorities(formGroupArray["Priorities"]);
}
public set PrioritiesRowData(entity: any) {
this._prioritiesRowData = entity;
}
public get PrioritiesRowData() {
return this._prioritiesRowData;
}
}