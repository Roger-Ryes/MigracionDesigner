//Start signature to callBack event to VC_PAYMENTMNE_706586
    task_initDataCallback_VC_PAYMENTMNE_706586 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        //here your code
    };

//MethodsRetentionQuery Entity: 
    task.executeQuery.Q_METHODIR_7546 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters. = true;
    };