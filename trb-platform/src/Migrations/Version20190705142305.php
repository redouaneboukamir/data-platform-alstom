<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190705142305 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE equipement ADD type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE equipement ADD sous_type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE equipement ADD CONSTRAINT FK_B8B4C6F3C54C8C93 FOREIGN KEY (type_id) REFERENCES type_equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE equipement ADD CONSTRAINT FK_B8B4C6F3E645F4DE FOREIGN KEY (sous_type_id) REFERENCES soustype_equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B8B4C6F3C54C8C93 ON equipement (type_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B8B4C6F3E645F4DE ON equipement (sous_type_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE equipement DROP CONSTRAINT FK_B8B4C6F3C54C8C93');
        $this->addSql('ALTER TABLE equipement DROP CONSTRAINT FK_B8B4C6F3E645F4DE');
        $this->addSql('DROP INDEX UNIQ_B8B4C6F3C54C8C93');
        $this->addSql('DROP INDEX UNIQ_B8B4C6F3E645F4DE');
        $this->addSql('ALTER TABLE equipement DROP type_id');
        $this->addSql('ALTER TABLE equipement DROP sous_type_id');
    }
}
