
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: AdvancedSearchLoansForm
task.initData.VC_ADVANCEDAE_402451 = function (entities, initDataEventArgs){
    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
    initDataEventArgs.commons.api.parentVc.args.customParameters.searchDynamicModel = initDataEventArgs.commons.api.vc.model;
};