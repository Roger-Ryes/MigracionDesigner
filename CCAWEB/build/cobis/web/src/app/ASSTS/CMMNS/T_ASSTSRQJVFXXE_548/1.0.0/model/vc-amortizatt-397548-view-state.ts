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
public T_ASSTSRQJVFXXE_548!:FormGroup;
public VC_AMORTIZATT_397548:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_AMORTIZDID_615244 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_QV37_LCP47: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_AMORTIZATT_397548.id="VC_AMORTIZATT_397548";
this.VC_AMORTIZATT_397548.name="AmortizationModal";
this.VC_AMORTIZATT_397548.colSpan=1;
this.VC_AMORTIZATT_397548.columns=1;
this.VC_AMORTIZATT_397548.enabled=ConstantsApi.mode.All;
this.G_AMORTIZDID_615244.id="G_AMORTIZDID_615244";
this.G_AMORTIZDID_615244.name="Group2156";
this.G_AMORTIZDID_615244.columns=1;
this.G_AMORTIZDID_615244.labelOrientation="Top";
this.G_AMORTIZDID_615244.colSpan=1;
this.G_AMORTIZDID_615244.enabled=ConstantsApi.mode.All;
this.G_AMORTIZDID_615244.visible=ConstantsApi.mode.All;
this.G_AMORTIZDID_615244.attList = ["share","expiration","days","balanceCap","items1","items2","items3","items4","items5","items7","items8","items9","items10","items11","items12","items14","items15","shareValue","items6","state","items13","porroga"];
this.QV_QV37_LCP47.pageSize=10;
this.QV_QV37_LCP47.id='QV_QV37_LCP47';
this.QV_QV37_LCP47.name='QV_QV37_LCP47';
this.QV_QV37_LCP47.pageable=true;
this.QV_QV37_LCP47.sortable=false;
this.QV_QV37_LCP47.resizable=true;
this.QV_QV37_LCP47.scrollable=true
this.QV_QV37_LCP47.confirmRowDeletion=false;
this.QV_QV37_LCP47.exportToExcel=false;
this.QV_QV37_LCP47.exportToPdf=false;
this.QV_QV37_LCP47.height=0;
this.QV_QV37_LCP47.filterableColumns=false;
this.QV_QV37_LCP47.entityName='Amortization';
this.QV_QV37_LCP47.appendRecords=false;
this.QV_QV37_LCP47.rowDetail=false;
this.QV_QV37_LCP47.summarizedBy =[
{field: 'items1', aggregate: 'sum'},
{field: 'items2', aggregate: 'sum'},
{field: 'items3', aggregate: 'sum'},
{field: 'items4', aggregate: 'sum'},
{field: 'items5', aggregate: 'sum'},
{field: 'items7', aggregate: 'sum'},
{field: 'items8', aggregate: 'sum'},
{field: 'items9', aggregate: 'sum'},
{field: 'items10', aggregate: 'sum'},
{field: 'items11', aggregate: 'sum'},
{field: 'items12', aggregate: 'sum'},
{field: 'items14', aggregate: 'sum'},
{field: 'items15', aggregate: 'sum'},
{field: 'shareValue', aggregate: 'sum'},
{field: 'items6', aggregate: 'sum'}
];
this.QV_QV37_LCP47.columnMenu = true;
this.QV_QV37_LCP47.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_QV37_LCP47.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_QV37_LCP47.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXEBY_458244",
label : cobis.translate('ASSTS.LBL_ASSTS_CUOTASNJN_88896'),
field : 'share',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEBY_458244',
name :'share',
withoutLabel : true,
attribute : 'share',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDMUGVCO_937244",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENE_58948'),
field : 'expiration',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDMUGVCO_937244',
name :'expiration',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'expiration',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Amortization',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXAJH_441244",
label : cobis.translate('ASSTS.LBL_ASSTS_DIASIVQBJ_73578'),
field : 'days',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAJH_441244',
name :'days',
withoutLabel : true,
attribute : 'days',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEBB_845244",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDOCAPI_87055'),
field : 'balanceCap',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXEBB_845244',
name :'balanceCap',
withoutLabel : true,
attribute : 'balanceCap',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXIE_368244",
label : cobis.translate('ASSTS.LBL_ASSTS_CAPHKBGAT_46080'),
field : 'items1',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXXIE_368244',
name :'items1',
withoutLabel : true,
attribute : 'items1',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXECP_389244",
label : cobis.translate('ASSTS.LBL_ASSTS_COMMORAQO_84198'),
field : 'items2',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXECP_389244',
name :'items2',
withoutLabel : true,
attribute : 'items2',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXIQG_995244",
label : cobis.translate('ASSTS.LBL_ASSTS_IMOWWWZTH_92506'),
field : 'items3',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXIQG_995244',
name :'items3',
withoutLabel : true,
attribute : 'items3',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXCZG_232244",
label : cobis.translate('ASSTS.LBL_ASSTS_INTBQVBSN_86454'),
field : 'items4',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXCZG_232244',
name :'items4',
withoutLabel : true,
attribute : 'items4',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXYJC_667244",
label : cobis.translate('ASSTS.LBL_ASSTS_IVACMORAA_51556'),
field : 'items5',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXYJC_667244',
name :'items5',
withoutLabel : true,
attribute : 'items5',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXZCC_660244",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORCUTO_78445'),
field : 'shareValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXZCC_660244',
name :'shareValue',
withoutLabel : true,
attribute : 'shareValue',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXEKM_962244",
label : cobis.translate('ASSTS.LBL_ASSTS_IVAINTEVZ_92036'),
field : 'items6',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXEKM_962244',
name :'items6',
withoutLabel : true,
attribute : 'items6',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXAZY_732244",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXAZY_732244',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBOQ_761244",
field : 'porroga',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBOQ_761244',
name :'porroga',
withoutLabel : true,
attribute : 'porroga',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSRQJVFXXE_548 = this.formBuilder.group({
Amortization: this.formBuilder.group({
share:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXEBY_458244')],
expiration:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_DATEFIELDMUGVCO_937244')],
days:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXAJH_441244')],
balanceCap:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXEBB_845244')],
items1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXXIE_368244')],
items2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXECP_389244')],
items3:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXIQG_995244')],
items4:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXCZG_232244')],
items5:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXYJC_667244')],
items7:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXYYM_693244')],
items8:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXMZL_667244')],
items9:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXZAX_680244')],
items10:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXQJV_131244')],
items11:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXDSL_380244')],
items12:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXEBS_621244')],
items14:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXYMI_363244')],
items15:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXRVV_155244')],
shareValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXZCC_660244')],
items6:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXEKM_962244')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXAZY_732244')],
items13:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXVBI_648244')],
porroga:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QV37_LCP47.columns,'VA_TEXTINPUTBOXBOQ_761244')],
}
),
});
}
}