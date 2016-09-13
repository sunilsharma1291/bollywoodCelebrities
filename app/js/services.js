'use strict';

/* Services */

var bollywoodServices = angular.module('bollywoodServices', ['ngResource']);

bollywoodServices.factory('ActorsFactory', ['$resource',
  function($resource){
    return $resource(
    	'actors/:actorId.json', 
    	{},
    	{
    		query: {
		    		method:'GET', 
			    	params:{
					    	 actorId:'actors'
					 }, 
					isArray:true
			}
		}
	);
  }]);
