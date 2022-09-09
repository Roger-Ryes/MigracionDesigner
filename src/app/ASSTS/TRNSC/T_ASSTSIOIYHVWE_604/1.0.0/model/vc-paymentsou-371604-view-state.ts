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
public T_ASSTSIOIYHVWE_604!:FormGroup;
public VC_PAYMENTSOU_371604:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTORO_312816 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTOPS_108816 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_YE76_DAK33: CobisGridModel = new CobisGridModel();
public G_PAYMENTOGU_441816 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTSGU_508816 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTRPG_238816 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTSPO_100816 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_1FUPLRKCFOKJMDX_830816: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_2VIZAKMOCHSERDM_494816: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_3NNJJQYPQRVUXZJ_555816: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_6GLPWPZTYAOQYNQ_267816: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_7FPUHKLPJGMGQXS_535816: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_8RLTRDREBRIGTVW_871816: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2979: CobisSpacerModel = new CobisSpacerModel();
public VA_6IXQVXOJTRUVSHF_737816: CobisDateFieldModel = new CobisDateFieldModel();
public VA_1MVJRDIJAIBEKBY_880816: CobisDropDownListModel = new CobisDropDownListModel();
public VA_2PVZZFNDSNWIITT_119816: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_3NOEHOUBCWRSQSM_770816: CobisDropDownListModel = new CobisDropDownListModel();
public VA_4NBXAHKTENRTSQZ_638816: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PAYMENTSOU_371604.id="VC_PAYMENTSOU_371604";
this.VC_PAYMENTSOU_371604.name="PaymentsFormGroup";
this.VC_PAYMENTSOU_371604.colSpan=1;
this.VC_PAYMENTSOU_371604.columns=1;
this.VC_PAYMENTSOU_371604.enabled=ConstantsApi.mode.None;
this.G_PAYMENTORO_312816.id="G_PAYMENTORO_312816";
this.G_PAYMENTORO_312816.name="GroupLayout1964";
this.G_PAYMENTORO_312816.columns=1;
this.G_PAYMENTORO_312816.childrenGroups = ["G_PAYMENTOPS_108816"];
this.G_PAYMENTORO_312816.colSpan=1;
this.G_PAYMENTORO_312816.enabled=ConstantsApi.mode.All;
this.G_PAYMENTORO_312816.visible=ConstantsApi.mode.All;
this.G_PAYMENTOPS_108816.id="G_PAYMENTOPS_108816";
this.G_PAYMENTOPS_108816.label=cobis.translate("ASSTS.LBL_ASSTS_PAGOSBHJO_80531");
this.G_PAYMENTOPS_108816.name="Group2752";
this.G_PAYMENTOPS_108816.columns=1;
this.G_PAYMENTOPS_108816.labelOrientation="Top";
this.G_PAYMENTOPS_108816.colSpan=1;
this.G_PAYMENTOPS_108816.enabled=ConstantsApi.mode.All;
this.G_PAYMENTOPS_108816.visible=ConstantsApi.mode.All;
this.G_PAYMENTOPS_108816.attList = ["etiqueta","codigo","descripcion"];
this.G_PAYMENTOGU_441816.id="G_PAYMENTOGU_441816";
this.G_PAYMENTOGU_441816.name="GroupLayout2407";
this.G_PAYMENTOGU_441816.columns=3;
this.G_PAYMENTOGU_441816.childrenGroups = ["G_EMPTYSSJLI_703816","G_PAYMENTSGU_508816","G_EMPTYJYMTK_655816"];
this.G_PAYMENTOGU_441816.colSpan=1;
this.G_PAYMENTOGU_441816.enabled=ConstantsApi.mode.All;
this.G_PAYMENTOGU_441816.visible=ConstantsApi.mode.All;
this.G_PAYMENTSGU_508816.id="G_PAYMENTSGU_508816";
this.G_PAYMENTSGU_508816.name="Group2513";
this.G_PAYMENTSGU_508816.columns=1;
this.G_PAYMENTSGU_508816.labelOrientation="Left";
this.G_PAYMENTSGU_508816.colSpan=1;
this.G_PAYMENTSGU_508816.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSGU_508816.visible=ConstantsApi.mode.All;
this.G_PAYMENTSGU_508816.attList = ["vencidoGrupal","vencidoInterciclo","vigenteGrupal","vigenteInterciclo","totalExigible","totalPrecancelar"];
this.G_PAYMENTRPG_238816.id="G_PAYMENTRPG_238816";
this.G_PAYMENTRPG_238816.name="GroupLayout1256";
this.G_PAYMENTRPG_238816.columns=3;
this.G_PAYMENTRPG_238816.childrenGroups = ["G_EMPTYWWSNF_468816","G_PAYMENTSPO_100816","G_EMPTYLVQQR_978816"];
this.G_PAYMENTRPG_238816.colSpan=1;
this.G_PAYMENTRPG_238816.enabled=ConstantsApi.mode.All;
this.G_PAYMENTRPG_238816.visible=ConstantsApi.mode.All;
this.G_PAYMENTSPO_100816.id="G_PAYMENTSPO_100816";
this.G_PAYMENTSPO_100816.name="Group2698";
this.G_PAYMENTSPO_100816.columns=1;
this.G_PAYMENTSPO_100816.labelOrientation="Left";
this.G_PAYMENTSPO_100816.colSpan=1;
this.G_PAYMENTSPO_100816.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSPO_100816.visible=ConstantsApi.mode.All;
this.G_PAYMENTSPO_100816.attList = ["date","paymentsType","reference","currencyType","value"];
this.QV_YE76_DAK33.id='QV_YE76_DAK33';
this.QV_YE76_DAK33.name='QV_YE76_DAK33';
this.QV_YE76_DAK33.pageable=false;
this.QV_YE76_DAK33.sortable=false;
this.QV_YE76_DAK33.resizable=false;
this.QV_YE76_DAK33.scrollable=false
this.QV_YE76_DAK33.confirmRowDeletion=false;
this.QV_YE76_DAK33.exportToExcel=false;
this.QV_YE76_DAK33.exportToPdf=false;
this.QV_YE76_DAK33.height=0;
this.QV_YE76_DAK33.filterableColumns=false;
this.QV_YE76_DAK33.entityName='PaymentListGroupClient';
this.QV_YE76_DAK33.appendRecords=false;
this.QV_YE76_DAK33.rowDetail=false;
this.QV_YE76_DAK33.columnMenu = true;
this.QV_YE76_DAK33.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_YE76_DAK33.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_YE76_DAK33.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXNNP_119816",
field : 'etiqueta',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_TEXTINPUTBOXNNP_119816',
name :'etiqueta',
withoutLabel : true,
attribute : 'etiqueta',
entity : 'PaymentListGroupClient',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXLGR_859816",
field : 'codigo',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_TEXTINPUTBOXLGR_859816',
name :'codigo',
withoutLabel : true,
attribute : 'codigo',
entity : 'PaymentListGroupClient',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXTET_747816",
field : 'descripcion',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_TEXTINPUTBOXTET_747816',
name :'descripcion',
withoutLabel : true,
attribute : 'descripcion',
entity : 'PaymentListGroupClient',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
]);
this.VA_1FUPLRKCFOKJMDX_830816.label = cobis.translate("ASSTS.LBL_ASSTS_VENCIDOGL_99403");
this.VA_1FUPLRKCFOKJMDX_830816.entity = "LoanPaymentGroup";
this.VA_1FUPLRKCFOKJMDX_830816.attribute = "vencidoGrupal";
this.VA_1FUPLRKCFOKJMDX_830816.textCase= TextCaseOptions.UPPER_CASE;
this.VA_1FUPLRKCFOKJMDX_830816.textLocked = true;
this.VA_1FUPLRKCFOKJMDX_830816.format= "c";
this.VA_1FUPLRKCFOKJMDX_830816.name="vencidoGrupal";
this.VA_1FUPLRKCFOKJMDX_830816.id="VA_1FUPLRKCFOKJMDX_830816";
this.VA_1FUPLRKCFOKJMDX_830816.colSpan=1;
this.VA_1FUPLRKCFOKJMDX_830816.withoutLabel = false;
this.VA_1FUPLRKCFOKJMDX_830816.readOnly = ConstantsApi.mode.None;
this.VA_1FUPLRKCFOKJMDX_830816.enabled = ConstantsApi.mode.None;
this.VA_1FUPLRKCFOKJMDX_830816.visible= ConstantsApi.mode.All;
this.VA_2VIZAKMOCHSERDM_494816.label = cobis.translate("ASSTS.LBL_ASSTS_VENCIDOCI_64154");
this.VA_2VIZAKMOCHSERDM_494816.entity = "LoanPaymentGroup";
this.VA_2VIZAKMOCHSERDM_494816.attribute = "vencidoInterciclo";
this.VA_2VIZAKMOCHSERDM_494816.textCase= TextCaseOptions.UPPER_CASE;
this.VA_2VIZAKMOCHSERDM_494816.textLocked = true;
this.VA_2VIZAKMOCHSERDM_494816.format= "c";
this.VA_2VIZAKMOCHSERDM_494816.name="vencidoInterciclo";
this.VA_2VIZAKMOCHSERDM_494816.id="VA_2VIZAKMOCHSERDM_494816";
this.VA_2VIZAKMOCHSERDM_494816.colSpan=1;
this.VA_2VIZAKMOCHSERDM_494816.withoutLabel = false;
this.VA_2VIZAKMOCHSERDM_494816.readOnly = ConstantsApi.mode.Query;
this.VA_2VIZAKMOCHSERDM_494816.enabled = ConstantsApi.mode.None;
this.VA_2VIZAKMOCHSERDM_494816.visible= ConstantsApi.mode.All;
this.VA_3NNJJQYPQRVUXZJ_555816.label = cobis.translate("ASSTS.LBL_ASSTS_VIGENTEAR_47847");
this.VA_3NNJJQYPQRVUXZJ_555816.entity = "LoanPaymentGroup";
this.VA_3NNJJQYPQRVUXZJ_555816.attribute = "vigenteGrupal";
this.VA_3NNJJQYPQRVUXZJ_555816.textCase= TextCaseOptions.UPPER_CASE;
this.VA_3NNJJQYPQRVUXZJ_555816.textLocked = true;
this.VA_3NNJJQYPQRVUXZJ_555816.format= "c";
this.VA_3NNJJQYPQRVUXZJ_555816.name="vigenteGrupal";
this.VA_3NNJJQYPQRVUXZJ_555816.id="VA_3NNJJQYPQRVUXZJ_555816";
this.VA_3NNJJQYPQRVUXZJ_555816.colSpan=1;
this.VA_3NNJJQYPQRVUXZJ_555816.withoutLabel = false;
this.VA_3NNJJQYPQRVUXZJ_555816.readOnly = ConstantsApi.mode.Query;
this.VA_3NNJJQYPQRVUXZJ_555816.enabled = ConstantsApi.mode.None;
this.VA_3NNJJQYPQRVUXZJ_555816.visible= ConstantsApi.mode.All;
this.VA_6GLPWPZTYAOQYNQ_267816.label = cobis.translate("ASSTS.LBL_ASSTS_VIGENTECI_82085");
this.VA_6GLPWPZTYAOQYNQ_267816.entity = "LoanPaymentGroup";
this.VA_6GLPWPZTYAOQYNQ_267816.attribute = "vigenteInterciclo";
this.VA_6GLPWPZTYAOQYNQ_267816.textCase= TextCaseOptions.UPPER_CASE;
this.VA_6GLPWPZTYAOQYNQ_267816.textLocked = true;
this.VA_6GLPWPZTYAOQYNQ_267816.format= "c";
this.VA_6GLPWPZTYAOQYNQ_267816.name="vigenteInterciclo";
this.VA_6GLPWPZTYAOQYNQ_267816.id="VA_6GLPWPZTYAOQYNQ_267816";
this.VA_6GLPWPZTYAOQYNQ_267816.colSpan=1;
this.VA_6GLPWPZTYAOQYNQ_267816.withoutLabel = false;
this.VA_6GLPWPZTYAOQYNQ_267816.readOnly = ConstantsApi.mode.Query;
this.VA_6GLPWPZTYAOQYNQ_267816.enabled = ConstantsApi.mode.None;
this.VA_6GLPWPZTYAOQYNQ_267816.visible= ConstantsApi.mode.All;
this.VA_7FPUHKLPJGMGQXS_535816.label = cobis.translate("ASSTS.LBL_ASSTS_TOTALEXIG_45949");
this.VA_7FPUHKLPJGMGQXS_535816.entity = "LoanPaymentGroup";
this.VA_7FPUHKLPJGMGQXS_535816.attribute = "totalExigible";
this.VA_7FPUHKLPJGMGQXS_535816.textCase= TextCaseOptions.UPPER_CASE;
this.VA_7FPUHKLPJGMGQXS_535816.textLocked = true;
this.VA_7FPUHKLPJGMGQXS_535816.format= "c";
this.VA_7FPUHKLPJGMGQXS_535816.name="totalExigible";
this.VA_7FPUHKLPJGMGQXS_535816.id="VA_7FPUHKLPJGMGQXS_535816";
this.VA_7FPUHKLPJGMGQXS_535816.colSpan=1;
this.VA_7FPUHKLPJGMGQXS_535816.withoutLabel = false;
this.VA_7FPUHKLPJGMGQXS_535816.readOnly = ConstantsApi.mode.Query;
this.VA_7FPUHKLPJGMGQXS_535816.enabled = ConstantsApi.mode.None;
this.VA_7FPUHKLPJGMGQXS_535816.visible= ConstantsApi.mode.All;
this.VA_8RLTRDREBRIGTVW_871816.label = cobis.translate("ASSTS.LBL_ASSTS_TOTALPRDE_33829");
this.VA_8RLTRDREBRIGTVW_871816.entity = "LoanPaymentGroup";
this.VA_8RLTRDREBRIGTVW_871816.attribute = "totalPrecancelar";
this.VA_8RLTRDREBRIGTVW_871816.textCase= TextCaseOptions.UPPER_CASE;
this.VA_8RLTRDREBRIGTVW_871816.textLocked = true;
this.VA_8RLTRDREBRIGTVW_871816.format= "c";
this.VA_8RLTRDREBRIGTVW_871816.name="totalPrecancelar";
this.VA_8RLTRDREBRIGTVW_871816.id="VA_8RLTRDREBRIGTVW_871816";
this.VA_8RLTRDREBRIGTVW_871816.colSpan=1;
this.VA_8RLTRDREBRIGTVW_871816.withoutLabel = false;
this.VA_8RLTRDREBRIGTVW_871816.readOnly = ConstantsApi.mode.Query;
this.VA_8RLTRDREBRIGTVW_871816.enabled = ConstantsApi.mode.None;
this.VA_8RLTRDREBRIGTVW_871816.visible= ConstantsApi.mode.All;
this.Spacer2979.id = "Spacer2979";
this.Spacer2979.name = "";
this.Spacer2979.colSpan = 1;
this.Spacer2979.visible= ConstantsApi.mode.All;
this.VA_6IXQVXOJTRUVSHF_737816.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAPAOO_88132");
this.VA_6IXQVXOJTRUVSHF_737816.entity = "PaymentGroup";
this.VA_6IXQVXOJTRUVSHF_737816.attribute = "date";
this.VA_6IXQVXOJTRUVSHF_737816.name="date";
this.VA_6IXQVXOJTRUVSHF_737816.id="VA_6IXQVXOJTRUVSHF_737816";
this.VA_6IXQVXOJTRUVSHF_737816.colSpan=1;
this.VA_6IXQVXOJTRUVSHF_737816.withoutLabel = false;
this.VA_6IXQVXOJTRUVSHF_737816.readOnly = ConstantsApi.mode.Query;
this.VA_6IXQVXOJTRUVSHF_737816.enabled = ConstantsApi.mode.All;
this.VA_6IXQVXOJTRUVSHF_737816.visible= ConstantsApi.mode.All;
this.VA_1MVJRDIJAIBEKBY_880816.label = cobis.translate("ASSTS.LBL_ASSTS_APAGOBVMQ_59941");
this.VA_1MVJRDIJAIBEKBY_880816.blankOption=true;
this.VA_1MVJRDIJAIBEKBY_880816.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCIRR_76753");
this.VA_1MVJRDIJAIBEKBY_880816.entity = "PaymentGroup";
this.VA_1MVJRDIJAIBEKBY_880816.attribute = "paymentsType";
this.VA_1MVJRDIJAIBEKBY_880816.textField = "value";
this.VA_1MVJRDIJAIBEKBY_880816.valueField = "code";
this.VA_1MVJRDIJAIBEKBY_880816.name="paymentsType";
this.VA_1MVJRDIJAIBEKBY_880816.id="VA_1MVJRDIJAIBEKBY_880816";
this.VA_1MVJRDIJAIBEKBY_880816.colSpan=1;
this.VA_1MVJRDIJAIBEKBY_880816.withoutLabel = false;
this.VA_1MVJRDIJAIBEKBY_880816.readOnly = ConstantsApi.mode.Query;
this.VA_1MVJRDIJAIBEKBY_880816.enabled = ConstantsApi.mode.All;
this.VA_1MVJRDIJAIBEKBY_880816.visible= ConstantsApi.mode.All;
this.VA_2PVZZFNDSNWIITT_119816.label = cobis.translate("ASSTS.LBL_ASSTS_REFERENCC_20812");
this.VA_2PVZZFNDSNWIITT_119816.entity = "PaymentGroup";
this.VA_2PVZZFNDSNWIITT_119816.attribute = "reference";
this.VA_2PVZZFNDSNWIITT_119816.maxlength= 24;
this.VA_2PVZZFNDSNWIITT_119816.textCase= TextCaseOptions.NONE;
this.VA_2PVZZFNDSNWIITT_119816.name="reference";
this.VA_2PVZZFNDSNWIITT_119816.id="VA_2PVZZFNDSNWIITT_119816";
this.VA_2PVZZFNDSNWIITT_119816.colSpan=1;
this.VA_2PVZZFNDSNWIITT_119816.withoutLabel = false;
this.VA_2PVZZFNDSNWIITT_119816.readOnly = ConstantsApi.mode.Query;
this.VA_2PVZZFNDSNWIITT_119816.enabled = ConstantsApi.mode.All;
this.VA_2PVZZFNDSNWIITT_119816.visible= ConstantsApi.mode.All;
this.VA_3NOEHOUBCWRSQSM_770816.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDAWBW_49541");
this.VA_3NOEHOUBCWRSQSM_770816.entity = "PaymentGroup";
this.VA_3NOEHOUBCWRSQSM_770816.attribute = "currencyType";
this.VA_3NOEHOUBCWRSQSM_770816.textField = "value";
this.VA_3NOEHOUBCWRSQSM_770816.valueField = "code";
this.VA_3NOEHOUBCWRSQSM_770816.name="currencyType";
this.VA_3NOEHOUBCWRSQSM_770816.id="VA_3NOEHOUBCWRSQSM_770816";
this.VA_3NOEHOUBCWRSQSM_770816.colSpan=1;
this.VA_3NOEHOUBCWRSQSM_770816.withoutLabel = false;
this.VA_3NOEHOUBCWRSQSM_770816.readOnly = ConstantsApi.mode.Query;
this.VA_3NOEHOUBCWRSQSM_770816.enabled = ConstantsApi.mode.None;
this.VA_3NOEHOUBCWRSQSM_770816.visible= ConstantsApi.mode.All;
this.VA_4NBXAHKTENRTSQZ_638816.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOXNTV_69592");
this.VA_4NBXAHKTENRTSQZ_638816.entity = "PaymentGroup";
this.VA_4NBXAHKTENRTSQZ_638816.attribute = "value";
this.VA_4NBXAHKTENRTSQZ_638816.textCase= TextCaseOptions.NONE;
this.VA_4NBXAHKTENRTSQZ_638816.format= "c";
this.VA_4NBXAHKTENRTSQZ_638816.name="value";
this.VA_4NBXAHKTENRTSQZ_638816.id="VA_4NBXAHKTENRTSQZ_638816";
this.VA_4NBXAHKTENRTSQZ_638816.colSpan=1;
this.VA_4NBXAHKTENRTSQZ_638816.withoutLabel = false;
this.VA_4NBXAHKTENRTSQZ_638816.readOnly = ConstantsApi.mode.Query;
this.VA_4NBXAHKTENRTSQZ_638816.enabled = ConstantsApi.mode.All;
this.VA_4NBXAHKTENRTSQZ_638816.visible= ConstantsApi.mode.All;
this.T_ASSTSIOIYHVWE_604 = this.formBuilder.group({
PaymentListGroupClient: this.formBuilder.group({
etiqueta:null,
codigo:null,
descripcion:null,
}
),
LoanPaymentGroup: this.formBuilder.group({
vencidoGrupal:[{value: null, disabled: !this.VA_1FUPLRKCFOKJMDX_830816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_1FUPLRKCFOKJMDX_830816.validationFunctions!)],
vencidoInterciclo:[{value: null, disabled: !this.VA_2VIZAKMOCHSERDM_494816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2VIZAKMOCHSERDM_494816.validationFunctions!)],
vigenteGrupal:[{value: null, disabled: !this.VA_3NNJJQYPQRVUXZJ_555816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3NNJJQYPQRVUXZJ_555816.validationFunctions!)],
vigenteInterciclo:[{value: null, disabled: !this.VA_6GLPWPZTYAOQYNQ_267816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_6GLPWPZTYAOQYNQ_267816.validationFunctions!)],
totalExigible:[{value: null, disabled: !this.VA_7FPUHKLPJGMGQXS_535816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_7FPUHKLPJGMGQXS_535816.validationFunctions!)],
totalPrecancelar:[{value: null, disabled: !this.VA_8RLTRDREBRIGTVW_871816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_8RLTRDREBRIGTVW_871816.validationFunctions!)],
nombreGrupo:[null],
grupo:[null],
}
),
PaymentGroup: this.formBuilder.group({
date:[{value: null, disabled: !this.VA_6IXQVXOJTRUVSHF_737816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_6IXQVXOJTRUVSHF_737816.validationFunctions!)],
paymentsType:[{value: null, disabled: !this.VA_1MVJRDIJAIBEKBY_880816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_1MVJRDIJAIBEKBY_880816.validationFunctions!)],
reference:[{value: null, disabled: !this.VA_2PVZZFNDSNWIITT_119816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2PVZZFNDSNWIITT_119816.validationFunctions!)],
currencyType:[{value: null, disabled: !this.VA_3NOEHOUBCWRSQSM_770816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3NOEHOUBCWRSQSM_770816.validationFunctions!)],
value:[{value: null, disabled: !this.VA_4NBXAHKTENRTSQZ_638816.visible},CobisDesignerUtil.getValidationFunctions(this.VA_4NBXAHKTENRTSQZ_638816.validationFunctions!)],
operacion:[null],
fechaUltProc:[null],
fechaVen:[null],
}
),
});
}
}