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
public T_ASSTSUHBKGFUE_991!:FormGroup;
public VC_LOANSYNDIE_790991:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSYNLTD_961304 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_ZV62_ZBH24: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSYNDIE_790991.id="VC_LOANSYNDIE_790991";
this.VC_LOANSYNDIE_790991.name="LoanSyndicatedListForm";
this.VC_LOANSYNDIE_790991.colSpan=1;
this.VC_LOANSYNDIE_790991.columns=1;
this.VC_LOANSYNDIE_790991.enabled=ConstantsApi.mode.All;
this.G_LOANSYNLTD_961304.id="G_LOANSYNLTD_961304";
this.G_LOANSYNLTD_961304.name="Group1175";
this.G_LOANSYNLTD_961304.columns=1;
this.G_LOANSYNLTD_961304.labelOrientation="Top";
this.G_LOANSYNLTD_961304.colSpan=1;
this.G_LOANSYNLTD_961304.enabled=ConstantsApi.mode.All;
this.G_LOANSYNLTD_961304.visible=ConstantsApi.mode.All;
this.G_LOANSYNLTD_961304.attList = ["codParticipantsL","nameParticipantsL","percentageParticipantsL","roleParticipantsL","mailParticipantsL","amountParticipantsL"];
this.QV_ZV62_ZBH24.id='QV_ZV62_ZBH24';
this.QV_ZV62_ZBH24.name='QV_ZV62_ZBH24';
this.QV_ZV62_ZBH24.pageable=true;
this.QV_ZV62_ZBH24.sortable=false;
this.QV_ZV62_ZBH24.resizable=true;
this.QV_ZV62_ZBH24.scrollable=true
this.QV_ZV62_ZBH24.confirmRowDeletion=false;
this.QV_ZV62_ZBH24.exportToExcel=false;
this.QV_ZV62_ZBH24.exportToPdf=false;
this.QV_ZV62_ZBH24.height=0;
this.QV_ZV62_ZBH24.filterableColumns=false;
this.QV_ZV62_ZBH24.entityName='LoanSyndicatedList';
this.QV_ZV62_ZBH24.appendRecords=false;
this.QV_ZV62_ZBH24.rowDetail=false;
this.QV_ZV62_ZBH24.columnMenu = true;
this.QV_ZV62_ZBH24.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_ZV62_ZBH24.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_ZV62_ZBH24.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXOIQ_121304",
label : cobis.translate('ASSTS.LBL_ASSTS_CODPARTTT_65299'),
field : 'codParticipantsL',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOIQ_121304',
name :'codParticipantsL',
withoutLabel : true,
attribute : 'codParticipantsL',
entity : 'LoanSyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEEF_290304",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBREULS_81822'),
field : 'nameParticipantsL',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEEF_290304',
name :'nameParticipantsL',
withoutLabel : true,
attribute : 'nameParticipantsL',
entity : 'LoanSyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFFI_375304",
label : cobis.translate('ASSTS.LBL_ASSTS_PARTFOSGD_89580'),
field : 'percentageParticipantsL',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFFI_375304',
name :'percentageParticipantsL',
withoutLabel : true,
attribute : 'percentageParticipantsL',
entity : 'LoanSyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDTK_373304",
label : cobis.translate('ASSTS.LBL_ASSTS_ROLDOBJMA_96413'),
field : 'roleParticipantsL',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDTK_373304',
name :'roleParticipantsL',
withoutLabel : true,
attribute : 'roleParticipantsL',
entity : 'LoanSyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKVY_162304",
label : cobis.translate('ASSTS.LBL_ASSTS_CORREOWGJ_72729'),
field : 'mailParticipantsL',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKVY_162304',
name :'mailParticipantsL',
withoutLabel : true,
attribute : 'mailParticipantsL',
entity : 'LoanSyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWIB_436304",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOPATT_88081'),
field : 'amountParticipantsL',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWIB_436304',
name :'amountParticipantsL',
withoutLabel : true,
attribute : 'amountParticipantsL',
entity : 'LoanSyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSUHBKGFUE_991 = this.formBuilder.group({
LoanSyndicatedList: this.formBuilder.group({
codParticipantsL:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZV62_ZBH24.columns,'VA_TEXTINPUTBOXOIQ_121304')],
nameParticipantsL:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZV62_ZBH24.columns,'VA_TEXTINPUTBOXEEF_290304')],
percentageParticipantsL:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZV62_ZBH24.columns,'VA_TEXTINPUTBOXFFI_375304')],
roleParticipantsL:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZV62_ZBH24.columns,'VA_TEXTINPUTBOXDTK_373304')],
mailParticipantsL:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZV62_ZBH24.columns,'VA_TEXTINPUTBOXKVY_162304')],
amountParticipantsL:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZV62_ZBH24.columns,'VA_TEXTINPUTBOXWIB_436304')],
}
),
});
}
}