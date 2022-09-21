import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-restructeg-166525.model';
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

/* variables locales de T_ASSTSCNYHAQPM_525*/
let openConfirmation: any = true;

let params: any = null;

export class VcRestructeg166525Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSCNYHAQPM_525"


  // () View: View of RestructuringDetail
  //Evento changeGroup : Evento change para pestañas, collapsible y accordion.
  task_changeGroup_G_RESTRUCTID_433261 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;
    let nav: any = changedGroupEventArgs.commons.api.navigation;
    let params: any = nav.getCustomDialogParameters();

    //RUBROS
    if ((changedGroupEventArgs.commons.item.id === 'G_RESTRUCURN_482261') && (changedGroupEventArgs.commons.item.isOpen === true)) {
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
        operation: params.operation,
        money: params.currency,
        typeOperation: params.type
      };
      nav.registerView('G_RESTRUCURN_482261');
    }


    //PARAMETROS GENERALES
    if ((changedGroupEventArgs.commons.item.id === 'G_RESTRUCLRN_492261') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRKEGMFGIE_785',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_OPERATIONN_207785'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        operation: params.operation,
        money: params.currency
      };
      nav.registerView('G_RESTRUCLRN_492261');
    }

    //AMORTIZACION
    if ((changedGroupEventArgs.commons.item.id === 'G_RESTRUCTIA_581261') && (changedGroupEventArgs.commons.item.isOpen === true)) {
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
        operation: params.operation,
        typeOperation: params.type,
        amount: params.amount
      };
      nav.registerView('G_RESTRUCTIA_581261');
    }
  };





  // (Button) 
  task_executeCommand_CM_TASSTSCN_5TN = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

  };

  //Start signature to Callback event to CM_TASSTSCN_5TN
  task_executeCommandCallback_CM_TASSTSCN_5TN = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, this.ASSTS.timer);


      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TASSTSCN_5TN');
      openConfirmation = false;
    }
  };


  // (Button) 
  task_executeCommand_CM_TASSTSCN_T8S = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    if (openConfirmation) {
      let nav: any = executeCommandEventArgs.commons.api.navigation;
      nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_INACINMEZ_95635');
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_ASSTSEGPPJJUA_289',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_RESTRUCTRR_543289'
      };

      nav.queryParameters = {
        mode: 8
      };
      nav.modalProperties = {
        size: 'sm',
        callFromGrid: false
      };
      nav.customDialogParameters = {
        operation: params.operation

      };

      //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
      nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
      //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
      //nav.openModalWindow(id, args.modelRow);
    } else {
      executeCommandEventArgs.commons.api.navigation.closeModal({
        response: true
      });
    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: RestructuringDetail
  task_initData_VC_RESTRUCTEG_166525 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;

    openConfirmation = true;



  };


  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: RestructuringDetail
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "VC_RESTRUCTRR_543289") {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.dialogCloseType == 0 && onCloseModalEventArgs.result.response) {
        onCloseModalEventArgs.commons.api.navigation.closeModal({
          response: false
        });
      }
    }

  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: RestructuringDetail
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let nav: any = renderEventArgs.commons.api.navigation;
    params = nav.getCustomDialogParameters();
    // TODO - REFACTORIZAR
    // $("button.close").hide();
    //RUBROS
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
      operation: params.operation,
      money: params.currency,
      typeOperation: params.type
    };
    nav.registerView('G_RESTRUCURN_482261');
  };



}