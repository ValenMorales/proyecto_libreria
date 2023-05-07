import { Component } from '@angular/core';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  logo:String="assets/images/informacion.png"
  imageSalud:String="assets/images/collageSalud.png";
}
