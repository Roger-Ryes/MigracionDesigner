
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: CompaniesDiscountsCreateForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    var api = onCloseModalEventArgs.commons.api

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_COMPANIEEE_220144' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.CompaniesBatch.company = onCloseModalEventArgs.result.response.institution;
            entities.CompaniesBatch.companyName = onCloseModalEventArgs.result.response.companyName;
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_COMPANIETA_879161' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            let data = onCloseModalEventArgs.result.response.data;
            entities.CompaniesBatch.sequential = data.sequential;
            entities.CompaniesBatch.statusId = data.statusId;
            entities.CompaniesBatch.statusName = data.statusName;
            entities.CompaniesBatch.dateCreate = data.dateCreate;
            entities.CompaniesBatch.dateMove = data.dateMove;
            entities.CompaniesBatch.description = data.description;
            entities.CompaniesBatch.fileName = data.fileName;
            entities.CompaniesBatch.executeOnline = data.executeOnline;
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_COMPANIECS_544314' && 
        onCloseModalEventArgs.dialogCloseType == 0 && entities.CompaniesBatch.statusId < 2) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            var data = onCloseModalEventArgs.result.response.data;
            data.companyStatusId=(data.companyStatusOk == 'S'?1:0)
            entities.CompaniesBatch.fileError=0
            api.grid.updateRow(
                'CompaniesDiscountsFileList',
                (data.sequential - 1),
                data
            );
        }
        api.viewState.hide('G_COMPANIEEC_443960')
    }
};