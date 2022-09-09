//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: RefinanceLoansFilter
//designer-hint: 2304: Cannot find name 'task_initData_VC_REFINANCSL_902781'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
task_initData_VC_REFINANCSL_902781 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let viewState: any = initDataEventArgs.commons.api.viewState;
    viewState.hide("G_REFINANERL_686515");
    viewState.hide("VA_ACCOUNTYATVYIRL_740515");
    entities.RefinanceLoanFilter.typeRenovation ="R";
    entities.RefinanceLoanFilter.preventionProgram = "NAP";
    viewState.hide("VA_PREVENTIONPRRAM_747515");
    viewState.hide("VA_BASICINSURANCEC_861515");
    viewState.disable("CM_TREFINAN_9NC");
    this.cleanElements(entities);
    initDataEventArgs.commons.execServer = true;
};