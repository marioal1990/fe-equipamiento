import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-create-personal',
  templateUrl: './create-personal.component.html',
  styleUrls: ['./create-personal.component.css']
})
export class CreatePersonalComponent implements OnInit {
    
  form: FormGroup;

  labels: any = {
    header: {
      title: 'PERSONAL',
      module: {
        name: 'Personal',
        component: 'Nuevo Personal'
      },
      subtitle: 'A continuación se mostrarán el personal a cargo existente. Para agregar un nuevo personal, se debe presionar el botón "Nuevo Personal" (verde)'
    },
    form: {
      label: {
        rut: 'Rut',
        nombres: 'Nombres',
        apellidos: 'Apellidos',
        area: 'Area',
        email: 'email',
        fonoContacto: 'Fono Contacto'
      },
      button: {
        save: 'Guardar',
        back: 'Volver'
      }
    }
  };

  constructor(private personalService: PersonalService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      rut: null,
      nombres: null,
      apellidos: null,
      area: null,
      fonoContacto: [null]
    });
  }

  submit() {
    console.log(this.form.value);
    this.personalService.create(this.form.value).subscribe(res => {
      this.router.navigateByUrl("personal/index");
    })
  }

}
