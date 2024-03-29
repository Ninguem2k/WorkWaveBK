import { ICreateServiceDTO, IUpdateServiceDTO } from "../dtos/service.dtos";

import { Service } from "../database/entities/service.entity";
import { ServiceOrderOptions } from "../enums/order.enum";

export interface IServicesRepository {
  findOneById(id: string): Promise<Service | null>;
  findOneByIdWithServicesImagesAndUser(id: string): Promise<Service | null>;
  findByUserIdWithServicesImages(
    id: string,
    skip: number,
    take: number,
    order: ServiceOrderOptions
  ): Promise<Service[] | null>;
  findByCategoryIdWithServicesImages(
    id: string,
    skip: number,
    take: number,
    order: ServiceOrderOptions,
    cep?: string
  ): Promise<Service[] | null>;
  findBySearchTextWithServicesImages(
    searchText: string,
    skip: number,
    take: number,
    order: ServiceOrderOptions,
    cep?: string
  ): Promise<Service[] | null>;
  create({}: ICreateServiceDTO): Promise<void>;
  update(service: Service, serviceDTO: IUpdateServiceDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
