<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190509074719 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE association_evcconfig DROP CONSTRAINT fk_e13399806422cd42');
        $this->addSql('ALTER TABLE association_evcconfig DROP CONSTRAINT fk_e1339980c269cc17');
        $this->addSql('DROP INDEX uniq_e13399806422cd42');
        $this->addSql('DROP INDEX uniq_e1339980c269cc17');
        $this->addSql('ALTER TABLE association_evcconfig ADD evc_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE association_evcconfig ADD config_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE association_evcconfig DROP evc_id_id');
        $this->addSql('ALTER TABLE association_evcconfig DROP config_id_id');
        $this->addSql('ALTER TABLE association_evcconfig ADD CONSTRAINT FK_E13399802FFA6EEA FOREIGN KEY (evc_id) REFERENCES equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE association_evcconfig ADD CONSTRAINT FK_E133998024DB0683 FOREIGN KEY (config_id) REFERENCES equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E13399802FFA6EEA ON association_evcconfig (evc_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E133998024DB0683 ON association_evcconfig (config_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE association_evcconfig DROP CONSTRAINT FK_E13399802FFA6EEA');
        $this->addSql('ALTER TABLE association_evcconfig DROP CONSTRAINT FK_E133998024DB0683');
        $this->addSql('DROP INDEX UNIQ_E13399802FFA6EEA');
        $this->addSql('DROP INDEX UNIQ_E133998024DB0683');
        $this->addSql('ALTER TABLE association_evcconfig ADD evc_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE association_evcconfig ADD config_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE association_evcconfig DROP evc_id');
        $this->addSql('ALTER TABLE association_evcconfig DROP config_id');
        $this->addSql('ALTER TABLE association_evcconfig ADD CONSTRAINT fk_e13399806422cd42 FOREIGN KEY (evc_id_id) REFERENCES equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE association_evcconfig ADD CONSTRAINT fk_e1339980c269cc17 FOREIGN KEY (config_id_id) REFERENCES equipement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX uniq_e13399806422cd42 ON association_evcconfig (evc_id_id)');
        $this->addSql('CREATE UNIQUE INDEX uniq_e1339980c269cc17 ON association_evcconfig (config_id_id)');
    }
}
