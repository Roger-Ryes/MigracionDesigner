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
public T_QUOTADETAISOY_745!:FormGroup;
public VC_QUOTADETAA_445745:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_QUOTADEEPP_915925 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_4705_99765: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_QUOTADETAA_445745.id="VC_QUOTADETAA_445745";
this.VC_QUOTADETAA_445745.name="QuotaDetailPaymentsModal";
this.VC_QUOTADETAA_445745.colSpan=1;
this.VC_QUOTADETAA_445745.columns=1;
this.VC_QUOTADETAA_445745.enabled=ConstantsApi.mode.All;
this.G_QUOTADEEPP_915925.id="G_QUOTADEEPP_915925";
this.G_QUOTADEEPP_915925.name="Group1166";
this.G_QUOTADEEPP_915925.columns=1;
this.G_QUOTADEEPP_915925.labelOrientation="Top";
this.G_QUOTADEEPP_915925.colSpan=1;
this.G_QUOTADEEPP_915925.enabled=ConstantsApi.mode.All;
this.G_QUOTADEEPP_915925.visible=ConstantsApi.mode.All;
this.G_QUOTADEEPP_915925.attList = ["numQuote","expired","payment","status"];
this.QV_4705_99765.pageSize=10;
this.QV_4705_99765.id='QV_4705_99765';
this.QV_4705_99765.name='QV_4705_99765';
this.QV_4705_99765.pageable=true;
this.QV_4705_99765.sortable=false;
this.QV_4705_99765.resizable=true;
this.QV_4705_99765.scrollable=true
this.QV_4705_99765.confirmRowDeletion=false;
this.QV_4705_99765.exportToExcel=false;
this.QV_4705_99765.exportToPdf=false;
this.QV_4705_99765.height=0;
this.QV_4705_99765.filterableColumns=false;
this.QV_4705_99765.entityName='QuoteDetailPayment';
this.QV_4705_99765.appendRecords=true;
this.QV_4705_99765.rowDetail=false;
this.QV_4705_99765.columnMenu = true;
this.QV_4705_99765.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_4705_99765.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_4705_99765.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXXRD_924925",
label : cobis.translate('ASSTS.LBL_ASSTS_NUMCUOTAA_86215'),
field : 'numQuote',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXXRD_924925',
name :'numQuote',
withoutLabel : true,
attribute : 'numQuote',
entity : 'QuoteDetailPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_DATEFIELDKHRUFK_991925",
label : cobis.translate('ASSTS.LBL_ASSTS_VENCECLRT_51039'),
field : 'expired',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE],
width : 150,
properties : {
id :'VA_DATEFIELDKHRUFK_991925',
name :'expired',
withoutLabel : true,
attribute : 'expired',
entity : 'QuoteDetailPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.Insert,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXGDJ_450925",
label : cobis.translate('ASSTS.LBL_ASSTS_PAGOWQQEJ_67772'),
field : 'payment',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXGDJ_450925',
name :'payment',
withoutLabel : true,
attribute : 'payment',
entity : 'QuoteDetailPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_CHECKBOXHEMRRGX_743925",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'status',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_CHECKBOXHEMRRGX_743925',
name :'status',
withoutLabel : true,
attribute : 'status',
entity : 'QuoteDetailPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
]);
this.T_QUOTADETAISOY_745 = this.formBuilder.group({
QuoteDetailPayment: this.formBuilder.group({
numQuote:null,
expired:null,
payment:null,
status:null,
}
),
});
}
}