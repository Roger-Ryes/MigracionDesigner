import { Injectable } from "@angular/core";
  
import { CobisCommonsService } from "cobis-commons";
import { CobisDesignerModuleBase } from 'cobis-designer';

@Injectable({providedIn: 'root'})
export class LNSPRService extends CobisDesignerModuleBase {
  constructor(public cobis: CobisCommonsService) {
    super(cobis);
  }

  /*global designerEvents, console */
// public getQueryStrings={};
public timer = 3500;
public container: any = this.cobis.container.tabs;
public tab = this.cobis.container.tabs.getCurrentTab();
public getQueryStrings = () => {
    let queryDict: any = {};
    location.search.substr(1).split("&").forEach((item: any) => {
        queryDict[item.split("=")[0]] = item.split("=")[1];
    });
    return queryDict;
}
;

//var LNSPR = {
Utils= {
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
        return (this.Utils.IsNull(parValue) || parValue === '');
    },
    generarReporteModal: (reporte: any, argumentos: any, title: any) => {
        let Crue: any = '?myValue=' + Math.random() + '&';
        let formaMapeo: any = document.createElement("form");
        formaMapeo.target = 'popup_window_' + reporte;
        formaMapeo.method = "POST"; // or "post" if appropriate

        if (this.Utils.IsNullOrEmpty(reporte))
            formaMapeo.action = "${contextPath}/cobis/web/reporting/actions/reportingService" + Crue;
        else
            formaMapeo.action = "${contextPath}/cobis/web/reports/" + reporte + Crue;

        let param: any = "";
        for (let i: any = 0; i < argumentos.length; i++) {
            param = param + argumentos[i][0] + '=' + this.Utils.Char_convert(argumentos[i][1]) + '&'
        }
        param = param.substr(0, param.length - 1);
        let url: any = formaMapeo.action + param;
        if (this.Utils.IsNullOrEmpty(title)) {
            title = 'Reporte';
        }
        this.cobis.container.tabs.openNewTab('ctsConsole', url, title, true);
    }
}
//}
}
