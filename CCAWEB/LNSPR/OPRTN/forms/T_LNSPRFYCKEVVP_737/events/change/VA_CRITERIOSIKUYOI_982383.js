//Entity: LoansLines
//LoansLines.criterios (CheckBox) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CRITERIOSIKUYOI_982383 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue) {
        changedEventArgs.commons.api.viewState.show('VA_NUMLINEACKAOJVB_120383');
        changedEventArgs.commons.api.viewState.show('VA_NUMTRAMITEUFKMW_361383');
        changedEventArgs.commons.api.viewState.show('VA_OFICINANRBOTWYT_467383');
        changedEventArgs.commons.api.viewState.show('VA_MONEDAXWNJSQNUF_555383');
        changedEventArgs.commons.api.viewState.show('VA_DATEINIHDUJJRBN_500383');
        changedEventArgs.commons.api.viewState.show('VA_DATEVTOIOLFWTXY_452383');
        changedEventArgs.commons.api.viewState.show('VA_NUMPRESTAMORRMP_430383');
        changedEventArgs.commons.api.viewState.show('VA_ESTADOZXSPUMQFP_238383');
    } else {
        changedEventArgs.commons.api.viewState.hide('VA_NUMLINEACKAOJVB_120383');
        changedEventArgs.commons.api.viewState.hide('VA_NUMTRAMITEUFKMW_361383');
        changedEventArgs.commons.api.viewState.hide('VA_OFICINANRBOTWYT_467383');
        changedEventArgs.commons.api.viewState.hide('VA_MONEDAXWNJSQNUF_555383');
        changedEventArgs.commons.api.viewState.hide('VA_DATEINIHDUJJRBN_500383');
        changedEventArgs.commons.api.viewState.hide('VA_DATEVTOIOLFWTXY_452383');
        changedEventArgs.commons.api.viewState.hide('VA_NUMPRESTAMORRMP_430383');
        changedEventArgs.commons.api.viewState.hide('VA_ESTADOZXSPUMQFP_238383');
    }

};
