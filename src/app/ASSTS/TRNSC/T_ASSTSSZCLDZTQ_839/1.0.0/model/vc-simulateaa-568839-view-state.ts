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
public T_ASSTSSZCLDZTQ_839!:FormGroup;
public VC_SIMULATEAA_568839:CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_HSQKWBMJAF_924316 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADOD_564612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADRO_349612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEAINF_340612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_DGQQAMVMPP_428839 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_HJUFOXXPVD_591915 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_SIMULATEEE_319982 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_SIMULATEEE_597982 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_SIMULATEEE_617982 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_AV40_EIS41: CobisGridModel = new CobisGridModel();
public VA_VASIMPLELABELLL_143612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_867612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VABUTTONWVITZRQ_108612: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONORYJAMS_468612: CobisButtonModel = new CobisButtonModel();
public VA_5034UOFCASVGKTK_993612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_2463BHBNLZPKLMU_865612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_3853RRTWBIRUGHQ_533612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_7292SEAHPRAXOKC_868612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_3114DYOIQOVZVVS_763982: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer1523: CobisSpacerModel = new CobisSpacerModel();
public Spacer2179: CobisSpacerModel = new CobisSpacerModel();
public VA_9325HMVCFBYGKEC_795982: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_2369DGOLAKHUZKA_978982: CobisDropDownListModel = new CobisDropDownListModel();
public CM_TASSTSSZ_C3T: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSSZ___7: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_SIMULATEAA_568839.id="VC_SIMULATEAA_568839";
this.VC_SIMULATEAA_568839.name="ViewContainerBase";
this.VC_SIMULATEAA_568839.colSpan=1;
this.VC_SIMULATEAA_568839.columns=1;
this.VC_SIMULATEAA_568839.enabled=ConstantsApi.mode.All;
this.VC_HSQKWBMJAF_924316.id="VC_HSQKWBMJAF_924316";
this.VC_HSQKWBMJAF_924316.name="LoanHeaderInfoForm";
this.VC_HSQKWBMJAF_924316.enabled=ConstantsApi.mode.All;
this.VC_HSQKWBMJAF_924316.colSpan=1;
this.VC_HSQKWBMJAF_924316.columns=1;
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
this.VC_DGQQAMVMPP_428839.id="VC_DGQQAMVMPP_428839";
this.VC_DGQQAMVMPP_428839.name="ViewContainerBase";
this.VC_DGQQAMVMPP_428839.enabled=ConstantsApi.mode.All;
this.VC_DGQQAMVMPP_428839.colSpan=1;
this.VC_DGQQAMVMPP_428839.columns=1;
this.VC_HJUFOXXPVD_591915.id="VC_HJUFOXXPVD_591915";
this.VC_HJUFOXXPVD_591915.name="SimulateForm";
this.VC_HJUFOXXPVD_591915.enabled=ConstantsApi.mode.All;
this.VC_HJUFOXXPVD_591915.colSpan=1;
this.VC_HJUFOXXPVD_591915.columns=1;
this.G_SIMULATEEE_319982.id="G_SIMULATEEE_319982";
this.G_SIMULATEEE_319982.name="GroupLayout1280";
this.G_SIMULATEEE_319982.columns=3;
this.G_SIMULATEEE_319982.childrenGroups = ["G_SIMULATEEE_597982","G_SIMULATEEE_617982"];
this.G_SIMULATEEE_319982.colSpan=1;
this.G_SIMULATEEE_319982.enabled=ConstantsApi.mode.All;
this.G_SIMULATEEE_319982.visible=ConstantsApi.mode.All;
this.G_SIMULATEEE_597982.id="G_SIMULATEEE_597982";
this.G_SIMULATEEE_597982.name="Group2908";
this.G_SIMULATEEE_597982.columns=3;
this.G_SIMULATEEE_597982.labelOrientation="Top";
this.G_SIMULATEEE_597982.colSpan=3;
this.G_SIMULATEEE_597982.enabled=ConstantsApi.mode.All;
this.G_SIMULATEEE_597982.visible=ConstantsApi.mode.All;
this.G_SIMULATEEE_597982.attList = ["amountPrepayment","amountPayment","currencyType"];
this.G_SIMULATEEE_617982.id="G_SIMULATEEE_617982";
this.G_SIMULATEEE_617982.name="Group1338";
this.G_SIMULATEEE_617982.columns=1;
this.G_SIMULATEEE_617982.labelOrientation="Top";
this.G_SIMULATEEE_617982.colSpan=3;
this.G_SIMULATEEE_617982.enabled=ConstantsApi.mode.All;
this.G_SIMULATEEE_617982.visible=ConstantsApi.mode.All;
this.G_SIMULATEEE_617982.attList = ["description","expired","active","inactive","total"];
this.CM_TASSTSSZ_C3T.id = "CM_TASSTSSZ_C3T";
this.CM_TASSTSSZ_C3T.name = "Command1";
this.CM_TASSTSSZ_C3T.causesValidation=false;
this.CM_TASSTSSZ_C3T.submitOnEnter=false;
this.CM_TASSTSSZ_C3T.setFocus=false;
this.CM_TASSTSSZ_C3T.close=false;
this.CM_TASSTSSZ_C3T.label = cobis.translate("ASSTS.LBL_ASSTS_NEGOCIANI_54038");
this.CM_TASSTSSZ_C3T.enabled = ConstantsApi.mode.All;
this.CM_TASSTSSZ_C3T.visible= ConstantsApi.mode.All;
this.CM_TASSTSSZ___7.id = "CM_TASSTSSZ___7";
this.CM_TASSTSSZ___7.name = "Command2";
this.CM_TASSTSSZ___7.causesValidation=false;
this.CM_TASSTSSZ___7.submitOnEnter=false;
this.CM_TASSTSSZ___7.setFocus=false;
this.CM_TASSTSSZ___7.close=false;
this.CM_TASSTSSZ___7.label = cobis.translate("ASSTS.LBL_ASSTS_CALCULARR_78724");
this.CM_TASSTSSZ___7.enabled = ConstantsApi.mode.All;
this.CM_TASSTSSZ___7.visible= ConstantsApi.mode.All;
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
this.VA_3114DYOIQOVZVVS_763982.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOPRAC_46646");
this.VA_3114DYOIQOVZVVS_763982.entity = "Payment";
this.VA_3114DYOIQOVZVVS_763982.attribute = "amountPrepayment";
this.VA_3114DYOIQOVZVVS_763982.textCase= TextCaseOptions.NONE;
this.VA_3114DYOIQOVZVVS_763982.format= "c";
this.VA_3114DYOIQOVZVVS_763982.name="amountPrepayment";
this.VA_3114DYOIQOVZVVS_763982.id="VA_3114DYOIQOVZVVS_763982";
this.VA_3114DYOIQOVZVVS_763982.colSpan=1;
this.VA_3114DYOIQOVZVVS_763982.withoutLabel = false;
this.VA_3114DYOIQOVZVVS_763982.readOnly = ConstantsApi.mode.Query;
this.VA_3114DYOIQOVZVVS_763982.enabled = ConstantsApi.mode.None;
this.VA_3114DYOIQOVZVVS_763982.visible= ConstantsApi.mode.All;
this.Spacer1523.id = "Spacer1523";
this.Spacer1523.name = "Spacer1523";
this.Spacer1523.colSpan = 1;
this.Spacer1523.visible= ConstantsApi.mode.All;
this.Spacer2179.id = "Spacer2179";
this.Spacer2179.name = "Spacer2179";
this.Spacer2179.colSpan = 1;
this.Spacer2179.visible= ConstantsApi.mode.All;
this.VA_9325HMVCFBYGKEC_795982.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOPAGO_63640");
this.VA_9325HMVCFBYGKEC_795982.entity = "Payment";
this.VA_9325HMVCFBYGKEC_795982.attribute = "amountPayment";
this.VA_9325HMVCFBYGKEC_795982.textCase= TextCaseOptions.NONE;
this.VA_9325HMVCFBYGKEC_795982.format= "c";
this.VA_9325HMVCFBYGKEC_795982.name="amountPayment";
this.VA_9325HMVCFBYGKEC_795982.id="VA_9325HMVCFBYGKEC_795982";
this.VA_9325HMVCFBYGKEC_795982.colSpan=1;
this.VA_9325HMVCFBYGKEC_795982.withoutLabel = false;
this.VA_9325HMVCFBYGKEC_795982.readOnly = ConstantsApi.mode.Query;
this.VA_9325HMVCFBYGKEC_795982.enabled = ConstantsApi.mode.All;
this.VA_9325HMVCFBYGKEC_795982.visible= ConstantsApi.mode.All;
this.VA_9325HMVCFBYGKEC_795982.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN)]
]);
this.VA_9325HMVCFBYGKEC_795982.messagesValidations = {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_SEDEBERZE_11978')
};
this.VA_2369DGOLAKHUZKA_978982.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDALEE_61099");
this.VA_2369DGOLAKHUZKA_978982.entity = "Payment";
this.VA_2369DGOLAKHUZKA_978982.attribute = "currencyType";
this.VA_2369DGOLAKHUZKA_978982.textField = "value";
this.VA_2369DGOLAKHUZKA_978982.valueField = "code";
this.VA_2369DGOLAKHUZKA_978982.showId= true;
this.VA_2369DGOLAKHUZKA_978982.name="currencyType";
this.VA_2369DGOLAKHUZKA_978982.id="VA_2369DGOLAKHUZKA_978982";
this.VA_2369DGOLAKHUZKA_978982.colSpan=1;
this.VA_2369DGOLAKHUZKA_978982.withoutLabel = false;
this.VA_2369DGOLAKHUZKA_978982.readOnly = ConstantsApi.mode.Query;
this.VA_2369DGOLAKHUZKA_978982.enabled = ConstantsApi.mode.None;
this.VA_2369DGOLAKHUZKA_978982.visible= ConstantsApi.mode.All;
this.QV_AV40_EIS41.pageSize=5;
this.QV_AV40_EIS41.id='QV_AV40_EIS41';
this.QV_AV40_EIS41.name='QV_AV40_EIS41';
this.QV_AV40_EIS41.pageable=true;
this.QV_AV40_EIS41.sortable=false;
this.QV_AV40_EIS41.resizable=true;
this.QV_AV40_EIS41.scrollable=true
this.QV_AV40_EIS41.confirmRowDeletion=false;
this.QV_AV40_EIS41.exportToExcel=false;
this.QV_AV40_EIS41.exportToPdf=false;
this.QV_AV40_EIS41.height=0;
this.QV_AV40_EIS41.filterableColumns=false;
this.QV_AV40_EIS41.entityName='QuoteDetails';
this.QV_AV40_EIS41.appendRecords=false;
this.QV_AV40_EIS41.rowDetail=false;
this.QV_AV40_EIS41.columnMenu = true;
this.QV_AV40_EIS41.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_AV40_EIS41.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
this.QV_AV40_EIS41.commandsButton=[
{
id : 'CEQV_201QV_AV40_EIS41_373',
image:'',
label: cobis.translate('ASSTS.LBL_ASSTS_TABLAAMIO_45588'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Hyperlink',
enabled:true,
visible:true
},
];
//RowCommands:
//Creacion de columnas del Grid
this.QV_AV40_EIS41.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXHZE_443982",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXHZE_443982',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXFRJ_728982",
label : cobis.translate('ASSTS.LBL_ASSTS_VENCIDOUG_82584'),
field : 'expired',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXFRJ_728982',
name :'expired',
withoutLabel : true,
attribute : 'expired',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXFZY_802982",
label : cobis.translate('ASSTS.LBL_ASSTS_VIGENTEON_55349'),
field : 'active',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXFZY_802982',
name :'active',
withoutLabel : true,
attribute : 'active',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXPDW_447982",
label : cobis.translate('ASSTS.LBL_ASSTS_NOVIGENTT_94041'),
field : 'inactive',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXPDW_447982',
name :'inactive',
withoutLabel : true,
attribute : 'inactive',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXPRK_338982",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALBPNF_51557'),
field : 'total',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXPRK_338982',
name :'total',
withoutLabel : true,
attribute : 'total',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
]);
this.T_ASSTSSZCLDZTQ_839 = this.formBuilder.group({
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
Payment: this.formBuilder.group({
amountPrepayment:[{value: null, disabled: !this.VA_3114DYOIQOVZVVS_763982.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3114DYOIQOVZVVS_763982.validationFunctions!)],
amountPayment:[{value: null, disabled: !this.VA_9325HMVCFBYGKEC_795982.visible},CobisDesignerUtil.getValidationFunctions(this.VA_9325HMVCFBYGKEC_795982.validationFunctions!)],
currencyType:[{value: null, disabled: !this.VA_2369DGOLAKHUZKA_978982.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2369DGOLAKHUZKA_978982.validationFunctions!)],
amount:[null],
referencedAccount:[null],
amountPayAux:[null],
typeQuotationTr:[null],
retention:[null],
customerID:[null],
typeQuotationOp:[null],
reductionType:[null],
user:[null],
paymentType:[null],
category:[null],
date:[null],
collectionType:[null],
entireFee:[null],
quotationValue:[null],
payQuotationValue:[null],
reference:[null],
numCheck:[null],
continuePayment:[null],
finePrepayment:[null],
operationTypeId:[null],
operationCurrencyType:[null],
value:[null],
datePay:[null],
querySequential:[null],
prePaymentAux:[null],
advance:[null],
quotation:[null],
sequential:[null],
customer:[null],
negotiated:[null],
bank:[null],
amountPay:[null],
onLine:[null],
unappliedPayments:[null],
sequentialPay:[null],
status:[null],
processDate:[null],
regional:[null],
billTo:[null],
unappliedAmount:[null],
note:[null],
prepayRate:[null],
}
),
QuoteDetails: this.formBuilder.group({
description:null,
expired:null,
active:null,
inactive:null,
total:null,
}
),
});
}
}