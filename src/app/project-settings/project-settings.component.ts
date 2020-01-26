import { Component, OnInit } from '@angular/core';
import { ProjectSettings } from '../data/wizardData.model';
import { Router } from '@angular/router';
import { WizardDataService } from '../data/wizard-data.service';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.css']
})
export class ProjectSettingsComponent implements OnInit {
  
  title = "Project Settings";
  projectSettings: ProjectSettings;
  form: any;

  languageDatas: Array<any> = [
    { name: 'English', value: 'english' },
    { name: 'French', value: 'french' },
    { name: 'Germany', value: 'germany' },
    { name: 'Farsi', value: 'farsi' },
    { name: 'China', value: 'china' }
  ]

  timeDatas: Array<any> = [
    { name: '(UTC+04:00)-Yerevan', value: '(UTC+04:00)-yerevan' },
    { name: '(UTC+03:00)-Nairobi', value: '(UTC+03:00)-nairobi' },
    { name: '(UTC+03:30)-Tehran', value: '(UTC+03:30)-tehran' },
    { name: '(UTC+04:00)-Baku', value: '(UTC+04:00)-baku' },
    { name: '(UTC+09:00)-Seoul', value: '(UTC+09:00)-seoul' }
  ]

  constructor(private router: Router, private wizardDataService: WizardDataService) { }

  ngOnInit() {
    this.projectSettings = this.wizardDataService.getProjectSettings();
    console.log("Project Settings features loaded!");
    this.wizardDataService.tableViewIndex.next(true);
    
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.wizardDataService.setProjectSettings(this.projectSettings);
    return true;
  }

  nextStep(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/deliveryDetails']);

      this.wizardDataService.condition2.next(true);
    }
  }

  previousStep(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/projectDetails']);
    }
  }

}
