//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: LoanSearchForm
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;
        if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
            onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
            if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
                let data: any = onCloseModalEventArgs.result.selectedData;
                entities.LoanSearchFilter.numIdentification = data.code + "";
            }
    } else if (onCloseModalEventArgs.result.referencial != undefined) {
            if (onCloseModalEventArgs.result.param != undefined) {
                entities.ReadjustmentMEntity.referencial = onCloseModalEventArgs.result.referencial;
            } else {
                let api: any = onCloseModalEventArgs.commons.api, selectedRow: any = api.vc.grids.QV_PG40_VCD65.selectedRow;

                document.getElementById('VA_REFERENCIALFBOE_516423').readOnly = true;
                selectedRow.set('referencial', onCloseModalEventArgs.result.referencial);
                selectedRow.set('percentage', undefined);
            }
    } else if (onCloseModalEventArgs.closedViewContainerId == 'VC_PROJECTORC_636575' &&
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.objLoans) {
            listaSeleccionados = onCloseModalEventArgs.result.objLoans;
            // onCloseModalEventArgs.commons.api.vc.model.MassiveCommissionsMistakes = onCloseModalEventArgs.result.objMistakes;
             entities.MassiveCommissionsMistakes = onCloseModalEventArgs.result.objMistakes;
            onCloseModalEventArgs.commons.api.grid.refresh('QV_EF50_UVK53');
        }
    } else if (onCloseModalEventArgs.closedViewContainerId == 'VC_PAYMENTSGR_815507' && onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.objLoans) {
            listaSeleccionados = onCloseModalEventArgs.result.objLoans;
            lote = listaSeleccionados[0].lote;
   
            onCloseModalEventArgs.commons.api.grid.refresh('QV_BZ71_NGV26');
            onCloseModalEventArgs.commons.api.viewState.hide('G_LOANSEAHHC_140423');
            onCloseModalEventArgs.commons.api.viewState.show('G_LOANSEAHHC_356423');
            onCloseModalEventArgs.commons.api.grid.removeAllRows('LoanList');


        }
    } else {
        onCloseModalEventArgs.commons.api.grid.refresh('QV_EF50_UVK53');
    }

    
    };