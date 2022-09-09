import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loansopetn-404268.model';
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

/* variables locales de T_LNSPRSHDBNXGH_268*/

let valorAprobado: any = 0;

let valorOperacion: any = 0; //Vaildar solo se utilizn el initDate CallBack
let fechaCreacion: any = null; //Vaildar solo se utilizn el initDate CallBack
let codOperacion: any = 0; //Vaildar solo se utilizn el initDate CallBack

export class VcLoansopetn404268Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRSHDBNXGH_268"



  //SyndicatedListDefinitiveQuery Entity: SyndicatedList
  task_executeQuery_Q_SYNDCEAL_LH97 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    let model: any = executeQueryEventArgs.commons.api.vc.model;
    executeQueryEventArgs.parameters.bankS = model.OperationEntity.operation ? model.OperationEntity.operation : null;


    if (model.OperationEntity.operation && model.OperationEntity.syndicated) {
      executeQueryEventArgs.commons.api.vc.viewState.G_LOANSOPENT_770518.visible = true;
      executeQueryEventArgs.commons.api.viewState.show('QV_GM97_JJJ11');
      executeQueryEventArgs.commons.execServer = true;

    } else {

      executeQueryEventArgs.commons.execServer = false;
    }
  };


  //Start signature to Callback event to Q_SYNDCEAL_LH97
  task_executeQueryCallback_Q_SYNDCEAL_LH97 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoansOperationUpdate
  task_initData_VC_LOANSOPETN_404268 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let parentVc: any = initDataEventArgs.commons.api.parentVc;

    if (parentVc && parentVc.id == 'VC_LOANSEARCH_100921') {
      entities.GeneralInformation.numeroOperacion = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loanBankID;
    } else {
      entities.GeneralInformation.numeroOperacion = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().operation;
    }
    if (parentVc && parentVc.id == 'VC_LOANPARTIR_265871') {
      initDataEventArgs.commons.api.viewState.disable('VA_SYNDICATEDRJKWH_210518');
      initDataEventArgs.commons.api.viewState.hide('QV_GM97_JJJ11');
    }
    initDataEventArgs.commons.execServer = true;
    initDataEventArgs.commons.serverParameters.GeneralInformation = true;
    initDataEventArgs.commons.serverParameters.OperationEntity = true;
    initDataEventArgs.commons.serverParameters.AmortizationFormEntity = true;
  };

  //Start signature to Callback event to VC_LOANSOPETN_404268
  task_initDataCallback_VC_LOANSOPETN_404268 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    let parentVc: any = initDataCallbackEventArgs.commons.api.parentVc;
    let model: any = initDataCallbackEventArgs.commons.api.vc.model;

    if (initDataCallbackEventArgs.success) {
      valorAprobado = entities.OperationEntity.amountApproved;
      valorOperacion = entities.OperationEntity.amount;
      fechaCreacion = entities.OperationEntity.creationDate;
      codOperacion = entities.OperationEntity.codOperation;

      if (parentVc && parentVc.id === 'VC_LOANPARTIR_265871') {
        if (!model.OperationEntity.syndicated) {
          initDataCallbackEventArgs.commons.api.vc.viewState.G_LOANSOPENT_770518.visible = false;
          initDataCallbackEventArgs.commons.api.viewState.hide('QV_GM97_JJJ11');
        }
      }
    }
  };



  //Entity: OperationEntity
  //OperationEntity.official (DropDownList) View: LoansOperationUpdate
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_OFFICIALWGEPOTD_393518 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

  };


}