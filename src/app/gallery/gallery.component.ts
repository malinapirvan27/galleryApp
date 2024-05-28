import { CommonModule, NgIf } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Helper } from '../models/helper';
import { NgFor } from '@angular/common';
import { Component,Output, EventEmitter} from '@angular/core';
import { DataSharingService } from '../data-sharing.service';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule,NgIf],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
	nome: string | undefined;
	categoria: string | undefined;
	noImagesFound: boolean = false;
	imageName: string = '';
	hovered: boolean = false;
	photos: any = [{
		nome: 'foto 1',
		src : 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		categoria : 'astratto',
		isStarred:false
	},{
		nome: 'foto 2',
		src : 'https://images.unsplash.com/photo-1616088410192-d1b123712994?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
		categoria : 'natura',
		isStarred:false
	},{
		nome: 'foto 3',
		src : 'https://media.istockphoto.com/id/1419766496/it/foto/concetti-astratti-di-tecnologia-di-sicurezza-informatica-e-protezione-dei-dati-digitali.jpg?s=612x612&w=0&k=20&c=syTjIIkggLIwud_GVBQFhHK0iTnUdla15qOGuQ_x7vU=',
		categoria : 'informatica',
		isStarred:false
	},{
		nome: 'foto 4',
		src : 'https://t4.ftcdn.net/jpg/03/20/83/77/360_F_320837783_cTZ2UPetNG9GE5Yi42hE2WD17e7abtm4.jpg',
		categoria : 'architettura',
		isStarred:false
	},{
		nome: 'foto 5',
		src : 'data:image/jpeg;base64,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',
		categoria : 'architettura',
		isStarred:false
	},{
		nome: 'foto 6',
		src : 'https://www.istockphoto.com/resources/images/FreeFileIllustration/Free-Illustration-700x860-1466758452.jpg',
		categoria : 'astratto',
		isStarred:false
	},{
		nome: 'foto 7',
		src : 'https://media.istockphoto.com/id/1301592082/it/foto/bellissimo-campo-da-prato-con-erba-fresca-e-fiori-di-tarassaco-giallo-in-natura.jpg?s=612x612&w=0&k=20&c=j_jCUWSgsS5lMu9HWm02XbA8T_YwBWg1S57hJcC68zQ=',
		categoria : 'natura',
		isStarred:false
	}]

	userFavorites: any[] = this.photos.filter((photo: any )=> photo.isStarred == true);
	constructor(private dataSharingService: DataSharingService) { }
	sendData(): void {
		console.log('uff gall '+this.userFavorites);
		//this.dataSharingService.addData([...this.userFavorites]);
		this.dataSharingService.sharedData = [...this.userFavorites];
		console.log('uff gall '+this.dataSharingService.getData());
	  }

	ngOnInit(): void {
		this.sendData();
		//this.dataSharingService.sharedData = [...this.userFavorites];
		this.updateReceivedData();
	  }
	elenco = [...this.photos];
	

	salva(): void {
		if (this.categoria) {
			this.elenco = [];
            let filteredPhotos = this.photos.filter((photo: any )=> photo.categoria === this.categoria);
           
			
			if (filteredPhotos.length > 0) {
				this.noImagesFound = false; // Se vengono trovate immagini, nascondi il messaggio di avviso
				filteredPhotos.forEach((photo:any) => {
            
					this.elenco.push(photo);
				});
			} else {
				this.noImagesFound = true; 
				this.elenco = [...this.photos];
			}
        }else{
			this.noImagesFound = true; 
			this.elenco = [...this.photos];
		}
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
	
	toggleFavorite(photo: any): any {
		photo.isStarred = !photo.isStarred;

		if (photo.isStarred) {
			this.userFavorites.push(photo);
		} else {
			this.userFavorites = this.userFavorites.filter(item => item !== photo);
		}
		this.sendData();
		
		return photo;
	  }

	  updateReceivedData(): void {
		this.userFavorites = this.dataSharingService.getData();
		this.updateIsStarred();
	  }
	  updateIsStarred(): void {
		
		this.elenco.forEach((item) => {
		  const found = this.dataSharingService.sharedData.find((sharedItem) => sharedItem.src === item.src);
		  if (found) {
			item.isStarred = true;
		  } else {
			item.isStarred = false;
		  }
		});
	  }
	
}
