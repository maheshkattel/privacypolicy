$(document).ready(function(){
  function updateMatchTimers(){
    $(".match-event .match-date").each(function(){
      var t=$(this),a=t.data("start"),e=t.data("gameends"),
          now=moment.utc(),
          start=moment(a,"YYYY-MM-DD HH:mm:ssZ"),
          end=moment(e,"YYYY-MM-DD HH:mm:ssZ"),
          diffStart=start.diff(now,"seconds"),
          diffEnd=end.diff(now,"seconds"),
          d=moment.utc(a).toDate();
      t.parents(".match-event").removeClass("notstart ch-soon ch-live ch-end");
      t.parent().find(".match-date").removeClass("not-start soon live end");
      if(diffStart>3600){
        t.parent().find("#match-hour").text(moment(d).format("LT"));
        t.parent().find(".match-date").html("Not Started").addClass("not-start");
        t.parents(".match-event").addClass("notstart");
      } else if(diffStart>0){
        var h=Math.floor(diffStart/3600),m=Math.floor((diffStart%3600)/60),s=diffStart%60;
        var cd=(h>0?h+"h ":"")+(m<10?"0":"")+m+"m "+(s<10?"0":"")+s+"s";
        t.parent().find("#match-hour").text(moment(d).format("LT"));
        t.parent().find(".match-date").html("⏱ "+cd).addClass("soon");
        t.parents(".match-event").addClass("ch-soon");
      } else if(diffEnd>0){
        var elapsed=Math.floor(Math.abs(diffStart)/60);
        t.parent().find("#match-hour").text(moment(d).format("LT")+" | "+elapsed+"'");
        t.parent().find(".match-date").html("Live").addClass("live");
        t.parents(".match-event").addClass("ch-live");
      } else {
        t.parent().find("#match-hour").text(moment(d).format("LT"));
        t.parent().find(".match-date").html("Match Ended").addClass("end");
        t.parents(".match-event").addClass("ch-end");
      }
    });
    $(".match-post .matchs-date").each(function(){
      var t=$(this),a=t.data("start"),e=t.data("gameends"),
          now=moment.utc(),
          start=moment(a,"YYYY-MM-DD HH:mm:ssZ"),
          end=moment(e,"YYYY-MM-DD HH:mm:ssZ"),
          diffStart=start.diff(now,"seconds"),
          diffEnd=end.diff(now,"seconds"),
          d=moment.utc(a).toDate();
      t.parents(".match-post").removeClass("not-start ch-son ch-lives ch-ends");
      t.parent().find(".matchs-date").removeClass("not-start son lives ends");
      if(diffStart>1800){
        t.parent().find("#matchs-hour").text(moment(d).format("LT"));
        t.parent().find(".matchs-date").html("not started").addClass("not-start");
        t.parents(".match-post").addClass("not-start");
      } else if(diffStart>0){
        var h=Math.floor(diffStart/3600),m=Math.floor((diffStart%3600)/60),s=diffStart%60;
        var cd=(h>0?h+"h ":"")+(m<10?"0":"")+m+"m "+(s<10?"0":"")+s+"s";
        t.parent().find("#matchs-hour").text(moment(d).format("LT"));
        t.parent().find(".matchs-date").html("⏱ "+cd).addClass("son");
        t.parents(".match-post").addClass("ch-son");
      } else if(diffEnd>0){
        var elapsed=Math.floor(Math.abs(diffStart)/60);
        t.parent().find("#matchs-hour").text(moment(d).format("LT")+" | "+elapsed+"'");
        t.parent().find(".matchs-date").html("Live").addClass("lives");
        t.parents(".match-post").addClass("ch-lives");
      } else {
        t.parent().find("#matchs-hour").text(moment(d).format("LT"));
        t.parent().find(".matchs-date").html("Match Ended").addClass("ends");
        t.parents(".match-post").addClass("ch-ends");
      }
    });
  }
  updateMatchTimers();
  setInterval(updateMatchTimers,1000);
});
