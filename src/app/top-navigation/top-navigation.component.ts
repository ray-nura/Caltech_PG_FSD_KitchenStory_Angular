import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  user: string = 'placeHolder';
  emailVerified:boolean = false;

  constructor( private afAuth: AngularFireAuth) {
       this.afAuth.authState.subscribe(d =>
        {
          this.user = d?.displayName || 'placeHolder';
          this.emailVerified = d?.emailVerified||false;
        })
    }
    ngOnInit(): void { }
  Logout(){this.afAuth.signOut();
  }
}
