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
                var group = questions[group_index];
                var sub_group_index = Math.floor((Math.random() * group.questions.length));
                var subgroup = group.questions[sub_group_index];
                var question_index = Math.floor((Math.random() * subgroup.questions.length));
                var question = questions[group_index].questions[sub_group_index].questions[question_index];
                var question_key = group.id+'_'+subgroup.id+'_'+question.id;
                if($.inArray(question_key, taken_question_ids) === -1)
                {
//                    if(group.id === 7 && subgroup.id === 0)
//                    {
//                        console.log('yes');
//                    }
                    taken_question_ids.push(question_key);
                    if(typeof question.similar_questions_ids !== 'undefined')
                    {
                        for(var j=0; j<question.similar_questions_ids.length; j++)
                        {
                            var similar_key = group.id+'_'+subgroup.id+'_'+question.similar_questions_ids[j];
                            taken_question_ids.push(similar_key);
                        }
                    }
                    
                    shuffle(question.answers);
                    question.code = question_key;
                    
                    result_questions.push(question);
                    i++;
                }
            }
            
//            console.log(taken_question_ids);

            return result_questions;
        },
        getQuestionByCode: function(code)
        {
            var code_split = code.split("_");
            for(var i=0; i<questions.length; i++)
            {
                var group = questions[i];
                if(parseInt(group.id) === parseInt(code_split[0]))
                {
                    for(var j=0; j<group.questions.length; j++)
                    {
                        var subgroup = group.questions[j];
                        if(parseInt(subgroup.id) === parseInt(code_split[1]))
                        {
                            var subgroup_questions = subgroup.questions;
                            for(var n=0; n<subgroup_questions.length; n++)
                            {
                                var question = subgroup_questions[n];
                                if(parseInt(question.id) === parseInt(code_split[2]))
                                {
                                    question.code = code;
                                    shuffle(question.answers);
                                    return question;
                                }
                            }
                        }
                    }
                }
            }
            return null;
//            var question = questions[code_split[0]].questions[code_split[1]].questions[code_split[2]];
//            question.code = code;
//            shuffle(question.answers);
//            return question;
        },
        getFullyCoveredSections: function()
        {
            var result = [];
            
            for(var i=0; i<questions.length; i++)
            {
                var fully_covered_subsections = [];
                
                for(var j=0; j<questions[i].questions.length; j++)
                {
                    if(questions[i].questions[j].questions.length === questions[i].questions[j].total_number_of_questions)
                    {
                        fully_covered_subsections.push({
                            name: questions[i].questions[j].name,
                            index: j
                        });
                    }
                }
                                
                if(fully_covered_subsections.length > 0)
                {
                    result.push({
                        name: questions[i].name,
                        index: i,
                        subsections: fully_covered_subsections
                    });
                }
            }
            
            return result;
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