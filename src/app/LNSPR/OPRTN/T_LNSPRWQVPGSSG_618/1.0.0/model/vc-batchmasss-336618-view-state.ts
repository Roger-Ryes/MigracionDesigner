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
public T_LNSPRWQVPGSSG_618!:FormGroup;
public VC_BATCHMASSS_336618:CobisGroupBoxModel = new CobisGroupBoxModel();
public uploaders: any;
public G_BATCHMAINN_688436 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_BATCHMASTP_249436 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_WR71_MYK57: CobisGridModel = new CobisGridModel();
public VA_ARCHIVORFAULKWH_987436: CobisFileUploadModel = new CobisFileUploadModel();
public CM_TLNSPRWQ_853: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRWQ_N5S: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_BATCHMASSS_336618.id="VC_BATCHMASSS_336618";
this.VC_BATCHMASSS_336618.name="BatchMassivePaymentsForm";
this.VC_BATCHMASSS_336618.colSpan=1;
this.VC_BATCHMASSS_336618.columns=1;
this.VC_BATCHMASSS_336618.enabled=ConstantsApi.mode.All;
this.G_BATCHMAINN_688436.id="G_BATCHMAINN_688436";
this.G_BATCHMAINN_688436.name="Group1719";
this.G_BATCHMAINN_688436.columns=3;
this.G_BATCHMAINN_688436.labelOrientation="Top";
this.G_BATCHMAINN_688436.colSpan=1;
this.G_BATCHMAINN_688436.enabled=ConstantsApi.mode.All;
this.G_BATCHMAINN_688436.visible=ConstantsApi.mode.All;
this.G_BATCHMAINN_688436.attList = ["archivo"];
this.G_BATCHMASTP_249436.id="G_BATCHMASTP_249436";
this.G_BATCHMASTP_249436.name="Group2496";
this.G_BATCHMASTP_249436.columns=1;
this.G_BATCHMASTP_249436.labelOrientation="Top";
this.G_BATCHMASTP_249436.colSpan=1;
this.G_BATCHMASTP_249436.enabled=ConstantsApi.mode.All;
this.G_BATCHMASTP_249436.visible=ConstantsApi.mode.All;
this.G_BATCHMASTP_249436.attList = ["datePayment","numberBank","customerName","currencyPayment","formPayment","valuePay","numberAccount","description","errorPM","sequentialPM","lotePM","filePM","endLotePM"];
this.CM_TLNSPRWQ_853.id = "CM_TLNSPRWQ_853";
this.CM_TLNSPRWQ_853.name = "Command2";
this.CM_TLNSPRWQ_853.causesValidation=false;
this.CM_TLNSPRWQ_853.submitOnEnter=false;
this.CM_TLNSPRWQ_853.setFocus=false;
this.CM_TLNSPRWQ_853.close=false;
this.CM_TLNSPRWQ_853.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.CM_TLNSPRWQ_853.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRWQ_853.visible= ConstantsApi.mode.All;
this.CM_TLNSPRWQ_N5S.id = "CM_TLNSPRWQ_N5S";
this.CM_TLNSPRWQ_N5S.name = "Command2";
this.CM_TLNSPRWQ_N5S.causesValidation=false;
this.CM_TLNSPRWQ_N5S.submitOnEnter=false;
this.CM_TLNSPRWQ_N5S.setFocus=false;
this.CM_TLNSPRWQ_N5S.close=false;
this.CM_TLNSPRWQ_N5S.label = cobis.translate("LNSPR.LBL_LOANS_LIMPIARVF_75606");
this.CM_TLNSPRWQ_N5S.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRWQ_N5S.visible= ConstantsApi.mode.All;
this.VA_ARCHIVORFAULKWH_987436.id = "VA_ARCHIVORFAULKWH_987436";
this.VA_ARCHIVORFAULKWH_987436.name = "archivo";
this.VA_ARCHIVORFAULKWH_987436.label = cobis.translate("LNSPR.LBL_LOANS_CARGARAVO_29365");
this.VA_ARCHIVORFAULKWH_987436.entity = "LoanSearchFilter";
this.VA_ARCHIVORFAULKWH_987436.attribute = "archivo";
this.VA_ARCHIVORFAULKWH_987436.colSpan = 1;
this.VA_ARCHIVORFAULKWH_987436.withoutLabel = false;
this.VA_ARCHIVORFAULKWH_987436.readOnly =ConstantsApi.mode.Query;
this.VA_ARCHIVORFAULKWH_987436.enabled = ConstantsApi.mode.All;
this.VA_ARCHIVORFAULKWH_987436.visible= ConstantsApi.mode.All;
this.QV_WR71_MYK57.pageSize=10;
this.QV_WR71_MYK57.id='QV_WR71_MYK57';
this.QV_WR71_MYK57.name='QV_WR71_MYK57';
this.QV_WR71_MYK57.pageable=true;
this.QV_WR71_MYK57.sortable=false;
this.QV_WR71_MYK57.resizable=true;
this.QV_WR71_MYK57.scrollable=true
this.QV_WR71_MYK57.confirmRowDeletion=false;
this.QV_WR71_MYK57.exportToExcel=false;
this.QV_WR71_MYK57.exportToPdf=false;
this.QV_WR71_MYK57.height=0;
this.QV_WR71_MYK57.filterableColumns=false;
this.QV_WR71_MYK57.entityName='MassivePayments';
this.QV_WR71_MYK57.appendRecords=false;
this.QV_WR71_MYK57.rowDetail=false;
this.QV_WR71_MYK57.columnMenu = true;
this.QV_WR71_MYK57.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_WR71_MYK57.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_WR71_MYK57.columns = Util.filterByMode(this.mode, [
{
id : "VA_DATEFIELDRJLBIW_571436",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHAVALR_40841'),
field : 'datePayment',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDRJLBIW_571436',
name :'datePayment',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'datePayment',
readonly : ConstantsApi.mode.Query,
entity : 'MassivePayments',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXESE_841436",
label : cobis.translate('LNSPR.LBL_LOANS_OPERACIOO_86900'),
field : 'numberBank',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXESE_841436',
name :'numberBank',
withoutLabel : true,
attribute : 'numberBank',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCLK_733436",
label : cobis.translate('LNSPR.LBL_LNSPR_CLIENTEOR_78949'),
field : 'customerName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCLK_733436',
name :'customerName',
withoutLabel : true,
attribute : 'customerName',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJJV_466436",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'currencyPayment',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXJJV_466436',
name :'currencyPayment',
withoutLabel : true,
attribute : 'currencyPayment',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTSE_297436",
label : cobis.translate('LNSPR.LBL_LNSPR_APAGOWSUO_22122'),
field : 'formPayment',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTSE_297436',
name :'formPayment',
withoutLabel : true,
attribute : 'formPayment',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQST_156436",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORAPAA_34434'),
field : 'valuePay',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQST_156436',
name :'valuePay',
withoutLabel : true,
attribute : 'valuePay',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPVE_204436",
label : cobis.translate('LNSPR.LBL_LNSPR_NOCUENTAA_41516'),
field : 'numberAccount',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXPVE_204436',
name :'numberAccount',
withoutLabel : true,
attribute : 'numberAccount',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTAV_198436",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOEAI_33340'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTAV_198436',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJFS_403436",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPIN_18186'),
field : 'errorPM',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXJFS_403436',
name :'errorPM',
withoutLabel : true,
attribute : 'errorPM',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRWQVPGSSG_618 = this.formBuilder.group({
LoanSearchFilter: this.formBuilder.group({
archivo:[{value: null, disabled: !this.VA_ARCHIVORFAULKWH_987436.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ARCHIVORFAULKWH_987436.validationFunctions!)],
condition:[null],
lastProcessDate:[null],
next:[null],
archivoSubido:[null],
mode:[null],
numIdentification:[null],
sequential:[null],
codClient:[null],
credit:[null],
type:[null],
group:[null],
product:[null],
disbursementDate:[null],
isGroup:[null],
category:[null],
avanceSearch:[null],
classLoan:[null],
seleccionarTodo:[null],
codCurrency:[null],
migratedOperation:[null],
daysPastDue:[null],
numProcedures:[null],
untilDate:[null],
isDisbursment:[null],
readjDate:[null],
office:[null],
operation:[null],
oficial:[null],
nextReadjDate:[null],
state:[null],
status:[null],
historical:[null],
}
),
MassivePayments: this.formBuilder.group({
datePayment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_DATEFIELDRJLBIW_571436')],
numberBank:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXESE_841436')],
customerName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXCLK_733436')],
currencyPayment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXJJV_466436')],
formPayment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXTSE_297436')],
valuePay:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXQST_156436')],
numberAccount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXPVE_204436')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXTAV_198436')],
errorPM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXJFS_403436')],
sequentialPM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXCHF_516436')],
lotePM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXSOI_794436')],
filePM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXPWB_936436')],
endLotePM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WR71_MYK57.columns,'VA_TEXTINPUTBOXMOP_204436')],
}
),
});
this.uploaders = {
VA_ARCHIVORFAULKWH_987436: this.VA_ARCHIVORFAULKWH_987436
}
}
}