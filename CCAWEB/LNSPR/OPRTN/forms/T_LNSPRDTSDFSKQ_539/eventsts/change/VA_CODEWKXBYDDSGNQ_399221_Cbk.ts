//Start signature to Callback event to VA_CODEWKXBYDDSGNQ_399221
task_changeCallback_VA_CODEWKXBYDDSGNQ_399221 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
) => {
    if (!changeCallbackEventArgs.success) {
        entities.OperationCRUDFormEntity.fullName = null;
        entities.OperationCRUDFormEntity.idNumber = null;
    }
};
