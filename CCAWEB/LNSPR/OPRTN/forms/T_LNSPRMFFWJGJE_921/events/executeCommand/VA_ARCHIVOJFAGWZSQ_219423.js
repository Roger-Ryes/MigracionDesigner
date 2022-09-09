//Entity: LoanSearchFilter
//LoanSearchFilter.archivo (FileUpload) View: LoanSearchForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_ARCHIVOJFAGWZSQ_219423 = function (entities, executeCommandEventArgs) {
    var origen = getQueryStrings().type;
    var fileUpload = executeCommandEventArgs.commons.api.viewState.fileUpload('VA_ARCHIVOJFAGWZSQ_219423');

    //modificación de parámetros en caso de necesitarlo
    //fileUpload.setMaxSizeInMB(20);
    fileUpload.setConfirmUpload(false);
    fileUpload.setRelativePath('loans-files');

    //Search form clean
    
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
    
    
    //Readjust data clean
    
    //Field: Rubro
    if (entities.ReadjustmentMEntity.item != null) {
        entities.ReadjustmentMEntity.item = null;
    }
    
    //Field: Reajustar el
    if (entities.ReadjustmentMEntity.readjustDate != null) {
        entities.ReadjustmentMEntity.readjustDate = null;
    }    
    
    //Field: Referencial
    if (entities.ReadjustmentMEntity.referencial != null) {
        entities.ReadjustmentMEntity.referencial = null;
    }
    
    //Field: Signo
    if (entities.ReadjustmentMEntity.sign != null) {
        entities.ReadjustmentMEntity.sign = null;
    }
    
    //Field: Factor
    if (entities.ReadjustmentMEntity.factor != null) {
        entities.ReadjustmentMEntity.factor = null;
    }
    
    //Field: Porcentaje
    if (entities.ReadjustmentMEntity.percentage != null) {
        entities.ReadjustmentMEntity.percentage = null;
    }
    
     //Massive Commissions data clean
    
      //Field: Operacion
            if (entities.MassiveCommissions.operation != null) {
                entities.MassiveCommissions.operation = null;
            }
    
 
    executeCommandEventArgs.commons.api.viewState.disable('VA__174423');
    executeCommandEventArgs.commons.api.viewState.disable('VA_NUMIDENTIFICTII_228423');

     if(entities.LoanSearchFilter.mode != 'U'){
     executeCommandEventArgs.commons.execServer = true;
       }else{
          executeCommandEventArgs.commons.execServer = false; 
       }
    
    
};
