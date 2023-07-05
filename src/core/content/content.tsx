export const navButtons = [
    {
      id: 1,
      title: 'Vrtec Vodmat',
      imageSrc: '/assets/images/icons/1-vrtec_vodmat.webp'
    },
    {
      id: 2,
      title: 'Orto Bar',
      imageSrc: '/assets/images/icons/2-ortobar.webp'
    },
    {
      id: 3,
      title: 'Železniška postaja',
      imageSrc: '/assets/images/icons/3-zelezniskapostaja.webp'
    },
    {
      id: 4,
      title: 'Razgledi',
      imageSrc: '/assets/images/icons/4-razgledi.webp'
    },
    {
      id: 5,
      title: 'Reševalna postaja',
      imageSrc: '/assets/images/icons/5-resevalna_postaja.webp'
    },
    {
      id: 6,
      title: 'Sreča v nesreči',
      imageSrc: '/assets/images/icons/6-srecavnesreci.webp'
    },
    {
      id: 7,
      title: 'Rdeče drevo',
      imageSrc: '/assets/images/icons/7-rdecedrevo.webp'
    },
    {
      id: 8,
      title: 'Porodnišnica',
      imageSrc: '/assets/images/icons/8-porodnisnica.webp'
    },
    {
      id: 9,
      title: 'Helioport',
      imageSrc: '/assets/images/icons/9-helioport.webp'
    },
    {
      id: 10,
      title: 'Abeceda',
      imageSrc: '/assets/images/icons/10-abeceda.webp'
    },
    {
      id: 11,
      title: 'Vodmatski trg',
      imageSrc: '/assets/images/icons/11-vodmatski_trg.webp'
    },
    {
      id: 12,
      title: 'Igrišče in park',
      imageSrc: '/assets/images/icons/12-igrisce_park.webp'
    }
  ]

  interface contentContentType {
    id: number;
    title: string;
    content: any[];
  }

  export const contentContent: contentContentType[] = [
    {
        id: 1,
        title: 'Vrtec Vodmat',
        content: [
          {
            type: 'image',
            image: '/assets/images/logo.webp',
            text: 'LETA 1979 JE NASTAL LOGOTIP VRTCA VODMAT. OBLIKOVALA GA JE MAMA VAROVANCA VRTCA, GA. ZALA DOBNIKAR. TO JE BIL EDEN PRVIH LOGOTIPOV.',
            link: 'https://www.vrtecvodmat.si/umetnine-predstavitev/arhitektura-plese/',
            linkText: 'Opeka na opeko vrtec'
          }
        ] 
    },
    {
        id: 2,
        title: 'Orto Bar',
        content: [
          {
            type: 'sound',
            sound: '/assets/sounds/ortobar.m4a',
            text: 'Glasba je v celoti v izvedbi otrok'
          }
        ]
    },
    {
        id: 3,
        title: 'Železniška postaja',
        content: [
          {
            type: 'riddle',
            text:'"SMEŠNA JE TA HIŠA, NIMA OKEN NIMA VRAT, V NJEJ POČAKAŠ, DA PRIDE VLAK."',
            sound: '/assets/sounds/vlakpostaja.mp3',
            answer: '/assets/images/icons/3-zelezniskapostaja.webp',
            answerText: 'Železniška postaja'
          },
          {
            type: 'riddle',
            text:'"DOLGA KAČA SE ČEZ HRIBE IN DOLINE VIJE, ČIHA-PUHA TU IN TAM »ZAVPIJE«"',
            sound: '/assets/sounds/vlak.wav',
            answerText: 'Vlak'
          }
      ]
    },
    {
        id: 4,
        title: 'Razgledi',
        content: [
          {
            type: 'sound',
            sound: '/assets/sounds/razgledi_1.m4a',
            text: 'Ljubljanski grad'
          },
          {
            type: 'sound',
            sound: '/assets/sounds/razgledi_2.m4a',
            text: 'Dimnik v mostah'
          },
          {
            type: 'sound',
            sound: '/assets/sounds/razgledi_3.m4a',
            text: 'Golovec'
          },
          {
            type: 'sound',
            sound: '/assets/sounds/razgledi_4.m4a',
            text: 'Povodni mož'
          }
        ]
    },
    {
        id: 5,
        title: 'Reševalna postaja',
        content: [
          {
            type: 'riddle',
            text: '"V TEJ HIŠI POLNO REŠEVALNIH AVTOV JE DOMA, KO RABIŠ POMOČ, POKLIČEŠ 112."',
            answerText: 'Reševalna postaja' 
          },
          {
            type: 'text',
            text: 'VČASIH SO SE LJUDE VOZILI S KOČIJAMI. IMELI SO POSEBEJ HITRO, KI JE VOZILA POŠKODOVANE IN BOLNE LJUDI. TETE IN STRICI SO SE VOZILI S TRAMVAJEM. TO JE KOČIJA, KI JE POTOVALA PO ŽICI V KATERI JE BILA ELEKTRIKA. NJEGOVA GARAŽA JE STALA TAM, KJER SO DANES DOMA REŠILCI.'  
          } 
        ]
    },
    {
        id: 6,
        title: 'Sreča v nesreči',
        content: [
          {
            type: 'text-image',
            text:  'CIGLARJEVA (JANEZOVA) ULICA NAS SPOMNI NA JANEZA CIGLERJA, KI JE NAPISAL PRVO SLOVENSKO POVEST SREČA V NESREČI.'
            ,
          },
          {
            type: 'text-image',
            image: 'assets/images/sreca_2.webp',
            text: 'SREČA JE TO, DA KUŽI LAHKO ODKLENE TELEVIZIJO IN GREVA SKUPAJ NOTER. V TELEVIZIJI LAHKO SKAČEM PO HUDOBNEM VOLKU, KER V PRAVLJICAH IN RISANKAH JE VSE MOGOČE.',
          },
          {
            type: 'text-image',
            image: 'assets/images/sreca_3.webp',
            text: 'SREČA JE, DA PADEŠ NA TRAVO, KER JE TRAVA MEHKA IN TE NIČ NE BOLI…SREČEN SEM, KO SEM DOMA IN Z ATIJEM IN MAMI BARVAMO JAJČKA.',
          },
          {
            type: 'text-image',
            image: 'assets/images/sreca_4.webp',
            text: 'SREČA JE, DA SEM VESEL. NAJBOLJ SEM VESEL, KO DOBIM DARILA ZA ROJSTNI DAN.',
          },
          {
            type: 'text-image',
            image: 'assets/images/sreca_1.webp',
            text: 'SREČA JE TO DA IMAM SESTRICO, KER ME IMA TAKO RADA IN IMAVA DRUG DRUGEGA. NISEM SAM, Z NJO SE LAHKO IGRAM, SI POMAGAVA IN SKUPAJ DELAVA LUMPARIJE NPR. SI USTRIŽEVA LASE NA SKRIVAJ IN JIH SKRIJEVA POD KAVČ. SREČA V NESREČI JE, DA SE NA PRIMER ZGODI PROMETNA NESREČA ČISTO ZRAVEN BOLNICE.',
          }
        ] 
    },
    {
        id: 7,
        title: 'Rdeče drevo',
        content: [
          {
            type: 'text-image',
            image: '/assets/images/rd_1.webp',
            text: 'OB ROBU VODMATSKEGA TRGA, OB TRANSFUZIJI, RASTE DREVO, KI PRINAŠA SREČO BOLNIM LJUDEM.'
          },
          {
            type: 'text-image',
            image: '/assets/images/rd_2.webp',
            text: 'NA NJEM RASTEJO RDEČI LISTI, KI SPOMINJAJO NA ZDRAVO KRI.',
          },
          {
            type: 'text-image',
            image: '/assets/images/rd_3.webp',
            text: 'KO ZAPIHA VETER ZDRAVNIKI ODPREJJO OKNA BOLNIŠNIC IN LISTI PRILETIJO K BOLNIKOM.',
          },
          {
            type: 'text-image',
            image: '/assets/images/rd_4.webp',
            text: 'LISTKI SEDEJO NA BOLNIKOVE BOLNE DELE TELESA IN ZAČNEJO ČUDEŽNO ZDRAVITI.',
          },
          {
            type: 'text-image',
            image: '/assets/images/rd_5.webp',
            text: 'BOLNI S POMOČJO RDEČIH LISTKOV HITRO OZDRAVIJO.'
          }
        ]
    },
    {
        id: 8,
        title: 'Porodnišnica',
        content: [
          {
            type: 'image',
            image: '/assets/images/porodnisnica.gif',
            text: 'Jaz kot dojenček'
          }             
        ]

    },
    {
        id: 9,
        title: 'Helioport',
        content: [
          {
            type: 'riddle',
            text: 'NI PTICA, ČEPRAV IMA KRILA, V SVOJEM TRBUŠČKU PILOTA, ZDRAVNIKA IN PACIENTA SKRIVA. ',
            sound: '/assets/sounds/helikopter.aac',
            answer: '/assets/images/icons/minihelikopter.webp',
            answerText: 'Helikopter!'
          },
          {
            type: 'riddle',
            text: 'ZASLIŠALI SMO ZVOK HELIKOPTERJA. BIL JE ZELO GLASEN. LETEL JE MIMO NAS, NA OKROGLO STEZO, TAM PRI BOLNICI. SIGURNO SE JE NEKDO POŠKODOVAL ALI PA JE BIL HUDO BOLAN. MIMO NAS VELIKOKRAT GRE HELIKOPTER, SAJ SMO BLIZU BOLNICE.'
          }         
        ]
    },
    {
        id: 10,
        title: 'Abeceda',
        content: [
          {
            type: 'image',
            text: 'ADAM BOHORIČ JE NAPISAL PRVO SLOVENSKO SLOVNICO, MI PA STRIP.',
            image: '/assets/images/Pametnjakovic-strip.webp'
          }          
        ]

    },
    {
        id: 11,
        title: 'Vodmatski trg',
        content: [
          {
            type: 'image',
            image: '/assets/images/vodmat-trg.webp',
            text: 'VZEMI SI ČAS ZA SOK S STARŠI ALI PRIJATELJI IN SE OZRI NAOKROG. KAM VSE VODIJO POTI IZ VODMATSKEGA TRGA?'
          }          
        ]

    },
    {
        id: 12,
        title: 'Igrišče in park',
        content: [
          {
            type: 'text-image',
            text: 'V KROGU DREVESA STOJIJO\r\nTAM ŠKRATI ŽIVIJO.\r\nROŽE KRADEJO,\r\nDA JIH V VAZE SPRAVIJO.\r\nIZ NJIH BARVE NAREDIJO,\r\nDA HIŠO LEPŠO NAREDIJO.\r\nNARAVO IN OTROKE NARIŠEJO\r\nIN CELO STENO POPIŠEJO.',
            image: '/assets/images/park_skratki.webp',
          },
          {
            type: 'image',
            text: '',
            image: '/assets/images/park1m.webp',
          },
          {
            type: 'image',
            text: '',
            image: '/assets/images/park2m.webp',
          },
          {
            type: 'image',
            text: '',
            image: '/assets/images/park3m.webp',
          },
          {
            type: 'image',
            text: '',
            image: '/assets/images/park4m.webp',
          },
          {
            type: 'image',
            text: '',
            image: '/assets/images/park5m.webp',
          },
          {
            type: 'image',
            text: '',
            image: '/assets/images/park6m.webp',
          },
          {
            type: 'image',
            text: '',
            image: '/assets/images/park7m.webp',
          }
        ]
    },
    {
      id: 14,
      title: 'Ustvarjalci vsebine',
      content: [
        {
          type: 'image',
          text: 'Otroci skupin Levčki, Sončki, Krtki, Žabice in Pingvini enote Vodmat v šolskem letu 2022/23\r\nVzgojiteljice: Urša Luznar, Jana Pevec, Vanja Kep, Ana Grad Rožman, Melita Rožič\r\nPomočnice vzgojiteljic: Anita Zidar, Vesna Košir, Žaklina Zahirović, Katarina Blagojevič, Maruša Novak\r\nUmetniki: Lene Lekše, Nika Rupnik, Ida Mlakar Črnič\r\n Vodja projekta: Darja Štirn\r\nOdgovorna oseba: Marta Korošec, ravnateljica vrtca\r\nTisk JAC \r\nJunij 2023\r\n',
        },
      ]
  },
  ]