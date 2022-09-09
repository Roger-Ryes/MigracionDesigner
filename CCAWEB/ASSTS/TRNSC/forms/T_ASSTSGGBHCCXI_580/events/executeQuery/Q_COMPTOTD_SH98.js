
//CompaniesDiscountsListQuery Entity: CompaniesDiscountsList
task.executeQuery.Q_COMPTOTD_SH98 = function(executeQueryEventArgs){
    var executeServer = false;
    if (executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company) {
        executeQueryEventArgs.parameters.institution = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company;    
        executeQueryEventArgs.parameters.batchId = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.sequential;
        executeServer = true;
    }
    executeQueryEventArgs.commons.execServer = executeServer;
    //executeQueryEventArgs.commons.serverParameters.CompaniesDiscountsList = true;
};