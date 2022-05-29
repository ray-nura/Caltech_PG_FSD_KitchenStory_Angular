import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartItem } from './cart-item';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private fireStore : AngularFirestore) { }

  saveCartItem(cartitem:CartItem){
    this.fireStore.collection("cartItems").add({...cartitem});
  };

  readCartItem (){
    return this.fireStore.collection("cartItems").snapshotChanges();
  }

  updateCartItem ( cartitem:CartItem){
    this.fireStore.doc('cartItems/'+cartitem.id).update({...cartitem});
  }

  deleteCartItems ( cartitem:CartItem ) {
    this.fireStore.doc('cartItems/'+cartitem.id).delete();
  }
}
