import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { ItemsLoan } from "../../../../entities/ItemsLoan";
import { ListProjectionReadjustement } from "../../../../entities/ListProjectionReadjustement";
import { Loan } from "../../../../entities/Loan";
import { SearchProjectionReadjustement } from "../../../../entities/SearchProjectionReadjustement";
export class Model {
private _itemsLoan!: any;
public ListProjectionReadjustement!: any;
private _listProjectionReadjustementRowData!: ListProjectionReadjustement;
private _loan!: any;
private _searchProjectionReadjustement!: SearchProjectionReadjustement;
constructor(private formGroupArray: any) {
this._itemsLoan = new ItemsLoan();
this.ListProjectionReadjustement = [];
this._listProjectionReadjustementRowData = new ListProjectionReadjustement(formGroupArray["ListProjectionReadjustement"]);
this._loan = new Loan();
this._searchProjectionReadjustement = new SearchProjectionReadjustement(formGroupArray["SearchProjectionReadjustement"]);
}
public set ItemsLoan(valores: any) {
this._itemsLoan = valores;
}
public get ItemsLoan(): any {
return this._itemsLoan;
}
public set ListProjectionReadjustementRowData(entity: any) {
this._listProjectionReadjustementRowData = entity;
}
public get ListProjectionReadjustementRowData() {
return this._listProjectionReadjustementRowData;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
public set SearchProjectionReadjustement(valores: any) {
this._searchProjectionReadjustement = CobisDesignerUtil.getEntityData(this._searchProjectionReadjustement, valores);
}
public get SearchProjectionReadjustement():SearchProjectionReadjustement{
return this._searchProjectionReadjustement;
}
}