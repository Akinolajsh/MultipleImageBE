import express from "express";
import { createMoreImages, createUser, viewUser } from "../userController";
import { upload, uploadMoreImage } from "../config/multer";

const router= express.Router();

router.route("/create").post(upload,createUser)
router.route("/create-more").post(uploadMoreImage, createMoreImages)
router.route("/view").get(viewUser)


export default router