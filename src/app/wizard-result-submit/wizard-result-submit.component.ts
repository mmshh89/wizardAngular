import { Component, OnInit, Input } from '@angular/core';
import { WizardDataService } from '../data/wizard-data.service';
import { WizardData } from '../data/wizardData.model';
import { Router } from '@angular/router';
import { DataCallService } from '../data/data-call.service';

@Component({
  selector: 'app-wizard-result-submit',
  templateUrl: './wizard-result-submit.component.html',
  styleUrls: ['./wizard-result-submit.component.css']
})
export class WizardResultSubmitComponent implements OnInit {

  title = "Review your Dateils and Submit";
  @Input() wizardData: WizardData;
  isFormValid: boolean = false;

  constructor(private wizardDataService: WizardDataService, private router: Router, private dataCallService: DataCallService) { }

  ngOnInit() {
    this.wizardData = this.wizardDataService.getWizardData();
    this.isFormValid = this.wizardDataService.isWizardDataValid();
    console.log("Wizard Result Submit feature loaded!");
    this.wizardDataService.tableViewIndex.next(true);
  }

  submit() {
    if (!this.isFormValid)
      return;


    const newProject = this.wizardData;
    console.log(`New Project: ${newProject}`);
    this.dataCallService.addProject(newProject).subscribe(result => {
      if (result) {
        this.router.navigate(['/tableView']);
        //this.wizardData = this.wizardDataService.resetWizardData();
        //this.isFormValid = false;
        console.log(this.wizardData);
        
        this.wizardDataService.condition4.next(true);
      }
    });
  }

}
