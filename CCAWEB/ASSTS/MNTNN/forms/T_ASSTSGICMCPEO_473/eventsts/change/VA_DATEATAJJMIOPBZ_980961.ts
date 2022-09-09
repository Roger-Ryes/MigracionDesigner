//Entity: OneRankFilter
//OneRankFilter.date (DateField) View: OneRankForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_DATEATAJJMIOPBZ_980961 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    changedEventArgs.commons.api.grid.removeAllRows("OneRankList");

};
