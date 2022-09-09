
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: ChangePayDayForm
task.initData.VC_CHANGEPAYY_935171 = function (entities, initDataEventArgs){
        
    var commons = initDataEventArgs.commons;
    var api = initDataEventArgs.commons.api;
    var parameters = api.navigation.getCustomDialogParameters();
    var viewState = initDataEventArgs.commons.api.viewState;
    
    entities.ChangePayDayEntity.operation = parameters.parameters.loan.loanBankID;
    
    viewState.disable('VA_CURRENTPAYDAYYY_672429');
    
    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
    

};