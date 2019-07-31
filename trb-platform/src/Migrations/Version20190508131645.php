<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190508131645 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SEQUENCE association_equipt_ertms_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE equipement_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE association_equipt_ertms (id INT NOT NULL, solution_id INT DEFAULT NULL, equipement_id INT DEFAULT NULL, status BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3A52F5AA1C0BE183 ON association_equipt_ertms (solution_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3A52F5AA806F0F5C ON association_equipt_ertms (equipement_id)');
        $this->addSql('CREATE TABLE equipement (id INT NOT NULL, type VARCHAR(255) NOT NULL, sous_type VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE association_equipt_ertms ADD CONSTRAINT FK_3A52F5AA1C0BE183 FOREIGN KEY (solution_id) REFERENCES ertmsequipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE association_equipt_ertms ADD CONSTRAINT FK_3A52F5AA806F0F5C FOREIGN KEY (equipement_id) REFERENCES equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE association_equipt_ertms DROP CONSTRAINT FK_3A52F5AA806F0F5C');
        $this->addSql('DROP SEQUENCE association_equipt_ertms_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE equipement_id_seq CASCADE');
        $this->addSql('DROP TABLE association_equipt_ertms');
        $this->addSql('DROP TABLE equipement');
    }
}
