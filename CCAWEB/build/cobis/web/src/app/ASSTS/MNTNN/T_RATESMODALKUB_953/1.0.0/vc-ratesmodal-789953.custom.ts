import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-ratesmodal-789953.model';
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

/* variables locales de T_RATESMODALKUB_953*/

export class VcRatesmodal789953Custom extends CobisDesignerCustomEvent {

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

  portfolioClassAux: any = "";


  mode: any;


  closeModal: any = false;


  calculateTotal: any = (indicator: any, rate: any, eventArgs: any) => {
    //indicator especifica campos a calcular

    if (rate.valueDeafult == null)
      rate.valueDeafult = 0;
    if (rate.valueMin == null)
      rate.valueMin = 0;
    if (rate.valueMax == null)
      rate.valueMax = 0;
    if (rate.lockedDefault == null)
      rate.lockedDefault = 0;
    if (rate.lockedMin == null)
      rate.lockedMin = 0;
    if (rate.lockedMax == null)
      rate.lockedMax = 0;
    if (rate.value == null)
      rate.value = 0;

    if (indicator == 0 || indicator == 1) {
      switch (rate.signDefault) {
        case "+":
          rate.lockedDefault = rate.value + rate.valueDeafult;
          break;
        case "-":
          rate.lockedDefault = rate.value - rate.valueDeafult;
          break;
        case "*":
          rate.lockedDefault = rate.value * rate.valueDeafult;
          break;
        case "/":
          rate.lockedDefault = rate.value / rate.valueDeafult;
          break;
      }
    }

    if (indicator == 0 || indicator == 2) {
      switch (rate.signMin) {
        case "+":
          rate.lockedMin = rate.value + rate.valueMin;
          break;
        case "-":
          if (rate.value - rate.valueMin < 0) {
            eventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_MNIMODERI_76453", false, null, timer);
            rate.valueMin = 0;
          } else {
            rate.lockedMin = rate.value - rate.valueMin;
          }
          break;
        case "*":
          rate.lockedMin = rate.value * rate.valueMin;
          break;
        case "/":
          rate.lockedMin = rate.value / rate.valueMin;
          break;
      }
    }

    if (indicator == 0 || indicator == 3) {
      switch (rate.signMax) {
        case "+":
          rate.lockedMax = rate.value + rate.valueMax;
          break;
        case "-":
          if (rate.value - rate.valueMax < 0) {
            eventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_MXIMODERL_75830", false, null, timer);
            rate.valueMax = 0;
          } else {
            rate.lockedMax = rate.value - rate.valueMax;
          }
          break;
        case "*":
          rate.lockedMax = rate.value * rate.valueMax;
          break;
        case "/":
          rate.lockedMax = rate.value / rate.valueMax;
          break;
      }
    }

    //valida si el tipo de tasa es valor o factor
    if (rate.clase === 'V') {
      rate.lockedDefault = 0;
    }
  };





  //Entity: Rates
  //Rates.referenceValue (DropDownList) View: RatesModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_REFERENCEVALEEE_875778 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.Rates = true;

  };


  //Start signature to Callback event to VA_REFERENCEVALEEE_875778
  task_changeCallback_VA_REFERENCEVALEEE_875778 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };


  //Entity: Rates
  //Rates.signMax (ComboBox) View: RatesModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SIGNMAXCQWMGYQB_195778 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    this.calculateTotal(3, entities.Rates, changeEventArgs);

  };

  //Entity: Rates
  //Rates.signMin (ComboBox) View: RatesModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SIGNMINKUSGFZGN_277778 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    this.calculateTotal(2, entities.Rates, changeEventArgs);

  };

  //Entity: Rates
  //Rates.signDefault (ComboBox) View: RatesModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SIGNMINPDDMQZST_831778 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    this.calculateTotal(1, entities.Rates, changeEventArgs);

  };

  //Entity: Rates
  //Rates.valueDeafult (TextInputBox) View: RatesModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_VALUEDEAFULTCGE_547778 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    this.calculateTotal(1, entities.Rates, changeEventArgs);

  };

  //Entity: Rates
  //Rates.valueMax (TextInputBox) View: RatesModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_VALUEMAXAXNIZZF_909778 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    this.calculateTotal(3, entities.Rates, changeEventArgs);

  };

  //Entity: Rates
  //Rates.valueMin (TextInputBox) View: RatesModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_VALUEMINGCHKTLJ_996778 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    this.calculateTotal(2, entities.Rates, changeEventArgs);

  };

  // (Button) 
  task_executeCommand_CM_TRATESMO_AUS = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let cancelButton: any = false;
    executeCommandEventArgs.commons.api.navigation.closeModal(cancelButton);
  };

  // (Button) 
  task_executeCommand_CM_TRATESMO_TU_ = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;

    if (entities.Rates.clase == 'F') {
      if (entities.Rates.referenceValue == '') {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBEIEI_21995", false, null, timer);
        executeCommandEventArgs.commons.execServer = false;
        return;
      }
      if (entities.Rates.typePoints == '') {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_DEBESELNT_56184", false, null, timer);
        executeCommandEventArgs.commons.execServer = false;
        return;
      }

      if (entities.Rates.signDefault == '' || entities.Rates.signMin == '' || entities.Rates.signMax == '') {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBENST_55237", false, null, timer);
        executeCommandEventArgs.commons.execServer = false;
        return;
      }
    }

    if (entities.Rates.lockedMin > entities.Rates.lockedMax) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_VALORMNIA_88442", false, null, timer);
      executeCommandEventArgs.commons.execServer = false;
      return;
    }
    if (entities.Rates.lockedDefault < entities.Rates.lockedMin || entities.Rates.lockedDefault > entities.Rates.lockedMax) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_VALORESDA_30202", false, null, timer);
      executeCommandEventArgs.commons.execServer = false;
      return;
    }
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };

  //Start signature to callBack event to CM_TRATESMO_TU_
  task_executeCommandCallback_CM_TRATESMO_TU_ = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    //here your code
    if (executeCommandEventArgs.success) {
      let aceptButton: any = true;
      executeCommandEventArgs.commons.api.navigation.closeModal(aceptButton);
      if (executeCommandEventArgs.commons.api.vc.mode == executeCommandEventArgs.commons.constants.mode.Update) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAO_10733", false, null, timer);
      } else {

        if (entities.Entity1.modeOp == 'U') {
          executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELREGISSD_75841", false, null, timer);
        } else {
          executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAS_48950", false, null, timer);
        }


      }
    }

  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: RatesModal
  task_initData_VC_RATESMODAL_789953 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    this.mode = initDataEventArgs.commons.api.vc.mode;
    this.closeModal = false;

    if (!entities.Rates.valueDeafult)
      entities.Rates.valueDeafult = 0;
    if (!entities.Rates.valueMin)
      entities.Rates.valueMin = 0;
    if (!entities.Rates.valueMax)
      entities.Rates.valueMax = 0;
    if (!entities.Rates.lockedDefault)
      entities.Rates.lockedDefault = 0;
    if (!entities.Rates.lockedMin)
      entities.Rates.lockedMin = 0;
    if (!entities.Rates.lockedMax)
      entities.Rates.lockedMax = 0;
    if (!entities.Rates.value)
      entities.Rates.value = 0;

    if (this.mode == 1) {
      //Valida que haya seleccionado una tasa en el grid de tasas
      let selectedTypeRate: any = initDataEventArgs.commons.api.grid.getSelectedRows('QV_1722_99596')[0];

      entities.Rates.clase = selectedTypeRate.clase;
      entities.Rates.rateType = selectedTypeRate.identifier;
    } else {
      initDataEventArgs.commons.execServer = true;
    }
    if (entities.Rates.portfolioClass) {
      entities.Rates.portfolioClass = entities.Rates.portfolioClass?.trim();
      this.portfolioClassAux = entities.Rates.portfolioClass;
    }

    if (entities.Rates.clase == 'F') {
      initDataEventArgs.commons.api.viewState.enable("VA_REFERENCEVALEEE_875778");
      initDataEventArgs.commons.api.viewState.enable("VA_TYPEPOINTSQGJRC_416778");
      initDataEventArgs.commons.api.viewState.enable("VA_NUMBERDECIMALSL_248778");
      initDataEventArgs.commons.api.viewState.enable("VA_SIGNMINPDDMQZST_831778");
      initDataEventArgs.commons.api.viewState.enable("VA_SIGNMINKUSGFZGN_277778");
      initDataEventArgs.commons.api.viewState.enable("VA_VALUEMINGCHKTLJ_996778");
      initDataEventArgs.commons.api.viewState.enable("VA_SIGNMAXCQWMGYQB_195778");
      initDataEventArgs.commons.api.viewState.enable("VA_VALUEMAXAXNIZZF_909778");
      initDataEventArgs.commons.api.viewState.focus("VA_PORTFOLIOCLASSS_404778");
    } else {
      initDataEventArgs.commons.api.viewState.focus("VA_REFERENCEVALEEE_875778");
    }
  };



  //Entity: Rates
  //Rates.referenceValue (DropDownList) View: RatesModal
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_REFERENCEVALEEE_875778 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.Rates = true;

  };

  //Start signature to Callback event to VA_REFERENCEVALEEE_875778
  task_loadCatalogCallback_VA_REFERENCEVALEEE_875778 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
  ) => {};


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: RatesModal
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;


    if (this.mode == 2) {
      entities.Rates.portfolioClass = this.portfolioClassAux;
      this.calculateTotal(1, entities.Rates, renderEventArgs);
      this.calculateTotal(2, entities.Rates, renderEventArgs);
      this.calculateTotal(3, entities.Rates, renderEventArgs);

    }
  };


}