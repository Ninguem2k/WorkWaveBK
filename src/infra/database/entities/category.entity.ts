import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Service } from "./service.entity";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  description?: string;

  @Column({ type: "varchar", nullable: true })
  icon?: string | null;

  @Column({ type: "varchar", nullable: true })
  icon_url?: string | null;

  @CreateDateColumn()
  created_at!: Date;

  //relationship with other classes

  @OneToMany(() => Service, (service) => service.user)
  services?: Service[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
