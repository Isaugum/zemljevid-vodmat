export const navButtons = [
    {
      id: 1,
      title: 'vrtec',
      imageSrc: '../../../public/assets/images/icons/1-vrtec_vodmat.png'
    },
    {
      id: 2,
      title: 'ortobar',
      imageSrc: '../../../public/assets/images/icons/2-ortobar.png'
    },
    {
      id: 3,
      title: 'zelezniska-postaja',
      imageSrc: '../../../public/assets/images/icons/3-zelezniskapostaja.png'
    },
    {
      id: 4,
      title: 'razgledi',
      imageSrc: '../../../public/assets/images/icons/4-razgledi.png'
    },
    {
      id: 5,
      title: 'resvalna-postaja',
      imageSrc: '../../../public/assets/images/icons/5-resevalna_postaja.png'
    },
    {
      id: 6,
      title: 'sreca-v-nesreci',
      imageSrc: '../../../public/assets/images/icons/6-serecavnesreci.png'
    },
    {
      id: 7,
      title: 'rdece-drevo',
      imageSrc: '../../../public/assets/images/icons/7-rdecedrevo.png'
    },
    {
      id: 8,
      title: 'porodnisnica',
      imageSrc: '../../../public/assets/images/icons/8-porodnisnica.png'
    },
    {
      id: 9,
      title: 'helioport',
      imageSrc: '../../../public/assets/images/icons/9-helioport.png'
    },
    {
      id: 10,
      title: 'abeceda',
      imageSrc: '../../../public/assets/images/icons/10-abeceda.png'
    },
    {
      id: 11,
      title: 'vodmatski-trg',
      imageSrc: '../../../public/assets/images/icons/11-vodmatski_trg.png'
    },
    {
      id: 12,
      title: 'igrisce-in-park',
      imageSrc: '../../../public/assets/images/icons/12-igrisce_park.png'
    }
  ]

  export const contentContent = [
    {
        id: 1,
        title: 'Vrtec Vodmat',
        type: 'text',
        content: {
          text: 'LETA 1979 JE NASTAL LOGOTIP VRTCA VODMAT. OBLIKOVALA GA JE MAMA VAROVANCA VRTCA, GA. ZALA DOBNIKAR. TO JE BIL EDEN PRVIH LOGOTIPOV.' 
        }  
    },
    {
        id: 2,
        title: 'Orto Bar',
        type: 'sound',
        content: {
          sound: '../../../publicpublic/assets/sounds/ortobar.m4a'
        }
    },
    {
        id: 3,
        title: 'Železniška postaja',
        type: 'text+sound',
        content: {
          text:'"SMEŠNA JE TA HIŠA, NIMA OKEN NIMA VRAT, V NJEJ POČAKAŠ, DA PRIDE VLAK."',
          sound: '../../../publicpublic/assets/sounds/vlakpostaja.mp3',
          answer: 'Železniška postaja'
        }
    },
    {
        id: 4,
        title: 'Razgledi',
        type: 'sound',
        content: {
          sound: [
            '../../../publicpublic/assets/sounds/razgledi_1.m4a',
            '../../../publicpublic/assets/sounds/razgledi_2.m4a',
            '../../../publicpublic/assets/sounds/razgledi_3.m4a',
            '../../../publicpublic/assets/sounds/razgledi_4.m4a',
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
        type: 'images',
        content: {
          image: [
            '../../../public/assets/images/sreca_1.png',
            '../../../public/assets/images/sreca_2.png',
            '../../../public/assets/images/sreca_3.png',
            '../../../public/assets/images/sreca_4.png',
          ],
          text: [
            'SREČA JE TO DA IMAM SESTRICO, KER ME IMA TAKO RADA IN IMAVA DRUG DRUGEGA. NISEM SAM, Z NJO SE LAHKO IGRAM, SI POMAGAVA IN SKUPAJ DELAVA LUMPARIJE NPR. SI USTRIŽEVA LASE NA SKRIVAJ IN JIH SKRIJEVA POD KAVČ. SREČA V NESREČI JE, DA SE NA PRIMER ZGODI PROMETNA NESREČA ČISTO ZRAVEN BOLNICE.',
            'SREČA JE TO, DA KUŽI LAHKO ODKLENE TELEVIZIJO IN GREVA SKUPAJ NOTER. V TELEVIZIJI LAHKO SKAČEM PO HUDOBNEM VOLKU, KER V PRAVLJICAH IN RISANKAH JE VSE MOGOČE.',
            'SREČA JE, DA PADEŠ NA TRAVO, KER JE TRAVA MEHKA IN TE NIČ NE BOLI…SREČEN SEM, KO SEM DOMA IN Z ATIJEM IN MAMI BARVAMO JAJČKA.',
            'SREČA JE, DA SEM VESEL. NAJBOLJ SEM VESEL, KO DOBIM DARILA ZA ROJSTNI DAN.'
          ]
        }  
    },
    {
        id: 7,
        title: 'Rdeče drevo',
        type: 'images',
        content: {
          text: [
            'OB ROBU VODMATSKEGA TRGA RASTE DREVO, KI PRINAŠA SREČO BOLNIM LJUDEM.',
            'NA NJEM RASTEJO RDEČI LISTI, KI SPOMINJAJO NA ZDRAVO KRI.',
            'KO ZAPIHA VETER ZDRAVNIKI ODPREJJO OKNA BOLNIŠNIC IN LISTI PRILETIJO K BOLNIKOM.',
            'LISTKI SEDEJO NA BOLNIKOVE BOLNE DELE TELESA IN ZAČNEJO ČUDEŽNO ZDRAVITI.',
            'BOLNI S POMOČJO RDEČIH LISTKOV HITRO OZDRAVIJO.'
          ],
          image: [
            '../../../public/assets/images/rd_1.png',
            '../../../public/assets/images/rd_2.png',
            '../../../public/assets/images/rd_3.png',
            '../../../public/assets/images/rd_4.png',
            '../../../public/assets/images/rd_5.png',
          ]
        },
    },
    {
        id: 8,
        title: 'Porodnišnica',
        type: 'image',
        content: {
          image: '../../../public/assets/images/dojenclni.gif'
        }   
    },
    {
        id: 9,
        title: 'Helioport',
        type: 'text',
        content: {
          text: 'NI PTICA, ČEPRAV IMA KRILA, V SVOJEM TRBUŠČKU PILOTA, ZDRAVNIKA IN PACIENTA SKRIVA. ',
          sound: '../../../public/assets/sounds/helikopter.aac'
        }
    },
    {
        id: 10,
        title: 'Abeceda',
        type: 'image',
        content: {
          image: '../../../public/assets/images/Pametnjakovic-strip.png'
        }
    },
    {
        id: 11,
        title: 'Vodmatski trg',
        type: 'text',
        content: {
          text: '/'
        }
    },
    {
        id: 12,
        title: 'Igrišce in park',
        type: 'image',
        content: {
          image: '../../../public/assets/images/park_skratki.png'
        }
    },
  ]