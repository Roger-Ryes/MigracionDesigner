//Entity: AggregateDeferredItemsEntity
//AggregateDeferredItemsEntity.item (DropDownList) View: AggregateDeferredItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_1KIRFVKPRWSWCCE_730397 = function(  entities, changedEventArgs ) {
    changedEventArgs.commons.execServer = true;
    entities.AggregateDeferredItemsEntity.amount = 0 ;

};