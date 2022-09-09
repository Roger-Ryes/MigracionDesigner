

//Entity: ProductLineDistribution
//ProductLineDistribution.product (DropDownList) View: ProductLineDistributionForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_PRODUCTWKWZPDFA_211676 = function(  entities, changedEventArgs ) {
    changedEventArgs.commons.api.viewState.refreshData('Q_OPEREEOA_SH40');
    changedEventArgs.commons.execServer = false;

};