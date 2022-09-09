//Entity: AmortizationFormEntity
//AmortizationFormEntity.fixedPayementDay (RadioButtonList) View: OperationPaymentDayUpdateForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_FIXEDPAYEMENYTY_637198 = function( loadCatalogDataEventArgs ) {
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