//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: PaymentDetailForm
    task_initData_VC_PAYMENTDLE_216234 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = true;
        //initDataEventArgs.commons.serverParameters.entityName = true;
    };