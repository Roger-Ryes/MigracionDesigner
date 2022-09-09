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
public T_PAYMENTUTOUGP_714!:FormGroup;
public VC_PAYMENTZMN_922714:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTRKG_540154 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_5030_22532: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PAYMENTZMN_922714.id="VC_PAYMENTZMN_922714";
this.VC_PAYMENTZMN_922714.name="PaymentQueryForm";
this.VC_PAYMENTZMN_922714.colSpan=1;
this.VC_PAYMENTZMN_922714.columns=1;
this.VC_PAYMENTZMN_922714.enabled=ConstantsApi.mode.All;
this.G_PAYMENTRKG_540154.id="G_PAYMENTRKG_540154";
this.G_PAYMENTRKG_540154.name="Group1348";
this.G_PAYMENTRKG_540154.columns=1;
this.G_PAYMENTRKG_540154.labelOrientation="Top";
this.G_PAYMENTRKG_540154.colSpan=1;
this.G_PAYMENTRKG_540154.enabled=ConstantsApi.mode.All;
this.G_PAYMENTRKG_540154.visible=ConstantsApi.mode.All;
this.G_PAYMENTRKG_540154.attList = ["status","sequential","sequentialPay","date","datePay","paymentType","amount","currencyType","user","entireFee","advance","reductionType","collectionType","category","referencedAccount","note","regional","retention","querySequential"];
this.QV_5030_22532.pageSize=10;
this.QV_5030_22532.id='QV_5030_22532';
this.QV_5030_22532.name='QV_5030_22532';
this.QV_5030_22532.pageable=true;
this.QV_5030_22532.sortable=false;
this.QV_5030_22532.resizable=true;
this.QV_5030_22532.scrollable=true
this.QV_5030_22532.confirmRowDeletion=false;
this.QV_5030_22532.exportToExcel=false;
this.QV_5030_22532.exportToPdf=false;
this.QV_5030_22532.height=0;
this.QV_5030_22532.filterableColumns=false;
this.QV_5030_22532.entityName='Payment';
this.QV_5030_22532.appendRecords=true;
this.QV_5030_22532.rowDetail=false;
this.QV_5030_22532.columnMenu = true;
this.QV_5030_22532.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_5030_22532.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_5030_22532.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXUWP_909154",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'status',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 75,
properties :
{
id :'VA_TEXTINPUTBOXUWP_909154',
name :'status',
withoutLabel : true,
attribute : 'status',
entity : 'Payment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMUO_385154",
label : cobis.translate('ASSTS.LBL_ASSTS_SECINGJFM_10718'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMUO_385154',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'Payment',
format : '#',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBSJ_689154",
label : cobis.translate('ASSTS.LBL_ASSTS_SECPAGABK_28190'),
field : 'sequentialPay',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBSJ_689154',
name :'sequentialPay',
withoutLabel : true,
attribute : 'sequentialPay',
entity : 'Payment',
format : '#',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDPDCJAA_495154",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAINGG_82521'),
field : 'date',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties : {
id :'VA_DATEFIELDPDCJAA_495154',
name :'date',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'date',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Payment',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_DATEFIELDEMXTST_413154",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAPAGG_95277'),
field : 'datePay',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties : {
id :'VA_DATEFIELDEMXTST_413154',
name :'datePay',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'datePay',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Payment',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXXSF_766154",
label : cobis.translate('ASSTS.LBL_ASSTS_APAGOPQXA_89595'),
field : 'paymentType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXXSF_766154',
name :'paymentType',
withoutLabel : true,
attribute : 'paymentType',
entity : 'Payment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZVE_754154",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOEMFX_52083'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXZVE_754154',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'Payment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDLC_207154",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'currencyType',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDLC_207154',
name :'currencyType',
withoutLabel : true,
attribute : 'currencyType',
entity : 'Payment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBYZ_445154",
label : cobis.translate('ASSTS.LBL_ASSTS_USUARIOTE_48852'),
field : 'user',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXBYZ_445154',
name :'user',
withoutLabel : true,
attribute : 'user',
entity : 'Payment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPKV_144154",
label : cobis.translate('ASSTS.LBL_ASSTS_CUOTACOMM_65443'),
field : 'entireFee',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 140,
properties :
{
id :'VA_TEXTINPUTBOXPKV_144154',
name :'entireFee',
withoutLabel : true,
attribute : 'entireFee',
entity : 'Payment',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRRC_423154",
label : cobis.translate('ASSTS.LBL_ASSTS_ANTICIPSS_79918'),
field : 'advance',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRRC_423154',
name :'advance',
withoutLabel : true,
attribute : 'advance',
entity : 'Payment',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHER_720154",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOREDNU_76608'),
field : 'reductionType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXHER_720154',
name :'reductionType',
withoutLabel : true,
attribute : 'reductionType',
entity : 'Payment',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMFE_161154",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOCOBRO_50413'),
field : 'collectionType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXMFE_161154',
name :'collectionType',
withoutLabel : true,
attribute : 'collectionType',
entity : 'Payment',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQCM_915154",
label : cobis.translate('ASSTS.LBL_ASSTS_CLASEBNBK_90328'),
field : 'category',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXQCM_915154',
name :'category',
withoutLabel : true,
attribute : 'category',
entity : 'Payment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKJZ_326154",
label : cobis.translate('ASSTS.LBL_ASSTS_CUENTAREN_88192'),
field : 'referencedAccount',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKJZ_326154',
name :'referencedAccount',
withoutLabel : true,
attribute : 'referencedAccount',
entity : 'Payment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGMT_221154",
label : cobis.translate('ASSTS.LBL_ASSTS_COMENTARI_46421'),
field : 'note',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGMT_221154',
name :'note',
withoutLabel : true,
attribute : 'note',
entity : 'Payment',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZNQ_252154",
label : cobis.translate('ASSTS.LBL_ASSTS_REGIONALL_39718'),
field : 'regional',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZNQ_252154',
name :'regional',
withoutLabel : true,
attribute : 'regional',
entity : 'Payment',
format : '#',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZQK_755154",
label : cobis.translate('ASSTS.LBL_ASSTS_RETENCIOO_15179'),
field : 'retention',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXZQK_755154',
name :'retention',
withoutLabel : true,
attribute : 'retention',
entity : 'Payment',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEXW_393154",
label : cobis.translate('ASSTS.LBL_ASSTS_SECFFRHRZ_68817'),
field : 'querySequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXEXW_393154',
name :'querySequential',
withoutLabel : true,
attribute : 'querySequential',
entity : 'Payment',
format : '#',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_PAYMENTUTOUGP_714 = this.formBuilder.group({
Payment: this.formBuilder.group({
status:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXUWP_909154')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXMUO_385154')],
sequentialPay:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXBSJ_689154')],
date:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_DATEFIELDPDCJAA_495154')],
datePay:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_DATEFIELDEMXTST_413154')],
paymentType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXXSF_766154')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXZVE_754154')],
currencyType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXDLC_207154')],
user:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXBYZ_445154')],
entireFee:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXPKV_144154')],
advance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXRRC_423154')],
reductionType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXHER_720154')],
collectionType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXMFE_161154')],
category:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXQCM_915154')],
referencedAccount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXKJZ_326154')],
note:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXGMT_221154')],
regional:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXZNQ_252154')],
retention:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXZQK_755154')],
querySequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5030_22532.columns,'VA_TEXTINPUTBOXEXW_393154')],
amountPayAux:[null],
typeQuotationTr:[null],
customerID:[null],
typeQuotationOp:[null],
amountPayment:[null],
quotationValue:[null],
payQuotationValue:[null],
reference:[null],
numCheck:[null],
continuePayment:[null],
finePrepayment:[null],
operationTypeId:[null],
operationCurrencyType:[null],
value:[null],
prePaymentAux:[null],
quotation:[null],
customer:[null],
amountPrepayment:[null],
negotiated:[null],
bank:[null],
amountPay:[null],
onLine:[null],
unappliedPayments:[null],
processDate:[null],
billTo:[null],
unappliedAmount:[null],
prepayRate:[null],
}
),
});
}
}