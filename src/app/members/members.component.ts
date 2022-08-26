import { Component, OnInit } from '@angular/core';
import { faInstagram,faYoutube,faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  faInstagram = faInstagram
  faYoutube = faYoutube
  faGithub = faGithub
  faTwitter = faTwitter


  constructor() { }

  ngOnInit(): void {
  }
members =[
  {name:'Ngoswe', imageone:'/assets/images/zenji.jpg', imagetwo:'/assets/images/laptop.jpg',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  galley of type and scrambled it to make a type specimen book."},

  {name:'Eng.Msengi', imageone:'/assets/images/zanzi.jpg', imagetwo:'/assets/images/laptop1.jpg',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  galley of type and scrambled it to make a type specimen book."},
  {name:'Debian', imageone:'/assets/images/ngoro.jpg', imagetwo:'/assets/images/laptop2.jpg',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  galley of type and scrambled it to make a type specimen book."},
  {name:'Roeman', imageone:'/assets/images/kili.jpg', imagetwo:'/assets/images/laptop3.jpg',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  galley of type and scrambled it to make a type specimen book."},

]

}
