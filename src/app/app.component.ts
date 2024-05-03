import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Go grocery shopping', true),
    new WishItem('Make dinner')
  ]
  title = 'wishlist';

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
