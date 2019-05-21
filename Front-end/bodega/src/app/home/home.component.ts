import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
//import { DomSanitizer } from '@angular/platform-browser';

//import { AuthenticationService } from '../_services/authentication.service';
//import { WebUtil } from '../_utils/web.util';
//import { User } from '../_models/User';
//import { Constants } from '../_utils/constants';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router
		//private authenticationService: AuthenticationService,
		//private constants: Constants
		//private webUtil: WebUtil
	   ) {

		/*this.route.params.subscribe(params => {
			if(this.webUtil.getSession()){
				this.getOptByRol(params['rol']);
			}else{
				this.router.navigate(['login']);
			}
		});*/

		document.body.style.backgroundColor = "#fff";

	}

//  user:User=new User();

  lstOpts = null;
  //logoBcp = this.constants.getPathImg.concat('logoBodega.png');
  logoBcp = "assets/images/logoBodega.png";


  ngOnInit() {
  }

  getOptByRol(rol){
  /*	this.authenticationService.getOptByRol(rol).subscribe(
  		res => {
			this.setDatos(res);
		},(err: HttpErrorResponse) => {
			this.webUtil.printLogError(err);
		});*/
  }

  setDatos(json:any){
	//this.user = json.user;
	//this.lstOpts = json.lstOpt;
  }

  goContent(idPage){
  	switch (idPage) {
  		case "41": {
  			this.router.navigate([{ outlets: { roHome: [ 'BusinessCalendar' ] }}]);
  			break;
  		}

      //hroman
      case "81": {
      	this.router.navigate([{ outlets: { roHome: [ 'CodeCategory' ] }}]);
      	break;
      }
      case "2023": {
      	this.router.navigate([{ outlets: { roHome: [ 'CodeGeneric' ] }}]);
      	break;
      }
      case "182": {
      	this.router.navigate([{ outlets: { roHome: [ 'GlobalDefault' ] }}]);
      	break;
      }
      case "1000000": {
      	this.router.navigate([{ outlets: { roHome: [ 'LocationCode' ] }}]);
      	break;
      }
      case "501": {
      	this.router.navigate([{ outlets: { roHome: [ 'Location' ] }}]);
      	break;
      }
      case "1019": {
      	this.router.navigate([{ outlets: { roHome: [ 'OrgHierarchyTree' ] }}]);
      	break;
      }
      case "521": {
      	this.router.navigate([{ outlets: { roHome: [ 'ProductCategory' ] }}]);
      	break;
      }
      case "2025": {
      	this.router.navigate([{ outlets: { roHome: [ 'Reason' ] }}]);
      	break;
	  }
      case "641": {
      	this.router.navigate([{ outlets: { roHome: [ 'User' ] }}]);
      	break;
	  }
      case "401": {
      	this.router.navigate([{ outlets: { roHome: [ 'Workstation' ] }}]);
      	break;
      }
      case "63": {
      	this.router.navigate([{ outlets: { roHome: [ 'CashDrawer' ] }}]);
      	break;
      }
      case "121": {
      	this.router.navigate([{ outlets: { roHome: [ 'ConsignmentType' ] }}]);
      	break;
      }
      case "181": {
      	this.router.navigate([{ outlets: { roHome: [ 'DeviceAssign' ] }}]);
      	break;
      }
      case "301": {
      	this.router.navigate([{ outlets: { roHome: [ 'TellerLimit' ] }}]);
      	break;
      }
      case "2024": {
      	this.router.navigate([{ outlets: { roHome: [ 'TransactionITF' ] }}]);
      	break;
      }

      case "361": {
      	console.log("Role Definition");
      	break;
      }
      case "381": {
      	console.log("Desktop Definition");
      	break;
      }

      default: {
      	console.log("Invalid choice");
      	break;
      }
    }
  }

  logOff(){
	this.router.navigate([{ outlets: { roHome: null } }]).then(()=>{
		this.router.navigate(['login']);
	});


  }

}
