//Entity: SearchProjectionReadjustement
//SearchProjectionReadjustement.dateReadjustment (DateField) View: ProjectionReadjustmentForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_DATEREADJUSTNEM_341798 = function(  entities, changedEventArgs ) {
    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("ListProjectionReadjustement");
    changedEventArgs.commons.api.viewState.hide('CM_TASSTSPE_87R');
};