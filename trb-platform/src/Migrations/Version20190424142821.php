<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190424142821 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE trains ADD evc_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE trains ADD CONSTRAINT FK_548D5BBD2FFA6EEA FOREIGN KEY (evc_id) REFERENCES evc (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_548D5BBD2FFA6EEA ON trains (evc_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE trains DROP CONSTRAINT FK_548D5BBD2FFA6EEA');
        $this->addSql('DROP INDEX UNIQ_548D5BBD2FFA6EEA');
        $this->addSql('ALTER TABLE trains DROP evc_id');
    }
}
