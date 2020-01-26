import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { WizardResultSubmitComponent } from './wizard-result-submit/wizard-result-submit.component';
import { WorkflowGuard } from './workflow/workflow.guard';
import { WorkflowService } from './workflow/workflow.service';
import { TableViewComponent } from './table-view/table-view.component';


const routes: Routes = [
  { path: 'projectDetails', component: ProjectDetailsComponent },

  { path: 'projectSettings', component: ProjectSettingsComponent, canActivate: [WorkflowGuard] },

  { path: 'deliveryDetails', component: DeliveryDetailsComponent, canActivate: [WorkflowGuard] },

  { path: 'wizardResultSubmit', component: WizardResultSubmitComponent, canActivate: [WorkflowGuard] },

  { path: 'tableView', component: TableViewComponent },

  { path: '', redirectTo:'/projectDetails', pathMatch: 'full'},

  { path: '**', component: ProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})
export class AppRoutingModule { }
