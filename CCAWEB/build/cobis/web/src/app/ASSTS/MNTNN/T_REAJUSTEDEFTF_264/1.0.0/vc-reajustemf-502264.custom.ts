import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-reajustemf-502264.model';
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

/* variables locales de T_REAJUSTEDEFTF_264*/

export class VcReajustemf502264Custom extends CobisDesignerCustomEvent {

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

  /*"TaskId": "T_REAJUSTEDEFTF_264",*/
  //Your code here

  //Entity: ReadjustmentDetalilsLoan
  //ReadjustmentDetalilsLoan.porcentaje (TextInputBox) View: ReadjustmentDetalilsLoanForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXAAA_377141 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;

    let api: any = changeEventArgs.commons.api;
    let selectedRow: any = api.vc.grids.QV_2618_23821.selectedRow;

    if (changeEventArgs.newValue) {
      selectedRow.set('referencial', null);
      selectedRow.set('signo', null);
      selectedRow.set('factor', null);
    }
  };

  //Entity: ReadjustmentDetalilsLoan
  //ReadjustmentDetalilsLoan.referencial (ComboBox) View: ReadjustmentDetalilsLoanForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXFYD_123141 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;

    let api: any = changeEventArgs.commons.api;
    let selectedRow: any = api.vc.grids.QV_2618_23821.selectedRow;

    if (changeEventArgs.newValue) {
      selectedRow.set('porcentaje', null);
    }
  };

  //Entity: ReadjustmentDetalilsLoan
  //ReadjustmentDetalilsLoan.signo (ComboBox) View: ReadjustmentDetalilsLoanForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXIEY_291141 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;

    let api: any = changeEventArgs.commons.api;
    let selectedRow: any = api.vc.grids.QV_2618_23821.selectedRow;

    if (changeEventArgs.newValue) {
      selectedRow.set('porcentaje', null);
    }
  };

  //Entity: ReadjustmentDetalilsLoan
  //ReadjustmentDetalilsLoan.factor (TextInputBox) View: ReadjustmentDetalilsLoanForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXYTY_525141 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;

    let api: any = changeEventArgs.commons.api;
    let selectedRow: any = api.vc.grids.QV_2618_23821.selectedRow;

    if (changeEventArgs.newValue) {
      selectedRow.set('porcentaje', null);
    }
  };


  //ReadjustmentDetalilsLoanQuery_2618 Entity: 
  task_executeQuery_Q_REAJUSTE_2618 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ReadjustmentDetalilsLoanForm
  task_initData_VC_REAJUSTEMF_502264 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = true;

    let model: any = initDataEventArgs.commons.api.vc.model;
    model.Loan = initDataEventArgs.commons.api.parentVc?.model.Loan;
    model.ReadjustmentLoanCab = initDataEventArgs.commons.api.navigation
      .getCustomDialogParameters().readjustmentLoanCab;
  };

  //Entity: ReadjustmentDetalilsLoan
  //ReadjustmentDetalilsLoan.referencial (ComboBox) View: ReadjustmentDetalilsLoanForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_TEXTINPUTBOXFYD_123141 = (loadCatalogEventArgs: any) => {
    loadCatalogEventArgs.commons.execServer = true;
    //loadCatalogEventArgs.commons.serverParameters.ReadjustmentDetalilsLoan = true;
  };


  //gridRowDeleting QueryView: QV_2618_23821
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_2618_23821 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.ReadjustmentDetalilsLoan = true;

  };






  //Start signature to Callback event to QV_2618_23821
  task_gridRowDeletingCallback_QV_2618_23821 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIMINAET_70731', false, null, this.ASSTS.timer);
    }
  };



  //gridRowSelecting QueryView: QV_2618_23821
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_2618_23821 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };






  //gridRowUpdating QueryView: QV_2618_23821
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_2618_23821 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    if (!gridRowUpdatingEventArgs.rowData.porcentaje && !gridRowUpdatingEventArgs.rowData.factor && !gridRowUpdatingEventArgs.rowData.signo && !gridRowUpdatingEventArgs.rowData.referencial) {
      gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_SEDEBEIAF_79454', false, null, this.ASSTS.timer);
      gridRowUpdatingEventArgs.cancel = true;
      gridRowUpdatingEventArgs.commons.execServer = false;

    } else if (!gridRowUpdatingEventArgs.rowData.porcentaje && (!gridRowUpdatingEventArgs.rowData.factor || !gridRowUpdatingEventArgs.rowData.signo || !gridRowUpdatingEventArgs.rowData.referencial)) {
      gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_PARAINGLE_54663', false, null, this.ASSTS.timer);
      gridRowUpdatingEventArgs.cancel = true;
      gridRowUpdatingEventArgs.commons.execServer = false;
    } else if (gridRowUpdatingEventArgs.rowData.porcentaje && gridRowUpdatingEventArgs.rowData.porcentaje <= 0) {
      gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_SISEINGAE_33960', false, null, this.ASSTS.timer);
      gridRowUpdatingEventArgs.cancel = true;
      gridRowUpdatingEventArgs.commons.execServer = false;
    } else {
      gridRowUpdatingEventArgs.commons.execServer = true;
    }


    //gridRowUpdatingEventArgs.commons.serverParameters.ReadjustmentDetalilsLoan = true;

  };


  //Start signature to Callback event to QV_2618_23821
  task_gridRowUpdatingCallback_QV_2618_23821 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowUpdatingCallbackEventArgs.success) {
      gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SEDEBERZE_11967', false, null, this.ASSTS.timer);
    }
  };



}