//Entity: TwoRangesFilter
//TwoRangesFilter.date (DateField) View: TwoRangesForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_DATEAMIJYBUPQWJ_858861 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("TwoRangesList");

};
