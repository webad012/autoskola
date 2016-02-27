/* global LocalStorage, ddtreemenu */

var Controller = function () {

    var questionManager = new QuestionManager();

    var controller = {
        self: null,
        quiz_number_of_questions: 41,
//        quiz_number_of_questions: 5,
        quiz_questions: null,
        quiz_progress: null,
        quiz_result: null,
        marked_question_codes: [],
        radios: [],
        initialize: function () {
            self = this;
            
            local_marked_question_codes = LocalStorage.getData('marked_question_codes');
            if( local_marked_question_codes !== null && local_marked_question_codes.length !== 0)
            {
                self.marked_question_codes = JSON.parse(local_marked_question_codes);
            }
            
            self.renderMainMenu();
        },
        
        renderMainMenu: function()
        {
            var $tab = $('#tab-content');
            $tab.empty();
            
            $("#tab-content").load("./views/mainmenu.html", function (data) {
                window.scrollTo(0, 0);
                
                quiz_questions = questionManager.getQuestionsForTest(self.quiz_number_of_questions);
                quiz_progress = 0;
                quiz_result = 100;
                
                $('#start_test').on('click', self.renderTest);
                $('#marked_questions').on('click', self.renderMarkedQuestions);
                $('#about').on('click', self.renderAbout);
            });
        },
        
        renderAbout: function()
        {
            var $tab = $('#tab-content');
            $tab.empty();
            
            $("#tab-content").load("./views/about.html", function (data) {
                window.scrollTo(0, 0);
                $('#back_button').on('click', self.renderMainMenu);
                
                var fully_covered_sections = questionManager.getFullyCoveredSections();
                var added_sections_main_ul = $('#added_sections_main_ul');
                for(var i=0; i<fully_covered_sections.length; i++)
                {
                    var section_li = $('<li>'+fully_covered_sections[i].name+'</li>');
                    var subsection_ul = $('<ul></ul>');
                    for(var j=0; j<fully_covered_sections[i].subsections.length; j++)
                    {
                        var subsection_li = $('<li>'+fully_covered_sections[i].subsections[j].name+'</li>');
                        subsection_ul.append(subsection_li);
                    }
                    section_li.append(subsection_ul);
                    added_sections_main_ul.append(section_li);
                }
                
                ddtreemenu.createTree("added_sections");
            });
        },
        
        renderMarkedQuestions: function()
        {
            var $tab = $('#tab-content');
            $tab.empty();
            
            $("#tab-content").load("./views/marked_questions.html", function (data) {
                window.scrollTo(0, 0);
                $('#back_button').on('click', self.renderMainMenu);
                
                quiz_questions = [];
                var div_to_append_to = $('#questions');
                for(var i=0; i<self.marked_question_codes.length; i++)
                {
                    div_to_append_to.append(
                        '<button class="question-button blue-button">'
                            +self.marked_question_codes[i]
                        +'</button>'
                    );
            
                    var question = questionManager.getQuestionByCode(self.marked_question_codes[i]);
                    quiz_questions.push(question);
                }
                
                $('.question-button').on('click', self.renderSimpleQuestion);
                
                quiz_progress = 0;
                quiz_result = 100;
                $('#start_test').on('click', self.renderTest);
            });
        },
        
        renderSimpleQuestion: function()
        {
            var question_code = $(this).text();
            var question = questionManager.getQuestionByCode(question_code);
            var $tab = $('#tab-content');
            $tab.empty();
            
            $("#tab-content").load("./views/simple_question.html", function (data) {
                window.scrollTo(0, 0);
                $('#back_button').on('click', self.renderMarkedQuestions);
                
                $('#question_code').text('Шифра: '+question_code);
                var question_div = $("#question");
                question_div.find('#text').text(question.text);
                if (typeof question.image !== 'undefined' && question.image !== null)
                {
                    question_div.find('#image').append("<img src='" + question.image + "'/>");
                }
                
                var input_type = 'radio';
                if (question.correct_answers.length > 1)
                {
                    $('#answers_number').text('Број потребних одговора: ' + question.correct_answers.length);
                    input_type = 'checkbox';
                }

                for (var i = 0; i < question.answers.length; i++)
                {
                    var checkbox = $('<label class="input-label"><input id="answer_' + i + '" name="answer_' + i + '" type="' + input_type + '" value="' + question.answers[i].id + '" />' + question.answers[i].text + '</label>');
                    checkbox.css("background","#c23b22");
                    checkbox.css("color","white");
                    checkbox.css("text-shadow","-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black");
                    for(var j=0; j<question.correct_answers.length; j++)
                    {
                        if(parseInt(question.answers[i].id) === question.correct_answers[j])
                        {
                            checkbox.css("background","#4e8b61");
                            break;
                        }
                    }
                    
                    $('#answers').append(checkbox);
                }
                $('[type=checkbox]').checkboxradio().trigger('create');
                $('#answers').controlgroup().trigger('create');
                
                if($(window).width() >= 501)
                {
                    $(".input-label").css("fontSize", "25px");
                }
                
                $('#mark_question_input').change(function() {
                    var position = self.marked_question_codes.indexOf(question_code);
                    if($('#mark_question_input').is(":checked")) 
                    {
                        self.marked_question_codes.push(question_code);
                    }
                    else
                    {                
                        self.marked_question_codes.splice(position, 1);
                    }
                    LocalStorage.setData('marked_question_codes', JSON.stringify(self.marked_question_codes));
                });
            });
        },
        
        renderTest: function ()
        {
            var $tab = $('#tab-content');
            $tab.empty();

            $("#tab-content").load("./views/exam/exam.html", function (data) {
                self.renderQuestion();
                $('#submit').on('click', self.onSubmitAnswer);
                $('#next_button').on('click', function(){
                    self.goToNextQuestion();
                });
                $('#back_button').on('click', function(){
                    navigator.notification.confirm(
                        'Да ли сте сигурни да желите да прекинете тренутни тест?',  // message
                        function(buttonIndex){  // callback to invoke with index of button pressed
                            if(buttonIndex === 1)
                            {
                                self.renderMainMenu();
                            }
                        },
                        'Назад',                 // title
                        ['Да','Не']            // buttonLabels
                    );
                });
                $('#mark_question_input').change(function() {
                    self.onMarkQuestionInputChange();
                });
            });
        },
        
        renderQuestion: function ()
        {            
            if (quiz_questions.length > quiz_progress)
            {
                $('#submit').show();
                $('#next_button').hide();
                
                $("#question").load("./views/exam/question.html", function (data) {
                    window.scrollTo(0, 0);
                    var question = quiz_questions[quiz_progress];
                    
                    if($.inArray(question.code, self.marked_question_codes) !== -1)
                    {
                        $('#mark_question_input').prop("checked", true);
                        $('#mark_question_input').checkboxradio().trigger('create');
                        $('#mark_question').controlgroup().trigger('create');
                    }
                    else
                    {
                        $('#mark_question_input').prop("checked", false);
                        $('#mark_question_input').checkboxradio().trigger('create');
                        $('#mark_question').controlgroup().trigger('create');
                        
                    }

                    var question_div = $("#question");

                    question_div.find('#question_number').text('Питање: '+(quiz_progress + 1) + "/"+quiz_questions.length);
                    question_div.find('#question_code').text('Шифра: '+question.code);
                    question_div.find('#text').text(question.text);
                    if (typeof question.image !== 'undefined' && question.image !== null)
                    {
                        question_div.find('#image').append("<img src='" + question.image + "'/>");
                    }

                    var input_type = 'radio';
                    if (question.correct_answers.length > 1)
                    {
                        $('#answers_number').text('Број потребних одговора: ' + question.correct_answers.length);
                        input_type = 'checkbox';
                    }

                    for (var i = 0; i < question.answers.length; i++)
                    {
                        var checkbox = $('<label class="input-label"><input id="answer_' + i + '" name="answer_' + i + '" type="' + input_type + '" value="' + question.answers[i].id + '" />' + question.answers[i].text + '</label>');
                        $('#answers').append(checkbox);
                    }
                    $('[type=checkbox]').checkboxradio().trigger('create');
                    $('#answers').controlgroup().trigger('create');
                    
                    if($(window).width() >= 501)
                    {
                        $(".input-label").css("fontSize", "25px");
                    }

                    $('input').on('change', function(){
                        if($(this).attr('type') === 'radio')
                        {
                            var old_checked = $(this).prop('checked');
                            if(old_checked === true)
                            {
                                $('input').prop("checked", false);
                                $(this).prop('checked', true);
                                $('[type=checkbox]').checkboxradio().trigger('create');
                                $('#answers').controlgroup().trigger('create');
                            }
                        }
                    });
                });
            }
            else
            {
                $("#tab-content").load("./views/exam/result.html", function () {
                    window.scrollTo(0, 0);
                    var text_message = 'Нисте положили';
                    if(quiz_result >= 85)
                    {
                         text_message = 'Положили сте';
                    }
                    text_message += '</br>'+quiz_result+'/100';
                    
                    $('#exam_result_message').html(text_message);
                    
                    $('#back_button').on('click', function(){
                        self.renderMainMenu();
                    });
                });
            }
        },
        
        onSubmitAnswer: function (event)
        {
//            event.stopPropagation();
            
            var question = quiz_questions[quiz_progress];

            /// proveri da li je tacan odgovor
            /// ako nije tacan prikazi prozor da je netacan odgovor
            /// ako je tacan nastavi dalje

            var answers = $('#answers').find('input:checked');
            var answer_correct = false;
            if (answers.length > 0 && question.correct_answers.length === answers.length)
            {
                if (question.correct_answers.length > 1)
                {
                    var answer_ids = [];
                    for (var i = 0; i < answers.length; i++)
                    {
                        answer_ids.push(parseInt($(answers[i]).val()));
                    }
                    if ($(question.correct_answers).not(answer_ids).length === 0
                            && $(answer_ids).not(question.correct_answers).length === 0)
                    {
                        answer_correct = true;
                    }
                }
                else if (parseInt(answers.val()) === parseInt(question.correct_answers[0]))
                {
                    answer_correct = true;
                }
            }
            
            if (answer_correct === true)
            {
                self.goToNextQuestion();
            }
            else
            {
                $('#submit').hide();
                $('#next_button').show();
                
                var all_answers = $('#answers').find('input');
                for (var i = 0; i < all_answers.length; i++)
                {
                    $(all_answers[i]).siblings().css("background","#c23b22");
                    $(all_answers[i]).siblings().css("color","white");
                    $(all_answers[i]).siblings().css("text-shadow","-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black");
                    
                    var found = false;
                    for(var j=0; j<question.correct_answers.length; j++)
                    {
                        if(parseInt($(all_answers[i]).val()) === question.correct_answers[j])
                        {
                            found = true;
                            break;
                        }
                    }
                    if(found === true)
                    {
                        $(all_answers[i]).siblings().css("background","#4e8b61");
                    }
                }
                
                quiz_result -= question.points;
                navigator.notification.alert(
                        'Одговор није тачан', // message
                        function (buttonIndex) { // callback
//                            self.goToNextQuestion();
                        },
                        "Аутошкола", // title
                        'OK'        // buttonName
                        );
            }
        },
        
        goToNextQuestion: function()
        {
            quiz_progress++;
            self.renderQuestion();
        },
        
        onMarkQuestionInputChange: function()
        {
            var question_code = quiz_questions[quiz_progress].code;
//            var question_code = $('#question_code');
//            console.log($('#question_code').text());
            var position = self.marked_question_codes.indexOf(question_code);
            
            if($('#mark_question_input').is(":checked")) 
            {
                if (!~position) {
                    self.marked_question_codes.push(question_code);
                }
            }
            else
            {                
                self.marked_question_codes.splice(position, 1);
            }
            
            LocalStorage.setData('marked_question_codes', JSON.stringify(self.marked_question_codes));
        }
    };
    controller.initialize();
    return controller;
};
