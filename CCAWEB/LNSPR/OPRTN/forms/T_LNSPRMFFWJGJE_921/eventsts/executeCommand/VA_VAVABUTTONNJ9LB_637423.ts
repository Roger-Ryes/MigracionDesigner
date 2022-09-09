

//Entity: LoanSearchFilter
//LoanSearchFilter. (Button) View: LoanSearchForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_VAVABUTTONNJ9LB_637423 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
executeCommandEventArgs.commons.api.viewState.show('G_LOANSEAHHC_140423');
    
    executeCommandEventArgs.commons.execServer = false;
    //executeCommandEventArgs.commons.serverParameters.LoanSearchFilter = true;

};