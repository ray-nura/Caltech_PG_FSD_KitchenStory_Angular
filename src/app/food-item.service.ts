import { Injectable } from '@angular/core';
import { FoodItem } from './food-item';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  constructor( private fireStore : AngularFirestore) { }

  saveFoodItem(fooditem:FoodItem){
    console.log("From Service");
    console.log(fooditem);
    this.fireStore.collection("foodItems").add({...fooditem});
  };

  readFoodItem (){
    return this.fireStore.collection("foodItems").snapshotChanges()
  }

  updateFoodItem ( fooditem:FoodItem){
    this.fireStore.doc('foodItems/'+fooditem.id).update({...fooditem})
  }

  deleteFoodItems ( fooditem:FoodItem ) {
    this.fireStore.doc('foodItems/'+fooditem.id).delete()

  }

  getAll() {
    return this.fireStore.collection("foodItems");
  }
}
