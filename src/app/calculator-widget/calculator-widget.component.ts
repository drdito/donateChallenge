import { Component, OnInit } from '@angular/core';

const PERCENT = .001;

function el (id){
  return (document.getElementById(id) as any);
}

@Component({
  selector: 'app-calculator-widget',
  templateUrl: './calculator-widget.component.html',
  styleUrls: ['./calculator-widget.component.css']
})
export class CalculatorWidgetComponent implements OnInit {
  displayAnswer: string = "";

  constructor() { }

  ngOnInit() {
  }
  
  onCalculate(e){
    e.preventDefault();
    let userNumber = el('numberEntered').value;
    let answer = this.calculatePercentage(userNumber, PERCENT);
    this.displayAnswer = answer;
  }

  calculatePercentage(baseNum, percentage){
    return `You should consider donating $${(baseNum * percentage).toFixed(2)}!`
  }

}
