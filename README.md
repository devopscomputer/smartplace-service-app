# 🚀 SmartPlace – Marketplace Inteligente de Serviços

![GitHub repo size](https://img.shields.io/github/repo-size/pumba-dev/pumba-dev-website?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/pumba-dev/pumba-dev-website?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/pumba-dev/pumba-dev-website?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/pumba-dev/pumba-dev-website?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/github/issues-pr/pumba-dev/pumba-dev-website?style=for-the-badge)

<h2 align="center">☕ Projeto Em Desenvolvimento</h2>

## 💻 Visão Geral

SmartPlace é um app moderno e inteligente para conectar clientes a prestadores de serviços locais como:

✔️ Limpeza, jardinagem, manutenção, beleza, reformas, etc.

✔️ Agendamento com IA, confirmação, pagamento e recontratação.

✔️ Interface inspirada em apps como Airbnb, Thumbtack e Urban Company.

## 💻 Feito Com:

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled--Components-db7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-000000?style=for-the-badge&logo=react-router&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF008F?style=for-the-badge&logo=framer&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white)
![Firebase Functions](https://img.shields.io/badge/Firebase_Cloud_Functions-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Cloud Firestore](https://img.shields.io/badge/Cloud_Firestore-FFA611?style=for-the-badge&logo=google-cloud&logoColor=white)
![Expo Push Notifications](https://img.shields.io/badge/Push_Notifications-36C5F0?style=for-the-badge&logo=expo&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![EAS CLI](https://img.shields.io/badge/EAS_CLI-4630EB?style=for-the-badge&logo=expo&logoColor=white)
![Twilio SMS](https://img.shields.io/badge/Twilio_SMS-F22F46?style=for-the-badge&logo=twilio&logoColor=white)
![Mercado Pago](https://img.shields.io/badge/Mercado_Pago-009EE3?style=for-the-badge&logo=mercado-pago&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-E34F26?style=for-the-badge&logo=linux&logoColor=white)


## 🎯 Foco Estratégico

- 📲 Mobile-first com ótima UX
- 🤖 IA leve para recomendações
- 💸 Monetização escalável
- 🌎 Pronto para LATAM
- 🧩 Arquitetura modular desacoplada

## 🔧 Tecnologias Utilizadas

### Frontend (React Native com Expo)
- React Navigation
- Styled Components
- Framer Motion
- Maps, BlurView, SVG
- Firebase Auth, Firestore, Push

### Backend (Firebase Functions)
- Firebase Authentication (SMS)
- Cloud Firestore (NoSQL)
- Cloud Functions v2
- Firebase Emulator Suite
- Integração futura com MercadoPago, Twilio

### DevOps
- EAS CLI (build Android/iOS)
- Firebase Hosting (dashboard futuro)
- GitHub Actions (CI/CD futuro)

## 🔐 Autenticação Firebase

- Login por telefone
- Código via SMS + Recaptcha
- UID armazenado no Firestore com nome, cidade, etc.

```json
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
```

## 👤 Funcionalidades – Cliente

- Login via celular (Firebase)
- Tela inicial com IA
- Recontratação com 1 clique
- Perfil completo do prestador
- Avaliação com estrela + tags
- Agendamento com pacotes
- Chat pós-pagamento
- Histórico completo
- Notificações push/SMS
- Gamificação

## 🧑‍🔧 Funcionalidades – Prestador (em construção)

- Criar/editar perfil
- Selecionar serviços
- Definir cidades de atendimento
- Ver avaliações
- Reputação e selo automático

## 🔄 Lógica entre Telas x Firebase

| Tela                | Função Backend                      |
|---------------------|--------------------------------------|
| HomeScreen          | Destaques IA + Firestore             |
| SecondScreen        | Listagem com filtros/mapa            |
| ProfileScreen       | Dados do prestador                   |
| CheckoutScreen      | Agendamento + pacote + data          |
| PaymentConfirmation | Confirmação + status + chat          |
| ChatScreen          | Chat interno                         |
| AppointmentHistory  | Histórico completo                   |

## 🔥 Firebase Functions

### Triggers
- `onAppointmentCreated`: notifica prestador
- `onStatusChanged`: alerta cliente/prestador
- `onNewMessage`: push no chat
- `onNewReview`: recalcula nota

### Rotas HTTP
- `/users/update`
- `/appointment/create`
- `/gamification/points/:uid`
- `/recommend?clientId=`
- `/adminStats`

## 🤖 Inteligência e IA

- Sugestões com base no histórico
- FCM + fallback por SMS
- Destaques automáticos
- Selos por reputação
- Pontuação por ações

## 🧪 Testes Locais
```bash
cd backend
firebase emulators:start
```

Endpoints:
- Firestore: http://localhost:8080
- UI: http://localhost:4000
- HTTP: http://localhost:5001

## 📁 Estrutura Modular

```
smartplace-service-app/
├── screens/
│   ├── CheckoutScreen.js
│   ├── PaymentConfirmation.js
│   ├── ProfileScreen.js
│   ├── SecondScreen.js
│   ├── ChatScreen.js
│   ├── AppointmentHistory.js
│   ├── components/
│   │   ├── SuggestedSection.js, MapSection.js, etc.
│   ├── components-profile/
│   │   ├── HeaderProfile.js, Highlights.js, PortfolioGallery.js...
│   ├── components-second/
│   │   ├── AIRecommender.js, PromoBanner.js, etc.
│   ├── components-shared/
│   │   ├── RatingStars.js, ReuseButton.js, StatusPill.js...
├── firebase/
│   ├── config.js, appointments.js, reviews.js, ai.js...
├── backend/functions/
│   ├── routes/, triggers/, utils/, index.js
```

## 📸 Screenshots do App
*Em breve*

## 📦 Build
```bash
npx eas build -p android --profile production
npx eas build -p ios --profile production
```

## 💰 Monetização
- Conta gratuita para prestadores
- Assinatura mensal (Pro)
- Comissão por serviço agendado
- Impulsionamento no feed

## 🧬 Diferenciais

- UI fluida e gamificada
- Chat, agendamento e pagamento integrados
- Modular, escalável e pronto para expansão LATAM

## 🤝 Como Contribuir

```bash
git clone https://github.com/devopscomputer/smartplace-service-app.git
cd smartplace-service-app
git checkout -b feature/nova-feature
npm install
```

Pull Requests são bem-vindos!

## 📄 Licença
Distribuído sob licença MIT. Veja LICENSE.

## 📲 Teste com QR Code via Expo Go
*(Inserir link do app gerado com EAS CLI aqui)*

[⬆ Voltar ao topo](#smartplace--marketplace-inteligente-de-serviços)    