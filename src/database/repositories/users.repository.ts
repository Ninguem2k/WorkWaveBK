import { Repository } from "typeorm";

import { IUsersRepository } from "../../interfaces/usersRepository.interface";
import { ICreateUserDTO, IUpdateUserDTO } from "../../dtos/user.dtos";

import { appDataSource } from "..";

import { User } from "../entities/user.entity";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }

  async findOneById(id: string): Promise<User | null> {
    return await this.repository.findOneBy({ id });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return await this.repository.findOneBy({ email });
  }

  async create(userDTO: ICreateUserDTO): Promise<void> {
    const user = this.repository.create(userDTO);
    await this.repository.save(user);
  }

  async update(user: User, userDTO: IUpdateUserDTO): Promise<void> {
    this.repository.merge(user, userDTO);

    await this.repository.save({ ...user });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UsersRepository };
