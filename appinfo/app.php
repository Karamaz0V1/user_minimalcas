<?php

/**
 * ownCloud - user_minimalcas
 *
 * @author Sixto Martin <sixto.martin.garcia@gmail.com> #TODO
 * @copyright Sixto Martin Garcia. 2012
 * @copyright Leonis. 2014 <devteam@leonis.at>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */




if (OCP\App::isEnabled('user_minimalcas')) {

	include_once('CAS.php');

	require_once 'user_minimalcas/user_minimalcas.php';

//	OCP\App::registerAdmin('user_minimalcas', 'settings');

	// register user backend
	OC_User::useBackend( 'MINIMALCAS' );

	OC::$CLASSPATH['OC_USER_MINIMALCAS_Hooks'] = 'user_minimalcas/lib/hooks.php'; // TODO
	OCP\Util::connectHook('OC_User', 'logout', 'OC_USER_MINIMALCAS_Hooks', 'logout');

	if( isset($_GET['app']) && $_GET['app'] == 'user_minimalcas' ) {

		require_once 'user_minimalcas/auth.php';

		if (!OC_User::login('', '')) {
			$error = true;
			OC_Log::write('cas','Error trying to authenticate the user', OC_Log::DEBUG);
		}
		
		if (isset($_SERVER["QUERY_STRING"]) && !empty($_SERVER["QUERY_STRING"]) && $_SERVER["QUERY_STRING"] != 'app=user_minimalcas') {
			header( 'Location: ' . OC::$WEBROOT . '/?' . $_SERVER["QUERY_STRING"]);
			exit();
		}

		OC::$REQUESTEDAPP = '';
		OC_Util::redirectToDefaultPage();
	}

	if (!OCP\User::isLoggedIn()) {

		// Load js code in order to render the CAS link and to hide parts of the normal login form
		OCP\Util::addScript('user_minimalcas', 'utils');
	}

}
