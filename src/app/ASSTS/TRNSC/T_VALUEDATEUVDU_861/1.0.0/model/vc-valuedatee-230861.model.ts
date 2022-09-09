import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanInstancia } from "../../../../entities/LoanInstancia";
import { Loan } from "../../../../entities/Loan";
import { TransactionLoan } from "../../../../entities/TransactionLoan";
import { ValueDateFilter } from "../../../../entities/ValueDateFilter";
export class Model {
private _loanInstancia!: any;
private _loan!: Loan;
public TransactionLoan!: any;
private _transactionLoanRowData!: TransactionLoan;
private _valueDateFilter!: ValueDateFilter;
constructor(private formGroupArray: any) {
this._loanInstancia = new LoanInstancia();
this._loan = new Loan(formGroupArray["Loan"]);
this.TransactionLoan = [];
this._transactionLoanRowData = new TransactionLoan(formGroupArray["TransactionLoan"]);
this._valueDateFilter = new ValueDateFilter(formGroupArray["ValueDateFilter"]);
}
public set LoanInstancia(valores: any) {
this._loanInstancia = valores;
}
public get LoanInstancia(): any {
return this._loanInstancia;
}
public set Loan(valores: any) {
this._loan = CobisDesignerUtil.getEntityData(this._loan, valores);
}
public get Loan():Loan{
return this._loan;
}
public set TransactionLoanRowData(entity: any) {
this._transactionLoanRowData = entity;
}
public get TransactionLoanRowData() {
return this._transactionLoanRowData;
}
public set ValueDateFilter(valores: any) {
this._valueDateFilter = CobisDesignerUtil.getEntityData(this._valueDateFilter, valores);
}
public get ValueDateFilter():ValueDateFilter{
return this._valueDateFilter;
}
}