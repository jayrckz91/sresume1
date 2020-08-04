 // $('.main').ready(function(){
 //
 //    var controller1= new ScrollMagic.Controller();
 //
 //    var ourscene1 = new ScrollMagic.Scene({
 //      triggerElement: '#mainbox'
 //    })
 //    .setClassToggle('.cube2,.cube3,.cube4,.cube5,.cube-content','slide-in')
 //    .addIndicators()
 //    .addTo(controller1);
 //    });
 //
 //
 //    $('.red').ready(function(){
 //
 //        var controller2= new ScrollMagic.Controller();
 //
 //        var ourscene2 = new ScrollMagic.Scene({
 //          triggerElement: '#red-main'
 //        })
 //        .setClassToggle('#red1','side-in')
 //        .addIndicators()
 //        .addTo(controller2);
 //      });
 //
 //      $('.red-line').ready(function(){
 //
 //          var controller3= new ScrollMagic.Controller();
 //
 //          var ourscene3 = new ScrollMagic.Scene({
 //            triggerElement: '#horizontal-line-1'
 //          })
 //          .setClassToggle('#red-line-1,#h-career-stmt','side-in')
 //          .addIndicators()
 //          .addTo(controller3);
 //        });
 //
 //
 //        $('#interest-container').ready(function(){
 //
 //            var controller4= new ScrollMagic.Controller();
 //
 //            var ourscene4 = new ScrollMagic.Scene({
 //              triggerElement: '#horizontal-line-1'
 //            })
 //            .setClassToggle('#red-line-1,#h-career-stmt','side-in')
 //            .addIndicators()
 //            .addTo(controller3);
 //          });
 //


var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.Width;

function openEducation(evt, tabName)
{
  var i, education_tabcontent2, education_tablinks;
  education_tabcontent2 = document.getElementsByClassName("education-tabcontent2");

  for (i = 0; i < education_tabcontent2.length; i++)
  {
    education_tabcontent2[i].style.display = "none";
  }

  education_tablinks = document.getElementsByClassName("education-tablinks");
  for (i = 0; i < education_tablinks.length; i++) {
    education_tablinks[i].className = education_tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



if(screenWidth<=600)
{
  document.getElementById("defaultOpen").id.replace("defaultOpen","")

}
else{
  document.getElementById("defaultOpen").click();
}


function personalDetails()
{
    var clsname=document.getElementsByClassName("personal-details-straight-line");
    var elmnt = (window.innerWidth > 0) ? window.innerWidth : screen.Width;

    //  txt += "Width including padding and border: " + elmnt.offsetWidth + "px";
    // document.getElementById("demo").innerHTML = "Width including padding and border: " + elmnt + "px";



    if(elmnt<= 600) {

    document.getElementById("personal-details-straight-line1").className = "personal-details-straight-line-sm";
    document.getElementById("personal-details").className = "personal-details-sm";
    document.getElementById("personal-details-DOB").className = "personal-details-DOB-sm";
    document.getElementById("personal-details-triangle-down1").style.display = "none";
    document.getElementById("personal-details-GENDER").className = "personal-details-GENDER-sm";
    document.getElementById("personal-details-triangle-up1").style.display = "none";
    document.getElementById("personal-details-marital-status").className = "personal-details-marital-status-sm";
    document.getElementById("personal-details-triangle-down2").style.display = "none";
    document.getElementById("personal-details-nationality").className = "personal-details-nationality-sm";
    document.getElementById("personal-details-triangle-up2").style.display = "none";
    document.getElementById("personal-details-language-known").className = "personal-details-language-known-sm";
    document.getElementById("personal-details-triangle-down3").style.display = "none";
  }

  else{
    document.getElementById("personal-details-triangle-left1").style.display = "none";
    document.getElementById("personal-details-triangle-right1").style.display = "none";
    document.getElementById("personal-details-triangle-left2").style.display = "none";
    document.getElementById("personal-details-triangle-right2").style.display = "none";
    document.getElementById("personal-details-triangle-left3").style.display = "none";
  }
}
