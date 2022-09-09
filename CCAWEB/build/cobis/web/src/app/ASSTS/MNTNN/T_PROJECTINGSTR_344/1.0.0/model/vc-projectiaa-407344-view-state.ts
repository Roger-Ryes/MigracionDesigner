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
public T_PROJECTINGSTR_344!:FormGroup;
public VC_PROJECTIAA_407344:CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_UJNNOFLWUJ_608344 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_OWPOFVEWRD_797316 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADOD_564612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADRO_349612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEAINF_340612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_IHHMDIPYBG_286425 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTOOG_992888 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_8396_63374: CobisGridModel = new CobisGridModel();
public VA_VASIMPLELABELLL_143612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_867612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VABUTTONWVITZRQ_108612: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONORYJAMS_468612: CobisButtonModel = new CobisButtonModel();
public VA_5034UOFCASVGKTK_993612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_2463BHBNLZPKLMU_865612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_3853RRTWBIRUGHQ_533612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_7292SEAHPRAXOKC_868612: CobisTextLabelModel = new CobisTextLabelModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PROJECTIAA_407344.id="VC_PROJECTIAA_407344";
this.VC_PROJECTIAA_407344.name="ViewContainerBase";
this.VC_PROJECTIAA_407344.colSpan=1;
this.VC_PROJECTIAA_407344.columns=1;
this.VC_PROJECTIAA_407344.enabled=ConstantsApi.mode.All;
this.VC_UJNNOFLWUJ_608344.id="VC_UJNNOFLWUJ_608344";
this.VC_UJNNOFLWUJ_608344.name="ViewContainerBase";
this.VC_UJNNOFLWUJ_608344.enabled=ConstantsApi.mode.All;
this.VC_UJNNOFLWUJ_608344.colSpan=1;
this.VC_UJNNOFLWUJ_608344.columns=1;
this.VC_OWPOFVEWRD_797316.id="VC_OWPOFVEWRD_797316";
this.VC_OWPOFVEWRD_797316.name="LoanHeaderInfoForm";
this.VC_OWPOFVEWRD_797316.enabled=ConstantsApi.mode.All;
this.VC_OWPOFVEWRD_797316.colSpan=1;
this.VC_OWPOFVEWRD_797316.columns=1;
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
this.VC_IHHMDIPYBG_286425.id="VC_IHHMDIPYBG_286425";
this.VC_IHHMDIPYBG_286425.name="ProjectionIngresoOtrosCargosForm";
this.VC_IHHMDIPYBG_286425.enabled=ConstantsApi.mode.All;
this.VC_IHHMDIPYBG_286425.colSpan=1;
this.VC_IHHMDIPYBG_286425.columns=1;
this.G_PROJECTOOG_992888.id="G_PROJECTOOG_992888";
this.G_PROJECTOOG_992888.name="Group2267";
this.G_PROJECTOOG_992888.columns=1;
this.G_PROJECTOOG_992888.labelOrientation="Top";
this.G_PROJECTOOG_992888.colSpan=1;
this.G_PROJECTOOG_992888.enabled=ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.G_PROJECTOOG_992888.visible=ConstantsApi.mode.All;
this.G_PROJECTOOG_992888.attList = ["sequential","iniDiv","divUp","date","concept","value","commentary"];
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
this.QV_8396_63374.pageSize=10;
this.QV_8396_63374.id='QV_8396_63374';
this.QV_8396_63374.name='QV_8396_63374';
this.QV_8396_63374.pageable=true;
this.QV_8396_63374.sortable=false;
this.QV_8396_63374.resizable=true;
this.QV_8396_63374.scrollable=false
this.QV_8396_63374.confirmRowDeletion=false;
this.QV_8396_63374.exportToExcel=false;
this.QV_8396_63374.exportToPdf=false;
this.QV_8396_63374.height=0;
this.QV_8396_63374.filterableColumns=false;
this.QV_8396_63374.entityName='OtherCharges';
this.QV_8396_63374.appendRecords=false;
this.QV_8396_63374.rowDetail=false;
this.QV_8396_63374.columnMenu = true;
this.QV_8396_63374.editMode=CommonsConstants.GRID_EDIT_MODE_MODAL;
this.QV_8396_63374.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_8396_63374.actions=[ComplexConstants.GRID_ACTION_CREATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_8396_63374.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXVRY_167888",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXVRY_167888',
name :'Secuencial',
withoutLabel : true,
attribute : 'sequential',
entity : 'OtherCharges',
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFHW_169888",
label : cobis.translate('ASSTS.LBL_ASSTS_DIVINICII_26095'),
field : 'iniDiv',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXFHW_169888',
name :'divInicial',
withoutLabel : true,
attribute : 'iniDiv',
entity : 'OtherCharges',
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
id : "VA_TEXTINPUTBOXCDO_902888",
label : cobis.translate('ASSTS.LBL_ASSTS_DIVHASTAA_21887'),
field : 'divUp',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXCDO_902888',
name :'divHasta',
withoutLabel : true,
attribute : 'divUp',
entity : 'OtherCharges',
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
id : "VA_DATEFIELDZFVCGN_770888",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAQWBP_23514'),
field : 'date',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_DATEFIELDZFVCGN_770888',
name :'fecha',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'date',
textLocked : false,
readonly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
entity : 'OtherCharges',
visible : true,
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXYVX_228888",
label : cobis.translate('ASSTS.LBL_ASSTS_CONCEPTOO_16181'),
field : 'concept',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXYVX_228888',
name :'concepto',
withoutLabel : true,
attribute : 'concept',
entity : 'OtherCharges',
maxlength: 255,
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
id : "VA_TEXTINPUTBOXPSH_886888",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORNPRH_26284'),
field : 'value',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXPSH_886888',
name :'valor',
withoutLabel : true,
attribute : 'value',
entity : 'OtherCharges',
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
id : "VA_TEXTINPUTBOXRKL_324888",
label : cobis.translate('ASSTS.LBL_ASSTS_REFERENAI_72258'),
field : 'commentary',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXRKL_324888',
name :'referencia',
withoutLabel : true,
attribute : 'commentary',
entity : 'OtherCharges',
maxlength: 255,
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
]);
this.T_PROJECTINGSTR_344 = this.formBuilder.group({
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
OtherCharges: this.formBuilder.group({
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXVRY_167888')],
iniDiv:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXFHW_169888')],
divUp:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXCDO_902888')],
date:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_DATEFIELDZFVCGN_770888')],
concept:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXYVX_228888')],
value:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXPSH_886888')],
commentary:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXRKL_324888')],
categoryType:[null],
valueApply:[null],
reference:[null],
valueMin:[null],
valueMax:[null],
baseCalculation:[null],
balanceOp:[null],
balanceDesemp:[null],
rate:[null],
decTapl:[null],
range:[null],
}
),
});
}
}