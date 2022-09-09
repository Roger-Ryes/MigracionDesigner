

//Entity: CompaniesBatch
//CompaniesBatch.company (TextInputButton) View: CompaniesDiscountsCreateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_COMPANYQZIUFHFL_215960 = function(  entities, changedEventArgs ) {
    changedEventArgs.commons.execServer = false;
    if(entities.CompaniesBatch.company){
        clearForm(entities,2)
        enableMyCommand(entities,changedEventArgs.commons.api.viewState)
        changedEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
        changedEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
    }
};