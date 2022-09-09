
//Start signature to Callback event to VA_FECHAVENCIMINOT_231412
task_changeCallback_VA_FECHAVENCIMINOT_231412 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
) => {
     if(changeCallbackEventArgs.success){
        calcular=false;
    }
};
