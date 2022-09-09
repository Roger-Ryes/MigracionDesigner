//Entity: OperationEntity
//OperationEntity.syndicated (CheckBox) View: OperationForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_SYNDICATEDMLJZC_821221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (entities.OperationEntity.syndicated == false) {
        changedEventArgs.commons.api.viewState.hide('VA_TYPESYNDICATEEE_795221');
        changedEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible = false;
        entities.OperationEntity.typeSyndicated = null;
        changedEventArgs.commons.execServer = true;
        changedEventArgs.commons.api.grid.removeAllRows('SyndicatedList');

    } else {
        changedEventArgs.commons.api.viewState.show('VA_TYPESYNDICATEEE_795221');
        changedEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible =true;
         changedEventArgs.commons.execServer = false;
    }
    

};




