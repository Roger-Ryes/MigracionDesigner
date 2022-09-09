//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022

import { CobisDesignerUtil, ConstantsApi, VisualValidationTypeEnum } from "cobis-designer";
import { CobisCommonsService } from 'cobis-commons';
import {FormBuilder, FormGroup,ValidatorFn, Validators} from "@angular/forms";
import { of } from 'rxjs';
import {
CobisGroupBoxModel,
CobisCheckBoxModel,
CobisDateFieldModel,
CobisDateTimeFieldModel,
CobisMaskedTextBoxModel,
CobisNumericInputBoxModel,
CobisNumericInputButtonModel,
CobisRadioButtonListModel,
CobisTextAreaModel,
CobisSpacerModel,
CobisSeparatorModel,
CobisCompositevaModel,
CobisTextInputBoxModel,
CobisTextInputButtonModel,
CobisTimePickerModel,
CobisDropDownListModel,
CobisFileUploadModel,
CobisGridModel,
CobisButtonModel,
CobisCollapsibleContainerModel,
CobisCollapsibleItemModel,
CobisTabbedLayoutContainerModel,
CobisTabbedLayoutTabModel,
CobisControlModel,
CobisTextLabelModel,
LayoutConstants,
DropDownListValidators,
CobisMultiSelectModel,
CustomValidators,
ComplexConstants,
FilterData,
FilterType,
Util,
CommonsConstants,
PositionTab,
CustomValidatorOperator,
TextCaseOptions,
ControlType
} from "cobis-designer-controls";
export class ViewState {
public T_LNSPRDNBKFOTI_411!:FormGroup;
public VC_STATUSCHVI_933411:CobisGroupBoxModel = new CobisGroupBoxModel();
public uploaders: any;
public G_STATUSCASV_461293 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_STATUSCEVM_186293 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_STATUSCMEA_932293 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_STATUSCAEN_980293 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_STATUSCESH_582293 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_STATUSCIEM_111293 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_STATUSCIGG_793293 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_TP50_URT26: CobisGridModel = new CobisGridModel();
public VA_CODCLIENTZHOTEY_615293: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_OPERATIONPFEVYE_478293: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_NUMPROCEDURESSS_610293: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_OFFICEOKJCKNOJM_266293: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CODCURRENCYNEWR_137293: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DISBURSEMENTETD_259293: CobisDateFieldModel = new CobisDateFieldModel();
public VA_STATESICWPQOPFM_485293: CobisDropDownListModel = new CobisDropDownListModel();
public VA_MIGRATEDOPERIAA_938293: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TYPEFPEZUZQRCCT_308293: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AVANCESEARCHXGS_321293: CobisCheckBoxModel = new CobisCheckBoxModel();
public Spacer2596: CobisSpacerModel = new CobisSpacerModel();
public Spacer1973: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONUSCBRTC_509293: CobisButtonModel = new CobisButtonModel();
public VA_DESCSTATUSKOPMT_184293: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer2476: CobisSpacerModel = new CobisSpacerModel();
public VA_ARCHIVOEWNXRMQG_617293: CobisFileUploadModel = new CobisFileUploadModel();
public VA_SELECCIONARTOOD_122293: CobisCheckBoxModel = new CobisCheckBoxModel();
public CM_TLNSPRDN_B0D: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRDN_TRO: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_STATUSCHVI_933411.id="VC_STATUSCHVI_933411";
this.VC_STATUSCHVI_933411.name="StatusChangeMassiveForm";
this.VC_STATUSCHVI_933411.colSpan=1;
this.VC_STATUSCHVI_933411.columns=1;
this.VC_STATUSCHVI_933411.enabled=ConstantsApi.mode.All;
this.G_STATUSCASV_461293.id="G_STATUSCASV_461293";
this.G_STATUSCASV_461293.name="GroupLayout1689";
this.G_STATUSCASV_461293.columns=1;
this.G_STATUSCASV_461293.childrenGroups = ["G_STATUSCEVM_186293","G_STATUSCMEA_932293","G_STATUSCIEM_111293","G_STATUSCIGG_793293"];
this.G_STATUSCASV_461293.colSpan=1;
this.G_STATUSCASV_461293.enabled=ConstantsApi.mode.All;
this.G_STATUSCASV_461293.visible=ConstantsApi.mode.All;
this.G_STATUSCEVM_186293.id="G_STATUSCEVM_186293";
this.G_STATUSCEVM_186293.name="Group2156";
this.G_STATUSCEVM_186293.columns=12;
this.G_STATUSCEVM_186293.labelOrientation="Top";
this.G_STATUSCEVM_186293.colSpan=1;
this.G_STATUSCEVM_186293.enabled=ConstantsApi.mode.All;
this.G_STATUSCEVM_186293.visible=ConstantsApi.mode.All;
this.G_STATUSCEVM_186293.attList = ["numIdentification","operation","numProcedures","office","codCurrency","disbursementDate","state","migratedOperation","type","avanceSearch"];
this.G_STATUSCMEA_932293.id="G_STATUSCMEA_932293";
this.G_STATUSCMEA_932293.name="GroupLayout2473";
this.G_STATUSCMEA_932293.columns=2;
this.G_STATUSCMEA_932293.childrenGroups = ["G_STATUSCAEN_980293","G_STATUSCESH_582293"];
this.G_STATUSCMEA_932293.colSpan=1;
this.G_STATUSCMEA_932293.enabled=ConstantsApi.mode.All;
this.G_STATUSCMEA_932293.visible=ConstantsApi.mode.All;
this.G_STATUSCAEN_980293.id="G_STATUSCAEN_980293";
this.G_STATUSCAEN_980293.name="Group2307";
this.G_STATUSCAEN_980293.columns=12;
this.G_STATUSCAEN_980293.labelOrientation="Top";
this.G_STATUSCAEN_980293.colSpan=1;
this.G_STATUSCAEN_980293.enabled=ConstantsApi.mode.All;
this.G_STATUSCAEN_980293.visible=ConstantsApi.mode.All;
this.G_STATUSCAEN_980293.attList = ["descStatus"];
this.G_STATUSCESH_582293.id="G_STATUSCESH_582293";
this.G_STATUSCESH_582293.name="Group2586";
this.G_STATUSCESH_582293.columns=12;
this.G_STATUSCESH_582293.labelOrientation="Top";
this.G_STATUSCESH_582293.colSpan=1;
this.G_STATUSCESH_582293.enabled=ConstantsApi.mode.All;
this.G_STATUSCESH_582293.visible=ConstantsApi.mode.All;
this.G_STATUSCESH_582293.attList = ["archivo"];
this.G_STATUSCIEM_111293.id="G_STATUSCIEM_111293";
this.G_STATUSCIEM_111293.name="Group1614";
this.G_STATUSCIEM_111293.columns=12;
this.G_STATUSCIEM_111293.labelOrientation="Top";
this.G_STATUSCIEM_111293.colSpan=1;
this.G_STATUSCIEM_111293.enabled=ConstantsApi.mode.All;
this.G_STATUSCIEM_111293.visible=ConstantsApi.mode.All;
this.G_STATUSCIEM_111293.attList = ["seleccionarTodo"];
this.G_STATUSCIGG_793293.id="G_STATUSCIGG_793293";
this.G_STATUSCIGG_793293.name="Group2299";
this.G_STATUSCIGG_793293.columns=1;
this.G_STATUSCIGG_793293.labelOrientation="Top";
this.G_STATUSCIGG_793293.colSpan=1;
this.G_STATUSCIGG_793293.enabled=ConstantsApi.mode.All;
this.G_STATUSCIGG_793293.visible=ConstantsApi.mode.All;
this.G_STATUSCIGG_793293.attList = ["seleccion","desOperationType","loanBankID","clientCode","client","amount","state","currency","numProcedure","descriptionMistake","disbursementDate","balanceOperation","expirationDate","answerOut","migratedOperation","specialAdjust","lastProcessDate","pastDueBalance","product","officer","office","previousOption","answList","group","seqGrid","concessionDate","typeClass","sequential","isDisbursment","operation","creditLine","process","lote","type","categoryGroup"];
this.CM_TLNSPRDN_B0D.id = "CM_TLNSPRDN_B0D";
this.CM_TLNSPRDN_B0D.name = "Command1";
this.CM_TLNSPRDN_B0D.causesValidation=true;
this.CM_TLNSPRDN_B0D.submitOnEnter=false;
this.CM_TLNSPRDN_B0D.setFocus=false;
this.CM_TLNSPRDN_B0D.close=false;
this.CM_TLNSPRDN_B0D.label = cobis.translate("LNSPR.LBL_LNSPR_PROCESARR_13459");
this.CM_TLNSPRDN_B0D.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRDN_B0D.visible= ConstantsApi.mode.All;
this.CM_TLNSPRDN_TRO.id = "CM_TLNSPRDN_TRO";
this.CM_TLNSPRDN_TRO.name = "Command2";
this.CM_TLNSPRDN_TRO.causesValidation=false;
this.CM_TLNSPRDN_TRO.submitOnEnter=false;
this.CM_TLNSPRDN_TRO.setFocus=false;
this.CM_TLNSPRDN_TRO.close=false;
this.CM_TLNSPRDN_TRO.label = cobis.translate("LNSPR.LBL_LOANS_LIMPIARVF_75606");
this.CM_TLNSPRDN_TRO.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRDN_TRO.visible= ConstantsApi.mode.All;
this.VA_CODCLIENTZHOTEY_615293.id = "VA_CODCLIENTZHOTEY_615293";
this.VA_CODCLIENTZHOTEY_615293.name = "numIdentification";
this.VA_CODCLIENTZHOTEY_615293.label = cobis.translate("LNSPR.LBL_LNSPR_CODCLIETT_20856");
this.VA_CODCLIENTZHOTEY_615293.entity = "LoanSearchFilter";
this.VA_CODCLIENTZHOTEY_615293.attribute = "numIdentification";
this.VA_CODCLIENTZHOTEY_615293.colSpan = 3;
this.VA_CODCLIENTZHOTEY_615293.format = "";
this.VA_CODCLIENTZHOTEY_615293.maxlength= 10;
this.VA_CODCLIENTZHOTEY_615293.readOnly = ConstantsApi.mode.Query;
this.VA_CODCLIENTZHOTEY_615293.enabled = ConstantsApi.mode.All;
this.VA_CODCLIENTZHOTEY_615293.visible= ConstantsApi.mode.All;
this.VA_CODCLIENTZHOTEY_615293.inputRestrictionValidators = { lettersAndNumbers: true};
this.VA_OPERATIONPFEVYE_478293.label = cobis.translate("LNSPR.LBL_LNSPR_NUMPRSTOO_30963");
this.VA_OPERATIONPFEVYE_478293.entity = "LoanSearchFilter";
this.VA_OPERATIONPFEVYE_478293.attribute = "operation";
this.VA_OPERATIONPFEVYE_478293.maxlength= 15;
this.VA_OPERATIONPFEVYE_478293.textCase= TextCaseOptions.NONE;
this.VA_OPERATIONPFEVYE_478293.name="operation";
this.VA_OPERATIONPFEVYE_478293.id="VA_OPERATIONPFEVYE_478293";
this.VA_OPERATIONPFEVYE_478293.colSpan=3;
this.VA_OPERATIONPFEVYE_478293.withoutLabel = false;
this.VA_OPERATIONPFEVYE_478293.readOnly = ConstantsApi.mode.Query;
this.VA_OPERATIONPFEVYE_478293.enabled = ConstantsApi.mode.All;
this.VA_OPERATIONPFEVYE_478293.visible= ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_610293.label = cobis.translate("LNSPR.LBL_LNSPR_NUMTRMITE_20261");
this.VA_NUMPROCEDURESSS_610293.entity = "LoanSearchFilter";
this.VA_NUMPROCEDURESSS_610293.attribute = "numProcedures";
this.VA_NUMPROCEDURESSS_610293.maxlength= 10;
this.VA_NUMPROCEDURESSS_610293.textCase= TextCaseOptions.NONE;
this.VA_NUMPROCEDURESSS_610293.name="numProcedures";
this.VA_NUMPROCEDURESSS_610293.id="VA_NUMPROCEDURESSS_610293";
this.VA_NUMPROCEDURESSS_610293.colSpan=3;
this.VA_NUMPROCEDURESSS_610293.withoutLabel = false;
this.VA_NUMPROCEDURESSS_610293.readOnly = ConstantsApi.mode.Query;
this.VA_NUMPROCEDURESSS_610293.enabled = ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_610293.visible= ConstantsApi.mode.All;
this.VA_OFFICEOKJCKNOJM_266293.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAGV_33565");
this.VA_OFFICEOKJCKNOJM_266293.blankOption=true;
this.VA_OFFICEOKJCKNOJM_266293.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_OFFICEOKJCKNOJM_266293.entity = "LoanSearchFilter";
this.VA_OFFICEOKJCKNOJM_266293.attribute = "office";
this.VA_OFFICEOKJCKNOJM_266293.textField = "value";
this.VA_OFFICEOKJCKNOJM_266293.valueField = "code";
this.VA_OFFICEOKJCKNOJM_266293.showId= true;
this.VA_OFFICEOKJCKNOJM_266293.name="office";
this.VA_OFFICEOKJCKNOJM_266293.id="VA_OFFICEOKJCKNOJM_266293";
this.VA_OFFICEOKJCKNOJM_266293.colSpan=3;
this.VA_OFFICEOKJCKNOJM_266293.withoutLabel = false;
this.VA_OFFICEOKJCKNOJM_266293.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICEOKJCKNOJM_266293.enabled = ConstantsApi.mode.All;
this.VA_OFFICEOKJCKNOJM_266293.visible= ConstantsApi.mode.All;
this.VA_CODCURRENCYNEWR_137293.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_CODCURRENCYNEWR_137293.blankOption=true;
this.VA_CODCURRENCYNEWR_137293.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_CODCURRENCYNEWR_137293.entity = "LoanSearchFilter";
this.VA_CODCURRENCYNEWR_137293.attribute = "codCurrency";
this.VA_CODCURRENCYNEWR_137293.textField = "value";
this.VA_CODCURRENCYNEWR_137293.valueField = "code";
this.VA_CODCURRENCYNEWR_137293.showId= true;
this.VA_CODCURRENCYNEWR_137293.name="codCurrency";
this.VA_CODCURRENCYNEWR_137293.id="VA_CODCURRENCYNEWR_137293";
this.VA_CODCURRENCYNEWR_137293.colSpan=3;
this.VA_CODCURRENCYNEWR_137293.withoutLabel = false;
this.VA_CODCURRENCYNEWR_137293.readOnly = ConstantsApi.mode.Query;
this.VA_CODCURRENCYNEWR_137293.enabled = ConstantsApi.mode.All;
this.VA_CODCURRENCYNEWR_137293.visible= ConstantsApi.mode.All;
this.VA_DISBURSEMENTETD_259293.label = cobis.translate("LNSPR.LBL_LNSPR_FECHADEBE_42043");
this.VA_DISBURSEMENTETD_259293.entity = "LoanSearchFilter";
this.VA_DISBURSEMENTETD_259293.attribute = "disbursementDate";
this.VA_DISBURSEMENTETD_259293.name="disbursementDate";
this.VA_DISBURSEMENTETD_259293.id="VA_DISBURSEMENTETD_259293";
this.VA_DISBURSEMENTETD_259293.colSpan=3;
this.VA_DISBURSEMENTETD_259293.withoutLabel = false;
this.VA_DISBURSEMENTETD_259293.readOnly = ConstantsApi.mode.Query;
this.VA_DISBURSEMENTETD_259293.enabled = ConstantsApi.mode.All;
this.VA_DISBURSEMENTETD_259293.visible= ConstantsApi.mode.All;
this.VA_STATESICWPQOPFM_485293.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADOPEM_54793");
this.VA_STATESICWPQOPFM_485293.blankOption=true;
this.VA_STATESICWPQOPFM_485293.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_STATESICWPQOPFM_485293.entity = "LoanSearchFilter";
this.VA_STATESICWPQOPFM_485293.attribute = "state";
this.VA_STATESICWPQOPFM_485293.textField = "state";
this.VA_STATESICWPQOPFM_485293.valueField = "code";
this.VA_STATESICWPQOPFM_485293.showId= true;
this.VA_STATESICWPQOPFM_485293.name="state";
this.VA_STATESICWPQOPFM_485293.id="VA_STATESICWPQOPFM_485293";
this.VA_STATESICWPQOPFM_485293.colSpan=3;
this.VA_STATESICWPQOPFM_485293.withoutLabel = false;
this.VA_STATESICWPQOPFM_485293.readOnly = ConstantsApi.mode.Query;
this.VA_STATESICWPQOPFM_485293.enabled = ConstantsApi.mode.All;
this.VA_STATESICWPQOPFM_485293.visible= ConstantsApi.mode.All;
this.VA_MIGRATEDOPERIAA_938293.label = cobis.translate("LNSPR.LBL_LNSPR_PRSTAMOIO_81821");
this.VA_MIGRATEDOPERIAA_938293.entity = "LoanSearchFilter";
this.VA_MIGRATEDOPERIAA_938293.attribute = "migratedOperation";
this.VA_MIGRATEDOPERIAA_938293.maxlength= 10;
this.VA_MIGRATEDOPERIAA_938293.textCase= TextCaseOptions.NONE;
this.VA_MIGRATEDOPERIAA_938293.name="migratedOperation";
this.VA_MIGRATEDOPERIAA_938293.id="VA_MIGRATEDOPERIAA_938293";
this.VA_MIGRATEDOPERIAA_938293.colSpan=3;
this.VA_MIGRATEDOPERIAA_938293.withoutLabel = false;
this.VA_MIGRATEDOPERIAA_938293.readOnly = ConstantsApi.mode.Query;
this.VA_MIGRATEDOPERIAA_938293.enabled = ConstantsApi.mode.All;
this.VA_MIGRATEDOPERIAA_938293.visible= ConstantsApi.mode.All;
this.VA_TYPEFPEZUZQRCCT_308293.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERN_51275");
this.VA_TYPEFPEZUZQRCCT_308293.blankOption=true;
this.VA_TYPEFPEZUZQRCCT_308293.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_TYPEFPEZUZQRCCT_308293.entity = "LoanSearchFilter";
this.VA_TYPEFPEZUZQRCCT_308293.attribute = "type";
this.VA_TYPEFPEZUZQRCCT_308293.textField = "value";
this.VA_TYPEFPEZUZQRCCT_308293.valueField = "code";
this.VA_TYPEFPEZUZQRCCT_308293.showId= true;
this.VA_TYPEFPEZUZQRCCT_308293.name="type";
this.VA_TYPEFPEZUZQRCCT_308293.id="VA_TYPEFPEZUZQRCCT_308293";
this.VA_TYPEFPEZUZQRCCT_308293.colSpan=3;
this.VA_TYPEFPEZUZQRCCT_308293.withoutLabel = false;
this.VA_TYPEFPEZUZQRCCT_308293.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEFPEZUZQRCCT_308293.enabled = ConstantsApi.mode.All;
this.VA_TYPEFPEZUZQRCCT_308293.visible= ConstantsApi.mode.All;
this.VA_AVANCESEARCHXGS_321293.id = "VA_AVANCESEARCHXGS_321293";
this.VA_AVANCESEARCHXGS_321293.name = "avanceSearch";
this.VA_AVANCESEARCHXGS_321293.label = cobis.translate("LNSPR.LBL_LNSPR_CRITERIOO_80936");
this.VA_AVANCESEARCHXGS_321293.entity = "LoanSearchFilter";
this.VA_AVANCESEARCHXGS_321293.attribute = "avanceSearch";
this.VA_AVANCESEARCHXGS_321293.colSpan = 3;
this.VA_AVANCESEARCHXGS_321293.withoutLabel = false;
this.VA_AVANCESEARCHXGS_321293.readOnly =ConstantsApi.mode.Query;
this.VA_AVANCESEARCHXGS_321293.enabled = ConstantsApi.mode.All;
this.VA_AVANCESEARCHXGS_321293.visible= ConstantsApi.mode.All;
this.Spacer2596.id = "Spacer2596";
this.Spacer2596.name = "Spacer2596";
this.Spacer2596.colSpan = 3;
this.Spacer2596.visible= ConstantsApi.mode.All;
this.Spacer1973.id = "Spacer1973";
this.Spacer1973.name = "Spacer1973";
this.Spacer1973.colSpan = 3;
this.Spacer1973.visible= ConstantsApi.mode.All;
this.VA_VABUTTONUSCBRTC_509293.id = "VA_VABUTTONUSCBRTC_509293";
this.VA_VABUTTONUSCBRTC_509293.name = "VA_VABUTTONUSCBRTC_509293";
this.VA_VABUTTONUSCBRTC_509293.label = cobis.translate("LNSPR.LBL_LNSPR_BUSCARKBJ_59373");
this.VA_VABUTTONUSCBRTC_509293.colSpan = 3;
this.VA_VABUTTONUSCBRTC_509293.withoutLabel = false;
this.VA_VABUTTONUSCBRTC_509293.causesValidation=false;
this.VA_VABUTTONUSCBRTC_509293.submitOnEnter=false;
this.VA_VABUTTONUSCBRTC_509293.setFocus=false;
this.VA_VABUTTONUSCBRTC_509293.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONUSCBRTC_509293.visible= ConstantsApi.mode.All;
this.VA_VABUTTONUSCBRTC_509293.icon = "fa fa-search";
this.VA_DESCSTATUSKOPMT_184293.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADONVO_87517");
this.VA_DESCSTATUSKOPMT_184293.blankOption=true;
this.VA_DESCSTATUSKOPMT_184293.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_DESCSTATUSKOPMT_184293.entity = "StatesAssetsLoan";
this.VA_DESCSTATUSKOPMT_184293.attribute = "descStatus";
this.VA_DESCSTATUSKOPMT_184293.textField = "state";
this.VA_DESCSTATUSKOPMT_184293.valueField = "code";
this.VA_DESCSTATUSKOPMT_184293.showId= true;
this.VA_DESCSTATUSKOPMT_184293.name="descStatus";
this.VA_DESCSTATUSKOPMT_184293.id="VA_DESCSTATUSKOPMT_184293";
this.VA_DESCSTATUSKOPMT_184293.colSpan=6;
this.VA_DESCSTATUSKOPMT_184293.withoutLabel = false;
this.VA_DESCSTATUSKOPMT_184293.readOnly = ConstantsApi.mode.Query;
this.VA_DESCSTATUSKOPMT_184293.enabled = ConstantsApi.mode.All;
this.VA_DESCSTATUSKOPMT_184293.visible= ConstantsApi.mode.All;
this.VA_DESCSTATUSKOPMT_184293.required = true;
this.VA_DESCSTATUSKOPMT_184293.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DESCSTATUSKOPMT_184293.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.Spacer2476.id = "Spacer2476";
this.Spacer2476.name = "Spacer2476";
this.Spacer2476.colSpan = 6;
this.Spacer2476.visible= ConstantsApi.mode.All;
this.VA_ARCHIVOEWNXRMQG_617293.id = "VA_ARCHIVOEWNXRMQG_617293";
this.VA_ARCHIVOEWNXRMQG_617293.name = "archivo";
this.VA_ARCHIVOEWNXRMQG_617293.label = cobis.translate("LNSPR.LBL_LOANS_CARGARAVO_29365");
this.VA_ARCHIVOEWNXRMQG_617293.entity = "LoanSearchFilter";
this.VA_ARCHIVOEWNXRMQG_617293.attribute = "archivo";
this.VA_ARCHIVOEWNXRMQG_617293.colSpan = 6;
this.VA_ARCHIVOEWNXRMQG_617293.withoutLabel = false;
this.VA_ARCHIVOEWNXRMQG_617293.readOnly =ConstantsApi.mode.Query;
this.VA_ARCHIVOEWNXRMQG_617293.enabled = ConstantsApi.mode.All;
this.VA_ARCHIVOEWNXRMQG_617293.visible= ConstantsApi.mode.All;
this.VA_SELECCIONARTOOD_122293.id = "VA_SELECCIONARTOOD_122293";
this.VA_SELECCIONARTOOD_122293.name = "seleccionarTodo";
this.VA_SELECCIONARTOOD_122293.label = cobis.translate("LNSPR.LBL_LNSPR_SELECCIER_50249");
this.VA_SELECCIONARTOOD_122293.entity = "LoanSearchFilter";
this.VA_SELECCIONARTOOD_122293.attribute = "seleccionarTodo";
this.VA_SELECCIONARTOOD_122293.colSpan = 3;
this.VA_SELECCIONARTOOD_122293.withoutLabel = false;
this.VA_SELECCIONARTOOD_122293.readOnly =ConstantsApi.mode.Query;
this.VA_SELECCIONARTOOD_122293.enabled = ConstantsApi.mode.All;
this.VA_SELECCIONARTOOD_122293.visible= ConstantsApi.mode.All;
this.QV_TP50_URT26.pageSize=10;
this.QV_TP50_URT26.id='QV_TP50_URT26';
this.QV_TP50_URT26.name='QV_TP50_URT26';
this.QV_TP50_URT26.pageable=true;
this.QV_TP50_URT26.sortable=false;
this.QV_TP50_URT26.resizable=true;
this.QV_TP50_URT26.scrollable=true
this.QV_TP50_URT26.confirmRowDeletion=false;
this.QV_TP50_URT26.exportToExcel=true;
this.QV_TP50_URT26.exportToPdf=false;
this.QV_TP50_URT26.height=0;
this.QV_TP50_URT26.filterableColumns=false;
this.QV_TP50_URT26.entityName='LoanList';
this.QV_TP50_URT26.appendRecords=false;
this.QV_TP50_URT26.rowDetail=false;
this.QV_TP50_URT26.columnMenu = true;
this.QV_TP50_URT26.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_TP50_URT26.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_TP50_URT26.columns = Util.filterByMode(this.mode, [
{
id : "VA_CHECKBOXDANDSPV_892293",
label : cobis.translate('LNSPR.LBL_LOANS_SELECCIOE_40160'),
field : 'seleccion',
visible : ConstantsApi.mode.All,
type : 'template',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_CHECKBOXDANDSPV_892293',
name :'seleccion',
withoutLabel : true,
attribute : 'seleccion',
entity : 'LoanList',
readonly : ConstantsApi.mode.Query,
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
disabled : false,
trueValue: true,
falseValue: false,
}
},
{
id : "VA_TEXTINPUTBOXZSM_763293",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOPREMM_37747'),
field : 'desOperationType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZSM_763293',
name :'desOperationType',
withoutLabel : true,
attribute : 'desOperationType',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHFD_192293",
label : cobis.translate('LNSPR.LBL_LNSPR_NUMPRESTO_78484'),
field : 'loanBankID',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHFD_192293',
name :'loanBankID',
withoutLabel : true,
attribute : 'loanBankID',
entity : 'LoanList',
maxlength: 24,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBLY_505293",
label : cobis.translate('LNSPR.LBL_LNSPR_CODCLIETT_20856'),
field : 'clientCode',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBLY_505293',
name :'clientCode',
withoutLabel : true,
attribute : 'clientCode',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGED_407293",
label : cobis.translate('LNSPR.LBL_LNSPR_NOMBRECNI_63306'),
field : 'client',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGED_407293',
name :'client',
withoutLabel : true,
attribute : 'client',
entity : 'LoanList',
maxlength: 30,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDJF_550293",
label : cobis.translate('LNSPR.LBL_LNSPR_MONTOPREO_81448'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDJF_550293',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRKM_748293",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRKM_748293',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXELE_418293",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'currency',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXELE_418293',
name :'currency',
withoutLabel : true,
attribute : 'currency',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVHW_271293",
label : cobis.translate('LNSPR.LBL_LNSPR_NUMTRAMEE_83198'),
field : 'numProcedure',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVHW_271293',
name :'numProcedure',
withoutLabel : true,
attribute : 'numProcedure',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRUJ_835293",
label : cobis.translate('LNSPR.LBL_LNSPR_ERRORAWHP_83580'),
field : 'descriptionMistake',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRUJ_835293',
name :'descriptionMistake',
withoutLabel : true,
attribute : 'descriptionMistake',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRDNBKFOTI_411 = this.formBuilder.group({
LoanSearchFilter: this.formBuilder.group({
numIdentification:[{value: null, disabled: !this.VA_CODCLIENTZHOTEY_615293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODCLIENTZHOTEY_615293.validationFunctions!)],
operation:[{value: null, disabled: !this.VA_OPERATIONPFEVYE_478293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPERATIONPFEVYE_478293.validationFunctions!)],
numProcedures:[{value: null, disabled: !this.VA_NUMPROCEDURESSS_610293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMPROCEDURESSS_610293.validationFunctions!)],
office:[{value: null, disabled: !this.VA_OFFICEOKJCKNOJM_266293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICEOKJCKNOJM_266293.validationFunctions!)],
codCurrency:[{value: null, disabled: !this.VA_CODCURRENCYNEWR_137293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODCURRENCYNEWR_137293.validationFunctions!)],
disbursementDate:[{value: null, disabled: !this.VA_DISBURSEMENTETD_259293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DISBURSEMENTETD_259293.validationFunctions!)],
state:[{value: null, disabled: !this.VA_STATESICWPQOPFM_485293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATESICWPQOPFM_485293.validationFunctions!)],
migratedOperation:[{value: null, disabled: !this.VA_MIGRATEDOPERIAA_938293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MIGRATEDOPERIAA_938293.validationFunctions!)],
type:[{value: null, disabled: !this.VA_TYPEFPEZUZQRCCT_308293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEFPEZUZQRCCT_308293.validationFunctions!)],
avanceSearch:[{value: false, disabled: !this.VA_AVANCESEARCHXGS_321293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AVANCESEARCHXGS_321293.validationFunctions!)],
seleccionarTodo:[{value: false, disabled: !this.VA_SELECCIONARTOOD_122293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SELECCIONARTOOD_122293.validationFunctions!)],
condition:[null],
lastProcessDate:[null],
next:[null],
archivoSubido:[null],
mode:[null],
sequential:[null],
codClient:[null],
credit:[null],
group:[null],
archivo:[null],
product:[null],
isGroup:[null],
category:[null],
classLoan:[null],
daysPastDue:[null],
untilDate:[null],
isDisbursment:[null],
readjDate:[null],
oficial:[null],
nextReadjDate:[null],
status:[null],
historical:[null],
}
),
LoanList: this.formBuilder.group({
seleccion:[{value: false, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_CHECKBOXDANDSPV_892293')],
desOperationType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXZSM_763293')],
loanBankID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXHFD_192293')],
clientCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXBLY_505293')],
client:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXGED_407293')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXDJF_550293')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXRKM_748293')],
currency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXELE_418293')],
numProcedure:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXVHW_271293')],
descriptionMistake:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXRUJ_835293')],
disbursementDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_DATEFIELDBJADME_417293')],
balanceOperation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXMII_142293')],
expirationDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXSYN_901293')],
answerOut:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXMWU_426293')],
migratedOperation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXEBW_670293')],
specialAdjust:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXAIU_494293')],
lastProcessDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXSTD_964293')],
pastDueBalance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXPGO_294293')],
product:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXHBN_215293')],
officer:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXQDM_301293')],
office:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXLAY_437293')],
previousOption:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXNOG_130293')],
answList:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXVKK_878293')],
group:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXVIE_725293')],
seqGrid:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXFVX_602293')],
concessionDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXJKU_978293')],
typeClass:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXBKF_421293')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXEKP_363293')],
isDisbursment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXBLT_685293')],
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXELM_645293')],
creditLine:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXGOB_291293')],
process:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXTBB_163293')],
lote:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXIPK_211293')],
type:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXDEC_769293')],
categoryGroup:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TP50_URT26.columns,'VA_TEXTINPUTBOXNXZ_792293')],
oficial:[null],
credit:[null],
untilDate:[null],
numIdentification:[null],
condition:[null],
currencyName:[null],
historical:[null],
daysPastDue:[null],
}
),
StatesAssetsLoan: this.formBuilder.group({
descStatus:[{value: null, disabled: !this.VA_DESCSTATUSKOPMT_184293.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DESCSTATUSKOPMT_184293.validationFunctions!)],
code:[null],
}
),
});
this.uploaders = {
VA_ARCHIVOEWNXRMQG_617293: this.VA_ARCHIVOEWNXRMQG_617293
}
}
}