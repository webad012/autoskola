var questions = questions || [];

questions.push({
    id: 8,
    name: 'Дужности учесника у саобраћају у случају саобраћајне незгоде', /// 22
    questions: [
        {
            id: 0,
            name: 'Поступак у случају саобраћајне незгоде (појам, дужности и обавезе возача и лица које се затекне на месту незгоде)',
            total_number_of_questions: 22,
            questions: [
                {
                    id: 1, 
                    points: 2,
                    text: 'Лице које се затекне или наиђе на место саобраћајне незгоде у којој има повређених лица дужно је да одмах обавести:', 
                    answers: [
                        {
                            id: 1,
                            text: 'полицију, односно службу хитне медицинске помоћи'
                        },
                        {
                            id: 2,
                            text: 'породицу повређеног лица'
                        },
                        {
                            id: 3,
                            text: 'управљача пута'
                        }
                    ],
                    correct_answers: [1],
                    similar_questions_ids: [2, 3, 4, 5, 7, 8, 9, 10]
                },
                {
                    id: 2, 
                    points: 2,
                    text: 'Возач који је учествовао у саобраћајној незгоди у којој је неко лице задобило телесне повреде, односно погинуло, или је настала велика материјална штета дужан је да:', 
                    answers: [
                        {
                            id: 1,
                            text: 'обезбеди трагове и предмете незгоде, под условом да тиме не угрожава безбедност саобраћаја'
                        },
                        {
                            id: 2,
                            text: 'обавести службу помоћи на путу и удаљи се са места незгоде ако прети опасност од нових саобраћајних незгода'
                        },
                        {
                            id: 3,
                            text: 'обавести полицију и попуни Европски извештај о саобраћајној незгоди'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 3, 
                    points: 2,
                    text: 'Возач који је учествовао у саобраћајној незгоди у којој је неко лице задобило телесне повреде, односно погинуло, или је настала велика материјална штета дужан је да:', 
                    answers: [
                        {
                            id: 1,
                            text: 'укаже помоћ повређенима, односно прву помоћ или медицинску помоћ у складу са својим знањима, способностима и могућностима'
                        },
                        {
                            id: 2,
                            text: 'обавести службу хитне помоћи и удаљи се са места незгоде ако прети опасност од нових саобраћајних незгода'
                        },
                        {
                            id: 3,
                            text: 'обавести службу хитне помоћи, повређене што пре уклони са коловоза, односно избави из возила и остави их на месту где не могу бити угрожени'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 4, 
                    points: 2,
                    text: 'Лице које се затекне или наиђе на место саобраћајне незгоде у којој има повређених лица:', 
                    answers: [
                        {
                            id: 1,
                            text: 'није обавезно да предузима било какве радње, односно мора обићи место саобраћајне незгоде на начин који неће довести до уништења трагова уколико је то могуће'
                        },
                        {
                            id: 2,
                            text: 'обавезно је да предузме све што је у његовој моћи да спречи увећавање постојећих, односно настајање нових последица'
                        },
                        {
                            id: 3,
                            text: 'обавезно је да се што пре удаљи са места саобраћајне незгоде и обавести најближу службу помоћи на путу'
                        },
                        {
                            id: 4,
                            text: 'обавезно је да у складу са својим знањима, способностима и могућностима пружи помоћ лицима повређеним у саобраћајној незгоди и по потреби их превезе до најближе здравствене установе'
                        }
                    ],
                    correct_answers: [2, 4]
                },
                {
                    id: 5, 
                    points: 2,
                    text: 'Возач је дужан да заустави возило, искључи мотор, укључи све показиваче правца, постави сигурносни троугао на безбедном растојању, обавести полицију и/или службу хитне помоћи и предузме друге расположиве мере како би упозорио остале учеснике у саобраћају о постојању незгоде:', 
                    answers: [
                        {
                            id: 1,
                            text: 'када је учествовао у саобраћајној незгоди у којој је неко лице задобило телесне повреде, односно погинуло, или је настала велика материјална штета'
                        },
                        {
                            id: 2,
                            text: 'када учесник који је изазвао саобраћајну незгоду неће да надокнади малу материјалну штету која је наступила као последица те незгоде'
                        },
                        {
                            id: 3,
                            text: 'када је учествовао у саобраћајној незгоди без обзира на њене последице'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 6, 
                    points: 2,
                    text: 'Од настанка саобраћајне незгоде до завршетка увиђаја, учесницима саобраћајне незгоде узимање алкохолних пића, односно психоактивних супстанци:', 
                    answers: [
                        {
                            id: 1,
                            text: 'је дозвољено, након спроведеног испитивања на присуство ових материја'
                        },
                        {
                            id: 2,
                            text: 'није дозвољено, само када му такву забрану саопшти лице које врши увиђај'
                        },
                        {
                            id: 3,
                            text: 'није дозвољено'
                        }
                    ],
                    correct_answers: [3]
                },
                {
                    id: 7, 
                    points: 2,
                    text: 'Возач који је учествовао у саобраћајној незгоди у којој је неко лице задобило телесне повреде, односно погинуло, или је настала велика материјална штета дужан је да:', 
                    answers: [
                        {
                            id: 1,
                            text: 'обавести полицију и удаљи се са места незгоде ако није изазвао ту незгоду и нема знања, способности и могућности да пружи помоћ лицима повређеним у саобраћајној незгоди'
                        },
                        {
                            id: 2,
                            text: 'предузме све мере заштите које су у његовој моћи да се спречи настајање нових и увећавање постојећих последица и повреда'
                        },
                        {
                            id: 3,
                            text: 'обавести службу помоћи на путу и удаљи се са места незгоде ако прети опасност од нових саобраћајних незгода'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 8, 
                    points: 2,
                    text: 'Возач који је учествовао у саобраћајној незгоди у којој је неко лице задобило телесне повреде, односно погинуло, или је настала велика материјална штета:', 
                    answers: [
                        {
                            id: 1,
                            text: 'није дужан да даје упозорења лицима која се затекну или наиђу на место саобраћајне незгоде'
                        },
                        {
                            id: 2,
                            text: 'дужан је да упозори сва лица да се склоне са коловоза да не би била повређена и да не би уништавала трагове незгоде'
                        },
                        {
                            id: 3,
                            text: 'дужан је да до доласка полиције врши регулисање саобраћаја на начин како то раде овлашћена лица'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 9, 
                    points: 2,
                    text: 'Возач који је учествовао у саобраћајној незгоди у којој је неко лице задобило телесне повреде, односно погинуло, или је настала велика материјална штета дужан је да:', 
                    answers: [
                        {
                            id: 1,
                            text: 'обавести полицију и остане на месту незгоде до доласка полиције и завршетка увиђаја'
                        },
                        {
                            id: 2,
                            text: 'обавести полицију и да се удаљи са места незгоде ако није изазвао ту незгоду и нема знања, способности и могућности да пружи помоћ лицима повређеним у саобраћајној незгоди'
                        },
                        {
                            id: 3,
                            text: 'обавести службу помоћи на путу и да се удаљи са места незгоде ако прети опасност од нових саобраћајних незгода'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 10, 
                    points: 2,
                    text: 'Возач који је учествовао у саобраћајној незгоди у којој је неко лице задобило телесне повреде, односно погинуло, или је настала велика материјална штета:', 
                    answers: [
                        {
                            id: 1,
                            text: 'може се удаљити са места незгоде ако му је неопходна хитна медицинска помоћ'
                        },
                        {
                            id: 2,
                            text: 'дужан је да остане на месту незгоде до доласка полиције, без обзира на своје и повреде других учесника незгоде'
                        },
                        {
                            id: 3,
                            text: 'може се удаљити са места незгоде ради превожења повређеног до најближе здравствене установе'
                        },
                        {
                            id: 4,
                            text: 'може се удаљити са места незгоде ако нема знања, способности и могућности да пружи помоћ лицима повређеним у саобраћајној незгоди'
                        }
                    ],
                    correct_answers: [1, 3]
                },
                {
                    id: 11, 
                    points: 2,
                    text: 'У саобраћајној незгоди у којој је настала мања материјална штета, било који учесник саобраћајне незгоде или лице које је претрпело материјалну штету:', 
                    answers: [
                        {
                            id: 1,
                            text: 'не може захтевати да полицијски службеник изађе на место незгоде и изврши увиђај, односно учесници ће попунити Европски извештај о саобраћајној незгоди'
                        },
                        {
                            id: 2,
                            text: 'може захтевати да полицијски службеник изађе на место незгоде и изврши увиђај'
                        },
                        {
                            id: 3,
                            text: 'може захтевати да полицијски службеник изађе на место незгоде и изврши увиђај, само у случају када су и остали учесници, односно лице које је претрпело материјалну штету, сагласни са тим захтевом'
                        }
                    ],
                    correct_answers: [2],
                    similar_questions_ids: [12]
                },
                {
                    id: 12, 
                    points: 2,
                    text: 'Ако је бар један учесник или лице које је претрпело материјалну штету, у саобраћајној незгоди у којој је настала мања материјална штета, захтевао вршење увиђаја остали учесници:', 
                    answers: [
                        {
                            id: 1,
                            text: 'нису дужни да остану на месту саобраћајне незгоде, до завршетка увиђаја'
                        },
                        {
                            id: 2,
                            text: 'су дужни да оставе податке о себи и возилу учеснику који је захтевао вршење увиђаја и могу се удаљити са места саобраћајне незгоде'
                        },
                        {
                            id: 3,
                            text: 'су дужни да остану на месту саобраћајне незгоде, до завршетка увиђаја'
                        }
                    ],
                    correct_answers: [3]
                },
                {
                    id: 13, 
                    points: 2,
                    text: 'Возач који је учествовао у саобраћајној незгоди у којој је настала само мања материјална штета:', 
                    answers: [
                        {
                            id: 1,
                            text: 'дужан је да до доласка полиције врши регулисање саобраћаја на начин како то раде овлашћена лица'
                        },
                        {
                            id: 2,
                            text: 'није дужан да даје упозорења лицима која се затекну или наиђу на место саобраћајне незгоде'
                        },
                        {
                            id: 3,
                            text: 'дужан је да уклони возило и друге предмете са коловоза, ако онемогућавају или угрожавају одвијање саобраћаја, односно ако прети опасност од нових саобраћајних незгода'
                        },
                        {
                            id: 4,
                            text: 'не сме померати возило са места саобраћајне незгоде'
                        },
                        {
                            id: 5,
                            text: 'дужан је да упозори остале учеснике у саобраћају о постојању возила и других препрека на путу, уколико их сам не може уклонити'
                        }
                    ],
                    correct_answers: [3, 5]
                },
                {
                    id: 14, 
                    points: 2,
                    text: 'Узимање узорка крви, односно урина, ради утврђивања присуства алкохола, односно психоактивних супстанци у организму учесника саобраћајне незгоде у којој има погинулих, односно повређених лица:', 
                    answers: [
                        {
                            id: 1,
                            text: 'је обавезно'
                        },
                        {
                            id: 2,
                            text: 'је обавезно, само у случају када је присуство ових материја утврђено коришћењем одговарајућих средстава'
                        },
                        {
                            id: 3,
                            text: 'није обавезно, уколико је провера присуства ових материја извршена коришћењем одговарајућих средстава'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 15, 
                    points: 2,
                    text: 'Возач који је учествовао у саобраћајној незгоди у којој је настала само мања материјална штета:', 
                    answers: [
                        {
                            id: 1,
                            text: 'не сме померати возило са места саобраћајне незгоде'
                        },
                        {
                            id: 2,
                            text: 'дужан је да упозори сва лица да се склоне са коловоза да не би ометала саобраћај'
                        },
                        {
                            id: 3,
                            text: 'дужан је да обавести полицију и поступи у складу са добијеним упутствима од стране полиције'
                        },
                        {
                            id: 4,
                            text: 'дужан је да попуни Европски извештај о саобраћајној незгоди у случају када овлашћено лице не врши увиђај саобраћајне незгоде'
                        },
                        {
                            id: 5,
                            text: 'није дужан да даје упозорења лицима која се затекну или наиђу на место саобраћајне незгоде'
                        }
                    ],
                    correct_answers: [2, 4]
                },
                {
                    id: 16, 
                    points: 2,
                    text: 'Возач који је учествовао у саобраћајној незгоди у којој је настала само мања материјална штета:', 
                    answers: [
                        {
                            id: 1,
                            text: 'дужан је да до доласка полиције врши регулисање саобраћаја на начин како то раде овлашћена лица'
                        },
                        {
                            id: 2,
                            text: 'дужан је да обавести полицију и поступи у складу са добијеним упутствима од стране полиције'
                        },
                        {
                            id: 3,
                            text: 'дужан је да предузме мере заштите које су у његовој моћи да се спречи настајање нових и увећавање постојећих последица незгоде'
                        },
                        {
                            id: 4,
                            text: 'дужан је да остави податке о себи и возилу возачу оштећеног возила или држаоцу друге оштећене ствари у незгоди, односно полицији'
                        },
                        {
                            id: 5,
                            text: 'дужан је да одмах надокнади штету другим учесницима саобраћајне незгоде ако је изазвао ту незгоду'
                        }
                    ],
                    correct_answers: [3, 4]
                },
                {
                    id: 17, 
                    points: 2,
                    text: 'Ако учесник у саобраћајној незгоди у којој је настала мања материјална штета на другом возилу, због одсутности возача другог возила, није у могућности да пружи личне податке и податке о осигурању возила, дужан је да:', 
                    answers: [
                        {
                            id: 1,
                            text: 'о тој незгоди обавести полицију и саопшти своје личне податке и податке о оштећеном возилу'
                        },
                        {
                            id: 2,
                            text: 'на оштећеном возилу у писаној форми остави своје личне податке'
                        },
                        {
                            id: 3,
                            text: 'о тој незгоди обавести осигуравајуће друштво код којег је осигурано његово возило и саопшти своје личне податке и податке о оштећеном возилу'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 18, 
                    points: 2,
                    text: 'Одузете регистарске таблице са возила које је учествовало у саобраћајној незгоди враћају се власнику, односно кориснику возила:', 
                    answers: [
                        {
                            id: 1,
                            text: 'када надлежном органу достави доказ да је возило технички исправно'
                        },
                        {
                            id: 2,
                            text: 'након извршене поправке возила'
                        },
                        {
                            id: 3,
                            text: 'након обављеног вештачења возила'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 19, 
                    points: 2,
                    text: 'Приликом вршења увиђаја саобраћајне незгоде у којој нема погинулих, односно повређених лица, испитивање возача на присуство алкохола, односно психоактивних супстанци, помоћу одговарајућих средстава (алкометар, дрога тест и др.):', 
                    answers: [
                        {
                            id: 1,
                            text: 'врши се само када то захтева бар један од учесника саобраћајне незгоде'
                        },
                        {
                            id: 2,
                            text: 'је обавезно'
                        },
                        {
                            id: 3,
                            text: 'није обавезно'
                        }
                    ],
                    correct_answers: [2]
                },
                {
                    id: 20, 
                    points: 2,
                    text: 'Меру искључења и одузимања регистарских таблица возила која су учествовала у саобраћајној незгоди полицијски службеник примењује:', 
                    answers: [
                        {
                            id: 1,
                            text: 'на возила која нису у возном стању, односно на којима су очигледно неисправни склопови и уређаји битни за безбедно кретање'
                        },
                        {
                            id: 2,
                            text: 'на возила којима је управљао возач чије је непрописно понашање довело до саобраћајне незгоде'
                        },
                        {
                            id: 3,
                            text: 'на сва возила, када у незгоди има погинулих, односно повређених лица'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 21, 
                    points: 2,
                    text: 'Након обављеног увиђаја саобраћајне незгоде, возач, односно власник возила, дужан је да:', 
                    answers: [
                        {
                            id: 1,
                            text: 'без одлагања уклони са коловоза возило, терет, ствари или други материјал расут по путу'
                        },
                        {
                            id: 2,
                            text: 'уклони возило уколико је у возном стању'
                        },
                        {
                            id: 3,
                            text: 'уклони возило са коловоза и обавести управљача пута о месту на коме се налазе ствари или други материјали расути по путу'
                        }
                    ],
                    correct_answers: [1]
                },
                {
                    id: 22, 
                    points: 2,
                    text: 'Након саобраћајне незгоде са мањом материјалном штетом учесници у саобраћајној незгоди:', 
                    answers: [
                        {
                            id: 1,
                            text: 'сачињавају изјаве'
                        },
                        {
                            id: 2,
                            text: 'попуњавају Европски извештај о саобраћајној незгоди'
                        },
                        {
                            id: 3,
                            text: 'попуњавају записник о саобраћајној незгоди'
                        },
                        {
                            id: 4,
                            text: 'обавезни су да обавесте полицију ради вршења увиђаја'
                        }
                    ],
                    correct_answers: [2]
                }
            ]
        }
    ]
});
