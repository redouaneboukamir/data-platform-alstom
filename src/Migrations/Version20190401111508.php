<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190401111508 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE TABLE engineers_projects (engineers_id INT NOT NULL, projects_id INT NOT NULL, PRIMARY KEY(engineers_id, projects_id))');
        $this->addSql('CREATE INDEX IDX_6D1E71232D33A762 ON engineers_projects (engineers_id)');
        $this->addSql('CREATE INDEX IDX_6D1E71231EDE0F55 ON engineers_projects (projects_id)');
        $this->addSql('ALTER TABLE engineers_projects ADD CONSTRAINT FK_6D1E71232D33A762 FOREIGN KEY (engineers_id) REFERENCES engineers (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE engineers_projects ADD CONSTRAINT FK_6D1E71231EDE0F55 FOREIGN KEY (projects_id) REFERENCES projects (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP TABLE engineers_projects');
    }
}
