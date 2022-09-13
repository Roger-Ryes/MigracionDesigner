import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loansaleva-321572.model';
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

/* variables locales de T_LNSPRIIYONZUA_572*/
let uploadedFile: any = false;

export class VcLoansaleva321572Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRIIYONZUA_572"




  //showGridRowDetailIcon QueryView: QV_PT51_RHB11
  //Evento ShowGridRowDetailIcon: Evento que define si presentar u ocultar el ícono de detalle de grilla
  task_showGridRowDetailIcon_QV_PT51_RHB11 = (
    entities: Model,
    showGridRowDetailIconEventArgs: CobisModelGridShowRowDetailIconEventArgs
  ) => {
    return true;
  };





  // (Button) 
  task_executeCommand_CM_TLNSPRII_6S6 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
  };


  //Start signature to Callback event to CM_TLNSPRII_6S6
  task_executeCommandCallback_CM_TLNSPRII_6S6 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;
    let error: any = false;
    let detailList: any = entities.LoanSaleDetailList;
    let loanSaleList: any = entities.LoanSaleList;

    if (executeCommandCallbackEventArgs.success) {
      viewState.disable('CM_TLNSPRII_6S6'); //boton guardar

      if (entities.LoanSaleDetailList && entities.LoanSaleDetailList) {
        for (let i: any = 0; i < detailList.length; i++) {
          let det: any = detailList[i];
          if ('ERR' == det.state) {
            error = true;
            break;
          }
        }
      }

      if (entities.LoanSaleList && entities.LoanSaleList) {
        if (loanSaleList[0].state != 'ING') {
          executeCommandCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[0], 'VA_GRIDROWCOMMMNAA_525584');
        }
      }

      if (error) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEO_37894", false, null, timer);
      } else {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSMION_38404", false, null, timer);
      }
    }
  };


  // (Button) 
  task_executeCommand_CM_TLNSPRII_7SR = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = undefined;

    if (this.cobis.container.tabs.getCurrentTab().name != undefined) {
      nameAux = this.cobis.container.tabs.getCurrentTab().name;
    } else {
      nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_VENTACAET_55114");
    }

    this.cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
  };



  //Entity: LoanSaleSearchEntity
  //LoanSaleSearchEntity.archive (FileUpload) View: LoanSaleForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_6427AZGDIHWLKXG_205584 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let fileUpload: any = executeCommandEventArgs.commons.api.viewState.fileUpload('VA_6427AZGDIHWLKXG_205584');
    let viewState: any = executeCommandEventArgs.commons.api.viewState;

    //modificación de parámetros en caso de necesitarlo
    //fileUpload.setMaxSizeInMB(20);
    fileUpload.setConfirmUpload(false);
    fileUpload.setRelativePath('loans-files');
    viewState.disable('VA_VABUTTONFVNJKMP_639584');

    executeCommandEventArgs.commons.execServer = true;
  };


  //Start signature to Callback event to VA_6427AZGDIHWLKXG_205584
  task_executeCommandCallback_VA_6427AZGDIHWLKXG_205584 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;

    if (executeCommandCallbackEventArgs.success) {
      entities.LoanSaleList[0].user = JSON.parse(sessionStorage.UserName);
      viewState.enable('CM_TLNSPRII_6S6'); //boton guardar
      executeCommandCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[0], 'VA_GRIDROWCOMMMNAA_525584');
      uploadedFile = true;
    }
  };




  //Entity: LoanSaleFilter
  //LoanSaleFilter. (Button) View: LoanSaleForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VABUTTONFVNJKMP_639584 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let viewState: any = executeCommandEventArgs.commons.api.viewState;
    viewState.disable('CM_TLNSPRII_6S6'); //boton guardar

    executeCommandEventArgs.commons.execServer = false;
  };


  //LoanSaleHeaderEntityQuery Entity: LoanSaleHeaderEntity
  task_executeQuery_Q_LOANAELE_GZ51 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let viewState: any = executeQueryEventArgs.commons.api.viewState;
    uploadedFile = false;
    viewState.disable('VA_6427AZGDIHWLKXG_205584'); //cargar archivo
    viewState.hide('CM_TLNSPRII_6S6'); //boton guardar

    executeQueryEventArgs.parameters.company = executeQueryEventArgs.commons.api.vc.model.LoanSaleFilter.company;

    //Paginación
    executeQueryEventArgs.parameters.pagSec = 0;

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_PT51_RHB11', ['sequential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.pagSec = executeQueryEventArgs.parameters.sequential;
    }
    executeQueryEventArgs.commons.execServer = true;
  };


  //Start signature to Callback event to Q_LOANAELE_GZ51
  task_executeQueryCallback_Q_LOANAELE_GZ51 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {

    if (entities.LoanSaleList.length > 0) {
      for (let i: any = 0; i < entities.LoanSaleList.length; i++) {
        if (entities.LoanSaleList.data()[i].state != 'ING' && entities.LoanSaleList[i].state != 'PRO' &&
          entities.LoanSaleList[i].state != 'ERR') {
          executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[i], 'delete');
        }

        if (entities.LoanSaleList[i].state != 'ING') {
          executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[i], 'VA_GRIDROWCOMMMNAA_525584');
        }
      }
    }
  };



  //LoanSaleDetailEntityQuery Entity: LoanSaleDetailEntity
  task_executeQuery_Q_LOANELLL_AR48 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
  };


  //Entity: LoanSaleList
  //LoanSaleList. (Button) View: LoanSaleForm
  task_gridRowCommand_VA_GRIDROWCOMMMNAA_525584 = async (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {
    let saleEntity: any = gridRowCommandEventArgs.rowData;

    if (uploadedFile) {
      entities.LoanSaleFilter.fileUploaded = true;
    } else {
      entities.LoanSaleFilter.fileUploaded = false;
    }

    let response: any = await firstValueFrom(
      gridRowCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_SEPROCEAE_46460")
    );

    switch (response.buttonIndex) {
      case 0: //cancel
        gridRowCommandEventArgs.commons.execServer = false;
        break;
      case 1: //accept
        if (saleEntity) {
          entities.LoanSaleFilter.sequential = saleEntity.sequential;
          gridRowCommandEventArgs.commons.execServer = true;
        }
        return true;
        break;
    }
  };


  //Start signature to Callback event to VA_GRIDROWCOMMMNAA_525584
  task_gridRowCommandCallback_VA_GRIDROWCOMMMNAA_525584 = (
    entities: Model,
    gridRowCommandCallbackEventArgs: CobisModelGridRowCommandCallbackEventArgs
  ) => {
    if (gridRowCommandCallbackEventArgs.success) {
      gridRowCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSACEC_84918", false, null, timer);
      if (!uploadedFile) {
        gridRowCommandCallbackEventArgs.commons.api.grid.refresh('QV_PT51_RHB11');
      } else {
        gridRowCommandCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[0], 'VA_GRIDROWCOMMMNAA_525584');
      }
    }
  };



  //gridInitDetailTemplate QueryView: QV_PT51_RHB11
  //
  task_gridInitDetailTemplate_QV_PT51_RHB11 = (
    entities: Model,
    gridInitDetailTemplateEventArgs: CobisModelGridInitDetailTemplateEventArgs
  ) => {
    gridInitDetailTemplateEventArgs.commons.execServer = false;

    //gridInitDetailTemplate
    let nav: any = gridInitDetailTemplateEventArgs.commons.api.navigation;
    nav.address = {
      moduleId: 'LNSPR',
      subModuleId: 'OPRTN',
      taskId: 'T_LNSPRSZYOCYQK_511',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_LOANSALEDE_341511'
    };

    nav.queryParameters = {
      mode: 8
    };

    nav.customDialogParameters = {
      loanSale: gridInitDetailTemplateEventArgs.modelRow,
      loanSaleDetail: entities.LoanSaleDetailList,
      uploadedFile: uploadedFile
    };
    nav.openDetailTemplate('QV_PT51_RHB11', gridInitDetailTemplateEventArgs.modelRow);
  };








  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoanSaleForm
  task_initData_VC_LOANSALEVA_321572 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    let viewState: any = initDataEventArgs.commons.api.viewState;
    viewState.disable('CM_TLNSPRII_6S6'); //boton guardar
    viewState.hide('G_LOANSALEEE_654584'); //grid detail
  };


  //gridRowDeleting QueryView: QV_PT51_RHB11
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_PT51_RHB11 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
  };







  //Start signature to Callback event to QV_PT51_RHB11
  task_gridRowDeletingCallback_QV_PT51_RHB11 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {

    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.LBL_LNSPR_ELIMINATR_48672", false, null, timer);
    }
  };



  //gridRowSelecting QueryView: QV_PT51_RHB11
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_PT51_RHB11 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
  };







}