angular.module('triviaTrend').controller('mainCtrl', function ($scope, mainSrvc, $http) {
    mainSrvc.getQuestions().then(response => {
        $scope.questions = response.data;
        console.log($scope.questions)
    })

    $scope.getQuestionsAll = function () {
        $http.get('https://practiceapi.devmountain.com/api/trivia/questions/').then(response => $scope.questions = response.data)
    }

    $scope.testQuestion = function (a, ca) {
        console.log('answer: ', a + 1, 'correct answer: ', ca)
        if (a+1 === ca){
            $scope.correct = "green" 
        }
        else {
            $scope.correct = "red" 
        }
    }

    $scope.filterByDiff = function (diff) {
        // mainSrvc.getQuestionsByDiff(diff).then(response => {
        //     $scope.questions = response.data
        // })

        $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/' + diff).then(response => $scope.questions = response.data)
    }

    $scope.addQuestion = function (newQ) {
        let q = {
            question: newQ.Question,
            animal: newQ.Animal,
            difficulty: newQ.Difficulty,
            options: {
                1: newQ.option1,
                2: newQ.option2,
                3: newQ.option3,
                4: newQ.option4,
            },
            correct_answer: newQ.answer
        }



        //$http.post('https://practiceapi.devmountain.com/api/trivia/questions', q).then(res => $scope.question = res.data)

        console.log(newQ)
    }

    $scope.updateQuestion = function (id, q, index) {
        let question = {

            "difficulty": q.difficulty,
            "question": q.question,
            "animal": q.animal,
            "correct_answer": q.correct_answer,
            "__v": 0,
            "date_entered": q.date_entered,
            "options": {
                "1": q.options[1],
                "2": q.options[2],
                "3": q.options[3],
                "4": q.options[4]
            }
        }
        $http.put('https://practiceapi.devmountain.com/api/trivia/questions/' + id, question, index).then(response => {
            $scope.questions[index] = response.data
        })
    }

    $scope.deleteQuestion = function(id){
        $http.delete(' https://practiceapi.devmountain.com/api/trivia/questions/' + id).then(response => {
            
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/').then(response => $scope.questions = response.data)    

        })
    }
})