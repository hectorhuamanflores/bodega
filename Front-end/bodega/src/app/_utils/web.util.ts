import { Injectable } from '@angular/core';

export class WebUtil {
  
}
/*import { Injectable } from '@angular/core';
import { Constants } from '../_utils/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class WebUtil {

	constructor(
		private config: AppConfig,
		private router: Router,
		private constants:Constants
	  ) { }

	getSession() {
		if (localStorage.getItem('Authentication') != null) {
			return true;
		} else {
			return false;
		}
	}

	success(data: any): boolean {
		return data.success;
	}

	getData(data: any): any {
		return data.data;
	}

	getMsjError(data: any): string {
		return data.msjError;
	}

	getURL(controller:string):string {
		return this.config.getUrl('BridgeURL').concat(this.constants.context_tpadmintool).concat(controller).concat('/');
	}

	getURLWithOutContext():string {
		return this.config.getUrl('BridgeURL').concat(this.constants.context_tpadmintool);
	}

	getErrorCode(data: any): string {
		return data.serviceError;
	}

	getErrorDescription(data: any): string {
		return data.serviceErrorDescription;
	}

	getErrorMessage(data: any): string {
		return this.getErrorCode(data).concat(" - ").concat(this.getErrorDescription(data));
	}

	formatString(data: any): string {
		if (!data) {
			return this.defaultString();
		} else {
			return data;
		}
	}

	defaultString(): string {
		return "";
	}

	formatNumber(data: any): number {
		if (!data) {
			return this.defaultNumber();
		} else {
			return data;
		}
	}

	defaultNumber(): number {
		return 0;
	}

	isNull(data: any): boolean {
		if (!data) {
			return true;
		}
		return false;
	}

	hasElements(data: any): boolean {
		if (data instanceof Array) {
			if (data.length > 0) {
				return true;
			}
		}
		return false;
	}

	printLogError(error: any) {
		console.log(error.error);
		console.log(error.name);
		console.log(error.message);
		console.log(error.status);
		if (error.status === 403) {
			this.router.navigate([{ outlets: { roHome: null } }]).then(()=>{
				this.router.navigate(['login']);
			});
		}
	}

	isTrue(data: any): boolean {
		if (data !== undefined && data !== null && data !== '') {
			return true;
		}
		return false;
	}

	getText(data: any, defVal: any): string {
		let result:string = defVal;
		if (this.isTrue(data)) {
			result = data;
		}
		return result;
	}

	removeDuplicates(myArr, prop):Array<any> {
		return myArr.filter((obj, pos, arr) => {
			return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
		});
	}

	arrayFactory<T>(obj: { [key: string]: T }): T[] {
		let arr = [];

		Object.keys(obj).forEach(key => {
			arr[key] = obj[key];
		});

		return arr;
	}

	sortByName(a, b) {
		if (a.name.toUpperCase() > b.name.toUpperCase()) {
			return 1;
		}

		if (a.name.toUpperCase() < b.name.toUpperCase()) {
			return -1;
		}
		return 0;
	}

	sortByTlrTranName(a, b) {
		if (a.tlrTranName.toUpperCase() > b.tlrTranName.toUpperCase()) {
			return 1;
		}

		if (a.tlrTranName.toUpperCase() < b.tlrTranName.toUpperCase()) {
			return -1;
		}
		return 0;
	}

	sortByRoleName(a, b) {
		if (a.roleName.toUpperCase() > b.roleName.toUpperCase()) {
			return 1;
		}

		if (a.roleName.toUpperCase() < b.roleName.toUpperCase()) {
			return -1;
		}
		return 0;
	}

	sortByCodeText(a, b) {
		if (a.codeText.toUpperCase() > b.codeText.toUpperCase()) {
			return 1;
		}

		if (a.codeText.toUpperCase() < b.codeText.toUpperCase()) {
			return -1;
		}
		return 0;
	}

	sortFieldName(a, b) {
		if (a.fieldName.toUpperCase() > b.fieldName.toUpperCase()) {
			return 1;
		}

		if (a.fieldName.toUpperCase() < b.fieldName.toUpperCase()) {
			return -1;
		}
		return 0;
	}

	getStringFind(valor): string {
		if (valor === undefined || valor === null || valor === '*') {
			return '*';
		}else{
			return valor.concat('*');
		}
	}

	getErrorHtml(errorHtml: string): string {
		return errorHtml.substring(
			errorHtml.lastIndexOf("ERRORUSERPWD") + 12,
			errorHtml.lastIndexOf("DWPRESURORRE")
		).replace(/&#40;/gi, "(").replace(/&#41;/gi, ")")
	}

	clone(obj: any): any {
		return JSON.parse(JSON.stringify(obj));
	}
}*/
