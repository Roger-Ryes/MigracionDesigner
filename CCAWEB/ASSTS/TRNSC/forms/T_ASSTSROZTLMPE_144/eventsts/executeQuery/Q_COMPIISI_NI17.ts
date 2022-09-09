
//CompaniesListQuery Entity: CompaniesList
task_executeQuery_Q_COMPIISI_NI17 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let model: any = executeQueryEventArgs.commons.api.vc.model;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CompaniesList = true;
    executeQueryEventArgs.parameters.institution = model.CompaniesSearchFilter.institution;
    executeQueryEventArgs.parameters.ruc = model.CompaniesSearchFilter.ruc;
    executeQueryEventArgs.parameters.companyName = model.CompaniesSearchFilter.companyName;
};