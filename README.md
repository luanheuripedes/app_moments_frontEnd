# App Moments Frontend 
Uma aplicação Angular moderna para compartilhamento de momentos especiais, permitindo upload de fotos, criação de posts e interação através de comentários.

![Angular](https://img.shields.io/badge/Angular-15+-red)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)
![SCSS](https://img.shields.io/badge/SCSS-hotpink)
![License](https://img.shields.io/badge/license-MIT-green)

## Sobre o Projeto

O **App Moments Frontend** é uma simples criado apenas para estudo

### Funcionalidades Principais

- **Upload de Fotos**
  - Upload múltiplo de imagens
  - Preview antes do upload
  - Redimensionamento automático
  - Suporte a diferentes formatos (JPEG, PNG, WebP)
  - Compressão de imagens

- **Criação de Moments**
  - Editor de posts com foto e texto
  - Categorização por tags
  - Geolocalização opcional
  - Filtros e efeitos para fotos
  - Agendamento de publicações

- **Sistema de Comentários**
  - Comentários em tempo real
  - Respostas aninhadas
  - Reações (curtir, amar, etc.)
  - Notificações de interação
  - Moderação de conteúdo

- **Interface Social**
  - Feed de momentos
  - Perfil personalizado
  - Seguir outros usuários
  - Timeline de atividades

## Tecnologias Utilizadas

### Frontend Core
- **Angular 15+** - Framework principal
- **TypeScript 4.9+** - Linguagem de programação
- **RxJS** - Programação reativa
- **Angular Material** - Componentes UI
- **SCSS** - Pré-processador CSS

### Bibliotecas Específicas
- **Angular Forms** - Formulários reativos
- **Angular Router** - Roteamento SPA
- **Angular HTTP Client** - Comunicação com API
- **Angular CDK** - Component Dev Kit
- **ng2-file-upload** - Upload de arquivos
- **ngx-image-cropper** - Edição de imagens
- **moment.js** - Manipulação de datas
- **socket.io-client** - Comunicação real-time

### UI/UX Libraries
- **Angular Animations** - Animações fluidas
- **Material Icons** - Iconografia
- **Angular Flex Layout** - Layout responsivo
- **ngx-skeleton-loader** - Loading states
- **sweet alert 2** - Alertas elegantes

## Estrutura do Projeto

```
app-moments-frontend/
├── src/
│   ├── app/
│   │   ├── core/                    # Serviços core e guards
│   │   │   ├── guards/              # Route guards
│   │   │   ├── interceptors/        # HTTP interceptors
│   │   │   └── services/            # Serviços principais
│   │   ├── shared/                  # Componentes compartilhados
│   │   │   ├── components/          # Componentes reutilizáveis
│   │   │   ├── pipes/               # Pipes customizados
│   │   │   └── directives/          # Diretivas customizadas
│   │   ├── features/                # Módulos de funcionalidades
│   │   │   ├── auth/                # Autenticação
│   │   │   ├── moments/             # Gestão de moments
│   │   │   │   ├── create-moment/   # Criação de moments
│   │   │   │   ├── moment-detail/   # Detalhes do moment
│   │   │   │   └── moment-list/     # Lista de moments
│   │   │   ├── comments/            # Sistema de comentários
│   │   │   ├── profile/             # Perfil do usuário
│   │   │   └── upload/              # Upload de arquivos
│   │   └── layout/                  # Componentes de layout
│   ├── assets/                      # Recursos estáticos
│   │   ├── images/                  # Imagens
│   │   ├── icons/                   # Ícones customizados
│   │   └── styles/                  # Estilos globais
│   ├── environments/                # Configurações de ambiente
│   └── styles.scss                  # Estilos globais principais
├── docs/                           # Documentação
└── angular.json                    # Configuração Angular CLI
```

##  Pré-requisitos

- [Node.js 18+](https://nodejs.org/)
- [npm 8+](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Angular CLI 15+](https://angular.io/cli)
- [Git](https://git-scm.com/)

## Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/luanheuripedes/app_moments_frontEnd.git
cd app_moments_frontEnd
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configuração de Ambiente

**src/environments/environment.ts**
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  uploadUrl: 'http://localhost:3000/uploads',
  socketUrl: 'http://localhost:3000',
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedFileTypes: ['image/jpeg', 'image/png', 'image/webp']
};
```

### 4. Execute o projeto
```bash
# Desenvolvimento
ng serve

# Desenvolvimento com porta específica
ng serve --port 4200

# Desenvolvimento com proxy para API
ng serve --proxy-config proxy.conf.json
```

A aplicação estará disponível em `http://localhost:4200`

## Funcionalidades Implementadas

###  Upload de Fotos
- [x] Drag & drop para upload
- [x] Preview de imagens
- [x] Validação de formato e tamanho
- [x] Barra de progresso do upload
- [x] Crop/redimensionamento de imagens

###  Criação de Moments
- [x] Editor rico de texto
- [x] Associação de fotos
- [x] Sistema de tags
- [x] Validação de formulários
- [x] Preview antes de publicar

###  Sistema de Comentários
- [x] Comentários em tempo real
- [x] Respostas aninhadas (threading)
- [x] Edição e exclusão de comentários
- [x] Sistema de reações
- [x] Notificações push

###  Interface Responsiva
- [x] Design mobile-first
- [x] Animações suaves
- [x] Loading states
- [x] Error handling
- [x] Acessibilidade (a11y)

## 📱 Componentes Principais

### MomentCardComponent
```typescript
@Component({
  selector: 'app-moment-card',
  templateUrl: './moment-card.component.html',
  styleUrls: ['./moment-card.component.scss']
})
export class MomentCardComponent {
  @Input() moment: Moment;
  @Output() onComment = new EventEmitter<string>();
  @Output() onLike = new EventEmitter<void>();
}
```

### ImageUploadComponent
```typescript
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  @Output() onFileSelect = new EventEmitter<File[]>();
  maxFiles = 5;
  acceptedFormats = 'image/*';
}
```

### CommentSectionComponent
```typescript
@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  @Input() momentId: string;
  comments$ = new BehaviorSubject<Comment[]>([]);
}
```

## Serviços Principais

### MomentService
```typescript
@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private apiUrl = environment.apiUrl;

  getMoments(): Observable<Moment[]> { ... }
  createMoment(moment: CreateMomentDto): Observable<Moment> { ... }
  updateMoment(id: string, moment: UpdateMomentDto): Observable<Moment> { ... }
  deleteMoment(id: string): Observable<void> { ... }
}
```

### UploadService
```typescript
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  uploadImage(file: File): Observable<UploadResponse> { ... }
  uploadMultiple(files: File[]): Observable<UploadResponse[]> { ... }
  compressImage(file: File, quality: number): Promise<File> { ... }
}
```

## Testes

### Testes Unitários
```bash
# Executar todos os testes
ng test

# Testes com coverage
ng test --code-coverage

# Testes em watch mode
ng test --watch=true
```

### Testes E2E
```bash
# Cypress
npm run cypress:open

# Protractor
ng e2e
```

### Testes Específicos
```bash
# Testar componente específico
ng test --include='**/moment-card.component.spec.ts'

# Testar serviço específico
ng test --include='**/moment.service.spec.ts'
```

## Build e Deploy

### Build para Produção
```bash
ng build --configuration production
```

### Deploy
```bash
# GitHub Pages
ng deploy --base-href=/app_moments_frontEnd/

# Netlify
npm run build:prod && netlify deploy --prod --dir=dist

# Firebase Hosting
ng deploy --configuration production
```

## Performance

### Otimizações Implementadas
- **Lazy Loading** - Módulos carregados sob demanda
- **OnPush Strategy** - Change detection otimizada
- **TrackBy Functions** - Otimização de listas
- **Image Lazy Loading** - Carregamento otimizado de imagens
- **Service Workers** - Cache inteligente

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Siga as convenções de código Angular
4. Execute os testes (`ng test`)
5. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
6. Push para a branch (`git push origin feature/NovaFuncionalidade`)
7. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

**Luan Heuripedes**
- LinkedIn: [/in/luan-heuripedes](https://www.linkedin.com/in/luan-heuripedes/)
- GitHub: [@luanheuripedes](https://github.com/luanheuripedes)

## Suporte

Para dúvidas ou sugestões:
- Abra uma [issue](https://github.com/luanheuripedes/app_moments_frontEnd/issues)
- Entre em contato através do LinkedIn

Projeto desenvolvido para estudo do Angular, abordando:
- Componentes e serviços Angular
- Programação reativa com RxJS
- Upload e manipulação de arquivos
- Real-time communication
- Material Design e UX/UI modernas
