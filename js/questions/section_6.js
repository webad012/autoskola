var questions = questions || [];

questions.push({
    id: 6,
    name: 'Превоз терета и лица возилима',
    questions: [
        {
            id: 0,
            name: 'Опште одредбе, појам, значај и забране',
            total_number_of_questions: 5,
            questions: [
                {
                    id: 1, 
                    points: 2,
                    text: 'У саобраћају на путу није дозвољено да се возило оптерети:', 
                    answers: [
                        {
                            id: 1,
                            text: 'преко носивости уписане у саобраћајну дозволу'
                        },
                        {
                            id: 2,
                            text: 'масом која је за 50 % већа од масе возила'
                        },
                        {
                            id: 3,
                            text: 'масом која је већа од масе возила'
                        },
                        {
                            id: 4,
                            text: 'преко највећег осовинског оптерећења појединих осовина одређених од стране произвођача возила'
                        }
                    ],
                    correct_answers: [1, 4]
                },
                {
                    id: 2, 
                    points: 2,
                    text: 'У саобраћају на путу:', 
                    answers: [
                        {
                            id: 1,
                            text: 'возило може да се оптерети преко носивости уписане у саобраћајну дозволу, уколико су за возило издате регистарске таблице црвене боје'
                        },
                        {
                            id: 2,
                            text: 'возило може да се оптерети преко носивости уписане у саобраћајну дозволу, уз посебну дозволу надлежног органа'
                        },
                        {
                            id: 3,
                            text: 'није дозвољено да се возило оптерети преко носивости уписане у саобраћајну дозволу'
                        }
                    ],
                    correct_answers: [3],
                    similar_questions_ids: [3]
                },
                {
                    id: 3, 
                    points: 2,
                    text: 'У саобраћају на путу:', 
                    answers: [
                        {
                            id: 1,
                            text: 'није дозвољено да се возило оптерети преко највећег осовинског оптерећења појединих осовина одређених од стране произвођача возила'
                        },
                        {
                            id: 2,
                            text: 'возило може да се оптерети преко највећег осовинског оптерећења појединих осовина одређених од стране произвођача возила, уз посебну дозволу надлежног органа'
                        },
                        {
                            id: 3,
                            text: 'возило може да се оптерети преко највећег осовинског оптерећења појединих осовина одређених од стране произвођача возила, уколико су за возило издате регистарске таблице црвене боје'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 4, 
                    points: 2,
                    text: 'У саобраћају на путу:', 
                    answers: [
                        {
                            id: 1,
                            text: 'возило са теретом може да премашује највећу дозвољену дужину прописану техничким нормативима за ту врсту возила највише за 1,5 m'
                        },
                        {
                            id: 2,
                            text: 'није дозвољено да возило са теретом премашује највеће дозвољене димензије прописане техничким нормативима за ту врсту возила (дужина, ширина и висина)'
                        },
                        {
                            id: 3,
                            text: 'возило са теретом може да премашује највеће дозвољене димензије прописане техничким нормативима за ту врсту возила (дужина, ширина и висина), уколико су за возило издате регистарске таблице црвене боје'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 5, 
                    points: 2,
                    text: 'У саобраћају на путу:', 
                    answers: [
                        {
                            id: 1,
                            text: 'возило са теретом може да премашује највећу дозвољену дужину прописану техничким нормативима за ту врсту возила највише за 1,5 m'
                        },
                        {
                            id: 2,
                            text: 'возило са теретом може да премашује највеће дозвољене димензије прописане техничким нормативима за ту врсту возила (дужина, ширина и висина), уколико су за возило издате регистарске таблице црвене боје'
                        },
                        {
                            id: 3,
                            text: 'дозвољено је да возило са теретом премашује највеће дозвољене димензије прописане техничким нормативима за ту врсту возила (дужина, ширина и висина), уз посебну дозволу надлежног органа'
                        }
                    ],
                    correct_answers: [3]
                }
            ]
        },
        {
            id: 1,
            name: 'Оптерећење возила (осовинско оптерећење, укупна маса, носивост, највећа дозвољена маса, највећа дозвољена укупна маса, смештај и обезбеђење терета)',
            total_number_of_questions: 18,
            questions: [
                {
                    id: 1, 
                    points: 2,
                    text: 'Терет на возилу у саобраћају на путу:', 
                    answers: [
                        {
                            id: 1,
                            text: 'мора да буде смештен и обезбеђен тако да при вожњи остаје у положају постављеном приликом утовара'
                        },
                        {
                            id: 2,
                            text: 'може да буде смештен тако да током кретања возила мења свој положај у товарном простору, тако да не може испасти или оштетити возило'
                        },
                        {
                            id: 3,
                            text: 'може да буде смештен тако да током кретања возила мења свој положај у товарном простору, тако да не може доћи до његовог оштећења'
                        }
                    ],
                    correct_answers: [1],
                    similar_questions_ids: [2, 3, 4, 5, 6, 7, 8]
                },
                {
                    id: 2, 
                    points: 2,
                    text: 'Да ли терет на возилу може бити смештен и обезбеђен тако да наноси штету путу и објектима на путу?', 
                    answers: [
                        {
                            id: 1,
                            text: 'Да, ако је надлежни орган издао посебну дозволу за такав превоз'
                        },
                        {
                            id: 2,
                            text: 'Не'
                        },
                        {
                            id: 3,
                            text: 'Да'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 3, 
                    points: 2,
                    text: 'Да ли терет на возилу може бити смештен и обезбеђен тако да умањује стабилност возила и отежава управљање возилом, као и да утиче на функционисање и коришћење склопова и делова возила?', 
                    answers: [
                        {
                            id: 1,
                            text: 'Не, осим када је надлежни орган издао посебну дозволу да се превоз врши уз пратњу са укљученим жутим ротационим или трепћућим светлом'
                        },
                        {
                            id: 2,
                            text: 'Не'
                        },
                        {
                            id: 3,
                            text: 'Да'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 4, 
                    points: 2,
                    text: 'Да ли терет на возилу може да буде смештен и обезбеђен тако да може испасти, расипати се или вући се по путу?', 
                    answers: [
                        {
                            id: 1,
                            text: 'Не'
                        },
                        {
                            id: 2,
                            text: 'Не, осим када се превоз обавља скупом возила који чине трактор и прикључно возило за трактор и на краткој деоници пута'
                        },
                        {
                            id: 3,
                            text: 'Да'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 5, 
                    points: 2,
                    text: 'Да ли терет на возилу може да буде смештен и обезбеђен тако да умањује прегледност возачу?', 
                    answers: [
                        {
                            id: 1,
                            text: 'Не'
                        },
                        {
                            id: 2,
                            text: 'Да, када се превоз обавља скупом возила који чине трактор и прикључно возило за трактор и на краткој деоници пута'
                        },
                        {
                            id: 3,
                            text: 'Да'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 6, 
                    points: 2,
                    text: 'Терет на возилу мора да буде тако смештен и обезбеђен да:', 
                    answers: [
                        {
                            id: 1,
                            text: 'не заклања само регистарску таблицу'
                        },
                        {
                            id: 2,
                            text: 'не заклања светла, регистарске таблице и друге прописане ознаке на возилу'
                        },
                        {
                            id: 3,
                            text: 'не заклања само светла'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 7, 
                    points: 2,
                    text: 'Да ли терет на возилу може да буде смештен и обезбеђен тако да загађује животну средину?', 
                    answers: [
                        {
                            id: 1,
                            text: 'Не'
                        },
                        {
                            id: 2,
                            text: 'Да'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 8, 
                    points: 2,
                    text: 'Терет на возилу, у расутом стању, мора да буде прекривен:', 
                    answers: [
                        {
                            id: 1,
                            text: 'само када се возило креће по путу у насељу'
                        },
                        {
                            id: 2,
                            text: 'само када се возило креће по путу ван насеља'
                        },
                        {
                            id: 3,
                            text: 'увек када се возило креће по путу'
                        }
                    ],
                    correct_answers: [3]
                },
                {
                    id: 9, 
                    points: 2,
                    text: 'Терет на моторном возилу може да пређе најистуренију тачку на предњој страни возила највише до:', 
                    answers: [
                        {
                            id: 1,
                            text: '1/6 своје дужине'
                        },
                        {
                            id: 2,
                            text: '1,5 m'
                        },
                        {
                            id: 3,
                            text: '1 m'
                        }
                    ],
                    correct_answers: [3],
                    similar_questions_ids: [10, 11]
                },
                {
                    id: 10, 
                    points: 2,
                    text: 'Терет на моторном возилу може да пређе најистуренију тачку на предњој страни возила:', 
                    answers: [
                        {
                            id: 1,
                            text: 'највише до 1 m'
                        },
                        {
                            id: 2,
                            text: 'више од 1 m, ако то одобри управљач пута'
                        },
                        {
                            id: 3,
                            text: 'највише до 1/6 своје дужине'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 11, 
                    points: 2,
                    text: 'Терет на возилу не сме да пређе најистуренију тачку на задњој страни возила за више о:', 
                    answers: [
                        {
                            id: 1,
                            text: '1 m'
                        },
                        {
                            id: 2,
                            text: '1/4 своје дужине, а највише за 1,5 m, с тим да терет преосталим делом дужине мора бити ослоњен на товарни простор'
                        },
                        {
                            id: 3,
                            text: '1/6 своје дужине, а највише за 1,5 m, с тим да терет преосталим делом дужине мора бити ослоњен на товарни простор'
                        }
                    ],
                    correct_answers: [3]
                },
                {
                    id: 12, 
                    points: 2,
                    text: 'Терет који на теретном или прикључном возилу прелази најистуренију тачку на задњој страни возила мора бити означен:', 
                    answers: [
                        {
                            id: 1,
                            text: 'црвеном тканином'
                        },
                        {
                            id: 2,
                            text: 'сигурносним троуглом'
                        },
                        {
                            id: 3,
                            text: 'прописаном таблом'
                        }
                    ],
                    correct_answers: [3],
                    similar_questions_ids: [13, 14, 15, 16]
                },
                {
                    id: 13, 
                    points: 2,
                    text: 'Табла за означавање терета који на теретном или прикључном возилу прелази најистуренију тачку на задњој страни возила је означена бројем:', 
                    image: './img/slika324.jpg',
                    answers: [
                        {
                            id: 1,
                            text: '3'
                        },
                        {
                            id: 2,
                            text: '1'
                        },
                        {
                            id: 3,
                            text: '2'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 14, 
                    points: 2,
                    text: 'Терет који на путничком возилу прелази најистуренију тачку на задњој страни возила мора бити означен:', 
                    answers: [
                        {
                            id: 1,
                            text: 'црвеном тканином'
                        },
                        {
                            id: 2,
                            text: 'сигурносним троуглом'
                        },
                        {
                            id: 3,
                            text: 'прописаном таблом'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 15, 
                    points: 2,
                    text: 'У условима смањене видљивости терет који на теретном или прикључном возилу прелази најистуренију тачку на задњој страни возила мора бити означен:', 
                    answers: [
                        {
                            id: 1,
                            text: 'црвеном тканином'
                        },
                        {
                            id: 2,
                            text: 'црвеним светлом или светлоодбојном материјом црвене боје'
                        },
                        {
                            id: 3,
                            text: 'прописаном таблом'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 16, 
                    points: 2,
                    text: 'У условима смањене видљивости терет који на путничком возилу прелази најистуренију тачку на задњој страни возила мора бити означен:', 
                    answers: [
                        {
                            id: 1,
                            text: 'црвеним светлом или светлоодбојном материјом црвене боје'
                        },
                        {
                            id: 2,
                            text: 'прописаном таблом'
                        },
                        {
                            id: 3,
                            text: 'црвеном тканином'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 17, 
                    points: 2,
                    text: 'Возила која су намењена за извођење радова ван пута када у саобраћају на путу имају инсталирана оруђа за извођење радова, која нису склоп возила већ измењиво средство за рад:', 
                    answers: [
                        {
                            id: 1,
                            text: 'не морају бити прописано означена'
                        },
                        {
                            id: 2,
                            text: 'морају бити прописано означена'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 18, 
                    points: 2,
                    text: 'Утовар или истовар терета на путу:', 
                    answers: [
                        {
                            id: 1,
                            text: 'може се обављати само ако је одобрен од стране управљача пута'
                        },
                        {
                            id: 2,
                            text: 'мора се обављати тако да не омета, односно не угрожава, остале учеснике у саобраћају'
                        },
                        {
                            id: 3,
                            text: 'може се обављати само ако је дозвољен саобраћајним знаком'
                        }
                    ],
                    correct_answers: [2]
                }
//                    {
//                        id: 1, 
//                        points: 2,
//                        text: ':', 
//                        image: './img/slika.jpg',
//                        answers: [
//                            {
//                                id: 1,
//                                text: ''
//                            },
//                            {
//                                id: 2,
//                                text: ''
//                            },
//                            {
//                                id: 3,
//                                text: ''
//                            }
//                        ],
//                        correct_answers: []
//                    },
//                    {
//                        id: 1, 
//                        points: 2,
//                        text: ':', 
//                        image: './img/slika.jpg',
//                        answers: [
//                            {
//                                id: 1,
//                                text: ''
//                            },
//                            {
//                                id: 2,
//                                text: ''
//                            },
//                            {
//                                id: 3,
//                                text: ''
//                            }
//                        ],
//                        correct_answers: []
//                    },
//                    {
//                        id: 1, 
//                        points: 2,
//                        text: ':', 
//                        image: './img/slika.jpg',
//                        answers: [
//                            {
//                                id: 1,
//                                text: ''
//                            },
//                            {
//                                id: 2,
//                                text: ''
//                            },
//                            {
//                                id: 3,
//                                text: ''
//                            }
//                        ],
//                        correct_answers: []
//                    },
//                    {
//                        id: 1, 
//                        points: 2,
//                        text: ':', 
//                        image: './img/slika.jpg',
//                        answers: [
//                            {
//                                id: 1,
//                                text: ''
//                            },
//                            {
//                                id: 2,
//                                text: ''
//                            },
//                            {
//                                id: 3,
//                                text: ''
//                            }
//                        ],
//                        correct_answers: []
//                    }
            ]
        },
        {
            id: 2,
            name: 'Ванредни превоз (појам, услови под којим се обавља, дозвола)',
            total_number_of_questions: 4,
            questions: [
                {
                    id: 1, 
                    points: 3,
                    text: 'Кретање по путу возила, односно скупа возила, која не испуњавају услове у погледу димензија (дужина, ширина и висина) је:', 
                    answers: [
                        {
                            id: 1,
                            text: 'пробна вожња'
                        },
                        {
                            id: 2,
                            text: 'ванредни превоз'
                        },
                        {
                            id: 3,
                            text: 'превоз опасног терета'
                        }
                    ],
                    correct_answers: [2],
                    similar_questions_ids: [2]
                },
                {
                    id: 2, 
                    points: 3,
                    text: 'Кретање по путу возила, односно скупа возила, који са теретом премашују највеће дозвољене димензије (дужина, ширина и висина) прописане техничким нормативима за поједине врсте возила је:', 
                    answers: [
                        {
                            id: 1,
                            text: 'пробна вожња'
                        },
                        {
                            id: 2,
                            text: 'ванредни превоз'
                        },
                        {
                            id: 3,
                            text: 'превоз опасног терета'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 3, 
                    points: 3,
                    text: 'Ванредни превоз се обавља на основу дозволе коју издаје:', 
                    answers: [
                        {
                            id: 1,
                            text: 'министарство надлежно за послове саобраћаја'
                        },
                        {
                            id: 2,
                            text: 'министарство надлежно за унутрашње послове'
                        },
                        {
                            id: 3,
                            text: 'управљач пута'
                        }
                    ],
                    correct_answers: [3]
                },
                {
                    id: 4, 
                    points: 3,
                    text: 'Возило које са теретом премашује највећу дозвољену ширину прописану техничким нормативима за ту врсту возила, може да учествује у саобраћају на путу:', 
                    answers: [
                        {
                            id: 1,
                            text: 'уколико су за возило издате регистарске таблице црвене боје'
                        },
                        {
                            id: 2,
                            text: 'само уколико највећу дозвољену ширину премашује највише за 1 m'
                        },
                        {
                            id: 3,
                            text: 'само уз посебну дозволу надлежног органа'
                        }
                    ],
                    correct_answers: [3]
                }
            ]
        },
        {
            id: 3,
            name: 'Превоз лица возилима (појам и значај, оптерећење возила, начин превоза, ограничења)',
            total_number_of_questions: 10,
            questions: [
                {
                    id: 1, 
                    points: 2,
                    text: 'У моторном возилу, односно на возилу и прикључном возилу у саобраћају на путу, дозвољено је превозити:', 
                    answers: [
                        {
                            id: 1,
                            text: 'онолико лица колико у возилу постоји места за седење, односно места за стајање'
                        },
                        {
                            id: 2,
                            text: 'онолико лица колико може да стане у простору за превоз путника, под условом да укупна маса возила није већа од највеће дозвољене масе возила'
                        },
                        {
                            id: 3,
                            text: 'онолико лица колико је означено у саобраћајној дозволи, на местима која су за то предвиђена'
                        }
                    ],
                    correct_answers: [3],
                    similar_questions_ids: [2, 3, 4]
                },
                {
                    id: 2, 
                    points: 2,
                    text: 'У теретном возилу у простору за превоз терета:', 
                    answers: [
                        {
                            id: 1,
                            text: 'дозвољено је превозити највише пет лица која раде на утовару или истовару'
                        },
                        {
                            id: 2,
                            text: 'дозвољено је превозити највише пет лица'
                        },
                        {
                            id: 3,
                            text: 'није дозвољено превозити лица'
                        }
                    ],
                    correct_answers: [3]
                },
                {
                    id: 3, 
                    points: 2,
                    text: 'Превоз лица у затвореном простору возила које се не може изнутра отворити:', 
                    answers: [
                        {
                            id: 1,
                            text: 'није дозвољен'
                        },
                        {
                            id: 2,
                            text: 'је дозвољен само ако се превозе пунолетна лица'
                        },
                        {
                            id: 3,
                            text: 'је дозвољен'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 4, 
                    points: 2,
                    text: 'Превоз лица у прикључном возилу за становање (камп приколица):', 
                    answers: [
                        {
                            id: 1,
                            text: 'није дозвољен'
                        },
                        {
                            id: 2,
                            text: 'је дозвољен'
                        },
                        {
                            id: 3,
                            text: 'је дозвољен само на аутопуту'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 5, 
                    points: 2,
                    text: 'На трициклу није дозвољено превозити дете млађе од:', 
                    answers: [
                        {
                            id: 1,
                            text: '14 година'
                        },
                        {
                            id: 2,
                            text: '12 година'
                        },
                        {
                            id: 3,
                            text: '13 година'
                        }
                    ],
                    correct_answers: [2],
                    similar_questions_ids: [6]
                },
                {
                    id: 6, 
                    points: 2,
                    text: 'На четвороциклу није дозвољено превозити дете млађе од:', 
                    answers: [
                        {
                            id: 1,
                            text: '13 година'
                        },
                        {
                            id: 2,
                            text: '14 година'
                        },
                        {
                            id: 3,
                            text: '12 година'
                        }
                    ],
                    correct_answers: [3]
                },
                {
                    id: 7, 
                    points: 2,
                    text: 'Возач не сме управљати на начин који омогућава:', 
                    answers: [
                        {
                            id: 1,
                            text: 'искакање из возила'
                        },
                        {
                            id: 2,
                            text: 'отварање врата'
                        },
                        {
                            id: 3,
                            text: 'отварање прозора'
                        },
                        {
                            id: 4,
                            text: 'коришћење аудио уређаја у возилу'
                        }
                    ],
                    correct_answers: [1, 2],
                    similar_questions_ids: [8]
                },
                {
                    id: 8, 
                    points: 2,
                    text: 'Возач не сме управљати возилом на начин који омогућава:', 
                    answers: [
                        {
                            id: 1,
                            text: 'вожњу на спољним деловима возила или на прикључцима за извођење радова'
                        },
                        {
                            id: 2,
                            text: 'коришћење уређаја за комуникацију који омогућавају телефонирање без ангажовања руку'
                        },
                        {
                            id: 3,
                            text: 'нагињање ван возила'
                        },
                        {
                            id: 4,
                            text: 'отварање прозора'
                        }
                    ],
                    correct_answers: [1, 3]
                },
                {
                    id: 9, 
                    points: 2,
                    text: 'Врата возила:', 
                    answers: [
                        {
                            id: 1,
                            text: 'за време кретања дозвољено је држати отворена само на аутобусима без расхладних уређаја'
                        },
                        {
                            id: 2,
                            text: 'није дозвољено држати отворена током кретања возила'
                        },
                        {
                            id: 3,
                            text: 'морају бити затворена пре започињања кретања'
                        },
                        {
                            id: 4,
                            text: 'за време кретања дозвољено је држати отворена на возилима комуналне службе, војске и полиције'
                        }
                    ],
                    correct_answers: [2, 3],
                    similar_questions_ids: [10]
                },
                {
                    id: 10, 
                    points: 2,
                    text: 'Возач сме започети кретање возила:', 
                    answers: [
                        {
                            id: 1,
                            text: 'када врата буду затворена, осим на возилима комуналне службе, војске и полиције'
                        },
                        {
                            id: 2,
                            text: 'када врата буду затворена'
                        },
                        {
                            id: 3,
                            text: 'када врата буду затворена, осим на аутобусима без расхладних уређаја'
                        },
                        {
                            id: 4,
                            text: 'када путници безбедно уђу, односно изађу из возила'
                        }
                    ],
                    correct_answers: [2, 4]
                }
            ]
        }
    ]
});
