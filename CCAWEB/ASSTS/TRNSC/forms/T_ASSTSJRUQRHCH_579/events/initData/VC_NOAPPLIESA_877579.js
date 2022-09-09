
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: NoAppliedPaymentsForm
task.initData.VC_NOAPPLIESA_877579 = function (entities, initDataEventArgs){

    var commons = initDataEventArgs.commons;
    var api=initDataEventArgs.commons.api;
    var parameters=api.navigation.getCustomDialogParameters();
    
    entities.Loan = parameters.parameters.loan;
    
    initDataEventArgs.commons.execServer = false;

};