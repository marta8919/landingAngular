import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  avatar = input.required<string>();
  name = input<string>('');

  imagePath = computed(() => 'assets/users/' + this.avatar());
  onSelectUser() {}
}
