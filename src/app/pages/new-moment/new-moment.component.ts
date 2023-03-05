import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Interfaces/Moment';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent {
  btnText: string = 'Compartilhar';

  constructor(
    private momentService: MomentService,
    private messageService: MessageService,
    private router: Router
  ) {}

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
        this.messageService.add('Momento adicionado com sucesso!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.messageService.add(error.message);
      },
      complete: () => {
        console.log('Fim');
      },
    });

    //exibir msg

    //redirect
  }
}
