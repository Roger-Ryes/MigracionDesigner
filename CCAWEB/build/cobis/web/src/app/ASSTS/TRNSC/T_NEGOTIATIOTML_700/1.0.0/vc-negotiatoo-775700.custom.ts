import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-negotiatoo-775700.model';
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

/* variables locales de T_NEGOTIATIOTML_700*/

export class VcNegotiatoo775700Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_NEGOTIATIOTML_700"

  //Entity: Negotiation
  //Negotiation.additionalPayments (CheckBox) View: NegotiationPaymentsModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXAPF_912225 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;

    if (entities.Negotiation.additionalPayments) {
      viewState.show('VA_5608AAOSYWATGEZ_226225');
    } else {
      viewState.hide('VA_5608AAOSYWATGEZ_226225');
    }
    entities.Negotiation.reductionType = 'T'
  };

  // (Button) 
  task_executeCommand_CM_TNEGOTIA_2A4 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    executeCommandEventArgs.commons.api.navigation.closeModal(entities.Negotiation);

  };

  // (Button) 
  task_executeCommand_CM_TNEGOTIA_6T_ = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    let cancelButton: any = true;
    executeCommandEventArgs.commons.api.navigation.closeModal(cancelButton);
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: NegotiationPaymentsModal
  task_initData_VC_NEGOTIATOO_775700 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    let viewState: any = initDataEventArgs.commons.api.viewState;
    let dialogParameters: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();

    entities.Negotiation.paymentType = dialogParameters.negotiation.paymentType;
    entities.Negotiation.interestType = dialogParameters.negotiation.interestType;
    entities.Negotiation.fullFee = dialogParameters.negotiation.fullFee;
    entities.Negotiation.additionalPayments = dialogParameters.negotiation.additionalPayments;

    if (entities.Negotiation.additionalPayments) {
      entities.Negotiation.reductionType = dialogParameters.negotiation.reductionType;
      viewState.show('VA_5608AAOSYWATGEZ_226225');
    } else {
      viewState.hide('VA_5608AAOSYWATGEZ_226225');
      entities.Negotiation.reductionType = 'T';
    }
  };


}