

//Entity: CompaniesBatch
//CompaniesBatch.companyName (TextLink) View: CompaniesDiscountsCreateForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_COMPANYNAMEXGBS_726960 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    if(entities.CompaniesBatch.company>0){
        //open modal
        var nav = executeCommandEventArgs.commons.api.navigation;
        nav.label = cobis.translate("ASSTS.LBL_ASSTS_EMPRESANI_35782");
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_ASSTSVIKJRAKP_845',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_COMPANYCEE_242845'
        };

        nav.queryParameters = {
            mode: 8
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            institution: entities.CompaniesBatch.company,
        };
        nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    }
};