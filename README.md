🚀 SmartPlace – Marketplace Inteligente de Serviços

Plataforma moderna e inteligente para agendamento de serviços locais, com foco em prestadores autônomos e experiência de usuário inspirada em apps como Urban Company, Airbnb e Thumbtack.

📱 Visão Geral

SmartPlace é um app que conecta clientes a prestadores de serviços como:

✔️ Limpeza, jardinagem, manutenção, beleza, cuidados pessoais, reformas, entre outros.

✔️ Agendamentos inteligentes com sugestão de horários, confirmação, pagamento e recontratação.

✔️ Interface moderna e intuitiva para clientes e prestadores autônomos.

🎯 Foco Estratégico:

📲 Experiência completa e mobile-first

🤖 Eficiência operacional com IA leve

💸 Alto potencial de monetização

🌎 Escalabilidade para LATAM

🧩 Modularidade técnica (frontend e backend desacoplados)

🔧 Tecnologias Utilizadas

Frontend (Mobile App)

React Native com Expo SDK

React Navigation, Styled Components, Framer Motion

React Native SVG, BlurView e Maps

Firebase Auth, Push Notifications e Firestore

Backend (Serverless)

Firebase Authentication (via SMS)

Firebase Cloud Firestore (NoSQL DB)

Firebase Cloud Functions v2 (Node.js 18+)

Firebase Emulator Suite (testes locais)

Twilio (SMS Fallback), FCM (Push), MercadoPago (futuro)

DevOps e Build

EAS CLI (Expo Application Services)

Firebase Hosting (futuro dashboard admin)

GitHub Actions (CI/CD futura)

🔐 Autenticação Inteligente com Firebase

Cliente insere número de telefone

Firebase envia código via SMS

App verifica token (Recaptcha + Auth)

Usuário criado no Firestore com UID, nome e cidade

Estrutura Firestore (usuário):

{
  "uid": "firebase_uid",
  "phone": "+55...",
  "name": "Maria",
  "isProvider": false,
  "createdAt": Timestamp,
  "city": "São Paulo",
  "fcmToken": "...",
  "avgRating": 4.8,
  "tagStats": { "pontual": 12, "eficiente": 8 }
}

👤 Funcionalidades - Cliente

Login via celular (Firebase Auth)

Tela inicial com IA (serviços sugeridos)

Recontratação com 1 clique

Perfil de prestador completo (bio, portfólio, região)

Sistema de avaliação (estrela + tags + comentários)

Agendamento com escolha de pacotes (Standard/Premium)

Chat interno liberado após pagamento

Histórico de agendamentos

Notificações push + SMS

Gamificação com pontos e selos

🧑‍🔧 Funcionalidades - Prestador (em construção)

Criação e edição de perfil público

Serviços oferecidos e pacotes customizáveis

Áreas de atendimento por cidade/CEP

Avaliações públicas e tags recebidas

Painel de reputação

Selo "Top Prestador" (automático por IA leve)

🔄 Lógica entre Telas e Backend

Tela

Função Backend/Firebase

HomeScreen

Destaques IA + Firestore

SecondScreen

Listagem com filtros, mapa e favoritos

ProfileScreen

Dados do prestador + reviews

CheckoutScreen

Agendamento + seleção de data/pacote

PaymentConfirm

Atualiza status + ativa chat interno

ChatScreen

Chat interno via Firestore Subcollection

AppointmentHistory

Histórico completo de serviços contratados

🔥 Backend Firebase Functions

Triggers Automáticos

Evento

Ação Executada

onAppointmentCreated

Push para prestador com dados do agendamento

onAppointmentStatusChanged

Notifica cliente e prestador sobre a mudança de status

onNewMessage

Push para receptor no chat

onNewReview

Atualiza média de avaliação e tags do prestador

Rotas HTTP (Cloud Functions)

Endpoint

Descrição

/users/update

Atualiza perfil do usuário

/appointment/create

Cria novo agendamento (validação automática)

/gamification/points/:uid

Consulta de pontos do cliente

/recommend?clientId=

Sugestões personalizadas com IA leve

/adminStats

Relatórios (total de usuários, agendamentos, etc)

🤖 Inteligência e Automação

🔍 Recomendação baseada em histórico (reuso de prestador)

📲 Notificações por FCM + fallback SMS com Twilio

🧠 IA leve para destacar melhores prestadores da região

🎖️ Selos gerados automaticamente por reputação

🧩 Sistema de pontos acumulativos com cashback e níveis

🧪 Testes Locais (Firebase Emulator)

cd backend
firebase emulators:start

Emulator UI: http://localhost:4000

HTTP Functions: http://localhost:5001

Firestore: http://localhost:8080

Teste com Postman:

POST http://localhost:5001/YOUR_PROJECT_ID/us-central1/appointment/create

📁 Estrutura Modular (Simplificada)

smartplace-service-app/
── assets/
├── screens/
│   ├── BottomMenu.js
│   ├── CheckoutScreen.js
│   ├── CheckPrem.js
│   ├── CheckStand.js
│   ├── CurvedOverlay.js
│   ├── HomeScreen.js
│   ├── LoadingScreen.js
│   ├── PaymentConfirmation.js
│   ├── ProfileScreen.js
│   ├── SecondScreen.js
│   ├── UserProfileScreen.js
│
│   ├── ChatScreen.js                 ⬅️ Chat interno com prestador
│   ├── AppointmentHistory.js        ⬅️ Tela para histórico completo
│
│   ├── components/
│   │   ├── GamificationSection.js
│   │   ├── Logo.js
│   │   ├── MapSection.js
│   │   ├── RehireSection.js
│   │   ├── StoriesSection.js
│   │   ├── SuggestedSection.js
│   │   ├── TestimonialsSection.js
│
│   ├── components-profile/
│   │   ├── Badges.js
│   │   ├── CoverageMap.js
│   │   ├── FloatingCTA.js
│   │   ├── HeaderProfile.js
│   │   ├── Highlights.js
│   │   ├── PortfolioGallery.js
│   │   ├── ProfileBio.js
│   │   ├── ReviewList.js            ⬅️ Avaliações e comentários
│   │   ├── ServiceFAQ.js
│   │   ├── ServiceList.js
│   │   ├── ServicePackageCard.js
│
│   ├── components-second/
│   │   ├── AIRecommender.js         ⬅️ Sugestões inteligentes
│   │   ├── FavoriteList.js
│   │   ├── NearbyQuickHire.js
│   │   ├── PromoBanner.js
│   │   ├── TopRatedSection.js
│
│   ├── components-shared/           ⬅️ NOVA PASTA (reutilizáveis e globais)
│   │   ├── RatingStars.js           ⬅️ Exibe nota com estrelas
│   │   ├── TagChips.js              ⬅️ Tags de avaliação
│   │   ├── ChatBubble.js            ⬅️ Mensagens enviadas/recebidas
│   │   ├── NotificationBadge.js     ⬅️ Sininho, alertas de push
│   │   ├── LevelBadge.js            ⬅️ Selo de cliente/top prestador
│   │   ├── PointsProgressBar.js     ⬅️ Barra de gamificação
│   │   ├── ReuseButton.js           ⬅️ Botão de recontratar
│   │   ├── StatusPill.js            ⬅️ Pendente, confirmado, concluído
│
│   ├── firebase/
│   │   ├── config.js
│   │   ├── chat.js                  ⬅️ Funções de envio/leitura de mensagens
│   │   ├── notifications.js         ⬅️ Push e SMS
│   │   ├── appointments.js          ⬅️ CRUD de agendamentos
│   │   ├── reviews.js               ⬅️ CRUD de avaliações
│   │   ├── points.js                ⬅️ Sistema de pontos
│   │   ├── ai.js                    ⬅️ Recomendação leve com base no histórico
│
├── backend/
│   ├── functions/
│   │   ├── index.js                           ⬅️ Entry point das funções
│   │
│   │   ├── utils/
│   │   │   ├── sendPush.js                    ⬅️ Firebase Cloud Messaging
│   │   │   ├── sendSMS.js                     ⬅️ Integração com Twilio ou APIs SMS
│   │   │   ├── calculatePoints.js             ⬅️ Pontuação por serviço concluído
│   │   │   ├── updateRatings.js               ⬅️ Cálculo automático de média e tags
│   │   │   └── validateAppointment.js         ⬅️ Validação e verificação de conflitos
│   │
│   │   ├── triggers/
│   │   │   ├── onAppointmentCreated.js        ⬅️ Notifica prestador ao agendar
│   │   │   ├── onAppointmentStatusChanged.js  ⬅️ Push/SMS ao cliente ou prestador
│   │   │   ├── onNewMessage.js                ⬅️ Notificação no chat
│   │   │   ├── onNewReview.js                 ⬅️ Recalcula avaliação do prestador
│   │
│   │   ├── routes/
│   │   │   ├── recommend.js                   ⬅️ Recomendação inteligente com IA leve
│   │   │   ├── adminStats.js                  ⬅️ Relatórios de uso e performance
│   │   │   ├── gamification.js                ⬅️ Consulta de pontos e selos
│   │   │   ├── appointment.js                 ⬅️ Agendamentos e reagendamento via API
│   │   │   ├── users.js                       ⬅️ Atualização de perfil, cobertura etc.
│
│   ├── firestore.rules                        ⬅️ Regras de segurança do Firestore
│   ├── firebase.json                          ⬅️ Config Firebase deploy
│   ├── .env                                   ⬅️ Configurações sensíveis (.gitignore)
│   ├── package.json
│   └── README.md

├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── Navigation.js
├── package.json
├── package-lock.json
├── yarn.lock
├── README.md

📸 Capturas de Tela

 

📦 Build do App (Expo + EAS CLI)

# Android
npx eas build -p android --profile production

# iOS
npx eas build -p ios --profile production

Certifique-se de configurar eas.json corretamente e integrar ao Firebase.

💰 Monetização

✅ Plano gratuito limitado para prestadores

💼 Assinatura mensal (Pro: visibilidade + agenda ilimitada)

💳 Comissão por serviço (ex: 8~10%)

🚀 Impulsionamento no feed (destaque + IA Boost)

📈 Estratégia de Mercado

📊 Alta demanda em LATAM por serviços locais sob demanda

🔧 Prestadores autônomos precisam de agilidade e organização

🤳 Cliente busca segurança, reputação e agilidade no app

🧬 Diferenciais:

Experiência fluida e gamificada

Integração entre agendamento, pagamento e chat

Escalável, modular e pronto para monetização em escala

🤝 Como Contribuir

git clone https://github.com/devopscomputer/smartplace-service-app.git
cd smartplace-service-app
git checkout -b feature/nova-feature
npm install

Abra um Pull Request e colabore com a evolução do SmartPlace 🙌

📄 Licença

Distribuído sob a licença MIT. Veja LICENSE para mais detalhes.

📲 QR Code do App (Expo Go)

SmartPlace é um projeto estratégico de alto impacto no mercado de serviços autônomos. Estamos abertos à colaborações, parceiros e oportunidades de expansão.
