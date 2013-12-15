App.controller('repeaterDemoCtrl', 
  function($scope) {
    $scope.getClass = function(wielder) {
      return wielder.toLowerCase()
                    .indexOf('darth') >= 0 ?
				     'sith' : 'jedi';
	};

    $scope.forceWielders = [
      'Darth Vader',
      'Obi-Wan Kenobi',
      'Luke Skywalker',
      'Yoda',
      'Qui-Gon Jinn',
      'Darth Maul',
      'Anakin Skywalker',
      'Darth Sidious',
      'Mace Windu'
    ];
});