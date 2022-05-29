import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fooditems : FoodItem[];
  cartItem;

  constructor(private foodItemService: FoodItemService, private cartService:CartService) { }

  ngOnInit(): void {
    this.foodItemService.readFoodItem().subscribe ((el)=>{
      this.fooditems = el.map((doc)=>{
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as FoodItem
      })
    })
  }
  addToCart(fooditem:FoodItem){
    this.cartItem = new CartItem();
    this.cartItem.price = fooditem.price;
    this.cartItem.title = fooditem.title;
    this.cartItem.foodId = fooditem.id;
    this.cartItem.quantity = 1;
    this.cartItem.total = fooditem.price * this.cartItem.quantity;
    this.cartService.saveCartItem(this.cartItem);
  }
}
