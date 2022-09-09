import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-prioritiom-989489.model';
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

/* variables locales de T_PRIORITIESENY_489*/

export class VcPrioritiom989489Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_PRIORITIESENY_489"

  // (Button) 
  task_executeCommand_CM_TPRIORIT_I8N = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let cancelPriority: any = true;
    executeCommandEventArgs.commons.api.navigation.closeModal(cancelPriority);
  };

  // (Button) 
  task_executeCommand_CM_TPRIORIT_TTT = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    let dataGrid: any = {
      data: entities.Priorities
    };

    executeCommandEventArgs.commons.api.navigation.closeModal(dataGrid);
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: PrioritiesPaymentsModal
  task_initData_VC_PRIORITIOM_989489 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    entities.Priorities = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().priorities;
    //initDataEventArgs.commons.api.grid.addAllRows("Priorities", initDataEventArgs.commons.api.navigation.getCustomDialogParameters().priorities, false);
    //initDataEventArgs.commons.serverParameters.entityName = true;
  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: PrioritiesPaymentsModal
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;

  };


  //gridRowSelecting QueryView: QV_3510_83627
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_3510_83627 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}