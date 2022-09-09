import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-paymentsou-371604.model';
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

/* variables locales de T_ASSTSIOIYHVWE_604*/

export class VcPaymentsou371604Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSIOIYHVWE_604"


  //Entity: PaymentGroup
  //PaymentGroup.paymentsType (ComboBox) View: PaymentsFormGroup
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_1MVJRDIJAIBEKBY_880816 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = true;
    if (changedEventArgs.newValue === 'NDAH_FINAN') {
      changedEventArgs.commons.api.viewState.disable('VA_2PVZZFNDSNWIITT_119816');
    } else {
      changedEventArgs.commons.api.viewState.enable('VA_2PVZZFNDSNWIITT_119816');
    }
  };

  //PaymentListGroupClientQuery_BC76 Entity: PaymentListGroupClient
  task_executeQuery_Q_PAYMGPOE_BC76 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters.PaymentListGroupClient = true;
  };

  //Entity: Payment
  //Payment.paymentType (ComboBox) View: PaymentsFormGroup
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_1MVJRDIJAIBEKBY_880816 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = true;
    loadCatalogDataEventArgs.commons.serverParameters.Loan = true;
  };


}