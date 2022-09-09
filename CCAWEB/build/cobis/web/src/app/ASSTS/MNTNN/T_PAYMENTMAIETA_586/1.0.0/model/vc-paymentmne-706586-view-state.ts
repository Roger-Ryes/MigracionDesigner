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
public T_PAYMENTMAIETA_586!:FormGroup;
public VC_PAYMENTMNE_706586:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTNEA_454448 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_7546_25470: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PAYMENTMNE_706586.id="VC_PAYMENTMNE_706586";
this.VC_PAYMENTMNE_706586.name="PaymentMaintenance";
this.VC_PAYMENTMNE_706586.colSpan=1;
this.VC_PAYMENTMNE_706586.columns=1;
this.VC_PAYMENTMNE_706586.enabled=ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.G_PAYMENTNEA_454448.id="G_PAYMENTNEA_454448";
this.G_PAYMENTNEA_454448.name="Group1844";
this.G_PAYMENTNEA_454448.columns=1;
this.G_PAYMENTNEA_454448.labelOrientation="Top";
this.G_PAYMENTNEA_454448.colSpan=1;
this.G_PAYMENTNEA_454448.enabled=ConstantsApi.mode.All;
this.G_PAYMENTNEA_454448.visible=ConstantsApi.mode.All;
this.G_PAYMENTNEA_454448.attList = ["product","description"];
this.QV_7546_25470.pageSize=10;
this.QV_7546_25470.id='QV_7546_25470';
this.QV_7546_25470.name='QV_7546_25470';
this.QV_7546_25470.pageable=true;
this.QV_7546_25470.sortable=false;
this.QV_7546_25470.resizable=true;
this.QV_7546_25470.scrollable=false
this.QV_7546_25470.confirmRowDeletion=true;
this.QV_7546_25470.exportToExcel=false;
this.QV_7546_25470.exportToPdf=false;
this.QV_7546_25470.height=0;
this.QV_7546_25470.filterableColumns=false;
this.QV_7546_25470.entityName='MethodsRetention';
this.QV_7546_25470.appendRecords=false;
this.QV_7546_25470.rowDetail=false;
this.QV_7546_25470.columnMenu = true;
this.QV_7546_25470.editMode=CommonsConstants.GRID_EDIT_MODE_MODAL;
this.QV_7546_25470.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_7546_25470.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_7546_25470.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXPMD_289448",
label : cobis.translate('ASSTS.LBL_ASSTS_IDENTIFCR_66965'),
field : 'product',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXPMD_289448',
name :'product',
withoutLabel : true,
attribute : 'product',
entity : 'MethodsRetention',
maxlength: 30,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWRT_921448",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXWRT_921448',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'MethodsRetention',
maxlength: 70,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_PAYMENTMAIETA_586 = this.formBuilder.group({
MethodsRetention: this.formBuilder.group({
product:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7546_25470.columns,'VA_TEXTINPUTBOXPMD_289448')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7546_25470.columns,'VA_TEXTINPUTBOXWRT_921448')],
descriptionCanal:[null],
paymentAut:[null],
valueCode:[null],
transacction:[null],
retentiondays:[null],
canal:[null],
descCurrency:[null],
reversePro:[null],
bankInstrument:[null],
category:[null],
codeCategory:[null],
bankServices:[null],
payment:[null],
over:[null],
currencyRetention:[null],
descripBank:[null],
paymentATX:[null],
descCOBIS:[null],
descriptionCategory:[null],
paymentMethods:[null],
activePassive:[null],
disbursement:[null],
pcobis:[null],
state:[null],
affectation:[null],
}
),
});
}
}