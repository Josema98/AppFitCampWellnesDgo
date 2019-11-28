import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

  // whatch(_whatch) {
  //   this.youtube.openVideo('whatch');
  // }

}


// export class RutinasPage {
//   lista: string[];

//   constructor() {
//       this.inicializar();
//     }

//     inicializar() {
//         this.lista = [
//           'Pierna',
//           'Brazo',
//           'Espalda',
//           'Abdomen',
//           'Éscaladora'
//         ];

//     }

//     buscar(ev: any) {
//       this.inicializar();

//       const val = ev.target.value;

//       if (val && val.trim() !== '' ) {
//         this.lista = this.lista.filter((item) => {
//           return (item.toLowerCase().indexOf(val.toLowerCase()) > -1 );
//         });
//       }
//     }

//   }

// ngOnInit() {
  // }

  // buscar( event ) {
  //    console.log(event);
  //   // this.textoBuscar = event.detail.value;
  // }


