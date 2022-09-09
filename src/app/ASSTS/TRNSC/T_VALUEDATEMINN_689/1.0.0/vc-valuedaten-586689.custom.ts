import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-valuedaten-586689.model';
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

/* variables locales de T_VALUEDATEUVDU_861*/

/* variables locales de T_VALUEDATEMINN_689*/


export class VcValuedaten586689Custom extends CobisDesignerCustomEvent {

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

  /*"TaskId": "T_VALUEDATEUVDU_861",*/
  //Your code here

  queryDict: any = {};


  //TransactionLoanQuery Entity: 
  task_executeQuery_Q_TRANSACO_1244 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.bank = executeQueryEventArgs.commons.api.vc.model.Loan.loanBankID;
    executeQueryEventArgs.parameters.option = executeQueryEventArgs.commons.api.vc.model.Loan.tipo;
    executeQueryEventArgs.parameters.sequential = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_1244_89323', ['secuential'], executeQueryEventArgs);

    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.sequential = executeQueryEventArgs.parameters.secuential;
    }

    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };



  //Start signature to Callback event to Q_TRANSACO_1244
  task_executeQueryCallback_Q_TRANSACO_1244 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //gridRowSelecting QueryView: QV_1244_89323
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_1244_89323 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    // TODO
    task.sequential = gridRowSelectingEventArgs.rowData.secuential;
    entities.ValueDateFilter.indexTrn = gridRowSelectingEventArgs.rowIndex;
  };

  // (Button) 
  task_executeCommand_CM_VALUEDAT_NNN = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let parameters: any = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters();
    let msgConfirm: any = "";
    let showMessage: any = true;
    if (parameters.parameters.idMenu == 'FECHA') {
      msgConfirm = "ASSTS.MSG_ASSTS_ESTSEGURO_95544";
    } else if (parameters.parameters.idMenu == 'REVERSOS') {
      msgConfirm = "ASSTS.MSG_ASSTS_ESTSEGURV_19605";
      let selectedRow: any = executeCommandEventArgs.commons.api.grid.getSelectedRows('QV_1244_89323');
      if (selectedRow.length == 0) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation(
          "ASSTS.MSG_ASSTS_SELECCINT_52125", false, null, this.ASSTS.timer);
        showMessage = false;
      }
    }
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
          //COMPARE VALUE DATE  WITH LAST PROCESS DATE
          if (this.queryDict.menu == this.ASSTS.Constants.MENU_VALUE_DATE) {
            let dateParts: any = entities.Loan.lastProcessDate?.split("/");
            let d: any = dateParts[1] + '/' + dateParts[0] + '/' + dateParts[2];
            let dateLP: any = new Date(d);
            if (entities.ValueDateFilter.valueDate! > dateLP) {
              return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_LAFECHADP_53060").then((respAux: any) => {
                switch (respAux.buttonIndex) {
                  case 0:
                    executeCommandEventArgs.commons.execServer = false;
                    break;
                  case 1:
                    executeCommandEventArgs.commons.execServer = true;
                    response = true;
                    break;
                }
                return response;
              });
            } else {
              executeCommandEventArgs.commons.execServer = true;
              response = true;
            }
          } else {
            executeCommandEventArgs.commons.execServer = true;
            response = true;
          }
          break;
      }
      return response;
    }
  };

  //Start signature to Callback event to CM_VALUEDAT_NNN
  task_executeCommandCallback_CM_VALUEDAT_NNN = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      entities.Loan.lastProcessDate = kendo.toString(kendo.parseDate(entities.Loan.lastProcessDate), JSON.parse(sessionStorage.dateFormat));
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_LATRANSLO_19347", false, null, this.ASSTS.timer);
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_1244_89323');

    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ValueDateMain
  task_initData_VC_VALUEDATEN_586689 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let commons: any = initDataEventArgs.commons;
    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;
    commons.execServer = false;
    if (parameters.parameters.idMenu == 'FECHA') {
      entities.ValueDateFilter.option = this.ASSTS.Constants.MENU_VALUE_DATE;
      commons.api.viewState.hide('VA_OBSERVATIONDKBP_175866');
    } else if (parameters.parameters.idMenu == 'REVERSOS') {
      entities.ValueDateFilter.option = this.ASSTS.Constants.MENU_REVERSE;
      //$(".breadcrumb .ng-binding").last().text(commons.api.viewState.translate('ASSTS.LBL_ASSTS_REVERSAGQ_88268'));
      commons.api.viewState.hide('VA_LASTPROCESSDEET_724866');
      commons.api.viewState.hide('VA_3610ZOUUEMDZQED_313866');
    }
    if (entities.Loan.statusID == "0") {
      api.viewState.disable("CM_VALUEDAT_NNN");
    }
    initDataEventArgs.commons.api.viewState.hide('VC_DNIIMAEAVR_174689');
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: ValueDateMain
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.grid.refresh('QV_1244_89323');
  };


}