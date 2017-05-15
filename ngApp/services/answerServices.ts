namespace qanda.Services {

  export class AnswerService {

    private ANSWER_RESOURCE = this.$resource('/api/v1/answers/:id');
    
    constructor(private $resource) {}

    public add(answer) {
      return this.ANSWER_RESOURCE.save(answer).$promise;
    }

    public update(answer) {
      return this.ANSWER_RESOURCE.save({id: answer._id}, answer).$promise;
    }

    public delete(id) {
      return this.ANSWER_RESOURCE.delete({id: id}).$promise;
    }
  }
  angular.module('qanda').service('answerService', AnswerService);
}
