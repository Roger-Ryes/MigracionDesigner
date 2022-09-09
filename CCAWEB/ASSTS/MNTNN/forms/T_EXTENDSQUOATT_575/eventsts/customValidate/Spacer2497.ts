//Entity: ExtendsQuota
    //ExtendsQuota.extendsDate (DateField) View: ExtendsQuotaForm
    
    task_customValidate_Spacer2497 = (
        entities: Model,
        customValidateEventArgs: CobisModelCustomValidateEventArgs
    ) => {
        customValidateEventArgs.commons.execServer = false;
        if (!entities.ExtendsQuota.extendsDate){
   customValidateEventArgs.errorMessage='Formato Invalido'; 
        customValidateEventArgs.isValid = false; 
entities.ExtendsQuota.extendsDate=null;
            
            } else{
customValidateEventArgs.isValid = true; 
        }
        
    };