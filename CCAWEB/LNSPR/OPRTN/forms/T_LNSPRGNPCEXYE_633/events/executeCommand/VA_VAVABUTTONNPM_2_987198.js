// (Button) Guardar
task.executeCommand.VA_VAVABUTTONNPM_2_987198 = function (entities, executeCommandEventArgs) {

    if(entities.AmortizationEntity.data()[entities.AmortizationEntity.data().length-1].balanceCapital == 0){
        //T_INTBNVUTFJHZS_657// transicion de Pasivas
        executeCommandEventArgs.commons.api.viewState.disable('CM_TLNSPRYT_R8O');
    } else {
        executeCommandEventArgs.commons.api.viewState.enable('CM_TLNSPRYT_R8O');
    }

    executeCommandEventArgs.commons.serverParameters.AmortizationEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationFormEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationTitleEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationManualRequest = true;
    executeCommandEventArgs.commons.serverParameters.OperationEntity = true;
    executeCommandEventArgs.commons.serverParameters.CreateOperationOne = true;

    //executeCommandEventArgs.commons.serverParameters.GenericEntity=true;
    //executeCommandEventArgs.commons.serverParameters.ItemEntity=true;

    executeCommandEventArgs.commons.execServer = true;
    
};