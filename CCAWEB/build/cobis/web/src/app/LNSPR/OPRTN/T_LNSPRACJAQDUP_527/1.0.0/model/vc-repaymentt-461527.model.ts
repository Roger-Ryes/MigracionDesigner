import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { GeneralParametersQuery } from "../../../../entities/GeneralParametersQuery";
import { PaymentAutomaticList } from "../../../../entities/PaymentAutomaticList";
import { PaymentAutomatic } from "../../../../entities/PaymentAutomatic";
export class Model {
private _generalParametersQuery!: any;
public PaymentAutomaticList!: any;
private _paymentAutomaticListRowData!: PaymentAutomaticList;
private _paymentAutomatic!: PaymentAutomatic;
constructor(private formGroupArray: any) {
this._generalParametersQuery = new GeneralParametersQuery();
this.PaymentAutomaticList = [];
this._paymentAutomaticListRowData = new PaymentAutomaticList(formGroupArray["PaymentAutomaticList"]);
this._paymentAutomatic = new PaymentAutomatic(formGroupArray["PaymentAutomatic"]);
}
public set GeneralParametersQuery(valores: any) {
this._generalParametersQuery = valores;
}
public get GeneralParametersQuery(): any {
return this._generalParametersQuery;
}
public set PaymentAutomaticListRowData(entity: any) {
this._paymentAutomaticListRowData = entity;
}
public get PaymentAutomaticListRowData() {
return this._paymentAutomaticListRowData;
}
public set PaymentAutomatic(valores: any) {
this._paymentAutomatic = CobisDesignerUtil.getEntityData(this._paymentAutomatic, valores);
}
public get PaymentAutomatic():PaymentAutomatic{
return this._paymentAutomatic;
}
}