/*
 * angular-markdown-directive v0.3.0
 * (c) 2013-2014 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', ['ngSanitize']).
  provider('markdownConverter', function () {
    var opts = {};
    return {
      config: function (newOpts) {
        opts = newOpts;
      },
      $get: function () {
        return new Showdown.converter(opts);
      }
    };
  }).
  directive('btfMarkdown', function ($sce, markdownConverter) {
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        if (attrs.btfMarkdown) {
          scope.$watch(attrs.btfMarkdown, function (newVal) {
            var html = newVal ? $sce.trustAsHtml(markdownConverter.makeHtml(newVal)) : '';
            element.html(html);
          });
        } else {
          var html = $sce.trustAsHtml(markdownConverter.makeHtml(element.html()));
          element.html(html);
        }
      }
    };
  });
