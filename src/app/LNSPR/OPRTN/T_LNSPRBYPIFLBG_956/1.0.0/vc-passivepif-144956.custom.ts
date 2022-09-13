import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-passivepif-144956.model';
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

/* variables locales de T_LNSPRBYPIFLBG_956*/

export class VcPassivepif144956Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRBYPIFLBG_956"


  //Entity: OperationEntity
  //OperationEntity.amount (TextInputBox) View: PassivePortfolioCreation
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AMOUNTFVWTEWBDA_761899 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    entities.OperationEntity.amountApproved = changedEventArgs.newValue;

  };


  //Entity: OperationEntity
  //OperationEntity.debtType (DropDownList) View: PassivePortfolioCreation
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DEBTTYPELMRNXVE_296899 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'C') {
      changedEventArgs.commons.api.viewState.disable('VA_REPOSITIONJNYRG_258899');
      changedEventArgs.commons.api.viewState.disable('VA_SUBFINANCINGPJK_364899');

      entities.OperationEntity.formReposition = null;
      entities.OperationEntity.subFinancing = null;

    } else {
      changedEventArgs.commons.api.viewState.enable('VA_REPOSITIONJNYRG_258899');
      changedEventArgs.commons.api.viewState.enable('VA_SUBFINANCINGPJK_364899');
    }

  };


  //Entity: OperationCRUDFormEntity
  //OperationCRUDFormEntity. (Button) View: PassivePortfolioCreation
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VAVABUTTONTWR88_356899 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let grid: any = executeCommandEventArgs.commons.api.grid;
    executeCommandEventArgs.commons.execServer = false;
    if (entities.OperationCRUDFormEntity.fullName &&
      entities.OperationCRUDFormEntity.idNumber) {
      let debtor: any = {
        role: 'F',
        fullName: entities.OperationCRUDFormEntity.fullName,
        idNumber: entities.OperationCRUDFormEntity.idNumber,
        code: entities.OperationCRUDFormEntity.code,
        score: null,
        type: null,
        description: null
      };

      grid.addRow('DebtorEntity', debtor, true);
    }
  };


  // (Button) 
  task_executeCommand_VA_VAVABUTTONWNJI5_490899 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    entities.OperationEntity.financialDestination = "7";
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters. = true;

  };

  //Start signature to Callback event to VA_VAVABUTTONWNJI5_490899
  task_executeCommandCallback_VA_VAVABUTTONWNJI5_490899 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;
      let grid: any = executeCommandCallbackEventArgs.commons.api.grid;

      //MOSTRAR TABS
      viewState.show('VC_WNGSNACMOW_776330'); //Rubros
      viewState.show('VC_UBTCDKFYUM_204785'); //Parametros generales
      viewState.show('VC_VDXJPHMPYC_153633'); //Amortización

      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_CREACIOTT_10843", false, null, this.LNSPR.timer);

      viewState.enable('CM_TLNSPRYT_R8O'); //Button Transmitir

      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27'); //Rubros//Grid
      // TODO - ALE
      executeCommandCallbackEventArgs.commons.api.vc.queries.VA_ITEMWXVWWWSCMKV_983587_values = undefined;
      viewState.refreshData('VA_ITEMWXVWWWSCMKV_983587'); //Rubros//Columna Rubros
      viewState.refreshData('Q_APAGOOOO_YV30'); //Parametros Generales//FormaPagoQuery


      entities.AmortizationFormEntity.numOperation = entities.OperationEntity.operation;
      entities.AmortizationFormEntity.operationType = entities.OperationEntity.typeOperation;
      entities.AmortizationFormEntity.valueDate = entities.OperationEntity.creationDate;
      entities.AmortizationFormEntity.baseInterestCalculation = 'E';

      let gridId: any = 'QV_ECPR_JAA30';
      if (entities.AmortizationTitleEntity.dynamicField1 == null) {
        grid.hideColumn(gridId, 'dynamicField1');
        grid.disabledColumn(gridId, 'dynamicField1');
      } else {
        grid.title(gridId, 'dynamicField1', entities.AmortizationTitleEntity.dynamicField1);
        grid.showColumn(gridId, 'dynamicField1');
      }
      if (entities.AmortizationTitleEntity.dynamicField2 == null) {
        grid.hideColumn(gridId, 'dynamicField2');
        grid.disabledColumn(gridId, 'dynamicField2');
      } else {
        grid.title(gridId, 'dynamicField2', entities.AmortizationTitleEntity.dynamicField2);
        grid.showColumn(gridId, 'dynamicField2');
      }
      if (entities.AmortizationTitleEntity.dynamicField3 == null) {
        grid.hideColumn(gridId, 'dynamicField3');
        grid.disabledColumn(gridId, 'dynamicField3');
      } else {
        grid.title(gridId, 'dynamicField3', entities.AmortizationTitleEntity.dynamicField3);
        grid.showColumn(gridId, 'dynamicField3');
      }
      if (entities.AmortizationTitleEntity.dynamicField4 == null) {
        grid.hideColumn(gridId, 'dynamicField4');
        grid.disabledColumn(gridId, 'dynamicField4');
      } else {
        grid.title(gridId, 'dynamicField4', entities.AmortizationTitleEntity.dynamicField4);
        grid.showColumn(gridId, 'dynamicField4');
      }
      if (entities.AmortizationTitleEntity.dynamicField5 == null) {
        grid.hideColumn(gridId, 'dynamicField5');
        grid.disabledColumn(gridId, 'dynamicField5');
      } else {
        grid.title(gridId, 'dynamicField5', entities.AmortizationTitleEntity.dynamicField5);
        grid.showColumn(gridId, 'dynamicField5');
      }
      if (entities.AmortizationTitleEntity.dynamicField6 == null) {
        grid.hideColumn(gridId, 'dynamicField6');
        grid.disabledColumn(gridId, 'dynamicField6');
      } else {
        grid.title(gridId, 'dynamicField6', entities.AmortizationTitleEntity.dynamicField6);
        grid.showColumn(gridId, 'dynamicField6');
      }
      if (entities.AmortizationTitleEntity.dynamicField7 == null) {
        grid.hideColumn(gridId, 'dynamicField7');
        grid.disabledColumn(gridId, 'dynamicField7');
      } else {
        grid.title(gridId, 'dynamicField7', entities.AmortizationTitleEntity.dynamicField7);
        grid.showColumn(gridId, 'dynamicField7');
      }
      if (entities.AmortizationTitleEntity.dynamicField8 == null) {
        grid.hideColumn(gridId, 'dynamicField8');
        grid.disabledColumn(gridId, 'dynamicField8');
      } else {
        grid.title(gridId, 'dynamicField8', entities.AmortizationTitleEntity.dynamicField8);
        grid.showColumn(gridId, 'dynamicField8');
      }
      if (entities.AmortizationTitleEntity.dynamicField9 == null) {
        grid.hideColumn(gridId, 'dynamicField9');
        grid.disabledColumn(gridId, 'dynamicField9');
      } else {
        grid.title(gridId, 'dynamicField9', entities.AmortizationTitleEntity.dynamicField9);
        grid.showColumn(gridId, 'dynamicField9');
      }
      if (entities.AmortizationTitleEntity.dynamicField10 == null) {
        grid.hideColumn(gridId, 'dynamicField10');
        grid.disabledColumn(gridId, 'dynamicField10');
      } else {
        grid.title(gridId, 'dynamicField10', entities.AmortizationTitleEntity.dynamicField10);
        grid.showColumn(gridId, 'dynamicField10');
      }
      if (entities.AmortizationTitleEntity.dynamicField11 == null) {
        grid.hideColumn(gridId, 'dynamicField11');
        grid.disabledColumn(gridId, 'dynamicField11');
      } else {
        grid.title(gridId, 'dynamicField11', entities.AmortizationTitleEntity.dynamicField11);
        grid.showColumn(gridId, 'dynamicField11');
      }
      if (entities.AmortizationTitleEntity.dynamicField12 == null) {
        grid.hideColumn(gridId, 'dynamicField12');
        grid.disabledColumn(gridId, 'dynamicField12');
      } else {
        grid.title(gridId, 'dynamicField12', entities.AmortizationTitleEntity.dynamicField12);
        grid.showColumn(gridId, 'dynamicField12');
      }
      if (entities.AmortizationTitleEntity.dynamicField13 == null) {
        grid.hideColumn(gridId, 'dynamicField13');
        grid.disabledColumn(gridId, 'dynamicField13');
      } else {
        grid.title(gridId, 'dynamicField13', entities.AmortizationTitleEntity.dynamicField13);
        grid.showColumn(gridId, 'dynamicField13');
      }
      if (entities.AmortizationTitleEntity.dynamicField14 == null) {
        grid.hideColumn(gridId, 'dynamicField14');
        grid.disabledColumn(gridId, 'dynamicField14');
      } else {
        grid.title(gridId, 'dynamicField14', entities.AmortizationTitleEntity.dynamicField14);
        grid.showColumn(gridId, 'dynamicField14');
      }
      if (entities.AmortizationTitleEntity.dynamicField15 == null) {
        grid.hideColumn(gridId, 'dynamicField15');
        grid.disabledColumn(gridId, 'dynamicField15');
      } else {
        grid.title(gridId, 'dynamicField15', entities.AmortizationTitleEntity.dynamicField15);
        grid.showColumn(gridId, 'dynamicField15');
      }
      if (entities.AmortizationTitleEntity.dynamicField16 == null) {
        grid.hideColumn(gridId, 'dynamicField16');
        grid.disabledColumn(gridId, 'dynamicField16');
      } else {
        grid.title(gridId, 'dynamicField16', entities.AmortizationTitleEntity.dynamicField16);
        grid.showColumn(gridId, 'dynamicField16');
      }
      if (entities.AmortizationTitleEntity.dynamicField17 == null) {
        grid.hideColumn(gridId, 'dynamicField17');
        grid.disabledColumn(gridId, 'dynamicField17');
      } else {
        grid.title(gridId, 'dynamicField17', entities.AmortizationTitleEntity.dynamicField17);
        grid.showColumn(gridId, 'dynamicField17');
      }
      if (entities.AmortizationTitleEntity.dynamicField18 == null) {
        grid.hideColumn(gridId, 'dynamicField18');
        grid.disabledColumn(gridId, 'dynamicField18');
      } else {
        grid.title(gridId, 'dynamicField18', entities.AmortizationTitleEntity.dynamicField18);
        grid.showColumn(gridId, 'dynamicField18');
      }
      if (entities.AmortizationTitleEntity.dynamicField19 == null) {
        grid.hideColumn(gridId, 'dynamicField19');
        grid.disabledColumn(gridId, 'dynamicField19');
      } else {
        grid.title(gridId, 'dynamicField19', entities.AmortizationTitleEntity.dynamicField19);
        grid.showColumn(gridId, 'dynamicField19');
      }
      if (entities.AmortizationTitleEntity.dynamicField20 == null) {
        grid.hideColumn(gridId, 'dynamicField20');
        grid.disabledColumn(gridId, 'dynamicField20');
      } else {
        grid.title(gridId, 'dynamicField20', entities.AmortizationTitleEntity.dynamicField20);
        grid.showColumn(gridId, 'dynamicField20');
      }

      viewState.enable('VA_TYPEAMORTIZATIO_965480'); // Validar porque en CPN esta deshabilitado
      //viewState.enable('VA_TYPEUNLOCKLHLSI_978388');//T_LOANSIVBYPNDF_189//no se usa este form
      viewState.disable('VA_TYPEGRACEBHAAVJ_350198'); //Amortizacion//Forma Cobro Gracia

      viewState.disable('VA_VAVABUTTONOH3FZ_246198'); //Amortizacion//Boton Recaulcular
      viewState.disable('VA_VAVABUTTONNPM_2_987198'); //Amortizacion//Boton Guardar
      //viewState.hide('VA_PAYFULLFEEUGWZV_691388');//T_LOANSIVBYPNDF_189//no se usa este form
      //if (entities.OperationEntity.doubleAliquot == 'E') {
      //viewState.disable('VA_TYPELOCKNWHMWNY_541388');//T_LOANSIVBYPNDF_189//no se usa este form
      //}

      //Amortizacion Agregada
      viewState.refreshData('VA_TYPEAMORTIZATTN_681198');

      if (entities.AmortizationFormEntity && entities.AmortizationFormEntity.typeAmortization == 'AGREGADA') {
        viewState.disable('VA_TYPEAMORTIZATTN_681198');
      } else {
        viewState.enable('VA_TYPEAMORTIZATTN_681198');
      }
    }
  };



  //DebtorEntityQuery Entity: 
  task_executeQuery_Q_DEBTORZN_LNSPR = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: PassivePortfolioCreation
  task_initData_VC_PASSIVEPIF_144956 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    entities.OperationEntity.creationDate = new Date(this.cobis.containerScope.preferences.processDate);
    entities.OperationEntity.authDate = new Date(this.cobis.containerScope.preferences.processDate);
    let viewState: any = initDataEventArgs.commons.api.viewState;
    viewState.disable('CM_TINTBNMA_VTA'); //unsee
  };




  //Entity: OperationEntity
  //OperationEntity.official (DropDownList) View: PassivePortfolioCreation
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_OFFICIALFUSJDJB_630899 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

  };

  //Start signature to Callback event to VA_OFFICIALFUSJDJB_630899
  task_loadCatalogCallback_VA_OFFICIALFUSJDJB_630899 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
  ) => {
    let combobox: any = loadCatalogCallbackEventArgs.commons.api.viewState.getData("VA_OFFICIALFUSJDJB_630899");

    for (let i: any = 0; combobox.length > i; i++) {
      if (JSON.parse(sessionStorage.UserName) == combobox[i].value) {
        entities.OperationEntity.official = combobox[i].code;
        break;
      }

    }
  };




  //Entity: OperationEntity
  //OperationEntity.ubication (DropDownList) View: PassivePortfolioCreation
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_UBICATIONEIZYDH_113899 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

  };


  //Start signature to Callback event to VA_UBICATIONEIZYDH_113899
  task_loadCatalogCallback_VA_UBICATIONEIZYDH_113899 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: PassivePortfolioCreation
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;

    // busquda ente
    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
      onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
        let data: any = onCloseModalEventArgs.result.selectedData;
        entities.OperationCRUDFormEntity.code = data.code;
        entities.OperationCRUDFormEntity.fullName = data.name;
        entities.OperationCRUDFormEntity.idNumber = data.documentId;
        onCloseModalEventArgs.commons.api.viewState.disable('VA_FULLNAMEHFSGXTT_914899');
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_LOANSLINSS_962737" && onCloseModalEventArgs.dialogCloseType == 0) {
      entities.OperationEntity.creditLine = onCloseModalEventArgs.result.result.lineaCredito;
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' && onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        entities.GeneralOperationParameters.account = onCloseModalEventArgs.result.response.code;
      }
    }

    // TODO - ALE
    if (onCloseModalEventArgs.closedViewContainerId == 'VC_MODALOPERI_484830' && resultArgs) {
      if (onCloseModalEventArgs.dialogCloseType !== onCloseModalEventArgs.commons.constants.dialogCloseType.NonInteractive) {
        if (resultArgs.mode === onCloseModalEventArgs.commons.constants.mode.Insert) {
          onCloseModalEventArgs.commons.api.grid.addRow('OperationItemsList', resultArgs.data.OperationItemsList, true);
        } else if (resultArgs.mode === onCloseModalEventArgs.commons.constants.mode.Update) {
          onCloseModalEventArgs.commons.api.grid.updateRow('OperationItemsList', resultArgs.index, resultArgs.data.OperationItemsList, true);
        }
      }
    }



  };


  //Entity: OperationCRUDFormEntity
  //OperationCRUDFormEntity.code (TextInputButton) View: PassivePortfolioCreation
  task_textInputButtonEvent_VA_CODEKUNNZDIHWDU_476899 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.customAddress = {
      id: "findCustomer",
      url: "customer/templates/find-customers-tpl.html"
    };
    nav.modalProperties = {
      size: 'lg'
    };
    nav.scripts = [{
      module: this.cobis.modules.CUSTOMER,
      files: [
        "/customer/services/find-customers-srv.js",
        "/customer/controllers/find-customers-ctrl.js"
      ]
    }];
    nav.customDialogParameters = {
      mode: "findJuridicPerson"
    }
  };


  //Entity: OperationEntity
  //OperationEntity.creditLine (TextInputButton) View: PassivePortfolioCreation
  task_textInputButtonEvent_VA_CREDITLINEGFBUT_718899 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let codCliente: any;

    for (let i: any = 0; i < textInputButtonEventArgs.model.DebtorEntity.data().length; i++) {
      if (textInputButtonEventArgs.model.DebtorEntity.data()[i].role == "F") {
        codCliente = textInputButtonEventArgs.model.DebtorEntity.data()[i].code;
        break;
      }
    }

    if (codCliente) {
      //Open Modal
      let nav: any = textInputButtonEventArgs.commons.api.navigation;

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRFYCKEVVP_737',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSLINSS_962737'
      };

      nav.queryParameters = {
        mode: 1
      };
      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };

      nav.customDialogParameters = {
        cliente: codCliente
      };

      //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
      //nav.openModalWindow(args.commons.controlId, null);
      //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
      //nav.openModalWindow(id, args.modelRow);
    } else {
      textInputButtonEventArgs.cancel = true;
      textInputButtonEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEEXIRI_69031", false, null, this.LNSPR.timer);
    }
  };



  //gridRowSelecting QueryView: QV_MV07_KFL31
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_MV07_KFL31 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}