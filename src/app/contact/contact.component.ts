import { Component, OnInit } from '@angular/core';
import { faInstagram,faYoutube,faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faInstagram = faInstagram
  faYoutube = faYoutube
  faGithub = faGithub
  faTwitter = faTwitter

  constructor() { }

  ngOnInit(): void {
  }

}
