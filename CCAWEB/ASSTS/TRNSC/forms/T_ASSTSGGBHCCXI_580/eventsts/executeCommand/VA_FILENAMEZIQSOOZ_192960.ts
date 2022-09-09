

//Entity: CompaniesDiscounts
//CompaniesDiscounts.fileName (FileUpload) View: CompaniesDiscountsCreateForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_FILENAMEZIQSOOZ_192960 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.CompaniesDiscounts = true;

};