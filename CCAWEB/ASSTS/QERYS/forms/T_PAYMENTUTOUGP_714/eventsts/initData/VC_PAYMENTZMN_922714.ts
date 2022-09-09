//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: PaymentQueryForm
    task_initData_VC_PAYMENTZMN_922714 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = false;
        
    };