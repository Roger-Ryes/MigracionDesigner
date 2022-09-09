

//Entity: LoanSaleSearchEntity
//LoanSaleSearchEntity.archive (FileUpload) View: LoanSaleForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_6427AZGDIHWLKXG_205584 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let fileUpload: any = executeCommandEventArgs.commons.api.viewState.fileUpload('VA_6427AZGDIHWLKXG_205584');
    let viewState: any = executeCommandEventArgs.commons.api.viewState;

    //modificación de parámetros en caso de necesitarlo
    //fileUpload.setMaxSizeInMB(20);
    fileUpload.setConfirmUpload(false);
    fileUpload.setRelativePath('loans-files');
    viewState.disable('VA_VABUTTONFVNJKMP_639584');

    executeCommandEventArgs.commons.execServer = true;
};