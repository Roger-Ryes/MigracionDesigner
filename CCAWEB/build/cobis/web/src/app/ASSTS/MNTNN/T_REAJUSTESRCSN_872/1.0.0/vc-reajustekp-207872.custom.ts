import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-reajustekp-207872.model';
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


/* variables locales de T_LOANHEADERNFI_316*/

/* variables locales de T_REAJUSTECAMMB_801*/

/* variables locales de T_REAJUSTESRCSN_872*/


export class VcReajustekp207872Custom extends CobisDesignerCustomEvent {

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


  /*"TaskId": "T_LOANHEADERNFI_316",*/
  //Your code here

  /*"TaskId": "T_REAJUSTECAMMB_801",*/
  //Your code here

  /*"TaskId": "T_REAJUSTESRCSN_872",*/
  //Your code here

  //showGridRowDetailIcon QueryView: QV_5831_17646
  //Evento ShowGridRowDetailIcon: Evento que define si presentar u ocultar el ícono de detalle de grilla
  task_showGridRowDetailIcon_QV_5831_17646 = (
    entities: Model,
    showGridRowDetailIconEventArgs: CobisModelGridShowRowDetailIconEventArgs
  ) => {
    return true;
  };

  //ReadjustmentLoanCabQuery_5831 Entity: 
  task_executeQuery_Q_REAJUSBC_5831 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.next = null;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_5831_17646', ['date'], executeQueryEventArgs);

    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.next = executeQueryEventArgs.parameters.date;
    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };


  //Start signature to Callback event to Q_REAJUSBC_5831
  task_executeQueryCallback_Q_REAJUSBC_5831 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //gridInitDetailTemplate QueryView: QV_5831_17646
  //
  task_gridInitDetailTemplate_QV_5831_17646 = (
    entities: Model,
    gridInitDetailTemplateEventArgs: CobisModelGridInitDetailTemplateEventArgs
  ) => {
    gridInitDetailTemplateEventArgs.commons.execServer = false;
    let mode: any = 8;
    if (gridInitDetailTemplateEventArgs.commons.api.vc.id == 'VC_REAJUSTEKP_207872') {
      mode = 2;
    }

    let nav: any = gridInitDetailTemplateEventArgs.commons.api.navigation;

    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'MNTNN',
      taskId: 'T_REAJUSTEDEFTF_264',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_REAJUSTEMF_502264'
    };

    nav.queryParameters = {
      mode: mode
    };

    nav.customDialogParameters = {
      readjustmentLoanCab: gridInitDetailTemplateEventArgs.modelRow
    };
    nav.openDetailTemplate('QV_5831_17646', gridInitDetailTemplateEventArgs.modelRow);
  };

  //gridRowDeleting QueryView: QV_5831_17646
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_5831_17646 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.ReadjustmentLoanCab = true;
  };

  //Start signature to Callback event to QV_5831_17646
  task_gridRowDeletingCallback_QV_5831_17646 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIMINAET_70731', false, null, timer);
    }
  };



  //gridRowSelecting QueryView: QV_5831_17646
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_5831_17646 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;
    //gridRowSelectingEventArgs.commons.serverParameters.ReadjustmentLoanCab = true;

  };






  //gridRowUpdating QueryView: QV_5831_17646
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_5831_17646 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowUpdatingEventArgs.commons.execServer = true;
    //gridRowUpdatingEventArgs.commons.serverParameters.ReadjustmentLoanCab = true;
  };

  //Start signature to Callback event to QV_5831_17646
  task_gridRowUpdatingCallback_QV_5831_17646 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowUpdatingCallbackEventArgs.success) {
      gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SEDEBERZE_11967', false, null, timer);
    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: REAJUSTE
  task_initData_VC_REAJUSTEKP_207872 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.api.viewState.hide('VC_VPRGARGERZ_116872');

    let commons: any = initDataEventArgs.commons;
    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;

    commons.execServer = false;
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: REAJUSTE
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

  };


}