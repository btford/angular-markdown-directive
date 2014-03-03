/*
 * angular-markdown-directive v0.2.0
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', ['ngSanitize']).
  directive('btfMarkdown', function ($sanitize) {
    var converter = new Showdown.converter();
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        if (attrs.btfMarkdown) {
          scope.$watch(attrs.btfMarkdown, function (newVal) {
            var html = newVal ? $sanitize(converter.makeHtml(newVal)) : '';
            element.html(html);
          });
        } else {
          var html = $sanitize(converter.makeHtml(element.text()));
          element.html(html);
        }
      }
    };
  });
