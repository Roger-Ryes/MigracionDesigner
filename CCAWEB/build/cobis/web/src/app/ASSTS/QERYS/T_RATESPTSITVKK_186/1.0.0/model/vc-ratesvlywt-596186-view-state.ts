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
public T_RATESPTSITVKK_186!:FormGroup;
public VC_RATESVLYWT_596186:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RATESYEVWB_973660 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_7625_68514: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_RATESVLYWT_596186.id="VC_RATESVLYWT_596186";
this.VC_RATESVLYWT_596186.name="QueryRatesForm";
this.VC_RATESVLYWT_596186.colSpan=1;
this.VC_RATESVLYWT_596186.columns=1;
this.VC_RATESVLYWT_596186.enabled=ConstantsApi.mode.All;
this.G_RATESYEVWB_973660.id="G_RATESYEVWB_973660";
this.G_RATESYEVWB_973660.name="Group1417";
this.G_RATESYEVWB_973660.columns=1;
this.G_RATESYEVWB_973660.labelOrientation="Top";
this.G_RATESYEVWB_973660.colSpan=1;
this.G_RATESYEVWB_973660.enabled=ConstantsApi.mode.All;
this.G_RATESYEVWB_973660.visible=ConstantsApi.mode.All;
this.G_RATESYEVWB_973660.attList = ["sequential","updatedOn","quota","item","valueToApply","signToApply","spreadApply","currentRate","anualEffectiveRate","dateReferenceRate","referentialRate","valueReferenceRate"];
this.QV_7625_68514.pageSize=10;
this.QV_7625_68514.id='QV_7625_68514';
this.QV_7625_68514.name='QV_7625_68514';
this.QV_7625_68514.pageable=true;
this.QV_7625_68514.sortable=false;
this.QV_7625_68514.resizable=true;
this.QV_7625_68514.scrollable=true
this.QV_7625_68514.confirmRowDeletion=false;
this.QV_7625_68514.exportToExcel=false;
this.QV_7625_68514.exportToPdf=false;
this.QV_7625_68514.height=0;
this.QV_7625_68514.filterableColumns=false;
this.QV_7625_68514.entityName='LoanRates';
this.QV_7625_68514.appendRecords=true;
this.QV_7625_68514.rowDetail=false;
this.QV_7625_68514.columnMenu = true;
this.QV_7625_68514.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_7625_68514.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_7625_68514.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXVAQ_545660",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXVAQ_545660',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'LoanRates',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKWQ_686660",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAMODD_53824'),
field : 'updatedOn',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXKWQ_686660',
name :'updatedOn',
withoutLabel : true,
attribute : 'updatedOn',
entity : 'LoanRates',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGAR_184660",
label : cobis.translate('ASSTS.LBL_ASSTS_NOCUOTACN_33552'),
field : 'quota',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXGAR_184660',
name :'quota',
withoutLabel : true,
attribute : 'quota',
entity : 'LoanRates',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRSO_292660",
label : cobis.translate('ASSTS.LBL_ASSTS_RUBROFKGQ_42963'),
field : 'item',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRSO_292660',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'LoanRates',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFFC_765660",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORAPLI_55165'),
field : 'valueToApply',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXFFC_765660',
name :'valueToApply',
withoutLabel : true,
attribute : 'valueToApply',
entity : 'LoanRates',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYGA_388660",
label : cobis.translate('ASSTS.LBL_ASSTS_SIGNOAPLL_32241'),
field : 'signToApply',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXYGA_388660',
name :'signToApply',
withoutLabel : true,
attribute : 'signToApply',
entity : 'LoanRates',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLAZ_256660",
label : cobis.translate('ASSTS.LBL_ASSTS_SPREADACC_20484'),
field : 'spreadApply',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXLAZ_256660',
name :'spreadApply',
withoutLabel : true,
attribute : 'spreadApply',
entity : 'LoanRates',
maxlength: 25,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHTZ_428660",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAACTLL_22656'),
field : 'currentRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXHTZ_428660',
name :'currentRate',
withoutLabel : true,
attribute : 'currentRate',
entity : 'LoanRates',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYKA_140660",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAEFECA_65157'),
field : 'anualEffectiveRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYKA_140660',
name :'anualEffectiveRate',
withoutLabel : true,
attribute : 'anualEffectiveRate',
entity : 'LoanRates',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQOD_800660",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHATASC_22366'),
field : 'dateReferenceRate',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQOD_800660',
name :'dateReferenceRate',
withoutLabel : true,
attribute : 'dateReferenceRate',
entity : 'LoanRates',
maxlength: 12,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUWM_511660",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAREFEI_65089'),
field : 'referentialRate',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUWM_511660',
name :'referentialRate',
withoutLabel : true,
attribute : 'referentialRate',
entity : 'LoanRates',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMSZ_323660",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORTALS_42653'),
field : 'valueReferenceRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMSZ_323660',
name :'valueReferenceRate',
withoutLabel : true,
attribute : 'valueReferenceRate',
entity : 'LoanRates',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_RATESPTSITVKK_186 = this.formBuilder.group({
LoanRates: this.formBuilder.group({
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXVAQ_545660')],
updatedOn:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXKWQ_686660')],
quota:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXGAR_184660')],
item:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXRSO_292660')],
valueToApply:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXFFC_765660')],
signToApply:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXYGA_388660')],
spreadApply:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXLAZ_256660')],
currentRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXHTZ_428660')],
anualEffectiveRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXYKA_140660')],
dateReferenceRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXQOD_800660')],
referentialRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXUWM_511660')],
valueReferenceRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7625_68514.columns,'VA_TEXTINPUTBOXMSZ_323660')],
}
),
});
}
}