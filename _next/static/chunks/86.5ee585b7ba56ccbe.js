"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [86], {
        1086: function (t, e, a) {
            a.r(e), a.d(e, {
                DitheringContext: function () {
                    return u
                },
                DitheringProvider: function () {
                    return s
                },
                useDithering: function () {
                    return y
                }
            });
            var r = a(1527),
                x = a(9926),
                i = a(2085),
                n = a(3793);
            let l = {
                BAYER_2x2: {
                    matrix: [
                        [0, 3],
                        [2, 1]
                    ].flat(),
                    x: 2,
                    y: 2,
                    max: 4
                },
                BAYER_4x4: {
                    matrix: [
                        [0, 12, 3, 15],
                        [8, 4, 11, 7],
                        [2, 14, 1, 13],
                        [10, 6, 9, 5]
                    ].flat(),
                    x: 4,
                    y: 4,
                    max: 16
                },
                BAYER_8x8: {
                    matrix: [
                        [0, 32, 8, 40, 2, 34, 10, 42],
                        [48, 16, 56, 24, 50, 18, 58, 26],
                        [12, 44, 4, 36, 14, 46, 6, 38],
                        [60, 28, 52, 20, 62, 30, 54, 22],
                        [3, 35, 11, 43, 1, 33, 9, 41],
                        [51, 19, 59, 27, 49, 17, 57, 25],
                        [15, 47, 7, 39, 13, 45, 5, 37],
                        [63, 31, 55, 23, 61, 29, 53, 21]
                    ].flat(),
                    x: 8,
                    y: 8,
                    max: 64
                },
                DOT_4x4: {
                    matrix: [
                        [12, 5, 6, 13],
                        [4, 0, 1, 7],
                        [11, 3, 2, 8],
                        [15, 10, 9, 14]
                    ].flat(),
                    x: 4,
                    y: 4,
                    max: 16
                },
                DOT_6x6: {
                    matrix: [
                        [34, 29, 17, 21, 30, 35],
                        [28, 14, 9, 16, 20, 31],
                        [13, 8, 4, 5, 15, 19],
                        [12, 3, 0, 1, 10, 18],
                        [27, 7, 2, 6, 23, 24],
                        [33, 26, 11, 22, 25, 32]
                    ].flat(),
                    x: 6,
                    y: 6,
                    max: 37
                },
                DOT_6x6_2: {
                    matrix: [
                        [34, 25, 21, 17, 29, 33],
                        [30, 13, 9, 5, 12, 24],
                        [18, 6, 1, 0, 8, 20],
                        [22, 10, 2, 3, 4, 16],
                        [26, 14, 7, 11, 15, 28],
                        [35, 31, 19, 23, 27, 32]
                    ].flat(),
                    x: 6,
                    y: 6,
                    max: 36
                },
                DOT_6x6_3: {
                    matrix: [
                        [30, 22, 16, 21, 33, 35],
                        [24, 11, 7, 9, 26, 28],
                        [13, 5, 0, 2, 14, 19],
                        [15, 3, 1, 4, 12, 18],
                        [27, 8, 6, 10, 25, 29],
                        [32, 20, 17, 23, 31, 34]
                    ].flat(),
                    x: 6,
                    y: 6,
                    max: 36
                },
                DOT_8x8: {
                    matrix: [
                        [3, 9, 17, 27, 25, 15, 7, 1],
                        [11, 29, 38, 46, 44, 36, 23, 5],
                        [19, 40, 52, 58, 56, 50, 34, 13],
                        [31, 48, 60, 63, 62, 54, 42, 21],
                        [30, 47, 59, 63, 61, 53, 41, 20],
                        [18, 39, 51, 57, 55, 49, 33, 12],
                        [10, 28, 37, 45, 43, 35, 22, 4],
                        [2, 8, 16, 26, 24, 14, 6, 0]
                    ].flat(),
                    x: 8,
                    y: 8,
                    max: 65
                },
                VERTICAL_5x3: {
                    matrix: [
                        [9, 3, 0, 6, 12],
                        [10, 4, 1, 7, 13],
                        [11, 5, 2, 8, 14]
                    ].flat(),
                    x: 5,
                    y: 3,
                    max: 15
                },
                HORIZONTAL_3x5: {
                    matrix: [
                        [9, 10, 11],
                        [3, 4, 5],
                        [0, 1, 2],
                        [6, 7, 8],
                        [12, 13, 14]
                    ].flat(),
                    x: 3,
                    y: 5,
                    max: 15
                },
                DOT_DIAGONAL_6x6: {
                    matrix: [
                        [8, 6, 7, 9, 11, 10],
                        [5, 0, 1, 12, 17, 16],
                        [4, 3, 2, 13, 14, 15],
                        [9, 11, 10, 8, 6, 8],
                        [12, 17, 16, 5, 0, 1],
                        [13, 14, 15, 4, 3, 2]
                    ].flat(),
                    x: 6,
                    y: 6,
                    max: 18
                },
                DOT_DIAGONAL_8x8: {
                    matrix: [
                        [24, 10, 12, 26, 35, 47, 49, 37],
                        [8, 0, 2, 14, 45, 59, 61, 51],
                        [22, 6, 4, 16, 43, 57, 63, 53],
                        [30, 20, 18, 28, 33, 41, 55, 39],
                        [34, 46, 48, 36, 25, 11, 13, 27],
                        [44, 58, 60, 50, 9, 1, 3, 15],
                        [42, 56, 62, 52, 23, 7, 5, 17],
                        [32, 40, 54, 38, 31, 21, 19, 29]
                    ].flat(),
                    x: 8,
                    y: 8,
                    max: 64
                },
                DOT_DIAGONAL_8x8_2: {
                    matrix: [
                        [13, 11, 12, 15, 18, 20, 19, 16],
                        [4, 3, 2, 9, 27, 28, 29, 22],
                        [5, 0, 1, 10, 26, 31, 30, 21],
                        [8, 6, 7, 14, 23, 25, 24, 17],
                        [18, 20, 19, 16, 13, 11, 12, 15],
                        [27, 28, 29, 22, 4, 3, 2, 9],
                        [26, 31, 30, 21, 5, 0, 1, 10],
                        [23, 25, 24, 17, 8, 6, 7, 14]
                    ].flat(),
                    x: 8,
                    y: 8,
                    max: 32
                },
                DOT_DIAGONAL_8x8_3: {
                    matrix: [
                        [13, 9, 5, 12, 18, 22, 26, 19],
                        [6, 1, 0, 8, 25, 30, 31, 23],
                        [10, 2, 3, 4, 21, 29, 28, 27],
                        [14, 7, 11, 15, 17, 24, 20, 16],
                        [18, 22, 26, 19, 13, 9, 5, 12],
                        [25, 30, 31, 23, 6, 1, 0, 8],
                        [21, 29, 28, 27, 10, 2, 3, 4],
                        [17, 24, 20, 16, 14, 7, 11, 15]
                    ].flat(),
                    x: 8,
                    y: 8,
                    max: 32
                },
                DOT_DIAGONAL_16x16: {
                    matrix: [
                        [63, 58, 50, 40, 41, 51, 59, 60, 64, 69, 77, 87, 86, 76, 68, 67],
                        [57, 33, 27, 18, 19, 28, 34, 52, 70, 94, 100, 109, 108, 99, 93, 75],
                        [49, 26, 13, 11, 12, 15, 29, 44, 78, 101, 114, 116, 115, 112, 98, 83],
                        [39, 17, 4, 3, 2, 9, 20, 42, 87, 110, 123, 124, 125, 118, 107, 85],
                        [38, 16, 5, 0, 1, 10, 21, 43, 89, 111, 122, 127, 126, 117, 106, 84],
                        [48, 25, 8, 6, 7, 14, 30, 45, 79, 102, 119, 121, 120, 113, 97, 82],
                        [56, 32, 24, 23, 22, 31, 35, 53, 71, 95, 103, 104, 105, 96, 92, 74],
                        [62, 55, 47, 37, 36, 46, 54, 61, 65, 72, 80, 90, 91, 81, 73, 66],
                        [64, 69, 77, 87, 86, 76, 68, 67, 63, 58, 50, 40, 41, 51, 59, 60],
                        [70, 94, 100, 109, 108, 99, 93, 75, 57, 33, 27, 18, 19, 28, 34, 52],
                        [78, 101, 114, 116, 115, 112, 98, 83, 49, 26, 13, 11, 12, 15, 29, 44],
                        [87, 110, 123, 124, 125, 118, 107, 85, 39, 17, 4, 3, 2, 9, 20, 42],
                        [89, 111, 122, 127, 126, 117, 106, 84, 38, 16, 5, 0, 1, 10, 21, 43],
                        [79, 102, 119, 121, 120, 113, 97, 82, 48, 25, 8, 6, 7, 14, 30, 45],
                        [71, 95, 103, 104, 105, 96, 92, 74, 56, 32, 24, 23, 22, 31, 35, 53],
                        [65, 72, 80, 90, 91, 81, 73, 66, 62, 55, 47, 37, 36, 46, 54, 61]
                    ].flat(),
                    x: 16,
                    y: 16,
                    max: 128
                },
                DOT_SPIRAL_5x5: {
                    matrix: [
                        [20, 21, 22, 23, 24],
                        [19, 6, 7, 8, 9],
                        [18, 5, 0, 1, 10],
                        [17, 4, 3, 2, 11],
                        [16, 15, 14, 13, 12]
                    ].flat(),
                    x: 5,
                    y: 5,
                    max: 26
                },
                DOT_HORIZONTAL_6x6: {
                    matrix: [
                        [35, 33, 31, 30, 32, 34],
                        [23, 21, 19, 18, 20, 22],
                        [11, 9, 7, 6, 8, 10],
                        [5, 3, 1, 0, 2, 4],
                        [17, 15, 13, 12, 14, 16],
                        [29, 27, 25, 24, 26, 28]
                    ].flat(),
                    x: 6,
                    y: 6,
                    max: 37
                },
                DOT_VERTICAL_6x6: {
                    matrix: [
                        [35, 23, 11, 5, 17, 29],
                        [33, 21, 9, 3, 15, 27],
                        [31, 19, 7, 1, 13, 25],
                        [30, 18, 6, 0, 12, 24],
                        [32, 20, 8, 2, 14, 26],
                        [34, 22, 10, 4, 16, 28]
                    ].flat(),
                    x: 6,
                    y: 6,
                    max: 37
                }
            };
            var m = a(959),
                o = a(5060);
            let u = (0, m.createContext)();

            function y() {
                return (0, m.useContext)(u)
            }
            let f = {
                color: {
/*                     r: .06,
                    g: .45,
                    b: .98,
                    a: 1 */
                    r: .93,
                    g: .11,
                    b: .14,
                    a: 1
                },
                granularity: 2,
                blending: {
                    opacity: 1
                }
            };

            function s(t) {
                let {
                    children: e,
                    id: a = "dithering"
                } = t, [y, s] = (0, m.useState)(l.BAYER_8x8), [_, c] = (0, m.useState)(), [g, p] = (0, m.useState)(new o.Vector2(y.x, y.y));
                (0, m.useEffect)(() => {
                    p(new o.Vector2(y.x, y.y))
                }, [y]);
                let d = (0, i.st)(),
                    [O, D] = (0, m.useState)(f.granularity),
                    [A, h] = (0, m.useState)(f.color),
                    [T, E] = (0, m.useState)(f.blending.opacity);
                return (0, n.w)(d, a, {
                    granularity: x.types.number(f.granularity, {
                        range: [1, 100],
                        nudgeMultiplier: 1
                    }),
                    mode: x.types.stringLiteral("BAYER_8x8", Object.fromEntries(Object.entries(l).map(t => {
                        let [e] = t;
                        return [e, e]
                    }))),
                    color: x.types.rgba(f.color),
                    opacity: x.types.number(f.blending.opacity, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    })
                }, {
                    onValuesChange: t => {
                        let {
                            granularity: e,
                            mode: a,
                            color: r,
                            opacity: x
                        } = t;
                        D(e), s(l[a]), h(r), E(x)
                    },
                    deps: []
                }), (0, m.useEffect)(() => {
                    let t = document.createElement("canvas"),
                        e = document.createElement("canvas");
                    e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.zIndex = "9999", e.style.width = "128px", e.style.height = "128px";
                    let a = e.getContext("2d"),
                        r = a.createImageData(y.x, y.y),
                        x = new Uint32Array(r.data.buffer);
                    for (let t = 0; t < x.length; t++) {
                        let e = Math.floor(y.matrix[t] / (y.max - .999) * 255);
                        x[t] = -16777216 | e << 16 | e << 8 | e
                    }
                    t.width = y.x, t.height = y.y, t.getContext("2d").putImageData(r, 0, 0), a.drawImage(t, 0, 0, e.width, e.height);
                    let i = new o.CanvasTexture(t);
                    return i.minFilter = i.magFilter = o.NearestFilter, i.generateMipmaps = !1, i.colorSpace = o.LinearSRGBColorSpace, i.format = o.RedFormat, i.flipY = !1, c(i), () => {
                        e.remove()
                    }
                }, [y]), (0, r.jsx)(u.Provider, {
                    value: {
                        texture: _,
                        size: g,
                        granularity: O,
                        color: A,
                        opacity: T
                    },
                    children: e
                })
            }
        }
    }
]);