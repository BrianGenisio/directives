angular.module('templates').run(['$templateCache', function($templateCache) {

  $templateCache.put('directives/bad-tree.html',
    "<ul>\n" +
    "  <li ng-repeat=\"(key, value) in nodes\">\n" +
    "    <a ng-click=\"hide = !hide\">{{key}}</a>\n" +
    "    <bad-tree nodes=\"value\" ng-hide=\"hide\"></bad-tree>\n" +
    "  </li>\n" +
    "</ul>"
  );


  $templateCache.put('directives/column-view.html',
    "<div class=\"column-view\">\n" +
    "\t<h1 ng-if=\"heading\">{{heading}}</h1>\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div ng-transclude></div>\n" +
    "\t</div>\t\n" +
    "</div>"
  );


  $templateCache.put('directives/edit-in-place.html',
    "<div class=\"edit in-place\">\n" +
    "  <span ng-click=\"edit()\" ng-show=\"!editing\">{{ngModel}}</span>\n" +
    "\n" +
    "  <span ng-show=\"editing\">\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"tmpModel\" ng-show=\"editing\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\">Save</button>\n" +
    "    <button class=\"btn\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  </span>\n" +
    "</div>"
  );


  $templateCache.put('directives/fixed-tree.html',
    "<ul>\n" +
    "  <li ng-repeat=\"(key, value) in nodes\">\n" +
    "    <a ng-click=\"hide = !hide\">{{key}}</a>\n" +
    "    <div class=\"subtree-container\" ng-hide=\"hide\"></div>\n" +
    "  </li>\n" +
    "</ul>"
  );


  $templateCache.put('directives/hampster-dance.html',
    "<span ng-click=\"toggle()\" class=\"hampster-dance\">\n" +
    "  <img src=\"/img/hampster.jpeg\" ng-show=\"!animated\" />\n" +
    "  <img src=\"/img/animated-hampster.gif\" ng-show=\"animated\" />\n" +
    "  <embed src=\"/audio/hampster-dance.wav\" ng-show=\"animated\">\n" +
    "</span>"
  );


  $templateCache.put('directives/hampster.html',
    "<img src=\"/img/hampster.jpeg\" class=\"hampster\" />"
  );


  $templateCache.put('directives/harlem-shake.html',
    "<div>\n" +
    "  <h1>Shake it!</h1>\n" +
    "  <div ng-transclude></div>\n" +
    "</div>"
  );


  $templateCache.put('directives/interesting.html',
    "<div class=\"interesting-man\">         \n" +
    "  <img src=\"/img/man.jpg\">            \n" +
    "  <div class=\"header\">{{header}}</div>\n" +
    "  <div class=\"footer\">{{footer}}</div>\n" +
    "</div>"
  );


  $templateCache.put('directives/panel.html',
    "<div class=\"panel panel-primary\">\n" +
    "  \n" +
    "  <div class=\"panel-heading\" ng-if=\"heading\">\n" +
    "    <h3 class=\"panel-title\">{{heading}}</h3>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"panel-body\">\n" +
    "    <div ng-transclude></div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>"
  );


  $templateCache.put('directives/repeater.html',
    "This is my list of things:\n" +
    "<ul>\n" +
    "  <li ng-repeat=\"item in items\">\n" +
    "    <div class=\"{{itemClass( {item: item} )}}\">\n" +
    "      {{item}}\n" +
    "    </div>\n" +
    "  </li>\n" +
    "</ul>"
  );


  $templateCache.put('directives/tab.html',
    "<div class=\"tab-pane\"\n" +
    "     ng-class=\"{active:selected}\"\n" +
    "     ng-transclude>\n" +
    "</div>"
  );


  $templateCache.put('directives/tabs.html',
    "<div class=\"tab-list\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-repeat=\"tab in tabs\" ng-class=\"{active:tab.selected}\">\n" +
    "      <a href=\"\" ng-click=\"select(tab);\">\n" +
    "        {{tab.title}}\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"tab-content\" ng-transclude></div>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/tree.html',
    "<ul>\n" +
    "  <li ng-repeat=\"(key, value) in nodes\">\n" +
    "    <a ng-click=\"hide = !hide\">{{key}}</a>\n" +
    "    <tree nodes=\"value\" ng-hide=\"hide\"></tree>\n" +
    "  </li>\n" +
    "</ul>"
  );


  $templateCache.put('slides/angular-intro.html',
    "<column-view heading=\"Introduction to Angular.js\" class=\"slide-angular-intro\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/snippets/angular-intro-controller.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/snippets/angular-intro-view.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/angular-intro-view.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/apply-basics.html',
    "<div class=\"slide-apply-basics\">\n" +
    "\t<h1>What is $apply() and $digest()?</h1>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t<h2>$apply()</h2>\n" +
    "\t\t\t<blockquote>\n" +
    "\t\t\t\t$apply() is used to execute an expression in angular from outside of the angular framework.\n" +
    "\t\t\t</blockquote>\n" +
    "\t\t\t<div>\n" +
    "\t\t\t\t$apply() pseudocode:\n" +
    "\t\t\t\t<div show-code=\"/app/snippets/apply-pseudocode.js\" mode=\"javascript\"></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t<h2>$eval()</h2>\n" +
    "\t\t\t<blockquote>\n" +
    "\t\t\t\tExecutes the expression on the current scope and returns the result.\n" +
    "\t\t\t</blockquote>\n" +
    "\n" +
    "\t\t\t<h2>$digest()</h2>\n" +
    "\t\t\t<blockquote>\n" +
    "\t\t\t\tProcesses all of the watchers of the current scope and its children.\n" +
    "\t\t\t</blockquote>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('slides/apply-when-to-use.html',
    "<column-view heading=\"When should you use $apply()?\" class=\"slide-apply-when-to-use\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/what-does-the-fox-say.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/snippets/what-does-the-fox-say.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/what-does-the-fox-say.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/bad-tree.html',
    "<column-view heading=\"Why is it important to know the difference?\" class=\"slide-bad-tree\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/bad-tree.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/bad-tree.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/tree-demo-controller.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-bad-tree.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/behavior.html',
    "<div class=\"slide-behavior section\">\n" +
    "\t<h1>Behavior</h1>\n" +
    "</div>"
  );


  $templateCache.put('slides/compile-vs-link.html',
    "<column-view heading=\"Lifecycle\" class=\"slide-compile-vs-link\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/compile-demo.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-compile-demo.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "</column-view>\n"
  );


  $templateCache.put('slides/dependencies.html',
    "<div class=\"slide-dependencies section\">\n" +
    "\t<h1>Dependencies</h1>\n" +
    "</div>"
  );


  $templateCache.put('slides/dependent-directives.html',
    "<column-view heading=\"Dependent Directives\" class=\"slide-dependent-directives\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/snippets/use-tabs.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-tabs.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/directives-can-have-behavior.html',
    "<column-view heading=\"Directives Can Have Behavior\" class=\"slide-directives-can-have-behavior\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance.html\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-hampster-dance.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-hampster-dance.html'\"></div>\n" +
    "\t\t</div>\t\n" +
    "\t</column>\n" +
    "</column-view>\n"
  );


  $templateCache.put('slides/directives-can-use-your-scope.html',
    "<column-view heading=\"Directives Can Use Your Scope\" class=\"slide-directives-can-use-your-scope\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance.html\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-hampster-dance-with-scope.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-hampster-dance-with-scope.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/element-directives-ie8.html',
    "<column-view heading=\"Internet Explorer &lt;= 8\" class=\"slide-element-directive-ie8\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/salut.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/salut-element.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/prime-ie.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/general-recursion.html',
    "<column-view heading=\"General Solution for Recursion!\" class=\"slide-recursive-directives\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/tree.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/tree.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-general-tree.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-general-tree.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/services/recursion-helper.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "</column-view>\n"
  );


  $templateCache.put('slides/harlem-shake.html',
    "<column-view heading=\"A more practical example\" class=\"slide-harlem-shake\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/harlem-shake.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/harlem-shake.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-harlem-shake.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-harlem-shake.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/hello-1.html',
    "<column-view heading=\"A Very Simple Directive\" class=\"slide-simple-directive\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/hello.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-hello-directive.html\" mode=\"html\"></div>\n" +
    "\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-hello-directive.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/hello-2.html',
    "<column-view heading=\"Directive usage\" class=\"slide-salut-directive\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/salut.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-salut-directive.html\" mode=\"html\"></div>\n" +
    "\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-salut-directive.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>\n"
  );


  $templateCache.put('slides/intro.html',
    "<div class=\"slide-intro\">\n" +
    "\t<h1>Angular Directives: Demystified</h1>\n" +
    "\t<h2>A deep dive into Angular's most powerful feature</h2>\n" +
    "\t<p>\n" +
    "\t\tPresented by @BrianGenisio of CareEvolution<br />\t\n" +
    "\t\t<a href=\"http://letsfixhealthcare.com\">LetsFixHealthcare.com</a>\n" +
    "\t</p>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('slides/isolate-scope-bindings.html',
    "<div class=\"slide-binding section\">\n" +
    "\t<h1>Three Ways to Bind to Scope</h1>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<ul>\n" +
    "\t\t\t<li><h2>One-way String Binding: '@'</h2></li>\n" +
    "\t\t\t<li><h2>Two-way Object Binding: '='</h2></li>\n" +
    "\t\t\t<li><h2>Callback Function Binding: '&amp;'</h2></li>\n" +
    "\t\t</ul>\n" +
    "\t</div>\n" +
    "</div>\n"
  );


  $templateCache.put('slides/isolate-scope-extras.html',
    "<column-view heading=\"Optional and Aliased Bindings\" class=\"slide-isolate-scope-extras\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/binding-features.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-binding-features.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-function-binding-mechanics.html',
    "<column-view heading=\"Mechanics of Function Binding\" class=\"slide-isolate-scope-function-binding-mechanics\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/bind-func.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-bind-func.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-bind-func.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-function-binding.html',
    "<column-view heading=\"Isolate Scope Function Binding\" class=\"slide-isolate-scope-function-binding\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/callback.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-callback.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-callback.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-function-binding2.html',
    "<column-view heading=\"Functions Can Return to the Directive\" class=\"slide-isolate-scope-function-binding2\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/repeater.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/repeater.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-repeater.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/repeater-demo-controller.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-repeater.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-intro.html',
    "<column-view heading=\"You can isolate your scope!\" class=\"slide-isolate-scope-intro\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance-isolate.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance.html\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-hampster-dance-with-isolate-scope.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-hampster-dance-with-isolate-scope.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-intro2.html',
    "<column-view heading=\"Isolate scopes can &quot;pass&quot; parameters\" class=\"slide-isolate-scope-object-bind\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance-isolate2.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance.html\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-hampster-dance-with-isolate-object-bind.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-hampster-dance-with-isolate-object-bind.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-object-binding-mechanics.html',
    "<column-view heading=\"Mechanics of Object Binding\" class=\"slide-isolate-scope-object-binding-mechanics\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/bind-bool.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-bind-bool.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-bind-bool.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>\n"
  );


  $templateCache.put('slides/isolate-scope-object-binding.html',
    "<column-view heading=\"Isolate Scope Object Binding\" class=\"slide-isolate-scope-object-binding\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/click-count.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-click-count.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-click-count.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-object-binding2.html',
    "<column-view heading=\"More real-world example\" class=\"slide-isolate-scope-object-binding2\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/edit-in-place.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/edit-in-place.html\" mode=\"html\"></div>\t\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-edit-in-place.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-edit-in-place.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-string-binding-interpolate.html',
    "<column-view heading=\"One Way, but You Get Interpolation!\" class=\"slide-isolate-scope-string-binding-interpolate\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/interesting.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/interesting.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-interesting-man-interpolate.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-interesting-man-interpolate.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-string-binding-mechanics.html',
    "<column-view heading=\"Mechanics of String Binding\" class=\"slide-isolate-scope-string-binding-mechanics\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/bind-string.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-bind-scope.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-bind-scope.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/isolate-scope-string-binding.html',
    "<column-view heading=\"Isolate Scope String Binding\" class=\"slide-isolate-scope-string-binding\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/interesting.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/interesting.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-interesting-man.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-interesting-man.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/lifecycle.html',
    "<div class=\"slide-lifecycle section\">\n" +
    "\t<h1>Lifecycle</h1>\n" +
    "</div>"
  );


  $templateCache.put('slides/notfound.html',
    "not found"
  );


  $templateCache.put('slides/overview.html',
    "<div class=\"slide-overview\">\n" +
    "<h1>What we'll cover</h1>\n" +
    "\n" +
    "<ul>\n" +
    "\t<li>What is a directive?</li>\n" +
    "\t<li>How to write directives</li>\n" +
    "\t<li>How directives work</li>\n" +
    "\t<li>How scoping works</li>\n" +
    "\t<li>How to effectively use directives</li>\n" +
    "</ul>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('slides/recursion.html',
    "<div class=\"slide-recursion section\">\n" +
    "\t<h1>Recursion and Transclusion</h1>\n" +
    "</div>"
  );


  $templateCache.put('slides/recursive.html',
    "<column-view heading=\"There!  I fixed it!\" class=\"slide-recursive-directives\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/fixed-tree.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/fixed-tree.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-fixed-tree.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-fixed-tree.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/sharing-directive-scope-might-not-be-good.html',
    "<column-view heading=\"But you often don't want to\" class=\"slide-directives-shouldnt-share-scope\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/hampster-dance.html\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-hampster-dance-with-scope-bad.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-hampster-dance-with-scope-bad.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/show-show-code.html',
    "<div class=\"slide-show-show-code\">\n" +
    "\t<h1>The show-code directive</h1>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-show-code.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('slides/start-simple.html',
    "<div class=\"slide-start-simple section\">\n" +
    "\t<h1>Start Simple</h1>\n" +
    "</div>"
  );


  $templateCache.put('slides/tabs-without-directives.html',
    "<column-view heading=\"Tabs without directives\" class=\"slide-dependent-directives\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/snippets/tabs-without-directives.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/tabs-without-directives.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/tabs.html',
    "<column-view heading=\"Tabs Directives\" class=\"slide-tabs\">\n" +
    "\t<column>\n" +
    "\t\t<h2>Tabs</h2>\n" +
    "\t\t<div show-code=\"/app/directives/tabs.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/tabs.html\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<h2>Tab</h2>\n" +
    "\t\t<div show-code=\"/app/directives/tab.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/tab.html\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<h2>Demo</h2>\n" +
    "\t\t<div show-code=\"/app/snippets/use-tabs.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-tabs.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/templates-can-be-separate.html',
    "<column-view heading=\"Templates Can Be Separate (async)\" class=\"slide-templates-can-be-separate\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/hampster.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/hampster.html\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-hampster.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-hampster.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>\n"
  );


  $templateCache.put('slides/templates-can-contain-directives.html',
    "<column-view heading=\"Templates Can Contain Directives\" class=\"slide-templates-contain-directive\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/numanuma.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/numa-numa.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/numa-numa.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>"
  );


  $templateCache.put('slides/test-hello-1.html',
    "<column-view heading=\"Testing the Simple Directive\" class=\"slide-test-simple-directive\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/tests/directives/hello.test.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/hello.js\" mode=\"javascript\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\tUnit Tests:\n" +
    "\t\t<iframe src=\"/SpecRunner.html\"></iframe>\n" +
    "\t</column>\n" +
    "</column-view>\n"
  );


  $templateCache.put('slides/thank-you.html',
    "<div class=\"slide-thank-you\">\n" +
    "\t<h1>The End.  Questions?</h1>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-5\">\n" +
    "\t\t\t<img src=\"/img/backflip.gif\" />\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"col-md-7\">\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li> <a href=\"http://twitter.com/BrianGenisio\">@BrianGenisio</a> </li>\n" +
    "\t\t\t\t<li> <a href=\"http://LetsFixHealthcare.com\">CareEvolution</a> </li>\n" +
    "\t\t\t\t<li> <a href=\"https://github.com/BrianGenisio/directives\">Examples</a> </li>\n" +
    "\t\t\t\t<li> <a href=\"https://www.youtube.com/watch?v=WqmeI5fZcho\">Misko Hevery Presentation</a> </li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('slides/transclusion.html',
    "<column-view heading=\"Transclusion\" class=\"slide-transclusion\">\n" +
    "\t<column>\n" +
    "\t\t<div show-code=\"/app/directives/panel.js\" mode=\"javascript\"></div>\n" +
    "\t\t<div show-code=\"/app/directives/panel.html\" mode=\"html\"></div>\n" +
    "\t</column>\n" +
    "\n" +
    "\t<column>\n" +
    "\t\t<div class=\"usage\" show-code=\"/app/snippets/use-panel.html\" mode=\"html\"></div>\n" +
    "\t\t<div class=\"demo well\">\n" +
    "\t\t\t<div ng-include=\"'/app/snippets/use-panel.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</column>\n" +
    "</column-view>\n"
  );


  $templateCache.put('slides/types-of-directives.html',
    "<div class=\"slide-types-of-directives\">\n" +
    "\t<h1>Types of Directives</h1>\n" +
    "\n" +
    "\t<ul>\n" +
    "\t\t<li>\n" +
    "\t\t\t<div>\n" +
    "\t\t\t\t<h2>Behavioral<h2>\n" +
    "\t\t\t\t<div show-code=\"/app/snippets/behavioral-directive.html\" mode=\"html\"></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</li>\n" +
    "\t\t\n" +
    "\t\t<li>\n" +
    "\t\t\t<div>\n" +
    "\t\t\t\t<h2>Component<h2>\n" +
    "\t\t\t\t<div show-code=\"/app/snippets/component-directive.html\" mode=\"html\"></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</li>\n" +
    "\t</ul>\n" +
    "</div>"
  );


  $templateCache.put('slides/what-is-a-directive.html',
    "<div class=\"slide-what-is-a-directive section\">\n" +
    "\t<h1>What is a Directive?</h1>\n" +
    "</div>"
  );


  $templateCache.put('snippets/angular-intro-view.html',
    "<div ng-controller=\"CatsCtrl\">\n" +
    "  <h2>Famous Cats</h2>\n" +
    "  <ul>\n" +
    "    <li ng-repeat=\"cat in cats | filter:name\">\n" +
    "      {{cat.name}}\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "        \n" +
    "  <input ng-model=\"name\" />\n" +
    "</div>"
  );


  $templateCache.put('snippets/behavioral-directive.html',
    "<button ng-click=\"save(character)\"></button>\n" +
    "\n" +
    "<ul>\n" +
    "  <li ng-repeat=\"character in characters\">{{character.name}}</li>\n" +
    "</ul>\n" +
    "\n" +
    "<body watch-keys=\"keyMap\"></body>"
  );


  $templateCache.put('snippets/component-directive.html',
    "<div confirmation-dialog=\"Are you sure you'd like to use the force?\" yes=\"useTheForce()\"></div>\n" +
    "\n" +
    "<div combo-box=\"listOfPlanets\" ng-model=\"selectedPlanet\"></div>\n" +
    "\n" +
    "<tabview>\n" +
    "  <tab title=\"First Tab\">Tab 1 content</tab>\n" +
    "  <tab title=\"Second Tab\">Tab 2 content</tab>\n" +
    "</tabview>\n" +
    "\n" +
    "<textarea ng-model=\"code\" ui-codemirror=\"options\"></textarea>"
  );


  $templateCache.put('snippets/numa-numa.html',
    "<div numa-numa></div>"
  );


  $templateCache.put('snippets/prime-ie.html',
    "<head>\n" +
    "    <!--[if lte IE 8]>\n" +
    "      <script>\n" +
    "        document.createElement('salut');\n" +
    "      </script>\n" +
    "\t<![endif]-->\n" +
    "</head>"
  );


  $templateCache.put('snippets/salut-element.html',
    "<salut></salut>"
  );


  $templateCache.put('snippets/tabs-without-directives.html',
    "<div class=\"tab-list\" ng-init=\"selected = 'Double Rainbow'\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{active: selected == 'Double Rainbow'}\">\n" +
    "      <a href=\"\" ng-click=\"selected = 'Double Rainbow'\">Double Rainbow</a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{active: selected == 'Star Wars Kid'}\">\n" +
    "      <a href=\"\" ng-click=\"selected = 'Star Wars Kid'\">Star Wars Kid</a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{active: selected == 'Chocolate Rain'}\">\n" +
    "      <a href=\"\" ng-click=\"selected = 'Chocolate Rain'\">Chocolate Rain</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\" ng-class=\"{active: selected == 'Double Rainbow'}\">\n" +
    "      <img src=\"/img/double-rainbow.jpg\" />\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"tab-pane\" ng-class=\"{active: selected == 'Star Wars Kid'}\">\n" +
    "      <img src=\"/img/starwars-kid.jpg\" />\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"tab-pane\" ng-class=\"{active: selected == 'Chocolate Rain'}\">\n" +
    "      <img src=\"/img/chocolate-rain.gif\" />\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('snippets/use-bad-tree.html',
    "<div ng-controller=\"treeDemoCtrl\">\n" +
    "  <bad-tree nodes=\"popularMemes\"></bad-tree> <!-- BOOM! -->\n" +
    "</div>"
  );


  $templateCache.put('snippets/use-bind-bool.html',
    "<div ng-init=\"data = {toggle: true}\">\n" +
    "  <input type=\"checkbox\" ng-model=\"data.toggle\"/>\n" +
    "  \n" +
    "  <bind-bool value=\"data.toggle\"></bind-bool>\n" +
    "</div>"
  );


  $templateCache.put('snippets/use-bind-func.html',
    "<bind-func action=\"spell = message\"></bind-func>\n" +
    "  \n" +
    "Spell: {{spell}}\n"
  );


  $templateCache.put('snippets/use-bind-scope.html',
    "<div ng-init=\"name = 'ninja'\">\n" +
    "  <bind-string friend=\"{{name}}\"></bind-string>\n" +
    "  \n" +
    "  <input ng-model=\"name\" />\n" +
    "</div>"
  );


  $templateCache.put('snippets/use-binding-features.html',
    "<binding-features ns-something=\"true\"></binding-features>\n"
  );


  $templateCache.put('snippets/use-callback.html',
    "<div callback=\"what = message\"></div>\n" +
    "{{what}}"
  );


  $templateCache.put('snippets/use-click-count.html',
    "<div ng-init=\"value = 0\">\n" +
    "  <click-count count=\"value\"></click-count>\n" +
    "  \n" +
    "  Value is {{value}}\n" +
    "</div>"
  );


  $templateCache.put('snippets/use-compile-demo.html',
    "<ul>\n" +
    "  <li ng-repeat=\"x in items\">\n" +
    "    <lifecycle-demo></lifecycle-demo>\n" +
    "  </li>\n" +
    "</ul>"
  );


  $templateCache.put('snippets/use-edit-in-place.html',
    "<div ng-init=\"person = {first: 'Leroy', last: 'Jenkins'}\">\n" +
    "  \n" +
    "  <edit-in-place ng-model=\"person.first\"></edit-in-place>\n" +
    "  <edit-in-place ng-model=\"person.last\"></edit-in-place>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('snippets/use-fixed-tree.html',
    "<div ng-controller=\"treeDemoCtrl\">\n" +
    "  <fixed-tree nodes=\"family\"></fixed-tree>\n" +
    "</div>"
  );


  $templateCache.put('snippets/use-general-tree.html',
    "<div ng-controller=\"treeDemoCtrl\">\n" +
    "  <tree nodes=\"popularMemes\"></tree>\n" +
    "</div>"
  );


  $templateCache.put('snippets/use-hampster-dance-with-isolate-object-bind.html',
    "<input type=\"checkbox\" ng-model=\"dance\" />\n" +
    "\n" +
    "<hampster-dance-isolate2 animated=\"dance\"></hampster-dance-isolate2>"
  );


  $templateCache.put('snippets/use-hampster-dance-with-isolate-scope.html',
    "<input type=\"checkbox\" ng-model=\"animated\" />\n" +
    "\n" +
    "<span hampster-dance-isolate></span>\n" +
    "<span hampster-dance-isolate></span>\n" +
    "<span hampster-dance-isolate></span>\n" +
    "<span hampster-dance-isolate></span>"
  );


  $templateCache.put('snippets/use-hampster-dance-with-scope-bad.html',
    "<span hampster-dance></span>\n" +
    "<span hampster-dance></span>\n" +
    "<span hampster-dance></span>\n" +
    "<span hampster-dance></span>"
  );


  $templateCache.put('snippets/use-hampster-dance-with-scope.html',
    "<input type=\"checkbox\" ng-model=\"animated\" />\n" +
    "\n" +
    "<span hampster-dance></span>"
  );


  $templateCache.put('snippets/use-hampster-dance.html',
    "<span hampster-dance></span>"
  );


  $templateCache.put('snippets/use-hampster.html',
    "<span hampster></span>"
  );


  $templateCache.put('snippets/use-harlem-shake.html',
    "<shake-it>\n" +
    "  <div class=\"col-md-2\" ng-repeat=\"x in [1,2,3,4,5]\">\n" +
    "    <img src=\"/img/hampster.jpeg\" />\n" +
    "  </div>\n" +
    "</shake-it>"
  );


  $templateCache.put('snippets/use-hello-directive.html',
    "<div hello></div>"
  );


  $templateCache.put('snippets/use-interesting-man-interpolate.html',
    "<div ng-init=\"data = {\n" +
    "                what: 'go to conferences', \n" +
    "                how: 'go to Codemash!'\n" +
    "              }\">\n" +
    "\n" +
    "  <interesting \n" +
    "    header=\"I don't always {{data.what}}\" \n" +
    "    footer=\"But when I do, I {{data.how}}\">\n" +
    "  </interesting>\n" +
    "\n" +
    "  <input ng-model=\"data.what\" />\n" +
    "  <input ng-model=\"data.how\" />\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('snippets/use-interesting-man.html',
    "<interesting \n" +
    "  header=\"I don't always write directives\" \n" +
    "  footer=\"But when I do, I isolate my scope\">\n" +
    "</interesting>"
  );


  $templateCache.put('snippets/use-panel.html',
    "<panel heading=\"Chuck Norris Facts\">\n" +
    "\n" +
    "  <ul>\n" +
    "  \t<li>First program was `kill -9`</li>\n" +
    "  \t<li>Throws exceptions across the room</li>\n" +
    "  \t<li>Can divide by zero</li>\n" +
    "  \t<li>Writes self-optimizing code</li>\n" +
    "  </ul>\n" +
    "  \n" +
    "</panel>\n"
  );


  $templateCache.put('snippets/use-repeater.html',
    "<div ng-controller=\"repeaterDemoCtrl\">\n" +
    "  <repeater items=\"forceWielders\" item-class=\"getClass(item)\"></repeater>\n" +
    "</div>"
  );


  $templateCache.put('snippets/use-salut-directive.html',
    "<div>Attribute: <span salut></span>         </div>\n" +
    "<div>Data:      <span data-salut></span>    </div>\n" +
    "<div>Element:   <salut></salut>             </div>\n" +
    "<div>X-:        <x-salut></x-salut>         </div>\n" +
    "<div>Class:     <span class=\"salut\"></span> </div>"
  );


  $templateCache.put('snippets/use-show-code.html',
    "<div show-code=\"/app/directives/show-code.js\" mode=\"javascript\"></div>\n" +
    "<div show-code=\"/app/snippets/use-show-code.html\" mode=\"javascript\"></div>"
  );


  $templateCache.put('snippets/use-tabs.html',
    "<tabs>\n" +
    "  <tab title=\"Double Rainbow\">\n" +
    "    <img src=\"/img/double-rainbow.jpg\" />\n" +
    "  </tab>\n" +
    "  <tab title=\"Star Wars Kid\">\n" +
    "    <img src=\"/img/starwars-kid.jpg\" />\n" +
    "  </tab>\n" +
    "  <tab title=\"Chocolate Rain\">\n" +
    "  \t<img src=\"/img/chocolate-rain.gif\" />\n" +
    "  </tab>\n" +
    "</tabs>"
  );


  $templateCache.put('snippets/user-control-directive.html',
    "<userbadge user=\"selectedUser\"></userbadge>\n" +
    "\n" +
    "<div navigation-panel=\"destinations\"></div>\n" +
    "\n" +
    "<newclient ng-model=\"newClient\"></newclient>"
  );


  $templateCache.put('snippets/what-does-the-fox-say.html',
    "<what-does-the-fox-say></what-does-the-fox-say>"
  );

}]);
