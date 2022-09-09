//Entity: LoanSearchFilter
//LoanSearchFilter.archivo (FileUpload) View: BatchMassivePaymentsForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_ARCHIVORFAULKWH_987436 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let fileUpload: any = executeCommandEventArgs.commons.api.viewState.fileUpload('VA_ARCHIVORFAULKWH_987436');
    fileUpload.setConfirmUpload(false);
    fileUpload.setRelativePath('loans-files');
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.LoanSearchFilter = true;
};
