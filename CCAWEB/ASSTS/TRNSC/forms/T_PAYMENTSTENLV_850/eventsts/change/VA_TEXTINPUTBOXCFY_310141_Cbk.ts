//Start signature to callBack event to VA_TEXTINPUTBOXCFY_310141
  task_changeCallback_VA_TEXTINPUTBOXCFY_310141 = (entities: Model, changeEventArgs: any) => {
       entities.Payment.retention = entities.PaymentMethod.retention;
        entities.Payment.reference = ""
        entities.Payment.note = ""; 
        
      //CHEQUES
       /* if(entities.PaymentMethod.category.substring(0,2) == "CH") {
            changeEventArgs.commons.api.viewState.show("VA_NUMCHECKQLTBIOX_669141");
            changeEventArgs.commons.api.viewState.show("VA_TEXTINPUTBOXSJQ_831141");
    } else {
            changeEventArgs.commons.api.viewState.hide("VA_NUMCHECKQLTBIOX_669141");
            changeEventArgs.commons.api.viewState.hide("VA_TEXTINPUTBOXSJQ_831141");
        }*/
    };