import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { UserModel } from '../_models/user.model';
import { AuthModel } from '../_models/auth.model';
import { AuthHTTPService } from './auth-http';
import { environment } from 'src/environments/environment';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
const LAYOUT_CONFIG_LOCAL_STORAGE_KEY = `${environment.appVersion}-layoutConfig`;

@Injectable({
  providedIn: 'root',
})

export class AuthService implements OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  private baseUrl = environment.apiUrl
  // public fields
  currentUser$: Observable<UserModel>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserModel>;
  isLoadingSubject: BehaviorSubject<boolean>;
  token: any
  isLoggedIn: any
  get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }
  set currentUserValue(user: UserModel) {
    this.currentUserSubject.next(user);
  }
  get authToken() {
    const auth = this.getAuthFromLocalStorage();
    if (!auth || !auth.accessToken) {
      return null
    }
    return auth.accessToken
  }
  constructor(
    private authHttpService: AuthHTTPService,
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserModel>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    const subscr = this.getUserByToken().subscribe();
    this.unsubscribe.push(subscr);
  }
  // public methods
  login(email: string, password: string): Observable<UserModel> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.login(email, password).pipe(
      map((res: any) => {
        // console.log(res);
        let auth = new AuthModel()
        auth.setAuth(res);
        console.log("AUTH", res);
        const result = this.setAuthFromLocalStorage(auth);
        this.setToken(res.token)
        return result;
      }),
      switchMap(() => this.getUserByToken()),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
  get(url: string, param?: HttpParams): Observable<any> {
    return this.httpClient.get(this.baseUrl + url, { params: param })
  }
  logout(url?: string) {
    localStorage.removeItem(this.authLocalStorageToken);
    localStorage.removeItem('authToken')
    // let url = `${this.router.url}`;
    // console.log(url);
    this.router.navigate(['/auth/login'], {
      queryParams: { redirectTo: url },
      replaceUrl: true
    });
  }
  async setToken(token: string) {
    this.token = token
    this.isLoggedIn = true
    await localStorage.setItem('authToken', token,);
  }
  async checkToken() {
    const value = await localStorage.getItem('authToken')
    return value
  }
  async setSection(time: number) {
    await localStorage.setItem('setSession', time + "",);
  }
  async getSection() {
    const value = await localStorage.getItem('setSession')
    return value
  }
  getUserByToken(): Observable<UserModel> {
    const auth = this.getAuthFromLocalStorage();
    if (!auth || !auth.accessToken) {
      return of(undefined);
    }
    // this.isLoadingSubject.next(true);
    // return this.authHttpService.getUserByToken(auth.accessToken).pipe(
    //   map((user: UserModel) => {
    //     if (user) {
    //       this.currentUserSubject = new BehaviorSubject<UserModel>(user);
    //     } else {
    //       this.logout();
    //     }
    //     return user;
    //   }),
    //   finalize(() => this.isLoadingSubject.next(false))
    // );
    let user: UserModel = new UserModel();
    user.setUser(auth)
    // this.currentUserSubject = new BehaviorSubject<UserModel>(user);
    this.currentUserSubject.next(user)
    return of(user)
  }
  // need create new user then login
  registration(user: UserModel): Observable<any> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.createUser(user).pipe(
      map(() => {
        this.isLoadingSubject.next(false);
      }),
      switchMap(() => this.login(user.email, user.password)),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
  forgotPassword(email: string): Observable<boolean> {
    this.isLoadingSubject.next(true);
    return this.authHttpService
      .forgotPassword(email)
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }
  // private methods
  private setAuthFromLocalStorage(auth: AuthModel): boolean {
    // store auth accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (auth && auth.accessToken) {
      localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
      return true;
    }
    return false;
  }
  private getAuthFromLocalStorage(): AuthModel {
    try {
      const authData = JSON.parse(
        localStorage.getItem(this.authLocalStorageToken)
      );
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}