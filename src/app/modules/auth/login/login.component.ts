import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable, of, mergeMap } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserModel } from '../_models/user.model';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesService } from '../../languages/languages.service';
import { MenuDataService } from '../../../core/menu-data.service';
import { GlobalFunctionService } from 'src/app/core/global-fun.service';
import { AppComponent } from 'src/app/app.component';
import { AlertService } from '../../loading-toast/alert-model/alert.service';
import { App } from '@capacitor/app';
import { Device } from '@capacitor/device';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component-kris.html',
  styleUrls: ['./login.component-kris.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  // KeenThemes mock, change it to:
  // defaultAuth = {
  //   email: '',
  //   password: '',
  // };
  defaultAuth: any = {
    email: '',
    password: '',
  };
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  firstPage: string;
  platform: string;
  appInfo: any;
  private apiPath = "/app-version/check-latest?"
  isLoading$: Observable<boolean>;
  public showPassword: boolean;
  public showoldPassword: boolean;
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: LanguagesService,
    private menuDataService: MenuDataService,
    private globalService: GlobalFunctionService,
    private appComponent: AppComponent,
    private alertService: AlertService,
    private alertCtrl:AlertController
  ) {
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/'], { replaceUrl: true });
    }
  }

  ngOnInit(): void {
    Device.getInfo().then(info => {
      this.platform = info.platform
    })
    this.initForm();
    // get return url from route parameters or default to '/'
    // this.returnUrl =
    //   this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
    this.unsubscribe[0] = this.route.queryParams.subscribe(params => {
      this.returnUrl = params['redirectTo']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          // Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  submit() {

    if (this.platform != 'web') {
      App.getInfo().then((res) => {
        this.appInfo = res
        let param: any = {
          appId: this.appInfo.id,
          appVersion: this.appInfo.version,
          platform: this.platform
        }
        this.authService.get(this.apiPath, param).toPromise().then(async (response: any) => {
          if (response) {
            let message=`A new version (${response.appVersion}) is now available. Please update your application.`
            if (!response.isLatestVersion) {
              let alert = await this.alertCtrl.create({
                header: 'Update Required',
                message: message,
                buttons: [
                  // { role: "update", text: "Update Now", cssClass: (param.platform == 'android') ? 'update-alert-button-android' : 'update-alert-button-ios' },
                  { role: "download", text: "Direct Download", cssClass: 'download-alert-button' },
                ],
                backdropDismiss: false,
                cssClass: "my-customer-alert1",
              });
              await alert.present();
              alert.onDidDismiss().then((res) => {
                if (res.role == "update") {
                  console.log("Platform: ", this.platform)
                  if (this.platform == 'ios') {
                    window.open("https://apps.apple.com/app/kbzms/id1641859832");
                  }
                  if (this.platform == 'android') {
                    window.open("https://play.google.com/store/apps/details?id=com.bluestone.kbzms_preprod");
                  }
                }
                if (res.role == 'download') {
                  if (this.platform == 'android') {
                    window.open('https://bluestonecenter.sharepoint.com/:u:/s/Everest-DigitalFront-endKBZMS/EVP9U3M2npZPlHdrMWblA0MBosc9YkrIjq5JmIV2eUkSbA?e=nd6b1e','_system');
                  }
                }

              });

            } else {
              if (this.loginForm.controls['email'].valid && this.loginForm.controls['password'].valid) {
                this.hasError = false;
                const loginSubscr = this.authService
                  .login(this.f.email.value, this.f.password.value)
                  .pipe(first(), mergeMap((x) => {
                    return this.menuDataService.getMenusData().pipe(mergeMap((data) => {
                      // console.log("DATAMENU", data[0].page);
                      this.firstPage = data[0].page
                      return of(x)
                    }))
                  }))
                  .subscribe(async (user: UserModel) => {
                    if (user) {
                    
                      this.appComponent.ngOnInit()
                      this.router.navigateByUrl(this.firstPage, { replaceUrl: true });
                    } else {
                      this.hasError = true;
                    }
                  });


                this.unsubscribe.push(loginSubscr);

              } else {
                this.alertService.activate('Enter any username and password', 'Error Message');
              }
            }
          }else{
            if (this.loginForm.controls['email'].valid && this.loginForm.controls['password'].valid) {
              this.hasError = false;
              const loginSubscr = this.authService
                .login(this.f.email.value, this.f.password.value)
                .pipe(first(), mergeMap((x) => {
                  return this.menuDataService.getMenusData().pipe(mergeMap((data) => {
                    // console.log("DATAMENU", data[0].page);
                    this.firstPage = data[0].page
                    return of(x)
                  }))
                }))
                .subscribe(async (user: UserModel) => {
                  if (user) {
                  
                    this.appComponent.ngOnInit()
                    this.router.navigateByUrl(this.firstPage, { replaceUrl: true });
                  } else {
                    this.hasError = true;
                  }
                });


              this.unsubscribe.push(loginSubscr);

            } else {
              this.alertService.activate('Enter any username and password', 'Error Message');
            }
          }
          
        });
      })
    } else {
      if (this.loginForm.controls['email'].valid && this.loginForm.controls['password'].valid) {
        this.hasError = false;
        const loginSubscr = this.authService
          .login(this.f.email.value, this.f.password.value)
          .pipe(first(), mergeMap((x) => {
            return this.menuDataService.getMenusData().pipe(mergeMap((data) => {
              // console.log("DATAMENU", data[0].page);
              this.firstPage = data[0].page
              return of(x)
            }))
          }))
          .subscribe(async (user: UserModel) => {
            if (user) {

              this.appComponent.ngOnInit()
              this.router.navigateByUrl(this.firstPage, { replaceUrl: true });
            } else {
              this.hasError = true;
            }
          });


        this.unsubscribe.push(loginSubscr);

      } else {
        this.alertService.activate('Enter any username and password', 'Error Message');
      }
    }

    // if (this.loginForm.controls['email'].valid && this.loginForm.controls['password'].valid) {
    //   this.hasError = false;
    //   const loginSubscr = this.authService
    //     .login(this.f.email.value, this.f.password.value)
    //     .pipe(first(), mergeMap((x) => {
    //       return this.menuDataService.getMenusData().pipe(mergeMap((data) => {
    //         // console.log("DATAMENU", data[0].page);
    //         this.firstPage = data[0].page
    //         return of(x)
    //       }))
    //     }))
    //     .subscribe((user: UserModel) => {
    //       if (user) {
    //         this.appComponent.ngOnInit()
    //         this.router.navigateByUrl(this.firstPage, { replaceUrl: true });
    //       } else {
    //         this.hasError = true;
    //       }
    //     });


    //   this.unsubscribe.push(loginSubscr);

    // } else {
    //   this.alertService.activate('Enter any username and password', 'Error Message');
    // }
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }


}

