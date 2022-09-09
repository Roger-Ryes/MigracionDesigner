//Entity: ProjectionQuota
    //ProjectionQuota.projectionDate (DateField) View: ProjectionQuotaForm
    
    task.customValidate.VA_FECHAPROYECCOIN_790517 = function( entities, customValidateEventArgs ) {
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