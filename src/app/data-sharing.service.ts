import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
	sharedData: any[] = [];

	constructor() { }
	addData(data: any): void {
		this.sharedData.push(data);
	  }

	  getData(): any[] {
		return this.sharedData;
	  }
	  removeFromFavorites(image: any) {
		console.log('prima '+JSON.stringify(this.sharedData));
		console.log('image '+JSON.stringify(image));
		this.sharedData = this.sharedData.filter(item => item.src != image);
		console.log('DOPO  '+JSON.stringify(this.sharedData));
	  }
}
