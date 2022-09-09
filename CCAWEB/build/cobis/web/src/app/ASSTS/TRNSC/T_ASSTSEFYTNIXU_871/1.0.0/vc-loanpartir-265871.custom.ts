import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loanpartir-265871.model';
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

/* variables locales de T_ASSTSEFYTNIXU_871*/
let valorAprobado: any = 0;

let tmpGridAmortization: any = null;
let flagCreate: any = false;
let fechaCreacion: any = null;
let codOperacion: any = null;
let valorOperacion: any = 0;
let diferencia: any = 0;

export class VcLoanpartir265871Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSEFYTNIXU_871"


  // () View: View of LoanPartialDisbursement
  //Evento changeGroup : Evento change para pestañas, collapsible y accordion.
  task_changeGroup_G_LOANPARSTB_361369 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    //changedGroupEventArgs.commons.serverParameters.entityName = true;


    let nav: any = changedGroupEventArgs.commons.api.navigation;

    let params: any = nav.getCustomDialogParameters();

    //INFORMACION GENERAL
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANPARBTT_780369') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRSHDBNXGH_268',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSOPETN_404268'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_LOANPARBTT_780369');
    }

    //RUBROS
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANPARNET_643369') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRHWGYLNWJ_330',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_OPERATIOEE_354330'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        operation: entities.Loan.loanBankID,
        money: entities.Loan.codCurrency,
        typeOperation: entities.Loan.operationTypeID,
        desempar: 'S'
      };
      nav.registerView('G_LOANPARNET_643369');
    }

    //AMORTIZACION
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANPARNSB_185369') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRGNPCEXYE_633',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_OPERATIOPA_648633'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        operation: entities.Loan.loanBankID,
        amount: entities.Loan.amount,
        typeOperation: entities.Loan.operationTypeID
      };
      nav.registerView('G_LOANPARNSB_185369', false);
    }

    //DESEMBOLSO 

    if ((changedGroupEventArgs.commons.item.id === 'G_LOANPARTDT_335369') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_DISBURSEMENNN_810',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_DISBURSEMT_116810'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_LOANPARTDT_335369');
    }
  };


  // (Button) 
  task_executeCommand_CM_TASSTSEF_N17 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    if (diferencia != 0) {
      executeCommandEventArgs.commons.execServer = false;
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ERRORELDR_83907', false, null, timer);
    } else {
      executeCommandEventArgs.commons.execServer = true;
    }

    //executeCommandEventArgs.commons.serverParameters.entityName = true;

  };


  //Start signature to Callback event to CM_TASSTSEF_N17
  task_executeCommandCallback_CM_TASSTSEF_N17 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, timer);

      executeCommandCallbackEventArgs.commons.api.viewState.selectLayout("G_LOANPARSTB_361369", "G_LOANPARBTT_780369");


      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TASSTSEF_N17');
      executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANPARNSB_185369');
      executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANPARNET_643369');
      executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANPARTDT_335369');


    }
  };


  //Evento initData : InicializaciÃ³n de datos del formulario, despuÃ©s de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoanPartialDisbursement

  task_initData_VC_LOANPARTIR_265871 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let nav: any = initDataEventArgs.commons.api.navigation;
    let params: any = nav.getCustomDialogParameters();

    entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().parameters.loan;
    //INFORMACION GENERAL
    nav.address = {
      moduleId: 'LNSPR',
      subModuleId: 'OPRTN',
      taskId: 'T_LNSPRSHDBNXGH_268',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_LOANSOPETN_404268'
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.customDialogParameters = {
      operation: initDataEventArgs.commons.api.navigation.getCustomDialogParameters().parameters.loan.loanBankID
    };
    nav.registerView('G_LOANPARBTT_780369');

    initDataEventArgs.commons.execServer = true;
  };


  //Start signature to Callback event to VC_LOANPARTIR_265871
  task_initDataCallback_VC_LOANPARTIR_265871 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    if (initDataCallbackEventArgs.success) {
      initDataCallbackEventArgs.commons.api.viewState.show('CM_TASSTSEF_N17');
      initDataCallbackEventArgs.commons.api.viewState.show('G_LOANPARNSB_185369');
      initDataCallbackEventArgs.commons.api.viewState.show('G_LOANPARNET_643369');
      initDataCallbackEventArgs.commons.api.viewState.show('G_LOANPARTDT_335369');
    } else {
      initDataCallbackEventArgs.commons.api.viewState.hide('CM_TASSTSEF_N17');
      initDataCallbackEventArgs.commons.api.viewState.hide('G_LOANPARNSB_185369');
      initDataCallbackEventArgs.commons.api.viewState.hide('G_LOANPARNET_643369');
      initDataCallbackEventArgs.commons.api.viewState.hide('G_LOANPARTDT_335369');
    }
  };



}