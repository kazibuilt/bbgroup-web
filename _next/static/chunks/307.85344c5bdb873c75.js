(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[307], {
		4319: function (e, t) {
			! function (e) {
				"use strict";
				/*!
				 * EasePack 3.12.2
				 * https://greensock.com
				 *
				 * @license Copyright 2008-2023, GreenSock. All rights reserved.
				 * Subject to the terms at https://greensock.com/standard-license or for
				 * Club GreenSock members, the agreement issued with that membership.
				 * @author: Jack Doyle, jack@greensock.com
				 */
				var t, r, n = function () {
						return t || "undefined" != typeof window && (t = window.gsap) && t.registerPlugin && t
					},
					a = function (e, t) {
						return !!(void 0 === e ? t : e && !~(e + "").indexOf("false"))
					},
					s = function (e) {
						if (t = e || n()) {
							r = t.registerEase;
							var a, s = t.parseEase(),
								i = function (e) {
									return function (t) {
										var r = .5 + t / 2;
										e.config = function (t) {
											return e(2 * (1 - t) * t * r + t * t)
										}
									}
								};
							for (a in s) s[a].config || i(s[a]);
							for (a in r("slow", d), r("expoScale", u), r("rough", h), f) "version" !== a && t.core.globals(a, f[a])
						}
					},
					i = function (e, t, r) {
						var n = (e = Math.min(1, e || .7)) < 1 ? t || 0 === t ? t : .7 : 0,
							s = (1 - e) / 2,
							i = s + e,
							l = a(r);
						return function (e) {
							var t = e + (.5 - e) * n;
							return e < s ? l ? 1 - (e = 1 - e / s) * e : t - (e = 1 - e / s) * e * e * e * t : e > i ? l ? 1 === e ? 0 : 1 - (e = (e - i) / s) * e : t + (e - t) * (e = (e - i) / s) * e * e * e : l ? 1 : t
						}
					},
					l = function (e, r, n) {
						var a = Math.log(r / e),
							s = r - e;
						return n && (n = t.parseEase(n)),
							function (t) {
								return (e * Math.exp(a * (n ? n(t) : t)) - e) / s
							}
					},
					o = function (e, t, r) {
						this.t = e, this.v = t, r && (this.next = r, r.prev = this, this.c = r.v - t, this.gap = r.t - e)
					},
					c = function (e) {
						"object" != typeof e && (e = {
							points: +e || 20
						});
						for (var r, n, s, i, l, c, d, u = e.taper || "none", h = [], f = 0, p = 0 | (+e.points || 20), x = p, m = a(e.randomize, !0), g = a(e.clamp), v = t ? t.parseEase(e.template) : 0, w = .4 * (+e.strength || 1); --x > -1;) r = m ? Math.random() : 1 / p * x, n = v ? v(r) : r, s = "none" === u ? w : "out" === u ? (i = 1 - r) * i * w : "in" === u ? r * r * w : r < .5 ? (i = 2 * r) * i * .5 * w : (i = (1 - r) * 2) * i * .5 * w, m ? n += Math.random() * s - .5 * s : x % 2 ? n += .5 * s : n -= .5 * s, g && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[f++] = {
							x: r,
							y: n
						};
						for (h.sort(function (e, t) {
								return e.x - t.x
							}), c = new o(1, 1, null), x = p; x--;) l = h[x], c = new o(l.x, l.y, c);
						return d = new o(0, 0, c.t ? c : c.next),
							function (e) {
								var t = d;
								if (e > t.t) {
									for (; t.next && e >= t.t;) t = t.next;
									t = t.prev
								} else
									for (; t.prev && e <= t.t;) t = t.prev;
								return d = t, t.v + (e - t.t) / t.gap * t.c
							}
					},
					d = i(.7);
				d.ease = d, d.config = i;
				var u = l(1, 2);
				u.config = l;
				var h = c();
				h.ease = h, h.config = c;
				var f = {
					SlowMo: d,
					RoughEase: h,
					ExpoScaleEase: u
				};
				for (var p in f) f[p].register = s, f[p].version = "3.12.2";
				n() && t.registerPlugin(d), e.EasePack = f, e.ExpoScaleEase = u, e.RoughEase = h, e.SlowMo = d, e.default = f, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t)
		},
		640: function (e, t, r) {
			"use strict";
			var n = r(5893),
				a = r(4179);
			t.Z = e => {
				let {
					children: t,
					href: r,
					target: s,
					mode: i = "white",
					...l
				} = e;
				return (0, n.jsx)(a.Z, {
					href: r,
					target: s,
					className: "button-" + i + " inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] body-mono-10 uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
					...l,
					children: t
				})
			}
		},
		6892: function (e, t, r) {
			"use strict";
			var n = r(5893),
				a = r(7294),
				s = r(6546),
				i = r(8266),
				l = r(2099);
			t.Z = e => {
				let {
					children: t,
					sticky: r = !1,
					zIndex: o = 0
				} = e, c = (0, a.useRef)(null), d = (0, a.useRef)(null), u = (0, i.o)(e => e.headerLoaded), h = (0, i.o)(e => e.setHeaderDark);
				return (0, a.useEffect)(() => {
					if (!u) return;
					let e = document.querySelector(".header");
					return r ? d.current = s.ScrollTrigger.create({
						trigger: c.current,
						start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
						end: () => "bottom-=".concat((0, l.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
						onEnter: () => {
							h(!0)
						},
						onLeave: () => {
							h(!1)
						},
						onEnterBack: () => {
							h(!0)
						},
						onLeaveBack: () => {
							h(!1)
						}
					}) : d.current = s.ScrollTrigger.create({
						trigger: c.current,
						start: () => "top top+=".concat(e.getBoundingClientRect().bottom),
						end: () => "bottom top+=".concat(e.getBoundingClientRect().bottom),
						onEnter: () => {
							h(!0)
						},
						onLeave: () => {
							h(!1)
						},
						onEnterBack: () => {
							h(!0)
						},
						onLeaveBack: () => {
							h(!1)
						}
					}), () => {
						d.current && (d.current.kill(), d.current = null), h(!1)
					}
				}, [u]), (0, n.jsx)("div", {
					ref: c,
					style: {
						zIndex: o
					},
					className: "relative w-full",
					children: t
				})
			}
		},
		6009: function (e, t, r) {
			"use strict";
			r.d(t, {
				Z: function () {
					return h
				}
			});
			var n = r(5893),
				a = r(8266),
				s = r(7294),
				i = r(6038),
				l = r(1831),
				o = () => (0, n.jsxs)("svg", {
					width: "286",
					height: "286",
					viewBox: "0 0 286 286",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, n.jsxs)("g", {
						clipPath: "url(#clip0_4489_62323)",
						children: [(0, n.jsxs)("mask", {
							id: "mask0_4489_62323",
							style: {
								maskType: "alpha"
							},
							maskUnits: "userSpaceOnUse",
							x: "18",
							y: "-49",
							width: "271",
							height: "203",
							children: [(0, n.jsx)("rect", {
								x: "224",
								y: "14.5488",
								width: "194.476",
								height: "73.7032",
								transform: "rotate(149.564 224 14.5488)",
								fill: "url(#paint0_linear_4489_62323)"
							}), (0, n.jsx)("rect", {
								x: "167",
								y: "-19",
								width: "122",
								height: "173",
								fill: "#D9D9D9"
							})]
						}), (0, n.jsx)("g", {
							mask: "url(#mask0_4489_62323)",
							children: (0, n.jsx)("path", {
								opacity: "0.15",
								d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
								stroke: "#575349"
							})
						})]
					}), (0, n.jsxs)("defs", {
						children: [(0, n.jsxs)("linearGradient", {
							id: "paint0_linear_4489_62323",
							x1: "418.476",
							y1: "88.252",
							x2: "224",
							y2: "88.252",
							gradientUnits: "userSpaceOnUse",
							children: [(0, n.jsx)("stop", {
								stopColor: "#F2EFE9",
								stopOpacity: "0"
							}), (0, n.jsx)("stop", {
								offset: "1",
								stopColor: "#F2EFE9"
							})]
						}), (0, n.jsx)("clipPath", {
							id: "clip0_4489_62323",
							children: (0, n.jsx)("rect", {
								width: "286",
								height: "286",
								fill: "white"
							})
						})]
					})]
				}),
				c = r(4319),
				d = r(6546),
				u = r(4508),
				h = e => {
					let {
						index: t,
						slicesLength: r = 1,
						simple: h = !1,
						children: f
					} = e, p = (0, s.useRef)(), x = (0, s.useRef)(), m = (0, s.useRef)(), g = (0, s.useRef)(), v = (0, s.useRef)(), w = (0, s.useRef)(), j = (0, s.useRef)(), y = (0, s.useRef)(), C = (0, s.useRef)(), b = (0, s.useRef)(), k = (0, s.useRef)(0), E = (0, u.LZ)(), N = (0, a.o)(e => e.startTransition), _ = (0, a.o)(e => e.setIsAppear), L = (0, a.o)(e => e.isLoaded), S = (0, a.o)(e => e.isFirstLoaded), M = () => {
						y.current && i.p8.set(y.current, {
							x: window.innerWidth / 2 - 42 - 5,
							y: window.innerHeight / 2 - 40.5,
							transformOrigin: "center",
							rotate: 180,
							scale: 0
						})
					}, R = function () {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							t = document.querySelector(".fade");
						t.classList.remove("opacity-0");
						let r = i.p8.timeline({
							delay: e ? .5 : .2,
							onStart: () => {
								if (e) {
									let e = document.querySelector(".loader");
									e && i.p8.set(e, {
										autoAlpha: 0
									})
								}
							},
							onComplete: () => {
								window.dispatchEvent(new CustomEvent("is-appeared")), E && E.start(), d.ScrollTrigger.refresh()
							}
						});
						r.fromTo(t, {
							autoAlpha: 1
						}, {
							autoAlpha: 0,
							duration: .4,
							ease: "power2.out"
						}, 0).call(() => {
							_(!0)
						}, [], 0)
					}, B = function () {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						M();
						let t = document.querySelector(".fade"),
							r = document.querySelector(".loader");
						j.current.classList.remove("hidden");
						let n = window.innerWidth / 83,
							a = window.innerHeight / 80,
							s = m.current.querySelectorAll("path"),
							l = i.p8.timeline({
								delay: .1,
								onStart: () => {
									i.p8.set([t, r], {
										autoAlpha: 0
									})
								},
								onComplete: () => {
									window.dispatchEvent(new CustomEvent("is-appeared")), E && E.start(), d.ScrollTrigger.refresh(), e && window.dispatchEvent(new CustomEvent("introduction-complete")), x.current && (x.current.style.clipPath = null), j.current.classList.add("hidden"), C.current.classList.add("hidden")
								}
							});
						l.addLabel("start", e ? .8 : 0), e && l.fromTo(k, {
							current: 0
						}, {
							current: 100,
							ease: "linear",
							duration: 2.3,
							onUpdate: () => {
								b.current.innerHTML = k.current < 100 ? "0" + Math.round(k.current) : Math.round(k.current)
							}
						}, 0), l.fromTo(m.current, {
							rotate: 120,
							autoAlpha: 0,
							scale: .2
						}, {
							rotate: 0,
							scale: 1,
							autoAlpha: 1,
							ease: "expo.out",
							duration: 1.9
						}, "start").fromTo(s, {
							scale: .1
						}, {
							scale: 1,
							ease: "expo.out",
							duration: .95
						}, "start+=0.12").fromTo(g.current, {
							scale: .45,
							autoAlpha: 0
						}, {
							scale: 1,
							autoAlpha: 1,
							ease: "power2.out",
							duration: 1.75
						}, "start+=0.08").fromTo(v.current, {
							rotate: -100
						}, {
							rotate: 350,
							ease: "slow(0.1, 0.7)",
							duration: 1.9
						}, "start+=0.2").fromTo(w.current, {
							rotate: -150
						}, {
							rotate: 110,
							ease: "slow(0.2, 0.6)",
							duration: 1.7
						}, "start+=0.3").fromTo(y.current, {
							rotate: 180,
							scale: 0
						}, {
							scale: (n > a ? n : a) + 6,
							rotate: "+=130",
							duration: 1.8,
							ease: "expo.inOut"
						}, "start+=1.2").to([g.current, m.current], {
							autoAlpha: 0,
							ease: "power2.out",
							duration: .4
						}, "<30%").call(() => {
							_(!0)
						}, [], "start+=1.65")
					};
					return (0, s.useEffect)(() => {
						i.p8.registerPlugin(c.SlowMo), S && C.current && C.current.classList.add("hidden")
					}, []), (0, s.useEffect)(() => {
						L && !S ? (E && E.stop(), p.current ? R(!0) : B(!0)) : L || M()
					}, [L, S]), (0, s.useEffect)(() => {
						if (p.current) {
							R();
							return
						}
						N && B()
					}, [N]), 0 !== t || h ? (0, n.jsx)("div", {
						ref: p,
						className: "simple-transition-path",
						children: f
					}) : (0, n.jsxs)(n.Fragment, {
						children: [(0, n.jsx)("div", {
							className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
							children: (0, n.jsx)("div", {
								ref: m,
								className: "svg-wrapper w-[4.267rem]",

							children: (0, n.jsxs)("svg", {
								width: "401",
								height: "85",
								viewBox: "0 0 401 85",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								children: [(0, n.jsx)("path", {
									d: "M379.756 35.7598V28.2878H383.157C383.596 28.2878 383.994 28.3823 384.352 28.5713C384.71 28.7536 384.99 29.0168 385.193 29.361C385.402 29.6985 385.506 30.1001 385.506 30.5659C385.506 31.0384 385.402 31.4535 385.193 31.8112C384.983 32.1622 384.696 32.4389 384.332 32.6414C383.974 32.8372 383.569 32.935 383.117 32.935H380.302V32.0947H382.935C383.4 32.0947 383.772 31.9597 384.048 31.6897C384.332 31.4197 384.474 31.0451 384.474 30.5659C384.474 30.0799 384.332 29.7188 384.048 29.4825C383.772 29.2463 383.404 29.1282 382.945 29.1282H380.738V35.7598H379.756ZM383.967 32.3478L385.81 35.7598H384.717L382.904 32.3478H383.967ZM382.418 40.2147C381.298 40.2147 380.248 40.0054 379.27 39.5869C378.291 39.1685 377.43 38.588 376.688 37.8455C375.945 37.103 375.365 36.2424 374.946 35.2637C374.528 34.285 374.319 33.2354 374.319 32.1149C374.319 30.9945 374.528 29.9449 374.946 28.9662C375.365 27.9875 375.945 27.1269 376.688 26.3844C377.43 25.6419 378.291 25.0614 379.27 24.6429C380.248 24.2245 381.298 24.0152 382.418 24.0152C383.539 24.0152 384.588 24.2245 385.567 24.6429C386.546 25.0614 387.406 25.6419 388.149 26.3844C388.891 27.1269 389.472 27.9875 389.89 28.9662C390.309 29.9449 390.518 30.9945 390.518 32.1149C390.518 33.2354 390.309 34.285 389.89 35.2637C389.472 36.2424 388.891 37.103 388.149 37.8455C387.406 38.588 386.546 39.1685 385.567 39.5869C384.588 40.0054 383.539 40.2147 382.418 40.2147ZM382.418 39.1313C383.714 39.1313 384.892 38.8175 385.952 38.1897C387.018 37.562 387.865 36.7183 388.493 35.6586C389.121 34.5921 389.435 33.4109 389.435 32.1149C389.435 30.819 389.118 29.6412 388.483 28.5814C387.855 27.5217 387.012 26.678 385.952 26.0503C384.892 25.4158 383.714 25.0986 382.418 25.0986C381.122 25.0986 379.941 25.4124 378.875 26.0401C377.815 26.6679 376.971 27.515 376.344 28.5814C375.716 29.6412 375.402 30.819 375.402 32.1149C375.402 33.4042 375.716 34.582 376.344 35.6484C376.971 36.7149 377.815 37.562 378.875 38.1897C379.941 38.8175 381.122 39.1313 382.418 39.1313Z M71.408 61.6454V20.1748H87.2834C90.2803 20.1748 92.771 20.6473 94.7554 21.5923C96.7534 22.5238 98.2451 23.7995 99.2305 25.4194C100.229 27.0394 100.729 28.8753 100.729 30.9272C100.729 32.6147 100.405 34.0591 99.757 35.2606C99.109 36.4485 98.2383 37.4138 97.1448 38.1562C96.0514 38.8987 94.8297 39.4319 93.4797 39.7559V40.1609C94.9512 40.2419 96.3619 40.6942 97.7118 41.5176C99.0753 42.3276 100.189 43.4751 101.053 44.96C101.917 46.445 102.349 48.2404 102.349 50.3463C102.349 52.4928 101.829 54.4232 100.79 56.1376C99.7503 57.8386 98.1843 59.1818 96.0919 60.1672C93.9994 61.1527 91.367 61.6454 88.1946 61.6454H71.408ZM78.9205 55.3682H86.9999C89.7268 55.3682 91.691 54.8484 92.8925 53.809C94.1074 52.756 94.7149 51.406 94.7149 49.7591C94.7149 48.5306 94.4112 47.4237 93.8037 46.4382C93.1962 45.4392 92.3323 44.6563 91.2118 44.0893C90.0913 43.5088 88.7549 43.2186 87.2024 43.2186H78.9205V55.3682ZM78.9205 37.812H86.352C87.6479 37.812 88.8156 37.5758 89.8551 37.1033C90.8946 36.6173 91.7113 35.9356 92.3053 35.0581C92.9127 34.1671 93.2165 33.1142 93.2165 31.8992C93.2165 30.2928 92.6495 28.9698 91.5155 27.9303C90.3951 26.8909 88.7279 26.3711 86.5139 26.3711H78.9205V37.812Z M138.409 61.6454V20.1748H154.284C157.281 20.1748 159.772 20.6473 161.756 21.5923C163.754 22.5238 165.246 23.7995 166.231 25.4194C167.23 27.0394 167.73 28.8753 167.73 30.9272C167.73 32.6147 167.406 34.0591 166.758 35.2606C166.11 36.4485 165.239 37.4138 164.146 38.1562C163.052 38.8987 161.831 39.4319 160.481 39.7559V40.1609C161.952 40.2419 163.363 40.6942 164.713 41.5176C166.076 42.3276 167.19 43.4751 168.054 44.96C168.918 46.445 169.35 48.2404 169.35 50.3463C169.35 52.4928 168.83 54.4232 167.791 56.1376C166.751 57.8386 165.185 59.1818 163.093 60.1672C161 61.1527 158.368 61.6454 155.196 61.6454H138.409ZM145.921 55.3682H154.001C156.728 55.3682 158.692 54.8484 159.893 53.809C161.108 52.756 161.716 51.406 161.716 49.7591C161.716 48.5306 161.412 47.4237 160.805 46.4382C160.197 45.4392 159.333 44.6563 158.213 44.0893C157.092 43.5088 155.756 43.2186 154.203 43.2186H145.921V55.3682ZM145.921 37.812H153.353C154.649 37.812 155.817 37.5758 156.856 37.1033C157.895 36.6173 158.712 35.9356 159.306 35.0581C159.914 34.1671 160.217 33.1142 160.217 31.8992C160.217 30.2928 159.65 28.9698 158.516 27.9303C157.396 26.8909 155.729 26.3711 153.515 26.3711H145.921V37.812Z M116.856 61.6828C114.257 61.6828 112.023 61.2126 110.155 60.2721C108.286 59.3316 106.845 58.0633 105.83 56.4669C104.828 54.8582 104.326 53.0454 104.326 51.0283C104.326 49.5062 104.636 48.1574 105.255 46.9818C105.886 45.8062 106.752 44.7173 107.853 43.7149C108.967 42.7126 110.254 41.7164 111.714 40.7265L118.452 36.1417C119.442 35.4982 120.191 34.8176 120.698 34.0999C121.218 33.3821 121.478 32.5407 121.478 31.5755C121.478 30.7587 121.131 29.9853 120.438 29.2552C119.758 28.5251 118.817 28.1601 117.617 28.1601C116.812 28.1601 116.101 28.3519 115.482 28.7355C114.876 29.1067 114.399 29.5955 114.053 30.2019C113.719 30.8082 113.552 31.4517 113.552 32.1323C113.552 32.9614 113.781 33.8029 114.239 34.6567C114.709 35.5106 115.315 36.3954 116.058 37.3111C116.812 38.2268 117.617 39.1982 118.471 40.2253L136.309 61.126H129.032L114.22 44.1604C113.119 42.8735 112.054 41.6051 111.027 40.3552C110.013 39.1054 109.177 37.8061 108.521 36.4572C107.878 35.096 107.556 33.6235 107.556 32.0395C107.556 30.2452 107.971 28.6427 108.8 27.232C109.629 25.8089 110.786 24.689 112.271 23.8723C113.768 23.0556 115.519 22.6472 117.524 22.6472C119.529 22.6472 121.249 23.0432 122.684 23.8352C124.12 24.6271 125.227 25.679 126.007 26.9907C126.786 28.3024 127.176 29.7316 127.176 31.2785C127.176 33.0728 126.731 34.6815 125.84 36.1046C124.949 37.5153 123.711 38.796 122.127 39.9469L114.443 45.5711C113.18 46.4868 112.277 47.4149 111.733 48.3554C111.188 49.2835 110.916 50.0755 110.916 50.7313C110.916 51.7337 111.17 52.6432 111.677 53.4599C112.184 54.2766 112.896 54.9325 113.812 55.4275C114.74 55.9101 115.822 56.1514 117.06 56.1514C118.421 56.1514 119.764 55.8482 121.088 55.2419C122.412 54.6231 123.618 53.7445 124.707 52.6061C125.796 51.4676 126.663 50.1064 127.306 48.5224C127.95 46.9261 128.271 45.1566 128.271 43.2138H134.044C134.044 45.6144 133.778 47.7057 133.246 49.4877C132.714 51.2572 132.027 52.7546 131.186 53.9796C130.344 55.1924 129.453 56.1638 128.513 56.8939C128.216 57.1042 127.931 57.3146 127.659 57.525C127.387 57.7353 127.102 57.9457 126.805 58.1561C125.468 59.3688 123.903 60.2597 122.109 60.829C120.327 61.3982 118.576 61.6828 116.856 61.6828Z M211.859 33.154C211.616 31.7365 211.116 30.3123 210.36 28.8814C209.618 27.4369 208.625 26.114 207.383 24.9125C206.155 23.7111 204.697 22.7458 203.01 22.0169C201.322 21.2879 199.412 20.9234 197.279 20.9234C194.107 20.9234 191.326 21.7604 188.936 23.4343C186.56 25.0948 184.711 27.4302 183.388 30.4406C182.065 33.4375 181.404 36.9339 181.404 40.9297C181.404 44.8716 182.058 48.3477 183.368 51.3581C184.677 54.3685 186.533 56.7174 188.936 58.4049C191.339 60.0923 194.174 60.9361 197.441 60.9361C200.33 60.9361 202.895 60.2543 205.136 58.8909C207.377 57.5139 209.125 55.543 210.38 52.9781C211.636 50.3997 212.237 47.3015 212.183 43.6836L212.75 44.1696H197.846V42.8737H213.478V44.1696C213.478 47.9495 212.79 51.1894 211.413 53.8893C210.036 56.5757 208.139 58.6411 205.723 60.0856C203.307 61.5165 200.546 62.232 197.441 62.232C193.931 62.232 190.874 61.341 188.268 59.5591C185.676 57.7637 183.665 55.2662 182.234 52.0668C180.816 48.8675 180.108 45.1551 180.108 40.9297C180.108 37.7438 180.513 34.8482 181.323 32.2428C182.146 29.6239 183.314 27.3762 184.826 25.4997C186.351 23.6098 188.167 22.1586 190.273 21.1461C192.379 20.1337 194.714 19.6274 197.279 19.6274C199.709 19.6274 201.855 20.0459 203.718 20.8829C205.581 21.7199 207.167 22.8201 208.477 24.1835C209.8 25.5335 210.846 26.9982 211.616 28.5776C212.399 30.1436 212.912 31.669 213.155 33.154H211.859Z M291.113 40.9297C291.113 45.1551 290.391 48.8675 288.947 52.0668C287.502 55.2662 285.491 57.7637 282.913 59.5591C280.334 61.341 277.344 62.232 273.942 62.232C270.527 62.232 267.53 61.3343 264.951 59.5388C262.373 57.7434 260.362 55.246 258.917 52.0466C257.486 48.8472 256.771 45.1416 256.771 40.9297C256.771 36.7044 257.493 32.9987 258.937 29.8128C260.382 26.6135 262.393 24.116 264.972 22.3206C267.55 20.5252 270.54 19.6274 273.942 19.6274C277.344 19.6274 280.334 20.5252 282.913 22.3206C285.491 24.1025 287.502 26.5932 288.947 29.7926C290.391 32.992 291.113 36.7044 291.113 40.9297ZM289.818 40.9297C289.818 36.9609 289.149 33.478 287.813 30.4811C286.476 27.4707 284.613 25.1285 282.224 23.4546C279.848 21.7671 277.087 20.9234 273.942 20.9234C270.81 20.9234 268.049 21.7604 265.66 23.4343C263.284 25.0948 261.421 27.4302 260.071 30.4406C258.735 33.4375 258.067 36.9339 258.067 40.9297C258.067 44.8716 258.728 48.3477 260.051 51.3581C261.374 54.355 263.223 56.7039 265.599 58.4049C267.989 60.0923 270.77 60.9361 273.942 60.9361C277.087 60.9361 279.855 60.0991 282.244 58.4251C284.634 56.7377 286.497 54.3955 287.833 51.3986C289.17 48.3882 289.831 44.8986 289.818 40.9297Z M330.08 20.1944H331.376V47.6525C331.376 50.4604 330.722 52.9713 329.412 55.1852C328.116 57.3857 326.348 59.1271 324.107 60.4096C321.866 61.6785 319.321 62.313 316.473 62.313C313.651 62.313 311.114 61.6718 308.859 60.3893C306.605 59.1069 304.823 57.3654 303.513 55.165C302.204 52.9511 301.556 50.4469 301.569 47.6525V20.1944H302.865V47.6525C302.865 50.2174 303.453 52.5056 304.627 54.517C305.815 56.5285 307.435 58.1146 309.487 59.2756C311.539 60.4366 313.867 61.017 316.473 61.017C319.078 61.017 321.407 60.4366 323.459 59.2756C325.511 58.1146 327.124 56.5285 328.298 54.517C329.486 52.5056 330.08 50.2174 330.08 47.6525V20.1944Z M341.01 61.665V20.1944H353.159C355.481 20.1944 357.533 20.7142 359.315 21.7536C361.11 22.7931 362.514 24.224 363.527 26.0465C364.553 27.8689 365.066 29.9681 365.066 32.344C365.066 34.6929 364.553 36.7786 363.527 38.6011C362.514 40.41 361.11 41.8342 359.315 42.8737C357.533 43.8996 355.481 44.4126 353.159 44.4126H341.658V43.1167H353.159C355.238 43.1167 357.074 42.6577 358.667 41.7397C360.26 40.8217 361.509 39.5528 362.413 37.9328C363.318 36.3129 363.77 34.4499 363.77 32.344C363.77 30.2246 363.318 28.3481 362.413 26.7147C361.509 25.0813 360.26 23.8055 358.667 22.8876C357.074 21.9561 355.238 21.4904 353.159 21.4904H342.306V61.665H341.01Z M223.006 61.665V20.1944H235.155C237.477 20.1944 239.529 20.6872 241.311 21.6726C243.106 22.6581 244.51 24.035 245.523 25.8035C246.549 27.5719 247.062 29.6441 247.062 32.02C247.062 34.3689 246.549 36.4276 245.523 38.1961C244.51 39.951 243.106 41.3212 241.311 42.3067C239.529 43.2786 237.477 43.7646 235.155 43.7646H223.654V42.4687H235.155C237.234 42.4687 239.07 42.0367 240.663 41.1727C242.256 40.3087 243.505 39.0938 244.409 37.5278C245.314 35.9619 245.766 34.126 245.766 32.02C245.766 29.9006 245.314 28.0512 244.409 26.4717C243.505 24.8923 242.256 23.6706 240.663 22.8066C239.07 21.9291 237.234 21.4904 235.155 21.4904H224.302V61.665H223.006ZM238.8 42.7927L249.006 61.665H247.548L237.342 42.7927H238.8Z",
									fill: "#000000"
								}), (0, n.jsx)("path", {
									d: "M45.1274 61.4483H38.695C38.3648 61.4483 38.1352 61.1198 38.2488 60.8097L53.1066 20.2473C53.1752 20.0601 53.3534 19.9356 53.5528 19.9356H59.9852C60.3154 19.9356 60.545 20.2641 60.4314 20.5742L45.5736 61.1366C45.505 61.3238 45.3269 61.4483 45.1274 61.4483Z M25.8033 61.2906H19.3709C19.0406 61.2906 18.8111 60.962 18.9247 60.6519L33.7824 20.0896C33.851 19.9023 34.0292 19.7778 34.2286 19.7778H40.6611C40.9913 19.7778 41.2208 20.1064 41.1073 20.4165L26.2495 60.9788C26.1809 61.1661 26.0027 61.2906 25.8033 61.2906Z",
									fill: "#E00000"
								})]
							})
						})


						}), (0, n.jsxs)("div", {
							ref: g,
							className: "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
							children: [(0, n.jsxs)("div", {
								className: "absolute w-full h-full",
								ref: v,
								children: [(0, n.jsx)("div", {
									className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
									children: (0, n.jsx)(l.Z, {
										color: "#A39B8B"
									})
								}), (0, n.jsx)("div", {
									className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
									children: (0, n.jsx)(o, {})
								})]
							}), (0, n.jsxs)("div", {
								className: "absolute w-full h-full rounded-full",
								ref: w,
								children: [(0, n.jsx)("div", {
									className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
									children: (0, n.jsx)(l.Z, {
										color: "#A39B8B"
									})
								}), (0, n.jsx)("div", {
									className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
									children: (0, n.jsx)(o, {})
								})]
							})]
						}), (0, n.jsxs)("div", {
							ref: C,
							className: "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono",
							children: [(0, n.jsx)("span", {
								ref: b,
								children: "000"
							}), (0, n.jsx)("span", {
								children: "/"
							}), (0, n.jsx)("span", {
								children: "100"
							})]
						}), (0, n.jsxs)("div", {
							style: {
								clipPath: "url(#svgPath)",
								backfaceVisibility: "hidden",
								transform: "translate3d(0, 0, 0)",
								zIndex: r - t
							},
							ref: x,
							className: "transition-path relative",
							children: [(0, n.jsx)("div", {
								className: "absolute top-0 left-0 w-full h-screen pointer-events-none",
								children: (0, n.jsx)("div", {
									ref: j,
									className: "absolute top-0 left-0 w-full h-full hidden z-1",
									children: (0, n.jsx)("svg", {
										width: "84",
										height: "81",
										className: "w-full h-full",
										children: (0, n.jsx)("defs", {
											children: (0, n.jsx)("clipPath", {
												id: "svgPath",
												children: (0, n.jsx)("path", {
													ref: y,
													d: "M71.6638 76.6744C50.3357 91.0443 -1.13729 65.4997 0.440132 40.5884C1.710243 19.4787 23.2703 -6.18393 58.4749 2.13813C85.0859 8.42874 91.6761 63.191 71.6638 76.6744Z"
												})
											})
										})
									})
								})
							}), f]
						})]
					})
				}
		},
		8307: function (e, t, r) {
			"use strict";
			r.r(t), r.d(t, {
				default: function () {
					return c
				}
			});
			var n = r(5893),
				a = r(640),
				s = r(6892),
				i = r(6009),
				l = () => (0, n.jsx)("svg", {
					width: "7",
					height: "11",
					viewBox: "0 0 7 11",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, n.jsxs)("g", {
						id: "Group 20639",
						children: [(0, n.jsx)("path", {
							id: "Vector 247",
							d: "M3.56762 0.628806V7.77202M3.56762 7.77202L0.800781 5.00518M3.56762 7.77202L6.33446 5.00518",
							stroke: "#575349"
						}), (0, n.jsx)("line", {
							id: "Line 318",
							x1: "0.800781",
							y1: "10.5",
							x2: "6.37012",
							y2: "10.5",
							stroke: "#575349"
						})]
					})
				});
			let o = e => {
				let {
					slice: t
				} = e;
				return (0, n.jsx)(s.Z, {
					children: (0, n.jsxs)("section", {
						className: "bg-white pb-[1.2rem]",
						"data-slice-type": t.slice_type,
						"data-slice-variation": t.variation,
						children: ["default" === t.variation && (0, n.jsxs)("div", {
							className: "mx-container border-b-dark_grey",
							children: [(0, n.jsx)("div", {
								className: "flex justify-center items-center pt-[20rem] mb-[17.1rem]",
								children: (0, n.jsx)("h1", {
									className: "heading-60 text-dark_grey",
									children: t.primary.title
								})
							}), (0, n.jsx)("div", {
								className: "flex justify-start",
								children: (0, n.jsx)("div", {
									className: "font-body-mono uppercase",
									children: new Date(t.primary.date).toLocaleDateString("en", {
										month: "long",
										year: "2-digit",
										day: "2-digit"
									})
								})
							})]
						}), "coverWithButton" === t.variation && (0, n.jsxs)("div", {
							className: "flex flex-col justify-center items-center gap-y-[3.6rem] w-full pt-[22rem] pb-[16.4rem]",
							children: [(0, n.jsx)("h1", {
								className: "w-full lg:w-[43.5%] px-container lg:px-0 font-headings font-medium text-60 leading-[85%] -tracking-0.04 lg:text-160 lg:leading-[75%] lg:-tracking-0.06 text-dark_grey text-center lowercase",
								children: t.primary.title
							}), (0, n.jsxs)(a.Z, {
								href: "".concat(t.primary.link.url),
								target: "_blank",
								mode: "light_beige",
								download: !0,
								children: [t.primary.link_title, (0, n.jsx)("span", {
									className: "ml-[0.8rem] inline-block align-middle",
									children: (0, n.jsx)(l, {})
								})]
							})]
						})]
					})
				})
			};
			var c = e => {
				let {
					slice: t,
					slices: r,
					index: a,
					context: s
				} = e;
				return s && s.popup ? (0, n.jsx)(o, {
					slice: t
				}) : (0, n.jsx)(i.Z, {
					index: a,
					slicesLength: r.length,
					simple: !0,
					children: (0, n.jsx)(o, {
						slice: t
					})
				})
			}
		}
	}
]);