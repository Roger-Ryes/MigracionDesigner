//Entity: LoanSearchFilter
    //LoanSearchFilter. (Button) View: LoanSearchForm
    //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
    task_executeCommand_VA_VABUTTONBCZSHFM_208508 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        //executeCommandEventArgs.commons.serverParameters.LoanSearchFilter = true;
    };