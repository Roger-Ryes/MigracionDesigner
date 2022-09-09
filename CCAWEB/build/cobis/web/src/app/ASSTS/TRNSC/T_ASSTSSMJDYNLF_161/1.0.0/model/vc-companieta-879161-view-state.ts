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
public T_ASSTSSMJDYNLF_161!:FormGroup;
public VC_COMPANIETA_879161:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANIEBT_898908 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANICBT_166908 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_OM63_SRI96: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_COMPANIETA_879161.id="VC_COMPANIETA_879161";
this.VC_COMPANIETA_879161.name="CompaniesBatchForm";
this.VC_COMPANIETA_879161.colSpan=1;
this.VC_COMPANIETA_879161.columns=1;
this.VC_COMPANIETA_879161.enabled=ConstantsApi.mode.All;
this.G_COMPANIEBT_898908.id="G_COMPANIEBT_898908";
this.G_COMPANIEBT_898908.name="GroupLayout1814";
this.G_COMPANIEBT_898908.columns=1;
this.G_COMPANIEBT_898908.childrenGroups = ["G_COMPANICBT_166908"];
this.G_COMPANIEBT_898908.colSpan=1;
this.G_COMPANIEBT_898908.enabled=ConstantsApi.mode.All;
this.G_COMPANIEBT_898908.visible=ConstantsApi.mode.All;
this.G_COMPANICBT_166908.id="G_COMPANICBT_166908";
this.G_COMPANICBT_166908.name="Group1719";
this.G_COMPANICBT_166908.columns=1;
this.G_COMPANICBT_166908.labelOrientation="Top";
this.G_COMPANICBT_166908.colSpan=1;
this.G_COMPANICBT_166908.enabled=ConstantsApi.mode.All;
this.G_COMPANICBT_166908.visible=ConstantsApi.mode.All;
this.G_COMPANICBT_166908.attList = ["sequential","company","companyName","statusName","description","statusId","fileName","dateCreate","dateMove","executeOnline"];
this.QV_OM63_SRI96.pageSize=10;
this.QV_OM63_SRI96.id='QV_OM63_SRI96';
this.QV_OM63_SRI96.name='QV_OM63_SRI96';
this.QV_OM63_SRI96.pageable=true;
this.QV_OM63_SRI96.sortable=false;
this.QV_OM63_SRI96.resizable=false;
this.QV_OM63_SRI96.scrollable=true
this.QV_OM63_SRI96.confirmRowDeletion=false;
this.QV_OM63_SRI96.exportToExcel=false;
this.QV_OM63_SRI96.exportToPdf=false;
this.QV_OM63_SRI96.height=0;
this.QV_OM63_SRI96.filterableColumns=false;
this.QV_OM63_SRI96.entityName='CompaniesBatchList';
this.QV_OM63_SRI96.appendRecords=false;
this.QV_OM63_SRI96.rowDetail=false;
this.QV_OM63_SRI96.columnMenu = true;
this.QV_OM63_SRI96.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_OM63_SRI96.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_OM63_SRI96.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXZRB_273908",
label : cobis.translate('ASSTS.LBL_ASSTS_NOLOTEWVB_20010'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZRB_273908',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'CompaniesBatchList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYYL_108908",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOLOT_42162'),
field : 'statusName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYYL_108908',
name :'statusName',
withoutLabel : true,
attribute : 'statusName',
entity : 'CompaniesBatchList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDBLAQQL_205908",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHACRIA_50331'),
field : 'dateCreate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDBLAQQL_205908',
name :'dateCreate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'dateCreate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'CompaniesBatchList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_DATEFIELDFEDKJJ_584908",
label : cobis.translate('ASSTS.LBL_ASSTS_ULTMOVINI_75387'),
field : 'dateMove',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDFEDKJJ_584908',
name :'dateMove',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'dateMove',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'CompaniesBatchList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
]);
this.T_ASSTSSMJDYNLF_161 = this.formBuilder.group({
CompaniesBatchList: this.formBuilder.group({
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_TEXTINPUTBOXZRB_273908')],
company:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_TEXTINPUTBOXWUW_326908')],
companyName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_TEXTINPUTBOXDSC_821908')],
statusName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_TEXTINPUTBOXYYL_108908')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_TEXTINPUTBOXIXW_192908')],
statusId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_TEXTINPUTBOXKOQ_499908')],
fileName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_TEXTINPUTBOXDSX_529908')],
dateCreate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_DATEFIELDBLAQQL_205908')],
dateMove:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_DATEFIELDFEDKJJ_584908')],
executeOnline:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OM63_SRI96.columns,'VA_COMBOBOXSATJCLI_822908')],
filePath:[null],
fileError:[null],
fileUp:[null],
fileMsg:[null],
}
),
});
}
}