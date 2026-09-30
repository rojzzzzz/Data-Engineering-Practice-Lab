function _v(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var If = { exports: {} }, Eu = {};
var ny;
function $S() {
  if (ny) return Eu;
  ny = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(r, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var g in s)
        g !== "key" && (f[g] = s[g]);
    } else f = s;
    return s = f.ref, {
      $$typeof: l,
      type: r,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return Eu.Fragment = i, Eu.jsx = c, Eu.jsxs = c, Eu;
}
var ly;
function JS() {
  return ly || (ly = 1, If.exports = $S()), If.exports;
}
var R = JS(), Ff = { exports: {} }, _u = {}, Wf = { exports: {} }, Pf = {};
var ay;
function kS() {
  return ay || (ay = 1, (function(l) {
    function i(O, j) {
      var Z = O.length;
      O.push(j);
      t: for (; 0 < Z; ) {
        var k = Z - 1 >>> 1, nt = O[k];
        if (0 < s(nt, j))
          O[k] = j, O[Z] = nt, Z = k;
        else break t;
      }
    }
    function c(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0) return null;
      var j = O[0], Z = O.pop();
      if (Z !== j) {
        O[0] = Z;
        t: for (var k = 0, nt = O.length, it = nt >>> 1; k < it; ) {
          var dt = 2 * (k + 1) - 1, vt = O[dt], T = dt + 1, P = O[T];
          if (0 > s(vt, Z))
            T < nt && 0 > s(P, vt) ? (O[k] = P, O[T] = Z, k = T) : (O[k] = vt, O[dt] = Z, k = dt);
          else if (T < nt && 0 > s(P, Z))
            O[k] = P, O[T] = Z, k = T;
          else break t;
        }
      }
      return j;
    }
    function s(O, j) {
      var Z = O.sortIndex - j.sortIndex;
      return Z !== 0 ? Z : O.id - j.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      l.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, g = d.now();
      l.unstable_now = function() {
        return d.now() - g;
      };
    }
    var p = [], x = [], v = 1, m = null, y = 3, b = !1, E = !1, M = !1, w = !1, N = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    function A(O) {
      for (var j = c(x); j !== null; ) {
        if (j.callback === null) r(x);
        else if (j.startTime <= O)
          r(x), j.sortIndex = j.expirationTime, i(p, j);
        else break;
        j = c(x);
      }
    }
    function G(O) {
      if (M = !1, A(O), !E)
        if (c(p) !== null)
          E = !0, V || (V = !0, J());
        else {
          var j = c(x);
          j !== null && Y(G, j.startTime - O);
        }
    }
    var V = !1, B = -1, Q = 5, F = -1;
    function ut() {
      return w ? !0 : !(l.unstable_now() - F < Q);
    }
    function D() {
      if (w = !1, V) {
        var O = l.unstable_now();
        F = O;
        var j = !0;
        try {
          t: {
            E = !1, M && (M = !1, U(B), B = -1), b = !0;
            var Z = y;
            try {
              e: {
                for (A(O), m = c(p); m !== null && !(m.expirationTime > O && ut()); ) {
                  var k = m.callback;
                  if (typeof k == "function") {
                    m.callback = null, y = m.priorityLevel;
                    var nt = k(
                      m.expirationTime <= O
                    );
                    if (O = l.unstable_now(), typeof nt == "function") {
                      m.callback = nt, A(O), j = !0;
                      break e;
                    }
                    m === c(p) && r(p), A(O);
                  } else r(p);
                  m = c(p);
                }
                if (m !== null) j = !0;
                else {
                  var it = c(x);
                  it !== null && Y(
                    G,
                    it.startTime - O
                  ), j = !1;
                }
              }
              break t;
            } finally {
              m = null, y = Z, b = !1;
            }
            j = void 0;
          }
        } finally {
          j ? J() : V = !1;
        }
      }
    }
    var J;
    if (typeof _ == "function")
      J = function() {
        _(D);
      };
    else if (typeof MessageChannel < "u") {
      var W = new MessageChannel(), C = W.port2;
      W.port1.onmessage = D, J = function() {
        C.postMessage(null);
      };
    } else
      J = function() {
        N(D, 0);
      };
    function Y(O, j) {
      B = N(function() {
        O(l.unstable_now());
      }, j);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, l.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Q = 0 < O ? Math.floor(1e3 / O) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, l.unstable_next = function(O) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = y;
      }
      var Z = y;
      y = j;
      try {
        return O();
      } finally {
        y = Z;
      }
    }, l.unstable_requestPaint = function() {
      w = !0;
    }, l.unstable_runWithPriority = function(O, j) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var Z = y;
      y = O;
      try {
        return j();
      } finally {
        y = Z;
      }
    }, l.unstable_scheduleCallback = function(O, j, Z) {
      var k = l.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? k + Z : k) : Z = k, O) {
        case 1:
          var nt = -1;
          break;
        case 2:
          nt = 250;
          break;
        case 5:
          nt = 1073741823;
          break;
        case 4:
          nt = 1e4;
          break;
        default:
          nt = 5e3;
      }
      return nt = Z + nt, O = {
        id: v++,
        callback: j,
        priorityLevel: O,
        startTime: Z,
        expirationTime: nt,
        sortIndex: -1
      }, Z > k ? (O.sortIndex = Z, i(x, O), c(p) === null && O === c(x) && (M ? (U(B), B = -1) : M = !0, Y(G, Z - k))) : (O.sortIndex = nt, i(p, O), E || b || (E = !0, V || (V = !0, J()))), O;
    }, l.unstable_shouldYield = ut, l.unstable_wrapCallback = function(O) {
      var j = y;
      return function() {
        var Z = y;
        y = j;
        try {
          return O.apply(this, arguments);
        } finally {
          y = Z;
        }
      };
    };
  })(Pf)), Pf;
}
var iy;
function IS() {
  return iy || (iy = 1, Wf.exports = kS()), Wf.exports;
}
var td = { exports: {} }, Et = {};
var uy;
function FS() {
  if (uy) return Et;
  uy = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), g = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.activity"), y = /* @__PURE__ */ Symbol.for("react.view_transition"), b = Symbol.iterator;
  function E(T) {
    return T === null || typeof T != "object" ? null : (T = b && T[b] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var M = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, N = {};
  function U(T, P, st) {
    this.props = T, this.context = P, this.refs = N, this.updater = st || M;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(T, P) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, P, "setState");
  }, U.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function _() {
  }
  _.prototype = U.prototype;
  function A(T, P, st) {
    this.props = T, this.context = P, this.refs = N, this.updater = st || M;
  }
  var G = A.prototype = new _();
  G.constructor = A, w(G, U.prototype), G.isPureReactComponent = !0;
  var V = Array.isArray;
  function B() {
  }
  var Q = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty;
  function ut(T, P, st) {
    var ot = st.ref;
    return {
      $$typeof: l,
      type: T,
      key: P,
      ref: ot !== void 0 ? ot : null,
      props: st
    };
  }
  function D(T, P) {
    return ut(T.type, P, T.props);
  }
  function J(T) {
    return typeof T == "object" && T !== null && T.$$typeof === l;
  }
  function W(T) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(st) {
      return P[st];
    });
  }
  var C = /\/+/g;
  function Y(T, P) {
    return typeof T == "object" && T !== null && T.key != null ? W("" + T.key) : P.toString(36);
  }
  function O(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(B, B) : (T.status = "pending", T.then(
          function(P) {
            T.status === "pending" && (T.status = "fulfilled", T.value = P);
          },
          function(P) {
            T.status === "pending" && (T.status = "rejected", T.reason = P);
          }
        )), T.status) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function j(T, P, st, ot, tt) {
    var ft = typeof T;
    (ft === "undefined" || ft === "boolean") && (T = null);
    var gt = !1;
    if (T === null) gt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          gt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case l:
            case i:
              gt = !0;
              break;
            case v:
              return gt = T._init, j(
                gt(T._payload),
                P,
                st,
                ot,
                tt
              );
          }
      }
    if (gt)
      return tt = tt(T), gt = ot === "" ? "." + Y(T, 0) : ot, V(tt) ? (st = "", gt != null && (st = gt.replace(C, "$&/") + "/"), j(tt, P, st, "", function(xt) {
        return xt;
      })) : tt != null && (J(tt) && (tt = D(
        tt,
        st + (tt.key == null || T && T.key === tt.key ? "" : ("" + tt.key).replace(
          C,
          "$&/"
        ) + "/") + gt
      )), P.push(tt)), 1;
    gt = 0;
    var ct = ot === "" ? "." : ot + ":";
    if (V(T))
      for (var rt = 0; rt < T.length; rt++)
        ot = T[rt], ft = ct + Y(ot, rt), gt += j(
          ot,
          P,
          st,
          ft,
          tt
        );
    else if (rt = E(T), typeof rt == "function")
      for (T = rt.call(T), rt = 0; !(ot = T.next()).done; )
        ot = ot.value, ft = ct + Y(ot, rt++), gt += j(
          ot,
          P,
          st,
          ft,
          tt
        );
    else if (ft === "object") {
      if (typeof T.then == "function")
        return j(
          O(T),
          P,
          st,
          ot,
          tt
        );
      throw P = String(T), Error(
        "Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return gt;
  }
  function Z(T, P, st) {
    if (T == null) return T;
    var ot = [], tt = 0;
    return j(T, ot, "", "", function(ft) {
      return P.call(st, ft, tt++);
    }), ot;
  }
  function k(T) {
    if (T._status === -1) {
      var P = T._result, st = P();
      st.then(
        function(ot) {
          (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ot, st.status === void 0 && (st.status = "fulfilled", st.value = ot));
        },
        function(ot) {
          (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ot, st.status === void 0 && (st.status = "rejected", st.reason = ot));
        }
      ), T._status === -1 && (T._status = 0, T._result = st);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var nt = typeof reportError == "function" ? reportError : function(T) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var P = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(P)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", T);
      return;
    }
    console.error(T);
  };
  function it(T) {
    var P = Q.T, st = {};
    st.types = P !== null ? P.types : null, Q.T = st;
    try {
      var ot = T(), tt = Q.S;
      tt !== null && tt(st, ot), typeof ot == "object" && ot !== null && typeof ot.then == "function" && ot.then(B, nt);
    } catch (ft) {
      nt(ft);
    } finally {
      P !== null && st.types !== null && (P.types = st.types), Q.T = P;
    }
  }
  function dt(T) {
    var P = Q.T;
    if (P !== null) {
      var st = P.types;
      st === null ? P.types = [T] : st.indexOf(T) === -1 && st.push(T);
    } else it(dt.bind(null, T));
  }
  var vt = {
    map: Z,
    forEach: function(T, P, st) {
      Z(
        T,
        function() {
          P.apply(this, arguments);
        },
        st
      );
    },
    count: function(T) {
      var P = 0;
      return Z(T, function() {
        P++;
      }), P;
    },
    toArray: function(T) {
      return Z(T, function(P) {
        return P;
      }) || [];
    },
    only: function(T) {
      if (!J(T))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return T;
    }
  };
  return Et.Activity = m, Et.Children = vt, Et.Component = U, Et.Fragment = c, Et.Profiler = s, Et.PureComponent = A, Et.StrictMode = r, Et.Suspense = p, Et.ViewTransition = y, Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, Et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return Q.H.useMemoCache(T);
    }
  }, Et.addTransitionType = dt, Et.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, Et.cacheSignal = function() {
    return null;
  }, Et.cloneElement = function(T, P, st) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var ot = w({}, T.props), tt = T.key;
    if (P != null)
      for (ft in P.key !== void 0 && (tt = "" + P.key), P)
        !F.call(P, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && P.ref === void 0 || (ot[ft] = P[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) ot.children = st;
    else if (1 < ft) {
      for (var gt = Array(ft), ct = 0; ct < ft; ct++)
        gt[ct] = arguments[ct + 2];
      ot.children = gt;
    }
    return ut(T.type, tt, ot);
  }, Et.createContext = function(T) {
    return T = {
      $$typeof: d,
      _currentValue: T,
      _currentValue2: T,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, T.Provider = T, T.Consumer = {
      $$typeof: f,
      _context: T
    }, T;
  }, Et.createElement = function(T, P, st) {
    var ot, tt = {}, ft = null;
    if (P != null)
      for (ot in P.key !== void 0 && (ft = "" + P.key), P)
        F.call(P, ot) && ot !== "key" && ot !== "__self" && ot !== "__source" && (tt[ot] = P[ot]);
    var gt = arguments.length - 2;
    if (gt === 1) tt.children = st;
    else if (1 < gt) {
      for (var ct = Array(gt), rt = 0; rt < gt; rt++)
        ct[rt] = arguments[rt + 2];
      tt.children = ct;
    }
    if (T && T.defaultProps)
      for (ot in gt = T.defaultProps, gt)
        tt[ot] === void 0 && (tt[ot] = gt[ot]);
    return ut(T, ft, tt);
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(T) {
    return { $$typeof: g, render: T };
  }, Et.isValidElement = J, Et.lazy = function(T) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: T },
      _init: k
    };
  }, Et.memo = function(T, P) {
    return {
      $$typeof: x,
      type: T,
      compare: P === void 0 ? null : P
    };
  }, Et.startTransition = it, Et.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, Et.use = function(T) {
    return Q.H.use(T);
  }, Et.useActionState = function(T, P, st) {
    return Q.H.useActionState(T, P, st);
  }, Et.useCallback = function(T, P) {
    return Q.H.useCallback(T, P);
  }, Et.useContext = function(T) {
    return Q.H.useContext(T);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(T, P) {
    return Q.H.useDeferredValue(T, P);
  }, Et.useEffect = function(T, P) {
    return Q.H.useEffect(T, P);
  }, Et.useEffectEvent = function(T) {
    return Q.H.useEffectEvent(T);
  }, Et.useId = function() {
    return Q.H.useId();
  }, Et.useImperativeHandle = function(T, P, st) {
    return Q.H.useImperativeHandle(T, P, st);
  }, Et.useInsertionEffect = function(T, P) {
    return Q.H.useInsertionEffect(T, P);
  }, Et.useLayoutEffect = function(T, P) {
    return Q.H.useLayoutEffect(T, P);
  }, Et.useMemo = function(T, P) {
    return Q.H.useMemo(T, P);
  }, Et.useOptimistic = function(T, P) {
    return Q.H.useOptimistic(T, P);
  }, Et.useReducer = function(T, P, st) {
    return Q.H.useReducer(T, P, st);
  }, Et.useRef = function(T) {
    return Q.H.useRef(T);
  }, Et.useState = function(T) {
    return Q.H.useState(T);
  }, Et.useSyncExternalStore = function(T, P, st) {
    return Q.H.useSyncExternalStore(
      T,
      P,
      st
    );
  }, Et.useTransition = function() {
    return Q.H.useTransition();
  }, Et.version = "19.3.0", Et;
}
var oy;
function Vu() {
  return oy || (oy = 1, td.exports = FS()), td.exports;
}
var ed = { exports: {} }, pe = {};
var cy;
function WS() {
  if (cy) return pe;
  cy = 1;
  var l = Vu();
  function i(v) {
    var m = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + v + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var r = {
    d: {
      f: c,
      r: function() {
        throw Error(i(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.recoverable"), d = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function g(v, m, y) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: b == null ? null : b === d ? d : "" + b,
      children: v,
      containerInfo: m,
      implementation: y
    };
  }
  var p = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(v, m) {
    if (v === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, pe.browser = function(v) {
    return { $$typeof: f, _reason: v };
  }, pe.createPortal = function(v, m) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(i(299));
    return g(v, m, null, y);
  }, pe.flushSync = function(v) {
    var m = p.T, y = r.p;
    try {
      if (p.T = null, r.p = 2, v) return v();
    } finally {
      p.T = m, r.p = y, r.d.f();
    }
  }, pe.preconnect = function(v, m) {
    typeof v == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(v, m));
  }, pe.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, pe.preinit = function(v, m) {
    if (typeof v == "string" && m && typeof m.as == "string") {
      var y = m.as, b = x(y, m.crossOrigin), E = typeof m.integrity == "string" ? m.integrity : void 0, M = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      y === "style" ? r.d.S(
        v,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: b,
          integrity: E,
          fetchPriority: M
        }
      ) : y === "script" && r.d.X(v, {
        crossOrigin: b,
        integrity: E,
        fetchPriority: M,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, pe.preinitModule = function(v, m) {
    if (typeof v == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var y = x(
            m.as,
            m.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && r.d.M(v);
  }, pe.preload = function(v, m) {
    if (typeof v == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var y = m.as, b = x(y, m.crossOrigin);
      r.d.L(v, y, {
        crossOrigin: b,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, pe.preloadModule = function(v, m) {
    if (typeof v == "string")
      if (m) {
        var y = x(m.as, m.crossOrigin);
        r.d.m(v, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else r.d.m(v);
  }, pe.requestFormReset = function(v) {
    r.d.r(v);
  }, pe.unstable_batchedUpdates = function(v, m) {
    return v(m);
  }, pe.useFormState = function(v, m, y) {
    return p.H.useFormState(v, m, y);
  }, pe.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, pe.version = "19.3.0", pe;
}
var ry;
function wv() {
  if (ry) return ed.exports;
  ry = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), ed.exports = WS(), ed.exports;
}
var sy;
function PS() {
  if (sy) return _u;
  sy = 1;
  var l = IS(), i = Vu(), c = wv();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function f(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (f(t) !== t)
      throw Error(r(188));
  }
  function x(t) {
    var e = t.alternate;
    if (!e) {
      if (e = f(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var o = u.alternate;
      if (o === null) {
        if (a = u.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (u.child === o.child) {
        for (o = u.child; o; ) {
          if (o === n) return p(u), t;
          if (o === a) return p(u), e;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) n = u, a = o;
      else {
        for (var h = !1, S = u.child; S; ) {
          if (S === n) {
            h = !0, n = u, a = o;
            break;
          }
          if (S === a) {
            h = !0, a = u, n = o;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = o.child; S; ) {
            if (S === n) {
              h = !0, n = o, a = u;
              break;
            }
            if (S === a) {
              h = !0, a = o, n = u;
              break;
            }
            S = S.sibling;
          }
          if (!h) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function m(t, e, n, a, u, o) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, a, u, o) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && m(
        t.child,
        e,
        n,
        a,
        u,
        o
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function y(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function b(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function E(t) {
    var e = [null, null], n = y(t);
    return n === null || M(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function M(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && M(
        t,
        e,
        n.child,
        a
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function w(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var N = null, U = null;
  function _(t, e, n) {
    return t === n ? !0 : t === e ? (N = t, !0) : !1;
  }
  function A(t, e, n) {
    return t === n ? (U = t, !1) : t === e ? (U !== null && (N = t), !0) : !1;
  }
  function G(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function V(t, e, n) {
    for (var a = 0, u = t; u; u = n(u)) a++;
    u = 0;
    for (var o = e; o; o = n(o)) u++;
    for (; 0 < a - u; ) t = n(t), a--;
    for (; 0 < u - a; ) e = n(e), u--;
    for (; a--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var B = Object.assign, Q = /* @__PURE__ */ Symbol.for("react.element"), F = /* @__PURE__ */ Symbol.for("react.transitional.element"), ut = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), W = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.consumer"), Y = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), k = /* @__PURE__ */ Symbol.for("react.memo"), nt = /* @__PURE__ */ Symbol.for("react.lazy"), it = /* @__PURE__ */ Symbol.for("react.activity"), dt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), vt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), T = /* @__PURE__ */ Symbol.for("react.view_transition"), P = /* @__PURE__ */ Symbol.for("react.recoverable"), st = Symbol.iterator;
  function ot(t) {
    return t === null || typeof t != "object" ? null : (t = st && t[st] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var tt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ft(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === tt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case D:
        return "Fragment";
      case W:
        return "Profiler";
      case J:
        return "StrictMode";
      case j:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case it:
        return "Activity";
      case T:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ut:
          return "Portal";
        case Y:
          return t.displayName || "Context";
        case C:
          return (t._context.displayName || "Context") + ".Consumer";
        case O:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case k:
          return e = t.displayName || null, e !== null ? e : ft(t.type) || "Memo";
        case nt:
          e = t._payload, t = t._init;
          try {
            return ft(t(e));
          } catch {
          }
      }
    return null;
  }
  var gt = Array.isArray, ct = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, wt = [], _t = -1;
  function Ct(t) {
    return { current: t };
  }
  function Ht(t) {
    0 > _t || (t.current = wt[_t], wt[_t] = null, _t--);
  }
  function Ot(t, e) {
    _t++, wt[_t] = t.current, t.current = e;
  }
  var Pt = Ct(null), xe = Ct(null), re = Ct(null), En = Ct(null);
  function ke(t, e) {
    switch (Ot(re, e), Ot(xe, t), Ot(Pt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? fm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = fm(e), t = dm(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Ht(Pt), Ot(Pt, t);
  }
  function Ae() {
    Ht(Pt), Ht(xe), Ht(re);
  }
  function Ee(t) {
    var e = t.memoizedState;
    e !== null && (fi._currentValue = e.memoizedState, Ot(En, t)), e = Pt.current;
    var n = dm(e, t.type);
    e !== n && (Ot(xe, t), Ot(Pt, n));
  }
  function Oe(t) {
    xe.current === t && (Ht(Pt), Ht(xe)), En.current === t && (Ht(En), fi._currentValue = xt);
  }
  var Ye, _n;
  function Ie(t) {
    if (Ye === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Ye = e && e[1] || "", _n = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ye + t + _n;
  }
  var Ll = !1;
  function wi(t, e) {
    if (!t || Ll) return "";
    Ll = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var at = function() {
                throw Error();
              };
              if (Object.defineProperty(at.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(at, []);
                } catch (ht) {
                  var L = ht;
                }
                Reflect.construct(t, [], at);
              } else {
                try {
                  at.call();
                } catch (ht) {
                  L = ht;
                }
                at = !1;
                try {
                  var $ = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), at = !0, new t();
                } finally {
                  at && ($ !== void 0 ? Object.defineProperty(t.prototype, "props", $) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ht) {
                L = ht;
              }
              (at = t()) && typeof at.catch == "function" && at.catch(function() {
              });
            }
          } catch (ht) {
            if (ht && L && typeof ht.stack == "string")
              return [ht.stack, L.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var o = a.DetermineComponentFrameRoot(), h = o[0], S = o[1];
      if (h && S) {
        var z = h.split(`
`), X = S.split(`
`);
        for (u = a = 0; a < z.length && !z[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < X.length && !X[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === z.length || u === X.length)
          for (a = z.length - 1, u = X.length - 1; 1 <= a && 0 <= u && z[a] !== X[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (z[a] !== X[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || z[a] !== X[u]) {
                  var I = `
` + z[a].replace(" at new ", " at ");
                  return t.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", t.displayName)), I;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      Ll = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Ie(n) : "";
  }
  function dr(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ie(t.type);
      case 16:
        return Ie("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ie("Suspense Fallback") : Ie("Suspense");
      case 19:
        return Ie("SuspenseList");
      case 0:
      case 15:
        return wi(t.type, !1);
      case 11:
        return wi(t.type.render, !1);
      case 1:
        return wi(t.type, !0);
      case 31:
        return Ie("Activity");
      case 30:
        return Ie("ViewTransition");
      default:
        return "";
    }
  }
  function $u(t) {
    try {
      var e = "", n = null;
      do
        e += dr(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ni = Object.prototype.hasOwnProperty, Ti = l.unstable_scheduleCallback, Ci = l.unstable_cancelCallback, hr = l.unstable_shouldYield, gr = l.unstable_requestPaint, _e = l.unstable_now, mr = l.unstable_getCurrentPriorityLevel, Ju = l.unstable_ImmediatePriority, ku = l.unstable_UserBlockingPriority, ba = l.unstable_NormalPriority, yr = l.unstable_LowPriority, Iu = l.unstable_IdlePriority, vr = l.log, pr = l.unstable_setDisableYieldValue, ql = null, we = null;
  function wn(t) {
    if (typeof vr == "function" && pr(t), we && typeof we.setStrictMode == "function")
      try {
        we.setStrictMode(ql, t);
      } catch {
      }
  }
  var Ne = Math.clz32 ? Math.clz32 : br, xr = Math.log, Sr = Math.LN2;
  function br(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (xr(t) / Sr | 0) | 0;
  }
  var Ea = 256, _a = 262144, wa = 4194304;
  function Vn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Na(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, o = t.suspendedLanes, h = t.pingedLanes;
    t = t.warmLanes;
    var S = a & 134217727;
    return S !== 0 ? (a = S & ~o, a !== 0 ? u = Vn(a) : (h &= S, h !== 0 ? u = Vn(h) : n || (n = S & ~t, n !== 0 && (u = Vn(n))))) : (S = a & ~o, S !== 0 ? u = Vn(S) : h !== 0 ? u = Vn(h) : n || (n = a & ~t, n !== 0 && (u = Vn(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & o) === 0 && (o = u & -u, n = e & -e, o >= n || o === 32 && (n & 4194048) !== 0) ? e : u;
  }
  function Xl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function zi(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - Ne(n), u = 1 << a;
        e |= t[a], n &= ~u;
      }
    return e;
  }
  function Fu(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mi() {
    var t = wa;
    return wa <<= 1, (wa & 62914560) === 0 && (wa = 4194304), t;
  }
  function Ai(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Zl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Er(t, e, n, a, u, o) {
    var h = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var S = t.entanglements, z = t.expirationTimes, X = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var I = 31 - Ne(n), at = 1 << I;
      S[I] = 0, z[I] = -1;
      var L = X[I];
      if (L !== null)
        for (X[I] = null, I = 0; I < L.length; I++) {
          var $ = L[I];
          $ !== null && ($.lane &= -536870913);
        }
      n &= ~at;
    }
    a !== 0 && Wu(t, a, 0), o !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(h & ~e));
  }
  function Wu(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Ne(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function Pu(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - Ne(n), u = 1 << a;
      u & e | t[a] & e && (t[a] |= e), n &= ~u;
    }
  }
  function to(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Ta(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Ta(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Oi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function eo() {
    var t = rt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : km(t.type));
  }
  function no(t, e) {
    var n = rt.p;
    try {
      return rt.p = t, e();
    } finally {
      rt.p = n;
    }
  }
  var on = Math.random().toString(36).slice(2), oe = "__reactFiber$" + on, Se = "__reactProps$" + on, il = "__reactContainer$" + on, lo = "__reactEvents$" + on, ao = "__reactListeners$" + on, _r = "__reactHandles$" + on, io = "__reactResources$" + on, Gl = "__reactMarker$" + on, Ca = "__reactLoad$" + on;
  function za(t) {
    delete t[oe], delete t[Se], delete t[ao], delete t[_r];
  }
  function Ln(t) {
    var e;
    if (e = t[oe]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[il] || n[oe]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Mm(t); t !== null; ) {
            if (n = t[oe]) return n;
            t = Mm(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function ul(t) {
    if (t = t[oe] || t[il]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ql(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function qn(t) {
    var e = t[io];
    return e || (e = t[io] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ee(t) {
    t[Gl] = !0;
  }
  function Di(t) {
    t[Ca] = void 0;
  }
  var uo = /* @__PURE__ */ new Set(), oo = {};
  function cn(t, e) {
    ol(t, e), ol(t + "Capture", e);
  }
  function ol(t, e) {
    for (oo[t] = e, t = 0; t < e.length; t++)
      uo.add(e[t]);
  }
  var wr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ri = {}, Id = {};
  function d1(t) {
    return Ni.call(Id, t) ? !0 : Ni.call(Ri, t) ? !1 : wr.test(t) ? Id[t] = !0 : (Ri[t] = !0, !1);
  }
  var jt = !1;
  function Fd() {
    var t = jt;
    return jt = !1, t;
  }
  function co(t, e, n) {
    if (d1(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function ro(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function Xn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, a);
    }
  }
  function Ve(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Wd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function h1(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, o = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(h) {
          n = "" + h, o.call(this, h);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(h) {
          n = "" + h;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Nr(t) {
    if (!t._valueTracker) {
      var e = Wd(t) ? "checked" : "value";
      t._valueTracker = h1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Pd(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = Wd(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var g1 = /[\n"\\]/g;
  function Fe(t) {
    return t.replace(
      g1,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Tr(t, e, n, a, u, o, h, S) {
    t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ve(e)) : t.value !== "" + Ve(e) && (t.value = "" + Ve(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), e != null ? h === "number" && t.value == e ? Cr(t, Ve(t.value)) : Cr(t, Ve(e)) : n != null ? Cr(t, Ve(n)) : a != null && t.removeAttribute("value"), u == null && o != null && (t.defaultChecked = !!o), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? t.name = "" + Ve(S) : t.removeAttribute("name");
  }
  function th(t, e, n, a, u, o, h, S) {
    if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o), e != null || n != null) {
      if (!(o !== "submit" && o !== "reset" || e != null)) {
        Nr(t);
        return;
      }
      n = n != null ? "" + Ve(n) : "", e = e != null ? "" + Ve(e) : n, S || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = S ? t.checked : !!a, t.defaultChecked = !!a, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), Nr(t);
  }
  function Cr(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Ma(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < n.length; u++)
        e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ve(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          t[u].selected = !0, a && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function eh(t, e, n) {
    if (e != null && (e = "" + Ve(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ve(n) : "";
  }
  function nh(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (gt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Ve(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Nr(t);
  }
  function Aa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var m1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function lh(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || m1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function ah(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", jt = !0);
      for (var u in e)
        a = e[u], e.hasOwnProperty(u) && n[u] !== a && (lh(t, u, a), jt = !0);
    } else
      for (var o in e)
        e.hasOwnProperty(o) && lh(t, o, e[o]);
  }
  function zr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var y1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), v1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function so(t) {
    return v1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Nn() {
  }
  var Mr = null;
  function Ar(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Oa = null, Da = null;
  function ih(t) {
    var e = ul(t);
    if (e && (t = e.stateNode)) {
      var n = t[Se] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Tr(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Fe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var u = a[Se] || null;
                if (!u) throw Error(r(90));
                Tr(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && Pd(a);
          }
          break t;
        case "textarea":
          eh(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Ma(t, !!n.multiple, e, !1);
      }
    }
  }
  var Or = !1;
  function uh(t, e, n) {
    if (Or) return t(e, n);
    Or = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Or = !1, (Oa !== null || Da !== null) && (fc(), Oa && (e = Oa, t = Da, Da = Oa = null, ih(e), t)))
        for (e = 0; e < t.length; e++) ih(t[e]);
    }
  }
  function Hi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[Se] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, e, typeof n)
      );
    return n;
  }
  var Zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Dr = !1;
  if (Zn)
    try {
      var Ui = {};
      Object.defineProperty(Ui, "passive", {
        get: function() {
          Dr = !0;
        }
      }), window.addEventListener("test", Ui, Ui), window.removeEventListener("test", Ui, Ui);
    } catch {
      Dr = !1;
    }
  var cl = null, Rr = null, fo = null;
  function oh() {
    if (fo) return fo;
    var t, e = Rr, n = e.length, a, u = "value" in cl ? cl.value : cl.textContent, o = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var h = n - t;
    for (a = 1; a <= h && e[n - a] === u[o - a]; a++) ;
    return fo = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function ho(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function go() {
    return !0;
  }
  function ch() {
    return !1;
  }
  function Te(t) {
    function e(n, a, u, o, h) {
      this._reactName = n, this._targetInst = u, this.type = a, this.nativeEvent = o, this.target = h, this.currentTarget = null;
      for (var S in t)
        t.hasOwnProperty(S) && (n = t[S], this[S] = n ? n(o) : o[S]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? go : ch, this.isPropagationStopped = ch, this;
    }
    return B(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = go);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = go);
      },
      persist: function() {
      },
      isPersistent: go
    }), e;
  }
  var rl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, mo = Te(rl), Bi = B({}, rl, { view: 0, detail: 0 }), p1 = Te(Bi), Hr, Ur, ji, yo = B({}, Bi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jr,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ji && (ji && t.type === "mousemove" ? (Hr = t.screenX - ji.screenX, Ur = t.screenY - ji.screenY) : Ur = Hr = 0, ji = t), Hr);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ur;
    }
  }), rh = Te(yo), x1 = B({}, yo, { dataTransfer: 0 }), S1 = Te(x1), b1 = B({}, Bi, { relatedTarget: 0 }), Br = Te(b1), E1 = B({}, rl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _1 = Te(E1), w1 = B({}, rl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), N1 = Te(w1), T1 = B({}, rl, { data: 0 }), sh = Te(T1), C1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, z1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, M1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function A1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = M1[t]) ? !!e[t] : !1;
  }
  function jr() {
    return A1;
  }
  var O1 = B({}, Bi, {
    key: function(t) {
      if (t.key) {
        var e = C1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = ho(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? z1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jr,
    charCode: function(t) {
      return t.type === "keypress" ? ho(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? ho(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), D1 = Te(O1), R1 = B({}, yo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), fh = Te(R1), H1 = B({}, rl, { submitter: 0 }), U1 = Te(H1), B1 = B({}, Bi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jr
  }), j1 = Te(B1), Y1 = B({}, rl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V1 = Te(Y1), L1 = B({}, yo, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), q1 = Te(L1), X1 = B({}, rl, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Z1 = Te(X1), G1 = [9, 13, 27, 32], Yr = Zn && "CompositionEvent" in window, Yi = null;
  Zn && "documentMode" in document && (Yi = document.documentMode);
  var Q1 = Zn && "TextEvent" in window && !Yi, dh = Zn && (!Yr || Yi && 8 < Yi && 11 >= Yi), hh = " ", gh = !1;
  function mh(t, e) {
    switch (t) {
      case "keyup":
        return G1.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function yh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ra = !1;
  function K1(t, e) {
    switch (t) {
      case "compositionend":
        return yh(e);
      case "keypress":
        return e.which !== 32 ? null : (gh = !0, hh);
      case "textInput":
        return t = e.data, t === hh && gh ? null : t;
      default:
        return null;
    }
  }
  function $1(t, e) {
    if (Ra)
      return t === "compositionend" || !Yr && mh(t, e) ? (t = oh(), fo = Rr = cl = null, Ra = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return dh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var J1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function vh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!J1[t.type] : e === "textarea";
  }
  function ph(t, e, n, a) {
    Oa ? Da ? Da.push(a) : Da = [a] : Oa = a, e = vc(e, "onChange"), 0 < e.length && (n = new mo(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Vi = null, Li = null;
  function k1(t) {
    im(t, 0);
  }
  function vo(t) {
    var e = Ql(t);
    if (Pd(e)) return t;
  }
  function xh(t, e) {
    if (t === "change") return e;
  }
  var Sh = !1;
  if (Zn) {
    var Vr;
    if (Zn) {
      var Lr = "oninput" in document;
      if (!Lr) {
        var bh = document.createElement("div");
        bh.setAttribute("oninput", "return;"), Lr = typeof bh.oninput == "function";
      }
      Vr = Lr;
    } else Vr = !1;
    Sh = Vr && (!document.documentMode || 9 < document.documentMode);
  }
  function Eh() {
    Vi && (Vi.detachEvent("onpropertychange", _h), Li = Vi = null);
  }
  function _h(t) {
    if (t.propertyName === "value" && vo(Li)) {
      var e = [];
      ph(
        e,
        Li,
        t,
        Ar(t)
      ), uh(k1, e);
    }
  }
  function I1(t, e, n) {
    t === "focusin" ? (Eh(), Vi = e, Li = n, Vi.attachEvent("onpropertychange", _h)) : t === "focusout" && Eh();
  }
  function F1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return vo(Li);
  }
  function W1(t, e) {
    if (t === "click") return vo(e);
  }
  function P1(t, e) {
    if (t === "input" || t === "change")
      return vo(e);
  }
  function tx(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Le = typeof Object.is == "function" ? Object.is : tx;
  function qi(t, e) {
    if (Le(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var u = n[a];
      if (!Ni.call(e, u) || !Le(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function qr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function wh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Nh(t, e) {
    var n = wh(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = wh(n);
    }
  }
  function Th(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Th(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Ch(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = qr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = qr(t.document);
    }
    return e;
  }
  function Xr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ex = Zn && "documentMode" in document && 11 >= document.documentMode, Ha = null, Zr = null, Xi = null, Gr = !1;
  function zh(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gr || Ha == null || Ha !== qr(a) || (a = Ha, "selectionStart" in a && Xr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Xi && qi(Xi, a) || (Xi = a, a = vc(Zr, "onSelect"), 0 < a.length && (e = new mo(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Ha)));
  }
  function Kl(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ua = {
    animationend: Kl("Animation", "AnimationEnd"),
    animationiteration: Kl("Animation", "AnimationIteration"),
    animationstart: Kl("Animation", "AnimationStart"),
    transitionrun: Kl("Transition", "TransitionRun"),
    transitionstart: Kl("Transition", "TransitionStart"),
    transitioncancel: Kl("Transition", "TransitionCancel"),
    transitionend: Kl("Transition", "TransitionEnd")
  }, Qr = {}, Mh = {};
  Zn && (Mh = document.createElement("div").style, "AnimationEvent" in window || (delete Ua.animationend.animation, delete Ua.animationiteration.animation, delete Ua.animationstart.animation), "TransitionEvent" in window || delete Ua.transitionend.transition);
  function $l(t) {
    if (Qr[t]) return Qr[t];
    if (!Ua[t]) return t;
    var e = Ua[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Mh)
        return Qr[t] = e[n];
    return t;
  }
  var Ah = $l("animationend"), Oh = $l("animationiteration"), Dh = $l("animationstart"), nx = $l("transitionrun"), lx = $l("transitionstart"), ax = $l("transitioncancel"), Rh = $l("transitionend"), Hh = /* @__PURE__ */ new Map(), Kr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Kr.push("scrollEnd");
  function rn(t, e) {
    Hh.set(t, e), cn(e, [t]);
  }
  var ix = 0;
  function Gn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = hn.identifierPrefix;
    var n = ix++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Uh(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = ei;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = t[n[a]];
        if (u != null) {
          if (u === "none") return "none";
          e = e == null ? u : e + (" " + u);
        }
      }
    return e ?? t.default;
  }
  function Qn(t, e) {
    return t = Uh(t), e = Uh(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var po = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, We = [], Ba = 0, $r = 0;
  function xo() {
    for (var t = Ba, e = $r = Ba = 0; e < t; ) {
      var n = We[e];
      We[e++] = null;
      var a = We[e];
      We[e++] = null;
      var u = We[e];
      We[e++] = null;
      var o = We[e];
      if (We[e++] = null, a !== null && u !== null) {
        var h = a.pending;
        h === null ? u.next = u : (u.next = h.next, h.next = u), a.pending = u;
      }
      o !== 0 && Bh(n, u, o);
    }
  }
  function So(t, e, n, a) {
    We[Ba++] = t, We[Ba++] = e, We[Ba++] = n, We[Ba++] = a, $r |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Jr(t, e, n, a) {
    return So(t, e, n, a), bo(t);
  }
  function Jl(t, e) {
    return So(t, null, null, e), bo(t);
  }
  function Bh(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var u = !1, o = t.return; o !== null; )
      o.childLanes |= n, a = o.alternate, a !== null && (a.childLanes |= n), o.tag === 22 && (t = o.stateNode, t === null || t._visibility & 1 || (u = !0)), t = o, o = o.return;
    return t.tag === 3 ? (o = t.stateNode, u && e !== null && (u = 31 - Ne(n), t = o.hiddenUpdates, a = t[u], a === null ? t[u] = [e] : a.push(e), e.lane = n | 536870912), o) : null;
  }
  function bo(t) {
    if (50 < su)
      throw su = 0, sc = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ja = {};
  function ux(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function De(t, e, n, a) {
    return new ux(t, e, n, a);
  }
  function kr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Kn(t, e) {
    var n = t.alternate;
    return n === null ? (n = De(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function jh(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Eo(t, e, n, a, u, o) {
    var h = 0;
    if (a = t, typeof a == "function") kr(a) && (h = 1);
    else if (typeof a == "string")
      h = HS(
        t,
        n,
        Pt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case it:
          return t = De(31, n, e, u), t.elementType = it, t.lanes = o, t;
        case D:
          return kl(n.children, u, o, e);
        case J:
          h = 8, u |= 24;
          break;
        case W:
          return t = De(12, n, e, u | 2), t.elementType = W, t.lanes = o, t;
        case j:
          return t = De(13, n, e, u), t.elementType = j, t.lanes = o, t;
        case Z:
          return t = De(19, n, e, u), t.elementType = Z, t.lanes = o, t;
        case dt:
        case T:
          return t = u | 32, t = De(30, n, e, t), t.elementType = T, t.lanes = o, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Y:
                h = 10;
                break t;
              case C:
                h = 9;
                break t;
              case O:
                h = 11;
                break t;
              case k:
                h = 14;
                break t;
              case nt:
                h = 16, a = null;
                break t;
            }
          h = 29, n = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = De(h, n, e, u), e.elementType = t, e.type = a, e.lanes = o, e;
  }
  function kl(t, e, n, a) {
    return t = De(7, t, a, e), t.lanes = n, t;
  }
  function Ir(t, e, n) {
    return t = De(6, t, null, e), t.lanes = n, t;
  }
  function Yh(t) {
    var e = De(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Fr(t, e, n) {
    return e = De(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Vh = /* @__PURE__ */ new WeakMap();
  function Pe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Vh.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: $u(e)
      }, Vh.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: $u(e)
    };
  }
  var Ya = [], Va = 0, _o = null, Zi = 0, tn = [], en = 0, sl = null, Tn = 1, Cn = "";
  function $n(t, e) {
    Ya[Va++] = Zi, Ya[Va++] = _o, _o = t, Zi = e;
  }
  function Lh(t, e, n) {
    tn[en++] = Tn, tn[en++] = Cn, tn[en++] = sl, sl = t;
    var a = Tn;
    t = Cn;
    var u = 32 - Ne(a) - 1;
    a &= ~(1 << u), n += 1;
    var o = 32 - Ne(e) + u;
    if (30 < o) {
      var h = u - u % 5;
      o = (a & (1 << h) - 1).toString(32), a >>= h, u -= h, Tn = 1 << 32 - Ne(e) + u | n << u | a, Cn = o + t;
    } else
      Tn = 1 << o | n << u | a, Cn = t;
  }
  function wo(t) {
    t.return !== null && ($n(t, 1), Lh(t, 1, 0));
  }
  function Wr(t) {
    for (; t === _o; )
      _o = Ya[--Va], Ya[Va] = null, Zi = Ya[--Va], Ya[Va] = null;
    for (; t === sl; )
      sl = tn[--en], tn[en] = null, Cn = tn[--en], tn[en] = null, Tn = tn[--en], tn[en] = null;
  }
  function qh(t, e) {
    tn[en++] = Tn, tn[en++] = Cn, tn[en++] = sl, Tn = e.id, Cn = e.overflow, sl = t;
  }
  var se = null, Qt = null, zt = !1, fl = null, nn = !1, Pr = Error(r(519));
  function dl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Gi(Pe(e, t)), Pr;
  }
  function Xh(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[oe] = t, e[Se] = a, n) {
      case "dialog":
        At("cancel", e), At("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        At("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < du.length; n++)
          At(du[n], e);
        break;
      case "source":
        At("error", e);
        break;
      case "img":
      case "image":
      case "link":
        At("error", e), At("load", e);
        break;
      case "details":
        At("toggle", e);
        break;
      case "input":
        At("invalid", e), th(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        At("invalid", e);
        break;
      case "textarea":
        At("invalid", e), nh(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || rm(e.textContent, n) ? (a.popover != null && (At("beforetoggle", e), At("toggle", e)), a.onScroll != null && At("scroll", e), a.onScrollEnd != null && At("scrollend", e), a.onClick != null && (e.onclick = Nn), e = !0) : e = !1, e || dl(t, !0);
  }
  function No(t) {
    for (se = t.return; se; )
      switch (se.tag) {
        case 5:
        case 31:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          se = se.return;
      }
  }
  function La(t) {
    if (t !== se) return !1;
    if (!zt) return No(t), zt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Af(t.type, t.memoizedProps)), n = !n), n && Qt && dl(t), No(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Qt = zm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Qt = zm(t);
    } else
      e === 27 ? (e = Qt, zl(t.type) ? (t = Vf, Vf = null, Qt = t) : Qt = e) : Qt = se ? an(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Il() {
    Qt = se = null, zt = !1;
  }
  function ts() {
    var t = fl;
    return t !== null && (Ue === null ? Ue = t : Ue.push.apply(
      Ue,
      t
    ), fl = null), t;
  }
  function Gi(t) {
    fl === null ? fl = [t] : fl.push(t);
  }
  var es = Ct(null), Fl = null, Jn = null;
  function hl(t, e, n) {
    Ot(es, e._currentValue), e._currentValue = n;
  }
  function kn(t) {
    t._currentValue = es.current, Ht(es);
  }
  function To(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function ns(t, e, n, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var o = u.dependencies;
      if (o !== null) {
        var h = u.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var S = o;
          o = u;
          for (var z = 0; z < e.length; z++)
            if (S.context === e[z]) {
              o.lanes |= n, S = o.alternate, S !== null && (S.lanes |= n), To(
                o.return,
                n,
                t
              ), a || (h = null);
              break t;
            }
          o = S.next;
        }
      } else if (u.tag === 18) {
        if (h = u.return, h === null) throw Error(r(341));
        h.lanes |= n, o = h.alternate, o !== null && (o.lanes |= n), To(h, n, t), h = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), To(
          u.return,
          n,
          t
        ), h = u.child, h = h !== null ? h.sibling : null) : h = u.child;
      if (h !== null) h.return = u;
      else
        for (h = u; h !== null; ) {
          if (h === t) {
            h = null;
            break;
          }
          if (u = h.sibling, u !== null) {
            u.return = h.return, h = u;
            break;
          }
          h = h.return;
        }
      u = h;
    }
  }
  function Wl(t, e, n, a) {
    t = null;
    for (var u = e, o = !1; u !== null; ) {
      if (!o) {
        if ((u.flags & 524288) !== 0) o = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var h = u.alternate;
        if (h === null) throw Error(r(387));
        if (h = h.memoizedProps, h !== null) {
          var S = u.type;
          Le(u.pendingProps.value, h.value) || (t !== null ? t.push(S) : t = [S]);
        }
      } else if (u === En.current) {
        if (h = u.alternate, h === null) throw Error(r(387));
        h.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(fi) : t = [fi]);
      }
      u = u.return;
    }
    return t !== null && ns(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function Co(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Le(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Pl(t) {
    Fl = t, Jn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function he(t) {
    return Zh(Fl, t);
  }
  function zo(t, e) {
    return Fl === null && Pl(t), Zh(t, e);
  }
  function Zh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Jn === null) {
      if (t === null) throw Error(r(308));
      Jn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Jn = Jn.next = e;
    return n;
  }
  var ox = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, cx = l.unstable_scheduleCallback, rx = l.unstable_NormalPriority, ne = {
    $$typeof: Y,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ls() {
    return {
      controller: new ox(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Qi(t) {
    t.refCount--, t.refCount === 0 && cx(rx, function() {
      t.controller.abort();
    });
  }
  function Gh(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var Ki = null;
  function sx(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var $i = null, as = 0, ta = 0, qa = null;
  function fx(t, e) {
    if ($i === null) {
      var n = $i = [];
      as = 0, ta = bf(), qa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return as++, e.then(Qh, Qh), e;
  }
  function Qh() {
    if (--as === 0 && (Ki = null, $i !== null)) {
      qa !== null && (qa.status = "fulfilled");
      var t = $i;
      $i = null, ta = 0, qa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function dx(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var u = 0; u < n.length; u++) (0, n[u])(e);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), a;
  }
  var Kh = ct.S;
  ct.S = function(t, e) {
    if (Yg = _e(), typeof e == "object" && e !== null && typeof e.then == "function" && fx(t, e), Ki !== null)
      for (var n = ii; n !== null; )
        Gh(n, Ki), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = ii; a !== null; )
        Gh(a, n), a = a.next;
      if (ta !== 0) {
        a = Ki, a === null && (a = Ki = []);
        for (var u = 0; u < n.length; u++) {
          var o = n[u];
          a.indexOf(o) === -1 && a.push(o);
        }
      }
    }
    Kh !== null && Kh(t, e);
  };
  var ea = Ct(null);
  function is() {
    var t = ea.current;
    return t !== null ? t : Gt.pooledCache;
  }
  function Mo(t, e) {
    e === null ? Ot(ea, ea.current) : Ot(ea, e.pool);
  }
  function $h() {
    var t = is();
    return t === null ? null : { parent: ne._currentValue, pool: t };
  }
  var Xa = Error(r(460)), us = Error(r(474)), Ao = Error(r(542)), Oo = { then: function() {
  } };
  function Jh(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function kh(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Nn, Nn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Fh(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Nn, Nn);
        else {
          if (t = Gt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Fh(t), t;
        }
        throw la = e, Xa;
    }
  }
  function na(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (la = n, Xa) : n;
    }
  }
  var la = null;
  function Ih() {
    if (la === null) throw Error(r(459));
    var t = la;
    return la = null, t;
  }
  function Fh(t) {
    if (t === Xa || t === Ao)
      throw Error(r(483));
  }
  var Za = null, Ji = 0;
  function Do(t) {
    var e = Ji;
    return Ji += 1, Za === null && (Za = []), kh(Za, t, e);
  }
  function gl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ro(t, e) {
    throw e.$$typeof === Q ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Wh(t) {
    function e(q, H) {
      if (t) {
        var K = q.deletions;
        K === null ? (q.deletions = [H], q.flags |= 16) : K.push(H);
      }
    }
    function n(q, H) {
      if (!t) return null;
      for (; H !== null; )
        e(q, H), H = H.sibling;
      return null;
    }
    function a(q) {
      for (var H = /* @__PURE__ */ new Map(); q !== null; )
        q.key === null ? H.set(q.index, q) : H.set(q.key, q), q = q.sibling;
      return H;
    }
    function u(q, H) {
      return q = Kn(q, H), q.index = 0, q.sibling = null, q;
    }
    function o(q, H, K) {
      return q.index = K, t ? (K = q.alternate, K !== null ? (K = K.index, K < H ? (q.flags |= 2, H) : K) : (q.flags |= 134217730, H)) : (q.flags |= 1048576, H);
    }
    function h(q) {
      return t && q.alternate === null && (q.flags |= 134217730), q;
    }
    function S(q, H, K, lt) {
      return H === null || H.tag !== 6 ? (H = Ir(K, q.mode, lt), H.return = q, H) : (H = u(H, K), H.return = q, H);
    }
    function z(q, H, K, lt) {
      var mt = K.type;
      return mt === D ? (q = I(
        q,
        H,
        K.props.children,
        lt,
        K.key
      ), gl(q, K), q) : H !== null && (H.elementType === mt || typeof mt == "object" && mt !== null && mt.$$typeof === nt && na(mt) === H.type) ? (H = u(H, K.props), gl(H, K), H.return = q, H) : (H = Eo(
        K.type,
        K.key,
        K.props,
        null,
        q.mode,
        lt
      ), gl(H, K), H.return = q, H);
    }
    function X(q, H, K, lt) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== K.containerInfo || H.stateNode.implementation !== K.implementation ? (H = Fr(K, q.mode, lt), H.return = q, H) : (H = u(H, K.children || []), H.return = q, H);
    }
    function I(q, H, K, lt, mt) {
      return H === null || H.tag !== 7 ? (H = kl(
        K,
        q.mode,
        lt,
        mt
      ), H.return = q, H) : (H = u(H, K), H.return = q, H);
    }
    function at(q, H, K) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return H = Ir(
          "" + H,
          q.mode,
          K
        ), H.return = q, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case F:
            return K = Eo(
              H.type,
              H.key,
              H.props,
              null,
              q.mode,
              K
            ), gl(K, H), K.return = q, K;
          case ut:
            return H = Fr(
              H,
              q.mode,
              K
            ), H.return = q, H;
          case nt:
            return H = na(H), at(q, H, K);
        }
        if (gt(H) || ot(H))
          return H = kl(
            H,
            q.mode,
            K,
            null
          ), H.return = q, H;
        if (typeof H.then == "function")
          return at(q, Do(H), K);
        if (H.$$typeof === Y)
          return at(
            q,
            zo(q, H),
            K
          );
        Ro(q, H);
      }
      return null;
    }
    function L(q, H, K, lt) {
      var mt = H !== null ? H.key : null;
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return mt !== null ? null : S(q, H, "" + K, lt);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case F:
            return K.key === mt ? z(q, H, K, lt) : null;
          case ut:
            return K.key === mt ? X(q, H, K, lt) : null;
          case nt:
            return K = na(K), L(q, H, K, lt);
        }
        if (gt(K) || ot(K))
          return mt !== null ? null : I(q, H, K, lt, null);
        if (typeof K.then == "function")
          return L(
            q,
            H,
            Do(K),
            lt
          );
        if (K.$$typeof === Y)
          return L(
            q,
            H,
            zo(q, K),
            lt
          );
        Ro(q, K);
      }
      return null;
    }
    function $(q, H, K, lt, mt) {
      if (typeof lt == "string" && lt !== "" || typeof lt == "number" || typeof lt == "bigint")
        return q = q.get(K) || null, S(H, q, "" + lt, mt);
      if (typeof lt == "object" && lt !== null) {
        switch (lt.$$typeof) {
          case F:
            return q = q.get(
              lt.key === null ? K : lt.key
            ) || null, z(H, q, lt, mt);
          case ut:
            return q = q.get(
              lt.key === null ? K : lt.key
            ) || null, X(H, q, lt, mt);
          case nt:
            return lt = na(lt), $(
              q,
              H,
              K,
              lt,
              mt
            );
        }
        if (gt(lt) || ot(lt))
          return q = q.get(K) || null, I(H, q, lt, mt, null);
        if (typeof lt.then == "function")
          return $(
            q,
            H,
            K,
            Do(lt),
            mt
          );
        if (lt.$$typeof === Y)
          return $(
            q,
            H,
            K,
            zo(H, lt),
            mt
          );
        Ro(H, lt);
      }
      return null;
    }
    function ht(q, H, K, lt) {
      for (var mt = null, Rt = null, St = H, bt = H = 0, ie = null; St !== null && bt < K.length; bt++) {
        St.index > bt ? (ie = St, St = null) : ie = St.sibling;
        var Ut = L(
          q,
          St,
          K[bt],
          lt
        );
        if (Ut === null) {
          St === null && (St = ie);
          break;
        }
        t && St && Ut.alternate === null && e(q, St), H = o(Ut, H, bt), Rt === null ? mt = Ut : Rt.sibling = Ut, Rt = Ut, St = ie;
      }
      if (bt === K.length)
        return n(q, St), zt && $n(q, bt), mt;
      if (St === null) {
        for (; bt < K.length; bt++)
          St = at(q, K[bt], lt), St !== null && (H = o(
            St,
            H,
            bt
          ), Rt === null ? mt = St : Rt.sibling = St, Rt = St);
        return zt && $n(q, bt), mt;
      }
      for (St = a(St); bt < K.length; bt++)
        ie = $(
          St,
          q,
          bt,
          K[bt],
          lt
        ), ie !== null && (t && (Ut = ie.alternate, Ut !== null && St.delete(Ut.key === null ? bt : Ut.key)), H = o(
          ie,
          H,
          bt
        ), Rt === null ? mt = ie : Rt.sibling = ie, Rt = ie);
      return t && St.forEach(function(Rl) {
        return e(q, Rl);
      }), zt && $n(q, bt), mt;
    }
    function yt(q, H, K, lt) {
      if (K == null) throw Error(r(151));
      for (var mt = null, Rt = null, St = H, bt = H = 0, ie = null, Ut = K.next(); St !== null && !Ut.done; bt++, Ut = K.next()) {
        St.index > bt ? (ie = St, St = null) : ie = St.sibling;
        var Rl = L(q, St, Ut.value, lt);
        if (Rl === null) {
          St === null && (St = ie);
          break;
        }
        t && St && Rl.alternate === null && e(q, St), H = o(Rl, H, bt), Rt === null ? mt = Rl : Rt.sibling = Rl, Rt = Rl, St = ie;
      }
      if (Ut.done)
        return n(q, St), zt && $n(q, bt), mt;
      if (St === null) {
        for (; !Ut.done; bt++, Ut = K.next())
          Ut = at(q, Ut.value, lt), Ut !== null && (H = o(Ut, H, bt), Rt === null ? mt = Ut : Rt.sibling = Ut, Rt = Ut);
        return zt && $n(q, bt), mt;
      }
      for (St = a(St); !Ut.done; bt++, Ut = K.next())
        Ut = $(St, q, bt, Ut.value, lt), Ut !== null && (t && (ie = Ut.alternate, ie !== null && St.delete(
          ie.key === null ? bt : ie.key
        )), H = o(Ut, H, bt), Rt === null ? mt = Ut : Rt.sibling = Ut, Rt = Ut);
      return t && St.forEach(function(KS) {
        return e(q, KS);
      }), zt && $n(q, bt), mt;
    }
    function Tt(q, H, K, lt) {
      if (typeof K == "object" && K !== null && K.type === D && K.key === null && K.props.ref === void 0 && (K = K.props.children), typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case F:
            t: {
              for (var mt = K.key; H !== null; ) {
                if (H.key === mt) {
                  if (mt = K.type, mt === D) {
                    if (H.tag === 7) {
                      n(
                        q,
                        H.sibling
                      ), lt = u(
                        H,
                        K.props.children
                      ), gl(lt, K), lt.return = q, q = lt;
                      break t;
                    }
                  } else if (H.elementType === mt || typeof mt == "object" && mt !== null && mt.$$typeof === nt && na(mt) === H.type) {
                    n(
                      q,
                      H.sibling
                    ), lt = u(H, K.props), gl(lt, K), lt.return = q, q = lt;
                    break t;
                  }
                  n(q, H);
                  break;
                } else e(q, H);
                H = H.sibling;
              }
              K.type === D ? (lt = kl(
                K.props.children,
                q.mode,
                lt,
                K.key
              ), gl(lt, K), lt.return = q, q = lt) : (lt = Eo(
                K.type,
                K.key,
                K.props,
                null,
                q.mode,
                lt
              ), gl(lt, K), lt.return = q, q = lt);
            }
            return h(q);
          case ut:
            t: {
              for (mt = K.key; H !== null; ) {
                if (H.key === mt)
                  if (H.tag === 4 && H.stateNode.containerInfo === K.containerInfo && H.stateNode.implementation === K.implementation) {
                    n(
                      q,
                      H.sibling
                    ), lt = u(H, K.children || []), lt.return = q, q = lt;
                    break t;
                  } else {
                    n(q, H);
                    break;
                  }
                else e(q, H);
                H = H.sibling;
              }
              lt = Fr(K, q.mode, lt), lt.return = q, q = lt;
            }
            return h(q);
          case nt:
            return K = na(K), Tt(
              q,
              H,
              K,
              lt
            );
        }
        if (gt(K))
          return ht(
            q,
            H,
            K,
            lt
          );
        if (ot(K)) {
          if (mt = ot(K), typeof mt != "function") throw Error(r(150));
          return K = mt.call(K), yt(
            q,
            H,
            K,
            lt
          );
        }
        if (typeof K.then == "function")
          return Tt(
            q,
            H,
            Do(K),
            lt
          );
        if (K.$$typeof === Y)
          return Tt(
            q,
            H,
            zo(q, K),
            lt
          );
        Ro(q, K);
      }
      return typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint" ? (K = "" + K, H !== null && H.tag === 6 ? (n(q, H.sibling), lt = u(H, K), lt.return = q, q = lt) : (n(q, H), lt = Ir(K, q.mode, lt), lt.return = q, q = lt), h(q)) : n(q, H);
    }
    return function(q, H, K, lt) {
      try {
        Ji = 0;
        var mt = Tt(
          q,
          H,
          K,
          lt
        );
        return Za = null, mt;
      } catch (St) {
        if (St === Xa || St === Ao) throw St;
        var Rt = De(29, St, null, q.mode);
        return Rt.lanes = lt, Rt.return = q, Rt;
      }
    };
  }
  var aa = Wh(!0), Ph = Wh(!1), ml = !1;
  function os(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function cs(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function yl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function vl(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Yt & 2) !== 0) {
      var u = a.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), a.pending = e, e = bo(t), Bh(t, null, n), e;
    }
    return So(t, a, e, n), bo(t);
  }
  function ki(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Pu(t, n);
    }
  }
  function rs(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var u = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          o === null ? u = o = h : o = o.next = h, n = n.next;
        } while (n !== null);
        o === null ? u = o = e : o = o.next = e;
      } else u = o = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: o,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var ss = !1;
  function Ii() {
    if (ss) {
      var t = qa;
      if (t !== null) throw t;
    }
  }
  function Fi(t, e, n, a) {
    ss = !1;
    var u = t.updateQueue;
    ml = !1;
    var o = u.firstBaseUpdate, h = u.lastBaseUpdate, S = u.shared.pending;
    if (S !== null) {
      u.shared.pending = null;
      var z = S, X = z.next;
      z.next = null, h === null ? o = X : h.next = X, h = z;
      var I = t.alternate;
      I !== null && (I = I.updateQueue, S = I.lastBaseUpdate, S !== h && (S === null ? I.firstBaseUpdate = X : S.next = X, I.lastBaseUpdate = z));
    }
    if (o !== null) {
      var at = u.baseState;
      h = 0, I = X = z = null, S = o;
      do {
        var L = S.lane & -536870913, $ = L !== S.lane;
        if ($ ? (Dt & L) === L : (a & L) === L) {
          L !== 0 && L === ta && (ss = !0), I !== null && (I = I.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          t: {
            var ht = t, yt = S;
            L = e;
            var Tt = n;
            switch (yt.tag) {
              case 1:
                if (ht = yt.payload, typeof ht == "function") {
                  at = ht.call(Tt, at, L);
                  break t;
                }
                at = ht;
                break t;
              case 3:
                ht.flags = ht.flags & -65537 | 128;
              case 0:
                if (ht = yt.payload, L = typeof ht == "function" ? ht.call(Tt, at, L) : ht, L == null) break t;
                at = B({}, at, L);
                break t;
              case 2:
                ml = !0;
            }
          }
          L = S.callback, L !== null && (t.flags |= 64, $ && (t.flags |= 8192), $ = u.callbacks, $ === null ? u.callbacks = [L] : $.push(L));
        } else
          $ = {
            lane: L,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, I === null ? (X = I = $, z = at) : I = I.next = $, h |= L;
        if (S = S.next, S === null) {
          if (S = u.shared.pending, S === null)
            break;
          $ = S, S = $.next, $.next = null, u.lastBaseUpdate = $, u.shared.pending = null;
        }
      } while (!0);
      I === null && (z = at), u.baseState = z, u.firstBaseUpdate = X, u.lastBaseUpdate = I, o === null && (u.shared.lanes = 0), wl |= h, t.lanes = h, t.memoizedState = at;
    }
  }
  function t0(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function e0(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        t0(n[t], e);
  }
  var pl = Ct(null), Ho = Ct(0);
  function n0(t, e) {
    t = tl, Ot(Ho, t), Ot(pl, e), tl = t | e.baseLanes;
  }
  function fs() {
    Ot(Ho, tl), Ot(pl, pl.current);
  }
  function ds() {
    tl = Ho.current, Ht(pl), Ht(Ho);
  }
  var ge = Ct(null), be = null;
  function xl(t) {
    var e = t.alternate;
    Ot(me, me.current & 1), Ot(ge, t), be === null && (e === null || pl.current !== null || e.memoizedState !== null) && (be = t);
  }
  function hs(t) {
    Ot(me, me.current), Ot(ge, t), be === null && (be = t);
  }
  function l0(t) {
    t.tag === 22 ? (Ot(me, me.current), Ot(ge, t), be === null && (be = t)) : Sl();
  }
  function Sl() {
    Ot(me, me.current), Ot(ge, ge.current);
  }
  function qe(t) {
    Ht(ge), be === t && (be = null), Ht(me);
  }
  var me = Ct(0);
  function Wi(t, e) {
    Ot(ge, ge.current), Ot(me, e);
  }
  function gs(t) {
    Ht(me), Ht(ge), be === t && (be = null);
  }
  function Uo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || jf(n) || Yf(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var In = 0, Nt = null, Zt = null, le = null, Bo = !1, Ga = !1, ia = !1, jo = 0, Pi = 0, Qa = null, hx = 0;
  function Ft() {
    throw Error(r(321));
  }
  function ms(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Le(t[n], e[n])) return !1;
    return !0;
  }
  function ys(t, e, n, a, u, o) {
    return In = o, Nt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ct.H = t === null || t.memoizedState === null ? L0 : q0, ia = !1, o = n(a, u), ia = !1, Ga && (o = i0(
      e,
      n,
      a,
      u
    )), a0(t), o;
  }
  function a0(t) {
    ct.H = Go;
    var e = Zt !== null && Zt.next !== null;
    if (In = 0, le = Zt = Nt = null, Bo = !1, Pi = 0, Qa = null, e) throw Error(r(300));
    t === null || ae || (t = t.dependencies, t !== null && Co(t) && (ae = !0));
  }
  function i0(t, e, n, a) {
    Nt = t;
    var u = 0;
    do {
      if (Ga && (Qa = null), Pi = 0, Ga = !1, 25 <= u) throw Error(r(301));
      if (u += 1, le = Zt = null, t.updateQueue != null) {
        var o = t.updateQueue;
        o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
      }
      ct.H = bx, o = e(n, a);
    } while (Ga);
    return o;
  }
  function gx() {
    var t = ct.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? tu(e) : e, t = t.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== t && (Nt.flags |= 1024), e;
  }
  function vs() {
    var t = jo !== 0;
    return jo = 0, t;
  }
  function ps(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function xs(t) {
    if (Bo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Bo = !1;
    }
    In = 0, le = Zt = Nt = null, Ga = !1, Pi = jo = 0, Qa = null;
  }
  function Ce() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return le === null ? Nt.memoizedState = le = t : le = le.next = t, le;
  }
  function te() {
    if (Zt === null) {
      var t = Nt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Zt.next;
    var e = le === null ? Nt.memoizedState : le.next;
    if (e !== null)
      le = e, Zt = t;
    else {
      if (t === null)
        throw Nt.alternate === null ? Error(r(467)) : Error(r(310));
      Zt = t, t = {
        memoizedState: Zt.memoizedState,
        baseState: Zt.baseState,
        baseQueue: Zt.baseQueue,
        queue: Zt.queue,
        next: null
      }, le === null ? Nt.memoizedState = le = t : le = le.next = t;
    }
    return le;
  }
  function Yo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tu(t) {
    var e = Pi;
    return Pi += 1, Qa === null && (Qa = []), t = kh(Qa, t, e), e = Nt, (le === null ? e.memoizedState : le.next) === null && (e = e.alternate, ct.H = e === null || e.memoizedState === null ? L0 : q0), t;
  }
  function Vo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return tu(t);
      if (t.$$typeof === P) return;
      if (t.$$typeof === Y) return he(t);
    }
    throw Error(r(438, String(t)));
  }
  function Ss(t) {
    var e = null, n = Nt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = Nt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Yo(), Nt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = vt;
    return e.index++, n;
  }
  function Fn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Lo(t) {
    var e = te();
    return bs(e, Zt, t);
  }
  function bs(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var u = t.baseQueue, o = a.pending;
    if (o !== null) {
      if (u !== null) {
        var h = u.next;
        u.next = o.next, o.next = h;
      }
      e.baseQueue = u = o, a.pending = null;
    }
    if (o = t.baseState, u === null) t.memoizedState = o;
    else {
      e = u.next;
      var S = h = null, z = null, X = e, I = !1;
      do {
        var at = X.lane & -536870913;
        if (at !== X.lane ? (Dt & at) === at : (In & at) === at) {
          var L = X.revertLane;
          if (L === 0)
            z !== null && (z = z.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            }), at === ta && (I = !0);
          else if ((In & L) === L) {
            X = X.next, L === ta && (I = !0);
            continue;
          } else
            at = {
              lane: 0,
              revertLane: X.revertLane,
              gesture: null,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            }, z === null ? (S = z = at, h = o) : z = z.next = at, Nt.lanes |= L, wl |= L;
          at = X.action, ia && n(o, at), o = X.hasEagerState ? X.eagerState : n(o, at);
        } else
          L = {
            lane: at,
            revertLane: X.revertLane,
            gesture: X.gesture,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          }, z === null ? (S = z = L, h = o) : z = z.next = L, Nt.lanes |= at, wl |= at;
        X = X.next;
      } while (X !== null && X !== e);
      if (z === null ? h = o : z.next = S, !Le(o, t.memoizedState) && (ae = !0, I && (n = qa, n !== null)))
        throw n;
      t.memoizedState = o, t.baseState = h, t.baseQueue = z, a.lastRenderedState = o;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Es(t) {
    var e = te(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, u = n.pending, o = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var h = u = u.next;
      do
        o = t(o, h.action), h = h.next;
      while (h !== u);
      Le(o, e.memoizedState) || (ae = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o;
    }
    return [o, a];
  }
  function u0(t, e, n) {
    var a = Nt, u = te(), o = zt;
    if (o) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var h = !Le(
      (Zt || u).memoizedState,
      n
    );
    if (h && (u.memoizedState = n, ae = !0), u = u.queue, Ns(r0.bind(null, a, u, t), [
      t
    ]), t = u.getSnapshot !== e || h || le !== null && (le.memoizedState.tag & 1) !== 0, Ka(
      t ? 9 : 8,
      { destroy: void 0 },
      c0.bind(null, a, u, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Gt === null) throw Error(r(349));
      o || (In & 127) !== 0 || o0(a, e, n);
    }
    return n;
  }
  function o0(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = Nt.updateQueue, e === null ? (e = Yo(), Nt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function c0(t, e, n, a) {
    e.value = n, e.getSnapshot = a, s0(e) && f0(t);
  }
  function r0(t, e, n) {
    return n(function() {
      s0(e) && f0(t);
    });
  }
  function s0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Le(t, n);
    } catch {
      return !0;
    }
  }
  function f0(t) {
    var e = Jl(t, 2);
    e !== null && Be(e, t, 2);
  }
  function _s(t) {
    var e = Ce();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), ia) {
        wn(!0);
        try {
          n();
        } finally {
          wn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fn,
      lastRenderedState: t
    }, e;
  }
  function d0(t, e, n, a) {
    return t.baseState = n, bs(
      t,
      Zt,
      typeof a == "function" ? a : Fn
    );
  }
  function mx(t, e, n, a, u) {
    if (Zo(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var o = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(h) {
          o.listeners.push(h);
        }
      };
      ct.T !== null ? n(!0) : o.isTransition = !1, a(o), n = e.pending, n === null ? (o.next = e.pending = o, h0(e, o)) : (o.next = n.next, e.pending = n.next = o);
    }
  }
  function h0(t, e) {
    var n = e.action, a = e.payload, u = t.state;
    if (e.isTransition) {
      var o = ct.T, h = {};
      h.types = o !== null ? o.types : null, ct.T = h;
      try {
        var S = n(u, a), z = ct.S;
        z !== null && z(h, S), g0(t, e, S);
      } catch (X) {
        ws(t, e, X);
      } finally {
        o !== null && h.types !== null && (o.types = h.types), ct.T = o;
      }
    } else
      try {
        o = n(u, a), g0(t, e, o);
      } catch (X) {
        ws(t, e, X);
      }
  }
  function g0(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        m0(t, e, a);
      },
      function(a) {
        return ws(t, e, a);
      }
    ) : m0(t, e, n);
  }
  function m0(t, e, n) {
    e.status = "fulfilled", e.value = n, y0(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, h0(t, n)));
  }
  function ws(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, y0(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function y0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function v0(t, e) {
    return e;
  }
  function p0(t, e) {
    if (zt) {
      var n = Gt.formState;
      if (n !== null) {
        t: {
          var a = Nt;
          if (zt) {
            if (Qt) {
              e: {
                for (var u = Qt, o = nn; u.nodeType !== 8; ) {
                  if (!o) {
                    u = null;
                    break e;
                  }
                  if (u = an(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                o = u.data, u = o === "F!" || o === "F" ? u : null;
              }
              if (u) {
                Qt = an(
                  u.nextSibling
                ), a = u.data === "F!";
                break t;
              }
            }
            dl(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = Ce(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: v0,
      lastRenderedState: e
    }, n.queue = a, n = j0.bind(
      null,
      Nt,
      a
    ), a.dispatch = n, a = _s(!1), o = As.bind(
      null,
      Nt,
      !1,
      a.queue
    ), a = Ce(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = u, n = mx.bind(
      null,
      Nt,
      u,
      o,
      n
    ), u.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function x0(t) {
    var e = te();
    return S0(e, Zt, t);
  }
  function S0(t, e, n) {
    if (e = bs(
      t,
      e,
      v0
    )[0], t = Lo(Fn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = tu(e);
      } catch (h) {
        throw h === Xa ? Ao : h;
      }
    else a = e;
    e = te();
    var u = e.queue, o = u.dispatch;
    return n !== e.memoizedState && (Nt.flags |= 2048, Ka(
      9,
      { destroy: void 0 },
      yx.bind(null, u, n),
      null
    )), [a, o, t];
  }
  function yx(t, e) {
    t.action = e;
  }
  function b0(t) {
    var e = te(), n = Zt;
    if (n !== null)
      return S0(e, n, t);
    te(), e = e.memoizedState, n = te();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Ka(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = Nt.updateQueue, e === null && (e = Yo(), Nt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function E0() {
    return te().memoizedState;
  }
  function qo(t, e, n, a) {
    var u = Ce();
    Nt.flags |= t, u.memoizedState = Ka(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Xo(t, e, n, a) {
    var u = te();
    a = a === void 0 ? null : a;
    var o = u.memoizedState.inst;
    Zt !== null && a !== null && ms(a, Zt.memoizedState.deps) ? u.memoizedState = Ka(e, o, n, a) : (Nt.flags |= t, u.memoizedState = Ka(
      1 | e,
      o,
      n,
      a
    ));
  }
  function _0(t, e) {
    qo(8390656, 8, t, e);
  }
  function Ns(t, e) {
    Xo(2048, 8, t, e);
  }
  function vx(t) {
    Nt.flags |= 4;
    var e = Nt.updateQueue;
    if (e === null)
      e = Yo(), Nt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function w0(t) {
    var e = te().memoizedState;
    return vx({ ref: e, nextImpl: t }), function() {
      if ((Yt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function N0(t, e) {
    return Xo(4, 2, t, e);
  }
  function T0(t, e) {
    return Xo(4, 4, t, e);
  }
  function C0(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function z0(t, e, n) {
    n = n != null ? n.concat([t]) : null, Xo(4, 4, C0.bind(null, e, t), n);
  }
  function Ts() {
  }
  function M0(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && ms(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function A0(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && ms(e, a[1]))
      return a[0];
    if (a = t(), ia) {
      wn(!0);
      try {
        t();
      } finally {
        wn(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function Cs(t, e, n) {
    return n === void 0 || (In & 1073741824) !== 0 && (Dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Lg(), Nt.lanes |= t, wl |= t, n);
  }
  function O0(t, e, n, a) {
    return Le(n, e) ? n : pl.current !== null ? (t = Cs(t, n, a), Le(t, e) || (ae = !0), t) : (In & 106) === 0 || (In & 1073741824) !== 0 && (Dt & 261930) === 0 ? (ae = !0, t.memoizedState = n) : (t = Lg(), Nt.lanes |= t, wl |= t, e);
  }
  function D0(t, e, n, a, u) {
    var o = rt.p;
    rt.p = o !== 0 && 8 > o ? o : 8;
    var h = ct.T, S = {};
    S.types = h !== null ? h.types : null, ct.T = S, As(t, !1, e, n);
    try {
      var z = u(), X = ct.S;
      if (X !== null && X(S, z), z !== null && typeof z == "object" && typeof z.then == "function") {
        var I = dx(
          z,
          a
        );
        eu(
          t,
          e,
          I,
          Qe(t)
        );
      } else
        eu(
          t,
          e,
          a,
          Qe(t)
        );
    } catch (at) {
      eu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: at },
        Qe()
      );
    } finally {
      rt.p = o, h !== null && S.types !== null && (h.types = S.types), ct.T = h;
    }
  }
  function px() {
  }
  function zs(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var u = R0(t).queue;
    D0(
      t,
      u,
      e,
      xt,
      n === null ? px : function() {
        return H0(t), n(a);
      }
    );
  }
  function R0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: xt,
      baseState: xt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fn,
        lastRenderedState: xt
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function H0(t) {
    var e = R0(t);
    e.next === null && (e = t.alternate.memoizedState), eu(
      t,
      e.next.queue,
      {},
      Qe()
    );
  }
  function Ms() {
    return he(fi);
  }
  function U0() {
    return te().memoizedState;
  }
  function B0() {
    return te().memoizedState;
  }
  function xx(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Qe();
          t = yl(n);
          var a = vl(e, t, n);
          a !== null && (Be(a, e, n), ki(a, e, n)), e = { cache: ls() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Sx(t, e, n) {
    var a = Qe();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zo(t) ? Y0(e, n) : (n = Jr(t, e, n, a), n !== null && (Be(n, t, a), V0(n, e, a)));
  }
  function j0(t, e, n) {
    var a = Qe();
    eu(t, e, n, a);
  }
  function eu(t, e, n, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zo(t)) Y0(e, u);
    else {
      var o = t.alternate;
      if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
        try {
          var h = e.lastRenderedState, S = o(h, n);
          if (u.hasEagerState = !0, u.eagerState = S, Le(S, h))
            return So(t, e, u, 0), Gt === null && xo(), !1;
        } catch {
        }
      if (n = Jr(t, e, u, a), n !== null)
        return Be(n, t, a), V0(n, e, a), !0;
    }
    return !1;
  }
  function As(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: bf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zo(t)) {
      if (e) throw Error(r(479));
    } else
      e = Jr(
        t,
        n,
        a,
        2
      ), e !== null && Be(e, t, 2);
  }
  function Zo(t) {
    var e = t.alternate;
    return t === Nt || e !== null && e === Nt;
  }
  function Y0(t, e) {
    Ga = Bo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function V0(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Pu(t, n);
    }
  }
  var Go = {
    readContext: he,
    use: Vo,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useLayoutEffect: Ft,
    useInsertionEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useSyncExternalStore: Ft,
    useId: Ft,
    useHostTransitionStatus: Ft,
    useFormState: Ft,
    useActionState: Ft,
    useOptimistic: Ft,
    useMemoCache: Ft,
    useCacheRefresh: Ft,
    useEffectEvent: Ft
  }, L0 = {
    readContext: he,
    use: Vo,
    useCallback: function(t, e) {
      return Ce().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: he,
    useEffect: _0,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, qo(
        4194308,
        4,
        C0.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return qo(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      qo(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Ce();
      e = e === void 0 ? null : e;
      var a = t();
      if (ia) {
        wn(!0);
        try {
          t();
        } finally {
          wn(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = Ce();
      if (n !== void 0) {
        var u = n(e);
        if (ia) {
          wn(!0);
          try {
            n(e);
          } finally {
            wn(!1);
          }
        }
      } else u = e;
      return a.memoizedState = a.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, a.queue = t, t = t.dispatch = Sx.bind(
        null,
        Nt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ce();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = _s(t);
      var e = t.queue, n = j0.bind(null, Nt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Ts,
    useDeferredValue: function(t, e) {
      var n = Ce();
      return Cs(n, t, e);
    },
    useTransition: function() {
      var t = _s(!1);
      return t = D0.bind(
        null,
        Nt,
        t.queue,
        !0,
        !1
      ), Ce().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = Nt, u = Ce();
      if (zt) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), Gt === null)
          throw Error(r(349));
        (Dt & 127) !== 0 || o0(a, e, n);
      }
      u.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return u.queue = o, _0(r0.bind(null, a, o, t), [
        t
      ]), a.flags |= 2048, Ka(
        9,
        { destroy: void 0 },
        c0.bind(
          null,
          a,
          o,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = Ce(), e = Gt.identifierPrefix;
      if (zt) {
        var n = Cn, a = Tn;
        n = (a & ~(1 << 32 - Ne(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = jo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = hx++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ms,
    useFormState: p0,
    useActionState: p0,
    useOptimistic: function(t) {
      var e = Ce();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = As.bind(
        null,
        Nt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Ss,
    useCacheRefresh: function() {
      return Ce().memoizedState = xx.bind(
        null,
        Nt
      );
    },
    useEffectEvent: function(t) {
      var e = Ce(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Yt & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, q0 = {
    readContext: he,
    use: Vo,
    useCallback: M0,
    useContext: he,
    useEffect: Ns,
    useImperativeHandle: z0,
    useInsertionEffect: N0,
    useLayoutEffect: T0,
    useMemo: A0,
    useReducer: Lo,
    useRef: E0,
    useState: function() {
      return Lo(Fn);
    },
    useDebugValue: Ts,
    useDeferredValue: function(t, e) {
      var n = te();
      return O0(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Lo(Fn)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : tu(t),
        e
      ];
    },
    useSyncExternalStore: u0,
    useId: U0,
    useHostTransitionStatus: Ms,
    useFormState: x0,
    useActionState: x0,
    useOptimistic: function(t, e) {
      var n = te();
      return d0(n, Zt, t, e);
    },
    useMemoCache: Ss,
    useCacheRefresh: B0,
    useEffectEvent: w0
  }, bx = {
    readContext: he,
    use: Vo,
    useCallback: M0,
    useContext: he,
    useEffect: Ns,
    useImperativeHandle: z0,
    useInsertionEffect: N0,
    useLayoutEffect: T0,
    useMemo: A0,
    useReducer: Es,
    useRef: E0,
    useState: function() {
      return Es(Fn);
    },
    useDebugValue: Ts,
    useDeferredValue: function(t, e) {
      var n = te();
      return Zt === null ? Cs(n, t, e) : O0(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Es(Fn)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : tu(t),
        e
      ];
    },
    useSyncExternalStore: u0,
    useId: U0,
    useHostTransitionStatus: Ms,
    useFormState: b0,
    useActionState: b0,
    useOptimistic: function(t, e) {
      var n = te();
      return Zt !== null ? d0(n, Zt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Ss,
    useCacheRefresh: B0,
    useEffectEvent: w0
  };
  function Os(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : B({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Ds = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Qe(), u = yl(a);
      u.payload = e, n != null && (u.callback = n), e = vl(t, u, a), e !== null && (Be(e, t, a), ki(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Qe(), u = yl(a);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = vl(t, u, a), e !== null && (Be(e, t, a), ki(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Qe(), a = yl(n);
      a.tag = 2, e != null && (a.callback = e), e = vl(t, a, n), e !== null && (Be(e, t, n), ki(e, t, n));
    }
  };
  function X0(t, e, n, a, u, o, h) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, o, h) : e.prototype && e.prototype.isPureReactComponent ? !qi(n, a) || !qi(u, o) : !0;
  }
  function Z0(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Ds.enqueueReplaceState(e, e.state, null);
  }
  function ua(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = B({}, n));
      for (var u in t)
        n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function G0(t) {
    po(t);
  }
  function Q0(t) {
    console.error(t);
  }
  function K0(t) {
    po(t);
  }
  function Qo(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function $0(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Rs(t, e, n) {
    return n = yl(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Qo(t, e);
    }, n;
  }
  function J0(t) {
    return t = yl(t), t.tag = 3, t;
  }
  function k0(t, e, n, a) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var o = a.value;
      t.payload = function() {
        return u(o);
      }, t.callback = function() {
        $0(e, n, a);
      };
    }
    var h = n.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
      $0(e, n, a), typeof u != "function" && (Nl === null ? Nl = /* @__PURE__ */ new Set([this]) : Nl.add(this));
      var S = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function Ex(t, e, n, a, u) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && Wl(
        e,
        n,
        u,
        !0
      ), n = ge.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return be === null ? dc() : n.alternate === null && Wt === 0 && (Wt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, a === Oo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), pf(t, a, u)), !1;
          case 22:
            return n.flags |= 65536, a === Oo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), pf(t, a, u)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return pf(t, a, u), dc(), !1;
    }
    if (zt)
      return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, a !== Pr && (t = Error(r(422), { cause: a }), Gi(Pe(t, n)))) : (a !== Pr && (e = Error(r(423), {
        cause: a
      }), Gi(
        Pe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Pe(a, n), u = Rs(
        t.stateNode,
        a,
        u
      ), rs(t, u), Wt !== 4 && (Wt = 2)), !1;
    var o = Error(r(520), { cause: a });
    if (o = Pe(o, n), ru === null ? ru = [o] : ru.push(o), Wt !== 4 && (Wt = 2), e === null) return !0;
    a = Pe(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = Rs(n.stateNode, a, t), rs(n, t), !1;
        case 1:
          if (e = n.type, o = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Nl === null || !Nl.has(o))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = J0(u), k0(
              u,
              t,
              n,
              a
            ), rs(n, u), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Hs = Error(r(461)), ae = !1;
  function ce(t, e, n, a) {
    e.child = t === null ? Ph(e, null, n, a) : aa(
      e,
      t.child,
      n,
      a
    );
  }
  function I0(t, e, n, a, u) {
    n = n.render;
    var o = e.ref;
    if ("ref" in a) {
      var h = {};
      for (var S in a)
        S !== "ref" && (h[S] = a[S]);
    } else h = a;
    return Pl(e), a = ys(
      t,
      e,
      n,
      h,
      o,
      u
    ), S = vs(), t !== null && !ae ? (ps(t, e, u), Wn(t, e, u)) : (zt && S && wo(e), e.flags |= 1, ce(t, e, a, u), e.child);
  }
  function F0(t, e, n, a, u) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" && !kr(o) && o.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = o, W0(
        t,
        e,
        o,
        a,
        u
      )) : (t = Eo(
        n.type,
        null,
        a,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (o = t.child, !Xs(t, u)) {
      var h = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : qi, n(h, a) && t.ref === e.ref)
        return Wn(t, e, u);
    }
    return e.flags |= 1, t = Kn(o, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function W0(t, e, n, a, u) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (qi(o, a) && t.ref === e.ref)
        if (ae = !1, e.pendingProps = a = o, Xs(t, u))
          (t.flags & 131072) !== 0 && (ae = !0);
        else
          return e.lanes = t.lanes, Wn(t, e, u);
    }
    return Us(
      t,
      e,
      n,
      a,
      u
    );
  }
  function P0(t, e, n, a) {
    var u = a.children, o = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (o = o !== null ? o.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~o;
        } else a = 0, e.child = null;
        return tg(
          t,
          e,
          o,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Mo(
          e,
          o !== null ? o.cachePool : null
        ), o !== null ? n0(e, o) : fs(), l0(e);
      else
        return a = e.lanes = 536870912, tg(
          t,
          e,
          o !== null ? o.baseLanes | n : n,
          n,
          a
        );
    } else
      o !== null ? (Mo(e, o.cachePool), n0(e, o), Sl(), e.memoizedState = null) : (t !== null && Mo(e, null), fs(), Sl());
    return ce(t, e, u, n), e.child;
  }
  function nu(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function tg(t, e, n, a, u) {
    var o = is();
    return o = o === null ? null : { parent: ne._currentValue, pool: o }, e.memoizedState = {
      baseLanes: n,
      cachePool: o
    }, t !== null && Mo(e, null), fs(), l0(e), t !== null && Wl(t, e, a, !0), e.childLanes = u, null;
  }
  function Ko(t, e) {
    return e = $o(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function eg(t, e, n) {
    return aa(e, t.child, null, n), t = Ko(e, e.pendingProps), t.flags |= 2, qe(e), e.memoizedState = null, t;
  }
  function _x(t, e, n) {
    var a = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (zt) {
        if (a.mode === "hidden")
          return t = Ko(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, nu(null, t);
        if (hs(e), (t = Qt) ? (t = Cm(
          t,
          nn
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: sl !== null ? { id: Tn, overflow: Cn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Yh(t), n.return = e, e.child = n, se = e, Qt = null)) : t = null, t === null) throw dl(e);
        return e.lanes = 536870912, null;
      }
      return Ko(e, a);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var h = o.dehydrated;
      if (hs(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = eg(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (ae || Wl(t, e, n, !1), u = (n & t.childLanes) !== 0, ae || u) {
        if (pl.current === null) {
          if (a = Gt, a !== null && (h = to(a, n), h !== 0 && h !== o.retryLane))
            throw o.retryLane = h, Jl(t, h), Be(a, t, h), Hs;
          dc();
        }
        e = eg(
          t,
          e,
          n
        );
      } else
        t = o.treeContext, Qt = an(h.nextSibling), se = e, zt = !0, fl = null, nn = !1, t !== null && qh(e, t), e = Ko(e, a), e.flags |= 134221824;
      return e;
    }
    return t = Kn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function $a(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Us(t, e, n, a, u) {
    return Pl(e), n = ys(
      t,
      e,
      n,
      a,
      void 0,
      u
    ), a = vs(), t !== null && !ae ? (ps(t, e, u), Wn(t, e, u)) : (zt && a && wo(e), e.flags |= 1, ce(t, e, n, u), e.child);
  }
  function ng(t, e, n, a, u, o) {
    return Pl(e), e.updateQueue = null, n = i0(
      e,
      a,
      n,
      u
    ), a0(t), a = vs(), t !== null && !ae ? (ps(t, e, o), Wn(t, e, o)) : (zt && a && wo(e), e.flags |= 1, ce(t, e, n, o), e.child);
  }
  function lg(t, e, n, a, u) {
    if (Pl(e), e.stateNode === null) {
      var o = ja, h = n.contextType;
      typeof h == "object" && h !== null && (o = he(h)), o = new n(a, o), e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Ds, e.stateNode = o, o._reactInternals = e, o = e.stateNode, o.props = a, o.state = e.memoizedState, o.refs = {}, os(e), h = n.contextType, o.context = typeof h == "object" && h !== null ? he(h) : ja, o.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Os(
        e,
        n,
        h,
        a
      ), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (h = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), h !== o.state && Ds.enqueueReplaceState(o, o.state, null), Fi(e, a, o, u), Ii(), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      o = e.stateNode;
      var S = e.memoizedProps, z = ua(n, S);
      o.props = z;
      var X = o.context, I = n.contextType;
      h = ja, typeof I == "object" && I !== null && (h = he(I));
      var at = n.getDerivedStateFromProps;
      I = typeof at == "function" || typeof o.getSnapshotBeforeUpdate == "function", S = e.pendingProps !== S, I || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (S || X !== h) && Z0(
        e,
        o,
        a,
        h
      ), ml = !1;
      var L = e.memoizedState;
      o.state = L, Fi(e, a, o, u), Ii(), X = e.memoizedState, S || L !== X || ml ? (typeof at == "function" && (Os(
        e,
        n,
        at,
        a
      ), X = e.memoizedState), (z = ml || X0(
        e,
        n,
        z,
        a,
        L,
        X,
        h
      )) ? (I || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = X), o.props = a, o.state = X, o.context = h, a = z) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      o = e.stateNode, cs(t, e), h = e.memoizedProps, I = ua(n, h), o.props = I, at = e.pendingProps, L = o.context, X = n.contextType, z = ja, typeof X == "object" && X !== null && (z = he(X)), S = n.getDerivedStateFromProps, (X = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (h !== at || L !== z) && Z0(
        e,
        o,
        a,
        z
      ), ml = !1, L = e.memoizedState, o.state = L, Fi(e, a, o, u), Ii();
      var $ = e.memoizedState;
      h !== at || L !== $ || ml || t !== null && t.dependencies !== null && Co(t.dependencies) ? (typeof S == "function" && (Os(
        e,
        n,
        S,
        a
      ), $ = e.memoizedState), (I = ml || X0(
        e,
        n,
        I,
        a,
        L,
        $,
        z
      ) || t !== null && t.dependencies !== null && Co(t.dependencies)) ? (X || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(a, $, z), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(
        a,
        $,
        z
      )), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || h === t.memoizedProps && L === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = $), o.props = a, o.state = $, o.context = z, a = I) : (typeof o.componentDidUpdate != "function" || h === t.memoizedProps && L === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return o = a, $a(t, e), a = (e.flags & 128) !== 0, o || a ? (o = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : o.render(), e.flags |= 1, t !== null && a ? (e.child = aa(
      e,
      t.child,
      null,
      u
    ), e.child = aa(
      e,
      null,
      n,
      u
    )) : ce(t, e, n, u), e.memoizedState = o.state, t = e.child) : t = Wn(
      t,
      e,
      u
    ), t;
  }
  function ag(t, e, n, a) {
    return Il(), e.flags |= 256, ce(t, e, n, a), e.child;
  }
  var Bs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function js(t) {
    return { baseLanes: t, cachePool: $h() };
  }
  function Ys(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ge), t;
  }
  function ig(t, e, n) {
    var a = e.pendingProps, u = !1, o = (e.flags & 128) !== 0, h;
    if ((h = o) || (h = t !== null && t.memoizedState === null ? !1 : (me.current & 2) !== 0), h && (u = !0, e.flags &= -129), h = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (zt) {
        if (u ? xl(e) : Sl(), (t = Qt) ? (t = Cm(
          t,
          nn
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: sl !== null ? { id: Tn, overflow: Cn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Yh(t), n.return = e, e.child = n, se = e, Qt = null)) : t = null, t === null) throw dl(e);
        return Yf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return o = a.children, a = a.fallback, u ? (Sl(), u = e.mode, o = $o(
        { mode: "hidden", children: o },
        u
      ), a = kl(
        a,
        u,
        n,
        null
      ), o.return = e, a.return = e, o.sibling = a, e.child = o, a = e.child, a.memoizedState = js(n), a.childLanes = Ys(
        t,
        h,
        n
      ), e.memoizedState = Bs, nu(null, a)) : (xl(e), Vs(e, o));
    }
    var S = t.memoizedState;
    if (S !== null) {
      var z = S.dehydrated;
      if (z !== null)
        return wx(
          t,
          e,
          o,
          h,
          a,
          z,
          S,
          n
        );
    }
    return u ? (Sl(), u = a.fallback, o = e.mode, S = t.child, z = S.sibling, a = Kn(S, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = S.subtreeFlags & 1206910976, z !== null ? u = Kn(z, u) : (u = kl(
      u,
      o,
      n,
      null
    ), u.flags |= 2), u.return = e, a.return = e, a.sibling = u, e.child = a, nu(null, a), a = e.child, u = t.child.memoizedState, u === null ? u = js(n) : (o = u.cachePool, o !== null ? (S = ne._currentValue, o = o.parent !== S ? { parent: S, pool: S } : o) : o = $h(), u = {
      baseLanes: u.baseLanes | n,
      cachePool: o
    }), a.memoizedState = u, a.childLanes = Ys(
      t,
      h,
      n
    ), e.memoizedState = Bs, nu(t.child, a)) : (xl(e), n = t.child, t = n.sibling, n = Kn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (h = e.deletions, h === null ? (e.deletions = [t], e.flags |= 16) : h.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Vs(t, e) {
    return e = $o(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function $o(t, e) {
    return t = De(22, t, null, e), t.lanes = 0, t;
  }
  function Jo(t, e, n) {
    return aa(e, t.child, null, n), t = Vs(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function wx(t, e, n, a, u, o, h, S) {
    if (n)
      return e.flags & 256 ? (xl(e), e.flags &= -257, Jo(
        t,
        e,
        S
      )) : e.memoizedState !== null ? (Sl(), e.child = t.child, e.flags |= 128, null) : (Sl(), o = u.fallback, h = e.mode, u = $o(
        { mode: "visible", children: u.children },
        h
      ), o = kl(
        o,
        h,
        S,
        null
      ), o.flags |= 2, u.return = e, o.return = e, u.sibling = o, e.child = u, aa(e, t.child, null, S), u = e.child, u.memoizedState = js(S), u.childLanes = Ys(
        t,
        a,
        S
      ), e.memoizedState = Bs, nu(null, u));
    if (xl(e), Yf(o)) {
      if (a = o.nextSibling && o.nextSibling.dataset, a) var z = a.dgst;
      return a = z, a !== "" && (u = Error(r(419)), u.stack = "", u.digest = a, Gi({ value: u, source: null, stack: null })), Jo(
        t,
        e,
        S
      );
    }
    if (ae || Wl(t, e, S, !1), a = (S & t.childLanes) !== 0, ae || a) {
      if (pl.current !== null)
        return Jo(
          t,
          e,
          S
        );
      if (a = Gt, a !== null && (u = to(
        a,
        S
      ), u !== 0 && u !== h.retryLane))
        throw h.retryLane = u, Jl(t, u), Be(a, t, u), Hs;
      return jf(o) || dc(), Jo(
        t,
        e,
        S
      );
    }
    return jf(o) ? (e.flags |= 192, e.child = t.child, null) : (t = h.treeContext, Qt = an(o.nextSibling), se = e, zt = !0, fl = null, nn = !1, t !== null && qh(e, t), e = Vs(
      e,
      u.children
    ), e.flags |= 134221824, e);
  }
  function ug(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), To(t.return, e, n);
  }
  function og(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Uo(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function ko(t, e, n, a, u, o) {
    var h = t.memoizedState;
    h === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: u,
      treeForkCount: o
    } : (h.isBackwards = e, h.rendering = null, h.renderingStartTime = 0, h.last = a, h.tail = n, h.tailMode = u, h.treeForkCount = o);
  }
  function Ls(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function qs(t, e, n) {
    var a = e.pendingProps, u = a.revealOrder, o = a.tail;
    a = a.children;
    var h = me.current;
    if (e.flags & 128)
      return Wi(e, h), null;
    var S = (h & 2) !== 0;
    if (S ? (h = h & 1 | 2, e.flags |= 128) : h &= 1, Wi(e, h), u === "backwards" && t !== null ? (Ls(t), ce(t, e, a, n), Ls(t)) : ce(t, e, a, n), a = zt ? Zi : 0, !S && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && ug(t, n, e);
        else if (t.tag === 19)
          ug(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "backwards":
        n = og(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null, Ls(e)), ko(
          e,
          !0,
          u,
          null,
          o,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Uo(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        ko(
          e,
          !0,
          n,
          null,
          o,
          a
        );
        break;
      case "together":
        ko(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = og(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), ko(
          e,
          !1,
          u,
          n,
          o,
          a
        );
    }
    return e.child;
  }
  function cg(t, e, n) {
    var a = e.pendingProps;
    return hl(e, e.type, a.value), ce(t, e, a.children, n), e.child;
  }
  function Wn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), wl |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Wl(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = Kn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Kn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Xs(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Co(t)));
  }
  function Nx(t, e, n) {
    switch (e.tag) {
      case 3:
        ke(e, e.stateNode.containerInfo), hl(e, ne, t.memoizedState.cache), Il();
        break;
      case 27:
      case 5:
        Ee(e);
        break;
      case 4:
        ke(e, e.stateNode.containerInfo);
        break;
      case 10:
        hl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, hs(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return xl(e), e.flags |= 128, null;
          a = Wl(
            t,
            e,
            n,
            !1
          );
          var u = e.child.childLanes;
          return a || (n & u) !== 0 ? ig(t, e, n) : (xl(e), t = Wn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        xl(e);
        break;
      case 19:
        if (e.flags & 128)
          return qs(
            t,
            e,
            n
          );
        if (u = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || (Wl(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), u) {
          if (a)
            return qs(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Wi(e, me.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, P0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        hl(e, ne, t.memoizedState.cache);
    }
    return Wn(t, e, n);
  }
  function rg(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ae = !0;
      else {
        if (!Xs(t, n) && (e.flags & 128) === 0)
          return ae = !1, Nx(
            t,
            e,
            n
          );
        ae = (t.flags & 131072) !== 0;
      }
    else
      ae = !1, zt && (e.flags & 1048576) !== 0 && Lh(e, Zi, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = na(e.elementType), e.type = t, typeof t == "function")
            kr(t) ? (a = ua(t, a), e.tag = 1, e = lg(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = Us(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === O) {
                e.tag = 11, e = I0(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (u === k) {
                e.tag = 14, e = F0(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (u === Y) {
                e.tag = 10, e.type = t, e = cg(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = ft(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Us(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, u = ua(
          a,
          e.pendingProps
        ), lg(
          t,
          e,
          a,
          u,
          n
        );
      case 3:
        t: {
          if (ke(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = e.pendingProps;
          var o = e.memoizedState;
          u = o.element, cs(t, e), Fi(e, a, null, n);
          var h = e.memoizedState;
          if (a = h.cache, hl(e, ne, a), a !== o.cache && ns(
            e,
            [ne],
            n,
            !0
          ), Ii(), a = h.element, o.isDehydrated)
            if (o = {
              element: a,
              isDehydrated: !1,
              cache: h.cache
            }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
              e = ag(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== u) {
              u = Pe(
                Error(r(424)),
                e
              ), Gi(u), e = ag(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Qt = an(t.firstChild), se = e, zt = !0, fl = null, nn = !0, n = Ph(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Il(), a === u) {
              e = Wn(
                t,
                e,
                n
              );
              break t;
            }
            ce(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return $a(t, e), t === null ? (n = Hm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : zt || (e.stateNode = hm(
          e.type,
          e.pendingProps,
          re.current,
          e
        )) : e.memoizedState = Hm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ee(e), t === null && zt && (a = e.stateNode = Am(
          e.type,
          e.pendingProps,
          re.current
        ), se = e, nn = !0, u = Qt, zl(e.type) ? (Vf = u, Qt = an(a.firstChild)) : Qt = u), ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), $a(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && zt && ((u = a = Qt) && (a = xS(
          a,
          e.type,
          e.pendingProps,
          nn
        ), a !== null ? (e.stateNode = a, se = e, Qt = an(a.firstChild), nn = !1, u = !0) : u = !1), u || dl(e)), Ee(e), u = e.type, o = e.pendingProps, h = t !== null ? t.memoizedProps : null, a = o.children, Af(u, o) ? a = null : h !== null && Af(u, h) && (e.flags |= 32), e.memoizedState !== null && (u = ys(
          t,
          e,
          gx,
          null,
          null,
          n
        ), fi._currentValue = u), $a(t, e), ce(t, e, a, n), e.child;
      case 6:
        return t === null && zt && ((t = n = Qt) && (n = SS(
          n,
          e.pendingProps,
          nn
        ), n !== null ? (e.stateNode = n, se = e, Qt = null, t = !0) : t = !1), t || dl(e)), null;
      case 13:
        return ig(t, e, n);
      case 4:
        return ke(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = aa(
          e,
          null,
          a,
          n
        ) : ce(t, e, a, n), e.child;
      case 11:
        return I0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, $a(t, e), ce(t, e, a, n), e.child;
      case 8:
        return ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return cg(t, e, n);
      case 9:
        return u = e.type._context, a = e.pendingProps.children, Pl(e), u = he(u), a = a(u), e.flags |= 1, ce(t, e, a, n), e.child;
      case 14:
        return F0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return W0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return qs(t, e, n);
      case 31:
        return _x(t, e, n);
      case 22:
        return P0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Pl(e), a = he(ne), t === null ? (u = is(), u === null && (u = Gt, o = ls(), u.pooledCache = o, o.refCount++, o !== null && (u.pooledCacheLanes |= n), u = o), e.memoizedState = { parent: a, cache: u }, os(e), hl(e, ne, u)) : ((t.lanes & n) !== 0 && (cs(t, e), Fi(e, null, null, n), Ii()), u = t.memoizedState, o = e.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), hl(e, ne, a)) : (a = o.cache, hl(e, ne, a), a !== u.cache && ns(
          e,
          [ne],
          n,
          !0
        ))), ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : zt && wo(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : $a(t, e), ce(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Pn(t) {
    t.flags |= 4;
  }
  function Zs(t, e, n, a, u) {
    var o;
    if ((o = (t.mode & 32) !== 0) && (o = n === null ? Ym(e, a) : Ym(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), o) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Gg()) t.flags |= 8192;
        else
          throw la = Oo, us;
    } else t.flags &= -16777217;
  }
  function sg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Vm(e))
      if (Gg()) t.flags |= 8192;
      else
        throw la = Oo, us;
  }
  function Io(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Mi() : 536870912, t.lanes |= e, Wa |= e);
  }
  function lu(t, e) {
    if (!zt)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function Kt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, a |= u.subtreeFlags & 1206910976, a |= u.flags & 1206910976, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function Tx(t, e, n) {
    var a = e.pendingProps;
    switch (Wr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Kt(e), null;
      case 1:
        return Kt(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), kn(ne), Ae(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (La(e) ? Pn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ts())), Kt(e), null;
      case 26:
        var u = e.type, o = e.memoizedState;
        return t === null ? (Pn(e), o !== null ? (Kt(e), sg(e, o)) : (Kt(e), Zs(
          e,
          u,
          null,
          a,
          n
        ))) : o ? o !== t.memoizedState ? (Pn(e), Kt(e), sg(e, o)) : (Kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Pn(e), Kt(e), Zs(
          e,
          u,
          t,
          a,
          n
        )), null;
      case 27:
        if (Oe(e), n = re.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Pn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Kt(e), e.subtreeFlags &= -33554433, null;
          }
          t = Pt.current, La(e) ? Xh(e) : (t = Am(u, a, n), e.stateNode = t, Pn(e));
        }
        return Kt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Oe(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Pn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Kt(e), e.subtreeFlags &= -33554433, null;
          }
          if (o = Pt.current, La(e))
            Xh(e);
          else {
            var h = gu(
              re.current
            );
            switch (o) {
              case 1:
                o = h.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                o = h.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    o = h.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    o = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    o = h.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(
                      o.firstChild
                    );
                    break;
                  case "select":
                    o = typeof a.is == "string" ? h.createElement("select", {
                      is: a.is
                    }) : h.createElement("select"), a.multiple ? o.multiple = !0 : a.size && (o.size = a.size);
                    break;
                  default:
                    o = typeof a.is == "string" ? h.createElement(u, { is: a.is }) : h.createElement(u);
                }
            }
            o[oe] = e, o[Se] = a;
            t: for (h = e.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6)
                o.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
              if (h === e) break t;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === e)
                  break t;
                h = h.return;
              }
              h.sibling.return = h.return, h = h.sibling;
            }
            e.stateNode = o;
            t: switch (ve(o, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Pn(e);
          }
        }
        return Kt(e), e.subtreeFlags &= -33554433, Zs(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Pn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = re.current, La(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, u = se, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[oe] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || rm(t.nodeValue, n)), t || dl(e, !0);
          } else
            t = gu(t).createTextNode(
              a
            ), t[oe] = e, e.stateNode = t;
        }
        return Kt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = La(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[oe] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), t = !1;
          } else
            n = ts(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Kt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = La(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[oe] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), u = !1;
          } else
            u = ts(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
        }
        return qe(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), o = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== u && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Io(e, e.updateQueue), Kt(e), null);
      case 4:
        return Ae(), t === null && Nf(e.stateNode.containerInfo), e.flags |= 67108864, Kt(e), null;
      case 10:
        return kn(e.type), Kt(e), null;
      case 19:
        if (gs(e), a = e.memoizedState, a === null) return Kt(e), null;
        if (u = (e.flags & 128) !== 0, o = a.rendering, o === null)
          if (u) lu(a, !1);
          else {
            if (Wt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (o = Uo(t), o !== null) {
                  for (e.flags |= 128, lu(a, !1), t = o.updateQueue, e.updateQueue = t, Io(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    jh(n, t), n = n.sibling;
                  return Wi(
                    e,
                    me.current & 1 | 2
                  ), zt && $n(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && _e() > cc && (e.flags |= 128, u = !0, lu(a, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = Uo(o), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, Io(e, t), lu(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !o.alternate && !zt)
                return Kt(e), null;
            } else
              2 * _e() - a.renderingStartTime > cc && n !== 536870912 && (e.flags |= 128, u = !0, lu(a, !1), e.lanes = 4194304);
          a.isBackwards ? (o.sibling = e.child, e.child = o) : (t = a.last, t !== null ? t.sibling = o : e.child = o, a.last = o);
        }
        if (a.tail !== null) {
          t = a.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = _e(), t.sibling = null, o = me.current, o = u ? o & 1 | 2 : o & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || zt ? Wi(e, o) : (n = o, Ot(ge, e), Ot(me, n), be === null && (be = e)), zt && $n(e, a.treeForkCount), t;
        }
        return Kt(e), null;
      case 22:
      case 23:
        return qe(e), ds(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Kt(e), n = e.updateQueue, n !== null && Io(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && Ht(ea), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), kn(ne), Kt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Kt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function Cx(t, e) {
    switch (Wr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return kn(ne), Ae(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Oe(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (qe(e), e.alternate === null)
            throw Error(r(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (qe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return gs(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Ae(), null;
      case 10:
        return kn(e.type), null;
      case 22:
      case 23:
        return qe(e), ds(), t !== null && Ht(ea), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return kn(ne), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fg(t, e) {
    switch (Wr(e), e.tag) {
      case 3:
        kn(ne), Ae();
        break;
      case 26:
      case 27:
      case 5:
        Oe(e);
        break;
      case 4:
        Ae();
        break;
      case 31:
        e.memoizedState !== null && qe(e);
        break;
      case 13:
        qe(e);
        break;
      case 19:
        gs(e);
        break;
      case 10:
        kn(e.type);
        break;
      case 22:
      case 23:
        qe(e), ds(), t !== null && Ht(ea);
        break;
      case 24:
        kn(ne);
    }
  }
  function au(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var o = n.create, h = n.inst;
            a = o(), h.destroy = a;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (S) {
      qt(e, e.return, S);
    }
  }
  function bl(t, e, n) {
    try {
      var a = e.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var o = u.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            var h = a.inst, S = h.destroy;
            if (S !== void 0) {
              h.destroy = void 0, u = e;
              var z = n, X = S;
              try {
                X();
              } catch (I) {
                qt(
                  u,
                  z,
                  I
                );
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (I) {
      qt(e, e.return, I);
    }
  }
  function dg(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        e0(e, n);
      } catch (a) {
        qt(t, t.return, a);
      }
    }
  }
  function hg(t, e, n) {
    n.props = ua(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      qt(t, e, a);
    }
  }
  function zn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var u = t.stateNode, o = Gn(t.memoizedProps, u);
            (u.ref === null || u.ref.name !== o) && (u.ref = Sm(o)), a = u.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var h = new Ke(t);
              m(
                t.child,
                !1,
                vS,
                h,
                void 0,
                void 0
              ), t.stateNode = h;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (S) {
      qt(t, e, S);
    }
  }
  function ye(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          qt(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          qt(t, e, u);
        }
      else n.current = null;
  }
  function Fo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Tm(
          t.stateNode,
          e[n]
        );
  }
  function gg(t) {
    for (var e = t.return; e !== null && (Qs(e) && Tm(t.stateNode, e.stateNode), !Gs(e)); )
      e = e.return;
  }
  function iu(t) {
    for (var e = t.return; e !== null && (Qs(e) && pS(t.stateNode, e.stateNode), !Gs(e)); )
      e = e.return;
  }
  function Gs(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Qs(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Ks(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (u) {
      qt(t, t.return, u);
    }
  }
  function $s(t, e, n) {
    try {
      var a = t.stateNode;
      Px(a, t.type, n, e), a[Se] = e;
    } catch (u) {
      qt(t, t.return, u);
    }
  }
  function mg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && zl(t.type) || t.tag === 4;
  }
  function Js(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || mg(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && zl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ks(t, e, n, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(u, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(u), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Nn)), Fo(t, a), jt = !0;
    else if (u !== 4 && (u === 27 && (Fo(t, a), a = null, zl(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (ks(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        ks(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Wo(t, e, n, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? n.insertBefore(u, e) : n.appendChild(u), Fo(t, a), jt = !0;
    else if (u !== 4 && (u === 27 && (Fo(t, a), a = null, zl(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (Wo(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Wo(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function yg(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ve(e, a, n), e[oe] = t, e[Se] = n;
    } catch (o) {
      qt(t, t.return, o);
    }
  }
  var Po = !1, Xe = null;
  function vg(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Po = !0);
  }
  var Mn = null;
  function pg() {
    var t = Mn;
    return Mn = null, t;
  }
  var Re = 0;
  function Ja(t, e, n, a, u) {
    return Re = 0, xg(
      t.child,
      e,
      n,
      a,
      u
    );
  }
  function xg(t, e, n, a, u) {
    for (var o = !1; t !== null; ) {
      if (t.tag === 5) {
        var h = t.stateNode;
        if (a !== null) {
          var S = Rf(h);
          a.push(S), S.view && (o = !0);
        } else
          o || Rf(h).view && (o = !0);
        Po = !0, pm(
          h,
          Re === 0 ? e : e + "_" + Re,
          n
        ), Re++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && u || xg(
        t.child,
        e,
        n,
        a,
        u
      ) && (o = !0));
      t = t.sibling;
    }
    return o;
  }
  function An(t, e) {
    for (; t !== null; )
      t.tag === 5 ? xm(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || An(
        t.child,
        e
      )), t = t.sibling;
  }
  function tc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (tc(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var n = e.name;
          e = Qn(e.default, e.share), e !== "none" && (Ja(
            t,
            n,
            e,
            null,
            !1
          ) || An(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Is(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, u = Gn(a, n), o = Qn(
        a.default,
        n.paired ? a.share : a.enter
      );
      o !== "none" ? Ja(t, u, o, null, !1) ? (tc(t), n.paired || e || ni(t, a.onEnter)) : An(t.child, !1) : tc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Is(t, e), t = t.sibling;
    else tc(t);
  }
  function Fs(t) {
    if (Xe !== null && Xe.size !== 0) {
      var e = Xe;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var u = e.get(a);
                if (u !== void 0) {
                  var o = Qn(
                    n.default,
                    n.share
                  );
                  if (o !== "none" && (Ja(
                    t,
                    a,
                    o,
                    null,
                    !1
                  ) ? (o = t.stateNode, u.paired = o, o.paired = u, ni(t, n.onShare)) : An(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            Fs(t);
          }
          t = t.sibling;
        }
    }
  }
  function Ws(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Gn(e, t.stateNode), a = Xe !== null ? Xe.get(n) : void 0, u = Qn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      u !== "none" && (Ja(t, n, u, null, !1) ? a !== void 0 ? (u = t.stateNode, a.paired = u, u.paired = a, Xe.delete(n), ni(t, e.onShare)) : ni(t, e.onExit) : An(t.child, !1)), Xe !== null && Fs(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ws(t), t = t.sibling;
    else
      Xe !== null && Fs(t);
  }
  function Sg(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Gn(e, t.stateNode);
        e = Qn(e.default, e.update), t.flags &= -5, e !== "none" && Ja(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Sg(t);
      t = t.sibling;
    }
  }
  function Ps(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, An(t.child, !1));
          }
          Ps(t);
        }
        t = t.sibling;
      }
  }
  function ec(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, An(t.child, !1), Ps(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        ec(t), t = t.sibling;
    else Ps(t);
  }
  function bg(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? An(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && bg(t), t = t.sibling;
  }
  function tf(t, e, n, a, u, o, h) {
    for (var S = !1; e !== null; ) {
      if (e.tag === 5) {
        var z = e.stateNode;
        if (o !== null && Re < o.length) {
          var X = o[Re], I = Rf(z);
          (X.view || I.view) && (S = !0);
          var at;
          if (at = (t.flags & 4) === 0)
            if (I.clip) at = !0;
            else {
              at = X.rect;
              var L = I.rect;
              at = at.y !== L.y || at.x !== L.x || at.height !== L.height || at.width !== L.width;
            }
          at && (t.flags |= 4), I.abs ? I = !X.abs : (X = X.rect, I = I.rect, I = X.height !== I.height || X.width !== I.width), I && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && pm(
          z,
          Re === 0 ? n : n + "_" + Re,
          u
        ), S && (t.flags & 4) !== 0 || (Mn === null && (Mn = []), Mn.push(
          z,
          Re === 0 ? a : a + "_" + Re,
          e.memoizedProps
        )), Re++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && h ? t.flags |= e.flags & 32 : tf(
        t,
        e.child,
        n,
        a,
        u,
        o,
        h
      ) && (S = !0));
      e = e.sibling;
    }
    return S;
  }
  function Eg(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, u = Gn(n, a), o = Qn(n.default, n.update), h;
        h = t.memoizedState, t.memoizedState = null, a = t;
        var S = t.child;
        Re = 0, u = tf(
          a,
          S,
          u,
          u,
          o,
          h,
          !1
        ), (t.flags & 4) !== 0 && u && ni(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Eg(t);
      t = t.sibling;
    }
  }
  var fe = !1, Vt = !1, On = !1, ef = !1, _g = typeof WeakSet == "function" ? WeakSet : Set, de = null, Dn = !1, uu = !1, nc = !1, nf = !1;
  function zx(t, e, n) {
    if (t = t.containerInfo, zf = di, t = Ch(t), Xr(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var o = u.anchorOffset, h = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, h.nodeType;
            } catch {
              a = null;
              break t;
            }
            var S = 0, z = -1, X = -1, I = 0, at = 0, L = t, $ = null;
            e: for (; ; ) {
              for (var ht; L !== a || o !== 0 && L.nodeType !== 3 || (z = S + o), L !== h || u !== 0 && L.nodeType !== 3 || (X = S + u), L.nodeType === 3 && (S += L.nodeValue.length), (ht = L.firstChild) !== null; )
                $ = L, L = ht;
              for (; ; ) {
                if (L === t) break e;
                if ($ === a && ++I === o && (z = S), $ === h && ++at === u && (X = S), (ht = L.nextSibling) !== null) break;
                L = $, $ = L.parentNode;
              }
              L = ht;
            }
            a = z === -1 || X === -1 ? null : { start: z, end: X };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Mf = { focusedElem: t, selectionRange: a }, di = !1, n = (n & 335544064) === n, de = e, e = n ? 9270 : 1024; de !== null; ) {
      if (t = de, n && (a = t.deletions, a !== null))
        for (o = 0; o < a.length; o++)
          n && Ws(a[o]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && vg(t), lc(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Ws(a), lc(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && vg(t), lc(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, de = a) : (n && Sg(t), lc(n));
      }
    }
    Xe = null;
  }
  function lc(t) {
    for (; de !== null; ) {
      var e = de, n = t, a = e.alternate, u = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && a !== null) {
            n = void 0, u = a.memoizedProps, a = a.memoizedState;
            var o = e.stateNode;
            try {
              var h = ua(
                e.type,
                u
              );
              n = o.getSnapshotBeforeUpdate(
                h,
                a
              ), o.__reactInternalSnapshotBeforeUpdate = n;
            } catch (S) {
              qt(e, e.return, S);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              Bf(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Bf(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && a !== null && (n = Gn(
            a.memoizedProps,
            a.stateNode
          ), u = e.memoizedProps, u = Qn(u.default, u.update), u !== "none" && Ja(
            a,
            n,
            u,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(r(163));
      }
      if (a = e.sibling, a !== null) {
        a.return = e.return, de = a;
        break;
      }
      de = e.return;
    }
  }
  function wg(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Rn(t, n), a & 4 && au(5, n);
        break;
      case 1:
        if (Rn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (h) {
              qt(n, n.return, h);
            }
          else {
            var u = ua(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (h) {
              qt(
                n,
                n.return,
                h
              );
            }
          }
        a & 64 && dg(n), a & 512 && zn(n, n.return);
        break;
      case 3:
        if (Rn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            e0(t, e);
          } catch (h) {
            qt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && a & 4 && yg(n);
      case 26:
      case 5:
        Rn(t, n), e === null && a & 4 && Ks(n), a & 512 && zn(n, n.return);
        break;
      case 12:
        Rn(t, n);
        break;
      case 31:
        Rn(t, n), a & 4 && zg(t, n);
        break;
      case 13:
        Rn(t, n), a & 4 && Mg(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Lx.bind(
          null,
          n
        ), bS(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || fe, !a) {
          var o = e !== null && e.memoizedState !== null || Vt;
          e = fe, u = Vt, fe = a, (Vt = o) && !u ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), dn(
            t,
            n,
            a
          )) : Rn(t, n), fe = e, Vt = u;
        }
        break;
      case 30:
        Rn(t, n), a & 512 && zn(n, n.return);
        break;
      case 7:
        a & 512 && zn(n, n.return);
      default:
        Rn(t, n);
    }
  }
  function lf(t, e) {
    for (t = t.child; t !== null; )
      Ng(t, e), t = t.sibling;
  }
  function Ng(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var u = t.stateNode, o = t.memoizedProps.style, h = o != null && o.hasOwnProperty("display") ? o.display : null;
            u.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
          }
        } catch (z) {
          qt(t, t.return, z);
        }
        af(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, jt = !0;
        } catch (z) {
          qt(t, t.return, z);
        }
        break;
      case 18:
        try {
          var S = t.stateNode;
          e ? vm(S, !0) : vm(t.stateNode, !1);
        } catch (z) {
          qt(t, t.return, z);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && lf(t, e);
        break;
      default:
        lf(t, e);
    }
  }
  function af(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              Ng(n, a);
              break t;
            case 22:
              n.memoizedState === null && af(n, a);
              break t;
            default:
              af(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function Tg(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Tg(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && za(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Jt = null, He = !1;
  function sn(t, e, n) {
    for (n = n.child; n !== null; )
      Cg(t, e, n), n = n.sibling;
  }
  function Cg(t, e, n) {
    if (we && typeof we.onCommitFiberUnmount == "function")
      try {
        we.onCommitFiberUnmount(ql, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Vt || ye(n, e), sn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Vt && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Vt || ye(n, e), iu(n);
        var a = Jt, u = He;
        zl(n.type) && (Jt = n.stateNode, He = !1), sn(
          t,
          e,
          n
        ), Om(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Jt = a, He = u;
        break;
      case 5:
        Vt || ye(n, e), iu(n);
      case 6:
        if (n.tag === 6 && iu(n), a = Jt, u = He, Jt = null, sn(
          t,
          e,
          n
        ), Jt = a, He = u, Jt !== null)
          if (He)
            try {
              (Jt.nodeType === 9 ? Jt.body : Jt.nodeName === "HTML" ? Jt.ownerDocument.body : Jt).removeChild(n.stateNode), jt = !0;
            } catch (o) {
              qt(
                n,
                e,
                o
              );
            }
          else
            try {
              Jt.removeChild(n.stateNode), jt = !0;
            } catch (o) {
              qt(
                n,
                e,
                o
              );
            }
        break;
      case 18:
        Jt !== null && (He ? (t = Jt, ym(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), hi(t)) : ym(Jt, n.stateNode));
        break;
      case 4:
        a = Jt, u = He, Jt = n.stateNode.containerInfo, He = !0, sn(
          t,
          e,
          n
        ), Jt = a, He = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bl(2, n, e), Vt || bl(4, n, e), sn(
          t,
          e,
          n
        );
        break;
      case 1:
        Vt || (ye(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && hg(
          n,
          e,
          a
        )), sn(
          t,
          e,
          n
        );
        break;
      case 21:
        sn(
          t,
          e,
          n
        );
        break;
      case 22:
        Vt = (a = Vt) || n.memoizedState !== null, sn(
          t,
          e,
          n
        ), Vt = a;
        break;
      case 30:
        ye(n, e), sn(
          t,
          e,
          n
        );
        break;
      case 7:
        Vt || ye(n, e), sn(
          t,
          e,
          n
        );
        break;
      default:
        sn(
          t,
          e,
          n
        );
    }
  }
  function zg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        hi(t);
      } catch (n) {
        qt(e, e.return, n);
      }
    }
  }
  function Mg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        hi(t);
      } catch (n) {
        qt(e, e.return, n);
      }
  }
  function Mx(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new _g()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new _g()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ac(t, e) {
    var n = Mx(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var u = qx.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function ze(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var o = a[u], h = t, S = e, z = S;
        t: for (; z !== null; ) {
          switch (z.tag) {
            case 27:
              if (zl(z.type)) {
                Jt = z.stateNode, He = !1;
                break t;
              }
              break;
            case 5:
              Jt = z.stateNode, He = !1;
              break t;
            case 3:
            case 4:
              Jt = z.stateNode.containerInfo, He = !0;
              break t;
          }
          z = z.return;
        }
        if (Jt === null) throw Error(r(160));
        Cg(h, S, o), Jt = null, He = !1, h = o.alternate, h !== null && (h.return = null), o.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Ag(e, t, n), e = e.sibling;
  }
  var fn = null;
  function Ag(t, e, n) {
    var a = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var o = 0; o < a.length; o++) {
            var h = a[o];
            h.ref.impl = h.nextImpl;
          }
        ze(e, t, n), Me(t), u & 4 && (bl(3, t, t.return), au(3, t), bl(5, t, t.return));
        break;
      case 1:
        ze(e, t, n), Me(t), u & 512 && (Vt || a === null || ye(a, a.return)), u & 64 && fe && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (o = fn, ze(e, t, n), Me(t), u & 512 && (Vt || a === null || ye(a, a.return)), u & 4)
          if (u = a !== null ? a.memoizedState : null, n = t.memoizedState, a === null)
            if (n === null)
              if (t.stateNode === null)
                if (fe)
                  t.stateNode = hm(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, u = o.ownerDocument || o;
                    e: switch (e) {
                      case "title":
                        a = u.getElementsByTagName("title")[0], (!a || a[Gl] || a[oe] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = u.createElement(e), u.head.insertBefore(
                          a,
                          u.querySelector("head > title")
                        )), ve(a, e, n), a[oe] = t, ee(a), e = a;
                        break t;
                      case "link":
                        if (o = jm(
                          "link",
                          "href",
                          u
                        ).get(e + (n.href || ""))) {
                          for (h = 0; h < o.length; h++)
                            if (a = o[h], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              o.splice(h, 1);
                              break e;
                            }
                        }
                        a = u.createElement(e), ve(a, e, n), u.head.appendChild(a);
                        break;
                      case "meta":
                        if (o = jm(
                          "meta",
                          "content",
                          u
                        ).get(e + (n.content || ""))) {
                          for (h = 0; h < o.length; h++)
                            if (a = o[h], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              o.splice(h, 1);
                              break e;
                            }
                        }
                        a = u.createElement(e), ve(a, e, n), u.head.appendChild(a);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    a[oe] = t, ee(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                fe || Zf(o, t.type, t.stateNode);
            else
              t.stateNode = Bm(
                o,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? (e = a.stateNode, e === null || Vt || e.parentNode.removeChild(e)) : u.count--, n === null ? fe || Zf(o, t.type, t.stateNode) : Bm(o, n, t.memoizedProps)) : n === null && t.stateNode !== null && $s(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        ze(e, t, n), Me(t), u & 512 && (Vt || a === null || ye(a, a.return)), a !== null && u & 4 && $s(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (o = On, On = !1, ze(e, t, n), On = o, Me(t), u & 512 && (Vt || a === null || ye(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Aa(e, ""), jt = !0;
          } catch (I) {
            qt(t, t.return, I);
          }
        }
        u & 4 && t.stateNode != null && (e = t.memoizedProps, $s(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (ef = !0);
        break;
      case 6:
        if (ze(e, t, n), Me(t), u & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, jt = !0;
          } catch (I) {
            qt(t, t.return, I);
          }
        }
        break;
      case 3:
        if (jt = !1, xc = null, o = fn, fn = mu(e.containerInfo), ze(e, t, n), fn = o, Me(t), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            hi(e.containerInfo);
          } catch (I) {
            qt(t, t.return, I);
          }
        ef && (ef = !1, Og(t)), jt = !1;
        break;
      case 4:
        u = On, On = fe, a = Fd(), o = fn, fn = mu(
          t.stateNode.containerInfo
        ), ze(e, t, n), Me(t), fn = o, jt && uu && (nc = !0), jt = a, On = u;
        break;
      case 12:
        ze(e, t, n), Me(t);
        break;
      case 31:
        ze(e, t, n), Me(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ac(t, e)));
        break;
      case 13:
        ze(e, t, n), Me(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (oc = _e()), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ac(t, e)));
        break;
      case 22:
        o = t.memoizedState !== null, h = a !== null && a.memoizedState !== null;
        var S = fe, z = Vt, X = On;
        fe = S || o, On = X || o, Vt = z || h, ze(e, t, n), Vt = z, On = X, fe = S, Me(t), u & 8192 && (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, !o || a === null || h || fe || Vt || (e = h || Vt, n = fe, a = Vt, fe = o || fe, Vt = e, El(t, 2), fe = n, Vt = a), !o && On || lf(t, o)), u & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, ac(t, n))));
        break;
      case 19:
        ze(e, t, n), Me(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ac(t, e)));
        break;
      case 30:
        u & 512 && (Vt || a === null || ye(a, a.return)), u = Fd(), o = uu, h = (n & 335544064) === n, S = t.memoizedProps, uu = h && Qn(
          S.default,
          S.update
        ) !== "none", ze(e, t, n), Me(t), h && a !== null && jt && (t.flags |= 4), uu = o, jt = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Vt || a === null || ye(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        ze(e, t, n), Me(t);
    }
  }
  function Me(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (mg(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var u = t.return; u !== null; ) {
          if (Qs(u)) {
            var o = u.stateNode;
            a === null ? a = [o] : a.push(o);
          }
          if (Gs(u)) break;
          u = u.return;
        }
        var h = a;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var S = n.stateNode, z = Js(t);
            Wo(
              t,
              z,
              S,
              h
            );
            break;
          case 5:
            var X = n.stateNode;
            n.flags & 32 && (Aa(X, ""), n.flags &= -33);
            var I = Js(t);
            Wo(
              t,
              I,
              X,
              h
            );
            break;
          case 3:
          case 4:
            var at = n.stateNode.containerInfo, L = Js(t);
            ks(
              t,
              L,
              at,
              h
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch ($) {
        qt(t, t.return, $);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Og(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Og(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, di = !0, e.reset(), di = !1), t = t.sibling;
      }
  }
  function ka(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Dg(e, t), e = e.sibling;
    else Eg(e);
  }
  function Dg(t, e) {
    var n = t.alternate;
    if (n === null) Is(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (nf = Dn = !1, pg(), ka(e, t), !Dn && !nc) {
            if (t = Mn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var u = t[a + 1];
                xm(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), nf = !0;
          }
          Mn = null;
          break;
        case 5:
          ka(e, t);
          break;
        case 4:
          a = Dn, Dn = !1, ka(e, t), Dn && (nc = !0), Dn = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? Is(t, !1) : ka(e, t));
          break;
        case 30:
          a = Dn, u = pg(), Dn = !1, ka(e, t), Dn && (t.flags |= 4);
          var o = t.memoizedProps, h = t.stateNode;
          e = Gn(o, h), h = Gn(n.memoizedProps, h);
          var S = Qn(o.default, o.update);
          S === "none" ? e = !1 : (o = n.memoizedState, n.memoizedState = null, n = t.child, Re = 0, e = tf(
            t,
            n,
            e,
            h,
            S,
            o,
            !0
          ), Re !== (o === null ? 0 : o.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (ni(
            t,
            t.memoizedProps.onUpdate
          ), Mn = u) : u !== null && (u.push.apply(u, Mn), Mn = u), Dn = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          ka(e, t);
      }
  }
  function Rn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        wg(t, e.alternate, e), e = e.sibling;
  }
  function El(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bl(4, n, n.return), El(
            n,
            a
          );
          break;
        case 1:
          ye(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && hg(
            n,
            n.return,
            u
          ), El(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Om(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          ye(n, n.return), n.tag !== 5 && n.tag !== 27 || iu(n), El(
            n,
            a
          );
          break;
        case 6:
          iu(n);
          break;
        case 26:
          ye(n, n.return), u = n.stateNode, n.memoizedState !== null || u === null || Vt || u.parentNode.removeChild(u), El(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && El(
            n,
            a
          );
          break;
        case 30:
          ye(n, n.return), El(
            n,
            a
          );
          break;
        case 7:
          ye(n, n.return);
        default:
          El(
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function dn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var a = e.alternate, u = t, o = e, h = o.flags, S = (n & 1) !== 0;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          dn(
            u,
            o,
            n
          ), au(4, o);
          break;
        case 1:
          if (dn(
            u,
            o,
            n
          ), a = o, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (I) {
              qt(a, a.return, I);
            }
          if (a = o, u = a.updateQueue, u !== null) {
            var z = a.stateNode;
            try {
              var X = u.shared.hiddenCallbacks;
              if (X !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < X.length; u++)
                  t0(X[u], z);
            } catch (I) {
              qt(a, a.return, I);
            }
          }
          S && h & 64 && dg(o), zn(o, o.return);
          break;
        case 27:
          (n & 2) !== 0 && yg(o);
        case 5:
          o.tag !== 5 && o.tag !== 27 || gg(o), dn(
            u,
            o,
            n
          ), S && a === null && h & 4 && Ks(o), zn(o, o.return);
          break;
        case 6:
          gg(o);
          break;
        case 26:
          z = o.stateNode, o.memoizedState !== null || z === null || fe || Zf(
            mu(z.ownerDocument),
            o.type,
            z
          ), dn(
            u,
            o,
            n
          ), S && a === null && h & 4 && Ks(o), zn(o, o.return);
          break;
        case 12:
          dn(
            u,
            o,
            n
          );
          break;
        case 31:
          dn(
            u,
            o,
            n
          ), S && h & 4 && zg(u, o);
          break;
        case 13:
          dn(
            u,
            o,
            n
          ), S && h & 4 && Mg(u, o);
          break;
        case 22:
          o.memoizedState === null && dn(
            u,
            o,
            n
          ), zn(o, o.return);
          break;
        case 30:
          dn(
            u,
            o,
            n
          ), zn(o, o.return);
          break;
        case 7:
          zn(o, o.return);
        default:
          dn(
            u,
            o,
            n
          );
      }
      e = e.sibling;
    }
  }
  function uf(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Qi(n));
  }
  function of(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Qi(t));
  }
  function ln(t, e, n, a) {
    var u = (n & 335544064) === n;
    if (e.subtreeFlags & (u ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Rg(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else u && bg(e);
  }
  function Rg(t, e, n, a) {
    var u = (n & 335544064) === n;
    u && e.alternate === null && e.return !== null && e.return.alternate !== null && ec(e);
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ln(
          t,
          e,
          n,
          a
        ), o & 2048 && au(9, e);
        break;
      case 1:
        ln(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        ln(
          t,
          e,
          n,
          a
        ), u && nf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), o & 2048 && (o = null, e.alternate !== null && (o = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== o && (e.refCount++, o != null && Qi(o)));
        break;
      case 12:
        if (o & 2048) {
          ln(
            t,
            e,
            n,
            a
          ), o = e.stateNode;
          try {
            var h = e.memoizedProps, S = h.id, z = h.onPostCommit;
            typeof z == "function" && z(
              S,
              e.alternate === null ? "mount" : "update",
              o.passiveEffectDuration,
              -0
            );
          } catch (X) {
            qt(e, e.return, X);
          }
        } else
          ln(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        ln(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        ln(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        h = e.stateNode, S = e.alternate, e.memoizedState !== null ? (u && S !== null && S.memoizedState === null && ec(S), h._visibility & 2 ? ln(
          t,
          e,
          n,
          a
        ) : ou(
          t,
          e
        )) : (u && S !== null && S.memoizedState !== null && ec(e), h._visibility & 2 ? ln(
          t,
          e,
          n,
          a
        ) : (h._visibility |= 2, Ia(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), o & 2048 && uf(S, e);
        break;
      case 24:
        ln(
          t,
          e,
          n,
          a
        ), o & 2048 && of(e.alternate, e);
        break;
      case 30:
        u && (o = e.alternate, o !== null && (An(o.child, !0), An(e.child, !0))), ln(
          t,
          e,
          n,
          a
        );
        break;
      default:
        ln(
          t,
          e,
          n,
          a
        );
    }
  }
  function Ia(t, e, n, a, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var o = t, h = e, S = n, z = a, X = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Ia(
            o,
            h,
            S,
            z,
            u
          ), au(8, h);
          break;
        case 23:
          break;
        case 22:
          var I = h.stateNode;
          h.memoizedState !== null ? I._visibility & 2 ? Ia(
            o,
            h,
            S,
            z,
            u
          ) : ou(
            o,
            h
          ) : (I._visibility |= 2, Ia(
            o,
            h,
            S,
            z,
            u
          )), u && X & 2048 && uf(
            h.alternate,
            h
          );
          break;
        case 24:
          Ia(
            o,
            h,
            S,
            z,
            u
          ), u && X & 2048 && of(h.alternate, h);
          break;
        default:
          Ia(
            o,
            h,
            S,
            z,
            u
          );
      }
      e = e.sibling;
    }
  }
  function ou(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, u = a.flags;
        switch (a.tag) {
          case 22:
            ou(n, a), u & 2048 && uf(
              a.alternate,
              a
            );
            break;
          case 24:
            ou(n, a), u & 2048 && of(a.alternate, a);
            break;
          default:
            ou(n, a);
        }
        e = e.sibling;
      }
  }
  var oa = 8192;
  function ca(t, e, n) {
    if (t.subtreeFlags & oa)
      for (t = t.child; t !== null; )
        Hg(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Hg(t, e, n) {
    switch (t.tag) {
      case 26:
        ca(
          t,
          e,
          n
        ), t.flags & oa && (t.memoizedState !== null ? US(
          n,
          fn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && qm(n, t)));
        break;
      case 5:
        ca(
          t,
          e,
          n
        ), t.flags & oa && (t = t.stateNode, (e & 335544128) === e && qm(n, t));
        break;
      case 3:
      case 4:
        var a = fn;
        fn = mu(t.stateNode.containerInfo), ca(
          t,
          e,
          n
        ), fn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = oa, oa = 16777216, ca(
          t,
          e,
          n
        ), oa = a) : ca(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & oa) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var u = t.stateNode;
          u.paired = null, Xe === null && (Xe = /* @__PURE__ */ new Map()), Xe.set(a, u);
        }
        ca(
          t,
          e,
          n
        );
        break;
      default:
        ca(
          t,
          e,
          n
        );
    }
  }
  function Ug(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function cu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          de = a, jg(
            a,
            t
          );
        }
      Ug(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Bg(t), t = t.sibling;
  }
  function Bg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        cu(t), t.flags & 2048 && bl(9, t, t.return);
        break;
      case 3:
        cu(t);
        break;
      case 12:
        cu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ic(t)) : cu(t);
        break;
      default:
        cu(t);
    }
  }
  function ic(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          de = a, jg(
            a,
            t
          );
        }
      Ug(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          bl(8, e, e.return), ic(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ic(e));
          break;
        default:
          ic(e);
      }
      t = t.sibling;
    }
  }
  function jg(t, e) {
    for (; de !== null; ) {
      var n = de;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          bl(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Qi(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, de = a;
      else
        t: for (n = t; de !== null; ) {
          a = de;
          var u = a.sibling, o = a.return;
          if (Tg(a), a === n) {
            de = null;
            break t;
          }
          if (u !== null) {
            u.return = o, de = u;
            break t;
          }
          de = o;
        }
    }
  }
  var Ax = {
    getCacheForType: function(t) {
      var e = he(ne), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return he(ne).controller.signal;
    }
  }, Ox = typeof WeakMap == "function" ? WeakMap : Map, Yt = 0, Gt = null, Mt = null, Dt = 0, Lt = 0, Ze = null, _l = !1, Fa = !1, cf = !1, tl = 0, Wt = 0, wl = 0, ra = 0, uc = 0, Ge = 0, Wa = 0, ru = null, Ue = null, rf = !1, oc = 0, Yg = 0, cc = 1 / 0, rc = null, Nl = null, kt = 0, hn = null, sa = null, Hn = 0, sf = 0, ff = null, Vg = null, Pa = null, ti = null, ei = null, su = 0, sc = null;
  function Qe() {
    return (Yt & 2) !== 0 && Dt !== 0 ? Dt & -Dt : ct.T !== null ? bf() : eo();
  }
  function Lg() {
    if (Ge === 0)
      if ((Dt & 536870912) === 0 || zt) {
        var t = _a;
        _a <<= 1, (_a & 3932160) === 0 && (_a = 262144), Ge = t;
      } else Ge = 536870912;
    return t = ge.current, t !== null && (t.flags |= 32), Ge;
  }
  function ni(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = Sm(
        Gn(t.memoizedProps, n)
      )), ti === null && (ti = []), ti.push(e.bind(null, a));
    }
  }
  function Be(t, e, n) {
    (t === Gt && (Lt === 2 || Lt === 9) || t.cancelPendingCommit !== null) && (li(t, 0), Tl(
      t,
      Dt,
      Ge,
      !1
    )), Zl(t, n), ((Yt & 2) === 0 || t !== Gt) && (t === Gt && ((Yt & 2) === 0 && (ra |= n), Wt === 4 && Tl(
      t,
      Dt,
      Ge,
      !1
    )), Un(t));
  }
  function qg(t, e, n) {
    if ((Yt & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Xl(t, e), u = a ? Hx(t, e) : hf(t, e, !0), o = a;
    do {
      if (u === 0) {
        Fa && !a && Tl(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, o && !Dx(n)) {
          u = hf(t, e, !1), o = !1;
          continue;
        }
        if (u === 2) {
          if (o = e, t.errorRecoveryDisabledLanes & o)
            var h = 0;
          else
            h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
          if (h !== 0) {
            e = h;
            t: {
              var S = t;
              u = ru;
              var z = S.current.memoizedState.isDehydrated;
              if (z && (li(S, h).flags |= 256), h = hf(
                S,
                h,
                !1
              ), h !== 2 && h !== 6) {
                if (cf && !z) {
                  S.errorRecoveryDisabledLanes |= o, ra |= o, u = 4;
                  break t;
                }
                o = Ue, Ue = u, o !== null && (Ue === null ? Ue = o : Ue.push.apply(
                  Ue,
                  o
                ));
              }
              u = h;
            }
            if (o = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          li(t, 0), Tl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, o = u, o) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              Tl(
                a,
                e,
                Ge,
                !_l
              );
              break t;
            case 2:
              Ue = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (u = oc + 300 - _e(), 10 < u)) {
            if (Tl(
              a,
              e,
              Ge,
              !_l
            ), Na(a, 0, !0) !== 0) break t;
            Hn = e, a.timeoutHandle = Df(
              Xg.bind(
                null,
                a,
                n,
                Ue,
                rc,
                rf,
                e,
                Ge,
                ra,
                Wa,
                _l,
                o,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          Xg(
            a,
            n,
            Ue,
            rc,
            rf,
            e,
            Ge,
            ra,
            Wa,
            _l,
            o,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Un(t);
  }
  function Xg(t, e, n, a, u, o, h, S, z, X, I, at, L, $) {
    t.timeoutHandle = -1;
    var ht = e.subtreeFlags, yt = (o & 335544064) === o;
    if (at = null, (yt || ht & 8192 || (ht & 16785408) === 16785408) && (at = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Nn
    }, Xe = null, Hg(
      e,
      o,
      at
    ), yt && (ht = at, yt = t.containerInfo, yt = (yt.nodeType === 9 ? yt : yt.ownerDocument).__reactViewTransition, yt != null && (ht.count++, ht.waitingForViewTransition = !0, ht = pu.bind(ht), yt.finished.then(ht, ht))), ht = (o & 62914560) === o ? oc - _e() : (o & 4194048) === o ? Yg - _e() : 0, ht = BS(
      at,
      ht
    ), ht !== null)) {
      Hn = o, t.cancelPendingCommit = ht(
        Ig.bind(
          null,
          t,
          e,
          o,
          n,
          a,
          u,
          h,
          S,
          z,
          X,
          I,
          at,
          null,
          L,
          $
        )
      ), Tl(t, o, h, !X);
      return;
    }
    Ig(
      t,
      e,
      o,
      n,
      a,
      u,
      h,
      S,
      z,
      X,
      I,
      at
    );
  }
  function Dx(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var u = n[a], o = u.getSnapshot;
          u = u.value;
          try {
            if (!Le(o(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Tl(t, e, n, a) {
    e = zi(t, e), e &= ~uc, e &= ~ra, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var o = 31 - Ne(u), h = 1 << o;
      a[o] = -1, u &= ~h;
    }
    n !== 0 && Wu(t, n, e);
  }
  function fc() {
    return (Yt & 6) === 0 ? (fu(0), !1) : !0;
  }
  function df() {
    if (Mt !== null) {
      if (Lt === 0)
        var t = Mt.return;
      else
        t = Mt, Jn = Fl = null, xs(t), Za = null, Ji = 0, t = Mt;
      for (; t !== null; )
        fg(t.alternate, t), t = t.return;
      Mt = null;
    }
  }
  function li(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, nS(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Hn = 0, df(), Gt = t, Mt = n = Kn(t.current, null), Dt = e, Lt = 0, Ze = null, _l = !1, Fa = Xl(t, e), cf = !1, Wa = Ge = uc = ra = wl = Wt = 0, Ue = ru = null, rf = !1, tl = zi(t, e), xo(), n;
  }
  function Zg(t, e) {
    Nt = null, ct.H = Go, e === Xa || e === Ao ? (e = Ih(), Lt = 3) : e === us ? (e = Ih(), Lt = 4) : Lt = e === Hs ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ze = e, Mt === null && (Wt = 1, Qo(
      t,
      Pe(e, t.current)
    ));
  }
  function Gg() {
    var t = ge.current;
    return t === null ? !0 : (Dt & 4194048) === Dt ? be === null : (Dt & 62914560) === Dt || (Dt & 536870912) !== 0 ? t === be : !1;
  }
  function Qg() {
    var t = ct.H;
    return ct.H = Go, t === null ? Go : t;
  }
  function Kg() {
    var t = ct.A;
    return ct.A = Ax, t;
  }
  function dc() {
    Wt = 4, _l || (Dt & 4194048) !== Dt && ge.current !== null || (Fa = !0), (wl & 134217727) === 0 && (ra & 134217727) === 0 || Gt === null || Tl(
      Gt,
      Dt,
      Ge,
      !1
    );
  }
  function hf(t, e, n) {
    var a = Yt;
    Yt |= 2;
    var u = Qg(), o = Kg();
    (Gt !== t || Dt !== e) && (rc = null, li(t, e)), e = !1;
    var h = Wt;
    t: do
      try {
        if (Lt !== 0 && Mt !== null) {
          var S = Mt, z = Ze;
          switch (Lt) {
            case 8:
              df(), h = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var X = Lt;
              if (Lt = 0, Ze = null, ai(t, S, z, X), n && Fa) {
                h = 0;
                break t;
              }
              break;
            default:
              X = Lt, Lt = 0, Ze = null, ai(t, S, z, X);
          }
        }
        Rx(), h = Wt;
        break;
      } catch (I) {
        Zg(t, I);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Jn = Fl = null, Yt = a, ct.H = u, ct.A = o, Mt === null && (Gt = null, Dt = 0, xo()), h;
  }
  function Rx() {
    for (; Mt !== null; ) $g(Mt);
  }
  function Hx(t, e) {
    var n = Yt;
    Yt |= 2;
    var a = Qg(), u = Kg();
    Gt !== t || Dt !== e ? (rc = null, cc = _e() + 500, li(t, e)) : Fa = Xl(
      t,
      e
    );
    t: do
      try {
        if (Lt !== 0 && Mt !== null) {
          e = Mt;
          var o = Ze;
          e: switch (Lt) {
            case 1:
              Lt = 0, Ze = null, ai(t, e, o, 1);
              break;
            case 2:
            case 9:
              if (Jh(o)) {
                Lt = 0, Ze = null, Jg(e);
                break;
              }
              e = function() {
                Lt !== 2 && Lt !== 9 || Gt !== t || (Lt = 7), Un(t);
              }, o.then(e, e);
              break t;
            case 3:
              Lt = 7;
              break t;
            case 4:
              Lt = 5;
              break t;
            case 7:
              Jh(o) ? (Lt = 0, Ze = null, Jg(e)) : (Lt = 0, Ze = null, ai(t, e, o, 7));
              break;
            case 5:
              var h = null;
              switch (Mt.tag) {
                case 26:
                  h = Mt.memoizedState;
                case 5:
                case 27:
                  var S = Mt;
                  if (h ? Vm(h) : S.stateNode.complete) {
                    Lt = 0, Ze = null;
                    var z = S.sibling;
                    if (z !== null) Mt = z;
                    else {
                      var X = S.return;
                      X !== null ? (Mt = X, hc(X)) : Mt = null;
                    }
                    break e;
                  }
              }
              Lt = 0, Ze = null, ai(t, e, o, 5);
              break;
            case 6:
              Lt = 0, Ze = null, ai(t, e, o, 6);
              break;
            case 8:
              df(), Wt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        Ux();
        break;
      } catch (I) {
        Zg(t, I);
      }
    while (!0);
    return Jn = Fl = null, ct.H = a, ct.A = u, Yt = n, Mt !== null ? 0 : (Gt = null, Dt = 0, xo(), Wt);
  }
  function Ux() {
    for (; Mt !== null && !hr(); )
      $g(Mt);
  }
  function $g(t) {
    var e = rg(t.alternate, t, tl);
    t.memoizedProps = t.pendingProps, e === null ? hc(t) : Mt = e;
  }
  function Jg(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ng(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Dt
        );
        break;
      case 11:
        e = ng(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Dt
        );
        break;
      case 5:
        xs(e);
        var a = e;
        a === se && (zt ? (No(a), a.tag === 5 && a.stateNode != null && (Qt = a.stateNode)) : (No(a), zt = !0));
      default:
        fg(n, e), e = Mt = jh(e, tl), e = rg(n, e, tl);
    }
    t.memoizedProps = t.pendingProps, e === null ? hc(t) : Mt = e;
  }
  function ai(t, e, n, a) {
    Jn = Fl = null, xs(e), Za = null, Ji = 0;
    var u = e.return;
    try {
      if (Ex(
        t,
        u,
        e,
        n,
        Dt
      )) {
        Wt = 1, Qo(
          t,
          Pe(n, t.current)
        ), Mt = null;
        return;
      }
    } catch (o) {
      if (u !== null) throw Mt = u, o;
      Wt = 1, Qo(
        t,
        Pe(n, t.current)
      ), Mt = null;
      return;
    }
    e.flags & 32768 ? (zt || a === 1 ? t = !0 : Fa || (Dt & 536870912) !== 0 ? t = !1 : (_l = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), kg(e, t)) : hc(e);
  }
  function hc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        kg(
          e,
          _l
        );
        return;
      }
      t = e.return;
      var n = Tx(
        e.alternate,
        e,
        tl
      );
      if (n !== null) {
        Mt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Mt = e;
        return;
      }
      Mt = e = t;
    } while (e !== null);
    Wt === 0 && (Wt = 5);
  }
  function kg(t, e) {
    do {
      var n = Cx(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Mt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Mt = t;
        return;
      }
      Mt = t = n;
    } while (t !== null);
    Wt = 6, Mt = null;
  }
  function Ig(t, e, n, a, u, o, h, S, z, X, I, at) {
    t.cancelPendingCommit = null;
    do
      gc();
    while (kt !== 0);
    if ((Yt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === Gt && (Mt = Gt = null, Dt = 0), sa = e, hn = t, Hn = n, ff = u, Vg = a, Bx(
        t,
        e,
        n,
        h,
        S,
        z,
        at
      );
    }
  }
  function Bx(t, e, n, a, u, o, h) {
    var S = e.lanes | e.childLanes;
    if (sf = S, S |= $r, Er(
      t,
      n,
      S,
      a,
      u,
      o
    ), ti = null, (n & 335544064) === n ? (ei = sx(t), a = 10262) : (ei = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Xx(ba, function() {
      return vf(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Po = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = ct.T, ct.T = null, u = rt.p, rt.p = 2, o = Yt, Yt |= 4;
      try {
        zx(t, e, n);
      } finally {
        Yt = o, rt.p = u, ct.T = a;
      }
    }
    kt = 1, Po ? Pa = cS(
      h,
      t.containerInfo,
      ei,
      gf,
      mf,
      Yx,
      yf,
      vf,
      jx
    ) : (gf(), mf(), yf());
  }
  function jx(t) {
    if (kt !== 0) {
      var e = hn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Yx() {
    kt === 3 && (kt = 0, Dg(sa, hn), kt = 4);
  }
  function gf() {
    if (kt === 1) {
      kt = 0;
      var t = hn, e = sa, n = Hn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = ct.T, ct.T = null;
        var u = rt.p;
        rt.p = 2;
        var o = Yt;
        Yt |= 4;
        try {
          uu = nc = !1, Ag(e, t, n), n = Mf;
          var h = Ch(t.containerInfo), S = n.focusedElem, z = n.selectionRange;
          if (h !== S && S && S.ownerDocument && Th(
            S.ownerDocument.documentElement,
            S
          )) {
            if (z !== null && Xr(S)) {
              var X = z.start, I = z.end;
              if (I === void 0 && (I = X), "selectionStart" in S)
                S.selectionStart = X, S.selectionEnd = Math.min(
                  I,
                  S.value.length
                );
              else {
                var at = S.ownerDocument || document, L = at && at.defaultView || window;
                if (L.getSelection) {
                  var $ = L.getSelection(), ht = S.textContent.length, yt = Math.min(z.start, ht), Tt = z.end === void 0 ? yt : Math.min(z.end, ht);
                  !$.extend && yt > Tt && (h = Tt, Tt = yt, yt = h);
                  var q = Nh(
                    S,
                    yt
                  ), H = Nh(
                    S,
                    Tt
                  );
                  if (q && H && ($.rangeCount !== 1 || $.anchorNode !== q.node || $.anchorOffset !== q.offset || $.focusNode !== H.node || $.focusOffset !== H.offset)) {
                    var K = at.createRange();
                    K.setStart(q.node, q.offset), $.removeAllRanges(), yt > Tt ? ($.addRange(K), $.extend(H.node, H.offset)) : (K.setEnd(H.node, H.offset), $.addRange(K));
                  }
                }
              }
            }
            for (at = [], $ = S; $ = $.parentNode; )
              $.nodeType === 1 && at.push({
                element: $,
                left: $.scrollLeft,
                top: $.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < at.length; S++) {
              var lt = at[S];
              lt.element.scrollLeft = lt.left, lt.element.scrollTop = lt.top;
            }
          }
          di = !!zf, Mf = zf = null;
        } finally {
          Yt = o, rt.p = u, ct.T = a;
        }
      }
      t.current = e, kt = 2;
    }
  }
  function mf() {
    if (kt === 2) {
      kt = 0;
      var t = hn, e = sa, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = ct.T, ct.T = null;
        var a = rt.p;
        rt.p = 2;
        var u = Yt;
        Yt |= 4;
        try {
          wg(t, e.alternate, e);
        } finally {
          Yt = u, rt.p = a, ct.T = n;
        }
      }
      kt = 3;
    }
  }
  function yf() {
    if (kt === 4 || kt === 3) {
      kt = 0;
      var t = Pa;
      Pa = null, gr();
      var e = hn, n = sa, a = Hn, u = Vg, o = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & o) !== 0 || (n.flags & o) !== 0 ? kt = 5 : (kt = 0, sa = hn = null, Fg(e, e.pendingLanes)), o = e.pendingLanes, o === 0 && (Nl = null), Oi(a), n = n.stateNode, we && typeof we.onCommitFiberRoot == "function")
        try {
          we.onCommitFiberRoot(
            ql,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        n = ct.T, o = rt.p, rt.p = 2, ct.T = null;
        try {
          for (var h = e.onRecoverableError, S = 0; S < u.length; S++) {
            var z = u[S];
            h(z.value, {
              componentStack: z.stack
            });
          }
        } finally {
          ct.T = n, rt.p = o;
        }
      }
      if (u = ti, h = ei, ei = null, u !== null && (ti = null, h === null && (h = []), t !== null))
        for (z = 0; z < u.length; z++)
          n = (0, u[z])(
            h
          ), n !== void 0 && t.finished.finally(n);
      (Hn & 3) !== 0 && gc(), Un(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === sc ? su++ : (su = 0, sc = e) : (su = 0, sc = null), fu(0);
    }
  }
  function Fg(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Qi(e)));
  }
  function gc() {
    return Pa !== null && (Pa.skipTransition(), Pa = null), gf(), mf(), yf(), vf();
  }
  function vf() {
    if (kt !== 5) return !1;
    var t = hn, e = sf;
    sf = 0;
    var n = Oi(Hn), a = ct.T, u = rt.p;
    try {
      rt.p = 32 > n ? 32 : n, ct.T = null, n = ff, ff = null;
      var o = hn, h = Hn;
      if (kt = 0, sa = hn = null, Hn = 0, (Yt & 6) !== 0) throw Error(r(331));
      var S = Yt;
      if (Yt |= 4, Bg(o.current), Rg(
        o,
        o.current,
        h,
        n
      ), Yt = S, fu(0, !1), we && typeof we.onPostCommitFiberRoot == "function")
        try {
          we.onPostCommitFiberRoot(ql, o);
        } catch {
        }
      return !0;
    } finally {
      rt.p = u, ct.T = a, Fg(t, e);
    }
  }
  function Wg(t, e, n) {
    e = Pe(n, e), e = Rs(t.stateNode, e, 2), t = vl(t, e, 2), t !== null && (Zl(t, 2), Un(t));
  }
  function qt(t, e, n) {
    if (t.tag === 3)
      Wg(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Wg(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Nl === null || !Nl.has(a))) {
            t = Pe(n, t), n = J0(2), a = vl(e, n, 2), a !== null && (k0(
              n,
              a,
              e,
              t
            ), Zl(a, 2), Un(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function pf(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Ox();
      var u = /* @__PURE__ */ new Set();
      a.set(e, u);
    } else
      u = a.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(e, u));
    u.has(n) || (cf = !0, u.add(n), t = Vx.bind(null, t, e, n), e.then(t, t));
  }
  function Vx(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Gt === t && (Dt & n) === n && ((Wt === 4 || Wt === 3 && (Dt & 62914560) === Dt && 300 > _e() - oc) && (Yt & 2) === 0 ? li(t, 0) : uc |= n, Wa === Dt && (Wa = 0)), Un(t);
  }
  function Pg(t, e) {
    e === 0 && (e = Mi()), t = Jl(t, e), t !== null && (Zl(t, e), Un(t));
  }
  function Lx(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Pg(t, n);
  }
  function qx(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), Pg(t, n);
  }
  function Xx(t, e) {
    return Ti(t, e);
  }
  var ii = null, ui = null, xf = !1, mc = !1, Sf = !1, Cl = 0;
  function Un(t) {
    t !== ui && t.next === null && (ui === null ? ii = ui = t : ui = ui.next = t), mc = !0, xf || (xf = !0, Gx());
  }
  function fu(t, e) {
    if (!Sf && mc) {
      Sf = !0;
      do
        for (var n = !1, a = ii; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var o = 0;
            else {
              var h = a.suspendedLanes, S = a.pingedLanes;
              o = (1 << 31 - Ne(42 | t) + 1) - 1, o &= u & ~(h & ~S), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
            }
            o !== 0 && (n = !0, lm(a, o));
          } else
            o = Dt, o = Na(
              a,
              a === Gt ? o : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (o & 3) === 0 || Xl(a, o) || (n = !0, lm(a, o));
          a = a.next;
        }
      while (n);
      Sf = !1;
    }
  }
  function Zx() {
    tm();
  }
  function tm() {
    mc = xf = !1;
    var t = 0;
    Cl !== 0 && eS() && (t = Cl);
    for (var e = _e(), n = null, a = ii; a !== null; ) {
      var u = a.next, o = em(a, e);
      o === 0 ? (a.next = null, n === null ? ii = u : n.next = u, u === null && (ui = n)) : (n = a, (t !== 0 || (o & 3) !== 0) && (mc = !0)), a = u;
    }
    kt !== 0 && kt !== 5 || fu(t), Cl !== 0 && (Cl = 0);
  }
  function em(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o; ) {
      var h = 31 - Ne(o), S = 1 << h, z = u[h];
      z === -1 ? ((S & n) === 0 || (S & a) !== 0) && (u[h] = Fu(S, e)) : z <= e && (t.expiredLanes |= S), o &= ~S;
    }
    if (e = Gt, n = Dt, n = Na(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Lt === 2 || Lt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Ci(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Xl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Ci(a), Oi(n)) {
        case 2:
        case 8:
          n = ku;
          break;
        case 32:
          n = ba;
          break;
        case 268435456:
          n = Iu;
          break;
        default:
          n = ba;
      }
      return a = nm.bind(null, t), n = Ti(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Ci(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function nm(t, e) {
    if (kt !== 0 && kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (gc() && t.callbackNode !== n)
      return null;
    var a = Dt;
    return a = Na(
      t,
      t === Gt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (qg(t, a, e), em(t, _e()), t.callbackNode != null && t.callbackNode === n ? nm.bind(null, t) : null);
  }
  function lm(t, e) {
    if (gc()) return null;
    qg(t, e, !0);
  }
  function Gx() {
    lS(function() {
      (Yt & 6) !== 0 ? Ti(
        Ju,
        Zx
      ) : tm();
    });
  }
  function bf() {
    if (Cl === 0) {
      var t = ta;
      t === 0 && (t = Ea, Ea <<= 1, (Ea & 261888) === 0 && (Ea = 256)), Cl = t;
    }
    return Cl;
  }
  function am(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : so(t);
  }
  function Qx(t, e, n, a, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var o = am(
        (u[Se] || null).action
      ), h = a.submitter;
      h && (e = (e = h[Se] || null) ? am(e.formAction) : h.getAttribute("formAction"), e !== null && (o = e, h = null));
      var S = new mo(
        "action",
        "action",
        null,
        a,
        u
      );
      t.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Cl !== 0) {
                  var z = new FormData(u, h);
                  zs(
                    n,
                    {
                      pending: !0,
                      data: z,
                      method: u.method,
                      action: o
                    },
                    null,
                    z
                  );
                }
              } else
                typeof o == "function" && (S.preventDefault(), z = new FormData(u, h), zs(
                  n,
                  {
                    pending: !0,
                    data: z,
                    method: u.method,
                    action: o
                  },
                  o,
                  z
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Ef = 0; Ef < Kr.length; Ef++) {
    var _f = Kr[Ef], Kx = _f.toLowerCase(), $x = _f[0].toUpperCase() + _f.slice(1);
    rn(
      Kx,
      "on" + $x
    );
  }
  rn(Ah, "onAnimationEnd"), rn(Oh, "onAnimationIteration"), rn(Dh, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(nx, "onTransitionRun"), rn(lx, "onTransitionStart"), rn(ax, "onTransitionCancel"), rn(Rh, "onTransitionEnd"), ol("onMouseEnter", ["mouseout", "mouseover"]), ol("onMouseLeave", ["mouseout", "mouseover"]), ol("onPointerEnter", ["pointerout", "pointerover"]), ol("onPointerLeave", ["pointerout", "pointerover"]), cn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), cn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), cn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), cn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), cn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), cn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var du = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Jx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du)
  );
  function im(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], u = a.event;
      a = a.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var h = a.length - 1; 0 <= h; h--) {
            var S = a[h], z = S.instance, X = S.currentTarget;
            if (S = S.listener, z !== o && u.isPropagationStopped())
              break t;
            o = S, u.currentTarget = X;
            try {
              o(u);
            } catch (I) {
              po(I);
            }
            u.currentTarget = null, o = z;
          }
        else
          for (h = 0; h < a.length; h++) {
            if (S = a[h], z = S.instance, X = S.currentTarget, S = S.listener, z !== o && u.isPropagationStopped())
              break t;
            o = S, u.currentTarget = X;
            try {
              o(u);
            } catch (I) {
              po(I);
            }
            u.currentTarget = null, o = z;
          }
      }
    }
  }
  function At(t, e) {
    var n = e[lo];
    n === void 0 && (n = e[lo] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (um(e, t, 2, !1), n.add(a));
  }
  function wf(t, e, n) {
    var a = 0;
    e && (a |= 4), um(
      n,
      t,
      a,
      e
    );
  }
  var yc = "_reactListening" + Math.random().toString(36).slice(2);
  function Nf(t) {
    if (!t[yc]) {
      t[yc] = !0, uo.forEach(function(n) {
        n !== "selectionchange" && (Jx.has(n) || wf(n, !1, t), wf(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[yc] || (e[yc] = !0, wf("selectionchange", !1, e));
    }
  }
  function um(t, e, n, a) {
    switch (km(e)) {
      case 2:
        var u = LS;
        break;
      case 8:
        u = qS;
        break;
      default:
        u = Qf;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !Dr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function Tf(t, e, n, a, u) {
    var o = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var h = a.tag;
        if (h === 3 || h === 4) {
          var S = a.stateNode.containerInfo;
          if (S === u) break;
          if (h === 4)
            for (h = a.return; h !== null; ) {
              var z = h.tag;
              if ((z === 3 || z === 4) && h.stateNode.containerInfo === u)
                return;
              h = h.return;
            }
          for (; S !== null; ) {
            if (h = Ln(S), h === null) return;
            if (z = h.tag, z === 5 || z === 6 || z === 26 || z === 27) {
              a = o = h;
              continue t;
            }
            S = S.parentNode;
          }
        }
        a = a.return;
      }
    uh(function() {
      var X = o, I = Ar(n), at = [];
      t: {
        var L = Hh.get(t);
        if (L !== void 0) {
          var $ = mo, ht = t;
          switch (t) {
            case "keypress":
              if (ho(n) === 0) break t;
            case "keydown":
            case "keyup":
              $ = D1;
              break;
            case "focusin":
              ht = "focus", $ = Br;
              break;
            case "focusout":
              ht = "blur", $ = Br;
              break;
            case "beforeblur":
            case "afterblur":
              $ = Br;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $ = rh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $ = S1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $ = j1;
              break;
            case Ah:
            case Oh:
            case Dh:
              $ = _1;
              break;
            case Rh:
              $ = V1;
              break;
            case "scroll":
            case "scrollend":
              $ = p1;
              break;
            case "wheel":
              $ = q1;
              break;
            case "copy":
            case "cut":
            case "paste":
              $ = N1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $ = fh;
              break;
            case "submit":
              $ = U1;
              break;
            case "toggle":
            case "beforetoggle":
              $ = Z1;
          }
          var yt = (e & 4) !== 0, Tt = !yt && (t === "scroll" || t === "scrollend"), q = yt ? L !== null ? L + "Capture" : null : L;
          yt = [];
          for (var H = X, K; H !== null; ) {
            var lt = H;
            if (K = lt.stateNode, lt = lt.tag, lt !== 5 && lt !== 26 && lt !== 27 || K === null || q === null || (lt = Hi(H, q), lt != null && yt.push(
              hu(H, lt, K)
            )), Tt) break;
            H = H.return;
          }
          0 < yt.length && (L = new $(
            L,
            ht,
            null,
            n,
            I
          ), at.push({ event: L, listeners: yt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if ($ = t === "mouseover" || t === "pointerover", L = t === "mouseout" || t === "pointerout", $ && n !== Mr && (ht = n.relatedTarget || n.fromElement) && (Ln(ht) || ht[il]))
            break t;
          (L || $) && (ht = I.window === I ? I : ($ = I.ownerDocument) ? $.defaultView || $.parentWindow : window, L ? ($ = n.relatedTarget || n.toElement, L = X, $ = $ ? Ln($) : null, $ !== null && (Tt = f($), yt = $.tag, $ !== Tt || yt !== 5 && yt !== 27 && yt !== 6) && ($ = null)) : (L = null, $ = X), L !== $ && (yt = rh, lt = "onMouseLeave", q = "onMouseEnter", H = "mouse", (t === "pointerout" || t === "pointerover") && (yt = fh, lt = "onPointerLeave", q = "onPointerEnter", H = "pointer"), Tt = L == null ? ht : Ql(L), K = $ == null ? ht : Ql($), ht = new yt(
            lt,
            H + "leave",
            L,
            n,
            I
          ), ht.target = Tt, ht.relatedTarget = K, lt = null, Ln(I) === X && (yt = new yt(
            q,
            H + "enter",
            $,
            n,
            I
          ), yt.target = K, yt.relatedTarget = Tt, lt = yt), Tt = lt, yt = L && $ ? V(
            L,
            $,
            kx
          ) : null, L !== null && om(
            at,
            ht,
            L,
            yt,
            !1
          ), $ !== null && Tt !== null && om(
            at,
            Tt,
            $,
            yt,
            !0
          )));
        }
        t: {
          if (L = X ? Ql(X) : window, $ = L.nodeName && L.nodeName.toLowerCase(), $ === "select" || $ === "input" && L.type === "file")
            var mt = xh;
          else if (vh(L))
            if (Sh)
              mt = P1;
            else {
              mt = F1;
              var Rt = I1;
            }
          else
            $ = L.nodeName, !$ || $.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? X && zr(X.elementType) && (mt = xh) : mt = W1;
          if (mt && (mt = mt(t, X))) {
            ph(
              at,
              mt,
              n,
              I
            );
            break t;
          }
          Rt && Rt(t, L, X);
        }
        switch (Rt = X ? Ql(X) : window, t) {
          case "focusin":
            (vh(Rt) || Rt.contentEditable === "true") && (Ha = Rt, Zr = X, Xi = null);
            break;
          case "focusout":
            Xi = Zr = Ha = null;
            break;
          case "mousedown":
            Gr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gr = !1, zh(at, n, I);
            break;
          case "selectionchange":
            if (ex) break;
          case "keydown":
          case "keyup":
            zh(at, n, I);
        }
        var St;
        if (Yr)
          t: {
            switch (t) {
              case "compositionstart":
                var bt = "onCompositionStart";
                break t;
              case "compositionend":
                bt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                bt = "onCompositionUpdate";
                break t;
            }
            bt = void 0;
          }
        else
          Ra ? mh(t, n) && (bt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (bt = "onCompositionStart");
        bt && (dh && n.locale !== "ko" && (Ra || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && Ra && (St = oh()) : (cl = I, Rr = "value" in cl ? cl.value : cl.textContent, Ra = !0)), Rt = vc(X, bt), 0 < Rt.length && (bt = new sh(
          bt,
          t,
          null,
          n,
          I
        ), at.push({ event: bt, listeners: Rt }), St ? bt.data = St : (St = yh(n), St !== null && (bt.data = St)))), (St = Q1 ? K1(t, n) : $1(t, n)) && (bt = vc(X, "onBeforeInput"), 0 < bt.length && (Rt = new sh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          I
        ), at.push({
          event: Rt,
          listeners: bt
        }), Rt.data = St)), Qx(
          at,
          t,
          X,
          n,
          I
        );
      }
      im(at, e);
    });
  }
  function hu(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function vc(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var u = t, o = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || o === null || (u = Hi(t, n), u != null && a.unshift(
        hu(t, u, o)
      ), u = Hi(t, e), u != null && a.push(
        hu(t, u, o)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function kx(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function om(t, e, n, a, u) {
    for (var o = e._reactName, h = []; n !== null && n !== a; ) {
      var S = n, z = S.alternate, X = S.stateNode;
      if (S = S.tag, z !== null && z === a) break;
      S !== 5 && S !== 26 && S !== 27 || X === null || (z = X, u ? (X = Hi(n, o), X != null && h.unshift(
        hu(n, X, z)
      )) : u || (X = Hi(n, o), X != null && h.push(
        hu(n, X, z)
      ))), n = n.return;
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var Ix = /\r\n?/g, Fx = /\u0000|\uFFFD/g;
  function cm(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ix, `
`).replace(Fx, "");
  }
  function rm(t, e) {
    return e = cm(e), cm(t) === e;
  }
  function Xt(t, e, n, a, u, o) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || Aa(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && Aa(t, "" + a);
        else return;
        break;
      case "className":
        ro(t, "class", a);
        break;
      case "tabIndex":
        ro(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ro(t, n, a);
        break;
      case "style":
        ah(t, a, o);
        return;
      case "data":
        if (e !== "object") {
          ro(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = so(a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" && (n === "formAction" ? (e !== "input" && Xt(t, e, "name", u.name, u, null), Xt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Xt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Xt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Xt(t, e, "encType", u.encType, u, null), Xt(t, e, "method", u.method, u, null), Xt(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = so(a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Nn);
        return;
      case "onScroll":
        a != null && At("scroll", t);
        return;
      case "onScrollEnd":
        a != null && At("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (u.children != null) throw Error(r(60));
            o?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = so(a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        At("beforetoggle", t), At("toggle", t), co(t, "popover", a);
        break;
      case "xlinkActuate":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Xn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Xn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Xn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        co(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = y1.get(n) || n, co(t, n, a);
        else return;
    }
    jt = !0;
  }
  function Cf(t, e, n, a, u, o) {
    switch (n) {
      case "style":
        ah(t, a, o);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (u.children != null) throw Error(r(60));
            o?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Aa(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Aa(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && At("scroll", t);
        return;
      case "onScrollEnd":
        a != null && At("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = Nn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!oo.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), o = n.slice(2, u ? n.length - 7 : void 0), e = t[Se] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(o, e, u), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(o, a, u);
              break t;
            }
            jt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : co(t, n, a);
          }
        return;
    }
    jt = !0;
  }
  function ve(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        At("error", t), At("load", t);
        var a = !1, u = !1, o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var h = n[o];
            if (h != null)
              switch (o) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Xt(t, e, o, h, n, null);
              }
          }
        u && Xt(t, e, "srcSet", n.srcSet, n, null), a && Xt(t, e, "src", n.src, n, null);
        return;
      case "input":
        At("invalid", t);
        var S = o = h = u = null, z = null, X = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var I = n[a];
            if (I != null)
              switch (a) {
                case "name":
                  u = I;
                  break;
                case "type":
                  h = I;
                  break;
                case "checked":
                  z = I;
                  break;
                case "defaultChecked":
                  X = I;
                  break;
                case "value":
                  o = I;
                  break;
                case "defaultValue":
                  S = I;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (I != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Xt(t, e, a, I, n, null);
              }
          }
        th(
          t,
          o,
          S,
          z,
          X,
          h,
          u,
          !1
        );
        return;
      case "select":
        At("invalid", t), a = h = o = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (S = n[u], S != null))
            switch (u) {
              case "value":
                o = S;
                break;
              case "defaultValue":
                h = S;
                break;
              case "multiple":
                a = S;
              default:
                Xt(t, e, u, S, n, null);
            }
        e = o, n = h, t.multiple = !!a, e != null ? Ma(t, !!a, e, !1) : n != null && Ma(t, !!a, n, !0);
        return;
      case "textarea":
        At("invalid", t), o = u = a = null;
        for (h in n)
          if (n.hasOwnProperty(h) && (S = n[h], S != null))
            switch (h) {
              case "value":
                a = S;
                break;
              case "defaultValue":
                u = S;
                break;
              case "children":
                o = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(r(91));
                break;
              default:
                Xt(t, e, h, S, n, null);
            }
        nh(t, a, u, o);
        return;
      case "option":
        for (z in n)
          n.hasOwnProperty(z) && (a = n[z], a != null) && (z === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Xt(t, e, z, a, n, null));
        return;
      case "dialog":
        At("beforetoggle", t), At("toggle", t), At("cancel", t), At("close", t);
        break;
      case "iframe":
      case "object":
        At("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < du.length; a++)
          At(du[a], t);
        break;
      case "image":
        At("error", t), At("load", t);
        break;
      case "details":
        At("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        At("error", t), At("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (X in n)
          if (n.hasOwnProperty(X) && (a = n[X], a != null))
            switch (X) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Xt(t, e, X, a, n, null);
            }
        return;
      default:
        if (zr(e)) {
          for (I in n)
            n.hasOwnProperty(I) && (a = n[I], a !== void 0 && Cf(
              t,
              e,
              I,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (S in n)
      n.hasOwnProperty(S) && (a = n[S], a != null && Xt(t, e, S, a, n, null));
  }
  var Wx = {};
  function Px(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, o = null, h = null, S = null, z = null, X = null, I = null;
        for ($ in n) {
          var at = n[$];
          if (n.hasOwnProperty($) && at != null)
            switch ($) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                z = at;
              default:
                a.hasOwnProperty($) || Xt(t, e, $, null, a, at);
            }
        }
        for (var L in a) {
          var $ = a[L];
          if (at = n[L], a.hasOwnProperty(L) && ($ != null || at != null))
            switch (L) {
              case "type":
                $ !== at && (jt = !0), o = $;
                break;
              case "name":
                $ !== at && (jt = !0), u = $;
                break;
              case "checked":
                $ !== at && (jt = !0), X = $;
                break;
              case "defaultChecked":
                $ !== at && (jt = !0), I = $;
                break;
              case "value":
                $ !== at && (jt = !0), h = $;
                break;
              case "defaultValue":
                $ !== at && (jt = !0), S = $;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if ($ != null)
                  throw Error(r(137, e));
                break;
              default:
                $ !== at && Xt(
                  t,
                  e,
                  L,
                  $,
                  a,
                  at
                );
            }
        }
        Tr(
          t,
          h,
          S,
          z,
          X,
          I,
          o,
          u
        );
        return;
      case "select":
        $ = h = S = L = null;
        for (o in n)
          if (z = n[o], n.hasOwnProperty(o) && z != null)
            switch (o) {
              case "value":
                break;
              case "multiple":
                $ = z;
              default:
                a.hasOwnProperty(o) || Xt(
                  t,
                  e,
                  o,
                  null,
                  a,
                  z
                );
            }
        for (u in a)
          if (o = a[u], z = n[u], a.hasOwnProperty(u) && (o != null || z != null))
            switch (u) {
              case "value":
                o !== z && (jt = !0), L = o;
                break;
              case "defaultValue":
                o !== z && (jt = !0), S = o;
                break;
              case "multiple":
                o !== z && (jt = !0), h = o;
              default:
                o !== z && Xt(
                  t,
                  e,
                  u,
                  o,
                  a,
                  z
                );
            }
        e = S, n = h, a = $, L != null ? Ma(t, !!n, L, !1) : !!a != !!n && (e != null ? Ma(t, !!n, e, !0) : Ma(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        $ = L = null;
        for (S in n)
          if (u = n[S], n.hasOwnProperty(S) && u != null && !a.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(t, e, S, null, a, u);
            }
        for (h in a)
          if (u = a[h], o = n[h], a.hasOwnProperty(h) && (u != null || o != null))
            switch (h) {
              case "value":
                u !== o && (jt = !0), L = u;
                break;
              case "defaultValue":
                u !== o && (jt = !0), $ = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== o && Xt(t, e, h, u, a, o);
            }
        eh(t, L, $);
        return;
      case "option":
        for (var ht in n)
          L = n[ht], n.hasOwnProperty(ht) && L != null && !a.hasOwnProperty(ht) && (ht === "selected" ? t.selected = !1 : Xt(
            t,
            e,
            ht,
            null,
            a,
            L
          ));
        for (z in a)
          L = a[z], $ = n[z], a.hasOwnProperty(z) && L !== $ && (L != null || $ != null) && (z === "selected" ? (L !== $ && (jt = !0), t.selected = L && typeof L != "function" && typeof L != "symbol") : Xt(
            t,
            e,
            z,
            L,
            a,
            $
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var yt in n)
          L = n[yt], n.hasOwnProperty(yt) && L != null && !a.hasOwnProperty(yt) && Xt(t, e, yt, null, a, L);
        for (X in a)
          if (L = a[X], $ = n[X], a.hasOwnProperty(X) && L !== $ && (L != null || $ != null))
            switch (X) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null)
                  throw Error(r(137, e));
                break;
              default:
                Xt(
                  t,
                  e,
                  X,
                  L,
                  a,
                  $
                );
            }
        return;
      default:
        if (zr(e)) {
          for (var Tt in n)
            L = n[Tt], n.hasOwnProperty(Tt) && L !== void 0 && !a.hasOwnProperty(Tt) && Cf(
              t,
              e,
              Tt,
              void 0,
              a,
              L
            );
          for (I in a)
            L = a[I], $ = n[I], !a.hasOwnProperty(I) || L === $ || L === void 0 && $ === void 0 || Cf(
              t,
              e,
              I,
              L,
              a,
              $
            );
          return;
        }
    }
    for (var q in n)
      L = n[q], n.hasOwnProperty(q) && L != null && !a.hasOwnProperty(q) && Xt(t, e, q, null, a, L);
    for (at in a)
      L = a[at], $ = n[at], !a.hasOwnProperty(at) || L === $ || L == null && $ == null || Xt(t, e, at, L, a, $);
  }
  function sm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function tS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var u = n[a], o = u.transferSize, h = u.initiatorType, S = u.duration;
        if (o && S && sm(h)) {
          for (h = 0, S = u.responseEnd, a += 1; a < n.length; a++) {
            var z = n[a], X = z.startTime;
            if (X > S) break;
            var I = z.transferSize, at = z.initiatorType;
            I && sm(at) && (z = z.responseEnd, h += I * (z < S ? 1 : (S - X) / (z - X)));
          }
          if (--a, e += 8 * (o + h) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var zf = null, Mf = null;
  function gu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function fm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function hm(t, e, n, a) {
    return n = gu(
      n
    ).createElement(t), n[oe] = a, n[Se] = e, ve(n, t, e), ee(n), n;
  }
  function Af(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Of = null;
  function eS() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Of ? !1 : (Of = t, !0) : (Of = null, !1);
  }
  var Df = typeof setTimeout == "function" ? setTimeout : void 0, nS = typeof clearTimeout == "function" ? clearTimeout : void 0, gm = typeof Promise == "function" ? Promise : void 0, mm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Df, lS = typeof queueMicrotask == "function" ? queueMicrotask : typeof gm < "u" ? function(t) {
    return gm.resolve(null).then(t).catch(aS);
  } : Df;
  function aS(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function zl(t) {
    return t === "head";
  }
  function ym(t, e) {
    var n = e, a = 0;
    do {
      var u = n.nextSibling;
      if (t.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(u), hi(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          Lf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, Lf(n);
          for (var o = n.firstChild; o; ) {
            var h = o.nextSibling, S = o.nodeName;
            o[Gl] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && o.rel.toLowerCase() === "stylesheet" || n.removeChild(o), o = h;
          }
        } else
          n === "body" && Lf(t.ownerDocument.body);
      n = u;
    } while (n);
    hi(e);
  }
  function vm(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a;
    } while (n);
  }
  function pm(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var a = 1;
      else
        for (var u = a = 0; u < e.length; u++) {
          var o = e[u];
          0 < o.width && 0 < o.height && a++;
        }
      a === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function xm(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function iS(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Rf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return iS(e, n, t);
  }
  function uS(t) {
    return t.documentElement.clientHeight;
  }
  function oS(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function cS(t, e, n, a, u, o, h, S, z) {
    var X = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var I = X.startViewTransition({
        update: function() {
          var L = X.defaultView, $ = L.navigation && L.navigation.transition, ht = X.fonts.status;
          a();
          var yt = [];
          if (ht === "loaded" && (uS(X), X.fonts.status === "loading" && yt.push(X.fonts.ready)), ht = yt.length, t !== null)
            for (var Tt = t.suspenseyImages, q = 0, H = 0; H < Tt.length; H++) {
              var K = Tt[H];
              if (!K.complete) {
                var lt = K.getBoundingClientRect();
                if (0 < lt.bottom && 0 < lt.right && lt.top < L.innerHeight && lt.left < L.innerWidth) {
                  if (q += Lm(K), q > Sc) {
                    yt.length = ht;
                    break;
                  }
                  K = new Promise(
                    oS.bind(K)
                  ), yt.push(K);
                }
              }
            }
          if (0 < yt.length)
            return L = Promise.race([
              Promise.all(yt),
              new Promise(function(mt) {
                return setTimeout(mt, 500);
              })
            ]).then(u, u), ($ ? Promise.allSettled([$.finished, L]) : L).then(o, o);
          if (u(), $)
            return $.finished.then(
              o,
              o
            );
          o();
        },
        types: n
      });
      X.__reactViewTransition = I;
      var at = [];
      return I.ready.then(
        function() {
          for (var L = X.documentElement.getAnimations({
            subtree: !0
          }), $ = 0; $ < L.length; $++) {
            var ht = L[$], yt = ht.effect, Tt = yt.pseudoElement;
            if (Tt != null && Tt.startsWith("::view-transition")) {
              at.push(ht), ht = yt.getKeyframes();
              for (var q = Tt = void 0, H = !0, K = 0; K < ht.length; K++) {
                var lt = ht[K], mt = lt.width;
                if (Tt === void 0) Tt = mt;
                else if (Tt !== mt) {
                  H = !1;
                  break;
                }
                if (mt = lt.height, q === void 0) q = mt;
                else if (q !== mt) {
                  H = !1;
                  break;
                }
                delete lt.width, delete lt.height, lt.transform === "none" && delete lt.transform;
              }
              H && Tt !== void 0 && q !== void 0 && (yt.setKeyframes(ht), H = getComputedStyle(
                yt.target,
                yt.pseudoElement
              ), H.width !== Tt || H.height !== q) && (H = ht[0], H.width = Tt, H.height = q, H = ht[ht.length - 1], H.width = Tt, H.height = q, yt.setKeyframes(ht));
            }
          }
          h();
        },
        function(L) {
          X.__reactViewTransition === I && (X.__reactViewTransition = null);
          try {
            typeof L == "object" && L !== null && L.name === "InvalidStateError" && (L.message === "View transition was skipped because document visibility state is hidden." || L.message === "Skipping view transition because document visibility state has become hidden." || L.message === "Skipping view transition because viewport size changed." || L.message === "Transition was aborted because of invalid state") && (L = null), L !== null && z(L);
          } finally {
            a(), u(), h();
          }
        }
      ), I.finished.finally(function() {
        for (var L = 0; L < at.length; L++)
          at[L].cancel();
        X.__reactViewTransition === I && (X.__reactViewTransition = null), S();
      }), I;
    } catch {
      return a(), u(), h(), null;
    }
  }
  function fa(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  fa.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : B({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, fa.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], u = 0; u < n.length; u++) {
      var o = n[u].effect;
      o !== null && o.target === t && o.pseudoElement === e && a.push(n[u]);
    }
    return a;
  }, fa.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Sm(t) {
    return {
      name: t,
      group: new fa("group", t),
      imagePair: new fa("image-pair", t),
      old: new fa("old", t),
      new: new fa("new", t)
    };
  }
  function Ke(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Ke.prototype.addEventListener = function(t, e, n) {
    var a = null, u = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var o = this._eventListeners;
      if (Em(o, t, e, n) === -1) {
        var h = this, S = e;
        n != null && typeof n != "boolean" && n.once === !0 && (S = function(z) {
          h.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, z) : e.handleEvent(z);
        }), a !== null && (u = h.removeEventListener.bind(
          h,
          t,
          e,
          n
        ), a.addEventListener("abort", u, { once: !0 }), u = a.removeEventListener.bind(a, "abort", u)), a = oi(n), o.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: S,
          cleanup: u
        }), m(
          this._fragmentFiber.child,
          !1,
          rS,
          t,
          S,
          a
        );
      }
      this._eventListeners = o;
    }
  };
  function rS(t, e, n, a) {
    return w(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  Ke.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = Em(
      a,
      t,
      e,
      n
    ), e !== -1)) {
      var u = a[e];
      n = u.attachedListener;
      var o = u.cleanup;
      u = oi(u.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        sS,
        t,
        n,
        u
      ), a.splice(e, 1), o !== null && o();
    }
  };
  function sS(t, e, n, a) {
    return w(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function oi(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function bm(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Em(t, e, n, a) {
    if (t.length === 0) return -1;
    a = bm(a);
    for (var u = 0; u < t.length; u++) {
      var o = t[u];
      if (o.type === e && o.listener === n && bm(o.optionsOrUseCapture) === a)
        return u;
    }
    return -1;
  }
  Ke.prototype.dispatchEvent = function(t) {
    var e = y(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = w(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var a = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var u = 0; u < n.length; u++) {
          var o = n[u];
          a.addEventListener(
            o.type,
            o.attachedListener,
            oi(o.optionsOrUseCapture)
          );
        }
      if (e.appendChild(a), t = a.dispatchEvent(t), n)
        for (u = 0; u < n.length; u++)
          o = n[u], a.removeEventListener(
            o.type,
            o.attachedListener,
            oi(o.optionsOrUseCapture)
          );
      return e.removeChild(a), t;
    }
    return e.dispatchEvent(t);
  }, Ke.prototype.focus = function(t) {
    m(
      this._fragmentFiber.child,
      !0,
      _m,
      t,
      void 0,
      void 0
    );
  };
  function _m(t, e) {
    return t.tag === 6 ? !1 : (t = w(t), ES(t, e));
  }
  Ke.prototype.focusLast = function(t) {
    var e = [];
    m(
      this._fragmentFiber.child,
      !0,
      Hf,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !_m(e[n], t); n--) ;
  };
  function Hf(t, e) {
    return e.push(t), !1;
  }
  Ke.prototype.blur = function() {
    var t = y(
      this._fragmentFiber
    );
    t !== null && (t = w(t), t = gu(t).activeElement, t !== null && m(
      this._fragmentFiber.child,
      !1,
      fS,
      t,
      void 0,
      void 0
    ));
  };
  function fS(t, e) {
    return t.tag === 6 ? !1 : (t = w(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ke.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), m(
      this._fragmentFiber.child,
      !1,
      dS,
      t,
      void 0,
      void 0
    );
  };
  function dS(t, e) {
    return t.tag === 6 || (t = w(t), e.observe(t)), !1;
  }
  Ke.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), m(
        this._fragmentFiber.child,
        !1,
        hS,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < gn.length; n++) {
        var a = gn[n];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : gn[e++] = a;
      }
      gn.length = e;
    }
  };
  function hS(t, e) {
    return t.tag === 6 || (t = w(t), e.unobserve(t)), !1;
  }
  var gn = [], Uf = !1;
  function gS(t, e, n) {
    gn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Uf || (Uf = !0, _S(function() {
      Uf = !1;
      var a = gn;
      gn = [];
      for (var u = 0; u < a.length; u++) {
        var o = a[u];
        o.observer.unobserve(o.instance);
      }
    }));
  }
  Ke.prototype.getClientRects = function() {
    var t = [];
    return m(
      this._fragmentFiber.child,
      !1,
      mS,
      t,
      void 0,
      void 0
    ), t;
  };
  function mS(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = w(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Ke.prototype.getRootNode = function(t) {
    var e = y(
      this._fragmentFiber
    );
    return e === null ? this : w(e).getRootNode(t);
  }, Ke.prototype.compareDocumentPosition = function(t) {
    var e = y(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    m(
      this._fragmentFiber.child,
      !1,
      Hf,
      n,
      void 0,
      void 0
    );
    var a = w(e);
    if (n.length === 0) {
      if (n = a, b(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var u = a = n.compareDocumentPosition(t);
      return n === t ? u = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = E(e)[1], n === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (t = w(n).compareDocumentPosition(
        t
      ), u = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = w(n[0]), u = w(n[n.length - 1]);
    var o = b(this._fragmentFiber) ? e.parentElement : a;
    if (o == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = o.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, o = o.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var h = e.compareDocumentPosition(t), S = u.compareDocumentPosition(t), z = h & Node.DOCUMENT_POSITION_CONTAINED_BY || S & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return S = a && o && h & Node.DOCUMENT_POSITION_FOLLOWING && S & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || o && u === t || z || S ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !o && u === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : h, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || yS(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function yS(t, e, n, a, u) {
    var o = Ln(u);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!o)
        t: {
          for (; o !== null; ) {
            if (o.tag === 7 && (o === e || o.alternate === e)) {
              n = !0;
              break t;
            }
            o = o.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (o === null)
        return o = u.ownerDocument, u === o || u === o.documentElement || u === o.body;
      t: {
        for (o = e, e = y(e); o !== null; ) {
          if (!(o.tag !== 5 && o.tag !== 3 && o.tag !== 27 || o !== e && o.alternate !== e)) {
            o = !0;
            break t;
          }
          o = o.return;
        }
        o = !1;
      }
      return o;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!o) && !(e = o === n) && (e = V(
      n,
      o,
      G
    ), e === null ? e = !1 : (m(
      e,
      !0,
      _,
      o,
      n
    ), o = N, N = null, e = o !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!o) && !(e = o === a) && (e = V(
      a,
      o,
      G
    ), e === null ? e = !1 : (m(
      e,
      !0,
      A,
      o,
      a
    ), o = N, U = N = null, e = o !== null)), e) : !1;
  }
  function wm(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Ke.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    m(
      this._fragmentFiber.child,
      !1,
      Hf,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var a = E(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || y(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = w(a), wm(t, n);
        return;
      }
      if (a = w(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var u = e[a];
      u.tag === 6 ? (u = w(u), wm(u, n)) : w(u).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function vS(t, e) {
    return t = w(t), Nm(t, e), !1;
  }
  function Nm(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Tm(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = n[a];
        t.addEventListener(
          u.type,
          u.attachedListener,
          oi(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(o) {
      for (var h = 0, S = 0; S < gn.length; S++) {
        var z = gn[S];
        (z.fragmentInstance !== e || z.observer !== o || z.instance !== t) && (gn[h++] = z);
      }
      gn.length = h, o.observe(t);
    }), Nm(t, e));
  }
  function pS(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = n[a];
        t.removeEventListener(
          u.type,
          u.attachedListener,
          oi(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(o) {
      typeof o.rootMargin == "string" ? gS(
        e,
        o,
        t
      ) : o.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Bf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bf(n), za(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function xS(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Gl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (o = t.getAttribute("rel"), o === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (o !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (o = t.getAttribute("src"), (o !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && o && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === o)
          return t;
      } else return t;
      if (t = an(t.nextSibling), t === null) break;
    }
    return null;
  }
  function SS(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = an(t.nextSibling), t === null)) return null;
    return t;
  }
  function Cm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = an(t.nextSibling), t === null)) return null;
    return t;
  }
  function jf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Yf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function bS(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function an(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Vf = null;
  function zm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return an(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Mm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ES(t, e) {
    function n() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return a;
  }
  function _S(t) {
    mm(function() {
      mm(function(e) {
        return t(e);
      });
    });
  }
  function Am(t, e, n) {
    switch (e = gu(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Om(t, e, n) {
    for (var a in n) {
      var u = n[a];
      n.hasOwnProperty(a) && u != null && Xt(t, e, a, null, Wx, u);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Nn && (t.onclick = null), za(t);
  }
  function Lf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    za(t);
  }
  var un = /* @__PURE__ */ new Map(), Dm = /* @__PURE__ */ new Set();
  function mu(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var el = rt.d;
  rt.d = {
    f: wS,
    r: NS,
    D: TS,
    C: CS,
    L: zS,
    m: MS,
    X: OS,
    S: AS,
    M: DS
  };
  function wS() {
    var t = el.f(), e = fc();
    return t || e;
  }
  function NS(t) {
    var e = ul(t);
    e !== null && e.tag === 5 && e.type === "form" ? H0(e) : el.r(t);
  }
  var ci = typeof document > "u" ? null : document;
  function Rm(t, e, n) {
    var a = ci;
    if (a && typeof e == "string" && e) {
      var u = Fe(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), Dm.has(u) || (Dm.add(u), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(u) === null && (e = a.createElement("link"), ve(e, "link", t), ee(e), a.head.appendChild(e)));
    }
  }
  function TS(t) {
    el.D(t), Rm("dns-prefetch", t, null);
  }
  function CS(t, e) {
    el.C(t, e), Rm("preconnect", t, e);
  }
  function zS(t, e, n) {
    el.L(t, e, n);
    var a = ci;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + Fe(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + Fe(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + Fe(
        n.imageSizes
      ) + '"]')) : u += '[href="' + Fe(t) + '"]';
      var o = u;
      switch (e) {
        case "style":
          o = ri(t);
          break;
        case "script":
          o = si(t);
      }
      if (!(un.has(o) || (t = B(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), un.set(o, t), a.querySelector(u) !== null || e === "style" && a.querySelector(yu(o)) || e === "script" && a.querySelector(vu(o))))) {
        var h = a.createElement("link");
        ve(h, "link", t), e === "style" && (h[Ca] = !0, h.onload = h.onerror = function() {
          Di(h);
        }), ee(h), a.head.appendChild(h);
      }
    }
  }
  function MS(t, e) {
    el.m(t, e);
    var n = ci;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Fe(a) + '"][href="' + Fe(t) + '"]', o = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = si(t);
      }
      if (!un.has(o) && (t = B({ rel: "modulepreload", href: t }, e), un.set(o, t), n.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(vu(o)))
              return;
        }
        a = n.createElement("link"), ve(a, "link", t), ee(a), n.head.appendChild(a);
      }
    }
  }
  function AS(t, e, n) {
    el.S(t, e, n);
    var a = ci;
    if (a && t) {
      var u = qn(a).hoistableStyles, o = ri(t);
      e = e || "default";
      var h = u.get(o);
      if (!h) {
        var S = { loading: 0, preload: null };
        if (h = a.querySelector(
          yu(o)
        ))
          S.loading = 5;
        else {
          t = B(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = un.get(o)) && qf(t, n);
          var z = h = a.createElement("link");
          ee(z), ve(z, "link", t), z._p = new Promise(function(X, I) {
            z.onload = X, z.onerror = I;
          }), z.addEventListener("load", function() {
            S.loading |= 1;
          }), z.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, pc(h, e, a);
        }
        h = {
          type: "stylesheet",
          instance: h,
          count: 1,
          state: S
        }, u.set(o, h);
      }
    }
  }
  function OS(t, e) {
    el.X(t, e);
    var n = ci;
    if (n && t) {
      var a = qn(n).hoistableScripts, u = si(t), o = a.get(u);
      o || (o = n.querySelector(vu(u)), o || (t = B({ src: t, async: !0 }, e), (e = un.get(u)) && Xf(t, e), o = n.createElement("script"), ee(o), ve(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, a.set(u, o));
    }
  }
  function DS(t, e) {
    el.M(t, e);
    var n = ci;
    if (n && t) {
      var a = qn(n).hoistableScripts, u = si(t), o = a.get(u);
      o || (o = n.querySelector(vu(u)), o || (t = B({ src: t, async: !0, type: "module" }, e), (e = un.get(u)) && Xf(t, e), o = n.createElement("script"), ee(o), ve(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, a.set(u, o));
    }
  }
  function Hm(t, e, n, a) {
    var u = (u = re.current) ? mu(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = ri(n.href), e = qn(
          u
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ri(n.href);
          var o = qn(
            u
          ).hoistableStyles, h = o.get(t);
          if (h || (u = u.ownerDocument || u, h = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, o.set(t, h), (o = u.querySelector(
            yu(t)
          )) ? o._p || (h.instance = o, h.state.loading = 5) : (o = un.get(t), o || (o = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, un.set(t, o)), RS(
            u,
            t,
            o,
            h.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return h;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = si(n), e = qn(
          u
        ).hoistableScripts, a = e.get(n), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function ri(t) {
    return 'href="' + Fe(t) + '"';
  }
  function yu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Um(t) {
    return B({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function RS(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[Ca] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[Ca] = !0, e.onload = e.onerror = Di.bind(null, e), ve(e, "link", n), ee(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function si(t) {
    return '[src="' + Fe(t) + '"]';
  }
  function vu(t) {
    return "script[async]" + t;
  }
  function Bm(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Fe(n.href) + '"]'
          );
          if (a)
            return e.instance = a, ee(a), a;
          var u = B({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), ee(a), ve(a, "style", u), pc(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          u = ri(n.href);
          var o = t.querySelector(
            yu(u)
          );
          if (o)
            return e.state.loading |= 4, e.instance = o, ee(o), o;
          a = Um(n), (u = un.get(u)) && qf(a, u), o = (t.ownerDocument || t).createElement("link"), ee(o);
          var h = o;
          return h._p = new Promise(function(S, z) {
            h.onload = S, h.onerror = z;
          }), ve(o, "link", a), e.state.loading |= 4, pc(o, n.precedence, t), e.instance = o;
        case "script":
          return o = si(n.src), (u = t.querySelector(
            vu(o)
          )) ? (e.instance = u, ee(u), u) : (a = n, (u = un.get(o)) && (a = B({}, n), Xf(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), ee(u), ve(u, "link", a), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, pc(a, n.precedence, t));
    return e.instance;
  }
  function pc(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, o = u, h = 0; h < a.length; h++) {
      var S = a[h];
      if (S.dataset.precedence === e) o = S;
      else if (o !== u) break;
    }
    o ? o.parentNode.insertBefore(t, o.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function qf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Xf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var xc = null;
  function jm(t, e, n) {
    if (xc === null) {
      var a = /* @__PURE__ */ new Map(), u = xc = /* @__PURE__ */ new Map();
      u.set(n, a);
    } else
      u = xc, a = u.get(n), a || (a = /* @__PURE__ */ new Map(), u.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var o = n[u];
      if (!(o[Gl] || o[oe] || t === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = o.getAttribute(e) || "";
        h = t + h;
        var S = a.get(h);
        S ? S.push(o) : a.set(h, [o]);
      }
    }
    return a;
  }
  function Zf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function HS(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Ym(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Vm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Lm(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function qm(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Lm(e), t.suspenseyImages.push(e)), t = jS.bind(t), e.decode().then(t, t));
  }
  function US(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = ri(a.href), o = e.querySelector(
          yu(u)
        );
        if (o) {
          e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = pu.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = o, ee(o);
          return;
        }
        o = e.ownerDocument || e, a = Um(a), (u = un.get(u)) && qf(a, u), o = o.createElement("link"), ee(o);
        var h = o;
        h._p = new Promise(function(S, z) {
          h.onload = S, h.onerror = z;
        }), ve(o, "link", a), n.instance = o;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = pu.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Sc = 0;
  function BS(t, e) {
    return t.stylesheets && t.count === 0 && Ec(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Ec(t, t.stylesheets), t.unsuspend) {
          var o = t.unsuspend;
          t.unsuspend = null, o();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Sc === 0 && (Sc = 62500 * tS());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ec(t, t.stylesheets), t.unsuspend)) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        },
        (t.imgBytes > Sc ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Xm(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Ec(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function pu() {
    this.count--, Xm(this);
  }
  function jS() {
    this.imgCount--, Xm(this);
  }
  var bc = null;
  function Ec(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, bc = /* @__PURE__ */ new Map(), e.forEach(YS, t), bc = null, pu.call(t));
  }
  function YS(t, e) {
    if (!(e.state.loading & 4)) {
      var n = bc.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), bc.set(t, n);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), o = 0; o < u.length; o++) {
          var h = u[o];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), a = h);
        }
        a && n.set(null, a);
      }
      u = e.instance, h = u.getAttribute("data-precedence"), o = n.get(h) || a, o === a && n.set(null, u), n.set(h, u), this.count++, a = pu.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), o ? o.parentNode.insertBefore(u, o.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var fi = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: xt,
    _currentValue2: xt,
    _threadCount: 0
  };
  function VS(t, e, n, a, u, o, h, S, z) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ai(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ai(0), this.hiddenUpdates = Ai(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = o, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = z, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zm(t, e, n, a, u, o, h, S, z, X, I, at) {
    return t = new VS(
      t,
      e,
      n,
      h,
      z,
      X,
      I,
      at,
      S
    ), e = 1, o === !0 && (e |= 24), o = De(3, null, null, e), t.current = o, o.stateNode = t, e = ls(), e.refCount++, t.pooledCache = e, e.refCount++, o.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, os(o), t;
  }
  function Gm(t) {
    return t ? (t = ja, t) : ja;
  }
  function Qm(t, e, n, a, u, o) {
    u = Gm(u), a.context === null ? a.context = u : a.pendingContext = u, a = yl(e), a.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (a.callback = o), n = vl(t, a, e), n !== null && (Be(n, t, e), ki(n, t, e));
  }
  function Km(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Gf(t, e) {
    Km(t, e), (t = t.alternate) && Km(t, e);
  }
  function $m(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Jl(t, 67108864);
      e !== null && Be(e, t, 67108864), Gf(t, 67108864);
    }
  }
  function Jm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Qe();
      e = Ta(e);
      var n = Jl(t, e);
      n !== null && Be(n, t, e), Gf(t, e);
    }
  }
  var di = !0;
  function LS(t, e, n, a) {
    var u = ct.T;
    ct.T = null;
    var o = rt.p;
    try {
      rt.p = 2, Qf(t, e, n, a);
    } finally {
      rt.p = o, ct.T = u;
    }
  }
  function qS(t, e, n, a) {
    var u = ct.T;
    ct.T = null;
    var o = rt.p;
    try {
      rt.p = 8, Qf(t, e, n, a);
    } finally {
      rt.p = o, ct.T = u;
    }
  }
  function Qf(t, e, n, a) {
    if (di) {
      var u = Kf(a);
      if (u === null)
        Tf(
          t,
          e,
          a,
          _c,
          n
        ), Im(t, a);
      else if (ZS(
        u,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (Im(t, a), e & 4 && -1 < XS.indexOf(t)) {
        for (; u !== null; ) {
          var o = ul(u);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                  var h = Vn(o.pendingLanes);
                  if (h !== 0) {
                    var S = o;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; h; ) {
                      var z = 1 << 31 - Ne(h);
                      S.entanglements[1] |= z, h &= ~z;
                    }
                    Un(o), (Yt & 6) === 0 && (cc = _e() + 500, fu(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = Jl(o, 2), S !== null && Be(S, o, 2), fc(), Gf(o, 2);
            }
          if (o = Kf(a), o === null && Tf(
            t,
            e,
            a,
            _c,
            n
          ), o === u) break;
          u = o;
        }
        u !== null && a.stopPropagation();
      } else
        Tf(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Kf(t) {
    return t = Ar(t), $f(t);
  }
  var _c = null;
  function $f(t) {
    if (_c = null, t = Ln(t), t !== null) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = g(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return _c = t, null;
  }
  function km(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (mr()) {
          case Ju:
            return 2;
          case ku:
            return 8;
          case ba:
          case yr:
            return 32;
          case Iu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jf = !1, Ml = null, Al = null, Ol = null, xu = /* @__PURE__ */ new Map(), Su = /* @__PURE__ */ new Map(), Dl = [], XS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Im(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ml = null;
        break;
      case "dragenter":
      case "dragleave":
        Al = null;
        break;
      case "mouseover":
      case "mouseout":
        Ol = null;
        break;
      case "pointerover":
      case "pointerout":
        xu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Su.delete(e.pointerId);
    }
  }
  function bu(t, e, n, a, u, o) {
    return t === null || t.nativeEvent !== o ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: o,
      targetContainers: [u]
    }, e !== null && (e = ul(e), e !== null && $m(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function ZS(t, e, n, a, u) {
    switch (e) {
      case "focusin":
        return Ml = bu(
          Ml,
          t,
          e,
          n,
          a,
          u
        ), !0;
      case "dragenter":
        return Al = bu(
          Al,
          t,
          e,
          n,
          a,
          u
        ), !0;
      case "mouseover":
        return Ol = bu(
          Ol,
          t,
          e,
          n,
          a,
          u
        ), !0;
      case "pointerover":
        var o = u.pointerId;
        return xu.set(
          o,
          bu(
            xu.get(o) || null,
            t,
            e,
            n,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return o = u.pointerId, Su.set(
          o,
          bu(
            Su.get(o) || null,
            t,
            e,
            n,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Fm(t) {
    var e = Ln(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, no(t.priority, function() {
              Jm(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = g(n), e !== null) {
            t.blockedOn = e, no(t.priority, function() {
              Jm(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function wc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Kf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Mr = a, n.target.dispatchEvent(a), Mr = null;
      } else
        return e = ul(n), e !== null && $m(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Wm(t, e, n) {
    wc(t) && n.delete(e);
  }
  function GS() {
    Jf = !1, Ml !== null && wc(Ml) && (Ml = null), Al !== null && wc(Al) && (Al = null), Ol !== null && wc(Ol) && (Ol = null), xu.forEach(Wm), Su.forEach(Wm);
  }
  function Nc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Jf || (Jf = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      GS
    )));
  }
  var Tc = null;
  function Pm(t) {
    Tc !== t && (Tc = t, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        Tc === t && (Tc = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], u = t[e + 2];
          if (typeof a != "function") {
            if ($f(a || n) === null)
              continue;
            break;
          }
          var o = ul(n);
          o !== null && (t.splice(e, 3), e -= 3, zs(
            o,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function hi(t) {
    function e(z) {
      return Nc(z, t);
    }
    Ml !== null && Nc(Ml, t), Al !== null && Nc(Al, t), Ol !== null && Nc(Ol, t), xu.forEach(e), Su.forEach(e);
    for (var n = 0; n < Dl.length; n++) {
      var a = Dl[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Dl.length && (n = Dl[0], n.blockedOn === null); )
      Fm(n), n.blockedOn === null && Dl.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var u = n[a], o = n[a + 1], h = u[Se] || null;
        if (typeof o == "function")
          h || Pm(n);
        else if (h) {
          var S = null;
          if (o && o.hasAttribute("formAction")) {
            if (u = o, h = o[Se] || null)
              S = h.formAction;
            else if ($f(u) !== null) continue;
          } else S = h.action;
          typeof S == "function" ? n[a + 1] = S : (n.splice(a, 3), a -= 3), Pm(n);
        }
      }
  }
  function ty() {
    function t(o) {
      o.canIntercept && o.info === "react-transition" && o.intercept({
        handler: function() {
          return new Promise(function(h) {
            return u = h;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var o = navigation.currentEntry;
        o && o.url != null && navigation.navigate(o.url, {
          state: o.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function kf(t) {
    this._internalRoot = t;
  }
  Cc.prototype.render = kf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, a = Qe();
    Qm(n, a, t, e, null, null);
  }, Cc.prototype.unmount = kf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Qm(t.current, 2, null, t, null, null), fc(), e[il] = null;
    }
  };
  function Cc(t) {
    this._internalRoot = t;
  }
  Cc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = eo();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Dl.length && e !== 0 && e < Dl[n].priority; n++) ;
      Dl.splice(n, 0, t), n === 0 && Fm(t);
    }
  };
  var ey = i.version;
  if (ey !== "19.3.0")
    throw Error(
      r(
        527,
        ey,
        "19.3.0"
      )
    );
  rt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = x(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var QS = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ct,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zc.isDisabled && zc.supportsFiber)
      try {
        ql = zc.inject(
          QS
        ), we = zc;
      } catch {
      }
  }
  return _u.createRoot = function(t, e) {
    if (!s(t)) throw Error(r(299));
    var n = !1, a = "", u = G0, o = Q0, h = K0;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (o = e.onCaughtError), e.onRecoverableError !== void 0 && (h = e.onRecoverableError)), e = Zm(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      u,
      o,
      h,
      ty
    ), t[il] = e.current, Nf(t), new kf(e);
  }, _u.hydrateRoot = function(t, e, n) {
    if (!s(t)) throw Error(r(299));
    var a = !1, u = "", o = G0, h = Q0, S = K0, z = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (S = n.onRecoverableError), n.formState !== void 0 && (z = n.formState)), e = Zm(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      u,
      z,
      o,
      h,
      S,
      ty
    ), e.context = Gm(null), n = e.current, a = Qe(), a = Ta(a), u = yl(a), u.callback = null, vl(n, u, a), n = a, e.current.lanes = n, Zl(e, n), Un(e), t[il] = e.current, Nf(t), new Cc(e);
  }, _u.version = "19.3.0", _u;
}
var fy;
function tb() {
  if (fy) return Ff.exports;
  fy = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), Ff.exports = PS(), Ff.exports;
}
var eb = tb(), et = Vu();
const nb = /* @__PURE__ */ _v(et);
function ue(l) {
  if (typeof l == "string" || typeof l == "number") return "" + l;
  let i = "";
  if (Array.isArray(l))
    for (let c = 0, r; c < l.length; c++)
      (r = ue(l[c])) !== "" && (i += (i && " ") + r);
  else
    for (let c in l)
      l[c] && (i += (i && " ") + c);
  return i;
}
var lb = { value: () => {
} };
function er() {
  for (var l = 0, i = arguments.length, c = {}, r; l < i; ++l) {
    if (!(r = arguments[l] + "") || r in c || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    c[r] = [];
  }
  return new Vc(c);
}
function Vc(l) {
  this._ = l;
}
function ab(l, i) {
  return l.trim().split(/^|\s+/).map(function(c) {
    var r = "", s = c.indexOf(".");
    if (s >= 0 && (r = c.slice(s + 1), c = c.slice(0, s)), c && !i.hasOwnProperty(c)) throw new Error("unknown type: " + c);
    return { type: c, name: r };
  });
}
Vc.prototype = er.prototype = {
  constructor: Vc,
  on: function(l, i) {
    var c = this._, r = ab(l + "", c), s, f = -1, d = r.length;
    if (arguments.length < 2) {
      for (; ++f < d; ) if ((s = (l = r[f]).type) && (s = ib(c[s], l.name))) return s;
      return;
    }
    if (i != null && typeof i != "function") throw new Error("invalid callback: " + i);
    for (; ++f < d; )
      if (s = (l = r[f]).type) c[s] = dy(c[s], l.name, i);
      else if (i == null) for (s in c) c[s] = dy(c[s], l.name, null);
    return this;
  },
  copy: function() {
    var l = {}, i = this._;
    for (var c in i) l[c] = i[c].slice();
    return new Vc(l);
  },
  call: function(l, i) {
    if ((s = arguments.length - 2) > 0) for (var c = new Array(s), r = 0, s, f; r < s; ++r) c[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(l)) throw new Error("unknown type: " + l);
    for (f = this._[l], r = 0, s = f.length; r < s; ++r) f[r].value.apply(i, c);
  },
  apply: function(l, i, c) {
    if (!this._.hasOwnProperty(l)) throw new Error("unknown type: " + l);
    for (var r = this._[l], s = 0, f = r.length; s < f; ++s) r[s].value.apply(i, c);
  }
};
function ib(l, i) {
  for (var c = 0, r = l.length, s; c < r; ++c)
    if ((s = l[c]).name === i)
      return s.value;
}
function dy(l, i, c) {
  for (var r = 0, s = l.length; r < s; ++r)
    if (l[r].name === i) {
      l[r] = lb, l = l.slice(0, r).concat(l.slice(r + 1));
      break;
    }
  return c != null && l.push({ name: i, value: c }), l;
}
var md = "http://www.w3.org/1999/xhtml";
const hy = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: md,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function nr(l) {
  var i = l += "", c = i.indexOf(":");
  return c >= 0 && (i = l.slice(0, c)) !== "xmlns" && (l = l.slice(c + 1)), hy.hasOwnProperty(i) ? { space: hy[i], local: l } : l;
}
function ub(l) {
  return function() {
    var i = this.ownerDocument, c = this.namespaceURI;
    return c === md && i.documentElement.namespaceURI === md ? i.createElement(l) : i.createElementNS(c, l);
  };
}
function ob(l) {
  return function() {
    return this.ownerDocument.createElementNS(l.space, l.local);
  };
}
function Nv(l) {
  var i = nr(l);
  return (i.local ? ob : ub)(i);
}
function cb() {
}
function Ad(l) {
  return l == null ? cb : function() {
    return this.querySelector(l);
  };
}
function rb(l) {
  typeof l != "function" && (l = Ad(l));
  for (var i = this._groups, c = i.length, r = new Array(c), s = 0; s < c; ++s)
    for (var f = i[s], d = f.length, g = r[s] = new Array(d), p, x, v = 0; v < d; ++v)
      (p = f[v]) && (x = l.call(p, p.__data__, v, f)) && ("__data__" in p && (x.__data__ = p.__data__), g[v] = x);
  return new Je(r, this._parents);
}
function sb(l) {
  return l == null ? [] : Array.isArray(l) ? l : Array.from(l);
}
function fb() {
  return [];
}
function Tv(l) {
  return l == null ? fb : function() {
    return this.querySelectorAll(l);
  };
}
function db(l) {
  return function() {
    return sb(l.apply(this, arguments));
  };
}
function hb(l) {
  typeof l == "function" ? l = db(l) : l = Tv(l);
  for (var i = this._groups, c = i.length, r = [], s = [], f = 0; f < c; ++f)
    for (var d = i[f], g = d.length, p, x = 0; x < g; ++x)
      (p = d[x]) && (r.push(l.call(p, p.__data__, x, d)), s.push(p));
  return new Je(r, s);
}
function Cv(l) {
  return function() {
    return this.matches(l);
  };
}
function zv(l) {
  return function(i) {
    return i.matches(l);
  };
}
var gb = Array.prototype.find;
function mb(l) {
  return function() {
    return gb.call(this.children, l);
  };
}
function yb() {
  return this.firstElementChild;
}
function vb(l) {
  return this.select(l == null ? yb : mb(typeof l == "function" ? l : zv(l)));
}
var pb = Array.prototype.filter;
function xb() {
  return Array.from(this.children);
}
function Sb(l) {
  return function() {
    return pb.call(this.children, l);
  };
}
function bb(l) {
  return this.selectAll(l == null ? xb : Sb(typeof l == "function" ? l : zv(l)));
}
function Eb(l) {
  typeof l != "function" && (l = Cv(l));
  for (var i = this._groups, c = i.length, r = new Array(c), s = 0; s < c; ++s)
    for (var f = i[s], d = f.length, g = r[s] = [], p, x = 0; x < d; ++x)
      (p = f[x]) && l.call(p, p.__data__, x, f) && g.push(p);
  return new Je(r, this._parents);
}
function Mv(l) {
  return new Array(l.length);
}
function _b() {
  return new Je(this._enter || this._groups.map(Mv), this._parents);
}
function Gc(l, i) {
  this.ownerDocument = l.ownerDocument, this.namespaceURI = l.namespaceURI, this._next = null, this._parent = l, this.__data__ = i;
}
Gc.prototype = {
  constructor: Gc,
  appendChild: function(l) {
    return this._parent.insertBefore(l, this._next);
  },
  insertBefore: function(l, i) {
    return this._parent.insertBefore(l, i);
  },
  querySelector: function(l) {
    return this._parent.querySelector(l);
  },
  querySelectorAll: function(l) {
    return this._parent.querySelectorAll(l);
  }
};
function wb(l) {
  return function() {
    return l;
  };
}
function Nb(l, i, c, r, s, f) {
  for (var d = 0, g, p = i.length, x = f.length; d < x; ++d)
    (g = i[d]) ? (g.__data__ = f[d], r[d] = g) : c[d] = new Gc(l, f[d]);
  for (; d < p; ++d)
    (g = i[d]) && (s[d] = g);
}
function Tb(l, i, c, r, s, f, d) {
  var g, p, x = /* @__PURE__ */ new Map(), v = i.length, m = f.length, y = new Array(v), b;
  for (g = 0; g < v; ++g)
    (p = i[g]) && (y[g] = b = d.call(p, p.__data__, g, i) + "", x.has(b) ? s[g] = p : x.set(b, p));
  for (g = 0; g < m; ++g)
    b = d.call(l, f[g], g, f) + "", (p = x.get(b)) ? (r[g] = p, p.__data__ = f[g], x.delete(b)) : c[g] = new Gc(l, f[g]);
  for (g = 0; g < v; ++g)
    (p = i[g]) && x.get(y[g]) === p && (s[g] = p);
}
function Cb(l) {
  return l.__data__;
}
function zb(l, i) {
  if (!arguments.length) return Array.from(this, Cb);
  var c = i ? Tb : Nb, r = this._parents, s = this._groups;
  typeof l != "function" && (l = wb(l));
  for (var f = s.length, d = new Array(f), g = new Array(f), p = new Array(f), x = 0; x < f; ++x) {
    var v = r[x], m = s[x], y = m.length, b = Mb(l.call(v, v && v.__data__, x, r)), E = b.length, M = g[x] = new Array(E), w = d[x] = new Array(E), N = p[x] = new Array(y);
    c(v, m, M, w, N, b, i);
    for (var U = 0, _ = 0, A, G; U < E; ++U)
      if (A = M[U]) {
        for (U >= _ && (_ = U + 1); !(G = w[_]) && ++_ < E; ) ;
        A._next = G || null;
      }
  }
  return d = new Je(d, r), d._enter = g, d._exit = p, d;
}
function Mb(l) {
  return typeof l == "object" && "length" in l ? l : Array.from(l);
}
function Ab() {
  return new Je(this._exit || this._groups.map(Mv), this._parents);
}
function Ob(l, i, c) {
  var r = this.enter(), s = this, f = this.exit();
  return typeof l == "function" ? (r = l(r), r && (r = r.selection())) : r = r.append(l + ""), i != null && (s = i(s), s && (s = s.selection())), c == null ? f.remove() : c(f), r && s ? r.merge(s).order() : s;
}
function Db(l) {
  for (var i = l.selection ? l.selection() : l, c = this._groups, r = i._groups, s = c.length, f = r.length, d = Math.min(s, f), g = new Array(s), p = 0; p < d; ++p)
    for (var x = c[p], v = r[p], m = x.length, y = g[p] = new Array(m), b, E = 0; E < m; ++E)
      (b = x[E] || v[E]) && (y[E] = b);
  for (; p < s; ++p)
    g[p] = c[p];
  return new Je(g, this._parents);
}
function Rb() {
  for (var l = this._groups, i = -1, c = l.length; ++i < c; )
    for (var r = l[i], s = r.length - 1, f = r[s], d; --s >= 0; )
      (d = r[s]) && (f && d.compareDocumentPosition(f) ^ 4 && f.parentNode.insertBefore(d, f), f = d);
  return this;
}
function Hb(l) {
  l || (l = Ub);
  function i(m, y) {
    return m && y ? l(m.__data__, y.__data__) : !m - !y;
  }
  for (var c = this._groups, r = c.length, s = new Array(r), f = 0; f < r; ++f) {
    for (var d = c[f], g = d.length, p = s[f] = new Array(g), x, v = 0; v < g; ++v)
      (x = d[v]) && (p[v] = x);
    p.sort(i);
  }
  return new Je(s, this._parents).order();
}
function Ub(l, i) {
  return l < i ? -1 : l > i ? 1 : l >= i ? 0 : NaN;
}
function Bb() {
  var l = arguments[0];
  return arguments[0] = this, l.apply(null, arguments), this;
}
function jb() {
  return Array.from(this);
}
function Yb() {
  for (var l = this._groups, i = 0, c = l.length; i < c; ++i)
    for (var r = l[i], s = 0, f = r.length; s < f; ++s) {
      var d = r[s];
      if (d) return d;
    }
  return null;
}
function Vb() {
  let l = 0;
  for (const i of this) ++l;
  return l;
}
function Lb() {
  return !this.node();
}
function qb(l) {
  for (var i = this._groups, c = 0, r = i.length; c < r; ++c)
    for (var s = i[c], f = 0, d = s.length, g; f < d; ++f)
      (g = s[f]) && l.call(g, g.__data__, f, s);
  return this;
}
function Xb(l) {
  return function() {
    this.removeAttribute(l);
  };
}
function Zb(l) {
  return function() {
    this.removeAttributeNS(l.space, l.local);
  };
}
function Gb(l, i) {
  return function() {
    this.setAttribute(l, i);
  };
}
function Qb(l, i) {
  return function() {
    this.setAttributeNS(l.space, l.local, i);
  };
}
function Kb(l, i) {
  return function() {
    var c = i.apply(this, arguments);
    c == null ? this.removeAttribute(l) : this.setAttribute(l, c);
  };
}
function $b(l, i) {
  return function() {
    var c = i.apply(this, arguments);
    c == null ? this.removeAttributeNS(l.space, l.local) : this.setAttributeNS(l.space, l.local, c);
  };
}
function Jb(l, i) {
  var c = nr(l);
  if (arguments.length < 2) {
    var r = this.node();
    return c.local ? r.getAttributeNS(c.space, c.local) : r.getAttribute(c);
  }
  return this.each((i == null ? c.local ? Zb : Xb : typeof i == "function" ? c.local ? $b : Kb : c.local ? Qb : Gb)(c, i));
}
function Av(l) {
  return l.ownerDocument && l.ownerDocument.defaultView || l.document && l || l.defaultView;
}
function kb(l) {
  return function() {
    this.style.removeProperty(l);
  };
}
function Ib(l, i, c) {
  return function() {
    this.style.setProperty(l, i, c);
  };
}
function Fb(l, i, c) {
  return function() {
    var r = i.apply(this, arguments);
    r == null ? this.style.removeProperty(l) : this.style.setProperty(l, r, c);
  };
}
function Wb(l, i, c) {
  return arguments.length > 1 ? this.each((i == null ? kb : typeof i == "function" ? Fb : Ib)(l, i, c ?? "")) : pi(this.node(), l);
}
function pi(l, i) {
  return l.style.getPropertyValue(i) || Av(l).getComputedStyle(l, null).getPropertyValue(i);
}
function Pb(l) {
  return function() {
    delete this[l];
  };
}
function tE(l, i) {
  return function() {
    this[l] = i;
  };
}
function eE(l, i) {
  return function() {
    var c = i.apply(this, arguments);
    c == null ? delete this[l] : this[l] = c;
  };
}
function nE(l, i) {
  return arguments.length > 1 ? this.each((i == null ? Pb : typeof i == "function" ? eE : tE)(l, i)) : this.node()[l];
}
function Ov(l) {
  return l.trim().split(/^|\s+/);
}
function Od(l) {
  return l.classList || new Dv(l);
}
function Dv(l) {
  this._node = l, this._names = Ov(l.getAttribute("class") || "");
}
Dv.prototype = {
  add: function(l) {
    var i = this._names.indexOf(l);
    i < 0 && (this._names.push(l), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(l) {
    var i = this._names.indexOf(l);
    i >= 0 && (this._names.splice(i, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(l) {
    return this._names.indexOf(l) >= 0;
  }
};
function Rv(l, i) {
  for (var c = Od(l), r = -1, s = i.length; ++r < s; ) c.add(i[r]);
}
function Hv(l, i) {
  for (var c = Od(l), r = -1, s = i.length; ++r < s; ) c.remove(i[r]);
}
function lE(l) {
  return function() {
    Rv(this, l);
  };
}
function aE(l) {
  return function() {
    Hv(this, l);
  };
}
function iE(l, i) {
  return function() {
    (i.apply(this, arguments) ? Rv : Hv)(this, l);
  };
}
function uE(l, i) {
  var c = Ov(l + "");
  if (arguments.length < 2) {
    for (var r = Od(this.node()), s = -1, f = c.length; ++s < f; ) if (!r.contains(c[s])) return !1;
    return !0;
  }
  return this.each((typeof i == "function" ? iE : i ? lE : aE)(c, i));
}
function oE() {
  this.textContent = "";
}
function cE(l) {
  return function() {
    this.textContent = l;
  };
}
function rE(l) {
  return function() {
    var i = l.apply(this, arguments);
    this.textContent = i ?? "";
  };
}
function sE(l) {
  return arguments.length ? this.each(l == null ? oE : (typeof l == "function" ? rE : cE)(l)) : this.node().textContent;
}
function fE() {
  this.innerHTML = "";
}
function dE(l) {
  return function() {
    this.innerHTML = l;
  };
}
function hE(l) {
  return function() {
    var i = l.apply(this, arguments);
    this.innerHTML = i ?? "";
  };
}
function gE(l) {
  return arguments.length ? this.each(l == null ? fE : (typeof l == "function" ? hE : dE)(l)) : this.node().innerHTML;
}
function mE() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function yE() {
  return this.each(mE);
}
function vE() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function pE() {
  return this.each(vE);
}
function xE(l) {
  var i = typeof l == "function" ? l : Nv(l);
  return this.select(function() {
    return this.appendChild(i.apply(this, arguments));
  });
}
function SE() {
  return null;
}
function bE(l, i) {
  var c = typeof l == "function" ? l : Nv(l), r = i == null ? SE : typeof i == "function" ? i : Ad(i);
  return this.select(function() {
    return this.insertBefore(c.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function EE() {
  var l = this.parentNode;
  l && l.removeChild(this);
}
function _E() {
  return this.each(EE);
}
function wE() {
  var l = this.cloneNode(!1), i = this.parentNode;
  return i ? i.insertBefore(l, this.nextSibling) : l;
}
function NE() {
  var l = this.cloneNode(!0), i = this.parentNode;
  return i ? i.insertBefore(l, this.nextSibling) : l;
}
function TE(l) {
  return this.select(l ? NE : wE);
}
function CE(l) {
  return arguments.length ? this.property("__data__", l) : this.node().__data__;
}
function zE(l) {
  return function(i) {
    l.call(this, i, this.__data__);
  };
}
function ME(l) {
  return l.trim().split(/^|\s+/).map(function(i) {
    var c = "", r = i.indexOf(".");
    return r >= 0 && (c = i.slice(r + 1), i = i.slice(0, r)), { type: i, name: c };
  });
}
function AE(l) {
  return function() {
    var i = this.__on;
    if (i) {
      for (var c = 0, r = -1, s = i.length, f; c < s; ++c)
        f = i[c], (!l.type || f.type === l.type) && f.name === l.name ? this.removeEventListener(f.type, f.listener, f.options) : i[++r] = f;
      ++r ? i.length = r : delete this.__on;
    }
  };
}
function OE(l, i, c) {
  return function() {
    var r = this.__on, s, f = zE(i);
    if (r) {
      for (var d = 0, g = r.length; d < g; ++d)
        if ((s = r[d]).type === l.type && s.name === l.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = f, s.options = c), s.value = i;
          return;
        }
    }
    this.addEventListener(l.type, f, c), s = { type: l.type, name: l.name, value: i, listener: f, options: c }, r ? r.push(s) : this.__on = [s];
  };
}
function DE(l, i, c) {
  var r = ME(l + ""), s, f = r.length, d;
  if (arguments.length < 2) {
    var g = this.node().__on;
    if (g) {
      for (var p = 0, x = g.length, v; p < x; ++p)
        for (s = 0, v = g[p]; s < f; ++s)
          if ((d = r[s]).type === v.type && d.name === v.name)
            return v.value;
    }
    return;
  }
  for (g = i ? OE : AE, s = 0; s < f; ++s) this.each(g(r[s], i, c));
  return this;
}
function Uv(l, i, c) {
  var r = Av(l), s = r.CustomEvent;
  typeof s == "function" ? s = new s(i, c) : (s = r.document.createEvent("Event"), c ? (s.initEvent(i, c.bubbles, c.cancelable), s.detail = c.detail) : s.initEvent(i, !1, !1)), l.dispatchEvent(s);
}
function RE(l, i) {
  return function() {
    return Uv(this, l, i);
  };
}
function HE(l, i) {
  return function() {
    return Uv(this, l, i.apply(this, arguments));
  };
}
function UE(l, i) {
  return this.each((typeof i == "function" ? HE : RE)(l, i));
}
function* BE() {
  for (var l = this._groups, i = 0, c = l.length; i < c; ++i)
    for (var r = l[i], s = 0, f = r.length, d; s < f; ++s)
      (d = r[s]) && (yield d);
}
var Bv = [null];
function Je(l, i) {
  this._groups = l, this._parents = i;
}
function Lu() {
  return new Je([[document.documentElement]], Bv);
}
function jE() {
  return this;
}
Je.prototype = Lu.prototype = {
  constructor: Je,
  select: rb,
  selectAll: hb,
  selectChild: vb,
  selectChildren: bb,
  filter: Eb,
  data: zb,
  enter: _b,
  exit: Ab,
  join: Ob,
  merge: Db,
  selection: jE,
  order: Rb,
  sort: Hb,
  call: Bb,
  nodes: jb,
  node: Yb,
  size: Vb,
  empty: Lb,
  each: qb,
  attr: Jb,
  style: Wb,
  property: nE,
  classed: uE,
  text: sE,
  html: gE,
  raise: yE,
  lower: pE,
  append: xE,
  insert: bE,
  remove: _E,
  clone: TE,
  datum: CE,
  on: DE,
  dispatch: UE,
  [Symbol.iterator]: BE
};
function $e(l) {
  return typeof l == "string" ? new Je([[document.querySelector(l)]], [document.documentElement]) : new Je([[l]], Bv);
}
function YE(l) {
  let i;
  for (; i = l.sourceEvent; ) l = i;
  return l;
}
function mn(l, i) {
  if (l = YE(l), i === void 0 && (i = l.currentTarget), i) {
    var c = i.ownerSVGElement || i;
    if (c.createSVGPoint) {
      var r = c.createSVGPoint();
      return r.x = l.clientX, r.y = l.clientY, r = r.matrixTransform(i.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (i.getBoundingClientRect) {
      var s = i.getBoundingClientRect();
      return [l.clientX - s.left - i.clientLeft, l.clientY - s.top - i.clientTop];
    }
  }
  return [l.pageX, l.pageY];
}
const VE = { passive: !1 }, Au = { capture: !0, passive: !1 };
function nd(l) {
  l.stopImmediatePropagation();
}
function yi(l) {
  l.preventDefault(), l.stopImmediatePropagation();
}
function jv(l) {
  var i = l.document.documentElement, c = $e(l).on("dragstart.drag", yi, Au);
  "onselectstart" in i ? c.on("selectstart.drag", yi, Au) : (i.__noselect = i.style.MozUserSelect, i.style.MozUserSelect = "none");
}
function Yv(l, i) {
  var c = l.document.documentElement, r = $e(l).on("dragstart.drag", null);
  i && (r.on("click.drag", yi, Au), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in c ? r.on("selectstart.drag", null) : (c.style.MozUserSelect = c.__noselect, delete c.__noselect);
}
const Mc = (l) => () => l;
function yd(l, {
  sourceEvent: i,
  subject: c,
  target: r,
  identifier: s,
  active: f,
  x: d,
  y: g,
  dx: p,
  dy: x,
  dispatch: v
}) {
  Object.defineProperties(this, {
    type: { value: l, enumerable: !0, configurable: !0 },
    sourceEvent: { value: i, enumerable: !0, configurable: !0 },
    subject: { value: c, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: s, enumerable: !0, configurable: !0 },
    active: { value: f, enumerable: !0, configurable: !0 },
    x: { value: d, enumerable: !0, configurable: !0 },
    y: { value: g, enumerable: !0, configurable: !0 },
    dx: { value: p, enumerable: !0, configurable: !0 },
    dy: { value: x, enumerable: !0, configurable: !0 },
    _: { value: v }
  });
}
yd.prototype.on = function() {
  var l = this._.on.apply(this._, arguments);
  return l === this._ ? this : l;
};
function LE(l) {
  return !l.ctrlKey && !l.button;
}
function qE() {
  return this.parentNode;
}
function XE(l, i) {
  return i ?? { x: l.x, y: l.y };
}
function ZE() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Vv() {
  var l = LE, i = qE, c = XE, r = ZE, s = {}, f = er("start", "drag", "end"), d = 0, g, p, x, v, m = 0;
  function y(A) {
    A.on("mousedown.drag", b).filter(r).on("touchstart.drag", w).on("touchmove.drag", N, VE).on("touchend.drag touchcancel.drag", U).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function b(A, G) {
    if (!(v || !l.call(this, A, G))) {
      var V = _(this, i.call(this, A, G), A, G, "mouse");
      V && ($e(A.view).on("mousemove.drag", E, Au).on("mouseup.drag", M, Au), jv(A.view), nd(A), x = !1, g = A.clientX, p = A.clientY, V("start", A));
    }
  }
  function E(A) {
    if (yi(A), !x) {
      var G = A.clientX - g, V = A.clientY - p;
      x = G * G + V * V > m;
    }
    s.mouse("drag", A);
  }
  function M(A) {
    $e(A.view).on("mousemove.drag mouseup.drag", null), Yv(A.view, x), yi(A), s.mouse("end", A);
  }
  function w(A, G) {
    if (l.call(this, A, G)) {
      var V = A.changedTouches, B = i.call(this, A, G), Q = V.length, F, ut;
      for (F = 0; F < Q; ++F)
        (ut = _(this, B, A, G, V[F].identifier, V[F])) && (nd(A), ut("start", A, V[F]));
    }
  }
  function N(A) {
    var G = A.changedTouches, V = G.length, B, Q;
    for (B = 0; B < V; ++B)
      (Q = s[G[B].identifier]) && (yi(A), Q("drag", A, G[B]));
  }
  function U(A) {
    var G = A.changedTouches, V = G.length, B, Q;
    for (v && clearTimeout(v), v = setTimeout(function() {
      v = null;
    }, 500), B = 0; B < V; ++B)
      (Q = s[G[B].identifier]) && (nd(A), Q("end", A, G[B]));
  }
  function _(A, G, V, B, Q, F) {
    var ut = f.copy(), D = mn(F || V, G), J, W, C;
    if ((C = c.call(A, new yd("beforestart", {
      sourceEvent: V,
      target: y,
      identifier: Q,
      active: d,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: ut
    }), B)) != null)
      return J = C.x - D[0] || 0, W = C.y - D[1] || 0, function Y(O, j, Z) {
        var k = D, nt;
        switch (O) {
          case "start":
            s[Q] = Y, nt = d++;
            break;
          case "end":
            delete s[Q], --d;
          // falls through
          case "drag":
            D = mn(Z || j, G), nt = d;
            break;
        }
        ut.call(
          O,
          A,
          new yd(O, {
            sourceEvent: j,
            subject: C,
            target: y,
            identifier: Q,
            active: nt,
            x: D[0] + J,
            y: D[1] + W,
            dx: D[0] - k[0],
            dy: D[1] - k[1],
            dispatch: ut
          }),
          B
        );
      };
  }
  return y.filter = function(A) {
    return arguments.length ? (l = typeof A == "function" ? A : Mc(!!A), y) : l;
  }, y.container = function(A) {
    return arguments.length ? (i = typeof A == "function" ? A : Mc(A), y) : i;
  }, y.subject = function(A) {
    return arguments.length ? (c = typeof A == "function" ? A : Mc(A), y) : c;
  }, y.touchable = function(A) {
    return arguments.length ? (r = typeof A == "function" ? A : Mc(!!A), y) : r;
  }, y.on = function() {
    var A = f.on.apply(f, arguments);
    return A === f ? y : A;
  }, y.clickDistance = function(A) {
    return arguments.length ? (m = (A = +A) * A, y) : Math.sqrt(m);
  }, y;
}
function Dd(l, i, c) {
  l.prototype = i.prototype = c, c.constructor = l;
}
function Lv(l, i) {
  var c = Object.create(l.prototype);
  for (var r in i) c[r] = i[r];
  return c;
}
function qu() {
}
var Ou = 0.7, Qc = 1 / Ou, vi = "\\s*([+-]?\\d+)\\s*", Du = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", jn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", GE = /^#([0-9a-f]{3,8})$/, QE = new RegExp(`^rgb\\(${vi},${vi},${vi}\\)$`), KE = new RegExp(`^rgb\\(${jn},${jn},${jn}\\)$`), $E = new RegExp(`^rgba\\(${vi},${vi},${vi},${Du}\\)$`), JE = new RegExp(`^rgba\\(${jn},${jn},${jn},${Du}\\)$`), kE = new RegExp(`^hsl\\(${Du},${jn},${jn}\\)$`), IE = new RegExp(`^hsla\\(${Du},${jn},${jn},${Du}\\)$`), gy = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Dd(qu, ya, {
  copy(l) {
    return Object.assign(new this.constructor(), this, l);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: my,
  // Deprecated! Use color.formatHex.
  formatHex: my,
  formatHex8: FE,
  formatHsl: WE,
  formatRgb: yy,
  toString: yy
});
function my() {
  return this.rgb().formatHex();
}
function FE() {
  return this.rgb().formatHex8();
}
function WE() {
  return qv(this).formatHsl();
}
function yy() {
  return this.rgb().formatRgb();
}
function ya(l) {
  var i, c;
  return l = (l + "").trim().toLowerCase(), (i = GE.exec(l)) ? (c = i[1].length, i = parseInt(i[1], 16), c === 6 ? vy(i) : c === 3 ? new je(i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, (i & 15) << 4 | i & 15, 1) : c === 8 ? Ac(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, (i & 255) / 255) : c === 4 ? Ac(i >> 12 & 15 | i >> 8 & 240, i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, ((i & 15) << 4 | i & 15) / 255) : null) : (i = QE.exec(l)) ? new je(i[1], i[2], i[3], 1) : (i = KE.exec(l)) ? new je(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, 1) : (i = $E.exec(l)) ? Ac(i[1], i[2], i[3], i[4]) : (i = JE.exec(l)) ? Ac(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, i[4]) : (i = kE.exec(l)) ? Sy(i[1], i[2] / 100, i[3] / 100, 1) : (i = IE.exec(l)) ? Sy(i[1], i[2] / 100, i[3] / 100, i[4]) : gy.hasOwnProperty(l) ? vy(gy[l]) : l === "transparent" ? new je(NaN, NaN, NaN, 0) : null;
}
function vy(l) {
  return new je(l >> 16 & 255, l >> 8 & 255, l & 255, 1);
}
function Ac(l, i, c, r) {
  return r <= 0 && (l = i = c = NaN), new je(l, i, c, r);
}
function PE(l) {
  return l instanceof qu || (l = ya(l)), l ? (l = l.rgb(), new je(l.r, l.g, l.b, l.opacity)) : new je();
}
function vd(l, i, c, r) {
  return arguments.length === 1 ? PE(l) : new je(l, i, c, r ?? 1);
}
function je(l, i, c, r) {
  this.r = +l, this.g = +i, this.b = +c, this.opacity = +r;
}
Dd(je, vd, Lv(qu, {
  brighter(l) {
    return l = l == null ? Qc : Math.pow(Qc, l), new je(this.r * l, this.g * l, this.b * l, this.opacity);
  },
  darker(l) {
    return l = l == null ? Ou : Math.pow(Ou, l), new je(this.r * l, this.g * l, this.b * l, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new je(ga(this.r), ga(this.g), ga(this.b), Kc(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: py,
  // Deprecated! Use color.formatHex.
  formatHex: py,
  formatHex8: t_,
  formatRgb: xy,
  toString: xy
}));
function py() {
  return `#${ha(this.r)}${ha(this.g)}${ha(this.b)}`;
}
function t_() {
  return `#${ha(this.r)}${ha(this.g)}${ha(this.b)}${ha((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xy() {
  const l = Kc(this.opacity);
  return `${l === 1 ? "rgb(" : "rgba("}${ga(this.r)}, ${ga(this.g)}, ${ga(this.b)}${l === 1 ? ")" : `, ${l})`}`;
}
function Kc(l) {
  return isNaN(l) ? 1 : Math.max(0, Math.min(1, l));
}
function ga(l) {
  return Math.max(0, Math.min(255, Math.round(l) || 0));
}
function ha(l) {
  return l = ga(l), (l < 16 ? "0" : "") + l.toString(16);
}
function Sy(l, i, c, r) {
  return r <= 0 ? l = i = c = NaN : c <= 0 || c >= 1 ? l = i = NaN : i <= 0 && (l = NaN), new yn(l, i, c, r);
}
function qv(l) {
  if (l instanceof yn) return new yn(l.h, l.s, l.l, l.opacity);
  if (l instanceof qu || (l = ya(l)), !l) return new yn();
  if (l instanceof yn) return l;
  l = l.rgb();
  var i = l.r / 255, c = l.g / 255, r = l.b / 255, s = Math.min(i, c, r), f = Math.max(i, c, r), d = NaN, g = f - s, p = (f + s) / 2;
  return g ? (i === f ? d = (c - r) / g + (c < r) * 6 : c === f ? d = (r - i) / g + 2 : d = (i - c) / g + 4, g /= p < 0.5 ? f + s : 2 - f - s, d *= 60) : g = p > 0 && p < 1 ? 0 : d, new yn(d, g, p, l.opacity);
}
function e_(l, i, c, r) {
  return arguments.length === 1 ? qv(l) : new yn(l, i, c, r ?? 1);
}
function yn(l, i, c, r) {
  this.h = +l, this.s = +i, this.l = +c, this.opacity = +r;
}
Dd(yn, e_, Lv(qu, {
  brighter(l) {
    return l = l == null ? Qc : Math.pow(Qc, l), new yn(this.h, this.s, this.l * l, this.opacity);
  },
  darker(l) {
    return l = l == null ? Ou : Math.pow(Ou, l), new yn(this.h, this.s, this.l * l, this.opacity);
  },
  rgb() {
    var l = this.h % 360 + (this.h < 0) * 360, i = isNaN(l) || isNaN(this.s) ? 0 : this.s, c = this.l, r = c + (c < 0.5 ? c : 1 - c) * i, s = 2 * c - r;
    return new je(
      ld(l >= 240 ? l - 240 : l + 120, s, r),
      ld(l, s, r),
      ld(l < 120 ? l + 240 : l - 120, s, r),
      this.opacity
    );
  },
  clamp() {
    return new yn(by(this.h), Oc(this.s), Oc(this.l), Kc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const l = Kc(this.opacity);
    return `${l === 1 ? "hsl(" : "hsla("}${by(this.h)}, ${Oc(this.s) * 100}%, ${Oc(this.l) * 100}%${l === 1 ? ")" : `, ${l})`}`;
  }
}));
function by(l) {
  return l = (l || 0) % 360, l < 0 ? l + 360 : l;
}
function Oc(l) {
  return Math.max(0, Math.min(1, l || 0));
}
function ld(l, i, c) {
  return (l < 60 ? i + (c - i) * l / 60 : l < 180 ? c : l < 240 ? i + (c - i) * (240 - l) / 60 : i) * 255;
}
const Rd = (l) => () => l;
function n_(l, i) {
  return function(c) {
    return l + c * i;
  };
}
function l_(l, i, c) {
  return l = Math.pow(l, c), i = Math.pow(i, c) - l, c = 1 / c, function(r) {
    return Math.pow(l + r * i, c);
  };
}
function a_(l) {
  return (l = +l) == 1 ? Xv : function(i, c) {
    return c - i ? l_(i, c, l) : Rd(isNaN(i) ? c : i);
  };
}
function Xv(l, i) {
  var c = i - l;
  return c ? n_(l, c) : Rd(isNaN(l) ? i : l);
}
const $c = (function l(i) {
  var c = a_(i);
  function r(s, f) {
    var d = c((s = vd(s)).r, (f = vd(f)).r), g = c(s.g, f.g), p = c(s.b, f.b), x = Xv(s.opacity, f.opacity);
    return function(v) {
      return s.r = d(v), s.g = g(v), s.b = p(v), s.opacity = x(v), s + "";
    };
  }
  return r.gamma = l, r;
})(1);
function i_(l, i) {
  i || (i = []);
  var c = l ? Math.min(i.length, l.length) : 0, r = i.slice(), s;
  return function(f) {
    for (s = 0; s < c; ++s) r[s] = l[s] * (1 - f) + i[s] * f;
    return r;
  };
}
function u_(l) {
  return ArrayBuffer.isView(l) && !(l instanceof DataView);
}
function o_(l, i) {
  var c = i ? i.length : 0, r = l ? Math.min(c, l.length) : 0, s = new Array(r), f = new Array(c), d;
  for (d = 0; d < r; ++d) s[d] = zu(l[d], i[d]);
  for (; d < c; ++d) f[d] = i[d];
  return function(g) {
    for (d = 0; d < r; ++d) f[d] = s[d](g);
    return f;
  };
}
function c_(l, i) {
  var c = /* @__PURE__ */ new Date();
  return l = +l, i = +i, function(r) {
    return c.setTime(l * (1 - r) + i * r), c;
  };
}
function Bn(l, i) {
  return l = +l, i = +i, function(c) {
    return l * (1 - c) + i * c;
  };
}
function r_(l, i) {
  var c = {}, r = {}, s;
  (l === null || typeof l != "object") && (l = {}), (i === null || typeof i != "object") && (i = {});
  for (s in i)
    s in l ? c[s] = zu(l[s], i[s]) : r[s] = i[s];
  return function(f) {
    for (s in c) r[s] = c[s](f);
    return r;
  };
}
var pd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ad = new RegExp(pd.source, "g");
function s_(l) {
  return function() {
    return l;
  };
}
function f_(l) {
  return function(i) {
    return l(i) + "";
  };
}
function Zv(l, i) {
  var c = pd.lastIndex = ad.lastIndex = 0, r, s, f, d = -1, g = [], p = [];
  for (l = l + "", i = i + ""; (r = pd.exec(l)) && (s = ad.exec(i)); )
    (f = s.index) > c && (f = i.slice(c, f), g[d] ? g[d] += f : g[++d] = f), (r = r[0]) === (s = s[0]) ? g[d] ? g[d] += s : g[++d] = s : (g[++d] = null, p.push({ i: d, x: Bn(r, s) })), c = ad.lastIndex;
  return c < i.length && (f = i.slice(c), g[d] ? g[d] += f : g[++d] = f), g.length < 2 ? p[0] ? f_(p[0].x) : s_(i) : (i = p.length, function(x) {
    for (var v = 0, m; v < i; ++v) g[(m = p[v]).i] = m.x(x);
    return g.join("");
  });
}
function zu(l, i) {
  var c = typeof i, r;
  return i == null || c === "boolean" ? Rd(i) : (c === "number" ? Bn : c === "string" ? (r = ya(i)) ? (i = r, $c) : Zv : i instanceof ya ? $c : i instanceof Date ? c_ : u_(i) ? i_ : Array.isArray(i) ? o_ : typeof i.valueOf != "function" && typeof i.toString != "function" || isNaN(i) ? r_ : Bn)(l, i);
}
var Ey = 180 / Math.PI, xd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Gv(l, i, c, r, s, f) {
  var d, g, p;
  return (d = Math.sqrt(l * l + i * i)) && (l /= d, i /= d), (p = l * c + i * r) && (c -= l * p, r -= i * p), (g = Math.sqrt(c * c + r * r)) && (c /= g, r /= g, p /= g), l * r < i * c && (l = -l, i = -i, p = -p, d = -d), {
    translateX: s,
    translateY: f,
    rotate: Math.atan2(i, l) * Ey,
    skewX: Math.atan(p) * Ey,
    scaleX: d,
    scaleY: g
  };
}
var Dc;
function d_(l) {
  const i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(l + "");
  return i.isIdentity ? xd : Gv(i.a, i.b, i.c, i.d, i.e, i.f);
}
function h_(l) {
  return l == null || (Dc || (Dc = document.createElementNS("http://www.w3.org/2000/svg", "g")), Dc.setAttribute("transform", l), !(l = Dc.transform.baseVal.consolidate())) ? xd : (l = l.matrix, Gv(l.a, l.b, l.c, l.d, l.e, l.f));
}
function Qv(l, i, c, r) {
  function s(x) {
    return x.length ? x.pop() + " " : "";
  }
  function f(x, v, m, y, b, E) {
    if (x !== m || v !== y) {
      var M = b.push("translate(", null, i, null, c);
      E.push({ i: M - 4, x: Bn(x, m) }, { i: M - 2, x: Bn(v, y) });
    } else (m || y) && b.push("translate(" + m + i + y + c);
  }
  function d(x, v, m, y) {
    x !== v ? (x - v > 180 ? v += 360 : v - x > 180 && (x += 360), y.push({ i: m.push(s(m) + "rotate(", null, r) - 2, x: Bn(x, v) })) : v && m.push(s(m) + "rotate(" + v + r);
  }
  function g(x, v, m, y) {
    x !== v ? y.push({ i: m.push(s(m) + "skewX(", null, r) - 2, x: Bn(x, v) }) : v && m.push(s(m) + "skewX(" + v + r);
  }
  function p(x, v, m, y, b, E) {
    if (x !== m || v !== y) {
      var M = b.push(s(b) + "scale(", null, ",", null, ")");
      E.push({ i: M - 4, x: Bn(x, m) }, { i: M - 2, x: Bn(v, y) });
    } else (m !== 1 || y !== 1) && b.push(s(b) + "scale(" + m + "," + y + ")");
  }
  return function(x, v) {
    var m = [], y = [];
    return x = l(x), v = l(v), f(x.translateX, x.translateY, v.translateX, v.translateY, m, y), d(x.rotate, v.rotate, m, y), g(x.skewX, v.skewX, m, y), p(x.scaleX, x.scaleY, v.scaleX, v.scaleY, m, y), x = v = null, function(b) {
      for (var E = -1, M = y.length, w; ++E < M; ) m[(w = y[E]).i] = w.x(b);
      return m.join("");
    };
  };
}
var g_ = Qv(d_, "px, ", "px)", "deg)"), m_ = Qv(h_, ", ", ")", ")"), y_ = 1e-12;
function _y(l) {
  return ((l = Math.exp(l)) + 1 / l) / 2;
}
function v_(l) {
  return ((l = Math.exp(l)) - 1 / l) / 2;
}
function p_(l) {
  return ((l = Math.exp(2 * l)) - 1) / (l + 1);
}
const Lc = (function l(i, c, r) {
  function s(f, d) {
    var g = f[0], p = f[1], x = f[2], v = d[0], m = d[1], y = d[2], b = v - g, E = m - p, M = b * b + E * E, w, N;
    if (M < y_)
      N = Math.log(y / x) / i, w = function(B) {
        return [
          g + B * b,
          p + B * E,
          x * Math.exp(i * B * N)
        ];
      };
    else {
      var U = Math.sqrt(M), _ = (y * y - x * x + r * M) / (2 * x * c * U), A = (y * y - x * x - r * M) / (2 * y * c * U), G = Math.log(Math.sqrt(_ * _ + 1) - _), V = Math.log(Math.sqrt(A * A + 1) - A);
      N = (V - G) / i, w = function(B) {
        var Q = B * N, F = _y(G), ut = x / (c * U) * (F * p_(i * Q + G) - v_(G));
        return [
          g + ut * b,
          p + ut * E,
          x * F / _y(i * Q + G)
        ];
      };
    }
    return w.duration = N * 1e3 * i / Math.SQRT2, w;
  }
  return s.rho = function(f) {
    var d = Math.max(1e-3, +f), g = d * d, p = g * g;
    return l(d, g, p);
  }, s;
})(Math.SQRT2, 2, 4);
var xi = 0, Tu = 0, wu = 0, Kv = 1e3, Jc, Cu, kc = 0, va = 0, lr = 0, Ru = typeof performance == "object" && performance.now ? performance : Date, $v = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(l) {
  setTimeout(l, 17);
};
function Hd() {
  return va || ($v(x_), va = Ru.now() + lr);
}
function x_() {
  va = 0;
}
function Ic() {
  this._call = this._time = this._next = null;
}
Ic.prototype = Jv.prototype = {
  constructor: Ic,
  restart: function(l, i, c) {
    if (typeof l != "function") throw new TypeError("callback is not a function");
    c = (c == null ? Hd() : +c) + (i == null ? 0 : +i), !this._next && Cu !== this && (Cu ? Cu._next = this : Jc = this, Cu = this), this._call = l, this._time = c, Sd();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Sd());
  }
};
function Jv(l, i, c) {
  var r = new Ic();
  return r.restart(l, i, c), r;
}
function S_() {
  Hd(), ++xi;
  for (var l = Jc, i; l; )
    (i = va - l._time) >= 0 && l._call.call(void 0, i), l = l._next;
  --xi;
}
function wy() {
  va = (kc = Ru.now()) + lr, xi = Tu = 0;
  try {
    S_();
  } finally {
    xi = 0, E_(), va = 0;
  }
}
function b_() {
  var l = Ru.now(), i = l - kc;
  i > Kv && (lr -= i, kc = l);
}
function E_() {
  for (var l, i = Jc, c, r = 1 / 0; i; )
    i._call ? (r > i._time && (r = i._time), l = i, i = i._next) : (c = i._next, i._next = null, i = l ? l._next = c : Jc = c);
  Cu = l, Sd(r);
}
function Sd(l) {
  if (!xi) {
    Tu && (Tu = clearTimeout(Tu));
    var i = l - va;
    i > 24 ? (l < 1 / 0 && (Tu = setTimeout(wy, l - Ru.now() - lr)), wu && (wu = clearInterval(wu))) : (wu || (kc = Ru.now(), wu = setInterval(b_, Kv)), xi = 1, $v(wy));
  }
}
function Ny(l, i, c) {
  var r = new Ic();
  return i = i == null ? 0 : +i, r.restart((s) => {
    r.stop(), l(s + i);
  }, i, c), r;
}
var __ = er("start", "end", "cancel", "interrupt"), w_ = [], kv = 0, Ty = 1, bd = 2, qc = 3, Cy = 4, Ed = 5, Xc = 6;
function ar(l, i, c, r, s, f) {
  var d = l.__transition;
  if (!d) l.__transition = {};
  else if (c in d) return;
  N_(l, c, {
    name: i,
    index: r,
    // For context during callback.
    group: s,
    // For context during callback.
    on: __,
    tween: w_,
    time: f.time,
    delay: f.delay,
    duration: f.duration,
    ease: f.ease,
    timer: null,
    state: kv
  });
}
function Ud(l, i) {
  var c = Sn(l, i);
  if (c.state > kv) throw new Error("too late; already scheduled");
  return c;
}
function Yn(l, i) {
  var c = Sn(l, i);
  if (c.state > qc) throw new Error("too late; already running");
  return c;
}
function Sn(l, i) {
  var c = l.__transition;
  if (!c || !(c = c[i])) throw new Error("transition not found");
  return c;
}
function N_(l, i, c) {
  var r = l.__transition, s;
  r[i] = c, c.timer = Jv(f, 0, c.time);
  function f(x) {
    c.state = Ty, c.timer.restart(d, c.delay, c.time), c.delay <= x && d(x - c.delay);
  }
  function d(x) {
    var v, m, y, b;
    if (c.state !== Ty) return p();
    for (v in r)
      if (b = r[v], b.name === c.name) {
        if (b.state === qc) return Ny(d);
        b.state === Cy ? (b.state = Xc, b.timer.stop(), b.on.call("interrupt", l, l.__data__, b.index, b.group), delete r[v]) : +v < i && (b.state = Xc, b.timer.stop(), b.on.call("cancel", l, l.__data__, b.index, b.group), delete r[v]);
      }
    if (Ny(function() {
      c.state === qc && (c.state = Cy, c.timer.restart(g, c.delay, c.time), g(x));
    }), c.state = bd, c.on.call("start", l, l.__data__, c.index, c.group), c.state === bd) {
      for (c.state = qc, s = new Array(y = c.tween.length), v = 0, m = -1; v < y; ++v)
        (b = c.tween[v].value.call(l, l.__data__, c.index, c.group)) && (s[++m] = b);
      s.length = m + 1;
    }
  }
  function g(x) {
    for (var v = x < c.duration ? c.ease.call(null, x / c.duration) : (c.timer.restart(p), c.state = Ed, 1), m = -1, y = s.length; ++m < y; )
      s[m].call(l, v);
    c.state === Ed && (c.on.call("end", l, l.__data__, c.index, c.group), p());
  }
  function p() {
    c.state = Xc, c.timer.stop(), delete r[i];
    for (var x in r) return;
    delete l.__transition;
  }
}
function Zc(l, i) {
  var c = l.__transition, r, s, f = !0, d;
  if (c) {
    i = i == null ? null : i + "";
    for (d in c) {
      if ((r = c[d]).name !== i) {
        f = !1;
        continue;
      }
      s = r.state > bd && r.state < Ed, r.state = Xc, r.timer.stop(), r.on.call(s ? "interrupt" : "cancel", l, l.__data__, r.index, r.group), delete c[d];
    }
    f && delete l.__transition;
  }
}
function T_(l) {
  return this.each(function() {
    Zc(this, l);
  });
}
function C_(l, i) {
  var c, r;
  return function() {
    var s = Yn(this, l), f = s.tween;
    if (f !== c) {
      r = c = f;
      for (var d = 0, g = r.length; d < g; ++d)
        if (r[d].name === i) {
          r = r.slice(), r.splice(d, 1);
          break;
        }
    }
    s.tween = r;
  };
}
function z_(l, i, c) {
  var r, s;
  if (typeof c != "function") throw new Error();
  return function() {
    var f = Yn(this, l), d = f.tween;
    if (d !== r) {
      s = (r = d).slice();
      for (var g = { name: i, value: c }, p = 0, x = s.length; p < x; ++p)
        if (s[p].name === i) {
          s[p] = g;
          break;
        }
      p === x && s.push(g);
    }
    f.tween = s;
  };
}
function M_(l, i) {
  var c = this._id;
  if (l += "", arguments.length < 2) {
    for (var r = Sn(this.node(), c).tween, s = 0, f = r.length, d; s < f; ++s)
      if ((d = r[s]).name === l)
        return d.value;
    return null;
  }
  return this.each((i == null ? C_ : z_)(c, l, i));
}
function Bd(l, i, c) {
  var r = l._id;
  return l.each(function() {
    var s = Yn(this, r);
    (s.value || (s.value = {}))[i] = c.apply(this, arguments);
  }), function(s) {
    return Sn(s, r).value[i];
  };
}
function Iv(l, i) {
  var c;
  return (typeof i == "number" ? Bn : i instanceof ya ? $c : (c = ya(i)) ? (i = c, $c) : Zv)(l, i);
}
function A_(l) {
  return function() {
    this.removeAttribute(l);
  };
}
function O_(l) {
  return function() {
    this.removeAttributeNS(l.space, l.local);
  };
}
function D_(l, i, c) {
  var r, s = c + "", f;
  return function() {
    var d = this.getAttribute(l);
    return d === s ? null : d === r ? f : f = i(r = d, c);
  };
}
function R_(l, i, c) {
  var r, s = c + "", f;
  return function() {
    var d = this.getAttributeNS(l.space, l.local);
    return d === s ? null : d === r ? f : f = i(r = d, c);
  };
}
function H_(l, i, c) {
  var r, s, f;
  return function() {
    var d, g = c(this), p;
    return g == null ? void this.removeAttribute(l) : (d = this.getAttribute(l), p = g + "", d === p ? null : d === r && p === s ? f : (s = p, f = i(r = d, g)));
  };
}
function U_(l, i, c) {
  var r, s, f;
  return function() {
    var d, g = c(this), p;
    return g == null ? void this.removeAttributeNS(l.space, l.local) : (d = this.getAttributeNS(l.space, l.local), p = g + "", d === p ? null : d === r && p === s ? f : (s = p, f = i(r = d, g)));
  };
}
function B_(l, i) {
  var c = nr(l), r = c === "transform" ? m_ : Iv;
  return this.attrTween(l, typeof i == "function" ? (c.local ? U_ : H_)(c, r, Bd(this, "attr." + l, i)) : i == null ? (c.local ? O_ : A_)(c) : (c.local ? R_ : D_)(c, r, i));
}
function j_(l, i) {
  return function(c) {
    this.setAttribute(l, i.call(this, c));
  };
}
function Y_(l, i) {
  return function(c) {
    this.setAttributeNS(l.space, l.local, i.call(this, c));
  };
}
function V_(l, i) {
  var c, r;
  function s() {
    var f = i.apply(this, arguments);
    return f !== r && (c = (r = f) && Y_(l, f)), c;
  }
  return s._value = i, s;
}
function L_(l, i) {
  var c, r;
  function s() {
    var f = i.apply(this, arguments);
    return f !== r && (c = (r = f) && j_(l, f)), c;
  }
  return s._value = i, s;
}
function q_(l, i) {
  var c = "attr." + l;
  if (arguments.length < 2) return (c = this.tween(c)) && c._value;
  if (i == null) return this.tween(c, null);
  if (typeof i != "function") throw new Error();
  var r = nr(l);
  return this.tween(c, (r.local ? V_ : L_)(r, i));
}
function X_(l, i) {
  return function() {
    Ud(this, l).delay = +i.apply(this, arguments);
  };
}
function Z_(l, i) {
  return i = +i, function() {
    Ud(this, l).delay = i;
  };
}
function G_(l) {
  var i = this._id;
  return arguments.length ? this.each((typeof l == "function" ? X_ : Z_)(i, l)) : Sn(this.node(), i).delay;
}
function Q_(l, i) {
  return function() {
    Yn(this, l).duration = +i.apply(this, arguments);
  };
}
function K_(l, i) {
  return i = +i, function() {
    Yn(this, l).duration = i;
  };
}
function $_(l) {
  var i = this._id;
  return arguments.length ? this.each((typeof l == "function" ? Q_ : K_)(i, l)) : Sn(this.node(), i).duration;
}
function J_(l, i) {
  if (typeof i != "function") throw new Error();
  return function() {
    Yn(this, l).ease = i;
  };
}
function k_(l) {
  var i = this._id;
  return arguments.length ? this.each(J_(i, l)) : Sn(this.node(), i).ease;
}
function I_(l, i) {
  return function() {
    var c = i.apply(this, arguments);
    if (typeof c != "function") throw new Error();
    Yn(this, l).ease = c;
  };
}
function F_(l) {
  if (typeof l != "function") throw new Error();
  return this.each(I_(this._id, l));
}
function W_(l) {
  typeof l != "function" && (l = Cv(l));
  for (var i = this._groups, c = i.length, r = new Array(c), s = 0; s < c; ++s)
    for (var f = i[s], d = f.length, g = r[s] = [], p, x = 0; x < d; ++x)
      (p = f[x]) && l.call(p, p.__data__, x, f) && g.push(p);
  return new al(r, this._parents, this._name, this._id);
}
function P_(l) {
  if (l._id !== this._id) throw new Error();
  for (var i = this._groups, c = l._groups, r = i.length, s = c.length, f = Math.min(r, s), d = new Array(r), g = 0; g < f; ++g)
    for (var p = i[g], x = c[g], v = p.length, m = d[g] = new Array(v), y, b = 0; b < v; ++b)
      (y = p[b] || x[b]) && (m[b] = y);
  for (; g < r; ++g)
    d[g] = i[g];
  return new al(d, this._parents, this._name, this._id);
}
function t2(l) {
  return (l + "").trim().split(/^|\s+/).every(function(i) {
    var c = i.indexOf(".");
    return c >= 0 && (i = i.slice(0, c)), !i || i === "start";
  });
}
function e2(l, i, c) {
  var r, s, f = t2(i) ? Ud : Yn;
  return function() {
    var d = f(this, l), g = d.on;
    g !== r && (s = (r = g).copy()).on(i, c), d.on = s;
  };
}
function n2(l, i) {
  var c = this._id;
  return arguments.length < 2 ? Sn(this.node(), c).on.on(l) : this.each(e2(c, l, i));
}
function l2(l) {
  return function() {
    var i = this.parentNode;
    for (var c in this.__transition) if (+c !== l) return;
    i && i.removeChild(this);
  };
}
function a2() {
  return this.on("end.remove", l2(this._id));
}
function i2(l) {
  var i = this._name, c = this._id;
  typeof l != "function" && (l = Ad(l));
  for (var r = this._groups, s = r.length, f = new Array(s), d = 0; d < s; ++d)
    for (var g = r[d], p = g.length, x = f[d] = new Array(p), v, m, y = 0; y < p; ++y)
      (v = g[y]) && (m = l.call(v, v.__data__, y, g)) && ("__data__" in v && (m.__data__ = v.__data__), x[y] = m, ar(x[y], i, c, y, x, Sn(v, c)));
  return new al(f, this._parents, i, c);
}
function u2(l) {
  var i = this._name, c = this._id;
  typeof l != "function" && (l = Tv(l));
  for (var r = this._groups, s = r.length, f = [], d = [], g = 0; g < s; ++g)
    for (var p = r[g], x = p.length, v, m = 0; m < x; ++m)
      if (v = p[m]) {
        for (var y = l.call(v, v.__data__, m, p), b, E = Sn(v, c), M = 0, w = y.length; M < w; ++M)
          (b = y[M]) && ar(b, i, c, M, y, E);
        f.push(y), d.push(v);
      }
  return new al(f, d, i, c);
}
var o2 = Lu.prototype.constructor;
function c2() {
  return new o2(this._groups, this._parents);
}
function r2(l, i) {
  var c, r, s;
  return function() {
    var f = pi(this, l), d = (this.style.removeProperty(l), pi(this, l));
    return f === d ? null : f === c && d === r ? s : s = i(c = f, r = d);
  };
}
function Fv(l) {
  return function() {
    this.style.removeProperty(l);
  };
}
function s2(l, i, c) {
  var r, s = c + "", f;
  return function() {
    var d = pi(this, l);
    return d === s ? null : d === r ? f : f = i(r = d, c);
  };
}
function f2(l, i, c) {
  var r, s, f;
  return function() {
    var d = pi(this, l), g = c(this), p = g + "";
    return g == null && (p = g = (this.style.removeProperty(l), pi(this, l))), d === p ? null : d === r && p === s ? f : (s = p, f = i(r = d, g));
  };
}
function d2(l, i) {
  var c, r, s, f = "style." + i, d = "end." + f, g;
  return function() {
    var p = Yn(this, l), x = p.on, v = p.value[f] == null ? g || (g = Fv(i)) : void 0;
    (x !== c || s !== v) && (r = (c = x).copy()).on(d, s = v), p.on = r;
  };
}
function h2(l, i, c) {
  var r = (l += "") == "transform" ? g_ : Iv;
  return i == null ? this.styleTween(l, r2(l, r)).on("end.style." + l, Fv(l)) : typeof i == "function" ? this.styleTween(l, f2(l, r, Bd(this, "style." + l, i))).each(d2(this._id, l)) : this.styleTween(l, s2(l, r, i), c).on("end.style." + l, null);
}
function g2(l, i, c) {
  return function(r) {
    this.style.setProperty(l, i.call(this, r), c);
  };
}
function m2(l, i, c) {
  var r, s;
  function f() {
    var d = i.apply(this, arguments);
    return d !== s && (r = (s = d) && g2(l, d, c)), r;
  }
  return f._value = i, f;
}
function y2(l, i, c) {
  var r = "style." + (l += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (i == null) return this.tween(r, null);
  if (typeof i != "function") throw new Error();
  return this.tween(r, m2(l, i, c ?? ""));
}
function v2(l) {
  return function() {
    this.textContent = l;
  };
}
function p2(l) {
  return function() {
    var i = l(this);
    this.textContent = i ?? "";
  };
}
function x2(l) {
  return this.tween("text", typeof l == "function" ? p2(Bd(this, "text", l)) : v2(l == null ? "" : l + ""));
}
function S2(l) {
  return function(i) {
    this.textContent = l.call(this, i);
  };
}
function b2(l) {
  var i, c;
  function r() {
    var s = l.apply(this, arguments);
    return s !== c && (i = (c = s) && S2(s)), i;
  }
  return r._value = l, r;
}
function E2(l) {
  var i = "text";
  if (arguments.length < 1) return (i = this.tween(i)) && i._value;
  if (l == null) return this.tween(i, null);
  if (typeof l != "function") throw new Error();
  return this.tween(i, b2(l));
}
function _2() {
  for (var l = this._name, i = this._id, c = Wv(), r = this._groups, s = r.length, f = 0; f < s; ++f)
    for (var d = r[f], g = d.length, p, x = 0; x < g; ++x)
      if (p = d[x]) {
        var v = Sn(p, i);
        ar(p, l, c, x, d, {
          time: v.time + v.delay + v.duration,
          delay: 0,
          duration: v.duration,
          ease: v.ease
        });
      }
  return new al(r, this._parents, l, c);
}
function w2() {
  var l, i, c = this, r = c._id, s = c.size();
  return new Promise(function(f, d) {
    var g = { value: d }, p = { value: function() {
      --s === 0 && f();
    } };
    c.each(function() {
      var x = Yn(this, r), v = x.on;
      v !== l && (i = (l = v).copy(), i._.cancel.push(g), i._.interrupt.push(g), i._.end.push(p)), x.on = i;
    }), s === 0 && f();
  });
}
var N2 = 0;
function al(l, i, c, r) {
  this._groups = l, this._parents = i, this._name = c, this._id = r;
}
function Wv() {
  return ++N2;
}
var nl = Lu.prototype;
al.prototype = {
  constructor: al,
  select: i2,
  selectAll: u2,
  selectChild: nl.selectChild,
  selectChildren: nl.selectChildren,
  filter: W_,
  merge: P_,
  selection: c2,
  transition: _2,
  call: nl.call,
  nodes: nl.nodes,
  node: nl.node,
  size: nl.size,
  empty: nl.empty,
  each: nl.each,
  on: n2,
  attr: B_,
  attrTween: q_,
  style: h2,
  styleTween: y2,
  text: x2,
  textTween: E2,
  remove: a2,
  tween: M_,
  delay: G_,
  duration: $_,
  ease: k_,
  easeVarying: F_,
  end: w2,
  [Symbol.iterator]: nl[Symbol.iterator]
};
function T2(l) {
  return ((l *= 2) <= 1 ? l * l * l : (l -= 2) * l * l + 2) / 2;
}
var C2 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: T2
};
function z2(l, i) {
  for (var c; !(c = l.__transition) || !(c = c[i]); )
    if (!(l = l.parentNode))
      throw new Error(`transition ${i} not found`);
  return c;
}
function M2(l) {
  var i, c;
  l instanceof al ? (i = l._id, l = l._name) : (i = Wv(), (c = C2).time = Hd(), l = l == null ? null : l + "");
  for (var r = this._groups, s = r.length, f = 0; f < s; ++f)
    for (var d = r[f], g = d.length, p, x = 0; x < g; ++x)
      (p = d[x]) && ar(p, l, i, x, d, c || z2(p, i));
  return new al(r, this._parents, l, i);
}
Lu.prototype.interrupt = T_;
Lu.prototype.transition = M2;
const Rc = (l) => () => l;
function A2(l, {
  sourceEvent: i,
  target: c,
  transform: r,
  dispatch: s
}) {
  Object.defineProperties(this, {
    type: { value: l, enumerable: !0, configurable: !0 },
    sourceEvent: { value: i, enumerable: !0, configurable: !0 },
    target: { value: c, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: s }
  });
}
function ll(l, i, c) {
  this.k = l, this.x = i, this.y = c;
}
ll.prototype = {
  constructor: ll,
  scale: function(l) {
    return l === 1 ? this : new ll(this.k * l, this.x, this.y);
  },
  translate: function(l, i) {
    return l === 0 & i === 0 ? this : new ll(this.k, this.x + this.k * l, this.y + this.k * i);
  },
  apply: function(l) {
    return [l[0] * this.k + this.x, l[1] * this.k + this.y];
  },
  applyX: function(l) {
    return l * this.k + this.x;
  },
  applyY: function(l) {
    return l * this.k + this.y;
  },
  invert: function(l) {
    return [(l[0] - this.x) / this.k, (l[1] - this.y) / this.k];
  },
  invertX: function(l) {
    return (l - this.x) / this.k;
  },
  invertY: function(l) {
    return (l - this.y) / this.k;
  },
  rescaleX: function(l) {
    return l.copy().domain(l.range().map(this.invertX, this).map(l.invert, l));
  },
  rescaleY: function(l) {
    return l.copy().domain(l.range().map(this.invertY, this).map(l.invert, l));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var ir = new ll(1, 0, 0);
Pv.prototype = ll.prototype;
function Pv(l) {
  for (; !l.__zoom; ) if (!(l = l.parentNode)) return ir;
  return l.__zoom;
}
function id(l) {
  l.stopImmediatePropagation();
}
function Nu(l) {
  l.preventDefault(), l.stopImmediatePropagation();
}
function O2(l) {
  return (!l.ctrlKey || l.type === "wheel") && !l.button;
}
function D2() {
  var l = this;
  return l instanceof SVGElement ? (l = l.ownerSVGElement || l, l.hasAttribute("viewBox") ? (l = l.viewBox.baseVal, [[l.x, l.y], [l.x + l.width, l.y + l.height]]) : [[0, 0], [l.width.baseVal.value, l.height.baseVal.value]]) : [[0, 0], [l.clientWidth, l.clientHeight]];
}
function zy() {
  return this.__zoom || ir;
}
function R2(l) {
  return -l.deltaY * (l.deltaMode === 1 ? 0.05 : l.deltaMode ? 1 : 2e-3) * (l.ctrlKey ? 10 : 1);
}
function H2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function U2(l, i, c) {
  var r = l.invertX(i[0][0]) - c[0][0], s = l.invertX(i[1][0]) - c[1][0], f = l.invertY(i[0][1]) - c[0][1], d = l.invertY(i[1][1]) - c[1][1];
  return l.translate(
    s > r ? (r + s) / 2 : Math.min(0, r) || Math.max(0, s),
    d > f ? (f + d) / 2 : Math.min(0, f) || Math.max(0, d)
  );
}
function tp() {
  var l = O2, i = D2, c = U2, r = R2, s = H2, f = [0, 1 / 0], d = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], g = 250, p = Lc, x = er("start", "zoom", "end"), v, m, y, b = 500, E = 150, M = 0, w = 10;
  function N(C) {
    C.property("__zoom", zy).on("wheel.zoom", Q, { passive: !1 }).on("mousedown.zoom", F).on("dblclick.zoom", ut).filter(s).on("touchstart.zoom", D).on("touchmove.zoom", J).on("touchend.zoom touchcancel.zoom", W).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  N.transform = function(C, Y, O, j) {
    var Z = C.selection ? C.selection() : C;
    Z.property("__zoom", zy), C !== Z ? G(C, Y, O, j) : Z.interrupt().each(function() {
      V(this, arguments).event(j).start().zoom(null, typeof Y == "function" ? Y.apply(this, arguments) : Y).end();
    });
  }, N.scaleBy = function(C, Y, O, j) {
    N.scaleTo(C, function() {
      var Z = this.__zoom.k, k = typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return Z * k;
    }, O, j);
  }, N.scaleTo = function(C, Y, O, j) {
    N.transform(C, function() {
      var Z = i.apply(this, arguments), k = this.__zoom, nt = O == null ? A(Z) : typeof O == "function" ? O.apply(this, arguments) : O, it = k.invert(nt), dt = typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return c(_(U(k, dt), nt, it), Z, d);
    }, O, j);
  }, N.translateBy = function(C, Y, O, j) {
    N.transform(C, function() {
      return c(this.__zoom.translate(
        typeof Y == "function" ? Y.apply(this, arguments) : Y,
        typeof O == "function" ? O.apply(this, arguments) : O
      ), i.apply(this, arguments), d);
    }, null, j);
  }, N.translateTo = function(C, Y, O, j, Z) {
    N.transform(C, function() {
      var k = i.apply(this, arguments), nt = this.__zoom, it = j == null ? A(k) : typeof j == "function" ? j.apply(this, arguments) : j;
      return c(ir.translate(it[0], it[1]).scale(nt.k).translate(
        typeof Y == "function" ? -Y.apply(this, arguments) : -Y,
        typeof O == "function" ? -O.apply(this, arguments) : -O
      ), k, d);
    }, j, Z);
  };
  function U(C, Y) {
    return Y = Math.max(f[0], Math.min(f[1], Y)), Y === C.k ? C : new ll(Y, C.x, C.y);
  }
  function _(C, Y, O) {
    var j = Y[0] - O[0] * C.k, Z = Y[1] - O[1] * C.k;
    return j === C.x && Z === C.y ? C : new ll(C.k, j, Z);
  }
  function A(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function G(C, Y, O, j) {
    C.on("start.zoom", function() {
      V(this, arguments).event(j).start();
    }).on("interrupt.zoom end.zoom", function() {
      V(this, arguments).event(j).end();
    }).tween("zoom", function() {
      var Z = this, k = arguments, nt = V(Z, k).event(j), it = i.apply(Z, k), dt = O == null ? A(it) : typeof O == "function" ? O.apply(Z, k) : O, vt = Math.max(it[1][0] - it[0][0], it[1][1] - it[0][1]), T = Z.__zoom, P = typeof Y == "function" ? Y.apply(Z, k) : Y, st = p(T.invert(dt).concat(vt / T.k), P.invert(dt).concat(vt / P.k));
      return function(ot) {
        if (ot === 1) ot = P;
        else {
          var tt = st(ot), ft = vt / tt[2];
          ot = new ll(ft, dt[0] - tt[0] * ft, dt[1] - tt[1] * ft);
        }
        nt.zoom(null, ot);
      };
    });
  }
  function V(C, Y, O) {
    return !O && C.__zooming || new B(C, Y);
  }
  function B(C, Y) {
    this.that = C, this.args = Y, this.active = 0, this.sourceEvent = null, this.extent = i.apply(C, Y), this.taps = 0;
  }
  B.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, Y) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = Y.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = Y.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = Y.invert(this.touch1[0])), this.that.__zoom = Y, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var Y = $e(this.that).datum();
      x.call(
        C,
        this.that,
        new A2(C, {
          sourceEvent: this.sourceEvent,
          target: N,
          transform: this.that.__zoom,
          dispatch: x
        }),
        Y
      );
    }
  };
  function Q(C, ...Y) {
    if (!l.apply(this, arguments)) return;
    var O = V(this, Y).event(C), j = this.__zoom, Z = Math.max(f[0], Math.min(f[1], j.k * Math.pow(2, r.apply(this, arguments)))), k = mn(C);
    if (O.wheel)
      (O.mouse[0][0] !== k[0] || O.mouse[0][1] !== k[1]) && (O.mouse[1] = j.invert(O.mouse[0] = k)), clearTimeout(O.wheel);
    else {
      if (j.k === Z) return;
      O.mouse = [k, j.invert(k)], Zc(this), O.start();
    }
    Nu(C), O.wheel = setTimeout(nt, E), O.zoom("mouse", c(_(U(j, Z), O.mouse[0], O.mouse[1]), O.extent, d));
    function nt() {
      O.wheel = null, O.end();
    }
  }
  function F(C, ...Y) {
    if (y || !l.apply(this, arguments)) return;
    var O = C.currentTarget, j = V(this, Y, !0).event(C), Z = $e(C.view).on("mousemove.zoom", dt, !0).on("mouseup.zoom", vt, !0), k = mn(C, O), nt = C.clientX, it = C.clientY;
    jv(C.view), id(C), j.mouse = [k, this.__zoom.invert(k)], Zc(this), j.start();
    function dt(T) {
      if (Nu(T), !j.moved) {
        var P = T.clientX - nt, st = T.clientY - it;
        j.moved = P * P + st * st > M;
      }
      j.event(T).zoom("mouse", c(_(j.that.__zoom, j.mouse[0] = mn(T, O), j.mouse[1]), j.extent, d));
    }
    function vt(T) {
      Z.on("mousemove.zoom mouseup.zoom", null), Yv(T.view, j.moved), Nu(T), j.event(T).end();
    }
  }
  function ut(C, ...Y) {
    if (l.apply(this, arguments)) {
      var O = this.__zoom, j = mn(C.changedTouches ? C.changedTouches[0] : C, this), Z = O.invert(j), k = O.k * (C.shiftKey ? 0.5 : 2), nt = c(_(U(O, k), j, Z), i.apply(this, Y), d);
      Nu(C), g > 0 ? $e(this).transition().duration(g).call(G, nt, j, C) : $e(this).call(N.transform, nt, j, C);
    }
  }
  function D(C, ...Y) {
    if (l.apply(this, arguments)) {
      var O = C.touches, j = O.length, Z = V(this, Y, C.changedTouches.length === j).event(C), k, nt, it, dt;
      for (id(C), nt = 0; nt < j; ++nt)
        it = O[nt], dt = mn(it, this), dt = [dt, this.__zoom.invert(dt), it.identifier], Z.touch0 ? !Z.touch1 && Z.touch0[2] !== dt[2] && (Z.touch1 = dt, Z.taps = 0) : (Z.touch0 = dt, k = !0, Z.taps = 1 + !!v);
      v && (v = clearTimeout(v)), k && (Z.taps < 2 && (m = dt[0], v = setTimeout(function() {
        v = null;
      }, b)), Zc(this), Z.start());
    }
  }
  function J(C, ...Y) {
    if (this.__zooming) {
      var O = V(this, Y).event(C), j = C.changedTouches, Z = j.length, k, nt, it, dt;
      for (Nu(C), k = 0; k < Z; ++k)
        nt = j[k], it = mn(nt, this), O.touch0 && O.touch0[2] === nt.identifier ? O.touch0[0] = it : O.touch1 && O.touch1[2] === nt.identifier && (O.touch1[0] = it);
      if (nt = O.that.__zoom, O.touch1) {
        var vt = O.touch0[0], T = O.touch0[1], P = O.touch1[0], st = O.touch1[1], ot = (ot = P[0] - vt[0]) * ot + (ot = P[1] - vt[1]) * ot, tt = (tt = st[0] - T[0]) * tt + (tt = st[1] - T[1]) * tt;
        nt = U(nt, Math.sqrt(ot / tt)), it = [(vt[0] + P[0]) / 2, (vt[1] + P[1]) / 2], dt = [(T[0] + st[0]) / 2, (T[1] + st[1]) / 2];
      } else if (O.touch0) it = O.touch0[0], dt = O.touch0[1];
      else return;
      O.zoom("touch", c(_(nt, it, dt), O.extent, d));
    }
  }
  function W(C, ...Y) {
    if (this.__zooming) {
      var O = V(this, Y).event(C), j = C.changedTouches, Z = j.length, k, nt;
      for (id(C), y && clearTimeout(y), y = setTimeout(function() {
        y = null;
      }, b), k = 0; k < Z; ++k)
        nt = j[k], O.touch0 && O.touch0[2] === nt.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === nt.identifier && delete O.touch1;
      if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
      else if (O.end(), O.taps === 2 && (nt = mn(nt, this), Math.hypot(m[0] - nt[0], m[1] - nt[1]) < w)) {
        var it = $e(this).on("dblclick.zoom");
        it && it.apply(this, arguments);
      }
    }
  }
  return N.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Rc(+C), N) : r;
  }, N.filter = function(C) {
    return arguments.length ? (l = typeof C == "function" ? C : Rc(!!C), N) : l;
  }, N.touchable = function(C) {
    return arguments.length ? (s = typeof C == "function" ? C : Rc(!!C), N) : s;
  }, N.extent = function(C) {
    return arguments.length ? (i = typeof C == "function" ? C : Rc([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), N) : i;
  }, N.scaleExtent = function(C) {
    return arguments.length ? (f[0] = +C[0], f[1] = +C[1], N) : [f[0], f[1]];
  }, N.translateExtent = function(C) {
    return arguments.length ? (d[0][0] = +C[0][0], d[1][0] = +C[1][0], d[0][1] = +C[0][1], d[1][1] = +C[1][1], N) : [[d[0][0], d[0][1]], [d[1][0], d[1][1]]];
  }, N.constrain = function(C) {
    return arguments.length ? (c = C, N) : c;
  }, N.duration = function(C) {
    return arguments.length ? (g = +C, N) : g;
  }, N.interpolate = function(C) {
    return arguments.length ? (p = C, N) : p;
  }, N.on = function() {
    var C = x.on.apply(x, arguments);
    return C === x ? N : C;
  }, N.clickDistance = function(C) {
    return arguments.length ? (M = (C = +C) * C, N) : Math.sqrt(M);
  }, N.tapDistance = function(C) {
    return arguments.length ? (w = +C, N) : w;
  }, N;
}
const xn = {
  error001: (l = "react") => `Seems like you have not used ${l === "svelte" ? "SvelteFlowProvider" : "ReactFlowProvider"} as an ancestor. Help: https://${l}flow.dev/error#001`,
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (l) => `Node type "${l}" not found. Using fallback type "default".`,
  error004: () => "The parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (l) => `The old edge with id=${l} does not exist.`,
  error009: (l) => `Marker type "${l}" doesn't exist.`,
  error008: (l, { id: i, sourceHandle: c, targetHandle: r }) => `Couldn't create edge for ${l} handle id: "${l === "source" ? c : r}", edge id: ${i}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (l) => `Edge type "${l}" not found. Using fallback type "default".`,
  error012: (l) => `Node with id "${l}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (l = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${l}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
  error016: (l) => `Edge with id "${l}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, Hu = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], ep = ["Enter", " ", "Escape"], np = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: l, x: i, y: c }) => `Moved selected node ${l}. New position, x: ${i}, y: ${c}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var Si;
(function(l) {
  l.Strict = "strict", l.Loose = "loose";
})(Si || (Si = {}));
var ma;
(function(l) {
  l.Free = "free", l.Vertical = "vertical", l.Horizontal = "horizontal";
})(ma || (ma = {}));
var Uu;
(function(l) {
  l.Partial = "partial", l.Full = "full";
})(Uu || (Uu = {}));
const lp = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var jl;
(function(l) {
  l.Bezier = "default", l.Straight = "straight", l.Step = "step", l.SmoothStep = "smoothstep", l.SimpleBezier = "simplebezier";
})(jl || (jl = {}));
var Fc;
(function(l) {
  l.Arrow = "arrow", l.ArrowClosed = "arrowclosed";
})(Fc || (Fc = {}));
var pt;
(function(l) {
  l.Left = "left", l.Top = "top", l.Right = "right", l.Bottom = "bottom";
})(pt || (pt = {}));
const My = {
  [pt.Left]: pt.Right,
  [pt.Right]: pt.Left,
  [pt.Top]: pt.Bottom,
  [pt.Bottom]: pt.Top
}, ap = (l) => !!l && typeof l == "object" && "id" in l && "source" in l && "target" in l, B2 = (l) => !!l && typeof l == "object" && "id" in l && "position" in l && !("source" in l) && !("target" in l), jd = (l) => !!l && typeof l == "object" && "id" in l && "internals" in l && !("source" in l) && !("target" in l), Xu = (l, i = [0, 0]) => {
  const { width: c, height: r } = bn(l), s = l.origin ?? i, f = c * s[0], d = r * s[1];
  return {
    x: l.position.x - f,
    y: l.position.y - d
  };
}, j2 = (l, i = { nodeOrigin: [0, 0] }) => {
  if (l.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let c = !1;
  const r = l.reduce((s, f) => {
    const d = typeof f == "string";
    let g = !i.nodeLookup && !d ? f : void 0;
    return i.nodeLookup && (g = d ? i.nodeLookup.get(f) : jd(f) ? f : i.nodeLookup.get(f.id)), g ? (c = !0, ur(s, Wc(g, i.nodeOrigin))) : s;
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return c ? or(r) : { x: 0, y: 0, width: 0, height: 0 };
}, Zu = (l, i = {}) => {
  let c = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return l.forEach((s) => {
    (i.filter === void 0 || i.filter(s)) && (c = ur(c, Wc(s)), r = !0);
  }), r ? or(c) : { x: 0, y: 0, width: 0, height: 0 };
}, Yd = (l, i, [c, r, s] = [0, 0, 1], f = !1, d = !1) => {
  const g = (i.x - c) / s, p = (i.y - r) / s, x = i.width / s, v = i.height / s, m = [];
  for (const y of l.values()) {
    const { measured: b, selectable: E = !0, hidden: M = !1 } = y;
    if (d && !E || M)
      continue;
    const w = b.width ?? y.width ?? y.initialWidth ?? 0, N = b.height ?? y.height ?? y.initialHeight ?? 0, { x: U, y: _ } = y.internals.positionAbsolute, A = cp(g, p, x, v, U, _, w, N), G = w * N, V = f && A > 0;
    (!y.internals.handleBounds || V || A >= G || y.dragging) && m.push(y);
  }
  return m;
}, Y2 = (l, i) => {
  const c = /* @__PURE__ */ new Set();
  return l.forEach((r) => {
    c.add(r.id);
  }), i.filter((r) => c.has(r.source) || c.has(r.target));
};
function V2(l, i) {
  const c = /* @__PURE__ */ new Map(), r = i?.nodes ? new Set(i.nodes.map((s) => s.id)) : null;
  return l.forEach((s) => {
    let f;
    if (i?.includeHiddenNodes) {
      const { width: d, height: g } = bn(s);
      f = d > 0 && g > 0;
    } else
      f = !!(s.measured.width && s.measured.height && !s.hidden);
    f && (!r || r.has(s.id)) && c.set(s.id, s);
  }), c;
}
async function L2({ nodes: l, width: i, height: c, panZoom: r, minZoom: s, maxZoom: f }, d) {
  if (l.size === 0)
    return !0;
  const g = V2(l, d), p = Zu(g), x = Ld(p, i, c, d?.minZoom ?? s, d?.maxZoom ?? f, d?.padding ?? 0.1);
  return await r.setViewport(x, {
    duration: d?.duration,
    ease: d?.ease,
    interpolate: d?.interpolate
  }), !0;
}
function ip({ nodeId: l, nextPosition: i, nodeLookup: c, nodeOrigin: r = [0, 0], nodeExtent: s, onError: f }) {
  const d = c.get(l), g = d.parentId ? c.get(d.parentId) : void 0, { x: p, y: x } = g ? g.internals.positionAbsolute : { x: 0, y: 0 }, v = d.origin ?? r;
  let m = d.extent || s;
  if (d.extent === "parent" && !d.expandParent)
    if (!g)
      f?.("005", xn.error005());
    else {
      const { width: b, height: E } = bn(g);
      b && E && (m = [
        [p, x],
        [p + b, x + E]
      ]);
    }
  else g && xa(d.extent) && (m = [
    [d.extent[0][0] + p, d.extent[0][1] + x],
    [d.extent[1][0] + p, d.extent[1][1] + x]
  ]);
  const y = xa(m) ? pa(i, m, d.measured) : i;
  return (d.measured.width === void 0 || d.measured.height === void 0) && f?.("015", xn.error015()), {
    position: {
      x: y.x - p + (d.measured.width ?? 0) * v[0],
      y: y.y - x + (d.measured.height ?? 0) * v[1]
    },
    positionAbsolute: y
  };
}
async function q2({ nodesToRemove: l = [], edgesToRemove: i = [], nodes: c, edges: r, onBeforeDelete: s }) {
  const f = new Set(l.map((y) => y.id)), d = [];
  for (const y of c) {
    if (y.deletable === !1)
      continue;
    const b = f.has(y.id), E = !b && y.parentId && d.find((M) => M.id === y.parentId);
    (b || E) && d.push(y);
  }
  const g = new Set(i.map((y) => y.id)), p = r.filter((y) => y.deletable !== !1), v = Y2(d, p);
  for (const y of p)
    g.has(y.id) && !v.find((E) => E.id === y.id) && v.push(y);
  if (!s)
    return {
      edges: v,
      nodes: d
    };
  const m = await s({
    nodes: d,
    edges: v
  });
  return typeof m == "boolean" ? m ? { edges: v, nodes: d } : { edges: [], nodes: [] } : m;
}
const bi = (l, i = 0, c = 1) => Math.min(Math.max(l, i), c), pa = (l = { x: 0, y: 0 }, i, c) => ({
  x: bi(l.x, i[0][0], i[1][0] - (c?.width ?? 0)),
  y: bi(l.y, i[0][1], i[1][1] - (c?.height ?? 0))
});
function up(l, i, c) {
  const { width: r, height: s } = bn(c), { x: f, y: d } = c.internals.positionAbsolute;
  return pa(l, [
    [f, d],
    [f + r, d + s]
  ], i);
}
const Ay = (l, i, c) => l < i ? bi(Math.abs(l - i), 1, i) / i : l > c ? -bi(Math.abs(l - c), 1, i) / i : 0, Vd = (l, i, c = 15, r = 40) => {
  const s = Ay(l.x, r, i.width - r) * c, f = Ay(l.y, r, i.height - r) * c;
  return [s, f];
}, ur = (l, i) => ({
  x: Math.min(l.x, i.x),
  y: Math.min(l.y, i.y),
  x2: Math.max(l.x2, i.x2),
  y2: Math.max(l.y2, i.y2)
}), _d = ({ x: l, y: i, width: c, height: r }) => ({
  x: l,
  y: i,
  x2: l + c,
  y2: i + r
}), or = ({ x: l, y: i, x2: c, y2: r }) => ({
  x: l,
  y: i,
  width: c - l,
  height: r - i
}), Bu = (l, i = [0, 0]) => {
  const { x: c, y: r } = jd(l) ? l.internals.positionAbsolute : Xu(l, i);
  return {
    x: c,
    y: r,
    width: l.measured?.width ?? l.width ?? l.initialWidth ?? 0,
    height: l.measured?.height ?? l.height ?? l.initialHeight ?? 0
  };
}, Wc = (l, i = [0, 0]) => {
  const { x: c, y: r } = jd(l) ? l.internals.positionAbsolute : Xu(l, i);
  return {
    x: c,
    y: r,
    x2: c + (l.measured?.width ?? l.width ?? l.initialWidth ?? 0),
    y2: r + (l.measured?.height ?? l.height ?? l.initialHeight ?? 0)
  };
}, op = (l, i) => or(ur(_d(l), _d(i))), cp = (l, i, c, r, s, f, d, g) => {
  const p = Math.max(0, Math.min(l + c, s + d) - Math.max(l, s)), x = Math.max(0, Math.min(i + r, f + g) - Math.max(i, f));
  return Math.ceil(p * x);
}, Pc = (l, i) => cp(l.x, l.y, l.width, l.height, i.x, i.y, i.width, i.height), Oy = (l) => vn(l.width) && vn(l.height) && vn(l.x) && vn(l.y), vn = (l) => !isNaN(l) && isFinite(l), rp = (l, i) => (c, r) => {
}, Gu = (l, i = [1, 1]) => ({
  x: i[0] * Math.round(l.x / i[0]),
  y: i[1] * Math.round(l.y / i[1])
}), Qu = ({ x: l, y: i }, [c, r, s], f = !1, d = [1, 1]) => {
  const g = {
    x: (l - c) / s,
    y: (i - r) / s
  };
  return f ? Gu(g, d) : g;
}, Ei = ({ x: l, y: i }, [c, r, s]) => ({
  x: l * s + c,
  y: i * s + r
});
function gi(l, i) {
  if (typeof l == "number")
    return Math.floor((i - i / (1 + l)) * 0.5);
  if (typeof l == "string" && l.endsWith("px")) {
    const c = parseFloat(l);
    if (!Number.isNaN(c))
      return Math.floor(c);
  }
  if (typeof l == "string" && l.endsWith("%")) {
    const c = parseFloat(l);
    if (!Number.isNaN(c))
      return Math.floor(i * c * 0.01);
  }
  return console.error(`The padding value "${l}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function X2(l, i, c) {
  if (typeof l == "string" || typeof l == "number") {
    const r = gi(l, c), s = gi(l, i);
    return {
      top: r,
      right: s,
      bottom: r,
      left: s,
      x: s * 2,
      y: r * 2
    };
  }
  if (typeof l == "object") {
    const r = gi(l.top ?? l.y ?? 0, c), s = gi(l.bottom ?? l.y ?? 0, c), f = gi(l.left ?? l.x ?? 0, i), d = gi(l.right ?? l.x ?? 0, i);
    return { top: r, right: d, bottom: s, left: f, x: f + d, y: r + s };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Z2(l, i, c, r, s, f) {
  const { x: d, y: g } = Ei(l, [i, c, r]), { x: p, y: x } = Ei({ x: l.x + l.width, y: l.y + l.height }, [i, c, r]), v = s - p, m = f - x;
  return {
    left: Math.floor(d),
    top: Math.floor(g),
    right: Math.floor(v),
    bottom: Math.floor(m)
  };
}
const Ld = (l, i, c, r, s, f) => {
  const d = X2(f, i, c), g = (i - d.x) / l.width, p = (c - d.y) / l.height, x = Math.min(g, p), v = bi(x, r, s), m = l.x + l.width / 2, y = l.y + l.height / 2, b = i / 2 - m * v, E = c / 2 - y * v, M = Z2(l, b, E, v, i, c), w = {
    left: Math.min(M.left - d.left, 0),
    top: Math.min(M.top - d.top, 0),
    right: Math.min(M.right - d.right, 0),
    bottom: Math.min(M.bottom - d.bottom, 0)
  };
  return {
    x: b - w.left + w.right,
    y: E - w.top + w.bottom,
    zoom: v
  };
}, ju = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function xa(l) {
  return l != null && l !== "parent";
}
function bn(l) {
  return {
    width: l.measured?.width ?? l.width ?? l.initialWidth ?? 0,
    height: l.measured?.height ?? l.height ?? l.initialHeight ?? 0
  };
}
function sp(l) {
  return (l.measured?.width ?? l.width ?? l.initialWidth) !== void 0 && (l.measured?.height ?? l.height ?? l.initialHeight) !== void 0;
}
function fp(l, i = { width: 0, height: 0 }, c, r, s) {
  const f = { ...l }, d = r.get(c);
  if (d) {
    const g = d.origin || s;
    f.x += d.internals.positionAbsolute.x - (i.width ?? 0) * g[0], f.y += d.internals.positionAbsolute.y - (i.height ?? 0) * g[1];
  }
  return f;
}
function Dy(l, i) {
  if (l.size !== i.size)
    return !1;
  for (const c of l)
    if (!i.has(c))
      return !1;
  return !0;
}
function G2() {
  let l, i;
  return { promise: new Promise((r, s) => {
    l = r, i = s;
  }), resolve: l, reject: i };
}
function Q2(l) {
  return { ...np, ...l || {} };
}
function dp(l) {
  return l === null ? null : l ? "valid" : "invalid";
}
function Mu(l, { snapGrid: i = [0, 0], snapToGrid: c = !1, transform: r, containerBounds: s }) {
  const { x: f, y: d } = pn(l), g = Qu({ x: f - (s?.left ?? 0), y: d - (s?.top ?? 0) }, r), { x: p, y: x } = c ? Gu(g, i) : g;
  return {
    xSnapped: p,
    ySnapped: x,
    ...g
  };
}
const qd = (l) => ({
  width: l.offsetWidth,
  height: l.offsetHeight
}), hp = (l) => l?.getRootNode?.() || window?.document, K2 = ["INPUT", "SELECT", "TEXTAREA"];
function gp(l) {
  const i = l.composedPath?.()?.[0] || l.target;
  return i?.nodeType !== 1 ? !1 : K2.includes(i.nodeName) || i.hasAttribute("contenteditable") || !!i.closest(".nokey");
}
const mp = (l) => "clientX" in l, pn = (l, i) => {
  const c = mp(l), r = c ? l.clientX : l.touches?.[0].clientX, s = c ? l.clientY : l.touches?.[0].clientY;
  return {
    x: r - (i?.left ?? 0),
    y: s - (i?.top ?? 0)
  };
}, Ry = (l, i, c, r, s) => {
  const f = i.querySelectorAll(`.${l}`);
  return !f || !f.length ? null : Array.from(f).map((d) => {
    const g = d.getBoundingClientRect();
    return {
      id: d.getAttribute("data-handleid"),
      type: l,
      nodeId: s,
      position: d.getAttribute("data-handlepos"),
      x: (g.left - c.left) / r,
      y: (g.top - c.top) / r,
      ...qd(d)
    };
  });
};
function yp({ sourceX: l, sourceY: i, targetX: c, targetY: r, sourceControlX: s, sourceControlY: f, targetControlX: d, targetControlY: g }) {
  const p = l * 0.125 + s * 0.375 + d * 0.375 + c * 0.125, x = i * 0.125 + f * 0.375 + g * 0.375 + r * 0.125, v = Math.abs(p - l), m = Math.abs(x - i);
  return [p, x, v, m];
}
function Hc(l, i) {
  return l >= 0 ? 0.5 * l : i * 25 * Math.sqrt(-l);
}
function Hy({ pos: l, x1: i, y1: c, x2: r, y2: s, c: f }) {
  switch (l) {
    case pt.Left:
      return [i - Hc(i - r, f), c];
    case pt.Right:
      return [i + Hc(r - i, f), c];
    case pt.Top:
      return [i, c - Hc(c - s, f)];
    case pt.Bottom:
      return [i, c + Hc(s - c, f)];
  }
}
function Xd({ sourceX: l, sourceY: i, sourcePosition: c = pt.Bottom, targetX: r, targetY: s, targetPosition: f = pt.Top, curvature: d = 0.25 }) {
  const [g, p] = Hy({
    pos: c,
    x1: l,
    y1: i,
    x2: r,
    y2: s,
    c: d
  }), [x, v] = Hy({
    pos: f,
    x1: r,
    y1: s,
    x2: l,
    y2: i,
    c: d
  }), [m, y, b, E] = yp({
    sourceX: l,
    sourceY: i,
    targetX: r,
    targetY: s,
    sourceControlX: g,
    sourceControlY: p,
    targetControlX: x,
    targetControlY: v
  });
  return [
    `M${l},${i} C${g},${p} ${x},${v} ${r},${s}`,
    m,
    y,
    b,
    E
  ];
}
function vp({ sourceX: l, sourceY: i, targetX: c, targetY: r }) {
  const s = Math.abs(c - l) / 2, f = c < l ? c + s : c - s, d = Math.abs(r - i) / 2, g = r < i ? r + d : r - d;
  return [f, g, s, d];
}
function $2({ sourceNode: l, targetNode: i, selected: c = !1, zIndex: r = 0, elevateOnSelect: s = !1, zIndexMode: f = "basic" }) {
  if (f === "manual")
    return r;
  const d = s && c ? r + 1e3 : r, g = Math.max(l.parentId || s && l.selected ? l.internals.z : 0, i.parentId || s && i.selected ? i.internals.z : 0);
  return d + g;
}
function J2({ sourceNode: l, targetNode: i, width: c, height: r, transform: s }) {
  const f = ur(Wc(l), Wc(i));
  f.x === f.x2 && (f.x2 += 1), f.y === f.y2 && (f.y2 += 1);
  const d = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: c / s[2],
    height: r / s[2]
  };
  return Pc(d, or(f)) > 0;
}
const k2 = ({ source: l, sourceHandle: i, target: c, targetHandle: r }) => `xy-edge__${l}${i || ""}-${c}${r || ""}`, I2 = (l, i) => i.some((c) => c.source === l.source && c.target === l.target && (c.sourceHandle === l.sourceHandle || !c.sourceHandle && !l.sourceHandle) && (c.targetHandle === l.targetHandle || !c.targetHandle && !l.targetHandle)), F2 = (l, i, c = {}) => {
  if (!l.source || !l.target)
    return c.onError?.("006", xn.error006()), i;
  const r = c.getEdgeId || k2;
  let s;
  return ap(l) ? s = { ...l } : s = {
    ...l,
    id: r(l)
  }, I2(s, i) ? i : (s.sourceHandle === null && delete s.sourceHandle, s.targetHandle === null && delete s.targetHandle, i.concat(s));
};
function pp({ sourceX: l, sourceY: i, targetX: c, targetY: r }) {
  const [s, f, d, g] = vp({
    sourceX: l,
    sourceY: i,
    targetX: c,
    targetY: r
  });
  return [`M ${l},${i}L ${c},${r}`, s, f, d, g];
}
const Uy = {
  [pt.Left]: { x: -1, y: 0 },
  [pt.Right]: { x: 1, y: 0 },
  [pt.Top]: { x: 0, y: -1 },
  [pt.Bottom]: { x: 0, y: 1 }
}, W2 = ({ source: l, sourcePosition: i = pt.Bottom, target: c }) => i === pt.Left || i === pt.Right ? l.x < c.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : l.y < c.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, By = (l, i) => Math.sqrt(Math.pow(i.x - l.x, 2) + Math.pow(i.y - l.y, 2));
function P2({ source: l, sourcePosition: i = pt.Bottom, target: c, targetPosition: r = pt.Top, center: s, offset: f, stepPosition: d }) {
  const g = Uy[i], p = Uy[r], x = { x: l.x + g.x * f, y: l.y + g.y * f }, v = { x: c.x + p.x * f, y: c.y + p.y * f }, m = W2({
    source: x,
    sourcePosition: i,
    target: v
  }), y = m.x !== 0 ? "x" : "y", b = m[y];
  let E = [], M, w;
  const N = { x: 0, y: 0 }, U = { x: 0, y: 0 }, [, , _, A] = vp({
    sourceX: l.x,
    sourceY: l.y,
    targetX: c.x,
    targetY: c.y
  });
  if (g[y] * p[y] === -1) {
    y === "x" ? (M = s.x ?? x.x + (v.x - x.x) * d, w = s.y ?? (x.y + v.y) / 2) : (M = s.x ?? (x.x + v.x) / 2, w = s.y ?? x.y + (v.y - x.y) * d);
    const Q = [
      { x: M, y: x.y },
      { x: M, y: v.y }
    ], F = [
      { x: x.x, y: w },
      { x: v.x, y: w }
    ];
    g[y] === b ? E = y === "x" ? Q : F : E = y === "x" ? F : Q;
  } else {
    const Q = [{ x: x.x, y: v.y }], F = [{ x: v.x, y: x.y }];
    if (y === "x" ? E = g.x === b ? F : Q : E = g.y === b ? Q : F, i === r) {
      const C = Math.abs(l[y] - c[y]);
      if (C <= f) {
        const Y = Math.min(f - 1, f - C);
        g[y] === b ? N[y] = (x[y] > l[y] ? -1 : 1) * Y : U[y] = (v[y] > c[y] ? -1 : 1) * Y;
      }
    }
    if (i !== r) {
      const C = y === "x" ? "y" : "x", Y = g[y] === p[C], O = x[C] > v[C], j = x[C] < v[C];
      (g[y] === 1 && (!Y && O || Y && j) || g[y] !== 1 && (!Y && j || Y && O)) && (E = y === "x" ? Q : F);
    }
    const ut = { x: x.x + N.x, y: x.y + N.y }, D = { x: v.x + U.x, y: v.y + U.y }, J = Math.max(Math.abs(ut.x - E[0].x), Math.abs(D.x - E[0].x)), W = Math.max(Math.abs(ut.y - E[0].y), Math.abs(D.y - E[0].y));
    J >= W ? (M = (ut.x + D.x) / 2, w = E[0].y) : (M = E[0].x, w = (ut.y + D.y) / 2);
  }
  const G = { x: x.x + N.x, y: x.y + N.y }, V = { x: v.x + U.x, y: v.y + U.y };
  return [[
    l,
    // we only want to add the gapped source/target if they are different from the first/last point to avoid duplicates which can cause issues with the bends
    ...G.x !== E[0].x || G.y !== E[0].y ? [G] : [],
    ...E,
    ...V.x !== E[E.length - 1].x || V.y !== E[E.length - 1].y ? [V] : [],
    c
  ], M, w, _, A];
}
function tw(l, i, c, r) {
  const s = Math.min(By(l, i) / 2, By(i, c) / 2, r), { x: f, y: d } = i;
  if (l.x === f && f === c.x || l.y === d && d === c.y)
    return `L${f} ${d}`;
  if (l.y === d) {
    const x = l.x < c.x ? -1 : 1, v = l.y < c.y ? 1 : -1;
    return `L ${f + s * x},${d}Q ${f},${d} ${f},${d + s * v}`;
  }
  const g = l.x < c.x ? 1 : -1, p = l.y < c.y ? -1 : 1;
  return `L ${f},${d + s * p}Q ${f},${d} ${f + s * g},${d}`;
}
function wd({ sourceX: l, sourceY: i, sourcePosition: c = pt.Bottom, targetX: r, targetY: s, targetPosition: f = pt.Top, borderRadius: d = 5, centerX: g, centerY: p, offset: x = 20, stepPosition: v = 0.5 }) {
  const [m, y, b, E, M] = P2({
    source: { x: l, y: i },
    sourcePosition: c,
    target: { x: r, y: s },
    targetPosition: f,
    center: { x: g, y: p },
    offset: x,
    stepPosition: v
  });
  let w = `M${m[0].x} ${m[0].y}`;
  for (let N = 1; N < m.length - 1; N++)
    w += tw(m[N - 1], m[N], m[N + 1], d);
  return w += `L${m[m.length - 1].x} ${m[m.length - 1].y}`, [w, y, b, E, M];
}
function jy(l) {
  return l && !!(l.internals.handleBounds || l.handles?.length) && !!(l.measured.width || l.width || l.initialWidth);
}
function ew(l) {
  const { sourceNode: i, targetNode: c } = l;
  if (!jy(i) || !jy(c))
    return null;
  const r = i.internals.handleBounds || Yy(i.handles), s = c.internals.handleBounds || Yy(c.handles), f = Vy(r?.source ?? [], l.sourceHandle), d = Vy(
    // when connection type is loose we can define all handles as sources and connect source -> source
    l.connectionMode === Si.Strict ? s?.target ?? [] : (s?.target ?? []).concat(s?.source ?? []),
    l.targetHandle
  );
  if (!f || !d)
    return l.onError?.("008", xn.error008(f ? "target" : "source", {
      id: l.id,
      sourceHandle: l.sourceHandle,
      targetHandle: l.targetHandle
    })), null;
  const g = f?.position || pt.Bottom, p = d?.position || pt.Top, x = Sa(i, f, g), v = Sa(c, d, p);
  return {
    sourceX: x.x,
    sourceY: x.y,
    targetX: v.x,
    targetY: v.y,
    sourcePosition: g,
    targetPosition: p
  };
}
function Yy(l) {
  if (!l)
    return null;
  const i = [], c = [];
  for (const r of l)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? i.push(r) : r.type === "target" && c.push(r);
  return {
    source: i,
    target: c
  };
}
function Sa(l, i, c = pt.Left, r = !1) {
  const s = (i?.x ?? 0) + l.internals.positionAbsolute.x, f = (i?.y ?? 0) + l.internals.positionAbsolute.y, { width: d, height: g } = i ?? bn(l);
  if (r)
    return { x: s + d / 2, y: f + g / 2 };
  switch (i?.position ?? c) {
    case pt.Top:
      return { x: s + d / 2, y: f };
    case pt.Right:
      return { x: s + d, y: f + g / 2 };
    case pt.Bottom:
      return { x: s + d / 2, y: f + g };
    case pt.Left:
      return { x: s, y: f + g / 2 };
  }
}
function Vy(l, i) {
  return l && (i ? l.find((c) => c.id === i) : l[0]) || null;
}
function Nd(l, i) {
  return l ? typeof l == "string" ? l : `${i ? `${i}__` : ""}${Object.keys(l).sort().map((r) => `${r}=${l[r]}`).join("&")}` : "";
}
function nw(l, { id: i, defaultColor: c, defaultMarkerStart: r, defaultMarkerEnd: s }) {
  const f = /* @__PURE__ */ new Set();
  return l.reduce((d, g) => ([g.markerStart || r, g.markerEnd || s].forEach((p) => {
    if (p && typeof p == "object") {
      const x = Nd(p, i);
      f.has(x) || (d.push({ id: x, color: p.color || c, ...p }), f.add(x));
    }
  }), d), []).sort((d, g) => d.id.localeCompare(g.id));
}
const xp = 1e3, lw = 10, Zd = {
  nodeOrigin: [0, 0],
  nodeExtent: Hu,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, aw = {
  ...Zd,
  checkEquality: !0
};
function Gd(l, i) {
  const c = { ...l };
  for (const r in i)
    i[r] !== void 0 && (c[r] = i[r]);
  return c;
}
function iw(l, i, c) {
  const r = Gd(Zd, c);
  for (const s of l.values())
    if (s.parentId)
      Kd(s, l, i, r);
    else {
      const f = Xu(s, r.nodeOrigin), d = xa(s.extent) ? s.extent : r.nodeExtent, g = pa(f, d, bn(s));
      s.internals.positionAbsolute = g;
    }
}
function uw(l, i) {
  if (!l.handles)
    return l.measured ? i?.internals.handleBounds : void 0;
  const c = [], r = [];
  for (const s of l.handles) {
    const f = {
      id: s.id,
      width: s.width ?? 1,
      height: s.height ?? 1,
      nodeId: l.id,
      x: s.x,
      y: s.y,
      position: s.position,
      type: s.type
    };
    s.type === "source" ? c.push(f) : s.type === "target" && r.push(f);
  }
  return {
    source: c,
    target: r
  };
}
function Qd(l) {
  return l === "manual";
}
function Td(l, i, c, r = {}) {
  const s = Gd(aw, r), f = { i: 0 }, d = new Map(i), g = s?.elevateNodesOnSelect && !Qd(s.zIndexMode) ? xp : 0;
  let p = l.length > 0, x = !1;
  i.clear(), c.clear();
  for (const v of l) {
    let m = d.get(v.id);
    if (s.checkEquality && v === m?.internals.userNode)
      i.set(v.id, m);
    else {
      const y = Xu(v, s.nodeOrigin), b = xa(v.extent) ? v.extent : s.nodeExtent, E = pa(y, b, bn(v));
      m = {
        ...s.defaults,
        ...v,
        measured: {
          width: v.measured?.width,
          height: v.measured?.height
        },
        internals: {
          positionAbsolute: E,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: uw(v, m),
          z: Sp(v, g, s.zIndexMode),
          userNode: v
        }
      }, i.set(v.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (p = !1), v.parentId && Kd(m, i, c, r, f), x ||= v.selected ?? !1;
  }
  return { nodesInitialized: p, hasSelectedNodes: x };
}
function ow(l, i) {
  if (!l.parentId)
    return;
  const c = i.get(l.parentId);
  c ? c.set(l.id, l) : i.set(l.parentId, /* @__PURE__ */ new Map([[l.id, l]]));
}
function Kd(l, i, c, r, s) {
  const { elevateNodesOnSelect: f, nodeOrigin: d, nodeExtent: g, zIndexMode: p } = Gd(Zd, r), x = l.parentId, v = i.get(x);
  if (!v) {
    console.warn(`Parent node ${x} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  ow(l, c), s && !v.parentId && v.internals.rootParentIndex === void 0 && p === "auto" && (v.internals.rootParentIndex = ++s.i, v.internals.z = v.internals.z + s.i * lw), s && v.internals.rootParentIndex !== void 0 && (s.i = v.internals.rootParentIndex);
  const m = f && !Qd(p) ? xp : 0, { x: y, y: b, z: E } = cw(l, v, d, g, m, p), { positionAbsolute: M } = l.internals, w = y !== M.x || b !== M.y;
  (w || E !== l.internals.z) && i.set(l.id, {
    ...l,
    internals: {
      ...l.internals,
      positionAbsolute: w ? { x: y, y: b } : M,
      z: E
    }
  });
}
function Sp(l, i, c) {
  const r = vn(l.zIndex) ? l.zIndex : 0;
  return Qd(c) ? r : r + (l.selected ? i : 0);
}
function cw(l, i, c, r, s, f) {
  const { x: d, y: g } = i.internals.positionAbsolute, p = bn(l), x = Xu(l, c), v = xa(l.extent) ? pa(x, l.extent, p) : x;
  let m = pa({ x: d + v.x, y: g + v.y }, r, p);
  l.extent === "parent" && (m = up(m, p, i));
  const y = Sp(l, s, f), b = i.internals.z ?? 0;
  return {
    x: m.x,
    y: m.y,
    z: b >= y ? b + 1 : y
  };
}
function $d(l, i, c, r = [0, 0]) {
  const s = [], f = /* @__PURE__ */ new Map();
  for (const d of l) {
    const g = i.get(d.parentId);
    if (!g)
      continue;
    const p = f.get(d.parentId)?.expandedRect ?? Bu(g), x = op(p, d.rect);
    f.set(d.parentId, { expandedRect: x, parent: g });
  }
  return f.size > 0 && f.forEach(({ expandedRect: d, parent: g }, p) => {
    const x = g.internals.positionAbsolute, v = bn(g), m = g.origin ?? r, y = d.x < x.x ? Math.round(Math.abs(x.x - d.x)) : 0, b = d.y < x.y ? Math.round(Math.abs(x.y - d.y)) : 0, E = Math.max(v.width, Math.round(d.width)), M = Math.max(v.height, Math.round(d.height)), w = (E - v.width) * m[0], N = (M - v.height) * m[1];
    (y > 0 || b > 0 || w || N) && (s.push({
      id: p,
      type: "position",
      position: {
        x: g.position.x - y + w,
        y: g.position.y - b + N
      }
    }), c.get(p)?.forEach((U) => {
      l.some((_) => _.id === U.id) || s.push({
        id: U.id,
        type: "position",
        position: {
          x: U.position.x + y,
          y: U.position.y + b
        }
      });
    })), (v.width < d.width || v.height < d.height || y || b) && s.push({
      id: p,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: E + (y ? m[0] * y - w : 0),
        height: M + (b ? m[1] * b - N : 0)
      }
    });
  }), s;
}
function rw(l, i, c, r, s, f, d) {
  const g = r?.querySelector(".xyflow__viewport");
  let p = !1;
  if (!g)
    return { changes: [], updatedInternals: p };
  const x = [], v = window.getComputedStyle(g), { m22: m } = new window.DOMMatrixReadOnly(v.transform), y = [];
  for (const b of l.values()) {
    const E = i.get(b.id);
    if (!E)
      continue;
    if (E.hidden) {
      i.set(E.id, {
        ...E,
        internals: {
          ...E.internals,
          handleBounds: void 0
        }
      }), p = !0;
      continue;
    }
    const M = qd(b.nodeElement), w = E.measured.width !== M.width || E.measured.height !== M.height;
    if (!!(M.width && M.height && (w || !E.internals.handleBounds || b.force))) {
      const U = b.nodeElement.getBoundingClientRect(), _ = xa(E.extent) ? E.extent : f;
      let { positionAbsolute: A } = E.internals;
      if (E.parentId && E.extent === "parent") {
        const V = i.get(E.parentId);
        V && (A = up(A, M, V));
      } else _ && (A = pa(A, _, M));
      const G = {
        ...E,
        measured: M,
        internals: {
          ...E.internals,
          positionAbsolute: A,
          handleBounds: {
            source: Ry("source", b.nodeElement, U, m, E.id),
            target: Ry("target", b.nodeElement, U, m, E.id)
          }
        }
      };
      i.set(E.id, G), E.parentId && Kd(G, i, c, { nodeOrigin: s, zIndexMode: d }), p = !0, w && (x.push({
        id: E.id,
        type: "dimensions",
        dimensions: M
      }), E.expandParent && E.parentId && y.push({
        id: E.id,
        parentId: E.parentId,
        rect: Bu(G, s)
      }));
    }
  }
  if (y.length > 0) {
    const b = $d(y, i, c, s);
    x.push(...b);
  }
  return { changes: x, updatedInternals: p };
}
async function sw({ delta: l, panZoom: i, transform: c, translateExtent: r, width: s, height: f }) {
  if (!i || !l.x && !l.y)
    return !1;
  const d = await i.setViewportConstrained({
    x: c[0] + l.x,
    y: c[1] + l.y,
    zoom: c[2]
  }, [
    [0, 0],
    [s, f]
  ], r);
  return !!d && (d.x !== c[0] || d.y !== c[1] || d.k !== c[2]);
}
function Ly(l, i, c, r, s, f) {
  let d = s;
  const g = r.get(d) || /* @__PURE__ */ new Map();
  r.set(d, g.set(c, i)), d = `${s}-${l}`;
  const p = r.get(d) || /* @__PURE__ */ new Map();
  if (r.set(d, p.set(c, i)), f) {
    d = `${s}-${l}-${f}`;
    const x = r.get(d) || /* @__PURE__ */ new Map();
    r.set(d, x.set(c, i));
  }
}
function bp(l, i, c) {
  l.clear(), i.clear();
  for (const r of c) {
    const { source: s, target: f, sourceHandle: d = null, targetHandle: g = null } = r, p = { edgeId: r.id, source: s, target: f, sourceHandle: d, targetHandle: g }, x = `${s}-${d}--${f}-${g}`, v = `${f}-${g}--${s}-${d}`;
    Ly("source", p, v, l, s, d), Ly("target", p, x, l, f, g), i.set(r.id, r);
  }
}
function Ep(l, i) {
  if (!l.parentId)
    return !1;
  const c = i.get(l.parentId);
  return c ? c.selected ? !0 : Ep(c, i) : !1;
}
function qy(l, i, c) {
  let r = l;
  do {
    if (r?.matches?.(i))
      return !0;
    if (r === c)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function fw(l, i, c, r) {
  const s = /* @__PURE__ */ new Map();
  for (const [f, d] of l)
    if ((d.selected || d.id === r) && (!d.parentId || !Ep(d, l)) && (d.draggable || i && typeof d.draggable > "u")) {
      const g = l.get(f);
      g && s.set(f, {
        id: f,
        position: g.position || { x: 0, y: 0 },
        distance: {
          x: c.x - g.internals.positionAbsolute.x,
          y: c.y - g.internals.positionAbsolute.y
        },
        extent: g.extent,
        parentId: g.parentId,
        origin: g.origin,
        expandParent: g.expandParent,
        internals: {
          positionAbsolute: g.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: g.measured.width ?? 0,
          height: g.measured.height ?? 0
        }
      });
    }
  return s;
}
function ud({ nodeId: l, dragItems: i, nodeLookup: c, dragging: r = !0 }) {
  const s = [];
  for (const [d, g] of i) {
    const p = c.get(d)?.internals.userNode;
    p && s.push({
      ...p,
      position: g.position,
      dragging: r
    });
  }
  if (!l)
    return [s[0], s];
  const f = c.get(l)?.internals.userNode;
  return [
    f ? {
      ...f,
      position: i.get(l)?.position || f.position,
      dragging: r
    } : s[0],
    s
  ];
}
function dw({ dragItems: l, snapGrid: i, x: c, y: r }) {
  const s = l.values().next().value;
  if (!s)
    return null;
  const f = {
    x: c - s.distance.x,
    y: r - s.distance.y
  }, d = Gu(f, i);
  return {
    x: d.x - f.x,
    y: d.y - f.y
  };
}
function hw({ onNodeMouseDown: l, getStoreItems: i, onDragStart: c, onDrag: r, onDragStop: s }) {
  let f = { x: null, y: null }, d = 0, g = /* @__PURE__ */ new Map(), p = !1, x = { x: 0, y: 0 }, v = null, m = !1, y = null, b = !1, E = !1, M = null;
  function w({ noDragClassName: U, handleSelector: _, domNode: A, isSelectable: G, nodeId: V, nodeClickDistance: B = 0 }) {
    y = $e(A);
    function Q({ x: J, y: W }) {
      const { nodeLookup: C, nodeExtent: Y, snapGrid: O, snapToGrid: j, nodeOrigin: Z, onNodeDrag: k, onSelectionDrag: nt, onError: it, updateNodePositions: dt } = i();
      f = { x: J, y: W };
      let vt = !1;
      const T = g.size > 1, P = T && Y ? _d(Zu(g)) : null, st = T && j ? dw({
        dragItems: g,
        snapGrid: O,
        x: J,
        y: W
      }) : null;
      for (const [ot, tt] of g) {
        if (!C.has(ot))
          continue;
        let ft = { x: J - tt.distance.x, y: W - tt.distance.y };
        j && (ft = st ? {
          x: Math.round(ft.x + st.x),
          y: Math.round(ft.y + st.y)
        } : Gu(ft, O));
        let gt = null;
        if (T && Y && !tt.extent && P) {
          const { positionAbsolute: xt } = tt.internals, wt = xt.x - P.x + Y[0][0], _t = xt.x + tt.measured.width - P.x2 + Y[1][0], Ct = xt.y - P.y + Y[0][1], Ht = xt.y + tt.measured.height - P.y2 + Y[1][1];
          gt = [
            [wt, Ct],
            [_t, Ht]
          ];
        }
        const { position: ct, positionAbsolute: rt } = ip({
          nodeId: ot,
          nextPosition: ft,
          nodeLookup: C,
          nodeExtent: gt || Y,
          nodeOrigin: Z,
          onError: it
        });
        vt = vt || tt.position.x !== ct.x || tt.position.y !== ct.y, tt.position = ct, tt.internals.positionAbsolute = rt;
      }
      if (E = E || vt, !!vt && (dt(g, !0), M && (r || k || !V && nt))) {
        const [ot, tt] = ud({
          nodeId: V,
          dragItems: g,
          nodeLookup: C
        });
        r?.(M, g, ot, tt), k?.(M, ot, tt), V || nt?.(M, tt);
      }
    }
    async function F() {
      if (!v)
        return;
      const { transform: J, panBy: W, autoPanSpeed: C, autoPanOnNodeDrag: Y } = i();
      if (!Y) {
        p = !1, cancelAnimationFrame(d);
        return;
      }
      const [O, j] = Vd(x, v, C);
      (O !== 0 || j !== 0) && (f.x = (f.x ?? 0) - O / J[2], f.y = (f.y ?? 0) - j / J[2], await W({ x: O, y: j }) && Q(f)), d = requestAnimationFrame(F);
    }
    function ut(J) {
      const { nodeLookup: W, multiSelectionActive: C, nodesDraggable: Y, transform: O, snapGrid: j, snapToGrid: Z, selectNodesOnDrag: k, onNodeDragStart: nt, onSelectionDragStart: it, unselectNodesAndEdges: dt } = i();
      m = !0, (!k || !G) && !C && V && (W.get(V)?.selected || dt()), G && k && V && l?.(V);
      const vt = Mu(J.sourceEvent, { transform: O, snapGrid: j, snapToGrid: Z, containerBounds: v });
      if (f = vt, g = fw(W, Y, vt, V), g.size > 0 && (c || nt || !V && it)) {
        const [T, P] = ud({
          nodeId: V,
          dragItems: g,
          nodeLookup: W
        });
        c?.(J.sourceEvent, g, T, P), nt?.(J.sourceEvent, T, P), V || it?.(J.sourceEvent, P);
      }
    }
    const D = Vv().clickDistance(B).on("start", (J) => {
      const { domNode: W, nodeDragThreshold: C, transform: Y, snapGrid: O, snapToGrid: j } = i();
      v = W?.getBoundingClientRect() || null, b = !1, E = !1, M = J.sourceEvent, C === 0 && ut(J), f = Mu(J.sourceEvent, { transform: Y, snapGrid: O, snapToGrid: j, containerBounds: v }), x = pn(J.sourceEvent, v);
    }).on("drag", (J) => {
      const { autoPanOnNodeDrag: W, transform: C, snapGrid: Y, snapToGrid: O, nodeDragThreshold: j, nodeLookup: Z } = i(), k = Mu(J.sourceEvent, { transform: C, snapGrid: Y, snapToGrid: O, containerBounds: v });
      if (M = J.sourceEvent, (J.sourceEvent.type === "touchmove" && J.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      V && !Z.has(V)) && (b = !0), !b) {
        if (!p && W && m && (p = !0, F()), !m) {
          const nt = pn(J.sourceEvent, v), it = nt.x - x.x, dt = nt.y - x.y;
          Math.sqrt(it * it + dt * dt) > j && ut(J);
        }
        (f.x !== k.xSnapped || f.y !== k.ySnapped) && g && m && (x = pn(J.sourceEvent, v), Q(k));
      }
    }).on("end", (J) => {
      if (!m || b) {
        b && g.size > 0 && i().updateNodePositions(g, !1);
        return;
      }
      if (p = !1, m = !1, cancelAnimationFrame(d), g.size > 0) {
        const { nodeLookup: W, updateNodePositions: C, onNodeDragStop: Y, onSelectionDragStop: O } = i();
        if (E && (C(g, !1), E = !1), s || Y || !V && O) {
          const [j, Z] = ud({
            nodeId: V,
            dragItems: g,
            nodeLookup: W,
            dragging: !1
          });
          s?.(J.sourceEvent, g, j, Z), Y?.(J.sourceEvent, j, Z), V || O?.(J.sourceEvent, Z);
        }
      }
    }).filter((J) => {
      const W = J.target;
      return !J.button && (!U || !qy(W, `.${U}`, A)) && (!_ || qy(W, _, A));
    });
    y.call(D);
  }
  function N() {
    y?.on(".drag", null);
  }
  return {
    update: w,
    destroy: N
  };
}
function gw(l, i, c) {
  const r = [], s = {
    x: l.x - c,
    y: l.y - c,
    width: c * 2,
    height: c * 2
  };
  for (const f of i.values())
    Pc(s, Bu(f)) > 0 && r.push(f);
  return r;
}
const mw = 250;
function yw(l, i, c, r) {
  let s = [], f = 1 / 0;
  const d = gw(l, c, i + mw);
  for (const g of d) {
    const p = [...g.internals.handleBounds?.source ?? [], ...g.internals.handleBounds?.target ?? []];
    for (const x of p) {
      if (r.nodeId === x.nodeId && r.type === x.type && r.id === x.id)
        continue;
      const { x: v, y: m } = Sa(g, x, x.position, !0), y = Math.sqrt(Math.pow(v - l.x, 2) + Math.pow(m - l.y, 2));
      y > i || (y < f ? (s = [{ ...x, x: v, y: m }], f = y) : y === f && s.push({ ...x, x: v, y: m }));
    }
  }
  if (!s.length)
    return null;
  if (s.length > 1) {
    const g = r.type === "source" ? "target" : "source";
    return s.find((p) => p.type === g) ?? s[0];
  }
  return s[0];
}
function _p(l, i, c, r, s, f = !1) {
  const d = r.get(l);
  if (!d)
    return null;
  const g = s === "strict" ? d.internals.handleBounds?.[i] : [...d.internals.handleBounds?.source ?? [], ...d.internals.handleBounds?.target ?? []], p = (c ? g?.find((x) => x.id === c) : g?.[0]) ?? null;
  return p && f ? { ...p, ...Sa(d, p, p.position, !0) } : p;
}
function wp(l, i) {
  return l || (i?.classList.contains("target") ? "target" : i?.classList.contains("source") ? "source" : null);
}
function vw(l, i) {
  let c = null;
  return i ? c = !0 : l && !i && (c = !1), c;
}
const Np = () => !0;
function pw(l, { connectionMode: i, connectionRadius: c, handleId: r, nodeId: s, edgeUpdaterType: f, isTarget: d, domNode: g, nodeLookup: p, lib: x, autoPanOnConnect: v, flowId: m, panBy: y, cancelConnection: b, onConnectStart: E, onConnect: M, onConnectEnd: w, isValidConnection: N = Np, onReconnectEnd: U, updateConnection: _, getTransform: A, getFromHandle: G, autoPanSpeed: V, dragThreshold: B = 1, handleDomNode: Q }) {
  const F = hp(l.target);
  let ut = 0, D;
  const { x: J, y: W } = pn(l), C = wp(f, Q), Y = g?.getBoundingClientRect();
  let O = !1;
  if (!Y || !C)
    return;
  const j = _p(s, C, r, p, i);
  if (!j)
    return;
  let Z = pn(l, Y), k = !1, nt = null, it = !1, dt = null;
  function vt() {
    if (!v || !Y)
      return;
    const [ct, rt] = Vd(Z, Y, V);
    y({ x: ct, y: rt }), ut = requestAnimationFrame(vt);
  }
  const T = {
    ...j,
    nodeId: s,
    type: C,
    position: j.position
  }, P = p.get(s);
  let ot = {
    inProgress: !0,
    isValid: null,
    from: Sa(P, T, pt.Left, !0),
    fromHandle: T,
    fromPosition: T.position,
    fromNode: P,
    to: Z,
    toHandle: null,
    toPosition: My[T.position],
    toNode: null,
    pointer: Z
  };
  function tt() {
    O = !0, _(ot), E?.(l, { nodeId: s, handleId: r, handleType: C });
  }
  B === 0 && tt();
  function ft(ct) {
    if (!O) {
      const { x: Ht, y: Ot } = pn(ct), Pt = Ht - J, xe = Ot - W;
      if (!(Pt * Pt + xe * xe > B * B))
        return;
      tt();
    }
    if (!G() || !T) {
      gt(ct);
      return;
    }
    const rt = A();
    Z = pn(ct, Y), D = yw(Qu(Z, rt, !1, [1, 1]), c, p, T), k || (vt(), k = !0);
    const xt = Tp(ct, {
      handle: D,
      connectionMode: i,
      fromNodeId: s,
      fromHandleId: r,
      fromType: d ? "target" : "source",
      isValidConnection: N,
      doc: F,
      lib: x,
      flowId: m,
      nodeLookup: p
    });
    dt = xt.handleDomNode, nt = xt.connection, it = vw(!!D, xt.isValid);
    const wt = p.get(s), _t = wt ? Sa(wt, T, pt.Left, !0) : ot.from, Ct = {
      ...ot,
      from: _t,
      isValid: it,
      to: xt.toHandle && it ? Ei({ x: xt.toHandle.x, y: xt.toHandle.y }, rt) : Z,
      toHandle: xt.toHandle,
      toPosition: it && xt.toHandle ? xt.toHandle.position : My[T.position],
      toNode: xt.toHandle ? p.get(xt.toHandle.nodeId) : null,
      pointer: Z
    };
    _(Ct), ot = Ct;
  }
  function gt(ct) {
    if (!("touches" in ct && ct.touches.length > 0)) {
      if (O) {
        (D || dt) && nt && it && M?.(nt);
        const { inProgress: rt, ...xt } = ot, wt = {
          ...xt,
          toPosition: ot.toHandle ? ot.toPosition : null
        };
        w?.(ct, wt), f && U?.(ct, wt);
      }
      b(), cancelAnimationFrame(ut), k = !1, it = !1, nt = null, dt = null, F.removeEventListener("mousemove", ft), F.removeEventListener("mouseup", gt), F.removeEventListener("touchmove", ft), F.removeEventListener("touchend", gt);
    }
  }
  F.addEventListener("mousemove", ft), F.addEventListener("mouseup", gt), F.addEventListener("touchmove", ft), F.addEventListener("touchend", gt);
}
function Tp(l, { handle: i, connectionMode: c, fromNodeId: r, fromHandleId: s, fromType: f, doc: d, lib: g, flowId: p, isValidConnection: x = Np, nodeLookup: v }) {
  const m = f === "target", y = i ? d.querySelector(`.${g}-flow__handle[data-id="${p}-${i?.nodeId}-${i?.id}-${i?.type}"]`) : null, { x: b, y: E } = pn(l), M = d.elementFromPoint(b, E), w = M?.classList.contains(`${g}-flow__handle`) ? M : y, N = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const U = wp(void 0, w), _ = w.getAttribute("data-nodeid"), A = w.getAttribute("data-handleid"), G = w.classList.contains("connectable"), V = w.classList.contains("connectableend");
    if (!_ || !U)
      return N;
    const B = {
      source: m ? _ : r,
      sourceHandle: m ? A : s,
      target: m ? r : _,
      targetHandle: m ? s : A
    };
    N.connection = B;
    const F = G && V && (c === Si.Strict ? m && U === "source" || !m && U === "target" : _ !== r || A !== s);
    N.isValid = F && x(B), N.toHandle = _p(_, U, A, v, c, !0);
  }
  return N;
}
const Cd = {
  onPointerDown: pw,
  isValid: Tp
};
function xw({ domNode: l, panZoom: i, getTransform: c, getViewScale: r }) {
  const s = $e(l);
  function f({ translateExtent: g, width: p, height: x, zoomStep: v = 1, pannable: m = !0, zoomable: y = !0, inversePan: b = !1 }) {
    const E = (_) => {
      if (_.sourceEvent.type !== "wheel" || !i)
        return;
      const A = c(), G = _.sourceEvent.ctrlKey && ju() ? 10 : 1, V = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * v, B = A[2] * Math.pow(2, V * G);
      i.scaleTo(B);
    };
    let M = [0, 0];
    const w = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (M = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, N = (_) => {
      const A = c();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !i)
        return;
      const G = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], V = [G[0] - M[0], G[1] - M[1]];
      M = G;
      const B = r() * Math.max(A[2], Math.log(A[2])) * (b ? -1 : 1), Q = {
        x: A[0] - V[0] * B,
        y: A[1] - V[1] * B
      }, F = [
        [0, 0],
        [p, x]
      ];
      i.setViewportConstrained({
        x: Q.x,
        y: Q.y,
        zoom: A[2]
      }, F, g);
    }, U = tp().on("start", w).on("zoom", m ? N : null).on("zoom.wheel", y ? E : null);
    s.call(U, {});
  }
  function d() {
    s.on("zoom", null);
  }
  return {
    update: f,
    destroy: d,
    pointer: mn
  };
}
const cr = (l) => ({
  x: l.x,
  y: l.y,
  zoom: l.k
}), od = ({ x: l, y: i, zoom: c }) => ir.translate(l, i).scale(c), Bl = (l, i) => l.target.closest(`.${i}`), Cp = (l, i) => i === 2 && Array.isArray(l) && l.includes(2), Sw = (l) => ((l *= 2) <= 1 ? l * l * l : (l -= 2) * l * l + 2) / 2, cd = (l, i = 0, c = Sw, r = () => {
}) => {
  const s = typeof i == "number" && i > 0;
  return s || r(), s ? l.transition().duration(i).ease(c).on("end", r) : l;
}, zp = (l) => {
  const i = l.ctrlKey && ju() ? 10 : 1;
  return -l.deltaY * (l.deltaMode === 1 ? 0.05 : l.deltaMode ? 1 : 2e-3) * i;
};
function bw({ zoomPanValues: l, noWheelClassName: i, d3Selection: c, d3Zoom: r, panOnScrollMode: s, panOnScrollSpeed: f, zoomOnPinch: d, onPanZoomStart: g, onPanZoom: p, onPanZoomEnd: x }) {
  return (v) => {
    if (Bl(v, i))
      return v.ctrlKey && v.preventDefault(), !1;
    v.preventDefault(), v.stopImmediatePropagation();
    const m = c.property("__zoom").k || 1;
    if (v.ctrlKey && d) {
      const w = mn(v), N = zp(v), U = m * Math.pow(2, N);
      r.scaleTo(c, U, w, v);
      return;
    }
    const y = v.deltaMode === 1 ? 20 : 1;
    let b = s === ma.Vertical ? 0 : v.deltaX * y, E = s === ma.Horizontal ? 0 : v.deltaY * y;
    !ju() && v.shiftKey && s !== ma.Vertical && (b = v.deltaY * y, E = 0), r.translateBy(
      c,
      -(b / m) * f,
      -(E / m) * f,
      // @ts-ignore
      { internal: !0 }
    );
    const M = cr(c.property("__zoom"));
    clearTimeout(l.panScrollTimeout), l.isPanScrolling ? p?.(v, M) : (l.isPanScrolling = !0, g?.(v, M)), l.panScrollTimeout = setTimeout(() => {
      x?.(v, M), l.isPanScrolling = !1;
    }, 150);
  };
}
function Ew({ noWheelClassName: l, preventScrolling: i, d3ZoomHandler: c }) {
  return function(r, s) {
    const f = r.type === "wheel", d = !i && f && !r.ctrlKey, g = Bl(r, l);
    if (r.ctrlKey && f && g && r.preventDefault(), d || g)
      return null;
    r.preventDefault(), c.call(this, r, s);
  };
}
function _w({ zoomPanValues: l, onDraggingChange: i, onPanZoomStart: c }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const s = cr(r.transform);
    l.mouseButton = r.sourceEvent?.button || 0, l.isZoomingOrPanning = !0, l.prevViewport = s, r.sourceEvent?.type === "mousedown" && i(!0), c && c?.(r.sourceEvent, s);
  };
}
function ww({ zoomPanValues: l, panOnDrag: i, onPaneContextMenu: c, onTransformChange: r, onPanZoom: s }) {
  return (f) => {
    l.usedRightMouseButton = !!(c && Cp(i, l.mouseButton ?? 0)), f.sourceEvent?.sync || r([f.transform.x, f.transform.y, f.transform.k]), s && !f.sourceEvent?.internal && s?.(f.sourceEvent, cr(f.transform));
  };
}
function Nw({ zoomPanValues: l, panOnDrag: i, panOnScroll: c, onDraggingChange: r, onPanZoomEnd: s, onPaneContextMenu: f }) {
  return (d) => {
    if (!d.sourceEvent?.internal && (l.isZoomingOrPanning = !1, f && Cp(i, l.mouseButton ?? 0) && !l.usedRightMouseButton && d.sourceEvent && f(d.sourceEvent), l.usedRightMouseButton = !1, r(!1), s)) {
      const g = cr(d.transform);
      l.prevViewport = g, clearTimeout(l.timerId), l.timerId = setTimeout(
        () => {
          s?.(d.sourceEvent, g);
        },
        // we need a setTimeout for panOnScroll to suppress multiple end events fired during scroll
        c ? 150 : 0
      );
    }
  };
}
function Tw({ panActivationKeyPressed: l, zoomActivationKeyPressed: i, zoomOnScroll: c, zoomOnPinch: r, panOnDrag: s, panOnScroll: f, zoomOnDoubleClick: d, userSelectionActive: g, noWheelClassName: p, noPanClassName: x, lib: v, connectionInProgress: m }) {
  return (y) => {
    const b = i || c, E = r && y.ctrlKey, M = y.type === "wheel";
    if (y.button === 1 && y.type === "mousedown" && (Bl(y, `${v}-flow__node`) || Bl(y, `${v}-flow__edge`) || Bl(y, `${v}-flow__selection`) || Bl(y, `${v}-flow__nodesselection`)))
      return !0;
    if (!s && !b && !f && !d && !r || g || m && !M || Bl(y, p) && M || Bl(y, x) && (!M || f && M && !i) || !r && y.ctrlKey && M)
      return !1;
    if (!r && y.type === "touchstart" && y.touches?.length > 1)
      return y.preventDefault(), !1;
    if (!b && !f && !E && M || !s && (y.type === "mousedown" || y.type === "touchstart") || Array.isArray(s) && !s.includes(y.button) && y.type === "mousedown")
      return !1;
    const w = Array.isArray(s) && s.includes(y.button) || !y.button || y.button <= 1;
    return (!y.ctrlKey || M || l) && w;
  };
}
function Cw({ domNode: l, minZoom: i, maxZoom: c, translateExtent: r, viewport: s, onPanZoom: f, onPanZoomStart: d, onPanZoomEnd: g, onDraggingChange: p }) {
  const x = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, v = l.getBoundingClientRect();
  let m = [
    [0, 0],
    [v.width, v.height]
  ];
  (typeof ResizeObserver < "u" ? new ResizeObserver((W) => {
    const C = W[0];
    C && (m = [
      [0, 0],
      [C.contentRect.width, C.contentRect.height]
    ]);
  }) : null)?.observe(l);
  const b = tp().extent(() => m).scaleExtent([i, c]).translateExtent(r), E = $e(l).call(b);
  A({
    x: s.x,
    y: s.y,
    zoom: bi(s.zoom, i, c)
  }, [
    [0, 0],
    [v.width, v.height]
  ], r);
  const M = E.on("wheel.zoom"), w = E.on("dblclick.zoom");
  b.wheelDelta(zp);
  async function N(W, C) {
    return E ? new Promise((Y) => {
      b?.interpolate(C?.interpolate === "linear" ? zu : Lc).transform(cd(E, C?.duration, C?.ease, () => Y(!0)), W);
    }) : !1;
  }
  function U({ noWheelClassName: W, noPanClassName: C, onPaneContextMenu: Y, userSelectionActive: O, panOnScroll: j, panOnDrag: Z, panOnScrollMode: k, panOnScrollSpeed: nt, preventScrolling: it, zoomOnPinch: dt, zoomOnScroll: vt, zoomOnDoubleClick: T, panActivationKeyPressed: P = !1, zoomActivationKeyPressed: st, lib: ot, onTransformChange: tt, connectionInProgress: ft, paneClickDistance: gt, selectionOnDrag: ct }) {
    O && !x.isZoomingOrPanning && _();
    const rt = j && !st && !O;
    b.clickDistance(ct ? 1 / 0 : !vn(gt) || gt < 0 ? 0 : gt);
    const xt = rt ? bw({
      zoomPanValues: x,
      noWheelClassName: W,
      d3Selection: E,
      d3Zoom: b,
      panOnScrollMode: k,
      panOnScrollSpeed: nt,
      zoomOnPinch: dt,
      onPanZoomStart: d,
      onPanZoom: f,
      onPanZoomEnd: g
    }) : Ew({
      noWheelClassName: W,
      preventScrolling: it,
      d3ZoomHandler: M
    });
    E.on("wheel.zoom", xt, { passive: !1 });
    const wt = _w({
      zoomPanValues: x,
      onDraggingChange: p,
      onPanZoomStart: d
    });
    b.on("start", wt);
    const _t = ww({
      zoomPanValues: x,
      panOnDrag: Z,
      onPaneContextMenu: !!Y,
      onPanZoom: f,
      onTransformChange: tt
    });
    b.on("zoom", _t);
    const Ct = Nw({
      zoomPanValues: x,
      panOnDrag: Z,
      panOnScroll: j,
      onPaneContextMenu: Y,
      onPanZoomEnd: g,
      onDraggingChange: p
    });
    b.on("end", Ct);
    const Ht = Tw({
      panActivationKeyPressed: P,
      zoomActivationKeyPressed: st,
      panOnDrag: Z,
      zoomOnScroll: vt,
      panOnScroll: j,
      zoomOnDoubleClick: T,
      zoomOnPinch: dt,
      userSelectionActive: O,
      noPanClassName: C,
      noWheelClassName: W,
      lib: ot,
      connectionInProgress: ft
    });
    b.filter(Ht), T ? E.on("dblclick.zoom", w) : E.on("dblclick.zoom", null);
  }
  function _() {
    b.on("zoom", null);
  }
  async function A(W, C, Y) {
    const O = od(W), j = b?.constrain()(O, C, Y);
    return j && await N(j), j;
  }
  async function G(W, C) {
    const Y = od(W);
    return await N(Y, C), Y;
  }
  function V(W) {
    if (E) {
      const C = od(W), Y = E.property("__zoom");
      (Y.k !== W.zoom || Y.x !== W.x || Y.y !== W.y) && b?.transform(E, C, null, { sync: !0 });
    }
  }
  function B() {
    const W = E ? Pv(E.node()) : { x: 0, y: 0, k: 1 };
    return { x: W.x, y: W.y, zoom: W.k };
  }
  async function Q(W, C) {
    return E ? new Promise((Y) => {
      b?.interpolate(C?.interpolate === "linear" ? zu : Lc).scaleTo(cd(E, C?.duration, C?.ease, () => Y(!0)), W);
    }) : !1;
  }
  async function F(W, C) {
    return E ? new Promise((Y) => {
      b?.interpolate(C?.interpolate === "linear" ? zu : Lc).scaleBy(cd(E, C?.duration, C?.ease, () => Y(!0)), W);
    }) : !1;
  }
  function ut(W) {
    b?.scaleExtent(W);
  }
  function D(W) {
    b?.translateExtent(W);
  }
  function J(W) {
    const C = !vn(W) || W < 0 ? 0 : W;
    b?.clickDistance(C);
  }
  return {
    update: U,
    destroy: _,
    setViewport: G,
    setViewportConstrained: A,
    getViewport: B,
    scaleTo: Q,
    scaleBy: F,
    setScaleExtent: ut,
    setTranslateExtent: D,
    syncViewport: V,
    setClickDistance: J
  };
}
var _i;
(function(l) {
  l.Line = "line", l.Handle = "handle";
})(_i || (_i = {}));
function zw({ width: l, prevWidth: i, height: c, prevHeight: r, affectsX: s, affectsY: f }) {
  const d = l - i, g = c - r, p = [d > 0 ? 1 : d < 0 ? -1 : 0, g > 0 ? 1 : g < 0 ? -1 : 0];
  return d && s && (p[0] = p[0] * -1), g && f && (p[1] = p[1] * -1), p;
}
function Xy(l) {
  const i = l.includes("right") || l.includes("left"), c = l.includes("bottom") || l.includes("top"), r = l.includes("left"), s = l.includes("top");
  return {
    isHorizontal: i,
    isVertical: c,
    affectsX: r,
    affectsY: s
  };
}
function Hl(l, i) {
  return Math.max(0, i - l);
}
function Ul(l, i) {
  return Math.max(0, l - i);
}
function Uc(l, i, c) {
  return Math.max(0, i - l, l - c);
}
function Zy(l, i) {
  return l ? !i : i;
}
function Mw(l, i, c, r, s, f, d, g) {
  let { affectsX: p, affectsY: x } = i;
  const { isHorizontal: v, isVertical: m } = i, y = v && m, { xSnapped: b, ySnapped: E } = c, { minWidth: M, maxWidth: w, minHeight: N, maxHeight: U } = r, { x: _, y: A, width: G, height: V, aspectRatio: B } = l;
  let Q = Math.floor(v ? b - l.pointerX : 0), F = Math.floor(m ? E - l.pointerY : 0);
  const ut = G + (p ? -Q : Q), D = V + (x ? -F : F), J = -f[0] * G, W = -f[1] * V;
  let C = Uc(ut, M, w), Y = Uc(D, N, U);
  if (d) {
    let Z = 0, k = 0;
    p && Q < 0 ? Z = Hl(_ + Q + J, d[0][0]) : !p && Q > 0 && (Z = Ul(_ + ut + J, d[1][0])), x && F < 0 ? k = Hl(A + F + W, d[0][1]) : !x && F > 0 && (k = Ul(A + D + W, d[1][1])), C = Math.max(C, Z), Y = Math.max(Y, k);
  }
  if (g) {
    let Z = 0, k = 0;
    p && Q > 0 ? Z = Ul(_ + Q, g[0][0]) : !p && Q < 0 && (Z = Hl(_ + ut, g[1][0])), x && F > 0 ? k = Ul(A + F, g[0][1]) : !x && F < 0 && (k = Hl(A + D, g[1][1])), C = Math.max(C, Z), Y = Math.max(Y, k);
  }
  if (s) {
    if (v) {
      const Z = Uc(ut / B, N, U) * B;
      if (C = Math.max(C, Z), d) {
        let k = 0;
        !p && !x || p && !x && y ? k = Ul(A + W + ut / B, d[1][1]) * B : k = Hl(A + W + (p ? Q : -Q) / B, d[0][1]) * B, C = Math.max(C, k);
      }
      if (g) {
        let k = 0;
        !p && !x || p && !x && y ? k = Hl(A + ut / B, g[1][1]) * B : k = Ul(A + (p ? Q : -Q) / B, g[0][1]) * B, C = Math.max(C, k);
      }
    }
    if (m) {
      const Z = Uc(D * B, M, w) / B;
      if (Y = Math.max(Y, Z), d) {
        let k = 0;
        !p && !x || x && !p && y ? k = Ul(_ + D * B + J, d[1][0]) / B : k = Hl(_ + (x ? F : -F) * B + J, d[0][0]) / B, Y = Math.max(Y, k);
      }
      if (g) {
        let k = 0;
        !p && !x || x && !p && y ? k = Hl(_ + D * B, g[1][0]) / B : k = Ul(_ + (x ? F : -F) * B, g[0][0]) / B, Y = Math.max(Y, k);
      }
    }
  }
  F = F + (F < 0 ? Y : -Y), Q = Q + (Q < 0 ? C : -C), s && (y ? ut > D * B ? F = (Zy(p, x) ? -Q : Q) / B : Q = (Zy(p, x) ? -F : F) * B : v ? (F = Q / B, x = p) : (Q = F * B, p = x));
  const O = p ? _ + Q : _, j = x ? A + F : A;
  return {
    width: G + (p ? -Q : Q),
    height: V + (x ? -F : F),
    x: f[0] * Q * (p ? -1 : 1) + O,
    y: f[1] * F * (x ? -1 : 1) + j
  };
}
const Mp = { width: 0, height: 0, x: 0, y: 0 }, Aw = {
  ...Mp,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Ow(l, i, c) {
  const r = i.position.x + l.position.x, s = i.position.y + l.position.y, f = l.measured.width ?? 0, d = l.measured.height ?? 0, g = c[0] * f, p = c[1] * d;
  return [
    [r - g, s - p],
    [r + f - g, s + d - p]
  ];
}
function Dw({ domNode: l, nodeId: i, getStoreItems: c, onChange: r, onEnd: s }) {
  const f = $e(l);
  let d = {
    controlDirection: Xy("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function g({ controlPosition: x, boundaries: v, keepAspectRatio: m, resizeDirection: y, onResizeStart: b, onResize: E, onResizeEnd: M, shouldResize: w }) {
    let N = { ...Mp }, U = { ...Aw };
    d = {
      boundaries: v,
      resizeDirection: y,
      keepAspectRatio: m,
      controlDirection: Xy(x)
    };
    let _, A = null, G = [], V, B, Q;
    const F = Vv().on("start", (ut) => {
      const { nodeLookup: D, transform: J, snapGrid: W, snapToGrid: C, nodeOrigin: Y, paneDomNode: O } = c();
      if (_ = D.get(i), !_)
        return;
      A = O?.getBoundingClientRect() ?? null;
      const { xSnapped: j, ySnapped: Z } = Mu(ut.sourceEvent, {
        transform: J,
        snapGrid: W,
        snapToGrid: C,
        containerBounds: A
      });
      N = {
        width: _.measured.width ?? 0,
        height: _.measured.height ?? 0,
        x: _.position.x ?? 0,
        y: _.position.y ?? 0
      }, U = {
        ...N,
        pointerX: j,
        pointerY: Z,
        aspectRatio: N.width / N.height
      }, V = void 0, B = xa(_.extent) ? _.extent : void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (V = D.get(_.parentId)), V && _.extent === "parent" && (B = [
        [0, 0],
        [V.measured.width, V.measured.height]
      ]), G = [], Q = void 0;
      for (const [k, nt] of D)
        if (nt.parentId === i && (G.push({
          id: k,
          position: { ...nt.position },
          extent: nt.extent
        }), nt.extent === "parent" || nt.expandParent)) {
          const it = Ow(nt, _, nt.origin ?? Y);
          Q ? Q = [
            [Math.min(it[0][0], Q[0][0]), Math.min(it[0][1], Q[0][1])],
            [Math.max(it[1][0], Q[1][0]), Math.max(it[1][1], Q[1][1])]
          ] : Q = it;
        }
      b?.(ut, { ...N });
    }).on("drag", (ut) => {
      const { transform: D, snapGrid: J, snapToGrid: W, nodeOrigin: C } = c(), Y = Mu(ut.sourceEvent, {
        transform: D,
        snapGrid: J,
        snapToGrid: W,
        containerBounds: A
      }), O = [];
      if (!_)
        return;
      const { x: j, y: Z, width: k, height: nt } = N, it = {}, dt = _.origin ?? C, { width: vt, height: T, x: P, y: st } = Mw(U, d.controlDirection, Y, d.boundaries, d.keepAspectRatio, dt, B, Q), ot = vt !== k, tt = T !== nt, ft = P !== j && ot, gt = st !== Z && tt;
      if (!ft && !gt && !ot && !tt)
        return;
      const ct = {
        prevValues: { ...N },
        startX: U.x,
        startY: U.y,
        childNodes: G.map((_t) => ({
          ..._t,
          position: { ..._t.position }
        }))
      };
      if ((ft || gt || dt[0] === 1 || dt[1] === 1) && (it.x = ft ? P : N.x, it.y = gt ? st : N.y, N.x = it.x, N.y = it.y, G.length > 0)) {
        const _t = P - j, Ct = st - Z;
        for (const Ht of G)
          Ht.position = {
            x: Ht.position.x - _t + dt[0] * (vt - k),
            y: Ht.position.y - Ct + dt[1] * (T - nt)
          }, O.push(Ht);
      }
      if ((ot || tt) && (it.width = ot && (!d.resizeDirection || d.resizeDirection === "horizontal") ? vt : N.width, it.height = tt && (!d.resizeDirection || d.resizeDirection === "vertical") ? T : N.height, N.width = it.width, N.height = it.height), V && _.expandParent) {
        const _t = dt[0] * (it.width ?? 0);
        it.x && it.x < _t && (N.x = _t, U.x = U.x - (it.x - _t));
        const Ct = dt[1] * (it.height ?? 0);
        it.y && it.y < Ct && (N.y = Ct, U.y = U.y - (it.y - Ct));
      }
      const rt = zw({
        width: N.width,
        prevWidth: k,
        height: N.height,
        prevHeight: nt,
        affectsX: d.controlDirection.affectsX,
        affectsY: d.controlDirection.affectsY
      }), xt = { ...N, direction: rt };
      if (w?.(ut, xt) === !1) {
        N = ct.prevValues, U.x = ct.startX, U.y = ct.startY, G.forEach((_t, Ct) => {
          _t.position = ct.childNodes[Ct].position;
        });
        return;
      }
      E?.(ut, xt), r(it, O);
    }).on("end", (ut) => {
      M?.(ut, { ...N }), s?.({ ...N });
    });
    f.call(F);
  }
  function p() {
    f.on(".drag", null);
  }
  return {
    update: g,
    destroy: p
  };
}
var rd = { exports: {} }, sd = {}, fd = { exports: {} }, dd = {};
var Gy;
function Rw() {
  if (Gy) return dd;
  Gy = 1;
  var l = Vu();
  function i(m, y) {
    return m === y && (m !== 0 || 1 / m === 1 / y) || m !== m && y !== y;
  }
  var c = typeof Object.is == "function" ? Object.is : i, r = l.useState, s = l.useEffect, f = l.useLayoutEffect, d = l.useDebugValue;
  function g(m, y) {
    var b = y(), E = r({ inst: { value: b, getSnapshot: y } }), M = E[0].inst, w = E[1];
    return f(
      function() {
        M.value = b, M.getSnapshot = y, p(M) && w({ inst: M });
      },
      [m, b, y]
    ), s(
      function() {
        return p(M) && w({ inst: M }), m(function() {
          p(M) && w({ inst: M });
        });
      },
      [m]
    ), d(b), b;
  }
  function p(m) {
    var y = m.getSnapshot;
    m = m.value;
    try {
      var b = y();
      return !c(m, b);
    } catch {
      return !0;
    }
  }
  function x(m, y) {
    return y();
  }
  var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? x : g;
  return dd.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : v, dd;
}
var Qy;
function Hw() {
  return Qy || (Qy = 1, fd.exports = Rw()), fd.exports;
}
var Ky;
function Uw() {
  if (Ky) return sd;
  Ky = 1;
  var l = Vu(), i = Hw();
  function c(x, v) {
    return x === v && (x !== 0 || 1 / x === 1 / v) || x !== x && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : c, s = i.useSyncExternalStore, f = l.useRef, d = l.useEffect, g = l.useMemo, p = l.useDebugValue;
  return sd.useSyncExternalStoreWithSelector = function(x, v, m, y, b) {
    var E = f(null);
    if (E.current === null) {
      var M = { hasValue: !1, value: null };
      E.current = M;
    } else M = E.current;
    E = g(
      function() {
        function N(V) {
          if (!U) {
            if (U = !0, _ = V, V = y(V), b !== void 0 && M.hasValue) {
              var B = M.value;
              if (b(B, V))
                return A = B;
            }
            return A = V;
          }
          if (B = A, r(_, V)) return B;
          var Q = y(V);
          return b !== void 0 && b(B, Q) ? (_ = V, B) : (_ = V, A = Q);
        }
        var U = !1, _, A, G = m === void 0 ? null : m;
        return [
          function() {
            return N(v());
          },
          G === null ? void 0 : function() {
            return N(G());
          }
        ];
      },
      [v, m, y, b]
    );
    var w = s(x, E[0], E[1]);
    return d(
      function() {
        M.hasValue = !0, M.value = w;
      },
      [w]
    ), p(w), w;
  }, sd;
}
var $y;
function Bw() {
  return $y || ($y = 1, rd.exports = Uw()), rd.exports;
}
var jw = Bw();
const Yw = /* @__PURE__ */ _v(jw), Vw = {}, Jy = (l) => {
  let i;
  const c = /* @__PURE__ */ new Set(), r = (v, m) => {
    const y = typeof v == "function" ? v(i) : v;
    if (!Object.is(y, i)) {
      const b = i;
      i = m ?? (typeof y != "object" || y === null) ? y : Object.assign({}, i, y), c.forEach((E) => E(i, b));
    }
  }, s = () => i, p = { setState: r, getState: s, getInitialState: () => x, subscribe: (v) => (c.add(v), () => c.delete(v)), destroy: () => {
    (Vw ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), c.clear();
  } }, x = i = l(r, s, p);
  return p;
}, Lw = (l) => l ? Jy(l) : Jy, { useDebugValue: qw } = nb, { useSyncExternalStoreWithSelector: Xw } = Yw, Zw = (l) => l;
function Ap(l, i = Zw, c) {
  const r = Xw(
    l.subscribe,
    l.getState,
    l.getServerState || l.getInitialState,
    i,
    c
  );
  return qw(r), r;
}
const ky = (l, i) => {
  const c = Lw(l), r = (s, f = i) => Ap(c, s, f);
  return Object.assign(r, c), r;
}, Gw = (l, i) => l ? ky(l, i) : ky;
function It(l, i) {
  if (Object.is(l, i))
    return !0;
  if (typeof l != "object" || l === null || typeof i != "object" || i === null)
    return !1;
  if (l instanceof Map && i instanceof Map) {
    if (l.size !== i.size) return !1;
    for (const [r, s] of l)
      if (!Object.is(s, i.get(r)))
        return !1;
    return !0;
  }
  if (l instanceof Set && i instanceof Set) {
    if (l.size !== i.size) return !1;
    for (const r of l)
      if (!i.has(r))
        return !1;
    return !0;
  }
  const c = Object.keys(l);
  if (c.length !== Object.keys(i).length)
    return !1;
  for (const r of c)
    if (!Object.prototype.hasOwnProperty.call(i, r) || !Object.is(l[r], i[r]))
      return !1;
  return !0;
}
var Qw = wv();
const rr = et.createContext(null), Kw = rr.Provider, Op = xn.error001("react");
function Bt(l, i) {
  const c = et.useContext(rr);
  if (c === null)
    throw new Error(Op);
  return Ap(c, l, i);
}
function $t() {
  const l = et.useContext(rr);
  if (l === null)
    throw new Error(Op);
  return et.useMemo(() => ({
    getState: l.getState,
    setState: l.setState,
    subscribe: l.subscribe
  }), [l]);
}
const Iy = { display: "none" }, $w = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Dp = "react-flow__node-desc", Rp = "react-flow__edge-desc", Jw = "react-flow__aria-live", kw = (l) => l.ariaLiveMessage, Iw = (l) => l.ariaLabelConfig;
function Fw({ rfId: l }) {
  const i = Bt(kw);
  return R.jsx("div", { id: `${Jw}-${l}`, "aria-live": "assertive", "aria-atomic": "true", style: $w, children: i });
}
function Ww({ rfId: l, disableKeyboardA11y: i }) {
  const c = Bt(Iw);
  return R.jsxs(R.Fragment, { children: [R.jsx("div", { id: `${Dp}-${l}`, style: Iy, children: i ? c["node.a11yDescription.default"] : c["node.a11yDescription.keyboardDisabled"] }), R.jsx("div", { id: `${Rp}-${l}`, style: Iy, children: c["edge.a11yDescription.default"] }), !i && R.jsx(Fw, { rfId: l })] });
}
const sr = et.forwardRef(({ position: l = "top-left", children: i, className: c, style: r, ...s }, f) => {
  const d = `${l}`.split("-");
  return R.jsx("div", { className: ue(["react-flow__panel", c, ...d]), style: r, ref: f, ...s, children: i });
});
sr.displayName = "Panel";
const Fy = "https://reactflow.dev?utm_source=attribution";
function Pw({ proOptions: l, position: i = "bottom-right" }) {
  return et.useEffect(() => {
  }, []), l?.hideAttribution ? null : R.jsx(sr, { position: i, className: "react-flow__attribution", "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${Fy}`, children: R.jsx("a", { href: Fy, target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const tN = (l) => {
  const i = [], c = [];
  for (const [, r] of l.nodeLookup)
    r.selected && i.push(r.internals.userNode);
  for (const [, r] of l.edgeLookup)
    r.selected && c.push(r);
  return { selectedNodes: i, selectedEdges: c };
}, Bc = (l) => l.id;
function eN(l, i) {
  return It(l.selectedNodes.map(Bc), i.selectedNodes.map(Bc)) && It(l.selectedEdges.map(Bc), i.selectedEdges.map(Bc));
}
function nN({ onSelectionChange: l }) {
  const i = $t(), { selectedNodes: c, selectedEdges: r } = Bt(tN, eN);
  return et.useEffect(() => {
    const s = { nodes: c, edges: r };
    l?.(s), i.getState().onSelectionChangeHandlers.forEach((f) => f(s));
  }, [c, r, l]), null;
}
const lN = (l) => !!l.onSelectionChangeHandlers;
function aN({ onSelectionChange: l }) {
  const i = Bt(lN);
  return l || i ? R.jsx(nN, { onSelectionChange: l }) : null;
}
const Hp = [0, 0], iN = { x: 0, y: 0, zoom: 1 }, uN = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
], Wy = [...uN, "rfId"], oN = (l) => ({
  setNodes: l.setNodes,
  setEdges: l.setEdges,
  setMinZoom: l.setMinZoom,
  setMaxZoom: l.setMaxZoom,
  setTranslateExtent: l.setTranslateExtent,
  setNodeExtent: l.setNodeExtent,
  reset: l.reset,
  setDefaultNodesAndEdges: l.setDefaultNodesAndEdges
}), Py = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Hu,
  nodeOrigin: Hp,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function cN(l) {
  const { setNodes: i, setEdges: c, setMinZoom: r, setMaxZoom: s, setTranslateExtent: f, setNodeExtent: d, reset: g, setDefaultNodesAndEdges: p } = Bt(oN, It), x = $t();
  et.useEffect(() => (p(l.defaultNodes, l.defaultEdges), () => {
    v.current = Py, g();
  }), []);
  const v = et.useRef(Py);
  return et.useEffect(
    () => {
      for (const m of Wy) {
        const y = l[m], b = v.current[m];
        y !== b && (typeof l[m] > "u" || (m === "nodes" ? i(y) : m === "edges" ? c(y) : m === "minZoom" ? r(y) : m === "maxZoom" ? s(y) : m === "translateExtent" ? f(y) : m === "nodeExtent" ? d(y) : m === "ariaLabelConfig" ? x.setState({ ariaLabelConfig: Q2(y) }) : m === "fitView" ? x.setState({ fitViewQueued: y }) : m === "fitViewOptions" ? x.setState({ fitViewOptions: y }) : x.setState({ [m]: y })));
      }
      v.current = l;
    },
    // Only re-run the effect if one of the fields we track changes
    Wy.map((m) => l[m])
  ), null;
}
function tv() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function rN(l) {
  const [i, c] = et.useState(l === "system" ? null : l);
  return et.useEffect(() => {
    if (l !== "system") {
      c(l);
      return;
    }
    const r = tv(), s = () => c(r?.matches ? "dark" : "light");
    return s(), r?.addEventListener("change", s), () => {
      r?.removeEventListener("change", s);
    };
  }, [l]), i !== null ? i : tv()?.matches ? "dark" : "light";
}
const ev = typeof document < "u" ? document : null;
function Yu(l = null, i = { target: ev, actInsideInputWithModifier: !0 }) {
  const [c, r] = et.useState(!1), s = et.useRef(!1), f = et.useRef(/* @__PURE__ */ new Set([])), [d, g] = et.useMemo(() => {
    if (l !== null) {
      const x = (Array.isArray(l) ? l : [l]).filter((m) => typeof m == "string").map((m) => m.replace(/\+/g, `
`).replace(`

`, `
+`).split(`
`)), v = x.reduce((m, y) => m.concat(...y), []);
      return [x, v];
    }
    return [[], []];
  }, [l]);
  return et.useEffect(() => {
    const p = i?.target ?? ev, x = i?.actInsideInputWithModifier ?? !0;
    if (l !== null) {
      const v = (b) => {
        if (s.current = b.ctrlKey || b.metaKey || b.shiftKey || b.altKey, (!s.current || s.current && !x) && gp(b))
          return !1;
        const M = lv(b.code, g);
        if (f.current.add(b[M]), nv(d, f.current, !1)) {
          const w = b.composedPath?.()?.[0] || b.target, N = w?.nodeName === "BUTTON" || w?.nodeName === "A";
          i.preventDefault !== !1 && (s.current || !N) && b.preventDefault(), r(!0);
        }
      }, m = (b) => {
        const E = lv(b.code, g);
        nv(d, f.current, !0) ? (r(!1), f.current.clear()) : f.current.delete(b[E]), b.key === "Meta" && f.current.clear(), s.current = !1;
      }, y = () => {
        f.current.clear(), r(!1);
      };
      return p?.addEventListener("keydown", v), p?.addEventListener("keyup", m), window.addEventListener("blur", y), window.addEventListener("contextmenu", y), () => {
        p?.removeEventListener("keydown", v), p?.removeEventListener("keyup", m), window.removeEventListener("blur", y), window.removeEventListener("contextmenu", y);
      };
    }
  }, [l, r]), c;
}
function nv(l, i, c) {
  return l.filter((r) => c || r.length === i.size).some((r) => r.every((s) => i.has(s)));
}
function lv(l, i) {
  return i.includes(l) ? "code" : "key";
}
const sN = () => {
  const l = $t();
  return et.useMemo(() => ({
    zoomIn: async (i) => {
      const { panZoom: c } = l.getState();
      return c ? c.scaleBy(1.2, i) : !1;
    },
    zoomOut: async (i) => {
      const { panZoom: c } = l.getState();
      return c ? c.scaleBy(1 / 1.2, i) : !1;
    },
    zoomTo: async (i, c) => {
      const { panZoom: r } = l.getState();
      return r ? r.scaleTo(i, c) : !1;
    },
    getZoom: () => l.getState().transform[2],
    setViewport: async (i, c) => {
      const { transform: [r, s, f], panZoom: d } = l.getState();
      return d ? (await d.setViewport({
        x: i.x ?? r,
        y: i.y ?? s,
        zoom: i.zoom ?? f
      }, c), !0) : !1;
    },
    getViewport: () => {
      const [i, c, r] = l.getState().transform;
      return { x: i, y: c, zoom: r };
    },
    setCenter: async (i, c, r) => l.getState().setCenter(i, c, r),
    fitBounds: async (i, c) => {
      const { width: r, height: s, minZoom: f, maxZoom: d, panZoom: g } = l.getState(), p = Ld(i, r, s, f, d, c?.padding ?? 0.1);
      return g ? (await g.setViewport(p, {
        duration: c?.duration,
        ease: c?.ease,
        interpolate: c?.interpolate
      }), !0) : !1;
    },
    screenToFlowPosition: (i, c = {}) => {
      const { transform: r, snapGrid: s, snapToGrid: f, domNode: d } = l.getState();
      if (!d)
        return i;
      const { x: g, y: p } = d.getBoundingClientRect(), x = {
        x: i.x - g,
        y: i.y - p
      }, v = c.snapGrid ?? s, m = c.snapToGrid ?? f;
      return Qu(x, r, m, v);
    },
    flowToScreenPosition: (i) => {
      const { transform: c, domNode: r } = l.getState();
      if (!r)
        return i;
      const { x: s, y: f } = r.getBoundingClientRect(), d = Ei(i, c);
      return {
        x: d.x + s,
        y: d.y + f
      };
    }
  }), []);
};
function Up(l, i) {
  const c = [], r = /* @__PURE__ */ new Map(), s = [];
  for (const f of l)
    if (f.type === "add") {
      s.push(f);
      continue;
    } else if (f.type === "remove" || f.type === "replace")
      r.set(f.id, [f]);
    else {
      const d = r.get(f.id);
      d ? d.push(f) : r.set(f.id, [f]);
    }
  for (const f of i) {
    const d = r.get(f.id);
    if (!d) {
      c.push(f);
      continue;
    }
    if (d[0].type === "remove")
      continue;
    if (d[0].type === "replace") {
      c.push({ ...d[0].item });
      continue;
    }
    const g = { ...f };
    for (const p of d)
      fN(p, g);
    c.push(g);
  }
  return s.length && s.forEach((f) => {
    f.index !== void 0 ? c.splice(f.index, 0, { ...f.item }) : c.push({ ...f.item });
  }), c;
}
function fN(l, i) {
  switch (l.type) {
    case "select": {
      i.selected = l.selected;
      break;
    }
    case "position": {
      typeof l.position < "u" && (i.position = l.position), typeof l.dragging < "u" && (i.dragging = l.dragging);
      break;
    }
    case "dimensions": {
      typeof l.dimensions < "u" && (i.measured = {
        ...l.dimensions
      }, l.setAttributes && ((l.setAttributes === !0 || l.setAttributes === "width") && (i.width = l.dimensions.width), (l.setAttributes === !0 || l.setAttributes === "height") && (i.height = l.dimensions.height))), typeof l.resizing == "boolean" && (i.resizing = l.resizing);
      break;
    }
  }
}
function Bp(l, i) {
  return Up(l, i);
}
function dN(l, i) {
  return Up(l, i);
}
function da(l, i) {
  return {
    id: l,
    type: "select",
    selected: i
  };
}
function mi(l, i = /* @__PURE__ */ new Set(), c = !1) {
  const r = [];
  for (const [s, f] of l) {
    const d = i.has(s);
    !(f.selected === void 0 && !d) && f.selected !== d && (c && (f.selected = d), r.push(da(f.id, d)));
  }
  return r;
}
function av({ items: l = [], lookup: i }) {
  const c = [], r = new Map(l.map((s) => [s.id, s]));
  for (const [s, f] of l.entries()) {
    const d = i.get(f.id), g = d?.internals?.userNode ?? d;
    g !== void 0 && g !== f && c.push({ id: f.id, item: f, type: "replace" }), g === void 0 && c.push({ item: f, type: "add", index: s });
  }
  for (const [s] of i)
    r.get(s) === void 0 && c.push({ id: s, type: "remove" });
  return c;
}
function iv(l) {
  return {
    id: l.id,
    type: "remove"
  };
}
const hN = rp();
function gN(l, i, c = {}) {
  return F2(l, i, {
    ...c,
    onError: c.onError ?? hN
  });
}
const uv = (l) => B2(l), mN = (l) => ap(l);
function jp(l) {
  return et.forwardRef(l);
}
const Yp = typeof window < "u" ? et.useLayoutEffect : et.useEffect;
function ov(l) {
  const [i, c] = et.useState(BigInt(0)), [r] = et.useState(() => yN(() => c((s) => s + BigInt(1))));
  return Yp(() => {
    const s = r.get();
    s.length && (l(s), r.reset());
  }, [i]), r;
}
function yN(l) {
  let i = [];
  return {
    get: () => i,
    reset: () => {
      i = [];
    },
    push: (c) => {
      i.push(c), l();
    }
  };
}
const Vp = et.createContext(null);
function vN({ children: l }) {
  const i = $t(), c = et.useCallback((g) => {
    const { nodes: p = [], setNodes: x, hasDefaultNodes: v, onNodesChange: m, nodeLookup: y, fitViewQueued: b, onNodesChangeMiddlewareMap: E } = i.getState();
    let M = p;
    for (const N of g)
      M = typeof N == "function" ? N(M) : N;
    let w = av({
      items: M,
      lookup: y
    });
    for (const N of E.values())
      w = N(w);
    v && x(M), w.length > 0 ? m?.(w) : b && window.requestAnimationFrame(() => {
      const { fitViewQueued: N, nodes: U, setNodes: _ } = i.getState();
      N && _(U);
    });
  }, []), r = ov(c), s = et.useCallback((g) => {
    const { edges: p = [], setEdges: x, hasDefaultEdges: v, onEdgesChange: m, edgeLookup: y } = i.getState();
    let b = p;
    for (const E of g)
      b = typeof E == "function" ? E(b) : E;
    v ? x(b) : m && m(av({
      items: b,
      lookup: y
    }));
  }, []), f = ov(s), d = et.useMemo(() => ({ nodeQueue: r, edgeQueue: f }), []);
  return R.jsx(Vp.Provider, { value: d, children: l });
}
function pN() {
  const l = et.useContext(Vp);
  if (!l)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return l;
}
const xN = (l) => !!l.panZoom;
function Jd() {
  const l = sN(), i = $t(), c = pN(), r = Bt(xN), s = et.useMemo(() => {
    const f = (m) => i.getState().nodeLookup.get(m), d = (m) => {
      c.nodeQueue.push(m);
    }, g = (m) => {
      c.edgeQueue.push(m);
    }, p = (m) => {
      const { nodeLookup: y, nodeOrigin: b } = i.getState(), E = uv(m) ? m : y.get(m.id), M = E.parentId ? fp(E.position, E.measured, E.parentId, y, b) : E.position, w = {
        ...E,
        position: M,
        width: E.measured?.width ?? E.width,
        height: E.measured?.height ?? E.height
      };
      return Bu(w);
    }, x = (m, y, b = { replace: !1 }) => {
      d((E) => E.map((M) => {
        if (M.id === m) {
          const w = typeof y == "function" ? y(M) : y;
          return b.replace && uv(w) ? w : { ...M, ...w };
        }
        return M;
      }));
    }, v = (m, y, b = { replace: !1 }) => {
      g((E) => E.map((M) => {
        if (M.id === m) {
          const w = typeof y == "function" ? y(M) : y;
          return b.replace && mN(w) ? w : { ...M, ...w };
        }
        return M;
      }));
    };
    return {
      getNodes: () => i.getState().nodes.map((m) => ({ ...m })),
      getNode: (m) => f(m)?.internals.userNode,
      getInternalNode: f,
      getEdges: () => {
        const { edges: m = [] } = i.getState();
        return m.map((y) => ({ ...y }));
      },
      getEdge: (m) => i.getState().edgeLookup.get(m),
      setNodes: d,
      setEdges: g,
      addNodes: (m) => {
        const y = Array.isArray(m) ? m : [m];
        c.nodeQueue.push((b) => [...b, ...y]);
      },
      addEdges: (m) => {
        const y = Array.isArray(m) ? m : [m];
        c.edgeQueue.push((b) => [...b, ...y]);
      },
      toObject: () => {
        const { nodes: m = [], edges: y = [], transform: b } = i.getState(), [E, M, w] = b;
        return {
          nodes: m.map((N) => ({ ...N })),
          edges: y.map((N) => ({ ...N })),
          viewport: {
            x: E,
            y: M,
            zoom: w
          }
        };
      },
      deleteElements: async ({ nodes: m = [], edges: y = [] }) => {
        const { nodes: b, edges: E, onNodesDelete: M, onEdgesDelete: w, triggerNodeChanges: N, triggerEdgeChanges: U, onDelete: _, onBeforeDelete: A } = i.getState(), { nodes: G, edges: V } = await q2({
          nodesToRemove: m,
          edgesToRemove: y,
          nodes: b,
          edges: E,
          onBeforeDelete: A
        }), B = V.length > 0, Q = G.length > 0;
        if (B) {
          const F = V.map(iv);
          w?.(V), U(F);
        }
        if (Q) {
          const F = G.map(iv);
          M?.(G), N(F);
        }
        return (Q || B) && _?.({ nodes: G, edges: V }), { deletedNodes: G, deletedEdges: V };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (m, y = !0, b) => {
        const E = Oy(m), M = E ? m : p(m), w = b !== void 0;
        return M ? (b || i.getState().nodes).filter((N) => {
          const U = i.getState().nodeLookup.get(N.id);
          if (U && !E && (N.id === m.id || !U.internals.positionAbsolute))
            return !1;
          const _ = Bu(w ? N : U), A = Pc(_, M);
          return y && A > 0 || A >= _.width * _.height || A >= M.width * M.height;
        }) : [];
      },
      isNodeIntersecting: (m, y, b = !0) => {
        const M = Oy(m) ? m : p(m);
        if (!M)
          return !1;
        const w = Pc(M, y);
        return b && w > 0 || w >= y.width * y.height || w >= M.width * M.height;
      },
      updateNode: x,
      updateNodeData: (m, y, b = { replace: !1 }) => {
        x(m, (E) => {
          const M = typeof y == "function" ? y(E) : y;
          return b.replace ? { ...E, data: M } : { ...E, data: { ...E.data, ...M } };
        }, b);
      },
      updateEdge: v,
      updateEdgeData: (m, y, b = { replace: !1 }) => {
        v(m, (E) => {
          const M = typeof y == "function" ? y(E) : y;
          return b.replace ? { ...E, data: M } : { ...E, data: { ...E.data, ...M } };
        }, b);
      },
      getNodesBounds: (m) => {
        const { nodeLookup: y, nodeOrigin: b } = i.getState();
        return j2(m, { nodeLookup: y, nodeOrigin: b });
      },
      getHandleConnections: ({ type: m, id: y, nodeId: b }) => Array.from(i.getState().connectionLookup.get(`${b}-${m}${y ? `-${y}` : ""}`)?.values() ?? []),
      getNodeConnections: ({ type: m, handleId: y, nodeId: b }) => Array.from(i.getState().connectionLookup.get(`${b}${m ? y ? `-${m}-${y}` : `-${m}` : ""}`)?.values() ?? []),
      fitView: async (m) => {
        const y = i.getState().fitViewResolver ?? G2();
        return i.setState({ fitViewQueued: !0, fitViewOptions: m, fitViewResolver: y }), c.nodeQueue.push((b) => [...b]), y.promise;
      }
    };
  }, []);
  return et.useMemo(() => ({
    ...s,
    ...l,
    viewportInitialized: r
  }), [r]);
}
const cv = (l) => l.selected, SN = typeof window < "u" ? window : void 0;
function bN({ deleteKeyCode: l, multiSelectionKeyCode: i }) {
  const c = $t(), { deleteElements: r } = Jd(), s = Yu(l, { actInsideInputWithModifier: !1 }), f = Yu(i, { target: SN });
  et.useEffect(() => {
    if (s) {
      const { edges: d, nodes: g } = c.getState();
      r({ nodes: g.filter(cv), edges: d.filter(cv) }), c.setState({ nodesSelectionActive: !1 });
    }
  }, [s]), et.useEffect(() => {
    c.setState({ multiSelectionActive: f });
  }, [f]);
}
function EN(l) {
  const i = $t();
  et.useEffect(() => {
    const c = () => {
      if (!l.current || !(l.current.checkVisibility?.() ?? !0))
        return !1;
      const r = qd(l.current);
      (r.height === 0 || r.width === 0) && i.getState().onError?.("004", xn.error004()), i.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (l.current) {
      c(), window.addEventListener("resize", c);
      const r = new ResizeObserver(() => c());
      return r.observe(l.current), () => {
        window.removeEventListener("resize", c), r && l.current && r.unobserve(l.current);
      };
    }
  }, []);
}
const fr = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, _N = (l) => ({
  userSelectionActive: l.userSelectionActive,
  lib: l.lib,
  connectionInProgress: l.connection.inProgress
});
function wN({ onPaneContextMenu: l, zoomOnScroll: i = !0, zoomOnPinch: c = !0, panOnScroll: r = !1, panActivationKeyPressed: s, panOnScrollSpeed: f = 0.5, panOnScrollMode: d = ma.Free, zoomOnDoubleClick: g = !0, panOnDrag: p = !0, defaultViewport: x, translateExtent: v, minZoom: m, maxZoom: y, zoomActivationKeyCode: b, preventScrolling: E = !0, children: M, noWheelClassName: w, noPanClassName: N, onViewportChange: U, isControlledViewport: _, paneClickDistance: A, selectionOnDrag: G }) {
  const V = $t(), B = et.useRef(null), { userSelectionActive: Q, lib: F, connectionInProgress: ut } = Bt(_N, It), D = Yu(b), J = et.useRef();
  EN(B);
  const W = et.useCallback((C) => {
    U?.({ x: C[0], y: C[1], zoom: C[2] }), _ || V.setState({ transform: C });
  }, [U, _]);
  return et.useEffect(() => {
    if (B.current) {
      J.current = Cw({
        domNode: B.current,
        minZoom: m,
        maxZoom: y,
        translateExtent: v,
        viewport: x,
        onDraggingChange: (j) => V.setState((Z) => Z.paneDragging === j ? Z : { paneDragging: j }),
        onPanZoomStart: (j, Z) => {
          const { onViewportChangeStart: k, onMoveStart: nt } = V.getState();
          nt?.(j, Z), k?.(Z);
        },
        onPanZoom: (j, Z) => {
          const { onViewportChange: k, onMove: nt } = V.getState();
          nt?.(j, Z), k?.(Z);
        },
        onPanZoomEnd: (j, Z) => {
          const { onViewportChangeEnd: k, onMoveEnd: nt } = V.getState();
          nt?.(j, Z), k?.(Z);
        }
      });
      const { x: C, y: Y, zoom: O } = J.current.getViewport();
      return V.setState({
        panZoom: J.current,
        transform: [C, Y, O],
        domNode: B.current.closest(".react-flow")
      }), () => {
        J.current?.destroy();
      };
    }
  }, []), et.useEffect(() => {
    J.current?.update({
      onPaneContextMenu: l,
      zoomOnScroll: i,
      zoomOnPinch: c,
      panOnScroll: r,
      panActivationKeyPressed: s,
      panOnScrollSpeed: f,
      panOnScrollMode: d,
      zoomOnDoubleClick: g,
      panOnDrag: p,
      zoomActivationKeyPressed: D,
      preventScrolling: E,
      noPanClassName: N,
      userSelectionActive: Q,
      noWheelClassName: w,
      lib: F,
      onTransformChange: W,
      connectionInProgress: ut,
      selectionOnDrag: G,
      paneClickDistance: A
    });
  }, [
    l,
    i,
    c,
    r,
    s,
    f,
    d,
    g,
    p,
    D,
    E,
    N,
    Q,
    w,
    F,
    W,
    ut,
    G,
    A
  ]), R.jsx("div", { className: "react-flow__renderer", ref: B, style: fr, children: M });
}
const NN = (l) => ({
  userSelectionActive: l.userSelectionActive,
  userSelectionRect: l.userSelectionRect
});
function TN() {
  const { userSelectionActive: l, userSelectionRect: i } = Bt(NN, It);
  return l && i ? R.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: i.width,
    height: i.height,
    transform: `translate(${i.x}px, ${i.y}px)`
  } }) : null;
}
const hd = (l, i) => (c) => {
  c.target === i.current && l?.(c);
}, CN = (l) => ({
  userSelectionActive: l.userSelectionActive,
  elementsSelectable: l.elementsSelectable,
  dragging: l.paneDragging,
  panBy: l.panBy,
  autoPanSpeed: l.autoPanSpeed
});
function zN({ isSelecting: l, selectionKeyPressed: i, selectionMode: c = Uu.Full, panOnDrag: r, autoPanOnSelection: s, paneClickDistance: f, selectionOnDrag: d, onSelectionStart: g, onSelectionEnd: p, onPaneClick: x, onPaneContextMenu: v, onPaneScroll: m, onPaneMouseEnter: y, onPaneMouseMove: b, onPaneMouseLeave: E, children: M }) {
  const w = et.useRef(0), N = $t(), { userSelectionActive: U, elementsSelectable: _, dragging: A, panBy: G, autoPanSpeed: V } = Bt(CN, It), B = _ && (l || U), Q = et.useRef(null), F = et.useRef(), ut = et.useRef(/* @__PURE__ */ new Set()), D = et.useRef(/* @__PURE__ */ new Set()), J = et.useRef(!1), W = et.useRef(!1), C = et.useRef({ x: 0, y: 0 }), Y = et.useRef(!1), O = (tt) => {
    if (W.current || J.current || N.getState().connection.inProgress) {
      W.current = !1, J.current = !1;
      return;
    }
    x?.(tt), N.getState().resetSelectedElements(), N.setState({ nodesSelectionActive: !1 });
  }, j = (tt) => {
    if (Array.isArray(r) && r?.includes(2)) {
      tt.preventDefault();
      return;
    }
    v?.(tt);
  }, Z = m ? (tt) => m(tt) : void 0, k = (tt) => {
    W.current && (tt.stopPropagation(), W.current = !1);
  }, nt = (tt) => {
    if (tt.pointerType === "touch" && r !== !1 && !i)
      return;
    const { domNode: ft, transform: gt } = N.getState();
    if (F.current = ft?.getBoundingClientRect(), !F.current)
      return;
    const ct = tt.target === Q.current;
    if (!ct && !!tt.target.closest(".nokey") || !l || !(d && ct || i) || tt.button !== 0 || !tt.isPrimary)
      return;
    tt.target?.setPointerCapture?.(tt.pointerId), W.current = !1;
    const { x: wt, y: _t } = pn(tt.nativeEvent, F.current), Ct = Qu({ x: wt, y: _t }, gt);
    N.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: Ct.x,
        startY: Ct.y,
        x: wt,
        y: _t
      }
    }), ct || (tt.stopPropagation(), tt.preventDefault());
  };
  function it(tt, ft) {
    const { userSelectionRect: gt } = N.getState();
    if (!gt)
      return;
    const { transform: ct, nodeLookup: rt, edgeLookup: xt, connectionLookup: wt, triggerNodeChanges: _t, triggerEdgeChanges: Ct, defaultEdgeOptions: Ht } = N.getState(), Ot = { x: gt.startX, y: gt.startY }, { x: Pt, y: xe } = Ei(Ot, ct), re = {
      startX: Ot.x,
      startY: Ot.y,
      x: tt < Pt ? tt : Pt,
      y: ft < xe ? ft : xe,
      width: Math.abs(tt - Pt),
      height: Math.abs(ft - xe)
    }, En = ut.current, ke = D.current;
    ut.current = new Set(Yd(rt, re, ct, c === Uu.Partial, !0).map((Ee) => Ee.id)), D.current = /* @__PURE__ */ new Set();
    const Ae = Ht?.selectable ?? !0;
    for (const Ee of ut.current) {
      const Oe = wt.get(Ee);
      if (Oe)
        for (const { edgeId: Ye } of Oe.values()) {
          const _n = xt.get(Ye);
          _n && (_n.selectable ?? Ae) && D.current.add(Ye);
        }
    }
    if (!Dy(En, ut.current)) {
      const Ee = mi(rt, ut.current, !0);
      _t(Ee);
    }
    if (!Dy(ke, D.current)) {
      const Ee = mi(xt, D.current);
      Ct(Ee);
    }
    N.setState({
      userSelectionRect: re,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }
  function dt() {
    if (!s || !F.current)
      return;
    const [tt, ft] = Vd(C.current, F.current, V);
    G({ x: tt, y: ft }).then((gt) => {
      if (!W.current || !gt) {
        w.current = requestAnimationFrame(dt);
        return;
      }
      const { x: ct, y: rt } = C.current;
      it(ct, rt), w.current = requestAnimationFrame(dt);
    });
  }
  const vt = () => {
    cancelAnimationFrame(w.current), w.current = 0, Y.current = !1;
  };
  et.useEffect(() => () => vt(), []);
  const T = (tt) => {
    const { userSelectionRect: ft, transform: gt, resetSelectedElements: ct } = N.getState();
    if (!F.current || !ft)
      return;
    const { x: rt, y: xt } = pn(tt.nativeEvent, F.current);
    C.current = { x: rt, y: xt };
    const wt = Ei({ x: ft.startX, y: ft.startY }, gt);
    if (!W.current) {
      const _t = i ? 0 : f;
      if (Math.hypot(rt - wt.x, xt - wt.y) <= _t)
        return;
      ct(), g?.(tt);
    }
    W.current = !0, Y.current || (dt(), Y.current = !0), it(rt, xt);
  }, P = (tt) => {
    if (!B) {
      tt.target === Q.current && N.getState().connection.inProgress && (J.current = !0);
      return;
    }
    tt.button === 0 && (tt.target?.releasePointerCapture?.(tt.pointerId), !U && tt.target === Q.current && N.getState().userSelectionRect && O?.(tt), N.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), W.current && (p?.(tt), N.setState({
      nodesSelectionActive: ut.current.size > 0
    })), vt());
  }, st = (tt) => {
    tt.target?.releasePointerCapture?.(tt.pointerId), vt();
  }, ot = r === !0 || Array.isArray(r) && r.includes(0);
  return R.jsxs("div", { className: ue(["react-flow__pane", { draggable: ot, dragging: A, selection: l }]), onClick: B ? void 0 : hd(O, Q), onContextMenu: hd(j, Q), onWheel: hd(Z, Q), onPointerEnter: B ? void 0 : y, onPointerMove: B ? T : b, onPointerUp: P, onPointerCancel: B ? st : void 0, onPointerDownCapture: B ? nt : void 0, onClickCapture: B ? k : void 0, onPointerLeave: E, ref: Q, style: fr, children: [M, R.jsx(TN, {})] });
}
function zd({ id: l, store: i, unselect: c = !1, nodeRef: r }) {
  const { addSelectedNodes: s, unselectNodesAndEdges: f, multiSelectionActive: d, nodeLookup: g, onError: p } = i.getState(), x = g.get(l);
  if (!x) {
    p?.("012", xn.error012(l));
    return;
  }
  i.setState({ nodesSelectionActive: !1 }), x.selected ? (c || x.selected && d) && (f({ nodes: [x], edges: [] }), requestAnimationFrame(() => r?.current?.blur())) : s([l]);
}
function Lp({ nodeRef: l, disabled: i = !1, noDragClassName: c, handleSelector: r, nodeId: s, isSelectable: f, nodeClickDistance: d }) {
  const g = $t(), [p, x] = et.useState(!1), v = et.useRef();
  return et.useEffect(() => {
    if (!i)
      return v.current = hw({
        getStoreItems: () => g.getState(),
        onNodeMouseDown: (m) => {
          zd({
            id: m,
            store: g,
            nodeRef: l
          });
        },
        onDragStart: () => {
          x(!0);
        },
        onDragStop: () => {
          x(!1);
        }
      }), () => {
        v.current?.destroy(), v.current = void 0;
      };
  }, [i, g, l]), et.useEffect(() => {
    i || !l.current || !v.current || v.current.update({
      noDragClassName: c,
      handleSelector: r,
      domNode: l.current,
      isSelectable: f,
      nodeId: s,
      nodeClickDistance: d
    });
  }, [c, r, i, f, l, s, d]), p;
}
const MN = (l) => (i) => i.selected && (i.draggable || l && typeof i.draggable > "u");
function qp() {
  const l = $t();
  return et.useCallback((c) => {
    const { nodeExtent: r, snapToGrid: s, snapGrid: f, nodesDraggable: d, onError: g, updateNodePositions: p, nodeLookup: x, nodeOrigin: v } = l.getState(), m = /* @__PURE__ */ new Map(), y = MN(d), b = s ? f[0] : 5, E = s ? f[1] : 5, M = c.direction.x * b * c.factor, w = c.direction.y * E * c.factor;
    for (const [, N] of x) {
      if (!y(N))
        continue;
      let U = {
        x: N.internals.positionAbsolute.x + M,
        y: N.internals.positionAbsolute.y + w
      };
      s && (U = Gu(U, f));
      const { position: _, positionAbsolute: A } = ip({
        nodeId: N.id,
        nextPosition: U,
        nodeLookup: x,
        nodeExtent: r,
        nodeOrigin: v,
        onError: g
      });
      N.position = _, N.internals.positionAbsolute = A, m.set(N.id, N);
    }
    p(m);
  }, []);
}
const kd = et.createContext(null), AN = kd.Provider;
kd.Consumer;
const Xp = () => et.useContext(kd), ON = (l) => ({
  connectOnClick: l.connectOnClick,
  noPanClassName: l.noPanClassName,
  rfId: l.rfId
}), Zp = et.createContext(null);
function DN({ children: l }) {
  const i = Bt(ON, It);
  return R.jsx(Zp.Provider, { value: i, children: l });
}
function RN() {
  const l = et.useContext(Zp);
  if (!l)
    throw new Error("useHandleConfig must be used within a HandleConfigProvider");
  return l;
}
const HN = {
  connectingFrom: !1,
  connectingTo: !1,
  clickConnecting: !1,
  isPossibleEndHandle: !0,
  connectionInProcess: !1,
  clickConnectionInProcess: !1,
  valid: !1
}, UN = (l, i, c) => (r) => {
  const { connectionClickStartHandle: s, connectionMode: f, connection: d } = r, { fromHandle: g, toHandle: p, isValid: x } = d;
  if (!g && !s)
    return HN;
  const v = p?.nodeId === l && p?.id === i && p?.type === c;
  return {
    connectingFrom: g?.nodeId === l && g?.id === i && g?.type === c,
    connectingTo: v,
    clickConnecting: s?.nodeId === l && s?.id === i && s?.type === c,
    isPossibleEndHandle: f === Si.Strict ? g?.type !== c : l !== g?.nodeId || i !== g?.id,
    connectionInProcess: !!g,
    clickConnectionInProcess: !!s,
    valid: v && x
  };
};
function BN({ type: l = "source", position: i = pt.Top, isValidConnection: c, isConnectable: r = !0, isConnectableStart: s = !0, isConnectableEnd: f = !0, id: d, onConnect: g, children: p, className: x, onMouseDown: v, onTouchStart: m, ...y }, b) {
  const E = d || null, M = l === "target", w = $t(), N = Xp(), { connectOnClick: U, noPanClassName: _, rfId: A } = RN(), { connectingFrom: G, connectingTo: V, clickConnecting: B, isPossibleEndHandle: Q, connectionInProcess: F, clickConnectionInProcess: ut, valid: D } = Bt(UN(N, E, l), It);
  N || w.getState().onError?.("010", xn.error010());
  const J = (Y) => {
    const { defaultEdgeOptions: O, onConnect: j, hasDefaultEdges: Z } = w.getState(), k = {
      ...O,
      ...Y
    };
    if (Z) {
      const { edges: nt, setEdges: it, onError: dt } = w.getState();
      it(gN(k, nt, { onError: dt }));
    }
    j?.(k), g?.(k);
  }, W = (Y) => {
    if (!N)
      return;
    const O = mp(Y.nativeEvent);
    if (s && (O && Y.button === 0 || !O)) {
      const j = w.getState();
      Cd.onPointerDown(Y.nativeEvent, {
        handleDomNode: Y.currentTarget,
        autoPanOnConnect: j.autoPanOnConnect,
        connectionMode: j.connectionMode,
        connectionRadius: j.connectionRadius,
        domNode: j.domNode,
        nodeLookup: j.nodeLookup,
        lib: j.lib,
        isTarget: M,
        handleId: E,
        nodeId: N,
        flowId: j.rfId,
        panBy: j.panBy,
        cancelConnection: j.cancelConnection,
        onConnectStart: j.onConnectStart,
        onConnectEnd: (...Z) => w.getState().onConnectEnd?.(...Z),
        updateConnection: j.updateConnection,
        onConnect: J,
        isValidConnection: c || ((...Z) => w.getState().isValidConnection?.(...Z) ?? !0),
        getTransform: () => w.getState().transform,
        getFromHandle: () => w.getState().connection.fromHandle,
        autoPanSpeed: j.autoPanSpeed,
        dragThreshold: j.connectionDragThreshold
      });
    }
    O ? v?.(Y) : m?.(Y);
  }, C = (Y) => {
    const { onClickConnectStart: O, onClickConnectEnd: j, connectionClickStartHandle: Z, connectionMode: k, isValidConnection: nt, lib: it, rfId: dt, nodeLookup: vt, connection: T } = w.getState();
    if (!N || !Z && !s)
      return;
    if (!Z) {
      O?.(Y.nativeEvent, { nodeId: N, handleId: E, handleType: l }), w.setState({ connectionClickStartHandle: { nodeId: N, type: l, id: E } });
      return;
    }
    const P = hp(Y.target), st = c || nt, { connection: ot, isValid: tt } = Cd.isValid(Y.nativeEvent, {
      handle: {
        nodeId: N,
        id: E,
        type: l
      },
      connectionMode: k,
      fromNodeId: Z.nodeId,
      fromHandleId: Z.id || null,
      fromType: Z.type,
      isValidConnection: st,
      flowId: dt,
      doc: P,
      lib: it,
      nodeLookup: vt
    });
    tt && ot && J(ot);
    const ft = structuredClone(T);
    delete ft.inProgress, ft.toPosition = ft.toHandle ? ft.toHandle.position : null, j?.(Y, ft), w.setState({ connectionClickStartHandle: null });
  };
  return R.jsx("div", { "data-handleid": E, "data-nodeid": N, "data-handlepos": i, "data-id": `${A}-${N}-${E}-${l}`, className: ue([
    "react-flow__handle",
    `react-flow__handle-${i}`,
    "nodrag",
    _,
    x,
    {
      source: !M,
      target: M,
      connectable: r,
      connectablestart: s,
      connectableend: f,
      clickconnecting: B,
      connectingfrom: G,
      connectingto: V,
      valid: D,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!F || Q) && (F || ut ? f : s)
    }
  ]), onMouseDown: W, onTouchStart: W, onClick: U ? C : void 0, ref: b, ...y, children: p });
}
const Yl = et.memo(jp(BN));
function jN({ data: l, isConnectable: i, sourcePosition: c = pt.Bottom }) {
  return R.jsxs(R.Fragment, { children: [l?.label, R.jsx(Yl, { type: "source", position: c, isConnectable: i })] });
}
function YN({ data: l, isConnectable: i, targetPosition: c = pt.Top, sourcePosition: r = pt.Bottom }) {
  return R.jsxs(R.Fragment, { children: [R.jsx(Yl, { type: "target", position: c, isConnectable: i }), l?.label, R.jsx(Yl, { type: "source", position: r, isConnectable: i })] });
}
function VN() {
  return null;
}
function LN({ data: l, isConnectable: i, targetPosition: c = pt.Top }) {
  return R.jsxs(R.Fragment, { children: [R.jsx(Yl, { type: "target", position: c, isConnectable: i }), l?.label] });
}
const tr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, rv = {
  input: jN,
  default: YN,
  output: LN,
  group: VN
};
function qN(l) {
  return l.internals.handleBounds === void 0 ? {
    width: l.width ?? l.initialWidth ?? l.style?.width,
    height: l.height ?? l.initialHeight ?? l.style?.height
  } : {
    width: l.width ?? l.style?.width,
    height: l.height ?? l.style?.height
  };
}
const XN = (l) => {
  const { width: i, height: c, x: r, y: s } = Zu(l.nodeLookup, {
    filter: (f) => !!f.selected
  });
  return {
    width: vn(i) ? i : null,
    height: vn(c) ? c : null,
    userSelectionActive: l.userSelectionActive,
    transformString: `translate(${l.transform[0]}px,${l.transform[1]}px) scale(${l.transform[2]}) translate(${r}px,${s}px)`
  };
};
function ZN({ onSelectionContextMenu: l, noPanClassName: i, disableKeyboardA11y: c }) {
  const r = $t(), { width: s, height: f, transformString: d, userSelectionActive: g } = Bt(XN, It), p = qp(), x = et.useRef(null);
  et.useEffect(() => {
    c || x.current?.focus({
      preventScroll: !0
    });
  }, [c]);
  const v = !g && s !== null && f !== null;
  if (Lp({
    nodeRef: x,
    disabled: !v
  }), !v)
    return null;
  const m = l ? (b) => {
    const E = r.getState().nodes.filter((M) => M.selected);
    l(b, E);
  } : void 0, y = (b) => {
    Object.prototype.hasOwnProperty.call(tr, b.key) && (b.preventDefault(), p({
      direction: tr[b.key],
      factor: b.shiftKey ? 4 : 1
    }));
  };
  return R.jsx("div", { className: ue(["react-flow__nodesselection", "react-flow__container", i]), style: {
    transform: d
  }, children: R.jsx("div", { ref: x, className: "react-flow__nodesselection-rect", onContextMenu: m, tabIndex: c ? void 0 : -1, onKeyDown: c ? void 0 : y, style: {
    width: s,
    height: f
  } }) });
}
const sv = typeof window < "u" ? window : void 0, GN = (l) => ({ nodesSelectionActive: l.nodesSelectionActive, userSelectionActive: l.userSelectionActive });
function Gp({ children: l, onPaneClick: i, onPaneMouseEnter: c, onPaneMouseMove: r, onPaneMouseLeave: s, onPaneContextMenu: f, onPaneScroll: d, paneClickDistance: g, deleteKeyCode: p, selectionKeyCode: x, selectionOnDrag: v, selectionMode: m, onSelectionStart: y, onSelectionEnd: b, multiSelectionKeyCode: E, panActivationKeyCode: M, zoomActivationKeyCode: w, elementsSelectable: N, zoomOnScroll: U, zoomOnPinch: _, panOnScroll: A, panOnScrollSpeed: G, panOnScrollMode: V, zoomOnDoubleClick: B, panOnDrag: Q, autoPanOnSelection: F, defaultViewport: ut, translateExtent: D, minZoom: J, maxZoom: W, preventScrolling: C, onSelectionContextMenu: Y, noWheelClassName: O, noPanClassName: j, disableKeyboardA11y: Z, onViewportChange: k, isControlledViewport: nt }) {
  const { nodesSelectionActive: it, userSelectionActive: dt } = Bt(GN, It), vt = Yu(x, { target: sv }), T = Yu(M, { target: sv }), P = T || Q, st = T || A, ot = v && P !== !0, tt = vt || dt || ot;
  return bN({ deleteKeyCode: p, multiSelectionKeyCode: E }), R.jsx(wN, { onPaneContextMenu: f, elementsSelectable: N, zoomOnScroll: U, zoomOnPinch: _, panOnScroll: st, panActivationKeyPressed: T, panOnScrollSpeed: G, panOnScrollMode: V, zoomOnDoubleClick: B, panOnDrag: !vt && P, defaultViewport: ut, translateExtent: D, minZoom: J, maxZoom: W, zoomActivationKeyCode: w, preventScrolling: C, noWheelClassName: O, noPanClassName: j, onViewportChange: k, isControlledViewport: nt, paneClickDistance: g, selectionOnDrag: ot, children: R.jsxs(zN, { onSelectionStart: y, onSelectionEnd: b, onPaneClick: i, onPaneMouseEnter: c, onPaneMouseMove: r, onPaneMouseLeave: s, onPaneContextMenu: f, onPaneScroll: d, panOnDrag: P, autoPanOnSelection: F, isSelecting: !!tt, selectionMode: m, selectionKeyPressed: vt, paneClickDistance: g, selectionOnDrag: ot, children: [l, it && R.jsx(ZN, { onSelectionContextMenu: Y, noPanClassName: j, disableKeyboardA11y: Z })] }) });
}
Gp.displayName = "FlowRenderer";
const QN = et.memo(Gp), KN = (l) => (i) => l ? Yd(i.nodeLookup, { x: 0, y: 0, width: i.width, height: i.height }, i.transform, !0).map((c) => c.id) : Array.from(i.nodeLookup.keys());
function $N(l) {
  return Bt(et.useCallback(KN(l), [l]), It);
}
const JN = (l) => l.updateNodeInternals;
function kN() {
  const l = Bt(JN), [i] = et.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((c) => {
    const r = /* @__PURE__ */ new Map();
    c.forEach((s) => {
      const f = s.target.getAttribute("data-id");
      r.set(f, {
        id: f,
        nodeElement: s.target,
        force: !0
      });
    }), l(r);
  }));
  return et.useEffect(() => () => {
    i?.disconnect();
  }, [i]), i;
}
function IN({ node: l, nodeType: i, hasDimensions: c, resizeObserver: r }) {
  const s = $t(), f = et.useRef(null), d = et.useRef(null), g = et.useRef(l.sourcePosition), p = et.useRef(l.targetPosition), x = et.useRef(i), v = c && !!l.internals.handleBounds;
  return et.useEffect(() => {
    f.current && !l.hidden && (!v || d.current !== f.current) && (d.current && r?.unobserve(d.current), r?.observe(f.current), d.current = f.current);
  }, [v, l.hidden]), et.useEffect(() => () => {
    d.current && (r?.unobserve(d.current), d.current = null);
  }, []), et.useEffect(() => {
    if (f.current) {
      const m = x.current !== i, y = g.current !== l.sourcePosition, b = p.current !== l.targetPosition;
      (m || y || b) && (x.current = i, g.current = l.sourcePosition, p.current = l.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([[l.id, { id: l.id, nodeElement: f.current, force: !0 }]])));
    }
  }, [l.id, i, l.sourcePosition, l.targetPosition]), f;
}
function FN({ id: l, onClick: i, onMouseEnter: c, onMouseMove: r, onMouseLeave: s, onContextMenu: f, onDoubleClick: d, nodesDraggable: g, elementsSelectable: p, nodesConnectable: x, nodesFocusable: v, resizeObserver: m, noDragClassName: y, noPanClassName: b, disableKeyboardA11y: E, rfId: M, nodeTypes: w, nodeClickDistance: N, onError: U }) {
  const { node: _, internals: A, isParent: G } = Bt((tt) => {
    const ft = tt.nodeLookup.get(l), gt = tt.parentLookup.has(l);
    return {
      node: ft,
      internals: ft.internals,
      isParent: gt
    };
  }, It);
  let V = _.type || "default", B = w?.[V] || rv[V];
  B === void 0 && (U?.("003", xn.error003(V)), V = "default", B = w?.default || rv.default);
  const Q = !!(_.draggable || g && typeof _.draggable > "u"), F = !!(_.selectable || p && typeof _.selectable > "u"), ut = !!(_.connectable || x && typeof _.connectable > "u"), D = !!(_.focusable || v && typeof _.focusable > "u"), J = $t(), W = sp(_), C = IN({ node: _, nodeType: V, hasDimensions: W, resizeObserver: m }), Y = Lp({
    nodeRef: C,
    disabled: _.hidden || !Q,
    noDragClassName: y,
    handleSelector: _.dragHandle,
    nodeId: l,
    isSelectable: F,
    nodeClickDistance: N
  }), O = qp();
  if (_.hidden)
    return null;
  const j = bn(_), Z = qN(_), k = F || Q || i || c || r || s, nt = c ? (tt) => c(tt, { ...A.userNode }) : void 0, it = r ? (tt) => r(tt, { ...A.userNode }) : void 0, dt = s ? (tt) => s(tt, { ...A.userNode }) : void 0, vt = f ? (tt) => f(tt, { ...A.userNode }) : void 0, T = d ? (tt) => d(tt, { ...A.userNode }) : void 0, P = (tt) => {
    const { selectNodesOnDrag: ft, nodeDragThreshold: gt } = J.getState();
    F && (!ft || !Q || gt > 0) && zd({
      id: l,
      store: J,
      nodeRef: C
    }), i && i(tt, { ...A.userNode });
  }, st = (tt) => {
    if (!(gp(tt.nativeEvent) || E)) {
      if (ep.includes(tt.key) && F) {
        const ft = tt.key === "Escape";
        zd({
          id: l,
          store: J,
          unselect: ft,
          nodeRef: C
        });
      } else if (Q && _.selected && Object.prototype.hasOwnProperty.call(tr, tt.key)) {
        tt.preventDefault();
        const { ariaLabelConfig: ft } = J.getState();
        J.setState({
          ariaLiveMessage: ft["node.a11yDescription.ariaLiveMessage"]({
            direction: tt.key.replace("Arrow", "").toLowerCase(),
            x: ~~A.positionAbsolute.x,
            y: ~~A.positionAbsolute.y
          })
        }), O({
          direction: tr[tt.key],
          factor: tt.shiftKey ? 4 : 1
        });
      }
    }
  }, ot = () => {
    if (E || !C.current?.matches(":focus-visible"))
      return;
    const { transform: tt, width: ft, height: gt, autoPanOnNodeFocus: ct, setCenter: rt } = J.getState();
    if (!ct)
      return;
    Yd(/* @__PURE__ */ new Map([[l, _]]), { x: 0, y: 0, width: ft, height: gt }, tt, !0).length > 0 || rt(_.position.x + j.width / 2, _.position.y + j.height / 2, {
      zoom: tt[2]
    });
  };
  return R.jsx("div", { className: ue([
    "react-flow__node",
    `react-flow__node-${V}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [b]: Q
    },
    _.className,
    {
      selected: _.selected,
      selectable: F,
      parent: G,
      draggable: Q,
      dragging: Y
    }
  ]), ref: C, style: {
    zIndex: A.z,
    transform: `translate(${A.positionAbsolute.x}px,${A.positionAbsolute.y}px)`,
    pointerEvents: k ? "all" : "none",
    visibility: W ? "visible" : "hidden",
    ..._.style,
    ...Z
  }, "data-id": l, "data-testid": `rf__node-${l}`, onMouseEnter: nt, onMouseMove: it, onMouseLeave: dt, onContextMenu: vt, onClick: P, onDoubleClick: T, onKeyDown: D ? st : void 0, tabIndex: D ? 0 : void 0, onFocus: D ? ot : void 0, role: _.ariaRole ?? (D ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${Dp}-${M}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: R.jsx(AN, { value: l, children: R.jsx(B, { id: l, data: _.data, type: V, positionAbsoluteX: A.positionAbsolute.x, positionAbsoluteY: A.positionAbsolute.y, selected: _.selected ?? !1, selectable: F, draggable: Q, deletable: _.deletable ?? !0, isConnectable: ut, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: Y, dragHandle: _.dragHandle, zIndex: A.z, parentId: _.parentId, ...j }) }) });
}
var WN = et.memo(FN);
const PN = (l) => ({
  nodesConnectable: l.nodesConnectable,
  nodesFocusable: l.nodesFocusable,
  elementsSelectable: l.elementsSelectable,
  onError: l.onError
});
function Qp(l) {
  const { nodesConnectable: i, nodesFocusable: c, elementsSelectable: r, onError: s } = Bt(PN, It), f = $N(l.onlyRenderVisibleElements), d = kN();
  return R.jsx("div", { className: "react-flow__nodes", style: fr, children: f.map((g) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    R.jsx(WN, { id: g, nodeTypes: l.nodeTypes, nodeExtent: l.nodeExtent, onClick: l.onNodeClick, onMouseEnter: l.onNodeMouseEnter, onMouseMove: l.onNodeMouseMove, onMouseLeave: l.onNodeMouseLeave, onContextMenu: l.onNodeContextMenu, onDoubleClick: l.onNodeDoubleClick, noDragClassName: l.noDragClassName, noPanClassName: l.noPanClassName, rfId: l.rfId, disableKeyboardA11y: l.disableKeyboardA11y, resizeObserver: d, nodesDraggable: l.nodesDraggable ?? !0, nodesConnectable: i, nodesFocusable: c, elementsSelectable: r, nodeClickDistance: l.nodeClickDistance, onError: s }, g)
  )) });
}
Qp.displayName = "NodeRenderer";
const t3 = et.memo(Qp);
function e3(l) {
  return Bt(et.useCallback((c) => {
    if (!l)
      return c.edges.map((s) => s.id);
    const r = [];
    if (c.width && c.height)
      for (const s of c.edges) {
        const f = c.nodeLookup.get(s.source), d = c.nodeLookup.get(s.target);
        f && d && J2({
          sourceNode: f,
          targetNode: d,
          width: c.width,
          height: c.height,
          transform: c.transform
        }) && r.push(s.id);
      }
    return r;
  }, [l]), It);
}
const n3 = ({ color: l = "none", strokeWidth: i = 1 }) => {
  const c = {
    strokeWidth: i,
    ...l && { stroke: l }
  };
  return R.jsx("polyline", { className: "arrow", style: c, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, l3 = ({ color: l = "none", strokeWidth: i = 1 }) => {
  const c = {
    strokeWidth: i,
    ...l && { stroke: l, fill: l }
  };
  return R.jsx("polyline", { className: "arrowclosed", style: c, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, fv = {
  [Fc.Arrow]: n3,
  [Fc.ArrowClosed]: l3
};
function a3(l) {
  const i = $t();
  return et.useMemo(() => Object.prototype.hasOwnProperty.call(fv, l) ? fv[l] : (i.getState().onError?.("009", xn.error009(l)), null), [l]);
}
const i3 = ({ id: l, type: i, color: c, width: r = 12.5, height: s = 12.5, markerUnits: f = "strokeWidth", strokeWidth: d, orient: g = "auto-start-reverse" }) => {
  const p = a3(i);
  return p ? R.jsx("marker", { className: "react-flow__arrowhead", id: l, markerWidth: `${r}`, markerHeight: `${s}`, viewBox: "-10 -10 20 20", markerUnits: f, orient: g, refX: "0", refY: "0", children: R.jsx(p, { color: c, strokeWidth: d }) }) : null;
}, Kp = ({ defaultColor: l, rfId: i }) => {
  const c = Bt((f) => f.edges), r = Bt((f) => f.defaultEdgeOptions), s = et.useMemo(() => nw(c, {
    id: i,
    defaultColor: l,
    defaultMarkerStart: r?.markerStart,
    defaultMarkerEnd: r?.markerEnd
  }), [c, r, i, l]);
  return s.length ? R.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: R.jsx("defs", { children: s.map((f) => R.jsx(i3, { id: f.id, type: f.type, color: f.color, width: f.width, height: f.height, markerUnits: f.markerUnits, strokeWidth: f.strokeWidth, orient: f.orient }, f.id)) }) }) : null;
};
Kp.displayName = "MarkerDefinitions";
var u3 = et.memo(Kp);
function $p({ x: l, y: i, label: c, labelStyle: r, labelShowBg: s = !0, labelBgStyle: f, labelBgPadding: d = [2, 4], labelBgBorderRadius: g = 2, children: p, className: x, ...v }) {
  const [m, y] = et.useState({ x: 1, y: 0, width: 0, height: 0 }), b = ue(["react-flow__edge-textwrapper", x]), E = et.useRef(null);
  return et.useEffect(() => {
    if (E.current) {
      const M = E.current.getBBox();
      y({
        x: M.x,
        y: M.y,
        width: M.width,
        height: M.height
      });
    }
  }, [c]), c ? R.jsxs("g", { transform: `translate(${l - m.width / 2} ${i - m.height / 2})`, className: b, visibility: m.width ? "visible" : "hidden", ...v, children: [s && R.jsx("rect", { width: m.width + 2 * d[0], x: -d[0], y: -d[1], height: m.height + 2 * d[1], className: "react-flow__edge-textbg", style: f, rx: g, ry: g }), R.jsx("text", { className: "react-flow__edge-text", y: m.height / 2, dy: "0.3em", ref: E, style: r, children: c }), p] }) : null;
}
$p.displayName = "EdgeText";
const o3 = et.memo($p);
function Ku({ path: l, labelX: i, labelY: c, label: r, labelStyle: s, labelShowBg: f, labelBgStyle: d, labelBgPadding: g, labelBgBorderRadius: p, interactionWidth: x = 20, ...v }) {
  return R.jsxs(R.Fragment, { children: [R.jsx("path", { ...v, d: l, fill: "none", className: ue(["react-flow__edge-path", v.className]) }), x ? R.jsx("path", { d: l, fill: "none", strokeOpacity: 0, strokeWidth: x, className: "react-flow__edge-interaction" }) : null, r && vn(i) && vn(c) ? R.jsx(o3, { x: i, y: c, label: r, labelStyle: s, labelShowBg: f, labelBgStyle: d, labelBgPadding: g, labelBgBorderRadius: p }) : null] });
}
function dv({ pos: l, x1: i, y1: c, x2: r, y2: s }) {
  return l === pt.Left || l === pt.Right ? [0.5 * (i + r), c] : [i, 0.5 * (c + s)];
}
function Jp({ sourceX: l, sourceY: i, sourcePosition: c = pt.Bottom, targetX: r, targetY: s, targetPosition: f = pt.Top }) {
  const [d, g] = dv({
    pos: c,
    x1: l,
    y1: i,
    x2: r,
    y2: s
  }), [p, x] = dv({
    pos: f,
    x1: r,
    y1: s,
    x2: l,
    y2: i
  }), [v, m, y, b] = yp({
    sourceX: l,
    sourceY: i,
    targetX: r,
    targetY: s,
    sourceControlX: d,
    sourceControlY: g,
    targetControlX: p,
    targetControlY: x
  });
  return [
    `M${l},${i} C${d},${g} ${p},${x} ${r},${s}`,
    v,
    m,
    y,
    b
  ];
}
function kp(l) {
  return et.memo(({ id: i, sourceX: c, sourceY: r, targetX: s, targetY: f, sourcePosition: d, targetPosition: g, label: p, labelStyle: x, labelShowBg: v, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: b, style: E, markerEnd: M, markerStart: w, interactionWidth: N }) => {
    const [U, _, A] = Jp({
      sourceX: c,
      sourceY: r,
      sourcePosition: d,
      targetX: s,
      targetY: f,
      targetPosition: g
    }), G = l.isInternal ? void 0 : i;
    return R.jsx(Ku, { id: G, path: U, labelX: _, labelY: A, label: p, labelStyle: x, labelShowBg: v, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: b, style: E, markerEnd: M, markerStart: w, interactionWidth: N });
  });
}
const c3 = kp({ isInternal: !1 }), Ip = kp({ isInternal: !0 });
c3.displayName = "SimpleBezierEdge";
Ip.displayName = "SimpleBezierEdgeInternal";
function Fp(l) {
  return et.memo(({ id: i, sourceX: c, sourceY: r, targetX: s, targetY: f, label: d, labelStyle: g, labelShowBg: p, labelBgStyle: x, labelBgPadding: v, labelBgBorderRadius: m, style: y, sourcePosition: b = pt.Bottom, targetPosition: E = pt.Top, markerEnd: M, markerStart: w, pathOptions: N, interactionWidth: U }) => {
    const [_, A, G] = wd({
      sourceX: c,
      sourceY: r,
      sourcePosition: b,
      targetX: s,
      targetY: f,
      targetPosition: E,
      borderRadius: N?.borderRadius,
      offset: N?.offset,
      stepPosition: N?.stepPosition
    }), V = l.isInternal ? void 0 : i;
    return R.jsx(Ku, { id: V, path: _, labelX: A, labelY: G, label: d, labelStyle: g, labelShowBg: p, labelBgStyle: x, labelBgPadding: v, labelBgBorderRadius: m, style: y, markerEnd: M, markerStart: w, interactionWidth: U });
  });
}
const Wp = Fp({ isInternal: !1 }), Pp = Fp({ isInternal: !0 });
Wp.displayName = "SmoothStepEdge";
Pp.displayName = "SmoothStepEdgeInternal";
function t1(l) {
  return et.memo(({ id: i, ...c }) => {
    const r = l.isInternal ? void 0 : i;
    return R.jsx(Wp, { ...c, id: r, pathOptions: et.useMemo(() => ({ borderRadius: 0, offset: c.pathOptions?.offset }), [c.pathOptions?.offset]) });
  });
}
const r3 = t1({ isInternal: !1 }), e1 = t1({ isInternal: !0 });
r3.displayName = "StepEdge";
e1.displayName = "StepEdgeInternal";
function n1(l) {
  return et.memo(({ id: i, sourceX: c, sourceY: r, targetX: s, targetY: f, label: d, labelStyle: g, labelShowBg: p, labelBgStyle: x, labelBgPadding: v, labelBgBorderRadius: m, style: y, markerEnd: b, markerStart: E, interactionWidth: M }) => {
    const [w, N, U] = pp({ sourceX: c, sourceY: r, targetX: s, targetY: f }), _ = l.isInternal ? void 0 : i;
    return R.jsx(Ku, { id: _, path: w, labelX: N, labelY: U, label: d, labelStyle: g, labelShowBg: p, labelBgStyle: x, labelBgPadding: v, labelBgBorderRadius: m, style: y, markerEnd: b, markerStart: E, interactionWidth: M });
  });
}
const s3 = n1({ isInternal: !1 }), l1 = n1({ isInternal: !0 });
s3.displayName = "StraightEdge";
l1.displayName = "StraightEdgeInternal";
function a1(l) {
  return et.memo(({ id: i, sourceX: c, sourceY: r, targetX: s, targetY: f, sourcePosition: d = pt.Bottom, targetPosition: g = pt.Top, label: p, labelStyle: x, labelShowBg: v, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: b, style: E, markerEnd: M, markerStart: w, pathOptions: N, interactionWidth: U }) => {
    const [_, A, G] = Xd({
      sourceX: c,
      sourceY: r,
      sourcePosition: d,
      targetX: s,
      targetY: f,
      targetPosition: g,
      curvature: N?.curvature
    }), V = l.isInternal ? void 0 : i;
    return R.jsx(Ku, { id: V, path: _, labelX: A, labelY: G, label: p, labelStyle: x, labelShowBg: v, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: b, style: E, markerEnd: M, markerStart: w, interactionWidth: U });
  });
}
const f3 = a1({ isInternal: !1 }), i1 = a1({ isInternal: !0 });
f3.displayName = "BezierEdge";
i1.displayName = "BezierEdgeInternal";
const hv = {
  default: i1,
  straight: l1,
  step: e1,
  smoothstep: Pp,
  simplebezier: Ip
}, gv = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null,
  zIndex: void 0
}, d3 = (l, i, c) => c === pt.Left ? l - i : c === pt.Right ? l + i : l, h3 = (l, i, c) => c === pt.Top ? l - i : c === pt.Bottom ? l + i : l, mv = "react-flow__edgeupdater";
function yv({ position: l, centerX: i, centerY: c, radius: r = 10, onMouseDown: s, onMouseEnter: f, onMouseOut: d, type: g }) {
  return R.jsx("circle", { onMouseDown: s, onMouseEnter: f, onMouseOut: d, className: ue([mv, `${mv}-${g}`]), cx: d3(i, r, l), cy: h3(c, r, l), r, stroke: "transparent", fill: "transparent" });
}
function g3({ isReconnectable: l, reconnectRadius: i, edge: c, sourceX: r, sourceY: s, targetX: f, targetY: d, sourcePosition: g, targetPosition: p, onReconnect: x, onReconnectStart: v, onReconnectEnd: m, setReconnecting: y, setUpdateHover: b }) {
  const E = $t(), M = (A, G) => {
    if (A.button !== 0)
      return;
    const { autoPanOnConnect: V, domNode: B, connectionMode: Q, connectionRadius: F, lib: ut, onConnectStart: D, cancelConnection: J, nodeLookup: W, rfId: C, panBy: Y, updateConnection: O } = E.getState(), j = G.type === "target", Z = (it, dt) => {
      y(!1), m?.(it, c, G.type, dt);
    }, k = (it) => x?.(c, it), nt = (it, dt) => {
      y(!0), v?.(A, c, G.type), D?.(it, dt);
    };
    Cd.onPointerDown(A.nativeEvent, {
      autoPanOnConnect: V,
      connectionMode: Q,
      connectionRadius: F,
      domNode: B,
      handleId: G.id,
      nodeId: G.nodeId,
      nodeLookup: W,
      isTarget: j,
      edgeUpdaterType: G.type,
      lib: ut,
      flowId: C,
      cancelConnection: J,
      panBy: Y,
      isValidConnection: (...it) => E.getState().isValidConnection?.(...it) ?? !0,
      onConnect: k,
      onConnectStart: nt,
      onConnectEnd: (...it) => E.getState().onConnectEnd?.(...it),
      onReconnectEnd: Z,
      updateConnection: O,
      getTransform: () => E.getState().transform,
      getFromHandle: () => E.getState().connection.fromHandle,
      dragThreshold: E.getState().connectionDragThreshold,
      handleDomNode: A.currentTarget
    });
  }, w = (A) => M(A, { nodeId: c.target, id: c.targetHandle ?? null, type: "target" }), N = (A) => M(A, { nodeId: c.source, id: c.sourceHandle ?? null, type: "source" }), U = () => b(!0), _ = () => b(!1);
  return R.jsxs(R.Fragment, { children: [(l === !0 || l === "source") && R.jsx(yv, { position: g, centerX: r, centerY: s, radius: i, onMouseDown: w, onMouseEnter: U, onMouseOut: _, type: "source" }), (l === !0 || l === "target") && R.jsx(yv, { position: p, centerX: f, centerY: d, radius: i, onMouseDown: N, onMouseEnter: U, onMouseOut: _, type: "target" })] });
}
function m3({ id: l, edgesFocusable: i, edgesReconnectable: c, elementsSelectable: r, onClick: s, onDoubleClick: f, onContextMenu: d, onMouseEnter: g, onMouseMove: p, onMouseLeave: x, reconnectRadius: v, onReconnect: m, onReconnectStart: y, onReconnectEnd: b, rfId: E, edgeTypes: M, noPanClassName: w, onError: N, disableKeyboardA11y: U }) {
  let _ = Bt((rt) => rt.edgeLookup.get(l));
  const A = Bt((rt) => rt.defaultEdgeOptions);
  _ = A ? { ...A, ..._ } : _;
  let G = _.type || "default", V = M?.[G] || hv[G];
  V === void 0 && (N?.("011", xn.error011(G)), G = "default", V = M?.default || hv.default);
  const B = !!(_.focusable || i && typeof _.focusable > "u"), Q = typeof m < "u" && (_.reconnectable || c && typeof _.reconnectable > "u"), F = !!(_.selectable || r && typeof _.selectable > "u"), ut = et.useRef(null), [D, J] = et.useState(!1), [W, C] = et.useState(!1), Y = $t(), { zIndex: O = _.zIndex, sourceX: j, sourceY: Z, targetX: k, targetY: nt, sourcePosition: it, targetPosition: dt } = Bt(et.useCallback((rt) => {
    const xt = rt.nodeLookup.get(_.source), wt = rt.nodeLookup.get(_.target);
    if (!xt || !wt)
      return gv;
    const _t = ew({
      id: l,
      sourceNode: xt,
      targetNode: wt,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: rt.connectionMode,
      onError: N
    }), Ct = $2({
      selected: _.selected,
      zIndex: _.zIndex,
      sourceNode: xt,
      targetNode: wt,
      elevateOnSelect: rt.elevateEdgesOnSelect,
      zIndexMode: rt.zIndexMode
    });
    return {
      ..._t || gv,
      zIndex: Ct
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex, N]), It), vt = et.useMemo(() => _.markerStart ? `url('#${Nd(_.markerStart, E)}')` : void 0, [_.markerStart, E]), T = et.useMemo(() => _.markerEnd ? `url('#${Nd(_.markerEnd, E)}')` : void 0, [_.markerEnd, E]);
  if (_.hidden || j === null || Z === null || k === null || nt === null)
    return null;
  const P = (rt) => {
    const { addSelectedEdges: xt, unselectNodesAndEdges: wt, multiSelectionActive: _t } = Y.getState();
    F && (Y.setState({ nodesSelectionActive: !1 }), _.selected && _t ? (wt({ nodes: [], edges: [_] }), ut.current?.blur()) : xt([l])), s && s(rt, _);
  }, st = f ? (rt) => {
    f(rt, { ..._ });
  } : void 0, ot = d ? (rt) => {
    d(rt, { ..._ });
  } : void 0, tt = g ? (rt) => {
    g(rt, { ..._ });
  } : void 0, ft = p ? (rt) => {
    p(rt, { ..._ });
  } : void 0, gt = x ? (rt) => {
    x(rt, { ..._ });
  } : void 0, ct = (rt) => {
    if (!U && ep.includes(rt.key) && F) {
      const { unselectNodesAndEdges: xt, addSelectedEdges: wt } = Y.getState();
      rt.key === "Escape" ? (ut.current?.blur(), xt({ edges: [_] })) : wt([l]);
    }
  };
  return R.jsx("svg", { style: { zIndex: O }, children: R.jsxs("g", { className: ue([
    "react-flow__edge",
    `react-flow__edge-${G}`,
    _.className,
    w,
    {
      selected: _.selected,
      animated: _.animated,
      inactive: !F && !s,
      updating: D,
      selectable: F
    }
  ]), onClick: P, onDoubleClick: st, onContextMenu: ot, onMouseEnter: tt, onMouseMove: ft, onMouseLeave: gt, onKeyDown: B ? ct : void 0, tabIndex: B ? 0 : void 0, role: _.ariaRole ?? (B ? "group" : "img"), "aria-roledescription": "edge", "data-id": l, "data-testid": `rf__edge-${l}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": B ? `${Rp}-${E}` : void 0, ref: ut, ..._.domAttributes, children: [!W && R.jsx(V, { id: l, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: F, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: j, sourceY: Z, targetX: k, targetY: nt, sourcePosition: it, targetPosition: dt, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: vt, markerEnd: T, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), Q && R.jsx(g3, { edge: _, isReconnectable: Q, reconnectRadius: v, onReconnect: m, onReconnectStart: y, onReconnectEnd: b, sourceX: j, sourceY: Z, targetX: k, targetY: nt, sourcePosition: it, targetPosition: dt, setUpdateHover: J, setReconnecting: C })] }) });
}
var y3 = et.memo(m3);
const v3 = (l) => ({
  edgesFocusable: l.edgesFocusable,
  edgesReconnectable: l.edgesReconnectable,
  elementsSelectable: l.elementsSelectable,
  connectionMode: l.connectionMode,
  onError: l.onError
});
function u1({ defaultMarkerColor: l, onlyRenderVisibleElements: i, rfId: c, edgeTypes: r, noPanClassName: s, onReconnect: f, onEdgeContextMenu: d, onEdgeMouseEnter: g, onEdgeMouseMove: p, onEdgeMouseLeave: x, onEdgeClick: v, reconnectRadius: m, onEdgeDoubleClick: y, onReconnectStart: b, onReconnectEnd: E, disableKeyboardA11y: M }) {
  const { edgesFocusable: w, edgesReconnectable: N, elementsSelectable: U, onError: _ } = Bt(v3, It), A = e3(i);
  return R.jsxs("div", { className: "react-flow__edges", children: [R.jsx(u3, { defaultColor: l, rfId: c }), A.map((G) => R.jsx(y3, { id: G, edgesFocusable: w, edgesReconnectable: N, elementsSelectable: U, noPanClassName: s, onReconnect: f, onContextMenu: d, onMouseEnter: g, onMouseMove: p, onMouseLeave: x, onClick: v, reconnectRadius: m, onDoubleClick: y, onReconnectStart: b, onReconnectEnd: E, rfId: c, onError: _, edgeTypes: r, disableKeyboardA11y: M }, G))] });
}
u1.displayName = "EdgeRenderer";
const p3 = et.memo(u1), vv = (l) => `translate(${l[0]}px,${l[1]}px) scale(${l[2]})`;
function x3({ children: l }) {
  const i = $t(), c = et.useRef(null), [r] = et.useState(() => i.getState().transform);
  return Yp(() => {
    let s = null;
    const f = () => {
      const d = i.getState().transform;
      s && d[0] === s[0] && d[1] === s[1] && d[2] === s[2] || (s = d, c.current && (c.current.style.transform = vv(d)));
    };
    return f(), i.subscribe(f);
  }, [i]), R.jsx("div", { ref: c, className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: vv(r) }, children: l });
}
function S3(l) {
  const i = Jd(), c = et.useRef(!1);
  et.useEffect(() => {
    !c.current && i.viewportInitialized && l && (setTimeout(() => l(i), 1), c.current = !0);
  }, [l, i.viewportInitialized]);
}
const b3 = (l) => l.panZoom?.syncViewport;
function E3(l) {
  const i = Bt(b3), c = $t();
  return et.useEffect(() => {
    l && (i?.(l), c.setState({ transform: [l.x, l.y, l.zoom] }));
  }, [l, i]), null;
}
function _3(l) {
  return l.connection.inProgress ? { ...l.connection, to: Qu(l.connection.to, l.transform) } : { ...l.connection };
}
function w3(l) {
  return _3;
}
function N3(l) {
  const i = w3();
  return Bt(i, It);
}
const T3 = (l) => ({
  nodesConnectable: l.nodesConnectable,
  isValid: l.connection.isValid,
  inProgress: l.connection.inProgress,
  width: l.width,
  height: l.height
});
function C3({ containerStyle: l, style: i, type: c, component: r }) {
  const { nodesConnectable: s, width: f, height: d, isValid: g, inProgress: p } = Bt(T3, It);
  return !(f && s && p) ? null : R.jsx("svg", { style: l, width: f, height: d, className: "react-flow__connectionline react-flow__container", children: R.jsx("g", { className: ue(["react-flow__connection", dp(g)]), children: R.jsx(o1, { style: i, type: c, CustomComponent: r, isValid: g }) }) });
}
const o1 = ({ style: l, type: i = jl.Bezier, CustomComponent: c, isValid: r }) => {
  const { inProgress: s, from: f, fromNode: d, fromHandle: g, fromPosition: p, to: x, toNode: v, toHandle: m, toPosition: y, pointer: b } = N3();
  if (!s)
    return;
  if (c)
    return R.jsx(c, { connectionLineType: i, connectionLineStyle: l, fromNode: d, fromHandle: g, fromX: f.x, fromY: f.y, toX: x.x, toY: x.y, fromPosition: p, toPosition: y, connectionStatus: dp(r), toNode: v, toHandle: m, pointer: b });
  let E = "";
  const M = {
    sourceX: f.x,
    sourceY: f.y,
    sourcePosition: p,
    targetX: x.x,
    targetY: x.y,
    targetPosition: y
  };
  switch (i) {
    case jl.Bezier:
      [E] = Xd(M);
      break;
    case jl.SimpleBezier:
      [E] = Jp(M);
      break;
    case jl.Step:
      [E] = wd({
        ...M,
        borderRadius: 0
      });
      break;
    case jl.SmoothStep:
      [E] = wd(M);
      break;
    default:
      [E] = pp(M);
  }
  return R.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: l });
};
o1.displayName = "ConnectionLine";
const z3 = {};
function pv(l = z3) {
  et.useRef(l), $t(), et.useEffect(() => {
  }, [l]);
}
function M3() {
  $t(), et.useRef(!1), et.useEffect(() => {
  }, []);
}
function c1({ nodeTypes: l, edgeTypes: i, onInit: c, onNodeClick: r, onEdgeClick: s, onNodeDoubleClick: f, onEdgeDoubleClick: d, onNodeMouseEnter: g, onNodeMouseMove: p, onNodeMouseLeave: x, onNodeContextMenu: v, onSelectionContextMenu: m, onSelectionStart: y, onSelectionEnd: b, connectionLineType: E, connectionLineStyle: M, connectionLineComponent: w, connectionLineContainerStyle: N, selectionKeyCode: U, selectionOnDrag: _, selectionMode: A, multiSelectionKeyCode: G, panActivationKeyCode: V, zoomActivationKeyCode: B, deleteKeyCode: Q, onlyRenderVisibleElements: F, elementsSelectable: ut, defaultViewport: D, translateExtent: J, minZoom: W, maxZoom: C, preventScrolling: Y, defaultMarkerColor: O, zoomOnScroll: j, zoomOnPinch: Z, panOnScroll: k, panOnScrollSpeed: nt, panOnScrollMode: it, zoomOnDoubleClick: dt, panOnDrag: vt, autoPanOnSelection: T, onPaneClick: P, onPaneMouseEnter: st, onPaneMouseMove: ot, onPaneMouseLeave: tt, onPaneScroll: ft, onPaneContextMenu: gt, paneClickDistance: ct, nodeClickDistance: rt, onEdgeContextMenu: xt, onEdgeMouseEnter: wt, onEdgeMouseMove: _t, onEdgeMouseLeave: Ct, reconnectRadius: Ht, onReconnect: Ot, onReconnectStart: Pt, onReconnectEnd: xe, noDragClassName: re, noWheelClassName: En, noPanClassName: ke, disableKeyboardA11y: Ae, nodeExtent: Ee, rfId: Oe, viewport: Ye, onViewportChange: _n, nodesDraggable: Ie }) {
  return pv(l), pv(i), M3(), S3(c), E3(Ye), R.jsx(QN, { onPaneClick: P, onPaneMouseEnter: st, onPaneMouseMove: ot, onPaneMouseLeave: tt, onPaneContextMenu: gt, onPaneScroll: ft, paneClickDistance: ct, deleteKeyCode: Q, selectionKeyCode: U, selectionOnDrag: _, selectionMode: A, onSelectionStart: y, onSelectionEnd: b, multiSelectionKeyCode: G, panActivationKeyCode: V, zoomActivationKeyCode: B, elementsSelectable: ut, zoomOnScroll: j, zoomOnPinch: Z, zoomOnDoubleClick: dt, panOnScroll: k, panOnScrollSpeed: nt, panOnScrollMode: it, panOnDrag: vt, autoPanOnSelection: T, defaultViewport: D, translateExtent: J, minZoom: W, maxZoom: C, onSelectionContextMenu: m, preventScrolling: Y, noDragClassName: re, noWheelClassName: En, noPanClassName: ke, disableKeyboardA11y: Ae, onViewportChange: _n, isControlledViewport: !!Ye, children: R.jsxs(x3, { children: [R.jsx(p3, { edgeTypes: i, onEdgeClick: s, onEdgeDoubleClick: d, onReconnect: Ot, onReconnectStart: Pt, onReconnectEnd: xe, onlyRenderVisibleElements: F, onEdgeContextMenu: xt, onEdgeMouseEnter: wt, onEdgeMouseMove: _t, onEdgeMouseLeave: Ct, reconnectRadius: Ht, defaultMarkerColor: O, noPanClassName: ke, disableKeyboardA11y: Ae, rfId: Oe }), R.jsx(C3, { style: M, type: E, component: w, containerStyle: N }), R.jsx("div", { className: "react-flow__edgelabel-renderer" }), R.jsx(t3, { nodeTypes: l, onNodeClick: r, onNodeDoubleClick: f, onNodeMouseEnter: g, onNodeMouseMove: p, onNodeMouseLeave: x, onNodeContextMenu: v, nodeClickDistance: rt, onlyRenderVisibleElements: F, noPanClassName: ke, noDragClassName: re, disableKeyboardA11y: Ae, nodeExtent: Ee, rfId: Oe, nodesDraggable: Ie }), R.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
c1.displayName = "GraphView";
const A3 = et.memo(c1), O3 = rp(), xv = ({ nodes: l, edges: i, defaultNodes: c, defaultEdges: r, width: s, height: f, fitView: d, fitViewOptions: g, minZoom: p = 0.5, maxZoom: x = 2, nodeOrigin: v, nodeExtent: m, zIndexMode: y = "basic" } = {}) => {
  const b = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), N = r ?? i ?? [], U = c ?? l ?? [], _ = v ?? [0, 0], A = m ?? Hu;
  bp(M, w, N);
  const { nodesInitialized: G } = Td(U, b, E, {
    nodeOrigin: _,
    nodeExtent: A,
    zIndexMode: y
  });
  let V = [0, 0, 1];
  if (d && s && f) {
    const B = Zu(b, {
      filter: (D) => !!((D.width || D.initialWidth) && (D.height || D.initialHeight))
    }), { x: Q, y: F, zoom: ut } = Ld(B, s, f, p, x, g?.padding ?? 0.1);
    V = [Q, F, ut];
  }
  return {
    rfId: "1",
    width: s ?? 0,
    height: f ?? 0,
    transform: V,
    nodes: U,
    nodesInitialized: G,
    nodeLookup: b,
    parentLookup: E,
    edges: N,
    edgeLookup: w,
    connectionLookup: M,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: c !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: p,
    maxZoom: x,
    translateExtent: Hu,
    nodeExtent: A,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: Si.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: _,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: d ?? !1,
    fitViewOptions: g,
    fitViewResolver: null,
    connection: { ...lp },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: O3,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: np,
    zIndexMode: y,
    defaultEdgeOptions: void 0,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onNodesDelete: void 0,
    onEdgesDelete: void 0,
    onDelete: void 0,
    onBeforeDelete: void 0,
    onViewportChangeStart: void 0,
    onViewportChange: void 0,
    onViewportChangeEnd: void 0,
    onNodeDragStart: void 0,
    onNodeDrag: void 0,
    onNodeDragStop: void 0,
    onSelectionDragStart: void 0,
    onSelectionDrag: void 0,
    onSelectionDragStop: void 0,
    onMoveStart: void 0,
    onMove: void 0,
    onMoveEnd: void 0,
    onConnect: void 0,
    onConnectStart: void 0,
    onConnectEnd: void 0,
    onClickConnectStart: void 0,
    onClickConnectEnd: void 0
  };
}, D3 = ({ nodes: l, edges: i, defaultNodes: c, defaultEdges: r, width: s, height: f, fitView: d, fitViewOptions: g, minZoom: p, maxZoom: x, nodeOrigin: v, nodeExtent: m, zIndexMode: y }) => Gw((b, E) => {
  async function M() {
    const { nodeLookup: w, panZoom: N, fitViewOptions: U, fitViewResolver: _, width: A, height: G, minZoom: V, maxZoom: B } = E();
    N && (await L2({
      nodes: w,
      width: A,
      height: G,
      panZoom: N,
      minZoom: V,
      maxZoom: B
    }, U), _?.resolve(!0), b({ fitViewResolver: null }));
  }
  return {
    ...xv({
      nodes: l,
      edges: i,
      width: s,
      height: f,
      fitView: d,
      fitViewOptions: g,
      minZoom: p,
      maxZoom: x,
      nodeOrigin: v,
      nodeExtent: m,
      defaultNodes: c,
      defaultEdges: r,
      zIndexMode: y
    }),
    setNodes: (w) => {
      const { nodeLookup: N, parentLookup: U, nodeOrigin: _, nodeExtent: A, elevateNodesOnSelect: G, fitViewQueued: V, zIndexMode: B, nodesSelectionActive: Q } = E(), { nodesInitialized: F, hasSelectedNodes: ut } = Td(w, N, U, {
        nodeOrigin: _,
        nodeExtent: A,
        elevateNodesOnSelect: G,
        checkEquality: !0,
        zIndexMode: B
      }), D = Q && ut;
      V && F ? (M(), b({
        nodes: w,
        nodesInitialized: F,
        fitViewQueued: !1,
        fitViewOptions: void 0,
        nodesSelectionActive: D
      })) : b({ nodes: w, nodesInitialized: F, nodesSelectionActive: D });
    },
    setEdges: (w) => {
      const { connectionLookup: N, edgeLookup: U } = E();
      bp(N, U, w), b({ edges: w });
    },
    setDefaultNodesAndEdges: (w, N) => {
      if (w) {
        const { setNodes: U } = E();
        U(w), b({ hasDefaultNodes: !0 });
      }
      if (N) {
        const { setEdges: U } = E();
        U(N), b({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registered at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (w) => {
      const { triggerNodeChanges: N, nodeLookup: U, parentLookup: _, domNode: A, nodeOrigin: G, nodeExtent: V, debug: B, fitViewQueued: Q, zIndexMode: F } = E(), { changes: ut, updatedInternals: D } = rw(w, U, _, A, G, V, F);
      D && (iw(U, _, { nodeOrigin: G, nodeExtent: V, zIndexMode: F }), Q ? (M(), b({ fitViewQueued: !1, fitViewOptions: void 0 })) : b({}), ut?.length > 0 && (B && console.log("React Flow: trigger node changes", ut), N?.(ut)));
    },
    updateNodePositions: (w, N = !1) => {
      const U = [];
      let _ = [];
      const { nodeLookup: A, triggerNodeChanges: G, connection: V, updateConnection: B, onNodesChangeMiddlewareMap: Q } = E();
      for (const [F, ut] of w) {
        const D = A.get(F), J = !!(D?.expandParent && D?.parentId && ut?.position), W = {
          id: F,
          type: "position",
          position: J ? {
            x: Math.max(0, ut.position.x),
            y: Math.max(0, ut.position.y)
          } : ut.position,
          dragging: N
        };
        if (D && V.inProgress && V.fromNode.id === D.id) {
          const C = Sa(D, V.fromHandle, pt.Left, !0);
          B({ ...V, from: C });
        }
        J && D.parentId && U.push({
          id: F,
          parentId: D.parentId,
          rect: {
            ...ut.internals.positionAbsolute,
            width: ut.measured.width ?? 0,
            height: ut.measured.height ?? 0
          }
        }), _.push(W);
      }
      if (U.length > 0) {
        const { parentLookup: F, nodeOrigin: ut } = E(), D = $d(U, A, F, ut);
        _.push(...D);
      }
      for (const F of Q.values())
        _ = F(_);
      G(_);
    },
    triggerNodeChanges: (w) => {
      const { onNodesChange: N, setNodes: U, nodes: _, hasDefaultNodes: A, debug: G } = E();
      if (w?.length) {
        if (A) {
          const V = Bp(w, _);
          U(V);
        }
        G && console.log("React Flow: trigger node changes", w), N?.(w);
      }
    },
    triggerEdgeChanges: (w) => {
      const { onEdgesChange: N, setEdges: U, edges: _, hasDefaultEdges: A, debug: G } = E();
      if (w?.length) {
        if (A) {
          const V = dN(w, _);
          U(V);
        }
        G && console.log("React Flow: trigger edge changes", w), N?.(w);
      }
    },
    addSelectedNodes: (w) => {
      const { multiSelectionActive: N, edgeLookup: U, nodeLookup: _, triggerNodeChanges: A, triggerEdgeChanges: G } = E();
      if (N) {
        const V = w.map((B) => da(B, !0));
        A(V);
        return;
      }
      A(mi(_, /* @__PURE__ */ new Set([...w]), !0)), G(mi(U));
    },
    addSelectedEdges: (w) => {
      const { multiSelectionActive: N, edgeLookup: U, nodeLookup: _, triggerNodeChanges: A, triggerEdgeChanges: G } = E();
      if (N) {
        const V = w.map((B) => da(B, !0));
        G(V);
        return;
      }
      G(mi(U, /* @__PURE__ */ new Set([...w]))), A(mi(_, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: w, edges: N } = {}) => {
      const { edges: U, nodes: _, nodeLookup: A, triggerNodeChanges: G, triggerEdgeChanges: V } = E(), B = w || _, Q = N || U, F = [];
      for (const D of B) {
        if (!D.selected)
          continue;
        const J = A.get(D.id);
        J && (J.selected = !1), F.push(da(D.id, !1));
      }
      const ut = [];
      for (const D of Q)
        D.selected && ut.push(da(D.id, !1));
      G(F), V(ut);
    },
    setMinZoom: (w) => {
      const { panZoom: N, maxZoom: U } = E();
      N?.setScaleExtent([w, U]), b({ minZoom: w });
    },
    setMaxZoom: (w) => {
      const { panZoom: N, minZoom: U } = E();
      N?.setScaleExtent([U, w]), b({ maxZoom: w });
    },
    setTranslateExtent: (w) => {
      E().panZoom?.setTranslateExtent(w), b({ translateExtent: w });
    },
    resetSelectedElements: () => {
      const { edges: w, nodes: N, triggerNodeChanges: U, triggerEdgeChanges: _, elementsSelectable: A } = E();
      if (!A)
        return;
      const G = N.reduce((B, Q) => Q.selected ? [...B, da(Q.id, !1)] : B, []), V = w.reduce((B, Q) => Q.selected ? [...B, da(Q.id, !1)] : B, []);
      U(G), _(V);
    },
    setNodeExtent: (w) => {
      const { nodes: N, nodeLookup: U, parentLookup: _, nodeOrigin: A, elevateNodesOnSelect: G, nodeExtent: V, zIndexMode: B } = E();
      w[0][0] === V[0][0] && w[0][1] === V[0][1] && w[1][0] === V[1][0] && w[1][1] === V[1][1] || (Td(N, U, _, {
        nodeOrigin: A,
        nodeExtent: w,
        elevateNodesOnSelect: G,
        checkEquality: !1,
        zIndexMode: B
      }), b({ nodeExtent: w }));
    },
    panBy: (w) => {
      const { transform: N, width: U, height: _, panZoom: A, translateExtent: G } = E();
      return sw({ delta: w, panZoom: A, transform: N, translateExtent: G, width: U, height: _ });
    },
    setCenter: async (w, N, U) => {
      const { width: _, height: A, maxZoom: G, panZoom: V } = E();
      if (!V)
        return !1;
      const B = typeof U?.zoom < "u" ? U.zoom : G;
      return await V.setViewport({
        x: _ / 2 - w * B,
        y: A / 2 - N * B,
        zoom: B
      }, { duration: U?.duration, ease: U?.ease, interpolate: U?.interpolate }), !0;
    },
    cancelConnection: () => {
      b({
        connection: { ...lp }
      });
    },
    updateConnection: (w) => {
      b({ connection: w });
    },
    reset: () => b({ ...xv() })
  };
}, Object.is);
function R3({ initialNodes: l, initialEdges: i, defaultNodes: c, defaultEdges: r, initialWidth: s, initialHeight: f, initialMinZoom: d, initialMaxZoom: g, initialFitViewOptions: p, fitView: x, nodeOrigin: v, nodeExtent: m, zIndexMode: y, children: b }) {
  const [E] = et.useState(() => D3({
    nodes: l,
    edges: i,
    defaultNodes: c,
    defaultEdges: r,
    width: s,
    height: f,
    fitView: x,
    minZoom: d,
    maxZoom: g,
    fitViewOptions: p,
    nodeOrigin: v,
    nodeExtent: m,
    zIndexMode: y
  }));
  return R.jsx(Kw, { value: E, children: R.jsx(vN, { children: R.jsx(DN, { children: b }) }) });
}
function H3({ children: l, nodes: i, edges: c, defaultNodes: r, defaultEdges: s, width: f, height: d, fitView: g, fitViewOptions: p, minZoom: x, maxZoom: v, nodeOrigin: m, nodeExtent: y, zIndexMode: b }) {
  return et.useContext(rr) ? R.jsx(R.Fragment, { children: l }) : R.jsx(R3, { initialNodes: i, initialEdges: c, defaultNodes: r, defaultEdges: s, initialWidth: f, initialHeight: d, fitView: g, initialFitViewOptions: p, initialMinZoom: x, initialMaxZoom: v, nodeOrigin: m, nodeExtent: y, zIndexMode: b, children: l });
}
const U3 = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function B3({ nodes: l, edges: i, defaultNodes: c, defaultEdges: r, className: s, nodeTypes: f, edgeTypes: d, onNodeClick: g, onEdgeClick: p, onInit: x, onMove: v, onMoveStart: m, onMoveEnd: y, onConnect: b, onConnectStart: E, onConnectEnd: M, onClickConnectStart: w, onClickConnectEnd: N, onNodeMouseEnter: U, onNodeMouseMove: _, onNodeMouseLeave: A, onNodeContextMenu: G, onNodeDoubleClick: V, onNodeDragStart: B, onNodeDrag: Q, onNodeDragStop: F, onNodesDelete: ut, onEdgesDelete: D, onDelete: J, onSelectionChange: W, onSelectionDragStart: C, onSelectionDrag: Y, onSelectionDragStop: O, onSelectionContextMenu: j, onSelectionStart: Z, onSelectionEnd: k, onBeforeDelete: nt, connectionMode: it, connectionLineType: dt = jl.Bezier, connectionLineStyle: vt, connectionLineComponent: T, connectionLineContainerStyle: P, deleteKeyCode: st = "Backspace", selectionKeyCode: ot = "Shift", selectionOnDrag: tt = !1, selectionMode: ft = Uu.Full, panActivationKeyCode: gt = "Space", multiSelectionKeyCode: ct = ju() ? "Meta" : "Control", zoomActivationKeyCode: rt = ju() ? "Meta" : "Control", snapToGrid: xt, snapGrid: wt, onlyRenderVisibleElements: _t = !1, selectNodesOnDrag: Ct, nodesDraggable: Ht, autoPanOnNodeFocus: Ot, nodesConnectable: Pt, nodesFocusable: xe, nodeOrigin: re = Hp, edgesFocusable: En, edgesReconnectable: ke, elementsSelectable: Ae = !0, defaultViewport: Ee = iN, minZoom: Oe = 0.5, maxZoom: Ye = 2, translateExtent: _n = Hu, preventScrolling: Ie = !0, nodeExtent: Ll, defaultMarkerColor: wi = "#b1b1b7", zoomOnScroll: dr = !0, zoomOnPinch: $u = !0, panOnScroll: Ni = !1, panOnScrollSpeed: Ti = 0.5, panOnScrollMode: Ci = ma.Free, zoomOnDoubleClick: hr = !0, panOnDrag: gr = !0, onPaneClick: _e, onPaneMouseEnter: mr, onPaneMouseMove: Ju, onPaneMouseLeave: ku, onPaneScroll: ba, onPaneContextMenu: yr, paneClickDistance: Iu = 1, nodeClickDistance: vr = 0, children: pr, onReconnect: ql, onReconnectStart: we, onReconnectEnd: wn, onEdgeContextMenu: Ne, onEdgeDoubleClick: xr, onEdgeMouseEnter: Sr, onEdgeMouseMove: br, onEdgeMouseLeave: Ea, reconnectRadius: _a = 10, onNodesChange: wa, onEdgesChange: Vn, noDragClassName: Na = "nodrag", noWheelClassName: Xl = "nowheel", noPanClassName: zi = "nopan", fitView: Fu, fitViewOptions: Mi, connectOnClick: Ai, attributionPosition: Zl, proOptions: Er, defaultEdgeOptions: Wu, elevateNodesOnSelect: Pu = !0, elevateEdgesOnSelect: to = !1, disableKeyboardA11y: Ta = !1, autoPanOnConnect: Oi, autoPanOnNodeDrag: eo, autoPanOnSelection: no = !0, autoPanSpeed: on, connectionRadius: oe, isValidConnection: Se, onError: il, style: lo, id: ao, nodeDragThreshold: _r, connectionDragThreshold: io, viewport: Gl, onViewportChange: Ca, width: za, height: Ln, colorMode: ul = "light", debug: Ql, onScroll: qn, ariaLabelConfig: ee, zIndexMode: Di = "basic", ...uo }, oo) {
  const cn = ao || "1", ol = rN(ul), wr = et.useCallback((Ri) => {
    Ri.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), qn?.(Ri);
  }, [qn]);
  return R.jsx("div", { "data-testid": "rf__wrapper", ...uo, onScroll: wr, style: { ...lo, ...U3 }, ref: oo, className: ue(["react-flow", s, ol]), id: ao, role: "application", children: R.jsxs(H3, { nodes: l, edges: i, width: za, height: Ln, fitView: Fu, fitViewOptions: Mi, minZoom: Oe, maxZoom: Ye, nodeOrigin: re, nodeExtent: Ll, zIndexMode: Di, children: [R.jsx(cN, { nodes: l, edges: i, defaultNodes: c, defaultEdges: r, onConnect: b, onConnectStart: E, onConnectEnd: M, onClickConnectStart: w, onClickConnectEnd: N, nodesDraggable: Ht, autoPanOnNodeFocus: Ot, nodesConnectable: Pt, nodesFocusable: xe, edgesFocusable: En, edgesReconnectable: ke, elementsSelectable: Ae, elevateNodesOnSelect: Pu, elevateEdgesOnSelect: to, minZoom: Oe, maxZoom: Ye, nodeExtent: Ll, onNodesChange: wa, onEdgesChange: Vn, snapToGrid: xt, snapGrid: wt, connectionMode: it, translateExtent: _n, connectOnClick: Ai, defaultEdgeOptions: Wu, fitView: Fu, fitViewOptions: Mi, onNodesDelete: ut, onEdgesDelete: D, onDelete: J, onNodeDragStart: B, onNodeDrag: Q, onNodeDragStop: F, onSelectionDrag: Y, onSelectionDragStart: C, onSelectionDragStop: O, onMove: v, onMoveStart: m, onMoveEnd: y, noPanClassName: zi, nodeOrigin: re, rfId: cn, autoPanOnConnect: Oi, autoPanOnNodeDrag: eo, autoPanSpeed: on, onError: il, connectionRadius: oe, isValidConnection: Se, selectNodesOnDrag: Ct, nodeDragThreshold: _r, connectionDragThreshold: io, onBeforeDelete: nt, debug: Ql, ariaLabelConfig: ee, zIndexMode: Di }), R.jsx(A3, { onInit: x, onNodeClick: g, onEdgeClick: p, onNodeMouseEnter: U, onNodeMouseMove: _, onNodeMouseLeave: A, onNodeContextMenu: G, onNodeDoubleClick: V, nodeTypes: f, edgeTypes: d, connectionLineType: dt, connectionLineStyle: vt, connectionLineComponent: T, connectionLineContainerStyle: P, selectionKeyCode: ot, selectionOnDrag: tt, selectionMode: ft, deleteKeyCode: st, multiSelectionKeyCode: ct, panActivationKeyCode: gt, zoomActivationKeyCode: rt, onlyRenderVisibleElements: _t, defaultViewport: Ee, translateExtent: _n, minZoom: Oe, maxZoom: Ye, preventScrolling: Ie, zoomOnScroll: dr, zoomOnPinch: $u, zoomOnDoubleClick: hr, panOnScroll: Ni, panOnScrollSpeed: Ti, panOnScrollMode: Ci, panOnDrag: gr, autoPanOnSelection: no, onPaneClick: _e, onPaneMouseEnter: mr, onPaneMouseMove: Ju, onPaneMouseLeave: ku, onPaneScroll: ba, onPaneContextMenu: yr, paneClickDistance: Iu, nodeClickDistance: vr, onSelectionContextMenu: j, onSelectionStart: Z, onSelectionEnd: k, onReconnect: ql, onReconnectStart: we, onReconnectEnd: wn, onEdgeContextMenu: Ne, onEdgeDoubleClick: xr, onEdgeMouseEnter: Sr, onEdgeMouseMove: br, onEdgeMouseLeave: Ea, reconnectRadius: _a, defaultMarkerColor: wi, noDragClassName: Na, noWheelClassName: Xl, noPanClassName: zi, rfId: cn, disableKeyboardA11y: Ta, nodeExtent: Ll, viewport: Gl, onViewportChange: Ca, nodesDraggable: Ht }), R.jsx(aN, { onSelectionChange: W }), pr, R.jsx(Pw, { proOptions: Er, position: Zl }), R.jsx(Ww, { rfId: cn, disableKeyboardA11y: Ta })] }) });
}
var j3 = jp(B3);
const Y3 = (l) => l.domNode?.querySelector(".react-flow__edgelabel-renderer");
function V3({ children: l }) {
  const i = Bt(Y3);
  return i ? Qw.createPortal(l, i) : null;
}
function L3({ dimensions: l, lineWidth: i, variant: c, className: r }) {
  return R.jsx("path", { strokeWidth: i, d: `M${l[0] / 2} 0 V${l[1]} M0 ${l[1] / 2} H${l[0]}`, className: ue(["react-flow__background-pattern", c, r]) });
}
function q3({ radius: l, className: i }) {
  return R.jsx("circle", { cx: l, cy: l, r: l, className: ue(["react-flow__background-pattern", "dots", i]) });
}
var Vl;
(function(l) {
  l.Lines = "lines", l.Dots = "dots", l.Cross = "cross";
})(Vl || (Vl = {}));
const X3 = {
  [Vl.Dots]: 1,
  [Vl.Lines]: 1,
  [Vl.Cross]: 6
}, Z3 = (l) => ({ transform: l.transform, patternId: `pattern-${l.rfId}` });
function r1({
  id: l,
  variant: i = Vl.Dots,
  // only used for dots and cross
  gap: c = 20,
  // only used for lines and cross
  size: r,
  lineWidth: s = 1,
  offset: f = 0,
  color: d,
  bgColor: g,
  style: p,
  className: x,
  patternClassName: v
}) {
  const m = et.useRef(null), { transform: y, patternId: b } = Bt(Z3, It), E = r || X3[i], M = i === Vl.Dots, w = i === Vl.Cross, N = Array.isArray(c) ? c : [c, c], U = [N[0] * y[2] || 1, N[1] * y[2] || 1], _ = E * y[2], A = Array.isArray(f) ? f : [f, f], G = w ? [_, _] : U, V = [
    A[0] * y[2] + G[0] / 2,
    A[1] * y[2] + G[1] / 2
  ], B = `${b}${l || ""}`;
  return R.jsxs("svg", { className: ue(["react-flow__background", x]), style: {
    ...p,
    ...fr,
    "--xy-background-color-props": g,
    "--xy-background-pattern-color-props": d
  }, ref: m, "data-testid": "rf__background", children: [R.jsx("pattern", { id: B, x: y[0] % U[0], y: y[1] % U[1], width: U[0], height: U[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${V[0]},-${V[1]})`, children: M ? R.jsx(q3, { radius: _ / 2, className: v }) : R.jsx(L3, { dimensions: G, lineWidth: s, variant: i, className: v }) }), R.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${B})` })] });
}
r1.displayName = "Background";
const G3 = et.memo(r1);
function Q3() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: R.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function K3() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: R.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function $3() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: R.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function J3() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: R.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function k3() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: R.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function jc({ children: l, className: i, ...c }) {
  return R.jsx("button", { type: "button", className: ue(["react-flow__controls-button", i]), ...c, children: l });
}
const I3 = (l) => ({
  isInteractive: l.nodesDraggable || l.nodesConnectable || l.elementsSelectable,
  minZoomReached: l.transform[2] <= l.minZoom,
  maxZoomReached: l.transform[2] >= l.maxZoom,
  ariaLabelConfig: l.ariaLabelConfig
});
function s1({ style: l, showZoom: i = !0, showFitView: c = !0, showInteractive: r = !0, fitViewOptions: s, onZoomIn: f, onZoomOut: d, onFitView: g, onInteractiveChange: p, className: x, children: v, position: m = "bottom-left", orientation: y = "vertical", "aria-label": b }) {
  const E = $t(), { isInteractive: M, minZoomReached: w, maxZoomReached: N, ariaLabelConfig: U } = Bt(I3, It), { zoomIn: _, zoomOut: A, fitView: G } = Jd(), V = () => {
    _(), f?.();
  }, B = () => {
    A(), d?.();
  }, Q = () => {
    G(s), g?.();
  }, F = () => {
    E.setState({
      nodesDraggable: !M,
      nodesConnectable: !M,
      elementsSelectable: !M
    }), p?.(!M);
  }, ut = y === "horizontal" ? "horizontal" : "vertical";
  return R.jsxs(sr, { className: ue(["react-flow__controls", ut, x]), position: m, style: l, "data-testid": "rf__controls", "aria-label": b ?? U["controls.ariaLabel"], children: [i && R.jsxs(R.Fragment, { children: [R.jsx(jc, { onClick: V, className: "react-flow__controls-zoomin", title: U["controls.zoomIn.ariaLabel"], "aria-label": U["controls.zoomIn.ariaLabel"], disabled: N, children: R.jsx(Q3, {}) }), R.jsx(jc, { onClick: B, className: "react-flow__controls-zoomout", title: U["controls.zoomOut.ariaLabel"], "aria-label": U["controls.zoomOut.ariaLabel"], disabled: w, children: R.jsx(K3, {}) })] }), c && R.jsx(jc, { className: "react-flow__controls-fitview", onClick: Q, title: U["controls.fitView.ariaLabel"], "aria-label": U["controls.fitView.ariaLabel"], children: R.jsx($3, {}) }), r && R.jsx(jc, { className: "react-flow__controls-interactive", onClick: F, title: U["controls.interactive.ariaLabel"], "aria-label": U["controls.interactive.ariaLabel"], children: M ? R.jsx(k3, {}) : R.jsx(J3, {}) }), v] });
}
s1.displayName = "Controls";
const F3 = et.memo(s1);
function W3({ id: l, x: i, y: c, width: r, height: s, style: f, color: d, strokeColor: g, strokeWidth: p, className: x, borderRadius: v, shapeRendering: m, selected: y, onClick: b }) {
  const { background: E, backgroundColor: M } = f || {}, w = d || E || M;
  return R.jsx("rect", { className: ue(["react-flow__minimap-node", { selected: y }, x]), x: i, y: c, rx: v, ry: v, width: r, height: s, style: {
    fill: w,
    stroke: g,
    strokeWidth: p
  }, shapeRendering: m, onClick: b ? (N) => b(N, l) : void 0 });
}
const P3 = et.memo(W3), tT = (l) => l.nodes.map((i) => i.id), gd = (l) => l instanceof Function ? l : () => l;
function eT({
  nodeStrokeColor: l,
  nodeColor: i,
  nodeClassName: c = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: f = P3,
  onClick: d
}) {
  const g = Bt(tT, It), p = gd(i), x = gd(l), v = gd(c), m = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return R.jsx(R.Fragment, { children: g.map((y) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    R.jsx(lT, { id: y, nodeColorFunc: p, nodeStrokeColorFunc: x, nodeClassNameFunc: v, nodeBorderRadius: r, nodeStrokeWidth: s, NodeComponent: f, onClick: d, shapeRendering: m }, y)
  )) });
}
function nT({ id: l, nodeColorFunc: i, nodeStrokeColorFunc: c, nodeClassNameFunc: r, nodeBorderRadius: s, nodeStrokeWidth: f, shapeRendering: d, NodeComponent: g, onClick: p }) {
  const { node: x, x: v, y: m, width: y, height: b } = Bt((E) => {
    const M = E.nodeLookup.get(l);
    if (!M)
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const w = M.internals.userNode, { x: N, y: U } = M.internals.positionAbsolute, { width: _, height: A } = bn(w);
    return {
      node: w,
      x: N,
      y: U,
      width: _,
      height: A
    };
  }, It);
  return !x || x.hidden || !sp(x) ? null : R.jsx(g, { x: v, y: m, width: y, height: b, style: x.style, selected: !!x.selected, className: r(x), color: i(x), borderRadius: s, strokeColor: c(x), strokeWidth: f, shapeRendering: d, onClick: p, id: x.id });
}
const lT = et.memo(nT);
var aT = et.memo(eT);
const iT = 200, uT = 150, oT = (l) => !l.hidden, cT = (l) => {
  const i = {
    x: -l.transform[0] / l.transform[2],
    y: -l.transform[1] / l.transform[2],
    width: l.width / l.transform[2],
    height: l.height / l.transform[2]
  };
  let c = !1;
  for (const r of l.nodeLookup.values())
    if (!r.hidden) {
      c = !0;
      break;
    }
  return {
    viewBB: i,
    boundingRect: c ? op(Zu(l.nodeLookup, { filter: oT }), i) : i,
    rfId: l.rfId,
    panZoom: l.panZoom,
    translateExtent: l.translateExtent,
    flowWidth: l.width,
    flowHeight: l.height,
    ariaLabelConfig: l.ariaLabelConfig
  };
}, Sv = (l, i) => l.x === i.x && l.y === i.y && l.width === i.width && l.height === i.height, rT = (l, i) => Sv(l.viewBB, i.viewBB) && Sv(l.boundingRect, i.boundingRect) && l.rfId === i.rfId && l.panZoom === i.panZoom && l.translateExtent === i.translateExtent && l.flowWidth === i.flowWidth && l.flowHeight === i.flowHeight && l.ariaLabelConfig === i.ariaLabelConfig, sT = "react-flow__minimap-desc";
function f1({
  style: l,
  className: i,
  nodeStrokeColor: c,
  nodeColor: r,
  nodeClassName: s = "",
  nodeBorderRadius: f = 5,
  nodeStrokeWidth: d,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: g,
  bgColor: p,
  maskColor: x,
  maskStrokeColor: v,
  maskStrokeWidth: m,
  position: y = "bottom-right",
  onClick: b,
  onNodeClick: E,
  pannable: M = !1,
  zoomable: w = !1,
  ariaLabel: N,
  inversePan: U,
  zoomStep: _ = 1,
  offsetScale: A = 5
}) {
  const G = $t(), V = et.useRef(null), { boundingRect: B, panZoom: Q, viewBB: F, rfId: ut, translateExtent: D, flowWidth: J, flowHeight: W, ariaLabelConfig: C } = Bt(cT, rT), Y = l?.width ?? iT, O = l?.height ?? uT, j = B.width / Y, Z = B.height / O, k = Math.max(j, Z), nt = k * Y, it = k * O, dt = A * k, vt = B.x - (nt - B.width) / 2 - dt, T = B.y - (it - B.height) / 2 - dt, P = nt + dt * 2, st = it + dt * 2, ot = `${sT}-${ut}`, tt = et.useRef(0), ft = et.useRef();
  tt.current = k, et.useEffect(() => {
    const wt = G.getState().panZoom;
    if (V.current && wt)
      return ft.current = xw({
        domNode: V.current,
        panZoom: wt,
        getTransform: () => G.getState().transform,
        getViewScale: () => tt.current
      }), () => {
        ft.current?.destroy();
      };
  }, [Q]), et.useEffect(() => {
    ft.current?.update({
      translateExtent: D,
      width: J,
      height: W,
      inversePan: U,
      pannable: M,
      zoomStep: _,
      zoomable: w
    });
  }, [M, w, U, _, D, J, W]);
  const gt = b ? (wt) => {
    const [_t, Ct] = ft.current?.pointer(wt) || [0, 0];
    b(wt, { x: _t, y: Ct });
  } : void 0, ct = et.useCallback((wt, _t) => {
    const Ct = G.getState().nodeLookup.get(_t).internals.userNode;
    E?.(wt, Ct);
  }, [E]), rt = E ? ct : void 0, xt = N ?? C["minimap.ariaLabel"];
  return R.jsx(sr, { position: y, style: {
    ...l,
    "--xy-minimap-background-color-props": typeof p == "string" ? p : void 0,
    "--xy-minimap-mask-background-color-props": typeof x == "string" ? x : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof v == "string" ? v : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof m == "number" ? m * k : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof c == "string" ? c : void 0,
    "--xy-minimap-node-stroke-width-props": typeof d == "number" ? d : void 0
  }, className: ue(["react-flow__minimap", i]), "data-testid": "rf__minimap", children: R.jsxs("svg", { width: Y, height: O, viewBox: `${vt} ${T} ${P} ${st}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": ot, ref: V, onClick: gt, children: [xt && R.jsx("title", { id: ot, children: xt }), R.jsx(aT, { onClick: rt, nodeColor: r, nodeStrokeColor: c, nodeBorderRadius: f, nodeClassName: s, nodeStrokeWidth: d, nodeComponent: g }), R.jsx("path", { className: "react-flow__minimap-mask", d: `M${vt - dt},${T - dt}h${P + dt * 2}v${st + dt * 2}h${-P - dt * 2}z
        M${F.x},${F.y}h${F.width}v${F.height}h${-F.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
f1.displayName = "MiniMap";
const fT = et.memo(f1), dT = (l) => (i) => l ? `${Math.max(1 / i.transform[2], 1)}` : void 0, hT = {
  [_i.Line]: "right",
  [_i.Handle]: "bottom-right"
};
function gT({ nodeId: l, position: i, variant: c = _i.Handle, className: r, style: s = void 0, children: f, color: d, minWidth: g = 10, minHeight: p = 10, maxWidth: x = Number.MAX_VALUE, maxHeight: v = Number.MAX_VALUE, keepAspectRatio: m = !1, resizeDirection: y, autoScale: b = !0, shouldResize: E, onResizeStart: M, onResize: w, onResizeEnd: N }) {
  const U = Xp(), _ = typeof l == "string" ? l : U, A = $t(), G = et.useRef(null), V = c === _i.Handle, B = Bt(et.useCallback(dT(V && b), [V, b]), It), Q = et.useRef(null), F = i ?? hT[c];
  et.useEffect(() => {
    if (!(!G.current || !_))
      return Q.current || (Q.current = Dw({
        domNode: G.current,
        nodeId: _,
        getStoreItems: () => {
          const { nodeLookup: D, transform: J, snapGrid: W, snapToGrid: C, nodeOrigin: Y, domNode: O } = A.getState();
          return {
            nodeLookup: D,
            transform: J,
            snapGrid: W,
            snapToGrid: C,
            nodeOrigin: Y,
            paneDomNode: O
          };
        },
        onChange: (D, J) => {
          const { triggerNodeChanges: W, nodeLookup: C, parentLookup: Y, nodeOrigin: O } = A.getState(), j = [], Z = { x: D.x, y: D.y }, k = C.get(_);
          if (k && k.expandParent && k.parentId) {
            const nt = k.origin ?? O, it = D.width ?? k.measured.width ?? 0, dt = D.height ?? k.measured.height ?? 0, vt = {
              id: k.id,
              parentId: k.parentId,
              rect: {
                width: it,
                height: dt,
                ...fp({
                  x: D.x ?? k.position.x,
                  y: D.y ?? k.position.y
                }, { width: it, height: dt }, k.parentId, C, nt)
              }
            }, T = $d([vt], C, Y, O);
            j.push(...T), Z.x = D.x ? Math.max(nt[0] * it, D.x) : void 0, Z.y = D.y ? Math.max(nt[1] * dt, D.y) : void 0;
          }
          if (Z.x !== void 0 && Z.y !== void 0) {
            const nt = {
              id: _,
              type: "position",
              position: { ...Z }
            };
            j.push(nt);
          }
          if (D.width !== void 0 && D.height !== void 0) {
            const it = {
              id: _,
              type: "dimensions",
              resizing: !0,
              setAttributes: y ? y === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: D.width,
                height: D.height
              }
            };
            j.push(it);
          }
          for (const nt of J) {
            const it = {
              ...nt,
              type: "position"
            };
            j.push(it);
          }
          W(j);
        },
        onEnd: ({ width: D, height: J }) => {
          const W = {
            id: _,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: D,
              height: J
            }
          };
          A.getState().triggerNodeChanges([W]);
        }
      })), Q.current.update({
        controlPosition: F,
        boundaries: {
          minWidth: g,
          minHeight: p,
          maxWidth: x,
          maxHeight: v
        },
        keepAspectRatio: m,
        resizeDirection: y,
        onResizeStart: M,
        onResize: w,
        onResizeEnd: N,
        shouldResize: E
      }), () => {
        Q.current?.destroy();
      };
  }, [
    F,
    g,
    p,
    x,
    v,
    m,
    M,
    w,
    N,
    E
  ]);
  const ut = F.split("-");
  return R.jsx("div", { className: ue(["react-flow__resize-control", "nodrag", ...ut, c, r]), ref: G, style: {
    ...s,
    scale: B,
    ...d && { [V ? "backgroundColor" : "borderColor"]: d }
  }, children: f });
}
et.memo(gT);
function bv(l, i, c = []) {
  const r = new Set(i), s = new Set(c);
  return {
    ...l,
    entities: l.entities.filter((f) => !r.has(f.id)),
    relationships: l.relationships.filter(
      (f) => !s.has(f.id) && !r.has(f.source) && !r.has(f.target)
    )
  };
}
function mT({ data: l }) {
  const i = l.entity;
  return /* @__PURE__ */ R.jsxs("div", { className: "erd-node", children: [
    /* @__PURE__ */ R.jsx(Yl, { type: "target", position: pt.Left, id: "left" }),
    /* @__PURE__ */ R.jsx(Yl, { type: "source", position: pt.Right, id: "right" }),
    /* @__PURE__ */ R.jsx(Yl, { type: "target", position: pt.Top, id: "top" }),
    /* @__PURE__ */ R.jsx(Yl, { type: "source", position: pt.Bottom, id: "bottom" }),
    /* @__PURE__ */ R.jsxs("div", { className: "erd-node-heading", children: [
      /* @__PURE__ */ R.jsx("small", { children: i.role }),
      /* @__PURE__ */ R.jsx("strong", { children: i.name })
    ] }),
    i.annotation && /* @__PURE__ */ R.jsx("div", { className: "erd-node-note", children: i.annotation }),
    i.fields.map((c) => /* @__PURE__ */ R.jsxs("div", { className: "erd-node-field", children: [
      /* @__PURE__ */ R.jsxs("span", { children: [
        c.pk ? "🔑 " : c.fk ? "⇢ " : "",
        c.name
      ] }),
      /* @__PURE__ */ R.jsx("small", { children: c.data_type })
    ] }, c.id))
  ] });
}
const Ev = (l, i) => l ? i === "many" ? "0..*" : "0..1" : i === "many" ? "1..*" : "1";
function yT(l) {
  const [i, c, r] = Xd(l), s = l.data?.relation;
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      Ku,
      {
        path: i,
        markerEnd: s?.target_cardinality === "many" ? "url(#erd-crowfoot)" : "url(#erd-one)",
        markerStart: s?.source_cardinality === "many" ? "url(#erd-crowfoot-start)" : "url(#erd-one-start)",
        style: { stroke: "#607889", strokeWidth: 2 }
      }
    ),
    s && /* @__PURE__ */ R.jsx(V3, { children: /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: "erd-edge-label",
        style: {
          transform: `translate(-50%, -50%) translate(${c}px,${r}px)`
        },
        children: [
          s.label || "relationship",
          " ·",
          " ",
          Ev(s.source_optional, s.source_cardinality),
          " :",
          " ",
          Ev(s.target_optional, s.target_cardinality)
        ]
      }
    ) })
  ] });
}
const vT = { entity: et.memo(mT) }, pT = { relation: et.memo(yT) }, Md = () => crypto.randomUUID(), xT = (l) => l === "conceptual_erd" ? "entity" : l === "star_schema" ? "dimension" : "table", ST = (l, i) => ({
  id: Md(),
  source: l,
  target: i,
  label: "",
  source_cardinality: "one",
  target_cardinality: "many",
  source_optional: !1,
  target_optional: !0
});
function bT({
  diagram: l,
  attemptId: i,
  kind: c,
  onSave: r
}) {
  const [s, f] = et.useState(l), [d, g] = et.useState(null), [p, x] = et.useState(null), [v, m] = et.useState([]), y = et.useRef(s);
  et.useEffect(() => {
    f(l), y.current = l, g(null), x(null);
  }, [i]), et.useEffect(() => {
    m((D) => {
      const J = new Map(D.map((W) => [W.id, W]));
      return s.entities.map(
        (W) => J.get(W.id)?.data.entity === W ? J.get(W.id) : {
          ...J.get(W.id),
          id: W.id,
          type: "entity",
          position: W.position,
          data: { entity: W }
        }
      );
    });
  }, [s.entities]);
  const b = et.useCallback(
    (D) => {
      y.current = D, f(D), r(D);
    },
    [r]
  ), E = (D, J) => b({
    ...y.current,
    entities: y.current.entities.map(
      (W) => W.id === D ? { ...W, ...J } : W
    )
  }), M = (D, J) => b({
    ...y.current,
    relationships: y.current.relationships.map(
      (W) => W.id === D ? { ...W, ...J } : W
    )
  }), w = s.entities.find((D) => D.id === d), N = et.useMemo(
    () => new Map(s.entities.map((D) => [D.id, D.name])),
    [s.entities]
  ), U = s.relationships.find((D) => D.id === p), _ = et.useMemo(
    () => s.relationships.map((D) => ({
      id: D.id,
      source: D.source,
      target: D.target,
      sourceHandle: D.source_handle ?? "right",
      targetHandle: D.target_handle ?? "left",
      selected: D.id === p,
      type: "relation",
      data: { relation: D }
    })),
    [s.relationships, p]
  ), A = et.useCallback(
    (D) => {
      if (D.source && D.target && D.source !== D.target && y.current.relationships.length < 300 && !y.current.relationships.some(
        (J) => J.source === D.source && J.target === D.target
      )) {
        const J = {
          ...ST(D.source, D.target),
          source_handle: D.sourceHandle,
          target_handle: D.targetHandle
        };
        b({
          ...y.current,
          relationships: [...y.current.relationships, J]
        }), x(J.id), g(null);
      }
    },
    [b]
  ), G = () => {
    if (y.current.entities.length >= 100) return;
    const D = {
      id: Md(),
      name: c === "star_schema" ? "New dimension" : "New entity",
      role: xT(c),
      annotation: "",
      position: {
        x: 80 + s.entities.length % 4 * 260,
        y: 80 + Math.floor(s.entities.length / 4) * 180
      },
      fields: []
    };
    b({ ...y.current, entities: [...y.current.entities, D] }), g(D.id), x(null);
  }, V = () => {
    w && (b(bv(y.current, [w.id])), g(null));
  }, B = () => {
    !w || w.fields.length >= 100 || E(w.id, {
      fields: [
        ...w.fields,
        { id: Md(), name: "new_field", data_type: "", pk: !1, fk: !1 }
      ]
    });
  }, Q = (D, J) => {
    w && E(w.id, {
      fields: w.fields.map(
        (W) => W.id === D ? { ...W, ...J } : W
      )
    });
  }, F = (D) => m((J) => Bp(D, J)), ut = (D) => {
    for (const J of D)
      J.type === "select" && x(
        (W) => J.selected ? J.id : W === J.id ? null : W
      );
  };
  return /* @__PURE__ */ R.jsxs("div", { className: "erd-editor", children: [
    /* @__PURE__ */ R.jsxs("div", { className: "erd-toolbar", children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          type: "button",
          disabled: s.entities.length >= 100,
          onClick: G,
          children: [
            "+ Add ",
            c === "conceptual_erd" ? "entity" : "table"
          ]
        }
      ),
      /* @__PURE__ */ R.jsxs("span", { children: [
        s.entities.length,
        " entities · ",
        s.relationships.length,
        " ",
        "relationships"
      ] }),
      /* @__PURE__ */ R.jsx("span", { className: "erd-help", children: "Drag from a node handle to connect" })
    ] }),
    /* @__PURE__ */ R.jsxs("div", { className: "erd-body", children: [
      /* @__PURE__ */ R.jsxs("aside", { className: "erd-panel", children: [
        /* @__PURE__ */ R.jsx("strong", { children: "Entities" }),
        /* @__PURE__ */ R.jsx("div", { className: "erd-list", children: s.entities.map((D) => /* @__PURE__ */ R.jsx(
          "button",
          {
            type: "button",
            className: d === D.id ? "active" : "",
            onClick: () => {
              g(D.id), x(null);
            },
            children: D.name
          },
          D.id
        )) }),
        w && /* @__PURE__ */ R.jsxs("div", { className: "erd-details", children: [
          /* @__PURE__ */ R.jsx("h4", { children: "Edit entity" }),
          /* @__PURE__ */ R.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ R.jsx(
              "input",
              {
                maxLength: 200,
                "aria-label": "Entity name",
                value: w.name,
                onChange: (D) => E(w.id, { name: D.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ R.jsxs("label", { children: [
            "Role",
            /* @__PURE__ */ R.jsx(
              "select",
              {
                "aria-label": "Entity role",
                value: w.role,
                onChange: (D) => E(w.id, {
                  role: D.target.value
                }),
                children: (c === "star_schema" ? ["fact", "dimension"] : c === "logical_erd" ? ["table"] : ["entity"]).map((D) => /* @__PURE__ */ R.jsx("option", { children: D }, D))
              }
            )
          ] }),
          /* @__PURE__ */ R.jsxs("label", { children: [
            c === "star_schema" ? "Grain / annotation" : "Annotation",
            /* @__PURE__ */ R.jsx(
              "textarea",
              {
                maxLength: 1e3,
                "aria-label": "Entity annotation",
                value: w.annotation,
                onChange: (D) => E(w.id, { annotation: D.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ R.jsxs("div", { className: "erd-section-heading", children: [
            "Fields",
            " ",
            /* @__PURE__ */ R.jsx(
              "button",
              {
                type: "button",
                disabled: w.fields.length >= 100,
                onClick: B,
                children: "+ Field"
              }
            )
          ] }),
          w.fields.map((D) => /* @__PURE__ */ R.jsxs("div", { className: "erd-field-edit", children: [
            /* @__PURE__ */ R.jsx(
              "input",
              {
                maxLength: 200,
                "aria-label": "Field name",
                value: D.name,
                onChange: (J) => Q(D.id, { name: J.target.value })
              }
            ),
            /* @__PURE__ */ R.jsx(
              "input",
              {
                maxLength: 100,
                "aria-label": "Field data type",
                placeholder: "Type",
                value: D.data_type,
                onChange: (J) => Q(D.id, { data_type: J.target.value })
              }
            ),
            /* @__PURE__ */ R.jsxs("label", { children: [
              /* @__PURE__ */ R.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: D.pk,
                  onChange: (J) => Q(D.id, { pk: J.target.checked })
                }
              ),
              " ",
              "PK"
            ] }),
            /* @__PURE__ */ R.jsxs("label", { children: [
              /* @__PURE__ */ R.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: D.fk,
                  onChange: (J) => Q(D.id, { fk: J.target.checked })
                }
              ),
              " ",
              "FK"
            ] }),
            /* @__PURE__ */ R.jsx(
              "button",
              {
                type: "button",
                onClick: () => E(w.id, {
                  fields: w.fields.filter((J) => J.id !== D.id)
                }),
                children: "Remove field"
              }
            )
          ] }, D.id)),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "erd-danger",
              onClick: V,
              children: "Delete entity"
            }
          )
        ] }),
        /* @__PURE__ */ R.jsx("strong", { children: "Relationships" }),
        /* @__PURE__ */ R.jsx("div", { className: "erd-list", children: s.relationships.map((D) => /* @__PURE__ */ R.jsxs(
          "button",
          {
            type: "button",
            className: p === D.id ? "active" : "",
            onClick: () => {
              x(D.id), g(null);
            },
            children: [
              N.get(D.source),
              " → ",
              N.get(D.target)
            ]
          },
          D.id
        )) }),
        U && /* @__PURE__ */ R.jsxs("div", { className: "erd-details", children: [
          /* @__PURE__ */ R.jsx("h4", { children: "Edit relationship" }),
          /* @__PURE__ */ R.jsxs("label", { children: [
            "Label",
            /* @__PURE__ */ R.jsx(
              "input",
              {
                maxLength: 200,
                "aria-label": "Relationship label",
                value: U.label,
                onChange: (D) => M(U.id, { label: D.target.value })
              }
            )
          ] }),
          ["source", "target"].map((D) => /* @__PURE__ */ R.jsxs("div", { children: [
            /* @__PURE__ */ R.jsx("strong", { children: D === "source" ? s.entities.find((J) => J.id === U.source)?.name : s.entities.find((J) => J.id === U.target)?.name }),
            /* @__PURE__ */ R.jsxs("label", { children: [
              "Cardinality",
              /* @__PURE__ */ R.jsxs(
                "select",
                {
                  "aria-label": `${D} cardinality`,
                  value: U[`${D}_cardinality`],
                  onChange: (J) => M(U.id, {
                    [`${D}_cardinality`]: J.target.value
                  }),
                  children: [
                    /* @__PURE__ */ R.jsx("option", { value: "one", children: "One" }),
                    /* @__PURE__ */ R.jsx("option", { value: "many", children: "Many" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ R.jsxs("label", { children: [
              /* @__PURE__ */ R.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: U[`${D}_optional`],
                  onChange: (J) => M(U.id, {
                    [`${D}_optional`]: J.target.checked
                  })
                }
              ),
              " ",
              "Optional"
            ] })
          ] }, D)),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "erd-danger",
              onClick: () => {
                b({
                  ...y.current,
                  relationships: y.current.relationships.filter(
                    (D) => D.id !== U.id
                  )
                }), x(null);
              },
              children: "Delete relationship"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ R.jsx("div", { className: "erd-canvas", children: /* @__PURE__ */ R.jsxs(
        j3,
        {
          nodes: v,
          edges: _,
          nodeTypes: vT,
          edgeTypes: pT,
          onNodesChange: F,
          onEdgesChange: ut,
          onDelete: ({ nodes: D, edges: J }) => b(
            bv(
              y.current,
              D.map((W) => W.id),
              J.map((W) => W.id)
            )
          ),
          onConnect: A,
          onNodeClick: (D, J) => {
            g(J.id), x(null);
          },
          onEdgeClick: (D, J) => {
            x(J.id), g(null);
          },
          onNodeDragStop: (D, J, W) => {
            const C = new Map(
              W.map((Y) => [Y.id, Y.position])
            );
            C.set(J.id, J.position), b({
              ...y.current,
              entities: y.current.entities.map(
                (Y) => C.has(Y.id) ? { ...Y, position: C.get(Y.id) } : Y
              )
            });
          },
          fitView: !0,
          fitViewOptions: { padding: 0.25 },
          children: [
            /* @__PURE__ */ R.jsx(G3, {}),
            /* @__PURE__ */ R.jsx(F3, {}),
            /* @__PURE__ */ R.jsx(fT, { pannable: !0, zoomable: !0 }),
            /* @__PURE__ */ R.jsx("svg", { children: /* @__PURE__ */ R.jsxs("defs", { children: [
              /* @__PURE__ */ R.jsx(
                "marker",
                {
                  id: "erd-crowfoot",
                  markerWidth: "12",
                  markerHeight: "12",
                  refX: "11",
                  refY: "6",
                  orient: "auto",
                  children: /* @__PURE__ */ R.jsx(
                    "path",
                    {
                      d: "M1 1 L11 6 L1 11 M1 6 L11 6",
                      stroke: "#607889",
                      fill: "none"
                    }
                  )
                }
              ),
              /* @__PURE__ */ R.jsx(
                "marker",
                {
                  id: "erd-crowfoot-start",
                  markerWidth: "12",
                  markerHeight: "12",
                  refX: "1",
                  refY: "6",
                  orient: "auto-start-reverse",
                  children: /* @__PURE__ */ R.jsx(
                    "path",
                    {
                      d: "M11 1 L1 6 L11 11 M11 6 L1 6",
                      stroke: "#607889",
                      fill: "none"
                    }
                  )
                }
              ),
              /* @__PURE__ */ R.jsx(
                "marker",
                {
                  id: "erd-one",
                  markerWidth: "8",
                  markerHeight: "12",
                  refX: "7",
                  refY: "6",
                  orient: "auto",
                  children: /* @__PURE__ */ R.jsx("path", { d: "M6 1 L6 11", stroke: "#607889", fill: "none" })
                }
              ),
              /* @__PURE__ */ R.jsx(
                "marker",
                {
                  id: "erd-one-start",
                  markerWidth: "8",
                  markerHeight: "12",
                  refX: "1",
                  refY: "6",
                  orient: "auto-start-reverse",
                  children: /* @__PURE__ */ R.jsx("path", { d: "M2 1 L2 11", stroke: "#607889", fill: "none" })
                }
              )
            ] }) })
          ]
        }
      ) })
    ] })
  ] });
}
const Yc = /* @__PURE__ */ new WeakMap(), ET = ({
  data: l,
  parentElement: i,
  setStateValue: c
}) => {
  const r = i.querySelector(".erd-root");
  if (!r) throw new Error("ERD mount element missing");
  let s = Yc.get(i);
  return s || (s = eb.createRoot(r), Yc.set(i, s)), s.render(
    /* @__PURE__ */ R.jsx(
      bT,
      {
        ...l,
        onSave: (f) => c("diagram", f)
      }
    )
  ), () => {
    Yc.get(i)?.unmount(), Yc.delete(i);
  };
};
export {
  ET as default
};
