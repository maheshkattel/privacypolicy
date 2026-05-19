$(document).ready(function(){
  function run(){
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
      if(diffStart>604800){
        t.parent().find("#match-hour").text(moment(d).format("MMM D, LT"));
        t.parent().find(".match-date").html("Not Started").addClass("not-start");
        t.parents(".match-event").addClass("notstart");
      }else if(diffStart>0){
        var days=Math.floor(diffStart/86400);
        var hrs=Math.floor((diffStart%86400)/3600);
        var mins=Math.floor((diffStart%3600)/60);
        var secs=diffStart%60;
        var cd=days>0 ? days+"d "+hrs+"h "+mins+"m" : hrs+"h "+mins+"m "+secs+"s";
        t.parent().find("#match-hour").text(moment(d).format("MMM D, LT"));
        t.parent().find(".match-date").html("⏱ "+cd).addClass("soon");
        t.parents(".match-event").addClass("ch-soon");
      }else if(diffEnd>0){
        var el=Math.floor(Math.abs(diffStart)/60);
        t.parent().find("#match-hour").text(moment(d).format("MMM D, LT")+" | "+el+"'");
        t.parent().find(".match-date").html("Live").addClass("live");
        t.parents(".match-event").addClass("ch-live");
      }else{
        t.parent().find("#match-hour").text(moment(d).format("MMM D, LT"));
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
      if(diffStart>604800){
        t.parent().find("#matchs-hour").text(moment(d).format("MMM D, LT"));
        t.parent().find(".matchs-date").html("not started").addClass("not-start");
        t.parents(".match-post").addClass("not-start");
      }else if(diffStart>0){
        var days=Math.floor(diffStart/86400);
        var hrs=Math.floor((diffStart%86400)/3600);
        var mins=Math.floor((diffStart%3600)/60);
        var secs=diffStart%60;
        var cd=days>0 ? days+"d "+hrs+"h "+mins+"m" : hrs+"h "+mins+"m "+secs+"s";
        t.parent().find("#matchs-hour").text(moment(d).format("MMM D, LT"));
        t.parent().find(".matchs-date").html("⏱ "+cd).addClass("son");
        t.parents(".match-post").addClass("ch-son");
      }else if(diffEnd>0){
        var el=Math.floor(Math.abs(diffStart)/60);
        t.parent().find("#matchs-hour").text(moment(d).format("MMM D, LT")+" | "+el+"'");
        t.parent().find(".matchs-date").html("Live").addClass("lives");
        t.parents(".match-post").addClass("ch-lives");
      }else{
        t.parent().find("#matchs-hour").text(moment(d).format("MMM D, LT"));
        t.parent().find(".matchs-date").html("Match Ended").addClass("ends");
        t.parents(".match-post").addClass("ch-ends");
      }
    });
  }
  run();
  setInterval(run,1000);
});
