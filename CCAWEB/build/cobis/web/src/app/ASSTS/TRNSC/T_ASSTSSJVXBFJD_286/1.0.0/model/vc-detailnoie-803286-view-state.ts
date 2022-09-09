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
public T_ASSTSSJVXBFJD_286!:FormGroup;
public VC_DETAILNOIE_803286:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DETAILNIAM_373842 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_RO76_OKE25: CobisGridModel = new CobisGridModel();
public CM_TASSTSSJ_CNS: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_DETAILNOIE_803286.id="VC_DETAILNOIE_803286";
this.VC_DETAILNOIE_803286.name="DetailNoAppliedPaymentsForm";
this.VC_DETAILNOIE_803286.colSpan=1;
this.VC_DETAILNOIE_803286.columns=1;
this.VC_DETAILNOIE_803286.enabled=ConstantsApi.mode.All;
this.G_DETAILNIAM_373842.id="G_DETAILNIAM_373842";
this.G_DETAILNIAM_373842.name="Group1535";
this.G_DETAILNIAM_373842.columns=1;
this.G_DETAILNIAM_373842.labelOrientation="Top";
this.G_DETAILNIAM_373842.colSpan=1;
this.G_DETAILNIAM_373842.enabled=ConstantsApi.mode.All;
this.G_DETAILNIAM_373842.visible=ConstantsApi.mode.All;
this.G_DETAILNIAM_373842.attList = ["tipo","concepto","cuenta","moneda","montoMPG","montoMOP"];
this.CM_TASSTSSJ_CNS.id = "CM_TASSTSSJ_CNS";
this.CM_TASSTSSJ_CNS.name = "Command1";
this.CM_TASSTSSJ_CNS.causesValidation=false;
this.CM_TASSTSSJ_CNS.submitOnEnter=false;
this.CM_TASSTSSJ_CNS.setFocus=false;
this.CM_TASSTSSJ_CNS.close=true;
this.CM_TASSTSSJ_CNS.label = cobis.translate("ASSTS.LBL_ASSTS_CERRARGRF_18229");
this.CM_TASSTSSJ_CNS.enabled = ConstantsApi.mode.All;
this.CM_TASSTSSJ_CNS.visible= ConstantsApi.mode.All;
this.QV_RO76_OKE25.pageSize=10;
this.QV_RO76_OKE25.id='QV_RO76_OKE25';
this.QV_RO76_OKE25.name='QV_RO76_OKE25';
this.QV_RO76_OKE25.pageable=true;
this.QV_RO76_OKE25.sortable=false;
this.QV_RO76_OKE25.resizable=true;
this.QV_RO76_OKE25.scrollable=true
this.QV_RO76_OKE25.confirmRowDeletion=false;
this.QV_RO76_OKE25.exportToExcel=false;
this.QV_RO76_OKE25.exportToPdf=false;
this.QV_RO76_OKE25.height=0;
this.QV_RO76_OKE25.filterableColumns=false;
this.QV_RO76_OKE25.entityName='DetailNoAppliedPayment';
this.QV_RO76_OKE25.appendRecords=false;
this.QV_RO76_OKE25.rowDetail=false;
this.QV_RO76_OKE25.columnMenu = true;
this.QV_RO76_OKE25.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_RO76_OKE25.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_RO76_OKE25.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXXDM_927842",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOLDSKB_46090'),
field : 'tipo',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXDM_927842',
name :'tipo',
withoutLabel : true,
attribute : 'tipo',
entity : 'DetailNoAppliedPayment',
maxlength: 3,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCRL_932842",
label : cobis.translate('ASSTS.LBL_ASSTS_CONCEPTOO_16181'),
field : 'concepto',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCRL_932842',
name :'concepto',
withoutLabel : true,
attribute : 'concepto',
entity : 'DetailNoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMRZ_790842",
label : cobis.translate('ASSTS.LBL_ASSTS_CUENTADIA_22037'),
field : 'cuenta',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMRZ_790842',
name :'cuenta',
withoutLabel : true,
attribute : 'cuenta',
entity : 'DetailNoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRZI_579842",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'moneda',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRZI_579842',
name :'moneda',
withoutLabel : true,
attribute : 'moneda',
entity : 'DetailNoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSUW_480842",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOMPGG_93181'),
field : 'montoMPG',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSUW_480842',
name :'montoMPG',
withoutLabel : true,
attribute : 'montoMPG',
entity : 'DetailNoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDWE_890842",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOMOPP_42194'),
field : 'montoMOP',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDWE_890842',
name :'montoMOP',
withoutLabel : true,
attribute : 'montoMOP',
entity : 'DetailNoAppliedPayment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSSJVXBFJD_286 = this.formBuilder.group({
DetailNoAppliedPayment: this.formBuilder.group({
tipo:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RO76_OKE25.columns,'VA_TEXTINPUTBOXXDM_927842')],
concepto:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RO76_OKE25.columns,'VA_TEXTINPUTBOXCRL_932842')],
cuenta:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RO76_OKE25.columns,'VA_TEXTINPUTBOXMRZ_790842')],
moneda:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RO76_OKE25.columns,'VA_TEXTINPUTBOXRZI_579842')],
montoMPG:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RO76_OKE25.columns,'VA_TEXTINPUTBOXSUW_480842')],
montoMOP:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RO76_OKE25.columns,'VA_TEXTINPUTBOXDWE_890842')],
}
),
});
}
}