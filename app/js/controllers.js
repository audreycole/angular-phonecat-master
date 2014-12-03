'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
     $scope.phones = Phone.query(function (phones){
      var i = 0;
      var j = 0;
      var test;
      for(test in phones){
        Phone.get({phoneId:phones[i].id}, function(phone){
          $scope.phones[j]['camera']=phone.camera.primary;
          $scope.phones[j]['weight']=phone.sizeAndWeight.weight;

          $scope.phones[j]['battery']=parseInt(phone.battery.talkTime,10);
          $scope.phones[j]['screenSize']=parseFloat(phone.display.screenSize,10);
          j++;
        });
        i++;
      }
    });
        $scope.orderProp = 'age';
        $scope.quickView = function(phoneId) {
          alert(phoneId.name + "\n" + "\n" + "Weight: " + phoneId.weight + "\n" + "Talk-Time: " + phoneId.battery + "\n" + "Screen Size: " + phoneId.screenSize);
        }
  }]);

/*phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
  $scope.phones = Phone.query(function (phones){
    phones.forEach(function(phone){
      Phone.get({
        phoneId: phone.id
      }, function(_phone){
        angular.extend(phone, _phone);
      });
    });
  });
  $scope.orderProp = 'age';
}]);
*/

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

phonecatControllers.controller('PhoneCompareCtrl', ['$scope', '$routeParams', 'Phone', 
  function($scope, $routeParams, Phone) {
    $scope.phone1 = Phone.get({phoneId: $routeParams.phoneId1}, function(phone1) {
      $scope.mainImageUrl1 = phone1.images[0];
    });

    $scope.phone2 = Phone.get({phoneId: $routeParams.phoneId2}, function(phone2) {
      $scope.mainImageUrl2 = phone2.images[0];
    });
    
  }]);