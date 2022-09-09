//Entity: SearchProjectionReadjustement
//SearchProjectionReadjustement.dateReadjustment (DateField) View: ProjectionReadjustmentForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_DATEREADJUSTNEM_341798 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("ListProjectionReadjustement");
    changedEventArgs.commons.api.viewState.hide('CM_TASSTSPE_87R');
};