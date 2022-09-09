import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LineGuaranteesAssociatedList } from "../../../../entities/LineGuaranteesAssociatedList";
import { LineGuaranteesList } from "../../../../entities/LineGuaranteesList";
import { LoanLinesCreation } from "../../../../entities/LoanLinesCreation";
import { LoansLineGuarantee } from "../../../../entities/LoansLineGuarantee";
import { ValidationProcedure } from "../../../../entities/ValidationProcedure";
export class Model {
public LineGuaranteesAssociatedList!: any;
private _lineGuaranteesAssociatedListRowData!: LineGuaranteesAssociatedList;
public LineGuaranteesList!: any;
private _lineGuaranteesListRowData!: LineGuaranteesList;
private _loanLinesCreation!: any;
private _loansLineGuarantee!: LoansLineGuarantee;
private _validationProcedure!: any;
constructor(private formGroupArray: any) {
this.LineGuaranteesAssociatedList = [];
this._lineGuaranteesAssociatedListRowData = new LineGuaranteesAssociatedList(formGroupArray["LineGuaranteesAssociatedList"]);
this.LineGuaranteesList = [];
this._lineGuaranteesListRowData = new LineGuaranteesList(formGroupArray["LineGuaranteesList"]);
this._loanLinesCreation = new LoanLinesCreation();
this._loansLineGuarantee = new LoansLineGuarantee(formGroupArray["LoansLineGuarantee"]);
this._validationProcedure = new ValidationProcedure();
}
public set LineGuaranteesAssociatedListRowData(entity: any) {
this._lineGuaranteesAssociatedListRowData = entity;
}
public get LineGuaranteesAssociatedListRowData() {
return this._lineGuaranteesAssociatedListRowData;
}
public set LineGuaranteesListRowData(entity: any) {
this._lineGuaranteesListRowData = entity;
}
public get LineGuaranteesListRowData() {
return this._lineGuaranteesListRowData;
}
public set LoanLinesCreation(valores: any) {
this._loanLinesCreation = valores;
}
public get LoanLinesCreation(): any {
return this._loanLinesCreation;
}
public set LoansLineGuarantee(valores: any) {
this._loansLineGuarantee = CobisDesignerUtil.getEntityData(this._loansLineGuarantee, valores);
}
public get LoansLineGuarantee():LoansLineGuarantee{
return this._loansLineGuarantee;
}
public set ValidationProcedure(valores: any) {
this._validationProcedure = valores;
}
public get ValidationProcedure(): any {
return this._validationProcedure;
}
}