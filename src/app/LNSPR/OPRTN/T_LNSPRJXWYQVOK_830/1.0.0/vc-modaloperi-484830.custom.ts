import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-modaloperi-484830.model';
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

/* variables locales de T_LNSPRJXWYQVOK_830*/
let prioridad: any;

let valor: any;
let cambio: any;
let stateOp: any = 0;
let state: any;

/* variables locales de T_LNSPRSHDBNXGH_268*/

let valorAprobado: any = 0;

let valorOperacion: any = 0; //Vaildar solo se utilizn el initDate CallBack


export class VcModaloperi484830Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRJXWYQVOK_830"


  //Entity: OperationItemsList
  //OperationItemsList.amount (TextInputBox) View: ModalOperationItems
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AMOUNTKDNIXSXCQ_807800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    if (entities.OperationItemsList.typeItem != 'V') {
      entities.OperationItemsList.calculationBase = changedEventArgs.newValue;
    }
  };


  //Entity: OperationItemsList
  //OperationItemsList.associateValue (TextInputBox) View: ModalOperationItems
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_ASSOCIATEVALEUU_342800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let percentage: any;

    switch (entities.OperationItemsList.signo) {
      case "+":
        percentage = entities.OperationItemsList.factor + changedEventArgs.newValue;
        break;
      case "-":
        percentage = entities.OperationItemsList.factor!-changedEventArgs.newValue;
        break;
      case "*":
        if (changedEventArgs.newValue) {
          percentage = entities.OperationItemsList.factor! * changedEventArgs.newValue;
        } else {
          percentage = entities.OperationItemsList.factor;
        }

        break;
      case "/":
        if (changedEventArgs.newValue) {
          percentage = entities.OperationItemsList.factor!/ changedEventArgs.newValue;
        } else {
          percentage = entities.OperationItemsList.factor;
        }

        break;
      default:
        percentage = entities.OperationItemsList.factor + changedEventArgs.newValue;
    }

    if (entities.OperationItemsList.typeItem == "V") {
      entities.OperationItemsList.amount = percentage;
      entities.OperationItemsList.percentage = null;

    } else if (entities.OperationItemsList.typeItem == "Q" || entities.OperationItemsList.typeItem == "I" || entities.OperationItemsList.typeItem == "F" ||
      entities.OperationItemsList.typeItem == "O" || entities.OperationItemsList.typeItem == 'S') {
      entities.OperationItemsList.percentage = percentage;
      entities.OperationItemsList.amount = null;
    }
  };


  //Entity: OperationItemsList
  //OperationItemsList.factor (TextInputBox) View: ModalOperationItems
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FACTORTDKMIRESJ_493800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let percentage: any;

    switch (entities.OperationItemsList.signo) {
      case "+":
        percentage = changedEventArgs.newValue + entities.OperationItemsList.associateValue;
        break;
      case "-":
        percentage = changedEventArgs.newValue - entities.OperationItemsList.associateValue!;
        break;
      case "*":
        if (entities.OperationItemsList.associateValue) {
          percentage = changedEventArgs.newValue * entities.OperationItemsList.associateValue;
        } else {
          percentage = changedEventArgs.newValue;
        }

        break;
      case "/":
        if (entities.OperationItemsList.associateValue) {
          percentage = changedEventArgs.newValue / entities.OperationItemsList.associateValue;
        } else {
          percentage = changedEventArgs.newValue;
        }

        break;
      default:
        percentage = changedEventArgs.newValue + entities.OperationItemsList.associateValue;
    }

    if (entities.OperationItemsList.typeItem == "V") {
      entities.OperationItemsList.amount = percentage;
      entities.OperationItemsList.percentage = null;

    } else if (entities.OperationItemsList.typeItem == "Q" || entities.OperationItemsList.typeItem == "I" || entities.OperationItemsList.typeItem == "F" ||
      entities.OperationItemsList.typeItem == "O" || entities.OperationItemsList.typeItem == 'S') {
      entities.OperationItemsList.percentage = percentage;
      entities.OperationItemsList.amount = null;
    }
  };


  //Entity: OperationItemsList
  //OperationItemsList.item (DropDownList) View: ModalOperationItems
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_ITEMUCXHLKNWSIV_574800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    let viewState: any = changedEventArgs.commons.api.viewState;

    changedEventArgs.commons.execServer = false;

    if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").category != 'S') {
      viewState.hide('VA_INSURANCEZHNZGP_890800');
      viewState.hide('VA_INSURANCETYPEEE_321800');
      entities.OperationItemsList.insurance = null;
      entities.OperationItemsList.insuranceType = null;
    } else {
      viewState.show('VA_INSURANCEZHNZGP_890800');
      viewState.show('VA_INSURANCETYPEEE_321800');
    }

    //SUBSIDIO
    if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").rankVal != 'S') {
      viewState.hide('VA_RANKTRPXWXRXBWJ_371800');
      entities.OperationItemsList.rank = null;
    } else {
      viewState.show('VA_RANKTRPXWXRXBWJ_371800');
    }

    if (changedEventArgs.commons.api.vc.mode == changedEventArgs.commons.constants.mode.Insert) {
      cambio = false;
      entities.OperationItemsList.description = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").item;
      entities.OperationItemsList.typeItem = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem;
      entities.OperationItemsList.paymentMethod = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").paymentMethod;
      entities.OperationItemsList.priority = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").priority;
      entities.OperationItemsList.reference = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").referenceValue;
      entities.OperationItemsList.referenceReadjustment = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").readjustmentValue;
      entities.OperationItemsList.minRate = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").minRate;
      entities.OperationItemsList.maxRate = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").maxRate;
      entities.OperationItemsList.financed = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").financed;
      entities.OperationItemsList.insurance = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").insurance;
      entities.OperationItemsList.insuranceType = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").insuranceType;
      entities.OperationItemsList.rank = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").rank;
      entities.OperationItemsList.applyRate = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").applyRate;

      if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'Q' || viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'O') {
        // viewState.disable('VA_ITEMUCXHLKNWSIV_574800');
        viewState.disable('VA_DESCRIPTIONZKOW_324800');
        viewState.disable('VA_TYPEITEMDSHZMXA_943800');
        viewState.disable('VA_SIGNOOZSLFEAGNU_871800');
        viewState.enable('VA_PRIORITYGWEJSIO_703800');
        viewState.disable('VA_FACTORTDKMIRESJ_493800');
        viewState.disable('VA_REFERENCESIEQUP_560800');
        viewState.disable('VA_SIGNREADJUSTEEM_203800');
        viewState.disable('VA_REFERENCEREADSD_344800');
        viewState.disable('VA_FACTORREADJUTTE_305800');
        viewState.disable('VA_CALCULATIONBEEE_756800');
        viewState.disable('VA_AMOUNTKDNIXSXCQ_807800');
        viewState.enable('VA_PERCENTAGEOQEOK_815800');
        viewState.disable('VA_PAYMENTMETHODDD_767800');

      } else if (
        viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'M' ||
        viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'I' || entities.OperationItemsList.typeItem == 'F' || entities.OperationItemsList.typeItem == 'S'
      ) {
        // viewState.disable('VA_ITEMUCXHLKNWSIV_574800');
        viewState.disable('VA_DESCRIPTIONZKOW_324800');
        viewState.disable('VA_TYPEITEMDSHZMXA_943800');
        viewState.enable('VA_SIGNOOZSLFEAGNU_871800');
        viewState.enable('VA_PRIORITYGWEJSIO_703800');
        viewState.enable('VA_FACTORTDKMIRESJ_493800');
        viewState.enable('VA_REFERENCESIEQUP_560800');
        viewState.enable('VA_SIGNREADJUSTEEM_203800');
        viewState.enable('VA_REFERENCEREADSD_344800');
        viewState.enable('VA_FACTORREADJUTTE_305800');
        viewState.disable('VA_CALCULATIONBEEE_756800');
        viewState.disable('VA_AMOUNTKDNIXSXCQ_807800');
        viewState.enable('VA_PERCENTAGEOQEOK_815800');
        viewState.disable('VA_PAYMENTMETHODDD_767800');

      } else if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'C') {

        // viewState.disable('VA_ITEMUCXHLKNWSIV_574800');
        viewState.disable('VA_DESCRIPTIONZKOW_324800');
        viewState.disable('VA_TYPEITEMDSHZMXA_943800');
        viewState.disable('VA_SIGNOOZSLFEAGNU_871800');
        viewState.enable('VA_PRIORITYGWEJSIO_703800');
        viewState.disable('VA_FACTORTDKMIRESJ_493800');
        viewState.disable('VA_REFERENCESIEQUP_560800');
        viewState.disable('VA_SIGNREADJUSTEEM_203800');
        viewState.disable('VA_REFERENCEREADSD_344800');
        viewState.disable('VA_FACTORREADJUTTE_305800');
        viewState.disable('VA_CALCULATIONBEEE_756800');
        viewState.enable('VA_AMOUNTKDNIXSXCQ_807800');
        viewState.disable('VA_PERCENTAGEOQEOK_815800');
        viewState.enable('VA_PAYMENTMETHODDD_767800');

      } else if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'V') {

        // viewState.disable('VA_ITEMUCXHLKNWSIV_574800');

        viewState.disable('VA_DESCRIPTIONZKOW_324800');
        viewState.disable('VA_TYPEITEMDSHZMXA_943800');
        viewState.disable('VA_SIGNOOZSLFEAGNU_871800');
        viewState.enable('VA_PRIORITYGWEJSIO_703800');
        viewState.disable('VA_FACTORTDKMIRESJ_493800');
        viewState.disable('VA_REFERENCESIEQUP_560800');
        viewState.disable('VA_SIGNREADJUSTEEM_203800');
        viewState.disable('VA_REFERENCEREADSD_344800');
        viewState.disable('VA_FACTORREADJUTTE_305800');
        viewState.disable('VA_CALCULATIONBEEE_756800');
        viewState.enable('VA_AMOUNTKDNIXSXCQ_807800');
        viewState.disable('VA_PERCENTAGEOQEOK_815800');
        viewState.disable('VA_PAYMENTMETHODDD_767800');
      }
    }
  };


  //Entity: OperationItemsList
  //OperationItemsList.paymentMethod (DropDownList) View: ModalOperationItems
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMENTMETHODDD_767800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'L') {
      changedEventArgs.commons.api.viewState.enable('VA_FINANCEDTQRTUFB_342800');
    } else {
      changedEventArgs.commons.api.viewState.disable('VA_FINANCEDTQRTUFB_342800');
    }
  };


  //Entity: OperationItemsList
  //OperationItemsList.priority (TextInputBox) View: ModalOperationItems
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PRIORITYGWEJSIO_703800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
  };


  //Entity: OperationItemsList
  //OperationItemsList.referenceReadjustment (DropDownList) View: ModalOperationItems
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_REFERENCEREADSD_344800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (changedEventArgs.newValue && cambio) {
      changedEventArgs.commons.execServer = true;
    } else {
      changedEventArgs.commons.execServer = false;
      cambio = true;
    }

    //changedEventArgs.commons.serverParameters.OperationItemsList = true;

  };



  //Start signature to Callback event to VA_REFERENCEREADSD_344800
  task_changeCallback_VA_REFERENCEREADSD_344800 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };




  //Entity: OperationItemsList
  //OperationItemsList.reference (DropDownList) View: ModalOperationItems
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_REFERENCESIEQUP_560800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (changedEventArgs.newValue) {
      changedEventArgs.commons.execServer = true;
    } else {
      changedEventArgs.commons.execServer = false;
    }

    //changedEventArgs.commons.serverParameters.OperationItemsList = true;

  };

  //Start signature to Callback event to VA_REFERENCESIEQUP_560800
  task_changeCallback_VA_REFERENCESIEQUP_560800 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {

  };


  //Entity: OperationItemsList
  //OperationItemsList.signo (DropDownList) View: ModalOperationItems
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SIGNOOZSLFEAGNU_871800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    let percentage: any;
    switch (changedEventArgs.newValue) {
      case "+":
        percentage = entities.OperationItemsList.factor!+entities.OperationItemsList.associateValue!;
        break;
      case "-":
        percentage = entities.OperationItemsList.factor!-entities.OperationItemsList.associateValue!;
        break;
      case "*":
        if (entities.OperationItemsList.associateValue) {
          percentage = entities.OperationItemsList.factor! * entities.OperationItemsList.associateValue;
        } else {
          entities.OperationItemsList.percentage = entities.OperationItemsList.factor;
        }

        break;
      case "/":
        if (entities.OperationItemsList.associateValue) {
          percentage = entities.OperationItemsList.factor!/ entities.OperationItemsList.associateValue;
        } else {
          percentage = entities.OperationItemsList.factor;
        }

        break;
      default:
        percentage = entities.OperationItemsList.factor!+entities.OperationItemsList.associateValue!;
    }


    if (entities.OperationItemsList.typeItem == "V") {
      entities.OperationItemsList.amount = percentage;
      entities.OperationItemsList.percentage = null;

    } else if (entities.OperationItemsList.typeItem == "Q" || entities.OperationItemsList.typeItem == "I" || entities.OperationItemsList.typeItem == "F" ||
      entities.OperationItemsList.typeItem == "O" || entities.OperationItemsList.typeItem == 'S') {
      entities.OperationItemsList.percentage = percentage;
      entities.OperationItemsList.amount = null;
    }
  };


  //Entity: OperationItemsList
  //OperationItemsList.amount (TextInputBox) View: ModalOperationItems
  task_customValidate_VA_AMOUNTKDNIXSXCQ_807800 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {

    customValidateEventArgs.commons.execServer = false;
    if (customValidateEventArgs.commons.api.vc.mode == customValidateEventArgs.commons.constants.mode.Update && valor != undefined && valor != null && valor > 0) {

      if (customValidateEventArgs.currentValue > valor) {
        customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.LBL_LNSPR_VALORINRO_94797')
        customValidateEventArgs.isValid = false;
      } else {
        customValidateEventArgs.isValid = true;
      }
    }

  };


  //Entity: OperationItemsList
  //OperationItemsList.maxRate (TextInputBox) View: ModalOperationItems
  task_customValidate_VA_MAXRATEVBDOKWML_251800 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {

    customValidateEventArgs.commons.execServer = false;

    if (((customValidateEventArgs.currentValue || customValidateEventArgs.currentValue == 0) && (entities.OperationItemsList.percentage || entities.OperationItemsList.percentage == 0) && customValidateEventArgs.currentValue < entities.OperationItemsList.percentage)) {
      customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MXIMODEUQ_72863')
      customValidateEventArgs.isValid = false;
    } else {
      customValidateEventArgs.isValid = true;
    }

  };


  //Entity: OperationItemsList
  //OperationItemsList.minRate (TextInputBox) View: ModalOperationItems
  task_customValidate_VA_MINRATELDEORMJX_638800 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {

    customValidateEventArgs.commons.execServer = false;

    if (((customValidateEventArgs.currentValue || customValidateEventArgs.currentValue == 0) &&
        (entities.OperationItemsList.percentage || entities.OperationItemsList.percentage == 0) && customValidateEventArgs.currentValue > entities.OperationItemsList.percentage)) {
      customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MNIMODEAB_13294')
      customValidateEventArgs.isValid = false;
    } else {
      customValidateEventArgs.isValid = true;
    }

  };


  //Entity: OperationItemsList
  //OperationItemsList.percentage (TextInputBox) View: ModalOperationItems
  task_customValidate_VA_PERCENTAGEOQEOK_815800 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {

    customValidateEventArgs.commons.execServer = false;

    if (((entities.OperationItemsList.minRate || entities.OperationItemsList.minRate == 0) && customValidateEventArgs.currentValue < entities.OperationItemsList.minRate) || ((entities.OperationItemsList.maxRate || entities.OperationItemsList.maxRate == 0) && customValidateEventArgs.currentValue > entities.OperationItemsList.maxRate)) {
      customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_TASADEBIQ_21023')
      customValidateEventArgs.isValid = false;
    } else {
      customValidateEventArgs.isValid = true;
    }

  };


  //Entity: OperationItemsList
  //OperationItemsList.priority (TextInputBox) View: ModalOperationItems
  task_customValidate_VA_PRIORITYGWEJSIO_703800 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {

    customValidateEventArgs.commons.execServer = false;
    if (customValidateEventArgs.commons.api.vc.mode == customValidateEventArgs.commons.constants.mode.Update && prioridad != undefined && prioridad != null && prioridad > 0) {

      if (customValidateEventArgs.currentValue > prioridad) {
        customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.LBL_LNSPR_VALORINRO_94797')
        customValidateEventArgs.isValid = false;
      } else {
        customValidateEventArgs.isValid = true;
      }

    }
  };


  // (Button) 
  task_executeCommand_CM_MODALOPE_NNN = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    executeCommandEventArgs.commons.api.navigation.closeModal({
      resultArgs: {
        index: executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().rowIndex,
        mode: executeCommandEventArgs.commons.api.vc.mode,
        data: entities
      }
    });

  };


  //ConceptItemsQuery Entity: ConceptItems
  task_executeQuery_Q_CONCPPTM_GI69 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let parentVc: any = executeQueryEventArgs.commons.api.parentVc;


    executeQueryEventArgs.parameters.tOperacion = parentVc.model.OperationEntity.typeOperation;
    executeQueryEventArgs.parameters.moneda = parentVc.model.OperationEntity.money;
    executeQueryEventArgs.parameters.operacion = 'S';


    //asignacion variable actualizacion prestamos != no vigente
    if (parentVc && parentVc.parentVc && parentVc.parentVc.id == 'VC_FSEARCHRUU_598110') {
      state = parentVc.model.GeneralInformation.codState;
      if (state != stateOp) {
        executeQueryEventArgs.parameters.opActiva = 'S';
      }
    }

    if (parentVc && parentVc.parentVc && parentVc.parentVc.id == "VC_LOANPARTIR_265871") {
      executeQueryEventArgs.parameters.desempar = 'S';
    }

    if (executeQueryEventArgs.commons.api.vc.mode == executeQueryEventArgs.commons.constants.mode.Insert) {
      executeQueryEventArgs.parameters.modo = 3;
      executeQueryEventArgs.parameters.banco = parentVc.model.OperationEntity.operation;
    } else if (executeQueryEventArgs.commons.api.vc.mode == executeQueryEventArgs.commons.constants.mode.Update) {
      executeQueryEventArgs.parameters.modo = 0;
    }

    if (executeQueryEventArgs.parameters.tOperacion && executeQueryEventArgs.parameters.moneda == 0) {
      executeQueryEventArgs.commons.execServer = true;
    } else {
      executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.tOperacion && executeQueryEventArgs.parameters.moneda ? true : false;
    }
    //executeQueryEventArgs.commons.serverParameters.ConceptItems = true;
  };



  //Start signature to Callback event to Q_CONCPPTM_GI69
  task_executeQueryCallback_Q_CONCPPTM_GI69 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };



  //RateRangeListQuery Entity: RateRangeList
  task_executeQuery_Q_RATEGLSL_WM41 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.RateRangeList = true;
  };

  //ReferentialItemsQuery Entity: ReferentialItems
  task_executeQuery_Q_REFEEAML_BR93 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.parentVc?.model.OperationEntity.operation;
    executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.banco ? true : false;
    //executeQueryEventArgs.commons.serverParameters.ReferentialItems = true;
  };



  //Start signature to Callback event to Q_REFEEAML_BR93
  task_executeQueryCallback_Q_REFEEAML_BR93 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ModalOperationItems
  task_initData_VC_MODALOPERI_484830 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

    let viewState: any = initDataEventArgs.commons.api.viewState;
    let api: any = initDataEventArgs.commons.api;

    entities.OperationEntity.operation = api.parentVc.model.OperationEntity.operation;
    entities.GeneralParametersQuery = api.parentVc.model.GeneralParametersQuery;

    if (api.parentVc && api.parentVc.parentVc && api.parentVc.parentVc.id == 'VC_LOANPARTIR_265871') {
      valor = valorAprobado - valorOperacion;
    }

    //RUBRO TIPO SEGURO
    if (entities.OperationItemsList.category != 'S') {
      viewState.hide('VA_INSURANCEZHNZGP_890800');
      viewState.hide('VA_INSURANCETYPEEE_321800');
    }

    //SUBSIDIO
    if (entities.OperationItemsList.limit != 'S') {
      viewState.hide('VA_RANKTRPXWXRXBWJ_371800');
    }

    if (api.vc.mode == initDataEventArgs.commons.constants.mode.Update) {
      prioridad = entities.OperationItemsList.priority;
      if (api.parentVc && api.parentVc.parentVc && api.parentVc.parentVc.id == 'VC_LOANPARTIR_265871') {
        valor = valorAprobado - valorOperacion;
      }

      viewState.disable('VA_FINANCEDTQRTUFB_342800'); //Financiado

      if (entities.OperationItemsList.typeItem == 'Q' || entities.OperationItemsList.typeItem == 'O') {
        viewState.disable('VA_ITEMUCXHLKNWSIV_574800'); //Rubro
        viewState.disable('VA_DESCRIPTIONZKOW_324800'); //Descripción
        viewState.disable('VA_TYPEITEMDSHZMXA_943800'); //Tipo
        viewState.disable('VA_PAYMENTMETHODDD_767800'); //Forma Pago

        //viewState.('VA_FINANCEDTQRTUFB_342800');//Financiado
        viewState.enable('VA_PRIORITYGWEJSIO_703800'); //Prioridad
        viewState.disable('VA_REFERENCESIEQUP_560800'); //Referencial
        viewState.disable('VA_SIGNOOZSLFEAGNU_871800'); //Signo

        viewState.disable('VA_FACTORTDKMIRESJ_493800'); //Factor
        viewState.disable('VA_REFERENCEREADSD_344800'); //Ref. Reajuste
        viewState.disable('VA_SIGNREADJUSTEEM_203800'); //Signo Reajuste
        viewState.disable('VA_FACTORREADJUTTE_305800'); //Factor Reajuste

        viewState.disable('VA_CALCULATIONBEEE_756800'); //Base de Cálculo
        viewState.disable('VA_AMOUNTKDNIXSXCQ_807800'); //Valor
        viewState.enable('VA_PERCENTAGEOQEOK_815800'); //Tasa
      } else if (entities.OperationItemsList.typeItem == 'M' || entities.OperationItemsList.typeItem == 'I' || entities.OperationItemsList.typeItem == 'F' || entities.OperationItemsList.typeItem == 'S') {
        viewState.disable('VA_ITEMUCXHLKNWSIV_574800'); //Rubro
        viewState.disable('VA_DESCRIPTIONZKOW_324800'); //Descripción
        viewState.disable('VA_TYPEITEMDSHZMXA_943800'); //Tipo
        viewState.disable('VA_PAYMENTMETHODDD_767800'); //Forma Pago

        //viewState.('VA_FINANCEDTQRTUFB_342800');//Financiado
        viewState.enable('VA_PRIORITYGWEJSIO_703800'); //Prioridad
        viewState.enable('VA_REFERENCESIEQUP_560800'); //Referencial
        viewState.enable('VA_SIGNOOZSLFEAGNU_871800'); //Signo

        viewState.enable('VA_FACTORTDKMIRESJ_493800'); //Factor
        viewState.enable('VA_REFERENCEREADSD_344800'); //Ref. Reajuste
        viewState.enable('VA_SIGNREADJUSTEEM_203800'); //Signo Reajuste
        viewState.enable('VA_FACTORREADJUTTE_305800'); //Factor Reajuste

        viewState.disable('VA_CALCULATIONBEEE_756800'); //Base de Cálculo
        viewState.disable('VA_AMOUNTKDNIXSXCQ_807800'); //Valor
        viewState.enable('VA_PERCENTAGEOQEOK_815800'); //Tasa
      } else if (entities.OperationItemsList.typeItem == 'C') {
        viewState.disable('VA_ITEMUCXHLKNWSIV_574800'); //Rubro
        viewState.disable('VA_DESCRIPTIONZKOW_324800'); //Descripción
        viewState.disable('VA_TYPEITEMDSHZMXA_943800'); //Tipo
        viewState.enable('VA_PAYMENTMETHODDD_767800'); //Forma Pago

        //viewState.('VA_FINANCEDTQRTUFB_342800');//Financiado
        viewState.enable('VA_PRIORITYGWEJSIO_703800'); //Prioridad
        viewState.disable('VA_REFERENCESIEQUP_560800'); //Referencial
        viewState.disable('VA_SIGNOOZSLFEAGNU_871800'); //Signo

        viewState.disable('VA_FACTORTDKMIRESJ_493800'); //Factor
        viewState.disable('VA_REFERENCEREADSD_344800'); //Ref. Reajuste
        viewState.disable('VA_SIGNREADJUSTEEM_203800'); //Signo Reajuste
        viewState.disable('VA_FACTORREADJUTTE_305800'); //Factor Reajuste

        viewState.disable('VA_CALCULATIONBEEE_756800'); //Base de Cálculo
        viewState.enable('VA_AMOUNTKDNIXSXCQ_807800'); //Valor
        viewState.disable('VA_PERCENTAGEOQEOK_815800'); //Tasa
      } else if (entities.OperationItemsList.typeItem == 'V') {
        viewState.disable('VA_ITEMUCXHLKNWSIV_574800'); //Rubro
        viewState.disable('VA_DESCRIPTIONZKOW_324800'); //Descripción
        viewState.disable('VA_TYPEITEMDSHZMXA_943800'); //Tipo
        viewState.disable('VA_PAYMENTMETHODDD_767800'); //Forma Pago

        //viewState.('VA_FINANCEDTQRTUFB_342800');//Financiado
        viewState.enable('VA_PRIORITYGWEJSIO_703800'); //Prioridad
        viewState.disable('VA_REFERENCESIEQUP_560800'); //Referencial
        viewState.disable('VA_SIGNOOZSLFEAGNU_871800'); //Signo

        viewState.disable('VA_FACTORTDKMIRESJ_493800'); //Factor
        viewState.disable('VA_REFERENCEREADSD_344800'); //Ref. Reajuste
        viewState.disable('VA_SIGNREADJUSTEEM_203800'); //Signo Reajuste
        viewState.disable('VA_FACTORREADJUTTE_305800'); //Factor Reajuste

        viewState.disable('VA_CALCULATIONBEEE_756800'); //Base de Cálculo
        viewState.enable('VA_AMOUNTKDNIXSXCQ_807800'); //Valor
        viewState.disable('VA_PERCENTAGEOQEOK_815800'); //Tasa
      }
    } else {
      viewState.disable('VA_FINANCEDTQRTUFB_342800'); //Financiado
      entities.OperationItemsList.calculationBase = null;
    }
  };


}