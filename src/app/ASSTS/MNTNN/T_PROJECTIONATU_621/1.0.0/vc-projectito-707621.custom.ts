import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-projectito-707621.model';
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

/* variables locales de T_PROJECTIONATU_621*/

export class VcProjectito707621Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_PROJECTIONATU_621"

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

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ProjectionQuotaForm
  task_initData_VC_PROJECTITO_707621 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

  };


}