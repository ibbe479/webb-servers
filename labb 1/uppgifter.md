# Del 3 - Javascript

I del 3 ska vi lägga till lite (onödig) funktionalitet till webbsidan om Ada Lovelace. Vi gör detta med Javascript. Föreläsningsmaterialet ger viss grund att stå på, men som vanligt är [W3Schools](http://www.w3schools.com/js/) att rekommendera.
Kompendiet ger viss grund att utgå från, men [den här listan på W3Schools](http://www.w3schools.com/cssref/default.asp) är betydligt bättre.

Utgå från förra arbetet du gjorde i förra delen. Om du inte gjorde klart den, så finns det en version att hämta hem från [http://www.idioti.se/ada2.html](http://www.idioti.se/ada2.html).

## Uppgifterna

### Uppgift 1: Förberedelser

Vi kommer i den här laborationen att utgå från webbläsaren [Chrome](https://www.google.com/chrome/browser/desktop/index.html) (eller [Chromium](http://chromium.woolyss.com/), om du föredrar den). Vi gör detta eftersom vi vill använda den webbläsarens Javascript-konsol, som är betydligt trevligare än många andra. Den finns dessutom till både Windows, macOS och Linux, vilket förenklar saker betänkligt. Har du inte Chrome eller Chromium redan - [installera den](https://www.google.com/chrome/browser/desktop/index.html).

Färdig? Bra. Nu vill vi förbereda vår HTML-fil för lite Javascript-kärlek. Öppna filen i din webbläsare (dvs Chrome/Chromium), samt i en texteditor. Lägg till ett `<script>`-element i headern. Så här:

    <head>
      <title>Ada Lovelace</title>
      <script>
      </script>
      ...

När du laddar om sidan kommer du att se att absolut ingenting förändras. Det är precis som det ska vara. Ändras något, så har det blivit fel någonstans. Vi kan testa Javascript-funktionaliteten med ett väldigt kort Javascript. Så här:

    <script>
      alert('Hello, World!');
    </script>

Ladda om sidan nu. Vad händer? Vad verkar alert() göra? När du funderat ut det, kan du glatt ta bort Javascript-koden igen, men behåll `<script>`-elementet.
___

### Uppgift 2: Att använda konsolen

Vi ska nu bekanta oss med Chromes Javascript-konsol. Gå till din Ada-sida och tryck på `F12`-tangenten. Nu öppnas konsolen upp. Det ser ut så här:

![Konsolen](http://www.idioti.se/bilder/console.png)

Den nedre delen är din konsol. Med den kan du interagera med Chromes Javascript-tolk. Testa genom att klicka i den och mata in några matematiska uttryck och se vad du får för svar. Så här kan det se ut:

    > 1 + 4
    < 5

Tolken fungerar lite grann som Python-tolken; det går att mata in hela program i den om du verkligen vill (det vill du inte). Det är ett kraftigt verktyg för att testa dina Javascript-skills. Vi kan exempelvis testa att skapa en variabel:

    > let name = 'Ada';
    < undefined

Den där `undefined`-utskriften betyder bara att inmatningen inte hade något returvärde. Det är precis som det ska vara.

Nu kan vi använda variabeln för att göra saker. Vi kan börja med att skriva ut den genom att bara skriva variabelnamnet i konsolen:

    > name
    < "Ada"

Det går så klart att göra saker fler saker med variabeln än att skriva ut den. Vi kan exempelvis slå samman den med andra textsträngar och se vad som händer:

    > "Hallå " + name + "!"
    < "Hallå Ada!"

Du kommer snart att märka att det här sättet att skriva uttryck och förvänta sig en utskrift är begränsat. Försök exempelvis att skriva en for-loop och se vad som händer:

    > for (let i = 0; i < 3; i++) { name }
    < "Ada"

Vi får bara en utskrift istället för tre. Varför? Tolken skriver bara det sista returvärdet. Det är inte bra. Ett bättre sätt är att skriva ut till konsolen med `console.log()`. Förutom att den skriver ut allt som du matar in i funktionen i konsolen, har den även fördelen att du kan använda funktionen i Javascript som ligger i HTML-dokument. Vi testar igen:

    > for (let i = 0; i < 3; i++) { console.log(name + i) }
      Ada0
      Ada1
      Ada2
    < undefined

Anledningen till att vi skrev ut `name + i` är att konsolen slår samman likadana utskrifter för att spara plats. Testa att ta bort ` + i` och testa igen.

Tips: Börjar det bli trångt i konsolen? Tryck `ctrl + l` (eller möjligtvis `alt + l` på macOS) för att tömma utskrifterna. Alla variabler finns kvar ändå.

Tips 2: En kul sak med Chromes konsol är att du kan skriva in ett HTML-elements id. Du får då se hur det elementets HTML-kod ser ut. Om vi testar att skriva ut *quotes*, ser det ut så här:

![Citat](http://www.idioti.se/bilder/quotes.png)

Tips 3: Konsolen är en del av Chromes utvecklarverktyg, som du kan göra en massa annat kul med. Klicka runt bland flikarna och se vad de gör. Fliken *Elements* har bäring på vad vi gjort under laboration 1 och 2, exempelvis.
___

### Uppgift 3: Användarhändelser - Några fåniga påskägg

Som utvecklare är det din uppgift att leverera en bra produkt. Det innebär inte att man inte får ha kul medan man gör det. Många digitala produkter innehåller någon form av bus, kallade *påskägg* (kolla exempelvis mau.se-koden och se om du hittar ett där). Naturligtvis vill även vi ha ett påskägg på vår sida. Vårt väldigt enkla påskägg går ut på att en hälsning till [Charles Babbage](https://sv.wikipedia.org/wiki/Charles_Babbage) visas för användaren när denna klickar på sidans huvudrubrik. För att göra detta måste vi kunna göra två saker:

1. Detektera att användaren har tryckt på ett objekt.
2. Skriva ut en text till användaren.

Vi börjar direkt.

Med Javascript kan vi lyssna efter ett [flertal olika händelser](http://www.w3schools.com/js/js_events_examples.asp) som användaren kan initiera. Vi är intresserade efter att lyssna efter ett klick. Det enklaste sättet att göra detta på är att använda HTML-attributet *onclick*. Det fungerar så här:

    <element onclick="javascript_code;">

*onclick* kan vi lägga på alla element under `<body>`-elementet (utom `<br>`, eftersom det elementet aldrig syns). Översätter vi det till vår kod, ser det ut så här:

    <h1 onclick="javascript_code;">Ada Lovelace</h1>

Ladda om sidan och klicka på rubriken. Titta sedan i konsolen och se om du hittar en felutskrift som säger att `javascript_code` inte finns. Konsolen har naturligtvis helt rätt. Vi byter ut `javascript_code` mot `alert('Hi Charles!')` och får då följande kodsnutt:

    <h1 onclick="alert('Hi Charles!');">Ada Lovelace</h1>

Ladda om sidan igen, klicka på rubriken och se vad som händer.

Lägg till några fler påskägg av samma typ till några olika element. Experimentera med lite olika händelsetyper. En hyfsat jobbig "feature" skulle kunna vara att visa en popup-ruta med en onödig text så fort användaren drar muspekaren över biografi-sektionen. Använd dokumentationen på [W3Schools](http://www.w3schools.com/js/js_events_examples.asp) och fundera ut hur du realiserar detta.
___

### Uppgift 4: Funktioner, URLer och fönster - Citat och översättningar

Påskägg är förstås roliga, men det går att göra andra, lite nyttigare saker med Javascript. Vi tänker oss två saker:

1. Vi har en sektion med citat. Genom att klicka på dem vill vi ta oss till deras källor (som vi angav med *cite*-attributet i den första labben).
2. Det finns lite engelska fraser utspridda i texten. Vi vill kunna översätta dem genom att klicka på dem.

#### Funktioner och objekt - Citaten

För att bygga den första punkten måste vi först lägga in *onclick*-attribut i alla tre `<blockquote>`-elementen. Vi måste också fylla de här attributen med Javascript-kod så att vi kan öppna URL:en som vi lagt i *cite*-attributet. Koden kommer att se ungefär likadan ut, så vi konstaterar att det är lämpligt att skapa en funktion för detta. Vi bestämmer oss för att namnge funktionen till `goToSource()`. Gå till `<script>`-elementet i toppen av filen och skriv följande:

    function goToSource(quotxe) {
        console.log(quote);
    }

Vad gör den här funktionen? Fundera lite på det innan vi går vidare. (tips på vägen: `quote` kommer att vara det `<blockquote>`-element som användaren klickar på).

Vi återgår till citat-sektionen och fyller i våra *onclick*-attribut med Javascript-koden `goToSource(this)`. Detta innebär att vi kommer att skicka det element som användaren klickar på (`this`) till vår nyss skapade funktion. Spara filen, ladda om sidan i webbläsaren och klicka på ett av citaten. Nu borde det här hända:

![Utskrift av ett blockquote-element](http://www.idioti.se/bilder/blockquote.png)

Det här elementet kan vi nu hantera i vår `goToSource()`. Element representeras som objekt i Javascript, där varje attribut går att nå så här:

    element.attribute;

Vi skulle exempelvis kunna ändra *cite*-attributet så här för att göra det lite mindre trovärdigt:

    quote.cite = 'http://www.4chan.org';

Märk väl att vårt `<blockquote>`-element har fått namnet `quote` när det skickades till funktionen.

Det finns ett speciellt attribut som de flesta elementen kan ha: `innerHTML`. Det är den text som förekommer mellan ett elements två taggar. I fallet med våra `<blockquote>` är det alltså själva citatet. För att komma åt det skriver vi `quote.innerHTML`. Vi kan testa det genom att skriva ut bara citatet i konsolen. Vi ändrar vår funktion till

    function goToSource(quote) {
        console.log(quote.innerHTML);
    }

Spara, ladda om och testa att klicka på ett citat nu. Nu borde citatet skrivas ut i loggen, men vi har ännu inte lyckats öppna *cite*-attributets värde i ett fönster än. Det måste vi göra.

Vi kan öppna en URL i ett fönster på två olika sätt: antingen genom att öppna ett nytt fönster eller i det nuvarande fönstret. För att öppna i ett nytt fönster skriver vi

    window.open(url);

och för att öppna i det nuvarande fönstret skriver vi

    document.location = url;

Vi vill öppna adressen i ett nytt fönster och uppdaterar vår funktion till

    function goToSource(quote) {
        console.log(quote.innerHTML);
        window.open(quote.cite);
    }


Spara, ladda om och testa att klicka på ett citat igen. Nu borde det fungera som tänkt.

#### Callback-funktioner och anrop av externa tjänster och - Översättning av engelska fraser

Ibland vill vi bygga egna URLer för att kunna hämta resurser, exempelvis om vi vill konsumera en webbtjänst. Här vill vi skicka en fras på engelska till en översättningstjänst (se där, ett REST-anrop!). Vi börjar med att skapa en funktion i `<script>`-elementet:

    function translatePhrase(phrase) {
    }

Nästa steg är att lägga *onclick*-attribut i de element som innehåller engelska fraser som anropar `translatePhrase()` med det nyss klickade elementet. När detta är gjort återgår vi till `translatePhrase()` och bygger vidare på den. Vi använder oss av Google Translate, och för att översätta en text kan vi anropa [https://translate.google.com/?sl=en&tl=sv&op=translate&text=](https://translate.google.com/?sl=en&tl=sv&op=translate&text=).

    function translatePhrase(phrase) {
      // Först tar vi ut texten:
      let text = phrase.innerHTML;

      // Sen skapar vi en URL
      let url = "https://translate.google.com/?sl=en&tl=sv&op=translate&text=";
    }

Nu är vi en bit på väg. För att kunna skicka en sträng med mellanslag måste vi omvandla dessa till ett format som går att skicka som en URL-parameter. Vi gör detta med Javascript-funktionen `encodeURI(string)`. Den omkodade strängen läggs till den befintliga URLen för att skapa en fullständig URL:

    function translatePhrase(phrase) {
      // Först tar vi ut texten:
      let text = phrase.innerHTML;

      // Sen skapar vi en URL
      let url = "https://translate.google.com/?sl=en&tl=sv&op=translate&text=" + encodeURI(text);
    }

Allra sist ska URLen öppnas i ett nytt fönster. Lägg till kod för det, spara, ladda om och testa. Fungerar det? Bra jobbat!

När du som utvecklare bygger lite större applikationer, kommer du att inse att det inte alltid är hållbart att använda attribut som *onclick* på varje element som ska ges funktionalitet. Vi kan istället använda Javascript-funktionen `addEventListener()` för att ange den här typen av funktionalitet dynamiskt. Det kan se ut så här:

    document.querySelector("#quotes").addEventListener("click", console.log);

Detta kan inte läggas i HTML-dokumentets huvud, eftersom koden körs innan hela dokumentet lästs in. Därför måste du flytta `<script>`-elementet som ligger i dokumentets huvud allra sist i dokumentets `<body>`-element och lägga in ovanstående kod sist där.

Vi går igenom `querySelector()` och dess kompis `querySelectorAll()` noggrannare senare i uppgiften.

Vad händer när du laddar om sidan och klickar på elementet med ID:t "quotes" (det är texten "Citat av Ada Lovelace")? Något skrivs ut i konsolen, men det är ingen text. Det du får se är ett `event`-objekt, som innehåller all tänkbar information om vad som nyss hänt. Öppna gärna upp det och undersök det. Vi är framförallt intresserade av attributet `target`. Parkera det i minnet ett litet slag.

Varför anropades `console.log()` överhuvudtaget? Och varför skickades ett event? Jo, vi har använt oss av en *callback-funktion*. I Javascript kan en variabel vara data och objekt på samma sätt som i Python eller Java, men även en **referens till en funktion**. Det är just vad `console.log` är. Vi skickar alltså med en referens till funktionen när vi anropar `addEventListener()`. Denna funktion körs sedan när användaren klickar på det utpekade elementet. Webbläsaren passar också på att skicka med det `event`-objekt som vi såg ovan.

Testa nu att byta ut namnet på den funktion som vi vill anropa till `translatePhrase` så att det ser ut så här i din kod:

    document.querySelector("#quotes").addEventListener("click", translatePhrase);

Ladda om sidan och klicka på rubriken "Citat av Ada Lovelace" igen. Du tas nu till Google Translate, men det verkar inte riktigt fungera. Detta beror på att det du får inte är en fras, utan det där eventet igen. Förändra funktionen `translatePhrase` för att ta hänsyn till det:

```js
function translatePhrase(event) {
	// Först tar vi ut texten:
	let text = event.target.innerHTML;

	// Sen skapar vi en URL
	let url = "https://translate.google.com/#en/sv/" + encodeURI(text);
	window.open(url);
}
```

`event.target` pekar på det element som användaren klickade på. Ladda om sidan, och klicka på elementet igen. Nu fungerar det bättre, men inte riktigt så som vi tänkt oss. Tanken var ju att det här skulle köras när vi klickade på element som var skrivna på engelska, inte på den där rubriken. De element vi är intresserade av är av klassen `.english`. Vi hittar dessa genom att köra `document.querySelectorAll(".english")`, vilket returnerar en lista över alla element som matchar regeln. Vi sätter sedan beteendet för varje enskilt element genom att ersätta raden

```js
document.querySelector("#quotes").addEventListener("click", translatePhrase);
```

med

```js
document.querySelectorAll(".english").forEach((element) => {
	element.addEventListener("click", translatePhrase);
});
```

Ladda om sidan och klicka på något av elementen som innehåller engelsk text. Nu fungerar det. Wohoo!

Det vi ser här är två nya saker: en `forEach`-metod och en *anonym funktion*. Vi bryter ner det lite:

`forEach`-metoden är en metod som tillhör list-objekt i Javascript. Med hjälp av den kan vi köra en funktion på varje element i listan. Metodsignaturen ser ut så här: `List.forEach(function)`, där funktionen tar ett objekt som argument. Funktionen här fungerar på samma sätt som i `addEventListener()` ovan.

Men vi skickar väl inte med någon funktion till `forEach()` Eller? Jo, vi skickar med en *anonym funktion*, en funktion som inte deklareras förrän den används. Den ser ut så här `(parameters) => { code }`. Just vår anonyma funktion,

```js
(element) => {
	element.addEventListener("click", translatePhrase);
}
```

tar in ett enda argument, som vi kallar `element`. På varje element kör vi sedan `addEventListener("click", translatePhrase)`.

Anonyma funktioner och callback-funktioner ser luriga ut i början, men efter ett tag vänjer du dig vid det. Javascript-utvecklare gör sånt här hela tiden.
___

### Uppgift 5: Javascript och DOM - Vi förändrar saker

Vi kan, som vi såg i förra uppgiften, förändra HTML-dokumentet med hjälp av Javascript. Förutom att lägga till händelser, förändra attribut och liknande kan vi även lägga till och ta bort element i dokumentet. Vi kan exempelvis lägga till ett element i vårt dokument genom att skriva följande i konsolen:

    let textnode = document.createTextNode("The busy have no time for tears.");
    document.querySelector('#quotes').appendChild(textnode);

Sidan borde nu se ut något i den här stilen:

![Lord Byron diktar lite](http://www.idioti.se/bilder/byron.png)

Noden vi skapar är fristående tills det att vi väljer ut ett element att lägga den i, vilket i detta fall innebär att texten hamnar inne i det `<section>`-element som heter *quotes*. Vi kan på samma sätt ta bort ett element. Även detta kan vi göra i konsolen:

    document.querySelector('#quotes').removeChild(textnode);

Fräckt! Det innebär att vi kan göra våra webbsidor betydligt mer dynamiska än tidigare. För att testa det, bestämmer vi oss för att lägga till lite nya påskägg:

1. När användaren klickar på ett `<h3>`-element, byts texten ut mot "*George Boole was here*".
2. "*George Boole was here*" är så klart engelska, så den texten måste kunna översättas.
3. När fyra `<h3>`-element har klickats på, ska alla engelska texter bli fetstilta och rosa.
4. När användaren håller muspekaren över någon av de tre bilderna byter bakgrunden färg.

Nu kör vi igång!

#### *George Boole was here*

Det första vi ska göra är att byta ut en `<h3>`-rubrik när användaren klickar på den. Vårt första steg blir att skapa en funktion, som vi döper till `booleify()`. Funktionen ser ut så här:

	function booleify(elementId) {
	    document.querySelector(elementId).innerHTML = "George Boole was here";
	}

Vad händer här? `element` är det aktuella HTML-element som vi vill förändra (i vårt fall ett specifikt `<h3>`-element). Attributet `.innerHTML` innehåller all HTML-kod som innesluts av elementet. Vi stötte på detta i uppgift 4.

Nästa steg är att koppla händelser till `booleify()`. Vi gör detta genom att lägga till fler eventlyssnare till element, som i förra uppgiften. Koden ser ut så här:

    document.querySelectorAll("h3").forEach((element) => {
    	element.addEventListener("click", (event) => {
    		booleify(event.target);
    	});
    });

Notera att vi skickar med ett element här, och därför inte behöver söka upp det igen i ```booleify()```, så vi kan bygga om den lite:

	function booleify(element) {
	    element.innerHTML = "George Boole was here";
	}

Det här har vi gjort tidigare, men för att sammanfatta:

1. I det första anropet till `querySelectorAll(string)` skickar vi med strängen "h3". Detta betyder "*ge mig en lista över alla `<h3>`-element i dokumentet*". Det här fungerar precis som selektorerna i CSS. På samma sätt fungerar *#* precis som id-selektorn i CSS, och på samma sätt kan vi använda *.klassnamn* för att välja alla element av en speciell klass. Metoden `querySelector(string)` fungerar på samma sätt, men returnerar som mest ett enda element.
2. För varje element i listan lägger vi till en eventlyssnare med `addEventListener(event)` och skickar med en anonym funktion.
3. Den inre anonyma funktionen tar ett `event` som parameter och plockar ut elementet ur det, och skickar sedan detta till funktionen `booleify()` som vi skrev ihop tidigare.

Spara dokumentet, ladda om sidan och klicka på någon av `<h3>`-rubrikerna och se vad som händer.

#### Markera ut *George Boole was here* som engelska

Vi kan även förändra ett elements utseende. Ett enkelt sätt är att lägga till eller ta bort ett elements CSS-klass. Detta är väldigt enkelt att göra. I funktionen `booleify()` lägger vi till följande rad:

    element.classList.add('english');

Det är allt. Spara, ladda om och klicka på en rubrik. Märk väl att den byter färg till rätt nyans av grått.

#### Byt till rosa efter fyra klick

Nu blir det lite mer avancerat. Vår specifikation säger att all engelsk text ska bli rosa när vi bytt ut fyra `<h3>`-rubriker. Det innebär att vi måste hålla koll på hur många rubriker som bytts ut. Vi inför en variabel, `booleCounter`, som håller koll på detta. Lägg `booleCounter` högst upp i det övre `<script>`-elementet. Så här:

    <script>
        let booleCounter = 0;
        ...

`booleCounter` är nu en global variabel (usch!) som vi kan använda oss av i alla funktioner. Vi skapar ytterligare en global variabel, `const boolePhrase = "George Boole was here";`, som vi lägger under `booleCounter`. Nyckelordet `const` innebär att värdet är en konstant som inte kommer att förändras.

Nu kan vi återgå till `booleify()` och skriva om logiken i funktionen:

    function booleify(element) {
    	if (element.innerHTML !== boolePhrase) {
    		element.innerHTML = boolePhrase;
    		element.classList.add('english);
    		booleCounter++;
    	}
    }


Vad händer här nu? Vi tittar på om det aktuella elementets text är outbytt (lägg märke till `!==` för att jämföra de båda strängarna). Om texten är outbytt, byts den ut. Vi passar också på att räkna upp räknaren med ett (om du är van vid Python kan det se konstigt ut, men `booleCounter++` kan översättas till `booleCounter = booleCounter + 1`).

Vad återstår nu? Vi skulle ju byta ut färgen om vi bytt ut fyra av rubrikerna. Då så. Då gör vi det. Vi bygger ut `booleify()` så att den ser ut så här:

    function booleify(element) {
    	if (element.innerHTML !== boolePhrase) {
    		element.innerHTML = boolePhrase;
    		element.classList.add('english);
    		booleCounter++;
            if (booleCounter === 4) {
                document.querySelectorAll(".english").forEach((element) => {
                	element.style.color = 'pink';
                	element.style.fontWeight = 'bold';
                });
            }
    	}
    }

Vad är nytt här? Vi gör en ny jämförelse (lägg märke till `===`) och om vi gjort fyra uppdateringar, ska allt engelskt bli rosa och fetstilt. Med hjälp av `querySelectorAll('.english')` hittar vi alla element av klassen *english*. På dessa objekt kör vi sedan en anonym funktion som ändrar CSS-värdena `color` till *pink* och `font-weight` till *bold*.

Spara, ladda om och testa. Fungerar det? Visst är det vackert?

#### Ny bakgrundsfärg

För att byta bakgrundsfärg behöver vi veta vilka tre färger vi ska använda. Vit, cyan och spygrön verkar vara tre roliga färger. Dessutom behöver vi ha koll på den nuvarande färgen. Dessa fyra har följande värden i CSS:

* vit: *white*
* cyan: *cyan*
* spygrön: *#87fd23*
* nuvarande färg: *#efd469*

Vi måste också kunna identifiera de tre bilderna. Gå in i HTML-dokumentet och ge varje bild ett id-attribut. Vi kan döpa dem till *img1*, *img2* och *img3*, Det är inga supernamn, men de fungerar.

När vi nu kan identifiera bild-elementen, kan vi låta dem få *hover*-funktionalitet. Så här ser det ut:

	document.querySelector("#img1").addEventListener("mouseover", (event) => {
		document.querySelector("body").style.backgroundColor = 'white';
	});
	
	document.querySelector("#img1").addEventListener("mouseout", (event) => {
		document.querySelector("body").style.backgroundColor = '#efd469';
	});

Oj! Här kom lite nya saker som vi måste förhålla oss till:

1. Eftersom vi här bara är ute efter ett enskilt element, kan vi använda `querySelector()` istället för `querySelectorAll()` och slippa undan `forAll()`.
2. Vi ser här två nya `event`-typer, nämligen *mouseover*, som genereras när vi drar in muspekaren över ett element, och *mouseout*, som genereras när vi flyttar muspekaren från ett element.
3. När vi registrerat ett att muspekaren är över ett element, vill vi byta ut bakgrundsfärgen mot vit. För att byta ut bakgrundsfärgen måste vi hämta elementet `<body>`, vilket görs med `document.querySelector("body")`.
4. Vi måste sätta tillbaka bakgrundsfärgen när vi tar bort muspekaren igen.

Spara dokumentet, ladda om och rör muspekaren över den på den första bilden. Fungerade det? Bra. Lägg till liknande funktionalitet till de två andra bilderna med, men med andra färger.

___

### Uppgift 6: Externa filer


Det här är det sista steget. Om vi vill kunna återanvända vårt Javascript måste vi bryta ut det i en extern fil. Skapa en fil och döp den till exempelvis *ada.js*. Öppna filen. Klipp ut allt som står mellan `<script>` och `</script>` och klistra in det i den nya filen. Spara filen och ladda om sidan. Vad händer?

Vi måste länka in *ada.js* i vårt dokument på något sätt. Det är väldigt enkelt. Lägg till ett attribut i det nu tomma `<script>`-elementet som heter *src* och ange *ada.js* som värde. Ladda om. Nu ska det fungera.

___

### Ytterligare arbete

Mer än så här är inte planerat. Lek runt med Javascript. Förändra utseendet på sidan dynamiskt med CSS. Titta på de guider och exempel som finns på W3Schools och andra ställen.

Ha kul!
