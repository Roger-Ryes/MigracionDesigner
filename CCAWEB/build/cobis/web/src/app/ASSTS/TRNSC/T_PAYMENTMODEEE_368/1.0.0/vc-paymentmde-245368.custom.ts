import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-paymentmde-245368.model';
import {
  ASSTSService
} from "src/app/ASSTS/service-modules/ASSTS.service";
import {
  CobisCommonsService,
  ReportParameter
} from 'cobis-commons';
import {
  CobisModelChangeCallbackEventArgs,
  CobisModelChangeEventArgs,
  CobisModelChangeGroupEventsArgs,
  CobisModelChangedGroupCallbackEventsArgs,
  CobisModelCustomValidateEventArgs,
  CobisModelCustomValidationEventArgs,
  CobisModelExecuteCommandEventArgs,
  CobisModelExecuteCommandCallbackEventArgs,
  CobisModelExecuteQueryCallbackEventArgs,
  CobisModelExecuteQueryEventArgs,
  CobisModelExportColumnsExecuteEventArgs,
  CobisModelInitDataCallbackEventArgs,
  CobisModelInitDataEventArgs,
  CobisModelItemGroupInformation,
  CobisModelLoadCatalogCallbackEventArgs,
  CobisModelLoadCatalogEventArgs,
  CobisModelLoadHeaderEventArgs,
  CobisModelOnCloseModalEventArgs,
  CobisModelOnCloseModalCallbackEventArgs,
  CobisModelOnInputButtonEventArgs,
  CobisModelOnTabClosingEventArgs,
  CobisModelRenderEventArgs,
  CobisModelGridAfterLeaveInLineRowEventArgs,
  CobisModelGridAfterCloseDialogEventArgs,
  CobisModelGridBeforeEnterInLineRowEventArgs,
  CobisModelGridBeforeOpenDialogEventArgs,
  CobisModelGridCommandCallbackEventArgs,
  CobisModelGridCommandExecuteEventArgs,
  CobisModelGridInitColumnTemplateEventArgs,
  CobisModelGridInitDetailTemplateEventArgs,
  CobisModelGridInitEditColumnTemplateEventArgs,
  CobisModelGridRowActionEventArgs,
  CobisModelGridRowActionCallbackEventArgs,
  CobisModelGridRowCommandCallbackEventArgs,
  CobisModelGridRowCommandExecuteEventArgs,
  CobisModelGridRowRenderingEventArgs,
  CobisModelGridRowSelectingEventArgs,
  CobisModelGridRowSelectingCallbackEventArgs,
  CobisModelGridShowRowDetailIconEventArgs,
  VisualValidationTypeEnum,
  ICobisCustomValidationsEventArgs,
  CobisDesignerCustomEvent
} from 'cobis-designer';

/* variables locales de T_PAYMENTMODEEE_368*/
let montoIni: any = null;

let montoIniDsDec: any = null;

export class VcPaymentmde245368Custom extends CobisDesignerCustomEvent {

  task_changeWithError: any = {};

  constructor(public cobis: CobisCommonsService, private ASSTS: ASSTSService) {
    super();
  }




  //*********** COMENTARIOS DE AYUDA **************
  //  Para imprimir mensajes en consola
  //  console.log("executeCommand");

  //  Para enviar mensaje use
  //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

  //  Para evitar que se continue con la validación a nivel de servidor
  //  eventArgs.commons.execServer = false;

  //**********************************************************
  //  Eventos de VISUAL ATTRIBUTES
  //**********************************************************   

  //"TaskId": "T_PAYMENTMODEEE_368"

  task_closeModalEvent_findCustomer = (args: any) => {
    let resp: any = args.commons.api.vc.dialogParameters;
    let customerCode: any = resp.CodeReceive;
    let CustomerName: any = resp.name;
    //var customerCode=  args.commons.api.vc.dialogParameters.CodeReceive;
    //var CustomerName=  args.commons.api.vc.dialogParameters.name;
    //var identification= args.commons.api.vc.dialogParameters.documentId;
    args.model.PaymentForm.clientFullName = customerCode + " - " + CustomerName;
    args.model.PaymentForm.clientId = customerCode;
  };

  //Entity: PaymentForm
  //PaymentForm.economicDestination (ComboBox) View: PaymentModeForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_Spacer1695 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;

  };

  //Entity: PaymentForm
  //PaymentForm.payFormId (DropDownList) View: PaymentModeForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_Spacer2675 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    let api: any = changedEventArgs.commons.api;
    let viewState: any = api.viewState;

    /*if (changeEventArgs.newValue == "CHOTBCOS") {
        api.viewState.show('Spacer2495');
        api.viewState.show('Spacer2547');
        }else{
        api.viewState.hide('Spacer2495');
        api.viewState.hide('Spacer2547');
    }*/

    //Subsidio promotoras
    if (changedEventArgs.newValue == "SUBPRO") {
      viewState.show('VA_4894WDHQNMCYSAK_586216');
    } else {
      viewState.hide('VA_4894WDHQNMCYSAK_586216');
    }

    if (changedEventArgs.commons.api.viewState.getDataItem("Spacer2675").pCobis == 4) { // ['Nota de DEbito a Cuenta de Aho']
      $("#VA_2481BBVZTGCBDCR_830216").attr("readonly", true);
    } else {
      $("#VA_2481BBVZTGCBDCR_830216").attr("readonly", false);
    }
    entities.PaymentForm.accountNumber = null;
    changedEventArgs.commons.execServer = false;
  };

  //Entity: PaymentForm
  //PaymentForm.accountNumber (TextInputButton) View: PaymentModeForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_2481BBVZTGCBDCR_830216 = (entities: Model, changeEventArgs: any) => {
    //changeEventArgs.commons.execServer = true;
    if (changeEventArgs.newValue && changeEventArgs.commons.api.viewState.getDataItem("Spacer2675").pCobis == 4) {
      changeEventArgs.commons.execServer = true;
    } else {
      changeEventArgs.commons.execServer = false;
    }
  };

  //Entity: PaymentForm
  //PaymentForm.currencyId (DropDownList) View: PaymentModeForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_4212YIFTVBCOPPD_140216 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {


    changedEventArgs.commons.api.viewState.label("VA_8983QPJHQZZOSML_321216", this.cobis.translate("ASSTS.LBL_ASSTS_VALORNPRH_26284") + " " + "(" +
      changedEventArgs.commons.api.viewState.getDataItem("VA_4212YIFTVBCOPPD_140216").value + ")");
    changedEventArgs.commons.execServer = true;

  };

  //Start signature to Callback event to VA_4212YIFTVBCOPPD_140216
  task_changeCallback_VA_4212YIFTVBCOPPD_140216 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    if (changeCallbackEventArgs.success) {
      entities.PaymentForm.currencyFlagAux = '1';
      montoIni = entities.PaymentForm.payAmount;
      montoIniDsDec = entities.PaymentForm.amountDsDec;
    }
  };

  //Entity: PaymentForm
  //PaymentForm.clientFullName (TextInputButton) View: PaymentModeForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_6386FQVBTKCYFWG_461216 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    let disClientId: any = changeEventArgs.commons.api.navigation.getCustomDialogParameters().loan.clientID;
    let newClientId: any = entities.PaymentForm.clientId;
    if (newClientId != disClientId && changeEventArgs.oldValue != null) {
      changeEventArgs.commons.execServer = false;
    }
  };

  //Entity: PaymentForm
  //PaymentForm.payAmount (TextInputBox) View: PaymentModeForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_8983QPJHQZZOSML_321216 = (entities: Model, changeEventArgs: any) => {


    entities.LoanAdditionalInformation = changeEventArgs.commons.api.parentVc?.model.LoanAdditionalInformation;

    if (montoIni == changeEventArgs.newValue) {
      entities.PaymentForm.currencyFlagAux = "1";
      entities.PaymentForm.amountDsDec = montoIniDsDec;
    }

    if (entities.PaymentForm.currencyFlagAux == "1") {

      changeEventArgs.commons.execServer = false;
      entities.PaymentForm.currencyFlagAux = "-1";
      entities.PaymentForm.amountTr = entities.DisbursementResult.difference;
    } else {
      entities.PaymentForm.amountDsDec = changeEventArgs.newValue;
      changeEventArgs.commons.serverParameters.PaymentForm = true;
      changeEventArgs.commons.serverParameters.LoanAdditionalInformation = true;
      changeEventArgs.commons.serverParameters.GeneralParameters = true;
      changeEventArgs.commons.serverParameters.Loan = true;
      changeEventArgs.commons.serverParameters.DisbursementResult = true;

      changeEventArgs.commons.execServer = true;
    }

  };

  //Start signature to Callback event to VA_8983QPJHQZZOSML_321216
  task_changeCallback_VA_8983QPJHQZZOSML_321216 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };

  //Entity: PaymentForm
  //PaymentForm.amountTr (TextInputBox) View: PaymentModeForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AMOUNTTROZKVYME_221216 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    if (changedEventArgs.newValue > entities.DisbursementResult.difference!) {
      changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_VALORDEEA_97215', false, null, this.ASSTS.timer);
      // changeEventArgs.commons.api.viewState.disable('VA_4212YIFTVBCOPPD_140216');
    }

  };


  // (Button) 
  task_executeCommand_CM_TPAYMENT_NS7 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    entities.LoanAdditionalInformation = executeCommandEventArgs.commons.api.parentVc?.model.LoanAdditionalInformation

    //executeCommandEventArgs.commons.serverParameters.PaymentForm = true;
    //executeCommandEventArgs.commons.serverParameters.Loan = true;
    //executeCommandEventArgs.commons.serverParameters.LoanAdditionalInformation = true;
    let cm: any = executeCommandEventArgs.commons;

    if (cm.api.vc.viewState.Spacer1695.visible == false) {
      entities.PaymentForm.economicDestination = null;
    }



    if (entities.PaymentForm.amountTr! > entities.DisbursementResult.difference!) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_VALORDEEA_97215', false, null, this.ASSTS.timer);
      executeCommandEventArgs.commons.execServer = false;
      return;
      // changeEventArgs.commons.api.viewState.disable('VA_4212YIFTVBCOPPD_140216');
    }

    if (executeCommandEventArgs.commons.api.viewState.getDataItem("Spacer2675").pCobis == 4 && !entities.PaymentForm.accountNumber) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_CUENTARQA_93919', false, null, this.ASSTS.timer);
      executeCommandEventArgs.commons.execServer = false;
      return;
    } else {
      executeCommandEventArgs.commons.execServer = true;
    }
  };

  //Start signature to callBack event to CM_TPAYMENT_NS7
  task_executeCommandCallback_CM_TPAYMENT_NS7 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandEventArgs.success) {
      let api: any = executeCommandEventArgs.commons.api;
      entities.PaymentForm.currencyName = api.vc.catalogs.VA_4212YIFTVBCOPPD_140216.get(entities.PaymentForm.currencyId);

      let dataGrid: any = {
        index: api.navigation.getCustomDialogParameters().rowIndex,
        mode: api.vc.mode,
        data: entities.PaymentForm
      };

      api.navigation.closeModal(dataGrid);
    }

  };

  // (Button) 
  task_executeCommand_CM_TPAYMENT_TEC = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let isCancel: any = true;
    executeCommandEventArgs.commons.api.navigation.closeModal(isCancel);
  };


  //ListaFormaPagoQuery Entity: ListaFormaPago
  task_executeQuery_Q_LISTOOGA_DP31 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.tipoOperacion = executeQueryEventArgs.commons.api.vc.model.Loan.operationTypeID;
    executeQueryEventArgs.parameters.moneda = executeQueryEventArgs.commons.api.viewState.getDataItem("VA_4212YIFTVBCOPPD_140216").code;
    executeQueryEventArgs.parameters.tipo = 1;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaFormaPago = true;
  };


  //Start signature to Callback event to Q_LISTOOGA_DP31
  task_executeQueryCallback_Q_LISTOOGA_DP31 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: PaymentModeForm
  task_initData_VC_PAYMENTMDE_245368 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.PaymentForm.currencyFlagAux = '0';
    let api: any = initDataEventArgs.commons.api;
    api.viewState.hide('Spacer2495');
    api.viewState.hide('Spacer2547');
    api.vc.viewState.Spacer1695.visible = false;
    api.viewState.hide('VA_4894WDHQNMCYSAK_586216');

    entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan;
    entities.LoanAdditionalInformation = initDataEventArgs.commons.api.parentVc?.model.LoanAdditionalInformation;
    entities.LiquidateResult = initDataEventArgs.commons.api.parentVc?.model.LiquidateResult;

    initDataEventArgs.commons.api.vc.viewState.VA_AMOUNTTROZKVYME_221216.label =
      this.cobis.translate('ASSTS.LBL_ASSTS_VALOROPZW_68487') + " (" +
      entities.Loan.currencyName + ")";

    initDataEventArgs.commons.api.vc.viewState.VA_DIFFERENCELFJSU_881216.label =
      this.cobis.translate('ASSTS.LBL_ASSTS_DIFERENQI_53704') + " (" +
      entities.Loan.currencyName + ")";

    entities.GeneralParameters = initDataEventArgs.commons.api.parentVc?.model.GeneralParameters;
    entities.DisbursementResult = initDataEventArgs.commons.api.parentVc?.model.DisbursementResult;
    entities.PaymentForm.officeId = JSON.parse(sessionStorage.userOffice).code;

    //CAMBIA LABEL BENEFICIARION POR FONDEADOR
    if (initDataEventArgs.commons.api.parentVc?.model.Loan.natureOp == 'P') {
      initDataEventArgs.commons.api.vc.viewState.VA_6386FQVBTKCYFWG_461216.label =
        this.cobis.translate('ASSTS.LBL_ASSTS_FONDEADOR_22221')
    }

    initDataEventArgs.commons.execServer = false;
  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: PaymentModeForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "VC_BANKACCOMU_224777") {
      if (typeof onCloseModalEventArgs.result.account != "undefined") {
        entities.PaymentForm.accountNumber = onCloseModalEventArgs.result.account.trimRight();
        //entities.PaymentForm.note = onCloseModalEventArgs.result.accountName.trimRight();
      }
    }
  };

  //Entity: PaymentForm
  //PaymentForm.accountNumber (TextInputButton) View: PaymentModeForm

  task_textInputButtonEvent_VA_2481BBVZTGCBDCR_830216 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    //if(textInputButtonEventArgs.model.PaymentForm.payFormCategory != ""){
    //Open Modal
    if (textInputButtonEventArgs.model.PaymentForm.clientId && textInputButtonEventArgs.commons.api.viewState.getDataItem("Spacer2675").pCobis == 4) {
      let nav: any = textInputButtonEventArgs.commons.api.navigation;
      nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_CUENTASAT_41675'); //Cuentas 
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_BANKACCOUNTOA_777',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_BANKACCOMU_224777'
      };
      nav.queryParameters = {
        mode: 1
      };
      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };
      nav.customDialogParameters = {
        customerID: textInputButtonEventArgs.model.PaymentForm.clientId,
        payFormId: textInputButtonEventArgs.model.PaymentForm.payFormId,
        desOpeType: textInputButtonEventArgs.model.Loan.operationTypeID,
        currencyId: textInputButtonEventArgs.model.PaymentForm.currencyId
      };
    } else {
      textInputButtonEventArgs.cancel = true;
      textInputButtonEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_DIGITELEC_98771", false, null, this.ASSTS.timer);
    }
    //}
  };

  //Entity: PaymentForm
  //PaymentForm.clientFullName (TextInputButton) View: PaymentModeForm

  task_textInputButtonEvent_VA_6386FQVBTKCYFWG_461216 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_BSQUEDAEC_38534');
    nav.customAddress = {
      id: "findCustomer",
      url: "customer/templates/find-customers-tpl.html"
    };
    nav.modalProperties = {
      size: 'lg'
    };
    nav.scripts = [{
      module: this.cobis.modules.CUSTOMER,
      files: ["/customer/services/find-customers-srv.js",
        "/customer/controllers/find-customers-ctrl.js"
      ]
    }];
  };

  //Entity: PaymentForm
  //PaymentForm.accountNumber (TextInputButton) View: PaymentModeForm

  task_textInputButtonEventGrid_VA_2481BBVZTGCBDCR_830216 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {

    textInputButtonEventGridEventArgs.commons.execServer = false;


  };

  //Entity: PaymentForm
  //PaymentForm.clientFullName (TextInputButton) View: PaymentModeForm

  task_textInputButtonEventGrid_VA_6386FQVBTKCYFWG_461216 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {

    textInputButtonEventGridEventArgs.commons.execServer = false;


  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: PaymentModeForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    entities.PaymentForm.clientFullName = entities.Loan.clientID + " - " + entities.Loan.clientName;
    entities.PaymentForm.clientId = entities.Loan.clientID;


    entities.PaymentForm.payFormCategory = "";

    //renderEventArgs.commons.api.viewState.hide('VA_6057SWXKCQQHOIS_464216');
    renderEventArgs.commons.api.viewState.hide('Spacer1695');
    //renderEventArgs.commons.api.viewState.hide('VA_6386FQVBTKCYFWG_461216');


    renderEventArgs.commons.api.viewState.disable('VA_QUOTATIONTRMFKT_807216');
    renderEventArgs.commons.api.viewState.disable('VA_QUOTETYPETRDZXF_817216');
  };


}