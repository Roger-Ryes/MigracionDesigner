//gridCommand (Button) QueryView: QV_VE29_XZB37
//Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
task_gridCommand_CEQV_201QV_VE29_XZB37_960 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
) => {
    let porcentajeTotalGrid: any = 0;
    let montoTotalGrid: any = 0;
    gridExecuteCommandEventArgs.commons.execServer = false;

    if (entities.OperationEntity.amount) {

        if (entities.OperationEntity.typeSyndicated) {
            // Se obtiene el valor de la lista del porcentajen total

            if (entities.SyndicatedList) {
                for (let i: any = 0; i < entities.SyndicatedList.length; i++) {
                    porcentajeTotalGrid = porcentajeTotalGrid + entities.SyndicatedList[i].percentageParticipants
                    montoTotalGrid = montoTotalGrid + entities.SyndicatedList[i].amountParticipants
                }
            }

            let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;
            nav.label = 'LNSPR.LBL_LNSPR_INGRESORR_96766';
            nav.address = {
                moduleId: 'LNSPR',
                subModuleId: 'OPRTN',
                taskId: 'T_LNSPRSCSIDSOD_858',
                taskVersion: '1.0.0',
                viewContainerId: 'VC_SYNDICATDI_660858'
            };

            nav.queryParameters = {
                mode: 1
            };
            nav.modalProperties = {
                size: 'lg',
                callFromGrid: false
            };
            nav.customDialogParameters = {
                amount: entities.OperationEntity.amount,
                typeSindicated: entities.OperationEntity.typeSyndicated,
                gridPercentajeTotal: porcentajeTotalGrid,
                gridAmountTotal: montoTotalGrid,
                validationAdministrator: entities.SyndicatedList
            };

            //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
            nav.openModalWindow(gridExecuteCommandEventArgs.commons.controlId, null);
            //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
            //nav.openModalWindow(id, args.modelRow);
        } else {

            gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TIPODESRE_41966", false, null, timer);
        }
    } else {
        gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_MONTOREIO_54149", false, null, timer);
    }
};
