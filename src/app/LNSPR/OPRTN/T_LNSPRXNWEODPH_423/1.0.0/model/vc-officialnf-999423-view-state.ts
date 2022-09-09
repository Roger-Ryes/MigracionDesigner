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
public T_LNSPRXNWEODPH_423!:FormGroup;
public VC_OFFICIALNF_999423:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OFFICIAARF_554800 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OFFICIACLN_285800 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OFFICIATFF_144800 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OFFICIAEEO_796800 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OFFICIAFRS_887800 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OFFICIAFFO_754800 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_JQ56_BYK87: CobisGridModel = new CobisGridModel();
public VA_TRANSFERTYPETWU_989800: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_ORIGINOFFICEUMK_654800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_ORIGINOFFICILAA_229800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DESTINATIONOEEF_643800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DESTINATIONOIAI_845800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_REASONDDWAKVIHS_847800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VABUTTONJPBQXMZ_513800: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRXN_W2R: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_OFFICIALNF_999423.id="VC_OFFICIALNF_999423";
this.VC_OFFICIALNF_999423.name="OfficialOfficeTransferForm";
this.VC_OFFICIALNF_999423.colSpan=1;
this.VC_OFFICIALNF_999423.columns=1;
this.VC_OFFICIALNF_999423.enabled=ConstantsApi.mode.All;
this.G_OFFICIAARF_554800.id="G_OFFICIAARF_554800";
this.G_OFFICIAARF_554800.name="Group1308";
this.G_OFFICIAARF_554800.columns=3;
this.G_OFFICIAARF_554800.labelOrientation="Top";
this.G_OFFICIAARF_554800.colSpan=1;
this.G_OFFICIAARF_554800.enabled=ConstantsApi.mode.All;
this.G_OFFICIAARF_554800.visible=ConstantsApi.mode.All;
this.G_OFFICIAARF_554800.attList = ["transferType"];
this.G_OFFICIACLN_285800.id="G_OFFICIACLN_285800";
this.G_OFFICIACLN_285800.name="GroupLayout1996";
this.G_OFFICIACLN_285800.columns=12;
this.G_OFFICIACLN_285800.childrenGroups = ["G_OFFICIATFF_144800","G_EMPTYHNWQL_544800","G_EMPTYVPQAT_460800","G_OFFICIAEEO_796800","G_EMPTYTLAYF_914800","G_EMPTYNXFEZ_137800","G_EMPTYRLAMK_555800","G_EMPTYEWRCS_120800","G_EMPTYMUMVS_187800","G_EMPTYBRCCL_340800","G_EMPTYBJYMQ_533800","G_OFFICIAFRS_887800"];
this.G_OFFICIACLN_285800.colSpan=1;
this.G_OFFICIACLN_285800.enabled=ConstantsApi.mode.All;
this.G_OFFICIACLN_285800.visible=ConstantsApi.mode.All;
this.G_OFFICIATFF_144800.id="G_OFFICIATFF_144800";
this.G_OFFICIATFF_144800.label=cobis.translate("LNSPR.LBL_LNSPR_ORIGENJLN_13505");
this.G_OFFICIATFF_144800.name="Group2301";
this.G_OFFICIATFF_144800.columns=1;
this.G_OFFICIATFF_144800.labelOrientation="Top";
this.G_OFFICIATFF_144800.colSpan=5;
this.G_OFFICIATFF_144800.enabled=ConstantsApi.mode.All;
this.G_OFFICIATFF_144800.visible=ConstantsApi.mode.All;
this.G_OFFICIATFF_144800.attList = ["originOffice","originOfficial"];
this.G_OFFICIAEEO_796800.id="G_OFFICIAEEO_796800";
this.G_OFFICIAEEO_796800.label=cobis.translate("LNSPR.LBL_LNSPR_DESTINOEC_23642");
this.G_OFFICIAEEO_796800.name="Group2425";
this.G_OFFICIAEEO_796800.columns=1;
this.G_OFFICIAEEO_796800.labelOrientation="Top";
this.G_OFFICIAEEO_796800.colSpan=5;
this.G_OFFICIAEEO_796800.enabled=ConstantsApi.mode.All;
this.G_OFFICIAEEO_796800.visible=ConstantsApi.mode.All;
this.G_OFFICIAEEO_796800.attList = ["destinationOffice","destinationOfficial","reason"];
this.G_OFFICIAFRS_887800.id="G_OFFICIAFRS_887800";
this.G_OFFICIAFRS_887800.name="Group1995";
this.G_OFFICIAFRS_887800.columns=1;
this.G_OFFICIAFRS_887800.labelOrientation="Top";
this.G_OFFICIAFRS_887800.colSpan=5;
this.G_OFFICIAFRS_887800.enabled=ConstantsApi.mode.All;
this.G_OFFICIAFRS_887800.visible=ConstantsApi.mode.All;
this.G_OFFICIAFFO_754800.id="G_OFFICIAFFO_754800";
this.G_OFFICIAFFO_754800.name="Group1785";
this.G_OFFICIAFFO_754800.columns=1;
this.G_OFFICIAFFO_754800.labelOrientation="Top";
this.G_OFFICIAFFO_754800.colSpan=1;
this.G_OFFICIAFFO_754800.enabled=ConstantsApi.mode.All;
this.G_OFFICIAFFO_754800.visible=ConstantsApi.mode.All;
this.G_OFFICIAFFO_754800.attList = ["selected","loanType","bankId","loanStatus","loansStatusDesc","clientCode","clientName","category","amount","expirationDate","currencyCode","disbursementDate","processNumber","groupCode","officeCode","officialCode","sequential"];
this.CM_TLNSPRXN_W2R.id = "CM_TLNSPRXN_W2R";
this.CM_TLNSPRXN_W2R.name = "Command1";
this.CM_TLNSPRXN_W2R.causesValidation=false;
this.CM_TLNSPRXN_W2R.submitOnEnter=false;
this.CM_TLNSPRXN_W2R.setFocus=false;
this.CM_TLNSPRXN_W2R.close=false;
this.CM_TLNSPRXN_W2R.label = cobis.translate("LNSPR.LBL_LNSPR_TRASLADRA_39650");
this.CM_TLNSPRXN_W2R.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRXN_W2R.visible= ConstantsApi.mode.All;
this.VA_TRANSFERTYPETWU_989800.id = "VA_TRANSFERTYPETWU_989800";
this.VA_TRANSFERTYPETWU_989800.name = "transferType";
this.VA_TRANSFERTYPETWU_989800.attribute = "transferType";
this.VA_TRANSFERTYPETWU_989800.label = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_TRANSFERTYPETWU_989800.colSpan = 1;
this.VA_TRANSFERTYPETWU_989800.withoutLabel = false;
this.VA_TRANSFERTYPETWU_989800.readOnly = ConstantsApi.mode.Query;
this.VA_TRANSFERTYPETWU_989800.entity = "OfficialOfficeTransferFilter";
this.VA_TRANSFERTYPETWU_989800.enabled = ConstantsApi.mode.All;
this.VA_TRANSFERTYPETWU_989800.visible= ConstantsApi.mode.All;
this.VA_TRANSFERTYPETWU_989800.textField = "value";
this.VA_TRANSFERTYPETWU_989800.valueField = "code";
this.VA_TRANSFERTYPETWU_989800.required = true;
this.VA_TRANSFERTYPETWU_989800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TRANSFERTYPETWU_989800.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_ORIGINOFFICEUMK_654800.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAGV_33565");
this.VA_ORIGINOFFICEUMK_654800.blankOption=true;
this.VA_ORIGINOFFICEUMK_654800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_ORIGINOFFICEUMK_654800.entity = "OfficialOfficeTransferFilter";
this.VA_ORIGINOFFICEUMK_654800.attribute = "originOffice";
this.VA_ORIGINOFFICEUMK_654800.textField = "value";
this.VA_ORIGINOFFICEUMK_654800.valueField = "code";
this.VA_ORIGINOFFICEUMK_654800.showId= true;
this.VA_ORIGINOFFICEUMK_654800.name="originOffice";
this.VA_ORIGINOFFICEUMK_654800.id="VA_ORIGINOFFICEUMK_654800";
this.VA_ORIGINOFFICEUMK_654800.colSpan=1;
this.VA_ORIGINOFFICEUMK_654800.withoutLabel = false;
this.VA_ORIGINOFFICEUMK_654800.readOnly = ConstantsApi.mode.Query;
this.VA_ORIGINOFFICEUMK_654800.enabled = ConstantsApi.mode.All;
this.VA_ORIGINOFFICEUMK_654800.visible= ConstantsApi.mode.All;
this.VA_ORIGINOFFICEUMK_654800.required = true;
this.VA_ORIGINOFFICEUMK_654800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ORIGINOFFICEUMK_654800.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_ORIGINOFFICILAA_229800.label = cobis.translate("LNSPR.LBL_LNSPR_OFICIALCI_17854");
this.VA_ORIGINOFFICILAA_229800.blankOption=true;
this.VA_ORIGINOFFICILAA_229800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_ORIGINOFFICILAA_229800.entity = "OfficialOfficeTransferFilter";
this.VA_ORIGINOFFICILAA_229800.attribute = "originOfficial";
this.VA_ORIGINOFFICILAA_229800.cascadeFrom = "VA_ORIGINOFFICEUMK_654800";
this.VA_ORIGINOFFICEUMK_654800.isCascadeParent = true;
this.VA_ORIGINOFFICILAA_229800.textField = "officialName";
this.VA_ORIGINOFFICILAA_229800.valueField = "officialCode";
this.VA_ORIGINOFFICILAA_229800.showId= true;
this.VA_ORIGINOFFICILAA_229800.name="originOfficial";
this.VA_ORIGINOFFICILAA_229800.id="VA_ORIGINOFFICILAA_229800";
this.VA_ORIGINOFFICILAA_229800.colSpan=1;
this.VA_ORIGINOFFICILAA_229800.withoutLabel = false;
this.VA_ORIGINOFFICILAA_229800.readOnly = ConstantsApi.mode.Query;
this.VA_ORIGINOFFICILAA_229800.enabled = ConstantsApi.mode.All;
this.VA_ORIGINOFFICILAA_229800.visible= ConstantsApi.mode.All;
this.VA_ORIGINOFFICILAA_229800.required = true;
this.VA_ORIGINOFFICILAA_229800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ORIGINOFFICILAA_229800.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_DESTINATIONOEEF_643800.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAGV_33565");
this.VA_DESTINATIONOEEF_643800.blankOption=true;
this.VA_DESTINATIONOEEF_643800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_DESTINATIONOEEF_643800.entity = "OfficialOfficeTransferFilter";
this.VA_DESTINATIONOEEF_643800.attribute = "destinationOffice";
this.VA_DESTINATIONOEEF_643800.textField = "value";
this.VA_DESTINATIONOEEF_643800.valueField = "code";
this.VA_DESTINATIONOEEF_643800.showId= true;
this.VA_DESTINATIONOEEF_643800.name="destinationOffice";
this.VA_DESTINATIONOEEF_643800.id="VA_DESTINATIONOEEF_643800";
this.VA_DESTINATIONOEEF_643800.colSpan=1;
this.VA_DESTINATIONOEEF_643800.withoutLabel = false;
this.VA_DESTINATIONOEEF_643800.readOnly = ConstantsApi.mode.Query;
this.VA_DESTINATIONOEEF_643800.enabled = ConstantsApi.mode.All;
this.VA_DESTINATIONOEEF_643800.visible= ConstantsApi.mode.All;
this.VA_DESTINATIONOEEF_643800.required = true;
this.VA_DESTINATIONOEEF_643800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DESTINATIONOEEF_643800.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_DESTINATIONOIAI_845800.label = cobis.translate("LNSPR.LBL_LNSPR_OFICIALCI_17854");
this.VA_DESTINATIONOIAI_845800.blankOption=true;
this.VA_DESTINATIONOIAI_845800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_DESTINATIONOIAI_845800.entity = "OfficialOfficeTransferFilter";
this.VA_DESTINATIONOIAI_845800.attribute = "destinationOfficial";
this.VA_DESTINATIONOIAI_845800.cascadeFrom = "VA_DESTINATIONOEEF_643800";
this.VA_DESTINATIONOEEF_643800.isCascadeParent = true;
this.VA_DESTINATIONOIAI_845800.textField = "officialName";
this.VA_DESTINATIONOIAI_845800.valueField = "officialCode";
this.VA_DESTINATIONOIAI_845800.showId= true;
this.VA_DESTINATIONOIAI_845800.name="destinationOfficial";
this.VA_DESTINATIONOIAI_845800.id="VA_DESTINATIONOIAI_845800";
this.VA_DESTINATIONOIAI_845800.colSpan=1;
this.VA_DESTINATIONOIAI_845800.withoutLabel = false;
this.VA_DESTINATIONOIAI_845800.readOnly = ConstantsApi.mode.Query;
this.VA_DESTINATIONOIAI_845800.enabled = ConstantsApi.mode.All;
this.VA_DESTINATIONOIAI_845800.visible= ConstantsApi.mode.All;
this.VA_DESTINATIONOIAI_845800.required = true;
this.VA_DESTINATIONOIAI_845800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DESTINATIONOIAI_845800.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_REASONDDWAKVIHS_847800.label = cobis.translate("LNSPR.LBL_LNSPR_MOTIVONDC_67143");
this.VA_REASONDDWAKVIHS_847800.blankOption=true;
this.VA_REASONDDWAKVIHS_847800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_REASONDDWAKVIHS_847800.entity = "OfficialOfficeTransferFilter";
this.VA_REASONDDWAKVIHS_847800.attribute = "reason";
this.VA_REASONDDWAKVIHS_847800.textField = "value";
this.VA_REASONDDWAKVIHS_847800.valueField = "code";
this.VA_REASONDDWAKVIHS_847800.showId= true;
this.VA_REASONDDWAKVIHS_847800.name="reason";
this.VA_REASONDDWAKVIHS_847800.id="VA_REASONDDWAKVIHS_847800";
this.VA_REASONDDWAKVIHS_847800.colSpan=1;
this.VA_REASONDDWAKVIHS_847800.withoutLabel = false;
this.VA_REASONDDWAKVIHS_847800.readOnly = ConstantsApi.mode.Query;
this.VA_REASONDDWAKVIHS_847800.enabled = ConstantsApi.mode.All;
this.VA_REASONDDWAKVIHS_847800.visible= ConstantsApi.mode.All;
this.VA_REASONDDWAKVIHS_847800.required = true;
this.VA_REASONDDWAKVIHS_847800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_REASONDDWAKVIHS_847800.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_VABUTTONJPBQXMZ_513800.id = "VA_VABUTTONJPBQXMZ_513800";
this.VA_VABUTTONJPBQXMZ_513800.name = "VA_VABUTTONJPBQXMZ_513800";
this.VA_VABUTTONJPBQXMZ_513800.label = cobis.translate("LNSPR.LBL_LNSPR_BUSCARKBJ_59373");
this.VA_VABUTTONJPBQXMZ_513800.colSpan = 1;
this.VA_VABUTTONJPBQXMZ_513800.withoutLabel = false;
this.VA_VABUTTONJPBQXMZ_513800.causesValidation=false;
this.VA_VABUTTONJPBQXMZ_513800.submitOnEnter=false;
this.VA_VABUTTONJPBQXMZ_513800.setFocus=false;
this.VA_VABUTTONJPBQXMZ_513800.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONJPBQXMZ_513800.visible= ConstantsApi.mode.All;
this.QV_JQ56_BYK87.pageSize=5;
this.QV_JQ56_BYK87.id='QV_JQ56_BYK87';
this.QV_JQ56_BYK87.name='QV_JQ56_BYK87';
this.QV_JQ56_BYK87.pageable=true;
this.QV_JQ56_BYK87.sortable=false;
this.QV_JQ56_BYK87.resizable=true;
this.QV_JQ56_BYK87.scrollable=true
this.QV_JQ56_BYK87.confirmRowDeletion=false;
this.QV_JQ56_BYK87.exportToExcel=false;
this.QV_JQ56_BYK87.exportToPdf=false;
this.QV_JQ56_BYK87.height=0;
this.QV_JQ56_BYK87.filterableColumns=false;
this.QV_JQ56_BYK87.entityName='OfficialOfficeTransferList';
this.QV_JQ56_BYK87.appendRecords=true;
this.QV_JQ56_BYK87.rowDetail=false;
this.QV_JQ56_BYK87.columnMenu = true;
this.QV_JQ56_BYK87.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_JQ56_BYK87.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
this.QV_JQ56_BYK87.commandsButton=[
{
id : 'CEQV_201QV_JQ56_BYK87_540',
image:'',
label: cobis.translate('LNSPR.LBL_LNSPR_SELECCIRA_72320'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Button',
enabled:true,
visible:true
},
];
//RowCommands:
//Creacion de columnas del Grid
this.QV_JQ56_BYK87.columns = Util.filterByMode(this.mode, [
{
id : "VA_CHECKBOXGIYYTMJ_813800",
label : cobis.translate('LNSPR.LBL_LNSPR_SELECCIRA_72320'),
field : 'selected',
visible : ConstantsApi.mode.All,
type : 'template',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_CHECKBOXGIYYTMJ_813800',
name :'selected',
withoutLabel : true,
attribute : 'selected',
entity : 'OfficialOfficeTransferList',
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
id : "VA_TEXTINPUTBOXZQP_407800",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOPREMM_37747'),
field : 'loanType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZQP_407800',
name :'loanType',
withoutLabel : true,
attribute : 'loanType',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZGT_364800",
label : cobis.translate('LNSPR.LBL_LNSPR_NUMPRESTO_78484'),
field : 'bankId',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZGT_364800',
name :'bankId',
withoutLabel : true,
attribute : 'bankId',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRQU_320800",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOPST_36165'),
field : 'loansStatusDesc',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRQU_320800',
name :'loansStatusDesc',
withoutLabel : true,
attribute : 'loansStatusDesc',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMYI_224800",
label : cobis.translate('LNSPR.LBL_LNSPR_CODCLIETT_20856'),
field : 'clientCode',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMYI_224800',
name :'clientCode',
withoutLabel : true,
attribute : 'clientCode',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXABA_156800",
label : cobis.translate('LNSPR.LBL_LNSPR_NOMBRECNI_63306'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXABA_156800',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEAE_629800",
label : cobis.translate('LNSPR.LBL_LNSPR_CATEGORII_28618'),
field : 'category',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEAE_629800',
name :'category',
withoutLabel : true,
attribute : 'category',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWUJ_217800",
label : cobis.translate('LNSPR.LBL_LNSPR_MONTOPREO_81448'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXWUJ_217800',
name :'amount',
attribute : 'amount',
entity : 'OfficialOfficeTransferList',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : true,
textField : "value",
valueField : "code",
}
},
{
id : "VA_DATEFIELDCWGGHH_393800",
field : 'expirationDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDCWGGHH_393800',
name :'expirationDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'expirationDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'OfficialOfficeTransferList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXVFU_652800",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'currencyCode',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVFU_652800',
name :'currencyCode',
withoutLabel : true,
attribute : 'currencyCode',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDVJZAPD_814800",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHADEBE_42043'),
field : 'disbursementDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDVJZAPD_814800',
name :'disbursementDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'disbursementDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'OfficialOfficeTransferList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXRPQ_938800",
label : cobis.translate('LNSPR.LBL_LNSPR_NUMTRAMEE_83198'),
field : 'processNumber',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRPQ_938800',
name :'processNumber',
withoutLabel : true,
attribute : 'processNumber',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQPF_381800",
label : cobis.translate('LNSPR.LBL_LNSPR_GRUPOOBAY_84995'),
field : 'groupCode',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQPF_381800',
name :'groupCode',
withoutLabel : true,
attribute : 'groupCode',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGMT_288800",
label : cobis.translate('LNSPR.LBL_LNSPR_OFICINAGV_33565'),
field : 'officeCode',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGMT_288800',
name :'officeCode',
withoutLabel : true,
attribute : 'officeCode',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPJJ_200800",
label : cobis.translate('LNSPR.LBL_LNSPR_OFICIALCI_17854'),
field : 'officialCode',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXPJJ_200800',
name :'officialCode',
withoutLabel : true,
attribute : 'officialCode',
entity : 'OfficialOfficeTransferList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRXNWEODPH_423 = this.formBuilder.group({
OfficialOfficeTransferFilter: this.formBuilder.group({
transferType:[{value: null, disabled: !this.VA_TRANSFERTYPETWU_989800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TRANSFERTYPETWU_989800.validationFunctions!)],
originOfficial:[null],
originOffice:[null],
destinationOffice:[null],
reason:[null],
destinationOfficial:[null],
}
),
OfficialOfficeTransferList: this.formBuilder.group({
selected:[{value: false, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_CHECKBOXGIYYTMJ_813800')],
loanType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXZQP_407800')],
bankId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXZGT_364800')],
loanStatus:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXLNV_618800')],
loansStatusDesc:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXRQU_320800')],
clientCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXMYI_224800')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXABA_156800')],
category:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXEAE_629800')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXWUJ_217800')],
expirationDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_DATEFIELDCWGGHH_393800')],
currencyCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXVFU_652800')],
disbursementDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_DATEFIELDVJZAPD_814800')],
processNumber:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXRPQ_938800')],
groupCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXQPF_381800')],
officeCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXGMT_288800')],
officialCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXPJJ_200800')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JQ56_BYK87.columns,'VA_TEXTINPUTBOXBRO_849800')],
}
),
});
}
}