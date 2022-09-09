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

import { VcProjectorc636575Component } from './vc-projectorc-636575.component';


@NgModule({
  declarations: [
    VcProjectorc636575Component
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
      { path: '', component: VcProjectorc636575Component }
    ]),
    HttpClientModule,
  	TranslateModule.forChild(generateTranslationsConfiguration('/assets/i18n',
      ['LNSPR-', 'DSGNR-'])),
    CobisCommonsModule.forChild( new Environment(environment.production))
  ],
  exports: [VcProjectorc636575Component],
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
export class VcProjectorc636575Module { }