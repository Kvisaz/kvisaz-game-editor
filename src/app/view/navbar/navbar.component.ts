import {Component} from '@angular/core';
import {MainLogicService} from '../../logic/main-logic.service';
import {StringService} from '../../logic/string.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private logic: MainLogicService, public strings: StringService) {}

}
