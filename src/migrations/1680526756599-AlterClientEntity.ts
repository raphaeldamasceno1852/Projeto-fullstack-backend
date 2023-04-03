import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterClientEntity1680526756599 implements MigrationInterface {
    name = 'AlterClientEntity1680526756599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "deletedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "deletedAt" TIMESTAMP`);
    }

}
