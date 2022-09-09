


// (Button) 
task.executeCommand.CM_TASSTSBL__S7 = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    var api = executeCommandEventArgs.commons.api;
    var mode = executeCommandEventArgs.commons.constants.mode;
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