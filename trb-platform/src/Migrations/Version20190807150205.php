<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190807150205 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE baseline DROP CONSTRAINT fk_f619d346a786dbe9');
        $this->addSql('DROP INDEX idx_f619d346a786dbe9');
        $this->addSql('ALTER TABLE baseline ALTER date SET NOT NULL');
        $this->addSql('ALTER TABLE baseline ALTER status SET NOT NULL');
        $this->addSql('ALTER TABLE baseline ALTER original SET NOT NULL');
        $this->addSql('ALTER TABLE baseline RENAME COLUMN equipment_ertms_id TO equipt_ertms_id');
        $this->addSql('ALTER TABLE baseline ADD CONSTRAINT FK_F619D3469D264AA2 FOREIGN KEY (equipt_ertms_id) REFERENCES association_equipt_ertms (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_F619D3469D264AA2 ON baseline (equipt_ertms_id)');
        $this->addSql('ALTER TABLE association_equipt_ertms ADD baseline_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE association_equipt_ertms ADD CONSTRAINT FK_3A52F5AADC280AA8 FOREIGN KEY (baseline_id) REFERENCES baseline (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_3A52F5AADC280AA8 ON association_equipt_ertms (baseline_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE baseline DROP CONSTRAINT FK_F619D3469D264AA2');
        $this->addSql('DROP INDEX IDX_F619D3469D264AA2');
        $this->addSql('ALTER TABLE baseline ALTER date DROP NOT NULL');
        $this->addSql('ALTER TABLE baseline ALTER status DROP NOT NULL');
        $this->addSql('ALTER TABLE baseline ALTER original DROP NOT NULL');
        $this->addSql('ALTER TABLE baseline RENAME COLUMN equipt_ertms_id TO equipment_ertms_id');
        $this->addSql('ALTER TABLE baseline ADD CONSTRAINT fk_f619d346a786dbe9 FOREIGN KEY (equipment_ertms_id) REFERENCES association_equipt_ertms (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_f619d346a786dbe9 ON baseline (equipment_ertms_id)');
        $this->addSql('ALTER TABLE association_equipt_ertms DROP CONSTRAINT FK_3A52F5AADC280AA8');
        $this->addSql('DROP INDEX IDX_3A52F5AADC280AA8');
        $this->addSql('ALTER TABLE association_equipt_ertms DROP baseline_id');
    }
}
