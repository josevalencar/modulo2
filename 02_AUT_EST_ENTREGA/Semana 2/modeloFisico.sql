BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "usuario" (
	"cod_usuario"	INTEGER,
	"nome"	TEXT,
	"cargo"	TEXT,
	"endereco"	TEXT,
	"tel"	INTEGER,
	"email"	TEXT,
	"descricao"	TEXT,
	PRIMARY KEY("cod_usuario")
);
CREATE TABLE IF NOT EXISTS "formacao" (
	"cod_formacao"	INTEGER,
	"nome_curso"	TEXT,
	"data_inicio"	NUMERIC,
	"data_fim"	NUMERIC,
	"descricao_curso"	TEXT,
	PRIMARY KEY("cod_formacao")
);
CREATE TABLE IF NOT EXISTS "experiencia" (
	"cod_experiencia"	INTEGER,
	"nome_empresa"	TEXT,
	"nome_cargo"	TEXT,
	"data_inicio"	NUMERIC,
	"data_final"	NUMERIC,
	"descricao_experiencia"	TEXT
);
CREATE TABLE IF NOT EXISTS "habilidades" (
	"cod_habilidades"	INTEGER,
	"ferramenta"	TEXT,
	"nota"	INTEGER,
	PRIMARY KEY("cod_habilidades")
);
INSERT INTO "usuario" ("cod_usuario","nome","cargo","endereco","tel","email","descricao") VALUES (1,'Jose Vitor','Programador','Rua Padre Vieira, 62 - Canindé','(11)97502-6556','jose.silva@sou.inteli.edu.br','isso e uma descricao');
INSERT INTO "formacao" ("cod_formacao","nome_curso","data_inicio","data_fim","descricao_curso") VALUES (1,'eng computacao','2022-08-02','2026-06-02','um curso muito legal');
INSERT INTO "experiencia" ("cod_experiencia","nome_empresa","nome_cargo","data_inicio","data_final","descricao_experiencia") VALUES (1,'inteli','estudante','2022-08-02','2026-06-02','descricao do curso');
INSERT INTO "habilidades" ("cod_habilidades","ferramenta","nota") VALUES (1,'photoshop',4);
COMMIT;
