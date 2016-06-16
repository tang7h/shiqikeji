var app = angular.module('sqkjApp',[]);
app.controller('sqkjCtrl',function($scope,$interval){
  $scope.carousel = {
    acts: [
      {background:'http://images.apple.com/v/home/cq/images/heros/ios_10_wwdc_2016_medium.jpg'},
      {background:'http://images.apple.com/v/home/cq/images/heros/mac_os_wwdc_2016_medium.jpg'},
      {background:'http://images.apple.com/v/home/cn/images/heros/ipad_pro_family_medium.jpg'}
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
  $interval(function () {
    $scope.carousel.runNext();
  }, 3000);
  $scope.navs = [
    { name: '链接', addr: '#' },
    { name: '链接', addr: '#' },
    { name: '链接', addr: '#' },
    { name: '链接', addr: '#' }
  ]
  $scope.quickLinks = [
    {
      name: '下载',
      links: [
        { name: '快乐十分', addr: '#' },
        { name: '11选5', addr: '#' },
        { name: '今知商城', addr: '#' }
      ]
    },
    {
      name: '快速入口',
      links: [
        { name: '登陆', addr: '#' }
      ]
    }
  ]
  $scope.cards = [
    { addr: 'http://images.apple.com/v/home/cq/images/promos/iphone_6s_medium.jpg' },
    { addr: 'http://images.apple.com/v/home/cq/images/promos/ipadpro_medium.jpg' },
    { addr: 'product-card.jpg' },
    { addr: 'product-card.jpg' }
  ]
})
