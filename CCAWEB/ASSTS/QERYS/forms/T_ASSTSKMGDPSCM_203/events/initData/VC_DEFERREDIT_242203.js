
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: DeferredItemsForm
task.initData.VC_DEFERREDIT_242203 = function (entities, initDataEventArgs){

    entities.Loan = initDataEventArgs.commons.api.parentVc.model.Loan;
    
    initDataEventArgs.commons.execServer = true;

};