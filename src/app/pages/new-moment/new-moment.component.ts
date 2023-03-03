import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent {
  btnText: string = 'Compartilhar';

  constructor(private momentService: MomentService) {}

  async createHandler(moment: Moment) {
    console.log('createHandler - Chegou no pai como momento ' + moment);

    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.set('image', moment.image);
    }
    debugger;
    console.log('formData - no Pai ele virou FormData: ' + formData);

    // todo

    //enviar para o service
    this.momentService.createMoment(formData).subscribe({
      next: (response) => {
        console.log('next:' + response);
      },
      error: (error) => {
        console.log('Deu Ruin' + error);
      },
      complete: () => {
        console.log('Fim');
      },
    });

    //exibir msg

    //redirect
  }
}
