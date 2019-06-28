<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'form.registry' shared service.

include_once $this->targetDirs[3].'\\vendor\\symfony\\form\\FormRegistryInterface.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\form\\FormRegistry.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\form\\FormExtensionInterface.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\form\\Extension\\DependencyInjection\\DependencyInjectionExtension.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\form\\ResolvedFormTypeFactoryInterface.php';
include_once $this->targetDirs[3].'\\vendor\\symfony\\form\\ResolvedFormTypeFactory.php';

return $this->privates['form.registry'] = new \Symfony\Component\Form\FormRegistry([0 => new \Symfony\Component\Form\Extension\DependencyInjection\DependencyInjectionExtension(new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'App\\Form\\AssociationERTMSType' => ['privates', 'App\\Form\\AssociationERTMSType', 'getAssociationERTMSTypeService.php', true],
    'App\\Form\\AssociationType' => ['privates', 'App\\Form\\AssociationType', 'getAssociationTypeService.php', true],
    'App\\Form\\BaselineType' => ['privates', 'App\\Form\\BaselineType', 'getBaselineTypeService.php', true],
    'App\\Form\\ClientUserType' => ['privates', 'App\\Form\\ClientUserType', 'getClientUserTypeService.php', true],
    'App\\Form\\ClientsSearchType' => ['privates', 'App\\Form\\ClientsSearchType', 'getClientsSearchTypeService.php', true],
    'App\\Form\\ClientsType' => ['privates', 'App\\Form\\ClientsType', 'getClientsTypeService.php', true],
    'App\\Form\\EVCType' => ['privates', 'App\\Form\\EVCType', 'getEVCTypeService.php', true],
    'App\\Form\\EnginSearchType' => ['privates', 'App\\Form\\EnginSearchType', 'getEnginSearchTypeService.php', true],
    'App\\Form\\EngineerType' => ['privates', 'App\\Form\\EngineerType', 'getEngineerTypeService.php', true],
    'App\\Form\\EquipementType' => ['privates', 'App\\Form\\EquipementType', 'getEquipementTypeService.php', true],
    'App\\Form\\ErtmsType' => ['privates', 'App\\Form\\ErtmsType', 'getErtmsTypeService.php', true],
    'App\\Form\\ProjectSearchType' => ['privates', 'App\\Form\\ProjectSearchType', 'getProjectSearchTypeService.php', true],
    'App\\Form\\ProjectType' => ['privates', 'App\\Form\\ProjectType', 'getProjectTypeService.php', true],
    'App\\Form\\SousTypeEquipementType' => ['privates', 'App\\Form\\SousTypeEquipementType', 'getSousTypeEquipementTypeService.php', true],
    'App\\Form\\TrainsSearchType' => ['privates', 'App\\Form\\TrainsSearchType', 'getTrainsSearchTypeService.php', true],
    'App\\Form\\TrainsType' => ['privates', 'App\\Form\\TrainsType', 'getTrainsTypeService.php', true],
    'App\\Form\\TypeEquipementType' => ['privates', 'App\\Form\\TypeEquipementType', 'getTypeEquipementTypeService.php', true],
    'App\\Form\\UserType' => ['privates', 'App\\Form\\UserType', 'getUserTypeService.php', true],
    'Symfony\\Bridge\\Doctrine\\Form\\Type\\EntityType' => ['privates', 'form.type.entity', 'getForm_Type_EntityService.php', true],
    'Symfony\\Component\\Form\\Extension\\Core\\Type\\ChoiceType' => ['privates', 'form.type.choice', 'getForm_Type_ChoiceService.php', true],
    'Symfony\\Component\\Form\\Extension\\Core\\Type\\FormType' => ['privates', 'form.type.form', 'getForm_Type_FormService.php', true],
    'Vich\\UploaderBundle\\Form\\Type\\VichFileType' => ['services', 'vich_uploader.form.type.file', 'getVichUploader_Form_Type_FileService.php', true],
    'Vich\\UploaderBundle\\Form\\Type\\VichImageType' => ['services', 'vich_uploader.form.type.image', 'getVichUploader_Form_Type_ImageService.php', true],
]), ['Symfony\\Component\\Form\\Extension\\Core\\Type\\FormType' => new RewindableGenerator(function () {
    yield 0 => ($this->privates['form.type_extension.form.transformation_failure_handling'] ?? ($this->privates['form.type_extension.form.transformation_failure_handling'] = new \Symfony\Component\Form\Extension\Core\Type\TransformationFailureExtension(NULL)));
    yield 1 => ($this->privates['form.type_extension.form.http_foundation'] ?? $this->load('getForm_TypeExtension_Form_HttpFoundationService.php'));
    yield 2 => ($this->privates['form.type_extension.form.validator'] ?? $this->load('getForm_TypeExtension_Form_ValidatorService.php'));
    yield 3 => ($this->privates['form.type_extension.csrf'] ?? $this->load('getForm_TypeExtension_CsrfService.php'));
}, 4), 'Symfony\\Component\\Form\\Extension\\Core\\Type\\RepeatedType' => new RewindableGenerator(function () {
    yield 0 => ($this->privates['form.type_extension.repeated.validator'] ?? ($this->privates['form.type_extension.repeated.validator'] = new \Symfony\Component\Form\Extension\Validator\Type\RepeatedTypeValidatorExtension()));
}, 1), 'Symfony\\Component\\Form\\Extension\\Core\\Type\\SubmitType' => new RewindableGenerator(function () {
    yield 0 => ($this->privates['form.type_extension.submit.validator'] ?? ($this->privates['form.type_extension.submit.validator'] = new \Symfony\Component\Form\Extension\Validator\Type\SubmitTypeValidatorExtension()));
}, 1)], new RewindableGenerator(function () {
    yield 0 => ($this->privates['form.type_guesser.validator'] ?? $this->load('getForm_TypeGuesser_ValidatorService.php'));
    yield 1 => ($this->privates['form.type_guesser.doctrine'] ?? $this->load('getForm_TypeGuesser_DoctrineService.php'));
}, 2))], new \Symfony\Component\Form\ResolvedFormTypeFactory());