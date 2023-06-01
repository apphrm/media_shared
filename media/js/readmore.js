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
                isValidUrl = function( urlString ) {
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
                        //alert("you're at the bottom of the page");
                        //
                        //
                        var div = document.createElement('div');
                        div.setAttribute('class', 'iframe-wrapper');
                        div.innerHTML = '<iframe src="listvideo.html"></iframe>';
                        //
                        document.body.appendChild(div);


                    };
                };
            };

        })()
