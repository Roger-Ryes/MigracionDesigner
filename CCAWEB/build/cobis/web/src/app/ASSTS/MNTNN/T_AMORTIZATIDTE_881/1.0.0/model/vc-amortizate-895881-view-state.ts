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
public T_AMORTIZATIDTE_881!:FormGroup;
public VC_AMORTIZATE_895881:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_AMORTIZLIA_656813 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_8477_65404: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_AMORTIZATE_895881.id="VC_AMORTIZATE_895881";
this.VC_AMORTIZATE_895881.name="AmortizationQuoteDetailForm";
this.VC_AMORTIZATE_895881.colSpan=1;
this.VC_AMORTIZATE_895881.columns=1;
this.VC_AMORTIZATE_895881.enabled=ConstantsApi.mode.All;
this.G_AMORTIZLIA_656813.id="G_AMORTIZLIA_656813";
this.G_AMORTIZLIA_656813.name="Group2966";
this.G_AMORTIZLIA_656813.columns=3;
this.G_AMORTIZLIA_656813.labelOrientation="Top";
this.G_AMORTIZLIA_656813.colSpan=1;
this.G_AMORTIZLIA_656813.enabled=ConstantsApi.mode.All;
this.G_AMORTIZLIA_656813.visible=ConstantsApi.mode.All;
this.G_AMORTIZLIA_656813.attList = ["item","statusItem","period","quote","grace","paid","accumulated","sequential"];
this.QV_8477_65404.pageSize=10;
this.QV_8477_65404.id='QV_8477_65404';
this.QV_8477_65404.name='QV_8477_65404';
this.QV_8477_65404.pageable=true;
this.QV_8477_65404.sortable=false;
this.QV_8477_65404.resizable=true;
this.QV_8477_65404.scrollable=true
this.QV_8477_65404.confirmRowDeletion=false;
this.QV_8477_65404.exportToExcel=false;
this.QV_8477_65404.exportToPdf=false;
this.QV_8477_65404.height=0;
this.QV_8477_65404.filterableColumns=false;
this.QV_8477_65404.entityName='AmortizationQuoteDetail';
this.QV_8477_65404.appendRecords=false;
this.QV_8477_65404.rowDetail=false;
this.QV_8477_65404.columnMenu = true;
this.QV_8477_65404.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_8477_65404.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_8477_65404.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXKBJ_160813",
label : cobis.translate('ASSTS.LBL_ASSTS_RUBROFKGQ_42963'),
field : 'item',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKBJ_160813',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'AmortizationQuoteDetail',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOJL_993813",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'statusItem',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOJL_993813',
name :'statusItem',
withoutLabel : true,
attribute : 'statusItem',
entity : 'AmortizationQuoteDetail',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAZT_394813",
label : cobis.translate('ASSTS.LBL_ASSTS_PERIODOSP_24297'),
field : 'period',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAZT_394813',
name :'period',
withoutLabel : true,
attribute : 'period',
entity : 'AmortizationQuoteDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVZZ_676813",
label : cobis.translate('ASSTS.LBL_ASSTS_CUOTAJJEW_83973'),
field : 'quote',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVZZ_676813',
name :'quote',
withoutLabel : true,
attribute : 'quote',
entity : 'AmortizationQuoteDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOKT_824813",
label : cobis.translate('ASSTS.LBL_ASSTS_GRACIAVXF_14263'),
field : 'grace',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOKT_824813',
name :'grace',
withoutLabel : true,
attribute : 'grace',
entity : 'AmortizationQuoteDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSWA_743813",
label : cobis.translate('ASSTS.LBL_ASSTS_PAGADOQEI_51658'),
field : 'paid',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSWA_743813',
name :'paid',
withoutLabel : true,
attribute : 'paid',
entity : 'AmortizationQuoteDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEEZ_207813",
label : cobis.translate('ASSTS.LBL_ASSTS_ACUMULAOO_17499'),
field : 'accumulated',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEEZ_207813',
name :'accumulated',
withoutLabel : true,
attribute : 'accumulated',
entity : 'AmortizationQuoteDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXECP_560813",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAI_43909'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXECP_560813',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'AmortizationQuoteDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_AMORTIZATIDTE_881 = this.formBuilder.group({
AmortizationQuoteDetail: this.formBuilder.group({
item:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8477_65404.columns,'VA_TEXTINPUTBOXKBJ_160813')],
statusItem:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8477_65404.columns,'VA_TEXTINPUTBOXOJL_993813')],
period:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8477_65404.columns,'VA_TEXTINPUTBOXAZT_394813')],
quote:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8477_65404.columns,'VA_TEXTINPUTBOXVZZ_676813')],
grace:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8477_65404.columns,'VA_TEXTINPUTBOXOKT_824813')],
paid:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8477_65404.columns,'VA_TEXTINPUTBOXSWA_743813')],
accumulated:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8477_65404.columns,'VA_TEXTINPUTBOXEEZ_207813')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8477_65404.columns,'VA_TEXTINPUTBOXECP_560813')],
titleForm:[null],
}
),
});
}
}