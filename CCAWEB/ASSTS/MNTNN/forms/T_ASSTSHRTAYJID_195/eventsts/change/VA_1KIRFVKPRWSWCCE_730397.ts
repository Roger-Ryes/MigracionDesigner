//Entity: AggregateDeferredItemsEntity
//AggregateDeferredItemsEntity.item (DropDownList) View: AggregateDeferredItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_1KIRFVKPRWSWCCE_730397 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = true;
    entities.AggregateDeferredItemsEntity.amount = 0 ;

};