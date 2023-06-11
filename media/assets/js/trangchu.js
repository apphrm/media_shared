"use strict";
var w0w = window,
    helloguy,
    _stateGUY = function (m, act) {
        helloguy.css('display', m);
    }
    ,
    _gsC = function (url, filetype, success, id) {
        var spt,
            atr = 'setAttribute',
            head = document.getElementsByTagName('head')[0],
            done = false;

        if (id && id != '' && w0w.dynload && w0w.dynload.indexOf(id) > -1) {
            done = true;
            success();
        } else {
            if (filetype == "js") {
                spt = document.createElement('script');
                spt[atr]("type", "text/javascript");
                spt[atr]("src", url);
            } else if (filetype == "css") {
                spt = document.createElement("link");
                spt[atr]("rel", "stylesheet");
                spt[atr]("type", "text/css");
                spt[atr]("href", url);
            } else {
                return;
            };
            if (id) { spt[atr]("id", id); if (!w0w.dynload) w0w.dynload = []; w0w.dynload.push(id); };
            spt.onload = spt.onreadystatechange = function () {
                if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                    done = true;
                    success();
                    spt.onload = spt.onreadystatechange = null;
                    if (filetype == 'js') {
                        try {
                            head.removeChild(spt);
                        } catch (err) {
                        };
                    };
                }
            };
            spt.onerror = function (e) {
                // w0w.location.replace( '//' + ((w0w.location.hostname.indexOf('www.') > -1) ? 'www.' : '') + 'hrpro.cf/unluckyday');
            };
            //
            head.appendChild(spt);
        }
    }
    , cok = function (a, b, u) {
        u = u || 'Date';
        st.hn = w0w.location.hostname;
        var exdate = new Date(); exdate['set' + u](exdate['get' + u]() + b);
        document.cookie = a + '; domain=' + (/^((\d){1,3}\.){3}(\d){1,3}$/.test(st.hn) ? '' : '.') + st.hn.replace('www.', '') + (w0w.location.protocol.indexOf('https:') >= 0 ? '; SameSite=None; Secure' : '') + ';path=/ ; expires=' + exdate.toUTCString();
    }
    , gcok = function (name, chk) {
        var cookieArr = document.cookie.split(";");
        for (var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            if (name == cookiePair[0].trim()) {
                return !chk ? decodeURIComponent(cookiePair[1]) : 1;
            }
        }
        return null;
    }
    , gQRY = function (url) {
        var rst = {};
        var ps = decodeURIComponent(url).split(/\?|\&/);
        ps.forEach(function (it) {
            if (it) {
                var p = it.split("=");
                rst[apisvr.a$.trim(p[0])] = apisvr.a$.trim(p[1]);
            }
        });
        return rst;
    };


//_gsC('https://hrm.dnd.vn/media/css/vendors.bundle.bootstrap.css', 'css', function () {
//    console.log('bootstrap.css');
//});
//_gsC('assets/css/appland.css', 'css', function () { console.log('appland.css'); });

//_gsC('https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.2.0/js/glightbox.min.js', 'js', function () {
//    console.log('glightbox.js');
//});
//_gsC('https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js', 'js', function () {
//    console.log('aos.js');
//});
//_gsC('https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js', 'js', function () {
//    console.log('swiper.min.js');
//});





$(function () {

    console.log('function');

    helloguy = $('#helloguy');

    var head = $('#header'),
        hero = head.next(),
        main = hero.next(),
        foot = main.next();



    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });


    setTimeout(function () {

        var swiper = new Swiper(".mySwiper", {
            rewind: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });



    helloguy.css('display', 'none');

  

    //$.getJSON("assets/app.json", function (data) {
    //    var items = [];
    //    $.each(data, function (key, val) {
    //        items.push("<li id='" + key + "'>" + val + "</li>");
    //    });

    //    $("<ul/>", {
    //        "class": "my-new-list",
    //        html: items.join("")
    //    }).appendTo("body");
    //});


});

//_gsC('https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.2.0/css/glightbox.min.css', 'css', function () {
//    console.log('glightbox.min.css');
//});
//_gsC('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css', 'css', function () {
//    console.log('swiper.min.css');
//});
//_gsC('https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css', 'css', function () {
//    console.log('aos.css');
//});

