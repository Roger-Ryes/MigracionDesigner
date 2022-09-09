


// (Button) 
task_executeCommand_CM_TASSTSGG_TSR = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let execServer: any = false;
    if(entities.CompaniesBatch.fileError==0){
        if(entities.CompaniesDiscountsFileList.length>0){
            execServer = true;
        }else{
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.LBL_ASSTS_DEBESELCL_95286", false, null, this.ASSTS.timer);
        }
    }else{
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ERRORENAA_77685", false, null, this.ASSTS.timer);
    }
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
    executeCommandEventArgs.commons.execServer = execServer;
};