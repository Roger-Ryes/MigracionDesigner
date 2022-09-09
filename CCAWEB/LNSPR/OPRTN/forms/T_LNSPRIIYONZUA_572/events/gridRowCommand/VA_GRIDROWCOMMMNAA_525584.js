
//Entity: LoanSaleList
//LoanSaleList. (Button) View: LoanSaleForm
task.gridRowCommand.VA_GRIDROWCOMMMNAA_525584 = function(  entities, gridRowCommandEventArgs ) {
    var saleEntity = gridRowCommandEventArgs.rowData;
    
    if(uploadedFile){
       entities.LoanSaleFilter.fileUploaded = true;
    }else{
       entities.LoanSaleFilter.fileUploaded = false;
    }
    
    return gridRowCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_SEPROCEAE_46460").then(
        function (response) {
            
            switch (response.buttonIndex) {
                case 0: //cancel
                    gridRowCommandEventArgs.commons.execServer = false;
                    break;
                case 1: //accept
                   if(saleEntity){
                    entities.LoanSaleFilter.sequential = saleEntity.sequential;
                    gridRowCommandEventArgs.commons.execServer = true;
                    }
                    return true;
                    break;
            }
        }
    );

    
    
    

};