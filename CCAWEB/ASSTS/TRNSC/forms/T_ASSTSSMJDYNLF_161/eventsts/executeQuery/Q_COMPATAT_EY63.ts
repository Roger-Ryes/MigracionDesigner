
//CompaniesBatchListQuery Entity: CompaniesBatchList
task_executeQuery_Q_COMPATAT_EY63 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let execServer: any = false;
    let api: any = executeQueryEventArgs.commons.api;
    let mode: any = executeQueryEventArgs.commons.constants.mode;
    if(api.vc.mode == mode.Query){
        if ( api.parentVc && (api.parentVc.id == 'VC_COMPANIECR_302580')) {
            let nav: any = api.navigation;
            if(nav.getCustomDialogParameters()){
                executeQueryEventArgs.parameters.institution = nav.getCustomDialogParameters().company;
                execServer = true;
            }
        }
    }
    executeQueryEventArgs.commons.execServer = execServer;
    //executeQueryEventArgs.commons.serverParameters.CompaniesBatchList = true;
};