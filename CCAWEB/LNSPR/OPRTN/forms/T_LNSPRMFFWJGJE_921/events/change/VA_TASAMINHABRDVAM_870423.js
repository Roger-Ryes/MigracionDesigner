//Entity: ReadjustmentMEntity
//ReadjustmentMEntity.tasaMin (CheckBox) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TASAMINHABRDVAM_870423 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'S') {
        changedEventArgs.commons.api.viewState.enable('VA_PERCENTAGEJSRSR_369423');
        changedEventArgs.commons.api.viewState.disable('VA_REFERENCIALHVKA_159423');
        changedEventArgs.commons.api.viewState.disable('VA_SIGNKLSEFBDNEKD_114423');
        changedEventArgs.commons.api.viewState.disable('VA_FACTORGZZGBQQEQ_812423');
        entities.ReadjustmentMEntity.referencial = null;
        entities.ReadjustmentMEntity.sign = null;
        entities.ReadjustmentMEntity.factor = null;

    } else {

        changedEventArgs.commons.api.viewState.enable('VA_REFERENCIALHVKA_159423');
        changedEventArgs.commons.api.viewState.enable('VA_SIGNKLSEFBDNEKD_114423');
        changedEventArgs.commons.api.viewState.enable('VA_FACTORGZZGBQQEQ_812423');
        changedEventArgs.commons.api.viewState.enable('VA_PERCENTAGEJSRSR_369423');
        entities.ReadjustmentMEntity.percentage = null;
    }
};
