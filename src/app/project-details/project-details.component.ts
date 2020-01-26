import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from '../data/wizardData.model';
import { Router } from '@angular/router';
import { WizardDataService } from '../data/wizard-data.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  title = "Project Details";
  projectDetails: ProjectDetails;
  form: any;

  constructor(private router: Router, private wizardDataService: WizardDataService) { }

  ngOnInit() {
    this.projectDetails = this.wizardDataService.getProjectDetails();
    console.log("Project Details features loaded!");
    this.wizardDataService.tableViewIndex.next(true);
  }

  save(form: any) :boolean {
    if(!form.valid) {
      return false;
    }

    this.wizardDataService.setProjectDetails(this.projectDetails);
    return true;
  }

  nextStep(form: any) {
    if(this.save(form)) {
      this.router.navigate(['/projectSettings']);

      this.wizardDataService.condition1.next(true);
    }
  }

}
