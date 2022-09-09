//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: QueryLoansBeneficiario
task.initData.VC_LOANSBENIF_286571 = function (entities, initDataEventArgs) {
    initDataEventArgs.commons.execServer = false;
    entities.Seguros.loanBankID = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().variable.loanBankID; 

};