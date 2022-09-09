
// () View: View of Test
//Evento changeGroup : Evento change para pestañas, collapsible y accordion.
task_changeGroup_G_TESTEAUPBW_755658 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;
   //changedGroupEventArgs.commons.serverParameters.entityName = true;
    /*if((changedGroupEventArgs.commons.item.id === 'GroupId') && (changedGroupEventArgs.commons.item.isOpen === true)){
      console.log("Open by " + changedGroupEventArgs.commons.item.id);
    }*/
    
    if (changedGroupEventArgs.commons.item.isOpen === true) {
        switch (changedGroupEventArgs.commons.item.id) {
            case 'G_TESTXSFTJD_229658':
                console.log("Open by " + changedGroupEventArgs.commons.item.id);
              
                nav.address = {
                    moduleId: 'ASSTS',
                    subModuleId: 'CMMNS',
                    taskId: 'T_AMORTIZATIOON_261',//FormSimple (AmortizationForm)
                    taskVersion: '1.0.0',
                    viewContainerId: 'VC_AMORTIZAII_339261'//Contenedor FormSimple
                };
                nav.queryParameters = {
                    mode: 2
                };
                nav.customDialogParameters = {
                    operation: entities.Loan.loanBankID,
                    templateGrid:2
                };
                nav.registerView('G_PROJECTNTR_773798');//Grupo en el cual cargara
                
                break;
        }
    }
};