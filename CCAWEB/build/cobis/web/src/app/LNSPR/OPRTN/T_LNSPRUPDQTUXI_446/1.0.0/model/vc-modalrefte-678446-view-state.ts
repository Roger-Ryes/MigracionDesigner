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
public T_LNSPRUPDQTUXI_446!:FormGroup;
public VC_MODALREFTE_678446:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_MODALRETLT_305451 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_CU83_UDH39: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_MODALREFTE_678446.id="VC_MODALREFTE_678446";
this.VC_MODALREFTE_678446.name="ModalReferentialForm";
this.VC_MODALREFTE_678446.colSpan=1;
this.VC_MODALREFTE_678446.columns=1;
this.VC_MODALREFTE_678446.enabled=ConstantsApi.mode.All;
this.G_MODALRETLT_305451.id="G_MODALRETLT_305451";
this.G_MODALRETLT_305451.name="Group1418";
this.G_MODALRETLT_305451.columns=1;
this.G_MODALRETLT_305451.labelOrientation="Top";
this.G_MODALRETLT_305451.colSpan=1;
this.G_MODALRETLT_305451.enabled=ConstantsApi.mode.All;
this.G_MODALRETLT_305451.visible=ConstantsApi.mode.All;
this.G_MODALRETLT_305451.attList = ["identificador","descripcion","clase","tasaPIT"];
this.QV_CU83_UDH39.pageSize=10;
this.QV_CU83_UDH39.id='QV_CU83_UDH39';
this.QV_CU83_UDH39.name='QV_CU83_UDH39';
this.QV_CU83_UDH39.pageable=true;
this.QV_CU83_UDH39.sortable=false;
this.QV_CU83_UDH39.resizable=false;
this.QV_CU83_UDH39.scrollable=true
this.QV_CU83_UDH39.confirmRowDeletion=false;
this.QV_CU83_UDH39.exportToExcel=false;
this.QV_CU83_UDH39.exportToPdf=false;
this.QV_CU83_UDH39.height=0;
this.QV_CU83_UDH39.filterableColumns=false;
this.QV_CU83_UDH39.entityName='ModalTasaEntity';
this.QV_CU83_UDH39.appendRecords=false;
this.QV_CU83_UDH39.rowDetail=false;
this.QV_CU83_UDH39.columnMenu = true;
this.QV_CU83_UDH39.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_CU83_UDH39.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_CU83_UDH39.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXFMX_713451",
label : cobis.translate('LNSPR.LBL_LNSPR_IDENTIFCD_64931'),
field : 'identificador',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFMX_713451',
name :'identificador',
withoutLabel : true,
attribute : 'identificador',
entity : 'ModalTasaEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMLD_237451",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPNC_75776'),
field : 'descripcion',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMLD_237451',
name :'descripcion',
withoutLabel : true,
attribute : 'descripcion',
entity : 'ModalTasaEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMFU_598451",
label : cobis.translate('LNSPR.LBL_LNSPR_CLASESBZB_24652'),
field : 'clase',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMFU_598451',
name :'clase',
withoutLabel : true,
attribute : 'clase',
entity : 'ModalTasaEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXNE_889451",
label : cobis.translate('LNSPR.LBL_LNSPR_TASAPITKQ_16457'),
field : 'tasaPIT',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXNE_889451',
name :'tasaPIT',
withoutLabel : true,
attribute : 'tasaPIT',
entity : 'ModalTasaEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRUPDQTUXI_446 = this.formBuilder.group({
ModalTasaEntity: this.formBuilder.group({
identificador:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CU83_UDH39.columns,'VA_TEXTINPUTBOXFMX_713451')],
descripcion:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CU83_UDH39.columns,'VA_TEXTINPUTBOXMLD_237451')],
clase:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CU83_UDH39.columns,'VA_TEXTINPUTBOXMFU_598451')],
tasaPIT:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CU83_UDH39.columns,'VA_TEXTINPUTBOXXNE_889451')],
}
),
});
}
}