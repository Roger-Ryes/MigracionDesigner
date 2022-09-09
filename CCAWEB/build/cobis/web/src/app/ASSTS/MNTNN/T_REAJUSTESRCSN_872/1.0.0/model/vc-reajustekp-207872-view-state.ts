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
public T_REAJUSTESRCSN_872!:FormGroup;
public VC_REAJUSTEKP_207872:CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_VPRGARGERZ_116872 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_HLCOFBWFEL_155316 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADOD_564612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADRO_349612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEAINF_340612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_QJNNHCWJBF_866872 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_MQDRYRJORE_339801 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REAJUSTMEC_674319 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_5831_17646: CobisGridModel = new CobisGridModel();
public VA_VASIMPLELABELLL_143612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_867612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VABUTTONWVITZRQ_108612: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONORYJAMS_468612: CobisButtonModel = new CobisButtonModel();
public VA_5034UOFCASVGKTK_993612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_2463BHBNLZPKLMU_865612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_3853RRTWBIRUGHQ_533612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_7292SEAHPRAXOKC_868612: CobisTextLabelModel = new CobisTextLabelModel();
public CM_TREAJUST_828: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_REAJUSTEKP_207872.id="VC_REAJUSTEKP_207872";
this.VC_REAJUSTEKP_207872.name="ViewContainerBase";
this.VC_REAJUSTEKP_207872.colSpan=1;
this.VC_REAJUSTEKP_207872.columns=1;
this.VC_REAJUSTEKP_207872.enabled=ConstantsApi.mode.All;
this.VC_VPRGARGERZ_116872.id="VC_VPRGARGERZ_116872";
this.VC_VPRGARGERZ_116872.name="ViewContainerBase";
this.VC_VPRGARGERZ_116872.enabled=ConstantsApi.mode.All;
this.VC_VPRGARGERZ_116872.colSpan=1;
this.VC_VPRGARGERZ_116872.columns=1;
this.VC_HLCOFBWFEL_155316.id="VC_HLCOFBWFEL_155316";
this.VC_HLCOFBWFEL_155316.name="LoanHeaderInfoForm";
this.VC_HLCOFBWFEL_155316.enabled=ConstantsApi.mode.All;
this.VC_HLCOFBWFEL_155316.colSpan=1;
this.VC_HLCOFBWFEL_155316.columns=1;
this.G_LOANHEADOD_564612.id="G_LOANHEADOD_564612";
this.G_LOANHEADOD_564612.name="Group2443";
this.G_LOANHEADOD_564612.columns=12;
this.G_LOANHEADOD_564612.labelOrientation="Top";
this.G_LOANHEADOD_564612.colSpan=1;
this.G_LOANHEADOD_564612.enabled=ConstantsApi.mode.All;
this.G_LOANHEADOD_564612.visible=ConstantsApi.mode.All;
this.G_LOANHEADRO_349612.id="G_LOANHEADRO_349612";
this.G_LOANHEADRO_349612.name="Group1657";
this.G_LOANHEADRO_349612.columns=12;
this.G_LOANHEADRO_349612.labelOrientation="Top";
this.G_LOANHEADRO_349612.colSpan=1;
this.G_LOANHEADRO_349612.enabled=ConstantsApi.mode.All;
this.G_LOANHEADRO_349612.visible=ConstantsApi.mode.All;
this.G_LOANHEADRO_349612.attList = ["loanBankID"];
this.G_LOANHEAINF_340612.id="G_LOANHEAINF_340612";
this.G_LOANHEAINF_340612.name="Group1848";
this.G_LOANHEAINF_340612.columns=12;
this.G_LOANHEAINF_340612.labelOrientation="Top";
this.G_LOANHEAINF_340612.colSpan=1;
this.G_LOANHEAINF_340612.enabled=ConstantsApi.mode.All;
this.G_LOANHEAINF_340612.visible=ConstantsApi.mode.All;
this.G_LOANHEAINF_340612.attList = ["amount","balanceDue","status","office"];
this.VC_QJNNHCWJBF_866872.id="VC_QJNNHCWJBF_866872";
this.VC_QJNNHCWJBF_866872.name="ViewContainerBase";
this.VC_QJNNHCWJBF_866872.enabled=ConstantsApi.mode.All;
this.VC_QJNNHCWJBF_866872.colSpan=1;
this.VC_QJNNHCWJBF_866872.columns=1;
this.VC_MQDRYRJORE_339801.id="VC_MQDRYRJORE_339801";
this.VC_MQDRYRJORE_339801.name="ReadjustmentLoanCabForm";
this.VC_MQDRYRJORE_339801.enabled=ConstantsApi.mode.All;
this.VC_MQDRYRJORE_339801.colSpan=1;
this.VC_MQDRYRJORE_339801.columns=1;
this.G_REAJUSTMEC_674319.id="G_REAJUSTMEC_674319";
this.G_REAJUSTMEC_674319.name="Group2576";
this.G_REAJUSTMEC_674319.columns=1;
this.G_REAJUSTMEC_674319.labelOrientation="Top";
this.G_REAJUSTMEC_674319.colSpan=1;
this.G_REAJUSTMEC_674319.enabled=ConstantsApi.mode.All;
this.G_REAJUSTMEC_674319.visible=ConstantsApi.mode.All;
this.G_REAJUSTMEC_674319.attList = ["date","mantCuota","secuencial","desagio"];
this.CM_TREAJUST_828.id = "CM_TREAJUST_828";
this.CM_TREAJUST_828.name = "Command1";
this.CM_TREAJUST_828.causesValidation=false;
this.CM_TREAJUST_828.submitOnEnter=false;
this.CM_TREAJUST_828.setFocus=false;
this.CM_TREAJUST_828.close=true;
this.CM_TREAJUST_828.label = cobis.translate("ASSTS.LBL_ASSTS_CERRARGRF_18229");
this.CM_TREAJUST_828.enabled = ConstantsApi.mode.All;
this.CM_TREAJUST_828.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_143612.id = "VA_VASIMPLELABELLL_143612";
this.VA_VASIMPLELABELLL_143612.name = "clientName";
this.VA_VASIMPLELABELLL_143612.label = cobis.translate("ASSTS.LBL_ASSTS_CLIENTEWV_22561");
this.VA_VASIMPLELABELLL_143612.colSpan = 12;
this.VA_VASIMPLELABELLL_143612.withoutLabel = false;
this.VA_VASIMPLELABELLL_143612.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_143612.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_867612.id = "VA_VASIMPLELABELLL_867612";
this.VA_VASIMPLELABELLL_867612.name = "loanBankID";
this.VA_VASIMPLELABELLL_867612.label = cobis.translate("ASSTS.LBL_ASSTS_PRSTAMOFK_44930");
this.VA_VASIMPLELABELLL_867612.attribute = "loanBankID";
this.VA_VASIMPLELABELLL_867612.colSpan = 7;
this.VA_VASIMPLELABELLL_867612.withoutLabel = false;
this.VA_VASIMPLELABELLL_867612.enabled = ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_867612.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_867612.image = "";
this.VA_VABUTTONWVITZRQ_108612.id = "VA_VABUTTONWVITZRQ_108612";
this.VA_VABUTTONWVITZRQ_108612.name = "VA_VABUTTONWVITZRQ_108612";
this.VA_VABUTTONWVITZRQ_108612.label = cobis.translate("ASSTS.LBL_ASSTS_MASINACIN_18792");
this.VA_VABUTTONWVITZRQ_108612.colSpan = 3;
this.VA_VABUTTONWVITZRQ_108612.withoutLabel = false;
this.VA_VABUTTONWVITZRQ_108612.causesValidation=false;
this.VA_VABUTTONWVITZRQ_108612.submitOnEnter=false;
this.VA_VABUTTONWVITZRQ_108612.setFocus=false;
this.VA_VABUTTONWVITZRQ_108612.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONWVITZRQ_108612.visible= ConstantsApi.mode.All;
this.VA_VABUTTONWVITZRQ_108612.icon = "glyphicon glyphicon-info-sign";
this.VA_VABUTTONORYJAMS_468612.id = "VA_VABUTTONORYJAMS_468612";
this.VA_VABUTTONORYJAMS_468612.name = "VA_VABUTTONORYJAMS_468612";
this.VA_VABUTTONORYJAMS_468612.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONORYJAMS_468612.colSpan = 2;
this.VA_VABUTTONORYJAMS_468612.withoutLabel = false;
this.VA_VABUTTONORYJAMS_468612.causesValidation=false;
this.VA_VABUTTONORYJAMS_468612.submitOnEnter=false;
this.VA_VABUTTONORYJAMS_468612.setFocus=false;
this.VA_VABUTTONORYJAMS_468612.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONORYJAMS_468612.visible= ConstantsApi.mode.All;
this.VA_VABUTTONORYJAMS_468612.icon = "glyphicon glyphicon-search";
this.VA_5034UOFCASVGKTK_993612.id = "VA_5034UOFCASVGKTK_993612";
this.VA_5034UOFCASVGKTK_993612.name = "amount";
this.VA_5034UOFCASVGKTK_993612.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCRDOO_69382");
this.VA_5034UOFCASVGKTK_993612.attribute = "amount";
this.VA_5034UOFCASVGKTK_993612.colSpan = 1;
this.VA_5034UOFCASVGKTK_993612.withoutLabel = false;
this.VA_5034UOFCASVGKTK_993612.enabled = ConstantsApi.mode.All;
this.VA_5034UOFCASVGKTK_993612.visible= ConstantsApi.mode.All;
this.VA_2463BHBNLZPKLMU_865612.id = "VA_2463BHBNLZPKLMU_865612";
this.VA_2463BHBNLZPKLMU_865612.name = "balanceDue";
this.VA_2463BHBNLZPKLMU_865612.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOEXBB_70535");
this.VA_2463BHBNLZPKLMU_865612.attribute = "balanceDue";
this.VA_2463BHBNLZPKLMU_865612.colSpan = 1;
this.VA_2463BHBNLZPKLMU_865612.withoutLabel = false;
this.VA_2463BHBNLZPKLMU_865612.enabled = ConstantsApi.mode.All;
this.VA_2463BHBNLZPKLMU_865612.visible= ConstantsApi.mode.All;
this.VA_3853RRTWBIRUGHQ_533612.id = "VA_3853RRTWBIRUGHQ_533612";
this.VA_3853RRTWBIRUGHQ_533612.name = "status";
this.VA_3853RRTWBIRUGHQ_533612.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOEAI_33340");
this.VA_3853RRTWBIRUGHQ_533612.attribute = "status";
this.VA_3853RRTWBIRUGHQ_533612.colSpan = 1;
this.VA_3853RRTWBIRUGHQ_533612.withoutLabel = false;
this.VA_3853RRTWBIRUGHQ_533612.enabled = ConstantsApi.mode.All;
this.VA_3853RRTWBIRUGHQ_533612.visible= ConstantsApi.mode.All;
this.VA_7292SEAHPRAXOKC_868612.id = "VA_7292SEAHPRAXOKC_868612";
this.VA_7292SEAHPRAXOKC_868612.name = "office";
this.VA_7292SEAHPRAXOKC_868612.label = cobis.translate("ASSTS.LBL_ASSTS_OFICINAHX_44623");
this.VA_7292SEAHPRAXOKC_868612.attribute = "office";
this.VA_7292SEAHPRAXOKC_868612.colSpan = 1;
this.VA_7292SEAHPRAXOKC_868612.withoutLabel = false;
this.VA_7292SEAHPRAXOKC_868612.enabled = ConstantsApi.mode.All;
this.VA_7292SEAHPRAXOKC_868612.visible= ConstantsApi.mode.All;
this.QV_5831_17646.pageSize=10;
this.QV_5831_17646.id='QV_5831_17646';
this.QV_5831_17646.name='QV_5831_17646';
this.QV_5831_17646.pageable=true;
this.QV_5831_17646.sortable=false;
this.QV_5831_17646.resizable=true;
this.QV_5831_17646.scrollable=true
this.QV_5831_17646.confirmRowDeletion=true;
this.QV_5831_17646.exportToExcel=false;
this.QV_5831_17646.exportToPdf=false;
this.QV_5831_17646.height=0;
this.QV_5831_17646.filterableColumns=false;
this.QV_5831_17646.entityName='ReadjustmentLoanCab';
this.QV_5831_17646.appendRecords=true;
this.QV_5831_17646.rowDetail=true;
this.QV_5831_17646.columnMenu = true;
this.QV_5831_17646.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_5831_17646.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_5831_17646.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_5831_17646.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXCKZ_136319",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAQWBP_23514'),
field : 'date',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXCKZ_136319',
name :'fecha',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'date',
readonly : ConstantsApi.mode.Query,
entity : 'ReadjustmentLoanCab',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXQCR_748319",
label : cobis.translate('ASSTS.LBL_ASSTS_MANTCUOTT_96843'),
field : 'mantCuota',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXQCR_748319',
name :'mantCuota',
attribute : 'mantCuota',
entity : 'ReadjustmentLoanCab',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXKUR_906319",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'secuencial',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKUR_906319',
name :'secuencial',
withoutLabel : true,
attribute : 'secuencial',
entity : 'ReadjustmentLoanCab',
format : '########',
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXPIL_163319",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOLDSKB_46090'),
field : 'desagio',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXPIL_163319',
name :'tipo',
attribute : 'desagio',
entity : 'ReadjustmentLoanCab',
withoutLabel : false,
blankOption : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
]);
this.T_REAJUSTESRCSN_872 = this.formBuilder.group({
Loan: this.formBuilder.group({
loanBankID:[{value: null, disabled: !this.VA_VASIMPLELABELLL_867612.visible}],
amount:[{value: null, disabled: !this.VA_5034UOFCASVGKTK_993612.visible}],
balanceDue:[{value: null, disabled: !this.VA_2463BHBNLZPKLMU_865612.visible}],
status:[{value: null, disabled: !this.VA_3853RRTWBIRUGHQ_533612.visible}],
office:[{value: null, disabled: !this.VA_7292SEAHPRAXOKC_868612.visible}],
numProcedure:[null],
quotaCredit:[null],
statusID:[null],
maxDateProrogation:[null],
lastProcessDate:[null],
category:[null],
operationTypeID:[null],
codCurrency:[null],
newStatusID:[null],
isDisbursment:[null],
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
desOperationType:[null],
redesCont:[null],
newStatus:[null],
group:[null],
tipo:[null],
previousOper:[null],
categoryGroup:[null],
clientID:[null],
operationType:[null],
clientName:[null],
disbursementDate:[null],
expirationDate:[null],
officer:[null],
sector:[null],
nextPayment:[null],
effectiveAnualRate:[null],
adjustment:[null],
officerID:[null],
feeEndDate:[null],
}
),
ReadjustmentLoanCab: this.formBuilder.group({
date:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5831_17646.columns,'VA_TEXTINPUTBOXCKZ_136319')],
mantCuota:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5831_17646.columns,'VA_TEXTINPUTBOXQCR_748319')],
secuencial:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5831_17646.columns,'VA_TEXTINPUTBOXKUR_906319')],
desagio:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5831_17646.columns,'VA_TEXTINPUTBOXPIL_163319')],
}
),
});
}
}