type DateString = `${string & { __brand: "\\d{4}-\\d{2}-\\d{2}" }}`;


export type FormType<T> = Omit<T, "id">;

export interface IBudynki {
  id: number;
  nazwa_budynku: string;
  adres_budynku: string;

  uczelnia: IUczelnie["id"];
  uczelnia_name: string;
}

export type IBudynkiForm = FormType<IBudynki>;

export interface ICzlonkowie {
  id: number;
  pesel: string;
  imie: string;
  drugie_imie: string;
  nazwisko: string;
  email: string;
  numer_kontaktowy: string;
}

export type ICzlonkowieForm = FormType<ICzlonkowie>;

export interface IOpiekunowie {
  id: number;
  pesel: string;
  imie: string;
  drugie_imie: string;
  nazwisko: string;
  email: string;
  numer_kontaktowy: string;
}

export type IOpiekunowieForm = FormType<IOpiekunowie>;

export interface IOrganizacja {
  id: number;
  nazwa_organizacji: string;
  data_zalozenia: DateString;
  czy_aktywna: boolean;

  opiekun: IOpiekunowie["id"];
  opiekun_name: string;

  wydzial: IWydzialy["id"];
  wydzial_name: string;
}

export type IOrganizacjaForm = FormType<IOrganizacja>;

export interface IPokoje {
  id: number;
  nazwa_pokoju: string;
  pojemnosc: number;

  budynek: IBudynki["id"];
  budynek_name: string;
}

export type IPokojeForm = FormType<IPokoje>;

export interface IProjekty {
  id: number;
  nazwa_projektu: string;
  liczba_pkt_do_stypendium: number;
  opis_projektu: string;

  organizacja: IOrganizacja["id"];
  organizacja_name: string;
}

export type IProjektyForm = FormType<IProjekty>;

export interface IRole {
  id: number;
  nazwa_roli: string;
  liczba_pkt_do_stypendium: number;

  sekcja: ISekcja["id"];
  sekcja_name: string;

  czlonek: ICzlonkowie["id"];
  czlonek_name: string;
}

export type IRoleForm = FormType<IRole>;

export interface ISekcja {
  id: number;
  nazwa_sekcji: string;
  data_zalozenia: DateString;
  opis_sekcji: string;

  organizacja: IOrganizacja["id"];
  organizacja_name: string;
}

export type ISekcjaForm = FormType<ISekcja>;

export interface IUczelnie {
  id: number;
  nazwa: string;
  adres_uczelni: string;
}

export type IUczelnieForm = FormType<IUczelnie>;

export interface IWydarzenia {
  id: number;
  nazwa_wydarzenia: string;
  data_rozpoczecia: DateString;
  data_zakonczenia: DateString;
  opis_wydarzenia: string;

  organizacja: IOrganizacja["id"];
  organizacja_name: string;

  pokoj: IPokoje["id"];
  pokoj_name: string;
}

export type IWydarzeniaForm = FormType<IWydarzenia>;

export interface IWydzialy {
  id: number;
  nazwa_wydzialu: string;
  adres_wydzialu: string;

  uczelnia: IUczelnie["id"];
  uczelnia_name: string;
}

export type IWydzialyForm = FormType<IWydzialy>;
