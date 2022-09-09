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
public T_ASSTSZHWXXEQV_571!:FormGroup;
public VC_LOANSBENIF_286571:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSBENCE_363269 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_RL77_QHL37: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSBENIF_286571.id="VC_LOANSBENIF_286571";
this.VC_LOANSBENIF_286571.name="QueryLoansBeneficiario";
this.VC_LOANSBENIF_286571.colSpan=1;
this.VC_LOANSBENIF_286571.columns=1;
this.VC_LOANSBENIF_286571.enabled=ConstantsApi.mode.All;
this.G_LOANSBENCE_363269.id="G_LOANSBENCE_363269";
this.G_LOANSBENCE_363269.name="Group1802";
this.G_LOANSBENCE_363269.columns=1;
this.G_LOANSBENCE_363269.labelOrientation="Top";
this.G_LOANSBENCE_363269.colSpan=1;
this.G_LOANSBENCE_363269.enabled=ConstantsApi.mode.All;
this.G_LOANSBENCE_363269.visible=ConstantsApi.mode.All;
this.G_LOANSBENCE_363269.attList = ["clientName","birthDate","percentage","relationShip","address","postalCode","telephone","loanID","product","sequence","typeID","cedID","clientID","relationShipID","loanBankID"];
this.QV_RL77_QHL37.pageSize=10;
this.QV_RL77_QHL37.id='QV_RL77_QHL37';
this.QV_RL77_QHL37.name='QV_RL77_QHL37';
this.QV_RL77_QHL37.pageable=true;
this.QV_RL77_QHL37.sortable=false;
this.QV_RL77_QHL37.resizable=false;
this.QV_RL77_QHL37.scrollable=true
this.QV_RL77_QHL37.confirmRowDeletion=false;
this.QV_RL77_QHL37.exportToExcel=false;
this.QV_RL77_QHL37.exportToPdf=false;
this.QV_RL77_QHL37.height=0;
this.QV_RL77_QHL37.filterableColumns=false;
this.QV_RL77_QHL37.entityName='Beneficiaro';
this.QV_RL77_QHL37.appendRecords=false;
this.QV_RL77_QHL37.rowDetail=false;
this.QV_RL77_QHL37.columnMenu = true;
this.QV_RL77_QHL37.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_RL77_QHL37.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_RL77_QHL37.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXHHG_980269",
label : cobis.translate('ASSTS.LBL_ASSTS_BENEFICII_99714'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 250,
properties :
{
id :'VA_TEXTINPUTBOXHHG_980269',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'Beneficiaro',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDMQJRVD_441269",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHANAME_52426'),
field : 'birthDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 130,
properties : {
id :'VA_DATEFIELDMQJRVD_441269',
name :'birthDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'birthDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Beneficiaro',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXUBX_184269",
label : cobis.translate('ASSTS.LBL_ASSTS_PORCENTAE_66428'),
field : 'percentage',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXUBX_184269',
name :'percentage',
withoutLabel : true,
attribute : 'percentage',
entity : 'Beneficiaro',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQMW_346269",
label : cobis.translate('ASSTS.LBL_ASSTS_PARENTEOS_75242'),
field : 'relationShip',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQMW_346269',
name :'relationShip',
withoutLabel : true,
attribute : 'relationShip',
entity : 'Beneficiaro',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXABQ_978269",
label : cobis.translate('ASSTS.LBL_ASSTS_DIRECCINN_30768'),
field : 'address',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 250,
properties :
{
id :'VA_TEXTINPUTBOXABQ_978269',
name :'address',
withoutLabel : true,
attribute : 'address',
entity : 'Beneficiaro',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFBM_352269",
label : cobis.translate('ASSTS.LBL_ASSTS_CDIGOPOST_81106'),
field : 'postalCode',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXFBM_352269',
name :'postalCode',
withoutLabel : true,
attribute : 'postalCode',
entity : 'Beneficiaro',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSZF_742269",
label : cobis.translate('ASSTS.LBL_ASSTS_TELFONOPO_65834'),
field : 'telephone',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXSZF_742269',
name :'telephone',
withoutLabel : true,
attribute : 'telephone',
entity : 'Beneficiaro',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSZHWXXEQV_571 = this.formBuilder.group({
Beneficiaro: this.formBuilder.group({
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXHHG_980269')],
birthDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_DATEFIELDMQJRVD_441269')],
percentage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXUBX_184269')],
relationShip:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXQMW_346269')],
address:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXABQ_978269')],
postalCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXFBM_352269')],
telephone:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXSZF_742269')],
loanID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXMAF_781269')],
product:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXCLV_354269')],
sequence:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXFZI_184269')],
typeID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXXKA_526269')],
cedID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXDGI_776269')],
clientID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXZNT_599269')],
relationShipID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXXBW_467269')],
loanBankID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RL77_QHL37.columns,'VA_TEXTINPUTBOXNXS_958269')],
}
),
});
}
}