<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190919075534 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SEQUENCE projects_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE projects (id INT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE baseline ADD projects_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ADD CONSTRAINT FK_F619D3461EDE0F55 FOREIGN KEY (projects_id) REFERENCES projects (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_F619D3461EDE0F55 ON baseline (projects_id)');
        $this->addSql('ALTER TABLE fleets ADD projects_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE fleets ADD CONSTRAINT FK_F31645261EDE0F55 FOREIGN KEY (projects_id) REFERENCES projects (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_F31645261EDE0F55 ON fleets (projects_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE baseline DROP CONSTRAINT FK_F619D3461EDE0F55');
        $this->addSql('ALTER TABLE fleets DROP CONSTRAINT FK_F31645261EDE0F55');
        $this->addSql('DROP SEQUENCE projects_id_seq CASCADE');
        $this->addSql('DROP TABLE projects');
        $this->addSql('DROP INDEX IDX_F619D3461EDE0F55');
        $this->addSql('ALTER TABLE baseline DROP projects_id');
        $this->addSql('DROP INDEX IDX_F31645261EDE0F55');
        $this->addSql('ALTER TABLE fleets DROP projects_id');
    }
}
