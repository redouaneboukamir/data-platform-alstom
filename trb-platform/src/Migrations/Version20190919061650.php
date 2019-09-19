<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190919061650 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE engineers_projects DROP CONSTRAINT fk_6d1e71231ede0f55');
        $this->addSql('ALTER TABLE clients_projects DROP CONSTRAINT fk_cc12c5951ede0f55');
        $this->addSql('ALTER TABLE clients_user_projects DROP CONSTRAINT fk_ffbdc27f1ede0f55');
        $this->addSql('ALTER TABLE trains DROP CONSTRAINT fk_548d5bbd1ede0f55');
        $this->addSql('DROP SEQUENCE project_search_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE projects_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE fleets_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE fleet_search_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE clients_fleets (clients_id INT NOT NULL, fleets_id INT NOT NULL, PRIMARY KEY(clients_id, fleets_id))');
        $this->addSql('CREATE INDEX IDX_F6C191C1AB014612 ON clients_fleets (clients_id)');
        $this->addSql('CREATE INDEX IDX_F6C191C1235BF180 ON clients_fleets (fleets_id)');
        $this->addSql('CREATE TABLE engineers_fleets (engineers_id INT NOT NULL, fleets_id INT NOT NULL, PRIMARY KEY(engineers_id, fleets_id))');
        $this->addSql('CREATE INDEX IDX_DC75F9AE2D33A762 ON engineers_fleets (engineers_id)');
        $this->addSql('CREATE INDEX IDX_DC75F9AE235BF180 ON engineers_fleets (fleets_id)');
        $this->addSql('CREATE TABLE fleets (id INT NOT NULL, filename VARCHAR(255) DEFAULT NULL, name VARCHAR(255) NOT NULL, number_trains INT DEFAULT NULL, available BOOLEAN DEFAULT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE clients_user_fleets (clients_user_id INT NOT NULL, fleets_id INT NOT NULL, PRIMARY KEY(clients_user_id, fleets_id))');
        $this->addSql('CREATE INDEX IDX_5037BCEA9905739A ON clients_user_fleets (clients_user_id)');
        $this->addSql('CREATE INDEX IDX_5037BCEA235BF180 ON clients_user_fleets (fleets_id)');
        $this->addSql('CREATE TABLE fleet_search (id INT NOT NULL, name_project VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE clients_fleets ADD CONSTRAINT FK_F6C191C1AB014612 FOREIGN KEY (clients_id) REFERENCES clients (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE clients_fleets ADD CONSTRAINT FK_F6C191C1235BF180 FOREIGN KEY (fleets_id) REFERENCES fleets (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE engineers_fleets ADD CONSTRAINT FK_DC75F9AE2D33A762 FOREIGN KEY (engineers_id) REFERENCES engineers (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE engineers_fleets ADD CONSTRAINT FK_DC75F9AE235BF180 FOREIGN KEY (fleets_id) REFERENCES fleets (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE clients_user_fleets ADD CONSTRAINT FK_5037BCEA9905739A FOREIGN KEY (clients_user_id) REFERENCES clients_user (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE clients_user_fleets ADD CONSTRAINT FK_5037BCEA235BF180 FOREIGN KEY (fleets_id) REFERENCES fleets (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE engineers_projects');
        $this->addSql('DROP TABLE clients_projects');
        $this->addSql('DROP TABLE clients_user_projects');
        $this->addSql('DROP TABLE project_search');
        $this->addSql('DROP TABLE projects');
        $this->addSql('DROP INDEX idx_548d5bbd1ede0f55');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE clients_fleets DROP CONSTRAINT FK_F6C191C1235BF180');
        $this->addSql('ALTER TABLE engineers_fleets DROP CONSTRAINT FK_DC75F9AE235BF180');
        $this->addSql('ALTER TABLE trains DROP CONSTRAINT FK_548D5BBD235BF180');
        $this->addSql('ALTER TABLE clients_user_fleets DROP CONSTRAINT FK_5037BCEA235BF180');
        $this->addSql('DROP SEQUENCE fleets_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE fleet_search_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE project_search_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE projects_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE engineers_projects (engineers_id INT NOT NULL, projects_id INT NOT NULL, PRIMARY KEY(engineers_id, projects_id))');
        $this->addSql('CREATE INDEX idx_6d1e71231ede0f55 ON engineers_projects (projects_id)');
        $this->addSql('CREATE INDEX idx_6d1e71232d33a762 ON engineers_projects (engineers_id)');
        $this->addSql('CREATE TABLE clients_projects (clients_id INT NOT NULL, projects_id INT NOT NULL, PRIMARY KEY(clients_id, projects_id))');
        $this->addSql('CREATE INDEX idx_cc12c595ab014612 ON clients_projects (clients_id)');
        $this->addSql('CREATE INDEX idx_cc12c5951ede0f55 ON clients_projects (projects_id)');
        $this->addSql('CREATE TABLE clients_user_projects (clients_user_id INT NOT NULL, projects_id INT NOT NULL, PRIMARY KEY(clients_user_id, projects_id))');
        $this->addSql('CREATE INDEX idx_ffbdc27f1ede0f55 ON clients_user_projects (projects_id)');
        $this->addSql('CREATE INDEX idx_ffbdc27f9905739a ON clients_user_projects (clients_user_id)');
        $this->addSql('CREATE TABLE project_search (id INT NOT NULL, name_project VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE projects (id INT NOT NULL, name VARCHAR(255) NOT NULL, number_trains INT DEFAULT NULL, available BOOLEAN DEFAULT NULL, filename VARCHAR(255) DEFAULT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE engineers_projects ADD CONSTRAINT fk_6d1e71231ede0f55 FOREIGN KEY (projects_id) REFERENCES projects (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE engineers_projects ADD CONSTRAINT fk_6d1e71232d33a762 FOREIGN KEY (engineers_id) REFERENCES engineers (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE clients_projects ADD CONSTRAINT fk_cc12c5951ede0f55 FOREIGN KEY (projects_id) REFERENCES projects (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE clients_projects ADD CONSTRAINT fk_cc12c595ab014612 FOREIGN KEY (clients_id) REFERENCES clients (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE clients_user_projects ADD CONSTRAINT fk_ffbdc27f1ede0f55 FOREIGN KEY (projects_id) REFERENCES projects (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE clients_user_projects ADD CONSTRAINT fk_ffbdc27f9905739a FOREIGN KEY (clients_user_id) REFERENCES clients_user (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE clients_fleets');
        $this->addSql('DROP TABLE engineers_fleets');
        $this->addSql('DROP TABLE fleets');
        $this->addSql('DROP TABLE clients_user_fleets');
        $this->addSql('DROP TABLE fleet_search');
        $this->addSql('DROP INDEX IDX_548D5BBD235BF180');
        $this->addSql('ALTER TABLE trains RENAME COLUMN fleets_id TO projects_id');
        $this->addSql('ALTER TABLE trains ADD CONSTRAINT fk_548d5bbd1ede0f55 FOREIGN KEY (projects_id) REFERENCES projects (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_548d5bbd1ede0f55 ON trains (projects_id)');
    }
}
