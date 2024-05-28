import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
	constructor(private dataSharingService: DataSharingService) { }
	receivedData: any[] = [];
	imageName: string = '';
	ngOnInit(): void {
		this.receivedData = this.dataSharingService.sharedData; // Recupera l'array condiviso
		console.log('this.receivedData fav'+this.receivedData);
	  }

	  showModal(imageUrl: string,imageName : string): void {

		const modalImage = document.getElementById('modal-image');
		//console.log('ao '+modalImage);
		if (modalImage) {
			modalImage.setAttribute('src', imageUrl);
			console.log('ao '+imageName);
			this.imageName = imageName;
		
		}
	}

	removeImage(image: any): void {
		this.dataSharingService.removeFromFavorites(image);
		this.receivedData = this.dataSharingService.sharedData; // Aggiorna l'array dopo la rimozione
		console.log('received '+JSON.stringify(this.receivedData) );
	  }
	
}
