import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../core/model/page/Pageable';
import { PrestamoPage } from './model/PrestamoPage';
import { PRESTAMO_DATA } from './model/mock-prestamos';
import { Prestamo } from './model/Prestamo';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(
    private http : HttpClient
  ) { }

  getPrestamos(pageable: Pageable): Observable<PrestamoPage> {
    return this.http.post<PrestamoPage>('http://localhost:8080/prestamo', {pageable:pageable});
  }

  savePrestamo(prestamo: Prestamo): Observable<void>{
    return of(null);
  }

  deletePrestamo(idPrestamo: number): Observable<void>{
    return of(null);
  }

}
