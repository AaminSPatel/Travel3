$(document).ready(function() {
  
    $("#start").html("This paragraph is added after document fully load");
   
  });
 
 function red() {
     $("#p2").show();
     
 }
 function red0() {
     $("#p2").hide();
     
 }
 function red1() {
      var val = $("#p2").html();
      alert(val);
 }
 function red2() {
     var vl = $("#p2 b").text();
     alert(vl);
 }
 function adc1() {
    var wl = $("#p2").append("This is Appended content.");
    
 }
 function adc() {
    var wl = $("#p2").prepend("This is prepended content.");
    
 }
 function adc2(){
     var ad1=$("<h3></h3>").text("This is new Html content it is Before the selected content");
     $("#p2").before(ad1);
 }
 function adc3(){
     var ad1=$("<h3></h3>").text("This is new Html content it is After the selected content");
     $("#p2").after(ad1);
 }
 // SELECTORS
 
 
 
 
 // set ATTRIBUTES
 $("a").attr("href","#");//atribute href is set to #
 $("table").removeAttr("border");//removeAttr is used to remove any attribute from any element
 $("table").removeAttr("class");//removeAttr is used to remove any attribute from any element
 
 //val() method allows us to get and set the values of form fields
 
 
 /*
 append() inserts content at the end of the selected elements.
 prepend() inserts content at the beginning of the selected elements.
 after() inserts content after the selected elements.
 before() inserts content before the selected elements.
 */
 function red4() {
    $("p").prepend("My name is");
    $("div:eq(1)").addClass("header");//this select 2nd div element and add its class header
 }
 function red5() {
    $("p").append("I am from Ujjain");
   // $("#start").before("cold Before");
    var txt = $("<p></p>").text("Hi");//this shortcut to create a element in one line
 $("#start").append(txt);
 $("div:eq(1)").removeClass("header");
 }
  
 $(function() {
   $("#add").on("click", function() {
     var val = $("#inp").val();
  if(val !== '') {
   var elem = $("<li></li>").text(val);
   $(elem).append("<button class='rem'>X</button>");
   $("#mylist").append(elem);
   $("#inp").val(""); }
    $(".rem").on("click", function() {
   $(this).parent().remove();
      });
   });
   $(".evee:eq(0) h2").on('click',function(){
     $(".evee:eq(0) h2").css({"fontSize":"30px" ,"color":"red" });
     $(".evee:eq(0) h2").text("Clicked");
   });
   $(".evee:eq(1) h2").on('dblclick',function(){
     $(".evee:eq(1) h2").css({"fontSize":"30px" ,"color":"green" });
     $(".evee:eq(1) h2").text("Double Clicked");
   });
   $(".evee:eq(2) h2").on('mouseenter',function(){
     $(".evee:eq(2) h2").css({"fontSize":"30px" ,"color":"orange" });
     $(".evee:eq(2) h2").text("Mouse Entered");
   });
     $(".evee:eq(3) h2").on('mouseleave',function(){
     $(".evee:eq(3) h2").css({"fontSize":"30px" ,"color":"magenta" });
     $(".evee:eq(3) h2").text("Mouse Leave");
   });
    $(".evee:eq(4) h2").on('mouseover',function(){
     $(".evee:eq(4) h2").css({"fontSize":"30px" ,"color":"blue" });
     $(".evee:eq(4) h2").text("Mouse Over");
   });
   $(".evee:eq(5) #kd").on('keydown',function(){
     $(".evee:eq(5) p").css({"fontSize":"20px","color":"grey","fontFamily":"cursive"});
     $(".evee:eq(5) p").text($('#kd').val());
   });
    $(".evee:eq(6) #ku").on('keyup',function(){
     $(".evee:eq(6) h2").css({"fontSize":"30px" ,"color":"green" });
     $(".evee:eq(6) h2").text("Key Up");
   });
  $("   .evee:eq(7) #foc").on('focus',function(){
     $(".evee:eq(7) h2").css({"fontSize":"30px" ,"color":"orange" });
     $(".evee:eq(7) h2").text("Focus");
   });
  $("   .evee:eq(8) #bl").on('blur',function(){
     $(".evee:eq(8) h2").css({"fontSize":"30px" ,"color":"red" });
     $(".evee:eq(8) h2").text("Blured");
   });
  $("   .evee:eq(9) #sub").on('submit',function(){
     $(".evee:eq(9) h2").css({"fontSize":"30px" ,"color":"orange" });
     $(".evee:eq(9) h2").text("Submited");
   });
   $("   .evee:eq(9) #chn").on('change',function(){
     $(".evee:eq(9) h2").css({"fontSize":"30px" ,"color":"orange" });
     $(".evee:eq(9) h2").text("Changed");
   });
   $(".eve22").on("resize",function(){
    $(".eve22 img").src("img/pak2.avif");
   });
   $(document).on("scroll",function(){
    $(".eve23 img").css("borderRadius","20px");
    $(".eve23 h1").css("color","red");
   });
   
 });
 function bgc(){
     var bgv =$('#bgclr').val();
      $('#csss').css("backgroundColor",bgv);
 
 }