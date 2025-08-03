import 'dotenv/config';
import { sql } from "./connection.ts";

await sql`
  CREATE TABLE genero (
  id INT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE,
  descricao TEXT NULL
);
`
await sql`
CREATE TABLE tag (
  id INT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE
);
`

await sql`
CREATE TABLE usuario (
  id INT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  data_nascimento DATE NOT NULL,
  username VARCHAR(50) NOT NULL UNIQUE,
  bio TEXT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  pais VARCHAR(100) NULL,
  foto_perfil VARCHAR(255) NULL,
  data_criacao DATE NOT NULL DEFAULT CURRENT_DATE,
  status VARCHAR(50) NOT NULL DEFAULT 'ativo'
);
`
await sql`
CREATE TABLE usuario_comum (
  id INT PRIMARY KEY REFERENCES usuario(id)
);
`
await sql`
CREATE TABLE artista (
  id INT PRIMARY KEY REFERENCES usuario(id),
  genero_principal_id INT NULL REFERENCES genero(id)
);
`

await sql`
CREATE TABLE evento_seguir (
  seguidor_id INT NOT NULL, 
  seguido_id INT NOT NULL,
  data_evento DATE NOT NULL DEFAULT CURRENT_DATE,
  PRIMARY KEY (seguidor_id, seguido_id),
  FOREIGN KEY (seguidor_id) REFERENCES usuario(id),
  FOREIGN KEY (seguido_id) REFERENCES usuario(id),
  CHECK (seguidor_id <> seguido_id)
);
`

await sql`
CREATE TABLE album (
  id INT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  foto_capa VARCHAR(255) NULL,
  genero_id INT NOT NULL,
  duracao_total INT NULL, 
  gravadora VARCHAR(150) NULL,
  idioma_principal VARCHAR(100) NULL,
  data_lancamento DATE NULL,
  data_adicionado DATE NOT NULL DEFAULT CURRENT_DATE,
  FOREIGN KEY (genero_id) REFERENCES genero(id)
);
`

await sql`
CREATE TABLE musica (
  id INT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  foto_capa VARCHAR(255) NULL,
  genero_id INT NOT NULL,
  idioma_principal VARCHAR(100) NULL,
  duracao INT NOT NULL,
  data_lancamento DATE NULL,
  data_adicionada DATE NOT NULL DEFAULT CURRENT_DATE,
  tag_id INT NULL,
  FOREIGN KEY (genero_id) REFERENCES genero(id),
  FOREIGN KEY (tag_id) REFERENCES tag(id)
);
`
await sql`
CREATE TABLE musica_artista (
  musica_id INT NOT NULL, 
  artista_id INT NOT NULL,
  PRIMARY KEY (musica_id, artista_id),
  FOREIGN KEY (musica_id) REFERENCES musica(id),
  FOREIGN KEY (artista_id) REFERENCES usuario(id)
);
`

await sql`
CREATE TABLE musica_album (
  musica_id INT NOT NULL,
  album_id INT NOT NULL,
  num_faixa INT NOT NULL,
  PRIMARY KEY (musica_id, album_id),
  FOREIGN KEY (musica_id) REFERENCES musica(id),
  FOREIGN KEY (album_id) REFERENCES album(id)
);
`
await sql`
CREATE TABLE album_artista (
  album_id INT NOT NULL,
  artista_id INT NOT NULL,
  PRIMARY KEY (album_id, artista_id),
  FOREIGN KEY (album_id) REFERENCES album(id),
  FOREIGN KEY (artista_id) REFERENCES usuario(id)
);
`

await sql`
CREATE TABLE avaliacao (
  id INT PRIMARY KEY,
  usuario_id INT NOT NULL,
  musica_id INT NULL,
  album_id INT NULL,
  nota INT NOT NULL,
  titulo VARCHAR(200) NULL,
  descricao TEXT NULL,
  data_avaliacao DATE NOT NULL DEFAULT CURRENT_DATE,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id),
  FOREIGN KEY (musica_id) REFERENCES musica(id),
  FOREIGN KEY (album_id) REFERENCES album(id),
  CONSTRAINT unico_tipo 
    CHECK (
      (musica_id IS NULL AND album_id IS NOT NULL)
      OR
      (musica_id IS NOT NULL AND album_id IS NULL)
    )
);
`

await sql`
CREATE TABLE resposta (
  id INT PRIMARY KEY,
  avaliacao_id INT NOT NULL,
  usuario_id INT NOT NULL,
  texto TEXT  NOT NULL,
  data_resposta DATE NOT NULL DEFAULT CURRENT_DATE,
  FOREIGN KEY (avaliacao_id) REFERENCES avaliacao(id),
  FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);
`

await sql`
CREATE TABLE playlist (
  id INT PRIMARY KEY,
  usuario_id INT NOT NULL,
  titulo VARCHAR(150) NOT NULL,
  descricao TEXT NULL,
  data_criacao DATE NOT NULL DEFAULT CURRENT_DATE,
  publica BOOLEAN NOT NULL DEFAULT TRUE,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);
`
await sql`
CREATE TABLE playlist_musica (
  playlist_id INT NOT NULL,
  musica_id INT NOT NULL,
  PRIMARY KEY (playlist_id),
  FOREIGN KEY (playlist_id) REFERENCES playlist(id),
  FOREIGN KEY (musica_id) REFERENCES musica(id)
);
`;
console.log("Migration executada com sucesso.");
