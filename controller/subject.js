import asyncHandler from "express-async-handler";
import Subject from "../model/subject.js";
import checkObjectId from "../middleware/checkObjectId.js";

// create a new subject with name
// POST /subject
// Protected Route - LIMITED TO ADMIN USERS
const createSubject = asyncHandler(async (req, res) => {
  const { name, grade } = req.body;

  try {
    // check if subject exists
    const subjectExist = await Subject.findOne({ name });

    if (subjectExist) {
      res.status(409).json({ error: "Conflicting Subject Name" });
      return;
    }

    // if all good - then continue in creating a new subject
    const subject = await Subject.create({ name, grade });

    // return the subject details
    if (subject) {
      res.status(201).json(subject);
    } else {
      res
        .status(400)
        .json({ error: "Bad Request, Check Internet Connection & Reload" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

const getAllSubject = asyncHandler(async (req, res) => {
  try {
    const subjects = await Subject.find();

    if (subjects) {
      res.status(200).json(subjects);
    } else {
      res.status(400).json({ error: "Bad Request/Something is wrong" });
      return;
    }
  } catch (error) {
    res.status(500).json({
      msg: "Server Error - Try Checking Your Internet Connection and Try again",
      error: error,
    });
  }
});

const getSingleSubjectDetails = asyncHandler(async (req, res) => {
  try {
    // grab ID from the request params
    const id = req.params.id;
    const subject = await Subject.findById(id);

    // check if it exist
    if (subject) {
      res.status(200).json(subject);
    } else {
      res.status(400).json({ error: "Bad / Invalid Request " });
      return;
    }
  } catch (error) {
    res.status(500).json({
      error:
        "Server Error - Try Checking Your Internet Connection and Try again",
    });
  }
});

const getSingleSubjectByName = asyncHandler(async (req, res) => {
  try {
    // grab ID from the request params
    const name = req.params.name;
    console.error(name);
    const subject = await Subject.findOne({
      name: new RegExp("^" + name + "$", "i"),
    });
    console.info(subject);
    // check if it exist
    if (subject) {
      res.status(201).json(subject);
    } else {
      res.status(400).json({ error: "Bad / Invalid Request " });
      return;
    }
  } catch (error) {
    res.status(500).json({
      error:
        "Server Error - Try Checking Your Internet Connection and Try again",
    });
  }
});

export {
  createSubject,
  getAllSubject,
  getSingleSubjectDetails,
  getSingleSubjectByName,
};
