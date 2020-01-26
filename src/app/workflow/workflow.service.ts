import { Injectable } from '@angular/core';
import { STEPS } from './steps.model';



@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  private workflow = [
    {step: STEPS.projectDetails, valid: false},
    {step: STEPS.projectSettings, valid: false},
    {step: STEPS.deliveryDetails, valid: false},
    {step: STEPS.wizardResultSubmit, valid: false}
  ]

  constructor() { }

  validateWizStep(step: string) {
    var found = false;
    for (var i = 0; i < this.workflow.length && !found; i++) {
      if(this.workflow[i].step === step) {
        found = this.workflow[i].valid = true;
      }      
    }
  }


  resetWizSteps() {
    this.workflow.forEach(element => {
      element.valid = false;
    });
  }


  getFirstWizInvelidStep(step: String): String {
    var found = false;
    var valid = true;
    var redirectToStep = '';
    for (var i = 0; i < this.workflow.length && !found && valid; i++) {
      let item = this.workflow[i];
      if (item.step == step) {
        found = true;
        redirectToStep = '';
      } else {
        valid = item.valid;
        redirectToStep = item.step;
      }      
    }
    return redirectToStep;
  }

}
