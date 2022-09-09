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
public T_ASSTSAXELGOQQ_915!:FormGroup;
public VC_SIMULATEUT_397915:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_SIMULATEEE_319982 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_SIMULATEEE_597982 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_SIMULATEEE_617982 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_AV40_EIS41: CobisGridModel = new CobisGridModel();
public VA_3114DYOIQOVZVVS_763982: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer1523: CobisSpacerModel = new CobisSpacerModel();
public Spacer2179: CobisSpacerModel = new CobisSpacerModel();
public VA_9325HMVCFBYGKEC_795982: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_2369DGOLAKHUZKA_978982: CobisDropDownListModel = new CobisDropDownListModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_SIMULATEUT_397915.id="VC_SIMULATEUT_397915";
this.VC_SIMULATEUT_397915.name="SimulateForm";
this.VC_SIMULATEUT_397915.colSpan=1;
this.VC_SIMULATEUT_397915.columns=1;
this.VC_SIMULATEUT_397915.enabled=ConstantsApi.mode.All;
this.G_SIMULATEEE_319982.id="G_SIMULATEEE_319982";
this.G_SIMULATEEE_319982.name="GroupLayout1280";
this.G_SIMULATEEE_319982.columns=3;
this.G_SIMULATEEE_319982.childrenGroups = ["G_SIMULATEEE_597982","G_SIMULATEEE_617982"];
this.G_SIMULATEEE_319982.colSpan=1;
this.G_SIMULATEEE_319982.enabled=ConstantsApi.mode.All;
this.G_SIMULATEEE_319982.visible=ConstantsApi.mode.All;
this.G_SIMULATEEE_597982.id="G_SIMULATEEE_597982";
this.G_SIMULATEEE_597982.name="Group2908";
this.G_SIMULATEEE_597982.columns=3;
this.G_SIMULATEEE_597982.labelOrientation="Top";
this.G_SIMULATEEE_597982.colSpan=3;
this.G_SIMULATEEE_597982.enabled=ConstantsApi.mode.All;
this.G_SIMULATEEE_597982.visible=ConstantsApi.mode.All;
this.G_SIMULATEEE_597982.attList = ["amountPrepayment","amountPayment","currencyType"];
this.G_SIMULATEEE_617982.id="G_SIMULATEEE_617982";
this.G_SIMULATEEE_617982.name="Group1338";
this.G_SIMULATEEE_617982.columns=1;
this.G_SIMULATEEE_617982.labelOrientation="Top";
this.G_SIMULATEEE_617982.colSpan=3;
this.G_SIMULATEEE_617982.enabled=ConstantsApi.mode.All;
this.G_SIMULATEEE_617982.visible=ConstantsApi.mode.All;
this.G_SIMULATEEE_617982.attList = ["description","expired","active","inactive","total"];
this.VA_3114DYOIQOVZVVS_763982.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOPRAC_46646");
this.VA_3114DYOIQOVZVVS_763982.entity = "Payment";
this.VA_3114DYOIQOVZVVS_763982.attribute = "amountPrepayment";
this.VA_3114DYOIQOVZVVS_763982.textCase= TextCaseOptions.NONE;
this.VA_3114DYOIQOVZVVS_763982.format= "c";
this.VA_3114DYOIQOVZVVS_763982.name="amountPrepayment";
this.VA_3114DYOIQOVZVVS_763982.id="VA_3114DYOIQOVZVVS_763982";
this.VA_3114DYOIQOVZVVS_763982.colSpan=1;
this.VA_3114DYOIQOVZVVS_763982.withoutLabel = false;
this.VA_3114DYOIQOVZVVS_763982.readOnly = ConstantsApi.mode.Query;
this.VA_3114DYOIQOVZVVS_763982.enabled = ConstantsApi.mode.None;
this.VA_3114DYOIQOVZVVS_763982.visible= ConstantsApi.mode.All;
this.Spacer1523.id = "Spacer1523";
this.Spacer1523.name = "Spacer1523";
this.Spacer1523.colSpan = 1;
this.Spacer1523.visible= ConstantsApi.mode.All;
this.Spacer2179.id = "Spacer2179";
this.Spacer2179.name = "Spacer2179";
this.Spacer2179.colSpan = 1;
this.Spacer2179.visible= ConstantsApi.mode.All;
this.VA_9325HMVCFBYGKEC_795982.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOPAGO_63640");
this.VA_9325HMVCFBYGKEC_795982.entity = "Payment";
this.VA_9325HMVCFBYGKEC_795982.attribute = "amountPayment";
this.VA_9325HMVCFBYGKEC_795982.textCase= TextCaseOptions.NONE;
this.VA_9325HMVCFBYGKEC_795982.format= "c";
this.VA_9325HMVCFBYGKEC_795982.name="amountPayment";
this.VA_9325HMVCFBYGKEC_795982.id="VA_9325HMVCFBYGKEC_795982";
this.VA_9325HMVCFBYGKEC_795982.colSpan=1;
this.VA_9325HMVCFBYGKEC_795982.withoutLabel = false;
this.VA_9325HMVCFBYGKEC_795982.readOnly = ConstantsApi.mode.Query;
this.VA_9325HMVCFBYGKEC_795982.enabled = ConstantsApi.mode.All;
this.VA_9325HMVCFBYGKEC_795982.visible= ConstantsApi.mode.All;
this.VA_9325HMVCFBYGKEC_795982.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN)]
]);
this.VA_9325HMVCFBYGKEC_795982.messagesValidations = {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_SEDEBERZE_11978')
};
this.VA_2369DGOLAKHUZKA_978982.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDALEE_61099");
this.VA_2369DGOLAKHUZKA_978982.entity = "Payment";
this.VA_2369DGOLAKHUZKA_978982.attribute = "currencyType";
this.VA_2369DGOLAKHUZKA_978982.textField = "value";
this.VA_2369DGOLAKHUZKA_978982.valueField = "code";
this.VA_2369DGOLAKHUZKA_978982.showId= true;
this.VA_2369DGOLAKHUZKA_978982.name="currencyType";
this.VA_2369DGOLAKHUZKA_978982.id="VA_2369DGOLAKHUZKA_978982";
this.VA_2369DGOLAKHUZKA_978982.colSpan=1;
this.VA_2369DGOLAKHUZKA_978982.withoutLabel = false;
this.VA_2369DGOLAKHUZKA_978982.readOnly = ConstantsApi.mode.Query;
this.VA_2369DGOLAKHUZKA_978982.enabled = ConstantsApi.mode.None;
this.VA_2369DGOLAKHUZKA_978982.visible= ConstantsApi.mode.All;
this.QV_AV40_EIS41.pageSize=5;
this.QV_AV40_EIS41.id='QV_AV40_EIS41';
this.QV_AV40_EIS41.name='QV_AV40_EIS41';
this.QV_AV40_EIS41.pageable=true;
this.QV_AV40_EIS41.sortable=false;
this.QV_AV40_EIS41.resizable=true;
this.QV_AV40_EIS41.scrollable=true
this.QV_AV40_EIS41.confirmRowDeletion=false;
this.QV_AV40_EIS41.exportToExcel=false;
this.QV_AV40_EIS41.exportToPdf=false;
this.QV_AV40_EIS41.height=0;
this.QV_AV40_EIS41.filterableColumns=false;
this.QV_AV40_EIS41.entityName='QuoteDetails';
this.QV_AV40_EIS41.appendRecords=false;
this.QV_AV40_EIS41.rowDetail=false;
this.QV_AV40_EIS41.columnMenu = true;
this.QV_AV40_EIS41.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_AV40_EIS41.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
this.QV_AV40_EIS41.commandsButton=[
{
id : 'CEQV_201QV_AV40_EIS41_373',
image:'',
label: cobis.translate('ASSTS.LBL_ASSTS_TABLAAMIO_45588'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Hyperlink',
enabled:true,
visible:true
},
];
//RowCommands:
//Creacion de columnas del Grid
this.QV_AV40_EIS41.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXHZE_443982",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXHZE_443982',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXFRJ_728982",
label : cobis.translate('ASSTS.LBL_ASSTS_VENCIDOUG_82584'),
field : 'expired',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXFRJ_728982',
name :'expired',
withoutLabel : true,
attribute : 'expired',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXFZY_802982",
label : cobis.translate('ASSTS.LBL_ASSTS_VIGENTEON_55349'),
field : 'active',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXFZY_802982',
name :'active',
withoutLabel : true,
attribute : 'active',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXPDW_447982",
label : cobis.translate('ASSTS.LBL_ASSTS_NOVIGENTT_94041'),
field : 'inactive',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXPDW_447982',
name :'inactive',
withoutLabel : true,
attribute : 'inactive',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXPRK_338982",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALBPNF_51557'),
field : 'total',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXPRK_338982',
name :'total',
withoutLabel : true,
attribute : 'total',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
]);
this.T_ASSTSAXELGOQQ_915 = this.formBuilder.group({
Payment: this.formBuilder.group({
amountPrepayment:[{value: null, disabled: !this.VA_3114DYOIQOVZVVS_763982.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3114DYOIQOVZVVS_763982.validationFunctions!)],
amountPayment:[{value: null, disabled: !this.VA_9325HMVCFBYGKEC_795982.visible},CobisDesignerUtil.getValidationFunctions(this.VA_9325HMVCFBYGKEC_795982.validationFunctions!)],
currencyType:[{value: null, disabled: !this.VA_2369DGOLAKHUZKA_978982.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2369DGOLAKHUZKA_978982.validationFunctions!)],
amount:[null],
referencedAccount:[null],
amountPayAux:[null],
typeQuotationTr:[null],
retention:[null],
customerID:[null],
typeQuotationOp:[null],
reductionType:[null],
user:[null],
paymentType:[null],
category:[null],
date:[null],
collectionType:[null],
entireFee:[null],
quotationValue:[null],
payQuotationValue:[null],
reference:[null],
numCheck:[null],
continuePayment:[null],
finePrepayment:[null],
operationTypeId:[null],
operationCurrencyType:[null],
value:[null],
datePay:[null],
querySequential:[null],
prePaymentAux:[null],
advance:[null],
quotation:[null],
sequential:[null],
customer:[null],
negotiated:[null],
bank:[null],
amountPay:[null],
onLine:[null],
unappliedPayments:[null],
sequentialPay:[null],
status:[null],
processDate:[null],
regional:[null],
billTo:[null],
unappliedAmount:[null],
note:[null],
prepayRate:[null],
}
),
QuoteDetails: this.formBuilder.group({
description:null,
expired:null,
active:null,
inactive:null,
total:null,
}
),
});
}
}