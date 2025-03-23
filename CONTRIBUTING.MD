# 🤝 Contribuindo com o SmartPlace

Antes de contribuir, por favor, leia este guia para mantermos o projeto organizado, limpo e escalável para todos os colaboradores. Toda contribuição é bem-vinda! 🚀

---

## 📦 Pré-requisitos

Certifique-se de ter instalado:

- Node.js (versão LTS)
- Yarn ou npm
- Expo CLI (`npm install -g expo-cli`)
- Conta no Firebase (para testes de autenticação)
- Editor recomendado: VSCode

---

## 🗂️ Estrutura Padrão

Siga o padrão de organização do projeto:

screens/ ├── components/ # Blocos reutilizáveis ├── components-profile/ # Blocos do perfil do prestador ├── components-second/ # Blocos da página inicial ├── [ScreenName].js # Cada tela deve estar clara e modular

yaml
Copiar
Editar

---

## 💡 Como Contribuir

1. **Fork** o repositório
2. Crie sua branch a partir de `main`:

```bash
git checkout -b feature/minha-feature
Faça commits claros e padronizados

Atualize/adicione testes ou prints se necessário

Execute o projeto localmente para garantir que tudo funciona

Abra um Pull Request com descrição objetiva

🧾 Padrão de Commits (Conventional Commits)
Exemplos:

vbnet
Copiar
Editar
feat: adiciona componente de mapa interativo
fix: corrige bug no botão de agendamento
docs: atualiza README com instruções de build
refactor: melhora estrutura do ProfileScreen
🧪 Testando Localmente
bash
Copiar
Editar
# Instalar dependências
yarn install

# Rodar o projeto com Expo
yarn start
📸 Prints e Testes Visuais
Se sua contribuição altera visualmente algo, adicione um print de antes/depois no PR para facilitar a revisão.

🔒 Firebase e Ambiente Local
Crie seu próprio projeto no Firebase e configure a autenticação por telefone. Use um arquivo .env para suas chaves:

makefile
Copiar
Editar
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
...
🧼 Regras de Código
Use componentes funcionais + hooks

Evite lógica inline em JSX

Separe lógica em hooks customizados se necessário

Nomeie arquivos em CamelCase (ProfileScreen.js, AIRecommender.js)

Prefira StyleSheet.create({}) e mantenha estilos organizados

🧠 Sugestões de Contribuições
Melhorias visuais ou animações

Novos blocos reutilizáveis (ex: modal, botão, card)

Integração de pagamentos

Ajustes em responsividade

Refatorações internas

Traduções para outros idiomas

📬 Contato
Em caso de dúvidas, sugestões ou feedback, abra uma Issue ou fale com a equipe.

