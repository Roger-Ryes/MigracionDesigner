import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-companiecr-302580.model';
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

/* variables locales de T_ASSTSGGBHCCXI_580*/
let filterError: any = false;

export class VcCompaniecr302580Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSGGBHCCXI_580"
  enableMyCommand = (entities: Model, viewState: any) => {
    if (entities.CompaniesBatch.statusId == 0) { //Sin Generar
      viewState.enable('CM_TASSTSGG_SSC')
      viewState.disable('CM_TASSTSGG_TSR')
      viewState.disable('CM_TASSTSGG_SS5')
      viewState.disable('CM_TASSTSGG_ATT')
      viewState.show('G_COMPANISOU_899960')
      viewState.hide('G_COMPANIOIE_551960')
      viewState.enable('VA_VABUTTONNDPYCNC_590960')
      viewState.disable('VA_FILENAMEZIQSOOZ_192960')
      viewState.disable('VA_EXECUTEONLINEEE_346960')
      viewState.hide('G_COMPANISII_134960')
    } else if (entities.CompaniesBatch.statusId == 1) { //Grabado o Generado
      viewState.disable('CM_TASSTSGG_SSC')
      viewState.enable('CM_TASSTSGG_TSR')
      viewState.disable('CM_TASSTSGG_SS5')
      viewState.enable('CM_TASSTSGG_ATT')
      viewState.show('G_COMPANISOU_899960')
      viewState.show('G_COMPANIOIE_551960')
      viewState.enable('VA_FILENAMEZIQSOOZ_192960')
      viewState.disable('VA_VABUTTONNDPYCNC_590960')
      viewState.disable('VA_EXECUTEONLINEEE_346960')
      viewState.show('G_COMPANISII_134960')
    } else if (entities.CompaniesBatch.statusId == 2) { //Aprobado
      viewState.disable('CM_TASSTSGG_SSC')
      viewState.disable('CM_TASSTSGG_TSR')
      viewState.enable('CM_TASSTSGG_SS5')
      viewState.enable('CM_TASSTSGG_ATT')
      viewState.show('G_COMPANISOU_899960')
      viewState.show('G_COMPANIOIE_551960')
      viewState.disable('VA_FILENAMEZIQSOOZ_192960')
      viewState.disable('VA_VABUTTONNDPYCNC_590960')
      viewState.enable('VA_EXECUTEONLINEEE_346960')
      viewState.show('G_COMPANISII_134960')
    } else if (entities.CompaniesBatch.statusId == 3) { //Procesado
      viewState.disable('CM_TASSTSGG_SSC')
      viewState.disable('CM_TASSTSGG_TSR')
      viewState.disable('CM_TASSTSGG_SS5')
      viewState.disable('CM_TASSTSGG_ATT')
      viewState.show('G_COMPANISOU_899960')
      viewState.show('G_COMPANIOIE_551960')
      viewState.disable('VA_FILENAMEZIQSOOZ_192960')
      viewState.disable('VA_VABUTTONNDPYCNC_590960')
      viewState.disable('VA_EXECUTEONLINEEE_346960')
      viewState.show('G_COMPANISII_134960')
    } else {
      viewState.enable('CM_TASSTSGG_SSC') //Command Grabar 
      viewState.disable('CM_TASSTSGG_TSR') //Command Aprobar
      viewState.disable('CM_TASSTSGG_SS5') //Command Procesar
      viewState.disable('CM_TASSTSGG_ATT') //Command Eliminar
      viewState.show('G_COMPANISOU_899960') //Pestaña Generar Archivo
      viewState.hide('G_COMPANIOIE_551960') //Pestaña Subir Archivo
      viewState.disable('VA_FILENAMEZIQSOOZ_192960') // Cargar Archivo
      viewState.enable('VA_VABUTTONNDPYCNC_590960') //Button Generar
      viewState.disable('VA_EXECUTEONLINEEE_346960') // Procesar En Linea
      viewState.hide('G_COMPANISII_134960') //Grid File List
    }
  }

  clearForm = (entities: Model, opt: any) => {
    if (opt == 1) { //Comando Limpiar
      entities.CompaniesBatch.company = null
      entities.CompaniesBatch.companyName = null
      entities.CompaniesBatch.sequential = null
      entities.CompaniesBatch.statusId = null
      entities.CompaniesBatch.statusName = null
      entities.CompaniesBatch.dateCreate = null
      entities.CompaniesBatch.dateMove = null
      entities.CompaniesBatch.fileError = null
      entities.CompaniesBatch.description = null
      entities.CompaniesBatch.executeOnline = null
      entities.CompaniesBatch.path = null
    } else if (opt == 2) { //Comando Eliminar -- Change Company 
      entities.CompaniesBatch.sequential = null
      entities.CompaniesBatch.statusId = null
      entities.CompaniesBatch.statusName = null
      entities.CompaniesBatch.dateCreate = null
      entities.CompaniesBatch.dateMove = null
      entities.CompaniesBatch.fileError = null
      entities.CompaniesBatch.description = null
      entities.CompaniesBatch.executeOnline = null
      // TODO - ALE
      // entities.CompaniesBatch.path = null
      entities.CompaniesBatch.filePath = null
    } else if (opt == 3) { //Change Lote
      entities.CompaniesBatch.fileError = null
    } else {
      entities.CompaniesBatch.company = null
      entities.CompaniesBatch.companyName = null
      entities.CompaniesBatch.sequential = null
      entities.CompaniesBatch.statusId = null
      entities.CompaniesBatch.statusName = null
      entities.CompaniesBatch.dateCreate = null
      entities.CompaniesBatch.dateMove = null
      entities.CompaniesBatch.fileError = null
      entities.CompaniesBatch.description = null
      entities.CompaniesBatch.executeOnline = null
      entities.CompaniesBatch.path = null
    }
  }

  //Entity: CompaniesDiscountsFileList
  //CompaniesDiscountsFileList.approved (CheckBox) View: CompaniesDiscountsCreateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_COMBOBOXDBBXSFA_201960 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let api: any = changedEventArgs.commons.api;
    let tmpseq: any = changedEventArgs.rowData.sequential;
    if (entities.CompaniesBatch.statusId < 2) {
      changedEventArgs.rowData.approved = !changedEventArgs.rowData.approved
      api.grid.updateRow(
        'CompaniesDiscountsFileList',
        (changedEventArgs.rowData.sequential - 1), {
          approved: changedEventArgs.rowData.approved
        }
      );
    } else {
      api.grid.updateRow(
        'CompaniesDiscountsFileList',
        (tmpseq - 1), {
          approved: changedEventArgs.rowData.approved
        }
      );
    }
  };



  //Entity: CompaniesBatch
  //CompaniesBatch.company (TextInputButton) View: CompaniesDiscountsCreateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_COMPANYQZIUFHFL_215960 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    if (entities.CompaniesBatch.company) {
      this.clearForm(entities, 2)
      this.enableMyCommand(entities, changedEventArgs.commons.api.viewState)
      changedEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
      changedEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
    }
  };



  //Entity: CompaniesBatch
  //CompaniesBatch.sequential (TextInputButton) View: CompaniesDiscountsCreateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SEQUENTIALBATHC_999960 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    if (entities.CompaniesBatch.sequential) {
      this.clearForm(entities, 3)
      this.enableMyCommand(entities, changedEventArgs.commons.api.viewState)
      changedEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
      changedEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
    }
  };




  // (Button) 
  task_executeCommand_CM_TASSTSGG_ATT = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

  };


  //Start signature to Callback event to CM_TASSTSGG_ATT
  task_executeCommandCallback_CM_TASSTSGG_ATT = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      this.clearForm(entities, 1)
      this.enableMyCommand(entities, executeCommandCallbackEventArgs.commons.api.viewState)
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, this.ASSTS.timer);
    }
  };





  // (Button) 
  task_executeCommand_CM_TASSTSGG_SS5 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

  };


  //Start signature to Callback event to CM_TASSTSGG_SS5
  task_executeCommandCallback_CM_TASSTSGG_SS5 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      this.enableMyCommand(entities, executeCommandCallbackEventArgs.commons.api.viewState)
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_DESCUENAS_32493", false, null, this.ASSTS.timer);
    }
  };





  // (Button) 
  task_executeCommand_CM_TASSTSGG_SSC = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let execServer: any = false;
    if (entities.CompaniesDiscountsList != null && entities.CompaniesDiscountsList.length > 0) {
      execServer = true
    }
    executeCommandEventArgs.commons.execServer = execServer;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };


  //Start signature to Callback event to CM_TASSTSGG_SSC
  task_executeCommandCallback_CM_TASSTSGG_SSC = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      this.enableMyCommand(entities, executeCommandCallbackEventArgs.commons.api.viewState)
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAS_48950", false, null, this.ASSTS.timer);
    }
  };





  // (Button) 
  task_executeCommand_CM_TASSTSGG_TSR = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let execServer: any = false;
    if (entities.CompaniesBatch.fileError == 0) {
      if (entities.CompaniesDiscountsFileList.length > 0) {
        execServer = true;
      } else {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.LBL_ASSTS_DEBESELCL_95286", false, null, this.ASSTS.timer);
      }
    } else {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ERRORENAA_77685", false, null, this.ASSTS.timer);
    }
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
    executeCommandEventArgs.commons.execServer = execServer;
  };


  //Start signature to Callback event to CM_TASSTSGG_TSR
  task_executeCommandCallback_CM_TASSTSGG_TSR = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success && entities.CompaniesBatch.fileError == 0) {
      this.enableMyCommand(entities, executeCommandCallbackEventArgs.commons.api.viewState)
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11967", false, null, this.ASSTS.timer);
    } else {
      entities.CompaniesBatch.fileError = 0
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ERRORENAA_77685", false, null, this.ASSTS.timer);
    }
  };



  //Entity: CompaniesBatch
  //CompaniesBatch.companyName (TextLink) View: CompaniesDiscountsCreateForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_COMPANYNAMEXGBS_726960 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = false;
    // TODO - Consultar ALE
    if (entities.CompaniesBatch.company > 0) {
      //open modal
      let nav: any = executeCommandEventArgs.commons.api.navigation;

      nav.label = this.cobis.translate("ASSTS.LBL_ASSTS_EMPRESANI_35782");
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_ASSTSVIKJRAKP_845',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_COMPANYCEE_242845'
      };

      nav.queryParameters = {
        mode: 8
      };
      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };
      nav.customDialogParameters = {
        institution: entities.CompaniesBatch.company,
      };
      nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    }
  };



  //Entity: CompaniesDiscounts
  //CompaniesDiscounts.fileName (FileUpload) View: CompaniesDiscountsCreateForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_FILENAMEZIQSOOZ_192960 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.CompaniesDiscounts = true;

  };


  //Start signature to Callback event to VA_FILENAMEZIQSOOZ_192960
  task_executeCommandCallback_VA_FILENAMEZIQSOOZ_192960 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success && entities.CompaniesBatch.fileError == 0) {
      this.enableMyCommand(entities, executeCommandCallbackEventArgs.commons.api.viewState)
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11967", false, null, this.ASSTS.timer);
    } else {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ERRORENAA_77685", false, null, this.ASSTS.timer);
      entities.CompaniesBatch.fileError = 0
    }
  };





  // (Button) 
  task_executeCommand_VA_VABUTTONFPXLAAR_334960 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    this.clearForm(entities, 1)
    this.enableMyCommand(entities, executeCommandEventArgs.commons.api.viewState)
    executeCommandEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
    executeCommandEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
  };




  // (Button) 
  task_executeCommand_VA_VABUTTONNDPYCNC_590960 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    executeCommandEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
    executeCommandEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
  };


  //CompaniesDiscountsFileListQuery Entity: CompaniesDiscountsFileList
  task_executeQuery_Q_COMPLSIN_RZ93 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let executeServer: any = false;
    if (executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.statusId > 1 &&
      executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company) {
      executeQueryEventArgs.parameters.institution = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company;
      executeQueryEventArgs.parameters.batchId = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.sequential;
      executeServer = true;
    }
    executeQueryEventArgs.commons.execServer = executeServer;
    //executeQueryEventArgs.commons.serverParameters.CompaniesDiscountsFileList = true;
  };


  //Start signature to Callback event to Q_COMPLSIN_RZ93
  task_executeQueryCallback_Q_COMPLSIN_RZ93 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };



  //CompaniesDiscountsListQuery Entity: CompaniesDiscountsList
  task_executeQuery_Q_COMPTOTD_SH98 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let executeServer: any = false;
    if (executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company) {
      executeQueryEventArgs.parameters.institution = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company;
      executeQueryEventArgs.parameters.batchId = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.sequential;
      executeServer = true;
    }
    executeQueryEventArgs.commons.execServer = executeServer;
    //executeQueryEventArgs.commons.serverParameters.CompaniesDiscountsList = true;
  };


  //Start signature to Callback event to Q_COMPTOTD_SH98
  task_executeQueryCallback_Q_COMPTOTD_SH98 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    if (entities.CompaniesDiscountsList != null && entities.CompaniesDiscountsList.length > 0) {
      executeQueryCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_DECUENTES_22154', false, null, this.ASSTS.timer)
      this.enableMyCommand(entities, executeQueryCallbackEventArgs.commons.api.viewState)
    }
  };



  //gridCommand (Button) QueryView: QV_NO93_ONZ78
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_NO93_ONZ78_630 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    let api: any = gridExecuteCommandEventArgs.commons.api;
    if (filterError) {
      api.grid.filter('QV_NO93_ONZ78', {
        field: "errorId",
        operator: "gte",
        value: 0
      });
    } else {
      api.grid.filter('QV_NO93_ONZ78', {
        field: "errorId",
        operator: "gte",
        value: 1
      });
    }
    filterError = !filterError;
    gridExecuteCommandEventArgs.commons.execServer = false;
    //gridExecuteCommandEventArgs.commons.serverParameters.CompaniesDiscountsFileList = true;
  };


  task_gridInitColumnTemplate_QV_NO93_ONZ78 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    if (idColumn === 'approved') {
      return "<div><input type='checkbox' value='#=approved#' #=approved?checked='checked':''# data-bind='value:approved'  ng-click='vc.change(null,\"VA_COMBOBOXDBBXSFA_201960\",this.dataItem,\"approved\", $event)' /></div>";
    }
  };



  task_gridInitEditColumnTemplate_QV_NO93_ONZ78 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    //if(idColumn === 'NombreColumna'){
    //  return "<span></span>";
    //}
    //if(idColumn === 'NombreColumna'){
    //  return  "<span data-bind='text:nombreColumna'><span>" ;
    //}
  };



  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: CompaniesDiscountsCreateForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    let api: any = onCloseModalEventArgs.commons.api;

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_COMPANIEEE_220144' &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        entities.CompaniesBatch.company = onCloseModalEventArgs.result.response.institution;
        entities.CompaniesBatch.companyName = onCloseModalEventArgs.result.response.companyName;
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_COMPANIETA_879161' &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        let data: any = onCloseModalEventArgs.result.response.data;
        entities.CompaniesBatch.sequential = data.sequential;
        entities.CompaniesBatch.statusId = data.statusId;
        entities.CompaniesBatch.statusName = data.statusName;
        entities.CompaniesBatch.dateCreate = data.dateCreate;
        entities.CompaniesBatch.dateMove = data.dateMove;
        entities.CompaniesBatch.description = data.description;
        entities.CompaniesBatch.fileName = data.fileName;
        entities.CompaniesBatch.executeOnline = data.executeOnline;
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_COMPANIECS_544314' &&
      onCloseModalEventArgs.dialogCloseType == 0 && entities.CompaniesBatch.statusId! < 2) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        let data: any = onCloseModalEventArgs.result.response.data;
        data.companyStatusId = (data.companyStatusOk == 'S' ? 1 : 0)
        entities.CompaniesBatch.fileError = 0
        api.grid.updateRow(
          'CompaniesDiscountsFileList',
          (data.sequential - 1),
          data
        );
      }
      api.viewState.hide('G_COMPANIEEC_443960')
    }
  };



  //Entity: CompaniesDiscounts
  //CompaniesDiscounts.company (TextInputButton) View: CompaniesDiscountsCreateForm
  task_textInputButtonEvent_VA_COMPANYQZIUFHFL_215960 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    //open modal
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_ASSTSROZTLMPE_144',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_COMPANIEEE_220144'
    };

    nav.queryParameters = {
      mode: 4095
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };
  };



  //Entity: CompaniesDiscounts
  //CompaniesDiscounts.sequentialBatch (TextInputButton) View: CompaniesDiscountsCreateForm
  task_textInputButtonEvent_VA_SEQUENTIALBATHC_999960 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    //open modal
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_ASSTSSMJDYNLF_161',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_COMPANIETA_879161'
    };
    nav.queryParameters = {
      mode: 8
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };
    nav.customDialogParameters = {
      company: textInputButtonEventArgs.model.CompaniesBatch.company
    };
  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: CompaniesDiscountsCreateForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    this.enableMyCommand(entities, renderEventArgs.commons.api.viewState)
  };


  //gridRowSelecting QueryView: QV_CK98_MLY42
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_CK98_MLY42 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







  //gridRowSelecting QueryView: QV_NO93_ONZ78
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_NO93_ONZ78 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}