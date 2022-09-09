import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { DebtorList } from "../../../../entities/DebtorList";
export class Model {
public DebtorList!: any;
private _debtorListRowData!: DebtorList;
constructor(private formGroupArray: any) {
this.DebtorList = [];
this._debtorListRowData = new DebtorList(formGroupArray["DebtorList"]);
}
public set DebtorListRowData(entity: any) {
this._debtorListRowData = entity;
}
public get DebtorListRowData() {
return this._debtorListRowData;
}
}