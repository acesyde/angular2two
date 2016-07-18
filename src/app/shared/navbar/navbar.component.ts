import { Component, OnInit } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES]
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
