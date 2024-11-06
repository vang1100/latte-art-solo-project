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

INSERT INTO "chatbox" 
("comment", "date", "user_id")
VALUES
('Can someone change the date for caydence to Dec 1?','10-30-2024', 4),
('Ok. Let me make the event for us!','10-29-2024', 5),
('We can go to Backstory coffee shop. Mihoko wanted to go there','10-28-2024', 3),
('Ok :D','10-26-2024', 4),
('Hey! You girls want to set something up for Nov 11?', '10-26-2024', 3);


INSERT INTO "event"
("event_name", "address", "city", "state", "zip_code", "date", "time", "user_id")
VALUES
('Caydence', '289 5th St E', 'St Paul', 'MN', '55101', '11-01-2024', '2:00', 3);

