import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

    public inputType: string = "password";
    public color: string= 'yellow';
    public obj: any = {
        attr1 : 'fenêtre',
        attr2: 20,
        attr3: true
    }

    constructor() { }

    ngOnInit(): void {
        this.color = 'yellow';
    }

    public changeColor(newColor: string): void {
        this.color = newColor;
    }


}
