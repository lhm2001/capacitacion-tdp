import {Router} from "express";
import {methods as languageController} from './../controllers/language.controller.js';

const router=Router();

router.get("/", languageController.getLanguages);
router.post("/", languageController.createLanguage);
router.get("/:id", languageController.getLanguage);
router.delete("/:id", languageController.deleteLanguage);
router.put("/:id", languageController.updateLanguage);

export default router;