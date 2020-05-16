angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.today = moment();
  $scope.myArrayOfDates = [];
  $scope.highlightDays = [
      {date: moment().date(2).valueOf(), css: 'holiday', selectable: false,title: 'Holiday time !'},
      {date: moment().date(14).valueOf(), css: 'off', selectable: false,title: 'We don\'t work today'},
      {date: moment().date(25).valueOf(), css: 'birthday', selectable: true,title: 'I\'m thir... i\'m 28, seriously, I mean ...'}
  ];

  $scope.$watch('myArrayOfDates', function(newValue, oldValue){
      if(newValue){
          console.log('my array changed, new size : ' + newValue);
      }
  }, true);

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
