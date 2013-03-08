/*
 * angular-markdown-directive v0.0.1
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', []).
  directive('markdown', function () {
    var converter = new Showdown.converter();
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        var html = converter.makeHtml(element.text());
        element.html(html);
      }
    };
  });
