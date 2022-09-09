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
public T_ITEMSLOANSUXI_712!:FormGroup;
public VC_ITEMSLOANN_757712:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ITEMSLONNA_169129 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_7536_43842: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_ITEMSLOANN_757712.id="VC_ITEMSLOANN_757712";
this.VC_ITEMSLOANN_757712.name="QueryItemsLoanForm";
this.VC_ITEMSLOANN_757712.colSpan=1;
this.VC_ITEMSLOANN_757712.columns=1;
this.VC_ITEMSLOANN_757712.enabled=ConstantsApi.mode.All;
this.G_ITEMSLONNA_169129.id="G_ITEMSLONNA_169129";
this.G_ITEMSLONNA_169129.name="Group1415";
this.G_ITEMSLONNA_169129.columns=1;
this.G_ITEMSLONNA_169129.labelOrientation="Top";
this.G_ITEMSLONNA_169129.colSpan=1;
this.G_ITEMSLONNA_169129.enabled=ConstantsApi.mode.All;
this.G_ITEMSLONNA_169129.visible=ConstantsApi.mode.All;
this.G_ITEMSLONNA_169129.attList = ["description","concept","paymentMethod","itemType","priority","value","latePayment","reference","sign","cause","pointsValue","pointsType","valueTotalRate","negotiatedRate","annualEfecRate","reajustmenSign","reajustmentValuePoints","reajustmentReference","gain","baseCalculation","chargeForRinging","warrantyType","warrantyNumber","coveragePercentage","warrantyValue","dividendType","interestPeriod","tableOtherRate","financed","minRate","maxRate"];
this.QV_7536_43842.pageSize=10;
this.QV_7536_43842.id='QV_7536_43842';
this.QV_7536_43842.name='QV_7536_43842';
this.QV_7536_43842.pageable=true;
this.QV_7536_43842.sortable=false;
this.QV_7536_43842.resizable=true;
this.QV_7536_43842.scrollable=true
this.QV_7536_43842.confirmRowDeletion=false;
this.QV_7536_43842.exportToExcel=false;
this.QV_7536_43842.exportToPdf=false;
this.QV_7536_43842.height=0;
this.QV_7536_43842.filterableColumns=false;
this.QV_7536_43842.entityName='LoanEntry';
this.QV_7536_43842.appendRecords=false;
this.QV_7536_43842.rowDetail=false;
this.QV_7536_43842.columnMenu = true;
this.QV_7536_43842.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_7536_43842.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_7536_43842.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXWQQ_927129",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 450,
properties :
{
id :'VA_TEXTINPUTBOXWQQ_927129',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'LoanEntry',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPWL_897129",
label : cobis.translate('ASSTS.LBL_ASSTS_RUBROFKGQ_42963'),
field : 'concept',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXPWL_897129',
name :'concept',
withoutLabel : true,
attribute : 'concept',
entity : 'LoanEntry',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGZZ_547129",
label : cobis.translate('ASSTS.LBL_ASSTS_FPAGORPAW_90895'),
field : 'paymentMethod',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXGZZ_547129',
name :'paymentMethod',
withoutLabel : true,
attribute : 'paymentMethod',
entity : 'LoanEntry',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXELD_365129",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPORUBRR_96500'),
field : 'itemType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXELD_365129',
name :'itemType',
withoutLabel : true,
attribute : 'itemType',
entity : 'LoanEntry',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUKJ_377129",
label : cobis.translate('ASSTS.LBL_ASSTS_PRIORIDDD_58504'),
field : 'priority',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXUKJ_377129',
name :'priority',
withoutLabel : true,
attribute : 'priority',
entity : 'LoanEntry',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVJT_905129",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORNPRH_26284'),
field : 'value',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXVJT_905129',
name :'value',
withoutLabel : true,
attribute : 'value',
entity : 'LoanEntry',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPWU_574129",
label : cobis.translate('ASSTS.LBL_ASSTS_PAGAMORAA_45490'),
field : 'latePayment',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXPWU_574129',
name :'latePayment',
withoutLabel : true,
attribute : 'latePayment',
entity : 'LoanEntry',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEHI_505129",
label : cobis.translate('ASSTS.LBL_ASSTS_REFERENAI_72258'),
field : 'reference',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXEHI_505129',
name :'reference',
withoutLabel : true,
attribute : 'reference',
entity : 'LoanEntry',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUAW_754129",
label : cobis.translate('ASSTS.LBL_ASSTS_SIGNORIHO_57042'),
field : 'sign',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUAW_754129',
name :'sign',
withoutLabel : true,
attribute : 'sign',
entity : 'LoanEntry',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRPV_709129",
label : cobis.translate('ASSTS.LBL_ASSTS_CAUSAWSDF_28774'),
field : 'cause',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRPV_709129',
name :'cause',
withoutLabel : true,
attribute : 'cause',
entity : 'LoanEntry',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXZQ_673129",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORPUSN_71021'),
field : 'pointsValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXXZQ_673129',
name :'pointsValue',
withoutLabel : true,
attribute : 'pointsValue',
entity : 'LoanEntry',
format : '###.###### \\%',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZDB_612129",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOPUNSS_34777'),
field : 'pointsType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXZDB_612129',
name :'pointsType',
withoutLabel : true,
attribute : 'pointsType',
entity : 'LoanEntry',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBHL_158129",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORTAAT_13849'),
field : 'valueTotalRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBHL_158129',
name :'valueTotalRate',
withoutLabel : true,
attribute : 'valueTotalRate',
entity : 'LoanEntry',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGKJ_582129",
label : cobis.translate('ASSTS.LBL_ASSTS_TASANEGCD_62769'),
field : 'negotiatedRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXGKJ_582129',
name :'negotiatedRate',
withoutLabel : true,
attribute : 'negotiatedRate',
entity : 'LoanEntry',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXILF_690129",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAEFECA_65157'),
field : 'annualEfecRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXILF_690129',
name :'annualEfecRate',
withoutLabel : true,
attribute : 'annualEfecRate',
entity : 'LoanEntry',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAOL_704129",
label : cobis.translate('ASSTS.LBL_ASSTS_SIGNOREJJ_83381'),
field : 'reajustmenSign',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAOL_704129',
name :'reajustmenSign',
withoutLabel : true,
attribute : 'reajustmenSign',
entity : 'LoanEntry',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLYN_413129",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORPUSS_38342'),
field : 'reajustmentValuePoints',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLYN_413129',
name :'reajustmentValuePoints',
withoutLabel : true,
attribute : 'reajustmentValuePoints',
entity : 'LoanEntry',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIGC_163129",
label : cobis.translate('ASSTS.LBL_ASSTS_REFERENAI_46054'),
field : 'reajustmentReference',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIGC_163129',
name :'reajustmentReference',
withoutLabel : true,
attribute : 'reajustmentReference',
entity : 'LoanEntry',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIBA_173129",
label : cobis.translate('ASSTS.LBL_ASSTS_GRACIAVXF_14263'),
field : 'gain',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIBA_173129',
name :'gain',
withoutLabel : true,
attribute : 'gain',
entity : 'LoanEntry',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPTQ_834129",
label : cobis.translate('ASSTS.LBL_ASSTS_BASECLCLU_56377'),
field : 'baseCalculation',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXPTQ_834129',
name :'baseCalculation',
withoutLabel : true,
attribute : 'baseCalculation',
entity : 'LoanEntry',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNUQ_510129",
label : cobis.translate('ASSTS.LBL_ASSTS_PORCOBRRM_45131'),
field : 'chargeForRinging',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNUQ_510129',
name :'chargeForRinging',
withoutLabel : true,
attribute : 'chargeForRinging',
entity : 'LoanEntry',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYID_261129",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOGARAT_87847'),
field : 'warrantyType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXYID_261129',
name :'warrantyType',
withoutLabel : true,
attribute : 'warrantyType',
entity : 'LoanEntry',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBRS_263129",
label : cobis.translate('ASSTS.LBL_ASSTS_NROGARATA_77976'),
field : 'warrantyNumber',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBRS_263129',
name :'warrantyNumber',
withoutLabel : true,
attribute : 'warrantyNumber',
entity : 'LoanEntry',
maxlength: 24,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTRE_710129",
label : cobis.translate('ASSTS.LBL_ASSTS_COBERTUGA_99369'),
field : 'coveragePercentage',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXTRE_710129',
name :'coveragePercentage',
withoutLabel : true,
attribute : 'coveragePercentage',
entity : 'LoanEntry',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTXW_242129",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORGANA_72320'),
field : 'warrantyValue',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTXW_242129',
name :'warrantyValue',
withoutLabel : true,
attribute : 'warrantyValue',
entity : 'LoanEntry',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJJD_513129",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPODIVOE_98503'),
field : 'dividendType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXJJD_513129',
name :'dividendType',
withoutLabel : true,
attribute : 'dividendType',
entity : 'LoanEntry',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBFF_919129",
label : cobis.translate('ASSTS.LBL_ASSTS_NOPERIODT_82606'),
field : 'interestPeriod',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXBFF_919129',
name :'interestPeriod',
withoutLabel : true,
attribute : 'interestPeriod',
entity : 'LoanEntry',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOBK_430129",
label : cobis.translate('ASSTS.LBL_ASSTS_TABLAOTSS_47101'),
field : 'tableOtherRate',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOBK_430129',
name :'tableOtherRate',
withoutLabel : true,
attribute : 'tableOtherRate',
entity : 'LoanEntry',
maxlength: 30,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_COMBOBOXHRNMMDE_659129",
label : cobis.translate('ASSTS.LBL_ASSTS_FINANCIAO_40117'),
field : 'financed',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_COMBOBOXHRNMMDE_659129',
name :'financed',
attribute : 'financed',
entity : 'LoanEntry',
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
id : "VA_TEXTINPUTBOXZVO_565129",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAMINZJ_60465'),
field : 'minRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZVO_565129',
name :'minRate',
withoutLabel : true,
attribute : 'minRate',
entity : 'LoanEntry',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYXS_454129",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAMAXLW_11434'),
field : 'maxRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYXS_454129',
name :'maxRate',
withoutLabel : true,
attribute : 'maxRate',
entity : 'LoanEntry',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ITEMSLOANSUXI_712 = this.formBuilder.group({
LoanEntry: this.formBuilder.group({
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXWQQ_927129')],
concept:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXPWL_897129')],
paymentMethod:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXGZZ_547129')],
itemType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXELD_365129')],
priority:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXUKJ_377129')],
value:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXVJT_905129')],
latePayment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXPWU_574129')],
reference:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXEHI_505129')],
sign:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXUAW_754129')],
cause:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXRPV_709129')],
pointsValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXXZQ_673129')],
pointsType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXZDB_612129')],
valueTotalRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXBHL_158129')],
negotiatedRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXGKJ_582129')],
annualEfecRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXILF_690129')],
reajustmenSign:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXAOL_704129')],
reajustmentValuePoints:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXLYN_413129')],
reajustmentReference:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXIGC_163129')],
gain:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXIBA_173129')],
baseCalculation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXPTQ_834129')],
chargeForRinging:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXNUQ_510129')],
warrantyType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXYID_261129')],
warrantyNumber:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXBRS_263129')],
coveragePercentage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXTRE_710129')],
warrantyValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXTXW_242129')],
dividendType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXJJD_513129')],
interestPeriod:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXBFF_919129')],
tableOtherRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXOBK_430129')],
financed:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_COMBOBOXHRNMMDE_659129')],
minRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXZVO_565129')],
maxRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7536_43842.columns,'VA_TEXTINPUTBOXYXS_454129')],
}
),
});
}
}