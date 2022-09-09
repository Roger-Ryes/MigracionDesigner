
//Start signature to Callback event to VA_TEXTINPUTBOXCFY_310141
task_loadCatalogCallback_VA_TEXTINPUTBOXCFY_310141 = (
     entities: Model,
     loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
) => {
     entities.Payment.paymentType = null;
};
