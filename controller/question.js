// get all questions by subject
// GET /question/subjectId
const getAllQuestionsBySubjectId = async (req, res, next) => {
  res.send("All questions from the selected subject");
};

// create a new question
// POST /question/subjectId
const createNewQuestionBySubjectId = async (req, res, next) => {
  res.send("Performed all operations and subject created... ");
};

export { getAllQuestionsBySubjectId, createNewQuestionBySubjectId };
