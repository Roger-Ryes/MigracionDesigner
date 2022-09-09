//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.basicInsurance (RadioButtonList) View: RefinanceLoansFilter
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_BASICINSURANCEC_861515 = function (loadCatalogDataEventArgs) {

    loadCatalogDataEventArgs.commons.execServer = false;
    var catalog = [

        {
            code: true,
            value: 'SI'
        },

        {
            code: false,
            value: 'NO'
        },

]

    return catalog;


};