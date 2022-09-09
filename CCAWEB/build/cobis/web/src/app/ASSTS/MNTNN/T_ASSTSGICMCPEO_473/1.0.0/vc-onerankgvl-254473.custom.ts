import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-onerankgvl-254473.model';
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

/* variables locales de T_ASSTSGICMCPEO_473*/

export class VcOnerankgvl254473Custom extends CobisDesignerCustomEvent {

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

  dataRow: any;



  //gridBeforeEnterInLineRow QueryView: QV_SK42_AAN67
  //Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
  task_gridBeforeEnterInLineRow_QV_SK42_AAN67 = (
    entities: Model,
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
  ) => {

    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;

    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_SK42_AAN67', 'sequential');


    if (gridBeforeEnterInLineRowEventArgs.inlineWorkMode == 0) { //INSERT
      gridBeforeEnterInLineRowEventArgs.commons.api.grid.updateRowData(gridBeforeEnterInLineRowEventArgs.rowData, 'date', null);
    }

    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_SK42_AAN67', 'date');
  };


  //Entity: OneRankFilter
  //OneRankFilter.date (DateField) View: OneRankForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DATEATAJJMIOPBZ_980961 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    changedEventArgs.commons.api.grid.removeAllRows("OneRankList");

  };


  //OneRankListQuery Entity: OneRankList
  task_executeQuery_Q_ONERIAAL_UR42 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.idRango = this.dataRow.idRange;
    executeQueryEventArgs.parameters.fecha = executeQueryEventArgs.commons.api.vc.model.OneRankFilter.date;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.OneRankList = true;
  };


  //Start signature to Callback event to Q_ONERIAAL_UR42
  task_executeQueryCallback_Q_ONERIAAL_UR42 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    if (entities.OneRankList.length > 0) {

      for (let i: any = 0; i < entities.OneRankList.length; i++) {
        if (entities.OneRankList[i].date.getDate() != new Date(this.cobis.containerScope.preferences.processDate).getDate()) {
          executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_SK42_AAN67', entities.OneRankList[i], 'delete');
          executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_SK42_AAN67', entities.OneRankList[i], 'edit');

        }
      }

    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: OneRankForm
  task_initData_VC_ONERANKGVL_254473 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
    this.dataRow = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().dataRow;
    initDataEventArgs.commons.api.viewState.label("G_ONERANKCDL_257961", this.dataRow.rangeName);
    entities.OneRankFilter.date = new Date(this.cobis.containerScope.preferences.processDate);

  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: OneRankForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let title1: any = this.dataRow.title1 + " Min";
    let title2: any = this.dataRow.title1 + " Max";
    let title3: any = this.dataRow.result2;

    renderEventArgs.commons.api.grid.title("QV_SK42_AAN67", "minValue", title1, false);
    renderEventArgs.commons.api.grid.title("QV_SK42_AAN67", "maxValue", title2, false);
    renderEventArgs.commons.api.grid.title("QV_SK42_AAN67", "value", title3, false);


    switch (this.dataRow.dataType1) {
      case 'I':
        renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'minValue', '####', 0);
        renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'maxValue', '####', 0);
        break;
      case 'F':
        renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'minValue', '#,######0.000000', 6);
        renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'maxValue', '#,######0.000000', 6);
        break;
      default:
        // code block
    }


    switch (this.dataRow.dataTypeR2) {
      case 'I':
        renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'value', '####', 0);
        break;
      case 'F':
        renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'value', '#,######0.000000', 6);
        break;
      default:
        // code block
    }
  };



  //gridRowDeleting QueryView: QV_SK42_AAN67
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_SK42_AAN67 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.OneRankList = true;

  };






  //Start signature to Callback event to QV_SK42_AAN67
  task_gridRowDeletingCallback_QV_SK42_AAN67 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
      gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_SK42_AAN67');
    }
  };



  //gridRowInserting QueryView: QV_SK42_AAN67
  //Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
  task_gridRowInserting_QV_SK42_AAN67 = (
    entities: Model,
    gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowInsertingEventArgs.commons.execServer = true;
    //gridRowInsertingEventArgs.commons.serverParameters.OneRankList = true;

  };






  //Start signature to Callback event to QV_SK42_AAN67
  task_gridRowInsertingCallback_QV_SK42_AAN67 = (
    entities: Model,
    gridRowInsertingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowInsertingCallbackEventArgs.success) {
      gridRowInsertingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
      gridRowInsertingCallbackEventArgs.commons.api.grid.refresh('QV_SK42_AAN67');
    }
  };



  //gridRowSelecting QueryView: QV_SK42_AAN67
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_SK42_AAN67 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };






  //gridRowUpdating QueryView: QV_SK42_AAN67
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_SK42_AAN67 = async (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    let response: any = await firstValueFrom(
      gridRowUpdatingEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_SEVAAMOOG_84520")
    );

    //gridRowUpdatingEventArgs.commons.serverParameters.OneRankList = true;

    switch (response.buttonIndex) {
      case 0: //cancel
        gridRowUpdatingEventArgs.commons.execServer = false;
        return false;
      case 1: //accept
        gridRowUpdatingEventArgs.commons.execServer = true;
        return true;

    }
  };


  //Start signature to Callback event to QV_SK42_AAN67
  task_gridRowUpdatingCallback_QV_SK42_AAN67 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowUpdatingCallbackEventArgs.success) {
      gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
      gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_SK42_AAN67');
    }
  };



}