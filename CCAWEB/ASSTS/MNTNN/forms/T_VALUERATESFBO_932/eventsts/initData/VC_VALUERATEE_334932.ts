//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ValueRates
    task_initData_VC_VALUERATEE_334932 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
        //initDataEventArgs.commons.serverParameters.entityName = true;
    };