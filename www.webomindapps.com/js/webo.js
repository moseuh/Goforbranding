$(document).ready(function()
{
  $("#footer-submit").click(function()
  {
	    
	  
	  name=$("#footer_name").val();
	  email=$("#footer_email").val();
	  phone=$("#footer_phone").val();
	  
	  if(name !="" && email!="" && phone !="")
	  {
		  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		  if(!regex.test(email)) 
		  {
			$("#footer_error").css("display","none");
			$("#footer_email_error").css("display","");
		  }
		  else
		  {
			  if (phone.length < 10)
				{
					$("#footer_error").css("display","none");
					$("#footer_email_error").css("display","none");
					
					$("#footer_mobile_error").css("display","");
					$('#footer_phone').val('');
					$('#footer_phone').focus();
				}
				else
				{
					$("#footer_error").css("display","none");
					$("#footer_email_error").css("display","none");
				   document.getElementById("footer_submit").click();
				}
		  }
	  }
	  else
	  {
		   $("#footer_error").css("display","");
	  }
  }
  );
  $("#slider-submit").click(function()
  {
	  name=$("#abc").val();
	  email=$("#def").val();
	  phone=$("#hij").val();
	  
	  if(name !="" && email!="" && phone !="")
	  {
		  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		  if(!regex.test(email)) 
		  {
			$("#slider_error").css("display","none");
			$("#slider_email_error").css("display","");
		  }
		  else
		  {
			  if (phone.length < 10)
				{
					$("#slider_error").css("display","none");
					$("#slider_email_error").css("display","none");
					$("#slider_mobile_error").css("display","");
					$('#hij').val('');
					$('#hij').focus();
				}
				else
				{
					if(grecaptcha.getResponse() == "") 
					{
						$("#slider_error").css("display","none");
						$("#slider_mobile_error").css("display","none");
						$("#slider_email_error").css("display","none");
						$("#slider_recaptcha_error").css("display","");
					}
					else
					{
						$("#slider_recaptcha_error").css("display","none");
						$("#slider_error").css("display","none");
						$("#slider_email_error").css("display","none");
						document.getElementById("submit_slider").click();
					}
				}
		  }
  
		   
	  }
	  else
	  {
		   $("#slider_error").css("display","");
	  }
  }
  );
});