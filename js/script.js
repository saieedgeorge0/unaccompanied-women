$(document).ready(function(){ 
    var prevWidth = $(window).width();

    
    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
    
    $(window).on("load", function() {
        if (getUrlVars()["send"]=="thanks") {
            $('#about').css("opacity", "0");
            $('#de-members').fadeOut(0);
            $('#de-repertoire').fadeOut(0);
            $('#de-contact').fadeOut(0);
            $('#de-about').fadeOut(0);
            $('#de-thanks').fadeIn(500);
        }
    });
    
    $('.mobile-menu').click(function () {
        $('#menu').css("visibility", "visible");
        $('.info').fadeOut(0)
        $('#menu').fadeOut(0)
        $(this).fadeOut(200);
        $('#menu').fadeIn(500);
        $('html,body').animate({
            scrollTop: $("#menu").offset().top
        });
        
    });
    
    $('.menu-item').click(function () {
        if($(window).width() < 797) {
            $('#menu').fadeOut(0)
            $('.mobile-menu').fadeIn(500);
        }
        $('.person').css("border", "none");
    });
    
    $('#facebook').click(function () {
        window.open('https://www.facebook.com/UnaccompaniedWomen/', '_blank');
    });
    $('#fb-ico').click(function () {
        window.open('https://www.facebook.com/UnaccompaniedWomen/', '_blank');
    });
    
    $('#video').click(function () {
        window.open('https://www.youtube.com/user/UnaccompaniedWomen', '_blank');
    });
    $('#vid-ico').click(function () {
        window.open('https://www.youtube.com/user/UnaccompaniedWomen', '_blank');
    });
    
    $('#email').click(function () {
        window.open('mailto:unaccompaniedwomen@gmail.com');
    });
    $('#em-ico').click(function () {
        window.open('mailto:unaccompaniedwomen@gmail.com');
    });
    
    $('#facebook-2').click(function () {
        window.open('https://www.facebook.com/UnaccompaniedWomen/', '_blank');
    });
    $('#fb-ico-2').click(function () {
        window.open('https://www.facebook.com/UnaccompaniedWomen/', '_blank');
    });
    
    $('#video-2').click(function () {
        window.open('https://www.youtube.com/user/UnaccompaniedWomen', '_blank');
    });
    $('#vid-ico-2').click(function () {
        window.open('https://www.youtube.com/user/UnaccompaniedWomen', '_blank');
    });
    
    $('#email-2').click(function () {
        window.open('mailto:unaccompaniedwomen@gmail.com');
    });
    $('#em-ico-2').click(function () {
        window.open('mailto:unaccompaniedwomen@gmail.com');
    });
    
    $('#about-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "1");
        $('#members').css("opacity", "0");
        $('#repertoire').css("opacity", "0");
        $('#contact').css("opacity", "0");
        $('#de-members').fadeOut(0);
        $('#de-repertoire').fadeOut(0);
        $('#de-contact').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-about').fadeIn(500);
    });
    
    $('#members-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "0");
        $('#members').css("opacity", "1");
        $('#repertoire').css("opacity", "0");
        $('#contact').css("opacity", "0");
        $('#member-information').fadeOut(0);
        $('#de-about').fadeOut(0);
        $('#de-repertoire').fadeOut(0);
        $('#de-contact').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-members').fadeIn(500);
    });
    
    $('#repertoire-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "0");
        $('#members').css("opacity", "0");
        $('#repertoire').css("opacity", "1");
        $('#contact').css("opacity", "0");
        $('#de-members').fadeOut(0);
        $('#de-about').fadeOut(0);
        $('#de-contact').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-repertoire').fadeIn(500);
    });
    
    $('#contact-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "0");
        $('#members').css("opacity", "0");
        $('#repertoire').css("opacity", "0");
        $('#contact').css("opacity", "1");
        $('#de-members').fadeOut(0);
        $('#de-repertoire').fadeOut(0);
        $('#de-about').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-contact').fadeIn(500);
    });
    
    $('.person').click(function () {
        $('.person').css("transform", "scale(1)"); 
        $('.person').css("z-index", "9"); 
        $(this).css("transform", "scale(1.8)");
        $(this).css("z-index", "10");
        $('.person').css("border", "none"); 
        $(this).css("border", "solid 3px white");
        $("html, body").animate({ scrollTop: $(document).height() }, 200);
    });
    
    $('.elizabeth').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Elizabeth Ortiz");
        $('#place').html("Amherst, MA | 3rd Year");
        $('#year').html("<strong>Major:</strong> Political Science / NELC");
        $('#fav-song').html("<strong>Favorite Song:</strong> Feeling Good, by Michael Buble");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Poison in a Flask");
        $('#her-bio').html("Liz is a third year political science major also studying Near Eastern Languages and Civilizations. In addition to being president of UW, she is involved in University Ballet and University Theater. She enjoys spending all of her time with members of UW going to movies, baking, or just hanging out!");
        $('#member-information').fadeIn(500);
    });
    
    $('.aliyah').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Aliyah Bixby-Driesen");
        $('#place').html("New Haven, CT | 4th Year");
        $('#year').html("<strong>Major:</strong> Linguistics / EALC");
        $('#fav-song').html("<strong>Favorite Song:</strong> In Remembrance, by Eleanor Daley");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Skepticism");
        $('#her-bio').html("Aliyah is a fourth year enthralled by language and culture. While she's sung with many groups over the years, being music director of UW has been by far the most fun and rewarding. You can catch her in the Reg working on her BA thesis (ask me about language change in 20th century China!), at home baking up a storm, or pretty much anywhere having an impassioned discussion with friends.");
        $('#member-information').fadeIn(500);
    });
    
    $('.kate').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Kate Scheuch");
        $('#place').html("New London, NH | 3rd Year");
        $('#year').html("<strong>Major:</strong> Comparative Human Development");
        $('#fav-song').html("<strong>Favorite Song:</strong> I Want You Back, by Jackson 5");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Running Quickly Away");
        $('#her-bio').html("Kate is a 3rd year Comparative Human Development major with a Gender Studies minor. In addition to being Vice President of UW, she plays club lacrosse and is a member of the greatest frat on campus, APO. Ask her about weird YouTube videos, animal facts, how to best Live Free or Die, or how much she loves her a cappella group!");
        $('#member-information').fadeIn(500);
    });
    
    $('.laura').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Laura Bevington");
        $('#place').html("Durham, NC | 3rd Year");
        $('#year').html("<strong>Major:</strong> TAPS");
        $('#fav-song').html("<strong>Favorite Song:</strong> Jailbreak, by Thin Lizzy");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Dagger");
        $('#her-bio').html("When Laura is not singing or making other strange noises (vocal percussion is really fun!), you can probably find them working on a show with the Dean's Men, for whom Laura serves as Education Chair. Other hobbies include dancing awkwardly, climbing scaffolding, writing songs, thinking about the universe, and cursing at electronic devices.");
        $('#member-information').fadeIn(500);
    });
    
    $('.sylvia').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Sylvia Cheever");
        $('#place').html("Brooklyn, NY | 3rd Year");
        $('#year').html("<strong>Major:</strong> Anthropology / Biology Minor");
        $('#fav-song').html("<strong>Favorite Song:</strong> Don't Ask Me to Pick One");
        $('#weapon').html("<strong>Weapon of Choice:</strong> My Bare Hands");
        $('#her-bio').html("Surrounded by fake pizza and mediocre bagels, Sylvia keeps herself busy teaching health to teens via Peer Health Exchange, volunteering with InTouch, hanging with her Pi Phi sisters, Crisis Directing ChoMUN, and working as UChicago's condom queen (aka Student Coordinator of the WellCzars). In her free time she loves to swing and Latin dance, and perfect her cheesy pasta recipe.");
        $('#member-information').fadeIn(500);
    });
    
    $('.mariam').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Mariam Desta");
        $('#place').html("Phoenix, AZ | 2nd Year");
        $('#year').html("<strong>Major:</strong> Global Studies (maybe)");
        $('#fav-song').html("<strong>Favorite Song:</strong> 'It's Over, Isn't It,' from Steven Universe");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Twin Kantana Swords");
        $('#her-bio').html("When not doing Dub Stuff, Mariam loves befriending as many people as possible, giving her soul to University Theater and her job at Court Theatre (it's the bees knees)! She loves inviting friends over to daintily sip tea and stare broodingly out of her bedroom window. Get sushi with her. She enjoys spontaneous hipster photo shoots. Give her flower crowns, beanies, various soups, and love.");
        $('#member-information').fadeIn(500);
    });
    
    $('.dj').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("DJ Douros");
        $('#place').html("Wayland, MA | 3rd Year");
        $('#year').html("<strong>Major:</strong> Linguistics");
        $('#fav-song').html("<strong>Favorite Song:</strong> Hide and Seek, by Imogen Heap");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Tortilla Chips (Thrown as Ninja Stars)");
        $('#her-bio').html("DJ is a second-year linguistics major from Wayland, MA. In addition to singing with UW, DJ loves eating with UW, studying with UW, and really just hanging out with UW whenever possible.");
        $('#member-information').fadeIn(500);
    });
    
    $('.rebecca').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Rebecca Koppel");
        $('#place').html("Wellesley, MA | 1st Year");
        $('#year').html("<strong>Major:</strong> Neuroscience");
        $('#fav-song').html("<strong>Favorite Song:</strong> Not Now John, by Pink Floyd");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Scathing Sarcasm");
        $('#her-bio').html("Rebecca is a 1st year Neuroscience major who is also interested in Gender and Sexuality Studies and Comparative Human Development. When she's not singing with the UW fam, she can be found working with the Peer Health Advocates' InTouch program, watching American Horror Story with her friends, or listening to classic Lady Gaga music.");
        $('#member-information').fadeIn(500);
    });
    
    $('.renee').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Renee Colby");
        $('#place').html("St. Louis, MO | 1st Year");
        $('#year').html("<strong>Major:</strong> Political Science / Creative Writing");
        $('#fav-song').html("<strong>Favorite Song:</strong> Oceans, by Seafret");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Apache Revolver");
        $('#her-bio').html("Renee is a 1st year potential political science major and creative writing minor. Besides UW, she participates in National Novel Writing Month every year and volunteers at a cat shelter in St. Louis. Renee enjoys napping, cooking, eating said cooking, and writing.");
        $('#member-information').fadeIn(500);
    });
    
    $('.elissa').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Elissa Kwon");
        $('#place').html("La Canada Flintridge, CA | 1st Year");
        $('#year').html("<strong>Major:</strong> Undecided");
        $('#fav-song').html("<strong>Favorite Song:</strong> Waves, by Kanye West");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Really Pointy Pens");
        $('#her-bio').html("Elissa is a 1st year. She is not sure what she wants to major in, so if you have any advice hit her up! She is also involved with AAIV and Pi Beta Phi. In her free time she likes talking about politics, watching bad movies and TV, playing the gayageum (Korean Harp) and [trying] to make fire beats on Logic Pro.");
        $('#member-information').fadeIn(500);
    });
    
    $('.samuela').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Samuela Mouzaoir");
        $('#place').html("Colorado Springs, CO | 1st Year");
        $('#year').html("<strong>Major:</strong> Undecided");
        $('#fav-song').html("<strong>Favorite Song:</strong> Sun, by Sleeping At Last");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Bow & Arrow");
        $('#her-bio').html("Samuela is a 1st year student interested in many things from public policy to sociology. She enjoys photography, The Lord of the Rings, coffee, and books. She hopes to one day figure out how to change society for the better.");
        $('#member-information').fadeIn(500);
    });
});

    
    $(window).resize(function() {
        if($(window).width() > 796) {
                $('.mobile-menu').fadeOut(0);
                $('#menu').fadeIn(0);
                if ($('.info').css("opacity") == 0) {
                    $('#about').css("opacity", "0");
                }
        }
        if($(window).width() < 797 && prevWidth > 796 && $('.info').css("opacity") != 0) {
            $('.mobile-menu').fadeIn(500);
            $('#menu').fadeOut(0);
        }
        var nw = $(window).width();
        //compare new and old width      
        prevWidth = nw;
    });