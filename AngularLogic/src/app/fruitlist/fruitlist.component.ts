import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingleFruitComponent } from './single-fruit/single-fruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';


@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, SingleFruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {
  fontColorGood = 'lightgreen';
  fontColorBad = 'lightcoral';


  nameLog(name: string) {
    console.log(name);
  }
  fruitlistdata = inject(FruitlistdataService);

  addComment(comment: string, index: number) {
    this.fruitlistdata.addCommentToFruit(comment, index);
    
  }


}
