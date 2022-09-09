import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-extendsquo-800575.model';
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

/* variables locales de T_EXTENDSQUOATT_575*/

export class VcExtendsquo800575Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_EXTENDSQUOATT_575"

  //Entity: ExtendsQuota
  //ExtendsQuota.extendsDate (DateField) View: ExtendsQuotaForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_Spacer2497 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = true;

    // entities.CurrentQuotas.quota = changeEventArgs.commons.api.grid.getSelectedRows("QV_2921_98487")[0].quota;
    //entities.CurrentQuotas.endDate= changeEventArgs.commons.api.grid.getSelectedRows("QV_2921_98487")[0].endDate;
    //changeEventArgs.commons.serverParameters.ExtendsQuota = true;
  };

  //Entity: ExtendsQuota
  //ExtendsQuota.extendsDate (DateField) View: ExtendsQuotaForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_changeCallback_Spacer2497 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    if (entities.ExtendsQuotaExt.length > 0) {
      changeEventArgs.commons.api.viewState.show('G_EXTENDSUUA_352662');
    } else {
      changeEventArgs.commons.api.viewState.hide('G_EXTENDSUUA_352662');
    }

  };

  //Entity: ExtendsQuota
  //ExtendsQuota.extendsDate (DateField) View: ExtendsQuotaForm

  task_customValidate_Spacer2497 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {
    customValidateEventArgs.commons.execServer = false;
    if (!entities.ExtendsQuota.extendsDate) {
      customValidateEventArgs.errorMessage = 'Formato Invalido';
      customValidateEventArgs.isValid = false;
      entities.ExtendsQuota.extendsDate = null;

    } else {
      customValidateEventArgs.isValid = true;
    }

  };

  //CurrentQuotasQuery Entity: 
  task_executeQuery_Q_CURRENAT_2921 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };;

  //ExtendsQuotaExtQuery Entity: 
  task_executeQuery_Q_EXTENDEX_5312 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };

  //gridRowSelecting QueryView: QV_2921_98487
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_2921_98487 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    gridRowSelectingEventArgs.commons.api.viewState.show('G_EXTENDSAUQ_349662');

    // var fecha = new Date(gridRowSelectingEventArgs.commons.api.grid.getSelectedRows("QV_2921_98487")[0].endDate);
    entities.ExtendsQuota.extendsDate = entities.ExtendsQuota.processDate;
    entities.ExtendsQuota.numberQuota = gridRowSelectingEventArgs.rowData.quota;
    entities.ExtendsQuota.expirationDate = gridRowSelectingEventArgs.rowData.endDate;

  };


  //gridRowSelecting QueryView: QV_5312_48027
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_5312_48027 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}