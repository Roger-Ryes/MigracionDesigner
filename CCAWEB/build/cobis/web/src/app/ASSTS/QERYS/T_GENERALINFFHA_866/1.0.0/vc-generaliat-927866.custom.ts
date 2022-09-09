import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-generaliat-927866.model';
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

/* variables locales de T_GENERALINFFHA_866*/

export class VcGeneraliat927866Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_GENERALINFFHA_866"
  loadChart = (entities: Model, args: any) => {
    // TODO
    // angular.forEach(entities.SummaryLoanStatus, (loanStatus: any) => {
    //     loanStatus.statusAmortization = args.commons.api.viewState.translate(loanStatus.statusAmortization).toUpperCase();
    // });

    let nav: any = args.commons.api.navigation;
    nav.customAddress = {
      id: "ASSTS",
      url: "/ASSTS/QERYS/CHARTS/views/leftChart.html",
      useMinification: false
    };
    //CALL TO CONTROLLER
    nav.scripts = [{
      module: "ASSTS",
      files: ["/ASSTS/QERYS/CHARTS/controllers/LeftChartCtrl.js"]
    }];
    nav.registerCustomView('G_GENERALILC_131344');
  }

  //SummaryLoanStatusQuery Entity: 
  task_executeQuery_Q_SUMMARST_6100 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
      executeQueryEventArgs.parameters.historico = 'S';
    }

    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };

  //Start signature to Callback event to Q_SUMMARST_6100
  task_executeQueryCallback_Q_SUMMARST_6100 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
    let consolidated: any = [];

    executeQueryCallbackEventArgs.commons.api.navigation.close("ASSTS")
    let nav: any = executeQueryCallbackEventArgs.commons.api.navigation;
    if (entities.SummaryLoanStatus && entities.SummaryLoanStatus) {
      for (let i: any = 0; i < entities.SummaryLoanStatus.length - 1; i++) {
        consolidated[i] = entities.SummaryLoanStatus[i];
      }
    }
    entities.ConsolidatedLoanStatus = consolidated;

    if (entities.SummaryLoanStatus.length > 0) {
      nav.label = "";
      nav.customAddress = {
        id: "ASSTS",
        url: "ASSTS/QERYS/CHARTS/views/LoansDetail.html"
      };

      nav.scripts = [{
        module: "ASSTS",
        files: ["ASSTS/QERYS/CHARTS/controllers/LoansDetail.js"]
      }];

      nav.customDialogParameters = {
        entityList: entities.SummaryLoanStatus
      };

      nav.registerCustomView('G_GENERALILC_131344');
    }
  };



}