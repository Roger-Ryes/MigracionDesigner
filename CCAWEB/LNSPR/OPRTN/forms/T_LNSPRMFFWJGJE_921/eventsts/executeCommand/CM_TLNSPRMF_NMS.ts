// (Button) 
task_executeCommand_CM_TLNSPRMF_NMS = (
 entities: Model,
 executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    entities.LoanSearchFilter.archivo = null;
    entities.LoanSearchFilter.numIdentification = null;
    entities.LoanSearchFilter.operation = null;
    entities.LoanSearchFilter.numProcedures = null;
    entities.LoanSearchFilter.office = null;
    entities.LoanSearchFilter.numProcedures = null;
    entities.LoanSearchFilter.avanceSearch = null;
    entities.LoanSearchFilter.seleccionarTodo = null;
    executeCommandEventArgs.commons.api.grid.removeAllRows('MassiveCommissions');
    executeCommandEventArgs.commons.api.grid.removeAllRows('LoanList');
    executeCommandEventArgs.commons.api.viewState.enable('VA_ARCHIVOJFAGWZSQ_219423');
    executeCommandEventArgs.commons.api.viewState.show('G_LOANSEAHHC_140423');
    executeCommandEventArgs.commons.api.viewState.hide('CEQV_201QV_EF50_UVK53_197');
    executeCommandEventArgs.commons.api.viewState.hide('G_LOANSEARCR_617423');
    executeCommandEventArgs.commons.api.viewState.enable('VA__174423');
    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN'); 
    executeCommandEventArgs.commons.api.vc.removeFile('VA_ARCHIVOJFAGWZSQ_219423');
    executeCommandEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_197');
    executeCommandEventArgs.commons.api.viewState.enable('VA_NUMIDENTIFICTII_228423');
   
   // executeCommandEventArgs.commons.api.grid.refresh('QV_PY15_EUR25');
    listaErrores = [];
    entities.MassiveCommissionsMistakes = null;
    executeCommandEventArgs.commons.execServer = false;

};
