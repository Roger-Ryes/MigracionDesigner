//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: Payment maintenance
    task_initData_VC_PAYMENTMNE_706586 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = false;
        //initDataEventArgs.commons.serverParameters.entityName = true;
    };