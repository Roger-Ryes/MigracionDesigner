// () View: View of GeneralInformationLine
//Evento changeGroup : Evento change para pestañas, collapsible y accordion.
task.changeGroup.G_GENERALTII_344243 = function (entities, changedGroupEventArgs) {
    changedGroupEventArgs.commons.execServer = false;

    var nav = changedGroupEventArgs.commons.api.navigation;
    //Pantalla: Estado Actual
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALAAO_224243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRASFFUCSU_551',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_CURRENTSSN_601551'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            secuencial: entities.LoansLinesHeader.secuencial
        };
        nav.registerView('G_GENERALAAO_224243',false);
    }
    
        if ((changedGroupEventArgs.commons.item.id === 'G_GENERALLII_531243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPREHKSWWGN_923',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_MEMBERSLNN_871923'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            secuencial: entities.LoansLinesHeader.secuencial
        };
        nav.registerView('G_GENERALLII_531243',false);
    }
    /*INFORMACION DE LINEA*/
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALOIA_538243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRXLZJGUMH_556',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANLINENS_928556'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            secuencial: entities.LoansLinesHeader.secuencial
        };
        nav.registerView('G_GENERALOIA_538243', false);
    }


    /*DISTRIBUCION POR PRODUCTO*/
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALTIN_333243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRSBSNRATX_181',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_PRODUCTLIN_542181'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            sequential: entities.LoansLinesHeader.secuencial
        };
        nav.registerView('G_GENERALTIN_333243', false);
    }

    /*DISTRIBUCION POR MIEMBROS*/
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALEIN_751243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRNBKRHAIB_194',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSDISMM_305194'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            codLinea:entities.LoansLinesHeader.cupo
        };
        nav.registerView('G_GENERALEIN_751243', false);
    }
    
      /*Garantias de la Línea*/
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALNLN_510243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

      
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRQGEMJIOM_705',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSLINER_641705'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            codLinea:entities.LoansLinesHeader.cupo
        };
        nav.registerView('G_GENERALNLN_510243', false);
    }
    
    
};
