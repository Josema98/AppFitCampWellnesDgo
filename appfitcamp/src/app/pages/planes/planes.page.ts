import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})

export class PlanesPage {

  nombre: string;
  desayuno: string;
  colasion1: string;
  comida: string;
  colasion2: string;
  cena: string;

  Planes = new Array();
    addPlanes = {
      nombre: "",
      desayuno: "",
      colasion1:"",
      comida:"",
      colasion2:"",
      cena: ""
    };

    visibleUpdate: boolean = true;
    visibleEdit: boolean = false;

    constructor() { }

    ionViewDidLoad(){
      //your code;
    }

    execute(planesEdit) {
      this.update(planesEdit);
      this.addPlanes = {nombre: "", desayuno: "", colasion1:"", comida:"", colasion2:"",cena: ""};
    }

    add(Planes){
      this.Planes.push(Planes);
      this.addPlanes = {
        nombre: "",
        desayuno: "",
        colasion1: "",
        comida: "",
        colasion2: "",
        cena: ""
      };
    }
    edit(plan) {
      this.visibleUpdate = false;
      this.visibleEdit = true;
      this.addPlanes = {
        nombre: plan.nombre,
        desayuno: plan.desayuno,
        colasion1: plan.colasion1,
        comida: plan.comida,
        colasion2: plan.colasion2,
        cena: plan.cena
      };
    }

    update(planesEdit) {
      var i = this.Planes.indexOf(planesEdit);
      this.Planes.splice(i, 1);
      this.Planes.push(planesEdit);
      this.visibleUpdate = true;
      this.visibleEdit = false;
    }
    delete(nombreplanes){
      var i = this.Planes.indexOf(nombreplanes);
      this.Planes.splice(i, 1);
    }
  }



  // nombre: string;

  // usuario = {
  //    email: '',
  //    password: ''
  // };

 // onSubmitTemplate() {
  //   console.log('Form submit');
  //   console.log( this.usuario );
  //  }

  //  otro ejemplo

//   comida: string;

//   alimentos: string;

//   calorias: string;

//   constructor() { }

//   ngOnInit() {
//   }

//   onSubmitTemplate() {
//     console.log('Form submit');
//     console.log( this.usuario );
//   }


// export class PlanesPage {
//   Planes = new Array();

//   addPlanes = {
//     comidas: "",
//     alimentos: "",
//     calorias: ""
//   };
//   visibleUpdate: boolean = true;
//   visibleEdit: boolean = false;
//   constructor() { }

//   ionViewDidLoad(){
//     //your code;
//   }

//   execute(planesEdit) {
//     this.update(planesEdit);
//     this.addPlanes = { comidas: "", alimentos: "", calorias: ""};
//   }
//   add(Planes){
//     this.Planes.push(Planes);
//     this.addPlanes = {
//       comidas: "",
//       alimentos: "",
//       calorias: ""
//     };
//   }
//   edit(plan) {
//     this.visibleUpdate = false;
//     this.visibleEdit = true;
//     this.addPlanes = {
//       comidas: plan.comidas,
//       alimentos: plan.alimentos,
//       calorias: plan.calorias
//     };
//   }

//   update(planesEdit) {
//     var i = this.Planes.indexOf(planesEdit);
//     this.Planes.splice(i, 1);
//     this.Planes.push(planesEdit);
//     this.visibleUpdate = true;
//     this.visibleEdit = false;
//   }
//   delete(comidasplanes){
//     var i = this.Planes.indexOf(comidasplanes);
//     this.Planes.splice(i, 1);
//   }
// }
