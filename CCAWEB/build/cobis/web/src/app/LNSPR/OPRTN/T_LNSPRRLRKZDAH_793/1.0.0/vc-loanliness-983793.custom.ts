import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loanliness-983793.model';
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

/* variables locales de LoanLinesCreate*/
let calcular: any;

let mode: any;

export class VcLoanliness983793Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRRLRKZDAH_793"


  // () View: View of LoanLinesCreate
  //Evento changeGroup : Evento change para pestañas, collapsible y accordion.
  task_changeGroup_G_LOANLINECC_258461 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    let nav: any = changedGroupEventArgs.commons.api.navigation;

    if ((changedGroupEventArgs.commons.item.id === 'G_LOANLINSSA_305461') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRXLZJGUMH_556',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANLINENS_928556'
      };
      nav.queryParameters = {
        mode: mode
      };

      nav.registerView('G_LOANLINSSA_305461', false);
    }

    //DISTRIBUCION POR PRODUCTO
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANLINRER_722461') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRSBSNRATX_181',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_PRODUCTLIN_542181'
      };
      nav.queryParameters = {
        mode: mode
      };

      nav.customDialogParameters = {
        lineCode: entities.LoanLinesCreation.lineCode,
        sequential: entities.LoanLinesCreation.sequential,
        nature: entities.LoanLinesCreation.nature
      };
      nav.registerView('G_LOANLINRER_722461');
    }
    //DISTRIBUCION POR MIEMBRO
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANLINACR_870461') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRNBKRHAIB_194',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSDISMM_305194'
      };
      nav.queryParameters = {
        mode: mode
      };
      nav.customDialogParameters = {
        codLinea: changedGroupEventArgs.commons.api.navigation.getCustomDialogParameters().codLinea
      };

      nav.registerView('G_LOANLINACR_870461', false);

    }
    //GARANTIAS DE LA lINEA
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANLINTRE_952461') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRQGEMJIOM_705',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSLINER_641705'
      };
      nav.queryParameters = {
        mode: mode
      };
      nav.customDialogParameters = {
        codLinea: changedGroupEventArgs.commons.api.navigation.getCustomDialogParameters().codLinea
      };

      nav.registerView('G_LOANLINTRE_952461', false);

    }
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoanLinesCreate
  task_initData_VC_LOANLINESS_983793 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert) {
      mode = initDataEventArgs.commons.constants.mode.Insert;
      let nav: any = initDataEventArgs.commons.api.navigation;

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRXLZJGUMH_556',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANLINENS_928556'
      };
      nav.queryParameters = {
        mode: mode
      };

      nav.registerView('G_LOANLINSSA_305461', false);
      initDataEventArgs.commons.execServer = false;
    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update) {
      mode = initDataEventArgs.commons.constants.mode.Update;
      let nav: any = initDataEventArgs.commons.api.navigation;

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRXLZJGUMH_556',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANLINENS_928556'
      };
      nav.queryParameters = {
        mode: mode
      };
      nav.customDialogParameters = {
        secuencial: initDataEventArgs.commons.api.navigation.getCustomDialogParameters().secuencial
      };

      nav.registerView('G_LOANLINSSA_305461', false);
      initDataEventArgs.commons.execServer = true;
    }


  };


  //Start signature to Callback event to VC_LOANLINESS_983793
  task_initDataCallback_VC_LOANLINESS_983793 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    //here your code
    if (initDataCallbackEventArgs.success) {
      if (entities.ValidationGroup.result === 'N') {

        initDataCallbackEventArgs.commons.api.vc.viewState.G_LOANLINACR_870461.visible = false;

      }
    }
  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: LoanLinesCreate
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    if (renderEventArgs.commons.api.vc.mode == renderEventArgs.commons.constants.mode.Insert) {
      renderEventArgs.commons.api.viewState.hide('G_LOANLINRER_722461');
      renderEventArgs.commons.api.viewState.hide('G_LOANLINACR_870461');
      renderEventArgs.commons.api.viewState.hide('G_LOANLINTRE_952461');
    }

  };



}