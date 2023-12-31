import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/_services/auth.service';
import { environment } from 'src/environments/environment';
// Highlight JS
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { SplashScreenModule } from './_metronic/partials/layout/splash-screen/splash-screen.module';
import { KBZToastModule } from './modules/loading-toast/toast/kbz-toast.module';
import { KBZLoadingModule } from './modules/loading-toast/loading/loading.module';
import { HttpConfigInterceptor } from './core/httpconfig.interceptor';
import { CommonModule, DecimalPipe } from '@angular/common';
import { AlertModelModule } from './modules/loading-toast/alert-model/alert-model.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CalendarModule } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DateAdapter } from '@angular/material/core';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { LanguagesService } from './modules/languages/languages.service';
import { LanguageModule } from './modules/languages/languages.modules';
import { MenuDataService } from './core/menu-data.service';
import { MenuDataRoleService } from './core/menu-data-role.service';
import { AllErrorHandler } from './all-error.handler';
import { map, mergeMap } from 'rxjs/operators';

// #fake-start#
// #fake-end#
function appInitializer(authService: AuthService, menuService: MenuDataService, menuDataRoleService: MenuDataRoleService) {
  return () => {
    return new Promise((resolve: any) => {
      authService.getUserByToken().pipe(mergeMap((x) => {
        return menuService.getMenusData()
      }), map((x) => {
        if (!x) {
          return authService.getUserByToken()
        }
      })).subscribe().add(resolve);
    });
  };
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    SplashScreenModule,
    IonicModule,
    HttpClientModule,
    HighlightModule,
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    NgbModalModule,
    KBZToastModule,
    KBZLoadingModule,
    AlertModelModule,
    OverlayModule,
    MatTooltipModule,
    LanguageModule,
    MatSelectModule,
    NgSelectModule,
    CalendarModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ServiceWorkerModule.register('combined-sw.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
    IonicModule.forRoot({})
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideMessaging(() => getMessaging())
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService, MenuDataService, MenuDataRoleService],
    },
    // { provide: ErrorHandler, useClass: AllErrorHandler },
    File,
    LanguagesService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          json: () => import('highlight.js/lib/languages/json')
        },
      },
    },
    DecimalPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
