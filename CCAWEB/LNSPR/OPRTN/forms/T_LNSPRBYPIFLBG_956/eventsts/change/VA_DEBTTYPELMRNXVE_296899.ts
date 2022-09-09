//Entity: OperationEntity
//OperationEntity.debtType (DropDownList) View: PassivePortfolioCreation
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_DEBTTYPELMRNXVE_296899 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'C') {
        changedEventArgs.commons.api.viewState.disable('VA_REPOSITIONJNYRG_258899');
        changedEventArgs.commons.api.viewState.disable('VA_SUBFINANCINGPJK_364899');
    
        entities.OperationEntity.formReposition=null;
        entities.OperationEntity.subFinancing=null;
        
    } else {
        changedEventArgs.commons.api.viewState.enable('VA_REPOSITIONJNYRG_258899');
        changedEventArgs.commons.api.viewState.enable('VA_SUBFINANCINGPJK_364899');
    }

};
