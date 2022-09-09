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
public T_ASSTSQUQPUYMT_694!:FormGroup;
public VC_LOANTRANTC_731694:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANTRANCS_499261 : CobisCollapsibleContainerModel = new CobisCollapsibleContainerModel();
public G_LOANTRATNT_710261_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_LOANTRATNT_710261 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_HK73_UEC23: CobisGridModel = new CobisGridModel();
public G_LOANTRAIIT_578261_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_LOANTRAIIT_578261 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_OB55_ZQG31: CobisGridModel = new CobisGridModel();
public G_LOANTRASNN_270261_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_LOANTRASNN_270261 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_IY91_WMD36: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANTRANTC_731694.id="VC_LOANTRANTC_731694";
this.VC_LOANTRANTC_731694.name="LoanTransactionsForm";
this.VC_LOANTRANTC_731694.colSpan=1;
this.VC_LOANTRANTC_731694.columns=1;
this.VC_LOANTRANTC_731694.enabled=ConstantsApi.mode.All;
this.G_LOANTRANCS_499261.id="G_LOANTRANCS_499261";
this.G_LOANTRANCS_499261.name="LoanTransactionsForm";
this.G_LOANTRANCS_499261.enabled=ConstantsApi.mode.All;
this.G_LOANTRANCS_499261.controlType = ControlType.COLLAPSIBLE;
this.G_LOANTRANCS_499261.colSpan=1;
this.G_LOANTRANCS_499261.childrenGroups = ["G_LOANTRATNT_710261_item","G_LOANTRAIIT_578261_item","G_LOANTRASNN_270261_item"];
this.G_LOANTRATNT_710261_item.id="G_LOANTRATNT_710261_item";
this.G_LOANTRATNT_710261_item.label=cobis.translate("ASSTS.LBL_ASSTS_TRANSACAT_32533");
this.G_LOANTRATNT_710261_item.childrenGroups = ['G_LOANTRATNT_710261'];
this.G_LOANTRATNT_710261_item.colSpan=1;
this.G_LOANTRATNT_710261_item.enabled=ConstantsApi.mode.All;
this.G_LOANTRATNT_710261_item.visible=ConstantsApi.mode.All;
this.G_LOANTRATNT_710261.id="G_LOANTRATNT_710261";
this.G_LOANTRATNT_710261.name="Group2420";
this.G_LOANTRATNT_710261.columns=1;
this.G_LOANTRATNT_710261.labelOrientation="Top";
this.G_LOANTRATNT_710261.colSpan=1;
this.G_LOANTRATNT_710261.enabled=ConstantsApi.mode.All;
this.G_LOANTRATNT_710261.visible=ConstantsApi.mode.All;
this.G_LOANTRATNT_710261.attList = ["transaction","secuential","operation","dateTransaction","dateReverd","state","user","observation"];
this.G_LOANTRAIIT_578261_item.id="G_LOANTRAIIT_578261_item";
this.G_LOANTRAIIT_578261_item.label=cobis.translate("ASSTS.LBL_ASSTS_TRANSACIR_39436");
this.G_LOANTRAIIT_578261_item.childrenGroups = ['G_LOANTRAIIT_578261'];
this.G_LOANTRAIIT_578261_item.colSpan=1;
this.G_LOANTRAIIT_578261_item.enabled=ConstantsApi.mode.All;
this.G_LOANTRAIIT_578261_item.visible=ConstantsApi.mode.All;
this.G_LOANTRAIIT_578261.id="G_LOANTRAIIT_578261";
this.G_LOANTRAIIT_578261.name="Group2836";
this.G_LOANTRAIIT_578261.columns=1;
this.G_LOANTRAIIT_578261.labelOrientation="Top";
this.G_LOANTRAIIT_578261.colSpan=1;
this.G_LOANTRAIIT_578261.enabled=ConstantsApi.mode.All;
this.G_LOANTRAIIT_578261.visible=ConstantsApi.mode.All;
this.G_LOANTRAIIT_578261.attList = ["transaction","secuential","operation","dateTransaction","dateReverd","stare","user","observation"];
this.G_LOANTRASNN_270261_item.id="G_LOANTRASNN_270261_item";
this.G_LOANTRASNN_270261_item.label=cobis.translate("ASSTS.LBL_ASSTS_CAUSACISE_60906");
this.G_LOANTRASNN_270261_item.childrenGroups = ['G_LOANTRASNN_270261'];
this.G_LOANTRASNN_270261_item.colSpan=1;
this.G_LOANTRASNN_270261_item.enabled=ConstantsApi.mode.All;
this.G_LOANTRASNN_270261_item.visible=ConstantsApi.mode.All;
this.G_LOANTRASNN_270261.id="G_LOANTRASNN_270261";
this.G_LOANTRASNN_270261.name="Group2691";
this.G_LOANTRASNN_270261.columns=1;
this.G_LOANTRASNN_270261.labelOrientation="Top";
this.G_LOANTRASNN_270261.colSpan=1;
this.G_LOANTRASNN_270261.enabled=ConstantsApi.mode.All;
this.G_LOANTRASNN_270261.visible=ConstantsApi.mode.All;
this.G_LOANTRASNN_270261.attList = ["dateTransation","dateReverd","dividend","concept","coin","amount","amountMn","state","price"];
this.QV_HK73_UEC23.pageSize=10;
this.QV_HK73_UEC23.id='QV_HK73_UEC23';
this.QV_HK73_UEC23.name='QV_HK73_UEC23';
this.QV_HK73_UEC23.pageable=true;
this.QV_HK73_UEC23.sortable=false;
this.QV_HK73_UEC23.resizable=true;
this.QV_HK73_UEC23.scrollable=true
this.QV_HK73_UEC23.confirmRowDeletion=false;
this.QV_HK73_UEC23.exportToExcel=false;
this.QV_HK73_UEC23.exportToPdf=false;
this.QV_HK73_UEC23.height=0;
this.QV_HK73_UEC23.filterableColumns=false;
this.QV_HK73_UEC23.entityName='ActiveTransaction';
this.QV_HK73_UEC23.appendRecords=true;
this.QV_HK73_UEC23.rowDetail=false;
this.QV_HK73_UEC23.columnMenu = true;
this.QV_HK73_UEC23.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_HK73_UEC23.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_HK73_UEC23.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXOQC_136261",
label : cobis.translate('ASSTS.LBL_ASSTS_TRANSACOI_13307'),
field : 'transaction',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOQC_136261',
name :'transaction',
withoutLabel : true,
attribute : 'transaction',
entity : 'ActiveTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCIZ_585261",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCLL_64974'),
field : 'secuential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCIZ_585261',
name :'secuential',
withoutLabel : true,
attribute : 'secuential',
entity : 'ActiveTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZGU_968261",
label : cobis.translate('ASSTS.LBL_ASSTS_PRESTAMOO_72526'),
field : 'operation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZGU_968261',
name :'operation',
withoutLabel : true,
attribute : 'operation',
entity : 'ActiveTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHVV_957261",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHATRNN_17177'),
field : 'dateTransaction',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHVV_957261',
name :'dateTransaction',
withoutLabel : true,
attribute : 'dateTransaction',
entity : 'ActiveTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMIY_681261",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAREFF_66746'),
field : 'dateReverd',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMIY_681261',
name :'dateReverd',
withoutLabel : true,
attribute : 'dateReverd',
entity : 'ActiveTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRSE_162261",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOMCM_48125'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRSE_162261',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'ActiveTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTEB_188261",
label : cobis.translate('ASSTS.LBL_ASSTS_USUARIORT_71336'),
field : 'user',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTEB_188261',
name :'user',
withoutLabel : true,
attribute : 'user',
entity : 'ActiveTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBLZ_114261",
label : cobis.translate('ASSTS.LBL_ASSTS_OBSERVACC_16512'),
field : 'observation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBLZ_114261',
name :'observation',
withoutLabel : true,
attribute : 'observation',
entity : 'ActiveTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.QV_OB55_ZQG31.pageSize=10;
this.QV_OB55_ZQG31.id='QV_OB55_ZQG31';
this.QV_OB55_ZQG31.name='QV_OB55_ZQG31';
this.QV_OB55_ZQG31.pageable=true;
this.QV_OB55_ZQG31.sortable=false;
this.QV_OB55_ZQG31.resizable=true;
this.QV_OB55_ZQG31.scrollable=true
this.QV_OB55_ZQG31.confirmRowDeletion=false;
this.QV_OB55_ZQG31.exportToExcel=false;
this.QV_OB55_ZQG31.exportToPdf=false;
this.QV_OB55_ZQG31.height=0;
this.QV_OB55_ZQG31.filterableColumns=false;
this.QV_OB55_ZQG31.entityName='ReversedTransaction';
this.QV_OB55_ZQG31.appendRecords=true;
this.QV_OB55_ZQG31.rowDetail=false;
this.QV_OB55_ZQG31.columnMenu = true;
this.QV_OB55_ZQG31.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_OB55_ZQG31.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_OB55_ZQG31.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXAIY_111261",
label : cobis.translate('ASSTS.LBL_ASSTS_TRANSACOI_13307'),
field : 'transaction',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAIY_111261',
name :'transaction',
withoutLabel : true,
attribute : 'transaction',
entity : 'ReversedTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLVK_757261",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCLL_64974'),
field : 'secuential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLVK_757261',
name :'secuential',
withoutLabel : true,
attribute : 'secuential',
entity : 'ReversedTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUSP_618261",
label : cobis.translate('ASSTS.LBL_ASSTS_PRESTAMOO_72526'),
field : 'operation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUSP_618261',
name :'operation',
withoutLabel : true,
attribute : 'operation',
entity : 'ReversedTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSTF_666261",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHATRNN_17177'),
field : 'dateTransaction',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSTF_666261',
name :'dateTransaction',
withoutLabel : true,
attribute : 'dateTransaction',
entity : 'ReversedTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDDL_288261",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAREFF_66746'),
field : 'dateReverd',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDDL_288261',
name :'dateReverd',
withoutLabel : true,
attribute : 'dateReverd',
entity : 'ReversedTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOWN_417261",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOMCM_48125'),
field : 'stare',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOWN_417261',
name :'stare',
withoutLabel : true,
attribute : 'stare',
entity : 'ReversedTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSLU_243261",
label : cobis.translate('ASSTS.LBL_ASSTS_USUARIORT_71336'),
field : 'user',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSLU_243261',
name :'user',
withoutLabel : true,
attribute : 'user',
entity : 'ReversedTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSCZ_988261",
field : 'observation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSCZ_988261',
name :'observation',
withoutLabel : true,
attribute : 'observation',
entity : 'ReversedTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.QV_IY91_WMD36.pageSize=10;
this.QV_IY91_WMD36.id='QV_IY91_WMD36';
this.QV_IY91_WMD36.name='QV_IY91_WMD36';
this.QV_IY91_WMD36.pageable=true;
this.QV_IY91_WMD36.sortable=false;
this.QV_IY91_WMD36.resizable=true;
this.QV_IY91_WMD36.scrollable=true
this.QV_IY91_WMD36.confirmRowDeletion=false;
this.QV_IY91_WMD36.exportToExcel=false;
this.QV_IY91_WMD36.exportToPdf=false;
this.QV_IY91_WMD36.height=0;
this.QV_IY91_WMD36.filterableColumns=false;
this.QV_IY91_WMD36.entityName='Causation';
this.QV_IY91_WMD36.appendRecords=false;
this.QV_IY91_WMD36.rowDetail=false;
this.QV_IY91_WMD36.columnMenu = true;
this.QV_IY91_WMD36.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_IY91_WMD36.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_IY91_WMD36.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXQMP_236261",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHATRNN_17177'),
field : 'dateTransation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQMP_236261',
name :'dateTransation',
withoutLabel : true,
attribute : 'dateTransation',
entity : 'Causation',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZNB_496261",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAREFF_66746'),
field : 'dateReverd',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZNB_496261',
name :'dateReverd',
withoutLabel : true,
attribute : 'dateReverd',
entity : 'Causation',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNBV_612261",
label : cobis.translate('ASSTS.LBL_ASSTS_DIVIDENDD_33129'),
field : 'dividend',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNBV_612261',
name :'dividend',
withoutLabel : true,
attribute : 'dividend',
entity : 'Causation',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVNW_997261",
label : cobis.translate('ASSTS.LBL_ASSTS_CONCEPTOO_69025'),
field : 'concept',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVNW_997261',
name :'concept',
withoutLabel : true,
attribute : 'concept',
entity : 'Causation',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSQW_891261",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDAGWI_30015'),
field : 'coin',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSQW_891261',
name :'coin',
withoutLabel : true,
attribute : 'coin',
entity : 'Causation',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOCJ_749261",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOTMIL_28007'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOCJ_749261',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'Causation',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGPN_538261",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOMNDV_14693'),
field : 'amountMn',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGPN_538261',
name :'amountMn',
withoutLabel : true,
attribute : 'amountMn',
entity : 'Causation',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFME_318261",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOMCM_48125'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFME_318261',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'Causation',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIFY_228261",
label : cobis.translate('ASSTS.LBL_ASSTS_COTIZACON_57682'),
field : 'price',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIFY_228261',
name :'price',
withoutLabel : true,
attribute : 'price',
entity : 'Causation',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSQUQPUYMT_694 = this.formBuilder.group({
ActiveTransaction: this.formBuilder.group({
transaction:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HK73_UEC23.columns,'VA_TEXTINPUTBOXOQC_136261')],
secuential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HK73_UEC23.columns,'VA_TEXTINPUTBOXCIZ_585261')],
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HK73_UEC23.columns,'VA_TEXTINPUTBOXZGU_968261')],
dateTransaction:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HK73_UEC23.columns,'VA_TEXTINPUTBOXHVV_957261')],
dateReverd:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HK73_UEC23.columns,'VA_TEXTINPUTBOXMIY_681261')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HK73_UEC23.columns,'VA_TEXTINPUTBOXRSE_162261')],
user:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HK73_UEC23.columns,'VA_TEXTINPUTBOXTEB_188261')],
observation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HK73_UEC23.columns,'VA_TEXTINPUTBOXBLZ_114261')],
}
),
ReversedTransaction: this.formBuilder.group({
transaction:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OB55_ZQG31.columns,'VA_TEXTINPUTBOXAIY_111261')],
secuential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OB55_ZQG31.columns,'VA_TEXTINPUTBOXLVK_757261')],
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OB55_ZQG31.columns,'VA_TEXTINPUTBOXUSP_618261')],
dateTransaction:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OB55_ZQG31.columns,'VA_TEXTINPUTBOXSTF_666261')],
dateReverd:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OB55_ZQG31.columns,'VA_TEXTINPUTBOXDDL_288261')],
stare:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OB55_ZQG31.columns,'VA_TEXTINPUTBOXOWN_417261')],
user:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OB55_ZQG31.columns,'VA_TEXTINPUTBOXSLU_243261')],
observation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OB55_ZQG31.columns,'VA_TEXTINPUTBOXSCZ_988261')],
}
),
Causation: this.formBuilder.group({
dateTransation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_IY91_WMD36.columns,'VA_TEXTINPUTBOXQMP_236261')],
dateReverd:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_IY91_WMD36.columns,'VA_TEXTINPUTBOXZNB_496261')],
dividend:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_IY91_WMD36.columns,'VA_TEXTINPUTBOXNBV_612261')],
concept:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_IY91_WMD36.columns,'VA_TEXTINPUTBOXVNW_997261')],
coin:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_IY91_WMD36.columns,'VA_TEXTINPUTBOXSQW_891261')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_IY91_WMD36.columns,'VA_TEXTINPUTBOXOCJ_749261')],
amountMn:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_IY91_WMD36.columns,'VA_TEXTINPUTBOXGPN_538261')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_IY91_WMD36.columns,'VA_TEXTINPUTBOXFME_318261')],
price:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_IY91_WMD36.columns,'VA_TEXTINPUTBOXIFY_228261')],
}
),
});
}
}