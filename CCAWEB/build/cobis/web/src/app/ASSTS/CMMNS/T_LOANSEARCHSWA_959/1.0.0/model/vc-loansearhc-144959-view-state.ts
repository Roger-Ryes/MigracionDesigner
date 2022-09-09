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
public T_LOANSEARCHSWA_959!:FormGroup;
public VC_LOANSEARHC_144959:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSEARRH_169508 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSEAHRH_621508 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSEAHRH_717508 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSEAHHH_461508 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_3009_96085: CobisGridModel = new CobisGridModel();
public VA_CODCLIENTCIXLEY_866508: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_OPERATIONZDFLWM_772508: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_NUMPROCEDURESSS_195508: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_OFFICEVEGBCEQOG_104508: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CODCURRENCYKYKA_122508: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DISBURSEMENTDTD_602508: CobisDateFieldModel = new CobisDateFieldModel();
public VA_STATUSRUGGOTSMF_965508: CobisDropDownListModel = new CobisDropDownListModel();
public VA_MIGRATEDOPERFRB_417508: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TYPEDCJJSHZRQGI_148508: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AVANCESEARCHMXA_533508: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_8665NTBOQUTYEHZ_620508: CobisCheckBoxModel = new CobisCheckBoxModel();
public Spacer1639: CobisSpacerModel = new CobisSpacerModel();
public Spacer1249: CobisSpacerModel = new CobisSpacerModel();
public Spacer1732: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONBCZSHFM_208508: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSEARHC_144959.id="VC_LOANSEARHC_144959";
this.VC_LOANSEARHC_144959.name="LoanSearchForm";
this.VC_LOANSEARHC_144959.colSpan=1;
this.VC_LOANSEARHC_144959.columns=1;
this.VC_LOANSEARHC_144959.enabled=ConstantsApi.mode.All;
this.G_LOANSEARRH_169508.id="G_LOANSEARRH_169508";
this.G_LOANSEARRH_169508.label=cobis.translate("ASSTS.LBL_ASSTS_CRITERIBS_16700");
this.G_LOANSEARRH_169508.name="GroupLayout1809";
this.G_LOANSEARRH_169508.columns=1;
this.G_LOANSEARRH_169508.childrenGroups = ["G_LOANSEAHRH_621508","G_LOANSEAHRH_717508","G_LOANSEAHHH_461508"];
this.G_LOANSEARRH_169508.colSpan=1;
this.G_LOANSEARRH_169508.enabled=ConstantsApi.mode.All;
this.G_LOANSEARRH_169508.visible=ConstantsApi.mode.All;
this.G_LOANSEAHRH_621508.id="G_LOANSEAHRH_621508";
this.G_LOANSEAHRH_621508.name="Group1910";
this.G_LOANSEAHRH_621508.columns=12;
this.G_LOANSEAHRH_621508.labelOrientation="Top";
this.G_LOANSEAHRH_621508.colSpan=1;
this.G_LOANSEAHRH_621508.enabled=ConstantsApi.mode.All;
this.G_LOANSEAHRH_621508.visible=ConstantsApi.mode.All;
this.G_LOANSEAHRH_621508.attList = ["numIdentification","operation","numProcedures","office","codCurrency","disbursementDate","status","migratedOper","type"];
this.G_LOANSEAHRH_717508.id="G_LOANSEAHRH_717508";
this.G_LOANSEAHRH_717508.name="Group1243";
this.G_LOANSEAHRH_717508.columns=12;
this.G_LOANSEAHRH_717508.labelOrientation="Top";
this.G_LOANSEAHRH_717508.colSpan=1;
this.G_LOANSEAHRH_717508.enabled=ConstantsApi.mode.All;
this.G_LOANSEAHRH_717508.visible=ConstantsApi.mode.All;
this.G_LOANSEAHRH_717508.attList = ["avanceSearch","group"];
this.G_LOANSEAHHH_461508.id="G_LOANSEAHHH_461508";
this.G_LOANSEAHHH_461508.name="Group2648";
this.G_LOANSEAHHH_461508.columns=1;
this.G_LOANSEAHHH_461508.labelOrientation="Top";
this.G_LOANSEAHHH_461508.colSpan=1;
this.G_LOANSEAHHH_461508.enabled=ConstantsApi.mode.All;
this.G_LOANSEAHHH_461508.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.G_LOANSEAHHH_461508.attList = ["desOperationType","loanBankID","clientID","clientName","amount","status","expirationDate","codCurrency","disbursementDate","numProcedure","group","categoryGroup","isDisbursment","category","tipo"];
this.VA_CODCLIENTCIXLEY_866508.id = "VA_CODCLIENTCIXLEY_866508";
this.VA_CODCLIENTCIXLEY_866508.name = "numIdentification";
this.VA_CODCLIENTCIXLEY_866508.label = cobis.translate("ASSTS.LBL_ASSTS_CODIGOCEN_52038");
this.VA_CODCLIENTCIXLEY_866508.entity = "LoanSearchFilter";
this.VA_CODCLIENTCIXLEY_866508.attribute = "numIdentification";
this.VA_CODCLIENTCIXLEY_866508.colSpan = 3;
this.VA_CODCLIENTCIXLEY_866508.format = "";
this.VA_CODCLIENTCIXLEY_866508.maxlength= 11;
this.VA_CODCLIENTCIXLEY_866508.readOnly = ConstantsApi.mode.Query;
this.VA_CODCLIENTCIXLEY_866508.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CODCLIENTCIXLEY_866508.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CODCLIENTCIXLEY_866508.inputRestrictionValidators = { onlyNumbers: true};
this.VA_CODCLIENTCIXLEY_866508.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2147483647')]
]);
this.VA_CODCLIENTCIXLEY_866508.messagesValidations = {
valueRange: cobis.translate('ASSTS.MSG_ASSTS_SEDEBERZE_11978')
};
this.VA_OPERATIONZDFLWM_772508.label = cobis.translate("ASSTS.LBL_ASSTS_NUMPRSTOO_83774");
this.VA_OPERATIONZDFLWM_772508.entity = "LoanSearchFilter";
this.VA_OPERATIONZDFLWM_772508.attribute = "operation";
this.VA_OPERATIONZDFLWM_772508.maxlength= 15;
this.VA_OPERATIONZDFLWM_772508.textCase= TextCaseOptions.NONE;
this.VA_OPERATIONZDFLWM_772508.name="operation";
this.VA_OPERATIONZDFLWM_772508.id="VA_OPERATIONZDFLWM_772508";
this.VA_OPERATIONZDFLWM_772508.colSpan=3;
this.VA_OPERATIONZDFLWM_772508.withoutLabel = false;
this.VA_OPERATIONZDFLWM_772508.readOnly = ConstantsApi.mode.Query;
this.VA_OPERATIONZDFLWM_772508.enabled = ConstantsApi.mode.All;
this.VA_OPERATIONZDFLWM_772508.visible= ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_195508.label = cobis.translate("ASSTS.LBL_ASSTS_NUMTRMITE_20261");
this.VA_NUMPROCEDURESSS_195508.entity = "LoanSearchFilter";
this.VA_NUMPROCEDURESSS_195508.attribute = "numProcedures";
this.VA_NUMPROCEDURESSS_195508.maxlength= 11;
this.VA_NUMPROCEDURESSS_195508.textCase= TextCaseOptions.NONE;
this.VA_NUMPROCEDURESSS_195508.name="numProcedures";
this.VA_NUMPROCEDURESSS_195508.id="VA_NUMPROCEDURESSS_195508";
this.VA_NUMPROCEDURESSS_195508.colSpan=3;
this.VA_NUMPROCEDURESSS_195508.withoutLabel = false;
this.VA_NUMPROCEDURESSS_195508.readOnly = ConstantsApi.mode.Query;
this.VA_NUMPROCEDURESSS_195508.enabled = ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_195508.visible= ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_195508.inputRestrictionValidators = { onlyNumbers: true};
this.VA_NUMPROCEDURESSS_195508.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2147483647')]
]);
this.VA_NUMPROCEDURESSS_195508.messagesValidations = {
valueRange: cobis.translate('ASSTS.MSG_ASSTS_SEDEBERZE_11978')
};
this.VA_OFFICEVEGBCEQOG_104508.label = cobis.translate("ASSTS.LBL_ASSTS_OFICINAHX_44623");
this.VA_OFFICEVEGBCEQOG_104508.blankOption=true;
this.VA_OFFICEVEGBCEQOG_104508.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCIRR_76753");
this.VA_OFFICEVEGBCEQOG_104508.entity = "LoanSearchFilter";
this.VA_OFFICEVEGBCEQOG_104508.attribute = "office";
this.VA_OFFICEVEGBCEQOG_104508.textField = "value";
this.VA_OFFICEVEGBCEQOG_104508.valueField = "code";
this.VA_OFFICEVEGBCEQOG_104508.showId= true;
this.VA_OFFICEVEGBCEQOG_104508.name="office";
this.VA_OFFICEVEGBCEQOG_104508.id="VA_OFFICEVEGBCEQOG_104508";
this.VA_OFFICEVEGBCEQOG_104508.colSpan=3;
this.VA_OFFICEVEGBCEQOG_104508.withoutLabel = false;
this.VA_OFFICEVEGBCEQOG_104508.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICEVEGBCEQOG_104508.enabled = ConstantsApi.mode.All;
this.VA_OFFICEVEGBCEQOG_104508.visible= ConstantsApi.mode.All;
this.VA_CODCURRENCYKYKA_122508.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDATUB_92849");
this.VA_CODCURRENCYKYKA_122508.blankOption=true;
this.VA_CODCURRENCYKYKA_122508.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCIRR_76753");
this.VA_CODCURRENCYKYKA_122508.entity = "LoanSearchFilter";
this.VA_CODCURRENCYKYKA_122508.attribute = "codCurrency";
this.VA_CODCURRENCYKYKA_122508.textField = "value";
this.VA_CODCURRENCYKYKA_122508.valueField = "code";
this.VA_CODCURRENCYKYKA_122508.showId= true;
this.VA_CODCURRENCYKYKA_122508.name="codCurrency";
this.VA_CODCURRENCYKYKA_122508.id="VA_CODCURRENCYKYKA_122508";
this.VA_CODCURRENCYKYKA_122508.colSpan=3;
this.VA_CODCURRENCYKYKA_122508.withoutLabel = false;
this.VA_CODCURRENCYKYKA_122508.readOnly = ConstantsApi.mode.Query;
this.VA_CODCURRENCYKYKA_122508.enabled = ConstantsApi.mode.All;
this.VA_CODCURRENCYKYKA_122508.visible= ConstantsApi.mode.None;
this.VA_DISBURSEMENTDTD_602508.label = cobis.translate("ASSTS.LBL_ASSTS_FECHADEBE_42043");
this.VA_DISBURSEMENTDTD_602508.entity = "LoanSearchFilter";
this.VA_DISBURSEMENTDTD_602508.attribute = "disbursementDate";
this.VA_DISBURSEMENTDTD_602508.name="disbursementDate";
this.VA_DISBURSEMENTDTD_602508.id="VA_DISBURSEMENTDTD_602508";
this.VA_DISBURSEMENTDTD_602508.colSpan=3;
this.VA_DISBURSEMENTDTD_602508.withoutLabel = false;
this.VA_DISBURSEMENTDTD_602508.readOnly = ConstantsApi.mode.Query;
this.VA_DISBURSEMENTDTD_602508.enabled = ConstantsApi.mode.All;
this.VA_DISBURSEMENTDTD_602508.visible= ConstantsApi.mode.None;
this.VA_STATUSRUGGOTSMF_965508.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOPEM_54793");
this.VA_STATUSRUGGOTSMF_965508.blankOption=true;
this.VA_STATUSRUGGOTSMF_965508.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCIRR_76753");
this.VA_STATUSRUGGOTSMF_965508.entity = "LoanSearchFilter";
this.VA_STATUSRUGGOTSMF_965508.attribute = "status";
this.VA_STATUSRUGGOTSMF_965508.textField = "descripcion";
this.VA_STATUSRUGGOTSMF_965508.valueField = "codigo";
this.VA_STATUSRUGGOTSMF_965508.showId= true;
this.VA_STATUSRUGGOTSMF_965508.name="status";
this.VA_STATUSRUGGOTSMF_965508.id="VA_STATUSRUGGOTSMF_965508";
this.VA_STATUSRUGGOTSMF_965508.colSpan=3;
this.VA_STATUSRUGGOTSMF_965508.withoutLabel = false;
this.VA_STATUSRUGGOTSMF_965508.readOnly = ConstantsApi.mode.Query;
this.VA_STATUSRUGGOTSMF_965508.enabled = ConstantsApi.mode.All;
this.VA_STATUSRUGGOTSMF_965508.visible= ConstantsApi.mode.None;
this.VA_MIGRATEDOPERFRB_417508.label = cobis.translate("ASSTS.LBL_ASSTS_PRSTAMOIO_81821");
this.VA_MIGRATEDOPERFRB_417508.entity = "LoanSearchFilter";
this.VA_MIGRATEDOPERFRB_417508.attribute = "migratedOper";
this.VA_MIGRATEDOPERFRB_417508.textCase= TextCaseOptions.NONE;
this.VA_MIGRATEDOPERFRB_417508.name="migratedOper";
this.VA_MIGRATEDOPERFRB_417508.id="VA_MIGRATEDOPERFRB_417508";
this.VA_MIGRATEDOPERFRB_417508.colSpan=3;
this.VA_MIGRATEDOPERFRB_417508.withoutLabel = false;
this.VA_MIGRATEDOPERFRB_417508.readOnly = ConstantsApi.mode.Query;
this.VA_MIGRATEDOPERFRB_417508.enabled = ConstantsApi.mode.All;
this.VA_MIGRATEDOPERFRB_417508.visible= ConstantsApi.mode.None;
this.VA_MIGRATEDOPERFRB_417508.inputRestrictionValidators = { onlyNumbers: true};
this.VA_TYPEDCJJSHZRQGI_148508.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOOPERC_17964");
this.VA_TYPEDCJJSHZRQGI_148508.blankOption=true;
this.VA_TYPEDCJJSHZRQGI_148508.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_TYPEDCJJSHZRQGI_148508.entity = "LoanSearchFilter";
this.VA_TYPEDCJJSHZRQGI_148508.attribute = "type";
this.VA_TYPEDCJJSHZRQGI_148508.textField = "value";
this.VA_TYPEDCJJSHZRQGI_148508.valueField = "code";
this.VA_TYPEDCJJSHZRQGI_148508.showId= true;
this.VA_TYPEDCJJSHZRQGI_148508.name="type";
this.VA_TYPEDCJJSHZRQGI_148508.id="VA_TYPEDCJJSHZRQGI_148508";
this.VA_TYPEDCJJSHZRQGI_148508.colSpan=3;
this.VA_TYPEDCJJSHZRQGI_148508.withoutLabel = false;
this.VA_TYPEDCJJSHZRQGI_148508.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEDCJJSHZRQGI_148508.enabled = ConstantsApi.mode.All;
this.VA_TYPEDCJJSHZRQGI_148508.visible= ConstantsApi.mode.None;
this.VA_AVANCESEARCHMXA_533508.id = "VA_AVANCESEARCHMXA_533508";
this.VA_AVANCESEARCHMXA_533508.name = "avanceSearch";
this.VA_AVANCESEARCHMXA_533508.label = cobis.translate("ASSTS.LBL_ASSTS_CRITERIOO_80936");
this.VA_AVANCESEARCHMXA_533508.entity = "LoanSearchFilter";
this.VA_AVANCESEARCHMXA_533508.attribute = "avanceSearch";
this.VA_AVANCESEARCHMXA_533508.colSpan = 3;
this.VA_AVANCESEARCHMXA_533508.withoutLabel = false;
this.VA_AVANCESEARCHMXA_533508.readOnly =ConstantsApi.mode.Query;
this.VA_AVANCESEARCHMXA_533508.enabled = ConstantsApi.mode.All;
this.VA_AVANCESEARCHMXA_533508.visible= ConstantsApi.mode.All;
this.VA_8665NTBOQUTYEHZ_620508.id = "VA_8665NTBOQUTYEHZ_620508";
this.VA_8665NTBOQUTYEHZ_620508.name = "group";
this.VA_8665NTBOQUTYEHZ_620508.label = cobis.translate("ASSTS.LBL_ASSTS_GRUPALODU_58244");
this.VA_8665NTBOQUTYEHZ_620508.entity = "LoanSearchFilter";
this.VA_8665NTBOQUTYEHZ_620508.attribute = "group";
this.VA_8665NTBOQUTYEHZ_620508.colSpan = 3;
this.VA_8665NTBOQUTYEHZ_620508.withoutLabel = false;
this.VA_8665NTBOQUTYEHZ_620508.readOnly =ConstantsApi.mode.Query;
this.VA_8665NTBOQUTYEHZ_620508.enabled = ConstantsApi.mode.All;
this.VA_8665NTBOQUTYEHZ_620508.visible= ConstantsApi.mode.All;
this.VA_8665NTBOQUTYEHZ_620508.trueValue ="S";
this.VA_8665NTBOQUTYEHZ_620508.falseValue ="N";
this.Spacer1639.id = "Spacer1639";
this.Spacer1639.name = "Spacer1639";
this.Spacer1639.colSpan = 3;
this.Spacer1639.visible= ConstantsApi.mode.None;
this.Spacer1249.id = "Spacer1249";
this.Spacer1249.name = "Spacer1249";
this.Spacer1249.colSpan = 3;
this.Spacer1249.visible= ConstantsApi.mode.None;
this.Spacer1732.id = "Spacer1732";
this.Spacer1732.name = "Spacer1732";
this.Spacer1732.colSpan = 3;
this.Spacer1732.visible= ConstantsApi.mode.All;
this.VA_VABUTTONBCZSHFM_208508.id = "VA_VABUTTONBCZSHFM_208508";
this.VA_VABUTTONBCZSHFM_208508.name = "VA_VABUTTONBCZSHFM_208508";
this.VA_VABUTTONBCZSHFM_208508.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONBCZSHFM_208508.colSpan = 3;
this.VA_VABUTTONBCZSHFM_208508.withoutLabel = false;
this.VA_VABUTTONBCZSHFM_208508.causesValidation=false;
this.VA_VABUTTONBCZSHFM_208508.submitOnEnter=false;
this.VA_VABUTTONBCZSHFM_208508.setFocus=false;
this.VA_VABUTTONBCZSHFM_208508.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONBCZSHFM_208508.visible= ConstantsApi.mode.All;
this.QV_3009_96085.pageSize=5;
this.QV_3009_96085.id='QV_3009_96085';
this.QV_3009_96085.name='QV_3009_96085';
this.QV_3009_96085.pageable=true;
this.QV_3009_96085.sortable=false;
this.QV_3009_96085.resizable=true;
this.QV_3009_96085.scrollable=true
this.QV_3009_96085.confirmRowDeletion=false;
this.QV_3009_96085.exportToExcel=true;
this.QV_3009_96085.exportToPdf=false;
this.QV_3009_96085.height=0;
this.QV_3009_96085.filterableColumns=false;
this.QV_3009_96085.entityName='Loan';
this.QV_3009_96085.appendRecords=false;
this.QV_3009_96085.rowDetail=false;
this.QV_3009_96085.columnMenu = true;
this.QV_3009_96085.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_3009_96085.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_3009_96085.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXDAN_761508",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOPREMM_37747'),
field : 'desOperationType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXDAN_761508',
name :'desOperationType',
withoutLabel : true,
attribute : 'desOperationType',
entity : 'Loan',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFXZ_333508",
label : cobis.translate('ASSTS.LBL_ASSTS_NUMPRESAT_15246'),
field : 'loanBankID',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXFXZ_333508',
name :'loanBankID',
withoutLabel : true,
attribute : 'loanBankID',
entity : 'Loan',
maxlength: 24,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEUM_243508",
label : cobis.translate('ASSTS.LBL_ASSTS_CODCLIENN_10354'),
field : 'clientID',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXEUM_243508',
name :'clientID',
withoutLabel : true,
attribute : 'clientID',
entity : 'Loan',
format : '########',
maxlength: 4,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBPY_504508",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBRECNI_63306'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 300,
properties :
{
id :'VA_TEXTINPUTBOXBPY_504508',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'Loan',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWLO_792508",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOPRAM_67448'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 200,
properties :
{
id :'VA_TEXTINPUTBOXWLO_792508',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'Loan',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLLX_842508",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOPOT_95000'),
field : 'status',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLLX_842508',
name :'status',
withoutLabel : true,
attribute : 'status',
entity : 'Loan',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDDDLJHB_303508",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENE_58948'),
field : 'expirationDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDDDLJHB_303508',
name :'expirationDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'expirationDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Loan',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXVFT_322508",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'codCurrency',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXVFT_322508',
name :'codCurrency',
attribute : 'codCurrency',
entity : 'Loan',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
}
},
{
id : "VA_DATEFIELDLYQLTD_622508",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHADEBE_42043'),
field : 'disbursementDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDLYQLTD_622508',
name :'disbursementDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'disbursementDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Loan',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXXJI_412508",
label : cobis.translate('ASSTS.LBL_ASSTS_NUMTRAMTT_81104'),
field : 'numProcedure',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXXJI_412508',
name :'numProcedure',
withoutLabel : true,
attribute : 'numProcedure',
entity : 'Loan',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBHQ_121508",
label : cobis.translate('ASSTS.LBL_ASSTS_GRUPOOBAY_84995'),
field : 'group',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXBHQ_121508',
name :'group',
withoutLabel : true,
attribute : 'group',
entity : 'Loan',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGYK_201508",
label : cobis.translate('ASSTS.LBL_ASSTS_CATEGORAI_18464'),
field : 'categoryGroup',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXGYK_201508',
name :'categoryGroup',
withoutLabel : true,
attribute : 'categoryGroup',
entity : 'Loan',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LOANSEARCHSWA_959 = this.formBuilder.group({
LoanSearchFilter: this.formBuilder.group({
numIdentification:[{value: null, disabled: !this.VA_CODCLIENTCIXLEY_866508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODCLIENTCIXLEY_866508.validationFunctions!)],
operation:[{value: null, disabled: !this.VA_OPERATIONZDFLWM_772508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPERATIONZDFLWM_772508.validationFunctions!)],
numProcedures:[{value: null, disabled: !this.VA_NUMPROCEDURESSS_195508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMPROCEDURESSS_195508.validationFunctions!)],
office:[{value: null, disabled: !this.VA_OFFICEVEGBCEQOG_104508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICEVEGBCEQOG_104508.validationFunctions!)],
codCurrency:[{value: null, disabled: !this.VA_CODCURRENCYKYKA_122508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODCURRENCYKYKA_122508.validationFunctions!)],
disbursementDate:[{value: null, disabled: !this.VA_DISBURSEMENTDTD_602508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DISBURSEMENTDTD_602508.validationFunctions!)],
status:[{value: null, disabled: !this.VA_STATUSRUGGOTSMF_965508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATUSRUGGOTSMF_965508.validationFunctions!)],
migratedOper:[{value: null, disabled: !this.VA_MIGRATEDOPERFRB_417508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MIGRATEDOPERFRB_417508.validationFunctions!)],
type:[{value: null, disabled: !this.VA_TYPEDCJJSHZRQGI_148508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEDCJJSHZRQGI_148508.validationFunctions!)],
avanceSearch:[{value: false, disabled: !this.VA_AVANCESEARCHMXA_533508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AVANCESEARCHMXA_533508.validationFunctions!)],
group:[{value: false, disabled: !this.VA_8665NTBOQUTYEHZ_620508.visible},CobisDesignerUtil.getValidationFunctions(this.VA_8665NTBOQUTYEHZ_620508.validationFunctions!)],
category:[null],
codClient:[null],
isGroup:[null],
isDisbursment:[null],
officer:[null],
}
),
Loan: this.formBuilder.group({
desOperationType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXDAN_761508')],
loanBankID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXFXZ_333508')],
clientID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXEUM_243508')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXBPY_504508')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXWLO_792508')],
status:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXLLX_842508')],
expirationDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_DATEFIELDDDLJHB_303508')],
codCurrency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXVFT_322508')],
disbursementDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_DATEFIELDLYQLTD_622508')],
numProcedure:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXXJI_412508')],
group:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXBHQ_121508')],
categoryGroup:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXGYK_201508')],
isDisbursment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXBCW_500508')],
category:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXQYB_745508')],
tipo:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3009_96085.columns,'VA_TEXTINPUTBOXOXY_700508')],
quotaCredit:[null],
statusID:[null],
maxDateProrogation:[null],
lastProcessDate:[null],
balanceDue:[null],
operationTypeID:[null],
newStatusID:[null],
mnemonic:[null],
natureOp:[null],
migratedOper:[null],
amortizationType:[null],
loanID:[null],
officeID:[null],
amountApproved:[null],
currencyName:[null],
startDate:[null],
statusCopy:[null],
idType:[null],
endDate:[null],
fondeadorLS:[null],
identityCardNumber:[null],
redesCont:[null],
newStatus:[null],
previousOper:[null],
operationType:[null],
officer:[null],
sector:[null],
nextPayment:[null],
effectiveAnualRate:[null],
adjustment:[null],
officerID:[null],
office:[null],
feeEndDate:[null],
}
),
});
}
}