
//Start signature to Callback event to VA_FECHAAPROBACIOO_814412
task_changeCallback_VA_FECHAAPROBACIOO_814412 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
) => {
     if(changeCallbackEventArgs.success){
        calcular=false;
    }
};
