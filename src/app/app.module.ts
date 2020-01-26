import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardNavbarComponent } from './wizard-navbar/wizard-navbar.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { WizardResultSubmitComponent } from './wizard-result-submit/wizard-result-submit.component';
import { WizardDataService } from './data/wizard-data.service';
import { WorkflowService } from './workflow/workflow.service';
import { TableViewComponent } from './table-view/table-view.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './database/in-memory-data.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WizardNavbarComponent,
    ProjectDetailsComponent,
    ProjectSettingsComponent,
    DeliveryDetailsComponent,
    WizardResultSubmitComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    RouterModule
  ],
  providers: [{ provide: WizardDataService, useClass: WizardDataService },
              { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
