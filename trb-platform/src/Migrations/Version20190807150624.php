<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190807150624 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE association_equipt_ertms ADD status BOOLEAN DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline DROP CONSTRAINT fk_f619d3469d264aa2');
        $this->addSql('DROP INDEX idx_f619d3469d264aa2');
        $this->addSql('ALTER TABLE baseline DROP equipt_ertms_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE baseline ADD equipt_ertms_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ADD CONSTRAINT fk_f619d3469d264aa2 FOREIGN KEY (equipt_ertms_id) REFERENCES association_equipt_ertms (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_f619d3469d264aa2 ON baseline (equipt_ertms_id)');
        $this->addSql('ALTER TABLE association_equipt_ertms DROP status');
    }
}
