<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190821083310 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE logs ADD assoc_log_baseline_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE logs ADD CONSTRAINT FK_F08FC65C263EA55A FOREIGN KEY (assoc_log_baseline_id) REFERENCES assoc_log_baseline (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_F08FC65C263EA55A ON logs (assoc_log_baseline_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE logs DROP CONSTRAINT FK_F08FC65C263EA55A');
        $this->addSql('DROP INDEX IDX_F08FC65C263EA55A');
        $this->addSql('ALTER TABLE logs DROP assoc_log_baseline_id');
    }
}
