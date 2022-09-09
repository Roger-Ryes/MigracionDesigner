import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-modalloais-799445.model';
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

/* variables locales de T_ASSTSFPNDGGEH_445*/
let prioridad: any;

let valor: any;
let cambio: any;


export class VcModalloais799445Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSFPNDGGEH_445"


  //Entity: LoanItemsList
  //LoanItemsList.amount (TextInputBox) View: ModalLoanItemsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AMOUNTFAWDLDZLX_436980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    if (entities.LoanItemsList.typeItem != 'V') {
      entities.LoanItemsList.calculationBase = changedEventArgs.newValue;
    }

  };


  //Entity: LoanItemsList
  //LoanItemsList.associateValue (TextInputBox) View: ModalLoanItemsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_ASSOCIATEVALUEE_791980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let percentage: any;

    switch (entities.LoanItemsList.signo) {
      case "+":
        percentage = entities.LoanItemsList.factor + changedEventArgs.newValue;
        break;
      case "-":
        percentage = entities.LoanItemsList.factor - changedEventArgs.newValue;
        break;
      case "*":
        if (changedEventArgs.newValue) {
          percentage = entities.LoanItemsList.factor * changedEventArgs.newValue;
        } else {
          percentage = entities.LoanItemsList.factor;
        }

        break;
      case "/":
        if (changedEventArgs.newValue) {
          percentage = entities.LoanItemsList.factor / changedEventArgs.newValue;
        } else {
          percentage = entities.LoanItemsList.factor;
        }

        break;
      default:
        percentage = entities.LoanItemsList.factor + changedEventArgs.newValue;
    }

    if (entities.LoanItemsList.typeItem == "V") {
      entities.LoanItemsList.amount = percentage;
      entities.LoanItemsList.percentage = null;

    } else if (entities.LoanItemsList.typeItem == "Q" || entities.LoanItemsList.typeItem == "I" || entities.LoanItemsList.typeItem == "F" ||
      entities.LoanItemsList.typeItem == "O" || entities.LoanItemsList.typeItem == 'S') {
      entities.LoanItemsList.percentage = percentage;
      entities.LoanItemsList.amount = null;
    }
  };


  //Entity: LoanItemsList
  //LoanItemsList.factor (TextInputBox) View: ModalLoanItemsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FACTOROWCCFAZFG_876980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    let percentage: any;

    switch (entities.LoanItemsList.signo) {
      case "+":
        percentage = changedEventArgs.newValue + entities.LoanItemsList.associateValue;
        break;
      case "-":
        percentage = changedEventArgs.newValue - entities.LoanItemsList.associateValue;
        break;
      case "*":
        if (entities.LoanItemsList.associateValue) {
          percentage = changedEventArgs.newValue * entities.LoanItemsList.associateValue;
        } else {
          percentage = changedEventArgs.newValue;
        }

        break;
      case "/":
        if (entities.LoanItemsList.associateValue) {
          percentage = changedEventArgs.newValue / entities.LoanItemsList.associateValue;
        } else {
          percentage = changedEventArgs.newValue;
        }

        break;
      default:
        percentage = changedEventArgs.newValue + entities.LoanItemsList.associateValue;
    }

    if (entities.LoanItemsList.typeItem == "V") {
      entities.LoanItemsList.amount = percentage;
      entities.LoanItemsList.percentage = null;

    } else if (entities.LoanItemsList.typeItem == "Q" || entities.LoanItemsList.typeItem == "I" || entities.LoanItemsList.typeItem == "F" ||
      entities.LoanItemsList.typeItem == "O" || entities.LoanItemsList.typeItem == 'S') {
      entities.LoanItemsList.percentage = percentage;
      entities.LoanItemsList.amount = null;
    }
  };


  //Entity: LoanItemsList
  //LoanItemsList.reference (TextInputBox) View: ModalLoanItemsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_GRACEBSRSLHPWZD_368980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    if (changedEventArgs.newValue) {
      changedEventArgs.commons.execServer = true;
    } else {
      changedEventArgs.commons.execServer = false;
    }

  };



  //Start signature to Callback event to VA_GRACEBSRSLHPWZD_368980
  task_changeCallback_VA_GRACEBSRSLHPWZD_368980 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };


  //Entity: LoanItemsList
  //LoanItemsList.item (TextInputBox) View: ModalLoanItemsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_ITEMJIJOVTYJBHS_939980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    let viewState: any = changedEventArgs.commons.api.viewState;

    changedEventArgs.commons.execServer = false;

    if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").category != 'S') {
      viewState.hide('VA_INSURANCERNDVZP_758980');
      viewState.hide('VA_INSURANCETYPEEE_633980');
      entities.LoanItemsList.insurance = null;
      entities.LoanItemsList.insuranceType = null;
    } else {
      viewState.show('VA_INSURANCERNDVZP_758980');
      viewState.show('VA_INSURANCETYPEEE_633980');
    }

    if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").rankVal != 'S') {
      viewState.hide('VA_RANKGUJYXFFOUPY_234980');
      entities.LoanItemsList.rank = null;
    } else {
      viewState.show('VA_RANKGUJYXFFOUPY_234980');
    }

    if (changedEventArgs.commons.api.vc.mode == changedEventArgs.commons.constants.mode.Insert) {
      cambio = false;
      entities.LoanItemsList.description = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").item;
      entities.LoanItemsList.typeItem = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem;
      entities.LoanItemsList.paymentMethod = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").paymentMethod;
      entities.LoanItemsList.priority = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").priority;
      entities.LoanItemsList.reference = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").referenceValue;
      entities.LoanItemsList.referenceReadjustment = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").readjustmentValue;
      entities.LoanItemsList.minRate = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").minRate;
      entities.LoanItemsList.maxRate = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").maxRate;
      entities.LoanItemsList.financed = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").financed;
      entities.LoanItemsList.insurance = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").insurance;
      entities.LoanItemsList.insuranceType = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").insuranceType;
      entities.LoanItemsList.rank = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").rank;

      if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'Q' || viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'O') {

        viewState.disable('VA_DESCRIPTIONXUEB_185980');
        viewState.disable('VA_TYPEITEMKNWJUJS_933980');
        viewState.disable('VA_SIGNOWUDEEEWFGZ_407980');
        viewState.enable('VA_PRIORITYDAWHSWY_831980');
        viewState.disable('VA_FACTOROWCCFAZFG_876980');
        viewState.disable('VA_GRACEBSRSLHPWZD_368980');
        viewState.disable('VA_SIGNREADJUSTETE_706980');
        viewState.disable('VA_REFERENCEREAUUU_417980');
        viewState.disable('VA_FACTORREADJUTME_771980');
        viewState.disable('VA_CALCULATIONBASE_138980');
        viewState.disable('VA_AMOUNTFAWDLDZLX_436980');
        viewState.enable('VA_PERCENTAGEPOUVM_313980');
        viewState.disable('VA_PAYMENTMETHODDD_900980');

      } else if (
        viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'M' ||
        viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'I' || entities.LoanItemsList.typeItem == 'F' || entities.LoanItemsList.typeItem == 'S'
      ) {

        viewState.disable('VA_DESCRIPTIONXUEB_185980');
        viewState.disable('VA_TYPEITEMKNWJUJS_933980');
        viewState.enable('VA_SIGNOWUDEEEWFGZ_407980');
        viewState.enable('VA_PRIORITYDAWHSWY_831980');
        viewState.enable('VA_FACTOROWCCFAZFG_876980');
        viewState.enable('VA_GRACEBSRSLHPWZD_368980');
        viewState.enable('VA_SIGNREADJUSTETE_706980');
        viewState.enable('VA_REFERENCEREAUUU_417980');
        viewState.enable('VA_FACTORREADJUTME_771980');
        viewState.disable('VA_CALCULATIONBASE_138980');
        viewState.disable('VA_AMOUNTFAWDLDZLX_436980');
        viewState.enable('VA_PERCENTAGEPOUVM_313980');
        viewState.disable('VA_PAYMENTMETHODDD_900980');

      } else if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'C') {

        viewState.disable('VA_DESCRIPTIONXUEB_185980');
        viewState.disable('VA_TYPEITEMKNWJUJS_933980');
        viewState.disable('VA_SIGNOWUDEEEWFGZ_407980');
        viewState.enable('VA_PRIORITYDAWHSWY_831980');
        viewState.disable('VA_FACTOROWCCFAZFG_876980');
        viewState.disable('VA_GRACEBSRSLHPWZD_368980');
        viewState.disable('VA_SIGNREADJUSTETE_706980');
        viewState.disable('VA_REFERENCEREAUUU_417980');
        viewState.disable('VA_FACTORREADJUTME_771980');
        viewState.disable('VA_CALCULATIONBASE_138980');
        viewState.enable('VA_AMOUNTFAWDLDZLX_436980');
        viewState.disable('VA_PERCENTAGEPOUVM_313980');
        viewState.enable('VA_PAYMENTMETHODDD_900980');

      } else if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'V') {

        viewState.disable('VA_DESCRIPTIONXUEB_185980');
        viewState.disable('VA_TYPEITEMKNWJUJS_933980');
        viewState.disable('VA_SIGNOWUDEEEWFGZ_407980');
        viewState.enable('VA_PRIORITYDAWHSWY_831980');
        viewState.disable('VA_FACTOROWCCFAZFG_876980');
        viewState.disable('VA_GRACEBSRSLHPWZD_368980');
        viewState.disable('VA_SIGNREADJUSTETE_706980');
        viewState.disable('VA_REFERENCEREAUUU_417980');
        viewState.disable('VA_FACTORREADJUTME_771980');
        viewState.disable('VA_CALCULATIONBASE_138980');
        viewState.enable('VA_AMOUNTFAWDLDZLX_436980');
        viewState.disable('VA_PERCENTAGEPOUVM_313980');
        viewState.disable('VA_PAYMENTMETHODDD_900980');
      }
    }
  };


  //Entity: LoanItemsList
  //LoanItemsList.paymentMethod (DropDownList) View: ModalLoanItemsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMENTMETHODDD_900980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'L') {
      changedEventArgs.commons.api.viewState.enable('VA_FINANCEDJTEBFXT_682980');
    } else {
      changedEventArgs.commons.api.viewState.disable('VA_FINANCEDJTEBFXT_682980');
    }

  };


  //Entity: LoanItemsList
  //LoanItemsList.referenceReadjustment (TextInputBox) View: ModalLoanItemsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_REFERENCEREAUUU_417980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (changedEventArgs.newValue && cambio) {
      changedEventArgs.commons.execServer = true;
    } else {
      changedEventArgs.commons.execServer = false;
      cambio = true;
    }

  };



  //Start signature to Callback event to VA_REFERENCEREAUUU_417980
  task_changeCallback_VA_REFERENCEREAUUU_417980 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };


  //Entity: LoanItemsList
  //LoanItemsList.signo (DropDownList) View: ModalLoanItemsForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SIGNOWUDEEEWFGZ_407980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let percentage: any;
    switch (changedEventArgs.newValue) {
      case "+":
        percentage = entities.LoanItemsList.factor + entities.LoanItemsList.associateValue;
        break;
      case "-":
        percentage = entities.LoanItemsList.factor - entities.LoanItemsList.associateValue;
        break;
      case "*":
        if (entities.LoanItemsList.associateValue) {
          percentage = entities.LoanItemsList.factor * entities.LoanItemsList.associateValue;
        } else {
          entities.LoanItemsList.percentage = entities.LoanItemsList.factor;
        }

        break;
      case "/":
        if (entities.LoanItemsList.associateValue) {
          percentage = entities.LoanItemsList.factor / entities.LoanItemsList.associateValue;
        } else {
          percentage = entities.LoanItemsList.factor;
        }

        break;
      default:
        percentage = entities.LoanItemsList.factor + entities.LoanItemsList.associateValue;
    }


    if (entities.LoanItemsList.typeItem == "V") {
      entities.LoanItemsList.amount = percentage;
      entities.LoanItemsList.percentage = null;

    } else if (entities.LoanItemsList.typeItem == "Q" || entities.LoanItemsList.typeItem == "I" || entities.LoanItemsList.typeItem == "F" ||
      entities.LoanItemsList.typeItem == "O" || entities.LoanItemsList.typeItem == 'S') {
      entities.LoanItemsList.percentage = percentage;
      entities.LoanItemsList.amount = null;
    }
  };


  //Entity: LoanItemsList
  //LoanItemsList.amount (TextInputBox) View: ModalLoanItemsForm
  task_customValidate_VA_AMOUNTFAWDLDZLX_436980 = (
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


  //Entity: LoanItemsList
  //LoanItemsList.maxRate (TextInputBox) View: ModalLoanItemsForm
  task_customValidate_VA_MAXRATENAXLOHPN_726980 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {

    customValidateEventArgs.commons.execServer = false;
    if (((customValidateEventArgs.currentValue || customValidateEventArgs.currentValue == 0) && (entities.LoanItemsList.percentage || entities.LoanItemsList.percentage == 0) && customValidateEventArgs.currentValue < entities.LoanItemsList.percentage)) {
      customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MXIMODEUQ_72863')
      customValidateEventArgs.isValid = false;
    } else {
      customValidateEventArgs.isValid = true;
    }

  };


  //Entity: LoanItemsList
  //LoanItemsList.minRate (TextInputBox) View: ModalLoanItemsForm
  task_customValidate_VA_MINRATEWSNBWPYC_520980 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {

    customValidateEventArgs.commons.execServer = false;


    if (((customValidateEventArgs.currentValue || customValidateEventArgs.currentValue == 0) &&
        (entities.LoanItemsList.percentage || entities.LoanItemsList.percentage == 0) && customValidateEventArgs.currentValue > entities.LoanItemsList.percentage)) {
      customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MNIMODEAB_13294')
      customValidateEventArgs.isValid = false;
    } else {
      customValidateEventArgs.isValid = true;
    }

  };


  //Entity: LoanItemsList
  //LoanItemsList.percentage (TextInputBox) View: ModalLoanItemsForm
  task_customValidate_VA_PERCENTAGEPOUVM_313980 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {

    customValidateEventArgs.commons.execServer = false;

    if (((entities.LoanItemsList.minRate || entities.LoanItemsList.minRate == 0) && customValidateEventArgs.currentValue < entities.LoanItemsList.minRate) || ((entities.LoanItemsList.maxRate || entities.LoanItemsList.maxRate == 0) && customValidateEventArgs.currentValue > entities.LoanItemsList.maxRate)) {
      customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_TASADEBIQ_21023')
      customValidateEventArgs.isValid = false;
    } else {
      customValidateEventArgs.isValid = true;
    }

  };


  //Entity: LoanItemsList
  //LoanItemsList.priority (TextInputBox) View: ModalLoanItemsForm
  task_customValidate_VA_PRIORITYDAWHSWY_831980 = (
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
  task_executeCommand_CM_TASSTSFP_3SA = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    executeCommandEventArgs.commons.api.navigation.closeModal({
      resultArgs: {
        index: executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().rowIndex,
        mode: executeCommandEventArgs.commons.api.vc.mode,
        data: entities
      }
    });

  };



  //Start signature to Callback event to CM_TASSTSFP_3SA
  task_executeCommandCallback_CM_TASSTSFP_3SA = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {

    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_FL15_OEC17');
    }
  };


  //ConceptItemsQuery Entity: ConceptItems
  task_executeQuery_Q_CONCTITE_DD65 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let loans: any = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan;
    executeQueryEventArgs.parameters.banco = loans.loanBankID;
    executeQueryEventArgs.parameters.operacion = 'Q';
    executeQueryEventArgs.parameters.tOperacion = loans.operationTypeID;
    executeQueryEventArgs.parameters.moneda = loans.codCurrency;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ConceptItems = true;
  };



  //RateRangeListQuery Entity: RateRangeList
  task_executeQuery_Q_RATEGLSL_WM41 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.RateRangeList = true;
  };


  //ReferentialItemsQuery Entity: ReferentialItems
  task_executeQuery_Q_REFEEAML_BR93 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
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
  //ViewContainer: ModalLoanItemsForm
  task_initData_VC_MODALLOAIS_799445 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
    entities.Loan = initDataEventArgs.commons.api.parentApi()?.parentVc?.model.Loan;

  };



}