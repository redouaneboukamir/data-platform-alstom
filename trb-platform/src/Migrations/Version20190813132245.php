<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190813132245 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('DROP TABLE assoc_plug_baseline_plugs');
        $this->addSql('DROP INDEX idx_f2e38ba7dc280aa8');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F2E38BA7DC280AA8 ON assoc_plug_baseline (baseline_id)');
        $this->addSql('ALTER TABLE plugs ADD assoc_plug_baseline_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE plugs ADD CONSTRAINT FK_FF8A28345B027C65 FOREIGN KEY (assoc_plug_baseline_id) REFERENCES assoc_plug_baseline (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_FF8A28345B027C65 ON plugs (assoc_plug_baseline_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE TABLE assoc_plug_baseline_plugs (assoc_plug_baseline_id INT NOT NULL, plugs_id INT NOT NULL, PRIMARY KEY(assoc_plug_baseline_id, plugs_id))');
        $this->addSql('CREATE INDEX idx_c5172d1515134c17 ON assoc_plug_baseline_plugs (plugs_id)');
        $this->addSql('CREATE INDEX idx_c5172d155b027c65 ON assoc_plug_baseline_plugs (assoc_plug_baseline_id)');
        $this->addSql('ALTER TABLE assoc_plug_baseline_plugs ADD CONSTRAINT fk_c5172d155b027c65 FOREIGN KEY (assoc_plug_baseline_id) REFERENCES assoc_plug_baseline (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE assoc_plug_baseline_plugs ADD CONSTRAINT fk_c5172d1515134c17 FOREIGN KEY (plugs_id) REFERENCES plugs (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP INDEX UNIQ_F2E38BA7DC280AA8');
        $this->addSql('CREATE INDEX idx_f2e38ba7dc280aa8 ON assoc_plug_baseline (baseline_id)');
        $this->addSql('ALTER TABLE plugs DROP CONSTRAINT FK_FF8A28345B027C65');
        $this->addSql('DROP INDEX IDX_FF8A28345B027C65');
        $this->addSql('ALTER TABLE plugs DROP assoc_plug_baseline_id');
    }
}
