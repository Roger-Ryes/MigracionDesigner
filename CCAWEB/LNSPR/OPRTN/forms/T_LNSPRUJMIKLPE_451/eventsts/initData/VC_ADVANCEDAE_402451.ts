
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: AdvancedSearchLoansForm
task_initData_VC_ADVANCEDAE_402451 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
    initDataEventArgs.commons.api.parentVc!.args.customParameters.searchDynamicModel = initDataEventArgs.commons.api.vc.model;
};