<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190709062419 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE soustype_equipement ADD type_equipement_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE soustype_equipement ADD CONSTRAINT FK_4F4B4EDF082B869 FOREIGN KEY (type_equipement_id) REFERENCES type_equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_4F4B4EDF082B869 ON soustype_equipement (type_equipement_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE soustype_equipement DROP CONSTRAINT FK_4F4B4EDF082B869');
        $this->addSql('DROP INDEX IDX_4F4B4EDF082B869');
        $this->addSql('ALTER TABLE soustype_equipement DROP type_equipement_id');
    }
}
