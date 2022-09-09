
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: AggregateDeferredItemsForm
task.initData.VC_AGGREGATRT_463195 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
        
    var api = initDataEventArgs.commons.api;
    var parameters = api.navigation.getCustomDialogParameters();
    var viewState = initDataEventArgs.commons.api.viewState;
    
    entities.AggregateDeferredItemsEntity.operation = parameters.parameters.loan.loanBankID;
    
    viewState.disable('VA_8482SGVAKLBEUXQ_566397'); //monto 
    viewState.disable('CM_TASSTSHR_TNS');  //transmitir

};