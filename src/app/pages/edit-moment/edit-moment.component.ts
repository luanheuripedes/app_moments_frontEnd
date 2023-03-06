import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moment } from 'src/app/Interfaces/Moment';
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
    private momentService: MomentService,
    private activatedRoute: ActivatedRoute
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
}
