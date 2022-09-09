import { ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../../environments/environment';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


import { POPUP_CONTAINER } from '@progress/kendo-angular-popup';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MessageService } from '@progress/kendo-angular-l10n';

import { CobisDesignerModule } from 'cobis-designer';
import { CobisCommonsModule, CobisMessageService, Environment, generateTranslationsConfiguration } from 'cobis-commons';
import {
  CobisDesignerControlsModule,
  InputControlsModule,
  ComplexControlsModule,
  LayoutControlsModule,
  ActionControlsModule,
  PatternControlsModule,
  SimpleControlsModule,
  CommonsControlsModule
} from 'cobis-designer-controls';

import { VcLoansearhc144959Component } from './vc-loansearhc-144959.component';


@NgModule({
  declarations: [
    VcLoansearhc144959Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CobisDesignerModule,
    CommonsControlsModule,
    CobisDesignerControlsModule,
    InputControlsModule,
    ComplexControlsModule,
    LayoutControlsModule,
    ActionControlsModule,
    ButtonsModule,
    PatternControlsModule,
    SimpleControlsModule,
    RouterModule.forChild([
      { path: '', component: VcLoansearhc144959Component }
    ]),
    HttpClientModule,
  	TranslateModule.forChild(generateTranslationsConfiguration('/assets/i18n',
      ['ASSTS-', 'DSGNR-'])),
    CobisCommonsModule.forChild( new Environment(environment.production))
  ],
  exports: [VcLoansearhc144959Component],
  providers: [
    {
      provide: POPUP_CONTAINER,
      useFactory: () => {        
        return { nativeElement: document.body } as ElementRef; 
      }
    },
    {provide: MessageService, useClass: CobisMessageService}
  ]
})
export class VcLoansearhc144959Module { }