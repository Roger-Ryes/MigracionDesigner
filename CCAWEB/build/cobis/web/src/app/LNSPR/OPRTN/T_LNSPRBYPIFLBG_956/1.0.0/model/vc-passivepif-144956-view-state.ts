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
public T_LNSPRBYPIFLBG_956!:FormGroup;
public VC_PASSIVEPIF_144956:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PASSIVERIF_136899 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PASSIVEPRT_287899 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_MV07_KFL31: CobisGridModel = new CobisGridModel();
public G_PASSIVENON_766899 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PASSIVEAPR_215899 : CobisCollapsibleContainerModel = new CobisCollapsibleContainerModel();
public G_PASSIVEOLI_739899_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_PASSIVEOLI_739899 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PASSIVEOTA_103899 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_CODEKUNNZDIHWDU_476899: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_FULLNAMEHFSGXTT_914899: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_SPACER1905MVKGU_354899: CobisSpacerModel = new CobisSpacerModel();
public VA_VAVABUTTONTWR88_356899: CobisButtonModel = new CobisButtonModel();
public VA_OPERATIONYWWUDJ_859899: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TYPEOPERATIONNN_137899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_MONEYSNJCKOMHID_471899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AMOUNTFVWTEWBDA_761899: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_AMOUNTAPPROVDEE_937899: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_OFFICIALFUSJDJB_630899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OFFICEFTYXFMUWA_267899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_UBICATIONEIZYDH_113899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CREATIONDATEDVN_632899: CobisDateFieldModel = new CobisDateFieldModel();
public VA_PLAZODESCRIPCNC_494899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PLAZOAJHVDBJBNP_804899: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_EXPIRATIONDAEET_351899: CobisDateFieldModel = new CobisDateFieldModel();
public VA_CREDITLINEGFBUT_718899: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_STATELEDEROPZZD_753899: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_FIRSTDUEDATEVNP_681899: CobisDateFieldModel = new CobisDateFieldModel();
public VA_CREDITORTYPEQDV_936899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CONTRACTNUMBEEE_151899: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_REGISTRATIONUEN_556899: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_DEBTTYPELMRNXVE_296899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AUTHDATEYLPRROK_349899: CobisDateFieldModel = new CobisDateFieldModel();
public VA_AUTHNUMBERRKGNG_331899: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_REPOSITIONJNYRG_258899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SUBFINANCINGPJK_364899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FINANMARKETQOEM_575899: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FACILITYNUMBEER_954899: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_VAVABUTTONWNJI5_490899: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PASSIVEPIF_144956.id="VC_PASSIVEPIF_144956";
this.VC_PASSIVEPIF_144956.name="PassivePortfolioCreation";
this.VC_PASSIVEPIF_144956.colSpan=1;
this.VC_PASSIVEPIF_144956.columns=1;
this.VC_PASSIVEPIF_144956.enabled=ConstantsApi.mode.All;
this.G_PASSIVERIF_136899.id="G_PASSIVERIF_136899";
this.G_PASSIVERIF_136899.name="Group1372";
this.G_PASSIVERIF_136899.columns=6;
this.G_PASSIVERIF_136899.labelOrientation="Top";
this.G_PASSIVERIF_136899.colSpan=1;
this.G_PASSIVERIF_136899.enabled=ConstantsApi.mode.All;
this.G_PASSIVERIF_136899.visible=ConstantsApi.mode.All;
this.G_PASSIVERIF_136899.attList = ["code","fullName"];
this.G_PASSIVEPRT_287899.id="G_PASSIVEPRT_287899";
this.G_PASSIVEPRT_287899.name="Group2503";
this.G_PASSIVEPRT_287899.columns=1;
this.G_PASSIVEPRT_287899.labelOrientation="Top";
this.G_PASSIVEPRT_287899.colSpan=1;
this.G_PASSIVEPRT_287899.enabled=ConstantsApi.mode.All;
this.G_PASSIVEPRT_287899.visible=ConstantsApi.mode.All;
this.G_PASSIVEPRT_287899.attList = ["role","fullName","idNumber","code","type","description","score"];
this.G_PASSIVENON_766899.id="G_PASSIVENON_766899";
this.G_PASSIVENON_766899.name="Group2619";
this.G_PASSIVENON_766899.columns=3;
this.G_PASSIVENON_766899.labelOrientation="Top";
this.G_PASSIVENON_766899.colSpan=1;
this.G_PASSIVENON_766899.enabled=ConstantsApi.mode.All;
this.G_PASSIVENON_766899.visible=ConstantsApi.mode.All;
this.G_PASSIVENON_766899.attList = ["operation","typeOperation","money","amount","amountApproved","official","office","ubication","creationDate","plazoDescripcion","plazo","expirationDate","creditLine","state","firstDueDate","creditorType","contractNumber","registrationNumber"];
this.G_PASSIVEAPR_215899.id="G_PASSIVEAPR_215899";
this.G_PASSIVEAPR_215899.name="PassivePortfolioCreation";
this.G_PASSIVEAPR_215899.enabled=ConstantsApi.mode.All;
this.G_PASSIVEAPR_215899.controlType = ControlType.COLLAPSIBLE;
this.G_PASSIVEAPR_215899.colSpan=1;
this.G_PASSIVEAPR_215899.childrenGroups = ["G_PASSIVEOLI_739899_item"];
this.G_PASSIVEOLI_739899_item.id="G_PASSIVEOLI_739899_item";
this.G_PASSIVEOLI_739899_item.label=cobis.translate("LNSPR.LBL_LNSPR_DATOSADCO_69155");
this.G_PASSIVEOLI_739899_item.childrenGroups = ['G_PASSIVEOLI_739899'];
this.G_PASSIVEOLI_739899_item.colSpan=1;
this.G_PASSIVEOLI_739899_item.enabled=ConstantsApi.mode.All;
this.G_PASSIVEOLI_739899_item.visible=ConstantsApi.mode.All;
this.G_PASSIVEOLI_739899.id="G_PASSIVEOLI_739899";
this.G_PASSIVEOLI_739899.name="Group2522";
this.G_PASSIVEOLI_739899.columns=3;
this.G_PASSIVEOLI_739899.labelOrientation="Top";
this.G_PASSIVEOLI_739899.colSpan=1;
this.G_PASSIVEOLI_739899.enabled=ConstantsApi.mode.All;
this.G_PASSIVEOLI_739899.visible=ConstantsApi.mode.All;
this.G_PASSIVEOLI_739899.attList = ["debtType","authDate","authNumber","formReposition","subFinancing","finanMarket","facilityNumber"];
this.G_PASSIVEOTA_103899.id="G_PASSIVEOTA_103899";
this.G_PASSIVEOTA_103899.name="Group2514";
this.G_PASSIVEOTA_103899.columns=3;
this.G_PASSIVEOTA_103899.labelOrientation="Top";
this.G_PASSIVEOTA_103899.colSpan=1;
this.G_PASSIVEOTA_103899.enabled=ConstantsApi.mode.All;
this.G_PASSIVEOTA_103899.visible=ConstantsApi.mode.All;
this.VA_CODEKUNNZDIHWDU_476899.id = "VA_CODEKUNNZDIHWDU_476899";
this.VA_CODEKUNNZDIHWDU_476899.name = "code";
this.VA_CODEKUNNZDIHWDU_476899.label = cobis.translate("LNSPR.LBL_LNSPR_CODFONDER_77959");
this.VA_CODEKUNNZDIHWDU_476899.entity = "OperationCRUDFormEntity";
this.VA_CODEKUNNZDIHWDU_476899.attribute = "code";
this.VA_CODEKUNNZDIHWDU_476899.colSpan = 1;
this.VA_CODEKUNNZDIHWDU_476899.format = "";
this.VA_CODEKUNNZDIHWDU_476899.readOnly = ConstantsApi.mode.Query;
this.VA_CODEKUNNZDIHWDU_476899.enabled = ConstantsApi.mode.All;
this.VA_CODEKUNNZDIHWDU_476899.visible= ConstantsApi.mode.All;
this.VA_CODEKUNNZDIHWDU_476899.textLocked = true;
this.VA_FULLNAMEHFSGXTT_914899.label = cobis.translate("LNSPR.LBL_LNSPR_NOMBREFDN_59796");
this.VA_FULLNAMEHFSGXTT_914899.entity = "OperationCRUDFormEntity";
this.VA_FULLNAMEHFSGXTT_914899.attribute = "fullName";
this.VA_FULLNAMEHFSGXTT_914899.maxlength= 255;
this.VA_FULLNAMEHFSGXTT_914899.textCase= TextCaseOptions.NONE;
this.VA_FULLNAMEHFSGXTT_914899.name="fullName";
this.VA_FULLNAMEHFSGXTT_914899.id="VA_FULLNAMEHFSGXTT_914899";
this.VA_FULLNAMEHFSGXTT_914899.colSpan=3;
this.VA_FULLNAMEHFSGXTT_914899.withoutLabel = false;
this.VA_FULLNAMEHFSGXTT_914899.readOnly = ConstantsApi.mode.Query;
this.VA_FULLNAMEHFSGXTT_914899.enabled = ConstantsApi.mode.None;
this.VA_FULLNAMEHFSGXTT_914899.visible= ConstantsApi.mode.All;
this.VA_SPACER1905MVKGU_354899.id = "VA_SPACER1905MVKGU_354899";
this.VA_SPACER1905MVKGU_354899.name = "Spacer1905";
this.VA_SPACER1905MVKGU_354899.colSpan = 1;
this.VA_SPACER1905MVKGU_354899.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONTWR88_356899.id = "VA_VAVABUTTONTWR88_356899";
this.VA_VAVABUTTONTWR88_356899.name = "VA_VAVABUTTONTWR88_356899";
this.VA_VAVABUTTONTWR88_356899.label = cobis.translate("LNSPR.LBL_LOANS_AADIRWOQO_72396");
this.VA_VAVABUTTONTWR88_356899.colSpan = 1;
this.VA_VAVABUTTONTWR88_356899.withoutLabel = false;
this.VA_VAVABUTTONTWR88_356899.causesValidation=false;
this.VA_VAVABUTTONTWR88_356899.submitOnEnter=false;
this.VA_VAVABUTTONTWR88_356899.setFocus=false;
this.VA_VAVABUTTONTWR88_356899.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONTWR88_356899.visible= ConstantsApi.mode.All;
this.QV_MV07_KFL31.id='QV_MV07_KFL31';
this.QV_MV07_KFL31.name='QV_MV07_KFL31';
this.QV_MV07_KFL31.pageable=false;
this.QV_MV07_KFL31.sortable=false;
this.QV_MV07_KFL31.resizable=true;
this.QV_MV07_KFL31.scrollable=false
this.QV_MV07_KFL31.confirmRowDeletion=false;
this.QV_MV07_KFL31.exportToExcel=false;
this.QV_MV07_KFL31.exportToPdf=false;
this.QV_MV07_KFL31.height=0;
this.QV_MV07_KFL31.filterableColumns=false;
this.QV_MV07_KFL31.entityName='DebtorEntity';
this.QV_MV07_KFL31.appendRecords=false;
this.QV_MV07_KFL31.rowDetail=false;
this.QV_MV07_KFL31.columnMenu = true;
this.QV_MV07_KFL31.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_MV07_KFL31.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_MV07_KFL31.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_MV07_KFL31.columns = Util.filterByMode(this.mode, [
{
id : "VA_ROLEKRZYEYCGEMZ_493899",
label : cobis.translate('LNSPR.LBL_LOANS_ROLNDGMQN_51274'),
field : 'role',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_ROLEKRZYEYCGEMZ_493899',
name :'role',
withoutLabel : true,
attribute : 'role',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_FULLNAMEASFGYGC_205899",
label : cobis.translate('LNSPR.LBL_LOANS_NOMBRETPH_86356'),
field : 'fullName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_FULLNAMEASFGYGC_205899',
name :'fullName',
withoutLabel : true,
attribute : 'fullName',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_IDNUMBEREAURXON_346899",
label : cobis.translate('LNSPR.LBL_LNSPR_CEDULARCU_43901'),
field : 'idNumber',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_IDNUMBEREAURXON_346899',
name :'idNumber',
withoutLabel : true,
attribute : 'idNumber',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_CODEYUQMXPUKHJW_271899",
label : cobis.translate('LNSPR.LBL_LNSPR_CODIGOPYS_88202'),
field : 'code',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_CODEYUQMXPUKHJW_271899',
name :'code',
withoutLabel : true,
attribute : 'code',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.VA_OPERATIONYWWUDJ_859899.label = cobis.translate("LNSPR.LBL_LNSPR_OPERACINN_33130");
this.VA_OPERATIONYWWUDJ_859899.entity = "OperationEntity";
this.VA_OPERATIONYWWUDJ_859899.attribute = "operation";
this.VA_OPERATIONYWWUDJ_859899.textCase= TextCaseOptions.NONE;
this.VA_OPERATIONYWWUDJ_859899.name="operation";
this.VA_OPERATIONYWWUDJ_859899.id="VA_OPERATIONYWWUDJ_859899";
this.VA_OPERATIONYWWUDJ_859899.colSpan=1;
this.VA_OPERATIONYWWUDJ_859899.withoutLabel = false;
this.VA_OPERATIONYWWUDJ_859899.readOnly = ConstantsApi.mode.Query;
this.VA_OPERATIONYWWUDJ_859899.enabled = ConstantsApi.mode.None;
this.VA_OPERATIONYWWUDJ_859899.visible= ConstantsApi.mode.All;
this.VA_TYPEOPERATIONNN_137899.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERN_51275");
this.VA_TYPEOPERATIONNN_137899.blankOption=true;
this.VA_TYPEOPERATIONNN_137899.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_TYPEOPERATIONNN_137899.entity = "OperationEntity";
this.VA_TYPEOPERATIONNN_137899.attribute = "typeOperation";
this.VA_TYPEOPERATIONNN_137899.textField = "value";
this.VA_TYPEOPERATIONNN_137899.valueField = "code";
this.VA_TYPEOPERATIONNN_137899.showId= true;
this.VA_TYPEOPERATIONNN_137899.name="typeOperation";
this.VA_TYPEOPERATIONNN_137899.id="VA_TYPEOPERATIONNN_137899";
this.VA_TYPEOPERATIONNN_137899.colSpan=1;
this.VA_TYPEOPERATIONNN_137899.withoutLabel = false;
this.VA_TYPEOPERATIONNN_137899.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEOPERATIONNN_137899.enabled = ConstantsApi.mode.All;
this.VA_TYPEOPERATIONNN_137899.visible= ConstantsApi.mode.All;
this.VA_TYPEOPERATIONNN_137899.required = true;
this.VA_TYPEOPERATIONNN_137899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TYPEOPERATIONNN_137899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_MONEYSNJCKOMHID_471899.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_MONEYSNJCKOMHID_471899.blankOption=true;
this.VA_MONEYSNJCKOMHID_471899.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_MONEYSNJCKOMHID_471899.entity = "OperationEntity";
this.VA_MONEYSNJCKOMHID_471899.attribute = "money";
this.VA_MONEYSNJCKOMHID_471899.textField = "value";
this.VA_MONEYSNJCKOMHID_471899.valueField = "code";
this.VA_MONEYSNJCKOMHID_471899.showId= true;
this.VA_MONEYSNJCKOMHID_471899.name="money";
this.VA_MONEYSNJCKOMHID_471899.id="VA_MONEYSNJCKOMHID_471899";
this.VA_MONEYSNJCKOMHID_471899.colSpan=1;
this.VA_MONEYSNJCKOMHID_471899.withoutLabel = false;
this.VA_MONEYSNJCKOMHID_471899.readOnly = ConstantsApi.mode.Query;
this.VA_MONEYSNJCKOMHID_471899.enabled = ConstantsApi.mode.All;
this.VA_MONEYSNJCKOMHID_471899.visible= ConstantsApi.mode.All;
this.VA_MONEYSNJCKOMHID_471899.required = true;
this.VA_MONEYSNJCKOMHID_471899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_MONEYSNJCKOMHID_471899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_AMOUNTFVWTEWBDA_761899.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOEMFX_52083");
this.VA_AMOUNTFVWTEWBDA_761899.entity = "OperationEntity";
this.VA_AMOUNTFVWTEWBDA_761899.attribute = "amount";
this.VA_AMOUNTFVWTEWBDA_761899.maxlength= 15;
this.VA_AMOUNTFVWTEWBDA_761899.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTFVWTEWBDA_761899.format= "c";
this.VA_AMOUNTFVWTEWBDA_761899.name="amount";
this.VA_AMOUNTFVWTEWBDA_761899.id="VA_AMOUNTFVWTEWBDA_761899";
this.VA_AMOUNTFVWTEWBDA_761899.colSpan=1;
this.VA_AMOUNTFVWTEWBDA_761899.withoutLabel = false;
this.VA_AMOUNTFVWTEWBDA_761899.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTFVWTEWBDA_761899.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTFVWTEWBDA_761899.visible= ConstantsApi.mode.All;
this.VA_AMOUNTFVWTEWBDA_761899.required = true;
this.VA_AMOUNTFVWTEWBDA_761899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_AMOUNTFVWTEWBDA_761899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_AMOUNTAPPROVDEE_937899.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOAPOB_87983");
this.VA_AMOUNTAPPROVDEE_937899.entity = "OperationEntity";
this.VA_AMOUNTAPPROVDEE_937899.attribute = "amountApproved";
this.VA_AMOUNTAPPROVDEE_937899.maxlength= 15;
this.VA_AMOUNTAPPROVDEE_937899.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTAPPROVDEE_937899.format= "c";
this.VA_AMOUNTAPPROVDEE_937899.name="amountApproved";
this.VA_AMOUNTAPPROVDEE_937899.id="VA_AMOUNTAPPROVDEE_937899";
this.VA_AMOUNTAPPROVDEE_937899.colSpan=1;
this.VA_AMOUNTAPPROVDEE_937899.withoutLabel = false;
this.VA_AMOUNTAPPROVDEE_937899.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTAPPROVDEE_937899.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTAPPROVDEE_937899.visible= ConstantsApi.mode.All;
this.VA_AMOUNTAPPROVDEE_937899.required = true;
this.VA_AMOUNTAPPROVDEE_937899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_AMOUNTAPPROVDEE_937899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_OFFICIALFUSJDJB_630899.label = cobis.translate("LNSPR.LBL_LNSPR_OFICIALCI_17854");
this.VA_OFFICIALFUSJDJB_630899.entity = "OperationEntity";
this.VA_OFFICIALFUSJDJB_630899.attribute = "official";
this.VA_OFFICIALFUSJDJB_630899.textField = "value";
this.VA_OFFICIALFUSJDJB_630899.valueField = "code";
this.VA_OFFICIALFUSJDJB_630899.name="official";
this.VA_OFFICIALFUSJDJB_630899.id="VA_OFFICIALFUSJDJB_630899";
this.VA_OFFICIALFUSJDJB_630899.colSpan=1;
this.VA_OFFICIALFUSJDJB_630899.withoutLabel = false;
this.VA_OFFICIALFUSJDJB_630899.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICIALFUSJDJB_630899.enabled = ConstantsApi.mode.All;
this.VA_OFFICIALFUSJDJB_630899.visible= ConstantsApi.mode.All;
this.VA_OFFICIALFUSJDJB_630899.required = true;
this.VA_OFFICIALFUSJDJB_630899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_OFFICIALFUSJDJB_630899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_OFFICEFTYXFMUWA_267899.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAGV_33565");
this.VA_OFFICEFTYXFMUWA_267899.entity = "OperationEntity";
this.VA_OFFICEFTYXFMUWA_267899.attribute = "office";
this.VA_OFFICEFTYXFMUWA_267899.textField = "value";
this.VA_OFFICEFTYXFMUWA_267899.valueField = "code";
this.VA_OFFICEFTYXFMUWA_267899.name="office";
this.VA_OFFICEFTYXFMUWA_267899.id="VA_OFFICEFTYXFMUWA_267899";
this.VA_OFFICEFTYXFMUWA_267899.colSpan=1;
this.VA_OFFICEFTYXFMUWA_267899.withoutLabel = false;
this.VA_OFFICEFTYXFMUWA_267899.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICEFTYXFMUWA_267899.enabled = ConstantsApi.mode.All;
this.VA_OFFICEFTYXFMUWA_267899.visible= ConstantsApi.mode.All;
this.VA_OFFICEFTYXFMUWA_267899.required = true;
this.VA_OFFICEFTYXFMUWA_267899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_OFFICEFTYXFMUWA_267899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_UBICATIONEIZYDH_113899.label = cobis.translate("LNSPR.LBL_LNSPR_UBICACINN_15086");
this.VA_UBICATIONEIZYDH_113899.blankOption=true;
this.VA_UBICATIONEIZYDH_113899.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_UBICATIONEIZYDH_113899.entity = "OperationEntity";
this.VA_UBICATIONEIZYDH_113899.attribute = "ubication";
this.VA_UBICATIONEIZYDH_113899.textField = "value";
this.VA_UBICATIONEIZYDH_113899.valueField = "code";
this.VA_UBICATIONEIZYDH_113899.showId= true;
this.VA_UBICATIONEIZYDH_113899.name="ubication";
this.VA_UBICATIONEIZYDH_113899.id="VA_UBICATIONEIZYDH_113899";
this.VA_UBICATIONEIZYDH_113899.colSpan=1;
this.VA_UBICATIONEIZYDH_113899.withoutLabel = false;
this.VA_UBICATIONEIZYDH_113899.readOnly = ConstantsApi.mode.Query;
this.VA_UBICATIONEIZYDH_113899.enabled = ConstantsApi.mode.All;
this.VA_UBICATIONEIZYDH_113899.visible= ConstantsApi.mode.All;
this.VA_UBICATIONEIZYDH_113899.required = true;
this.VA_UBICATIONEIZYDH_113899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_UBICATIONEIZYDH_113899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_CREATIONDATEDVN_632899.label = cobis.translate("LNSPR.LBL_LOANS_FECHACREN_63456");
this.VA_CREATIONDATEDVN_632899.entity = "OperationEntity";
this.VA_CREATIONDATEDVN_632899.attribute = "creationDate";
this.VA_CREATIONDATEDVN_632899.name="creationDate";
this.VA_CREATIONDATEDVN_632899.id="VA_CREATIONDATEDVN_632899";
this.VA_CREATIONDATEDVN_632899.colSpan=1;
this.VA_CREATIONDATEDVN_632899.withoutLabel = false;
this.VA_CREATIONDATEDVN_632899.readOnly = ConstantsApi.mode.Query;
this.VA_CREATIONDATEDVN_632899.enabled = ConstantsApi.mode.All;
this.VA_CREATIONDATEDVN_632899.visible= ConstantsApi.mode.All;
this.VA_CREATIONDATEDVN_632899.required = true;
this.VA_CREATIONDATEDVN_632899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CREATIONDATEDVN_632899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_PLAZODESCRIPCNC_494899.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOPLAOZ_41477");
this.VA_PLAZODESCRIPCNC_494899.blankOption=true;
this.VA_PLAZODESCRIPCNC_494899.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_PLAZODESCRIPCNC_494899.entity = "OperationEntity";
this.VA_PLAZODESCRIPCNC_494899.attribute = "plazoDescripcion";
this.VA_PLAZODESCRIPCNC_494899.textField = "value";
this.VA_PLAZODESCRIPCNC_494899.valueField = "code";
this.VA_PLAZODESCRIPCNC_494899.showId= true;
this.VA_PLAZODESCRIPCNC_494899.name="plazoDescripcion";
this.VA_PLAZODESCRIPCNC_494899.id="VA_PLAZODESCRIPCNC_494899";
this.VA_PLAZODESCRIPCNC_494899.colSpan=1;
this.VA_PLAZODESCRIPCNC_494899.withoutLabel = false;
this.VA_PLAZODESCRIPCNC_494899.readOnly = ConstantsApi.mode.Query;
this.VA_PLAZODESCRIPCNC_494899.enabled = ConstantsApi.mode.All;
this.VA_PLAZODESCRIPCNC_494899.visible= ConstantsApi.mode.All;
this.VA_PLAZODESCRIPCNC_494899.required = true;
this.VA_PLAZODESCRIPCNC_494899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PLAZODESCRIPCNC_494899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_PLAZOAJHVDBJBNP_804899.label = cobis.translate("LNSPR.LBL_LNSPR_PLAZOYJVK_49555");
this.VA_PLAZOAJHVDBJBNP_804899.entity = "OperationEntity";
this.VA_PLAZOAJHVDBJBNP_804899.attribute = "plazo";
this.VA_PLAZOAJHVDBJBNP_804899.textCase= TextCaseOptions.NONE;
this.VA_PLAZOAJHVDBJBNP_804899.format= "n0";
this.VA_PLAZOAJHVDBJBNP_804899.name="plazo";
this.VA_PLAZOAJHVDBJBNP_804899.id="VA_PLAZOAJHVDBJBNP_804899";
this.VA_PLAZOAJHVDBJBNP_804899.colSpan=1;
this.VA_PLAZOAJHVDBJBNP_804899.withoutLabel = false;
this.VA_PLAZOAJHVDBJBNP_804899.readOnly = ConstantsApi.mode.Query;
this.VA_PLAZOAJHVDBJBNP_804899.enabled = ConstantsApi.mode.All;
this.VA_PLAZOAJHVDBJBNP_804899.visible= ConstantsApi.mode.All;
this.VA_PLAZOAJHVDBJBNP_804899.required = true;
this.VA_PLAZOAJHVDBJBNP_804899.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PLAZOAJHVDBJBNP_804899.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_EXPIRATIONDAEET_351899.label = cobis.translate("LNSPR.LBL_LOANS_FECHAVENI_35637");
this.VA_EXPIRATIONDAEET_351899.entity = "OperationEntity";
this.VA_EXPIRATIONDAEET_351899.attribute = "expirationDate";
this.VA_EXPIRATIONDAEET_351899.name="expirationDate";
this.VA_EXPIRATIONDAEET_351899.id="VA_EXPIRATIONDAEET_351899";
this.VA_EXPIRATIONDAEET_351899.colSpan=1;
this.VA_EXPIRATIONDAEET_351899.withoutLabel = false;
this.VA_EXPIRATIONDAEET_351899.readOnly = ConstantsApi.mode.Query;
this.VA_EXPIRATIONDAEET_351899.enabled = ConstantsApi.mode.None;
this.VA_EXPIRATIONDAEET_351899.visible= ConstantsApi.mode.All;
this.VA_CREDITLINEGFBUT_718899.id = "VA_CREDITLINEGFBUT_718899";
this.VA_CREDITLINEGFBUT_718899.name = "creditLine";
this.VA_CREDITLINEGFBUT_718899.label = cobis.translate("LNSPR.LBL_LNSPR_LNEAFINIM_93553");
this.VA_CREDITLINEGFBUT_718899.entity = "OperationEntity";
this.VA_CREDITLINEGFBUT_718899.attribute = "creditLine";
this.VA_CREDITLINEGFBUT_718899.colSpan = 1;
this.VA_CREDITLINEGFBUT_718899.format = "";
this.VA_CREDITLINEGFBUT_718899.maxlength= 24;
this.VA_CREDITLINEGFBUT_718899.readOnly = ConstantsApi.mode.Query;
this.VA_CREDITLINEGFBUT_718899.enabled = ConstantsApi.mode.All;
this.VA_CREDITLINEGFBUT_718899.visible= ConstantsApi.mode.All;
this.VA_STATELEDEROPZZD_753899.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADOEAI_33340");
this.VA_STATELEDEROPZZD_753899.entity = "OperationEntity";
this.VA_STATELEDEROPZZD_753899.attribute = "state";
this.VA_STATELEDEROPZZD_753899.textCase= TextCaseOptions.NONE;
this.VA_STATELEDEROPZZD_753899.name="state";
this.VA_STATELEDEROPZZD_753899.id="VA_STATELEDEROPZZD_753899";
this.VA_STATELEDEROPZZD_753899.colSpan=1;
this.VA_STATELEDEROPZZD_753899.withoutLabel = false;
this.VA_STATELEDEROPZZD_753899.readOnly = ConstantsApi.mode.Query;
this.VA_STATELEDEROPZZD_753899.enabled = ConstantsApi.mode.None;
this.VA_STATELEDEROPZZD_753899.visible= ConstantsApi.mode.All;
this.VA_FIRSTDUEDATEVNP_681899.label = cobis.translate("LNSPR.LBL_LNSPR_FECHA1ETV_13102");
this.VA_FIRSTDUEDATEVNP_681899.entity = "OperationEntity";
this.VA_FIRSTDUEDATEVNP_681899.attribute = "firstDueDate";
this.VA_FIRSTDUEDATEVNP_681899.name="firstDueDate";
this.VA_FIRSTDUEDATEVNP_681899.id="VA_FIRSTDUEDATEVNP_681899";
this.VA_FIRSTDUEDATEVNP_681899.colSpan=1;
this.VA_FIRSTDUEDATEVNP_681899.withoutLabel = false;
this.VA_FIRSTDUEDATEVNP_681899.readOnly = ConstantsApi.mode.Query;
this.VA_FIRSTDUEDATEVNP_681899.enabled = ConstantsApi.mode.All;
this.VA_FIRSTDUEDATEVNP_681899.visible= ConstantsApi.mode.All;
this.VA_CREDITORTYPEQDV_936899.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOACRER_55798");
this.VA_CREDITORTYPEQDV_936899.blankOption=true;
this.VA_CREDITORTYPEQDV_936899.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_CREDITORTYPEQDV_936899.entity = "OperationEntity";
this.VA_CREDITORTYPEQDV_936899.attribute = "creditorType";
this.VA_CREDITORTYPEQDV_936899.textField = "value";
this.VA_CREDITORTYPEQDV_936899.valueField = "code";
this.VA_CREDITORTYPEQDV_936899.showId= true;
this.VA_CREDITORTYPEQDV_936899.name="creditorType";
this.VA_CREDITORTYPEQDV_936899.id="VA_CREDITORTYPEQDV_936899";
this.VA_CREDITORTYPEQDV_936899.colSpan=1;
this.VA_CREDITORTYPEQDV_936899.withoutLabel = false;
this.VA_CREDITORTYPEQDV_936899.readOnly = ConstantsApi.mode.Query;
this.VA_CREDITORTYPEQDV_936899.enabled = ConstantsApi.mode.All;
this.VA_CREDITORTYPEQDV_936899.visible= ConstantsApi.mode.All;
this.VA_CONTRACTNUMBEEE_151899.label = cobis.translate("LNSPR.LBL_LNSPR_NMEROCONN_68981");
this.VA_CONTRACTNUMBEEE_151899.entity = "OperationEntity";
this.VA_CONTRACTNUMBEEE_151899.attribute = "contractNumber";
this.VA_CONTRACTNUMBEEE_151899.textCase= TextCaseOptions.NONE;
this.VA_CONTRACTNUMBEEE_151899.name="contractNumber";
this.VA_CONTRACTNUMBEEE_151899.id="VA_CONTRACTNUMBEEE_151899";
this.VA_CONTRACTNUMBEEE_151899.colSpan=1;
this.VA_CONTRACTNUMBEEE_151899.withoutLabel = false;
this.VA_CONTRACTNUMBEEE_151899.readOnly = ConstantsApi.mode.Query;
this.VA_CONTRACTNUMBEEE_151899.enabled = ConstantsApi.mode.All;
this.VA_CONTRACTNUMBEEE_151899.visible= ConstantsApi.mode.All;
this.VA_REGISTRATIONUEN_556899.label = cobis.translate("LNSPR.LBL_LNSPR_NOREGISRT_17780");
this.VA_REGISTRATIONUEN_556899.entity = "OperationEntity";
this.VA_REGISTRATIONUEN_556899.attribute = "registrationNumber";
this.VA_REGISTRATIONUEN_556899.textCase= TextCaseOptions.NONE;
this.VA_REGISTRATIONUEN_556899.name="registrationNumber";
this.VA_REGISTRATIONUEN_556899.id="VA_REGISTRATIONUEN_556899";
this.VA_REGISTRATIONUEN_556899.colSpan=1;
this.VA_REGISTRATIONUEN_556899.withoutLabel = false;
this.VA_REGISTRATIONUEN_556899.readOnly = ConstantsApi.mode.Query;
this.VA_REGISTRATIONUEN_556899.enabled = ConstantsApi.mode.All;
this.VA_REGISTRATIONUEN_556899.visible= ConstantsApi.mode.All;
this.VA_DEBTTYPELMRNXVE_296899.label = cobis.translate("LNSPR.LBL_LNSPR_TIPODEUAA_52427");
this.VA_DEBTTYPELMRNXVE_296899.blankOption=true;
this.VA_DEBTTYPELMRNXVE_296899.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_DEBTTYPELMRNXVE_296899.entity = "OperationEntity";
this.VA_DEBTTYPELMRNXVE_296899.attribute = "debtType";
this.VA_DEBTTYPELMRNXVE_296899.textField = "value";
this.VA_DEBTTYPELMRNXVE_296899.valueField = "code";
this.VA_DEBTTYPELMRNXVE_296899.showId= true;
this.VA_DEBTTYPELMRNXVE_296899.name="debtType";
this.VA_DEBTTYPELMRNXVE_296899.id="VA_DEBTTYPELMRNXVE_296899";
this.VA_DEBTTYPELMRNXVE_296899.colSpan=1;
this.VA_DEBTTYPELMRNXVE_296899.withoutLabel = false;
this.VA_DEBTTYPELMRNXVE_296899.readOnly = ConstantsApi.mode.Query;
this.VA_DEBTTYPELMRNXVE_296899.enabled = ConstantsApi.mode.All;
this.VA_DEBTTYPELMRNXVE_296899.visible= ConstantsApi.mode.All;
this.VA_AUTHDATEYLPRROK_349899.label = cobis.translate("LNSPR.LBL_LNSPR_FECHAAUZN_27676");
this.VA_AUTHDATEYLPRROK_349899.entity = "OperationEntity";
this.VA_AUTHDATEYLPRROK_349899.attribute = "authDate";
this.VA_AUTHDATEYLPRROK_349899.name="authDate";
this.VA_AUTHDATEYLPRROK_349899.id="VA_AUTHDATEYLPRROK_349899";
this.VA_AUTHDATEYLPRROK_349899.colSpan=1;
this.VA_AUTHDATEYLPRROK_349899.withoutLabel = false;
this.VA_AUTHDATEYLPRROK_349899.readOnly = ConstantsApi.mode.Query;
this.VA_AUTHDATEYLPRROK_349899.enabled = ConstantsApi.mode.All;
this.VA_AUTHDATEYLPRROK_349899.visible= ConstantsApi.mode.All;
this.VA_AUTHNUMBERRKGNG_331899.label = cobis.translate("LNSPR.LBL_LNSPR_NOAUTORIN_87158");
this.VA_AUTHNUMBERRKGNG_331899.entity = "OperationEntity";
this.VA_AUTHNUMBERRKGNG_331899.attribute = "authNumber";
this.VA_AUTHNUMBERRKGNG_331899.textCase= TextCaseOptions.NONE;
this.VA_AUTHNUMBERRKGNG_331899.name="authNumber";
this.VA_AUTHNUMBERRKGNG_331899.id="VA_AUTHNUMBERRKGNG_331899";
this.VA_AUTHNUMBERRKGNG_331899.colSpan=1;
this.VA_AUTHNUMBERRKGNG_331899.withoutLabel = false;
this.VA_AUTHNUMBERRKGNG_331899.readOnly = ConstantsApi.mode.Query;
this.VA_AUTHNUMBERRKGNG_331899.enabled = ConstantsApi.mode.All;
this.VA_AUTHNUMBERRKGNG_331899.visible= ConstantsApi.mode.All;
this.VA_REPOSITIONJNYRG_258899.label = cobis.translate("LNSPR.LBL_LNSPR_AREPOSINN_21211");
this.VA_REPOSITIONJNYRG_258899.blankOption=true;
this.VA_REPOSITIONJNYRG_258899.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_REPOSITIONJNYRG_258899.entity = "OperationEntity";
this.VA_REPOSITIONJNYRG_258899.attribute = "formReposition";
this.VA_REPOSITIONJNYRG_258899.textField = "value";
this.VA_REPOSITIONJNYRG_258899.valueField = "code";
this.VA_REPOSITIONJNYRG_258899.showId= true;
this.VA_REPOSITIONJNYRG_258899.name="formReposition";
this.VA_REPOSITIONJNYRG_258899.id="VA_REPOSITIONJNYRG_258899";
this.VA_REPOSITIONJNYRG_258899.colSpan=1;
this.VA_REPOSITIONJNYRG_258899.withoutLabel = false;
this.VA_REPOSITIONJNYRG_258899.readOnly = ConstantsApi.mode.Query;
this.VA_REPOSITIONJNYRG_258899.enabled = ConstantsApi.mode.All;
this.VA_REPOSITIONJNYRG_258899.visible= ConstantsApi.mode.All;
this.VA_SUBFINANCINGPJK_364899.label = cobis.translate("LNSPR.LBL_LNSPR_CAUSAFIBO_36044");
this.VA_SUBFINANCINGPJK_364899.blankOption=true;
this.VA_SUBFINANCINGPJK_364899.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_SUBFINANCINGPJK_364899.entity = "OperationEntity";
this.VA_SUBFINANCINGPJK_364899.attribute = "subFinancing";
this.VA_SUBFINANCINGPJK_364899.textField = "value";
this.VA_SUBFINANCINGPJK_364899.valueField = "code";
this.VA_SUBFINANCINGPJK_364899.showId= true;
this.VA_SUBFINANCINGPJK_364899.name="subFinancing";
this.VA_SUBFINANCINGPJK_364899.id="VA_SUBFINANCINGPJK_364899";
this.VA_SUBFINANCINGPJK_364899.colSpan=1;
this.VA_SUBFINANCINGPJK_364899.withoutLabel = false;
this.VA_SUBFINANCINGPJK_364899.readOnly = ConstantsApi.mode.Query;
this.VA_SUBFINANCINGPJK_364899.enabled = ConstantsApi.mode.All;
this.VA_SUBFINANCINGPJK_364899.visible= ConstantsApi.mode.All;
this.VA_FINANMARKETQOEM_575899.label = cobis.translate("LNSPR.LBL_LNSPR_MERCADOOV_74755");
this.VA_FINANMARKETQOEM_575899.blankOption=true;
this.VA_FINANMARKETQOEM_575899.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_FINANMARKETQOEM_575899.entity = "OperationEntity";
this.VA_FINANMARKETQOEM_575899.attribute = "finanMarket";
this.VA_FINANMARKETQOEM_575899.textField = "value";
this.VA_FINANMARKETQOEM_575899.valueField = "code";
this.VA_FINANMARKETQOEM_575899.showId= true;
this.VA_FINANMARKETQOEM_575899.name="finanMarket";
this.VA_FINANMARKETQOEM_575899.id="VA_FINANMARKETQOEM_575899";
this.VA_FINANMARKETQOEM_575899.colSpan=1;
this.VA_FINANMARKETQOEM_575899.withoutLabel = false;
this.VA_FINANMARKETQOEM_575899.readOnly = ConstantsApi.mode.Query;
this.VA_FINANMARKETQOEM_575899.enabled = ConstantsApi.mode.All;
this.VA_FINANMARKETQOEM_575899.visible= ConstantsApi.mode.All;
this.VA_FACILITYNUMBEER_954899.label = cobis.translate("LNSPR.LBL_LNSPR_FACILITMB_28174");
this.VA_FACILITYNUMBEER_954899.entity = "OperationEntity";
this.VA_FACILITYNUMBEER_954899.attribute = "facilityNumber";
this.VA_FACILITYNUMBEER_954899.textCase= TextCaseOptions.NONE;
this.VA_FACILITYNUMBEER_954899.name="facilityNumber";
this.VA_FACILITYNUMBEER_954899.id="VA_FACILITYNUMBEER_954899";
this.VA_FACILITYNUMBEER_954899.colSpan=1;
this.VA_FACILITYNUMBEER_954899.withoutLabel = false;
this.VA_FACILITYNUMBEER_954899.readOnly = ConstantsApi.mode.Query;
this.VA_FACILITYNUMBEER_954899.enabled = ConstantsApi.mode.All;
this.VA_FACILITYNUMBEER_954899.visible= ConstantsApi.mode.None;
this.VA_VAVABUTTONWNJI5_490899.id = "VA_VAVABUTTONWNJI5_490899";
this.VA_VAVABUTTONWNJI5_490899.name = "VA_VAVABUTTONWNJI5_490899";
this.VA_VAVABUTTONWNJI5_490899.label = cobis.translate("LNSPR.LBL_LOANS_CREARGIPQ_98198");
this.VA_VAVABUTTONWNJI5_490899.colSpan = 1;
this.VA_VAVABUTTONWNJI5_490899.withoutLabel = false;
this.VA_VAVABUTTONWNJI5_490899.causesValidation=true;
this.VA_VAVABUTTONWNJI5_490899.submitOnEnter=false;
this.VA_VAVABUTTONWNJI5_490899.setFocus=false;
this.VA_VAVABUTTONWNJI5_490899.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONWNJI5_490899.visible= ConstantsApi.mode.All;
this.T_LNSPRBYPIFLBG_956 = this.formBuilder.group({
OperationCRUDFormEntity: this.formBuilder.group({
code:[{value: null, disabled: !this.VA_CODEKUNNZDIHWDU_476899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODEKUNNZDIHWDU_476899.validationFunctions!)],
fullName:[{value: null, disabled: !this.VA_FULLNAMEHFSGXTT_914899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FULLNAMEHFSGXTT_914899.validationFunctions!)],
role:[null],
idNumber:[null],
officer:[null],
company:[null],
subType:[null],
}
),
DebtorEntity: this.formBuilder.group({
role:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MV07_KFL31.columns,'VA_ROLEKRZYEYCGEMZ_493899')],
fullName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MV07_KFL31.columns,'VA_FULLNAMEASFGYGC_205899')],
idNumber:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MV07_KFL31.columns,'VA_IDNUMBEREAURXON_346899')],
code:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MV07_KFL31.columns,'VA_CODEYUQMXPUKHJW_271899')],
type:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MV07_KFL31.columns,'VA_TYPEALOQVQDBAGH_716899')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MV07_KFL31.columns,'VA_DESCRIPTIONARHH_765899')],
score:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MV07_KFL31.columns,'VA_SCOREFNDGTNGQSC_412899')],
}
),
OperationEntity: this.formBuilder.group({
operation:[{value: null, disabled: !this.VA_OPERATIONYWWUDJ_859899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPERATIONYWWUDJ_859899.validationFunctions!)],
typeOperation:[{value: null, disabled: !this.VA_TYPEOPERATIONNN_137899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEOPERATIONNN_137899.validationFunctions!)],
money:[{value: null, disabled: !this.VA_MONEYSNJCKOMHID_471899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MONEYSNJCKOMHID_471899.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_AMOUNTFVWTEWBDA_761899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTFVWTEWBDA_761899.validationFunctions!)],
amountApproved:[{value: null, disabled: !this.VA_AMOUNTAPPROVDEE_937899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTAPPROVDEE_937899.validationFunctions!)],
official:[{value: null, disabled: !this.VA_OFFICIALFUSJDJB_630899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICIALFUSJDJB_630899.validationFunctions!)],
office:[{value: null, disabled: !this.VA_OFFICEFTYXFMUWA_267899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICEFTYXFMUWA_267899.validationFunctions!)],
ubication:[{value: null, disabled: !this.VA_UBICATIONEIZYDH_113899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_UBICATIONEIZYDH_113899.validationFunctions!)],
creationDate:[{value: null, disabled: !this.VA_CREATIONDATEDVN_632899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CREATIONDATEDVN_632899.validationFunctions!)],
plazoDescripcion:[{value: null, disabled: !this.VA_PLAZODESCRIPCNC_494899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PLAZODESCRIPCNC_494899.validationFunctions!)],
plazo:[{value: null, disabled: !this.VA_PLAZOAJHVDBJBNP_804899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PLAZOAJHVDBJBNP_804899.validationFunctions!)],
expirationDate:[{value: null, disabled: !this.VA_EXPIRATIONDAEET_351899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_EXPIRATIONDAEET_351899.validationFunctions!)],
creditLine:[{value: null, disabled: !this.VA_CREDITLINEGFBUT_718899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CREDITLINEGFBUT_718899.validationFunctions!)],
state:[{value: null, disabled: !this.VA_STATELEDEROPZZD_753899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATELEDEROPZZD_753899.validationFunctions!)],
firstDueDate:[{value: null, disabled: !this.VA_FIRSTDUEDATEVNP_681899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FIRSTDUEDATEVNP_681899.validationFunctions!)],
creditorType:[{value: null, disabled: !this.VA_CREDITORTYPEQDV_936899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CREDITORTYPEQDV_936899.validationFunctions!)],
contractNumber:[{value: null, disabled: !this.VA_CONTRACTNUMBEEE_151899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CONTRACTNUMBEEE_151899.validationFunctions!)],
registrationNumber:[{value: null, disabled: !this.VA_REGISTRATIONUEN_556899.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REGISTRATIONUEN_556899.validationFunctions!)],
field40:[null],
participantS:[null],
subsegment:[null],
checkIRRtypeOperationValue:[null],
authNumber:[null],
mortageDescription:[null],
anchored:[null],
economicSector:[null],
previousInternalRateOfReturn:[null],
subFinancing:[null],
visibleInternalRateOfReturn:[null],
facilityNumber:[null],
authDate:[null],
codOperation:[null],
financialDestination:[null],
codBank:[null],
sector:[null],
field89:[null],
success:[null],
aliquota1:[null],
selectedParticipants:[null],
updatedInternalRateOfReturn:[null],
aliquota2:[null],
fullname:[null],
savingAccount:[null],
nameBank:[null],
validateAccount:[null],
groupCode:[null],
typeConsumption:[null],
internalRateOfReturn:[null],
parish:[null],
classOperation:[null],
typeConsumption2:[null],
finanMarket:[null],
amountParticipants:[null],
functionality:[null],
typeLoan:[null],
reference:[null],
debtType:[null],
descEconomicActivity:[null],
descEconomicSector:[null],
previousNumber:[null],
checkGroupOperation:[null],
migratedOperation:[null],
mainDebtor:[null],
typeParticipants:[null],
formReposition:[null],
company:[null],
economicActivity:[null],
processDate:[null],
syndicated:[null],
percentageParticipants:[null],
segmentCredit:[null],
doubleAliquot:[null],
typeSyndicated:[null],
certifiedAccount:[null],
mail:[null],
}
),
});
}
}