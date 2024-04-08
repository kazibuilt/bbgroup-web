(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        4082: function (e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return t(2166)
            }])
        },
        8406: function (e, r, t) {
            "use strict";
            t.d(r, {
                p: function () {
                    return d
                }
            });
            var n = t(1527),
                s = t(153),
                a = t(6259),
                i = t(5199),
                l = t(1315),
                o = t(959),
                u = t(170),
                c = t.n(u);
            let d = (0, o.forwardRef)(function (e, r) {
                let {
                    title: t
                } = e, u = (0, o.useRef)(), d = (0, o.useRef)(), m = (0, o.useRef)();
                return (0, o.useImperativeHandle)(r, () => ({
                    animateIn: () => {
                        let e = i.p8.timeline({
                            paused: !0
                        });
                        return e.fromTo(d.current, {
                            clipPath: "inset(50% 10%)"
                        }, {
                            clipPath: "inset(0% 0%)",
                            duration: 1.8,
                            ease: l.L.rre
                        }, 0), e.fromTo(u.current, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            duration: 1.8,
                            ease: l.L.rre
                        }, 0), e.fromTo(m.current, {
                            y: "110%"
                        }, {
                            y: 0,
                            ease: l.L.rre,
                            duration: 1.8
                        }, .2), e.restart(), e
                    },
                    animateOut: () => {
                        let e = i.p8.timeline({
                            paused: !0
                        });
                        return e.fromTo(u.current, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            duration: 1,
                            ease: l.L.rre
                        }, 0).fromTo(d.current, {
                            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
                            duration: 1,
                            ease: l.L.rre
                        }, 0), e.restart(), e
                    }
                })), (0, n.jsxs)("div", {
                    className: c().curtain,
                    children: [(0, n.jsx)("div", {
                        className: c().overlay,
                        ref: u
                    }), (0, n.jsxs)("div", {
                        className: (0, a.Z)(c().inner, "layout-grid"),
                        ref: d,
                        children: [(0, n.jsxs)("div", {
                            className: c().cross1,
                            children: [(0, n.jsx)(s.Z, {}), (0, n.jsx)(s.Z, {})]
                        }), (0, n.jsx)("div", {
                            className: c().cross2,
                            children: (0, n.jsx)(s.Z, {})
                        }), (0, n.jsx)("h2", {
                            className: (0, a.Z)(c().title, "h3"),
                            children: (0, n.jsx)("span", {
                                ref: m,
                                children: t
                            })
                        }), (0, n.jsx)("div", {
                            className: c().cross3,
                            children: (0, n.jsx)(s.Z, {})
                        }), (0, n.jsxs)("div", {
                            className: c().cross4,
                            children: [(0, n.jsx)(s.Z, {}), (0, n.jsx)(s.Z, {}), (0, n.jsx)(s.Z, {}), (0, n.jsx)(s.Z, {})]
                        })]
                    })]
                })
            })
        },
        1421: function (e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                __N_SSG: function () {
                    return y
                },
                default: function () {
                    return g
                }
            });
            var n = t(1527),
                s = t(3098),
                a = t(6259),
                i = t(8406),
                l = t(7526),
                o = t(5199),
                u = t(1315),
                c = t(6131),
                d = t(3039),
                m = t.n(d),
                h = t(959);
            let _ = m()(() => Promise.all([t.e(455), t.e(925), t.e(86), t.e(727), t.e(440)]).then(t.bind(t, 3845)).then(e => {
                let {
                    WebGLMosaic: r
                } = e;
                return r
            }), {
                loadableGenerated: {
                    webpack: () => [3845]
                },
                ssr: !1
            });

            function p(e) {
                let {
                    visible: r = !0,
                    imagesArray: t
                } = e, s = (0, h.useMemo)(() => t.map(e => {
                    let {
                        image: r
                    } = e;
                    return {
                        image: r.source,
                        sort: Math.random()
                    }
                }).sort((e, r) => e.sort - r.sort).map(e => {
                    let {
                        image: r
                    } = e;
                    return r
                }), []), {
                    WebGLTunnel: a
                } = (0, c.$)(), i = (0, h.useRef)();
                (0, h.useEffect)(() => {
                    if (!i.current) return;
                    let e = [];
                    i.current.traverse(r => {
                        r.isMesh && e.push(r)
                    });
                    let t = e.map(e => {
                            let {
                                material: r
                            } = e;
                            return r
                        }),
                        n = {
                            value: 0
                        },
                        s = o.p8.timeline().fromTo(i.current.scale, {
                            x: r ? 1.5 : 1,
                            y: r ? 1.5 : 1,
                            z: r ? 1.5 : 1
                        }, {
                            x: r ? 1 : 1.5,
                            y: r ? 1 : 1.5,
                            z: r ? 1 : 1.5,
                            ease: u.L.rre,
                            duration: 1,
                            onUpdate: () => {
                                i.current.updateMatrix()
                            }
                        }, 0).fromTo(n, {
                            value: r ? 0 : 1
                        }, {
                            value: r ? 1 : 0,
                            ease: u.L.rre,
                            duration: 1,
                            onStart: () => {
                                r && (i.current.visible = !0)
                            },
                            onUpdate: () => {
                                t.forEach(e => {
                                    e.opacity = n.value
                                })
                            },
                            onComplete: () => {
                                r || (i.current.visible = !1)
                            }
                        }, 0);
                    return () => {
                        s.kill()
                    }
                }, [r]);
                let l = (0, h.useId)();
                return (0, n.jsx)(a.In, {
                    children: (0, n.jsx)("group", {
                        ref: i,
                        visible: !1,
                        matrixAutoUpdate: !1,
                        children: (0, n.jsx)(_, {
                            assets: s
                        })
                    }, l)
                })
            }
            var f = t(9640),
                v = t(8754),
                x = t(3262),
                j = t(97),
                N = t.n(j);

            function w(e, r) {
                let {
                    home: t,
                    style: l
                } = e, c = (0, s.LZ)();
                null == c || c.stop();
                let {
                    sections: d,
                    global: m
                } = (0, f.F)(t, "home"), {
                    hero: _
                } = d, {
                    layout: j,
                    metadata: w,
                    navigation: y
                } = m, g = (0, h.useRef)(), Z = (0, h.useRef)(), b = (0, h.useRef)([]), L = (0, h.useRef)(), k = (0, h.useRef)([]), T = (0, h.useCallback)(() => {
                    let e = o.p8.timeline({
                        paused: !0
                    });
                    return e.fromTo(b.current, {
                        y: "110%"
                    }, {
                        y: 0,
                        stagger: .1,
                        ease: u.L.rre,
                        duration: 1
                    }), e.restart()
                }, []);
                (0, h.useImperativeHandle)(r, () => ({
                    preAnimateIn: e => {
                        let {
                            from: r,
                            to: t
                        } = e, n = o.p8.timeline({
                            paused: !0
                        });
                        return n.add(Z.current.animateIn()), n.to({}, {}), n.restart()
                    },
                    animateIn: e => {
                        let {
                            from: r,
                            to: t
                        } = e, n = o.p8.timeline({
                            paused: !0
                        });
                        return n.to({}, {}), n.add(Z.current.animateOut()), n.add(T(), ">-0.5"), n.restart()
                    },
                    animateOut: e => {
                        let {
                            from: r,
                            to: t
                        } = e;
                        return new Promise(e => {
                            e()
                        })
                    }
                }), []);
                let [A, I] = (0, h.useState)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.p, {
                        ref: Z,
                        title: "Home"
                    }), (0, n.jsx)(v.A, {
                        theme: "light",
                        ...j,
                        ...y,
                        headerMarquee: !0,
                        seo: w,
                        ref: g,
                        style: l,
                        className: (0, a.Z)(N().page, "home"),
                        onBeforeLoad: () => {
                            T().pause()
                        },
                        onLoad: () => {
                            T()
                        },
                        scrollbar: !1,
                        children: (0, n.jsxs)("section", {
                            className: (0, a.Z)(N().hero),
                            children: [(0, n.jsx)("h1", {
                                className: (0, a.Z)(N().title, void 0 !== A && N().hover, "h2 desktop-only"),
                                "data-tina-field": (0, x.Ry)(_, "title"),
                                ref: L,
                                children: (0, n.jsx)(R, {
                                    hero: _,
                                    title: _.title,
                                    linesRef: b,
                                    current: A,
                                    wordsRef: k,
                                    setCurrent: I
                                })
                            }), (0, n.jsx)("h1", {
                                className: (0, a.Z)(N().title, void 0 !== A && N().hover, "h2 mobile-only"),
                                "data-tina-field": (0, x.Ry)(_, "titleMobile"),
                                children: (0, n.jsx)(R, {
                                    hero: _,
                                    title: _.titleMobile,
                                    current: A,
                                    setCurrent: I
                                })
                            }), _.wordAndImages.map((e, r) => {
                                let {
                                    images: t
                                } = e;
                                return (0, n.jsx)(p, {
                                    className: N().mosaic,
                                    visible: A === r,
                                    imagesArray: t
                                }, "mosaic-".concat(r))
                            })]
                        })
                    })]
                })
            }
            w.displayName = "Home";
            var y = !0,
                g = (0, h.forwardRef)(w);
            let Z = (e, r) => e === r.length - 1,
                R = e => {
                    let {
                        hero: r,
                        title: t,
                        linesRef: s,
                        wordsRef: i,
                        current: o,
                        setCurrent: u
                    } = e, c = 0;
                    return t.children.map((e, d) => (0, n.jsxs)("span", {
                        id: "line-".concat(d),
                        children: [(0, n.jsx)("span", {
                            className: N().line,
                            children: (0, n.jsxs)("span", {
                                ref: e => {
                                    (null == s ? void 0 : s.current) && (s.current[d] = e)
                                },
                                className: N().line,
                                children: [e.children.map(e => {
                                    let {
                                        text: t
                                    } = e, s = [], m = r.wordAndImages.map(e => {
                                        let {
                                            word: r
                                        } = e;
                                        return r.toLowerCase()
                                    }), h = null == t ? void 0 : t.split(" ");
                                    return h.forEach((e, t) => {
                                        if (m.includes(e.toLowerCase())) {
                                            var _;
                                            s.push((0, n.jsx)(l.r, {
                                                className: (0, a.Z)(N().link, N().word, !Z(t, h) && N().space, o === c && N().current),
                                                id: "match-word-".concat(c),
                                                href: null == r ? void 0 : null === (_ = r.wordAndImages[c]) || void 0 === _ ? void 0 : _.intenralLink,
                                                onMouseEnter: e => {
                                                    var r;
                                                    u(Number(null === (r = e.target.id) || void 0 === r ? void 0 : r.split("-").pop()))
                                                },
                                                onMouseLeave: () => {
                                                    u()
                                                },
                                                ref: e => {
                                                    if (null == i ? void 0 : i.current) {
                                                        var r;
                                                        let t = null == e ? void 0 : null === (r = e.id) || void 0 === r ? void 0 : r.split("-").pop();
                                                        i.current[t] = e
                                                    }
                                                },
                                                children: e
                                            }, "match-word-".concat(c))), c += 1
                                        } else s.push((0, n.jsx)("span", {
                                            className: (0, a.Z)(N().word, !Z(t, h) && N().space),
                                            children: e
                                        }, "word-".concat(d + t)))
                                    }), s.map(e => e)
                                }), d === t.children.length - 1 && (0, n.jsx)("span", {
                                    className: (0, a.Z)(N().word),
                                    children: ""
                                })]
                            })
                        }), (0, n.jsx)("br", {})]
                    }, "line-".concat(d)))
                }
        },
        2166: function (e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                __N_SSG: function () {
                    return s
                }
            });
            var n = t(1421),
                s = !0;
            r.default = n.default
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
        97: function (e) {
            e.exports = {
                page: "home_page___kTjr",
                hero: "home_hero__TJz4n",
                title: "home_title__Ddv9x",
                line: "home_line__PgW7F",
                word: "home_word__rL8o2",
                space: "home_space__6WB_H",
                hover: "home_hover__tof9S",
                current: "home_current__Hwl9W",
                link: "home_link__g_vWd",
                mosaic: "home_mosaic__w_18k"
            }
        }
    },
    function (e) {
        e.O(0, [370, 280, 888, 774, 179], function () {
            return e(e.s = 4082)
        }), _N_E = e.O()
    }
]);