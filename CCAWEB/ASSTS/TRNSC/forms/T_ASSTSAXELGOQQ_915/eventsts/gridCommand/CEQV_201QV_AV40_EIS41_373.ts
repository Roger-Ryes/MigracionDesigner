//gridCommand (Button) QueryView: QV_AV40_EIS41
    //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
    task_gridCommand_CEQV_201QV_AV40_EIS41_373 = (
        entities: Model,
        gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
    ) => {
        gridExecuteCommandEventArgs.commons.execServer = false;

        let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_TABLAAMIO_45588');
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


        nav.openModalWindow("CEQV_201QV_AV40_EIS41_373", gridExecuteCommandEventArgs.modelRow);
    };