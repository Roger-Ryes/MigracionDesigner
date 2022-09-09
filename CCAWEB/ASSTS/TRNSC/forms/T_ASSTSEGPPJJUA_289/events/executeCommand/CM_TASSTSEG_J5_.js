// (Button) 
task.executeCommand.CM_TASSTSEG_J5_ = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;

    executeCommandEventArgs.commons.api.vc.closeModal({
        response: false
    });
};
