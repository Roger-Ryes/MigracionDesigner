//Entity: 
//.sign (ComboBox) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_SIGNKLSEFBDNEKD_114423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.ReadjustmentMEntity.factor = null;
    changedEventArgs.commons.execServer = false;
};