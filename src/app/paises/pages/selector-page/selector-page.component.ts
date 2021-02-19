import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesServiceService } from '../../services/paises-service.service';


@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['',Validators.required],

  });
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  constructor(private fb: FormBuilder, private paisesService: PaisesServiceService) { }
  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges.subscribe(region => {
      console.log(region);
      this.paisesService.gePaisesPortRegion(region).subscribe(paises => {
        this.paises = paises;
        console.log(this.paises);
      })
    })
  }
  guardar() {
    console.log(this.miFormulario);
  }


}
