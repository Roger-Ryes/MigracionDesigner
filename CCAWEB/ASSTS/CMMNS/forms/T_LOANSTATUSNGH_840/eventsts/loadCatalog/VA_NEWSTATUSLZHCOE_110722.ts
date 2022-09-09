//Entity: Loan
    //Loan.newStatus (ComboBox) View: LoanStatusChangeForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_NEWSTATUSLZHCOE_110722 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.api.navigation.getCustomDialogParameters().otherParam = {
        OPERATIONTYPEID: loadCatalogDataEventArgs.commons.api.vc.model.Loan.operationTypeID,
        STATUS: loadCatalogDataEventArgs.commons.api.vc.model.Loan.statusCopy
    }


        loadCatalogDataEventArgs.commons.execServer = true;

//loadCatalogDataEventArgs.commons.api.vc.model Object {Entity4: Object}
    };