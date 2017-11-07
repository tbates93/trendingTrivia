angular.module('triviaTrend').service('mainSrvc', function($http) {
    this.deleteQuestion = function(id){
        return $http.delete(' https://practiceapi.devmountain.com/api/trivia/questions/' + id).then(response => response.data)
    }
    this.addQuestion = function() {
        return $http.post('https://practiceapi.devmountain.com/api/trivia/questions').then(response => response.data)
    }
    this.editQuestion = function(id){
        return $http.put('https://practiceapi.devmountain.com/api/trivia/questions/' + id).then(response => response.data)
    }
    this.getQuestions = function(){

        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/').then(response => response)

    }
    this.getQuestionsByDiff = function(diff){
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/' + diff).then(response => response.data)
    }
})