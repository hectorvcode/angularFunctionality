import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
    // styles:[`
    //     h1{
    //         color:blue;
    //     }
    // `]
})
export class PersonasComponent {
    deshabilitar = false;
    mensaje= '';
    titulo = 'Ingeniero';
    mostrar = false;

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = 'Persona agregada';
    }

    // agregarData(){
    //     this.mostrar = true;
    //     this.mensaje = 'Ensayo satisfactorio';
    // }

    // modificarTitulo(event: Event){
    //     console.log('Entrando a método modificar Titulo')
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }
}