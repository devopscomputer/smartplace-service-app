# SmartPlace Backend (Firebase Functions)

Este diretório contém a lógica de backend do aplicativo SmartPlace, com foco em:

- Agendamentos
- Avaliações
- Gamificação
- Recomendações com IA
- Notificações por Push/SMS
- Chat interno cliente-prestador

## Estrutura

functions/ ├── index.js ├── utils/ ├── triggers/ ├── routes/

bash
Copiar
Editar

## Comandos

```bash
npm install
firebase deploy --only functions
yaml
Copiar
Editar

---

### ✅ Finalize criando os arquivos:

No terminal:

```bash
touch backend/firebase.json
touch backend/firestore.rules
touch backend/.env
touch backend/README.md

firebase emulators:start
E depois acessar os serviços localmente:

Serviço	URL Local
Emulator UI	http://localhost:4000
Functions	http://localhost:5001
Firestore	http://localhost:8080
Auth	http://localhost:9099
