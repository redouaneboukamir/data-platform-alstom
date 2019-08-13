<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190813120411 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('DROP TABLE assoc_plug_baseline_baseline');
        $this->addSql('ALTER TABLE assoc_plug_baseline ADD baseline_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE assoc_plug_baseline ADD CONSTRAINT FK_F2E38BA7DC280AA8 FOREIGN KEY (baseline_id) REFERENCES baseline (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_F2E38BA7DC280AA8 ON assoc_plug_baseline (baseline_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE TABLE assoc_plug_baseline_baseline (assoc_plug_baseline_id INT NOT NULL, baseline_id INT NOT NULL, PRIMARY KEY(assoc_plug_baseline_id, baseline_id))');
        $this->addSql('CREATE INDEX idx_3c5fe417dc280aa8 ON assoc_plug_baseline_baseline (baseline_id)');
        $this->addSql('CREATE INDEX idx_3c5fe4175b027c65 ON assoc_plug_baseline_baseline (assoc_plug_baseline_id)');
        $this->addSql('ALTER TABLE assoc_plug_baseline_baseline ADD CONSTRAINT fk_3c5fe4175b027c65 FOREIGN KEY (assoc_plug_baseline_id) REFERENCES assoc_plug_baseline (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE assoc_plug_baseline_baseline ADD CONSTRAINT fk_3c5fe417dc280aa8 FOREIGN KEY (baseline_id) REFERENCES baseline (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE assoc_plug_baseline DROP CONSTRAINT FK_F2E38BA7DC280AA8');
        $this->addSql('DROP INDEX IDX_F2E38BA7DC280AA8');
        $this->addSql('ALTER TABLE assoc_plug_baseline DROP baseline_id');
    }
}
