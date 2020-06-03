import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { 
    const colors = ['', 'lightCyan', 'darkSkyBlue', 'aquamarine', 'electricBlue']

    const sections = document.getElementsByTagName('section')

    window.addEventListener('scroll', function () {

      const scrollFromTop = window.pageYOffset

      for (let i = 0; sections.length > i; i++) {

        if (scrollFromTop <= sections[i].offsetTop) {
          document.body.className = colors[i]
          break
        }

      }

    })
  
  }

  ngOnInit(): void {
  }

}
