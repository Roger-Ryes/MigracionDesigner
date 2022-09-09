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
public T_DOCUMENTPRIII_678!:FormGroup;
public VC_DOCUMENTPP_352678:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DOCUMENIIN_569334 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_3105_20065: CobisGridModel = new CobisGridModel();
public CM_TDOCUMEN_TN1: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_DOCUMENTPP_352678.id="VC_DOCUMENTPP_352678";
this.VC_DOCUMENTPP_352678.name="DocumentPrinting";
this.VC_DOCUMENTPP_352678.colSpan=1;
this.VC_DOCUMENTPP_352678.columns=1;
this.VC_DOCUMENTPP_352678.enabled=ConstantsApi.mode.All;
this.G_DOCUMENIIN_569334.id="G_DOCUMENIIN_569334";
this.G_DOCUMENIIN_569334.name="Group2940";
this.G_DOCUMENIIN_569334.columns=3;
this.G_DOCUMENIIN_569334.labelOrientation="Top";
this.G_DOCUMENIIN_569334.colSpan=1;
this.G_DOCUMENIIN_569334.enabled=ConstantsApi.mode.All;
this.G_DOCUMENIIN_569334.visible=ConstantsApi.mode.All;
this.G_DOCUMENIIN_569334.attList = ["codigo","documentos","item","templade","mnemonic"];
this.CM_TDOCUMEN_TN1.id = "CM_TDOCUMEN_TN1";
this.CM_TDOCUMEN_TN1.name = "Command1";
this.CM_TDOCUMEN_TN1.causesValidation=false;
this.CM_TDOCUMEN_TN1.submitOnEnter=false;
this.CM_TDOCUMEN_TN1.setFocus=false;
this.CM_TDOCUMEN_TN1.close=false;
this.CM_TDOCUMEN_TN1.label = cobis.translate("ASSTS.LBL_ASSTS_IMPRIMIRR_18630");
this.CM_TDOCUMEN_TN1.enabled = ConstantsApi.mode.All;
this.CM_TDOCUMEN_TN1.visible= ConstantsApi.mode.All;
this.QV_3105_20065.pageSize=10;
this.QV_3105_20065.id='QV_3105_20065';
this.QV_3105_20065.name='QV_3105_20065';
this.QV_3105_20065.pageable=true;
this.QV_3105_20065.sortable=false;
this.QV_3105_20065.resizable=true;
this.QV_3105_20065.scrollable=true
this.QV_3105_20065.confirmRowDeletion=false;
this.QV_3105_20065.exportToExcel=false;
this.QV_3105_20065.exportToPdf=false;
this.QV_3105_20065.height=0;
this.QV_3105_20065.filterableColumns=false;
this.QV_3105_20065.entityName='PrintingDocuments';
this.QV_3105_20065.appendRecords=false;
this.QV_3105_20065.rowDetail=false;
this.QV_3105_20065.columnMenu = true;
this.QV_3105_20065.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_3105_20065.modeSelection=ComplexConstants.GRID_MODE_SELECTION_MULTIPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_3105_20065.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXWZN_618334",
label : cobis.translate('ASSTS.LBL_ASSTS_CODIGOYTZ_84859'),
field : 'codigo',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWZN_618334',
name :'idDocuments',
withoutLabel : true,
attribute : 'codigo',
entity : 'PrintingDocuments',
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXSTS_372334",
label : cobis.translate('ASSTS.LBL_ASSTS_DOCUMENSS_30547'),
field : 'documentos',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSTS_372334',
name :'documents',
withoutLabel : true,
attribute : 'documentos',
entity : 'PrintingDocuments',
maxlength: 64,
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXDUI_728334",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMCTOAI_47020'),
field : 'item',
visible : ConstantsApi.mode.All,
type : 'template',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXDUI_728334',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'PrintingDocuments',
readonly : ConstantsApi.mode.Query,
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
disabled : false,
trueValue: "true",
falseValue: "false",
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required, CustomValidators.requiredCheckboxValue("true")]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
]);
this.T_DOCUMENTPRIII_678 = this.formBuilder.group({
PrintingDocuments: this.formBuilder.group({
codigo:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3105_20065.columns,'VA_TEXTINPUTBOXWZN_618334')],
documentos:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3105_20065.columns,'VA_TEXTINPUTBOXSTS_372334')],
item:[{value: false, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3105_20065.columns,'VA_TEXTINPUTBOXDUI_728334')],
templade:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3105_20065.columns,'VA_TEXTINPUTBOXBYT_524334')],
mnemonic:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3105_20065.columns,'VA_TEXTINPUTBOXQIM_627334')],
operation:[null],
mode:[null],
}
),
});
}
}