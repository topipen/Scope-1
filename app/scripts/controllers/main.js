'use strict';

/**
 * @ngdoc function
 * @name scopeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scopeApp
 */
angular.module('scopeApp')
  .controller('MainCtrl', 
  ["$sce", function ($sce) {
			this.config = {
				sources: [
                    {src: $sce.trustAsResourceUrl("http://util.mw.metropolia.fi/ImageRekt/api/v2/"), type: "video/mp4"},
                    {src: $sce.trustAsResourceUrl("http://util.mw.metropolia.fi/ImageRekt/api/v2/"), type: "video/webm"},
                    {src: $sce.trustAsResourceUrl("http://util.mw.metropolia.fi/ImageRekt/api/v2/"), type: "video/ogg"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
				],
				tracks: [
					{
						src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
						kind: "subtitles",
						srclang: "en",
						label: "English",
						default: ""
					}
				],
				theme: "bower_components/videogular-themes-default/videogular.css",
				plugins: {
					poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};
		}],
   function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    
  });
