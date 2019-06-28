<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190401105637 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE TABLE clients_projects (clients_id INT NOT NULL, projects_id INT NOT NULL, PRIMARY KEY(clients_id, projects_id))');
        $this->addSql('CREATE INDEX IDX_CC12C595AB014612 ON clients_projects (clients_id)');
        $this->addSql('CREATE INDEX IDX_CC12C5951EDE0F55 ON clients_projects (projects_id)');
        $this->addSql('ALTER TABLE clients_projects ADD CONSTRAINT FK_CC12C595AB014612 FOREIGN KEY (clients_id) REFERENCES clients (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE clients_projects ADD CONSTRAINT FK_CC12C5951EDE0F55 FOREIGN KEY (projects_id) REFERENCES projects (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP TABLE clients_projects');
    }
}
