
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoanSaleDetailForm
task.initData.VC_LOANSALEDE_341511 = function (entities, initDataEventArgs){

    entities.LoanSaleList = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loanSale;
    var uploadedFile = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().uploadedFile;
    
    if(uploadedFile){
    entities.LoanSaleDetailList = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loanSaleDetail;
       initDataEventArgs.commons.execServer = false;
    }else{
       initDataEventArgs.commons.execServer = true; 
    }

    
 
};