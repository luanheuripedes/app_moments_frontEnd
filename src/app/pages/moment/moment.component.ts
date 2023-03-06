import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/Interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUril = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;
  constructor(
    private momentService: MomentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //id que está na URL
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    //carrego o dado
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
