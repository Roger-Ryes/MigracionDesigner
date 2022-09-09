import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-changepayy-935171.model';
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

/* variables locales de T_ASSTSLFJQNQTJ_171*/

export class VcChangepayy935171Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSLFJQNQTJ_171"


  // (Button) 
  task_executeCommand_CM_TASSTSLF_TT1 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let parameters: any = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters();
    let msgConfirm: any = "ASSTS.MSG_ASSTS_VAAREALME_44698";
    let showMessage: any = true;
    let diaActual: any = entities.ChangePayDayEntity.currentPayDay;
    let diaNuevo: any = entities.ChangePayDayEntity.newPayDay;
    let motivo: any = entities.ChangePayDayEntity.reason;

    if (motivo != undefined) {
      if (diaActual == diaNuevo) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_DADEPAGSE_14590', false, null, timer);

      } else {

        if (showMessage) {
          let resp: any = await firstValueFrom(
            executeCommandEventArgs.commons.messageHandler.showMessagesConfirm(msgConfirm)
          );

          let response: any = false;
          switch (resp.buttonIndex) {
            case 0: //CANCEL
              executeCommandEventArgs.commons.execServer = false;
              break;
            case 1: //ACCEPT
              executeCommandEventArgs.commons.execServer = true;
              response = true;

              break;
          }
          return response;
        }
      }
    } else {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELMOTIVEE_44777', false, null, timer);
    }
  };


  //Start signature to Callback event to CM_TASSTSLF_TT1
  task_executeCommandCallback_CM_TASSTSLF_TT1 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;

      viewState.disable('CM_TASSTSLF_TT1'); //boton aplicar
      viewState.disable('VA_2009HDDBTRLSCDO_776429'); //dia pago nuevo
      viewState.disable('VA_2836UZLPSXFHEDX_271429'); //mantiene cuota

      entities.ChangePayDayEntity.newPayDay = 1;

      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_LATRANSLO_19347", false, null, timer);
    }
  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ChangePayDayForm
  task_initData_VC_CHANGEPAYY_935171 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let commons: any = initDataEventArgs.commons;
    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    let viewState: any = initDataEventArgs.commons.api.viewState;

    entities.ChangePayDayEntity.operation = parameters.parameters.loan.loanBankID;

    viewState.disable('VA_CURRENTPAYDAYYY_672429');

    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
  };


}