import { Component, OnInit } from '@angular/core';
import { DeliveryDetails } from '../data/wizardData.model';
import { Router } from '@angular/router';
import { WizardDataService } from '../data/wizard-data.service';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {

  title = "Setup Your Address";
  deliveryDetails: DeliveryDetails;
  form: any;

  constructor(private router: Router, private wizardDataService: WizardDataService) { }

  ngOnInit() {
    this.deliveryDetails = this.wizardDataService.getDeliveryDetails();
    console.log("Delivery Details featrues loaded!");
    this.wizardDataService.tableViewIndex.next(true);
  }

  save(form: any) : boolean {
    if(!form.valid) {
      return false;
    }

    this.wizardDataService.setDeliveryDetails(this.deliveryDetails);
    return true;
  }

  previousStep(form: any) {
    if(this.save(form)) {
      this.router.navigate(['/projectSettings']);
    }
  }

  nextStep(form: any) {
    if(this.save(form)) {
      this.router.navigate(['/wizardResultSubmit']);

      this.wizardDataService.condition3.next(true);
    }
  }

}
