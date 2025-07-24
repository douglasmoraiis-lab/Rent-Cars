🚗 RentCars - Plataforma de Aluguel de Carros
Uma plataforma moderna e intuitiva para aluguel de carros, inspirada no design e funcionalidades da RentCars.com.br






📋 Sobre o Projeto
O RentCars é uma aplicação web completa para aluguel de carros que oferece uma experiência moderna e intuitiva aos usuários. O projeto foi desenvolvido com foco na usabilidade, performance e design responsivo, oferecendo todas as funcionalidades essenciais de uma plataforma de aluguel de veículos.

✨ Características Principais
🎨 Design Moderno: Interface limpa e profissional inspirada nas melhores práticas de UX/UI

📱 Totalmente Responsivo: Adaptado para desktop, tablet e mobile

🚀 Performance Otimizada: Carregamento rápido e navegação fluida

🎭 Animações Suaves: Transições e efeitos visuais com Framer Motion

🌙 Modo Escuro: Suporte completo para tema claro e escuro

🛒 Carrinho Funcional: Sistema de carrinho com persistência local

🔍 Busca Avançada: Filtros por localização, data e categoria

🚀 Funcionalidades
🏠 Homepage
Hero section com formulário de busca avançado

Seção de confiança com avaliações e reputação

Showcase de mais de 300 locadoras parceiras

Vantagens competitivas da plataforma

Destinos populares por região (Brasil, EUA, Europa, Américas)

FAQ interativo

Download de aplicativo mobile

Newsletter para ofertas exclusivas

🚙 Catálogo de Veículos
Carros Clássicos: Fusca, Chevette, Opala, Maverick, etc.

Carros Esportivos: Lamborghini, Jaguar, BMW, Audi

Carros de Família: Veículos espaçosos e confortáveis

Carros Elétricos: Opções sustentáveis e modernas

Carros Importados: Veículos premium internacionais

🧪 Teste de Aptidão
Sistema de avaliação para verificar aptidão para dirigir

Questionário interativo com feedback em tempo real

Recomendações personalizadas baseadas nas respostas

🎯 Por que nos Escolher
Apresentação das vantagens competitivas

Depoimentos de clientes

Estatísticas de confiabilidade

Canais de suporte

🛠️ Tecnologias Utilizadas
Frontend
React 19.0.0 - Biblioteca para interfaces de usuário

TypeScript - Tipagem estática para JavaScript

Vite - Build tool moderna e rápida

Tailwind CSS - Framework CSS utility-first

Framer Motion - Biblioteca de animações para React

Roteamento e Estado
React Router DOM - Roteamento para SPAs

Context API - Gerenciamento de estado global

LocalStorage - Persistência de dados local

Ícones e UI
Lucide React - Ícones modernos e consistentes

Phosphor Icons - Conjunto adicional de ícones

React Icons - Biblioteca de ícones popular

Desenvolvimento
ESLint - Linting e análise de código

PostCSS - Processamento de CSS

Autoprefixer - Prefixos CSS automáticos

📦 Instalação e Execução
Pré-requisitos
Node.js (versão 18 ou superior)

npm ou yarn

1. Clone o repositório
bash
Copiar
Editar
git clone https://github.com/douglass-lab/Rent-Cars.git
cd Rent-Cars
2. Instale as dependências
bash
Copiar
Editar
npm install
3. Execute o projeto em modo de desenvolvimento
bash
Copiar
Editar
npm run dev
O projeto estará disponível em http://localhost:5173

4. Comandos disponíveis
bash
Copiar
Editar
npm run dev      # Servidor de desenvolvimento  
npm run build    # Build para produção  
npm run preview  # Preview da build de produção  
npm run lint     # Executar linting  
📁 Estrutura do Projeto
bash
Copiar
Editar
src/
├── assets/          # Imagens e recursos estáticos
│   └── img/         # Imagens dos carros por categoria
├── components/      # Componentes reutilizáveis
│   ├── nav.tsx      # Barra de navegação
│   ├── footer.tsx   # Rodapé
│   ├── CartDrawer.tsx    # Carrinho lateral
│   ├── CarCard.tsx       # Card de carro
│   └── CategoryLayout.tsx # Layout padrão para categorias
├── context/         # Contextos do React
│   └── CartContext.tsx   # Contexto do carrinho
├── data/            # Dados estáticos
│   └── classicCars.ts    # Dados dos carros
├── pages/           # Páginas da aplicação
│   ├── home.tsx         # Página inicial
│   ├── RentalDeals.tsx  # Página de ofertas
│   ├── AptitudeTest.tsx # Teste de aptidão
│   ├── wcu.tsx          # Por que nos escolher
│   └── features/        # Páginas de categorias
└── App.tsx          # Componente principal
🎨 Design System
Cores Principais
Azul Primário: #2563EB - Usado em CTAs e elementos principais

Azul Secundário: #1D4ED8 - Variações e estados hover

Laranja: #F97316 - Botões de ação e destaques

Cinza: #6B7280 - Textos secundários e bordas

Tipografia
Títulos: Font weight 700-900, tamanhos responsivos

Corpo: Font weight 400-600, line-height otimizado

Fonte: Sistema padrão do navegador para melhor performance

🚀 Deploy e Produção
Build para Produção
bash
Copiar
Editar
npm run build
Os arquivos de produção serão gerados na pasta dist/

Configurações Recomendadas
Configure variáveis de ambiente para URLs de API

Otimize imagens para web

Configure CDN para assets estáticos

Implemente cache de recursos

🤝 Contribuição
Contribuições são sempre bem-vindas! Para contribuir:

Fork o projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add: Amazing Feature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

Padrões de Código
Use TypeScript para tipagem forte

Siga os padrões do ESLint configurado

Mantenha componentes pequenos e reutilizáveis

Documente funções complexas

Teste suas funcionalidades antes do commit

📝 Roadmap
Próximas Funcionalidades
 Sistema de autenticação completo

 Integração com APIs de pagamento

 Reservas em tempo real

 Sistema de avaliações e comentários

 Notificações push

 Chat de suporte ao vivo

 Aplicativo mobile (React Native)

Melhorias Técnicas
 Testes unitários e de integração

 Performance monitoring

 SEO optimization

 Acessibilidade (WCAG)

 PWA features

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Desenvolvido por: @douglass-lab
