import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AccountStatusTec } from "../../../../entities/AccountStatusTec";
import { AccountStatusTecFilter } from "../../../../entities/AccountStatusTecFilter";
import { AmortizationTableData } from "../../../../entities/AmortizationTableData";
import { AmortizationTableSaving } from "../../../../entities/AmortizationTableSaving";
import { AmortizationTableFilter } from "../../../../entities/AmortizationTableFilter";
import { AmortizationTableBC } from "../../../../entities/AmortizationTableBC";
import { AnexDataHolder } from "../../../../entities/AnexDataHolder";
import { BeneficiarioReporte } from "../../../../entities/BeneficiarioReporte";
import { CartaLiberaRecursosData } from "../../../../entities/CartaLiberaRecursosData";
import { CommissionsAnnex } from "../../../../entities/CommissionsAnnex";
import { ConsentimientoCredito } from "../../../../entities/ConsentimientoCredito";
import { Credit } from "../../../../entities/Credit";
import { FinancialOperationCover } from "../../../../entities/FinancialOperationCover";
import { GeneralAmortizationTable } from "../../../../entities/GeneralAmortizationTable";
import { LoanChildren } from "../../../../entities/LoanChildren";
import { LoanInstancia } from "../../../../entities/LoanInstancia";
import { PrintingDocuments } from "../../../../entities/PrintingDocuments";
import { ReceiptPayment } from "../../../../entities/ReceiptPayment";
import { Deposit } from "../../../../entities/Deposit";
import { Seguros } from "../../../../entities/Seguros";
import { UserContext } from "../../../../entities/UserContext";
export class Model {
private _accountStatusTec!: any;
private _accountStatusTecFilter!: any;
private _amortizationTableData!: any;
private _amortizationTableSaving!: any;
private _amortizationTableFilter!: any;
private _amortizationTableBC!: any;
private _anexDataHolder!: any;
private _beneficiarioReporte!: any;
private _cartaLiberaRecursosData!: any;
private _commissionsAnnex!: any;
private _consentimientoCredito!: any;
private _credit!: any;
private _financialOperationCover!: any;
private _generalAmortizationTable!: any;
private _loanChildren!: any;
private _loanInstancia!: any;
public PrintingDocuments!: any;
private _printingDocumentsRowData!: PrintingDocuments;
private _receiptPayment!: any;
private _deposit!: any;
private _seguros!: any;
private _userContext!: any;
constructor(private formGroupArray: any) {
this._accountStatusTec = new AccountStatusTec();
this._accountStatusTecFilter = new AccountStatusTecFilter();
this._amortizationTableData = new AmortizationTableData();
this._amortizationTableSaving = new AmortizationTableSaving();
this._amortizationTableFilter = new AmortizationTableFilter();
this._amortizationTableBC = new AmortizationTableBC();
this._anexDataHolder = new AnexDataHolder();
this._beneficiarioReporte = new BeneficiarioReporte();
this._cartaLiberaRecursosData = new CartaLiberaRecursosData();
this._commissionsAnnex = new CommissionsAnnex();
this._consentimientoCredito = new ConsentimientoCredito();
this._credit = new Credit();
this._financialOperationCover = new FinancialOperationCover();
this._generalAmortizationTable = new GeneralAmortizationTable();
this._loanChildren = new LoanChildren();
this._loanInstancia = new LoanInstancia();
this.PrintingDocuments = [];
this._printingDocumentsRowData = new PrintingDocuments(formGroupArray["PrintingDocuments"]);
this._receiptPayment = new ReceiptPayment();
this._deposit = new Deposit();
this._seguros = new Seguros();
this._userContext = new UserContext();
}
public set AccountStatusTec(valores: any) {
this._accountStatusTec = valores;
}
public get AccountStatusTec(): any {
return this._accountStatusTec;
}
public set AccountStatusTecFilter(valores: any) {
this._accountStatusTecFilter = valores;
}
public get AccountStatusTecFilter(): any {
return this._accountStatusTecFilter;
}
public set AmortizationTableData(valores: any) {
this._amortizationTableData = valores;
}
public get AmortizationTableData(): any {
return this._amortizationTableData;
}
public set AmortizationTableSaving(valores: any) {
this._amortizationTableSaving = valores;
}
public get AmortizationTableSaving(): any {
return this._amortizationTableSaving;
}
public set AmortizationTableFilter(valores: any) {
this._amortizationTableFilter = valores;
}
public get AmortizationTableFilter(): any {
return this._amortizationTableFilter;
}
public set AmortizationTableBC(valores: any) {
this._amortizationTableBC = valores;
}
public get AmortizationTableBC(): any {
return this._amortizationTableBC;
}
public set AnexDataHolder(valores: any) {
this._anexDataHolder = valores;
}
public get AnexDataHolder(): any {
return this._anexDataHolder;
}
public set BeneficiarioReporte(valores: any) {
this._beneficiarioReporte = valores;
}
public get BeneficiarioReporte(): any {
return this._beneficiarioReporte;
}
public set CartaLiberaRecursosData(valores: any) {
this._cartaLiberaRecursosData = valores;
}
public get CartaLiberaRecursosData(): any {
return this._cartaLiberaRecursosData;
}
public set CommissionsAnnex(valores: any) {
this._commissionsAnnex = valores;
}
public get CommissionsAnnex(): any {
return this._commissionsAnnex;
}
public set ConsentimientoCredito(valores: any) {
this._consentimientoCredito = valores;
}
public get ConsentimientoCredito(): any {
return this._consentimientoCredito;
}
public set Credit(valores: any) {
this._credit = valores;
}
public get Credit(): any {
return this._credit;
}
public set FinancialOperationCover(valores: any) {
this._financialOperationCover = valores;
}
public get FinancialOperationCover(): any {
return this._financialOperationCover;
}
public set GeneralAmortizationTable(valores: any) {
this._generalAmortizationTable = valores;
}
public get GeneralAmortizationTable(): any {
return this._generalAmortizationTable;
}
public set LoanChildren(valores: any) {
this._loanChildren = valores;
}
public get LoanChildren(): any {
return this._loanChildren;
}
public set LoanInstancia(valores: any) {
this._loanInstancia = valores;
}
public get LoanInstancia(): any {
return this._loanInstancia;
}
public set PrintingDocumentsRowData(entity: any) {
this._printingDocumentsRowData = entity;
}
public get PrintingDocumentsRowData() {
return this._printingDocumentsRowData;
}
public set ReceiptPayment(valores: any) {
this._receiptPayment = valores;
}
public get ReceiptPayment(): any {
return this._receiptPayment;
}
public set Deposit(valores: any) {
this._deposit = valores;
}
public get Deposit(): any {
return this._deposit;
}
public set Seguros(valores: any) {
this._seguros = valores;
}
public get Seguros(): any {
return this._seguros;
}
public set UserContext(valores: any) {
this._userContext = valores;
}
public get UserContext(): any {
return this._userContext;
}
}