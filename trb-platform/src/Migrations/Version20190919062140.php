<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190919062140 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE trains RENAME COLUMN projects_id TO fleets_id');
        $this->addSql('ALTER TABLE trains ADD CONSTRAINT FK_548D5BBD235BF180 FOREIGN KEY (fleets_id) REFERENCES fleets (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_548D5BBD235BF180 ON trains (fleets_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE trains DROP CONSTRAINT FK_548D5BBD235BF180');
        $this->addSql('DROP INDEX IDX_548D5BBD235BF180');
        $this->addSql('ALTER TABLE trains RENAME COLUMN fleets_id TO projects_id');
    }
}
