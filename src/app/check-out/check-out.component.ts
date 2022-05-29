import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cartitems  : CartItem[];
  totalAmount: number = 0;
  count:number =0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.readCartItem().subscribe ((el)=>{
      this.cartitems = el.map((doc)=>{
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as CartItem
      })
    })
  }
 locationsSum(total:number, loc:number ) {
   if (loc == 0){
    this.totalAmount=0;
   }
  this.totalAmount += total;
  }
}
