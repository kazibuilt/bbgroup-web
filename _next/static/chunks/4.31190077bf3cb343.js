(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4, 841], {
        449: function (e, t, r) {
            "use strict";
            r.d(t, {
                R: function () {
                    return u
                }
            });
            var n = r(959),
                l = r(5060),
                o = r(2485);

            function u(e, t, r) {
                let u = (0, o.A)(e => e.size),
                    i = (0, o.A)(e => e.viewport),
                    c = "number" == typeof e ? e : u.width * i.dpr,
                    s = "number" == typeof t ? t : u.height * i.dpr,
                    {
                        samples: a = 0,
                        depth: f,
                        ...d
                    } = ("number" == typeof e ? r : e) || {},
                    p = n.useMemo(() => {
                        let e = new l.WebGLRenderTarget(c, s, {
                            minFilter: l.LinearFilter,
                            magFilter: l.LinearFilter,
                            type: l.HalfFloatType,
                            ...d
                        });
                        return f && (e.depthTexture = new l.DepthTexture(c, s, l.FloatType)), e.samples = a, e
                    }, []);
                return n.useLayoutEffect(() => {
                    p.setSize(c, s), a && (p.samples = a)
                }, [a, p, c, s]), n.useEffect(() => () => p.dispose(), []), p
            }
        },
        5014: function (e, t, r) {
            "use strict";
            r.d(t, {
                S: function () {
                    return u
                }
            });
            var n = r(5060),
                l = r(1171);
            let o = 0,
                u = (0, l.Z)(e => (n.DefaultLoadingManager.onStart = (t, r, n) => {
                    e({
                        active: !0,
                        item: t,
                        loaded: r,
                        total: n,
                        progress: (r - o) / (n - o) * 100
                    })
                }, n.DefaultLoadingManager.onLoad = () => {
                    e({
                        active: !1
                    })
                }, n.DefaultLoadingManager.onError = t => e(e => ({
                    errors: [...e.errors, t]
                })), n.DefaultLoadingManager.onProgress = (t, r, n) => {
                    r === n && (o = n), e({
                        active: !0,
                        item: t,
                        loaded: r,
                        total: n,
                        progress: (r - o) / (n - o) * 100 || 100
                    })
                }, {
                    errors: [],
                    active: !1,
                    progress: 0,
                    item: "",
                    loaded: 0,
                    total: 0
                }))
        },
        1110: function (e) {
            function t(e, t, r) {
                function n() {
                    var s = Date.now() - i;
                    s < t && s >= 0 ? l = setTimeout(n, t - s) : (l = null, r || (c = e.apply(u, o), u = o = null))
                }
                null == t && (t = 100);
                var l, o, u, i, c, s = function () {
                    u = this, o = arguments, i = Date.now();
                    var s = r && !l;
                    return l || (l = setTimeout(n, t)), s && (c = e.apply(u, o), u = o = null), c
                };
                return s.clear = function () {
                    l && (clearTimeout(l), l = null)
                }, s.flush = function () {
                    l && (c = e.apply(u, o), u = o = null, clearTimeout(l), l = null)
                }, s
            }
            t.debounce = t, e.exports = t
        },
        3257: function (e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                CO: function () {
                    return i
                },
                Vn: function () {
                    return u
                }
            });
            var l = r(4352),
                o = r(959);

            function u() {
                let {
                    studio: e
                } = (0, l.eI)();
                return e
            }

            function i() {
                let [e, t] = (0, o.useState)(n), l = u();
                return (0, o.useEffect)(() => {
                    l && !n && Promise.all([r.e(757), r.e(872)]).then(r.t.bind(r, 6318, 23)).then(e => {
                        n = e.default, t(e.default)
                    })
                }, [l]), e
            }
        },
        3793: function (e, t, r) {
            "use strict";
            r.d(t, {
                w: function () {
                    return u
                }
            });
            var n = r(959),
                l = r(2085),
                o = r(3257);

            function u(e, t, r) {
                let {
                    onValuesChange: u,
                    lazy: i = !0,
                    deps: c = []
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s = function (e, t, r) {
                    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                    return (0, n.useMemo)(() => {
                        if (e) return e.__objects = e.__objects || {}, e.__objects[t] && (e.detachObject(t), delete e.__objects[t]), e.__objects[t] = !0, null == e ? void 0 : e.object(t, r, {
                            reconfigure: !0
                        })
                    }, [e, t, ...l])
                }(e, t, r, c), a = (0, l.bV)(), [f, d] = (0, n.useState)({}), p = (0, n.useRef)({}), v = (0, n.useCallback)(() => p.current, []);
                (0, n.useEffect)(() => {
                    if (s) return s.onValuesChange(e => {
                        p.current = e, i || d(e), null == u || u(e)
                    }, a)
                }, [s, a, i, ...c]);
                let m = (0, o.CO)();
                return {
                    get: v,
                    values: f,
                    set: (0, n.useCallback)(e => {
                        m && m.transaction(t => {
                            let {
                                set: r
                            } = t;
                            r(s.props, {
                                ...s.value,
                                ...e
                            })
                        })
                    }, [m, s])
                }
            }
        },
        5345: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                WebGLCanvas: function () {
                    return Z
                }
            });
            var n = r(1527),
                l = r(7469),
                o = r(959),
                u = r(2485),
                i = r(449);
            let c = e => "function" == typeof e,
                s = o.forwardRef(({
                    envMap: e,
                    resolution: t = 256,
                    frames: r = 1 / 0,
                    children: n,
                    makeDefault: s,
                    ...a
                }, f) => {
                    let d = (0, u.A)(({
                            set: e
                        }) => e),
                        p = (0, u.A)(({
                            camera: e
                        }) => e),
                        v = (0, u.A)(({
                            size: e
                        }) => e),
                        m = o.useRef(null);
                    o.useImperativeHandle(f, () => m.current, []);
                    let h = o.useRef(null),
                        b = (0, i.R)(t);
                    o.useLayoutEffect(() => {
                        a.manual || m.current.updateProjectionMatrix()
                    }, [v, a]), o.useLayoutEffect(() => {
                        m.current.updateProjectionMatrix()
                    }), o.useLayoutEffect(() => {
                        if (s) return d(() => ({
                            camera: m.current
                        })), () => d(() => ({
                            camera: p
                        }))
                    }, [m, s, d]);
                    let g = 0,
                        E = null,
                        w = c(n);
                    return (0, u.C)(t => {
                        w && (r === 1 / 0 || g < r) && (h.current.visible = !1, t.gl.setRenderTarget(b), E = t.scene.background, e && (t.scene.background = e), t.gl.render(t.scene, m.current), t.scene.background = E, t.gl.setRenderTarget(null), h.current.visible = !0, g++)
                    }), o.createElement(o.Fragment, null, o.createElement("orthographicCamera", (0, l.Z)({
                        left: -(v.width / 2),
                        right: v.width / 2,
                        top: v.height / 2,
                        bottom: -(v.height / 2),
                        ref: m
                    }, a), !w && n), o.createElement("group", {
                        ref: h
                    }, w && n(b.texture)))
                });
            var a = r(5060),
                f = r(1110),
                d = r.n(f);
            let p = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                v = (e, t) => p.every(r => e[r] === t[r]);
            var m = Object.defineProperty,
                h = Object.defineProperties,
                b = Object.getOwnPropertyDescriptors,
                g = Object.getOwnPropertySymbols,
                E = Object.prototype.hasOwnProperty,
                w = Object.prototype.propertyIsEnumerable,
                y = (e, t, r) => t in e ? m(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                C = (e, t) => {
                    for (var r in t || (t = {})) E.call(t, r) && y(e, r, t[r]);
                    if (g)
                        for (var r of g(t)) w.call(t, r) && y(e, r, t[r]);
                    return e
                },
                j = (e, t) => h(e, b(t));

            function _(e) {
                try {
                    return Object.defineProperties(e, {
                        _currentRenderer: {
                            get: () => null,
                            set() {}
                        },
                        _currentRenderer2: {
                            get: () => null,
                            set() {}
                        }
                    })
                } catch (t) {
                    return e
                }
            }
            let O = _(o.createContext(null));
            class x extends o.Component {
                render() {
                    return o.createElement(O.Provider, {
                        value: this._reactInternals
                    }, this.props.children)
                }
            }
            let {
                ReactCurrentOwner: L,
                ReactCurrentDispatcher: R
            } = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            r(5259), r(7427), r(2962);
            let z = {
                onClick: ["click", !1],
                onContextMenu: ["contextmenu", !1],
                onDoubleClick: ["dblclick", !1],
                onWheel: ["wheel", !0],
                onPointerDown: ["pointerdown", !0],
                onPointerUp: ["pointerup", !0],
                onPointerLeave: ["pointerleave", !0],
                onPointerMove: ["pointermove", !0],
                onPointerCancel: ["pointercancel", !0],
                onLostPointerCapture: ["lostpointercapture", !0]
            };

            function S(e) {
                let {
                    handlePointer: t
                } = (0, u.c)(e);
                return {
                    priority: 1,
                    enabled: !0,
                    compute(e, t, r) {
                        t.pointer.set(e.offsetX / t.size.width * 2 - 1, -(e.offsetY / t.size.height * 2) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                    },
                    connected: void 0,
                    handlers: Object.keys(z).reduce((e, r) => ({
                        ...e,
                        [r]: t(r)
                    }), {}),
                    update: () => {
                        var t;
                        let {
                            events: r,
                            internal: n
                        } = e.getState();
                        null != (t = n.lastEvent) && t.current && r.handlers && r.handlers.onPointerMove(n.lastEvent.current)
                    },
                    connect: t => {
                        var r;
                        let {
                            set: n,
                            events: l
                        } = e.getState();
                        null == l.disconnect || l.disconnect(), n(e => ({
                            events: {
                                ...e.events,
                                connected: t
                            }
                        })), Object.entries(null != (r = l.handlers) ? r : []).forEach(([e, r]) => {
                            let [n, l] = z[e];
                            t.addEventListener(n, r, {
                                passive: l
                            })
                        })
                    },
                    disconnect: () => {
                        let {
                            set: t,
                            events: r
                        } = e.getState();
                        if (r.connected) {
                            var n;
                            Object.entries(null != (n = r.handlers) ? n : []).forEach(([e, t]) => {
                                if (r && r.connected instanceof HTMLElement) {
                                    let [n] = z[e];
                                    r.connected.removeEventListener(n, t)
                                }
                            }), t(e => ({
                                events: {
                                    ...e.events,
                                    connected: void 0
                                }
                            }))
                        }
                    }
                }
            }
            let P = o.forwardRef(function ({
                    children: e,
                    fallback: t,
                    resize: r,
                    style: n,
                    gl: i,
                    events: c = S,
                    eventSource: s,
                    eventPrefix: f,
                    shadows: p,
                    linear: m,
                    flat: h,
                    legacy: b,
                    orthographic: g,
                    frameloop: E,
                    dpr: w,
                    performance: y,
                    raycaster: z,
                    camera: P,
                    scene: M,
                    onPointerMissed: k,
                    onCreated: T,
                    ...D
                }, F) {
                    o.useMemo(() => (0, u.e)(a), []);
                    let A = function () {
                            let e = function () {
                                var e;
                                let t = function () {
                                        let e = o.useContext(O);
                                        if (null === e) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
                                        let t = o.useId();
                                        return o.useMemo(() => {
                                            for (let r of [null == L ? void 0 : L.current, e, null == e ? void 0 : e.alternate]) {
                                                if (!r) continue;
                                                let e = function e(t, r, n) {
                                                    if (!t) return;
                                                    if (!0 === n(t)) return t;
                                                    let l = r ? t.return : t.child;
                                                    for (; l;) {
                                                        let t = e(l, r, n);
                                                        if (t) return t;
                                                        l = r ? null : l.sibling
                                                    }
                                                }(r, !1, e => {
                                                    let r = e.memoizedState;
                                                    for (; r;) {
                                                        if (r.memoizedState === t) return !0;
                                                        r = r.next
                                                    }
                                                });
                                                if (e) return e
                                            }
                                        }, [e, t])
                                    }(),
                                    [r] = o.useState(() => new Map);
                                r.clear();
                                let n = t;
                                for (; n;) {
                                    if (n.type && "object" == typeof n.type) {
                                        let t = "Provider" in n.type ? n.type : n.type._context;
                                        t && t !== O && !r.has(t) && r.set(t, null == (e = null == R ? void 0 : R.current) ? void 0 : e.readContext(_(t)))
                                    }
                                    n = n.return
                                }
                                return r
                            }();
                            return o.useMemo(() => Array.from(e.keys()).reduce((t, r) => n => o.createElement(t, null, o.createElement(r.Provider, j(C({}, n), {
                                value: e.get(r)
                            }))), e => o.createElement(x, C({}, e))), [e])
                        }(),
                        [I, N] = function (e) {
                            var t;
                            let {
                                debounce: r,
                                scroll: n,
                                polyfill: l,
                                offsetSize: u
                            } = void 0 === e ? {
                                debounce: 0,
                                scroll: !1,
                                offsetSize: !1
                            } : e, i = l || ("undefined" == typeof window ? class {} : window.ResizeObserver);
                            if (!i) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                            let [c, s] = (0, o.useState)({
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0,
                                bottom: 0,
                                right: 0,
                                x: 0,
                                y: 0
                            }), a = (0, o.useRef)({
                                element: null,
                                scrollContainers: null,
                                resizeObserver: null,
                                lastBounds: c
                            }), f = r ? "number" == typeof r ? r : r.scroll : null, p = r ? "number" == typeof r ? r : r.resize : null, m = (0, o.useRef)(!1);
                            (0, o.useEffect)(() => (m.current = !0, () => void(m.current = !1)));
                            let [h, b, g] = (0, o.useMemo)(() => {
                                let e = () => {
                                    if (!a.current.element) return;
                                    let {
                                        left: e,
                                        top: t,
                                        width: r,
                                        height: n,
                                        bottom: l,
                                        right: o,
                                        x: i,
                                        y: c
                                    } = a.current.element.getBoundingClientRect(), f = {
                                        left: e,
                                        top: t,
                                        width: r,
                                        height: n,
                                        bottom: l,
                                        right: o,
                                        x: i,
                                        y: c
                                    };
                                    a.current.element instanceof HTMLElement && u && (f.height = a.current.element.offsetHeight, f.width = a.current.element.offsetWidth), Object.freeze(f), m.current && !v(a.current.lastBounds, f) && s(a.current.lastBounds = f)
                                };
                                return [e, p ? d()(e, p) : e, f ? d()(e, f) : e]
                            }, [s, u, f, p]);

                            function E() {
                                a.current.scrollContainers && (a.current.scrollContainers.forEach(e => e.removeEventListener("scroll", g, !0)), a.current.scrollContainers = null), a.current.resizeObserver && (a.current.resizeObserver.disconnect(), a.current.resizeObserver = null)
                            }

                            function w() {
                                a.current.element && (a.current.resizeObserver = new i(g), a.current.resizeObserver.observe(a.current.element), n && a.current.scrollContainers && a.current.scrollContainers.forEach(e => e.addEventListener("scroll", g, {
                                    capture: !0,
                                    passive: !0
                                })))
                            }
                            return t = !!n, (0, o.useEffect)(() => {
                                if (t) return window.addEventListener("scroll", g, {
                                    capture: !0,
                                    passive: !0
                                }), () => void window.removeEventListener("scroll", g, !0)
                            }, [g, t]), (0, o.useEffect)(() => (window.addEventListener("resize", b), () => void window.removeEventListener("resize", b)), [b]), (0, o.useEffect)(() => {
                                E(), w()
                            }, [n, g, b]), (0, o.useEffect)(() => E, []), [e => {
                                e && e !== a.current.element && (E(), a.current.element = e, a.current.scrollContainers = function e(t) {
                                    let r = [];
                                    if (!t || t === document.body) return r;
                                    let {
                                        overflow: n,
                                        overflowX: l,
                                        overflowY: o
                                    } = window.getComputedStyle(t);
                                    return [n, l, o].some(e => "auto" === e || "scroll" === e) && r.push(t), [...r, ...e(t.parentElement)]
                                }(e), w())
                            }, c, h]
                        }({
                            scroll: !0,
                            debounce: {
                                scroll: 50,
                                resize: 0
                            },
                            ...r
                        }),
                        B = o.useRef(null),
                        H = o.useRef(null);
                    o.useImperativeHandle(F, () => B.current);
                    let W = (0, u.u)(k),
                        [Z, G] = o.useState(!1),
                        [U, V] = o.useState(!1);
                    if (Z) throw Z;
                    if (U) throw U;
                    let Y = o.useRef(null);
                    (0, u.a)(() => {
                        let t = B.current;
                        N.width > 0 && N.height > 0 && t && (Y.current || (Y.current = (0, u.b)(t)), Y.current.configure({
                            gl: i,
                            events: c,
                            shadows: p,
                            linear: m,
                            flat: h,
                            legacy: b,
                            orthographic: g,
                            frameloop: E,
                            dpr: w,
                            performance: y,
                            raycaster: z,
                            camera: P,
                            scene: M,
                            size: N,
                            onPointerMissed: (...e) => null == W.current ? void 0 : W.current(...e),
                            onCreated: e => {
                                null == e.events.connect || e.events.connect(s ? (0, u.i)(s) ? s.current : s : H.current), f && e.setEvents({
                                    compute: (e, t) => {
                                        let r = e[f + "X"],
                                            n = e[f + "Y"];
                                        t.pointer.set(r / t.size.width * 2 - 1, -(n / t.size.height * 2) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                                    }
                                }), null == T || T(e)
                            }
                        }), Y.current.render(o.createElement(A, null, o.createElement(u.E, {
                            set: V
                        }, o.createElement(o.Suspense, {
                            fallback: o.createElement(u.B, {
                                set: G
                            })
                        }, e)))))
                    }), o.useEffect(() => {
                        let e = B.current;
                        if (e) return () => (0, u.d)(e)
                    }, []);
                    let X = s ? "none" : "auto";
                    return o.createElement("div", (0, l.Z)({
                        ref: H,
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: X,
                            ...n
                        }
                    }, D), o.createElement("div", {
                        ref: I,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }, o.createElement("canvas", {
                        ref: B,
                        style: {
                            display: "block"
                        }
                    }, t)))
                }),
                M = o.forwardRef(function (e, t) {
                    return o.createElement(x, null, o.createElement(P, (0, l.Z)({}, e, {
                        ref: t
                    })))
                });
            var k = r(2085),
                T = r(5014);

            function D() {
                let e = (0, u.A)(e => {
                        let {
                            gl: t
                        } = e;
                        return t
                    }),
                    t = (0, u.A)(e => {
                        let {
                            camera: t
                        } = e;
                        return t
                    }),
                    r = (0, u.A)(e => {
                        let {
                            scene: t
                        } = e;
                        return t
                    }),
                    {
                        active: n
                    } = (0, T.S)();
                (0, o.useEffect)(() => {
                    if (!n) return;
                    let l = [];
                    r.traverse(e => {
                        !1 === e.visible && (l.push(e), e.visible = !0)
                    }), e.compile(r, t);
                    let o = new a.WebGLCubeRenderTarget(128);
                    new a.CubeCamera(.01, 1e5, o).update(e, r), o.dispose(), l.forEach(e => e.visible = !1)
                }, [n, e, t, r])
            }
            var F = r(6131),
                A = r(1086),
                I = r(8098),
                N = r(2720);

            function B(e) {
                let {
                    render: t = !0
                } = e, {
                    advance: r
                } = (0, u.A)();
                (0, N.xQ)(e => {
                    t && r(e / 1e3)
                }, 1)
            }
            var H = r(5745),
                W = r.n(H);

            function Z(e) {
                let {
                    render: t = !0
                } = e, {
                    WebGLTunnel: r,
                    DOMTunnel: l
                } = (0, F.$)();
                return (0, n.jsxs)("div", {
                    className: W().webgl,
                    children: [(0, n.jsx)(M, {
                        gl: {
                            precision: "highp",
                            powerPreference: "high-performance",
                            antialias: !0,
                            alpha: !0
                        },
                        dpr: [1, 2],
                        orthographic: !0,
                        frameloop: "never",
                        linear: !0,
                        flat: !0,
                        eventSource: document.documentElement,
                        children: (0, n.jsxs)(o.Suspense, {
                            children: [(0, n.jsx)(s, {
                                makeDefault: !0,
                                position: [0, 0, 5e3],
                                near: .001,
                                far: 1e4,
                                zoom: 1
                            }), (0, n.jsx)(B, {
                                render: t
                            }), (0, n.jsx)(k.yR, {
                                id: "webgl",
                                children: (0, n.jsx)(I.eo, {
                                    children: (0, n.jsx)(A.DitheringProvider, {
                                        id: "dithering / media",
                                        children: (0, n.jsx)(r.Out, {})
                                    })
                                })
                            }), (0, n.jsx)(D, {})]
                        })
                    }), (0, n.jsx)(l.Out, {})]
                })
            }
        },
        5745: function (e) {
            e.exports = {
                webgl: "webgl_webgl__N9Zzf"
            }
        }
    }
]);