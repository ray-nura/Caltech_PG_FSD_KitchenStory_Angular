import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  cartitems  : CartItem[];
  deleteSet = new Set();

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
 removeAllCartItems(cartItem:CartItem,loc:number ) {
    if (! this.deleteSet.has(cartItem.id)){
      this.deleteSet.add(cartItem.id);
      this.cartService.deleteCartItems(cartItem);
    }
 }
}
