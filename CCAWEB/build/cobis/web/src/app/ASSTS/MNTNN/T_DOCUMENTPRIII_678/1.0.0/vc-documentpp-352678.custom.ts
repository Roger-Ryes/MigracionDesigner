import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-documentpp-352678.model';
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

/* variables locales de T_DOCUMENTPRIII_678*/
let parameters: any;

export class VcDocumentpp352678Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_DOCUMENTPRIII_678"

  task_gridRowCommand_VA_TEXTINPUTBOXDUI_728334 = (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {

    gridRowCommandEventArgs.commons.execServer = false;

    gridRowCommandEventArgs.commons.api.grid.updateRow('PrintingDocuments', gridRowCommandEventArgs.rowIndex, {
      item: (gridRowCommandEventArgs.rowData.item !== true)
    });




  };





  // (Button) 
  task_executeCommand_CM_TDOCUMEN_TN1 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

  };

  //Start signature to Callback event to CM_TDOCUMEN_TN1
  task_executeCommandCallback_CM_TDOCUMEN_TN1 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    let dataGrid: any = entities.PrintingDocuments;
    let itemReporte: any = "";
    let reportTitle: any = "";
    let args: any = [];
    let flag: any = 0;
    let reportName: any = "";
    for (let i: any = 0; i < dataGrid.length; i++) {
      if (dataGrid[i].item === true) {
        flag++;
      }
    }
    if (flag > 0) {
      reportTitle = this.cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
      itemReporte = "";
      reportName = 'FileList';
      args = [
        ['report.module', 'cartera'],
        ['report.name', reportName],
        ['creditNum', entities.Loan.loanBankID],
        ['clientNum', entities.Loan.clientID],
        ["completeName", entities.Loan.clientName],
        ['operationType', entities.Loan.desOperationType],
        ['cashRecieved', entities.Loan.amount],
        ['beginDateDay', entities.Loan.startDate],
        ["officeName", JSON.parse(sessionStorage.userOffice).value]
      ];
      this.ASSTS.Utils.generarReporte(itemReporte, args, reportTitle);
    }
  };


  //PrintingDocumentsQuery_3105 Entity: 
  task_executeQuery_Q_PRINTICM_3105 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.mode = 0;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };

  //Start signature to Callback event to Q_PRINTICM_3105
  task_executeQueryCallback_Q_PRINTICM_3105 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  task_gridInitColumnTemplate_QV_3105_20065 = (idColumn: any) => {
    /*if (idColumn === 'item') {
        return "<input type=\'checkbox\' ng-model='dataItem.item' name=\'item\' id=\'VA_TEXTINPUTBOXDUI_728334\' #if (item) {# checked #}else{# unchecked #} # />";
    }*/



    if (idColumn === 'item') {
      return "<input name='item' type='checkbox' value='#=item#' #=item?checked='checked':''# data-bind='value:item' ng-click='vc.grids.QV_3105_20065.events.customRowClick($event,\"VA_TEXTINPUTBOXDUI_728334\",\"PrintingDocuments\",\"QV_3105_20065\")'/>";

    }

  };

  task_gridInitEditColumnTemplate_QV_3105_20065 = (idColumn: any) => {
    if (idColumn === 'item') {
      return "<input type=\'checkbox\' ng-model='dataItem.item' name=\'item\' id=\'VA_TEXTINPUTBOXDUI_728334\' #if (item) {# checked #}else{# unchecked #} # />";
    }
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: DocumentPrinting
  task_initData_VC_DOCUMENTPP_352678 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    let commons: any = initDataEventArgs.commons;
    let api: any = initDataEventArgs.commons.api;
    parameters = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;
    /*initDataEventArgs.commons.api.grid.fillFiltersQuery('Q_PRINTICM_3105', {
        mode: 0,
        operation: parameters.parameters.loan.desOperationType
    });*/
    initDataEventArgs.commons.api.vc.mode = 2;
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: DocumentPrinting
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    /*renderEventArgs.commons.api.grid.fillFiltersQuery('Q_PRINTICM_3105', {
        mode: 0,
        operation: parameters.parameters.loan.desOperationType
    });*/
    renderEventArgs.commons.api.grid.refresh('QV_3105_20065');

  };


  //gridRowSelecting QueryView: QV_3105_20065
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_3105_20065 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;

  };


}