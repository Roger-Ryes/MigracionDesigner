// (Button) 
task_executeCommand_CM_TLNSPRMF_3SN = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;

    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = undefined;

    if (this.cobis.container.tabs.getCurrentTab().name != undefined) {
        nameAux = this.cobis.container.tabs.getCurrentTab().name;
    } else {
        if (entities.LoanSearchFilter.mode == 'C') {
            nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_CAMBIOTAS_63595");
        } else {
            nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_PAGOSMAOS_76833");
        }
    
    }

    this.cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);

    /*entities.LoanSearchFilter.archivo = null;
   // entities.ErrorMassivePayments = null;
    listaSeleccionados = null;
    executeCommandEventArgs.commons.api.grid.removeAllRows('LoanList');
    executeCommandEventArgs.commons.api.viewState.show('G_LOANSEAHHC_140423');
    executeCommandEventArgs.commons.api.viewState.hide('G_LOANSEAHHC_356423');
    executeCommandEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_22S');
    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_TP8');
    executeCommandEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_JP1');
    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_PSF');
    executeCommandEventArgs.commons.api.viewState.show("CM_TLNSPRMF_3SN");
    executeCommandEventArgs.commons.api.viewState.enable('VA_NUMIDENTIFICTII_228423');
    executeCommandEventArgs.commons.api.viewState.enable('VA__174423');
    executeCommandEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = true;
    executeCommandEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_388');
    executeCommandEventArgs.commons.api.viewState.enable('VA_ARCHIVOJFAGWZSQ_219423');
    executeCommandEventArgs.commons.api.vc.removeFile('VA_ARCHIVOJFAGWZSQ_219423');
    executeCommandEventArgs.commons.execServer = false;
    
    //Field: Código cliente
    if (entities.LoanSearchFilter.numIdentification != null) {
        entities.LoanSearchFilter.numIdentification = null;
    }

    //Field: Num. préstamo
    if (entities.LoanSearchFilter.operation != null) {
        entities.LoanSearchFilter.operation = null;
    }

    //Field: Num. trámite
    if (entities.LoanSearchFilter.numProcedures != null) {
        entities.LoanSearchFilter.numProcedures = null;
    }

    //Field: Oficina
    if (entities.LoanSearchFilter.office != null) {
        entities.LoanSearchFilter.office = null;
    }

    //Field: Moneda
    if (entities.LoanSearchFilter.codCurrency != null) {
        entities.LoanSearchFilter.codCurrency = null;
    }

    //Field: Fecha desembolso
    if (entities.LoanSearchFilter.disbursementDate != null) {
        entities.LoanSearchFilter.disbursementDate = null;
    }

    //Field: Próximo reajuste
    if (entities.LoanSearchFilter.nextReadjDate != null) {
        entities.LoanSearchFilter.nextReadjDate = null;
    }

    //Field: Estado préstamo
    if (entities.LoanSearchFilter.state != null) {
        entities.LoanSearchFilter.state = null;
    }

    //Field: Préstamo migrado
    if (entities.LoanSearchFilter.migratedOperation != null) {
        entities.LoanSearchFilter.migratedOperation = null;
    }

    //Field: Tipo operación
    if (entities.LoanSearchFilter.type != null) {
        entities.LoanSearchFilter.type = null;
    }
*/
};