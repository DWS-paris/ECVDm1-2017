import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    .test{ font-size: 3em }
    .blueColor{ color:yellow }
  `]
})
export class DashboardComponent implements OnInit {

  // Création d'un collection de données
  public dataArray: Array<string | boolean>

  public showList: boolean = false

  public toogleList = (): boolean => {
    return this.showList = !this.showList
  } 

  public formSubmit = (): void => {
    console.log(this.userObject)
  }

  public userObject = {
    userName: ``,
    userMessage: ``
  }

  constructor() {

    this.dataArray = [
      `Julien`,
      `Paul`,
      `Abdel`,
      `Sophie`,
      true
    ]
   }

  

  ngOnInit() {
  }

}
