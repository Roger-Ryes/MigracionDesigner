//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansLines
task.initData.VC_LOANSLINSS_962737 = function (entities, initDataEventArgs){
    initDataEventArgs.commons.execServer = false;
    entities.LoansLines.naturaleza = "A";
    entities.LoansLines.criterios = false;
    menu = getQueryStrings().menu;
   
};