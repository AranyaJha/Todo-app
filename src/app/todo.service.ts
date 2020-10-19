import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoDetails = [
    { id : 1, date : '14/10/2020', title : 'NPTEL-SE', description : 'NPTEL Week 4 assignment submission deadline' },
    { id : 2, date : '16/10/2020', title : 'Webinar', description : 'Attend a webinar of Animal Welfare at 6pm'},
    { id : 3, date : '18/10/2020', title : 'Lab Work', description : 'Submit Scripting Language lab by 12:30pm'},
  ]

  createComponent(id, date,title, description) {
    this.todoDetails.push({id, date,title, description})
  }

}