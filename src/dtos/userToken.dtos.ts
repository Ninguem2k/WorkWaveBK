//DTO ou VO
import { UserToken } from "../database/entities/userToken.entity";

export interface ICreateUserTokenDTO
  extends Pick<UserToken, "refresh_token" | "expires_date" | "user_id"> {}
