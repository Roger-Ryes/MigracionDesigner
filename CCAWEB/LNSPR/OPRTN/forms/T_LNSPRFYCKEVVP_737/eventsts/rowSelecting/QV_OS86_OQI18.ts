//gridRowSelecting QueryView: QV_OS86_OQI18
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_OS86_OQI18 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let api: any = gridRowSelectingEventArgs.commons.api;

    if (!api.parentVc) {
        let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

        if (menu == '1') {
            nav.label = this.cobis.translate("LNSPR.LBL_LNSPR_LNEACRDOI_38962");
            nav.address = {
                moduleId: 'LNSPR',
                subModuleId: 'OPRTN',
                taskId: 'T_LNSPRNRRVDNTA_721',
                taskVersion: '1.0.0',
                viewContainerId: 'VC_GENERALIAN_158721'
            };

            nav.queryParameters = {
                mode: 8
            };
            nav.modalProperties = {
                size: 'md',
                callFromGrid: false
            };

            nav.customDialogParameters = {
                cupo: gridRowSelectingEventArgs.rowData.lineCod,
                secuencial: gridRowSelectingEventArgs.rowData.sequential
            };

            nav.navigate(gridRowSelectingEventArgs.commons.controlId);

        } else {
            nav.label = this.cobis.translate("LNSPR.LBL_LNSPR_LNEACRDOI_38962");
            nav.address = {
                moduleId: 'LNSPR',
                subModuleId: 'OPRTN',
                taskId: 'T_LNSPRRLRKZDAH_793',
                taskVersion: '1.0.0',
                viewContainerId: 'VC_LOANLINESS_983793'
            };

            nav.queryParameters = {
                mode: 2
            };
            nav.modalProperties = {
                size: 'md',
                callFromGrid: false
            };

            nav.customDialogParameters = {
                secuencial: gridRowSelectingEventArgs.rowData.sequential,
                codLinea: gridRowSelectingEventArgs.rowData.lineCod
            };

            nav.navigate(gridRowSelectingEventArgs.commons.controlId);

        }
    } else {
        api.vc.closeModal({
            result: {
                lineaCredito: gridRowSelectingEventArgs.rowData.lineCod
            }
        });
    }
};
