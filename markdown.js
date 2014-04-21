/*
 * angular-markdown-directive v0.2.0
 * (c) 2013-2014 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', ['ngSanitize']).
  directive('btfMarkdown', function ($sanitize) {
    var converter = null;
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        if(attrs.showdownExtensions) {
          var exts = attrs.showdownExtensions.split(',');
          converter = new Showdown.converter({ extensions: exts });
        }
        else
          converter = new Showdown.converter();
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