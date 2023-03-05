import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/Interfaces/Moment';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moments: Moment[] = []; //referencia todos os momentos
  momentsfilter: Moment[] = []; //o que esta sendo exibido
  baseApiUril = environment.baseApiUrl;

  // todo search
  faSearch = faSearch;
  searchTerm: string = '';
  constructor(
    private momentoService: MomentService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.momentoService.getAllMoments().subscribe({
      next: (response) => {
        const data = response.data;

        data.map((item) => {
          item.created_at = new Date(item.created_at!).toLocaleDateString(
            'pt-BR'
          );
        });

        this.moments = data;
        this.momentsfilter = data;
      },
      error(error) {
        console.log(error);
      },
    });
  }

  search(event: any): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.momentsfilter.filter((moment) => {
      return moment.title.toLowerCase().includes(value);
    });
  }
}
