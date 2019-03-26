// My Additional JS For Secondary Student Sign up
$(document).ready(function(){


    $("#school_project_info").hide();
    $("#school_proj_doc_upload").hide();
    $("#school_proj_review").hide();

    $("#next1").click(function(e){
      e.preventDefault();
      $("#school_basic_info").slideUp(1000);
          $("#school_project_info").slideDown(1000);
    });
  
      $("#back2").click(function(e){
      e.preventDefault();
          $("#school_project_info").slideUp(1000);
          $("#school_basic_info").slideDown(1000);
    });
  
      $("#next2").click(function(e){
      e.preventDefault();
      $("#school_project_info").slideUp(1000);
          $("#school_proj_doc_upload").slideDown(1000);
    });
  
      $("#back3").click(function(e){
      e.preventDefault();
          $("#school_proj_doc_upload").slideUp(1000);
          $("#school_project_info").slideDown(1000);
    });
  
    $("#next3").click(function(e){
      e.preventDefault();
      $("#school_proj_doc_upload").slideUp(1000);
      $(".basic-side-bar").slideUp(1000);
      $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
          $("#school_proj_review").slideDown(1000);
  
      // Show data as review
  
      // Academic Profile Review
      $('#1').html($('#school_name_label').text());
      $('#1a').html($('#school_name_value').val());
  
      $('#2').html($('#school_established_label').text());
      $('#2a').html($('#school_established_day').val() + "/" + $('#school_established_month').val() + "/" + $('#school_established_year').val());
  
      $('#3').html($('#school_country_label').text());
      $('#3a').html($('#school_country_value').val());
  
      $('#4').html($('#school_state_label').text());
      $('#4a').html($('#school_state_value').val());
  
      $('#5').html($('#school_city_label').text());
      $('#5a').html($('#sec_city_value').val());
  
      $('#6').html($('#school_population_label').text());
      $('#6a').html($('#school_population_value').val());
  
      $('#7').html($('#school_project_title_label').text());
      $('#7a').html($('#school_project_title_value').val());
  
      $('#8').html($('#school_project_label').text());
      $('#8a').html($('#school_project_value').val());
  
      // Additional Information Review
      $('#9').html($('#school_benefit_label').text());
      $('#9a').html($('#school_benefit_value').val());
  
      $('#10').html($('#school_document_label').text());
      $('#10a').html($('#school_document_value').val());
  
      
    });
  
    $("#back4").click(function(e){
      e.preventDefault();
      $('#sec-form-holder').removeClass('col-lg-12 col-md-12 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-6 col-md-6 col-sm-12');
      $("#school_proj_review").slideUp(1000);
      $(".basic-side-bar").slideDown(1000);
      $("#school_basic_info").slideDown(1000);
  
    });
  
  });
  