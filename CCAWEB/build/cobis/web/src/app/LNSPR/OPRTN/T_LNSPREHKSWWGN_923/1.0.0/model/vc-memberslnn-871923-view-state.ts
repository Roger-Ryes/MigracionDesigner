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
public T_LNSPREHKSWWGN_923!:FormGroup;
public VC_MEMBERSLNN_871923:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_MEMBERSLEE_603602 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_HR68_RLL81: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_MEMBERSLNN_871923.id="VC_MEMBERSLNN_871923";
this.VC_MEMBERSLNN_871923.name="MembersLineForm";
this.VC_MEMBERSLNN_871923.colSpan=1;
this.VC_MEMBERSLNN_871923.columns=1;
this.VC_MEMBERSLNN_871923.enabled=ConstantsApi.mode.All;
this.G_MEMBERSLEE_603602.id="G_MEMBERSLEE_603602";
this.G_MEMBERSLEE_603602.name="Group1879";
this.G_MEMBERSLEE_603602.columns=1;
this.G_MEMBERSLEE_603602.labelOrientation="Top";
this.G_MEMBERSLEE_603602.colSpan=1;
this.G_MEMBERSLEE_603602.enabled=ConstantsApi.mode.All;
this.G_MEMBERSLEE_603602.visible=ConstantsApi.mode.All;
this.G_MEMBERSLEE_603602.attList = ["nameMember","desMoney","approved","used","available","quote","codMember","codMoney"];
this.QV_HR68_RLL81.pageSize=10;
this.QV_HR68_RLL81.id='QV_HR68_RLL81';
this.QV_HR68_RLL81.name='QV_HR68_RLL81';
this.QV_HR68_RLL81.pageable=true;
this.QV_HR68_RLL81.sortable=false;
this.QV_HR68_RLL81.resizable=true;
this.QV_HR68_RLL81.scrollable=true
this.QV_HR68_RLL81.confirmRowDeletion=false;
this.QV_HR68_RLL81.exportToExcel=false;
this.QV_HR68_RLL81.exportToPdf=false;
this.QV_HR68_RLL81.height=0;
this.QV_HR68_RLL81.filterableColumns=false;
this.QV_HR68_RLL81.entityName='SummaryMembers';
this.QV_HR68_RLL81.appendRecords=true;
this.QV_HR68_RLL81.rowDetail=false;
this.QV_HR68_RLL81.columnMenu = true;
this.QV_HR68_RLL81.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_HR68_RLL81.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_HR68_RLL81.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXRWN_542602",
label : cobis.translate('LNSPR.LBL_LNSPR_MIEMBROWH_34553'),
field : 'nameMember',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRWN_542602',
name :'nameMember',
withoutLabel : true,
attribute : 'nameMember',
entity : 'SummaryMembers',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUWI_692602",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'desMoney',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUWI_692602',
name :'desMoney',
withoutLabel : true,
attribute : 'desMoney',
entity : 'SummaryMembers',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBLS_253602",
label : cobis.translate('LNSPR.LBL_LNSPR_APROBADOO_26217'),
field : 'approved',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBLS_253602',
name :'approved',
withoutLabel : true,
attribute : 'approved',
entity : 'SummaryMembers',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIKN_498602",
label : cobis.translate('LNSPR.LBL_LOANS_UTILIZAOO_53309'),
field : 'used',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIKN_498602',
name :'used',
withoutLabel : true,
attribute : 'used',
entity : 'SummaryMembers',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWUO_764602",
label : cobis.translate('LNSPR.LBL_LNSPR_DISPONILE_55740'),
field : 'available',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWUO_764602',
name :'available',
withoutLabel : true,
attribute : 'available',
entity : 'SummaryMembers',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWXT_462602",
label : cobis.translate('LNSPR.LBL_LNSPR_COTIZMVEW_51468'),
field : 'quote',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWXT_462602',
name :'quote',
withoutLabel : true,
attribute : 'quote',
entity : 'SummaryMembers',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPREHKSWWGN_923 = this.formBuilder.group({
SummaryMembers: this.formBuilder.group({
nameMember:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HR68_RLL81.columns,'VA_TEXTINPUTBOXRWN_542602')],
desMoney:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HR68_RLL81.columns,'VA_TEXTINPUTBOXUWI_692602')],
approved:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HR68_RLL81.columns,'VA_TEXTINPUTBOXBLS_253602')],
used:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HR68_RLL81.columns,'VA_TEXTINPUTBOXIKN_498602')],
available:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HR68_RLL81.columns,'VA_TEXTINPUTBOXWUO_764602')],
quote:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HR68_RLL81.columns,'VA_TEXTINPUTBOXWXT_462602')],
codMember:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HR68_RLL81.columns,'VA_TEXTINPUTBOXMXI_812602')],
codMoney:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HR68_RLL81.columns,'VA_TEXTINPUTBOXJUI_443602')],
}
),
});
}
}