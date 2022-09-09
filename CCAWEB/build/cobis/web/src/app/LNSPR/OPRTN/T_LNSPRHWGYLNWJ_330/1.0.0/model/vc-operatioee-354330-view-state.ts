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
public T_LNSPRHWGYLNWJ_330!:FormGroup;
public VC_OPERATIOEE_354330:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIMNT_255587 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_MC21_OVS27: CobisGridModel = new CobisGridModel();
public G_OPERATITIM_774587 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_SPACER1990PHNZF_966587: CobisSpacerModel = new CobisSpacerModel();
public VA_VAVABUTTONTR__P_260587: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_OPERATIOEE_354330.id="VC_OPERATIOEE_354330";
this.VC_OPERATIOEE_354330.name="OperationItems";
this.VC_OPERATIOEE_354330.colSpan=1;
this.VC_OPERATIOEE_354330.columns=1;
this.VC_OPERATIOEE_354330.enabled=ConstantsApi.mode.All;
this.G_OPERATIMNT_255587.id="G_OPERATIMNT_255587";
this.G_OPERATIMNT_255587.name="Group1657";
this.G_OPERATIMNT_255587.columns=1;
this.G_OPERATIMNT_255587.labelOrientation="Top";
this.G_OPERATIMNT_255587.colSpan=1;
this.G_OPERATIMNT_255587.enabled=ConstantsApi.mode.All;
this.G_OPERATIMNT_255587.visible=ConstantsApi.mode.All;
this.G_OPERATIMNT_255587.attList = ["item","description","typeItem","otherRates","paymentMethod","signo","priority","factor","reference","signReadjustment","referenceReadjustment","factorReadjustment","calculationBase","amount","percentage","payArrears","cause","points","typePoints","totalRate","negotiatedRate","annualRate","pointsReadjustment","grace","receivable","warrantyType","warrantyAccount","warrantyCoverage","warrantyValue","dividendType","interestPeriods","financed","minRate","maxRate","associate","associateValue","insurance","insuranceType","category","rank"];
this.G_OPERATITIM_774587.id="G_OPERATITIM_774587";
this.G_OPERATITIM_774587.name="Group1466";
this.G_OPERATITIM_774587.columns=3;
this.G_OPERATITIM_774587.labelOrientation="Top";
this.G_OPERATITIM_774587.colSpan=1;
this.G_OPERATITIM_774587.enabled=ConstantsApi.mode.All;
this.G_OPERATITIM_774587.visible=ConstantsApi.mode.All;
this.QV_MC21_OVS27.pageSize=10;
this.QV_MC21_OVS27.id='QV_MC21_OVS27';
this.QV_MC21_OVS27.name='QV_MC21_OVS27';
this.QV_MC21_OVS27.pageable=true;
this.QV_MC21_OVS27.sortable=false;
this.QV_MC21_OVS27.resizable=true;
this.QV_MC21_OVS27.scrollable=true
this.QV_MC21_OVS27.confirmRowDeletion=true;
this.QV_MC21_OVS27.exportToExcel=false;
this.QV_MC21_OVS27.exportToPdf=false;
this.QV_MC21_OVS27.height=0;
this.QV_MC21_OVS27.filterableColumns=false;
this.QV_MC21_OVS27.entityName='OperationItemsList';
this.QV_MC21_OVS27.appendRecords=false;
this.QV_MC21_OVS27.rowDetail=false;
this.QV_MC21_OVS27.columnMenu = true;
this.QV_MC21_OVS27.editMode=CommonsConstants.GRID_EDIT_MODE_MODAL;
this.QV_MC21_OVS27.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_MC21_OVS27.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_MC21_OVS27.columns = Util.filterByMode(this.mode, [
{
id : "VA_ITEMWXVWWWSCMKV_983587",
label : cobis.translate('LNSPR.LBL_LNSPR_RUBROFBVM_52414'),
field : 'item',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_ITEMWXVWWWSCMKV_983587',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DESCRIPTIONRKNO_269587",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPIN_18186'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DESCRIPTIONRKNO_269587',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TYPEITEMJIPMXHQ_437587",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOLDSKB_46090'),
field : 'typeItem',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TYPEITEMJIPMXHQ_437587',
name :'typeItem',
withoutLabel : true,
attribute : 'typeItem',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_PAYMENTMETHODDD_439587",
label : cobis.translate('LNSPR.LBL_LNSPR_APAGOWSUO_22122'),
field : 'paymentMethod',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_PAYMENTMETHODDD_439587',
name :'paymentMethod',
withoutLabel : true,
attribute : 'paymentMethod',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_SIGNOPVGZZIPUAD_330587",
label : cobis.translate('LNSPR.LBL_LNSPR_SIGNODWUU_39563'),
field : 'signo',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_SIGNOPVGZZIPUAD_330587',
name :'signo',
withoutLabel : true,
attribute : 'signo',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_PRIORITYKZVVIRF_388587",
label : cobis.translate('LNSPR.LBL_LOANS_PRIORIDAA_88318'),
field : 'priority',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_PRIORITYKZVVIRF_388587',
name :'priority',
withoutLabel : true,
attribute : 'priority',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_FACTORFVQAPPLTX_853587",
label : cobis.translate('LNSPR.LBL_LNSPR_FACTORHYG_27995'),
field : 'factor',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_FACTORFVQAPPLTX_853587',
name :'factor',
withoutLabel : true,
attribute : 'factor',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]),
messagesValidations : {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
},
}
},
{
id : "VA_REFERENCEGBROYB_738587",
label : cobis.translate('LNSPR.LBL_LNSPR_REFERENIC_88346'),
field : 'reference',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_REFERENCEGBROYB_738587',
name :'reference',
withoutLabel : true,
attribute : 'reference',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_SIGNREADJUSTNEN_335587",
label : cobis.translate('LNSPR.LBL_LNSPR_SIGNORETA_58140'),
field : 'signReadjustment',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_SIGNREADJUSTNEN_335587',
name :'signReadjustment',
withoutLabel : true,
attribute : 'signReadjustment',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_REFERENCEREANET_690587",
label : cobis.translate('LNSPR.LBL_LNSPR_REFREAJSU_20053'),
field : 'referenceReadjustment',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_REFERENCEREANET_690587',
name :'referenceReadjustment',
withoutLabel : true,
attribute : 'referenceReadjustment',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_FACTORREADJUTET_483587",
label : cobis.translate('LNSPR.LBL_LNSPR_FACTORRAJ_67007'),
field : 'factorReadjustment',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_FACTORREADJUTET_483587',
name :'factorReadjustment',
withoutLabel : true,
attribute : 'factorReadjustment',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_CALCULATIONBASA_240587",
label : cobis.translate('LNSPR.LBL_LNSPR_BASECALCL_35805'),
field : 'calculationBase',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_CALCULATIONBASA_240587',
name :'calculationBase',
withoutLabel : true,
attribute : 'calculationBase',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_AMOUNTJGMPZXMXY_754587",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORAOIJ_74397'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_AMOUNTJGMPZXMXY_754587',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000000')]
]),
messagesValidations : {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
},
}
},
{
id : "VA_PERCENTAGEJLTCZ_260587",
label : cobis.translate('LNSPR.LBL_LOANS_TASAKBVNZ_56174'),
field : 'percentage',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_PERCENTAGEJLTCZ_260587',
name :'percentage',
withoutLabel : true,
attribute : 'percentage',
entity : 'OperationItemsList',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]),
messagesValidations : {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
},
}
},
{
id : "VA_FINANCEDWVNAAPN_415587",
label : cobis.translate('LNSPR.LBL_LOANS_FINANCIAD_42980'),
field : 'financed',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 75,
data$: of([]),
properties :
{
id :'VA_FINANCEDWVNAAPN_415587',
name :'financed',
attribute : 'financed',
entity : 'OperationItemsList',
withoutLabel : false,
blankOption : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
}
},
{
id : "VA_MINRATEJNRPYQJS_276587",
label : cobis.translate('LNSPR.LBL_LNSPR_TASAMINCJ_91660'),
field : 'minRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_MINRATEJNRPYQJS_276587',
name :'minRate',
withoutLabel : true,
attribute : 'minRate',
entity : 'OperationItemsList',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_MAXRATENSHCMIGD_796587",
label : cobis.translate('LNSPR.LBL_LNSPR_TASAMAXGS_82810'),
field : 'maxRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_MAXRATENSHCMIGD_796587',
name :'maxRate',
withoutLabel : true,
attribute : 'maxRate',
entity : 'OperationItemsList',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNAY_879587",
label : cobis.translate('LNSPR.LBL_LNSPR_REFASOCAA_43339'),
field : 'associate',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNAY_879587',
name :'associate',
withoutLabel : true,
attribute : 'associate',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXQV_567587",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORREFO_81387'),
field : 'associateValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXQV_567587',
name :'associateValue',
withoutLabel : true,
attribute : 'associateValue',
entity : 'OperationItemsList',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKKV_743587",
label : cobis.translate('LNSPR.LBL_LNSPR_ASEGURADA_82404'),
field : 'insurance',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXKKV_743587',
name :'insurance',
attribute : 'insurance',
entity : 'OperationItemsList',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
}
},
{
id : "VA_TEXTINPUTBOXVLP_884587",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOSEGOO_23233'),
field : 'insuranceType',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXVLP_884587',
name :'insuranceType',
attribute : 'insuranceType',
entity : 'OperationItemsList',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
}
},
{
id : "VA_TEXTINPUTBOXAEM_387587",
label : cobis.translate('LNSPR.LBL_LNSPR_RANGOFPVC_28025'),
field : 'rank',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAEM_387587',
name :'rank',
withoutLabel : true,
attribute : 'rank',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.VA_SPACER1990PHNZF_966587.id = "VA_SPACER1990PHNZF_966587";
this.VA_SPACER1990PHNZF_966587.name = "Spacer1990";
this.VA_SPACER1990PHNZF_966587.colSpan = 1;
this.VA_SPACER1990PHNZF_966587.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONTR__P_260587.id = "VA_VAVABUTTONTR__P_260587";
this.VA_VAVABUTTONTR__P_260587.name = "VA_VAVABUTTONTR__P_260587";
this.VA_VAVABUTTONTR__P_260587.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.VA_VAVABUTTONTR__P_260587.colSpan = 1;
this.VA_VAVABUTTONTR__P_260587.withoutLabel = false;
this.VA_VAVABUTTONTR__P_260587.causesValidation=false;
this.VA_VAVABUTTONTR__P_260587.submitOnEnter=false;
this.VA_VAVABUTTONTR__P_260587.setFocus=false;
this.VA_VAVABUTTONTR__P_260587.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONTR__P_260587.visible= ConstantsApi.mode.All;
this.T_LNSPRHWGYLNWJ_330 = this.formBuilder.group({
OperationItemsList: this.formBuilder.group({
item:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_ITEMWXVWWWSCMKV_983587')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_DESCRIPTIONRKNO_269587')],
typeItem:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TYPEITEMJIPMXHQ_437587')],
otherRates:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_OTHERRATESSNGBH_206587')],
paymentMethod:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_PAYMENTMETHODDD_439587')],
signo:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_SIGNOPVGZZIPUAD_330587')],
priority:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_PRIORITYKZVVIRF_388587')],
factor:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_FACTORFVQAPPLTX_853587')],
reference:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_REFERENCEGBROYB_738587')],
signReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_SIGNREADJUSTNEN_335587')],
referenceReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_REFERENCEREANET_690587')],
factorReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_FACTORREADJUTET_483587')],
calculationBase:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_CALCULATIONBASA_240587')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_AMOUNTJGMPZXMXY_754587')],
percentage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_PERCENTAGEJLTCZ_260587')],
payArrears:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_PAYARREARSBOUUR_140587')],
cause:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_CAUSEUVCCDEPMIA_289587')],
points:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_POINTSTESVMWKGH_733587')],
typePoints:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TYPEPOINTSDTBQI_258587')],
totalRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TOTALRATEOPJMMR_803587')],
negotiatedRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_NEGOTIATEDRAETT_876587')],
annualRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_ANNUALRATESVRXQ_786587')],
pointsReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_POINTSREADJUTTS_146587')],
grace:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_GRACEGYKAMZUODA_972587')],
receivable:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_RECEIVABLEUNHZR_405587')],
warrantyType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_WARRANTYTYPETIJ_651587')],
warrantyAccount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_WARRANTYACCOUUU_368587')],
warrantyCoverage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_WARRANTYCOVEREG_147587')],
warrantyValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_WARRANTYVALUEEE_381587')],
dividendType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_DIVIDENDTYPEOCS_467587')],
interestPeriods:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_INTERESTPERIDDD_253587')],
financed:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_FINANCEDWVNAAPN_415587')],
minRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_MINRATEJNRPYQJS_276587')],
maxRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_MAXRATENSHCMIGD_796587')],
associate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXNAY_879587')],
associateValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXXQV_567587')],
insurance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXKKV_743587')],
insuranceType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXVLP_884587')],
category:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXCKX_678587')],
rank:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXAEM_387587')],
applyRate:[null],
banco:[null],
limit:[null],
}
),
});
}
}