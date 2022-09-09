//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: CondonableConceptsListForm
    task_initData_VC_CONDONABPP_384513 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = true;
        //initDataEventArgs.commons.serverParameters.entityName = true;
    };