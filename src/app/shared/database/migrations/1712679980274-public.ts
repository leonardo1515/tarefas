import { MigrationInterface, QueryRunner } from "typeorm";

export class public1712679980274 implements MigrationInterface {
    name = 'public1712679980274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "at_created" TIMESTAMP NOT NULL DEFAULT now(), "at_update" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "startDate" character varying NOT NULL, "endDate" character varying NOT NULL, "id_usuario" uuid NOT NULL, "at_created" TIMESTAMP NOT NULL DEFAULT now(), "at_update" TIMESTAMP NOT NULL DEFAULT now(), "id_User" uuid, CONSTRAINT "UQ_74cd41df347e221313c8da47c72" UNIQUE ("description"), CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_f697c0f23512a053a747543572e" FOREIGN KEY ("id_User") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_f697c0f23512a053a747543572e"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
