import { Component, OnInit, Input } from '@angular/core';
import { WizardDataService } from '../data/wizard-data.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WizardData } from '../data/wizardData.model';

@Component({
  selector: 'app-wizard-navbar',
  templateUrl: './wizard-navbar.component.html',
  styleUrls: ['./wizard-navbar.component.css']
})
export class WizardNavbarComponent implements OnInit {

  cond1: boolean;
  cond2: boolean;
  cond3: boolean;
  cond4: boolean;
  
  tVIndex: boolean;

  @Input() wizardData: WizardData;
  isFormValid: boolean = false;

  constructor(private wizardDataService: WizardDataService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.wizardDataService.tableViewIndex.subscribe((bolIndex) => {
      this.tVIndex = bolIndex;
    })

    this.wizardDataService.condition1.subscribe((conditon) => {
      this.cond1 = conditon;
    });
    this.wizardDataService.condition2.subscribe((conditon) => {
      this.cond2 = conditon;
    });
    this.wizardDataService.condition3.subscribe((conditon) => {
      this.cond3 = conditon;
    });
    this.wizardDataService.condition4.subscribe((conditon) => {
      this.cond4 = conditon;
    });

    this.wizardData = this.wizardDataService.getWizardData();
    this.isFormValid = this.wizardDataService.isWizardDataValid();
  }

  addNewPro(): void {
    // this.router.navigateByUrl('/projectDetails', {skipLocationChange: true}).then(() => {
    //   console.log(decodeURI(this.location.path()));
    //   this.router.navigate([decodeURI(this.location.path())]);
    // });
    this.wizardDataService.tableViewIndex.next(!this.tVIndex);
    this.wizardData = this.wizardDataService.resetWizardData();
    this.isFormValid = false;
    this.router.navigate(['/projectDetails']);

    this.wizardDataService.condition1.next(false);
    this.wizardDataService.condition2.next(false);
    this.wizardDataService.condition3.next(false);
    this.wizardDataService.condition4.next(false);
  }

}
