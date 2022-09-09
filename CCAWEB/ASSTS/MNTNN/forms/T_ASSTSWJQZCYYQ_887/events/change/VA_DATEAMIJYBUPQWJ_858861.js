//Entity: TwoRangesFilter
//TwoRangesFilter.date (DateField) View: TwoRangesForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_DATEAMIJYBUPQWJ_858861 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("TwoRangesList");

};
