import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { WorkflowService } from './workflow.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowGuard implements CanActivate {

  constructor(private router: Router, private workflowService: WorkflowService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    let path: String = route.routeConfig.path;
    return this.verifyWorkflow(path);
  }

  verifyWorkflow(path): boolean {
    console.log("Entered '" + path + "' path");

    let firstPath = this.workflowService.getFirstWizInvelidStep(path);
    if (firstPath.length > 0) {
      console.log("Redirected to '" + firstPath + "' that is the first invalid step in our wizard steps,,");
      let url = `/${firstPath}`;
      this.router.navigate([url]);
      return false;
    }    
    return true;
  }
  
}
