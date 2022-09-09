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

import { VcLoanpoliyy967160Component } from './vc-loanpoliyy-967160.component';


@NgModule({
  declarations: [
    VcLoanpoliyy967160Component
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
      { path: '', component: VcLoanpoliyy967160Component }
    ]),
    HttpClientModule,
  	TranslateModule.forChild(generateTranslationsConfiguration('/assets/i18n',
      ['ASSTS-', 'DSGNR-'])),
    CobisCommonsModule.forChild( new Environment(environment.production))
  ],
  exports: [VcLoanpoliyy967160Component],
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
export class VcLoanpoliyy967160Module { }