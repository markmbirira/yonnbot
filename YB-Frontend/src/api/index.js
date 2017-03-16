/*
 * This module loads the functions needed for API calls to 
 * the YonnBot API .The methods are namespaced and 
 * they take a URL and optional parameters for API Querying
*/

import apiPosts from './apiPosts';
import apiComments from './apiComments';
import apiChannels from './apiChannels';
import apiUsers from './apiUsers';

const  API =  {
	apiPosts,
	apiComments,
	apiChannels,
	apiUsers
}

export default API;