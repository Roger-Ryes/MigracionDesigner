import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { OperationPaymentColumn } from "../../../../entities/OperationPaymentColumn";
import { ColumnsDataValue } from "../../../../entities/ColumnsDataValue";
import { LoanInstancia } from "../../../../entities/LoanInstancia";
export class Model {
private _operationPaymentColumn!: OperationPaymentColumn;
private _columnsDataValue!: ColumnsDataValue;
private _loanInstancia!: LoanInstancia;
constructor(private formGroupArray: any) {
this._operationPaymentColumn = new OperationPaymentColumn(formGroupArray["OperationPaymentColumn"]);
this._columnsDataValue = new ColumnsDataValue(formGroupArray["ColumnsDataValue"]);
this._loanInstancia = new LoanInstancia(formGroupArray["LoanInstancia"]);
}
public set OperationPaymentColumn(valores: any) {
this._operationPaymentColumn = CobisDesignerUtil.getEntityData(this._operationPaymentColumn, valores);
}
public get OperationPaymentColumn():OperationPaymentColumn{
return this._operationPaymentColumn;
}
public set ColumnsDataValue(valores: any) {
this._columnsDataValue = CobisDesignerUtil.getEntityData(this._columnsDataValue, valores);
}
public get ColumnsDataValue():ColumnsDataValue{
return this._columnsDataValue;
}
public set LoanInstancia(valores: any) {
this._loanInstancia = CobisDesignerUtil.getEntityData(this._loanInstancia, valores);
}
public get LoanInstancia():LoanInstancia{
return this._loanInstancia;
}
}