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
public T_PAYMENTDETMFP_722!:FormGroup;
public VC_PAYMENTDEE_475722:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTTEE_471485 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_1707_26229: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PAYMENTDEE_475722.id="VC_PAYMENTDEE_475722";
this.VC_PAYMENTDEE_475722.name="PaymentDetForm";
this.VC_PAYMENTDEE_475722.colSpan=1;
this.VC_PAYMENTDEE_475722.columns=1;
this.VC_PAYMENTDEE_475722.enabled=ConstantsApi.mode.All;
this.G_PAYMENTTEE_471485.id="G_PAYMENTTEE_471485";
this.G_PAYMENTTEE_471485.name="Group1990";
this.G_PAYMENTTEE_471485.columns=1;
this.G_PAYMENTTEE_471485.labelOrientation="Top";
this.G_PAYMENTTEE_471485.colSpan=1;
this.G_PAYMENTTEE_471485.enabled=ConstantsApi.mode.All;
this.G_PAYMENTTEE_471485.visible=ConstantsApi.mode.All;
this.G_PAYMENTTEE_471485.attList = ["fee","description","statusDescription","account","moneyDescription","amount","amountMn","sequential"];
this.QV_1707_26229.pageSize=20;
this.QV_1707_26229.id='QV_1707_26229';
this.QV_1707_26229.name='QV_1707_26229';
this.QV_1707_26229.pageable=true;
this.QV_1707_26229.sortable=false;
this.QV_1707_26229.resizable=true;
this.QV_1707_26229.scrollable=true
this.QV_1707_26229.confirmRowDeletion=false;
this.QV_1707_26229.exportToExcel=false;
this.QV_1707_26229.exportToPdf=false;
this.QV_1707_26229.height=0;
this.QV_1707_26229.filterableColumns=false;
this.QV_1707_26229.entityName='PaymentDetail';
this.QV_1707_26229.appendRecords=true;
this.QV_1707_26229.rowDetail=false;
this.QV_1707_26229.columnMenu = true;
this.QV_1707_26229.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_1707_26229.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_1707_26229.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXXNY_867485",
label : cobis.translate('ASSTS.LBL_ASSTS_DIVIDENDD_92569'),
field : 'fee',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXNY_867485',
name :'fee',
withoutLabel : true,
attribute : 'fee',
entity : 'PaymentDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGVF_565485",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGVF_565485',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'PaymentDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKNL_859485",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'statusDescription',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKNL_859485',
name :'statusDescription',
withoutLabel : true,
attribute : 'statusDescription',
entity : 'PaymentDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDMX_646485",
label : cobis.translate('ASSTS.LBL_ASSTS_CUENTADIA_22037'),
field : 'account',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDMX_646485',
name :'account',
withoutLabel : true,
attribute : 'account',
entity : 'PaymentDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQJY_953485",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'moneyDescription',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQJY_953485',
name :'moneyDescription',
withoutLabel : true,
attribute : 'moneyDescription',
entity : 'PaymentDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHZF_700485",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOMOPP_42194'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHZF_700485',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'PaymentDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRNJ_230485",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOMLEE_47379'),
field : 'amountMn',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRNJ_230485',
name :'amountMn',
withoutLabel : true,
attribute : 'amountMn',
entity : 'PaymentDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUOF_222485",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUOF_222485',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'PaymentDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_PAYMENTDETMFP_722 = this.formBuilder.group({
PaymentDetail: this.formBuilder.group({
fee:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1707_26229.columns,'VA_TEXTINPUTBOXXNY_867485')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1707_26229.columns,'VA_TEXTINPUTBOXGVF_565485')],
statusDescription:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1707_26229.columns,'VA_TEXTINPUTBOXKNL_859485')],
account:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1707_26229.columns,'VA_TEXTINPUTBOXDMX_646485')],
moneyDescription:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1707_26229.columns,'VA_TEXTINPUTBOXQJY_953485')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1707_26229.columns,'VA_TEXTINPUTBOXHZF_700485')],
amountMn:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1707_26229.columns,'VA_TEXTINPUTBOXRNJ_230485')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1707_26229.columns,'VA_TEXTINPUTBOXUOF_222485')],
}
),
});
}
}