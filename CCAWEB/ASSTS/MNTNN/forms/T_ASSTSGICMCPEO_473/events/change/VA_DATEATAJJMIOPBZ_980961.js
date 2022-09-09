//Entity: OneRankFilter
//OneRankFilter.date (DateField) View: OneRankForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_DATEATAJJMIOPBZ_980961 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;

    changedEventArgs.commons.api.grid.removeAllRows("OneRankList");

};
