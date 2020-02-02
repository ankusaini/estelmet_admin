import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from 'src/app/shared/services/api.service';
import { MachineDetail } from 'src/app/shared/Models/machineDetails.model';

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

  findProductById(url) {
    return new Observable<any>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      })
    });
  }

  getMachineDetails(url: string): Observable<MachineDetail[]> {
    return new Observable<MachineDetail[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


}
