/* global questions */

var QuestionManager = function() {
    var questionManger = {
        self: null,
        initialize: function() {
            self = this;
        },
        getQuestionsForTest: function(number_of_questions)
        {
            var result_questions = [];
            var taken_question_ids = [];
            
            for(var i=0; i<number_of_questions;)
            {
                var group_index = Math.floor((Math.random() * questions.length));
                var sub_group_index = Math.floor((Math.random() * questions[group_index].questions.length));
                var question_index = Math.floor((Math.random() * questions[group_index].questions[sub_group_index].questions.length));
                var question_key = group_index+'_'+sub_group_index+'_'+question_index;
                if($.inArray(question_key, taken_question_ids) === -1)
                {
                    taken_question_ids.push(question_key);
                    
                    shuffle(questions[group_index].questions[sub_group_index].questions[question_index].answers);
                    
                    questions[group_index].questions[sub_group_index].questions[question_index].code = question_key;
                    result_questions.push(questions[group_index].questions[sub_group_index].questions[question_index]);
                    i++;
                }
            }
//            questions[0].questions[1].questions[5].code = '0_1_5';
//            result_questions.push(questions[0].questions[1].questions[5]);

            return result_questions;
        },
        getQuestionByCode: function(code)
        {
            var code_split = code.split("_");
            var question = questions[code_split[0]].questions[code_split[1]].questions[code_split[2]];
            question.code = code;
            shuffle(question.answers);
            return question;
        }
    };
    questionManger.initialize();
    return questionManger;
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}