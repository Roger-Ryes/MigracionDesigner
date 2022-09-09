//Entity: Entity5
    //Entity5. (Button) View: LoanSearchCustomerForm
    //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
    task_executeCommand_VA_VABUTTONAJZAEAN_647599 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = true;
        //executeCommandEventArgs.commons.serverParameters.Entity5 = true;
    };