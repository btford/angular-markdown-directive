/*
 * angular-markdown-directive v0.3.1
 * (c) 2013-2014 Brian Ford http://briantford.com
 * License: MIT
 */

"use strict";

angular.module("btford.markdown", ["ngSanitize"])
    .provider("markdownConverter",
    function () {
        var opts = {};
        return {
            config: function (newOpts) { opts = newOpts; },
            $get: function () { return new showdown.Converter(opts); }
        };
    })
    .directive("btfMarkdown",
    [
        "$sanitize", "$compile", "markdownConverter", function ($sanitize, $compile, markdownConverter) {
            return {
                restrict: "AE",
                link: function (scope, element, attrs) {
                    if (attrs.btfMarkdown) {
                        scope.$watch(attrs.btfMarkdown, function (newVal) {
                            element.html(newVal ? $sanitize(markdownConverter.makeHtml(newVal)) : "");

                            if (attrs.compileHtml) $compile(element.contents())(scope);
                        });
                    } else {
                        element.html($sanitize(markdownConverter.makeHtml(element.text())));
                        
                        if (attrs.compileHtml) $compile(element.contents())(scope);
                    }
                }
            };
        }
    ]);
