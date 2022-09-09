import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-paymentsgr-815507.model';
import {
  LNSPRService
} from "src/app/LNSPR/service-modules/LNSPR.service";
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

/* variables locales de PaymentsForm*/
let errorPaymentsMasive: any = [];

export class VcPaymentsgr815507Custom extends CobisDesignerCustomEvent {

  task_changeWithError: any = {};

  constructor(public cobis: CobisCommonsService, private LNSPR: LNSPRService) {
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

  //"TaskId": "T_LNSPRZYRPKNSX_507"




  //Entity: Payment
  //Payment.paymentType (ComboBox) View: PaymentsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMENTSTYPESSS_684199 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.api.navigation.getCustomDialogParameters().LoanSearchFilter = changedEventArgs.commons.api.parentVc?.model.LoanSearchFilter;
    changedEventArgs.commons.execServer = true;

    if (changedEventArgs.newValue === 'NDAH_FINAN') {
      changedEventArgs.commons.api.viewState.show('VA_CUSTOMERMUPBSTT_916199');
      changedEventArgs.commons.api.viewState.show('VA_REFERENCEUFYFMY_654199');
    } else {
      changedEventArgs.commons.api.viewState.hide('VA_CUSTOMERMUPBSTT_916199');
      changedEventArgs.commons.api.viewState.hide('VA_REFERENCEUFYFMY_654199');
      entities.Payment.reference = null;
      entities.Payment.customer = null;
    }
    //changedEventArgs.commons.serverParameters.Payment = true;
  };


  //Start signature to Callback event to VA_PAYMENTSTYPESSS_684199
  task_changeCallback_VA_PAYMENTSTYPESSS_684199 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
    entities.Payment.retention = entities.PaymentMethod.retention;
    entities.Payment.reference = ""
    entities.Payment.note = "";

    if (entities.PaymentMethod.category?.substring(0, 2) == "CH") {
      changeCallbackEventArgs.commons.api.viewState.show("VA_CUSTOMERMUPBSTT_916199");
      changeCallbackEventArgs.commons.api.viewState.show("VA_REFERENCEUFYFMY_654199");
    } else {
      changeCallbackEventArgs.commons.api.viewState.hide("VA_CUSTOMERMUPBSTT_916199");
      changeCallbackEventArgs.commons.api.viewState.hide("VA_REFERENCEUFYFMY_654199");
    }
  };



  //Entity: Payment
  //Payment.value (TextInputBox) View: PaymentsForm
  task_customValidate_VA_VALUEXDSHNMADTK_664199 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {
    let validationValue: any = entities.Payment.value;

    if (validationValue < 0) {
      customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_NOSEPUERE_22098";
      customValidateEventArgs.isValid = false;
    } else if (validationValue == 0) {
      customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_NOSEPUEAD_48981";
      customValidateEventArgs.isValid = false;

    } else {
      customValidateEventArgs.isValid = true;
    }
    customValidateEventArgs.commons.execServer = false;
  };





  // (Button) 
  task_executeCommand_CM_TLNSPRZY_1_0 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let auxData: any = [];
    entities.LoanList.forEach((itemData: any) => {
      if (itemData.loanBankID) {
        auxData.push(itemData);
      }
    })
    entities.LoanList = auxData;

    let response: any = await firstValueFrom(
      executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGULE_29395")
    );

    switch (response.buttonIndex) {

      case 0: //cancel
        executeCommandEventArgs.commons.execServer = false;
        break;
      case 1: //accept
        executeCommandEventArgs.commons.execServer = true;
        return true;
        break;
    }
  };

  //Start signature to Callback event to CM_TLNSPRZY_1_0
  task_executeCommandCallback_CM_TLNSPRZY_1_0 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {

    if (executeCommandCallbackEventArgs.success) {
      /* if (entities.MassivePayments.length >= 2) {
               executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEN_20984", false, null, timer);

       } else {*/
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSACEC_84918', false, null, timer);

      // }

      executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRZY_RL6");
      executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRZY_N35");
      executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRZY_K05");
      executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRZY_1_0");
    }

  };


  // (Button) 
  task_executeCommand_CM_TLNSPRZY_K05 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let auxData: any = [];
    executeCommandEventArgs.commons.api.parentVc?.model.LoanList.data().forEach((itemData: any) => {
      if (itemData.seleccion) {
        itemData.descriptionMistake = undefined;
        auxData.push(itemData);
      }
    });
    entities.LoanList = auxData;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };

  //Start signature to Callback event to CM_TLNSPRZY_K05
  task_executeCommandCallback_CM_TLNSPRZY_K05 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {

      if (entities.ErrorMassivePayments.length >= 2) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASOD_51346", false, null, timer);
        executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_K05");
        executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_1_0");
        executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRZY_N35");
      } else {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSMION_38404', false, null, timer);
        executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRZY_1_0");
        executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_K05");
        executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRZY_N35");
      }

      executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_DATEPQRPPIHOWWB_162199");
      executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_CURRENCYXLRJUPE_746199");
      executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_PAYMENTSTYPESSS_684199");
      executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_VALUEXDSHNMADTK_664199");
      executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_CUSTOMERMUPBSTT_916199");
      executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_REFERENCEUFYFMY_654199");
      executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_NOTESGZRCIQVEYN_753199");
      executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_RL6");
    }

  };


  // (Button) 
  task_executeCommand_CM_TLNSPRZY_N35 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let auxData: any = [];
    entities.LoanList.forEach((itemData: any) => {
      if (itemData.loanBankID) {
        auxData.push(itemData);
      }
    })
    entities.LoanList = auxData;

    let response: any = await firstValueFrom(
      executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_VAASALITS_91042")
    );

    switch (response.buttonIndex) {

      case 0: //cancel
        executeCommandEventArgs.commons.execServer = false;
        break;
      case 1: //accept
        executeCommandEventArgs.commons.execServer = true;
        return true;
        break;
    }
  };


  //Start signature to Callback event to CM_TLNSPRZY_N35
  task_executeCommandCallback_CM_TLNSPRZY_N35 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {

    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({
      objLoans: entities.LoanList,
      //objErrores: errorPaymentsMasive,
      objErrores: entities.ErrorMassivePayments
    });
  };


  // (Button) 
  task_executeCommand_CM_TLNSPRZY_RL6 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let auxData: any = [];
    let count: any = 0;
    if (entities.LoanList) {
      entities.LoanList.forEach((itemData: any) => {
        if (itemData.lote) {
          count++;
        }
      })
    }

    if (count > 0) {
      executeCommandEventArgs.commons.api.navigation.closeModal({
        objLoans: entities.LoanList,
        //objErrores: errorPaymentsMasive
        objData: entities.MassivePayments,
        objErrores: entities.ErrorMassivePayments
      });

    } else {
      executeCommandEventArgs.commons.api.navigation.closeModal({});
    }
  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: PaymentsForm
  task_initData_VC_PAYMENTSGR_815507 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.api.vc.viewState.G_PAYMENTSSS_757199.visible = false; //Solo es necesaria por la entidad
    initDataEventArgs.commons.api.viewState.disable('CM_TLNSPRZY_1_0');
    entities.Payment.value = 0; // Valor inicial
    entities.Payment.date = new Date(this.cobis.containerScope.preferences.processDate); //Fecha del campo inicial

    // Campo Cancelar de la modal
    initDataEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_1_0");
    initDataEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_N35");

    initDataEventArgs.commons.execServer = false;
  };



  //Entity: Payment
  //Payment.paymentType (ComboBox) View: PaymentsForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_PAYMENTSTYPESSS_684199 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.api.navigation.getCustomDialogParameters().LoanSearchFilter = loadCatalogDataEventArgs.commons.api.parentVc?.model.LoanSearchFilter;
    loadCatalogDataEventArgs.commons.api.vc.model.Payment.currencyType = loadCatalogDataEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYXLRJUPE_746199").code;
    loadCatalogDataEventArgs.commons.serverParameters.Payment = true;
    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.Payment = true;

  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: PaymentsForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
      onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
        let data: any = onCloseModalEventArgs.result.selectedData;

        entities.Payment.customerID = data.code;
        entities.Payment.customer = data.code + " - " + data.name;
      }
    }

  };


  //Entity: Payment
  //Payment.customer (TextInputButton) View: PaymentsForm
  task_textInputButtonEvent_VA_CUSTOMERMUPBSTT_916199 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    textInputButtonEventArgs.model.Payment.reference = "";
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_BSQUEDAIE_72552');
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

  //Entity: Payment
  //Payment.reference (TextInputButton) View: PaymentsForm
  task_textInputButtonEvent_VA_REFERENCEUFYFMY_654199 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_CUENTASKC_50998');
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
  };

  //Entity: Payment
  //Payment.customer (TextInputButton) View: PaymentsForm
  task_textInputButtonEventGrid_VA_CUSTOMERMUPBSTT_916199 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventGridEventArgs.commons.execServer = false;
  };

  //Entity: Payment
  //Payment.reference (TextInputButton) View: PaymentsForm
  task_textInputButtonEventGrid_VA_REFERENCEUFYFMY_654199 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventGridEventArgs.commons.execServer = false;
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: PaymentsForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    $('.close').hide()
  };



}