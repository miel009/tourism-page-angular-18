import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private apiUrl = 'https://test.api.amadeus.com'; // Cambia por la URL de tu API

  private _http = inject(HttpClient);

  getAuthToken(): Observable<any> {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', 'IKBsV4ZTH5dMd4MmbxatWiH2ss03LYWp');
    body.set('client_secret', 'gdYlGUfJ16WtPAuB');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this._http.post(this.apiUrl, body.toString(), { headers });
  }

}
