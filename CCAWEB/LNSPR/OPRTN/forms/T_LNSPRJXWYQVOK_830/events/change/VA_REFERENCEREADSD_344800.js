//Entity: OperationItemsList
//OperationItemsList.referenceReadjustment (DropDownList) View: ModalOperationItems
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_REFERENCEREADSD_344800 = function (entities, changedEventArgs) {

    if (changedEventArgs.newValue && cambio) {
        changedEventArgs.commons.execServer = true;
    } else {
        changedEventArgs.commons.execServer = false;
        cambio = true;
    }

    //changedEventArgs.commons.serverParameters.OperationItemsList = true;

};
