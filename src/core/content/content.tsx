export const navButtons = [
    {
      id: 1,
      title: 'vrtec',
      imageSrc: '/assets/images/icons/1-vrtec_vodmat.webp'
    },
    {
      id: 2,
      title: 'ortobar',
      imageSrc: '/assets/images/icons/2-ortobar.webp'
    },
    {
      id: 3,
      title: 'zelezniska-postaja',
      imageSrc: '/assets/images/icons/3-zelezniskapostaja.webp'
    },
    {
      id: 4,
      title: 'razgledi',
      imageSrc: '/assets/images/icons/4-razgledi.webp'
    },
    {
      id: 5,
      title: 'resevalna-postaja',
      imageSrc: '/assets/images/icons/5-resevalna_postaja.webp'
    },
    {
      id: 6,
      title: 'sreca-v-nesreci',
      imageSrc: '/assets/images/icons/6-srecavnesreci.webp'
    },
    {
      id: 7,
      title: 'rdece-drevo',
      imageSrc: '/assets/images/icons/7-rdecedrevo.webp'
    },
    {
      id: 8,
      title: 'porodnisnica',
      imageSrc: '/assets/images/icons/8-porodnisnica.webp'
    },
    {
      id: 9,
      title: 'helioport',
      imageSrc: '/assets/images/icons/9-helioport.webp'
    },
    {
      id: 10,
      title: 'abeceda',
      imageSrc: '/assets/images/icons/10-abeceda.webp'
    },
    {
      id: 11,
      title: 'vodmatski-trg',
      imageSrc: '/assets/images/icons/11-vodmatski_trg.webp'
    },
    {
      id: 12,
      title: 'igrisce-in-park',
      imageSrc: '/assets/images/icons/12-igrisce_park.webp'
    }
  ]

  export const contentContent = [
    {
        id: 1,
        title: 'Vrtec Vodmat',
        type: 'image',
        subtype: 'text',
        content: {
          image: '/assets/images/logo.webp',
          text: 'LETA 1979 JE NASTAL LOGOTIP VRTCA VODMAT. OBLIKOVALA GA JE MAMA VAROVANCA VRTCA, GA. ZALA DOBNIKAR. TO JE BIL EDEN PRVIH LOGOTIPOV.' 
        }  
    },
    {
        id: 2,
        title: 'Orto Bar',
        type: 'sound',
        content: {
          sound: '/assets/sounds/ortobar.m4a'
        }
    },
    {
        id: 3,
        title: 'Železniška postaja',
        type: 'sound',
        subtype: 'riddle',
        content: {
          text:'"SMEŠNA JE TA HIŠA, NIMA OKEN NIMA VRAT, V NJEJ POČAKAŠ, DA PRIDE VLAK."',
          sound: '/assets/sounds/vlakpostaja.mp3',
          answer: '/assets/images/icons/3-zelezniskapostaja.webp'
        }
    },
    {
        id: 4,
        title: 'Razgledi',
        type: 'multi-sound',
        content: {
          sound: [
            '/assets/sounds/razgledi_1.m4a',
            '/assets/sounds/razgledi_2.m4a',
            '/assets/sounds/razgledi_3.m4a',
            '/assets/sounds/razgledi_4.m4a',
          ]
        }
    },
    {
        id: 5,
        title: 'Reševalna postaja',
        type: 'text',
        content: {
          text: 'VČASIH SO SE LJUDE VOZILI S KOČIJAMI. IMELI SO POSEBEJ HITRO, KI JE VOZILA POŠKODOVANE IN BOLNE LJUDI. TETE IN STRICI SO SE VOZILI S TRAMVAJEM. TO JE KOČIJA, KI JE POTOVALA PO ŽICI V KATERI JE BILA ELEKTRIKA. NJEGOVA GARAŽA JE STALA TAM, KJER SO DANES DOMA REŠILCI.'  
        }
        
    },
    {
        id: 6,
        title: 'Sreča v nesreči',
        type: 'multi-image',
        subtype: 'text',
        content: {
          image: [
            '/assets/images/sreca_2.webp',
            '/assets/images/sreca_3.webp',
            '/assets/images/sreca_4.webp',
            '/assets/images/sreca_1.webp',
          ],
          text: [
            'SREČA JE TO, DA KUŽI LAHKO ODKLENE TELEVIZIJO IN GREVA SKUPAJ NOTER. V TELEVIZIJI LAHKO SKAČEM PO HUDOBNEM VOLKU, KER V PRAVLJICAH IN RISANKAH JE VSE MOGOČE.',
            'SREČA JE, DA PADEŠ NA TRAVO, KER JE TRAVA MEHKA IN TE NIČ NE BOLI…SREČEN SEM, KO SEM DOMA IN Z ATIJEM IN MAMI BARVAMO JAJČKA.',
            'SREČA JE, DA SEM VESEL. NAJBOLJ SEM VESEL, KO DOBIM DARILA ZA ROJSTNI DAN.',
            'SREČA JE TO DA IMAM SESTRICO, KER ME IMA TAKO RADA IN IMAVA DRUG DRUGEGA. NISEM SAM, Z NJO SE LAHKO IGRAM, SI POMAGAVA IN SKUPAJ DELAVA LUMPARIJE NPR. SI USTRIŽEVA LASE NA SKRIVAJ IN JIH SKRIJEVA POD KAVČ. SREČA V NESREČI JE, DA SE NA PRIMER ZGODI PROMETNA NESREČA ČISTO ZRAVEN BOLNICE.',
          ]
        }  
    },
    {
        id: 7,
        title: 'Rdeče drevo',
        type: 'multi-image',
        subtype: 'text',
        content: {
          text: [
            'OB ROBU VODMATSKEGA TRGA RASTE DREVO, KI PRINAŠA SREČO BOLNIM LJUDEM.',
            'NA NJEM RASTEJO RDEČI LISTI, KI SPOMINJAJO NA ZDRAVO KRI.',
            'KO ZAPIHA VETER ZDRAVNIKI ODPREJJO OKNA BOLNIŠNIC IN LISTI PRILETIJO K BOLNIKOM.',
            'LISTKI SEDEJO NA BOLNIKOVE BOLNE DELE TELESA IN ZAČNEJO ČUDEŽNO ZDRAVITI.',
            'BOLNI S POMOČJO RDEČIH LISTKOV HITRO OZDRAVIJO.'
          ],
          image: [
            '/assets/images/rd_1.webp',
            '/assets/images/rd_2.webp',
            '/assets/images/rd_3.webp',
            '/assets/images/rd_4.webp',
            '/assets/images/rd_5.webp',
          ]
        },
    },
    {
        id: 8,
        title: 'Porodnišnica',
        type: 'image',
        content: {
          image: '/assets/images/porodnisnica.gif'
        }   
    },
    {
        id: 9,
        title: 'Helioport',
        type: 'sound',
        subtype: 'riddle',
        content: {
          text: 'NI PTICA, ČEPRAV IMA KRILA, V SVOJEM TRBUŠČKU PILOTA, ZDRAVNIKA IN PACIENTA SKRIVA. ',
          sound: '/assets/sounds/helikopter.aac',
          answer: '/assets/images/icons/minihelikopter.webp'
        }
    },
    {
        id: 10,
        title: 'Abeceda',
        type: 'image',
        content: {
          image: '/assets/images/Pametnjakovic-strip.webp'
        }
    },
    {
        id: 11,
        title: 'Vodmatski trg',
        type: 'image',
        content: {
          image: '/assets/images/vodmat-trg.webp'
        }
    },
    {
        id: 12,
        title: 'Igrišče in park',
        type: 'multi-image',
        content: {
          image: [
            '/assets/images/park_skratki.webp',
            '/assets/images/park1m.webp',
            '/assets/images/park2m.webp',
            '/assets/images/park3m.webp',
            '/assets/images/park4m.webp',
            '/assets/images/park5m.webp',
            '/assets/images/park6m.webp',
            '/assets/images/park7m.webp',
          ]
        }
    },
  ]