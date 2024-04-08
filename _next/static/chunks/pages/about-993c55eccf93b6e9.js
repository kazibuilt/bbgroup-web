(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521, 647, 841], {
        9647: function (e, t, r) {
            "use strict";
            r.r(t);
            var s, i, l, a, n, c, o, d, u, h, m, v, _, f, x, p, b, j, g = r(959);

            function N() {
                return (N = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = (0, g.memo)(function (e) {
                return g.createElement("svg", N({
                    viewBox: "0 0 14 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), s || (s = g.createElement("rect", {
                    y: 8,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 0 8)",
                    fill: "black"
                })), i || (i = g.createElement("rect", {
                    x: 2,
                    y: 6,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 2 6)",
                    fill: "black"
                })), l || (l = g.createElement("rect", {
                    x: 4,
                    y: 4,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 4 4)",
                    fill: "black"
                })), a || (a = g.createElement("rect", {
                    x: 4,
                    y: 18,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 4 18)",
                    fill: "black"
                })), n || (n = g.createElement("rect", {
                    x: 4,
                    y: 24,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 4 24)",
                    fill: "black"
                })), c || (c = g.createElement("rect", {
                    x: 8,
                    y: 18,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 8 18)",
                    fill: "black"
                })), o || (o = g.createElement("rect", {
                    x: 8,
                    y: 24,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 8 24)",
                    fill: "black"
                })), d || (d = g.createElement("rect", {
                    x: 10,
                    y: 20,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 10 20)",
                    fill: "black"
                })), u || (u = g.createElement("rect", {
                    x: 10,
                    y: 26,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 10 26)",
                    fill: "black"
                })), h || (h = g.createElement("rect", {
                    x: 2,
                    y: 20,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 2 20)",
                    fill: "black"
                })), m || (m = g.createElement("rect", {
                    x: 2,
                    y: 26,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 2 26)",
                    fill: "black"
                })), v || (v = g.createElement("rect", {
                    x: 6,
                    y: 2,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 6 2)",
                    fill: "black"
                })), _ || (_ = g.createElement("rect", {
                    x: 6,
                    y: 16,
                    width: 12,
                    height: 2,
                    transform: "rotate(-90 6 16)",
                    fill: "black"
                })), f || (f = g.createElement("rect", {
                    x: 6,
                    y: 22,
                    width: 4,
                    height: 2,
                    transform: "rotate(-90 6 22)",
                    fill: "black"
                })), x || (x = g.createElement("rect", {
                    x: 6,
                    y: 26,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 6 26)",
                    fill: "black"
                })), p || (p = g.createElement("rect", {
                    x: 8,
                    y: 4,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 8 4)",
                    fill: "black"
                })), b || (b = g.createElement("rect", {
                    x: 10,
                    y: 6,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 10 6)",
                    fill: "black"
                })), j || (j = g.createElement("rect", {
                    x: 12,
                    y: 8,
                    width: 2,
                    height: 2,
                    transform: "rotate(-90 12 8)",
                    fill: "black"
                })))
            });
            t.default = y
        },
        8720: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function () {
                return r(1528)
            }])
        },
        8406: function (e, t, r) {
            "use strict";
            r.d(t, {
                p: function () {
                    return u
                }
            });
            var s = r(1527),
                i = r(153),
                l = r(6259),
                a = r(5199),
                n = r(1315),
                c = r(959),
                o = r(170),
                d = r.n(o);
            let u = (0, c.forwardRef)(function (e, t) {
                let {
                    title: r
                } = e, o = (0, c.useRef)(), u = (0, c.useRef)(), h = (0, c.useRef)();
                return (0, c.useImperativeHandle)(t, () => ({
                    animateIn: () => {
                        let e = a.p8.timeline({
                            paused: !0
                        });
                        return e.fromTo(u.current, {
                            clipPath: "inset(50% 10%)"
                        }, {
                            clipPath: "inset(0% 0%)",
                            duration: 1.8,
                            ease: n.L.rre
                        }, 0), e.fromTo(o.current, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            duration: 1.8,
                            ease: n.L.rre
                        }, 0), e.fromTo(h.current, {
                            y: "110%"
                        }, {
                            y: 0,
                            ease: n.L.rre,
                            duration: 1.8
                        }, .2), e.restart(), e
                    },
                    animateOut: () => {
                        let e = a.p8.timeline({
                            paused: !0
                        });
                        return e.fromTo(o.current, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            duration: 1,
                            ease: n.L.rre
                        }, 0).fromTo(u.current, {
                            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
                            duration: 1,
                            ease: n.L.rre
                        }, 0), e.restart(), e
                    }
                })), (0, s.jsxs)("div", {
                    className: d().curtain,
                    children: [(0, s.jsx)("div", {
                        className: d().overlay,
                        ref: o
                    }), (0, s.jsxs)("div", {
                        className: (0, l.Z)(d().inner, "layout-grid"),
                        ref: u,
                        children: [(0, s.jsxs)("div", {
                            className: d().cross1,
                            children: [(0, s.jsx)(i.Z, {}), (0, s.jsx)(i.Z, {})]
                        }), (0, s.jsx)("div", {
                            className: d().cross2,
                            children: (0, s.jsx)(i.Z, {})
                        }), (0, s.jsx)("h2", {
                            className: (0, l.Z)(d().title, "h3"),
                            children: (0, s.jsx)("span", {
                                ref: h,
                                children: r
                            })
                        }), (0, s.jsx)("div", {
                            className: d().cross3,
                            children: (0, s.jsx)(i.Z, {})
                        }), (0, s.jsxs)("div", {
                            className: d().cross4,
                            children: [(0, s.jsx)(i.Z, {}), (0, s.jsx)(i.Z, {}), (0, s.jsx)(i.Z, {}), (0, s.jsx)(i.Z, {})]
                        })]
                    })]
                })
            })
        },
        6148: function (e, t, r) {
            "use strict";
            r.d(t, {
                x: function () {
                    return n
                }
            });
            var s = r(1527),
                i = r(5199),
                l = r(5361),
                a = r(959);

            function n(e) {
                let {
                    scrolled: t,
                    className: r,
                    duration: l = "0.3",
                    color: n = "#fff",
                    value: c = "0.25"
                } = e, o = (0, a.useRef)(), d = (0, a.useRef)(), u = (0, a.useRef)(), h = (0, a.useRef)();
                return (0, a.useEffect)(() => {
                    let e = i.p8.timeline({
                        paused: !0
                    });
                    return e.to(o.current, {
                        duration: l,
                        morphSVG: d.current
                    }), h.current = e, () => {
                        e.kill()
                    }
                }, []), (0, a.useEffect)(() => {
                    var e, r;
                    t > c ? null === (e = h.current) || void 0 === e || e.play() : t < c && (null === (r = h.current) || void 0 === r || r.reverse())
                }, [t]), (0, s.jsxs)("svg", {
                    className: r,
                    fill: "none",
                    viewBox: "0 0 14 26",
                    children: [(0, s.jsx)("path", {
                        ref: o,
                        fill: n,
                        d: "M0 8V6h2v2zm2-2V4h2v2zm2-2V2h2v2zm0 14v-2h2v2zm0 6v-2h2v2zm4-6v-2h2v2zm0 6v-2h2v2zm2-4v-2h2v2zm0 6v-2h2v2zm-8-6v-2h2v2zm0 6v-2h2v2zM6 2V0h2v2zm0 14V4h2v12zm0 6v-4h2v4zm0 4v-2h2v2zM8 4V2h2v2zm2 2V4h2v2zm2 2V6h2v2z"
                    }), (0, s.jsx)("path", {
                        ref: d,
                        d: "M4 0h2v2H4zM0 0h2v2H0zm6 2h2v2H6zM2 2h2v2H2zm8 0h2v2h-2zm2-2h2v2h-2zM4 4h2v2H4zM0 4h2v2H0zm8 0h2v2H8zm0-4h2v2H8zm4 4h2v2h-2zM4 8h2v2H4zM0 8h2v2H0zm12 0h2v2h-2zM6 6h2v2H6zM2 6h2v2H2zm6 2h2v2H8zm2-2h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2zm-4-8h2v2H6zm0 8h2v2H6zm-4-8h2v2H2zm0 8h2v2H2zm4-4h2v2H6zm0 8h2v2H6zm-4-8h2v2H2zm0 8h2v2H2zm2-10h2v2H4zm0 8h2v2H4zm-4-8h2v2H0zm0 8h2v2H0zm8-4h2v2H8zm0 8h2v2H8zm4-12h2v2h-2zm0 8h2v2h-2zm-8-4h2v2H4zm0 8h2v2H4zm-4-8h2v2H0zm0 8h2v2H0zm10-10h2v2h-2zm0 8h2v2h-2zM8 12h2v2H8zm0 8h2v2H8zm4-4h2v2h-2zm0 8h2v2h-2z"
                    }), (0, s.jsx)("path", {
                        ref: u,
                        d: "M0 8V6h2v2zm2-2V4h2v2zm2-2V2h2v2zm0 14v-2h2v2zm0 6v-2h2v2zm4-6v-2h2v2zm0 6v-2h2v2zm2-4v-2h2v2zm0 6v-2h2v2zm-8-6v-2h2v2zm0 6v-2h2v2zM6 2V0h2v2zm0 14V4h2v12zm0 6v-4h2v4zm0 4v-2h2v2zM8 4V2h2v2zm2 2V4h2v2zm2 2V6h2v2z"
                    })]
                })
            }
            i.p8.registerPlugin(l.MorphSVGPlugin)
        },
        3939: function (e, t, r) {
            "use strict";
            r.d(t, {
                a: function () {
                    return h
                }
            });
            var s = r(1527),
                i = r(1690),
                l = r(6259),
                a = r(3039),
                n = r.n(a),
                c = r(959),
                o = r(4678),
                d = r.n(o);
            let u = n()(() => r.e(383).then(r.bind(r, 1383)), {
                    loadableGenerated: {
                        webpack: () => [1383]
                    },
                    ssr: !1
                }),
                h = (0, c.forwardRef)((e, t) => {
                    let {
                        children: r,
                        enabled: a = !0,
                        className: n,
                        customProps: c = {
                            navigation: !1,
                            buttons: !0,
                            loop: !0
                        }
                    } = e;
                    return (0, s.jsx)(i.iR, {
                        emblaApi: {
                            slidesToScroll: 1,
                            loop: !0,
                            align: "center"
                        },
                        enabled: a,
                        customProps: c,
                        children: (0, s.jsxs)("div", {
                            className: (0, l.Z)(d().wrapper, n),
                            ref: t,
                            children: [(0, s.jsx)(i.iR.Slides, {
                                className: d().slider,
                                children: r
                            }), (0, s.jsx)(m, {})]
                        })
                    })
                });
            h.displayName = "QuotesSlider";
            let m = e => {
                    let {
                        className: t
                    } = e, {
                        customProps: r = {}
                    } = (0, i.oN)(), {
                        navigation: a
                    } = r;
                    return (0, s.jsx)("div", {
                        className: (0, l.Z)(t, d().navigation, !a && d().hide),
                        children: (0, s.jsx)(v, {})
                    })
                },
                v = () => {
                    let {
                        scrollPrev: e,
                        scrollNext: t,
                        currentIndex: r,
                        scrollProgress: a,
                        customProps: n = {
                            length: 1,
                            buttons: !0
                        }
                    } = (0, i.oN)(), {
                        length: c,
                        buttons: o
                    } = n;
                    return (0, s.jsx)("div", {
                        className: (0, l.Z)(o && d().show),
                        children: (0, s.jsxs)("div", {
                            className: d()["arrow-buttons"],
                            children: [(0, s.jsx)("button", {
                                "aria-label": "previous slider button",
                                className: (0, l.Z)(d().buttons, (0 === r || 1 === a) && d().disabled),
                                onClick: e,
                                children: (0, s.jsx)(u, {
                                    className: "icon"
                                })
                            }), (0, s.jsx)("button", {
                                "aria-label": "next slider button",
                                className: (0, l.Z)(d().buttons, r === c - 1 && d().disabled),
                                onClick: t,
                                children: (0, s.jsx)(u, {
                                    className: "icon"
                                })
                            })]
                        })
                    })
                }
        },
        708: function (e, t, r) {
            "use strict";
            r.d(t, {
                Hm: function () {
                    return c
                },
                d4: function () {
                    return a
                },
                lM: function () {
                    return n
                }
            });
            var s = r(1527),
                i = r(959);
            let l = {
                    x: 0,
                    y: 0,
                    z: 0,
                    scale: 1
                },
                a = (0, i.createContext)(() => l);

            function n(e) {
                let {
                    children: t,
                    get: r
                } = e;
                return (0, s.jsx)(a.Provider, {
                    value: r,
                    children: t
                })
            }

            function c() {
                return (0, i.useContext)(a)
            }
            a.defaultValue = l
        },
        3257: function (e, t, r) {
            "use strict";
            let s;
            r.d(t, {
                CO: function () {
                    return n
                },
                Vn: function () {
                    return a
                }
            });
            var i = r(4352),
                l = r(959);

            function a() {
                let {
                    studio: e
                } = (0, i.eI)();
                return e
            }

            function n() {
                let [e, t] = (0, l.useState)(s), i = a();
                return (0, l.useEffect)(() => {
                    i && !s && Promise.all([r.e(757), r.e(872)]).then(r.t.bind(r, 6318, 23)).then(e => {
                        s = e.default, t(e.default)
                    })
                }, [i]), e
            }
        },
        3793: function (e, t, r) {
            "use strict";
            r.d(t, {
                w: function () {
                    return a
                }
            });
            var s = r(959),
                i = r(2085),
                l = r(3257);

            function a(e, t, r) {
                let {
                    onValuesChange: a,
                    lazy: n = !0,
                    deps: c = []
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = function (e, t, r) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                    return (0, s.useMemo)(() => {
                        if (e) return e.__objects = e.__objects || {}, e.__objects[t] && (e.detachObject(t), delete e.__objects[t]), e.__objects[t] = !0, null == e ? void 0 : e.object(t, r, {
                            reconfigure: !0
                        })
                    }, [e, t, ...i])
                }(e, t, r, c), d = (0, i.bV)(), [u, h] = (0, s.useState)({}), m = (0, s.useRef)({}), v = (0, s.useCallback)(() => m.current, []);
                (0, s.useEffect)(() => {
                    if (o) return o.onValuesChange(e => {
                        m.current = e, n || h(e), null == a || a(e)
                    }, d)
                }, [o, d, n, ...c]);
                let _ = (0, l.CO)();
                return {
                    get: v,
                    values: u,
                    set: (0, s.useCallback)(e => {
                        _ && _.transaction(t => {
                            let {
                                set: r
                            } = t;
                            r(o.props, {
                                ...o.value,
                                ...e
                            })
                        })
                    }, [_, o])
                }
            }
        },
        3206: function (e, t, r) {
            "use strict";
            r.d(t, {
                E: function () {
                    return h
                }
            });
            var s = r(1527),
                i = r(959),
                l = r(1690),
                a = r(2720),
                n = r(3911),
                c = r(708),
                o = r(6131),
                d = r(3039);
            let u = r.n(d)()(() => Promise.all([r.e(455), r.e(925), r.e(86), r.e(727), r.e(128)]).then(r.bind(r, 443)).then(e => {
                let {
                    WebGLImage: t
                } = e;
                return t
            }), {
                loadableGenerated: {
                    webpack: () => [443]
                },
                ssr: !1
            });

            function h(e) {
                let {
                    className: t,
                    src: r,
                    fallback: d = r,
                    alt: h = "",
                    sizes: m,
                    fill: v,
                    visible: _ = !0,
                    ...f
                } = e, {
                    WebGLTunnel: x
                } = (0, o.$)(), {
                    isWebGL: p
                } = (0, n.N)(), [b, j] = (0, i.useState)(!1), [g, N] = (0, i.useState)(), [y, w] = (0, i.useState)(), [z, k] = (0, i.useState)(), [Z, H] = (0, a.EL)({
                    ignoreTransform: !0
                }), E = function (...e) {
                    let t = i.useRef([]);
                    return t.current = e.map(e => i.useContext(e)), i.useMemo(() => ({
                        children: r
                    }) => e.reduceRight((e, r, s) => i.createElement(r.Provider, {
                        value: t.current[s],
                        children: e
                    }), r), [])
                }(c.d4), R = (0, i.useId)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: t,
                        ref: Z,
                        children: [(0, s.jsx)(l.Ee, {
                            onLoad: e => {
                                let {
                                    target: t
                                } = e;
                                N(t.currentSrc), w(t.naturalWidth), k(t.naturalHeight)
                            },
                            src: r,
                            alt: h,
                            sizes: m,
                            fill: v,
                            style: {
                                opacity: p && b ? 0 : 1
                            }
                        }), (0, s.jsx)(l.Ee, {
                            src: d,
                            alt: h,
                            sizes: m,
                            fill: v,
                            style: {
                                opacity: p ? 0 : 1
                            }
                        })]
                    }), (0, s.jsx)(x.In, {
                        children: (0, s.jsx)(E, {
                            children: (0, s.jsx)("group", {
                                visible: _,
                                matrixAutoUpdate: !1,
                                children: (0, s.jsx)(u, {
                                    src: g,
                                    rect: H,
                                    naturalWidth: y,
                                    naturalHeight: z,
                                    onLoad: () => j(!0),
                                    ...f
                                })
                            })
                        }, R)
                    })]
                })
            }
        },
        1528: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: function () {
                    return T
                },
                default: function () {
                    return O
                }
            });
            var s = r(1527),
                i = r(9647),
                l = r(6259),
                a = r(1690),
                n = r(2720),
                c = r(3098),
                o = r(9926),
                d = r(6148),
                u = r(9137),
                h = r(5199),
                m = r(708),
                v = r(7702),
                _ = r(2085),
                f = r(3793),
                x = r(6131),
                p = r(3039),
                b = r.n(p),
                j = r(959),
                g = r(4504),
                N = r.n(g);
            let y = b()(() => Promise.all([r.e(455), r.e(925), r.e(456), r.e(86), r.e(727), r.e(479)]).then(r.bind(r, 2479)).then(e => {
                let {
                    WebGLCity: t
                } = e;
                return t
            }), {
                loadableGenerated: {
                    webpack: () => [2479]
                },
                ssr: !1
            });

            function w(e) {
                let {
                    hero: t
                } = e, [r, i] = (0, n.EL)({
                    ignoreTransform: !0
                }), [p, b] = (0, n.EL)({
                    ignoreTransform: !0
                }), {
                    height: g
                } = (0, n.iP)(), [w, z] = (0, j.useState)(), k = (0, j.useRef)({
                    ...m.d4.defaultValue
                }), Z = (0, j.useRef)(), H = (0, j.useRef)(), E = (0, j.useRef)(), R = (0, j.useRef)(), M = (0, j.useRef)(), V = (0, _.Mi)("city"), A = (0, _.of)(V);
                (0, c.LZ)(e => {
                    let {
                        scroll: t
                    } = e, r = t / (i.height + i.top);
                    r = (0, v.uZ)(0, r, 1);
                    let s = t - (i.top + i.height - g);
                    s = Math.max(0, s), k.current.y = g / 2 - (b.height / 2 + i.top) + s, V && (V.sequence.position = r * A), z(r)
                }, [g, i, b, A]);
                let {
                    WebGLTunnel: P
                } = (0, x.$)();
                (0, f.w)(V, "city", {
                    height: o.types.number(500, {
                        range: [100, 5e3],
                        nudgeMultiplier: 10
                    })
                }, {
                    onValuesChange: e => {
                        let {
                            height: t
                        } = e;
                        Z.current.style.height = "".concat(t, "vh")
                    }
                }), (0, f.w)(V, "title", {
                    progress: o.types.number(0, {
                        range: [0, 1]
                    })
                }, {
                    onValuesChange: e => {
                        var t;
                        let {
                            progress: r
                        } = e;
                        h.ZP.set(E.current, {
                            autoAlpha: r
                        }), h.ZP.timeline({
                            paused: !0
                        }).fromTo(null === (t = R.current) || void 0 === t ? void 0 : t.lines, {
                            y: "110%"
                        }, {
                            duration: 1,
                            stagger: .1,
                            y: 0
                        }).progress(r)
                    }
                }), (0, f.w)(V, "subtitle", {
                    progress: o.types.number(0, {
                        range: [0, 1]
                    })
                }, {
                    onValuesChange: e => {
                        var t;
                        let {
                            progress: r
                        } = e;
                        h.ZP.timeline({
                            paused: !0
                        }).fromTo(null === (t = M.current) || void 0 === t ? void 0 : t.lines, {
                            y: "110%"
                        }, {
                            duration: 1,
                            stagger: .1,
                            y: 0
                        }).progress(r)
                    }
                }), (0, f.w)(V, "overlay", {
                    color: o.types.rgba({
                        r: 0,
                        g: 0,
                        b: 0,
                        a: .3
                    })
                }, {
                    onValuesChange: e => {
                        let {
                            color: t
                        } = e;
                        h.ZP.set(H.current, {
                            backgroundColor: t
                        })
                    }
                });
                let [C, S] = (0, j.useState)(), I = (0, j.useId)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(P.In, {
                        children: (0, s.jsx)(m.lM, {
                            get: () => k.current,
                            children: (0, s.jsx)(_.yR, {
                                id: "city",
                                children: (0, s.jsx)(y, {
                                    width: b.width,
                                    height: b.height,
                                    top: i.top,
                                    left: b.left,
                                    eventSource: C
                                })
                            })
                        }, I)
                    }), (0, s.jsx)("div", {
                        className: (0, l.Z)(N().city, "layout-grid-inner"),
                        ref: e => {
                            Z.current = e, r(e)
                        },
                        children: (0, s.jsxs)("div", {
                            className: N().sticky,
                            ref: e => {
                                p(e), S(e)
                            },
                            children: [(0, s.jsx)(d.x, {
                                scrolled: w,
                                className: (0, l.Z)(N().arrow, N().left)
                            }), (0, s.jsx)(d.x, {
                                scrolled: w,
                                className: (0, l.Z)(N().arrow, N().right)
                            }), (0, s.jsxs)("div", {
                                className: N().inner,
                                children: [(0, s.jsxs)("div", {
                                    className: (0, l.Z)(N().title, "h2"),
                                    children: [(null == t ? void 0 : t.icon.source) && (0, s.jsx)("div", {
                                        className: N().icon,
                                        ref: E,
                                        children: (0, s.jsx)(a.Ee, {
                                            src: null == t ? void 0 : t.icon.source,
                                            alt: (null == t ? void 0 : t.icon.caption) || "",
                                            fill: !0,
                                            sizes: "3.2vw"
                                        })
                                    }), (0, s.jsx)("h1", {
                                        children: (0, s.jsx)(u.C, {
                                            type: "lines",
                                            ref: e => {
                                                e && (R.current = null == e ? void 0 : e.split())
                                            },
                                            children: t.title
                                        })
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: (0, l.Z)(N().paragraph, "p-xl"),
                                    children: (0, s.jsx)(u.C, {
                                        type: "lines",
                                        ref: e => {
                                            e && (M.current = null == e ? void 0 : e.split())
                                        },
                                        children: t.description
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: N().overlay,
                                ref: H
                            })]
                        })
                    })]
                })
            }
            var z = r(7526),
                k = r(3206),
                Z = r(3262),
                H = r(5322),
                E = r.n(H);

            function R(e) {
                let {
                    title: t,
                    cards: r,
                    link: i,
                    images: a,
                    _content_source: n
                } = e, c = (0, j.useRef)({
                    ...m.d4.defaultValue
                });
                return (0, s.jsxs)("div", {
                    className: E().news,
                    "data-tina-field": (0, Z.Ry)({
                        _content_source: n
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: E().heading,
                        children: [(0, s.jsx)("h3", {
                            className: "h3",
                            children: t
                        }), (0, s.jsx)(z.r, {
                            className: (0, l.Z)(E().link, "cta text-medium link"),
                            withArrow: !0,
                            href: i.url,
                            children: i.text
                        })]
                    }), (0, s.jsxs)("div", {
                        className: E()["cards-wrapper"],
                        children: [r.map((e, t) => {
                            var r, i, n, o;
                            let {
                                description: d,
                                date: u,
                                link: h
                            } = e;
                            return (0, s.jsxs)(z.r, {
                                href: h.href,
                                className: E().card,
                                children: [(0, s.jsx)("div", {
                                    className: E().media,
                                    children: (0, s.jsx)(m.lM, {
                                        get: () => c.current,
                                        children: (0, s.jsx)("div", {
                                            className: E().image,
                                            children: (0, s.jsx)(k.E, {
                                                src: null === (i = a[t]) || void 0 === i ? void 0 : null === (r = i.media) || void 0 === r ? void 0 : r.source,
                                                alt: (null === (o = a[t]) || void 0 === o ? void 0 : null === (n = o.media) || void 0 === n ? void 0 : n.caption) || "",
                                                fill: !0,
                                                sizes: "(max-width:800px) 96vw, 23vw"
                                            })
                                        })
                                    })
                                }), (0, s.jsx)("p", {
                                    className: (0, l.Z)(E().description, "p"),
                                    children: d
                                }), (0, s.jsx)("p", {
                                    className: (0, l.Z)(E().date, "p-s"),
                                    children: u
                                })]
                            }, t)
                        }), (0, s.jsx)(z.r, {
                            className: (0, l.Z)(E().link, "cta text-medium link"),
                            withArrow: !0,
                            href: i.url,
                            children: i.text
                        })]
                    })]
                })
            }
            var M = r(8406),
                V = r(3939),
                A = r(9640),
                P = r(8754),
                C = r(4166),
                S = r.n(C);

            function I(e, t) {
                var r, a;
                let {
                    about: n,
                    mediumPosts: c,
                    style: o
                } = e, {
                    sections: d,
                    global: u
                } = (0, A.F)(n, "about"), {
                    hero: v,
                    heroMarquee: _,
                    textBlockOne: f,
                    middleImage: x,
                    textBlockTwo: p,
                    testimonials: b,
                    medium: g
                } = d, {
                    layout: N,
                    metadata: y,
                    navigation: H
                } = u, E = (0, j.useRef)({
                    ...m.d4.defaultValue
                }), C = (0, j.useRef)(), I = (0, j.useRef)(), T = (0, j.useCallback)(() => h.p8.timeline({
                    paused: !0
                }).restart(), []);
                (0, j.useImperativeHandle)(t, () => ({
                    preAnimateIn: e => {
                        let {
                            from: t,
                            to: r
                        } = e, s = h.p8.timeline({
                            paused: !0
                        });
                        return s.to({}, {}), s.add(I.current.animateIn()), s.restart()
                    },
                    animateIn: e => {
                        let {
                            from: t,
                            to: r
                        } = e, s = h.p8.timeline({
                            paused: !0
                        });
                        return s.to({}, {}), s.add(I.current.animateOut()), s.add(T(), ">-0.5"), s.restart()
                    },
                    animateOut: e => {
                        let {
                            from: t,
                            to: r
                        } = e;
                        return new Promise(e => {
                            e()
                        })
                    }
                }), []);
                let O = b.quote.length <= 2 ? [...b.quote, ...b.quote] : b.quote;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(M.p, {
                        ref: I,
                        title: "About"
                    }), (0, s.jsxs)(P.A, {
                        theme: "light",
                        ...N,
                        ...H,
                        seo: y,
                        className: S().page,
                        style: o,
                        ref: C,
                        children: [(0, s.jsx)("section", {
                            className: (0, l.Z)(S().hero, "desktop-only"),
                            children: (0, s.jsx)(w, {
                                hero: v
                            })
                        }), (0, s.jsxs)("section", {
                            className: (0, l.Z)(S().hero, "mobile-only layout-block"),
                            "data-tina-field": (0, Z.Ry)(v),
                            children: [(0, s.jsxs)("div", {
                                className: S().city,
                                children: [(0, s.jsx)(k.E, {
                                    src: null == v ? void 0 : v.bgImage.source,
                                    alt: (null == v ? void 0 : v.bgImage.caption) || "",
                                    fallback: null !== (r = null == v ? void 0 : v.bgImage.mobileSource) && void 0 !== r ? r : null == v ? void 0 : v.bgImage.source,
                                    fill: !0,
                                    sizes: "87vw",
                                    className: S().bg
                                }), (0, s.jsxs)("div", {
                                    className: S().content,
                                    children: [(0, s.jsx)("div", {
                                        className: S().icon,
                                        children: (0, s.jsx)(k.E, {
                                            src: null == v ? void 0 : v.icon.source,
                                            alt: (null == v ? void 0 : v.icon.caption) || "",
                                            fill: !0,
                                            sizes: "12vw"
                                        })
                                    }), (0, s.jsx)("h1", {
                                        className: (0, l.Z)(S().title, "h1"),
                                        children: v.title
                                    })]
                                }), (0, s.jsx)(i.default, {
                                    className: S().arrow
                                })]
                            }), (0, s.jsx)("p", {
                                className: (0, l.Z)(S().description, "p-xl"),
                                children: v.description
                            })]
                        }), (0, s.jsxs)("section", {
                            className: (0, l.Z)(S().content, "layout-block"),
                            children: [(0, s.jsxs)("div", {
                                className: (0, l.Z)(S()["grid-text-block-one"], "layout-grid"),
                                "data-tina-field": (0, Z.Ry)(f),
                                children: [(0, s.jsxs)("div", {
                                    className: S()["left-block"],
                                    children: [(0, s.jsx)("span", {
                                        className: "p-s dark-gray",
                                        children: f.titleAndDescription[0].title
                                    }), (0, s.jsx)("p", {
                                        className: (0, l.Z)(S().text, "p-xl text-indent"),
                                        children: f.titleAndDescription[0].description
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: S()["right-block"],
                                    children: [(0, s.jsx)("span", {
                                        className: (0, l.Z)(S().title, "p-s"),
                                        children: f.titleAndDescription[1].title
                                    }), (0, s.jsx)("p", {
                                        className: (0, l.Z)(S().text, "p"),
                                        children: f.titleAndDescription[1].description
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: S()["center-block"],
                                    children: [(0, s.jsx)("span", {
                                        className: (0, l.Z)(S().title, "p-s"),
                                        children: f.titleAndDescription[2].title
                                    }), (0, s.jsx)("p", {
                                        className: (0, l.Z)(S().text, "p"),
                                        children: f.titleAndDescription[2].description
                                    })]
                                })]
                            }), (0, s.jsx)("section", {
                                duration: 50,
                                className: (0, l.Z)(S()["numbers-grid"], "layout-block"),
                                "data-tina-field": (0, Z.Ry)(_),
                                children: _.marquee.map((e, t) => {
                                    let {
                                        number: r,
                                        detail: i
                                    } = e;
                                    return (0, s.jsxs)("div", {
                                        className: S().item,
                                        children: [(0, s.jsx)("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: function (e) {
                                                    let t = "";
                                                    if (e) {
                                                        for (let r = 0; r < e.length; r++) {
                                                            let s = e.charAt(r);
                                                            /[+*\/-]/.test(s) ? t += "<span class='h3'>".concat(s, "</span>") : t += s
                                                        }
                                                        return "<p class='h1'>".concat(t, "</p>")
                                                    }
                                                }(r)
                                            }
                                        }), (0, s.jsx)("p", {
                                            className: "p-s",
                                            children: i
                                        })]
                                    }, t)
                                })
                            }), (0, s.jsx)("div", {
                                className: S().media,
                                children: (0, s.jsx)(m.lM, {
                                    get: () => E.current,
                                    children: (0, s.jsx)("div", {
                                        className: S().image,
                                        "data-tina-field": (0, Z.Ry)(x),
                                        children: (0, s.jsx)(k.E, {
                                            src: x.image.source,
                                            alt: x.image.caption || "",
                                            fallback: null !== (a = x.image.mobileSource) && void 0 !== a ? a : x.image.source,
                                            fill: !0,
                                            sizes: "96vw",
                                            parallax: 1
                                        })
                                    })
                                })
                            }), (0, s.jsxs)("div", {
                                className: (0, l.Z)(S()["grid-text-block-two"], "layout-grid"),
                                "data-tina-field": (0, Z.Ry)(p),
                                children: [(0, s.jsxs)("div", {
                                    className: S()["left-block"],
                                    children: [p.titleAndDescription[0].title && (0, s.jsx)("span", {
                                        className: "p-s dark-gray",
                                        children: p.titleAndDescription[0].title
                                    }), p.titleAndDescription[0].description && (0, s.jsx)("p", {
                                        className: (0, l.Z)(S().text, "p-xl text-indent"),
                                        children: p.titleAndDescription[0].description
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: S()["right-block"],
                                    children: (0, s.jsx)("ul", {
                                        className: S().list,
                                        children: p.titleAndDescription.slice(1, 4).map((e, t) => {
                                            let {
                                                title: r,
                                                description: i
                                            } = e;
                                            return (0, s.jsxs)("li", {
                                                className: S().item,
                                                children: [(0, s.jsxs)("span", {
                                                    className: (0, l.Z)(S().index, "p-s dark-gray"),
                                                    children: ["[0", t + 1, "]"]
                                                }), (0, s.jsxs)("div", {
                                                    className: (0, l.Z)(S().text, "p"),
                                                    children: [(0, s.jsx)("span", {
                                                        className: (0, l.Z)(S().title, "p-s"),
                                                        children: r
                                                    }), (0, s.jsx)("p", {
                                                        children: i
                                                    })]
                                                })]
                                            }, t)
                                        })
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: (0, l.Z)(S().testimonials, "layout-grid"),
                                children: [(0, s.jsx)("h3", {
                                    className: (0, l.Z)(S().title, "h3"),
                                    children: "Testimonials"
                                }), (0, s.jsx)(V.a, {
                                    customProps: {
                                        buttons: !0,
                                        navigation: !0,
                                        id: "testimonial-slider-about"
                                    },
                                    className: S().slider,
                                    children: O.map((e, t) => {
                                        let {
                                            text: r,
                                            author: i,
                                            position: l,
                                            _content_source: a
                                        } = e;
                                        return (0, s.jsxs)("div", {
                                            className: S().slide,
                                            "data-tina-field": (0, Z.Ry)({
                                                _content_source: a
                                            }),
                                            children: [(0, s.jsx)("div", {
                                                className: S().quote,
                                                children: (0, s.jsx)("p", {
                                                    className: "p-l italic",
                                                    children: r
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: S().bottom,
                                                children: (0, s.jsxs)("div", {
                                                    className: S().author,
                                                    children: [(0, s.jsx)("p", {
                                                        className: "small-title",
                                                        children: i
                                                    }), (0, s.jsx)("p", {
                                                        className: "p-s",
                                                        children: l
                                                    })]
                                                })
                                            })]
                                        }, "testimonial-slider".concat(t))
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: S()["latest-news"],
                                children: (0, s.jsx)(R, {
                                    ...g,
                                    cards: c
                                })
                            }), (0, s.jsxs)("div", {
                                className: S().prefooter,
                                children: [(0, s.jsx)(z.r, {
                                    className: (0, l.Z)(S().link, "p-s"),
                                    href: "/team",
                                    children: "get to know our team"
                                }), (0, s.jsx)(z.r, {
                                    className: (0, l.Z)(S().link, "p-s"),
                                    href: "/portfolio",
                                    children: "view our portfolio"
                                })]
                            })]
                        })]
                    })]
                })
            }
            I.displayName = "About";
            var T = !0,
                O = (0, j.forwardRef)(I)
        },
        4504: function (e) {
            e.exports = {
                city: "city_city__n3mZm",
                sticky: "city_sticky__3rf5m",
                overlay: "city_overlay__wNyQg",
                inner: "city_inner__DXPRz",
                title: "city_title__HIhkC",
                icon: "city_icon__ALxJi",
                paragraph: "city_paragraph__dUy8o",
                arrow: "city_arrow__XIlFt",
                left: "city_left__qw2Mc",
                right: "city_right__p5Qzr"
            }
        },
        5322: function (e) {
            e.exports = {
                news: "news-section_news__Lz8cI",
                link: "news-section_link__rI8_W",
                heading: "news-section_heading__mZYIZ",
                "cards-wrapper": "news-section_cards-wrapper__uLbtm",
                card: "news-section_card__6J4q_",
                description: "news-section_description__5powt",
                media: "news-section_media__63PmD",
                image: "news-section_image___gfTo"
            }
        },
        170: function (e) {
            e.exports = {
                curtain: "curtain_curtain__zvWQR",
                overlay: "curtain_overlay__5cr7G",
                inner: "curtain_inner__eyyXU",
                cross1: "curtain_cross1__R6wO6",
                cross2: "curtain_cross2__6m1Hg",
                cross3: "curtain_cross3__lDPyC",
                cross4: "curtain_cross4__QdHv_",
                title: "curtain_title__Nxqe4"
            }
        },
        4678: function (e) {
            e.exports = {
                navigation: "slider_navigation__xvO2g",
                hide: "slider_hide___5Xsr",
                show: "slider_show__TV794",
                wrapper: "slider_wrapper__ibei4",
                slider: "slider_slider__uOIBl",
                "arrow-buttons": "slider_arrow-buttons__icCYt",
                buttons: "slider_buttons__3uuUN"
            }
        },
        4166: function (e) {
            e.exports = {
                page: "about_page__6_vE2",
                hero: "about_hero__dLHu6",
                city: "about_city__jY4N3",
                arrow: "about_arrow__G_v9m",
                bg: "about_bg__1an2P",
                content: "about_content__QllbK",
                icon: "about_icon__0SpAM",
                title: "about_title__TmjnO",
                "grid-text-block-one": "about_grid-text-block-one__Knpcx",
                "left-block": "about_left-block__KXwBz",
                text: "about_text__E_j5A",
                "right-block": "about_right-block__8c2il",
                "center-block": "about_center-block__y0w_a",
                media: "about_media___1wU2",
                image: "about_image__MsbUO",
                "grid-text-block-two": "about_grid-text-block-two__TiZy1",
                list: "about_list__lqj5S",
                item: "about_item__dmsNl",
                index: "about_index__uCKmx",
                testimonials: "about_testimonials__f4n3D",
                slider: "about_slider__mVT8c",
                slide: "about_slide__ZkUGR",
                quote: "about_quote__lSHCN",
                bottom: "about_bottom__mx2px",
                author: "about_author__Ho_R5",
                "latest-news": "about_latest-news__7FPmj",
                prefooter: "about_prefooter__fj52U",
                link: "about_link__yMnt9",
                "numbers-grid": "about_numbers-grid__StgbO"
            }
        }
    },
    function (e) {
        e.O(0, [370, 280, 888, 774, 179], function () {
            return e(e.s = 8720)
        }), _N_E = e.O()
    }
]);