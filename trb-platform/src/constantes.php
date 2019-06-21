<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 26/03/2019
 * Time: 18:32.
 */
if (!defined('KEY_ACCESS_TOKEN')) {
	define('KEY_ACCESS_TOKEN', 'accessToken');
}
if (!defined('KEY_SESSION')) {
	define('KEY_SESSION', 'session');
}
if (!defined('KEY_ERROR')) {
	define('KEY_ERROR', 'error');
}
if (!defined('KEY_ENTITY_ARRAY')) {
	define('KEY_ENTITY_ARRAY', 'EntityArray');
}
if (!defined('KEY_SUCCESS')) {
	define('KEY_SUCCESS', 'success');
}
if (!defined('KEY_GROUP')) {
	define('KEY_GROUP', 'group');
}
if (!defined('KEY_USERS')) {
	define('KEY_USERS', 'users');
}
if (!defined('KEY_MODAL_ERROR')) {
	define('KEY_MODAL_ERROR', 'modal-error');
}
if (!defined('KEY_MODAL_SUCCESS')) {
	define('KEY_MODAL_SUCCESS', 'modal-success');
}
if (!defined('KEY_FORM')) {
	define('KEY_FORM', 'form');
}
if (!defined('KEY_GROUPS')) {
	define('KEY_GROUPS', 'groups');
}
if (!defined('KEY_ID')) {
	define('KEY_ID', 'id');
}
if (!defined('KEY_PROFILES')) {
	define('KEY_PROFILES', 'profiles');
}
if (!defined('KEY_PROFILE')) {
	define('KEY_PROFILE', 'profile');
}
if (!defined('KEY_SERVICES')) {
	define('KEY_SERVICES', 'services');
}
if (!defined('KEY_CLIENTS')) {
	define('KEY_CLIENTS', 'clients');
}
if (!defined('KEY_SLASH')) {
	define('KEY_SLASH', '/');
}

if (!defined('ROUTE_GROUPS')) {
	define('ROUTE_GROUPS', KEY_GROUPS);
}
if (!defined('ROUTE_GROUP_EDIT')) {
	define('ROUTE_GROUP_EDIT', 'group_edit');
}
if (!defined('ROUTE_HOME')) {
	define('ROUTE_HOME', 'home');
}
if (!defined('ROUTE_DOCKER_IMAGES')) {
	define('ROUTE_DOCKER_IMAGES', 'docker_images');
}
if (!defined('ROUTE_IMAGE_UPLOAD')) {
	define('ROUTE_IMAGE_UPLOAD', 'image_upload');
}
if (!defined('ROUTE_DEVICES')) {
	define('ROUTE_DEVICES', 'devices');
}
if (!defined('ROUTE_USERS')) {
	define('ROUTE_USERS', KEY_USERS);
}
if (!defined('ROUTE_PROFILES')) {
	define('ROUTE_PROFILES', KEY_PROFILES);
}

if (!defined('GUZZLE_BASE_URI')) {
	define('GUZZLE_BASE_URI', 'base_uri');
}
if (!defined('GUZZLE_HEADERS')) {
	define('GUZZLE_HEADERS', 'headers');
}
if (!defined('GUZZLE_APPLICATION_JSON')) {
	define('GUZZLE_APPLICATION_JSON', 'application/json');
}
if (!defined('GUZZLE_CONTENT_TYPE')) {
	define('GUZZLE_CONTENT_TYPE', 'Content-Type');
}
if (!defined('GUZZLE_CLIENTS')) {
	define('GUZZLE_CLIENTS', 'clients');
}
if (!defined('GUZZLE_CLIENT_ID')) {
	define('GUZZLE_CLIENT_ID', 'clientId');
}
if (!defined('GUZZLE_ROOT_URL')) {
	define('GUZZLE_ROOT_URL', 'rootUrl');
}
if (!defined('GUZZLE_LOCATION')) {
	define('GUZZLE_LOCATION', 'Location');
}
if (!defined('GUZZLE_NO_HTTP_RESPONSE_ERROR')) {
	define('GUZZLE_NO_HTTP_RESPONSE_ERROR', 'No http response. Function ');
}
if (!defined('GUZZLE_CLIENT_SLASH')) {
	define('GUZZLE_CLIENT_SLASH', KEY_CLIENTS . KEY_SLASH);
}
if (!defined('GUZZLE_DELETE')) {
	define('GUZZLE_DELETE', 'DELETE');
}
if (!defined('GUZZLE_GROUPS')) {
	define('GUZZLE_GROUPS', KEY_GROUPS);
}
if (!defined('GUZZLE_PROFILES')) {
	define('GUZZLE_PROFILES', KEY_PROFILES);
}
if (!defined('GUZZLE_GROUPS_SLASH')) {
	define('GUZZLE_GROUPS_SLASH', KEY_GROUPS . KEY_SLASH);
}
if (!defined('GUZZLE_HTTP_RESPONSE_ERROR_WITH_CODE')) {
	define('GUZZLE_HTTP_RESPONSE_ERROR_WITH_CODE', 'HTTP Response Error with Status Code ');
}
if (!defined('GUZZLE_DOT_FUNCTION')) {
	define('GUZZLE_DOT_FUNCTION', '. Function ');
}
if (!defined('GUZZLE_ERROR')) {
	define('GUZZLE_ERROR', KEY_ERROR);
}
if (!defined('GUZZLE_ROLE_MAPPING_REALM_URL')) {
	define('GUZZLE_ROLE_MAPPING_REALM_URL', '/role-mappings/realm');
}
if (!defined('GUZZLE_SERVICES')) {
	define('GUZZLE_SERVICES', KEY_SERVICES);
}
if (!defined('GUZZLE_SLASH_COMPOSITES')) {
	define('GUZZLE_SLASH_COMPOSITES', KEY_SLASH . 'composites');
}
if (!defined('GUZZLE_ROLES_BY_IS_SLASH')) {
	define('GUZZLE_ROLES_BY_IS_SLASH', 'roles-by-id' . KEY_SLASH);
}
if (!defined('GUZZLE_CLIENT_ROLE')) {
	define('GUZZLE_CLIENT_ROLE', 'clientRole');
}
if (!defined('GUZZLE_FFALSE')) {
	define('GUZZLE_FFALSE', 'false');
}
if (!defined('GUZZLE_COMPOSITE')) {
	define('GUZZLE_COMPOSITE', 'composite');
}
if (!defined('GUZZLE_SCOPE_PARAM_REQUIRED')) {
	define('GUZZLE_SCOPE_PARAM_REQUIRED', 'scopeParamRequired');
}
if (!defined('GUZZLE_USERS')) {
	define('GUZZLE_USERS', KEY_USERS);
}
if (!defined('GUZZLE_GROUP')) {
	define('GUZZLE_GROUP', KEY_GROUP);
}
if (!defined('GUZZLE_USERNAME')) {
	define('GUZZLE_USERNAME', 'username');
}
if (!defined('GUZZLE_CONTAINER_ID')) {
	define('GUZZLE_CONTAINER_ID', 'containerId');
}
if (!defined('GUZZLE_USER_SLASH')) {
	define('GUZZLE_USER_SLASH', KEY_USERS . KEY_SLASH);
}
if (!defined('GUZZLE_SLASH_GROUPS_SLASH')) {
	define('GUZZLE_SLASH_GROUPS_SLASH', KEY_SLASH . KEY_GROUPS . KEY_SLASH);
}
if (!defined('GUZZLE_STRING_CRED_CONF')) {
	define('GUZZLE_STRING_CRED_CONF', 'password');
}
if (!defined('GUZZLE_DESCRIPTION')) {
	define('GUZZLE_DESCRIPTION', 'description');
}
if (!defined('GUZZLE_EXPIRE')) {
	define('GUZZLE_EXPIRE', 'expire');
}
