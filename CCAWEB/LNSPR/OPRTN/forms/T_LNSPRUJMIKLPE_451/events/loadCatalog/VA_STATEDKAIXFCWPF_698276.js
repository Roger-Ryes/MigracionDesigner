

//Entity: LoanSearchFilter
//LoanSearchFilter.state (DropDownList) View: AdvancedSearchLoansForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_STATEDKAIXFCWPF_698276 = function( loadCatalogDataEventArgs ) {

    loadCatalogDataEventArgs.commons.execServer = false;
    var statesAssetsLoan = loadCatalogDataEventArgs.commons.api.vc.model.StatesAssetsLoan;
    var listStatus = null
    if (statesAssetsLoan && statesAssetsLoan.length>0){
        listStatus = []
        statesAssetsLoan.forEach(element => {
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