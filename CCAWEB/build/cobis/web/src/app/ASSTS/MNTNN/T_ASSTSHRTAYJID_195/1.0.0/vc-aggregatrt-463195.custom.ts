import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-aggregatrt-463195.model';
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

/* variables locales de T_ASSTSHRTAYJID_195*/

export class VcAggregatrt463195Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSHRTAYJID_195"


  //Entity: AggregateDeferredItemsEntity
  //AggregateDeferredItemsEntity.item (DropDownList) View: AggregateDeferredItemsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_1KIRFVKPRWSWCCE_730397 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = true;
    entities.AggregateDeferredItemsEntity.amount = 0;

  };

  //Start signature to Callback event to VA_1KIRFVKPRWSWCCE_730397
  task_changeCallback_VA_1KIRFVKPRWSWCCE_730397 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    let viewState: any = changeCallbackEventArgs.commons.api.viewState;
    let amount: any = entities.AggregateDeferredItemsEntity.amount;

    if (changeCallbackEventArgs.success && amount > 0) {
      viewState.enable('CM_TASSTSHR_TNS'); //Transmitir
    } else {
      viewState.disable('CM_TASSTSHR_TNS'); //Transmitir
    }
  };


  // (Button) 
  task_executeCommand_CM_TASSTSHR_TNS = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let parameters: any = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters();
    let msgConfirm: any = "ASSTS.MSG_ASSTS_VAAELIMEE_70525";
    let showMessage: any = true;

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
  };

  //Start signature to Callback event to CM_TASSTSHR_TNS
  task_executeCommandCallback_CM_TASSTSHR_TNS = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;

    if (executeCommandCallbackEventArgs.success) {
      viewState.disable('CM_TASSTSHR_TNS'); //Transmitir

      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_LATRANSLO_19347", false, null, timer);
    }
  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: AggregateDeferredItemsForm
  task_initData_VC_AGGREGATRT_463195 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    let viewState: any = initDataEventArgs.commons.api.viewState;

    entities.AggregateDeferredItemsEntity.operation = parameters.parameters.loan.loanBankID;

    viewState.disable('VA_8482SGVAKLBEUXQ_566397'); //monto 
    viewState.disable('CM_TASSTSHR_TNS'); //transmitir
  };



  //Entity: AggregateDeferredItemsEntity
  //AggregateDeferredItemsEntity.item (DropDownList) View: AggregateDeferredItemsForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_1KIRFVKPRWSWCCE_730397 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = true;

  };


}