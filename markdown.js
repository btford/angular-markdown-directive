/*
 * angular-markdown-directive v0.2.0
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', ['ngSanitize']).
  directive('btfMarkdown', function ($sanitize) {
    var converter, extensions = [];
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {

        // Check for extensions
        var attrExtensions = attrs['extensions'];
        if(attrExtensions)
        {
          // Convert the comma separated string into a list.
          attrExtensions.split(',').forEach(function(val)
            {
              // Strip any whitespace from the beginning or end.
              extensions.push(val.replace(/^\s+|\s+$/g, ''));
            });
        } // end if
        converter = extensions.length > 0 ?
          new Showdown.converter({'extensions': extensions}) :
          new Showdown.converter();

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
