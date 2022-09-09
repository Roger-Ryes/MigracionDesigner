//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ApplyClause
    task_initDataCallback_VC_APPLYCLASS_521533 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    Amortization.showTableAmortization("QV_LM37_VTI26", entities, initDataEventArgs);
        
    };