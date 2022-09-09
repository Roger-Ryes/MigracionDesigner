import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-projectiiu-405244.model';
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


/* variables locales de T_LOANHEADERNFI_316*/

/* variables locales de T_PROJECTIONATU_621*/

/* variables locales de T_PROJECTIONNQI_244*/


export class VcProjectiiu405244Custom extends CobisDesignerCustomEvent {

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


  /*"TaskId": "T_LOANHEADERNFI_316",*/
  //Your code here

  //"TaskId": "T_PROJECTIONATU_621"

  //"TaskId": "T_PROJECTIONNQI_244"

  //Entity: ProjectionQuota
  //ProjectionQuota.projectionDays (TextInputBox) View: ProjectionQuotaForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DIASPROYECCIONO_148517 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = true;

  };

  //Entity: ProjectionQuota
  //ProjectionQuota.projectionDate (DateField) View: ProjectionQuotaForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FECHAPROYECCOIN_790517 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = true;

  };

  //Entity: ProjectionQuota
  //ProjectionQuota.projectionDate (DateField) View: ProjectionQuotaForm

  task_customValidate_VA_FECHAPROYECCOIN_790517 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {
    customValidateEventArgs.commons.execServer = false;
    if (!entities.ProjectionQuota.projectionDate) {
      customValidateEventArgs.errorMessage = 'Formato Invalido';
      customValidateEventArgs.isValid = false;
      entities.ProjectionQuota.projectionDate = null;
      entities.ProjectionQuota.projectionDays = null;
    } else {
      customValidateEventArgs.isValid = true;
    }
  };

  // (Button) 
  task_executeCommand_CM_TPROJECT_N0M = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    if (entities.Loan.status == 'NO VIGENTE' || entities.Loan.status == 'CANCELADO' || entities.Loan.status == 'CREDITO' || entities.Loan.status == 'COMEX') {
      executeCommandEventArgs.commons.execServer = false;
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ESTADONPO_17159', false, null, this.ASSTS.timer);
    } else {
      executeCommandEventArgs.commons.execServer = true;

    }
  };

  //Start signature to Callback event to CM_TPROJECT_N0M
  task_executeCommandCallback_CM_TPROJECT_N0M = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    //here your code
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ProjectionQuotaFormMain
  task_initData_VC_PROJECTIIU_405244 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;

    let apiHeader: any = initDataEventArgs.commons.api.cobisPatterns.header;

    initDataEventArgs.commons.api.viewState.hide('VC_XAGJYCIGBI_296244');
    if (initDataEventArgs.commons.api.parentVc?.id == "VC_GENERALIAO_289119") {
      // initDataEventArgs.commons.api.viewState.hide('VC_XAGJYCIGBI_296244');
      apiHeader.loadHeader(false);
      initDataEventArgs.commons.execServer = false;
    } else {
      //initDataEventArgs.commons.api.viewState.show('VC_XAGJYCIGBI_296244');
      apiHeader.loadHeader(true);
      initDataEventArgs.commons.execServer = true;
    }
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: ProjectionQuotaFormMain
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    entities.ProjectionQuota.typeCalculation = 'S';
    let api: any = renderEventArgs.commons.api;
    api.vc.viewState.VA_TIPOUWNWJMGVYCI_648517.disabled = false;

    //FORMAT DATE
    // TODO
    // entities.Loan.startDate = this.ASSTS.Utils.toString(entities.Loan.startDate, JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.endDate = this.ASSTS.Utils.toString(entities.Loan.endDate, JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.feeEndDate = this.ASSTS.Utils.toString(entities.Loan.feeEndDate, JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.lastProcessDate = this.ASSTS.Utils.toString(entities.Loan.lastProcessDate, JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.balanceDue = this.ASSTS.Utils.toString(entities.Loan.balanceDue, "c").substring(1);
    // entities.Loan.amountApproved = this.ASSTS.Utils.toString(entities.Loan.amountApproved, "c").substring(1);
    // entities.Loan.amount = this.ASSTS.Utils.toString(entities.Loan.amount, "c").substring(1);
    // entities.Loan.nextPayment = this.ASSTS.Utils.toString(entities.Loan.nextPayment, "c").substring(1);
    
  };


}