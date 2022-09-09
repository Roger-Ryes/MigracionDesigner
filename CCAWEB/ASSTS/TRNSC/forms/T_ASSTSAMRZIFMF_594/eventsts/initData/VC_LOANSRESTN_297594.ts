
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansRestructuring
//designer-hint: 2304: Cannot find name 'task_initData_VC_LOANSRESTN_297594'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
task_initData_VC_LOANSRESTN_297594 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
     initDataEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
entities.RestructuringSummary.restructuringType='E';

};