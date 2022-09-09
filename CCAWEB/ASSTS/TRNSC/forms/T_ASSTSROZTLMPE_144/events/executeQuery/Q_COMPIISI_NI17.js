
//CompaniesListQuery Entity: CompaniesList
task.executeQuery.Q_COMPIISI_NI17 = function(executeQueryEventArgs){

    var model = executeQueryEventArgs.commons.api.vc.model;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CompaniesList = true;
    executeQueryEventArgs.parameters.institution = model.CompaniesSearchFilter.institution;
    executeQueryEventArgs.parameters.ruc = model.CompaniesSearchFilter.ruc;
    executeQueryEventArgs.parameters.companyName = model.CompaniesSearchFilter.companyName;
};