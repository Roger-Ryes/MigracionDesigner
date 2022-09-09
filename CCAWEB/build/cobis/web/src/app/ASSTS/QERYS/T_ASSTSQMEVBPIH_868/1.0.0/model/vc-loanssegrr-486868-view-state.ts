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
public T_ASSTSQMEVBPIH_868!:FormGroup;
public VC_LOANSSEGRR_486868:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSSEOOU_266929 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_DF84_XNN39: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSSEGRR_486868.id="VC_LOANSSEGRR_486868";
this.VC_LOANSSEGRR_486868.name="QueryLoansSeguro";
this.VC_LOANSSEGRR_486868.colSpan=1;
this.VC_LOANSSEGRR_486868.columns=1;
this.VC_LOANSSEGRR_486868.enabled=ConstantsApi.mode.All;
this.G_LOANSSEOOU_266929.id="G_LOANSSEOOU_266929";
this.G_LOANSSEOOU_266929.name="Group1467";
this.G_LOANSSEOOU_266929.columns=1;
this.G_LOANSSEOOU_266929.labelOrientation="Top";
this.G_LOANSSEOOU_266929.colSpan=1;
this.G_LOANSSEOOU_266929.enabled=ConstantsApi.mode.All;
this.G_LOANSSEOOU_266929.visible=ConstantsApi.mode.All;
this.G_LOANSSEOOU_266929.attList = ["group","loanID","loanBankID","clientID","clientName","typeID","type","amount","dateValidityIni","dateValidityFin","term","folio","statusDesc"];
this.QV_DF84_XNN39.pageSize=10;
this.QV_DF84_XNN39.id='QV_DF84_XNN39';
this.QV_DF84_XNN39.name='QV_DF84_XNN39';
this.QV_DF84_XNN39.pageable=true;
this.QV_DF84_XNN39.sortable=false;
this.QV_DF84_XNN39.resizable=true;
this.QV_DF84_XNN39.scrollable=true
this.QV_DF84_XNN39.confirmRowDeletion=false;
this.QV_DF84_XNN39.exportToExcel=false;
this.QV_DF84_XNN39.exportToPdf=false;
this.QV_DF84_XNN39.height=0;
this.QV_DF84_XNN39.filterableColumns=false;
this.QV_DF84_XNN39.entityName='Seguros';
this.QV_DF84_XNN39.appendRecords=false;
this.QV_DF84_XNN39.rowDetail=false;
this.QV_DF84_XNN39.columnMenu = true;
this.QV_DF84_XNN39.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_DF84_XNN39.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_DF84_XNN39.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXPJQ_765929",
label : cobis.translate('ASSTS.LBL_ASSTS_CLIENTEMG_56892'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 250,
properties :
{
id :'VA_TEXTINPUTBOXPJQ_765929',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'Seguros',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWWS_842929",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOSEGUU_33394'),
field : 'type',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXWWS_842929',
name :'type',
withoutLabel : true,
attribute : 'type',
entity : 'Seguros',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDST_681929",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOEMFX_52083'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXDST_681929',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'Seguros',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDDLSZDZ_593929",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVINN_83098'),
field : 'dateValidityIni',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties : {
id :'VA_DATEFIELDDLSZDZ_593929',
name :'dateValidityIni',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'dateValidityIni',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Seguros',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_DATEFIELDLZIUTE_366929",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVINF_89760'),
field : 'dateValidityFin',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties : {
id :'VA_DATEFIELDLZIUTE_366929',
name :'dateValidityFin',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'dateValidityFin',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Seguros',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXPLX_826929",
label : cobis.translate('ASSTS.LBL_ASSTS_FOLIOYLJO_43258'),
field : 'folio',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXPLX_826929',
name :'folio',
withoutLabel : true,
attribute : 'folio',
entity : 'Seguros',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLNM_225929",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'statusDesc',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXLNM_225929',
name :'statusDesc',
withoutLabel : true,
attribute : 'statusDesc',
entity : 'Seguros',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSQMEVBPIH_868 = this.formBuilder.group({
Seguros: this.formBuilder.group({
group:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXBPH_891929')],
loanID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXNZI_518929')],
loanBankID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXJWY_848929')],
clientID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXIQK_851929')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXPJQ_765929')],
typeID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXOCT_289929')],
type:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXWWS_842929')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXDST_681929')],
dateValidityIni:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_DATEFIELDDLSZDZ_593929')],
dateValidityFin:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_DATEFIELDLZIUTE_366929')],
term:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXKEL_574929')],
folio:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXPLX_826929')],
statusDesc:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_DF84_XNN39.columns,'VA_TEXTINPUTBOXLNM_225929')],
}
),
});
}
}