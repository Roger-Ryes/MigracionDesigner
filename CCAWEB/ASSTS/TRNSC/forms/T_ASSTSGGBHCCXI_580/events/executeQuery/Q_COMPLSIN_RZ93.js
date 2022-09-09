
//CompaniesDiscountsFileListQuery Entity: CompaniesDiscountsFileList
task.executeQuery.Q_COMPLSIN_RZ93 = function(executeQueryEventArgs){
    var executeServer = false;
    if (executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.statusId > 1 &&
        executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company) {
        executeQueryEventArgs.parameters.institution = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company;
        executeQueryEventArgs.parameters.batchId = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.sequential;
        executeServer = true;
    }
    executeQueryEventArgs.commons.execServer = executeServer;
    //executeQueryEventArgs.commons.serverParameters.CompaniesDiscountsFileList = true;
};