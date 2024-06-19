import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule} from 'primeng/card'
import { ButtonModule} from 'primeng/button';
import { CarouselModule } from 'primeng/carousel'
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardModule, ButtonModule, CarouselModule, InputGroupAddonModule, InputGroupModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Visa2Fly';
  responsiveOptions: any;
  persons : any;
  contactform : any ;

  constructor(){
    this.contactform = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9.]+[.]+[a-zA-Z]{2,4}')])
    })
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.persons = [
      {
        img : '1',
        name : 'Julian Jameson',
        profession : 'Profession'
      },
      {
        img : '2',
        name : 'Julian Jameson',
        profession : 'Profession'
      },
      {
        img : '3',
        name : 'Julian Jameson',
        profession : 'Profession'
      },
      {
        img : '4',
        name : 'Julian Jameson',
        profession : 'Profession'
      },
    ]
  }
  onSubmitForm(){
    if(!this.contactform.valid) {
      console.log('Enter Correct Mail')
    }
    else{
      console.log(this.contactform.value.email)
    }
  }
}
