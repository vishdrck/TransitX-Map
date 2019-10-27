import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {

   this.items = db.list('/routes').valueChanges();
   console.log(this.items);
  }

  ngOnInit() {
  }
}
