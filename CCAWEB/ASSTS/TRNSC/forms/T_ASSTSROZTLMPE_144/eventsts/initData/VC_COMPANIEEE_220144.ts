
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: CompaniesSearchForm
task_initData_VC_COMPANIEEE_220144 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    //initDataEventArgs.commons.serverParameters.entityName = true;
};