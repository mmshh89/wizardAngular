import { Component, Input, OnInit } from '@angular/core';
import { WizardDataService } from './data/wizard-data.service';

@Component({
  selector: 'app-wizard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'rahnamaMe-start';
  @Input() wizardData;
  

  constructor(private wizardDataService: WizardDataService) { }

  ngOnInit () {
    this.wizardData = this.wizardDataService.getWizardData();
    console.log(this.title + ' loaded!');
  }
}
