
angular.module('ImageStorage', [])

.factory('getPhotos', function(){


})

.factory('Localized', function(){

  var local = {};

  local.db = [ 
  {id: 0, keyWord: '385#', image: 'http://scontent-b-dfw.cdninstagram.com/hphotos-xaf1/t51.2885-15/10607938_294319204095723_950231021_n.jpg'},
  {id: 1, keyWord: 'love', image: 'http://photos-a.ak.instagram.com/hphotos-ak-xpa1/925057_1479510908978536_916675241_n.jpg'},
  {id: 2, keyWord: 'swing', image: 'http://photos-d.ak.instagram.com/hphotos-ak-xfa1/914731_736981239678323_2034575128_n.jpg'},
  {id: 3, keyWord: 'baby&me', image: 'http://photos-f.ak.instagram.com/hphotos-ak-xfa1/10432013_861848833842565_2112626240_n.jpg'},
  {id: 4, keyWord: 'us', image: 'http://scontent-a-dfw.cdninstagram.com/hphotos-xfp1/t51.2885-15/10401685_308250586005918_1187856595_n.jpg'},
  ];

  return local;

})