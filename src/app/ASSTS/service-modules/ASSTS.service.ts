//designer-hint: 2307: Cannot find module '@angular/core' or its corresponding type declarations.
import { Injectable } from "@angular/core";
import { IntlService } from "@progress/kendo-angular-intl";
  
//designer-hint: 2307: Cannot find module 'cobis-commons' or its corresponding type declarations.
import { CobisCommonsService } from "cobis-commons";
//designer-hint: 2307: Cannot find module 'cobis-designer' or its corresponding type declarations.
import { CobisDesignerModuleBase } from 'cobis-designer';

@Injectable({providedIn: 'root'})
//designer-hint: 1219: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning.
export class ASSTSService extends CobisDesignerModuleBase {
  constructor(public cobis: CobisCommonsService, public intl: IntlService) {
    super(cobis);
  }

  /*global designerEvents, console */
public timer = 3500;
public container:any = this.cobis.container.tabs;
public tab = this.cobis.container.tabs.getCurrentTab();
//var ASSETS = {

Constants = {
    MENU_VALUE_DATE: "1",
    MENU_REVERSE: "2",
    MENU_PROYECTINST: "7",
    MENU_ASSTSSZCLDZTQ: "14",
    MENU_DISBUSMNT_PART: "17",
    MENU_SIM_REAJ: "18",
}
Amortization = {
    showTableAmortization: (idGrid: any, entities: any, args: any) => {
        let itemsNumber: any = entities.ItemsLoan.length;
        let indexEndColumn: any = 16;
        let i: any;
        for (i = 1; i < itemsNumber; i++) {
            args.commons.api.grid.title(idGrid, "items" + i, entities.ItemsLoan[i].concept, null, null);
            args.commons.api.grid.showColumn(idGrid, "items" + i);

        }
        for (i = itemsNumber; i < indexEndColumn; i++) {
            args.commons.api.grid.hideColumn(idGrid, "items" + i);
        }
    },
    //designer-hint: 6133: 'data' is declared but its value is never read.
    CapitalBalance: (data: any) => {
        //Calcular Total Saldo Capital: Se resta Saldo Capital - Capital del último registro de la tabla de amortización
        //designer-hint: 2581: Cannot find name '$'. Do you need to install type definitions for jQuery? Try `npm i @types/jquery`.
        // $('tr.k-footer-template').contents().each(() => {
        //     //designer-hint: 2339: Property 'cellIndex' does not exist on type 'ASSTSService'.
        //     if (this.cellIndex == 1) {
        //         let div: any = document.createElement("div");
        //         div.className = "text-right";
        //         div.innerHTML = "Totales";
        //         //designer-hint: 2339: Property 'removeChild' does not exist on type 'ASSTSService'.
        //         //designer-hint: 2339: Property 'childNodes' does not exist on type 'ASSTSService'.
        //         this.removeChild(this.childNodes[0]);
        //         //designer-hint: 2339: Property 'appendChild' does not exist on type 'ASSTSService'.
        //         this.appendChild(div);
        //     }
        // });
    },
    resizeGrid: (idGrid: any) => {
        //designer-hint: 2581: Cannot find name '$'. Do you need to install type definitions for jQuery? Try `npm i @types/jquery`.
        //designer-hint: 2304: Cannot find name 'angular'.
        // let gridElement: any = $("#" + idGrid), dataArea: any = gridElement.find(".k-grid-content"), length: any = angular.element(gridElement).data('kendoGrid').dataSource.data().length, heightOne: any = 44.44;
        // if (dataArea.height() > 400) {
        //     dataArea.height(400);
        // } else {
        //     dataArea.height(heightOne * length);
        // }
    }
}
Utils = {
    getQueryStrings: () => {
        let queryDict: any = {};
        location.search.substr(1).split("&").forEach((item: any) => {
            queryDict[item.split("=")[0]] = item.split("=")[1];
        });
        return queryDict;
    },

    Char_convert: (original: any) => {
        let chars: any = ["\u00e1", "\u00e0", "\u00e9", "\u00e8", "\u00ed", "\u00ec", "\u00f3", "\u00f2", "\u00fa", "\u00f9", "\u00c1", "\u00c0", "\u00c9", "\u00c8", "\u00cd", "\u00cc", "\u00d3", "\u00d2", "\u00da", "\u00d9", "\u00f1", "\u00d1"];
        let codes: any = ["%e1", "%e1", "%e9", "%e9", "%ed", "%ed", "%f3", "%f3", "%fa", "%fa", "%c1", "%c1", "%c9", "%c9", "%cd", "%cd", "%d3", "%d3", "%da", "%da", "%f1", "%d1"];
        if (original !== null && original !== undefined && original.constructor === String) {
            for (let i: any = 0; i < chars.length; i++) {
                original = original.replace(chars[i], codes[i]);
            }
        }
        return original;
    },
    IsNull: (parValue: any) => {
        return (parValue === null || parValue === undefined);
    },
    IsNullOrEmpty: (parValue: any) => {
        //designer-hint: 2663: Cannot find name 'Utils'. Did you mean the instance member 'this.Utils'?
        return (this.Utils.IsNull(parValue) || parValue === '');
    },
    generarReporte: (reporte: any, argumentos: any, title: any) => {
        let Crue: any = '?myValue=' + Math.random() + '&';
        let formaMapeo: any = document.createElement("form");
        formaMapeo.target = 'popup_window_' + reporte;
        formaMapeo.method = "POST"; // or "post" if appropriate

        //designer-hint: 2663: Cannot find name 'Utils'. Did you mean the instance member 'this.Utils'?
        if (this.Utils.IsNullOrEmpty(reporte))
            formaMapeo.action = "${contextPath}/cobis/web/reporting/actions/reportingService" + Crue;
        else
            formaMapeo.action = "${contextPath}/cobis/web/reports/" + reporte + Crue;

        let param: any = "";
        for (let i: any = 0; i < argumentos.length; i++) {
            //designer-hint: 2663: Cannot find name 'Utils'. Did you mean the instance member 'this.Utils'?
            param = param + argumentos[i][0] + '=' + this.Utils.Char_convert(argumentos[i][1]) + '&'
        }
        param = param.substr(0, param.length - 1);
        let url: any = formaMapeo.action + param;
        //designer-hint: 2663: Cannot find name 'Utils'. Did you mean the instance member 'this.Utils'?
        if (this.Utils.IsNullOrEmpty(title)) {
            title = 'Reporte';
        }
        //designer-hint: 2304: Cannot find name 'ASSTS'.
        this.cobis.container.tabs.openNewTab('ctsConsole', url, title, true);
    }
}

Navigation = {
    taskRedirect: (
        subModuleId: any,
        taskId: any,
        viewContainerId: any,
        label: any,
        args: any,
        parameters: any
    ) => {
        args.commons.execServer = false;
        let apiNav: any = args.commons.api.navigation;
        apiNav.label = label;
        apiNav.address = {
            moduleId: 'ASSTS',
            subModuleId: subModuleId,
            taskId: taskId,
            taskVersion: "1.0.0",
            viewContainerId: viewContainerId
        };
        apiNav.customDialogParameters = {
            parameters: parameters,
            data: parameters.loan,
            extra: parameters.extra,
            headerID: 'HD_HEADERLSO_968'
        };
        apiNav.navigate(args.commons.controlId);
    }
}
//}
}
