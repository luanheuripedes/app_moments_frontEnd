import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/Interfaces/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent implements OnInit {
  @Input() momentData: Moment | null = null;
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<Moment>();

  momentForm!: FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData?.id ? this.momentData.id : ''),
      title: new FormControl(
        this.momentData?.title ? this.momentData.title : '',
        [Validators.required]
      ),
      description: new FormControl(
        this.momentData?.description ? this.momentData.description : '',
        [Validators.required]
      ),
      image: new FormControl(
        this.momentData?.image ? this.momentData.image : ''
      ),
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  onFileSelected(event: any) {
    debugger;
    const file: File = event.target.files[0];
    this.momentForm.patchValue({
      image: file,
    });
  }

  submit() {
    debugger;
    if (this.momentForm.invalid) {
      return;
    }

    console.log(this.momentForm.value);

    console.log('Saiu do filho como forma de emição' + this.momentForm.value);
    this.onSubmit.emit(this.momentForm.value);
  }
}
