// My Additional JS For Secondary Student Sign up
$(document).ready(function(){

    $("#fund_request_bank_info").hide();
    $("#fund_request_review").hide();

    $("#next1").click(function(e){
      e.preventDefault();
      $("#fund_request_info").slideUp(1000);
          $("#fund_request_bank_info").slideDown(1000);
    });
  
      $("#back2").click(function(e){
      e.preventDefault();
          $("#fund_request_bank_info").slideUp(1000);
          $("#fund_request_info").slideDown(1000);
    });
  
    $("#next2").click(function(e){
      e.preventDefault();
      $("#fund_request_bank_info").slideUp(1000);
      $(".basic-side-bar").slideUp(1000);
      $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
          $("#fund_request_review").slideDown(1000);
  
      // Show data as review
  
      // Academic Profile Review
      $('#1').html($('#how_much_label').text());
      $('#1a').html($('#how_much_value').val());
  
      $('#2').html($('#why_you_need_label').text());
      $('#2a').html($('#why_you_need_value').val());
  
      $('#3').html($('#how_soon_label').text());
      $('#3a').html($('#how_soon_value').val());
  
      $('#4').html($('#bank_name_label').text());
      $('#4a').html($('#bank_name_value').val());
  
      $('#5').html($('#account_name_label').text());
      $('#5a').html($('#account_name_value').val());
  
      $('#6').html($('#account_number_label').text());
      $('#6a').html($('#account_number_value').val());

    });
  
    $("#back3").click(function(e){
      e.preventDefault();
      $('#sec-form-holder').removeClass('col-lg-12 col-md-12 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-6 col-md-6 col-sm-12');
      $("#fund_request_review").slideUp(1000);
      $(".basic-side-bar").slideDown(1000);
      $("#fund_request_info").slideDown(1000);
  
    });
  
  });
  