import { Component, OnInit } from '@angular/core';
import { faFacebook, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  icons ={
    youtube:faYoutube,
    facebook : faFacebook,
    pinterest : faPinterest
  }
  constructor() { }

  ngOnInit(): void {
  }

}
