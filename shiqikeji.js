var app = angular.module('sqkjApp',[]);
app.controller('sqkjCtrl',function($scope){
  $scope.carousel = {
    acts: [
      {background:'https://d13yacurqjgara.cloudfront.net/users/93954/screenshots/2774592/drib1.png'},
      {background:'1465801038263.jpg'},
      {background:'#a2ddfe'}
    ],
    currentAct: 0,
    isActive: function(i){
      if(i==this.currentAct){
        return 'active'
      }
    },
    runNext: function(){
      this.currentAct++;
      if(this.currentAct >= this.acts.length){
        this.currentAct = 0;
      }
    },
    runPrevious: function(){
      this.currentAct--;
      if(this.currentAct < 0){
        this.currentAct = this.acts.length-1;
      }
    },
    runTo: function(i){
      this.currentAct = i;
    }
  }
})
