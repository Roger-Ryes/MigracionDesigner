import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-raterangee-778821.model';
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

/* variables locales de T_ASSTSXWJMINKN_821*/

export class VcRaterangee778821Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSXWJMINKN_821"


  //gridBeforeEnterInLineRow QueryView: QV_MD41_JYZ75
  //Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
  task_gridBeforeEnterInLineRow_QV_MD41_JYZ75 = (
    entities: Model,
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
  ) => {

    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;

    if (gridBeforeEnterInLineRowEventArgs.inlineWorkMode == 0) { //INSERT
      gridBeforeEnterInLineRowEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'rank');
    } else { //UPDATE
      gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'rank');

      if (gridBeforeEnterInLineRowEventArgs.rowData.rank == 1) {
        gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'title2');
        gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'dataType2');
      } else {
        gridBeforeEnterInLineRowEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'title2');
        gridBeforeEnterInLineRowEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'dataType2');
      }
    }

  };




  //Entity: RateRangeList
  //RateRangeList.rank (DropDownList) View: RateRangeForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXEGT_745502 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 1) {
      changedEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'title2');
      changedEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'dataType2');
    } else {
      changedEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'title2');
      changedEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'dataType2');
    }

  };


  //RateRangeListQuery Entity: RateRangeList
  task_executeQuery_Q_RATEGLSL_WM41 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.RateRangeList = true;
  };


  //gridRowDeleting QueryView: QV_MD41_JYZ75
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.RateRangeList = true;

  };






  //Start signature to Callback event to QV_MD41_JYZ75
  task_gridRowDeletingCallback_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
      gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_MD41_JYZ75');
    }
  };


  //gridRowInserting QueryView: QV_MD41_JYZ75
  //Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
  task_gridRowInserting_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
  ) => {


    gridRowInsertingEventArgs.rowData.dataType2 = !gridRowInsertingEventArgs.rowData.dataType2 ? null : gridRowInsertingEventArgs.rowData.dataType2;

    gridRowInsertingEventArgs.rowData.title2 = !gridRowInsertingEventArgs.rowData.title2 ? null : gridRowInsertingEventArgs.rowData.title2;

    if (gridRowInsertingEventArgs.rowData.rank == 2) {
      if (!gridRowInsertingEventArgs.rowData.title2 || !gridRowInsertingEventArgs.rowData.dataType2) {

        gridRowInsertingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_COLUMNA2I_43952', false, null, this.ASSTS.timer);
        gridRowInsertingEventArgs.commons.execServer = false;
        gridRowInsertingEventArgs.cancel = true;
      } else {
        gridRowInsertingEventArgs.commons.execServer = true;
      }
    } else {
      gridRowInsertingEventArgs.commons.execServer = true;
    }

    //gridRowInsertingEventArgs.commons.serverParameters.RateRangeList = true;

  };


  //Start signature to Callback event to QV_MD41_JYZ75
  task_gridRowInsertingCallback_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowInsertingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowInsertingCallbackEventArgs.success) {
      gridRowInsertingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
      gridRowInsertingCallbackEventArgs.commons.api.grid.refresh('QV_MD41_JYZ75');
    }
  };


  //gridRowSelecting QueryView: QV_MD41_JYZ75
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;


    if (gridRowSelectingEventArgs.rowData.rank == 1) {


      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'MNTNN',
        taskId: 'T_ASSTSGICMCPEO_473',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_ONERANKGVL_254473'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        dataRow: gridRowSelectingEventArgs.rowData

      };
      nav.registerView('G_RATERANEGE_251502');
    } else {
      // gridRowSelectingEventArgs.commons.api.viewState.label("G_RATERANEGE_251502", "Ejemplo Etiqueta sin traducir", false);
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'MNTNN',
        taskId: 'T_ASSTSWJQZCYYQ_887',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_TWORANGESS_307887'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        dataRow: gridRowSelectingEventArgs.rowData

      };
      nav.registerView('G_RATERANEGE_251502');
    }
  };


  //gridRowUpdating QueryView: QV_MD41_JYZ75
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_MD41_JYZ75 = async (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    //gridRowUpdatingEventArgs.commons.serverParameters.RateRangeList = true;
    gridRowUpdatingEventArgs.rowData.dataType2 = !gridRowUpdatingEventArgs.rowData.dataType2 ? null : gridRowUpdatingEventArgs.rowData.dataType2;

    gridRowUpdatingEventArgs.rowData.title2 = !gridRowUpdatingEventArgs.rowData.title2 ? null : gridRowUpdatingEventArgs.rowData.title2;

    if (gridRowUpdatingEventArgs.rowData.rank == 2) {
      if (!gridRowUpdatingEventArgs.rowData.title2 || !gridRowUpdatingEventArgs.rowData.dataType2) {

        gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_COLUMNA2I_43952', false, null, this.ASSTS.timer);
        gridRowUpdatingEventArgs.commons.execServer = false;
        gridRowUpdatingEventArgs.cancel = true;
        return;
      }
    }

    let response: any = await firstValueFrom(
      gridRowUpdatingEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_SEVAAMOOG_84520")
    );

    switch (response.buttonIndex) {
      case 0: //cancel
        gridRowUpdatingEventArgs.commons.execServer = false;
        return false;
      case 1: //accept
        gridRowUpdatingEventArgs.commons.execServer = true;
        return true;

    }
  };


  //Start signature to Callback event to QV_MD41_JYZ75
  task_gridRowUpdatingCallback_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowUpdatingCallbackEventArgs.success) {
      gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
      gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_MD41_JYZ75');
    }
  };



}