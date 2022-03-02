<h1 align="center"><b>Shop Locator</b></h1>

## **O projektu :information_source:**

Projekt izradio [Rafael Krstačić](https://github.com/rkrstacic)
u sklopu kolegija [Programsko inženjerstvo](https://ntankovic.unipu.hr/pi)
na [Fakultetu informatike u Puli](https://fipu.unipu.hr/).

Radi se o web aplikaciji kojoj je cilj olakšati korisnicima proces traženja odgovarajučih prodavaonica koje su u njihovoj blizini te zadovoljavaju njihove potrebe. [Prototip aplikacije](https://www.figma.com/proto/LjWwSORg8MISYlqTDHetpx/Store-locator?node-id=18%3A11259&starting-point-node-id=18%3A11259) je izrađen u alatu za dizajn sučelja, [Figma](https://www.figma.com/). Projekt izrađen u okviru [Vue.js](https://vuejs.org/)

Mentor: doc. dr. sc. [Nikola Tanković](https://ntankovic.unipu.hr)

<br />

## **Opis funkcionalnosti :scroll:**

Definirane razine korisnika u svrhu opisa:
- Korisnik razine 1 - Bez računa
- Korisnik razine 2 - Sa besplatnim računom
- Korisnik razine 3 - Sa plaćenim računom

Primarna značajka aplikacije je dohvaćanje popisa trenutno otvorenih prodavaonica unutar korisnički definiranog radiusa i lokacije.

Dolazak na aplikaciju je popraćen se dohvaćanjem željene lokacije, nakon čega se nudi popis kategorija prodavaonica na izbor te slijedi unos željenog radiusa koji je definiran kao ograničenje maksimalne udaljenosti prodavaonica na popisu i u konačnici se generira popis prodavaonica. 

- Dohvaćanje lokacije se izvađa:
  1) Putem "locate me" buttona - Geolocation API
  2) Putem tekstualnog polja - API (...treba api...)
  
- Kategorije služe kao glavni filter popisa prodavaonica. Popis kategorija je hardkodiran/Popis kategorija se izvlači sa API (...treba api...) (...moguce jedno ili drugo...). 
  - Korisnik razine 1 može izabrati samo jednu od ponuđenih kategorija.
  - Korisnik razine 2 može izabrati do 3 kategorije.
  - Korisnik razine 3 može izabrati do 5 kategorija (...mozda 10...). 

- Maksimalna udaljenost - ograničenje na maksimalnu udaljenost prodavaonica sa popisa od izabrane lokacije.
  - Korisnik razine 1 može izabrati do 250 metara udaljenosti.
  - Korisnik razine 2 može izabrati do 1 kilometar udaljenosti.
  - Korisnik razine 3 može izabrati do 5 kilometara udaljenosti.


Popis je zadano sortiran prema udaljenosti od izabrane lokacije. Moguće ga je također sortirati prema broju favorita. Korisnici razine 2 i 3 mogu dodatno filtrirati popis prodavaonica po oznaci favorita, kako be se prikazale samo one prodavaonice za koje su oni označili favoritima.

Favorit je korisnička oznaka dodijeljena za neku prodavaonicu. Svi korisnici mogu vidjeti broj oznaka favorita na pojedinoj prodavaonici, dok samo korisnici razine 2 i 3 imaju mogućnost dodijeljivanja oznake favorita nekoj prodavaonici. Broj oznaka favorita služi kao svojevrstan uvid popularnosti prodavaonice na aplikaciji.

Za svaku se prodavaonicu mogu promatrati recenzije korisnika. Recenzije mogu vidjeti svi korisnici, no samo ih korisnici razine 2 i 3 mogu "ostaviti" (...mozda bolji nacin da se ovo kaze...). Svrha recenzija prodavaonica je stvaranje skupa povratnih informacija korisnika temeljem kojeg se može dobiti ideja o kvaliteti poslovanja prodavaonice u pitanju.


## **Ostalo**

- [ ] Link na javni prototip (malo urediti)
- [ ] Napraviti lijepši README i nadopuniti ga
- [ ] Link na aplikaciju
- [ ] Prevesti na engleski (?)