import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-syndicatdi-660858.model';
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

/* variables locales de T_LNSPRSCSIDSOD_858*/

export class VcSyndicatdi660858Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRSCSIDSOD_858"


  //Entity: OperationEntity
  //OperationEntity.amountParticipants (TextInputBox) View: SyndicatedListForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AMOUNTPARTICTSP_895405 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (entities.OperationEntity.amount >= entities.OperationEntity.amountParticipants) {
      entities.OperationEntity.percentageParticipants = (entities.OperationEntity.amountParticipants * 100) / entities.OperationEntity.amount

    } else {
      changedEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ELVALOREP_52967", false, null, timer);
    }

    changedEventArgs.commons.execServer = false;

  };


  //Entity: OperationEntity
  //OperationEntity.mail (TextInputBox) View: SyndicatedListForm
  task_customValidate_VA_MAILHXHVMKQUYBR_360405 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {
    let validationValue: any = entities.OperationEntity.mail;

    if (validationValue && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(validationValue))) {
      customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_INGRESERI_87890";
      customValidateEventArgs.isValid = false;
    } else {
      customValidateEventArgs.isValid = true;
    }
    customValidateEventArgs.commons.execServer = false;
  };


  // (Button) 
  task_executeCommand_CM_TLNSPRSC_7TC = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    // Validación de porcentaje total
    let porcentajeTotal: any = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().gridPercentajeTotal;

    // let listBank= executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().validationAdministrator;

    if (entities.OperationEntity.selectedParticipants) {
      if ((porcentajeTotal + entities.OperationEntity.percentageParticipants) <= 100) {
        let response: any = await firstValueFrom(
          executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTASEGUE_94560")
        );

        switch (response.buttonIndex) {
          case 0: //cancel
            executeCommandEventArgs.commons.execServer = false;
            break;
          case 1: //accept
            executeCommandEventArgs.commons.execServer = true;
            return true;
            break;
        }
      } else {
        executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOEXCEDER_58370", false, null, timer);
      }
    } else {
      executeCommandEventArgs.commons.execServer = false;
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_PARTICIIA_96996", false, null, timer);
    }
  };


  //Start signature to Callback event to CM_TLNSPRSC_7TC
  task_executeCommandCallback_CM_TLNSPRSC_7TC = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {

    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: SyndicatedListForm
  task_initData_VC_SYNDICATDI_660858 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    entities.OperationEntity.amount = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().amount;
    entities.OperationEntity.typeSyndicated = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().typeSindicated;

    if (initDataEventArgs.commons.api.navigation.getCustomDialogParameters().typeSindicated == 'G') {
      entities.OperationEntity.amountParticipants = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().amount;
      entities.OperationEntity.percentageParticipants = 100;
      entities.OperationEntity.typeParticipants = 'P';
      initDataEventArgs.commons.api.viewState.disable('VA_AMOUNTPARTICTSP_895405');
      initDataEventArgs.commons.api.viewState.disable('VA_PERCENTAGEPAISA_378405');
      initDataEventArgs.commons.api.viewState.disable('VA_AMOUNTNHJBKJSFP_420405');
      initDataEventArgs.commons.api.viewState.disable('VA_PERCENTAGEPAISA_378405');
      initDataEventArgs.commons.api.viewState.disable('VA_TYPEPARTICIPNNN_397405');

    } else {
      initDataEventArgs.commons.api.viewState.enable('VA_AMOUNTPARTICTSP_895405');
      initDataEventArgs.commons.api.viewState.enable('VA_PERCENTAGEPAISA_378405');
      initDataEventArgs.commons.api.viewState.disable('VA_AMOUNTNHJBKJSFP_420405');
      initDataEventArgs.commons.api.viewState.disable('VA_PERCENTAGEPAISA_378405');
    }

    initDataEventArgs.commons.execServer = true;

  };


  //Start signature to Callback event to VC_SYNDICATDI_660858
  task_initDataCallback_VC_SYNDICATDI_660858 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    let parameters: any = initDataCallbackEventArgs.commons.api.navigation.getCustomDialogParameters();
    document.getElementById('VA_PARTICIPANTSTOP_981405').readOnly = true


    if (initDataCallbackEventArgs.commons.api.navigation.getCustomDialogParameters().typeSindicated == 'G') {
      entities.OperationEntity.participantS = entities.OperationEntity.codBank + "      " + entities.OperationEntity.nameBank;
      entities.OperationEntity.selectedParticipants = entities.OperationEntity.codBank;

    }


    if (parameters.gridPercentajeTotal === 100) {
      entities.OperationEntity.amountParticipants = 0;
      entities.OperationEntity.percentageParticipants = 0;
    }
  };


  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: SyndicatedListForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;
    entities.OperationEntity.participantS = onCloseModalEventArgs.result.result.participanteSindicado + "   " + onCloseModalEventArgs.result.result.nombreParticipante;
    entities.OperationEntity.selectedParticipants = onCloseModalEventArgs.result.result.participanteSindicado;



  };


  //Entity: OperationEntity
  //OperationEntity.participantS (TextInputButton) View: SyndicatedListForm
  task_textInputButtonEvent_VA_PARTICIPANTSTOP_981405 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.label = 'LNSPR.LBL_LNSPR_PARTICIPE_28143';
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'MNTNN',
      taskId: 'T_ASSTSUFGAMLTW_237',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_FUNDWJCLLL_877237'
    };

    nav.queryParameters = {
      mode: 8
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };



    //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
    // nav.openModalWindow(textInputButtonEventArgs.commons.controlId, null);
    //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    //nav.openModalWindow(id, args.modelRow);
    textInputButtonEventArgs.commons.execServer = false;
  };



}