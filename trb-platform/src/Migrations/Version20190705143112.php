<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190705143112 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('DROP INDEX uniq_b8b4c6f3e645f4de');
        $this->addSql('DROP INDEX uniq_b8b4c6f3c54c8c93');
        $this->addSql('CREATE INDEX IDX_B8B4C6F3C54C8C93 ON equipement (type_id)');
        $this->addSql('CREATE INDEX IDX_B8B4C6F3E645F4DE ON equipement (sous_type_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP INDEX IDX_B8B4C6F3C54C8C93');
        $this->addSql('DROP INDEX IDX_B8B4C6F3E645F4DE');
        $this->addSql('CREATE UNIQUE INDEX uniq_b8b4c6f3e645f4de ON equipement (sous_type_id)');
        $this->addSql('CREATE UNIQUE INDEX uniq_b8b4c6f3c54c8c93 ON equipement (type_id)');
    }
}
