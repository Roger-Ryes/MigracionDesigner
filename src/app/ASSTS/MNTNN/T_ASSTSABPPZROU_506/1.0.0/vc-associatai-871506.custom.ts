import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-associatai-871506.model';
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

/* variables locales de T_ASSTSABPPZROU_506*/

export class VcAssociatai871506Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSABPPZROU_506"


  // () View: View of AssociateDisassociateForm
  //Evento changeGroup : Evento change para pestañas, collapsible y accordion.
  task_changeGroup_G_ASSOCIATIO_613523 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;
    let nav: any = changedGroupEventArgs.commons.api.navigation;

    if ((changedGroupEventArgs.commons.item.id === 'G_ASSOCIATTA_623523') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'MNTNN',
        taskId: 'T_ASSTSDXZMZWIL_957',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANITEMSS_778957'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_ASSOCIATTA_623523');
    } else if ((changedGroupEventArgs.commons.item.id === 'G_ASSOCIAOTE_595523') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'CMMNS',
        taskId: 'T_AMORTIZATIOON_261',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZAII_339261'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_ASSOCIASIT_808523');
    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: AssociateLoanItemsForm
  task_initData_VC_ASSOCIATAI_871506 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;


    let nav: any = initDataEventArgs.commons.api.navigation;

    //Pantalla: Negociacion rubros

    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'MNTNN',
      taskId: 'T_ASSTSDXZMZWIL_957',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_LOANITEMSS_778957'
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.customDialogParameters = {
      loan: entities.Loan
    };
    nav.registerView('G_ASSOCIATTA_623523');
  };



}