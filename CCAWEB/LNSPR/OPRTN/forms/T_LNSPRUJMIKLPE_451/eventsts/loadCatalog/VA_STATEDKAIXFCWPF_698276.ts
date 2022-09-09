

//Entity: LoanSearchFilter
//LoanSearchFilter.state (DropDownList) View: AdvancedSearchLoansForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_STATEDKAIXFCWPF_698276 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = false;
    let statesAssetsLoan: any = loadCatalogDataEventArgs.commons.api.vc.model.StatesAssetsLoan;
    let listStatus: any = null;
    if (statesAssetsLoan && statesAssetsLoan.length>0){
        listStatus = []
        statesAssetsLoan.forEach((element: any) => {
            if(element.descStatus!=null){
                listStatus.push({
                    code: element.descStatus,
                    value: element.descStatus + ' - ' + element.descStatus
                })
            }
        });
    }
    return listStatus;
};