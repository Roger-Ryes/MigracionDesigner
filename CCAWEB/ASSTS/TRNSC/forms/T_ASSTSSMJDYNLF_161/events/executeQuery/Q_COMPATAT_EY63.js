
//CompaniesBatchListQuery Entity: CompaniesBatchList
task.executeQuery.Q_COMPATAT_EY63 = function(executeQueryEventArgs){
    var execServer = false;
    var api = executeQueryEventArgs.commons.api;
    var mode = executeQueryEventArgs.commons.constants.mode;
    if(api.vc.mode == mode.Query){
        if ( api.parentVc && (api.parentVc.id == 'VC_COMPANIECR_302580')) {
            var nav = api.navigation;
            if(nav.getCustomDialogParameters()){
                executeQueryEventArgs.parameters.institution = nav.getCustomDialogParameters().company;
                execServer = true;
            }
        }
    }
    executeQueryEventArgs.commons.execServer = execServer;
    //executeQueryEventArgs.commons.serverParameters.CompaniesBatchList = true;
};