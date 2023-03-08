import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/Interfaces/Moment';
import { CommentService } from 'src/app/services/comment.service';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment.development';
import { Comment } from 'src/app/Interfaces/Comment';

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

  commentForm!: FormGroup;
  constructor(
    private momentService: MomentService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private route: Router,
    private commentService: CommentService
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

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  removeHandler(id: number): void {
    this.momentService.removeMoment(id).subscribe({
      next: () => {
        this.messageService.add('Registro excluido com sucesso!');
        this.route.navigate(['/']);
      },
      error: (error) => {
        this.messageService.add(error.message);
      },
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }

    const data: Comment = this.commentForm.value();

    data.momentId = Number(this.moment!.id);

    this.commentService.createComment(data).subscribe({
      next: (response) => {
        this.moment!.comments!.push(response.data);
        this.messageService.add('Comentário adicionado!');

        //reseta o form
        this.commentForm.reset();

        formDirective.resetForm();
      },
      error: (err) => {
        this.messageService.add(err.message);
      },
    });
  }
}
