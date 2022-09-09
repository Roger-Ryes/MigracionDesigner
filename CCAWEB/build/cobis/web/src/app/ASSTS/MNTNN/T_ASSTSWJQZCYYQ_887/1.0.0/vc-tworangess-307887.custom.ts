import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-tworangess-307887.model';
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

/* variables locales de T_ASSTSWJQZCYYQ_887*/

export class VcTworangess307887Custom extends CobisDesignerCustomEvent {

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



  //gridBeforeEnterInLineRow QueryView: QV_TJ88_MTX55
  //Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
  task_gridBeforeEnterInLineRow_QV_TJ88_MTX55 = (
    entities: Model,
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
  ) => {

    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;

    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_TJ88_MTX55', 'sequential');


    if (gridBeforeEnterInLineRowEventArgs.inlineWorkMode == 0) { //INSERT
      gridBeforeEnterInLineRowEventArgs.commons.api.grid.updateRowData(gridBeforeEnterInLineRowEventArgs.rowData, 'date', null);
    }

    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_TJ88_MTX55', 'date');

  };


  //Entity: TwoRangesFilter
  //TwoRangesFilter.date (DateField) View: TwoRangesForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DATEAMIJYBUPQWJ_858861 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("TwoRangesList");

  };


  //TwoRangesListQuery Entity: TwoRangesList
  task_executeQuery_Q_TWORILTS_QE88 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.idRango = this.dataRow.idRange;
    executeQueryEventArgs.parameters.fecha = executeQueryEventArgs.commons.api.vc.model.TwoRangesFilter.date;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.TwoRangesList = true;
  };


  //Start signature to Callback event to Q_TWORILTS_QE88
  task_executeQueryCallback_Q_TWORILTS_QE88 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    if (entities.TwoRangesList.length > 0) {

      for (let i: any = 0; i < entities.TwoRangesList.length; i++) {
        if (entities.TwoRangesList[i].date.getDate() != new Date(this.cobis.containerScope.preferences.processDate).getDate()) {
          executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_TJ88_MTX55', entities.TwoRangesList[i], 'delete');
          executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_TJ88_MTX55', entities.TwoRangesList[i], 'edit');

        }
      }

    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: TwoRangesForm
  task_initData_VC_TWORANGESS_307887 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
    this.dataRow = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().dataRow;
    initDataEventArgs.commons.api.viewState.label("G_TWORANGESS_553861", this.dataRow.rangeName);
    entities.TwoRangesFilter.date = new Date(this.cobis.containerScope.preferences.processDate);


  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: TwoRangesForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;

    let title1: any = this.dataRow.title1 + " Min";
    let title2: any = this.dataRow.title1 + " Max";
    let title3: any = this.dataRow.title2 + " Min";
    let title4: any = this.dataRow.title2 + " Max";
    let title5: any = this.dataRow.result2;

    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "minValue1", title1, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "maxValue1", title2, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "minValue2", title3, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "maxValue2", title4, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "variable", title5, false);



    switch (this.dataRow.dataType1) {
      case 'I':
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue1', '####', 0);
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue1', '####', 0);
        break;
      case 'F':
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue1', '#,######0.000000', 6);
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue1', '#,######0.000000', 6);
        break;
      default:
        // code block
    }

    switch (this.dataRow.dataType2) {
      case 'I':
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue2', '####', 0);
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue2', '####', 0);
        break;
      case 'F':
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue2', '#,######0.000000', 6);
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue2', '#,######0.000000', 6);
        break;
      default:
        // code block
    }



    switch (this.dataRow.dataTypeR2) {
      case 'I':
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'variable', '####', 0);
        break;
      case 'F':
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'variable', '#,######0.000000', 6);
        break;
      case 'M':
        renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'variable', '#,##0.00', 2);
        break;
      default:
        // code block
    }
  };



  //gridRowDeleting QueryView: QV_TJ88_MTX55
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_TJ88_MTX55 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.TwoRangesList = true;

  };






  //Start signature to Callback event to QV_TJ88_MTX55
  task_gridRowDeletingCallback_QV_TJ88_MTX55 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
      gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_TJ88_MTX55');
    }
  };



  //gridRowInserting QueryView: QV_TJ88_MTX55
  //Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
  task_gridRowInserting_QV_TJ88_MTX55 = (
    entities: Model,
    gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowInsertingEventArgs.commons.execServer = true;
    //gridRowInsertingEventArgs.commons.serverParameters.TwoRangesList = true;

  };






  //Start signature to Callback event to QV_TJ88_MTX55
  task_gridRowInsertingCallback_QV_TJ88_MTX55 = (
    entities: Model,
    gridRowInsertingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowInsertingCallbackEventArgs.success) {
      gridRowInsertingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
      gridRowInsertingCallbackEventArgs.commons.api.grid.refresh('QV_TJ88_MTX55');
    }
  };



  //gridRowSelecting QueryView: QV_TJ88_MTX55
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_TJ88_MTX55 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };






  //gridRowUpdating QueryView: QV_TJ88_MTX55
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_TJ88_MTX55 = async (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    let response: any = await firstValueFrom(
      gridRowUpdatingEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_SEVAAMOOG_84520")
    );

    //gridRowUpdatingEventArgs.commons.serverParameters.TwoRangesList = true;

    switch (response.buttonIndex) {
      case 0: //cancel
        gridRowUpdatingEventArgs.commons.execServer = false;
        return false;
      case 1: //accept
        gridRowUpdatingEventArgs.commons.execServer = true;
        return true;

    }
  };


  //Start signature to Callback event to QV_TJ88_MTX55
  task_gridRowUpdatingCallback_QV_TJ88_MTX55 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowUpdatingCallbackEventArgs.success) {
      gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
      gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_TJ88_MTX55');
    }
  };



}