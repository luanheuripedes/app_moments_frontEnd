import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/Interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  moment?: Moment;
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
