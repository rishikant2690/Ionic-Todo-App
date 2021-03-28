import { Component } from '@angular/core';
import {  IonContent, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public txtTodo = [];
  constructor( private alertController: AlertController) {}

  async  openTodoAlert(){
    const  addTodoAlert = await this.alertController.create({
       // title:"Add a todo",
        message :"Enter your todo",
        inputs:[{
          type : "text",
          name:  "addTodoInput"
        }],
        buttons:[{
          text:"Cancel"
        },
        {
          text:"Add Todo",
          handler:(inputData)=>{
                 let todoText;
                 todoText = inputData.addTodoInput;
                 this.txtTodo.push(todoText);
          }
        }]

      });
      await  addTodoAlert.present();
  }
  
}
