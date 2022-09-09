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
public T_ASSTSECRXYFPY_431!:FormGroup;
public VC_DETAILTRSN_444431:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DETAILTTNA_753352 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_GS51_LPN26: CobisGridModel = new CobisGridModel();
public CM_TASSTSEC_Y9S: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_DETAILTRSN_444431.id="VC_DETAILTRSN_444431";
this.VC_DETAILTRSN_444431.name="DetailTransactionQueryForm";
this.VC_DETAILTRSN_444431.colSpan=1;
this.VC_DETAILTRSN_444431.columns=1;
this.VC_DETAILTRSN_444431.enabled=ConstantsApi.mode.All;
this.G_DETAILTTNA_753352.id="G_DETAILTTNA_753352";
this.G_DETAILTTNA_753352.name="Group1659";
this.G_DETAILTTNA_753352.columns=1;
this.G_DETAILTTNA_753352.labelOrientation="Top";
this.G_DETAILTTNA_753352.colSpan=1;
this.G_DETAILTTNA_753352.enabled=ConstantsApi.mode.All;
this.G_DETAILTTNA_753352.visible=ConstantsApi.mode.All;
this.G_DETAILTTNA_753352.attList = ["dividend","entry","state","money","amount","amountMN","codValor","affectation","account","beneficiary"];
this.CM_TASSTSEC_Y9S.id = "CM_TASSTSEC_Y9S";
this.CM_TASSTSEC_Y9S.name = "Command1";
this.CM_TASSTSEC_Y9S.causesValidation=false;
this.CM_TASSTSEC_Y9S.submitOnEnter=false;
this.CM_TASSTSEC_Y9S.setFocus=false;
this.CM_TASSTSEC_Y9S.close=true;
this.CM_TASSTSEC_Y9S.label = cobis.translate("ASSTS.LBL_ASSTS_CERRARRUT_40473");
this.CM_TASSTSEC_Y9S.enabled = ConstantsApi.mode.All;
this.CM_TASSTSEC_Y9S.visible= ConstantsApi.mode.All;
this.QV_GS51_LPN26.pageSize=10;
this.QV_GS51_LPN26.id='QV_GS51_LPN26';
this.QV_GS51_LPN26.name='QV_GS51_LPN26';
this.QV_GS51_LPN26.pageable=true;
this.QV_GS51_LPN26.sortable=false;
this.QV_GS51_LPN26.resizable=false;
this.QV_GS51_LPN26.scrollable=true
this.QV_GS51_LPN26.confirmRowDeletion=false;
this.QV_GS51_LPN26.exportToExcel=false;
this.QV_GS51_LPN26.exportToPdf=false;
this.QV_GS51_LPN26.height=0;
this.QV_GS51_LPN26.filterableColumns=false;
this.QV_GS51_LPN26.entityName='DetailTransactionQuery';
this.QV_GS51_LPN26.appendRecords=true;
this.QV_GS51_LPN26.rowDetail=false;
this.QV_GS51_LPN26.columnMenu = true;
this.QV_GS51_LPN26.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_GS51_LPN26.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_GS51_LPN26.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXHDH_459352",
label : cobis.translate('ASSTS.LBL_ASSTS_DIVIDENDD_92569'),
field : 'dividend',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHDH_459352',
name :'dividend',
withoutLabel : true,
attribute : 'dividend',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYCY_184352",
label : cobis.translate('ASSTS.LBL_ASSTS_RUBROFKGQ_42963'),
field : 'entry',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYCY_184352',
name :'entry',
withoutLabel : true,
attribute : 'entry',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGNY_317352",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGNY_317352',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLBX_392352",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'money',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLBX_392352',
name :'money',
withoutLabel : true,
attribute : 'money',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOYL_188352",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOEMFX_52083'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOYL_188352',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKPQ_191352",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOMNYT_95969'),
field : 'amountMN',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKPQ_191352',
name :'amountMN',
withoutLabel : true,
attribute : 'amountMN',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCDZ_127352",
label : cobis.translate('ASSTS.LBL_ASSTS_CODIGOVLO_98625'),
field : 'codValor',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCDZ_127352',
name :'codValor',
withoutLabel : true,
attribute : 'codValor',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFAU_872352",
label : cobis.translate('ASSTS.LBL_ASSTS_AFECTACII_71770'),
field : 'affectation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFAU_872352',
name :'affectation',
withoutLabel : true,
attribute : 'affectation',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRGA_997352",
label : cobis.translate('ASSTS.LBL_ASSTS_CUENTADIA_22037'),
field : 'account',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRGA_997352',
name :'account',
withoutLabel : true,
attribute : 'account',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEDP_822352",
label : cobis.translate('ASSTS.LBL_ASSTS_BENEFICII_99714'),
field : 'beneficiary',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEDP_822352',
name :'beneficiary',
withoutLabel : true,
attribute : 'beneficiary',
entity : 'DetailTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSECRXYFPY_431 = this.formBuilder.group({
DetailTransactionQuery: this.formBuilder.group({
dividend:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXHDH_459352')],
entry:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXYCY_184352')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXGNY_317352')],
money:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXLBX_392352')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXOYL_188352')],
amountMN:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXKPQ_191352')],
codValor:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXCDZ_127352')],
affectation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXFAU_872352')],
account:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXRGA_997352')],
beneficiary:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GS51_LPN26.columns,'VA_TEXTINPUTBOXEDP_822352')],
price:[null],
}
),
});
}
}