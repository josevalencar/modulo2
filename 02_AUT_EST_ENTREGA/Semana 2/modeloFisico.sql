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
INSERT INTO "formacao" ("cod_formacao","nome_curso","data_inicio","data_fim","descricao_curso") VALUES (1,'eng computacao','2022-08-02','2026-06-02','um curso muito legal');
INSERT INTO "habilidades" ("cod_habilidades","ferramenta","nota") VALUES (1,'photoshop',4);
COMMIT;
