
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansRestructuring
task.initData.VC_LOANSRESTN_297594 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
     initDataEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
entities.RestructuringSummary.restructuringType='E';

};