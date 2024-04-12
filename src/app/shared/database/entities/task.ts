import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserEntitiy } from "./user.entities";

@Entity({ name: "task" })
export class TaskEntitiy {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column({
    type: "uuid",
    name: "id_usuario",
  })
  idUser: string;

  @ManyToOne(() => UserEntitiy)
  @JoinColumn({
    name: "id_User",
  })
  user: UserEntitiy;

  @CreateDateColumn({
    name: "at_created",
  })
  atCreate: Date;

  @UpdateDateColumn({
    name: "at_update",
  })
  atUpdate: Date;
}
