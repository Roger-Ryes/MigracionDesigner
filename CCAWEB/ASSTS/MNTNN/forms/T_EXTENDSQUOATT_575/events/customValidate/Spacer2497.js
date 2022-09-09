//Entity: ExtendsQuota
    //ExtendsQuota.extendsDate (DateField) View: ExtendsQuotaForm
    
    task.customValidate.Spacer2497 = function( entities, customValidateEventArgs ) {
        customValidateEventArgs.commons.execServer = false;
        if (!entities.ExtendsQuota.extendsDate){
		   customValidateEventArgs.errorMessage='Formato Invalido'; 
        customValidateEventArgs.isValid = false; 
		entities.ExtendsQuota.extendsDate=null;
            
            } else{
		customValidateEventArgs.isValid = true; 
        }
        
    };