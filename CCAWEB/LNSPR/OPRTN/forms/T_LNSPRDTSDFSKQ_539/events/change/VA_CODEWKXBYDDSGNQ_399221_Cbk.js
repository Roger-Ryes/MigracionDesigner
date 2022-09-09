//Start signature to Callback event to VA_CODEWKXBYDDSGNQ_399221
task.changeCallback.VA_CODEWKXBYDDSGNQ_399221 = function (entities, changeCallbackEventArgs) {
    if (!changeCallbackEventArgs.success) {
        entities.OperationCRUDFormEntity.fullName = null;
        entities.OperationCRUDFormEntity.idNumber = null;
    }
};
