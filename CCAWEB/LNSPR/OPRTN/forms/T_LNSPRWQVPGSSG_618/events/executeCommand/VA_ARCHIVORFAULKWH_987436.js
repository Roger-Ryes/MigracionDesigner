//Entity: LoanSearchFilter
//LoanSearchFilter.archivo (FileUpload) View: BatchMassivePaymentsForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_ARCHIVORFAULKWH_987436 = function (entities, executeCommandEventArgs) {

    var fileUpload = executeCommandEventArgs.commons.api.viewState.fileUpload('VA_ARCHIVORFAULKWH_987436');
    fileUpload.setConfirmUpload(false);
    fileUpload.setRelativePath('loans-files');
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.LoanSearchFilter = true;

};
