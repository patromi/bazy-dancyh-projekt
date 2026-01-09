type DateString = `${string & { __brand: "\\d{4}-\\d{2}-\\d{2}" }}`;

export interface IBundynki {
  id: number;
  nazwa_budynku: string;
  adres_budynku: string;
  uczelnia: IUczelnie["id"];
}

export type IBudynkiForm = Omit<IBundynki, "id">;

export interface ICzlonkowie {
  id: number;
  pesel: string;
  imie: string;
  drugie_imie: string;
  nazwisko: string;
  email: string;
  numer_kontaktowy: string;
}

export type ICzlonkowieForm = Omit<ICzlonkowie, "id">;

export interface IOpiekunowie {
  id: number;
  pesel: string;
  imie: string;
  drugie_imie: string;
  nazwisko: string;
  email: string;
  numer_kontaktowy: string;
}

export type IOpiekunowieForm = Omit<IOpiekunowie, "id">;

export interface IOrganizacja {
  id: number;
  nazwa_organizacji: string;
  data_zalozenia: DateString;
  czy_aktywna: boolean;
  opiekun: IOpiekunowie["id"];
  wydzial: IWydzialy["id"];
}

export type IOrganizacjaForm = Omit<IOrganizacja, "id">;

export interface IPokoje {
  id: number;
  nazwa_pokoju: string;
  pojemnosc: number;
  budynek: IBundynki["id"];
}

export type IPokojeForm = Omit<IPokoje, "id">;

export interface IProjekty {
  id: number;
  nazwa_projektu: string;
  liczba_pkt_do_stypendium: number;
  opis_projektu: string;
  organizacja: IOrganizacja["id"];
}

export type IProjektyForm = Omit<IProjekty, "id">;

export interface IRole {
  id: number;
  nazwa_roli: string;
  liczba_pkt_do_stypendium: number;
  sekcja: ISekcja["id"];
  czlonek: ICzlonkowie["id"];
}

export type IRoleForm = Omit<IRole, "id">;

export interface ISekcja {
  id: number;
  nazwa_sekcji: string;
  data_zalozenia: DateString;
  opis_sekcji: string;
  organizacja: IOrganizacja["id"];
}

export type ISekcjaForm = Omit<ISekcja, "id">;

export interface IUczelnie {
  id: number;
  nazwa: string;
  adres_uczelni: string;
}

export type IUczelnieForm = Omit<IUczelnie, "id">;

export interface IWydarzenia {
  id: number;
  nazwa_wydarzenia: string;
  data_rozpoczecia: DateString;
  data_zakonczenia: DateString;
  opis_wydarzenia: string;
  organizacja: IOrganizacja["id"];
  pokoj: IPokoje["id"];
}

export type IWydarzeniaForm = Omit<IWydarzenia, "id">;

export interface IWydzialy {
  id: number;
  nazwa_wydzialu: string;
  adres_wydzialu: string;
  uczelnia: IUczelnie["id"];
}

export type IWydzialyForm = Omit<IWydzialy, "id">;
