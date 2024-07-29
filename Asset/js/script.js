
!function(n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n = "undefined" != typeof globalThis ? globalThis : n || self).EmblaCarousel = e()
}(this, (function() {
    "use strict";
    function n() {
        return (n = Object.assign || function(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
            }
            return n
        }
        ).apply(this, arguments)
    }
    function e(n, e) {
        var t = Math.abs(n - e);
        function r(e) {
            return e < n
        }
        function o(n) {
            return n > e
        }
        function i(n) {
            return r(n) || o(n)
        }
        return {
            constrain: function(t) {
                return i(t) ? r(t) ? n : e : t
            },
            length: t,
            max: e,
            min: n,
            reachedAny: i,
            reachedMax: o,
            reachedMin: r,
            removeOffset: function(n) {
                return t ? n - t * Math.ceil((n - e) / t) : n
            }
        }
    }
    function t(n, r, o) {
        var i = e(0, n)
          , a = i.min
          , u = i.constrain
          , c = n + 1
          , s = d(r);
        function d(n) {
            return o ? Math.abs((c + n) % c) : u(n)
        }
        function f() {
            return s
        }
        function l(n) {
            return s = d(n),
            p
        }
        var p = {
            add: function(n) {
                return l(f() + n)
            },
            clone: function() {
                return t(n, f(), o)
            },
            get: f,
            set: l,
            min: a,
            max: n
        };
        return p
    }
    function r() {
        var n = []
          , e = {
            add: function(t, r, o, i) {
                return void 0 === i && (i = !1),
                t.addEventListener(r, o, i),
                n.push((function() {
                    return t.removeEventListener(r, o, i)
                }
                )),
                e
            },
            removeAll: function() {
                return n = n.filter((function(n) {
                    return n()
                }
                )),
                e
            }
        };
        return e
    }
    function o(n) {
        var e = n;
        function t(n) {
            return e /= n,
            o
        }
        function r(n) {
            return "number" == typeof n ? n : n.get()
        }
        var o = {
            add: function(n) {
                return e += r(n),
                o
            },
            divide: t,
            get: function() {
                return e
            },
            multiply: function(n) {
                return e *= n,
                o
            },
            normalize: function() {
                return 0 !== e && t(e),
                o
            },
            set: function(n) {
                return e = r(n),
                o
            },
            subtract: function(n) {
                return e -= r(n),
                o
            }
        };
        return o
    }
    function i(n) {
        return n ? n / Math.abs(n) : 0
    }
    function a(n, e) {
        return Math.abs(n - e)
    }
    function u(n, e) {
        for (var t = [], r = 0; r < n.length; r += e)
            t.push(n.slice(r, r + e));
        return t
    }
    function c(n) {
        return Object.keys(n).map(Number)
    }
    function s(n) {
        return n[d(n)]
    }
    function d(n) {
        return Math.max(0, n.length - 1)
    }
    function f(n, e) {
        var t = n.classList;
        e && t.contains(e) && t.remove(e)
    }
    function l(n, e) {
        var t = n.classList;
        e && !t.contains(e) && t.add(e)
    }
    function p(n, e, t, u, c, s, d, f, l, p, g, m, v, h, x) {
        var y = n.scroll
          , b = n.cross
          , w = ["INPUT", "SELECT", "TEXTAREA"]
          , M = o(0)
          , S = o(0)
          , E = o(0)
          , A = r()
          , T = r()
          , C = {
            mouse: 2.5,
            touch: 3.5
        }
          , D = {
            mouse: 5,
            touch: 7
        }
          , P = c ? 5 : 16
          , B = !1
          , I = !1
          , L = !1
          , k = !1;
        function z(n) {
            if (!(k = "mousedown" === n.type) || 0 === n.button) {
                var e, r = a(u.get(), d.get()) >= 2, o = k || !r, i = (e = n.target.nodeName || "",
                !(w.indexOf(e) > -1)), c = r || k && i;
                B = !0,
                s.pointerDown(n),
                E.set(u),
                u.set(d),
                p.useBaseMass().useSpeed(80),
                function() {
                    var n = k ? document : t;
                    T.add(n, "touchmove", O).add(n, "touchend", N).add(n, "mousemove", O).add(n, "mouseup", N)
                }(),
                M.set(s.readPoint(n, y)),
                S.set(s.readPoint(n, b)),
                v.emit("pointerDown"),
                o && (L = !1),
                c && n.preventDefault()
            }
        }
        function O(n) {
            if (!I && !k) {
                if (!n.cancelable)
                    return N();
                var t = s.readPoint(n, y).get()
                  , r = s.readPoint(n, b).get()
                  , o = a(t, M.get())
                  , i = a(r, S.get());
                if (!(I = o > i) && !L)
                    return N()
            }
            var c = s.pointerMove(n);
            !L && c && (L = !0),
            f.start(),
            u.add(e.applyTo(c)),
            n.preventDefault()
        }
        function N() {
            var n = g.byDistance(0, !1).index !== m.get()
              , t = s.pointerUp() * (c ? D : C)[k ? "mouse" : "touch"]
              , r = function(n, e) {
                var t = m.clone().add(-1 * i(n))
                  , r = t.get() === m.min || t.get() === m.max
                  , o = g.byDistance(n, !c).distance;
                return c || Math.abs(n) < 20 ? o : !h && r ? .6 * o : x && e ? .5 * o : g.byIndex(t.get(), 0).distance
            }(e.applyTo(t), n)
              , o = function(n, e) {
                if (0 === n || 0 === e)
                    return 0;
                if (Math.abs(n) <= Math.abs(e))
                    return 0;
                var t = a(Math.abs(n), Math.abs(e));
                return Math.abs(t / n)
            }(t, r)
              , d = a(u.get(), E.get()) >= .5
              , f = n && o > .75
              , y = Math.abs(t) < 20
              , b = f ? 10 : P
              , w = f ? 1 + 2.5 * o : 1;
            d && !k && (L = !0),
            I = !1,
            B = !1,
            T.removeAll(),
            p.useSpeed(y ? 9 : b).useMass(w),
            l.distance(r, !c),
            k = !1,
            v.emit("pointerUp")
        }
        function F(n) {
            L && n.preventDefault()
        }
        return {
            addActivationEvents: function() {
                var n = t;
                A.add(n, "touchmove", (function() {}
                )).add(n, "touchend", (function() {}
                )).add(n, "touchstart", z).add(n, "mousedown", z).add(n, "touchcancel", N).add(n, "contextmenu", N).add(n, "click", F)
            },
            clickAllowed: function() {
                return !L
            },
            pointerDown: function() {
                return B
            },
            removeAllEvents: function() {
                A.removeAll(),
                T.removeAll()
            }
        }
    }
    function g(n, e, t) {
        var r, a = (r = Math.pow(10, 2),
        function(n) {
            return Math.round(n * r) / r
        }
        ), u = o(0), c = o(0), s = o(0), d = 0, f = e, l = t;
        function p(n) {
            return f = n,
            m
        }
        function g(n) {
            return l = n,
            m
        }
        var m = {
            direction: function() {
                return d
            },
            seek: function(e) {
                s.set(e).subtract(n);
                var t = 0 + (s.get() - 0) / 100 * (f - 0);
                return d = i(s.get()),
                s.normalize().multiply(t).subtract(u),
                function(n) {
                    n.divide(l),
                    c.add(n)
                }(s),
                m
            },
            settle: function(e) {
                var t = e.get() - n.get()
                  , r = !a(t);
                return r && n.set(e),
                r
            },
            update: function() {
                u.add(c),
                n.add(u),
                c.multiply(0)
            },
            useBaseMass: function() {
                return g(t)
            },
            useBaseSpeed: function() {
                return p(e)
            },
            useMass: g,
            useSpeed: p
        };
        return m
    }
    function m(n, e, t, r) {
        var o = !1;
        return {
            constrain: function(i) {
                if (!o && n.reachedAny(t.get()) && n.reachedAny(e.get())) {
                    var a = i ? .7 : .45
                      , u = t.get() - e.get();
                    t.subtract(u * a),
                    !i && Math.abs(u) < 10 && (t.set(n.constrain(t.get())),
                    r.useSpeed(10).useMass(3))
                }
            },
            toggleActive: function(n) {
                o = !n
            }
        }
    }
    function v(n, t, r, o, i) {
        var a = e(r.min + t.measure(.1), r.max + t.measure(.1))
          , u = a.reachedMin
          , c = a.reachedMax;
        return {
            loop: function(e) {
                if (function(n) {
                    return 1 === n ? c(o.get()) : -1 === n && u(o.get())
                }(e)) {
                    var t = n * (-1 * e);
                    i.forEach((function(n) {
                        return n.add(t)
                    }
                    ))
                }
            }
        }
    }
    function h(n) {
        var e = n.max
          , t = n.length;
        return {
            get: function(n) {
                return (n - e) / -t
            }
        }
    }
    function x(n, e, t, r, o, i) {
        var a, c, d = n.startEdge, f = n.endEdge, l = o.map((function(n) {
            return r[d] - n[d]
        }
        )).map(t.measure).map((function(n) {
            return -Math.abs(n)
        }
        )), p = (a = u(l, i).map((function(n) {
            return n[0]
        }
        )),
        c = u(o, i).map((function(n) {
            return s(n)[f] - n[0][d]
        }
        )).map(t.measure).map(Math.abs).map(e.measure),
        a.map((function(n, e) {
            return n + c[e]
        }
        )));
        return {
            snaps: l,
            snapsAligned: p
        }
    }
    function y(n, e, t, r, o, i, a, u) {
        var s, d = c(r), f = c(r).reverse(), l = (s = o[0] - 1,
        m(g(f, s), "end")).concat(function() {
            var n = e - o[0] - 1;
            return m(g(d, n), "start")
        }());
        function p(n, e) {
            return n.reduce((function(n, e) {
                return n - r[e]
            }
            ), e)
        }
        function g(n, e) {
            return n.reduce((function(n, t) {
                return p(n, e) > 0 ? n.concat([t]) : n
            }
            ), [])
        }
        function m(n, e) {
            var r = "start" === e
              , o = r ? -t : t
              , u = i.findSlideBounds(o);
            return n.map((function(n) {
                var e = r ? 0 : -t
                  , o = r ? t : 0
                  , i = u.filter((function(e) {
                    return e.index === n
                }
                ))[0][r ? "end" : "start"];
                return {
                    point: i,
                    getTarget: function() {
                        return a.get() > i ? e : o
                    },
                    index: n,
                    location: -1
                }
            }
            ))
        }
        return {
            canLoop: function() {
                return l.every((function(n) {
                    var t = n.index;
                    return p(d.filter((function(n) {
                        return n !== t
                    }
                    )), e) <= 0
                }
                ))
            },
            clear: function() {
                l.forEach((function(e) {
                    var t = e.index;
                    u[t].style[n.startEdge] = ""
                }
                ))
            },
            loop: function() {
                l.forEach((function(e) {
                    var t = e.getTarget
                      , r = e.location
                      , o = e.index
                      , i = t();
                    i !== r && (u[o].style[n.startEdge] = i + "%",
                    e.location = i)
                }
                ))
            },
            loopPoints: l
        }
    }
    function b(n, e, t) {
        var o = r()
          , i = o.removeAll
          , a = 0;
        function u(n) {
            9 === n.keyCode && (a = (new Date).getTime())
        }
        function c(r, i) {
            o.add(r, "focus", (function() {
                if (!((new Date).getTime() - a > 10)) {
                    n.scrollLeft = 0;
                    var r = Math.floor(i / t);
                    e.index(r, 0)
                }
            }
            ), !0)
        }
        return {
            addActivationEvents: function(n) {
                o.add(document, "keydown", u, !1),
                n.forEach(c)
            },
            removeAllEvents: i
        }
    }
    function w(n, e, t) {
        var r = t.style
          , o = "x" === n.scroll ? function(n) {
            return "translate3d(" + n + "%,0px,0px)"
        }
        : function(n) {
            return "translate3d(0px," + n + "%,0px)"
        }
          , i = !1;
        return {
            clear: function() {
                r.transform = ""
            },
            to: function(n) {
                i || (r.transform = o(e.applyTo(n.get())))
            },
            toggleActive: function(n) {
                i = !n
            }
        }
    }
    function M(n, r, i, a, u) {
        var f, l = a.align, M = a.axis, S = a.direction, E = a.startIndex, A = a.inViewThreshold, T = a.loop, C = a.speed, D = a.dragFree, P = a.slidesToScroll, B = a.skipSnaps, I = a.containScroll, L = r.getBoundingClientRect(), k = i.map((function(n) {
            return n.getBoundingClientRect()
        }
        )), z = function(n) {
            var e = "rtl" === n ? -1 : 1;
            return {
                applyTo: function(n) {
                    return n * e
                }
            }
        }(S), O = function(n, e) {
            var t = "y" === n ? "y" : "x";
            return {
                scroll: t,
                cross: "y" === n ? "x" : "y",
                startEdge: "y" === t ? "top" : "rtl" === e ? "right" : "left",
                endEdge: "y" === t ? "bottom" : "rtl" === e ? "left" : "right",
                measureSize: function(n) {
                    var e = n.width
                      , r = n.height;
                    return "x" === t ? e : r
                }
            }
        }(M, S), N = (f = O.measureSize(L),
        {
            measure: function(n) {
                return 0 === f ? 0 : n / f * 100
            },
            totalPercent: 100
        }), F = N.totalPercent, U = function(n, e) {
            var t = {
                start: function() {
                    return 0
                },
                center: function(n) {
                    return r(n) / 2
                },
                end: r
            };
            function r(n) {
                return e - n
            }
            return {
                measure: function(r) {
                    return "number" == typeof n ? e * Number(n) : t[n](r)
                }
            }
        }(l, F), V = function(n, e, t, r, o) {
            var i = n.measureSize
              , a = n.startEdge
              , u = n.endEdge
              , c = r.map(i);
            return {
                slideSizes: c.map(e.measure),
                slideSizesWithGaps: r.map((function(n, e, r) {
                    var i = e === d(r)
                      , f = window.getComputedStyle(s(t))
                      , l = parseFloat(f.getPropertyValue("margin-" + u));
                    return i ? c[e] + (o ? l : 0) : r[e + 1][a] - n[a]
                }
                )).map(e.measure).map(Math.abs)
            }
        }(O, N, i, k, T), H = V.slideSizes, R = V.slideSizesWithGaps, j = x(O, U, N, L, k, P), G = j.snaps, q = j.snapsAligned, W = -s(G) + s(R), X = function(n, t, r, o, i) {
            var a = e(-t + n, r[0])
              , u = o.map(a.constrain);
            return {
                snapsContained: function() {
                    if (t <= n)
                        return [a.max];
                    if ("keepSnaps" === i)
                        return u;
                    var r = function() {
                        var n = u[0]
                          , t = s(u);
                        return e(u.lastIndexOf(n), u.indexOf(t) + 1)
                    }()
                      , o = r.min
                      , c = r.max;
                    return u.slice(o, c)
                }()
            }
        }(F, W, G, q, I).snapsContained, J = T || "" === I ? q : X, Y = function(n, t, r) {
            var o, i;
            return {
                limit: (o = t[0],
                i = s(t),
                e(r ? o - n : i, o))
            }
        }(W, J, T).limit, K = t(d(J), E, T), Q = K.clone(), Z = c(i), $ = function(n) {
            var e = 0;
            function t(n, t) {
                return function() {
                    n === !!e && t()
                }
            }
            function r() {
                e = window.requestAnimationFrame(n)
            }
            return {
                proceed: t(!0, r),
                start: t(!1, r),
                stop: t(!0, (function() {
                    window.cancelAnimationFrame(e),
                    e = 0
                }
                ))
            }
        }((function() {
            T || un.scrollBounds.constrain(un.dragHandler.pointerDown()),
            un.scrollBody.seek(en).update();
            var n = un.scrollBody.settle(en);
            n && !un.dragHandler.pointerDown() && (un.animation.stop(),
            u.emit("settle")),
            n || u.emit("scroll"),
            T && (un.scrollLooper.loop(un.scrollBody.direction()),
            un.slideLooper.loop()),
            un.translate.to(nn),
            un.animation.proceed()
        }
        )), _ = J[K.get()], nn = o(_), en = o(_), tn = g(nn, C, 1), rn = function(n, e, t, r, o) {
            var i = r.reachedAny
              , a = r.removeOffset
              , u = r.constrain;
            function c(n, e) {
                return Math.abs(n) < Math.abs(e) ? n : e
            }
            function s(e, r) {
                var o = e
                  , i = e + t
                  , a = e - t;
                if (!n)
                    return o;
                if (!r)
                    return c(c(o, i), a);
                var u = c(o, 1 === r ? i : a);
                return Math.abs(u) * r
            }
            return {
                byDistance: function(t, r) {
                    var c = o.get() + t
                      , d = function(t) {
                        var r = n ? a(t) : u(t);
                        return {
                            index: e.map((function(n) {
                                return n - r
                            }
                            )).map((function(n) {
                                return s(n, 0)
                            }
                            )).map((function(n, e) {
                                return {
                                    diff: n,
                                    index: e
                                }
                            }
                            )).sort((function(n, e) {
                                return Math.abs(n.diff) - Math.abs(e.diff)
                            }
                            ))[0].index,
                            distance: r
                        }
                    }(c)
                      , f = d.index
                      , l = d.distance
                      , p = !n && i(c);
                    return !r || p ? {
                        index: f,
                        distance: t
                    } : {
                        index: f,
                        distance: t + s(e[f] - l, 0)
                    }
                },
                byIndex: function(n, t) {
                    return {
                        index: n,
                        distance: s(e[n] - o.get(), t)
                    }
                },
                shortcut: s
            }
        }(T, J, W, Y, en), on = function(n, e, t, r, o, i) {
            function a(r) {
                var a = r.distance
                  , u = r.index !== e.get();
                a && (n.start(),
                o.add(a)),
                u && (t.set(e.get()),
                e.set(r.index),
                i.emit("select"))
            }
            return {
                distance: function(n, e) {
                    a(r.byDistance(n, e))
                },
                index: function(n, t) {
                    var o = e.clone().set(n);
                    a(r.byIndex(o.get(), t))
                }
            }
        }($, K, Q, rn, en, u), an = function(n, e, t, r, o, i) {
            var a = Math.min(Math.max(i, .01), .99)
              , u = (o ? [0, e, -e] : [0]).reduce((function(n, e) {
                return n.concat(c(e, a))
            }
            ), []);
            function c(e, o) {
                var i = t.map((function(n) {
                    return n * (o || 0)
                }
                ));
                return r.map((function(r, o) {
                    return {
                        start: r - t[o] + i[o] + e,
                        end: r + n - i[o] + e,
                        index: o
                    }
                }
                ))
            }
            return {
                check: function(n) {
                    return u.reduce((function(e, t) {
                        var r = t.index
                          , o = t.start
                          , i = t.end;
                        return -1 === e.indexOf(r) && o < n && i > n ? e.concat([r]) : e
                    }
                    ), [])
                },
                findSlideBounds: c
            }
        }(F, W, H, G, T, A), un = {
            animation: $,
            axis: O,
            direction: z,
            dragHandler: p(O, z, n, en, D, function(n, e) {
                var t = n.scroll
                  , r = {
                    x: "clientX",
                    y: "clientY"
                }
                  , i = o(0)
                  , a = o(0)
                  , u = o(0)
                  , c = o(0)
                  , s = []
                  , d = (new Date).getTime()
                  , f = !1;
                function l(n, e) {
                    f = !n.touches;
                    var t = r[e]
                      , o = f ? n[t] : n.touches[0][t];
                    return c.set(o)
                }
                return {
                    pointerDown: function(n) {
                        var r = l(n, t);
                        return i.set(r),
                        u.set(r),
                        e.measure(i.get())
                    },
                    pointerMove: function(n) {
                        var r = l(n, t)
                          , o = (new Date).getTime()
                          , i = o - d;
                        return i >= 10 && (i >= 100 && (s = []),
                        s.push(r.get()),
                        d = o),
                        a.set(r).subtract(u),
                        u.set(r),
                        e.measure(a.get())
                    },
                    pointerUp: function() {
                        var n = (new Date).getTime() - d
                          , t = u.get()
                          , r = s.slice(-5).map((function(n) {
                            return t - n
                        }
                        )).sort((function(n, e) {
                            return Math.abs(n) < Math.abs(e) ? 1 : -1
                        }
                        ))[0];
                        return u.set(n > 100 || !r ? 0 : r),
                        s = [],
                        e.measure(u.get())
                    },
                    readPoint: l
                }
            }(O, N), nn, $, on, tn, rn, K, u, T, B),
            pxToPercent: N,
            index: K,
            indexPrevious: Q,
            limit: Y,
            location: nn,
            options: a,
            scrollBody: tn,
            scrollBounds: m(Y, nn, en, tn),
            scrollLooper: v(W, N, Y, nn, [nn, en]),
            scrollProgress: h(Y),
            scrollSnaps: J,
            scrollTarget: rn,
            scrollTo: on,
            slideFocus: b(n, on, P),
            slideLooper: y(O, F, W, R, J, an, nn, i),
            slidesInView: an,
            slideIndexes: Z,
            target: en,
            translate: w(O, z, r)
        };
        return un
    }
    var S = {
        align: "center",
        axis: "x",
        containScroll: "",
        direction: "ltr",
        dragFree: !1,
        draggable: !0,
        draggableClass: "is-draggable",
        draggingClass: "is-dragging",
        inViewThreshold: 0,
        loop: !1,
        skipSnaps: !0,
        selectedClass: "is-selected",
        slidesToScroll: 1,
        speed: 10,
        startIndex: 0
    };
    return function(e, t) {
        var o, i, a, u, c, s, d = function() {
            var n = {};
            function e(e) {
                return n[e] || []
            }
            var t = {
                emit: function(n) {
                    return e(n).forEach((function(e) {
                        return e(n)
                    }
                    )),
                    t
                },
                off: function(r, o) {
                    return n[r] = e(r).filter((function(n) {
                        return n !== o
                    }
                    )),
                    t
                },
                on: function(r, o) {
                    return n[r] = e(r).concat([o]),
                    t
                }
            };
            return t
        }(), p = r(), g = (o = function() {
            if (x) {
                var n = a.axis.measureSize(e.getBoundingClientRect());
                w !== n && D(),
                d.emit("resize")
            }
        }
        ,
        i = 0,
        function() {
            window.clearTimeout(i),
            i = window.setTimeout(o, 500) || 0
        }
        ), m = D, v = d.on, h = d.off, x = !1, y = n({}, S), b = n({}, y), w = 0;
        function E(t) {
            if (function() {
                if (!e)
                    throw new Error("Missing root node 😢");
                var n, t = e.querySelector("*");
                if (!t)
                    throw new Error("Missing container node 😢");
                c = t,
                s = Array.prototype.slice.call(c.children),
                n = getComputedStyle(e, ":before").content,
                u = {
                    get: function() {
                        try {
                            return JSON.parse(n.slice(1, -1).replace(/\\/g, ""))
                        } catch (n) {}
                        return {}
                    }
                }
            }(),
            y = n({}, y, t),
            b = n({}, y, u.get()),
            a = M(e, c, s, b, d),
            p.add(window, "resize", g),
            a.translate.to(a.location),
            w = a.axis.measureSize(e.getBoundingClientRect()),
            b.loop) {
                if (!a.slideLooper.canLoop())
                    return C(),
                    E({
                        loop: !1
                    });
                a.slideLooper.loop()
            }
            b.draggable && c.offsetParent && s.length && (a.dragHandler.addActivationEvents(),
            b.draggableClass && l(e, b.draggableClass),
            b.draggingClass && d.on("pointerDown", A).on("pointerUp", A)),
            s.length && a.slideFocus.addActivationEvents(s),
            b.selectedClass && (T(),
            d.on("select", T).on("pointerUp", T)),
            x || (setTimeout((function() {
                return d.emit("init")
            }
            ), 0),
            x = !0)
        }
        function A(n) {
            var t = b.draggingClass;
            "pointerDown" === n ? l(e, t) : f(e, t)
        }
        function T() {
            var n = b.selectedClass
              , e = P(!0);
            B(!0).forEach((function(e) {
                return f(s[e], n)
            }
            )),
            e.forEach((function(e) {
                return l(s[e], n)
            }
            ))
        }
        function C() {
            a.dragHandler.removeAllEvents(),
            a.slideFocus.removeAllEvents(),
            a.animation.stop(),
            p.removeAll(),
            a.translate.clear(),
            a.slideLooper.clear(),
            f(e, b.draggableClass),
            s.forEach((function(n) {
                return f(n, b.selectedClass)
            }
            )),
            d.off("select", T).off("pointerUp", T).off("pointerDown", A).off("pointerUp", A)
        }
        function D(e) {
            if (x) {
                var t = n({
                    startIndex: L()
                }, e);
                C(),
                E(t),
                d.emit("reInit")
            }
        }
        function P(n) {
            var e = a[n ? "target" : "location"].get()
              , t = b.loop ? "removeOffset" : "constrain";
            return a.slidesInView.check(a.limit[t](e))
        }
        function B(n) {
            var e = P(n);
            return a.slideIndexes.filter((function(n) {
                return -1 === e.indexOf(n)
            }
            ))
        }
        function I(n, e, t) {
            a.scrollBody.useBaseMass().useSpeed(e ? 100 : b.speed),
            x && a.scrollTo.index(n, t || 0)
        }
        function L() {
            return a.index.get()
        }
        return E(t),
        {
            canScrollNext: function() {
                return a.index.clone().add(1).get() !== L()
            },
            canScrollPrev: function() {
                return a.index.clone().add(-1).get() !== L()
            },
            clickAllowed: function() {
                return a.dragHandler.clickAllowed()
            },
            containerNode: function() {
                return c
            },
            dangerouslyGetEngine: function() {
                return a
            },
            destroy: function() {
                x && (C(),
                x = !1,
                d.emit("destroy"))
            },
            off: h,
            on: v,
            previousScrollSnap: function() {
                return a.indexPrevious.get()
            },
            reInit: m,
            rootNode: function() {
                return e
            },
            scrollNext: function(n) {
                I(a.index.clone().add(1).get(), !0 === n, -1)
            },
            scrollPrev: function(n) {
                I(a.index.clone().add(-1).get(), !0 === n, 1)
            },
            scrollProgress: function() {
                return a.scrollProgress.get(a.location.get())
            },
            scrollSnapList: function() {
                return a.scrollSnaps.map(a.scrollProgress.get)
            },
            scrollTo: I,
            selectedScrollSnap: L,
            slideNodes: function() {
                return s
            },
            slidesInView: P,
            slidesNotInView: B
        }
    }
}
));
(()=>{
    const e = {
        align: "center",
        draggable: !1,
        skipSnaps: !0,
        loop: !1,
        autoPlay: !1,
        autoPlayInterval: 5
    };
    let t = [];
    function r(e, r, a=0) {
        const l = t.findIndex((t=>t.carouselId === e));
        -1 !== l && r && (t[l].intervalId || (t[l].intervalId = setInterval((()=>{
            if (!document.hidden) {
                const r = t.findIndex((t=>t.carouselId === e));
                if (-1 === r)
                    return;
                if (1 !== t[r].embla.scrollProgress())
                    return void t[r].embla.scrollNext();
                t[r].embla.scrollTo(0)
            }
        }
        ), 1e3 * a)))
    }
    function a(e, r) {
        return new Promise(((a,l)=>{
            const n = e.querySelector(".embla")
              , o = e.getAttribute("id")
              , i = n.querySelector(".embla__viewport")
              , s = n.querySelector(".embla__button--prev")
              , u = n.querySelector(".embla__button--next");
            if (-1 !== t.findIndex((e=>e.carouselId === o)))
                return;
            const c = EmblaCarousel(i, r)
              , d = function(e, t, r) {
                return ()=>{
                    r.canScrollPrev() ? e.removeAttribute("disabled") : e.setAttribute("disabled", "disabled"),
                    r.canScrollNext() ? t.removeAttribute("disabled") : t.setAttribute("disabled", "disabled")
                }
            }(s, u, c);
            !function(e, t, r) {
                e.addEventListener("click", r.scrollPrev, !1),
                t.addEventListener("click", r.scrollNext, !1)
            }(s, u, c),
            c.on("select", d),
            c.on("init", d),
            t.push({
                carouselId: o,
                embla: c,
                intervalId: null
            }),
            a(c)
        }
        ))
    }
    function l(e) {
        const t = {};
        return [].forEach.call(e.attributes, (e=>{
            if (/^data-/.test(e.name)) {
                var r = e.name.substr(5).replace(/-(.)/g, ((e,t)=>t.toUpperCase()));
                t[r] = "true" === (a = e.value) || a
            }
            var a
        }
        )),
        t
    }
    function n(e) {
        const r = t.findIndex((t=>t.carouselId === e));
        -1 !== r && ("embla"in t[r] && t[r].embla.destroy(),
        clearInterval(t[r].intervalId),
        t.splice(r, 1))
    }
    function o(e, t) {
        const r = {};
        for (let a in t)
            e[a] || (r[a] = !1);
        return r
    }
    let i, s = !1, u = "function" == typeof jQuery;
    u && (i = jQuery);
    document.querySelector("html").classList.contains("is-builder") && u ? i(document).on("add.cards", (t=>{
        if (!i(t.target).hasClass("mbr-embla") || s)
            return Promise.resolve();
        const u = t.target.getAttribute("id");
        n(u);
        const c = l(t.target.querySelector(".embla"))
          , d = o(c, e)
          , b = Object.assign(c, d);
        return b.draggable = !1,
        a(t.target, b).then((e=>{
            e.reInit(b),
            r(u, b.autoPlay, b.autoPlayInterval),
            s = !0,
            setTimeout((()=>{
                s = !1
            }
            ), 0)
        }
        ))
    }
    )).on("delete.cards", (e=>{
        n(e.target.getAttribute("id"))
    }
    )).on("changeParameter.cards", ((t,s,u)=>{
        if (i(t.target).hasClass("mbr-embla")) {
            const i = t.target.getAttribute("id")
              , c = l(t.target.querySelector(".embla"))
              , d = o(c, e)
              , b = Object.assign(c, d);
            switch (s) {
            case "loop":
                e.loop = !!u;
                break;
            case "autoplay":
                e.autoPlay = u;
                break;
            case "interval":
                e.autoPlayInterval = +u
            }
            n(i),
            b.draggable = !1,
            a(t.target, b),
            r(i, b.autoPlay, b.autoPlayInterval)
        }
    }
    )) : void 0 === window.initCarouseMultiplePlugin && (window.initCarouseMultiplePlugin = !0,
    document.querySelectorAll(".mbr-embla").forEach((t=>{
        const n = t.getAttribute("id")
          , i = l(t.querySelector(".embla"))
          , s = o(i, e)
          , u = Object.assign(i, s);
        a(t, Object.assign(i, s)),
        r(n, u.autoPlay, +u.autoPlayInterval)
    }
    )))
}
)();
var Formoid = function() {
    var e = function(e, t) {
        return e = "__" + e + "__",
        t.length ? (this[e] = t[0],
        this) : this[e]
    }
      , t = function(e) {
        e = e || {},
        this.__email__ = e.email || "",
        this.__title__ = e.title || "",
        this.__data__ = e.data || []
    };
    return t.prototype.email = function(t) {
        return e.call(this, "email", arguments)
    }
    ,
    t.prototype.title = function(t) {
        return e.call(this, "title", arguments)
    }
    ,
    t.prototype.data = function(t) {
        return e.call(this, "data", arguments)
    }
    ,
    t.prototype.send = function(e) {
        return (t = "https://formoid.net/api/push",
        o = {
            type: "POST",
            data: JSON.stringify({
                email: this.__email__,
                form: {
                    title: this.__title__,
                    data: arguments.length ? e : this.__data__
                }
            })
        },
        new Promise((function(e, n) {
            var r = new XMLHttpRequest;
            r.open(o.type, t),
            r.onload = function() {
                if (200 !== r.status)
                    return n(new Error("Incorrect server response."));
                e(r.responseText)
            }
            ,
            r.onerror = function() {
                var e = "Failed to query the server. ";
                "onLine"in navigator && !navigator.onLine ? e += "No connection to the Internet." : e += "Check the connection and try again.",
                n(new Error(e))
            }
            ,
            r.send(o.data)
        }
        ))).then((function(e) {
            var t;
            try {
                t = JSON.parse(e)
            } catch (e) {
                throw new Error("Incorrect server response.")
            }
            if (t.error)
                throw new Error(t.error);
            return t.response
        }
        ));
        var t, o
    }
    ,
    {
        Form: function(e) {
            return new t(e)
        }
    }
}();
const formModalDOM = document.createElement("div");
let formModal;
formModalDOM.classList.add("modal"),
formModalDOM.setAttribute("tabindex", -1),
formModalDOM.style.overflow = "hidden",
"undefined" != typeof bootstrap ? bootstrap.Tooltip.VERSION.startsWith(5) ? formModalDOM.innerHTML = '\n            <div class="modal-dialog d-flex align-items-center" style="">\n                <div class="modal-content" style="height:auto;border-radius:0;border:none;box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);">\n                    <div class="modal-body d-flex justify-content-end flex-column align-items-end">\n                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                        <p class="display-7" style="text-align:center;width:100%;">Modal body text goes here.</p>\n                    </div>\n                </div>\n            </div>' : formModalDOM.innerHTML = '\n            <div class="modal-dialog d-flex align-items-center" style="">\n                <div class="modal-content" style="height:auto;border-radius:0;border:none;box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);">\n                    <div class="modal-body d-flex justify-content-end flex-column align-items-end">\n                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                        <p class="display-7" style="text-align:center;width:100%;">Modal body text goes here.</p>\n                    </div>\n                </div>\n            </div>' : $.fn.Tooltip && (formModalDOM.innerHTML = '\n        <div class="modal-dialog d-flex align-items-center" style="">\n            <div class="modal-content" style="height:auto;border-radius:0;border:none;box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);">\n                <div class="modal-body d-flex justify-content-end flex-column align-items-end">\n                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                    <p class="display-7" style="text-align:center;width:100%;">Modal body text goes here.</p>\n                </div>\n            </div>\n        </div>'),
bootstrap && (formModal = new bootstrap.Modal(formModalDOM));
var isValidEmail = function(e) {
    return !e.value || /^([^@]+?)@(([a-z0-9]-*)*[a-z0-9]+\.)+([a-z0-9]+)$/i.test(e.value)
}
  , formComponents = document.querySelectorAll('[data-form-type="formoid"]');
formComponents.forEach((function(e) {
    var t, o = "FORM" === e.tagName ? e : e.querySelector("form"), n = e.querySelector("[data-form-alert]"), r = e.getAttribute("data-form-title") ? e : e.querySelector("[data-form-title]"), a = e.querySelector('[type="submit"]'), l = e.querySelectorAll("[data-form-field]"), i = n.innerHTML;
    o.addEventListener("change", (function(e) {
        "file" === e.target.type && e.target.files[0].size > 1e6 && (formModal._element.querySelector(".modal-body p").innerText = "File size must be less than 1mb",
        formModal._element.querySelector(".modal-content").classList.add("alert-danger"),
        formModal._element.querySelector(".modal-content").style.backgroundColor = "#ff9966",
        formModal.show(),
        a.classList.add("btn-loading"),
        a.setAttribute("disabled", !0))
    }
    )),
    o.addEventListener("submit", (function(s) {
        if (s.stopPropagation(),
        s.preventDefault(),
        !a.classList.contains("btn-loading")) {
            var d = l;
            o.classList.add("form-active"),
            a.classList.add("btn-loading"),
            a.setAttribute("disabled", !0),
            n.innerHTML = "",
            t = t || Formoid.Form({
                email: e.querySelector("[data-form-email]").value,
                title: r.getAttribute("data-form-title") || r.innerText
            }),
            Promise.all(Array.prototype.map.call(d, (function(e) {
                return function(e) {
                    return new Promise((function(t, o) {
                        if ("email" === e.getAttribute("name") && !isValidEmail(e))
                            return o(new Error("Form is not valid"));
                        var n = e.getAttribute("data-form-field") || e.getAttribute("name");
                        switch (e.getAttribute("type")) {
                        case "file":
                            var r = e.files[0];
                            if (!r)
                                return t();
                            var a = new FileReader;
                            a.onloadend = function() {
                                t([n, a.result])
                            }
                            ,
                            a.onerror = function() {
                                o(a.error)
                            }
                            ,
                            a.readAsDataURL(r);
                            break;
                        case "checkbox":
                            t([n, e.checked ? e.value : "No"]);
                            break;
                        case "radio":
                            t(e.checked && [n, e.value]);
                            break;
                        default:
                            t([n, e.value])
                        }
                    }
                    ))
                }(e)
            }
            ))).then((function(e) {
                return t.send(e.filter((function(e) {
                    return e
                }
                )))
            }
            )).then((function(e) {
                o.reset(),
                o.classList.remove("form-active"),
                formModal._element.querySelector(".modal-body p").innerText = i || e,
                formModal._element.querySelector(".modal-content").classList.add("alert-success"),
                formModal._element.querySelector(".modal-content").style.backgroundColor = "#70c770",
                formModal.show()
            }
            ), (function(e) {
                formModal._element.querySelector(".modal-body p").innerText = e.message,
                formModal._element.querySelector(".modal-content").classList.add("alert-danger"),
                formModal._element.querySelector(".modal-content").style.backgroundColor = "#ff9966"
            }
            )).then((function() {
                a.classList.remove("btn-loading"),
                a.removeAttribute("disabled")
            }
            ))
        }
    }
    )),
    l.forEach((function(e) {
        e.addEventListener("focus", (function() {
            a.classList.remove("btn-loading"),
            a.removeAttribute("disabled")
        }
        ))
    }
    ))
}
));
