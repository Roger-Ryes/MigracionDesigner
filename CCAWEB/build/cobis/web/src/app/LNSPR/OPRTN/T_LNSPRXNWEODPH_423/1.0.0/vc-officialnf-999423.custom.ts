import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-officialnf-999423.model';
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

/* variables locales de T_LNSPRXNWEODPH_423*/
let allTrue: any = false;

export class VcOfficialnf999423Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRXNWEODPH_423"

  task_gridRowCommand_VA_CHECKBOXGIYYTMJ_813800 = (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {

    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('OfficialOfficeTransferList', gridRowCommandEventArgs.rowIndex, {
      selected: (gridRowCommandEventArgs.rowData.selected !== true)
    });

  };




  //Entity: OfficialOfficeTransferFilter
  //OfficialOfficeTransferFilter.originOffice (DropDownList) View: OfficialOfficeTransferForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_ORIGINOFFICEUMK_654800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('OfficialOfficeTransferList');
    changedEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

  };



  //Entity: OfficialOfficeTransferFilter
  //OfficialOfficeTransferFilter.originOfficial (DropDownList) View: OfficialOfficeTransferForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_ORIGINOFFICILAA_229800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('OfficialOfficeTransferList');
    changedEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

  };

  //Entity: OfficialOfficeTransferFilter
  //OfficialOfficeTransferFilter.transferType (RadioButtonList) View: OfficialOfficeTransferForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TRANSFERTYPETWU_989800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('OfficialOfficeTransferList');
    changedEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

  };


  // (Button) 
  task_executeCommand_CM_TLNSPRXN_W2R = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let entity: any = entities.OfficialOfficeTransferFilter;
    if (entities.OfficialOfficeTransferList.length > 0) {
      for (let i: any = 0; i <= entities.OfficialOfficeTransferList.length - 1; i++) {
        if (!entities.OfficialOfficeTransferList[i].selected) {
          entities.OfficialOfficeTransferList[i].selected = false;
        }

      }
    }

    if (!entity.destinationOffice || !entity.destinationOfficial || !entity.reason) {
      // executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OFICINAQO_65724', false, null, timer);
      executeCommandEventArgs.commons.api.viewState.focus('VA_DESTINATIONOEEF_643800');
      executeCommandEventArgs.commons.api.viewState.focus('VA_DESTINATIONOIAI_845800');
      executeCommandEventArgs.commons.api.viewState.focus('VA_REASONDDWAKVIHS_847800');
      executeCommandEventArgs.commons.execServer = false;
    } else {
      executeCommandEventArgs.commons.execServer = true;
    }


    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };


  //Start signature to Callback event to CM_TLNSPRXN_W2R
  task_executeCommandCallback_CM_TLNSPRXN_W2R = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACICA_42329', false, null, timer);
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_JQ56_BYK87');
      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');
    }
  };



  //OfficialQuery Entity: Official
  task_executeQuery_Q_OFFILILC_KJ11 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.oficina = executeQueryEventArgs.parameters.officeCode;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Official = true;
  };


  //Start signature to Callback event to Q_OFFILILC_KJ11
  task_executeQueryCallback_Q_OFFILILC_KJ11 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //OfficalOfficeTransferListQuery Entity: OfficalOfficeTransferList
  task_executeQuery_Q_OFFILLLL_SV56 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let entity: any = executeQueryEventArgs.commons.api.vc.model.OfficialOfficeTransferFilter;


    executeQueryEventArgs.parameters.grupal = entity.transferType;
    executeQueryEventArgs.parameters.categoria = 11;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_JQ56_BYK87', ['sequential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.siguiente = executeQueryEventArgs.parameters.sequential;
    }

    if (!entity.originOffice || !entity.originOfficial) {
      executeQueryEventArgs.commons.execServer = false;
      executeQueryEventArgs.commons.api.viewState.focus('VA_ORIGINOFFICEUMK_654800');
      executeQueryEventArgs.commons.api.viewState.focus('VA_ORIGINOFFICILAA_229800');
      // executeQueryEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_INGRESEAI_45954', false, null, timer);
    } else {
      executeQueryEventArgs.parameters.oficina = entity.originOffice;
      executeQueryEventArgs.parameters.oficial = entity.originOfficial;
      executeQueryEventArgs.commons.execServer = true;
    }





    //executeQueryEventArgs.commons.serverParameters.OfficalOfficeTransferList = true;
  };


  //Start signature to Callback event to Q_OFFILLLL_SV56
  task_executeQueryCallback_Q_OFFILLLL_SV56 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {

  };


  //gridCommand (Button) QueryView: QV_JQ56_BYK87
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_JQ56_BYK87_540 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    gridExecuteCommandEventArgs.commons.execServer = false;
    //gridExecuteCommandEventArgs.commons.serverParameters.OfficialOfficeTransferList = true;

    for (let i: any = 0; i < entities.OfficialOfficeTransferList.length; i++) {
      if (allTrue) {
        gridExecuteCommandEventArgs.commons.api.grid.updateRow('OfficialOfficeTransferList', i, {
          selected: false
        });
      } else {
        gridExecuteCommandEventArgs.commons.api.grid.updateRow('OfficialOfficeTransferList', i, {
          selected: true
        });
      }
    }
    allTrue = !allTrue;
    if (!allTrue) {
      gridExecuteCommandEventArgs.commons.api.viewState.label("CEQV_201QV_JQ56_BYK87_540", "LNSPR.LBL_LNSPR_SELECCIRA_72320");
      gridExecuteCommandEventArgs.commons.api.viewState.enable('CM_TLNSPRXN_W2R');
    } else {
      gridExecuteCommandEventArgs.commons.api.viewState.label("CEQV_201QV_JQ56_BYK87_540", "LNSPR.LBL_LNSPR_DESELECIC_71224");
      gridExecuteCommandEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');
    }
  };


  task_gridInitColumnTemplate_QV_JQ56_BYK87 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {

    if (idColumn === 'selected') {
      return "<input name='selected' type='checkbox' value='#=selected#' #=selected?checked='checked':''# data-bind='value:selected' ng-click='vc.grids.QV_JQ56_BYK87.events.customRowClick($event,\"VA_CHECKBOXGIYYTMJ_813800\",\"OfficialOfficeTransferList\",\"QV_JQ56_BYK87\")'/>";

    }

  };



  task_gridInitEditColumnTemplate_QV_JQ56_BYK87 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    //if(idColumn === 'NombreColumna'){
    //  return "<span></span>";
    //}
    //if(idColumn === 'NombreColumna'){
    //  return  "<span data-bind='text:nombreColumna'><span>" ;
    //}
  };






  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: OfficialOfficeTransferForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    entities.OfficialOfficeTransferFilter.transferType = 'N';
    renderEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

  };



  //gridRowSelecting QueryView: QV_JQ56_BYK87
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_JQ56_BYK87 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };






  //gridRowUpdating QueryView: QV_JQ56_BYK87
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_JQ56_BYK87 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowUpdatingEventArgs.commons.execServer = false;

    for (let i: any = 0; i <= entities.OfficialOfficeTransferList.length - 1; i++) {
      if (entities.OfficialOfficeTransferList[i].selected) {
        gridRowUpdatingEventArgs.commons.api.viewState.enable('CM_TLNSPRXN_W2R');
        break;
      } else {
        gridRowUpdatingEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

      }

    }

  };



}