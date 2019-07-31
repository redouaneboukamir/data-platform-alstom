<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190509074456 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SEQUENCE association_evcconfig_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE association_evcconfig (id INT NOT NULL, evc_id_id INT DEFAULT NULL, config_id_id INT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E13399806422CD42 ON association_evcconfig (evc_id_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E1339980C269CC17 ON association_evcconfig (config_id_id)');
        $this->addSql('ALTER TABLE association_evcconfig ADD CONSTRAINT FK_E13399806422CD42 FOREIGN KEY (evc_id_id) REFERENCES equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE association_evcconfig ADD CONSTRAINT FK_E1339980C269CC17 FOREIGN KEY (config_id_id) REFERENCES equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE association_evcconfig_id_seq CASCADE');
        $this->addSql('DROP TABLE association_evcconfig');
    }
}
