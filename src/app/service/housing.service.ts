import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProperty } from '../property/property-list/IProperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperty():Observable<IProperty[]>{
    return this.http.get<IProperty[]>('data/properties.json')
  }

  }


