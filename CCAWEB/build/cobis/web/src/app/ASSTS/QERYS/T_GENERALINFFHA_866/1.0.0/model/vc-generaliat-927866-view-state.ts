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
public T_GENERALINFFHA_866!:FormGroup;
public VC_GENERALIAT_927866:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALHEE_422344 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALILC_131344 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALCRN_654344 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_6100_21620: CobisGridModel = new CobisGridModel();
public G_GENERALILC_131344_default_blank: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_GENERALIAT_927866.id="VC_GENERALIAT_927866";
this.VC_GENERALIAT_927866.name="GeneralInfoLeftChartForm";
this.VC_GENERALIAT_927866.colSpan=1;
this.VC_GENERALIAT_927866.columns=1;
this.VC_GENERALIAT_927866.enabled=ConstantsApi.mode.All;
this.G_GENERALHEE_422344.id="G_GENERALHEE_422344";
this.G_GENERALHEE_422344.name="GroupLayout1594";
this.G_GENERALHEE_422344.columns=2;
this.G_GENERALHEE_422344.childrenGroups = ["G_GENERALILC_131344","G_GENERALCRN_654344"];
this.G_GENERALHEE_422344.colSpan=1;
this.G_GENERALHEE_422344.enabled=ConstantsApi.mode.All;
this.G_GENERALHEE_422344.visible=ConstantsApi.mode.All;
this.G_GENERALILC_131344.id="G_GENERALILC_131344";
this.G_GENERALILC_131344.name="Group1452";
this.G_GENERALILC_131344.columns=3;
this.G_GENERALILC_131344.labelOrientation="Top";
this.G_GENERALILC_131344.colSpan=1;
this.G_GENERALILC_131344.enabled=ConstantsApi.mode.All;
this.G_GENERALILC_131344.visible=ConstantsApi.mode.All;
this.G_GENERALCRN_654344.id="G_GENERALCRN_654344";
this.G_GENERALCRN_654344.label=cobis.translate("ASSTS.LBL_ASSTS_RESUMENSN_25970");
this.G_GENERALCRN_654344.name="Group1774";
this.G_GENERALCRN_654344.columns=1;
this.G_GENERALCRN_654344.labelOrientation="Top";
this.G_GENERALCRN_654344.colSpan=1;
this.G_GENERALCRN_654344.enabled=ConstantsApi.mode.All;
this.G_GENERALCRN_654344.visible=ConstantsApi.mode.All;
this.G_GENERALCRN_654344.attList = ["statusAmortization","capital","interestArrear","otherItems","total","numberPayments","arrear","interest"];
this.G_GENERALILC_131344_default_blank.id = "G_GENERALILC_131344_default_blank";
this.G_GENERALILC_131344_default_blank.name = "G_GENERALILC_131344_default_blank";
this.G_GENERALILC_131344_default_blank.colSpan = 1;
this.G_GENERALILC_131344_default_blank.visible= ConstantsApi.mode.All;
this.QV_6100_21620.id='QV_6100_21620';
this.QV_6100_21620.name='QV_6100_21620';
this.QV_6100_21620.pageable=false;
this.QV_6100_21620.sortable=false;
this.QV_6100_21620.resizable=false;
this.QV_6100_21620.scrollable=true
this.QV_6100_21620.confirmRowDeletion=false;
this.QV_6100_21620.exportToExcel=false;
this.QV_6100_21620.exportToPdf=false;
this.QV_6100_21620.height=0;
this.QV_6100_21620.filterableColumns=false;
this.QV_6100_21620.entityName='SummaryLoanStatus';
this.QV_6100_21620.appendRecords=false;
this.QV_6100_21620.rowDetail=false;
this.QV_6100_21620.columnMenu = true;
this.QV_6100_21620.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_6100_21620.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_6100_21620.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXTMD_417344",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'statusAmortization',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 130,
properties :
{
id :'VA_TEXTINPUTBOXTMD_417344',
name :'statusAmortization',
withoutLabel : true,
attribute : 'statusAmortization',
entity : 'SummaryLoanStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMWX_470344",
label : cobis.translate('ASSTS.LBL_ASSTS_CAPITALBZ_88457'),
field : 'capital',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXMWX_470344',
name :'capital',
withoutLabel : true,
attribute : 'capital',
entity : 'SummaryLoanStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNHL_435344",
label : cobis.translate('ASSTS.LBL_ASSTS_INTERESWJ_80123'),
field : 'interestArrear',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXNHL_435344',
name :'interestArrear',
withoutLabel : true,
attribute : 'interestArrear',
entity : 'SummaryLoanStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWXQ_508344",
label : cobis.translate('ASSTS.LBL_ASSTS_OTROSRYRP_40547'),
field : 'otherItems',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 80,
properties :
{
id :'VA_TEXTINPUTBOXWXQ_508344',
name :'otherItems',
withoutLabel : true,
attribute : 'otherItems',
entity : 'SummaryLoanStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJLV_306344",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALBPNF_51557'),
field : 'total',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXJLV_306344',
name :'total',
withoutLabel : true,
attribute : 'total',
entity : 'SummaryLoanStatus',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_GENERALINFFHA_866 = this.formBuilder.group({
SummaryLoanStatus: this.formBuilder.group({
statusAmortization:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6100_21620.columns,'VA_TEXTINPUTBOXTMD_417344')],
capital:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6100_21620.columns,'VA_TEXTINPUTBOXMWX_470344')],
interestArrear:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6100_21620.columns,'VA_TEXTINPUTBOXNHL_435344')],
otherItems:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6100_21620.columns,'VA_TEXTINPUTBOXWXQ_508344')],
total:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6100_21620.columns,'VA_TEXTINPUTBOXJLV_306344')],
numberPayments:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6100_21620.columns,'VA_TEXTINPUTBOXRMW_550344')],
arrear:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6100_21620.columns,'VA_TEXTINPUTBOXYPA_189344')],
interest:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6100_21620.columns,'VA_TEXTINPUTBOXNJT_993344')],
}
),
});
}
}