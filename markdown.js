/*
 * angular-markdown-directive v0.3.1
 * (c) 2013-2014 Brian Ford http://briantford.com
 * License: MIT
 */

'format global'; /* global define */
'deps angular';
'deps angular-sanitize';
'deps showdown';

(function () {
  'use strict';

  function angularMarkdown(angular, Showdown) {

    angular.module('btford.markdown', ['ngSanitize'])
      .constant('Showdown', Showdown)
      .provider('markdownConverter', ['Showdown', function (Showdown) {
        var opts = {};
        return {
          config: function (newOpts) {
            opts = newOpts;
          },
          $get: function () {
            return new Showdown.converter(opts);
          }
        };
      }])
      .directive('btfMarkdown', ['$sanitize', 'markdownConverter', function ($sanitize, markdownConverter) {
        return {
          restrict: 'AE',
          link: function (scope, element, attrs) {
            if (attrs.btfMarkdown) {
              scope.$watch(attrs.btfMarkdown, function (newVal) {
                var html = newVal ? $sanitize(markdownConverter.makeHtml(newVal)) : '';
                element.html(html);
              });
            } else {
              var html = $sanitize(markdownConverter.makeHtml(element.text()));
              element.html(html);
            }
          }
        };
      }]);
  }

  if (typeof define === 'function' && define.amd) {
    define('angular-markdown-directive', ['angular', 'moment'], angularMarkdown);
  } else if (typeof module !== 'undefined' && module && module.exports) {
    angularMarkdown(angular, require('Showdown'));
  } else {
    angularMarkdown(angular, window.Showdown);
  }
})();