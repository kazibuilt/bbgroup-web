"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [128, 841], {
        3257: function (e, t, n) {
            let r;
            n.d(t, {
                CO: function () {
                    return l
                },
                Vn: function () {
                    return a
                }
            });
            var u = n(4352),
                o = n(959);

            function a() {
                let {
                    studio: e
                } = (0, u.eI)();
                return e
            }

            function l() {
                let [e, t] = (0, o.useState)(r), u = a();
                return (0, o.useEffect)(() => {
                    u && !r && Promise.all([n.e(757), n.e(872)]).then(n.t.bind(n, 6318, 23)).then(e => {
                        r = e.default, t(e.default)
                    })
                }, [u]), e
            }
        },
        3793: function (e, t, n) {
            n.d(t, {
                w: function () {
                    return a
                }
            });
            var r = n(959),
                u = n(2085),
                o = n(3257);

            function a(e, t, n) {
                let {
                    onValuesChange: a,
                    lazy: l = !0,
                    deps: i = []
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, c = function (e, t, n) {
                    let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                    return (0, r.useMemo)(() => {
                        if (e) return e.__objects = e.__objects || {}, e.__objects[t] && (e.detachObject(t), delete e.__objects[t]), e.__objects[t] = !0, null == e ? void 0 : e.object(t, n, {
                            reconfigure: !0
                        })
                    }, [e, t, ...u])
                }(e, t, n, i), s = (0, u.bV)(), [v, f] = (0, r.useState)({}), d = (0, r.useRef)({}), p = (0, r.useCallback)(() => d.current, []);
                (0, r.useEffect)(() => {
                    if (c) return c.onValuesChange(e => {
                        d.current = e, l || f(e), null == a || a(e)
                    }, s)
                }, [c, s, l, ...i]);
                let g = (0, o.CO)();
                return {
                    get: p,
                    values: v,
                    set: (0, r.useCallback)(e => {
                        g && g.transaction(t => {
                            let {
                                set: n
                            } = t;
                            n(c.props, {
                                ...c.value,
                                ...e
                            })
                        })
                    }, [g, c])
                }
            }
        },
        443: function (e, t, n) {
            n.r(t), n.d(t, {
                WebGLImage: function () {
                    return g
                }
            });
            var r = n(1527),
                u = n(2485),
                o = n(2720),
                a = n(3098),
                l = n(708),
                i = n(7702),
                c = n(959),
                s = n(7492),
                v = n(690),
                f = n(5060),
                d = n(1086),
                p = n(8098);

            function g(e) {
                let {
                    src: t,
                    rect: n,
                    naturalWidth: g,
                    naturalHeight: h,
                    onLoad: m,
                    parallax: y = 0
                } = e, x = (0, c.useRef)(), C = (0, u.A)(e => {
                    let {
                        gl: t
                    } = e;
                    return t
                }), b = (0, u.A)(e => {
                    let {
                        size: t
                    } = e;
                    return t
                }), S = (0, u.A)(e => {
                    let {
                        viewport: t
                    } = e;
                    return t
                }), [w] = (0, c.useState)(() => new v.V);
                (0, s.m)(t, e => {
                    e.minFilter = e.magFilter = f.LinearFilter, e.generateMipmaps = !1, e.colorSpace = C.outputColorSpace, w.map = e, w.needsUpdate = !0, m()
                });
                let A = (0, l.Hm)(),
                    {
                        height: M
                    } = (0, o.iP)();
                (0, a.LZ)(e => {
                    let {
                        scroll: t
                    } = e;
                    if (!n) return;
                    let r = null == A ? void 0 : A(),
                        u = n.width,
                        o = n.height;
                    x.current.scale.set(u * r.scale, o * r.scale, 1);
                    let a = -(b.width / 2 - u / 2) + n.left + r.x,
                        l = b.height / 2 - o / 2 - n.top + t - r.y - (r.scale - 1) * (.5 * o),
                        c = r.z;
                    x.current.position.set(a, l, c), x.current.updateMatrix();
                    let s = n.top - M,
                        v = n.top + n.height;
                    if (y) {
                        let e = (0, i.KK)(s, v, t, -1, 1);
                        e = .15 * (0, i.uZ)(-1, e, 1) * y, w.offset.set(0, e)
                    }
                }, [n, b, w, M, y]), (0, c.useEffect)(() => {
                    w.scale = 1 + .15 * Math.abs(y)
                }, [y]);
                let V = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "cover",
                        [o, a] = (0, c.useMemo)(() => {
                            let o;
                            if (!e || !t || !n || !r) return [1, 1];
                            let a = e / t,
                                l = n / r;
                            if ("contain" === u) o = a > l ? t * l : e;
                            else {
                                if ("cover" !== u) return [1, 1];
                                o = a > l ? e : t * l
                            }
                            let i = o / l;
                            return [e / o, t / i]
                        }, [e, t, r, n, u]);
                    return [1 / o, 1 / a]
                }(n.width, n.height, g, h, "cover");
                (0, c.useEffect)(() => {
                    w.aspect.set(V[0], V[1])
                }, [V, w]), (0, c.useEffect)(() => {
                    let e = S.dpr;
                    w.resolution.set(b.width * e, b.height * e)
                }, [w, b, S]);
                let {
                    texture: z,
                    size: D,
                    granularity: U,
                    color: T,
                    opacity: _
                } = (0, d.useDithering)();
                (0, c.useEffect)(() => {
                    w.uniforms.uDitheringTexture.value = z, w.uniforms.uDitheringTextureSize.value.copy(D)
                }, [z, D]), (0, c.useEffect)(() => {
                    w.uniforms.uGranularity.value = U;
                    let {
                        r: e,
                        g: t,
                        b: n
                    } = T;
                    w.uniforms.uColor.value.set(e, t, n), w.uniforms.uBlending.value = _
                }, [U, T, _]);
                let {
                    getTexture: O
                } = (0, p.kB)();
                return (0, u.C)(() => {
                    let e = O();
                    w.uniforms.uFlowmapTexture.value = e
                }, -1), (0, r.jsx)("mesh", {
                    ref: x,
                    matrixAutoUpdate: !1,
                    material: w,
                    children: (0, r.jsx)("planeGeometry", {})
                })
            }
        },
        7492: function (e, t, n) {
            n.d(t, {
                m: function () {
                    return l
                }
            });
            var r = n(2485),
                u = n(959),
                o = n(5060);
            let a = new o.TextureLoader;

            function l(e, t) {
                let n = (0, r.A)(e => {
                        let {
                            gl: t
                        } = e;
                        return t
                    }),
                    l = Array.isArray(e),
                    [i, c] = (0, u.useState)(l ? [] : void 0),
                    s = (0, u.useRef)([]);
                return (0, u.useLayoutEffect)(() => {
                    if (!e) return;
                    let r = [e].flat();
                    return r.forEach((e, u) => {
                        o.DefaultLoadingManager.itemStart(e), a.load(e, a => {
                            l ? (s.current[u] = a, s.current.filter(e => e.isTexture).length === r.length && (c(s.current), null == t || t(s.current))) : (c(a), null == t || t(a)), o.DefaultLoadingManager.itemEnd(e), n.initTexture(a)
                        })
                    }), () => {
                        s.current.map(e => {
                            e.dispose()
                        }), s.current = []
                    }
                }, [JSON.stringify(e)]), i
            }
        },
        690: function (e, t, n) {
            n.d(t, {
                V: function () {
                    return a
                }
            });
            var r = n(6057),
                u = n(5060);
            let o = "\n  ".concat("\n	vec3 blendNormal(vec3 base, vec3 blend) {\n		return blend;\n	}\n\n	vec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n		return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n	}", "\n  \n  uniform vec2 uResolution;\n  uniform sampler2D uMap;\n  uniform float uGranularity;\n  uniform vec3 uColor;\n  uniform float uBlending;\n  uniform vec3 uBackgroundColor;\n  uniform float uOpacity;\n  uniform vec2 uAspect;\n  uniform float uScale;\n  uniform vec2 uOffset;\n  \n\n  uniform sampler2D uDitheringTexture;\n  uniform vec2 uDitheringTextureSize;\n\n  uniform sampler2D uFlowmapTexture;\n\n  varying vec2 vUv;\n  varying vec2 vAspectCorrectedUV;\n  varying vec2 vMeshSize;\n\n\n  vec2 scaleUV(vec2 uv, float scale) {\n    // Convert uv range to -1 to 1\n    uv = uv * 2.0 - 1.0;\n    \n    // Scale uv\n    uv *= ((-scale + 1.) * 0.5 + 0.5) * 2.0;\n    \n    // Convert back to 0 to 1 range\n    uv = uv * 0.5 + 0.5;\n\n    return uv;\n  }\n\n\n    float indexValue(float granularity) {\n      vec2 coords = mod((vUv * vMeshSize) / granularity, uDitheringTextureSize) / uDitheringTextureSize;\n\n      return texture2D(uDitheringTexture, coords).r;\n    }\n\n\n    float dither(float value, float granularity) {\n        float threshold = indexValue(granularity);\n\n        return (value <= threshold) ? 0. : 1.;\n    }\n\n\n    float gammaCorrection(float value, float gamma) {\n        return pow(value, 1.0 / gamma);\n    }\n\n    float luminance(vec3 color) {\n        return (color.r + color.g + color.b) / 3.;\n    }\n\n  vec2 pixelation(vec2 uv, vec2 granularity, vec2 aspect) {\n    vec2 aspectCorrectedUV = (uv - 0.5) * 1. / aspect + 0.5;\n    vec2 aspectCorrectedGranularity = granularity * (1. / aspect);\n\n\n    vec2 textureSize = vMeshSize * aspect;\n    vec2 deltaSize = textureSize - vMeshSize;\n    vec2 borderSize = deltaSize / 2.;\n\n    vec2 offset = mod(borderSize, granularity);\n    offset /= granularity;\n\n\n    float x = aspectCorrectedGranularity.x / vMeshSize.x;\n    float y = aspectCorrectedGranularity.y / vMeshSize.y;\n    float w = 1.0 / x;\n    float z = 1.0 / y;\n\n    return vec2(x,y) * (floor((aspectCorrectedUV * vec2(w,z)) - offset) + 0.5);\n  }\n\n  void main() {\n     vec2 screenAspect = vec2(uResolution.y / uResolution.x, 1.);\n    vec4 flowmap = texture2D(uFlowmapTexture, pixelation(gl_FragCoord.xy / uResolution.xy, vec2(uGranularity * 15.) * screenAspect,vec2(1.,1.)));\n\n    flowmap.b = clamp(0., flowmap.b, 1.);\n\n    // TODO: to fix\n    float granularity = uGranularity + floor(flowmap.b);\n    vec2 granularityAspectRatio = granularity * (1./uAspect);\n    // vec2 granularityAspectRatio = vec2(granularity);\n\n    //TODO: to fix vAspectCorrectedUV doesn't match with dithering granularity\n    // vec2 pixelsUv = pixelation(vAspectCorrectedUV, granularityAspectRatio,uAspect);\n\n    vec2 uv = vUv;\n    uv = scaleUV(uv, uScale);\n    uv += uOffset;\n    vec2 pixelsUv = pixelation(uv, vec2(granularity), uAspect);\n    // pixelsUv = vAspectCorrectedUV;\n    \n    \n    vec3 rgb = texture2D(uMap, pixelsUv).rgb;\n    float grayscaled = luminance(rgb);\n    vec3 grayscaledColor = vec3(grayscaled);\n\n    float dithered = dither(grayscaled, granularity);\n    float invertedDithered = 1. - dithered;\n    vec3 ditheredColor = vec3(dithered);\n    // ditheredColor *= uBackgroundColor;\n\n    // vec3 color = blendNormal(grayscaledColor, ditheredColor + uColor, uBlending);\n    // vec3 color = blendNormal(uColor, ditheredColor + uColor, uBlending);\n    // vec3 color = blendNormal(grayscaledColor * uColor, ditheredColor + uColor, uBlending);\n    // color = blendNormal(uBackgroundColor, color, 1.-dithered);\n\n    vec3 color = invertedDithered * uColor + dithered * uBackgroundColor;\n\n    gl_FragColor = vec4(color, uOpacity);\n    \n  }\n");
            class a extends u.ShaderMaterial {
                set map(e) {
                    this.uniforms.uMap.value = e, this.needsUpdate = !0
                }
                set opacity(e) {
                    this.uniforms && (this.uniforms.uOpacity.value = parseFloat(e))
                }
                set scale(e) {
                    this.uniforms && (this.uniforms.uScale.value = parseFloat(e))
                }
                constructor() {
                    super({
                        uniforms: {
                            uMap: {
                                value: null
                            },
                            uAspect: {
                                value: new u.Vector2(1, 1)
                            },
                            uResolution: {
                                value: new u.Vector2(1, 1)
                            },
                            uGranularity: {
                                value: 2
                            },
                            uDitheringTexture: {
                                value: null
                            },
                            uDitheringTextureSize: {
                                value: new u.Vector2
                            },
                            uFlowmapTexture: {
                                value: null
                            },
                            uColor: {
                                value: new u.Color
                            },
                            uBlending: {
                                value: 1
                            },
                            uOpacity: {
                                value: 1
                            },
                            uBackgroundColor: {
                                value: new u.Color(r.colors.white)
                            },
                            uScale: {
                                value: 1
                            },
                            uOffset: {
                                value: new u.Vector2(0, 0)
                            }
                        },
                        vertexShader: "\n  uniform vec2 uAspect;\n  \n\n  varying vec2 vUv;\n  varying vec2 vAspectCorrectedUV;\n  varying vec2 vMeshSize;\n\n  void main() {\n    vUv = uv;\n\n    vAspectCorrectedUV = (uv - 0.5) * 1. / uAspect + 0.5;\n\n    vMeshSize = vec2(length(modelViewMatrix[0]), length(modelViewMatrix[1]));\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n",
                        fragmentShader: o,
                        transparent: !0
                    }), this.resolution = this.uniforms.uResolution.value, this.aspect = this.uniforms.uAspect.value, this.offset = this.uniforms.uOffset.value, this.type = "MediaMaterial"
                }
            }
        }
    }
]);