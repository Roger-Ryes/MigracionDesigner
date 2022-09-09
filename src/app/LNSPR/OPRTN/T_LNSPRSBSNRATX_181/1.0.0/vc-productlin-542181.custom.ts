import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-productlin-542181.model';
import {
  LNSPRService
} from "src/app/LNSPR/service-modules/LNSPR.service";
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

/* variables locales de T_LNSPRSBSNRATX_181*/

export class VcProductlin542181Custom extends CobisDesignerCustomEvent {

  task_changeWithError: any = {};

  constructor(public cobis: CobisCommonsService, private LNSPR: LNSPRService) {
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

  //"TaskId": "T_LNSPRSBSNRATX_181"




  //Entity: ProductLineDistribution
  //ProductLineDistribution.product (DropDownList) View: ProductLineDistributionForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PRODUCTWKWZPDFA_211676 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.api.viewState.refreshData('Q_OPEREEOA_SH40');
    changedEventArgs.commons.execServer = false;

  };

  // (Button) 
  task_executeCommand_VA_VABUTTONDMJEJKM_762676 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = false;
    entities.ProductLineDistribution.product = null;
    entities.ProductLineDistribution.clientCod = null;
    entities.ProductLineDistribution.opTypePas = null;
    entities.ProductLineDistribution.opTypeAc = null;
    entities.ProductLineDistribution.currency = null;
    entities.ProductLineDistribution.amount = null;
    entities.ProductLineDistribution.controlsAmount = false;
    entities.ProductLineDistribution.observations = null;
    entities.ProductLineDistribution.used = 0;
    entities.ProductLineDistribution.available = 0;

    executeCommandEventArgs.commons.api.viewState.enable('VA_PRODUCTWKWZPDFA_211676');
    executeCommandEventArgs.commons.api.viewState.enable('VA_CLIENTCODHNEWWJ_288676');
    executeCommandEventArgs.commons.api.viewState.enable('VA_OPTYPEPASINULZZ_450676');
    executeCommandEventArgs.commons.api.viewState.enable('VA_OPTYPEACPEUXTGS_100676');
    executeCommandEventArgs.commons.api.viewState.enable('VA_CURRENCYIMFFWXD_243676');

    entities.ProductLineDistribution.editionMode = executeCommandEventArgs.commons.constants.mode.Insert;


  };





  // (Button) 
  task_executeCommand_VA_VABUTTONUYPWWXE_933676 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters. = true;

  };

  //Start signature to Callback event to VA_VABUTTONUYPWWXE_933676
  task_executeCommandCallback_VA_VABUTTONUYPWWXE_933676 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {

      entities.ProductLineDistribution.product = null;
      entities.ProductLineDistribution.clientCod = null;
      entities.ProductLineDistribution.opTypePas = null;
      entities.ProductLineDistribution.opTypeAc = null;
      entities.ProductLineDistribution.currency = null;
      entities.ProductLineDistribution.amount = null;
      entities.ProductLineDistribution.controlsAmount = false;
      entities.ProductLineDistribution.observations = null;
      entities.ProductLineDistribution.used = 0;
      entities.ProductLineDistribution.available = 0;
      entities.ProductLineDistribution.editionMode = executeCommandCallbackEventArgs.commons.constants.mode.Insert;
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_QF17_TGN52');

      executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_PRODUCTWKWZPDFA_211676');
      executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_CLIENTCODHNEWWJ_288676');
      executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_OPTYPEPASINULZZ_450676');
      executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_OPTYPEACPEUXTGS_100676');
      executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_CURRENCYIMFFWXD_243676');
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671', false, null, timer);
    }
  };


  //LineDistributionMembersQuery Entity: LineDistributionMembers
  task_executeQuery_Q_LINEIERT_DW35 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.numero = executeQueryEventArgs.commons.api.vc.model.ProductLineDistribution.sequential;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LineDistributionMembers = true;
  };



  //Start signature to Callback event to Q_LINEIERT_DW35
  task_executeQueryCallback_Q_LINEIERT_DW35 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };



  //OperationTypeLineListQuery Entity: OperationTypeLineList
  task_executeQuery_Q_OPEREEOA_SH40 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let product: any = executeQueryEventArgs.commons.api.vc.model.ProductLineDistribution.product;

    if (product) {
      executeQueryEventArgs.parameters.product = product;
      executeQueryEventArgs.commons.execServer = true;
    } else {
      executeQueryEventArgs.commons.execServer = false;
    }

    //executeQueryEventArgs.commons.serverParameters.OperationTypeLineList = true;
  };

  //Start signature to Callback event to Q_OPEREEOA_SH40
  task_executeQueryCallback_Q_OPEREEOA_SH40 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    let opType: any;
    if (executeQueryCallbackEventArgs.commons.api.vc.mode == executeQueryCallbackEventArgs.commons.constants.mode.Update) {
      for (let i: any = 0; i < entities.ProductLineDistributionList.length; i++) {
        if (entities.ProductLineDistribution.sequential == entities.ProductLineDistributionList[i].sequential) {
          opType = entities.ProductLineDistributionList[i].opType;
          break;
        }
      }
      if (executeQueryCallbackEventArgs.commons.api.vc.model.ProductLineDistribution.nature == "A") {
        entities.ProductLineDistribution.opTypeAc = opType;
      } else {
        entities.ProductLineDistribution.opTypePas = opType;
      }
    }
  };



  //ProductLineDistributionListQuery Entity: ProductLineDistributionList
  task_executeQuery_Q_PRODLUDT_UJ17 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.numero = executeQueryEventArgs.commons.api.vc.model.ProductLineDistribution.sequential;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ProductLineDistributionList = true;
  };


  //Start signature to Callback event to Q_PRODLUDT_UJ17
  task_executeQueryCallback_Q_PRODLUDT_UJ17 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };



  //ProductLineListQuery Entity: ProductLineList
  task_executeQuery_Q_PRODTSNI_WK98 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.nature = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().nature;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ProductLineList = true;
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ProductLineDistributionForm
  task_initData_VC_PRODUCTLIN_542181 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let params: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();
    entities.ProductLineDistribution.sequential = params.sequential;
    entities.ProductLineDistribution.editionMode = initDataEventArgs.commons.constants.mode.Insert;
    if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert) {
      entities.ProductLineDistribution.codLine = params.lineCode;
      entities.ProductLineDistribution.used = 0;
      entities.ProductLineDistribution.available = 0;
      entities.ProductLineDistribution.controlsAmount = false;
      initDataEventArgs.commons.execServer = true;

    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Query) {
      initDataEventArgs.commons.execServer = false;
    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update) {
      entities.ProductLineDistribution.codLine = params.lineCode;
      entities.ProductLineDistribution.used = 0;
      entities.ProductLineDistribution.available = 0;
      entities.ProductLineDistribution.controlsAmount = false;
      initDataEventArgs.commons.execServer = true;
    }
  };



  //Start signature to Callback event to VC_PRODUCTLIN_542181
  task_initDataCallback_VC_PRODUCTLIN_542181 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: ProductLineDistributionForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    if (renderEventArgs.commons.api.vc.mode == renderEventArgs.commons.constants.mode.Update) {
      renderEventArgs.commons.api.grid.refresh('QV_QF17_TGN52');
    } else if (renderEventArgs.commons.api.vc.mode == renderEventArgs.commons.constants.mode.Insert) {
      renderEventArgs.commons.api.grid.refresh('QV_QF17_TGN52');
    }

    if (entities.ProductLineDistribution.nature == "A") {
      renderEventArgs.commons.api.viewState.show('VA_OPTYPEACPEUXTGS_100676');
    } else {
      renderEventArgs.commons.api.viewState.show('VA_OPTYPEPASINULZZ_450676');
    }

  };



  //gridRowDeleting QueryView: QV_QF17_TGN52
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_QF17_TGN52 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.ProductLineDistributionList = true;

  };






  //Start signature to Callback event to QV_QF17_TGN52
  task_gridRowDeletingCallback_QV_QF17_TGN52 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, timer);
    }
  };


  //gridRowSelecting QueryView: QV_QF17_TGN52
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_QF17_TGN52 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

    if (gridRowSelectingEventArgs.commons.api.vc.mode == gridRowSelectingEventArgs.commons.constants.mode.Update) {
      entities.ProductLineDistribution.editionMode = gridRowSelectingEventArgs.commons.constants.mode.Update;
      gridRowSelectingEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_EDICINHAI_74003', false, null, timer);
      entities.ProductLineDistribution.product = gridRowSelectingEventArgs.rowData.product;
      entities.ProductLineDistribution.clientCode = gridRowSelectingEventArgs.rowData.clientCod;

      entities.ProductLineDistribution.currency = gridRowSelectingEventArgs.rowData.codCurrency;
      entities.ProductLineDistribution.amount = gridRowSelectingEventArgs.rowData.amount;
      entities.ProductLineDistribution.controlsAmount = gridRowSelectingEventArgs.rowData.controlsAmount == 'S' ? true : false;
      entities.ProductLineDistribution.observations = gridRowSelectingEventArgs.rowData.observations;
      entities.ProductLineDistribution.used = gridRowSelectingEventArgs.rowData.used;
      entities.ProductLineDistribution.available = gridRowSelectingEventArgs.rowData.available;
      entities.ProductLineDistribution.clientCod = gridRowSelectingEventArgs.rowData.clientCod;

      gridRowSelectingEventArgs.commons.api.viewState.disable('VA_PRODUCTWKWZPDFA_211676');
      gridRowSelectingEventArgs.commons.api.viewState.disable('VA_CLIENTCODHNEWWJ_288676');
      gridRowSelectingEventArgs.commons.api.viewState.disable('VA_OPTYPEPASINULZZ_450676');
      gridRowSelectingEventArgs.commons.api.viewState.disable('VA_OPTYPEACPEUXTGS_100676');
      gridRowSelectingEventArgs.commons.api.viewState.disable('VA_CURRENCYIMFFWXD_243676');
    }

  };



}