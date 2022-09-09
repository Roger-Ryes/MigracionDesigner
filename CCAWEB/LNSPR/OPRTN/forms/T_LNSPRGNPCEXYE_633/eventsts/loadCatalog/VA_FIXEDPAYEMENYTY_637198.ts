//Entity: AmortizationFormEntity
//AmortizationFormEntity.fixedPayementDay (RadioButtonList) View: OperationPaymentDayUpdateForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_FIXEDPAYEMENYTY_637198 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = false;
    return [
        {
            code: 'S',
            value: 'Si'
        },
        {
            code: 'N',
            value: 'No'
        }
    ];
};