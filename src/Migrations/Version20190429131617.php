<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190429131617 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SEQUENCE clients_user_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE clients_user (id INT NOT NULL, email VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE clients_user_projects (clients_user_id INT NOT NULL, projects_id INT NOT NULL, PRIMARY KEY(clients_user_id, projects_id))');
        $this->addSql('CREATE INDEX IDX_FFBDC27F9905739A ON clients_user_projects (clients_user_id)');
        $this->addSql('CREATE INDEX IDX_FFBDC27F1EDE0F55 ON clients_user_projects (projects_id)');
        $this->addSql('ALTER TABLE clients_user_projects ADD CONSTRAINT FK_FFBDC27F9905739A FOREIGN KEY (clients_user_id) REFERENCES clients_user (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE clients_user_projects ADD CONSTRAINT FK_FFBDC27F1EDE0F55 FOREIGN KEY (projects_id) REFERENCES projects (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "user" ALTER email SET NOT NULL');
        $this->addSql('ALTER TABLE "user" ALTER email TYPE VARCHAR(180)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE clients_user_projects DROP CONSTRAINT FK_FFBDC27F9905739A');
        $this->addSql('DROP SEQUENCE clients_user_id_seq CASCADE');
        $this->addSql('DROP TABLE clients_user');
        $this->addSql('DROP TABLE clients_user_projects');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74');
        $this->addSql('ALTER TABLE "user" ALTER email DROP NOT NULL');
        $this->addSql('ALTER TABLE "user" ALTER email TYPE VARCHAR(255)');
    }
}
