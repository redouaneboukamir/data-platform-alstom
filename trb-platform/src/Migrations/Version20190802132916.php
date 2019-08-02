<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190802132916 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE baseline ALTER date SET DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ALTER status SET DEFAULT NULL');
        $this->addSql('ALTER TABLE baseline ALTER original SET DEFAULT NULL');
        $this->addSql('ALTER TABLE ertmsequipement DROP name_configuration');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE ertmsequipement ADD name_configuration VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE baseline ALTER date DROP NOT NULL');
        $this->addSql('ALTER TABLE baseline ALTER status DROP NOT NULL');
        $this->addSql('ALTER TABLE baseline ALTER original DROP NOT NULL');
    }
}
