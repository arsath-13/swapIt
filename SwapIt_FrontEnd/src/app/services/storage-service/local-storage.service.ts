import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

const TOKEN = "I_token";
const USERID = "I_user";
const USERROLE = "I_role";

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  
  constructor(
   ) { }
  saveUserId(userId:any){
    window.localStorage.removeItem(USERID);
    window.localStorage.setItem(USERID,userId);
  }

  saveUserRole(role: any) {
    window.localStorage.removeItem(USERROLE);
    window.localStorage.setItem(USERROLE,role);
  }

  saveToken(token: any) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static roleSaver:string;

  static getToken(): any {
    return localStorage.getItem(TOKEN);
  }

  static hasToken(): any {
    if (this.getToken()===null) {
      return false;
    }
    return true;
  }

  static getRole(userRole: string) {
    return userRole
  }

  static isUserLoggedIn(): any {
    if (this.getToken()===null){
      return false;
    }
    const role: any=this.getUserRole();
    return role=="USER";
    
  }

  
  static getUserRole(): any {
    
    return this.roleSaver
  }

  static getUser(): any {
  const userString = localStorage.getItem(USERID);
  return userString !== null ? JSON.parse(userString) : null;
}

  static isAdminLoggedIn(): boolean {
    if (this.getToken()===null){
      return false;
    }
    const role: any=this.getUserRole();
    return role=="ADMIN";
    
  }

  static signOut() {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USERID);
    window.localStorage.removeItem(USERROLE);
  }

}
