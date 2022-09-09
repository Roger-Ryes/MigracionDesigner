//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: CondonationDetailForm
    task_initDataCallback_VC_CONDONATON_778532 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = false;
        //entities.ServerParameter.condonationPercentage = 100;
        if (entities.ServerParameter.condonationPercentage == null || entities.ServerParameter.condonationPercentage == 0) 
            entities.ServerParameter.condonationPercentage = 100;
    };