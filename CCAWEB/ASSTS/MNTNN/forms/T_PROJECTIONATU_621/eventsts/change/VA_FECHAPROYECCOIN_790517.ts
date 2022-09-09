//Entity: ProjectionQuota
    //ProjectionQuota.projectionDate (DateField) View: ProjectionQuotaForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_FECHAPROYECCOIN_790517 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = true;
        
    };