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
public T_ASSTSPENVMXNQ_619!:FormGroup;
public VC_PROJECTIRJ_862619:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTENT_572798 : CobisTabbedLayoutContainerModel = new CobisTabbedLayoutContainerModel();
public G_PROJECTNTR_773798_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_PROJECTNTR_773798 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTNDI_257798_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_PROJECTNDI_257798 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTROE_758798 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTOAS_769798 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTSIE_690798_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_PROJECTSIE_690798 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTIEM_631798 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTETN_881798 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_EB77_IIB88: CobisGridModel = new CobisGridModel();
public Spacer2930: CobisSpacerModel = new CobisSpacerModel();
public G_PROJECTROE_758798_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_PROJECTOAS_769798_default_blank: CobisSpacerModel = new CobisSpacerModel();
public VA_DATEREADJUSTNEM_341798: CobisDateFieldModel = new CobisDateFieldModel();
public VA_PERCENTAGEKQGYS_540798: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public CM_TASSTSPE_16S: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSPE_87R: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PROJECTIRJ_862619.id="VC_PROJECTIRJ_862619";
this.VC_PROJECTIRJ_862619.name="ProjectionReadjustmentForm";
this.VC_PROJECTIRJ_862619.colSpan=1;
this.VC_PROJECTIRJ_862619.columns=1;
this.VC_PROJECTIRJ_862619.enabled=ConstantsApi.mode.All;
this.G_PROJECTENT_572798.id="G_PROJECTENT_572798";
this.G_PROJECTENT_572798.name="ProjectionReadjustmentForm";
this.G_PROJECTENT_572798.tabPosition=PositionTab.TOP;
this.G_PROJECTENT_572798.enabled=ConstantsApi.mode.All;
this.G_PROJECTENT_572798.childrenGroups = ["G_PROJECTNTR_773798_tab","G_PROJECTNDI_257798_tab","G_PROJECTSIE_690798_tab"];
this.G_PROJECTNTR_773798_tab.id="G_PROJECTNTR_773798_tab";
this.G_PROJECTNTR_773798_tab.label=cobis.translate("ASSTS.LBL_ASSTS_TABLAAMZR_85560");
this.G_PROJECTNTR_773798_tab.childrenGroups = ['G_PROJECTNTR_773798'];
this.G_PROJECTNTR_773798_tab.colSpan=1;
this.G_PROJECTNTR_773798_tab.enabled=ConstantsApi.mode.All;
this.G_PROJECTNTR_773798_tab.visible=ConstantsApi.mode.All;
this.G_PROJECTNTR_773798.id="G_PROJECTNTR_773798";
this.G_PROJECTNTR_773798.name="Group1356";
this.G_PROJECTNTR_773798.columns=1;
this.G_PROJECTNTR_773798.labelOrientation="Top";
this.G_PROJECTNTR_773798.colSpan=1;
this.G_PROJECTNTR_773798.enabled=ConstantsApi.mode.All;
this.G_PROJECTNTR_773798.visible=ConstantsApi.mode.All;
this.G_PROJECTNDI_257798_tab.id="G_PROJECTNDI_257798_tab";
this.G_PROJECTNDI_257798_tab.label=cobis.translate("ASSTS.LBL_ASSTS_RUBROSYSA_16960");
this.G_PROJECTNDI_257798_tab.childrenGroups = ['G_PROJECTNDI_257798'];
this.G_PROJECTNDI_257798_tab.colSpan=1;
this.G_PROJECTNDI_257798_tab.enabled=ConstantsApi.mode.All;
this.G_PROJECTNDI_257798_tab.visible=ConstantsApi.mode.All;
this.G_PROJECTNDI_257798.id="G_PROJECTNDI_257798";
this.G_PROJECTNDI_257798.name="AccordionLayout1750";
this.G_PROJECTNDI_257798.columns=1;
this.G_PROJECTNDI_257798.childrenGroups = ["G_PROJECTROE_758798","G_PROJECTOAS_769798"];
this.G_PROJECTNDI_257798.colSpan=1;
this.G_PROJECTNDI_257798.enabled=ConstantsApi.mode.All;
this.G_PROJECTNDI_257798.visible=ConstantsApi.mode.All;
this.G_PROJECTROE_758798.id="G_PROJECTROE_758798";
this.G_PROJECTROE_758798.label=cobis.translate("ASSTS.LBL_ASSTS_RUBROSAEW_67124");
this.G_PROJECTROE_758798.name="Group2936";
this.G_PROJECTROE_758798.columns=1;
this.G_PROJECTROE_758798.labelOrientation="Top";
this.G_PROJECTROE_758798.colSpan=1;
this.G_PROJECTROE_758798.enabled=ConstantsApi.mode.All;
this.G_PROJECTROE_758798.visible=ConstantsApi.mode.All;
this.G_PROJECTOAS_769798.id="G_PROJECTOAS_769798";
this.G_PROJECTOAS_769798.label=cobis.translate("ASSTS.LBL_ASSTS_TASASWEXW_63256");
this.G_PROJECTOAS_769798.name="Group2873";
this.G_PROJECTOAS_769798.columns=1;
this.G_PROJECTOAS_769798.labelOrientation="Top";
this.G_PROJECTOAS_769798.colSpan=1;
this.G_PROJECTOAS_769798.enabled=ConstantsApi.mode.All;
this.G_PROJECTOAS_769798.visible=ConstantsApi.mode.All;
this.G_PROJECTSIE_690798_tab.id="G_PROJECTSIE_690798_tab";
this.G_PROJECTSIE_690798_tab.label=cobis.translate("ASSTS.LBL_ASSTS_SIMULACJS_15300");
this.G_PROJECTSIE_690798_tab.childrenGroups = ['G_PROJECTSIE_690798'];
this.G_PROJECTSIE_690798_tab.colSpan=1;
this.G_PROJECTSIE_690798_tab.enabled=ConstantsApi.mode.All;
this.G_PROJECTSIE_690798_tab.visible=ConstantsApi.mode.All;
this.G_PROJECTSIE_690798.id="G_PROJECTSIE_690798";
this.G_PROJECTSIE_690798.name="GroupLayout1541";
this.G_PROJECTSIE_690798.columns=1;
this.G_PROJECTSIE_690798.childrenGroups = ["G_PROJECTIEM_631798","G_PROJECTETN_881798"];
this.G_PROJECTSIE_690798.colSpan=1;
this.G_PROJECTSIE_690798.enabled=ConstantsApi.mode.All;
this.G_PROJECTSIE_690798.visible=ConstantsApi.mode.All;
this.G_PROJECTIEM_631798.id="G_PROJECTIEM_631798";
this.G_PROJECTIEM_631798.name="Group1842";
this.G_PROJECTIEM_631798.columns=4;
this.G_PROJECTIEM_631798.labelOrientation="Top";
this.G_PROJECTIEM_631798.colSpan=1;
this.G_PROJECTIEM_631798.enabled=ConstantsApi.mode.All;
this.G_PROJECTIEM_631798.visible=ConstantsApi.mode.All;
this.G_PROJECTIEM_631798.attList = ["dateReadjustment","percentage"];
this.G_PROJECTETN_881798.id="G_PROJECTETN_881798";
this.G_PROJECTETN_881798.name="Group2286";
this.G_PROJECTETN_881798.columns=1;
this.G_PROJECTETN_881798.labelOrientation="Top";
this.G_PROJECTETN_881798.colSpan=1;
this.G_PROJECTETN_881798.enabled=ConstantsApi.mode.All;
this.G_PROJECTETN_881798.visible=ConstantsApi.mode.All;
this.G_PROJECTETN_881798.attList = ["dividend","saleDate","quotaDay","balance","items1","items2","items3","items4","items5","items6","items7","items8","items9","items10","items11","items12","items13","items14","items15","quota","state","porroga"];
this.CM_TASSTSPE_16S.id = "CM_TASSTSPE_16S";
this.CM_TASSTSPE_16S.name = "Command1";
this.CM_TASSTSPE_16S.causesValidation=true;
this.CM_TASSTSPE_16S.submitOnEnter=false;
this.CM_TASSTSPE_16S.setFocus=false;
this.CM_TASSTSPE_16S.close=false;
this.CM_TASSTSPE_16S.label = cobis.translate("ASSTS.LBL_ASSTS_TRANSMITR_50090");
this.CM_TASSTSPE_16S.enabled = ConstantsApi.mode.All;
this.CM_TASSTSPE_16S.visible= ConstantsApi.mode.All;
this.CM_TASSTSPE_87R.id = "CM_TASSTSPE_87R";
this.CM_TASSTSPE_87R.name = "Command2";
this.CM_TASSTSPE_87R.causesValidation=true;
this.CM_TASSTSPE_87R.submitOnEnter=false;
this.CM_TASSTSPE_87R.setFocus=false;
this.CM_TASSTSPE_87R.close=false;
this.CM_TASSTSPE_87R.label = cobis.translate("ASSTS.LBL_ASSTS_IMPRIMIRR_18630");
this.CM_TASSTSPE_87R.enabled = ConstantsApi.mode.All;
this.CM_TASSTSPE_87R.visible= ConstantsApi.mode.All;
this.Spacer2930.id = "Spacer2930";
this.Spacer2930.name = "Spacer2930";
this.Spacer2930.colSpan = 1;
this.Spacer2930.visible= ConstantsApi.mode.All;
this.G_PROJECTROE_758798_default_blank.id = "G_PROJECTROE_758798_default_blank";
this.G_PROJECTROE_758798_default_blank.name = "G_PROJECTROE_758798_default_blank";
this.G_PROJECTROE_758798_default_blank.colSpan = 1;
this.G_PROJECTROE_758798_default_blank.visible= ConstantsApi.mode.All;
this.G_PROJECTOAS_769798_default_blank.id = "G_PROJECTOAS_769798_default_blank";
this.G_PROJECTOAS_769798_default_blank.name = "G_PROJECTOAS_769798_default_blank";
this.G_PROJECTOAS_769798_default_blank.colSpan = 1;
this.G_PROJECTOAS_769798_default_blank.visible= ConstantsApi.mode.All;
this.VA_DATEREADJUSTNEM_341798.label = cobis.translate("ASSTS.LBL_ASSTS_FECHASILN_40353");
this.VA_DATEREADJUSTNEM_341798.entity = "SearchProjectionReadjustement";
this.VA_DATEREADJUSTNEM_341798.attribute = "dateReadjustment";
this.VA_DATEREADJUSTNEM_341798.name="dateReadjustment";
this.VA_DATEREADJUSTNEM_341798.id="VA_DATEREADJUSTNEM_341798";
this.VA_DATEREADJUSTNEM_341798.colSpan=2;
this.VA_DATEREADJUSTNEM_341798.withoutLabel = false;
this.VA_DATEREADJUSTNEM_341798.readOnly = ConstantsApi.mode.Query;
this.VA_DATEREADJUSTNEM_341798.enabled = ConstantsApi.mode.All;
this.VA_DATEREADJUSTNEM_341798.visible= ConstantsApi.mode.All;
this.VA_DATEREADJUSTNEM_341798.required = true;
this.VA_DATEREADJUSTNEM_341798.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DATEREADJUSTNEM_341798.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_PERCENTAGEKQGYS_540798.label = cobis.translate("ASSTS.LBL_ASSTS_PORCENTST_41449");
this.VA_PERCENTAGEKQGYS_540798.entity = "SearchProjectionReadjustement";
this.VA_PERCENTAGEKQGYS_540798.attribute = "percentage";
this.VA_PERCENTAGEKQGYS_540798.textCase= TextCaseOptions.NONE;
this.VA_PERCENTAGEKQGYS_540798.format= "n";
this.VA_PERCENTAGEKQGYS_540798.name="percentage";
this.VA_PERCENTAGEKQGYS_540798.id="VA_PERCENTAGEKQGYS_540798";
this.VA_PERCENTAGEKQGYS_540798.colSpan=1;
this.VA_PERCENTAGEKQGYS_540798.withoutLabel = false;
this.VA_PERCENTAGEKQGYS_540798.readOnly = ConstantsApi.mode.Query;
this.VA_PERCENTAGEKQGYS_540798.enabled = ConstantsApi.mode.All;
this.VA_PERCENTAGEKQGYS_540798.visible= ConstantsApi.mode.All;
this.VA_PERCENTAGEKQGYS_540798.required = true;
this.VA_PERCENTAGEKQGYS_540798.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0.01','99.99')],[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PERCENTAGEKQGYS_540798.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484'),valueRange: cobis.translate('ASSTS.MSG_ASSTS_VALORFURN_83073')
};
this.QV_EB77_IIB88.pageSize=12;
this.QV_EB77_IIB88.id='QV_EB77_IIB88';
this.QV_EB77_IIB88.name='QV_EB77_IIB88';
this.QV_EB77_IIB88.pageable=true;
this.QV_EB77_IIB88.sortable=false;
this.QV_EB77_IIB88.resizable=true;
this.QV_EB77_IIB88.scrollable=true
this.QV_EB77_IIB88.confirmRowDeletion=false;
this.QV_EB77_IIB88.exportToExcel=true;
this.QV_EB77_IIB88.exportToPdf=false;
this.QV_EB77_IIB88.height=0;
this.QV_EB77_IIB88.filterableColumns=false;
this.QV_EB77_IIB88.entityName='ListProjectionReadjustement';
this.QV_EB77_IIB88.appendRecords=false;
this.QV_EB77_IIB88.rowDetail=false;
this.QV_EB77_IIB88.summarizedBy =[
{field: 'items1', aggregate: 'sum'},
{field: 'items2', aggregate: 'sum'},
{field: 'items3', aggregate: 'sum'},
{field: 'items4', aggregate: 'sum'},
{field: 'items5', aggregate: 'sum'},
{field: 'items6', aggregate: 'sum'},
{field: 'items7', aggregate: 'sum'},
{field: 'items8', aggregate: 'sum'},
{field: 'items9', aggregate: 'sum'},
{field: 'items11', aggregate: 'sum'},
{field: 'items12', aggregate: 'sum'},
{field: 'items13', aggregate: 'sum'},
{field: 'items14', aggregate: 'sum'},
{field: 'items15', aggregate: 'sum'},
{field: 'quota', aggregate: 'sum'}
];
this.QV_EB77_IIB88.columnMenu = true;
this.QV_EB77_IIB88.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_EB77_IIB88.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_EB77_IIB88.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXIRV_798798",
label : cobis.translate('ASSTS.LBL_ASSTS_CUOTAJJEW_83973'),
field : 'dividend',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIRV_798798',
name :'dividend',
withoutLabel : true,
attribute : 'dividend',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJOX_193798",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENO_73738'),
field : 'saleDate',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXJOX_193798',
name :'saleDate',
withoutLabel : true,
attribute : 'saleDate',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVFQ_438798",
label : cobis.translate('ASSTS.LBL_ASSTS_DIASIVQBJ_73578'),
field : 'quotaDay',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 50,
properties :
{
id :'VA_TEXTINPUTBOXVFQ_438798',
name :'quotaDay',
withoutLabel : true,
attribute : 'quotaDay',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEMA_362798",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDOCAPI_87055'),
field : 'balance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXEMA_362798',
name :'balance',
withoutLabel : true,
attribute : 'balance',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXULR_853798",
field : 'items1',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXULR_853798',
name :'dinamyBalance1',
withoutLabel : true,
attribute : 'items1',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXPNQ_361798",
field : 'items2',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXPNQ_361798',
name :'dinamyBalance2',
withoutLabel : true,
attribute : 'items2',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXSDM_686798",
field : 'items3',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXSDM_686798',
name :'dinamyBalance3',
withoutLabel : true,
attribute : 'items3',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXBRK_956798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS4VLE_47341'),
field : 'items4',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXBRK_956798',
name :'dinamyBalance4',
withoutLabel : true,
attribute : 'items4',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXMFC_126798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS5CXM_39896'),
field : 'items5',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXMFC_126798',
name :'dinamyBalance5',
withoutLabel : true,
attribute : 'items5',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXXFA_745798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS6BMJ_40131'),
field : 'items6',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXXFA_745798',
name :'dinamyBalance6',
withoutLabel : true,
attribute : 'items6',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXJHE_279798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS7AWJ_73578'),
field : 'items7',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXJHE_279798',
name :'dinamyBalance7',
withoutLabel : true,
attribute : 'items7',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXMZY_199798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS8GKH_60641'),
field : 'items8',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXMZY_199798',
name :'dinamyBalance8',
withoutLabel : true,
attribute : 'items8',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXXFI_631798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS9XLA_24163'),
field : 'items9',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXXFI_631798',
name :'dinamyBalance9',
withoutLabel : true,
attribute : 'items9',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXUTO_178798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS10DS_49370'),
field : 'items10',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUTO_178798',
name :'dinamyBalance10',
withoutLabel : true,
attribute : 'items10',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUGQ_329798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS11LX_20957'),
field : 'items11',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXUGQ_329798',
name :'dinamyBalance11',
withoutLabel : true,
attribute : 'items11',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXRLU_443798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS12CW_83556'),
field : 'items12',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXRLU_443798',
name :'dinamyBalance12',
withoutLabel : true,
attribute : 'items12',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXQYU_619798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS13DP_67312'),
field : 'items13',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXQYU_619798',
name :'dinamyBalance13',
withoutLabel : true,
attribute : 'items13',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXJEN_944798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS14FH_36578'),
field : 'items14',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXJEN_944798',
name :'dinamyBalance14',
withoutLabel : true,
attribute : 'items14',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXEED_699798",
label : cobis.translate('ASSTS.LBL_ASSTS_ITEMS15DN_79167'),
field : 'items15',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXEED_699798',
name :'dinamyBalance15',
withoutLabel : true,
attribute : 'items15',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXOFN_496798",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORCUTO_78445'),
field : 'quota',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXOFN_496798',
name :'quota',
withoutLabel : true,
attribute : 'quota',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXVFJ_525798",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXVFJ_525798',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHQO_214798",
label : cobis.translate('ASSTS.LBL_ASSTS_PRORROGAA_86150'),
field : 'porroga',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXHQO_214798',
name :'porroga',
withoutLabel : true,
attribute : 'porroga',
entity : 'ListProjectionReadjustement',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSPENVMXNQ_619 = this.formBuilder.group({
SearchProjectionReadjustement: this.formBuilder.group({
dateReadjustment:[{value: null, disabled: !this.VA_DATEREADJUSTNEM_341798.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATEREADJUSTNEM_341798.validationFunctions!)],
percentage:[{value: null, disabled: !this.VA_PERCENTAGEKQGYS_540798.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PERCENTAGEKQGYS_540798.validationFunctions!)],
}
),
ListProjectionReadjustement: this.formBuilder.group({
dividend:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXIRV_798798')],
saleDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXJOX_193798')],
quotaDay:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXVFQ_438798')],
balance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXEMA_362798')],
items1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXULR_853798')],
items2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXPNQ_361798')],
items3:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXSDM_686798')],
items4:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXBRK_956798')],
items5:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXMFC_126798')],
items6:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXXFA_745798')],
items7:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXJHE_279798')],
items8:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXMZY_199798')],
items9:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXXFI_631798')],
items10:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXUTO_178798')],
items11:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXUGQ_329798')],
items12:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXRLU_443798')],
items13:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXQYU_619798')],
items14:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXJEN_944798')],
items15:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXEED_699798')],
quota:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXOFN_496798')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXVFJ_525798')],
porroga:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EB77_IIB88.columns,'VA_TEXTINPUTBOXHQO_214798')],
}
),
});
}
}