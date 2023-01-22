import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;
  @Input() placeHolder: string;
  value:string;

  @Output() valueChange:EventEmitter<string> = new EventEmitter()

  constructor() {}
  ngOnInit(): void {}

  onValueChange(){
    this.valueChange.emit(this.value)
  }

}
