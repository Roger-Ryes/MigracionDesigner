import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-leftoverpm-168459.model';
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

/* variables locales de T_LEFTOVERPALDD_459*/

export class VcLeftoverpm168459Custom extends CobisDesignerCustomEvent {

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

  customerCode: any;


  //Entity: LeftOverPayment
  //LeftOverPayment.currencyType (ComboBox) View: LeftoverPaymentsModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXSZZ_277369 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;

  };

  // (Button) 
  task_executeCommand_CM_TLEFTOVE_V_5 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let cancelButton: any = true;
    executeCommandEventArgs.commons.api.navigation.closeModal(cancelButton);
  };

  // (Button) 
  task_executeCommand_CM_TLEFTOVE__3S = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    executeCommandEventArgs.commons.api.navigation.closeModal(entities.LeftOverPayment);
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LeftoverPaymentsModal
  task_initData_VC_LEFTOVERPM_168459 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

    let dialogParameters: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();

    entities.LeftOverPayment.paymentType = dialogParameters.leftOverPayment.paymentType;
    entities.LeftOverPayment.value = dialogParameters.leftOverPayment.value;
    entities.LeftOverPayment.currencyType = dialogParameters.leftOverPayment.currencyType;
    entities.LeftOverPayment.reference = dialogParameters.leftOverPayment.reference;
    entities.LeftOverPayment.note = dialogParameters.leftOverPayment.note;

    this.customerCode = dialogParameters.customerCode;
  };

  //Entity: LeftOverPayment
  //LeftOverPayment.paymentType (ComboBox) View: LeftoverPaymentsModal
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_TEXTINPUTBOXAQZ_901369 = (loadCatalogEventArgs: any) => {
    loadCatalogEventArgs.commons.execServer = true;
    //loadCatalogEventArgs.commons.serverParameters.LeftOverPayment = true;
  };

  //Entity: LeftOverPayment
  //LeftOverPayment.currencyType (ComboBox) View: LeftoverPaymentsModal
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_TEXTINPUTBOXSZZ_277369 = (loadCatalogEventArgs: any) => {
    loadCatalogEventArgs.commons.execServer = true;
    //loadCatalogEventArgs.commons.serverParameters.LeftOverPayment = true;
  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: LeftoverPaymentsModal
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "VC_BANKACCOTT_940944") {
      if (typeof onCloseModalEventArgs.result.account != "undefined") {
        entities.LeftOverPayment.reference = onCloseModalEventArgs.result.account.trimRight();
        entities.LeftOverPayment.note = onCloseModalEventArgs.result.accountName.trimRight();
      }
    }
    //onCloseModalEventArgs.commons.serverParameters.entityName = true;
  };

  //Entity: LeftOverPayment
  //LeftOverPayment.reference (TextInputButton) View: LeftoverPaymentsModal

  task_textInputButtonEvent_VA_TEXTINPUTBOXJMX_394369 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

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
      customerID: this.customerCode,
      paymentType: textInputButtonEventArgs.model.LeftOverPayment.paymentType
    };
  };


}