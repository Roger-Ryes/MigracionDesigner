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
public T_EXTENDSQUONTA_926!:FormGroup;
public VC_EXTENDSQMN_712926:CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_DFZRKBDHHZ_908926 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_JJPBBGOUBW_131316 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADOD_564612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADRO_349612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEAINF_340612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_RSXKZAWLKR_774926 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_CHUJBEQPMA_790575 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_EXTENDSAUT_547662 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_2921_98487: CobisGridModel = new CobisGridModel();
public G_EXTENDSAUQ_349662 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_EXTENDSUUA_352662 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_5312_48027: CobisGridModel = new CobisGridModel();
public G_EXTENDSATA_926662 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_VASIMPLELABELLL_143612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_867612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VABUTTONWVITZRQ_108612: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONORYJAMS_468612: CobisButtonModel = new CobisButtonModel();
public VA_5034UOFCASVGKTK_993612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_2463BHBNLZPKLMU_865612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_3853RRTWBIRUGHQ_533612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_7292SEAHPRAXOKC_868612: CobisTextLabelModel = new CobisTextLabelModel();
public Spacer2497: CobisDateFieldModel = new CobisDateFieldModel();
public Spacer2749: CobisTextLabelModel = new CobisTextLabelModel();
public VA_NUMBERQUOTAHUXZ_811662: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_EXPIRATIONDAETE_519662: CobisDateFieldModel = new CobisDateFieldModel();
public CM_EXTENDSQ_O3T: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_EXTENDSQMN_712926.id="VC_EXTENDSQMN_712926";
this.VC_EXTENDSQMN_712926.name="ViewContainerBase";
this.VC_EXTENDSQMN_712926.colSpan=1;
this.VC_EXTENDSQMN_712926.columns=1;
this.VC_EXTENDSQMN_712926.enabled=ConstantsApi.mode.All;
this.VC_DFZRKBDHHZ_908926.id="VC_DFZRKBDHHZ_908926";
this.VC_DFZRKBDHHZ_908926.name="ViewContainerBase";
this.VC_DFZRKBDHHZ_908926.enabled=ConstantsApi.mode.All;
this.VC_DFZRKBDHHZ_908926.colSpan=1;
this.VC_DFZRKBDHHZ_908926.columns=1;
this.VC_JJPBBGOUBW_131316.id="VC_JJPBBGOUBW_131316";
this.VC_JJPBBGOUBW_131316.name="LoanHeaderInfoForm";
this.VC_JJPBBGOUBW_131316.enabled=ConstantsApi.mode.All;
this.VC_JJPBBGOUBW_131316.colSpan=1;
this.VC_JJPBBGOUBW_131316.columns=1;
this.G_LOANHEADOD_564612.id="G_LOANHEADOD_564612";
this.G_LOANHEADOD_564612.name="Group2443";
this.G_LOANHEADOD_564612.columns=12;
this.G_LOANHEADOD_564612.labelOrientation="Top";
this.G_LOANHEADOD_564612.colSpan=1;
this.G_LOANHEADOD_564612.enabled=ConstantsApi.mode.All;
this.G_LOANHEADOD_564612.visible=ConstantsApi.mode.All;
this.G_LOANHEADRO_349612.id="G_LOANHEADRO_349612";
this.G_LOANHEADRO_349612.name="Group1657";
this.G_LOANHEADRO_349612.columns=12;
this.G_LOANHEADRO_349612.labelOrientation="Top";
this.G_LOANHEADRO_349612.colSpan=1;
this.G_LOANHEADRO_349612.enabled=ConstantsApi.mode.All;
this.G_LOANHEADRO_349612.visible=ConstantsApi.mode.All;
this.G_LOANHEADRO_349612.attList = ["loanBankID"];
this.G_LOANHEAINF_340612.id="G_LOANHEAINF_340612";
this.G_LOANHEAINF_340612.name="Group1848";
this.G_LOANHEAINF_340612.columns=12;
this.G_LOANHEAINF_340612.labelOrientation="Top";
this.G_LOANHEAINF_340612.colSpan=1;
this.G_LOANHEAINF_340612.enabled=ConstantsApi.mode.All;
this.G_LOANHEAINF_340612.visible=ConstantsApi.mode.All;
this.G_LOANHEAINF_340612.attList = ["amount","balanceDue","status","office"];
this.VC_RSXKZAWLKR_774926.id="VC_RSXKZAWLKR_774926";
this.VC_RSXKZAWLKR_774926.name="ViewContainerBase";
this.VC_RSXKZAWLKR_774926.enabled=ConstantsApi.mode.All;
this.VC_RSXKZAWLKR_774926.colSpan=1;
this.VC_RSXKZAWLKR_774926.columns=1;
this.VC_CHUJBEQPMA_790575.id="VC_CHUJBEQPMA_790575";
this.VC_CHUJBEQPMA_790575.name="ExtendsQuotaForm";
this.VC_CHUJBEQPMA_790575.enabled=ConstantsApi.mode.All;
this.VC_CHUJBEQPMA_790575.colSpan=1;
this.VC_CHUJBEQPMA_790575.columns=1;
this.G_EXTENDSAUT_547662.id="G_EXTENDSAUT_547662";
this.G_EXTENDSAUT_547662.name="Group1938";
this.G_EXTENDSAUT_547662.columns=1;
this.G_EXTENDSAUT_547662.labelOrientation="Top";
this.G_EXTENDSAUT_547662.colSpan=1;
this.G_EXTENDSAUT_547662.enabled=ConstantsApi.mode.All;
this.G_EXTENDSAUT_547662.visible=ConstantsApi.mode.All;
this.G_EXTENDSAUT_547662.attList = ["quota","startDate","endDate","capital","interest","others","total","state"];
this.G_EXTENDSAUQ_349662.id="G_EXTENDSAUQ_349662";
this.G_EXTENDSAUQ_349662.name="Group2880";
this.G_EXTENDSAUQ_349662.columns=3;
this.G_EXTENDSAUQ_349662.labelOrientation="Top";
this.G_EXTENDSAUQ_349662.colSpan=1;
this.G_EXTENDSAUQ_349662.enabled=ConstantsApi.mode.All;
this.G_EXTENDSAUQ_349662.visible=ConstantsApi.mode.None;
this.G_EXTENDSAUQ_349662.attList = ["extendsDate","maximumDateExtended"];
this.G_EXTENDSUUA_352662.id="G_EXTENDSUUA_352662";
this.G_EXTENDSUUA_352662.label=cobis.translate("ASSTS.LBL_ASSTS_PRRROGAER_90410");
this.G_EXTENDSUUA_352662.name="Group1998";
this.G_EXTENDSUUA_352662.columns=1;
this.G_EXTENDSUUA_352662.labelOrientation="Top";
this.G_EXTENDSUUA_352662.colSpan=1;
this.G_EXTENDSUUA_352662.enabled=ConstantsApi.mode.All;
this.G_EXTENDSUUA_352662.visible=ConstantsApi.mode.None;
this.G_EXTENDSUUA_352662.attList = ["quotaExt","startDateExt","endDateExt","capitalExt","interestExt","others","total","state"];
this.G_EXTENDSATA_926662.id="G_EXTENDSATA_926662";
this.G_EXTENDSATA_926662.name="Group1667";
this.G_EXTENDSATA_926662.columns=3;
this.G_EXTENDSATA_926662.labelOrientation="Top";
this.G_EXTENDSATA_926662.colSpan=1;
this.G_EXTENDSATA_926662.enabled=ConstantsApi.mode.All;
this.G_EXTENDSATA_926662.visible=ConstantsApi.mode.None;
this.G_EXTENDSATA_926662.attList = ["numberQuota","expirationDate"];
this.CM_EXTENDSQ_O3T.id = "CM_EXTENDSQ_O3T";
this.CM_EXTENDSQ_O3T.name = "Command1";
this.CM_EXTENDSQ_O3T.causesValidation=true;
this.CM_EXTENDSQ_O3T.submitOnEnter=false;
this.CM_EXTENDSQ_O3T.setFocus=false;
this.CM_EXTENDSQ_O3T.close=false;
this.CM_EXTENDSQ_O3T.label = cobis.translate("ASSTS.LBL_ASSTS_PRORROGRR_30298");
this.CM_EXTENDSQ_O3T.enabled = ConstantsApi.mode.All;
this.CM_EXTENDSQ_O3T.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_143612.id = "VA_VASIMPLELABELLL_143612";
this.VA_VASIMPLELABELLL_143612.name = "clientName";
this.VA_VASIMPLELABELLL_143612.label = cobis.translate("ASSTS.LBL_ASSTS_CLIENTEWV_22561");
this.VA_VASIMPLELABELLL_143612.colSpan = 12;
this.VA_VASIMPLELABELLL_143612.withoutLabel = false;
this.VA_VASIMPLELABELLL_143612.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_143612.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_867612.id = "VA_VASIMPLELABELLL_867612";
this.VA_VASIMPLELABELLL_867612.name = "loanBankID";
this.VA_VASIMPLELABELLL_867612.label = cobis.translate("ASSTS.LBL_ASSTS_PRSTAMOFK_44930");
this.VA_VASIMPLELABELLL_867612.attribute = "loanBankID";
this.VA_VASIMPLELABELLL_867612.colSpan = 7;
this.VA_VASIMPLELABELLL_867612.withoutLabel = false;
this.VA_VASIMPLELABELLL_867612.enabled = ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_867612.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_867612.image = "";
this.VA_VABUTTONWVITZRQ_108612.id = "VA_VABUTTONWVITZRQ_108612";
this.VA_VABUTTONWVITZRQ_108612.name = "VA_VABUTTONWVITZRQ_108612";
this.VA_VABUTTONWVITZRQ_108612.label = cobis.translate("ASSTS.LBL_ASSTS_MASINACIN_18792");
this.VA_VABUTTONWVITZRQ_108612.colSpan = 3;
this.VA_VABUTTONWVITZRQ_108612.withoutLabel = false;
this.VA_VABUTTONWVITZRQ_108612.causesValidation=false;
this.VA_VABUTTONWVITZRQ_108612.submitOnEnter=false;
this.VA_VABUTTONWVITZRQ_108612.setFocus=false;
this.VA_VABUTTONWVITZRQ_108612.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONWVITZRQ_108612.visible= ConstantsApi.mode.All;
this.VA_VABUTTONWVITZRQ_108612.icon = "glyphicon glyphicon-info-sign";
this.VA_VABUTTONORYJAMS_468612.id = "VA_VABUTTONORYJAMS_468612";
this.VA_VABUTTONORYJAMS_468612.name = "VA_VABUTTONORYJAMS_468612";
this.VA_VABUTTONORYJAMS_468612.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONORYJAMS_468612.colSpan = 2;
this.VA_VABUTTONORYJAMS_468612.withoutLabel = false;
this.VA_VABUTTONORYJAMS_468612.causesValidation=false;
this.VA_VABUTTONORYJAMS_468612.submitOnEnter=false;
this.VA_VABUTTONORYJAMS_468612.setFocus=false;
this.VA_VABUTTONORYJAMS_468612.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONORYJAMS_468612.visible= ConstantsApi.mode.All;
this.VA_VABUTTONORYJAMS_468612.icon = "glyphicon glyphicon-search";
this.VA_5034UOFCASVGKTK_993612.id = "VA_5034UOFCASVGKTK_993612";
this.VA_5034UOFCASVGKTK_993612.name = "amount";
this.VA_5034UOFCASVGKTK_993612.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCRDOO_69382");
this.VA_5034UOFCASVGKTK_993612.attribute = "amount";
this.VA_5034UOFCASVGKTK_993612.colSpan = 1;
this.VA_5034UOFCASVGKTK_993612.withoutLabel = false;
this.VA_5034UOFCASVGKTK_993612.enabled = ConstantsApi.mode.All;
this.VA_5034UOFCASVGKTK_993612.visible= ConstantsApi.mode.All;
this.VA_2463BHBNLZPKLMU_865612.id = "VA_2463BHBNLZPKLMU_865612";
this.VA_2463BHBNLZPKLMU_865612.name = "balanceDue";
this.VA_2463BHBNLZPKLMU_865612.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOEXBB_70535");
this.VA_2463BHBNLZPKLMU_865612.attribute = "balanceDue";
this.VA_2463BHBNLZPKLMU_865612.colSpan = 1;
this.VA_2463BHBNLZPKLMU_865612.withoutLabel = false;
this.VA_2463BHBNLZPKLMU_865612.enabled = ConstantsApi.mode.All;
this.VA_2463BHBNLZPKLMU_865612.visible= ConstantsApi.mode.All;
this.VA_3853RRTWBIRUGHQ_533612.id = "VA_3853RRTWBIRUGHQ_533612";
this.VA_3853RRTWBIRUGHQ_533612.name = "status";
this.VA_3853RRTWBIRUGHQ_533612.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOEAI_33340");
this.VA_3853RRTWBIRUGHQ_533612.attribute = "status";
this.VA_3853RRTWBIRUGHQ_533612.colSpan = 1;
this.VA_3853RRTWBIRUGHQ_533612.withoutLabel = false;
this.VA_3853RRTWBIRUGHQ_533612.enabled = ConstantsApi.mode.All;
this.VA_3853RRTWBIRUGHQ_533612.visible= ConstantsApi.mode.All;
this.VA_7292SEAHPRAXOKC_868612.id = "VA_7292SEAHPRAXOKC_868612";
this.VA_7292SEAHPRAXOKC_868612.name = "office";
this.VA_7292SEAHPRAXOKC_868612.label = cobis.translate("ASSTS.LBL_ASSTS_OFICINAHX_44623");
this.VA_7292SEAHPRAXOKC_868612.attribute = "office";
this.VA_7292SEAHPRAXOKC_868612.colSpan = 1;
this.VA_7292SEAHPRAXOKC_868612.withoutLabel = false;
this.VA_7292SEAHPRAXOKC_868612.enabled = ConstantsApi.mode.All;
this.VA_7292SEAHPRAXOKC_868612.visible= ConstantsApi.mode.All;
this.QV_2921_98487.pageSize=5;
this.QV_2921_98487.id='QV_2921_98487';
this.QV_2921_98487.name='QV_2921_98487';
this.QV_2921_98487.pageable=true;
this.QV_2921_98487.sortable=false;
this.QV_2921_98487.resizable=true;
this.QV_2921_98487.scrollable=true
this.QV_2921_98487.confirmRowDeletion=false;
this.QV_2921_98487.exportToExcel=false;
this.QV_2921_98487.exportToPdf=false;
this.QV_2921_98487.height=0;
this.QV_2921_98487.filterableColumns=false;
this.QV_2921_98487.entityName='CurrentQuotas';
this.QV_2921_98487.appendRecords=false;
this.QV_2921_98487.rowDetail=false;
this.QV_2921_98487.columnMenu = true;
this.QV_2921_98487.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_2921_98487.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_2921_98487.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXKUL_165662",
label : cobis.translate('ASSTS.LBL_ASSTS_NROCUOTAA_13299'),
field : 'quota',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKUL_165662',
name :'quota',
withoutLabel : true,
attribute : 'quota',
entity : 'CurrentQuotas',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDKHVZHE_598662",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAINIC_17794'),
field : 'startDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDKHVZHE_598662',
name :'startDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'startDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'CurrentQuotas',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_DATEFIELDOSHXSD_216662",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENE_91475'),
field : 'endDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDOSHXSD_216662',
name :'endDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'endDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'CurrentQuotas',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXEDY_233662",
label : cobis.translate('ASSTS.LBL_ASSTS_CAPITALBZ_88457'),
field : 'capital',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEDY_233662',
name :'capital',
withoutLabel : true,
attribute : 'capital',
entity : 'CurrentQuotas',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJTQ_372662",
label : cobis.translate('ASSTS.LBL_ASSTS_INTERESWJ_80123'),
field : 'interest',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXJTQ_372662',
name :'interest',
withoutLabel : true,
attribute : 'interest',
entity : 'CurrentQuotas',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNSU_173662",
label : cobis.translate('ASSTS.LBL_ASSTS_OTROSRURR_25485'),
field : 'others',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNSU_173662',
name :'others',
withoutLabel : true,
attribute : 'others',
entity : 'CurrentQuotas',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSKI_427662",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALCUTA_93906'),
field : 'total',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSKI_427662',
name :'total',
withoutLabel : true,
attribute : 'total',
entity : 'CurrentQuotas',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHJL_257662",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHJL_257662',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'CurrentQuotas',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.Spacer2497.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAPRRR_50144");
this.Spacer2497.entity = "ExtendsQuota";
this.Spacer2497.attribute = "extendsDate";
this.Spacer2497.isCustomValidated=true;
this.Spacer2497.name="extendsDate";
this.Spacer2497.id="Spacer2497";
this.Spacer2497.colSpan=1;
this.Spacer2497.withoutLabel = false;
this.Spacer2497.readOnly = ConstantsApi.mode.Query;
this.Spacer2497.enabled = ConstantsApi.mode.All;
this.Spacer2497.visible= ConstantsApi.mode.All;
this.Spacer2749.id = "Spacer2749";
this.Spacer2749.name = "maximumDateExtended";
this.Spacer2749.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAMXPR_21186");
this.Spacer2749.attribute = "maximumDateExtended";
this.Spacer2749.colSpan = 1;
this.Spacer2749.withoutLabel = false;
this.Spacer2749.enabled = ConstantsApi.mode.All;
this.Spacer2749.visible= ConstantsApi.mode.All;
this.QV_5312_48027.pageSize=5;
this.QV_5312_48027.id='QV_5312_48027';
this.QV_5312_48027.name='QV_5312_48027';
this.QV_5312_48027.pageable=true;
this.QV_5312_48027.sortable=false;
this.QV_5312_48027.resizable=true;
this.QV_5312_48027.scrollable=true
this.QV_5312_48027.confirmRowDeletion=false;
this.QV_5312_48027.exportToExcel=false;
this.QV_5312_48027.exportToPdf=false;
this.QV_5312_48027.height=0;
this.QV_5312_48027.filterableColumns=false;
this.QV_5312_48027.entityName='ExtendsQuotaExt';
this.QV_5312_48027.appendRecords=false;
this.QV_5312_48027.rowDetail=false;
this.QV_5312_48027.columnMenu = true;
this.QV_5312_48027.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_5312_48027.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_5312_48027.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXQAR_993662",
label : cobis.translate('ASSTS.LBL_ASSTS_NROCUOTAA_13299'),
field : 'quotaExt',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQAR_993662',
name :'quotaExt',
withoutLabel : true,
attribute : 'quotaExt',
entity : 'ExtendsQuotaExt',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDENSHZO_505662",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAINIC_17794'),
field : 'startDateExt',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDENSHZO_505662',
name :'startDateExt',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'startDateExt',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'ExtendsQuotaExt',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_DATEFIELDXYSJRW_527662",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENE_91475'),
field : 'endDateExt',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDXYSJRW_527662',
name :'endDateExt',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'endDateExt',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'ExtendsQuotaExt',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXRQU_339662",
label : cobis.translate('ASSTS.LBL_ASSTS_CAPITALBZ_88457'),
field : 'capitalExt',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRQU_339662',
name :'capitalExt',
withoutLabel : true,
attribute : 'capitalExt',
entity : 'ExtendsQuotaExt',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQSF_971662",
label : cobis.translate('ASSTS.LBL_ASSTS_INTERESWJ_80123'),
field : 'interestExt',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQSF_971662',
name :'interestExt',
withoutLabel : true,
attribute : 'interestExt',
entity : 'ExtendsQuotaExt',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXENP_579662",
label : cobis.translate('ASSTS.LBL_ASSTS_OTROSRURR_25485'),
field : 'others',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXENP_579662',
name :'others',
withoutLabel : true,
attribute : 'others',
entity : 'ExtendsQuotaExt',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVFS_528662",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALCUTA_93906'),
field : 'total',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVFS_528662',
name :'total',
withoutLabel : true,
attribute : 'total',
entity : 'ExtendsQuotaExt',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDCK_638662",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDCK_638662',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'ExtendsQuotaExt',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.VA_NUMBERQUOTAHUXZ_811662.entity = "ExtendsQuota";
this.VA_NUMBERQUOTAHUXZ_811662.attribute = "numberQuota";
this.VA_NUMBERQUOTAHUXZ_811662.textCase= TextCaseOptions.NONE;
this.VA_NUMBERQUOTAHUXZ_811662.format= "n0";
this.VA_NUMBERQUOTAHUXZ_811662.name="numberQuota";
this.VA_NUMBERQUOTAHUXZ_811662.id="VA_NUMBERQUOTAHUXZ_811662";
this.VA_NUMBERQUOTAHUXZ_811662.colSpan=1;
this.VA_NUMBERQUOTAHUXZ_811662.withoutLabel = false;
this.VA_NUMBERQUOTAHUXZ_811662.readOnly = ConstantsApi.mode.Query;
this.VA_NUMBERQUOTAHUXZ_811662.enabled = ConstantsApi.mode.All;
this.VA_NUMBERQUOTAHUXZ_811662.visible= ConstantsApi.mode.All;
this.VA_EXPIRATIONDAETE_519662.entity = "ExtendsQuota";
this.VA_EXPIRATIONDAETE_519662.attribute = "expirationDate";
this.VA_EXPIRATIONDAETE_519662.name="expirationDate";
this.VA_EXPIRATIONDAETE_519662.id="VA_EXPIRATIONDAETE_519662";
this.VA_EXPIRATIONDAETE_519662.colSpan=1;
this.VA_EXPIRATIONDAETE_519662.withoutLabel = false;
this.VA_EXPIRATIONDAETE_519662.readOnly = ConstantsApi.mode.Query;
this.VA_EXPIRATIONDAETE_519662.enabled = ConstantsApi.mode.All;
this.VA_EXPIRATIONDAETE_519662.visible= ConstantsApi.mode.All;
this.T_EXTENDSQUONTA_926 = this.formBuilder.group({
Loan: this.formBuilder.group({
loanBankID:[{value: null, disabled: !this.VA_VASIMPLELABELLL_867612.visible}],
amount:[{value: null, disabled: !this.VA_5034UOFCASVGKTK_993612.visible}],
balanceDue:[{value: null, disabled: !this.VA_2463BHBNLZPKLMU_865612.visible}],
status:[{value: null, disabled: !this.VA_3853RRTWBIRUGHQ_533612.visible}],
office:[{value: null, disabled: !this.VA_7292SEAHPRAXOKC_868612.visible}],
numProcedure:[null],
quotaCredit:[null],
statusID:[null],
maxDateProrogation:[null],
lastProcessDate:[null],
category:[null],
operationTypeID:[null],
codCurrency:[null],
newStatusID:[null],
isDisbursment:[null],
mnemonic:[null],
natureOp:[null],
migratedOper:[null],
amortizationType:[null],
loanID:[null],
officeID:[null],
amountApproved:[null],
currencyName:[null],
startDate:[null],
statusCopy:[null],
idType:[null],
endDate:[null],
fondeadorLS:[null],
identityCardNumber:[null],
desOperationType:[null],
redesCont:[null],
newStatus:[null],
group:[null],
tipo:[null],
previousOper:[null],
categoryGroup:[null],
clientID:[null],
operationType:[null],
clientName:[null],
disbursementDate:[null],
expirationDate:[null],
officer:[null],
sector:[null],
nextPayment:[null],
effectiveAnualRate:[null],
adjustment:[null],
officerID:[null],
feeEndDate:[null],
}
),
CurrentQuotas: this.formBuilder.group({
quota:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2921_98487.columns,'VA_TEXTINPUTBOXKUL_165662')],
startDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2921_98487.columns,'VA_DATEFIELDKHVZHE_598662')],
endDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2921_98487.columns,'VA_DATEFIELDOSHXSD_216662')],
capital:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2921_98487.columns,'VA_TEXTINPUTBOXEDY_233662')],
interest:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2921_98487.columns,'VA_TEXTINPUTBOXJTQ_372662')],
others:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2921_98487.columns,'VA_TEXTINPUTBOXNSU_173662')],
total:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2921_98487.columns,'VA_TEXTINPUTBOXSKI_427662')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2921_98487.columns,'VA_TEXTINPUTBOXHJL_257662')],
}
),
ExtendsQuota: this.formBuilder.group({
extendsDate:[{value: null, disabled: !this.Spacer2497.visible},CobisDesignerUtil.getValidationFunctions(this.Spacer2497.validationFunctions!)],
maximumDateExtended:[{value: null, disabled: !this.Spacer2749.visible}],
numberQuota:[{value: null, disabled: !this.VA_NUMBERQUOTAHUXZ_811662.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMBERQUOTAHUXZ_811662.validationFunctions!)],
expirationDate:[{value: null, disabled: !this.VA_EXPIRATIONDAETE_519662.visible},CobisDesignerUtil.getValidationFunctions(this.VA_EXPIRATIONDAETE_519662.validationFunctions!)],
processDate:[null],
}
),
ExtendsQuotaExt: this.formBuilder.group({
quotaExt:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5312_48027.columns,'VA_TEXTINPUTBOXQAR_993662')],
startDateExt:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5312_48027.columns,'VA_DATEFIELDENSHZO_505662')],
endDateExt:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5312_48027.columns,'VA_DATEFIELDXYSJRW_527662')],
capitalExt:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5312_48027.columns,'VA_TEXTINPUTBOXRQU_339662')],
interestExt:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5312_48027.columns,'VA_TEXTINPUTBOXQSF_971662')],
others:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5312_48027.columns,'VA_TEXTINPUTBOXENP_579662')],
total:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5312_48027.columns,'VA_TEXTINPUTBOXVFS_528662')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5312_48027.columns,'VA_TEXTINPUTBOXDCK_638662')],
}
),
});
}
}