//gridCommand (Button) QueryView: QV_AV40_EIS41
    //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
    task.gridCommand.CEQV_201QV_AV40_EIS41_373 = function (entities, gridExecuteCommandEventArgs) {
        gridExecuteCommandEventArgs.commons.execServer = false;
        
        var nav = gridExecuteCommandEventArgs.commons.api.navigation;
        
        nav.label = cobis.translate('ASSTS.LBL_ASSTS_TABLAAMIO_45588');
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'CMMNS',
            taskId: 'T_ASSTSRQJVFXXE_548',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_AMORTIZATT_397548'
        };
        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'lg',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            Loan: entities.Loan,
            AmortizationSimulate: entities.AmortizationSimulate
        };

        
        nav.openModalWindow("CEQV_201QV_AV40_EIS41_373", gridExecuteCommandEventArgs.nameEntityGrid);
        
    };