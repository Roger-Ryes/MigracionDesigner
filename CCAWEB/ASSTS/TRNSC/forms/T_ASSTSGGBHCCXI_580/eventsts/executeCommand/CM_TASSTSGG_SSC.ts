


// (Button) 
task_executeCommand_CM_TASSTSGG_SSC = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let execServer: any = false;
    if(entities.CompaniesDiscountsList != null && entities.CompaniesDiscountsList.length > 0){
        execServer = true
    }
    executeCommandEventArgs.commons.execServer = execServer;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
};