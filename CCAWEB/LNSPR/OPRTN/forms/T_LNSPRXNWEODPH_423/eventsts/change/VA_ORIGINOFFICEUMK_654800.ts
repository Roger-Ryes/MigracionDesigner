

//Entity: OfficialOfficeTransferFilter
//OfficialOfficeTransferFilter.originOffice (DropDownList) View: OfficialOfficeTransferForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_ORIGINOFFICEUMK_654800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('OfficialOfficeTransferList');
    changedEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

};