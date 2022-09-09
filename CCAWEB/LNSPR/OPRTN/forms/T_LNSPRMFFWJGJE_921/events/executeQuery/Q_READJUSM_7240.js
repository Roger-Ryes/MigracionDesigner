//ReadjustmenMListQuery Entity: ReadjustmenMList
task.executeQuery.Q_READJUSM_7240 = function (executeQueryEventArgs) {
    executeQueryEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');

    if ((executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification !== null &&
            executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification !== undefined &&
            executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification !== '') ||
        (executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.operation !== null &&
            executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.operation !== undefined &&
            executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.operation !== '') ||
        (executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures !== null &&
            executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures !== undefined &&
            executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures !== '') ||
        (executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.office !== null &&
            executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.office !== undefined &&
            executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.office !== '')) {

        executeQueryEventArgs.parameters.numIdentification = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification;
        executeQueryEventArgs.parameters.operation = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.operation;
        executeQueryEventArgs.parameters.numProcedure = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures;
        executeQueryEventArgs.parameters.office = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.office;
        executeQueryEventArgs.parameters.currency = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.codCurrency;
        executeQueryEventArgs.parameters.disbursementDate = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.disbursementDate;
        executeQueryEventArgs.parameters.state = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.state;
        executeQueryEventArgs.parameters.migratedOperation = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.migratedOperation;
        executeQueryEventArgs.parameters.type = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.type;
        executeQueryEventArgs.parameters.categoryGroup = '10';

        executeQueryEventArgs.commons.api.vc.parentVc = {};
        executeQueryEventArgs.commons.api.vc.parentVc.customDialogParameters = {};
        executeQueryEventArgs.commons.api.vc.parentVc.customDialogParameters.LoanSearchFilter = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter;
        executeQueryEventArgs.commons.api.vc.parentVc.customDialogParameters.ReadjustmentMEntity = executeQueryEventArgs.commons.api.vc.model.ReadjustmentMEntity;
        
        executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_EF50_UVK53', ['numIdentification',
                                                                                               'operation',
                                                                                             'categoryGroup'],
            executeQueryEventArgs);
        
        executeQueryEventArgs.commons.execServer = true;

    } else {
        executeQueryEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBEINGTA_48173', false, null, timer);
        executeQueryEventArgs.commons.execServer = false;
    }
};
