// get all subjects
// GET /subject
const getAllSubjects = async (req, res, next) => {
  res.send("All Subjects");
};

// create a new subject
// POST /subject/create
const createSubject = async (req, res, next) => {
  res.send("Performed all operations and subject created... ");
};

// get subject by ID
// GET /subject/:id
const getSubjectById = async (req, res, next) => {
  res.send("Single Subject gotted ");
};

export { getAllSubjects, createSubject, getSubjectById };
