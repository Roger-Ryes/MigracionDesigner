//Entity: OfficialOfficeTransferFilter
//OfficialOfficeTransferFilter.transferType (RadioButtonList) View: OfficialOfficeTransferForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_TRANSFERTYPETWU_989800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('OfficialOfficeTransferList');
     changedEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

};
