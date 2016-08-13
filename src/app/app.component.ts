import { Component } from '@angular/core';
import { DoublePipe } from './double.pipe';
import { FilterPipe } from './filter.pipe';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  pipes: [DoublePipe, FilterPipe]
})
export class AppComponent {
  myDate= new Date(2016, 7, 24);
  values=['Milk', 'Bread', 'Bean'];
  asyncValue=new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Data is here') ,2000);
  });
}
