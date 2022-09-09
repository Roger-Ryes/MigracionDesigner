import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-projectorc-636575.model';
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

/* variables locales de T_LNSPRKWSPLJPI_575*/

export class VcProjectorc636575Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRKWSPLJPI_575"




  //Entity: OtherCharges
  //OtherCharges.value (TextInputBox) View: ProjectOtherCharges
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_VALUENGWHVWDDNU_188696 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    let value: any = entities.OtherCharges.value;
    if (value.length > 20) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_ELVALOREM_94145', fasle, null, timer);
    }
    changedEventArgs.commons.execServer = false;
  };


  //Entity: OtherCharges
  //OtherCharges.value (TextInputBox) View: ProjectOtherCharges
  task_customValidate_VA_VALUENGWHVWDDNU_188696 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {
    customValidateEventArgs.commons.execServer = false;

    let validationValue: any = entities.OtherCharges.value;

    if (validationValue < 0) {
      customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_ELVALOREG_50853";
      customValidateEventArgs.isValid = false;
    } else if (validationValue == 0) {
      customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_ELVALORDO_71473";
      customValidateEventArgs.isValid = false;

    } else {
      customValidateEventArgs.isValid = true;
    }
  };

  // (Button) 
  task_executeCommand_CM_PROJECTO_N34 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let auxData: any = [];
    let execServer: any = true;
    executeCommandEventArgs.commons.api.parentVc?.model.LoanList.data().forEach((itemData: any) => {
      if (itemData.seleccion) {
        auxData.push(itemData);
      }
    })

    entities.LoanList = auxData;
    executeCommandEventArgs.commons.execServer = execServer;
  };

  //Start signature to Callback event to CM_PROJECTO_N34
  task_executeCommandCallback_CM_PROJECTO_N34 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      if (entities.MassiveCommissionsMistakes != null && entities.MassiveCommissionsMistakes.length > 1) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEN_20984", false, null, timer);
      } else {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSACEC_84918', false, null, timer);
      }
      executeCommandCallbackEventArgs.commons.api.navigation.closeModal({
        objLoans: entities.LoanList,
        objMistakes: entities.MassiveCommissionsMistakes
      });
    }



  };

  // (Button) 
  task_executeCommand_CM_PROJECTO_TRS = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ProjectOtherCharges
  task_initData_VC_PROJECTORC_636575 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.OtherCharges.baseCalculation = 0;
    initDataEventArgs.commons.api.viewState.hide('VA_INIDIVYCRRTXBCX_837696');
    initDataEventArgs.commons.api.viewState.hide('VA_DIVUPYMACQXCZMH_148696');
    initDataEventArgs.commons.api.viewState.hide('VA_BASECALCULATOII_165696');
    initDataEventArgs.commons.execServer = false;
  };

  //Entity: OtherCharges
  //OtherCharges.concept (DropDownList) View: ProjectOtherCharges
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_CONCEPTFHEMXUHJ_108696 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.api.vc.model.OtherCharges.currency = loadCatalogDataEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYTRTBCCA_970696").code;
    loadCatalogDataEventArgs.commons.api.vc.model.OtherCharges.typeOp = loadCatalogDataEventArgs.commons.api.parentVc?.model.LoanSearchFilter.type;
    loadCatalogDataEventArgs.commons.serverParameters.OtherCharges = true;
    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OtherCharges = true;

  };


  //Start signature to Callback event to VA_CONCEPTFHEMXUHJ_108696
  task_loadCatalogCallback_VA_CONCEPTFHEMXUHJ_108696 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
  ) => {
    //here your code
  };



}