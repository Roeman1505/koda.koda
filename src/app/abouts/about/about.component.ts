import { Component, OnInit } from '@angular/core';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faAnglesRight = faAnglesRight

  constructor() { }

  ngOnInit(): void {
  }

  title = 'About Us'
  description = '   Technology is a very amazing thing that scientists create. Scientists look at all the things that we as human beings will need in our lives, then make a cool gadget or object. For example, scientists knew that we needed a way to communicate with each other even when we are not together. Because of this, they created a telephone which we can use to talk to other people even when we are not with them.  Technology uses many different ideas like this one, to make our lives very easy and problem-free. It helps us by making our work less because technology does a lot of our work for us.'
}
