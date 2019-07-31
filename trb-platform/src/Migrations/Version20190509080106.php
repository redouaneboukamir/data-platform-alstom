<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190509080106 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE association_equipt_ertms DROP CONSTRAINT fk_3a52f5aa806f0f5c');
        $this->addSql('DROP INDEX uniq_3a52f5aa806f0f5c');
        $this->addSql('ALTER TABLE association_equipt_ertms DROP equipement_id');
        $this->addSql('ALTER TABLE equipement ADD association_equipt_ertms_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE equipement ADD CONSTRAINT FK_B8B4C6F35E00389C FOREIGN KEY (association_equipt_ertms_id) REFERENCES association_equipt_ertms (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_B8B4C6F35E00389C ON equipement (association_equipt_ertms_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE association_equipt_ertms ADD equipement_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE association_equipt_ertms ADD CONSTRAINT fk_3a52f5aa806f0f5c FOREIGN KEY (equipement_id) REFERENCES equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX uniq_3a52f5aa806f0f5c ON association_equipt_ertms (equipement_id)');
        $this->addSql('ALTER TABLE equipement DROP CONSTRAINT FK_B8B4C6F35E00389C');
        $this->addSql('DROP INDEX IDX_B8B4C6F35E00389C');
        $this->addSql('ALTER TABLE equipement DROP association_equipt_ertms_id');
    }
}
