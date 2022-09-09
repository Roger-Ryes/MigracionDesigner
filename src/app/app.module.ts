import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CobisDesignerControlsModule } from 'cobis-designer-controls';
import { CobisDesignerModule } from 'cobis-designer';
import { CobisCommonsModule, Environment, CobisMessageService, generateTranslationsConfiguration } from 'cobis-commons';

import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateLoader, TranslateService, TranslateModule } from '@ngx-translate/core';

import { environment } from '../environments/environment.prod';
import { AppEnvInitService } from './services/app-env-init.service';
import { MessageService } from '@progress/kendo-angular-l10n';

// TODO: Add manual controls imports


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CobisDesignerModule,
    CobisDesignerControlsModule,
    AppRoutingModule,
    /* MANUAL CONTROLS */
    // TODO: Add manual modules imports
    TranslateModule.forRoot(
      generateTranslationsConfiguration('/assets/i18n',
        ['ASSTS-', 'LNSPR-', 'DSGNR-'])
    ),
    CobisCommonsModule.forChild(new Environment(environment.production))
  ],
  providers: [
    AppEnvInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: (appLoadService: AppEnvInitService) => () => appLoadService.init('assets/app-env.json'),
      deps: [AppEnvInitService],
      multi: true
    },
    { provide: MessageService, useClass: CobisMessageService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }