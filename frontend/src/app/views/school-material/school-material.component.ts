import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SchoolMaterialService } from 'src/app/components/school-material/school-material.service';
import { SchoolMaterial } from 'src/app/components/school-material/school-material.module';


@Component({
  selector: 'app-school-material',
  templateUrl: './school-material.component.html',
  styleUrls: ['./school-material.component.css']
})
export class SchoolMaterialComponent implements OnInit {

	teachers: SchoolMaterial [] = [];
	uploadForm: any;
	logoRelatorio: any;

  constructor(private router: Router, private schoolMaterial: SchoolMaterialService) { }

	ngOnInit() {
	}

	materialApoio(): void {
		// this.router.navigate(['/material/apoio']);
		this.schoolMaterial.getMaterial().subscribe(t => {
			console.log(t);

			this.teachers = t;
			this.schoolMaterial.showMessage(this.teachers[0].name);
		});
	}

	onSelectedFilesChanged(event: any) {
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (e:any) => {;
			this.schoolMaterial.postMaterial(e.target.result).subscribe(t => {
				this.schoolMaterial.showMessage(t);
			});

		}
		// const fd = new FormData();
		// var fileData: File = event.target.files[0];
		// console.log(fileData);

		// if (event) {
		// 	fd.append('_', fileData);

		// 	console.log(fd);


		// 	this.schoolMaterial.postMaterial(fd).subscribe(t => {
		// 		console.log(t);
		// 	});
		// }
	}

	// onUploadClicked(): void {
	// 	this.schoolMaterial.postMaterial(this.selectedFile).subscribe(t => {
	// 		console.log(t);
	// 	});
	// }
}
