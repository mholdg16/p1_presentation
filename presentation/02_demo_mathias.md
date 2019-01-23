<!-- .element: data-background-video="images/animations/particle.mov" data-background-video-loop="true" data-background-video-muted="true" -->
<br>

# Software

Mathias Holdgaard


*Note:*

**Mathias** vil nu fremvise det software vi har produceret i løbet af projektet.


--------------------------------------------------------------------------------
<!-- .element: data-background-image="images/facebook_scraper_screenshot.png" data-state="background-overlay" -->

## Facebook Scraper
<!-- .element: class="with-background center-text" -->


*Note:*

Efter nogle iterationer af vores problemanalyse, blev det klart, at vi gerne ville lave vores egne datasæt. Disse skulle indeholde *danske* overskrifter, fra de mest populære danske nyhedsmedier.

- Vores spørgeskemaundersøgelse viste en klar præference til Facebook, så vi valgte at indsamle overskrifter derfra.
- Eftersom at Facebook ikke har en tilgængelig metode, til at downloade opslag fra forskellige sider, blev vi enige om, at der skulle laves en såkaldt scraper.
- Denne blev implementeret som en *browserudvidelse* til Google Chrome, hvorved nogle kontrolknapper blev indsat på den pågældende Facebook side...


--------------------------------------------------------------------------------

![scraper_closeup](images/scraper_closeup.png)

- Automatisk scrolling              <!-- .element: class="fragment" data-fragment-index="1" -->
- Maksimum antal opslag             <!-- .element: class="fragment" data-fragment-index="2" -->
- Skjul opslag                      <!-- .element: class="fragment" data-fragment-index="3" -->
- Download data: JSON eller ZIP     <!-- .element: class="fragment" data-fragment-index="5" -->


*Note:*

...disse kontrolknapper så sådan her ud, og med dem kunne man styre:

**(Gå til næste slide for hvert punkt!)**
- *Automatisk scrolling*, for at udløse Facebooks indlæsning af flere opslag.
- *Maksimum antal opslag* kan indstilles, for at stoppe den automatiske scrolling, når dette bliver opnået.
- *Skjul opslag* for at optimere ydeevnen, browseren bliver lidt langsom, når der vises mere end et par hundrede opslag.
- *Download data som JSON*, JavaScript Object Notation, et format der er let at arbejde med, i flere programmeringssprog.
- *eller download som en ZIP-fil*, indeholdende JSON-filen og de tilhørende billeder til hvert opslag.


--------------------------------------------------------------------------------

### Eksempel
<!-- .element: class="center-text" -->

![tv2 opslag](images/tv2_opslag.png) <!-- .element: class="plain" width="50%" -->

*Note:*

Scraperen vil f.eks. indsamle dette opslag, som er en linket artikel fra TV2 Nyhederne, og lave det om til...

--------------------------------------------------------------------------------

### JSON output
<!-- .element: class="center-text" style="margin-top: 1em;" -->

```json
{
    "posts": [
        {
            "id":        2060028409,
            "pagename":  "TV 2 NYHEDERNE",
            "timestamp": "15/11/2018 22.50",
            "message":   "Han fyrer sine ansatte og drejer nøglen om.",
            "target": {
                "site":        "nyheder.tv2.dk",
                "headline":    "Butiksejere i krise på grund af letbanebyggeri...",
                "url":         "http://nyheder.tv2.dk/samfund/...",
                "description": "Butikker oplever et voldsomt fald i omsætningen...",
                "image": {
                    "src":     "tv2nyhederne/images/image_0.jpg",
                    "label":   "Billedet indeholder sandsynligvis: en eller flere..."
                }
            }
        },
        ...
    ]
}
```
<!-- .element: class="stretch" style="font-size: calc((25 / 0.6) * .01em);" -->

*Note:*

...dette stykke JSON-kode. JSON-filen, indeholder et array af `posts`, som hver har disse felter. Feltet `target` er det linkede indhold.

--------------------------------------------------------------------------------
<!-- .element: data-background-iframe="https://clickbait.dayenite.com" data-state="background-overlay" -->

## Clickbait Labeling System
<!-- .element: class="with-background center-text" -->


*Note:*

Efter vi havde indsamlet en masse overskrifter (7.043 stk.), lavede vi et system for at kunne markere overskrifterne som clickbait/ikke-clickbait. Da vi gennem vores problemanalyse valgte, kun at fokusere på selve overskriften til den linkede artikel, var denne det eneste vi skulle vurdere, når vi valgte labels.


--------------------------------------------------------------------------------
<!-- .element: data-background-iframe="https://clickbait.dayenite.com" data-background-interactive data-state="no-pointer-events" class="stretch" -->

### Login
<!-- .element: class="fragment current-visible with-background align-bottom-left" style="pointer-events: initial; cursor: pointer;" -->

### Labeling
<!-- .element: class="fragment current-visible with-background align-bottom-left" style="pointer-events: initial; cursor: pointer;" -->

### Runder og navigering
<!-- .element: class="fragment current-visible with-background align-bottom-left" style="pointer-events: initial; cursor: pointer;" -->

### Status
<!-- .element: class="fragment with-background align-bottom-left" style="pointer-events: initial; cursor: pointer;" -->


*Note:*

**(Demonstrér funktionerne)**

- **Login**
- **Labeling**: Markér som clickbait/ikke-clickbait
- **Runder og navigering**
- **Status**
  - Oversigt over bedømmere
  - Sektionsdiagram
  - Indsamlede overskrifter

**(Overgang)**: De indsamlede overskrifter, med 3 ens bedømmelser, kan via systemet downloades opdelt i to filer, `training.dataset` og `test.dataset`, som var formateret...


--------------------------------------------------------------------------------

<pre class="stretch no-scrollbars" style="font-size: calc((25 / 0.6) * .01em);"><code class="hljs nohighlight" data-trim data-noescape>
"Mens jeg skrev, handlede det kun om at overleve"	<span class="hljs-number">1</span>
Kunstmuseet Arken: Dansk Folkeparti går efter at skade os	<span class="hljs-number">0</span>
Netflix med nyt tiltag: "En farlig vej at gå"	<span class="hljs-number">1</span>
Nye datacentre i Danmark kan kræve hundredvis af nye vindmøller	<span class="hljs-number">0</span>
Fodbolddommer i karantæne efter "sten, saks, papir"	<span class="hljs-number">1</span>
Lektor: Uddannelsessystemet styres ud fra snobberi, mavefornemmelser og ønsketænkning	<span class="hljs-number">0</span>
Apps taler ikke sammen på tværs af regioner: Du risikerer at dø, selvom din nabo er "førstehjælper"	<span class="hljs-number">1</span>
Navneforbud ophævet: Britta Nielsens døtre sigtet for hæleri	<span class="hljs-number">0</span>
Sjældent syn ved flere kyster: - Der er en kvalm lugt af forrådnelse	<span class="hljs-number">1</span>
Tyrkisk politi opgiver at finde Khashoggis lig	<span class="hljs-number">0</span>
Danmarkshistoriens største roman bliver til teater drevet af vanvid og vælgelsind, blod og kød	<span class="hljs-number">1</span>
Stan Lee er død: - Han elskede alle sine fans	<span class="hljs-number">0</span>
Ydmyget Polman skammer sig: Det kræver en flaske vodka	<span class="hljs-number">1</span>
Fødende og nyfødte rammes af ekstrem personale-travlhed på Herlev Hospital	<span class="hljs-number">0</span>
"Sandheden øjeblik": Her er syv ting, vi ved om den foreløbige Brexit-aftale	<span class="hljs-number">1</span>
Trump får kritik for at aflyse besøg: - Kunne ikke engang trodse vejret for at vise sin respekt	<span class="hljs-number">0</span>
Professionel dansk atlet anholdt: Kvalte 16-årig bevidstløs	<span class="hljs-number">1</span>
Mureren fra Syrien blev boligplaceret: Fire år efter cykler han stadig forgæves med sit cv under armen	<span class="hljs-number">0</span>
Afsløring: Skrider fra "Love Island" - tog på druk i København	<span class="hljs-number">1</span>
25-årige Gustav har tjent 11,4 milliarder kroner på under ét år	<span class="hljs-number">0</span>
Politiker rystet over syn på gaden	<span class="hljs-number">1</span>
Mindst 44 er omkommet i de værste skovbrande i Californien nogensinde	<span class="hljs-number">0</span>
Folk var i chok over juletræ på torv: Nu vil dansk by gøre det "igen"	<span class="hljs-number">1</span>
Flygtningekvinder aktiveres halvt så meget som mandlige	<span class="hljs-number">0</span>
"Når man har diskuteret i så mange år, kan man godt blive træt af at høre på sig selv"	<span class="hljs-number">1</span>
Skuespilleren Morten Grunwald er død	<span class="hljs-number">0</span>
Megaband genopstår: Tror det er løgn	<span class="hljs-number">1</span>
Stort strømnedbrud lammer københavnsk bydel	<span class="hljs-number">0</span>
</code></pre>

*Note:*

...således. Dette format kaldes også `TSV`, som betyder *tabulatorseparerede værdier*. Hver linje af et element i datasættet, og elementets værdier er delt op med et tabulatortegn. Datasættet består af overskrifter og deres tilhørende label; `0` for *ikke-clickbait* og `1` for *clickbait*.

--------------------------------------------------------------------------------
<!-- .element: data-background-image="images/sourcecode.jpg" -->

## Classifier
<!-- .element: class="with-background center-text" -->


*Note:*



--------------------------------------------------------------------------------

<div class="mermaid-lazy">
graph LR
A[main] --> B(interface)
B --> C(command)
C --> D[train]
C --> E[test]
C --> F[threshold]
C --> G[classify]
</div>

--------------------------------------------------------------------------------

### train
<!-- .element: class="center-text" -->

<div class="mermaid-lazy">
graph LR
A[train] --- B(load_dataset)
A --- |dataset| C(train_features)
A --- D{flag: --print}
D --> |trained_features| E(print_trained_features)
C --- F(features_import)
C --> |dataset for-each|G(add_feature_count)
C --> |features for-each|H(calculate_probabilities)
</div>

--------------------------------------------------------------------------------

![program_demo](images/program_demo_screenshot.png)<!-- .element: class="plain" width="75%" -->

*Note:*

<input value="train &quot;data/training.dataset&quot; --print" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">

--------------------------------------------------------------------------------

### test
<!-- .element: class="center-text" -->

<div class="mermaid-lazy">
graph LR
B(load_dataset) --- A[test]
C(load_trained_features) --- A
A --- |dataset| D(score_dataset)
A --- |scored dataset| E(test_classifier)
A --- F{flag: --print}
F --> G(print_evaluation)
A --- I{flag: --save}
I --> J(Save CSV-file)
E --> |dataset for-each| K(calc_confusion_matrix)
</div>

--------------------------------------------------------------------------------

![program_demo](images/program_demo_screenshot.png)<!-- .element: class="plain" width="75%" -->

*Note:*

<input value="test &quot;data/test.dataset&quot; --print" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">

--------------------------------------------------------------------------------

### threshold
<!-- .element: class="center-text" -->

<div class="mermaid-lazy">
graph LR
A[threshold] --- B{flag: --calc}
B --- |YES| E(calculate_threshold)
E --- D{flag: --save}
B --- |NO, but number entered| L(set threshold)
L --- D
D --> F(save_config)
B --- |NO| H(get_threshold)
A --- C{flag: --print}
C --- |threshold| I(classify_dataset)
C --- J(test_classification)
J --> |ConfusionMatrix| K(print_confusion_matrix)
</div>

--------------------------------------------------------------------------------

![program_demo](images/program_demo_screenshot.png)<!-- .element: class="plain" width="75%" -->

*Note:*



--------------------------------------------------------------------------------

### classify
<!-- .element: class="center-text" -->

*Note:*

--------------------------------------------------------------------------------

![program_demo](images/program_demo_screenshot.png)<!-- .element: class="plain" width="75%" -->

*Note:*

<div>
    *Ekstra Bladet*
    <input value="classify &quot;Fire kvinder dømt: Lagde mad og vand til migranter langs grænsen&quot;" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">
    <input value="classify &quot;Fuldstændig nøgen midt på Atlanten: Så meget har de tabt sig&quot;" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">
    *TV2*
    <input value="classify &quot;Disse 26 personer ejer mere, end 3,8 milliarder andre gør tilsammen&quot;" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">
    <input value="classify &quot;98-årig kan blive boende på plejecenter - men uden personale&quot;" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">
    <input value="classify &quot;Flere danskere tages i fusk - sådan prøver vi at snyde forsikringen&quot;" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">
    *B.T.*
    <input value="classify &quot;Mor frifundet for blotter-foto: 'De burde skamme sig'&quot;" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">
    <input value="classify &quot;Søren står frem: Så forfærdelige ting i ulykkestoget&quot;" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">
    *Politiken*
    <input value="classify &quot;Hvis jeg skulle dø om et år, ville jeg ændre én ting i mit liv&quot;" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">
    <input value="classify &quot;Studerende: Vi har brug for ordentlig feedback fra underviserne, ikke endnu en karakterskala&quot;" style="width: 100%;" onfocus="this.select();navigator.clipboard.writeText(this.value)">
</div>