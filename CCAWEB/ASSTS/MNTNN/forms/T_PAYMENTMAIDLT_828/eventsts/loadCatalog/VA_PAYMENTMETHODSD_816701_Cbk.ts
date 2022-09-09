
//Start signature to Callback event to VA_PAYMENTMETHODSD_816701
task_loadCatalogCallback_VA_PAYMENTMETHODSD_816701 = (
     entities: Model,
     loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
) => {
     entities.MethodsRetention.paymentMethods = entities.MethodsRetention.product;
};
