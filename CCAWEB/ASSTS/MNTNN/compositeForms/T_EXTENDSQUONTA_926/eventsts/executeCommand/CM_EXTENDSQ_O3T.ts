// (Button) 
    task_executeCommand_CM_EXTENDSQ_O3T = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = true;
        executeCommandEventArgs.commons.api.viewState.hide('G_EXTENDSUUA_352662');
        executeCommandEventArgs.commons.api.viewState.hide('G_EXTENDSAUQ_349662');
    };