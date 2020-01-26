import { Injectable } from '@angular/core';
import { WizardData, ProjectDetails, ProjectSettings, DeliveryDetails } from './wizardData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/steps.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardDataService {

  private wizardData: WizardData = new WizardData();
  private isProjectDetailsValid: boolean = false;
  private isProjectSettingsValid: boolean = false;
  private isDelivaryDetailsValid: boolean = false;


  public tableViewIndex = new BehaviorSubject<boolean>(true);

  public condition1 = new BehaviorSubject<boolean>(false);
  public condition2 = new BehaviorSubject<boolean>(false);
  public condition3 = new BehaviorSubject<boolean>(false);
  public condition4 = new BehaviorSubject<boolean>(false);
  


  constructor(private workflowService: WorkflowService) { }


  getProjectDetails(): ProjectDetails {

    var projectDetails: ProjectDetails = {
      name: this.wizardData.name,
      owner: this.wizardData.owner,
      customer: this.wizardData.customer,
      email: this.wizardData.email,
      phone: this.wizardData.phone,
      webSite: this.wizardData.webSite
    }

    return projectDetails;
  }

  setProjectDetails(data: ProjectDetails) {

    this.isProjectDetailsValid = true;
    this.wizardData.name = data.name;
    this.wizardData.owner = data.owner;
    this.wizardData.customer = data.customer;
    this.wizardData.email = data.email;
    this.wizardData.phone = data.phone;
    this.wizardData.webSite = data.webSite;
    this.workflowService.validateWizStep(STEPS.projectDetails);
  }



  getProjectSettings(): ProjectSettings {

    var projectSettings: ProjectSettings = {
      language: this.wizardData.language,
      time: this.wizardData.time,
      communicationEmail: this.wizardData.communicationEmail,
      communicationSms:  this.wizardData.communicationSms,
      communicationPhone:  this.wizardData.communicationPhone
    }

    return projectSettings;
  }

  setProjectSettings(data: ProjectSettings) {

    this.isProjectSettingsValid = true;
    this.wizardData.language = data.language;
    this.wizardData.time = data.time;
    this.wizardData.communicationEmail = data.communicationEmail;
    this.wizardData.communicationSms = data.communicationSms;
    this.wizardData.communicationPhone = data.communicationPhone;
    this.workflowService.validateWizStep(STEPS.projectSettings);
  }



  getDeliveryDetails(): DeliveryDetails {

    var deliveryDetails: DeliveryDetails = {
      address1: this.wizardData.address1,
      address2: this.wizardData.address2,
      postCode: this.wizardData.postCode,
      state: this.wizardData.state,
      country: this.wizardData.country,
      city: this.wizardData.city
    }

    return deliveryDetails;
  }

  setDeliveryDetails(data: DeliveryDetails) {

    this.isDelivaryDetailsValid = true;
    this.wizardData.address1 = data.address1;
    this.wizardData.address2 = data.address2;
    this.wizardData.postCode = data.postCode;
    this.wizardData.state = data.state;
    this.wizardData.country = data.country;
    this.wizardData.city = data.city;
    this.workflowService.validateWizStep(STEPS.deliveryDetails);
  }



  getWizardData(): WizardData {
    return this.wizardData;
  }


  resetWizardData(): WizardData {
    this.workflowService.resetWizSteps();
    this.wizardData.clear();
    this.isProjectDetailsValid = this.isProjectSettingsValid = this.isDelivaryDetailsValid = false;
    return this.wizardData;    
  }


  isWizardDataValid(): boolean {
    return this.isProjectDetailsValid && this.isProjectSettingsValid && this.isDelivaryDetailsValid;
  }


}
