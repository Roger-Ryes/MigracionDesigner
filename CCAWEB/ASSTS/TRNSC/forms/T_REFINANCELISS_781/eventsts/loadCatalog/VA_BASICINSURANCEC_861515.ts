//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.basicInsurance (RadioButtonList) View: RefinanceLoansFilter
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
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