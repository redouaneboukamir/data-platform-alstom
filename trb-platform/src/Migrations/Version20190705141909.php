<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190705141909 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE TABLE equipement_type_equipement (equipement_id INT NOT NULL, type_equipement_id INT NOT NULL, PRIMARY KEY(equipement_id, type_equipement_id))');
        $this->addSql('CREATE INDEX idx_18a07d09f082b869 ON equipement_type_equipement (type_equipement_id)');
        $this->addSql('CREATE INDEX idx_18a07d09806f0f5c ON equipement_type_equipement (equipement_id)');
        $this->addSql('CREATE TABLE equipement_sous_type_equipement (equipement_id INT NOT NULL, sous_type_equipement_id INT NOT NULL, PRIMARY KEY(equipement_id, sous_type_equipement_id))');
        $this->addSql('CREATE INDEX idx_e32dffecd39afa03 ON equipement_sous_type_equipement (sous_type_equipement_id)');
        $this->addSql('CREATE INDEX idx_e32dffec806f0f5c ON equipement_sous_type_equipement (equipement_id)');
        $this->addSql('ALTER TABLE equipement_type_equipement ADD CONSTRAINT fk_18a07d09806f0f5c FOREIGN KEY (equipement_id) REFERENCES equipement (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE equipement_type_equipement ADD CONSTRAINT fk_18a07d09f082b869 FOREIGN KEY (type_equipement_id) REFERENCES type_equipement (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE equipement_sous_type_equipement ADD CONSTRAINT fk_e32dffec806f0f5c FOREIGN KEY (equipement_id) REFERENCES equipement (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE equipement_sous_type_equipement ADD CONSTRAINT fk_e32dffecd39afa03 FOREIGN KEY (sous_type_equipement_id) REFERENCES soustype_equipement (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }
}
