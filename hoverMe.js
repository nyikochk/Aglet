/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M4Xrh8OP1Jk'
  });
}

$(document).on('mouseover', '#player', function() {
  player.playVideo();
});
$(document).on('mouseout', '#player', function() {
  player.pauseVideo();
});
$(function() {

   $("body").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });

});