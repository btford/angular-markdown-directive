/*
 * angular-markdown-directive v0.1.0
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', ['ngSanitize']).
  directive('btfMarkdown', function ($sanitize) {
  directive('btfMarkdown', ['$sanitize', '$http', '$sce', function ($sanitize, $http, $sce) {
    var converter = new Showdown.converter();
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        var html, src;

        if (attrs.src) {
          remoteMarkdown(attrs.src);
        } else if (attrs.btfMarkdown) {
          scope.$watch(attrs.btfMarkdown, function (newVal) {
            makeHtml(newVal);
          });
        } else {
          makeHtml(element.text());
        }

        function makeHtml(text) {
          var html;

          html = text ? $sanitize(converter.makeHtml(text)) : '';

          element.html(html);
        }

        function remoteMarkdown(src) {
          src = $sce.parseAsResourceUrl(src)();
          $http.get(src).success(function (response) {
            makeHtml(response);
          });
        }
      }
    };
  }]);
