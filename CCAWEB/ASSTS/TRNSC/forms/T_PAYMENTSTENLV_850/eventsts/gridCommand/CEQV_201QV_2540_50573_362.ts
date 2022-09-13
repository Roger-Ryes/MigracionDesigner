//gridCommand (Button) QueryView: QV_2540_50573
    //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
    task_gridCommand_CEQV_201QV_2540_50573_362 = (
        entities: Model,
        gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
    ) => {
        gridExecuteCommandEventArgs.commons.execServer = false;

        //gridExecuteCommandEventArgs.commons.serverParameters.QuoteDetails = true;
        //Open Modal
        let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_DETALLEAG_48048'); //Detalle del Pago
        nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_QUOTADETAISOY_745',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_QUOTADETAA_445745'
        };
        nav.queryParameters = {
        mode: 8
        };
        nav.modalProperties = {
        size: 'md',
        callFromGrid: false
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            payment : entities.Payment
        };

        nav.openModalWindow("CEQV_201QV_2540_50573_362", gridExecuteCommandEventArgs.nameEntityGrid);
    };
