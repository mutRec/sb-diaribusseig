import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { Immersio } from 'src/app/models/immersio.model';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})

export class GenericFormComponent implements OnInit {
  
  constructor(
    private formBuilder:FormBuilder,
    private crudService:CrudService,
    private router:Router,    
    ){}

  formImmersio: FormGroup
  @Input()
  modelImmersio: Immersio

  @Output()
  submitValues:EventEmitter<Immersio> = new EventEmitter<Immersio>()
  
  ngOnInit(): void {
    this.formImmersio = this.formBuilder.group({
      numimmersio: ['',Validators.required],
      dataimmersio: ['',Validators.required],
      lloc: ['',Validators.required],
      centre: ['',Validators.required],
      visibilitat: ['',Validators.required],
      tempaire: ['',Validators.required],
      tempaigua: ['',Validators.required],
      profmax: ['',Validators.required],
      atmini: ['',Validators.required],
      atmfinal: ['',Validators.required],
      ampolla: ['',Validators.required],
      llast: ['',Validators.required],
      horaentrada: ['',Validators.required],
      horasortida: ['',Validators.required],
      tempsfons: ['',Validators.required],
      paradaseguretat: ['',Validators.required],
      comentaris:['',Validators.required]
    })
    if (this.modelImmersio !== undefined){
      this.formImmersio.patchValue(this.modelImmersio)
    }
  }

  onSubmit():void{
     this.submitValues.emit(this.formImmersio.value)
  }
}