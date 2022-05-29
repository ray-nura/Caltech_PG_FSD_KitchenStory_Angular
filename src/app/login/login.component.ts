import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }
  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['/']);
  }
}
// // Sign up with email/password
// signUp(email, password) {
//   return this.afAuth
//     .createUserWithEmailAndPassword(email, password)
//     .then((result) => {
//       window.alert('You have been successfully registered!');
//       console.log(result.user);
//     })
//     .catch((error) => {
//       window.alert(error.message);
//     });
// }
// // Sign in with email/password
// signIn(email, password) {
//   return this.afAuth
//     .signInWithEmailAndPassword(email, password)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       window.alert(error.message);
//     });
// }


