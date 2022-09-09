import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { DeferredItemsList } from "../../../../entities/DeferredItemsList";
import { ItemsLoan } from "../../../../entities/ItemsLoan";
import { Loan } from "../../../../entities/Loan";
export class Model {
public DeferredItemsList!: any;
private _deferredItemsListRowData!: DeferredItemsList;
private _itemsLoan!: any;
private _loan!: any;
constructor(private formGroupArray: any) {
this.DeferredItemsList = [];
this._deferredItemsListRowData = new DeferredItemsList(formGroupArray["DeferredItemsList"]);
this._itemsLoan = new ItemsLoan();
this._loan = new Loan();
}
public set DeferredItemsListRowData(entity: any) {
this._deferredItemsListRowData = entity;
}
public get DeferredItemsListRowData() {
return this._deferredItemsListRowData;
}
public set ItemsLoan(valores: any) {
this._itemsLoan = valores;
}
public get ItemsLoan(): any {
return this._itemsLoan;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
}