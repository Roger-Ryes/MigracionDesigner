

//Entity: LoanSearchFilter
//LoanSearchFilter. (Button) View: LoanSearchForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA__174423 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.api.viewState.show('CM_TLNSPRMF_3SN');
    listaErrores = [];
    executeCommandEventArgs.commons.api.vc.model.MassiveCommissionsMistakes = null;
    entities.MassiveCommissionsMistakes =  null;
    executeCommandEventArgs.model.MassiveCommissionsMistakes = null
    executeCommandEventArgs.commons.execServer = false;

    executeCommandEventArgs.commons.api.vc.model.ErrorMassivePayments = null;
    entities.ErrorMassivePayments = null;
    executeCommandEventArgs.model.ErrorMassivePayments = null;
    executeCommandEventArgs.commons.api.grid.refresh('QV_PY15_EUR25');
  
};