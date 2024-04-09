(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [888], {
      8925: function (e, t) {
         var r, n, i, o, a, s, l, u, c, f, d, h, p, g, m, v, y, _, b;
         r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, i = Math.PI / 180, o = Math.sin, a = Math.cos, s = Math.abs, l = Math.sqrt, u = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0
         }, d = function () {
            return c || "undefined" != typeof window && (c = window.gsap) && c.registerPlugin && c
         }, h = function () {
            (c = d()) ? (c.registerEase("_CE", b.create), f = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
         }, p = function (e) {
            return ~~(1e3 * e + (e < 0 ? -.5 : .5)) / 1e3
         }, g = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, m = /[cLlsSaAhHvVtTqQ]/g, v = function (e) {
            var t, r = e.length,
               n = 1e20;
            for (t = 1; t < r; t += 6) + e[t] < n && (n = +e[t]);
            return n
         }, y = function (e, t, r) {
            r || 0 === r || (r = Math.max(+e[e.length - 1], +e[1]));
            var n, i = -1 * +e[0],
               o = -r,
               a = e.length,
               s = 1 / (+e[a - 2] + i),
               l = -t || (Math.abs(+e[a - 1] - +e[1]) < .01 * (+e[a - 2] - +e[0]) ? v(e) + o : +e[a - 1] + o);
            for (n = 0, l = l ? 1 / l : -s; n < a; n += 2) e[n] = (+e[n] + i) * s, e[n + 1] = (+e[n + 1] + o) * l
         }, _ = function e(t, r, n, i, o, a, s, l, u, c, f) {
            var d, h = (t + n) / 2,
               p = (r + i) / 2,
               g = (n + o) / 2,
               m = (i + a) / 2,
               v = (o + s) / 2,
               y = (a + l) / 2,
               _ = (h + g) / 2,
               b = (p + m) / 2,
               w = (g + v) / 2,
               x = (m + y) / 2,
               S = (_ + w) / 2,
               T = (b + x) / 2,
               P = s - t,
               E = l - r,
               O = Math.abs((n - s) * E - (i - l) * P),
               k = Math.abs((o - s) * E - (a - l) * P);
            return c || (c = [{
               x: t,
               y: r
            }, {
               x: s,
               y: l
            }], f = 1), c.splice(f || c.length - 1, 0, {
               x: S,
               y: T
            }), (O + k) * (O + k) > u * (P * P + E * E) && (d = c.length, e(t, r, h, p, _, b, S, T, u, c, f), e(S, T, w, x, v, y, s, l, u, c, f + 1 + (c.length - d))), c
         }, b = function () {
            function e(e, t, r) {
               f || h(), this.id = e, this.setData(t, r)
            }
            var t = e.prototype;
            return t.setData = function (e, t) {
               t = t || {};
               var u, f, d, h, p, v, b, w, x, S = (e = e || "0,0,1,1").match(g),
                  T = 1,
                  P = [],
                  E = [],
                  O = t.precision || 1,
                  k = O <= 1;
               if (this.data = e, (m.test(e) || ~e.indexOf("M") && 0 > e.indexOf("C")) && (S = function (e) {
                     var t, u, c, f, d, h, p, g, m, v, y, _, b, w, x, S = (e + "").replace(n, function (e) {
                           var t = +e;
                           return t < 1e-4 && t > -.0001 ? 0 : t
                        }).match(r) || [],
                        T = [],
                        P = 0,
                        E = 0,
                        O = 2 / 3,
                        k = S.length,
                        C = 0,
                        j = "ERROR: malformed path: " + e,
                        A = function (e, t, r, n) {
                           v = (r - e) / 3, y = (n - t) / 3, p.push(e + v, t + y, r - v, n - y, r, n)
                        };
                     if (!e || !isNaN(S[0]) || isNaN(S[1])) return console.log(j), T;
                     for (t = 0; t < k; t++)
                        if (b = d, isNaN(S[t]) ? h = (d = S[t].toUpperCase()) !== S[t] : t--, c = +S[t + 1], f = +S[t + 2], h && (c += P, f += E), t || (g = c, m = f), "M" === d) p && (p.length < 8 ? T.length -= 1 : C += p.length), P = g = c, E = m = f, p = [c, f], T.push(p), t += 2, d = "L";
                        else if ("C" === d) p || (p = [0, 0]), h || (P = E = 0), p.push(c, f, P + 1 * S[t + 3], E + 1 * S[t + 4], P += 1 * S[t + 5], E += 1 * S[t + 6]), t += 6;
                     else if ("S" === d) v = P, y = E, ("C" === b || "S" === b) && (v += P - p[p.length - 4], y += E - p[p.length - 3]), h || (P = E = 0), p.push(v, y, c, f, P += 1 * S[t + 3], E += 1 * S[t + 4]), t += 4;
                     else if ("Q" === d) v = P + (c - P) * O, y = E + (f - E) * O, h || (P = E = 0), P += 1 * S[t + 3], E += 1 * S[t + 4], p.push(v, y, P + (c - P) * O, E + (f - E) * O, P, E), t += 4;
                     else if ("T" === d) v = P - p[p.length - 4], y = E - p[p.length - 3], p.push(P + v, E + y, c + (P + 1.5 * v - c) * O, f + (E + 1.5 * y - f) * O, P = c, E = f), t += 2;
                     else if ("H" === d) A(P, E, P = c, E), t += 1;
                     else if ("V" === d) A(P, E, P, E = c + (h ? E - P : 0)), t += 1;
                     else if ("L" === d || "Z" === d) "Z" === d && (c = g, f = m, p.closed = !0), ("L" === d || s(P - c) > .5 || s(E - f) > .5) && (A(P, E, c, f), "L" === d && (t += 2)), P = c, E = f;
                     else if ("A" === d) {
                        if (w = S[t + 4], x = S[t + 5], v = S[t + 6], y = S[t + 7], u = 7, w.length > 1 && (w.length < 3 ? (y = v, v = x, u--) : (y = x, v = w.substr(2), u -= 2), x = w.charAt(1), w = w.charAt(0)), _ = function (e, t, r, n, u, c, f, d, h) {
                              if (e !== d || t !== h) {
                                 r = s(r), n = s(n);
                                 var p = u % 360 * i,
                                    g = a(p),
                                    m = o(p),
                                    v = Math.PI,
                                    y = 2 * v,
                                    _ = (e - d) / 2,
                                    b = (t - h) / 2,
                                    w = g * _ + m * b,
                                    x = -m * _ + g * b,
                                    S = w * w,
                                    T = x * x,
                                    P = S / (r * r) + T / (n * n);
                                 P > 1 && (r = l(P) * r, n = l(P) * n);
                                 var E = r * r,
                                    O = n * n,
                                    k = (E * O - E * T - O * S) / (E * T + O * S);
                                 k < 0 && (k = 0);
                                 var C = (c === f ? -1 : 1) * l(k),
                                    j = r * x / n * C,
                                    A = -(n * w / r * C),
                                    M = (e + d) / 2 + (g * j - m * A),
                                    D = (t + h) / 2 + (m * j + g * A),
                                    R = (w - j) / r,
                                    I = (x - A) / n,
                                    z = (-w - j) / r,
                                    N = (-x - A) / n,
                                    L = R * R + I * I,
                                    F = (I < 0 ? -1 : 1) * Math.acos(R / l(L)),
                                    B = (R * N - I * z < 0 ? -1 : 1) * Math.acos((R * z + I * N) / l(L * (z * z + N * N)));
                                 isNaN(B) && (B = v), !f && B > 0 ? B -= y : f && B < 0 && (B += y), F %= y;
                                 var V, H = Math.ceil(s(B %= y) / (y / 4)),
                                    U = [],
                                    W = B / H,
                                    q = 4 / 3 * o(W / 2) / (1 + a(W / 2)),
                                    Y = g * r,
                                    X = m * r,
                                    $ = -(m * n),
                                    Z = g * n;
                                 for (V = 0; V < H; V++) w = a(u = F + V * W), x = o(u), R = a(u += W), I = o(u), U.push(w - q * x, x + q * w, R + q * I, I - q * R, R, I);
                                 for (V = 0; V < U.length; V += 2) w = U[V], x = U[V + 1], U[V] = w * Y + x * $ + M, U[V + 1] = w * X + x * Z + D;
                                 return U[V - 2] = d, U[V - 1] = h, U
                              }
                           }(P, E, +S[t + 1], +S[t + 2], +S[t + 3], +w, +x, (h ? P : 0) + 1 * v, (h ? E : 0) + 1 * y), t += u, _)
                           for (u = 0; u < _.length; u++) p.push(_[u]);
                        P = p[p.length - 2], E = p[p.length - 1]
                     } else console.log(j);
                     return (t = p.length) < 6 ? (T.pop(), t = 0) : p[0] === p[t - 2] && p[1] === p[t - 1] && (p.closed = !0), T.totalPoints = C + t, T
                  }(e)[0]), 4 === (u = S.length)) S.unshift(0, 0), S.push(1, 1), u = 8;
               else if ((u - 2) % 6) throw "Invalid CustomEase";
               for ((0 != +S[0] || 1 != +S[u - 2]) && y(S, t.height, t.originY), this.segment = S, h = 2; h < u; h += 6) f = {
                  x: +S[h - 2],
                  y: +S[h - 1]
               }, d = {
                  x: +S[h + 4],
                  y: +S[h + 5]
               }, P.push(f, d), _(f.x, f.y, +S[h], +S[h + 1], +S[h + 2], +S[h + 3], d.x, d.y, 1 / (2e5 * O), P, P.length - 1);
               for (h = 0, u = P.length; h < u; h++) b = P[h], w = P[h - 1] || b, (b.x > w.x || w.y !== b.y && w.x === b.x || b === w) && b.x <= 1 ? (w.cx = b.x - w.x, w.cy = b.y - w.y, w.n = b, w.nx = b.x, k && h > 1 && Math.abs(w.cy / w.cx - P[h - 2].cy / P[h - 2].cx) > 2 && (k = 0), w.cx < T && (w.cx ? T = w.cx : (w.cx = .001, h === u - 1 && (w.x -= .001, T = Math.min(T, .001), k = 0)))) : (P.splice(h--, 1), u--);
               if (p = 1 / (u = 1 / T + 1 | 0), v = 0, b = P[0], k) {
                  for (h = 0; h < u; h++) x = h * p, b.nx < x && (b = P[++v]), f = b.y + (x - b.x) / b.cx * b.cy, E[h] = {
                     x: x,
                     cx: p,
                     y: f,
                     cy: 0,
                     nx: 9
                  }, h && (E[h - 1].cy = f - E[h - 1].y);
                  E[u - 1].cy = P[P.length - 1].y - f
               } else {
                  for (h = 0; h < u; h++) b.nx < h * p && (b = P[++v]), E[h] = b;
                  v < P.length - 1 && (E[h - 1] = P[P.length - 2])
               }
               return this.ease = function (e) {
                  var t = E[e * u | 0] || E[u - 1];
                  return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy
               }, this.ease.custom = this, this.id && c && c.registerEase(this.id, this.ease), this
            }, t.getSVGData = function (t) {
               return e.getSVGData(this, t)
            }, e.create = function (t, r, n) {
               return new e(t, r, n).ease
            }, e.register = function (e) {
               c = e, h()
            }, e.get = function (e) {
               return c.parseEase(e)
            }, e.getSVGData = function (t, r) {
               var n, i, o, a, s, l, f, d, h, g, m = (r = r || {}).width || 100,
                  v = r.height || 100,
                  y = r.x || 0,
                  _ = (r.y || 0) + v,
                  b = c.utils.toArray(r.path)[0];
               if (r.invert && (v = -v, _ = 0), "string" == typeof t && (t = c.parseEase(t)), t.custom && (t = t.custom), t instanceof e) n = function (e) {
                  "number" == typeof e[0] && (e = [e]);
                  var t, r, n, i, o = "",
                     a = e.length;
                  for (r = 0; r < a; r++) {
                     for (o += "M" + u((i = e[r])[0]) + "," + u(i[1]) + " C", t = i.length, n = 2; n < t; n++) o += u(i[n++]) + "," + u(i[n++]) + " " + u(i[n++]) + "," + u(i[n++]) + " " + u(i[n++]) + "," + u(i[n]) + " ";
                     i.closed && (o += "z")
                  }
                  return o
               }(function (e, t, r, n, i, o, a) {
                  for (var s, l, u, c, f, d = e.length; --d > -1;)
                     for (u = 0, l = (s = e[d]).length; u < l; u += 2) c = s[u], f = s[u + 1], s[u] = c * t + 0 * f + o, s[u + 1] = 0 * c + f * i + a;
                  return e._dirty = 1, e
               }([t.segment], m, 0, 0, -v, y, _));
               else {
                  for (n = [y, _], a = 1 / (f = Math.max(5, 200 * (r.precision || 1))), f += 2, d = 5 / f, h = p(y + a * m), i = ((g = p(_ + -(t(a) * v))) - _) / (h - y), o = 2; o < f; o++) s = p(y + o * a * m), (Math.abs(((l = p(_ + -(t(o * a) * v))) - g) / (s - h) - i) > d || o === f - 1) && (n.push(h, g), i = (l - g) / (s - h)), h = s, g = l;
                  n = "M" + n.join(",")
               }
               return b && b.setAttribute("d", n), n
            }, e
         }(), d() && c.registerPlugin(b), b.version = "3.12.5", t.CustomEase = b, t.default = b, Object.defineProperty(t, "__esModule", {
            value: !0
         })
      },
      7420: function (e, t) {
         ! function (e) {
            "use strict";

            function t(e, t) {
               for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
               }
            }
            /*!
             * Observer 3.12.5
             * https://gsap.com
             *
             * @license Copyright 2008-2024, GreenSock. All rights reserved.
             * Subject to the terms at https://gsap.com/standard-license or for
             * Club GSAP members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var r, n, i, o, a, s, l, u, c, f, d, h, p, g = function () {
                  return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
               },
               m = 1,
               v = [],
               y = [],
               _ = [],
               b = Date.now,
               w = function (e, t) {
                  return t
               },
               x = function () {
                  var e = c.core,
                     t = e.bridge || {},
                     r = e._scrollers,
                     n = e._proxies;
                  r.push.apply(r, y), n.push.apply(n, _), y = r, _ = n, w = function (e, r) {
                     return t[e](r)
                  }
               },
               S = function (e, t) {
                  return ~_.indexOf(e) && _[_.indexOf(e) + 1][t]
               },
               T = function (e) {
                  return !!~f.indexOf(e)
               },
               P = function (e, t, r, n, i) {
                  return e.addEventListener(t, r, {
                     passive: !1 !== n,
                     capture: !!i
                  })
               },
               E = function (e, t, r, n) {
                  return e.removeEventListener(t, r, !!n)
               },
               O = "scrollLeft",
               k = "scrollTop",
               C = function () {
                  return d && d.isPressed || y.cache++
               },
               j = function (e, t) {
                  var r = function r(n) {
                     if (n || 0 === n) {
                        m && (i.history.scrollRestoration = "manual");
                        var o = d && d.isPressed;
                        e(n = r.v = Math.round(n) || (d && d.iOS ? 1 : 0)), r.cacheID = y.cache, o && w("ss", n)
                     } else(t || y.cache !== r.cacheID || w("ref")) && (r.cacheID = y.cache, r.v = e());
                     return r.v + r.offset
                  };
                  return r.offset = 0, e && r
               },
               A = {
                  s: O,
                  p: "left",
                  p2: "Left",
                  os: "right",
                  os2: "Right",
                  d: "width",
                  d2: "Width",
                  a: "x",
                  sc: j(function (e) {
                     return arguments.length ? i.scrollTo(e, M.sc()) : i.pageXOffset || o[O] || a[O] || s[O] || 0
                  })
               },
               M = {
                  s: k,
                  p: "top",
                  p2: "Top",
                  os: "bottom",
                  os2: "Bottom",
                  d: "height",
                  d2: "Height",
                  a: "y",
                  op: A,
                  sc: j(function (e) {
                     return arguments.length ? i.scrollTo(A.sc(), e) : i.pageYOffset || o[k] || a[k] || s[k] || 0
                  })
               },
               D = function (e, t) {
                  return (t && t._ctx && t._ctx.selector || r.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== r.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
               },
               R = function (e, t) {
                  var n = t.s,
                     i = t.sc;
                  T(e) && (e = o.scrollingElement || a);
                  var s = y.indexOf(e),
                     l = i === M.sc ? 1 : 2;
                  ~s || (s = y.push(e) - 1), y[s + l] || P(e, "scroll", C);
                  var u = y[s + l],
                     c = u || (y[s + l] = j(S(e, n), !0) || (T(e) ? i : j(function (t) {
                        return arguments.length ? e[n] = t : e[n]
                     })));
                  return c.target = e, u || (c.smooth = "smooth" === r.getProperty(e, "scrollBehavior")), c
               },
               I = function (e, t, r) {
                  var n = e,
                     i = e,
                     o = b(),
                     a = o,
                     s = t || 50,
                     l = Math.max(500, 3 * s),
                     u = function (e, t) {
                        var l = b();
                        t || l - o > s ? (i = n, n = e, a = o, o = l) : r ? n += e : n = i + (e - i) / (l - a) * (o - a)
                     };
                  return {
                     update: u,
                     reset: function () {
                        i = n = r ? 0 : n, a = o = 0
                     },
                     getVelocity: function (e) {
                        var t = a,
                           s = i,
                           c = b();
                        return (e || 0 === e) && e !== n && u(e), o === a || c - a > l ? 0 : (n + (r ? s : -s)) / ((r ? c : o) - t) * 1e3
                     }
                  }
               },
               z = function (e, t) {
                  return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
               },
               N = function (e) {
                  var t = Math.max.apply(Math, e),
                     r = Math.min.apply(Math, e);
                  return Math.abs(t) >= Math.abs(r) ? t : r
               },
               L = function () {
                  (c = r.core.globals().ScrollTrigger) && c.core && x()
               },
               F = function (e) {
                  return r = e || g(), !n && r && "undefined" != typeof document && document.body && (i = window, a = (o = document).documentElement, s = o.body, f = [i, o, a, s], r.utils.clamp, p = r.core.context || function () {}, u = "onpointerenter" in s ? "pointer" : "mouse", l = B.isTouch = i.matchMedia && i.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in i || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, h = B.eventTypes = ("ontouchstart" in a ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in a ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
                     return m = 0
                  }, 500), L(), n = 1), n
               };
            A.op = M, y.cache = 0;
            var B = function () {
               var e;

               function f(e) {
                  this.init(e)
               }
               return f.prototype.init = function (e) {
                  n || F(r) || console.warn("Please gsap.registerPlugin(Observer)"), c || L();
                  var t = e.tolerance,
                     f = e.dragMinimum,
                     g = e.type,
                     m = e.target,
                     y = e.lineHeight,
                     _ = e.debounce,
                     w = e.preventDefault,
                     x = e.onStop,
                     S = e.onStopDelay,
                     O = e.ignore,
                     k = e.wheelSpeed,
                     j = e.event,
                     B = e.onDragStart,
                     V = e.onDragEnd,
                     H = e.onDrag,
                     U = e.onPress,
                     W = e.onRelease,
                     q = e.onRight,
                     Y = e.onLeft,
                     X = e.onUp,
                     $ = e.onDown,
                     Z = e.onChangeX,
                     G = e.onChangeY,
                     K = e.onChange,
                     J = e.onToggleX,
                     Q = e.onToggleY,
                     ee = e.onHover,
                     et = e.onHoverEnd,
                     er = e.onMove,
                     en = e.ignoreCheck,
                     ei = e.isNormalizer,
                     eo = e.onGestureStart,
                     ea = e.onGestureEnd,
                     es = e.onWheel,
                     el = e.onEnable,
                     eu = e.onDisable,
                     ec = e.onClick,
                     ef = e.scrollSpeed,
                     ed = e.capture,
                     eh = e.allowClicks,
                     ep = e.lockAxis,
                     eg = e.onLockAxis;
                  this.target = m = D(m) || a, this.vars = e, O && (O = r.utils.toArray(O)), t = t || 1e-9, f = f || 0, k = k || 1, ef = ef || 1, g = g || "wheel,touch,pointer", _ = !1 !== _, y || (y = parseFloat(i.getComputedStyle(s).lineHeight) || 22);
                  var em, ev, ey, e_, eb, ew, ex, eS = this,
                     eT = 0,
                     eP = 0,
                     eE = e.passive || !w,
                     eO = R(m, A),
                     ek = R(m, M),
                     eC = eO(),
                     ej = ek(),
                     eA = ~g.indexOf("touch") && !~g.indexOf("pointer") && "pointerdown" === h[0],
                     eM = T(m),
                     eD = m.ownerDocument || o,
                     eR = [0, 0, 0],
                     eI = [0, 0, 0],
                     ez = 0,
                     eN = function () {
                        return ez = b()
                     },
                     eL = function (e, t) {
                        return (eS.event = e) && O && ~O.indexOf(e.target) || t && eA && "touch" !== e.pointerType || en && en(e, t)
                     },
                     eF = function () {
                        var e = eS.deltaX = N(eR),
                           r = eS.deltaY = N(eI),
                           n = Math.abs(e) >= t,
                           i = Math.abs(r) >= t;
                        K && (n || i) && K(eS, e, r, eR, eI), n && (q && eS.deltaX > 0 && q(eS), Y && eS.deltaX < 0 && Y(eS), Z && Z(eS), J && eS.deltaX < 0 != eT < 0 && J(eS), eT = eS.deltaX, eR[0] = eR[1] = eR[2] = 0), i && ($ && eS.deltaY > 0 && $(eS), X && eS.deltaY < 0 && X(eS), G && G(eS), Q && eS.deltaY < 0 != eP < 0 && Q(eS), eP = eS.deltaY, eI[0] = eI[1] = eI[2] = 0), (e_ || ey) && (er && er(eS), ey && (H(eS), ey = !1), e_ = !1), ew && (ew = !1, 1) && eg && eg(eS), eb && (es(eS), eb = !1), em = 0
                     },
                     eB = function (e, t, r) {
                        eR[r] += e, eI[r] += t, eS._vx.update(e), eS._vy.update(t), _ ? em || (em = requestAnimationFrame(eF)) : eF()
                     },
                     eV = function (e, t) {
                        ep && !ex && (eS.axis = ex = Math.abs(e) > Math.abs(t) ? "x" : "y", ew = !0), "y" !== ex && (eR[2] += e, eS._vx.update(e, !0)), "x" !== ex && (eI[2] += t, eS._vy.update(t, !0)), _ ? em || (em = requestAnimationFrame(eF)) : eF()
                     },
                     eH = function (e) {
                        if (!eL(e, 1)) {
                           var t = (e = z(e, w)).clientX,
                              r = e.clientY,
                              n = t - eS.x,
                              i = r - eS.y,
                              o = eS.isDragging;
                           eS.x = t, eS.y = r, (o || Math.abs(eS.startX - t) >= f || Math.abs(eS.startY - r) >= f) && (H && (ey = !0), o || (eS.isDragging = !0), eV(n, i), o || B && B(eS))
                        }
                     },
                     eU = eS.onPress = function (e) {
                        eL(e, 1) || e && e.button || (eS.axis = ex = null, ev.pause(), eS.isPressed = !0, e = z(e), eT = eP = 0, eS.startX = eS.x = e.clientX, eS.startY = eS.y = e.clientY, eS._vx.reset(), eS._vy.reset(), P(ei ? m : eD, h[1], eH, eE, !0), eS.deltaX = eS.deltaY = 0, U && U(eS))
                     },
                     eW = eS.onRelease = function (e) {
                        if (!eL(e, 1)) {
                           E(ei ? m : eD, h[1], eH, !0);
                           var t = !isNaN(eS.y - eS.startY),
                              n = eS.isDragging,
                              o = n && (Math.abs(eS.x - eS.startX) > 3 || Math.abs(eS.y - eS.startY) > 3),
                              a = z(e);
                           !o && t && (eS._vx.reset(), eS._vy.reset(), w && eh && r.delayedCall(.08, function () {
                              if (b() - ez > 300 && !e.defaultPrevented) {
                                 if (e.target.click) e.target.click();
                                 else if (eD.createEvent) {
                                    var t = eD.createEvent("MouseEvents");
                                    t.initMouseEvent("click", !0, !0, i, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                                 }
                              }
                           })), eS.isDragging = eS.isGesturing = eS.isPressed = !1, x && n && !ei && ev.restart(!0), V && n && V(eS), W && W(eS, o)
                        }
                     },
                     eq = function (e) {
                        return e.touches && e.touches.length > 1 && (eS.isGesturing = !0) && eo(e, eS.isDragging)
                     },
                     eY = function () {
                        return eS.isGesturing = !1, ea(eS)
                     },
                     eX = function (e) {
                        if (!eL(e)) {
                           var t = eO(),
                              r = ek();
                           eB((t - eC) * ef, (r - ej) * ef, 1), eC = t, ej = r, x && ev.restart(!0)
                        }
                     },
                     e$ = function (e) {
                        if (!eL(e)) {
                           e = z(e, w), es && (eb = !0);
                           var t = (1 === e.deltaMode ? y : 2 === e.deltaMode ? i.innerHeight : 1) * k;
                           eB(e.deltaX * t, e.deltaY * t, 0), x && !ei && ev.restart(!0)
                        }
                     },
                     eZ = function (e) {
                        if (!eL(e)) {
                           var t = e.clientX,
                              r = e.clientY,
                              n = t - eS.x,
                              i = r - eS.y;
                           eS.x = t, eS.y = r, e_ = !0, x && ev.restart(!0), (n || i) && eV(n, i)
                        }
                     },
                     eG = function (e) {
                        eS.event = e, ee(eS)
                     },
                     eK = function (e) {
                        eS.event = e, et(eS)
                     },
                     eJ = function (e) {
                        return eL(e) || z(e, w) && ec(eS)
                     };
                  ev = eS._dc = r.delayedCall(S || .25, function () {
                     eS._vx.reset(), eS._vy.reset(), ev.pause(), x && x(eS)
                  }).pause(), eS.deltaX = eS.deltaY = 0, eS._vx = I(0, 50, !0), eS._vy = I(0, 50, !0), eS.scrollX = eO, eS.scrollY = ek, eS.isDragging = eS.isGesturing = eS.isPressed = !1, p(this), eS.enable = function (e) {
                     return !eS.isEnabled && (P(eM ? eD : m, "scroll", C), g.indexOf("scroll") >= 0 && P(eM ? eD : m, "scroll", eX, eE, ed), g.indexOf("wheel") >= 0 && P(m, "wheel", e$, eE, ed), (g.indexOf("touch") >= 0 && l || g.indexOf("pointer") >= 0) && (P(m, h[0], eU, eE, ed), P(eD, h[2], eW), P(eD, h[3], eW), eh && P(m, "click", eN, !0, !0), ec && P(m, "click", eJ), eo && P(eD, "gesturestart", eq), ea && P(eD, "gestureend", eY), ee && P(m, u + "enter", eG), et && P(m, u + "leave", eK), er && P(m, u + "move", eZ)), eS.isEnabled = !0, e && e.type && eU(e), el && el(eS)), eS
                  }, eS.disable = function () {
                     eS.isEnabled && (v.filter(function (e) {
                        return e !== eS && T(e.target)
                     }).length || E(eM ? eD : m, "scroll", C), eS.isPressed && (eS._vx.reset(), eS._vy.reset(), E(ei ? m : eD, h[1], eH, !0)), E(eM ? eD : m, "scroll", eX, ed), E(m, "wheel", e$, ed), E(m, h[0], eU, ed), E(eD, h[2], eW), E(eD, h[3], eW), E(m, "click", eN, !0), E(m, "click", eJ), E(eD, "gesturestart", eq), E(eD, "gestureend", eY), E(m, u + "enter", eG), E(m, u + "leave", eK), E(m, u + "move", eZ), eS.isEnabled = eS.isPressed = eS.isDragging = !1, eu && eu(eS))
                  }, eS.kill = eS.revert = function () {
                     eS.disable();
                     var e = v.indexOf(eS);
                     e >= 0 && v.splice(e, 1), d === eS && (d = 0)
                  }, v.push(eS), ei && T(m) && (d = eS), eS.enable(j)
               }, t(f.prototype, [{
                  key: "velocityX",
                  get: function () {
                     return this._vx.getVelocity()
                  }
               }, {
                  key: "velocityY",
                  get: function () {
                     return this._vy.getVelocity()
                  }
               }]), e && t(f, e), f
            }();
            B.version = "3.12.5", B.create = function (e) {
               return new B(e)
            }, B.register = F, B.getAll = function () {
               return v.slice()
            }, B.getById = function (e) {
               return v.filter(function (t) {
                  return t.vars.id === e
               })[0]
            }, g() && r.registerPlugin(B);
            /*!
             * ScrollTrigger 3.12.5
             * https://gsap.com
             *
             * @license Copyright 2008-2024, GreenSock. All rights reserved.
             * Subject to the terms at https://gsap.com/standard-license or for
             * Club GSAP members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var V, H, U, W, q, Y, X, $, Z, G, K, J, Q, ee, et, er, en, ei, eo, ea, es, el, eu, ec, ef, ed, eh, ep, eg, em, ev, ey, e_, eb, ew, ex, eS, eT, eP = 1,
               eE = Date.now,
               eO = eE(),
               ek = 0,
               eC = 0,
               ej = function (e, t, r) {
                  var n = eW(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
                  return r["_" + t + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
               },
               eA = function (e, t) {
                  return t && (!eW(e) || "clamp(" !== e.substr(0, 6)) ? "clamp(" + e + ")" : e
               },
               eM = function () {
                  return ee = 1
               },
               eD = function () {
                  return ee = 0
               },
               eR = function (e) {
                  return e
               },
               eI = function (e) {
                  return Math.round(1e5 * e) / 1e5 || 0
               },
               ez = function () {
                  return "undefined" != typeof window
               },
               eN = function () {
                  return V || ez() && (V = window.gsap) && V.registerPlugin && V
               },
               eL = function (e) {
                  return !!~X.indexOf(e)
               },
               eF = function (e) {
                  return ("Height" === e ? ev : U["inner" + e]) || q["client" + e] || Y["client" + e]
               },
               eB = function (e) {
                  return S(e, "getBoundingClientRect") || (eL(e) ? function () {
                     return tY.width = U.innerWidth, tY.height = ev, tY
                  } : function () {
                     return tr(e)
                  })
               },
               eV = function (e, t, r) {
                  var n = r.d,
                     i = r.d2,
                     o = r.a;
                  return (o = S(e, "getBoundingClientRect")) ? function () {
                     return o()[n]
                  } : function () {
                     return (t ? eF(i) : e["client" + i]) || 0
                  }
               },
               eH = function (e, t) {
                  var r = t.s,
                     n = t.d2,
                     i = t.d,
                     o = t.a;
                  return Math.max(0, (o = S(e, r = "scroll" + n)) ? o() - eB(e)()[i] : eL(e) ? (q[r] || Y[r]) - eF(n) : e[r] - e["offset" + n])
               },
               eU = function (e, t) {
                  for (var r = 0; r < eo.length; r += 3)(!t || ~t.indexOf(eo[r + 1])) && e(eo[r], eo[r + 1], eo[r + 2])
               },
               eW = function (e) {
                  return "string" == typeof e
               },
               eq = function (e) {
                  return "function" == typeof e
               },
               eY = function (e) {
                  return "number" == typeof e
               },
               eX = function (e) {
                  return "object" == typeof e
               },
               e$ = function (e, t, r) {
                  return e && e.progress(t ? 0 : 1) && r && e.pause()
               },
               eZ = function (e, t) {
                  if (e.enabled) {
                     var r = e._ctx ? e._ctx.add(function () {
                        return t(e)
                     }) : t(e);
                     r && r.totalTime && (e.callbackAnimation = r)
                  }
               },
               eG = Math.abs,
               eK = "left",
               eJ = "right",
               eQ = "bottom",
               e0 = "width",
               e1 = "height",
               e2 = "Right",
               e5 = "Left",
               e3 = "Bottom",
               e8 = "padding",
               e9 = "margin",
               e6 = "Width",
               e4 = "Height",
               e7 = function (e) {
                  return U.getComputedStyle(e)
               },
               te = function (e) {
                  var t = e7(e).position;
                  e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
               },
               tt = function (e, t) {
                  for (var r in t) r in e || (e[r] = t[r]);
                  return e
               },
               tr = function (e, t) {
                  var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== e7(e)[et] && V.to(e, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0
                     }).progress(1),
                     n = e.getBoundingClientRect();
                  return r && r.progress(0).kill(), n
               },
               tn = function (e, t) {
                  var r = t.d2;
                  return e["offset" + r] || e["client" + r] || 0
               },
               ti = function (e) {
                  var t, r = [],
                     n = e.labels,
                     i = e.duration();
                  for (t in n) r.push(n[t] / i);
                  return r
               },
               to = function (e) {
                  var t = V.utils.snap(e),
                     r = Array.isArray(e) && e.slice(0).sort(function (e, t) {
                        return e - t
                     });
                  return r ? function (e, n, i) {
                     var o;
                     if (void 0 === i && (i = .001), !n) return t(e);
                     if (n > 0) {
                        for (e -= i, o = 0; o < r.length; o++)
                           if (r[o] >= e) return r[o];
                        return r[o - 1]
                     }
                     for (o = r.length, e += i; o--;)
                        if (r[o] <= e) return r[o];
                     return r[0]
                  } : function (r, n, i) {
                     void 0 === i && (i = .001);
                     var o = t(r);
                     return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : t(n < 0 ? r - e : r + e)
                  }
               },
               ta = function (e, t, r, n) {
                  return r.split(",").forEach(function (r) {
                     return e(t, r, n)
                  })
               },
               ts = function (e, t, r, n, i) {
                  return e.addEventListener(t, r, {
                     passive: !n,
                     capture: !!i
                  })
               },
               tl = function (e, t, r, n) {
                  return e.removeEventListener(t, r, !!n)
               },
               tu = function (e, t, r) {
                  (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
               },
               tc = {
                  startColor: "green",
                  endColor: "red",
                  indent: 0,
                  fontSize: "16px",
                  fontWeight: "normal"
               },
               tf = {
                  toggleActions: "play",
                  anticipatePin: 0
               },
               td = {
                  top: 0,
                  left: 0,
                  center: .5,
                  bottom: 1,
                  right: 1
               },
               th = function (e, t) {
                  if (eW(e)) {
                     var r = e.indexOf("="),
                        n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
                     ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in td ? td[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
                  }
                  return e
               },
               tp = function (e, t, r, n, i, o, a, s) {
                  var l = i.startColor,
                     u = i.endColor,
                     c = i.fontSize,
                     f = i.indent,
                     d = i.fontWeight,
                     h = W.createElement("div"),
                     p = eL(r) || "fixed" === S(r, "pinType"),
                     g = -1 !== e.indexOf("scroller"),
                     m = p ? Y : r,
                     v = -1 !== e.indexOf("start"),
                     y = v ? l : u,
                     _ = "border-color:" + y + ";font-size:" + c + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                  return _ += "position:" + ((g || s) && p ? "fixed;" : "absolute;"), (g || s || !p) && (_ += (n === M ? eJ : eQ) + ":" + (o + parseFloat(f)) + "px;"), a && (_ += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), h._isStart = v, h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), h.style.cssText = _, h.innerText = t || 0 === t ? e + "-" + t : e, m.children[0] ? m.insertBefore(h, m.children[0]) : m.appendChild(h), h._offset = h["offset" + n.op.d2], tg(h, 0, n, v), h
               },
               tg = function (e, t, r, n) {
                  var i = {
                        display: "block"
                     },
                     o = r[n ? "os2" : "p2"],
                     a = r[n ? "p2" : "os2"];
                  e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + e6] = 1, i["border" + a + e6] = 0, i[r.p] = t + "px", V.set(e, i)
               },
               tm = [],
               tv = {},
               ty = function () {
                  return eE() - ek > 34 && (ew || (ew = requestAnimationFrame(tN)))
               },
               t_ = function () {
                  eu && eu.isPressed && !(eu.startX > Y.clientWidth) || (y.cache++, eu ? ew || (ew = requestAnimationFrame(tN)) : tN(), ek || tP("scrollStart"), ek = eE())
               },
               tb = function () {
                  ed = U.innerWidth, ef = U.innerHeight
               },
               tw = function () {
                  y.cache++, !(!Q && !el && !W.fullscreenElement && !W.webkitFullscreenElement && (!ec || ed !== U.innerWidth || Math.abs(U.innerHeight - ef) > .25 * U.innerHeight)) || $.restart(!0)
               },
               tx = {},
               tS = [],
               tT = function e() {
                  return tl(tQ, "scrollEnd", e) || tR(!0)
               },
               tP = function (e) {
                  return tx[e] && tx[e].map(function (e) {
                     return e()
                  }) || tS
               },
               tE = [],
               tO = function (e) {
                  for (var t = 0; t < tE.length; t += 5)(!e || tE[t + 4] && tE[t + 4].query === e) && (tE[t].style.cssText = tE[t + 1], tE[t].getBBox && tE[t].setAttribute("transform", tE[t + 2] || ""), tE[t + 3].uncache = 1)
               },
               tk = function (e, t) {
                  var r;
                  for (er = 0; er < tm.length; er++)(r = tm[er]) && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
                  ey = !0, t && tO(t), t || tP("revert")
               },
               tC = function (e, t) {
                  y.cache++, (t || !ex) && y.forEach(function (e) {
                     return eq(e) && e.cacheID++ && (e.rec = 0)
                  }), eW(e) && (U.history.scrollRestoration = eg = e)
               },
               tj = 0,
               tA = function () {
                  if (eS !== tj) {
                     var e = eS = tj;
                     requestAnimationFrame(function () {
                        return e === tj && tR(!0)
                     })
                  }
               },
               tM = function () {
                  Y.appendChild(em), ev = !eu && em.offsetHeight || U.innerHeight, Y.removeChild(em)
               },
               tD = function (e) {
                  return Z(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (t) {
                     return t.style.display = e ? "none" : "block"
                  })
               },
               tR = function (e, t) {
                  if (ek && !e && !ey) {
                     ts(tQ, "scrollEnd", tT);
                     return
                  }
                  tM(), ex = tQ.isRefreshing = !0, y.forEach(function (e) {
                     return eq(e) && ++e.cacheID && (e.rec = e())
                  });
                  var r = tP("refreshInit");
                  ea && tQ.sort(), t || tk(), y.forEach(function (e) {
                     eq(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                  }), tm.slice(0).forEach(function (e) {
                     return e.refresh()
                  }), ey = !1, tm.forEach(function (e) {
                     if (e._subPinOffset && e.pin) {
                        var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                           r = e.pin[t];
                        e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
                     }
                  }), e_ = 1, tD(!0), tm.forEach(function (e) {
                     var t = eH(e.scroller, e._dir),
                        r = "max" === e.vars.end || e._endClamp && e.end > t,
                        n = e._startClamp && e.start >= t;
                     (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0)
                  }), tD(!1), e_ = 0, r.forEach(function (e) {
                     return e && e.render && e.render(-1)
                  }), y.forEach(function (e) {
                     eq(e) && (e.smooth && requestAnimationFrame(function () {
                        return e.target.style.scrollBehavior = "smooth"
                     }), e.rec && e(e.rec))
                  }), tC(eg, 1), $.pause(), tj++, ex = 2, tN(2), tm.forEach(function (e) {
                     return eq(e.vars.onRefresh) && e.vars.onRefresh(e)
                  }), ex = tQ.isRefreshing = !1, tP("refresh")
               },
               tI = 0,
               tz = 1,
               tN = function (e) {
                  if (2 === e || !ex && !ey) {
                     tQ.isUpdating = !0, eT && eT.update(0);
                     var t = tm.length,
                        r = eE(),
                        n = r - eO >= 50,
                        i = t && tm[0].scroll();
                     if (tz = tI > i ? -1 : 1, ex || (tI = i), n && (ek && !ee && r - ek > 200 && (ek = 0, tP("scrollEnd")), K = eO, eO = r), tz < 0) {
                        for (er = t; er-- > 0;) tm[er] && tm[er].update(0, n);
                        tz = 1
                     } else
                        for (er = 0; er < t; er++) tm[er] && tm[er].update(0, n);
                     tQ.isUpdating = !1
                  }
                  ew = 0
               },
               tL = [eK, "top", eQ, eJ, e9 + e3, e9 + e2, e9 + "Top", e9 + e5, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
               tF = tL.concat([e0, e1, "boxSizing", "max" + e6, "max" + e4, "position", e9, e8, e8 + "Top", e8 + e2, e8 + e3, e8 + e5]),
               tB = function (e, t, r) {
                  tU(r);
                  var n = e._gsap;
                  if (n.spacerIsNative) tU(n.spacerState);
                  else if (e._gsap.swappedIn) {
                     var i = t.parentNode;
                     i && (i.insertBefore(e, t), i.removeChild(t))
                  }
                  e._gsap.swappedIn = !1
               },
               tV = function (e, t, r, n) {
                  if (!e._gsap.swappedIn) {
                     for (var i, o = tL.length, a = t.style, s = e.style; o--;) a[i = tL[o]] = r[i];
                     a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[eQ] = s[eJ] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[e0] = tn(e, A) + "px", a[e1] = tn(e, M) + "px", a[e8] = s[e9] = s.top = s[eK] = "0", tU(n), s[e0] = s["max" + e6] = r[e0], s[e1] = s["max" + e4] = r[e1], s[e8] = r[e8], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
                  }
               },
               tH = /([A-Z])/g,
               tU = function (e) {
                  if (e) {
                     var t, r, n = e.t.style,
                        i = e.length,
                        o = 0;
                     for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(tH, "-$1").toLowerCase())
                  }
               },
               tW = function (e) {
                  for (var t = tF.length, r = e.style, n = [], i = 0; i < t; i++) n.push(tF[i], r[tF[i]]);
                  return n.t = e, n
               },
               tq = function (e, t, r) {
                  for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                  return i.t = e.t, i
               },
               tY = {
                  left: 0,
                  top: 0
               },
               tX = function (e, t, r, n, i, o, a, s, l, u, c, f, d, h) {
                  eq(e) && (e = e(s)), eW(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? th("0" + e.substr(3), r) : 0));
                  var p, g, m, v = d ? d.time() : 0;
                  if (d && d.seek(0), isNaN(e) || (e = +e), eY(e)) d && (e = V.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && tg(a, r, n, !0);
                  else {
                     eq(t) && (t = t(s));
                     var y, _, b, w, x = (e || "0").split(" ");
                     (y = tr(m = D(t, s) || Y) || {}).left || y.top || "none" !== e7(m).display || (w = m.style.display, m.style.display = "block", y = tr(m), w ? m.style.display = w : m.style.removeProperty("display")), _ = th(x[0], y[n.d]), b = th(x[1] || "0", r), e = y[n.p] - l[n.p] - u + _ + i - b, a && tg(a, b, n, r - b < 20 || a._isStart && b > 20), r -= r - b
                  }
                  if (h && (s[h] = e || -.001, e < 0 && (e = 0)), o) {
                     var S = e + r,
                        T = o._isStart;
                     p = "scroll" + n.d2, tg(o, S, n, T && S > 20 || !T && (c ? Math.max(Y[p], q[p]) : o.parentNode[p]) <= S + 1), c && (l = tr(a), c && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + "px"))
                  }
                  return d && m && (p = tr(m), d.seek(f), g = tr(m), d._caScrollDist = p[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(v), d ? e : Math.round(e)
               },
               t$ = /(webkit|moz|length|cssText|inset)/i,
               tZ = function (e, t, r, n) {
                  if (e.parentNode !== t) {
                     var i, o, a = e.style;
                     if (t === Y) {
                        for (i in e._stOrig = a.cssText, o = e7(e)) + i || t$.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                        a.top = r, a.left = n
                     } else a.cssText = e._stOrig;
                     V.core.getCache(e).uncache = 1, t.appendChild(e)
                  }
               },
               tG = function (e, t, r) {
                  var n = t,
                     i = n;
                  return function (t) {
                     var o = Math.round(e());
                     return o !== n && o !== i && Math.abs(o - n) > 3 && Math.abs(o - i) > 3 && (t = o, r && r()), i = n, n = t, t
                  }
               },
               tK = function (e, t, r) {
                  var n = {};
                  n[t.p] = "+=" + r, V.set(e, n)
               },
               tJ = function (e, t) {
                  var r = R(e, t),
                     n = "_scroll" + t.p2,
                     i = function t(i, o, a, s, l) {
                        var u = t.tween,
                           c = o.onComplete,
                           f = {};
                        a = a || r();
                        var d = tG(r, a, function () {
                           u.kill(), t.tween = 0
                        });
                        return l = s && l || 0, s = s || i - a, u && u.kill(), o[n] = i, o.inherit = !1, o.modifiers = f, f[n] = function () {
                           return d(a + s * u.ratio + l * u.ratio * u.ratio)
                        }, o.onUpdate = function () {
                           y.cache++, t.tween && tN()
                        }, o.onComplete = function () {
                           t.tween = 0, c && c.call(u)
                        }, u = t.tween = V.to(e, o)
                     };
                  return e[n] = r, r.wheelHandler = function () {
                     return i.tween && i.tween.kill() && (i.tween = 0)
                  }, ts(e, "wheel", r.wheelHandler), tQ.isTouch && ts(e, "touchmove", r.wheelHandler), i
               },
               tQ = function () {
                  function e(t, r) {
                     H || e.register(V) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ep(this), this.init(t, r)
                  }
                  return e.prototype.init = function (t, r) {
                     if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !eC) {
                        this.update = this.refresh = this.kill = eR;
                        return
                     }
                     var n, i, o, a, s, l, u, c, f, d, h, p, g, m, v, b, w, x, T, P, E, O, k, C, j, I, z, N, L, F, B, H, X, $, J, et, en, ei, eo, el, eu, ec = t = tt(eW(t) || eY(t) || t.nodeType ? {
                           trigger: t
                        } : t, tf),
                        ef = ec.onUpdate,
                        ed = ec.toggleClass,
                        eh = ec.id,
                        ep = ec.onToggle,
                        eg = ec.onRefresh,
                        em = ec.scrub,
                        ev = ec.trigger,
                        ey = ec.pin,
                        ew = ec.pinSpacing,
                        eS = ec.invalidateOnRefresh,
                        eO = ec.anticipatePin,
                        eM = ec.onScrubComplete,
                        eD = ec.onSnapComplete,
                        ez = ec.once,
                        eN = ec.snap,
                        eF = ec.pinReparent,
                        eU = ec.pinSpacer,
                        eK = ec.containerAnimation,
                        eJ = ec.fastScrollEnd,
                        eQ = ec.preventOverlaps,
                        ta = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? A : M,
                        tu = !em && 0 !== em,
                        td = D(t.scroller || U),
                        tg = V.core.getCache(td),
                        ty = eL(td),
                        tb = ("pinType" in t ? t.pinType : S(td, "pinType") || ty && "fixed") === "fixed",
                        tx = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                        tS = tu && t.toggleActions.split(" "),
                        tP = "markers" in t ? t.markers : tf.markers,
                        tE = ty ? 0 : parseFloat(e7(td)["border" + ta.p2 + e6]) || 0,
                        tO = this,
                        tk = t.onRefreshInit && function () {
                           return t.onRefreshInit(tO)
                        },
                        tC = eV(td, ty, ta),
                        tj = !ty || ~_.indexOf(td) ? eB(td) : function () {
                           return tY
                        },
                        tM = 0,
                        tD = 0,
                        tR = 0,
                        tI = R(td, ta);
                     if (tO._startClamp = tO._endClamp = !1, tO._dir = ta, eO *= 45, tO.scroller = td, tO.scroll = eK ? eK.time.bind(eK) : tI, l = tI(), tO.vars = t, r = r || t.animation, "refreshPriority" in t && (ea = 1, -9999 === t.refreshPriority && (eT = tO)), tg.tweenScroll = tg.tweenScroll || {
                           top: tJ(td, M),
                           left: tJ(td, A)
                        }, tO.tweenTo = o = tg.tweenScroll[ta.p], tO.scrubDuration = function (e) {
                           (J = eY(e) && e) ? $ ? $.duration(e) : $ = V.to(r, {
                              ease: "expo",
                              totalProgress: "+=0",
                              inherit: !1,
                              duration: J,
                              paused: !0,
                              onComplete: function () {
                                 return eM && eM(tO)
                              }
                           }): ($ && $.progress(1).kill(), $ = 0)
                        }, r && (r.vars.lazy = !1, r._initted && !tO.isReverted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.duration() && r.render(0, !0, !0), tO.animation = r.pause(), r.scrollTrigger = tO, tO.scrubDuration(em), H = 0, eh || (eh = r.vars.id)), eN && ((!eX(eN) || eN.push) && (eN = {
                           snapTo: eN
                        }), "scrollBehavior" in Y.style && V.set(ty ? [Y, q] : td, {
                           scrollBehavior: "auto"
                        }), y.forEach(function (e) {
                           return eq(e) && e.target === (ty ? W.scrollingElement || q : td) && (e.smooth = !1)
                        }), s = eq(eN.snapTo) ? eN.snapTo : "labels" === eN.snapTo ? (n = r, function (e) {
                           return V.utils.snap(ti(n), e)
                        }) : "labelsDirectional" === eN.snapTo ? (i = r, function (e, t) {
                           return to(ti(i))(e, t.direction)
                        }) : !1 !== eN.directional ? function (e, t) {
                           return to(eN.snapTo)(e, eE() - tD < 500 ? 0 : t.direction)
                        } : V.utils.snap(eN.snapTo), et = eX(et = eN.duration || {
                           min: .1,
                           max: 2
                        }) ? G(et.min, et.max) : G(et, et), en = V.delayedCall(eN.delay || J / 2 || .1, function () {
                           var e = tI(),
                              t = eE() - tD < 500,
                              n = o.tween;
                           if ((t || 10 > Math.abs(tO.getVelocity())) && !n && !ee && tM !== e) {
                              var i, a, l = (e - c) / b,
                                 u = r && !tu ? r.totalProgress() : l,
                                 d = t ? 0 : (u - X) / (eE() - K) * 1e3 || 0,
                                 h = V.utils.clamp(-l, 1 - l, eG(d / 2) * d / .185),
                                 p = l + (!1 === eN.inertia ? 0 : h),
                                 g = eN,
                                 m = g.onStart,
                                 v = g.onInterrupt,
                                 y = g.onComplete;
                              if (eY(i = s(p, tO)) || (i = p), a = Math.round(c + i * b), e <= f && e >= c && a !== e) {
                                 if (n && !n._initted && n.data <= eG(a - e)) return;
                                 !1 === eN.inertia && (h = i - l), o(a, {
                                    duration: et(eG(.185 * Math.max(eG(p - u), eG(i - u)) / d / .05 || 0)),
                                    ease: eN.ease || "power3",
                                    data: eG(a - e),
                                    onInterrupt: function () {
                                       return en.restart(!0) && v && v(tO)
                                    },
                                    onComplete: function () {
                                       tO.update(), tM = tI(), r && ($ ? $.resetTo("totalProgress", i, r._tTime / r._tDur) : r.progress(i)), H = X = r && !tu ? r.totalProgress() : tO.progress, eD && eD(tO), y && y(tO)
                                    }
                                 }, e, h * b, a - e - h * b), m && m(tO, o.tween)
                              }
                           } else tO.isActive && tM !== e && en.restart(!0)
                        }).pause()), eh && (tv[eh] = tO), (eu = (ev = tO.trigger = D(ev || !0 !== ey && ey)) && ev._gsap && ev._gsap.stRevert) && (eu = eu(tO)), ey = !0 === ey ? ev : D(ey), eW(ed) && (ed = {
                           targets: ev,
                           className: ed
                        }), ey && (!1 === ew || ew === e9 || (ew = (!!ew || !ey.parentNode || !ey.parentNode.style || "flex" !== e7(ey.parentNode).display) && e8), tO.pin = ey, (a = V.core.getCache(ey)).spacer ? w = a.pinState : (eU && ((eU = D(eU)) && !eU.nodeType && (eU = eU.current || eU.nativeElement), a.spacerIsNative = !!eU, eU && (a.spacerState = tW(eU))), a.spacer = P = eU || W.createElement("div"), P.classList.add("pin-spacer"), eh && P.classList.add("pin-spacer-" + eh), a.pinState = w = tW(ey)), !1 !== t.force3D && V.set(ey, {
                           force3D: !0
                        }), tO.spacer = P = a.spacer, I = (B = e7(ey))[ew + ta.os2], O = V.getProperty(ey), k = V.quickSetter(ey, ta.a, "px"), tV(ey, P, B), T = tW(ey)), tP) {
                        m = eX(tP) ? tt(tP, tc) : tc, p = tp("scroller-start", eh, td, ta, m, 0), g = tp("scroller-end", eh, td, ta, m, 0, p), E = p["offset" + ta.op.d2];
                        var tN = D(S(td, "content") || td);
                        d = this.markerStart = tp("start", eh, tN, ta, m, E, 0, eK), h = this.markerEnd = tp("end", eh, tN, ta, m, E, 0, eK), eK && (el = V.quickSetter([d, h], ta.a, "px")), tb || _.length && !0 === S(td, "fixedMarkers") || (te(ty ? Y : td), V.set([p, g], {
                           force3D: !0
                        }), N = V.quickSetter(p, ta.a, "px"), F = V.quickSetter(g, ta.a, "px"))
                     }
                     if (eK) {
                        var tL = eK.vars.onUpdate,
                           tF = eK.vars.onUpdateParams;
                        eK.eventCallback("onUpdate", function () {
                           tO.update(0, 0, 1), tL && tL.apply(eK, tF || [])
                        })
                     }
                     if (tO.previous = function () {
                           return tm[tm.indexOf(tO) - 1]
                        }, tO.next = function () {
                           return tm[tm.indexOf(tO) + 1]
                        }, tO.revert = function (e, t) {
                           if (!t) return tO.kill(!0);
                           var n = !1 !== e || !tO.enabled,
                              i = Q;
                           n !== tO.isReverted && (n && (ei = Math.max(tI(), tO.scroll.rec || 0), tR = tO.progress, eo = r && r.progress()), d && [d, h, p, g].forEach(function (e) {
                              return e.style.display = n ? "none" : "block"
                           }), n && (Q = tO, tO.update(n)), !ey || eF && tO.isActive || (n ? tB(ey, P, w) : tV(ey, P, e7(ey), z)), n || tO.update(n), Q = i, tO.isReverted = n)
                        }, tO.refresh = function (n, i, a, s) {
                           if (!Q && tO.enabled || i) {
                              if (ey && n && ek) {
                                 ts(e, "scrollEnd", tT);
                                 return
                              }!ex && tk && tk(tO), Q = tO, o.tween && !a && (o.tween.kill(), o.tween = 0), $ && $.pause(), eS && r && r.revert({
                                 kill: !1
                              }).invalidate(), tO.isReverted || tO.revert(!0, !0), tO._subPinOffset = !1;
                              var m, y, _, S, E, k, I, N, F, B, H, U, X, Z = tC(),
                                 G = tj(),
                                 K = eK ? eK.duration() : eH(td, ta),
                                 J = b <= .01,
                                 ee = 0,
                                 et = s || 0,
                                 er = eX(a) ? a.end : t.end,
                                 ea = t.endTrigger || ev,
                                 el = eX(a) ? a.start : t.start || (0 !== t.start && ev ? ey ? "0 0" : "0 100%" : 0),
                                 eu = tO.pinnedContainer = t.pinnedContainer && D(t.pinnedContainer, tO),
                                 ec = ev && Math.max(0, tm.indexOf(tO)) || 0,
                                 ef = ec;
                              for (tP && eX(a) && (U = V.getProperty(p, ta.p), X = V.getProperty(g, ta.p)); ef--;)(k = tm[ef]).end || k.refresh(0, 1) || (Q = tO), (I = k.pin) && (I === ev || I === ey || I === eu) && !k.isReverted && (B || (B = []), B.unshift(k), k.revert(!0, !0)), k !== tm[ef] && (ec--, ef--);
                              for (eq(el) && (el = el(tO)), c = tX(el = ej(el, "start", tO), ev, Z, ta, tI(), d, p, tO, G, tE, tb, K, eK, tO._startClamp && "_startClamp") || (ey ? -.001 : 0), eq(er) && (er = er(tO)), eW(er) && !er.indexOf("+=") && (~er.indexOf(" ") ? er = (eW(el) ? el.split(" ")[0] : "") + er : (ee = th(er.substr(2), Z), er = eW(el) ? el : (eK ? V.utils.mapRange(0, eK.duration(), eK.scrollTrigger.start, eK.scrollTrigger.end, c) : c) + ee, ea = ev)), er = ej(er, "end", tO), f = Math.max(c, tX(er || (ea ? "100% 0" : K), ea, Z, ta, tI() + ee, h, g, tO, G, tE, tb, K, eK, tO._endClamp && "_endClamp")) || -.001, ee = 0, ef = ec; ef--;)(I = (k = tm[ef]).pin) && k.start - k._pinPush <= c && !eK && k.end > 0 && (m = k.end - (tO._startClamp ? Math.max(0, k.start) : k.start), (I === ev && k.start - k._pinPush < c || I === eu) && isNaN(el) && (ee += m * (1 - k.progress)), I === ey && (et += m));
                              if (c += ee, f += ee, tO._startClamp && (tO._startClamp += ee), tO._endClamp && !ex && (tO._endClamp = f || -.001, f = Math.min(f, eH(td, ta))), b = f - c || (c -= .01) && .001, J && (tR = V.utils.clamp(0, 1, V.utils.normalize(c, f, ei))), tO._pinPush = et, d && ee && ((m = {})[ta.a] = "+=" + ee, eu && (m[ta.p] = "-=" + tI()), V.set([d, h], m)), ey && !(e_ && tO.end >= eH(td, ta))) m = e7(ey), S = ta === M, _ = tI(), C = parseFloat(O(ta.a)) + et, !K && f > 1 && (H = {
                                 style: H = (ty ? W.scrollingElement || q : td).style,
                                 value: H["overflow" + ta.a.toUpperCase()]
                              }, ty && "scroll" !== e7(Y)["overflow" + ta.a.toUpperCase()] && (H.style["overflow" + ta.a.toUpperCase()] = "scroll")), tV(ey, P, m), T = tW(ey), y = tr(ey, !0), N = tb && R(td, S ? A : M)(), ew ? ((z = [ew + ta.os2, b + et + "px"]).t = P, (ef = ew === e8 ? tn(ey, ta) + b + et : 0) && (z.push(ta.d, ef + "px"), "auto" !== P.style.flexBasis && (P.style.flexBasis = ef + "px")), tU(z), eu && tm.forEach(function (e) {
                                 e.pin === eu && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                              }), tb && tI(ei)) : (ef = tn(ey, ta)) && "auto" !== P.style.flexBasis && (P.style.flexBasis = ef + "px"), tb && ((E = {
                                 top: y.top + (S ? _ - c : N) + "px",
                                 left: y.left + (S ? N : _ - c) + "px",
                                 boxSizing: "border-box",
                                 position: "fixed"
                              })[e0] = E["max" + e6] = Math.ceil(y.width) + "px", E[e1] = E["max" + e4] = Math.ceil(y.height) + "px", E[e9] = E[e9 + "Top"] = E[e9 + e2] = E[e9 + e3] = E[e9 + e5] = "0", E[e8] = m[e8], E[e8 + "Top"] = m[e8 + "Top"], E[e8 + e2] = m[e8 + e2], E[e8 + e3] = m[e8 + e3], E[e8 + e5] = m[e8 + e5], x = tq(w, E, eF), ex && tI(0)), r ? (F = r._initted, es(1), r.render(r.duration(), !0, !0), j = O(ta.a) - C + b + et, L = Math.abs(b - j) > 1, tb && L && x.splice(x.length - 2, 2), r.render(0, !0, !0), F || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), es(0)) : j = b, H && (H.value ? H.style["overflow" + ta.a.toUpperCase()] = H.value : H.style.removeProperty("overflow-" + ta.a));
                              else if (ev && tI() && !eK)
                                 for (y = ev.parentNode; y && y !== Y;) y._pinOffset && (c -= y._pinOffset, f -= y._pinOffset), y = y.parentNode;
                              B && B.forEach(function (e) {
                                 return e.revert(!1, !0)
                              }), tO.start = c, tO.end = f, l = u = ex ? ei : tI(), eK || ex || (l < ei && tI(ei), tO.scroll.rec = 0), tO.revert(!1, !0), tD = eE(), en && (tM = -1, en.restart(!0)), Q = 0, r && tu && (r._initted || eo) && r.progress() !== eo && r.progress(eo || 0, !0).render(r.time(), !0, !0), (J || tR !== tO.progress || eK || eS) && (r && !tu && r.totalProgress(eK && c < -.001 && !tR ? V.utils.normalize(c, f, 0) : tR, !0), tO.progress = J || (l - c) / b === tR ? 0 : tR), ey && ew && (P._pinOffset = Math.round(tO.progress * j)), $ && $.invalidate(), isNaN(U) || (U -= V.getProperty(p, ta.p), X -= V.getProperty(g, ta.p), tK(p, ta, U), tK(d, ta, U - (s || 0)), tK(g, ta, X), tK(h, ta, X - (s || 0))), J && !ex && tO.update(), !eg || ex || v || (v = !0, eg(tO), v = !1)
                           }
                        }, tO.getVelocity = function () {
                           return (tI() - u) / (eE() - K) * 1e3 || 0
                        }, tO.endAnimation = function () {
                           e$(tO.callbackAnimation), r && ($ ? $.progress(1) : r.paused() ? tu || e$(r, tO.direction < 0, 1) : e$(r, r.reversed()))
                        }, tO.labelToScroll = function (e) {
                           return r && r.labels && (c || tO.refresh() || c) + r.labels[e] / r.duration() * b || 0
                        }, tO.getTrailing = function (e) {
                           var t = tm.indexOf(tO),
                              r = tO.direction > 0 ? tm.slice(0, t).reverse() : tm.slice(t + 1);
                           return (eW(e) ? r.filter(function (t) {
                              return t.vars.preventOverlaps === e
                           }) : r).filter(function (e) {
                              return tO.direction > 0 ? e.end <= c : e.start >= f
                           })
                        }, tO.update = function (e, t, n) {
                           if (!eK || n || e) {
                              var i, a, s, d, h, g, m, v = !0 === ex ? ei : tO.scroll(),
                                 y = e ? 0 : (v - c) / b,
                                 _ = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                                 w = tO.progress;
                              if (t && (u = l, l = eK ? tI() : v, eN && (X = H, H = r && !tu ? r.totalProgress() : _)), eO && ey && !Q && !eP && ek && (!_ && c < v + (v - u) / (eE() - K) * eO ? _ = 1e-4 : 1 === _ && f > v + (v - u) / (eE() - K) * eO && (_ = .9999)), _ !== w && tO.enabled) {
                                 if (d = (h = (i = tO.isActive = !!_ && _ < 1) != (!!w && w < 1)) || !!_ != !!w, tO.direction = _ > w ? 1 : -1, tO.progress = _, d && !Q && (a = _ && !w ? 0 : 1 === _ ? 1 : 1 === w ? 2 : 3, tu && (s = !h && "none" !== tS[a + 1] && tS[a + 1] || tS[a], m = r && ("complete" === s || "reset" === s || s in r))), eQ && (h || m) && (m || em || !r) && (eq(eQ) ? eQ(tO) : tO.getTrailing(eQ).forEach(function (e) {
                                       return e.endAnimation()
                                    })), !tu && (!$ || Q || eP ? r && r.totalProgress(_, !!(Q && (tD || e))) : ($._dp._time - $._start !== $._time && $.render($._dp._time - $._start), $.resetTo ? $.resetTo("totalProgress", _, r._tTime / r._tDur) : ($.vars.totalProgress = _, $.invalidate().restart()))), ey) {
                                    if (e && ew && (P.style[ew + ta.os2] = I), tb) {
                                       if (d) {
                                          if (g = !e && _ > w && f + 1 > v && v + 1 >= eH(td, ta), eF) {
                                             if (!e && (i || g)) {
                                                var S = tr(ey, !0),
                                                   E = v - c;
                                                tZ(ey, Y, S.top + (ta === M ? E : 0) + "px", S.left + (ta === M ? 0 : E) + "px")
                                             } else tZ(ey, P)
                                          }
                                          tU(i || g ? x : T), L && _ < 1 && i || k(C + (1 !== _ || g ? 0 : j))
                                       }
                                    } else k(eI(C + j * _))
                                 }!eN || o.tween || Q || eP || en.restart(!0), ed && (h || ez && _ && (_ < 1 || !eb)) && Z(ed.targets).forEach(function (e) {
                                    return e.classList[i || ez ? "add" : "remove"](ed.className)
                                 }), !ef || tu || e || ef(tO), d && !Q ? (tu && (m && ("complete" === s ? r.pause().totalProgress(1) : "reset" === s ? r.restart(!0).pause() : "restart" === s ? r.restart(!0) : r[s]()), ef && ef(tO)), (h || !eb) && (ep && h && eZ(tO, ep), tx[a] && eZ(tO, tx[a]), ez && (1 === _ ? tO.kill(!1, 1) : tx[a] = 0), !h && tx[a = 1 === _ ? 1 : 3] && eZ(tO, tx[a])), eJ && !i && Math.abs(tO.getVelocity()) > (eY(eJ) ? eJ : 2500) && (e$(tO.callbackAnimation), $ ? $.progress(1) : e$(r, "reverse" === s ? 1 : !_, 1))) : tu && ef && !Q && ef(tO)
                              }
                              if (F) {
                                 var O = eK ? v / eK.duration() * (eK._caScrollDist || 0) : v;
                                 N(O + (p._isFlipped ? 1 : 0)), F(O)
                              }
                              el && el(-v / eK.duration() * (eK._caScrollDist || 0))
                           }
                        }, tO.enable = function (t, r) {
                           tO.enabled || (tO.enabled = !0, ts(td, "resize", tw), ty || ts(td, "scroll", t_), tk && ts(e, "refreshInit", tk), !1 !== t && (tO.progress = tR = 0, l = u = tM = tI()), !1 !== r && tO.refresh())
                        }, tO.getTween = function (e) {
                           return e && o ? o.tween : $
                        }, tO.setPositions = function (e, t, r, n) {
                           if (eK) {
                              var i = eK.scrollTrigger,
                                 o = eK.duration(),
                                 a = i.end - i.start;
                              e = i.start + a * e / o, t = i.start + a * t / o
                           }
                           tO.refresh(!1, !1, {
                              start: eA(e, r && !!tO._startClamp),
                              end: eA(t, r && !!tO._endClamp)
                           }, n), tO.update()
                        }, tO.adjustPinSpacing = function (e) {
                           if (z && e) {
                              var t = z.indexOf(ta.d) + 1;
                              z[t] = parseFloat(z[t]) + e + "px", z[1] = parseFloat(z[1]) + e + "px", tU(z)
                           }
                        }, tO.disable = function (t, r) {
                           if (tO.enabled && (!1 !== t && tO.revert(!0, !0), tO.enabled = tO.isActive = !1, r || $ && $.pause(), ei = 0, a && (a.uncache = 1), tk && tl(e, "refreshInit", tk), en && (en.pause(), o.tween && o.tween.kill() && (o.tween = 0)), !ty)) {
                              for (var n = tm.length; n--;)
                                 if (tm[n].scroller === td && tm[n] !== tO) return;
                              tl(td, "resize", tw), ty || tl(td, "scroll", t_)
                           }
                        }, tO.kill = function (e, n) {
                           tO.disable(e, n), $ && !n && $.kill(), eh && delete tv[eh];
                           var i = tm.indexOf(tO);
                           i >= 0 && tm.splice(i, 1), i === er && tz > 0 && er--, i = 0, tm.forEach(function (e) {
                              return e.scroller === tO.scroller && (i = 1)
                           }), i || ex || (tO.scroll.rec = 0), r && (r.scrollTrigger = null, e && r.revert({
                              kill: !1
                           }), n || r.kill()), d && [d, h, p, g].forEach(function (e) {
                              return e.parentNode && e.parentNode.removeChild(e)
                           }), eT === tO && (eT = 0), ey && (a && (a.uncache = 1), i = 0, tm.forEach(function (e) {
                              return e.pin === ey && i++
                           }), i || (a.spacer = 0)), t.onKill && t.onKill(tO)
                        }, tm.push(tO), tO.enable(!1, !1), eu && eu(tO), r && r.add && !b) {
                        var tH = tO.update;
                        tO.update = function () {
                           tO.update = tH, c || f || tO.refresh()
                        }, V.delayedCall(.01, tO.update), b = .01, c = f = 0
                     } else tO.refresh();
                     ey && tA()
                  }, e.register = function (t) {
                     return H || (V = t || eN(), ez() && window.document && e.enable(), H = eC), H
                  }, e.defaults = function (e) {
                     if (e)
                        for (var t in e) tf[t] = e[t];
                     return tf
                  }, e.disable = function (e, t) {
                     eC = 0, tm.forEach(function (r) {
                        return r[t ? "kill" : "disable"](e)
                     }), tl(U, "wheel", t_), tl(W, "scroll", t_), clearInterval(J), tl(W, "touchcancel", eR), tl(Y, "touchstart", eR), ta(tl, W, "pointerdown,touchstart,mousedown", eM), ta(tl, W, "pointerup,touchend,mouseup", eD), $.kill(), eU(tl);
                     for (var r = 0; r < y.length; r += 3) tu(tl, y[r], y[r + 1]), tu(tl, y[r], y[r + 2])
                  }, e.enable = function () {
                     if (U = window, q = (W = document).documentElement, Y = W.body, V && (Z = V.utils.toArray, G = V.utils.clamp, ep = V.core.context || eR, es = V.core.suppressOverwrites || eR, eg = U.history.scrollRestoration || "auto", tI = U.pageYOffset, V.core.globals("ScrollTrigger", e), Y)) {
                        eC = 1, (em = document.createElement("div")).style.height = "100vh", em.style.position = "absolute", tM(),
                           function e() {
                              return eC && requestAnimationFrame(e)
                           }(), B.register(V), e.isTouch = B.isTouch, eh = B.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ec = 1 === B.isTouch, ts(U, "wheel", t_), X = [U, W, q, Y], V.matchMedia ? (e.matchMedia = function (e) {
                              var t, r = V.matchMedia();
                              for (t in e) r.add(t, e[t]);
                              return r
                           }, V.addEventListener("matchMediaInit", function () {
                              return tk()
                           }), V.addEventListener("matchMediaRevert", function () {
                              return tO()
                           }), V.addEventListener("matchMedia", function () {
                              tR(0, 1), tP("matchMedia")
                           }), V.matchMedia("(orientation: portrait)", function () {
                              return tb(), tb
                           })) : console.warn("Requires GSAP 3.11.0 or later"), tb(), ts(W, "scroll", t_);
                        var t, r, n = Y.style,
                           i = n.borderTopStyle,
                           o = V.core.Animation.prototype;
                        for (o.revert || Object.defineProperty(o, "revert", {
                              value: function () {
                                 return this.time(-.01, !0)
                              }
                           }), n.borderTopStyle = "solid", t = tr(Y), M.m = Math.round(t.top + M.sc()) || 0, A.m = Math.round(t.left + A.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), J = setInterval(ty, 250), V.delayedCall(.5, function () {
                              return eP = 0
                           }), ts(W, "touchcancel", eR), ts(Y, "touchstart", eR), ta(ts, W, "pointerdown,touchstart,mousedown", eM), ta(ts, W, "pointerup,touchend,mouseup", eD), et = V.utils.checkPrefix("transform"), tF.push(et), H = eE(), $ = V.delayedCall(.2, tR).pause(), eo = [W, "visibilitychange", function () {
                              var e = U.innerWidth,
                                 t = U.innerHeight;
                              W.hidden ? (en = e, ei = t) : (en !== e || ei !== t) && tw()
                           }, W, "DOMContentLoaded", tR, U, "load", tR, U, "resize", tw], eU(ts), tm.forEach(function (e) {
                              return e.enable(0, 1)
                           }), r = 0; r < y.length; r += 3) tu(tl, y[r], y[r + 1]), tu(tl, y[r], y[r + 2])
                     }
                  }, e.config = function (t) {
                     "limitCallbacks" in t && (eb = !!t.limitCallbacks);
                     var r = t.syncInterval;
                     r && clearInterval(J) || (J = r) && setInterval(ty, r), "ignoreMobileResize" in t && (ec = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (eU(tl) || eU(ts, t.autoRefreshEvents || "none"), el = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
                  }, e.scrollerProxy = function (e, t) {
                     var r = D(e),
                        n = y.indexOf(r),
                        i = eL(r);
                     ~n && y.splice(n, i ? 6 : 2), t && (i ? _.unshift(U, t, Y, t, q, t) : _.unshift(r, t))
                  }, e.clearMatchMedia = function (e) {
                     tm.forEach(function (t) {
                        return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
                     })
                  }, e.isInViewport = function (e, t, r) {
                     var n = (eW(e) ? D(e) : e).getBoundingClientRect(),
                        i = n[r ? e0 : e1] * t || 0;
                     return r ? n.right - i > 0 && n.left + i < U.innerWidth : n.bottom - i > 0 && n.top + i < U.innerHeight
                  }, e.positionInViewport = function (e, t, r) {
                     eW(e) && (e = D(e));
                     var n = e.getBoundingClientRect(),
                        i = n[r ? e0 : e1],
                        o = null == t ? i / 2 : t in td ? td[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
                     return r ? (n.left + o) / U.innerWidth : (n.top + o) / U.innerHeight
                  }, e.killAll = function (e) {
                     if (tm.slice(0).forEach(function (e) {
                           return "ScrollSmoother" !== e.vars.id && e.kill()
                        }), !0 !== e) {
                        var t = tx.killAll || [];
                        tx = {}, t.forEach(function (e) {
                           return e()
                        })
                     }
                  }, e
               }();
            tQ.version = "3.12.5", tQ.saveStyles = function (e) {
               return e ? Z(e).forEach(function (e) {
                  if (e && e.style) {
                     var t = tE.indexOf(e);
                     t >= 0 && tE.splice(t, 5), tE.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), V.core.getCache(e), ep())
                  }
               }) : tE
            }, tQ.revert = function (e, t) {
               return tk(!e, t)
            }, tQ.create = function (e, t) {
               return new tQ(e, t)
            }, tQ.refresh = function (e) {
               return e ? tw() : (H || tQ.register()) && tR(!0)
            }, tQ.update = function (e) {
               return ++y.cache && tN(!0 === e ? 2 : 0)
            }, tQ.clearScrollMemory = tC, tQ.maxScroll = function (e, t) {
               return eH(e, t ? A : M)
            }, tQ.getScrollFunc = function (e, t) {
               return R(D(e), t ? A : M)
            }, tQ.getById = function (e) {
               return tv[e]
            }, tQ.getAll = function () {
               return tm.filter(function (e) {
                  return "ScrollSmoother" !== e.vars.id
               })
            }, tQ.isScrolling = function () {
               return !!ek
            }, tQ.snapDirectional = to, tQ.addEventListener = function (e, t) {
               var r = tx[e] || (tx[e] = []);
               ~r.indexOf(t) || r.push(t)
            }, tQ.removeEventListener = function (e, t) {
               var r = tx[e],
                  n = r && r.indexOf(t);
               n >= 0 && r.splice(n, 1)
            }, tQ.batch = function (e, t) {
               var r, n = [],
                  i = {},
                  o = t.interval || .016,
                  a = t.batchMax || 1e9,
                  s = function (e, t) {
                     var r = [],
                        n = [],
                        i = V.delayedCall(o, function () {
                           t(r, n), r = [], n = []
                        }).pause();
                     return function (e) {
                        r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
                     }
                  };
               for (r in t) i[r] = "on" === r.substr(0, 2) && eq(t[r]) && "onRefreshInit" !== r ? s(r, t[r]) : t[r];
               return eq(a) && (a = a(), ts(tQ, "refresh", function () {
                  return a = t.batchMax()
               })), Z(e).forEach(function (e) {
                  var t = {};
                  for (r in i) t[r] = i[r];
                  t.trigger = e, n.push(tQ.create(t))
               }), n
            };
            var t0, t1 = function (e, t, r, n) {
                  return t > n ? e(n) : t < 0 && e(0), r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
               },
               t2 = function e(t, r) {
                  !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (B.isTouch ? " pinch-zoom" : "") : "none", t === q && e(Y, r)
               },
               t5 = {
                  auto: 1,
                  scroll: 1
               },
               t3 = function (e) {
                  var t, r = e.event,
                     n = e.target,
                     i = e.axis,
                     o = (r.changedTouches ? r.changedTouches[0] : r).target,
                     a = o._gsap || V.core.getCache(o),
                     s = eE();
                  if (!a._isScrollT || s - a._isScrollT > 2e3) {
                     for (; o && o !== Y && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(t5[(t = e7(o)).overflowY] || t5[t.overflowX]));) o = o.parentNode;
                     a._isScroll = o && o !== n && !eL(o) && (t5[(t = e7(o)).overflowY] || t5[t.overflowX]), a._isScrollT = s
                  }(a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
               },
               t8 = function (e, t, r, n) {
                  return B.create({
                     target: e,
                     capture: !0,
                     debounce: !1,
                     lockAxis: !0,
                     type: t,
                     onWheel: n = n && t3,
                     onPress: n,
                     onDrag: n,
                     onScroll: n,
                     onEnable: function () {
                        return r && ts(W, B.eventTypes[0], t6, !1, !0)
                     },
                     onDisable: function () {
                        return tl(W, B.eventTypes[0], t6, !0)
                     }
                  })
               },
               t9 = /(input|label|select|textarea)/i,
               t6 = function (e) {
                  var t = t9.test(e.target.tagName);
                  (t || t0) && (e._gsapAllow = !0, t0 = t)
               },
               t4 = function (e) {
                  eX(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
                  var t, r, n, i, o, a, s, l, u = e,
                     c = u.normalizeScrollX,
                     f = u.momentum,
                     d = u.allowNestedScroll,
                     h = u.onRelease,
                     p = D(e.target) || q,
                     g = V.core.globals().ScrollSmoother,
                     m = g && g.get(),
                     v = eh && (e.content && D(e.content) || m && !1 !== e.content && !m.smooth() && m.content()),
                     _ = R(p, M),
                     b = R(p, A),
                     w = 1,
                     x = (B.isTouch && U.visualViewport ? U.visualViewport.scale * U.visualViewport.width : U.outerWidth) / U.innerWidth,
                     S = 0,
                     T = eq(f) ? function () {
                        return f(t)
                     } : function () {
                        return f || 2.8
                     },
                     P = t8(p, e.type, !0, d),
                     E = function () {
                        return i = !1
                     },
                     O = eR,
                     k = eR,
                     C = function () {
                        r = eH(p, M), k = G(eh ? 1 : 0, r), c && (O = G(0, eH(p, A))), n = tj
                     },
                     j = function () {
                        v._gsap.y = eI(parseFloat(v._gsap.y) + _.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", _.offset = _.cacheID = 0
                     },
                     I = function () {
                        if (i) {
                           requestAnimationFrame(E);
                           var e = eI(t.deltaY / 2),
                              r = k(_.v - e);
                           if (v && r !== _.v + _.offset) {
                              _.offset = r - _.v;
                              var n = eI((parseFloat(v && v._gsap.y) || 0) - _.offset);
                              v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", v._gsap.y = n + "px", _.cacheID = y.cache, tN()
                           }
                           return !0
                        }
                        _.offset && j(), i = !0
                     },
                     z = function () {
                        C(), o.isActive() && o.vars.scrollY > r && (_() > r ? o.progress(1) && _(r) : o.resetTo("scrollY", r))
                     };
                  return v && V.set(v, {
                     y: "+=0"
                  }), e.ignoreCheck = function (e) {
                     return eh && "touchmove" === e.type && I() || w > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
                  }, e.onPress = function () {
                     i = !1;
                     var e = w;
                     w = eI((U.visualViewport && U.visualViewport.scale || 1) / x), o.pause(), e !== w && t2(p, w > 1.01 || !c && "x"), a = b(), s = _(), C(), n = tj
                  }, e.onRelease = e.onGestureStart = function (e, t) {
                     if (_.offset && j(), t) {
                        y.cache++;
                        var n, i, a = T();
                        c && (i = (n = b()) + -(.05 * a * e.velocityX) / .227, a *= t1(b, n, i, eH(p, A)), o.vars.scrollX = O(i)), i = (n = _()) + -(.05 * a * e.velocityY) / .227, a *= t1(_, n, i, eH(p, M)), o.vars.scrollY = k(i), o.invalidate().duration(a).play(.01), (eh && o.vars.scrollY >= r || n >= r - 1) && V.to({}, {
                           onUpdate: z,
                           duration: a
                        })
                     } else l.restart(!0);
                     h && h(e)
                  }, e.onWheel = function () {
                     o._ts && o.pause(), eE() - S > 1e3 && (n = 0, S = eE())
                  }, e.onChange = function (e, t, r, i, o) {
                     if (tj !== n && C(), t && c && b(O(i[2] === t ? a + (e.startX - e.x) : b() + t - i[1])), r) {
                        _.offset && j();
                        var l = o[2] === r,
                           u = l ? s + e.startY - e.y : _() + r - o[1],
                           f = k(u);
                        l && u !== f && (s += f - u), _(f)
                     }(r || t) && tN()
                  }, e.onEnable = function () {
                     t2(p, !c && "x"), tQ.addEventListener("refresh", z), ts(U, "resize", z), _.smooth && (_.target.style.scrollBehavior = "auto", _.smooth = b.smooth = !1), P.enable()
                  }, e.onDisable = function () {
                     t2(p, !0), tl(U, "resize", z), tQ.removeEventListener("refresh", z), P.kill()
                  }, e.lockAxis = !1 !== e.lockAxis, (t = new B(e)).iOS = eh, eh && !_() && _(1), eh && V.ticker.add(eR), l = t._dc, o = V.to(t, {
                     ease: "power4",
                     paused: !0,
                     inherit: !1,
                     scrollX: c ? "+=0.1" : "+=0",
                     scrollY: "+=0.1",
                     modifiers: {
                        scrollY: tG(_, _(), function () {
                           return o.pause()
                        })
                     },
                     onUpdate: tN,
                     onComplete: l.vars.onComplete
                  }), t
               };
            tQ.sort = function (e) {
               return tm.sort(e || function (e, t) {
                  return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
               })
            }, tQ.observe = function (e) {
               return new B(e)
            }, tQ.normalizeScroll = function (e) {
               if (void 0 === e) return eu;
               if (!0 === e && eu) return eu.enable();
               if (!1 === e) {
                  eu && eu.kill(), eu = e;
                  return
               }
               var t = e instanceof B ? e : t4(e);
               return eu && eu.target === t.target && eu.kill(), eL(t.target) && (eu = t), t
            }, tQ.core = {
               _getVelocityProp: I,
               _inputObserver: t8,
               _scrollers: y,
               _proxies: _,
               bridge: {
                  ss: function () {
                     ek || tP("scrollStart"), ek = eE()
                  },
                  ref: function () {
                     return Q
                  }
               }
            }, eN() && V.registerPlugin(tQ), e.ScrollTrigger = tQ, e.default = tQ, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
               value: !0
            }) : delete window.default
         }(t)
      },
      5199: function (e, t, r) {
         "use strict";

         function n(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
         }

         function i(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
         }
         r.d(t, {
            ZP: function () {
               return nI
            },
            p8: function () {
               return nI
            }
         });
         /*!
          * GSAP 3.12.5
          * https://gsap.com
          *
          * @license Copyright 2008-2024, GreenSock. All rights reserved.
          * Subject to the terms at https://gsap.com/standard-license or for
          * Club GSAP members, the agreement issued with that membership.
          * @author: Jack Doyle, jack@greensock.com
          */
         var o, a, s, l, u, c, f, d, h, p, g, m, v, y, _, b, w, x, S, T, P, E, O, k, C, j, A, M, D, R = {
               autoSleep: 120,
               force3D: "auto",
               nullTargetWarn: 1,
               units: {
                  lineHeight: ""
               }
            },
            I = {
               duration: .5,
               overwrite: !1,
               delay: 0
            },
            z = 2 * Math.PI,
            N = z / 4,
            L = 0,
            F = Math.sqrt,
            B = Math.cos,
            V = Math.sin,
            H = function (e) {
               return "string" == typeof e
            },
            U = function (e) {
               return "function" == typeof e
            },
            W = function (e) {
               return "number" == typeof e
            },
            q = function (e) {
               return void 0 === e
            },
            Y = function (e) {
               return "object" == typeof e
            },
            X = function (e) {
               return !1 !== e
            },
            $ = function () {
               return "undefined" != typeof window
            },
            Z = function (e) {
               return U(e) || H(e)
            },
            G = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
            K = Array.isArray,
            J = /(?:-?\.?\d|\.)+/gi,
            Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            ee = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            et = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            er = /[+-]=-?[.\d]+/,
            en = /[^,'"\[\]\s]+/gi,
            ei = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
            eo = {},
            ea = {},
            es = function (e) {
               return (ea = ez(e, eo)) && rk
            },
            el = function (e, t) {
               return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
            },
            eu = function (e, t) {
               return !t && console.warn(e)
            },
            ec = function (e, t) {
               return e && (eo[e] = t) && ea && (ea[e] = t) || eo
            },
            ef = function () {
               return 0
            },
            ed = {
               suppressEvents: !0,
               isStart: !0,
               kill: !1
            },
            eh = {
               suppressEvents: !0,
               kill: !1
            },
            ep = {
               suppressEvents: !0
            },
            eg = {},
            em = [],
            ev = {},
            ey = {},
            e_ = {},
            eb = 30,
            ew = [],
            ex = "",
            eS = function (e) {
               var t, r, n = e[0];
               if (Y(n) || U(n) || (e = [e]), !(t = (n._gsap || {}).harness)) {
                  for (r = ew.length; r-- && !ew[r].targetTest(n););
                  t = ew[r]
               }
               for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new tW(e[r], t))) || e.splice(r, 1);
               return e
            },
            eT = function (e) {
               return e._gsap || eS(ta(e))[0]._gsap
            },
            eP = function (e, t, r) {
               return (r = e[t]) && U(r) ? e[t]() : q(r) && e.getAttribute && e.getAttribute(t) || r
            },
            eE = function (e, t) {
               return (e = e.split(",")).forEach(t) || e
            },
            eO = function (e) {
               return Math.round(1e5 * e) / 1e5 || 0
            },
            ek = function (e) {
               return Math.round(1e7 * e) / 1e7 || 0
            },
            eC = function (e, t) {
               var r = t.charAt(0),
                  n = parseFloat(t.substr(2));
               return e = parseFloat(e), "+" === r ? e + n : "-" === r ? e - n : "*" === r ? e * n : e / n
            },
            ej = function (e, t) {
               for (var r = t.length, n = 0; 0 > e.indexOf(t[n]) && ++n < r;);
               return n < r
            },
            eA = function () {
               var e, t, r = em.length,
                  n = em.slice(0);
               for (e = 0, ev = {}, em.length = 0; e < r; e++)(t = n[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
            },
            eM = function (e, t, r, n) {
               em.length && !T && eA(), e.render(t, r, n || T && t < 0 && (e._initted || e._startAt)), em.length && !T && eA()
            },
            eD = function (e) {
               var t = parseFloat(e);
               return (t || 0 === t) && (e + "").match(en).length < 2 ? t : H(e) ? e.trim() : e
            },
            eR = function (e) {
               return e
            },
            eI = function (e, t) {
               for (var r in t) r in e || (e[r] = t[r]);
               return e
            },
            ez = function (e, t) {
               for (var r in t) e[r] = t[r];
               return e
            },
            eN = function e(t, r) {
               for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = Y(r[n]) ? e(t[n] || (t[n] = {}), r[n]) : r[n]);
               return t
            },
            eL = function (e, t) {
               var r, n = {};
               for (r in e) r in t || (n[r] = e[r]);
               return n
            },
            eF = function (e) {
               var t, r = e.parent || E,
                  n = e.keyframes ? (t = K(e.keyframes), function (e, r) {
                     for (var n in r) n in e || "duration" === n && t || "ease" === n || (e[n] = r[n])
                  }) : eI;
               if (X(e.inherit))
                  for (; r;) n(e, r.vars.defaults), r = r.parent || r._dp;
               return e
            },
            eB = function (e, t) {
               for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r];);
               return r < 0
            },
            eV = function (e, t, r, n, i) {
               void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
               var o, a = e[n];
               if (i)
                  for (o = t[i]; a && a[i] > o;) a = a._prev;
               return a ? (t._next = a._next, a._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = a, t.parent = t._dp = e, t
            },
            eH = function (e, t, r, n) {
               void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
               var i = t._prev,
                  o = t._next;
               i ? i._next = o : e[r] === t && (e[r] = o), o ? o._prev = i : e[n] === t && (e[n] = i), t._next = t._prev = t.parent = null
            },
            eU = function (e, t) {
               e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
            },
            eW = function (e, t) {
               if (e && (!t || t._end > e._dur || t._start < 0))
                  for (var r = e; r;) r._dirty = 1, r = r.parent;
               return e
            },
            eq = function (e) {
               for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
               return e
            },
            eY = function (e, t, r, n) {
               return e._startAt && (T ? e._startAt.revert(eh) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n))
            },
            eX = function (e) {
               return e._repeat ? e$(e._tTime, e = e.duration() + e._rDelay) * e : 0
            },
            e$ = function (e, t) {
               var r = Math.floor(e /= t);
               return e && r === e ? r - 1 : r
            },
            eZ = function (e, t) {
               return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
            },
            eG = function (e) {
               return e._end = ek(e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0))
            },
            eK = function (e, t) {
               var r = e._dp;
               return r && r.smoothChildTiming && e._ts && (e._start = ek(r._time - (e._ts > 0 ? t / e._ts : -(((e._dirty ? e.totalDuration() : e._tDur) - t) / e._ts))), eG(e), r._dirty || eW(r, e)), e
            },
            eJ = function (e, t) {
               var r;
               if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = eZ(e.rawTime(), t), (!t._dur || tr(0, t.totalDuration(), r) - t._tTime > 1e-8) && t.render(r, !0)), eW(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                  if (e._dur < e.duration())
                     for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                  e._zTime = -.00000001
               }
            },
            eQ = function (e, t, r, n) {
               return t.parent && eU(t), t._start = ek((W(r) ? r : r || e !== E ? e7(e, r, t) : e._time) + t._delay), t._end = ek(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), eV(e, t, "_first", "_last", e._sort ? "_start" : 0), e5(t) || (e._recent = t), n || eJ(e, t), e._ts < 0 && eK(e, e._tTime), e
            },
            e0 = function (e, t) {
               return (eo.ScrollTrigger || el("scrollTrigger", t)) && eo.ScrollTrigger.create(t, e)
            },
            e1 = function (e, t, r, n, i) {
               return (t5(e, t, i), e._initted) ? !r && e._pt && !T && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && A !== tC.frame ? (em.push(e), e._lazy = [i, n], 1) : void 0 : 1
            },
            e2 = function e(t) {
               var r = t.parent;
               return r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || e(r))
            },
            e5 = function (e) {
               var t = e.data;
               return "isFromStart" === t || "isStart" === t
            },
            e3 = function (e, t, r, n) {
               var i, o, a, s = e.ratio,
                  l = t < 0 || !t && (!e._start && e2(e) && !(!e._initted && e5(e)) || (e._ts < 0 || e._dp._ts < 0) && !e5(e)) ? 0 : 1,
                  u = e._rDelay,
                  c = 0;
               if (u && e._repeat && (o = e$(c = tr(0, e._tDur, t), u), e._yoyo && 1 & o && (l = 1 - l), o !== e$(e._tTime, u) && (s = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== s || T || n || 1e-8 === e._zTime || !t && e._zTime) {
                  if (!e._initted && e1(e, t, n, r, c)) return;
                  for (a = e._zTime, e._zTime = t || (r ? 1e-8 : 0), r || (r = t && !a), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = c, i = e._pt; i;) i.r(l, i.d), i = i._next;
                  t < 0 && eY(e, t, r, !0), e._onUpdate && !r && tv(e, "onUpdate"), c && e._repeat && !r && e.parent && tv(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && eU(e, 1), r || T || (tv(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
               } else e._zTime || (e._zTime = t)
            },
            e8 = function (e, t, r) {
               var n;
               if (r > t)
                  for (n = e._first; n && n._start <= r;) {
                     if ("isPause" === n.data && n._start > t) return n;
                     n = n._next
                  } else
                     for (n = e._last; n && n._start >= r;) {
                        if ("isPause" === n.data && n._start < t) return n;
                        n = n._prev
                     }
            },
            e9 = function (e, t, r, n) {
               var i = e._repeat,
                  o = ek(t) || 0,
                  a = e._tTime / e._tDur;
               return a && !n && (e._time *= o / e._dur), e._dur = o, e._tDur = i ? i < 0 ? 1e10 : ek(o * (i + 1) + e._rDelay * i) : o, a > 0 && !n && eK(e, e._tTime = e._tDur * a), e.parent && eG(e), r || eW(e.parent, e), e
            },
            e6 = function (e) {
               return e instanceof tY ? eW(e) : e9(e, e._dur)
            },
            e4 = {
               _start: 0,
               endTime: ef,
               totalDuration: ef
            },
            e7 = function e(t, r, n) {
               var i, o, a, s = t.labels,
                  l = t._recent || e4,
                  u = t.duration() >= 1e8 ? l.endTime(!1) : t._dur;
               return H(r) && (isNaN(r) || r in s) ? (o = r.charAt(0), a = "%" === r.substr(-1), i = r.indexOf("="), "<" === o || ">" === o) ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (i < 0 ? l : n).totalDuration() / 100 : 1)) : i < 0 ? (r in s || (s[r] = u), s[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), a && n && (o = o / 100 * (K(n) ? n[0] : n).totalDuration()), i > 1 ? e(t, r.substr(0, i - 1), n) + o : u + o) : null == r ? u : +r
            },
            te = function (e, t, r) {
               var n, i, o = W(t[1]),
                  a = (o ? 2 : 1) + (e < 2 ? 0 : 1),
                  s = t[a];
               if (o && (s.duration = t[1]), s.parent = r, e) {
                  for (n = s, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = X(i.vars.inherit) && i.parent;
                  s.immediateRender = X(n.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[a - 1]
               }
               return new re(t[0], s, t[a + 1])
            },
            tt = function (e, t) {
               return e || 0 === e ? t(e) : t
            },
            tr = function (e, t, r) {
               return r < e ? e : r > t ? t : r
            },
            tn = function (e, t) {
               return H(e) && (t = ei.exec(e)) ? t[1] : ""
            },
            ti = [].slice,
            to = function (e, t) {
               return e && Y(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Y(e[0])) && !e.nodeType && e !== O
            },
            ta = function (e, t, r) {
               var n;
               return P && !t && P.selector ? P.selector(e) : H(e) && !r && (k || !tj()) ? ti.call((t || C).querySelectorAll(e), 0) : K(e) ? (void 0 === n && (n = []), e.forEach(function (e) {
                  var t;
                  return H(e) && !r || to(e, 1) ? (t = n).push.apply(t, ta(e)) : n.push(e)
               }) || n) : to(e) ? ti.call(e, 0) : e ? [e] : []
            },
            ts = function (e) {
               return e = ta(e)[0] || eu("Invalid scope") || {},
                  function (t) {
                     var r = e.current || e.nativeElement || e;
                     return ta(t, r.querySelectorAll ? r : r === e ? eu("Invalid scope") || C.createElement("div") : e)
                  }
            },
            tl = function (e) {
               return e.sort(function () {
                  return .5 - Math.random()
               })
            },
            tu = function (e) {
               if (U(e)) return e;
               var t = Y(e) ? e : {
                     each: e
                  },
                  r = tF(t.ease),
                  n = t.from || 0,
                  i = parseFloat(t.base) || 0,
                  o = {},
                  a = n > 0 && n < 1,
                  s = isNaN(n) || a,
                  l = t.axis,
                  u = n,
                  c = n;
               return H(n) ? u = c = ({
                     center: .5,
                     edges: .5,
                     end: 1
                  })[n] || 0 : !a && s && (u = n[0], c = n[1]),
                  function (e, a, f) {
                     var d, h, p, g, m, v, y, _, b, w = (f || t).length,
                        x = o[w];
                     if (!x) {
                        if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, 1e8])[1])) {
                           for (y = -1e8; y < (y = f[b++].getBoundingClientRect().left) && b < w;);
                           b < w && b--
                        }
                        for (v = 0, x = o[w] = [], d = s ? Math.min(b, w) * u - .5 : n % b, h = 1e8 === b ? 0 : s ? w * c / b - .5 : n / b | 0, y = 0, _ = 1e8; v < w; v++) p = v % b - d, g = h - (v / b | 0), x[v] = m = l ? Math.abs("y" === l ? g : p) : F(p * p + g * g), m > y && (y = m), m < _ && (_ = m);
                        "random" === n && tl(x), x.max = y - _, x.min = _, x.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (b > w ? w - 1 : l ? "y" === l ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === n ? -1 : 1), x.b = w < 0 ? i - w : i, x.u = tn(t.amount || t.each) || 0, r = r && w < 0 ? tN(r) : r
                     }
                     return w = (x[e] - x.min) / x.max || 0, ek(x.b + (r ? r(w) : w) * x.v) + x.u
                  }
            },
            tc = function (e) {
               var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
               return function (r) {
                  var n = ek(Math.round(parseFloat(r) / e) * e * t);
                  return (n - n % 1) / t + (W(r) ? 0 : tn(r))
               }
            },
            tf = function (e, t) {
               var r, n, i = K(e);
               return !i && Y(e) && (r = i = e.radius || 1e8, e.values ? (n = !W((e = ta(e.values))[0])) && (r *= r) : e = tc(e.increment)), tt(t, i ? U(e) ? function (t) {
                  return Math.abs((n = e(t)) - t) <= r ? n : t
               } : function (t) {
                  for (var i, o, a = parseFloat(n ? t.x : t), s = parseFloat(n ? t.y : 0), l = 1e8, u = 0, c = e.length; c--;)(i = n ? (i = e[c].x - a) * i + (o = e[c].y - s) * o : Math.abs(e[c] - a)) < l && (l = i, u = c);
                  return u = !r || l <= r ? e[u] : t, n || u === t || W(t) ? u : u + tn(t)
               } : tc(e))
            },
            td = function (e, t, r, n) {
               return tt(K(e) ? !t : !0 === r ? (r = 0, !1) : !n, function () {
                  return K(e) ? e[~~(Math.random() * e.length)] : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + .99 * r)) / r) * r * n) / n
               })
            },
            th = function (e, t, r) {
               return tt(r, function (r) {
                  return e[~~t(r)]
               })
            },
            tp = function (e) {
               for (var t, r, n, i, o = 0, a = ""; ~(t = e.indexOf("random(", o));) n = e.indexOf(")", t), i = "[" === e.charAt(t + 7), r = e.substr(t + 7, n - t - 7).match(i ? en : J), a += e.substr(o, t - o) + td(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), o = n + 1;
               return a + e.substr(o, e.length - o)
            },
            tg = function (e, t, r, n, i) {
               var o = t - e,
                  a = n - r;
               return tt(i, function (t) {
                  return r + ((t - e) / o * a || 0)
               })
            },
            tm = function (e, t, r) {
               var n, i, o, a = e.labels,
                  s = 1e8;
               for (n in a)(i = a[n] - t) < 0 == !!r && i && s > (i = Math.abs(i)) && (o = n, s = i);
               return o
            },
            tv = function (e, t, r) {
               var n, i, o, a = e.vars,
                  s = a[t],
                  l = P,
                  u = e._ctx;
               if (s) return n = a[t + "Params"], i = a.callbackScope || e, r && em.length && eA(), u && (P = u), o = n ? s.apply(i, n) : s.call(i), P = l, o
            },
            ty = function (e) {
               return eU(e), e.scrollTrigger && e.scrollTrigger.kill(!!T), 1 > e.progress() && tv(e, "onInterrupt"), e
            },
            t_ = [],
            tb = function (e) {
               if (e) {
                  if (e = !e.name && e.default || e, $() || e.headless) {
                     var t = e.name,
                        r = U(e),
                        n = t && !r && e.init ? function () {
                           this._props = []
                        } : e,
                        i = {
                           init: ef,
                           render: ru,
                           add: t0,
                           kill: rf,
                           modifier: rc,
                           rawVars: 0
                        },
                        o = {
                           targetTest: 0,
                           get: 0,
                           getSetter: ro,
                           aliases: {},
                           register: 0
                        };
                     if (tj(), e !== n) {
                        if (ey[t]) return;
                        eI(n, eI(eL(e, i), o)), ez(n.prototype, ez(i, eL(e, o))), ey[n.prop = t] = n, e.targetTest && (ew.push(n), eg[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                     }
                     ec(t, n), e.register && e.register(rk, n, rp)
                  } else t_.push(e)
               }
            },
            tw = {
               aqua: [0, 255, 255],
               lime: [0, 255, 0],
               silver: [192, 192, 192],
               black: [0, 0, 0],
               maroon: [128, 0, 0],
               teal: [0, 128, 128],
               blue: [0, 0, 255],
               navy: [0, 0, 128],
               white: [255, 255, 255],
               olive: [128, 128, 0],
               yellow: [255, 255, 0],
               orange: [255, 165, 0],
               gray: [128, 128, 128],
               purple: [128, 0, 128],
               green: [0, 128, 0],
               red: [255, 0, 0],
               pink: [255, 192, 203],
               cyan: [0, 255, 255],
               transparent: [255, 255, 255, 0]
            },
            tx = function (e, t, r) {
               return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * 255 + .5 | 0
            },
            tS = function (e, t, r) {
               var n, i, o, a, s, l, u, c, f, d, h = e ? W(e) ? [e >> 16, e >> 8 & 255, 255 & e] : 0 : tw.black;
               if (!h) {
                  if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), tw[e]) h = tw[e];
                  else if ("#" === e.charAt(0)) {
                     if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (i = e.charAt(2)) + i + (o = e.charAt(3)) + o + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(h = parseInt(e.substr(1, 6), 16)) >> 16, h >> 8 & 255, 255 & h, parseInt(e.substr(7), 16) / 255];
                     h = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e]
                  } else if ("hsl" === e.substr(0, 3)) {
                     if (h = d = e.match(J), t) {
                        if (~e.indexOf("=")) return h = e.match(Q), r && h.length < 4 && (h[3] = 1), h
                     } else a = +h[0] % 360 / 360, s = +h[1] / 100, i = (l = +h[2] / 100) <= .5 ? l * (s + 1) : l + s - l * s, n = 2 * l - i, h.length > 3 && (h[3] *= 1), h[0] = tx(a + 1 / 3, n, i), h[1] = tx(a, n, i), h[2] = tx(a - 1 / 3, n, i)
                  } else h = e.match(J) || tw.transparent;
                  h = h.map(Number)
               }
               return t && !d && (l = ((u = Math.max(n = h[0] / 255, i = h[1] / 255, o = h[2] / 255)) + (c = Math.min(n, i, o))) / 2, u === c ? a = s = 0 : (f = u - c, s = l > .5 ? f / (2 - u - c) : f / (u + c), a = (u === n ? (i - o) / f + (i < o ? 6 : 0) : u === i ? (o - n) / f + 2 : (n - i) / f + 4) * 60), h[0] = ~~(a + .5), h[1] = ~~(100 * s + .5), h[2] = ~~(100 * l + .5)), r && h.length < 4 && (h[3] = 1), h
            },
            tT = function (e) {
               var t = [],
                  r = [],
                  n = -1;
               return e.split(tE).forEach(function (e) {
                  var i = e.match(ee) || [];
                  t.push.apply(t, i), r.push(n += i.length + 1)
               }), t.c = r, t
            },
            tP = function (e, t, r) {
               var n, i, o, a, s = "",
                  l = (e + s).match(tE),
                  u = t ? "hsla(" : "rgba(",
                  c = 0;
               if (!l) return e;
               if (l = l.map(function (e) {
                     return (e = tS(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
                  }), r && (o = tT(e), (n = r.c).join(s) !== o.c.join(s)))
                  for (a = (i = e.replace(tE, "1").split(ee)).length - 1; c < a; c++) s += i[c] + (~n.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : r).shift());
               if (!i)
                  for (a = (i = e.split(tE)).length - 1; c < a; c++) s += i[c] + l[c];
               return s + i[a]
            },
            tE = function () {
               var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
               for (e in tw) t += "|" + e + "\\b";
               return RegExp(t + ")", "gi")
            }(),
            tO = /hsl[a]?\(/,
            tk = function (e) {
               var t, r = e.join(" ");
               if (tE.lastIndex = 0, tE.test(r)) return t = tO.test(r), e[1] = tP(e[1], t), e[0] = tP(e[0], t, tT(e[1])), !0
            },
            tC = (p = Date.now, g = 500, m = 33, y = v = p(), _ = 1e3 / 240, b = 1e3 / 240, w = [], x = function e(t) {
               var r, n, i, o, a = p() - y,
                  s = !0 === t;
               if ((a > g || a < 0) && (v += a - m), y += a, ((r = (i = y - v) - b) > 0 || s) && (o = ++f.frame, d = i - 1e3 * f.time, f.time = i /= 1e3, b += r + (r >= _ ? 4 : _ - r), n = 1), s || (l = u(e)), n)
                  for (h = 0; h < w.length; h++) w[h](i, d, o, t)
            }, f = {
               time: 0,
               frame: 0,
               tick: function () {
                  x(!0)
               },
               deltaRatio: function (e) {
                  return d / (1e3 / (e || 60))
               },
               wake: function () {
                  j && (!k && $() && (C = (O = k = window).document || {}, eo.gsap = rk, (O.gsapVersions || (O.gsapVersions = [])).push(rk.version), es(ea || O.GreenSockGlobals || !O.gsap && O || {}), t_.forEach(tb)), c = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, l && f.sleep(), u = c || function (e) {
                     return setTimeout(e, b - 1e3 * f.time + 1 | 0)
                  }, D = 1, x(2))
               },
               sleep: function () {
                  (c ? cancelAnimationFrame : clearTimeout)(l), D = 0, u = ef
               },
               lagSmoothing: function (e, t) {
                  m = Math.min(t || 33, g = e || 1 / 0)
               },
               fps: function (e) {
                  _ = 1e3 / (e || 240), b = 1e3 * f.time + _
               },
               add: function (e, t, r) {
                  var n = t ? function (t, r, i, o) {
                     e(t, r, i, o), f.remove(n)
                  } : e;
                  return f.remove(e), w[r ? "unshift" : "push"](n), tj(), n
               },
               remove: function (e, t) {
                  ~(t = w.indexOf(e)) && w.splice(t, 1) && h >= t && h--
               },
               _listeners: w
            }),
            tj = function () {
               return !D && tC.wake()
            },
            tA = {},
            tM = /^[\d.\-M][\d.\-,\s]/,
            tD = /["']/g,
            tR = function (e) {
               for (var t, r, n, i = {}, o = e.substr(1, e.length - 3).split(":"), a = o[0], s = 1, l = o.length; s < l; s++) r = o[s], t = s !== l - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, t), i[a] = isNaN(n) ? n.replace(tD, "").trim() : +n, a = r.substr(t + 1).trim();
               return i
            },
            tI = function (e) {
               var t = e.indexOf("(") + 1,
                  r = e.indexOf(")"),
                  n = e.indexOf("(", t);
               return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r)
            },
            tz = function (e) {
               var t = (e + "").split("("),
                  r = tA[t[0]];
               return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [tR(t[1])] : tI(e).split(",").map(eD)) : tA._CE && tM.test(e) ? tA._CE("", e) : r
            },
            tN = function (e) {
               return function (t) {
                  return 1 - e(1 - t)
               }
            },
            tL = function e(t, r) {
               for (var n, i = t._first; i;) i instanceof tY ? e(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? e(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
            },
            tF = function (e, t) {
               return e && (U(e) ? e : tA[e] || tz(e)) || t
            },
            tB = function (e, t, r, n) {
               void 0 === r && (r = function (e) {
                  return 1 - t(1 - e)
               }), void 0 === n && (n = function (e) {
                  return e < .5 ? t(2 * e) / 2 : 1 - t((1 - e) * 2) / 2
               });
               var i, o = {
                  easeIn: t,
                  easeOut: r,
                  easeInOut: n
               };
               return eE(e, function (e) {
                  for (var t in tA[e] = eo[e] = o, tA[i = e.toLowerCase()] = r, o) tA[i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = tA[e + "." + t] = o[t]
               }), o
            },
            tV = function (e) {
               return function (t) {
                  return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e((t - .5) * 2) / 2
               }
            },
            tH = function e(t, r, n) {
               var i = r >= 1 ? r : 1,
                  o = (n || (t ? .3 : .45)) / (r < 1 ? r : 1),
                  a = o / z * (Math.asin(1 / i) || 0),
                  s = function (e) {
                     return 1 === e ? 1 : i * Math.pow(2, -10 * e) * V((e - a) * o) + 1
                  },
                  l = "out" === t ? s : "in" === t ? function (e) {
                     return 1 - s(1 - e)
                  } : tV(s);
               return o = z / o, l.config = function (r, n) {
                  return e(t, r, n)
               }, l
            },
            tU = function e(t, r) {
               void 0 === r && (r = 1.70158);
               var n = function (e) {
                     return e ? --e * e * ((r + 1) * e + r) + 1 : 0
                  },
                  i = "out" === t ? n : "in" === t ? function (e) {
                     return 1 - n(1 - e)
                  } : tV(n);
               return i.config = function (r) {
                  return e(t, r)
               }, i
            };
         eE("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
            var r = t < 5 ? t + 1 : t;
            tB(e + ",Power" + (r - 1), t ? function (e) {
               return Math.pow(e, r)
            } : function (e) {
               return e
            }, function (e) {
               return 1 - Math.pow(1 - e, r)
            }, function (e) {
               return e < .5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow((1 - e) * 2, r) / 2
            })
         }), tA.Linear.easeNone = tA.none = tA.Linear.easeIn, tB("Elastic", tH("in"), tH("out"), tH()), t$ = 2 * (tX = 1 / 2.75), tZ = 2.5 * tX, tB("Bounce", function (e) {
            return 1 - tG(1 - e)
         }, tG = function (e) {
            return e < tX ? 7.5625 * e * e : e < t$ ? 7.5625 * Math.pow(e - 1.5 / 2.75, 2) + .75 : e < tZ ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * Math.pow(e - 2.625 / 2.75, 2) + .984375
         }), tB("Expo", function (e) {
            return e ? Math.pow(2, 10 * (e - 1)) : 0
         }), tB("Circ", function (e) {
            return -(F(1 - e * e) - 1)
         }), tB("Sine", function (e) {
            return 1 === e ? 1 : -B(e * N) + 1
         }), tB("Back", tU("in"), tU("out"), tU()), tA.SteppedEase = tA.steps = eo.SteppedEase = {
            config: function (e, t) {
               void 0 === e && (e = 1);
               var r = 1 / e,
                  n = e + (t ? 0 : 1),
                  i = t ? 1 : 0;
               return function (e) {
                  return ((n * tr(0, .99999999, e) | 0) + i) * r
               }
            }
         }, I.ease = tA["quad.out"], eE("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (e) {
            return ex += e + "," + e + "Params,"
         });
         var tW = function (e, t) {
               this.id = L++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : eP, this.set = t ? t.getSetter : ro
            },
            tq = function () {
               function e(e) {
                  this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, e9(this, +e.duration, 1, 1), this.data = e.data, P && (this._ctx = P, P.data.push(this)), D || tC.wake()
               }
               var t = e.prototype;
               return t.delay = function (e) {
                  return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
               }, t.duration = function (e) {
                  return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
               }, t.totalDuration = function (e) {
                  return arguments.length ? (this._dirty = 0, e9(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
               }, t.totalTime = function (e, t) {
                  if (tj(), !arguments.length) return this._tTime;
                  var r = this._dp;
                  if (r && r.smoothChildTiming && this._ts) {
                     for (eK(this, e), !r._dp || r.parent || eJ(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : -((r.totalDuration() - r._tTime) / r._ts)) && r.totalTime(r._tTime, !0), r = r.parent;
                     !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && eQ(this._dp, this, this._start - this._delay)
                  }
                  return this._tTime === e && (this._dur || t) && (!this._initted || 1e-8 !== Math.abs(this._zTime)) && (e || this._initted || !this.add && !this._ptLookup) || (this._ts || (this._pTime = e), eM(this, e, t)), this
               }, t.time = function (e, t) {
                  return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + eX(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
               }, t.totalProgress = function (e, t) {
                  return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
               }, t.progress = function (e, t) {
                  return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - e : e) + eX(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
               }, t.iteration = function (e, t) {
                  var r = this.duration() + this._rDelay;
                  return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? e$(this._tTime, r) + 1 : 1
               }, t.timeScale = function (e, t) {
                  if (!arguments.length) return -.00000001 === this._rts ? 0 : this._rts;
                  if (this._rts === e) return this;
                  var r = this.parent && this._ts ? eZ(this.parent._time, this) : this._tTime;
                  return this._rts = +e || 0, this._ts = this._ps || -.00000001 === e ? 0 : this._rts, this.totalTime(tr(-Math.abs(this._delay), this._tDur, r), !1 !== t), eG(this), eq(this)
               }, t.paused = function (e) {
                  return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (tj(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
               }, t.startTime = function (e) {
                  if (arguments.length) {
                     this._start = e;
                     var t = this.parent || this._dp;
                     return t && (t._sort || !this.parent) && eQ(t, this, e - this._delay), this
                  }
                  return this._start
               }, t.endTime = function (e) {
                  return this._start + (X(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
               }, t.rawTime = function (e) {
                  var t = this.parent || this._dp;
                  return t ? e && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? eZ(t.rawTime(e), this) : this._tTime : this._tTime
               }, t.revert = function (e) {
                  void 0 === e && (e = ep);
                  var t = T;
                  return T = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), T = t, this
               }, t.globalTime = function (e) {
                  for (var t = this, r = arguments.length ? e : t.rawTime(); t;) r = t._start + r / (Math.abs(t._ts) || 1), t = t._dp;
                  return !this.parent && this._sat ? this._sat.globalTime(e) : r
               }, t.repeat = function (e) {
                  return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, e6(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
               }, t.repeatDelay = function (e) {
                  if (arguments.length) {
                     var t = this._time;
                     return this._rDelay = e, e6(this), t ? this.time(t) : this
                  }
                  return this._rDelay
               }, t.yoyo = function (e) {
                  return arguments.length ? (this._yoyo = e, this) : this._yoyo
               }, t.seek = function (e, t) {
                  return this.totalTime(e7(this, e), X(t))
               }, t.restart = function (e, t) {
                  return this.play().totalTime(e ? -this._delay : 0, X(t))
               }, t.play = function (e, t) {
                  return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
               }, t.reverse = function (e, t) {
                  return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
               }, t.pause = function (e, t) {
                  return null != e && this.seek(e, t), this.paused(!0)
               }, t.resume = function () {
                  return this.paused(!1)
               }, t.reversed = function (e) {
                  return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -.00000001 : 0)), this) : this._rts < 0
               }, t.invalidate = function () {
                  return this._initted = this._act = 0, this._zTime = -.00000001, this
               }, t.isActive = function () {
                  var e, t = this.parent || this._dp,
                     r = this._start;
                  return !!(!t || this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - 1e-8)
               }, t.eventCallback = function (e, t, r) {
                  var n = this.vars;
                  return arguments.length > 1 ? (t ? (n[e] = t, r && (n[e + "Params"] = r), "onUpdate" === e && (this._onUpdate = t)) : delete n[e], this) : n[e]
               }, t.then = function (e) {
                  var t = this;
                  return new Promise(function (r) {
                     var n = U(e) ? e : eR,
                        i = function () {
                           var e = t.then;
                           t.then = null, U(n) && (n = n(t)) && (n.then || n === t) && (t.then = e), r(n), t.then = e
                        };
                     t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i
                  })
               }, t.kill = function () {
                  ty(this)
               }, e
            }();
         eI(tq.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -.00000001,
            _prom: 0,
            _ps: !1,
            _rts: 1
         });
         var tY = function (e) {
            function t(t, r) {
               var i;
               return void 0 === t && (t = {}), (i = e.call(this, t) || this).labels = {}, i.smoothChildTiming = !!t.smoothChildTiming, i.autoRemoveChildren = !!t.autoRemoveChildren, i._sort = X(t.sortChildren), E && eQ(t.parent || E, n(i), r), t.reversed && i.reverse(), t.paused && i.paused(!0), t.scrollTrigger && e0(n(i), t.scrollTrigger), i
            }
            i(t, e);
            var r = t.prototype;
            return r.to = function (e, t, r) {
               return te(0, arguments, this), this
            }, r.from = function (e, t, r) {
               return te(1, arguments, this), this
            }, r.fromTo = function (e, t, r, n) {
               return te(2, arguments, this), this
            }, r.set = function (e, t, r) {
               return t.duration = 0, t.parent = this, eF(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new re(e, t, e7(this, r), 1), this
            }, r.call = function (e, t, r) {
               return eQ(this, re.delayedCall(0, e, t), r)
            }, r.staggerTo = function (e, t, r, n, i, o, a) {
               return r.duration = t, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = a, r.parent = this, new re(e, r, e7(this, i)), this
            }, r.staggerFrom = function (e, t, r, n, i, o, a) {
               return r.runBackwards = 1, eF(r).immediateRender = X(r.immediateRender), this.staggerTo(e, t, r, n, i, o, a)
            }, r.staggerFromTo = function (e, t, r, n, i, o, a, s) {
               return n.startAt = r, eF(n).immediateRender = X(n.immediateRender), this.staggerTo(e, t, n, i, o, a, s)
            }, r.render = function (e, t, r) {
               var n, i, o, a, s, l, u, c, f, d, h, p, g = this._time,
                  m = this._dirty ? this.totalDuration() : this._tDur,
                  v = this._dur,
                  y = e <= 0 ? 0 : ek(e),
                  _ = this._zTime < 0 != e < 0 && (this._initted || !v);
               if (this !== E && y > m && e >= 0 && (y = m), y !== this._tTime || r || _) {
                  if (g !== this._time && v && (y += this._time - g, e += this._time - g), n = y, f = this._start, l = !(c = this._ts), _ && (v || (g = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
                     if (h = this._yoyo, s = v + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * s + e, t, r);
                     if (n = ek(y % s), y === m ? (a = this._repeat, n = v) : ((a = ~~(y / s)) && a === y / s && (n = v, a--), n > v && (n = v)), d = e$(this._tTime, s), !g && this._tTime && d !== a && this._tTime - d * s - this._dur <= 0 && (d = a), h && 1 & a && (n = v - n, p = 1), a !== d && !this._lock) {
                        var b = h && 1 & d,
                           w = b === (h && 1 & a);
                        if (a < d && (b = !b), g = b ? 0 : y % v ? v : y, this._lock = 1, this.render(g || (p ? 0 : ek(a * s)), t, !v)._lock = 0, this._tTime = y, !t && this.parent && tv(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), g && g !== this._time || !this._ts !== l || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur, m = this._tDur, w && (this._lock = 2, g = b ? v : -.0001, this.render(g, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !l)) return this;
                        tL(this, p)
                     }
                  }
                  if (this._hasPause && !this._forcing && this._lock < 2 && (u = e8(this, ek(g), ek(n))) && (y -= n - (n = u._start)), this._tTime = y, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, g = 0), !g && n && !t && !a && (tv(this, "onStart"), this._tTime !== y)) return this;
                  if (n >= g && e >= 0)
                     for (i = this._first; i;) {
                        if (o = i._next, (i._act || n >= i._start) && i._ts && u !== i) {
                           if (i.parent !== this) return this.render(e, t, r);
                           if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, t, r), n !== this._time || !this._ts && !l) {
                              u = 0, o && (y += this._zTime = -.00000001);
                              break
                           }
                        }
                        i = o
                     } else {
                        i = this._last;
                        for (var x = e < 0 ? e : n; i;) {
                           if (o = i._prev, (i._act || x <= i._end) && i._ts && u !== i) {
                              if (i.parent !== this) return this.render(e, t, r);
                              if (i.render(i._ts > 0 ? (x - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (x - i._start) * i._ts, t, r || T && (i._initted || i._startAt)), n !== this._time || !this._ts && !l) {
                                 u = 0, o && (y += this._zTime = x ? -.00000001 : 1e-8);
                                 break
                              }
                           }
                           i = o
                        }
                     }
                  if (u && !t && (this.pause(), u.render(n >= g ? 0 : -.00000001)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = f, eG(this), this.render(e, t, r);
                  this._onUpdate && !t && tv(this, "onUpdate", !0), (y === m && this._tTime >= this.totalDuration() || !y && g) && (f === this._start || Math.abs(c) !== Math.abs(this._ts)) && !this._lock && ((e || !v) && (y === m && this._ts > 0 || !y && this._ts < 0) && eU(this, 1), t || e < 0 && !g || !y && !g && m || (tv(this, y === m && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < m && this.timeScale() > 0) && this._prom()))
               }
               return this
            }, r.add = function (e, t) {
               var r = this;
               if (W(t) || (t = e7(this, t, e)), !(e instanceof tq)) {
                  if (K(e)) return e.forEach(function (e) {
                     return r.add(e, t)
                  }), this;
                  if (H(e)) return this.addLabel(e, t);
                  if (!U(e)) return this;
                  e = re.delayedCall(0, e)
               }
               return this !== e ? eQ(this, e, t) : this
            }, r.getChildren = function (e, t, r, n) {
               void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8);
               for (var i = [], o = this._first; o;) o._start >= n && (o instanceof re ? t && i.push(o) : (r && i.push(o), e && i.push.apply(i, o.getChildren(!0, t, r)))), o = o._next;
               return i
            }, r.getById = function (e) {
               for (var t = this.getChildren(1, 1, 1), r = t.length; r--;)
                  if (t[r].vars.id === e) return t[r]
            }, r.remove = function (e) {
               return H(e) ? this.removeLabel(e) : U(e) ? this.killTweensOf(e) : (eH(this, e), e === this._recent && (this._recent = this._last), eW(this))
            }, r.totalTime = function (t, r) {
               return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ek(tC.time - (this._ts > 0 ? t / this._ts : -((this.totalDuration() - t) / this._ts)))), e.prototype.totalTime.call(this, t, r), this._forcing = 0, this) : this._tTime
            }, r.addLabel = function (e, t) {
               return this.labels[e] = e7(this, t), this
            }, r.removeLabel = function (e) {
               return delete this.labels[e], this
            }, r.addPause = function (e, t, r) {
               var n = re.delayedCall(0, t || ef, r);
               return n.data = "isPause", this._hasPause = 1, eQ(this, n, e7(this, e))
            }, r.removePause = function (e) {
               var t = this._first;
               for (e = e7(this, e); t;) t._start === e && "isPause" === t.data && eU(t), t = t._next
            }, r.killTweensOf = function (e, t, r) {
               for (var n = this.getTweensOf(e, r), i = n.length; i--;) tK !== n[i] && n[i].kill(e, t);
               return this
            }, r.getTweensOf = function (e, t) {
               for (var r, n = [], i = ta(e), o = this._first, a = W(t); o;) o instanceof re ? ej(o._targets, i) && (a ? (!tK || o._initted && o._ts) && o.globalTime(0) <= t && o.globalTime(o.totalDuration()) > t : !t || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, t)).length && n.push.apply(n, r), o = o._next;
               return n
            }, r.tweenTo = function (e, t) {
               t = t || {};
               var r, n = this,
                  i = e7(n, e),
                  o = t,
                  a = o.startAt,
                  s = o.onStart,
                  l = o.onStartParams,
                  u = o.immediateRender,
                  c = re.to(n, eI({
                     ease: t.ease || "none",
                     lazy: !1,
                     immediateRender: !1,
                     time: i,
                     overwrite: "auto",
                     duration: t.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || 1e-8,
                     onStart: function () {
                        if (n.pause(), !r) {
                           var e = t.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale());
                           c._dur !== e && e9(c, e, 0, 1).render(c._time, !0, !0), r = 1
                        }
                        s && s.apply(c, l || [])
                     }
                  }, t));
               return u ? c.render(0) : c
            }, r.tweenFromTo = function (e, t, r) {
               return this.tweenTo(t, eI({
                  startAt: {
                     time: e7(this, e)
                  }
               }, r))
            }, r.recent = function () {
               return this._recent
            }, r.nextLabel = function (e) {
               return void 0 === e && (e = this._time), tm(this, e7(this, e))
            }, r.previousLabel = function (e) {
               return void 0 === e && (e = this._time), tm(this, e7(this, e), 1)
            }, r.currentLabel = function (e) {
               return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + 1e-8)
            }, r.shiftChildren = function (e, t, r) {
               void 0 === r && (r = 0);
               for (var n, i = this._first, o = this.labels; i;) i._start >= r && (i._start += e, i._end += e), i = i._next;
               if (t)
                  for (n in o) o[n] >= r && (o[n] += e);
               return eW(this)
            }, r.invalidate = function (t) {
               var r = this._first;
               for (this._lock = 0; r;) r.invalidate(t), r = r._next;
               return e.prototype.invalidate.call(this, t)
            }, r.clear = function (e) {
               void 0 === e && (e = !0);
               for (var t, r = this._first; r;) t = r._next, this.remove(r), r = t;
               return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), eW(this)
            }, r.totalDuration = function (e) {
               var t, r, n, i = 0,
                  o = this._last,
                  a = 1e8;
               if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -e : e));
               if (this._dirty) {
                  for (n = this.parent; o;) t = o._prev, o._dirty && o.totalDuration(), (r = o._start) > a && this._sort && o._ts && !this._lock ? (this._lock = 1, eQ(this, o, r - o._delay, 1)._lock = 0) : a = r, r < 0 && o._ts && (i -= r, (!n && !this._dp || n && n.smoothChildTiming) && (this._start += r / this._ts, this._time -= r, this._tTime -= r), this.shiftChildren(-r, !1, -Infinity), a = 0), o._end > i && o._ts && (i = o._end), o = t;
                  e9(this, this === E && this._time > i ? this._time : i, 1, 1), this._dirty = 0
               }
               return this._tDur
            }, t.updateRoot = function (e) {
               if (E._ts && (eM(E, eZ(e, E)), A = tC.frame), tC.frame >= eb) {
                  eb += R.autoSleep || 120;
                  var t = E._first;
                  if ((!t || !t._ts) && R.autoSleep && tC._listeners.length < 2) {
                     for (; t && !t._ts;) t = t._next;
                     t || tC.sleep()
                  }
               }
            }, t
         }(tq);
         eI(tY.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
         });
         var tX, t$, tZ, tG, tK, tJ, tQ = function (e, t, r, n, i, o, a) {
               var s, l, u, c, f, d, h, p, g = new rp(this._pt, e, t, 0, 1, rl, null, i),
                  m = 0,
                  v = 0;
               for (g.b = r, g.e = n, r += "", n += "", (h = ~n.indexOf("random(")) && (n = tp(n)), o && (o(p = [r, n], e, t), r = p[0], n = p[1]), l = r.match(et) || []; s = et.exec(n);) c = s[0], f = n.substring(m, s.index), u ? u = (u + 1) % 5 : "rgba(" === f.substr(-5) && (u = 1), c !== l[v++] && (d = parseFloat(l[v - 1]) || 0, g._pt = {
                  _next: g._pt,
                  p: f || 1 === v ? f : ",",
                  s: d,
                  c: "=" === c.charAt(1) ? eC(d, c) - d : parseFloat(c) - d,
                  m: u && u < 4 ? Math.round : 0
               }, m = et.lastIndex);
               return g.c = m < n.length ? n.substring(m, n.length) : "", g.fp = a, (er.test(n) || h) && (g.e = 0), this._pt = g, g
            },
            t0 = function (e, t, r, n, i, o, a, s, l, u) {
               U(n) && (n = n(i || 0, e, o));
               var c, f = e[t],
                  d = "get" !== r ? r : U(f) ? l ? e[t.indexOf("set") || !U(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : f,
                  h = U(f) ? l ? rn : rr : rt;
               if (H(n) && (~n.indexOf("random(") && (n = tp(n)), "=" === n.charAt(1) && ((c = eC(d, n) + (tn(d) || 0)) || 0 === c) && (n = c)), !u || d !== n || tJ) return isNaN(d * n) || "" === n ? (f || t in e || el(t, n), tQ.call(this, e, t, d, n, h, s || R.stringFilter, l)) : (c = new rp(this._pt, e, t, +d || 0, n - (d || 0), "boolean" == typeof f ? rs : ra, 0, h), l && (c.fp = l), a && c.modifier(a, this, e), this._pt = c)
            },
            t1 = function (e, t, r, n, i) {
               if (U(e) && (e = t6(e, i, t, r, n)), !Y(e) || e.style && e.nodeType || K(e) || G(e)) return H(e) ? t6(e, i, t, r, n) : e;
               var o, a = {};
               for (o in e) a[o] = t6(e[o], i, t, r, n);
               return a
            },
            t2 = function (e, t, r, n, i, o) {
               var a, s, l, u;
               if (ey[e] && !1 !== (a = new ey[e]).init(i, a.rawVars ? t[e] : t1(t[e], n, i, o, r), r, n, o) && (r._pt = s = new rp(r._pt, i, e, 0, 1, a.render, a, 0, a.priority), r !== M))
                  for (l = r._ptLookup[r._targets.indexOf(i)], u = a._props.length; u--;) l[a._props[u]] = s;
               return a
            },
            t5 = function e(t, r, n) {
               var i, o, a, s, l, u, c, f, d, h, p, g, m, v = t.vars,
                  y = v.ease,
                  _ = v.startAt,
                  b = v.immediateRender,
                  w = v.lazy,
                  x = v.onUpdate,
                  P = v.runBackwards,
                  O = v.yoyoEase,
                  k = v.keyframes,
                  C = v.autoRevert,
                  j = t._dur,
                  A = t._startAt,
                  M = t._targets,
                  D = t.parent,
                  R = D && "nested" === D.data ? D.vars.targets : M,
                  z = "auto" === t._overwrite && !S,
                  N = t.timeline;
               if (!N || k && y || (y = "none"), t._ease = tF(y, I.ease), t._yEase = O ? tN(tF(!0 === O ? y : O, I.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !N && !!v.runBackwards, !N || k && !v.stagger) {
                  if (g = (f = M[0] ? eT(M[0]).harness : 0) && v[f.prop], i = eL(v, eg), A && (A._zTime < 0 && A.progress(1), r < 0 && P && b && !C ? A.render(-1, !0) : A.revert(P && j ? eh : ed), A._lazy = 0), _) {
                     if (eU(t._startAt = re.set(M, eI({
                           data: "isStart",
                           overwrite: !1,
                           parent: D,
                           immediateRender: !0,
                           lazy: !A && X(w),
                           startAt: null,
                           delay: 0,
                           onUpdate: x && function () {
                              return tv(t, "onUpdate")
                           },
                           stagger: 0
                        }, _))), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (T || !b && !C) && t._startAt.revert(eh), b && j && r <= 0 && n <= 0) {
                        r && (t._zTime = r);
                        return
                     }
                  } else if (P && j && !A) {
                     if (r && (b = !1), a = eI({
                           overwrite: !1,
                           data: "isFromStart",
                           lazy: b && !A && X(w),
                           immediateRender: b,
                           stagger: 0,
                           parent: D
                        }, i), g && (a[f.prop] = g), eU(t._startAt = re.set(M, a)), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (T ? t._startAt.revert(eh) : t._startAt.render(-1, !0)), t._zTime = r, b) {
                        if (!r) return
                     } else e(t._startAt, 1e-8, 1e-8)
                  }
                  for (o = 0, t._pt = t._ptCache = 0, w = j && X(w) || w && !j; o < M.length; o++) {
                     if (c = (l = M[o])._gsap || eS(M)[o]._gsap, t._ptLookup[o] = h = {}, ev[c.id] && em.length && eA(), p = R === M ? o : R.indexOf(l), f && !1 !== (d = new f).init(l, g || i, t, p, R) && (t._pt = s = new rp(t._pt, l, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach(function (e) {
                           h[e] = s
                        }), d.priority && (u = 1)), !f || g)
                        for (a in i) ey[a] && (d = t2(a, i, t, p, l, R)) ? d.priority && (u = 1) : h[a] = s = t0.call(t, l, a, "get", i[a], p, R, 0, v.stringFilter);
                     t._op && t._op[o] && t.kill(l, t._op[o]), z && t._pt && (tK = t, E.killTweensOf(l, h, t.globalTime(r)), m = !t.parent, tK = 0), t._pt && w && (ev[c.id] = 1)
                  }
                  u && rh(t), t._onInit && t._onInit(t)
               }
               t._onUpdate = x, t._initted = (!t._op || t._pt) && !m, k && r <= 0 && N.render(1e8, !0, !0)
            },
            t3 = function (e, t, r, n, i, o, a, s) {
               var l, u, c, f, d = (e._pt && e._ptCache || (e._ptCache = {}))[t];
               if (!d)
                  for (d = e._ptCache[t] = [], c = e._ptLookup, f = e._targets.length; f--;) {
                     if ((l = c[f][t]) && l.d && l.d._pt)
                        for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                     if (!l) return tJ = 1, e.vars[t] = "+=0", t5(e, a), tJ = 0, s ? eu(t + " not eligible for reset") : 1;
                     d.push(l)
                  }
               for (f = d.length; f--;)(l = (u = d[f])._pt || u).s = (n || 0 === n) && !i ? n : l.s + (n || 0) + o * l.c, l.c = r - l.s, u.e && (u.e = eO(r) + tn(u.e)), u.b && (u.b = l.s + tn(u.b))
            },
            t8 = function (e, t) {
               var r, n, i, o, a = e[0] ? eT(e[0]).harness : 0,
                  s = a && a.aliases;
               if (!s) return t;
               for (n in r = ez({}, t), s)
                  if (n in r)
                     for (i = (o = s[n].split(",")).length; i--;) r[o[i]] = r[n];
               return r
            },
            t9 = function (e, t, r, n) {
               var i, o, a = t.ease || n || "power1.inOut";
               if (K(t)) o = r[e] || (r[e] = []), t.forEach(function (e, r) {
                  return o.push({
                     t: r / (t.length - 1) * 100,
                     v: e,
                     e: a
                  })
               });
               else
                  for (i in t) o = r[i] || (r[i] = []), "ease" === i || o.push({
                     t: parseFloat(e),
                     v: t[i],
                     e: a
                  })
            },
            t6 = function (e, t, r, n, i) {
               return U(e) ? e.call(t, r, n, i) : H(e) && ~e.indexOf("random(") ? tp(e) : e
            },
            t4 = ex + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
            t7 = {};
         eE(t4 + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
            return t7[e] = 1
         });
         var re = function (e) {
            function t(t, r, i, o) {
               "number" == typeof r && (i.duration = r, r = i, i = null);
               var a, s, l, u, c, f, d, h, p, g = (a = e.call(this, o ? r : eF(r)) || this).vars,
                  m = g.duration,
                  v = g.delay,
                  y = g.immediateRender,
                  _ = g.stagger,
                  b = g.overwrite,
                  w = g.keyframes,
                  x = g.defaults,
                  T = g.scrollTrigger,
                  P = g.yoyoEase,
                  O = r.parent || E,
                  k = (K(t) || G(t) ? W(t[0]) : "length" in r) ? [t] : ta(t);
               if (a._targets = k.length ? eS(k) : eu("GSAP target " + t + " not found. https://gsap.com", !R.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, w || _ || Z(m) || Z(v)) {
                  if (r = a.vars, (s = a.timeline = new tY({
                        data: "nested",
                        defaults: x || {},
                        targets: O && "nested" === O.data ? O.vars.targets : k
                     })).kill(), s.parent = s._dp = n(a), s._start = 0, _ || Z(m) || Z(v)) {
                     if (c = k.length, h = _ && tu(_), Y(_))
                        for (f in _) ~t4.indexOf(f) && (p || (p = {}), p[f] = _[f]);
                     for (l = 0; l < c; l++)(u = eL(r, t7)).stagger = 0, P && (u.yoyoEase = P), p && ez(u, p), d = k[l], u.duration = +t6(m, n(a), l, d, k), u.delay = (+t6(v, n(a), l, d, k) || 0) - a._delay, !_ && 1 === c && u.delay && (a._delay = v = u.delay, a._start += v, u.delay = 0), s.to(d, u, h ? h(l, d, k) : 0), s._ease = tA.none;
                     s.duration() ? m = v = 0 : a.timeline = 0
                  } else if (w) {
                     eF(eI(s.vars.defaults, {
                        ease: "none"
                     })), s._ease = tF(w.ease || r.ease || "none");
                     var C, j, A, M = 0;
                     if (K(w)) w.forEach(function (e) {
                        return s.to(k, e, ">")
                     }), s.duration();
                     else {
                        for (f in u = {}, w) "ease" === f || "easeEach" === f || t9(f, w[f], u, w.easeEach);
                        for (f in u)
                           for (l = 0, C = u[f].sort(function (e, t) {
                                 return e.t - t.t
                              }), M = 0; l < C.length; l++)(A = {
                              ease: (j = C[l]).e,
                              duration: (j.t - (l ? C[l - 1].t : 0)) / 100 * m
                           })[f] = j.v, s.to(k, A, M), M += A.duration;
                        s.duration() < m && s.to({}, {
                           duration: m - s.duration()
                        })
                     }
                  }
                  m || a.duration(m = s.duration())
               } else a.timeline = 0;
               return !0 !== b || S || (tK = n(a), E.killTweensOf(k), tK = 0), eQ(O, n(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (y || !m && !w && a._start === ek(O._time) && X(y) && function e(t) {
                  return !t || t._ts && e(t.parent)
               }(n(a)) && "nested" !== O.data) && (a._tTime = -.00000001, a.render(Math.max(0, -v) || 0)), T && e0(n(a), T), a
            }
            i(t, e);
            var r = t.prototype;
            return r.render = function (e, t, r) {
               var n, i, o, a, s, l, u, c, f, d = this._time,
                  h = this._tDur,
                  p = this._dur,
                  g = e < 0,
                  m = e > h - 1e-8 && !g ? h : e < 1e-8 ? 0 : e;
               if (p) {
                  if (m !== this._tTime || !e || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                     if (n = m, c = this.timeline, this._repeat) {
                        if (a = p + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * a + e, t, r);
                        if (n = ek(m % a), m === h ? (o = this._repeat, n = p) : ((o = ~~(m / a)) && o === ek(m / a) && (n = p, o--), n > p && (n = p)), (l = this._yoyo && 1 & o) && (f = this._yEase, n = p - n), s = e$(this._tTime, a), n === d && !r && this._initted && o === s) return this._tTime = m, this;
                        o !== s && (c && this._yEase && tL(c, l), this.vars.repeatRefresh && !l && !this._lock && this._time !== a && this._initted && (this._lock = r = 1, this.render(ek(a * o), !0).invalidate()._lock = 0))
                     }
                     if (!this._initted) {
                        if (e1(this, g ? e : n, r, t, m)) return this._tTime = 0, this;
                        if (d !== this._time && !(r && this.vars.repeatRefresh && o !== s)) return this;
                        if (p !== this._dur) return this.render(e, t, r)
                     }
                     if (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (f || this._ease)(n / p), this._from && (this.ratio = u = 1 - u), n && !d && !t && !o && (tv(this, "onStart"), this._tTime !== m)) return this;
                     for (i = this._pt; i;) i.r(u, i.d), i = i._next;
                     c && c.render(e < 0 ? e : c._dur * c._ease(n / this._dur), t, r) || this._startAt && (this._zTime = e), this._onUpdate && !t && (g && eY(this, e, t, r), tv(this, "onUpdate")), this._repeat && o !== s && this.vars.onRepeat && !t && this.parent && tv(this, "onRepeat"), (m === this._tDur || !m) && this._tTime === m && (g && !this._onUpdate && eY(this, e, !0, !0), (e || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && eU(this, 1), !t && !(g && !d) && (m || d || l) && (tv(this, m === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < h && this.timeScale() > 0) && this._prom()))
                  }
               } else e3(this, e, t, r);
               return this
            }, r.targets = function () {
               return this._targets
            }, r.invalidate = function (t) {
               return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
            }, r.resetTo = function (e, t, r, n, i) {
               D || tC.wake(), this._ts || this.play();
               var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
               return (this._initted || t5(this, o), t3(this, e, t, r, n, this._ease(o / this._dur), o, i)) ? this.resetTo(e, t, r, n, 1) : (eK(this, 0), this.parent || eV(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
            }, r.kill = function (e, t) {
               if (void 0 === t && (t = "all"), !e && (!t || "all" === t)) return this._lazy = this._pt = 0, this.parent ? ty(this) : this;
               if (this.timeline) {
                  var r = this.timeline.totalDuration();
                  return this.timeline.killTweensOf(e, t, tK && !0 !== tK.vars.overwrite)._first || ty(this), this.parent && r !== this.timeline.totalDuration() && e9(this, this._dur * this.timeline._tDur / r, 0, 1), this
               }
               var n, i, o, a, s, l, u, c = this._targets,
                  f = e ? ta(e) : c,
                  d = this._ptLookup,
                  h = this._pt;
               if ((!t || "all" === t) && eB(c, f)) return "all" === t && (this._pt = 0), ty(this);
               for (n = this._op = this._op || [], "all" !== t && (H(t) && (s = {}, eE(t, function (e) {
                     return s[e] = 1
                  }), t = s), t = t8(c, t)), u = c.length; u--;)
                  if (~f.indexOf(c[u]))
                     for (s in i = d[u], "all" === t ? (n[u] = t, a = i, o = {}) : (o = n[u] = n[u] || {}, a = t), a)(l = i && i[s]) && ("kill" in l.d && !0 !== l.d.kill(s) || eH(this, l, "_pt"), delete i[s]), "all" !== o && (o[s] = 1);
               return this._initted && !this._pt && h && ty(this), this
            }, t.to = function (e, r) {
               return new t(e, r, arguments[2])
            }, t.from = function (e, t) {
               return te(1, arguments)
            }, t.delayedCall = function (e, r, n, i) {
               return new t(r, 0, {
                  immediateRender: !1,
                  lazy: !1,
                  overwrite: !1,
                  delay: e,
                  onComplete: r,
                  onReverseComplete: r,
                  onCompleteParams: n,
                  onReverseCompleteParams: n,
                  callbackScope: i
               })
            }, t.fromTo = function (e, t, r) {
               return te(2, arguments)
            }, t.set = function (e, r) {
               return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(e, r)
            }, t.killTweensOf = function (e, t, r) {
               return E.killTweensOf(e, t, r)
            }, t
         }(tq);
         eI(re.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
         }), eE("staggerTo,staggerFrom,staggerFromTo", function (e) {
            re[e] = function () {
               var t = new tY,
                  r = ti.call(arguments, 0);
               return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r)
            }
         });
         var rt = function (e, t, r) {
               return e[t] = r
            },
            rr = function (e, t, r) {
               return e[t](r)
            },
            rn = function (e, t, r, n) {
               return e[t](n.fp, r)
            },
            ri = function (e, t, r) {
               return e.setAttribute(t, r)
            },
            ro = function (e, t) {
               return U(e[t]) ? rr : q(e[t]) && e.setAttribute ? ri : rt
            },
            ra = function (e, t) {
               return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
            },
            rs = function (e, t) {
               return t.set(t.t, t.p, !!(t.s + t.c * e), t)
            },
            rl = function (e, t) {
               var r = t._pt,
                  n = "";
               if (!e && t.b) n = t.b;
               else if (1 === e && t.e) n = t.e;
               else {
                  for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + n, r = r._next;
                  n += t.c
               }
               t.set(t.t, t.p, n, t)
            },
            ru = function (e, t) {
               for (var r = t._pt; r;) r.r(e, r.d), r = r._next
            },
            rc = function (e, t, r, n) {
               for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(e, t, r), o = i
            },
            rf = function (e) {
               for (var t, r, n = this._pt; n;) r = n._next, (n.p !== e || n.op) && n.op !== e ? n.dep || (t = 1) : eH(this, n, "_pt"), n = r;
               return !t
            },
            rd = function (e, t, r, n) {
               n.mSet(e, t, n.m.call(n.tween, r, n.mt), n)
            },
            rh = function (e) {
               for (var t, r, n, i, o = e._pt; o;) {
                  for (t = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                  (o._prev = r ? r._prev : i) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : i = o, o = t
               }
               e._pt = n
            },
            rp = function () {
               function e(e, t, r, n, i, o, a, s, l) {
                  this.t = t, this.s = n, this.c = i, this.p = r, this.r = o || ra, this.d = a || this, this.set = s || rt, this.pr = l || 0, this._next = e, e && (e._prev = this)
               }
               return e.prototype.modifier = function (e, t, r) {
                  this.mSet = this.mSet || this.set, this.set = rd, this.m = e, this.mt = r, this.tween = t
               }, e
            }();
         eE(ex + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (e) {
            return eg[e] = 1
         }), eo.TweenMax = eo.TweenLite = re, eo.TimelineLite = eo.TimelineMax = tY, E = new tY({
            sortChildren: !1,
            defaults: I,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
         }), R.stringFilter = tk;
         var rg = [],
            rm = {},
            rv = [],
            ry = 0,
            r_ = 0,
            rb = function (e) {
               return (rm[e] || rv).map(function (e) {
                  return e()
               })
            },
            rw = function () {
               var e = Date.now(),
                  t = [];
               e - ry > 2 && (rb("matchMediaInit"), rg.forEach(function (e) {
                  var r, n, i, o, a = e.queries,
                     s = e.conditions;
                  for (n in a)(r = O.matchMedia(a[n]).matches) && (i = 1), r !== s[n] && (s[n] = r, o = 1);
                  o && (e.revert(), i && t.push(e))
               }), rb("matchMediaRevert"), t.forEach(function (e) {
                  return e.onMatch(e, function (t) {
                     return e.add(null, t)
                  })
               }), ry = e, rb("matchMedia"))
            },
            rx = function () {
               function e(e, t) {
                  this.selector = t && ts(t), this.data = [], this._r = [], this.isReverted = !1, this.id = r_++, e && this.add(e)
               }
               var t = e.prototype;
               return t.add = function (e, t, r) {
                  U(e) && (r = t, t = e, e = U);
                  var n = this,
                     i = function () {
                        var e, i = P,
                           o = n.selector;
                        return i && i !== n && i.data.push(n), r && (n.selector = ts(r)), P = n, e = t.apply(n, arguments), U(e) && n._r.push(e), P = i, n.selector = o, n.isReverted = !1, e
                     };
                  return n.last = i, e === U ? i(n, function (e) {
                     return n.add(null, e)
                  }) : e ? n[e] = i : i
               }, t.ignore = function (e) {
                  var t = P;
                  P = null, e(this), P = t
               }, t.getTweens = function () {
                  var t = [];
                  return this.data.forEach(function (r) {
                     return r instanceof e ? t.push.apply(t, r.getTweens()) : r instanceof re && !(r.parent && "nested" === r.parent.data) && t.push(r)
                  }), t
               }, t.clear = function () {
                  this._r.length = this.data.length = 0
               }, t.kill = function (e, t) {
                  var r = this;
                  if (e ? function () {
                        for (var t, n = r.getTweens(), i = r.data.length; i--;) "isFlip" === (t = r.data[i]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function (e) {
                           return n.splice(n.indexOf(e), 1)
                        }));
                        for (n.map(function (e) {
                              return {
                                 g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                                 t: e
                              }
                           }).sort(function (e, t) {
                              return t.g - e.g || -1 / 0
                           }).forEach(function (t) {
                              return t.t.revert(e)
                           }), i = r.data.length; i--;)(t = r.data[i]) instanceof tY ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : t instanceof re || !t.revert || t.revert(e);
                        r._r.forEach(function (t) {
                           return t(e, r)
                        }), r.isReverted = !0
                     }() : this.data.forEach(function (e) {
                        return e.kill && e.kill()
                     }), this.clear(), t)
                     for (var n = rg.length; n--;) rg[n].id === this.id && rg.splice(n, 1)
               }, t.revert = function (e) {
                  this.kill(e || {})
               }, e
            }(),
            rS = function () {
               function e(e) {
                  this.contexts = [], this.scope = e, P && P.data.push(this)
               }
               var t = e.prototype;
               return t.add = function (e, t, r) {
                  Y(e) || (e = {
                     matches: e
                  });
                  var n, i, o, a = new rx(0, r || this.scope),
                     s = a.conditions = {};
                  for (i in P && !a.selector && (a.selector = P.selector), this.contexts.push(a), t = a.add("onMatch", t), a.queries = e, e) "all" === i ? o = 1 : (n = O.matchMedia(e[i])) && (0 > rg.indexOf(a) && rg.push(a), (s[i] = n.matches) && (o = 1), n.addListener ? n.addListener(rw) : n.addEventListener("change", rw));
                  return o && t(a, function (e) {
                     return a.add(null, e)
                  }), this
               }, t.revert = function (e) {
                  this.kill(e || {})
               }, t.kill = function (e) {
                  this.contexts.forEach(function (t) {
                     return t.kill(e, !0)
                  })
               }, e
            }(),
            rT = {
               registerPlugin: function () {
                  for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                  t.forEach(function (e) {
                     return tb(e)
                  })
               },
               timeline: function (e) {
                  return new tY(e)
               },
               getTweensOf: function (e, t) {
                  return E.getTweensOf(e, t)
               },
               getProperty: function (e, t, r, n) {
                  H(e) && (e = ta(e)[0]);
                  var i = eT(e || {}).get,
                     o = r ? eR : eD;
                  return "native" === r && (r = ""), e ? t ? o((ey[t] && ey[t].get || i)(e, t, r, n)) : function (t, r, n) {
                     return o((ey[t] && ey[t].get || i)(e, t, r, n))
                  } : e
               },
               quickSetter: function (e, t, r) {
                  if ((e = ta(e)).length > 1) {
                     var n = e.map(function (e) {
                           return rk.quickSetter(e, t, r)
                        }),
                        i = n.length;
                     return function (e) {
                        for (var t = i; t--;) n[t](e)
                     }
                  }
                  e = e[0] || {};
                  var o = ey[t],
                     a = eT(e),
                     s = a.harness && (a.harness.aliases || {})[t] || t,
                     l = o ? function (t) {
                        var n = new o;
                        M._pt = 0, n.init(e, r ? t + r : t, M, 0, [e]), n.render(1, n), M._pt && ru(1, M)
                     } : a.set(e, s);
                  return o ? l : function (t) {
                     return l(e, s, r ? t + r : t, a, 1)
                  }
               },
               quickTo: function (e, t, r) {
                  var n, i = rk.to(e, ez(((n = {})[t] = "+=0.1", n.paused = !0, n), r || {})),
                     o = function (e, r, n) {
                        return i.resetTo(t, e, r, n)
                     };
                  return o.tween = i, o
               },
               isTweening: function (e) {
                  return E.getTweensOf(e, !0).length > 0
               },
               defaults: function (e) {
                  return e && e.ease && (e.ease = tF(e.ease, I.ease)), eN(I, e || {})
               },
               config: function (e) {
                  return eN(R, e || {})
               },
               registerEffect: function (e) {
                  var t = e.name,
                     r = e.effect,
                     n = e.plugins,
                     i = e.defaults,
                     o = e.extendTimeline;
                  (n || "").split(",").forEach(function (e) {
                     return e && !ey[e] && !eo[e] && eu(t + " effect requires " + e + " plugin.")
                  }), e_[t] = function (e, t, n) {
                     return r(ta(e), eI(t || {}, i), n)
                  }, o && (tY.prototype[t] = function (e, r, n) {
                     return this.add(e_[t](e, Y(r) ? r : (n = r) && {}, this), n)
                  })
               },
               registerEase: function (e, t) {
                  tA[e] = tF(t)
               },
               parseEase: function (e, t) {
                  return arguments.length ? tF(e, t) : tA
               },
               getById: function (e) {
                  return E.getById(e)
               },
               exportRoot: function (e, t) {
                  void 0 === e && (e = {});
                  var r, n, i = new tY(e);
                  for (i.smoothChildTiming = X(e.smoothChildTiming), E.remove(i), i._dp = 0, i._time = i._tTime = E._time, r = E._first; r;) n = r._next, (t || !(!r._dur && r instanceof re && r.vars.onComplete === r._targets[0])) && eQ(i, r, r._start - r._delay), r = n;
                  return eQ(E, i, 0), i
               },
               context: function (e, t) {
                  return e ? new rx(e, t) : P
               },
               matchMedia: function (e) {
                  return new rS(e)
               },
               matchMediaRefresh: function () {
                  return rg.forEach(function (e) {
                     var t, r, n = e.conditions;
                     for (r in n) n[r] && (n[r] = !1, t = 1);
                     t && e.revert()
                  }) || rw()
               },
               addEventListener: function (e, t) {
                  var r = rm[e] || (rm[e] = []);
                  ~r.indexOf(t) || r.push(t)
               },
               removeEventListener: function (e, t) {
                  var r = rm[e],
                     n = r && r.indexOf(t);
                  n >= 0 && r.splice(n, 1)
               },
               utils: {
                  wrap: function e(t, r, n) {
                     var i = r - t;
                     return K(t) ? th(t, e(0, t.length), r) : tt(n, function (e) {
                        return (i + (e - t) % i) % i + t
                     })
                  },
                  wrapYoyo: function e(t, r, n) {
                     var i = r - t,
                        o = 2 * i;
                     return K(t) ? th(t, e(0, t.length - 1), r) : tt(n, function (e) {
                        return e = (o + (e - t) % o) % o || 0, t + (e > i ? o - e : e)
                     })
                  },
                  distribute: tu,
                  random: td,
                  snap: tf,
                  normalize: function (e, t, r) {
                     return tg(e, t, 0, 1, r)
                  },
                  getUnit: tn,
                  clamp: function (e, t, r) {
                     return tt(r, function (r) {
                        return tr(e, t, r)
                     })
                  },
                  splitColor: tS,
                  toArray: ta,
                  selector: ts,
                  mapRange: tg,
                  pipe: function () {
                     for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                     return function (e) {
                        return t.reduce(function (e, t) {
                           return t(e)
                        }, e)
                     }
                  },
                  unitize: function (e, t) {
                     return function (r) {
                        return e(parseFloat(r)) + (t || tn(r))
                     }
                  },
                  interpolate: function e(t, r, n, i) {
                     var o = isNaN(t + r) ? 0 : function (e) {
                        return (1 - e) * t + e * r
                     };
                     if (!o) {
                        var a, s, l, u, c, f = H(t),
                           d = {};
                        if (!0 === n && (i = 1) && (n = null), f) t = {
                           p: t
                        }, r = {
                           p: r
                        };
                        else if (K(t) && !K(r)) {
                           for (s = 1, l = [], c = (u = t.length) - 2; s < u; s++) l.push(e(t[s - 1], t[s]));
                           u--, o = function (e) {
                              var t = Math.min(c, ~~(e *= u));
                              return l[t](e - t)
                           }, n = r
                        } else i || (t = ez(K(t) ? [] : {}, t));
                        if (!l) {
                           for (a in r) t0.call(d, t, a, "get", r[a]);
                           o = function (e) {
                              return ru(e, d) || (f ? t.p : t)
                           }
                        }
                     }
                     return tt(n, o)
                  },
                  shuffle: tl
               },
               install: es,
               effects: e_,
               ticker: tC,
               updateRoot: tY.updateRoot,
               plugins: ey,
               globalTimeline: E,
               core: {
                  PropTween: rp,
                  globals: ec,
                  Tween: re,
                  Timeline: tY,
                  Animation: tq,
                  getCache: eT,
                  _removeLinkedListItem: eH,
                  reverting: function () {
                     return T
                  },
                  context: function (e) {
                     return e && P && (P.data.push(e), e._ctx = P), P
                  },
                  suppressOverwrites: function (e) {
                     return S = e
                  }
               }
            };
         eE("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
            return rT[e] = re[e]
         }), tC.add(tY.updateRoot), M = rT.to({}, {
            duration: 0
         });
         var rP = function (e, t) {
               for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
               return r
            },
            rE = function (e, t) {
               var r, n, i, o = e._targets;
               for (r in t)
                  for (n = o.length; n--;)(i = e._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = rP(i, r)), i && i.modifier && i.modifier(t[r], e, o[n], r))
            },
            rO = function (e, t) {
               return {
                  name: e,
                  rawVars: 1,
                  init: function (e, r, n) {
                     n._onInit = function (e) {
                        var n, i;
                        if (H(r) && (n = {}, eE(r, function (e) {
                              return n[e] = 1
                           }), r = n), t) {
                           for (i in n = {}, r) n[i] = t(r[i]);
                           r = n
                        }
                        rE(e, r)
                     }
                  }
               }
            },
            rk = rT.registerPlugin({
               name: "attr",
               init: function (e, t, r, n, i) {
                  var o, a, s;
                  for (o in this.tween = r, t) s = e.getAttribute(o) || "", (a = this.add(e, "setAttribute", (s || 0) + "", t[o], n, i, 0, 0, o)).op = o, a.b = s, this._props.push(o)
               },
               render: function (e, t) {
                  for (var r = t._pt; r;) T ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
               }
            }, {
               name: "endArray",
               init: function (e, t) {
                  for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
               }
            }, rO("roundProps", tc), rO("modifiers"), rO("snap", tf)) || rT;
         re.version = tY.version = rk.version = "3.12.5", j = 1, $() && tj(), tA.Power0, tA.Power1, tA.Power2, tA.Power3, tA.Power4, tA.Linear, tA.Quad, tA.Cubic, tA.Quart, tA.Quint, tA.Strong, tA.Elastic, tA.Back, tA.SteppedEase, tA.Bounce, tA.Sine, tA.Expo, tA.Circ;
         /*!
          * CSSPlugin 3.12.5
          * https://gsap.com
          *
          * Copyright 2008-2024, GreenSock. All rights reserved.
          * Subject to the terms at https://gsap.com/standard-license or for
          * Club GSAP members, the agreement issued with that membership.
          * @author: Jack Doyle, jack@greensock.com
          */
         var rC, rj, rA, rM, rD, rR, rI, rz = {},
            rN = 180 / Math.PI,
            rL = Math.PI / 180,
            rF = Math.atan2,
            rB = /([A-Z])/g,
            rV = /(left|right|width|margin|padding|x)/i,
            rH = /[\s,\(]\S/,
            rU = {
               autoAlpha: "opacity,visibility",
               scale: "scaleX,scaleY",
               alpha: "opacity"
            },
            rW = function (e, t) {
               return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
            },
            rq = function (e, t) {
               return t.set(t.t, t.p, 1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
            },
            rY = function (e, t) {
               return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
            },
            rX = function (e, t) {
               var r = t.s + t.c * e;
               t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
            },
            r$ = function (e, t) {
               return t.set(t.t, t.p, e ? t.e : t.b, t)
            },
            rZ = function (e, t) {
               return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
            },
            rG = function (e, t, r) {
               return e.style[t] = r
            },
            rK = function (e, t, r) {
               return e.style.setProperty(t, r)
            },
            rJ = function (e, t, r) {
               return e._gsap[t] = r
            },
            rQ = function (e, t, r) {
               return e._gsap.scaleX = e._gsap.scaleY = r
            },
            r0 = function (e, t, r, n, i) {
               var o = e._gsap;
               o.scaleX = o.scaleY = r, o.renderTransform(i, o)
            },
            r1 = function (e, t, r, n, i) {
               var o = e._gsap;
               o[t] = r, o.renderTransform(i, o)
            },
            r2 = "transform",
            r5 = r2 + "Origin",
            r3 = function e(t, r) {
               var n = this,
                  i = this.target,
                  o = i.style,
                  a = i._gsap;
               if (t in rz && o) {
                  if (this.tfm = this.tfm || {}, "transform" === t) return rU.transform.split(",").forEach(function (t) {
                     return e.call(n, t, r)
                  });
                  if (~(t = rU[t] || t).indexOf(",") ? t.split(",").forEach(function (e) {
                        return n.tfm[e] = nd(i, e)
                     }) : this.tfm[t] = a.x ? a[t] : nd(i, t), t === r5 && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(r2) >= 0) return;
                  a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(r5, r, "")), t = r2
               }(o || r) && this.props.push(t, r, o[t])
            },
            r8 = function (e) {
               e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
            },
            r9 = function () {
               var e, t, r = this.props,
                  n = this.target,
                  i = n.style,
                  o = n._gsap;
               for (e = 0; e < r.length; e += 3) r[e + 1] ? n[r[e]] = r[e + 2] : r[e + 2] ? i[r[e]] = r[e + 2] : i.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(rB, "-$1").toLowerCase());
               if (this.tfm) {
                  for (t in this.tfm) o[t] = this.tfm[t];
                  o.svg && (o.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (e = rR()) && e.isStart || i[r2] || (r8(i), o.zOrigin && i[r5] && (i[r5] += " " + o.zOrigin + "px", o.zOrigin = 0, o.renderTransform()), o.uncache = 1)
               }
            },
            r6 = function (e, t) {
               var r = {
                  target: e,
                  props: [],
                  revert: r9,
                  save: r3
               };
               return e._gsap || rk.core.getCache(e), t && t.split(",").forEach(function (e) {
                  return r.save(e)
               }), r
            },
            r4 = function (e, t) {
               var r = rC.createElementNS ? rC.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : rC.createElement(e);
               return r && r.style ? r : rC.createElement(e)
            },
            r7 = function e(t, r, n) {
               var i = getComputedStyle(t);
               return i[r] || i.getPropertyValue(r.replace(rB, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && e(t, nt(r) || r, 1) || ""
            },
            ne = "O,Moz,ms,Ms,Webkit".split(","),
            nt = function (e, t, r) {
               var n = (t || rM).style,
                  i = 5;
               if (e in n && !r) return e;
               for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(ne[i] + e in n););
               return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ne[i] : "") + e
            },
            nr = function () {
               "undefined" != typeof window && window.document && (rj = (rC = window.document).documentElement, rM = r4("div") || {
                  style: {}
               }, r4("div"), r5 = (r2 = nt(r2)) + "Origin", rM.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", rI = !!nt("perspective"), rR = rk.core.reverting, rA = 1)
            },
            nn = function e(t) {
               var r, n = r4("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                  i = this.parentNode,
                  o = this.nextSibling,
                  a = this.style.cssText;
               if (rj.appendChild(n), n.appendChild(this), this.style.display = "block", t) try {
                  r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
               } catch (e) {} else this._gsapBBox && (r = this._gsapBBox());
               return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), rj.removeChild(n), this.style.cssText = a, r
            },
            ni = function (e, t) {
               for (var r = t.length; r--;)
                  if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
            },
            no = function (e) {
               var t;
               try {
                  t = e.getBBox()
               } catch (r) {
                  t = nn.call(e, !0)
               }
               return t && (t.width || t.height) || e.getBBox === nn || (t = nn.call(e, !0)), !t || t.width || t.x || t.y ? t : {
                  x: +ni(e, ["x", "cx", "x1"]) || 0,
                  y: +ni(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0
               }
            },
            na = function (e) {
               return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && no(e))
            },
            ns = function (e, t) {
               if (t) {
                  var r, n = e.style;
                  t in rz && t !== r5 && (t = r2), n.removeProperty ? (("ms" === (r = t.substr(0, 2)) || "webkit" === t.substr(0, 6)) && (t = "-" + t), n.removeProperty("--" === r ? t : t.replace(rB, "-$1").toLowerCase())) : n.removeAttribute(t)
               }
            },
            nl = function (e, t, r, n, i, o) {
               var a = new rp(e._pt, t, r, 0, 1, o ? rZ : r$);
               return e._pt = a, a.b = n, a.e = i, e._props.push(r), a
            },
            nu = {
               deg: 1,
               rad: 1,
               turn: 1
            },
            nc = {
               grid: 1,
               flex: 1
            },
            nf = function e(t, r, n, i) {
               var o, a, s, l, u = parseFloat(n) || 0,
                  c = (n + "").trim().substr((u + "").length) || "px",
                  f = rM.style,
                  d = rV.test(r),
                  h = "svg" === t.tagName.toLowerCase(),
                  p = (h ? "client" : "offset") + (d ? "Width" : "Height"),
                  g = "px" === i,
                  m = "%" === i;
               if (i === c || !u || nu[i] || nu[c]) return u;
               if ("px" === c || g || (u = e(t, r, n, "px")), l = t.getCTM && na(t), (m || "%" === c) && (rz[r] || ~r.indexOf("adius"))) return o = l ? t.getBBox()[d ? "width" : "height"] : t[p], eO(m ? u / o * 100 : u / 100 * o);
               if (f[d ? "width" : "height"] = 100 + (g ? c : i), a = ~r.indexOf("adius") || "em" === i && t.appendChild && !h ? t : t.parentNode, l && (a = (t.ownerSVGElement || {}).parentNode), a && a !== rC && a.appendChild || (a = rC.body), (s = a._gsap) && m && s.width && d && s.time === tC.time && !s.uncache) return eO(u / s.width * 100);
               if (m && ("height" === r || "width" === r)) {
                  var v = t.style[r];
                  t.style[r] = 100 + i, o = t[p], v ? t.style[r] = v : ns(t, r)
               } else(m || "%" === c) && !nc[r7(a, "display")] && (f.position = r7(t, "position")), a === t && (f.position = "static"), a.appendChild(rM), o = rM[p], a.removeChild(rM), f.position = "absolute";
               return d && m && ((s = eT(a)).time = tC.time, s.width = a[p]), eO(g ? o * u / 100 : o && u ? 100 / o * u : 0)
            },
            nd = function (e, t, r, n) {
               var i;
               return rA || nr(), t in rU && "transform" !== t && ~(t = rU[t]).indexOf(",") && (t = t.split(",")[0]), rz[t] && "transform" !== t ? (i = nT(e, n), i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : nP(r7(e, r5)) + " " + i.zOrigin + "px") : (!(i = e.style[t]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = nv[t] && nv[t](e, t, r) || r7(e, t) || eP(e, t) || ("opacity" === t ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? nf(e, t, i, r) + r : i
            },
            nh = function (e, t, r, n) {
               if (!r || "none" === r) {
                  var i = nt(t, e, 1),
                     o = i && r7(e, i, 1);
                  o && o !== r ? (t = i, r = o) : "borderColor" === t && (r = r7(e, "borderTopColor"))
               }
               var a, s, l, u, c, f, d, h, p, g, m, v = new rp(this._pt, e.style, t, 0, 1, rl),
                  y = 0,
                  _ = 0;
               if (v.b = r, v.e = n, r += "", "auto" == (n += "") && (f = e.style[t], e.style[t] = n, n = r7(e, t) || n, f ? e.style[t] = f : ns(e, t)), tk(a = [r, n]), r = a[0], n = a[1], l = r.match(ee) || [], (n.match(ee) || []).length) {
                  for (; s = ee.exec(n);) d = s[0], p = n.substring(y, s.index), c ? c = (c + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (c = 1), d !== (f = l[_++] || "") && (u = parseFloat(f) || 0, m = f.substr((u + "").length), "=" === d.charAt(1) && (d = eC(u, d) + m), h = parseFloat(d), g = d.substr((h + "").length), y = ee.lastIndex - g.length, g || (g = g || R.units[t] || m, y !== n.length || (n += g, v.e += g)), m !== g && (u = nf(e, t, f, g) || 0), v._pt = {
                     _next: v._pt,
                     p: p || 1 === _ ? p : ",",
                     s: u,
                     c: h - u,
                     m: c && c < 4 || "zIndex" === t ? Math.round : 0
                  });
                  v.c = y < n.length ? n.substring(y, n.length) : ""
               } else v.r = "display" === t && "none" === n ? rZ : r$;
               return er.test(n) && (v.e = 0), this._pt = v, v
            },
            np = {
               top: "0%",
               bottom: "100%",
               left: "0%",
               right: "100%",
               center: "50%"
            },
            ng = function (e) {
               var t = e.split(" "),
                  r = t[0],
                  n = t[1] || "50%";
               return ("top" === r || "bottom" === r || "left" === n || "right" === n) && (e = r, r = n, n = e), t[0] = np[r] || r, t[1] = np[n] || n, t.join(" ")
            },
            nm = function (e, t) {
               if (t.tween && t.tween._time === t.tween._dur) {
                  var r, n, i, o = t.t,
                     a = o.style,
                     s = t.u,
                     l = o._gsap;
                  if ("all" === s || !0 === s) a.cssText = "", n = 1;
                  else
                     for (i = (s = s.split(",")).length; --i > -1;) rz[r = s[i]] && (n = 1, r = "transformOrigin" === r ? r5 : r2), ns(o, r);
                  n && (ns(o, r2), l && (l.svg && o.removeAttribute("transform"), nT(o, 1), l.uncache = 1, r8(a)))
               }
            },
            nv = {
               clearProps: function (e, t, r, n, i) {
                  if ("isFromStart" !== i.data) {
                     var o = e._pt = new rp(e._pt, t, r, 0, 0, nm);
                     return o.u = n, o.pr = -10, o.tween = i, e._props.push(r), 1
                  }
               }
            },
            ny = [1, 0, 0, 1, 0, 0],
            n_ = {},
            nb = function (e) {
               return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
            },
            nw = function (e) {
               var t = r7(e, r2);
               return nb(t) ? ny : t.substr(7).match(Q).map(eO)
            },
            nx = function (e, t) {
               var r, n, i, o, a = e._gsap || eT(e),
                  s = e.style,
                  l = nw(e);
               return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? ny : l : (l !== ny || e.offsetParent || e === rj || a.svg || (i = s.display, s.display = "block", (r = e.parentNode) && e.offsetParent || (o = 1, n = e.nextElementSibling, rj.appendChild(e)), l = nw(e), i ? s.display = i : ns(e, "display"), o && (n ? r.insertBefore(e, n) : r ? r.appendChild(e) : rj.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
            },
            nS = function (e, t, r, n, i, o) {
               var a, s, l, u, c = e._gsap,
                  f = i || nx(e, !0),
                  d = c.xOrigin || 0,
                  h = c.yOrigin || 0,
                  p = c.xOffset || 0,
                  g = c.yOffset || 0,
                  m = f[0],
                  v = f[1],
                  y = f[2],
                  _ = f[3],
                  b = f[4],
                  w = f[5],
                  x = t.split(" "),
                  S = parseFloat(x[0]) || 0,
                  T = parseFloat(x[1]) || 0;
               r ? f !== ny && (s = m * _ - v * y) && (l = _ / s * S + -y / s * T + (y * w - _ * b) / s, u = -v / s * S + m / s * T - (m * w - v * b) / s, S = l, T = u) : (S = (a = no(e)).x + (~x[0].indexOf("%") ? S / 100 * a.width : S), T = a.y + (~(x[1] || x[0]).indexOf("%") ? T / 100 * a.height : T)), n || !1 !== n && c.smooth ? (b = S - d, w = T - h, c.xOffset = p + (b * m + w * y) - b, c.yOffset = g + (b * v + w * _) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = S, c.yOrigin = T, c.smooth = !!n, c.origin = t, c.originIsAbsolute = !!r, e.style[r5] = "0px 0px", o && (nl(o, c, "xOrigin", d, S), nl(o, c, "yOrigin", h, T), nl(o, c, "xOffset", p, c.xOffset), nl(o, c, "yOffset", g, c.yOffset)), e.setAttribute("data-svg-origin", S + " " + T)
            },
            nT = function (e, t) {
               var r = e._gsap || new tW(e);
               if ("x" in r && !t && !r.uncache) return r;
               var n, i, o, a, s, l, u, c, f, d, h, p, g, m, v, y, _, b, w, x, S, T, P, E, O, k, C, j, A, M, D, I, z = e.style,
                  N = r.scaleX < 0,
                  L = getComputedStyle(e),
                  F = r7(e, r5) || "0";
               return n = i = o = l = u = c = f = d = h = 0, a = s = 1, r.svg = !!(e.getCTM && na(e)), L.translate && (("none" !== L.translate || "none" !== L.scale || "none" !== L.rotate) && (z[r2] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[r2] ? L[r2] : "")), z.scale = z.rotate = z.translate = "none"), m = nx(e, r.svg), r.svg && (r.uncache ? (O = e.getBBox(), F = r.xOrigin - O.x + "px " + (r.yOrigin - O.y) + "px", E = "") : E = !t && e.getAttribute("data-svg-origin"), nS(e, E || F, !!E || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, g = r.yOrigin || 0, m !== ny && (b = m[0], w = m[1], x = m[2], S = m[3], n = T = m[4], i = P = m[5], 6 === m.length ? (a = Math.sqrt(b * b + w * w), s = Math.sqrt(S * S + x * x), l = b || w ? rF(w, b) * rN : 0, (f = x || S ? rF(x, S) * rN + l : 0) && (s *= Math.abs(Math.cos(f * rL))), r.svg && (n -= p - (p * b + g * x), i -= g - (p * w + g * S))) : (I = m[6], M = m[7], C = m[8], j = m[9], A = m[10], D = m[11], n = m[12], i = m[13], o = m[14], u = (v = rF(I, A)) * rN, v && (E = T * (y = Math.cos(-v)) + C * (_ = Math.sin(-v)), O = P * y + j * _, k = I * y + A * _, C = -(T * _) + C * y, j = -(P * _) + j * y, A = -(I * _) + A * y, D = -(M * _) + D * y, T = E, P = O, I = k), c = (v = rF(-x, A)) * rN, v && (E = b * (y = Math.cos(-v)) - C * (_ = Math.sin(-v)), O = w * y - j * _, k = x * y - A * _, D = S * _ + D * y, b = E, w = O, x = k), l = (v = rF(w, b)) * rN, v && (E = b * (y = Math.cos(v)) + w * (_ = Math.sin(v)), O = T * y + P * _, w = w * y - b * _, P = P * y - T * _, b = E, T = O), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), a = eO(Math.sqrt(b * b + w * w + x * x)), s = eO(Math.sqrt(P * P + I * I)), f = Math.abs(v = rF(T, P)) > 2e-4 ? v * rN : 0, h = D ? 1 / (D < 0 ? -D : D) : 0), r.svg && (E = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !nb(r7(e, r2)), E && e.setAttribute("transform", E))), Math.abs(f) > 90 && 270 > Math.abs(f) && (N ? (a *= -1, f += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (s *= -1, f += f <= 0 ? 180 : -180)), t = t || r.uncache, r.x = n - ((r.xPercent = n && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = i - ((r.yPercent = i && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = o + "px", r.scaleX = eO(a), r.scaleY = eO(s), r.rotation = eO(l) + "deg", r.rotationX = eO(u) + "deg", r.rotationY = eO(c) + "deg", r.skewX = f + "deg", r.skewY = d + "deg", r.transformPerspective = h + "px", (r.zOrigin = parseFloat(F.split(" ")[2]) || !t && r.zOrigin || 0) && (z[r5] = nP(F)), r.xOffset = r.yOffset = 0, r.force3D = R.force3D, r.renderTransform = r.svg ? nj : rI ? nC : nO, r.uncache = 0, r
            },
            nP = function (e) {
               return (e = e.split(" "))[0] + " " + e[1]
            },
            nE = function (e, t, r) {
               var n = tn(t);
               return eO(parseFloat(t) + parseFloat(nf(e, "x", r + "px", n))) + n
            },
            nO = function (e, t) {
               t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, nC(e, t)
            },
            nk = "0deg",
            nC = function (e, t) {
               var r = t || this,
                  n = r.xPercent,
                  i = r.yPercent,
                  o = r.x,
                  a = r.y,
                  s = r.z,
                  l = r.rotation,
                  u = r.rotationY,
                  c = r.rotationX,
                  f = r.skewX,
                  d = r.skewY,
                  h = r.scaleX,
                  p = r.scaleY,
                  g = r.transformPerspective,
                  m = r.force3D,
                  v = r.target,
                  y = r.zOrigin,
                  _ = "",
                  b = "auto" === m && e && 1 !== e || !0 === m;
               if (y && (c !== nk || u !== nk)) {
                  var w, x = parseFloat(u) * rL,
                     S = Math.sin(x),
                     T = Math.cos(x);
                  o = nE(v, o, -(S * (w = Math.cos(x = parseFloat(c) * rL)) * y)), a = nE(v, a, -(-Math.sin(x) * y)), s = nE(v, s, -(T * w * y) + y)
               }
               "0px" !== g && (_ += "perspective(" + g + ") "), (n || i) && (_ += "translate(" + n + "%, " + i + "%) "), (b || "0px" !== o || "0px" !== a || "0px" !== s) && (_ += "0px" !== s || b ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + ") "), l !== nk && (_ += "rotate(" + l + ") "), u !== nk && (_ += "rotateY(" + u + ") "), c !== nk && (_ += "rotateX(" + c + ") "), (f !== nk || d !== nk) && (_ += "skew(" + f + ", " + d + ") "), (1 !== h || 1 !== p) && (_ += "scale(" + h + ", " + p + ") "), v.style[r2] = _ || "translate(0, 0)"
            },
            nj = function (e, t) {
               var r, n, i, o, a, s = t || this,
                  l = s.xPercent,
                  u = s.yPercent,
                  c = s.x,
                  f = s.y,
                  d = s.rotation,
                  h = s.skewX,
                  p = s.skewY,
                  g = s.scaleX,
                  m = s.scaleY,
                  v = s.target,
                  y = s.xOrigin,
                  _ = s.yOrigin,
                  b = s.xOffset,
                  w = s.yOffset,
                  x = s.forceCSS,
                  S = parseFloat(c),
                  T = parseFloat(f);
               d = parseFloat(d), h = parseFloat(h), (p = parseFloat(p)) && (h += p = parseFloat(p), d += p), d || h ? (d *= rL, h *= rL, r = Math.cos(d) * g, n = Math.sin(d) * g, i = -(Math.sin(d - h) * m), o = Math.cos(d - h) * m, h && (p *= rL, i *= a = Math.sqrt(1 + (a = Math.tan(h - p)) * a), o *= a, p && (r *= a = Math.sqrt(1 + (a = Math.tan(p)) * a), n *= a)), r = eO(r), n = eO(n), i = eO(i), o = eO(o)) : (r = g, o = m, n = i = 0), (S && !~(c + "").indexOf("px") || T && !~(f + "").indexOf("px")) && (S = nf(v, "x", c, "px"), T = nf(v, "y", f, "px")), (y || _ || b || w) && (S = eO(S + y - (y * r + _ * i) + b), T = eO(T + _ - (y * n + _ * o) + w)), (l || u) && (S = eO(S + l / 100 * (a = v.getBBox()).width), T = eO(T + u / 100 * a.height)), a = "matrix(" + r + "," + n + "," + i + "," + o + "," + S + "," + T + ")", v.setAttribute("transform", a), x && (v.style[r2] = a)
            },
            nA = function (e, t, r, n, i) {
               var o, a, s = H(i),
                  l = parseFloat(i) * (s && ~i.indexOf("rad") ? rN : 1) - n,
                  u = n + l + "deg";
               return s && ("short" === (o = i.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360), "cw" === o && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === o && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), e._pt = a = new rp(e._pt, t, r, n, l, rq), a.e = u, a.u = "deg", e._props.push(r), a
            },
            nM = function (e, t) {
               for (var r in t) e[r] = t[r];
               return e
            },
            nD = function (e, t, r) {
               var n, i, o, a, s, l, u, c = nM({}, r._gsap),
                  f = r.style;
               for (i in c.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), f[r2] = t, n = nT(r, 1), ns(r, r2), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[r2], f[r2] = t, n = nT(r, 1), f[r2] = o), rz)(o = c[i]) !== (a = n[i]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) && (s = tn(o) !== (u = tn(a)) ? nf(r, i, o, u) : parseFloat(o), l = parseFloat(a), e._pt = new rp(e._pt, n, i, s, l - s, rW), e._pt.u = u || 0, e._props.push(i));
               nM(n, c)
            };
         eE("padding,margin,Width,Radius", function (e, t) {
            var r = "Right",
               n = "Bottom",
               i = "Left",
               o = (t < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]).map(function (r) {
                  return t < 2 ? e + r : "border" + r + e
               });
            nv[t > 1 ? "border" + e : e] = function (e, t, r, n, i) {
               var a, s;
               if (arguments.length < 4) return 5 === (s = (a = o.map(function (t) {
                  return nd(e, t, r)
               })).join(" ")).split(a[0]).length ? a[0] : s;
               a = (n + "").split(" "), s = {}, o.forEach(function (e, t) {
                  return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0]
               }), e.init(t, s, i)
            }
         });
         var nR = {
            name: "css",
            register: nr,
            targetTest: function (e) {
               return e.style && e.nodeType
            },
            init: function (e, t, r, n, i) {
               var o, a, s, l, u, c, f, d, h, p, g, m, v, y, _, b, w = this._props,
                  x = e.style,
                  S = r.vars.startAt;
               for (f in rA || nr(), this.styles = this.styles || r6(e), b = this.styles.props, this.tween = r, t)
                  if ("autoRound" !== f && (a = t[f], !(ey[f] && t2(f, t, r, n, e, i)))) {
                     if (u = typeof a, c = nv[f], "function" === u && (u = typeof (a = a.call(r, n, e, i))), "string" === u && ~a.indexOf("random(") && (a = tp(a)), c) c(this, e, f, a, r) && (_ = 1);
                     else if ("--" === f.substr(0, 2)) o = (getComputedStyle(e).getPropertyValue(f) + "").trim(), a += "", tE.lastIndex = 0, tE.test(o) || (d = tn(o), h = tn(a)), h ? d !== h && (o = nf(e, f, o, h) + h) : d && (a += d), this.add(x, "setProperty", o, a, n, i, 0, 0, f), w.push(f), b.push(f, 0, x[f]);
                     else if ("undefined" !== u) {
                        if (S && f in S ? (H(o = "function" == typeof S[f] ? S[f].call(r, n, e, i) : S[f]) && ~o.indexOf("random(") && (o = tp(o)), tn(o + "") || "auto" === o || (o += R.units[f] || tn(nd(e, f)) || ""), "=" === (o + "").charAt(1) && (o = nd(e, f))) : o = nd(e, f), l = parseFloat(o), (p = "string" === u && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), s = parseFloat(a), f in rU && ("autoAlpha" === f && (1 === l && "hidden" === nd(e, "visibility") && s && (l = 0), b.push("visibility", 0, x.visibility), nl(this, x, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)), "scale" !== f && "transform" !== f && ~(f = rU[f]).indexOf(",") && (f = f.split(",")[0])), g = f in rz) {
                           if (this.styles.save(f), m || ((v = e._gsap).renderTransform && !t.parseTransform || nT(e, t.parseTransform), y = !1 !== t.smoothOrigin && v.smooth, (m = this._pt = new rp(this._pt, x, r2, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === f) this._pt = new rp(this._pt, v, "scaleY", v.scaleY, (p ? eC(v.scaleY, p + s) : s) - v.scaleY || 0, rW), this._pt.u = 0, w.push("scaleY", f), f += "X";
                           else if ("transformOrigin" === f) {
                              b.push(r5, 0, x[r5]), a = ng(a), v.svg ? nS(e, a, 0, y, 0, this) : ((h = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && nl(this, v, "zOrigin", v.zOrigin, h), nl(this, x, f, nP(o), nP(a)));
                              continue
                           } else if ("svgOrigin" === f) {
                              nS(e, a, 1, y, 0, this);
                              continue
                           } else if (f in n_) {
                              nA(this, v, f, l, p ? eC(l, p + a) : a);
                              continue
                           } else if ("smoothOrigin" === f) {
                              nl(this, v, "smooth", v.smooth, a);
                              continue
                           } else if ("force3D" === f) {
                              v[f] = a;
                              continue
                           } else if ("transform" === f) {
                              nD(this, a, e);
                              continue
                           }
                        } else f in x || (f = nt(f) || f);
                        if (g || (s || 0 === s) && (l || 0 === l) && !rH.test(a) && f in x) d = (o + "").substr((l + "").length), s || (s = 0), h = tn(a) || (f in R.units ? R.units[f] : d), d !== h && (l = nf(e, f, o, h)), this._pt = new rp(this._pt, g ? v : x, f, l, (p ? eC(l, p + s) : s) - l, g || "px" !== h && "zIndex" !== f || !1 === t.autoRound ? rW : rX), this._pt.u = h || 0, d !== h && "%" !== h && (this._pt.b = o, this._pt.r = rY);
                        else if (f in x) nh.call(this, e, f, o, p ? p + a : a);
                        else if (f in e) this.add(e, f, o || e[f], p ? p + a : a, n, i);
                        else if ("parseTransform" !== f) {
                           el(f, a);
                           continue
                        }
                        g || (f in x ? b.push(f, 0, x[f]) : b.push(f, 1, o || e[f])), w.push(f)
                     }
                  } _ && rh(this)
            },
            render: function (e, t) {
               if (t.tween._time || !rR())
                  for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
               else t.styles.revert()
            },
            get: nd,
            aliases: rU,
            getSetter: function (e, t, r) {
               var n = rU[t];
               return n && 0 > n.indexOf(",") && (t = n), t in rz && t !== r5 && (e._gsap.x || nd(e, "x")) ? r && rD === r ? "scale" === t ? rQ : rJ : (rD = r || {}, "scale" === t ? r0 : r1) : e.style && !q(e.style[t]) ? rG : ~t.indexOf("-") ? rK : ro(e, t)
            },
            core: {
               _removeProperty: ns,
               _getMatrix: nx
            }
         };
         rk.utils.checkPrefix = nt, rk.core.getStyleSaver = r6, s = eE((o = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (a = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (e) {
            rz[e] = 1
         }), eE(a, function (e) {
            R.units[e] = "deg", n_[e] = 1
         }), rU[s[13]] = o + "," + a, eE("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (e) {
            var t = e.split(":");
            rU[t[1]] = s[t[0]]
         }), eE("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (e) {
            R.units[e] = "px"
         }), rk.registerPlugin(nR);
         var nI = rk.registerPlugin(nR) || rk;
         nI.core.Tween
      },
      8035: function (e, t, r) {
         var n, i, o, a, s, l, u, c = Object.defineProperty,
            f = Object.defineProperties,
            d = Object.getOwnPropertyDescriptors,
            h = Object.getOwnPropertySymbols,
            p = Object.prototype.hasOwnProperty,
            g = Object.prototype.propertyIsEnumerable,
            m = (e, t, r) => t in e ? c(e, t, {
               enumerable: !0,
               configurable: !0,
               writable: !0,
               value: r
            }) : e[t] = r,
            v = (e, t) => {
               for (var r in t || (t = {})) p.call(t, r) && m(e, r, t[r]);
               if (h)
                  for (var r of h(t)) g.call(t, r) && m(e, r, t[r]);
               return e
            },
            y = (e, t) => f(e, d(t)),
            _ = e => c(e, "__esModule", {
               value: !0
            });
         ((e, t) => {
            for (var r in _(e), t) c(e, r, {
               get: t[r],
               enumerable: !0
            })
         })(t, {
            Atom: () => e4,
            PointerProxy: () => to,
            Ticker: () => tn,
            getPointerParts: () => eM,
            isPointer: () => eI,
            isPrism: () => eL,
            iterateAndCountTicks: () => tr,
            iterateOver: () => ti,
            pointer: () => eR,
            pointerToPrism: () => te,
            prism: () => e5,
            val: () => tt
         });
         var b = Array.isArray,
            w = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
            x = "object" == typeof self && self && self.Object === Object && self,
            S = w || x || Function("return this")(),
            T = S.Symbol,
            P = Object.prototype,
            E = P.hasOwnProperty,
            O = P.toString,
            k = T ? T.toStringTag : void 0,
            C = function (e) {
               var t = E.call(e, k),
                  r = e[k];
               try {
                  e[k] = void 0;
                  var n = !0
               } catch (e) {}
               var i = O.call(e);
               return n && (t ? e[k] = r : delete e[k]), i
            },
            j = Object.prototype.toString,
            A = T ? T.toStringTag : void 0,
            M = function (e) {
               return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : A && A in Object(e) ? C(e) : j.call(e)
            },
            D = function (e) {
               return null != e && "object" == typeof e
            },
            R = function (e) {
               return "symbol" == typeof e || D(e) && "[object Symbol]" == M(e)
            },
            I = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            z = /^\w*$/,
            N = function (e, t) {
               if (b(e)) return !1;
               var r = typeof e;
               return !!("number" == r || "symbol" == r || "boolean" == r || null == e || R(e)) || z.test(e) || !I.test(e) || null != t && e in Object(t)
            },
            L = function (e) {
               var t = typeof e;
               return null != e && ("object" == t || "function" == t)
            },
            F = function (e) {
               if (!L(e)) return !1;
               var t = M(e);
               return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            },
            B = S["__core-js_shared__"],
            V = (n = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
            H = Function.prototype.toString,
            U = function (e) {
               if (null != e) {
                  try {
                     return H.call(e)
                  } catch (e) {}
                  try {
                     return e + ""
                  } catch (e) {}
               }
               return ""
            },
            W = /^\[object .+?Constructor\]$/,
            q = Object.prototype,
            Y = Function.prototype.toString,
            X = q.hasOwnProperty,
            $ = RegExp("^" + Y.call(X).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            Z = function (e, t) {
               var r, n = null == e ? void 0 : e[t];
               return L(r = n) && (!V || !(V in r)) && (F(r) ? $ : W).test(U(r)) ? n : void 0
            },
            G = Z(Object, "create"),
            K = Object.prototype.hasOwnProperty,
            J = Object.prototype.hasOwnProperty;

         function Q(e) {
            var t = -1,
               r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
               var n = e[t];
               this.set(n[0], n[1])
            }
         }
         Q.prototype.clear = function () {
            this.__data__ = G ? G(null) : {}, this.size = 0
         }, Q.prototype.delete = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
         }, Q.prototype.get = function (e) {
            var t = this.__data__;
            if (G) {
               var r = t[e];
               return "__lodash_hash_undefined__" === r ? void 0 : r
            }
            return K.call(t, e) ? t[e] : void 0
         }, Q.prototype.has = function (e) {
            var t = this.__data__;
            return G ? void 0 !== t[e] : J.call(t, e)
         }, Q.prototype.set = function (e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = G && void 0 === t ? "__lodash_hash_undefined__" : t, this
         };
         var ee = function (e, t) {
               for (var r, n = e.length; n--;)
                  if ((r = e[n][0]) === t || r != r && t != t) return n;
               return -1
            },
            et = Array.prototype.splice;

         function er(e) {
            var t = -1,
               r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
               var n = e[t];
               this.set(n[0], n[1])
            }
         }
         er.prototype.clear = function () {
            this.__data__ = [], this.size = 0
         }, er.prototype.delete = function (e) {
            var t = this.__data__,
               r = ee(t, e);
            return !(r < 0) && (r == t.length - 1 ? t.pop() : et.call(t, r, 1), --this.size, !0)
         }, er.prototype.get = function (e) {
            var t = this.__data__,
               r = ee(t, e);
            return r < 0 ? void 0 : t[r][1]
         }, er.prototype.has = function (e) {
            return ee(this.__data__, e) > -1
         }, er.prototype.set = function (e, t) {
            var r = this.__data__,
               n = ee(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
         };
         var en = Z(S, "Map"),
            ei = function (e) {
               var t = typeof e;
               return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            },
            eo = function (e, t) {
               var r = e.__data__;
               return ei(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            };

         function ea(e) {
            var t = -1,
               r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
               var n = e[t];
               this.set(n[0], n[1])
            }
         }

         function es(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
            var r = function () {
               var n = arguments,
                  i = t ? t.apply(this, n) : n[0],
                  o = r.cache;
               if (o.has(i)) return o.get(i);
               var a = e.apply(this, n);
               return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(es.Cache || ea), r
         }
         ea.prototype.clear = function () {
            this.size = 0, this.__data__ = {
               hash: new Q,
               map: new(en || er),
               string: new Q
            }
         }, ea.prototype.delete = function (e) {
            var t = eo(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
         }, ea.prototype.get = function (e) {
            return eo(this, e).get(e)
         }, ea.prototype.has = function (e) {
            return eo(this, e).has(e)
         }, ea.prototype.set = function (e, t) {
            var r = eo(this, e),
               n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
         }, es.Cache = ea;
         var el = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            eu = /\\(\\)?/g,
            ec = (o = (i = es(function (e) {
               var t = [];
               return 46 === e.charCodeAt(0) && t.push(""), e.replace(el, function (e, r, n, i) {
                  t.push(n ? i.replace(eu, "$1") : r || e)
               }), t
            }, function (e) {
               return 500 === o.size && o.clear(), e
            })).cache, i),
            ef = function (e, t) {
               for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
               return i
            },
            ed = 1 / 0,
            eh = T ? T.prototype : void 0,
            ep = eh ? eh.toString : void 0,
            eg = function e(t) {
               if ("string" == typeof t) return t;
               if (b(t)) return ef(t, e) + "";
               if (R(t)) return ep ? ep.call(t) : "";
               var r = t + "";
               return "0" == r && 1 / t == -ed ? "-0" : r
            },
            em = 1 / 0,
            ev = function (e) {
               if ("string" == typeof e || R(e)) return e;
               var t = e + "";
               return "0" == t && 1 / e == -em ? "-0" : t
            },
            ey = function (e, t) {
               var r, n;
               r = t, n = e, t = b(r) ? r : N(r, n) ? [r] : ec(null == r ? "" : eg(r));
               for (var i = 0, o = t.length; null != e && i < o;) e = e[ev(t[i++])];
               return i && i == o ? e : void 0
            },
            e_ = function (e, t, r) {
               var n = null == e ? void 0 : ey(e, t);
               return void 0 === n ? r : n
            },
            eb = (a = Object.getPrototypeOf, s = Object, function (e) {
               return a(s(e))
            }),
            ew = Object.prototype,
            ex = Function.prototype.toString,
            eS = ew.hasOwnProperty,
            eT = ex.call(Object),
            eP = function (e) {
               if (!D(e) || "[object Object]" != M(e)) return !1;
               var t = eb(e);
               if (null === t) return !0;
               var r = eS.call(t, "constructor") && t.constructor;
               return "function" == typeof r && r instanceof r && ex.call(r) == eT
            },
            eE = function (e) {
               var t = null == e ? 0 : e.length;
               return t ? e[t - 1] : void 0
            },
            eO = new WeakMap,
            ek = new WeakMap,
            eC = Symbol("pointerMeta"),
            ej = {
               get(e, t) {
                  if (t === eC) return eO.get(e);
                  let r = ek.get(e);
                  r || (r = new Map, ek.set(e, r));
                  let n = r.get(t);
                  if (void 0 !== n) return n;
                  let i = eO.get(e),
                     o = eD({
                        root: i.root,
                        path: [...i.path, t]
                     });
                  return r.set(t, o), o
               }
            },
            eA = e => e[eC],
            eM = e => {
               let {
                  root: t,
                  path: r
               } = eA(e);
               return {
                  root: t,
                  path: r
               }
            };

         function eD(e) {
            var t;
            let r = {
                  root: e.root,
                  path: null != (t = e.path) ? t : []
               },
               n = {};
            return eO.set(n, r), new Proxy(n, ej)
         }
         var eR = eD,
            eI = e => e && !!eA(e),
            ez = (e, t, r) => {
               if (0 === t.length) return r(e);
               if (Array.isArray(e)) {
                  let [n, ...i] = t;
                  isNaN(n = parseInt(String(n), 10)) && (n = 0);
                  let o = e[n],
                     a = ez(o, i, r);
                  if (o === a) return e;
                  let s = [...e];
                  return s.splice(n, 1, a), s
               }
               if ("object" == typeof e && null !== e) {
                  let [n, ...i] = t, o = e[n], a = ez(o, i, r);
                  return o === a ? e : y(v({}, e), {
                     [n]: a
                  })
               } {
                  let [e, ...n] = t;
                  return {
                     [e]: ez(void 0, n, r)
                  }
               }
            },
            eN = class {
               constructor() {
                  this._head = void 0
               }
               peek() {
                  return this._head && this._head.data
               }
               pop() {
                  let e = this._head;
                  if (e) return this._head = e.next, e.data
               }
               push(e) {
                  let t = {
                     next: this._head,
                     data: e
                  };
                  this._head = t
               }
            };

         function eL(e) {
            return !!(e && e.isPrism && !0 === e.isPrism)
         }

         function eF() {
            let e = new eN,
               t = () => {};
            return {
               type: "Dataverse_discoveryMechanism",
               startIgnoringDependencies: () => {
                  e.push(t)
               },
               stopIgnoringDependencies: () => {
                  e.peek() !== t || e.pop()
               },
               reportResolutionStart: r => {
                  let n = e.peek();
                  n && n(r), e.push(t)
               },
               reportResolutionEnd: t => {
                  e.pop()
               },
               pushCollector: t => {
                  e.push(t)
               },
               popCollector: t => {
                  if (e.peek() !== t) throw Error("Popped collector is not on top of the stack");
                  e.pop()
               }
            }
         }
         var {
            startIgnoringDependencies: eB,
            stopIgnoringDependencies: eV,
            reportResolutionEnd: eH,
            reportResolutionStart: eU,
            pushCollector: eW,
            popCollector: eq
         } = function () {
            let e = "__dataverse_discoveryMechanism_sharedStack",
               t = "undefined" != typeof window ? window : void 0 !== r.g ? r.g : {};
            if (!t) return eF(); {
               let r = t[e];
               if (r && "object" == typeof r && "Dataverse_discoveryMechanism" === r.type) return r; {
                  let r = eF();
                  return t[e] = r, r
               }
            }
         }(), eY = () => {}, eX = class {
            constructor(e, t) {
               for (let r of (this._fn = e, this._prismInstance = t, this._didMarkDependentsAsStale = !1, this._isFresh = !1, this._cacheOfDendencyValues = new Map, this._dependents = new Set, this._dependencies = new Set, this._possiblyStaleDeps = new Set, this._scope = new eG(this), this._lastValue = void 0, this._forciblySetToStale = !1, this._reactToDependencyGoingStale = e => {
                     this._possiblyStaleDeps.add(e), this._markAsStale()
                  }, this._dependencies)) r._addDependent(this._reactToDependencyGoingStale);
               eB(), this.getValue(), eV()
            }
            get hasDependents() {
               return this._dependents.size > 0
            }
            removeDependent(e) {
               this._dependents.delete(e)
            }
            addDependent(e) {
               this._dependents.add(e)
            }
            destroy() {
               for (let e of this._dependencies) e._removeDependent(this._reactToDependencyGoingStale);
               ! function e(t) {
                  for (let r of Object.values(t.subs)) e(r);
                  t.cleanupEffects()
               }(this._scope)
            }
            getValue() {
               if (!this._isFresh) {
                  let e = this._recalculate();
                  this._lastValue = e, this._isFresh = !0, this._didMarkDependentsAsStale = !1, this._forciblySetToStale = !1
               }
               return this._lastValue
            }
            _recalculate() {
               let e;
               if (!this._forciblySetToStale && this._possiblyStaleDeps.size > 0) {
                  let e = !1;
                  for (let t of (eB(), this._possiblyStaleDeps))
                     if (this._cacheOfDendencyValues.get(t) !== t.getValue()) {
                        e = !0;
                        break
                     } if (eV(), this._possiblyStaleDeps.clear(), !e) return this._lastValue
               }
               let t = new Set;
               this._cacheOfDendencyValues.clear();
               let r = e => {
                  t.add(e), this._addDependency(e)
               };
               eW(r), eJ.push(this._scope);
               try {
                  e = this._fn()
               } catch (e) {
                  console.error(e)
               } finally {
                  eJ.pop() !== this._scope && console.warn("The Prism hook stack has slipped. This is a bug.")
               }
               for (let e of (eq(r), this._dependencies)) t.has(e) || this._removeDependency(e);
               for (let e of (this._dependencies = t, eB(), t)) this._cacheOfDendencyValues.set(e, e.getValue());
               return eV(), e
            }
            forceStale() {
               this._forciblySetToStale = !0, this._markAsStale()
            }
            _markAsStale() {
               if (!this._didMarkDependentsAsStale)
                  for (let e of (this._didMarkDependentsAsStale = !0, this._isFresh = !1, this._dependents)) e(this._prismInstance)
            }
            _addDependency(e) {
               this._dependencies.has(e) || (this._dependencies.add(e), e._addDependent(this._reactToDependencyGoingStale))
            }
            _removeDependency(e) {
               this._dependencies.has(e) && (this._dependencies.delete(e), e._removeDependent(this._reactToDependencyGoingStale))
            }
         }, e$ = {}, eZ = class {
            constructor(e) {
               this._fn = e, this.isPrism = !0, this._state = {
                  hot: !1,
                  handle: void 0
               }
            }
            get isHot() {
               return this._state.hot
            }
            onChange(e, t, r = !1) {
               let n = () => {
                     e.onThisOrNextTick(o)
                  },
                  i = e$,
                  o = () => {
                     let e = this.getValue();
                     e !== i && (i = e, t(e))
                  };
               return this._addDependent(n), r && t(i = this.getValue()), () => {
                  this._removeDependent(n), e.offThisOrNextTick(o), e.offNextTick(o)
               }
            }
            onStale(e) {
               let t = () => e();
               return this._addDependent(t), () => {
                  this._removeDependent(t)
               }
            }
            keepHot() {
               return this.onStale(() => {})
            }
            _addDependent(e) {
               this._state.hot || this._goHot(), this._state.handle.addDependent(e)
            }
            _goHot() {
               let e = new eX(this._fn, this);
               this._state = {
                  hot: !0,
                  handle: e
               }
            }
            _removeDependent(e) {
               let t = this._state;
               if (!t.hot) return;
               let r = t.handle;
               r.removeDependent(e), r.hasDependents || (this._state = {
                  hot: !1,
                  handle: void 0
               }, r.destroy())
            }
            getValue() {
               let e;
               eU(this);
               let t = this._state;
               return e = t.hot ? t.handle.getValue() : function (e) {
                  let t;
                  let r = new e2;
                  eJ.push(r);
                  try {
                     t = e()
                  } catch (e) {
                     console.error(e)
                  } finally {
                     eJ.pop() !== r && console.warn("The Prism hook stack has slipped. This is a bug.")
                  }
                  return t
               }(this._fn), eH(this), e
            }
         }, eG = class {
            constructor(e) {
               this._hotHandle = e, this._refs = new Map, this.isPrismScope = !0, this.subs = {}, this.effects = new Map, this.memos = new Map
            }
            ref(e, t) {
               let r = this._refs.get(e);
               if (void 0 !== r) return r; {
                  let r = {
                     current: t
                  };
                  return this._refs.set(e, r), r
               }
            }
            effect(e, t, r) {
               let n = this.effects.get(e);
               void 0 === n && (n = {
                  cleanup: eY,
                  deps: void 0
               }, this.effects.set(e, n)), eQ(n.deps, r) && (n.cleanup(), eB(), n.cleanup = eK(t, eY).value, eV(), n.deps = r)
            }
            memo(e, t, r) {
               let n = this.memos.get(e);
               return void 0 === n && (n = {
                  cachedValue: null,
                  deps: void 0
               }, this.memos.set(e, n)), eQ(n.deps, r) && (eB(), n.cachedValue = eK(t, void 0).value, eV(), n.deps = r), n.cachedValue
            }
            state(e, t) {
               let {
                  value: r,
                  setValue: n
               } = this.memo("state/" + e, () => {
                  let e = {
                     current: t
                  };
                  return {
                     value: e,
                     setValue: t => {
                        e.current = t, this._hotHandle.forceStale()
                     }
                  }
               }, []);
               return [r.current, n]
            }
            sub(e) {
               return this.subs[e] || (this.subs[e] = new eG(this._hotHandle)), this.subs[e]
            }
            cleanupEffects() {
               for (let e of this.effects.values()) eK(e.cleanup, void 0);
               this.effects.clear()
            }
            source(e, t) {
               return this.effect("$$source/blah", () => e(() => {
                  this._hotHandle.forceStale()
               }), [e]), t()
            }
         };

         function eK(e, t) {
            try {
               return {
                  value: e(),
                  ok: !0
               }
            } catch (e) {
               return setTimeout(function () {
                  throw e
               }), {
                  value: t,
                  ok: !1
               }
            }
         }
         var eJ = new eN;

         function eQ(e, t) {
            if (void 0 === e || void 0 === t) return !0;
            let r = e.length;
            if (r !== t.length) return !0;
            for (let n = 0; n < r; n++)
               if (e[n] !== t[n]) return !0;
            return !1
         }

         function e0(e, t, r) {
            let n = eJ.peek();
            if (!n) throw Error("prism.memo() is called outside of a prism() call.");
            return n.memo(e, t, r)
         }
         var e1 = e => new eZ(e),
            e2 = class {
               effect(e, t, r) {
                  console.warn("prism.effect() does not run in cold prisms")
               }
               memo(e, t, r) {
                  return t()
               }
               state(e, t) {
                  return [t, () => {}]
               }
               ref(e, t) {
                  return {
                     current: t
                  }
               }
               sub(e) {
                  return new e2
               }
               source(e, t) {
                  return t()
               }
            };
         e1.ref = function (e, t) {
            let r = eJ.peek();
            if (!r) throw Error("prism.ref() is called outside of a prism() call.");
            return r.ref(e, t)
         }, e1.effect = function (e, t, r) {
            let n = eJ.peek();
            if (!n) throw Error("prism.effect() is called outside of a prism() call.");
            return n.effect(e, t, r)
         }, e1.memo = e0, e1.ensurePrism = function () {
            if (!eJ.peek()) throw Error("The parent function is called outside of a prism() call.")
         }, e1.state = function (e, t) {
            let r = eJ.peek();
            if (!r) throw Error("prism.state() is called outside of a prism() call.");
            return r.state(e, t)
         }, e1.scope = function (e, t) {
            let r = eJ.peek();
            if (!r) throw Error("prism.scope() is called outside of a prism() call.");
            let n = r.sub(e);
            eJ.push(n);
            let i = eK(t, void 0).value;
            return eJ.pop(), i
         }, e1.sub = function (e, t, r) {
            return e0(e, () => e1(t), r).getValue()
         }, e1.inPrism = function () {
            return !!eJ.peek()
         }, e1.source = function (e, t) {
            let r = eJ.peek();
            if (!r) throw Error("prism.source() is called outside of a prism() call.");
            return r.source(e, t)
         };
         var e5 = e1;
         (l = u || (u = {}))[l.Dict = 0] = "Dict", l[l.Array = 1] = "Array", l[l.Other = 2] = "Other";
         var e3 = e => Array.isArray(e) ? 1 : eP(e) ? 0 : 2,
            e8 = (e, t, r = e3(e)) => 0 === r && "string" == typeof t ? e[t] : 1 === r && e9(t) ? e[t] : void 0,
            e9 = e => {
               let t = "number" == typeof e ? e : parseInt(e, 10);
               return !isNaN(t) && t >= 0 && t < 1 / 0 && (0 | t) === t
            },
            e6 = class {
               constructor(e, t) {
                  this._parent = e, this._path = t, this.children = new Map, this.identityChangeListeners = new Set
               }
               addIdentityChangeListener(e) {
                  this.identityChangeListeners.add(e)
               }
               removeIdentityChangeListener(e) {
                  this.identityChangeListeners.delete(e), this._checkForGC()
               }
               removeChild(e) {
                  this.children.delete(e), this._checkForGC()
               }
               getChild(e) {
                  return this.children.get(e)
               }
               getOrCreateChild(e) {
                  let t = this.children.get(e);
                  return t || (t = t = new e6(this, this._path.concat([e])), this.children.set(e, t)), t
               }
               _checkForGC() {
                  this.identityChangeListeners.size > 0 || this.children.size > 0 || !this._parent || this._parent.removeChild(eE(this._path))
               }
            },
            e4 = class {
               constructor(e) {
                  this.$$isPointerToPrismProvider = !0, this.pointer = eR({
                     root: this,
                     path: []
                  }), this.prism = this.pointerToPrism(this.pointer), this._onPointerValueChange = (e, t) => {
                     let {
                        path: r
                     } = eM(e), n = this._getOrCreateScopeForPath(r);
                     return n.identityChangeListeners.add(t), () => {
                        n.identityChangeListeners.delete(t)
                     }
                  }, this._currentState = e, this._rootScope = new e6(void 0, [])
               }
               set(e) {
                  let t = this._currentState;
                  this._currentState = e, this._checkUpdates(this._rootScope, t, e)
               }
               get() {
                  return this._currentState
               }
               getByPointer(e) {
                  let t = eM(eI(e) ? e : e(this.pointer)).path;
                  return this._getIn(t)
               }
               _getIn(e) {
                  return 0 === e.length ? this.get() : e_(this.get(), e)
               }
               reduce(e) {
                  this.set(e(this.get()))
               }
               reduceByPointer(e, t) {
                  var r;
                  let n = eM(eI(e) ? e : e(this.pointer)).path,
                     i = (r = this.get(), 0 === n.length ? t(r) : ez(r, n, t));
                  this.set(i)
               }
               setByPointer(e, t) {
                  this.reduceByPointer(e, () => t)
               }
               _checkUpdates(e, t, r) {
                  if (t === r) return;
                  for (let t of e.identityChangeListeners) t(r);
                  if (0 === e.children.size) return;
                  let n = e3(t),
                     i = e3(r);
                  if (2 !== n || n !== i)
                     for (let [o, a] of e.children) {
                        let e = e8(t, o, n),
                           s = e8(r, o, i);
                        this._checkUpdates(a, e, s)
                     }
               }
               _getOrCreateScopeForPath(e) {
                  let t = this._rootScope;
                  for (let r of e) t = t.getOrCreateChild(r);
                  return t
               }
               pointerToPrism(e) {
                  let {
                     path: t
                  } = eM(e), r = t => this._onPointerValueChange(e, t), n = () => this._getIn(t);
                  return e5(() => e5.source(r, n))
               }
            },
            e7 = new WeakMap,
            te = e => {
               let t = eA(e),
                  r = e7.get(t);
               if (!r) {
                  let n = t.root;
                  if (!("object" == typeof n && null !== n && !0 === n.$$isPointerToPrismProvider)) throw Error("Cannot run pointerToPrism() on a pointer whose root is not an PointerToPrismProvider");
                  r = n.pointerToPrism(e), e7.set(t, r)
               }
               return r
            },
            tt = e => eI(e) ? te(e).getValue() : eL(e) ? e.getValue() : e;

         function* tr(e) {
            let t;
            if (eI(e)) t = te(e);
            else if (eL(e)) t = e;
            else throw Error("Only pointers and prisms are supported");
            let r = 0,
               n = t.onStale(() => {
                  r++
               });
            try {
               for (;;) {
                  let e = r;
                  r = 0, yield {
                     value: t.getValue(),
                     ticks: e
                  }
               }
            } finally {
               n()
            }
         }
         var tn = class {
            constructor(e) {
               this._conf = e, this._ticking = !1, this._dormant = !0, this._numberOfDormantTicks = 0, this.__ticks = 0, this._scheduledForThisOrNextTick = new Set, this._scheduledForNextTick = new Set, this._timeAtCurrentTick = 0
            }
            get dormant() {
               return this._dormant
            }
            onThisOrNextTick(e) {
               this._scheduledForThisOrNextTick.add(e), this._dormant && this._goActive()
            }
            onNextTick(e) {
               this._scheduledForNextTick.add(e), this._dormant && this._goActive()
            }
            offThisOrNextTick(e) {
               this._scheduledForThisOrNextTick.delete(e)
            }
            offNextTick(e) {
               this._scheduledForNextTick.delete(e)
            }
            get time() {
               return this._ticking ? this._timeAtCurrentTick : performance.now()
            }
            _goActive() {
               var e, t;
               this._dormant && (this._dormant = !1, null == (t = null == (e = this._conf) ? void 0 : e.onActive) || t.call(e))
            }
            _goDormant() {
               var e, t;
               this._dormant || (this._dormant = !0, this._numberOfDormantTicks = 0, null == (t = null == (e = this._conf) ? void 0 : e.onDormant) || t.call(e))
            }
            tick(e = performance.now()) {
               if (this.__ticks++, !this._dormant && 0 === this._scheduledForNextTick.size && 0 === this._scheduledForThisOrNextTick.size && (this._numberOfDormantTicks++, this._numberOfDormantTicks >= 180)) {
                  this._goDormant();
                  return
               }
               for (let t of (this._ticking = !0, this._timeAtCurrentTick = e, this._scheduledForNextTick)) this._scheduledForThisOrNextTick.add(t);
               this._scheduledForNextTick.clear(), this._tick(0), this._ticking = !1
            }
            _tick(e) {
               let t = this.time;
               if (e > 10 && console.warn("_tick() recursing for 10 times"), e > 100) throw Error("Maximum recursion limit for _tick()");
               let r = this._scheduledForThisOrNextTick;
               for (let e of (this._scheduledForThisOrNextTick = new Set, r)) e(t);
               if (this._scheduledForThisOrNextTick.size > 0) return this._tick(e + 1)
            }
         };

         function* ti(e) {
            let t;
            if (eI(e)) t = te(e);
            else if (eL(e)) t = e;
            else throw Error("Only pointers and prisms are supported");
            let r = new tn,
               n = t.onChange(r, e => {});
            try {
               for (;;) r.tick(), yield t.getValue()
            } finally {
               n()
            }
         }
         var to = class {
            constructor(e) {
               this.$$isPointerToPrismProvider = !0, this._currentPointerBox = new e4(e), this.pointer = eR({
                  root: this,
                  path: []
               })
            }
            setPointer(e) {
               this._currentPointerBox.set(e)
            }
            pointerToPrism(e) {
               let {
                  path: t
               } = eA(e);
               return e5(() => {
                  let e = this._currentPointerBox.prism.getValue();
                  return tt(t.reduce((e, t) => e[t], e))
               })
            }
         }
      },
      460: function (e, t, r) {
         (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
            return r(1276)
         }])
      },
      3911: function (e, t, r) {
         "use strict";
         r.d(t, {
            G: function () {
               return c
            },
            N: function () {
               return u
            }
         });
         var n = r(1527),
            i = r(2720),
            o = r(6057),
            a = r.n(o),
            s = r(959);
         let l = (0, s.createContext)({});

         function u() {
            return (0, s.useContext)(l)
         }

         function c(e) {
            let {
               children: t
            } = e, r = Number(a().breakpoints.mobile.replace("px", "")), o = (0, i.ac)("(max-width: ".concat(r - 1, "px)")), s = (0, i.ac)("(min-width: ".concat(r, "px)")), u = (0, i.ac)("(prefers-reduced-motion: reduce)"), c = s && !u;
            return (0, n.jsx)(l.Provider, {
               value: {
                  isMobile: o,
                  isDesktop: s,
                  isReducedMotion: u,
                  isWebGL: c
               },
               children: t
            })
         }
      },
      1398: function (e, t, r) {
         "use strict";
         r.d(t, {
            j: function () {
               return a
            },
            n: function () {
               return s
            }
         });
         var n = r(1527),
            i = r(959),
            o = r(3098);
         let a = (0, i.createContext)();

         function s(e) {
            let {
               Component: t,
               pageProps: r
            } = e, s = (0, i.useRef)(), l = (0, i.useRef)(), [u, c] = (0, i.useState)(() => [{
               ...t,
               pageProps: r
            }]), [f, d] = (0, i.useState)("starting"), [h, p] = (0, i.useState)(!1);
            (0, i.useEffect)(() => {
               var e, n;
               t && (u[0].pageProps.id || (null === (e = u[0].render) || void 0 === e ? void 0 : e.displayName)) !== (r.id || (null === (n = t.render) || void 0 === n ? void 0 : n.displayName)) && c(e => [e[0], {
                  ...t,
                  pageProps: r
               }])
            }, [t, r]);
            let g = (0, o.LZ)(),
               m = (0, i.useCallback)(e => {
                  let {
                     scrollTo: t
                  } = e;
                  return (t && g.scrollTo(0, {
                     immediate: !0,
                     force: !0
                  }), s.current = l.current, l.current = null, u.length > 1) ? c(e => [e[1]]) : 1 === u.length ? d("resting") : void 0
               }, [g, u]),
               v = (0, i.useCallback)(async () => {
                  var e, t, r, n, i, o, a;
                  let c = null === (t = u[0]) || void 0 === t ? void 0 : null === (e = t.render) || void 0 === e ? void 0 : e.displayName,
                     f = null === (n = u[1]) || void 0 === n ? void 0 : null === (r = n.render) || void 0 === r ? void 0 : r.displayName;
                  1 !== u.length && (p(!0), g.stop(), (null == l ? void 0 : null === (i = l.current) || void 0 === i ? void 0 : i.preAnimateIn) && await l.current.preAnimateIn({
                     from: c,
                     to: f
                  }), (null == s ? void 0 : null === (o = s.current) || void 0 === o ? void 0 : o.animateOut) && await s.current.animateOut({
                     from: c,
                     to: f
                  }), m({
                     scrollTo: !0
                  }), p(!1), (null == s ? void 0 : null === (a = s.current) || void 0 === a ? void 0 : a.animateIn) && await s.current.animateIn({
                     from: c,
                     to: f
                  }), g.start())
               }, [g, u, m]);
            (0, i.useEffect)(() => {
               if (1 === u.length && "starting" !== f) return d("resting");
               "transitioning" === f || u.length < 1 || (d("transitioning"), v())
            }, [u, v]);
            let y = (0, i.useCallback)(e => {
               if (u.length > 1) return 0 === e ? {} : {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: -1
               }
            }, [u]);
            return (0, n.jsxs)(n.Fragment, {
               children: [h && (0, n.jsx)("div", {
                  style: {
                     position: "fixed",
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                     zIndex: 9999,
                     pointerEvents: "auto"
                  }
               }), (0, n.jsx)(a.Provider, {
                  value: h,
                  children: u.map((e, t) => {
                     var r;
                     return (0, i.createElement)(e, {
                        ref: e => 0 === t ? s.current = e : l.current = e,
                        style: y(t),
                        ...e.pageProps,
                        key: e.pageProps.id || (null === (r = e.render) || void 0 === r ? void 0 : r.displayName)
                     })
                  })
               })]
            })
         }
      },
      6057: function (e) {
         "use strict";
         let t = {
               blue: "#1072FA",
               white: "#FFFDF9",
               black: "#000000",
               "light-gray": "#DEDFDF",
               "dark-gray": "#A6A5A2",
               yellow: "#FFD540",
               purple: "#B58DFF",
               red: "#FF8360",
               "sea-green": "#BDFFFF"
            },
            r = {
               light: {
                  primary: t.white,
                  secondary: t.black
               },
               dark: {
                  primary: t.black,
                  secondary: t.white
               }
            };
         e.exports = {
            colors: t,
            themes: r,
            breakpoints: {
               mobile: "800px"
            },
            viewports: {
               mobile: {
                  width: "375px",
                  height: "650px"
               },
               desktop: {
                  width: "1440px",
                  height: "816px"
               }
            }
         }
      },
      7702: function (e, t, r) {
         "use strict";

         function n(e, t, r) {
            return Math.max(e, Math.min(t, r))
         }

         function i(e, t, r, n, i) {
            return (r - e) * (i - n) / (t - e) + n
         }
         r.d(t, {
            KK: function () {
               return i
            },
            uZ: function () {
               return n
            }
         })
      },
      4352: function (e, t, r) {
         "use strict";
         let n;
         r.d(t, {
            gI: function () {
               return w
            },
            QM: function () {
               return S
            },
            e6: function () {
               return x
            },
            eI: function () {
               return b
            }
         });
         var i, o, a = r(1527);

         function s(e) {
            return new Promise((t, r) => {
               e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
            })
         }

         function l() {
            return n || (n = function (e, t) {
               let r = indexedDB.open(e);
               r.onupgradeneeded = () => r.result.createObjectStore(t);
               let n = s(r);
               return (e, r) => n.then(n => r(n.transaction(t, e).objectStore(t)))
            }("keyval-store", "keyval")), n
         }
         var u = r(959);

         function c(e, t) {
            let r;
            try {
               r = e()
            } catch (e) {
               return
            }
            return {
               getItem: e => {
                  var n;
                  let i = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
                     o = null != (n = r.getItem(e)) ? n : null;
                  return o instanceof Promise ? o.then(i) : i(o)
               },
               setItem: (e, n) => r.setItem(e, JSON.stringify(n, null == t ? void 0 : t.replacer)),
               removeItem: e => r.removeItem(e)
            }
         }
         let f = e => t => {
            try {
               let r = e(t);
               if (r instanceof Promise) return r;
               return {
                  then: e => f(e)(r),
                  catch (e) {
                     return this
                  }
               }
            } catch (e) {
               return {
                  then(e) {
                     return this
                  },
                  catch: t => f(t)(e)
               }
            }
         };
         var d = r(1526),
            h = r(7514),
            p = r(9642),
            g = r.n(p);
         let m = (0, h.F)(e => ({
               isVisible: !0,
               setIsVisible: t => e({
                  isVisible: t
               })
            }), d.X),
            v = {
               getItem: async e => await
               function (e, t = l()) {
                  return t("readonly", t => s(t.get(e)))
               }(e) || null,
               setItem: async (e, t) => {
                  await
                  function (e, t, r = l()) {
                     return r("readwrite", r => (r.put(t, e), s(r.transaction)))
                  }(e, t)
               },
               removeItem: async e => {
                  await
                  function (e, t = l()) {
                     return t("readwrite", t => (t.delete(e), s(t.transaction)))
                  }(e)
               }
            },
            y = (0, h.F)((i = () => ({
               studio: !1,
               stats: !1,
               grid: !1
            }), "getStorage" in (o = {
               name: "orchestra",
               storage: c(() => v)
            }) || "serialize" in o || "deserialize" in o ? (console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), (e, t, r) => {
               let n, a, s = {
                     getStorage: () => localStorage,
                     serialize: JSON.stringify,
                     deserialize: JSON.parse,
                     partialize: e => e,
                     version: 0,
                     merge: (e, t) => ({
                        ...t,
                        ...e
                     }),
                     ...o
                  },
                  l = !1,
                  u = new Set,
                  c = new Set;
               try {
                  n = s.getStorage()
               } catch (e) {}
               if (!n) return i((...t) => {
                  console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), e(...t)
               }, t, r);
               let d = f(s.serialize),
                  h = () => {
                     let e;
                     let r = d({
                        state: s.partialize({
                           ...t()
                        }),
                        version: s.version
                     }).then(e => n.setItem(s.name, e)).catch(t => {
                        e = t
                     });
                     if (e) throw e;
                     return r
                  },
                  p = r.setState;
               r.setState = (e, t) => {
                  p(e, t), h()
               };
               let g = i((...t) => {
                     e(...t), h()
                  }, t, r),
                  m = () => {
                     var r;
                     if (!n) return;
                     l = !1, u.forEach(e => e(t()));
                     let i = (null == (r = s.onRehydrateStorage) ? void 0 : r.call(s, t())) || void 0;
                     return f(n.getItem.bind(n))(s.name).then(e => {
                        if (e) return s.deserialize(e)
                     }).then(e => {
                        if (e) {
                           if ("number" != typeof e.version || e.version === s.version) return e.state;
                           if (s.migrate) return s.migrate(e.state, e.version);
                           console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                        }
                     }).then(r => {
                        var n;
                        return e(a = s.merge(r, null != (n = t()) ? n : g), !0), h()
                     }).then(() => {
                        null == i || i(a, void 0), l = !0, c.forEach(e => e(a))
                     }).catch(e => {
                        null == i || i(void 0, e)
                     })
                  };
               return r.persist = {
                  setOptions: e => {
                     s = {
                        ...s,
                        ...e
                     }, e.getStorage && (n = e.getStorage())
                  },
                  clearStorage: () => {
                     null == n || n.removeItem(s.name)
                  },
                  getOptions: () => s,
                  rehydrate: () => m(),
                  hasHydrated: () => l,
                  onHydrate: e => (u.add(e), () => {
                     u.delete(e)
                  }),
                  onFinishHydration: e => (c.add(e), () => {
                     c.delete(e)
                  })
               }, m(), a || g
            }) : (e, t, r) => {
               let n, a = {
                     storage: c(() => localStorage),
                     partialize: e => e,
                     version: 0,
                     merge: (e, t) => ({
                        ...t,
                        ...e
                     }),
                     ...o
                  },
                  s = !1,
                  l = new Set,
                  u = new Set,
                  d = a.storage;
               if (!d) return i((...t) => {
                  console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), e(...t)
               }, t, r);
               let h = () => {
                     let e = a.partialize({
                        ...t()
                     });
                     return d.setItem(a.name, {
                        state: e,
                        version: a.version
                     })
                  },
                  p = r.setState;
               r.setState = (e, t) => {
                  p(e, t), h()
               };
               let g = i((...t) => {
                  e(...t), h()
               }, t, r);
               r.getInitialState = () => g;
               let m = () => {
                  var r, i;
                  if (!d) return;
                  s = !1, l.forEach(e => {
                     var r;
                     return e(null != (r = t()) ? r : g)
                  });
                  let o = (null == (i = a.onRehydrateStorage) ? void 0 : i.call(a, null != (r = t()) ? r : g)) || void 0;
                  return f(d.getItem.bind(d))(a.name).then(e => {
                     if (e) {
                        if ("number" != typeof e.version || e.version === a.version) return e.state;
                        if (a.migrate) return a.migrate(e.state, e.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                     }
                  }).then(r => {
                     var i;
                     return e(n = a.merge(r, null != (i = t()) ? i : g), !0), h()
                  }).then(() => {
                     null == o || o(n, void 0), n = t(), s = !0, u.forEach(e => e(n))
                  }).catch(e => {
                     null == o || o(void 0, e)
                  })
               };
               return r.persist = {
                  setOptions: e => {
                     a = {
                        ...a,
                        ...e
                     }, e.storage && (d = e.storage)
                  },
                  clearStorage: () => {
                     null == d || d.removeItem(a.name)
                  },
                  getOptions: () => a,
                  rehydrate: () => m(),
                  hasHydrated: () => s,
                  onHydrate: e => (l.add(e), () => {
                     l.delete(e)
                  }),
                  onFinishHydration: e => (u.add(e), () => {
                     u.delete(e)
                  })
               }, a.skipHydration || m(), n || g
            }), d.X);
         ! function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zustand-broadcast";
            if ("BroadcastChannel" in globalThis) {
               let r = !1,
                  n = new BroadcastChannel(t);
               n.onmessage = t => {
                  let {
                     data: n
                  } = t;
                  r = !0, e.setState(JSON.parse(n)), r = !1
               }, e.subscribe(e => {
                  !1 === r && n.postMessage(JSON.stringify(e))
               })
            }
         }(y, "orchestra");
         let _ = (0, u.createContext)({});

         function b() {
            return (0, u.useContext)(_)
         }

         function w(e) {
            let {
               children: t
            } = e, r = m(e => {
               let {
                  isVisible: t
               } = e;
               return t
            }), n = y(e => e, d.X);
            return (0, a.jsx)(a.Fragment, {
               children: (0, a.jsx)(_.Provider, {
                  value: n,
                  children: t(r ? n : {})
               })
            })
         }

         function x(e) {
            let {
               icon: t,
               title: r,
               id: n
            } = e;
            return (0, a.jsx)("button", {
               onClick: () => {
                  y.setState(e => {
                     let t = {
                        ...e
                     };
                     return t[n] = !t[n], t
                  })
               },
               title: r,
               children: t
            })
         }

         function S(e) {
            let {
               children: t
            } = e;
            return (0, u.useEffect)(() => {
               m.setState(() => ({
                  isVisible: !1
               }))
            }, []), (0, a.jsx)("div", {
               className: g().orchestra,
               children: t
            })
         }
      },
      2085: function (e, t, r) {
         "use strict";
         r.d(t, {
            Mi: function () {
               return p
            },
            bV: function () {
               return u
            },
            dg: function () {
               return d
            },
            jI: function () {
               return f
            },
            of: function () {
               return g
            },
            rg: function () {
               return l
            },
            st: function () {
               return v
            },
            yR: function () {
               return m
            }
         });
         var n = r(1527),
            i = r(2720),
            o = r(9926),
            a = r(959);
         let s = (0, a.createContext)();

         function l(e) {
            let {
               children: t,
               id: r = "default"
            } = e, [l] = (0, a.useState)(() => (0, o.createRafDriver)({
               name: r
            }));
            return (0, i.xQ)(e => {
               l.tick(e)
            }), (0, n.jsx)(s.Provider, {
               value: l,
               children: t
            })
         }

         function u() {
            return (0, a.useContext)(s)
         }
         let c = (0, a.createContext)();

         function f(e) {
            let {
               children: t,
               id: r,
               config: i
            } = e, [s, l] = (0, a.useState)(), u = (0, a.useRef)(!1);
            return (0, a.useEffect)(() => {
               if (i) u.current || (u.current = !0, fetch(i).then(e => e.json()).then(e => {
                  let t = (0, o.getProject)(r, {
                     state: e
                  });
                  t.ready.then(() => {
                     l(t)
                  })
               }));
               else {
                  let e = (0, o.getProject)(r);
                  e.ready.then(() => {
                     l(e)
                  })
               }
            }, [i, r]), (0, n.jsx)(c.Provider, {
               value: s,
               children: t
            })
         }

         function d() {
            return (0, a.useContext)(c)
         }
         let h = (0, a.createContext)();

         function p(e, t) {
            let r = d();
            return (0, a.useMemo)(() => null == r ? void 0 : r.sheet(e, t), [r, e, t])
         }

         function g(e) {
            let [t, r] = (0, a.useState)(0);
            return (0, a.useEffect)(() => {
               if (!e) return;
               let t = (0, o.onChange)(e.sequence.pointer.length, e => {
                  r(e)
               });
               return () => t
            }, [e]), t
         }
         let m = (0, a.forwardRef)(function (e, t) {
            let {
               children: r,
               id: i,
               instance: o
            } = e, s = p(i, o);
            return (0, a.useImperativeHandle)(t, () => s, [s]), (0, n.jsx)(h.Provider, {
               value: s,
               children: r
            })
         });

         function v() {
            return (0, a.useContext)(h)
         }
      },
      2424: function (e, t) {
         "use strict";
         var r, n;
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e, t) {
               for (var r in t) Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
               })
            }(t, {
               PrefetchKind: function () {
                  return r
               },
               ACTION_REFRESH: function () {
                  return i
               },
               ACTION_NAVIGATE: function () {
                  return o
               },
               ACTION_RESTORE: function () {
                  return a
               },
               ACTION_SERVER_PATCH: function () {
                  return s
               },
               ACTION_PREFETCH: function () {
                  return l
               },
               ACTION_FAST_REFRESH: function () {
                  return u
               },
               ACTION_SERVER_ACTION: function () {
                  return c
               },
               isThenable: function () {
                  return f
               }
            });
         let i = "refresh",
            o = "navigate",
            a = "restore",
            s = "server-patch",
            l = "prefetch",
            u = "fast-refresh",
            c = "server-action";

         function f(e) {
            return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
         }(n = r || (r = {})).AUTO = "auto", n.FULL = "full", n.TEMPORARY = "temporary", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      9522: function (e, t, r) {
         "use strict";

         function n(e, t, r, n) {
            return !1
         }
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function () {
               return n
            }
         }), r(2473), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      6706: function (e, t, r) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function () {
               return _
            }
         });
         let n = r(1351),
            i = r(5815),
            o = r(1527),
            a = i._(r(959)),
            s = n._(r(422)),
            l = n._(r(7660)),
            u = r(5464),
            c = r(1240),
            f = r(6110);
         r(4939);
         let d = r(3239),
            h = n._(r(4295)),
            p = {
               deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
               imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
               path: "/asseets/images",
               loader: "default",
               dangerouslyAllowSVG: !1,
               unoptimized: !1
            };

         function g(e, t, r, n, i, o) {
            let a = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
               if (e.parentElement && e.isConnected) {
                  if ("empty" !== t && i(!0), null == r ? void 0 : r.current) {
                     let t = new Event("load");
                     Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                     });
                     let n = !1,
                        i = !1;
                     r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => i,
                        persist: () => {},
                        preventDefault: () => {
                           n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                           i = !0, t.stopPropagation()
                        }
                     })
                  }(null == n ? void 0 : n.current) && n.current(e)
               }
            }))
         }

         function m(e) {
            let [t, r] = a.version.split(".", 2), n = parseInt(t, 10), i = parseInt(r, 10);
            return n > 18 || 18 === n && i >= 3 ? {
               fetchPriority: e
            } : {
               fetchpriority: e
            }
         }
         let v = (0, a.forwardRef)((e, t) => {
            let {
               src: r,
               srcSet: n,
               sizes: i,
               height: s,
               width: l,
               decoding: u,
               className: c,
               style: f,
               fetchPriority: d,
               placeholder: h,
               loading: p,
               unoptimized: v,
               fill: y,
               onLoadRef: _,
               onLoadingCompleteRef: b,
               setBlurComplete: w,
               setShowAltText: x,
               onLoad: S,
               onError: T,
               ...P
            } = e;
            return (0, o.jsx)("img", {
               ...P,
               ...m(d),
               loading: p,
               width: l,
               height: s,
               decoding: u,
               "data-nimg": y ? "fill" : "1",
               className: c,
               style: f,
               sizes: i,
               srcSet: n,
               src: r,
               ref: (0, a.useCallback)(e => {
                  t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (T && (e.src = e.src), e.complete && g(e, h, _, b, w, v))
               }, [r, h, _, b, w, T, v, t]),
               onLoad: e => {
                  g(e.currentTarget, h, _, b, w, v)
               },
               onError: e => {
                  x(!0), "empty" !== h && w(!0), T && T(e)
               }
            })
         });

         function y(e) {
            let {
               isAppRouter: t,
               imgAttributes: r
            } = e, n = {
               as: "image",
               imageSrcSet: r.srcSet,
               imageSizes: r.sizes,
               crossOrigin: r.crossOrigin,
               referrerPolicy: r.referrerPolicy,
               ...m(r.fetchPriority)
            };
            return t && s.default.preload ? (s.default.preload(r.src, n), null) : (0, o.jsx)(l.default, {
               children: (0, o.jsx)("link", {
                  rel: "preload",
                  href: r.srcSet ? void 0 : r.src,
                  ...n
               }, "__nimg-" + r.src + r.srcSet + r.sizes)
            })
         }
         let _ = (0, a.forwardRef)((e, t) => {
            let r = (0, a.useContext)(d.RouterContext),
               n = (0, a.useContext)(f.ImageConfigContext),
               i = (0, a.useMemo)(() => {
                  let e = p || n || c.imageConfigDefault,
                     t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                     r = e.deviceSizes.sort((e, t) => e - t);
                  return {
                     ...e,
                     allSizes: t,
                     deviceSizes: r
                  }
               }, [n]),
               {
                  onLoad: s,
                  onLoadingComplete: l
               } = e,
               g = (0, a.useRef)(s);
            (0, a.useEffect)(() => {
               g.current = s
            }, [s]);
            let m = (0, a.useRef)(l);
            (0, a.useEffect)(() => {
               m.current = l
            }, [l]);
            let [_, b] = (0, a.useState)(!1), [w, x] = (0, a.useState)(!1), {
               props: S,
               meta: T
            } = (0, u.getImgProps)(e, {
               defaultLoader: h.default,
               imgConf: i,
               blurComplete: _,
               showAltText: w
            });
            return (0, o.jsxs)(o.Fragment, {
               children: [(0, o.jsx)(v, {
                  ...S,
                  unoptimized: T.unoptimized,
                  placeholder: T.placeholder,
                  fill: T.fill,
                  onLoadRef: g,
                  onLoadingCompleteRef: m,
                  setBlurComplete: b,
                  setShowAltText: x,
                  ref: t
               }), T.priority ? (0, o.jsx)(y, {
                  isAppRouter: !r,
                  imgAttributes: S
               }) : null]
            })
         });
         ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      9505: function (e, t, r) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
               return b
            }
         });
         let n = r(1351),
            i = r(1527),
            o = n._(r(959)),
            a = r(1584),
            s = r(4241),
            l = r(3297),
            u = r(9974),
            c = r(3484),
            f = r(3239),
            d = r(178),
            h = r(5506),
            p = r(9522),
            g = r(5543),
            m = r(2424),
            v = new Set;

         function y(e, t, r, n, i, o) {
            if (o || (0, s.isLocalURL)(t)) {
               if (!n.bypassPrefetchedCheck) {
                  let i = t + "%" + r + "%" + (void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0);
                  if (v.has(i)) return;
                  v.add(i)
               }
               Promise.resolve(o ? e.prefetch(t, i) : e.prefetch(t, r, n)).catch(e => {})
            }
         }

         function _(e) {
            return "string" == typeof e ? e : (0, l.formatUrl)(e)
         }
         let b = o.default.forwardRef(function (e, t) {
            let r, n;
            let {
               href: l,
               as: v,
               children: b,
               prefetch: w = null,
               passHref: x,
               replace: S,
               shallow: T,
               scroll: P,
               locale: E,
               onClick: O,
               onMouseEnter: k,
               onTouchStart: C,
               legacyBehavior: j = !1,
               ...A
            } = e;
            r = b, j && ("string" == typeof r || "number" == typeof r) && (r = (0, i.jsx)("a", {
               children: r
            }));
            let M = o.default.useContext(f.RouterContext),
               D = o.default.useContext(d.AppRouterContext),
               R = null != M ? M : D,
               I = !M,
               z = !1 !== w,
               N = null === w ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
               {
                  href: L,
                  as: F
               } = o.default.useMemo(() => {
                  if (!M) {
                     let e = _(l);
                     return {
                        href: e,
                        as: v ? _(v) : e
                     }
                  }
                  let [e, t] = (0, a.resolveHref)(M, l, !0);
                  return {
                     href: e,
                     as: v ? (0, a.resolveHref)(M, v) : t || e
                  }
               }, [M, l, v]),
               B = o.default.useRef(L),
               V = o.default.useRef(F);
            j && (n = o.default.Children.only(r));
            let H = j ? n && "object" == typeof n && n.ref : t,
               [U, W, q] = (0, h.useIntersection)({
                  rootMargin: "200px"
               }),
               Y = o.default.useCallback(e => {
                  (V.current !== F || B.current !== L) && (q(), V.current = F, B.current = L), U(e), H && ("function" == typeof H ? H(e) : "object" == typeof H && (H.current = e))
               }, [F, H, L, q, U]);
            o.default.useEffect(() => {
               R && W && z && y(R, L, F, {
                  locale: E
               }, {
                  kind: N
               }, I)
            }, [F, L, W, E, z, null == M ? void 0 : M.locale, R, I, N]);
            let X = {
               ref: Y,
               onClick(e) {
                  j || "function" != typeof O || O(e), j && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), R && !e.defaultPrevented && function (e, t, r, n, i, a, l, u, c) {
                     let {
                        nodeName: f
                     } = e.currentTarget;
                     if ("A" === f.toUpperCase() && (function (e) {
                           let t = e.currentTarget.getAttribute("target");
                           return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !(0, s.isLocalURL)(r))) return;
                     e.preventDefault();
                     let d = () => {
                        let e = null == l || l;
                        "beforePopState" in t ? t[i ? "replace" : "push"](r, n, {
                           shallow: a,
                           locale: u,
                           scroll: e
                        }) : t[i ? "replace" : "push"](n || r, {
                           scroll: e
                        })
                     };
                     c ? o.default.startTransition(d) : d()
                  }(e, R, L, F, S, T, P, E, I)
               },
               onMouseEnter(e) {
                  j || "function" != typeof k || k(e), j && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), R && (z || !I) && y(R, L, F, {
                     locale: E,
                     priority: !0,
                     bypassPrefetchedCheck: !0
                  }, {
                     kind: N
                  }, I)
               },
               onTouchStart(e) {
                  j || "function" != typeof C || C(e), j && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), R && (z || !I) && y(R, L, F, {
                     locale: E,
                     priority: !0,
                     bypassPrefetchedCheck: !0
                  }, {
                     kind: N
                  }, I)
               }
            };
            if ((0, u.isAbsoluteUrl)(F)) X.href = F;
            else if (!j || x || "a" === n.type && !("href" in n.props)) {
               let e = void 0 !== E ? E : null == M ? void 0 : M.locale,
                  t = (null == M ? void 0 : M.isLocaleDomain) && (0, p.getDomainLocale)(F, e, null == M ? void 0 : M.locales, null == M ? void 0 : M.domainLocales);
               X.href = t || (0, g.addBasePath)((0, c.addLocale)(F, e, null == M ? void 0 : M.defaultLocale))
            }
            return j ? o.default.cloneElement(n, X) : (0, i.jsx)("a", {
               ...A,
               ...X,
               children: r
            })
         });
         ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      5506: function (e, t, r) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function () {
               return l
            }
         });
         let n = r(959),
            i = r(8977),
            o = "function" == typeof IntersectionObserver,
            a = new Map,
            s = [];

         function l(e) {
            let {
               rootRef: t,
               rootMargin: r,
               disabled: l
            } = e, u = l || !o, [c, f] = (0, n.useState)(!1), d = (0, n.useRef)(null), h = (0, n.useCallback)(e => {
               d.current = e
            }, []);
            return (0, n.useEffect)(() => {
               if (o) {
                  if (u || c) return;
                  let e = d.current;
                  if (e && e.tagName) return function (e, t, r) {
                     let {
                        id: n,
                        observer: i,
                        elements: o
                     } = function (e) {
                        let t;
                        let r = {
                              root: e.root || null,
                              margin: e.rootMargin || ""
                           },
                           n = s.find(e => e.root === r.root && e.margin === r.margin);
                        if (n && (t = a.get(n))) return t;
                        let i = new Map;
                        return t = {
                           id: r,
                           observer: new IntersectionObserver(e => {
                              e.forEach(e => {
                                 let t = i.get(e.target),
                                    r = e.isIntersecting || e.intersectionRatio > 0;
                                 t && r && t(r)
                              })
                           }, e),
                           elements: i
                        }, s.push(r), a.set(r, t), t
                     }(r);
                     return o.set(e, t), i.observe(e),
                        function () {
                           if (o.delete(e), i.unobserve(e), 0 === o.size) {
                              i.disconnect(), a.delete(n);
                              let e = s.findIndex(e => e.root === n.root && e.margin === n.margin);
                              e > -1 && s.splice(e, 1)
                           }
                        }
                  }(e, e => e && f(e), {
                     root: null == t ? void 0 : t.current,
                     rootMargin: r
                  })
               } else if (!c) {
                  let e = (0, i.requestIdleCallback)(() => f(!0));
                  return () => (0, i.cancelIdleCallback)(e)
               }
            }, [u, r, t, c, d.current]), [h, c, (0, n.useCallback)(() => {
               f(!1)
            }, [])]
         }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      3432: function (e, t, r) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e, t) {
               for (var r in t) Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
               })
            }(t, {
               noSSR: function () {
                  return a
               },
               default: function () {
                  return s
               }
            });
         let n = r(1351);
         r(1527), r(959);
         let i = n._(r(5012));

         function o(e) {
            return {
               default: (null == e ? void 0 : e.default) || e
            }
         }

         function a(e, t) {
            return delete t.webpack, delete t.modules, e(t)
         }

         function s(e, t) {
            let r = i.default,
               n = {
                  loading: e => {
                     let {
                        error: t,
                        isLoading: r,
                        pastDelay: n
                     } = e;
                     return null
                  }
               };
            e instanceof Promise ? n.loader = () => e : "function" == typeof e ? n.loader = e : "object" == typeof e && (n = {
               ...n,
               ...e
            });
            let s = (n = {
               ...n,
               ...t
            }).loader;
            return (n.loadableGenerated && (n = {
               ...n,
               ...n.loadableGenerated
            }, delete n.loadableGenerated), "boolean" != typeof n.ssr || n.ssr) ? r({
               ...n,
               loader: () => null != s ? s().then(o) : Promise.resolve(o(() => null))
            }) : (delete n.webpack, delete n.modules, a(r, n))
         }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
         }), Object.assign(t.default, t), e.exports = t.default)
      },
      5464: function (e, t, r) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function () {
               return s
            }
         }), r(4939);
         let n = r(2515),
            i = r(1240);

         function o(e) {
            return void 0 !== e.default
         }

         function a(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
         }

         function s(e, t) {
            var r;
            let s, l, u, {
                  src: c,
                  sizes: f,
                  unoptimized: d = !1,
                  priority: h = !1,
                  loading: p,
                  className: g,
                  quality: m,
                  width: v,
                  height: y,
                  fill: _ = !1,
                  style: b,
                  onLoad: w,
                  onLoadingComplete: x,
                  placeholder: S = "empty",
                  blurDataURL: T,
                  fetchPriority: P,
                  layout: E,
                  objectFit: O,
                  objectPosition: k,
                  lazyBoundary: C,
                  lazyRoot: j,
                  ...A
               } = e,
               {
                  imgConf: M,
                  showAltText: D,
                  blurComplete: R,
                  defaultLoader: I
               } = t,
               z = M || i.imageConfigDefault;
            if ("allSizes" in z) s = z;
            else {
               let e = [...z.deviceSizes, ...z.imageSizes].sort((e, t) => e - t),
                  t = z.deviceSizes.sort((e, t) => e - t);
               s = {
                  ...z,
                  allSizes: e,
                  deviceSizes: t
               }
            }
            let N = A.loader || I;
            delete A.loader, delete A.srcSet;
            let L = "__next_img_default" in N;
            if (L) {
               if ("custom" === s.loader) throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
               let e = N;
               N = t => {
                  let {
                     config: r,
                     ...n
                  } = t;
                  return e(n)
               }
            }
            if (E) {
               "fill" === E && (_ = !0);
               let e = {
                  intrinsic: {
                     maxWidth: "100%",
                     height: "auto"
                  },
                  responsive: {
                     width: "100%",
                     height: "auto"
                  }
               } [E];
               e && (b = {
                  ...b,
                  ...e
               });
               let t = {
                  responsive: "100vw",
                  fill: "100vw"
               } [E];
               t && !f && (f = t)
            }
            let F = "",
               B = a(v),
               V = a(y);
            if ("object" == typeof (r = c) && (o(r) || void 0 !== r.src)) {
               let e = o(c) ? c.default : c;
               if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
               if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
               if (l = e.blurWidth, u = e.blurHeight, T = T || e.blurDataURL, F = e.src, !_) {
                  if (B || V) {
                     if (B && !V) {
                        let t = B / e.width;
                        V = Math.round(e.height * t)
                     } else if (!B && V) {
                        let t = V / e.height;
                        B = Math.round(e.width * t)
                     }
                  } else B = e.width, V = e.height
               }
            }
            let H = !h && ("lazy" === p || void 0 === p);
            (!(c = "string" == typeof c ? c : F) || c.startsWith("data:") || c.startsWith("blob:")) && (d = !0, H = !1), s.unoptimized && (d = !0), L && c.endsWith(".svg") && !s.dangerouslyAllowSVG && (d = !0), h && (P = "high");
            let U = a(m),
               W = Object.assign(_ ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: O,
                  objectPosition: k
               } : {}, D ? {} : {
                  color: "transparent"
               }, b),
               q = R || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                  widthInt: B,
                  heightInt: V,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: T || "",
                  objectFit: W.objectFit
               }) + '")' : 'url("' + S + '")',
               Y = q ? {
                  backgroundSize: W.objectFit || "cover",
                  backgroundPosition: W.objectPosition || "50% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: q
               } : {},
               X = function (e) {
                  let {
                     config: t,
                     src: r,
                     unoptimized: n,
                     width: i,
                     quality: o,
                     sizes: a,
                     loader: s
                  } = e;
                  if (n) return {
                     src: r,
                     srcSet: void 0,
                     sizes: void 0
                  };
                  let {
                     widths: l,
                     kind: u
                  } = function (e, t, r) {
                     let {
                        deviceSizes: n,
                        allSizes: i
                     } = e;
                     if (r) {
                        let e = /(^|\s)(1?\d?\d)vw/g,
                           t = [];
                        for (let n; n = e.exec(r); n) t.push(parseInt(n[2]));
                        if (t.length) {
                           let e = .01 * Math.min(...t);
                           return {
                              widths: i.filter(t => t >= n[0] * e),
                              kind: "w"
                           }
                        }
                        return {
                           widths: i,
                           kind: "w"
                        }
                     }
                     return "number" != typeof t ? {
                        widths: n,
                        kind: "w"
                     } : {
                        widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                        kind: "x"
                     }
                  }(t, i, a), c = l.length - 1;
                  return {
                     sizes: a || "w" !== u ? a : "100vw",
                     srcSet: l.map((e, n) => s({
                        config: t,
                        src: r,
                        quality: o,
                        width: e
                     }) + " " + ("w" === u ? e : n + 1) + u).join(", "),
                     src: s({
                        config: t,
                        src: r,
                        quality: o,
                        width: l[c]
                     })
                  }
               }({
                  config: s,
                  src: c,
                  unoptimized: d,
                  width: B,
                  quality: U,
                  sizes: f,
                  loader: N
               });
            return {
               props: {
                  ...A,
                  loading: H ? "lazy" : p,
                  fetchPriority: P,
                  width: B,
                  height: V,
                  decoding: "async",
                  className: g,
                  style: {
                     ...W,
                     ...Y
                  },
                  sizes: X.sizes,
                  srcSet: X.srcSet,
                  src: X.src
               },
               meta: {
                  unoptimized: d,
                  priority: h,
                  placeholder: S,
                  fill: _
               }
            }
         }
      },
      2515: function (e, t) {
         "use strict";

         function r(e) {
            let {
               widthInt: t,
               heightInt: r,
               blurWidth: n,
               blurHeight: i,
               blurDataURL: o,
               objectFit: a
            } = e, s = n ? 40 * n : t, l = i ? 40 * i : r, u = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
         }
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function () {
               return r
            }
         })
      },
      7942: function (e, t, r) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e, t) {
               for (var r in t) Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
               })
            }(t, {
               getImageProps: function () {
                  return s
               },
               default: function () {
                  return l
               }
            });
         let n = r(1351),
            i = r(5464),
            o = r(6706),
            a = n._(r(4295)),
            s = e => {
               let {
                  props: t
               } = (0, i.getImgProps)(e, {
                  defaultLoader: a.default,
                  imgConf: {
                     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                     path: "/assets/images",
                     loader: "default",
                     dangerouslyAllowSVG: !1,
                     unoptimized: !1
                  }
               });
               for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
               return {
                  props: t
               }
            },
            l = o.Image
      },
      4295: function (e, t) {
         "use strict";

         function r(e) {
            let {
               config: t,
               src: r,
               width: n,
               quality: i
            } = e;
            return t.path + encodeURIComponent(r)
         }
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
               return n
            }
         }), r.__next_img_default = !0;
         let n = r
      },
      7505: function (e, t, r) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "LoadableContext", {
            enumerable: !0,
            get: function () {
               return n
            }
         });
         let n = r(1351)._(r(959)).default.createContext(null)
      },
      5012: function (e, t, r) {
         "use strict";
         /**
         @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
          MIT License
          Permission is hereby granted, free of charge, to any person obtaining
         a copy of this software and associated documentation files (the
         "Software"), to deal in the Software without restriction, including
         without limitation the rights to use, copy, modify, merge, publish,
         distribute, sublicense, and/or sell copies of the Software, and to
         permit persons to whom the Software is furnished to do so, subject to
         the following conditions:
          The above copyright notice and this permission notice shall be
         included in all copies or substantial portions of the Software.
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
         EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
         MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
         LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
         OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
         WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
         */
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
               return d
            }
         });
         let n = r(1351)._(r(959)),
            i = r(7505),
            o = [],
            a = [],
            s = !1;

         function l(e) {
            let t = e(),
               r = {
                  loading: !0,
                  loaded: null,
                  error: null
               };
            return r.promise = t.then(e => (r.loading = !1, r.loaded = e, e)).catch(e => {
               throw r.loading = !1, r.error = e, e
            }), r
         }
         class u {
            promise() {
               return this._res.promise
            }
            retry() {
               this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                  pastDelay: !1,
                  timedOut: !1
               };
               let {
                  _res: e,
                  _opts: t
               } = this;
               e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                  this._update({
                     pastDelay: !0
                  })
               }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                  this._update({
                     timedOut: !0
                  })
               }, t.timeout))), this._res.promise.then(() => {
                  this._update({}), this._clearTimeouts()
               }).catch(e => {
                  this._update({}), this._clearTimeouts()
               }), this._update({})
            }
            _update(e) {
               this._state = {
                  ...this._state,
                  error: this._res.error,
                  loaded: this._res.loaded,
                  loading: this._res.loading,
                  ...e
               }, this._callbacks.forEach(e => e())
            }
            _clearTimeouts() {
               clearTimeout(this._delay), clearTimeout(this._timeout)
            }
            getCurrentValue() {
               return this._state
            }
            subscribe(e) {
               return this._callbacks.add(e), () => {
                  this._callbacks.delete(e)
               }
            }
            constructor(e, t) {
               this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
            }
         }

         function c(e) {
            return function (e, t) {
               let r = Object.assign({
                     loader: null,
                     loading: null,
                     delay: 200,
                     timeout: null,
                     webpack: null,
                     modules: null
                  }, t),
                  o = null;

               function l() {
                  if (!o) {
                     let t = new u(e, r);
                     o = {
                        getCurrentValue: t.getCurrentValue.bind(t),
                        subscribe: t.subscribe.bind(t),
                        retry: t.retry.bind(t),
                        promise: t.promise.bind(t)
                     }
                  }
                  return o.promise()
               }
               if (!s) {
                  let e = r.webpack ? r.webpack() : r.modules;
                  e && a.push(t => {
                     for (let r of e)
                        if (t.includes(r)) return l()
                  })
               }

               function c(e, t) {
                  ! function () {
                     l();
                     let e = n.default.useContext(i.LoadableContext);
                     e && Array.isArray(r.modules) && r.modules.forEach(t => {
                        e(t)
                     })
                  }();
                  let a = n.default.useSyncExternalStore(o.subscribe, o.getCurrentValue, o.getCurrentValue);
                  return n.default.useImperativeHandle(t, () => ({
                     retry: o.retry
                  }), []), n.default.useMemo(() => {
                     var t;
                     return a.loading || a.error ? n.default.createElement(r.loading, {
                        isLoading: a.loading,
                        pastDelay: a.pastDelay,
                        timedOut: a.timedOut,
                        error: a.error,
                        retry: o.retry
                     }) : a.loaded ? n.default.createElement((t = a.loaded) && t.default ? t.default : t, e) : null
                  }, [e, a])
               }
               return c.preload = () => l(), c.displayName = "LoadableComponent", n.default.forwardRef(c)
            }(l, e)
         }

         function f(e, t) {
            let r = [];
            for (; e.length;) {
               let n = e.pop();
               r.push(n(t))
            }
            return Promise.all(r).then(() => {
               if (e.length) return f(e, t)
            })
         }
         c.preloadAll = () => new Promise((e, t) => {
            f(o).then(e, t)
         }), c.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
            let r = () => (s = !0, t());
            f(a, e).then(r, r)
         })), window.__NEXT_PRELOADREADY = c.preloadReady;
         let d = c
      },
      1276: function (e, t, r) {
         "use strict";
         r.r(t), r.d(t, {
            default: function () {
               return T
            }
         });
         var n = r(1527),
            i = r(1690),
            o = r(3098),
            a = "undefined" != typeof window && new class {
               constructor() {
                  this.raf = e => {
                     requestAnimationFrame(this.raf);
                     let t = e - this.now;
                     this.now = e;
                     for (let r = 0; r < this.callbacks.length; r++) this.callbacks[r].callback(e, t)
                  }, this.callbacks = [], this.now = performance.now(), requestAnimationFrame(this.raf)
               }
               add(e, t = 0) {
                  return this.callbacks.push({
                     callback: e,
                     priority: t
                  }), this.callbacks.sort((e, t) => e.priority - t.priority), () => this.remove(e)
               }
               remove(e) {
                  this.callbacks = this.callbacks.filter(({
                     callback: t
                  }) => e !== t)
               }
            },
            s = r(3911),
            l = r(1398),
            u = r(5199),
            c = r(8925),
            f = r(7420),
            d = r(959),
            h = r(4224);
         let p = h.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || "";
         h.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
         var g = r(4352),
            m = r(2085),
            v = r(3039),
            y = r.n(v),
            _ = r(8909),
            b = r.n(_);
         r(3037);
         let w = y()(() => Promise.all([r.e(757), r.e(872), r.e(579)]).then(r.bind(r, 2579)).then(e => {
               let {
                  Studio: t
               } = e;
               return t
            }), {
               loadableGenerated: {
                  webpack: () => [2579]
               },
               ssr: !1
            }),
            x = y()(() => r.e(688).then(r.bind(r, 5688)).then(e => {
               let {
                  Stats: t
               } = e;
               return t
            }), {
               loadableGenerated: {
                  webpack: () => [5688]
               },
               ssr: !1
            }),
            S = y()(() => r.e(657).then(r.bind(r, 5657)).then(e => {
               let {
                  GridDebugger: t
               } = e;
               return t
            }), {
               loadableGenerated: {
                  webpack: () => [5657]
               },
               ssr: !1
            });
         window.scrollTo(0, 0), window.history.scrollRestoration = "manual", u.p8.defaults({
            ease: "none"
         }), u.p8.registerPlugin(f.ScrollTrigger, c.CustomEase), f.ScrollTrigger.clearScrollMemory("manual"), f.ScrollTrigger.defaults({
            markers: !1
         }), u.p8.ticker.lagSmoothing(0), u.p8.ticker.remove(u.p8.updateRoot), null == a || a.add(e => {
            u.p8.updateRoot(e / 1e3)
         }, 0);
         var T = function (e) {
            let {
               Component: t,
               pageProps: r
            } = e;
            (0, d.useEffect)(() => {
               let e = Array.from(document.querySelectorAll('link[rel="stylesheet"][data-n-p]')).map(e => ({
                  element: e,
                  href: e.getAttribute("href")
               }));
               e.forEach(e => {
                  let {
                     element: t
                  } = e;
                  return t.removeAttribute("data-n-p")
               });
               let t = [],
                  r = new MutationObserver(r => {
                     r.filter(e => {
                        let {
                           target: t
                        } = e;
                        return "STYLE" === t.nodeName && t.hasAttribute("data-n-href")
                     }).map(e => {
                        let {
                           target: t
                        } = e;
                        return {
                           element: t,
                           href: t.getAttribute("data-n-href")
                        }
                     }).forEach(e => {
                        let {
                           element: r,
                           href: n
                        } = e;
                        t.includes(n) ? r.remove() : (r.setAttribute("data-fouc-fix-n-href", n), r.removeAttribute("data-n-href"), t.push(n))
                     }), e = e.reduce((e, r) => {
                        let {
                           element: n,
                           href: i
                        } = r;
                        return t.includes(i) ? n.remove() : e.push(r), e
                     }, [])
                  });
               return r.observe(document.head, {
                  subtree: !0,
                  attributeFilter: ["media"]
               }), () => r.disconnect()
            }, []);
            let a = (0, o.LZ)(f.ScrollTrigger.update);
            return (0, d.useEffect)(f.ScrollTrigger.refresh, [a]), (0, n.jsxs)(n.Fragment, {
               children: [(0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(b(), {
                     async: !0,
                     strategy: "worker",
                     src: "https://www.googletagmanager.com/gtag/js?id=".concat(p)
                  }), (0, n.jsx)(b(), {
                     id: "gtm-base",
                     strategy: "worker",
                     dangerouslySetInnerHTML: {
                        __html: "window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '".concat(p, "');")
                     }
                  })]
               }), (0, n.jsx)(i.Oy, {}), (0, n.jsx)(s.G, {
                  children: (0, n.jsx)(g.gI, {
                     children: e => {
                        let {
                           studio: i,
                           grid: a,
                           stats: s
                        } = e;
                        return (0, n.jsx)(m.jI, {
                           id: "Satus",
                           config: "/config/Satus-2023-09-29T12_18_10.json",
                           children: (0, n.jsxs)(m.rg, {
                              id: "default",
                              children: [(0, n.jsx)(o.Ei, {
                                 root: !0,
                                 children: (0, n.jsx)(l.n, {
                                    Component: t,
                                    pageProps: r
                                 })
                              }), i && (0, n.jsx)(w, {}), s && (0, n.jsx)(x, {}), a && (0, n.jsx)(S, {})]
                           })
                        })
                     }
                  })
               })]
            })
         }
      },
      3037: function () {},
      9642: function (e) {
         e.exports = {
            orchestra: "orchestra_orchestra__X5scO"
         }
      },
      3767: function (e) {
         e.exports = {
            container: "accordion_container__Z3mcY",
            "item-wrapper": "accordion_item-wrapper__3xGeW",
            "trigger-wrapper": "accordion_trigger-wrapper__gi7Jd",
            "content-wrapper": "accordion_content-wrapper__B8vqA",
            slideDown: "accordion_slideDown__h1bzR",
            slideUp: "accordion_slideUp__AmJV5"
         }
      },
      7912: function (e) {
         e.exports = {
            marquee: "marquee_marquee__uh6UM",
            inner: "marquee_inner__qrUzS",
            inverted: "marquee_inverted__tlEvY",
            "marquee-inverted": "marquee_marquee-inverted__4DcUK"
         }
      },
      3438: function (e) {
         e.exports = {
            lottie: "lottie_lottie__H28B7"
         }
      },
      2321: function (e) {
         e.exports = {
            video: "video_video__PMliw"
         }
      },
      5245: function (e) {
         e.exports = {
            slider: "slider_slider__jwSPb",
            container: "slider_container__Om74W"
         }
      },
      3039: function (e, t, r) {
         e.exports = r(3432)
      },
      2982: function (e, t, r) {
         e.exports = r(7660)
      },
      7636: function (e, t, r) {
         e.exports = r(7942)
      },
      9151: function (e, t, r) {
         e.exports = r(9505)
      },
      6525: function (e, t, r) {
         e.exports = r(162)
      },
      8909: function (e, t, r) {
         e.exports = r(6393)
      },
      4224: function (e) {
         var t, r, n, i = e.exports = {};

         function o() {
            throw Error("setTimeout has not been defined")
         }

         function a() {
            throw Error("clearTimeout has not been defined")
         }

         function s(e) {
            if (t === setTimeout) return setTimeout(e, 0);
            if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
            try {
               return t(e, 0)
            } catch (r) {
               try {
                  return t.call(null, e, 0)
               } catch (r) {
                  return t.call(this, e, 0)
               }
            }
         }! function () {
            try {
               t = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
               t = o
            }
            try {
               r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
               r = a
            }
         }();
         var l = [],
            u = !1,
            c = -1;

         function f() {
            u && n && (u = !1, n.length ? l = n.concat(l) : c = -1, l.length && d())
         }

         function d() {
            if (!u) {
               var e = s(f);
               u = !0;
               for (var t = l.length; t;) {
                  for (n = l, l = []; ++c < t;) n && n[c].run();
                  c = -1, t = l.length
               }
               n = null, u = !1,
                  function (e) {
                     if (r === clearTimeout) return clearTimeout(e);
                     if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                     try {
                        r(e)
                     } catch (t) {
                        try {
                           return r.call(null, e)
                        } catch (t) {
                           return r.call(this, e)
                        }
                     }
                  }(e)
            }
         }

         function h(e, t) {
            this.fun = e, this.array = t
         }

         function p() {}
         i.nextTick = function (e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)
               for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            l.push(new h(e, t)), 1 !== l.length || u || s(d)
         }, h.prototype.run = function () {
            this.fun.apply(null, this.array)
         }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function (e) {
            return []
         }, i.binding = function (e) {
            throw Error("process.binding is not supported")
         }, i.cwd = function () {
            return "/"
         }, i.chdir = function (e) {
            throw Error("process.chdir is not supported")
         }, i.umask = function () {
            return 0
         }
      },
      2099: function (e) {
         var t;
         e.exports = ((t = function () {
            function e(e) {
               return i.appendChild(e.dom), e
            }

            function r(e) {
               for (var t = 0; t < i.children.length; t++) i.children[t].style.display = t === e ? "block" : "none";
               n = e
            }
            var n = 0,
               i = document.createElement("div");
            i.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", i.addEventListener("click", function (e) {
               e.preventDefault(), r(++n % i.children.length)
            }, !1);
            var o = (performance || Date).now(),
               a = o,
               s = 0,
               l = e(new t.Panel("FPS", "#0ff", "#002")),
               u = e(new t.Panel("MS", "#0f0", "#020"));
            if (self.performance && self.performance.memory) var c = e(new t.Panel("MB", "#f08", "#201"));
            return r(0), {
               REVISION: 16,
               dom: i,
               addPanel: e,
               showPanel: r,
               begin: function () {
                  o = (performance || Date).now()
               },
               end: function () {
                  s++;
                  var e = (performance || Date).now();
                  if (u.update(e - o, 200), e > a + 1e3 && (l.update(1e3 * s / (e - a), 100), a = e, s = 0, c)) {
                     var t = performance.memory;
                     c.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576)
                  }
                  return e
               },
               update: function () {
                  o = this.end()
               },
               domElement: i,
               setMode: r
            }
         }).Panel = function (e, t, r) {
            var n = 1 / 0,
               i = 0,
               o = Math.round,
               a = o(window.devicePixelRatio || 1),
               s = 80 * a,
               l = 48 * a,
               u = 3 * a,
               c = 2 * a,
               f = 3 * a,
               d = 15 * a,
               h = 74 * a,
               p = 30 * a,
               g = document.createElement("canvas");
            g.width = s, g.height = l, g.style.cssText = "width:80px;height:48px";
            var m = g.getContext("2d");
            return m.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = r, m.fillRect(0, 0, s, l), m.fillStyle = t, m.fillText(e, u, c), m.fillRect(f, d, h, p), m.fillStyle = r, m.globalAlpha = .9, m.fillRect(f, d, h, p), {
               dom: g,
               update: function (l, v) {
                  n = Math.min(n, l), i = Math.max(i, l), m.fillStyle = r, m.globalAlpha = 1, m.fillRect(0, 0, s, d), m.fillStyle = t, m.fillText(o(l) + " " + e + " (" + o(n) + "-" + o(i) + ")", u, c), m.drawImage(g, f + a, d, h - a, p, f, d, h - a, p), m.fillRect(f + h - a, d, a, p), m.fillStyle = r, m.globalAlpha = .9, m.fillRect(f + h - a, d, a, o((1 - l / v) * p))
               }
            }
         }, t)
      },
      2415: function (e, t, r) {
         "use strict";
         /**
          * @license React
          * use-sync-external-store-shim.production.min.js
          *
          * Copyright (c) Facebook, Inc. and its affiliates.
          *
          * This source code is licensed under the MIT license found in the
          * LICENSE file in the root directory of this source tree.
          */
         var n = r(959),
            i = "function" == typeof Object.is ? Object.is : function (e, t) {
               return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            },
            o = n.useState,
            a = n.useEffect,
            s = n.useLayoutEffect,
            l = n.useDebugValue;

         function u(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
               var r = t();
               return !i(e, r)
            } catch (e) {
               return !0
            }
         }
         var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
            return t()
         } : function (e, t) {
            var r = t(),
               n = o({
                  inst: {
                     value: r,
                     getSnapshot: t
                  }
               }),
               i = n[0].inst,
               c = n[1];
            return s(function () {
               i.value = r, i.getSnapshot = t, u(i) && c({
                  inst: i
               })
            }, [e, r, t]), a(function () {
               return u(i) && c({
                  inst: i
               }), e(function () {
                  u(i) && c({
                     inst: i
                  })
               })
            }, [e]), l(r), r
         };
         t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
      },
      2179: function (e, t, r) {
         "use strict";
         /**
          * @license React
          * use-sync-external-store-shim/with-selector.production.min.js
          *
          * Copyright (c) Facebook, Inc. and its affiliates.
          *
          * This source code is licensed under the MIT license found in the
          * LICENSE file in the root directory of this source tree.
          */
         var n = r(959),
            i = r(4322),
            o = "function" == typeof Object.is ? Object.is : function (e, t) {
               return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            },
            a = i.useSyncExternalStore,
            s = n.useRef,
            l = n.useEffect,
            u = n.useMemo,
            c = n.useDebugValue;
         t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
            var f = s(null);
            if (null === f.current) {
               var d = {
                  hasValue: !1,
                  value: null
               };
               f.current = d
            } else d = f.current;
            var h = a(e, (f = u(function () {
               function e(e) {
                  if (!l) {
                     if (l = !0, a = e, e = n(e), void 0 !== i && d.hasValue) {
                        var t = d.value;
                        if (i(t, e)) return s = t
                     }
                     return s = e
                  }
                  if (t = s, o(a, e)) return t;
                  var r = n(e);
                  return void 0 !== i && i(t, r) ? t : (a = e, s = r)
               }
               var a, s, l = !1,
                  u = void 0 === r ? null : r;
               return [function () {
                  return e(t())
               }, null === u ? void 0 : function () {
                  return e(u())
               }]
            }, [t, r, n, i]))[0], f[1]);
            return l(function () {
               d.hasValue = !0, d.value = h
            }, [h]), c(h), h
         }
      },
      4322: function (e, t, r) {
         "use strict";
         e.exports = r(2415)
      },
      7231: function (e, t, r) {
         "use strict";
         e.exports = r(2179)
      },
      9926: function (e, t, r) {
         "use strict";
         e = r.nmd(e);
         var n, i, o, a, s, l, u = Object.create,
            c = Object.defineProperty,
            f = Object.defineProperties,
            d = Object.getOwnPropertyDescriptor,
            h = Object.getOwnPropertyDescriptors,
            p = Object.getOwnPropertyNames,
            g = Object.getOwnPropertySymbols,
            m = Object.getPrototypeOf,
            v = Object.prototype.hasOwnProperty,
            y = Object.prototype.propertyIsEnumerable,
            _ = (e, t, r) => t in e ? c(e, t, {
               enumerable: !0,
               configurable: !0,
               writable: !0,
               value: r
            }) : e[t] = r,
            b = (e, t) => {
               for (var r in t || (t = {})) v.call(t, r) && _(e, r, t[r]);
               if (g)
                  for (var r of g(t)) y.call(t, r) && _(e, r, t[r]);
               return e
            },
            w = (e, t) => f(e, h(t)),
            x = (e, t) => function () {
               return t || (0, e[p(e)[0]])((t = {
                  exports: {}
               }).exports, t), t.exports
            },
            S = (e, t) => {
               for (var r in t) c(e, r, {
                  get: t[r],
                  enumerable: !0
               })
            },
            T = (e, t, r, n) => {
               if (t && "object" == typeof t || "function" == typeof t)
                  for (let i of p(t)) v.call(e, i) || i === r || c(e, i, {
                     get: () => t[i],
                     enumerable: !(n = d(t, i)) || n.enumerable
                  });
               return e
            },
            P = (e, t, r) => (r = null != e ? u(m(e)) : {}, T(!t && e && e.__esModule ? r : c(r, "default", {
               value: e,
               enumerable: !0
            }), e)),
            E = (e, t, r) => (_(e, "symbol" != typeof t ? t + "" : t, r), r),
            O = x({
               "../node_modules/timing-function/lib/UnitBezier.js"(e, t) {
                  t.exports = function () {
                     function e(e, t, r, n) {
                        this.set(e, t, r, n)
                     }
                     return e.prototype.set = function (e, t, r, n) {
                        this._cx = 3 * e, this._bx = 3 * (r - e) - this._cx, this._ax = 1 - this._cx - this._bx, this._cy = 3 * t, this._by = 3 * (n - t) - this._cy, this._ay = 1 - this._cy - this._by
                     }, e.epsilon = 1e-6, e.prototype._sampleCurveX = function (e) {
                        return ((this._ax * e + this._bx) * e + this._cx) * e
                     }, e.prototype._sampleCurveY = function (e) {
                        return ((this._ay * e + this._by) * e + this._cy) * e
                     }, e.prototype._sampleCurveDerivativeX = function (e) {
                        return (3 * this._ax * e + 2 * this._bx) * e + this._cx
                     }, e.prototype._solveCurveX = function (e, t) {
                        var r, n, i, o, a, s;
                        for (i = void 0, o = void 0, a = void 0, s = void 0, r = void 0, n = void 0, a = e, n = 0; n < 8;) {
                           if (Math.abs(s = this._sampleCurveX(a) - e) < t) return a;
                           if (Math.abs(r = this._sampleCurveDerivativeX(a)) < t) break;
                           a -= s / r, n++
                        }
                        if (i = 0, o = 1, (a = e) < i) return i;
                        if (a > o) return o;
                        for (; i < o && !(Math.abs((s = this._sampleCurveX(a)) - e) < t);) e > s ? i = a : o = a, a = (o - i) * .5 + i;
                        return a
                     }, e.prototype.solve = function (e, t) {
                        return this._sampleCurveY(this._solveCurveX(e, t))
                     }, e.prototype.solveSimple = function (e) {
                        return this._sampleCurveY(this._solveCurveX(e, 1e-6))
                     }, e
                  }()
               }
            }),
            k = x({
               "../node_modules/levenshtein-edit-distance/index.js"(e, t) {
                  var r, n;
                  r = [], n = [], t.exports = function (e, t, i) {
                     var o, a, s, l, u, c, f, d;
                     if (e === t) return 0;
                     if (o = e.length, a = t.length, 0 === o) return a;
                     if (0 === a) return o;
                     for (i && (e = e.toLowerCase(), t = t.toLowerCase()), f = 0; f < o;) n[f] = e.charCodeAt(f), r[f] = ++f;
                     for (d = 0; d < a;)
                        for (s = t.charCodeAt(d), l = u = d++, f = -1; ++f < o;) c = s === n[f] ? u : u + 1, u = r[f], r[f] = l = u > l ? c > l ? l + 1 : c : c > u ? u + 1 : c;
                     return l
                  }
               }
            }),
            C = x({
               "../node_modules/propose/propose.js"(e, t) {
                  var r = k();
                  t.exports = function () {
                     var e, t, n, i, o, a = 0,
                        s = arguments[0],
                        l = arguments[1],
                        u = l.length,
                        c = arguments[2];
                     c && (i = c.threshold, o = c.ignoreCase), void 0 === i && (i = 0);
                     for (var f = 0; f < u; ++f)(e = (t = o ? r(s, l[f], !0) : r(s, l[f])) > s.length ? 1 - t / l[f].length : 1 - t / s.length) > a && (a = e, n = l[f]);
                     return a >= i ? n : null
                  }
               }
            }),
            j = x({
               "../node_modules/fast-deep-equal/index.js"(e, t) {
                  t.exports = function e(t, r) {
                     if (t === r) return !0;
                     if (t && r && "object" == typeof t && "object" == typeof r) {
                        if (t.constructor !== r.constructor) return !1;
                        if (Array.isArray(t)) {
                           if ((n = t.length) != r.length) return !1;
                           for (i = n; 0 != i--;)
                              if (!e(t[i], r[i])) return !1;
                           return !0
                        }
                        if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
                        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
                        if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
                        if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length) return !1;
                        for (i = n; 0 != i--;)
                           if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
                        for (i = n; 0 != i--;) {
                           var n, i, o, a = o[i];
                           if (!e(t[a], r[a])) return !1
                        }
                        return !0
                     }
                     return t != t && r != r
                  }
               }
            }),
            A = {};
         S(A, {
            createRafDriver: () => iO,
            getProject: () => at,
            notify: () => iS,
            onChange: () => ai,
            types: () => iF,
            val: () => ao
         }), e.exports = T(c({}, "__esModule", {
            value: !0
         }), A);
         var M = {};
         S(M, {
            createRafDriver: () => iO,
            getProject: () => at,
            notify: () => iS,
            onChange: () => ai,
            types: () => iF,
            val: () => ao
         });
         var D = r(8035),
            R = new class {
               constructor() {
                  E(this, "atom", new D.Atom({
                     projects: {}
                  }))
               }
               add(e, t) {
                  this.atom.setByPointer(t => t.projects[e], t)
               }
               get(e) {
                  return this.atom.get().projects[e]
               }
               has(e) {
                  return !!this.get(e)
               }
            },
            I = new WeakMap;

         function z(e) {
            return I.get(e)
         }

         function N(e, t) {
            I.set(e, t)
         }
         var L = [],
            F = Array.isArray,
            B = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
            V = "object" == typeof self && self && self.Object === Object && self,
            H = B || V || Function("return this")(),
            U = H.Symbol,
            W = Object.prototype,
            q = W.hasOwnProperty,
            Y = W.toString,
            X = U ? U.toStringTag : void 0,
            $ = function (e) {
               var t = q.call(e, X),
                  r = e[X];
               try {
                  e[X] = void 0;
                  var n = !0
               } catch (e) {}
               var i = Y.call(e);
               return n && (t ? e[X] = r : delete e[X]), i
            },
            Z = Object.prototype.toString,
            G = U ? U.toStringTag : void 0,
            K = function (e) {
               return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : G && G in Object(e) ? $(e) : Z.call(e)
            },
            J = function (e) {
               return null != e && "object" == typeof e
            },
            Q = function (e) {
               return "symbol" == typeof e || J(e) && "[object Symbol]" == K(e)
            },
            ee = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            et = /^\w*$/,
            er = function (e, t) {
               if (F(e)) return !1;
               var r = typeof e;
               return !!("number" == r || "symbol" == r || "boolean" == r || null == e || Q(e)) || et.test(e) || !ee.test(e) || null != t && e in Object(t)
            },
            en = function (e) {
               var t = typeof e;
               return null != e && ("object" == t || "function" == t)
            },
            ei = function (e) {
               if (!en(e)) return !1;
               var t = K(e);
               return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            },
            eo = H["__core-js_shared__"],
            ea = (n = /[^.]+$/.exec(eo && eo.keys && eo.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
            es = Function.prototype.toString,
            el = function (e) {
               if (null != e) {
                  try {
                     return es.call(e)
                  } catch (e) {}
                  try {
                     return e + ""
                  } catch (e) {}
               }
               return ""
            },
            eu = /^\[object .+?Constructor\]$/,
            ec = Object.prototype,
            ef = Function.prototype.toString,
            ed = ec.hasOwnProperty,
            eh = RegExp("^" + ef.call(ed).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            ep = function (e, t) {
               var r, n = null == e ? void 0 : e[t];
               return en(r = n) && (!ea || !(ea in r)) && (ei(r) ? eh : eu).test(el(r)) ? n : void 0
            },
            eg = ep(Object, "create"),
            em = Object.prototype.hasOwnProperty,
            ev = Object.prototype.hasOwnProperty;

         function ey(e) {
            var t = -1,
               r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
               var n = e[t];
               this.set(n[0], n[1])
            }
         }
         ey.prototype.clear = function () {
            this.__data__ = eg ? eg(null) : {}, this.size = 0
         }, ey.prototype.delete = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
         }, ey.prototype.get = function (e) {
            var t = this.__data__;
            if (eg) {
               var r = t[e];
               return "__lodash_hash_undefined__" === r ? void 0 : r
            }
            return em.call(t, e) ? t[e] : void 0
         }, ey.prototype.has = function (e) {
            var t = this.__data__;
            return eg ? void 0 !== t[e] : ev.call(t, e)
         }, ey.prototype.set = function (e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = eg && void 0 === t ? "__lodash_hash_undefined__" : t, this
         };
         var e_ = function (e, t) {
               return e === t || e != e && t != t
            },
            eb = function (e, t) {
               for (var r = e.length; r--;)
                  if (e_(e[r][0], t)) return r;
               return -1
            },
            ew = Array.prototype.splice;

         function ex(e) {
            var t = -1,
               r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
               var n = e[t];
               this.set(n[0], n[1])
            }
         }
         ex.prototype.clear = function () {
            this.__data__ = [], this.size = 0
         }, ex.prototype.delete = function (e) {
            var t = this.__data__,
               r = eb(t, e);
            return !(r < 0) && (r == t.length - 1 ? t.pop() : ew.call(t, r, 1), --this.size, !0)
         }, ex.prototype.get = function (e) {
            var t = this.__data__,
               r = eb(t, e);
            return r < 0 ? void 0 : t[r][1]
         }, ex.prototype.has = function (e) {
            return eb(this.__data__, e) > -1
         }, ex.prototype.set = function (e, t) {
            var r = this.__data__,
               n = eb(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
         };
         var eS = ep(H, "Map"),
            eT = function (e) {
               var t = typeof e;
               return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            },
            eP = function (e, t) {
               var r = e.__data__;
               return eT(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            };

         function eE(e) {
            var t = -1,
               r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
               var n = e[t];
               this.set(n[0], n[1])
            }
         }

         function eO(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
            var r = function () {
               var n = arguments,
                  i = t ? t.apply(this, n) : n[0],
                  o = r.cache;
               if (o.has(i)) return o.get(i);
               var a = e.apply(this, n);
               return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(eO.Cache || eE), r
         }
         eE.prototype.clear = function () {
            this.size = 0, this.__data__ = {
               hash: new ey,
               map: new(eS || ex),
               string: new ey
            }
         }, eE.prototype.delete = function (e) {
            var t = eP(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
         }, eE.prototype.get = function (e) {
            return eP(this, e).get(e)
         }, eE.prototype.has = function (e) {
            return eP(this, e).has(e)
         }, eE.prototype.set = function (e, t) {
            var r = eP(this, e),
               n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
         }, eO.Cache = eE;
         var ek = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            eC = /\\(\\)?/g,
            ej = (o = (i = eO(function (e) {
               var t = [];
               return 46 === e.charCodeAt(0) && t.push(""), e.replace(ek, function (e, r, n, i) {
                  t.push(n ? i.replace(eC, "$1") : r || e)
               }), t
            }, function (e) {
               return 500 === o.size && o.clear(), e
            })).cache, i),
            eA = function (e, t) {
               for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
               return i
            },
            eM = 1 / 0,
            eD = U ? U.prototype : void 0,
            eR = eD ? eD.toString : void 0,
            eI = function e(t) {
               if ("string" == typeof t) return t;
               if (F(t)) return eA(t, e) + "";
               if (Q(t)) return eR ? eR.call(t) : "";
               var r = t + "";
               return "0" == r && 1 / t == -eM ? "-0" : r
            },
            ez = function (e) {
               return null == e ? "" : eI(e)
            },
            eN = function (e, t) {
               return F(e) ? e : er(e, t) ? [e] : ej(ez(e))
            },
            eL = 1 / 0,
            eF = function (e) {
               if ("string" == typeof e || Q(e)) return e;
               var t = e + "";
               return "0" == t && 1 / e == -eL ? "-0" : t
            },
            eB = function (e, t) {
               t = eN(t, e);
               for (var r = 0, n = t.length; null != e && r < n;) e = e[eF(t[r++])];
               return r && r == n ? e : void 0
            },
            eV = function (e, t, r) {
               var n = null == e ? void 0 : eB(e, t);
               return void 0 === n ? r : n
            };

         function eH(e, t) {
            return 0 === t.length ? e : eV(e, t)
         }
         var eU = class {
               constructor() {
                  E(this, "_values", {})
               }
               get(e, t) {
                  if (this.has(e)) return this._values[e]; {
                     let r = t();
                     return this._values[e] = r, r
                  }
               }
               has(e) {
                  return this._values.hasOwnProperty(e)
               }
            },
            eW = r(8035),
            eq = function () {
               try {
                  var e = ep(Object, "defineProperty");
                  return e({}, "", {}), e
               } catch (e) {}
            }(),
            eY = function (e, t, r) {
               "__proto__" == t && eq ? eq(e, t, {
                  configurable: !0,
                  enumerable: !0,
                  value: r,
                  writable: !0
               }) : e[t] = r
            },
            eX = Object.prototype.hasOwnProperty,
            e$ = function (e, t, r) {
               var n = e[t];
               eX.call(e, t) && e_(n, r) && (void 0 !== r || t in e) || eY(e, t, r)
            },
            eZ = /^(?:0|[1-9]\d*)$/,
            eG = function (e, t) {
               var r = typeof e;
               return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && eZ.test(e)) && e > -1 && e % 1 == 0 && e < t
            },
            eK = function (e, t, r, n) {
               if (!en(e)) return e;
               t = eN(t, e);
               for (var i = -1, o = t.length, a = o - 1, s = e; null != s && ++i < o;) {
                  var l = eF(t[i]),
                     u = r;
                  if ("__proto__" === l || "constructor" === l || "prototype" === l) break;
                  if (i != a) {
                     var c = s[l];
                     void 0 === (u = n ? n(c, l, s) : void 0) && (u = en(c) ? c : eG(t[i + 1]) ? [] : {})
                  }
                  e$(s, l, u), s = s[l]
               }
               return e
            },
            eJ = new WeakMap,
            eQ = r(8035),
            e0 = P(O()),
            e1 = (0, eQ.prism)(() => void 0),
            e2 = {
               beforeFirstKeyframe: e => ({
                  started: !0,
                  validFrom: -1 / 0,
                  validTo: e.position,
                  der: (0, eQ.prism)(() => ({
                     left: e.value,
                     progression: 0
                  }))
               }),
               lastKeyframe: e => ({
                  started: !0,
                  validFrom: e.position,
                  validTo: 1 / 0,
                  der: (0, eQ.prism)(() => ({
                     left: e.value,
                     progression: 0
                  }))
               }),
               between(e, t, r) {
                  if (!e.connectedRight) return {
                     started: !0,
                     validFrom: e.position,
                     validTo: t.position,
                     der: (0, eQ.prism)(() => ({
                        left: e.value,
                        progression: 0
                     }))
                  };
                  let n = r => (r - e.position) / (t.position - e.position);
                  if (!e.type || "bezier" === e.type) {
                     let i = new e0.default(e.handles[2], e.handles[3], t.handles[0], t.handles[1]),
                        o = (0, eQ.prism)(() => {
                           let o = n(r.getValue()),
                              a = i.solveSimple(o);
                           return {
                              left: e.value,
                              right: t.value,
                              progression: a
                           }
                        });
                     return {
                        started: !0,
                        validFrom: e.position,
                        validTo: t.position,
                        der: o
                     }
                  }
                  let i = (0, eQ.prism)(() => {
                     let i = Math.floor(n(r.getValue()));
                     return {
                        left: e.value,
                        right: t.value,
                        progression: i
                     }
                  });
                  return {
                     started: !0,
                     validFrom: e.position,
                     validTo: t.position,
                     der: i
                  }
               },
               error: {
                  started: !0,
                  validFrom: -1 / 0,
                  validTo: 1 / 0,
                  der: e1
               }
            };

         function e5(e, t, r) {
            let n = r.get(e);
            if (n && n.override === t) return n.merged;
            let i = b({}, e);
            for (let n of Object.keys(t)) {
               let o = t[n],
                  a = e[n];
               i[n] = "object" == typeof o && "object" == typeof a ? e5(a, o, r) : void 0 === o ? a : o
            }
            return r.set(e, {
               override: t,
               merged: i
            }), i
         }

         function e3(e, t) {
            let r = e;
            for (let e of t) r = r[e];
            return r
         }
         var e8 = r(8035),
            e9 = (e, t) => {
               let r = e8.prism.memo(e, () => new e8.Atom(t), []);
               return r.set(t), r
            },
            e6 = r(8035),
            e4 = r(8035),
            e7 = /\s/,
            te = function (e) {
               for (var t = e.length; t-- && e7.test(e.charAt(t)););
               return t
            },
            tt = /^\s+/,
            tr = 0 / 0,
            tn = /^[-+]0x[0-9a-f]+$/i,
            ti = /^0b[01]+$/i,
            to = /^0o[0-7]+$/i,
            ta = parseInt,
            ts = function (e) {
               if ("number" == typeof e) return e;
               if (Q(e)) return tr;
               if (en(e)) {
                  var t, r = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = en(r) ? r + "" : r
               }
               if ("string" != typeof e) return 0 === e ? e : +e;
               e = (t = e) ? t.slice(0, te(t) + 1).replace(tt, "") : t;
               var n = ti.test(e);
               return n || to.test(e) ? ta(e.slice(2), n ? 2 : 8) : tn.test(e) ? tr : +e
            },
            tl = 1 / 0,
            tu = function (e) {
               var t, r = (t = e) ? (t = ts(t)) === tl || t === -tl ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0,
                  n = r % 1;
               return r == r ? n ? r - n : r : 0
            },
            tc = function (e) {
               return e
            },
            tf = ep(H, "WeakMap"),
            td = Object.create,
            th = function () {
               function e() {}
               return function (t) {
                  if (!en(t)) return {};
                  if (td) return td(t);
                  e.prototype = t;
                  var r = new e;
                  return e.prototype = void 0, r
               }
            }(),
            tp = function (e, t) {
               var r = -1,
                  n = e.length;
               for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
               return t
            },
            tg = function (e, t) {
               for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
               return e
            },
            tm = function (e, t, r, n) {
               var i = !r;
               r || (r = {});
               for (var o = -1, a = t.length; ++o < a;) {
                  var s = t[o],
                     l = n ? n(r[s], e[s], s, r, e) : void 0;
                  void 0 === l && (l = e[s]), i ? eY(r, s, l) : e$(r, s, l)
               }
               return r
            },
            tv = function (e) {
               return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            },
            ty = function (e) {
               return null != e && tv(e.length) && !ei(e)
            },
            t_ = Object.prototype,
            tb = function (e) {
               var t = e && e.constructor;
               return e === ("function" == typeof t && t.prototype || t_)
            },
            tw = function (e, t) {
               for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
               return n
            },
            tx = function (e) {
               return J(e) && "[object Arguments]" == K(e)
            },
            tS = Object.prototype,
            tT = tS.hasOwnProperty,
            tP = tS.propertyIsEnumerable,
            tE = tx(function () {
               return arguments
            }()) ? tx : function (e) {
               return J(e) && tT.call(e, "callee") && !tP.call(e, "callee")
            },
            tO = t && !t.nodeType && t,
            tk = tO && e && !e.nodeType && e,
            tC = tk && tk.exports === tO ? H.Buffer : void 0,
            tj = (tC ? tC.isBuffer : void 0) || function () {
               return !1
            },
            tA = {};
         tA["[object Float32Array]"] = tA["[object Float64Array]"] = tA["[object Int8Array]"] = tA["[object Int16Array]"] = tA["[object Int32Array]"] = tA["[object Uint8Array]"] = tA["[object Uint8ClampedArray]"] = tA["[object Uint16Array]"] = tA["[object Uint32Array]"] = !0, tA["[object Arguments]"] = tA["[object Array]"] = tA["[object ArrayBuffer]"] = tA["[object Boolean]"] = tA["[object DataView]"] = tA["[object Date]"] = tA["[object Error]"] = tA["[object Function]"] = tA["[object Map]"] = tA["[object Number]"] = tA["[object Object]"] = tA["[object RegExp]"] = tA["[object Set]"] = tA["[object String]"] = tA["[object WeakMap]"] = !1;
         var tM = function (e) {
               return function (t) {
                  return e(t)
               }
            },
            tD = t && !t.nodeType && t,
            tR = tD && e && !e.nodeType && e,
            tI = tR && tR.exports === tD && B.process,
            tz = function () {
               try {
                  var e = tR && tR.require && tR.require("util").types;
                  if (e) return e;
                  return tI && tI.binding && tI.binding("util")
               } catch (e) {}
            }(),
            tN = tz && tz.isTypedArray,
            tL = tN ? tM(tN) : function (e) {
               return J(e) && tv(e.length) && !!tA[K(e)]
            },
            tF = Object.prototype.hasOwnProperty,
            tB = function (e, t) {
               var r = F(e),
                  n = !r && tE(e),
                  i = !r && !n && tj(e),
                  o = !r && !n && !i && tL(e),
                  a = r || n || i || o,
                  s = a ? tw(e.length, String) : [],
                  l = s.length;
               for (var u in e)(t || tF.call(e, u)) && !(a && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || eG(u, l))) && s.push(u);
               return s
            },
            tV = function (e, t) {
               return function (r) {
                  return e(t(r))
               }
            },
            tH = tV(Object.keys, Object),
            tU = Object.prototype.hasOwnProperty,
            tW = function (e) {
               if (!tb(e)) return tH(e);
               var t = [];
               for (var r in Object(e)) tU.call(e, r) && "constructor" != r && t.push(r);
               return t
            },
            tq = function (e) {
               return ty(e) ? tB(e) : tW(e)
            },
            tY = function (e) {
               var t = [];
               if (null != e)
                  for (var r in Object(e)) t.push(r);
               return t
            },
            tX = Object.prototype.hasOwnProperty,
            t$ = function (e) {
               if (!en(e)) return tY(e);
               var t = tb(e),
                  r = [];
               for (var n in e) "constructor" == n && (t || !tX.call(e, n)) || r.push(n);
               return r
            },
            tZ = function (e) {
               return ty(e) ? tB(e, !0) : t$(e)
            },
            tG = function (e, t) {
               for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
               return e
            },
            tK = tV(Object.getPrototypeOf, Object),
            tJ = Object.prototype,
            tQ = Function.prototype.toString,
            t0 = tJ.hasOwnProperty,
            t1 = tQ.call(Object),
            t2 = function (e) {
               if (!J(e) || "[object Object]" != K(e)) return !1;
               var t = tK(e);
               if (null === t) return !0;
               var r = t0.call(t, "constructor") && t.constructor;
               return "function" == typeof r && r instanceof r && tQ.call(r) == t1
            },
            t5 = function (e, t, r) {
               var n = -1,
                  i = e.length;
               t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
               for (var o = Array(i); ++n < i;) o[n] = e[n + t];
               return o
            },
            t3 = function (e, t, r) {
               var n = e.length;
               return r = void 0 === r ? n : r, !t && r >= n ? e : t5(e, t, r)
            },
            t8 = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
            t9 = function (e) {
               return t8.test(e)
            },
            t6 = "\ud800-\udfff",
            t4 = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            t7 = "\ud83c[\udffb-\udfff]",
            re = "[^" + t6 + "]",
            rt = "(?:\ud83c[\udde6-\uddff]){2}",
            rr = "[\ud800-\udbff][\udc00-\udfff]",
            rn = "(?:" + t4 + "|" + t7 + ")?",
            ri = "[\\ufe0e\\ufe0f]?",
            ro = "(?:\\u200d(?:" + [re, rt, rr].join("|") + ")" + ri + rn + ")*",
            ra = RegExp(t7 + "(?=" + t7 + ")|(?:" + [re + t4 + "?", t4, rt, rr, "[" + t6 + "]"].join("|") + ")" + (ri + rn + ro), "g"),
            rs = function (e, t, r) {
               var n, i, o;
               return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = ts(r)) == r ? r : 0), void 0 !== t && (t = (t = ts(t)) == t ? t : 0), n = ts(e), i = t, o = r, n == n && (void 0 !== o && (n = n <= o ? n : o), void 0 !== i && (n = n >= i ? n : i)), n
            };

         function rl(e) {
            var t = this.__data__ = new ex(e);
            this.size = t.size
         }
         rl.prototype.clear = function () {
            this.__data__ = new ex, this.size = 0
         }, rl.prototype.delete = function (e) {
            var t = this.__data__,
               r = t.delete(e);
            return this.size = t.size, r
         }, rl.prototype.get = function (e) {
            return this.__data__.get(e)
         }, rl.prototype.has = function (e) {
            return this.__data__.has(e)
         }, rl.prototype.set = function (e, t) {
            var r = this.__data__;
            if (r instanceof ex) {
               var n = r.__data__;
               if (!eS || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
               r = this.__data__ = new eE(n)
            }
            return r.set(e, t), this.size = r.size, this
         };
         var ru = t && !t.nodeType && t,
            rc = ru && e && !e.nodeType && e,
            rf = rc && rc.exports === ru ? H.Buffer : void 0,
            rd = rf ? rf.allocUnsafe : void 0,
            rh = function (e, t) {
               if (t) return e.slice();
               var r = e.length,
                  n = rd ? rd(r) : new e.constructor(r);
               return e.copy(n), n
            },
            rp = function (e, t) {
               for (var r = -1, n = null == e ? 0 : e.length, i = 0, o = []; ++r < n;) {
                  var a = e[r];
                  t(a, r, e) && (o[i++] = a)
               }
               return o
            },
            rg = function () {
               return []
            },
            rm = Object.prototype.propertyIsEnumerable,
            rv = Object.getOwnPropertySymbols,
            ry = rv ? function (e) {
               return null == e ? [] : rp(rv(e = Object(e)), function (t) {
                  return rm.call(e, t)
               })
            } : rg,
            r_ = Object.getOwnPropertySymbols ? function (e) {
               for (var t = []; e;) tG(t, ry(e)), e = tK(e);
               return t
            } : rg,
            rb = function (e, t, r) {
               var n = t(e);
               return F(e) ? n : tG(n, r(e))
            },
            rw = function (e) {
               return rb(e, tq, ry)
            },
            rx = function (e) {
               return rb(e, tZ, r_)
            },
            rS = ep(H, "DataView"),
            rT = ep(H, "Promise"),
            rP = ep(H, "Set"),
            rE = "[object Map]",
            rO = "[object Promise]",
            rk = "[object Set]",
            rC = "[object WeakMap]",
            rj = "[object DataView]",
            rA = el(rS),
            rM = el(eS),
            rD = el(rT),
            rR = el(rP),
            rI = el(tf),
            rz = K;
         (rS && rz(new rS(new ArrayBuffer(1))) != rj || eS && rz(new eS) != rE || rT && rz(rT.resolve()) != rO || rP && rz(new rP) != rk || tf && rz(new tf) != rC) && (rz = function (e) {
            var t = K(e),
               r = "[object Object]" == t ? e.constructor : void 0,
               n = r ? el(r) : "";
            if (n) switch (n) {
               case rA:
                  return rj;
               case rM:
                  return rE;
               case rD:
                  return rO;
               case rR:
                  return rk;
               case rI:
                  return rC
            }
            return t
         });
         var rN = rz,
            rL = Object.prototype.hasOwnProperty,
            rF = function (e) {
               var t = e.length,
                  r = new e.constructor(t);
               return t && "string" == typeof e[0] && rL.call(e, "index") && (r.index = e.index, r.input = e.input), r
            },
            rB = H.Uint8Array,
            rV = function (e) {
               var t = new e.constructor(e.byteLength);
               return new rB(t).set(new rB(e)), t
            },
            rH = function (e, t) {
               var r = t ? rV(e.buffer) : e.buffer;
               return new e.constructor(r, e.byteOffset, e.byteLength)
            },
            rU = /\w*$/,
            rW = function (e) {
               var t = new e.constructor(e.source, rU.exec(e));
               return t.lastIndex = e.lastIndex, t
            },
            rq = U ? U.prototype : void 0,
            rY = rq ? rq.valueOf : void 0,
            rX = function (e, t) {
               var r = t ? rV(e.buffer) : e.buffer;
               return new e.constructor(r, e.byteOffset, e.length)
            },
            r$ = function (e, t, r) {
               var n = e.constructor;
               switch (t) {
                  case "[object ArrayBuffer]":
                     return rV(e);
                  case "[object Boolean]":
                  case "[object Date]":
                     return new n(+e);
                  case "[object DataView]":
                     return rH(e, r);
                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                     return rX(e, r);
                  case "[object Map]":
                  case "[object Set]":
                     return new n;
                  case "[object Number]":
                  case "[object String]":
                     return new n(e);
                  case "[object RegExp]":
                     return rW(e);
                  case "[object Symbol]":
                     return rY ? Object(rY.call(e)) : {}
               }
            },
            rZ = tz && tz.isMap,
            rG = rZ ? tM(rZ) : function (e) {
               return J(e) && "[object Map]" == rN(e)
            },
            rK = tz && tz.isSet,
            rJ = rK ? tM(rK) : function (e) {
               return J(e) && "[object Set]" == rN(e)
            },
            rQ = "[object Arguments]",
            r0 = "[object Function]",
            r1 = "[object Object]",
            r2 = {};
         r2[rQ] = r2["[object Array]"] = r2["[object ArrayBuffer]"] = r2["[object DataView]"] = r2["[object Boolean]"] = r2["[object Date]"] = r2["[object Float32Array]"] = r2["[object Float64Array]"] = r2["[object Int8Array]"] = r2["[object Int16Array]"] = r2["[object Int32Array]"] = r2["[object Map]"] = r2["[object Number]"] = r2[r1] = r2["[object RegExp]"] = r2["[object Set]"] = r2["[object String]"] = r2["[object Symbol]"] = r2["[object Uint8Array]"] = r2["[object Uint8ClampedArray]"] = r2["[object Uint16Array]"] = r2["[object Uint32Array]"] = !0, r2["[object Error]"] = r2[r0] = r2["[object WeakMap]"] = !1;
         var r5 = function e(t, r, n, i, o, a) {
            var s, l = 1 & r,
               u = 2 & r,
               c = 4 & r;
            if (n && (s = o ? n(t, i, o, a) : n(t)), void 0 !== s) return s;
            if (!en(t)) return t;
            var f = F(t);
            if (f) {
               if (s = rF(t), !l) return tp(t, s)
            } else {
               var d, h, p, g, m = rN(t),
                  v = m == r0 || "[object GeneratorFunction]" == m;
               if (tj(t)) return rh(t, l);
               if (m == r1 || m == rQ || v && !o) {
                  if (s = u || v ? {} : "function" != typeof t.constructor || tb(t) ? {} : th(tK(t)), !l) return u ? (h = (d = s) && tm(t, tZ(t), d), tm(t, r_(t), h)) : (g = (p = s) && tm(t, tq(t), p), tm(t, ry(t), g))
               } else {
                  if (!r2[m]) return o ? t : {};
                  s = r$(t, m, l)
               }
            }
            a || (a = new rl);
            var y = a.get(t);
            if (y) return y;
            a.set(t, s), rJ(t) ? t.forEach(function (i) {
               s.add(e(i, r, n, i, t, a))
            }) : rG(t) && t.forEach(function (i, o) {
               s.set(o, e(i, r, n, o, t, a))
            });
            var _ = c ? u ? rx : rw : u ? tZ : tq,
               b = f ? void 0 : _(t);
            return tg(b || t, function (i, o) {
               b && (i = t[o = i]), e$(s, o, e(i, r, n, o, t, a))
            }), s
         };

         function r3(e) {
            var t = -1,
               r = null == e ? 0 : e.length;
            for (this.__data__ = new eE; ++t < r;) this.add(e[t])
         }
         r3.prototype.add = r3.prototype.push = function (e) {
            return this.__data__.set(e, "__lodash_hash_undefined__"), this
         }, r3.prototype.has = function (e) {
            return this.__data__.has(e)
         };
         var r8 = function (e, t) {
               for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                  if (t(e[r], r, e)) return !0;
               return !1
            },
            r9 = function (e, t, r, n, i, o) {
               var a = 1 & r,
                  s = e.length,
                  l = t.length;
               if (s != l && !(a && l > s)) return !1;
               var u = o.get(e),
                  c = o.get(t);
               if (u && c) return u == t && c == e;
               var f = -1,
                  d = !0,
                  h = 2 & r ? new r3 : void 0;
               for (o.set(e, t), o.set(t, e); ++f < s;) {
                  var p = e[f],
                     g = t[f];
                  if (n) var m = a ? n(g, p, f, t, e, o) : n(p, g, f, e, t, o);
                  if (void 0 !== m) {
                     if (m) continue;
                     d = !1;
                     break
                  }
                  if (h) {
                     if (!r8(t, function (e, t) {
                           if (!h.has(t) && (p === e || i(p, e, r, n, o))) return h.push(t)
                        })) {
                        d = !1;
                        break
                     }
                  } else if (!(p === g || i(p, g, r, n, o))) {
                     d = !1;
                     break
                  }
               }
               return o.delete(e), o.delete(t), d
            },
            r6 = function (e) {
               var t = -1,
                  r = Array(e.size);
               return e.forEach(function (e, n) {
                  r[++t] = [n, e]
               }), r
            },
            r4 = function (e) {
               var t = -1,
                  r = Array(e.size);
               return e.forEach(function (e) {
                  r[++t] = e
               }), r
            },
            r7 = U ? U.prototype : void 0,
            ne = r7 ? r7.valueOf : void 0,
            nt = function (e, t, r, n, i, o, a) {
               switch (r) {
                  case "[object DataView]":
                     if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                     e = e.buffer, t = t.buffer;
                  case "[object ArrayBuffer]":
                     if (e.byteLength != t.byteLength || !o(new rB(e), new rB(t))) break;
                     return !0;
                  case "[object Boolean]":
                  case "[object Date]":
                  case "[object Number]":
                     return e_(+e, +t);
                  case "[object Error]":
                     return e.name == t.name && e.message == t.message;
                  case "[object RegExp]":
                  case "[object String]":
                     return e == t + "";
                  case "[object Map]":
                     var s = r6;
                  case "[object Set]":
                     var l = 1 & n;
                     if (s || (s = r4), e.size != t.size && !l) break;
                     var u = a.get(e);
                     if (u) return u == t;
                     n |= 2, a.set(e, t);
                     var c = r9(s(e), s(t), n, i, o, a);
                     return a.delete(e), c;
                  case "[object Symbol]":
                     if (ne) return ne.call(e) == ne.call(t)
               }
               return !1
            },
            nr = Object.prototype.hasOwnProperty,
            nn = function (e, t, r, n, i, o) {
               var a = 1 & r,
                  s = rw(e),
                  l = s.length;
               if (l != rw(t).length && !a) return !1;
               for (var u = l; u--;) {
                  var c = s[u];
                  if (!(a ? c in t : nr.call(t, c))) return !1
               }
               var f = o.get(e),
                  d = o.get(t);
               if (f && d) return f == t && d == e;
               var h = !0;
               o.set(e, t), o.set(t, e);
               for (var p = a; ++u < l;) {
                  var g = e[c = s[u]],
                     m = t[c];
                  if (n) var v = a ? n(m, g, c, t, e, o) : n(g, m, c, e, t, o);
                  if (!(void 0 === v ? g === m || i(g, m, r, n, o) : v)) {
                     h = !1;
                     break
                  }
                  p || (p = "constructor" == c)
               }
               if (h && !p) {
                  var y = e.constructor,
                     _ = t.constructor;
                  y != _ && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof _ && _ instanceof _) && (h = !1)
               }
               return o.delete(e), o.delete(t), h
            },
            ni = "[object Arguments]",
            no = "[object Array]",
            na = "[object Object]",
            ns = Object.prototype.hasOwnProperty,
            nl = function (e, t, r, n, i, o) {
               var a = F(e),
                  s = F(t),
                  l = a ? no : rN(e),
                  u = s ? no : rN(t);
               l = l == ni ? na : l, u = u == ni ? na : u;
               var c = l == na,
                  f = u == na,
                  d = l == u;
               if (d && tj(e)) {
                  if (!tj(t)) return !1;
                  a = !0, c = !1
               }
               if (d && !c) return o || (o = new rl), a || tL(e) ? r9(e, t, r, n, i, o) : nt(e, t, l, r, n, i, o);
               if (!(1 & r)) {
                  var h = c && ns.call(e, "__wrapped__"),
                     p = f && ns.call(t, "__wrapped__");
                  if (h || p) {
                     var g = h ? e.value() : e,
                        m = p ? t.value() : t;
                     return o || (o = new rl), i(g, m, r, n, o)
                  }
               }
               return !!d && (o || (o = new rl), nn(e, t, r, n, i, o))
            },
            nu = function e(t, r, n, i, o) {
               return t === r || (null != t && null != r && (J(t) || J(r)) ? nl(t, r, n, i, e, o) : t != t && r != r)
            },
            nc = function (e, t, r, n) {
               var i = r.length,
                  o = i,
                  a = !n;
               if (null == e) return !o;
               for (e = Object(e); i--;) {
                  var s = r[i];
                  if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
               }
               for (; ++i < o;) {
                  var l = (s = r[i])[0],
                     u = e[l],
                     c = s[1];
                  if (a && s[2]) {
                     if (void 0 === u && !(l in e)) return !1
                  } else {
                     var f = new rl;
                     if (n) var d = n(u, c, l, e, t, f);
                     if (!(void 0 === d ? nu(c, u, 3, n, f) : d)) return !1
                  }
               }
               return !0
            },
            nf = function (e) {
               return e == e && !en(e)
            },
            nd = function (e) {
               for (var t = tq(e), r = t.length; r--;) {
                  var n = t[r],
                     i = e[n];
                  t[r] = [n, i, nf(i)]
               }
               return t
            },
            nh = function (e, t) {
               return function (r) {
                  return null != r && r[e] === t && (void 0 !== t || e in Object(r))
               }
            },
            np = function (e) {
               var t = nd(e);
               return 1 == t.length && t[0][2] ? nh(t[0][0], t[0][1]) : function (r) {
                  return r === e || nc(r, e, t)
               }
            },
            ng = function (e, t) {
               return null != e && t in Object(e)
            },
            nm = function (e, t, r) {
               t = eN(t, e);
               for (var n = -1, i = t.length, o = !1; ++n < i;) {
                  var a = eF(t[n]);
                  if (!(o = null != e && r(e, a))) break;
                  e = e[a]
               }
               return o || ++n != i ? o : !!(i = null == e ? 0 : e.length) && tv(i) && eG(a, i) && (F(e) || tE(e))
            },
            nv = function (e) {
               return function (t) {
                  return null == t ? void 0 : t[e]
               }
            },
            ny = function (e) {
               var t, r, n;
               if ("function" == typeof e) return e;
               if (null == e) return tc;
               if ("object" == typeof e) {
                  return F(e) ? (t = e[0], r = e[1], er(t) && nf(r) ? nh(eF(t), r) : function (e) {
                     var n = eV(e, t);
                     return void 0 === n && n === r ? null != e && nm(e, t, ng) : nu(r, n, 3)
                  }) : np(e)
               }
               return er(n = e) ? nv(eF(n)) : function (e) {
                  return eB(e, n)
               }
            },
            n_ = function (e, t, r) {
               for (var n = -1, i = Object(e), o = r(e), a = o.length; a--;) {
                  var s = o[++n];
                  if (!1 === t(i[s], s, i)) break
               }
               return e
            },
            nb = function () {
               return H.Date.now()
            },
            nw = Math.max,
            nx = Math.min,
            nS = function (e, t, r) {
               var n, i, o, a, s, l, u = 0,
                  c = !1,
                  f = !1,
                  d = !0;
               if ("function" != typeof e) throw TypeError("Expected a function");

               function h(t) {
                  var r = n,
                     o = i;
                  return n = i = void 0, u = t, a = e.apply(o, r)
               }

               function p(e) {
                  var r = e - l,
                     n = e - u;
                  return void 0 === l || r >= t || r < 0 || f && n >= o
               }

               function g() {
                  var e, r, n, i = nb();
                  if (p(i)) return m(i);
                  s = setTimeout(g, (e = i - l, r = i - u, n = t - e, f ? nx(n, o - r) : n))
               }

               function m(e) {
                  return (s = void 0, d && n) ? h(e) : (n = i = void 0, a)
               }

               function v() {
                  var e, r = nb(),
                     o = p(r);
                  if (n = arguments, i = this, l = r, o) {
                     if (void 0 === s) return u = e = l, s = setTimeout(g, t), c ? h(e) : a;
                     if (f) return clearTimeout(s), s = setTimeout(g, t), h(l)
                  }
                  return void 0 === s && (s = setTimeout(g, t)), a
               }
               return t = ts(t) || 0, en(r) && (c = !!r.leading, o = (f = "maxWait" in r) ? nw(ts(r.maxWait) || 0, t) : o, d = "trailing" in r ? !!r.trailing : d), v.cancel = function () {
                  void 0 !== s && clearTimeout(s), u = 0, n = l = i = s = void 0
               }, v.flush = function () {
                  return void 0 === s ? a : m(nb())
               }, v
            },
            nT = function (e) {
               var t = null == e ? 0 : e.length;
               return t ? e[t - 1] : void 0
            },
            nP = function (e, t) {
               var r = {};
               return t = ny(t, 3), e && n_(e, function (e, n, i) {
                  eY(r, n, t(e, n, i))
               }, tq), r
            },
            nE = function (e, t) {
               var r, n;
               return t = eN(t, e), r = e, null == (e = (n = t).length < 2 ? r : eB(r, t5(n, 0, -1))) || delete e[eF(nT(t))]
            },
            nO = Math.floor,
            nk = function (e, t) {
               var r = "";
               if (!e || t < 1 || t > 9007199254740991) return r;
               do t % 2 && (r += e), (t = nO(t / 2)) && (e += e); while (t);
               return r
            },
            nC = nv("length"),
            nj = "\ud800-\udfff",
            nA = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            nM = "\ud83c[\udffb-\udfff]",
            nD = "[^" + nj + "]",
            nR = "(?:\ud83c[\udde6-\uddff]){2}",
            nI = "[\ud800-\udbff][\udc00-\udfff]",
            nz = "(?:" + nA + "|" + nM + ")?",
            nN = "[\\ufe0e\\ufe0f]?",
            nL = "(?:\\u200d(?:" + [nD, nR, nI].join("|") + ")" + nN + nz + ")*",
            nF = RegExp(nM + "(?=" + nM + ")|(?:" + [nD + nA + "?", nA, nR, nI, "[" + nj + "]"].join("|") + ")" + (nN + nz + nL), "g"),
            nB = function (e) {
               for (var t = nF.lastIndex = 0; nF.test(e);) ++t;
               return t
            },
            nV = function (e) {
               return t9(e) ? nB(e) : nC(e)
            },
            nH = Math.ceil,
            nU = function (e, t) {
               var r = (t = void 0 === t ? " " : eI(t)).length;
               if (r < 2) return r ? nk(t, e) : t;
               var n = nk(t, nH(e / nV(t)));
               return t9(t) ? t3(t9(n) ? n.match(ra) || [] : n.split(""), 0, e).join("") : n.slice(0, e)
            },
            nW = function (e, t, r) {
               e = ez(e);
               var n = (t = tu(t)) ? nV(e) : 0;
               return t && n < t ? nU(t - n, r) + e : e
            },
            nq = function (e, t) {
               return null == e || nE(e, t)
            },
            nY = class {
               constructor(e) {
                  E(this, "_cache", new eU), E(this, "_keepHotUntapDebounce"), N(this, e)
               }
               get type() {
                  return "Theatre_SheetObject_PublicAPI"
               }
               get props() {
                  return z(this).propsP
               }
               get sheet() {
                  return z(this).sheet.publicApi
               }
               get project() {
                  return z(this).sheet.project.publicApi
               }
               get address() {
                  return b({}, z(this).address)
               }
               _valuesPrism() {
                  return this._cache.get("_valuesPrism", () => {
                     let e = z(this);
                     return (0, e4.prism)(() => (0, e4.val)(e.getValues().getValue()))
                  })
               }
               onValuesChange(e, t) {
                  return ai(this._valuesPrism(), e, t)
               }
               get value() {
                  let e = this._valuesPrism();
                  if (!e.isHot) {
                     null != this._keepHotUntapDebounce && this._keepHotUntapDebounce.flush();
                     let t = e.keepHot();
                     this._keepHotUntapDebounce = nS(() => {
                        t(), this._keepHotUntapDebounce = void 0
                     }, 5e3)
                  }
                  return this._keepHotUntapDebounce && this._keepHotUntapDebounce(), e.getValue()
               }
               set initialValue(e) {
                  z(this).setInitialValue(e)
               }
            };

         function nX(e) {
            let t = new WeakMap;
            return r => (t.has(r) || t.set(r, e(r)), t.get(r))
         }

         function n$(e) {
            return "compound" === e.type || "enum" === e.type
         }

         function nZ(e, t) {
            if (!e) return;
            let [r, ...n] = t;
            return void 0 === r ? e : n$(e) ? nZ("enum" === e.type ? e.cases[r] : e.props[r], n) : void 0
         }
         var nG = nX(e => {
               if ("enum" === e.type) throw Error("Not implemented yet for enums");
               for (let t in e.props) {
                  let r = e.props[t];
                  if (!n$(r) || nG(r)) return !0
               }
               return !1
            }),
            nK = class {
               constructor(e, t, r) {
                  this.sheet = e, this.template = t, this.nativeObject = r, E(this, "$$isPointerToPrismProvider", !0), E(this, "address"), E(this, "publicApi"), E(this, "_initialValue", new e6.Atom({})), E(this, "_cache", new eU), E(this, "_logger"), E(this, "_internalUtilCtx"), this._logger = e._logger.named("SheetObject", t.address.objectKey), this._logger._trace("creating object"), this._internalUtilCtx = {
                     logger: this._logger.utilFor.internal()
                  }, this.address = w(b({}, t.address), {
                     sheetInstanceId: e.address.sheetInstanceId
                  }), this.publicApi = new nY(this)
               }
               get type() {
                  return "Theatre_SheetObject"
               }
               getValues() {
                  return this._cache.get("getValues()", () => (0, e6.prism)(() => {
                     let e = e5((0, e6.val)(this.template.getDefaultValues()), (0, e6.val)(this._initialValue.pointer), e6.prism.memo("withInitialCache", () => new WeakMap, [])),
                        t = e5(e, (0, e6.val)(this.template.getStaticValues()), e6.prism.memo("withStatics", () => new WeakMap, [])); {
                        let e = e6.prism.memo("seq", () => this.getSequencedValues(), []),
                           r = e6.prism.memo("withSeqsCache", () => new WeakMap, []);
                        t = e5(t, (0, e6.val)((0, e6.val)(e)), r)
                     }
                     return e9("finalAtom", t).pointer
                  }))
               }
               getValueByPointer(e) {
                  let t = (0, e6.val)(this.getValues()),
                     {
                        path: r
                     } = (0, e6.getPointerParts)(e);
                  return (0, e6.val)(e3(t, r))
               }
               pointerToPrism(e) {
                  let {
                     path: t
                  } = (0, e6.getPointerParts)(e);
                  return (0, e6.prism)(() => {
                     let e = (0, e6.val)(this.getValues());
                     return (0, e6.val)(e3(e, t))
                  })
               }
               getSequencedValues() {
                  return (0, e6.prism)(() => {
                     let e = e6.prism.memo("tracksToProcess", () => this.template.getArrayOfValidSequenceTracks(), []),
                        t = (0, e6.val)(e),
                        r = new e6.Atom({}),
                        n = (0, e6.val)(this.template.configPointer);
                     return e6.prism.effect("processTracks", () => {
                        let e = [];
                        for (let {
                              trackId: i,
                              pathToProp: o
                           } of t) {
                           let t = this._trackIdToPrism(i),
                              a = nZ(n, o),
                              s = a.deserializeAndSanitize,
                              l = a.interpolate,
                              u = () => {
                                 let e = t.getValue();
                                 if (!e) return r.setByPointer(e => e3(e, o), void 0);
                                 let n = s(e.left),
                                    i = void 0 === n ? a.default : n;
                                 if (void 0 === e.right) return r.setByPointer(e => e3(e, o), i);
                                 let u = s(e.right),
                                    c = void 0 === u ? a.default : u;
                                 return r.setByPointer(e => e3(e, o), l(i, c, e.progression))
                              },
                              c = t.onStale(u);
                           u(), e.push(c)
                        }
                        return () => {
                           for (let t of e) t()
                        }
                     }, [n, ...t]), r.pointer
                  })
               }
               _trackIdToPrism(e) {
                  var t;
                  let r = this.template.project.pointers.historic.sheetsById[this.address.sheetId].sequence.tracksByObject[this.address.objectKey].trackData[e],
                     n = this.sheet.getSequence().positionPrism;
                  return t = this._internalUtilCtx, (0, eQ.prism)(() => {
                     let e = (0, eQ.val)(r);
                     return eQ.prism.memo("driver", () => e ? "BasicKeyframedTrack" === e.type ? (0, eQ.prism)(() => {
                        let t = eQ.prism.ref("state", {
                              started: !1
                           }),
                           r = t.current,
                           i = n.getValue();
                        return (!r.started || i < r.validFrom || r.validTo <= i) && (t.current = r = function (e, t, r) {
                           let n = t.getValue();
                           if (0 === r.keyframes.length) return {
                              started: !0,
                              validFrom: -1 / 0,
                              validTo: 1 / 0,
                              der: e1
                           };
                           let i = 0;
                           for (;;) {
                              let e = r.keyframes[i];
                              if (!e) return e2.error;
                              let o = i === r.keyframes.length - 1;
                              if (n < e.position) {
                                 if (0 === i) return e2.beforeFirstKeyframe(e);
                                 return e2.error
                              }
                              if (e.position === n) {
                                 if (o) return e2.lastKeyframe(e);
                                 return e2.between(e, r.keyframes[i + 1], t)
                              }
                              if (i === r.keyframes.length - 1) return e2.lastKeyframe(e); {
                                 let o = i + 1;
                                 if (!(r.keyframes[o].position <= n)) return e2.between(e, r.keyframes[i + 1], t);
                                 i = o;
                                 continue
                              }
                           }
                        }(0, n, e)), r.der.getValue()
                     }) : (t.logger.error("Track type not yet supported."), (0, eQ.prism)(() => void 0)) : (0, eQ.prism)(() => void 0), [e]).getValue()
                  })
               }
               get propsP() {
                  return this._cache.get("propsP", () => (0, e6.pointer)({
                     root: this,
                     path: []
                  }))
               }
               validateValue(e, t) {}
               setInitialValue(e) {
                  this.validateValue(this.propsP, e), this._initialValue.set(e)
               }
            };

         function nJ(e) {
            return function (t, r) {
               return e(t, r())
            }
         }
         var nQ = {
            _hmm: n0(524),
            _todo: n0(522),
            _error: n0(521),
            errorDev: n0(529),
            errorPublic: n0(545),
            _kapow: n0(268),
            _warn: n0(265),
            warnDev: n0(273),
            warnPublic: n0(289),
            _debug: n0(137),
            debugDev: n0(145),
            _trace: n0(73),
            traceDev: n0(81)
         };

         function n0(e) {
            return Object.freeze({
               audience: (8 & e) == 8 ? "internal" : (16 & e) == 16 ? "dev" : "public",
               category: (4 & e) == 4 ? "troubleshooting" : (2 & e) == 2 ? "todo" : "general",
               level: (512 & e) == 512 ? 512 : (256 & e) == 256 ? 256 : (128 & e) == 128 ? 128 : 64
            })
         }

         function n1(e, t) {
            return ((32 & t) == 32 || ((16 & t) == 16 ? e.dev : (8 & t) == 8 && e.internal)) && e.min <= t
         }
         var n2 = {
            loggingConsoleStyle: !0,
            loggerConsoleStyle: !0,
            includes: Object.freeze({
               internal: !1,
               dev: !1,
               min: 256
            }),
            filtered: function () {},
            include: function () {
               return {}
            },
            create: null,
            creatExt: null,
            named(e, t, r) {
               return this.create({
                  names: [...e.names, {
                     name: t,
                     key: r
                  }]
               })
            },
            style: {
               bold: void 0,
               italic: void 0,
               cssMemo: new Map([
                  ["", ""]
               ]),
               collapseOnRE: /[a-z- ]+/g,
               color: void 0,
               collapsed(e) {
                  if (e.length < 5) return e;
                  let t = e.replace(this.collapseOnRE, "");
                  return this.cssMemo.has(t) || this.cssMemo.set(t, this.css(e)), t
               },
               css(e) {
                  var t, r, n, i;
                  let o = this.cssMemo.get(e);
                  if (o) return o;
                  let a = "color:".concat(null != (r = null == (t = this.color) ? void 0 : t.call(this, e)) ? r : "hsl(".concat((e.charCodeAt(0) + e.charCodeAt(e.length - 1)) % 360, ", 100%, 60%)"));
                  return (null == (n = this.bold) ? void 0 : n.test(e)) && (a += ";font-weight:600"), (null == (i = this.italic) ? void 0 : i.test(e)) && (a += ";font-style:italic"), this.cssMemo.set(e, a), a
               }
            }
         };

         function n5(e = console, t = {}) {
            let r = w(b({}, n2), {
                  includes: b({}, n2.includes)
               }),
               n = {
                  styled: n9.bind(r, e),
                  noStyle: n6.bind(r, e)
               },
               i = n8.bind(r);

            function o() {
               return r.loggingConsoleStyle && r.loggerConsoleStyle ? n.styled : n.noStyle
            }
            return r.create = o(), {
               configureLogger(e) {
                  var t;
                  "console" === e ? (r.loggerConsoleStyle = n2.loggerConsoleStyle, r.create = o()) : "console" === e.type ? (r.loggerConsoleStyle = null != (t = e.style) ? t : n2.loggerConsoleStyle, r.create = o()) : "keyed" === e.type ? (r.creatExt = t => e.keyed(t.names), r.create = i) : "named" === e.type && (r.creatExt = n3.bind(null, e.named), r.create = i)
               },
               configureLogging(e) {
                  var t, n, i, a, s;
                  r.includes.dev = null != (t = e.dev) ? t : n2.includes.dev, r.includes.internal = null != (n = e.internal) ? n : n2.includes.internal, r.includes.min = null != (i = e.min) ? i : n2.includes.min, r.include = null != (a = e.include) ? a : n2.include, r.loggingConsoleStyle = null != (s = e.consoleStyle) ? s : n2.loggingConsoleStyle, r.create = o()
               },
               getLogger: () => r.create({
                  names: []
               })
            }
         }

         function n3(e, t) {
            let r = [];
            for (let {
                  name: e,
                  key: n
               } of t.names) r.push(null == n ? e : "".concat(e, " (").concat(n, ")"));
            return e(r)
         }

         function n8(e) {
            let t = b(b({}, this.includes), this.include(e)),
               r = this.filtered,
               n = this.named.bind(this, e),
               i = this.creatExt(e),
               o = n1(t, 524),
               a = n1(t, 522),
               s = n1(t, 521),
               l = n1(t, 529),
               u = n1(t, 545),
               c = n1(t, 265),
               f = n1(t, 268),
               d = n1(t, 273),
               h = n1(t, 289),
               p = n1(t, 137),
               g = n1(t, 145),
               m = n1(t, 73),
               v = n1(t, 81),
               y = o ? i.error.bind(i, nQ._hmm) : r.bind(e, 524),
               _ = a ? i.error.bind(i, nQ._todo) : r.bind(e, 522),
               w = s ? i.error.bind(i, nQ._error) : r.bind(e, 521),
               x = l ? i.error.bind(i, nQ.errorDev) : r.bind(e, 529),
               S = u ? i.error.bind(i, nQ.errorPublic) : r.bind(e, 545),
               T = f ? i.warn.bind(i, nQ._kapow) : r.bind(e, 268),
               P = c ? i.warn.bind(i, nQ._warn) : r.bind(e, 265),
               E = d ? i.warn.bind(i, nQ.warnDev) : r.bind(e, 273),
               O = h ? i.warn.bind(i, nQ.warnPublic) : r.bind(e, 273),
               k = p ? i.debug.bind(i, nQ._debug) : r.bind(e, 137),
               C = g ? i.debug.bind(i, nQ.debugDev) : r.bind(e, 145),
               j = m ? i.trace.bind(i, nQ._trace) : r.bind(e, 73),
               A = v ? i.trace.bind(i, nQ.traceDev) : r.bind(e, 81),
               M = {
                  _hmm: y,
                  _todo: _,
                  _error: w,
                  errorDev: x,
                  errorPublic: S,
                  _kapow: T,
                  _warn: P,
                  warnDev: E,
                  warnPublic: O,
                  _debug: k,
                  debugDev: C,
                  _trace: j,
                  traceDev: A,
                  lazy: {
                     _hmm: o ? nJ(y) : y,
                     _todo: a ? nJ(_) : _,
                     _error: s ? nJ(w) : w,
                     errorDev: l ? nJ(x) : x,
                     errorPublic: u ? nJ(S) : S,
                     _kapow: f ? nJ(T) : T,
                     _warn: c ? nJ(P) : P,
                     warnDev: d ? nJ(E) : E,
                     warnPublic: h ? nJ(O) : O,
                     _debug: p ? nJ(k) : k,
                     debugDev: g ? nJ(C) : C,
                     _trace: m ? nJ(j) : j,
                     traceDev: v ? nJ(A) : A
                  },
                  named: n,
                  utilFor: {
                     internal: () => ({
                        debug: M._debug,
                        error: M._error,
                        warn: M._warn,
                        trace: M._trace,
                        named: (e, t) => M.named(e, t).utilFor.internal()
                     }),
                     dev: () => ({
                        debug: M.debugDev,
                        error: M.errorDev,
                        warn: M.warnDev,
                        trace: M.traceDev,
                        named: (e, t) => M.named(e, t).utilFor.dev()
                     }),
                     public: () => ({
                        error: M.errorPublic,
                        warn: M.warnPublic,
                        debug(e, t) {
                           M._warn('(public "debug" filtered out) '.concat(e), t)
                        },
                        trace(e, t) {
                           M._warn('(public "trace" filtered out) '.concat(e), t)
                        },
                        named: (e, t) => M.named(e, t).utilFor.public()
                     })
                  }
               };
            return M
         }

         function n9(e, t) {
            let r = b(b({}, this.includes), this.include(t)),
               n = [],
               i = "";
            for (let e = 0; e < t.names.length; e++) {
               let {
                  name: r,
                  key: o
               } = t.names[e];
               if (i += " %c".concat(r), n.push(this.style.css(r)), null != o) {
                  let e = "%c#".concat(o);
                  i += e, n.push(this.style.css(e))
               }
            }
            let o = this.filtered,
               a = this.named.bind(this, t),
               s = [i, ...n];
            return n4(o, t, r, e, s, function (e) {
               let t = e.slice(0);
               for (let e = 1; e < t.length; e++) t[e] += ";background-color:#e0005a;padding:2px;color:white";
               return t
            }(s), a)
         }

         function n6(e, t) {
            let r = b(b({}, this.includes), this.include(t)),
               n = "";
            for (let e = 0; e < t.names.length; e++) {
               let {
                  name: r,
                  key: i
               } = t.names[e];
               n += " ".concat(r), null != i && (n += "#".concat(i))
            }
            let i = this.filtered,
               o = this.named.bind(this, t),
               a = [n];
            return n4(i, t, r, e, a, a, o)
         }

         function n4(e, t, r, n, i, o, a) {
            let s = n1(r, 524),
               l = n1(r, 522),
               u = n1(r, 521),
               c = n1(r, 529),
               f = n1(r, 545),
               d = n1(r, 265),
               h = n1(r, 268),
               p = n1(r, 273),
               g = n1(r, 289),
               m = n1(r, 137),
               v = n1(r, 145),
               y = n1(r, 73),
               _ = n1(r, 81),
               b = s ? n.error.bind(n, ...i) : e.bind(t, 524),
               w = l ? n.error.bind(n, ...i) : e.bind(t, 522),
               x = u ? n.error.bind(n, ...i) : e.bind(t, 521),
               S = c ? n.error.bind(n, ...i) : e.bind(t, 529),
               T = f ? n.error.bind(n, ...i) : e.bind(t, 545),
               P = h ? n.warn.bind(n, ...o) : e.bind(t, 268),
               E = d ? n.warn.bind(n, ...i) : e.bind(t, 265),
               O = p ? n.warn.bind(n, ...i) : e.bind(t, 273),
               k = g ? n.warn.bind(n, ...i) : e.bind(t, 273),
               C = m ? n.info.bind(n, ...i) : e.bind(t, 137),
               j = v ? n.info.bind(n, ...i) : e.bind(t, 145),
               A = y ? n.debug.bind(n, ...i) : e.bind(t, 73),
               M = _ ? n.debug.bind(n, ...i) : e.bind(t, 81),
               D = {
                  _hmm: b,
                  _todo: w,
                  _error: x,
                  errorDev: S,
                  errorPublic: T,
                  _kapow: P,
                  _warn: E,
                  warnDev: O,
                  warnPublic: k,
                  _debug: C,
                  debugDev: j,
                  _trace: A,
                  traceDev: M,
                  lazy: {
                     _hmm: s ? nJ(b) : b,
                     _todo: l ? nJ(w) : w,
                     _error: u ? nJ(x) : x,
                     errorDev: c ? nJ(S) : S,
                     errorPublic: f ? nJ(T) : T,
                     _kapow: h ? nJ(P) : P,
                     _warn: d ? nJ(E) : E,
                     warnDev: p ? nJ(O) : O,
                     warnPublic: g ? nJ(k) : k,
                     _debug: m ? nJ(C) : C,
                     debugDev: v ? nJ(j) : j,
                     _trace: y ? nJ(A) : A,
                     traceDev: _ ? nJ(M) : M
                  },
                  named: a,
                  utilFor: {
                     internal: () => ({
                        debug: D._debug,
                        error: D._error,
                        warn: D._warn,
                        trace: D._trace,
                        named: (e, t) => D.named(e, t).utilFor.internal()
                     }),
                     dev: () => ({
                        debug: D.debugDev,
                        error: D.errorDev,
                        warn: D.warnDev,
                        trace: D.traceDev,
                        named: (e, t) => D.named(e, t).utilFor.dev()
                     }),
                     public: () => ({
                        error: D.errorPublic,
                        warn: D.warnPublic,
                        debug(e, t) {
                           D._warn('(public "debug" filtered out) '.concat(e), t)
                        },
                        trace(e, t) {
                           D._warn('(public "trace" filtered out) '.concat(e), t)
                        },
                        named: (e, t) => D.named(e, t).utilFor.public()
                     })
                  }
               };
            return D
         }
         var n7 = n5(console, {
            _debug: function () {},
            _error: function () {}
         });
         n7.configureLogging({
            dev: !0,
            min: 64
         });
         var ie = n7.getLogger().named("Theatre.js (default logger)").utilFor.dev(),
            it = new WeakMap;

         function ir(e, t, r) {
            for (let [n, i] of Object.entries(t.props))
               if (!n$(i)) {
                  let t = [...e, n];
                  r.set(JSON.stringify(t), r.size), ii(t, i, r)
               } for (let [n, i] of Object.entries(t.props))
               if (n$(i)) {
                  let t = [...e, n];
                  r.set(JSON.stringify(t), r.size), ii(t, i, r)
               }
         }

         function ii(e, t, r) {
            if ("compound" === t.type) ir(e, t, r);
            else if ("enum" === t.type) throw Error("Enums aren't supported yet");
            else r.set(JSON.stringify(e), r.size)
         }

         function io(e) {
            return "object" == typeof e && null !== e && 0 === Object.keys(e).length
         }
         var ia = class {
               constructor(e, t, r, n, i) {
                  this.sheetTemplate = e, E(this, "address"), E(this, "type", "Theatre_SheetObjectTemplate"), E(this, "_config"), E(this, "_temp_actions_atom"), E(this, "_cache", new eU), E(this, "project"), E(this, "pointerToSheetState"), E(this, "pointerToStaticOverrides"), this.address = w(b({}, e.address), {
                     objectKey: t
                  }), this._config = new eW.Atom(n), this._temp_actions_atom = new eW.Atom(i), this.project = e.project, this.pointerToSheetState = this.sheetTemplate.project.pointers.historic.sheetsById[this.address.sheetId], this.pointerToStaticOverrides = this.pointerToSheetState.staticOverrides.byObject[this.address.objectKey]
               }
               get staticConfig() {
                  return this._config.get()
               }
               get configPointer() {
                  return this._config.pointer
               }
               get _temp_actions() {
                  return this._temp_actions_atom.get()
               }
               get _temp_actionsPointer() {
                  return this._temp_actions_atom.pointer
               }
               createInstance(e, t, r) {
                  return this._config.set(r), new nK(e, this, t)
               }
               reconfigure(e) {
                  this._config.set(e)
               }
               _temp_setActions(e) {
                  this._temp_actions_atom.set(e)
               }
               getDefaultValues() {
                  return this._cache.get("getDefaultValues()", () => (0, eW.prism)(() => (function e(t) {
                     if (eJ.has(t)) return eJ.get(t);
                     let r = "compound" === t.type ? function (t) {
                        let r = {};
                        for (let [n, i] of Object.entries(t.props)) r[n] = e(i);
                        return r
                     }(t) : "enum" === t.type ? function (t) {
                        let r = {
                           $case: t.defaultCase
                        };
                        for (let [n, i] of Object.entries(t.cases)) r[n] = e(i);
                        return r
                     }(t) : t.default;
                     return eJ.set(t, r), r
                  })((0, eW.val)(this.configPointer))))
               }
               getStaticValues() {
                  return this._cache.get("getStaticValues", () => (0, eW.prism)(() => {
                     var e;
                     let t = null != (e = (0, eW.val)(this.pointerToStaticOverrides)) ? e : {};
                     return (0, eW.val)(this.configPointer).deserializeAndSanitize(t) || {}
                  }))
               }
               getArrayOfValidSequenceTracks() {
                  return this._cache.get("getArrayOfValidSequenceTracks", () => (0, eW.prism)(() => {
                     let e = this.project.pointers.historic.sheetsById[this.address.sheetId],
                        t = (0, eW.val)(e.sequence.tracksByObject[this.address.objectKey].trackIdByPropPath);
                     if (!t) return L;
                     let r = [];
                     if (!t) return L;
                     let n = (0, eW.val)(this.configPointer);
                     for (let [e, i] of Object.entries(t)) {
                        let t = function (e) {
                           try {
                              return JSON.parse(e)
                           } catch (t) {
                              ie.warn("property ".concat(JSON.stringify(e), " cannot be parsed. Skipping."));
                              return
                           }
                        }(e);
                        if (!t) continue;
                        let o = nZ(n, t);
                        o && !n$(o) && r.push({
                           pathToProp: t,
                           trackId: i
                        })
                     }
                     let i = function (e) {
                        let t = it.get(e);
                        if (t) return t;
                        let r = new Map;
                        return it.set(e, r), ir([], e, r), r
                     }(n);
                     return (r.sort((e, t) => {
                        let r = e.pathToProp,
                           n = t.pathToProp;
                        return i.get(JSON.stringify(r)) > i.get(JSON.stringify(n)) ? 1 : -1
                     }), 0 === r.length) ? L : r
                  }))
               }
               getMapOfValidSequenceTracks_forStudio() {
                  return this._cache.get("getMapOfValidSequenceTracks_forStudio", () => (0, eW.prism)(() => {
                     let e = (0, eW.val)(this.getArrayOfValidSequenceTracks()),
                        t = {};
                     for (let {
                           pathToProp: r,
                           trackId: n
                        } of e) null == t || eK(t, r, n);
                     return t
                  }))
               }
               getStaticButNotSequencedOverrides() {
                  return this._cache.get("getStaticButNotSequencedOverrides", () => (0, eW.prism)(() => {
                     let e = (0, eW.val)(this.getStaticValues()),
                        t = (0, eW.val)(this.getArrayOfValidSequenceTracks()),
                        r = r5(e, 5);
                     for (let {
                           pathToProp: e
                        } of t) {
                        nq(r, e);
                        let t = e.slice(0, -1);
                        for (; t.length > 0 && io(eH(r, t));) nq(r, t), t = t.slice(0, -1)
                     }
                     if (!io(r)) return r
                  }))
               }
               getDefaultsAtPointer(e) {
                  let {
                     path: t
                  } = (0, eW.getPointerParts)(e);
                  return eH(this.getDefaultValues().getValue(), t)
               }
            },
            is = r(8035),
            il = nX(e => JSON.stringify(e));
         P(C());
         var iu = class extends Error {},
            ic = class extends iu {},
            id = r(8035),
            ih = r(8035),
            ip = r(8035),
            ig = r(8035);

         function im() {
            let e, t;
            let r = new Promise((r, i) => {
                  e = e => {
                     r(e), n.status = "resolved"
                  }, t = e => {
                     i(e), n.status = "rejected"
                  }
               }),
               n = {
                  resolve: e,
                  reject: t,
                  promise: r,
                  status: "pending"
               };
            return n
         }
         var iv = () => {},
            iy = r(8035),
            i_ = class {
               constructor() {
                  E(this, "_stopPlayCallback", iv), E(this, "_state", new iy.Atom({
                     position: 0,
                     playing: !1
                  })), E(this, "statePointer"), this.statePointer = this._state.pointer
               }
               destroy() {}
               pause() {
                  this._stopPlayCallback(), this.playing = !1, this._stopPlayCallback = iv
               }
               gotoPosition(e) {
                  this._updatePositionInState(e)
               }
               _updatePositionInState(e) {
                  this._state.setByPointer(e => e.position, e)
               }
               getCurrentPosition() {
                  return this._state.get().position
               }
               get playing() {
                  return this._state.get().playing
               }
               set playing(e) {
                  this._state.setByPointer(e => e.playing, e)
               }
               play(e, t, r, n, i) {
                  this.playing && this.pause(), this.playing = !0;
                  let o = t[1] - t[0]; {
                     let e = this.getCurrentPosition();
                     e < t[0] || e > t[1] ? "normal" === n || "alternate" === n ? this._updatePositionInState(t[0]) : ("reverse" === n || "alternateReverse" === n) && this._updatePositionInState(t[1]) : "normal" === n || "alternate" === n ? e === t[1] && this._updatePositionInState(t[0]) : e === t[0] && this._updatePositionInState(t[1])
                  }
                  let a = im(),
                     s = i.time,
                     l = o * e,
                     u = this.getCurrentPosition() - t[0];
                  ("reverse" === n || "alternateReverse" === n) && (u = t[1] - this.getCurrentPosition());
                  let c = i => {
                     let c = Math.min(Math.max(i - s, 0) / 1e3 * r + u, l);
                     if (c !== l) {
                        let e = Math.floor(c / o),
                           r = c / o % 1 * o;
                        if ("normal" !== n) {
                           if ("reverse" === n) r = o - r;
                           else {
                              let t = e % 2 == 0;
                              "alternate" === n ? t || (r = o - r) : t && (r = o - r)
                           }
                        }
                        this._updatePositionInState(r + t[0]), f()
                     } else {
                        if ("normal" === n) this._updatePositionInState(t[1]);
                        else if ("reverse" === n) this._updatePositionInState(t[0]);
                        else {
                           let r = (e - 1) % 2 == 0;
                           "alternate" === n ? r ? this._updatePositionInState(t[1]) : this._updatePositionInState(t[0]) : r ? this._updatePositionInState(t[0]) : this._updatePositionInState(t[1])
                        }
                        this.playing = !1, a.resolve(!0)
                     }
                  };
                  this._stopPlayCallback = () => {
                     i.offThisOrNextTick(c), i.offNextTick(c), this.playing && a.resolve(!1)
                  };
                  let f = () => i.onNextTick(c);
                  return i.onThisOrNextTick(c), a.promise
               }
               playDynamicRange(e, t) {
                  this.playing && this.pause(), this.playing = !0;
                  let r = im(),
                     n = e.keepHot();
                  r.promise.then(n, n);
                  let i = t.time,
                     o = t => {
                        let r = Math.max(t - i, 0);
                        i = t;
                        let n = this.getCurrentPosition(),
                           o = e.getValue();
                        if (n < o[0] || n > o[1]) this.gotoPosition(o[0]);
                        else {
                           let e = n + r / 1e3;
                           e > o[1] && (e = o[0] + (e - o[1])), this.gotoPosition(e)
                        }
                        a()
                     };
                  this._stopPlayCallback = () => {
                     t.offThisOrNextTick(o), t.offNextTick(o), r.resolve(!1)
                  };
                  let a = () => t.onNextTick(o);
                  return t.onThisOrNextTick(o), r.promise
               }
            },
            ib = r(8035),
            iw = "__TheatreJS_CoreBundle",
            ix = e => (...t) => {
               var r;
               switch (e) {
                  case "success":
                  case "info":
                     ie.debug(t.slice(0, 2).join("\n"));
                     break;
                  case "warning":
                     ie.warn(t.slice(0, 2).join("\n"))
               }
               return "undefined" != typeof window ? null == (r = window.__TheatreJS_Notifications) ? void 0 : r.notify[e](...t) : void 0
            },
            iS = {
               warning: ix("warning"),
               success: ix("success"),
               info: ix("info"),
               error: ix("error")
            };
         "undefined" != typeof window && (window.addEventListener("error", e => {
            iS.error("An error occurred", "<pre>".concat(e.message, "</pre>\n\nSee **console** for details."))
         }), window.addEventListener("unhandledrejection", e => {
            iS.error("An error occurred", "<pre>".concat(e.reason, "</pre>\n\nSee **console** for details."))
         }));
         var iT = class {
               constructor(e, t, r) {
                  this._decodedBuffer = e, this._audioContext = t, this._nodeDestination = r, E(this, "_mainGain"), E(this, "_state", new ib.Atom({
                     position: 0,
                     playing: !1
                  })), E(this, "statePointer"), E(this, "_stopPlayCallback", iv), this.statePointer = this._state.pointer, this._mainGain = this._audioContext.createGain(), this._mainGain.connect(this._nodeDestination)
               }
               playDynamicRange(e, t) {
                  let r;
                  let n = im();
                  this._playing && this.pause(), this._playing = !0;
                  let i = () => {
                        null == r || r(), r = this._loopInRange(e.getValue(), t).stop
                     },
                     o = e.onStale(i);
                  return i(), this._stopPlayCallback = () => {
                     null == r || r(), o(), n.resolve(!1)
                  }, n.promise
               }
               _loopInRange(e, t) {
                  let r = this.getCurrentPosition(),
                     n = e[1] - e[0];
                  r < e[0] || r > e[1] ? this._updatePositionInState(e[0]) : r === e[1] && this._updatePositionInState(e[0]), r = this.getCurrentPosition();
                  let i = this._audioContext.createBufferSource();
                  i.buffer = this._decodedBuffer, i.connect(this._mainGain), i.playbackRate.value = 1, i.loop = !0, i.loopStart = e[0], i.loopEnd = e[1];
                  let o = t.time,
                     a = r - e[0];
                  i.start(0, r);
                  let s = t => {
                        let r = Math.max(t - o, 0);
                        this._updatePositionInState((r / 1e3 * 1 + a) / n % 1 * n + e[0]), l()
                     },
                     l = () => t.onNextTick(s);
                  return t.onThisOrNextTick(s), {
                     stop: () => {
                        i.stop(), i.disconnect(), t.offThisOrNextTick(s), t.offNextTick(s)
                     }
                  }
               }
               get _playing() {
                  return this._state.get().playing
               }
               set _playing(e) {
                  this._state.setByPointer(e => e.playing, e)
               }
               destroy() {}
               pause() {
                  this._stopPlayCallback(), this._playing = !1, this._stopPlayCallback = iv
               }
               gotoPosition(e) {
                  this._updatePositionInState(e)
               }
               _updatePositionInState(e) {
                  this._state.reduce(t => w(b({}, t), {
                     position: e
                  }))
               }
               getCurrentPosition() {
                  return this._state.get().position
               }
               play(e, t, r, n, i) {
                  this._playing && this.pause(), this._playing = !0;
                  let o = this.getCurrentPosition(),
                     a = t[1] - t[0];
                  if ("normal" !== n) throw new ic('Audio-controlled sequences can only be played in the "normal" direction. ' + "'".concat(n, "' given."));
                  o < t[0] || o > t[1] ? this._updatePositionInState(t[0]) : o === t[1] && this._updatePositionInState(t[0]), o = this.getCurrentPosition();
                  let s = im(),
                     l = this._audioContext.createBufferSource();
                  l.buffer = this._decodedBuffer, l.connect(this._mainGain), l.playbackRate.value = r, e > 1e3 && (iS.warning("Can't play sequences with audio more than 1000 times", "The sequence will still play, but only 1000 times. The `iterationCount: ".concat(e, "` provided to `sequence.play()`\nis too high for a sequence with audio.\n\nTo fix this, either set `iterationCount` to a lower value, or remove the audio from the sequence."), [{
                     url: "https://www.theatrejs.com/docs/latest/manual/audio",
                     title: "Using Audio"
                  }, {
                     url: "https://www.theatrejs.com/docs/latest/api/core#sequence.attachaudio",
                     title: "Audio API"
                  }]), e = 1e3), e > 1 && (l.loop = !0, l.loopStart = t[0], l.loopEnd = t[1]);
                  let u = i.time,
                     c = o - t[0],
                     f = a * e;
                  l.start(0, o, f - c);
                  let d = e => {
                        let n = Math.min(Math.max(e - u, 0) / 1e3 * r + c, f);
                        n !== f ? (this._updatePositionInState(n / a % 1 * a + t[0]), p()) : (this._updatePositionInState(t[1]), this._playing = !1, h(), s.resolve(!0))
                     },
                     h = () => {
                        l.stop(), l.disconnect()
                     };
                  this._stopPlayCallback = () => {
                     h(), i.offThisOrNextTick(d), i.offNextTick(d), this._playing && s.resolve(!1)
                  };
                  let p = () => i.onNextTick(d);
                  return i.onThisOrNextTick(d), s.promise
               }
            },
            iP = r(8035),
            iE = 0;

         function iO(e) {
            var t;
            let r = new iP.Ticker({
                  onActive() {
                     var t;
                     null == (t = null == e ? void 0 : e.start) || t.call(e)
                  },
                  onDormant() {
                     var t;
                     null == (t = null == e ? void 0 : e.stop) || t.call(e)
                  }
               }),
               n = {
                  tick: e => {
                     r.tick(e)
                  },
                  id: iE++,
                  name: null != (t = null == e ? void 0 : e.name) ? t : "CustomRafDriver-".concat(iE),
                  type: "Theatre_RafDriver_PublicAPI"
               },
               i = {
                  type: "Theatre_RafDriver_PrivateAPI",
                  publicApi: n,
                  ticker: r,
                  start: null == e ? void 0 : e.start,
                  stop: null == e ? void 0 : e.stop
               };
            return N(n, i), n
         }

         function ik() {
            return a || function (e) {
               if (a) throw Error("`setCoreRafDriver()` is already called.");
               a = z(e)
            }(function () {
               let e = null,
                  t = iO({
                     name: "DefaultCoreRafDriver",
                     start: () => {
                        if ("undefined" != typeof window) {
                           let r = n => {
                              t.tick(n), e = window.requestAnimationFrame(r)
                           };
                           e = window.requestAnimationFrame(r)
                        } else t.tick(0), setTimeout(() => t.tick(1), 0)
                     },
                     stop: () => {
                        "undefined" != typeof window && null !== e && window.cancelAnimationFrame(e)
                     }
                  });
               return t
            }()), a
         }

         function iC() {
            return ik().ticker
         }
         var ij = class {
            get type() {
               return "Theatre_Sequence_PublicAPI"
            }
            constructor(e) {
               N(this, e)
            }
            play(e) {
               let t = z(this);
               if (t._project.isReady()) {
                  let r = (null == e ? void 0 : e.rafDriver) ? z(e.rafDriver).ticker : iC();
                  return t.play(null != e ? e : {}, r)
               } {
                  let e = im();
                  return e.resolve(!0), e.promise
               }
            }
            pause() {
               z(this).pause()
            }
            get position() {
               return z(this).position
            }
            set position(e) {
               z(this).position = e
            }
            __experimental_getKeyframes(e) {
               return z(this).getKeyframesOfSimpleProp(e)
            }
            async attachAudio(e) {
               let {
                  audioContext: t,
                  destinationNode: r,
                  decodedBuffer: n,
                  gainNode: i
               } = await iA(e), o = new iT(n, t, i);
               return z(this).replacePlaybackController(o), {
                  audioContext: t,
                  destinationNode: r,
                  decodedBuffer: n,
                  gainNode: i
               }
            }
            get pointer() {
               return z(this).pointer
            }
         };
         async function iA(e) {
            async function t() {
               let t, n, i;
               if (e.source instanceof AudioBuffer) return e.source;
               let o = im();
               if ("string" != typeof e.source) throw Error("Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer.");
               try {
                  t = await fetch(e.source)
               } catch (t) {
                  throw console.error(t), Error("Could not fetch '".concat(e.source, "'. Network error logged above."))
               }
               try {
                  n = await t.arrayBuffer()
               } catch (t) {
                  throw console.error(t), Error("Could not read '".concat(e.source, "' as an arrayBuffer."))
               }(await r).decodeAudioData(n, o.resolve, o.reject);
               try {
                  i = await o.promise
               } catch (t) {
                  throw console.error(t), Error("Could not decode ".concat(e.source, " as an audio file."))
               }
               return i
            }
            let r = function () {
                  if (e.audioContext) return Promise.resolve(e.audioContext);
                  let t = new AudioContext;
                  return "running" === t.state || "undefined" == typeof window ? Promise.resolve(t) : new Promise(e => {
                     let r = () => {
                           t.resume().catch(e => {
                              console.error(e)
                           })
                        },
                        n = ["mousedown", "keydown", "touchstart"],
                        i = {
                           capture: !0,
                           passive: !1
                        };
                     n.forEach(e => {
                        window.addEventListener(e, r, i)
                     }), t.addEventListener("statechange", () => {
                        "running" === t.state && (n.forEach(e => {
                           window.removeEventListener(e, r, i)
                        }), e(t))
                     })
                  })
               }(),
               n = t(),
               [i, o] = await Promise.all([r, n]),
               a = e.destinationNode || i.destination,
               s = i.createGain();
            return s.connect(a), {
               audioContext: i,
               decodedBuffer: o,
               gainNode: s,
               destinationNode: a
            }
         }
         iD("Theatre_Project"), iD("Theatre_Sheet"), iD("Theatre_SheetTemplate");
         var iM = iD("Theatre_SheetObject");

         function iD(e) {
            return t => "object" == typeof t && !!t && t.type === e
         }
         iD("Theatre_SheetObjectTemplate"), iD("Theatre_Project_PublicAPI"), iD("Theatre_Sheet_PublicAPI"), iD("Theatre_SheetObject_PublicAPI");
         var iR = class {
               constructor(e, t, r, n, i) {
                  this._project = e, this._sheet = t, this._lengthD = r, this._subUnitsPerUnitD = n, E(this, "address"), E(this, "publicApi"), E(this, "_playbackControllerBox"), E(this, "_prismOfStatePointer"), E(this, "_positionD"), E(this, "_positionFormatterD"), E(this, "_playableRangeD"), E(this, "pointer", (0, ip.pointer)({
                     root: this,
                     path: []
                  })), E(this, "$$isPointerToPrismProvider", !0), E(this, "_logger"), E(this, "closestGridPosition", e => {
                     let t = 1 / this.subUnitsPerUnit;
                     return parseFloat((Math.round(e / t) * t).toFixed(3))
                  }), this._logger = e._logger.named("Sheet", t.address.sheetId).named("Instance", t.address.sheetInstanceId), this.address = w(b({}, this._sheet.address), {
                     sequenceName: "default"
                  }), this.publicApi = new ij(this), this._playbackControllerBox = new ih.Atom(null != i ? i : new i_), this._prismOfStatePointer = (0, ig.prism)(() => this._playbackControllerBox.prism.getValue().statePointer), this._positionD = (0, ig.prism)(() => {
                     let e = this._prismOfStatePointer.getValue();
                     return (0, ig.val)(e.position)
                  }), this._positionFormatterD = (0, ig.prism)(() => new iI((0, ig.val)(this._subUnitsPerUnitD)))
               }
               pointerToPrism(e) {
                  let {
                     path: t
                  } = (0, id.getPointerParts)(e);
                  if (0 === t.length) return (0, ig.prism)(() => ({
                     length: (0, ig.val)(this.pointer.length),
                     playing: (0, ig.val)(this.pointer.playing),
                     position: (0, ig.val)(this.pointer.position)
                  }));
                  if (t.length > 1) return (0, ig.prism)(() => void 0);
                  let [r] = t;
                  return "length" === r ? this._lengthD : "position" === r ? this._positionD : "playing" === r ? (0, ig.prism)(() => (0, ig.val)(this._prismOfStatePointer.getValue().playing)) : (0, ig.prism)(() => void 0)
               }
               getKeyframesOfSimpleProp(e) {
                  let {
                     path: t,
                     root: r
                  } = (0, id.getPointerParts)(e);
                  if (!iM(r)) throw new ic("Argument prop must be a pointer to a SheetObject property");
                  let n = (0, ig.val)(this._project.pointers.historic.sheetsById[this._sheet.address.sheetId].sequence.tracksByObject[r.address.objectKey]);
                  if (!n) return [];
                  let {
                     trackData: i,
                     trackIdByPropPath: o
                  } = n, a = o[il(t)];
                  if (!a) return [];
                  let s = i[a];
                  return s ? s.keyframes : []
               }
               get positionFormatter() {
                  return this._positionFormatterD.getValue()
               }
               get prismOfStatePointer() {
                  return this._prismOfStatePointer
               }
               get length() {
                  return this._lengthD.getValue()
               }
               get positionPrism() {
                  return this._positionD
               }
               get position() {
                  return this._playbackControllerBox.get().getCurrentPosition()
               }
               get subUnitsPerUnit() {
                  return this._subUnitsPerUnitD.getValue()
               }
               get positionSnappedToGrid() {
                  return this.closestGridPosition(this.position)
               }
               set position(e) {
                  let t = e;
                  this.pause(), t > this.length && (t = this.length);
                  let r = this.length;
                  this._playbackControllerBox.get().gotoPosition(t > r ? r : t)
               }
               getDurationCold() {
                  return this._lengthD.getValue()
               }
               get playing() {
                  return (0, ig.val)(this._playbackControllerBox.get().statePointer.playing)
               }
               _makeRangeFromSequenceTemplate() {
                  return (0, ig.prism)(() => [0, (0, ig.val)(this._lengthD)])
               }
               playDynamicRange(e, t) {
                  return this._playbackControllerBox.get().playDynamicRange(e, t)
               }
               async play(e, t) {
                  let r = this.length,
                     n = e && e.range ? e.range : [0, r],
                     i = e && "number" == typeof e.iterationCount ? e.iterationCount : 1,
                     o = e && void 0 !== e.rate ? e.rate : 1,
                     a = e && e.direction ? e.direction : "normal";
                  return await this._play(i, [n[0], n[1]], o, a, t)
               }
               _play(e, t, r, n, i) {
                  return this._playbackControllerBox.get().play(e, t, r, n, i)
               }
               pause() {
                  this._playbackControllerBox.get().pause()
               }
               replacePlaybackController(e) {
                  this.pause();
                  let t = this._playbackControllerBox.get();
                  this._playbackControllerBox.set(e);
                  let r = t.getCurrentPosition();
                  t.destroy(), e.gotoPosition(r)
               }
            },
            iI = class {
               constructor(e) {
                  this._fps = e
               }
               formatSubUnitForGrid(e) {
                  return Math.round(e % 1 / (1 / this._fps)) + "f"
               }
               formatFullUnitForGrid(e) {
                  let t = e,
                     r = "";
                  t >= iL && (r += Math.floor(t / iL) + "h", t %= iL), t >= iN && (r += Math.floor(t / iN) + "m", t %= iN), t >= iz && (r += Math.floor(t / iz) + "s", t %= iz);
                  let n = 1 / this._fps;
                  return t >= n && (r += Math.floor(t / n) + "f", t %= n), 0 === r.length ? "0s" : r
               }
               formatForPlayhead(e) {
                  let t = e,
                     r = "";
                  t >= iL && (r += nW(Math.floor(t / iL).toString(), 2, "0") + "h", t %= iL), t >= iN ? (r += nW(Math.floor(t / iN).toString(), 2, "0") + "m", t %= iN) : r.length > 0 && (r += "00m"), t >= iz ? (r += nW(Math.floor(t / iz).toString(), 2, "0") + "s", t %= iz) : r += "00s";
                  let n = 1 / this._fps;
                  return t >= n ? (r += nW(Math.round(t / n).toString(), 2, "0") + "f", t %= n) : t / n > .98 ? (r += nW("1", 2, "0") + "f", t %= n) : r += "00f", 0 === r.length ? "00s00f" : r
               }
               formatBasic(e) {
                  return e.toFixed(2) + "s"
               }
            },
            iz = 1,
            iN = 60,
            iL = 3600,
            iF = {};

         function iB(e, t) {
            return e.length <= t ? e : e.substr(0, t - 3) + "..."
         }
         S(iF, {
            boolean: () => i9,
            compound: () => i$,
            file: () => iZ,
            image: () => iK,
            number: () => iQ,
            rgba: () => i5,
            string: () => i7,
            stringLiteral: () => ot
         });
         var iV = e => {
            if ("string" == typeof e) return 'string("'.concat(iB(e, 10), '")');
            if ("number" == typeof e) return "number(".concat(iB(String(e), 10), ")");
            if (null === e) return "null";
            if (void 0 === e) return "undefined";
            if ("boolean" == typeof e) return String(e);
            if (Array.isArray(e)) return "array";
            if ("object" == typeof e) return "object";
            else return "unknown"
         };

         function iH(e) {
            return w(b({}, e), {
               toString() {
                  return function (e, {
                     removeAlphaIfOpaque: t = !1
                  } = {}) {
                     let r = (255 * e.a | 256).toString(16).slice(1),
                        n = (255 * e.r | 256).toString(16).slice(1) + (255 * e.g | 256).toString(16).slice(1) + (255 * e.b | 256).toString(16).slice(1) + (t && "ff" === r ? "" : r);
                     return "#".concat(n)
                  }(this, {
                     removeAlphaIfOpaque: !0
                  })
               }
            })
         }

         function iU(e) {
            function t(e) {
               return e >= .04045 ? ((e + .055) / 1.055) ** 2.4 : e / 12.92
            }
            return {
               r: t(e.r),
               g: t(e.g),
               b: t(e.b),
               a: e.a
            }
         }

         function iW(e) {
            let t = .4122214708 * e.r + .5363325363 * e.g + .0514459929 * e.b,
               r = .2119034982 * e.r + .6806995451 * e.g + .1073969566 * e.b,
               n = .0883024619 * e.r + .2817188376 * e.g + .6299787005 * e.b,
               i = Math.cbrt(t),
               o = Math.cbrt(r),
               a = Math.cbrt(n);
            return {
               L: .2104542553 * i + .793617785 * o - .0040720468 * a,
               a: 1.9779984951 * i - 2.428592205 * o + .4505937099 * a,
               b: .0259040371 * i + .7827717662 * o - .808675766 * a,
               alpha: e.a
            }
         }
         var iq = Symbol("TheatrePropType_Basic");

         function iY(e) {
            return "object" == typeof e && !!e && "TheatrePropType" === e[iq]
         }
         var iX = (e, t) => {},
            i$ = (e, t = {}) => {
               iX("t.compound(props, opts)", t);
               let r = function (e) {
                     let t = {};
                     for (let r of Object.keys(e)) {
                        let n = e[r];
                        iY(n) ? t[r] = n : t[r] = function (e) {
                           if ("number" == typeof e) return iQ(e);
                           if ("boolean" == typeof e) return i9(e);
                           if ("string" == typeof e) return i7(e);
                           if ("object" == typeof e && e) {
                              if (iY(e)) return e;
                              if (t2(e)) return i$(e)
                           }
                           throw new ic("This value is not a valid prop type: ".concat(iV(e)))
                        }(n)
                     }
                     return t
                  }(e),
                  n = new WeakMap;
               return {
                  type: "compound",
                  props: r,
                  valueType: null,
                  [iq]: "TheatrePropType",
                  label: t.label,
                  default: nP(r, e => e.default),
                  deserializeAndSanitize: e => {
                     if ("object" != typeof e || !e) return;
                     if (n.has(e)) return n.get(e);
                     let t = {},
                        i = !1;
                     for (let [n, o] of Object.entries(r))
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                           let r = o.deserializeAndSanitize(e[n]);
                           null != r && (i = !0, t[n] = r)
                        } if (n.set(e, t), i) return t
                  }
               }
            },
            iZ = (e, t = {}) => ({
               type: "file",
               default: {
                  type: "file",
                  id: e
               },
               valueType: null,
               [iq]: "TheatrePropType",
               label: t.label,
               interpolate: (e, r, n) => {
                  var i;
                  return {
                     type: "file",
                     id: (null != (i = t.interpolate) ? i : i4)(e.id, r.id, n)
                  }
               },
               deserializeAndSanitize: iG
            }),
            iG = e => {
               if (!e) return;
               let t = !0;
               if ("string" == typeof e.id || [null, void 0].includes(e.id) || (t = !1), "file" !== e.type && (t = !1), t) return e
            },
            iK = (e, t = {}) => ({
               type: "image",
               default: {
                  type: "image",
                  id: e
               },
               valueType: null,
               [iq]: "TheatrePropType",
               label: t.label,
               interpolate: (e, r, n) => {
                  var i;
                  return {
                     type: "image",
                     id: (null != (i = t.interpolate) ? i : i4)(e.id, r.id, n)
                  }
               },
               deserializeAndSanitize: iJ
            }),
            iJ = e => {
               if (!e) return;
               let t = !0;
               if ("string" == typeof e.id || [null, void 0].includes(e.id) || (t = !1), "image" !== e.type && (t = !1), t) return e
            },
            iQ = (e, t = {}) => {
               var r;
               return w(b({
                  type: "number",
                  valueType: 0,
                  default: e,
                  [iq]: "TheatrePropType"
               }, t || {}), {
                  label: t.label,
                  nudgeFn: null != (r = t.nudgeFn) ? r : or,
                  nudgeMultiplier: "number" == typeof t.nudgeMultiplier ? t.nudgeMultiplier : void 0,
                  interpolate: i2,
                  deserializeAndSanitize: i0(t.range)
               })
            },
            i0 = e => e ? t => {
               if ("number" == typeof t && isFinite(t)) return rs(t, e[0], e[1])
            } : i1,
            i1 = e => "number" == typeof e && isFinite(e) ? e : void 0,
            i2 = (e, t, r) => e + r * (t - e),
            i5 = (e = {
               r: 0,
               g: 0,
               b: 0,
               a: 1
            }, t = {}) => {
               let r = {};
               for (let t of ["r", "g", "b", "a"]) r[t] = Math.min(Math.max(e[t], 0), 1);
               return {
                  type: "rgba",
                  valueType: null,
                  default: iH(r),
                  [iq]: "TheatrePropType",
                  label: t.label,
                  interpolate: i8,
                  deserializeAndSanitize: i3
               }
            },
            i3 = e => {
               if (!e) return;
               let t = !0;
               for (let r of ["r", "g", "b", "a"]) Object.prototype.hasOwnProperty.call(e, r) && "number" == typeof e[r] || (t = !1);
               if (!t) return;
               let r = {};
               for (let t of ["r", "g", "b", "a"]) r[t] = Math.min(Math.max(e[t], 0), 1);
               return iH(r)
            },
            i8 = (e, t, r) => {
               var n;
               let i, o, a, s, l, u;
               let c = iW(iU(e)),
                  f = iW(iU(t));
               return iH(function (e) {
                  function t(e) {
                     return e >= .0031308 ? 1.055 * e ** (1 / 2.4) - .055 : 12.92 * e
                  }
                  return Object.fromEntries(Object.entries({
                     r: t(e.r),
                     g: t(e.g),
                     b: t(e.b),
                     a: e.a
                  }).map(([e, t]) => [e, rs(t, 0, 1)]))
               }((i = (n = {
                  L: (1 - r) * c.L + r * f.L,
                  a: (1 - r) * c.a + r * f.a,
                  b: (1 - r) * c.b + r * f.b,
                  alpha: (1 - r) * c.alpha + r * f.alpha
               }).L + .3963377774 * n.a + .2158037573 * n.b, o = n.L - .1055613458 * n.a - .0638541728 * n.b, a = n.L - .0894841775 * n.a - 1.291485548 * n.b, {
                  r: 4.0767416621 * (s = i * i * i) - 3.3077115913 * (l = o * o * o) + .2309699292 * (u = a * a * a),
                  g: -1.2684380046 * s + 2.6097574011 * l - .3413193965 * u,
                  b: -.0041960863 * s - .7034186147 * l + 1.707614701 * u,
                  a: n.alpha
               })))
            },
            i9 = (e, t = {}) => {
               var r;
               return {
                  type: "boolean",
                  default: e,
                  valueType: null,
                  [iq]: "TheatrePropType",
                  label: t.label,
                  interpolate: null != (r = t.interpolate) ? r : i4,
                  deserializeAndSanitize: i6
               }
            },
            i6 = e => "boolean" == typeof e ? e : void 0;

         function i4(e) {
            return e
         }
         var i7 = (e, t = {}) => {
            var r;
            return {
               type: "string",
               default: e,
               valueType: null,
               [iq]: "TheatrePropType",
               label: t.label,
               interpolate: null != (r = t.interpolate) ? r : i4,
               deserializeAndSanitize: oe
            }
         };

         function oe(e) {
            return "string" == typeof e ? e : void 0
         }

         function ot(e, t, r = {}) {
            var n, i;
            return {
               type: "stringLiteral",
               default: e,
               valuesAndLabels: b({}, t),
               [iq]: "TheatrePropType",
               valueType: null,
               as: null != (n = r.as) ? n : "menu",
               label: r.label,
               interpolate: null != (i = r.interpolate) ? i : i4,
               deserializeAndSanitize(e) {
                  if ("string" == typeof e) return Object.prototype.hasOwnProperty.call(t, e) ? e : void 0
               }
            }
         }
         var or = ({
               config: e,
               deltaX: t,
               deltaFraction: r,
               magnitude: n
            }) => {
               var i;
               let {
                  range: o
               } = e;
               return e.nudgeMultiplier || !o || o.includes(1 / 0) || o.includes(-1 / 0) ? t * n * (null != (i = e.nudgeMultiplier) ? i : 1) : r * (o[1] - o[0]) * n
            },
            on = e => e.replace(/^[\s\/]*/, "").replace(/[\s\/]*$/, "").replace(/\s*\/\s*/g, " / ");
         P(j());
         var oi = class {
               get type() {
                  return "Theatre_Sheet_PublicAPI"
               }
               constructor(e) {
                  N(this, e)
               }
               object(e, t, r) {
                  let n = z(this),
                     i = on(e),
                     o = n.getObject(i),
                     a = null == r ? void 0 : r.__actions__THIS_API_IS_UNSTABLE_AND_WILL_CHANGE_IN_THE_NEXT_VERSION;
                  if (o) return a && o.template._temp_setActions(a), o.publicApi; {
                     let e = i$(t);
                     return n.createObject(i, null, e, a).publicApi
                  }
               }
               get sequence() {
                  return z(this).getSequence().publicApi
               }
               get project() {
                  return z(this).project.publicApi
               }
               get address() {
                  return b({}, z(this).address)
               }
               detachObject(e) {
                  var t;
                  let r = z(this),
                     n = on(e);
                  if (!r.getObject(n)) {
                     iS.warning("Couldn't delete object \"".concat(n, '"'), 'There is no object with key "'.concat(n, '".\n\nTo fix this, make sure you are calling `sheet.deleteObject("').concat(n, '")` with the correct key.')), console.warn('Object key "'.concat(n, '" does not exist.'));
                     return
                  }
                  r.deleteObject(n)
               }
            },
            oo = r(8035),
            oa = class {
               constructor(e, t) {
                  this.template = e, this.instanceId = t, E(this, "_objects", new oo.Atom({})), E(this, "_sequence"), E(this, "address"), E(this, "publicApi"), E(this, "project"), E(this, "objectsP", this._objects.pointer), E(this, "type", "Theatre_Sheet"), E(this, "_logger"), this._logger = e.project._logger.named("Sheet", t), this._logger._trace("creating sheet"), this.project = e.project, this.address = w(b({}, e.address), {
                     sheetInstanceId: this.instanceId
                  }), this.publicApi = new oi(this)
               }
               createObject(e, t, r, n = {}) {
                  let i = this.template.getObjectTemplate(e, t, r, n).createInstance(this, t, r);
                  return this._objects.setByPointer(t => t[e], i), i
               }
               getObject(e) {
                  return this._objects.get()[e]
               }
               deleteObject(e) {
                  this._objects.reduce(t => {
                     let r = b({}, t);
                     return delete r[e], r
                  })
               }
               getSequence() {
                  if (!this._sequence) {
                     let e = (0, oo.prism)(() => os((0, oo.val)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.length))),
                        t = (0, oo.prism)(() => ol((0, oo.val)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.subUnitsPerUnit)));
                     this._sequence = new iR(this.template.project, this, e, t)
                  }
                  return this._sequence
               }
            },
            os = e => "number" == typeof e && isFinite(e) && e > 0 ? e : 10,
            ol = e => {
               var t;
               return "number" == typeof e && "number" == typeof (t = e) && t == tu(t) && e >= 1 && e <= 1e3 ? e : 30
            },
            ou = class {
               constructor(e, t) {
                  this.project = e, E(this, "type", "Theatre_SheetTemplate"), E(this, "address"), E(this, "_instances", new is.Atom({})), E(this, "instancesP", this._instances.pointer), E(this, "_objectTemplates", new is.Atom({})), E(this, "objectTemplatesP", this._objectTemplates.pointer), this.address = w(b({}, e.address), {
                     sheetId: t
                  })
               }
               getInstance(e) {
                  let t = this._instances.get()[e];
                  return t || (t = new oa(this, e), this._instances.setByPointer(t => t[e], t)), t
               }
               getObjectTemplate(e, t, r, n) {
                  let i = this._objectTemplates.get()[e];
                  return i || (i = new ia(this, e, t, r, n), this._objectTemplates.setByPointer(t => t[e], i)), i
               }
            },
            oc = r(8035),
            of = r(8035),
            od = e => new Promise(t => setTimeout(t, e));

         function oh(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function (e) {
               return "'" + e + "'"
            }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
         }

         function op(e) {
            return !!e && !!e[oZ]
         }

         function og(e) {
            return !!e && (function (e) {
               if (!e || "object" != typeof e) return !1;
               var t = Object.getPrototypeOf(e);
               if (null === t) return !0;
               var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
               return r === Object || "function" == typeof r && Function.toString.call(r) === oG
            }(e) || Array.isArray(e) || !!e[o$] || !!e.constructor[o$] || ob(e) || ow(e))
         }

         function om(e, t, r) {
            void 0 === r && (r = !1), 0 === ov(e) ? (r ? Object.keys : oK)(e).forEach(function (n) {
               r && "symbol" == typeof n || t(n, e[n], e)
            }) : e.forEach(function (r, n) {
               return t(n, r, e)
            })
         }

         function ov(e) {
            var t = e[oZ];
            return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : ob(e) ? 2 : ow(e) ? 3 : 0
         }

         function oy(e, t) {
            return 2 === ov(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
         }

         function o_(e, t, r) {
            var n = ov(e);
            2 === n ? e.set(t, r) : 3 === n ? (e.delete(t), e.add(r)) : e[t] = r
         }

         function ob(e) {
            return oW && e instanceof Map
         }

         function ow(e) {
            return oq && e instanceof Set
         }

         function ox(e) {
            return e.o || e.t
         }

         function oS(e) {
            if (Array.isArray(e)) return Array.prototype.slice.call(e);
            var t = oJ(e);
            delete t[oZ];
            for (var r = oK(t), n = 0; n < r.length; n++) {
               var i = r[n],
                  o = t[i];
               !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[i] = {
                  configurable: !0,
                  writable: !0,
                  enumerable: o.enumerable,
                  value: e[i]
               })
            }
            return Object.create(Object.getPrototypeOf(e), t)
         }

         function oT(e, t) {
            return void 0 === t && (t = !1), oE(e) || op(e) || !og(e) || (ov(e) > 1 && (e.set = e.add = e.clear = e.delete = oP), Object.freeze(e), t && om(e, function (e, t) {
               return oT(t, !0)
            }, !0)), e
         }

         function oP() {
            oh(2)
         }

         function oE(e) {
            return null == e || "object" != typeof e || Object.isFrozen(e)
         }

         function oO(e) {
            var t = oQ[e];
            return t || oh(18, e), t
         }

         function ok(e, t) {
            t && (oO("Patches"), e.u = [], e.s = [], e.v = t)
         }

         function oC(e) {
            oj(e), e.p.forEach(oM), e.p = null
         }

         function oj(e) {
            e === l && (l = e.l)
         }

         function oA(e) {
            return l = {
               p: [],
               l: l,
               h: e,
               m: !0,
               _: 0
            }
         }

         function oM(e) {
            var t = e[oZ];
            0 === t.i || 1 === t.i ? t.j() : t.O = !0
         }

         function oD(e, t) {
            t._ = t.p.length;
            var r = t.p[0],
               n = void 0 !== e && e !== r;
            return t.h.g || oO("ES5").S(t, e, n), n ? (r[oZ].P && (oC(t), oh(4)), og(e) && (e = oR(t, e), t.l || oz(t, e)), t.u && oO("Patches").M(r[oZ], e, t.u, t.s)) : e = oR(t, r, []), oC(t), t.u && t.v(t.u, t.s), e !== oX ? e : void 0
         }

         function oR(e, t, r) {
            if (oE(t)) return t;
            var n = t[oZ];
            if (!n) return om(t, function (i, o) {
               return oI(e, n, t, i, o, r)
            }, !0), t;
            if (n.A !== e) return t;
            if (!n.P) return oz(e, n.t, !0), n.t;
            if (!n.I) {
               n.I = !0, n.A._--;
               var i = 4 === n.i || 5 === n.i ? n.o = oS(n.k) : n.o;
               om(3 === n.i ? new Set(i) : i, function (t, o) {
                  return oI(e, n, i, t, o, r)
               }), oz(e, i, !1), r && e.u && oO("Patches").R(n, r, e.u, e.s)
            }
            return n.o
         }

         function oI(e, t, r, n, i, o) {
            if (op(i)) {
               var a = oR(e, i, o && t && 3 !== t.i && !oy(t.D, n) ? o.concat(n) : void 0);
               if (o_(r, n, a), !op(a)) return;
               e.m = !1
            }
            if (og(i) && !oE(i)) {
               if (!e.h.F && e._ < 1) return;
               oR(e, i), t && t.A.l || oz(e, i)
            }
         }

         function oz(e, t, r) {
            void 0 === r && (r = !1), e.h.F && e.m && oT(t, r)
         }

         function oN(e, t) {
            var r = e[oZ];
            return (r ? ox(r) : e)[t]
         }

         function oL(e, t) {
            if (t in e)
               for (var r = Object.getPrototypeOf(e); r;) {
                  var n = Object.getOwnPropertyDescriptor(r, t);
                  if (n) return n;
                  r = Object.getPrototypeOf(r)
               }
         }

         function oF(e) {
            e.P || (e.P = !0, e.l && oF(e.l))
         }

         function oB(e) {
            e.o || (e.o = oS(e.t))
         }

         function oV(e, t, r) {
            var n, i, o, a, s, u, c, f = ob(t) ? oO("MapSet").N(t, r) : ow(t) ? oO("MapSet").T(t, r) : e.g ? (o = i = {
               i: (n = Array.isArray(t)) ? 1 : 0,
               A: r ? r.A : l,
               P: !1,
               I: !1,
               D: {},
               l: r,
               t: t,
               k: null,
               o: null,
               j: null,
               C: !1
            }, a = o0, n && (o = [i], a = o1), u = (s = Proxy.revocable(o, a)).revoke, c = s.proxy, i.k = c, i.j = u, c) : oO("ES5").J(t, r);
            return (r ? r.A : l).p.push(f), f
         }

         function oH(e, t) {
            switch (t) {
               case 2:
                  return new Map(e);
               case 3:
                  return Array.from(e)
            }
            return oS(e)
         }
         var oU = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
            oW = "undefined" != typeof Map,
            oq = "undefined" != typeof Set,
            oY = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
            oX = oU ? Symbol.for("immer-nothing") : ((s = {})["immer-nothing"] = !0, s),
            o$ = oU ? Symbol.for("immer-draftable") : "__$immer_draftable",
            oZ = oU ? Symbol.for("immer-state") : "__$immer_state",
            oG = "" + Object.prototype.constructor,
            oK = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (e) {
               return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : Object.getOwnPropertyNames,
            oJ = Object.getOwnPropertyDescriptors || function (e) {
               var t = {};
               return oK(e).forEach(function (r) {
                  t[r] = Object.getOwnPropertyDescriptor(e, r)
               }), t
            },
            oQ = {},
            o0 = {
               get: function (e, t) {
                  if (t === oZ) return e;
                  var r, n, i = ox(e);
                  if (!oy(i, t)) return (n = oL(i, t)) ? "value" in n ? n.value : null === (r = n.get) || void 0 === r ? void 0 : r.call(e.k) : void 0;
                  var o = i[t];
                  return e.I || !og(o) ? o : o === oN(e.t, t) ? (oB(e), e.o[t] = oV(e.A.h, o, e)) : o
               },
               has: function (e, t) {
                  return t in ox(e)
               },
               ownKeys: function (e) {
                  return Reflect.ownKeys(ox(e))
               },
               set: function (e, t, r) {
                  var n = oL(ox(e), t);
                  if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
                  if (!e.P) {
                     var i = oN(ox(e), t),
                        o = null == i ? void 0 : i[oZ];
                     if (o && o.t === r) return e.o[t] = r, e.D[t] = !1, !0;
                     if ((r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i) && (void 0 !== r || oy(e.t, t))) return !0;
                     oB(e), oF(e)
                  }
                  return e.o[t] === r && "number" != typeof r && (void 0 !== r || t in e.o) || (e.o[t] = r, e.D[t] = !0, !0)
               },
               deleteProperty: function (e, t) {
                  return void 0 !== oN(e.t, t) || t in e.t ? (e.D[t] = !1, oB(e), oF(e)) : delete e.D[t], e.o && delete e.o[t], !0
               },
               getOwnPropertyDescriptor: function (e, t) {
                  var r = ox(e),
                     n = Reflect.getOwnPropertyDescriptor(r, t);
                  return n ? {
                     writable: !0,
                     configurable: 1 !== e.i || "length" !== t,
                     enumerable: n.enumerable,
                     value: r[t]
                  } : n
               },
               defineProperty: function () {
                  oh(11)
               },
               getPrototypeOf: function (e) {
                  return Object.getPrototypeOf(e.t)
               },
               setPrototypeOf: function () {
                  oh(12)
               }
            },
            o1 = {};
         om(o0, function (e, t) {
            o1[e] = function () {
               return arguments[0] = arguments[0][0], t.apply(this, arguments)
            }
         }), o1.deleteProperty = function (e, t) {
            return o0.deleteProperty.call(this, e[0], t)
         }, o1.set = function (e, t, r) {
            return o0.set.call(this, e[0], t, r, e[0])
         };
         var o2 = new(function () {
            function e(e) {
               var t = this;
               this.g = oY, this.F = !0, this.produce = function (e, r, n) {
                  if ("function" == typeof e && "function" != typeof r) {
                     var i, o = r;
                     return r = e,
                        function (e) {
                           var n = this;
                           void 0 === e && (e = o);
                           for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                           return t.produce(e, function (e) {
                              var t;
                              return (t = r).call.apply(t, [n, e].concat(a))
                           })
                        }
                  }
                  if ("function" != typeof r && oh(6), void 0 !== n && "function" != typeof n && oh(7), og(e)) {
                     var a = oA(t),
                        s = oV(t, e, void 0),
                        l = !0;
                     try {
                        i = r(s), l = !1
                     } finally {
                        l ? oC(a) : oj(a)
                     }
                     return "undefined" != typeof Promise && i instanceof Promise ? i.then(function (e) {
                        return ok(a, n), oD(e, a)
                     }, function (e) {
                        throw oC(a), e
                     }) : (ok(a, n), oD(i, a))
                  }
                  if (!e || "object" != typeof e) {
                     if ((i = r(e)) === oX) return;
                     return void 0 === i && (i = e), t.F && oT(i, !0), i
                  }
                  oh(21, e)
               }, this.produceWithPatches = function (e, r) {
                  var n, i;
                  return "function" == typeof e ? function (r) {
                     for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                     return t.produceWithPatches(r, function (t) {
                        return e.apply(void 0, [t].concat(i))
                     })
                  } : [t.produce(e, r, function (e, t) {
                     n = e, i = t
                  }), n, i]
               }, "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
            }
            var t = e.prototype;
            return t.createDraft = function (e) {
               og(e) || oh(8), op(e) && (op(t = e) || oh(22, t), e = function e(t) {
                  if (!og(t)) return t;
                  var r, n = t[oZ],
                     i = ov(t);
                  if (n) {
                     if (!n.P && (n.i < 4 || !oO("ES5").K(n))) return n.t;
                     n.I = !0, r = oH(t, i), n.I = !1
                  } else r = oH(t, i);
                  return om(r, function (t, i) {
                     var o;
                     n && (2 === ov(o = n.t) ? o.get(t) : o[t]) === i || o_(r, t, e(i))
                  }), 3 === i ? new Set(r) : r
               }(t));
               var t, r = oA(this),
                  n = oV(this, e, void 0);
               return n[oZ].C = !0, oj(r), n
            }, t.finishDraft = function (e, t) {
               var r = (e && e[oZ]).A;
               return ok(r, t), oD(void 0, r)
            }, t.setAutoFreeze = function (e) {
               this.F = e
            }, t.setUseProxies = function (e) {
               e && !oY && oh(20), this.g = e
            }, t.applyPatches = function (e, t) {
               for (r = t.length - 1; r >= 0; r--) {
                  var r, n = t[r];
                  if (0 === n.path.length && "replace" === n.op) {
                     e = n.value;
                     break
                  }
               }
               var i = oO("Patches").$;
               return op(e) ? i(e, t) : this.produce(e, function (e) {
                  return i(e, t.slice(r + 1))
               })
            }, e
         }());
         o2.produce, o2.produceWithPatches.bind(o2), o2.setAutoFreeze.bind(o2), o2.setUseProxies.bind(o2), o2.applyPatches.bind(o2), o2.createDraft.bind(o2), o2.finishDraft.bind(o2);
         var o5 = {
            currentProjectStateDefinitionVersion: "0.4.0"
         };
         async function o3(e, t, r) {
            await od(0), e.transaction(({
               drafts: e
            }) => {
               var n, i;
               let o = t.address.projectId;
               e.ephemeral.coreByProject[o] = {
                  lastExportedObject: null,
                  loadingState: {
                     type: "loading"
                  }
               }, e.ahistoric.coreByProject[o] = {
                  ahistoricStuff: ""
               };
               let a = null == (op(i = e.historic) || oh(23, i), n = i[oZ].t) ? void 0 : n.coreByProject[t.address.projectId];
               a ? r && -1 == a.revisionHistory.indexOf(r.revisionHistory[0]) ? e.ephemeral.coreByProject[o].loadingState = {
                  type: "browserStateIsNotBasedOnDiskState",
                  onDiskState: r
               } : e.ephemeral.coreByProject[o].loadingState = {
                  type: "loaded"
               } : r ? (e.ephemeral.coreByProject[o].loadingState = {
                  type: "loaded"
               }, e.historic.coreByProject[o] = r) : (e.ephemeral.coreByProject[o].loadingState = {
                  type: "loaded"
               }, e.historic.coreByProject[o] = {
                  sheetsById: {},
                  definitionVersion: o5.currentProjectStateDefinitionVersion,
                  revisionHistory: []
               })
            })
         }

         function o8() {}

         function o9(e) {
            var t, r;
            let n = (null == (t = null == e ? void 0 : e.logging) ? void 0 : t.internal) ? null != (r = e.logging.min) ? r : 256 : 1 / 0,
               i = n5(void 0, {
                  _debug: n <= 128 ? console.debug.bind(console, "_coreLogger(TheatreInternalLogger) debug") : o8,
                  _error: n <= 512 ? console.error.bind(console, "_coreLogger(TheatreInternalLogger) error") : o8
               });
            if (e) {
               let {
                  logger: t,
                  logging: r
               } = e;
               t && i.configureLogger(t), r ? i.configureLogging(r) : i.configureLogging({
                  dev: !1
               })
            }
            return i.getLogger().named("Theatre")
         }
         var o6 = class {
               constructor(e, t = {}, r) {
                  var n;
                  this.config = t, this.publicApi = r, E(this, "pointers"), E(this, "_pointerProxies"), E(this, "address"), E(this, "_studioReadyDeferred"), E(this, "_assetStorageReadyDeferred"), E(this, "_readyPromise"), E(this, "_sheetTemplates", new of .Atom({})), E(this, "sheetTemplatesP", this._sheetTemplates.pointer), E(this, "_studio"), E(this, "assetStorage"), E(this, "type", "Theatre_Project"), E(this, "_logger"), this._logger = o9({
                     logging: {
                        dev: !0
                     }
                  }).named("Project", e), this._logger.traceDev("creating project"), this.address = {
                     projectId: e
                  };
                  let i = new of .Atom({
                     ahistoric: {
                        ahistoricStuff: ""
                     },
                     historic: null != (n = t.state) ? n : {
                        sheetsById: {},
                        definitionVersion: o5.currentProjectStateDefinitionVersion,
                        revisionHistory: []
                     },
                     ephemeral: {
                        loadingState: {
                           type: "loaded"
                        },
                        lastExportedObject: null
                     }
                  });
                  this._assetStorageReadyDeferred = im(), this.assetStorage = {
                     getAssetUrl: e => {
                        var r;
                        return "".concat(null == (r = t.assets) ? void 0 : r.baseUrl, "/").concat(e)
                     },
                     createAsset: () => {
                        throw Error("Please wait for Project.ready to use assets.")
                     }
                  }, this._pointerProxies = {
                     historic: new oc.PointerProxy(i.pointer.historic),
                     ahistoric: new oc.PointerProxy(i.pointer.ahistoric),
                     ephemeral: new oc.PointerProxy(i.pointer.ephemeral)
                  }, this.pointers = {
                     historic: this._pointerProxies.historic.pointer,
                     ahistoric: this._pointerProxies.ahistoric.pointer,
                     ephemeral: this._pointerProxies.ephemeral.pointer
                  }, R.add(e, this), this._studioReadyDeferred = im(), this._readyPromise = Promise.all([this._studioReadyDeferred.promise, this._assetStorageReadyDeferred.promise]).then(() => {}), t.state ? setTimeout(() => {
                     this._studio || (this._studioReadyDeferred.resolve(void 0), this._assetStorageReadyDeferred.resolve(void 0), this._logger._trace("ready deferred resolved with no state"))
                  }, 0) : "undefined" == typeof window ? console.error('Argument config.state in Theatre.getProject("'.concat(e, '", config) is empty. ') + "You can safely ignore this message if you're developing a Next.js/Remix project in development mode. But if you are shipping to your end-users, then you need to set config.state, otherwise your project's state will be empty and nothing will animate. Learn more at https://www.theatrejs.com/docs/latest/manual/projects#state") : setTimeout(() => {
                     if (!this._studio) throw Error('Argument config.state in Theatre.getProject("'.concat(e, '", config) is empty. This is fine ') + "while you are using @theatre/core along with @theatre/studio. But since @theatre/studio " + 'is not loaded, the state of project "'.concat(e, '" will be empty.\n\n') + "To fix this, you need to add @theatre/studio into the bundle and export the project's state. Learn how to do that at https://www.theatrejs.com/docs/latest/manual/projects#state\n")
                  }, 1e3)
               }
               attachToStudio(e) {
                  if (this._studio) {
                     if (this._studio !== e) throw Error("Project ".concat(this.address.projectId, " is already attached to studio ").concat(this._studio.address.studioId));
                     console.warn("Project ".concat(this.address.projectId, " is already attached to studio ").concat(this._studio.address.studioId));
                     return
                  }
                  this._studio = e, e.initialized.then(async () => {
                     var t;
                     await o3(e, this, this.config.state), this._pointerProxies.historic.setPointer(e.atomP.historic.coreByProject[this.address.projectId]), this._pointerProxies.ahistoric.setPointer(e.atomP.ahistoric.coreByProject[this.address.projectId]), this._pointerProxies.ephemeral.setPointer(e.atomP.ephemeral.coreByProject[this.address.projectId]), await e.createAssetStorage(this, null == (t = this.config.assets) ? void 0 : t.baseUrl).then(e => {
                        this.assetStorage = e, this._assetStorageReadyDeferred.resolve(void 0)
                     }), this._studioReadyDeferred.resolve(void 0)
                  }).catch(e => {
                     throw console.error(e), e
                  })
               }
               get isAttachedToStudio() {
                  return !!this._studio
               }
               get ready() {
                  return this._readyPromise
               }
               isReady() {
                  return "resolved" === this._studioReadyDeferred.status && "resolved" === this._assetStorageReadyDeferred.status
               }
               getOrCreateSheet(e, t = "default") {
                  let r = this._sheetTemplates.get()[e];
                  return r || (r = new ou(this, e), this._sheetTemplates.reduce(t => w(b({}, t), {
                     [e]: r
                  }))), r.getInstance(t)
               }
            },
            o4 = class {
               get type() {
                  return "Theatre_Project_PublicAPI"
               }
               constructor(e, t = {}) {
                  N(this, new o6(e, t, this))
               }
               get ready() {
                  return z(this).ready
               }
               get isReady() {
                  return z(this).isReady()
               }
               get address() {
                  return b({}, z(this).address)
               }
               getAssetUrl(e) {
                  if (!this.isReady) {
                     console.error("Calling `project.getAssetUrl()` before `project.ready` is resolved, will always return `undefined`. Either use `project.ready.then(() => project.getAssetUrl())` or `await project.ready` before calling `project.getAssetUrl()`.");
                     return
                  }
                  return e.id ? z(this).assetStorage.getAssetUrl(e.id) : void 0
               }
               sheet(e, t = "default") {
                  let r = on(e);
                  return z(this).getOrCreateSheet(r, t).publicApi
               }
            };
         P(j());
         var o7 = r(8035),
            ae = r(8035);

         function at(e, t = {}) {
            let r = R.get(e);
            if (r) return r.publicApi;
            let n = o9().named("Project", e);
            return t.state ? (an(e, t.state), n._debug("deep validated config.state on disk")) : n._debug("no config.state"), new o4(e, t)
         }
         var ar = (e, t) => {
               if (Array.isArray(t) || null == t || t.definitionVersion !== o5.currentProjectStateDefinitionVersion) throw new ic("Error validating conf.state in Theatre.getProject(".concat(JSON.stringify(e), ", conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://www.theatrejs.com/docs/latest/manual/projects#state"))
            },
            an = (e, t) => {
               ar(e, t)
            };

         function ai(e, t, r) {
            let n = r ? z(r).ticker : iC();
            if ((0, o7.isPointer)(e)) return (0, ae.pointerToPrism)(e).onChange(n, t, !0);
            if ((0, ae.isPrism)(e)) return e.onChange(n, t, !0);
            throw Error("Called onChange(p) where p is neither a pointer nor a prism.")
         }

         function ao(e) {
            if ((0, o7.isPointer)(e)) return (0, ae.pointerToPrism)(e).getValue();
            throw Error("Called val(p) where p is not a pointer.")
         }
         var aa = class {
            constructor() {
               E(this, "_studio")
            }
            get type() {
               return "Theatre_CoreBundle"
            }
            get version() {
               return "0.7.0"
            }
            getBitsForStudio(e, t) {
               if (this._studio) throw Error("@theatre/core is already attached to @theatre/studio");
               this._studio = e, t({
                  projectsP: R.atom.pointer.projects,
                  privateAPI: z,
                  coreExports: M,
                  getCoreRafDriver: ik
               })
            }
         };
         ! function () {
            if ("undefined" == typeof window) return;
            let e = window[iw];
            if (void 0 !== e) {
               if ("object" == typeof e && e && "string" == typeof e.version) throw Error("It seems that the module '@theatre/core' is loaded more than once. This could have two possible causes:\n1. You might have two separate versions of Theatre.js in node_modules.\n2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.\n\nNote that it **is okay** to import '@theatre/core' multiple times. But those imports should point to the same module.");
               throw Error("The variable window.".concat(iw, " seems to be already set by a module other than @theatre/core."))
            }
            let t = new aa;
            window[iw] = t;
            let r = window.__TheatreJS_StudioBundle;
            r && null !== r && "Theatre_StudioBundle" === r.type && r.registerCoreBundle(t)
         }();
         /*! Bundled license information:

         lodash-es/lodash.js:
           (**
            * @license
            * Lodash (Custom Build) <https://lodash.com/>
            * Build: `lodash modularize exports="es" -o ./`
            * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
            * Released under MIT license <https://lodash.com/license>
            * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
            * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
            *)
         */
      },
      7469: function (e, t, r) {
         "use strict";

         function n() {
            return (n = Object.assign ? Object.assign.bind() : function (e) {
               for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
               }
               return e
            }).apply(this, arguments)
         }
         r.d(t, {
            Z: function () {
               return n
            }
         })
      },
      2720: function (e, t, r) {
         "use strict";
         r.d(t, {
            qi: function () {
               return a
            },
            h7: function () {
               return s
            },
            xQ: function () {
               return l
            },
            S1: function () {
               return u
            },
            ac: function () {
               return c
            },
            EL: function () {
               return p
            },
            iP: function () {
               return g
            }
         });
         var n = r(959),
            i = "undefined" != typeof window && new class {
               constructor() {
                  this.raf = e => {
                     requestAnimationFrame(this.raf);
                     let t = e - this.now;
                     this.now = e;
                     for (let r = 0; r < this.callbacks.length; r++) this.callbacks[r].callback(e, t)
                  }, this.callbacks = [], this.now = performance.now(), requestAnimationFrame(this.raf)
               }
               add(e, t = 0) {
                  return this.callbacks.push({
                     callback: e,
                     priority: t
                  }), this.callbacks.sort((e, t) => e.priority - t.priority), () => this.remove(e)
               }
               remove(e) {
                  this.callbacks = this.callbacks.filter(({
                     callback: t
                  }) => e !== t)
               }
            },
            o = r(517);

         function a() {
            let e = function () {
               let [e, t] = (0, n.useState)(!1);
               return (0, n.useEffect)(() => {
                  t(!0)
               }, []), e
            }();
            return (0, n.useMemo)(() => {
               if (!e) return;
               let t = window.location,
                  r = t.href,
                  n = new URLSearchParams(t.search),
                  i = r.includes("#debug") || r.includes("/_debug") || n.has("debug") || !1,
                  o = r.includes("#production") || n.has("production");
               return i && !o
            }, [e])
         }

         function s() {
            let [e, t] = (0, n.useState)();
            return (0, n.useEffect)(() => {
               function e() {
                  t(document.readyState)
               }
               return document.addEventListener("readystatechange", e, !1), e(), () => document.removeEventListener("readystatechange", e, !1)
            }, []), e
         }

         function l(e, t = 0) {
            (0, n.useEffect)(() => {
               if (e) return i.add(e, t), () => i.remove(e)
            }, [e, t])
         }

         function u({
            root: e = null,
            rootMargin: t = "0px",
            threshold: r = 0,
            once: i = !1,
            lazy: o = !1,
            callback: a = () => {}
         } = {}, s = []) {
            let l = (0, n.useRef)({}),
               [u, c] = (0, n.useState)({}),
               [f, d] = (0, n.useState)();
            (0, n.useEffect)(() => {
               if (!f) return;
               let n = new IntersectionObserver(([e]) => {
                  o ? l.current = e : c(e), a(e), i && e.isIntersecting && n.disconnect()
               }, {
                  root: e,
                  rootMargin: t,
                  threshold: r
               });
               return n.observe(f), () => {
                  n.disconnect()
               }
            }, [f, e, t, r, o, i, ...s]);
            let h = (0, n.useCallback)(() => l.current, []);
            return [d, o ? h : u]
         }

         function c(e) {
            let [t, r] = (0, n.useState)();
            return (0, n.useEffect)(() => {
               let t = window.matchMedia(e);

               function n() {
                  r(t.matches)
               }
               return t.addEventListener("change", n, !1), n(), () => t.removeEventListener("change", n, !1)
            }, [e]), t
         }

         function f() {
            return (f = Object.assign ? Object.assign.bind() : function (e) {
               for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
               }
               return e
            }).apply(this, arguments)
         }
         let d = (0, r(1774).Ue)(e => ({
               elements: [],
               addElement: t => {
                  e(e => ({
                     elements: [...e.elements, t]
                  }))
               },
               removeElement: t => {
                  e(e => ({
                     elements: e.elements.filter(e => e !== t)
                  }))
               }
            })),
            h = {
               emit(e, ...t) {
                  for (let r = 0, n = this.events[e] || [], i = n.length; r < i; r++) n[r](...t)
               },
               events: {},
               on(e, t) {
                  return (this.events[e] || = []).push(t), () => {
                     this.events[e] = this.events[e] ? .filter(e => t !== e)
                  }
               }
            };

         function p({
            ignoreTransform: e = !1,
            ignoreSticky: t = !0,
            lazy: r = !1,
            debounce: i = 500,
            callback: a = () => {}
         } = {}) {
            let [s, l] = (0, n.useState)(), [u, c] = (0, n.useState)({}), p = (0, n.useRef)({}), g = (0, n.useCallback)(e => {
               let t = e.borderBoxSize[0].blockSize;
               p.current.width = e.borderBoxSize[0].inlineSize, p.current.height = t, a(p.current), r || c(f({}, p.current))
            }, [r]), [m] = function ({
               lazy: e = !1,
               debounce: t = 500,
               box: r = "border-box",
               callback: i = () => {}
            } = {}, a = []) {
               let s = (0, n.useRef)({}),
                  [l, u] = (0, n.useState)({}),
                  [c, f] = (0, n.useState)();
               (0, n.useEffect)(() => {
                  if (!c) return;
                  let n = (0, o.Z)(([t]) => {
                        s.current = t, i(t), e || u(t)
                     }, t, !0),
                     a = new ResizeObserver(n);
                  return a.observe(c, {
                     box: r
                  }), () => {
                     a.disconnect(), n.cancel()
                  }
               }, [c, e, t, r, ...a]);
               let d = (0, n.useCallback)(() => s.current, []);
               return [f, e ? d : l]
            }({
               lazy: !0,
               debounce: i,
               callback: g
            }, [i, g]), v = d(({
               elements: e
            }) => e), y = (0, n.useCallback)(() => {
               let n, i;
               if (s) {
                  if (t && function e(t) {
                        "sticky" === getComputedStyle(t).position && (t.style.setProperty("position", "static"), t.dataset.sticky = "true"), t.offsetParent && e(t.offsetParent)
                     }(s), e) n = function e(t, r = 0) {
                     let n = r + t.offsetTop;
                     return t.offsetParent ? e(t.offsetParent, n) : n
                  }(s), i = function e(t, r = 0) {
                     let n = r + t.offsetLeft;
                     return t.offsetParent ? e(t.offsetParent, n) : n
                  }(s);
                  else {
                     let e = s.getBoundingClientRect();
                     n = e.top + function e(t, r = 0) {
                        let n = r + t.scrollTop;
                        return t.offsetParent ? e(t.offsetParent, n) : n + window.scrollY
                     }(s), i = e.left + function e(t, r = 0) {
                        let n = r + t.scrollLeft;
                        return t.offsetParent ? e(t.offsetParent, n) : n + window.scrollX
                     }(s)
                  }
                  t && function e(t) {
                     var r;
                     "true" === (null == t || null == (r = t.dataset) ? void 0 : r.sticky) && (t.style.removeProperty("position"), t.dataset.sticky = "true", delete t.dataset.sticky), t.parentNode && e(t.parentNode)
                  }(s), p.current.top = n, p.current.left = i, a(p.current), r || c(f({}, p.current))
               }
            }, [e, t, r, s]);
            (0, n.useEffect)(() => {
               let e = (0, o.Z)(y, i, !0),
                  t = new ResizeObserver(e);
               return t.observe(document.body), v.forEach(e => {
                  t.observe(e)
               }), () => {
                  t.disconnect(), e.cancel()
               }
            }, [v, i, y]);
            let _ = (0, n.useCallback)(() => p.current, []);
            return (0, n.useEffect)(() => h.on("resize", function () {
               if (!s) return;
               let e = s.getBoundingClientRect();
               p.current.width = e.width, p.current.height = e.height, y()
            }), [s, y]), [e => {
               l(e), m(e)
            }, r ? _ : u]
         }

         function g(e = 500) {
            let [t, r] = (0, n.useState)(), [i, a] = (0, n.useState)();
            return (0, n.useEffect)(() => {
               let t = (0, o.Z)(() => {
                  r(Math.min(window.innerWidth, document.documentElement.clientWidth)), a(Math.min(window.innerHeight, document.documentElement.clientHeight))
               }, e, !0);
               return window.addEventListener("resize", t, !1), t(), () => window.removeEventListener("resize", t, !1)
            }, [e]), {
               width: t,
               height: i
            }
         }
         p.observe = function (e) {
            d.getState().addElement(e)
         }, p.unobserve = function (e) {
            d.getState().removeElement(e)
         }, p.resize = function () {
            h.emit("resize")
         }
      },
      3098: function (e, t, r) {
         "use strict";
         r.d(t, {
            Ei: function () {
               return m
            },
            pi: function () {
               return m
            },
            LZ: function () {
               return g
            }
         });
         var n = r(2720);

         function i(e, t, r) {
            return Math.max(e, Math.min(t, r))
         }
         class o {
            advance(e) {
               var t, r, n;
               if (!this.isRunning) return;
               let o = !1;
               if (this.lerp) this.value = (t = this.value, r = this.to, (1 - (n = 1 - Math.exp(-(60 * this.lerp) * e))) * t + n * r), Math.round(this.value) === this.to && (this.value = this.to, o = !0);
               else {
                  this.currentTime += e;
                  let t = i(0, this.currentTime / this.duration, 1),
                     r = (o = t >= 1) ? 1 : this.easing(t);
                  this.value = this.from + (this.to - this.from) * r
               }
               this.onUpdate ? .(this.value, o), o && this.stop()
            }
            stop() {
               this.isRunning = !1
            }
            fromTo(e, t, {
               lerp: r = .1,
               duration: n = 1,
               easing: i = e => e,
               onStart: o,
               onUpdate: a
            }) {
               this.from = this.value = e, this.to = t, this.lerp = r, this.duration = n, this.easing = i, this.currentTime = 0, this.isRunning = !0, o ? .(), this.onUpdate = a
            }
         }
         class a {
            constructor({
               wrapper: e,
               content: t,
               autoResize: r = !0,
               debounce: n = 250
            } = {}) {
               var i;
               let o;
               this.wrapper = e, this.content = t, r && (this.debouncedResize = (i = this.resize, function () {
                  let e = arguments,
                     t = this;
                  clearTimeout(o), o = setTimeout(function () {
                     i.apply(t, e)
                  }, n)
               }), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
            }
            destroy() {
               this.wrapperResizeObserver ? .disconnect(), this.contentResizeObserver ? .disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
            }
            resize = () => {
               this.onWrapperResize(), this.onContentResize()
            };
            onWrapperResize = () => {
               this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            };
            onContentResize = () => {
               this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            };
            get limit() {
               return {
                  x: this.scrollWidth - this.width,
                  y: this.scrollHeight - this.height
               }
            }
         }
         class s {
            constructor() {
               this.events = {}
            }
            emit(e, ...t) {
               let r = this.events[e] || [];
               for (let e = 0, n = r.length; e < n; e++) r[e](...t)
            }
            on(e, t) {
               return this.events[e] ? .push(t) || (this.events[e] = [t]), () => {
                  this.events[e] = this.events[e] ? .filter(e => t !== e)
               }
            }
            off(e, t) {
               this.events[e] = this.events[e] ? .filter(e => t !== e)
            }
            destroy() {
               this.events = {}
            }
         }
         class l {
            constructor(e, {
               wheelMultiplier: t = 1,
               touchMultiplier: r = 2,
               normalizeWheel: n = !1
            }) {
               this.element = e, this.wheelMultiplier = t, this.touchMultiplier = r, this.normalizeWheel = n, this.touchStart = {
                  x: null,
                  y: null
               }, this.emitter = new s, this.element.addEventListener("wheel", this.onWheel, {
                  passive: !1
               }), this.element.addEventListener("touchstart", this.onTouchStart, {
                  passive: !1
               }), this.element.addEventListener("touchmove", this.onTouchMove, {
                  passive: !1
               }), this.element.addEventListener("touchend", this.onTouchEnd, {
                  passive: !1
               })
            }
            on(e, t) {
               return this.emitter.on(e, t)
            }
            destroy() {
               this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
                  passive: !1
               }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                  passive: !1
               }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                  passive: !1
               }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                  passive: !1
               })
            }
            onTouchStart = e => {
               let {
                  clientX: t,
                  clientY: r
               } = e.targetTouches ? e.targetTouches[0] : e;
               this.touchStart.x = t, this.touchStart.y = r, this.lastDelta = {
                  x: 0,
                  y: 0
               }, this.emitter.emit("scroll", {
                  deltaX: 0,
                  deltaY: 0,
                  event: e
               })
            };
            onTouchMove = e => {
               let {
                  clientX: t,
                  clientY: r
               } = e.targetTouches ? e.targetTouches[0] : e, n = -(t - this.touchStart.x) * this.touchMultiplier, i = -(r - this.touchStart.y) * this.touchMultiplier;
               this.touchStart.x = t, this.touchStart.y = r, this.lastDelta = {
                  x: n,
                  y: i
               }, this.emitter.emit("scroll", {
                  deltaX: n,
                  deltaY: i,
                  event: e
               })
            };
            onTouchEnd = e => {
               this.emitter.emit("scroll", {
                  deltaX: this.lastDelta.x,
                  deltaY: this.lastDelta.y,
                  event: e
               })
            };
            onWheel = e => {
               let {
                  deltaX: t,
                  deltaY: r
               } = e;
               this.normalizeWheel && (t = i(-100, t, 100), r = i(-100, r, 100)), t *= this.wheelMultiplier, r *= this.wheelMultiplier, this.emitter.emit("scroll", {
                  deltaX: t,
                  deltaY: r,
                  event: e
               })
            }
         }
         class u {
            constructor({
               wrapper: e = window,
               content: t = document.documentElement,
               wheelEventsTarget: r = e,
               eventsTarget: n = r,
               smoothWheel: i = !0,
               syncTouch: u = !1,
               syncTouchLerp: c = .075,
               touchInertiaMultiplier: f = 35,
               duration: d,
               easing: h = e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
               lerp: p = !d && .1,
               infinite: g = !1,
               orientation: m = "vertical",
               gestureOrientation: v = "vertical",
               touchMultiplier: y = 1,
               wheelMultiplier: _ = 1,
               normalizeWheel: b = !1,
               autoResize: w = !0,
               __experimental__naiveDimensions: x = !1
            } = {}) {
               this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
                  deltaX: e,
                  deltaY: t,
                  event: r
               }) => {
                  if (r.ctrlKey) return;
                  let n = r.type.includes("touch"),
                     i = r.type.includes("wheel");
                  if (this.options.syncTouch && n && "touchstart" === r.type) return void this.reset();
                  let o = "vertical" === this.options.gestureOrientation && 0 === t || "horizontal" === this.options.gestureOrientation && 0 === e;
                  if (0 === e && 0 === t || o) return;
                  let a = r.composedPath();
                  if ((a = a.slice(0, a.indexOf(this.rootElement))).find(e => {
                        var t, r, o, a, s;
                        return (null === (t = e.hasAttribute) || void 0 === t ? void 0 : t.call(e, "data-lenis-prevent")) || n && (null === (r = e.hasAttribute) || void 0 === r ? void 0 : r.call(e, "data-lenis-prevent-touch")) || i && (null === (o = e.hasAttribute) || void 0 === o ? void 0 : o.call(e, "data-lenis-prevent-wheel")) || (null === (a = e.classList) || void 0 === a ? void 0 : a.contains("lenis")) && !(null === (s = e.classList) || void 0 === s ? void 0 : s.contains("lenis-stopped"))
                     })) return;
                  if (this.isStopped || this.isLocked) return void r.preventDefault();
                  if (this.isSmooth = this.options.syncTouch && n || this.options.smoothWheel && i, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
                  r.preventDefault();
                  let s = t;
                  "both" === this.options.gestureOrientation ? s = Math.abs(t) > Math.abs(e) ? t : e : "horizontal" === this.options.gestureOrientation && (s = e);
                  let l = n && this.options.syncTouch,
                     u = n && "touchend" === r.type && Math.abs(s) > 5;
                  u && (s = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + s, Object.assign({
                     programmatic: !1
                  }, l ? {
                     lerp: u ? this.options.syncTouchLerp : 1
                  } : {
                     lerp: this.options.lerp,
                     duration: this.options.duration,
                     easing: this.options.easing
                  }))
               }, this.onNativeScroll = () => {
                  if (!this.__preventNextScrollEvent && !this.isScrolling) {
                     let e = this.animatedScroll;
                     this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - e), this.emit()
                  }
               }, window.lenisVersion = "1.0.39", e !== document.documentElement && e !== document.body || (e = window), this.options = {
                  wrapper: e,
                  content: t,
                  wheelEventsTarget: r,
                  eventsTarget: n,
                  smoothWheel: i,
                  syncTouch: u,
                  syncTouchLerp: c,
                  touchInertiaMultiplier: f,
                  duration: d,
                  easing: h,
                  lerp: p,
                  infinite: g,
                  gestureOrientation: v,
                  orientation: m,
                  touchMultiplier: y,
                  wheelMultiplier: _,
                  normalizeWheel: b,
                  autoResize: w,
                  __experimental__naiveDimensions: x
               }, this.animate = new o, this.emitter = new s, this.dimensions = new a({
                  wrapper: e,
                  content: t,
                  autoResize: w
               }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = u || i, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
                  passive: !1
               }), this.virtualScroll = new l(n, {
                  touchMultiplier: y,
                  wheelMultiplier: _,
                  normalizeWheel: b
               }), this.virtualScroll.on("scroll", this.onVirtualScroll)
            }
            destroy() {
               this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
                  passive: !1
               }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
            }
            on(e, t) {
               return this.emitter.on(e, t)
            }
            off(e, t) {
               return this.emitter.off(e, t)
            }
            setScroll(e) {
               this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
            }
            resize() {
               this.dimensions.resize()
            }
            emit() {
               this.emitter.emit("scroll", this)
            }
            reset() {
               this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
            }
            start() {
               this.isStopped && (this.isStopped = !1, this.reset())
            }
            stop() {
               this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
            }
            raf(e) {
               let t = e - (this.time || e);
               this.time = e, this.animate.advance(.001 * t)
            }
            scrollTo(e, {
               offset: t = 0,
               immediate: r = !1,
               lock: n = !1,
               duration: o = this.options.duration,
               easing: a = this.options.easing,
               lerp: s = !o && this.options.lerp,
               onComplete: l,
               force: u = !1,
               programmatic: c = !0
            } = {}) {
               if (!this.isStopped && !this.isLocked || u) {
                  if (["top", "left", "start"].includes(e)) e = 0;
                  else if (["bottom", "right", "end"].includes(e)) e = this.limit;
                  else {
                     let r;
                     if ("string" == typeof e ? r = document.querySelector(e) : (null == e ? void 0 : e.nodeType) && (r = e), r) {
                        if (this.options.wrapper !== window) {
                           let e = this.options.wrapper.getBoundingClientRect();
                           t -= this.isHorizontal ? e.left : e.top
                        }
                        let n = r.getBoundingClientRect();
                        e = (this.isHorizontal ? n.left : n.top) + this.animatedScroll
                     }
                  }
                  if ("number" == typeof e) {
                     if (e += t, e = Math.round(e), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = i(0, e, this.limit), r) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void(null == l || l(this));
                     if (!c) {
                        if (e === this.targetScroll) return;
                        this.targetScroll = e
                     }
                     this.animate.fromTo(this.animatedScroll, e, {
                        duration: o,
                        easing: a,
                        lerp: s,
                        onStart: () => {
                           n && (this.isLocked = !0), this.isScrolling = !0
                        },
                        onUpdate: (e, t) => {
                           this.isScrolling = !0, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), c && (this.targetScroll = e), t || this.emit(), t && (this.reset(), this.emit(), null == l || l(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
                              delete this.__preventNextScrollEvent
                           }))
                        }
                     })
                  }
               }
            }
            get rootElement() {
               return this.options.wrapper === window ? document.documentElement : this.options.wrapper
            }
            get limit() {
               return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
            }
            get isHorizontal() {
               return "horizontal" === this.options.orientation
            }
            get actualScroll() {
               return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
            }
            get scroll() {
               var e;
               return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll
            }
            get progress() {
               return 0 === this.limit ? 1 : this.scroll / this.limit
            }
            get isSmooth() {
               return this.__isSmooth
            }
            set isSmooth(e) {
               this.__isSmooth !== e && (this.__isSmooth = e, this.toggleClassName("lenis-smooth", e))
            }
            get isScrolling() {
               return this.__isScrolling
            }
            set isScrolling(e) {
               this.__isScrolling !== e && (this.__isScrolling = e, this.toggleClassName("lenis-scrolling", e))
            }
            get isStopped() {
               return this.__isStopped
            }
            set isStopped(e) {
               this.__isStopped !== e && (this.__isStopped = e, this.toggleClassName("lenis-stopped", e))
            }
            get isLocked() {
               return this.__isLocked
            }
            set isLocked(e) {
               this.__isLocked !== e && (this.__isLocked = e, this.toggleClassName("lenis-locked", e))
            }
            get className() {
               let e = "lenis";
               return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
            }
            toggleClassName(e, t) {
               this.rootElement.classList.toggle(e, t), this.emitter.emit("className change", this)
            }
         }
         var c = r(6259),
            f = r(959),
            d = r(1774);
         "function" == typeof SuppressedError && SuppressedError;
         let h = (0, f.createContext)(),
            p = (0, d.Ue)(() => ({}));

         function g(e, t = [], r = 0) {
            let {
               lenis: n,
               addCallback: i,
               removeCallback: o
            } = function () {
               let e = (0, f.useContext)(h),
                  t = p();
               return null != e ? e : t
            }();
            return (0, f.useEffect)(() => {
               if (e && i && o && n) return i(e, r), e(n), () => {
                  o(e)
               }
            }, [n, i, o, r, ...t]), n
         }
         let m = (0, f.forwardRef)((e, t) => {
            var {
               children: r,
               root: i = !1,
               options: o = {},
               autoRaf: a = !0,
               rafPriority: s = 0,
               className: l
            } = e, d = function (e, t) {
               var r = {};
               for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
               if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                  var i = 0;
                  for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
               }
               return r
            }(e, ["children", "root", "options", "autoRaf", "rafPriority", "className"]);
            let g = (0, f.useRef)(),
               m = (0, f.useRef)(),
               [v, y] = (0, f.useState)(),
               _ = (0, f.useRef)([]),
               b = (0, f.useCallback)((e, t) => {
                  _.current.push({
                     callback: e,
                     priority: t
                  }), _.current.sort((e, t) => e.priority - t.priority)
               }, []),
               w = (0, f.useCallback)(e => {
                  _.current = _.current.filter(t => t.callback !== e)
               }, []);
            (0, f.useImperativeHandle)(t, () => ({
               wrapper: g.current,
               content: m.current,
               lenis: v
            }), [v]), (0, f.useEffect)(() => {
               let e = new u(Object.assign(Object.assign({}, o), !i && {
                  wrapper: g.current,
                  content: m.current
               }));
               return y(e), () => {
                  e.destroy(), y(void 0)
               }
            }, [i, JSON.stringify(o)]), (0, n.xQ)(e => {
               a && (null == v || v.raf(e))
            }, s), (0, f.useEffect)(() => {
               i && v && p.setState({
                  lenis: v,
                  addCallback: b,
                  removeCallback: w
               })
            }, [i, v, b, w]);
            let x = (0, f.useCallback)(e => {
               for (let t = 0; t < _.current.length; t++) _.current[t].callback(e)
            }, []);
            (0, f.useEffect)(() => (null == v || v.on("scroll", x), () => {
               null == v || v.off("scroll", x)
            }), [v, x]);
            let S = (0, f.useCallback)(() => {
               g.current && (g.current.className = (0, c.Z)(null == v ? void 0 : v.className, l))
            }, [v, l]);
            return (0, f.useEffect)(() => (S(), null == v || v.on("className change", S), () => {
               null == v || v.off("className change", S)
            }), [v, S]), f.createElement(h.Provider, {
               value: {
                  lenis: v,
                  addCallback: b,
                  removeCallback: w
               }
            }, i ? r : f.createElement("div", Object.assign({
               ref: g,
               className: (0, c.Z)(null == v ? void 0 : v.className, l)
            }, d), f.createElement("div", {
               ref: m
            }, r)))
         })
      },
      6259: function (e, t, r) {
         "use strict";
         t.Z = function () {
            for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)(e = arguments[r]) && (t = function e(t) {
               var r, n, i = "";
               if ("string" == typeof t || "number" == typeof t) i += t;
               else if ("object" == typeof t) {
                  if (Array.isArray(t)) {
                     var o = t.length;
                     for (r = 0; r < o; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n)
                  } else
                     for (n in t) t[n] && (i && (i += " "), i += n)
               }
               return i
            }(e)) && (n && (n += " "), n += t);
            return n
         }
      },
      517: function (e, t, r) {
         "use strict";
         r.d(t, {
            Z: function () {
               return n
            }
         });
         var n = function (e, t, r) {
            var n = null,
               i = null,
               o = function () {
                  n && (clearTimeout(n), i = null, n = null)
               },
               a = function () {
                  if (!t) return e.apply(this, arguments);
                  var a = this,
                     s = arguments,
                     l = r && !n;
                  if (o(), i = function () {
                        e.apply(a, s)
                     }, n = setTimeout(function () {
                        if (n = null, !l) {
                           var e = i;
                           return i = null, e()
                        }
                     }, t), l) return i()
               };
            return a.cancel = o, a.flush = function () {
               var e = i;
               o(), e && e()
            }, a
         }
      },
      1690: function (e, t, r) {
         "use strict";
         let n, i;
         r.d(t, {
            Ee: function () {
               return eO
            },
            rU: function () {
               return eA
            },
            R_: function () {
               return eR
            },
            Oy: function () {
               return eI
            },
            iR: function () {
               return n2
            },
            oN: function () {
               return n1
            }
         });
         var o, a, s, l, u, c, f = r(1527),
            d = r(7469),
            h = r(959),
            p = r.t(h, 2);

         function g(e, t = []) {
            let r = [],
               n = () => {
                  let t = r.map(e => (0, h.createContext)(e));
                  return function (r) {
                     let n = (null == r ? void 0 : r[e]) || t;
                     return (0, h.useMemo)(() => ({
                        [`__scope${e}`]: {
                           ...r,
                           [e]: n
                        }
                     }), [r, n])
                  }
               };
            return n.scopeName = e, [function (t, n) {
               let i = (0, h.createContext)(n),
                  o = r.length;

               function a(t) {
                  let {
                     scope: r,
                     children: n,
                     ...a
                  } = t, s = (null == r ? void 0 : r[e][o]) || i, l = (0, h.useMemo)(() => a, Object.values(a));
                  return (0, h.createElement)(s.Provider, {
                     value: l
                  }, n)
               }
               return r = [...r, n], a.displayName = t + "Provider", [a, function (r, a) {
                  let s = (null == a ? void 0 : a[e][o]) || i,
                     l = (0, h.useContext)(s);
                  if (l) return l;
                  if (void 0 !== n) return n;
                  throw Error(`\`${r}\` must be used within \`${t}\``)
               }]
            }, function (...e) {
               let t = e[0];
               if (1 === e.length) return t;
               let r = () => {
                  let r = e.map(e => ({
                     useScope: e(),
                     scopeName: e.scopeName
                  }));
                  return function (e) {
                     let n = r.reduce((t, {
                        useScope: r,
                        scopeName: n
                     }) => {
                        let i = r(e)[`__scope${n}`];
                        return {
                           ...t,
                           ...i
                        }
                     }, {});
                     return (0, h.useMemo)(() => ({
                        [`__scope${t.scopeName}`]: n
                     }), [n])
                  }
               };
               return r.scopeName = t.scopeName, r
            }(n, ...t)]
         }

         function m(...e) {
            return t => e.forEach(e => {
               "function" == typeof e ? e(t) : null != e && (e.current = t)
            })
         }

         function v(...e) {
            return (0, h.useCallback)(m(...e), e)
         }
         let y = (0, h.forwardRef)((e, t) => {
            let {
               children: r,
               ...n
            } = e, i = h.Children.toArray(r), o = i.find(w);
            if (o) {
               let e = o.props.children,
                  r = i.map(t => t !== o ? t : h.Children.count(e) > 1 ? h.Children.only(null) : (0, h.isValidElement)(e) ? e.props.children : null);
               return (0, h.createElement)(_, (0, d.Z)({}, n, {
                  ref: t
               }), (0, h.isValidElement)(e) ? (0, h.cloneElement)(e, void 0, r) : null)
            }
            return (0, h.createElement)(_, (0, d.Z)({}, n, {
               ref: t
            }), r)
         });
         y.displayName = "Slot";
         let _ = (0, h.forwardRef)((e, t) => {
            let {
               children: r,
               ...n
            } = e;
            return (0, h.isValidElement)(r) ? (0, h.cloneElement)(r, {
               ... function (e, t) {
                  let r = {
                     ...t
                  };
                  for (let n in t) {
                     let i = e[n],
                        o = t[n];
                     /^on[A-Z]/.test(n) ? i && o ? r[n] = (...e) => {
                        o(...e), i(...e)
                     } : i && (r[n] = i) : "style" === n ? r[n] = {
                        ...i,
                        ...o
                     } : "className" === n && (r[n] = [i, o].filter(Boolean).join(" "))
                  }
                  return {
                     ...e,
                     ...r
                  }
               }(n, r.props),
               ref: t ? m(t, r.ref) : r.ref
            }) : h.Children.count(r) > 1 ? h.Children.only(null) : null
         });
         _.displayName = "SlotClone";
         let b = ({
            children: e
         }) => (0, h.createElement)(h.Fragment, null, e);

         function w(e) {
            return (0, h.isValidElement)(e) && e.type === b
         }

         function x(e) {
            let t = e + "CollectionProvider",
               [r, n] = g(t),
               [i, o] = r(t, {
                  collectionRef: {
                     current: null
                  },
                  itemMap: new Map
               }),
               a = e + "CollectionSlot",
               s = h.forwardRef((e, t) => {
                  let {
                     scope: r,
                     children: n
                  } = e, i = v(t, o(a, r).collectionRef);
                  return h.createElement(y, {
                     ref: i
                  }, n)
               }),
               l = e + "CollectionItemSlot",
               u = "data-radix-collection-item";
            return [{
               Provider: e => {
                  let {
                     scope: t,
                     children: r
                  } = e, n = h.useRef(null), o = h.useRef(new Map).current;
                  return h.createElement(i, {
                     scope: t,
                     itemMap: o,
                     collectionRef: n
                  }, r)
               },
               Slot: s,
               ItemSlot: h.forwardRef((e, t) => {
                  let {
                     scope: r,
                     children: n,
                     ...i
                  } = e, a = h.useRef(null), s = v(t, a), c = o(l, r);
                  return h.useEffect(() => (c.itemMap.set(a, {
                     ref: a,
                     ...i
                  }), () => void c.itemMap.delete(a))), h.createElement(y, {
                     [u]: "",
                     ref: s
                  }, n)
               })
            }, function (t) {
               let r = o(e + "CollectionConsumer", t);
               return h.useCallback(() => {
                  let e = r.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll(`[${u}]`));
                  return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
               }, [r.collectionRef, r.itemMap])
            }, n]
         }

         function S(e, t, {
            checkForDefaultPrevented: r = !0
         } = {}) {
            return function (n) {
               if (null == e || e(n), !1 === r || !n.defaultPrevented) return null == t ? void 0 : t(n)
            }
         }

         function T(e) {
            let t = (0, h.useRef)(e);
            return (0, h.useEffect)(() => {
               t.current = e
            }), (0, h.useMemo)(() => (...e) => {
               var r;
               return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e)
            }, [])
         }

         function P({
            prop: e,
            defaultProp: t,
            onChange: r = () => {}
         }) {
            let [n, i] = function ({
               defaultProp: e,
               onChange: t
            }) {
               let r = (0, h.useState)(e),
                  [n] = r,
                  i = (0, h.useRef)(n),
                  o = T(t);
               return (0, h.useEffect)(() => {
                  i.current !== n && (o(n), i.current = n)
               }, [n, i, o]), r
            }({
               defaultProp: t,
               onChange: r
            }), o = void 0 !== e, a = o ? e : n, s = T(r);
            return [a, (0, h.useCallback)(t => {
               if (o) {
                  let r = "function" == typeof t ? t(e) : t;
                  r !== e && s(r)
               } else i(t)
            }, [o, e, i, s])]
         }
         var E = r(422);
         let O = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
               let r = (0, h.forwardRef)((e, r) => {
                  let {
                     asChild: n,
                     ...i
                  } = e, o = n ? y : t;
                  return (0, h.useEffect)(() => {
                     window[Symbol.for("radix-ui")] = !0
                  }, []), (0, h.createElement)(o, (0, d.Z)({}, i, {
                     ref: r
                  }))
               });
               return r.displayName = `Primitive.${t}`, {
                  ...e,
                  [t]: r
               }
            }, {}),
            k = (null == globalThis ? void 0 : globalThis.document) ? h.useLayoutEffect : () => {},
            C = e => {
               let {
                  present: t,
                  children: r
               } = e, n = function (e) {
                  var t, r;
                  let [n, i] = (0, h.useState)(), o = (0, h.useRef)({}), a = (0, h.useRef)(e), s = (0, h.useRef)("none"), [l, u] = (t = e ? "mounted" : "unmounted", r = {
                     mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                     },
                     unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                     },
                     unmounted: {
                        MOUNT: "mounted"
                     }
                  }, (0, h.useReducer)((e, t) => {
                     let n = r[e][t];
                     return null != n ? n : e
                  }, t));
                  return (0, h.useEffect)(() => {
                     let e = j(o.current);
                     s.current = "mounted" === l ? e : "none"
                  }, [l]), k(() => {
                     let t = o.current,
                        r = a.current;
                     if (r !== e) {
                        let n = s.current,
                           i = j(t);
                        e ? u("MOUNT") : "none" === i || (null == t ? void 0 : t.display) === "none" ? u("UNMOUNT") : r && n !== i ? u("ANIMATION_OUT") : u("UNMOUNT"), a.current = e
                     }
                  }, [e, u]), k(() => {
                     if (n) {
                        let e = e => {
                              let t = j(o.current).includes(e.animationName);
                              e.target === n && t && (0, E.flushSync)(() => u("ANIMATION_END"))
                           },
                           t = e => {
                              e.target === n && (s.current = j(o.current))
                           };
                        return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                           n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
                        }
                     }
                     u("ANIMATION_END")
                  }, [n, u]), {
                     isPresent: ["mounted", "unmountSuspended"].includes(l),
                     ref: (0, h.useCallback)(e => {
                        e && (o.current = getComputedStyle(e)), i(e)
                     }, [])
                  }
               }(t), i = "function" == typeof r ? r({
                  present: n.isPresent
               }) : h.Children.only(r), o = v(n.ref, i.ref);
               return "function" == typeof r || n.isPresent ? (0, h.cloneElement)(i, {
                  ref: o
               }) : null
            };

         function j(e) {
            return (null == e ? void 0 : e.animationName) || "none"
         }
         C.displayName = "Presence";
         let A = p["useId".toString()] || (() => void 0),
            M = 0;

         function D(e) {
            let [t, r] = h.useState(A());
            return k(() => {
               e || r(e => null != e ? e : String(M++))
            }, [e]), e || (t ? `radix-${t}` : "")
         }
         let R = "Collapsible",
            [I, z] = g(R),
            [N, L] = I(R),
            F = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeCollapsible: r,
                  open: n,
                  defaultOpen: i,
                  disabled: o,
                  onOpenChange: a,
                  ...s
               } = e, [l = !1, u] = P({
                  prop: n,
                  defaultProp: i,
                  onChange: a
               });
               return (0, h.createElement)(N, {
                  scope: r,
                  disabled: o,
                  contentId: D(),
                  open: l,
                  onOpenToggle: (0, h.useCallback)(() => u(e => !e), [u])
               }, (0, h.createElement)(O.div, (0, d.Z)({
                  "data-state": W(l),
                  "data-disabled": o ? "" : void 0
               }, s, {
                  ref: t
               })))
            }),
            B = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeCollapsible: r,
                  ...n
               } = e, i = L("CollapsibleTrigger", r);
               return (0, h.createElement)(O.button, (0, d.Z)({
                  type: "button",
                  "aria-controls": i.contentId,
                  "aria-expanded": i.open || !1,
                  "data-state": W(i.open),
                  "data-disabled": i.disabled ? "" : void 0,
                  disabled: i.disabled
               }, n, {
                  ref: t,
                  onClick: S(e.onClick, i.onOpenToggle)
               }))
            }),
            V = "CollapsibleContent",
            H = (0, h.forwardRef)((e, t) => {
               let {
                  forceMount: r,
                  ...n
               } = e, i = L(V, e.__scopeCollapsible);
               return (0, h.createElement)(C, {
                  present: r || i.open
               }, ({
                  present: e
               }) => (0, h.createElement)(U, (0, d.Z)({}, n, {
                  ref: t,
                  present: e
               })))
            }),
            U = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeCollapsible: r,
                  present: n,
                  children: i,
                  ...o
               } = e, a = L(V, r), [s, l] = (0, h.useState)(n), u = (0, h.useRef)(null), c = v(t, u), f = (0, h.useRef)(0), p = f.current, g = (0, h.useRef)(0), m = g.current, y = a.open || s, _ = (0, h.useRef)(y), b = (0, h.useRef)();
               return (0, h.useEffect)(() => {
                  let e = requestAnimationFrame(() => _.current = !1);
                  return () => cancelAnimationFrame(e)
               }, []), k(() => {
                  let e = u.current;
                  if (e) {
                     b.current = b.current || {
                        transitionDuration: e.style.transitionDuration,
                        animationName: e.style.animationName
                     }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                     let t = e.getBoundingClientRect();
                     f.current = t.height, g.current = t.width, _.current || (e.style.transitionDuration = b.current.transitionDuration, e.style.animationName = b.current.animationName), l(n)
                  }
               }, [a.open, n]), (0, h.createElement)(O.div, (0, d.Z)({
                  "data-state": W(a.open),
                  "data-disabled": a.disabled ? "" : void 0,
                  id: a.contentId,
                  hidden: !y
               }, o, {
                  ref: c,
                  style: {
                     "--radix-collapsible-content-height": p ? `${p}px` : void 0,
                     "--radix-collapsible-content-width": m ? `${m}px` : void 0,
                     ...e.style
                  }
               }), y && i)
            });

         function W(e) {
            return e ? "open" : "closed"
         }
         let q = (0, h.createContext)(void 0);

         function Y(e) {
            let t = (0, h.useContext)(q);
            return e || t || "ltr"
         }
         let X = "Accordion",
            $ = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
            [Z, G, K] = x(X),
            [J, Q] = g(X, [K, z]),
            ee = z(),
            et = h.forwardRef((e, t) => {
               let {
                  type: r,
                  ...n
               } = e;
               return h.createElement(Z.Provider, {
                  scope: e.__scopeAccordion
               }, "multiple" === r ? h.createElement(es, (0, d.Z)({}, n, {
                  ref: t
               })) : h.createElement(ea, (0, d.Z)({}, n, {
                  ref: t
               })))
            });
         et.propTypes = {
            type(e) {
               let t = e.value || e.defaultValue;
               return e.type && !["single", "multiple"].includes(e.type) ? Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof t ? Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(t) ? Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
            }
         };
         let [er, en] = J(X), [ei, eo] = J(X, {
            collapsible: !1
         }), ea = h.forwardRef((e, t) => {
            let {
               value: r,
               defaultValue: n,
               onValueChange: i = () => {},
               collapsible: o = !1,
               ...a
            } = e, [s, l] = P({
               prop: r,
               defaultProp: n,
               onChange: i
            });
            return h.createElement(er, {
               scope: e.__scopeAccordion,
               value: s ? [s] : [],
               onItemOpen: l,
               onItemClose: h.useCallback(() => o && l(""), [o, l])
            }, h.createElement(ei, {
               scope: e.__scopeAccordion,
               collapsible: o
            }, h.createElement(ec, (0, d.Z)({}, a, {
               ref: t
            }))))
         }), es = h.forwardRef((e, t) => {
            let {
               value: r,
               defaultValue: n,
               onValueChange: i = () => {},
               ...o
            } = e, [a = [], s] = P({
               prop: r,
               defaultProp: n,
               onChange: i
            }), l = h.useCallback(e => s((t = []) => [...t, e]), [s]), u = h.useCallback(e => s((t = []) => t.filter(t => t !== e)), [s]);
            return h.createElement(er, {
               scope: e.__scopeAccordion,
               value: a,
               onItemOpen: l,
               onItemClose: u
            }, h.createElement(ei, {
               scope: e.__scopeAccordion,
               collapsible: !0
            }, h.createElement(ec, (0, d.Z)({}, o, {
               ref: t
            }))))
         }), [el, eu] = J(X), ec = h.forwardRef((e, t) => {
            let {
               __scopeAccordion: r,
               disabled: n,
               dir: i,
               orientation: o = "vertical",
               ...a
            } = e, s = v(h.useRef(null), t), l = G(r), u = "ltr" === Y(i), c = S(e.onKeyDown, e => {
               var t;
               if (!$.includes(e.key)) return;
               let r = e.target,
                  n = l().filter(e => {
                     var t;
                     return !(null !== (t = e.ref.current) && void 0 !== t && t.disabled)
                  }),
                  i = n.findIndex(e => e.ref.current === r),
                  a = n.length;
               if (-1 === i) return;
               e.preventDefault();
               let s = i,
                  c = a - 1,
                  f = () => {
                     (s = i + 1) > c && (s = 0)
                  },
                  d = () => {
                     (s = i - 1) < 0 && (s = c)
                  };
               switch (e.key) {
                  case "Home":
                     s = 0;
                     break;
                  case "End":
                     s = c;
                     break;
                  case "ArrowRight":
                     "horizontal" === o && (u ? f() : d());
                     break;
                  case "ArrowDown":
                     "vertical" === o && f();
                     break;
                  case "ArrowLeft":
                     "horizontal" === o && (u ? d() : f());
                     break;
                  case "ArrowUp":
                     "vertical" === o && d()
               }
               null === (t = n[s % a].ref.current) || void 0 === t || t.focus()
            });
            return h.createElement(el, {
               scope: r,
               disabled: n,
               direction: i,
               orientation: o
            }, h.createElement(Z.Slot, {
               scope: r
            }, h.createElement(O.div, (0, d.Z)({}, a, {
               "data-orientation": o,
               ref: s,
               onKeyDown: n ? void 0 : c
            }))))
         }), ef = "AccordionItem", [ed, eh] = J(ef), ep = h.forwardRef((e, t) => {
            let {
               __scopeAccordion: r,
               value: n,
               ...i
            } = e, o = eu(ef, r), a = en(ef, r), s = ee(r), l = D(), u = n && a.value.includes(n) || !1, c = o.disabled || e.disabled;
            return h.createElement(ed, {
               scope: r,
               open: u,
               disabled: c,
               triggerId: l
            }, h.createElement(F, (0, d.Z)({
               "data-orientation": o.orientation,
               "data-state": e_(u)
            }, s, i, {
               ref: t,
               disabled: c,
               open: u,
               onOpenChange: e => {
                  e ? a.onItemOpen(n) : a.onItemClose(n)
               }
            })))
         }), eg = h.forwardRef((e, t) => {
            let {
               __scopeAccordion: r,
               ...n
            } = e, i = eu(X, r), o = eh("AccordionHeader", r);
            return h.createElement(O.h3, (0, d.Z)({
               "data-orientation": i.orientation,
               "data-state": e_(o.open),
               "data-disabled": o.disabled ? "" : void 0
            }, n, {
               ref: t
            }))
         }), em = "AccordionTrigger", ev = h.forwardRef((e, t) => {
            let {
               __scopeAccordion: r,
               ...n
            } = e, i = eu(X, r), o = eh(em, r), a = eo(em, r), s = ee(r);
            return h.createElement(Z.ItemSlot, {
               scope: r
            }, h.createElement(B, (0, d.Z)({
               "aria-disabled": o.open && !a.collapsible || void 0,
               "data-orientation": i.orientation,
               id: o.triggerId
            }, s, n, {
               ref: t
            })))
         }), ey = h.forwardRef((e, t) => {
            let {
               __scopeAccordion: r,
               ...n
            } = e, i = eu(X, r), o = eh("AccordionContent", r), a = ee(r);
            return h.createElement(H, (0, d.Z)({
               role: "region",
               "aria-labelledby": o.triggerId,
               "data-orientation": i.orientation
            }, a, n, {
               ref: t,
               style: {
                  "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                  ...e.style
               }
            }))
         });

         function e_(e) {
            return e ? "open" : "closed"
         }
         var eb = r(6259),
            ew = r(3767);

         function ex(e) {
            let {
               children: t,
               className: r,
               ...n
            } = e;
            return (0, f.jsx)("div", {
               className: (0, eb.Z)(ew.container, r),
               children: (0, f.jsx)(et, {
                  ...n,
                  children: t
               })
            })
         }
         let eS = (0, h.forwardRef)((e, t) => {
               let {
                  children: r,
                  value: n,
                  className: i = ""
               } = e;
               return (0, f.jsx)(ep, {
                  ref: t,
                  value: n,
                  className: (0, eb.Z)(i, ew["item-wrapper"]),
                  children: r
               })
            }),
            eT = (0, h.forwardRef)((e, t) => {
               let {
                  children: r,
                  className: n = "",
                  ...i
               } = e;
               return (0, f.jsx)(eg, {
                  asChild: !0,
                  children: (0, f.jsx)(ev, {
                     className: (0, eb.Z)(n, ew["trigger-wrapper"]),
                     ref: t,
                     ...i,
                     children: r
                  })
               })
            }),
            eP = (0, h.forwardRef)((e, t) => {
               let {
                  children: r,
                  className: n = "",
                  props: i
               } = e;
               return (0, f.jsx)(ey, {
                  className: (0, eb.Z)(n, ew["content-wrapper"]),
                  ref: t,
                  ...i,
                  children: r
               })
            });
         eS.displayName = "AccordionItem", eT.displayName = "AccordionTrigger", eP.displayName = "AccordionContent", ex.Trigger = eT, ex.Content = eP, ex.Item = eS, r(2982), RegExp("[" + Object.keys(Object.freeze({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
         })).join("") + "]", "g");
         var eE = r(7636);
         let eO = (0, h.forwardRef)(function (e, t) {
            let {
               className: r,
               style: n,
               loading: i = "eager",
               objectFit: o = "cover",
               quality: a = 90,
               alt: s = "",
               fill: l,
               width: u,
               height: c,
               src: d,
               ...h
            } = e, p = eE;
            return "default" in p && (p = p.default), (0, f.jsx)(p, {
               ref: t,
               src: d,
               className: r,
               style: {
                  objectFit: o,
                  ...n
               },
               loading: i,
               quality: a,
               alt: s,
               fill: l,
               width: l ? void 0 : u,
               height: l ? void 0 : c,
               ...h
            })
         });
         var ek = r(9151),
            eC = r(6525);
         let ej = ["?demo=true"],
            eA = (0, h.forwardRef)((e, t) => {
               let {
                  href: r,
                  children: n,
                  shallow: i,
                  scroll: o,
                  fallback: a = "div",
                  ...s
               } = e, l = (0, eC.useRouter)();
               if ("string" != typeof r) return (0, f.jsx)(a, {
                  ref: t,
                  ...s,
                  children: n
               });
               let u = null == r ? void 0 : r.startsWith("http"),
                  c = (null == r ? void 0 : r.startsWith("mailto:")) || (null == r ? void 0 : r.startsWith("tel:"));
               u || (null == r ? void 0 : r.startsWith("/")) || c || (r = "/".concat(r));
               let d = !!ej.find(e => null == r ? void 0 : r.includes(e)),
                  h = (null == l ? void 0 : l.pathname) === r;
               return (0, f.jsx)(ek, {
                  ref: t,
                  href: r,
                  shallow: d || i,
                  scroll: o,
                  ...(c || u) && {
                     target: "_blank",
                     rel: "noopener noreferrer"
                  },
                  ...s,
                  onClick: e => {
                     var t;
                     h && e.preventDefault(), null == s || null === (t = s.onClick) || void 0 === t || t.call(s)
                  },
                  children: n
               })
            });
         eA.displayName = "Link";
         var eM = r(2720);
         r(3438);
         var eD = r(7912);
         let eR = e => {
            let {
               children: t,
               repeat: r = 2,
               duration: n = 5,
               offset: i = 0,
               inverted: o = !1,
               className: a,
               animationStart: s = !0,
               ...l
            } = e, [u, c] = (0, eM.S1)({
               threshold: 0
            });
            return (0, f.jsx)("div", {
               ref: u,
               ...l,
               className: (0, eb.Z)(a, eD.marquee, o && eD.inverted, (null == c ? void 0 : c.isIntersecting) && "running"),
               style: {
                  "--duration": n + "s",
                  "--offset": i % 100 + "%",
                  "--animation-status": (null == c ? void 0 : c.isIntersecting) && s ? "running" : "paused"
               },
               children: Array(r).fill(t).map((e, r) => (0, f.jsx)("div", {
                  className: eD.inner,
                  "aria-hidden": 0 !== r,
                  "data-nosnippet": 0 !== r ? "" : void 0,
                  children: t
               }, r))
            })
         };

         function eI() {
            (0, h.useEffect)(() => {
               function e() {
                  document.documentElement.style.setProperty("--dvh", .01 * window.innerHeight + "px"), document.documentElement.style.setProperty("--svh", .01 * document.documentElement.clientHeight + "px"), document.documentElement.style.setProperty("--lvh", "1vh")
               }
               return window.addEventListener("resize", e, !1), e(), () => {
                  window.removeEventListener("resize", e, !1)
               }
            }, [])
         }

         function ez(e, [t, r]) {
            return Math.min(r, Math.max(t, e))
         }
         r(2321), r(7702);
         let eN = "dismissableLayer.update",
            eL = (0, h.createContext)({
               layers: new Set,
               layersWithOutsidePointerEventsDisabled: new Set,
               branches: new Set
            }),
            eF = (0, h.forwardRef)((e, t) => {
               var r;
               let {
                  disableOutsidePointerEvents: i = !1,
                  onEscapeKeyDown: o,
                  onPointerDownOutside: a,
                  onFocusOutside: s,
                  onInteractOutside: l,
                  onDismiss: u,
                  ...c
               } = e, f = (0, h.useContext)(eL), [p, g] = (0, h.useState)(null), m = null !== (r = null == p ? void 0 : p.ownerDocument) && void 0 !== r ? r : null == globalThis ? void 0 : globalThis.document, [, y] = (0, h.useState)({}), _ = v(t, e => g(e)), b = Array.from(f.layers), [w] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), x = b.indexOf(w), P = p ? b.indexOf(p) : -1, E = f.layersWithOutsidePointerEventsDisabled.size > 0, k = P >= x, C = function (e, t = null == globalThis ? void 0 : globalThis.document) {
                  let r = T(e),
                     n = (0, h.useRef)(!1),
                     i = (0, h.useRef)(() => {});
                  return (0, h.useEffect)(() => {
                     let e = e => {
                           if (e.target && !n.current) {
                              let n = {
                                 originalEvent: e
                              };

                              function o() {
                                 eV("dismissableLayer.pointerDownOutside", r, n, {
                                    discrete: !0
                                 })
                              }
                              "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = o, t.addEventListener("click", i.current, {
                                 once: !0
                              })) : o()
                           } else t.removeEventListener("click", i.current);
                           n.current = !1
                        },
                        o = window.setTimeout(() => {
                           t.addEventListener("pointerdown", e)
                        }, 0);
                     return () => {
                        window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
                     }
                  }, [t, r]), {
                     onPointerDownCapture: () => n.current = !0
                  }
               }(e => {
                  let t = e.target,
                     r = [...f.branches].some(e => e.contains(t));
                  !k || r || (null == a || a(e), null == l || l(e), e.defaultPrevented || null == u || u())
               }, m), j = function (e, t = null == globalThis ? void 0 : globalThis.document) {
                  let r = T(e),
                     n = (0, h.useRef)(!1);
                  return (0, h.useEffect)(() => {
                     let e = e => {
                        e.target && !n.current && eV("dismissableLayer.focusOutside", r, {
                           originalEvent: e
                        }, {
                           discrete: !1
                        })
                     };
                     return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                  }, [t, r]), {
                     onFocusCapture: () => n.current = !0,
                     onBlurCapture: () => n.current = !1
                  }
               }(e => {
                  let t = e.target;
                  [...f.branches].some(e => e.contains(t)) || (null == s || s(e), null == l || l(e), e.defaultPrevented || null == u || u())
               }, m);
               return ! function (e, t = null == globalThis ? void 0 : globalThis.document) {
                  let r = T(e);
                  (0, h.useEffect)(() => {
                     let e = e => {
                        "Escape" === e.key && r(e)
                     };
                     return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e)
                  }, [r, t])
               }(e => {
                  P !== f.layers.size - 1 || (null == o || o(e), !e.defaultPrevented && u && (e.preventDefault(), u()))
               }, m), (0, h.useEffect)(() => {
                  if (p) return i && (0 === f.layersWithOutsidePointerEventsDisabled.size && (n = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), eB(), () => {
                     i && 1 === f.layersWithOutsidePointerEventsDisabled.size && (m.body.style.pointerEvents = n)
                  }
               }, [p, m, i, f]), (0, h.useEffect)(() => () => {
                  p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), eB())
               }, [p, f]), (0, h.useEffect)(() => {
                  let e = () => y({});
                  return document.addEventListener(eN, e), () => document.removeEventListener(eN, e)
               }, []), (0, h.createElement)(O.div, (0, d.Z)({}, c, {
                  ref: _,
                  style: {
                     pointerEvents: E ? k ? "auto" : "none" : void 0,
                     ...e.style
                  },
                  onFocusCapture: S(e.onFocusCapture, j.onFocusCapture),
                  onBlurCapture: S(e.onBlurCapture, j.onBlurCapture),
                  onPointerDownCapture: S(e.onPointerDownCapture, C.onPointerDownCapture)
               }))
            });

         function eB() {
            let e = new CustomEvent(eN);
            document.dispatchEvent(e)
         }

         function eV(e, t, r, {
            discrete: n
         }) {
            let i = r.originalEvent.target,
               o = new CustomEvent(e, {
                  bubbles: !1,
                  cancelable: !0,
                  detail: r
               });
            (t && i.addEventListener(e, t, {
               once: !0
            }), n) ? i && (0, E.flushSync)(() => i.dispatchEvent(o)): i.dispatchEvent(o)
         }
         let eH = 0;

         function eU() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
         }
         let eW = "focusScope.autoFocusOnMount",
            eq = "focusScope.autoFocusOnUnmount",
            eY = {
               bubbles: !1,
               cancelable: !0
            },
            eX = (0, h.forwardRef)((e, t) => {
               let {
                  loop: r = !1,
                  trapped: n = !1,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: o,
                  ...a
               } = e, [s, l] = (0, h.useState)(null), u = T(i), c = T(o), f = (0, h.useRef)(null), p = v(t, e => l(e)), g = (0, h.useRef)({
                  paused: !1,
                  pause() {
                     this.paused = !0
                  },
                  resume() {
                     this.paused = !1
                  }
               }).current;
               (0, h.useEffect)(() => {
                  if (n) {
                     function e(e) {
                        if (g.paused || !s) return;
                        let t = e.target;
                        s.contains(t) ? f.current = t : eG(f.current, {
                           select: !0
                        })
                     }

                     function t(e) {
                        if (g.paused || !s) return;
                        let t = e.relatedTarget;
                        null === t || s.contains(t) || eG(f.current, {
                           select: !0
                        })
                     }
                     document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                     let r = new MutationObserver(function (e) {
                        if (document.activeElement === document.body)
                           for (let t of e) t.removedNodes.length > 0 && eG(s)
                     });
                     return s && r.observe(s, {
                        childList: !0,
                        subtree: !0
                     }), () => {
                        document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                     }
                  }
               }, [n, s, g.paused]), (0, h.useEffect)(() => {
                  if (s) {
                     eK.add(g);
                     let e = document.activeElement;
                     if (!s.contains(e)) {
                        let t = new CustomEvent(eW, eY);
                        s.addEventListener(eW, u), s.dispatchEvent(t), t.defaultPrevented || (function (e, {
                           select: t = !1
                        } = {}) {
                           let r = document.activeElement;
                           for (let n of e)
                              if (eG(n, {
                                    select: t
                                 }), document.activeElement !== r) return
                        }(e$(s).filter(e => "A" !== e.tagName), {
                           select: !0
                        }), document.activeElement === e && eG(s))
                     }
                     return () => {
                        s.removeEventListener(eW, u), setTimeout(() => {
                           let t = new CustomEvent(eq, eY);
                           s.addEventListener(eq, c), s.dispatchEvent(t), t.defaultPrevented || eG(null != e ? e : document.body, {
                              select: !0
                           }), s.removeEventListener(eq, c), eK.remove(g)
                        }, 0)
                     }
                  }
               }, [s, u, c, g]);
               let m = (0, h.useCallback)(e => {
                  if (!r && !n || g.paused) return;
                  let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                     i = document.activeElement;
                  if (t && i) {
                     let t = e.currentTarget,
                        [n, o] = function (e) {
                           let t = e$(e);
                           return [eZ(t, e), eZ(t.reverse(), e)]
                        }(t);
                     n && o ? e.shiftKey || i !== o ? e.shiftKey && i === n && (e.preventDefault(), r && eG(o, {
                        select: !0
                     })) : (e.preventDefault(), r && eG(n, {
                        select: !0
                     })) : i === t && e.preventDefault()
                  }
               }, [r, n, g.paused]);
               return (0, h.createElement)(O.div, (0, d.Z)({
                  tabIndex: -1
               }, a, {
                  ref: p,
                  onKeyDown: m
               }))
            });

         function e$(e) {
            let t = [],
               r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                  acceptNode: e => {
                     let t = "INPUT" === e.tagName && "hidden" === e.type;
                     return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                  }
               });
            for (; r.nextNode();) t.push(r.currentNode);
            return t
         }

         function eZ(e, t) {
            for (let r of e)
               if (! function (e, {
                     upTo: t
                  }) {
                     if ("hidden" === getComputedStyle(e).visibility) return !0;
                     for (; e && (void 0 === t || e !== t);) {
                        if ("none" === getComputedStyle(e).display) return !0;
                        e = e.parentElement
                     }
                     return !1
                  }(r, {
                     upTo: t
                  })) return r
         }

         function eG(e, {
            select: t = !1
         } = {}) {
            if (e && e.focus) {
               var r;
               let n = document.activeElement;
               e.focus({
                  preventScroll: !0
               }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
            }
         }
         let eK = (i = [], {
            add(e) {
               let t = i[0];
               e !== t && (null == t || t.pause()), (i = eJ(i, e)).unshift(e)
            },
            remove(e) {
               var t;
               null === (t = (i = eJ(i, e))[0]) || void 0 === t || t.resume()
            }
         });

         function eJ(e, t) {
            let r = [...e],
               n = r.indexOf(t);
            return -1 !== n && r.splice(n, 1), r
         }
         let eQ = ["top", "right", "bottom", "left"],
            e0 = Math.min,
            e1 = Math.max,
            e2 = Math.round,
            e5 = Math.floor,
            e3 = e => ({
               x: e,
               y: e
            }),
            e8 = {
               left: "right",
               right: "left",
               bottom: "top",
               top: "bottom"
            },
            e9 = {
               start: "end",
               end: "start"
            };

         function e6(e, t) {
            return "function" == typeof e ? e(t) : e
         }

         function e4(e) {
            return e.split("-")[0]
         }

         function e7(e) {
            return e.split("-")[1]
         }

         function te(e) {
            return "x" === e ? "y" : "x"
         }

         function tt(e) {
            return "y" === e ? "height" : "width"
         }

         function tr(e) {
            return ["top", "bottom"].includes(e4(e)) ? "y" : "x"
         }

         function tn(e) {
            return e.replace(/start|end/g, e => e9[e])
         }

         function ti(e) {
            return e.replace(/left|right|bottom|top/g, e => e8[e])
         }

         function to(e) {
            return "number" != typeof e ? {
               top: 0,
               right: 0,
               bottom: 0,
               left: 0,
               ...e
            } : {
               top: e,
               right: e,
               bottom: e,
               left: e
            }
         }

         function ta(e) {
            return {
               ...e,
               top: e.y,
               left: e.x,
               right: e.x + e.width,
               bottom: e.y + e.height
            }
         }

         function ts(e, t, r) {
            let n, {
                  reference: i,
                  floating: o
               } = e,
               a = tr(t),
               s = te(tr(t)),
               l = tt(s),
               u = e4(t),
               c = "y" === a,
               f = i.x + i.width / 2 - o.width / 2,
               d = i.y + i.height / 2 - o.height / 2,
               h = i[l] / 2 - o[l] / 2;
            switch (u) {
               case "top":
                  n = {
                     x: f,
                     y: i.y - o.height
                  };
                  break;
               case "bottom":
                  n = {
                     x: f,
                     y: i.y + i.height
                  };
                  break;
               case "right":
                  n = {
                     x: i.x + i.width,
                     y: d
                  };
                  break;
               case "left":
                  n = {
                     x: i.x - o.width,
                     y: d
                  };
                  break;
               default:
                  n = {
                     x: i.x,
                     y: i.y
                  }
            }
            switch (e7(t)) {
               case "start":
                  n[s] -= h * (r && c ? -1 : 1);
                  break;
               case "end":
                  n[s] += h * (r && c ? -1 : 1)
            }
            return n
         }
         let tl = async (e, t, r) => {
            let {
               placement: n = "bottom",
               strategy: i = "absolute",
               middleware: o = [],
               platform: a
            } = r, s = o.filter(Boolean), l = await (null == a.isRTL ? void 0 : a.isRTL(t)), u = await a.getElementRects({
               reference: e,
               floating: t,
               strategy: i
            }), {
               x: c,
               y: f
            } = ts(u, n, l), d = n, h = {}, p = 0;
            for (let r = 0; r < s.length; r++) {
               let {
                  name: o,
                  fn: g
               } = s[r], {
                  x: m,
                  y: v,
                  data: y,
                  reset: _
               } = await g({
                  x: c,
                  y: f,
                  initialPlacement: n,
                  placement: d,
                  strategy: i,
                  middlewareData: h,
                  rects: u,
                  platform: a,
                  elements: {
                     reference: e,
                     floating: t
                  }
               });
               c = null != m ? m : c, f = null != v ? v : f, h = {
                  ...h,
                  [o]: {
                     ...h[o],
                     ...y
                  }
               }, _ && p <= 50 && (p++, "object" == typeof _ && (_.placement && (d = _.placement), _.rects && (u = !0 === _.rects ? await a.getElementRects({
                  reference: e,
                  floating: t,
                  strategy: i
               }) : _.rects), {
                  x: c,
                  y: f
               } = ts(u, d, l)), r = -1)
            }
            return {
               x: c,
               y: f,
               placement: d,
               strategy: i,
               middlewareData: h
            }
         };
         async function tu(e, t) {
            var r;
            void 0 === t && (t = {});
            let {
               x: n,
               y: i,
               platform: o,
               rects: a,
               elements: s,
               strategy: l
            } = e, {
               boundary: u = "clippingAncestors",
               rootBoundary: c = "viewport",
               elementContext: f = "floating",
               altBoundary: d = !1,
               padding: h = 0
            } = e6(t, e), p = to(h), g = s[d ? "floating" === f ? "reference" : "floating" : f], m = ta(await o.getClippingRect({
               element: null == (r = await (null == o.isElement ? void 0 : o.isElement(g))) || r ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(s.floating)),
               boundary: u,
               rootBoundary: c,
               strategy: l
            })), v = "floating" === f ? {
               ...a.floating,
               x: n,
               y: i
            } : a.reference, y = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(s.floating)), _ = await (null == o.isElement ? void 0 : o.isElement(y)) && await (null == o.getScale ? void 0 : o.getScale(y)) || {
               x: 1,
               y: 1
            }, b = ta(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
               elements: s,
               rect: v,
               offsetParent: y,
               strategy: l
            }) : v);
            return {
               top: (m.top - b.top + p.top) / _.y,
               bottom: (b.bottom - m.bottom + p.bottom) / _.y,
               left: (m.left - b.left + p.left) / _.x,
               right: (b.right - m.right + p.right) / _.x
            }
         }

         function tc(e, t) {
            return {
               top: e.top - t.height,
               right: e.right - t.width,
               bottom: e.bottom - t.height,
               left: e.left - t.width
            }
         }

         function tf(e) {
            return eQ.some(t => e[t] >= 0)
         }
         async function td(e, t) {
            let {
               placement: r,
               platform: n,
               elements: i
            } = e, o = await (null == n.isRTL ? void 0 : n.isRTL(i.floating)), a = e4(r), s = e7(r), l = "y" === tr(r), u = ["left", "top"].includes(a) ? -1 : 1, c = o && l ? -1 : 1, f = e6(t, e), {
               mainAxis: d,
               crossAxis: h,
               alignmentAxis: p
            } = "number" == typeof f ? {
               mainAxis: f,
               crossAxis: 0,
               alignmentAxis: null
            } : {
               mainAxis: 0,
               crossAxis: 0,
               alignmentAxis: null,
               ...f
            };
            return s && "number" == typeof p && (h = "end" === s ? -1 * p : p), l ? {
               x: h * c,
               y: d * u
            } : {
               x: d * u,
               y: h * c
            }
         }

         function th(e) {
            return tm(e) ? (e.nodeName || "").toLowerCase() : "#document"
         }

         function tp(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
         }

         function tg(e) {
            var t;
            return null == (t = (tm(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
         }

         function tm(e) {
            return e instanceof Node || e instanceof tp(e).Node
         }

         function tv(e) {
            return e instanceof Element || e instanceof tp(e).Element
         }

         function ty(e) {
            return e instanceof HTMLElement || e instanceof tp(e).HTMLElement
         }

         function t_(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof tp(e).ShadowRoot)
         }

         function tb(e) {
            let {
               overflow: t,
               overflowX: r,
               overflowY: n,
               display: i
            } = tT(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i)
         }

         function tw(e) {
            let t = tx(),
               r = tT(e);
            return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
         }

         function tx() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
         }

         function tS(e) {
            return ["html", "body", "#document"].includes(th(e))
         }

         function tT(e) {
            return tp(e).getComputedStyle(e)
         }

         function tP(e) {
            return tv(e) ? {
               scrollLeft: e.scrollLeft,
               scrollTop: e.scrollTop
            } : {
               scrollLeft: e.pageXOffset,
               scrollTop: e.pageYOffset
            }
         }

         function tE(e) {
            if ("html" === th(e)) return e;
            let t = e.assignedSlot || e.parentNode || t_(e) && e.host || tg(e);
            return t_(t) ? t.host : t
         }

         function tO(e, t, r) {
            var n;
            void 0 === t && (t = []), void 0 === r && (r = !0);
            let i = function e(t) {
                  let r = tE(t);
                  return tS(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : ty(r) && tb(r) ? r : e(r)
               }(e),
               o = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
               a = tp(i);
            return o ? t.concat(a, a.visualViewport || [], tb(i) ? i : [], a.frameElement && r ? tO(a.frameElement) : []) : t.concat(i, tO(i, [], r))
         }

         function tk(e) {
            let t = tT(e),
               r = parseFloat(t.width) || 0,
               n = parseFloat(t.height) || 0,
               i = ty(e),
               o = i ? e.offsetWidth : r,
               a = i ? e.offsetHeight : n,
               s = e2(r) !== o || e2(n) !== a;
            return s && (r = o, n = a), {
               width: r,
               height: n,
               $: s
            }
         }

         function tC(e) {
            return tv(e) ? e : e.contextElement
         }

         function tj(e) {
            let t = tC(e);
            if (!ty(t)) return e3(1);
            let r = t.getBoundingClientRect(),
               {
                  width: n,
                  height: i,
                  $: o
               } = tk(t),
               a = (o ? e2(r.width) : r.width) / n,
               s = (o ? e2(r.height) : r.height) / i;
            return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
               x: a,
               y: s
            }
         }
         let tA = e3(0);

         function tM(e) {
            let t = tp(e);
            return tx() && t.visualViewport ? {
               x: t.visualViewport.offsetLeft,
               y: t.visualViewport.offsetTop
            } : tA
         }

         function tD(e, t, r, n) {
            var i;
            void 0 === t && (t = !1), void 0 === r && (r = !1);
            let o = e.getBoundingClientRect(),
               a = tC(e),
               s = e3(1);
            t && (n ? tv(n) && (s = tj(n)) : s = tj(e));
            let l = (void 0 === (i = r) && (i = !1), n && (!i || n === tp(a)) && i) ? tM(a) : e3(0),
               u = (o.left + l.x) / s.x,
               c = (o.top + l.y) / s.y,
               f = o.width / s.x,
               d = o.height / s.y;
            if (a) {
               let e = tp(a),
                  t = n && tv(n) ? tp(n) : n,
                  r = e,
                  i = r.frameElement;
               for (; i && n && t !== r;) {
                  let e = tj(i),
                     t = i.getBoundingClientRect(),
                     n = tT(i),
                     o = t.left + (i.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                     a = t.top + (i.clientTop + parseFloat(n.paddingTop)) * e.y;
                  u *= e.x, c *= e.y, f *= e.x, d *= e.y, u += o, c += a, i = (r = tp(i)).frameElement
               }
            }
            return ta({
               width: f,
               height: d,
               x: u,
               y: c
            })
         }
         let tR = [":popover-open", ":modal"];

         function tI(e) {
            return tR.some(t => {
               try {
                  return e.matches(t)
               } catch (e) {
                  return !1
               }
            })
         }

         function tz(e) {
            return tD(tg(e)).left + tP(e).scrollLeft
         }

         function tN(e, t, r) {
            let n;
            if ("viewport" === t) n = function (e, t) {
               let r = tp(e),
                  n = tg(e),
                  i = r.visualViewport,
                  o = n.clientWidth,
                  a = n.clientHeight,
                  s = 0,
                  l = 0;
               if (i) {
                  o = i.width, a = i.height;
                  let e = tx();
                  (!e || e && "fixed" === t) && (s = i.offsetLeft, l = i.offsetTop)
               }
               return {
                  width: o,
                  height: a,
                  x: s,
                  y: l
               }
            }(e, r);
            else if ("document" === t) n = function (e) {
               let t = tg(e),
                  r = tP(e),
                  n = e.ownerDocument.body,
                  i = e1(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                  o = e1(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
                  a = -r.scrollLeft + tz(e),
                  s = -r.scrollTop;
               return "rtl" === tT(n).direction && (a += e1(t.clientWidth, n.clientWidth) - i), {
                  width: i,
                  height: o,
                  x: a,
                  y: s
               }
            }(tg(e));
            else if (tv(t)) n = function (e, t) {
               let r = tD(e, !0, "fixed" === t),
                  n = r.top + e.clientTop,
                  i = r.left + e.clientLeft,
                  o = ty(e) ? tj(e) : e3(1),
                  a = e.clientWidth * o.x;
               return {
                  width: a,
                  height: e.clientHeight * o.y,
                  x: i * o.x,
                  y: n * o.y
               }
            }(t, r);
            else {
               let r = tM(e);
               n = {
                  ...t,
                  x: t.x - r.x,
                  y: t.y - r.y
               }
            }
            return ta(n)
         }

         function tL(e, t) {
            return ty(e) && "fixed" !== tT(e).position ? t ? t(e) : e.offsetParent : null
         }

         function tF(e, t) {
            let r = tp(e);
            if (!ty(e) || tI(e)) return r;
            let n = tL(e, t);
            for (; n && ["table", "td", "th"].includes(th(n)) && "static" === tT(n).position;) n = tL(n, t);
            return n && ("html" === th(n) || "body" === th(n) && "static" === tT(n).position && !tw(n)) ? r : n || function (e) {
               let t = tE(e);
               for (; ty(t) && !tS(t);) {
                  if (tw(t)) return t;
                  t = tE(t)
               }
               return null
            }(e) || r
         }
         let tB = async function (e) {
            let t = this.getOffsetParent || tF,
               r = this.getDimensions;
            return {
               reference: function (e, t, r) {
                  let n = ty(t),
                     i = tg(t),
                     o = "fixed" === r,
                     a = tD(e, !0, o, t),
                     s = {
                        scrollLeft: 0,
                        scrollTop: 0
                     },
                     l = e3(0);
                  if (n || !n && !o) {
                     if (("body" !== th(t) || tb(i)) && (s = tP(t)), n) {
                        let e = tD(t, !0, o, t);
                        l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
                     } else i && (l.x = tz(i))
                  }
                  return {
                     x: a.left + s.scrollLeft - l.x,
                     y: a.top + s.scrollTop - l.y,
                     width: a.width,
                     height: a.height
                  }
               }(e.reference, await t(e.floating), e.strategy),
               floating: {
                  x: 0,
                  y: 0,
                  ...await r(e.floating)
               }
            }
         }, tV = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
               let {
                  elements: t,
                  rect: r,
                  offsetParent: n,
                  strategy: i
               } = e, o = "fixed" === i, a = tg(n), s = !!t && tI(t.floating);
               if (n === a || s && o) return r;
               let l = {
                     scrollLeft: 0,
                     scrollTop: 0
                  },
                  u = e3(1),
                  c = e3(0),
                  f = ty(n);
               if ((f || !f && !o) && (("body" !== th(n) || tb(a)) && (l = tP(n)), ty(n))) {
                  let e = tD(n);
                  u = tj(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop
               }
               return {
                  width: r.width * u.x,
                  height: r.height * u.y,
                  x: r.x * u.x - l.scrollLeft * u.x + c.x,
                  y: r.y * u.y - l.scrollTop * u.y + c.y
               }
            },
            getDocumentElement: tg,
            getClippingRect: function (e) {
               let {
                  element: t,
                  boundary: r,
                  rootBoundary: n,
                  strategy: i
               } = e, o = [..."clippingAncestors" === r ? function (e, t) {
                  let r = t.get(e);
                  if (r) return r;
                  let n = tO(e, [], !1).filter(e => tv(e) && "body" !== th(e)),
                     i = null,
                     o = "fixed" === tT(e).position,
                     a = o ? tE(e) : e;
                  for (; tv(a) && !tS(a);) {
                     let t = tT(a),
                        r = tw(a);
                     r || "fixed" !== t.position || (i = null), (o ? !r && !i : !r && "static" === t.position && !!i && ["absolute", "fixed"].includes(i.position) || tb(a) && !r && function e(t, r) {
                        let n = tE(t);
                        return !(n === r || !tv(n) || tS(n)) && ("fixed" === tT(n).position || e(n, r))
                     }(e, a)) ? n = n.filter(e => e !== a) : i = t, a = tE(a)
                  }
                  return t.set(e, n), n
               }(t, this._c) : [].concat(r), n], a = o[0], s = o.reduce((e, r) => {
                  let n = tN(t, r, i);
                  return e.top = e1(n.top, e.top), e.right = e0(n.right, e.right), e.bottom = e0(n.bottom, e.bottom), e.left = e1(n.left, e.left), e
               }, tN(t, a, i));
               return {
                  width: s.right - s.left,
                  height: s.bottom - s.top,
                  x: s.left,
                  y: s.top
               }
            },
            getOffsetParent: tF,
            getElementRects: tB,
            getClientRects: function (e) {
               return Array.from(e.getClientRects())
            },
            getDimensions: function (e) {
               let {
                  width: t,
                  height: r
               } = tk(e);
               return {
                  width: t,
                  height: r
               }
            },
            getScale: tj,
            isElement: tv,
            isRTL: function (e) {
               return "rtl" === tT(e).direction
            }
         }, tH = e => ({
            name: "arrow",
            options: e,
            async fn(t) {
               let {
                  x: r,
                  y: n,
                  placement: i,
                  rects: o,
                  platform: a,
                  elements: s,
                  middlewareData: l
               } = t, {
                  element: u,
                  padding: c = 0
               } = e6(e, t) || {};
               if (null == u) return {};
               let f = to(c),
                  d = {
                     x: r,
                     y: n
                  },
                  h = te(tr(i)),
                  p = tt(h),
                  g = await a.getDimensions(u),
                  m = "y" === h,
                  v = m ? "clientHeight" : "clientWidth",
                  y = o.reference[p] + o.reference[h] - d[h] - o.floating[p],
                  _ = d[h] - o.reference[h],
                  b = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(u)),
                  w = b ? b[v] : 0;
               w && await (null == a.isElement ? void 0 : a.isElement(b)) || (w = s.floating[v] || o.floating[p]);
               let x = w / 2 - g[p] / 2 - 1,
                  S = e0(f[m ? "top" : "left"], x),
                  T = e0(f[m ? "bottom" : "right"], x),
                  P = w - g[p] - T,
                  E = w / 2 - g[p] / 2 + (y / 2 - _ / 2),
                  O = e1(S, e0(E, P)),
                  k = !l.arrow && null != e7(i) && E !== O && o.reference[p] / 2 - (E < S ? S : T) - g[p] / 2 < 0,
                  C = k ? E < S ? E - S : E - P : 0;
               return {
                  [h]: d[h] + C,
                  data: {
                     [h]: O,
                     centerOffset: E - O - C,
                     ...k && {
                        alignmentOffset: C
                     }
                  },
                  reset: k
               }
            }
         }), tU = (e, t, r) => {
            let n = new Map,
               i = {
                  platform: tV,
                  ...r
               },
               o = {
                  ...i.platform,
                  _c: n
               };
            return tl(e, t, {
               ...i,
               platform: o
            })
         }, tW = e => ({
            name: "arrow",
            options: e,
            fn(t) {
               let {
                  element: r,
                  padding: n
               } = "function" == typeof e ? e(t) : e;
               return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? tH({
                  element: r.current,
                  padding: n
               }).fn(t) : {} : r ? tH({
                  element: r,
                  padding: n
               }).fn(t) : {}
            }
         });
         var tq = "undefined" != typeof document ? h.useLayoutEffect : h.useEffect;

         function tY(e, t) {
            let r, n, i;
            if (e === t) return !0;
            if (typeof e != typeof t) return !1;
            if ("function" == typeof e && e.toString() === t.toString()) return !0;
            if (e && t && "object" == typeof e) {
               if (Array.isArray(e)) {
                  if ((r = e.length) !== t.length) return !1;
                  for (n = r; 0 != n--;)
                     if (!tY(e[n], t[n])) return !1;
                  return !0
               }
               if ((r = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
               for (n = r; 0 != n--;)
                  if (!({}).hasOwnProperty.call(t, i[n])) return !1;
               for (n = r; 0 != n--;) {
                  let r = i[n];
                  if (("_owner" !== r || !e.$$typeof) && !tY(e[r], t[r])) return !1
               }
               return !0
            }
            return e != e && t != t
         }

         function tX(e) {
            return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
         }

         function t$(e, t) {
            let r = tX(e);
            return Math.round(t * r) / r
         }

         function tZ(e) {
            let t = h.useRef(e);
            return tq(() => {
               t.current = e
            }), t
         }
         let tG = (0, h.forwardRef)((e, t) => {
               let {
                  children: r,
                  width: n = 10,
                  height: i = 5,
                  ...o
               } = e;
               return (0, h.createElement)(O.svg, (0, d.Z)({}, o, {
                  ref: t,
                  width: n,
                  height: i,
                  viewBox: "0 0 30 10",
                  preserveAspectRatio: "none"
               }), e.asChild ? r : (0, h.createElement)("polygon", {
                  points: "0,0 30,0 15,10"
               }))
            }),
            tK = "Popper",
            [tJ, tQ] = g(tK),
            [t0, t1] = tJ(tK),
            t2 = (0, h.forwardRef)((e, t) => {
               let {
                  __scopePopper: r,
                  virtualRef: n,
                  ...i
               } = e, o = t1("PopperAnchor", r), a = (0, h.useRef)(null), s = v(t, a);
               return (0, h.useEffect)(() => {
                  o.onAnchorChange((null == n ? void 0 : n.current) || a.current)
               }), n ? null : (0, h.createElement)(O.div, (0, d.Z)({}, i, {
                  ref: s
               }))
            }),
            t5 = "PopperContent",
            [t3, t8] = tJ(t5),
            t9 = (0, h.forwardRef)((e, t) => {
               var r, n, i, o, a, s, l, u, c, f, p, g, m, y;
               let {
                  __scopePopper: _,
                  side: b = "bottom",
                  sideOffset: w = 0,
                  align: x = "center",
                  alignOffset: S = 0,
                  arrowPadding: P = 0,
                  avoidCollisions: C = !0,
                  collisionBoundary: j = [],
                  collisionPadding: A = 0,
                  sticky: M = "partial",
                  hideWhenDetached: D = !1,
                  updatePositionStrategy: R = "optimized",
                  onPlaced: I,
                  ...z
               } = e, N = t1(t5, _), [L, F] = (0, h.useState)(null), B = v(t, e => F(e)), [V, H] = (0, h.useState)(null), U = function (e) {
                  let [t, r] = (0, h.useState)(void 0);
                  return k(() => {
                     if (e) {
                        r({
                           width: e.offsetWidth,
                           height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                           let n, i;
                           if (!Array.isArray(t) || !t.length) return;
                           let o = t[0];
                           if ("borderBoxSize" in o) {
                              let e = o.borderBoxSize,
                                 t = Array.isArray(e) ? e[0] : e;
                              n = t.inlineSize, i = t.blockSize
                           } else n = e.offsetWidth, i = e.offsetHeight;
                           r({
                              width: n,
                              height: i
                           })
                        });
                        return t.observe(e, {
                           box: "border-box"
                        }), () => t.unobserve(e)
                     }
                     r(void 0)
                  }, [e]), t
               }(V), W = null !== (r = null == U ? void 0 : U.width) && void 0 !== r ? r : 0, q = null !== (n = null == U ? void 0 : U.height) && void 0 !== n ? n : 0, Y = "number" == typeof A ? A : {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  ...A
               }, X = Array.isArray(j) ? j : [j], $ = X.length > 0, Z = {
                  padding: Y,
                  boundary: X.filter(t4),
                  altBoundary: $
               }, {
                  refs: G,
                  floatingStyles: K,
                  placement: J,
                  isPositioned: Q,
                  middlewareData: ee
               } = function (e) {
                  void 0 === e && (e = {});
                  let {
                     placement: t = "bottom",
                     strategy: r = "absolute",
                     middleware: n = [],
                     platform: i,
                     elements: {
                        reference: o,
                        floating: a
                     } = {},
                     transform: s = !0,
                     whileElementsMounted: l,
                     open: u
                  } = e, [c, f] = h.useState({
                     x: 0,
                     y: 0,
                     strategy: r,
                     placement: t,
                     middlewareData: {},
                     isPositioned: !1
                  }), [d, p] = h.useState(n);
                  tY(d, n) || p(n);
                  let [g, m] = h.useState(null), [v, y] = h.useState(null), _ = h.useCallback(e => {
                     e !== S.current && (S.current = e, m(e))
                  }, []), b = h.useCallback(e => {
                     e !== T.current && (T.current = e, y(e))
                  }, []), w = o || g, x = a || v, S = h.useRef(null), T = h.useRef(null), P = h.useRef(c), O = null != l, k = tZ(l), C = tZ(i), j = h.useCallback(() => {
                     if (!S.current || !T.current) return;
                     let e = {
                        placement: t,
                        strategy: r,
                        middleware: d
                     };
                     C.current && (e.platform = C.current), tU(S.current, T.current, e).then(e => {
                        let t = {
                           ...e,
                           isPositioned: !0
                        };
                        A.current && !tY(P.current, t) && (P.current = t, E.flushSync(() => {
                           f(t)
                        }))
                     })
                  }, [d, t, r, C]);
                  tq(() => {
                     !1 === u && P.current.isPositioned && (P.current.isPositioned = !1, f(e => ({
                        ...e,
                        isPositioned: !1
                     })))
                  }, [u]);
                  let A = h.useRef(!1);
                  tq(() => (A.current = !0, () => {
                     A.current = !1
                  }), []), tq(() => {
                     if (w && (S.current = w), x && (T.current = x), w && x) {
                        if (k.current) return k.current(w, x, j);
                        j()
                     }
                  }, [w, x, j, k, O]);
                  let M = h.useMemo(() => ({
                        reference: S,
                        floating: T,
                        setReference: _,
                        setFloating: b
                     }), [_, b]),
                     D = h.useMemo(() => ({
                        reference: w,
                        floating: x
                     }), [w, x]),
                     R = h.useMemo(() => {
                        let e = {
                           position: r,
                           left: 0,
                           top: 0
                        };
                        if (!D.floating) return e;
                        let t = t$(D.floating, c.x),
                           n = t$(D.floating, c.y);
                        return s ? {
                           ...e,
                           transform: "translate(" + t + "px, " + n + "px)",
                           ...tX(D.floating) >= 1.5 && {
                              willChange: "transform"
                           }
                        } : {
                           position: r,
                           left: t,
                           top: n
                        }
                     }, [r, s, D.floating, c.x, c.y]);
                  return h.useMemo(() => ({
                     ...c,
                     update: j,
                     refs: M,
                     elements: D,
                     floatingStyles: R
                  }), [c, j, M, D, R])
               }({
                  strategy: "fixed",
                  placement: b + ("center" !== x ? "-" + x : ""),
                  whileElementsMounted: (...e) => (function (e, t, r, n) {
                     let i;
                     void 0 === n && (n = {});
                     let {
                        ancestorScroll: o = !0,
                        ancestorResize: a = !0,
                        elementResize: s = "function" == typeof ResizeObserver,
                        layoutShift: l = "function" == typeof IntersectionObserver,
                        animationFrame: u = !1
                     } = n, c = tC(e), f = o || a ? [...c ? tO(c) : [], ...tO(t)] : [];
                     f.forEach(e => {
                        o && e.addEventListener("scroll", r, {
                           passive: !0
                        }), a && e.addEventListener("resize", r)
                     });
                     let d = c && l ? function (e, t) {
                           let r, n = null,
                              i = tg(e);

                           function o() {
                              var e;
                              clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                           }
                           return ! function a(s, l) {
                              void 0 === s && (s = !1), void 0 === l && (l = 1), o();
                              let {
                                 left: u,
                                 top: c,
                                 width: f,
                                 height: d
                              } = e.getBoundingClientRect();
                              if (s || t(), !f || !d) return;
                              let h = e5(c),
                                 p = e5(i.clientWidth - (u + f)),
                                 g = {
                                    rootMargin: -h + "px " + -p + "px " + -e5(i.clientHeight - (c + d)) + "px " + -e5(u) + "px",
                                    threshold: e1(0, e0(1, l)) || 1
                                 },
                                 m = !0;

                              function v(e) {
                                 let t = e[0].intersectionRatio;
                                 if (t !== l) {
                                    if (!m) return a();
                                    t ? a(!1, t) : r = setTimeout(() => {
                                       a(!1, 1e-7)
                                    }, 100)
                                 }
                                 m = !1
                              }
                              try {
                                 n = new IntersectionObserver(v, {
                                    ...g,
                                    root: i.ownerDocument
                                 })
                              } catch (e) {
                                 n = new IntersectionObserver(v, g)
                              }
                              n.observe(e)
                           }(!0), o
                        }(c, r) : null,
                        h = -1,
                        p = null;
                     s && (p = new ResizeObserver(e => {
                        let [n] = e;
                        n && n.target === c && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
                           var e;
                           null == (e = p) || e.observe(t)
                        })), r()
                     }), c && !u && p.observe(c), p.observe(t));
                     let g = u ? tD(e) : null;
                     return u && function t() {
                        let n = tD(e);
                        g && (n.x !== g.x || n.y !== g.y || n.width !== g.width || n.height !== g.height) && r(), g = n, i = requestAnimationFrame(t)
                     }(), r(), () => {
                        var e;
                        f.forEach(e => {
                           o && e.removeEventListener("scroll", r), a && e.removeEventListener("resize", r)
                        }), null == d || d(), null == (e = p) || e.disconnect(), p = null, u && cancelAnimationFrame(i)
                     }
                  })(...e, {
                     animationFrame: "always" === R
                  }),
                  elements: {
                     reference: N.anchor
                  },
                  middleware: [{
                     name: "offset",
                     options: c = {
                        mainAxis: w + q,
                        alignmentAxis: S
                     },
                     async fn(e) {
                        var t, r;
                        let {
                           x: n,
                           y: i,
                           placement: o,
                           middlewareData: a
                        } = e, s = await td(e, c);
                        return o === (null == (t = a.offset) ? void 0 : t.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                           x: n + s.x,
                           y: i + s.y,
                           data: {
                              ...s,
                              placement: o
                           }
                        }
                     }
                  }, C && {
                     name: "shift",
                     options: p = {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter: "partial" === M ? (void 0 === f && (f = {}), {
                           options: f,
                           fn(e) {
                              let {
                                 x: t,
                                 y: r,
                                 placement: n,
                                 rects: i,
                                 middlewareData: o
                              } = e, {
                                 offset: a = 0,
                                 mainAxis: s = !0,
                                 crossAxis: l = !0
                              } = e6(f, e), u = {
                                 x: t,
                                 y: r
                              }, c = tr(n), d = te(c), h = u[d], p = u[c], g = e6(a, e), m = "number" == typeof g ? {
                                 mainAxis: g,
                                 crossAxis: 0
                              } : {
                                 mainAxis: 0,
                                 crossAxis: 0,
                                 ...g
                              };
                              if (s) {
                                 let e = "y" === d ? "height" : "width",
                                    t = i.reference[d] - i.floating[e] + m.mainAxis,
                                    r = i.reference[d] + i.reference[e] - m.mainAxis;
                                 h < t ? h = t : h > r && (h = r)
                              }
                              if (l) {
                                 var v, y;
                                 let e = "y" === d ? "width" : "height",
                                    t = ["top", "left"].includes(e4(n)),
                                    r = i.reference[c] - i.floating[e] + (t && (null == (v = o.offset) ? void 0 : v[c]) || 0) + (t ? 0 : m.crossAxis),
                                    a = i.reference[c] + i.reference[e] + (t ? 0 : (null == (y = o.offset) ? void 0 : y[c]) || 0) - (t ? m.crossAxis : 0);
                                 p < r ? p = r : p > a && (p = a)
                              }
                              return {
                                 [d]: h,
                                 [c]: p
                              }
                           }
                        }) : void 0,
                        ...Z
                     },
                     async fn(e) {
                        let {
                           x: t,
                           y: r,
                           placement: n
                        } = e, {
                           mainAxis: i = !0,
                           crossAxis: o = !1,
                           limiter: a = {
                              fn: e => {
                                 let {
                                    x: t,
                                    y: r
                                 } = e;
                                 return {
                                    x: t,
                                    y: r
                                 }
                              }
                           },
                           ...s
                        } = e6(p, e), l = {
                           x: t,
                           y: r
                        }, u = await tu(e, s), c = tr(e4(n)), f = te(c), d = l[f], h = l[c];
                        if (i) {
                           let e = "y" === f ? "top" : "left",
                              t = "y" === f ? "bottom" : "right",
                              r = d + u[e],
                              n = d - u[t];
                           d = e1(r, e0(d, n))
                        }
                        if (o) {
                           let e = "y" === c ? "top" : "left",
                              t = "y" === c ? "bottom" : "right",
                              r = h + u[e],
                              n = h - u[t];
                           h = e1(r, e0(h, n))
                        }
                        let g = a.fn({
                           ...e,
                           [f]: d,
                           [c]: h
                        });
                        return {
                           ...g,
                           data: {
                              x: g.x - t,
                              y: g.y - r
                           }
                        }
                     }
                  }, C && {
                     name: "flip",
                     options: g = {
                        ...Z
                     },
                     async fn(e) {
                        var t, r, n, i, o;
                        let {
                           placement: a,
                           middlewareData: s,
                           rects: l,
                           initialPlacement: u,
                           platform: c,
                           elements: f
                        } = e, {
                           mainAxis: d = !0,
                           crossAxis: h = !0,
                           fallbackPlacements: p,
                           fallbackStrategy: m = "bestFit",
                           fallbackAxisSideDirection: v = "none",
                           flipAlignment: y = !0,
                           ..._
                        } = e6(g, e);
                        if (null != (t = s.arrow) && t.alignmentOffset) return {};
                        let b = e4(a),
                           w = e4(u) === u,
                           x = await (null == c.isRTL ? void 0 : c.isRTL(f.floating)),
                           S = p || (w || !y ? [ti(u)] : function (e) {
                              let t = ti(e);
                              return [tn(e), t, tn(t)]
                           }(u));
                        p || "none" === v || S.push(... function (e, t, r, n) {
                           let i = e7(e),
                              o = function (e, t, r) {
                                 let n = ["left", "right"],
                                    i = ["right", "left"];
                                 switch (e) {
                                    case "top":
                                    case "bottom":
                                       if (r) return t ? i : n;
                                       return t ? n : i;
                                    case "left":
                                    case "right":
                                       return t ? ["top", "bottom"] : ["bottom", "top"];
                                    default:
                                       return []
                                 }
                              }(e4(e), "start" === r, n);
                           return i && (o = o.map(e => e + "-" + i), t && (o = o.concat(o.map(tn)))), o
                        }(u, y, v, x));
                        let T = [u, ...S],
                           P = await tu(e, _),
                           E = [],
                           O = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                        if (d && E.push(P[b]), h) {
                           let e = function (e, t, r) {
                              void 0 === r && (r = !1);
                              let n = e7(e),
                                 i = te(tr(e)),
                                 o = tt(i),
                                 a = "x" === i ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                              return t.reference[o] > t.floating[o] && (a = ti(a)), [a, ti(a)]
                           }(a, l, x);
                           E.push(P[e[0]], P[e[1]])
                        }
                        if (O = [...O, {
                              placement: a,
                              overflows: E
                           }], !E.every(e => e <= 0)) {
                           let e = ((null == (n = s.flip) ? void 0 : n.index) || 0) + 1,
                              t = T[e];
                           if (t) return {
                              data: {
                                 index: e,
                                 overflows: O
                              },
                              reset: {
                                 placement: t
                              }
                           };
                           let r = null == (i = O.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                           if (!r) switch (m) {
                              case "bestFit": {
                                 let e = null == (o = O.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : o[0];
                                 e && (r = e);
                                 break
                              }
                              case "initialPlacement":
                                 r = u
                           }
                           if (a !== r) return {
                              reset: {
                                 placement: r
                              }
                           }
                        }
                        return {}
                     }
                  }, {
                     name: "size",
                     options: m = {
                        ...Z,
                        apply: ({
                           elements: e,
                           rects: t,
                           availableWidth: r,
                           availableHeight: n
                        }) => {
                           let {
                              width: i,
                              height: o
                           } = t.reference, a = e.floating.style;
                           a.setProperty("--radix-popper-available-width", `${r}px`), a.setProperty("--radix-popper-available-height", `${n}px`), a.setProperty("--radix-popper-anchor-width", `${i}px`), a.setProperty("--radix-popper-anchor-height", `${o}px`)
                        }
                     },
                     async fn(e) {
                        let t, r;
                        let {
                           placement: n,
                           rects: i,
                           platform: o,
                           elements: a
                        } = e, {
                           apply: s = () => {},
                           ...l
                        } = e6(m, e), u = await tu(e, l), c = e4(n), f = e7(n), d = "y" === tr(n), {
                           width: h,
                           height: p
                        } = i.floating;
                        "top" === c || "bottom" === c ? (t = c, r = f === (await (null == o.isRTL ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (r = c, t = "end" === f ? "top" : "bottom");
                        let g = p - u[t],
                           v = h - u[r],
                           y = !e.middlewareData.shift,
                           _ = g,
                           b = v;
                        if (d) {
                           let e = h - u.left - u.right;
                           b = f || y ? e0(v, e) : e
                        } else {
                           let e = p - u.top - u.bottom;
                           _ = f || y ? e0(g, e) : e
                        }
                        if (y && !f) {
                           let e = e1(u.left, 0),
                              t = e1(u.right, 0),
                              r = e1(u.top, 0),
                              n = e1(u.bottom, 0);
                           d ? b = h - 2 * (0 !== e || 0 !== t ? e + t : e1(u.left, u.right)) : _ = p - 2 * (0 !== r || 0 !== n ? r + n : e1(u.top, u.bottom))
                        }
                        await s({
                           ...e,
                           availableWidth: b,
                           availableHeight: _
                        });
                        let w = await o.getDimensions(a.floating);
                        return h !== w.width || p !== w.height ? {
                           reset: {
                              rects: !0
                           }
                        } : {}
                     }
                  }, V && tW({
                     element: V,
                     padding: P
                  }), t7({
                     arrowWidth: W,
                     arrowHeight: q
                  }), D && {
                     name: "hide",
                     options: y = {
                        strategy: "referenceHidden",
                        ...Z
                     },
                     async fn(e) {
                        let {
                           rects: t
                        } = e, {
                           strategy: r = "referenceHidden",
                           ...n
                        } = e6(y, e);
                        switch (r) {
                           case "referenceHidden": {
                              let r = tc(await tu(e, {
                                 ...n,
                                 elementContext: "reference"
                              }), t.reference);
                              return {
                                 data: {
                                    referenceHiddenOffsets: r,
                                    referenceHidden: tf(r)
                                 }
                              }
                           }
                           case "escaped": {
                              let r = tc(await tu(e, {
                                 ...n,
                                 altBoundary: !0
                              }), t.floating);
                              return {
                                 data: {
                                    escapedOffsets: r,
                                    escaped: tf(r)
                                 }
                              }
                           }
                           default:
                              return {}
                        }
                     }
                  }]
               }), [et, er] = re(J), en = T(I);
               k(() => {
                  Q && (null == en || en())
               }, [Q, en]);
               let ei = null === (i = ee.arrow) || void 0 === i ? void 0 : i.x,
                  eo = null === (o = ee.arrow) || void 0 === o ? void 0 : o.y,
                  ea = (null === (a = ee.arrow) || void 0 === a ? void 0 : a.centerOffset) !== 0,
                  [es, el] = (0, h.useState)();
               return k(() => {
                  L && el(window.getComputedStyle(L).zIndex)
               }, [L]), (0, h.createElement)("div", {
                  ref: G.setFloating,
                  "data-radix-popper-content-wrapper": "",
                  style: {
                     ...K,
                     transform: Q ? K.transform : "translate(0, -200%)",
                     minWidth: "max-content",
                     zIndex: es,
                     "--radix-popper-transform-origin": [null === (s = ee.transformOrigin) || void 0 === s ? void 0 : s.x, null === (l = ee.transformOrigin) || void 0 === l ? void 0 : l.y].join(" ")
                  },
                  dir: e.dir
               }, (0, h.createElement)(t3, {
                  scope: _,
                  placedSide: et,
                  onArrowChange: H,
                  arrowX: ei,
                  arrowY: eo,
                  shouldHideArrow: ea
               }, (0, h.createElement)(O.div, (0, d.Z)({
                  "data-side": et,
                  "data-align": er
               }, z, {
                  ref: B,
                  style: {
                     ...z.style,
                     animation: Q ? void 0 : "none",
                     opacity: null !== (u = ee.hide) && void 0 !== u && u.referenceHidden ? 0 : void 0
                  }
               }))))
            }),
            t6 = {
               top: "bottom",
               right: "left",
               bottom: "top",
               left: "right"
            };

         function t4(e) {
            return null !== e
         }
         let t7 = e => ({
            name: "transformOrigin",
            options: e,
            fn(t) {
               var r, n, i, o, a;
               let {
                  placement: s,
                  rects: l,
                  middlewareData: u
               } = t, c = (null === (r = u.arrow) || void 0 === r ? void 0 : r.centerOffset) !== 0, f = c ? 0 : e.arrowWidth, d = c ? 0 : e.arrowHeight, [h, p] = re(s), g = {
                  start: "0%",
                  center: "50%",
                  end: "100%"
               } [p], m = (null !== (n = null === (i = u.arrow) || void 0 === i ? void 0 : i.x) && void 0 !== n ? n : 0) + f / 2, v = (null !== (o = null === (a = u.arrow) || void 0 === a ? void 0 : a.y) && void 0 !== o ? o : 0) + d / 2, y = "", _ = "";
               return "bottom" === h ? (y = c ? g : `${m}px`, _ = `${-d}px`) : "top" === h ? (y = c ? g : `${m}px`, _ = `${l.floating.height+d}px`) : "right" === h ? (y = `${-d}px`, _ = c ? g : `${v}px`) : "left" === h && (y = `${l.floating.width+d}px`, _ = c ? g : `${v}px`), {
                  data: {
                     x: y,
                     y: _
                  }
               }
            }
         });

         function re(e) {
            let [t, r = "center"] = e.split("-");
            return [t, r]
         }
         let rt = e => {
               let {
                  __scopePopper: t,
                  children: r
               } = e, [n, i] = (0, h.useState)(null);
               return (0, h.createElement)(t0, {
                  scope: t,
                  anchor: n,
                  onAnchorChange: i
               }, r)
            },
            rr = ((e, t) => {
               var r;
               let {
                  container: n = null == globalThis ? void 0 : null === (r = globalThis.document) || void 0 === r ? void 0 : r.body,
                  ...i
               } = e;
               return n ? E.createPortal((0, h.createElement)(O.div, (0, d.Z)({}, i, {
                  ref: t
               })), n) : null
            }, (0, h.forwardRef)((e, t) => (0, h.createElement)(O.span, (0, d.Z)({}, e, {
               ref: t,
               style: {
                  position: "absolute",
                  border: 0,
                  width: 1,
                  height: 1,
                  padding: 0,
                  margin: -1,
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  wordWrap: "normal",
                  ...e.style
               }
            }))));
         var rn = new WeakMap,
            ri = new WeakMap,
            ro = {},
            ra = 0,
            rs = function (e) {
               return e && (e.host || rs(e.parentNode))
            },
            rl = function (e, t, r, n) {
               var i = (Array.isArray(e) ? e : [e]).map(function (e) {
                  if (t.contains(e)) return e;
                  var r = rs(e);
                  return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
               }).filter(function (e) {
                  return !!e
               });
               ro[r] || (ro[r] = new WeakMap);
               var o = ro[r],
                  a = [],
                  s = new Set,
                  l = new Set(i),
                  u = function (e) {
                     !e || s.has(e) || (s.add(e), u(e.parentNode))
                  };
               i.forEach(u);
               var c = function (e) {
                  !e || l.has(e) || Array.prototype.forEach.call(e.children, function (e) {
                     if (s.has(e)) c(e);
                     else {
                        var t = e.getAttribute(n),
                           i = null !== t && "false" !== t,
                           l = (rn.get(e) || 0) + 1,
                           u = (o.get(e) || 0) + 1;
                        rn.set(e, l), o.set(e, u), a.push(e), 1 === l && i && ri.set(e, !0), 1 === u && e.setAttribute(r, "true"), i || e.setAttribute(n, "true")
                     }
                  })
               };
               return c(t), s.clear(), ra++,
                  function () {
                     a.forEach(function (e) {
                        var t = rn.get(e) - 1,
                           i = o.get(e) - 1;
                        rn.set(e, t), o.set(e, i), t || (ri.has(e) || e.removeAttribute(n), ri.delete(e)), i || e.removeAttribute(r)
                     }), --ra || (rn = new WeakMap, rn = new WeakMap, ri = new WeakMap, ro = {})
                  }
            },
            ru = function (e, t, r) {
               void 0 === r && (r = "data-aria-hidden");
               var n = Array.from(Array.isArray(e) ? e : [e]),
                  i = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
               return i ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live]"))), rl(n, i, r, "aria-hidden")) : function () {
                  return null
               }
            },
            rc = function () {
               return (rc = Object.assign || function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                     for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                  return e
               }).apply(this, arguments)
            };

         function rf(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
               for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
            return r
         }
         "function" == typeof SuppressedError && SuppressedError;
         var rd = "right-scroll-bar-position",
            rh = "width-before-scroll-bar";

         function rp(e, t) {
            return "function" == typeof e ? e(t) : e && (e.current = t), e
         }
         var rg = new WeakMap,
            rm = (void 0 === o && (o = {}), (void 0 === a && (a = function (e) {
               return e
            }), s = [], l = !1, u = {
               read: function () {
                  if (l) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                  return s.length ? s[s.length - 1] : null
               },
               useMedium: function (e) {
                  var t = a(e, l);
                  return s.push(t),
                     function () {
                        s = s.filter(function (e) {
                           return e !== t
                        })
                     }
               },
               assignSyncMedium: function (e) {
                  for (l = !0; s.length;) {
                     var t = s;
                     s = [], t.forEach(e)
                  }
                  s = {
                     push: function (t) {
                        return e(t)
                     },
                     filter: function () {
                        return s
                     }
                  }
               },
               assignMedium: function (e) {
                  l = !0;
                  var t = [];
                  if (s.length) {
                     var r = s;
                     s = [], r.forEach(e), t = s
                  }
                  var n = function () {
                        var r = t;
                        t = [], r.forEach(e)
                     },
                     i = function () {
                        return Promise.resolve().then(n)
                     };
                  i(), s = {
                     push: function (e) {
                        t.push(e), i()
                     },
                     filter: function (e) {
                        return t = t.filter(e), s
                     }
                  }
               }
            }).options = rc({
               async: !0,
               ssr: !1
            }, o), u),
            rv = function () {},
            ry = h.forwardRef(function (e, t) {
               var r, n, i, o, a = h.useRef(null),
                  s = h.useState({
                     onScrollCapture: rv,
                     onWheelCapture: rv,
                     onTouchMoveCapture: rv
                  }),
                  l = s[0],
                  u = s[1],
                  c = e.forwardProps,
                  f = e.children,
                  d = e.className,
                  p = e.removeScrollBar,
                  g = e.enabled,
                  m = e.shards,
                  v = e.sideCar,
                  y = e.noIsolation,
                  _ = e.inert,
                  b = e.allowPinchZoom,
                  w = e.as,
                  x = rf(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                  S = (r = [a, t], n = function (e) {
                     return r.forEach(function (t) {
                        return rp(t, e)
                     })
                  }, (i = (0, h.useState)(function () {
                     return {
                        value: null,
                        callback: n,
                        facade: {
                           get current() {
                              return i.value
                           },
                           set current(value) {
                              var e = i.value;
                              e !== value && (i.value = value, i.callback(value, e))
                           }
                        }
                     }
                  })[0]).callback = n, o = i.facade, h.useLayoutEffect(function () {
                     var e = rg.get(o);
                     if (e) {
                        var t = new Set(e),
                           n = new Set(r),
                           i = o.current;
                        t.forEach(function (e) {
                           n.has(e) || rp(e, null)
                        }), n.forEach(function (e) {
                           t.has(e) || rp(e, i)
                        })
                     }
                     rg.set(o, r)
                  }, [r]), o),
                  T = rc(rc({}, x), l);
               return h.createElement(h.Fragment, null, g && h.createElement(v, {
                  sideCar: rm,
                  removeScrollBar: p,
                  shards: m,
                  noIsolation: y,
                  inert: _,
                  setCallbacks: u,
                  allowPinchZoom: !!b,
                  lockRef: a
               }), c ? h.cloneElement(h.Children.only(f), rc(rc({}, T), {
                  ref: S
               })) : h.createElement(void 0 === w ? "div" : w, rc({}, T, {
                  className: d,
                  ref: S
               }), f))
            });
         ry.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
         }, ry.classNames = {
            fullWidth: rh,
            zeroRight: rd
         };
         var r_ = function (e) {
            var t = e.sideCar,
               r = rf(e, ["sideCar"]);
            if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var n = t.read();
            if (!n) throw Error("Sidecar medium not found");
            return h.createElement(n, rc({}, r))
         };
         r_.isSideCarExport = !0;
         var rb = function () {
               var e = 0,
                  t = null;
               return {
                  add: function (n) {
                     if (0 == e && (t = function () {
                           if (!document) return null;
                           var e = document.createElement("style");
                           e.type = "text/css";
                           var t = c || r.nc;
                           return t && e.setAttribute("nonce", t), e
                        }())) {
                        var i, o;
                        (i = t).styleSheet ? i.styleSheet.cssText = n : i.appendChild(document.createTextNode(n)), o = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(o)
                     }
                     e++
                  },
                  remove: function () {
                     --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                  }
               }
            },
            rw = function () {
               var e = rb();
               return function (t, r) {
                  h.useEffect(function () {
                     return e.add(t),
                        function () {
                           e.remove()
                        }
                  }, [t && r])
               }
            },
            rx = function () {
               var e = rw();
               return function (t) {
                  return e(t.styles, t.dynamic), null
               }
            },
            rS = {
               left: 0,
               top: 0,
               right: 0,
               gap: 0
            },
            rT = function (e) {
               return parseInt(e || "", 10) || 0
            },
            rP = function (e) {
               var t = window.getComputedStyle(document.body),
                  r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                  n = t["padding" === e ? "paddingTop" : "marginTop"],
                  i = t["padding" === e ? "paddingRight" : "marginRight"];
               return [rT(r), rT(n), rT(i)]
            },
            rE = function (e) {
               if (void 0 === e && (e = "margin"), "undefined" == typeof window) return rS;
               var t = rP(e),
                  r = document.documentElement.clientWidth,
                  n = window.innerWidth;
               return {
                  left: t[0],
                  top: t[1],
                  right: t[2],
                  gap: Math.max(0, n - r + t[2] - t[0])
               }
            },
            rO = rx(),
            rk = "data-scroll-locked",
            rC = function (e, t, r, n) {
               var i = e.left,
                  o = e.top,
                  a = e.right,
                  s = e.gap;
               return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(s, "px ").concat(n, ";\n  }\n  body[").concat(rk, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(i, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(s, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(rd, " {\n    right: ").concat(s, "px ").concat(n, ";\n  }\n  \n  .").concat(rh, " {\n    margin-right: ").concat(s, "px ").concat(n, ";\n  }\n  \n  .").concat(rd, " .").concat(rd, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(rh, " .").concat(rh, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(rk, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
            },
            rj = function () {
               var e = parseInt(document.body.getAttribute(rk) || "0", 10);
               return isFinite(e) ? e : 0
            },
            rA = function () {
               h.useEffect(function () {
                  return document.body.setAttribute(rk, (rj() + 1).toString()),
                     function () {
                        var e = rj() - 1;
                        e <= 0 ? document.body.removeAttribute(rk) : document.body.setAttribute(rk, e.toString())
                     }
               }, [])
            },
            rM = function (e) {
               var t = e.noRelative,
                  r = e.noImportant,
                  n = e.gapMode,
                  i = void 0 === n ? "margin" : n;
               rA();
               var o = h.useMemo(function () {
                  return rE(i)
               }, [i]);
               return h.createElement(rO, {
                  styles: rC(o, !t, i, r ? "" : "!important")
               })
            },
            rD = !1;
         if ("undefined" != typeof window) try {
            var rR = Object.defineProperty({}, "passive", {
               get: function () {
                  return rD = !0, !0
               }
            });
            window.addEventListener("test", rR, rR), window.removeEventListener("test", rR, rR)
         } catch (e) {
            rD = !1
         }
         var rI = !!rD && {
               passive: !1
            },
            rz = function (e, t) {
               var r = window.getComputedStyle(e);
               return "hidden" !== r[t] && !(r.overflowY === r.overflowX && "TEXTAREA" !== e.tagName && "visible" === r[t])
            },
            rN = function (e, t) {
               var r = t;
               do {
                  if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), rL(e, r)) {
                     var n = rF(e, r);
                     if (n[1] > n[2]) return !0
                  }
                  r = r.parentNode
               } while (r && r !== document.body);
               return !1
            },
            rL = function (e, t) {
               return "v" === e ? rz(t, "overflowY") : rz(t, "overflowX")
            },
            rF = function (e, t) {
               return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
            },
            rB = function (e, t, r, n, i) {
               var o, a = (o = window.getComputedStyle(t).direction, "h" === e && "rtl" === o ? -1 : 1),
                  s = a * n,
                  l = r.target,
                  u = t.contains(l),
                  c = !1,
                  f = s > 0,
                  d = 0,
                  h = 0;
               do {
                  var p = rF(e, l),
                     g = p[0],
                     m = p[1] - p[2] - a * g;
                  (g || m) && rL(e, l) && (d += m, h += g), l = l.parentNode
               } while (!u && l !== document.body || u && (t.contains(l) || t === l));
               return f && (i && 0 === d || !i && s > d) ? c = !0 : !f && (i && 0 === h || !i && -s > h) && (c = !0), c
            },
            rV = function (e) {
               return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
            },
            rH = function (e) {
               return [e.deltaX, e.deltaY]
            },
            rU = function (e) {
               return e && "current" in e ? e.current : e
            },
            rW = 0,
            rq = [],
            rY = (rm.useMedium(function (e) {
               var t = h.useRef([]),
                  r = h.useRef([0, 0]),
                  n = h.useRef(),
                  i = h.useState(rW++)[0],
                  o = h.useState(function () {
                     return rx()
                  })[0],
                  a = h.useRef(e);
               h.useEffect(function () {
                  a.current = e
               }, [e]), h.useEffect(function () {
                  if (e.inert) {
                     document.body.classList.add("block-interactivity-".concat(i));
                     var t = (function (e, t, r) {
                        if (r || 2 == arguments.length)
                           for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                        return e.concat(n || Array.prototype.slice.call(t))
                     })([e.lockRef.current], (e.shards || []).map(rU), !0).filter(Boolean);
                     return t.forEach(function (e) {
                           return e.classList.add("allow-interactivity-".concat(i))
                        }),
                        function () {
                           document.body.classList.remove("block-interactivity-".concat(i)), t.forEach(function (e) {
                              return e.classList.remove("allow-interactivity-".concat(i))
                           })
                        }
                  }
               }, [e.inert, e.lockRef.current, e.shards]);
               var s = h.useCallback(function (e, t) {
                     if ("touches" in e && 2 === e.touches.length) return !a.current.allowPinchZoom;
                     var i, o = rV(e),
                        s = r.current,
                        l = "deltaX" in e ? e.deltaX : s[0] - o[0],
                        u = "deltaY" in e ? e.deltaY : s[1] - o[1],
                        c = e.target,
                        f = Math.abs(l) > Math.abs(u) ? "h" : "v";
                     if ("touches" in e && "h" === f && "range" === c.type) return !1;
                     var d = rN(f, c);
                     if (!d) return !0;
                     if (d ? i = f : (i = "v" === f ? "h" : "v", d = rN(f, c)), !d) return !1;
                     if (!n.current && "changedTouches" in e && (l || u) && (n.current = i), !i) return !0;
                     var h = n.current || i;
                     return rB(h, t, e, "h" === h ? l : u, !0)
                  }, []),
                  l = h.useCallback(function (e) {
                     if (rq.length && rq[rq.length - 1] === o) {
                        var r = "deltaY" in e ? rH(e) : rV(e),
                           n = t.current.filter(function (t) {
                              var n;
                              return t.name === e.type && t.target === e.target && (n = t.delta)[0] === r[0] && n[1] === r[1]
                           })[0];
                        if (n && n.should) {
                           e.cancelable && e.preventDefault();
                           return
                        }
                        if (!n) {
                           var i = (a.current.shards || []).map(rU).filter(Boolean).filter(function (t) {
                              return t.contains(e.target)
                           });
                           (i.length > 0 ? s(e, i[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                        }
                     }
                  }, []),
                  u = h.useCallback(function (e, r, n, i) {
                     var o = {
                        name: e,
                        delta: r,
                        target: n,
                        should: i
                     };
                     t.current.push(o), setTimeout(function () {
                        t.current = t.current.filter(function (e) {
                           return e !== o
                        })
                     }, 1)
                  }, []),
                  c = h.useCallback(function (e) {
                     r.current = rV(e), n.current = void 0
                  }, []),
                  f = h.useCallback(function (t) {
                     u(t.type, rH(t), t.target, s(t, e.lockRef.current))
                  }, []),
                  d = h.useCallback(function (t) {
                     u(t.type, rV(t), t.target, s(t, e.lockRef.current))
                  }, []);
               h.useEffect(function () {
                  return rq.push(o), e.setCallbacks({
                        onScrollCapture: f,
                        onWheelCapture: f,
                        onTouchMoveCapture: d
                     }), document.addEventListener("wheel", l, rI), document.addEventListener("touchmove", l, rI), document.addEventListener("touchstart", c, rI),
                     function () {
                        rq = rq.filter(function (e) {
                           return e !== o
                        }), document.removeEventListener("wheel", l, rI), document.removeEventListener("touchmove", l, rI), document.removeEventListener("touchstart", c, rI)
                     }
               }, []);
               var p = e.removeScrollBar,
                  g = e.inert;
               return h.createElement(h.Fragment, null, g ? h.createElement(o, {
                  styles: "\n  .block-interactivity-".concat(i, " {pointer-events: none;}\n  .allow-interactivity-").concat(i, " {pointer-events: all;}\n")
               }) : null, p ? h.createElement(rM, {
                  gapMode: "margin"
               }) : null)
            }), r_),
            rX = h.forwardRef(function (e, t) {
               return h.createElement(ry, rc({}, e, {
                  ref: t,
                  sideCar: rY
               }))
            });
         rX.classNames = ry.classNames;
         let r$ = [" ", "Enter", "ArrowUp", "ArrowDown"],
            rZ = [" ", "Enter"],
            rG = "Select",
            [rK, rJ, rQ] = x(rG),
            [r0, r1] = g(rG, [rQ, tQ]),
            r2 = tQ(),
            [r5, r3] = r0(rG),
            [r8, r9] = r0(rG),
            r6 = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  disabled: n = !1,
                  ...i
               } = e, o = r2(r), a = r3("SelectTrigger", r), s = a.disabled || n, l = v(t, a.onTriggerChange), u = rJ(r), [c, f, p] = nO(e => {
                  let t = u().filter(e => !e.disabled),
                     r = t.find(e => e.value === a.value),
                     n = nk(t, e, r);
                  void 0 !== n && a.onValueChange(n.value)
               }), g = () => {
                  s || (a.onOpenChange(!0), p())
               };
               return (0, h.createElement)(t2, (0, d.Z)({
                  asChild: !0
               }, o), (0, h.createElement)(O.button, (0, d.Z)({
                  type: "button",
                  role: "combobox",
                  "aria-controls": a.contentId,
                  "aria-expanded": a.open,
                  "aria-required": a.required,
                  "aria-autocomplete": "none",
                  dir: a.dir,
                  "data-state": a.open ? "open" : "closed",
                  disabled: s,
                  "data-disabled": s ? "" : void 0,
                  "data-placeholder": nP(a.value) ? "" : void 0
               }, i, {
                  ref: l,
                  onClick: S(i.onClick, e => {
                     e.currentTarget.focus()
                  }),
                  onPointerDown: S(i.onPointerDown, e => {
                     let t = e.target;
                     t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (g(), a.triggerPointerDownPosRef.current = {
                        x: Math.round(e.pageX),
                        y: Math.round(e.pageY)
                     }, e.preventDefault())
                  }),
                  onKeyDown: S(i.onKeyDown, e => {
                     let t = "" !== c.current;
                     e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), (!t || " " !== e.key) && r$.includes(e.key) && (g(), e.preventDefault())
                  })
               })))
            }),
            r4 = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  className: n,
                  style: i,
                  children: o,
                  placeholder: a = "",
                  ...s
               } = e, l = r3("SelectValue", r), {
                  onValueNodeHasChildrenChange: u
               } = l, c = void 0 !== o, f = v(t, l.onValueNodeChange);
               return k(() => {
                  u(c)
               }, [u, c]), (0, h.createElement)(O.span, (0, d.Z)({}, s, {
                  ref: f,
                  style: {
                     pointerEvents: "none"
                  }
               }), nP(l.value) ? (0, h.createElement)(h.Fragment, null, a) : o)
            }),
            r7 = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  children: n,
                  ...i
               } = e;
               return (0, h.createElement)(O.span, (0, d.Z)({
                  "aria-hidden": !0
               }, i, {
                  ref: t
               }), n || "▼")
            }),
            ne = "SelectContent",
            nt = (0, h.forwardRef)((e, t) => {
               let r = r3(ne, e.__scopeSelect),
                  [n, i] = (0, h.useState)();
               return (k(() => {
                  i(new DocumentFragment)
               }, []), r.open) ? (0, h.createElement)(ni, (0, d.Z)({}, e, {
                  ref: t
               })) : n ? (0, E.createPortal)((0, h.createElement)(nr, {
                  scope: e.__scopeSelect
               }, (0, h.createElement)(rK.Slot, {
                  scope: e.__scopeSelect
               }, (0, h.createElement)("div", null, e.children))), n) : null
            }),
            [nr, nn] = r0(ne),
            ni = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  position: n = "item-aligned",
                  onCloseAutoFocus: i,
                  onEscapeKeyDown: o,
                  onPointerDownOutside: a,
                  side: s,
                  sideOffset: l,
                  align: u,
                  alignOffset: c,
                  arrowPadding: f,
                  collisionBoundary: p,
                  collisionPadding: g,
                  sticky: m,
                  hideWhenDetached: _,
                  avoidCollisions: b,
                  ...w
               } = e, x = r3(ne, r), [T, P] = (0, h.useState)(null), [E, O] = (0, h.useState)(null), k = v(t, e => P(e)), [C, j] = (0, h.useState)(null), [A, M] = (0, h.useState)(null), D = rJ(r), [R, I] = (0, h.useState)(!1), z = (0, h.useRef)(!1);
               (0, h.useEffect)(() => {
                  if (T) return ru(T)
               }, [T]), (0, h.useEffect)(() => {
                  var e, t;
                  let r = document.querySelectorAll("[data-radix-focus-guard]");
                  return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : eU()), document.body.insertAdjacentElement("beforeend", null !== (t = r[1]) && void 0 !== t ? t : eU()), eH++, () => {
                     1 === eH && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), eH--
                  }
               }, []);
               let N = (0, h.useCallback)(e => {
                     let [t, ...r] = D().map(e => e.ref.current), [n] = r.slice(-1), i = document.activeElement;
                     for (let r of e)
                        if (r === i || (null == r || r.scrollIntoView({
                              block: "nearest"
                           }), r === t && E && (E.scrollTop = 0), r === n && E && (E.scrollTop = E.scrollHeight), null == r || r.focus(), document.activeElement !== i)) return
                  }, [D, E]),
                  L = (0, h.useCallback)(() => N([C, T]), [N, C, T]);
               (0, h.useEffect)(() => {
                  R && L()
               }, [R, L]);
               let {
                  onOpenChange: F,
                  triggerPointerDownPosRef: B
               } = x;
               (0, h.useEffect)(() => {
                  if (T) {
                     let e = {
                           x: 0,
                           y: 0
                        },
                        t = t => {
                           var r, n, i, o;
                           e = {
                              x: Math.abs(Math.round(t.pageX) - (null !== (r = null === (n = B.current) || void 0 === n ? void 0 : n.x) && void 0 !== r ? r : 0)),
                              y: Math.abs(Math.round(t.pageY) - (null !== (i = null === (o = B.current) || void 0 === o ? void 0 : o.y) && void 0 !== i ? i : 0))
                           }
                        },
                        r = r => {
                           e.x <= 10 && e.y <= 10 ? r.preventDefault() : T.contains(r.target) || F(!1), document.removeEventListener("pointermove", t), B.current = null
                        };
                     return null !== B.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                        capture: !0,
                        once: !0
                     })), () => {
                        document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                           capture: !0
                        })
                     }
                  }
               }, [T, F, B]), (0, h.useEffect)(() => {
                  let e = () => F(!1);
                  return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                     window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                  }
               }, [F]);
               let [V, H] = nO(e => {
                  let t = D().filter(e => !e.disabled),
                     r = t.find(e => e.ref.current === document.activeElement),
                     n = nk(t, e, r);
                  n && setTimeout(() => n.ref.current.focus())
               }), U = (0, h.useCallback)((e, t, r) => {
                  let n = !z.current && !r;
                  (void 0 !== x.value && x.value === t || n) && (j(e), n && (z.current = !0))
               }, [x.value]), W = (0, h.useCallback)(() => null == T ? void 0 : T.focus(), [T]), q = (0, h.useCallback)((e, t, r) => {
                  let n = !z.current && !r;
                  (void 0 !== x.value && x.value === t || n) && M(e)
               }, [x.value]), Y = "popper" === n ? na : no;
               return (0, h.createElement)(nr, {
                  scope: r,
                  content: T,
                  viewport: E,
                  onViewportChange: O,
                  itemRefCallback: U,
                  selectedItem: C,
                  onItemLeave: W,
                  itemTextRefCallback: q,
                  focusSelectedItem: L,
                  selectedItemText: A,
                  position: n,
                  isPositioned: R,
                  searchRef: V
               }, (0, h.createElement)(rX, {
                  as: y,
                  allowPinchZoom: !0
               }, (0, h.createElement)(eX, {
                  asChild: !0,
                  trapped: x.open,
                  onMountAutoFocus: e => {
                     e.preventDefault()
                  },
                  onUnmountAutoFocus: S(i, e => {
                     var t;
                     null === (t = x.trigger) || void 0 === t || t.focus({
                        preventScroll: !0
                     }), e.preventDefault()
                  })
               }, (0, h.createElement)(eF, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: o,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => x.onOpenChange(!1)
               }, (0, h.createElement)(Y, (0, d.Z)({
                  role: "listbox",
                  id: x.contentId,
                  "data-state": x.open ? "open" : "closed",
                  dir: x.dir,
                  onContextMenu: e => e.preventDefault()
               }, w, Y === na ? {
                  side: s,
                  sideOffset: l,
                  align: u,
                  alignOffset: c,
                  arrowPadding: f,
                  collisionBoundary: p,
                  collisionPadding: g,
                  sticky: m,
                  hideWhenDetached: _,
                  avoidCollisions: b
               } : {}, {
                  onPlaced: () => I(!0),
                  ref: k,
                  style: {
                     display: "flex",
                     flexDirection: "column",
                     outline: "none",
                     ...w.style
                  },
                  onKeyDown: S(w.onKeyDown, e => {
                     let t = e.ctrlKey || e.altKey || e.metaKey;
                     if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || H(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        let t = D().filter(e => !e.disabled).map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                           let r = e.target,
                              n = t.indexOf(r);
                           t = t.slice(n + 1)
                        }
                        setTimeout(() => N(t)), e.preventDefault()
                     }
                  })
               }))))))
            }),
            no = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  onPlaced: n,
                  ...i
               } = e, o = r3(ne, r), a = nn(ne, r), [s, l] = (0, h.useState)(null), [u, c] = (0, h.useState)(null), f = v(t, e => c(e)), p = rJ(r), g = (0, h.useRef)(!1), m = (0, h.useRef)(!0), {
                  viewport: y,
                  selectedItem: _,
                  selectedItemText: b,
                  focusSelectedItem: w
               } = a, x = (0, h.useCallback)(() => {
                  if (o.trigger && o.valueNode && s && u && y && _ && b) {
                     let e = o.trigger.getBoundingClientRect(),
                        t = u.getBoundingClientRect(),
                        r = o.valueNode.getBoundingClientRect(),
                        i = b.getBoundingClientRect();
                     if ("rtl" !== o.dir) {
                        let n = i.left - t.left,
                           o = r.left - n,
                           a = e.left - o,
                           l = e.width + a,
                           u = Math.max(l, t.width),
                           c = ez(o, [10, window.innerWidth - 10 - u]);
                        s.style.minWidth = l + "px", s.style.left = c + "px"
                     } else {
                        let n = t.right - i.right,
                           o = window.innerWidth - r.right - n,
                           a = window.innerWidth - e.right - o,
                           l = e.width + a,
                           u = Math.max(l, t.width),
                           c = ez(o, [10, window.innerWidth - 10 - u]);
                        s.style.minWidth = l + "px", s.style.right = c + "px"
                     }
                     let a = p(),
                        l = window.innerHeight - 20,
                        c = y.scrollHeight,
                        f = window.getComputedStyle(u),
                        d = parseInt(f.borderTopWidth, 10),
                        h = parseInt(f.paddingTop, 10),
                        m = parseInt(f.borderBottomWidth, 10),
                        v = d + h + c + parseInt(f.paddingBottom, 10) + m,
                        w = Math.min(5 * _.offsetHeight, v),
                        x = window.getComputedStyle(y),
                        S = parseInt(x.paddingTop, 10),
                        T = parseInt(x.paddingBottom, 10),
                        P = e.top + e.height / 2 - 10,
                        E = _.offsetHeight / 2,
                        O = d + h + (_.offsetTop + E);
                     if (O <= P) {
                        let e = _ === a[a.length - 1].ref.current;
                        s.style.bottom = "0px";
                        let t = Math.max(l - P, E + (e ? T : 0) + (u.clientHeight - y.offsetTop - y.offsetHeight) + m);
                        s.style.height = O + t + "px"
                     } else {
                        let e = _ === a[0].ref.current;
                        s.style.top = "0px";
                        let t = Math.max(P, d + y.offsetTop + (e ? S : 0) + E);
                        s.style.height = t + (v - O) + "px", y.scrollTop = O - P + y.offsetTop
                     }
                     s.style.margin = "10px 0", s.style.minHeight = w + "px", s.style.maxHeight = l + "px", null == n || n(), requestAnimationFrame(() => g.current = !0)
                  }
               }, [p, o.trigger, o.valueNode, s, u, y, _, b, o.dir, n]);
               k(() => x(), [x]);
               let [S, T] = (0, h.useState)();
               k(() => {
                  u && T(window.getComputedStyle(u).zIndex)
               }, [u]);
               let P = (0, h.useCallback)(e => {
                  e && !0 === m.current && (x(), null == w || w(), m.current = !1)
               }, [x, w]);
               return (0, h.createElement)(ns, {
                  scope: r,
                  contentWrapper: s,
                  shouldExpandOnScrollRef: g,
                  onScrollButtonChange: P
               }, (0, h.createElement)("div", {
                  ref: l,
                  style: {
                     display: "flex",
                     flexDirection: "column",
                     position: "fixed",
                     zIndex: S
                  }
               }, (0, h.createElement)(O.div, (0, d.Z)({}, i, {
                  ref: f,
                  style: {
                     boxSizing: "border-box",
                     maxHeight: "100%",
                     ...i.style
                  }
               }))))
            }),
            na = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  align: n = "start",
                  collisionPadding: i = 10,
                  ...o
               } = e, a = r2(r);
               return (0, h.createElement)(t9, (0, d.Z)({}, a, o, {
                  ref: t,
                  align: n,
                  collisionPadding: i,
                  style: {
                     boxSizing: "border-box",
                     ...o.style,
                     "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                     "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                     "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                     "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                     "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                  }
               }))
            }),
            [ns, nl] = r0(ne, {}),
            nu = "SelectViewport",
            nc = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  ...n
               } = e, i = nn(nu, r), o = nl(nu, r), a = v(t, i.onViewportChange), s = (0, h.useRef)(0);
               return (0, h.createElement)(h.Fragment, null, (0, h.createElement)("style", {
                  dangerouslySetInnerHTML: {
                     __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                  }
               }), (0, h.createElement)(rK.Slot, {
                  scope: r
               }, (0, h.createElement)(O.div, (0, d.Z)({
                  "data-radix-select-viewport": "",
                  role: "presentation"
               }, n, {
                  ref: a,
                  style: {
                     position: "relative",
                     flex: 1,
                     overflow: "auto",
                     ...n.style
                  },
                  onScroll: S(n.onScroll, e => {
                     let t = e.currentTarget,
                        {
                           contentWrapper: r,
                           shouldExpandOnScrollRef: n
                        } = o;
                     if (null != n && n.current && r) {
                        let e = Math.abs(s.current - t.scrollTop);
                        if (e > 0) {
                           let n = window.innerHeight - 20,
                              i = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                           if (i < n) {
                              let o = i + e,
                                 a = Math.min(n, o),
                                 s = o - a;
                              r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = s > 0 ? s : 0, r.style.justifyContent = "flex-end")
                           }
                        }
                     }
                     s.current = t.scrollTop
                  })
               }))))
            }),
            [nf, nd] = r0("SelectGroup"),
            nh = "SelectItem",
            [np, ng] = r0(nh),
            nm = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  value: n,
                  disabled: i = !1,
                  textValue: o,
                  ...a
               } = e, s = r3(nh, r), l = nn(nh, r), u = s.value === n, [c, f] = (0, h.useState)(null != o ? o : ""), [p, g] = (0, h.useState)(!1), m = v(t, e => {
                  var t;
                  return null === (t = l.itemRefCallback) || void 0 === t ? void 0 : t.call(l, e, n, i)
               }), y = D(), _ = () => {
                  i || (s.onValueChange(n), s.onOpenChange(!1))
               };
               if ("" === n) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
               return (0, h.createElement)(np, {
                  scope: r,
                  value: n,
                  disabled: i,
                  textId: y,
                  isSelected: u,
                  onItemTextChange: (0, h.useCallback)(e => {
                     f(t => {
                        var r;
                        return t || (null !== (r = null == e ? void 0 : e.textContent) && void 0 !== r ? r : "").trim()
                     })
                  }, [])
               }, (0, h.createElement)(rK.ItemSlot, {
                  scope: r,
                  value: n,
                  disabled: i,
                  textValue: c
               }, (0, h.createElement)(O.div, (0, d.Z)({
                  role: "option",
                  "aria-labelledby": y,
                  "data-highlighted": p ? "" : void 0,
                  "aria-selected": u && p,
                  "data-state": u ? "checked" : "unchecked",
                  "aria-disabled": i || void 0,
                  "data-disabled": i ? "" : void 0,
                  tabIndex: i ? void 0 : -1
               }, a, {
                  ref: m,
                  onFocus: S(a.onFocus, () => g(!0)),
                  onBlur: S(a.onBlur, () => g(!1)),
                  onPointerUp: S(a.onPointerUp, _),
                  onPointerMove: S(a.onPointerMove, e => {
                     if (i) {
                        var t;
                        null === (t = l.onItemLeave) || void 0 === t || t.call(l)
                     } else e.currentTarget.focus({
                        preventScroll: !0
                     })
                  }),
                  onPointerLeave: S(a.onPointerLeave, e => {
                     if (e.currentTarget === document.activeElement) {
                        var t;
                        null === (t = l.onItemLeave) || void 0 === t || t.call(l)
                     }
                  }),
                  onKeyDown: S(a.onKeyDown, e => {
                     var t;
                     (null === (t = l.searchRef) || void 0 === t ? void 0 : t.current) !== "" && " " === e.key || (rZ.includes(e.key) && _(), " " === e.key && e.preventDefault())
                  })
               }))))
            }),
            nv = "SelectItemText",
            ny = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  className: n,
                  style: i,
                  ...o
               } = e, a = r3(nv, r), s = nn(nv, r), l = ng(nv, r), u = r9(nv, r), [c, f] = (0, h.useState)(null), p = v(t, e => f(e), l.onItemTextChange, e => {
                  var t;
                  return null === (t = s.itemTextRefCallback) || void 0 === t ? void 0 : t.call(s, e, l.value, l.disabled)
               }), g = null == c ? void 0 : c.textContent, m = (0, h.useMemo)(() => (0, h.createElement)("option", {
                  key: l.value,
                  value: l.value,
                  disabled: l.disabled
               }, g), [l.disabled, l.value, g]), {
                  onNativeOptionAdd: y,
                  onNativeOptionRemove: _
               } = u;
               return k(() => (y(m), () => _(m)), [y, _, m]), (0, h.createElement)(h.Fragment, null, (0, h.createElement)(O.span, (0, d.Z)({
                  id: l.textId
               }, o, {
                  ref: p
               })), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? (0, E.createPortal)(o.children, a.valueNode) : null)
            }),
            n_ = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  ...n
               } = e;
               return ng("SelectItemIndicator", r).isSelected ? (0, h.createElement)(O.span, (0, d.Z)({
                  "aria-hidden": !0
               }, n, {
                  ref: t
               })) : null
            }),
            nb = "SelectScrollUpButton",
            nw = (0, h.forwardRef)((e, t) => {
               let r = nn(nb, e.__scopeSelect),
                  n = nl(nb, e.__scopeSelect),
                  [i, o] = (0, h.useState)(!1),
                  a = v(t, n.onScrollButtonChange);
               return k(() => {
                  if (r.viewport && r.isPositioned) {
                     let t = r.viewport;

                     function e() {
                        o(t.scrollTop > 0)
                     }
                     return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                  }
               }, [r.viewport, r.isPositioned]), i ? (0, h.createElement)(nT, (0, d.Z)({}, e, {
                  ref: a,
                  onAutoScroll: () => {
                     let {
                        viewport: e,
                        selectedItem: t
                     } = r;
                     e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                  }
               })) : null
            }),
            nx = "SelectScrollDownButton",
            nS = (0, h.forwardRef)((e, t) => {
               let r = nn(nx, e.__scopeSelect),
                  n = nl(nx, e.__scopeSelect),
                  [i, o] = (0, h.useState)(!1),
                  a = v(t, n.onScrollButtonChange);
               return k(() => {
                  if (r.viewport && r.isPositioned) {
                     let t = r.viewport;

                     function e() {
                        let e = t.scrollHeight - t.clientHeight;
                        o(Math.ceil(t.scrollTop) < e)
                     }
                     return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                  }
               }, [r.viewport, r.isPositioned]), i ? (0, h.createElement)(nT, (0, d.Z)({}, e, {
                  ref: a,
                  onAutoScroll: () => {
                     let {
                        viewport: e,
                        selectedItem: t
                     } = r;
                     e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                  }
               })) : null
            }),
            nT = (0, h.forwardRef)((e, t) => {
               let {
                  __scopeSelect: r,
                  onAutoScroll: n,
                  ...i
               } = e, o = nn("SelectScrollButton", r), a = (0, h.useRef)(null), s = rJ(r), l = (0, h.useCallback)(() => {
                  null !== a.current && (window.clearInterval(a.current), a.current = null)
               }, []);
               return (0, h.useEffect)(() => () => l(), [l]), k(() => {
                  var e;
                  let t = s().find(e => e.ref.current === document.activeElement);
                  null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                     block: "nearest"
                  })
               }, [s]), (0, h.createElement)(O.div, (0, d.Z)({
                  "aria-hidden": !0
               }, i, {
                  ref: t,
                  style: {
                     flexShrink: 0,
                     ...i.style
                  },
                  onPointerDown: S(i.onPointerDown, () => {
                     null === a.current && (a.current = window.setInterval(n, 50))
                  }),
                  onPointerMove: S(i.onPointerMove, () => {
                     var e;
                     null === (e = o.onItemLeave) || void 0 === e || e.call(o), null === a.current && (a.current = window.setInterval(n, 50))
                  }),
                  onPointerLeave: S(i.onPointerLeave, () => {
                     l()
                  })
               }))
            });

         function nP(e) {
            return "" === e || void 0 === e
         }
         let nE = (0, h.forwardRef)((e, t) => {
            let {
               value: r,
               ...n
            } = e, i = (0, h.useRef)(null), o = v(t, i), a = function (e) {
               let t = (0, h.useRef)({
                  value: e,
                  previous: e
               });
               return (0, h.useMemo)(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
            }(r);
            return (0, h.useEffect)(() => {
               let e = i.current,
                  t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
               if (a !== r && t) {
                  let n = new Event("change", {
                     bubbles: !0
                  });
                  t.call(e, r), e.dispatchEvent(n)
               }
            }, [a, r]), (0, h.createElement)(rr, {
               asChild: !0
            }, (0, h.createElement)("select", (0, d.Z)({}, n, {
               ref: o,
               defaultValue: r
            })))
         });

         function nO(e) {
            let t = T(e),
               r = (0, h.useRef)(""),
               n = (0, h.useRef)(0),
               i = (0, h.useCallback)(e => {
                  let i = r.current + e;
                  t(i),
                     function e(t) {
                        r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
                     }(i)
               }, [t]),
               o = (0, h.useCallback)(() => {
                  r.current = "", window.clearTimeout(n.current)
               }, []);
            return (0, h.useEffect)(() => () => window.clearTimeout(n.current), []), [r, i, o]
         }

         function nk(e, t, r) {
            var n;
            let i = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
               o = (n = Math.max(r ? e.indexOf(r) : -1, 0), e.map((t, r) => e[(n + r) % e.length]));
            1 === i.length && (o = o.filter(e => e !== r));
            let a = o.find(e => e.textValue.toLowerCase().startsWith(i.toLowerCase()));
            return a !== r ? a : void 0
         }
         nE.displayName = "BubbleSelect";
         let nC = e => {
               let {
                  __scopeSelect: t,
                  children: r,
                  open: n,
                  defaultOpen: i,
                  onOpenChange: o,
                  value: a,
                  defaultValue: s,
                  onValueChange: l,
                  dir: u,
                  name: c,
                  autoComplete: f,
                  disabled: d,
                  required: p
               } = e, g = r2(t), [m, v] = (0, h.useState)(null), [y, _] = (0, h.useState)(null), [b, w] = (0, h.useState)(!1), x = Y(u), [S = !1, T] = P({
                  prop: n,
                  defaultProp: i,
                  onChange: o
               }), [E, O] = P({
                  prop: a,
                  defaultProp: s,
                  onChange: l
               }), k = (0, h.useRef)(null), C = !m || !!m.closest("form"), [j, A] = (0, h.useState)(new Set), M = Array.from(j).map(e => e.props.value).join(";");
               return (0, h.createElement)(rt, g, (0, h.createElement)(r5, {
                  required: p,
                  scope: t,
                  trigger: m,
                  onTriggerChange: v,
                  valueNode: y,
                  onValueNodeChange: _,
                  valueNodeHasChildren: b,
                  onValueNodeHasChildrenChange: w,
                  contentId: D(),
                  value: E,
                  onValueChange: O,
                  open: S,
                  onOpenChange: T,
                  dir: x,
                  triggerPointerDownPosRef: k,
                  disabled: d
               }, (0, h.createElement)(rK.Provider, {
                  scope: t
               }, (0, h.createElement)(r8, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: (0, h.useCallback)(e => {
                     A(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: (0, h.useCallback)(e => {
                     A(t => {
                        let r = new Set(t);
                        return r.delete(e), r
                     })
                  }, [])
               }, r)), C ? (0, h.createElement)(nE, {
                  key: M,
                  "aria-hidden": !0,
                  required: p,
                  tabIndex: -1,
                  name: c,
                  autoComplete: f,
                  value: E,
                  onChange: e => O(e.target.value),
                  disabled: d
               }, void 0 === E ? (0, h.createElement)("option", {
                  value: ""
               }) : null, Array.from(j)) : null))
            },
            nj = (0, h.forwardRef)(function (e, t) {
               let {
                  children: r,
                  ...n
               } = e;
               return (0, f.jsxs)(nC, {
                  ...n,
                  children: [(0, f.jsxs)(r6, {
                     ref: t,
                     children: [(0, f.jsx)(r4, {}), (0, f.jsx)(r7, {
                        children: "⌄"
                     })]
                  }), (0, f.jsxs)(nt, {
                     children: [(0, f.jsx)(nw, {
                        children: "⌃"
                     }), (0, f.jsx)(nc, {
                        children: r
                     }), (0, f.jsx)(nS, {
                        children: "⌄"
                     })]
                  })]
               })
            });
         nj.displayName = "Select";
         let nA = (0, h.forwardRef)(function (e, t) {
            let {
               children: r,
               ...n
            } = e;
            return (0, f.jsxs)(nm, {
               ...n,
               ref: t,
               children: [(0, f.jsx)(ny, {
                  children: r
               }), (0, f.jsx)(n_, {
                  children: "✓"
               })]
            })
         });

         function nM(e) {
            return "number" == typeof e
         }

         function nD(e) {
            return "string" == typeof e
         }

         function nR(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
         }

         function nI(e) {
            return nR(e) || Array.isArray(e)
         }

         function nz(e) {
            return Math.abs(e)
         }

         function nN(e) {
            return e ? e / nz(e) : 0
         }

         function nL(e) {
            return nV(e).map(Number)
         }

         function nF(e) {
            return e[nB(e)]
         }

         function nB(e) {
            return Math.max(0, e.length - 1)
         }

         function nV(e) {
            return Object.keys(e)
         }

         function nH(e, t) {
            var r = nz(e - t);

            function n(r) {
               return r < e || r > t
            }
            return {
               length: r,
               max: t,
               min: e,
               constrain: function (r) {
                  return n(r) ? r < e ? e : t : r
               },
               reachedAny: n,
               reachedMax: function (e) {
                  return e > t
               },
               reachedMin: function (t) {
                  return t < e
               },
               removeOffset: function (e) {
                  return r ? e - r * Math.ceil((e - t) / r) : e
               }
            }
         }

         function nU() {
            var e = [],
               t = {
                  add: function (r, n, i, o) {
                     return void 0 === o && (o = {
                        passive: !0
                     }), r.addEventListener(n, i, o), e.push(function () {
                        return r.removeEventListener(n, i, o)
                     }), t
                  },
                  removeAll: function () {
                     return e = e.filter(function (e) {
                        return e()
                     }), t
                  }
               };
            return t
         }

         function nW(e) {
            var t = e;

            function r(e) {
               return t /= e, i
            }

            function n(e) {
               return nM(e) ? e : e.get()
            }
            var i = {
               add: function (e) {
                  return t += n(e), i
               },
               divide: r,
               get: function () {
                  return t
               },
               multiply: function (e) {
                  return t *= e, i
               },
               normalize: function () {
                  return 0 !== t && r(t), i
               },
               set: function (e) {
                  return t = n(e), i
               },
               subtract: function (e) {
                  return t -= n(e), i
               }
            };
            return i
         }

         function nq(e, t, r) {
            var n = "x" === e.scroll ? function (e) {
                  return "translate3d(".concat(e, "px,0px,0px)")
               } : function (e) {
                  return "translate3d(0px,".concat(e, "px,0px)")
               },
               i = r.style,
               o = !1;
            return {
               clear: function () {
                  o || (i.transform = "", r.getAttribute("style") || r.removeAttribute("style"))
               },
               to: function (e) {
                  o || (i.transform = n(t.apply(e.get())))
               },
               toggleActive: function (e) {
                  o = !e
               }
            }
         }
         nj.Item = nA;
         var nY = {
            align: "center",
            axis: "x",
            container: null,
            slides: null,
            containScroll: "",
            direction: "ltr",
            slidesToScroll: 1,
            breakpoints: {},
            dragFree: !1,
            draggable: !0,
            inViewThreshold: 0,
            loop: !1,
            skipSnaps: !1,
            speed: 10,
            startIndex: 0,
            active: !0
         };

         function nX() {
            function e(e, t) {
               return function e(t, r) {
                  return [t, r].reduce(function (t, r) {
                     return nV(r).forEach(function (n) {
                        var i = t[n],
                           o = r[n],
                           a = nR(i) && nR(o);
                        t[n] = a ? e(i, o) : o
                     }), t
                  }, {})
               }(e, t || {})
            }
            return {
               merge: e,
               areEqual: function (e, t) {
                  return JSON.stringify(nV(e.breakpoints || {})) === JSON.stringify(nV(t.breakpoints || {})) && function e(t, r) {
                     var n = nV(t),
                        i = nV(r);
                     return n.length === i.length && n.every(function (n) {
                        var i = t[n],
                           o = r[n];
                        return "function" == typeof i ? "".concat(i) === "".concat(o) : nI(i) && nI(o) ? e(i, o) : i === o
                     })
                  }(e, t)
               },
               atMedia: function (t) {
                  var r = t.breakpoints || {},
                     n = nV(r).filter(function (e) {
                        return window.matchMedia(e).matches
                     }).map(function (e) {
                        return r[e]
                     }).reduce(function (t, r) {
                        return e(t, r)
                     }, {});
                  return e(t, n)
               }
            }
         }

         function n$(e, t, r) {
            var n, i, o, a, s, l, u = nU(),
               c = nX(),
               f = function () {
                  var e = nX(),
                     t = e.atMedia,
                     r = e.areEqual,
                     n = [],
                     i = [];

                  function o(e) {
                     var n = t(e.options);
                     return function () {
                        return !r(n, t(e.options))
                     }
                  }
                  return {
                     init: function (e, r) {
                        return i = e.map(o), (n = e.filter(function (e) {
                           return t(e.options).active
                        })).forEach(function (e) {
                           return e.init(r)
                        }), e.reduce(function (e, t) {
                           var r;
                           return Object.assign(e, ((r = {})[t.name] = t, r))
                        }, {})
                     },
                     destroy: function () {
                        n = n.filter(function (e) {
                           return e.destroy()
                        })
                     },
                     haveChanged: function () {
                        return i.some(function (e) {
                           return e()
                        })
                     }
                  }
               }(),
               d = (n = {}, i = {
                  emit: function (e) {
                     return (n[e] || []).forEach(function (t) {
                        return t(e)
                     }), i
                  },
                  off: function (e, t) {
                     return n[e] = (n[e] || []).filter(function (e) {
                        return e !== t
                     }), i
                  },
                  on: function (e, t) {
                     return n[e] = (n[e] || []).concat([t]), i
                  }
               }),
               h = d.on,
               p = d.off,
               g = !1,
               m = c.merge(nY, n$.globalOptions),
               v = c.merge(m),
               y = [],
               _ = 0;

            function b(t, r) {
               if (!g) {
                  var n, i, u;
                  if (m = c.merge(m, t), n = (v = c.atMedia(m)).container, i = v.slides, s = (nD(n) ? e.querySelector(n) : n) || e.children[0], u = nD(i) ? s.querySelectorAll(i) : i, l = [].slice.call(u || s.children), _ = (o = function (e, t, r, n, i) {
                        var o, a, s, l, u, c, f, d, h, p, g, m, v, y, _, b, w, x, S, T, P, E, O, k, C, j, A, M, D, R, I, z, N, L = n.align,
                           F = n.axis,
                           B = n.direction,
                           V = n.startIndex,
                           H = n.inViewThreshold,
                           U = n.loop,
                           W = n.speed,
                           q = n.dragFree,
                           Y = n.slidesToScroll,
                           X = n.skipSnaps,
                           $ = n.containScroll,
                           Z = t.getBoundingClientRect(),
                           G = r.map(function (e) {
                              return e.getBoundingClientRect()
                           }),
                           K = (u = "rtl" === B ? -1 : 1, {
                              apply: function (e) {
                                 return e * u
                              }
                           }),
                           J = (f = "y" == (c = "y" === F ? "y" : "x") ? "top" : "rtl" === B ? "right" : "left", {
                              scroll: c,
                              cross: "y" === F ? "x" : "y",
                              startEdge: f,
                              endEdge: "y" === c ? "bottom" : "rtl" === B ? "left" : "right",
                              measureSize: function (e) {
                                 var t = e.width,
                                    r = e.height;
                                 return "x" === c ? t : r
                              }
                           }),
                           Q = J.measureSize(Z),
                           ee = {
                              measure: function (e) {
                                 return e / 100 * Q
                              }
                           },
                           et = (o = {
                              start: function () {
                                 return 0
                              },
                              center: function (e) {
                                 return (Q - e) / 2
                              },
                              end: function (e) {
                                 return Q - e
                              }
                           }, {
                              measure: function (e) {
                                 return nM(L) ? Q * Number(L) : o[L](e)
                              }
                           }),
                           er = !U && "" !== $,
                           en = U || "" !== $,
                           ei = (d = J.measureSize, h = J.startEdge, p = J.endEdge, g = G[0] && en, m = function () {
                              if (!g) return 0;
                              var e = G[0];
                              return nz(Z[h] - e[h])
                           }(), v = g ? parseFloat(window.getComputedStyle(nF(r)).getPropertyValue("margin-".concat(p))) : 0, y = G.map(d), _ = G.map(function (e, t, r) {
                              var n = t === nB(r);
                              return t ? n ? y[t] + v : r[t + 1][h] - e[h] : y[t] + m
                           }).map(nz), {
                              slideSizes: y,
                              slideSizesWithGaps: _
                           }),
                           eo = ei.slideSizes,
                           ea = ei.slideSizesWithGaps,
                           es = (b = nM(Y), {
                              groupSlides: function (e) {
                                 return b ? nL(e).filter(function (e) {
                                    return e % Y == 0
                                 }).map(function (t) {
                                    return e.slice(t, t + Y)
                                 }) : nL(e).reduce(function (e, t) {
                                    var r = ea.slice(nF(e), t + 1).reduce(function (e, t) {
                                       return e + t
                                    }, 0);
                                    return !t || r > Q ? e.concat(t) : e
                                 }, []).map(function (t, r, n) {
                                    return e.slice(t, n[r + 1])
                                 })
                              }
                           }),
                           el = (w = J.startEdge, x = J.endEdge, T = (S = es.groupSlides)(G).map(function (e) {
                              return nF(e)[x] - e[0][w]
                           }).map(nz).map(et.measure), a = nF(P = G.map(function (e) {
                              return Z[w] - e[w]
                           }).map(function (e) {
                              return -nz(e)
                           })) - nF(ea), E = S(P).map(function (e) {
                              return e[0]
                           }).map(function (e, t, r) {
                              var n = t === nB(r);
                              return er && !t ? 0 : er && n ? a : e + T[t]
                           }), {
                              snaps: P,
                              snapsAligned: E
                           }),
                           eu = el.snaps,
                           ec = el.snapsAligned,
                           ef = -nF(eu) + nF(ea),
                           ed = (O = nH(-ef + Q, ec[0]), k = ec.map(O.constrain), {
                              snapsContained: function () {
                                 if (ef <= Q) return [O.max];
                                 if ("keepSnaps" === $) return k;
                                 var e, t, r = (e = k[0], t = nF(k), nH(k.lastIndexOf(e), k.indexOf(t) + 1)),
                                    n = r.min,
                                    i = r.max;
                                 return k.slice(n, i)
                              }()
                           }).snapsContained,
                           eh = er ? ed : ec,
                           ep = {
                              limit: (s = eh[0], l = nF(eh), nH(U ? s - ef : l, s))
                           }.limit,
                           eg = function e(t, r, n) {
                              var i = nH(0, t),
                                 o = i.min,
                                 a = i.constrain,
                                 s = t + 1,
                                 l = u(r);

                              function u(e) {
                                 return n ? nz((s + e) % s) : a(e)
                              }

                              function c(e) {
                                 return l = u(e), f
                              }
                              var f = {
                                 add: function (e) {
                                    return c(l + e)
                                 },
                                 clone: function () {
                                    return e(t, l, n)
                                 },
                                 get: function () {
                                    return l
                                 },
                                 set: c,
                                 min: o,
                                 max: t
                              };
                              return f
                           }(nB(eh), V, U),
                           em = eg.clone(),
                           ev = nL(r),
                           ey = function (e) {
                              var t = 0;

                              function r(e, r) {
                                 return function () {
                                    !!t === e && r()
                                 }
                              }

                              function n() {
                                 t = window.requestAnimationFrame(e)
                              }
                              return {
                                 proceed: r(!0, n),
                                 start: r(!1, n),
                                 stop: r(!0, function () {
                                    window.cancelAnimationFrame(t), t = 0
                                 })
                              }
                           }(function () {
                              U || eO.scrollBounds.constrain(eO.dragHandler.pointerDown()), eO.scrollBody.seek(ew).update();
                              var e = eO.scrollBody.settle(ew);
                              e && !eO.dragHandler.pointerDown() && (eO.animation.stop(), i.emit("settle")), e || i.emit("scroll"), U && (eO.scrollLooper.loop(eO.scrollBody.direction()), eO.slideLooper.loop()), eO.translate.to(eb), eO.animation.proceed()
                           }),
                           e_ = eh[eg.get()],
                           eb = nW(e_),
                           ew = nW(e_),
                           ex = function (e, t, r) {
                              var n = nW(0),
                                 i = nW(0),
                                 o = nW(0),
                                 a = 0,
                                 s = t,
                                 l = r;

                              function u(e) {
                                 return s = e, f
                              }

                              function c(e) {
                                 return l = e, f
                              }
                              var f = {
                                 direction: function () {
                                    return a
                                 },
                                 seek: function (t) {
                                    o.set(t).subtract(e);
                                    var r = 0 + (o.get() - 0) / 100 * (s - 0);
                                    return a = nN(o.get()), o.normalize().multiply(r).subtract(n), o.divide(l), i.add(o), f
                                 },
                                 settle: function (t) {
                                    var r = !(Math.round((t.get() - e.get()) * 100) / 100);
                                    return r && e.set(t), r
                                 },
                                 update: function () {
                                    n.add(i), e.add(n), i.multiply(0)
                                 },
                                 useBaseMass: function () {
                                    return c(r)
                                 },
                                 useBaseSpeed: function () {
                                    return u(t)
                                 },
                                 useMass: c,
                                 useSpeed: u
                              };
                              return f
                           }(eb, W, 1),
                           eS = function (e, t, r, n, i) {
                              var o = n.reachedAny,
                                 a = n.removeOffset,
                                 s = n.constrain;

                              function l(e) {
                                 return e.concat().sort(function (e, t) {
                                    return nz(e) - nz(t)
                                 })[0]
                              }

                              function u(t, n) {
                                 var i = [t, t + r, t - r];
                                 return e ? n ? l(i.filter(function (e) {
                                    return nN(e) === n
                                 })) : l(i) : i[0]
                              }
                              return {
                                 byDistance: function (r, n) {
                                    var l, c = i.get() + r,
                                       f = (l = e ? a(c) : s(c), {
                                          index: t.map(function (e) {
                                             return e - l
                                          }).map(function (e) {
                                             return u(e, 0)
                                          }).map(function (e, t) {
                                             return {
                                                diff: e,
                                                index: t
                                             }
                                          }).sort(function (e, t) {
                                             return nz(e.diff) - nz(t.diff)
                                          })[0].index,
                                          distance: l
                                       }),
                                       d = f.index,
                                       h = f.distance,
                                       p = !e && o(c);
                                    if (!n || p) return {
                                       index: d,
                                       distance: r
                                    };
                                    var g = r + u(t[d] - h, 0);
                                    return {
                                       index: d,
                                       distance: g
                                    }
                                 },
                                 byIndex: function (e, r) {
                                    var n = u(t[e] - i.get(), r);
                                    return {
                                       index: e,
                                       distance: n
                                    }
                                 },
                                 shortcut: u
                              }
                           }(U, eh, ef, ep, ew),
                           eT = function (e, t, r, n, i, o) {
                              function a(n) {
                                 var a = n.distance,
                                    s = n.index !== t.get();
                                 a && (e.start(), i.add(a)), s && (r.set(t.get()), t.set(n.index), o.emit("select"))
                              }
                              return {
                                 distance: function (e, t) {
                                    a(n.byDistance(e, t))
                                 },
                                 index: function (e, r) {
                                    var i = t.clone().set(e);
                                    a(n.byIndex(i.get(), r))
                                 }
                              }
                           }(ey, eg, em, eS, ew, i),
                           eP = function (e, t, r, n, i, o, a) {
                              var s = i.removeOffset,
                                 l = i.constrain,
                                 u = o ? [0, t, -t] : [0],
                                 c = f(u, a);

                              function f(t, i) {
                                 var o, a = t || u,
                                    s = (o = i || 0, r.map(function (e) {
                                       return nH(.5, e - .5).constrain(e * o)
                                    }));
                                 return a.reduce(function (t, i) {
                                    var o = n.map(function (t, n) {
                                       return {
                                          start: t - r[n] + s[n] + i,
                                          end: t + e - s[n] + i,
                                          index: n
                                       }
                                    });
                                    return t.concat(o)
                                 }, [])
                              }
                              return {
                                 check: function (e, t) {
                                    var r = o ? s(e) : l(e);
                                    return (t || c).reduce(function (e, t) {
                                       var n = t.index,
                                          i = t.start,
                                          o = t.end;
                                       return !(-1 !== e.indexOf(n)) && i < r && o > r ? e.concat([n]) : e
                                    }, [])
                                 },
                                 findSlideBounds: f
                              }
                           }(Q, ef, eo, eu, ep, U, H),
                           eE = function (e, t, r, n, i, o, a, s, l, u, c, f, d, h, p, g) {
                              var m = e.cross,
                                 v = ["INPUT", "SELECT", "TEXTAREA"],
                                 y = {
                                    passive: !1
                                 },
                                 _ = nW(0),
                                 b = nU(),
                                 w = nU(),
                                 x = d.measure(20),
                                 S = {
                                    mouse: 300,
                                    touch: 400
                                 },
                                 T = {
                                    mouse: 500,
                                    touch: 600
                                 },
                                 P = p ? 5 : 16,
                                 E = 0,
                                 O = 0,
                                 k = !1,
                                 C = !1,
                                 j = !1,
                                 A = !1;

                              function M(e) {
                                 if ((!(A = !i.isTouchEvent(e)) || 0 === e.button) && (t = e.target.nodeName || "", !(v.indexOf(t) > -1))) {
                                    var t, a, s = nz(n.get() - o.get()) >= 2,
                                       u = A || !s;
                                    k = !0, i.pointerDown(e), _.set(n), n.set(o), l.useBaseMass().useSpeed(80), a = A ? document : r, w.add(a, "touchmove", D, y).add(a, "touchend", R).add(a, "mousemove", D, y).add(a, "mouseup", R), E = i.readPoint(e), O = i.readPoint(e, m), f.emit("pointerDown"), u && (j = !1)
                                 }
                              }

                              function D(e) {
                                 if (!C && !A) {
                                    if (!e.cancelable) return R(e);
                                    var r = i.readPoint(e),
                                       o = i.readPoint(e, m);
                                    if (!(C = nz(r - E) > nz(o - O)) && !j) return R(e)
                                 }
                                 var s = i.pointerMove(e);
                                 !j && s && (j = !0), a.start(), n.add(t.apply(s)), e.preventDefault()
                              }

                              function R(e) {
                                 var r, o, a, d, m = u.byDistance(0, !1).index !== c.get(),
                                    v = i.pointerUp(e) * (p ? T : S)[A ? "mouse" : "touch"],
                                    y = (r = t.apply(v), a = (o = c.clone().add(-1 * nN(r))).get() === c.min || o.get() === c.max, d = u.byDistance(r, !p).distance, p || nz(r) < x ? d : !h && a ? .4 * d : g && m ? .5 * d : u.byIndex(o.get(), 0).distance),
                                    b = function (e, t) {
                                       if (0 === e || 0 === t || nz(e) <= nz(t)) return 0;
                                       var r, n, i = (r = nz(e), n = nz(t), nz(r - n));
                                       return nz(i / e)
                                    }(v, y),
                                    E = nz(n.get() - _.get()) >= .5,
                                    O = m && b > .75,
                                    M = nz(v) < x;
                                 E && !A && (j = !0), C = !1, k = !1, w.removeAll(), l.useSpeed(M ? 9 : O ? 10 : P).useMass(O ? 1 + 2.5 * b : 1), s.distance(y, !p), A = !1, f.emit("pointerUp")
                              }

                              function I(e) {
                                 j && (e.stopPropagation(), e.preventDefault())
                              }
                              return {
                                 addActivationEvents: function () {
                                    b.add(r, "dragstart", function (e) {
                                       return e.preventDefault()
                                    }, y).add(r, "touchmove", function () {}, y).add(r, "touchend", function () {}).add(r, "touchstart", M).add(r, "mousedown", M).add(r, "touchcancel", R).add(r, "contextmenu", R).add(r, "click", I, !0)
                                 },
                                 clickAllowed: function () {
                                    return !j
                                 },
                                 pointerDown: function () {
                                    return k
                                 },
                                 removeAllEvents: function () {
                                    b.removeAll(), w.removeAll()
                                 }
                              }
                           }(J, K, e, ew, function (e) {
                              var t, r;

                              function n(e) {
                                 return "undefined" != typeof TouchEvent && e instanceof TouchEvent
                              }

                              function i(e) {
                                 return e.timeStamp
                              }

                              function o(t, r) {
                                 var i = r || e.scroll;
                                 return (n(t) ? t.touches[0] : t)["client".concat("x" === i ? "X" : "Y")]
                              }
                              return {
                                 isTouchEvent: n,
                                 pointerDown: function (e) {
                                    return t = e, r = e, o(e)
                                 },
                                 pointerMove: function (e) {
                                    var n = o(e) - o(r),
                                       a = i(e) - i(t) > 170;
                                    return r = e, a && (t = e), n
                                 },
                                 pointerUp: function (e) {
                                    if (!t || !r) return 0;
                                    var n = o(r) - o(t),
                                       a = i(e) - i(t),
                                       s = i(e) - i(r) > 170,
                                       l = n / a;
                                    return a && !s && nz(l) > .1 ? l : 0
                                 },
                                 readPoint: o
                              }
                           }(J), eb, ey, eT, ex, eS, eg, i, ee, U, q, X),
                           eO = {
                              containerRect: Z,
                              slideRects: G,
                              animation: ey,
                              axis: J,
                              direction: K,
                              dragHandler: eE,
                              eventStore: nU(),
                              percentOfView: ee,
                              index: eg,
                              indexPrevious: em,
                              limit: ep,
                              location: eb,
                              options: n,
                              scrollBody: ex,
                              scrollBounds: (C = ee.measure(10), j = ee.measure(50), A = !1, {
                                 constrain: function (e) {
                                    if (!A && ep.reachedAny(ew.get()) && ep.reachedAny(eb.get())) {
                                       var t = ep.reachedMin(eb.get()) ? "min" : "max",
                                          r = nz(ep[t] - eb.get()),
                                          n = ew.get() - eb.get(),
                                          i = Math.min(r / j, .85);
                                       ew.subtract(n * i), !e && nz(n) < C && (ew.set(ep.constrain(ew.get())), ex.useSpeed(10).useMass(3))
                                    }
                                 },
                                 toggleActive: function (e) {
                                    A = !e
                                 }
                              }),
                              scrollLooper: (M = [eb, ew], R = (D = nH(ep.min + .1, ep.max + .1)).reachedMin, I = D.reachedMax, {
                                 loop: function (e) {
                                    if (1 === e ? I(eb.get()) : -1 === e && R(eb.get())) {
                                       var t = -1 * e * ef;
                                       M.forEach(function (e) {
                                          return e.add(t)
                                       })
                                    }
                                 }
                              }),
                              scrollProgress: (z = ep.max, N = ep.length, {
                                 get: function (e) {
                                    return -((e - z) / N)
                                 }
                              }),
                              scrollSnaps: eh,
                              scrollTarget: eS,
                              scrollTo: eT,
                              slideLooper: function (e, t, r, n, i, o, a, s, l) {
                                 var u = nL(i),
                                    c = h(d(nL(i).reverse(), o[0] - 1), "end").concat(h(d(u, r - o[0] - 1), "start"));

                                 function f(e, t) {
                                    return e.reduce(function (e, t) {
                                       return e - i[t]
                                    }, t)
                                 }

                                 function d(e, t) {
                                    return e.reduce(function (e, r) {
                                       return f(e, t) > 0 ? e.concat([r]) : e
                                    }, [])
                                 }

                                 function h(r, i) {
                                    var o = "start" === i,
                                       u = a.findSlideBounds([o ? -n : n]);
                                    return r.map(function (r) {
                                       var i = o ? 0 : -n,
                                          a = o ? n : 0,
                                          c = u.filter(function (e) {
                                             return e.index === r
                                          })[0][o ? "end" : "start"],
                                          f = nW(-1),
                                          d = nW(-1),
                                          h = nq(e, t, l[r]);
                                       return {
                                          index: r,
                                          location: d,
                                          translate: h,
                                          target: function () {
                                             return f.set(s.get() > c ? i : a)
                                          }
                                       }
                                    })
                                 }
                                 return {
                                    canLoop: function () {
                                       return c.every(function (e) {
                                          var t = e.index;
                                          return .1 >= f(u.filter(function (e) {
                                             return e !== t
                                          }), r)
                                       })
                                    },
                                    clear: function () {
                                       c.forEach(function (e) {
                                          return e.translate.clear()
                                       })
                                    },
                                    loop: function () {
                                       c.forEach(function (e) {
                                          var t = e.target,
                                             r = e.translate,
                                             n = e.location,
                                             i = t();
                                          i.get() !== n.get() && (0 === i.get() ? r.clear() : r.to(i), n.set(i))
                                       })
                                    },
                                    loopPoints: c
                                 }
                              }(J, K, Q, ef, ea, eh, eP, eb, r),
                              slidesToScroll: es,
                              slidesInView: eP,
                              slideIndexes: ev,
                              target: ew,
                              translate: nq(J, K, t)
                           };
                        return eO
                     }(e, s, l, v, d)).axis.measureSize(e.getBoundingClientRect()), !v.active) return x();
                  if (o.translate.to(o.location), y = r || y, a = f.init(y, E), v.loop) {
                     if (!o.slideLooper.canLoop()) {
                        x(), b({
                           loop: !1
                        }, r), m = c.merge(m, {
                           loop: !0
                        });
                        return
                     }
                     o.slideLooper.loop()
                  }
                  v.draggable && s.offsetParent && l.length && o.dragHandler.addActivationEvents()
               }
            }

            function w(e, t) {
               var r = P();
               x(), b(c.merge({
                  startIndex: r
               }, e), t), d.emit("reInit")
            }

            function x() {
               o.dragHandler.removeAllEvents(), o.animation.stop(), o.eventStore.removeAll(), o.translate.clear(), o.slideLooper.clear(), f.destroy()
            }

            function S(e) {
               var t = o[e ? "target" : "location"].get(),
                  r = v.loop ? "removeOffset" : "constrain";
               return o.slidesInView.check(o.limit[r](t))
            }

            function T(e, t, r) {
               v.active && !g && (o.scrollBody.useBaseMass().useSpeed(t ? 100 : v.speed), o.scrollTo.index(e, r || 0))
            }

            function P() {
               return o.index.get()
            }
            var E = {
               canScrollNext: function () {
                  return o.index.clone().add(1).get() !== P()
               },
               canScrollPrev: function () {
                  return o.index.clone().add(-1).get() !== P()
               },
               clickAllowed: function () {
                  return o.dragHandler.clickAllowed()
               },
               containerNode: function () {
                  return s
               },
               internalEngine: function () {
                  return o
               },
               destroy: function () {
                  g || (g = !0, u.removeAll(), x(), d.emit("destroy"))
               },
               off: p,
               on: h,
               plugins: function () {
                  return a
               },
               previousScrollSnap: function () {
                  return o.indexPrevious.get()
               },
               reInit: w,
               rootNode: function () {
                  return e
               },
               scrollNext: function (e) {
                  T(o.index.clone().add(1).get(), !0 === e, -1)
               },
               scrollPrev: function (e) {
                  T(o.index.clone().add(-1).get(), !0 === e, 1)
               },
               scrollProgress: function () {
                  return o.scrollProgress.get(o.location.get())
               },
               scrollSnapList: function () {
                  return o.scrollSnaps.map(o.scrollProgress.get)
               },
               scrollTo: T,
               selectedScrollSnap: P,
               slideNodes: function () {
                  return l
               },
               slidesInView: S,
               slidesNotInView: function (e) {
                  var t = S(e);
                  return o.slideIndexes.filter(function (e) {
                     return -1 === t.indexOf(e)
                  })
               }
            };
            return b(t, r), u.add(window, "resize", function () {
               var t = c.atMedia(m),
                  r = !c.areEqual(t, v),
                  n = o.axis.measureSize(e.getBoundingClientRect()),
                  i = _ !== n,
                  a = f.haveChanged();
               (i || r || a) && w(), d.emit("resize")
            }), setTimeout(function () {
               return d.emit("init")
            }, 0), E
         }
         n$.globalOptions = void 0, n$.optionsHandler = nX;
         var nZ = {
            active: !0,
            breakpoints: {},
            delay: 4e3,
            jump: !1,
            playOnInit: !0,
            stopOnInteraction: !0,
            stopOnMouseEnter: !1,
            stopOnLastSnap: !1,
            rootNode: null
         };

         function nG(e) {
            var t, r, n, i = n$.optionsHandler(),
               o = i.merge(nZ, nG.globalOptions),
               a = 0,
               s = !1;

            function l() {
               r.off("pointerDown", n), t.stopOnInteraction || r.off("pointerUp", f), c(), a = 0
            }

            function u(e) {
               c(), void 0 !== e && (s = e), a = window.setTimeout(d, t.delay)
            }

            function c() {
               a && window.clearTimeout(a)
            }

            function f() {
               a && (c(), u())
            }

            function d() {
               var e = r.internalEngine().index;
               if (t.stopOnLastSnap && e.get() === e.max) return l();
               r.canScrollNext() ? r.scrollNext(s) : r.scrollTo(0, s), u()
            }
            var h = {
               name: "autoplay",
               options: i.merge(o, e),
               init: function (e) {
                  r = e, s = (t = i.atMedia(h.options)).jump, n = t.stopOnInteraction ? l : c;
                  var o = r.internalEngine().eventStore,
                     a = r.rootNode(),
                     d = t.rootNode && t.rootNode(a) || a;
                  r.on("pointerDown", n), t.stopOnInteraction || r.on("pointerUp", f), t.stopOnMouseEnter && (o.add(d, "mouseenter", n), t.stopOnInteraction || o.add(d, "mouseleave", f)), o.add(document, "visibilitychange", function () {
                     if ("hidden" === document.visibilityState) return c();
                     f()
                  }), o.add(window, "pagehide", function (e) {
                     e.persisted && c()
                  }), t.playOnInit && u()
               },
               destroy: l,
               play: u,
               stop: c,
               reset: f
            };
            return h
         }

         function nK(e) {
            return e.concat().sort(function (e, t) {
               return e.name > t.name ? 1 : -1
            }).map(function (e) {
               return e.options
            })
         }

         function nJ(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = []);
            var r = (0, h.useRef)(n$.optionsHandler()),
               n = (0, h.useRef)(e),
               i = (0, h.useRef)(t),
               o = (0, h.useState)(),
               a = o[0],
               s = o[1],
               l = (0, h.useState)(),
               u = l[0],
               c = l[1],
               f = (0, h.useCallback)(function () {
                  a && a.reInit(n.current, i.current)
               }, [a]);
            return (0, h.useEffect)(function () {
               if ("undefined" != typeof window && window.document && window.document.createElement && u) {
                  n$.globalOptions = nJ.globalOptions;
                  var e = n$(u, n.current, i.current);
                  return s(e),
                     function () {
                        return e.destroy()
                     }
               }
               s(void 0)
            }, [u, s]), (0, h.useEffect)(function () {
               r.current.areEqual(n.current, e) || (n.current = e, f())
            }, [e, f]), (0, h.useEffect)(function () {
               ! function (e, t) {
                  if (e.length !== t.length) return !1;
                  var r = n$.optionsHandler().areEqual,
                     n = nK(e),
                     i = nK(t);
                  return n.every(function (e, t) {
                     return r(e, i[t])
                  })
               }(i.current, t) && (i.current = t, f())
            }, [t, f]), [c, a]
         }
         nG.globalOptions = void 0, nJ.globalOptions = void 0;
         var nQ = r(5245);
         let n0 = (0, h.createContext)({});

         function n1() {
            return (0, h.useContext)(n0)
         }
         let n2 = e => {
            var t;
            let {
               children: r,
               emblaApi: n = {
                  autoplay: !1
               },
               enabled: i = !0,
               customProps: o = {}
            } = e, [a, s] = (0, h.useState)(0), [l, u] = (0, h.useState)(0), c = nG({
               delay: (null == n ? void 0 : null === (t = n.autoplay) || void 0 === t ? void 0 : t.delay) || null
            }, e => e.parentElement), [d, p] = nJ(n, n.autoplay ? [c] : []), g = (0, h.useCallback)(() => {
               p && p.scrollPrev()
            }, [p]), m = (0, h.useCallback)(() => {
               p && p.scrollNext()
            }, [p]), v = (0, h.useCallback)(e => p && p.scrollTo(e), [p]), y = (0, h.useCallback)(() => {
               p && u(Math.max(0, Math.min(1, p.scrollProgress())))
            }, [p]), _ = (0, h.useCallback)(() => {
               s(p.selectedScrollSnap())
            }, [p]);
            return (0, h.useEffect)(() => {
               p && (_(), y(), p.on("select", _), p.on("scroll", y), p.on("reInit", y))
            }, [p]), (0, h.useEffect)(() => {
               !i && p && p.destroy()
            }, [p, i]), (0, f.jsx)(n0.Provider, {
               value: {
                  emblaRef: d,
                  currentIndex: a,
                  setCurrentIndex: s,
                  scrollPrev: g,
                  scrollNext: m,
                  scrollTo: v,
                  scrollProgress: l,
                  customProps: o
               },
               children: r
            })
         };
         n2.Slides = e => {
            let {
               children: t,
               className: r
            } = e, {
               emblaRef: n
            } = n1();
            return (0, f.jsx)("div", {
               className: (0, eb.Z)(nQ.slider, r),
               ref: n,
               children: (0, f.jsx)("div", {
                  className: nQ.container,
                  children: t
               })
            })
         }, r(2099)
      },
      1774: function (e, t, r) {
         "use strict";
         r.d(t, {
            Ue: function () {
               return f
            }
         });
         var n = r(9066),
            i = r(959),
            o = r(7231);
         let {
            useDebugValue: a
         } = i, {
            useSyncExternalStoreWithSelector: s
         } = o, l = !1, u = e => e, c = e => {
            "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
            let t = "function" == typeof e ? (0, n.M)(e) : e,
               r = (e, r) => (function (e, t = u, r) {
                  r && !l && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), l = !0);
                  let n = s(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
                  return a(n), n
               })(t, e, r);
            return Object.assign(r, t), r
         }, f = e => e ? c(e) : c
      },
      1526: function (e, t, r) {
         "use strict";

         function n(e, t) {
            if (Object.is(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            if (e instanceof Map && t instanceof Map) {
               if (e.size !== t.size) return !1;
               for (let [r, n] of e)
                  if (!Object.is(n, t.get(r))) return !1;
               return !0
            }
            if (e instanceof Set && t instanceof Set) {
               if (e.size !== t.size) return !1;
               for (let r of e)
                  if (!t.has(r)) return !1;
               return !0
            }
            let r = Object.keys(e);
            if (r.length !== Object.keys(t).length) return !1;
            for (let n of r)
               if (!Object.prototype.hasOwnProperty.call(t, n) || !Object.is(e[n], t[n])) return !1;
            return !0
         }
         r.d(t, {
            X: function () {
               return n
            }
         })
      },
      7514: function (e, t, r) {
         "use strict";
         r.d(t, {
            F: function () {
               return c
            }
         });
         var n = r(959),
            i = r(7231),
            o = r(9066);
         let {
            useDebugValue: a
         } = n, {
            useSyncExternalStoreWithSelector: s
         } = i, l = e => e, u = (e, t) => {
            let r = (0, o.M)(e),
               n = (e, n = t) => (function (e, t = l, r) {
                  let n = s(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
                  return a(n), n
               })(r, e, n);
            return Object.assign(n, r), n
         }, c = (e, t) => e ? u(e, t) : u
      },
      9066: function (e, t, r) {
         "use strict";
         r.d(t, {
            M: function () {
               return i
            }
         });
         let n = e => {
               let t;
               let r = new Set,
                  n = (e, n) => {
                     let i = "function" == typeof e ? e(t) : e;
                     if (!Object.is(i, t)) {
                        let e = t;
                        t = (null != n ? n : "object" != typeof i || null === i) ? i : Object.assign({}, t, i), r.forEach(r => r(t, e))
                     }
                  },
                  i = () => t,
                  o = {
                     setState: n,
                     getState: i,
                     getInitialState: () => a,
                     subscribe: e => (r.add(e), () => r.delete(e)),
                     destroy: () => {
                        console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), r.clear()
                     }
                  },
                  a = t = e(n, i, o);
               return o
            },
            i = e => e ? n(e) : n
      }
   },
   function (e) {
      var t = function (t) {
         return e(e.s = t)
      };
      e.O(0, [774, 179], function () {
         return t(460), t(162)
      }), _N_E = e.O()
   }
]);