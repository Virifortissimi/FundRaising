// My Additional JS For Secondary Student Sign up
$(document).ready(function(){



    
    $("#ind_sponsor_employment").hide();
    $("#ind_sponsor_document_upload").hide();
    $("#ind_sponsor_addition_info").hide();
    $("#ind_sponsor_review_info").hide();

    $("#next1").click(function(e){
      e.preventDefault();
      $("#ind_sponsor_basics").slideUp(1000);
          $("#ind_sponsor_employment").slideDown(1000);
    });
  
      $("#back2").click(function(e){
      e.preventDefault();
          $("#ind_sponsor_employment").slideUp(1000);
          $("#ind_sponsor_basics").slideDown(1000);
    });
  
      $("#next2").click(function(e){
      e.preventDefault();
      $("#ind_sponsor_employment").slideUp(1000);
          $("#ind_sponsor_addition_info").slideDown(1000);
    });
  
      $("#back3").click(function(e){
      e.preventDefault();
          $("#ind_sponsor_addition_info").slideUp(1000);
          $("#ind_sponsor_employment").slideDown(1000);
    });
  
      $("#next3").click(function(e){
      e.preventDefault();
      $("#ind_sponsor_addition_info").slideUp(1000);
          $("#ind_sponsor_document_upload").slideDown(1000);
    });
  
      $("#back4").click(function(e){
      e.preventDefault();
          $("#ind_sponsor_document_upload").slideUp(1000);
          $("#ind_sponsor_addition_info").slideDown(1000);
    });
  
    $("#next4").click(function(e){
      e.preventDefault();
      $("#ind_sponsor_document_upload").slideUp(1000);
      $(".basic-side-bar").slideUp(1000);
      $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
          $("#ind_sponsor_review_info").slideDown(1000);
  
      // Show data as review
  
      // Academic Profile Review
      $('#1').html($('#ind_sponsor_birthdate_label').text());
      $('#1a').html($('#ind_sponsor_day_of_birth').val() + "/" + $('#ind_sponsor_month_of_birth').val());

      $('#2').html($('#ind_sponsor_gender_label').text());
      $('#2a').html($('#ind_sponsor_gender_value').val());
  
      $('#3').html($('#ind_sponsor_address_label').text());
      $('#3a').html($('#ind_sponsor_address_value').val());
  
      $('#4').html($('#ind_sponsor_country_label').text());
      $('#4a').html($('#ind_sponsor_country_value').val());
  
      $('#5').html($('#ind_sponsor_state_label').text());
      $('#5a').html($('#ind_sponsor_state_value').val());
  
      $('#6').html($('#ind_sponsor_city_label').text());
      $('#6a').html($('#ind_sponsor_city_value').val());
  
      $('#7').html($('#ind_sponsor_job_title_label').text());
      $('#7a').html($('#ind_sponsor_job_title_value').val());
  
      $('#8').html($('#ind_sponsor_company_name_label').text());
      $('#8a').html($('#ind_sponsor_company_name_value').val());
  
      // Additional Information Review
      $('#9').html($('#ind_sponsor_nin_label').text());
      $('#9a').html($('#ind_sponsor_nin_value').val());
  
      $('#10').html($('#ind_sponsor_more_label').text());
      $('#10a').html($('#ind_sponsor_more_value').val());
  
      $('#11').html($('#ind_sponsor_more_label').text());
      $('#11a').html($('#ind_sponsor_more_value').val());
  
      $('#12').html($('#ind_sponsor_document_label').text());
      $('#12a').html($('#ind_sponsor_document_value').val());
  
    });
  
    $("#back5").click(function(e){
      e.preventDefault();
      $('#sec-form-holder').removeClass('col-lg-12 col-md-12 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-6 col-md-6 col-sm-12');
      $("#ind_sponsor_review_info").slideUp(1000);
      $(".basic-side-bar").slideDown(1000);
      $("#ind_sponsor_basics").slideDown(1000);
  
    });
  
  });
  