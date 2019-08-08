<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190808070025 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE association_equipt_ertms ALTER status SET DEFAULT NULL');
        $this->addSql('ALTER TABLE ertmsequipement DROP CONSTRAINT fk_5d256ee46181d325');
        $this->addSql('DROP INDEX idx_5d256ee46181d325');
        $this->addSql('ALTER TABLE ertmsequipement DROP trains_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE ertmsequipement ADD trains_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ertmsequipement DROP name');
        $this->addSql('ALTER TABLE ertmsequipement ADD CONSTRAINT fk_5d256ee46181d325 FOREIGN KEY (trains_id) REFERENCES trains (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_5d256ee46181d325 ON ertmsequipement (trains_id)');
        $this->addSql('ALTER TABLE association_equipt_ertms ALTER status DROP NOT NULL');
    }
}
