import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  foodFormData= new FoodItem();
  fooditems : FoodItem[];

  constructor(private foodItemService: FoodItemService) { }

  ngOnInit(): void {
    this.foodItemService.readFoodItem().subscribe ((el)=>{
      this.fooditems = el.map((doc)=>{
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as FoodItem
      })
      console.log("Item Received:" + el);
    })
  }
  saveData(){
    if (this.foodFormData.id==null){
      this.foodItemService.saveFoodItem(this.foodFormData)
    }
    else {
      this.foodItemService.updateFoodItem(this.foodFormData)
    }
    this.foodFormData= new FoodItem();
  }
  editData(afoodItem:FoodItem){
    this.foodFormData= afoodItem;
  }
  deleteData(afoodItem:FoodItem){
    this.foodItemService.deleteFoodItems(afoodItem);
  }
  clear(){
    this.foodFormData= new FoodItem();
  }
}