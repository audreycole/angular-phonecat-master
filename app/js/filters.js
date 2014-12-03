'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

angular.module('checkNoneFilters',[]).filter('na', function(){
  return function(input) {
    if(input == ""){
        return "Not Available";
    }
    else{
        return input;
    }
  };
});