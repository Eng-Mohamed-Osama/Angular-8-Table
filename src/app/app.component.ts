import { Component, DoCheck } from '@angular/core';

export interface Istudents{
  id:number;
  name:string;
  age:number;
  address:string;
  salary:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'TableTask';
  lengthRequired:number=5;
  student:Istudents[]=[
    {
      address:'alex',
      id:1,
      age:20,
      name:'mohamed',
      salary:1500
      
    },
    {
      address:'alex',
      id:2,
      age:20,
      name:'rasha',
      salary:1500
      
    },
    {
      address:'london',
      id:3,
      age:20,
      name:'oshe',
      salary:1500
      
    },
    {
      address:'paris',
      id:4,
      age:20,
      name:'mohamed',
      salary:1500
      
    },
    {
      address:'alex',
      id:5,
      age:20,
      name:'ayman',
      salary:1500
      
    },
    {
      address:'alex',
      id:6,
      age:20,
      name:'abdo',
      salary:1500
      
    },
    {
      address:'london',
      id:7,
      age:20,
      name:'muhmoud',
      salary:1500
      
    },
    {
      address:'paris',
      id:8,
      age:20,
      name:'mohamed',
      salary:1500
      
    },
    {
      address:'alex',
      id:9,
      age:20,
      name:'rony',
      salary:1500
      
    },
    {
      address:'alex',
      id:10,
      age:20,
      name:'hany',
      salary:1500
      
    },
    {
      address:'london',
      id:11,
      age:20,
      name:'randa',
      salary:1500
      
    },
    {
      address:'paris',
      id:12,
      age:20,
      name:'moahmed',
      salary:1500
      
    },
    
    {
      address:'alex',
      id:13,
      age:20,
      name:'mohamed',
      salary:1500
      
    },
    {
      address:'alex',
      id:14,
      age:20,
      name:'mahmoud',
      salary:1500
      
    },
    {
      address:'london',
      id:15,
      age:20,
      name:'moahmed',
      salary:1500
      
    },
    {
      address:'paris',
      id:16,
      age:20,
      name:'moahmed',
      salary:1500,
      
    },
    {
      address:'alex',
      id:17,
      age:20,
      name:'mohamed',
      salary:1500
      
    },
    {
      address:'alex',
      id:18,
      age:20,
      name:'mido',
      salary:1500
      
    },
    {
      address:'london',
      id:19,
      age:20,
      name:'lina',
      salary:1500
      
    },
    {
      address:'paris',
      id:20,
      age:20,
      name:'rihanna',
      salary:1500
      
    },
    {
      address:'alex',
      id:21,
      age:20,
      name:'ellen',
      salary:1500
      
    },
    {
      address:'alex',
      id:22,
      age:20,
      name:'seif',
      salary:1500
      
    },
    {
      address:'london',
      id:23,
      age:20,
      name:'engy',
      salary:1500
      
    },
    {
      address:'paris',
      id:24,
      age:20,
      name:'salm',
      salary:1500
      
    },
    {
      address:'alex',
      id:25,
      age:20,
      name:'eslam',
      salary:1500
      
    },
    {
      address:'london',
      id:26,
      age:20,
      name:'ahmed',
      salary:1500
      
    },
    {
      address:'paris',
      id:27,
      age:20,
      name:'mark',
      salary:1500
      
    },
    {
      address:'alex',
      id:28,
      age:20,
      name:'mohamed',
      salary:1500
      
    },
    {
      address:'alex',
      id:29,
      age:20,
      name:'sally',
      salary:1500
      
    },
    {
      address:'london',
      id:30,
      age:20,
      name:'rana',
      salary:1500
    }
  ];
  convertArr(b){
    return new Array(b)
  }
  startPoint:number=0;
  endPoint:number=5;
  paggingSystem(z,m){
    this.startPoint=z;
    this.endPoint=m;
  }
  switchOrders(w){
    this.lengthRequired =w.value;
    this.startPoint=w.value-w.value;
    this.endPoint=w.value;
  }
  show:boolean ;
  searchNames(c){
    // console.log()
    for(let i=0;i<this.student.length;i++){{
      if (this.student[i].name.indexOf(c.value) > -1) {
        this.show= false;
        console.log("nooo");
        break;
      }else{
        this.show = true;
      }
    }
    // console.log(c);
  }
}
  
  // cxpress = false;
  // changeColor(){
    //   this.cxpress=true;
    // }
}
  