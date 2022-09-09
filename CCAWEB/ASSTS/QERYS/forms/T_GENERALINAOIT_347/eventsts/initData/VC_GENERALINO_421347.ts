//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: GeneralInformationForm
    task_initData_VC_GENERALINO_421347 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {        
        initDataEventArgs.commons.execServer = true;
        
    };