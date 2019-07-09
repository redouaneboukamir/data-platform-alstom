<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190705105743 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('DROP SEQUENCE user_id_seq CASCADE');
        $this->addSql('CREATE TABLE equipement_type_equipement (equipement_id INT NOT NULL, type_equipement_id INT NOT NULL, PRIMARY KEY(equipement_id, type_equipement_id))');
        $this->addSql('CREATE INDEX IDX_18A07D09806F0F5C ON equipement_type_equipement (equipement_id)');
        $this->addSql('CREATE INDEX IDX_18A07D09F082B869 ON equipement_type_equipement (type_equipement_id)');
        $this->addSql('CREATE TABLE equipement_sous_type_equipement (equipement_id INT NOT NULL, sous_type_equipement_id INT NOT NULL, PRIMARY KEY(equipement_id, sous_type_equipement_id))');
        $this->addSql('CREATE INDEX IDX_E32DFFEC806F0F5C ON equipement_sous_type_equipement (equipement_id)');
        $this->addSql('CREATE INDEX IDX_E32DFFECD39AFA03 ON equipement_sous_type_equipement (sous_type_equipement_id)');
        $this->addSql('ALTER TABLE equipement_type_equipement ADD CONSTRAINT FK_18A07D09806F0F5C FOREIGN KEY (equipement_id) REFERENCES equipement (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE equipement_type_equipement ADD CONSTRAINT FK_18A07D09F082B869 FOREIGN KEY (type_equipement_id) REFERENCES type_equipement (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE equipement_sous_type_equipement ADD CONSTRAINT FK_E32DFFEC806F0F5C FOREIGN KEY (equipement_id) REFERENCES equipement (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE equipement_sous_type_equipement ADD CONSTRAINT FK_E32DFFECD39AFA03 FOREIGN KEY (sous_type_equipement_id) REFERENCES soustype_equipement (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE equipement DROP CONSTRAINT fk_b8b4c6f35e00389c');
        $this->addSql('DROP INDEX idx_b8b4c6f35e00389c');
        $this->addSql('ALTER TABLE equipement DROP association_equipt_ertms_id');
        $this->addSql('ALTER TABLE equipement DROP type');
        $this->addSql('ALTER TABLE equipement DROP sous_type');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE SEQUENCE user_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('DROP TABLE equipement_type_equipement');
        $this->addSql('DROP TABLE equipement_sous_type_equipement');
        $this->addSql('ALTER TABLE equipement ADD association_equipt_ertms_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE equipement ADD type VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE equipement ADD sous_type VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE equipement ADD CONSTRAINT fk_b8b4c6f35e00389c FOREIGN KEY (association_equipt_ertms_id) REFERENCES association_equipt_ertms (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_b8b4c6f35e00389c ON equipement (association_equipt_ertms_id)');
    }
}
