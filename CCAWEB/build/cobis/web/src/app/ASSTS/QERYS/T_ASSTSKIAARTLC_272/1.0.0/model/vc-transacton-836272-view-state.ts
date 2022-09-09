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
public T_ASSTSKIAARTLC_272!:FormGroup;
public VC_TRANSACTON_836272:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TRANSACONN_174396 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TRANSACOOT_923396 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_LM28_ZKS23: CobisGridModel = new CobisGridModel();
public VA_TYPETRANSACTONO_872396: CobisDropDownListModel = new CobisDropDownListModel();
public VA_NUMBERLOANYPRWR_485396: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_STATEHXTRROIKBR_543396: CobisDropDownListModel = new CobisDropDownListModel();
public VA_STARTDATEGLYTFE_559396: CobisDateFieldModel = new CobisDateFieldModel();
public VA_ENDDATEDNFEKEVP_656396: CobisDateFieldModel = new CobisDateFieldModel();
public VA_VABUTTONBSEOCTH_131396: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_TRANSACTON_836272.id="VC_TRANSACTON_836272";
this.VC_TRANSACTON_836272.name="TransactionQueryForm";
this.VC_TRANSACTON_836272.colSpan=1;
this.VC_TRANSACTON_836272.columns=1;
this.VC_TRANSACTON_836272.enabled=ConstantsApi.mode.All;
this.G_TRANSACONN_174396.id="G_TRANSACONN_174396";
this.G_TRANSACONN_174396.name="Group1236";
this.G_TRANSACONN_174396.columns=3;
this.G_TRANSACONN_174396.labelOrientation="Top";
this.G_TRANSACONN_174396.colSpan=1;
this.G_TRANSACONN_174396.enabled=ConstantsApi.mode.All;
this.G_TRANSACONN_174396.visible=ConstantsApi.mode.All;
this.G_TRANSACONN_174396.attList = ["typeTransaction","numberLoan","state","startDate","endDate"];
this.G_TRANSACOOT_923396.id="G_TRANSACOOT_923396";
this.G_TRANSACOOT_923396.name="Group2276";
this.G_TRANSACOOT_923396.columns=1;
this.G_TRANSACOOT_923396.labelOrientation="Top";
this.G_TRANSACOOT_923396.colSpan=1;
this.G_TRANSACOOT_923396.enabled=ConstantsApi.mode.All;
this.G_TRANSACOOT_923396.visible=ConstantsApi.mode.All;
this.G_TRANSACOOT_923396.attList = ["numberLoan","sequential","transaction","transactionDate","transactionRef","state","user","codCliente","secOpe"];
this.VA_TYPETRANSACTONO_872396.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOTRAAA_70772");
this.VA_TYPETRANSACTONO_872396.blankOption=true;
this.VA_TYPETRANSACTONO_872396.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_TYPETRANSACTONO_872396.entity = "FilterTransactionQuery";
this.VA_TYPETRANSACTONO_872396.attribute = "typeTransaction";
this.VA_TYPETRANSACTONO_872396.textField = "descripcion";
this.VA_TYPETRANSACTONO_872396.valueField = "codigo";
this.VA_TYPETRANSACTONO_872396.showId= true;
this.VA_TYPETRANSACTONO_872396.name="typeTransaction";
this.VA_TYPETRANSACTONO_872396.id="VA_TYPETRANSACTONO_872396";
this.VA_TYPETRANSACTONO_872396.colSpan=1;
this.VA_TYPETRANSACTONO_872396.withoutLabel = false;
this.VA_TYPETRANSACTONO_872396.readOnly = ConstantsApi.mode.Query;
this.VA_TYPETRANSACTONO_872396.enabled = ConstantsApi.mode.All;
this.VA_TYPETRANSACTONO_872396.visible= ConstantsApi.mode.All;
this.VA_NUMBERLOANYPRWR_485396.label = cobis.translate("ASSTS.LBL_ASSTS_NOPRSTAOO_95464");
this.VA_NUMBERLOANYPRWR_485396.entity = "FilterTransactionQuery";
this.VA_NUMBERLOANYPRWR_485396.attribute = "numberLoan";
this.VA_NUMBERLOANYPRWR_485396.textCase= TextCaseOptions.NONE;
this.VA_NUMBERLOANYPRWR_485396.name="numberLoan";
this.VA_NUMBERLOANYPRWR_485396.id="VA_NUMBERLOANYPRWR_485396";
this.VA_NUMBERLOANYPRWR_485396.colSpan=1;
this.VA_NUMBERLOANYPRWR_485396.withoutLabel = false;
this.VA_NUMBERLOANYPRWR_485396.readOnly = ConstantsApi.mode.Query;
this.VA_NUMBERLOANYPRWR_485396.enabled = ConstantsApi.mode.All;
this.VA_NUMBERLOANYPRWR_485396.visible= ConstantsApi.mode.All;
this.VA_STATEHXTRROIKBR_543396.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOEAI_33340");
this.VA_STATEHXTRROIKBR_543396.blankOption=true;
this.VA_STATEHXTRROIKBR_543396.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_STATEHXTRROIKBR_543396.entity = "FilterTransactionQuery";
this.VA_STATEHXTRROIKBR_543396.attribute = "state";
this.VA_STATEHXTRROIKBR_543396.textField = "value";
this.VA_STATEHXTRROIKBR_543396.valueField = "code";
this.VA_STATEHXTRROIKBR_543396.showId= true;
this.VA_STATEHXTRROIKBR_543396.name="state";
this.VA_STATEHXTRROIKBR_543396.id="VA_STATEHXTRROIKBR_543396";
this.VA_STATEHXTRROIKBR_543396.colSpan=1;
this.VA_STATEHXTRROIKBR_543396.withoutLabel = false;
this.VA_STATEHXTRROIKBR_543396.readOnly = ConstantsApi.mode.Query;
this.VA_STATEHXTRROIKBR_543396.enabled = ConstantsApi.mode.All;
this.VA_STATEHXTRROIKBR_543396.visible= ConstantsApi.mode.All;
this.VA_STARTDATEGLYTFE_559396.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAINOO_62253");
this.VA_STARTDATEGLYTFE_559396.entity = "FilterTransactionQuery";
this.VA_STARTDATEGLYTFE_559396.attribute = "startDate";
this.VA_STARTDATEGLYTFE_559396.name="startDate";
this.VA_STARTDATEGLYTFE_559396.id="VA_STARTDATEGLYTFE_559396";
this.VA_STARTDATEGLYTFE_559396.colSpan=1;
this.VA_STARTDATEGLYTFE_559396.withoutLabel = false;
this.VA_STARTDATEGLYTFE_559396.readOnly = ConstantsApi.mode.Query;
this.VA_STARTDATEGLYTFE_559396.enabled = ConstantsApi.mode.All;
this.VA_STARTDATEGLYTFE_559396.visible= ConstantsApi.mode.All;
this.VA_STARTDATEGLYTFE_559396.required = true;
this.VA_STARTDATEGLYTFE_559396.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_STARTDATEGLYTFE_559396.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_ENDDATEDNFEKEVP_656396.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAFINN_90563");
this.VA_ENDDATEDNFEKEVP_656396.entity = "FilterTransactionQuery";
this.VA_ENDDATEDNFEKEVP_656396.attribute = "endDate";
this.VA_ENDDATEDNFEKEVP_656396.name="endDate";
this.VA_ENDDATEDNFEKEVP_656396.id="VA_ENDDATEDNFEKEVP_656396";
this.VA_ENDDATEDNFEKEVP_656396.colSpan=1;
this.VA_ENDDATEDNFEKEVP_656396.withoutLabel = false;
this.VA_ENDDATEDNFEKEVP_656396.readOnly = ConstantsApi.mode.Query;
this.VA_ENDDATEDNFEKEVP_656396.enabled = ConstantsApi.mode.All;
this.VA_ENDDATEDNFEKEVP_656396.visible= ConstantsApi.mode.All;
this.VA_ENDDATEDNFEKEVP_656396.required = true;
this.VA_ENDDATEDNFEKEVP_656396.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ENDDATEDNFEKEVP_656396.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_VABUTTONBSEOCTH_131396.id = "VA_VABUTTONBSEOCTH_131396";
this.VA_VABUTTONBSEOCTH_131396.name = "VA_VABUTTONBSEOCTH_131396";
this.VA_VABUTTONBSEOCTH_131396.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONBSEOCTH_131396.colSpan = 1;
this.VA_VABUTTONBSEOCTH_131396.withoutLabel = false;
this.VA_VABUTTONBSEOCTH_131396.causesValidation=true;
this.VA_VABUTTONBSEOCTH_131396.submitOnEnter=false;
this.VA_VABUTTONBSEOCTH_131396.setFocus=false;
this.VA_VABUTTONBSEOCTH_131396.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONBSEOCTH_131396.visible= ConstantsApi.mode.All;
this.QV_LM28_ZKS23.pageSize=5;
this.QV_LM28_ZKS23.id='QV_LM28_ZKS23';
this.QV_LM28_ZKS23.name='QV_LM28_ZKS23';
this.QV_LM28_ZKS23.pageable=true;
this.QV_LM28_ZKS23.sortable=false;
this.QV_LM28_ZKS23.resizable=true;
this.QV_LM28_ZKS23.scrollable=true
this.QV_LM28_ZKS23.confirmRowDeletion=false;
this.QV_LM28_ZKS23.exportToExcel=true;
this.QV_LM28_ZKS23.exportToPdf=false;
this.QV_LM28_ZKS23.height=0;
this.QV_LM28_ZKS23.filterableColumns=false;
this.QV_LM28_ZKS23.entityName='ListTransactionQuery';
this.QV_LM28_ZKS23.appendRecords=true;
this.QV_LM28_ZKS23.rowDetail=false;
this.QV_LM28_ZKS23.columnMenu = true;
this.QV_LM28_ZKS23.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_LM28_ZKS23.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_LM28_ZKS23.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXTHJ_614396",
label : cobis.translate('ASSTS.LBL_ASSTS_NOPRESTOO_33534'),
field : 'numberLoan',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTHJ_614396',
name :'numberLoan',
withoutLabel : true,
attribute : 'numberLoan',
entity : 'ListTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAIP_743396",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAIP_743396',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'ListTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMDP_710396",
label : cobis.translate('ASSTS.LBL_ASSTS_TRANSACCC_75316'),
field : 'transaction',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMDP_710396',
name :'transaction',
withoutLabel : true,
attribute : 'transaction',
entity : 'ListTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDRXGTEP_703396",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHATRAN_38220'),
field : 'transactionDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDRXGTEP_703396',
name :'transactionDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'transactionDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'ListTransactionQuery',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_DATEFIELDCJWTBQ_397396",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAREFF_73060'),
field : 'transactionRef',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDCJWTBQ_397396',
name :'transactionRef',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'transactionRef',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'ListTransactionQuery',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXIWQ_254396",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIWQ_254396',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'ListTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXNU_308396",
label : cobis.translate('ASSTS.LBL_ASSTS_USUARIOTE_48852'),
field : 'user',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXNU_308396',
name :'user',
withoutLabel : true,
attribute : 'user',
entity : 'ListTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXMY_442396",
label : cobis.translate('ASSTS.LBL_ASSTS_CLIENTEMG_56892'),
field : 'codCliente',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXMY_442396',
name :'codCliente',
withoutLabel : true,
attribute : 'codCliente',
entity : 'ListTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQXA_683396",
label : cobis.translate('ASSTS.LBL_ASSTS_SECOPEORF_50164'),
field : 'secOpe',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQXA_683396',
name :'secOpe',
withoutLabel : true,
attribute : 'secOpe',
entity : 'ListTransactionQuery',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSKIAARTLC_272 = this.formBuilder.group({
FilterTransactionQuery: this.formBuilder.group({
typeTransaction:[{value: null, disabled: !this.VA_TYPETRANSACTONO_872396.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPETRANSACTONO_872396.validationFunctions!)],
numberLoan:[{value: null, disabled: !this.VA_NUMBERLOANYPRWR_485396.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMBERLOANYPRWR_485396.validationFunctions!)],
state:[{value: null, disabled: !this.VA_STATEHXTRROIKBR_543396.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATEHXTRROIKBR_543396.validationFunctions!)],
startDate:[{value: null, disabled: !this.VA_STARTDATEGLYTFE_559396.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STARTDATEGLYTFE_559396.validationFunctions!)],
endDate:[{value: null, disabled: !this.VA_ENDDATEDNFEKEVP_656396.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ENDDATEDNFEKEVP_656396.validationFunctions!)],
}
),
ListTransactionQuery: this.formBuilder.group({
numberLoan:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM28_ZKS23.columns,'VA_TEXTINPUTBOXTHJ_614396')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM28_ZKS23.columns,'VA_TEXTINPUTBOXAIP_743396')],
transaction:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM28_ZKS23.columns,'VA_TEXTINPUTBOXMDP_710396')],
transactionDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM28_ZKS23.columns,'VA_DATEFIELDRXGTEP_703396')],
transactionRef:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM28_ZKS23.columns,'VA_DATEFIELDCJWTBQ_397396')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM28_ZKS23.columns,'VA_TEXTINPUTBOXIWQ_254396')],
user:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM28_ZKS23.columns,'VA_TEXTINPUTBOXXNU_308396')],
codCliente:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM28_ZKS23.columns,'VA_TEXTINPUTBOXXMY_442396')],
secOpe:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM28_ZKS23.columns,'VA_TEXTINPUTBOXQXA_683396')],
}
),
});
}
}