import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../ui/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;

  @Input({ required: true })
  user!: User;

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
