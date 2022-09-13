//Entity: SearchProjectionReadjustement
//SearchProjectionReadjustement.dateReadjustment (DateField) View: ProjectionReadjustmentForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
//designer-hint: 2304: Cannot find name 'task_change_VA_DATEREADJUSTNEM_341798'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelChangeEventArgs'.
//designer-hint: 6133: 'entities' is declared but its value is never read.
task_change_VA_DATEREADJUSTNEM_341798 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("ListProjectionReadjustement");
    changedEventArgs.commons.api.viewState.hide('CM_TASSTSPE_87R');
};