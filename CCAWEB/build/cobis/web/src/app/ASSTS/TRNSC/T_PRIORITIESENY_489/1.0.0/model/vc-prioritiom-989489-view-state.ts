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
public T_PRIORITIESENY_489!:FormGroup;
public VC_PRIORITIOM_989489:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PRIORITTMS_845545 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_3510_83627: CobisGridModel = new CobisGridModel();
public CM_TPRIORIT_TTT: CobisButtonModel = new CobisButtonModel();
public CM_TPRIORIT_I8N: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PRIORITIOM_989489.id="VC_PRIORITIOM_989489";
this.VC_PRIORITIOM_989489.name="PrioritiesPaymentsModal";
this.VC_PRIORITIOM_989489.colSpan=1;
this.VC_PRIORITIOM_989489.columns=1;
this.VC_PRIORITIOM_989489.enabled=ConstantsApi.mode.All;
this.G_PRIORITTMS_845545.id="G_PRIORITTMS_845545";
this.G_PRIORITTMS_845545.name="Group1175";
this.G_PRIORITTMS_845545.columns=1;
this.G_PRIORITTMS_845545.labelOrientation="Top";
this.G_PRIORITTMS_845545.colSpan=1;
this.G_PRIORITTMS_845545.enabled=ConstantsApi.mode.All;
this.G_PRIORITTMS_845545.visible=ConstantsApi.mode.All;
this.G_PRIORITTMS_845545.attList = ["item","priority"];
this.CM_TPRIORIT_TTT.id = "CM_TPRIORIT_TTT";
this.CM_TPRIORIT_TTT.name = "Command1";
this.CM_TPRIORIT_TTT.causesValidation=false;
this.CM_TPRIORIT_TTT.submitOnEnter=false;
this.CM_TPRIORIT_TTT.setFocus=false;
this.CM_TPRIORIT_TTT.close=false;
this.CM_TPRIORIT_TTT.label = cobis.translate("ASSTS.LBL_ASSTS_ACEPTARDV_64984");
this.CM_TPRIORIT_TTT.enabled = ConstantsApi.mode.All;
this.CM_TPRIORIT_TTT.visible= ConstantsApi.mode.All;
this.CM_TPRIORIT_I8N.id = "CM_TPRIORIT_I8N";
this.CM_TPRIORIT_I8N.name = "Command2";
this.CM_TPRIORIT_I8N.causesValidation=false;
this.CM_TPRIORIT_I8N.submitOnEnter=false;
this.CM_TPRIORIT_I8N.setFocus=false;
this.CM_TPRIORIT_I8N.close=true;
this.CM_TPRIORIT_I8N.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TPRIORIT_I8N.enabled = ConstantsApi.mode.All;
this.CM_TPRIORIT_I8N.visible= ConstantsApi.mode.All;
this.QV_3510_83627.pageSize=5;
this.QV_3510_83627.id='QV_3510_83627';
this.QV_3510_83627.name='QV_3510_83627';
this.QV_3510_83627.pageable=true;
this.QV_3510_83627.sortable=false;
this.QV_3510_83627.resizable=true;
this.QV_3510_83627.scrollable=true
this.QV_3510_83627.confirmRowDeletion=false;
this.QV_3510_83627.exportToExcel=false;
this.QV_3510_83627.exportToPdf=false;
this.QV_3510_83627.height=0;
this.QV_3510_83627.filterableColumns=false;
this.QV_3510_83627.entityName='Priorities';
this.QV_3510_83627.appendRecords=false;
this.QV_3510_83627.rowDetail=false;
this.QV_3510_83627.columnMenu = true;
this.QV_3510_83627.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_3510_83627.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_3510_83627.actions=[ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_3510_83627.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXTPG_996545",
label : cobis.translate('ASSTS.LBL_ASSTS_RUBROFKGQ_42963'),
field : 'item',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXTPG_996545',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'Priorities',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXCHD_352545",
label : cobis.translate('ASSTS.LBL_ASSTS_PRIORIDDD_58504'),
field : 'priority',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCHD_352545',
name :'priority',
withoutLabel : true,
attribute : 'priority',
entity : 'Priorities',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_PRIORITIESENY_489 = this.formBuilder.group({
Priorities: this.formBuilder.group({
item:null,
priority:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3510_83627.columns,'VA_TEXTINPUTBOXCHD_352545')],
}
),
});
}
}