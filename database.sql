-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "chatbox" (
	"id" SERIAL PRIMARY KEY,
	"comment" VARCHAR (300),
	"date" DATE,
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "event" (
	"id" SERIAL PRIMARY KEY,
	"event_name" VARCHAR (30),
	"address" VARCHAR (40),
	"city" VARCHAR (30), 
	"state" VARCHAR (5),
	"zip_code" INTEGER,
	"date" DATE,
	"time" TIME,
	"user_id" INT REFERENCES "user"
	);
	