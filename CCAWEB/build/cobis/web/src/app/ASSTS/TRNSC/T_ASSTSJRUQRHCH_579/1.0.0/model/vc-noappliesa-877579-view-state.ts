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
public T_ASSTSJRUQRHCH_579!:FormGroup;
public VC_NOAPPLIESA_877579:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_NOAPPLIEEE_169728 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_PJ68_WJJ41: CobisGridModel = new CobisGridModel();
public CM_TASSTSJR_47T: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_NOAPPLIESA_877579.id="VC_NOAPPLIESA_877579";
this.VC_NOAPPLIESA_877579.name="NoAppliedPaymentsForm";
this.VC_NOAPPLIESA_877579.colSpan=1;
this.VC_NOAPPLIESA_877579.columns=1;
this.VC_NOAPPLIESA_877579.enabled=ConstantsApi.mode.All;
this.G_NOAPPLIEEE_169728.id="G_NOAPPLIEEE_169728";
this.G_NOAPPLIEEE_169728.name="Group1771";
this.G_NOAPPLIEEE_169728.columns=1;
this.G_NOAPPLIEEE_169728.labelOrientation="Top";
this.G_NOAPPLIEEE_169728.colSpan=1;
this.G_NOAPPLIEEE_169728.enabled=ConstantsApi.mode.All;
this.G_NOAPPLIEEE_169728.visible=ConstantsApi.mode.All;
this.G_NOAPPLIEEE_169728.attList = ["secuencial","fecha","usuario","oficina","retencion","cuotaCompleta","anticipos","tipoReduccion","tipoCobro"];
this.CM_TASSTSJR_47T.id = "CM_TASSTSJR_47T";
this.CM_TASSTSJR_47T.name = "Command1";
this.CM_TASSTSJR_47T.causesValidation=false;
this.CM_TASSTSJR_47T.submitOnEnter=false;
this.CM_TASSTSJR_47T.setFocus=false;
this.CM_TASSTSJR_47T.close=true;
this.CM_TASSTSJR_47T.label = cobis.translate("ASSTS.LBL_ASSTS_CERRARGRF_18229");
this.CM_TASSTSJR_47T.enabled = ConstantsApi.mode.All;
this.CM_TASSTSJR_47T.visible= ConstantsApi.mode.All;
this.QV_PJ68_WJJ41.pageSize=10;
this.QV_PJ68_WJJ41.id='QV_PJ68_WJJ41';
this.QV_PJ68_WJJ41.name='QV_PJ68_WJJ41';
this.QV_PJ68_WJJ41.pageable=true;
this.QV_PJ68_WJJ41.sortable=false;
this.QV_PJ68_WJJ41.resizable=true;
this.QV_PJ68_WJJ41.scrollable=true
this.QV_PJ68_WJJ41.confirmRowDeletion=true;
this.QV_PJ68_WJJ41.exportToExcel=false;
this.QV_PJ68_WJJ41.exportToPdf=false;
this.QV_PJ68_WJJ41.height=0;
this.QV_PJ68_WJJ41.filterableColumns=false;
this.QV_PJ68_WJJ41.entityName='NoAppliedPayment';
this.QV_PJ68_WJJ41.appendRecords=false;
this.QV_PJ68_WJJ41.rowDetail=false;
this.QV_PJ68_WJJ41.columnMenu = true;
this.QV_PJ68_WJJ41.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_PJ68_WJJ41.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_PJ68_WJJ41.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
//RowCommands:
this.QV_PJ68_WJJ41.rowsCommandButton=[
{
id : 'VA_GRIDROWCOMMMNDD_641728',
label:cobis.translate('ASSTS.LBL_ASSTS_APLICARIP_57468'),
name : 'VA_GRIDROWCOMMMNDD_641728',
visible: true,
tooltip:'',
width:100,
setFocus:false,
userControl:'Button',
causesValidation: false
},
];
//Creacion de columnas del Grid
this.QV_PJ68_WJJ41.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXEAA_349728",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'secuencial',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEAA_349728',
name :'secuencial',
withoutLabel : true,
attribute : 'secuencial',
entity : 'NoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRFR_894728",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAQWBP_23514'),
field : 'fecha',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRFR_894728',
name :'fecha',
withoutLabel : true,
attribute : 'fecha',
entity : 'NoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIWP_828728",
label : cobis.translate('ASSTS.LBL_ASSTS_USUARIOTE_48852'),
field : 'usuario',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIWP_828728',
name :'usuario',
withoutLabel : true,
attribute : 'usuario',
entity : 'NoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGUR_413728",
label : cobis.translate('ASSTS.LBL_ASSTS_OFICINAHX_44623'),
field : 'oficina',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGUR_413728',
name :'oficina',
withoutLabel : true,
attribute : 'oficina',
entity : 'NoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTAL_575728",
label : cobis.translate('ASSTS.LBL_ASSTS_RETENCIOO_15179'),
field : 'retencion',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTAL_575728',
name :'retencion',
withoutLabel : true,
attribute : 'retencion',
entity : 'NoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDVV_144728",
label : cobis.translate('ASSTS.LBL_ASSTS_CUOTACOMM_65443'),
field : 'cuotaCompleta',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDVV_144728',
name :'cuotaCompleta',
withoutLabel : true,
attribute : 'cuotaCompleta',
entity : 'NoAppliedPayment',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJFZ_210728",
label : cobis.translate('ASSTS.LBL_ASSTS_ANTICIPSS_79918'),
field : 'anticipos',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXJFZ_210728',
name :'anticipos',
withoutLabel : true,
attribute : 'anticipos',
entity : 'NoAppliedPayment',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVZK_871728",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOREDNU_76608'),
field : 'tipoReduccion',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVZK_871728',
name :'tipoReduccion',
withoutLabel : true,
attribute : 'tipoReduccion',
entity : 'NoAppliedPayment',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXHO_486728",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOCOBRO_50413'),
field : 'tipoCobro',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXHO_486728',
name :'tipoCobro',
withoutLabel : true,
attribute : 'tipoCobro',
entity : 'NoAppliedPayment',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSJRUQRHCH_579 = this.formBuilder.group({
NoAppliedPayment: this.formBuilder.group({
secuencial:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PJ68_WJJ41.columns,'VA_TEXTINPUTBOXEAA_349728')],
fecha:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PJ68_WJJ41.columns,'VA_TEXTINPUTBOXRFR_894728')],
usuario:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PJ68_WJJ41.columns,'VA_TEXTINPUTBOXIWP_828728')],
oficina:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PJ68_WJJ41.columns,'VA_TEXTINPUTBOXGUR_413728')],
retencion:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PJ68_WJJ41.columns,'VA_TEXTINPUTBOXTAL_575728')],
cuotaCompleta:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PJ68_WJJ41.columns,'VA_TEXTINPUTBOXDVV_144728')],
anticipos:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PJ68_WJJ41.columns,'VA_TEXTINPUTBOXJFZ_210728')],
tipoReduccion:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PJ68_WJJ41.columns,'VA_TEXTINPUTBOXVZK_871728')],
tipoCobro:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PJ68_WJJ41.columns,'VA_TEXTINPUTBOXXHO_486728')],
}
),
});
}
}