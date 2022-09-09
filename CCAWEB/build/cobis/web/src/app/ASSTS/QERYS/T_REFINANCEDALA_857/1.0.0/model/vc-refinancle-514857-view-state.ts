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
public T_REFINANCEDALA_857!:FormGroup;
public VC_REFINANCLE_514857:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REFINANSDE_580587 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_1949_60600: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_REFINANCLE_514857.id="VC_REFINANCLE_514857";
this.VC_REFINANCLE_514857.name="RefinancedLoansForm";
this.VC_REFINANCLE_514857.colSpan=1;
this.VC_REFINANCLE_514857.columns=1;
this.VC_REFINANCLE_514857.enabled=ConstantsApi.mode.All;
this.G_REFINANSDE_580587.id="G_REFINANSDE_580587";
this.G_REFINANSDE_580587.name="Group1922";
this.G_REFINANSDE_580587.columns=1;
this.G_REFINANSDE_580587.labelOrientation="Top";
this.G_REFINANSDE_580587.colSpan=1;
this.G_REFINANSDE_580587.enabled=ConstantsApi.mode.All;
this.G_REFINANSDE_580587.visible=ConstantsApi.mode.All;
this.G_REFINANSDE_580587.attList = ["transactionID","type","loan","initialAmount","totalToRefinance","line","officialID"];
this.QV_1949_60600.pageSize=10;
this.QV_1949_60600.id='QV_1949_60600';
this.QV_1949_60600.name='QV_1949_60600';
this.QV_1949_60600.pageable=true;
this.QV_1949_60600.sortable=false;
this.QV_1949_60600.resizable=true;
this.QV_1949_60600.scrollable=true
this.QV_1949_60600.confirmRowDeletion=false;
this.QV_1949_60600.exportToExcel=false;
this.QV_1949_60600.exportToPdf=false;
this.QV_1949_60600.height=0;
this.QV_1949_60600.filterableColumns=false;
this.QV_1949_60600.entityName='RefinanceLoans';
this.QV_1949_60600.appendRecords=false;
this.QV_1949_60600.rowDetail=false;
this.QV_1949_60600.columnMenu = true;
this.QV_1949_60600.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_1949_60600.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_1949_60600.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXICW_312587",
label : cobis.translate('ASSTS.LBL_ASSTS_TRAMITEDA_19554'),
field : 'transactionID',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXICW_312587',
name :'transactionID',
withoutLabel : true,
attribute : 'transactionID',
entity : 'RefinanceLoans',
format : '#',
maxlength: 4,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWTS_867587",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOLDSKB_46090'),
field : 'type',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWTS_867587',
name :'type',
withoutLabel : true,
attribute : 'type',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLUN_357587",
label : cobis.translate('ASSTS.LBL_ASSTS_OPERACION_46998'),
field : 'loan',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLUN_357587',
name :'loan',
withoutLabel : true,
attribute : 'loan',
entity : 'RefinanceLoans',
maxlength: 16,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDPQ_833587",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOORGI_46642'),
field : 'initialAmount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDPQ_833587',
name :'initialAmount',
withoutLabel : true,
attribute : 'initialAmount',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFFS_866587",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDORENN_27297'),
field : 'totalToRefinance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFFS_866587',
name :'totalToRefinance',
withoutLabel : true,
attribute : 'totalToRefinance',
entity : 'RefinanceLoans',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJOJ_919587",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOCREDT_20131'),
field : 'line',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXJOJ_919587',
name :'line',
withoutLabel : true,
attribute : 'line',
entity : 'RefinanceLoans',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOYD_123587",
label : cobis.translate('ASSTS.LBL_ASSTS_FUNCIONRA_97040'),
field : 'officialID',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOYD_123587',
name :'officialID',
withoutLabel : true,
attribute : 'officialID',
entity : 'RefinanceLoans',
maxlength: 14,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_REFINANCEDALA_857 = this.formBuilder.group({
RefinanceLoans: this.formBuilder.group({
transactionID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1949_60600.columns,'VA_TEXTINPUTBOXICW_312587')],
type:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1949_60600.columns,'VA_TEXTINPUTBOXWTS_867587')],
loan:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1949_60600.columns,'VA_TEXTINPUTBOXLUN_357587')],
initialAmount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1949_60600.columns,'VA_TEXTINPUTBOXDPQ_833587')],
totalToRefinance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1949_60600.columns,'VA_TEXTINPUTBOXFFS_866587')],
line:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1949_60600.columns,'VA_TEXTINPUTBOXJOJ_919587')],
officialID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1949_60600.columns,'VA_TEXTINPUTBOXOYD_123587')],
selected:[null],
totalBalance:[null],
procedureId:[null],
otherConceptsBalance:[null],
overdueFees:[null],
loanStatus:[null],
currencyType:[null],
originalTerm:[null],
quotation:[null],
currencyCode:[null],
defaultBalance:[null],
interestBalance:[null],
capitalBalance:[null],
residualTerm:[null],
}
),
});
}
}