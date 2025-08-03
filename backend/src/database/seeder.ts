import {sql} from './connection.ts';

await sql`
INSERT INTO genero(id, nome, descricao) VALUES
(1, 'Pop', 'Música popular, com melodias cativantes e produção polida.'),
(2, 'Pop Rock', 'Combinação de sonoridades do rock com refrões e estruturas típicas do pop.'),
(3, 'Pop Punk', 'Subgênero que combina a energia crua do punk rock com melodias cativantes e acessíveis do pop, marcado por letras sobre juventude, relacionamentos e rebeldia.'),
(4, 'Rock', 'Guitarras distorcidas, bateria marcante e atitude “rebelde” em suas variantes.'),
(5, 'R&B', 'Rhythm & Blues moderno: groove marcado, vocais soul e influência do jazz e do gospel.'),
(6, 'Jazz', 'Improvisação complexa, harmonias sofisticadas e forte senso de swing.'),
(7, 'Blues', 'Origem no Delta do Mississippi, caráter melancólico e progressões de acorde “I–IV–V”.'),
(8, 'Hip-Hop', 'Base em batidas de rap, rimas faladas e cultura de DJ, breakdance e graffiti.'),
(9, 'Eletrônica', 'Produzida com sintetizadores e samplers, abrange desde ambient até techno e EDM.'),
(10, 'Reggae', 'Ritmo “one-drop” jamaicano, groove relaxado e letras muitas vezes sociais ou espirituais.');
`;

await sql`
INSERT INTO tag(id, nome) VALUES 
(1, 'Relaxar'),
(2, 'Academia'),
(3, 'Festa'), 
(4, 'Viagem'),
(5, 'Concentração'),
(6, 'Romântico'),
(7, 'Noite'),
(8, 'Acústico'),
(9, 'Instrumental'),
(10, 'Cover');
`

await sql`
INSERT INTO usuario(id, nome, data_nascimento, username, bio, email, pais, foto_perfil) VALUES
(1, 'Avril Lavigne', '1984-09-27', 'avrillavigne',
'Avril Ramona Lavigne, nascida em 27 de setembro de 1984, é uma cantora e compositora canadense. Ela foi uma musicista fundamental na popularização da música pop-punk , abrindo caminho para a música pop com influência punk e voltada para o público feminino no início dos anos 2000. Seus prêmios incluem dez Juno Awards e oito indicações ao Grammy.', 
'avrillavigne@email.com', 'Canadá', 'https://cdn.shopify.com/s/files/1/0069/3465/9162/files/Avril-Lavigne-hero-banner-241125-1745.webp');
`

await sql`
INSERT INTO artista(id, genero_principal_id) VALUES 
(1, 3);
`

await sql`
INSERT INTO album(id, titulo, foto_capa, genero_id, duracao_total, gravadora, idioma_principal,
data_lancamento) VALUES
(1, 'Let Go',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 2921, 'Arista Records', 'en', '2002-06-04');
`

await sql`
INSERT INTO album_artista(album_id, artista_id) VALUES
(1, 1);
`

await sql`
INSERT INTO musica(id, titulo, foto_capa, genero_id, idioma_principal, duracao, data_lancamento) VALUES 
(1, 'Losing Grip',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 233, '2002-06-04'),
(2, 'Complicated',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 244, '2002-06-04'),
(3, 'Sk8er Boi',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 203, '2002-06-04'),
(4, 'I´m with You',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 224, '2002-06-04'),
(5, 'Mobile',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 211, '2002-06-04'),
(6, 'Unwanted',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 220, '2002-06-04'),
(7, 'Tomorrow',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 228, '2002-06-04'),
(8, 'Anything but Ordinary',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 252, '2002-06-04'),
(9, 'Things I´ll Never Say',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 224, '2002-06-04'),
(10, 'My World',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 207, '2002-06-04'),
(11, 'Nobody´s Fool',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 237, '2002-06-04'),
(12, 'Too Much to Ask',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 225, '2002-06-04'),
(13, 'Naked',
'https://a5.mzstatic.com/us/r1000/0/Music115/v4/32/2c/f3/322cf324-9ea1-3962-865a-f4f9bf83764d/888880191069.jpg',
2, 'en', 209, '2002-06-04');
`

await sql`
INSERT INTO musica_artista(musica_id, artista_id) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1);
`

await sql`
INSERT INTO musica_album(musica_id, album_id, num_faixa) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13);
`

await sql`
INSERT INTO album(id, titulo, foto_capa, genero_id, duracao_total, gravadora, idioma_principal,
data_lancamento) VALUES
(2, 'Under My Skin',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 2447, 'Arista Records', 'en', '2004-05-21');
`

await sql`
INSERT INTO album_artista(album_id, artista_id) VALUES
(2, 1);
`

await sql`
INSERT INTO musica(id, titulo, foto_capa, genero_id, idioma_principal, duracao, data_lancamento) VALUES 
(14, 'Take Me Away',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 177, '2004-05-21'),
(15, 'Together',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 194, '2004-05-21'),
(16, 'Don´t Tell Me',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 201, '2004-05-21'),
(17, 'He Wasn´t',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 180, '2004-05-21'),
(18, 'How Does It Feel',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 224, '2004-05-21'),
(19, 'My Happy Ending',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 242, '2004-05-21'),
(20, 'Nobody´s Home',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 212, '2004-05-21'),
(21, 'Forgotten',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 197, '2004-05-21'),
(22, 'Who Knows',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 210, '2004-05-21'),
(23, 'Fall To Pieces',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 208, '2004-05-21'),
(24, 'Freak Out',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 193, '2004-05-21'),
(25, 'Slipped Away',
'https://a5.mzstatic.com/us/r1000/0/Music125/v4/6b/ed/03/6bed032b-c6b7-7aed-bc60-4513d3a38a34/888880785732.jpg',
4, 'en', 214, '2004-05-21');
`

await sql`
INSERT INTO musica_artista(musica_id, artista_id) VALUES
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1);
`

await sql`
INSERT INTO musica_album(musica_id, album_id, num_faixa) VALUES
(14, 2, 1),
(15, 2, 2),
(16, 2, 3),
(17, 2, 4),
(18, 2, 5),
(19, 2, 6),
(20, 2, 7),
(21, 2, 8),
(22, 2, 9),
(23, 2, 10),
(24, 2, 11),
(25, 2, 12);
`

await sql`
INSERT INTO album(id, titulo, foto_capa, genero_id, duracao_total, gravadora, idioma_principal,
data_lancamento) VALUES
(3, 'The Best Damn Thing',
'https://a5.mzstatic.com/us/r1000/0/Music124/v4/41/f0/45/41f04530-b881-6fa6-4da1-6e2001b9fe07/888880378958.jpg',
2, 2439, 'RCA Records', 'en', '2007-04-17');
`

await sql`
INSERT INTO album_artista(album_id, artista_id) VALUES
(3, 1);
`

await sql`
INSERT INTO musica(id, titulo, foto_capa, genero_id, idioma_principal, duracao, data_lancamento) VALUES 
(26, 'Girlfriend',
'https://a5.mzstatic.com/us/r1000/0/Music114/v4/69/fb/ce/69fbcef9-b3d9-4d3f-4e7f-64fabac750ba/mzi.tzienkxa.jpg',
2, 'en', 217, '2007-04-17'),
(27, 'I Can Do Better',
'https://a5.mzstatic.com/us/r1000/0/Music124/v4/41/f0/45/41f04530-b881-6fa6-4da1-6e2001b9fe07/888880378958.jpg',
2, 'en', 197, '2007-04-17'),
(28, 'Runaway',
'https://a5.mzstatic.com/us/r1000/0/Music124/v4/41/f0/45/41f04530-b881-6fa6-4da1-6e2001b9fe07/888880378958.jpg',
2, 'en', 228, '2007-04-17'),
(29, 'The Best Damn Thing',
'https://upload.wikimedia.org/wikipedia/pt/d/d3/TBDT_Single_Cover.PNG',
2, 'en', 190, '2007-04-17'),
(30, 'When You´re Gone',
'https://upload.wikimedia.org/wikipedia/pt/b/b8/Avril_lavigne_when_you%27re_gone_single.jpg',
2, 'en', 240, '2007-04-17'),
(31, 'Everything Back But You',
'https://a5.mzstatic.com/us/r1000/0/Music124/v4/41/f0/45/41f04530-b881-6fa6-4da1-6e2001b9fe07/888880378958.jpg',
2, 'en', 183, '2007-04-17'),
(32, 'Hot',
'https://upload.wikimedia.org/wikipedia/pt/7/72/Avril_Lavigne_Hot_.PNG',
2, 'en', 203, '2007-04-17'),
(33, 'Innocence',
'https://a5.mzstatic.com/us/r1000/0/Music124/v4/41/f0/45/41f04530-b881-6fa6-4da1-6e2001b9fe07/888880378958.jpg',
2, 'en', 233, '2007-04-17'),
(34, 'I Don´t Have to Try',
'https://a5.mzstatic.com/us/r1000/0/Music124/v4/41/f0/45/41f04530-b881-6fa6-4da1-6e2001b9fe07/888880378958.jpg',
2, 'en', 197, '2007-04-17'),
(35, 'One of Those Girls',
'https://a5.mzstatic.com/us/r1000/0/Music124/v4/41/f0/45/41f04530-b881-6fa6-4da1-6e2001b9fe07/888880378958.jpg',
2, 'en', 176, '2007-04-17'),
(36, 'Contagious',
'https://a5.mzstatic.com/us/r1000/0/Music124/v4/41/f0/45/41f04530-b881-6fa6-4da1-6e2001b9fe07/888880378958.jpg',
2, 'en', 130, '2007-04-17'),
(37, 'Keep Holding On',
'https://a5.mzstatic.com/us/r1000/0/Music124/v4/41/f0/45/41f04530-b881-6fa6-4da1-6e2001b9fe07/888880378958.jpg',
2, 'en', 240, '2007-04-17');
`

await sql`
INSERT INTO musica_artista(musica_id, artista_id) VALUES
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1);
`

await sql`
INSERT INTO musica_album(musica_id, album_id, num_faixa) VALUES
(26, 3, 1),
(27, 3, 2),
(28, 3, 3),
(29, 3, 4),
(30, 3, 5),
(31, 3, 6),
(32, 3, 7),
(33, 3, 8),
(34, 3, 9),
(35, 3, 10),
(36, 3, 11),
(37, 3, 12);

`

await sql`
INSERT INTO genero(id, nome, descricao) VALUES
(11, 'Indie Rock', 'Rock alternativo produzido fora das grandes gravadoras, com sonoridade crua e ênfase em criatividade e autonomia artística.');
`

await sql`
INSERT INTO usuario(id, nome, data_nascimento, username, bio, email, pais, foto_perfil) VALUES
(2, 'Arctic Monkeys', '2002-01-01', 'arcticmonkeys',
'Arctic Monkeys é uma banda britânica de rock formada em 2002 nos subúrbios da cidade de Sheffield, na Inglaterra. O grupo é formado por Alex Turner (vocal, guitarra), Matt Helders (bateria, voz de apoio), Jamie Cook (guitarra) e Nick O´Malley (baixo, voz de apoio).', 
'arcticmonkeys@email.com', 'Inglaterra', 'https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f');
`

await sql`
INSERT INTO artista(id, genero_principal_id) VALUES
(2, 11);
`

await sql`
INSERT INTO album(id, titulo, foto_capa, genero_id, duracao_total, gravadora, idioma_principal,
data_lancamento) VALUES
(4, 'AM',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 2503, 'Domino Records', 'en', '2013-09-09');
`

await sql`
INSERT INTO album_artista(album_id, artista_id) VALUES
(4, 2);
`

await sql`
INSERT INTO musica(id, titulo, foto_capa, genero_id, idioma_principal, duracao, data_lancamento) VALUES 
(39, 'Do I Wanna Know?',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 271, '2013-09-09'),
(40, 'R U Mine?',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 201, '2013-09-09'),
(41, 'One for the Road',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 206, '2013-09-09'),
(42, 'Arabella',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 207, '2013-09-09'),
(43, 'I Want It All',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 184, '2013-09-09'),
(44, 'No.1 Party Anthem',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 243, '2013-09-09'),
(45, 'Mad Sounds',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 215, '2013-09-09'),
(46, 'Fireside',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 181, '2013-09-09'),
(47, 'Why´d You Only Call Me When You´re High',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 161, '2013-09-09'),
(48, 'Snap Out of It',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 192, '2013-09-09'),
(49, 'Knee Socks',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 257, '2013-09-09'),
(50, 'I Wanna Be Yours',
'https://a5.mzstatic.com/us/r1000/0/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png',
11, 'en', 184, '2013-09-09');
`

await sql`
INSERT INTO musica_artista(musica_id, artista_id) VALUES
(39, 2),
(40, 2),
(41, 2),
(42, 2),
(43, 2),
(44, 2),
(45, 2),
(46, 2),
(47, 2),
(48, 2),
(49, 2),
(50, 2);
`

await sql`
INSERT INTO musica_album(musica_id, album_id, num_faixa) VALUES
(39, 4, 1),
(40, 4, 2),
(41, 4, 3),
(42, 4, 4),
(43, 4, 5),
(44, 4, 6),
(45, 4, 7),
(46, 4, 8),
(47, 4, 9),
(48, 4, 10),
(49, 4, 11),
(50, 4, 12);
`

console.log("Seeder executada com sucesso.");