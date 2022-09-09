//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.basicInsurance (RadioButtonList) View: RefinanceLoansFilter
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
//designer-hint: 2304: Cannot find name 'task_loadCatalog_VA_BASICINSURANCEC_861515'.
//designer-hint: 2304: Cannot find name 'CobisModelLoadCatalogEventArgs'.
task_loadCatalog_VA_BASICINSURANCEC_861515 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = false;

    let catalog: any = [

        {
            code: true,
            value: 'SI'
        },

        {
            code: false,
            value: 'NO'
        },

    ];

    return catalog;
};