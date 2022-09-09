
//Start signature to Callback event to VA_PAYMENTSTYPESSS_684199
task.changeCallback.VA_PAYMENTSTYPESSS_684199 = function(entities, changeCallbackEventArgs) {
    //here your code
    entities.Payment.retention = entities.PaymentMethod.retention;
    entities.Payment.reference = ""
    entities.Payment.note = ""; 

    if(entities.PaymentMethod.category.substring(0,2) == "CH") {
        changeCallbackEventArgs.commons.api.viewState.show("VA_CUSTOMERMUPBSTT_916199");
        changeCallbackEventArgs.commons.api.viewState.show("VA_REFERENCEUFYFMY_654199");
    } else {
        changeCallbackEventArgs.commons.api.viewState.hide("VA_CUSTOMERMUPBSTT_916199");
        changeCallbackEventArgs.commons.api.viewState.hide("VA_REFERENCEUFYFMY_654199");
    }
};
