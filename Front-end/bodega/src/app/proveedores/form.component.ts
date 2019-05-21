import { Component, OnInit } from '@angular/core';
import { Proveedor} from './proveedor';
import { ProveedorService} from './proveedor.service';
import { Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{

  private proveedor: Proveedor = new Proveedor();
  private titulo:string = "Crear Proveedor";
  constructor(private proveedorService:ProveedorService, private router: Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(){
    this.cargarProveedor();
  }
  public cargarProveedor():void{
    this.activateRoute.params.subscribe(
      params =>{
        let id = params['id']
        if(id){
          this.proveedorService.getProveedor(id).subscribe( (proveedor) => this.proveedor = proveedor)
        }
      }
    )
  }
  //// CREAR Proveedor NUEVO /////
  public create():void{
    this.proveedorService.create(this.proveedor)
    .subscribe(
      proveedor => {
        this.router.navigate(['/proveedores'])
        Swal.fire('Nuevo Proveedor',`Proveedor ${proveedor.nombre} creado con éxito`,'success')
      }
    );
  }
  //////////////////////////////
  /////// UPDATE Proveedor ///////
  public update():void{
    this.proveedorService.update(this.proveedor)
    .subscribe(
      proveedor => {
        this.router.navigate(['/proveedores'])
        Swal.fire('Proveedor Actualizado',`Proveedor ${proveedor.nombre} actualizado con éxito! `,'success')
      }
    );
  }
  //////////////////////////////

}
