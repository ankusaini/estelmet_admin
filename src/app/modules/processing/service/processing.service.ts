import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {

  constructor(private apiService: ApiService) { }

  public getAllProductProcessingByProcessingTypeAndStatus(url) {
    return new Observable<any>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      })
    });
  }

  getAllProductProcessingByStatus(url) {
    return new Observable<any>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      })
    });
  }

}
