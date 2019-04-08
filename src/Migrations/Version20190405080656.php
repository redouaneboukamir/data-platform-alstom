<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190405080656 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE trains DROP CONSTRAINT fk_548d5bbd166d1f9c');
        $this->addSql('DROP INDEX idx_548d5bbd166d1f9c');
        $this->addSql('ALTER TABLE trains RENAME COLUMN project_id TO projects_id');
        $this->addSql('ALTER TABLE trains ADD CONSTRAINT FK_548D5BBD1EDE0F55 FOREIGN KEY (projects_id) REFERENCES projects (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_548D5BBD1EDE0F55 ON trains (projects_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE trains DROP CONSTRAINT FK_548D5BBD1EDE0F55');
        $this->addSql('DROP INDEX IDX_548D5BBD1EDE0F55');
        $this->addSql('ALTER TABLE trains RENAME COLUMN projects_id TO project_id');
        $this->addSql('ALTER TABLE trains ADD CONSTRAINT fk_548d5bbd166d1f9c FOREIGN KEY (project_id) REFERENCES projects (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_548d5bbd166d1f9c ON trains (project_id)');
    }
}
