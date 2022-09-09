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
public T_ASSTSDXZMZWIL_957!:FormGroup;
public VC_LOANITEMSS_778957:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANITESMS_734116 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_FL15_OEC17: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANITEMSS_778957.id="VC_LOANITEMSS_778957";
this.VC_LOANITEMSS_778957.name="LoanItemsForm";
this.VC_LOANITEMSS_778957.colSpan=1;
this.VC_LOANITEMSS_778957.columns=1;
this.VC_LOANITEMSS_778957.enabled=ConstantsApi.mode.All;
this.G_LOANITESMS_734116.id="G_LOANITESMS_734116";
this.G_LOANITESMS_734116.name="Group2811";
this.G_LOANITESMS_734116.columns=1;
this.G_LOANITESMS_734116.labelOrientation="Top";
this.G_LOANITESMS_734116.colSpan=1;
this.G_LOANITESMS_734116.enabled=ConstantsApi.mode.All;
this.G_LOANITESMS_734116.visible=ConstantsApi.mode.All;
this.G_LOANITESMS_734116.attList = ["item","description","typeItem","paymentMethod","signo","priority","factor","reference","signReadjustment","referenceReadjustment","factorReadjustment","calculationBase","amount","percentage","category","payArrears","cause","points","typePoints","totalRate","negotationRate","annualRate","pointsReadjustment","grace","warrantyType","warrantyAccount","warrantyCoverage","warrantyValue","dividendType","interestPeriods","otherRates","bank","financed","minRate","maxRate","associate","associateValue","insurance","insuranceType","receivable","rank"];
this.QV_FL15_OEC17.pageSize=5;
this.QV_FL15_OEC17.id='QV_FL15_OEC17';
this.QV_FL15_OEC17.name='QV_FL15_OEC17';
this.QV_FL15_OEC17.pageable=true;
this.QV_FL15_OEC17.sortable=false;
this.QV_FL15_OEC17.resizable=true;
this.QV_FL15_OEC17.scrollable=true
this.QV_FL15_OEC17.confirmRowDeletion=false;
this.QV_FL15_OEC17.exportToExcel=false;
this.QV_FL15_OEC17.exportToPdf=false;
this.QV_FL15_OEC17.height=0;
this.QV_FL15_OEC17.filterableColumns=false;
this.QV_FL15_OEC17.entityName='LoanItemsList';
this.QV_FL15_OEC17.appendRecords=false;
this.QV_FL15_OEC17.rowDetail=false;
this.QV_FL15_OEC17.columnMenu = true;
this.QV_FL15_OEC17.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_FL15_OEC17.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
this.QV_FL15_OEC17.commandsButton=[
{
id : 'CEQV_201QV_FL15_OEC17_507',
image:'',
label: cobis.translate('ASSTS.LBL_ASSTS_ASOCIARFV_34210'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Button',
enabled:true,
visible:true
},
];
//RowCommands:
this.QV_FL15_OEC17.rowsCommandButton=[
{
id : 'VA_GRIDROWCOMMMAND_816116',
label:cobis.translate('ASSTS.LBL_ASSTS_DESASOCAA_12767'),
name : 'VA_GRIDROWCOMMMAND_816116',
visible: true,
tooltip:'',
width:125,
setFocus:false,
userControl:'Button',
causesValidation: false
},
];
//Creacion de columnas del Grid
this.QV_FL15_OEC17.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXZNG_253116",
label : cobis.translate('ASSTS.LBL_ASSTS_RUBROFBVM_52414'),
field : 'item',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZNG_253116',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXAO_213116",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPIN_18186'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXAO_213116',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAWL_778116",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOLDSKB_46090'),
field : 'typeItem',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAWL_778116',
name :'typeItem',
withoutLabel : true,
attribute : 'typeItem',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_COMBOBOXZFLUYZQ_585116",
label : cobis.translate('ASSTS.LBL_ASSTS_APAGOWSUO_22122'),
field : 'paymentMethod',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_COMBOBOXZFLUYZQ_585116',
name :'paymentMethod',
attribute : 'paymentMethod',
entity : 'LoanItemsList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
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
id : "VA_COMBOBOXOSALCHV_886116",
label : cobis.translate('ASSTS.LBL_ASSTS_SIGNODWUU_39563'),
field : 'signo',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_COMBOBOXOSALCHV_886116',
name :'signo',
attribute : 'signo',
entity : 'LoanItemsList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
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
id : "VA_TEXTINPUTBOXVXI_250116",
label : cobis.translate('ASSTS.LBL_ASSTS_PRIORIDDD_58504'),
field : 'priority',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVXI_250116',
name :'priority',
withoutLabel : true,
attribute : 'priority',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYJB_774116",
label : cobis.translate('ASSTS.LBL_ASSTS_FACTORHYG_27995'),
field : 'factor',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYJB_774116',
name :'factor',
withoutLabel : true,
attribute : 'factor',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIMW_617116",
label : cobis.translate('ASSTS.LBL_ASSTS_REFERENCL_42296'),
field : 'reference',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIMW_617116',
name :'reference',
withoutLabel : true,
attribute : 'reference',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_COMBOBOXONGSBYC_922116",
label : cobis.translate('ASSTS.LBL_ASSTS_SIGNORETA_58140'),
field : 'signReadjustment',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_COMBOBOXONGSBYC_922116',
name :'signReadjustment',
attribute : 'signReadjustment',
entity : 'LoanItemsList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
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
id : "VA_TEXTINPUTBOXOSD_293116",
label : cobis.translate('ASSTS.LBL_ASSTS_REFREAJSU_20053'),
field : 'referenceReadjustment',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOSD_293116',
name :'referenceReadjustment',
withoutLabel : true,
attribute : 'referenceReadjustment',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAOJ_660116",
label : cobis.translate('ASSTS.LBL_ASSTS_FACTORRAJ_67007'),
field : 'factorReadjustment',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAOJ_660116',
name :'factorReadjustment',
withoutLabel : true,
attribute : 'factorReadjustment',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYOR_905116",
label : cobis.translate('ASSTS.LBL_ASSTS_BASECALCL_35805'),
field : 'calculationBase',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYOR_905116',
name :'calculationBase',
withoutLabel : true,
attribute : 'calculationBase',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJKV_990116",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORAOIJ_74397'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXJKV_990116',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTSW_966116",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAQDBMK_45779'),
field : 'percentage',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTSW_966116',
name :'percentage',
withoutLabel : true,
attribute : 'percentage',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_COMBOBOXVAJAEZI_442116",
label : cobis.translate('ASSTS.LBL_ASSTS_FINANCIAO_40117'),
field : 'financed',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_COMBOBOXVAJAEZI_442116',
name :'financed',
attribute : 'financed',
entity : 'LoanItemsList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
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
id : "VA_TEXTINPUTBOXORP_574116",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAMINCJ_91660'),
field : 'minRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXORP_574116',
name :'minRate',
withoutLabel : true,
attribute : 'minRate',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCQL_961116",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAMAXGS_82810'),
field : 'maxRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCQL_961116',
name :'maxRate',
withoutLabel : true,
attribute : 'maxRate',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBEM_346116",
label : cobis.translate('ASSTS.LBL_ASSTS_REFASOCAA_43339'),
field : 'associate',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBEM_346116',
name :'associate',
withoutLabel : true,
attribute : 'associate',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVRP_738116",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORREFO_81387'),
field : 'associateValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVRP_738116',
name :'associateValue',
withoutLabel : true,
attribute : 'associateValue',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWEZ_892116",
label : cobis.translate('ASSTS.LBL_ASSTS_ASEGURADA_82404'),
field : 'insurance',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXWEZ_892116',
name :'insurance',
attribute : 'insurance',
entity : 'LoanItemsList',
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
id : "VA_TEXTINPUTBOXWKW_397116",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOSEGOO_23233'),
field : 'insuranceType',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXWKW_397116',
name :'insuranceType',
attribute : 'insuranceType',
entity : 'LoanItemsList',
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
id : "VA_TEXTINPUTBOXECB_925116",
label : cobis.translate('ASSTS.LBL_ASSTS_RANGOPAYZ_92039'),
field : 'rank',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXECB_925116',
name :'rank',
withoutLabel : true,
attribute : 'rank',
entity : 'LoanItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSDXZMZWIL_957 = this.formBuilder.group({
LoanItemsList: this.formBuilder.group({
item:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXZNG_253116')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXXAO_213116')],
typeItem:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXAWL_778116')],
paymentMethod:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_COMBOBOXZFLUYZQ_585116')],
signo:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_COMBOBOXOSALCHV_886116')],
priority:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXVXI_250116')],
factor:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXYJB_774116')],
reference:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXIMW_617116')],
signReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_COMBOBOXONGSBYC_922116')],
referenceReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXOSD_293116')],
factorReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXAOJ_660116')],
calculationBase:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXYOR_905116')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXJKV_990116')],
percentage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXTSW_966116')],
category:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXCXU_744116')],
payArrears:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXDTP_774116')],
cause:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXPTW_797116')],
points:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXJXB_939116')],
typePoints:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXEAL_321116')],
totalRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXOOA_523116')],
negotationRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXYPC_934116')],
annualRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXLFY_980116')],
pointsReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXWUW_309116')],
grace:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXWKR_428116')],
warrantyType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXOQH_848116')],
warrantyAccount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXDKG_332116')],
warrantyCoverage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXKEA_814116')],
warrantyValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXJHZ_984116')],
dividendType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXFLU_353116')],
interestPeriods:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXRTQ_861116')],
otherRates:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXDRQ_565116')],
bank:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXGHJ_501116')],
financed:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_COMBOBOXVAJAEZI_442116')],
minRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXORP_574116')],
maxRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXCQL_961116')],
associate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXBEM_346116')],
associateValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXVRP_738116')],
insurance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXWEZ_892116')],
insuranceType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXWKW_397116')],
receivable:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXDUU_205116')],
rank:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_FL15_OEC17.columns,'VA_TEXTINPUTBOXECB_925116')],
limit:[null],
}
),
});
}
}