import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-disbursemt-116810.model';
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

/* variables locales de T_DISBURSEMENNN_810*/
let diferencia: any = 0;

export class VcDisbursemt116810Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_DISBURSEMENNN_810"

  //DetailPaymentFormQuery Entity: 
  task_executeQuery_Q_DETAILAP_5973 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.serverParameters.DisbursementResult = true;
    executeQueryEventArgs.commons.serverParameters.Loan = true;
    executeQueryEventArgs.commons.serverParameters.LiquidateResult = true;
    executeQueryEventArgs.commons.execServer = true;

  };


  //Start signature to Callback event to Q_DETAILAP_5973
  task_executeQueryCallback_Q_DETAILAP_5973 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    let totalDesembolso: any = 0;
    if (entities.DetailPaymentForm && entities.DetailPaymentForm.length > 0) {
      for (let i: any = 0; i < entities.DetailPaymentForm.length; i++) {
        totalDesembolso = totalDesembolso + entities.DetailPaymentForm[i].amountOp;
      }
    }

    entities.DisbursementResult.sumTotal = totalDesembolso;
    entities.DisbursementResult.difference = entities.LiquidateResult.sumTotal!-entities.DisbursementResult.sumTotal!;
    diferencia = entities.DisbursementResult.difference;
  };



  //DetailAmountsToCancelQuery Entity: 
  task_executeQuery_Q_DETAILTM_1603 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };

  //gridCommand (Button) QueryView: QV_5973_48889
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_5973_48889_606 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    gridExecuteCommandEventArgs.commons.execServer = false;
    //gridExecuteCommandEventArgs.commons.serverParameters.DetailPaymentForm = true;
    //Open Modal


    if (entities.LoanAdditionalInformation.dateToDisburse === undefined) {
      gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_INGRESEHA_96071', false, null, this.ASSTS.timer);
      return;
    }

    entities.LoanAdditionalInformation.amountToCancel = entities.Loan.amount;


    let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;
    if (entities.LiquidateResult.sumTotal! > entities.DisbursementResult.sumTotal!) {
      nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_APAGOKXFB_84081'); //Forma de Pago
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_PAYMENTMODEEE_368',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_PAYMENTMDE_245368'
      };
      nav.queryParameters = {
        mode: 1
      };
      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };

      nav.customDialogParameters = {
        operationTypeId: entities.Loan.operationTypeID,
        codCurrency: entities.Loan.codCurrency,
        dateToDisburse: entities.LoanAdditionalInformation.dateToDisburse,
        loanAddInf: entities.LoanAdditionalInformation,
        difference: entities.DisbursementResult.difference,
        loanBankID: entities.Loan.loanBankID,
        loan: entities.Loan
      };
      nav.openModalWindow("CEQV_201QV_5973_48889_606", gridExecuteCommandEventArgs);
    } else {
      gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELDESEMST_32467', false, null, this.ASSTS.timer);
    }
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: DisbursementForm
  task_initData_VC_DISBURSEMT_116810 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan;
    entities.LoanAdditionalInformation.currencyOp = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan.codCurrency;

    initDataEventArgs.commons.api.viewState.disable('G_DISBURSEET_626405');

    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
  };

  //Start signature to Callback event to VC_DISBURSEMT_116810
  task_initDataCallback_VC_DISBURSEMT_116810 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    let processDate = this.cobis.container.info.getProcessDate();
    //se asume fecha de proceso MM/dd/yyyy caso contrario falla
    let parts: any = processDate.split('/');
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    entities.LoanAdditionalInformation.dateToDisburse = new Date(parts[2], parts[0] - 1, parts[1]);

    // TODO
    // entities.LoanAdditionalInformation.dateToDisburse = kendo.toString(entities.LoanAdditionalInformation.dateToDisburse, JSON.parse(sessionStorage.dateFormat));
    entities.LoanAdditionalInformation.dateToDisburse = entities.LoanAdditionalInformation.dateToDisburse;

    if (initDataCallbackEventArgs.success) {
      let totalDesembolso: any = 0;
      if (entities.DetailPaymentForm.length > 0) {
        for (let i: any = 0; i < entities.DetailPaymentForm.length; i++) {
          totalDesembolso = totalDesembolso + entities.DetailPaymentForm[i].amountOp;
        }
      }

      entities.DisbursementResult.sumTotal = totalDesembolso;
      entities.DisbursementResult.difference = entities.LiquidateResult.sumTotal!-entities.DisbursementResult.sumTotal!;
      diferencia = entities.DisbursementResult.difference;
    }
  };




  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: DisbursementForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;
    //onCloseModalEventArgs.commons.serverParameters.entityName = true;

    onCloseModalEventArgs.commons.api.grid.refresh('QV_5973_48889');

  };

  //gridRowDeleting QueryView: QV_5973_48889
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_5973_48889 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    if (gridRowDeletingEventArgs.commons.api.parentVc && gridRowDeletingEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {
      if (gridRowDeletingEventArgs.commons.api.parentVc?.viewState.CM_TASSTSEF_N17.disabled == false) {
        gridRowDeletingEventArgs.commons.execServer = true;
      } else {
        gridRowDeletingEventArgs.commons.execServer = false;
        gridRowDeletingEventArgs.cancel = true;
      }
    } else {
      if (gridRowDeletingEventArgs.commons.api.vc.viewState.CM_TLOANDIS_S5N.disabled == false) {
        gridRowDeletingEventArgs.commons.execServer = true;
      } else {
        gridRowDeletingEventArgs.commons.execServer = false;
        gridRowDeletingEventArgs.cancel = true;
      }
    }

  };

  //Start signature to callBack event to QV_5973_48889
  task_gridRowDeletingCallback_QV_5973_48889 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {

    if (gridRowDeletingEventArgs.success && gridRowDeletingEventArgs.commons.api.parentVc && gridRowDeletingEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {
      diferencia = entities.DisbursementResult.difference;
    }
  };

  //gridRowSelecting QueryView: QV_5973_48889
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_5973_48889 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;

    //gridRowSelectingEventArgs.commons.serverParameters.DetailPaymentForm = true;
  };


}