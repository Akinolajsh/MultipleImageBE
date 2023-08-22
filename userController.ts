import { Request, Response } from "express";
import userModel from "./model/userModel";
import cloudinary from "./config/cloudinary";

export const createUser = async (req: any, res: Response) => {
  try {
    const { userName } = req.body;
    const { secure_url, public_id } = await cloudinary.uploader.upload(
      req.file?.path
    );
    const user = await userModel.create({
      userName,
      pix: secure_url,
    });

    return res.status(201).json({
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
};

export const viewUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();
    return res.status(200).json({
      message: "user view successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
};

export const createMoreImages = async (req: any, res: Response) => {
  try {
    const { userID } = req.params;
    const { userName } = req.body;

    let data = req.files;
    let pixes: Array<String> = [];
    for (let i of data) {
      const { secure_url } = await cloudinary.uploader.upload(i.path);

      pixes.push(secure_url);
    }

    const user = await userModel.create({
      userName,
      pixes,
    });

    return res.status(201).json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
};
