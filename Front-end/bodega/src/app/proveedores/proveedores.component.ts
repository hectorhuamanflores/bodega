import { Component, OnInit } from '@angular/core';
import { Proveedor} from './proveedor';
import { ProveedorService} from "./proveedor.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html'
})
export class ProveedoresComponent implements OnInit{

  proveedores:Proveedor[];
  constructor(private proveedorService: ProveedorService) { }
  ngOnInit(){
    this.proveedorService.getProveedores().subscribe(
      proveedores => this.proveedores = proveedores
    );
    //console.log(proveedores);
  }
  // delete(proveedor: Proveedor):void{
  //
  //   Swal.fire({
  //     title: `Estás seguro?`,
  //     text: `¿Seuro que deseas eliminar al cliente ${proveedor.nombre} ${proveedor.apellido}?`,
  //     type: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Si, Eliminar!'
  //   }).then((result) => {
  //     if (result.value) {
  //       this.proveedorService.delete(proveedor.id).subscribe(
  //         response => {
  //           this.proveedores = this.proveedores.filter(cli => cli !== proveedor)
  //           Swal.fire(
  //             'Cliente Eliminado!',
  //             `Cliente ${proveedor.nombre} eliminado con éxito`,
  //             'success'
  //           )
  //         }
  //       )
  //
  //     }
  //   })
  //
  // }

}
