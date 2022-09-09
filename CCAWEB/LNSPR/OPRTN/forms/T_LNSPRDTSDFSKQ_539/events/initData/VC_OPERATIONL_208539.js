
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: OperationLoansForm
task.initData.VC_OPERATIONL_208539 = function (entities, initDataEventArgs){
    var viewState = initDataEventArgs.commons.api.viewState;
    var nav = initDataEventArgs.commons.api.navigation; 
    var params = nav.getCustomDialogParameters();

    initDataEventArgs.commons.api.vc.model.OperationEntity = initDataEventArgs.commons.api.parentVc.model.OperationEntity;
    entities.OperationEntity = initDataEventArgs.commons.api.vc.model.OperationEntity;
    
    initDataEventArgs.commons.execServer = false;

};