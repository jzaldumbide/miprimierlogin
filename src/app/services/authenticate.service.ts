import { Injectable } from '@angular/core';
import {} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

registerUser(){}
loginUser(){}
logoutUser(){}
userDetails(){
  return this.afAuth.user;
}

}
