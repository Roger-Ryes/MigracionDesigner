

//Entity: LoanSearchFilter
//LoanSearchFilter.archivo (FileUpload) View: StatusChangeMassiveForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_ARCHIVOEWNXRMQG_617293 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let fileUpload: any = executeCommandEventArgs.commons.api.viewState.fileUpload('VA_ARCHIVOEWNXRMQG_617293');

    fileUpload.setConfirmUpload(false);
    fileUpload.setRelativePath('loans-files');

    if (entities.LoanSearchFilter.numIdentification) {
        entities.LoanSearchFilter.numIdentification = null;
    }

    if (entities.LoanSearchFilter.operation) {
        entities.LoanSearchFilter.operation = null;
    }

    if (entities.LoanSearchFilter.numProcedures) {
        entities.LoanSearchFilter.numProcedures = null;
    }

    if (entities.LoanSearchFilter.office) {
        entities.LoanSearchFilter.office = null;
    }

    if (entities.LoanSearchFilter.numProcedures) {
        entities.LoanSearchFilter.numProcedures = null;
    }

    if (entities.LoanSearchFilter.codCurrency) {
        entities.LoanSearchFilter.codCurrency = null;
    }

    if (entities.LoanSearchFilter.disbursementDate) {
        entities.LoanSearchFilter.disbursementDate = null;
    }

    if (entities.LoanSearchFilter.state) {
        entities.LoanSearchFilter.state = null;
    }

    if (entities.LoanSearchFilter.migratedOperation) {
        entities.LoanSearchFilter.migratedOperation = null;
    }

    if (entities.LoanSearchFilter.type) {
        entities.LoanSearchFilter.type = null;
    }

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.LoanSearchFilter = true;
};