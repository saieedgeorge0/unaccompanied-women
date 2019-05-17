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
    
    $('.kim').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Kim Vance");
        $('#place').html("Tucson, AZ | 1st Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Fundamentals, probably");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> M&M's");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Luring the enemy into a false sense of security and striking when they least expect it");
        $('#her-bio').html("Kim enjoys writing, arranging, and listening to almost any type of music. Outside of UW, she sings choral music and can be spotted cajoling anyone she meets into registering to vote. Other hobbies include terrible puns, getting in heated debates, and realizing she’s humming out loud somewhere where it’s really inappropriate to make noise (Harper).");
        $('#member-information').fadeIn(500);
    });
    
    $('.elissa').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Elissa Kwon");
        $('#place').html("La Cañada Flintridge, CA | 3rd Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Economics. Minor in Media Arts and Design / East Asian Languages and Civilizations");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> Sincerely, Jane");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Pointy Pens");
        $('#her-bio').html("Elissa is an Econ major from SoCal. Besides UW, she is also involved with Midway Ventures and KSO on campus and also works at the campus media center, the new MADD center, and for the music department. In her free time she likes writing and producing music, solving Sudoku puzzles, and watching trashy reality tv.");
        $('#member-information').fadeIn(500);
    });
    
    $('.gio').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Giovanna Hooton");
        $('#place').html("New York City, NY | 3rd Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Theater, with a Linguistics minor");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> If U Love Me Now");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Theater Warm-ups");
        $('#her-bio').html("Gio is UW's President and Choreographer! She can be found in Logan attempting to make theater Happen or in the Linguistics Lab where she works. She is often coined as most likely to be heard from across the quad, but she is proud of it! During the summer, she retreats to beautiful Maine to work at Acting Manitou, a theater camp filled to the brim with the most amazing creative weirdos. She loves her house (yuenity!!) and all the beautiful dubs!!");
        $('#member-information').fadeIn(500);
    });
    
    $('.renee').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Renee Colby");
        $('#place').html("St. Louis, MI | 3rd Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Political Science & Creative Writing");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> M&M's");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Guilt-inducing Ugly Crying");
        $('#her-bio').html("Outside of UW, Renee can be found extolling the virtues of speculative fiction, napping, or playing the Sims.");
        $('#member-information').fadeIn(500);
    });
    
    $('.gaby').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Gaby Sterkowicz");
        $('#place').html("Columbus, OH | 2nd Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Biological Sciences");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> Hold My Heart");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Throwing Knives");
        $('#her-bio').html("Gaby is UW's Vice President and also arranges music sometimes! When she's not singing or Doing Science, she likes eating sushi, expanding her sweater hoard (you can never be too cozy), maintaining her encyclopedic knowledge of Florence + the Machine lyrics, and dogspotting.");
        $('#member-information').fadeIn(500);
    });
    
    $('.julianne').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Julianne Lorndale");
        $('#place').html("McLean, VA | 3rd Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Creative Writing, minor in Italian");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> Back to Me");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Flight");
        $('#her-bio').html("Julianne is so psyched to keep singing with her friends! But besides UW, Julianne enjoys writing, acting, playing music and watching celebrity interviews. She is also involved with Pi Beta Phi fraternity on campus.");
        $('#member-information').fadeIn(500);
    });
    
    $('.faith').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Faith Sanchez");
        $('#place').html("New York City, NY | 1st Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Sociology");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> Can’t Help Falling in Love");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Words or Empty Hands");
        $('#her-bio').html("Faith is a pre-med sociology major and one of UW’s assistant music directors. When not struggling over the STEM half of the (un)holy matrimony of an academic career she’s created, she spends her time doing Music Stuff™, imbibing an unhealthy amount of hot chocolate, and aggressively taking people under her wing.");
        $('#member-information').fadeIn(500);
    });
    
    $('.trinity').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Trinity Campagna");
        $('#place').html("Painesville, OH | 1st Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Molecular Engineering");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> Back to Me");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Screenshots from a few months back");
        $('#her-bio').html("Trinity is just a gal from Northeast Ohio that has a minor obsession with breakfast foods: particularly from her previous workplace - Denny's. She loves avoiding problems, making jokes at inapproriate times, and being consistently dehydrated. After joining UW, Trinity is happy to say that she was finally able to make some friends that she likes more than her old coworkers from America's Favorite Diner.");
        $('#member-information').fadeIn(500);
    });
    
    $('.ri').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Ri Desta");
        $('#place').html("La Vergne, TN | 4th Year | they/them/theirs");
        $('#year').html("<strong>Major:</strong> Comparative Human Development");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> Hold My Heart");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Tea bags furiously swung like nunchucks");
        $('#her-bio').html("When not doing Dub Stuff, Ri loves thrifting for clothes that advance their grandpa aesthetic. Catch them training for roller derby on the daily (and give them good vibes when they fall). Ask to see their flower crown collection or join their Zumba Squad; Ri loves making new friends! That, and naps. Lots of naps.");
        $('#member-information').fadeIn(500);
    });
    
    $('.tiffany').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Tiffany Leng");
        $('#place').html("New York City, NY | 1st Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Chemistry, visual arts minor");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> In the Name of Love / Scared to be Lonely");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Unfiltered Savagery ");
        $('#her-bio').html("Tiffany’s friends all call her a princess but she’s actually just more of a clown. If she likes you she’ll call you “mother” and cuddle up to you, but don’t feel special she calls everyone mother. She also has the smallest bladder ever. And she loves UW VERY MUCH.");
        $('#member-information').fadeIn(500);
    });
    
    $('.rebecca').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Rebecca Koppel");
        $('#place').html("Wellesley, MA | 3rd Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Comparative Human Development");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> Pity Party");
        $('#weapon').html("<strong>Weapon of Choice:</strong> 3-ton Backpack");
        $('#her-bio').html("Rebecca probably spends too much time thinking about a cappella. When she's not practicing with UW or leading aca-council, you can find her teaching health education on campus with the Peer Health Advocates or off campus with Peer Health Exchange (ask her anything!). But honestly, she's most likely sleeping.");
        $('#member-information').fadeIn(500);
    });

    $('.dj').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("DJ Douros");
        $('#place').html("Wayland, MA | 4th Year | she/her/hers");
        $('#year').html("<strong>Major:</strong> Linguistics");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> Hide and Sike");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Tortilla chips thrown as ninja stars");
        $('#her-bio').html("DJ is a fourth-year linguistics major from Wayland, MA. In addition to singing with UW, DJ loves eating with UW, studying with UW, and really just hanging out with UW whenever possible.");
        $('#member-information').fadeIn(500);
    });

    $('.lily').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Lily Everett");
        $('#place').html("Chicago, IL | 1st Year | she/her/hers or they/them/theirs");
        $('#year').html("<strong>Major:</strong> Comparative Human Development & East Asian Languages and Civilizations");
        $('#fav-song').html("<strong>Favorite UW Song:</strong> In the Name of Love / Scared to be Lonely");
        $('#weapon').html("<strong>Weapon of Choice:</strong> Two short versions of Gogo Yubari’s ball and chain");
        $('#her-bio').html("When Lily isn't trying to convince the group that they are an Alto 2, they spend their time playing guitar at open mics, and practicing drums waiting for their high school band to get back together. Otherwise, they spend hours watching every bad Netflix movie in existence, and cooking more food than they can possibly eat. The only physical activity Lily doesn't refuse to do is dancing aggressively to grocery store music.");
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