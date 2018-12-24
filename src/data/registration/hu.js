'use strict';

const assetsPath = '../assets';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    liveIsOn: Boolean(process.env.LIVE_IS_ON),
    regIsClosed: 'Jelenleg nincs regisztráció',
    home: 'https://fjk.hu',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: assetsPath,
    nav: {
      conference: {
        url: '../conferences/2019/',
        text: 'A helyreállított képmás - Igazi nevelés'
      },
      changeLang: {
        url: '../en/registration/',
        text: 'EN'
      }
    }
  },
  content: {
    errors: {
      email: 'Kérlek helyes email címet adj meg',
      birth: 'Kérlek a helyes dátumot formátumot használd (1990/12/31)',
      empty: 'A mező kitöltése kötelező',
      server: 'Hiba merült fel az üzenet elküldése során. Kérjük, próbálja újra később!',
      user: 'Ezzel az email címmel már regisztráltak! Ha módosítani szeretnéd a regisztrációdat, keress meg minket a <a href="mailto:reg@fjk.hu">reg@fjk.hu</a> email címen!',
      progress: 'Regisztrációd feldolgozása folyamatban...',
      smallDisplay: 'A regisztrációdat csak nagyobb felbontású kijelzőn tudod folytatni...'
    },
    next: 'Tovább',
    prev: 'Vissza',
    submit: 'Jelentkezem',
    cta: 'Regisztrálj még ma!',
    price: 'Regisztráció díja',
    attendancePrice: 'Résztvételi díj <b><span id="regCalculator" class="price-calculator"></span> Ft</b>',
    swagPrice: 'Támogatói csomag <b><span id="swagCalculator" class="price-calculator">0</span> Ft</b>',
    fullPrice: 'Fizetendő összeg* <b><span id="fullCalculator"></span> Ft</b>',
    fullPriceHelp: 'A szállás költségét ezen felül kell rendezni!',
    success: {
      title: 'A regisztrációd sikeres!',
      subtitle: 'A részletekről küldtünk egy emailt!'
    },
    info: {
      title: 'Tudnivalók',
      description: 'A regisztrációd véglegesítéséhez szükséges a regisztráció során megjelölt <span class="emph">teljes</span> végösszeg átutalása. A regisztráció során megjelölt összeget átutalással kérjük befizetni, a <span class="emph">12001008-01177336-00100001</span> (<span class="emph">ASI Magyarország</span>) számlaszámra. A közlemény rovatban a regisztráló személy(ek) neve mellett mindenféleképpen legyen feltüntetve az is, hogy „<span class="emph">FJK támogatás</span>”. Ha bármilyen egyéb kérésed, kérdésed van, írj bátran az <a href="mailto:info@fjk.hu">info@fjk.hu</a> e-mail címre!<br>Amennyiben az utalást csak külföldi (nem magyar) bankszámláról tudnád intézni, úgy nem vagy köteles az előleg fizetésére, tekintettel a magas határon kívüli utalási költségekre. A regisztráció költségét a konferencián személyesen, készpénzben tudod egyenlíteni. Ebben az esetben egy e-mailt fogunk küldeni a konferencia előtt, melyben megkérünk majd egy második visszaigazolásra a megrendelt szolgáltatásokról.<br>Részvételi költség:<br>Early bird regisztrációs díj 3.000 Ft, amennyiben 2018. december 30., 23:55 óráig regisztrálsz és átutalod az összeget.<br>Normál regisztrációs díj 3.500 Ft, amennyiben 2019. január 14., 23:55 óráig regisztrálsz és átutalod az összeget.<br>Last minute regisztrációs díj 4.500 Ft, amennyiben 2019. január 21., 23:55 óráig regisztrálsz és átutalod az összeget.<br>Csak szombati és/vagy hétköznap 17 órától való részvétel a konferencián ingyenes, de regisztrációhoz kötött.'
    },
    tabs: {
      conference: {
        title: 'Részvétel',
        meal: {
          title: 'Étkezés',
          thursday: 'Csütörtök',
          friday: 'Péntek',
          sabbath: 'Szombat',
          lunch: 'Ebéd',
          dinner: 'Vacsora'
        },
        attendance: {
          full: 'Részt veszek az egész konferencián',
          sabbath: 'Csak szombaton és/vagy hétköznap 17 órától veszek részt a konferencián'
        }
      },
      housing: {
        title: 'Szállás',
        subtitle: 'Szeretnénk segítségetekre lenni, hogy minél egyszerűbben tudjatok szállást találni magatoknak konferencia időtartamára. Az alábbi lehetőségeket találtuk, melyeket fel tudtok keresni, és egyeztetni tudtok velük:',
        options: [
          {
            title: 'Opera Hostel:<br><small>1066 Budapest, Ó u. 13.</small>',
            subtitle: '<strong>3.840 Ft/fő/éj</strong>, sok ágyas szoba (8 fő), női vagy férfi'
          },
          {
            title: 'Avenue Hostel<br><small>1067 Budapest, Oktogon tér 4.</small>',
            subtitle: '<strong>3.000-4.000 Ft/fő/éj</strong>, sok ágyas szoba (4 fő, 6 fő, 8 fő), női vagy férfi'
          },
          {
            title: 'Broadway City Panzió<br><small>1066 Budapest, Nagymező u. 4.</small>',
            subtitle: '<strong>3.000-4.000 Ft/fő/éj</strong>, sok ágyas szoba'
          },
          {
            title: 'Baraka Hostel<br><small>1073 Budapest, Erzsébet krt 1-3.</small>',
            subtitle: '<strong>3.000-4.000 Ft/fő/éj</strong>, sok ágyas szoba'
          }
        ]
      },
      program: {
        title: 'Program',
        subtitle: 'Jelentkezz önkéntes munkára',
        label: 'Önkéntes munkára jelentkezés',
        translate: 'Fordítás (angol-magyar)',
        smallGroups: 'Kiscsoportos beszélgetés vezetése',
        diaconia: 'Teremdiakónia',
        other: 'Egyéb szolgálat'
      },
      support: {
        title: 'Támogatás',
        subtitle: 'Támogasd a Konferenciát',
        label: 'Támogatói csomagok',
        description: 'Most van lehetőséged Támogatói Csomagokon keresztül hozzájárulni a Konferencia szervezéséhez. Minden csomagban egyedileg tervezett, FJK logóval ellátott termékeket, jegyzetfüzetet és Glow csomagot találhatsz. Válassz egyet, és támogass minket!<br>Csomagod tárgyainak a színe (válassz egy színt, mely hozzád a legközelebb áll):',
        small: 'Apró: választható füzet + matrica + Glow füzet',
        normal_1: 'Normál I: bögre kanállal + tornazsák + hűtőmágnes',
        normal_2: 'Normál II: bögre kanállal + tornazsák + matrica',
        extra_1: 'Bővített I: kulacs + tornazsák + hűtőmágnes',
        extra_2: 'Bővített II: bögre kanállal + vászontáska + hűtőmágnes',
        extra_3: 'Bővített III: bögre kanállal + tornazsák + power bank + hűtőmágnes',
        '0': 'Imádkozom a Konferenciáért!',
        colors: {
          red: 'piros (tűz, megtisztítás, erő)',
          green: 'zöld (növekedés, újrakezdés, megújulás)',
          blue: 'kék (tisztaság)'
        },
        hoodies: {
          title: 'A pulóvereket itt nézheted meg: <a id="popover-menHoody" rel="popover" data-content="" title="Férfi pulóver">férfi</a> és <a id="popover-womenHoody" rel="popover" data-content="" title="Női pulóver">női</a>. A méretek: <a id="popover-men" rel="popover" data-content="" title="Férfi méretek">férfi</a>, <a id="popover-women" rel="popover" data-content="" title="Női méretek">női</a>, <a id="popover-menHoodySize" rel="popover" data-content="" title="Férfi pulóverek méretek">Férfi pulóverek</a> és <a id="popover-womenHoodySize" rel="popover" data-content="" title="Női pulóverek méretek">női pulóverek</a>.',
          type: 'Típus',
          size: 'Méret',
          quantity: 'Mennyiség',
          shirts: {
            men: 'Férfi póló (1250 Ft)',
            women: 'Női póló (1250 Ft)',
            menHoody: 'Férfi pulóver (4000 Ft)',
            womenHoody: 'Női pulóver (4500 Ft)'
          }
        }
      },
      personal: {
        title: 'Személyes adatok',
        subtitle: 'A regisztrációhoz szükséges személyes adatok',
        lname: 'Vezetéknév*',
        fname: 'Keresztnév*',
        birth: 'Születési idő (1990/12/31)*',
        city: 'Város*',
        country: 'Ország*',
        newsletter: 'Feliratkozom az FJK hírlevélre'
      }
    }
  }
};
