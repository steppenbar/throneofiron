$(document).ready(function() {

    function generateLyric() {
      var lyrics = [
        ["Measured my speaker cables last night.", "Realized why the 400 PS is made for multiple 4 ohm outputs and not just a single 2 or 1.6 ohm output."],
        ["Because at 2 ohms, 20% of your amps power is going into heating up your speaker cable", "assuming you have 8-12 foot speaker cables."],
        ["At 4, 8, or 16 ohms, the resistance of the speaker cables is much less important.", "Higher voltage. Lower current. So less losses in the cables. More efficiency means more volume."],
        ["So solid state amps should be made with higher impedances in mind, ", "not factoring in damping."],
        ["The heating of wire is also why tube amps are pretty limited in size. .", "Transformer mass grows exponentially once you hit 300-400 watts."],
        ["My two 400 PS amps will be dumping 120 watts of power just in the 6 speaker cables.", "If they ran a single 2 ohm load each, and only 2 cables total, the losses would be on order of 250+ watts. Gotta love having a 970 watt stereo tube rig."],
        ["Anybody else think about this? ", "Published"]
      ];
  
      var randomNumber = Math.floor(Math.random() * lyrics.length);
  
      var lyric = lyrics[randomNumber][0];
  
      $("#lyric").text(lyrics[randomNumber][0]);
      $("#artist").text(lyrics[randomNumber][1]);
  
      $("#tweetBtn iframe").remove();
      var twit = lyrics[randomNumber][0] + " - " + lyrics[randomNumber][1];
      var x = $('<a></a>')
        
      $('#tweetBtn').append(x);
      twttr.widgets.load();
    }
  
    $("#generate-btn").click(function() {
      generateLyric();
    });
    
      generateLyric();
  
  });