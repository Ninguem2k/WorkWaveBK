import { Router } from "express";
import multer from "multer";

import { ServicesControllers } from "../controllers/services.controllers";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";

import { multerConfig } from "../../configs/upload.config";

const servicesRoutes = Router();
const servicesControllers = new ServicesControllers();

const imageUpload = multer(multerConfig);

servicesRoutes.get(
  "/search/:searchText",
  servicesControllers.findBySearchTextWithServicesImages
);

servicesRoutes.get(
  "/user/:id",
  servicesControllers.findByUserIdWithServicesImages
);

servicesRoutes.get(
  "/:id",
  servicesControllers.findOneByIdWithServicesImagesAndUser
);

servicesRoutes.use(ensureAuthentication);

servicesRoutes.post("/", servicesControllers.create);

servicesRoutes.put("/", servicesControllers.update);

servicesRoutes.delete("/:id", servicesControllers.delete);

servicesRoutes.put(
  "/images/:id",
  imageUpload.array("images"),
  servicesControllers.createImages
);

servicesRoutes.delete("/images/:id", servicesControllers.deleteImage);

export { servicesRoutes };
