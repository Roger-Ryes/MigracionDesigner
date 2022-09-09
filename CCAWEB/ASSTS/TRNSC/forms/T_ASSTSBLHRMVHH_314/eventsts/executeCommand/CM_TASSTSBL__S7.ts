


// (Button) 
task_executeCommand_CM_TASSTSBL__S7 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let api: any = executeCommandEventArgs.commons.api;
    let mode: any = executeCommandEventArgs.commons.constants.mode;
    if(api.vc.mode == mode.Update){
        if ( api.parentVc && api.parentVc.id == 'VC_COMPANIECR_302580') {
            entities.CompaniesDiscountsFileList.errorDesc = "";
            entities.CompaniesDiscountsFileList.errorId = 0;
            api.vc.closeModal({
                response: {
                    data: entities.CompaniesDiscountsFileList
                }
            });
        }
    }
};