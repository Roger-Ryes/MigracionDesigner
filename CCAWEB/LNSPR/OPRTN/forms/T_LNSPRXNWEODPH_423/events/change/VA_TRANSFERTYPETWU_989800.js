//Entity: OfficialOfficeTransferFilter
//OfficialOfficeTransferFilter.transferType (RadioButtonList) View: OfficialOfficeTransferForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TRANSFERTYPETWU_989800 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('OfficialOfficeTransferList');
     changedEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

};
