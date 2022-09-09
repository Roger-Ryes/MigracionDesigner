// (Button) 
task_executeCommand_VA_VABUTTONBPDWGMJ_893520 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {

    
    entities.Members.member = null;
    entities.Members.currency = null;
    entities.Members.amount = null;
    entities.Members.used = 0;
    entities.Members.available = 0;
    entities.Members.observations = null;
    entities.Members.control='N';
    entities.Members.editionMode = executeCommandEventArgs.commons.constants.mode.Insert;
   
    executeCommandEventArgs.commons.api.viewState.enable('VA_1400AYLTCGPSEMN_795520');
    executeCommandEventArgs.commons.api.viewState.enable('VA_3878VMYWQJKGBUI_207520');

    executeCommandEventArgs.commons.execServer = false;

};