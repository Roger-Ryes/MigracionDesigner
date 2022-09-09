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
public T_ASSTSFLSVSFLG_975!:FormGroup;
public VC_DEFERREDEA_345975:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DEFERREEEI_835134 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_ZY19_NNJ12: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_DEFERREDEA_345975.id="VC_DEFERREDEA_345975";
this.VC_DEFERREDEA_345975.name="DeferredItemsDetailForm";
this.VC_DEFERREDEA_345975.colSpan=1;
this.VC_DEFERREDEA_345975.columns=1;
this.VC_DEFERREDEA_345975.enabled=ConstantsApi.mode.All;
this.G_DEFERREEEI_835134.id="G_DEFERREEEI_835134";
this.G_DEFERREEEI_835134.name="Group1254";
this.G_DEFERREEEI_835134.columns=1;
this.G_DEFERREEEI_835134.labelOrientation="Top";
this.G_DEFERREEEI_835134.colSpan=1;
this.G_DEFERREEEI_835134.enabled=ConstantsApi.mode.All;
this.G_DEFERREEEI_835134.visible=ConstantsApi.mode.All;
this.G_DEFERREEEI_835134.attList = ["item","balance","earn","acumulated"];
this.QV_ZY19_NNJ12.pageSize=10;
this.QV_ZY19_NNJ12.id='QV_ZY19_NNJ12';
this.QV_ZY19_NNJ12.name='QV_ZY19_NNJ12';
this.QV_ZY19_NNJ12.pageable=true;
this.QV_ZY19_NNJ12.sortable=false;
this.QV_ZY19_NNJ12.resizable=true;
this.QV_ZY19_NNJ12.scrollable=false
this.QV_ZY19_NNJ12.confirmRowDeletion=false;
this.QV_ZY19_NNJ12.exportToExcel=false;
this.QV_ZY19_NNJ12.exportToPdf=false;
this.QV_ZY19_NNJ12.height=0;
this.QV_ZY19_NNJ12.filterableColumns=false;
this.QV_ZY19_NNJ12.entityName='DeferredItemsDetailList';
this.QV_ZY19_NNJ12.appendRecords=false;
this.QV_ZY19_NNJ12.rowDetail=false;
this.QV_ZY19_NNJ12.columnMenu = true;
this.QV_ZY19_NNJ12.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_ZY19_NNJ12.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_ZY19_NNJ12.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXCNB_210134",
label : cobis.translate('ASSTS.LBL_ASSTS_RUBROIVKT_62353'),
field : 'item',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXCNB_210134',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'DeferredItemsDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYQS_545134",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDODIFF_97213'),
field : 'balance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXYQS_545134',
name :'balance',
withoutLabel : true,
attribute : 'balance',
entity : 'DeferredItemsDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLRO_601134",
label : cobis.translate('ASSTS.LBL_ASSTS_DEVENGAIK_41942'),
field : 'earn',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXLRO_601134',
name :'earn',
withoutLabel : true,
attribute : 'earn',
entity : 'DeferredItemsDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMQJ_914134",
label : cobis.translate('ASSTS.LBL_ASSTS_ACUMULAOO_17499'),
field : 'acumulated',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXMQJ_914134',
name :'acumulated',
withoutLabel : true,
attribute : 'acumulated',
entity : 'DeferredItemsDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSFLSVSFLG_975 = this.formBuilder.group({
DeferredItemsDetailList: this.formBuilder.group({
item:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZY19_NNJ12.columns,'VA_TEXTINPUTBOXCNB_210134')],
balance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZY19_NNJ12.columns,'VA_TEXTINPUTBOXYQS_545134')],
earn:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZY19_NNJ12.columns,'VA_TEXTINPUTBOXLRO_601134')],
acumulated:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZY19_NNJ12.columns,'VA_TEXTINPUTBOXMQJ_914134')],
}
),
});
}
}