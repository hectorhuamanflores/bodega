import { Injectable } from '@angular/core';

@Injectable()
export class Constants {


    public context_tpadmintool:string = '/tpAdminCore/';
    public teller:string = 'teller';
    public base:string = 'base';
    public safe:string = 'safe';

    public getPathImg:string = 'assets/images/';

    public msjSelectItemTabla:string = 'Seleccione un registro de la tabla.';
    public msjIngresarFecha:string = 'Ingresar fecha.';
    public msjIngresarDato:string = 'Ingresar un dato.';

    public msjDeleteConfirm:string = 'Are you sure you want to delete this item?';

    public msjLocationDefaults1:string = 'This Default already exists.';
    public msjLocationDefaults2:string = 'Do you want to update it?';


    public msjAlreadyExists:string = ' already exists.';

}
