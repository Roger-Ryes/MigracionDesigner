

//Entity: AggregateDeferredItemsEntity
//AggregateDeferredItemsEntity.item (DropDownList) View: AggregateDeferredItemsForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_1KIRFVKPRWSWCCE_730397 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = true;

};