

//Entity: CompaniesBatch
//CompaniesBatch.company (TextInputButton) View: CompaniesDiscountsCreateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_COMPANYQZIUFHFL_215960 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    if(entities.CompaniesBatch.company){
        this.clearForm(entities, 2)
        this.enableMyCommand(entities, changedEventArgs.commons.api.viewState)
        changedEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
        changedEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
    }
};