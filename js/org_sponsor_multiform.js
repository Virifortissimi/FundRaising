// My Additional JS For Secondary Student Sign up
$(document).ready(function(){


    $("#org_sponsor_info").hide();
    $("#org_sponsor_upload").hide();
    $("#org_sponsor_review_info").hide();

    $("#next1").click(function(e){
      e.preventDefault();
      $("#org_sponsor_basics").slideUp(1000);
          $("#org_sponsor_info").slideDown(1000);
    });
  
      $("#back2").click(function(e){
      e.preventDefault();
          $("#org_sponsor_info").slideUp(1000);
          $("#org_sponsor_basics").slideDown(1000);
    });
  
      $("#next2").click(function(e){
      e.preventDefault();
      $("#org_sponsor_info").slideUp(1000);
          $("#org_sponsor_upload").slideDown(1000);
    });
  
      $("#back3").click(function(e){
      e.preventDefault();
          $("#org_sponsor_upload").slideUp(1000);
          $("#org_sponsor_info").slideDown(1000);
    });
  
    $("#next3").click(function(e){
      e.preventDefault();
      $("#org_sponsor_upload").slideUp(1000);
      $(".basic-side-bar").slideUp(1000);
      $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
          $("#org_sponsor_review_info").slideDown(1000);
  
      // Show data as review
  
      // Academic Profile Review
      $('#1').html($('#org_sponsor_orgname_label').text());
      $('#1a').html($('#org_sponsor_orgname_value').val());

      $('#2').html($('#org_sponsor_industry_label').text());
      $('#2a').html($('#org_sponsor_industry_value').val());

      $('#3').html($('#org_sponsor_address_label').text());
      $('#3a').html($('#org_sponsor_address_value').val());
  
      $('#4').html($('#org_sponsor_country_label').text());
      $('#4a').html($('#org_sponsor_country_value').val());
  
      $('#5').html($('#org_sponsor_state_label').text());
      $('#5a').html($('#org_sponsor_state_value').val());
  
      $('#6').html($('#org_sponsor_city_label').text());
      $('#6a').html($('#org_sponsor_city_value').val());
  
      $('#7').html($('#org_sponsor_cac_number_label').text());
      $('#7a').html($('#org_sponsor_cac_number_value').val());
  
      // Additional Information Review
      $('#8').html($('#org_sponsor_cac_tin_label').text());
      $('#8a').html($('#org_sponsor_cac_tin_value').val());
  
      $('#9').html($('#org_sponsor_value_mission_label').text());
      $('#9a').html($('#org_sponsor_value_mission_value').val());

      $('#10').html($('#org_sponsor_whyjoin_label').text());
      $('#10a').html($('#org_sponsor_whyjoin_value').val());

      $('#11').html($('#org_sponsor_website_label').text());
      $('#11a').html($('#org_sponsor_website_value').val());
  
      $('#12').html($('#org_sponsor_document_label').text());
      $('#12a').html($('#org_sponsor_document_value').val());

      
    });
  
    $("#back4").click(function(e){
      e.preventDefault();
      $('#sec-form-holder').removeClass('col-lg-12 col-md-12 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-6 col-md-6 col-sm-12');
      $("#org_sponsor_review_info").slideUp(1000);
      $(".basic-side-bar").slideDown(1000);
      $("#org_sponsor_basics").slideDown(1000);
  
    });
  
  });
  