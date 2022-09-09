import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { ErrorMassivePayments } from "../../../../entities/ErrorMassivePayments";
import { LoanList } from "../../../../entities/LoanList";
import { LoanSearchFilter } from "../../../../entities/LoanSearchFilter";
import { MassiveCommissions } from "../../../../entities/MassiveCommissions";
import { MassiveCommissionsMistakes } from "../../../../entities/MassiveCommissionsMistakes";
import { MassivePayments } from "../../../../entities/MassivePayments";
import { ModalReferentialEntity } from "../../../../entities/ModalReferentialEntity";
import { ReadjustmenMList } from "../../../../entities/ReadjustmenMList";
import { ReadjustConcat } from "../../../../entities/ReadjustConcat";
import { ReadjustmentMEntity } from "../../../../entities/ReadjustmentMEntity";
export class Model {
private _errorMassivePayments!: any;
public LoanList!: any;
private _loanListRowData!: LoanList;
private _loanSearchFilter!: LoanSearchFilter;
public MassiveCommissions!: any;
private _massiveCommissionsRowData!: MassiveCommissions;
private _massiveCommissionsMistakes!: any;
public MassivePayments!: any;
private _massivePaymentsRowData!: MassivePayments;
private _modalReferentialEntity!: any;
public ReadjustmenMList!: any;
private _readjustmenMListRowData!: ReadjustmenMList;
private _readjustConcat!: any;
private _readjustmentMEntity!: ReadjustmentMEntity;
constructor(private formGroupArray: any) {
this._errorMassivePayments = new ErrorMassivePayments();
this.LoanList = [];
this._loanListRowData = new LoanList(formGroupArray["LoanList"]);
this._loanSearchFilter = new LoanSearchFilter(formGroupArray["LoanSearchFilter"]);
this.MassiveCommissions = [];
this._massiveCommissionsRowData = new MassiveCommissions(formGroupArray["MassiveCommissions"]);
this._massiveCommissionsMistakes = new MassiveCommissionsMistakes();
this.MassivePayments = [];
this._massivePaymentsRowData = new MassivePayments(formGroupArray["MassivePayments"]);
this._modalReferentialEntity = new ModalReferentialEntity();
this.ReadjustmenMList = [];
this._readjustmenMListRowData = new ReadjustmenMList(formGroupArray["ReadjustmenMList"]);
this._readjustConcat = new ReadjustConcat();
this._readjustmentMEntity = new ReadjustmentMEntity(formGroupArray["ReadjustmentMEntity"]);
}
public set ErrorMassivePayments(valores: any) {
this._errorMassivePayments = valores;
}
public get ErrorMassivePayments(): any {
return this._errorMassivePayments;
}
public set LoanListRowData(entity: any) {
this._loanListRowData = entity;
}
public get LoanListRowData() {
return this._loanListRowData;
}
public set LoanSearchFilter(valores: any) {
this._loanSearchFilter = CobisDesignerUtil.getEntityData(this._loanSearchFilter, valores);
}
public get LoanSearchFilter():LoanSearchFilter{
return this._loanSearchFilter;
}
public set MassiveCommissionsRowData(entity: any) {
this._massiveCommissionsRowData = entity;
}
public get MassiveCommissionsRowData() {
return this._massiveCommissionsRowData;
}
public set MassiveCommissionsMistakes(valores: any) {
this._massiveCommissionsMistakes = valores;
}
public get MassiveCommissionsMistakes(): any {
return this._massiveCommissionsMistakes;
}
public set MassivePaymentsRowData(entity: any) {
this._massivePaymentsRowData = entity;
}
public get MassivePaymentsRowData() {
return this._massivePaymentsRowData;
}
public set ModalReferentialEntity(valores: any) {
this._modalReferentialEntity = valores;
}
public get ModalReferentialEntity(): any {
return this._modalReferentialEntity;
}
public set ReadjustmenMListRowData(entity: any) {
this._readjustmenMListRowData = entity;
}
public get ReadjustmenMListRowData() {
return this._readjustmenMListRowData;
}
public set ReadjustConcat(valores: any) {
this._readjustConcat = valores;
}
public get ReadjustConcat(): any {
return this._readjustConcat;
}
public set ReadjustmentMEntity(valores: any) {
this._readjustmentMEntity = CobisDesignerUtil.getEntityData(this._readjustmentMEntity, valores);
}
public get ReadjustmentMEntity():ReadjustmentMEntity{
return this._readjustmentMEntity;
}
}