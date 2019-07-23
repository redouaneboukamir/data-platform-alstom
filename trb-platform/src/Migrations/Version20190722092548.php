<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190722092548 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SEQUENCE assoc_evc_carte_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE assoc_evc_carte (id INT NOT NULL, evc_id INT DEFAULT NULL, ertms_id INT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_21727DFB2FFA6EEA ON assoc_evc_carte (evc_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_21727DFB97455FCF ON assoc_evc_carte (ertms_id)');
        $this->addSql('ALTER TABLE assoc_evc_carte ADD CONSTRAINT FK_21727DFB2FFA6EEA FOREIGN KEY (evc_id) REFERENCES equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE assoc_evc_carte ADD CONSTRAINT FK_21727DFB97455FCF FOREIGN KEY (ertms_id) REFERENCES ertmsequipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE equipement ADD assoc_evc_carte_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE equipement ADD CONSTRAINT FK_B8B4C6F3FB4A4E8B FOREIGN KEY (assoc_evc_carte_id) REFERENCES assoc_evc_carte (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_B8B4C6F3FB4A4E8B ON equipement (assoc_evc_carte_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE equipement DROP CONSTRAINT FK_B8B4C6F3FB4A4E8B');
        $this->addSql('DROP SEQUENCE assoc_evc_carte_id_seq CASCADE');
        $this->addSql('DROP TABLE assoc_evc_carte');
        $this->addSql('DROP INDEX IDX_B8B4C6F3FB4A4E8B');
        $this->addSql('ALTER TABLE equipement DROP assoc_evc_carte_id');
    }
}
