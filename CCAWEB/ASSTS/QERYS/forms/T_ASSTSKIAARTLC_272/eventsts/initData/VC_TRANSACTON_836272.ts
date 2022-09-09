
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: TransactionQueryForm
//designer-hint: 2304: Cannot find name 'task_initData_VC_TRANSACTON_836272'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
//designer-hint: 6133: 'entities' is declared but its value is never read.
task_initData_VC_TRANSACTON_836272 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
    

};