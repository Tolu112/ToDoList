import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, takeLast } from 'rxjs';
import { ToDo } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: TemplateRef<NgIfContext<boolean>>|null;
  title = 'To Do List';
  todoList: ToDo[] = [
    {
      task: "Check Emails",
      completed: false
    },

    {
      task: "Pay Bills",
      completed: false
    },

    {
      task: "Meal Prep",
      completed: false
    },

    {
      task: "Complete Lab",
      completed: false
    },
    {
      task: "Laundry",
      completed: false
    },
    {
      task: "Cleaning",
      completed: false
    },
    {
      task: "Water Plants",
      completed: false
    },
    {
      task: "Call Family",
      completed: false
    },
    {
      task: "Volunteer",
      completed: false
    },
    {
      task: "Workout",
      completed: false
    },

  ];
  addTask(formParam: NgForm): void{
    let newTask: string = formParam.form.value.task;
    let addedTask: ToDo = {
      task: newTask,
      completed: false,
    };
    this.todoList.push(addedTask);
  }
  completeTask(i: number): void{
    this.todoList.map (t => t.completed = true);
  }
  removeTask(i: number): void{
    this.todoList.splice(i, 1);
  }

  
}

