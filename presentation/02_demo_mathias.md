# Demonstration

Mathias Holdgaard

Note:
**Mathias** vil nu demonstrere det software vi har produceret i løbet af projektet.

--------------------------------------------------------------------------------

<!-- .element: data-background-image="images/facebook_scraper_screenshot.png" data-state="background-overlay" -->

## Facebook Scraper
<!-- .element: class="with-background" -->

Note:
Efter nogle iterationer af vores problemanalyse, blev det klart, at vi gerne ville lave vores egne datasæt. Disse skulle indeholde *danske* overskrifter, fra de mest populære danske nyhedsmedier.

- Vores spørgeskemaundersøgelse viste en klar præference til Facebook, så vi valgte at indsamle overskrifter derfra.
- Eftersom at Facebook ikke har en tilgængelig metode, til at downloade opslag fra forskellige sider, blev vi enige om, at der skulle laves en såkaldt scraper.
- Denne blev implementeret som en *browserudvidelse* til Google Chrome, hvorved nogle kontrolknapper blev indsat på den pågældende Facebook side...

--------------------------------------------------------------------------------

![scraper_closeup](images/scraper_closeup.png)

- Automatisk scrolling          <!-- .element: class="fragment" -->
- Maksimum antal opslag         <!-- .element: class="fragment" -->
- Skjul opslag                  <!-- .element: class="fragment" -->
- Download data som JSON,       <!-- .element: class="fragment" -->
- eller ZIP (inklusiv billeder)   <!-- .element: class="fragment" -->

Note:
...disse kontrolknapper så sådan her ud, og med dem kunne man styre:

**(Gå til næste slide for hvert punkt!)**
- *Automatisk scrolling*, for at udløse Facebooks indlæsning af flere opslag.
- *Maksimum antal opslag* kan indstilles, for at stoppe den automatiske scrolling, når dette bliver opnået.
- *Skjul opslag* for at optimere ydeevnen, browseren bliver lidt langsom, når der vises mere end et par hundrede opslag.
- *Download data som JSON*, JavaScript Object Notation, et format der er let at arbejde med, i flere programmeringssprog.
- *eller download som en ZIP-fil*, indeholdende JSON-filen og de tilhørende billeder til hvert opslag.

--------------------------------------------------------------------------------

<!-- .element: data-background-iframe="https://clickbait.dayenite.com" data-state="background-overlay" -->

## Clickbait Labeling System
<!-- .element: class="with-background" -->

Note:
Efter vi havde indsamlet en masse overskrifter (7.043), lavede vi et system for at kunne markere overskrifterne som clickbait/ikke-clickbait.

--------------------------------------------------------------------------------

<!-- .element: data-background-iframe="https://clickbait.dayenite.com" data-background-interactive data-state="no-pointer-events" -->

Note:
**Funktioner**
- Login
- Markér som clickbait/ikke-clickbait
- Forklar "runder" og navigering
- Status
  - Oversigt over bedømmere
  - Sektionsdiagram
  - Indsamlede overskrifter

--------------------------------------------------------------------------------

## Classifier

Det endelige program

--------------------------------------------------------------------------------

![program_demo](images/program_demo_screenshot.png)<!-- .element: class="plain" style="width: 50%;" -->