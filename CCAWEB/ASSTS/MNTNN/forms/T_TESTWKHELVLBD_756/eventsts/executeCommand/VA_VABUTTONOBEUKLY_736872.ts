//Entity: OtherCharges
    //OtherCharges. (Button) View: ProjectOtherCharges
    //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
    task_executeCommand_VA_VABUTTONOBEUKLY_736872 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        
    };