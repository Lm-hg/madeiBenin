document.querySelector("html").classList.contains("is-builder") || function() {
    const n = document.querySelectorAll(".gallery-wrapper");
    n.length && n.forEach((n=>{
        const t = n.querySelector(".grid-container-1")
          , e = n.querySelector(".grid-container-2")
          , i = n.querySelector(".grid-container-3")
          , o = t ? getComputedStyle(t).transform : null
          , r = e ? getComputedStyle(e).transform : null
          , s = i ? getComputedStyle(i).transform : null;
        function l() {
            const l = window.scrollY
              , a = window.innerHeight
              , d = n.getBoundingClientRect().top + window.scrollY - a;
            if (l >= d) {
                const m = o ? new DOMMatrix(o) : null
                  , w = r ? new DOMMatrix(r) : null
                  , h = s ? new DOMMatrix(s) : null;
                if (m) {
                    const f = t.querySelectorAll(".grid-item")
                      , g = f.length;
                    function c() {
                        for (let n = 0; n < g; n++) {
                            const e = f[n].cloneNode(!0);
                            t.appendChild(e)
                        }
                    }
                    switch (f.forEach((n=>{
                        n.querySelector("img").classList.remove("hidden")
                    }
                    )),
                    g >= 8 && !t.classList.contains("moving-left") && (m.m41 = -2e3),
                    g >= 8 && !t.classList.contains("moving-left") && window.innerWidth < 1200 && (m.m41 = -900),
                    !0) {
                    case g < 8:
                        c();
                    case t.classList.contains("moving-right"):
                        translateX1 = m.m41 + .9 * (l - d);
                        break;
                    case t.classList.contains("moving-left"):
                        translateX1 = m.m41 - .9 * (l - d);
                        break;
                    default:
                        window.innerWidth >= 2560 ? translateX1 = m.m41 + .9 * (l - d) : window.innerWidth >= 1440 ? translateX1 = m.m41 + .55 * (l - d) : window.innerWidth >= 1024 ? translateX1 = m.m41 + .45 * (l - d) : window.innerWidth >= 768 ? translateX1 = m.m41 + .35 * (l - d) : window.innerWidth >= 320 && (translateX1 = m.m41 + .25 * (l - d))
                    }
                    t.style.transform = `translate3d(${translateX1}px, 0, 0)`
                }
                if (w) {
                    const u = e.querySelectorAll(".grid-item")
                      , W = u.length;
                    function c() {
                        for (let n = 0; n < W; n++) {
                            const t = u[n].cloneNode(!0);
                            e.appendChild(t)
                        }
                    }
                    switch (u.forEach((n=>{
                        n.querySelector("img").classList.remove("hidden")
                    }
                    )),
                    W >= 8 && e.classList.contains("moving-left") && (w.m41 = -2e3),
                    W >= 8 && !e.classList.contains("moving-left") && window.innerWidth < 1200 && (w.m41 = 0),
                    !0) {
                    case W < 8:
                        c();
                    case e.classList.contains("moving-right"):
                        translateX2 = w.m41 + .9 * (l - d);
                        break;
                    case e.classList.contains("moving-left"):
                        translateX2 = w.m41 - .9 * (l - d);
                        break;
                    default:
                        window.innerWidth >= 2560 ? translateX2 = w.m41 - .9 * (l - d) : window.innerWidth >= 1440 ? translateX2 = w.m41 - .55 * (l - d) : window.innerWidth >= 1024 ? translateX2 = w.m41 - .45 * (l - d) : window.innerWidth >= 768 ? translateX2 = w.m41 - .35 * (l - d) : window.innerWidth >= 320 && (translateX2 = w.m41 - .25 * (l - d))
                    }
                    e.style.transform = `translate3d(${translateX2}px, 0, 0)`
                }
                if (h) {
                    const L = i.querySelectorAll(".grid-item")
                      , y = L.length;
                    L.forEach((n=>{
                        n.querySelector("img").classList.remove("hidden")
                    }
                    )),
                    y >= 8 && !i.classList.contains("moving-left") && (h.m41 = -2e3),
                    y >= 8 && !i.classList.contains("moving-left") && window.innerWidth < 1200 && (h.m41 = -900);
                    let v = h.m41 + .9 * (l - d);
                    function c() {
                        for (let n = 0; n < y; n++) {
                            const t = L[n].cloneNode(!0);
                            i.appendChild(t)
                        }
                    }
                    y < 8 && c(),
                    i.classList.contains("moving-left") ? i.classList.contains("moving-left") && (y < 8 && c(),
                    window.innerWidth >= 2560 ? v = h.m41 - .9 * (l - d) : window.innerWidth >= 1440 ? v = h.m41 - .55 * (l - d) : window.innerWidth >= 1024 ? v = h.m41 - .45 * (l - d) : window.innerWidth >= 768 ? v = h.m41 - .35 * (l - d) : window.innerWidth >= 320 && (v = h.m41 - .25 * (l - d))) : window.innerWidth >= 2560 ? v = h.m41 + .9 * (l - d) : window.innerWidth >= 1440 ? v = h.m41 + .55 * (l - d) : window.innerWidth >= 1024 ? v = h.m41 + .45 * (l - d) : window.innerWidth >= 768 ? v = h.m41 + .35 * (l - d) : window.innerWidth >= 320 && (v = h.m41 + .25 * (l - d)),
                    i.style.transform = `translate3d(${v}px, 0, 0)`
                }
            }
        }
        window.addEventListener("DOMContentLoaded", (()=>{
            requestAnimationFrame(l)
        }
        )),
        window.addEventListener("scroll", (()=>{
            requestAnimationFrame(l)
        }
        ))
    }
    ))
}();
!function() {
    var e, t, o, n, r = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 100,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: !0,
        arrowScroll: 50,
        fixedBackground: !0,
        excluded: ""
    }, a = r, l = !1, i = !1, c = {
        x: 0,
        y: 0
    }, u = !1, s = document.documentElement, d = [], f = /^Mac/.test(navigator.platform), m = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    }, h = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };
    function w() {
        if (!u && document.body) {
            u = !0;
            var n = document.body
              , r = document.documentElement
              , c = window.innerHeight
              , d = n.scrollHeight;
            if (s = document.compatMode.indexOf("CSS") >= 0 ? r : n,
            e = n,
            a.keyboardSupport && A("keydown", S),
            top != self)
                i = !0;
            else if (Z && d > c && (n.offsetHeight <= c || r.offsetHeight <= c)) {
                var f, m = document.createElement("div");
                m.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + s.scrollHeight + "px",
                document.body.appendChild(m),
                o = function() {
                    f || (f = setTimeout((function() {
                        l || (m.style.height = "0",
                        m.style.height = s.scrollHeight + "px",
                        f = null)
                    }
                    ), 500))
                }
                ,
                setTimeout(o, 10),
                A("resize", o);
                if ((t = new q(o)).observe(n, {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                }),
                s.offsetHeight <= c) {
                    var h = document.createElement("div");
                    h.style.clear = "both",
                    n.appendChild(h)
                }
            }
            a.fixedBackground || l || (n.style.backgroundAttachment = "scroll",
            r.style.backgroundAttachment = "scroll")
        }
    }
    var p = []
      , v = !1
      , y = Date.now();
    function b(e, t, o) {
        var n, r;
        if (n = (n = t) > 0 ? 1 : -1,
        r = (r = o) > 0 ? 1 : -1,
        (c.x !== n || c.y !== r) && (c.x = n,
        c.y = r,
        p = [],
        y = 0),
        1 != a.accelerationMax) {
            var l = Date.now() - y;
            if (l < a.accelerationDelta) {
                var i = (1 + 50 / l) / 2;
                i > 1 && (i = Math.min(i, a.accelerationMax),
                t *= i,
                o *= i)
            }
            y = Date.now()
        }
        if (p.push({
            x: t,
            y: o,
            lastX: t < 0 ? .99 : -.99,
            lastY: o < 0 ? .99 : -.99,
            start: Date.now()
        }),
        !v) {
            var u = V()
              , s = e === u || e === document.body;
            null == e.$scrollBehavior && function(e) {
                var t = M(e);
                if (null == B[t]) {
                    var o = getComputedStyle(e, "")["scroll-behavior"];
                    B[t] = "smooth" == o
                }
                return B[t]
            }(e) && (e.$scrollBehavior = e.style.scrollBehavior,
            e.style.scrollBehavior = "auto");
            var d = function(n) {
                for (var r = Date.now(), l = 0, i = 0, c = 0; c < p.length; c++) {
                    var u = p[c]
                      , f = r - u.start
                      , m = f >= a.animationTime
                      , h = m ? 1 : f / a.animationTime;
                    a.pulseAlgorithm && (h = I(h));
                    var w = u.x * h - u.lastX | 0
                      , y = u.y * h - u.lastY | 0;
                    l += w,
                    i += y,
                    u.lastX += w,
                    u.lastY += y,
                    m && (p.splice(c, 1),
                    c--)
                }
                s ? window.scrollBy(l, i) : (l && (e.scrollLeft += l),
                i && (e.scrollTop += i)),
                t || o || (p = []),
                p.length ? R(d, e, 1e3 / a.frameRate + 1) : (v = !1,
                null != e.$scrollBehavior && (e.style.scrollBehavior = e.$scrollBehavior,
                e.$scrollBehavior = null))
            };
            R(d, e, 0),
            v = !0
        }
    }
    function g(t) {
        u || w();
        var o = t.target;
        if (t.defaultPrevented || t.ctrlKey)
            return !0;
        if (K(e, "embed") || K(o, "embed") && /\.pdf/i.test(o.src) || K(e, "object") || o.shadowRoot)
            return !0;
        var r = -t.wheelDeltaX || t.deltaX || 0
          , l = -t.wheelDeltaY || t.deltaY || 0;
        f && (t.wheelDeltaX && P(t.wheelDeltaX, 120) && (r = t.wheelDeltaX / Math.abs(t.wheelDeltaX) * -120),
        t.wheelDeltaY && P(t.wheelDeltaY, 120) && (l = t.wheelDeltaY / Math.abs(t.wheelDeltaY) * -120)),
        r || l || (l = -t.wheelDelta || 0),
        1 === t.deltaMode && (r *= 40,
        l *= 40);
        var c = L(o);
        return c ? !!function(e) {
            if (!e)
                return;
            d.length || (d = [e, e, e]);
            e = Math.abs(e),
            d.push(e),
            d.shift(),
            clearTimeout(n),
            n = setTimeout((function() {
                try {
                    localStorage.SS_deltaBuffer = d.join(",")
                } catch (e) {}
            }
            ), 1e3);
            var t = e > 120 && $(e)
              , o = !$(120) && !$(100) && !t;
            return e < 50 || o
        }(l) || (Math.abs(r) > 1.2 && (r *= a.stepSize / 120),
        Math.abs(l) > 1.2 && (l *= a.stepSize / 120),
        b(c, r, l),
        t.preventDefault(),
        void C()) : !i || !U || (Object.defineProperty(t, "target", {
            value: window.frameElement
        }),
        parent.wheel(t))
    }
    function S(t) {
        var o = t.target
          , n = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== m.spacebar;
        document.body.contains(e) || (e = document.activeElement);
        var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (t.defaultPrevented || /^(textarea|select|embed|object)$/i.test(o.nodeName) || K(o, "input") && !r.test(o.type) || K(e, "video") || function(e) {
            var t = e.target
              , o = !1;
            if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                do {
                    if (o = t.classList && t.classList.contains("html5-video-controls"))
                        break
                } while (t = t.parentNode);
            return o
        }(t) || o.isContentEditable || n)
            return !0;
        if ((K(o, "button") || K(o, "input") && r.test(o.type)) && t.keyCode === m.spacebar)
            return !0;
        if (K(o, "input") && "radio" == o.type && h[t.keyCode])
            return !0;
        var l = 0
          , c = 0
          , u = L(e);
        if (!u)
            return !i || !U || parent.keydown(t);
        var s = u.clientHeight;
        switch (u == document.body && (s = window.innerHeight),
        t.keyCode) {
        case m.up:
            c = -a.arrowScroll;
            break;
        case m.down:
            c = a.arrowScroll;
            break;
        case m.spacebar:
            c = -(t.shiftKey ? 1 : -1) * s * .9;
            break;
        case m.pageup:
            c = .9 * -s;
            break;
        case m.pagedown:
            c = .9 * s;
            break;
        case m.home:
            u == document.body && document.scrollingElement && (u = document.scrollingElement),
            c = -u.scrollTop;
            break;
        case m.end:
            var d = u.scrollHeight - u.scrollTop - s;
            c = d > 0 ? d + 10 : 0;
            break;
        case m.left:
            l = -a.arrowScroll;
            break;
        case m.right:
            l = a.arrowScroll;
            break;
        default:
            return !0
        }
        b(u, l, c),
        t.preventDefault(),
        C()
    }
    function x(t) {
        e = t.target
    }
    var k, D, M = (k = 0,
    function(e) {
        return e.uniqueID || (e.uniqueID = k++)
    }
    ), E = {}, T = {}, B = {};
    function C() {
        clearTimeout(D),
        D = setInterval((function() {
            E = T = B = {}
        }
        ), 1e3)
    }
    function H(e, t, o) {
        for (var n = o ? E : T, r = e.length; r--; )
            n[M(e[r])] = t;
        return t
    }
    function z(e, t) {
        return (t ? E : T)[M(e)]
    }
    function L(e) {
        var t = []
          , o = document.body
          , n = s.scrollHeight;
        do {
            var r = z(e, !1);
            if (r)
                return H(t, r);
            if (t.push(e),
            n === e.scrollHeight) {
                var a = X(s) && X(o) || Y(s);
                if (i && O(s) || !i && a)
                    return H(t, V())
            } else if (O(e) && Y(e))
                return H(t, e)
        } while (e = e.parentElement)
    }
    function O(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }
    function X(e) {
        return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
    }
    function Y(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t
    }
    function A(e, t, o) {
        window.addEventListener(e, t, o || !1)
    }
    function N(e, t, o) {
        window.removeEventListener(e, t, o || !1)
    }
    function K(e, t) {
        return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }
    if (window.localStorage && localStorage.SS_deltaBuffer)
        try {
            d = localStorage.SS_deltaBuffer.split(",")
        } catch (e) {}
    function P(e, t) {
        return Math.floor(e / t) == e / t
    }
    function $(e) {
        return P(d[0], e) && P(d[1], e) && P(d[2], e)
    }
    var j, R = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, o) {
        window.setTimeout(e, o || 1e3 / 60)
    }
    , q = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, V = (j = document.scrollingElement,
    function() {
        if (!j) {
            var e = document.createElement("div");
            e.style.cssText = "height:10000px;width:1px;",
            document.body.appendChild(e);
            var t = document.body.scrollTop;
            document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            j = document.body.scrollTop != t ? document.body : document.documentElement,
            window.scrollBy(0, -3),
            document.body.removeChild(e)
        }
        return j
    }
    );
    function F(e) {
        var t, o;
        return (e *= a.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1,
        t = (o = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - o)),
        t * a.pulseNormalize
    }
    function I(e) {
        return e >= 1 ? 1 : e <= 0 ? 0 : (1 == a.pulseNormalize && (a.pulseNormalize /= F(1)),
        F(e))
    }
    var _ = window.navigator.userAgent
      , W = /Edge/.test(_)
      , U = /chrome/i.test(_) && !W
      , G = /safari/i.test(_) && !W
      , J = /mobile/i.test(_)
      , Q = /Windows NT 6.1/i.test(_) && /rv:11/i.test(_)
      , Z = G && (/Version\/8/i.test(_) || /Version\/9/i.test(_))
      , ee = (U || G || Q) && !J
      , te = !1;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
                te = !0
            }
        }))
    } catch (e) {}
    var oe = !!te && {
        passive: !1
    }
      , ne = "onwheel"in document.createElement("div") ? "wheel" : "mousewheel";
    function re(e) {
        for (var t in e)
            r.hasOwnProperty(t) && (a[t] = e[t])
    }
    ne && ee && (A(ne, g, oe),
    A("mousedown", x),
    A("load", w)),
    re.destroy = function() {
        t && t.disconnect(),
        N(ne, g),
        N("mousedown", x),
        N("keydown", S),
        N("resize", o),
        N("load", w)
    }
    ,
    window.SmoothScrollOptions && re(window.SmoothScrollOptions),
    "function" == typeof define && define.amd ? define((function() {
        return re
    }
    )) : "object" == typeof exports ? module.exports = re : window.SmoothScroll = re
}();
!function() {
    var e, t, n, o = "function" == typeof jQuery;
    function r(e, t) {
        var n = Array.from(e.querySelectorAll(t));
        return e.matches && e.matches(t) && n.splice(0, 0, e),
        n
    }
    function i(e) {
        var t = e.getBoundingClientRect()
          , n = document.documentElement;
        return {
            top: t.top + window.pageYOffset - n.clientTop,
            left: t.left + window.pageXOffset - n.clientLeft
        }
    }
    function a(e) {
        return parseFloat(getComputedStyle(e, null).height.replace("px", ""))
    }
    function l(e) {
        return parseFloat(getComputedStyle(e, null).width.replace("px", ""))
    }
    function s(e) {
        "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
    }
    function c(e) {
        if (!e)
            return -1;
        var t = 0;
        do {
            t++
        } while (e = e.previousElementSibling);
        return t
    }
    function d(e) {
        var t = []
          , n = {
            blackberry: "BlackBerry",
            android: "Android",
            windows: "IEMobile",
            opera: "Opera Mini",
            ios: "iPhone|iPad|iPod"
        };
        return "*" === (e = void 0 === e ? "*" : e.toLowerCase()) ? t = Object.values(n) : e in n && t.push(n[e]),
        !(!t.length || !navigator.userAgent.match(new RegExp(t.join("|"),"i")))
    }
    o && (e = jQuery),
    t = e ? e("html").hasClass("is-builder") : document.querySelector("html").classList.contains("is-builder"),
    Element.prototype.parents = function(e) {
        for (var t = [], n = this, o = void 0 !== e; null !== (n = n.parentElement); )
            n.nodeType === Node.ELEMENT_NODE && (o && !n.matches(e) || t.push(n));
        return t
    }
    ,
    Element.prototype.footerReveal = function() {
        var e = this
          , t = e.previousElementSibling
          , n = !!document.documentMode;
        function o() {
            !n && e.offsetHeight <= window.outerHeight ? (e.style.zIndex = "-999",
            e.style.position = "fixed",
            e.style.bottom = "0",
            e.style.width = t.offsetWidth + "px",
            t.style.marginBottom = e.offsetHeight + "px") : (e.style.zIndex = "",
            e.style.position = "",
            e.style.bottom = "",
            e.style.width = "",
            t.style.marginBottom = "")
        }
        return o(),
        window.addEventListener("resize", (function() {
            o()
        }
        )),
        window.addEventListener("load", (function() {
            o()
        }
        )),
        e
    }
    ,
    n = "smartresize",
    window[n] = function(e) {
        var t, o, r, i, a = new CustomEvent(n);
        return e ? this.addEventListener("resize", (t = e,
        function() {
            var e = this
              , n = arguments;
            i ? clearTimeout(i) : r && t.apply(e, n),
            i = setTimeout((function() {
                r || t.apply(e, n),
                i = null
            }
            ), o || 100)
        }
        )) : this.dispatchEvent(a)
    }
    ;
    var u = function() {
        var e = document.createElement("div")
          , t = document.querySelector("body");
        e.setAttribute("style", "height: 50vh; position: absolute; top: -1000px; left: -1000px;"),
        t.appendChild(e);
        var n = parseInt(window.innerHeight / 2, 10)
          , o = parseInt((window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).height, 10);
        return t.removeChild(e),
        o == n
    }();
    if (s((function() {
        function n(e) {
            e.style.height = 9 * l(e.parentNode) / 16 + "px"
        }
        function s(e) {
            setTimeout((function() {
                r(e, ".mbr-parallax-background").forEach((function(e) {
                    jarallax && (jarallax(e, {
                        speed: .6
                    }),
                    e.style.position = "relative")
                }
                ))
            }
            ), 0)
        }
        if (document.querySelector("html").classList.add(d() ? "mobile" : "desktop"),
        window.addEventListener("scroll", (function() {
            document.querySelectorAll(".mbr-navbar--sticky").forEach((function(e) {
                var t = window.scrollTop > 10 ? "add" : "remove";
                e.classList[t]("mbr-navbar--stuck"),
                e.classList.contains(".mbr-navbar--open") || e.classList[t]("mbr-navbar--short")
            }
            ))
        }
        )),
        d() && navigator.userAgent.match(/Chrome/i) ? function(e, t) {
            var n = [e, e];
            n[t > e ? 0 : 1] = t,
            window.smartresize((function() {
                var e = window.innerHeight;
                n.indexOf(e) < 0 && (e = n[window.innerWidth > e ? 1 : 0]);
                var t = document.querySelector(".mbr-section--full-height");
                t && (t.style.height = e + "px")
            }
            ))
        }(window.innerWidth, window.innerHeight) : u || (window.smartresize((function() {
            var e = document.querySelector(".mbr-section--full-height");
            e && (e.style.height = window.innerHeight + "px")
        }
        )),
        document.addEventListener("add.cards", (function(e) {
            document.querySelector("html").classList.contains("mbr-site-loaded") && r(e.target, ".mbr-section--full-height").length && window.dispatchEvent(new CustomEvent("resize"))
        }
        ))),
        window.addEventListener("smartresize", (function() {
            document.querySelectorAll(".mbr-section--16by9").forEach(n)
        }
        )),
        o && e(document).on("add.cards changeParameter.cards", (function(e) {
            var t = r(e.target, ".mbr-section--16by9");
            t.length ? t.forEach((function(e) {
                e.setAttribute("data-16by9", "true"),
                n(e)
            }
            )) : r(e.target, "[data-16by9]").forEach((function(e) {
                e.styles.height = "",
                e.removeAttribute("data-16by9")
            }
            ))
        }
        )),
        "undefined" != typeof jarallax && !d()) {
            if (window.addEventListener("update.parallax", (function(e) {
                setTimeout((function() {
                    if (e) {
                        var e = document.querySelector(".mbr-parallax-background");
                        e.jarallax("coverImage"),
                        e.jarallax("clipContainer"),
                        e.jarallax("onScroll")
                    }
                }
                ), 0)
            }
            )),
            t) {
                if (!o)
                    return;
                e(document).on("add.cards", (function(t) {
                    s(t.target),
                    e(window).trigger("update.parallax")
                }
                )),
                e(document).on("changeParameter.cards", (function(t, n, o, r) {
                    if ("bg" === n)
                        switch (i = t.target,
                        jarallax && jarallax(i, "destroy"),
                        i.style.position = "",
                        e(t.target).find(".mbr-background-video-preview").remove(),
                        e(t.target).find(".mbr-background-video").remove(),
                        r) {
                        case "type":
                        case "parallax":
                            !0 === o.parallax && s(t.target);
                            break;
                        case "value":
                            "image" === o.type && !0 === o.parallax && s(t.target)
                        }
                    var i;
                    e(window).trigger("update.parallax")
                }
                ))
            } else
                s(document.body);
            window.addEventListener("shown.bs.tab", (function() {
                window.dispatchEvent(new CustomEvent("update.parallax"))
            }
            ))
        }
        var c, m, f = 0, h = null, p = !d();
        function g(e) {
            r(e, "[data-bg-video]").forEach((function(e) {
                var n = e.getAttribute("data-bg-video");
                if (!n)
                    return;
                var o = new URLSearchParams(n)
                  , r = Number(o.has("t") ? o.get("t") : 0) || 0
                  , i = n.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/)
                  , a = e.querySelector(".mbr-background-video-preview") || document.createElement("div");
                a.classList.add("mbr-background-video-preview"),
                a.style.display = "none",
                a.style.backgroundSize = "cover",
                a.style.backgroundPosition = "center",
                e.querySelector(".mbr-background-video-preview") || e.childNodes[0].before(a);
                if (i && (/youtu\.?be/g.test(i[3]) || /vimeo/g.test(i[3]))) {
                    if (i && /youtu\.?be/g.test(i[3])) {
                        i[6] = i[6].replace("shorts", "embed");
                        var l = "http" + ("https:" === location.protocol ? "s" : "") + ":";
                        l += "//img.youtube.com/vi/" + i[6] + "/maxresdefault.jpg";
                        var s = new Image;
                        s.onload = function() {
                            if (120 === (s.naturalWidth || s.width)) {
                                var n = s.src.split("/").pop();
                                switch (n) {
                                case "maxresdefault.jpg":
                                    s.src = s.src.replace(n, "sddefault.jpg");
                                    break;
                                case "sddefault.jpg":
                                    s.src = s.src.replace(n, "hqdefault.jpg");
                                    break;
                                default:
                                    t && (a.style.backgroundImage = 'url("images/no-video.jpg")',
                                    a.style.display = "block")
                                }
                            } else
                                a.style.backgroundImage = 'url("' + s.src + '")',
                                a.style.display = "block";
                            e.querySelector(".mbr-background-video") && e.querySelector(".mbr-background-video").remove();
                            var o = document.createElement("div");
                            const l = document.createElement("div")
                              , c = document.createElement("div")
                              , d = document.createElement("div");
                            d.classList.add("mbr-video-foreground"),
                            d.appendChild(o),
                            c.appendChild(d),
                            l.appendChild(c),
                            o.classList.add("mbr-background-video");
                            e.childNodes[1].before(l);
                            var u = {
                                height: s.naturalHeight,
                                width: s.naturalWidth,
                                scale: s.naturalHeight / s.naturalWidth
                            }
                              , m = {
                                height: o.parentNode.clientHeight,
                                width: o.parentNode.clientWidth,
                                scale: o.parentNode.clientHeight / o.parentNode.clientWidth
                            }
                              , f = {
                                height: u.height < m.height ? u.height : m.height,
                                width: u.width > m.width ? u.width : m.width
                            };
                            f.height / f.width != u.scale && (f.height = f.width * u.scale);
                            var h = new YouTubePlayer(o,{
                                modestBranding: !0,
                                autoplay: !0,
                                controls: !1,
                                origin: "*",
                                iv_load_policy: !1,
                                keyboard: !1,
                                captions: !1,
                                annotations: !1,
                                related: !1,
                                start: r
                            });
                            l.style.overflow = "hidden",
                            l.style.position = "absolute",
                            l.style.width = "100%",
                            l.style.height = "100%",
                            l.style.top = "0",
                            l.style.left = "0",
                            c.style.background = "#000",
                            c.style.top = "0",
                            c.style.right = "0",
                            c.style.bottom = "0",
                            c.style.left = "0",
                            d.style.position = "absolute",
                            d.style.top = "0",
                            d.style.left = "0",
                            d.style.width = "100%",
                            d.style.height = "100%",
                            d.style.pointerEvents = "none",
                            o.style.marginTop = "0",
                            o.style.maxWidth = "initial",
                            o.style.transitionProperty = "opacity",
                            o.style.transitionDuration = "1000ms",
                            o.style.pointerEvents = "none",
                            o.style.position = "absolute",
                            o.style.top = "0",
                            o.style.left = "0",
                            o.style.width = "100%",
                            o.style.height = "100%",
                            o.parentNode.style.overflow = "hidden",
                            o.style.transform = "scale(1.2)",
                            h.load(i[6], !0, r),
                            h.play(),
                            h.setLoop(!0),
                            h.mute(),
                            h.on("ended", (()=>h.play())),
                            function(e, t) {
                                let n = {}
                                  , o = {};
                                o.width = window.outerWidth,
                                o.height = window.outerHeight;
                                let r = e._opts.width / e._opts.height;
                                n.width = o.width,
                                n.height = Math.ceil(n.width / r),
                                n.marginTop = Math.ceil(-(n.height - o.height) / 2),
                                n.height < o.height && (n.height = o.height,
                                n.width = Math.ceil(n.height * r),
                                n.marginLeft = Math.ceil(-(n.width - o.width) / 2)),
                                e.setSize(n.width, n.height)
                            }(h)
                        }
                        ,
                        s.setAttribute("src", l)
                    } else if (i && /vimeo/g.test(i[3])) {
                        var c = new XMLHttpRequest;
                        c.open("GET", "https://vimeo.com/api/v2/video/" + i[6] + ".json", !0),
                        c.onreadystatechange = function() {
                            if (4 === this.readyState)
                                if (this.status >= 200 && this.status < 400) {
                                    var e = JSON.parse(this.responseText);
                                    a.style.backgroundImage = 'url("' + e[0].thumbnail_large + '")',
                                    a.style.display = "block"
                                } else
                                    t && (a.style.backgroundImage = 'url("images/no-video.jpg")',
                                    a.style.display = "block")
                        }
                        ,
                        c.send(),
                        c = null,
                        e.querySelector(".mbr-background-video") && e.querySelector(".mbr-background-video").remove(),
                        (f = document.createElement("div")).classList.add("mbr-background-video");
                        e.childNodes[1].before(f);
                        var d = {
                            id: n,
                            loop: !0,
                            background: !0,
                            responsive: !0,
                            autoplay: !0,
                            byline: !1,
                            title: !1,
                            muted: !0,
                            controls: !1
                        }
                          , u = new Vimeo.Player(f,d)
                          , m = u.element.parentNode;
                        m.style.overflow = "hidden",
                        u.element.style.pointerEvents = "none",
                        u.element.style.marginLeft = "-" + (u.element.scrollWidth - m.scrollWidth) / 2 + "px",
                        u.element.style.minHeight = "100vh",
                        u.element.style.minWidth = "177.77vh"
                    }
                } else if (t)
                    a.style.backgroundImage = 'url("images/video-placeholder.jpg")',
                    a.style.display = "block";
                else if (!t) {
                    var f = document.createElement("video")
                      , h = document.createElement("source");
                    f.append(h),
                    e.childNodes[1].before(f),
                    h.src = n,
                    f.autoplay = !0,
                    f.loop = !0,
                    f.muted = !0,
                    f.setAttribute("muted", ""),
                    f.playsinline = !0,
                    f.setAttribute("playsinline", ""),
                    f.style.position = "absolute",
                    f.style.left = "50%",
                    f.style.top = "50%",
                    f.style.bottom = "0",
                    f.style.right = "0",
                    f.style.minWidth = "100%",
                    f.style.minHeight = "100%",
                    f.style.transform = "translateX(-50%) translateY(-50%)";
                    let t = "";
                    e.querySelector(".mbr-fallback-image") && (t = window.getComputedStyle(e.querySelector(".mbr-fallback-image")).backgroundImage,
                    t = t.match(/\((.*?)\)/)[1].replace(/('|")/g, ""),
                    f.setAttribute("poster", t)),
                    f.parentNode.style.overflow = "hidden"
                }
            }
            ))
        }
        if (window.addEventListener("scroll", (function() {
            m && clearTimeout(m);
            var e = document.documentElement.scrollTop
              , t = e <= f || p;
            if (f = e,
            h) {
                var n = e > h.breakPoint;
                t ? n != h.fixed && (p ? (h.fixed = n,
                h.elm.classList.toggle("is-fixed")) : m = setTimeout((function() {
                    h.fixed = n,
                    h.elm.classList.toggle("is-fixed")
                }
                ), 40)) : (h.fixed = !1,
                h.elm.classList.remove("is-fixed"))
            }
        }
        )),
        o && e(document).on("add.cards delete.cards", (function(e) {
            c && clearTimeout(c),
            c = setTimeout((function() {
                h && (h.fixed = !1,
                h.elm.classList.remove("is-fixed"));
                var e = document.querySelector(".mbr-fixed-top");
                e && (h = {
                    breakPoint: i(e).top + 3 * a(e),
                    fixed: !1,
                    elm: e
                },
                e.dispatchEvent(new CustomEvent("scroll")))
            }
            ), 650)
        }
        )),
        window.smartresize((function() {
            document.querySelectorAll(".mbr-embedded-video").forEach((function(e) {
                e.style.height = (l(e) * parseInt(e.getAttribute("height") || 315) / parseInt(e.getAttribute("width") || 560)).toFixed() + "px"
            }
            ))
        }
        )),
        o && e(document).on("add.cards", (function(e) {
            document.querySelector("html").classList.contains("mbr-site-loaded") && r(e.target, "iframe").length && window.dispatchEvent(new CustomEvent("resize"))
        }
        )),
        t) {
            if (!o)
                return;
            var y = [];
            e(document).on("add.cards", (function(e) {
                e.target !== document && !y.some((t=>t === e.target)) && e.target.hasAttribute("mbr-data-bg-video") && (y.push(e.target),
                g(e.target))
            }
            ))
        } else
            g(document.body);
        t && e(document).on("changeParameter.cards", (function(e, t, n, o) {
            if ("bg" === t)
                switch (o) {
                case "type":
                case "value":
                    "video" === n.type && g(e.target)
                }
        }
        )),
        document.querySelector("html").classList.add("mbr-site-loaded"),
        window.dispatchEvent(new CustomEvent("resize")),
        window.dispatchEvent(new CustomEvent("scroll")),
        t || document.addEventListener("click", (function(e) {
            try {
                var t = e.target;
                if (t.parents().some((function(e) {
                    e.classList.contains("carousel")
                }
                )))
                    return;
                do {
                    if (t.hash) {
                        var n = /#bottom|#top/g.test(t.hash);
                        document.querySelectorAll(n ? "body" : t.hash).forEach((function(n) {
                            e.preventDefault();
                            var o = document.querySelector(".navbar-fixed-top")
                              , r = "#bottom" == t.hash ? a(n) - window.innerHeight : i(n).top - (o ? 60 : 0);
                            n.classList.contains("panel-collapse") || n.classList.contains("tab-pane") || t.classList.contains("carousel-control") || t.parents(".carousel-controls").length || window.scrollTo({
                                top: r,
                                left: 0,
                                behavior: "smooth"
                            })
                        }
                        ));
                        break
                    }
                } while (t = t.parentNode)
            } catch (e) {}
        }
        )),
        document.querySelectorAll(".cols-same-height .mbr-figure").forEach((function(e) {
            var t = e.querySelector("img")
              , n = e.parentNode
              , o = t.width
              , r = t.height;
            function i() {
                if (t.style.width = "",
                t.style.maxWidth = "",
                t.style.marginLeft = "",
                r && o) {
                    var i = r / o;
                    e.style.position = "absolute",
                    e.style.top = "0",
                    e.style.left = "0",
                    e.style.right = "0",
                    e.style.bottom = "0";
                    var s = a(n) / l(n);
                    if (s > i) {
                        var c = 100 * (s - i) / i;
                        t.style.width = c + 100 + "%",
                        t.style.maxWidth = c + 100 + "%",
                        t.style.marginLeft = -c / 2 + "%"
                    }
                }
            }
            t.addEventListener("load", (function() {
                o = t.width,
                r = t.height,
                i()
            }
            ), {
                once: !0
            }),
            window.addEventListener("resize", i),
            i()
        }
        ))
    }
    )),
    t || (o && e.fn.socialLikes && e(document).on("add.cards", (function(e) {
        r(e.target, ".mbr-social-likes").forEach((function(e) {
            e.addEventListener("counter.social-likes", (function(e, t, n) {
                n > 999 && e.target.querySelectorAll(".social-likes__counter").forEach((function(e) {
                    e.innerHTML = Math.floor(n / 1e3) + "k"
                }
                ))
            }
            )),
            e.socialLikes({
                initHtml: !1
            })
        }
        ))
    }
    )),
    Array.from(document.body.children).filter((function(e) {
        return !e.matches("style, script")
    }
    )).forEach((function(e) {
        e.classList.contains("mbr-reveal") && e.addEventListener("add.cards", (function() {
            e.footerReveal()
        }
        ))
    }
    )),
    s((function() {
        if (!d() && document.querySelectorAll("input[name=animation]").length) {
            document.querySelectorAll("input[name=animation]").forEach((function(e) {
                e.remove()
            }
            ));
            var e = Array.from(document.querySelectorAll("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info, .item"));
            function t() {
                var t = window.innerHeight
                  , n = document.documentElement.scrollTop || document.body.scrollTop
                  , o = n + t - 100;
                e.forEach((function(e) {
                    var t = e
                      , r = t.offsetHeight
                      , i = function(e) {
                        var t = 0;
                        do {
                            t += e.offsetTop || 0,
                            e = e.offsetParent
                        } while (e);
                        return t
                    }(t);
                    (i + r >= n && i - 50 <= o || function(e) {
                        if (e.parents(".carousel-item").some((function(e) {
                            return "none" !== getComputedStyle(e, null).display
                        }
                        )))
                            return !1;
                        var t = e.parents(".carousel-item").parentNode;
                        if (!t)
                            return !1;
                        if (t.querySelectorAll(".carousel-item.active .hidden.animate__animated").length)
                            return !1;
                        if (t.getAttribute("data-visible") > 1) {
                            var n = t.getAttribute("data-visible");
                            return !(!e.parents().some((function(e) {
                                return e.matches(".cloneditem-" + (n - 1))
                            }
                            )) || !e.parents(".cloneditem-" + (n - 1)).some((function(e) {
                                return e.getAttribute("data-cloned-index") >= n
                            }
                            ))) || (e.classList.remove("animate__animated animate__delay-1s hidden"),
                            !1)
                        }
                        return !0
                    }(e)) && e.classList.contains("hidden") && (e.classList.remove("hidden"),
                    e.classList.add("animate__fadeIn"),
                    e.classList.add("animate__delay-1s"),
                    e.addEventListener("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                        e.classList.remove("animate__animated animate__delay-1s animate__fadeIn")
                    }
                    ), {
                        once: !0
                    }))
                }
                ))
            }
            (e = (e = e.filter((function(e) {
                if (!e.parents().filter((function(e) {
                    if (e.matches("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop, .modal, .item"))
                        return !0
                }
                )).length)
                    return !0
            }
            ))).filter((function(e) {
                if (!e.parents().filter((function(t) {
                    return t.matches("form") && !e.matches("li")
                }
                )).length)
                    return !0
            }
            ))).forEach((function(e) {
                e.classList.add("hidden"),
                e.classList.add("animate__animated"),
                e.classList.add("animate__delay-1s")
            }
            )),
            window.addEventListener("scroll", t),
            window.addEventListener("resize", t),
            window.dispatchEvent(new CustomEvent("scroll"))
        }
    }
    ))),
    s((function() {
        if (document.querySelectorAll(".mbr-arrow-up").length) {
            var e = document.querySelector("#scrollToTop");
            e.style.display = "none",
            window.addEventListener("scroll", (function() {
                var t, n = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                (document.documentElement.scrollTop || document.body.scrollTop) > n / 2 - document.documentElement.clientHeight / 2 || window.scrollY > window.innerHeight ? ((t = e).style.display = "block",
                function e() {
                    var n = parseFloat(t.style.opacity);
                    (n += .1) > 1 || (t.style.opacity = n,
                    requestAnimationFrame(e))
                }()) : function(e) {
                    !function t() {
                        (e.style.opacity -= .1) < 0 ? e.style.display = "none" : requestAnimationFrame(t)
                    }()
                }(e)
            }
            )),
            e.addEventListener("click", (function() {
                return window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                }),
                !1
            }
            ))
        }
    }
    )),
    !t) {
        var m = document.querySelector(".mbr-arrow");
        m && m.addEventListener("click", (function(e) {
            var t = e.target.closest("section").nextElementSibling;
            t.classList.contains("engine") && (t = t.closest("section").nextElementSibling),
            window.scrollTo(0, i(t).top)
        }
        ))
    }
    if (document.querySelectorAll("nav.navbar").length) {
        var f = a(document.querySelector("nav.navbar"));
        document.querySelector(".mbr-after-navbar.mbr-fullscreen") && (document.querySelector(".mbr-after-navbar.mbr-fullscreen").style.paddingTop = f + "px")
    }
    if (!t && (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && e(document).on("add.cards", (function(e) {
        var t = e.target;
        if (t.classList.contains("mbr-fullscreen")) {
            var n = function() {
                t.style.height = "auto",
                t.offsetHeight <= window.innerHeight && (t.style.height = "1px")
            };
            window.addEventListener("load", n),
            window.addEventListener("resize", n)
        }
        (t.classList.contains("mbr-slider") || t.classList.contains("mbr-gallery")) && (t.querySelectorAll(".carousel-indicators").forEach((function(e) {
            e.classList.add("ie-fix"),
            e.querySelectorAll("li").forEach((function(e) {
                e.style.display = "inline-block",
                e.style.width = "30px"
            }
            ))
        }
        )),
        t.classList.contains("mbr-slider") && t.querySelectorAll(".full-screen .slider-fullscreen-image").forEach((function(e) {
            e.style.height = "1px"
        }
        )))
    }
    )),
    s((function() {
        if (!t) {
            var e = function(e) {
                if (e.target)
                    return "VIDEO" == e.target.tagName ? (e.preventDefault(),
                    void e.stopPropagation()) : void n(e.target)
            }
              , n = function(t) {
                var n = t.parents("section")[0].querySelector("iframe")
                  , o = n.getAttribute("src");
                if (t.parents("section").forEach((function(e) {
                    e.style.zIndex = "5000"
                }
                )),
                o) {
                    if (-1 !== o.indexOf("youtu") && n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*"),
                    -1 !== o.indexOf("vimeo")) {
                        var r = new Vimeo.Player(n);
                        r.play()
                    }
                } else {
                    let e = n.parentNode.querySelector("video");
                    e && e.play && e.play()
                }
                var i = t.parents("section")[0]
                  , a = i.querySelector(i.querySelector("[data-modal]").getAttribute("data-modal"));
                a.style.display = "table",
                a.addEventListener("click", (function(t) {
                    if ("VIDEO" !== t.target.tagName) {
                        if (o)
                            -1 !== o.indexOf("youtu") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"),
                            -1 !== o.indexOf("vimeo") && r.pause();
                        else {
                            let e = n.parentNode.querySelector("video");
                            e && e.pause && e.pause()
                        }
                        a.style.display = "none",
                        a.removeEventListener("click", e),
                        i.style.zIndex = "0"
                    }
                }
                ))
            };
            document.querySelectorAll(".modalWindow-video > iframe").forEach((function(e) {
                var t = e.getAttribute("data-src");
                if (t) {
                    e.removeAttribute("data-src");
                    var n = t.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);
                    if (-1 !== t.indexOf("youtu"))
                        e.setAttribute("src", "https://youtube.com/embed/" + n[6] + "?rel=0&enablejsapi=1");
                    else if (-1 !== t.indexOf("vimeo"))
                        e.setAttribute("src", "https://player.vimeo.com/video/" + n[6] + "?autoplay=0&loop=0");
                    else if (/\.mp4|\.webm|\.ogg|\.ogv|\.m4a|\.m4v/.test(t)) {
                        let n = document.createElement("video");
                        n.onloadeddata = function(e) {
                            e.target.videoHeight > e.target.videoWidth ? e.target.style.height = window.innerHeight - .2 * window.innerHeight + "px" : e.target.style.height = "100%"
                        }
                        ;
                        let o = e.parents("section")[0].querySelector("img");
                        o && n.setAttribute("poster", o.src),
                        n.setAttribute("controls", ""),
                        n.setAttribute("playsinline", ""),
                        n.setAttribute("loop", ""),
                        n.setAttribute("src", t),
                        e.style.display = "none",
                        n.style.width = "100%",
                        e.after(n)
                    }
                }
            }
            )),
            document.querySelector("[data-modal]") && document.querySelectorAll("[data-modal]").forEach((function(t) {
                t.addEventListener("click", e)
            }
            ))
        }
    }
    )),
    !t) {
        const e = document.querySelectorAll(".dropdown-toggle.show")
          , t = document.querySelectorAll(".dropdown-menu.show, .dropdown.open")
          , n = document.querySelectorAll(".dropdown.open");
        if (e.forEach((e=>{
            e.classList.remove("show"),
            e.ariaExpanded = "false"
        }
        )),
        t.forEach((e=>e.classList.remove("show"))),
        n.forEach((e=>e.classList.remove("open"))),
        !d()) {
            var h = document.querySelector("section.menu");
            if (h) {
                var p = window.innerWidth;
                h.querySelector(".navbar").classList.contains("collapsed") || p > 991 && (h.querySelectorAll("ul.navbar-nav li.dropdown").forEach((function(e) {
                    e.addEventListener("mouseover", (function() {
                        if (!e.classList.contains("open")) {
                            e.querySelector("a").parentNode.classList.toggle("open")
                        }
                    }
                    )),
                    e.addEventListener("mouseout", (function() {
                        if (e.classList.contains("open")) {
                            e.querySelector("a").parentNode.classList.toggle("open")
                        }
                    }
                    ))
                }
                )),
                h.querySelectorAll("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").forEach((function(e) {
                    e.addEventListener("mouseover", (function() {
                        e.classList.contains("open") || e.classList.toggle("open")
                    }
                    )),
                    e.addEventListener("mouseout", (function() {
                        e.classList.contains("open") && e.classList.toggle("open")
                    }
                    ))
                }
                )))
            }
        }
    }
    function g(e) {
        var t = e.querySelector(".carousel-item")
          , n = e.querySelector(".carousel-indicators > li");
        t.classList.add("active"),
        n && n.classList.add("active")
    }
    function y(e) {
        var t = e
          , n = t.getAttribute("id") + "-carousel"
          , o = t.getAttribute("data-bs-version") && t.getAttribute("data-bs-version").startsWith("5");
        null === t.getAttribute("id") && (n = t.classList.value.match(/cid-.*?(?=\s|$)/) + "-carousel"),
        t.querySelectorAll(".carousel").forEach((function(e) {
            e.setAttribute("id", n)
        }
        )),
        t.querySelector(".carousel-controls") && t.querySelectorAll(".carousel-controls").forEach((function(e) {
            e.querySelectorAll("a").forEach((function(e) {
                e.setAttribute("href", "#" + n),
                o ? e.setAttribute("data-bs-target", "#" + n) : e.setAttribute("data-target", "#" + n)
            }
            ))
        }
        )),
        t.querySelectorAll(".carousel-indicators > li").forEach((function(e) {
            o ? e.setAttribute("data-bs-target", "#" + n) : e.setAttribute("data-target", "#" + n)
        }
        )),
        g(t)
    }
    if (t || (void 0 === window.initClientPlugin && 0 != document.body.querySelectorAll(".clients").length && (window.initClientPlugin = !0,
    document.body.querySelectorAll(".clients").forEach((function(e) {
        var t, n, o;
        e.getAttribute("data-isinit") || (y(e),
        n = (t = e).querySelectorAll(".carousel-item").length,
        o = t.querySelector(".carousel-inner").getAttribute("data-visible"),
        n < o && (o = n),
        t.querySelectorAll(".carousel-inner").forEach((function(e) {
            e.setAttribute("class", "carousel-inner slides" + o)
        }
        )),
        t.querySelectorAll(".clonedCol").forEach((function(e) {
            e.remove()
        }
        )),
        t.querySelectorAll(".carousel-item .col-md-12").forEach((function(e) {
            o < 2 ? e.setAttribute("class", "col-md-12") : "5" == o ? e.setAttribute("class", "col-md-12 col-lg-15") : e.setAttribute("class", "col-md-12 col-lg-" + 12 / o)
        }
        )),
        t.querySelectorAll(".carousel-item .row").forEach((function(e) {
            e.setAttribute("style", "-webkit-flex-grow: 1; flex-grow: 1; margin: 0;")
        }
        )),
        t.querySelectorAll(".carousel-item").forEach((function(e) {
            for (var t = e, n = 1; n < o; n++) {
                (t = t.nextElementSibling) || (t = e.parentNode.children[0] === e ? e.nextElementSibling : e.parentNode.children[0]);
                var r = c(t)
                  , i = t.querySelector(".col-md-12").cloneNode(!0);
                i.classList.add("cloneditem-" + n),
                i.classList.add("clonedCol"),
                i.setAttribute("data-cloned-index", r),
                e.children[0].appendChild(i)
            }
        }
        )))
    }
    ))),
    void 0 === window.initPopupBtnPlugin && 0 != document.body.querySelectorAll("section.popup-btn-cards").length && (window.initPopupBtnPlugin = !0,
    document.querySelectorAll("section.popup-btn-cards .card-wrapper").forEach((function(e) {
        e.classList.add("popup-btn")
    }
    ))),
    void 0 === window.initTestimonialsPlugin && 0 != document.body.querySelectorAll(".testimonials-slider").length && (window.initTestimonialsPlugin = !0,
    document.querySelectorAll(".testimonials-slider").forEach((function(e) {
        y(e)
    }
    ))),
    void 0 === window.initSwitchArrowPlugin && (window.initSwitchArrowPlugin = !0,
    s((function() {
        0 != document.querySelectorAll(".accordionStyles").length && document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach((function(e) {
            e.classList.contains("collapsed") || e.classList.add("collapsed")
        }
        ))
    }
    )),
    document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach((function(e) {
        e.addEventListener("click", (function() {
            var t = e.closest(".accordionStyles").getAttribute("id")
              , n = e.closest(".card").querySelector(".panel-collapse")
              , o = e.querySelector("span.sign") ? e.querySelector("span.sign") : e.querySelector("span.mbr-iconfont");
            if (n.classList.contains("collapsing") && (-1 != t.indexOf("toggle") || -1 != t.indexOf("accordion")) && (e.classList.contains("collapsed") ? (o.classList.remove("mbri-arrow-up"),
            o.classList.add("mbri-arrow-down")) : (o.classList.remove("mbri-arrow-down"),
            o.classList.add("mbri-arrow-up")),
            -1 != t.indexOf("accordion"))) {
                var r = e.closest(".accordionStyles");
                Array.from(r.children).filter((function(e) {
                    return e.querySelector("span.sign") !== o
                }
                )).forEach((function(e) {
                    var t = e.querySelector("span.sign") ? e.querySelector("span.sign") : e.querySelector("span.mbr-iconfont");
                    t.classList.remove("mbri-arrow-up"),
                    t.classList.add("mbri-arrow-down")
                }
                ))
            }
        }
        ))
    }
    ))),
    0 != document.querySelectorAll(".mbr-slider.carousel").length && document.querySelectorAll(".mbr-slider.carousel").forEach((function(t) {
        var n = t
          , r = n.querySelectorAll(".carousel-control")
          , i = n.querySelectorAll(".carousel-indicators li")
          , a = function(e) {
            !function(e) {
                e.stopPropagation(),
                e.preventDefault()
            }(e)
        };
        n.addEventListener("slide.bs.carousel", (function() {
            r.forEach((function(e) {
                e.addEventListener("click", a)
            }
            )),
            i.forEach((function(e) {
                e.addEventListener("click", a)
            }
            )),
            o && e(n).carousel({
                keyboard: !1
            })
        }
        )),
        n.addEventListener("slid.bs.carousel", (function() {
            r.forEach((function(e) {
                e.removeEventListener("click", a)
            }
            )),
            i.forEach((function(e) {
                e.removeEventListener("click", a)
            }
            )),
            o && e(n).carousel({
                keyboard: !0
            }),
            n.querySelectorAll(".carousel-item.active").length > 1 && (n.querySelectorAll(".carousel-item.active")[1].classList.remove("active"),
            n.querySelectorAll(".carousel-control li.active")[1].classList.remove("active"))
        }
        ))
    }
    ))),
    t) {
        if (!o)
            return;
        e(document).on("add.cards", (function(t) {
            if (e(t.target).find(".form-with-styler").length) {
                var n = e(t.target).find(".form-with-styler");
                e(n).find('select:not("[multiple]")').each((function() {
                    e(this).styler && e(this).styler()
                }
                )),
                e(n).find("input[type=number]").each((function() {
                    e(this).styler && (e(this).styler(),
                    e(this).parent().parent().removeClass("form-control"))
                }
                )),
                e(n).find("input[type=date]").each((function() {
                    e(this).datetimepicker && e(this).datetimepicker({
                        format: "Y-m-d",
                        timepicker: !1
                    })
                }
                )),
                e(n).find("input[type=time]").each((function() {
                    e(this).datetimepicker && e(this).datetimepicker({
                        format: "H:i",
                        datepicker: !1
                    })
                }
                ))
            }
        }
        ))
    }
    function v(e, t, n) {
        var o = e.closest(".card")
          , r = o.parentElement.classList;
        o.getAttribute("style") || o.setAttribute("style", "-webkit-flex-basis: auto; flex-basis: auto;"),
        r.contains("row") && (r.remove("row"),
        r.add("media-container-row")),
        e.querySelectorAll(".svg-gradient > *").forEach((function(e) {
            e.setAttribute("id", t)
        }
        ));
        var i = e.cloneNode(!0);
        Array.from(e.children).forEach((function(e) {
            if ("SVG" !== e.tagName)
                return e.remove()
        }
        )),
        e.setAttribute("data-pie", `{ ${function(e) {
            var t = ""
              , n = e.querySelector("svg linearGradient");
            if (n) {
                for (var o = [], r = Array.from(n.children), i = 0; i < r.length; i++)
                    o.push(`"${r[i].getAttribute("stop-color")}"`);
                t = `"lineargradient": [${o}],`,
                Array.from(e.querySelectorAll("svg")).some((function(e) {
                    return e.classList.contains("svg-gradient")
                }
                )) || e.querySelectorAll("svg").forEach((function(e) {
                    e.classList.add("svg-gradient")
                }
                ))
            }
            return t
        }(e.closest("section"))} "percent": ${n}, "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#${t})", "fontSize": "1.3rem", "number": false }`),
        Array.from(i.children).forEach((function(t) {
            switch (!0) {
            case t.matches("p"):
                t.innerText = n + "%",
                e.appendChild(t);
                break;
            case t.matches("svg"):
                break;
            default:
                e.appendChild(t)
            }
        }
        ))
    }
    function b(e) {
        var t = e.closest("section").getAttribute("id") + "-svg-gradient"
          , n = +e.getAttribute("data-goal");
        v(e, t, n)
    }
    function w() {
        if (!document.querySelector(".loop-container"))
            return;
        const e = t=>{
            const n = {
                current: 0,
                target: 0
            }
              , o = +t.children[0].dataset.speed || .05
              , r = t.querySelector(".item")
              , i = r.dataset.direction;
            if (r) {
                const a = ()=>{
                    t.querySelectorAll(".item").forEach((e=>{
                        const t = e.dataset.linewords;
                        e.textContent = t + " "
                    }
                    ))
                }
                ;
                a(),
                t.style.cssText = "position: relative; display: inline-flex; white-space: nowrap;",
                t.children[1].style.cssText = `position: absolute; left: ${100 * -i}%;`;
                const l = ()=>{
                    var e, r, a;
                    n.target += o,
                    n.current = (e = n.current,
                    r = n.target,
                    e * (1 - (a = .2)) + r * a),
                    n.target > 100 && (n.current -= n.target,
                    n.target = 0);
                    const s = n.current * i;
                    t.style.transform = `translateX(${s}%)`,
                    window.requestAnimationFrame(l)
                }
                  , s = ()=>{
                    window.addEventListener("scroll", (()=>n.target += 1.5 * o))
                }
                  , c = new MutationObserver((()=>{
                    document.querySelectorAll(".loop-container").forEach((e=>{
                        e.style.transform = ""
                    }
                    )),
                    c.disconnect(),
                    e(t)
                }
                ));
                c.observe(r, {
                    attributes: !0,
                    attributeFilter: ["data-direction", "data-speed", "data-linewords"]
                }),
                s(),
                l()
            }
        }
        ;
        document.querySelectorAll(".loop-container").forEach((t=>e(t)))
    }
    function E() {
        const e = Array.from(document.querySelectorAll(".ticker__item"));
        if (0 === e.length)
            return;
        const t = e.map((e=>e.textContent))
          , n = new MutationObserver((function() {
            e.forEach(((e,t)=>{
                const n = e.dataset.word;
                e.textContent = n
            }
            ))
        }
        ));
        e.forEach(((e,o)=>{
            e.textContent = t[o],
            n.observe(e, {
                attributes: !0,
                attributeFilter: ["data-word"]
            })
        }
        ));
        document.querySelectorAll(".ticker__item").forEach((e=>{
            const t = e.dataset.word;
            e.textContent = t
        }
        ))
    }
    document.querySelectorAll('input[type="range"]').forEach((function(e) {
        e.addEventListener("change", (function(e) {
            e.target.parents(".form-group").forEach((function(t) {
                t.querySelector(".value").innerHTML = e.target.value
            }
            ))
        }
        ))
    }
    )),
    t ? e(document).on("add.cards changeParameter.cards", (function(e, t) {
        "undefined" != typeof CircularProgressBar && new CircularProgressBar("pie_progress"),
        t ? function(e, t) {
            if (e.classList.contains("circle-progress-section") && t.includes("progress") && "progressCount" != t)
                if (t.includes("Color"))
                    e.querySelectorAll(".pie_progress").forEach((function(t) {
                        var n = e.getAttribute("id") + "-svg-gradient"
                          , o = +t.getAttribute("data-goal");
                        v(t, n, o)
                    }
                    ));
                else {
                    var n = e.getAttribute("id") + "-svg-gradient"
                      , o = e.querySelector("." + t)
                      , r = +o.getAttribute("data-goal");
                    v(o, n, r)
                }
        }(e.target, t) : e.target.querySelectorAll(".pie_progress").length && e.target.querySelectorAll(".pie_progress").forEach((function(e) {
            b(e)
        }
        ))
    }
    )) : document.querySelectorAll(".pie_progress").length && ("undefined" != typeof CircularProgressBar && new CircularProgressBar("pie_progress"),
    document.querySelectorAll(".pie_progress").forEach((function(e) {
        b(e)
    }
    ))),
    t && o ? e(document).on("add.cards", (function(t) {
        e(t.target).hasClass("testimonials-slider") && y(t.target)
    }
    )).on("changeParameter.cards", (function(t, n, o) {
        "testimonialsSlides" === n && 0 == e(t.target).find(".carousel-item.active").length && g(t.target)
    }
    )) : void 0 === window.initTestimonialsPlugin && (window.initTestimonialsPlugin = !0,
    document.querySelectorAll(".testimonials-slider").forEach((function(e) {
        y(e)
    }
    ))),
    s((function() {
        t || Array.from(document.body.children).filter((function(e) {
            return !e.matches("style, script")
        }
        )).forEach((function(e) {
            if (window.Event && "function" == typeof window.Event)
                var t = new Event("add.cards");
            else
                (t = document.createEvent("CustomEvent")).initEvent("add.cards", !0, !0);
            e.dispatchEvent(t)
        }
        ))
    }
    )),
    s((()=>{
        window.addEventListener("scroll", (()=>{
            const e = document.querySelector(".navbar-dropdown")
              , t = document.querySelector(".navbar-collapse");
            if (e && !e.classList.contains("opacityScrollOff")) {
                const n = document.documentElement.scrollTop > 1;
                e.classList.toggle("opacityScroll", !n),
                t.classList.toggle("opacityScroll", !n)
            }
        }
        ))
    }
    )),
    t ? e(document).on("add.cards", w) : window.addEventListener("DOMContentLoaded", w),
    t ? e(document).on("add.cards", E) : window.addEventListener("DOMContentLoaded", E)
}();
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = []
      , r = Object.getPrototypeOf
      , i = n.slice
      , o = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , a = n.push
      , s = n.indexOf
      , u = {}
      , l = u.toString
      , c = u.hasOwnProperty
      , f = c.toString
      , p = f.call(Object)
      , d = {}
      , h = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , g = function(e) {
        return null != e && e === e.window
    }
      , v = e.document
      , y = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var r, i, o = (n = n || v).createElement("script");
        if (o.text = e,
        t)
            for (r in y)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var b = "3.5.1"
      , w = function(e, t) {
        return new w.fn.init(e,t)
    };
    function T(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: b,
        constructor: w,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(w.grep(this, (function(e, t) {
                return (t + 1) % 2
            }
            )))
        },
        odd: function() {
            return this.pushStack(w.grep(this, (function(e, t) {
                return t % 2
            }
            )))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || h(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    w.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e) || (t = r(e)) && ("function" != typeof (n = c.call(t, "constructor") && t.constructor) || f.call(n) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0, s = [];
            if (T(e))
                for (r = e.length; a < r; a++)
                    null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e)
                    null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: d
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var C = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ue(), S = ue(), k = ue(), A = ue(), N = function(e, t) {
            return e === t && (f = !0),
            0
        }, D = {}.hasOwnProperty, j = [], q = j.pop, L = j.push, H = j.push, O = j.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            p()
        }, ae = be((function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(j = O.call(w.childNodes), w.childNodes),
            j[w.childNodes.length].nodeType
        } catch (t) {
            H = {
                apply: j.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, r, i) {
            var o, s, l, c, f, h, y, m = t && t.ownerDocument, w = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                return r;
            if (!i && (p(t),
            t = t || d,
            g)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return H.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return H.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (y = e,
                    m = t,
                    1 === w && (U.test(e) || z.test(e))) {
                        for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)),
                        s = (h = a(e)).length; s--; )
                            h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                        y = h.join(",")
                    }
                    try {
                        return H.apply(r, m.querySelectorAll(y)),
                        r
                    } catch (t) {
                        A(e, !0)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace($, "$1"), t, r, i)
        }
        function ue() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
        }
        function le(e) {
            return e[b] = !0,
            e
        }
        function ce(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ge(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function ve(e) {
            return le((function(t) {
                return t = +t,
                le((function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                }
                ))
            }
            ))
        }
        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {},
        o = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        p = se.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a != d && 9 === a.nodeType && a.documentElement && (h = (d = a).documentElement,
            g = !o(d),
            w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
            n.scope = ce((function(e) {
                return h.appendChild(e).appendChild(d.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }
            )),
            n.attributes = ce((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            n.getElementsByTagName = ce((function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            n.getElementsByClassName = K.test(d.getElementsByClassName),
            n.getById = ce((function(e) {
                return h.appendChild(e).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }
            )),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            y = [],
            v = [],
            (n.qsa = K.test(d.querySelectorAll)) && (ce((function(e) {
                var t;
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                (t = d.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }
            )),
            ce((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            }
            ))),
            (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                n.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                y.push("!=", F)
            }
            )),
            v = v.length && new RegExp(v.join("|")),
            y = y.length && new RegExp(y.join("|")),
            t = K.test(h.compareDocumentPosition),
            x = t || K.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            N = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (i === o)
                    return pe(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
            }
            ),
            d
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (p(e),
            n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {
                    A(t, !0)
                }
            return 0 < se(t, d, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != d && p(e),
            x(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != d && p(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(N),
            f) {
                for (; t = e[o++]; )
                    t === e[o] && (i = r.push(o));
                for (; i--; )
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = se.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += i(t);
            return n
        }
        ,
        (r = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = se.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(B, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, y = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (v) {
                            if (o) {
                                for (; g; ) {
                                    for (p = t; p = p[g]; )
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild],
                            a && m) {
                                for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                p !== t)); )
                                    ;
                            return (x -= i) === r || x % r == 0 && 0 <= x / r
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : 1 < i.length ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; )
                            e[r = P(e, o[a])] = !(n[r] = o[a])
                    }
                    )) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: le((function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace($, "$1"));
                    return r[b] ? le((function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }
                    )) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }
                )),
                has: le((function(e) {
                    return function(t) {
                        return 0 < se(e, t).length
                    }
                }
                )),
                contains: le((function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return -1 < (t.textContent || i(t)).indexOf(e)
                    }
                }
                )),
                lang: le((function(e) {
                    return V.test(e || "") || se.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve((function() {
                    return [0]
                }
                )),
                last: ve((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: ve((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: ve((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: ve((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: ve((function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }
                )),
                gt: ve((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                }
                ))
            }
        }).pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = he(t);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = C++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return p[2] = l[2];
                                if ((c[o] = p)[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function we(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(e, t, n, r, i, o) {
            return r && !r[b] && (r = Ce(r)),
            i && !i[b] && (i = Ce(i, o)),
            le((function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), v = !e || !o && t ? g : Te(g, p, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, y, s, u),
                r)
                    for (l = Te(y, d),
                    r(l, [], s, u),
                    c = l.length; c--; )
                        (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [],
                            c = y.length; c--; )
                                (f = y[c]) && l.push(v[c] = f);
                            i(null, y = [], l, u)
                        }
                        for (c = y.length; c--; )
                            (f = y[c]) && -1 < (l = i ? P(o, f) : p[c]) && (o[l] = !(a[l] = f))
                    }
                } else
                    y = Te(y === a ? y.splice(h, y.length) : y),
                    i ? i(null, a, y, u) : H.apply(a, y)
            }
            ))
        }
        function Ee(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be((function(e) {
                return e === t
            }
            ), s, !0), f = be((function(e) {
                return -1 < P(t, e)
            }
            ), s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < o; u++)
                if (n = r.relative[e[u].type])
                    p = [be(we(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                            ;
                        return Ce(1 < u && we(p), 1 < u && xe(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace($, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                    }
                    p.push(n)
                }
            return we(p)
        }
        return me.prototype = r.filters = r.pseudos,
        r.setFilters = new me,
        a = se.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = S[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = r.preFilter; s; ) {
                for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                n = !1,
                (i = z.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace($, " ")
                }),
                s = s.slice(n.length)),
                r.filter)
                    !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
        }
        ,
        s = se.compile = function(e, t) {
            var n, i, o, s, u, c, f = [], h = [], v = k[e + " "];
            if (!v) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (v = Ee(t[n]))[b] ? f.push(v) : h.push(v);
                (v = k(e, (i = h,
                s = 0 < (o = f).length,
                u = 0 < i.length,
                c = function(e, t, n, a, c) {
                    var f, h, v, y = 0, m = "0", x = e && [], b = [], w = l, C = e || u && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, S = C.length;
                    for (c && (l = t == d || t || c); m !== S && null != (f = C[m]); m++) {
                        if (u && f) {
                            for (h = 0,
                            t || f.ownerDocument == d || (p(f),
                            n = !g); v = i[h++]; )
                                if (v(f, t || d, n)) {
                                    a.push(f);
                                    break
                                }
                            c && (T = E)
                        }
                        s && ((f = !v && f) && y--,
                        e && x.push(f))
                    }
                    if (y += m,
                    s && m !== y) {
                        for (h = 0; v = o[h++]; )
                            v(x, b, t, n);
                        if (e) {
                            if (0 < y)
                                for (; m--; )
                                    x[m] || b[m] || (b[m] = q.call(a));
                            b = Te(b)
                        }
                        H.apply(a, b),
                        c && !e && 0 < b.length && 1 < y + o.length && se.uniqueSort(a)
                    }
                    return c && (T = E,
                    l = w),
                    x
                }
                ,
                s ? le(c) : c))).selector = e
            }
            return v
        }
        ,
        u = se.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (2 < (u = d[0] = d[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o],
                !r.relative[c = l.type]); )
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                        if (u.splice(o, 1),
                        !(e = i.length && xe(u)))
                            return H.apply(n, i),
                            n;
                        break
                    }
            }
            return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(N).join("") === b,
        n.detectDuplicates = !!f,
        p(),
        n.sortDetached = ce((function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }
        )),
        ce((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || fe("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        n.attributes && ce((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || fe("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        ce((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || fe(R, (function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        )),
        se
    }(e);
    w.find = C,
    w.expr = C.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = C.uniqueSort,
    w.text = C.getText,
    w.isXMLDoc = C.isXML,
    w.contains = C.contains,
    w.escapeSelector = C.escape;
    var E = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && w(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = w.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, t, n) {
        return h(t) ? w.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        }
        )) : t.nodeType ? w.grep(e, (function(e) {
            return e === t !== n
        }
        )) : "string" != typeof t ? w.grep(e, (function(e) {
            return -1 < s.call(t, e) !== n
        }
        )) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (w.contains(i[t], this))
                            return !0
                }
                )));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                w.find(e, i[t], n);
            return 1 < r ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                N.test(r[1]) && w.isPlainObject(t))
                    for (r in t)
                        h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = v.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    j = w(v);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, (function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            1 < this.length && (H[e] || w.uniqueSort(i),
            L.test(e) && i.reverse()),
            this.pushStack(i)
        }
    }
    ));
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e,
        n = {},
        w.each(t.match(P) || [], (function(e, t) {
            n[t] = !0
        }
        )),
        n) : w.extend({}, e);
        var r, i, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || e.once,
            o = r = !0; u.length; l = -1)
                for (i = u.shift(); ++l < s.length; )
                    !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && (l = s.length,
                    i = !1);
            e.memory || (i = !1),
            r = !1,
            a && (s = i ? [] : "")
        }, f = {
            add: function() {
                return s && (i && !r && (l = s.length - 1,
                u.push(i)),
                function t(n) {
                    w.each(n, (function(n, r) {
                        h(r) ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== x(r) && t(r)
                    }
                    ))
                }(arguments),
                i && !r && c()),
                this
            },
            remove: function() {
                return w.each(arguments, (function(e, t) {
                    for (var n; -1 < (n = w.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= l && l--
                }
                )),
                this
            },
            has: function(e) {
                return e ? -1 < w.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = i = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                i || r || (s = i = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                r || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred((function(t) {
                        w.each(n, (function(n, r) {
                            var i = h(e[r[4]]) && e[r[4]];
                            o[r[1]]((function() {
                                var e = i && i.apply(this, arguments);
                                e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    h(l) ? i ? l.call(e, a(o, n, R, i), a(o, n, M, i)) : (o++,
                                    l.call(e, a(o, n, R, i), a(o, n, M, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(s, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                    o <= t + 1 && (r !== M && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return w.Deferred((function(e) {
                        n[0][3].add(a(0, e, h(i) ? i : R, e.notifyWith)),
                        n[1][3].add(a(0, e, h(t) ? t : R)),
                        n[2][3].add(a(0, e, h(r) ? r : M))
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, i) : i
                }
            }
              , o = {};
            return w.each(n, (function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add((function() {
                    r = s
                }
                ), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }
            )),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , o = i.call(arguments)
              , a = w.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    o[e] = 1 < arguments.length ? i.call(arguments) : n,
                    --t || a.resolveWith(r, o)
                }
            };
            if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || h(o[n] && o[n].then)))
                return a.then();
            for (; n--; )
                I(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }
        ))
    }
    ;
    var F = w.Deferred();
    function B() {
        v.removeEventListener("DOMContentLoaded", B),
        e.removeEventListener("load", B),
        w.ready()
    }
    w.fn.ready = function(e) {
        return F.then(e).catch((function(e) {
            w.readyException(e)
        }
        )),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || F.resolveWith(v, [w])
        }
    }),
    w.ready.then = F.then,
    "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(w.ready) : (v.addEventListener("DOMContentLoaded", B),
    e.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        h(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(w(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = w.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                Q.set(this, e)
            }
            )) : $(this, (function(t) {
                var n;
                if (o && void 0 === t)
                    return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each((function() {
                    Q.set(this, e, t)
                }
                ))
            }
            ), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e)
            }
            ))
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, w.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = w._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, (function() {
                w.dequeue(e, t)
            }
            ), o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: w.Callbacks("once memory").add((function() {
                    Y.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                w.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = v.documentElement
      , ie = function(e) {
        return w.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === w.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && te.exec(w.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; a--; )
                w.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            w.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = w.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    w.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ae(this) ? w(this).show() : w(this).hide()
            }
            ))
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = v.createDocumentFragment().appendChild(v.createElement("div")),
    (fe = v.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    d.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    d.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    d.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? w.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    d.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o))
                    w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    w.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = p[d++]; )
            if (r && -1 < w.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n)
                for (c = 0; o = a[c++]; )
                    he.test(o.type || "") && n.push(o);
        return f
    }
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return v.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return w().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = w.guid++)),
        e.each((function() {
            w.event.add(this, t, i, r, n)
        }
        ))
    }
    function Ae(e, t, n) {
        n ? (Y.set(e, t, !1),
        w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, o, a = Y.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)
                        (w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments),
                    Y.set(this, t, a),
                    r = n(this, t),
                    this[t](),
                    a !== (o = Y.get(this, t)) || r ? Y.set(this, t, !1) : o = {},
                    a !== o)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        o.value
                } else
                    a.length && (Y.set(this, t, {
                        value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, t) && w.event.add(e, t, Ce)
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(e);
            if (V(e))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && w.find.matchesSelector(re, i),
                n.guid || (n.guid = w.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(t) {
                    return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(P) || [""]).length; l--; )
                    d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = w.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = w.event.special[d] || {},
                    c = w.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    w.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--; )
                    if (d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = w.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = w.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = w.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = w.event.handlers.call(this, u, l),
                t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
                    for (u.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < w(i, this).index(l) : w.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp),
    w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }
    )),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, i = e.handleObj;
                return r && (r === this || w.contains(this, r)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    w.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each((function() {
                w.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var Ne = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        w.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = w.extend({}, o),
            Q.set(t, a))
        }
    }
    function Pe(e, t, n, r) {
        t = o(t);
        var i, a, s, u, l, c, f = 0, p = e.length, g = p - 1, v = t[0], y = h(v);
        if (y || 1 < p && "string" == typeof v && !d.checkClone && De.test(v))
            return e.each((function(i) {
                var o = e.eq(i);
                y && (t[0] = v.call(this, i, o.html())),
                Pe(o, t, n, r)
            }
            ));
        if (p && (a = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === i.childNodes.length && (i = a),
        a || r)) {
            for (u = (s = w.map(ve(i, "script"), Le)).length; f < p; f++)
                l = i,
                f !== g && (l = w.clone(l, !0, !0),
                u && w.merge(s, ve(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                w.map(s, He),
                f = 0; f < u; f++)
                    l = s[f],
                    he.test(l.type || "") && !Y.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : m(l.textContent.replace(je, ""), l, c))
        }
        return e
    }
    function Re(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    "input" === (l = (u = a[r]).nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, (function(e) {
                return void 0 === e ? w.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return Pe(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return Pe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return Pe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return w.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return $(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Pe(this, arguments, (function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ve(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                w(i[s])[t](n),
                a.apply(r, n.get());
            return this.pushStack(r)
        }
    }
    ));
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Ie = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , We = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = w.style(e, t)),
        !d.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top,
                u = 12 === n(t.marginLeft),
                c.style.right = "60%",
                a = 36 === n(t.right),
                i = 36 === n(t.width),
                c.style.position = "absolute",
                o = 12 === n(c.offsetWidth / 3),
                re.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, u, l = v.createElement("div"), c = v.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        d.clearCloneStyle = "content-box" === c.style.backgroundClip,
        w.extend(d, {
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                u
            },
            scrollboxSize: function() {
                return t(),
                o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = v.createElement("table"),
                n = v.createElement("tr"),
                r = v.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px",
                n.style.height = "1px",
                r.style.height = "9px",
                re.appendChild(t).appendChild(n).appendChild(r),
                i = e.getComputedStyle(n),
                s = 3 < parseInt(i.height),
                re.removeChild(t)),
                s
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , ze = v.createElement("div").style
      , Ue = {};
    function Xe(e) {
        return w.cssProps[e] || Ue[e] || (e in ze ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--; )
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= w.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= w.css(e, "border" + ne[a] + "Width", !0, i))) : (u += w.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += w.css(e, "border" + ne[a] + "Width", !0, i) : s += w.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Ie(e)
          , i = (!d.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!d.boxSizingReliable() && i || !d.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = w.cssHooks[t] || w.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")),
                d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    w.each(["height", "width"], (function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !Ve.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : We(e, Ye, (function() {
                        return Ze(e, t, r)
                    }
                    ))
            },
            set: function(e, n, r) {
                var i, o = Ie(e), a = !d.scrollboxSize() && "absolute" === o.position, s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o), u = r ? Ke(e, t, r, s, o) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ke(e, t, "border", !1, o) - .5)),
                u && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Je(0, n, u)
            }
        }
    }
    )),
    w.cssHooks.marginLeft = $e(d.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Je)
    }
    )),
    w.fn.extend({
        css: function(e, t) {
            return $(this, (function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }
            ), e, t, 1 < arguments.length)
        }
    }),
    ((w.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = et.prototype.init,
    w.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval),
        w.fx.tick())
    }
    function ut() {
        return e.setTimeout((function() {
            tt = void 0
        }
        )),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(e, t, n) {
        var r, i, o = 0, a = ft.prefilters.length, s = w.Deferred().always((function() {
            delete u.elem
        }
        )), u = function() {
            if (i)
                return !1;
            for (var t = tt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: tt || ut(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = w.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); o < a; o++)
            if (r = ft.prefilters[o].call(l, e, c, l.opts))
                return h(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return w.map(c, ct, l),
        h(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    w.Animation = w.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            h(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always((function() {
                p.always((function() {
                    a.unqueued--,
                    w.queue(e, "fx").length || a.empty.fire()
                }
                ))
            }
            ))),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || w.style(e, r)
                }
            if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = w.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = w.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done((function() {
                    h.display = l
                }
                )),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always((function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                }
                ))),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done((function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            w.style(e, r, d[r])
                    }
                    ))),
                    u = ct(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            h(r.old) && r.old.call(this),
            r.queue && w.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e)
              , o = w.speed(t, n, r)
              , a = function() {
                var t = ft(this, w.extend({}, e), o);
                (i || Y.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = w.timers
                  , a = Y.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && at.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, n = Y.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            }
            ))
        }
    }),
    w.each(["toggle", "show", "hide"], (function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i)
        }
    }
    )),
    w.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }
    )),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        tt = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    w.fx.stop = function() {
        nt = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, (function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        }
        ))
    }
    ,
    rt = v.createElement("input"),
    it = v.createElement("select").appendChild(v.createElement("option")),
    rt.type = "checkbox",
    d.checkOn = "" !== rt.value,
    d.optSelected = it.selected,
    (rt = v.createElement("input")).value = "t",
    rt.type = "radio",
    d.radioValue = "t" === rt.value;
    var pt, dt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return $(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                w.removeAttr(this, e)
            }
            ))
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = dt[t] || w.find.attr;
        dt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = dt[a],
            dt[a] = i,
            i = null != n(e, t, r) ? a : null,
            dt[a] = o),
            i
        }
    }
    ));
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ")
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return $(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[w.propFix[e] || e]
            }
            ))
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                i = w.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    d.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        w.propFix[this.toLowerCase()] = this
    }
    )),
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e))
                return this.each((function(t) {
                    w(this).addClass(e.call(this, t, yt(this)))
                }
                ));
            if ((t = mt(e)).length)
                for (; n = this[u++]; )
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e))
                return this.each((function(t) {
                    w(this).removeClass(e.call(this, t, yt(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = mt(e)).length)
                for (; n = this[u++]; )
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
                w(this).toggleClass(e.call(this, n, yt(this), t), t)
            }
            )) : this.each((function() {
                var t, i, o, a;
                if (r)
                    for (i = 0,
                    o = w(this),
                    a = mt(e); t = a[i++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = yt(this)) && Y.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h(e),
            this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }
            ))) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], (function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        },
        d.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    )),
    d.focusin = "onfocusin"in e;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, f, p, d, y = [r || v], m = c.call(t, "type") ? t.type : t, x = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = s = r = r || v,
            3 !== r.nodeType && 8 !== r.nodeType && !bt.test(m + w.event.triggered) && (-1 < m.indexOf(".") && (m = (x = m.split(".")).shift(),
            x.sort()),
            l = m.indexOf(":") < 0 && "on" + m,
            (t = t[w.expando] ? t : new w.Event(m,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : w.makeArray(n, [t]),
            p = w.event.special[m] || {},
            i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!i && !p.noBubble && !g(r)) {
                    for (u = p.delegateType || m,
                    bt.test(u + m) || (a = a.parentNode); a; a = a.parentNode)
                        y.push(a),
                        s = a;
                    s === (r.ownerDocument || v) && y.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = y[o++]) && !t.isPropagationStopped(); )
                    d = a,
                    t.type = 1 < o ? u : p.bindType || m,
                    (f = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) && f.apply(a, n),
                    (f = l && a[l]) && f.apply && V(a) && (t.result = f.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                i || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !V(r) || l && h(r[m]) && !g(r) && ((s = r[l]) && (r[l] = null),
                w.event.triggered = m,
                t.isPropagationStopped() && d.addEventListener(m, wt),
                r[m](),
                t.isPropagationStopped() && d.removeEventListener(m, wt),
                w.event.triggered = void 0,
                s && (r[l] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                w.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    d.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this
                  , i = Y.access(r, t);
                i || r.addEventListener(e, n, !0),
                Y.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this
                  , i = Y.access(r, t) - 1;
                i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0),
                Y.remove(r, t))
            }
        }
    }
    ));
    var Tt = e.location
      , Ct = {
        guid: Date.now()
    }
      , Et = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
        n
    }
    ;
    var St = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, (function(t, i) {
                n || St.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }
            ));
        else if (n || "object" !== x(t))
            r(e, t);
        else
            for (i in t)
                Dt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = h(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, (function() {
                i(this.name, this.value)
            }
            ));
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }
            )).map((function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }
            )).get()
        }
    });
    var jt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = v.createElement("a");
    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(P) || [];
            if (h(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Bt(e, t, n, r) {
        var i = {}
          , o = e === Mt;
        function a(s) {
            var u;
            return i[s] = !0,
            w.each(e[s] || [], (function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                a(l),
                !1)
            }
            )),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function $t(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, w.ajaxSettings), t) : $t(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, i, o, a, s, u, l, c, f, p, d = w.ajaxSetup({}, n), h = d.context || d, g = d.context && (h.nodeType || h.jquery) ? w(h) : w.event, y = w.Deferred(), m = w.Callbacks("once memory"), x = d.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (l) {
                        if (!a)
                            for (a = {}; t = Ht.exec(o); )
                                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return l ? o : null
                },
                setRequestHeader: function(e, t) {
                    return null == l && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == l && (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (l)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return r && r.abort(t),
                    S(0, t),
                    this
                }
            };
            if (y.promise(E),
            d.url = ((t || d.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = (d.dataType || "*").toLowerCase().match(P) || [""],
            null == d.crossDomain) {
                u = v.createElement("a");
                try {
                    u.href = d.url,
                    u.href = u.href,
                    d.crossDomain = Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host
                } catch (t) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)),
            Bt(Rt, d, n, E),
            l)
                return E;
            for (f in (c = w.event && d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Ot.test(d.type),
            i = d.url.replace(qt, ""),
            d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(jt, "+")) : (p = d.url.slice(i.length),
            d.data && (d.processData || "string" == typeof d.data) && (i += (Et.test(i) ? "&" : "?") + d.data,
            delete d.data),
            !1 === d.cache && (i = i.replace(Lt, "$1"),
            p = (Et.test(i) ? "&" : "?") + "_=" + Ct.guid++ + p),
            d.url = i + p),
            d.ifModified && (w.lastModified[i] && E.setRequestHeader("If-Modified-Since", w.lastModified[i]),
            w.etag[i] && E.setRequestHeader("If-None-Match", w.etag[i])),
            (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && E.setRequestHeader("Content-Type", d.contentType),
            E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]),
            d.headers)
                E.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, E, d) || l))
                return E.abort();
            if (C = "abort",
            m.add(d.complete),
            E.done(d.success),
            E.fail(d.error),
            r = Bt(Mt, d, n, E)) {
                if (E.readyState = 1,
                c && g.trigger("ajaxSend", [E, d]),
                l)
                    return E;
                d.async && 0 < d.timeout && (s = e.setTimeout((function() {
                    E.abort("timeout")
                }
                ), d.timeout));
                try {
                    l = !1,
                    r.send(b, S)
                } catch (t) {
                    if (l)
                        throw t;
                    S(-1, t)
                }
            } else
                S(-1, "No Transport");
            function S(t, n, a, u) {
                var f, p, v, b, T, C = n;
                l || (l = !0,
                s && e.clearTimeout(s),
                r = void 0,
                o = u || "",
                E.readyState = 0 < t ? 4 : 0,
                f = 200 <= t && t < 300 || 304 === t,
                a && (b = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(d, E, a)),
                !f && -1 < w.inArray("script", d.dataTypes) && (d.converters["text script"] = function() {}
                ),
                b = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, b, E, f),
                f ? (d.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[i] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[i] = T)),
                204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                p = b.data,
                f = !(v = b.error))) : (v = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                f ? y.resolveWith(h, [p, C, E]) : y.rejectWith(h, [E, C, v]),
                E.statusCode(x),
                x = void 0,
                c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, d, f ? p : v]),
                m.fireWith(h, [E, C]),
                c && (g.trigger("ajaxComplete", [E, d]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], (function(e, t) {
        w[t] = function(e, n, r, i) {
            return h(n) && (i = i || r,
            r = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }
    )),
    w.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }
    )),
    w._evalUrl = function(e, t, n) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                w.globalEval(e, t, n)
            }
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                w(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                w(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = w.ajaxSettings.xhr();
    d.cors = !!zt && "withCredentials"in zt,
    d.ajax = zt = !!zt,
    w.ajaxTransport((function(t) {
        var n, r;
        if (d.cors || zt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                    i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(_t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout((function() {
                            n && r()
                        }
                        ))
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (i) {
                        if (n)
                            throw i
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }
    )),
    w.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    }
    )),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    w.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(r, i) {
                    t = w("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    v.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || w.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Vt, "$1" + i) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || w.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always((function() {
                void 0 === o ? w(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Xt.push(i)),
                a && h(o) && o(a[0]),
                a = o = void 0
            }
            )),
            "script"
    }
    )),
    d.createHTMLDocument = ((Ut = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (d.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
        t.head.appendChild(r)) : t = v),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && w(o).remove(),
        w.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    w.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        h(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments,
            a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }
        )).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = w.css(e, "position"), c = w(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = w.css(e, "top"),
            u = w.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            h(t) && (t = t.call(e, n, w.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    w.offset.setOffset(this, e, t)
                }
                ));
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position"); )
                    e = e.offsetParent;
                return e || re
            }
            ))
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return $(this, (function(e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }
            ), e, r, arguments.length)
        }
    }
    )),
    w.each(["top", "left"], (function(e, t) {
        w.cssHooks[t] = $e(d.pixelPosition, (function(e, n) {
            if (n)
                return n = Be(e, t),
                Me.test(n) ? w(e).position()[t] + "px" : n
        }
        ))
    }
    )),
    w.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return $(this, (function(t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }
                ), t, a ? i : void 0, a)
            }
        }
        ))
    }
    )),
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        w.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    ));
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        h(e))
            return r = i.call(arguments, 2),
            (o = function() {
                return e.apply(t || this, r.concat(i.call(arguments)))
            }
            ).guid = e.guid = e.guid || w.guid++,
            o
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = A,
    w.isFunction = h,
    w.isWindow = g,
    w.camelCase = X,
    w.type = x,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    w.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return w
    }
    ));
    var Yt = e.jQuery
      , Qt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Qt),
        t && e.jQuery === w && (e.jQuery = Yt),
        w
    }
    ,
    void 0 === t && (e.jQuery = e.$ = w),
    w
}
));
/*! @vimeo/player v2.14.1 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Vimeo = e.Vimeo || {},
    e.Vimeo.Player = t())
}(this, (function() {
    "use strict";
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var t = "undefined" != typeof global && "[object global]" === {}.toString.call(global);
    function n(e, t) {
        return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
    }
    function r(e) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
    }
    function o() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.id, o = t.url, i = n || o;
        if (!i)
            throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (e = i,
        !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e)
            return "https://vimeo.com/".concat(i);
        if (r(i))
            return i.replace("http:", "https:");
        if (n)
            throw new TypeError("“".concat(n, "” is not a valid video id."));
        throw new TypeError("“".concat(i, "” is not a vimeo.com url."))
    }
    var i = void 0 !== Array.prototype.indexOf
      , a = "undefined" != typeof window && void 0 !== window.postMessage;
    if (!(t || i && a))
        throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    /*!
   * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */
    !function(e) {
        if (!e.WeakMap) {
            var t = Object.prototype.hasOwnProperty
              , n = function(e, t, n) {
                Object.defineProperty ? Object.defineProperty(e, t, {
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            };
            e.WeakMap = function() {
                function e() {
                    if (void 0 === this)
                        throw new TypeError("Constructor WeakMap requires 'new'");
                    if (n(this, "_id", "_WeakMap" + "_" + i() + "." + i()),
                    arguments.length > 0)
                        throw new TypeError("WeakMap iterable is not supported")
                }
                function o(e, n) {
                    if (!r(e) || !t.call(e, "_id"))
                        throw new TypeError(n + " method called on incompatible receiver " + typeof e)
                }
                function i() {
                    return Math.random().toString().substring(2)
                }
                return n(e.prototype, "delete", (function(e) {
                    if (o(this, "delete"),
                    !r(e))
                        return !1;
                    var t = e[this._id];
                    return !(!t || t[0] !== e) && (delete e[this._id],
                    !0)
                }
                )),
                n(e.prototype, "get", (function(e) {
                    if (o(this, "get"),
                    r(e)) {
                        var t = e[this._id];
                        return t && t[0] === e ? t[1] : void 0
                    }
                }
                )),
                n(e.prototype, "has", (function(e) {
                    if (o(this, "has"),
                    !r(e))
                        return !1;
                    var t = e[this._id];
                    return !(!t || t[0] !== e)
                }
                )),
                n(e.prototype, "set", (function(e, t) {
                    if (o(this, "set"),
                    !r(e))
                        throw new TypeError("Invalid value used as weak map key");
                    var i = e[this._id];
                    return i && i[0] === e ? (i[1] = t,
                    this) : (n(e, this._id, [e, t]),
                    this)
                }
                )),
                n(e, "_polyfill", !0),
                e
            }()
        }
        function r(e) {
            return Object(e) === e
        }
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : u);
    var l = function(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }((function(e) {
        /*! Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
  */
        var t, n, r;
        r = function() {
            var e, t, n, r = Object.prototype.toString, o = "undefined" != typeof setImmediate ? function(e) {
                return setImmediate(e)
            }
            : setTimeout;
            try {
                Object.defineProperty({}, "x", {}),
                e = function(e, t, n, r) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        writable: !0,
                        configurable: !1 !== r
                    })
                }
            } catch (t) {
                e = function(e, t, n) {
                    return e[t] = n,
                    e
                }
            }
            function i(e, r) {
                n.add(e, r),
                t || (t = o(n.drain))
            }
            function a(e) {
                var t, n = typeof e;
                return null == e || "object" != n && "function" != n || (t = e.then),
                "function" == typeof t && t
            }
            function u() {
                for (var e = 0; e < this.chain.length; e++)
                    l(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                this.chain.length = 0
            }
            function l(e, t, n) {
                var r, o;
                try {
                    !1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = a(r)) ? o.call(r, n.resolve, n.reject) : n.resolve(r)
                } catch (e) {
                    n.reject(e)
                }
            }
            function c(e) {
                var t, n = this;
                if (!n.triggered) {
                    n.triggered = !0,
                    n.def && (n = n.def);
                    try {
                        (t = a(e)) ? i((function() {
                            var r = new d(n);
                            try {
                                t.call(e, (function() {
                                    c.apply(r, arguments)
                                }
                                ), (function() {
                                    s.apply(r, arguments)
                                }
                                ))
                            } catch (e) {
                                s.call(r, e)
                            }
                        }
                        )) : (n.msg = e,
                        n.state = 1,
                        n.chain.length > 0 && i(u, n))
                    } catch (e) {
                        s.call(new d(n), e)
                    }
                }
            }
            function s(e) {
                var t = this;
                t.triggered || (t.triggered = !0,
                t.def && (t = t.def),
                t.msg = e,
                t.state = 2,
                t.chain.length > 0 && i(u, t))
            }
            function f(e, t, n, r) {
                for (var o = 0; o < t.length; o++)
                    !function(o) {
                        e.resolve(t[o]).then((function(e) {
                            n(o, e)
                        }
                        ), r)
                    }(o)
            }
            function d(e) {
                this.def = e,
                this.triggered = !1
            }
            function h(e) {
                this.promise = e,
                this.state = 0,
                this.triggered = !1,
                this.chain = [],
                this.msg = void 0
            }
            function v(e) {
                if ("function" != typeof e)
                    throw TypeError("Not a function");
                if (0 !== this.__NPO__)
                    throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var t = new h(this);
                this.then = function(e, n) {
                    var r = {
                        success: "function" != typeof e || e,
                        failure: "function" == typeof n && n
                    };
                    return r.promise = new this.constructor((function(e, t) {
                        if ("function" != typeof e || "function" != typeof t)
                            throw TypeError("Not a function");
                        r.resolve = e,
                        r.reject = t
                    }
                    )),
                    t.chain.push(r),
                    0 !== t.state && i(u, t),
                    r.promise
                }
                ,
                this.catch = function(e) {
                    return this.then(void 0, e)
                }
                ;
                try {
                    e.call(void 0, (function(e) {
                        c.call(t, e)
                    }
                    ), (function(e) {
                        s.call(t, e)
                    }
                    ))
                } catch (e) {
                    s.call(t, e)
                }
            }
            n = function() {
                var e, n, r;
                function o(e, t) {
                    this.fn = e,
                    this.self = t,
                    this.next = void 0
                }
                return {
                    add: function(t, i) {
                        r = new o(t,i),
                        n ? n.next = r : e = r,
                        n = r,
                        r = void 0
                    },
                    drain: function() {
                        var r = e;
                        for (e = n = t = void 0; r; )
                            r.fn.call(r.self),
                            r = r.next
                    }
                }
            }();
            var m = e({}, "constructor", v, !1);
            return v.prototype = m,
            e(m, "__NPO__", 0, !1),
            e(v, "resolve", (function(e) {
                return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this((function(t, n) {
                    if ("function" != typeof t || "function" != typeof n)
                        throw TypeError("Not a function");
                    t(e)
                }
                ))
            }
            )),
            e(v, "reject", (function(e) {
                return new this((function(t, n) {
                    if ("function" != typeof t || "function" != typeof n)
                        throw TypeError("Not a function");
                    n(e)
                }
                ))
            }
            )),
            e(v, "all", (function(e) {
                var t = this;
                return "[object Array]" != r.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t((function(n, r) {
                    if ("function" != typeof n || "function" != typeof r)
                        throw TypeError("Not a function");
                    var o = e.length
                      , i = Array(o)
                      , a = 0;
                    f(t, e, (function(e, t) {
                        i[e] = t,
                        ++a === o && n(i)
                    }
                    ), r)
                }
                ))
            }
            )),
            e(v, "race", (function(e) {
                var t = this;
                return "[object Array]" != r.call(e) ? t.reject(TypeError("Not an array")) : new t((function(n, r) {
                    if ("function" != typeof n || "function" != typeof r)
                        throw TypeError("Not a function");
                    f(t, e, (function(e, t) {
                        n(t)
                    }
                    ), r)
                }
                ))
            }
            )),
            v
        }
        ,
        (n = u)[t = "Promise"] = n[t] || r(),
        e.exports && (e.exports = n[t])
    }
    ))
      , c = new WeakMap;
    function s(e, t, n) {
        var r = c.get(e.element) || {};
        t in r || (r[t] = []),
        r[t].push(n),
        c.set(e.element, r)
    }
    function f(e, t) {
        return (c.get(e.element) || {})[t] || []
    }
    function d(e, t, n) {
        var r = c.get(e.element) || {};
        if (!r[t])
            return !0;
        if (!n)
            return r[t] = [],
            c.set(e.element, r),
            !0;
        var o = r[t].indexOf(n);
        return -1 !== o && r[t].splice(o, 1),
        c.set(e.element, r),
        r[t] && 0 === r[t].length
    }
    var h = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return h.reduce((function(t, n) {
            var r = e.getAttribute("data-vimeo-".concat(n));
            return (r || "" === r) && (t[n] = "" === r ? 1 : r),
            t
        }
        ), t)
    }
    function m(e, t) {
        var n = e.html;
        if (!t)
            throw new TypeError("An element must be provided");
        if (null !== t.getAttribute("data-vimeo-initialized"))
            return t.querySelector("iframe");
        var r = document.createElement("div");
        return r.innerHTML = n,
        t.appendChild(r.firstChild),
        t.setAttribute("data-vimeo-initialized", "true"),
        t.querySelector("iframe")
    }
    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0;
        return new Promise((function(o, i) {
            if (!r(e))
                throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
            var a = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
            for (var u in t)
                t.hasOwnProperty(u) && (a += "&".concat(u, "=").concat(encodeURIComponent(t[u])));
            var l = "XDomainRequest"in window ? new XDomainRequest : new XMLHttpRequest;
            l.open("GET", a, !0),
            l.onload = function() {
                if (404 !== l.status)
                    if (403 !== l.status)
                        try {
                            var t = JSON.parse(l.responseText);
                            if (403 === t.domain_status_code)
                                return m(t, n),
                                void i(new Error("“".concat(e, "” is not embeddable.")));
                            o(t)
                        } catch (e) {
                            i(e)
                        }
                    else
                        i(new Error("“".concat(e, "” is not embeddable.")));
                else
                    i(new Error("“".concat(e, "” was not found.")))
            }
            ,
            l.onerror = function() {
                var e = l.status ? " (".concat(l.status, ")") : "";
                i(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
            }
            ,
            l.send()
        }
        ))
    }
    function y(e) {
        if ("string" == typeof e)
            try {
                e = JSON.parse(e)
            } catch (e) {
                return console.warn(e),
                {}
            }
        return e
    }
    function g(e, t, n) {
        if (e.element.contentWindow && e.element.contentWindow.postMessage) {
            var r = {
                method: t
            };
            void 0 !== n && (r.value = n);
            var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
            o >= 8 && o < 10 && (r = JSON.stringify(r)),
            e.element.contentWindow.postMessage(r, e.origin)
        }
    }
    function w(e, t) {
        var n, r = [];
        if ((t = y(t)).event) {
            if ("error" === t.event)
                f(e, t.data.method).forEach((function(n) {
                    var r = new Error(t.data.message);
                    r.name = t.data.name,
                    n.reject(r),
                    d(e, t.data.method, n)
                }
                ));
            r = f(e, "event:".concat(t.event)),
            n = t.data
        } else if (t.method) {
            var o = function(e, t) {
                var n = f(e, t);
                if (n.length < 1)
                    return !1;
                var r = n.shift();
                return d(e, t, r),
                r
            }(e, t.method);
            o && (r.push(o),
            n = t.value)
        }
        r.forEach((function(t) {
            try {
                if ("function" == typeof t)
                    return void t.call(e, n);
                t.resolve(n)
            } catch (e) {}
        }
        ))
    }
    var b = new WeakMap
      , k = new WeakMap
      , E = {}
      , T = function() {
        function t(e) {
            var n = this
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."),
            e = e[0]),
            "undefined" != typeof document && "string" == typeof e && (e = document.getElementById(e)),
            !function(e) {
                return Boolean(e && 1 === e.nodeType && "nodeName"in e && e.ownerDocument && e.ownerDocument.defaultView)
            }(e))
                throw new TypeError("You must pass either a valid element or a valid id.");
            if ("IFRAME" !== e.nodeName) {
                var a = e.querySelector("iframe");
                a && (e = a)
            }
            if ("IFRAME" === e.nodeName && !r(e.getAttribute("src") || ""))
                throw new Error("The player element passed isn’t a Vimeo embed.");
            if (b.has(e))
                return b.get(e);
            this._window = e.ownerDocument.defaultView,
            this.element = e,
            this.origin = "*";
            var u = new l((function(t, a) {
                if (n._onMessage = function(e) {
                    if (r(e.origin) && n.element.contentWindow === e.source) {
                        "*" === n.origin && (n.origin = e.origin);
                        var o = y(e.data);
                        if (o && "error" === o.event && o.data && "ready" === o.data.method) {
                            var i = new Error(o.data.message);
                            return i.name = o.data.name,
                            void a(i)
                        }
                        var u = o && "ready" === o.event
                          , l = o && "ping" === o.method;
                        if (u || l)
                            return n.element.setAttribute("data-ready", "true"),
                            void t();
                        w(n, o)
                    }
                }
                ,
                n._window.addEventListener("message", n._onMessage),
                "IFRAME" !== n.element.nodeName) {
                    var u = v(e, i);
                    p(o(u), u, e).then((function(t) {
                        var r, o, i, a = m(t, e);
                        return n.element = a,
                        n._originalElement = e,
                        r = e,
                        o = a,
                        i = c.get(r),
                        c.set(o, i),
                        c.delete(r),
                        b.set(n.element, n),
                        t
                    }
                    )).catch(a)
                }
            }
            ));
            if (k.set(this, u),
            b.set(this.element, this),
            "IFRAME" === this.element.nodeName && g(this, "ping"),
            E.isEnabled) {
                var f = function() {
                    return E.exit()
                };
                E.on("fullscreenchange", (function() {
                    E.isFullscreen ? s(n, "event:exitFullscreen", f) : d(n, "event:exitFullscreen", f),
                    n.ready().then((function() {
                        g(n, "fullscreenchange", E.isFullscreen)
                    }
                    ))
                }
                ))
            }
            return this
        }
        var i, a, u;
        return i = t,
        a = [{
            key: "callMethod",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new l((function(r, o) {
                    return t.ready().then((function() {
                        s(t, e, {
                            resolve: r,
                            reject: o
                        }),
                        g(t, e, n)
                    }
                    )).catch(o)
                }
                ))
            }
        }, {
            key: "get",
            value: function(e) {
                var t = this;
                return new l((function(r, o) {
                    return e = n(e, "get"),
                    t.ready().then((function() {
                        s(t, e, {
                            resolve: r,
                            reject: o
                        }),
                        g(t, e)
                    }
                    )).catch(o)
                }
                ))
            }
        }, {
            key: "set",
            value: function(e, t) {
                var r = this;
                return new l((function(o, i) {
                    if (e = n(e, "set"),
                    null == t)
                        throw new TypeError("There must be a value to set.");
                    return r.ready().then((function() {
                        s(r, e, {
                            resolve: o,
                            reject: i
                        }),
                        g(r, e, t)
                    }
                    )).catch(i)
                }
                ))
            }
        }, {
            key: "on",
            value: function(e, t) {
                if (!e)
                    throw new TypeError("You must pass an event name.");
                if (!t)
                    throw new TypeError("You must pass a callback function.");
                if ("function" != typeof t)
                    throw new TypeError("The callback must be a function.");
                0 === f(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch((function() {}
                )),
                s(this, "event:".concat(e), t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                if (!e)
                    throw new TypeError("You must pass an event name.");
                if (t && "function" != typeof t)
                    throw new TypeError("The callback must be a function.");
                d(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch((function(e) {}
                ))
            }
        }, {
            key: "loadVideo",
            value: function(e) {
                return this.callMethod("loadVideo", e)
            }
        }, {
            key: "ready",
            value: function() {
                var e = k.get(this) || new l((function(e, t) {
                    t(new Error("Unknown player. Probably unloaded."))
                }
                ));
                return l.resolve(e)
            }
        }, {
            key: "addCuePoint",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.callMethod("addCuePoint", {
                    time: e,
                    data: t
                })
            }
        }, {
            key: "removeCuePoint",
            value: function(e) {
                return this.callMethod("removeCuePoint", e)
            }
        }, {
            key: "enableTextTrack",
            value: function(e, t) {
                if (!e)
                    throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {
                    language: e,
                    kind: t
                })
            }
        }, {
            key: "disableTextTrack",
            value: function() {
                return this.callMethod("disableTextTrack")
            }
        }, {
            key: "pause",
            value: function() {
                return this.callMethod("pause")
            }
        }, {
            key: "play",
            value: function() {
                return this.callMethod("play")
            }
        }, {
            key: "requestFullscreen",
            value: function() {
                return E.isEnabled ? E.request(this.element) : this.callMethod("requestFullscreen")
            }
        }, {
            key: "exitFullscreen",
            value: function() {
                return E.isEnabled ? E.exit() : this.callMethod("exitFullscreen")
            }
        }, {
            key: "getFullscreen",
            value: function() {
                return E.isEnabled ? l.resolve(E.isFullscreen) : this.get("fullscreen")
            }
        }, {
            key: "unload",
            value: function() {
                return this.callMethod("unload")
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                return new l((function(t) {
                    if (k.delete(e),
                    b.delete(e.element),
                    e._originalElement && (b.delete(e._originalElement),
                    e._originalElement.removeAttribute("data-vimeo-initialized")),
                    e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element),
                    e.element && "DIV" === e.element.nodeName && e.element.parentNode) {
                        e.element.removeAttribute("data-vimeo-initialized");
                        var n = e.element.querySelector("iframe");
                        n && n.parentNode && n.parentNode.removeChild(n)
                    }
                    e._window.removeEventListener("message", e._onMessage),
                    t()
                }
                ))
            }
        }, {
            key: "getAutopause",
            value: function() {
                return this.get("autopause")
            }
        }, {
            key: "setAutopause",
            value: function(e) {
                return this.set("autopause", e)
            }
        }, {
            key: "getBuffered",
            value: function() {
                return this.get("buffered")
            }
        }, {
            key: "getCameraProps",
            value: function() {
                return this.get("cameraProps")
            }
        }, {
            key: "setCameraProps",
            value: function(e) {
                return this.set("cameraProps", e)
            }
        }, {
            key: "getChapters",
            value: function() {
                return this.get("chapters")
            }
        }, {
            key: "getCurrentChapter",
            value: function() {
                return this.get("currentChapter")
            }
        }, {
            key: "getColor",
            value: function() {
                return this.get("color")
            }
        }, {
            key: "setColor",
            value: function(e) {
                return this.set("color", e)
            }
        }, {
            key: "getCuePoints",
            value: function() {
                return this.get("cuePoints")
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.get("currentTime")
            }
        }, {
            key: "setCurrentTime",
            value: function(e) {
                return this.set("currentTime", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.get("duration")
            }
        }, {
            key: "getEnded",
            value: function() {
                return this.get("ended")
            }
        }, {
            key: "getLoop",
            value: function() {
                return this.get("loop")
            }
        }, {
            key: "setLoop",
            value: function(e) {
                return this.set("loop", e)
            }
        }, {
            key: "setMuted",
            value: function(e) {
                return this.set("muted", e)
            }
        }, {
            key: "getMuted",
            value: function() {
                return this.get("muted")
            }
        }, {
            key: "getPaused",
            value: function() {
                return this.get("paused")
            }
        }, {
            key: "getPlaybackRate",
            value: function() {
                return this.get("playbackRate")
            }
        }, {
            key: "setPlaybackRate",
            value: function(e) {
                return this.set("playbackRate", e)
            }
        }, {
            key: "getPlayed",
            value: function() {
                return this.get("played")
            }
        }, {
            key: "getQualities",
            value: function() {
                return this.get("qualities")
            }
        }, {
            key: "getQuality",
            value: function() {
                return this.get("quality")
            }
        }, {
            key: "setQuality",
            value: function(e) {
                return this.set("quality", e)
            }
        }, {
            key: "getSeekable",
            value: function() {
                return this.get("seekable")
            }
        }, {
            key: "getSeeking",
            value: function() {
                return this.get("seeking")
            }
        }, {
            key: "getTextTracks",
            value: function() {
                return this.get("textTracks")
            }
        }, {
            key: "getVideoEmbedCode",
            value: function() {
                return this.get("videoEmbedCode")
            }
        }, {
            key: "getVideoId",
            value: function() {
                return this.get("videoId")
            }
        }, {
            key: "getVideoTitle",
            value: function() {
                return this.get("videoTitle")
            }
        }, {
            key: "getVideoWidth",
            value: function() {
                return this.get("videoWidth")
            }
        }, {
            key: "getVideoHeight",
            value: function() {
                return this.get("videoHeight")
            }
        }, {
            key: "getVideoUrl",
            value: function() {
                return this.get("videoUrl")
            }
        }, {
            key: "getVolume",
            value: function() {
                return this.get("volume")
            }
        }, {
            key: "setVolume",
            value: function(e) {
                return this.set("volume", e)
            }
        }],
        a && e(i.prototype, a),
        u && e(i, u),
        t
    }();
    return t || (E = function() {
        var e = function() {
            for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, r = t.length, o = {}; n < r; n++)
                if ((e = t[n]) && e[1]in document) {
                    for (n = 0; n < e.length; n++)
                        o[t[0][n]] = e[n];
                    return o
                }
            return !1
        }()
          , t = {
            fullscreenchange: e.fullscreenchange,
            fullscreenerror: e.fullscreenerror
        }
          , n = {
            request: function(t) {
                return new Promise((function(r, o) {
                    var i = function e() {
                        n.off("fullscreenchange", e),
                        r()
                    };
                    n.on("fullscreenchange", i);
                    var a = (t = t || document.documentElement)[e.requestFullscreen]();
                    a instanceof Promise && a.then(i).catch(o)
                }
                ))
            },
            exit: function() {
                return new Promise((function(t, r) {
                    if (n.isFullscreen) {
                        var o = function e() {
                            n.off("fullscreenchange", e),
                            t()
                        };
                        n.on("fullscreenchange", o);
                        var i = document[e.exitFullscreen]();
                        i instanceof Promise && i.then(o).catch(r)
                    } else
                        t()
                }
                ))
            },
            on: function(e, n) {
                var r = t[e];
                r && document.addEventListener(r, n)
            },
            off: function(e, n) {
                var r = t[e];
                r && document.removeEventListener(r, n)
            }
        };
        return Object.defineProperties(n, {
            isFullscreen: {
                get: function() {
                    return Boolean(document[e.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return document[e.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function() {
                    return Boolean(document[e.fullscreenEnabled])
                }
            }
        }),
        n
    }(),
    function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document
          , t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"))
          , n = function(e) {
            "console"in window && console.error && console.error("There was an error creating an embed: ".concat(e))
        };
        t.forEach((function(e) {
            try {
                if (null !== e.getAttribute("data-vimeo-defer"))
                    return;
                var t = v(e);
                p(o(t), t, e).then((function(t) {
                    return m(t, e)
                }
                )).catch(n)
            } catch (e) {
                n(e)
            }
        }
        ))
    }(),
    function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
        window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0,
        window.addEventListener("message", (function(t) {
            if (r(t.origin) && t.data && "spacechange" === t.data.event)
                for (var n = e.querySelectorAll("iframe"), o = 0; o < n.length; o++)
                    if (n[o].contentWindow === t.source) {
                        n[o].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                        break
                    }
        }
        )))
    }()),
    T
}
));
