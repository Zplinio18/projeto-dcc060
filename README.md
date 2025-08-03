<h1 align="center">
  Trabalho DCC060 - Avali_e ⭐
</h1>

---

## ❔ Sobre

Este é um sistema de avaliação no estilo Letterboxd, porém para álbuns e músicas.  
Este projeto é apenas um **preview** de como o sistema funcionaria e **não está 100% implementado**.

---

## 🛠 Tecnologias Utilizadas

<div align="center">
  <img width="60rem" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
  <img width="60rem" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
  <img width="60rem" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" />
</div>

---

## ♻ Como Configurar o Projeto

### ✅ Pré-requisitos

- Node.js e npm instalados

---

## 🔧 Configuração

### 📦 Backend

1. **Clone o repositório**

```bash
git clone git@github.com:Zplinio18/projeto-dcc060.git
```

2. **Acesse a pasta do backend**

```bash
cd backend
```

3. **Instale as dependências**

```bash
npm install
```

4. **Configure o banco de dados no Neon**

- Crie um arquivo `.env` com base no `.env.example`

```env
PGHOST=
PGDATABASE=neondb
PGUSER=neondb_owner
PGPASSWORD=
ENDPOINT_ID=
```

#### 🔑 Como obter os dados do Neon

1. Crie um novo projeto no [Neon](https://neon.tech)
2. Vá para: **Dashboard → Connect**
3. Configure a conexão como abaixo (desative o pooling)
<img width="749" height="575" alt="image" src="https://github.com/user-attachments/assets/78e3f5e0-08bd-4830-9132-f9516396ddf4" />

5. Copie os dados (até `PGPASSWORD`) e cole no seu `.env`
6. Para obter o `ENDPOINT_ID`:  
   Vá para **Branches → production → Computes**  
   Abaixo de *primary* estará algo como: `ep-fragrant-grass-3424233`

---

### 🛠️ Migrations e Seed

- Para criar as tabelas (migrations):

```bash
npm run migrate
```

- Para popular o banco com dados iniciais (seed):

```bash
npm run seed
```

- Para rodar o backend:

```bash
npm run dev
```

---

### 💻 Frontend

1. Acesse a pasta do frontend:

```bash
cd ../frontend
```

2. Instale os pacotes:

```bash
npm install
```

3. Inicie o frontend:

```bash
npm run dev
```
