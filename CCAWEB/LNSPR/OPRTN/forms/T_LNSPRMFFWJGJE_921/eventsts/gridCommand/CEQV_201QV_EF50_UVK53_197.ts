//gridCommand (Button) QueryView: QV_EF50_UVK53
    //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
    task_gridCommand_CEQV_201QV_EF50_UVK53_197 = (
        entities: Model,
        gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
    ) => {
        let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;
        let auxCont: any = 0;

        for (let i: any = 0; i < entities.LoanList.length; i++) {
            if (entities.LoanList[i].seleccion) {
                auxCont = auxCont + 1;
            }
        }

        if (auxCont > 0) {
            nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_INGRESOVS_19444');
            nav.address = {
                moduleId: 'LNSPR',
                subModuleId: 'OPRTN',
                taskId: 'T_LNSPRKWSPLJPI_575',
                taskVersion: '1.0.0',
                viewContainerId: 'VC_PROJECTORC_636575'
            };

            nav.queryParameters = {
                mode: 2
            };

            nav.modalProperties = {
                size: 'md',
                callFromGrid: false
            };

            nav.openModalWindow(gridExecuteCommandEventArgs.commons.controlId, null);
        } else {
            gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false,null,timer);
        }

        gridExecuteCommandEventArgs.commons.execServer = false;
    };