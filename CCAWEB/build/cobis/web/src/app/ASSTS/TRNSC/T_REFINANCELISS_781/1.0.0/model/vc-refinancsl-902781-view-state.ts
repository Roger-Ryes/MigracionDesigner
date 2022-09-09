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
public T_REFINANCELISS_781!:FormGroup;
public VC_REFINANCSL_902781:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANSER_157515 : CobisCollapsibleContainerModel = new CobisCollapsibleContainerModel();
public G_REFINANTFN_452515_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_REFINANTFN_452515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANCRN_122515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANACR_140515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_3375_11342: CobisGridModel = new CobisGridModel();
public G_REFINANNRN_173515_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_REFINANNRN_173515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANLII_228515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANRIA_736515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANIER_696515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANANR_384515_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_REFINANANR_384515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANERL_686515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANFOT_900515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANRFE_525515 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_CLIENTNAMEBGXWU_198515: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public Spacer2174: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONWHPHXJL_793515: CobisButtonModel = new CobisButtonModel();
public Spacer2298: CobisSpacerModel = new CobisSpacerModel();
public VA_VASIMPLELABELLL_382515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_337515: CobisTextLabelModel = new CobisTextLabelModel();
public Spacer1626: CobisSpacerModel = new CobisSpacerModel();
public VA_VASIMPLELABELLL_584515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_CAPITALBALANNEC_663515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_CAPITALBALANLEC_808515: CobisTextLabelModel = new CobisTextLabelModel();
public Spacer2887: CobisSpacerModel = new CobisSpacerModel();
public VA_VASIMPLELABELLL_975515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_OTHERBALANCENEW_148515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_OTHERBALANCELCL_661515: CobisTextLabelModel = new CobisTextLabelModel();
public Spacer2390: CobisSpacerModel = new CobisSpacerModel();
public VA_VASIMPLELABELLL_604515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_ADITIONALBALAAA_694515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_ADITIONALBALNCC_423515: CobisTextLabelModel = new CobisTextLabelModel();
public Spacer2184: CobisSpacerModel = new CobisSpacerModel();
public VA_CAPITALIZEBANNE_580515: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_VASEPARATORJWWN_931515: CobisSeparatorModel = new CobisSeparatorModel();
public VA_VASIMPLELABELLL_324515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TOTALREFINANEEC_261515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_441515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VALUEPAYWZSKCBS_499515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_416515: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TOTALTORENEWXJM_469515: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_PREVENTIONPRRAM_747515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_BASICINSURANCEC_861515: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_BANKOPERATIONNN_476515: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_OPERATIONTYPEEE_619515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_NEWLOANCURRENNN_364515: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer2624: CobisSpacerModel = new CobisSpacerModel();
public VA_OVERDUEVFBXKALY_348515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PERIODICITYSUIR_653515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_NEWLOANTERMUQHR_494515: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2168: CobisSpacerModel = new CobisSpacerModel();
public VA_TYPEFEENRTBGEUS_485515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TERMINTERESTPBJ_596515: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TERMCAPITALURQB_743515: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_FIXEDPAYDAYMGTF_298515: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_PAYMENTDAYUXWKU_656515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TERMGRACECAPDVU_578515: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TERMGRACEINTJNV_305515: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TYPEGRACECCQFCY_562515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_5032SUOKWXIJNUR_934515: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TYPERENOVATIONO_499515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PAYMETHODCURCYE_344515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_ADDICIONALPAYOH_649515: CobisDropDownListModel = new CobisDropDownListModel();
public VA_ADDITIONALVAUUU_896515: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_ACCOUNTYATVYIRL_740515: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public CM_TREFINAN_9NC: CobisButtonModel = new CobisButtonModel();
public CM_TREFINAN_4A_: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_REFINANCSL_902781.id="VC_REFINANCSL_902781";
this.VC_REFINANCSL_902781.name="RefinanceLoansFilter";
this.VC_REFINANCSL_902781.colSpan=1;
this.VC_REFINANCSL_902781.columns=1;
this.VC_REFINANCSL_902781.enabled=ConstantsApi.mode.All;
this.G_REFINANSER_157515.id="G_REFINANSER_157515";
this.G_REFINANSER_157515.name="RefinanceLoansFilter";
this.G_REFINANSER_157515.enabled=ConstantsApi.mode.All;
this.G_REFINANSER_157515.controlType = ControlType.COLLAPSIBLE;
this.G_REFINANSER_157515.colSpan=1;
this.G_REFINANSER_157515.childrenGroups = ["G_REFINANTFN_452515_item","G_REFINANNRN_173515_item","G_REFINANANR_384515_item"];
this.G_REFINANTFN_452515_item.id="G_REFINANTFN_452515_item";
this.G_REFINANTFN_452515_item.label=cobis.translate("ASSTS.LBL_ASSTS_BSQUEDAPR_26994");
this.G_REFINANTFN_452515_item.childrenGroups = ['G_REFINANTFN_452515'];
this.G_REFINANTFN_452515_item.colSpan=1;
this.G_REFINANTFN_452515_item.enabled=ConstantsApi.mode.All;
this.G_REFINANTFN_452515_item.visible=ConstantsApi.mode.All;
this.G_REFINANTFN_452515.id="G_REFINANTFN_452515";
this.G_REFINANTFN_452515.name="GroupLayout1925";
this.G_REFINANTFN_452515.columns=1;
this.G_REFINANTFN_452515.childrenGroups = ["G_REFINANCRN_122515","G_REFINANACR_140515"];
this.G_REFINANTFN_452515.colSpan=1;
this.G_REFINANTFN_452515.enabled=ConstantsApi.mode.All;
this.G_REFINANTFN_452515.visible=ConstantsApi.mode.All;
this.G_REFINANCRN_122515.id="G_REFINANCRN_122515";
this.G_REFINANCRN_122515.name="Group1469";
this.G_REFINANCRN_122515.columns=4;
this.G_REFINANCRN_122515.labelOrientation="Top";
this.G_REFINANCRN_122515.colSpan=1;
this.G_REFINANCRN_122515.enabled=ConstantsApi.mode.All;
this.G_REFINANCRN_122515.visible=ConstantsApi.mode.All;
this.G_REFINANCRN_122515.attList = ["clientName"];
this.G_REFINANACR_140515.id="G_REFINANACR_140515";
this.G_REFINANACR_140515.name="Group2949";
this.G_REFINANACR_140515.columns=1;
this.G_REFINANACR_140515.labelOrientation="Top";
this.G_REFINANACR_140515.colSpan=1;
this.G_REFINANACR_140515.enabled=ConstantsApi.mode.All;
this.G_REFINANACR_140515.visible=ConstantsApi.mode.All;
this.G_REFINANACR_140515.attList = ["selected","loan","line","currencyType","initialAmount","originalTerm","capitalBalance","interestBalance","defaultBalance","otherConceptsBalance","residualTerm","overdueFees","procedureId"];
this.G_REFINANNRN_173515_item.id="G_REFINANNRN_173515_item";
this.G_REFINANNRN_173515_item.label=cobis.translate("ASSTS.LBL_ASSTS_RESUMENSN_25970");
this.G_REFINANNRN_173515_item.childrenGroups = ['G_REFINANNRN_173515'];
this.G_REFINANNRN_173515_item.colSpan=1;
this.G_REFINANNRN_173515_item.enabled=ConstantsApi.mode.All;
this.G_REFINANNRN_173515_item.visible=ConstantsApi.mode.All;
this.G_REFINANNRN_173515.id="G_REFINANNRN_173515";
this.G_REFINANNRN_173515.name="GroupLayout1652";
this.G_REFINANNRN_173515.columns=1;
this.G_REFINANNRN_173515.childrenGroups = ["G_REFINANLII_228515","G_REFINANRIA_736515","G_REFINANIER_696515"];
this.G_REFINANNRN_173515.colSpan=1;
this.G_REFINANNRN_173515.enabled=ConstantsApi.mode.All;
this.G_REFINANNRN_173515.visible=ConstantsApi.mode.All;
this.G_REFINANLII_228515.id="G_REFINANLII_228515";
this.G_REFINANLII_228515.name="Group1438";
this.G_REFINANLII_228515.columns=4;
this.G_REFINANLII_228515.labelOrientation="Top";
this.G_REFINANLII_228515.colSpan=1;
this.G_REFINANLII_228515.enabled=ConstantsApi.mode.All;
this.G_REFINANLII_228515.visible=ConstantsApi.mode.All;
this.G_REFINANLII_228515.attList = ["capitalBalanceNew","capitalBalanceLocal","otherBalanceNew","otherBalanceLocal","aditionalBalanceNew","aditionalBalanceLocal"];
this.G_REFINANRIA_736515.id="G_REFINANRIA_736515";
this.G_REFINANRIA_736515.name="Group2496";
this.G_REFINANRIA_736515.columns=4;
this.G_REFINANRIA_736515.labelOrientation="Top";
this.G_REFINANRIA_736515.colSpan=1;
this.G_REFINANRIA_736515.enabled=ConstantsApi.mode.All;
this.G_REFINANRIA_736515.visible=ConstantsApi.mode.All;
this.G_REFINANRIA_736515.attList = ["capitalizeBalance"];
this.G_REFINANIER_696515.id="G_REFINANIER_696515";
this.G_REFINANIER_696515.name="Group2904";
this.G_REFINANIER_696515.columns=4;
this.G_REFINANIER_696515.labelOrientation="Top";
this.G_REFINANIER_696515.colSpan=1;
this.G_REFINANIER_696515.enabled=ConstantsApi.mode.All;
this.G_REFINANIER_696515.visible=ConstantsApi.mode.All;
this.G_REFINANIER_696515.attList = ["totalRefinance","valuePay","totalToRenew","preventionProgram","basicInsurance"];
this.G_REFINANANR_384515_item.id="G_REFINANANR_384515_item";
this.G_REFINANANR_384515_item.label=cobis.translate("ASSTS.LBL_ASSTS_NUEVAOPNE_74896");
this.G_REFINANANR_384515_item.childrenGroups = ['G_REFINANANR_384515'];
this.G_REFINANANR_384515_item.colSpan=1;
this.G_REFINANANR_384515_item.enabled=ConstantsApi.mode.All;
this.G_REFINANANR_384515_item.visible=ConstantsApi.mode.All;
this.G_REFINANANR_384515.id="G_REFINANANR_384515";
this.G_REFINANANR_384515.name="GroupLayout2706";
this.G_REFINANANR_384515.columns=1;
this.G_REFINANANR_384515.childrenGroups = ["G_REFINANERL_686515","G_REFINANFOT_900515","G_REFINANRFE_525515"];
this.G_REFINANANR_384515.colSpan=1;
this.G_REFINANANR_384515.enabled=ConstantsApi.mode.All;
this.G_REFINANANR_384515.visible=ConstantsApi.mode.All;
this.G_REFINANERL_686515.id="G_REFINANERL_686515";
this.G_REFINANERL_686515.name="Group1996";
this.G_REFINANERL_686515.columns=4;
this.G_REFINANERL_686515.labelOrientation="Top";
this.G_REFINANERL_686515.colSpan=1;
this.G_REFINANERL_686515.enabled=ConstantsApi.mode.All;
this.G_REFINANERL_686515.visible=ConstantsApi.mode.All;
this.G_REFINANERL_686515.attList = ["bankOperation"];
this.G_REFINANFOT_900515.id="G_REFINANFOT_900515";
this.G_REFINANFOT_900515.name="Group2886";
this.G_REFINANFOT_900515.columns=4;
this.G_REFINANFOT_900515.labelOrientation="Top";
this.G_REFINANFOT_900515.colSpan=1;
this.G_REFINANFOT_900515.enabled=ConstantsApi.mode.All;
this.G_REFINANFOT_900515.visible=ConstantsApi.mode.All;
this.G_REFINANFOT_900515.attList = ["operationType","newLoanCurrency","overDue","periodicity","newLoanTerm","typeFee","termInterest","termCapital","fixedPayDay","paymentDay","termGraceCap","termGraceInt","typeGrace","graceDividend","typeRenovation"];
this.G_REFINANRFE_525515.id="G_REFINANRFE_525515";
this.G_REFINANRFE_525515.label=cobis.translate("ASSTS.LBL_ASSTS_VALORADCI_85333");
this.G_REFINANRFE_525515.name="Group2697";
this.G_REFINANRFE_525515.columns=3;
this.G_REFINANRFE_525515.labelOrientation="Top";
this.G_REFINANRFE_525515.colSpan=1;
this.G_REFINANRFE_525515.enabled=ConstantsApi.mode.All;
this.G_REFINANRFE_525515.visible=ConstantsApi.mode.All;
this.G_REFINANRFE_525515.attList = ["payMethodCurrency","addicionalPayMethod","additionalValue","account"];
this.CM_TREFINAN_9NC.id = "CM_TREFINAN_9NC";
this.CM_TREFINAN_9NC.name = "Command1";
this.CM_TREFINAN_9NC.causesValidation=true;
this.CM_TREFINAN_9NC.submitOnEnter=false;
this.CM_TREFINAN_9NC.setFocus=false;
this.CM_TREFINAN_9NC.close=false;
this.CM_TREFINAN_9NC.label = cobis.translate("ASSTS.LBL_ASSTS_GUARDARRI_81055");
this.CM_TREFINAN_9NC.enabled = ConstantsApi.mode.All;
this.CM_TREFINAN_9NC.visible= ConstantsApi.mode.All;
this.CM_TREFINAN_4A_.id = "CM_TREFINAN_4A_";
this.CM_TREFINAN_4A_.name = "Command3";
this.CM_TREFINAN_4A_.causesValidation=false;
this.CM_TREFINAN_4A_.submitOnEnter=false;
this.CM_TREFINAN_4A_.setFocus=false;
this.CM_TREFINAN_4A_.close=false;
this.CM_TREFINAN_4A_.label = cobis.translate("ASSTS.LBL_ASSTS_LIMPIARAM_44649");
this.CM_TREFINAN_4A_.enabled = ConstantsApi.mode.All;
this.CM_TREFINAN_4A_.visible= ConstantsApi.mode.All;
this.VA_CLIENTNAMEBGXWU_198515.id = "VA_CLIENTNAMEBGXWU_198515";
this.VA_CLIENTNAMEBGXWU_198515.name = "clientName";
this.VA_CLIENTNAMEBGXWU_198515.label = cobis.translate("ASSTS.LBL_ASSTS_CLIENTEWV_22561");
this.VA_CLIENTNAMEBGXWU_198515.entity = "RefinanceLoanFilter";
this.VA_CLIENTNAMEBGXWU_198515.attribute = "clientName";
this.VA_CLIENTNAMEBGXWU_198515.colSpan = 2;
this.VA_CLIENTNAMEBGXWU_198515.format = "";
this.VA_CLIENTNAMEBGXWU_198515.readOnly = ConstantsApi.mode.Query;
this.VA_CLIENTNAMEBGXWU_198515.enabled = ConstantsApi.mode.All;
this.VA_CLIENTNAMEBGXWU_198515.visible= ConstantsApi.mode.All;
this.VA_CLIENTNAMEBGXWU_198515.textLocked = true;
this.VA_CLIENTNAMEBGXWU_198515.required = true;
this.VA_CLIENTNAMEBGXWU_198515.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CLIENTNAMEBGXWU_198515.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.Spacer2174.id = "Spacer2174";
this.Spacer2174.name = "Spacer2174";
this.Spacer2174.colSpan = 1;
this.Spacer2174.visible= ConstantsApi.mode.All;
this.VA_VABUTTONWHPHXJL_793515.id = "VA_VABUTTONWHPHXJL_793515";
this.VA_VABUTTONWHPHXJL_793515.name = "VA_VABUTTONWHPHXJL_793515";
this.VA_VABUTTONWHPHXJL_793515.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONWHPHXJL_793515.colSpan = 1;
this.VA_VABUTTONWHPHXJL_793515.withoutLabel = false;
this.VA_VABUTTONWHPHXJL_793515.causesValidation=true;
this.VA_VABUTTONWHPHXJL_793515.submitOnEnter=false;
this.VA_VABUTTONWHPHXJL_793515.setFocus=false;
this.VA_VABUTTONWHPHXJL_793515.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONWHPHXJL_793515.visible= ConstantsApi.mode.All;
this.VA_VABUTTONWHPHXJL_793515.attributesGroup = this.G_REFINANCRN_122515.attList;
this.QV_3375_11342.pageSize=4;
this.QV_3375_11342.id='QV_3375_11342';
this.QV_3375_11342.name='QV_3375_11342';
this.QV_3375_11342.pageable=true;
this.QV_3375_11342.sortable=false;
this.QV_3375_11342.resizable=true;
this.QV_3375_11342.scrollable=true
this.QV_3375_11342.confirmRowDeletion=false;
this.QV_3375_11342.exportToExcel=false;
this.QV_3375_11342.exportToPdf=false;
this.QV_3375_11342.height=0;
this.QV_3375_11342.filterableColumns=false;
this.QV_3375_11342.entityName='RefinanceLoans';
this.QV_3375_11342.appendRecords=false;
this.QV_3375_11342.rowDetail=false;
this.QV_3375_11342.columnMenu = true;
this.QV_3375_11342.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_3375_11342.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_3375_11342.columns = Util.filterByMode(this.mode, [
{
id : "VA_CHECKBOXKZZRISM_582515",
label : cobis.translate('ASSTS.LBL_ASSTS_SELECCION_40905'),
field : 'selected',
visible : ConstantsApi.mode.All,
type : 'template',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_CHECKBOXKZZRISM_582515',
name :'selected',
withoutLabel : true,
attribute : 'selected',
entity : 'RefinanceLoans',
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
id : "VA_TEXTINPUTBOXMHS_260515",
label : cobis.translate('ASSTS.LBL_ASSTS_NROPRESAA_77247'),
field : 'loan',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXMHS_260515',
name :'loan',
withoutLabel : true,
attribute : 'loan',
entity : 'RefinanceLoans',
maxlength: 16,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSSV_745515",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOPREMM_37747'),
field : 'line',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSSV_745515',
name :'line',
withoutLabel : true,
attribute : 'line',
entity : 'RefinanceLoans',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYEW_490515",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'currencyType',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXYEW_490515',
name :'currencyType',
attribute : 'currencyType',
entity : 'RefinanceLoans',
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
id : "VA_TEXTINPUTBOXFDY_704515",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOORGI_46642'),
field : 'initialAmount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXFDY_704515',
name :'initialAmount',
withoutLabel : true,
attribute : 'initialAmount',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFFP_550515",
label : cobis.translate('ASSTS.LBL_ASSTS_PLAZOORIG_11054'),
field : 'originalTerm',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXFFP_550515',
name :'originalTerm',
withoutLabel : true,
attribute : 'originalTerm',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXROR_675515",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDOCAPI_87055'),
field : 'capitalBalance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXROR_675515',
name :'capitalBalance',
withoutLabel : true,
attribute : 'capitalBalance',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPZA_248515",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDOINTE_15519'),
field : 'interestBalance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXPZA_248515',
name :'interestBalance',
withoutLabel : true,
attribute : 'interestBalance',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEQH_169515",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDOMOAR_33879'),
field : 'defaultBalance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXEQH_169515',
name :'defaultBalance',
withoutLabel : true,
attribute : 'defaultBalance',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIKG_248515",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDOOTSO_22130'),
field : 'otherConceptsBalance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIKG_248515',
name :'otherConceptsBalance',
withoutLabel : true,
attribute : 'otherConceptsBalance',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMUB_575515",
label : cobis.translate('ASSTS.LBL_ASSTS_PLAZORELL_79044'),
field : 'residualTerm',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXMUB_575515',
name :'residualTerm',
withoutLabel : true,
attribute : 'residualTerm',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIFR_825515",
label : cobis.translate('ASSTS.LBL_ASSTS_CUOTASVCE_30944'),
field : 'overdueFees',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXIFR_825515',
name :'overdueFees',
withoutLabel : true,
attribute : 'overdueFees',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.Spacer2298.id = "Spacer2298";
this.Spacer2298.name = "Spacer2298";
this.Spacer2298.colSpan = 1;
this.Spacer2298.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_382515.id = "VA_VASIMPLELABELLL_382515";
this.VA_VASIMPLELABELLL_382515.name = "VA_VASIMPLELABELLL_382515";
this.VA_VASIMPLELABELLL_382515.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDAOVV_49430");
this.VA_VASIMPLELABELLL_382515.colSpan = 1;
this.VA_VASIMPLELABELLL_382515.withoutLabel = false;
this.VA_VASIMPLELABELLL_382515.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_382515.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_382515.className ="texto-alineado";
this.VA_VASIMPLELABELLL_337515.id = "VA_VASIMPLELABELLL_337515";
this.VA_VASIMPLELABELLL_337515.name = "VA_VASIMPLELABELLL_337515";
this.VA_VASIMPLELABELLL_337515.label = cobis.translate("ASSTS.LBL_ASSTS_MONLOCALL_78733");
this.VA_VASIMPLELABELLL_337515.colSpan = 1;
this.VA_VASIMPLELABELLL_337515.withoutLabel = false;
this.VA_VASIMPLELABELLL_337515.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_337515.visible= ConstantsApi.mode.All;
this.Spacer1626.id = "Spacer1626";
this.Spacer1626.name = "Spacer1626";
this.Spacer1626.colSpan = 1;
this.Spacer1626.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_584515.id = "VA_VASIMPLELABELLL_584515";
this.VA_VASIMPLELABELLL_584515.name = "VA_VASIMPLELABELLL_584515";
this.VA_VASIMPLELABELLL_584515.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOCAPI_87055");
this.VA_VASIMPLELABELLL_584515.colSpan = 1;
this.VA_VASIMPLELABELLL_584515.withoutLabel = false;
this.VA_VASIMPLELABELLL_584515.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_584515.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_584515.className ="texto-alineado";
this.VA_CAPITALBALANNEC_663515.id = "VA_CAPITALBALANNEC_663515";
this.VA_CAPITALBALANNEC_663515.name = "capitalBalanceNew";
this.VA_CAPITALBALANNEC_663515.attribute = "capitalBalanceNew";
this.VA_CAPITALBALANNEC_663515.colSpan = 1;
this.VA_CAPITALBALANNEC_663515.withoutLabel = false;
this.VA_CAPITALBALANNEC_663515.enabled = ConstantsApi.mode.All;
this.VA_CAPITALBALANNEC_663515.visible= ConstantsApi.mode.All;
this.VA_CAPITALBALANNEC_663515.className ="alineacion-moneda";
this.VA_CAPITALBALANLEC_808515.id = "VA_CAPITALBALANLEC_808515";
this.VA_CAPITALBALANLEC_808515.name = "capitalBalanceLocal";
this.VA_CAPITALBALANLEC_808515.attribute = "capitalBalanceLocal";
this.VA_CAPITALBALANLEC_808515.colSpan = 1;
this.VA_CAPITALBALANLEC_808515.withoutLabel = false;
this.VA_CAPITALBALANLEC_808515.enabled = ConstantsApi.mode.All;
this.VA_CAPITALBALANLEC_808515.visible= ConstantsApi.mode.All;
this.VA_CAPITALBALANLEC_808515.className ="alineacion-moneda";
this.Spacer2887.id = "Spacer2887";
this.Spacer2887.name = "Spacer2887";
this.Spacer2887.colSpan = 1;
this.Spacer2887.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_975515.id = "VA_VASIMPLELABELLL_975515";
this.VA_VASIMPLELABELLL_975515.name = "VA_VASIMPLELABELLL_975515";
this.VA_VASIMPLELABELLL_975515.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOOTOR_60497");
this.VA_VASIMPLELABELLL_975515.colSpan = 1;
this.VA_VASIMPLELABELLL_975515.withoutLabel = false;
this.VA_VASIMPLELABELLL_975515.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_975515.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_975515.className ="texto-alineado";
this.VA_OTHERBALANCENEW_148515.id = "VA_OTHERBALANCENEW_148515";
this.VA_OTHERBALANCENEW_148515.name = "otherBalanceNew";
this.VA_OTHERBALANCENEW_148515.attribute = "otherBalanceNew";
this.VA_OTHERBALANCENEW_148515.colSpan = 1;
this.VA_OTHERBALANCENEW_148515.withoutLabel = false;
this.VA_OTHERBALANCENEW_148515.enabled = ConstantsApi.mode.All;
this.VA_OTHERBALANCENEW_148515.visible= ConstantsApi.mode.All;
this.VA_OTHERBALANCENEW_148515.className ="alineacion-moneda";
this.VA_OTHERBALANCELCL_661515.id = "VA_OTHERBALANCELCL_661515";
this.VA_OTHERBALANCELCL_661515.name = "otherBalanceLocal";
this.VA_OTHERBALANCELCL_661515.attribute = "otherBalanceLocal";
this.VA_OTHERBALANCELCL_661515.colSpan = 1;
this.VA_OTHERBALANCELCL_661515.withoutLabel = false;
this.VA_OTHERBALANCELCL_661515.enabled = ConstantsApi.mode.All;
this.VA_OTHERBALANCELCL_661515.visible= ConstantsApi.mode.All;
this.VA_OTHERBALANCELCL_661515.className ="alineacion-moneda";
this.Spacer2390.id = "Spacer2390";
this.Spacer2390.name = "Spacer2390";
this.Spacer2390.colSpan = 1;
this.Spacer2390.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_604515.id = "VA_VASIMPLELABELLL_604515";
this.VA_VASIMPLELABELLL_604515.name = "VA_VASIMPLELABELLL_604515";
this.VA_VASIMPLELABELLL_604515.label = cobis.translate("ASSTS.LBL_ASSTS_VALORADCI_85333");
this.VA_VASIMPLELABELLL_604515.colSpan = 1;
this.VA_VASIMPLELABELLL_604515.withoutLabel = false;
this.VA_VASIMPLELABELLL_604515.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_604515.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_604515.className ="texto-alineado";
this.VA_ADITIONALBALAAA_694515.id = "VA_ADITIONALBALAAA_694515";
this.VA_ADITIONALBALAAA_694515.name = "aditionalBalanceNew";
this.VA_ADITIONALBALAAA_694515.attribute = "aditionalBalanceNew";
this.VA_ADITIONALBALAAA_694515.colSpan = 1;
this.VA_ADITIONALBALAAA_694515.withoutLabel = false;
this.VA_ADITIONALBALAAA_694515.enabled = ConstantsApi.mode.All;
this.VA_ADITIONALBALAAA_694515.visible= ConstantsApi.mode.All;
this.VA_ADITIONALBALAAA_694515.className ="alineacion-moneda";
this.VA_ADITIONALBALNCC_423515.id = "VA_ADITIONALBALNCC_423515";
this.VA_ADITIONALBALNCC_423515.name = "aditionalBalanceLocal";
this.VA_ADITIONALBALNCC_423515.attribute = "aditionalBalanceLocal";
this.VA_ADITIONALBALNCC_423515.colSpan = 1;
this.VA_ADITIONALBALNCC_423515.withoutLabel = false;
this.VA_ADITIONALBALNCC_423515.enabled = ConstantsApi.mode.All;
this.VA_ADITIONALBALNCC_423515.visible= ConstantsApi.mode.All;
this.VA_ADITIONALBALNCC_423515.className ="alineacion-moneda";
this.Spacer2184.id = "Spacer2184";
this.Spacer2184.name = "Spacer2184";
this.Spacer2184.colSpan = 1;
this.Spacer2184.visible= ConstantsApi.mode.All;
this.VA_CAPITALIZEBANNE_580515.id = "VA_CAPITALIZEBANNE_580515";
this.VA_CAPITALIZEBANNE_580515.name = "capitalizeBalance";
this.VA_CAPITALIZEBANNE_580515.attribute = "capitalizeBalance";
this.VA_CAPITALIZEBANNE_580515.label = cobis.translate("ASSTS.LBL_ASSTS_CAPITALZZ_22928");
this.VA_CAPITALIZEBANNE_580515.colSpan = 1;
this.VA_CAPITALIZEBANNE_580515.withoutLabel = false;
this.VA_CAPITALIZEBANNE_580515.readOnly = ConstantsApi.mode.Query;
this.VA_CAPITALIZEBANNE_580515.entity = "RefinanceLoanFilter";
this.VA_CAPITALIZEBANNE_580515.enabled = ConstantsApi.mode.All;
this.VA_CAPITALIZEBANNE_580515.visible= ConstantsApi.mode.All;
this.VA_CAPITALIZEBANNE_580515.textField = "value";
this.VA_CAPITALIZEBANNE_580515.valueField = "code";
this.VA_VASEPARATORJWWN_931515.id = "VA_VASEPARATORJWWN_931515";
this.VA_VASEPARATORJWWN_931515.name = "VA_VASEPARATORJWWN_931515";
this.VA_VASEPARATORJWWN_931515.colSpan = 3;
this.VA_VASEPARATORJWWN_931515.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_324515.id = "VA_VASIMPLELABELLL_324515";
this.VA_VASIMPLELABELLL_324515.name = "VA_VASIMPLELABELLL_324515";
this.VA_VASIMPLELABELLL_324515.label = cobis.translate("ASSTS.LBL_ASSTS_TOTALOPNI_48989");
this.VA_VASIMPLELABELLL_324515.colSpan = 1;
this.VA_VASIMPLELABELLL_324515.withoutLabel = false;
this.VA_VASIMPLELABELLL_324515.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_324515.visible= ConstantsApi.mode.All;
this.VA_TOTALREFINANEEC_261515.id = "VA_TOTALREFINANEEC_261515";
this.VA_TOTALREFINANEEC_261515.name = "totalRefinance";
this.VA_TOTALREFINANEEC_261515.attribute = "totalRefinance";
this.VA_TOTALREFINANEEC_261515.colSpan = 1;
this.VA_TOTALREFINANEEC_261515.withoutLabel = false;
this.VA_TOTALREFINANEEC_261515.enabled = ConstantsApi.mode.All;
this.VA_TOTALREFINANEEC_261515.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_441515.id = "VA_VASIMPLELABELLL_441515";
this.VA_VASIMPLELABELLL_441515.name = "VA_VASIMPLELABELLL_441515";
this.VA_VASIMPLELABELLL_441515.label = cobis.translate("ASSTS.LBL_ASSTS_VALORAPAA_99910");
this.VA_VASIMPLELABELLL_441515.colSpan = 1;
this.VA_VASIMPLELABELLL_441515.withoutLabel = false;
this.VA_VASIMPLELABELLL_441515.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_441515.visible= ConstantsApi.mode.All;
this.VA_VALUEPAYWZSKCBS_499515.id = "VA_VALUEPAYWZSKCBS_499515";
this.VA_VALUEPAYWZSKCBS_499515.name = "valuePay";
this.VA_VALUEPAYWZSKCBS_499515.attribute = "valuePay";
this.VA_VALUEPAYWZSKCBS_499515.colSpan = 1;
this.VA_VALUEPAYWZSKCBS_499515.withoutLabel = false;
this.VA_VALUEPAYWZSKCBS_499515.enabled = ConstantsApi.mode.All;
this.VA_VALUEPAYWZSKCBS_499515.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_416515.id = "VA_VASIMPLELABELLL_416515";
this.VA_VASIMPLELABELLL_416515.name = "VA_VASIMPLELABELLL_416515";
this.VA_VASIMPLELABELLL_416515.label = cobis.translate("ASSTS.LBL_ASSTS_TOTALAREE_10091");
this.VA_VASIMPLELABELLL_416515.colSpan = 1;
this.VA_VASIMPLELABELLL_416515.withoutLabel = false;
this.VA_VASIMPLELABELLL_416515.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_416515.visible= ConstantsApi.mode.All;
this.VA_TOTALTORENEWXJM_469515.entity = "RefinanceLoanFilter";
this.VA_TOTALTORENEWXJM_469515.attribute = "totalToRenew";
this.VA_TOTALTORENEWXJM_469515.textCase= TextCaseOptions.NONE;
this.VA_TOTALTORENEWXJM_469515.textLocked = true;
this.VA_TOTALTORENEWXJM_469515.format= "c";
this.VA_TOTALTORENEWXJM_469515.name="totalToRenew";
this.VA_TOTALTORENEWXJM_469515.id="VA_TOTALTORENEWXJM_469515";
this.VA_TOTALTORENEWXJM_469515.colSpan=1;
this.VA_TOTALTORENEWXJM_469515.withoutLabel = false;
this.VA_TOTALTORENEWXJM_469515.readOnly = ConstantsApi.mode.Query;
this.VA_TOTALTORENEWXJM_469515.enabled = ConstantsApi.mode.None;
this.VA_TOTALTORENEWXJM_469515.visible= ConstantsApi.mode.All;
this.VA_PREVENTIONPRRAM_747515.label = cobis.translate("ASSTS.LBL_ASSTS_PROGRAMNE_62110");
this.VA_PREVENTIONPRRAM_747515.blankOption=true;
this.VA_PREVENTIONPRRAM_747515.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_NOAPLICAA_44555");
this.VA_PREVENTIONPRRAM_747515.entity = "RefinanceLoanFilter";
this.VA_PREVENTIONPRRAM_747515.attribute = "preventionProgram";
this.VA_PREVENTIONPRRAM_747515.textField = "value";
this.VA_PREVENTIONPRRAM_747515.valueField = "code";
this.VA_PREVENTIONPRRAM_747515.name="preventionProgram";
this.VA_PREVENTIONPRRAM_747515.id="VA_PREVENTIONPRRAM_747515";
this.VA_PREVENTIONPRRAM_747515.colSpan=1;
this.VA_PREVENTIONPRRAM_747515.withoutLabel = false;
this.VA_PREVENTIONPRRAM_747515.readOnly = ConstantsApi.mode.Query;
this.VA_PREVENTIONPRRAM_747515.enabled = ConstantsApi.mode.All;
this.VA_PREVENTIONPRRAM_747515.visible= ConstantsApi.mode.All;
this.VA_BASICINSURANCEC_861515.id = "VA_BASICINSURANCEC_861515";
this.VA_BASICINSURANCEC_861515.name = "basicInsurance";
this.VA_BASICINSURANCEC_861515.attribute = "basicInsurance";
this.VA_BASICINSURANCEC_861515.label = cobis.translate("ASSTS.LBL_ASSTS_APLICASBO_86638");
this.VA_BASICINSURANCEC_861515.colSpan = 1;
this.VA_BASICINSURANCEC_861515.withoutLabel = false;
this.VA_BASICINSURANCEC_861515.readOnly = ConstantsApi.mode.Query;
this.VA_BASICINSURANCEC_861515.entity = "RefinanceLoanFilter";
this.VA_BASICINSURANCEC_861515.enabled = ConstantsApi.mode.None;
this.VA_BASICINSURANCEC_861515.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_BASICINSURANCEC_861515.textField = "value";
this.VA_BASICINSURANCEC_861515.valueField = "code";
this.VA_BANKOPERATIONNN_476515.label = cobis.translate("ASSTS.LBL_ASSTS_OPERACIAR_42315");
this.VA_BANKOPERATIONNN_476515.entity = "RefinanceLoanFilter";
this.VA_BANKOPERATIONNN_476515.attribute = "bankOperation";
this.VA_BANKOPERATIONNN_476515.textCase= TextCaseOptions.NONE;
this.VA_BANKOPERATIONNN_476515.name="bankOperation";
this.VA_BANKOPERATIONNN_476515.id="VA_BANKOPERATIONNN_476515";
this.VA_BANKOPERATIONNN_476515.colSpan=1;
this.VA_BANKOPERATIONNN_476515.withoutLabel = false;
this.VA_BANKOPERATIONNN_476515.readOnly = ConstantsApi.mode.Query;
this.VA_BANKOPERATIONNN_476515.enabled = ConstantsApi.mode.Query;
this.VA_BANKOPERATIONNN_476515.visible= ConstantsApi.mode.All;
this.VA_OPERATIONTYPEEE_619515.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOOPERC_17964");
this.VA_OPERATIONTYPEEE_619515.blankOption=true;
this.VA_OPERATIONTYPEEE_619515.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_OPERATIONTYPEEE_619515.entity = "RefinanceLoanFilter";
this.VA_OPERATIONTYPEEE_619515.attribute = "operationType";
this.VA_OPERATIONTYPEEE_619515.textField = "value";
this.VA_OPERATIONTYPEEE_619515.valueField = "code";
this.VA_OPERATIONTYPEEE_619515.showId= true;
this.VA_OPERATIONTYPEEE_619515.name="operationType";
this.VA_OPERATIONTYPEEE_619515.id="VA_OPERATIONTYPEEE_619515";
this.VA_OPERATIONTYPEEE_619515.colSpan=1;
this.VA_OPERATIONTYPEEE_619515.withoutLabel = false;
this.VA_OPERATIONTYPEEE_619515.readOnly = ConstantsApi.mode.Query;
this.VA_OPERATIONTYPEEE_619515.enabled = ConstantsApi.mode.All;
this.VA_OPERATIONTYPEEE_619515.visible= ConstantsApi.mode.All;
this.VA_OPERATIONTYPEEE_619515.required = true;
this.VA_OPERATIONTYPEEE_619515.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_OPERATIONTYPEEE_619515.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_NEWLOANCURRENNN_364515.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDATUB_92849");
this.VA_NEWLOANCURRENNN_364515.entity = "RefinanceLoanFilter";
this.VA_NEWLOANCURRENNN_364515.attribute = "newLoanCurrency";
this.VA_NEWLOANCURRENNN_364515.textField = "value";
this.VA_NEWLOANCURRENNN_364515.valueField = "code";
this.VA_NEWLOANCURRENNN_364515.showId= true;
this.VA_NEWLOANCURRENNN_364515.name="newLoanCurrency";
this.VA_NEWLOANCURRENNN_364515.id="VA_NEWLOANCURRENNN_364515";
this.VA_NEWLOANCURRENNN_364515.colSpan=1;
this.VA_NEWLOANCURRENNN_364515.withoutLabel = false;
this.VA_NEWLOANCURRENNN_364515.readOnly = ConstantsApi.mode.Query;
this.VA_NEWLOANCURRENNN_364515.enabled = ConstantsApi.mode.All;
this.VA_NEWLOANCURRENNN_364515.visible= ConstantsApi.mode.All;
this.VA_NEWLOANCURRENNN_364515.required = true;
this.VA_NEWLOANCURRENNN_364515.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_NEWLOANCURRENNN_364515.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.Spacer2624.id = "Spacer2624";
this.Spacer2624.name = "Spacer2624";
this.Spacer2624.colSpan = 1;
this.Spacer2624.visible= ConstantsApi.mode.All;
this.VA_OVERDUEVFBXKALY_348515.label = cobis.translate("ASSTS.LBL_ASSTS_NACEVENOD_29221");
this.VA_OVERDUEVFBXKALY_348515.entity = "RefinanceLoanFilter";
this.VA_OVERDUEVFBXKALY_348515.attribute = "overDue";
this.VA_OVERDUEVFBXKALY_348515.textField = "value";
this.VA_OVERDUEVFBXKALY_348515.valueField = "code";
this.VA_OVERDUEVFBXKALY_348515.showId= true;
this.VA_OVERDUEVFBXKALY_348515.name="overDue";
this.VA_OVERDUEVFBXKALY_348515.id="VA_OVERDUEVFBXKALY_348515";
this.VA_OVERDUEVFBXKALY_348515.colSpan=1;
this.VA_OVERDUEVFBXKALY_348515.withoutLabel = false;
this.VA_OVERDUEVFBXKALY_348515.readOnly = ConstantsApi.mode.Query;
this.VA_OVERDUEVFBXKALY_348515.enabled = ConstantsApi.mode.All;
this.VA_OVERDUEVFBXKALY_348515.visible= ConstantsApi.mode.All;
this.VA_PERIODICITYSUIR_653515.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOPLAZZ_65289");
this.VA_PERIODICITYSUIR_653515.blankOption=true;
this.VA_PERIODICITYSUIR_653515.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_PERIODICITYSUIR_653515.entity = "RefinanceLoanFilter";
this.VA_PERIODICITYSUIR_653515.attribute = "periodicity";
this.VA_PERIODICITYSUIR_653515.textField = "value";
this.VA_PERIODICITYSUIR_653515.valueField = "code";
this.VA_PERIODICITYSUIR_653515.showId= true;
this.VA_PERIODICITYSUIR_653515.name="periodicity";
this.VA_PERIODICITYSUIR_653515.id="VA_PERIODICITYSUIR_653515";
this.VA_PERIODICITYSUIR_653515.colSpan=1;
this.VA_PERIODICITYSUIR_653515.withoutLabel = false;
this.VA_PERIODICITYSUIR_653515.readOnly = ConstantsApi.mode.Query;
this.VA_PERIODICITYSUIR_653515.enabled = ConstantsApi.mode.All;
this.VA_PERIODICITYSUIR_653515.visible= ConstantsApi.mode.All;
this.VA_NEWLOANTERMUQHR_494515.label = cobis.translate("ASSTS.LBL_ASSTS_PLAZOYJVK_49555");
this.VA_NEWLOANTERMUQHR_494515.entity = "RefinanceLoanFilter";
this.VA_NEWLOANTERMUQHR_494515.attribute = "newLoanTerm";
this.VA_NEWLOANTERMUQHR_494515.textCase= TextCaseOptions.NONE;
this.VA_NEWLOANTERMUQHR_494515.format= "n0";
this.VA_NEWLOANTERMUQHR_494515.name="newLoanTerm";
this.VA_NEWLOANTERMUQHR_494515.id="VA_NEWLOANTERMUQHR_494515";
this.VA_NEWLOANTERMUQHR_494515.colSpan=1;
this.VA_NEWLOANTERMUQHR_494515.withoutLabel = false;
this.VA_NEWLOANTERMUQHR_494515.readOnly = ConstantsApi.mode.Query;
this.VA_NEWLOANTERMUQHR_494515.enabled = ConstantsApi.mode.All;
this.VA_NEWLOANTERMUQHR_494515.visible= ConstantsApi.mode.All;
this.VA_NEWLOANTERMUQHR_494515.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN)]
]);
this.VA_NEWLOANTERMUQHR_494515.messagesValidations = {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_SEDEBERZE_11978')
};
this.Spacer2168.id = "Spacer2168";
this.Spacer2168.name = "Spacer2168";
this.Spacer2168.colSpan = 1;
this.Spacer2168.visible= ConstantsApi.mode.All;
this.VA_TYPEFEENRTBGEUS_485515.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCUOAA_49907");
this.VA_TYPEFEENRTBGEUS_485515.entity = "RefinanceLoanFilter";
this.VA_TYPEFEENRTBGEUS_485515.attribute = "typeFee";
this.VA_TYPEFEENRTBGEUS_485515.textField = "value";
this.VA_TYPEFEENRTBGEUS_485515.valueField = "code";
this.VA_TYPEFEENRTBGEUS_485515.showId= true;
this.VA_TYPEFEENRTBGEUS_485515.name="typeFee";
this.VA_TYPEFEENRTBGEUS_485515.id="VA_TYPEFEENRTBGEUS_485515";
this.VA_TYPEFEENRTBGEUS_485515.colSpan=1;
this.VA_TYPEFEENRTBGEUS_485515.withoutLabel = false;
this.VA_TYPEFEENRTBGEUS_485515.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEFEENRTBGEUS_485515.enabled = ConstantsApi.mode.All;
this.VA_TYPEFEENRTBGEUS_485515.visible= ConstantsApi.mode.All;
this.VA_TERMINTERESTPBJ_596515.label = cobis.translate("ASSTS.LBL_ASSTS_PINTEMLFG_25013");
this.VA_TERMINTERESTPBJ_596515.entity = "RefinanceLoanFilter";
this.VA_TERMINTERESTPBJ_596515.attribute = "termInterest";
this.VA_TERMINTERESTPBJ_596515.textCase= TextCaseOptions.NONE;
this.VA_TERMINTERESTPBJ_596515.format= "n0";
this.VA_TERMINTERESTPBJ_596515.name="termInterest";
this.VA_TERMINTERESTPBJ_596515.id="VA_TERMINTERESTPBJ_596515";
this.VA_TERMINTERESTPBJ_596515.colSpan=1;
this.VA_TERMINTERESTPBJ_596515.withoutLabel = false;
this.VA_TERMINTERESTPBJ_596515.readOnly = ConstantsApi.mode.Query;
this.VA_TERMINTERESTPBJ_596515.enabled = ConstantsApi.mode.All;
this.VA_TERMINTERESTPBJ_596515.visible= ConstantsApi.mode.All;
this.VA_TERMCAPITALURQB_743515.label = cobis.translate("ASSTS.LBL_ASSTS_PCAPYCICP_34048");
this.VA_TERMCAPITALURQB_743515.entity = "RefinanceLoanFilter";
this.VA_TERMCAPITALURQB_743515.attribute = "termCapital";
this.VA_TERMCAPITALURQB_743515.textCase= TextCaseOptions.NONE;
this.VA_TERMCAPITALURQB_743515.format= "n0";
this.VA_TERMCAPITALURQB_743515.name="termCapital";
this.VA_TERMCAPITALURQB_743515.id="VA_TERMCAPITALURQB_743515";
this.VA_TERMCAPITALURQB_743515.colSpan=1;
this.VA_TERMCAPITALURQB_743515.withoutLabel = false;
this.VA_TERMCAPITALURQB_743515.readOnly = ConstantsApi.mode.Query;
this.VA_TERMCAPITALURQB_743515.enabled = ConstantsApi.mode.All;
this.VA_TERMCAPITALURQB_743515.visible= ConstantsApi.mode.All;
this.VA_FIXEDPAYDAYMGTF_298515.id = "VA_FIXEDPAYDAYMGTF_298515";
this.VA_FIXEDPAYDAYMGTF_298515.name = "fixedPayDay";
this.VA_FIXEDPAYDAYMGTF_298515.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAPAFA_15171");
this.VA_FIXEDPAYDAYMGTF_298515.entity = "RefinanceLoanFilter";
this.VA_FIXEDPAYDAYMGTF_298515.attribute = "fixedPayDay";
this.VA_FIXEDPAYDAYMGTF_298515.colSpan = 1;
this.VA_FIXEDPAYDAYMGTF_298515.withoutLabel = false;
this.VA_FIXEDPAYDAYMGTF_298515.readOnly =ConstantsApi.mode.Query;
this.VA_FIXEDPAYDAYMGTF_298515.enabled = ConstantsApi.mode.All;
this.VA_FIXEDPAYDAYMGTF_298515.visible= ConstantsApi.mode.All;
this.VA_PAYMENTDAYUXWKU_656515.label = cobis.translate("ASSTS.LBL_ASSTS_DAPAGOQIJ_45913");
this.VA_PAYMENTDAYUXWKU_656515.entity = "RefinanceLoanFilter";
this.VA_PAYMENTDAYUXWKU_656515.attribute = "paymentDay";
this.VA_PAYMENTDAYUXWKU_656515.textField = "value";
this.VA_PAYMENTDAYUXWKU_656515.valueField = "code";
this.VA_PAYMENTDAYUXWKU_656515.showId= true;
this.VA_PAYMENTDAYUXWKU_656515.name="paymentDay";
this.VA_PAYMENTDAYUXWKU_656515.id="VA_PAYMENTDAYUXWKU_656515";
this.VA_PAYMENTDAYUXWKU_656515.colSpan=1;
this.VA_PAYMENTDAYUXWKU_656515.withoutLabel = false;
this.VA_PAYMENTDAYUXWKU_656515.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTDAYUXWKU_656515.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTDAYUXWKU_656515.visible= ConstantsApi.mode.All;
this.VA_TERMGRACECAPDVU_578515.label = cobis.translate("ASSTS.LBL_ASSTS_PERGRACAA_52779");
this.VA_TERMGRACECAPDVU_578515.entity = "RefinanceLoanFilter";
this.VA_TERMGRACECAPDVU_578515.attribute = "termGraceCap";
this.VA_TERMGRACECAPDVU_578515.textCase= TextCaseOptions.NONE;
this.VA_TERMGRACECAPDVU_578515.format= "n0";
this.VA_TERMGRACECAPDVU_578515.name="termGraceCap";
this.VA_TERMGRACECAPDVU_578515.id="VA_TERMGRACECAPDVU_578515";
this.VA_TERMGRACECAPDVU_578515.colSpan=1;
this.VA_TERMGRACECAPDVU_578515.withoutLabel = false;
this.VA_TERMGRACECAPDVU_578515.readOnly = ConstantsApi.mode.Query;
this.VA_TERMGRACECAPDVU_578515.enabled = ConstantsApi.mode.All;
this.VA_TERMGRACECAPDVU_578515.visible= ConstantsApi.mode.All;
this.VA_TERMGRACEINTJNV_305515.label = cobis.translate("ASSTS.LBL_ASSTS_PERGRACNI_21279");
this.VA_TERMGRACEINTJNV_305515.entity = "RefinanceLoanFilter";
this.VA_TERMGRACEINTJNV_305515.attribute = "termGraceInt";
this.VA_TERMGRACEINTJNV_305515.textCase= TextCaseOptions.NONE;
this.VA_TERMGRACEINTJNV_305515.format= "n0";
this.VA_TERMGRACEINTJNV_305515.name="termGraceInt";
this.VA_TERMGRACEINTJNV_305515.id="VA_TERMGRACEINTJNV_305515";
this.VA_TERMGRACEINTJNV_305515.colSpan=1;
this.VA_TERMGRACEINTJNV_305515.withoutLabel = false;
this.VA_TERMGRACEINTJNV_305515.readOnly = ConstantsApi.mode.Query;
this.VA_TERMGRACEINTJNV_305515.enabled = ConstantsApi.mode.All;
this.VA_TERMGRACEINTJNV_305515.visible= ConstantsApi.mode.All;
this.VA_TYPEGRACECCQFCY_562515.label = cobis.translate("ASSTS.LBL_ASSTS_ACOBROGAI_62184");
this.VA_TYPEGRACECCQFCY_562515.entity = "RefinanceLoanFilter";
this.VA_TYPEGRACECCQFCY_562515.attribute = "typeGrace";
this.VA_TYPEGRACECCQFCY_562515.textField = "value";
this.VA_TYPEGRACECCQFCY_562515.valueField = "code";
this.VA_TYPEGRACECCQFCY_562515.showId= true;
this.VA_TYPEGRACECCQFCY_562515.name="typeGrace";
this.VA_TYPEGRACECCQFCY_562515.id="VA_TYPEGRACECCQFCY_562515";
this.VA_TYPEGRACECCQFCY_562515.colSpan=1;
this.VA_TYPEGRACECCQFCY_562515.withoutLabel = false;
this.VA_TYPEGRACECCQFCY_562515.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEGRACECCQFCY_562515.enabled = ConstantsApi.mode.All;
this.VA_TYPEGRACECCQFCY_562515.visible= ConstantsApi.mode.All;
this.VA_5032SUOKWXIJNUR_934515.label = cobis.translate("ASSTS.LBL_ASSTS_NUMDIVARR_93213");
this.VA_5032SUOKWXIJNUR_934515.entity = "RefinanceLoanFilter";
this.VA_5032SUOKWXIJNUR_934515.attribute = "graceDividend";
this.VA_5032SUOKWXIJNUR_934515.maxlength= 5;
this.VA_5032SUOKWXIJNUR_934515.textCase= TextCaseOptions.NONE;
this.VA_5032SUOKWXIJNUR_934515.format= "n0";
this.VA_5032SUOKWXIJNUR_934515.name="graceDividend";
this.VA_5032SUOKWXIJNUR_934515.id="VA_5032SUOKWXIJNUR_934515";
this.VA_5032SUOKWXIJNUR_934515.colSpan=1;
this.VA_5032SUOKWXIJNUR_934515.withoutLabel = false;
this.VA_5032SUOKWXIJNUR_934515.readOnly = ConstantsApi.mode.Query;
this.VA_5032SUOKWXIJNUR_934515.enabled = ConstantsApi.mode.All;
this.VA_5032SUOKWXIJNUR_934515.visible= ConstantsApi.mode.All;
this.VA_TYPERENOVATIONO_499515.label = cobis.translate("ASSTS.LBL_ASSTS_TIPORENCC_42776");
this.VA_TYPERENOVATIONO_499515.entity = "RefinanceLoanFilter";
this.VA_TYPERENOVATIONO_499515.attribute = "typeRenovation";
this.VA_TYPERENOVATIONO_499515.textField = "value";
this.VA_TYPERENOVATIONO_499515.valueField = "code";
this.VA_TYPERENOVATIONO_499515.showId= true;
this.VA_TYPERENOVATIONO_499515.name="typeRenovation";
this.VA_TYPERENOVATIONO_499515.id="VA_TYPERENOVATIONO_499515";
this.VA_TYPERENOVATIONO_499515.colSpan=1;
this.VA_TYPERENOVATIONO_499515.withoutLabel = false;
this.VA_TYPERENOVATIONO_499515.readOnly = ConstantsApi.mode.Query;
this.VA_TYPERENOVATIONO_499515.enabled = ConstantsApi.mode.All;
this.VA_TYPERENOVATIONO_499515.visible= ConstantsApi.mode.All;
this.VA_TYPERENOVATIONO_499515.required = true;
this.VA_TYPERENOVATIONO_499515.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TYPERENOVATIONO_499515.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_PAYMETHODCURCYE_344515.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDATUB_92849");
this.VA_PAYMETHODCURCYE_344515.entity = "RefinanceLoanFilter";
this.VA_PAYMETHODCURCYE_344515.attribute = "payMethodCurrency";
this.VA_PAYMETHODCURCYE_344515.textField = "value";
this.VA_PAYMETHODCURCYE_344515.valueField = "code";
this.VA_PAYMETHODCURCYE_344515.showId= true;
this.VA_PAYMETHODCURCYE_344515.name="payMethodCurrency";
this.VA_PAYMETHODCURCYE_344515.id="VA_PAYMETHODCURCYE_344515";
this.VA_PAYMETHODCURCYE_344515.colSpan=1;
this.VA_PAYMETHODCURCYE_344515.withoutLabel = false;
this.VA_PAYMETHODCURCYE_344515.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMETHODCURCYE_344515.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_PAYMETHODCURCYE_344515.visible= ConstantsApi.mode.All;
this.VA_ADDICIONALPAYOH_649515.label = cobis.translate("ASSTS.LBL_ASSTS_APAGOKXFB_84081");
this.VA_ADDICIONALPAYOH_649515.blankOption=true;
this.VA_ADDICIONALPAYOH_649515.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_ADDICIONALPAYOH_649515.entity = "RefinanceLoanFilter";
this.VA_ADDICIONALPAYOH_649515.attribute = "addicionalPayMethod";
this.VA_ADDICIONALPAYOH_649515.cascadeFrom = "VA_PAYMETHODCURCYE_344515";
this.VA_PAYMETHODCURCYE_344515.isCascadeParent = true;
this.VA_ADDICIONALPAYOH_649515.textField = "descripcion";
this.VA_ADDICIONALPAYOH_649515.valueField = "producto";
this.VA_ADDICIONALPAYOH_649515.showId= true;
this.VA_ADDICIONALPAYOH_649515.name="addicionalPayMethod";
this.VA_ADDICIONALPAYOH_649515.id="VA_ADDICIONALPAYOH_649515";
this.VA_ADDICIONALPAYOH_649515.colSpan=1;
this.VA_ADDICIONALPAYOH_649515.withoutLabel = false;
this.VA_ADDICIONALPAYOH_649515.readOnly = ConstantsApi.mode.Query;
this.VA_ADDICIONALPAYOH_649515.enabled = ConstantsApi.mode.All;
this.VA_ADDICIONALPAYOH_649515.visible= ConstantsApi.mode.All;
this.VA_ADDITIONALVAUUU_896515.label = cobis.translate("ASSTS.LBL_ASSTS_VALORNPRH_26284");
this.VA_ADDITIONALVAUUU_896515.entity = "RefinanceLoanFilter";
this.VA_ADDITIONALVAUUU_896515.attribute = "additionalValue";
this.VA_ADDITIONALVAUUU_896515.textCase= TextCaseOptions.NONE;
this.VA_ADDITIONALVAUUU_896515.format= "c";
this.VA_ADDITIONALVAUUU_896515.name="additionalValue";
this.VA_ADDITIONALVAUUU_896515.id="VA_ADDITIONALVAUUU_896515";
this.VA_ADDITIONALVAUUU_896515.colSpan=1;
this.VA_ADDITIONALVAUUU_896515.withoutLabel = false;
this.VA_ADDITIONALVAUUU_896515.readOnly = ConstantsApi.mode.Query;
this.VA_ADDITIONALVAUUU_896515.enabled = ConstantsApi.mode.All;
this.VA_ADDITIONALVAUUU_896515.visible= ConstantsApi.mode.All;
this.VA_ADDITIONALVAUUU_896515.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)]
]);
this.VA_ADDITIONALVAUUU_896515.messagesValidations = {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_SEDEBERZE_11978')
};
this.VA_ACCOUNTYATVYIRL_740515.id = "VA_ACCOUNTYATVYIRL_740515";
this.VA_ACCOUNTYATVYIRL_740515.name = "account";
this.VA_ACCOUNTYATVYIRL_740515.label = cobis.translate("ASSTS.LBL_ASSTS_CUENTADRA_18812");
this.VA_ACCOUNTYATVYIRL_740515.entity = "RefinanceLoanFilter";
this.VA_ACCOUNTYATVYIRL_740515.attribute = "account";
this.VA_ACCOUNTYATVYIRL_740515.colSpan = 1;
this.VA_ACCOUNTYATVYIRL_740515.format = "";
this.VA_ACCOUNTYATVYIRL_740515.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_ACCOUNTYATVYIRL_740515.enabled = ConstantsApi.mode.All;
this.VA_ACCOUNTYATVYIRL_740515.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_ACCOUNTYATVYIRL_740515.required = true;
this.VA_ACCOUNTYATVYIRL_740515.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ACCOUNTYATVYIRL_740515.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.T_REFINANCELISS_781 = this.formBuilder.group({
RefinanceLoanFilter: this.formBuilder.group({
clientName:[{value: null, disabled: !this.VA_CLIENTNAMEBGXWU_198515.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CLIENTNAMEBGXWU_198515.validationFunctions!)],
addicionalPayMethod:[null],
currencyTypeAux:[null],
interestBalance:[null],
arrearsBalance:[null],
additionalValue:[null],
refreshData:[null],
paymentDay:[null],
typeFee:[null],
operation:[null],
termInterest:[null],
currencyType:[null],
periodicity:[null],
totalRefinance:[null],
bankOperation:[null],
capitalBalanceNew:[null],
aditionalBalanceLocal:[null],
totalToRenew:[null],
account:[null],
newLoanCurrency:[null],
payMethodCurrency:[null],
capitalBalance:[null],
graceDividend:[null],
otherBalanceLocal:[null],
preventionProgram:[null],
termGraceInt:[null],
valuePay:[null],
newLoanLabel:[null],
accountList:[null],
interestBalanceLocal:[null],
typeRenovation:[null],
otherBalance:[null],
capitalizeBalance:[null],
termGraceCap:[null],
fixedPayDay:[null],
typeGrace:[null],
basicInsurance:[null],
interestBalanceNew:[null],
overDue:[null],
capitalBalanceLocal:[null],
operationType:[null],
aditionalBalance:[null],
otherBalanceNew:[null],
newLoanTerm:[null],
aditionalBalanceNew:[null],
clientID:[null],
termCapital:[null],
}
),
RefinanceLoans: this.formBuilder.group({
selected:[{value: false, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_CHECKBOXKZZRISM_582515')],
loan:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXMHS_260515')],
line:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXSSV_745515')],
currencyType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXYEW_490515')],
initialAmount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXFDY_704515')],
originalTerm:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXFFP_550515')],
capitalBalance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXROR_675515')],
interestBalance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXPZA_248515')],
defaultBalance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXEQH_169515')],
otherConceptsBalance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXIKG_248515')],
residualTerm:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXMUB_575515')],
overdueFees:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXIFR_825515')],
procedureId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3375_11342.columns,'VA_TEXTINPUTBOXTFN_867515')],
totalBalance:[null],
transactionID:[null],
loanStatus:[null],
type:[null],
quotation:[null],
currencyCode:[null],
officialID:[null],
totalToRefinance:[null],
}
),
});
}
}