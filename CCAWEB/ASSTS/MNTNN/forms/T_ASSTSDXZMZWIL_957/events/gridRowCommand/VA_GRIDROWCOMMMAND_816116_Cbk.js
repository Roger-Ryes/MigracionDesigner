//Start signature to Callback event to VA_GRIDROWCOMMMAND_816116
task.gridRowCommandCallback.VA_GRIDROWCOMMMAND_816116 = function (entities, gridRowCommandCallbackEventArgs) {
    if (gridRowCommandCallbackEventArgs.success) {
        gridRowCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, timer);

        gridRowCommandCallbackEventArgs.commons.api.grid.refresh('QV_FL15_OEC17');
    }
};
