

//Entity: ProductLineDistribution
//ProductLineDistribution.product (DropDownList) View: ProductLineDistributionForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_PRODUCTWKWZPDFA_211676 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.api.viewState.refreshData('Q_OPEREEOA_SH40');
    changedEventArgs.commons.execServer = false;

};