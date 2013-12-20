App.factory('rickAstley', function() {
  var messages = [
    'Never gonna give you up',
    'Never gonna let you down',
    'Never gonna run around and desert you',
    'Never gonna make you cry',
    'Never gonna say goodbye',
    'Never gonna tell a lie and hurt you'
  ];

  return {
    get: function() {
      return {
        count: 0,
        next: function() {
          return messages[this.count++ % messages.length];
        }  
      }
    }
  };
});