

//Entity: CompaniesBatch
//CompaniesBatch.sequential (TextInputButton) View: CompaniesDiscountsCreateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_SEQUENTIALBATHC_999960 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    if(entities.CompaniesBatch.sequential){
        this.clearForm(entities, 3)
        this.enableMyCommand(entities, changedEventArgs.commons.api.viewState)
        changedEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
        changedEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
    }
};