<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190503124802 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SEQUENCE association_baseline_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE association_baseline (id INT NOT NULL, baseline_id INT DEFAULT NULL, version_logiciel_id INT DEFAULT NULL, config_logiciel_id INT DEFAULT NULL, ertms_id INT DEFAULT NULL, status BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C0D4CB20DC280AA8 ON association_baseline (baseline_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C0D4CB208FF141D3 ON association_baseline (version_logiciel_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C0D4CB2018D1953A ON association_baseline (config_logiciel_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C0D4CB2097455FCF ON association_baseline (ertms_id)');
        $this->addSql('ALTER TABLE association_baseline ADD CONSTRAINT FK_C0D4CB20DC280AA8 FOREIGN KEY (baseline_id) REFERENCES baseline (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE association_baseline ADD CONSTRAINT FK_C0D4CB208FF141D3 FOREIGN KEY (version_logiciel_id) REFERENCES version_logiciel (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE association_baseline ADD CONSTRAINT FK_C0D4CB2018D1953A FOREIGN KEY (config_logiciel_id) REFERENCES config_logiciel (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE association_baseline ADD CONSTRAINT FK_C0D4CB2097455FCF FOREIGN KEY (ertms_id) REFERENCES ertmsequipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE association_baseline_id_seq CASCADE');
        $this->addSql('DROP TABLE association_baseline');
    }
}
