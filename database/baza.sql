CREATE TABLE IF NOT EXISTS Uczelnie (
  id serial PRIMARY KEY,
  nazwa VARCHAR(100),
  adres_uczelni VARCHAR(255) NOT NULL,
  UNIQUE(nazwa)
);

CREATE TABLE IF NOT EXISTS Budynki (
  id serial PRIMARY KEY,
  nazwa_budynku VARCHAR(100),
  adres_budynku VARCHAR(255) NOT NULL,
  id_uczelni INTEGER NOT NULL,
  FOREIGN KEY (id_uczelni) REFERENCES Uczelnie(id),
  UNIQUE(nazwa_budynku, id_uczelni)
);

CREATE TABLE IF NOT EXISTS Pokoje (
  id serial PRIMARY KEY,
  nazwa_pokoju VARCHAR(50),
  pojemnosc INT NOT NULL,
  id_budynku INTEGER NOT NULL,
  FOREIGN KEY (id_budynku) REFERENCES Budynki(id),
  UNIQUE(nazwa_pokoju, id_budynku)
);

CREATE TABLE IF NOT EXISTS Wydzialy (
  id serial PRIMARY KEY,
  nazwa_wydzialu VARCHAR(100),
  adres_wydzialu VARCHAR(255) NOT NULL,
  id_uczelni INTEGER NOT NULL,
  FOREIGN KEY (id_uczelni) REFERENCES Uczelnie(id),
  UNIQUE(nazwa_wydzialu, id_uczelni)
);

CREATE TABLE IF NOT EXISTS Opiekunowie (
  id serial PRIMARY KEY,
  PESEL VARCHAR(11) NOT NULL UNIQUE,
  imie VARCHAR(50) NOT NULL,
  drugie_imie VARCHAR(50),
  nazwisko VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  numer_kontaktowy VARCHAR(15),
  CONSTRAINT opiekun_PESEL_numeric CHECK (PESEL ~ '^[0-9]{11}$'),
  CONSTRAINT opiekun_chk_email_format CHECK (email LIKE '%_@__%.__%')
);

CREATE TABLE IF NOT EXISTS Organizacje (
  id serial PRIMARY KEY,
  nazwa_organizacji VARCHAR(100),
  data_zalozenia DATE NOT NULL,
  czy_aktywna BOOLEAN NOT NULL,
  id_opiekuna INTEGER NOT NULL,
  id_wydzialu INTEGER NOT NULL,
  FOREIGN KEY (id_wydzialu) REFERENCES Wydzialy(id),
  FOREIGN KEY (id_opiekuna) REFERENCES Opiekunowie(id),
  UNIQUE(nazwa_organizacji, id_wydzialu)
);

CREATE TABLE IF NOT EXISTS Projekty (
  id serial PRIMARY KEY,
  nazwa_projektu VARCHAR(100),
  liczba_pkt_do_stypendium INT NOT NULL,
  opis_projektu TEXT,
  id_organizacji INTEGER NOT NULL,
  FOREIGN KEY (id_organizacji) REFERENCES Organizacje(id),
  UNIQUE(nazwa_projektu, id_organizacji)
);

CREATE TABLE IF NOT EXISTS Wydarzenia (
  id serial PRIMARY KEY,
  nazwa_wydarzenia VARCHAR(100),
  data_rozpoczecia DATE NOT NULL,
  data_zakonczenia DATE NOT NULL,
  opis_wydarzenia TEXT,
  id_organizacji INTEGER NOT NULL,
  id_pokoju integer not null,
  FOREIGN KEY (id_pokoju) REFERENCES Pokoje(id),

  CONSTRAINT chk_data_zakonczenia CHECK (data_zakonczenia >= data_rozpoczecia),
  FOREIGN KEY (id_organizacji) REFERENCES Organizacje(id),
  UNIQUE(nazwa_wydarzenia, data_rozpoczecia, data_zakonczenia, id_organizacji)
);

CREATE TABLE IF NOT EXISTS Sekcje (
  id serial PRIMARY KEY,
  nazwa_sekcji VARCHAR(100),
  data_zalozenia DATE NOT NULL,
  opis_sekcji TEXT,
  id_organizacji INTEGER NOT NULL,
  FOREIGN KEY (id_organizacji) REFERENCES Organizacje(id),
  UNIQUE(nazwa_sekcji, id_organizacji)
);

CREATE TABLE IF NOT EXISTS Czlonkowie (
  id serial PRIMARY KEY,
  PESEL VARCHAR(11) UNIQUE,
  imie VARCHAR(50) NOT NULL,
  drugie_imie VARCHAR(50),
  nazwisko VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  numer_kontaktowy VARCHAR(15),
  CONSTRAINT czlonek_PESEL_numeric CHECK (PESEL ~ '^[0-9]{11}$'),
  CONSTRAINT czlonek_chk_email_format CHECK (email LIKE '%_@__%.__%')
);

CREATE TABLE IF NOT EXISTS Role (
  id serial PRIMARY KEY,
  nazwa_roli VARCHAR(50),
  liczba_pkt_do_stypendium INT NOT NULL,
  id_sekcji INTEGER NOT NULL,
  id_czlonka INTEGER NOT NULL,
  FOREIGN KEY (id_sekcji) REFERENCES Sekcje(id),
  FOREIGN KEY (id_czlonka) REFERENCES Czlonkowie(id),
  UNIQUE(nazwa_roli, id_sekcji)
);

CREATE TABLE IF NOT EXISTS Czlonkowie_w_organizacjach (
  id_czlonka INTEGER NOT NULL,
  id_organizacji INTEGER NOT NULL,
  PRIMARY KEY (id_czlonka, id_organizacji),
  FOREIGN KEY (id_czlonka) REFERENCES Czlonkowie(id),
  FOREIGN KEY (id_organizacji) REFERENCES Organizacje(id)
);


CREATE OR REPLACE FUNCTION pobierz_role_czlonka(wybrany_id_czlonka INT)
RETURNS TABLE (
  imie VARCHAR,
  nazwisko VARCHAR,
  nazwa_sekcji VARCHAR,
  nazwa_roli VARCHAR
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        c.imie,
        c.nazwisko,
        s.nazwa_sekcji,
        r.nazwa_roli
    FROM Czlonkowie c
    JOIN Role r ON c.id = r.id_czlonka
    JOIN Sekcje s ON r.id_sekcji = s.id
    WHERE c.id = wybrany_id_czlonka;
END;
$$;
CREATE OR REPLACE PROCEDURE zmien_status_organizacji(
    org_id INT, 
    nowy_status BOOLEAN
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE Organizacje
    SET czy_aktywna = nowy_status
    WHERE id = org_id;

END;
$$;
