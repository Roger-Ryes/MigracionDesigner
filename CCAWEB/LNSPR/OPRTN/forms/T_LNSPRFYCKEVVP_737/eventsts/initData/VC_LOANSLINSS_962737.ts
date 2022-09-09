//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansLines
task_initData_VC_LOANSLINSS_962737 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    entities.LoansLines.naturaleza = "A";
    entities.LoansLines.criterios = false;
    menu = LNSPR.getQueryStrings().menu;
   
};