import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-operationn-207785.model';
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

/* variables locales de T_LNSPRKEGMFGIE_785*/

export class VcOperationn207785Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRKEGMFGIE_785"




  //Entity: GeneralParametersQuery
  //GeneralParametersQuery.benefitInterestRate (CheckBox) View: OperationGeneralParametersForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_4223IMHHOSVYCXY_300309 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;
    let baseRate: any = entities.GeneralParametersQuery.benefitBaseRate;

    if (changedEventArgs.newValue == 'S') {
      viewState.enable('VA_9193TCVDUUBRZAN_137309');
      if (!baseRate) {
        entities.GeneralParametersQuery.benefitBaseRate = 'A';
      }
    } else {
      entities.GeneralParametersQuery.benefitBaseRate = null;
      viewState.disable('VA_9193TCVDUUBRZAN_137309');
    }
  };

  //Entity: GeneralParametersQuery
  //GeneralParametersQuery.paymentMethod (DropDownList) View: OperationLoansGeneralParametersForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMENTMETHODDD_220309 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = true;
    let viewState: any = changedEventArgs.commons.api.viewState;

    //if (entities.GeneralParametersQuery && viewState.getDataItem("VA_PAYMENTMETHODDD_220309")){
    let category: any = null;

    if (
      viewState.getDataItem("VA_PAYMENTMETHODDD_220309").categoria
    ) {
      category = viewState.getDataItem("VA_PAYMENTMETHODDD_220309").categoria;
      entities.GeneralParametersQuery.paymentCategory = category
    } else {
      category = entities.GeneralParametersQuery.paymentCategory
    }

    if (category == 'NDAH' || category == 'PLANO') {
      viewState.show('VA_VABUTTONOHXRHAO_106309');
    } else {
      viewState.hide('VA_VABUTTONOHXRHAO_106309');
    }

    /*  } else {
        viewState.hide('VA_VABUTTONOHXRHAO_106309');//button establecer
        entities.GeneralParametersQuery.account = null;
      }*/
  };


  //Start signature to Callback event to VA_PAYMENTMETHODDD_220309
  task_changeCallback_VA_PAYMENTMETHODDD_220309 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };


  //Entity: GeneralParametersQuery
  //GeneralParametersQuery.readjustable (RadioButtonList) View: OperationGeneralParametersForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_READJUSTABLELXP_279309 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'N') {
      changedEventArgs.commons.api.viewState.disable('VA_PERIODICITYEHNN_689309');
      entities.GeneralParametersQuery.periodicity = null;
    } else {
      changedEventArgs.commons.api.viewState.enable('VA_PERIODICITYEHNN_689309');
      //entities.GeneralParametersQuery.periodicity=3;
    }
  };




  // (Button) 
  task_executeCommand_VA_VABUTTONFIRPTAQ_308309 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters. = true;

  };

  //Start signature to Callback event to VA_VABUTTONFIRPTAQ_308309
  task_executeCommandCallback_VA_VABUTTONFIRPTAQ_308309 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRVJ_776');
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACICA_42329', false, null, timer);
    }
  };


  //Entity: GeneralParametersQuery
  //GeneralParametersQuery. (Button) View: OperationGeneralParametersForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VABUTTONOHXRHAO_106309 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let paymentCategory: any = executeCommandEventArgs.commons.api.viewState.getDataItem("VA_PAYMENTMETHODDD_220309").categoria;
    if (paymentCategory == 'NDAH' || paymentCategory == 'PLANO') {
      //open modal
      let nav: any = executeCommandEventArgs.commons.api.navigation;

      nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_DETALLELG_12706');
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRACJAQDUP_527',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_REPAYMENTT_461527'
      };

      nav.queryParameters = {
        mode: 1
      };
      nav.modalProperties = {
        size: 'md'
      };
      nav.customDialogParameters = {
        banco: entities.OperationEntity.operation,
        paymentMethod: entities.GeneralParametersQuery.paymentMethod,
        paymentCategory: paymentCategory
      };
      nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    }
  };

  //FormaPagoQuery Entity: FormaPago
  task_executeQuery_Q_APAGOOOO_YV30 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.currency = executeQueryEventArgs.commons.api.vc.model.OperationEntity.money;
    executeQueryEventArgs.parameters.opType = executeQueryEventArgs.commons.api.vc.model.OperationEntity.typeOperation;
    /* if (executeQueryEventArgs.parameters.currency == 0) {
        executeQueryEventArgs.commons.execServer = true;
    } else {
        executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.currency ? true : false;
     }*/
    //executeQueryEventArgs.commons.serverParameters.FormaPago = true; 

    executeQueryEventArgs.commons.execServer = (executeQueryEventArgs.parameters.currency == 0 || executeQueryEventArgs.parameters.currency) ? true : false;
  };



  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: OperationGeneralParametersForm
  task_initData_VC_OPERATIONN_207785 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    //initDataEventArgs.commons.serverParameters.entityName = true;
    if (initDataEventArgs.commons.api.parentVc?.id == 'VC_RESTRUCTEG_166525') {
      let nav: any = initDataEventArgs.commons.api.navigation;

      entities.OperationEntity.operation = nav.getCustomDialogParameters().operation;
      entities.OperationEntity.money = nav.getCustomDialogParameters().money;
      entities.AmortizationFormEntity.numOperation = nav.getCustomDialogParameters().operation;

      initDataEventArgs.commons.execServer = true;
    } else {
      initDataEventArgs.commons.execServer = false;
    }
  };

  //Start signature to Callback event to VC_OPERATIONN_207785
  task_initDataCallback_VC_OPERATIONN_207785 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    let viewState: any = initDataCallbackEventArgs.commons.api.viewState;
    let parentVc: any = initDataCallbackEventArgs.commons.api.parentVc;
    let typeAggregate: any = entities.GeneralParametersQuery.aggregate;

    if (entities.GeneralParametersQuery.readjustable == 'N') {
      initDataCallbackEventArgs.commons.api.viewState.disable('VA_PERIODICITYEHNN_689309');
      entities.GeneralParametersQuery.periodicity = null;
    }

    //ocultar si es AGREGADA y en reestructura
    if (typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525') {
      viewState.disable('VA_READJUSTABLELXP_279309'); //Reajustable 
      viewState.disable('VA_PERIODICITYEHNN_689309'); //Periodo Reajuste
      viewState.disable('VA_INTERESTPAYMNNE_508309'); //Pago interes
      viewState.disable('VA_KINDPAYMENTDUCW_586309'); //Tipo Pago
      viewState.disable('VA_4223IMHHOSVYCXY_300309'); //Beneficio tasa interes 
      viewState.disable('VA_9193TCVDUUBRZAN_137309'); //Tasa base para beneficio
    }
  };




  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: OperationGeneralParametersForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        entities.GeneralParametersQuery.paymentAccount = onCloseModalEventArgs.result.response.code;
      }
    }

  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: OperationGeneralParametersForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let viewState: any = renderEventArgs.commons.api.viewState;

    if (entities.GeneralParametersQuery) {
      entities.GeneralParametersQuery.paymentMethod = entities.GeneralParametersQuery.wayPayment
      if (
        entities.GeneralParametersQuery.paymentCategory == 'NDAH' ||
        entities.GeneralParametersQuery.paymentCategory == 'PLANO'
      ) {
        viewState.show('VA_VABUTTONOHXRHAO_106309');
      } else {
        viewState.hide('VA_VABUTTONOHXRHAO_106309');
      }
    } else {
      viewState.hide('VA_VABUTTONOHXRHAO_106309'); //button establecer
      entities.GeneralParametersQuery.account = null;
    }
  };


}