import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-testbkyolo-973756.model';
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

/* variables locales de T_TESTWKHELVLBD_756*/

export class VcTestbkyolo973756Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_TESTWKHELVLBD_756"

  //Entity: OtherCharges
  //OtherCharges.value (TextInputBox) View: ProjectOtherCharges
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_2011UKZSBSFRWRA_245872 = (entities: Model, changeEventArgs: any) => {
    let value: any = entities.OtherCharges.value;
    let valueMax: any = entities.OtherCharges.valueMax;
    let valueMin: any = entities.OtherCharges.valueMin;
    let reference: any = entities.OtherCharges.reference;

    if (!reference) {
      if (value > valueMax) {
        changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11973", false, null, timer);
        return;
      }
      if (value < valueMin) {
        changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11974", false, null, timer);
        return;
      }
    }
    changeEventArgs.commons.execServer = false;
  };

  //Entity: OtherCharges
  //OtherCharges.divUp (TextInputBox) View: ProjectOtherCharges
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DIVUPQPVWWEQDNI_233872 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    let iniDiv: any = entities.OtherCharges.iniDiv;
    let divUp: any = entities.OtherCharges.divUp;
    if (divUp < 0) {
      changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11972", false, null, timer);
      return;
    }
    if (iniDiv < 0) {
      changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11977", false, null, timer);
      return;
    }
    if (iniDiv > divUp) {
      changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11969", false, null, timer);
      return;
    }
  };

  //Entity: OtherCharges
  //OtherCharges.iniDiv (TextInputBox) View: ProjectOtherCharges
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_INIDIVGJKPNKHJF_695872 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    let iniDiv: any = entities.OtherCharges.iniDiv;
    if (iniDiv < 0) {
      changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11977", false, null, timer);
      return;
    }
  };

  //Entity: OtherCharges
  //OtherCharges.concept (ComboBox) View: ProjectOtherCharges
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXUFN_810872 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = true;
    //changeEventArgs.commons.serverParameters.OtherCharges = true;
  };

  //Start signature to callBack event to VA_TEXTINPUTBOXUFN_810872
  task_changeCallback_VA_TEXTINPUTBOXUFN_810872 = (entities: Model, changeEventArgs: any) => {
    let api: any = changeEventArgs.commons.api;
    let balanceOp: any = entities.OtherCharges.balanceOp;
    let balanceDesemp: any = entities.OtherCharges.balanceDesemp;
    let categoryType: any = entities.OtherCharges.categoryType;
    if (categoryType != null) {
      if (categoryType.trim() === 'Q') {
        if (balanceOp.trim() === 'N' && balanceDesemp.trim() === 'N') {
          api.viewState.enable("VA_BASECALCULATONI_509872");
        } else {
          api.viewState.disable("VA_BASECALCULATONI_509872");
        }
      } else {
        api.viewState.disable("VA_BASECALCULATONI_509872");
      }
    } else {
      api.viewState.disable("VA_BASECALCULATONI_509872");
    }
  };

  // (Button) 
  task_executeCommand_CM_TTESTWKH_NN5 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let mode: any = executeCommandEventArgs.commons.api.vc.mode;
    let concept: any = entities.OtherCharges.concept;
    let iniDiv: any = entities.OtherCharges.iniDiv;
    let divUp: any = entities.OtherCharges.divUp;
    let commentary: any = entities.OtherCharges.commentary;
    let value: any = entities.OtherCharges.value;
    let reference: any = entities.OtherCharges.reference;
    let valueMax: any = entities.OtherCharges.valueMax;
    let valueMin: any = entities.OtherCharges.valueMin;
    executeCommandEventArgs.commons.execServer = false;
    if ((iniDiv < 0) || iniDiv > 32767) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11968", false, null, timer);
      return;
    }
    if ((divUp < 0) || divUp > 32767) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11968", false, null, timer);
      return;
    }
    if (iniDiv > divUp) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11969", false, null, timer);
      return;
    }
    if (iniDiv > divUp) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11969", false, null, timer);
      return;
    }
    if (value < 0) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11978", false, null, timer);
      return;
    }
    if (reference != null) {
      if (value > valueMax) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11973", false, null, timer);
        return;
      }
      if (value < valueMin) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11974", false, null, timer);
        return;
      }
    }
    if (mode === 1) {
      //if (concept.trim() === ''){
      //   executeCommandEventArgs.commons.messageHandler.showMessagesError("ASSTS.MSG_ASSTS_SEDEBERZE_11970",true); 
      //   return;
      //}            
      //if (commentary.trim() === ''){
      //   executeCommandEventArgs.commons.messageHandler.showMessagesError("ASSTS.MSG_ASSTS_SEDEBERZE_11971",true); 
      //   return;
      //}           
      //executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11979", true);
    }

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };

  //Start signature to Callback event to CM_TTESTWKH_NN5
  task_executeCommandCallback_CM_TTESTWKH_NN5 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    let api: any = executeCommandCallbackEventArgs.commons.api;
    let response: any = {};

    if (executeCommandCallbackEventArgs.success) {
      api.vc.closeModal(response);
      if (executeCommandCallbackEventArgs.commons.api.vc.mode == 2) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SEDEBERZE_11967', false, null, timer);
      } else {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_REGISTRAS_48950', false, null, timer);
      }
    }
  };

  // (Button) 
  task_executeCommand_CM_TTESTWKH_T57 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let api: any = executeCommandEventArgs.commons.api;
    let response: any = {};
    api.vc.closeModal(response);
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ProjectOtherCharges
  task_initData_VC_TESTBKYOLO_973756 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    let api: any = initDataEventArgs.commons.api;
    let mode: any = initDataEventArgs.commons.api.vc.mode;
    if (mode === 2) {
      initDataEventArgs.commons.api.navigation.getCustomDialogParameters().entity = initDataEventArgs.commons.api.parentVc?.model.Loan;
      initDataEventArgs.commons.execServer = true;
      api.viewState.disable("VA_TEXTINPUTBOXUFN_810872");
      api.viewState.disable("VA_COMMENTARYRPSHX_258872");
      api.viewState.disable("VA_2011UKZSBSFRWRA_245872");
      api.viewState.disable("VA_BASECALCULATONI_509872");
    } else {
      api.viewState.enable("VA_TEXTINPUTBOXUFN_810872");
      api.viewState.enable("VA_COMMENTARYRPSHX_258872");
      api.viewState.enable("VA_2011UKZSBSFRWRA_245872");
      api.viewState.disable("VA_BASECALCULATONI_509872");
    }
  };

  //Entity: OtherCharges
  //OtherCharges.concept (ComboBox) View: ProjectOtherCharges
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_TEXTINPUTBOXUFN_810872 = (loadCatalogEventArgs: any) => {
    loadCatalogEventArgs.commons.api.navigation.getCustomDialogParameters().entity = loadCatalogEventArgs.commons.api.parentVc?.model.Loan;
    loadCatalogEventArgs.commons.execServer = true;
    //loadCatalogEventArgs.commons.serverParameters.OtherCharges = true;
  };


}