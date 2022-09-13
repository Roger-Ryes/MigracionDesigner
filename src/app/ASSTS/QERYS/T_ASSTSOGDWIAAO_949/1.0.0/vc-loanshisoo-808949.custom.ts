import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loanshisoo-808949.model';
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

/* variables locales de T_ASSTSOGDWIAAO_949*/

export class VcLoanshisoo808949Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSOGDWIAAO_949"
  getParams = () => {
    let url: any = "",
      urlParams: any = {};

    if (this.cobis.container.tabs.getCurrentTab()) {
      url = this.cobis.container.tabs.getCurrentTab().url;
    } else {
      url = location.href;
    }

    if (url.split('?').length > 1) {
      url.split('?')[1].split('&').forEach((paramString: any) => {
        urlParams[paramString.split('=')[0]] = paramString.split('=')[1];
      })
    }
    return urlParams;
  }


  // () View: View of LoansHistoricForm
  //Evento changeGroup : Evento change para pestañas, collapsible y accordion.
  task_changeGroup_G_LOANSHIRII_607863 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    //changedGroupEventArgs.commons.serverParameters.entityName = true;

    let nav: any = changedGroupEventArgs.commons.api.navigation;

    //Pantalla: Resumen general del estado del préstamo
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHITIC_293863') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_GENERALINFFHA_866',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_GENERALIAT_927866'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_LOANSHICTI_733863', false);
    }

    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHITIC_293863') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'CMMNS',
        taskId: 'T_AMORTIZATIOON_261',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZAII_339261'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID,
        menu: "1"
      };
      nav.registerView('G_LOANSHICSI_482863', false);
    }

    /*
     * Pantalla: Información general
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHIITO_581863') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_GENERALINAOIT_347',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_GENERALINO_421347'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID,
        menu: '1'
      };
      nav.registerView('G_LOANSHIITO_581863', false);
    }


    /*
     * Pantalla: Rubros y Tasas - QueryItemsLoanForm
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHIOIR_548863') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ITEMSLOANSUXI_712',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_ITEMSLOANN_757712'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_LOANSHIROI_993863', false);
    }

    /*
     * Pantalla: Rubros y Tasas
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHIOIR_548863') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_RATESPTSITVKK_186',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_RATESVLYWT_596186'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_LOANSHITCC_927863', false);

    }

    /*
     * Pantalla: Abonos
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHIITT_988863') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_PAYMENTUTOUGP_714',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_PAYMENTZMN_922714'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_LOANSHIITT_988863', false);

    }


    /*
     * Pantalla: Transacciones
     */

    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHITTO_207863') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSQUQPUYMT_694',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANTRANTC_731694'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_LOANSHITTO_207863', false);
    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoansHistoricForm
  task_initData_VC_LOANSHISOO_808949 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = true;
    let nav: any = initDataEventArgs.commons.api.navigation;
    let api: any = initDataEventArgs.commons.api;
    let parameters: any = this.getParams();
    let apiHeader: any = initDataEventArgs.commons.api.cobisPatterns.header;


    entities.Loan.adjustment = parameters.adjustment;
    entities.Loan.amount = parameters.amount;
    entities.Loan.availableBalance = parameters.availableBalance;
    entities.Loan.categoryGroup = parameters.categoryGroup;
    entities.Loan.clientID = parameters.clientID;
    entities.Loan.clientName = parameters.clientName;
    entities.Loan.codCurrency = parameters.codCurrency;
    entities.Loan.currencyName = parameters.currencyName;
    entities.Loan.customer = parameters.customer;
    entities.Loan.desOperationType = parameters.desOperationType;
    entities.Loan.disbursementDate = new Date(parameters.disbursementDate);
    entities.Loan.expirationDate = new Date(parameters.expirationDate);
    entities.Loan.group = parameters.group;
    entities.Loan.loanBankID = parameters.loanBankID;
    entities.Loan.migratedOper = parameters.migratedOper;
    entities.Loan.numProcedure = parameters.numProcedure;
    entities.Loan.officeID = parameters.officeID;
    entities.Loan.officerID = parameters.officerID;
    entities.Loan.operationNumber = parameters.operationNumber;
    entities.Loan.status = parameters.status;

    apiHeader.visibleSearchOption(false);


    if (entities.Loan.categoryGroup == "INDIVIDUAL") {
      entities.Loan.tipo = "I";
    } else {
      entities.Loan.tipo = "G";
    }
  };


  //Start signature to Callback event to VC_LOANSHISOO_808949
  task_initDataCallback_VC_LOANSHISOO_808949 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    //Pantalla: Resumen general del estado del préstamo
    let nav: any = initDataCallbackEventArgs.commons.api.navigation;

    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'QERYS',
      taskId: 'T_GENERALINFFHA_866',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_GENERALIAT_927866'
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.customDialogParameters = {
      loan: entities.Loan
    };
    nav.registerView('G_LOANSHICTI_733863');

    //Pantalla: Tabla de amortización

    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'CMMNS',
      taskId: 'T_AMORTIZATIOON_261',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_AMORTIZAII_339261'
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.customDialogParameters = {
      loan: entities.Loan,
      operation: entities.Loan.loanBankID,
      menu: '1'
    };
    nav.registerView('G_LOANSHICSI_482863');
  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: LoansHistoricForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;

    //FORMAT DATE
    // TODO
    // entities.Loan.startDate = kendo.toString(entities.Loan.startDate, JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.endDate = kendo.toString(entities.Loan.endDate, JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.feeEndDate = kendo.toString(entities.Loan.feeEndDate, JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.lastProcessDate = kendo.toString(entities.Loan.lastProcessDate, JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    // entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    // entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");
    entities.Loan.startDate = entities.Loan.startDate;
    entities.Loan.endDate = entities.Loan.endDate;
    entities.Loan.feeEndDate = entities.Loan.feeEndDate;
    entities.Loan.lastProcessDate = entities.Loan.lastProcessDate;
    entities.Loan.balanceDue = entities.Loan.balanceDue;
    entities.Loan.amountApproved = entities.Loan.amountApproved;
    entities.Loan.nextPayment = entities.Loan.nextPayment;
  };



}