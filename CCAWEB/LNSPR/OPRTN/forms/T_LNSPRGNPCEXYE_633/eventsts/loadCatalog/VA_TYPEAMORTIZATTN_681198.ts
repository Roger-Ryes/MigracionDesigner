

//Entity: AmortizationFormEntity
//AmortizationFormEntity.typeAmortization (RadioButtonList) View: OperationPaymentDayUpdateForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_TYPEAMORTIZATTN_681198 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    let typeAmortization: any = loadCatalogDataEventArgs.commons.api.vc.model.AmortizationFormEntity.typeAmortization;
    loadCatalogDataEventArgs.commons.execServer = false;
    if(typeAmortization && typeAmortization != 'AGREGADA'){
         return [
        {
            code: 'ALEMANA',
            value: 'Alemana'
        },
        {
            code: 'FRANCESA',
            value: 'Francesa'
        },
        {
            code: 'MANUAL',
            value: 'Manual'
        }
      ];
    }else{
         return [
        {
            code: 'ALEMANA',
            value: 'Alemana'
        },
        {
            code: 'FRANCESA',
            value: 'Francesa'
        },
        {
            code: 'MANUAL',
            value: 'Manual'
        },
        {
            code: 'AGREGADA',
            value: 'Agregada'
        }
      ];
    }
};