/**
 * Gets feature related data
 */
(function() {
	'use strict';

	angular.module(HygieiaConfig.module + '.core').factory('featureData', featureData);

	function featureData($http) {
		var param = '?component=';
		var agileType = {
			kanban : "&agileType=kanban",
			scrum : "&agileType=scrum",
		};

		var testTotal = 'http://localhost:8080/api/feature/estimates/total/Team:9933916?component=552e7b21c44a49be6261d54a';
		var buildTotal = '/api/feature/estimates/total/';

		var testWip = 'http://localhost:8080/api/feature/estimates/wip/Team:9933916?component=552e7b21c44a49be6261d54a';
		var buildWip = '/api/feature/estimates/wip/';

		var testDone = 'http://localhost:8080/api/feature/estimates/done/Team:9933916?component=552e7b21c44a49be6261d54a';
		var buildDone = '/api/feature/estimates/done/';

		var testFeatureWip = 'http://localhost:8080/api/feature/estimates/super/Team:9933916?component=552e7b21c44a49be6261d54a';
		var buildFeatureWip = '/api/feature/estimates/super/';

		var testSprint = 'http://localhost:8080/api/iteration/Team:9933916?component=552e7b21c44a49be6261d54a';
		var buildSprint = '/api/iteration/';

		var testTeams = 'http://localhost:8080/api/collector/item/type/ScopeOwner';
		var buildTeams = '/api/collector/item/type/ScopeOwner';

		var testTeamByCollectorItemId = 'http://localhost:8080/api/collector/item/552ecefac44af4d37f321a6e';
		var buildTeamByCollectorItemId = '/api/collector/item/';

		return {
			total : total,
			wip : wip,
			done : done,
			featureWip : featureWip,
			sprint : sprint,
			totalKanban : totalKanban,
			wipKanban : wipKanban,
			featureWipKanban : featureWipKanban,
			sprintKanban : sprintKanban,
			teams : teams,
			teamByCollectorItemId : teamByCollectorItemId
		};

		/**
		 * Retrieves total feature estimates for a given sprint and team
		 *
		 * @param componentId
		 * @param filterTeamId
		 */
		function total(componentId,filterTeamId) {
			return $http.get(HygieiaConfig.local ? testTotal + agileType.scrum : buildTotal + filterTeamId + param + componentId + agileType.scrum)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves in-progress feature estimates for a given sprint and team
		 *
		 * @param componentId
		 * @param filterTeamId
		 */
		function wip(componentId,filterTeamId) {
			return $http.get(HygieiaConfig.local ? testWip + agileType.scrum : buildWip + filterTeamId + param + componentId + agileType.scrum)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves done feature estimates for a given sprint and team
		 *
		 * @param componentId
		 * @param filterTeamId
		 */
		function done(componentId,filterTeamId) {
			return $http.get(HygieiaConfig.local ? testDone + agileType.scrum : buildDone + filterTeamId + param + componentId + agileType.scrum)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves current super features and their total in progress
		 * estimates for a given sprint and team
		 *
		 * @param componentId
		 * @param filterTeamId
		 */
		function featureWip(componentId,filterTeamId) {
			return $http.get(HygieiaConfig.local ? testFeatureWip + agileType.scrum : buildFeatureWip + filterTeamId + param + componentId + agileType.scrum)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves current team's sprint detail
		 *
		 * @param componentId
		 * @param filterTeamId
		 */
		function sprint(componentId,filterTeamId) {
			return $http.get(HygieiaConfig.local ? testSprint + agileType.scrum : buildSprint + filterTeamId + param + componentId + agileType.scrum)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves total feature estimates for a given sprint and team
		 * for kanban only
		 *
		 * @param componentId
		 * @param filterTeamId
		 */
		function totalKanban(componentId,filterTeamId) {
			return $http.get(HygieiaConfig.local ? testTotal + agileType.kanban : buildTotal + filterTeamId + param + componentId + agileType.kanban)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves in-progress feature estimates for a given sprint and team
		 * for kanban only
		 *
		 * @param componentId
		 * @param filterTeamId
		 */
		function wipKanban(componentId,filterTeamId) {
			return $http.get(HygieiaConfig.local ? testWip + agileType.kanban : buildWip + filterTeamId + param + componentId + agileType.kanban)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves current super features and their total in progress
		 * estimates for a given sprint and team for kanban only
		 *
		 * @param componentId
		 * @param filterTeamId
		 */
		function featureWipKanban(componentId,filterTeamId) {
			return $http.get(HygieiaConfig.local ? testFeatureWip + agileType.kanban : buildFeatureWip + filterTeamId + param + componentId + agileType.kanban)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves current team's sprint detail for kanban only
		 *
		 * @param componentId
		 * @param filterTeamId
		 */
		function sprintKanban(componentId,filterTeamId) {
			return $http.get(HygieiaConfig.local ? testSprint + agileType.kanban : buildSprint + filterTeamId + param + componentId + agileType.kanban)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves all team names and team IDs
		 */
		function teams() {
			return $http.get(HygieiaConfig.local ? testTeams : buildTeams)
					.then(function(response) {
						return response.data;
					});
		}

		/**
		 * Retrieves a given team by its collector item ID
		 *
		 * @param collectorItemId
		 */
		function teamByCollectorItemId(collectorItemId) {
			return $http.get(HygieiaConfig.local ? testTeamByCollectorItemId : buildTeamByCollectorItemId + collectorItemId)
					.then(function(response) {
						return response.data;
					});
		}
	}
})();
