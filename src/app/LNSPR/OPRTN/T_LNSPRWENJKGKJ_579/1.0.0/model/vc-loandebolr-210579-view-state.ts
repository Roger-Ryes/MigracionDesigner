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
public T_LNSPRWENJKGKJ_579!:FormGroup;
public VC_LOANDEBOLR_210579:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANDEBLLI_586445 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANDEBSTL_457445 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_VI44_NQR57: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANDEBOLR_210579.id="VC_LOANDEBOLR_210579";
this.VC_LOANDEBOLR_210579.name="LoanDeborList";
this.VC_LOANDEBOLR_210579.colSpan=1;
this.VC_LOANDEBOLR_210579.columns=1;
this.VC_LOANDEBOLR_210579.enabled=ConstantsApi.mode.All;
this.G_LOANDEBLLI_586445.id="G_LOANDEBLLI_586445";
this.G_LOANDEBLLI_586445.name="GroupLayout1752";
this.G_LOANDEBLLI_586445.columns=1;
this.G_LOANDEBLLI_586445.childrenGroups = ["G_LOANDEBSTL_457445"];
this.G_LOANDEBLLI_586445.colSpan=1;
this.G_LOANDEBLLI_586445.enabled=ConstantsApi.mode.All;
this.G_LOANDEBLLI_586445.visible=ConstantsApi.mode.All;
this.G_LOANDEBSTL_457445.id="G_LOANDEBSTL_457445";
this.G_LOANDEBSTL_457445.name="Group1911";
this.G_LOANDEBSTL_457445.columns=1;
this.G_LOANDEBSTL_457445.labelOrientation="Top";
this.G_LOANDEBSTL_457445.colSpan=1;
this.G_LOANDEBSTL_457445.enabled=ConstantsApi.mode.All;
this.G_LOANDEBSTL_457445.visible=ConstantsApi.mode.All;
this.G_LOANDEBSTL_457445.attList = ["sequential","client","clientRol","clientId","clientName","centralRisk","sysUser","clientMainId","clientOperation","sysSession","clientMain","operation","clientMainName"];
this.QV_VI44_NQR57.pageSize=5;
this.QV_VI44_NQR57.id='QV_VI44_NQR57';
this.QV_VI44_NQR57.name='QV_VI44_NQR57';
this.QV_VI44_NQR57.pageable=true;
this.QV_VI44_NQR57.sortable=false;
this.QV_VI44_NQR57.resizable=false;
this.QV_VI44_NQR57.scrollable=true
this.QV_VI44_NQR57.confirmRowDeletion=false;
this.QV_VI44_NQR57.exportToExcel=false;
this.QV_VI44_NQR57.exportToPdf=false;
this.QV_VI44_NQR57.height=0;
this.QV_VI44_NQR57.filterableColumns=false;
this.QV_VI44_NQR57.entityName='DebtorList';
this.QV_VI44_NQR57.appendRecords=false;
this.QV_VI44_NQR57.rowDetail=false;
this.QV_VI44_NQR57.columnMenu = true;
this.QV_VI44_NQR57.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_VI44_NQR57.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_VI44_NQR57.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXILW_913445",
label : cobis.translate('LNSPR.LBL_LNSPR_CODCLIETT_20856'),
field : 'client',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 25,
properties :
{
id :'VA_TEXTINPUTBOXILW_913445',
name :'client',
withoutLabel : true,
attribute : 'client',
entity : 'DebtorList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHWA_904445",
label : cobis.translate('LNSPR.LBL_LOANS_ROLNDGMQN_51274'),
field : 'clientRol',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 25,
properties :
{
id :'VA_TEXTINPUTBOXHWA_904445',
name :'clientRol',
withoutLabel : true,
attribute : 'clientRol',
entity : 'DebtorList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKKE_296445",
label : cobis.translate('LNSPR.LBL_LNSPR_CEDULARCU_43901'),
field : 'clientId',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKKE_296445',
name :'clientId',
withoutLabel : true,
attribute : 'clientId',
entity : 'DebtorList',
maxlength: 30,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMAG_163445",
label : cobis.translate('LNSPR.LBL_LNSPR_NOMBRECNI_63306'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMAG_163445',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'DebtorList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRWENJKGKJ_579 = this.formBuilder.group({
DebtorList: this.formBuilder.group({
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXCUD_128445')],
client:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXILW_913445')],
clientRol:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXHWA_904445')],
clientId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXKKE_296445')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXMAG_163445')],
centralRisk:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXFHG_165445')],
sysUser:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXUCB_292445')],
clientMainId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXIAA_403445')],
clientOperation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXIZR_364445')],
sysSession:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXMIH_434445')],
clientMain:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXTQG_927445')],
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXEYS_414445')],
clientMainName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VI44_NQR57.columns,'VA_TEXTINPUTBOXTEO_163445')],
}
),
});
}
}