import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  public titulo: string;
  public backButton: boolean;

  public checks = [
    { val: 'primary', isChecked: true },
    { val: 'secondary', isChecked: true },
    { val: 'tertiary', isChecked: true },
    { val: 'success', isChecked: true },
    { val: 'warning', isChecked: true },
    { val: 'danger', isChecked: false },
    { val: 'dark', isChecked: false },
    { val: 'medium', isChecked: false },
    { val: 'light', isChecked: false }
  ];

  constructor() {
    this.titulo = 'check box';
    this.backButton = true;
  }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
  }

}
