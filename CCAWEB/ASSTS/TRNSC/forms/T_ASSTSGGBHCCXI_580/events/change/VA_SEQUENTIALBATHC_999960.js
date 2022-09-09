

//Entity: CompaniesBatch
//CompaniesBatch.sequential (TextInputButton) View: CompaniesDiscountsCreateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_SEQUENTIALBATHC_999960 = function(  entities, changedEventArgs ) {
    changedEventArgs.commons.execServer = false;
    if(entities.CompaniesBatch.sequential){
        clearForm(entities,3)
        enableMyCommand(entities,changedEventArgs.commons.api.viewState)
        changedEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
        changedEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
    }
};