🚀 SmartPlace – Marketplace Inteligente de Serviços







Plataforma moderna e inteligente para agendamento de serviços locais, com foco em prestadores autônomos e experiência de usuário inspirada em apps como Urban Company, Airbnb e Thumbtack.

📱 Visão Geral

SmartPlace é um app que conecta clientes a prestadores de serviços como:

Limpeza, jardinagem, manutenção, beleza, cuidados pessoais, reformas, entre outros.

Agendamentos inteligentes com sugestão de horários, confirmação, pagamento e recontratação.

Interface moderna e intuitiva para clientes e prestadores autônomos.

Foco:

Experiência completa e mobile-first

Eficiência operacional com IA leve

Alto potencial de monetização

🔧 Tecnologias Utilizadas

Frontend (Mobile App)

React Native com Expo SDK

React Navigation, Styled Components, Framer Motion

React Native SVG, BlurView e Maps

Firebase Auth, Push e Firestore

Backend (Serverless)

Firebase Authentication (via SMS)

Firebase Cloud Firestore (NoSQL DB)

Firebase Cloud Functions v2 (Node.js 18)

Firebase Emulator Suite (testes locais)

FCM (push), Twilio (SMS), MercadoPago (em breve)

DevOps e Build

EAS CLI (Expo Application Services)

Firebase Hosting (Dashboard Web futura)

GitHub Actions (planejado)

🔐 Autenticação Inteligente

Cliente digita telefone

Firebase envia SMS com código

App autentica e cria/atualiza usuário no Firestore

Usuário preenche nome e e-mail

Estrutura do Firestore: users/{uid}

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

🧠 Funcionalidades (Cliente)

Cadastro via SMS

Tela inicial com IA (recomenda prestadores baseados no histórico)

Agendamentos rápidos

Recontratação com 1 clique

Perfil do prestador com bio, serviços, fotos, reviews e mapa

Avaliação com estrelas, tags e comentários

Chat interno (liberado após pagamento)

Notificações push e SMS

Sistema de pontos e selos (gamificação)

🧰 Funcionalidades (Prestador - em construção)

Gerenciamento de perfil e serviços

Áreas de atendimento por cidade/CEP

Resposta no chat interno

Avaliações em tempo real com tags destacadas

Selos como "Top 10", "Confiável" com base na reputação

🔄 Lógica Entre Telas e Backend

Tela

Lógica Backend

HomeScreen

IA leve + Destaques Firestore

SecondScreen

Mapas, Recontratação, Gamificação

ProfileScreen

Dados do prestador + portfólio

CheckoutScreen

Agenda, pacotes e pagamento

PaymentConfirm

Atualiza status + libera chat

ChatScreen

Firestore: chats/{appointmentId}

AppointmentHistory

Histórico completo do cliente

🔥 Backend Inteligente (Firebase Functions)

Triggers

Trigger

Função

onAppointmentCreated

Notifica prestador via push

onAppointmentStatusChanged

Informa cliente/prestador da mudança de status

onNewMessage

Push para nova mensagem no chat

onNewReview

Atualiza nota média e tags do prestador

Rotas REST

Endpoint

Função

/users/update

Atualiza nome, cidade, email

/appointment/create

Cria agendamento com validação de conflito

/gamification/points/:uid

Consulta pontos e nível

/recommend?clientId=...

Sugere prestadores por local + avaliação

/adminStats

Relatório geral (usuários, agendamentos, faturamento)

🧠 Inteligências e Automatizações

IA leve: recomenda serviços baseado no histórico

Gamificação: pontos, selos e cashback para engajamento

Push inteligente: apenas para eventos relevantes

Reagendamento automático (planejado)

🧪 Testes Locais (Firebase Emulator)

cd backend
firebase emulators:start

Functions: http://localhost:5001

Firestore UI: http://localhost:4000

Autenticação: http://localhost:4000/auth

Use o Postman para testar:

POST http://localhost:5001/{project_id}/us-central1/appointment/create

🧩 Estrutura de Pastas (Simplificada)

smartplace-service-app/
├── screens/
│   ├── SecondScreen.js
│   ├── ProfileScreen.js
│   ├── CheckoutScreen.js
│   ├── ChatScreen.js
│   └── components/...
├── backend/
│   └── functions/
│       ├── index.js
│       ├── routes/
│       ├── triggers/
│       └── utils/
├── firebase.json
├── App.js
└── README.md

📸 Capturas

 

📦 Build do App

# Android
npx eas build -p android --profile production

# iOS
npx eas build -p ios --profile production

Certifique-se de configurar eas.json corretamente e conectar seu Firebase.

💰 Modelo de Monetização

Plano freemium para prestadores

Assinatura mensal Pro (agendas ilimitadas + destaque)

Comissão por agendamento (ex: 8%)

Upsell com ofertas de boost/impulsionamento

📈 Visão de Negócio

Alta demanda por serviços locais no Brasil e LATAM

Segmento de prestadores autônomos é descentralizado (grande oportunidade)

App resolve dores reais de agenda, reputação e comunicação

Diferenciais:

Experiência fluida mobile-first

IA + gamificação

Pagamentos e chat no mesmo ecossistema

🤝 Como Contribuir

git clone https://github.com/devopscomputer/smartplace-service-app.git
cd smartplace-service-app

git checkout -b feature/nova-feature
npm install
# ou yarn

Abra um Pull Request e contribua com esse marketplace inteligente! 🙌

📄 Licença

Distribuído sob a licença MIT. Veja LICENSE para mais detalhes.

📲 QR Code para testar

Escaneie com o Expo Go:

SmartPlace é um projeto em evolução com grande potencial de impacto no mercado de serviços locais. Se quiser colaborar, testar ou investir, entre em contato!
