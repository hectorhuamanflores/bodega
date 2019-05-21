import { Injectable } from '@angular/core';
//import { PROVEEDORES} from './proveedores.json';
import { Proveedor} from './proveedor';
import { of,Observable} from 'rxjs';
// para usar con spring
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProveedorService {
  private urlProveedores:string = 'http://localhost:8080/api/proveedores';
  private urlProveedor:string = 'http://localhost:8080/api/proveedor';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor( private http:HttpClient) { }

  getProveedores():Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(this.urlProveedores);
  }
  create(cliente: Proveedor):Observable<Proveedor>{
    return this.http.post<Proveedor>(this.urlProveedor,cliente,{headers:this.httpHeaders});
  }
  getProveedor(id):Observable<Proveedor>{
    return this.http.get<Proveedor>(`${this.urlProveedor}/${id}`);
  }
  update(cliente: Proveedor):Observable<Proveedor>{
    return this.http.put<Proveedor>(`${this.urlProveedor}/${cliente.id}`,cliente,{headers:this.httpHeaders});
  }
  delete(id:number):Observable<Proveedor>{
     return this.http.delete<Proveedor>(`${this.urlProveedor}/${id}`,{headers:this.httpHeaders});
  }
}
