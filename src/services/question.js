import axios from 'axios';

class QuestionService {
  static fetchQuestions() {
    return axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
  }
}

export default QuestionService;