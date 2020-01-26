import { Component, OnInit } from '@angular/core';
import { DataCallService } from '../data/data-call.service';
import { WizardData } from '../data/wizardData.model';
import { WizardDataService } from '../data/wizard-data.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  projectsSource: WizardData;

  constructor(private dataCallService: DataCallService, private wizardDataService: WizardDataService) { }

  ngOnInit() {
    this.loadProjects();
    console.log(this.dataCallService);
    this.wizardDataService.tableViewIndex.next(!this.wizardDataService.tableViewIndex);
  }

  loadProjects() {
    this.dataCallService.getProjects().subscribe(data => {
      this.projectsSource = data;
    });
  }

}
