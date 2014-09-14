(function() {
    
	var cas = document.createElement('script');
	cas.type = 'text/javascript';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(cas);
})();

$(document).ready(function(){

	var loginMsg = t('minimal_cas', 'Login with CAS');
    var altUrl = "?app=minimal_cas";
    var log_cas = true;

    $('.grouptop  #user').parent().hide();
    $('.groupbottom #password').parent().hide();
    $('#remember_login').hide();
    $('#remember_login+label').hide();
    //$('#submit').hide();
    //$('fieldset').hide();
    $('#submit').click(function( event ) {
        if(log_cas) {
            event.preventDefault();
            window.open(altUrl,"_self");
        }
    });
   
    /*
    $('<a id="login-cas-action" href="?app=minimal_cas" ></a>').css(
    {
        'text-decoration': 'none'
    }).appendTo('form');


	$('<img id="login-cas-img" src="' + OC.imagePath('minimal_cas', 'logo.svg') + '" title="'+ loginMsg +'" alt="'+ loginMsg +'" />').css(
	{
	}).appendTo('#login-cas-action');
    */

    //$('<button id="cas_login" class="login primary">Log in</button>').css(
    /*
    $('<input id="cas_login" class="login primary" type="submit" value="Connexion"></input>').css(
    {
        'margin-right': '7px'
    }).appendTo('form');
    */
    

    /*
    $('<p class="info">Ce service est réservé aux étudiants et personnel de l\'esir.</p>').css({
        'width' : '250px'
        'margin' : 'auto'
    }).appendTo('#header');
    */
    /*
    $('<button id="classic_login" >classic login</button>').css(
    {
        //width : 'auto'
    }).appendTo('footer .info');
    */
    //$('footer .info').append('<button id="classic_login" >classic login</button>');
    //$('form').after('<button id="classic_login" >classic login</button>');

    var footerInfo = $('body#body-login footer p.info');
    $(footerInfo).empty();
    $(footerInfo).text(" – "); 
    $(footerInfo).prepend($('<a>').attr({href : "http://owncloud.org" , target : "_blank"}).text("ownCloud"));
    $(footerInfo).append($('<a>').attr({id : "classic_login"}).text("classic login"));
    
    $('#classic_login').click(function () {
        /*
        $('#user').parent().slideToggle();
        $('#password').parent().slideToggle();
        $('#remember_login').slideToggle();
        $('#remember_login+label').slideToggle();
        $('#submit').slideToggle();
        */
     //   $('fieldset').slideToggle();
        log_cas = !log_cas;
        $('.grouptop #user').parent().slideToggle();
        $('.groupbottom #password').parent().slideToggle();
        $('#remember_login').fadeToggle();
        $('#remember_login+label').fadeToggle();
        /*
            if(event.isDefaultPrevented()) event.stopPropagation();
            else {
                event.preventDefault();
                open("http://perdu.com/","_self");
            }
            */
    });
});
