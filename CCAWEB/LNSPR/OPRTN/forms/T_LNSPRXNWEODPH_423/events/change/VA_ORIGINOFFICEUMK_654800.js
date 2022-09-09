

//Entity: OfficialOfficeTransferFilter
//OfficialOfficeTransferFilter.originOffice (DropDownList) View: OfficialOfficeTransferForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ORIGINOFFICEUMK_654800 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('OfficialOfficeTransferList');
    changedEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

};