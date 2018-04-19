angular.module('myApplication').directive('contact', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/contactList/contact.template.html',
    scope: {
      list: '=',
      delete: '&'
    },
    link: function($scope) {},
  };
});
