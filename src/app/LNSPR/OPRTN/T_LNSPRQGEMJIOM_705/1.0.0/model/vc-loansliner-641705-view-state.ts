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
public T_LNSPRQGEMJIOM_705!:FormGroup;
public VC_LOANSLINER_641705:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSLINEE_426308 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSLIUUU_232308 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSLISNG_739308 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_KB20_UZG21: CobisGridModel = new CobisGridModel();
public G_LOANSLIAGN_399308 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSLIEET_607308 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_ZZ84_YVC22: CobisGridModel = new CobisGridModel();
public VA_1KMHECYCXJEZNWD_230308: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_2HMXCLNCVZZGRKJ_472308: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_1SNQSNEUKHHSXYG_701308: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_2DTPWYLEZNXCMEX_633308: CobisDropDownListModel = new CobisDropDownListModel();
public VA_3IGDRVHQOABVMRS_328308: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public Spacer2600: CobisSpacerModel = new CobisSpacerModel();
public Spacer1329: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONQHVCNPG_174308: CobisButtonModel = new CobisButtonModel();
public VA_2MHEKWJSAITISFC_217308: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_3BMLOOJQDKPUCNG_275308: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_4VRXBTCJQMVISRJ_539308: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer2616: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONZLYUQVN_789308: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONUIUNGEV_823308: CobisButtonModel = new CobisButtonModel();
public Spacer2493: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSLINER_641705.id="VC_LOANSLINER_641705";
this.VC_LOANSLINER_641705.name="LoansLineGuaranteesForm";
this.VC_LOANSLINER_641705.colSpan=1;
this.VC_LOANSLINER_641705.columns=1;
this.VC_LOANSLINER_641705.enabled=ConstantsApi.mode.All;
this.G_LOANSLINEE_426308.id="G_LOANSLINEE_426308";
this.G_LOANSLINEE_426308.name="Group1964";
this.G_LOANSLINEE_426308.columns=3;
this.G_LOANSLINEE_426308.labelOrientation="Top";
this.G_LOANSLINEE_426308.colSpan=1;
this.G_LOANSLINEE_426308.enabled=ConstantsApi.mode.All;
this.G_LOANSLINEE_426308.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_LOANSLINEE_426308.attList = ["sequential","codLine"];
this.G_LOANSLIUUU_232308.id="G_LOANSLIUUU_232308";
this.G_LOANSLIUUU_232308.name="Group2819";
this.G_LOANSLIUUU_232308.columns=3;
this.G_LOANSLIUUU_232308.labelOrientation="Top";
this.G_LOANSLIUUU_232308.colSpan=1;
this.G_LOANSLIUUU_232308.enabled=ConstantsApi.mode.All;
this.G_LOANSLIUUU_232308.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_LOANSLIUUU_232308.attList = ["client","guaranteeStatus","guaranteeType"];
this.G_LOANSLISNG_739308.id="G_LOANSLISNG_739308";
this.G_LOANSLISNG_739308.name="Group2585";
this.G_LOANSLISNG_739308.columns=1;
this.G_LOANSLISNG_739308.labelOrientation="Top";
this.G_LOANSLISNG_739308.colSpan=1;
this.G_LOANSLISNG_739308.enabled=ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.G_LOANSLISNG_739308.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_LOANSLISNG_739308.attList = ["guarantee","type","description","state","admissionDate","currency","initialValue","currentValue","minimumValue","code","clase","clientGar"];
this.G_LOANSLIAGN_399308.id="G_LOANSLIAGN_399308";
this.G_LOANSLIAGN_399308.name="Group2912";
this.G_LOANSLIAGN_399308.columns=6;
this.G_LOANSLIAGN_399308.labelOrientation="Top";
this.G_LOANSLIAGN_399308.colSpan=1;
this.G_LOANSLIAGN_399308.enabled=ConstantsApi.mode.All;
this.G_LOANSLIAGN_399308.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_LOANSLIAGN_399308.attList = ["guarantee","guaranteeValue","type"];
this.G_LOANSLIEET_607308.id="G_LOANSLIEET_607308";
this.G_LOANSLIEET_607308.name="Group2424";
this.G_LOANSLIEET_607308.columns=1;
this.G_LOANSLIEET_607308.labelOrientation="Top";
this.G_LOANSLIEET_607308.colSpan=1;
this.G_LOANSLIEET_607308.enabled=ConstantsApi.mode.All;
this.G_LOANSLIEET_607308.visible=ConstantsApi.mode.All;
this.G_LOANSLIEET_607308.attList = ["procedure","guarantee","type","state","description","admissionDate","currency","initialValue","currentValue","valueMN","code"];
this.VA_1KMHECYCXJEZNWD_230308.label = cobis.translate("LNSPR.LBL_LNSPR_SECUENCAI_74208");
this.VA_1KMHECYCXJEZNWD_230308.entity = "LoansLineGuarantee";
this.VA_1KMHECYCXJEZNWD_230308.attribute = "sequential";
this.VA_1KMHECYCXJEZNWD_230308.textCase= TextCaseOptions.NONE;
this.VA_1KMHECYCXJEZNWD_230308.format= "#";
this.VA_1KMHECYCXJEZNWD_230308.name="sequential";
this.VA_1KMHECYCXJEZNWD_230308.id="VA_1KMHECYCXJEZNWD_230308";
this.VA_1KMHECYCXJEZNWD_230308.colSpan=1;
this.VA_1KMHECYCXJEZNWD_230308.withoutLabel = false;
this.VA_1KMHECYCXJEZNWD_230308.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_1KMHECYCXJEZNWD_230308.enabled = ConstantsApi.mode.All;
this.VA_1KMHECYCXJEZNWD_230308.visible= ConstantsApi.mode.All;
this.VA_2HMXCLNCVZZGRKJ_472308.label = cobis.translate("LNSPR.LBL_LNSPR_CODLNEAKU_40615");
this.VA_2HMXCLNCVZZGRKJ_472308.entity = "LoansLineGuarantee";
this.VA_2HMXCLNCVZZGRKJ_472308.attribute = "codLine";
this.VA_2HMXCLNCVZZGRKJ_472308.textCase= TextCaseOptions.NONE;
this.VA_2HMXCLNCVZZGRKJ_472308.name="codLine";
this.VA_2HMXCLNCVZZGRKJ_472308.id="VA_2HMXCLNCVZZGRKJ_472308";
this.VA_2HMXCLNCVZZGRKJ_472308.colSpan=1;
this.VA_2HMXCLNCVZZGRKJ_472308.withoutLabel = false;
this.VA_2HMXCLNCVZZGRKJ_472308.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_2HMXCLNCVZZGRKJ_472308.enabled = ConstantsApi.mode.All;
this.VA_2HMXCLNCVZZGRKJ_472308.visible= ConstantsApi.mode.All;
this.VA_1SNQSNEUKHHSXYG_701308.id = "VA_1SNQSNEUKHHSXYG_701308";
this.VA_1SNQSNEUKHHSXYG_701308.name = "client";
this.VA_1SNQSNEUKHHSXYG_701308.label = cobis.translate("LNSPR.LBL_LNSPR_CLIENTEPO_59022");
this.VA_1SNQSNEUKHHSXYG_701308.entity = "LoansLineGuarantee";
this.VA_1SNQSNEUKHHSXYG_701308.attribute = "client";
this.VA_1SNQSNEUKHHSXYG_701308.colSpan = 1;
this.VA_1SNQSNEUKHHSXYG_701308.format = "";
this.VA_1SNQSNEUKHHSXYG_701308.readOnly = ConstantsApi.mode.Query;
this.VA_1SNQSNEUKHHSXYG_701308.enabled = ConstantsApi.mode.All;
this.VA_1SNQSNEUKHHSXYG_701308.visible= ConstantsApi.mode.All;
this.VA_1SNQSNEUKHHSXYG_701308.textLocked = true;
this.VA_2DTPWYLEZNXCMEX_633308.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADOGRT_81847");
this.VA_2DTPWYLEZNXCMEX_633308.blankOption=true;
this.VA_2DTPWYLEZNXCMEX_633308.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_2DTPWYLEZNXCMEX_633308.entity = "LoansLineGuarantee";
this.VA_2DTPWYLEZNXCMEX_633308.attribute = "guaranteeStatus";
this.VA_2DTPWYLEZNXCMEX_633308.textField = "value";
this.VA_2DTPWYLEZNXCMEX_633308.valueField = "code";
this.VA_2DTPWYLEZNXCMEX_633308.showId= true;
this.VA_2DTPWYLEZNXCMEX_633308.name="guaranteeStatus";
this.VA_2DTPWYLEZNXCMEX_633308.id="VA_2DTPWYLEZNXCMEX_633308";
this.VA_2DTPWYLEZNXCMEX_633308.colSpan=1;
this.VA_2DTPWYLEZNXCMEX_633308.withoutLabel = false;
this.VA_2DTPWYLEZNXCMEX_633308.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_2DTPWYLEZNXCMEX_633308.enabled = ConstantsApi.mode.None;
this.VA_2DTPWYLEZNXCMEX_633308.visible= ConstantsApi.mode.All;
this.VA_3IGDRVHQOABVMRS_328308.id = "VA_3IGDRVHQOABVMRS_328308";
this.VA_3IGDRVHQOABVMRS_328308.name = "guaranteeType";
this.VA_3IGDRVHQOABVMRS_328308.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOGARAA_90134");
this.VA_3IGDRVHQOABVMRS_328308.entity = "LoansLineGuarantee";
this.VA_3IGDRVHQOABVMRS_328308.attribute = "guaranteeType";
this.VA_3IGDRVHQOABVMRS_328308.colSpan = 1;
this.VA_3IGDRVHQOABVMRS_328308.format = "";
this.VA_3IGDRVHQOABVMRS_328308.readOnly = ConstantsApi.mode.Query;
this.VA_3IGDRVHQOABVMRS_328308.enabled = ConstantsApi.mode.All;
this.VA_3IGDRVHQOABVMRS_328308.visible= ConstantsApi.mode.All;
this.VA_3IGDRVHQOABVMRS_328308.textLocked = true;
this.Spacer2600.id = "Spacer2600";
this.Spacer2600.name = "Spacer2600";
this.Spacer2600.colSpan = 1;
this.Spacer2600.visible= ConstantsApi.mode.All;
this.Spacer1329.id = "Spacer1329";
this.Spacer1329.name = "Spacer1329";
this.Spacer1329.colSpan = 1;
this.Spacer1329.visible= ConstantsApi.mode.All;
this.VA_VABUTTONQHVCNPG_174308.id = "VA_VABUTTONQHVCNPG_174308";
this.VA_VABUTTONQHVCNPG_174308.name = "VA_VABUTTONQHVCNPG_174308";
this.VA_VABUTTONQHVCNPG_174308.label = cobis.translate("LNSPR.LBL_LNSPR_BUSCARKBJ_59373");
this.VA_VABUTTONQHVCNPG_174308.colSpan = 1;
this.VA_VABUTTONQHVCNPG_174308.withoutLabel = false;
this.VA_VABUTTONQHVCNPG_174308.causesValidation=false;
this.VA_VABUTTONQHVCNPG_174308.submitOnEnter=false;
this.VA_VABUTTONQHVCNPG_174308.setFocus=false;
this.VA_VABUTTONQHVCNPG_174308.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONQHVCNPG_174308.visible= ConstantsApi.mode.All;
this.QV_KB20_UZG21.pageSize=5;
this.QV_KB20_UZG21.id='QV_KB20_UZG21';
this.QV_KB20_UZG21.name='QV_KB20_UZG21';
this.QV_KB20_UZG21.pageable=true;
this.QV_KB20_UZG21.sortable=false;
this.QV_KB20_UZG21.resizable=true;
this.QV_KB20_UZG21.scrollable=true
this.QV_KB20_UZG21.confirmRowDeletion=false;
this.QV_KB20_UZG21.exportToExcel=false;
this.QV_KB20_UZG21.exportToPdf=false;
this.QV_KB20_UZG21.height=0;
this.QV_KB20_UZG21.filterableColumns=false;
this.QV_KB20_UZG21.entityName='LineGuaranteesList';
this.QV_KB20_UZG21.appendRecords=true;
this.QV_KB20_UZG21.rowDetail=false;
this.QV_KB20_UZG21.columnMenu = true;
this.QV_KB20_UZG21.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_KB20_UZG21.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_KB20_UZG21.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXRLW_788308",
label : cobis.translate('LNSPR.LBL_LNSPR_GARANTIAA_48312'),
field : 'guarantee',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRLW_788308',
name :'guarantee',
withoutLabel : true,
attribute : 'guarantee',
entity : 'LineGuaranteesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIXG_172308",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOLDSKB_46090'),
field : 'type',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIXG_172308',
name :'type',
withoutLabel : true,
attribute : 'type',
entity : 'LineGuaranteesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWDS_313308",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPIN_18186'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWDS_313308',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'LineGuaranteesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLHS_787308",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLHS_787308',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'LineGuaranteesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDPDUQJV_399308",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHAINRR_39137'),
field : 'admissionDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDPDUQJV_399308',
name :'admissionDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'admissionDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LineGuaranteesList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXWFD_785308",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'currency',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWFD_785308',
name :'currency',
withoutLabel : true,
attribute : 'currency',
entity : 'LineGuaranteesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPEK_638308",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORINIL_53288'),
field : 'initialValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXPEK_638308',
name :'initialValue',
withoutLabel : true,
attribute : 'initialValue',
entity : 'LineGuaranteesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEJK_944308",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORACUL_54068'),
field : 'currentValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEJK_944308',
name :'currentValue',
withoutLabel : true,
attribute : 'currentValue',
entity : 'LineGuaranteesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMEW_983308",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORMNTF_18609'),
field : 'minimumValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMEW_983308',
name :'minimumValue',
withoutLabel : true,
attribute : 'minimumValue',
entity : 'LineGuaranteesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEPV_806308",
label : cobis.translate('LNSPR.LBL_LNSPR_CODIGOPYS_88202'),
field : 'code',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEPV_806308',
name :'code',
withoutLabel : true,
attribute : 'code',
entity : 'LineGuaranteesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.VA_2MHEKWJSAITISFC_217308.label = cobis.translate("LNSPR.LBL_LOANS_GARANTARW_17635");
this.VA_2MHEKWJSAITISFC_217308.entity = "LoansLineGuarantee";
this.VA_2MHEKWJSAITISFC_217308.attribute = "guarantee";
this.VA_2MHEKWJSAITISFC_217308.textCase= TextCaseOptions.NONE;
this.VA_2MHEKWJSAITISFC_217308.name="guarantee";
this.VA_2MHEKWJSAITISFC_217308.id="VA_2MHEKWJSAITISFC_217308";
this.VA_2MHEKWJSAITISFC_217308.colSpan=2;
this.VA_2MHEKWJSAITISFC_217308.withoutLabel = false;
this.VA_2MHEKWJSAITISFC_217308.readOnly = ConstantsApi.mode.Query;
this.VA_2MHEKWJSAITISFC_217308.enabled = ConstantsApi.mode.None;
this.VA_2MHEKWJSAITISFC_217308.visible= ConstantsApi.mode.All;
this.VA_3BMLOOJQDKPUCNG_275308.label = cobis.translate("LNSPR.LBL_LNSPR_VALORGATT_11492");
this.VA_3BMLOOJQDKPUCNG_275308.entity = "LoansLineGuarantee";
this.VA_3BMLOOJQDKPUCNG_275308.attribute = "guaranteeValue";
this.VA_3BMLOOJQDKPUCNG_275308.textCase= TextCaseOptions.NONE;
this.VA_3BMLOOJQDKPUCNG_275308.format= "c";
this.VA_3BMLOOJQDKPUCNG_275308.name="guaranteeValue";
this.VA_3BMLOOJQDKPUCNG_275308.id="VA_3BMLOOJQDKPUCNG_275308";
this.VA_3BMLOOJQDKPUCNG_275308.colSpan=2;
this.VA_3BMLOOJQDKPUCNG_275308.withoutLabel = false;
this.VA_3BMLOOJQDKPUCNG_275308.readOnly = ConstantsApi.mode.Query;
this.VA_3BMLOOJQDKPUCNG_275308.enabled = ConstantsApi.mode.None;
this.VA_3BMLOOJQDKPUCNG_275308.visible= ConstantsApi.mode.All;
this.VA_4VRXBTCJQMVISRJ_539308.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOLDSKB_46090");
this.VA_4VRXBTCJQMVISRJ_539308.entity = "LoansLineGuarantee";
this.VA_4VRXBTCJQMVISRJ_539308.attribute = "type";
this.VA_4VRXBTCJQMVISRJ_539308.textCase= TextCaseOptions.NONE;
this.VA_4VRXBTCJQMVISRJ_539308.name="type";
this.VA_4VRXBTCJQMVISRJ_539308.id="VA_4VRXBTCJQMVISRJ_539308";
this.VA_4VRXBTCJQMVISRJ_539308.colSpan=2;
this.VA_4VRXBTCJQMVISRJ_539308.withoutLabel = false;
this.VA_4VRXBTCJQMVISRJ_539308.readOnly = ConstantsApi.mode.Query;
this.VA_4VRXBTCJQMVISRJ_539308.enabled = ConstantsApi.mode.None;
this.VA_4VRXBTCJQMVISRJ_539308.visible= ConstantsApi.mode.All;
this.Spacer2616.id = "Spacer2616";
this.Spacer2616.name = "Spacer2616";
this.Spacer2616.colSpan = 1;
this.Spacer2616.visible= ConstantsApi.mode.All;
this.VA_VABUTTONZLYUQVN_789308.id = "VA_VABUTTONZLYUQVN_789308";
this.VA_VABUTTONZLYUQVN_789308.name = "VA_VABUTTONZLYUQVN_789308";
this.VA_VABUTTONZLYUQVN_789308.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.VA_VABUTTONZLYUQVN_789308.colSpan = 2;
this.VA_VABUTTONZLYUQVN_789308.withoutLabel = false;
this.VA_VABUTTONZLYUQVN_789308.causesValidation=false;
this.VA_VABUTTONZLYUQVN_789308.submitOnEnter=false;
this.VA_VABUTTONZLYUQVN_789308.setFocus=false;
this.VA_VABUTTONZLYUQVN_789308.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONZLYUQVN_789308.visible= ConstantsApi.mode.All;
this.VA_VABUTTONZLYUQVN_789308.attributesGroup = this.G_LOANSLIAGN_399308.attList;
this.VA_VABUTTONUIUNGEV_823308.id = "VA_VABUTTONUIUNGEV_823308";
this.VA_VABUTTONUIUNGEV_823308.name = "VA_VABUTTONUIUNGEV_823308";
this.VA_VABUTTONUIUNGEV_823308.label = cobis.translate("LNSPR.LBL_LNSPR_CANCELARR_70217");
this.VA_VABUTTONUIUNGEV_823308.colSpan = 2;
this.VA_VABUTTONUIUNGEV_823308.withoutLabel = false;
this.VA_VABUTTONUIUNGEV_823308.causesValidation=false;
this.VA_VABUTTONUIUNGEV_823308.submitOnEnter=false;
this.VA_VABUTTONUIUNGEV_823308.setFocus=false;
this.VA_VABUTTONUIUNGEV_823308.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONUIUNGEV_823308.visible= ConstantsApi.mode.All;
this.VA_VABUTTONUIUNGEV_823308.attributesGroup = this.G_LOANSLIAGN_399308.attList;
this.Spacer2493.id = "Spacer2493";
this.Spacer2493.name = "Spacer2493";
this.Spacer2493.colSpan = 1;
this.Spacer2493.visible= ConstantsApi.mode.All;
this.QV_ZZ84_YVC22.pageSize=10;
this.QV_ZZ84_YVC22.id='QV_ZZ84_YVC22';
this.QV_ZZ84_YVC22.name='QV_ZZ84_YVC22';
this.QV_ZZ84_YVC22.pageable=true;
this.QV_ZZ84_YVC22.sortable=false;
this.QV_ZZ84_YVC22.resizable=true;
this.QV_ZZ84_YVC22.scrollable=true
this.QV_ZZ84_YVC22.confirmRowDeletion=true;
this.QV_ZZ84_YVC22.exportToExcel=false;
this.QV_ZZ84_YVC22.exportToPdf=false;
this.QV_ZZ84_YVC22.height=0;
this.QV_ZZ84_YVC22.filterableColumns=false;
this.QV_ZZ84_YVC22.entityName='LineGuaranteesAssociatedList';
this.QV_ZZ84_YVC22.appendRecords=true;
this.QV_ZZ84_YVC22.rowDetail=false;
this.QV_ZZ84_YVC22.columnMenu = true;
this.QV_ZZ84_YVC22.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_ZZ84_YVC22.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_ZZ84_YVC22.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_ZZ84_YVC22.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXYRN_976308",
label : cobis.translate('LNSPR.LBL_LNSPR_GARANTIAA_48312'),
field : 'guarantee',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYRN_976308',
name :'guarantee',
withoutLabel : true,
attribute : 'guarantee',
entity : 'LineGuaranteesAssociatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCZA_315308",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOLDSKB_46090'),
field : 'type',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCZA_315308',
name :'type',
withoutLabel : true,
attribute : 'type',
entity : 'LineGuaranteesAssociatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPVD_927308",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXPVD_927308',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'LineGuaranteesAssociatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTHN_169308",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPIN_18186'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTHN_169308',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'LineGuaranteesAssociatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDIIIDFM_537308",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHAINRR_39137'),
field : 'admissionDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDIIIDFM_537308',
name :'admissionDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'admissionDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LineGuaranteesAssociatedList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXBGA_566308",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'currency',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBGA_566308',
name :'currency',
withoutLabel : true,
attribute : 'currency',
entity : 'LineGuaranteesAssociatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVXS_189308",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORINIL_53288'),
field : 'initialValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVXS_189308',
name :'initialValue',
withoutLabel : true,
attribute : 'initialValue',
entity : 'LineGuaranteesAssociatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYQI_664308",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORACUL_54068'),
field : 'currentValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYQI_664308',
name :'currentValue',
withoutLabel : true,
attribute : 'currentValue',
entity : 'LineGuaranteesAssociatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNMO_402308",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORMNTF_18609'),
field : 'valueMN',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNMO_402308',
name :'valueMN',
withoutLabel : true,
attribute : 'valueMN',
entity : 'LineGuaranteesAssociatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXRE_135308",
label : cobis.translate('LNSPR.LBL_LNSPR_CODIGOPYS_88202'),
field : 'code',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXRE_135308',
name :'code',
withoutLabel : true,
attribute : 'code',
entity : 'LineGuaranteesAssociatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRQGEMJIOM_705 = this.formBuilder.group({
LoansLineGuarantee: this.formBuilder.group({
sequential:[{value: null, disabled: !this.VA_1KMHECYCXJEZNWD_230308.visible},CobisDesignerUtil.getValidationFunctions(this.VA_1KMHECYCXJEZNWD_230308.validationFunctions!)],
codLine:[{value: null, disabled: !this.VA_2HMXCLNCVZZGRKJ_472308.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2HMXCLNCVZZGRKJ_472308.validationFunctions!)],
client:[{value: null, disabled: !this.VA_1SNQSNEUKHHSXYG_701308.visible},CobisDesignerUtil.getValidationFunctions(this.VA_1SNQSNEUKHHSXYG_701308.validationFunctions!)],
guaranteeStatus:[{value: null, disabled: !this.VA_2DTPWYLEZNXCMEX_633308.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2DTPWYLEZNXCMEX_633308.validationFunctions!)],
guaranteeType:[{value: null, disabled: !this.VA_3IGDRVHQOABVMRS_328308.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3IGDRVHQOABVMRS_328308.validationFunctions!)],
guarantee:[{value: null, disabled: !this.VA_2MHEKWJSAITISFC_217308.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2MHEKWJSAITISFC_217308.validationFunctions!)],
guaranteeValue:[{value: null, disabled: !this.VA_3BMLOOJQDKPUCNG_275308.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3BMLOOJQDKPUCNG_275308.validationFunctions!)],
type:[{value: null, disabled: !this.VA_4VRXBTCJQMVISRJ_539308.visible},CobisDesignerUtil.getValidationFunctions(this.VA_4VRXBTCJQMVISRJ_539308.validationFunctions!)],
clientGar:[null],
procedure:[null],
clientCode:[null],
guaranteeTypeCode:[null],
classe:[null],
}
),
LineGuaranteesList: this.formBuilder.group({
guarantee:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXRLW_788308')],
type:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXIXG_172308')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXWDS_313308')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXLHS_787308')],
admissionDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_DATEFIELDPDUQJV_399308')],
currency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXWFD_785308')],
initialValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXPEK_638308')],
currentValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXEJK_944308')],
minimumValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXMEW_983308')],
code:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXEPV_806308')],
clase:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXBNW_850308')],
clientGar:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_KB20_UZG21.columns,'VA_TEXTINPUTBOXBIA_696308')],
}
),
LineGuaranteesAssociatedList: this.formBuilder.group({
procedure:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXFNK_583308')],
guarantee:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXYRN_976308')],
type:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXCZA_315308')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXPVD_927308')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXTHN_169308')],
admissionDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_DATEFIELDIIIDFM_537308')],
currency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXBGA_566308')],
initialValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXVXS_189308')],
currentValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXYQI_664308')],
valueMN:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXNMO_402308')],
code:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ZZ84_YVC22.columns,'VA_TEXTINPUTBOXXRE_135308')],
clasee:[null],
}
),
});
}
}