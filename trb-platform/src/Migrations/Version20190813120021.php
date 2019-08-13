<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190813120021 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SEQUENCE assoc_plug_baseline_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE logs_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE assoc_plug_baseline (id INT NOT NULL, status BOOLEAN DEFAULT NULL, date TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE assoc_plug_baseline_plugs (assoc_plug_baseline_id INT NOT NULL, plugs_id INT NOT NULL, PRIMARY KEY(assoc_plug_baseline_id, plugs_id))');
        $this->addSql('CREATE INDEX IDX_C5172D155B027C65 ON assoc_plug_baseline_plugs (assoc_plug_baseline_id)');
        $this->addSql('CREATE INDEX IDX_C5172D1515134C17 ON assoc_plug_baseline_plugs (plugs_id)');
        $this->addSql('CREATE TABLE assoc_plug_baseline_baseline (assoc_plug_baseline_id INT NOT NULL, baseline_id INT NOT NULL, PRIMARY KEY(assoc_plug_baseline_id, baseline_id))');
        $this->addSql('CREATE INDEX IDX_3C5FE4175B027C65 ON assoc_plug_baseline_baseline (assoc_plug_baseline_id)');
        $this->addSql('CREATE INDEX IDX_3C5FE417DC280AA8 ON assoc_plug_baseline_baseline (baseline_id)');
        $this->addSql('CREATE TABLE logs (id INT NOT NULL, idlog BIGINT DEFAULT NULL, temp_adress VARCHAR(255) NOT NULL, key_logs VARCHAR(1000) NOT NULL, date_add TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE assoc_plug_baseline_plugs ADD CONSTRAINT FK_C5172D155B027C65 FOREIGN KEY (assoc_plug_baseline_id) REFERENCES assoc_plug_baseline (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE assoc_plug_baseline_plugs ADD CONSTRAINT FK_C5172D1515134C17 FOREIGN KEY (plugs_id) REFERENCES plugs (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE assoc_plug_baseline_baseline ADD CONSTRAINT FK_3C5FE4175B027C65 FOREIGN KEY (assoc_plug_baseline_id) REFERENCES assoc_plug_baseline (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE assoc_plug_baseline_baseline ADD CONSTRAINT FK_3C5FE417DC280AA8 FOREIGN KEY (baseline_id) REFERENCES baseline (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE plugs ALTER plug TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE plugs ALTER plug DROP DEFAULT');
        $this->addSql('COMMENT ON COLUMN plugs.plug IS NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE assoc_plug_baseline_plugs DROP CONSTRAINT FK_C5172D155B027C65');
        $this->addSql('ALTER TABLE assoc_plug_baseline_baseline DROP CONSTRAINT FK_3C5FE4175B027C65');
        $this->addSql('DROP SEQUENCE assoc_plug_baseline_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE logs_id_seq CASCADE');
        $this->addSql('DROP TABLE assoc_plug_baseline');
        $this->addSql('DROP TABLE assoc_plug_baseline_plugs');
        $this->addSql('DROP TABLE assoc_plug_baseline_baseline');
        $this->addSql('DROP TABLE logs');
        $this->addSql('ALTER TABLE plugs ALTER plug TYPE TEXT');
        $this->addSql('ALTER TABLE plugs ALTER plug DROP DEFAULT');
        $this->addSql('COMMENT ON COLUMN plugs.plug IS \'(DC2Type:array)\'');
    }
}
