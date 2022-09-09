//Entity: ProjectionQuota
    //ProjectionQuota.projectionDate (DateField) View: ProjectionQuotaForm
    
    task_customValidate_VA_FECHAPROYECCOIN_790517 = (
        entities: Model,
        customValidateEventArgs: CobisModelCustomValidateEventArgs
    ) => {
        customValidateEventArgs.commons.execServer = false;
        if (!entities.ProjectionQuota.projectionDate) {
            customValidateEventArgs.errorMessage = 'Formato Invalido';
            customValidateEventArgs.isValid = false;
            entities.ProjectionQuota.projectionDate = null;
            entities.ProjectionQuota.projectionDays = null;
        } else {
            customValidateEventArgs.isValid = true;
        }
    };