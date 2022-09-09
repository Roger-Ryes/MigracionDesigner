//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: RefinanceLoansFilter
task.initData.VC_REFINANCSL_902781 = function (entities, initDataEventArgs) {
    var viewState = initDataEventArgs.commons.api.viewState;
    viewState.hide("G_REFINANERL_686515");
    viewState.hide("VA_ACCOUNTYATVYIRL_740515");
    entities.RefinanceLoanFilter.typeRenovation ="R";
    entities.RefinanceLoanFilter.preventionProgram = "NAP";
    viewState.hide("VA_PREVENTIONPRRAM_747515");
    viewState.hide("VA_BASICINSURANCEC_861515");
    viewState.disable("CM_TREFINAN_9NC");
    cleanElements(entities);
    initDataEventArgs.commons.execServer = true;


};