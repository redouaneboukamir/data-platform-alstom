<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190509111520 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE ertmsequipement ADD trains_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ertmsequipement ADD CONSTRAINT FK_5D256EE46181D325 FOREIGN KEY (trains_id) REFERENCES trains (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_5D256EE46181D325 ON ertmsequipement (trains_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE ertmsequipement DROP CONSTRAINT FK_5D256EE46181D325');
        $this->addSql('DROP INDEX IDX_5D256EE46181D325');
        $this->addSql('ALTER TABLE ertmsequipement DROP trains_id');
    }
}
