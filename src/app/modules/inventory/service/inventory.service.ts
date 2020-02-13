import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private apiService: ApiService) { }

  getAllGrnByStatus(url) {
    return new Observable<any>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      })
    })
  }

  getAllProductByProductStageAndStatus(url) {
    return new Observable<any>( obs => {
      this.apiService.get(url).subscribe( res => {
        obs.next(res);
      })
    });
  }

  getAllProductByStatus(url) {
    return new Observable<any>( obs => {
      this.apiService.get(url).subscribe( res => {
        obs.next(res);
      })
    });
  }

  public updateProduct(path,productList):Observable<any>
  {
    return new Observable<any>(obs=>{
      this.apiService.put(path,productList).subscribe(res=>{
        obs.next(res);
      });
    });
  }

  public findRequstObjectById(url)
  {
    return new Observable<any>(obs=>{
      this.apiService.get(url).subscribe(res=>{
        obs.next(res);
      });
    });
  }

}
