/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/ */

var firebase = require('./app');
(function () {
  (function () {
    var h,
        aa = aa || {},
        k = this,
        m = function m(a) {
      return void 0 !== a;
    },
        p = function p(a) {
      return "string" == typeof a;
    },
        ba = function ba(a) {
      return "boolean" == typeof a;
    },
        ca = function ca(a) {
      return "number" == typeof a;
    },
        da = function da() {},
        ea = function ea(a) {
      var b = typeof a;if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
    },
        fa = function fa(a) {
      return null === a;
    },
        ga = function ga(a) {
      return "array" == ea(a);
    },
        ha = function ha(a) {
      var b = ea(a);return "array" == b || "object" == b && "number" == typeof a.length;
    },
        q = function q(a) {
      return "function" == ea(a);
    },
        r = function r(a) {
      var b = typeof a;return "object" == b && null != a || "function" == b;
    },
        ia = function ia(a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
        ja = function ja(a, b, c) {
      if (!a) throw Error();if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);return function () {
          var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
        };
      }return function () {
        return a.apply(b, arguments);
      };
    },
        _t = function t(a, b, c) {
      _t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;return _t.apply(null, arguments);
    },
        ka = function ka(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);return function () {
        var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b);
      };
    },
        la = Date.now || function () {
      return +new Date();
    },
        u = function u(a, b) {
      function c() {}c.prototype = b.prototype;a.Nc = b.prototype;a.prototype = new c();a.prototype.constructor = a;a.dg = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
          d[e - 2] = arguments[e];
        }return b.prototype[c].apply(a, d);
      };
    };var v = function v(a) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, v);else {
        var b = Error().stack;b && (this.stack = b);
      }a && (this.message = String(a));
    };u(v, Error);v.prototype.name = "CustomError";var ma = function ma(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
        d += c.shift() + e.shift();
      }return d + c.join("%s");
    },
        na = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    },
        va = function va(a) {
      if (!oa.test(a)) return a;-1 != a.indexOf("&") && (a = a.replace(pa, "&amp;"));-1 != a.indexOf("<") && (a = a.replace(qa, "&lt;"));-1 != a.indexOf(">") && (a = a.replace(ra, "&gt;"));-1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));-1 != a.indexOf("'") && (a = a.replace(ta, "&#39;"));-1 != a.indexOf("\x00") && (a = a.replace(ua, "&#0;"));return a;
    },
        pa = /&/g,
        qa = /</g,
        ra = />/g,
        sa = /"/g,
        ta = /'/g,
        ua = /\x00/g,
        oa = /[\x00&<>"']/,
        w = function w(a, b) {
      return -1 != a.indexOf(b);
    },
        wa = function wa(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };var xa = function xa(a, b) {
      b.unshift(a);v.call(this, ma.apply(null, b));b.shift();
    };u(xa, v);xa.prototype.name = "AssertionError";
    var ya = function ya(a, b, c, d) {
      var e = "Assertion failed";if (c) {
        e += ": " + c;var f = d;
      } else a && (e += ": " + a, f = b);throw new xa("" + e, f || []);
    },
        x = function x(a, b, c) {
      a || ya("", null, b, Array.prototype.slice.call(arguments, 2));
    },
        za = function za(a, b) {
      throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
        Aa = function Aa(a, b, c) {
      ca(a) || ya("Expected number but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));return a;
    },
        Ba = function Ba(a, b, c) {
      p(a) || ya("Expected string but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
        Ca = function Ca(a, b, c) {
      q(a) || ya("Expected function but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    };var Ea = function Ea() {
      this.Mc = "";this.He = Da;
    };Ea.prototype.Jb = !0;Ea.prototype.Gb = function () {
      return this.Mc;
    };Ea.prototype.toString = function () {
      return "Const{" + this.Mc + "}";
    };var Fa = function Fa(a) {
      if (a instanceof Ea && a.constructor === Ea && a.He === Da) return a.Mc;za("expected object of type Const, got '" + a + "'");return "type_error:Const";
    },
        Da = {},
        Ga = function Ga(a) {
      var b = new Ea();b.Mc = a;return b;
    };Ga("");var Ia = function Ia() {
      this.Fc = "";this.Ie = Ha;
    };Ia.prototype.Jb = !0;Ia.prototype.Gb = function () {
      return this.Fc;
    };Ia.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.Fc + "}";
    };
    var Ja = function Ja(a) {
      if (a instanceof Ia && a.constructor === Ia && a.Ie === Ha) return a.Fc;za("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ea(a));return "type_error:TrustedResourceUrl";
    },
        La = function La(a, b) {
      a = Ka(a, b);b = new Ia();b.Fc = a;return b;
    },
        Ka = function Ka(a, b) {
      var c = Fa(a);if (!Ma.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);return c.replace(Na, function (a, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));a = b[e];return a instanceof Ea ? Fa(a) : encodeURIComponent(String(a));
      });
    },
        Na = /%{(\w+)}/g,
        Ma = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,
        Ha = {};var Oa = Array.prototype.indexOf ? function (a, b, c) {
      x(null != a.length);return Array.prototype.indexOf.call(a, b, c);
    } : function (a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;for (; c < a.length; c++) {
        if (c in a && a[c] === b) return c;
      }return -1;
    },
        y = Array.prototype.forEach ? function (a, b, c) {
      x(null != a.length);Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) {
        f in e && b.call(c, e[f], f, a);
      }
    },
        Pa = function Pa(a, b) {
      for (var c = p(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
        d in c && b.call(void 0, c[d], d, a);
      }
    },
        Qa = Array.prototype.map ? function (a, b, c) {
      x(null != a.length);return Array.prototype.map.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, g = 0; g < d; g++) {
        g in f && (e[g] = b.call(c, f[g], g, a));
      }return e;
    },
        Ra = Array.prototype.some ? function (a, b, c) {
      x(null != a.length);return Array.prototype.some.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) {
        if (f in e && b.call(c, e[f], f, a)) return !0;
      }return !1;
    },
        Ta = function Ta(a) {
      a: {
        var b = Sa;for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++) {
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;break a;
          }
        }b = -1;
      }return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
    },
        Ua = function Ua(a, b) {
      return 0 <= Oa(a, b);
    },
        Wa = function Wa(a, b) {
      b = Oa(a, b);var c;(c = 0 <= b) && Va(a, b);return c;
    },
        Va = function Va(a, b) {
      x(null != a.length);return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
        Xa = function Xa(a, b) {
      var c = 0;Pa(a, function (d, e) {
        b.call(void 0, d, e, a) && Va(a, e) && c++;
      });
    },
        Ya = function Ya(a) {
      return Array.prototype.concat.apply([], arguments);
    },
        Za = function Za(a) {
      var b = a.length;if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) {
          c[d] = a[d];
        }return c;
      }return [];
    };var $a = function $a(a) {
      return Qa(a, function (a) {
        a = a.toString(16);return 1 < a.length ? a : "0" + a;
      }).join("");
    };var ab;a: {
      var bb = k.navigator;if (bb) {
        var cb = bb.userAgent;if (cb) {
          ab = cb;break a;
        }
      }ab = "";
    }var z = function z(a) {
      return w(ab, a);
    };var db = function db(a, b) {
      for (var c in a) {
        b.call(void 0, a[c], c, a);
      }
    },
        eb = function eb(a, b) {
      for (var c in a) {
        if (b.call(void 0, a[c], c, a)) return !0;
      }return !1;
    },
        fb = function fb(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = a[d];
      }return b;
    },
        gb = function gb(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = d;
      }return b;
    },
        hb = function hb(a) {
      for (var b in a) {
        return !1;
      }return !0;
    },
        ib = function ib(a, b) {
      for (var c in a) {
        if (!(c in b) || a[c] !== b[c]) return !1;
      }for (c in b) {
        if (!(c in a)) return !1;
      }return !0;
    },
        jb = function jb(a) {
      var b = {},
          c;for (c in a) {
        b[c] = a[c];
      }return b;
    },
        kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        lb = function lb(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];for (c in d) {
          a[c] = d[c];
        }for (var f = 0; f < kb.length; f++) {
          c = kb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
    };var mb = function mb(a) {
      mb[" "](a);return a;
    };mb[" "] = da;var ob = function ob(a, b) {
      var c = nb;return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    };var qb = z("Opera"),
        A = z("Trident") || z("MSIE"),
        rb = z("Edge"),
        sb = rb || A,
        tb = z("Gecko") && !(w(ab.toLowerCase(), "webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        ub = w(ab.toLowerCase(), "webkit") && !z("Edge"),
        vb = function vb() {
      var a = k.document;return a ? a.documentMode : void 0;
    },
        wb;
    a: {
      var xb = "",
          yb = function () {
        var a = ab;if (tb) return (/rv\:([^\);]+)(\)|;)/.exec(a)
        );if (rb) return (/Edge\/([\d\.]+)/.exec(a)
        );if (A) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        );if (ub) return (/WebKit\/(\S+)/.exec(a)
        );if (qb) return (/(?:Version)[ \/]?(\S+)/.exec(a)
        );
      }();yb && (xb = yb ? yb[1] : "");if (A) {
        var zb = vb();if (null != zb && zb > parseFloat(xb)) {
          wb = String(zb);break a;
        }
      }wb = xb;
    }
    var Ab = wb,
        nb = {},
        B = function B(a) {
      return ob(a, function () {
        for (var b = 0, c = na(String(Ab)).split("."), d = na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
              l = d[f] || "";do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];if (0 == g[0].length && 0 == l[0].length) break;b = wa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || wa(0 == g[2].length, 0 == l[2].length) || wa(g[2], l[2]);g = g[3];l = l[3];
          } while (0 == b);
        }return 0 <= b;
      });
    },
        Bb;var Cb = k.document;
    Bb = Cb && A ? vb() || ("CSS1Compat" == Cb.compatMode ? parseInt(Ab, 10) : 5) : void 0;var Db = null,
        Eb = null,
        Gb = function Gb(a) {
      var b = "";Fb(a, function (a) {
        b += String.fromCharCode(a);
      });return b;
    },
        Fb = function Fb(a, b) {
      function c(b) {
        for (; d < a.length;) {
          var c = a.charAt(d++),
              e = Eb[c];if (null != e) return e;if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
        }return b;
      }Hb();for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            l = c(64);if (64 === l && -1 === e) break;b(e << 2 | f >> 4);64 != g && (b(f << 4 & 240 | g >> 2), 64 != l && b(g << 6 & 192 | l));
      }
    },
        Hb = function Hb() {
      if (!Db) {
        Db = {};Eb = {};for (var a = 0; 65 > a; a++) {
          Db[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Eb[Db[a]] = a, 62 <= a && (Eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
        }
      }
    };var Ib = function Ib() {
      this.Fa = -1;
    };var Lb = function Lb(a, b) {
      this.Fa = 64;this.lc = k.Uint8Array ? new Uint8Array(this.Fa) : Array(this.Fa);this.Rc = this.kb = 0;this.i = [];this.wf = a;this.ge = b;this.Xf = k.Int32Array ? new Int32Array(64) : Array(64);m(Jb) || (Jb = k.Int32Array ? new Int32Array(Kb) : Kb);this.reset();
    },
        Jb;u(Lb, Ib);for (var Mb = [], Nb = 0; 63 > Nb; Nb++) {
      Mb[Nb] = 0;
    }var Ob = Ya(128, Mb);Lb.prototype.reset = function () {
      this.Rc = this.kb = 0;this.i = k.Int32Array ? new Int32Array(this.ge) : Za(this.ge);
    };
    var Pb = function Pb(a) {
      var b = a.lc;x(b.length == a.Fa);for (var c = a.Xf, d = 0, e = 0; e < b.length;) {
        c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
      }for (b = 16; 64 > b; b++) {
        d = c[b - 15] | 0;e = c[b - 2] | 0;e = (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;var f = (c[b - 16] | 0) + ((d >>> 7 | d << 25) ^ (d >>> 18 | d << 14) ^ d >>> 3) | 0;var g = (c[b - 7] | 0) + e | 0;c[b] = f + g | 0;
      }var d = a.i[0] | 0,
          e = a.i[1] | 0,
          l = a.i[2] | 0,
          n = a.i[3] | 0,
          C = a.i[4] | 0,
          pb = a.i[5] | 0,
          Xb = a.i[6] | 0;f = a.i[7] | 0;for (b = 0; 64 > b; b++) {
        var Wh = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & l ^ e & l) | 0;g = C & pb ^ ~C & Xb;f = f + ((C >>> 6 | C << 26) ^ (C >>> 11 | C << 21) ^ (C >>> 25 | C << 7)) | 0;g = g + (Jb[b] | 0) | 0;g = f + (g + (c[b] | 0) | 0) | 0;f = Xb;Xb = pb;pb = C;C = n + g | 0;n = l;l = e;e = d;d = g + Wh | 0;
      }a.i[0] = a.i[0] + d | 0;a.i[1] = a.i[1] + e | 0;a.i[2] = a.i[2] + l | 0;a.i[3] = a.i[3] + n | 0;a.i[4] = a.i[4] + C | 0;a.i[5] = a.i[5] + pb | 0;a.i[6] = a.i[6] + Xb | 0;a.i[7] = a.i[7] + f | 0;
    };
    Lb.prototype.update = function (a, b) {
      m(b) || (b = a.length);var c = 0,
          d = this.kb;if (p(a)) for (; c < b;) {
        this.lc[d++] = a.charCodeAt(c++), d == this.Fa && (Pb(this), d = 0);
      } else if (ha(a)) for (; c < b;) {
        var e = a[c++];if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");this.lc[d++] = e;d == this.Fa && (Pb(this), d = 0);
      } else throw Error("message must be string or array");this.kb = d;this.Rc += b;
    };
    Lb.prototype.digest = function () {
      var a = [],
          b = 8 * this.Rc;56 > this.kb ? this.update(Ob, 56 - this.kb) : this.update(Ob, this.Fa - (this.kb - 56));for (var c = 63; 56 <= c; c--) {
        this.lc[c] = b & 255, b /= 256;
      }Pb(this);for (c = b = 0; c < this.wf; c++) {
        for (var d = 24; 0 <= d; d -= 8) {
          a[b++] = this.i[c] >> d & 255;
        }
      }return a;
    };
    var Kb = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];var Rb = function Rb() {
      Lb.call(this, 8, Qb);
    };u(Rb, Lb);var Qb = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];var Sb = function Sb() {
      this.Ia = this.Ia;this.Cc = this.Cc;
    };Sb.prototype.Ia = !1;Sb.prototype.isDisposed = function () {
      return this.Ia;
    };Sb.prototype.hb = function () {
      if (this.Cc) for (; this.Cc.length;) {
        this.Cc.shift()();
      }
    };var Tb = !A || 9 <= Number(Bb),
        Ub = A && !B("9");!ub || B("528");tb && B("1.9b") || A && B("8") || qb && B("9.5") || ub && B("528");tb && !B("8") || A && B("9");var Vb = function () {
      if (!k.addEventListener || !Object.defineProperty) return !1;var a = !1,
          b = Object.defineProperty({}, "passive", { get: function get() {
          a = !0;
        } });k.addEventListener("test", null, b);k.removeEventListener("test", null, b);return a;
    }();var Wb = function Wb(a, b) {
      this.type = a;this.currentTarget = this.target = b;this.defaultPrevented = this.Ta = !1;this.re = !0;
    };Wb.prototype.stopPropagation = function () {
      this.Ta = !0;
    };Wb.prototype.preventDefault = function () {
      this.defaultPrevented = !0;this.re = !1;
    };var Yb = function Yb(a, b) {
      Wb.call(this, a ? a.type : "");this.relatedTarget = this.currentTarget = this.target = null;this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;this.key = "";this.charCode = this.keyCode = 0;this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;this.la = this.state = null;a && this.init(a, b);
    };u(Yb, Wb);
    Yb.prototype.init = function (a, b) {
      var c = this.type = a.type,
          d = a.changedTouches ? a.changedTouches[0] : null;this.target = a.target || a.srcElement;this.currentTarget = b;if (b = a.relatedTarget) {
        if (tb) {
          a: {
            try {
              mb(b.nodeName);var e = !0;break a;
            } catch (f) {}e = !1;
          }e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);this.relatedTarget = b;null === d ? (this.offsetX = ub || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = ub || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);this.button = a.button;this.keyCode = a.keyCode || 0;this.key = a.key || "";this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);this.ctrlKey = a.ctrlKey;this.altKey = a.altKey;this.shiftKey = a.shiftKey;this.metaKey = a.metaKey;this.state = a.state;this.la = a;a.defaultPrevented && this.preventDefault();
    };Yb.prototype.stopPropagation = function () {
      Yb.Nc.stopPropagation.call(this);this.la.stopPropagation ? this.la.stopPropagation() : this.la.cancelBubble = !0;
    };Yb.prototype.preventDefault = function () {
      Yb.Nc.preventDefault.call(this);var a = this.la;if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Ub) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };Yb.prototype.af = function () {
      return this.la;
    };var Zb = "closure_listenable_" + (1E6 * Math.random() | 0),
        $b = 0;var ac = function ac(a, b, c, d, e) {
      this.listener = a;this.Gc = null;this.src = b;this.type = c;this.capture = !!d;this.qc = e;this.key = ++$b;this.tb = this.kc = !1;
    },
        bc = function bc(a) {
      a.tb = !0;a.listener = null;a.Gc = null;a.src = null;a.qc = null;
    };var cc = function cc(a) {
      this.src = a;this.I = {};this.fc = 0;
    };cc.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();a = this.I[f];a || (a = this.I[f] = [], this.fc++);var g = dc(a, b, d, e);-1 < g ? (b = a[g], c || (b.kc = !1)) : (b = new ac(b, this.src, f, !!d, e), b.kc = c, a.push(b));return b;
    };cc.prototype.remove = function (a, b, c, d) {
      a = a.toString();if (!(a in this.I)) return !1;var e = this.I[a];b = dc(e, b, c, d);return -1 < b ? (bc(e[b]), Va(e, b), 0 == e.length && (delete this.I[a], this.fc--), !0) : !1;
    };
    var ec = function ec(a, b) {
      var c = b.type;c in a.I && Wa(a.I[c], b) && (bc(b), 0 == a.I[c].length && (delete a.I[c], a.fc--));
    };cc.prototype.gd = function (a, b, c, d) {
      a = this.I[a.toString()];var e = -1;a && (e = dc(a, b, c, d));return -1 < e ? a[e] : null;
    };cc.prototype.hasListener = function (a, b) {
      var c = m(a),
          d = c ? a.toString() : "",
          e = m(b);return eb(this.I, function (a) {
        for (var f = 0; f < a.length; ++f) {
          if (!(c && a[f].type != d || e && a[f].capture != b)) return !0;
        }return !1;
      });
    };
    var dc = function dc(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];if (!f.tb && f.listener == b && f.capture == !!c && f.qc == d) return e;
      }return -1;
    };var fc = "closure_lm_" + (1E6 * Math.random() | 0),
        gc = {},
        hc = 0,
        jc = function jc(a, b, c, d, e) {
      if (d && d.once) ic(a, b, c, d, e);else if (ga(b)) for (var f = 0; f < b.length; f++) {
        jc(a, b[f], c, d, e);
      } else c = kc(c), a && a[Zb] ? a.listen(b, c, r(d) ? !!d.capture : !!d, e) : lc(a, b, c, !1, d, e);
    },
        lc = function lc(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");var g = r(e) ? !!e.capture : !!e,
          l = mc(a);l || (a[fc] = l = new cc(a));c = l.add(b, c, d, g, f);if (!c.Gc) {
        d = nc();c.Gc = d;d.src = a;d.listener = c;if (a.addEventListener) Vb || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(oc(b.toString()), d);else throw Error("addEventListener and attachEvent are unavailable.");hc++;
      }
    },
        nc = function nc() {
      var a = pc,
          b = Tb ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);if (!c) return c;
      };return b;
    },
        ic = function ic(a, b, c, d, e) {
      if (ga(b)) for (var f = 0; f < b.length; f++) {
        ic(a, b[f], c, d, e);
      } else c = kc(c), a && a[Zb] ? qc(a, b, c, r(d) ? !!d.capture : !!d, e) : lc(a, b, c, !0, d, e);
    },
        rc = function rc(a, b, c, d, e) {
      if (ga(b)) for (var f = 0; f < b.length; f++) {
        rc(a, b[f], c, d, e);
      } else d = r(d) ? !!d.capture : !!d, c = kc(c), a && a[Zb] ? a.da.remove(String(b), c, d, e) : a && (a = mc(a)) && (b = a.gd(b, c, d, e)) && sc(b);
    },
        sc = function sc(a) {
      if (!ca(a) && a && !a.tb) {
        var b = a.src;if (b && b[Zb]) ec(b.da, a);else {
          var c = a.type,
              d = a.Gc;b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(oc(c), d);hc--;(c = mc(b)) ? (ec(c, a), 0 == c.fc && (c.src = null, b[fc] = null)) : bc(a);
        }
      }
    },
        oc = function oc(a) {
      return a in gc ? gc[a] : gc[a] = "on" + a;
    },
        uc = function uc(a, b, c, d) {
      var e = !0;if (a = mc(a)) if (b = a.I[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];f && f.capture == c && !f.tb && (f = tc(f, d), e = e && !1 !== f);
      }return e;
    },
        tc = function tc(a, b) {
      var c = a.listener,
          d = a.qc || a.src;a.kc && sc(a);return c.call(d, b);
    },
        pc = function pc(a, b) {
      if (a.tb) return !0;if (!Tb) {
        if (!b) a: {
          b = ["window", "event"];for (var c = k, d; d = b.shift();) {
            if (null != c[d]) c = c[d];else {
              b = null;break a;
            }
          }b = c;
        }d = b;b = new Yb(d, this);c = !0;if (!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;if (0 == d.keyCode) try {
              d.keyCode = -1;break a;
            } catch (g) {
              e = !0;
            }if (e || void 0 == d.returnValue) d.returnValue = !0;
          }d = [];for (e = b.currentTarget; e; e = e.parentNode) {
            d.push(e);
          }for (var e = a.type, f = d.length - 1; !b.Ta && 0 <= f; f--) {
            b.currentTarget = d[f], a = uc(d[f], e, !0, b), c = c && a;
          }for (f = 0; !b.Ta && f < d.length; f++) {
            b.currentTarget = d[f], a = uc(d[f], e, !1, b), c = c && a;
          }
        }return c;
      }return tc(a, new Yb(b, this));
    },
        mc = function mc(a) {
      a = a[fc];return a instanceof cc ? a : null;
    },
        vc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        kc = function kc(a) {
      x(a, "Listener can not be null.");if (q(a)) return a;x(a.handleEvent, "An object listener must have handleEvent method.");a[vc] || (a[vc] = function (b) {
        return a.handleEvent(b);
      });
      return a[vc];
    };var wc = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var yc = function yc() {
      this.ta = "";this.Ge = xc;
    };yc.prototype.Jb = !0;yc.prototype.Gb = function () {
      return this.ta;
    };yc.prototype.toString = function () {
      return "SafeUrl{" + this.ta + "}";
    };
    var zc = function zc(a) {
      if (a instanceof yc && a.constructor === yc && a.Ge === xc) return a.ta;za("expected object of type SafeUrl, got '" + a + "' of type " + ea(a));return "type_error:SafeUrl";
    },
        Ac = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Cc = function Cc(a) {
      if (a instanceof yc) return a;a = a.Jb ? a.Gb() : String(a);Ac.test(a) || (a = "about:invalid#zClosurez");return Bc(a);
    },
        xc = {},
        Bc = function Bc(a) {
      var b = new yc();b.ta = a;return b;
    };Bc("about:blank");var Fc = function Fc(a) {
      var b = [];Dc(new Ec(), a, b);return b.join("");
    },
        Ec = function Ec() {
      this.Hc = void 0;
    },
        Dc = function Dc(a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (ga(b)) {
            var d = b;b = d.length;c.push("[");for (var e = "", f = 0; f < b; f++) {
              c.push(e), e = d[f], Dc(a, a.Hc ? a.Hc.call(d, String(f), e) : e, c), e = ",";
            }c.push("]");return;
          }if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");f = "";for (d in b) {
              Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Gc(d, c), c.push(":"), Dc(a, a.Hc ? a.Hc.call(b, d, e) : e, c), f = ","));
            }c.push("}");return;
          }
        }switch (typeof b) {case "string":
            Gc(b, c);break;case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");break;case "boolean":
            c.push(String(b));break;case "function":
            c.push("null");break;default:
            throw Error("Unknown type: " + typeof b);}
      }
    },
        Hc = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        Ic = /\uffff/.test("\uFFFF") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        Gc = function Gc(a, b) {
      b.push('"', a.replace(Ic, function (a) {
        var b = Hc[a];b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Hc[a] = b);return b;
      }), '"');
    };var Jc = function Jc() {};Jc.prototype.Nd = null;var Kc = function Kc(a) {
      return a.Nd || (a.Nd = a.nd());
    };var Lc,
        Mc = function Mc() {};u(Mc, Jc);Mc.prototype.mc = function () {
      var a = Nc(this);return a ? new ActiveXObject(a) : new XMLHttpRequest();
    };Mc.prototype.nd = function () {
      var a = {};Nc(this) && (a[0] = !0, a[1] = !0);return a;
    };
    var Nc = function Nc(a) {
      if (!a.fe && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];try {
            return new ActiveXObject(d), a.fe = d;
          } catch (e) {}
        }throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }return a.fe;
    };Lc = new Mc();var Oc = function Oc() {};u(Oc, Jc);Oc.prototype.mc = function () {
      var a = new XMLHttpRequest();if ("withCredentials" in a) return a;if ("undefined" != typeof XDomainRequest) return new Pc();throw Error("Unsupported browser");
    };Oc.prototype.nd = function () {
      return {};
    };
    var Pc = function Pc() {
      this.ja = new XDomainRequest();this.readyState = 0;this.onreadystatechange = null;this.responseText = "";this.status = -1;this.statusText = this.responseXML = null;this.ja.onload = _t(this.df, this);this.ja.onerror = _t(this.be, this);this.ja.onprogress = _t(this.ef, this);this.ja.ontimeout = _t(this.ff, this);
    };h = Pc.prototype;h.open = function (a, b, c) {
      if (null != c && !c) throw Error("Only async requests are supported.");this.ja.open(a, b);
    };
    h.send = function (a) {
      if (a) {
        if ("string" == typeof a) this.ja.send(a);else throw Error("Only string data is supported");
      } else this.ja.send();
    };h.abort = function () {
      this.ja.abort();
    };h.setRequestHeader = function () {};h.getResponseHeader = function (a) {
      return "content-type" == a.toLowerCase() ? this.ja.contentType : "";
    };h.df = function () {
      this.status = 200;this.responseText = this.ja.responseText;Qc(this, 4);
    };h.be = function () {
      this.status = 500;this.responseText = "";Qc(this, 4);
    };h.ff = function () {
      this.be();
    };
    h.ef = function () {
      this.status = 200;Qc(this, 1);
    };var Qc = function Qc(a, b) {
      a.readyState = b;if (a.onreadystatechange) a.onreadystatechange();
    };Pc.prototype.getAllResponseHeaders = function () {
      return "content-type: " + this.ja.contentType;
    };var Rc = function Rc(a, b, c) {
      this.sf = c;this.Qe = a;this.Hf = b;this.Bc = 0;this.rc = null;
    };Rc.prototype.get = function () {
      if (0 < this.Bc) {
        this.Bc--;var a = this.rc;this.rc = a.next;a.next = null;
      } else a = this.Qe();return a;
    };Rc.prototype.put = function (a) {
      this.Hf(a);this.Bc < this.sf && (this.Bc++, a.next = this.rc, this.rc = a);
    };var Sc = function Sc(a) {
      k.setTimeout(function () {
        throw a;
      }, 0);
    },
        Tc,
        Uc = function Uc() {
      var a = k.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function a() {
        var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow,
            a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(),
            d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
            a = _t(function (a) {
          if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
        }, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage: function postMessage() {
            b.postMessage(c, d);
          } };
      });if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
        var b = new a(),
            c = {},
            d = c;b.port1.onmessage = function () {
          if (m(c.next)) {
            c = c.next;var a = c.Qd;c.Qd = null;a();
          }
        };return function (a) {
          d.next = { Qd: a };d = d.next;b.port2.postMessage(0);
        };
      }return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
        var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
          b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null;
        };document.documentElement.appendChild(b);
      } : function (a) {
        k.setTimeout(a, 0);
      };
    };var Vc = function Vc() {
      this.Wc = this.cb = null;
    },
        Xc = new Rc(function () {
      return new Wc();
    }, function (a) {
      a.reset();
    }, 100);Vc.prototype.add = function (a, b) {
      var c = Xc.get();c.set(a, b);this.Wc ? this.Wc.next = c : (x(!this.cb), this.cb = c);this.Wc = c;
    };Vc.prototype.remove = function () {
      var a = null;this.cb && (a = this.cb, this.cb = this.cb.next, this.cb || (this.Wc = null), a.next = null);return a;
    };var Wc = function Wc() {
      this.next = this.scope = this.fd = null;
    };Wc.prototype.set = function (a, b) {
      this.fd = a;this.scope = b;this.next = null;
    };
    Wc.prototype.reset = function () {
      this.next = this.scope = this.fd = null;
    };var bd = function bd(a, b) {
      Yc || Zc();$c || (Yc(), $c = !0);ad.add(a, b);
    },
        Yc,
        Zc = function Zc() {
      if (-1 != String(k.Promise).indexOf("[native code]")) {
        var a = k.Promise.resolve(void 0);Yc = function Yc() {
          a.then(cd);
        };
      } else Yc = function Yc() {
        var a = cd;!q(k.setImmediate) || k.Window && k.Window.prototype && !z("Edge") && k.Window.prototype.setImmediate == k.setImmediate ? (Tc || (Tc = Uc()), Tc(a)) : k.setImmediate(a);
      };
    },
        $c = !1,
        ad = new Vc(),
        cd = function cd() {
      for (var a; a = ad.remove();) {
        try {
          a.fd.call(a.scope);
        } catch (b) {
          Sc(b);
        }Xc.put(a);
      }$c = !1;
    };var dd = function dd(a) {
      return r(a) ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : void 0 === a ? "undefined" : null === a ? "null" : typeof a;
    },
        ed = function ed(a) {
      return (a = a && a.ownerDocument) && (a.defaultView || a.parentWindow) || window;
    };var fd = !A || 9 <= Number(Bb);!tb && !A || A && 9 <= Number(Bb) || tb && B("1.9.1");A && B("9");var hd = function hd() {
      this.ta = "";this.Fe = gd;
    };hd.prototype.Jb = !0;hd.prototype.Gb = function () {
      return this.ta;
    };hd.prototype.toString = function () {
      return "SafeHtml{" + this.ta + "}";
    };var id = function id(a) {
      if (a instanceof hd && a.constructor === hd && a.Fe === gd) return a.ta;za("expected object of type SafeHtml, got '" + a + "' of type " + ea(a));return "type_error:SafeHtml";
    },
        gd = {};hd.prototype.mf = function (a) {
      this.ta = a;return this;
    };var jd = function jd(a, b) {
      var c = ed(a);"undefined" != typeof c.HTMLScriptElement && "undefined" != typeof c.Element && x(a && (a instanceof c.HTMLScriptElement || !(a instanceof c.Element)), "Argument is not a HTMLScriptElement (or a non-Element mock); got: %s", dd(a));a.src = Ja(b);
    };var kd = function kd(a) {
      var b = document;return p(a) ? b.getElementById(a) : a;
    },
        md = function md(a, b) {
      db(b, function (b, d) {
        b && b.Jb && (b = b.Gb());"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : ld.hasOwnProperty(d) ? a.setAttribute(ld[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
      });
    },
        ld = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan",
      type: "type", usemap: "useMap", valign: "vAlign", width: "width" },
        od = function od(a, b, c) {
      var d = arguments,
          e = document,
          f = String(d[0]),
          g = d[1];if (!fd && g && (g.name || g.type)) {
        f = ["<", f];g.name && f.push(' name="', va(g.name), '"');if (g.type) {
          f.push(' type="', va(g.type), '"');var l = {};lb(l, g);delete l.type;g = l;
        }f.push(">");f = f.join("");
      }f = e.createElement(f);g && (p(g) ? f.className = g : ga(g) ? f.className = g.join(" ") : md(f, g));2 < d.length && nd(e, f, d);return f;
    },
        nd = function nd(a, b, c) {
      function d(c) {
        c && b.appendChild(p(c) ? a.createTextNode(c) : c);
      }for (var e = 2; e < c.length; e++) {
        var f = c[e];!ha(f) || r(f) && 0 < f.nodeType ? d(f) : y(pd(f) ? Za(f) : f, d);
      }
    },
        pd = function pd(a) {
      if (a && "number" == typeof a.length) {
        if (r(a)) return "function" == typeof a.item || "string" == typeof a.item;if (q(a)) return "function" == typeof a.item;
      }return !1;
    };var qd = function qd(a) {
      a.prototype.then = a.prototype.then;a.prototype.$goog_Thenable = !0;
    },
        rd = function rd(a) {
      if (!a) return !1;try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };var D = function D(a, b) {
      this.X = 0;this.va = void 0;this.gb = this.qa = this.u = null;this.pc = this.ed = !1;if (a != da) try {
        var c = this;a.call(b, function (a) {
          sd(c, 2, a);
        }, function (a) {
          if (!(a instanceof td)) try {
            if (a instanceof Error) throw a;throw Error("Promise rejected.");
          } catch (e) {}sd(c, 3, a);
        });
      } catch (d) {
        sd(this, 3, d);
      }
    },
        ud = function ud() {
      this.next = this.context = this.mb = this.Qa = this.child = null;this.yb = !1;
    };ud.prototype.reset = function () {
      this.context = this.mb = this.Qa = this.child = null;this.yb = !1;
    };
    var vd = new Rc(function () {
      return new ud();
    }, function (a) {
      a.reset();
    }, 100),
        wd = function wd(a, b, c) {
      var d = vd.get();d.Qa = a;d.mb = b;d.context = c;return d;
    },
        E = function E(a) {
      if (a instanceof D) return a;var b = new D(da);sd(b, 2, a);return b;
    },
        F = function F(a) {
      return new D(function (b, c) {
        c(a);
      });
    },
        yd = function yd(a, b, c) {
      xd(a, b, c, null) || bd(ka(b, a));
    },
        zd = function zd(a) {
      return new D(function (b) {
        var c = a.length,
            d = [];if (c) for (var e = function e(a, _e, f) {
          c--;d[a] = _e ? { Ze: !0, value: f } : { Ze: !1, reason: f };0 == c && b(d);
        }, f = 0, g; f < a.length; f++) {
          g = a[f], yd(g, ka(e, f, !0), ka(e, f, !1));
        } else b(d);
      });
    };D.prototype.then = function (a, b, c) {
      null != a && Ca(a, "opt_onFulfilled should be a function.");null != b && Ca(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Ad(this, q(a) ? a : null, q(b) ? b : null, c);
    };qd(D);var Cd = function Cd(a, b) {
      b = wd(b, b, void 0);b.yb = !0;Bd(a, b);return a;
    };D.prototype.f = function (a, b) {
      return Ad(this, null, a, b);
    };D.prototype.cancel = function (a) {
      0 == this.X && bd(function () {
        var b = new td(a);Dd(this, b);
      }, this);
    };
    var Dd = function Dd(a, b) {
      if (0 == a.X) if (a.u) {
        var c = a.u;if (c.qa) {
          for (var d = 0, e = null, f = null, g = c.qa; g && (g.yb || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) {
            e || (f = g);
          }e && (0 == c.X && 1 == d ? Dd(c, b) : (f ? (d = f, x(c.qa), x(null != d), d.next == c.gb && (c.gb = d), d.next = d.next.next) : Ed(c), Fd(c, e, 3, b)));
        }a.u = null;
      } else sd(a, 3, b);
    },
        Bd = function Bd(a, b) {
      a.qa || 2 != a.X && 3 != a.X || Gd(a);x(null != b.Qa);a.gb ? a.gb.next = b : a.qa = b;a.gb = b;
    },
        Ad = function Ad(a, b, c, d) {
      var e = wd(null, null, null);e.child = new D(function (a, g) {
        e.Qa = b ? function (c) {
          try {
            var e = b.call(d, c);a(e);
          } catch (C) {
            g(C);
          }
        } : a;e.mb = c ? function (b) {
          try {
            var e = c.call(d, b);!m(e) && b instanceof td ? g(b) : a(e);
          } catch (C) {
            g(C);
          }
        } : g;
      });e.child.u = a;Bd(a, e);return e.child;
    };D.prototype.Uf = function (a) {
      x(1 == this.X);this.X = 0;sd(this, 2, a);
    };D.prototype.Vf = function (a) {
      x(1 == this.X);this.X = 0;sd(this, 3, a);
    };
    var sd = function sd(a, b, c) {
      0 == a.X && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.X = 1, xd(c, a.Uf, a.Vf, a) || (a.va = c, a.X = b, a.u = null, Gd(a), 3 != b || c instanceof td || Hd(a, c)));
    },
        xd = function xd(a, b, c, d) {
      if (a instanceof D) return null != b && Ca(b, "opt_onFulfilled should be a function."), null != c && Ca(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), Bd(a, wd(b || da, c || null, d)), !0;if (rd(a)) return a.then(b, c, d), !0;if (r(a)) try {
        var e = a.then;if (q(e)) return Id(a, e, b, c, d), !0;
      } catch (f) {
        return c.call(d, f), !0;
      }return !1;
    },
        Id = function Id(a, b, c, d, e) {
      var f = !1,
          g = function g(a) {
        f || (f = !0, c.call(e, a));
      },
          l = function l(a) {
        f || (f = !0, d.call(e, a));
      };try {
        b.call(a, g, l);
      } catch (n) {
        l(n);
      }
    },
        Gd = function Gd(a) {
      a.ed || (a.ed = !0, bd(a.Ve, a));
    },
        Ed = function Ed(a) {
      var b = null;a.qa && (b = a.qa, a.qa = b.next, b.next = null);a.qa || (a.gb = null);null != b && x(null != b.Qa);return b;
    };D.prototype.Ve = function () {
      for (var a; a = Ed(this);) {
        Fd(this, a, this.X, this.va);
      }this.ed = !1;
    };
    var Fd = function Fd(a, b, c, d) {
      if (3 == c && b.mb && !b.yb) for (; a && a.pc; a = a.u) {
        a.pc = !1;
      }if (b.child) b.child.u = null, Jd(b, c, d);else try {
        b.yb ? b.Qa.call(b.context) : Jd(b, c, d);
      } catch (e) {
        Kd.call(null, e);
      }vd.put(b);
    },
        Jd = function Jd(a, b, c) {
      2 == b ? a.Qa.call(a.context, c) : a.mb && a.mb.call(a.context, c);
    },
        Hd = function Hd(a, b) {
      a.pc = !0;bd(function () {
        a.pc && Kd.call(null, b);
      });
    },
        Kd = Sc,
        td = function td(a) {
      v.call(this, a);
    };u(td, v);td.prototype.name = "cancel";
    var Ld = function Ld(a, b) {
      this.Jc = [];this.me = a;this.Ud = b || null;this.Hb = this.ib = !1;this.va = void 0;this.Gd = this.Ld = this.$c = !1;this.Sc = 0;this.u = null;this.ad = 0;
    };Ld.prototype.cancel = function (a) {
      if (this.ib) this.va instanceof Ld && this.va.cancel();else {
        if (this.u) {
          var b = this.u;delete this.u;a ? b.cancel(a) : (b.ad--, 0 >= b.ad && b.cancel());
        }this.me ? this.me.call(this.Ud, this) : this.Gd = !0;this.ib || Md(this, new Nd());
      }
    };Ld.prototype.Sd = function (a, b) {
      this.$c = !1;Od(this, a, b);
    };
    var Od = function Od(a, b, c) {
      a.ib = !0;a.va = c;a.Hb = !b;Pd(a);
    },
        Rd = function Rd(a) {
      if (a.ib) {
        if (!a.Gd) throw new Qd();a.Gd = !1;
      }
    };Ld.prototype.callback = function (a) {
      Rd(this);Sd(a);Od(this, !0, a);
    };var Md = function Md(a, b) {
      Rd(a);Sd(b);Od(a, !1, b);
    },
        Sd = function Sd(a) {
      x(!(a instanceof Ld), "An execution sequence may not be initiated with a blocking Deferred.");
    },
        Ud = function Ud(a, b) {
      Td(a, null, b, void 0);
    },
        Td = function Td(a, b, c, d) {
      x(!a.Ld, "Blocking Deferreds can not be re-used");a.Jc.push([b, c, d]);a.ib && Pd(a);
    };
    Ld.prototype.then = function (a, b, c) {
      var d,
          e,
          f = new D(function (a, b) {
        d = a;e = b;
      });Td(this, d, function (a) {
        a instanceof Nd ? f.cancel() : e(a);
      });return f.then(a, b, c);
    };qd(Ld);
    var Vd = function Vd(a) {
      return Ra(a.Jc, function (a) {
        return q(a[1]);
      });
    },
        Pd = function Pd(a) {
      if (a.Sc && a.ib && Vd(a)) {
        var b = a.Sc,
            c = Wd[b];c && (k.clearTimeout(c.Ib), delete Wd[b]);a.Sc = 0;
      }a.u && (a.u.ad--, delete a.u);for (var b = a.va, d = c = !1; a.Jc.length && !a.$c;) {
        var e = a.Jc.shift(),
            f = e[0],
            g = e[1],
            e = e[2];if (f = a.Hb ? g : f) try {
          var l = f.call(e || a.Ud, b);m(l) && (a.Hb = a.Hb && (l == b || l instanceof Error), a.va = b = l);if (rd(b) || "function" === typeof k.Promise && b instanceof k.Promise) d = !0, a.$c = !0;
        } catch (n) {
          b = n, a.Hb = !0, Vd(a) || (c = !0);
        }
      }a.va = b;d && (l = _t(a.Sd, a, !0), d = _t(a.Sd, a, !1), b instanceof Ld ? (Td(b, l, d), b.Ld = !0) : b.then(l, d));c && (b = new Xd(b), Wd[b.Ib] = b, a.Sc = b.Ib);
    },
        Qd = function Qd() {
      v.call(this);
    };u(Qd, v);Qd.prototype.message = "Deferred has already fired";Qd.prototype.name = "AlreadyCalledError";var Nd = function Nd() {
      v.call(this);
    };u(Nd, v);Nd.prototype.message = "Deferred was canceled";Nd.prototype.name = "CanceledError";var Xd = function Xd(a) {
      this.Ib = k.setTimeout(_t(this.Tf, this), 0);this.Y = a;
    };
    Xd.prototype.Tf = function () {
      x(Wd[this.Ib], "Cannot throw an error that is not scheduled.");delete Wd[this.Ib];throw this.Y;
    };var Wd = {};var be = function be(a) {
      var b = {},
          c = b.document || document,
          d = Ja(a),
          e = document.createElement("SCRIPT"),
          f = { se: e, ec: void 0 },
          g = new Ld(Yd, f),
          l = null,
          n = null != b.timeout ? b.timeout : 5E3;0 < n && (l = window.setTimeout(function () {
        Zd(e, !0);Md(g, new $d(1, "Timeout reached for loading script " + d));
      }, n), f.ec = l);e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Zd(e, b.eg || !1, l), g.callback(null));
      };e.onerror = function () {
        Zd(e, !0, l);Md(g, new $d(0, "Error while loading script " + d));
      };
      f = b.attributes || {};lb(f, { type: "text/javascript", charset: "UTF-8" });md(e, f);jd(e, a);ae(c).appendChild(e);return g;
    },
        ae = function ae(a) {
      var b;return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
    },
        Yd = function Yd() {
      if (this && this.se) {
        var a = this.se;a && "SCRIPT" == a.tagName && Zd(a, !0, this.ec);
      }
    },
        Zd = function Zd(a, b, c) {
      null != c && k.clearTimeout(c);a.onload = da;a.onerror = da;a.onreadystatechange = da;b && window.setTimeout(function () {
        a && a.parentNode && a.parentNode.removeChild(a);
      }, 0);
    },
        $d = function $d(a, b) {
      var c = "Jsloader error (code #" + a + ")";b && (c += ": " + b);v.call(this, c);this.code = a;
    };u($d, v);var ce = function ce(a, b, c, d, e) {
      this.reset(a, b, c, d, e);
    };ce.prototype.Wd = null;var de = 0;ce.prototype.reset = function (a, b, c, d, e) {
      "number" == typeof e || de++;d || la();this.Ob = a;this.vf = b;delete this.Wd;
    };ce.prototype.ue = function (a) {
      this.Ob = a;
    };var ee = function ee(a) {
      this.ke = a;this.ce = this.bd = this.Ob = this.u = null;
    },
        fe = function fe(a, b) {
      this.name = a;this.value = b;
    };fe.prototype.toString = function () {
      return this.name;
    };var ge = new fe("SEVERE", 1E3),
        he = new fe("INFO", 800),
        ie = new fe("CONFIG", 700),
        je = new fe("FINE", 500);ee.prototype.getName = function () {
      return this.ke;
    };ee.prototype.getParent = function () {
      return this.u;
    };ee.prototype.ue = function (a) {
      this.Ob = a;
    };var ke = function ke(a) {
      if (a.Ob) return a.Ob;if (a.u) return ke(a.u);za("Root logger has no level set.");return null;
    };
    ee.prototype.log = function (a, b, c) {
      if (a.value >= ke(this).value) for (q(b) && (b = b()), a = new ce(a, String(b), this.ke), c && (a.Wd = c), c = "log:" + a.vf, k.console && (k.console.timeStamp ? k.console.timeStamp(c) : k.console.markTimeline && k.console.markTimeline(c)), k.msWriteProfilerMark && k.msWriteProfilerMark(c), c = this; c;) {
        var d = c,
            e = a;if (d.ce) for (var f = 0; b = d.ce[f]; f++) {
          b(e);
        }c = c.getParent();
      }
    };ee.prototype.info = function (a, b) {
      this.log(he, a, b);
    };ee.prototype.config = function (a, b) {
      this.log(ie, a, b);
    };
    var le = {},
        me = null,
        ne = function ne(a) {
      me || (me = new ee(""), le[""] = me, me.ue(ie));var b;if (!(b = le[a])) {
        b = new ee(a);var c = a.lastIndexOf("."),
            d = a.substr(c + 1),
            c = ne(a.substr(0, c));c.bd || (c.bd = {});c.bd[d] = b;b.u = c;le[a] = b;
      }return b;
    };var oe = function oe() {
      Sb.call(this);this.da = new cc(this);this.Ke = this;this.sd = null;
    };u(oe, Sb);oe.prototype[Zb] = !0;h = oe.prototype;h.addEventListener = function (a, b, c, d) {
      jc(this, a, b, c, d);
    };h.removeEventListener = function (a, b, c, d) {
      rc(this, a, b, c, d);
    };
    h.dispatchEvent = function (a) {
      pe(this);var b = this.sd;if (b) {
        var c = [];for (var d = 1; b; b = b.sd) {
          c.push(b), x(1E3 > ++d, "infinite loop");
        }
      }b = this.Ke;d = a.type || a;if (p(a)) a = new Wb(a, b);else if (a instanceof Wb) a.target = a.target || b;else {
        var e = a;a = new Wb(d, b);lb(a, e);
      }var e = !0;if (c) for (var f = c.length - 1; !a.Ta && 0 <= f; f--) {
        var g = a.currentTarget = c[f];e = qe(g, d, !0, a) && e;
      }a.Ta || (g = a.currentTarget = b, e = qe(g, d, !0, a) && e, a.Ta || (e = qe(g, d, !1, a) && e));if (c) for (f = 0; !a.Ta && f < c.length; f++) {
        g = a.currentTarget = c[f], e = qe(g, d, !1, a) && e;
      }return e;
    };
    h.hb = function () {
      oe.Nc.hb.call(this);if (this.da) {
        var a = this.da,
            b = 0,
            c;for (c in a.I) {
          for (var d = a.I[c], e = 0; e < d.length; e++) {
            ++b, bc(d[e]);
          }delete a.I[c];a.fc--;
        }
      }this.sd = null;
    };h.listen = function (a, b, c, d) {
      pe(this);return this.da.add(String(a), b, !1, c, d);
    };
    var qc = function qc(a, b, c, d, e) {
      a.da.add(String(b), c, !0, d, e);
    },
        qe = function qe(a, b, c, d) {
      b = a.da.I[String(b)];if (!b) return !0;b = b.concat();for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];if (g && !g.tb && g.capture == c) {
          var l = g.listener,
              n = g.qc || g.src;g.kc && ec(a.da, g);e = !1 !== l.call(n, d) && e;
        }
      }return e && 0 != d.re;
    };oe.prototype.gd = function (a, b, c, d) {
      return this.da.gd(String(a), b, c, d);
    };oe.prototype.hasListener = function (a, b) {
      return this.da.hasListener(m(a) ? String(a) : void 0, b);
    };var pe = function pe(a) {
      x(a.da, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
    };var re = "StopIteration" in k ? k.StopIteration : { message: "StopIteration", stack: "" },
        se = function se() {};se.prototype.next = function () {
      throw re;
    };se.prototype.Je = function () {
      return this;
    };var G = function G(a, b) {
      a && a.log(je, b, void 0);
    };var te = function te(a, b) {
      this.fa = {};this.A = [];this.bb = this.o = 0;var c = arguments.length;if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");for (var d = 0; d < c; d += 2) {
          this.set(arguments[d], arguments[d + 1]);
        }
      } else a && this.addAll(a);
    };h = te.prototype;h.ea = function () {
      ue(this);for (var a = [], b = 0; b < this.A.length; b++) {
        a.push(this.fa[this.A[b]]);
      }return a;
    };h.ra = function () {
      ue(this);return this.A.concat();
    };h.Ab = function (a) {
      return ve(this.fa, a);
    };h.clear = function () {
      this.fa = {};this.bb = this.o = this.A.length = 0;
    };
    h.remove = function (a) {
      return ve(this.fa, a) ? (delete this.fa[a], this.o--, this.bb++, this.A.length > 2 * this.o && ue(this), !0) : !1;
    };var ue = function ue(a) {
      var b, c;if (a.o != a.A.length) {
        for (b = c = 0; c < a.A.length;) {
          var d = a.A[c];ve(a.fa, d) && (a.A[b++] = d);c++;
        }a.A.length = b;
      }if (a.o != a.A.length) {
        var e = {};for (b = c = 0; c < a.A.length;) {
          d = a.A[c], ve(e, d) || (a.A[b++] = d, e[d] = 1), c++;
        }a.A.length = b;
      }
    };h = te.prototype;h.get = function (a, b) {
      return ve(this.fa, a) ? this.fa[a] : b;
    };
    h.set = function (a, b) {
      ve(this.fa, a) || (this.o++, this.A.push(a), this.bb++);this.fa[a] = b;
    };h.addAll = function (a) {
      if (a instanceof te) {
        var b = a.ra();a = a.ea();
      } else b = gb(a), a = fb(a);for (var c = 0; c < b.length; c++) {
        this.set(b[c], a[c]);
      }
    };h.forEach = function (a, b) {
      for (var c = this.ra(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);a.call(b, f, e, this);
      }
    };h.clone = function () {
      return new te(this);
    };
    h.Je = function (a) {
      ue(this);var b = 0,
          c = this.bb,
          d = this,
          e = new se();e.next = function () {
        if (c != d.bb) throw Error("The map has changed since the iterator was created");if (b >= d.A.length) throw re;var e = d.A[b++];return a ? e : d.fa[e];
      };return e;
    };var ve = function ve(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };var we = function we(a) {
      if (a.ea && "function" == typeof a.ea) return a.ea();if (p(a)) return a.split("");if (ha(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) {
          b.push(a[d]);
        }return b;
      }return fb(a);
    },
        xe = function xe(a) {
      if (a.ra && "function" == typeof a.ra) return a.ra();if (!a.ea || "function" != typeof a.ea) {
        if (ha(a) || p(a)) {
          var b = [];a = a.length;for (var c = 0; c < a; c++) {
            b.push(c);
          }return b;
        }return gb(a);
      }
    },
        ye = function ye(a, b, c) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);else if (ha(a) || p(a)) y(a, b, c);else for (var d = xe(a), e = we(a), f = e.length, g = 0; g < f; g++) {
        b.call(c, e[g], d && d[g], a);
      }
    };var ze = function ze(a, b, c) {
      if (q(a)) c && (a = _t(a, c));else if (a && "function" == typeof a.handleEvent) a = _t(a.handleEvent, a);else throw Error("Invalid listener argument");return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
    },
        Ae = function Ae(a) {
      var b = null;return new D(function (c, d) {
        b = ze(function () {
          c(void 0);
        }, a);-1 == b && d(Error("Failed to schedule timer."));
      }).f(function (a) {
        k.clearTimeout(b);throw a;
      });
    };var Be = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Ce = function Ce(a, b) {
      if (a) {
        a = a.split("&");for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e = null;if (0 <= d) {
            var f = a[c].substring(0, d);e = a[c].substring(d + 1);
          } else f = a[c];b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    };var H = function H(a) {
      oe.call(this);this.headers = new te();this.Yc = a || null;this.ya = !1;this.Xc = this.b = null;this.Nb = this.je = this.yc = "";this.Ma = this.ld = this.uc = this.dd = !1;this.ub = 0;this.Pc = null;this.Ic = "";this.Tc = this.Cf = this.Ee = !1;
    };u(H, oe);var De = H.prototype,
        Ee = ne("goog.net.XhrIo");De.M = Ee;var Fe = /^https?$/i,
        Ge = ["POST", "PUT"];
    H.prototype.send = function (a, b, c, d) {
      if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.yc + "; newUri=" + a);b = b ? b.toUpperCase() : "GET";this.yc = a;this.Nb = "";this.je = b;this.dd = !1;this.ya = !0;this.b = this.Yc ? this.Yc.mc() : Lc.mc();this.Xc = this.Yc ? Kc(this.Yc) : Kc(Lc);this.b.onreadystatechange = _t(this.oe, this);this.Cf && "onprogress" in this.b && (this.b.onprogress = _t(function (a) {
        this.ne(a, !0);
      }, this), this.b.upload && (this.b.upload.onprogress = _t(this.ne, this)));try {
        G(this.M, He(this, "Opening Xhr")), this.ld = !0, this.b.open(b, String(a), !0), this.ld = !1;
      } catch (f) {
        G(this.M, He(this, "Error opening Xhr: " + f.message));this.Y(5, f);return;
      }a = c || "";var e = this.headers.clone();d && ye(d, function (a, b) {
        e.set(b, a);
      });d = Ta(e.ra());c = k.FormData && a instanceof k.FormData;!Ua(Ge, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");e.forEach(function (a, b) {
        this.b.setRequestHeader(b, a);
      }, this);this.Ic && (this.b.responseType = this.Ic);"withCredentials" in this.b && this.b.withCredentials !== this.Ee && (this.b.withCredentials = this.Ee);try {
        Ie(this), 0 < this.ub && (this.Tc = Je(this.b), G(this.M, He(this, "Will abort after " + this.ub + "ms if incomplete, xhr2 " + this.Tc)), this.Tc ? (this.b.timeout = this.ub, this.b.ontimeout = _t(this.ec, this)) : this.Pc = ze(this.ec, this.ub, this)), G(this.M, He(this, "Sending request")), this.uc = !0, this.b.send(a), this.uc = !1;
      } catch (f) {
        G(this.M, He(this, "Send error: " + f.message)), this.Y(5, f);
      }
    };var Je = function Je(a) {
      return A && B(9) && ca(a.timeout) && m(a.ontimeout);
    },
        Sa = function Sa(a) {
      return "content-type" == a.toLowerCase();
    };
    H.prototype.ec = function () {
      "undefined" != typeof aa && this.b && (this.Nb = "Timed out after " + this.ub + "ms, aborting", G(this.M, He(this, this.Nb)), this.dispatchEvent("timeout"), this.abort(8));
    };H.prototype.Y = function (a, b) {
      this.ya = !1;this.b && (this.Ma = !0, this.b.abort(), this.Ma = !1);this.Nb = b;Ke(this);Le(this);
    };var Ke = function Ke(a) {
      a.dd || (a.dd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
    H.prototype.abort = function () {
      this.b && this.ya && (G(this.M, He(this, "Aborting")), this.ya = !1, this.Ma = !0, this.b.abort(), this.Ma = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Le(this));
    };H.prototype.hb = function () {
      this.b && (this.ya && (this.ya = !1, this.Ma = !0, this.b.abort(), this.Ma = !1), Le(this, !0));H.Nc.hb.call(this);
    };H.prototype.oe = function () {
      this.isDisposed() || (this.ld || this.uc || this.Ma ? Me(this) : this.yf());
    };H.prototype.yf = function () {
      Me(this);
    };
    var Me = function Me(a) {
      if (a.ya && "undefined" != typeof aa) if (a.Xc[1] && 4 == Ne(a) && 2 == Oe(a)) G(a.M, He(a, "Local request error detected and ignored"));else if (a.uc && 4 == Ne(a)) ze(a.oe, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == Ne(a)) {
        G(a.M, He(a, "Request complete"));a.ya = !1;try {
          var b = Oe(a);a: switch (b) {case 200:case 201:case 202:case 204:case 206:case 304:case 1223:
              var c = !0;break a;default:
              c = !1;}var d;if (!(d = c)) {
            var e;if (e = 0 === b) {
              var f = String(a.yc).match(Be)[1] || null;if (!f && k.self && k.self.location) var g = k.self.location.protocol,
                  f = g.substr(0, g.length - 1);e = !Fe.test(f ? f.toLowerCase() : "");
            }d = e;
          }if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
            try {
              var l = 2 < Ne(a) ? a.b.statusText : "";
            } catch (n) {
              G(a.M, "Can not get status: " + n.message), l = "";
            }a.Nb = l + " [" + Oe(a) + "]";Ke(a);
          }
        } finally {
          Le(a);
        }
      }
    };H.prototype.ne = function (a, b) {
      x("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Pe(a, "progress"));this.dispatchEvent(Pe(a, b ? "downloadprogress" : "uploadprogress"));
    };
    var Pe = function Pe(a, b) {
      return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total };
    },
        Le = function Le(a, b) {
      if (a.b) {
        Ie(a);var c = a.b,
            d = a.Xc[0] ? da : null;a.b = null;a.Xc = null;b || a.dispatchEvent("ready");try {
          c.onreadystatechange = d;
        } catch (e) {
          (a = a.M) && a.log(ge, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
        }
      }
    },
        Ie = function Ie(a) {
      a.b && a.Tc && (a.b.ontimeout = null);ca(a.Pc) && (k.clearTimeout(a.Pc), a.Pc = null);
    },
        Ne = function Ne(a) {
      return a.b ? a.b.readyState : 0;
    },
        Oe = function Oe(a) {
      try {
        return 2 < Ne(a) ? a.b.status : -1;
      } catch (b) {
        return -1;
      }
    },
        Qe = function Qe(a) {
      try {
        return a.b ? a.b.responseText : "";
      } catch (b) {
        return G(a.M, "Can not get responseText: " + b.message), "";
      }
    };
    H.prototype.getResponse = function () {
      try {
        if (!this.b) return null;if ("response" in this.b) return this.b.response;switch (this.Ic) {case "":case "text":
            return this.b.responseText;case "arraybuffer":
            if ("mozResponseArrayBuffer" in this.b) return this.b.mozResponseArrayBuffer;}var a = this.M;a && a.log(ge, "Response type " + this.Ic + " is not supported on this browser", void 0);return null;
      } catch (b) {
        return G(this.M, "Can not get response: " + b.message), null;
      }
    };
    H.prototype.getResponseHeader = function (a) {
      if (this.b && 4 == Ne(this)) return a = this.b.getResponseHeader(a), null === a ? void 0 : a;
    };H.prototype.getAllResponseHeaders = function () {
      return this.b && 4 == Ne(this) ? this.b.getAllResponseHeaders() : "";
    };var He = function He(a, b) {
      return b + " [" + a.je + " " + a.yc + " " + Oe(a) + "]";
    };var Re = function Re(a, b) {
      this.ka = this.$a = this.ma = "";this.ob = null;this.La = this.Aa = "";this.$ = this.rf = !1;if (a instanceof Re) {
        this.$ = m(b) ? b : a.$;Se(this, a.ma);var c = a.$a;I(this);this.$a = c;Te(this, a.ka);Ue(this, a.ob);Ve(this, a.Aa);We(this, a.ba.clone());a = a.La;I(this);this.La = a;
      } else a && (c = String(a).match(Be)) ? (this.$ = !!b, Se(this, c[1] || "", !0), a = c[2] || "", I(this), this.$a = Xe(a), Te(this, c[3] || "", !0), Ue(this, c[4]), Ve(this, c[5] || "", !0), We(this, c[6] || "", !0), a = c[7] || "", I(this), this.La = Xe(a)) : (this.$ = !!b, this.ba = new Ye(null, 0, this.$));
    };Re.prototype.toString = function () {
      var a = [],
          b = this.ma;b && a.push(Ze(b, $e, !0), ":");var c = this.ka;if (c || "file" == b) a.push("//"), (b = this.$a) && a.push(Ze(b, $e, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.ob, null != c && a.push(":", String(c));if (c = this.Aa) this.ka && "/" != c.charAt(0) && a.push("/"), a.push(Ze(c, "/" == c.charAt(0) ? af : bf, !0));(c = this.ba.toString()) && a.push("?", c);(c = this.La) && a.push("#", Ze(c, cf));return a.join("");
    };
    Re.prototype.resolve = function (a) {
      var b = this.clone(),
          c = !!a.ma;c ? Se(b, a.ma) : c = !!a.$a;if (c) {
        var d = a.$a;I(b);b.$a = d;
      } else c = !!a.ka;c ? Te(b, a.ka) : c = null != a.ob;d = a.Aa;if (c) Ue(b, a.ob);else if (c = !!a.Aa) {
        if ("/" != d.charAt(0)) if (this.ka && !this.Aa) d = "/" + d;else {
          var e = b.Aa.lastIndexOf("/");-1 != e && (d = b.Aa.substr(0, e + 1) + d);
        }e = d;if (".." == e || "." == e) d = "";else if (w(e, "./") || w(e, "/.")) {
          for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
            var l = e[g++];"." == l ? d && g == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(l), d = !0);
          }d = f.join("/");
        } else d = e;
      }c ? Ve(b, d) : c = "" !== a.ba.toString();c ? We(b, a.ba.clone()) : c = !!a.La;c && (a = a.La, I(b), b.La = a);return b;
    };Re.prototype.clone = function () {
      return new Re(this);
    };
    var Se = function Se(a, b, c) {
      I(a);a.ma = c ? Xe(b, !0) : b;a.ma && (a.ma = a.ma.replace(/:$/, ""));
    },
        Te = function Te(a, b, c) {
      I(a);a.ka = c ? Xe(b, !0) : b;
    },
        Ue = function Ue(a, b) {
      I(a);if (b) {
        b = Number(b);if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);a.ob = b;
      } else a.ob = null;
    },
        Ve = function Ve(a, b, c) {
      I(a);a.Aa = c ? Xe(b, !0) : b;
    },
        We = function We(a, b, c) {
      I(a);b instanceof Ye ? (a.ba = b, a.ba.Ed(a.$)) : (c || (b = Ze(b, df)), a.ba = new Ye(b, 0, a.$));
    },
        J = function J(a, b, c) {
      I(a);a.ba.set(b, c);
    },
        ef = function ef(a, b) {
      return a.ba.get(b);
    };
    Re.prototype.removeParameter = function (a) {
      I(this);this.ba.remove(a);return this;
    };var I = function I(a) {
      if (a.rf) throw Error("Tried to modify a read-only Uri");
    };Re.prototype.Ed = function (a) {
      this.$ = a;this.ba && this.ba.Ed(a);return this;
    };
    var ff = function ff(a) {
      return a instanceof Re ? a.clone() : new Re(a, void 0);
    },
        gf = function gf(a, b) {
      var c = new Re(null, void 0);Se(c, "https");a && Te(c, a);b && Ve(c, b);return c;
    },
        Xe = function Xe(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
        Ze = function Ze(a, b, c) {
      return p(a) ? (a = encodeURI(a).replace(b, hf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
        hf = function hf(a) {
      a = a.charCodeAt(0);return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
        $e = /[#\/\?@]/g,
        bf = /[\#\?:]/g,
        af = /[\#\?]/g,
        df = /[\#\?@]/g,
        cf = /#/g,
        Ye = function Ye(a, b, c) {
      this.o = this.j = null;this.R = a || null;this.$ = !!c;
    },
        jf = function jf(a) {
      a.j || (a.j = new te(), a.o = 0, a.R && Ce(a.R, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    },
        lf = function lf(a) {
      var b = xe(a);if ("undefined" == typeof b) throw Error("Keys are undefined");var c = new Ye(null, 0, void 0);a = we(a);for (var d = 0; d < b.length; d++) {
        var e = b[d],
            f = a[d];ga(f) ? kf(c, e, f) : c.add(e, f);
      }return c;
    };h = Ye.prototype;
    h.add = function (a, b) {
      jf(this);this.R = null;a = this.Z(a);var c = this.j.get(a);c || this.j.set(a, c = []);c.push(b);this.o = Aa(this.o) + 1;return this;
    };h.remove = function (a) {
      jf(this);a = this.Z(a);return this.j.Ab(a) ? (this.R = null, this.o = Aa(this.o) - this.j.get(a).length, this.j.remove(a)) : !1;
    };h.clear = function () {
      this.j = this.R = null;this.o = 0;
    };h.Ab = function (a) {
      jf(this);a = this.Z(a);return this.j.Ab(a);
    };h.forEach = function (a, b) {
      jf(this);this.j.forEach(function (c, d) {
        y(c, function (c) {
          a.call(b, c, d, this);
        }, this);
      }, this);
    };
    h.ra = function () {
      jf(this);for (var a = this.j.ea(), b = this.j.ra(), c = [], d = 0; d < b.length; d++) {
        for (var e = a[d], f = 0; f < e.length; f++) {
          c.push(b[d]);
        }
      }return c;
    };h.ea = function (a) {
      jf(this);var b = [];if (p(a)) this.Ab(a) && (b = Ya(b, this.j.get(this.Z(a))));else {
        a = this.j.ea();for (var c = 0; c < a.length; c++) {
          b = Ya(b, a[c]);
        }
      }return b;
    };h.set = function (a, b) {
      jf(this);this.R = null;a = this.Z(a);this.Ab(a) && (this.o = Aa(this.o) - this.j.get(a).length);this.j.set(a, [b]);this.o = Aa(this.o) + 1;return this;
    };
    h.get = function (a, b) {
      a = a ? this.ea(a) : [];return 0 < a.length ? String(a[0]) : b;
    };var kf = function kf(a, b, c) {
      a.remove(b);0 < c.length && (a.R = null, a.j.set(a.Z(b), Za(c)), a.o = Aa(a.o) + c.length);
    };h = Ye.prototype;h.toString = function () {
      if (this.R) return this.R;if (!this.j) return "";for (var a = [], b = this.j.ra(), c = 0; c < b.length; c++) {
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ea(d), f = 0; f < d.length; f++) {
          var g = e;"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));a.push(g);
        }
      }return this.R = a.join("&");
    };
    h.clone = function () {
      var a = new Ye();a.R = this.R;this.j && (a.j = this.j.clone(), a.o = this.o);return a;
    };h.Z = function (a) {
      a = String(a);this.$ && (a = a.toLowerCase());return a;
    };h.Ed = function (a) {
      a && !this.$ && (jf(this), this.R = null, this.j.forEach(function (a, c) {
        var b = c.toLowerCase();c != b && (this.remove(c), kf(this, b, a));
      }, this));this.$ = a;
    };h.extend = function (a) {
      for (var b = 0; b < arguments.length; b++) {
        ye(arguments[b], function (a, b) {
          this.add(b, a);
        }, this);
      }
    };var mf = function mf() {
      var a = K();return A && !!Bb && 11 == Bb || /Edge\/\d+/.test(a);
    },
        nf = function nf() {
      return k.window && k.window.location.href || "";
    },
        of = function of(a, b) {
      b = b || k.window;var c = "about:blank";a && (c = zc(Cc(a)));b.location.href = c;
    },
        pf = function pf(a, b) {
      var c = [],
          d;for (d in a) {
        d in b ? typeof a[d] != typeof b[d] ? c.push(d) : ga(a[d]) ? ib(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < pf(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
      }for (d in b) {
        d in a || c.push(d);
      }return c;
    },
        rf = function rf() {
      var a = K();a = "Chrome" != qf(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;return a && 30 > a ? !1 : !A || !Bb || 9 < Bb;
    },
        sf = function sf(a) {
      a = (a || K()).toLowerCase();return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
    },
        tf = function tf(a) {
      a = a || k.window;try {
        a.close();
      } catch (b) {}
    },
        uf = function uf(a, b, c) {
      var d = Math.floor(1E9 * Math.random()).toString();b = b || 500;c = c || 600;var e = (window.screen.availHeight - c) / 2,
          f = (window.screen.availWidth - b) / 2;b = { width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 };c = K().toLowerCase();d && (b.target = d, w(c, "crios/") && (b.target = "_blank"));"Firefox" == qf(K()) && (a = a || "http://localhost", b.scrollbars = !0);c = a || "about:blank";(d = b) || (d = {});a = window;b = c instanceof yc ? c : Cc("undefined" != typeof c.href ? c.href : String(c));c = d.target || c.target;e = [];for (g in d) {
        switch (g) {case "width":case "height":case "top":case "left":
            e.push(g + "=" + d[g]);break;case "target":case "noreferrer":
            break;
          default:
            e.push(g + "=" + (d[g] ? 1 : 0));}
      }var g = e.join(",");(z("iPhone") && !z("iPod") && !z("iPad") || z("iPad") || z("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), e = ed(g), "undefined" != typeof e.HTMLAnchorElement && "undefined" != typeof e.Location && "undefined" != typeof e.Element && x(g && (g instanceof e.HTMLAnchorElement || !(g instanceof e.Location || g instanceof e.Element)), "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s", dd(g)), b = b instanceof yc ? b : Cc(b), g.href = zc(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = zc(b), g && (sb && w(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = Ga("b/12014412, meta tag with sanitized URL"), d = '<META HTTP-EQUIV="refresh" content="0; url=' + va(d) + '">', Ba(Fa(a), "must provide justification"), x(!/^[\s\xa0]*$/.test(Fa(a)), "must provide non-empty justification"), g.document.write(id(new hd().mf(d))), g.document.close())) : g = a.open(zc(b), c, g);if (g) try {
        g.focus();
      } catch (l) {}return g;
    },
        vf = function vf(a) {
      return new D(function (b) {
        var c = function c() {
          Ae(2E3).then(function () {
            if (!a || a.closed) b();else return c();
          });
        };return c();
      });
    },
        wf = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        xf = function xf() {
      var a = null;return new D(function (b) {
        "complete" == k.document.readyState ? b() : (a = function a() {
          b();
        }, ic(window, "load", a));
      }).f(function (b) {
        rc(window, "load", a);throw b;
      });
    },
        zf = function zf() {
      return yf(void 0) ? xf().then(function () {
        return new D(function (a, b) {
          var c = k.document,
              d = setTimeout(function () {
            b(Error("Cordova framework is not ready."));
          }, 1E3);c.addEventListener("deviceready", function () {
            clearTimeout(d);a();
          }, !1);
        });
      }) : F(Error("Cordova must run in an Android or iOS file scheme."));
    },
        yf = function yf(a) {
      a = a || K();return !("file:" !== Af() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
    },
        Bf = function Bf() {
      var a = k.window;try {
        return !(!a || a == a.top);
      } catch (b) {
        return !1;
      }
    },
        Cf = function Cf() {
      return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser";
    },
        Df = function Df() {
      var a = Cf();return "ReactNative" === a || "Node" === a;
    },
        qf = function qf(a) {
      var b = a.toLowerCase();if (w(b, "opera/") || w(b, "opr/") || w(b, "opios/")) return "Opera";if (w(b, "iemobile")) return "IEMobile";if (w(b, "msie") || w(b, "trident/")) return "IE";if (w(b, "edge/")) return "Edge";if (w(b, "firefox/")) return "Firefox";if (w(b, "silk/")) return "Silk";if (w(b, "blackberry")) return "Blackberry";if (w(b, "webos")) return "Webos";if (!w(b, "safari/") || w(b, "chrome/") || w(b, "crios/") || w(b, "android")) {
        if (!w(b, "chrome/") && !w(b, "crios/") || w(b, "edge/")) {
          if (w(b, "android")) return "Android";if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
        } else return "Chrome";
      } else return "Safari";return "Other";
    },
        Ef = function Ef(a) {
      var b = Cf();return ("Browser" === b ? qf(K()) : b) + "/JsCore/" + a;
    },
        K = function K() {
      return k.navigator && k.navigator.userAgent || "";
    },
        L = function L(a, b) {
      a = a.split(".");b = b || k;for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) {
        b = b[a[c]];
      }c != a.length && (b = void 0);
      return b;
    },
        Hf = function Hf() {
      var a;if (a = (Ff() || "chrome-extension:" === Af() || yf()) && !Df()) a: {
        try {
          var b = k.localStorage,
              c = Gf();if (b) {
            b.setItem(c, "1");b.removeItem(c);a = mf() ? !!k.indexedDB : !0;break a;
          }
        } catch (d) {}a = !1;
      }return a;
    },
        Ff = function Ff() {
      return "http:" === Af() || "https:" === Af();
    },
        Af = function Af() {
      return k.location && k.location.protocol || null;
    },
        If = function If(a) {
      a = a || K();return sf(a) || "Firefox" == qf(a) ? !1 : !0;
    },
        Jf = function Jf(a) {
      return "undefined" === typeof a ? null : Fc(a);
    },
        Kf = function Kf(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
      }return b;
    },
        Lf = function Lf(a) {
      if (null !== a) return JSON.parse(a);
    },
        Gf = function Gf(a) {
      return a ? a : "" + Math.floor(1E9 * Math.random()).toString();
    },
        Mf = function Mf(a) {
      a = a || K();return "Safari" == qf(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
    },
        Nf = function Nf() {
      var a = k.___jsl;if (a && a.H) for (var b in a.H) {
        if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) {
          a.CP[c] = null;
        }
      }
    },
        Of = function Of() {
      return k.navigator && "boolean" === typeof k.navigator.onLine ? k.navigator.onLine : !0;
    },
        Pf = function Pf(a, b, c, d) {
      if (a > b) throw Error("Short delay should be less than long delay!");this.Qf = a;this.uf = b;a = c || K();d = d || Cf();this.qf = sf(a) || "ReactNative" === d;
    };Pf.prototype.get = function () {
      return this.qf ? this.uf : this.Qf;
    };
    var Qf = function Qf() {
      var a = k.document;return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0;
    },
        Rf = function Rf() {
      var a = k.document,
          _b = null;return Qf() || !a ? E() : new D(function (c) {
        _b = function b() {
          Qf() && (a.removeEventListener("visibilitychange", _b, !1), c());
        };a.addEventListener("visibilitychange", _b, !1);
      }).f(function (c) {
        a.removeEventListener("visibilitychange", _b, !1);throw c;
      });
    };var Sf = {};var Tf;try {
      var Uf = {};Object.defineProperty(Uf, "abcd", { configurable: !0, enumerable: !0, value: 1 });Object.defineProperty(Uf, "abcd", { configurable: !0, enumerable: !0, value: 2 });Tf = 2 == Uf.abcd;
    } catch (a) {
      Tf = !1;
    }
    var M = function M(a, b, c) {
      Tf ? Object.defineProperty(a, b, { configurable: !0, enumerable: !0, value: c }) : a[b] = c;
    },
        Vf = function Vf(a, b) {
      if (b) for (var c in b) {
        b.hasOwnProperty(c) && M(a, c, b[c]);
      }
    },
        Wf = function Wf(a) {
      var b = {};Vf(b, a);return b;
    },
        Xf = function Xf(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && (b[c] = a[c]);
      }return b;
    },
        Yf = function Yf(a, b) {
      if (!b || !b.length) return !0;if (!a) return !1;for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];if (void 0 === d || null === d || "" === d) return !1;
      }return !0;
    },
        Zf = function Zf(a) {
      var b = a;if ("object" == typeof a && null != a) {
        var b = "length" in a ? [] : {},
            c;for (c in a) {
          M(b, c, Zf(a[c]));
        }
      }return b;
    };var $f = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
        ag = ["client_id", "response_type", "scope", "redirect_uri", "state"],
        bg = { $f: { Sb: 500, Rb: 600, providerId: "facebook.com", Ad: ag }, ag: { Sb: 500, Rb: 620, providerId: "github.com", Ad: ag }, bg: { Sb: 515, Rb: 680, providerId: "google.com", Ad: ag }, cg: { Sb: 485, Rb: 705, providerId: "twitter.com", Ad: $f } },
        cg = function cg(a) {
      for (var b in bg) {
        if (bg[b].providerId == a) return bg[b];
      }return null;
    };var N = function N(a, b) {
      this.code = "auth/" + a;this.message = b || dg[a] || "";
    };u(N, Error);N.prototype.G = function () {
      return { code: this.code, message: this.message };
    };N.prototype.toJSON = function () {
      return this.G();
    };
    var eg = function eg(a) {
      var b = a && a.code;return b ? new N(b.substring(5), a.message) : null;
    },
        dg = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
      "code-expired": "The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
      "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
      "invalid-app-id": "The mobile app identifier is not registed for the current project.", "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.", "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
      "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
      "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.",
      "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
      "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.", "missing-iframe-start": "An internal error has occurred.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
      "missing-phone-number": "To send verification codes, provide a phone number for the recipient.", "missing-verification-id": "The phone auth credential was created with an empty verification ID.", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
      "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "The SMS quota for this project has been exceeded.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.",
      timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "user-cancelled": "User did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.",
      "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." };var O = function O(a, b, c, d, e) {
      this.ia = a;this.S = b || null;this.vb = c || null;this.Dd = d || null;this.Y = e || null;if (this.vb || this.Y) {
        if (this.vb && this.Y) throw new N("invalid-auth-event");if (this.vb && !this.Dd) throw new N("invalid-auth-event");
      } else throw new N("invalid-auth-event");
    };O.prototype.oc = function () {
      return this.Dd;
    };O.prototype.getError = function () {
      return this.Y;
    };O.prototype.G = function () {
      return { type: this.ia, eventId: this.S, urlResponse: this.vb, sessionId: this.Dd, error: this.Y && this.Y.G() };
    };
    var fg = function fg(a) {
      a = a || {};return a.type ? new O(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && eg(a.error)) : null;
    };var gg = function gg(a) {
      var b = "unauthorized-domain",
          c = void 0,
          d = ff(a);a = d.ka;d = d.ma;"chrome-extension" == d ? c = ma("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";N.call(this, b, c);
    };u(gg, N);var hg = function hg(a) {
      this.tf = a.sub;la();this.Db = a.email || null;this.Df = a.provider_id || null;this.Me = !!a.is_anonymous || "anonymous" == this.Df;
    };hg.prototype.getEmail = function () {
      return this.Db;
    };hg.prototype.isAnonymous = function () {
      return this.Me;
    };var ig = function ig(a, b) {
      return a.then(function (a) {
        if (a.idToken) {
          a: {
            var c = a.idToken.split(".");if (3 == c.length) {
              for (var c = c[1], e = (4 - c.length % 4) % 4, f = 0; f < e; f++) {
                c += ".";
              }try {
                var g = JSON.parse(Gb(c));if (g.sub && g.iss && g.aud && g.exp) {
                  var l = new hg(g);break a;
                }
              } catch (n) {}
            }l = null;
          }if (!l || b != l.tf) throw new N("user-mismatch");return a;
        }throw new N("user-mismatch");
      }).f(function (a) {
        throw a && a.code && "auth/user-not-found" == a.code ? new N("user-mismatch") : a;
      });
    },
        jg = function jg(a, b) {
      if (b.idToken || b.accessToken) b.idToken && M(this, "idToken", b.idToken), b.accessToken && M(this, "accessToken", b.accessToken);else if (b.oauthToken && b.oauthTokenSecret) M(this, "accessToken", b.oauthToken), M(this, "secret", b.oauthTokenSecret);else throw new N("internal-error", "failed to construct a credential");M(this, "providerId", a);
    };jg.prototype.Fb = function (a) {
      return kg(a, lg(this));
    };jg.prototype.zc = function (a, b) {
      var c = lg(this);c.idToken = b;return mg(a, c);
    };jg.prototype.pd = function (a, b) {
      var c = lg(this);return ig(ng(a, c), b);
    };
    var lg = function lg(a) {
      var b = {};a.idToken && (b.id_token = a.idToken);a.accessToken && (b.access_token = a.accessToken);a.secret && (b.oauth_token_secret = a.secret);b.providerId = a.providerId;return { postBody: lf(b).toString(), requestUri: "http://localhost" };
    };jg.prototype.G = function () {
      var a = { providerId: this.providerId };this.idToken && (a.oauthIdToken = this.idToken);this.accessToken && (a.oauthAccessToken = this.accessToken);this.secret && (a.oauthTokenSecret = this.secret);return a;
    };
    var og = function og(a, b) {
      this.Gf = b || [];Vf(this, { providerId: a, isOAuthProvider: !0 });this.Td = {};
    };og.prototype.setCustomParameters = function (a) {
      this.Td = jb(a);return this;
    };var P = function P(a) {
      og.call(this, a, ag);this.Bd = [];
    };u(P, og);P.prototype.addScope = function (a) {
      Ua(this.Bd, a) || this.Bd.push(a);return this;
    };P.prototype.ae = function () {
      return Za(this.Bd);
    };
    P.prototype.credential = function (a, b) {
      if (!a && !b) throw new N("argument-error", "credential failed: must provide the ID token and/or the access token.");return new jg(this.providerId, { idToken: a || null, accessToken: b || null });
    };var pg = function pg() {
      P.call(this, "facebook.com");
    };u(pg, P);M(pg, "PROVIDER_ID", "facebook.com");
    var qg = function qg(a) {
      if (!a) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");var b = a;r(a) && (b = a.accessToken);return new pg().credential(null, b);
    },
        rg = function rg() {
      P.call(this, "github.com");
    };u(rg, P);M(rg, "PROVIDER_ID", "github.com");var sg = function sg(a) {
      if (!a) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");var b = a;r(a) && (b = a.accessToken);return new rg().credential(null, b);
    },
        tg = function tg() {
      P.call(this, "google.com");this.addScope("profile");
    };
    u(tg, P);M(tg, "PROVIDER_ID", "google.com");var ug = function ug(a, b) {
      var c = a;r(a) && (c = a.idToken, b = a.accessToken);return new tg().credential(c, b);
    },
        vg = function vg() {
      og.call(this, "twitter.com", $f);
    };u(vg, og);M(vg, "PROVIDER_ID", "twitter.com");
    var wg = function wg(a, b) {
      var c = a;r(c) || (c = { oauthToken: a, oauthTokenSecret: b });if (!c.oauthToken || !c.oauthTokenSecret) throw new N("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");return new jg("twitter.com", c);
    },
        xg = function xg(a, b) {
      this.Db = a;this.td = b;M(this, "providerId", "password");
    };xg.prototype.Fb = function (a) {
      return Q(a, yg, { email: this.Db, password: this.td });
    };xg.prototype.zc = function (a, b) {
      return Q(a, zg, { idToken: b, email: this.Db, password: this.td });
    };
    xg.prototype.pd = function (a, b) {
      return ig(this.Fb(a), b);
    };xg.prototype.G = function () {
      return { email: this.Db, password: this.td };
    };var Ag = function Ag() {
      Vf(this, { providerId: "password", isOAuthProvider: !1 });
    };Vf(Ag, { PROVIDER_ID: "password" });var Bg = function Bg(a) {
      if (!(a.verificationId && a.Uc || a.dc && a.phoneNumber)) throw new N("internal-error");this.N = a;M(this, "providerId", "phone");
    };Bg.prototype.Fb = function (a) {
      return a.verifyPhoneNumber(Cg(this));
    };Bg.prototype.zc = function (a, b) {
      var c = Cg(this);c.idToken = b;return Q(a, Dg, c);
    };
    Bg.prototype.pd = function (a, b) {
      var c = Cg(this);c.operation = "REAUTH";a = Q(a, Eg, c);return ig(a, b);
    };Bg.prototype.G = function () {
      var a = { providerId: "phone" };this.N.verificationId && (a.verificationId = this.N.verificationId);this.N.Uc && (a.verificationCode = this.N.Uc);this.N.dc && (a.temporaryProof = this.N.dc);this.N.phoneNumber && (a.phoneNumber = this.N.phoneNumber);return a;
    };
    var Cg = function Cg(a) {
      return a.N.dc && a.N.phoneNumber ? { temporaryProof: a.N.dc, phoneNumber: a.N.phoneNumber } : { sessionInfo: a.N.verificationId, code: a.N.Uc };
    },
        Fg = function Fg(a) {
      try {
        this.Oe = a || firebase.auth();
      } catch (b) {
        throw new N("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
      }Vf(this, { providerId: "phone", isOAuthProvider: !1 });
    };
    Fg.prototype.verifyPhoneNumber = function (a, b) {
      var c = this.Oe.g;return E(b.verify()).then(function (d) {
        if (!p(d)) throw new N("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch (b.type) {case "recaptcha":
            return Q(c, Gg, { phoneNumber: a, recaptchaToken: d });default:
            throw new N("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}
      });
    };
    var Hg = function Hg(a, b) {
      if (!a) throw new N("missing-verification-id");if (!b) throw new N("missing-verification-code");return new Bg({ verificationId: a, Uc: b });
    };Vf(Fg, { PROVIDER_ID: "phone" });
    var Ig = function Ig(a) {
      if (a.temporaryProof && a.phoneNumber) return new Bg({ dc: a.temporaryProof, phoneNumber: a.phoneNumber });var b = a && a.providerId;if (!b || "password" === b) return null;var c = a && a.oauthAccessToken,
          d = a && a.oauthTokenSecret;a = a && a.oauthIdToken;try {
        switch (b) {case "google.com":
            return ug(a, c);case "facebook.com":
            return qg(c);case "github.com":
            return sg(c);case "twitter.com":
            return wg(c, d);default:
            return new P(b).credential(a, c);}
      } catch (e) {
        return null;
      }
    },
        Jg = function Jg(a) {
      if (!a.isOAuthProvider) throw new N("invalid-oauth-provider");
    };var Kg = function Kg(a, b, c) {
      N.call(this, a, c);a = b || {};a.email && M(this, "email", a.email);a.phoneNumber && M(this, "phoneNumber", a.phoneNumber);a.credential && M(this, "credential", a.credential);
    };u(Kg, N);Kg.prototype.G = function () {
      var a = { code: this.code, message: this.message };this.email && (a.email = this.email);this.phoneNumber && (a.phoneNumber = this.phoneNumber);var b = this.credential && this.credential.G();b && lb(a, b);return a;
    };Kg.prototype.toJSON = function () {
      return this.G();
    };
    var Lg = function Lg(a) {
      if (a.code) {
        var b = a.code || "";0 == b.indexOf("auth/") && (b = b.substring(5));var c = { credential: Ig(a) };if (a.email) c.email = a.email;else if (a.phoneNumber) c.phoneNumber = a.phoneNumber;else return new N(b, a.message || void 0);return new Kg(b, c, a.message);
      }return null;
    };var Mg = function Mg(a) {
      this.Zf = a;
    };u(Mg, Jc);Mg.prototype.mc = function () {
      return new this.Zf();
    };Mg.prototype.nd = function () {
      return {};
    };
    var R = function R(a, b, c) {
      var d = "Node" == Cf();d = k.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;if (!d) throw new N("internal-error", "The XMLHttpRequest compatibility library was not found.");this.m = a;a = b || {};this.Mf = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";this.Nf = a.secureTokenTimeout || Ng;this.te = jb(a.secureTokenHeaders || Og);this.Xe = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Ye = a.firebaseTimeout || Pg;this.Zd = jb(a.firebaseHeaders || Qg);c && (this.Zd["X-Client-Version"] = c, this.te["X-Client-Version"] = c);this.Pe = new Oc();this.Yf = new Mg(d);
    },
        Rg,
        Ng = new Pf(3E4, 6E4),
        Og = { "Content-Type": "application/x-www-form-urlencoded" },
        Pg = new Pf(3E4, 6E4),
        Qg = { "Content-Type": "application/json" },
        Tg = function Tg(a, b, c, d, e, f, g) {
      Of() ? (rf() ? a = _t(a.Pf, a) : (Rg || (Rg = new D(function (a, b) {
        Sg(a, b);
      })), a = _t(a.Of, a)), a(b, c, d, e, f, g)) : c && c(null);
    };
    R.prototype.Pf = function (a, b, c, d, e, f) {
      var g = "Node" == Cf(),
          l = Df() ? g ? new H(this.Yf) : new H() : new H(this.Pe);if (f) {
        l.ub = Math.max(0, f);var n = setTimeout(function () {
          l.dispatchEvent("timeout");
        }, f);
      }l.listen("complete", function () {
        n && clearTimeout(n);var a = null;try {
          a = JSON.parse(Qe(this)) || null;
        } catch (pb) {
          a = null;
        }b && b(a);
      });qc(l, "ready", function () {
        n && clearTimeout(n);this.Ia || (this.Ia = !0, this.hb());
      });qc(l, "timeout", function () {
        n && clearTimeout(n);this.Ia || (this.Ia = !0, this.hb());b && b(null);
      });l.send(a, c, d, e);
    };
    var Ug = Ga("https://apis.google.com/js/client.js?onload=%{onload}"),
        Vg = "__fcb" + Math.floor(1E6 * Math.random()).toString(),
        Sg = function Sg(a, b) {
      if (((window.gapi || {}).client || {}).request) a();else {
        k[Vg] = function () {
          ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
        };var c = La(Ug, { onload: Vg });Ud(be(c), function () {
          b(Error("CORS_UNSUPPORTED"));
        });
      }
    };
    R.prototype.Of = function (a, b, c, d, e) {
      var f = this;Rg.then(function () {
        window.gapi.client.setApiKey(f.m);var g = window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({ path: a, method: c, body: d, headers: e, authType: "none", callback: function callback(a) {
            window.gapi.auth.setToken(g);b && b(a);
          } });
      }).f(function (a) {
        b && b({ error: { message: a && a.message || "CORS_UNSUPPORTED" } });
      });
    };
    var Xg = function Xg(a, b) {
      return new D(function (c, d) {
        "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Tg(a, a.Mf + "?key=" + encodeURIComponent(a.m), function (a) {
          a ? a.error ? d(Wg(a)) : a.access_token && a.refresh_token ? c(a) : d(new N("internal-error")) : d(new N("network-request-failed"));
        }, "POST", lf(b).toString(), a.te, a.Nf.get()) : d(new N("internal-error"));
      });
    },
        Yg = function Yg(a, b, c, d, e, f) {
      var g = ff(a.Xe + b);J(g, "key", a.m);f && J(g, "cb", la().toString());var l = "GET" == c;if (l) for (var n in d) {
        d.hasOwnProperty(n) && J(g, n, d[n]);
      }return new D(function (b, f) {
        Tg(a, g.toString(), function (a) {
          a ? a.error ? f(Wg(a, e || {})) : b(a) : f(new N("network-request-failed"));
        }, c, l ? void 0 : Fc(Kf(d)), a.Zd, a.Ye.get());
      });
    },
        Zg = function Zg(a) {
      if (!wc.test(a.email)) throw new N("invalid-email");
    },
        $g = function $g(a) {
      "email" in a && Zg(a);
    },
        bh = function bh(a, b) {
      return Q(a, ah, { identifier: b, continueUri: Ff() ? nf() : "http://localhost" }).then(function (a) {
        return a.allProviders || [];
      });
    },
        dh = function dh(a) {
      return Q(a, ch, {}).then(function (a) {
        return a.authorizedDomains || [];
      });
    },
        eh = function eh(a) {
      if (!a.idToken) throw new N("internal-error");
    },
        fh = function fh(a) {
      if (a.phoneNumber || a.temporaryProof) {
        if (!a.phoneNumber || !a.temporaryProof) throw new N("internal-error");
      } else {
        if (!a.sessionInfo) throw new N("missing-verification-id");if (!a.code) throw new N("missing-verification-code");
      }
    };R.prototype.signInAnonymously = function () {
      return Q(this, gh, {});
    };R.prototype.updateEmail = function (a, b) {
      return Q(this, hh, { idToken: a, email: b });
    };R.prototype.updatePassword = function (a, b) {
      return Q(this, zg, { idToken: a, password: b });
    };var ih = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
    R.prototype.updateProfile = function (a, b) {
      var c = { idToken: a },
          d = [];db(ih, function (a, f) {
        var e = b[f];null === e ? d.push(a) : f in b && (c[f] = e);
      });d.length && (c.deleteAttribute = d);return Q(this, hh, c);
    };R.prototype.sendPasswordResetEmail = function (a) {
      return Q(this, jh, { requestType: "PASSWORD_RESET", email: a });
    };R.prototype.sendEmailVerification = function (a) {
      return Q(this, kh, { requestType: "VERIFY_EMAIL", idToken: a });
    };R.prototype.verifyPhoneNumber = function (a) {
      return Q(this, lh, a);
    };
    var nh = function nh(a, b, c) {
      return Q(a, mh, { idToken: b, deleteProvider: c });
    },
        oh = function oh(a) {
      if (!a.requestUri || !a.sessionId && !a.postBody) throw new N("internal-error");
    },
        ph = function ph(a) {
      var b = null;a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = Lg(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = Lg(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = Lg(a));if (b) throw b;if (!a.idToken) throw new N("internal-error");
    },
        kg = function kg(a, b) {
      b.returnIdpCredential = !0;return Q(a, qh, b);
    },
        mg = function mg(a, b) {
      b.returnIdpCredential = !0;return Q(a, rh, b);
    },
        ng = function ng(a, b) {
      b.returnIdpCredential = !0;b.autoCreate = !1;return Q(a, sh, b);
    },
        th = function th(a) {
      if (!a.oobCode) throw new N("invalid-action-code");
    };R.prototype.confirmPasswordReset = function (a, b) {
      return Q(this, uh, { oobCode: a, newPassword: b });
    };R.prototype.checkActionCode = function (a) {
      return Q(this, vh, { oobCode: a });
    };R.prototype.applyActionCode = function (a) {
      return Q(this, wh, { oobCode: a });
    };
    var wh = { endpoint: "setAccountInfo", D: th, Za: "email" },
        vh = { endpoint: "resetPassword", D: th, W: function W(a) {
        if (!a.email || !a.requestType) throw new N("internal-error");
      } },
        xh = { endpoint: "signupNewUser", D: function D(a) {
        Zg(a);if (!a.password) throw new N("weak-password");
      }, W: eh, wa: !0 },
        ah = { endpoint: "createAuthUri" },
        yh = { endpoint: "deleteAccount", Xa: ["idToken"] },
        mh = { endpoint: "setAccountInfo", Xa: ["idToken", "deleteProvider"], D: function D(a) {
        if (!ga(a.deleteProvider)) throw new N("internal-error");
      } },
        zh = { endpoint: "getAccountInfo" },
        kh = { endpoint: "getOobConfirmationCode", Xa: ["idToken", "requestType"], D: function D(a) {
        if ("VERIFY_EMAIL" != a.requestType) throw new N("internal-error");
      }, Za: "email" },
        jh = { endpoint: "getOobConfirmationCode", Xa: ["requestType"], D: function D(a) {
        if ("PASSWORD_RESET" != a.requestType) throw new N("internal-error");Zg(a);
      }, Za: "email" },
        ch = { Md: !0, endpoint: "getProjectConfig", ee: "GET" },
        Ah = { Md: !0, endpoint: "getRecaptchaParam", ee: "GET", W: function W(a) {
        if (!a.recaptchaSiteKey) throw new N("internal-error");
      } },
        uh = { endpoint: "resetPassword",
      D: th, Za: "email" },
        Gg = { endpoint: "sendVerificationCode", Xa: ["phoneNumber", "recaptchaToken"], Za: "sessionInfo" },
        hh = { endpoint: "setAccountInfo", Xa: ["idToken"], D: $g, wa: !0 },
        zg = { endpoint: "setAccountInfo", Xa: ["idToken"], D: function D(a) {
        $g(a);if (!a.password) throw new N("weak-password");
      }, W: eh, wa: !0 },
        gh = { endpoint: "signupNewUser", W: eh, wa: !0 },
        qh = { endpoint: "verifyAssertion", D: oh, W: ph, wa: !0 },
        sh = { endpoint: "verifyAssertion", D: oh, W: function W(a) {
        if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new N("user-not-found");
        if (!a.idToken) throw new N("internal-error");
      }, wa: !0 },
        rh = { endpoint: "verifyAssertion", D: function D(a) {
        oh(a);if (!a.idToken) throw new N("internal-error");
      }, W: ph, wa: !0 },
        Bh = { endpoint: "verifyCustomToken", D: function D(a) {
        if (!a.token) throw new N("invalid-custom-token");
      }, W: eh, wa: !0 },
        yg = { endpoint: "verifyPassword", D: function D(a) {
        Zg(a);if (!a.password) throw new N("wrong-password");
      }, W: eh, wa: !0 },
        lh = { endpoint: "verifyPhoneNumber", D: fh, W: eh },
        Dg = { endpoint: "verifyPhoneNumber", D: function D(a) {
        if (!a.idToken) throw new N("internal-error");
        fh(a);
      }, W: function W(a) {
        if (a.temporaryProof) throw a.code = "credential-already-in-use", Lg(a);eh(a);
      } },
        Eg = { Se: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", D: fh, W: eh },
        Q = function Q(a, b, c) {
      if (!Yf(c, b.Xa)) return F(new N("internal-error"));var d = b.ee || "POST",
          e;return E(c).then(b.D).then(function () {
        b.wa && (c.returnSecureToken = !0);return Yg(a, b.endpoint, d, c, b.Se, b.Md || !1);
      }).then(function (a) {
        return e = a;
      }).then(b.W).then(function () {
        if (!b.Za) return e;if (!(b.Za in e)) throw new N("internal-error");return e[b.Za];
      });
    },
        Wg = function Wg(a, b) {
      var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };if (c = d[c] ? new N(d[c]) : null) return c;c = a.error && a.error.message || "";d = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled",
        MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", INVALID_APP_ID: "invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code",
        INVALID_PHONE_NUMBER: "invalid-phone-number", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_PHONE_NUMBER: "missing-phone-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired" };lb(d, b || {});b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;for (var e in d) {
        if (0 === c.indexOf(e)) return new N(d[e], b);
      }!b && a && (b = Jf(a));return new N("internal-error", b);
    };var Ch = function Ch(a) {
      this.C = a;
    };Ch.prototype.value = function () {
      return this.C;
    };Ch.prototype.ve = function (a) {
      this.C.style = a;return this;
    };Ch.prototype.getStyle = function () {
      return this.C.style;
    };var Dh = function Dh(a) {
      this.C = a || {};
    };h = Dh.prototype;h.value = function () {
      return this.C;
    };h.getUrl = function () {
      return this.C.url;
    };h.ve = function (a) {
      this.C.style = a;return this;
    };h.getStyle = function () {
      return this.C.style;
    };h.getId = function () {
      return this.C.id;
    };h.getContext = function () {
      return this.C.context;
    };var Fh = function Fh(a) {
      this.Wf = a;this.tc = null;this.rd = Eh(this);
    },
        Gh = function Gh(a) {
      var b = new Dh();b.C.where = document.body;b.C.url = a.Wf;b.C.messageHandlersFilter = L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.C.attributes = b.C.attributes || {};new Ch(b.C.attributes).ve({ position: "absolute", top: "-100px", width: "1px", height: "1px" });b.C.dontclear = !0;return b;
    },
        Eh = function Eh(a) {
      return Hh().then(function () {
        return new D(function (b, c) {
          L("gapi.iframes.getContext")().open(Gh(a).value(), function (d) {
            a.tc = d;a.tc.restyle({ setHideOnLeave: !1 });
            var e = setTimeout(function () {
              c(Error("Network Error"));
            }, Ih.get()),
                f = function f() {
              clearTimeout(e);b();
            };d.ping(f).then(f, function () {
              c(Error("Network Error"));
            });
          });
        });
      });
    };Fh.prototype.sendMessage = function (a) {
      var b = this;return this.rd.then(function () {
        return new D(function (c) {
          b.tc.send(a.type, a, c, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
        });
      });
    };
    var Jh = function Jh(a, b) {
      a.rd.then(function () {
        a.tc.register("authEvent", b, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    },
        Kh = Ga("https://apis.google.com/js/api.js?onload=%{onload}"),
        Lh = new Pf(3E4, 6E4),
        Ih = new Pf(5E3, 15E3),
        Mh = null,
        Hh = function Hh() {
      return Mh ? Mh : Mh = new D(function (a, b) {
        if (Of()) {
          var c = function c() {
            Nf();L("gapi.load")("gapi.iframes", { callback: a, ontimeout: function ontimeout() {
                Nf();b(Error("Network Error"));
              }, timeout: Lh.get() });
          };if (L("gapi.iframes.Iframe")) a();else if (L("gapi.load")) c();else {
            var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();k[d] = function () {
              L("gapi.load") ? c() : b(Error("Network Error"));
            };d = La(Kh, { onload: d });E(be(d)).f(function () {
              b(Error("Network Error"));
            });
          }
        } else b(Error("Network Error"));
      }).f(function (a) {
        Mh = null;throw a;
      });
    };var Nh = function Nh(a, b, c) {
      this.B = a;this.m = b;this.w = c;this.ab = null;this.gc = gf(this.B, "/__/auth/iframe");J(this.gc, "apiKey", this.m);J(this.gc, "appName", this.w);
    };Nh.prototype.Fd = function (a) {
      this.ab = a;return this;
    };Nh.prototype.toString = function () {
      this.ab ? J(this.gc, "v", this.ab) : this.gc.removeParameter("v");return this.gc.toString();
    };var Oh = function Oh(a, b, c, d, e) {
      this.B = a;this.m = b;this.w = c;this.Ne = d;this.ab = this.S = this.zd = null;this.Vb = e;
    };Oh.prototype.Fd = function (a) {
      this.ab = a;return this;
    };
    Oh.prototype.toString = function () {
      var a = gf(this.B, "/__/auth/handler");J(a, "apiKey", this.m);J(a, "appName", this.w);J(a, "authType", this.Ne);if (this.Vb.isOAuthProvider) {
        J(a, "providerId", this.Vb.providerId);var b = this.Vb,
            c = Kf(b.Td),
            d;for (d in c) {
          c[d] = c[d].toString();
        }b = b.Gf;c = jb(c);for (d = 0; d < b.length; d++) {
          var e = b[d];e in c && delete c[e];
        }hb(c) || J(a, "customParameters", Jf(c));
      }"function" === typeof this.Vb.ae && (b = this.Vb.ae(), b.length && J(a, "scopes", b.join(",")));this.zd ? J(a, "redirectUrl", this.zd) : a.removeParameter("redirectUrl");
      this.S ? J(a, "eventId", this.S) : a.removeParameter("eventId");this.ab ? J(a, "v", this.ab) : a.removeParameter("v");if (this.ic) for (var f in this.ic) {
        this.ic.hasOwnProperty(f) && !ef(a, f) && J(a, f, this.ic[f]);
      }return a.toString();
    };
    var Ph = function Ph(a, b, c, d) {
      this.B = a;this.m = b;this.w = c;this.$e = (this.Ga = d || null) ? Ef(this.Ga) : null;d = this.Ga;this.jf = new Nh(a, b, c).Fd(d).toString();this.pa = [];this.g = new R(b, null, this.$e);this.vc = this.sa = null;
    },
        Qh = function Qh(a) {
      var b = nf();return dh(a).then(function (a) {
        a: {
          for (var c = ff(b), e = c.ma, c = c.ka, f = 0; f < a.length; f++) {
            var g = a[f];var l = c;var n = e;0 == g.indexOf("chrome-extension://") ? l = ff(g).ka == l && "chrome-extension" == n : "http" != n && "https" != n ? l = !1 : wf.test(g) ? l = l == g : (g = g.split(".").join("\\."), l = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(l));if (l) {
              a = !0;break a;
            }
          }a = !1;
        }if (!a) throw new gg(nf());
      });
    };h = Ph.prototype;h.Lb = function () {
      if (this.vc) return this.vc;var a = this;return this.vc = xf().then(function () {
        a.sc = new Fh(a.jf);Rh(a);
      });
    };h.ac = function (a, b, c) {
      var d = new N("popup-closed-by-user"),
          e = new N("web-storage-unsupported"),
          f = this,
          g = !1;return this.Na().then(function () {
        Sh(f).then(function (c) {
          c || (a && tf(a), b(e), g = !0);
        });
      }).f(function () {}).then(function () {
        if (!g) return vf(a);
      }).then(function () {
        if (!g) return Ae(c).then(function () {
          b(d);
        });
      });
    };
    h.we = function () {
      var a = K();return !If(a) && !Mf(a);
    };h.de = function () {
      return !1;
    };h.Tb = function (a, b, c, d, e, f, g) {
      if (!a) return F(new N("popup-blocked"));if (g && !If()) return this.Na().f(function (b) {
        tf(a);e(b);
      }), d(), E();this.sa || (this.sa = Qh(this.g));var l = this;return this.sa.then(function () {
        var b = l.Na().f(function (b) {
          tf(a);e(b);throw b;
        });d();return b;
      }).then(function () {
        Jg(c);if (!g) {
          var d = Th(l.B, l.m, l.w, b, c, null, f, l.Ga);of(d, a);
        }
      }).f(function (a) {
        "auth/network-request-failed" == a.code && (l.sa = null);throw a;
      });
    };
    h.Ub = function (a, b, c) {
      this.sa || (this.sa = Qh(this.g));var d = this;return this.sa.then(function () {
        Jg(b);var e = Th(d.B, d.m, d.w, a, b, nf(), c, d.Ga);of(e);
      }).f(function (a) {
        "auth/network-request-failed" == a.code && (d.sa = null);throw a;
      });
    };h.Na = function () {
      var a = this;return this.Lb().then(function () {
        return a.sc.rd;
      }).f(function () {
        a.sa = null;throw new N("network-request-failed");
      });
    };h.ze = function () {
      return !0;
    };
    var Th = function Th(a, b, c, d, e, f, g, l, n) {
      a = new Oh(a, b, c, d, e);a.zd = f;a.S = g;f = a.Fd(l);f.ic = jb(n || null);return f.toString();
    },
        Rh = function Rh(a) {
      if (!a.sc) throw Error("IfcHandler must be initialized!");Jh(a.sc, function (b) {
        var c = {};if (b && b.authEvent) {
          var d = !1;b = fg(b.authEvent);for (c = 0; c < a.pa.length; c++) {
            d = a.pa[c](b) || d;
          }c = {};c.status = d ? "ACK" : "ERROR";return E(c);
        }c.status = "ERROR";return E(c);
      });
    },
        Sh = function Sh(a) {
      var b = { type: "webStorageSupport" };return a.Lb().then(function () {
        return a.sc.sendMessage(b);
      }).then(function (a) {
        if (a && a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport;throw Error();
      });
    };Ph.prototype.eb = function (a) {
      this.pa.push(a);
    };Ph.prototype.Zb = function (a) {
      Xa(this.pa, function (b) {
        return b == a;
      });
    };var Uh = function Uh(a, b, c) {
      M(this, "type", "recaptcha");this.Vc = this.zb = null;this.Bb = !1;this.Rd = a;this.za = b || { theme: "light", type: "image" };this.J = [];if (this.za.sitekey) throw new N("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.wc = "invisible" === this.za.size;if (!kd(a) || !this.wc && kd(a).hasChildNodes()) throw new N("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");try {
        this.h = c || firebase.app();
      } catch (g) {
        throw new N("argument-error", "No firebase.app.App instance is currently initialized.");
      }if (this.h.options && this.h.options.apiKey) a = firebase.SDK_VERSION ? Ef(firebase.SDK_VERSION) : null, this.g = new R(this.h.options && this.h.options.apiKey, null, a);else throw new N("invalid-api-key");var d = this;this.Qc = [];var e = this.za.callback;this.za.callback = function (a) {
        d.Cb(a);if ("function" === typeof e) e(a);else if ("string" === typeof e) {
          var b = L(e, k);"function" === typeof b && b(a);
        }
      };var f = this.za["expired-callback"];this.za["expired-callback"] = function () {
        d.Cb(null);
        if ("function" === typeof f) f();else if ("string" === typeof f) {
          var a = L(f, k);"function" === typeof a && a();
        }
      };
    };Uh.prototype.Cb = function (a) {
      for (var b = 0; b < this.Qc.length; b++) {
        try {
          this.Qc[b](a);
        } catch (c) {}
      }
    };var Vh = function Vh(a, b) {
      Xa(a.Qc, function (a) {
        return a == b;
      });
    };Uh.prototype.c = function (a) {
      var b = this;this.J.push(a);Cd(a, function () {
        Wa(b.J, a);
      });return a;
    };
    Uh.prototype.Mb = function () {
      var a = this;return this.zb ? this.zb : this.zb = this.c(E().then(function () {
        if (Ff()) return xf();throw new N("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
      }).then(function () {
        return Xh();
      }).then(function () {
        return Q(a.g, Ah, {});
      }).then(function (b) {
        a.za.sitekey = b.recaptchaSiteKey;
      }).f(function (b) {
        a.zb = null;throw b;
      }));
    };
    Uh.prototype.render = function () {
      Yh(this);var a = this;return this.c(this.Mb().then(function () {
        if (null === a.Vc) {
          var b = a.Rd;if (!a.wc) {
            var c = kd(b),
                b = od("DIV");c.appendChild(b);
          }a.Vc = grecaptcha.render(b, a.za);
        }return a.Vc;
      }));
    };Uh.prototype.verify = function () {
      Yh(this);var a = this;return this.c(this.render().then(function (b) {
        return new D(function (c) {
          var d = grecaptcha.getResponse(b);if (d) c(d);else {
            var e = function e(b) {
              b && (Vh(a, e), c(b));
            };a.Qc.push(e);a.wc && grecaptcha.execute(a.Vc);
          }
        });
      }));
    };
    var Yh = function Yh(a) {
      if (a.Bb) throw new N("internal-error", "RecaptchaVerifier instance has been destroyed.");
    };Uh.prototype.clear = function () {
      Yh(this);this.Bb = !0;for (var a = 0; a < this.J.length; a++) {
        this.J[a].cancel("RecaptchaVerifier instance has been destroyed.");
      }if (!this.wc) for (var a = kd(this.Rd), b; b = a.firstChild;) {
        a.removeChild(b);
      }
    };
    var Zh = Ga("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit"),
        Xh = function Xh() {
      return new D(function (a, b) {
        if (Of()) {
          if (k.grecaptcha) a();else {
            var c = "__rcb" + Math.floor(1E6 * Math.random()).toString();k[c] = function () {
              k.grecaptcha ? a() : b(new N("internal-error"));delete k[c];
            };var d = La(Zh, { onload: c });E(be(d)).f(function () {
              b(new N("internal-error", "Unable to load external reCAPTCHA dependencies!"));
            });
          }
        } else b(new N("network-request-failed"));
      });
    };var $h = function $h(a) {
      this.F = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;if (!this.F) throw new N("internal-error", "The React Native compatibility library was not found.");
    };h = $h.prototype;h.get = function (a) {
      return E(this.F.getItem(a)).then(function (a) {
        return a && Lf(a);
      });
    };h.set = function (a, b) {
      return E(this.F.setItem(a, Jf(b)));
    };h.remove = function (a) {
      return E(this.F.removeItem(a));
    };h.fb = function () {};h.Wa = function () {};var ai = function ai() {
      this.F = {};
    };h = ai.prototype;h.get = function (a) {
      return E(this.F[a]);
    };h.set = function (a, b) {
      this.F[a] = b;return E();
    };h.remove = function (a) {
      delete this.F[a];return E();
    };h.fb = function () {};h.Wa = function () {};var ci = function ci() {
      if (!bi()) {
        if ("Node" == Cf()) throw new N("internal-error", "The LocalStorage compatibility library was not found.");throw new N("web-storage-unsupported");
      }this.F = k.localStorage || firebase.INTERNAL.node.localStorage;
    },
        bi = function bi() {
      var a = "Node" == Cf(),
          a = k.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = ci.prototype;
    h.get = function (a) {
      var b = this;return E().then(function () {
        var c = b.F.getItem(a);return Lf(c);
      });
    };h.set = function (a, b) {
      var c = this;return E().then(function () {
        var d = Jf(b);null === d ? c.remove(a) : c.F.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return E().then(function () {
        b.F.removeItem(a);
      });
    };h.fb = function (a) {
      k.window && jc(k.window, "storage", a);
    };h.Wa = function (a) {
      k.window && rc(k.window, "storage", a);
    };var di = function di() {
      this.F = {};
    };h = di.prototype;h.get = function () {
      return E(null);
    };h.set = function () {
      return E();
    };h.remove = function () {
      return E();
    };h.fb = function () {};h.Wa = function () {};var fi = function fi() {
      if (!ei()) {
        if ("Node" == Cf()) throw new N("internal-error", "The SessionStorage compatibility library was not found.");throw new N("web-storage-unsupported");
      }this.F = k.sessionStorage || firebase.INTERNAL.node.sessionStorage;
    },
        ei = function ei() {
      var a = "Node" == Cf(),
          a = k.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = fi.prototype;
    h.get = function (a) {
      var b = this;return E().then(function () {
        var c = b.F.getItem(a);return Lf(c);
      });
    };h.set = function (a, b) {
      var c = this;return E().then(function () {
        var d = Jf(b);null === d ? c.remove(a) : c.F.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return E().then(function () {
        b.F.removeItem(a);
      });
    };h.fb = function () {};h.Wa = function () {};var gi = function gi(a, b, c, d, e, f) {
      if (!window.indexedDB) throw new N("web-storage-unsupported");this.Te = a;this.qd = b;this.cd = c;this.De = d;this.bb = e;this.aa = {};this.bc = [];this.Pb = 0;this.kf = f || k.indexedDB;
    },
        hi,
        ii = function ii(a) {
      return new D(function (b, c) {
        var d = a.kf.open(a.Te, a.bb);d.onerror = function (a) {
          c(Error(a.target.errorCode));
        };d.onupgradeneeded = function (b) {
          b = b.target.result;try {
            b.createObjectStore(a.qd, { keyPath: a.cd });
          } catch (f) {
            c(f);
          }
        };d.onsuccess = function (a) {
          b(a.target.result);
        };
      });
    },
        ji = function ji(a) {
      a.he || (a.he = ii(a));return a.he;
    },
        ki = function ki(a, b) {
      return b.objectStore(a.qd);
    },
        li = function li(a, b, c) {
      return b.transaction([a.qd], c ? "readwrite" : "readonly");
    },
        mi = function mi(a) {
      return new D(function (b, c) {
        a.onsuccess = function (a) {
          a && a.target ? b(a.target.result) : b();
        };a.onerror = function (a) {
          c(Error(a.target.errorCode));
        };
      });
    };h = gi.prototype;
    h.set = function (a, b) {
      var c = !1,
          d,
          e = this;return Cd(ji(this).then(function (b) {
        d = b;b = ki(e, li(e, d, !0));return mi(b.get(a));
      }).then(function (f) {
        var g = ki(e, li(e, d, !0));if (f) return f.value = b, mi(g.put(f));e.Pb++;c = !0;f = {};f[e.cd] = a;f[e.De] = b;return mi(g.add(f));
      }).then(function () {
        e.aa[a] = b;
      }), function () {
        c && e.Pb--;
      });
    };h.get = function (a) {
      var b = this;return ji(this).then(function (c) {
        return mi(ki(b, li(b, c, !1)).get(a));
      }).then(function (a) {
        return a && a.value;
      });
    };
    h.remove = function (a) {
      var b = !1,
          c = this;return Cd(ji(this).then(function (d) {
        b = !0;c.Pb++;return mi(ki(c, li(c, d, !0))["delete"](a));
      }).then(function () {
        delete c.aa[a];
      }), function () {
        b && c.Pb--;
      });
    };
    h.Sf = function () {
      var a = this;return ji(this).then(function (b) {
        var c = ki(a, li(a, b, !1));return c.getAll ? mi(c.getAll()) : new D(function (a, b) {
          var d = [],
              e = c.openCursor();e.onsuccess = function (b) {
            (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d);
          };e.onerror = function (a) {
            b(Error(a.target.errorCode));
          };
        });
      }).then(function (b) {
        var c = {},
            d = [];if (0 == a.Pb) {
          for (d = 0; d < b.length; d++) {
            c[b[d][a.cd]] = b[d][a.De];
          }d = pf(a.aa, c);a.aa = c;
        }return d;
      });
    };h.fb = function (a) {
      0 == this.bc.length && this.Hd();this.bc.push(a);
    };
    h.Wa = function (a) {
      Xa(this.bc, function (b) {
        return b == a;
      });0 == this.bc.length && this.Lc();
    };h.Hd = function () {
      var a = this;this.Lc();var b = function b() {
        a.ud = Ae(800).then(_t(a.Sf, a)).then(function (b) {
          0 < b.length && y(a.bc, function (a) {
            a(b);
          });
        }).then(b).f(function (a) {
          "STOP_EVENT" != a.message && b();
        });return a.ud;
      };b();
    };h.Lc = function () {
      this.ud && this.ud.cancel("STOP_EVENT");
    };var qi = function qi() {
      this.Vd = { Browser: ni, Node: oi, ReactNative: pi }[Cf()];
    },
        ri,
        ni = { V: ci, Jd: fi },
        oi = { V: ci, Jd: fi },
        pi = { V: $h, Jd: di };var si = function si(a, b) {
      this.Re = b;M(this, "verificationId", a);
    };si.prototype.confirm = function (a) {
      a = Hg(this.verificationId, a);return this.Re(a);
    };var ti = function ti(a, b, c, d) {
      return new Fg(a).verifyPhoneNumber(b, c).then(function (a) {
        return new si(a, d);
      });
    };var ui = function ui(a) {
      var b = {},
          c = a.email,
          d = a.newEmail;a = a.requestType;if (!c || !a) throw Error("Invalid provider user info!");b.fromEmail = d || null;b.email = c;M(this, "operation", a);M(this, "data", Zf(b));
    };var vi = function vi(a, b, c, d, e, f) {
      this.Af = a;this.If = b;this.cf = c;this.Ac = d;this.Kd = e;this.Jf = !!f;this.nb = null;this.Oa = this.Ac;if (this.Kd < this.Ac) throw Error("Proactive refresh lower bound greater than upper bound!");
    };vi.prototype.start = function () {
      this.Oa = this.Ac;wi(this, !0);
    };
    var xi = function xi(a, b) {
      if (b) return a.Oa = a.Ac, a.cf();b = a.Oa;a.Oa *= 2;a.Oa > a.Kd && (a.Oa = a.Kd);return b;
    },
        wi = function wi(a, b) {
      a.stop();a.nb = Ae(xi(a, b)).then(function () {
        return a.Jf ? E() : Rf();
      }).then(function () {
        return a.Af();
      }).then(function () {
        wi(a, !0);
      }).f(function (b) {
        a.If(b) && wi(a, !1);
      });
    };vi.prototype.stop = function () {
      this.nb && (this.nb.cancel(), this.nb = null);
    };var Di = function Di(a) {
      var b = {};b["facebook.com"] = yi;b["google.com"] = zi;b["github.com"] = Ai;b["twitter.com"] = Bi;var c = a && a.providerId;return c ? b[c] ? new b[c](a) : new Ci(a) : null;
    },
        Ci = function Ci(a) {
      var b = Lf(a.rawUserInfo || "{}");a = a.providerId;if (!a) throw Error("Invalid additional user info!");M(this, "profile", Zf(b || {}));M(this, "providerId", a);
    },
        yi = function yi(a) {
      Ci.call(this, a);if ("facebook.com" != this.providerId) throw Error("Invalid provider id!");
    };u(yi, Ci);
    var Ai = function Ai(a) {
      Ci.call(this, a);if ("github.com" != this.providerId) throw Error("Invalid provider id!");M(this, "username", this.profile && this.profile.login || null);
    };u(Ai, Ci);var zi = function zi(a) {
      Ci.call(this, a);if ("google.com" != this.providerId) throw Error("Invalid provider id!");
    };u(zi, Ci);var Bi = function Bi(a) {
      Ci.call(this, a);if ("twitter.com" != this.providerId) throw Error("Invalid provider id!");M(this, "username", a.screenName || null);
    };u(Bi, Ci);var Ei = function Ei(a, b, c, d) {
      this.le = a;this.Cd = b;this.Kf = c;this.$b = d;this.T = {};ri || (ri = new qi());a = ri;try {
        if (mf()) {
          hi || (hi = new gi("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1));var e = hi;
        } else e = new a.Vd.V();this.Sa = e;
      } catch (f) {
        this.Sa = new ai(), this.$b = !0;
      }try {
        this.Oc = new a.Vd.Jd();
      } catch (f) {
        this.Oc = new ai();
      }this.Id = _t(this.xe, this);this.aa = {};
    },
        Fi,
        Gi = function Gi() {
      Fi || (Fi = new Ei("firebase", ":", !Mf(K()) && Bf() ? !0 : !1, If()));return Fi;
    };h = Ei.prototype;
    h.Z = function (a, b) {
      return this.le + this.Cd + a.name + (b ? this.Cd + b : "");
    };h.get = function (a, b) {
      return (a.V ? this.Sa : this.Oc).get(this.Z(a, b));
    };h.remove = function (a, b) {
      b = this.Z(a, b);a.V && !this.$b && (this.aa[b] = null);return (a.V ? this.Sa : this.Oc).remove(b);
    };h.set = function (a, b, c) {
      var d = this.Z(a, c),
          e = this,
          f = a.V ? this.Sa : this.Oc;return f.set(d, b).then(function () {
        return f.get(d);
      }).then(function (b) {
        a.V && !this.$b && (e.aa[d] = b);
      });
    };
    h.addListener = function (a, b, c) {
      a = this.Z(a, b);this.$b || (this.aa[a] = k.localStorage.getItem(a));hb(this.T) && this.Hd();this.T[a] || (this.T[a] = []);this.T[a].push(c);
    };h.removeListener = function (a, b, c) {
      a = this.Z(a, b);this.T[a] && (Xa(this.T[a], function (a) {
        return a == c;
      }), 0 == this.T[a].length && delete this.T[a]);hb(this.T) && this.Lc();
    };h.Hd = function () {
      this.Sa.fb(this.Id);this.$b || mf() || Hi(this);
    };
    var Hi = function Hi(a) {
      Ii(a);a.od = setInterval(function () {
        for (var b in a.T) {
          var c = k.localStorage.getItem(b),
              d = a.aa[b];c != d && (a.aa[b] = c, c = new Yb({ type: "storage", key: b, target: window, oldValue: d, newValue: c, pe: !0 }), a.xe(c));
        }
      }, 1E3);
    },
        Ii = function Ii(a) {
      a.od && (clearInterval(a.od), a.od = null);
    };Ei.prototype.Lc = function () {
      this.Sa.Wa(this.Id);Ii(this);
    };
    Ei.prototype.xe = function (a) {
      if (a && a.af) {
        var b = a.la.key;if (0 == b.indexOf(this.le + this.Cd) && this.T[b]) {
          "undefined" !== typeof a.la.pe ? this.Sa.Wa(this.Id) : Ii(this);if (this.Kf) {
            var c = k.localStorage.getItem(b),
                d = a.la.newValue;if (d !== c) null !== d ? k.localStorage.setItem(b, d) : k.localStorage.removeItem(b);else if (this.aa[b] === d && "undefined" === typeof a.la.pe) return;
          }this.aa[b] = k.localStorage.getItem(b);this.Od(b);
        }
      } else y(a, _t(this.Od, this));
    };Ei.prototype.Od = function (a) {
      this.T[a] && y(this.T[a], function (a) {
        a();
      });
    };var Ji = function Ji(a, b) {
      this.v = a;this.l = b || Gi();
    },
        Ki = { name: "authEvent", V: !0 },
        Li = function Li(a) {
      return a.l.get(Ki, a.v).then(function (a) {
        return fg(a);
      });
    };Ji.prototype.eb = function (a) {
      this.l.addListener(Ki, this.v, a);
    };Ji.prototype.Zb = function (a) {
      this.l.removeListener(Ki, this.v, a);
    };var Mi = function Mi(a) {
      this.l = a || Gi();
    },
        Ni = { name: "sessionId", V: !1 };Mi.prototype.oc = function (a) {
      return this.l.get(Ni, a);
    };var Oi = function Oi(a, b, c, d, e, f) {
      this.B = a;this.m = b;this.w = c;this.Ga = d || null;this.ye = b + ":" + c;this.Lf = new Mi();this.$d = new Ji(this.ye);this.md = null;this.pa = [];this.pf = e || 500;this.Ef = f || 2E3;this.Kb = this.Dc = null;
    },
        Pi = function Pi(a) {
      return new N("invalid-cordova-configuration", a);
    };
    Oi.prototype.Na = function () {
      return this.Mb ? this.Mb : this.Mb = zf().then(function () {
        if ("function" !== typeof L("universalLinks.subscribe", k)) throw Pi("cordova-universal-links-plugin is not installed");if ("undefined" === typeof L("BuildInfo.packageName", k)) throw Pi("cordova-plugin-buildinfo is not installed");if ("function" !== typeof L("cordova.plugins.browsertab.openUrl", k)) throw Pi("cordova-plugin-browsertab is not installed");if ("function" !== typeof L("cordova.InAppBrowser.open", k)) throw Pi("cordova-plugin-inappbrowser is not installed");
      }, function () {
        throw new N("cordova-not-ready");
      });
    };var Qi = function Qi() {
      for (var a = 20, b = []; 0 < a;) {
        b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
      }return b.join("");
    },
        Ri = function Ri(a) {
      var b = new Rb();b.update(a);return $a(b.digest());
    };h = Oi.prototype;h.ac = function (a, b) {
      b(new N("operation-not-supported-in-this-environment"));return E();
    };h.Tb = function () {
      return F(new N("operation-not-supported-in-this-environment"));
    };h.ze = function () {
      return !1;
    };h.we = function () {
      return !0;
    };
    h.de = function () {
      return !0;
    };
    h.Ub = function (a, b, c) {
      if (this.Dc) return F(new N("redirect-operation-pending"));var d = this,
          e = k.document,
          f = null,
          g = null,
          l = null,
          n = null;return this.Dc = Cd(E().then(function () {
        Jg(b);return Si(d);
      }).then(function () {
        return Ti(d, a, b, c);
      }).then(function () {
        return new D(function (a, b) {
          g = function g() {
            var b = L("cordova.plugins.browsertab.close", k);a();"function" === typeof b && b();d.Kb && "function" === typeof d.Kb.close && (d.Kb.close(), d.Kb = null);return !1;
          };d.eb(g);l = function l() {
            f || (f = Ae(d.Ef).then(function () {
              b(new N("redirect-cancelled-by-user"));
            }));
          };n = function n() {
            Qf() && l();
          };e.addEventListener("resume", l, !1);K().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", n, !1);
        }).f(function (a) {
          return Ui(d).then(function () {
            throw a;
          });
        });
      }), function () {
        l && e.removeEventListener("resume", l, !1);n && e.removeEventListener("visibilitychange", n, !1);f && f.cancel();g && d.Zb(g);d.Dc = null;
      });
    };
    var Ti = function Ti(a, b, c, d) {
      var e = Qi(),
          f = new O(b, d, null, e, new N("no-auth-event")),
          g = L("BuildInfo.packageName", k);if ("string" !== typeof g) throw new N("invalid-cordova-configuration");var l = L("BuildInfo.displayName", k),
          n = {};if (K().toLowerCase().match(/iphone|ipad|ipod/)) n.ibi = g;else if (K().toLowerCase().match(/android/)) n.apn = g;else return F(new N("operation-not-supported-in-this-environment"));l && (n.appDisplayName = l);e = Ri(e);n.sessionId = e;var C = Th(a.B, a.m, a.w, b, c, null, d, a.Ga, n);return a.Na().then(function () {
        var b = a.ye;return a.Lf.l.set(Ki, f.G(), b);
      }).then(function () {
        var b = L("cordova.plugins.browsertab.isAvailable", k);if ("function" !== typeof b) throw new N("invalid-cordova-configuration");var c = null;b(function (b) {
          if (b) {
            c = L("cordova.plugins.browsertab.openUrl", k);if ("function" !== typeof c) throw new N("invalid-cordova-configuration");c(C);
          } else {
            c = L("cordova.InAppBrowser.open", k);if ("function" !== typeof c) throw new N("invalid-cordova-configuration");b = c;var d = K();d = !(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
            a.Kb = b(C, d ? "_blank" : "_system", "location=yes");
          }
        });
      });
    };Oi.prototype.Cb = function (a) {
      for (var b = 0; b < this.pa.length; b++) {
        try {
          this.pa[b](a);
        } catch (c) {}
      }
    };
    var Si = function Si(a) {
      a.md || (a.md = a.Na().then(function () {
        return new D(function (b) {
          var c = function c(d) {
            b(d);a.Zb(c);return !1;
          };a.eb(c);Vi(a);
        });
      }));return a.md;
    },
        Ui = function Ui(a) {
      var b = null;return Li(a.$d).then(function (c) {
        b = c;c = a.$d;return c.l.remove(Ki, c.v);
      }).then(function () {
        return b;
      });
    },
        Vi = function Vi(a) {
      var b = L("universalLinks.subscribe", k);if ("function" !== typeof b) throw new N("invalid-cordova-configuration");var c = new O("unknown", null, null, null, new N("no-auth-event")),
          d = !1,
          e = Ae(a.pf).then(function () {
        return Ui(a).then(function () {
          d || a.Cb(c);
        });
      }),
          f = function f(b) {
        d = !0;e && e.cancel();Ui(a).then(function (d) {
          var e = c;if (d && b && b.url) {
            var e = null;var f = b.url;var g = ff(f),
                l = ef(g, "link"),
                n = ef(ff(l), "link"),
                g = ef(g, "deep_link_id");f = ef(ff(g), "link") || g || n || l || f;-1 != f.indexOf("/__/auth/callback") && (e = ff(f), e = Lf(ef(e, "firebaseError") || null), e = (e = "object" === typeof e ? eg(e) : null) ? new O(d.ia, d.S, null, null, e) : new O(d.ia, d.S, f, d.oc()));e = e || c;
          }a.Cb(e);
        });
      },
          g = k.handleOpenURL;k.handleOpenURL = function (a) {
        0 == a.toLowerCase().indexOf(L("BuildInfo.packageName", k).toLowerCase() + "://") && f({ url: a });if ("function" === typeof g) try {
          g(a);
        } catch (n) {
          console.error(n);
        }
      };b(null, f);
    };Oi.prototype.eb = function (a) {
      this.pa.push(a);Si(this).f(function (b) {
        "auth/invalid-cordova-configuration" === b.code && (b = new O("unknown", null, null, null, new N("no-auth-event")), a(b));
      });
    };Oi.prototype.Zb = function (a) {
      Xa(this.pa, function (b) {
        return b == a;
      });
    };var Wi = function Wi(a) {
      this.v = a;this.l = Gi();
    },
        Xi = { name: "pendingRedirect", V: !1 },
        Yi = function Yi(a) {
      return a.l.set(Xi, "pending", a.v);
    },
        Zi = function Zi(a) {
      return a.l.remove(Xi, a.v);
    },
        $i = function $i(a) {
      return a.l.get(Xi, a.v).then(function (a) {
        return "pending" == a;
      });
    };var dj = function dj(a, b, c) {
      this.B = a;this.m = b;this.w = c;this.cc = [];this.lb = !1;this.Zc = _t(this.jd, this);this.Ua = new aj(this);this.vd = new bj(this);this.Qb = new Wi(this.m + ":" + this.w);this.Ca = {};this.Ca.unknown = this.Ua;this.Ca.signInViaRedirect = this.Ua;this.Ca.linkViaRedirect = this.Ua;this.Ca.reauthViaRedirect = this.Ua;this.Ca.signInViaPopup = this.vd;this.Ca.linkViaPopup = this.vd;this.Ca.reauthViaPopup = this.vd;this.U = cj(this.B, this.m, this.w);
    },
        cj = function cj(a, b, c) {
      var d = firebase.SDK_VERSION || null;return yf() ? new Oi(a, b, c, d) : new Ph(a, b, c, d);
    };dj.prototype.reset = function () {
      this.lb = !1;this.U.Zb(this.Zc);this.U = cj(this.B, this.m, this.w);
    };dj.prototype.Lb = function () {
      var a = this;this.lb || (this.lb = !0, this.U.eb(this.Zc));var b = this.U;return this.U.Na().f(function (c) {
        a.U == b && a.reset();throw c;
      });
    };var gj = function gj(a) {
      a.U.we() && a.Lb().f(function (b) {
        var c = new O("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));ej(b) && a.jd(c);
      });a.U.de() || fj(a.Ua);
    };
    dj.prototype.subscribe = function (a) {
      Ua(this.cc, a) || this.cc.push(a);if (!this.lb) {
        var b = this;$i(this.Qb).then(function (a) {
          a ? Zi(b.Qb).then(function () {
            b.Lb().f(function (a) {
              var c = new O("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));ej(a) && b.jd(c);
            });
          }) : gj(b);
        }).f(function () {
          gj(b);
        });
      }
    };dj.prototype.unsubscribe = function (a) {
      Xa(this.cc, function (b) {
        return b == a;
      });
    };
    dj.prototype.jd = function (a) {
      if (!a) throw new N("invalid-auth-event");for (var b = !1, c = 0; c < this.cc.length; c++) {
        var d = this.cc[c];if (d.Pd(a.ia, a.S)) {
          (b = this.Ca[a.ia]) && b.qe(a, d);b = !0;break;
        }
      }fj(this.Ua);return b;
    };var hj = new Pf(2E3, 1E4),
        ij = new Pf(3E4, 6E4);dj.prototype.getRedirectResult = function () {
      return this.Ua.getRedirectResult();
    };dj.prototype.Tb = function (a, b, c, d, e) {
      var f = this;return this.U.Tb(a, b, c, function () {
        f.lb || (f.lb = !0, f.U.eb(f.Zc));
      }, function () {
        f.reset();
      }, d, e);
    };
    var ej = function ej(a) {
      return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
    };dj.prototype.Ub = function (a, b, c) {
      var d = this,
          e;return Yi(this.Qb).then(function () {
        return d.U.Ub(a, b, c).f(function (a) {
          if (ej(a)) throw new N("operation-not-supported-in-this-environment");e = a;return Zi(d.Qb).then(function () {
            throw e;
          });
        }).then(function () {
          return d.U.ze() ? new D(function () {}) : Zi(d.Qb).then(function () {
            return d.getRedirectResult();
          }).then(function () {}).f(function () {});
        });
      });
    };
    dj.prototype.ac = function (a, b, c, d) {
      return this.U.ac(c, function (c) {
        a.Ya(b, null, c, d);
      }, hj.get());
    };var jj = {},
        kj = function kj(a, b, c) {
      var d = b + ":" + c;jj[d] || (jj[d] = new dj(a, b, c));return jj[d];
    },
        aj = function aj(a) {
      this.l = a;this.sb = null;this.Xb = [];this.Wb = [];this.qb = null;this.yd = !1;
    };aj.prototype.reset = function () {
      this.sb = null;this.qb && (this.qb.cancel(), this.qb = null);
    };
    aj.prototype.qe = function (a, b) {
      if (!a) return F(new N("invalid-auth-event"));this.reset();this.yd = !0;var c = a.ia,
          d = a.S,
          e = a.getError() && "auth/web-storage-unsupported" == a.getError().code,
          f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;"unknown" != c || e || f ? a = a.Y ? this.wd(a, b) : b.Eb(c, d) ? this.xd(a, b) : F(new N("invalid-auth-event")) : (lj(this, !1, null, null), a = E());return a;
    };var fj = function fj(a) {
      a.yd || (a.yd = !0, lj(a, !1, null, null));
    };
    aj.prototype.wd = function (a) {
      lj(this, !0, null, a.getError());return E();
    };aj.prototype.xd = function (a, b) {
      var c = this;b = b.Eb(a.ia, a.S);var d = a.vb,
          e = a.oc(),
          f = !!a.ia.match(/Redirect$/);return b(d, e).then(function (a) {
        lj(c, f, a, null);
      }).f(function (a) {
        lj(c, f, null, a);
      });
    };
    var mj = function mj(a, b) {
      a.sb = function () {
        return F(b);
      };if (a.Wb.length) for (var c = 0; c < a.Wb.length; c++) {
        a.Wb[c](b);
      }
    },
        nj = function nj(a, b) {
      a.sb = function () {
        return E(b);
      };if (a.Xb.length) for (var c = 0; c < a.Xb.length; c++) {
        a.Xb[c](b);
      }
    },
        lj = function lj(a, b, c, d) {
      b ? d ? mj(a, d) : nj(a, c) : nj(a, { user: null });a.Xb = [];a.Wb = [];
    };aj.prototype.getRedirectResult = function () {
      var a = this;return new D(function (b, c) {
        a.sb ? a.sb().then(b, c) : (a.Xb.push(b), a.Wb.push(c), oj(a));
      });
    };
    var oj = function oj(a) {
      var b = new N("timeout");a.qb && a.qb.cancel();a.qb = Ae(ij.get()).then(function () {
        a.sb || lj(a, !0, null, b);
      });
    },
        bj = function bj(a) {
      this.l = a;
    };bj.prototype.qe = function (a, b) {
      if (!a) return F(new N("invalid-auth-event"));var c = a.ia,
          d = a.S;return a.Y ? this.wd(a, b) : b.Eb(c, d) ? this.xd(a, b) : F(new N("invalid-auth-event"));
    };bj.prototype.wd = function (a, b) {
      b.Ya(a.ia, null, a.getError(), a.S);return E();
    };
    bj.prototype.xd = function (a, b) {
      var c = a.S,
          d = a.ia,
          e = b.Eb(d, c),
          f = a.vb;a = a.oc();return e(f, a).then(function (a) {
        b.Ya(d, a, null, c);
      }).f(function (a) {
        b.Ya(d, null, a, c);
      });
    };var pj = function pj(a) {
      this.g = a;this.Da = this.ca = null;this.Ja = 0;
    };pj.prototype.G = function () {
      return { apiKey: this.g.m, refreshToken: this.ca, accessToken: this.Da, expirationTime: this.Ja };
    };
    var rj = function rj(a, b) {
      var c = b.idToken,
          d = b.refreshToken;b = qj(b.expiresIn);a.Da = c;a.Ja = b;a.ca = d;
    },
        qj = function qj(a) {
      return la() + 1E3 * parseInt(a, 10);
    },
        sj = function sj(a, b) {
      return Xg(a.g, b).then(function (b) {
        a.Da = b.access_token;a.Ja = qj(b.expires_in);a.ca = b.refresh_token;return { accessToken: a.Da, expirationTime: a.Ja, refreshToken: a.ca };
      }).f(function (b) {
        "auth/user-token-expired" == b.code && (a.ca = null);throw b;
      });
    };
    pj.prototype.getToken = function (a) {
      a = !!a;return this.Da && !this.ca ? F(new N("user-token-expired")) : a || !this.Da || la() > this.Ja - 3E4 ? this.ca ? sj(this, { grant_type: "refresh_token", refresh_token: this.ca }) : E(null) : E({ accessToken: this.Da, expirationTime: this.Ja, refreshToken: this.ca });
    };var tj = function tj(a, b, c, d, e) {
      Vf(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, providerId: b });
    },
        uj = function uj(a, b) {
      Wb.call(this, a);for (var c in b) {
        this[c] = b[c];
      }
    };u(uj, Wb);
    var S = function S(a, b, c) {
      this.J = [];this.m = a.apiKey;this.w = a.appName;this.B = a.authDomain || null;a = firebase.SDK_VERSION ? Ef(firebase.SDK_VERSION) : null;this.g = new R(this.m, null, a);this.na = new pj(this.g);vj(this, b.idToken);rj(this.na, b);M(this, "refreshToken", this.na.ca);wj(this, c || {});oe.call(this);this.Ec = !1;this.B && Hf() && (this.s = kj(this.B, this.m, this.w));this.Kc = [];this.oa = null;this.pb = xj(this);this.xb = _t(this.kd, this);
    };u(S, oe);S.prototype.kd = function () {
      this.pb.nb && (this.pb.stop(), this.pb.start());
    };
    var yj = function yj(a) {
      try {
        return firebase.app(a.w).auth();
      } catch (b) {
        throw new N("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.w + "'!");
      }
    },
        xj = function xj(a) {
      return new vi(function () {
        return a.getIdToken(!0);
      }, function (a) {
        return a && "auth/network-request-failed" == a.code ? !0 : !1;
      }, function () {
        var b = a.na.Ja - la() - 3E5;return 0 < b ? b : 0;
      }, 3E4, 96E4, !1);
    },
        zj = function zj(a) {
      a.Bb || a.pb.nb || (a.pb.start(), rc(a, "tokenChanged", a.xb), jc(a, "tokenChanged", a.xb));
    },
        Aj = function Aj(a) {
      rc(a, "tokenChanged", a.xb);a.pb.stop();
    },
        vj = function vj(a, b) {
      a.ie = b;M(a, "_lat", b);
    },
        Bj = function Bj(a, b) {
      Xa(a.Kc, function (a) {
        return a == b;
      });
    },
        Cj = function Cj(a) {
      for (var b = [], c = 0; c < a.Kc.length; c++) {
        b.push(a.Kc[c](a));
      }return zd(b).then(function () {
        return a;
      });
    },
        Dj = function Dj(a) {
      a.s && !a.Ec && (a.Ec = !0, a.s.subscribe(a));
    },
        wj = function wj(a, b) {
      Vf(a, { uid: b.uid, displayName: b.displayName || null, photoURL: b.photoURL || null, email: b.email || null, emailVerified: b.emailVerified || !1, phoneNumber: b.phoneNumber || null, isAnonymous: b.isAnonymous || !1, providerData: [] });
    };
    M(S.prototype, "providerId", "firebase");var Ej = function Ej() {},
        Fj = function Fj(a) {
      return E().then(function () {
        if (a.Bb) throw new N("app-deleted");
      });
    },
        Gj = function Gj(a) {
      return Qa(a.providerData, function (a) {
        return a.providerId;
      });
    },
        Ij = function Ij(a, b) {
      b && (Hj(a, b.providerId), a.providerData.push(b));
    },
        Hj = function Hj(a, b) {
      Xa(a.providerData, function (a) {
        return a.providerId == b;
      });
    },
        Jj = function Jj(a, b, c) {
      ("uid" != b || c) && a.hasOwnProperty(b) && M(a, b, c);
    };
    S.prototype.copy = function (a) {
      var b = this;b != a && (Vf(this, { uid: a.uid, displayName: a.displayName, photoURL: a.photoURL, email: a.email, emailVerified: a.emailVerified, phoneNumber: a.phoneNumber, isAnonymous: a.isAnonymous, providerData: [] }), y(a.providerData, function (a) {
        Ij(b, a);
      }), this.na = a.na, M(this, "refreshToken", this.na.ca));
    };S.prototype.reload = function () {
      var a = this;return this.c(Fj(this).then(function () {
        return Kj(a).then(function () {
          return Cj(a);
        }).then(Ej);
      }));
    };
    var Kj = function Kj(a) {
      return a.getIdToken().then(function (b) {
        var c = a.isAnonymous;return Lj(a, b).then(function () {
          c || Jj(a, "isAnonymous", !1);return b;
        });
      });
    };S.prototype.getIdToken = function (a) {
      var b = this;return this.c(Fj(this).then(function () {
        return b.na.getToken(a);
      }).then(function (a) {
        if (!a) throw new N("internal-error");a.accessToken != b.ie && (vj(b, a.accessToken), b.Pa());Jj(b, "refreshToken", a.refreshToken);return a.accessToken;
      }));
    };
    S.prototype.getToken = function (a) {
      Sf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] || (Sf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] = !0, "undefined" !== typeof console && "function" === typeof console.warn && console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.getIdToken(a);
    };
    var Mj = function Mj(a, b) {
      b.idToken && a.ie != b.idToken && (rj(a.na, b), a.Pa(), vj(a, b.idToken), Jj(a, "refreshToken", a.na.ca));
    };S.prototype.Pa = function () {
      this.dispatchEvent(new uj("tokenChanged"));
    };var Lj = function Lj(a, b) {
      return Q(a.g, zh, { idToken: b }).then(_t(a.Bf, a));
    };
    S.prototype.Bf = function (a) {
      a = a.users;if (!a || !a.length) throw new N("internal-error");a = a[0];wj(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified, phoneNumber: a.phoneNumber });for (var b = Nj(a), c = 0; c < b.length; c++) {
        Ij(this, b[c]);
      }Jj(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    };
    var Nj = function Nj(a) {
      return (a = a.providerUserInfo) && a.length ? Qa(a, function (a) {
        return new tj(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl);
      }) : [];
    };S.prototype.reauthenticateAndRetrieveDataWithCredential = function (a) {
      var b = this,
          c = null;return this.c(a.pd(this.g, this.uid).then(function (a) {
        Mj(b, a);c = Oj(b, a, "reauthenticate");b.oa = null;return b.reload();
      }).then(function () {
        return c;
      }), !0);
    };S.prototype.reauthenticateWithCredential = function (a) {
      return this.reauthenticateAndRetrieveDataWithCredential(a).then(function () {});
    };
    var Pj = function Pj(a, b) {
      return Kj(a).then(function () {
        if (Ua(Gj(a), b)) return Cj(a).then(function () {
          throw new N("provider-already-linked");
        });
      });
    };S.prototype.linkAndRetrieveDataWithCredential = function (a) {
      var b = this,
          c = null;return this.c(Pj(this, a.providerId).then(function () {
        return b.getIdToken();
      }).then(function (c) {
        return a.zc(b.g, c);
      }).then(function (a) {
        c = Oj(b, a, "link");return Qj(b, a);
      }).then(function () {
        return c;
      }));
    };S.prototype.linkWithCredential = function (a) {
      return this.linkAndRetrieveDataWithCredential(a).then(function (a) {
        return a.user;
      });
    };
    S.prototype.linkWithPhoneNumber = function (a, b) {
      var c = this;return this.c(Pj(this, "phone").then(function () {
        return ti(yj(c), a, b, _t(c.linkAndRetrieveDataWithCredential, c));
      }));
    };S.prototype.reauthenticateWithPhoneNumber = function (a, b) {
      var c = this;return this.c(E().then(function () {
        return ti(yj(c), a, b, _t(c.reauthenticateAndRetrieveDataWithCredential, c));
      }), !0);
    };var Oj = function Oj(a, b, c) {
      var d = Ig(b);b = Di(b);return Wf({ user: a, credential: d, additionalUserInfo: b, operationType: c });
    },
        Qj = function Qj(a, b) {
      Mj(a, b);return a.reload().then(function () {
        return a;
      });
    };
    h = S.prototype;h.updateEmail = function (a) {
      var b = this;return this.c(this.getIdToken().then(function (c) {
        return b.g.updateEmail(c, a);
      }).then(function (a) {
        Mj(b, a);return b.reload();
      }));
    };h.updatePhoneNumber = function (a) {
      var b = this;return this.c(this.getIdToken().then(function (c) {
        return a.zc(b.g, c);
      }).then(function (a) {
        Mj(b, a);return b.reload();
      }));
    };h.updatePassword = function (a) {
      var b = this;return this.c(this.getIdToken().then(function (c) {
        return b.g.updatePassword(c, a);
      }).then(function (a) {
        Mj(b, a);return b.reload();
      }));
    };
    h.updateProfile = function (a) {
      if (void 0 === a.displayName && void 0 === a.photoURL) return Fj(this);var b = this;return this.c(this.getIdToken().then(function (c) {
        return b.g.updateProfile(c, { displayName: a.displayName, photoUrl: a.photoURL });
      }).then(function (a) {
        Mj(b, a);Jj(b, "displayName", a.displayName || null);Jj(b, "photoURL", a.photoUrl || null);y(b.providerData, function (a) {
          "password" === a.providerId && (M(a, "displayName", b.displayName), M(a, "photoURL", b.photoURL));
        });return Cj(b);
      }).then(Ej));
    };
    h.unlink = function (a) {
      var b = this;return this.c(Kj(this).then(function (c) {
        return Ua(Gj(b), a) ? nh(b.g, c, [a]).then(function (a) {
          var c = {};y(a.providerUserInfo || [], function (a) {
            c[a.providerId] = !0;
          });y(Gj(b), function (a) {
            c[a] || Hj(b, a);
          });c[Fg.PROVIDER_ID] || M(b, "phoneNumber", null);return Cj(b);
        }) : Cj(b).then(function () {
          throw new N("no-such-provider");
        });
      }));
    };
    h["delete"] = function () {
      var a = this;return this.c(this.getIdToken().then(function (b) {
        return Q(a.g, yh, { idToken: b });
      }).then(function () {
        a.dispatchEvent(new uj("userDeleted"));
      })).then(function () {
        for (var b = 0; b < a.J.length; b++) {
          a.J[b].cancel("app-deleted");
        }a.J = [];a.Bb = !0;Aj(a);M(a, "refreshToken", null);a.s && a.s.unsubscribe(a);
      });
    };
    h.Pd = function (a, b) {
      return "linkViaPopup" == a && (this.ha || null) == b && this.ga || "reauthViaPopup" == a && (this.ha || null) == b && this.ga || "linkViaRedirect" == a && (this.Ba || null) == b || "reauthViaRedirect" == a && (this.Ba || null) == b ? !0 : !1;
    };h.Ya = function (a, b, c, d) {
      "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.ha || null) || (c && this.Ra ? this.Ra(c) : b && !c && this.ga && this.ga(b), this.K && (this.K.cancel(), this.K = null), delete this.ga, delete this.Ra);
    };
    h.Eb = function (a, b) {
      return "linkViaPopup" == a && b == (this.ha || null) ? _t(this.Xd, this) : "reauthViaPopup" == a && b == (this.ha || null) ? _t(this.Yd, this) : "linkViaRedirect" == a && (this.Ba || null) == b ? _t(this.Xd, this) : "reauthViaRedirect" == a && (this.Ba || null) == b ? _t(this.Yd, this) : null;
    };h.nc = function () {
      return Gf(this.uid + ":::");
    };h.linkWithPopup = function (a) {
      var b = this;return Rj(this, "linkViaPopup", a, function () {
        return Pj(b, a.providerId).then(function () {
          return Cj(b);
        });
      }, !1);
    };
    h.reauthenticateWithPopup = function (a) {
      return Rj(this, "reauthViaPopup", a, function () {
        return E();
      }, !0);
    };
    var Rj = function Rj(a, b, c, d, e) {
      if (!Hf()) return F(new N("operation-not-supported-in-this-environment"));if (a.oa && !e) return F(a.oa);var f = cg(c.providerId),
          g = a.nc(),
          l = null;(!If() || Bf()) && a.B && c.isOAuthProvider && (l = Th(a.B, a.m, a.w, b, c, null, g, firebase.SDK_VERSION || null));var n = uf(l, f && f.Sb, f && f.Rb);d = d().then(function () {
        Sj(a);if (!e) return a.getIdToken().then(function () {});
      }).then(function () {
        return a.s.Tb(n, b, c, g, !!l);
      }).then(function () {
        return new D(function (c, d) {
          a.Ya(b, null, new N("cancelled-popup-request"), a.ha || null);a.ga = c;a.Ra = d;a.ha = g;a.K = a.s.ac(a, b, n, g);
        });
      }).then(function (a) {
        n && tf(n);return a ? Wf(a) : null;
      }).f(function (a) {
        n && tf(n);throw a;
      });return a.c(d, e);
    };S.prototype.linkWithRedirect = function (a) {
      var b = this;return Tj(this, "linkViaRedirect", a, function () {
        return Pj(b, a.providerId);
      }, !1);
    };S.prototype.reauthenticateWithRedirect = function (a) {
      return Tj(this, "reauthViaRedirect", a, function () {
        return E();
      }, !0);
    };
    var Tj = function Tj(a, b, c, d, e) {
      if (!Hf()) return F(new N("operation-not-supported-in-this-environment"));if (a.oa && !e) return F(a.oa);var f = null,
          g = a.nc();d = d().then(function () {
        Sj(a);if (!e) return a.getIdToken().then(function () {});
      }).then(function () {
        a.Ba = g;return Cj(a);
      }).then(function (b) {
        a.Va && (b = a.Va, b = b.l.set(Uj, a.G(), b.v));return b;
      }).then(function () {
        return a.s.Ub(b, c, g);
      }).f(function (b) {
        f = b;if (a.Va) return Vj(a.Va);throw f;
      }).then(function () {
        if (f) throw f;
      });return a.c(d, e);
    },
        Sj = function Sj(a) {
      if (!a.s || !a.Ec) {
        if (a.s && !a.Ec) throw new N("internal-error");throw new N("auth-domain-config-required");
      }
    };S.prototype.Xd = function (a, b) {
      var c = this;this.K && (this.K.cancel(), this.K = null);var d = null,
          e = this.getIdToken().then(function (d) {
        return mg(c.g, { requestUri: a, sessionId: b, idToken: d });
      }).then(function (a) {
        d = Oj(c, a, "link");return Qj(c, a);
      }).then(function () {
        return d;
      });return this.c(e);
    };
    S.prototype.Yd = function (a, b) {
      var c = this;this.K && (this.K.cancel(), this.K = null);var d = null,
          e = E().then(function () {
        return ig(ng(c.g, { requestUri: a, sessionId: b }), c.uid);
      }).then(function (a) {
        d = Oj(c, a, "reauthenticate");Mj(c, a);c.oa = null;return c.reload();
      }).then(function () {
        return d;
      });return this.c(e, !0);
    };S.prototype.sendEmailVerification = function () {
      var a = this;return this.c(this.getIdToken().then(function (b) {
        return a.g.sendEmailVerification(b);
      }).then(function (b) {
        if (a.email != b) return a.reload();
      }).then(function () {}));
    };
    S.prototype.c = function (a, b) {
      var c = this,
          d = Wj(this, a, b);this.J.push(d);Cd(d, function () {
        Wa(c.J, d);
      });return d;
    };var Wj = function Wj(a, b, c) {
      return a.oa && !c ? (b.cancel(), F(a.oa)) : b.f(function (b) {
        !b || "auth/user-disabled" != b.code && "auth/user-token-expired" != b.code || (a.oa || a.dispatchEvent(new uj("userInvalidated")), a.oa = b);throw b;
      });
    };S.prototype.toJSON = function () {
      return this.G();
    };
    S.prototype.G = function () {
      var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.m, appName: this.w, authDomain: this.B, stsTokenManager: this.na.G(), redirectEventId: this.Ba || null };y(this.providerData, function (b) {
        a.providerData.push(Xf(b));
      });return a;
    };
    var Xj = function Xj(a) {
      if (!a.apiKey) return null;var b = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName },
          c = {};if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - la()) / 1E3;else return null;var d = new S(b, c, a);a.providerData && y(a.providerData, function (a) {
        a && Ij(d, Wf(a));
      });a.redirectEventId && (d.Ba = a.redirectEventId);return d;
    },
        Yj = function Yj(a, b, c) {
      var d = new S(a, b);c && (d.Va = c);return d.reload().then(function () {
        return d;
      });
    };var Zj = function Zj(a) {
      this.v = a;this.l = Gi();
    },
        Uj = { name: "redirectUser", V: !1 },
        Vj = function Vj(a) {
      return a.l.remove(Uj, a.v);
    },
        ak = function ak(a, b) {
      return a.l.get(Uj, a.v).then(function (a) {
        a && b && (a.authDomain = b);return Xj(a || {});
      });
    };var bk = function bk(a) {
      this.v = a;this.l = Gi();
    },
        ck = { name: "authUser", V: !0 },
        dk = function dk(a, b) {
      return a.l.set(ck, b.G(), a.v);
    },
        ek = function ek(a) {
      return a.l.remove(ck, a.v);
    },
        fk = function fk(a, b) {
      return a.l.get(ck, a.v).then(function (a) {
        a && b && (a.authDomain = b);return Xj(a || {});
      });
    };var T = function T(a) {
      this.Ha = !1;M(this, "app", a);if (this.h().options && this.h().options.apiKey) a = firebase.SDK_VERSION ? Ef(firebase.SDK_VERSION) : null, this.g = new R(this.h().options && this.h().options.apiKey, null, a);else throw new N("invalid-api-key");this.J = [];this.Ea = [];this.wb = [];this.xf = firebase.INTERNAL.createSubscribe(_t(this.lf, this));this.hc = void 0;this.zf = firebase.INTERNAL.createSubscribe(_t(this.nf, this));gk(this, null);a = this.h().options.apiKey;var b = this.h().name;this.xa = new bk(a + ":" + b);a = this.h().options.apiKey;
      b = this.h().name;this.rb = new Zj(a + ":" + b);this.jc = this.c(hk(this));this.ua = this.c(ik(this));this.xc = !1;this.hd = _t(this.Rf, this);this.Ce = _t(this.jb, this);this.xb = _t(this.kd, this);this.Ae = _t(this.gf, this);this.Be = _t(this.hf, this);jk(this);this.INTERNAL = {};this.INTERNAL["delete"] = _t(this["delete"], this);this.Ka = 0;
    };T.prototype.toJSON = function () {
      return { apiKey: this.h().options.apiKey, authDomain: this.h().options.authDomain, appName: this.h().name, currentUser: U(this) && U(this).G() };
    };
    var kk = function kk(a) {
      return a.Ue || F(new N("auth-domain-config-required"));
    },
        jk = function jk(a) {
      var b = a.h().options.authDomain,
          c = a.h().options.apiKey;b && Hf() && (a.Ue = a.jc.then(function () {
        if (!a.Ha) return a.s = kj(b, c, a.h().name), a.s.subscribe(a), U(a) && Dj(U(a)), a.Yb && (Dj(a.Yb), a.Yb = null), a.s;
      }));
    };h = T.prototype;h.Pd = function (a, b) {
      switch (a) {case "unknown":case "signInViaRedirect":
          return !0;case "signInViaPopup":
          return this.ha == b && !!this.ga;default:
          return !1;}
    };
    h.Ya = function (a, b, c, d) {
      "signInViaPopup" == a && this.ha == d && (c && this.Ra ? this.Ra(c) : b && !c && this.ga && this.ga(b), this.K && (this.K.cancel(), this.K = null), delete this.ga, delete this.Ra);
    };h.Eb = function (a, b) {
      return "signInViaRedirect" == a || "signInViaPopup" == a && this.ha == b && this.ga ? _t(this.We, this) : null;
    };
    h.We = function (a, b) {
      var c = this;a = { requestUri: a, sessionId: b };this.K && (this.K.cancel(), this.K = null);var d = null,
          e = null,
          f = kg(c.g, a).then(function (a) {
        d = Ig(a);e = Di(a);return a;
      });a = c.jc.then(function () {
        return f;
      }).then(function (a) {
        return lk(c, a);
      }).then(function () {
        return Wf({ user: U(c), credential: d, additionalUserInfo: e, operationType: "signIn" });
      });return this.c(a);
    };h.nc = function () {
      return Gf();
    };
    h.signInWithPopup = function (a) {
      if (!Hf()) return F(new N("operation-not-supported-in-this-environment"));var b = this,
          c = cg(a.providerId),
          d = this.nc(),
          e = null;(!If() || Bf()) && this.h().options.authDomain && a.isOAuthProvider && (e = Th(this.h().options.authDomain, this.h().options.apiKey, this.h().name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));var f = uf(e, c && c.Sb, c && c.Rb),
          c = kk(this).then(function (b) {
        return b.Tb(f, "signInViaPopup", a, d, !!e);
      }).then(function () {
        return new D(function (a, c) {
          b.Ya("signInViaPopup", null, new N("cancelled-popup-request"), b.ha);b.ga = a;b.Ra = c;b.ha = d;b.K = b.s.ac(b, "signInViaPopup", f, d);
        });
      }).then(function (a) {
        f && tf(f);return a ? Wf(a) : null;
      }).f(function (a) {
        f && tf(f);throw a;
      });return this.c(c);
    };h.signInWithRedirect = function (a) {
      if (!Hf()) return F(new N("operation-not-supported-in-this-environment"));var b = this,
          c = kk(this).then(function () {
        return b.s.Ub("signInViaRedirect", a);
      });return this.c(c);
    };
    h.getRedirectResult = function () {
      if (!Hf()) return F(new N("operation-not-supported-in-this-environment"));var a = this,
          b = kk(this).then(function () {
        return a.s.getRedirectResult();
      }).then(function (a) {
        return a ? Wf(a) : null;
      });return this.c(b);
    };
    var lk = function lk(a, b) {
      var c = {};c.apiKey = a.h().options.apiKey;c.authDomain = a.h().options.authDomain;c.appName = a.h().name;return a.jc.then(function () {
        return Yj(c, b, a.rb);
      }).then(function (b) {
        if (U(a) && b.uid == U(a).uid) return U(a).copy(b), a.jb(b);gk(a, b);Dj(b);return a.jb(b);
      }).then(function () {
        a.Pa();
      });
    },
        gk = function gk(a, b) {
      U(a) && (Bj(U(a), a.Ce), rc(U(a), "tokenChanged", a.xb), rc(U(a), "userDeleted", a.Ae), rc(U(a), "userInvalidated", a.Be), Aj(U(a)));b && (b.Kc.push(a.Ce), jc(b, "tokenChanged", a.xb), jc(b, "userDeleted", a.Ae), jc(b, "userInvalidated", a.Be), 0 < a.Ka && zj(b));M(a, "currentUser", b);
    };T.prototype.signOut = function () {
      var a = this,
          b = this.ua.then(function () {
        if (!U(a)) return E();gk(a, null);return ek(a.xa).then(function () {
          a.Pa();
        });
      });return this.c(b);
    };
    var mk = function mk(a) {
      var b = a.h().options.authDomain,
          b = ak(a.rb, b).then(function (b) {
        if (a.Yb = b) b.Va = a.rb;return Vj(a.rb);
      });return a.c(b);
    },
        hk = function hk(a) {
      var b = a.h().options.authDomain,
          c = mk(a).then(function () {
        return fk(a.xa, b);
      }).then(function (b) {
        return b ? (b.Va = a.rb, a.Yb && (a.Yb.Ba || null) == (b.Ba || null) ? b : b.reload().then(function () {
          return dk(a.xa, b).then(function () {
            return b;
          });
        }).f(function (c) {
          return "auth/network-request-failed" == c.code ? b : ek(a.xa);
        })) : null;
      }).then(function (b) {
        gk(a, b || null);
      });return a.c(c);
    },
        ik = function ik(a) {
      return a.jc.then(function () {
        return a.getRedirectResult();
      }).f(function () {}).then(function () {
        if (!a.Ha) return a.hd();
      }).f(function () {}).then(function () {
        if (!a.Ha) {
          a.xc = !0;var b = a.xa;b.l.addListener(ck, b.v, a.hd);
        }
      });
    };h = T.prototype;
    h.Rf = function () {
      var a = this,
          b = this.h().options.authDomain;return fk(this.xa, b).then(function (b) {
        if (!a.Ha) {
          var c;if (c = U(a) && b) {
            c = U(a).uid;var e = b.uid;c = void 0 === c || null === c || "" === c || void 0 === e || null === e || "" === e ? !1 : c == e;
          }if (c) return U(a).copy(b), U(a).getIdToken();if (U(a) || b) gk(a, b), b && (Dj(b), b.Va = a.rb), a.s && a.s.subscribe(a), a.Pa();
        }
      });
    };h.jb = function (a) {
      return dk(this.xa, a);
    };h.kd = function () {
      this.Pa();this.jb(U(this));
    };h.gf = function () {
      this.signOut();
    };h.hf = function () {
      this.signOut();
    };
    var nk = function nk(a, b) {
      var c = null,
          d = null;return a.c(b.then(function (b) {
        c = Ig(b);d = Di(b);return lk(a, b);
      }).then(function () {
        return Wf({ user: U(a), credential: c, additionalUserInfo: d, operationType: "signIn" });
      }));
    };h = T.prototype;h.lf = function (a) {
      var b = this;this.addAuthTokenListener(function () {
        a.next(U(b));
      });
    };h.nf = function (a) {
      var b = this;ok(this, function () {
        a.next(U(b));
      });
    };
    h.onIdTokenChanged = function (a, b, c) {
      var d = this;this.xc && firebase.Promise.resolve().then(function () {
        q(a) ? a(U(d)) : q(a.next) && a.next(U(d));
      });return this.xf(a, b, c);
    };h.onAuthStateChanged = function (a, b, c) {
      var d = this;this.xc && firebase.Promise.resolve().then(function () {
        d.hc = d.getUid();q(a) ? a(U(d)) : q(a.next) && a.next(U(d));
      });return this.zf(a, b, c);
    };h.bf = function (a) {
      var b = this,
          c = this.ua.then(function () {
        return U(b) ? U(b).getIdToken(a).then(function (a) {
          return { accessToken: a };
        }) : null;
      });return this.c(c);
    };
    h.signInWithCustomToken = function (a) {
      var b = this;return this.ua.then(function () {
        return nk(b, Q(b.g, Bh, { token: a }));
      }).then(function (a) {
        a = a.user;Jj(a, "isAnonymous", !1);return b.jb(a);
      }).then(function () {
        return U(b);
      });
    };h.signInWithEmailAndPassword = function (a, b) {
      var c = this;return this.ua.then(function () {
        return nk(c, Q(c.g, yg, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };h.createUserWithEmailAndPassword = function (a, b) {
      var c = this;return this.ua.then(function () {
        return nk(c, Q(c.g, xh, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };
    h.signInWithCredential = function (a) {
      return this.signInAndRetrieveDataWithCredential(a).then(function (a) {
        return a.user;
      });
    };h.signInAndRetrieveDataWithCredential = function (a) {
      var b = this;return this.ua.then(function () {
        return nk(b, a.Fb(b.g));
      });
    };h.signInAnonymously = function () {
      var a = this;return this.ua.then(function () {
        var b = U(a);return b && b.isAnonymous ? b : nk(a, a.g.signInAnonymously()).then(function (b) {
          b = b.user;Jj(b, "isAnonymous", !0);return a.jb(b);
        }).then(function () {
          return U(a);
        });
      });
    };h.h = function () {
      return this.app;
    };
    var U = function U(a) {
      return a.currentUser;
    };T.prototype.getUid = function () {
      return U(this) && U(this).uid || null;
    };var pk = function pk(a) {
      return U(a) && U(a)._lat || null;
    };h = T.prototype;h.Pa = function () {
      if (this.xc) {
        for (var a = 0; a < this.Ea.length; a++) {
          if (this.Ea[a]) this.Ea[a](pk(this));
        }if (this.hc !== this.getUid() && this.wb.length) for (this.hc = this.getUid(), a = 0; a < this.wb.length; a++) {
          if (this.wb[a]) this.wb[a](pk(this));
        }
      }
    };h.Le = function (a) {
      this.addAuthTokenListener(a);this.Ka++;0 < this.Ka && U(this) && zj(U(this));
    };
    h.Ff = function (a) {
      var b = this;y(this.Ea, function (c) {
        c == a && b.Ka--;
      });0 > this.Ka && (this.Ka = 0);0 == this.Ka && U(this) && Aj(U(this));this.removeAuthTokenListener(a);
    };h.addAuthTokenListener = function (a) {
      var b = this;this.Ea.push(a);this.c(this.ua.then(function () {
        b.Ha || Ua(b.Ea, a) && a(pk(b));
      }));
    };h.removeAuthTokenListener = function (a) {
      Xa(this.Ea, function (b) {
        return b == a;
      });
    };var ok = function ok(a, b) {
      a.wb.push(b);a.c(a.ua.then(function () {
        !a.Ha && Ua(a.wb, b) && a.hc !== a.getUid() && (a.hc = a.getUid(), b(pk(a)));
      }));
    };h = T.prototype;
    h["delete"] = function () {
      this.Ha = !0;for (var a = 0; a < this.J.length; a++) {
        this.J[a].cancel("app-deleted");
      }this.J = [];this.xa && (a = this.xa, a.l.removeListener(ck, a.v, this.hd));this.s && this.s.unsubscribe(this);return firebase.Promise.resolve();
    };h.c = function (a) {
      var b = this;this.J.push(a);Cd(a, function () {
        Wa(b.J, a);
      });return a;
    };h.fetchProvidersForEmail = function (a) {
      return this.c(bh(this.g, a));
    };h.verifyPasswordResetCode = function (a) {
      return this.checkActionCode(a).then(function (a) {
        return a.data.email;
      });
    };
    h.confirmPasswordReset = function (a, b) {
      return this.c(this.g.confirmPasswordReset(a, b).then(function () {}));
    };h.checkActionCode = function (a) {
      return this.c(this.g.checkActionCode(a).then(function (a) {
        return new ui(a);
      }));
    };h.applyActionCode = function (a) {
      return this.c(this.g.applyActionCode(a).then(function () {}));
    };h.sendPasswordResetEmail = function (a) {
      return this.c(this.g.sendPasswordResetEmail(a).then(function () {}));
    };
    h.signInWithPhoneNumber = function (a, b) {
      return this.c(ti(this, a, b, _t(this.signInAndRetrieveDataWithCredential, this)));
    };var qk = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
        V = function V(a, b) {
      return { name: a || "", O: "a valid string", optional: !!b, P: p };
    },
        rk = function rk() {
      return { name: "opt_forceRefresh", O: "a boolean", optional: !0, P: ba };
    },
        W = function W(a, b) {
      return { name: a || "", O: "a valid object", optional: !!b, P: r };
    },
        sk = function sk(a, b) {
      return { name: a || "", O: "a function", optional: !!b, P: q };
    },
        tk = function tk() {
      return { name: "", O: "null", optional: !1, P: fa };
    },
        uk = function uk() {
      return { name: "", O: "an HTML element", optional: !1, P: function P(a) {
          return !!(a && a instanceof Element);
        } };
    },
        vk = function vk() {
      return { name: "auth", O: "an instance of Firebase Auth", optional: !0, P: function P(a) {
          return !!(a && a instanceof T);
        } };
    },
        wk = function wk() {
      return { name: "app", O: "an instance of Firebase App", optional: !0, P: function P(a) {
          return !!(a && a instanceof firebase.app.App);
        } };
    },
        xk = function xk(a) {
      return { name: a ? a + "Credential" : "credential", O: a ? "a valid " + a + " credential" : "a valid credential", optional: !1, P: function P(b) {
          if (!b) return !1;var c = !a || b.providerId === a;return !(!b.Fb || !c);
        } };
    },
        yk = function yk() {
      return { name: "authProvider",
        O: "a valid Auth provider", optional: !1, P: function P(a) {
          return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
        } };
    },
        zk = function zk() {
      return { name: "applicationVerifier", O: "an implementation of firebase.auth.ApplicationVerifier", optional: !1, P: function P(a) {
          return !!(a && p(a.type) && q(a.verify));
        } };
    },
        X = function X(a, b, c, d) {
      return { name: c || "", O: a.O + " or " + b.O, optional: !!d, P: function P(c) {
          return a.P(c) || b.P(c);
        } };
    };var Y = function Y(a, b) {
      for (var c in b) {
        var d = b[c].name;a[d] = Ak(d, a[c], b[c].a);
      }
    },
        Z = function Z(a, b, c, d) {
      a[b] = Ak(b, c, d);
    },
        Ak = function Ak(a, b, c) {
      if (!c) return b;var d = Bk(a);a = function a() {
        var a = Array.prototype.slice.call(arguments);a: {
          var e = Array.prototype.slice.call(a);var l = 0;for (var n = !1, C = 0; C < c.length; C++) {
            if (c[C].optional) n = !0;else {
              if (n) throw new N("internal-error", "Argument validator encountered a required argument after an optional argument.");l++;
            }
          }n = c.length;if (e.length < l || n < e.length) e = "Expected " + (l == n ? 1 == l ? "1 argument" : l + " arguments" : l + "-" + n + " arguments") + " but got " + e.length + ".";else {
            for (l = 0; l < e.length; l++) {
              if (n = c[l].optional && void 0 === e[l], !c[l].P(e[l]) && !n) {
                e = c[l];if (0 > l || l >= qk.length) throw new N("internal-error", "Argument validator received an unsupported number of arguments.");e = qk[l] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.O + ".";break a;
              }
            }e = null;
          }
        }if (e) throw new N("argument-error", d + " failed: " + e);return b.apply(this, a);
      };for (var e in b) {
        a[e] = b[e];
      }for (e in b.prototype) {
        a.prototype[e] = b.prototype[e];
      }return a;
    },
        Bk = function Bk(a) {
      a = a.split(".");return a[a.length - 1];
    };Y(T.prototype, { applyActionCode: { name: "applyActionCode", a: [V("code")] }, checkActionCode: { name: "checkActionCode", a: [V("code")] }, confirmPasswordReset: { name: "confirmPasswordReset", a: [V("code"), V("newPassword")] }, createUserWithEmailAndPassword: { name: "createUserWithEmailAndPassword", a: [V("email"), V("password")] }, fetchProvidersForEmail: { name: "fetchProvidersForEmail", a: [V("email")] }, getRedirectResult: { name: "getRedirectResult", a: [] }, onAuthStateChanged: { name: "onAuthStateChanged", a: [X(W(), sk(), "nextOrObserver"), sk("opt_error", !0), sk("opt_completed", !0)] }, onIdTokenChanged: { name: "onIdTokenChanged", a: [X(W(), sk(), "nextOrObserver"), sk("opt_error", !0), sk("opt_completed", !0)] }, sendPasswordResetEmail: { name: "sendPasswordResetEmail", a: [V("email")] }, signInAndRetrieveDataWithCredential: { name: "signInAndRetrieveDataWithCredential", a: [xk()] }, signInAnonymously: { name: "signInAnonymously", a: [] }, signInWithCredential: { name: "signInWithCredential", a: [xk()] }, signInWithCustomToken: { name: "signInWithCustomToken", a: [V("token")] }, signInWithEmailAndPassword: { name: "signInWithEmailAndPassword",
        a: [V("email"), V("password")] }, signInWithPhoneNumber: { name: "signInWithPhoneNumber", a: [V("phoneNumber"), zk()] }, signInWithPopup: { name: "signInWithPopup", a: [yk()] }, signInWithRedirect: { name: "signInWithRedirect", a: [yk()] }, signOut: { name: "signOut", a: [] }, toJSON: { name: "toJSON", a: [V(null, !0)] }, verifyPasswordResetCode: { name: "verifyPasswordResetCode", a: [V("code")] } });
    Y(S.prototype, { "delete": { name: "delete", a: [] }, getIdToken: { name: "getIdToken", a: [rk()] }, getToken: { name: "getToken", a: [rk()] }, linkAndRetrieveDataWithCredential: { name: "linkAndRetrieveDataWithCredential", a: [xk()] }, linkWithCredential: { name: "linkWithCredential", a: [xk()] }, linkWithPhoneNumber: { name: "linkWithPhoneNumber", a: [V("phoneNumber"), zk()] }, linkWithPopup: { name: "linkWithPopup", a: [yk()] }, linkWithRedirect: { name: "linkWithRedirect", a: [yk()] }, reauthenticateAndRetrieveDataWithCredential: { name: "reauthenticateAndRetrieveDataWithCredential",
        a: [xk()] }, reauthenticateWithCredential: { name: "reauthenticateWithCredential", a: [xk()] }, reauthenticateWithPhoneNumber: { name: "reauthenticateWithPhoneNumber", a: [V("phoneNumber"), zk()] }, reauthenticateWithPopup: { name: "reauthenticateWithPopup", a: [yk()] }, reauthenticateWithRedirect: { name: "reauthenticateWithRedirect", a: [yk()] }, reload: { name: "reload", a: [] }, sendEmailVerification: { name: "sendEmailVerification", a: [] }, toJSON: { name: "toJSON", a: [V(null, !0)] }, unlink: { name: "unlink", a: [V("provider")] }, updateEmail: { name: "updateEmail",
        a: [V("email")] }, updatePassword: { name: "updatePassword", a: [V("password")] }, updatePhoneNumber: { name: "updatePhoneNumber", a: [xk("phone")] }, updateProfile: { name: "updateProfile", a: [W("profile")] } });Y(D.prototype, { f: { name: "catch" }, then: { name: "then" } });Y(si.prototype, { confirm: { name: "confirm", a: [V("verificationCode")] } });Z(Ag, "credential", function (a, b) {
      return new xg(a, b);
    }, [V("email"), V("password")]);Y(pg.prototype, { addScope: { name: "addScope", a: [V("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });
    Z(pg, "credential", qg, [X(V(), W(), "token")]);Y(rg.prototype, { addScope: { name: "addScope", a: [V("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });Z(rg, "credential", sg, [X(V(), W(), "token")]);Y(tg.prototype, { addScope: { name: "addScope", a: [V("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });Z(tg, "credential", ug, [X(V(), X(W(), tk()), "idToken"), X(V(), tk(), "accessToken", !0)]);
    Y(vg.prototype, { setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });Z(vg, "credential", wg, [X(V(), W(), "token"), V("secret", !0)]);Y(P.prototype, { addScope: { name: "addScope", a: [V("scope")] }, credential: { name: "credential", a: [X(V(), tk(), "idToken", !0), X(V(), tk(), "accessToken", !0)] }, setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });Z(Fg, "credential", Hg, [V("verificationId"), V("verificationCode")]);
    Y(Fg.prototype, { verifyPhoneNumber: { name: "verifyPhoneNumber", a: [V("phoneNumber"), zk()] } });Y(N.prototype, { toJSON: { name: "toJSON", a: [V(null, !0)] } });Y(Kg.prototype, { toJSON: { name: "toJSON", a: [V(null, !0)] } });Y(gg.prototype, { toJSON: { name: "toJSON", a: [V(null, !0)] } });Y(Uh.prototype, { clear: { name: "clear", a: [] }, render: { name: "render", a: [] }, verify: { name: "verify", a: [] } });
    (function () {
      if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
        var a = { Auth: T, Error: N };Z(a, "EmailAuthProvider", Ag, []);Z(a, "FacebookAuthProvider", pg, []);Z(a, "GithubAuthProvider", rg, []);Z(a, "GoogleAuthProvider", tg, []);Z(a, "TwitterAuthProvider", vg, []);Z(a, "OAuthProvider", P, [V("providerId")]);Z(a, "PhoneAuthProvider", Fg, [vk()]);Z(a, "RecaptchaVerifier", Uh, [X(V(), uk(), "recaptchaContainer"), W("recaptchaParameters", !0), wk()]);firebase.INTERNAL.registerService("auth", function (a, c) {
          a = new T(a);c({ INTERNAL: { getUid: _t(a.getUid, a), getToken: _t(a.bf, a), addAuthTokenListener: _t(a.Le, a), removeAuthTokenListener: _t(a.Ff, a) } });return a;
        }, a, function (a, c) {
          if ("create" === a) try {
            c.auth();
          } catch (d) {}
        });firebase.INTERNAL.extendNamespace({ User: S });
      } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
  }).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});