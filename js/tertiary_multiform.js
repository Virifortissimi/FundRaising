//Additional JS For Tertiary Student Sign up
$(document).ready(function(){



    $("#teriary-school-info").hide();
    $("#tert_additional_info").hide();
    $("#tert_document_upload").hide();
    $("#tert_review_info").hide();



    tert_review_info

    $("#next1").click(function(e){
      e.preventDefault();
      $("#tertiary-basics").slideUp(1000);
          $("#teriary-school-info").slideDown(1000);
    });
  
      $("#back2").click(function(e){
      e.preventDefault();
          $("#teriary-school-info").slideUp(1000);
          $("#tertiary-basics").slideDown(1000);
    });
  
      $("#next2").click(function(e){
      e.preventDefault();
      $("#teriary-school-info").slideUp(1000);
          $("#tert_additional_info").slideDown(1000);
    });
  
      $("#back3").click(function(e){
      e.preventDefault();
          $("#tert_additional_info").slideUp(1000);
          $("#teriary-school-info").slideDown(1000);
    });
  
      $("#next3").click(function(e){
      e.preventDefault();
      $("#tert_additional_info").slideUp(1000);
          $("#tert_document_upload").slideDown(1000);
    });
  
      $("#back4").click(function(e){
      e.preventDefault();
          $("#tert_document_upload").slideUp(1000);
          $("#tert_additional_info").slideDown(1000);
    });
  
    $("#next4").click(function(e){
      e.preventDefault();
      $("#tert_document_upload").slideUp(1000);
      $(".basic-side-bar").slideUp(1000);
      $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
          $("#tert_review_info").slideDown(1000);
  
      // Show data as review
  
      // Tertiary Profile Review
      $('#1').html($('#tert_birth_day_label').text());
      $('#1a').html($('#tert_day_of_birth').val() + "/" + $('#tert_month_of_birth').val() + "/" + $('#tert_year_of_birth').val());

      $('#2').html($('#tert_gender_label').text());
      $('#2a').html($('#tert_gender').val());
  
      $('#3').html($('#tert_home_address_label').text());
      $('#3a').html($('#tert_home_address_value').val());
  
      $('#4').html($('#tert_country_label').text());
      $('#4a').html($('#tert_country_value').val());
  
      $('#5').html($('#tert_state_label').text());
      $('#5a').html($('#tert_state_value').val());
  
      $('#6').html($('#tert_city_label').text());
      $('#6a').html($('#tert_city_value').val());
  
      $('#7').html($('#tert_school_name_label').text());
      $('#7a').html($('#tert_school_name_value').val());
  
      $('#8').html($('#tert_school_address_label').text());
      $('#8a').html($('#tert_school_address_value').val());
  
      // Additional Information Review
      $('#9').html($('#tert_select_degree_label').text());
      $('#9a').html($('#tert_select_degree_value').val());
  
      $('#10').html($('#tert_select_course_lael').text());
      $('#10a').html($('#tert_select_course_value').val());
  
      $('#11').html($('#tert_year_started_label').text());
      $('#11a').html($('#tert_year_started_value').val());
  
      $('#12').html($('#tert_present_year_label').text());
      $('#12a').html($('#tert_present_year_value').val());
  
      $('#13').html($('#tert_cgpa_label').text());
      $('#13a').html($('#tert_cgpa_value').val());
  
  
      // School Basics Review
     
  
      $('#14').html($('#tert_career_aspi_label').text());
      $('#14a').html($('#tert_career_aspi_value').val());
  
      $('#15').html($('#tert_challenges_label').text());
      $('#15a').html($('#tert_challenges_value').val());
  
      $('#16').html($('#tert_mantra_label').text());
      $('#16a').html($('#tert_mantra_value').val());
  
      $('#17').html($('#tert_mentor_label').text());
      $('#17a').html($('#tert_mentor_value').val());
  
      $('#18').html($('#tert_story_label').text());
      $('#18a').html($('#tert_story_value').val());
      // School Document
  
      $('#19').html($('#tert_document_label').text());
      $('#19a').html($('#tert_document_value').val());
    });
  
    $("#back5").click(function(e){
      e.preventDefault();
      $('#sec-form-holder').removeClass('col-lg-12 col-md-12 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-6 col-md-6 col-sm-12');
      $("#tert_review_info").slideUp(1000);
      $(".basic-side-bar").slideDown(1000);
      $("#tertiary-basics").slideDown(1000);
  
    });
  
  });
  