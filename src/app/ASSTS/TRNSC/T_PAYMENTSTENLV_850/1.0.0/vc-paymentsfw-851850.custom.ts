import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-paymentsfw-851850.model';
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

/* variables locales de T_PAYMENTSTENLV_850*/

export class VcPaymentsfw851850Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_PAYMENTSTENLV_850"

  //Entity: Payment
  //Payment.currencyType (DropDownList) View: PaymentsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CURRENCYSPEYFQA_285141 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.Payment = true;

  };

  //Start signature to Callback event to VA_CURRENCYSPEYFQA_285141
  task_changeCallback_VA_CURRENCYSPEYFQA_285141 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    if (!changeCallbackEventArgs.success) {
      entities.Payment.quotation = 0.00;
      // TODO - ALE
      entities.Payment.typeQuotationTe = "";
    } else {
      changeCallbackEventArgs.commons.api.viewState.label("VA_AMOUNTPREPAYTME_876141", this.cobis.translate("ASSTS.LBL_ASSTS_SALDOPRCN_87630") + " " + "(" +
        changeCallbackEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYSPEYFQA_285141").value + ")");
      changeCallbackEventArgs.commons.api.viewState.label("VA_AMOUNTPAYMENTTT_215141", this.cobis.translate("ASSTS.LBL_ASSTS_VALORAPAA_99910") + " " + "(" +
        changeCallbackEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYSPEYFQA_285141").value + ")");
      changeCallbackEventArgs.commons.api.viewState.label("VA_VALUEEFNQCTRLMP_628141", this.cobis.translate("ASSTS.LBL_ASSTS_MONTOEMFX_52083") + " " + "(" +
        changeCallbackEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYSPEYFQA_285141").value + ")");
    }
  };


  //Entity: Payment
  //Payment.operationCurrencyType (DropDownList) View: PaymentsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_OPERATIONCURYEE_868141 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    changedEventArgs.commons.api.viewState.label("VA_AMOUNTPREPAYTME_876141", this.cobis.translate("ASSTS.LBL_ASSTS_SALDOPRCN_87630") + " " + "(" +
      changedEventArgs.commons.api.viewState.getDataItem("VA_OPERATIONCURYEE_868141").value + ")");


  };


  //Entity: Payment
  //Payment.paymentType (DropDownList) View: PaymentsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXCFY_310141 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    let api: any = changedEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Payment.customer = null;
    entities.Payment.customerID = null;
    entities.Payment.reference = null;
    if (entities.Loan.tipo === "I") {

      entities.Payment.retention = changedEventArgs.commons.api.viewState.getDataItem("VA_TEXTINPUTBOXCFY_310141").retencion;
      if (changedEventArgs.commons.api.viewState.getDataItem("VA_TEXTINPUTBOXCFY_310141").pCobis == 4) { // ['Nota de DEbito a Cuenta de Aho']
        changedEventArgs.commons.api.viewState.show('VA_TEXTINPUTBOXHQX_290141');
        changedEventArgs.commons.api.viewState.isReadOnly('VA_REFERENCECGUXXB_239141');
        // TODO - REFACTOR
        // $("#VA_REFERENCECGUXXB_239141").attr("readonly", true);
      } else {
        changedEventArgs.commons.api.viewState.hide('VA_TEXTINPUTBOXHQX_290141');
        // $("#VA_REFERENCECGUXXB_239141").attr("readonly", false);
      }

      if (changedEventArgs.commons.api.viewState.getDataItem("VA_TEXTINPUTBOXCFY_310141").atx == 'S') {
        changedEventArgs.commons.api.viewState.disable('VA_NEGOTIATEDHPDLB_812141');
        entities.Payment.negotiated = 'S';
        entities.Payment.onLine = false;
        changedEventArgs.commons.api.viewState.disable('VA_CHECKBOXIPQLEBS_550141');
      } else {
        changedEventArgs.commons.api.viewState.disable('VA_NEGOTIATEDHPDLB_812141');
        entities.Payment.negotiated = 'N';
        changedEventArgs.commons.api.viewState.enable('VA_CHECKBOXIPQLEBS_550141');
        entities.Payment.onLine = true;
      }
    }
  };

  //Start signature to callBack event to VA_TEXTINPUTBOXCFY_310141
  task_changeCallback_VA_TEXTINPUTBOXCFY_310141 = (entities: Model, changeEventArgs: any) => {
    entities.Payment.retention = entities.PaymentMethod.retention;
    entities.Payment.reference = ""
    entities.Payment.note = "";

    //CHEQUES
    /* if(entities.PaymentMethod.category.substring(0,2) == "CH") {
            changeEventArgs.commons.api.viewState.show("VA_NUMCHECKQLTBIOX_669141");
            changeEventArgs.commons.api.viewState.show("VA_TEXTINPUTBOXSJQ_831141");
    } else {
            changeEventArgs.commons.api.viewState.hide("VA_NUMCHECKQLTBIOX_669141");
            changeEventArgs.commons.api.viewState.hide("VA_TEXTINPUTBOXSJQ_831141");
        }*/
  };


  //DeferredRefundListQuery Entity: DeferredRefundList
  task_executeQuery_Q_DEFETRFT_LJ32 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
  };

  //ListaFormaPagoQuery Entity: ListaFormaPago
  task_executeQuery_Q_LISTOOGA_DP31 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {

    executeQueryEventArgs.parameters.tipoOperacion = executeQueryEventArgs.commons.api.vc.model.Loan.operationTypeID;
    executeQueryEventArgs.parameters.moneda = executeQueryEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYSPEYFQA_285141").code;
    executeQueryEventArgs.parameters.tipo = 2;

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


  //gridCommand (Button) QueryView: QV_2540_50573
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_2540_50573_362 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    gridExecuteCommandEventArgs.commons.execServer = false;

    //gridExecuteCommandEventArgs.commons.serverParameters.QuoteDetails = true;
    //Open Modal
    let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_DETALLEAG_48048'); //Detalle del Pago
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_QUOTADETAISOY_745',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_QUOTADETAA_445745'
    };
    nav.queryParameters = {
      mode: 8
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };
    nav.customDialogParameters = {
      loan: entities.Loan,
      payment: entities.Payment
    };

    nav.openModalWindow("CEQV_201QV_2540_50573_362", gridExecuteCommandEventArgs.nameEntityGrid);
  };


  //Entity: Payment
  //Payment.bank (ComboBox) View: PaymentsForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_TEXTINPUTBOXSJQ_831141 = (loadCatalogEventArgs: any) => {
    loadCatalogEventArgs.commons.execServer = false;
    //loadCatalogEventArgs.commons.serverParameters.Payment = true;
  };

  //Entity: Payment
  //Payment.reference (TextInputButton) View: PaymentsForm

  task_textInputButtonEvent_VA_REFERENCECGUXXB_239141 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    if (textInputButtonEventArgs.commons.api.vc.model.Payment.customer) {
      //Open Modal
      let nav: any = textInputButtonEventArgs.commons.api.navigation;

      nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_CUENTASAT_41675'); //Cuentas 
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_BANKACCOUNTIS_944',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_BANKACCOTT_940944'
      };
      nav.queryParameters = {
        mode: 1
      };
      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };
      nav.customDialogParameters = {
        customerID: textInputButtonEventArgs.model.Payment.customerID,
        paymentType: textInputButtonEventArgs.model.Payment.paymentType
      };
    } else {
      textInputButtonEventArgs.cancel = true;
      textInputButtonEventArgs.commons.messageHandler.showMessagesSuccess("ASSTS.MSG_ASSTS_DIGITELEC_98771", false, null, 3000);
    }

  };

  //Entity: Payment
  //Payment.customer (TextInputButton) View: PaymentsForm

  task_textInputButtonEvent_VA_TEXTINPUTBOXHQX_290141 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    textInputButtonEventArgs.model.Payment.reference = "";
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
    nav.customDialogParameters = {};
  };

  //Entity: Payment
  //Payment.reference (TextInputButton) View: PaymentsForm

  task_textInputButtonEventGrid_VA_REFERENCECGUXXB_239141 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {

    textInputButtonEventGridEventArgs.commons.execServer = false;


  };

  //Entity: Payment
  //Payment.customer (TextInputButton) View: PaymentsForm

  task_textInputButtonEventGrid_VA_TEXTINPUTBOXHQX_290141 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {

    textInputButtonEventGridEventArgs.commons.execServer = false;


  };


  //gridRowSelecting QueryView: QV_QG32_ZBS32
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_QG32_ZBS32 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}