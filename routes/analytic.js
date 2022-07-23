const router = require('express').Router()
const auth = require('../middlewares/auth')

const { catchErrors } = require('../handlers/errorHandler')
const analyticController = require('../controllers/analyticController')

// router.get("/:portfolio_id", catchErrors(analyticController.getAll))
// router.delete("/:analytic_id", catchErrors(analyticController.delete))

router.post("/questions", auth, catchErrors(analyticController.fetch))
router.get("/getmarks", catchErrors(analyticController.getmarks))
router.get("/getallqstns", catchErrors(analyticController.getallqstns))
router.post("/getcandidateqstnmarks", catchErrors(analyticController.getcandidateqstnmarks))
router.get("/printcanquestions/:candidate_id", catchErrors(analyticController.printcanquestions))
router.post("/insertcandidate", auth, catchErrors(analyticController.insertcandidate))
router.post("/mail", catchErrors(analyticController.mail))
router.post("/start_test", auth, catchErrors(analyticController.starttest))
router.post("/answer_test", auth, catchErrors(analyticController.answertest))
router.delete("/deletecan", auth, catchErrors(analyticController.deletecan))
router.post("/insertqstn", auth, catchErrors(analyticController.insertqstn))
router.put("/editqstn/:question_id", auth, catchErrors(analyticController.editqstn))
router.delete("/deleteqstn/:question_id", auth, catchErrors(analyticController.deleteqstn))
router.delete("/deletecategory/:category_id", auth, catchErrors(analyticController.deletecategory))
router.put("/editcategory/:category_id", auth, catchErrors(analyticController.editcategory))
router.delete("/deleteresults/:candidate_id", auth, catchErrors(analyticController.deleteresults))

module.exports = router
