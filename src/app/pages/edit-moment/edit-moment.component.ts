import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Moment } from 'src/app/Interfaces/Moment';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css'],
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnText: string = 'Editar';
  constructor(
    private router: Router,
    private momentService: MomentService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe({
      next: (response) => {
        this.moment = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editHandler(momentData: Moment) {
    const id = this.moment.id;

    const formData = new FormData();

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image);
    }

    this.momentService.updateMoment(id, formData).subscribe({
      next: (response) => {
        this.messageService.add(`Momento ${id} foi atualizado com sucesso!`);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.messageService.add(`${error.message}`);
      },
    });
  }
}
