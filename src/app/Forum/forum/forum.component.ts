import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  collapseElements: CollapseElement [];
  constructor() {
    this.collapseElements = [];
    const collapseElem0 = new CollapseElement('Alacsony vérnyomás!', '' +
        'Amennyiben szükség van az alacsony vérnyomás kezelésére,' +
        ' és ismerjük a betegség kiváltó okát, az okot kell kizárni,' +
        ' és a probléma is megoldódik. Otthoni praktikákkal, így a méz-,' +
        ' a nyers tojássárgája illetve ugyancsak nyers zabkása fogyasztásával emelhetjük a vérnyomást.\n' +
        '\n' +
        'Segít, ha – ellentétben azokkal, akik magas vérnyomással küzdenek – ' +
        'több sót és folyadékot fogyaszt az ember. Akár 3 liter vizet is naponta.' +
        ' A betegek ne egyenek az étkezések alkalmával túl sokat.' +
        ' A több sóval a nátriumbevitel is emelkedik,' +
        ' amelynek a szokásos adagnál 5-10 milligrammal többnek kell lennie alacsony vérnyomás esetén.' +
        ' Az alkoholt kerüljük!\n' +
        '\n' +
        'Sportoljon a beteg, az mindig segít; a tünetek akár meg is szűnhetnek.' +
        ' Reggelente csak óvatosan keljen ki az ágyból, először üljön egy kicsit, csak aztán álljon fel.' +
        '  A reggeli torna – akár néhány perces is – segíthet a vérnyomás emelésében.' +
        ' Szaunázni ajánlott, de a hideg vizes váltózuhany is segíthet.' +
        ' Amennyiben hosszú ideje ágyban fekvő betegről van szó, megelőzhető az alacsony vérnyomás,' +
        ' ha minden nap felültetik egy kicsit.\n' +
        '\n' +
        'A természetes gyógymódok közül ajánlható alacsony vérnyomás kezelésére a borsmenta, a rozmaring.' +
        ' Hatásuk együtt különösen jó: ötven grammot keverjünk össze mindkettőből a gyógyteához.' +
        ' Napi kétszer érdemes kortyolgatni. A rozmaringból készült tea magában is alkalmas az alacsony vérnyomás kezelésére,' +
        ' ezt inkább reggel igyuk. Majorannából is főzhetünk teát a betegségre – szintén a reggeli órákban érdemes inni.\n' +
        '\n' +
        'A borsmenta és a rozmaring illóolajként is alkalmazható, akárcsak a kámfor vagy a kakukkfű:' +
        ' párologtatva vagy fürdővízbe téve használjuk.')
    this.collapseElements.push(collapseElem0)
    const collapseElem1 = new CollapseElement('Ideális vérnyomás!', 'Ideális vérnyomás esetén, nem kell aggódnia,' +
        'hiszen értékei az határon belül vannak. Ugyanakkor továbbra sem szabad figyelmen kívül hagyni a gyakori vérnyomásmérést' +
        'és továbbra is étkezzen napi 3x, továbbá ügyeljen a testmozgásra és a pihenésre eggyaránt.')
    this.collapseElements.push(collapseElem1)
    const collapseElem2 = new CollapseElement('A magas vérnyomás kockázatai.', 'A magasvérnyomás-betegség' +
        ' kialakulásában döntő szerepet játszik az egészségtelen életvitel.' +
        ' Nem is gondolnánk, hogy helytelen szokásaink elhagyásával,' +
        ' megváltoztatásával milyen nagymértékben járulhatunk hozzá az orvos által előírt gyógyszeres' +
        ' kezelés eredményességéhez.' +
        ' Próbáljon meg minél egészségesebb életmódot folytatni:' +
        ' figyeljen oda a táplálkozásra, a rendszeres mozgásra, a dohányzás mellőzésére és a káros stresszhatások kerülésére!' +
        ' A SCORE kockázatbecslő táblázat segítségével pedig könnyen következtethet arra,' +
        ' hogy 10 éven belül kell-e súlyos szív-érrendszeri megbetegedéssel számolnia. \n' +
        '\n' +
        'A konyhasófogyasztás mérséklésével akár 2-8 Hgmm-es vérnyomáscsökkenést érhetünk el.' +
        ' A rostdús, zöldségben-gyümölcsben, teljes kiőrlésű gabonatermékekben és halban gazdag,' +
        ' valamint energia-, zsír- és magas glikémiás indexű szénhidrátokban szegény étrend' +
        ' kialakításával megszabadulhatunk testsúlytöbbletünktől is.\n' +
        '\n' +
        'A rendszeres fizikai aktivitás további 4-10 Hgmm vérnyomáscsökkenést eredményezhet.' +
        ' Magas vérnyomásban szenvedő betegeknek napi 35-40 percen át végzett közepes intenzitású,' +
        ' dinamikus testmozgás – például gyors séta, kocogás, vagy kerékpározás – ajánlott.' +
        ' Nem árt tudni, hogy a préseléssel járó, statikus erősportok – például súlyemelés,' +
        ' body-building – emelik a vérnyomást.' +
        ' A sportolás megkezdése előtt mindenképpen célszerű konzultálni a kezelőorvossal,' +
        ' aki az egyén terhelhetőségének ismeretében személyre szabott tanácsokat fog adni. (4)\n' +
        '\n' +
        'Az magas vérnyomás nem olyan probléma, melynek tünetei nap mint nap figyelmeztetnek bennünket arra,' +
        ' hogy foglalkoznunk kell vele. A magas vérnyomásból következő infarktus azonban túlságosan komoly betegség ahhoz,' +
        ' hogy csak akkor kezdjünk a kérdéssel foglalkozni, amikor már megtörtént a baj.' +
        ' Az egészséges táplálkozás, vagy egy aktívabb, sportolást sem nélkülöző életmód mindenképpen fontos lépések.' +
        ' Férfiak esetében 45 éves, nők esetében pedig 55 éves kor felett szedhető olyan gyógyszer,' +
        ' mellyel megelőzhetőek a szív- és érrendszeri betegségek.' +
        ' Az Aspirin® Protect 100mg acetilszalicilsavat tartalmazó gyógyszer.' +
        ' Napi 1 tabletta rendszeres szedése megakadályozza a vérlemezkék kóros összetapadását,' +
        ' s ezáltal az ereket szűkítő vagy elzáró vérrögök képződését,' +
        ' így csökkentve az infarktus előfordulásának kockázatát.\n' +
        '\n' +
        'A kockázatokról és mellékhatásokról olvassa el a betegtájékoztatót vagy kérdezze meg kezelőorvosát,' +
        ' gyógyszerészét!')
    this.collapseElements.push(collapseElem2)
    const collapseElem3 = new CollapseElement('Hipertónia 1.', 'A hipertóniát ritkán kísérik tünetek,' +
        ' és felismerése általában szűrés révén, illetve olyankor történik,' +
        ' ha a beteg egy ettől független probléma miatt vesz igénybe egészségügyi ellátást.' +
        ' A magas vérnyomásban szenvedők egy része fejfájásról (cephalalgia) (különösen a fej hátsó részében és reggel),' +
        ' valamint állandó szédülésről (vertigo), fülzúgás/csengésről (tinnitus), látászavarról,' +
        ' illetve ájulási epizódokról (collapsus) számol be.[15] További jelei lehetnek a fáradtságérzet,' +
        ' a nehézlégzés (dyspnoe), az orrvérzés (epistaxis), a mellkasi fájdalom (angina pectoris) és az idegesség.' +
        ' Igen gyakran előfordul, hogy a hipertónia szövődményeként károsodott szervek (pl. szív) ' +
        'okoznak különböző tüneteket.\n' +
        '\n' +
        'Fizikális vizsgálat során hipertónia gyanújára adhat okot,' +
        ' ha a szem hátsó részén található szemfenék szemtükrözéses (oftalmoszkópiás) vizsgálata kezdetben ' +
        'kereszteződési tünetet, előrehaladottabb stádiumban hipertóniás retinopathiát mutat ki.' +
        ' A hipertóniás retinopathia mértékét súlyosságtól függően hagyományosan I–IV. fokozatokra osztják, ' +
        'noha nem könnyű különbséget tenni az enyhébb típusok között. Az oftalmoszkópiás eredmények azt is jelezhetik,' +
        ' hogy mennyi ideje áll fenn a hipertónia az illetőnél.')
    this.collapseElements.push(collapseElem3)
    const collapseElem4 = new CollapseElement('Hipertónia 2.', 'Néhány további jel és tünet másodlagos' +
        ' hipertóniára utalhat, azaz olyan magas vérnyomásra, amelynek kiváltó oka meghatározható,' +
        ' például vesebetegség vagy endokrin betegség. A mellkasi vagy hasi elhízás, a glükóz intolerancia,' +
        ' a holdvilágarc, a „bölénypúp” és a lila striák például Cushing-szindrómára utalnak.' +
        ' A pajzsmirigy betegsége (túlműködése) és az akromegália is okozhat magas vérnyomást,' +
        ' valamint jellegzetes panaszokat és tüneteket. A hasi zörej jelezhet vese-artéria sztenózis' +
        't (az arteria renálisok, a veséket ellátó artériák szűkületét),' +
        ' az alsó végtagok csökkent vérnyomása és/vagy a késleltetett vagy kihagyó combartéria pulzus ' +
        '(arteria femoralis pulzus) pedig szívhez közeli aortaszűkületet (aorta koarktáció) jelezhet.' +
        ' A fejfájással, fokozott szívdobogással, sápadtsággal vagy verejtékezéssel kísért ingadozó hipertónia' +
        ' alapján mellékvese velő daganat (feochromocitóma) feltételezhető.')
    this.collapseElements.push(collapseElem4)
    const collapseElem5 = new CollapseElement('Hipertónia 3.', 'A súlyosan magas vérnyomást ' +
        '(mely eléri vagy meghaladja a szisztolés 180 vagy diasztolés 110 értéket,' +
        ' és néha rosszindulatú vagy gyorsított hipertóniának nevezik) „hipertóniás krízis”-nek is nevezik.' +
        ' Az e szinteket meghaladó vérnyomásértékek a szövődmények magas kockázatát jelzik. Vannak,' +
        ' akiknél az ebbe a tartományba eső vérnyomás mellett sem jelentkeznek tünetek,' +
        ' ám körükben nagyobb valószínűséggel számolnak be fejfájásról (az esetek 22%-ában)' +
        ' és szédülésről, mint az átlagnépesség körében.' +
        'A hipertóniás krízis egyéb kísérő tünetei közé tartozhat a látás romlása és a szívelégtelenség miatti légszomj,' +
        ' illetve a veseelégtelenség miatti általános rossz közérzet.' +
        ' A legtöbb hipertóniás krízisben szenvedő embernél ismert a magas vérnyomás ténye,' +
        ' de további kiváltó okok vezethettek a hirtelen emelkedéshez.\n' +
        '\n' +
        '„Hipertóniás vészhelyzet” – korábbi nevén „rosszindulatú magas vérnyomás”' +
        ' – lép fel akkor, ha bizonyíték van egy vagy több szerv súlyosan megemelkedett vérnyomás miatt bekövetkező' +
        ' közvetlen károsodására. Az ilyen károsodások közé tartozhat az agyi duzzanat' +
        ' és diszfunkció okozta hypertenzív enkefalopátia, amelynek jellemzője a fejfájás,' +
        ' émelygés, hányás és a megváltozott tudati szint (zavartság vagy álmosság, súlyos esetben kóma).' +
        ' A retina papillödéma és/vagy a szemfenék bevérzései és váladékozása is a célszerv károsodását jelzik.' +
        ' A mellkasi fájdalom jelezheti a szívizom károsodását (súlyosbodása esetén infarktust) vagy néha aorta dissectiót,' +
        ' az aortafal rétegeinek bevérzés okozta szétválását (disszekáló aneurizma). ' +
        'A légszomj, a köhögés és a véres köpet jellemző jelei a tüdőödémának. ' +
        'Ez a betegség a tüdőszövet duzzanata balkamra-elégtelenség miatt, ' +
        'mely esetben a szív balkamrája nem képes a vért megfelelően a tüdőből az érrendszerbe pumpálni.' +
        ' A veseműködés gyors romlása (heveny vesekárosodás) és microangiopathiás hemolitikus anémia' +
        ' (vérsejtek pusztulása) is előfordulhat. Ilyen helyzetben a további szervkárosodás megfékezése érdekében' +
        ' feltétlenül szükséges a vérnyomást gyorsan csökkenteni.' +
        ' Ezzel szemben nincs bizonyíték arra, hogy a vérnyomást gyorsan csökkenteni kellene olyan hipertóniás ' +
        'vészhelyzetekben, ahol nincs bizonyíték a célszerv károsodására' +
        ' és a vérnyomás túlságosan drasztikus csökkenése nem kockázatmentes.' +
        ' Hipertóniás vészhelyzetekben javasolt a vérnyomást szájon át szedett gyógyszerekkel' +
        ' 24–48 óra alatt fokozatosan csökkenteni.')
    this.collapseElements.push(collapseElem5)
  }

  ngOnInit(): void {
  }

}
export class CollapseElement {
  constructor(public title: string, public text: string) {
  }
}




