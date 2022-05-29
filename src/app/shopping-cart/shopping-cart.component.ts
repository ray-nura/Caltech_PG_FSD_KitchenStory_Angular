import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartFormData= new CartItem();
  cartitems : CartItem[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.readCartItem().subscribe ((item)=>{
      this.cartitems = item.map((doc)=>{
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as CartItem
      })
    })
  }

  saveData(){
    this.cartFormData.total = this.cartFormData.price * this.cartFormData.quantity;
    if (this.cartFormData.id==null){
      this.cartService.saveCartItem(this.cartFormData)
    }else {
     this.cartService.updateCartItem(this.cartFormData)
    }
    this.cartFormData= new CartItem();
  }
  editData(cartItem:CartItem){
    this.cartFormData = cartItem;
    this.cartFormData.total = cartItem.price * cartItem.quantity;
  }
  deleteData(cartItem:CartItem){ this.cartService.deleteCartItems(cartItem);}
  clear(){ this.cartFormData= new CartItem();}
}
