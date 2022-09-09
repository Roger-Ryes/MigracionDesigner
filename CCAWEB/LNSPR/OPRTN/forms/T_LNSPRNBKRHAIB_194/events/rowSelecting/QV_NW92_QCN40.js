//gridRowSelecting QueryView: QV_NW92_QCN40
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_NW92_QCN40 = function (entities, gridRowSelectingEventArgs) {

    gridRowSelectingEventArgs.commons.execServer = false;
    if (gridRowSelectingEventArgs.commons.api.vc.mode == gridRowSelectingEventArgs.commons.constants.mode.Update) {
        entities.Members.editionMode = gridRowSelectingEventArgs.commons.constants.mode.Update;
        gridRowSelectingEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_EDICINHAI_74003', false, null, timer);
        entities.Members.member = gridRowSelectingEventArgs.rowData.codeMember;
        entities.Members.amount = gridRowSelectingEventArgs.rowData.amount;
        entities.Members.control = gridRowSelectingEventArgs.rowData.controlAmount;
        entities.Members.observations = gridRowSelectingEventArgs.rowData.observations;
        entities.Members.currency = gridRowSelectingEventArgs.rowData.currency;
        entities.Members.used = gridRowSelectingEventArgs.rowData.used;
        entities.Members.available = gridRowSelectingEventArgs.rowData.available;

        gridRowSelectingEventArgs.commons.api.viewState.disable('VA_1400AYLTCGPSEMN_795520');
        gridRowSelectingEventArgs.commons.api.viewState.disable('VA_3878VMYWQJKGBUI_207520');
    }
   

};
