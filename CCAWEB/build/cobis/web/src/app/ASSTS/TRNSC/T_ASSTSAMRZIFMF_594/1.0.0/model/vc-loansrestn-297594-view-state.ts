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
public T_ASSTSAMRZIFMF_594!:FormGroup;
public VC_LOANSRESTN_297594:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSREINR_878701 : CobisCollapsibleContainerModel = new CobisCollapsibleContainerModel();
public G_LOANSRENUU_627701_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_LOANSRENUU_627701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSREGTU_550701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSREUCU_656701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_UY75_AYT30: CobisGridModel = new CobisGridModel();
public G_LOANSRERCN_702701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSRECTN_307701_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_LOANSRECTN_307701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSREUNT_576701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_NAMECLIENTSGTLG_620701: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public Spacer2321: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONKFPIHHU_274701: CobisButtonModel = new CobisButtonModel();
public VA_RESTRUCTURINPGP_926701: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer2787: CobisSpacerModel = new CobisSpacerModel();
public VA_VASIMPLELABELLL_754701: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_573701: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_910701: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_931701: CobisTextLabelModel = new CobisTextLabelModel();
public VA_OPCURRENCYWEDUR_143701: CobisTextLabelModel = new CobisTextLabelModel();
public VA_LOCALCURRENCYYY_751701: CobisTextLabelModel = new CobisTextLabelModel();
public VA_AMOUNTPAYDUWVBB_952701: CobisTextLabelModel = new CobisTextLabelModel();
public CM_TASSTSAM_SAA: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSAM_7AT: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSRESTN_297594.id="VC_LOANSRESTN_297594";
this.VC_LOANSRESTN_297594.name="LoansRestructuring";
this.VC_LOANSRESTN_297594.colSpan=1;
this.VC_LOANSRESTN_297594.columns=1;
this.VC_LOANSRESTN_297594.enabled=ConstantsApi.mode.All;
this.G_LOANSREINR_878701.id="G_LOANSREINR_878701";
this.G_LOANSREINR_878701.name="LoansRestructuring";
this.G_LOANSREINR_878701.enabled=ConstantsApi.mode.All;
this.G_LOANSREINR_878701.controlType = ControlType.COLLAPSIBLE;
this.G_LOANSREINR_878701.colSpan=1;
this.G_LOANSREINR_878701.childrenGroups = ["G_LOANSRENUU_627701_item","G_LOANSRECTN_307701_item"];
this.G_LOANSRENUU_627701_item.id="G_LOANSRENUU_627701_item";
this.G_LOANSRENUU_627701_item.label=cobis.translate("ASSTS.LBL_ASSTS_BSQUEDAPR_26994");
this.G_LOANSRENUU_627701_item.childrenGroups = ['G_LOANSRENUU_627701'];
this.G_LOANSRENUU_627701_item.colSpan=1;
this.G_LOANSRENUU_627701_item.enabled=ConstantsApi.mode.All;
this.G_LOANSRENUU_627701_item.visible=ConstantsApi.mode.All;
this.G_LOANSRENUU_627701.id="G_LOANSRENUU_627701";
this.G_LOANSRENUU_627701.name="GroupLayout2589";
this.G_LOANSRENUU_627701.columns=1;
this.G_LOANSRENUU_627701.childrenGroups = ["G_LOANSREGTU_550701","G_LOANSREUCU_656701","G_LOANSRERCN_702701"];
this.G_LOANSRENUU_627701.colSpan=1;
this.G_LOANSRENUU_627701.enabled=ConstantsApi.mode.All;
this.G_LOANSRENUU_627701.visible=ConstantsApi.mode.All;
this.G_LOANSREGTU_550701.id="G_LOANSREGTU_550701";
this.G_LOANSREGTU_550701.name="Group2234";
this.G_LOANSREGTU_550701.columns=4;
this.G_LOANSREGTU_550701.labelOrientation="Top";
this.G_LOANSREGTU_550701.colSpan=1;
this.G_LOANSREGTU_550701.enabled=ConstantsApi.mode.All;
this.G_LOANSREGTU_550701.visible=ConstantsApi.mode.All;
this.G_LOANSREGTU_550701.attList = ["nameClient"];
this.G_LOANSREUCU_656701.id="G_LOANSREUCU_656701";
this.G_LOANSREUCU_656701.name="Group2624";
this.G_LOANSREUCU_656701.columns=1;
this.G_LOANSREUCU_656701.labelOrientation="Top";
this.G_LOANSREUCU_656701.colSpan=1;
this.G_LOANSREUCU_656701.enabled=ConstantsApi.mode.All;
this.G_LOANSREUCU_656701.visible=ConstantsApi.mode.All;
this.G_LOANSREUCU_656701.attList = ["finalOp","reest","bank","numLoan","typeLoan","currency","residualTerm","state","overduesFees","capitalBalance","interestBalance","otherItems","totalCap","toPay","capitalize"];
this.G_LOANSRERCN_702701.id="G_LOANSRERCN_702701";
this.G_LOANSRERCN_702701.name="Group1995";
this.G_LOANSRERCN_702701.columns=3;
this.G_LOANSRERCN_702701.labelOrientation="Top";
this.G_LOANSRERCN_702701.colSpan=1;
this.G_LOANSRERCN_702701.enabled=ConstantsApi.mode.All;
this.G_LOANSRERCN_702701.visible=ConstantsApi.mode.All;
this.G_LOANSRERCN_702701.attList = ["restructuringType"];
this.G_LOANSRECTN_307701_item.id="G_LOANSRECTN_307701_item";
this.G_LOANSRECTN_307701_item.label=cobis.translate("ASSTS.LBL_ASSTS_RESUMENSN_25970");
this.G_LOANSRECTN_307701_item.childrenGroups = ['G_LOANSRECTN_307701'];
this.G_LOANSRECTN_307701_item.colSpan=1;
this.G_LOANSRECTN_307701_item.enabled=ConstantsApi.mode.All;
this.G_LOANSRECTN_307701_item.visible=ConstantsApi.mode.All;
this.G_LOANSRECTN_307701.id="G_LOANSRECTN_307701";
this.G_LOANSRECTN_307701.name="GroupLayout2670";
this.G_LOANSRECTN_307701.columns=1;
this.G_LOANSRECTN_307701.childrenGroups = ["G_LOANSREUNT_576701"];
this.G_LOANSRECTN_307701.colSpan=1;
this.G_LOANSRECTN_307701.enabled=ConstantsApi.mode.All;
this.G_LOANSRECTN_307701.visible=ConstantsApi.mode.All;
this.G_LOANSREUNT_576701.id="G_LOANSREUNT_576701";
this.G_LOANSREUNT_576701.name="Group2245";
this.G_LOANSREUNT_576701.columns=4;
this.G_LOANSREUNT_576701.labelOrientation="Top";
this.G_LOANSREUNT_576701.colSpan=1;
this.G_LOANSREUNT_576701.enabled=ConstantsApi.mode.All;
this.G_LOANSREUNT_576701.visible=ConstantsApi.mode.All;
this.G_LOANSREUNT_576701.attList = ["opCurrency","localCurrency","amountPay"];
this.CM_TASSTSAM_SAA.id = "CM_TASSTSAM_SAA";
this.CM_TASSTSAM_SAA.name = "Command1";
this.CM_TASSTSAM_SAA.causesValidation=false;
this.CM_TASSTSAM_SAA.submitOnEnter=false;
this.CM_TASSTSAM_SAA.setFocus=false;
this.CM_TASSTSAM_SAA.close=false;
this.CM_TASSTSAM_SAA.label = cobis.translate("ASSTS.LBL_ASSTS_GUARDARRI_81055");
this.CM_TASSTSAM_SAA.enabled = ConstantsApi.mode.All;
this.CM_TASSTSAM_SAA.visible= ConstantsApi.mode.All;
this.CM_TASSTSAM_7AT.id = "CM_TASSTSAM_7AT";
this.CM_TASSTSAM_7AT.name = "Command2";
this.CM_TASSTSAM_7AT.causesValidation=false;
this.CM_TASSTSAM_7AT.submitOnEnter=false;
this.CM_TASSTSAM_7AT.setFocus=false;
this.CM_TASSTSAM_7AT.close=false;
this.CM_TASSTSAM_7AT.label = cobis.translate("ASSTS.LBL_ASSTS_LIMPIARAM_44649");
this.CM_TASSTSAM_7AT.enabled = ConstantsApi.mode.All;
this.CM_TASSTSAM_7AT.visible= ConstantsApi.mode.All;
this.VA_NAMECLIENTSGTLG_620701.id = "VA_NAMECLIENTSGTLG_620701";
this.VA_NAMECLIENTSGTLG_620701.name = "nameClient";
this.VA_NAMECLIENTSGTLG_620701.label = cobis.translate("ASSTS.LBL_ASSTS_CLIENTEMG_56892");
this.VA_NAMECLIENTSGTLG_620701.entity = "RestructuringFilter";
this.VA_NAMECLIENTSGTLG_620701.attribute = "nameClient";
this.VA_NAMECLIENTSGTLG_620701.colSpan = 2;
this.VA_NAMECLIENTSGTLG_620701.format = "";
this.VA_NAMECLIENTSGTLG_620701.readOnly = ConstantsApi.mode.Query;
this.VA_NAMECLIENTSGTLG_620701.enabled = ConstantsApi.mode.All;
this.VA_NAMECLIENTSGTLG_620701.visible= ConstantsApi.mode.All;
this.VA_NAMECLIENTSGTLG_620701.textLocked = true;
this.VA_NAMECLIENTSGTLG_620701.required = true;
this.VA_NAMECLIENTSGTLG_620701.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_NAMECLIENTSGTLG_620701.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.Spacer2321.id = "Spacer2321";
this.Spacer2321.name = "Spacer2321";
this.Spacer2321.colSpan = 1;
this.Spacer2321.visible= ConstantsApi.mode.All;
this.VA_VABUTTONKFPIHHU_274701.id = "VA_VABUTTONKFPIHHU_274701";
this.VA_VABUTTONKFPIHHU_274701.name = "VA_VABUTTONKFPIHHU_274701";
this.VA_VABUTTONKFPIHHU_274701.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONKFPIHHU_274701.colSpan = 1;
this.VA_VABUTTONKFPIHHU_274701.withoutLabel = false;
this.VA_VABUTTONKFPIHHU_274701.causesValidation=true;
this.VA_VABUTTONKFPIHHU_274701.submitOnEnter=false;
this.VA_VABUTTONKFPIHHU_274701.setFocus=false;
this.VA_VABUTTONKFPIHHU_274701.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONKFPIHHU_274701.visible= ConstantsApi.mode.All;
this.VA_VABUTTONKFPIHHU_274701.attributesGroup = this.G_LOANSREGTU_550701.attList;
this.QV_UY75_AYT30.pageSize=5;
this.QV_UY75_AYT30.id='QV_UY75_AYT30';
this.QV_UY75_AYT30.name='QV_UY75_AYT30';
this.QV_UY75_AYT30.pageable=true;
this.QV_UY75_AYT30.sortable=false;
this.QV_UY75_AYT30.resizable=true;
this.QV_UY75_AYT30.scrollable=true
this.QV_UY75_AYT30.confirmRowDeletion=false;
this.QV_UY75_AYT30.exportToExcel=false;
this.QV_UY75_AYT30.exportToPdf=false;
this.QV_UY75_AYT30.height=0;
this.QV_UY75_AYT30.filterableColumns=false;
this.QV_UY75_AYT30.entityName='RestructuringList';
this.QV_UY75_AYT30.appendRecords=false;
this.QV_UY75_AYT30.rowDetail=false;
this.QV_UY75_AYT30.columnMenu = true;
this.QV_UY75_AYT30.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_UY75_AYT30.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_UY75_AYT30.actions=[ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_UY75_AYT30.columns = Util.filterByMode(this.mode, [
{
id : "VA_CHECKBOXWFQPYPQ_909701",
label : cobis.translate('ASSTS.LBL_ASSTS_OPFINALCB_24086'),
field : 'finalOp',
visible : ConstantsApi.mode.All,
type : 'template',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_CHECKBOXWFQPYPQ_909701',
name :'finalOp',
withoutLabel : true,
attribute : 'finalOp',
entity : 'RestructuringList',
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
id : "VA_CHECKBOXVYTZVCZ_150701",
label : cobis.translate('ASSTS.LBL_ASSTS_REESTOAYR_46697'),
field : 'reest',
visible : ConstantsApi.mode.All,
type : 'template',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_CHECKBOXVYTZVCZ_150701',
name :'reest',
withoutLabel : true,
attribute : 'reest',
entity : 'RestructuringList',
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
id : "VA_TEXTINPUTBOXMPG_686701",
label : cobis.translate('ASSTS.LBL_ASSTS_NROPRESAA_77247'),
field : 'bank',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_TEXTINPUTBOXMPG_686701',
name :'bank',
withoutLabel : true,
attribute : 'bank',
entity : 'RestructuringList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYHJ_995701",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOPREMM_37747'),
field : 'typeLoan',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXYHJ_995701',
name :'typeLoan',
withoutLabel : true,
attribute : 'typeLoan',
entity : 'RestructuringList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHQI_717701",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'currency',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXHQI_717701',
name :'currency',
attribute : 'currency',
entity : 'RestructuringList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
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
id : "VA_TEXTINPUTBOXFNP_829701",
label : cobis.translate('ASSTS.LBL_ASSTS_PLAZORELL_79044'),
field : 'residualTerm',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_TEXTINPUTBOXFNP_829701',
name :'residualTerm',
withoutLabel : true,
attribute : 'residualTerm',
entity : 'RestructuringList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPFN_631701",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXPFN_631701',
name :'state',
attribute : 'state',
entity : 'RestructuringList',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "descripcion",
valueField : "codigo",
}
},
{
id : "VA_TEXTINPUTBOXHAH_699701",
label : cobis.translate('ASSTS.LBL_ASSTS_CUOTASVEN_82891'),
field : 'overduesFees',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_TEXTINPUTBOXHAH_699701',
name :'overduesFees',
withoutLabel : true,
attribute : 'overduesFees',
entity : 'RestructuringList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFFY_513701",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDOCAPI_87055'),
field : 'capitalBalance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXFFY_513701',
name :'capitalBalance',
withoutLabel : true,
attribute : 'capitalBalance',
entity : 'RestructuringList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPZN_547701",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDOINTE_15519'),
field : 'interestBalance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXPZN_547701',
name :'interestBalance',
withoutLabel : true,
attribute : 'interestBalance',
entity : 'RestructuringList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAAY_819701",
label : cobis.translate('ASSTS.LBL_ASSTS_OTROSRURR_25485'),
field : 'otherItems',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXAAY_819701',
name :'otherItems',
withoutLabel : true,
attribute : 'otherItems',
entity : 'RestructuringList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMIP_743701",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALCAZA_55159'),
field : 'totalCap',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_TEXTINPUTBOXMIP_743701',
name :'totalCap',
withoutLabel : true,
attribute : 'totalCap',
entity : 'RestructuringList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMBP_763701",
label : cobis.translate('ASSTS.LBL_ASSTS_APAGAROXF_56847'),
field : 'toPay',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXMBP_763701',
name :'toPay',
withoutLabel : true,
attribute : 'toPay',
entity : 'RestructuringList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLJF_575701",
label : cobis.translate('ASSTS.LBL_ASSTS_CAPITALII_22595'),
field : 'capitalize',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXLJF_575701',
name :'capitalize',
attribute : 'capitalize',
entity : 'RestructuringList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
isOnChangeControl:true,
textField : "value",
valueField : "code",
}
},
]);
this.VA_RESTRUCTURINPGP_926701.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOREEUS_62112");
this.VA_RESTRUCTURINPGP_926701.entity = "RestructuringSummary";
this.VA_RESTRUCTURINPGP_926701.attribute = "restructuringType";
this.VA_RESTRUCTURINPGP_926701.textField = "value";
this.VA_RESTRUCTURINPGP_926701.valueField = "code";
this.VA_RESTRUCTURINPGP_926701.showId= true;
this.VA_RESTRUCTURINPGP_926701.name="restructuringType";
this.VA_RESTRUCTURINPGP_926701.id="VA_RESTRUCTURINPGP_926701";
this.VA_RESTRUCTURINPGP_926701.colSpan=1;
this.VA_RESTRUCTURINPGP_926701.withoutLabel = false;
this.VA_RESTRUCTURINPGP_926701.readOnly = ConstantsApi.mode.Query;
this.VA_RESTRUCTURINPGP_926701.enabled = ConstantsApi.mode.All;
this.VA_RESTRUCTURINPGP_926701.visible= ConstantsApi.mode.All;
this.VA_RESTRUCTURINPGP_926701.required = true;
this.VA_RESTRUCTURINPGP_926701.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_RESTRUCTURINPGP_926701.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.Spacer2787.id = "Spacer2787";
this.Spacer2787.name = "Spacer2787";
this.Spacer2787.colSpan = 1;
this.Spacer2787.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_754701.id = "VA_VASIMPLELABELLL_754701";
this.VA_VASIMPLELABELLL_754701.name = "VA_VASIMPLELABELLL_754701";
this.VA_VASIMPLELABELLL_754701.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDAOSP_67116");
this.VA_VASIMPLELABELLL_754701.colSpan = 1;
this.VA_VASIMPLELABELLL_754701.withoutLabel = false;
this.VA_VASIMPLELABELLL_754701.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_754701.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_573701.id = "VA_VASIMPLELABELLL_573701";
this.VA_VASIMPLELABELLL_573701.name = "VA_VASIMPLELABELLL_573701";
this.VA_VASIMPLELABELLL_573701.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDALAO_14345");
this.VA_VASIMPLELABELLL_573701.colSpan = 1;
this.VA_VASIMPLELABELLL_573701.withoutLabel = false;
this.VA_VASIMPLELABELLL_573701.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_573701.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_910701.id = "VA_VASIMPLELABELLL_910701";
this.VA_VASIMPLELABELLL_910701.name = "VA_VASIMPLELABELLL_910701";
this.VA_VASIMPLELABELLL_910701.label = cobis.translate("ASSTS.LBL_ASSTS_VALORAPAA_99910");
this.VA_VASIMPLELABELLL_910701.colSpan = 1;
this.VA_VASIMPLELABELLL_910701.withoutLabel = false;
this.VA_VASIMPLELABELLL_910701.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_910701.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_931701.id = "VA_VASIMPLELABELLL_931701";
this.VA_VASIMPLELABELLL_931701.name = "VA_VASIMPLELABELLL_931701";
this.VA_VASIMPLELABELLL_931701.label = cobis.translate("ASSTS.LBL_ASSTS_TOTALARUE_92373");
this.VA_VASIMPLELABELLL_931701.colSpan = 1;
this.VA_VASIMPLELABELLL_931701.withoutLabel = false;
this.VA_VASIMPLELABELLL_931701.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_931701.visible= ConstantsApi.mode.All;
this.VA_OPCURRENCYWEDUR_143701.id = "VA_OPCURRENCYWEDUR_143701";
this.VA_OPCURRENCYWEDUR_143701.name = "opCurrency";
this.VA_OPCURRENCYWEDUR_143701.attribute = "opCurrency";
this.VA_OPCURRENCYWEDUR_143701.colSpan = 1;
this.VA_OPCURRENCYWEDUR_143701.withoutLabel = false;
this.VA_OPCURRENCYWEDUR_143701.enabled = ConstantsApi.mode.All;
this.VA_OPCURRENCYWEDUR_143701.visible= ConstantsApi.mode.All;
this.VA_LOCALCURRENCYYY_751701.id = "VA_LOCALCURRENCYYY_751701";
this.VA_LOCALCURRENCYYY_751701.name = "localCurrency";
this.VA_LOCALCURRENCYYY_751701.attribute = "localCurrency";
this.VA_LOCALCURRENCYYY_751701.colSpan = 1;
this.VA_LOCALCURRENCYYY_751701.withoutLabel = false;
this.VA_LOCALCURRENCYYY_751701.enabled = ConstantsApi.mode.All;
this.VA_LOCALCURRENCYYY_751701.visible= ConstantsApi.mode.All;
this.VA_AMOUNTPAYDUWVBB_952701.id = "VA_AMOUNTPAYDUWVBB_952701";
this.VA_AMOUNTPAYDUWVBB_952701.name = "amountPay";
this.VA_AMOUNTPAYDUWVBB_952701.attribute = "amountPay";
this.VA_AMOUNTPAYDUWVBB_952701.colSpan = 1;
this.VA_AMOUNTPAYDUWVBB_952701.withoutLabel = false;
this.VA_AMOUNTPAYDUWVBB_952701.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTPAYDUWVBB_952701.visible= ConstantsApi.mode.All;
this.T_ASSTSAMRZIFMF_594 = this.formBuilder.group({
RestructuringFilter: this.formBuilder.group({
nameClient:[{value: null, disabled: !this.VA_NAMECLIENTSGTLG_620701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NAMECLIENTSGTLG_620701.validationFunctions!)],
codClient:[null],
}
),
RestructuringList: this.formBuilder.group({
finalOp:[{value: false, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_CHECKBOXWFQPYPQ_909701')],
reest:[{value: false, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_CHECKBOXVYTZVCZ_150701')],
bank:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXMPG_686701')],
numLoan:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXFVG_185701')],
typeLoan:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXYHJ_995701')],
currency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXHQI_717701')],
residualTerm:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXFNP_829701')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXPFN_631701')],
overduesFees:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXHAH_699701')],
capitalBalance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXFFY_513701')],
interestBalance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXPZN_547701')],
otherItems:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXAAY_819701')],
totalCap:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXMIP_743701')],
toPay:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXMBP_763701')],
capitalize:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UY75_AYT30.columns,'VA_TEXTINPUTBOXLJF_575701')],
}
),
RestructuringSummary: this.formBuilder.group({
restructuringType:[{value: null, disabled: !this.VA_RESTRUCTURINPGP_926701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RESTRUCTURINPGP_926701.validationFunctions!)],
localCurrency:[null],
opCurrency:[null],
amountPay:[null],
}
),
});
}
}