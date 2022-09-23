import { CobisModelLoadHeaderEventArgs } from "cobis-designer";
import { CobisHeaderBase } from "cobis-designer-controls"
import { Model } from '../MNTNN/T_PROJECTIONNQI_244/1.0.0/model/vc-projectiiu-405244.model';
export class Actions_HD_HEADERLSO_968 extends CobisHeaderBase {
    constructor() {
        super();
    }
    public setValues(): void {
        this.beforeHeaderNavigate = {
            comandoEstado: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'ESTADO'
                    }
                };
                return result;
            },
            comandoClausula: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'CLAUSULA'

                    }

                };
                return result;
            },
            comandoProrroga: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'PRORROGA'

                    }
                };
                return result;
            },
            comandoCargos: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'CARGOS'

                    }
                };
                return result;
            },
            comandoPagoI: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'PAGOI'

                    }
                };
                return result;
            },
            comandoPagoG: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'PAGOG'

                    }
                };
                return result;
            },
            comandoReajuste: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {

                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'REAJUSTE'

                    }
                };
                return result;
            },
            comandoReversos: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    data: entities.Loan,
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'REVERSOS'

                    }
                };
                return result;
            },
            comandoFecha: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    data: entities.Loan,
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'FECHA'

                    }
                };
                return result;
            },
            comandoSimulacion: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'SIMULACION'

                    }
                };
                return result;
            },
            comandoProyeccion: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'PROYECCION'

                    }
                };
                return result;
            },
            comandoImprimir: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'IMPRIMIR'

                    }
                };
                return result;
            },
            comandoDesembolso: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'DESEMBOLSO'

                    }
                };
                return result;
            },
            comandoPagNoApli: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'PAGNOAPLI'

                    }
                };
                return result;
            },
            comandoRubros: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegaci�n
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'RUBROS'

                    },
                    operation: entities.Loan.loanBankID
                };
                return result;
            },
            comandoDiaPago: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'CAMBDIAPAG'

                    }
                };
                return result;
            },
            comandoRubroAg: (entities: Model, args: CobisModelLoadHeaderEventArgs) => {
                // Retornar un objeto con los customDialogParameters
                // para la navegacion
                var result = {
                    parameters: {
                        loan: entities.Loan,
                        isNavigate: true,
                        idMenu: 'ELIMRUBAG'

                    }
                };
                return result;
            },
        };
    }
}