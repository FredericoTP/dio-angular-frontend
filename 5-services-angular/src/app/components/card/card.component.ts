import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name: string = ""
  attributesTypes: string[] = []
  photoCover: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
