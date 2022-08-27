import { Component, OnInit } from '@angular/core';
import { faHouse,faInfoCircle,faPhone,faPenNib,faBlog,faBars,faCaretDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

faHouse = faHouse
faInfoCircle = faInfoCircle
faPhone =faPhone
faPenNib = faPenNib
faBlog =faBlog
faBars = faBars
faCaretDown = faCaretDown
opened =false;
width = '768px'
log(state: any){
  console.log(state);
}


  constructor() { }

  ngOnInit(): void {
  }
home = 'Home'
about = 'About'
contact = 'Contact'
projects = 'Projects'
blog = 'Blog'

}
