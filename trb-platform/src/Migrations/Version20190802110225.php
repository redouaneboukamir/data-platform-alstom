<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190802110225 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE baseline ADD equipment_ertms_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ADD config_logiciel_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ADD version_logiciel_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ADD date TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ADD status BOOLEAN DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ADD original BOOLEAN DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ADD CONSTRAINT FK_F619D346A786DBE9 FOREIGN KEY (equipment_ertms_id) REFERENCES association_equipt_ertms (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE baseline ADD CONSTRAINT FK_F619D34618D1953A FOREIGN KEY (config_logiciel_id) REFERENCES config_logiciel (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE baseline ADD CONSTRAINT FK_F619D3468FF141D3 FOREIGN KEY (version_logiciel_id) REFERENCES version_logiciel (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_F619D346A786DBE9 ON baseline (equipment_ertms_id)');
        $this->addSql('CREATE INDEX IDX_F619D34618D1953A ON baseline (config_logiciel_id)');
        $this->addSql('CREATE INDEX IDX_F619D3468FF141D3 ON baseline (version_logiciel_id)');
        $this->addSql('ALTER TABLE config_logiciel ADD plug VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE config_logiciel RENAME COLUMN identif_plug TO name');
        $this->addSql('ALTER TABLE version_logiciel ADD date TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE config_logiciel ADD identif_plug VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE config_logiciel DROP name');
        $this->addSql('ALTER TABLE config_logiciel DROP plug');
        $this->addSql('ALTER TABLE baseline DROP CONSTRAINT FK_F619D346A786DBE9');
        $this->addSql('ALTER TABLE baseline DROP CONSTRAINT FK_F619D34618D1953A');
        $this->addSql('ALTER TABLE baseline DROP CONSTRAINT FK_F619D3468FF141D3');
        $this->addSql('DROP INDEX IDX_F619D346A786DBE9');
        $this->addSql('DROP INDEX IDX_F619D34618D1953A');
        $this->addSql('DROP INDEX IDX_F619D3468FF141D3');
        $this->addSql('ALTER TABLE baseline DROP equipment_ertms_id');
        $this->addSql('ALTER TABLE baseline DROP config_logiciel_id');
        $this->addSql('ALTER TABLE baseline DROP version_logiciel_id');
        $this->addSql('ALTER TABLE baseline DROP date');
        $this->addSql('ALTER TABLE baseline DROP status');
        $this->addSql('ALTER TABLE baseline DROP original');
        $this->addSql('ALTER TABLE version_logiciel DROP date');
    }
}
