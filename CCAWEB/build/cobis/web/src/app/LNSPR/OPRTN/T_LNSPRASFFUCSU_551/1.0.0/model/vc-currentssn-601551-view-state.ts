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
public T_LNSPRASFFUCSU_551!:FormGroup;
public VC_CURRENTSSN_601551:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_CURRENTSUL_573928 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_CURRENTUAN_658928 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_CURRENTNUA_670928 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_HQ80_NZX99: CobisGridModel = new CobisGridModel();
public G_CURRENTUAN_658928_default_blank: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_CURRENTSSN_601551.id="VC_CURRENTSSN_601551";
this.VC_CURRENTSSN_601551.name="CurrentStatusLineForm";
this.VC_CURRENTSSN_601551.colSpan=1;
this.VC_CURRENTSSN_601551.columns=1;
this.VC_CURRENTSSN_601551.enabled=ConstantsApi.mode.All;
this.G_CURRENTSUL_573928.id="G_CURRENTSUL_573928";
this.G_CURRENTSUL_573928.name="GroupLayout1274";
this.G_CURRENTSUL_573928.columns=2;
this.G_CURRENTSUL_573928.childrenGroups = ["G_CURRENTUAN_658928","G_CURRENTNUA_670928"];
this.G_CURRENTSUL_573928.colSpan=1;
this.G_CURRENTSUL_573928.enabled=ConstantsApi.mode.All;
this.G_CURRENTSUL_573928.visible=ConstantsApi.mode.All;
this.G_CURRENTUAN_658928.id="G_CURRENTUAN_658928";
this.G_CURRENTUAN_658928.name="Group2166";
this.G_CURRENTUAN_658928.columns=3;
this.G_CURRENTUAN_658928.labelOrientation="Top";
this.G_CURRENTUAN_658928.colSpan=1;
this.G_CURRENTUAN_658928.enabled=ConstantsApi.mode.All;
this.G_CURRENTUAN_658928.visible=ConstantsApi.mode.All;
this.G_CURRENTNUA_670928.id="G_CURRENTNUA_670928";
this.G_CURRENTNUA_670928.label=cobis.translate("LNSPR.LBL_LNSPR_RESUMENSH_39385");
this.G_CURRENTNUA_670928.name="Group2272";
this.G_CURRENTNUA_670928.columns=1;
this.G_CURRENTNUA_670928.labelOrientation="Top";
this.G_CURRENTNUA_670928.colSpan=1;
this.G_CURRENTNUA_670928.enabled=ConstantsApi.mode.All;
this.G_CURRENTNUA_670928.visible=ConstantsApi.mode.All;
this.G_CURRENTNUA_670928.attList = ["product","codMoney","descMoney","approved","used","available","currencyQuote"];
this.G_CURRENTUAN_658928_default_blank.id = "G_CURRENTUAN_658928_default_blank";
this.G_CURRENTUAN_658928_default_blank.name = "G_CURRENTUAN_658928_default_blank";
this.G_CURRENTUAN_658928_default_blank.colSpan = 1;
this.G_CURRENTUAN_658928_default_blank.visible= ConstantsApi.mode.All;
this.QV_HQ80_NZX99.pageSize=5;
this.QV_HQ80_NZX99.id='QV_HQ80_NZX99';
this.QV_HQ80_NZX99.name='QV_HQ80_NZX99';
this.QV_HQ80_NZX99.pageable=true;
this.QV_HQ80_NZX99.sortable=false;
this.QV_HQ80_NZX99.resizable=true;
this.QV_HQ80_NZX99.scrollable=true
this.QV_HQ80_NZX99.confirmRowDeletion=false;
this.QV_HQ80_NZX99.exportToExcel=false;
this.QV_HQ80_NZX99.exportToPdf=false;
this.QV_HQ80_NZX99.height=0;
this.QV_HQ80_NZX99.filterableColumns=false;
this.QV_HQ80_NZX99.entityName='SummaryStatus';
this.QV_HQ80_NZX99.appendRecords=true;
this.QV_HQ80_NZX99.rowDetail=false;
this.QV_HQ80_NZX99.columnMenu = true;
this.QV_HQ80_NZX99.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_HQ80_NZX99.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_HQ80_NZX99.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXEXF_996928",
label : cobis.translate('LNSPR.LBL_LOANS_PRODUCTOO_67575'),
field : 'product',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEXF_996928',
name :'product',
withoutLabel : true,
attribute : 'product',
entity : 'SummaryStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIDH_851928",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'descMoney',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIDH_851928',
name :'descMoney',
withoutLabel : true,
attribute : 'descMoney',
entity : 'SummaryStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQRS_250928",
label : cobis.translate('LNSPR.LBL_LNSPR_APROBADOO_26217'),
field : 'approved',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQRS_250928',
name :'approved',
withoutLabel : true,
attribute : 'approved',
entity : 'SummaryStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXURM_280928",
label : cobis.translate('LNSPR.LBL_LOANS_UTILIZAOO_53309'),
field : 'used',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXURM_280928',
name :'used',
withoutLabel : true,
attribute : 'used',
entity : 'SummaryStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDMY_107928",
label : cobis.translate('LNSPR.LBL_LNSPR_DISPONILE_55740'),
field : 'available',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDMY_107928',
name :'available',
withoutLabel : true,
attribute : 'available',
entity : 'SummaryStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDDA_394928",
label : cobis.translate('LNSPR.LBL_LNSPR_COTIZMVEW_51468'),
field : 'currencyQuote',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDDA_394928',
name :'currencyQuote',
withoutLabel : true,
attribute : 'currencyQuote',
entity : 'SummaryStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRASFFUCSU_551 = this.formBuilder.group({
SummaryStatus: this.formBuilder.group({
product:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HQ80_NZX99.columns,'VA_TEXTINPUTBOXEXF_996928')],
codMoney:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HQ80_NZX99.columns,'VA_TEXTINPUTBOXSPG_308928')],
descMoney:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HQ80_NZX99.columns,'VA_TEXTINPUTBOXIDH_851928')],
approved:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HQ80_NZX99.columns,'VA_TEXTINPUTBOXQRS_250928')],
used:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HQ80_NZX99.columns,'VA_TEXTINPUTBOXURM_280928')],
available:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HQ80_NZX99.columns,'VA_TEXTINPUTBOXDMY_107928')],
currencyQuote:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HQ80_NZX99.columns,'VA_TEXTINPUTBOXDDA_394928')],
}
),
});
}
}