import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from 'src/app/shared/services/api.service';
import { MachineDetail } from 'src/app/shared/Models/machineDetails.model';
import { Company } from 'src/app/shared/Models/company.model.';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import { Product } from 'src/app/shared/Models/product.model.';

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

  getMachineDetails(url) {
    return new Observable<MachineDetail[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllCompany(url) {
    return new Observable<Company[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllWarehouse(url) {
    return new Observable<Warehouse[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllProductByProductStageAndStatus(url) {
    return new Observable<Product[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


}
