import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-paymentsan-916157.model';
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

/* variables locales de T_ASSTSIOIYHVWE_604*/

/* variables locales de T_PAYMENTSMANII_157*/


export class VcPaymentsan916157Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSIOIYHVWE_604"


  screenCall: any;


  ioperacionGrupal: any = 'F';


  getQuotation: any = (quotationList: any, currencyTypeSearch: any) => {
    let currencyType = 0;
    let quotationValue = 1;

    for (let i = 0; i < quotationList._data.length - 1; i++) {
      currencyType = quotationList._data[i].currencyType;
      if (currencyTypeSearch == currencyType) {
        quotationValue = quotationList._data[i].value;
        break;
      }
    }
    return quotationValue;
  };


  task_closeModalEvent_findCustomer = (args: any) => {
    let resp: any = args.commons.api.vc.dialogParameters;
    let customerCode: any = args.commons.api.vc.dialogParameters.CodeReceive;
    let CustomerName: any = args.commons.api.vc.dialogParameters.name;
    let identification: any = args.commons.api.vc.dialogParameters.documentId;
    args.model.Payment.customer = customerCode + "-" + CustomerName;
    args.model.Payment.customerID = customerCode;
  };

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
      entities.Payment.typeQuotationTr = "";
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






  //Entity: PaymentGroup
  //PaymentGroup.paymentsType (ComboBox) View: PaymentsFormGroup
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_1MVJRDIJAIBEKBY_880816 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = true;
    if (changedEventArgs.newValue === 'NDAH_FINAN') {
      changedEventArgs.commons.api.viewState.disable('VA_2PVZZFNDSNWIITT_119816');
    } else {
      changedEventArgs.commons.api.viewState.enable('VA_2PVZZFNDSNWIITT_119816');
    }
  };

  //PaymentListGroupClientQuery_BC76 Entity: PaymentListGroupClient
  task_executeQuery_Q_PAYMGPOE_BC76 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters.PaymentListGroupClient = true;
  };

  //Entity: Payment
  //Payment.paymentType (ComboBox) View: PaymentsFormGroup
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_1MVJRDIJAIBEKBY_880816 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = true;
    loadCatalogDataEventArgs.commons.serverParameters.Loan = true;
  };

  // (Button) 
  task_executeCommand_CM_PAYMENTS_NNS = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = executeCommandEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_PRIORIDAA_58251'); //Priodidades
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_PRIORITIESENY_489',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_PRIORITIOM_989489'
    };
    nav.queryParameters = {
      mode: 1
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };
    // TODO - REFACTORIZAR
    let priorities2: any; /*= angular.copy(entities.Priorities);*/
    nav.customDialogParameters = {
      bankNum: entities.Loan.loanBankID,
      priorities: priorities2
    };
    nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
  };

  // (Button) 
  task_executeCommand_CM_PAYMENTS_SS1 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = executeCommandEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_SOBRANTSE_66830'); //Sobrantes
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_LEFTOVERPALDD_459',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_LEFTOVERPM_168459'
    };
    nav.queryParameters = {
      mode: 1
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };
    nav.customDialogParameters = {
      creditType: entities.Loan.operationTypeID,
      customerCode: entities.Payment.customerID,
      leftOverPayment: entities.LeftOverPayment
    };

    nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
  };

  // (Button)
  task_executeCommand_CM_PAYMENTS_T3A = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let api: any = executeCommandEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    let hasError: any = false;
    let msgResourceID: any = "";
    if (entities.Loan.tipo === "I") {
      let condonationValue: any = 0.0;
      let valuesCount: any = 0;

      if (entities.Payment.value == null)
        entities.Payment.value = 0;

      if (entities.Payment.retention == null)
        entities.Payment.retention = 0;

      if (entities.PaymentMethod.category == null)
        entities.PaymentMethod.category = "";

      if (entities.CondonationDetail) {
        for (let i: any = 0; i < entities.CondonationDetail.length; i++) {
          condonationValue = condonationValue + entities.CondonationDetail[i].valueToCondone;
        }
      }


      valuesCount = valuesCount + (entities.Payment.value > 0 ? 1 : 0);
      valuesCount = valuesCount + (condonationValue > 0 ? 1 : 0);
      valuesCount = valuesCount + (entities.LeftOverPayment.value > 0 ? 1 : 0);

      /* if (valuesCount > 1 ) {
              hasError = true;
              msgResourceID = "ASSTS.MSG_ASSTS_CONDONACI_18738"; 
       }*/

      if (!hasError && entities.Payment.value <= 0 && condonationValue <= 0 && entities.LeftOverPayment.value <= 0) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18739";
      }

      if (!hasError && entities.Payment.value < 0 && entities.Payment.entireFee != 'S') {
        hasError = true;
        msgResourceID = "MSG_ASSTS_PAYMENTSA_18744";
      }

      if (!hasError && entities.Payment.date == null) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18740";
      }

      if (!hasError && entities.Payment.value && entities.Payment.currencyType == null) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18741";
      }

      if (!hasError && entities.LeftOverPayment.value > 0 && entities.LeftOverPayment.currencyType == null) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18748";
      }

      if (!hasError && entities.Payment.value > 0 && !entities.Payment.paymentType) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18742";
      }

      if (!hasError && entities.LeftOverPayment.value > 0 && entities.LeftOverPayment.paymentType == null) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18747";
      }

      /*  if(!hasError && entities.PaymentMethod.category.substring(0,2) == "CH" && entities.Payment.bank == null) {
            hasError = true;
            msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18745";
        }

        if(!hasError && entities.PaymentMethod.category.substring(0,2) == "CH" && (entities.Payment.numCheck == null || entities.Payment.numCheck == "")) {
            hasError = true;
            msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18746";
        }*/

      //if(entities.Payment.paymentType === 'NDAH_FINAN') 
      if (executeCommandEventArgs.commons.api.viewState.getDataItem("VA_TEXTINPUTBOXCFY_310141").pCobis == 4) { // ['Nota de DEbito a Cuenta de Aho']
        if (!hasError && (!entities.Payment.reference) && (entities.Payment.value > 0 || entities.Payment.entireFee == 'S')) {
          hasError = true;
          msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18743";
        }
      }

      if (!hasError && (entities.LeftOverPayment.reference == null || entities.LeftOverPayment.reference == "") && entities.LeftOverPayment.value > 0) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18749";
      }

      if (entities.Payment.finePrepayment! > 0) {
        if (entities.Payment.value >= entities.Payment.amount! && entities.Payment.value != entities.Payment.amountPrepayment) {
          hasError = true;
          msgResourceID = "ASSTS.MSG_ASSTS_ERRORELRL_73200";
        }
        if (entities.Payment.value == entities.Payment.amountPrepayment) {
          entities.Loan.newStatus = 'S';
        } else {
          entities.Loan.newStatus = 'N';
        }
      }

      if (!hasError) {
        let quotationValue: any = 0.0;
        quotationValue = this.getQuotation(entities.QuotationCurrency, entities.Payment.operationCurrencyType)
        entities.Payment.quotationValue = quotationValue

        quotationValue = 0.0;
        quotationValue = this.getQuotation(entities.QuotationCurrency, entities.Payment.currencyType)
        entities.Payment.payQuotationValue = quotationValue

        quotationValue = 0.0;
        quotationValue = this.getQuotation(entities.QuotationCurrency, entities.LeftOverPayment.currencyType)
        entities.LeftOverPayment.leftoverQuotationValue = quotationValue;
      }
    } else {

      if (entities.PaymentGroup.value == null || entities.PaymentGroup.value == Number(""))
        entities.PaymentGroup.value = 0;

      if (!hasError && entities.PaymentGroup.date == null) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18740";
      }

      if (!hasError && entities.PaymentGroup.paymentsType == null) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18742";
      }

      if (!hasError && (entities.PaymentGroup.reference == null || entities.PaymentGroup.reference == "")) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18743";
      }

      if (!hasError && entities.PaymentGroup.value <= 0) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18739";
      }

      if (!hasError && entities.PaymentGroup.value < 0) {
        hasError = true;
        msgResourceID = "MSG_ASSTS_PAYMENTSA_18744";
      }

      entities.PaymentGroup.operacion = this.ioperacionGrupal;
    }

    if (hasError) {
      executeCommandEventArgs.commons.messageHandler.showMessagesError(msgResourceID, true);
      executeCommandEventArgs.commons.execServer = false;
    } else {
      // executeCommandEventArgs.commons.execServer = true;

      if (entities.Payment.value! < entities.Payment.amountPrepayment!) {
        executeCommandEventArgs.commons.execServer = true;
      } else if (entities.Payment.value! > entities.Payment.amountPrepayment!) {
        let response: any = await firstValueFrom(
          executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_MONTOESEC_40993")
        );

        switch (response.buttonIndex) {
          case 0: //cancel
            console.log('se cancelo..');
            executeCommandEventArgs.commons.execServer = false;
            return false;
          case 1: //accept
            console.log('se acepto..');
            executeCommandEventArgs.commons.execServer = true;
            return true;

        }
      }

    }
  };

  //Start signature to Callback event to CM_PAYMENTS_T3A
  task_executeCommandCallback_CM_PAYMENTS_T3A = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    //here your code
    let messages: any = '';

    let unappliedValue: any = '';

    if (executeCommandCallbackEventArgs.success) {

      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_PAYMENTS_T3A');
      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_PAYMENTS_SS1');
      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_PAYMENTS_T7N');
      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_PAYMENTS_NNS');
      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TPAYMENT_MA5');
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess("ASSTS.LBL_ASSTS_TRANSACEC_23845", false, null, 3000);

      //executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_PAYMENTS_T3A");
      /*if (entities.LoanInstancia.tipo == 'G' && entities.Payment.unappliedPayments > 0) {
          unappliedValue = entities.Payment.unappliedAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
          messages = 'Existen ' + entities.Payment.unappliedPayments + ' pago(s) grupal(es) por un monto de ' + unappliedValue + ' pesos pendiente de aplicar. Desea continuar aplicando el pago?'
          cobis.getMessageManager().showMessagesConfirm(messages).then(function (resp) {
              switch (resp.buttonIndex) {
              case 0: //cancel
                  console.log('se cancelo..');
                  entities.Payment.continuePayment = null;
                  break;
              case 1: //accept
                  console.log('se acepto..');
                  entities.Payment.continuePayment = 'S';
                  executeCommandCallbackEventArgs.commons.api.vc.executeCommand('CM_TPAYMENT_Y_2', 'PaymentsMain', undefined, true, false, 'VC_PAYMENTSAN_916157', false);
                  break;
              }
          });
      }*/

      if (entities.Loan.tipo == 'G' && this.ioperacionGrupal == 'F') {
        this.ioperacionGrupal = null;
        if (entities.PaymentGroup.fechaVen! > entities.PaymentGroup.fechaUltProc!) {
          /*executeCommandCallbackEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_DESEAAPNN_11437")
                .then(function (response) {
                    if (response.buttonIndex == 0){
                       ioperacionGrupal = 'F';
                    }
if (response.buttonIndex == 1){
executeCommandCallbackEventArgs.commons.api.vc.executeCommand('CM_PAYMENTS_T3A', 'PaymentsMain', undefined, true, false, 'VC_PAYMENTSAN_916157', false);
}
                });    */
        } else {
          // TODO - REFACTORIZAR - MUY PENDIENTE - CREAR FUNCION
          // executeCommandCallbackEventArgs.commons.api.vc.executeCommand('CM_PAYMENTS_T3A', 'PaymentsMain', undefined, true, false, 'VC_PAYMENTSAN_916157', false);
        }
      }
    }
  };

  // (Button) 
  task_executeCommand_CM_PAYMENTS_T7N = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = executeCommandEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_NEGOCIANI_54038'); //Negociacion
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_NEGOTIATIOTML_700',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_NEGOTIATOO_775700'
    };
    nav.queryParameters = {
      mode: 1
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };
    nav.customDialogParameters = {
      negotiation: entities.Negotiation
    };

    nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
  };

  // (Button) 
  task_executeCommand_CM_TPAYMENT_MA5 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = executeCommandEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_CONDONASE_22340'); //Condonaciones
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_CONDONATIOSNN_532',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_CONDONATON_778532'
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };
    nav.customDialogParameters = {
      bankNum: entities.Loan.loanBankID,
      condonationDetail2: entities.CondonationDetail,
      amount: entities.Loan.amount
    };

    nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };

  // (Button) 
  task_executeCommand_CM_TPAYMENT_Y_2 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: PaymentsMain
  task_initData_VC_PAYMENTSAN_916157 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let commons: any = initDataEventArgs.commons;
    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;
    entities.Payment.operationCurrencyType = entities.Loan.codCurrency;

    initDataEventArgs.commons.api.viewState.hide("VA_NUMCHECKQLTBIOX_669141");
    initDataEventArgs.commons.api.viewState.hide("VA_TEXTINPUTBOXSJQ_831141");
    initDataEventArgs.commons.api.viewState.hide("VA_VASIMPLELABELLL_923141");
    entities.Payment.onLine = true;
    entities.Payment.value = 0;
    entities.Payment.retention = 0;
    entities.LeftOverPayment.value = 0
    commons.execServer = true;

    if (parameters.parameters.loan.tipo === "G") {
      initDataEventArgs.commons.api.viewState.hide("VC_QXXNBZDVLA_903850");
      initDataEventArgs.commons.api.viewState.show("VC_DIACLAQFTU_189604");
    } else {
      initDataEventArgs.commons.api.viewState.show("VC_QXXNBZDVLA_903850");
      initDataEventArgs.commons.api.viewState.hide("VC_DIACLAQFTU_189604");
    }

    initDataEventArgs.commons.api.viewState.hide('VC_ZNXEHASOGQ_840157');
    initDataEventArgs.commons.api.viewState.disable("VA_NEGOTIATEDHPDLB_812141");
  };

  //Start signature to callBack event to VC_PAYMENTSAN_916157
  task_initDataCallback_VC_PAYMENTSAN_916157 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.Payment.prePaymentAux = entities.Payment.amountPrepayment;
    entities.Payment.amountPayAux = entities.Payment.amountPayment;
    // entities.Loan.balanceDue = entities.Payment.amountPayAux;
    entities.Payment.operationTypeId = entities.Loan.operatioTypeID;


  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: PaymentsMain
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;

    let cancelModal: any = false;

    if (onCloseModalEventArgs.closedViewContainerId == "VC_LEFTOVERPM_168459") {
      if (typeof onCloseModalEventArgs.result === "boolean") {
        cancelModal = onCloseModalEventArgs.result;
      }
      if (!cancelModal && typeof onCloseModalEventArgs.result.paymentType != "undefined") {
        entities.LeftOverPayment.paymentType = onCloseModalEventArgs.result.paymentType;
        entities.LeftOverPayment.value = onCloseModalEventArgs.result.value;
        entities.LeftOverPayment.currencyType = onCloseModalEventArgs.result.currencyType;
        entities.LeftOverPayment.reference = onCloseModalEventArgs.result.reference;
        entities.LeftOverPayment.note = onCloseModalEventArgs.result.note;
        entities.LeftOverPayment.leftoverQuotationValue = onCloseModalEventArgs.result.leftoverQuotationValue;
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_PRIORITIOM_989489") {
      if (typeof onCloseModalEventArgs.result === "boolean") {
        cancelModal = onCloseModalEventArgs.result;
      }
      if (!cancelModal && typeof onCloseModalEventArgs.result.data !== "undefined") {
        entities.Priorities = onCloseModalEventArgs.result.data;
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_CONDONATON_778532") {
      if (typeof onCloseModalEventArgs.result === "boolean") {
        cancelModal = onCloseModalEventArgs.result;
      }
      if (!cancelModal && typeof onCloseModalEventArgs.result.data !== "undefined") {
        entities.CondonationDetail = onCloseModalEventArgs.result.data;
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_NEGOTIATOO_775700") {
      if (typeof onCloseModalEventArgs.result === "boolean") {
        cancelModal = onCloseModalEventArgs.result;
      }
      if (!cancelModal && typeof onCloseModalEventArgs.result.paymentType !== "undefined") {
        entities.Negotiation.paymentType = onCloseModalEventArgs.result.paymentType;
        entities.Negotiation.interestType = onCloseModalEventArgs.result.interestType;
        entities.Negotiation.fullFee = onCloseModalEventArgs.result.fullFee;
        entities.Negotiation.reductionType = onCloseModalEventArgs.result.reductionType;
        entities.Negotiation.additionalPayments = onCloseModalEventArgs.result.additionalPayments;
        entities.Payment.entireFee = onCloseModalEventArgs.result.fullFee ? 'S' : 'N';
        entities.Payment.advance = onCloseModalEventArgs.result.additionalPayments ? 'S' : 'N';
        onCloseModalEventArgs.commons.execServer = true;
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_BANKACCOTT_940944") {
      if (typeof onCloseModalEventArgs.result.account != "undefined") {
        entities.Payment.reference = onCloseModalEventArgs.result.account.trimRight();
        // entities.Payment.note = onCloseModalEventArgs.result.accountName.trimRight();
      }
    }
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: PaymentsMain
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    let listDeferredRefund: any = entities.DeferredRefundList;
    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.hide("CM_TPAYMENT_Y_2");
    if (entities.Loan.tipo == 'G') {
      renderEventArgs.commons.api.viewState.hide("CM_PAYMENTS_SS1");
      renderEventArgs.commons.api.viewState.hide("CM_PAYMENTS_T7N");
      renderEventArgs.commons.api.viewState.hide("CM_PAYMENTS_NNS");
      renderEventArgs.commons.api.viewState.hide("CM_TPAYMENT_MA5");
      renderEventArgs.commons.api.viewState.hide("VA_CHECKBOXIPQLEBS_550141");
    }
    renderEventArgs.commons.api.viewState.hide("VA_TEXTINPUTBOXHQX_290141");
    renderEventArgs.commons.api.viewState.disable("VA_QUOTATIONVALUEE_804141");
    renderEventArgs.commons.api.viewState.disable("VA_TYPEQUOTATIOPNO_482141");
    renderEventArgs.commons.api.viewState.disable("VA_QUOTATIONEPFTUZ_479141");
    renderEventArgs.commons.api.viewState.disable("VA_TYPEQUOTATIOTNN_114141");
    renderEventArgs.commons.api.viewState.disable("VA_OPERATIONCURYEE_868141");
    renderEventArgs.commons.api.viewState.hide("G_PAYMENTSSS_505141");
    renderEventArgs.commons.api.viewState.hide("G_PAYMENTSSS_563141");
    renderEventArgs.commons.api.viewState.hide("CM_PAYMENTS_SS1");

    renderEventArgs.commons.api.viewState.disable("VA_AMOUNTPAYMENTTT_215141");

    entities.Payment.currencyType = null;
    entities.Payment.quotation = null;

    //Devolucion rubros cuando es agregada
    if (listDeferredRefund && listDeferredRefund.data().length > 0) {
      renderEventArgs.commons.api.viewState.show("G_PAYMENTSSS_377141");
    } else {
      renderEventArgs.commons.api.viewState.hide("G_PAYMENTSSS_377141");
    }
  };


}