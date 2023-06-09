(function () {

    /**
    * Easy selector helper function
    */
    const _I_ = atob(document.body.id)
        ,
        select = function (el, all) {
            //
            el = el.trim();
            //
            if (el == '#') return;
            //
            if (all === true) {
                //debugger;
                return /*Array.prototype*/[].slice.call(document.querySelectorAll(el), 0);// [/*...*/]
            } else {
                return document.querySelector(el)
            }
        }
        /**
         * Easy event listener function
         */
        ,
        on = function (type, el, listener, all) {

            var selectEl = select(el, all)

            if (selectEl) {
                if (all) {
                    selectEl.forEach(function (e) {
                        e.addEventListener(type, listener);
                    })
                } else {
                    selectEl.addEventListener(type, listener)
                }

            };

            return selectEl;

        }
        ,
        isValidUrl = function (urlString) {
            const mark = ['https:', 'http:', '//'];
            for (var i = 0; i < mark.length; i++) {
                if (urlString.indexOf(mark[i]) == 0) {
                    return true;
                    break;
                };
            };
            return false;
        }
        ,
        lzy_I = function () {

            const d = this,
                uri = isValidUrl(d[1]) ? d[1] : _I_ + '/' + d[1];


            d[0].setAttribute('src', uri);

        };



    select('img', true).forEach(function (ig, j) {
        var src = ig.getAttribute('src');
        if (!src) {
            src = ig.getAttribute('lzy_src');
            if (src) {//lazy load

                lzy_I.bind([ig, src, j])();

            };
        };


        const dog = j;
    });

    window.onscroll = function (ev) {
        //https://stackoverflow.com/questions/9439725/how-to-detect-if-browser-window-is-scrolled-to-bottom
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
            if (!window.yutbe_list) {
                window.yutbe_list = 1;

                //

                var xhr = new XMLHttpRequest();
                xhr.open('GET',(window.lstURI ||'') + 'listvideo.html', true);
                xhr.onreadystatechange = function () {

                    if (this.readyState !== 4) return;
                    if (this.status !== 200) return;
                    //
                    //
                    //
                    //
                    var div = document.createElement('div');
                    div.setAttribute('class', 'iframe-wrapper');
                    div.innerHTML = '<iframe></iframe>';
                    //
                    document.body.appendChild(div);
                    var iframe = div.querySelector('iframe');
                    //
                    iframe.contentWindow.document.open();
                    iframe.contentWindow.document.write(this.responseText);
                    iframe.contentWindow.document.close();
                    //

                    if (document.fullscreenEnabled ||
                        document.webkitFullscreenEnabled ||
                        document.mozFullScreenEnabled ||
                        document.msFullscreenEnabled) {

                        // which element will be fullscreen
                        // Do fullscreen
                        if (iframe.requestFullscreen) {
                            iframe.requestFullscreen();
                        } else if (iframe.webkitRequestFullscreen) {
                            iframe.webkitRequestFullscreen();
                        } else if (iframe.mozRequestFullScreen) {
                            iframe.mozRequestFullScreen();
                        } else if (iframe.msRequestFullscreen) {
                            iframe.msRequestFullscreen();
                        }
                    }

                };
                xhr.send();

                //window.parent.postMessage('asss', '*');

                //
                //var div = document.createElement('div');
                //div.setAttribute('class', 'iframe-wrapper');
                //div.innerHTML = '<iframe src="listvideo.html"></iframe>';
                ////
                //document.body.appendChild(div);


            };
        };
    };

})()
