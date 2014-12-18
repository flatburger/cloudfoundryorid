'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'Cloud Foundry',
    			'description': 'Cloud Foundry adalah sebuah Platform as Service (PaaS) Opensource yang dikembangkan oleh VMware dan bekerja sama dengan Apache License 2.0 yang dibuat dalam Ruby.',
    			'faClass': 'icon-cloud',
                'link': '#cloudfoundry'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Arsitektur',
    			'description': 'PaaS provider yang mencakup aplikasi yang mencakup self-servce application dengan execution engine untuk deployment aplikasi.',
    			'faClass': 'icon-cogs',
                'link': '#architecture'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'VCAP',
    			'description': 'VCAP adalah sebuah ikatan layanan dan juga kernel dari Cloud Foundry sebagai komponen pembangun sebuah PaaS dan pendukung fungsionalitasnya.',
    			'faClass': 'icon-copy2',
                'link': '#vcap'
    		}
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
