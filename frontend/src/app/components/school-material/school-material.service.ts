import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { SchoolMaterial } from './school-material.module';

@Injectable({
  providedIn: 'root'
})
export class SchoolMaterialService {

	baseUrl = "http://localhost:3000/material";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
	  this.snackBar.open(msg, 'Fechar', {
		  duration: 3000,
		  horizontalPosition: 'right',
		  verticalPosition: 'top'
	  })
  }

  getMaterial(): Observable<SchoolMaterial []> {
	return this.http.get<SchoolMaterial []>(this.baseUrl)
  }


  postMaterial(image: any): Observable<any> {
	return this.http.post<any>(this.baseUrl, {image: image});
  }
}
