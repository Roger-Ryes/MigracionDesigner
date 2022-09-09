//Entity: ExtendsQuota
    //ExtendsQuota.extendsDate (DateField) View: ExtendsQuotaForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_changeCallback_Spacer2497 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = false;
        if (entities.ExtendsQuotaExt.length>0){
             changeEventArgs.commons.api.viewState.show('G_EXTENDSUUA_352662');
        }else{
           changeEventArgs.commons.api.viewState.hide('G_EXTENDSUUA_352662');       
        } 
        
    };