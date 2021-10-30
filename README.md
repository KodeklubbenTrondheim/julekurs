# :mrs_claus: Julekursnettside for Kodeklubben Trondheim :santa:

:construction_worker: Her bygges det en nettside som skal inneholde det splitter nye julekurset fra oss i Kodeklubben Trondheim!

Om du vil bidra er det bare å sende inn en issue [her](https://github.com/niklasmh/kodeklubben-trondheim-julekurs/issues), så legger vi deg til! The more the merrier :raised_hands:

## :computer: Sette opp prosjektet på din maskin

_Dette må bare gjøres en gang per maskin._

**TL;DR: Installer [Node.js](https://nodejs.org/en/), [Git](https://git-scm.com/downloads) og [VSCode](https://code.visualstudio.com/). Klon prosjektet fra GitHub og kjør `npm install` så `npm start` i VSCode-terminalen.**

Det eneste du trenger er [Node.js](https://nodejs.org/en/), ellers så er [Git](https://git-scm.com/downloads) veldig hendig om du vil bidra. Video om Git [her](https://www.youtube.com/watch?v=HkdAHXoRtos&ab_channel=Fireship) om du er usikker på hvordan det brukes.

Gjerne også installer [VSCode](https://code.visualstudio.com/) for å redigere filer. Den er veldig godt integrert med Git, så den kan virkelig anbefales!

<details>
<summary>I VSCode kan det også være kjekt å installere en rekke extensions. Her er min anbefalte liste (trykk for å åpne)</summary>

- Prettier - Code formatter (for å formatere kode, så slepper man å tenke på det)
- GitLens (gjør Git hakket enklere, men den ikke nødvendig!)
- styled-components (så får man farge på CSS'en fra styled-components)

Her er litt ekstra som jeg bare må ha, men som egentlig ikke er så viktig:

- indent-rainbow (enklere å se innrykk)
- Better Comments (gir farge på kommentarer, f.eks. blir "!" rødt og "TODO" oransje)
- Rainbow Brackets (gir farge på parenteser så man lettere ser hva som matcher)
- Code Spell Checker, med norsk og engelsk ordbok (man får blå linjer under ord man skriver feil)
</details>

Nå må vi hente prosjektet fra GitHub. Det gjøres slik:

1. Åpne terminal (Powershell (Windows) eller Terminal (Mac OS))
2. Skriv `pwd` for å sjekke hvor du er nå
3. Naviger deg til der du vil installere prosjektet (skriv `cd mappenavn` for å gå inn i en mappe og `cd ..` for å gå ut)
4. Skriv så `git clone https://github.com/niklasmh/kodeklubben-trondheim-julekurs.git` (Hvis du har SSH, kjør denne i stedet: `git clone git@github.com:niklasmh/kodeklubben-trondheim-julekurs.git`)
5. Gå inn i mappen: `cd kodeklubben-trondheim-julekurs`
6. Skriv `npm install`
7. Skriv `npm start`
8. Nå skal det kjøre! Bare å spørre kodeklubben trondheim om hjelp om du stod fast på et steg.

## :runner: Kjøre prosjektet

_Dette må gjøres hver gang man skal starte opp._

Åpne terminal i VSCode (se etter "Terminal" i toppmenyen)

```bash
npm install # Må kjøres av og til om nye pakker i `package.json` er lagt til
npm start # Denne vil åpne nettleseren og auto-refreshe når du endrer og lagrer en fil :)
```

# :date: Plan for prosjektet

Julekurset skal inneholde:

- En rekke oppgaver man skal kunne velge i fra.
- Hver oppgave har instruksjoner i form av Video eller tekst.
- Hver oppgave har en kodeeditor (monaco-editor (VSCode) muligens)
  - Kunne skrive kode i Python (bruke f.eks. [`client-side-python-runner`](https://www.npmjs.com/package/client-side-python-runner))
- Grafisk grensesnitt for å lage julekort. Disse skal kunne tegnes på og animeres med kode.
- Mulighet for å logge inn og lagre arbeidet sitt.
- Mulig å se andre sitt arbeid (ikke endre, men kanskje kopiere og endre på sin egen bruker?)

Saker som ikke er diskutert enda:

- Skal man ha ET julekort, så kunne se videoer på hvordan man legger til nye ting mens man jobber med sitt ene julekort?
- ELLER skal man lage et julekort per video / oppgave?
- ELLER kanskje begge?

Første versjon:

- [x] Kunne se en liste med oppgaver.
- [x] Kunne gå inn på hver oppgave og få instruksjoner om hvordan man kommer videre.
  - Dette må ikke legges inn i selve GUIet hvor man koder julekort. Dette kan være på papir.
- [x] Kunne skrive i en editor og få opp resultat i et grensesnitt (p5.js eller noe ala det)
- [x] Kunne lage oppgaver i et format. Kan starte med JSON, må se an om vi rekker Markdown her.
- [x] Kunne laste ned oppgaver og bilde med en knapp (midlertidig mens vi ikke bruker database)

Senere:

- Kunne lage brukere og logge inn.
- Kunne lagre hva man lager og dele med andre.
- Kunne hente andres julekort og modifisere dem. Her er det viktig å gi kreditt til den originale eieren.
- Finpusse på design. Gjøre alt både kult og intuitivt - ikke for mye ting som stjeler fokus.
- Teste på brukere mens vi utvikler for å styre retningen.
- Lage et slags system for å lage oppgaver enkelt.

Ideer fra tegne-workshop for GUI:

- 1:
  - To vinduer: Editor og oppgaver.
  - Knapp over editor for å velge Python / Blockly / JavaScript
  - Lagreknapp for å laste ned julekort
  - Unngå kommentarfelt
- 2:
  - Hovedside med "Lag kort"
  - Sender deg til en slags side med alle funksjonene til et julekort
    - Del kort
    - Kode
    - Tutorial
- 3:
  - Galleri hvor man kan se julekortene
  - Trykker man på kortet kan man se koden
- 4:
  - Koden på den ene siden og julekort på den andre.
  - Knapp for å kjøre
  - Et sted for feilmeldinger
  - Deleknapp
  - En embedded-versjon av julekortet (altså fullscreen-støtte, sånn man kan dele uten alt ekstra)
- 5:
- 6:
  - Nivåer (Lett, middels og vanskelig)
  - Oppgaver til hvert nivå. Kanskje Blockly til første nivå?
  - Bar øverst med login og info
  - Galleri
    - Trykker man på bildet så kommer man til en side med hele julekortet (embedded-versjon)
  - Evt kunne få opp video / tutorial

Diskusjon:

- Video eller tekst?
  - Kanskje tekst først, så erstatte med video
  - Kanskje ha begge deler kombinert noe sted?
- Fint å separere oppgaver og julekort m/kodeeditor

Plan videre:

- Bli ferdig med MVP til neste onsdag (14.10.2021)
  - Ref "Første versjon" over.
- Starte med oppgavelaging neste onsdag.
- Kursstart den 10. November 2021.
- 4 kurskvelder, 1 uke mellomrom.
