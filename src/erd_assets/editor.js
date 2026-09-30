function _v(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Ff = { exports: {} }, Eu = {};
var ny;
function $S() {
  if (ny) return Eu;
  ny = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(c, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var g in s)
        g !== "key" && (f[g] = s[g]);
    } else f = s;
    return s = f.ref, {
      $$typeof: l,
      type: c,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return Eu.Fragment = i, Eu.jsx = r, Eu.jsxs = r, Eu;
}
var ly;
function JS() {
  return ly || (ly = 1, Ff.exports = $S()), Ff.exports;
}
var C = JS(), Wf = { exports: {} }, _u = {}, Pf = { exports: {} }, td = {};
var ay;
function kS() {
  return ay || (ay = 1, (function(l) {
    function i(D, B) {
      var G = D.length;
      D.push(B);
      t: for (; 0 < G; ) {
        var $ = G - 1 >>> 1, et = D[$];
        if (0 < s(et, B))
          D[$] = B, D[G] = et, G = $;
        else break t;
      }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function c(D) {
      if (D.length === 0) return null;
      var B = D[0], G = D.pop();
      if (G !== B) {
        D[0] = G;
        t: for (var $ = 0, et = D.length, ut = et >>> 1; $ < ut; ) {
          var R = 2 * ($ + 1) - 1, nt = D[R], _ = R + 1, F = D[_];
          if (0 > s(nt, G))
            _ < et && 0 > s(F, nt) ? (D[$] = F, D[_] = G, $ = _) : (D[$] = nt, D[R] = G, $ = R);
          else if (_ < et && 0 > s(F, G))
            D[$] = F, D[_] = G, $ = _;
          else break t;
        }
      }
      return B;
    }
    function s(D, B) {
      var G = D.sortIndex - B.sortIndex;
      return G !== 0 ? G : D.id - B.id;
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
    var x = [], p = [], v = 1, m = null, y = 3, b = !1, E = !1, A = !1, T = !1, N = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
    function O(D) {
      for (var B = r(p); B !== null; ) {
        if (B.callback === null) c(p);
        else if (B.startTime <= D)
          c(p), B.sortIndex = B.expirationTime, i(x, B);
        else break;
        B = r(p);
      }
    }
    function Y(D) {
      if (A = !1, O(D), !E)
        if (r(x) !== null)
          E = !0, U || (U = !0, rt());
        else {
          var B = r(p);
          B !== null && L(Y, B.startTime - D);
        }
    }
    var U = !1, j = -1, Q = 5, I = -1;
    function ct() {
      return T ? !0 : !(l.unstable_now() - I < Q);
    }
    function k() {
      if (T = !1, U) {
        var D = l.unstable_now();
        I = D;
        var B = !0;
        try {
          t: {
            E = !1, A && (A = !1, V(j), j = -1), b = !0;
            var G = y;
            try {
              e: {
                for (O(D), m = r(x); m !== null && !(m.expirationTime > D && ct()); ) {
                  var $ = m.callback;
                  if (typeof $ == "function") {
                    m.callback = null, y = m.priorityLevel;
                    var et = $(
                      m.expirationTime <= D
                    );
                    if (D = l.unstable_now(), typeof et == "function") {
                      m.callback = et, O(D), B = !0;
                      break e;
                    }
                    m === r(x) && c(x), O(D);
                  } else c(x);
                  m = r(x);
                }
                if (m !== null) B = !0;
                else {
                  var ut = r(p);
                  ut !== null && L(
                    Y,
                    ut.startTime - D
                  ), B = !1;
                }
              }
              break t;
            } finally {
              m = null, y = G, b = !1;
            }
            B = void 0;
          }
        } finally {
          B ? rt() : U = !1;
        }
      }
    }
    var rt;
    if (typeof w == "function")
      rt = function() {
        w(k);
      };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), z = lt.port2;
      lt.port1.onmessage = k, rt = function() {
        z.postMessage(null);
      };
    } else
      rt = function() {
        N(k, 0);
      };
    function L(D, B) {
      j = N(function() {
        D(l.unstable_now());
      }, B);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, l.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Q = 0 < D ? Math.floor(1e3 / D) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, l.unstable_next = function(D) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = y;
      }
      var G = y;
      y = B;
      try {
        return D();
      } finally {
        y = G;
      }
    }, l.unstable_requestPaint = function() {
      T = !0;
    }, l.unstable_runWithPriority = function(D, B) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var G = y;
      y = D;
      try {
        return B();
      } finally {
        y = G;
      }
    }, l.unstable_scheduleCallback = function(D, B, G) {
      var $ = l.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? $ + G : $) : G = $, D) {
        case 1:
          var et = -1;
          break;
        case 2:
          et = 250;
          break;
        case 5:
          et = 1073741823;
          break;
        case 4:
          et = 1e4;
          break;
        default:
          et = 5e3;
      }
      return et = G + et, D = {
        id: v++,
        callback: B,
        priorityLevel: D,
        startTime: G,
        expirationTime: et,
        sortIndex: -1
      }, G > $ ? (D.sortIndex = G, i(p, D), r(x) === null && D === r(p) && (A ? (V(j), j = -1) : A = !0, L(Y, G - $))) : (D.sortIndex = et, i(x, D), E || b || (E = !0, U || (U = !0, rt()))), D;
    }, l.unstable_shouldYield = ct, l.unstable_wrapCallback = function(D) {
      var B = y;
      return function() {
        var G = y;
        y = B;
        try {
          return D.apply(this, arguments);
        } finally {
          y = G;
        }
      };
    };
  })(td)), td;
}
var iy;
function IS() {
  return iy || (iy = 1, Pf.exports = kS()), Pf.exports;
}
var ed = { exports: {} }, Et = {};
var uy;
function FS() {
  if (uy) return Et;
  uy = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), g = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.activity"), y = /* @__PURE__ */ Symbol.for("react.view_transition"), b = Symbol.iterator;
  function E(_) {
    return _ === null || typeof _ != "object" ? null : (_ = b && _[b] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var A = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, T = Object.assign, N = {};
  function V(_, F, st) {
    this.props = _, this.context = F, this.refs = N, this.updater = st || A;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(_, F) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, _, F, "setState");
  }, V.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function w() {
  }
  w.prototype = V.prototype;
  function O(_, F, st) {
    this.props = _, this.context = F, this.refs = N, this.updater = st || A;
  }
  var Y = O.prototype = new w();
  Y.constructor = O, T(Y, V.prototype), Y.isPureReactComponent = !0;
  var U = Array.isArray;
  function j() {
  }
  var Q = { H: null, A: null, T: null, S: null }, I = Object.prototype.hasOwnProperty;
  function ct(_, F, st) {
    var ot = st.ref;
    return {
      $$typeof: l,
      type: _,
      key: F,
      ref: ot !== void 0 ? ot : null,
      props: st
    };
  }
  function k(_, F) {
    return ct(_.type, F, _.props);
  }
  function rt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === l;
  }
  function lt(_) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(st) {
      return F[st];
    });
  }
  var z = /\/+/g;
  function L(_, F) {
    return typeof _ == "object" && _ !== null && _.key != null ? lt("" + _.key) : F.toString(36);
  }
  function D(_) {
    switch (_.status) {
      case "fulfilled":
        return _.value;
      case "rejected":
        throw _.reason;
      default:
        switch (typeof _.status == "string" ? _.then(j, j) : (_.status = "pending", _.then(
          function(F) {
            _.status === "pending" && (_.status = "fulfilled", _.value = F);
          },
          function(F) {
            _.status === "pending" && (_.status = "rejected", _.reason = F);
          }
        )), _.status) {
          case "fulfilled":
            return _.value;
          case "rejected":
            throw _.reason;
        }
    }
    throw _;
  }
  function B(_, F, st, ot, P) {
    var ht = typeof _;
    (ht === "undefined" || ht === "boolean") && (_ = null);
    var mt = !1;
    if (_ === null) mt = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          mt = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case l:
            case i:
              mt = !0;
              break;
            case v:
              return mt = _._init, B(
                mt(_._payload),
                F,
                st,
                ot,
                P
              );
          }
      }
    if (mt)
      return P = P(_), mt = ot === "" ? "." + L(_, 0) : ot, U(P) ? (st = "", mt != null && (st = mt.replace(z, "$&/") + "/"), B(P, F, st, "", function(xt) {
        return xt;
      })) : P != null && (rt(P) && (P = k(
        P,
        st + (P.key == null || _ && _.key === P.key ? "" : ("" + P.key).replace(
          z,
          "$&/"
        ) + "/") + mt
      )), F.push(P)), 1;
    mt = 0;
    var ft = ot === "" ? "." : ot + ":";
    if (U(_))
      for (var dt = 0; dt < _.length; dt++)
        ot = _[dt], ht = ft + L(ot, dt), mt += B(
          ot,
          F,
          st,
          ht,
          P
        );
    else if (dt = E(_), typeof dt == "function")
      for (_ = dt.call(_), dt = 0; !(ot = _.next()).done; )
        ot = ot.value, ht = ft + L(ot, dt++), mt += B(
          ot,
          F,
          st,
          ht,
          P
        );
    else if (ht === "object") {
      if (typeof _.then == "function")
        return B(
          D(_),
          F,
          st,
          ot,
          P
        );
      throw F = String(_), Error(
        "Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return mt;
  }
  function G(_, F, st) {
    if (_ == null) return _;
    var ot = [], P = 0;
    return B(_, ot, "", "", function(ht) {
      return F.call(st, ht, P++);
    }), ot;
  }
  function $(_) {
    if (_._status === -1) {
      var F = _._result, st = F();
      st.then(
        function(ot) {
          (_._status === 0 || _._status === -1) && (_._status = 1, _._result = ot, st.status === void 0 && (st.status = "fulfilled", st.value = ot));
        },
        function(ot) {
          (_._status === 0 || _._status === -1) && (_._status = 2, _._result = ot, st.status === void 0 && (st.status = "rejected", st.reason = ot));
        }
      ), _._status === -1 && (_._status = 0, _._result = st);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var et = typeof reportError == "function" ? reportError : function(_) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var F = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof _ == "object" && _ !== null && typeof _.message == "string" ? String(_.message) : String(_),
        error: _
      });
      if (!window.dispatchEvent(F)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", _);
      return;
    }
    console.error(_);
  };
  function ut(_) {
    var F = Q.T, st = {};
    st.types = F !== null ? F.types : null, Q.T = st;
    try {
      var ot = _(), P = Q.S;
      P !== null && P(st, ot), typeof ot == "object" && ot !== null && typeof ot.then == "function" && ot.then(j, et);
    } catch (ht) {
      et(ht);
    } finally {
      F !== null && st.types !== null && (F.types = st.types), Q.T = F;
    }
  }
  function R(_) {
    var F = Q.T;
    if (F !== null) {
      var st = F.types;
      st === null ? F.types = [_] : st.indexOf(_) === -1 && st.push(_);
    } else ut(R.bind(null, _));
  }
  var nt = {
    map: G,
    forEach: function(_, F, st) {
      G(
        _,
        function() {
          F.apply(this, arguments);
        },
        st
      );
    },
    count: function(_) {
      var F = 0;
      return G(_, function() {
        F++;
      }), F;
    },
    toArray: function(_) {
      return G(_, function(F) {
        return F;
      }) || [];
    },
    only: function(_) {
      if (!rt(_))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return _;
    }
  };
  return Et.Activity = m, Et.Children = nt, Et.Component = V, Et.Fragment = r, Et.Profiler = s, Et.PureComponent = O, Et.StrictMode = c, Et.Suspense = x, Et.ViewTransition = y, Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, Et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(_) {
      return Q.H.useMemoCache(_);
    }
  }, Et.addTransitionType = R, Et.cache = function(_) {
    return function() {
      return _.apply(null, arguments);
    };
  }, Et.cacheSignal = function() {
    return null;
  }, Et.cloneElement = function(_, F, st) {
    if (_ == null)
      throw Error(
        "The argument must be a React element, but you passed " + _ + "."
      );
    var ot = T({}, _.props), P = _.key;
    if (F != null)
      for (ht in F.key !== void 0 && (P = "" + F.key), F)
        !I.call(F, ht) || ht === "key" || ht === "__self" || ht === "__source" || ht === "ref" && F.ref === void 0 || (ot[ht] = F[ht]);
    var ht = arguments.length - 2;
    if (ht === 1) ot.children = st;
    else if (1 < ht) {
      for (var mt = Array(ht), ft = 0; ft < ht; ft++)
        mt[ft] = arguments[ft + 2];
      ot.children = mt;
    }
    return ct(_.type, P, ot);
  }, Et.createContext = function(_) {
    return _ = {
      $$typeof: d,
      _currentValue: _,
      _currentValue2: _,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, _.Provider = _, _.Consumer = {
      $$typeof: f,
      _context: _
    }, _;
  }, Et.createElement = function(_, F, st) {
    var ot, P = {}, ht = null;
    if (F != null)
      for (ot in F.key !== void 0 && (ht = "" + F.key), F)
        I.call(F, ot) && ot !== "key" && ot !== "__self" && ot !== "__source" && (P[ot] = F[ot]);
    var mt = arguments.length - 2;
    if (mt === 1) P.children = st;
    else if (1 < mt) {
      for (var ft = Array(mt), dt = 0; dt < mt; dt++)
        ft[dt] = arguments[dt + 2];
      P.children = ft;
    }
    if (_ && _.defaultProps)
      for (ot in mt = _.defaultProps, mt)
        P[ot] === void 0 && (P[ot] = mt[ot]);
    return ct(_, ht, P);
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(_) {
    return { $$typeof: g, render: _ };
  }, Et.isValidElement = rt, Et.lazy = function(_) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: _ },
      _init: $
    };
  }, Et.memo = function(_, F) {
    return {
      $$typeof: p,
      type: _,
      compare: F === void 0 ? null : F
    };
  }, Et.startTransition = ut, Et.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, Et.use = function(_) {
    return Q.H.use(_);
  }, Et.useActionState = function(_, F, st) {
    return Q.H.useActionState(_, F, st);
  }, Et.useCallback = function(_, F) {
    return Q.H.useCallback(_, F);
  }, Et.useContext = function(_) {
    return Q.H.useContext(_);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(_, F) {
    return Q.H.useDeferredValue(_, F);
  }, Et.useEffect = function(_, F) {
    return Q.H.useEffect(_, F);
  }, Et.useEffectEvent = function(_) {
    return Q.H.useEffectEvent(_);
  }, Et.useId = function() {
    return Q.H.useId();
  }, Et.useImperativeHandle = function(_, F, st) {
    return Q.H.useImperativeHandle(_, F, st);
  }, Et.useInsertionEffect = function(_, F) {
    return Q.H.useInsertionEffect(_, F);
  }, Et.useLayoutEffect = function(_, F) {
    return Q.H.useLayoutEffect(_, F);
  }, Et.useMemo = function(_, F) {
    return Q.H.useMemo(_, F);
  }, Et.useOptimistic = function(_, F) {
    return Q.H.useOptimistic(_, F);
  }, Et.useReducer = function(_, F, st) {
    return Q.H.useReducer(_, F, st);
  }, Et.useRef = function(_) {
    return Q.H.useRef(_);
  }, Et.useState = function(_) {
    return Q.H.useState(_);
  }, Et.useSyncExternalStore = function(_, F, st) {
    return Q.H.useSyncExternalStore(
      _,
      F,
      st
    );
  }, Et.useTransition = function() {
    return Q.H.useTransition();
  }, Et.version = "19.3.0", Et;
}
var oy;
function Lu() {
  return oy || (oy = 1, ed.exports = FS()), ed.exports;
}
var nd = { exports: {} }, pe = {};
var ry;
function WS() {
  if (ry) return pe;
  ry = 1;
  var l = Lu();
  function i(v) {
    var m = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + v + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var c = {
    d: {
      f: r,
      r: function() {
        throw Error(i(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
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
  var x = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, m) {
    if (v === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, pe.browser = function(v) {
    return { $$typeof: f, _reason: v };
  }, pe.createPortal = function(v, m) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(i(299));
    return g(v, m, null, y);
  }, pe.flushSync = function(v) {
    var m = x.T, y = c.p;
    try {
      if (x.T = null, c.p = 2, v) return v();
    } finally {
      x.T = m, c.p = y, c.d.f();
    }
  }, pe.preconnect = function(v, m) {
    typeof v == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, c.d.C(v, m));
  }, pe.prefetchDNS = function(v) {
    typeof v == "string" && c.d.D(v);
  }, pe.preinit = function(v, m) {
    if (typeof v == "string" && m && typeof m.as == "string") {
      var y = m.as, b = p(y, m.crossOrigin), E = typeof m.integrity == "string" ? m.integrity : void 0, A = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      y === "style" ? c.d.S(
        v,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: b,
          integrity: E,
          fetchPriority: A
        }
      ) : y === "script" && c.d.X(v, {
        crossOrigin: b,
        integrity: E,
        fetchPriority: A,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, pe.preinitModule = function(v, m) {
    if (typeof v == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var y = p(
            m.as,
            m.crossOrigin
          );
          c.d.M(v, {
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && c.d.M(v);
  }, pe.preload = function(v, m) {
    if (typeof v == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var y = m.as, b = p(y, m.crossOrigin);
      c.d.L(v, y, {
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
        var y = p(m.as, m.crossOrigin);
        c.d.m(v, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else c.d.m(v);
  }, pe.requestFormReset = function(v) {
    c.d.r(v);
  }, pe.unstable_batchedUpdates = function(v, m) {
    return v(m);
  }, pe.useFormState = function(v, m, y) {
    return x.H.useFormState(v, m, y);
  }, pe.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, pe.version = "19.3.0", pe;
}
var cy;
function wv() {
  if (cy) return nd.exports;
  cy = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), nd.exports = WS(), nd.exports;
}
var sy;
function PS() {
  if (sy) return _u;
  sy = 1;
  var l = IS(), i = Lu(), r = wv();
  function c(t) {
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
  function x(t) {
    if (f(t) !== t)
      throw Error(c(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (e = f(t), e === null) throw Error(c(188));
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
          if (o === n) return x(u), t;
          if (o === a) return x(u), e;
          o = o.sibling;
        }
        throw Error(c(188));
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
          if (!h) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
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
    return n === null || A(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function A(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && A(
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
  function T(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(c(559));
    }
  }
  var N = null, V = null;
  function w(t, e, n) {
    return t === n ? !0 : t === e ? (N = t, !0) : !1;
  }
  function O(t, e, n) {
    return t === n ? (V = t, !1) : t === e ? (V !== null && (N = t), !0) : !1;
  }
  function Y(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function U(t, e, n) {
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
  var j = Object.assign, Q = /* @__PURE__ */ Symbol.for("react.element"), I = /* @__PURE__ */ Symbol.for("react.transitional.element"), ct = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), rt = /* @__PURE__ */ Symbol.for("react.strict_mode"), lt = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.consumer"), L = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), B = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), et = /* @__PURE__ */ Symbol.for("react.lazy"), ut = /* @__PURE__ */ Symbol.for("react.activity"), R = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), nt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), _ = /* @__PURE__ */ Symbol.for("react.view_transition"), F = /* @__PURE__ */ Symbol.for("react.recoverable"), st = Symbol.iterator;
  function ot(t) {
    return t === null || typeof t != "object" ? null : (t = st && t[st] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var P = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ht(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === P ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case k:
        return "Fragment";
      case lt:
        return "Profiler";
      case rt:
        return "StrictMode";
      case B:
        return "Suspense";
      case G:
        return "SuspenseList";
      case ut:
        return "Activity";
      case _:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ct:
          return "Portal";
        case L:
          return t.displayName || "Context";
        case z:
          return (t._context.displayName || "Context") + ".Consumer";
        case D:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case $:
          return e = t.displayName || null, e !== null ? e : ht(t.type) || "Memo";
        case et:
          e = t._payload, t = t._init;
          try {
            return ht(t(e));
          } catch {
          }
      }
    return null;
  }
  var mt = Array.isArray, ft = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, dt = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xt = {
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
  var Pt = Ct(null), xe = Ct(null), ce = Ct(null), En = Ct(null);
  function ke(t, e) {
    switch (Ot(ce, e), Ot(xe, t), Ot(Pt, null), e.nodeType) {
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
    Ht(Pt), Ht(xe), Ht(ce);
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
              var it = function() {
                throw Error();
              };
              if (Object.defineProperty(it.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(it, []);
                } catch (gt) {
                  var q = gt;
                }
                Reflect.construct(t, [], it);
              } else {
                try {
                  it.call();
                } catch (gt) {
                  q = gt;
                }
                it = !1;
                try {
                  var J = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), it = !0, new t();
                } finally {
                  it && (J !== void 0 ? Object.defineProperty(t.prototype, "props", J) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (gt) {
                q = gt;
              }
              (it = t()) && typeof it.catch == "function" && it.catch(function() {
              });
            }
          } catch (gt) {
            if (gt && q && typeof gt.stack == "string")
              return [gt.stack, q.stack];
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
        var M = h.split(`
`), Z = S.split(`
`);
        for (u = a = 0; a < M.length && !M[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < Z.length && !Z[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === M.length || u === Z.length)
          for (a = M.length - 1, u = Z.length - 1; 1 <= a && 0 <= u && M[a] !== Z[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (M[a] !== Z[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || M[a] !== Z[u]) {
                  var W = `
` + M[a].replace(" at new ", " at ");
                  return t.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", t.displayName)), W;
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
  function hc(t, e) {
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
  function Ju(t) {
    try {
      var e = "", n = null;
      do
        e += hc(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ni = Object.prototype.hasOwnProperty, Ti = l.unstable_scheduleCallback, Ci = l.unstable_cancelCallback, gc = l.unstable_shouldYield, mc = l.unstable_requestPaint, _e = l.unstable_now, yc = l.unstable_getCurrentPriorityLevel, ku = l.unstable_ImmediatePriority, Iu = l.unstable_UserBlockingPriority, ba = l.unstable_NormalPriority, vc = l.unstable_LowPriority, Fu = l.unstable_IdlePriority, pc = l.log, xc = l.unstable_setDisableYieldValue, ql = null, we = null;
  function wn(t) {
    if (typeof pc == "function" && xc(t), we && typeof we.setStrictMode == "function")
      try {
        we.setStrictMode(ql, t);
      } catch {
      }
  }
  var Ne = Math.clz32 ? Math.clz32 : Ec, Sc = Math.log, bc = Math.LN2;
  function Ec(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Sc(t) / bc | 0) | 0;
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
  function Wu(t, e) {
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
  function _c(t, e, n, a, u, o) {
    var h = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var S = t.entanglements, M = t.expirationTimes, Z = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var W = 31 - Ne(n), it = 1 << W;
      S[W] = 0, M[W] = -1;
      var q = Z[W];
      if (q !== null)
        for (Z[W] = null, W = 0; W < q.length; W++) {
          var J = q[W];
          J !== null && (J.lane &= -536870913);
        }
      n &= ~it;
    }
    a !== 0 && Pu(t, a, 0), o !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(h & ~e));
  }
  function Pu(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Ne(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function to(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - Ne(n), u = 1 << a;
      u & e | t[a] & e && (t[a] |= e), n &= ~u;
    }
  }
  function eo(t, e) {
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
  function no() {
    var t = dt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : km(t.type));
  }
  function lo(t, e) {
    var n = dt.p;
    try {
      return dt.p = t, e();
    } finally {
      dt.p = n;
    }
  }
  var on = Math.random().toString(36).slice(2), oe = "__reactFiber$" + on, Se = "__reactProps$" + on, il = "__reactContainer$" + on, ao = "__reactEvents$" + on, io = "__reactListeners$" + on, wc = "__reactHandles$" + on, uo = "__reactResources$" + on, Gl = "__reactMarker$" + on, Ca = "__reactLoad$" + on;
  function za(t) {
    delete t[oe], delete t[Se], delete t[io], delete t[wc];
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
    throw Error(c(33));
  }
  function qn(t) {
    var e = t[uo];
    return e || (e = t[uo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ee(t) {
    t[Gl] = !0;
  }
  function Di(t) {
    t[Ca] = void 0;
  }
  var oo = /* @__PURE__ */ new Set(), ro = {};
  function rn(t, e) {
    ol(t, e), ol(t + "Capture", e);
  }
  function ol(t, e) {
    for (ro[t] = e, t = 0; t < e.length; t++)
      oo.add(e[t]);
  }
  var Nc = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ri = {}, Id = {};
  function d1(t) {
    return Ni.call(Id, t) ? !0 : Ni.call(Ri, t) ? !1 : Nc.test(t) ? Id[t] = !0 : (Ri[t] = !0, !1);
  }
  var Bt = !1;
  function Fd() {
    var t = Bt;
    return Bt = !1, t;
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
  function so(t, e, n) {
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
  function Tc(t) {
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
  function Cc(t, e, n, a, u, o, h, S) {
    t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ve(e)) : t.value !== "" + Ve(e) && (t.value = "" + Ve(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), e != null ? h === "number" && t.value == e ? zc(t, Ve(t.value)) : zc(t, Ve(e)) : n != null ? zc(t, Ve(n)) : a != null && t.removeAttribute("value"), u == null && o != null && (t.defaultChecked = !!o), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? t.name = "" + Ve(S) : t.removeAttribute("name");
  }
  function th(t, e, n, a, u, o, h, S) {
    if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o), e != null || n != null) {
      if (!(o !== "submit" && o !== "reset" || e != null)) {
        Tc(t);
        return;
      }
      n = n != null ? "" + Ve(n) : "", e = e != null ? "" + Ve(e) : n, S || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = S ? t.checked : !!a, t.defaultChecked = !!a, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), Tc(t);
  }
  function zc(t, e) {
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
        if (n != null) throw Error(c(92));
        if (mt(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Ve(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Tc(t);
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
      throw Error(c(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Bt = !0);
      for (var u in e)
        a = e[u], e.hasOwnProperty(u) && n[u] !== a && (lh(t, u, a), Bt = !0);
    } else
      for (var o in e)
        e.hasOwnProperty(o) && lh(t, o, e[o]);
  }
  function Mc(t) {
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
  function fo(t) {
    return v1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Nn() {
  }
  var Ac = null;
  function Oc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Oa = null, Da = null;
  function ih(t) {
    var e = ul(t);
    if (e && (t = e.stateNode)) {
      var n = t[Se] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Cc(
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
                if (!u) throw Error(c(90));
                Cc(
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
  var Dc = !1;
  function uh(t, e, n) {
    if (Dc) return t(e, n);
    Dc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Dc = !1, (Oa !== null || Da !== null) && (dr(), Oa && (e = Oa, t = Da, Da = Oa = null, ih(e), t)))
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
        c(231, e, typeof n)
      );
    return n;
  }
  var Zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Rc = !1;
  if (Zn)
    try {
      var Ui = {};
      Object.defineProperty(Ui, "passive", {
        get: function() {
          Rc = !0;
        }
      }), window.addEventListener("test", Ui, Ui), window.removeEventListener("test", Ui, Ui);
    } catch {
      Rc = !1;
    }
  var rl = null, Hc = null, ho = null;
  function oh() {
    if (ho) return ho;
    var t, e = Hc, n = e.length, a, u = "value" in rl ? rl.value : rl.textContent, o = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var h = n - t;
    for (a = 1; a <= h && e[n - a] === u[o - a]; a++) ;
    return ho = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function go(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function mo() {
    return !0;
  }
  function rh() {
    return !1;
  }
  function Te(t) {
    function e(n, a, u, o, h) {
      this._reactName = n, this._targetInst = u, this.type = a, this.nativeEvent = o, this.target = h, this.currentTarget = null;
      for (var S in t)
        t.hasOwnProperty(S) && (n = t[S], this[S] = n ? n(o) : o[S]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? mo : rh, this.isPropagationStopped = rh, this;
    }
    return j(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = mo);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = mo);
      },
      persist: function() {
      },
      isPersistent: mo
    }), e;
  }
  var cl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yo = Te(cl), ji = j({}, cl, { view: 0, detail: 0 }), p1 = Te(ji), Uc, jc, Bi, vo = j({}, ji, {
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
    getModifierState: Yc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Bi && (Bi && t.type === "mousemove" ? (Uc = t.screenX - Bi.screenX, jc = t.screenY - Bi.screenY) : jc = Uc = 0, Bi = t), Uc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : jc;
    }
  }), ch = Te(vo), x1 = j({}, vo, { dataTransfer: 0 }), S1 = Te(x1), b1 = j({}, ji, { relatedTarget: 0 }), Bc = Te(b1), E1 = j({}, cl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _1 = Te(E1), w1 = j({}, cl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), N1 = Te(w1), T1 = j({}, cl, { data: 0 }), sh = Te(T1), C1 = {
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
  function Yc() {
    return A1;
  }
  var O1 = j({}, ji, {
    key: function(t) {
      if (t.key) {
        var e = C1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = go(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? z1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yc,
    charCode: function(t) {
      return t.type === "keypress" ? go(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? go(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), D1 = Te(O1), R1 = j({}, vo, {
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
  }), fh = Te(R1), H1 = j({}, cl, { submitter: 0 }), U1 = Te(H1), j1 = j({}, ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yc
  }), B1 = Te(j1), Y1 = j({}, cl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V1 = Te(Y1), L1 = j({}, vo, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), q1 = Te(L1), X1 = j({}, cl, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Z1 = Te(X1), G1 = [9, 13, 27, 32], Vc = Zn && "CompositionEvent" in window, Yi = null;
  Zn && "documentMode" in document && (Yi = document.documentMode);
  var Q1 = Zn && "TextEvent" in window && !Yi, dh = Zn && (!Vc || Yi && 8 < Yi && 11 >= Yi), hh = " ", gh = !1;
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
      return t === "compositionend" || !Vc && mh(t, e) ? (t = oh(), ho = Hc = rl = null, Ra = !1, t) : null;
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
    Oa ? Da ? Da.push(a) : Da = [a] : Oa = a, e = pr(e, "onChange"), 0 < e.length && (n = new yo(
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
  function po(t) {
    var e = Ql(t);
    if (Pd(e)) return t;
  }
  function xh(t, e) {
    if (t === "change") return e;
  }
  var Sh = !1;
  if (Zn) {
    var Lc;
    if (Zn) {
      var qc = "oninput" in document;
      if (!qc) {
        var bh = document.createElement("div");
        bh.setAttribute("oninput", "return;"), qc = typeof bh.oninput == "function";
      }
      Lc = qc;
    } else Lc = !1;
    Sh = Lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Eh() {
    Vi && (Vi.detachEvent("onpropertychange", _h), Li = Vi = null);
  }
  function _h(t) {
    if (t.propertyName === "value" && po(Li)) {
      var e = [];
      ph(
        e,
        Li,
        t,
        Oc(t)
      ), uh(k1, e);
    }
  }
  function I1(t, e, n) {
    t === "focusin" ? (Eh(), Vi = e, Li = n, Vi.attachEvent("onpropertychange", _h)) : t === "focusout" && Eh();
  }
  function F1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return po(Li);
  }
  function W1(t, e) {
    if (t === "click") return po(e);
  }
  function P1(t, e) {
    if (t === "input" || t === "change")
      return po(e);
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
  function Xc(t) {
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
    for (var e = Xc(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Xc(t.document);
    }
    return e;
  }
  function Zc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ex = Zn && "documentMode" in document && 11 >= document.documentMode, Ha = null, Gc = null, Xi = null, Qc = !1;
  function zh(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qc || Ha == null || Ha !== Xc(a) || (a = Ha, "selectionStart" in a && Zc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Xi && qi(Xi, a) || (Xi = a, a = pr(Gc, "onSelect"), 0 < a.length && (e = new yo(
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
  }, Kc = {}, Mh = {};
  Zn && (Mh = document.createElement("div").style, "AnimationEvent" in window || (delete Ua.animationend.animation, delete Ua.animationiteration.animation, delete Ua.animationstart.animation), "TransitionEvent" in window || delete Ua.transitionend.transition);
  function $l(t) {
    if (Kc[t]) return Kc[t];
    if (!Ua[t]) return t;
    var e = Ua[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Mh)
        return Kc[t] = e[n];
    return t;
  }
  var Ah = $l("animationend"), Oh = $l("animationiteration"), Dh = $l("animationstart"), nx = $l("transitionrun"), lx = $l("transitionstart"), ax = $l("transitioncancel"), Rh = $l("transitionend"), Hh = /* @__PURE__ */ new Map(), $c = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $c.push("scrollEnd");
  function cn(t, e) {
    Hh.set(t, e), rn(e, [t]);
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
  var xo = typeof reportError == "function" ? reportError : function(t) {
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
  }, We = [], ja = 0, Jc = 0;
  function So() {
    for (var t = ja, e = Jc = ja = 0; e < t; ) {
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
      o !== 0 && jh(n, u, o);
    }
  }
  function bo(t, e, n, a) {
    We[ja++] = t, We[ja++] = e, We[ja++] = n, We[ja++] = a, Jc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function kc(t, e, n, a) {
    return bo(t, e, n, a), Eo(t);
  }
  function Jl(t, e) {
    return bo(t, null, null, e), Eo(t);
  }
  function jh(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var u = !1, o = t.return; o !== null; )
      o.childLanes |= n, a = o.alternate, a !== null && (a.childLanes |= n), o.tag === 22 && (t = o.stateNode, t === null || t._visibility & 1 || (u = !0)), t = o, o = o.return;
    return t.tag === 3 ? (o = t.stateNode, u && e !== null && (u = 31 - Ne(n), t = o.hiddenUpdates, a = t[u], a === null ? t[u] = [e] : a.push(e), e.lane = n | 536870912), o) : null;
  }
  function Eo(t) {
    if (50 < su)
      throw su = 0, fr = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ba = {};
  function ux(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function De(t, e, n, a) {
    return new ux(t, e, n, a);
  }
  function Ic(t) {
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
  function Bh(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function _o(t, e, n, a, u, o) {
    var h = 0;
    if (a = t, typeof a == "function") Ic(a) && (h = 1);
    else if (typeof a == "string")
      h = HS(
        t,
        n,
        Pt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case ut:
          return t = De(31, n, e, u), t.elementType = ut, t.lanes = o, t;
        case k:
          return kl(n.children, u, o, e);
        case rt:
          h = 8, u |= 24;
          break;
        case lt:
          return t = De(12, n, e, u | 2), t.elementType = lt, t.lanes = o, t;
        case B:
          return t = De(13, n, e, u), t.elementType = B, t.lanes = o, t;
        case G:
          return t = De(19, n, e, u), t.elementType = G, t.lanes = o, t;
        case R:
        case _:
          return t = u | 32, t = De(30, n, e, t), t.elementType = _, t.lanes = o, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case L:
                h = 10;
                break t;
              case z:
                h = 9;
                break t;
              case D:
                h = 11;
                break t;
              case $:
                h = 14;
                break t;
              case et:
                h = 16, a = null;
                break t;
            }
          h = 29, n = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = De(h, n, e, u), e.elementType = t, e.type = a, e.lanes = o, e;
  }
  function kl(t, e, n, a) {
    return t = De(7, t, a, e), t.lanes = n, t;
  }
  function Fc(t, e, n) {
    return t = De(6, t, null, e), t.lanes = n, t;
  }
  function Yh(t) {
    var e = De(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Wc(t, e, n) {
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
        stack: Ju(e)
      }, Vh.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Ju(e)
    };
  }
  var Ya = [], Va = 0, wo = null, Zi = 0, tn = [], en = 0, sl = null, Tn = 1, Cn = "";
  function $n(t, e) {
    Ya[Va++] = Zi, Ya[Va++] = wo, wo = t, Zi = e;
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
  function No(t) {
    t.return !== null && ($n(t, 1), Lh(t, 1, 0));
  }
  function Pc(t) {
    for (; t === wo; )
      wo = Ya[--Va], Ya[Va] = null, Zi = Ya[--Va], Ya[Va] = null;
    for (; t === sl; )
      sl = tn[--en], tn[en] = null, Cn = tn[--en], tn[en] = null, Tn = tn[--en], tn[en] = null;
  }
  function qh(t, e) {
    tn[en++] = Tn, tn[en++] = Cn, tn[en++] = sl, Tn = e.id, Cn = e.overflow, sl = t;
  }
  var se = null, Qt = null, zt = !1, fl = null, nn = !1, ts = Error(c(519));
  function dl(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Gi(Pe(e, t)), ts;
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
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || cm(e.textContent, n) ? (a.popover != null && (At("beforetoggle", e), At("toggle", e)), a.onScroll != null && At("scroll", e), a.onScrollEnd != null && At("scrollend", e), a.onClick != null && (e.onclick = Nn), e = !0) : e = !1, e || dl(t, !0);
  }
  function To(t) {
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
    if (!zt) return To(t), zt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Of(t.type, t.memoizedProps)), n = !n), n && Qt && dl(t), To(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Qt = zm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Qt = zm(t);
    } else
      e === 27 ? (e = Qt, zl(t.type) ? (t = Lf, Lf = null, Qt = t) : Qt = e) : Qt = se ? an(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Il() {
    Qt = se = null, zt = !1;
  }
  function es() {
    var t = fl;
    return t !== null && (Ue === null ? Ue = t : Ue.push.apply(
      Ue,
      t
    ), fl = null), t;
  }
  function Gi(t) {
    fl === null ? fl = [t] : fl.push(t);
  }
  var ns = Ct(null), Fl = null, Jn = null;
  function hl(t, e, n) {
    Ot(ns, e._currentValue), e._currentValue = n;
  }
  function kn(t) {
    t._currentValue = ns.current, Ht(ns);
  }
  function Co(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function ls(t, e, n, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var o = u.dependencies;
      if (o !== null) {
        var h = u.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var S = o;
          o = u;
          for (var M = 0; M < e.length; M++)
            if (S.context === e[M]) {
              o.lanes |= n, S = o.alternate, S !== null && (S.lanes |= n), Co(
                o.return,
                n,
                t
              ), a || (h = null);
              break t;
            }
          o = S.next;
        }
      } else if (u.tag === 18) {
        if (h = u.return, h === null) throw Error(c(341));
        h.lanes |= n, o = h.alternate, o !== null && (o.lanes |= n), Co(h, n, t), h = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), Co(
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
        if (h === null) throw Error(c(387));
        if (h = h.memoizedProps, h !== null) {
          var S = u.type;
          Le(u.pendingProps.value, h.value) || (t !== null ? t.push(S) : t = [S]);
        }
      } else if (u === En.current) {
        if (h = u.alternate, h === null) throw Error(c(387));
        h.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(fi) : t = [fi]);
      }
      u = u.return;
    }
    return t !== null && ls(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function zo(t) {
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
  function Mo(t, e) {
    return Fl === null && Pl(t), Zh(t, e);
  }
  function Zh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Jn === null) {
      if (t === null) throw Error(c(308));
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
  }, rx = l.unstable_scheduleCallback, cx = l.unstable_NormalPriority, ne = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function as() {
    return {
      controller: new ox(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Qi(t) {
    t.refCount--, t.refCount === 0 && rx(cx, function() {
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
  var $i = null, is = 0, ta = 0, qa = null;
  function fx(t, e) {
    if ($i === null) {
      var n = $i = [];
      is = 0, ta = Ef(), qa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return is++, e.then(Qh, Qh), e;
  }
  function Qh() {
    if (--is === 0 && (Ki = null, $i !== null)) {
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
  var Kh = ft.S;
  ft.S = function(t, e) {
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
  function us() {
    var t = ea.current;
    return t !== null ? t : Gt.pooledCache;
  }
  function Ao(t, e) {
    e === null ? Ot(ea, ea.current) : Ot(ea, e.pool);
  }
  function $h() {
    var t = us();
    return t === null ? null : { parent: ne._currentValue, pool: t };
  }
  var Xa = Error(c(460)), os = Error(c(474)), Oo = Error(c(542)), Do = { then: function() {
  } };
  function Jh(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function kh(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Nn, Nn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Fh(t), t === void 0 && !("reason" in e) ? Error(c(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Nn, Nn);
        else {
          if (t = Gt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
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
    if (la === null) throw Error(c(459));
    var t = la;
    return la = null, t;
  }
  function Fh(t) {
    if (t === Xa || t === Oo)
      throw Error(c(483));
  }
  var Za = null, Ji = 0;
  function Ro(t) {
    var e = Ji;
    return Ji += 1, Za === null && (Za = []), kh(Za, t, e);
  }
  function gl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ho(t, e) {
    throw e.$$typeof === Q ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Wh(t) {
    function e(X, H) {
      if (t) {
        var K = X.deletions;
        K === null ? (X.deletions = [H], X.flags |= 16) : K.push(H);
      }
    }
    function n(X, H) {
      if (!t) return null;
      for (; H !== null; )
        e(X, H), H = H.sibling;
      return null;
    }
    function a(X) {
      for (var H = /* @__PURE__ */ new Map(); X !== null; )
        X.key === null ? H.set(X.index, X) : H.set(X.key, X), X = X.sibling;
      return H;
    }
    function u(X, H) {
      return X = Kn(X, H), X.index = 0, X.sibling = null, X;
    }
    function o(X, H, K) {
      return X.index = K, t ? (K = X.alternate, K !== null ? (K = K.index, K < H ? (X.flags |= 2, H) : K) : (X.flags |= 134217730, H)) : (X.flags |= 1048576, H);
    }
    function h(X) {
      return t && X.alternate === null && (X.flags |= 134217730), X;
    }
    function S(X, H, K, at) {
      return H === null || H.tag !== 6 ? (H = Fc(K, X.mode, at), H.return = X, H) : (H = u(H, K), H.return = X, H);
    }
    function M(X, H, K, at) {
      var yt = K.type;
      return yt === k ? (X = W(
        X,
        H,
        K.props.children,
        at,
        K.key
      ), gl(X, K), X) : H !== null && (H.elementType === yt || typeof yt == "object" && yt !== null && yt.$$typeof === et && na(yt) === H.type) ? (H = u(H, K.props), gl(H, K), H.return = X, H) : (H = _o(
        K.type,
        K.key,
        K.props,
        null,
        X.mode,
        at
      ), gl(H, K), H.return = X, H);
    }
    function Z(X, H, K, at) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== K.containerInfo || H.stateNode.implementation !== K.implementation ? (H = Wc(K, X.mode, at), H.return = X, H) : (H = u(H, K.children || []), H.return = X, H);
    }
    function W(X, H, K, at, yt) {
      return H === null || H.tag !== 7 ? (H = kl(
        K,
        X.mode,
        at,
        yt
      ), H.return = X, H) : (H = u(H, K), H.return = X, H);
    }
    function it(X, H, K) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return H = Fc(
          "" + H,
          X.mode,
          K
        ), H.return = X, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case I:
            return K = _o(
              H.type,
              H.key,
              H.props,
              null,
              X.mode,
              K
            ), gl(K, H), K.return = X, K;
          case ct:
            return H = Wc(
              H,
              X.mode,
              K
            ), H.return = X, H;
          case et:
            return H = na(H), it(X, H, K);
        }
        if (mt(H) || ot(H))
          return H = kl(
            H,
            X.mode,
            K,
            null
          ), H.return = X, H;
        if (typeof H.then == "function")
          return it(X, Ro(H), K);
        if (H.$$typeof === L)
          return it(
            X,
            Mo(X, H),
            K
          );
        Ho(X, H);
      }
      return null;
    }
    function q(X, H, K, at) {
      var yt = H !== null ? H.key : null;
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return yt !== null ? null : S(X, H, "" + K, at);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case I:
            return K.key === yt ? M(X, H, K, at) : null;
          case ct:
            return K.key === yt ? Z(X, H, K, at) : null;
          case et:
            return K = na(K), q(X, H, K, at);
        }
        if (mt(K) || ot(K))
          return yt !== null ? null : W(X, H, K, at, null);
        if (typeof K.then == "function")
          return q(
            X,
            H,
            Ro(K),
            at
          );
        if (K.$$typeof === L)
          return q(
            X,
            H,
            Mo(X, K),
            at
          );
        Ho(X, K);
      }
      return null;
    }
    function J(X, H, K, at, yt) {
      if (typeof at == "string" && at !== "" || typeof at == "number" || typeof at == "bigint")
        return X = X.get(K) || null, S(H, X, "" + at, yt);
      if (typeof at == "object" && at !== null) {
        switch (at.$$typeof) {
          case I:
            return X = X.get(
              at.key === null ? K : at.key
            ) || null, M(H, X, at, yt);
          case ct:
            return X = X.get(
              at.key === null ? K : at.key
            ) || null, Z(H, X, at, yt);
          case et:
            return at = na(at), J(
              X,
              H,
              K,
              at,
              yt
            );
        }
        if (mt(at) || ot(at))
          return X = X.get(K) || null, W(H, X, at, yt, null);
        if (typeof at.then == "function")
          return J(
            X,
            H,
            K,
            Ro(at),
            yt
          );
        if (at.$$typeof === L)
          return J(
            X,
            H,
            K,
            Mo(H, at),
            yt
          );
        Ho(H, at);
      }
      return null;
    }
    function gt(X, H, K, at) {
      for (var yt = null, Rt = null, St = H, bt = H = 0, ie = null; St !== null && bt < K.length; bt++) {
        St.index > bt ? (ie = St, St = null) : ie = St.sibling;
        var Ut = q(
          X,
          St,
          K[bt],
          at
        );
        if (Ut === null) {
          St === null && (St = ie);
          break;
        }
        t && St && Ut.alternate === null && e(X, St), H = o(Ut, H, bt), Rt === null ? yt = Ut : Rt.sibling = Ut, Rt = Ut, St = ie;
      }
      if (bt === K.length)
        return n(X, St), zt && $n(X, bt), yt;
      if (St === null) {
        for (; bt < K.length; bt++)
          St = it(X, K[bt], at), St !== null && (H = o(
            St,
            H,
            bt
          ), Rt === null ? yt = St : Rt.sibling = St, Rt = St);
        return zt && $n(X, bt), yt;
      }
      for (St = a(St); bt < K.length; bt++)
        ie = J(
          St,
          X,
          bt,
          K[bt],
          at
        ), ie !== null && (t && (Ut = ie.alternate, Ut !== null && St.delete(Ut.key === null ? bt : Ut.key)), H = o(
          ie,
          H,
          bt
        ), Rt === null ? yt = ie : Rt.sibling = ie, Rt = ie);
      return t && St.forEach(function(Rl) {
        return e(X, Rl);
      }), zt && $n(X, bt), yt;
    }
    function vt(X, H, K, at) {
      if (K == null) throw Error(c(151));
      for (var yt = null, Rt = null, St = H, bt = H = 0, ie = null, Ut = K.next(); St !== null && !Ut.done; bt++, Ut = K.next()) {
        St.index > bt ? (ie = St, St = null) : ie = St.sibling;
        var Rl = q(X, St, Ut.value, at);
        if (Rl === null) {
          St === null && (St = ie);
          break;
        }
        t && St && Rl.alternate === null && e(X, St), H = o(Rl, H, bt), Rt === null ? yt = Rl : Rt.sibling = Rl, Rt = Rl, St = ie;
      }
      if (Ut.done)
        return n(X, St), zt && $n(X, bt), yt;
      if (St === null) {
        for (; !Ut.done; bt++, Ut = K.next())
          Ut = it(X, Ut.value, at), Ut !== null && (H = o(Ut, H, bt), Rt === null ? yt = Ut : Rt.sibling = Ut, Rt = Ut);
        return zt && $n(X, bt), yt;
      }
      for (St = a(St); !Ut.done; bt++, Ut = K.next())
        Ut = J(St, X, bt, Ut.value, at), Ut !== null && (t && (ie = Ut.alternate, ie !== null && St.delete(
          ie.key === null ? bt : ie.key
        )), H = o(Ut, H, bt), Rt === null ? yt = Ut : Rt.sibling = Ut, Rt = Ut);
      return t && St.forEach(function(KS) {
        return e(X, KS);
      }), zt && $n(X, bt), yt;
    }
    function Tt(X, H, K, at) {
      if (typeof K == "object" && K !== null && K.type === k && K.key === null && K.props.ref === void 0 && (K = K.props.children), typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case I:
            t: {
              for (var yt = K.key; H !== null; ) {
                if (H.key === yt) {
                  if (yt = K.type, yt === k) {
                    if (H.tag === 7) {
                      n(
                        X,
                        H.sibling
                      ), at = u(
                        H,
                        K.props.children
                      ), gl(at, K), at.return = X, X = at;
                      break t;
                    }
                  } else if (H.elementType === yt || typeof yt == "object" && yt !== null && yt.$$typeof === et && na(yt) === H.type) {
                    n(
                      X,
                      H.sibling
                    ), at = u(H, K.props), gl(at, K), at.return = X, X = at;
                    break t;
                  }
                  n(X, H);
                  break;
                } else e(X, H);
                H = H.sibling;
              }
              K.type === k ? (at = kl(
                K.props.children,
                X.mode,
                at,
                K.key
              ), gl(at, K), at.return = X, X = at) : (at = _o(
                K.type,
                K.key,
                K.props,
                null,
                X.mode,
                at
              ), gl(at, K), at.return = X, X = at);
            }
            return h(X);
          case ct:
            t: {
              for (yt = K.key; H !== null; ) {
                if (H.key === yt)
                  if (H.tag === 4 && H.stateNode.containerInfo === K.containerInfo && H.stateNode.implementation === K.implementation) {
                    n(
                      X,
                      H.sibling
                    ), at = u(H, K.children || []), at.return = X, X = at;
                    break t;
                  } else {
                    n(X, H);
                    break;
                  }
                else e(X, H);
                H = H.sibling;
              }
              at = Wc(K, X.mode, at), at.return = X, X = at;
            }
            return h(X);
          case et:
            return K = na(K), Tt(
              X,
              H,
              K,
              at
            );
        }
        if (mt(K))
          return gt(
            X,
            H,
            K,
            at
          );
        if (ot(K)) {
          if (yt = ot(K), typeof yt != "function") throw Error(c(150));
          return K = yt.call(K), vt(
            X,
            H,
            K,
            at
          );
        }
        if (typeof K.then == "function")
          return Tt(
            X,
            H,
            Ro(K),
            at
          );
        if (K.$$typeof === L)
          return Tt(
            X,
            H,
            Mo(X, K),
            at
          );
        Ho(X, K);
      }
      return typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint" ? (K = "" + K, H !== null && H.tag === 6 ? (n(X, H.sibling), at = u(H, K), at.return = X, X = at) : (n(X, H), at = Fc(K, X.mode, at), at.return = X, X = at), h(X)) : n(X, H);
    }
    return function(X, H, K, at) {
      try {
        Ji = 0;
        var yt = Tt(
          X,
          H,
          K,
          at
        );
        return Za = null, yt;
      } catch (St) {
        if (St === Xa || St === Oo) throw St;
        var Rt = De(29, St, null, X.mode);
        return Rt.lanes = at, Rt.return = X, Rt;
      }
    };
  }
  var aa = Wh(!0), Ph = Wh(!1), ml = !1;
  function rs(t) {
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
      return u === null ? e.next = e : (e.next = u.next, u.next = e), a.pending = e, e = Eo(t), jh(t, null, n), e;
    }
    return bo(t, a, e, n), Eo(t);
  }
  function ki(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, to(t, n);
    }
  }
  function ss(t, e) {
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
  var fs = !1;
  function Ii() {
    if (fs) {
      var t = qa;
      if (t !== null) throw t;
    }
  }
  function Fi(t, e, n, a) {
    fs = !1;
    var u = t.updateQueue;
    ml = !1;
    var o = u.firstBaseUpdate, h = u.lastBaseUpdate, S = u.shared.pending;
    if (S !== null) {
      u.shared.pending = null;
      var M = S, Z = M.next;
      M.next = null, h === null ? o = Z : h.next = Z, h = M;
      var W = t.alternate;
      W !== null && (W = W.updateQueue, S = W.lastBaseUpdate, S !== h && (S === null ? W.firstBaseUpdate = Z : S.next = Z, W.lastBaseUpdate = M));
    }
    if (o !== null) {
      var it = u.baseState;
      h = 0, W = Z = M = null, S = o;
      do {
        var q = S.lane & -536870913, J = q !== S.lane;
        if (J ? (Dt & q) === q : (a & q) === q) {
          q !== 0 && q === ta && (fs = !0), W !== null && (W = W.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          t: {
            var gt = t, vt = S;
            q = e;
            var Tt = n;
            switch (vt.tag) {
              case 1:
                if (gt = vt.payload, typeof gt == "function") {
                  it = gt.call(Tt, it, q);
                  break t;
                }
                it = gt;
                break t;
              case 3:
                gt.flags = gt.flags & -65537 | 128;
              case 0:
                if (gt = vt.payload, q = typeof gt == "function" ? gt.call(Tt, it, q) : gt, q == null) break t;
                it = j({}, it, q);
                break t;
              case 2:
                ml = !0;
            }
          }
          q = S.callback, q !== null && (t.flags |= 64, J && (t.flags |= 8192), J = u.callbacks, J === null ? u.callbacks = [q] : J.push(q));
        } else
          J = {
            lane: q,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, W === null ? (Z = W = J, M = it) : W = W.next = J, h |= q;
        if (S = S.next, S === null) {
          if (S = u.shared.pending, S === null)
            break;
          J = S, S = J.next, J.next = null, u.lastBaseUpdate = J, u.shared.pending = null;
        }
      } while (!0);
      W === null && (M = it), u.baseState = M, u.firstBaseUpdate = Z, u.lastBaseUpdate = W, o === null && (u.shared.lanes = 0), wl |= h, t.lanes = h, t.memoizedState = it;
    }
  }
  function t0(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function e0(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        t0(n[t], e);
  }
  var pl = Ct(null), Uo = Ct(0);
  function n0(t, e) {
    t = tl, Ot(Uo, t), Ot(pl, e), tl = t | e.baseLanes;
  }
  function ds() {
    Ot(Uo, tl), Ot(pl, pl.current);
  }
  function hs() {
    tl = Uo.current, Ht(pl), Ht(Uo);
  }
  var ge = Ct(null), be = null;
  function xl(t) {
    var e = t.alternate;
    Ot(me, me.current & 1), Ot(ge, t), be === null && (e === null || pl.current !== null || e.memoizedState !== null) && (be = t);
  }
  function gs(t) {
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
  function ms(t) {
    Ht(me), Ht(ge), be === t && (be = null);
  }
  function jo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Yf(n) || Vf(n)))
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
  var In = 0, Nt = null, Zt = null, le = null, Bo = !1, Ga = !1, ia = !1, Yo = 0, Pi = 0, Qa = null, hx = 0;
  function Ft() {
    throw Error(c(321));
  }
  function ys(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Le(t[n], e[n])) return !1;
    return !0;
  }
  function vs(t, e, n, a, u, o) {
    return In = o, Nt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ft.H = t === null || t.memoizedState === null ? L0 : q0, ia = !1, o = n(a, u), ia = !1, Ga && (o = i0(
      e,
      n,
      a,
      u
    )), a0(t), o;
  }
  function a0(t) {
    ft.H = Qo;
    var e = Zt !== null && Zt.next !== null;
    if (In = 0, le = Zt = Nt = null, Bo = !1, Pi = 0, Qa = null, e) throw Error(c(300));
    t === null || ae || (t = t.dependencies, t !== null && zo(t) && (ae = !0));
  }
  function i0(t, e, n, a) {
    Nt = t;
    var u = 0;
    do {
      if (Ga && (Qa = null), Pi = 0, Ga = !1, 25 <= u) throw Error(c(301));
      if (u += 1, le = Zt = null, t.updateQueue != null) {
        var o = t.updateQueue;
        o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
      }
      ft.H = bx, o = e(n, a);
    } while (Ga);
    return o;
  }
  function gx() {
    var t = ft.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? tu(e) : e, t = t.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== t && (Nt.flags |= 1024), e;
  }
  function ps() {
    var t = Yo !== 0;
    return Yo = 0, t;
  }
  function xs(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Ss(t) {
    if (Bo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Bo = !1;
    }
    In = 0, le = Zt = Nt = null, Ga = !1, Pi = Yo = 0, Qa = null;
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
        throw Nt.alternate === null ? Error(c(467)) : Error(c(310));
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
  function Vo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tu(t) {
    var e = Pi;
    return Pi += 1, Qa === null && (Qa = []), t = kh(Qa, t, e), e = Nt, (le === null ? e.memoizedState : le.next) === null && (e = e.alternate, ft.H = e === null || e.memoizedState === null ? L0 : q0), t;
  }
  function Lo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return tu(t);
      if (t.$$typeof === F) return;
      if (t.$$typeof === L) return he(t);
    }
    throw Error(c(438, String(t)));
  }
  function bs(t) {
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
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Vo(), Nt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = nt;
    return e.index++, n;
  }
  function Fn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function qo(t) {
    var e = te();
    return Es(e, Zt, t);
  }
  function Es(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(c(311));
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
      var S = h = null, M = null, Z = e, W = !1;
      do {
        var it = Z.lane & -536870913;
        if (it !== Z.lane ? (Dt & it) === it : (In & it) === it) {
          var q = Z.revertLane;
          if (q === 0)
            M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            }), it === ta && (W = !0);
          else if ((In & q) === q) {
            Z = Z.next, q === ta && (W = !0);
            continue;
          } else
            it = {
              lane: 0,
              revertLane: Z.revertLane,
              gesture: null,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            }, M === null ? (S = M = it, h = o) : M = M.next = it, Nt.lanes |= q, wl |= q;
          it = Z.action, ia && n(o, it), o = Z.hasEagerState ? Z.eagerState : n(o, it);
        } else
          q = {
            lane: it,
            revertLane: Z.revertLane,
            gesture: Z.gesture,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          }, M === null ? (S = M = q, h = o) : M = M.next = q, Nt.lanes |= it, wl |= it;
        Z = Z.next;
      } while (Z !== null && Z !== e);
      if (M === null ? h = o : M.next = S, !Le(o, t.memoizedState) && (ae = !0, W && (n = qa, n !== null)))
        throw n;
      t.memoizedState = o, t.baseState = h, t.baseQueue = M, a.lastRenderedState = o;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function _s(t) {
    var e = te(), n = e.queue;
    if (n === null) throw Error(c(311));
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
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = e();
    var h = !Le(
      (Zt || u).memoizedState,
      n
    );
    if (h && (u.memoizedState = n, ae = !0), u = u.queue, Ts(c0.bind(null, a, u, t), [
      t
    ]), t = u.getSnapshot !== e || h || le !== null && (le.memoizedState.tag & 1) !== 0, Ka(
      t ? 9 : 8,
      { destroy: void 0 },
      r0.bind(null, a, u, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Gt === null) throw Error(c(349));
      o || (In & 127) !== 0 || o0(a, e, n);
    }
    return n;
  }
  function o0(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = Nt.updateQueue, e === null ? (e = Vo(), Nt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function r0(t, e, n, a) {
    e.value = n, e.getSnapshot = a, s0(e) && f0(t);
  }
  function c0(t, e, n) {
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
    e !== null && je(e, t, 2);
  }
  function ws(t) {
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
    return t.baseState = n, Es(
      t,
      Zt,
      typeof a == "function" ? a : Fn
    );
  }
  function mx(t, e, n, a, u) {
    if (Go(t)) throw Error(c(485));
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
      ft.T !== null ? n(!0) : o.isTransition = !1, a(o), n = e.pending, n === null ? (o.next = e.pending = o, h0(e, o)) : (o.next = n.next, e.pending = n.next = o);
    }
  }
  function h0(t, e) {
    var n = e.action, a = e.payload, u = t.state;
    if (e.isTransition) {
      var o = ft.T, h = {};
      h.types = o !== null ? o.types : null, ft.T = h;
      try {
        var S = n(u, a), M = ft.S;
        M !== null && M(h, S), g0(t, e, S);
      } catch (Z) {
        Ns(t, e, Z);
      } finally {
        o !== null && h.types !== null && (o.types = h.types), ft.T = o;
      }
    } else
      try {
        o = n(u, a), g0(t, e, o);
      } catch (Z) {
        Ns(t, e, Z);
      }
  }
  function g0(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        m0(t, e, a);
      },
      function(a) {
        return Ns(t, e, a);
      }
    ) : m0(t, e, n);
  }
  function m0(t, e, n) {
    e.status = "fulfilled", e.value = n, y0(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, h0(t, n)));
  }
  function Ns(t, e, n) {
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
    }, n.queue = a, n = B0.bind(
      null,
      Nt,
      a
    ), a.dispatch = n, a = ws(!1), o = Os.bind(
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
    if (e = Es(
      t,
      e,
      v0
    )[0], t = qo(Fn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = tu(e);
      } catch (h) {
        throw h === Xa ? Oo : h;
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
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = Nt.updateQueue, e === null && (e = Vo(), Nt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function E0() {
    return te().memoizedState;
  }
  function Xo(t, e, n, a) {
    var u = Ce();
    Nt.flags |= t, u.memoizedState = Ka(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Zo(t, e, n, a) {
    var u = te();
    a = a === void 0 ? null : a;
    var o = u.memoizedState.inst;
    Zt !== null && a !== null && ys(a, Zt.memoizedState.deps) ? u.memoizedState = Ka(e, o, n, a) : (Nt.flags |= t, u.memoizedState = Ka(
      1 | e,
      o,
      n,
      a
    ));
  }
  function _0(t, e) {
    Xo(8390656, 8, t, e);
  }
  function Ts(t, e) {
    Zo(2048, 8, t, e);
  }
  function vx(t) {
    Nt.flags |= 4;
    var e = Nt.updateQueue;
    if (e === null)
      e = Vo(), Nt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function w0(t) {
    var e = te().memoizedState;
    return vx({ ref: e, nextImpl: t }), function() {
      if ((Yt & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function N0(t, e) {
    return Zo(4, 2, t, e);
  }
  function T0(t, e) {
    return Zo(4, 4, t, e);
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
    n = n != null ? n.concat([t]) : null, Zo(4, 4, C0.bind(null, e, t), n);
  }
  function Cs() {
  }
  function M0(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && ys(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function A0(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && ys(e, a[1]))
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
  function zs(t, e, n) {
    return n === void 0 || (In & 1073741824) !== 0 && (Dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Lg(), Nt.lanes |= t, wl |= t, n);
  }
  function O0(t, e, n, a) {
    return Le(n, e) ? n : pl.current !== null ? (t = zs(t, n, a), Le(t, e) || (ae = !0), t) : (In & 106) === 0 || (In & 1073741824) !== 0 && (Dt & 261930) === 0 ? (ae = !0, t.memoizedState = n) : (t = Lg(), Nt.lanes |= t, wl |= t, e);
  }
  function D0(t, e, n, a, u) {
    var o = dt.p;
    dt.p = o !== 0 && 8 > o ? o : 8;
    var h = ft.T, S = {};
    S.types = h !== null ? h.types : null, ft.T = S, Os(t, !1, e, n);
    try {
      var M = u(), Z = ft.S;
      if (Z !== null && Z(S, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var W = dx(
          M,
          a
        );
        eu(
          t,
          e,
          W,
          Qe(t)
        );
      } else
        eu(
          t,
          e,
          a,
          Qe(t)
        );
    } catch (it) {
      eu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: it },
        Qe()
      );
    } finally {
      dt.p = o, h !== null && S.types !== null && (h.types = S.types), ft.T = h;
    }
  }
  function px() {
  }
  function Ms(t, e, n, a) {
    if (t.tag !== 5) throw Error(c(476));
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
  function As() {
    return he(fi);
  }
  function U0() {
    return te().memoizedState;
  }
  function j0() {
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
          a !== null && (je(a, e, n), ki(a, e, n)), e = { cache: as() }, t.payload = e;
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
    }, Go(t) ? Y0(e, n) : (n = kc(t, e, n, a), n !== null && (je(n, t, a), V0(n, e, a)));
  }
  function B0(t, e, n) {
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
    if (Go(t)) Y0(e, u);
    else {
      var o = t.alternate;
      if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
        try {
          var h = e.lastRenderedState, S = o(h, n);
          if (u.hasEagerState = !0, u.eagerState = S, Le(S, h))
            return bo(t, e, u, 0), Gt === null && So(), !1;
        } catch {
        }
      if (n = kc(t, e, u, a), n !== null)
        return je(n, t, a), V0(n, e, a), !0;
    }
    return !1;
  }
  function Os(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Ef(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(t)) {
      if (e) throw Error(c(479));
    } else
      e = kc(
        t,
        n,
        a,
        2
      ), e !== null && je(e, t, 2);
  }
  function Go(t) {
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
      a &= t.pendingLanes, n |= a, e.lanes = n, to(t, n);
    }
  }
  var Qo = {
    readContext: he,
    use: Lo,
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
    use: Lo,
    useCallback: function(t, e) {
      return Ce().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: he,
    useEffect: _0,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Xo(
        4194308,
        4,
        C0.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Xo(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Xo(4, 2, t, e);
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
      t = ws(t);
      var e = t.queue, n = B0.bind(null, Nt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Cs,
    useDeferredValue: function(t, e) {
      var n = Ce();
      return zs(n, t, e);
    },
    useTransition: function() {
      var t = ws(!1);
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
          throw Error(c(407));
        n = n();
      } else {
        if (n = e(), Gt === null)
          throw Error(c(349));
        (Dt & 127) !== 0 || o0(a, e, n);
      }
      u.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return u.queue = o, _0(c0.bind(null, a, o, t), [
        t
      ]), a.flags |= 2048, Ka(
        9,
        { destroy: void 0 },
        r0.bind(
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
        n = (a & ~(1 << 32 - Ne(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Yo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = hx++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: As,
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
      return e.queue = n, e = Os.bind(
        null,
        Nt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: bs,
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
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, q0 = {
    readContext: he,
    use: Lo,
    useCallback: M0,
    useContext: he,
    useEffect: Ts,
    useImperativeHandle: z0,
    useInsertionEffect: N0,
    useLayoutEffect: T0,
    useMemo: A0,
    useReducer: qo,
    useRef: E0,
    useState: function() {
      return qo(Fn);
    },
    useDebugValue: Cs,
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
      var t = qo(Fn)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : tu(t),
        e
      ];
    },
    useSyncExternalStore: u0,
    useId: U0,
    useHostTransitionStatus: As,
    useFormState: x0,
    useActionState: x0,
    useOptimistic: function(t, e) {
      var n = te();
      return d0(n, Zt, t, e);
    },
    useMemoCache: bs,
    useCacheRefresh: j0,
    useEffectEvent: w0
  }, bx = {
    readContext: he,
    use: Lo,
    useCallback: M0,
    useContext: he,
    useEffect: Ts,
    useImperativeHandle: z0,
    useInsertionEffect: N0,
    useLayoutEffect: T0,
    useMemo: A0,
    useReducer: _s,
    useRef: E0,
    useState: function() {
      return _s(Fn);
    },
    useDebugValue: Cs,
    useDeferredValue: function(t, e) {
      var n = te();
      return Zt === null ? zs(n, t, e) : O0(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = _s(Fn)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : tu(t),
        e
      ];
    },
    useSyncExternalStore: u0,
    useId: U0,
    useHostTransitionStatus: As,
    useFormState: b0,
    useActionState: b0,
    useOptimistic: function(t, e) {
      var n = te();
      return Zt !== null ? d0(n, Zt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: bs,
    useCacheRefresh: j0,
    useEffectEvent: w0
  };
  function Ds(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : j({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Rs = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Qe(), u = yl(a);
      u.payload = e, n != null && (u.callback = n), e = vl(t, u, a), e !== null && (je(e, t, a), ki(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Qe(), u = yl(a);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = vl(t, u, a), e !== null && (je(e, t, a), ki(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Qe(), a = yl(n);
      a.tag = 2, e != null && (a.callback = e), e = vl(t, a, n), e !== null && (je(e, t, n), ki(e, t, n));
    }
  };
  function X0(t, e, n, a, u, o, h) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, o, h) : e.prototype && e.prototype.isPureReactComponent ? !qi(n, a) || !qi(u, o) : !0;
  }
  function Z0(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Rs.enqueueReplaceState(e, e.state, null);
  }
  function ua(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = j({}, n));
      for (var u in t)
        n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function G0(t) {
    xo(t);
  }
  function Q0(t) {
    console.error(t);
  }
  function K0(t) {
    xo(t);
  }
  function Ko(t, e) {
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
  function Hs(t, e, n) {
    return n = yl(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ko(t, e);
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
            return be === null ? hr() : n.alternate === null && Wt === 0 && (Wt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, a === Do ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), xf(t, a, u)), !1;
          case 22:
            return n.flags |= 65536, a === Do ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), xf(t, a, u)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return xf(t, a, u), hr(), !1;
    }
    if (zt)
      return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, a !== ts && (t = Error(c(422), { cause: a }), Gi(Pe(t, n)))) : (a !== ts && (e = Error(c(423), {
        cause: a
      }), Gi(
        Pe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Pe(a, n), u = Hs(
        t.stateNode,
        a,
        u
      ), ss(t, u), Wt !== 4 && (Wt = 2)), !1;
    var o = Error(c(520), { cause: a });
    if (o = Pe(o, n), cu === null ? cu = [o] : cu.push(o), Wt !== 4 && (Wt = 2), e === null) return !0;
    a = Pe(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = Hs(n.stateNode, a, t), ss(n, t), !1;
        case 1:
          if (e = n.type, o = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Nl === null || !Nl.has(o))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = J0(u), k0(
              u,
              t,
              n,
              a
            ), ss(n, u), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Us = Error(c(461)), ae = !1;
  function re(t, e, n, a) {
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
    return Pl(e), a = vs(
      t,
      e,
      n,
      h,
      o,
      u
    ), S = ps(), t !== null && !ae ? (xs(t, e, u), Wn(t, e, u)) : (zt && S && No(e), e.flags |= 1, re(t, e, a, u), e.child);
  }
  function F0(t, e, n, a, u) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" && !Ic(o) && o.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = o, W0(
        t,
        e,
        o,
        a,
        u
      )) : (t = _o(
        n.type,
        null,
        a,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (o = t.child, !Zs(t, u)) {
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
        if (ae = !1, e.pendingProps = a = o, Zs(t, u))
          (t.flags & 131072) !== 0 && (ae = !0);
        else
          return e.lanes = t.lanes, Wn(t, e, u);
    }
    return js(
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
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ao(
          e,
          o !== null ? o.cachePool : null
        ), o !== null ? n0(e, o) : ds(), l0(e);
      else
        return a = e.lanes = 536870912, tg(
          t,
          e,
          o !== null ? o.baseLanes | n : n,
          n,
          a
        );
    } else
      o !== null ? (Ao(e, o.cachePool), n0(e, o), Sl(), e.memoizedState = null) : (t !== null && Ao(e, null), ds(), Sl());
    return re(t, e, u, n), e.child;
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
    var o = us();
    return o = o === null ? null : { parent: ne._currentValue, pool: o }, e.memoizedState = {
      baseLanes: n,
      cachePool: o
    }, t !== null && Ao(e, null), ds(), l0(e), t !== null && Wl(t, e, a, !0), e.childLanes = u, null;
  }
  function $o(t, e) {
    return e = Jo(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function eg(t, e, n) {
    return aa(e, t.child, null, n), t = $o(e, e.pendingProps), t.flags |= 2, qe(e), e.memoizedState = null, t;
  }
  function _x(t, e, n) {
    var a = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (zt) {
        if (a.mode === "hidden")
          return t = $o(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, nu(null, t);
        if (gs(e), (t = Qt) ? (t = Cm(
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
      return $o(e, a);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var h = o.dehydrated;
      if (gs(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = eg(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
      else if (ae || Wl(t, e, n, !1), u = (n & t.childLanes) !== 0, ae || u) {
        if (pl.current === null) {
          if (a = Gt, a !== null && (h = eo(a, n), h !== 0 && h !== o.retryLane))
            throw o.retryLane = h, Jl(t, h), je(a, t, h), Us;
          hr();
        }
        e = eg(
          t,
          e,
          n
        );
      } else
        t = o.treeContext, Qt = an(h.nextSibling), se = e, zt = !0, fl = null, nn = !1, t !== null && qh(e, t), e = $o(e, a), e.flags |= 134221824;
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
        throw Error(c(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function js(t, e, n, a, u) {
    return Pl(e), n = vs(
      t,
      e,
      n,
      a,
      void 0,
      u
    ), a = ps(), t !== null && !ae ? (xs(t, e, u), Wn(t, e, u)) : (zt && a && No(e), e.flags |= 1, re(t, e, n, u), e.child);
  }
  function ng(t, e, n, a, u, o) {
    return Pl(e), e.updateQueue = null, n = i0(
      e,
      a,
      n,
      u
    ), a0(t), a = ps(), t !== null && !ae ? (xs(t, e, o), Wn(t, e, o)) : (zt && a && No(e), e.flags |= 1, re(t, e, n, o), e.child);
  }
  function lg(t, e, n, a, u) {
    if (Pl(e), e.stateNode === null) {
      var o = Ba, h = n.contextType;
      typeof h == "object" && h !== null && (o = he(h)), o = new n(a, o), e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Rs, e.stateNode = o, o._reactInternals = e, o = e.stateNode, o.props = a, o.state = e.memoizedState, o.refs = {}, rs(e), h = n.contextType, o.context = typeof h == "object" && h !== null ? he(h) : Ba, o.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Ds(
        e,
        n,
        h,
        a
      ), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (h = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), h !== o.state && Rs.enqueueReplaceState(o, o.state, null), Fi(e, a, o, u), Ii(), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      o = e.stateNode;
      var S = e.memoizedProps, M = ua(n, S);
      o.props = M;
      var Z = o.context, W = n.contextType;
      h = Ba, typeof W == "object" && W !== null && (h = he(W));
      var it = n.getDerivedStateFromProps;
      W = typeof it == "function" || typeof o.getSnapshotBeforeUpdate == "function", S = e.pendingProps !== S, W || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (S || Z !== h) && Z0(
        e,
        o,
        a,
        h
      ), ml = !1;
      var q = e.memoizedState;
      o.state = q, Fi(e, a, o, u), Ii(), Z = e.memoizedState, S || q !== Z || ml ? (typeof it == "function" && (Ds(
        e,
        n,
        it,
        a
      ), Z = e.memoizedState), (M = ml || X0(
        e,
        n,
        M,
        a,
        q,
        Z,
        h
      )) ? (W || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = Z), o.props = a, o.state = Z, o.context = h, a = M) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      o = e.stateNode, cs(t, e), h = e.memoizedProps, W = ua(n, h), o.props = W, it = e.pendingProps, q = o.context, Z = n.contextType, M = Ba, typeof Z == "object" && Z !== null && (M = he(Z)), S = n.getDerivedStateFromProps, (Z = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (h !== it || q !== M) && Z0(
        e,
        o,
        a,
        M
      ), ml = !1, q = e.memoizedState, o.state = q, Fi(e, a, o, u), Ii();
      var J = e.memoizedState;
      h !== it || q !== J || ml || t !== null && t.dependencies !== null && zo(t.dependencies) ? (typeof S == "function" && (Ds(
        e,
        n,
        S,
        a
      ), J = e.memoizedState), (W = ml || X0(
        e,
        n,
        W,
        a,
        q,
        J,
        M
      ) || t !== null && t.dependencies !== null && zo(t.dependencies)) ? (Z || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(a, J, M), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(
        a,
        J,
        M
      )), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || h === t.memoizedProps && q === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && q === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = J), o.props = a, o.state = J, o.context = M, a = W) : (typeof o.componentDidUpdate != "function" || h === t.memoizedProps && q === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && q === t.memoizedState || (e.flags |= 1024), a = !1);
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
    )) : re(t, e, n, u), e.memoizedState = o.state, t = e.child) : t = Wn(
      t,
      e,
      u
    ), t;
  }
  function ag(t, e, n, a) {
    return Il(), e.flags |= 256, re(t, e, n, a), e.child;
  }
  var Bs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ys(t) {
    return { baseLanes: t, cachePool: $h() };
  }
  function Vs(t, e, n) {
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
        return Vf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return o = a.children, a = a.fallback, u ? (Sl(), u = e.mode, o = Jo(
        { mode: "hidden", children: o },
        u
      ), a = kl(
        a,
        u,
        n,
        null
      ), o.return = e, a.return = e, o.sibling = a, e.child = o, a = e.child, a.memoizedState = Ys(n), a.childLanes = Vs(
        t,
        h,
        n
      ), e.memoizedState = Bs, nu(null, a)) : (xl(e), Ls(e, o));
    }
    var S = t.memoizedState;
    if (S !== null) {
      var M = S.dehydrated;
      if (M !== null)
        return wx(
          t,
          e,
          o,
          h,
          a,
          M,
          S,
          n
        );
    }
    return u ? (Sl(), u = a.fallback, o = e.mode, S = t.child, M = S.sibling, a = Kn(S, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = S.subtreeFlags & 1206910976, M !== null ? u = Kn(M, u) : (u = kl(
      u,
      o,
      n,
      null
    ), u.flags |= 2), u.return = e, a.return = e, a.sibling = u, e.child = a, nu(null, a), a = e.child, u = t.child.memoizedState, u === null ? u = Ys(n) : (o = u.cachePool, o !== null ? (S = ne._currentValue, o = o.parent !== S ? { parent: S, pool: S } : o) : o = $h(), u = {
      baseLanes: u.baseLanes | n,
      cachePool: o
    }), a.memoizedState = u, a.childLanes = Vs(
      t,
      h,
      n
    ), e.memoizedState = Bs, nu(t.child, a)) : (xl(e), n = t.child, t = n.sibling, n = Kn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (h = e.deletions, h === null ? (e.deletions = [t], e.flags |= 16) : h.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Ls(t, e) {
    return e = Jo(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Jo(t, e) {
    return t = De(22, t, null, e), t.lanes = 0, t;
  }
  function ko(t, e, n) {
    return aa(e, t.child, null, n), t = Ls(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function wx(t, e, n, a, u, o, h, S) {
    if (n)
      return e.flags & 256 ? (xl(e), e.flags &= -257, ko(
        t,
        e,
        S
      )) : e.memoizedState !== null ? (Sl(), e.child = t.child, e.flags |= 128, null) : (Sl(), o = u.fallback, h = e.mode, u = Jo(
        { mode: "visible", children: u.children },
        h
      ), o = kl(
        o,
        h,
        S,
        null
      ), o.flags |= 2, u.return = e, o.return = e, u.sibling = o, e.child = u, aa(e, t.child, null, S), u = e.child, u.memoizedState = Ys(S), u.childLanes = Vs(
        t,
        a,
        S
      ), e.memoizedState = Bs, nu(null, u));
    if (xl(e), Vf(o)) {
      if (a = o.nextSibling && o.nextSibling.dataset, a) var M = a.dgst;
      return a = M, a !== "" && (u = Error(c(419)), u.stack = "", u.digest = a, Gi({ value: u, source: null, stack: null })), ko(
        t,
        e,
        S
      );
    }
    if (ae || Wl(t, e, S, !1), a = (S & t.childLanes) !== 0, ae || a) {
      if (pl.current !== null)
        return ko(
          t,
          e,
          S
        );
      if (a = Gt, a !== null && (u = eo(
        a,
        S
      ), u !== 0 && u !== h.retryLane))
        throw h.retryLane = u, Jl(t, u), je(a, t, u), Us;
      return Yf(o) || hr(), ko(
        t,
        e,
        S
      );
    }
    return Yf(o) ? (e.flags |= 192, e.child = t.child, null) : (t = h.treeContext, Qt = an(o.nextSibling), se = e, zt = !0, fl = null, nn = !1, t !== null && qh(e, t), e = Ls(
      e,
      u.children
    ), e.flags |= 134221824, e);
  }
  function ug(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Co(t.return, e, n);
  }
  function og(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && jo(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function Io(t, e, n, a, u, o) {
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
  function qs(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function Xs(t, e, n) {
    var a = e.pendingProps, u = a.revealOrder, o = a.tail;
    a = a.children;
    var h = me.current;
    if (e.flags & 128)
      return Wi(e, h), null;
    var S = (h & 2) !== 0;
    if (S ? (h = h & 1 | 2, e.flags |= 128) : h &= 1, Wi(e, h), u === "backwards" && t !== null ? (qs(t), re(t, e, a, n), qs(t)) : re(t, e, a, n), a = zt ? Zi : 0, !S && t !== null && (t.flags & 128) !== 0)
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
        n = og(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null, qs(e)), Io(
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
          if (t = u.alternate, t !== null && jo(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        Io(
          e,
          !0,
          n,
          null,
          o,
          a
        );
        break;
      case "together":
        Io(
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
        n = og(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), Io(
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
  function rg(t, e, n) {
    var a = e.pendingProps;
    return hl(e, e.type, a.value), re(t, e, a.children, n), e.child;
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
      throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, n = Kn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Kn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Zs(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && zo(t)));
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
          return e.flags |= 128, gs(e), null;
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
          return Xs(
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
            return Xs(
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
  function cg(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ae = !0;
      else {
        if (!Zs(t, n) && (e.flags & 128) === 0)
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
            Ic(t) ? (a = ua(t, a), e.tag = 1, e = lg(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = js(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === D) {
                e.tag = 11, e = I0(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (u === $) {
                e.tag = 14, e = F0(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (u === L) {
                e.tag = 10, e.type = t, e = rg(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = ht(t) || t, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return js(
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
          ), t === null) throw Error(c(387));
          a = e.pendingProps;
          var o = e.memoizedState;
          u = o.element, cs(t, e), Fi(e, a, null, n);
          var h = e.memoizedState;
          if (a = h.cache, hl(e, ne, a), a !== o.cache && ls(
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
                Error(c(424)),
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
            re(t, e, a, n);
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
          ce.current,
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
          ce.current
        ), se = e, nn = !0, u = Qt, zl(e.type) ? (Lf = u, Qt = an(a.firstChild)) : Qt = u), re(
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
        ), a !== null ? (e.stateNode = a, se = e, Qt = an(a.firstChild), nn = !1, u = !0) : u = !1), u || dl(e)), Ee(e), u = e.type, o = e.pendingProps, h = t !== null ? t.memoizedProps : null, a = o.children, Of(u, o) ? a = null : h !== null && Of(u, h) && (e.flags |= 32), e.memoizedState !== null && (u = vs(
          t,
          e,
          gx,
          null,
          null,
          n
        ), fi._currentValue = u), $a(t, e), re(t, e, a, n), e.child;
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
        ) : re(t, e, a, n), e.child;
      case 11:
        return I0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, $a(t, e), re(t, e, a, n), e.child;
      case 8:
        return re(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return re(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return rg(t, e, n);
      case 9:
        return u = e.type._context, a = e.pendingProps.children, Pl(e), u = he(u), a = a(u), e.flags |= 1, re(t, e, a, n), e.child;
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
        return Xs(t, e, n);
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
        return Pl(e), a = he(ne), t === null ? (u = us(), u === null && (u = Gt, o = as(), u.pooledCache = o, o.refCount++, o !== null && (u.pooledCacheLanes |= n), u = o), e.memoizedState = { parent: a, cache: u }, rs(e), hl(e, ne, u)) : ((t.lanes & n) !== 0 && (cs(t, e), Fi(e, null, null, n), Ii()), u = t.memoizedState, o = e.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), hl(e, ne, a)) : (a = o.cache, hl(e, ne, a), a !== u.cache && ls(
          e,
          [ne],
          n,
          !0
        ))), re(
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
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : zt && No(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : $a(t, e), re(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function Pn(t) {
    t.flags |= 4;
  }
  function Gs(t, e, n, a, u) {
    var o;
    if ((o = (t.mode & 32) !== 0) && (o = n === null ? Ym(e, a) : Ym(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), o) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Gg()) t.flags |= 8192;
        else
          throw la = Do, os;
    } else t.flags &= -16777217;
  }
  function sg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Vm(e))
      if (Gg()) t.flags |= 8192;
      else
        throw la = Do, os;
  }
  function Fo(t, e) {
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
    switch (Pc(e), e.tag) {
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
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), kn(ne), Ae(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (La(e) ? Pn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, es())), Kt(e), null;
      case 26:
        var u = e.type, o = e.memoizedState;
        return t === null ? (Pn(e), o !== null ? (Kt(e), sg(e, o)) : (Kt(e), Gs(
          e,
          u,
          null,
          a,
          n
        ))) : o ? o !== t.memoizedState ? (Pn(e), Kt(e), sg(e, o)) : (Kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Pn(e), Kt(e), Gs(
          e,
          u,
          t,
          a,
          n
        )), null;
      case 27:
        if (Oe(e), n = ce.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Pn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(c(166));
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
              throw Error(c(166));
            return Kt(e), e.subtreeFlags &= -33554433, null;
          }
          if (o = Pt.current, La(e))
            Xh(e);
          else {
            var h = gu(
              ce.current
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
        return Kt(e), e.subtreeFlags &= -33554433, Gs(
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
            throw Error(c(166));
          if (t = ce.current, La(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, u = se, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[oe] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || cm(t.nodeValue, n)), t || dl(e, !0);
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
              if (!a) throw Error(c(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[oe] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), t = !1;
          } else
            n = es(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Kt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = La(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(c(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(c(317));
              u[oe] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), u = !1;
          } else
            u = es(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
        }
        return qe(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), o = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== u && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Fo(e, e.updateQueue), Kt(e), null);
      case 4:
        return Ae(), t === null && Tf(e.stateNode.containerInfo), e.flags |= 67108864, Kt(e), null;
      case 10:
        return kn(e.type), Kt(e), null;
      case 19:
        if (ms(e), a = e.memoizedState, a === null) return Kt(e), null;
        if (u = (e.flags & 128) !== 0, o = a.rendering, o === null)
          if (u) lu(a, !1);
          else {
            if (Wt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (o = jo(t), o !== null) {
                  for (e.flags |= 128, lu(a, !1), t = o.updateQueue, e.updateQueue = t, Fo(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Bh(n, t), n = n.sibling;
                  return Wi(
                    e,
                    me.current & 1 | 2
                  ), zt && $n(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && _e() > cr && (e.flags |= 128, u = !0, lu(a, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = jo(o), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, Fo(e, t), lu(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !o.alternate && !zt)
                return Kt(e), null;
            } else
              2 * _e() - a.renderingStartTime > cr && n !== 536870912 && (e.flags |= 128, u = !0, lu(a, !1), e.lanes = 4194304);
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
        return qe(e), hs(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Kt(e), n = e.updateQueue, n !== null && Fo(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && Ht(ea), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), kn(ne), Kt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Kt(e), null;
    }
    throw Error(c(156, e.tag));
  }
  function Cx(t, e) {
    switch (Pc(e), e.tag) {
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
            throw Error(c(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (qe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return ms(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Ae(), null;
      case 10:
        return kn(e.type), null;
      case 22:
      case 23:
        return qe(e), hs(), t !== null && Ht(ea), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return kn(ne), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fg(t, e) {
    switch (Pc(e), e.tag) {
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
        ms(e);
        break;
      case 10:
        kn(e.type);
        break;
      case 22:
      case 23:
        qe(e), hs(), t !== null && Ht(ea);
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
              var M = n, Z = S;
              try {
                Z();
              } catch (W) {
                qt(
                  u,
                  M,
                  W
                );
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (W) {
      qt(e, e.return, W);
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
  function Wo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Tm(
          t.stateNode,
          e[n]
        );
  }
  function gg(t) {
    for (var e = t.return; e !== null && (Ks(e) && Tm(t.stateNode, e.stateNode), !Qs(e)); )
      e = e.return;
  }
  function iu(t) {
    for (var e = t.return; e !== null && (Ks(e) && pS(t.stateNode, e.stateNode), !Qs(e)); )
      e = e.return;
  }
  function Qs(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Ks(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function $s(t) {
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
  function Js(t, e, n) {
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
  function ks(t) {
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
  function Is(t, e, n, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(u, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(u), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Nn)), Wo(t, a), Bt = !0;
    else if (u !== 4 && (u === 27 && (Wo(t, a), a = null, zl(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (Is(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Is(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Po(t, e, n, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? n.insertBefore(u, e) : n.appendChild(u), Wo(t, a), Bt = !0;
    else if (u !== 4 && (u === 27 && (Wo(t, a), a = null, zl(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (Po(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Po(
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
  var tr = !1, Xe = null;
  function vg(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (tr = !0);
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
          var S = Hf(h);
          a.push(S), S.view && (o = !0);
        } else
          o || Hf(h).view && (o = !0);
        tr = !0, pm(
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
  function er(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (er(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(c(544));
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
  function Fs(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, u = Gn(a, n), o = Qn(
        a.default,
        n.paired ? a.share : a.enter
      );
      o !== "none" ? Ja(t, u, o, null, !1) ? (er(t), n.paired || e || ni(t, a.onEnter)) : An(t.child, !1) : er(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Fs(t, e), t = t.sibling;
    else er(t);
  }
  function Ws(t) {
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
            Ws(t);
          }
          t = t.sibling;
        }
    }
  }
  function Ps(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Gn(e, t.stateNode), a = Xe !== null ? Xe.get(n) : void 0, u = Qn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      u !== "none" && (Ja(t, n, u, null, !1) ? a !== void 0 ? (u = t.stateNode, a.paired = u, u.paired = a, Xe.delete(n), ni(t, e.onShare)) : ni(t, e.onExit) : An(t.child, !1)), Xe !== null && Ws(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ps(t), t = t.sibling;
    else
      Xe !== null && Ws(t);
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
  function tf(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, An(t.child, !1));
          }
          tf(t);
        }
        t = t.sibling;
      }
  }
  function nr(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, An(t.child, !1), tf(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        nr(t), t = t.sibling;
    else tf(t);
  }
  function bg(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? An(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && bg(t), t = t.sibling;
  }
  function ef(t, e, n, a, u, o, h) {
    for (var S = !1; e !== null; ) {
      if (e.tag === 5) {
        var M = e.stateNode;
        if (o !== null && Re < o.length) {
          var Z = o[Re], W = Hf(M);
          (Z.view || W.view) && (S = !0);
          var it;
          if (it = (t.flags & 4) === 0)
            if (W.clip) it = !0;
            else {
              it = Z.rect;
              var q = W.rect;
              it = it.y !== q.y || it.x !== q.x || it.height !== q.height || it.width !== q.width;
            }
          it && (t.flags |= 4), W.abs ? W = !Z.abs : (Z = Z.rect, W = W.rect, W = Z.height !== W.height || Z.width !== W.width), W && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && pm(
          M,
          Re === 0 ? n : n + "_" + Re,
          u
        ), S && (t.flags & 4) !== 0 || (Mn === null && (Mn = []), Mn.push(
          M,
          Re === 0 ? a : a + "_" + Re,
          e.memoizedProps
        )), Re++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && h ? t.flags |= e.flags & 32 : ef(
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
        Re = 0, u = ef(
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
  var fe = !1, Vt = !1, On = !1, nf = !1, _g = typeof WeakSet == "function" ? WeakSet : Set, de = null, Dn = !1, uu = !1, lr = !1, lf = !1;
  function zx(t, e, n) {
    if (t = t.containerInfo, Mf = di, t = Ch(t), Zc(t)) {
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
            var S = 0, M = -1, Z = -1, W = 0, it = 0, q = t, J = null;
            e: for (; ; ) {
              for (var gt; q !== a || o !== 0 && q.nodeType !== 3 || (M = S + o), q !== h || u !== 0 && q.nodeType !== 3 || (Z = S + u), q.nodeType === 3 && (S += q.nodeValue.length), (gt = q.firstChild) !== null; )
                J = q, q = gt;
              for (; ; ) {
                if (q === t) break e;
                if (J === a && ++W === o && (M = S), J === h && ++it === u && (Z = S), (gt = q.nextSibling) !== null) break;
                q = J, J = q.parentNode;
              }
              q = gt;
            }
            a = M === -1 || Z === -1 ? null : { start: M, end: Z };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Af = { focusedElem: t, selectionRange: a }, di = !1, n = (n & 335544064) === n, de = e, e = n ? 9270 : 1024; de !== null; ) {
      if (t = de, n && (a = t.deletions, a !== null))
        for (o = 0; o < a.length; o++)
          n && Ps(a[o]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && vg(t), ar(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Ps(a), ar(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && vg(t), ar(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, de = a) : (n && Sg(t), ar(n));
      }
    }
    Xe = null;
  }
  function ar(t) {
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
          if ((u & 1024) !== 0) throw Error(c(163));
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
        Rn(t, n), e === null && a & 4 && $s(n), a & 512 && zn(n, n.return);
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
  function af(t, e) {
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
        } catch (M) {
          qt(t, t.return, M);
        }
        uf(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Bt = !0;
        } catch (M) {
          qt(t, t.return, M);
        }
        break;
      case 18:
        try {
          var S = t.stateNode;
          e ? vm(S, !0) : vm(t.stateNode, !1);
        } catch (M) {
          qt(t, t.return, M);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && af(t, e);
        break;
      default:
        af(t, e);
    }
  }
  function uf(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              Ng(n, a);
              break t;
            case 22:
              n.memoizedState === null && uf(n, a);
              break t;
            default:
              uf(n, a);
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
              (Jt.nodeType === 9 ? Jt.body : Jt.nodeName === "HTML" ? Jt.ownerDocument.body : Jt).removeChild(n.stateNode), Bt = !0;
            } catch (o) {
              qt(
                n,
                e,
                o
              );
            }
          else
            try {
              Jt.removeChild(n.stateNode), Bt = !0;
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
        throw Error(c(435, t.tag));
    }
  }
  function ir(t, e) {
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
        var o = a[u], h = t, S = e, M = S;
        t: for (; M !== null; ) {
          switch (M.tag) {
            case 27:
              if (zl(M.type)) {
                Jt = M.stateNode, He = !1;
                break t;
              }
              break;
            case 5:
              Jt = M.stateNode, He = !1;
              break t;
            case 3:
            case 4:
              Jt = M.stateNode.containerInfo, He = !0;
              break t;
          }
          M = M.return;
        }
        if (Jt === null) throw Error(c(160));
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
                        if (o = Bm(
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
                        if (o = Bm(
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
                        throw Error(c(468, e));
                    }
                    a[oe] = t, ee(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                fe || Gf(o, t.type, t.stateNode);
            else
              t.stateNode = jm(
                o,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? (e = a.stateNode, e === null || Vt || e.parentNode.removeChild(e)) : u.count--, n === null ? fe || Gf(o, t.type, t.stateNode) : jm(o, n, t.memoizedProps)) : n === null && t.stateNode !== null && Js(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        ze(e, t, n), Me(t), u & 512 && (Vt || a === null || ye(a, a.return)), a !== null && u & 4 && Js(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (o = On, On = !1, ze(e, t, n), On = o, Me(t), u & 512 && (Vt || a === null || ye(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Aa(e, ""), Bt = !0;
          } catch (W) {
            qt(t, t.return, W);
          }
        }
        u & 4 && t.stateNode != null && (e = t.memoizedProps, Js(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (nf = !0);
        break;
      case 6:
        if (ze(e, t, n), Me(t), u & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Bt = !0;
          } catch (W) {
            qt(t, t.return, W);
          }
        }
        break;
      case 3:
        if (Bt = !1, Sr = null, o = fn, fn = mu(e.containerInfo), ze(e, t, n), fn = o, Me(t), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            hi(e.containerInfo);
          } catch (W) {
            qt(t, t.return, W);
          }
        nf && (nf = !1, Og(t)), Bt = !1;
        break;
      case 4:
        u = On, On = fe, a = Fd(), o = fn, fn = mu(
          t.stateNode.containerInfo
        ), ze(e, t, n), Me(t), fn = o, Bt && uu && (lr = !0), Bt = a, On = u;
        break;
      case 12:
        ze(e, t, n), Me(t);
        break;
      case 31:
        ze(e, t, n), Me(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ir(t, e)));
        break;
      case 13:
        ze(e, t, n), Me(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (rr = _e()), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ir(t, e)));
        break;
      case 22:
        o = t.memoizedState !== null, h = a !== null && a.memoizedState !== null;
        var S = fe, M = Vt, Z = On;
        fe = S || o, On = Z || o, Vt = M || h, ze(e, t, n), Vt = M, On = Z, fe = S, Me(t), u & 8192 && (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, !o || a === null || h || fe || Vt || (e = h || Vt, n = fe, a = Vt, fe = o || fe, Vt = e, El(t, 2), fe = n, Vt = a), !o && On || af(t, o)), u & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, ir(t, n))));
        break;
      case 19:
        ze(e, t, n), Me(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ir(t, e)));
        break;
      case 30:
        u & 512 && (Vt || a === null || ye(a, a.return)), u = Fd(), o = uu, h = (n & 335544064) === n, S = t.memoizedProps, uu = h && Qn(
          S.default,
          S.update
        ) !== "none", ze(e, t, n), Me(t), h && a !== null && Bt && (t.flags |= 4), uu = o, Bt = u;
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
          if (Ks(u)) {
            var o = u.stateNode;
            a === null ? a = [o] : a.push(o);
          }
          if (Qs(u)) break;
          u = u.return;
        }
        var h = a;
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var S = n.stateNode, M = ks(t);
            Po(
              t,
              M,
              S,
              h
            );
            break;
          case 5:
            var Z = n.stateNode;
            n.flags & 32 && (Aa(Z, ""), n.flags &= -33);
            var W = ks(t);
            Po(
              t,
              W,
              Z,
              h
            );
            break;
          case 3:
          case 4:
            var it = n.stateNode.containerInfo, q = ks(t);
            Is(
              t,
              q,
              it,
              h
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (J) {
        qt(t, t.return, J);
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
    if (n === null) Fs(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (lf = Dn = !1, pg(), ka(e, t), !Dn && !lr) {
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
            )), lf = !0;
          }
          Mn = null;
          break;
        case 5:
          ka(e, t);
          break;
        case 4:
          a = Dn, Dn = !1, ka(e, t), Dn && (lr = !0), Dn = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? Fs(t, !1) : ka(e, t));
          break;
        case 30:
          a = Dn, u = pg(), Dn = !1, ka(e, t), Dn && (t.flags |= 4);
          var o = t.memoizedProps, h = t.stateNode;
          e = Gn(o, h), h = Gn(n.memoizedProps, h);
          var S = Qn(o.default, o.update);
          S === "none" ? e = !1 : (o = n.memoizedState, n.memoizedState = null, n = t.child, Re = 0, e = ef(
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
            } catch (W) {
              qt(a, a.return, W);
            }
          if (a = o, u = a.updateQueue, u !== null) {
            var M = a.stateNode;
            try {
              var Z = u.shared.hiddenCallbacks;
              if (Z !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < Z.length; u++)
                  t0(Z[u], M);
            } catch (W) {
              qt(a, a.return, W);
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
          ), S && a === null && h & 4 && $s(o), zn(o, o.return);
          break;
        case 6:
          gg(o);
          break;
        case 26:
          M = o.stateNode, o.memoizedState !== null || M === null || fe || Gf(
            mu(M.ownerDocument),
            o.type,
            M
          ), dn(
            u,
            o,
            n
          ), S && a === null && h & 4 && $s(o), zn(o, o.return);
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
  function of(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Qi(n));
  }
  function rf(t, e) {
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
    u && e.alternate === null && e.return !== null && e.return.alternate !== null && nr(e);
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
        ), u && lf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), o & 2048 && (o = null, e.alternate !== null && (o = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== o && (e.refCount++, o != null && Qi(o)));
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
            var h = e.memoizedProps, S = h.id, M = h.onPostCommit;
            typeof M == "function" && M(
              S,
              e.alternate === null ? "mount" : "update",
              o.passiveEffectDuration,
              -0
            );
          } catch (Z) {
            qt(e, e.return, Z);
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
        h = e.stateNode, S = e.alternate, e.memoizedState !== null ? (u && S !== null && S.memoizedState === null && nr(S), h._visibility & 2 ? ln(
          t,
          e,
          n,
          a
        ) : ou(
          t,
          e
        )) : (u && S !== null && S.memoizedState !== null && nr(e), h._visibility & 2 ? ln(
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
        ))), o & 2048 && of(S, e);
        break;
      case 24:
        ln(
          t,
          e,
          n,
          a
        ), o & 2048 && rf(e.alternate, e);
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
      var o = t, h = e, S = n, M = a, Z = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Ia(
            o,
            h,
            S,
            M,
            u
          ), au(8, h);
          break;
        case 23:
          break;
        case 22:
          var W = h.stateNode;
          h.memoizedState !== null ? W._visibility & 2 ? Ia(
            o,
            h,
            S,
            M,
            u
          ) : ou(
            o,
            h
          ) : (W._visibility |= 2, Ia(
            o,
            h,
            S,
            M,
            u
          )), u && Z & 2048 && of(
            h.alternate,
            h
          );
          break;
        case 24:
          Ia(
            o,
            h,
            S,
            M,
            u
          ), u && Z & 2048 && rf(h.alternate, h);
          break;
        default:
          Ia(
            o,
            h,
            S,
            M,
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
            ou(n, a), u & 2048 && of(
              a.alternate,
              a
            );
            break;
          case 24:
            ou(n, a), u & 2048 && rf(a.alternate, a);
            break;
          default:
            ou(n, a);
        }
        e = e.sibling;
      }
  }
  var oa = 8192;
  function ra(t, e, n) {
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
        ra(
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
        ra(
          t,
          e,
          n
        ), t.flags & oa && (t = t.stateNode, (e & 335544128) === e && qm(n, t));
        break;
      case 3:
      case 4:
        var a = fn;
        fn = mu(t.stateNode.containerInfo), ra(
          t,
          e,
          n
        ), fn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = oa, oa = 16777216, ra(
          t,
          e,
          n
        ), oa = a) : ra(
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
        ra(
          t,
          e,
          n
        );
        break;
      default:
        ra(
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
  function ru(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          de = a, Bg(
            a,
            t
          );
        }
      Ug(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        jg(t), t = t.sibling;
  }
  function jg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ru(t), t.flags & 2048 && bl(9, t, t.return);
        break;
      case 3:
        ru(t);
        break;
      case 12:
        ru(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ur(t)) : ru(t);
        break;
      default:
        ru(t);
    }
  }
  function ur(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          de = a, Bg(
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
          bl(8, e, e.return), ur(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ur(e));
          break;
        default:
          ur(e);
      }
      t = t.sibling;
    }
  }
  function Bg(t, e) {
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
  }, Ox = typeof WeakMap == "function" ? WeakMap : Map, Yt = 0, Gt = null, Mt = null, Dt = 0, Lt = 0, Ze = null, _l = !1, Fa = !1, cf = !1, tl = 0, Wt = 0, wl = 0, ca = 0, or = 0, Ge = 0, Wa = 0, cu = null, Ue = null, sf = !1, rr = 0, Yg = 0, cr = 1 / 0, sr = null, Nl = null, kt = 0, hn = null, sa = null, Hn = 0, ff = 0, df = null, Vg = null, Pa = null, ti = null, ei = null, su = 0, fr = null;
  function Qe() {
    return (Yt & 2) !== 0 && Dt !== 0 ? Dt & -Dt : ft.T !== null ? Ef() : no();
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
  function je(t, e, n) {
    (t === Gt && (Lt === 2 || Lt === 9) || t.cancelPendingCommit !== null) && (li(t, 0), Tl(
      t,
      Dt,
      Ge,
      !1
    )), Zl(t, n), ((Yt & 2) === 0 || t !== Gt) && (t === Gt && ((Yt & 2) === 0 && (ca |= n), Wt === 4 && Tl(
      t,
      Dt,
      Ge,
      !1
    )), Un(t));
  }
  function qg(t, e, n) {
    if ((Yt & 6) !== 0) throw Error(c(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Xl(t, e), u = a ? Hx(t, e) : gf(t, e, !0), o = a;
    do {
      if (u === 0) {
        Fa && !a && Tl(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, o && !Dx(n)) {
          u = gf(t, e, !1), o = !1;
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
              u = cu;
              var M = S.current.memoizedState.isDehydrated;
              if (M && (li(S, h).flags |= 256), h = gf(
                S,
                h,
                !1
              ), h !== 2 && h !== 6) {
                if (cf && !M) {
                  S.errorRecoveryDisabledLanes |= o, ca |= o, u = 4;
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
              throw Error(c(345));
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
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (u = rr + 300 - _e(), 10 < u)) {
            if (Tl(
              a,
              e,
              Ge,
              !_l
            ), Na(a, 0, !0) !== 0) break t;
            Hn = e, a.timeoutHandle = Rf(
              Xg.bind(
                null,
                a,
                n,
                Ue,
                sr,
                sf,
                e,
                Ge,
                ca,
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
            sr,
            sf,
            e,
            Ge,
            ca,
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
  function Xg(t, e, n, a, u, o, h, S, M, Z, W, it, q, J) {
    t.timeoutHandle = -1;
    var gt = e.subtreeFlags, vt = (o & 335544064) === o;
    if (it = null, (vt || gt & 8192 || (gt & 16785408) === 16785408) && (it = {
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
      it
    ), vt && (gt = it, vt = t.containerInfo, vt = (vt.nodeType === 9 ? vt : vt.ownerDocument).__reactViewTransition, vt != null && (gt.count++, gt.waitingForViewTransition = !0, gt = pu.bind(gt), vt.finished.then(gt, gt))), gt = (o & 62914560) === o ? rr - _e() : (o & 4194048) === o ? Yg - _e() : 0, gt = jS(
      it,
      gt
    ), gt !== null)) {
      Hn = o, t.cancelPendingCommit = gt(
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
          M,
          Z,
          W,
          it,
          null,
          q,
          J
        )
      ), Tl(t, o, h, !Z);
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
      M,
      Z,
      W,
      it
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
    e = zi(t, e), e &= ~or, e &= ~ca, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var o = 31 - Ne(u), h = 1 << o;
      a[o] = -1, u &= ~h;
    }
    n !== 0 && Pu(t, n, e);
  }
  function dr() {
    return (Yt & 6) === 0 ? (fu(0), !1) : !0;
  }
  function hf() {
    if (Mt !== null) {
      if (Lt === 0)
        var t = Mt.return;
      else
        t = Mt, Jn = Fl = null, Ss(t), Za = null, Ji = 0, t = Mt;
      for (; t !== null; )
        fg(t.alternate, t), t = t.return;
      Mt = null;
    }
  }
  function li(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, nS(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Hn = 0, hf(), Gt = t, Mt = n = Kn(t.current, null), Dt = e, Lt = 0, Ze = null, _l = !1, Fa = Xl(t, e), cf = !1, Wa = Ge = or = ca = wl = Wt = 0, Ue = cu = null, sf = !1, tl = zi(t, e), So(), n;
  }
  function Zg(t, e) {
    Nt = null, ft.H = Qo, e === Xa || e === Oo ? (e = Ih(), Lt = 3) : e === os ? (e = Ih(), Lt = 4) : Lt = e === Us ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ze = e, Mt === null && (Wt = 1, Ko(
      t,
      Pe(e, t.current)
    ));
  }
  function Gg() {
    var t = ge.current;
    return t === null ? !0 : (Dt & 4194048) === Dt ? be === null : (Dt & 62914560) === Dt || (Dt & 536870912) !== 0 ? t === be : !1;
  }
  function Qg() {
    var t = ft.H;
    return ft.H = Qo, t === null ? Qo : t;
  }
  function Kg() {
    var t = ft.A;
    return ft.A = Ax, t;
  }
  function hr() {
    Wt = 4, _l || (Dt & 4194048) !== Dt && ge.current !== null || (Fa = !0), (wl & 134217727) === 0 && (ca & 134217727) === 0 || Gt === null || Tl(
      Gt,
      Dt,
      Ge,
      !1
    );
  }
  function gf(t, e, n) {
    var a = Yt;
    Yt |= 2;
    var u = Qg(), o = Kg();
    (Gt !== t || Dt !== e) && (sr = null, li(t, e)), e = !1;
    var h = Wt;
    t: do
      try {
        if (Lt !== 0 && Mt !== null) {
          var S = Mt, M = Ze;
          switch (Lt) {
            case 8:
              hf(), h = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var Z = Lt;
              if (Lt = 0, Ze = null, ai(t, S, M, Z), n && Fa) {
                h = 0;
                break t;
              }
              break;
            default:
              Z = Lt, Lt = 0, Ze = null, ai(t, S, M, Z);
          }
        }
        Rx(), h = Wt;
        break;
      } catch (W) {
        Zg(t, W);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Jn = Fl = null, Yt = a, ft.H = u, ft.A = o, Mt === null && (Gt = null, Dt = 0, So()), h;
  }
  function Rx() {
    for (; Mt !== null; ) $g(Mt);
  }
  function Hx(t, e) {
    var n = Yt;
    Yt |= 2;
    var a = Qg(), u = Kg();
    Gt !== t || Dt !== e ? (sr = null, cr = _e() + 500, li(t, e)) : Fa = Xl(
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
                    var M = S.sibling;
                    if (M !== null) Mt = M;
                    else {
                      var Z = S.return;
                      Z !== null ? (Mt = Z, gr(Z)) : Mt = null;
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
              hf(), Wt = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        Ux();
        break;
      } catch (W) {
        Zg(t, W);
      }
    while (!0);
    return Jn = Fl = null, ft.H = a, ft.A = u, Yt = n, Mt !== null ? 0 : (Gt = null, Dt = 0, So(), Wt);
  }
  function Ux() {
    for (; Mt !== null && !gc(); )
      $g(Mt);
  }
  function $g(t) {
    var e = cg(t.alternate, t, tl);
    t.memoizedProps = t.pendingProps, e === null ? gr(t) : Mt = e;
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
        Ss(e);
        var a = e;
        a === se && (zt ? (To(a), a.tag === 5 && a.stateNode != null && (Qt = a.stateNode)) : (To(a), zt = !0));
      default:
        fg(n, e), e = Mt = Bh(e, tl), e = cg(n, e, tl);
    }
    t.memoizedProps = t.pendingProps, e === null ? gr(t) : Mt = e;
  }
  function ai(t, e, n, a) {
    Jn = Fl = null, Ss(e), Za = null, Ji = 0;
    var u = e.return;
    try {
      if (Ex(
        t,
        u,
        e,
        n,
        Dt
      )) {
        Wt = 1, Ko(
          t,
          Pe(n, t.current)
        ), Mt = null;
        return;
      }
    } catch (o) {
      if (u !== null) throw Mt = u, o;
      Wt = 1, Ko(
        t,
        Pe(n, t.current)
      ), Mt = null;
      return;
    }
    e.flags & 32768 ? (zt || a === 1 ? t = !0 : Fa || (Dt & 536870912) !== 0 ? t = !1 : (_l = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), kg(e, t)) : gr(e);
  }
  function gr(t) {
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
  function Ig(t, e, n, a, u, o, h, S, M, Z, W, it) {
    t.cancelPendingCommit = null;
    do
      mr();
    while (kt !== 0);
    if ((Yt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      t === Gt && (Mt = Gt = null, Dt = 0), sa = e, hn = t, Hn = n, df = u, Vg = a, jx(
        t,
        e,
        n,
        h,
        S,
        M,
        it
      );
    }
  }
  function jx(t, e, n, a, u, o, h) {
    var S = e.lanes | e.childLanes;
    if (ff = S, S |= Jc, _c(
      t,
      n,
      S,
      a,
      u,
      o
    ), ti = null, (n & 335544064) === n ? (ei = sx(t), a = 10262) : (ei = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Xx(ba, function() {
      return pf(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), tr = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = ft.T, ft.T = null, u = dt.p, dt.p = 2, o = Yt, Yt |= 4;
      try {
        zx(t, e, n);
      } finally {
        Yt = o, dt.p = u, ft.T = a;
      }
    }
    kt = 1, tr ? Pa = rS(
      h,
      t.containerInfo,
      ei,
      mf,
      yf,
      Yx,
      vf,
      pf,
      Bx
    ) : (mf(), yf(), vf());
  }
  function Bx(t) {
    if (kt !== 0) {
      var e = hn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Yx() {
    kt === 3 && (kt = 0, Dg(sa, hn), kt = 4);
  }
  function mf() {
    if (kt === 1) {
      kt = 0;
      var t = hn, e = sa, n = Hn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = ft.T, ft.T = null;
        var u = dt.p;
        dt.p = 2;
        var o = Yt;
        Yt |= 4;
        try {
          uu = lr = !1, Ag(e, t, n), n = Af;
          var h = Ch(t.containerInfo), S = n.focusedElem, M = n.selectionRange;
          if (h !== S && S && S.ownerDocument && Th(
            S.ownerDocument.documentElement,
            S
          )) {
            if (M !== null && Zc(S)) {
              var Z = M.start, W = M.end;
              if (W === void 0 && (W = Z), "selectionStart" in S)
                S.selectionStart = Z, S.selectionEnd = Math.min(
                  W,
                  S.value.length
                );
              else {
                var it = S.ownerDocument || document, q = it && it.defaultView || window;
                if (q.getSelection) {
                  var J = q.getSelection(), gt = S.textContent.length, vt = Math.min(M.start, gt), Tt = M.end === void 0 ? vt : Math.min(M.end, gt);
                  !J.extend && vt > Tt && (h = Tt, Tt = vt, vt = h);
                  var X = Nh(
                    S,
                    vt
                  ), H = Nh(
                    S,
                    Tt
                  );
                  if (X && H && (J.rangeCount !== 1 || J.anchorNode !== X.node || J.anchorOffset !== X.offset || J.focusNode !== H.node || J.focusOffset !== H.offset)) {
                    var K = it.createRange();
                    K.setStart(X.node, X.offset), J.removeAllRanges(), vt > Tt ? (J.addRange(K), J.extend(H.node, H.offset)) : (K.setEnd(H.node, H.offset), J.addRange(K));
                  }
                }
              }
            }
            for (it = [], J = S; J = J.parentNode; )
              J.nodeType === 1 && it.push({
                element: J,
                left: J.scrollLeft,
                top: J.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < it.length; S++) {
              var at = it[S];
              at.element.scrollLeft = at.left, at.element.scrollTop = at.top;
            }
          }
          di = !!Mf, Af = Mf = null;
        } finally {
          Yt = o, dt.p = u, ft.T = a;
        }
      }
      t.current = e, kt = 2;
    }
  }
  function yf() {
    if (kt === 2) {
      kt = 0;
      var t = hn, e = sa, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = ft.T, ft.T = null;
        var a = dt.p;
        dt.p = 2;
        var u = Yt;
        Yt |= 4;
        try {
          wg(t, e.alternate, e);
        } finally {
          Yt = u, dt.p = a, ft.T = n;
        }
      }
      kt = 3;
    }
  }
  function vf() {
    if (kt === 4 || kt === 3) {
      kt = 0;
      var t = Pa;
      Pa = null, mc();
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
        n = ft.T, o = dt.p, dt.p = 2, ft.T = null;
        try {
          for (var h = e.onRecoverableError, S = 0; S < u.length; S++) {
            var M = u[S];
            h(M.value, {
              componentStack: M.stack
            });
          }
        } finally {
          ft.T = n, dt.p = o;
        }
      }
      if (u = ti, h = ei, ei = null, u !== null && (ti = null, h === null && (h = []), t !== null))
        for (M = 0; M < u.length; M++)
          n = (0, u[M])(
            h
          ), n !== void 0 && t.finished.finally(n);
      (Hn & 3) !== 0 && mr(), Un(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === fr ? su++ : (su = 0, fr = e) : (su = 0, fr = null), fu(0);
    }
  }
  function Fg(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Qi(e)));
  }
  function mr() {
    return Pa !== null && (Pa.skipTransition(), Pa = null), mf(), yf(), vf(), pf();
  }
  function pf() {
    if (kt !== 5) return !1;
    var t = hn, e = ff;
    ff = 0;
    var n = Oi(Hn), a = ft.T, u = dt.p;
    try {
      dt.p = 32 > n ? 32 : n, ft.T = null, n = df, df = null;
      var o = hn, h = Hn;
      if (kt = 0, sa = hn = null, Hn = 0, (Yt & 6) !== 0) throw Error(c(331));
      var S = Yt;
      if (Yt |= 4, jg(o.current), Rg(
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
      dt.p = u, ft.T = a, Fg(t, e);
    }
  }
  function Wg(t, e, n) {
    e = Pe(n, e), e = Hs(t.stateNode, e, 2), t = vl(t, e, 2), t !== null && (Zl(t, 2), Un(t));
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
  function xf(t, e, n) {
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
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Gt === t && (Dt & n) === n && ((Wt === 4 || Wt === 3 && (Dt & 62914560) === Dt && 300 > _e() - rr) && (Yt & 2) === 0 ? li(t, 0) : or |= n, Wa === Dt && (Wa = 0)), Un(t);
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
        throw Error(c(314));
    }
    a !== null && a.delete(e), Pg(t, n);
  }
  function Xx(t, e) {
    return Ti(t, e);
  }
  var ii = null, ui = null, Sf = !1, yr = !1, bf = !1, Cl = 0;
  function Un(t) {
    t !== ui && t.next === null && (ui === null ? ii = ui = t : ui = ui.next = t), yr = !0, Sf || (Sf = !0, Gx());
  }
  function fu(t, e) {
    if (!bf && yr) {
      bf = !0;
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
      bf = !1;
    }
  }
  function Zx() {
    tm();
  }
  function tm() {
    yr = Sf = !1;
    var t = 0;
    Cl !== 0 && eS() && (t = Cl);
    for (var e = _e(), n = null, a = ii; a !== null; ) {
      var u = a.next, o = em(a, e);
      o === 0 ? (a.next = null, n === null ? ii = u : n.next = u, u === null && (ui = n)) : (n = a, (t !== 0 || (o & 3) !== 0) && (yr = !0)), a = u;
    }
    kt !== 0 && kt !== 5 || fu(t), Cl !== 0 && (Cl = 0);
  }
  function em(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o; ) {
      var h = 31 - Ne(o), S = 1 << h, M = u[h];
      M === -1 ? ((S & n) === 0 || (S & a) !== 0) && (u[h] = Wu(S, e)) : M <= e && (t.expiredLanes |= S), o &= ~S;
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
          n = Iu;
          break;
        case 32:
          n = ba;
          break;
        case 268435456:
          n = Fu;
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
    if (mr() && t.callbackNode !== n)
      return null;
    var a = Dt;
    return a = Na(
      t,
      t === Gt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (qg(t, a, e), em(t, _e()), t.callbackNode != null && t.callbackNode === n ? nm.bind(null, t) : null);
  }
  function lm(t, e) {
    if (mr()) return null;
    qg(t, e, !0);
  }
  function Gx() {
    lS(function() {
      (Yt & 6) !== 0 ? Ti(
        ku,
        Zx
      ) : tm();
    });
  }
  function Ef() {
    if (Cl === 0) {
      var t = ta;
      t === 0 && (t = Ea, Ea <<= 1, (Ea & 261888) === 0 && (Ea = 256)), Cl = t;
    }
    return Cl;
  }
  function am(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : fo(t);
  }
  function Qx(t, e, n, a, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var o = am(
        (u[Se] || null).action
      ), h = a.submitter;
      h && (e = (e = h[Se] || null) ? am(e.formAction) : h.getAttribute("formAction"), e !== null && (o = e, h = null));
      var S = new yo(
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
                  var M = new FormData(u, h);
                  Ms(
                    n,
                    {
                      pending: !0,
                      data: M,
                      method: u.method,
                      action: o
                    },
                    null,
                    M
                  );
                }
              } else
                typeof o == "function" && (S.preventDefault(), M = new FormData(u, h), Ms(
                  n,
                  {
                    pending: !0,
                    data: M,
                    method: u.method,
                    action: o
                  },
                  o,
                  M
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var _f = 0; _f < $c.length; _f++) {
    var wf = $c[_f], Kx = wf.toLowerCase(), $x = wf[0].toUpperCase() + wf.slice(1);
    cn(
      Kx,
      "on" + $x
    );
  }
  cn(Ah, "onAnimationEnd"), cn(Oh, "onAnimationIteration"), cn(Dh, "onAnimationStart"), cn("dblclick", "onDoubleClick"), cn("focusin", "onFocus"), cn("focusout", "onBlur"), cn(nx, "onTransitionRun"), cn(lx, "onTransitionStart"), cn(ax, "onTransitionCancel"), cn(Rh, "onTransitionEnd"), ol("onMouseEnter", ["mouseout", "mouseover"]), ol("onMouseLeave", ["mouseout", "mouseover"]), ol("onPointerEnter", ["pointerout", "pointerover"]), ol("onPointerLeave", ["pointerout", "pointerover"]), rn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), rn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), rn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), rn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), rn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), rn(
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
            var S = a[h], M = S.instance, Z = S.currentTarget;
            if (S = S.listener, M !== o && u.isPropagationStopped())
              break t;
            o = S, u.currentTarget = Z;
            try {
              o(u);
            } catch (W) {
              xo(W);
            }
            u.currentTarget = null, o = M;
          }
        else
          for (h = 0; h < a.length; h++) {
            if (S = a[h], M = S.instance, Z = S.currentTarget, S = S.listener, M !== o && u.isPropagationStopped())
              break t;
            o = S, u.currentTarget = Z;
            try {
              o(u);
            } catch (W) {
              xo(W);
            }
            u.currentTarget = null, o = M;
          }
      }
    }
  }
  function At(t, e) {
    var n = e[ao];
    n === void 0 && (n = e[ao] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (um(e, t, 2, !1), n.add(a));
  }
  function Nf(t, e, n) {
    var a = 0;
    e && (a |= 4), um(
      n,
      t,
      a,
      e
    );
  }
  var vr = "_reactListening" + Math.random().toString(36).slice(2);
  function Tf(t) {
    if (!t[vr]) {
      t[vr] = !0, oo.forEach(function(n) {
        n !== "selectionchange" && (Jx.has(n) || Nf(n, !1, t), Nf(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[vr] || (e[vr] = !0, Nf("selectionchange", !1, e));
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
        u = Kf;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !Rc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function Cf(t, e, n, a, u) {
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
              var M = h.tag;
              if ((M === 3 || M === 4) && h.stateNode.containerInfo === u)
                return;
              h = h.return;
            }
          for (; S !== null; ) {
            if (h = Ln(S), h === null) return;
            if (M = h.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              a = o = h;
              continue t;
            }
            S = S.parentNode;
          }
        }
        a = a.return;
      }
    uh(function() {
      var Z = o, W = Oc(n), it = [];
      t: {
        var q = Hh.get(t);
        if (q !== void 0) {
          var J = yo, gt = t;
          switch (t) {
            case "keypress":
              if (go(n) === 0) break t;
            case "keydown":
            case "keyup":
              J = D1;
              break;
            case "focusin":
              gt = "focus", J = Bc;
              break;
            case "focusout":
              gt = "blur", J = Bc;
              break;
            case "beforeblur":
            case "afterblur":
              J = Bc;
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
              J = ch;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = S1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = B1;
              break;
            case Ah:
            case Oh:
            case Dh:
              J = _1;
              break;
            case Rh:
              J = V1;
              break;
            case "scroll":
            case "scrollend":
              J = p1;
              break;
            case "wheel":
              J = q1;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = N1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = fh;
              break;
            case "submit":
              J = U1;
              break;
            case "toggle":
            case "beforetoggle":
              J = Z1;
          }
          var vt = (e & 4) !== 0, Tt = !vt && (t === "scroll" || t === "scrollend"), X = vt ? q !== null ? q + "Capture" : null : q;
          vt = [];
          for (var H = Z, K; H !== null; ) {
            var at = H;
            if (K = at.stateNode, at = at.tag, at !== 5 && at !== 26 && at !== 27 || K === null || X === null || (at = Hi(H, X), at != null && vt.push(
              hu(H, at, K)
            )), Tt) break;
            H = H.return;
          }
          0 < vt.length && (q = new J(
            q,
            gt,
            null,
            n,
            W
          ), it.push({ event: q, listeners: vt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (J = t === "mouseover" || t === "pointerover", q = t === "mouseout" || t === "pointerout", J && n !== Ac && (gt = n.relatedTarget || n.fromElement) && (Ln(gt) || gt[il]))
            break t;
          (q || J) && (gt = W.window === W ? W : (J = W.ownerDocument) ? J.defaultView || J.parentWindow : window, q ? (J = n.relatedTarget || n.toElement, q = Z, J = J ? Ln(J) : null, J !== null && (Tt = f(J), vt = J.tag, J !== Tt || vt !== 5 && vt !== 27 && vt !== 6) && (J = null)) : (q = null, J = Z), q !== J && (vt = ch, at = "onMouseLeave", X = "onMouseEnter", H = "mouse", (t === "pointerout" || t === "pointerover") && (vt = fh, at = "onPointerLeave", X = "onPointerEnter", H = "pointer"), Tt = q == null ? gt : Ql(q), K = J == null ? gt : Ql(J), gt = new vt(
            at,
            H + "leave",
            q,
            n,
            W
          ), gt.target = Tt, gt.relatedTarget = K, at = null, Ln(W) === Z && (vt = new vt(
            X,
            H + "enter",
            J,
            n,
            W
          ), vt.target = K, vt.relatedTarget = Tt, at = vt), Tt = at, vt = q && J ? U(
            q,
            J,
            kx
          ) : null, q !== null && om(
            it,
            gt,
            q,
            vt,
            !1
          ), J !== null && Tt !== null && om(
            it,
            Tt,
            J,
            vt,
            !0
          )));
        }
        t: {
          if (q = Z ? Ql(Z) : window, J = q.nodeName && q.nodeName.toLowerCase(), J === "select" || J === "input" && q.type === "file")
            var yt = xh;
          else if (vh(q))
            if (Sh)
              yt = P1;
            else {
              yt = F1;
              var Rt = I1;
            }
          else
            J = q.nodeName, !J || J.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? Z && Mc(Z.elementType) && (yt = xh) : yt = W1;
          if (yt && (yt = yt(t, Z))) {
            ph(
              it,
              yt,
              n,
              W
            );
            break t;
          }
          Rt && Rt(t, q, Z);
        }
        switch (Rt = Z ? Ql(Z) : window, t) {
          case "focusin":
            (vh(Rt) || Rt.contentEditable === "true") && (Ha = Rt, Gc = Z, Xi = null);
            break;
          case "focusout":
            Xi = Gc = Ha = null;
            break;
          case "mousedown":
            Qc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qc = !1, zh(it, n, W);
            break;
          case "selectionchange":
            if (ex) break;
          case "keydown":
          case "keyup":
            zh(it, n, W);
        }
        var St;
        if (Vc)
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
        bt && (dh && n.locale !== "ko" && (Ra || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && Ra && (St = oh()) : (rl = W, Hc = "value" in rl ? rl.value : rl.textContent, Ra = !0)), Rt = pr(Z, bt), 0 < Rt.length && (bt = new sh(
          bt,
          t,
          null,
          n,
          W
        ), it.push({ event: bt, listeners: Rt }), St ? bt.data = St : (St = yh(n), St !== null && (bt.data = St)))), (St = Q1 ? K1(t, n) : $1(t, n)) && (bt = pr(Z, "onBeforeInput"), 0 < bt.length && (Rt = new sh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          W
        ), it.push({
          event: Rt,
          listeners: bt
        }), Rt.data = St)), Qx(
          it,
          t,
          Z,
          n,
          W
        );
      }
      im(it, e);
    });
  }
  function hu(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function pr(t, e) {
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
      var S = n, M = S.alternate, Z = S.stateNode;
      if (S = S.tag, M !== null && M === a) break;
      S !== 5 && S !== 26 && S !== 27 || Z === null || (M = Z, u ? (Z = Hi(n, o), Z != null && h.unshift(
        hu(n, Z, M)
      )) : u || (Z = Hi(n, o), Z != null && h.push(
        hu(n, Z, M)
      ))), n = n.return;
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var Ix = /\r\n?/g, Fx = /\u0000|\uFFFD/g;
  function rm(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ix, `
`).replace(Fx, "");
  }
  function cm(t, e) {
    return e = rm(e), rm(t) === e;
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
        so(t, "class", a);
        break;
      case "tabIndex":
        so(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        so(t, n, a);
        break;
      case "style":
        ah(t, a, o);
        return;
      case "data":
        if (e !== "object") {
          so(t, "data", a);
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
        a = fo(a), t.setAttribute(n, a);
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
        a = fo(a), t.setAttribute(n, a);
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
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (u.children != null) throw Error(c(60));
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
        n = fo(a), t.setAttributeNS(
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
    Bt = !0;
  }
  function zf(t, e, n, a, u, o) {
    switch (n) {
      case "style":
        ah(t, a, o);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (u.children != null) throw Error(c(60));
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
        if (!ro.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), o = n.slice(2, u ? n.length - 7 : void 0), e = t[Se] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(o, e, u), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(o, a, u);
              break t;
            }
            Bt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : co(t, n, a);
          }
        return;
    }
    Bt = !0;
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
                  throw Error(c(137, e));
                default:
                  Xt(t, e, o, h, n, null);
              }
          }
        u && Xt(t, e, "srcSet", n.srcSet, n, null), a && Xt(t, e, "src", n.src, n, null);
        return;
      case "input":
        At("invalid", t);
        var S = o = h = u = null, M = null, Z = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var W = n[a];
            if (W != null)
              switch (a) {
                case "name":
                  u = W;
                  break;
                case "type":
                  h = W;
                  break;
                case "checked":
                  M = W;
                  break;
                case "defaultChecked":
                  Z = W;
                  break;
                case "value":
                  o = W;
                  break;
                case "defaultValue":
                  S = W;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (W != null)
                    throw Error(c(137, e));
                  break;
                default:
                  Xt(t, e, a, W, n, null);
              }
          }
        th(
          t,
          o,
          S,
          M,
          Z,
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
                if (S != null) throw Error(c(91));
                break;
              default:
                Xt(t, e, h, S, n, null);
            }
        nh(t, a, u, o);
        return;
      case "option":
        for (M in n)
          n.hasOwnProperty(M) && (a = n[M], a != null) && (M === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Xt(t, e, M, a, n, null));
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
        for (Z in n)
          if (n.hasOwnProperty(Z) && (a = n[Z], a != null))
            switch (Z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                Xt(t, e, Z, a, n, null);
            }
        return;
      default:
        if (Mc(e)) {
          for (W in n)
            n.hasOwnProperty(W) && (a = n[W], a !== void 0 && zf(
              t,
              e,
              W,
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
        var u = null, o = null, h = null, S = null, M = null, Z = null, W = null;
        for (J in n) {
          var it = n[J];
          if (n.hasOwnProperty(J) && it != null)
            switch (J) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = it;
              default:
                a.hasOwnProperty(J) || Xt(t, e, J, null, a, it);
            }
        }
        for (var q in a) {
          var J = a[q];
          if (it = n[q], a.hasOwnProperty(q) && (J != null || it != null))
            switch (q) {
              case "type":
                J !== it && (Bt = !0), o = J;
                break;
              case "name":
                J !== it && (Bt = !0), u = J;
                break;
              case "checked":
                J !== it && (Bt = !0), Z = J;
                break;
              case "defaultChecked":
                J !== it && (Bt = !0), W = J;
                break;
              case "value":
                J !== it && (Bt = !0), h = J;
                break;
              case "defaultValue":
                J !== it && (Bt = !0), S = J;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null)
                  throw Error(c(137, e));
                break;
              default:
                J !== it && Xt(
                  t,
                  e,
                  q,
                  J,
                  a,
                  it
                );
            }
        }
        Cc(
          t,
          h,
          S,
          M,
          Z,
          W,
          o,
          u
        );
        return;
      case "select":
        J = h = S = q = null;
        for (o in n)
          if (M = n[o], n.hasOwnProperty(o) && M != null)
            switch (o) {
              case "value":
                break;
              case "multiple":
                J = M;
              default:
                a.hasOwnProperty(o) || Xt(
                  t,
                  e,
                  o,
                  null,
                  a,
                  M
                );
            }
        for (u in a)
          if (o = a[u], M = n[u], a.hasOwnProperty(u) && (o != null || M != null))
            switch (u) {
              case "value":
                o !== M && (Bt = !0), q = o;
                break;
              case "defaultValue":
                o !== M && (Bt = !0), S = o;
                break;
              case "multiple":
                o !== M && (Bt = !0), h = o;
              default:
                o !== M && Xt(
                  t,
                  e,
                  u,
                  o,
                  a,
                  M
                );
            }
        e = S, n = h, a = J, q != null ? Ma(t, !!n, q, !1) : !!a != !!n && (e != null ? Ma(t, !!n, e, !0) : Ma(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        J = q = null;
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
                u !== o && (Bt = !0), q = u;
                break;
              case "defaultValue":
                u !== o && (Bt = !0), J = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(c(91));
                break;
              default:
                u !== o && Xt(t, e, h, u, a, o);
            }
        eh(t, q, J);
        return;
      case "option":
        for (var gt in n)
          q = n[gt], n.hasOwnProperty(gt) && q != null && !a.hasOwnProperty(gt) && (gt === "selected" ? t.selected = !1 : Xt(
            t,
            e,
            gt,
            null,
            a,
            q
          ));
        for (M in a)
          q = a[M], J = n[M], a.hasOwnProperty(M) && q !== J && (q != null || J != null) && (M === "selected" ? (q !== J && (Bt = !0), t.selected = q && typeof q != "function" && typeof q != "symbol") : Xt(
            t,
            e,
            M,
            q,
            a,
            J
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
        for (var vt in n)
          q = n[vt], n.hasOwnProperty(vt) && q != null && !a.hasOwnProperty(vt) && Xt(t, e, vt, null, a, q);
        for (Z in a)
          if (q = a[Z], J = n[Z], a.hasOwnProperty(Z) && q !== J && (q != null || J != null))
            switch (Z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(c(137, e));
                break;
              default:
                Xt(
                  t,
                  e,
                  Z,
                  q,
                  a,
                  J
                );
            }
        return;
      default:
        if (Mc(e)) {
          for (var Tt in n)
            q = n[Tt], n.hasOwnProperty(Tt) && q !== void 0 && !a.hasOwnProperty(Tt) && zf(
              t,
              e,
              Tt,
              void 0,
              a,
              q
            );
          for (W in a)
            q = a[W], J = n[W], !a.hasOwnProperty(W) || q === J || q === void 0 && J === void 0 || zf(
              t,
              e,
              W,
              q,
              a,
              J
            );
          return;
        }
    }
    for (var X in n)
      q = n[X], n.hasOwnProperty(X) && q != null && !a.hasOwnProperty(X) && Xt(t, e, X, null, a, q);
    for (it in a)
      q = a[it], J = n[it], !a.hasOwnProperty(it) || q === J || q == null && J == null || Xt(t, e, it, q, a, J);
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
            var M = n[a], Z = M.startTime;
            if (Z > S) break;
            var W = M.transferSize, it = M.initiatorType;
            W && sm(it) && (M = M.responseEnd, h += W * (M < S ? 1 : (S - Z) / (M - Z)));
          }
          if (--a, e += 8 * (o + h) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Mf = null, Af = null;
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
  function Of(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Df = null;
  function eS() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Df ? !1 : (Df = t, !0) : (Df = null, !1);
  }
  var Rf = typeof setTimeout == "function" ? setTimeout : void 0, nS = typeof clearTimeout == "function" ? clearTimeout : void 0, gm = typeof Promise == "function" ? Promise : void 0, mm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Rf, lS = typeof queueMicrotask == "function" ? queueMicrotask : typeof gm < "u" ? function(t) {
    return gm.resolve(null).then(t).catch(aS);
  } : Rf;
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
          qf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, qf(n);
          for (var o = n.firstChild; o; ) {
            var h = o.nextSibling, S = o.nodeName;
            o[Gl] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && o.rel.toLowerCase() === "stylesheet" || n.removeChild(o), o = h;
          }
        } else
          n === "body" && qf(t.ownerDocument.body);
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
  function Hf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return iS(e, n, t);
  }
  function uS(t) {
    return t.documentElement.clientHeight;
  }
  function oS(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function rS(t, e, n, a, u, o, h, S, M) {
    var Z = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var W = Z.startViewTransition({
        update: function() {
          var q = Z.defaultView, J = q.navigation && q.navigation.transition, gt = Z.fonts.status;
          a();
          var vt = [];
          if (gt === "loaded" && (uS(Z), Z.fonts.status === "loading" && vt.push(Z.fonts.ready)), gt = vt.length, t !== null)
            for (var Tt = t.suspenseyImages, X = 0, H = 0; H < Tt.length; H++) {
              var K = Tt[H];
              if (!K.complete) {
                var at = K.getBoundingClientRect();
                if (0 < at.bottom && 0 < at.right && at.top < q.innerHeight && at.left < q.innerWidth) {
                  if (X += Lm(K), X > br) {
                    vt.length = gt;
                    break;
                  }
                  K = new Promise(
                    oS.bind(K)
                  ), vt.push(K);
                }
              }
            }
          if (0 < vt.length)
            return q = Promise.race([
              Promise.all(vt),
              new Promise(function(yt) {
                return setTimeout(yt, 500);
              })
            ]).then(u, u), (J ? Promise.allSettled([J.finished, q]) : q).then(o, o);
          if (u(), J)
            return J.finished.then(
              o,
              o
            );
          o();
        },
        types: n
      });
      Z.__reactViewTransition = W;
      var it = [];
      return W.ready.then(
        function() {
          for (var q = Z.documentElement.getAnimations({
            subtree: !0
          }), J = 0; J < q.length; J++) {
            var gt = q[J], vt = gt.effect, Tt = vt.pseudoElement;
            if (Tt != null && Tt.startsWith("::view-transition")) {
              it.push(gt), gt = vt.getKeyframes();
              for (var X = Tt = void 0, H = !0, K = 0; K < gt.length; K++) {
                var at = gt[K], yt = at.width;
                if (Tt === void 0) Tt = yt;
                else if (Tt !== yt) {
                  H = !1;
                  break;
                }
                if (yt = at.height, X === void 0) X = yt;
                else if (X !== yt) {
                  H = !1;
                  break;
                }
                delete at.width, delete at.height, at.transform === "none" && delete at.transform;
              }
              H && Tt !== void 0 && X !== void 0 && (vt.setKeyframes(gt), H = getComputedStyle(
                vt.target,
                vt.pseudoElement
              ), H.width !== Tt || H.height !== X) && (H = gt[0], H.width = Tt, H.height = X, H = gt[gt.length - 1], H.width = Tt, H.height = X, vt.setKeyframes(gt));
            }
          }
          h();
        },
        function(q) {
          Z.__reactViewTransition === W && (Z.__reactViewTransition = null);
          try {
            typeof q == "object" && q !== null && q.name === "InvalidStateError" && (q.message === "View transition was skipped because document visibility state is hidden." || q.message === "Skipping view transition because document visibility state has become hidden." || q.message === "Skipping view transition because viewport size changed." || q.message === "Transition was aborted because of invalid state") && (q = null), q !== null && M(q);
          } finally {
            a(), u(), h();
          }
        }
      ), W.finished.finally(function() {
        for (var q = 0; q < it.length; q++)
          it[q].cancel();
        Z.__reactViewTransition === W && (Z.__reactViewTransition = null), S();
      }), W;
    } catch {
      return a(), u(), h(), null;
    }
  }
  function fa(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  fa.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : j({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
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
        n != null && typeof n != "boolean" && n.once === !0 && (S = function(M) {
          h.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, M) : e.handleEvent(M);
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
          cS,
          t,
          S,
          a
        );
      }
      this._eventListeners = o;
    }
  };
  function cS(t, e, n, a) {
    return T(t).addEventListener(
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
    return T(t).removeEventListener(
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
    e = T(e);
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
    return t.tag === 6 ? !1 : (t = T(t), ES(t, e));
  }
  Ke.prototype.focusLast = function(t) {
    var e = [];
    m(
      this._fragmentFiber.child,
      !0,
      Uf,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !_m(e[n], t); n--) ;
  };
  function Uf(t, e) {
    return e.push(t), !1;
  }
  Ke.prototype.blur = function() {
    var t = y(
      this._fragmentFiber
    );
    t !== null && (t = T(t), t = gu(t).activeElement, t !== null && m(
      this._fragmentFiber.child,
      !1,
      fS,
      t,
      void 0,
      void 0
    ));
  };
  function fS(t, e) {
    return t.tag === 6 ? !1 : (t = T(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
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
    return t.tag === 6 || (t = T(t), e.observe(t)), !1;
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
    return t.tag === 6 || (t = T(t), e.unobserve(t)), !1;
  }
  var gn = [], jf = !1;
  function gS(t, e, n) {
    gn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), jf || (jf = !0, _S(function() {
      jf = !1;
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
      t = T(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Ke.prototype.getRootNode = function(t) {
    var e = y(
      this._fragmentFiber
    );
    return e === null ? this : T(e).getRootNode(t);
  }, Ke.prototype.compareDocumentPosition = function(t) {
    var e = y(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    m(
      this._fragmentFiber.child,
      !1,
      Uf,
      n,
      void 0,
      void 0
    );
    var a = T(e);
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
      return n === t ? u = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = E(e)[1], n === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (t = T(n).compareDocumentPosition(
        t
      ), u = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = T(n[0]), u = T(n[n.length - 1]);
    var o = b(this._fragmentFiber) ? e.parentElement : a;
    if (o == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = o.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, o = o.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var h = e.compareDocumentPosition(t), S = u.compareDocumentPosition(t), M = h & Node.DOCUMENT_POSITION_CONTAINED_BY || S & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return S = a && o && h & Node.DOCUMENT_POSITION_FOLLOWING && S & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || o && u === t || M || S ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !o && u === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : h, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || yS(
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!o) && !(e = o === n) && (e = U(
      n,
      o,
      Y
    ), e === null ? e = !1 : (m(
      e,
      !0,
      w,
      o,
      n
    ), o = N, N = null, e = o !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!o) && !(e = o === a) && (e = U(
      a,
      o,
      Y
    ), e === null ? e = !1 : (m(
      e,
      !0,
      O,
      o,
      a
    ), o = N, V = N = null, e = o !== null)), e) : !1;
  }
  function wm(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Ke.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(c(566));
    var e = [];
    m(
      this._fragmentFiber.child,
      !1,
      Uf,
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
        t = T(a), wm(t, n);
        return;
      }
      if (a = T(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var u = e[a];
      u.tag === 6 ? (u = T(u), wm(u, n)) : T(u).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function vS(t, e) {
    return t = T(t), Nm(t, e), !1;
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
        var M = gn[S];
        (M.fragmentInstance !== e || M.observer !== o || M.instance !== t) && (gn[h++] = M);
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
  function Yf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Vf(t) {
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
  var Lf = null;
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
        if (t = e.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function Om(t, e, n) {
    for (var a in n) {
      var u = n[a];
      n.hasOwnProperty(a) && u != null && Xt(t, e, a, null, Wx, u);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Nn && (t.onclick = null), za(t);
  }
  function qf(t) {
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
  var el = dt.d;
  dt.d = {
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
    var t = el.f(), e = dr();
    return t || e;
  }
  function NS(t) {
    var e = ul(t);
    e !== null && e.tag === 5 && e.type === "form" ? H0(e) : el.r(t);
  }
  var ri = typeof document > "u" ? null : document;
  function Rm(t, e, n) {
    var a = ri;
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
    var a = ri;
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
          o = ci(t);
          break;
        case "script":
          o = si(t);
      }
      if (!(un.has(o) || (t = j(
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
    var n = ri;
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
      if (!un.has(o) && (t = j({ rel: "modulepreload", href: t }, e), un.set(o, t), n.querySelector(u) === null)) {
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
    var a = ri;
    if (a && t) {
      var u = qn(a).hoistableStyles, o = ci(t);
      e = e || "default";
      var h = u.get(o);
      if (!h) {
        var S = { loading: 0, preload: null };
        if (h = a.querySelector(
          yu(o)
        ))
          S.loading = 5;
        else {
          t = j(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = un.get(o)) && Xf(t, n);
          var M = h = a.createElement("link");
          ee(M), ve(M, "link", t), M._p = new Promise(function(Z, W) {
            M.onload = Z, M.onerror = W;
          }), M.addEventListener("load", function() {
            S.loading |= 1;
          }), M.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, xr(h, e, a);
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
    var n = ri;
    if (n && t) {
      var a = qn(n).hoistableScripts, u = si(t), o = a.get(u);
      o || (o = n.querySelector(vu(u)), o || (t = j({ src: t, async: !0 }, e), (e = un.get(u)) && Zf(t, e), o = n.createElement("script"), ee(o), ve(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, a.set(u, o));
    }
  }
  function DS(t, e) {
    el.M(t, e);
    var n = ri;
    if (n && t) {
      var a = qn(n).hoistableScripts, u = si(t), o = a.get(u);
      o || (o = n.querySelector(vu(u)), o || (t = j({ src: t, async: !0, type: "module" }, e), (e = un.get(u)) && Zf(t, e), o = n.createElement("script"), ee(o), ve(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, a.set(u, o));
    }
  }
  function Hm(t, e, n, a) {
    var u = (u = ce.current) ? mu(u) : null;
    if (!u) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = ci(n.href), e = qn(
          u
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ci(n.href);
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
            throw Error(c(528, ""));
          return h;
        }
        if (e && a !== null)
          throw Error(c(529, ""));
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
        throw Error(c(444, t));
    }
  }
  function ci(t) {
    return 'href="' + Fe(t) + '"';
  }
  function yu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Um(t) {
    return j({}, t, {
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
  function jm(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Fe(n.href) + '"]'
          );
          if (a)
            return e.instance = a, ee(a), a;
          var u = j({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), ee(a), ve(a, "style", u), xr(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          u = ci(n.href);
          var o = t.querySelector(
            yu(u)
          );
          if (o)
            return e.state.loading |= 4, e.instance = o, ee(o), o;
          a = Um(n), (u = un.get(u)) && Xf(a, u), o = (t.ownerDocument || t).createElement("link"), ee(o);
          var h = o;
          return h._p = new Promise(function(S, M) {
            h.onload = S, h.onerror = M;
          }), ve(o, "link", a), e.state.loading |= 4, xr(o, n.precedence, t), e.instance = o;
        case "script":
          return o = si(n.src), (u = t.querySelector(
            vu(o)
          )) ? (e.instance = u, ee(u), u) : (a = n, (u = un.get(o)) && (a = j({}, n), Zf(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), ee(u), ve(u, "link", a), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, xr(a, n.precedence, t));
    return e.instance;
  }
  function xr(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, o = u, h = 0; h < a.length; h++) {
      var S = a[h];
      if (S.dataset.precedence === e) o = S;
      else if (o !== u) break;
    }
    o ? o.parentNode.insertBefore(t, o.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function Xf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Zf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Sr = null;
  function Bm(t, e, n) {
    if (Sr === null) {
      var a = /* @__PURE__ */ new Map(), u = Sr = /* @__PURE__ */ new Map();
      u.set(n, a);
    } else
      u = Sr, a = u.get(n), a || (a = /* @__PURE__ */ new Map(), u.set(n, a));
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
  function Gf(t, e, n) {
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
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Lm(e), t.suspenseyImages.push(e)), t = BS.bind(t), e.decode().then(t, t));
  }
  function US(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = ci(a.href), o = e.querySelector(
          yu(u)
        );
        if (o) {
          e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = pu.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = o, ee(o);
          return;
        }
        o = e.ownerDocument || e, a = Um(a), (u = un.get(u)) && Xf(a, u), o = o.createElement("link"), ee(o);
        var h = o;
        h._p = new Promise(function(S, M) {
          h.onload = S, h.onerror = M;
        }), ve(o, "link", a), n.instance = o;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = pu.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var br = 0;
  function jS(t, e) {
    return t.stylesheets && t.count === 0 && _r(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && _r(t, t.stylesheets), t.unsuspend) {
          var o = t.unsuspend;
          t.unsuspend = null, o();
        }
      }, 6e4 + e);
      0 < t.imgBytes && br === 0 && (br = 62500 * tS());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && _r(t, t.stylesheets), t.unsuspend)) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        },
        (t.imgBytes > br ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Xm(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) _r(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function pu() {
    this.count--, Xm(this);
  }
  function BS() {
    this.imgCount--, Xm(this);
  }
  var Er = null;
  function _r(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Er = /* @__PURE__ */ new Map(), e.forEach(YS, t), Er = null, pu.call(t));
  }
  function YS(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Er.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Er.set(t, n);
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
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: xt,
    _currentValue2: xt,
    _threadCount: 0
  };
  function VS(t, e, n, a, u, o, h, S, M) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ai(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ai(0), this.hiddenUpdates = Ai(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = o, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = M, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zm(t, e, n, a, u, o, h, S, M, Z, W, it) {
    return t = new VS(
      t,
      e,
      n,
      h,
      M,
      Z,
      W,
      it,
      S
    ), e = 1, o === !0 && (e |= 24), o = De(3, null, null, e), t.current = o, o.stateNode = t, e = as(), e.refCount++, t.pooledCache = e, e.refCount++, o.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, rs(o), t;
  }
  function Gm(t) {
    return t ? (t = Ba, t) : Ba;
  }
  function Qm(t, e, n, a, u, o) {
    u = Gm(u), a.context === null ? a.context = u : a.pendingContext = u, a = yl(e), a.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (a.callback = o), n = vl(t, a, e), n !== null && (je(n, t, e), ki(n, t, e));
  }
  function Km(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Qf(t, e) {
    Km(t, e), (t = t.alternate) && Km(t, e);
  }
  function $m(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Jl(t, 67108864);
      e !== null && je(e, t, 67108864), Qf(t, 67108864);
    }
  }
  function Jm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Qe();
      e = Ta(e);
      var n = Jl(t, e);
      n !== null && je(n, t, e), Qf(t, e);
    }
  }
  var di = !0;
  function LS(t, e, n, a) {
    var u = ft.T;
    ft.T = null;
    var o = dt.p;
    try {
      dt.p = 2, Kf(t, e, n, a);
    } finally {
      dt.p = o, ft.T = u;
    }
  }
  function qS(t, e, n, a) {
    var u = ft.T;
    ft.T = null;
    var o = dt.p;
    try {
      dt.p = 8, Kf(t, e, n, a);
    } finally {
      dt.p = o, ft.T = u;
    }
  }
  function Kf(t, e, n, a) {
    if (di) {
      var u = $f(a);
      if (u === null)
        Cf(
          t,
          e,
          a,
          wr,
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
                      var M = 1 << 31 - Ne(h);
                      S.entanglements[1] |= M, h &= ~M;
                    }
                    Un(o), (Yt & 6) === 0 && (cr = _e() + 500, fu(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = Jl(o, 2), S !== null && je(S, o, 2), dr(), Qf(o, 2);
            }
          if (o = $f(a), o === null && Cf(
            t,
            e,
            a,
            wr,
            n
          ), o === u) break;
          u = o;
        }
        u !== null && a.stopPropagation();
      } else
        Cf(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function $f(t) {
    return t = Oc(t), Jf(t);
  }
  var wr = null;
  function Jf(t) {
    if (wr = null, t = Ln(t), t !== null) {
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
    return wr = t, null;
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
        switch (yc()) {
          case ku:
            return 2;
          case Iu:
            return 8;
          case ba:
          case vc:
            return 32;
          case Fu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kf = !1, Ml = null, Al = null, Ol = null, xu = /* @__PURE__ */ new Map(), Su = /* @__PURE__ */ new Map(), Dl = [], XS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
            t.blockedOn = e, lo(t.priority, function() {
              Jm(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = g(n), e !== null) {
            t.blockedOn = e, lo(t.priority, function() {
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
  function Nr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = $f(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Ac = a, n.target.dispatchEvent(a), Ac = null;
      } else
        return e = ul(n), e !== null && $m(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Wm(t, e, n) {
    Nr(t) && n.delete(e);
  }
  function GS() {
    kf = !1, Ml !== null && Nr(Ml) && (Ml = null), Al !== null && Nr(Al) && (Al = null), Ol !== null && Nr(Ol) && (Ol = null), xu.forEach(Wm), Su.forEach(Wm);
  }
  function Tr(t, e) {
    t.blockedOn === e && (t.blockedOn = null, kf || (kf = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      GS
    )));
  }
  var Cr = null;
  function Pm(t) {
    Cr !== t && (Cr = t, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        Cr === t && (Cr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], u = t[e + 2];
          if (typeof a != "function") {
            if (Jf(a || n) === null)
              continue;
            break;
          }
          var o = ul(n);
          o !== null && (t.splice(e, 3), e -= 3, Ms(
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
    function e(M) {
      return Tr(M, t);
    }
    Ml !== null && Tr(Ml, t), Al !== null && Tr(Al, t), Ol !== null && Tr(Ol, t), xu.forEach(e), Su.forEach(e);
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
            else if (Jf(u) !== null) continue;
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
  function If(t) {
    this._internalRoot = t;
  }
  zr.prototype.render = If.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var n = e.current, a = Qe();
    Qm(n, a, t, e, null, null);
  }, zr.prototype.unmount = If.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Qm(t.current, 2, null, t, null, null), dr(), e[il] = null;
    }
  };
  function zr(t) {
    this._internalRoot = t;
  }
  zr.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = no();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Dl.length && e !== 0 && e < Dl[n].priority; n++) ;
      Dl.splice(n, 0, t), n === 0 && Fm(t);
    }
  };
  var ey = i.version;
  if (ey !== "19.3.0")
    throw Error(
      c(
        527,
        ey,
        "19.3.0"
      )
    );
  dt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = p(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var QS = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ft,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mr.isDisabled && Mr.supportsFiber)
      try {
        ql = Mr.inject(
          QS
        ), we = Mr;
      } catch {
      }
  }
  return _u.createRoot = function(t, e) {
    if (!s(t)) throw Error(c(299));
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
    ), t[il] = e.current, Tf(t), new If(e);
  }, _u.hydrateRoot = function(t, e, n) {
    if (!s(t)) throw Error(c(299));
    var a = !1, u = "", o = G0, h = Q0, S = K0, M = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (S = n.onRecoverableError), n.formState !== void 0 && (M = n.formState)), e = Zm(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      u,
      M,
      o,
      h,
      S,
      ty
    ), e.context = Gm(null), n = e.current, a = Qe(), a = Ta(a), u = yl(a), u.callback = null, vl(n, u, a), n = a, e.current.lanes = n, Zl(e, n), Un(e), t[il] = e.current, Tf(t), new zr(e);
  }, _u.version = "19.3.0", _u;
}
var fy;
function tb() {
  if (fy) return Wf.exports;
  fy = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), Wf.exports = PS(), Wf.exports;
}
var eb = tb(), tt = Lu();
const nb = /* @__PURE__ */ _v(tt);
function ue(l) {
  if (typeof l == "string" || typeof l == "number") return "" + l;
  let i = "";
  if (Array.isArray(l))
    for (let r = 0, c; r < l.length; r++)
      (c = ue(l[r])) !== "" && (i += (i && " ") + c);
  else
    for (let r in l)
      l[r] && (i += (i && " ") + r);
  return i;
}
var lb = { value: () => {
} };
function nc() {
  for (var l = 0, i = arguments.length, r = {}, c; l < i; ++l) {
    if (!(c = arguments[l] + "") || c in r || /[\s.]/.test(c)) throw new Error("illegal type: " + c);
    r[c] = [];
  }
  return new Lr(r);
}
function Lr(l) {
  this._ = l;
}
function ab(l, i) {
  return l.trim().split(/^|\s+/).map(function(r) {
    var c = "", s = r.indexOf(".");
    if (s >= 0 && (c = r.slice(s + 1), r = r.slice(0, s)), r && !i.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: c };
  });
}
Lr.prototype = nc.prototype = {
  constructor: Lr,
  on: function(l, i) {
    var r = this._, c = ab(l + "", r), s, f = -1, d = c.length;
    if (arguments.length < 2) {
      for (; ++f < d; ) if ((s = (l = c[f]).type) && (s = ib(r[s], l.name))) return s;
      return;
    }
    if (i != null && typeof i != "function") throw new Error("invalid callback: " + i);
    for (; ++f < d; )
      if (s = (l = c[f]).type) r[s] = dy(r[s], l.name, i);
      else if (i == null) for (s in r) r[s] = dy(r[s], l.name, null);
    return this;
  },
  copy: function() {
    var l = {}, i = this._;
    for (var r in i) l[r] = i[r].slice();
    return new Lr(l);
  },
  call: function(l, i) {
    if ((s = arguments.length - 2) > 0) for (var r = new Array(s), c = 0, s, f; c < s; ++c) r[c] = arguments[c + 2];
    if (!this._.hasOwnProperty(l)) throw new Error("unknown type: " + l);
    for (f = this._[l], c = 0, s = f.length; c < s; ++c) f[c].value.apply(i, r);
  },
  apply: function(l, i, r) {
    if (!this._.hasOwnProperty(l)) throw new Error("unknown type: " + l);
    for (var c = this._[l], s = 0, f = c.length; s < f; ++s) c[s].value.apply(i, r);
  }
};
function ib(l, i) {
  for (var r = 0, c = l.length, s; r < c; ++r)
    if ((s = l[r]).name === i)
      return s.value;
}
function dy(l, i, r) {
  for (var c = 0, s = l.length; c < s; ++c)
    if (l[c].name === i) {
      l[c] = lb, l = l.slice(0, c).concat(l.slice(c + 1));
      break;
    }
  return r != null && l.push({ name: i, value: r }), l;
}
var yd = "http://www.w3.org/1999/xhtml";
const hy = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: yd,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function lc(l) {
  var i = l += "", r = i.indexOf(":");
  return r >= 0 && (i = l.slice(0, r)) !== "xmlns" && (l = l.slice(r + 1)), hy.hasOwnProperty(i) ? { space: hy[i], local: l } : l;
}
function ub(l) {
  return function() {
    var i = this.ownerDocument, r = this.namespaceURI;
    return r === yd && i.documentElement.namespaceURI === yd ? i.createElement(l) : i.createElementNS(r, l);
  };
}
function ob(l) {
  return function() {
    return this.ownerDocument.createElementNS(l.space, l.local);
  };
}
function Nv(l) {
  var i = lc(l);
  return (i.local ? ob : ub)(i);
}
function rb() {
}
function Ad(l) {
  return l == null ? rb : function() {
    return this.querySelector(l);
  };
}
function cb(l) {
  typeof l != "function" && (l = Ad(l));
  for (var i = this._groups, r = i.length, c = new Array(r), s = 0; s < r; ++s)
    for (var f = i[s], d = f.length, g = c[s] = new Array(d), x, p, v = 0; v < d; ++v)
      (x = f[v]) && (p = l.call(x, x.__data__, v, f)) && ("__data__" in x && (p.__data__ = x.__data__), g[v] = p);
  return new Je(c, this._parents);
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
  for (var i = this._groups, r = i.length, c = [], s = [], f = 0; f < r; ++f)
    for (var d = i[f], g = d.length, x, p = 0; p < g; ++p)
      (x = d[p]) && (c.push(l.call(x, x.__data__, p, d)), s.push(x));
  return new Je(c, s);
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
  for (var i = this._groups, r = i.length, c = new Array(r), s = 0; s < r; ++s)
    for (var f = i[s], d = f.length, g = c[s] = [], x, p = 0; p < d; ++p)
      (x = f[p]) && l.call(x, x.__data__, p, f) && g.push(x);
  return new Je(c, this._parents);
}
function Mv(l) {
  return new Array(l.length);
}
function _b() {
  return new Je(this._enter || this._groups.map(Mv), this._parents);
}
function Qr(l, i) {
  this.ownerDocument = l.ownerDocument, this.namespaceURI = l.namespaceURI, this._next = null, this._parent = l, this.__data__ = i;
}
Qr.prototype = {
  constructor: Qr,
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
function Nb(l, i, r, c, s, f) {
  for (var d = 0, g, x = i.length, p = f.length; d < p; ++d)
    (g = i[d]) ? (g.__data__ = f[d], c[d] = g) : r[d] = new Qr(l, f[d]);
  for (; d < x; ++d)
    (g = i[d]) && (s[d] = g);
}
function Tb(l, i, r, c, s, f, d) {
  var g, x, p = /* @__PURE__ */ new Map(), v = i.length, m = f.length, y = new Array(v), b;
  for (g = 0; g < v; ++g)
    (x = i[g]) && (y[g] = b = d.call(x, x.__data__, g, i) + "", p.has(b) ? s[g] = x : p.set(b, x));
  for (g = 0; g < m; ++g)
    b = d.call(l, f[g], g, f) + "", (x = p.get(b)) ? (c[g] = x, x.__data__ = f[g], p.delete(b)) : r[g] = new Qr(l, f[g]);
  for (g = 0; g < v; ++g)
    (x = i[g]) && p.get(y[g]) === x && (s[g] = x);
}
function Cb(l) {
  return l.__data__;
}
function zb(l, i) {
  if (!arguments.length) return Array.from(this, Cb);
  var r = i ? Tb : Nb, c = this._parents, s = this._groups;
  typeof l != "function" && (l = wb(l));
  for (var f = s.length, d = new Array(f), g = new Array(f), x = new Array(f), p = 0; p < f; ++p) {
    var v = c[p], m = s[p], y = m.length, b = Mb(l.call(v, v && v.__data__, p, c)), E = b.length, A = g[p] = new Array(E), T = d[p] = new Array(E), N = x[p] = new Array(y);
    r(v, m, A, T, N, b, i);
    for (var V = 0, w = 0, O, Y; V < E; ++V)
      if (O = A[V]) {
        for (V >= w && (w = V + 1); !(Y = T[w]) && ++w < E; ) ;
        O._next = Y || null;
      }
  }
  return d = new Je(d, c), d._enter = g, d._exit = x, d;
}
function Mb(l) {
  return typeof l == "object" && "length" in l ? l : Array.from(l);
}
function Ab() {
  return new Je(this._exit || this._groups.map(Mv), this._parents);
}
function Ob(l, i, r) {
  var c = this.enter(), s = this, f = this.exit();
  return typeof l == "function" ? (c = l(c), c && (c = c.selection())) : c = c.append(l + ""), i != null && (s = i(s), s && (s = s.selection())), r == null ? f.remove() : r(f), c && s ? c.merge(s).order() : s;
}
function Db(l) {
  for (var i = l.selection ? l.selection() : l, r = this._groups, c = i._groups, s = r.length, f = c.length, d = Math.min(s, f), g = new Array(s), x = 0; x < d; ++x)
    for (var p = r[x], v = c[x], m = p.length, y = g[x] = new Array(m), b, E = 0; E < m; ++E)
      (b = p[E] || v[E]) && (y[E] = b);
  for (; x < s; ++x)
    g[x] = r[x];
  return new Je(g, this._parents);
}
function Rb() {
  for (var l = this._groups, i = -1, r = l.length; ++i < r; )
    for (var c = l[i], s = c.length - 1, f = c[s], d; --s >= 0; )
      (d = c[s]) && (f && d.compareDocumentPosition(f) ^ 4 && f.parentNode.insertBefore(d, f), f = d);
  return this;
}
function Hb(l) {
  l || (l = Ub);
  function i(m, y) {
    return m && y ? l(m.__data__, y.__data__) : !m - !y;
  }
  for (var r = this._groups, c = r.length, s = new Array(c), f = 0; f < c; ++f) {
    for (var d = r[f], g = d.length, x = s[f] = new Array(g), p, v = 0; v < g; ++v)
      (p = d[v]) && (x[v] = p);
    x.sort(i);
  }
  return new Je(s, this._parents).order();
}
function Ub(l, i) {
  return l < i ? -1 : l > i ? 1 : l >= i ? 0 : NaN;
}
function jb() {
  var l = arguments[0];
  return arguments[0] = this, l.apply(null, arguments), this;
}
function Bb() {
  return Array.from(this);
}
function Yb() {
  for (var l = this._groups, i = 0, r = l.length; i < r; ++i)
    for (var c = l[i], s = 0, f = c.length; s < f; ++s) {
      var d = c[s];
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
  for (var i = this._groups, r = 0, c = i.length; r < c; ++r)
    for (var s = i[r], f = 0, d = s.length, g; f < d; ++f)
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
    var r = i.apply(this, arguments);
    r == null ? this.removeAttribute(l) : this.setAttribute(l, r);
  };
}
function $b(l, i) {
  return function() {
    var r = i.apply(this, arguments);
    r == null ? this.removeAttributeNS(l.space, l.local) : this.setAttributeNS(l.space, l.local, r);
  };
}
function Jb(l, i) {
  var r = lc(l);
  if (arguments.length < 2) {
    var c = this.node();
    return r.local ? c.getAttributeNS(r.space, r.local) : c.getAttribute(r);
  }
  return this.each((i == null ? r.local ? Zb : Xb : typeof i == "function" ? r.local ? $b : Kb : r.local ? Qb : Gb)(r, i));
}
function Av(l) {
  return l.ownerDocument && l.ownerDocument.defaultView || l.document && l || l.defaultView;
}
function kb(l) {
  return function() {
    this.style.removeProperty(l);
  };
}
function Ib(l, i, r) {
  return function() {
    this.style.setProperty(l, i, r);
  };
}
function Fb(l, i, r) {
  return function() {
    var c = i.apply(this, arguments);
    c == null ? this.style.removeProperty(l) : this.style.setProperty(l, c, r);
  };
}
function Wb(l, i, r) {
  return arguments.length > 1 ? this.each((i == null ? kb : typeof i == "function" ? Fb : Ib)(l, i, r ?? "")) : pi(this.node(), l);
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
    var r = i.apply(this, arguments);
    r == null ? delete this[l] : this[l] = r;
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
  for (var r = Od(l), c = -1, s = i.length; ++c < s; ) r.add(i[c]);
}
function Hv(l, i) {
  for (var r = Od(l), c = -1, s = i.length; ++c < s; ) r.remove(i[c]);
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
  var r = Ov(l + "");
  if (arguments.length < 2) {
    for (var c = Od(this.node()), s = -1, f = r.length; ++s < f; ) if (!c.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof i == "function" ? iE : i ? lE : aE)(r, i));
}
function oE() {
  this.textContent = "";
}
function rE(l) {
  return function() {
    this.textContent = l;
  };
}
function cE(l) {
  return function() {
    var i = l.apply(this, arguments);
    this.textContent = i ?? "";
  };
}
function sE(l) {
  return arguments.length ? this.each(l == null ? oE : (typeof l == "function" ? cE : rE)(l)) : this.node().textContent;
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
  var r = typeof l == "function" ? l : Nv(l), c = i == null ? SE : typeof i == "function" ? i : Ad(i);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), c.apply(this, arguments) || null);
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
    var r = "", c = i.indexOf(".");
    return c >= 0 && (r = i.slice(c + 1), i = i.slice(0, c)), { type: i, name: r };
  });
}
function AE(l) {
  return function() {
    var i = this.__on;
    if (i) {
      for (var r = 0, c = -1, s = i.length, f; r < s; ++r)
        f = i[r], (!l.type || f.type === l.type) && f.name === l.name ? this.removeEventListener(f.type, f.listener, f.options) : i[++c] = f;
      ++c ? i.length = c : delete this.__on;
    }
  };
}
function OE(l, i, r) {
  return function() {
    var c = this.__on, s, f = zE(i);
    if (c) {
      for (var d = 0, g = c.length; d < g; ++d)
        if ((s = c[d]).type === l.type && s.name === l.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = f, s.options = r), s.value = i;
          return;
        }
    }
    this.addEventListener(l.type, f, r), s = { type: l.type, name: l.name, value: i, listener: f, options: r }, c ? c.push(s) : this.__on = [s];
  };
}
function DE(l, i, r) {
  var c = ME(l + ""), s, f = c.length, d;
  if (arguments.length < 2) {
    var g = this.node().__on;
    if (g) {
      for (var x = 0, p = g.length, v; x < p; ++x)
        for (s = 0, v = g[x]; s < f; ++s)
          if ((d = c[s]).type === v.type && d.name === v.name)
            return v.value;
    }
    return;
  }
  for (g = i ? OE : AE, s = 0; s < f; ++s) this.each(g(c[s], i, r));
  return this;
}
function Uv(l, i, r) {
  var c = Av(l), s = c.CustomEvent;
  typeof s == "function" ? s = new s(i, r) : (s = c.document.createEvent("Event"), r ? (s.initEvent(i, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(i, !1, !1)), l.dispatchEvent(s);
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
function* jE() {
  for (var l = this._groups, i = 0, r = l.length; i < r; ++i)
    for (var c = l[i], s = 0, f = c.length, d; s < f; ++s)
      (d = c[s]) && (yield d);
}
var jv = [null];
function Je(l, i) {
  this._groups = l, this._parents = i;
}
function qu() {
  return new Je([[document.documentElement]], jv);
}
function BE() {
  return this;
}
Je.prototype = qu.prototype = {
  constructor: Je,
  select: cb,
  selectAll: hb,
  selectChild: vb,
  selectChildren: bb,
  filter: Eb,
  data: zb,
  enter: _b,
  exit: Ab,
  join: Ob,
  merge: Db,
  selection: BE,
  order: Rb,
  sort: Hb,
  call: jb,
  nodes: Bb,
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
  [Symbol.iterator]: jE
};
function $e(l) {
  return typeof l == "string" ? new Je([[document.querySelector(l)]], [document.documentElement]) : new Je([[l]], jv);
}
function YE(l) {
  let i;
  for (; i = l.sourceEvent; ) l = i;
  return l;
}
function mn(l, i) {
  if (l = YE(l), i === void 0 && (i = l.currentTarget), i) {
    var r = i.ownerSVGElement || i;
    if (r.createSVGPoint) {
      var c = r.createSVGPoint();
      return c.x = l.clientX, c.y = l.clientY, c = c.matrixTransform(i.getScreenCTM().inverse()), [c.x, c.y];
    }
    if (i.getBoundingClientRect) {
      var s = i.getBoundingClientRect();
      return [l.clientX - s.left - i.clientLeft, l.clientY - s.top - i.clientTop];
    }
  }
  return [l.pageX, l.pageY];
}
const VE = { passive: !1 }, Ou = { capture: !0, passive: !1 };
function ld(l) {
  l.stopImmediatePropagation();
}
function yi(l) {
  l.preventDefault(), l.stopImmediatePropagation();
}
function Bv(l) {
  var i = l.document.documentElement, r = $e(l).on("dragstart.drag", yi, Ou);
  "onselectstart" in i ? r.on("selectstart.drag", yi, Ou) : (i.__noselect = i.style.MozUserSelect, i.style.MozUserSelect = "none");
}
function Yv(l, i) {
  var r = l.document.documentElement, c = $e(l).on("dragstart.drag", null);
  i && (c.on("click.drag", yi, Ou), setTimeout(function() {
    c.on("click.drag", null);
  }, 0)), "onselectstart" in r ? c.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
}
const Ar = (l) => () => l;
function vd(l, {
  sourceEvent: i,
  subject: r,
  target: c,
  identifier: s,
  active: f,
  x: d,
  y: g,
  dx: x,
  dy: p,
  dispatch: v
}) {
  Object.defineProperties(this, {
    type: { value: l, enumerable: !0, configurable: !0 },
    sourceEvent: { value: i, enumerable: !0, configurable: !0 },
    subject: { value: r, enumerable: !0, configurable: !0 },
    target: { value: c, enumerable: !0, configurable: !0 },
    identifier: { value: s, enumerable: !0, configurable: !0 },
    active: { value: f, enumerable: !0, configurable: !0 },
    x: { value: d, enumerable: !0, configurable: !0 },
    y: { value: g, enumerable: !0, configurable: !0 },
    dx: { value: x, enumerable: !0, configurable: !0 },
    dy: { value: p, enumerable: !0, configurable: !0 },
    _: { value: v }
  });
}
vd.prototype.on = function() {
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
  var l = LE, i = qE, r = XE, c = ZE, s = {}, f = nc("start", "drag", "end"), d = 0, g, x, p, v, m = 0;
  function y(O) {
    O.on("mousedown.drag", b).filter(c).on("touchstart.drag", T).on("touchmove.drag", N, VE).on("touchend.drag touchcancel.drag", V).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function b(O, Y) {
    if (!(v || !l.call(this, O, Y))) {
      var U = w(this, i.call(this, O, Y), O, Y, "mouse");
      U && ($e(O.view).on("mousemove.drag", E, Ou).on("mouseup.drag", A, Ou), Bv(O.view), ld(O), p = !1, g = O.clientX, x = O.clientY, U("start", O));
    }
  }
  function E(O) {
    if (yi(O), !p) {
      var Y = O.clientX - g, U = O.clientY - x;
      p = Y * Y + U * U > m;
    }
    s.mouse("drag", O);
  }
  function A(O) {
    $e(O.view).on("mousemove.drag mouseup.drag", null), Yv(O.view, p), yi(O), s.mouse("end", O);
  }
  function T(O, Y) {
    if (l.call(this, O, Y)) {
      var U = O.changedTouches, j = i.call(this, O, Y), Q = U.length, I, ct;
      for (I = 0; I < Q; ++I)
        (ct = w(this, j, O, Y, U[I].identifier, U[I])) && (ld(O), ct("start", O, U[I]));
    }
  }
  function N(O) {
    var Y = O.changedTouches, U = Y.length, j, Q;
    for (j = 0; j < U; ++j)
      (Q = s[Y[j].identifier]) && (yi(O), Q("drag", O, Y[j]));
  }
  function V(O) {
    var Y = O.changedTouches, U = Y.length, j, Q;
    for (v && clearTimeout(v), v = setTimeout(function() {
      v = null;
    }, 500), j = 0; j < U; ++j)
      (Q = s[Y[j].identifier]) && (ld(O), Q("end", O, Y[j]));
  }
  function w(O, Y, U, j, Q, I) {
    var ct = f.copy(), k = mn(I || U, Y), rt, lt, z;
    if ((z = r.call(O, new vd("beforestart", {
      sourceEvent: U,
      target: y,
      identifier: Q,
      active: d,
      x: k[0],
      y: k[1],
      dx: 0,
      dy: 0,
      dispatch: ct
    }), j)) != null)
      return rt = z.x - k[0] || 0, lt = z.y - k[1] || 0, function L(D, B, G) {
        var $ = k, et;
        switch (D) {
          case "start":
            s[Q] = L, et = d++;
            break;
          case "end":
            delete s[Q], --d;
          // falls through
          case "drag":
            k = mn(G || B, Y), et = d;
            break;
        }
        ct.call(
          D,
          O,
          new vd(D, {
            sourceEvent: B,
            subject: z,
            target: y,
            identifier: Q,
            active: et,
            x: k[0] + rt,
            y: k[1] + lt,
            dx: k[0] - $[0],
            dy: k[1] - $[1],
            dispatch: ct
          }),
          j
        );
      };
  }
  return y.filter = function(O) {
    return arguments.length ? (l = typeof O == "function" ? O : Ar(!!O), y) : l;
  }, y.container = function(O) {
    return arguments.length ? (i = typeof O == "function" ? O : Ar(O), y) : i;
  }, y.subject = function(O) {
    return arguments.length ? (r = typeof O == "function" ? O : Ar(O), y) : r;
  }, y.touchable = function(O) {
    return arguments.length ? (c = typeof O == "function" ? O : Ar(!!O), y) : c;
  }, y.on = function() {
    var O = f.on.apply(f, arguments);
    return O === f ? y : O;
  }, y.clickDistance = function(O) {
    return arguments.length ? (m = (O = +O) * O, y) : Math.sqrt(m);
  }, y;
}
function Dd(l, i, r) {
  l.prototype = i.prototype = r, r.constructor = l;
}
function Lv(l, i) {
  var r = Object.create(l.prototype);
  for (var c in i) r[c] = i[c];
  return r;
}
function Xu() {
}
var Du = 0.7, Kr = 1 / Du, vi = "\\s*([+-]?\\d+)\\s*", Ru = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Bn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", GE = /^#([0-9a-f]{3,8})$/, QE = new RegExp(`^rgb\\(${vi},${vi},${vi}\\)$`), KE = new RegExp(`^rgb\\(${Bn},${Bn},${Bn}\\)$`), $E = new RegExp(`^rgba\\(${vi},${vi},${vi},${Ru}\\)$`), JE = new RegExp(`^rgba\\(${Bn},${Bn},${Bn},${Ru}\\)$`), kE = new RegExp(`^hsl\\(${Ru},${Bn},${Bn}\\)$`), IE = new RegExp(`^hsla\\(${Ru},${Bn},${Bn},${Ru}\\)$`), gy = {
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
Dd(Xu, ya, {
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
  var i, r;
  return l = (l + "").trim().toLowerCase(), (i = GE.exec(l)) ? (r = i[1].length, i = parseInt(i[1], 16), r === 6 ? vy(i) : r === 3 ? new Be(i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, (i & 15) << 4 | i & 15, 1) : r === 8 ? Or(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, (i & 255) / 255) : r === 4 ? Or(i >> 12 & 15 | i >> 8 & 240, i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, ((i & 15) << 4 | i & 15) / 255) : null) : (i = QE.exec(l)) ? new Be(i[1], i[2], i[3], 1) : (i = KE.exec(l)) ? new Be(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, 1) : (i = $E.exec(l)) ? Or(i[1], i[2], i[3], i[4]) : (i = JE.exec(l)) ? Or(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, i[4]) : (i = kE.exec(l)) ? Sy(i[1], i[2] / 100, i[3] / 100, 1) : (i = IE.exec(l)) ? Sy(i[1], i[2] / 100, i[3] / 100, i[4]) : gy.hasOwnProperty(l) ? vy(gy[l]) : l === "transparent" ? new Be(NaN, NaN, NaN, 0) : null;
}
function vy(l) {
  return new Be(l >> 16 & 255, l >> 8 & 255, l & 255, 1);
}
function Or(l, i, r, c) {
  return c <= 0 && (l = i = r = NaN), new Be(l, i, r, c);
}
function PE(l) {
  return l instanceof Xu || (l = ya(l)), l ? (l = l.rgb(), new Be(l.r, l.g, l.b, l.opacity)) : new Be();
}
function pd(l, i, r, c) {
  return arguments.length === 1 ? PE(l) : new Be(l, i, r, c ?? 1);
}
function Be(l, i, r, c) {
  this.r = +l, this.g = +i, this.b = +r, this.opacity = +c;
}
Dd(Be, pd, Lv(Xu, {
  brighter(l) {
    return l = l == null ? Kr : Math.pow(Kr, l), new Be(this.r * l, this.g * l, this.b * l, this.opacity);
  },
  darker(l) {
    return l = l == null ? Du : Math.pow(Du, l), new Be(this.r * l, this.g * l, this.b * l, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Be(ga(this.r), ga(this.g), ga(this.b), $r(this.opacity));
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
  const l = $r(this.opacity);
  return `${l === 1 ? "rgb(" : "rgba("}${ga(this.r)}, ${ga(this.g)}, ${ga(this.b)}${l === 1 ? ")" : `, ${l})`}`;
}
function $r(l) {
  return isNaN(l) ? 1 : Math.max(0, Math.min(1, l));
}
function ga(l) {
  return Math.max(0, Math.min(255, Math.round(l) || 0));
}
function ha(l) {
  return l = ga(l), (l < 16 ? "0" : "") + l.toString(16);
}
function Sy(l, i, r, c) {
  return c <= 0 ? l = i = r = NaN : r <= 0 || r >= 1 ? l = i = NaN : i <= 0 && (l = NaN), new yn(l, i, r, c);
}
function qv(l) {
  if (l instanceof yn) return new yn(l.h, l.s, l.l, l.opacity);
  if (l instanceof Xu || (l = ya(l)), !l) return new yn();
  if (l instanceof yn) return l;
  l = l.rgb();
  var i = l.r / 255, r = l.g / 255, c = l.b / 255, s = Math.min(i, r, c), f = Math.max(i, r, c), d = NaN, g = f - s, x = (f + s) / 2;
  return g ? (i === f ? d = (r - c) / g + (r < c) * 6 : r === f ? d = (c - i) / g + 2 : d = (i - r) / g + 4, g /= x < 0.5 ? f + s : 2 - f - s, d *= 60) : g = x > 0 && x < 1 ? 0 : d, new yn(d, g, x, l.opacity);
}
function e_(l, i, r, c) {
  return arguments.length === 1 ? qv(l) : new yn(l, i, r, c ?? 1);
}
function yn(l, i, r, c) {
  this.h = +l, this.s = +i, this.l = +r, this.opacity = +c;
}
Dd(yn, e_, Lv(Xu, {
  brighter(l) {
    return l = l == null ? Kr : Math.pow(Kr, l), new yn(this.h, this.s, this.l * l, this.opacity);
  },
  darker(l) {
    return l = l == null ? Du : Math.pow(Du, l), new yn(this.h, this.s, this.l * l, this.opacity);
  },
  rgb() {
    var l = this.h % 360 + (this.h < 0) * 360, i = isNaN(l) || isNaN(this.s) ? 0 : this.s, r = this.l, c = r + (r < 0.5 ? r : 1 - r) * i, s = 2 * r - c;
    return new Be(
      ad(l >= 240 ? l - 240 : l + 120, s, c),
      ad(l, s, c),
      ad(l < 120 ? l + 240 : l - 120, s, c),
      this.opacity
    );
  },
  clamp() {
    return new yn(by(this.h), Dr(this.s), Dr(this.l), $r(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const l = $r(this.opacity);
    return `${l === 1 ? "hsl(" : "hsla("}${by(this.h)}, ${Dr(this.s) * 100}%, ${Dr(this.l) * 100}%${l === 1 ? ")" : `, ${l})`}`;
  }
}));
function by(l) {
  return l = (l || 0) % 360, l < 0 ? l + 360 : l;
}
function Dr(l) {
  return Math.max(0, Math.min(1, l || 0));
}
function ad(l, i, r) {
  return (l < 60 ? i + (r - i) * l / 60 : l < 180 ? r : l < 240 ? i + (r - i) * (240 - l) / 60 : i) * 255;
}
const Rd = (l) => () => l;
function n_(l, i) {
  return function(r) {
    return l + r * i;
  };
}
function l_(l, i, r) {
  return l = Math.pow(l, r), i = Math.pow(i, r) - l, r = 1 / r, function(c) {
    return Math.pow(l + c * i, r);
  };
}
function a_(l) {
  return (l = +l) == 1 ? Xv : function(i, r) {
    return r - i ? l_(i, r, l) : Rd(isNaN(i) ? r : i);
  };
}
function Xv(l, i) {
  var r = i - l;
  return r ? n_(l, r) : Rd(isNaN(l) ? i : l);
}
const Jr = (function l(i) {
  var r = a_(i);
  function c(s, f) {
    var d = r((s = pd(s)).r, (f = pd(f)).r), g = r(s.g, f.g), x = r(s.b, f.b), p = Xv(s.opacity, f.opacity);
    return function(v) {
      return s.r = d(v), s.g = g(v), s.b = x(v), s.opacity = p(v), s + "";
    };
  }
  return c.gamma = l, c;
})(1);
function i_(l, i) {
  i || (i = []);
  var r = l ? Math.min(i.length, l.length) : 0, c = i.slice(), s;
  return function(f) {
    for (s = 0; s < r; ++s) c[s] = l[s] * (1 - f) + i[s] * f;
    return c;
  };
}
function u_(l) {
  return ArrayBuffer.isView(l) && !(l instanceof DataView);
}
function o_(l, i) {
  var r = i ? i.length : 0, c = l ? Math.min(r, l.length) : 0, s = new Array(c), f = new Array(r), d;
  for (d = 0; d < c; ++d) s[d] = Mu(l[d], i[d]);
  for (; d < r; ++d) f[d] = i[d];
  return function(g) {
    for (d = 0; d < c; ++d) f[d] = s[d](g);
    return f;
  };
}
function r_(l, i) {
  var r = /* @__PURE__ */ new Date();
  return l = +l, i = +i, function(c) {
    return r.setTime(l * (1 - c) + i * c), r;
  };
}
function jn(l, i) {
  return l = +l, i = +i, function(r) {
    return l * (1 - r) + i * r;
  };
}
function c_(l, i) {
  var r = {}, c = {}, s;
  (l === null || typeof l != "object") && (l = {}), (i === null || typeof i != "object") && (i = {});
  for (s in i)
    s in l ? r[s] = Mu(l[s], i[s]) : c[s] = i[s];
  return function(f) {
    for (s in r) c[s] = r[s](f);
    return c;
  };
}
var xd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, id = new RegExp(xd.source, "g");
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
  var r = xd.lastIndex = id.lastIndex = 0, c, s, f, d = -1, g = [], x = [];
  for (l = l + "", i = i + ""; (c = xd.exec(l)) && (s = id.exec(i)); )
    (f = s.index) > r && (f = i.slice(r, f), g[d] ? g[d] += f : g[++d] = f), (c = c[0]) === (s = s[0]) ? g[d] ? g[d] += s : g[++d] = s : (g[++d] = null, x.push({ i: d, x: jn(c, s) })), r = id.lastIndex;
  return r < i.length && (f = i.slice(r), g[d] ? g[d] += f : g[++d] = f), g.length < 2 ? x[0] ? f_(x[0].x) : s_(i) : (i = x.length, function(p) {
    for (var v = 0, m; v < i; ++v) g[(m = x[v]).i] = m.x(p);
    return g.join("");
  });
}
function Mu(l, i) {
  var r = typeof i, c;
  return i == null || r === "boolean" ? Rd(i) : (r === "number" ? jn : r === "string" ? (c = ya(i)) ? (i = c, Jr) : Zv : i instanceof ya ? Jr : i instanceof Date ? r_ : u_(i) ? i_ : Array.isArray(i) ? o_ : typeof i.valueOf != "function" && typeof i.toString != "function" || isNaN(i) ? c_ : jn)(l, i);
}
var Ey = 180 / Math.PI, Sd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Gv(l, i, r, c, s, f) {
  var d, g, x;
  return (d = Math.sqrt(l * l + i * i)) && (l /= d, i /= d), (x = l * r + i * c) && (r -= l * x, c -= i * x), (g = Math.sqrt(r * r + c * c)) && (r /= g, c /= g, x /= g), l * c < i * r && (l = -l, i = -i, x = -x, d = -d), {
    translateX: s,
    translateY: f,
    rotate: Math.atan2(i, l) * Ey,
    skewX: Math.atan(x) * Ey,
    scaleX: d,
    scaleY: g
  };
}
var Rr;
function d_(l) {
  const i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(l + "");
  return i.isIdentity ? Sd : Gv(i.a, i.b, i.c, i.d, i.e, i.f);
}
function h_(l) {
  return l == null || (Rr || (Rr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Rr.setAttribute("transform", l), !(l = Rr.transform.baseVal.consolidate())) ? Sd : (l = l.matrix, Gv(l.a, l.b, l.c, l.d, l.e, l.f));
}
function Qv(l, i, r, c) {
  function s(p) {
    return p.length ? p.pop() + " " : "";
  }
  function f(p, v, m, y, b, E) {
    if (p !== m || v !== y) {
      var A = b.push("translate(", null, i, null, r);
      E.push({ i: A - 4, x: jn(p, m) }, { i: A - 2, x: jn(v, y) });
    } else (m || y) && b.push("translate(" + m + i + y + r);
  }
  function d(p, v, m, y) {
    p !== v ? (p - v > 180 ? v += 360 : v - p > 180 && (p += 360), y.push({ i: m.push(s(m) + "rotate(", null, c) - 2, x: jn(p, v) })) : v && m.push(s(m) + "rotate(" + v + c);
  }
  function g(p, v, m, y) {
    p !== v ? y.push({ i: m.push(s(m) + "skewX(", null, c) - 2, x: jn(p, v) }) : v && m.push(s(m) + "skewX(" + v + c);
  }
  function x(p, v, m, y, b, E) {
    if (p !== m || v !== y) {
      var A = b.push(s(b) + "scale(", null, ",", null, ")");
      E.push({ i: A - 4, x: jn(p, m) }, { i: A - 2, x: jn(v, y) });
    } else (m !== 1 || y !== 1) && b.push(s(b) + "scale(" + m + "," + y + ")");
  }
  return function(p, v) {
    var m = [], y = [];
    return p = l(p), v = l(v), f(p.translateX, p.translateY, v.translateX, v.translateY, m, y), d(p.rotate, v.rotate, m, y), g(p.skewX, v.skewX, m, y), x(p.scaleX, p.scaleY, v.scaleX, v.scaleY, m, y), p = v = null, function(b) {
      for (var E = -1, A = y.length, T; ++E < A; ) m[(T = y[E]).i] = T.x(b);
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
const qr = (function l(i, r, c) {
  function s(f, d) {
    var g = f[0], x = f[1], p = f[2], v = d[0], m = d[1], y = d[2], b = v - g, E = m - x, A = b * b + E * E, T, N;
    if (A < y_)
      N = Math.log(y / p) / i, T = function(j) {
        return [
          g + j * b,
          x + j * E,
          p * Math.exp(i * j * N)
        ];
      };
    else {
      var V = Math.sqrt(A), w = (y * y - p * p + c * A) / (2 * p * r * V), O = (y * y - p * p - c * A) / (2 * y * r * V), Y = Math.log(Math.sqrt(w * w + 1) - w), U = Math.log(Math.sqrt(O * O + 1) - O);
      N = (U - Y) / i, T = function(j) {
        var Q = j * N, I = _y(Y), ct = p / (r * V) * (I * p_(i * Q + Y) - v_(Y));
        return [
          g + ct * b,
          x + ct * E,
          p * I / _y(i * Q + Y)
        ];
      };
    }
    return T.duration = N * 1e3 * i / Math.SQRT2, T;
  }
  return s.rho = function(f) {
    var d = Math.max(1e-3, +f), g = d * d, x = g * g;
    return l(d, g, x);
  }, s;
})(Math.SQRT2, 2, 4);
var xi = 0, Tu = 0, wu = 0, Kv = 1e3, kr, Cu, Ir = 0, va = 0, ac = 0, Hu = typeof performance == "object" && performance.now ? performance : Date, $v = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(l) {
  setTimeout(l, 17);
};
function Hd() {
  return va || ($v(x_), va = Hu.now() + ac);
}
function x_() {
  va = 0;
}
function Fr() {
  this._call = this._time = this._next = null;
}
Fr.prototype = Jv.prototype = {
  constructor: Fr,
  restart: function(l, i, r) {
    if (typeof l != "function") throw new TypeError("callback is not a function");
    r = (r == null ? Hd() : +r) + (i == null ? 0 : +i), !this._next && Cu !== this && (Cu ? Cu._next = this : kr = this, Cu = this), this._call = l, this._time = r, bd();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, bd());
  }
};
function Jv(l, i, r) {
  var c = new Fr();
  return c.restart(l, i, r), c;
}
function S_() {
  Hd(), ++xi;
  for (var l = kr, i; l; )
    (i = va - l._time) >= 0 && l._call.call(void 0, i), l = l._next;
  --xi;
}
function wy() {
  va = (Ir = Hu.now()) + ac, xi = Tu = 0;
  try {
    S_();
  } finally {
    xi = 0, E_(), va = 0;
  }
}
function b_() {
  var l = Hu.now(), i = l - Ir;
  i > Kv && (ac -= i, Ir = l);
}
function E_() {
  for (var l, i = kr, r, c = 1 / 0; i; )
    i._call ? (c > i._time && (c = i._time), l = i, i = i._next) : (r = i._next, i._next = null, i = l ? l._next = r : kr = r);
  Cu = l, bd(c);
}
function bd(l) {
  if (!xi) {
    Tu && (Tu = clearTimeout(Tu));
    var i = l - va;
    i > 24 ? (l < 1 / 0 && (Tu = setTimeout(wy, l - Hu.now() - ac)), wu && (wu = clearInterval(wu))) : (wu || (Ir = Hu.now(), wu = setInterval(b_, Kv)), xi = 1, $v(wy));
  }
}
function Ny(l, i, r) {
  var c = new Fr();
  return i = i == null ? 0 : +i, c.restart((s) => {
    c.stop(), l(s + i);
  }, i, r), c;
}
var __ = nc("start", "end", "cancel", "interrupt"), w_ = [], kv = 0, Ty = 1, Ed = 2, Xr = 3, Cy = 4, _d = 5, Zr = 6;
function ic(l, i, r, c, s, f) {
  var d = l.__transition;
  if (!d) l.__transition = {};
  else if (r in d) return;
  N_(l, r, {
    name: i,
    index: c,
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
  var r = Sn(l, i);
  if (r.state > kv) throw new Error("too late; already scheduled");
  return r;
}
function Yn(l, i) {
  var r = Sn(l, i);
  if (r.state > Xr) throw new Error("too late; already running");
  return r;
}
function Sn(l, i) {
  var r = l.__transition;
  if (!r || !(r = r[i])) throw new Error("transition not found");
  return r;
}
function N_(l, i, r) {
  var c = l.__transition, s;
  c[i] = r, r.timer = Jv(f, 0, r.time);
  function f(p) {
    r.state = Ty, r.timer.restart(d, r.delay, r.time), r.delay <= p && d(p - r.delay);
  }
  function d(p) {
    var v, m, y, b;
    if (r.state !== Ty) return x();
    for (v in c)
      if (b = c[v], b.name === r.name) {
        if (b.state === Xr) return Ny(d);
        b.state === Cy ? (b.state = Zr, b.timer.stop(), b.on.call("interrupt", l, l.__data__, b.index, b.group), delete c[v]) : +v < i && (b.state = Zr, b.timer.stop(), b.on.call("cancel", l, l.__data__, b.index, b.group), delete c[v]);
      }
    if (Ny(function() {
      r.state === Xr && (r.state = Cy, r.timer.restart(g, r.delay, r.time), g(p));
    }), r.state = Ed, r.on.call("start", l, l.__data__, r.index, r.group), r.state === Ed) {
      for (r.state = Xr, s = new Array(y = r.tween.length), v = 0, m = -1; v < y; ++v)
        (b = r.tween[v].value.call(l, l.__data__, r.index, r.group)) && (s[++m] = b);
      s.length = m + 1;
    }
  }
  function g(p) {
    for (var v = p < r.duration ? r.ease.call(null, p / r.duration) : (r.timer.restart(x), r.state = _d, 1), m = -1, y = s.length; ++m < y; )
      s[m].call(l, v);
    r.state === _d && (r.on.call("end", l, l.__data__, r.index, r.group), x());
  }
  function x() {
    r.state = Zr, r.timer.stop(), delete c[i];
    for (var p in c) return;
    delete l.__transition;
  }
}
function Gr(l, i) {
  var r = l.__transition, c, s, f = !0, d;
  if (r) {
    i = i == null ? null : i + "";
    for (d in r) {
      if ((c = r[d]).name !== i) {
        f = !1;
        continue;
      }
      s = c.state > Ed && c.state < _d, c.state = Zr, c.timer.stop(), c.on.call(s ? "interrupt" : "cancel", l, l.__data__, c.index, c.group), delete r[d];
    }
    f && delete l.__transition;
  }
}
function T_(l) {
  return this.each(function() {
    Gr(this, l);
  });
}
function C_(l, i) {
  var r, c;
  return function() {
    var s = Yn(this, l), f = s.tween;
    if (f !== r) {
      c = r = f;
      for (var d = 0, g = c.length; d < g; ++d)
        if (c[d].name === i) {
          c = c.slice(), c.splice(d, 1);
          break;
        }
    }
    s.tween = c;
  };
}
function z_(l, i, r) {
  var c, s;
  if (typeof r != "function") throw new Error();
  return function() {
    var f = Yn(this, l), d = f.tween;
    if (d !== c) {
      s = (c = d).slice();
      for (var g = { name: i, value: r }, x = 0, p = s.length; x < p; ++x)
        if (s[x].name === i) {
          s[x] = g;
          break;
        }
      x === p && s.push(g);
    }
    f.tween = s;
  };
}
function M_(l, i) {
  var r = this._id;
  if (l += "", arguments.length < 2) {
    for (var c = Sn(this.node(), r).tween, s = 0, f = c.length, d; s < f; ++s)
      if ((d = c[s]).name === l)
        return d.value;
    return null;
  }
  return this.each((i == null ? C_ : z_)(r, l, i));
}
function jd(l, i, r) {
  var c = l._id;
  return l.each(function() {
    var s = Yn(this, c);
    (s.value || (s.value = {}))[i] = r.apply(this, arguments);
  }), function(s) {
    return Sn(s, c).value[i];
  };
}
function Iv(l, i) {
  var r;
  return (typeof i == "number" ? jn : i instanceof ya ? Jr : (r = ya(i)) ? (i = r, Jr) : Zv)(l, i);
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
function D_(l, i, r) {
  var c, s = r + "", f;
  return function() {
    var d = this.getAttribute(l);
    return d === s ? null : d === c ? f : f = i(c = d, r);
  };
}
function R_(l, i, r) {
  var c, s = r + "", f;
  return function() {
    var d = this.getAttributeNS(l.space, l.local);
    return d === s ? null : d === c ? f : f = i(c = d, r);
  };
}
function H_(l, i, r) {
  var c, s, f;
  return function() {
    var d, g = r(this), x;
    return g == null ? void this.removeAttribute(l) : (d = this.getAttribute(l), x = g + "", d === x ? null : d === c && x === s ? f : (s = x, f = i(c = d, g)));
  };
}
function U_(l, i, r) {
  var c, s, f;
  return function() {
    var d, g = r(this), x;
    return g == null ? void this.removeAttributeNS(l.space, l.local) : (d = this.getAttributeNS(l.space, l.local), x = g + "", d === x ? null : d === c && x === s ? f : (s = x, f = i(c = d, g)));
  };
}
function j_(l, i) {
  var r = lc(l), c = r === "transform" ? m_ : Iv;
  return this.attrTween(l, typeof i == "function" ? (r.local ? U_ : H_)(r, c, jd(this, "attr." + l, i)) : i == null ? (r.local ? O_ : A_)(r) : (r.local ? R_ : D_)(r, c, i));
}
function B_(l, i) {
  return function(r) {
    this.setAttribute(l, i.call(this, r));
  };
}
function Y_(l, i) {
  return function(r) {
    this.setAttributeNS(l.space, l.local, i.call(this, r));
  };
}
function V_(l, i) {
  var r, c;
  function s() {
    var f = i.apply(this, arguments);
    return f !== c && (r = (c = f) && Y_(l, f)), r;
  }
  return s._value = i, s;
}
function L_(l, i) {
  var r, c;
  function s() {
    var f = i.apply(this, arguments);
    return f !== c && (r = (c = f) && B_(l, f)), r;
  }
  return s._value = i, s;
}
function q_(l, i) {
  var r = "attr." + l;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (i == null) return this.tween(r, null);
  if (typeof i != "function") throw new Error();
  var c = lc(l);
  return this.tween(r, (c.local ? V_ : L_)(c, i));
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
    var r = i.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Yn(this, l).ease = r;
  };
}
function F_(l) {
  if (typeof l != "function") throw new Error();
  return this.each(I_(this._id, l));
}
function W_(l) {
  typeof l != "function" && (l = Cv(l));
  for (var i = this._groups, r = i.length, c = new Array(r), s = 0; s < r; ++s)
    for (var f = i[s], d = f.length, g = c[s] = [], x, p = 0; p < d; ++p)
      (x = f[p]) && l.call(x, x.__data__, p, f) && g.push(x);
  return new al(c, this._parents, this._name, this._id);
}
function P_(l) {
  if (l._id !== this._id) throw new Error();
  for (var i = this._groups, r = l._groups, c = i.length, s = r.length, f = Math.min(c, s), d = new Array(c), g = 0; g < f; ++g)
    for (var x = i[g], p = r[g], v = x.length, m = d[g] = new Array(v), y, b = 0; b < v; ++b)
      (y = x[b] || p[b]) && (m[b] = y);
  for (; g < c; ++g)
    d[g] = i[g];
  return new al(d, this._parents, this._name, this._id);
}
function t2(l) {
  return (l + "").trim().split(/^|\s+/).every(function(i) {
    var r = i.indexOf(".");
    return r >= 0 && (i = i.slice(0, r)), !i || i === "start";
  });
}
function e2(l, i, r) {
  var c, s, f = t2(i) ? Ud : Yn;
  return function() {
    var d = f(this, l), g = d.on;
    g !== c && (s = (c = g).copy()).on(i, r), d.on = s;
  };
}
function n2(l, i) {
  var r = this._id;
  return arguments.length < 2 ? Sn(this.node(), r).on.on(l) : this.each(e2(r, l, i));
}
function l2(l) {
  return function() {
    var i = this.parentNode;
    for (var r in this.__transition) if (+r !== l) return;
    i && i.removeChild(this);
  };
}
function a2() {
  return this.on("end.remove", l2(this._id));
}
function i2(l) {
  var i = this._name, r = this._id;
  typeof l != "function" && (l = Ad(l));
  for (var c = this._groups, s = c.length, f = new Array(s), d = 0; d < s; ++d)
    for (var g = c[d], x = g.length, p = f[d] = new Array(x), v, m, y = 0; y < x; ++y)
      (v = g[y]) && (m = l.call(v, v.__data__, y, g)) && ("__data__" in v && (m.__data__ = v.__data__), p[y] = m, ic(p[y], i, r, y, p, Sn(v, r)));
  return new al(f, this._parents, i, r);
}
function u2(l) {
  var i = this._name, r = this._id;
  typeof l != "function" && (l = Tv(l));
  for (var c = this._groups, s = c.length, f = [], d = [], g = 0; g < s; ++g)
    for (var x = c[g], p = x.length, v, m = 0; m < p; ++m)
      if (v = x[m]) {
        for (var y = l.call(v, v.__data__, m, x), b, E = Sn(v, r), A = 0, T = y.length; A < T; ++A)
          (b = y[A]) && ic(b, i, r, A, y, E);
        f.push(y), d.push(v);
      }
  return new al(f, d, i, r);
}
var o2 = qu.prototype.constructor;
function r2() {
  return new o2(this._groups, this._parents);
}
function c2(l, i) {
  var r, c, s;
  return function() {
    var f = pi(this, l), d = (this.style.removeProperty(l), pi(this, l));
    return f === d ? null : f === r && d === c ? s : s = i(r = f, c = d);
  };
}
function Fv(l) {
  return function() {
    this.style.removeProperty(l);
  };
}
function s2(l, i, r) {
  var c, s = r + "", f;
  return function() {
    var d = pi(this, l);
    return d === s ? null : d === c ? f : f = i(c = d, r);
  };
}
function f2(l, i, r) {
  var c, s, f;
  return function() {
    var d = pi(this, l), g = r(this), x = g + "";
    return g == null && (x = g = (this.style.removeProperty(l), pi(this, l))), d === x ? null : d === c && x === s ? f : (s = x, f = i(c = d, g));
  };
}
function d2(l, i) {
  var r, c, s, f = "style." + i, d = "end." + f, g;
  return function() {
    var x = Yn(this, l), p = x.on, v = x.value[f] == null ? g || (g = Fv(i)) : void 0;
    (p !== r || s !== v) && (c = (r = p).copy()).on(d, s = v), x.on = c;
  };
}
function h2(l, i, r) {
  var c = (l += "") == "transform" ? g_ : Iv;
  return i == null ? this.styleTween(l, c2(l, c)).on("end.style." + l, Fv(l)) : typeof i == "function" ? this.styleTween(l, f2(l, c, jd(this, "style." + l, i))).each(d2(this._id, l)) : this.styleTween(l, s2(l, c, i), r).on("end.style." + l, null);
}
function g2(l, i, r) {
  return function(c) {
    this.style.setProperty(l, i.call(this, c), r);
  };
}
function m2(l, i, r) {
  var c, s;
  function f() {
    var d = i.apply(this, arguments);
    return d !== s && (c = (s = d) && g2(l, d, r)), c;
  }
  return f._value = i, f;
}
function y2(l, i, r) {
  var c = "style." + (l += "");
  if (arguments.length < 2) return (c = this.tween(c)) && c._value;
  if (i == null) return this.tween(c, null);
  if (typeof i != "function") throw new Error();
  return this.tween(c, m2(l, i, r ?? ""));
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
  return this.tween("text", typeof l == "function" ? p2(jd(this, "text", l)) : v2(l == null ? "" : l + ""));
}
function S2(l) {
  return function(i) {
    this.textContent = l.call(this, i);
  };
}
function b2(l) {
  var i, r;
  function c() {
    var s = l.apply(this, arguments);
    return s !== r && (i = (r = s) && S2(s)), i;
  }
  return c._value = l, c;
}
function E2(l) {
  var i = "text";
  if (arguments.length < 1) return (i = this.tween(i)) && i._value;
  if (l == null) return this.tween(i, null);
  if (typeof l != "function") throw new Error();
  return this.tween(i, b2(l));
}
function _2() {
  for (var l = this._name, i = this._id, r = Wv(), c = this._groups, s = c.length, f = 0; f < s; ++f)
    for (var d = c[f], g = d.length, x, p = 0; p < g; ++p)
      if (x = d[p]) {
        var v = Sn(x, i);
        ic(x, l, r, p, d, {
          time: v.time + v.delay + v.duration,
          delay: 0,
          duration: v.duration,
          ease: v.ease
        });
      }
  return new al(c, this._parents, l, r);
}
function w2() {
  var l, i, r = this, c = r._id, s = r.size();
  return new Promise(function(f, d) {
    var g = { value: d }, x = { value: function() {
      --s === 0 && f();
    } };
    r.each(function() {
      var p = Yn(this, c), v = p.on;
      v !== l && (i = (l = v).copy(), i._.cancel.push(g), i._.interrupt.push(g), i._.end.push(x)), p.on = i;
    }), s === 0 && f();
  });
}
var N2 = 0;
function al(l, i, r, c) {
  this._groups = l, this._parents = i, this._name = r, this._id = c;
}
function Wv() {
  return ++N2;
}
var nl = qu.prototype;
al.prototype = {
  constructor: al,
  select: i2,
  selectAll: u2,
  selectChild: nl.selectChild,
  selectChildren: nl.selectChildren,
  filter: W_,
  merge: P_,
  selection: r2,
  transition: _2,
  call: nl.call,
  nodes: nl.nodes,
  node: nl.node,
  size: nl.size,
  empty: nl.empty,
  each: nl.each,
  on: n2,
  attr: j_,
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
  for (var r; !(r = l.__transition) || !(r = r[i]); )
    if (!(l = l.parentNode))
      throw new Error(`transition ${i} not found`);
  return r;
}
function M2(l) {
  var i, r;
  l instanceof al ? (i = l._id, l = l._name) : (i = Wv(), (r = C2).time = Hd(), l = l == null ? null : l + "");
  for (var c = this._groups, s = c.length, f = 0; f < s; ++f)
    for (var d = c[f], g = d.length, x, p = 0; p < g; ++p)
      (x = d[p]) && ic(x, l, i, p, d, r || z2(x, i));
  return new al(c, this._parents, l, i);
}
qu.prototype.interrupt = T_;
qu.prototype.transition = M2;
const Hr = (l) => () => l;
function A2(l, {
  sourceEvent: i,
  target: r,
  transform: c,
  dispatch: s
}) {
  Object.defineProperties(this, {
    type: { value: l, enumerable: !0, configurable: !0 },
    sourceEvent: { value: i, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    transform: { value: c, enumerable: !0, configurable: !0 },
    _: { value: s }
  });
}
function ll(l, i, r) {
  this.k = l, this.x = i, this.y = r;
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
var uc = new ll(1, 0, 0);
Pv.prototype = ll.prototype;
function Pv(l) {
  for (; !l.__zoom; ) if (!(l = l.parentNode)) return uc;
  return l.__zoom;
}
function ud(l) {
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
  return this.__zoom || uc;
}
function R2(l) {
  return -l.deltaY * (l.deltaMode === 1 ? 0.05 : l.deltaMode ? 1 : 2e-3) * (l.ctrlKey ? 10 : 1);
}
function H2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function U2(l, i, r) {
  var c = l.invertX(i[0][0]) - r[0][0], s = l.invertX(i[1][0]) - r[1][0], f = l.invertY(i[0][1]) - r[0][1], d = l.invertY(i[1][1]) - r[1][1];
  return l.translate(
    s > c ? (c + s) / 2 : Math.min(0, c) || Math.max(0, s),
    d > f ? (f + d) / 2 : Math.min(0, f) || Math.max(0, d)
  );
}
function tp() {
  var l = O2, i = D2, r = U2, c = R2, s = H2, f = [0, 1 / 0], d = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], g = 250, x = qr, p = nc("start", "zoom", "end"), v, m, y, b = 500, E = 150, A = 0, T = 10;
  function N(z) {
    z.property("__zoom", zy).on("wheel.zoom", Q, { passive: !1 }).on("mousedown.zoom", I).on("dblclick.zoom", ct).filter(s).on("touchstart.zoom", k).on("touchmove.zoom", rt).on("touchend.zoom touchcancel.zoom", lt).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  N.transform = function(z, L, D, B) {
    var G = z.selection ? z.selection() : z;
    G.property("__zoom", zy), z !== G ? Y(z, L, D, B) : G.interrupt().each(function() {
      U(this, arguments).event(B).start().zoom(null, typeof L == "function" ? L.apply(this, arguments) : L).end();
    });
  }, N.scaleBy = function(z, L, D, B) {
    N.scaleTo(z, function() {
      var G = this.__zoom.k, $ = typeof L == "function" ? L.apply(this, arguments) : L;
      return G * $;
    }, D, B);
  }, N.scaleTo = function(z, L, D, B) {
    N.transform(z, function() {
      var G = i.apply(this, arguments), $ = this.__zoom, et = D == null ? O(G) : typeof D == "function" ? D.apply(this, arguments) : D, ut = $.invert(et), R = typeof L == "function" ? L.apply(this, arguments) : L;
      return r(w(V($, R), et, ut), G, d);
    }, D, B);
  }, N.translateBy = function(z, L, D, B) {
    N.transform(z, function() {
      return r(this.__zoom.translate(
        typeof L == "function" ? L.apply(this, arguments) : L,
        typeof D == "function" ? D.apply(this, arguments) : D
      ), i.apply(this, arguments), d);
    }, null, B);
  }, N.translateTo = function(z, L, D, B, G) {
    N.transform(z, function() {
      var $ = i.apply(this, arguments), et = this.__zoom, ut = B == null ? O($) : typeof B == "function" ? B.apply(this, arguments) : B;
      return r(uc.translate(ut[0], ut[1]).scale(et.k).translate(
        typeof L == "function" ? -L.apply(this, arguments) : -L,
        typeof D == "function" ? -D.apply(this, arguments) : -D
      ), $, d);
    }, B, G);
  };
  function V(z, L) {
    return L = Math.max(f[0], Math.min(f[1], L)), L === z.k ? z : new ll(L, z.x, z.y);
  }
  function w(z, L, D) {
    var B = L[0] - D[0] * z.k, G = L[1] - D[1] * z.k;
    return B === z.x && G === z.y ? z : new ll(z.k, B, G);
  }
  function O(z) {
    return [(+z[0][0] + +z[1][0]) / 2, (+z[0][1] + +z[1][1]) / 2];
  }
  function Y(z, L, D, B) {
    z.on("start.zoom", function() {
      U(this, arguments).event(B).start();
    }).on("interrupt.zoom end.zoom", function() {
      U(this, arguments).event(B).end();
    }).tween("zoom", function() {
      var G = this, $ = arguments, et = U(G, $).event(B), ut = i.apply(G, $), R = D == null ? O(ut) : typeof D == "function" ? D.apply(G, $) : D, nt = Math.max(ut[1][0] - ut[0][0], ut[1][1] - ut[0][1]), _ = G.__zoom, F = typeof L == "function" ? L.apply(G, $) : L, st = x(_.invert(R).concat(nt / _.k), F.invert(R).concat(nt / F.k));
      return function(ot) {
        if (ot === 1) ot = F;
        else {
          var P = st(ot), ht = nt / P[2];
          ot = new ll(ht, R[0] - P[0] * ht, R[1] - P[1] * ht);
        }
        et.zoom(null, ot);
      };
    });
  }
  function U(z, L, D) {
    return !D && z.__zooming || new j(z, L);
  }
  function j(z, L) {
    this.that = z, this.args = L, this.active = 0, this.sourceEvent = null, this.extent = i.apply(z, L), this.taps = 0;
  }
  j.prototype = {
    event: function(z) {
      return z && (this.sourceEvent = z), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(z, L) {
      return this.mouse && z !== "mouse" && (this.mouse[1] = L.invert(this.mouse[0])), this.touch0 && z !== "touch" && (this.touch0[1] = L.invert(this.touch0[0])), this.touch1 && z !== "touch" && (this.touch1[1] = L.invert(this.touch1[0])), this.that.__zoom = L, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(z) {
      var L = $e(this.that).datum();
      p.call(
        z,
        this.that,
        new A2(z, {
          sourceEvent: this.sourceEvent,
          target: N,
          transform: this.that.__zoom,
          dispatch: p
        }),
        L
      );
    }
  };
  function Q(z, ...L) {
    if (!l.apply(this, arguments)) return;
    var D = U(this, L).event(z), B = this.__zoom, G = Math.max(f[0], Math.min(f[1], B.k * Math.pow(2, c.apply(this, arguments)))), $ = mn(z);
    if (D.wheel)
      (D.mouse[0][0] !== $[0] || D.mouse[0][1] !== $[1]) && (D.mouse[1] = B.invert(D.mouse[0] = $)), clearTimeout(D.wheel);
    else {
      if (B.k === G) return;
      D.mouse = [$, B.invert($)], Gr(this), D.start();
    }
    Nu(z), D.wheel = setTimeout(et, E), D.zoom("mouse", r(w(V(B, G), D.mouse[0], D.mouse[1]), D.extent, d));
    function et() {
      D.wheel = null, D.end();
    }
  }
  function I(z, ...L) {
    if (y || !l.apply(this, arguments)) return;
    var D = z.currentTarget, B = U(this, L, !0).event(z), G = $e(z.view).on("mousemove.zoom", R, !0).on("mouseup.zoom", nt, !0), $ = mn(z, D), et = z.clientX, ut = z.clientY;
    Bv(z.view), ud(z), B.mouse = [$, this.__zoom.invert($)], Gr(this), B.start();
    function R(_) {
      if (Nu(_), !B.moved) {
        var F = _.clientX - et, st = _.clientY - ut;
        B.moved = F * F + st * st > A;
      }
      B.event(_).zoom("mouse", r(w(B.that.__zoom, B.mouse[0] = mn(_, D), B.mouse[1]), B.extent, d));
    }
    function nt(_) {
      G.on("mousemove.zoom mouseup.zoom", null), Yv(_.view, B.moved), Nu(_), B.event(_).end();
    }
  }
  function ct(z, ...L) {
    if (l.apply(this, arguments)) {
      var D = this.__zoom, B = mn(z.changedTouches ? z.changedTouches[0] : z, this), G = D.invert(B), $ = D.k * (z.shiftKey ? 0.5 : 2), et = r(w(V(D, $), B, G), i.apply(this, L), d);
      Nu(z), g > 0 ? $e(this).transition().duration(g).call(Y, et, B, z) : $e(this).call(N.transform, et, B, z);
    }
  }
  function k(z, ...L) {
    if (l.apply(this, arguments)) {
      var D = z.touches, B = D.length, G = U(this, L, z.changedTouches.length === B).event(z), $, et, ut, R;
      for (ud(z), et = 0; et < B; ++et)
        ut = D[et], R = mn(ut, this), R = [R, this.__zoom.invert(R), ut.identifier], G.touch0 ? !G.touch1 && G.touch0[2] !== R[2] && (G.touch1 = R, G.taps = 0) : (G.touch0 = R, $ = !0, G.taps = 1 + !!v);
      v && (v = clearTimeout(v)), $ && (G.taps < 2 && (m = R[0], v = setTimeout(function() {
        v = null;
      }, b)), Gr(this), G.start());
    }
  }
  function rt(z, ...L) {
    if (this.__zooming) {
      var D = U(this, L).event(z), B = z.changedTouches, G = B.length, $, et, ut, R;
      for (Nu(z), $ = 0; $ < G; ++$)
        et = B[$], ut = mn(et, this), D.touch0 && D.touch0[2] === et.identifier ? D.touch0[0] = ut : D.touch1 && D.touch1[2] === et.identifier && (D.touch1[0] = ut);
      if (et = D.that.__zoom, D.touch1) {
        var nt = D.touch0[0], _ = D.touch0[1], F = D.touch1[0], st = D.touch1[1], ot = (ot = F[0] - nt[0]) * ot + (ot = F[1] - nt[1]) * ot, P = (P = st[0] - _[0]) * P + (P = st[1] - _[1]) * P;
        et = V(et, Math.sqrt(ot / P)), ut = [(nt[0] + F[0]) / 2, (nt[1] + F[1]) / 2], R = [(_[0] + st[0]) / 2, (_[1] + st[1]) / 2];
      } else if (D.touch0) ut = D.touch0[0], R = D.touch0[1];
      else return;
      D.zoom("touch", r(w(et, ut, R), D.extent, d));
    }
  }
  function lt(z, ...L) {
    if (this.__zooming) {
      var D = U(this, L).event(z), B = z.changedTouches, G = B.length, $, et;
      for (ud(z), y && clearTimeout(y), y = setTimeout(function() {
        y = null;
      }, b), $ = 0; $ < G; ++$)
        et = B[$], D.touch0 && D.touch0[2] === et.identifier ? delete D.touch0 : D.touch1 && D.touch1[2] === et.identifier && delete D.touch1;
      if (D.touch1 && !D.touch0 && (D.touch0 = D.touch1, delete D.touch1), D.touch0) D.touch0[1] = this.__zoom.invert(D.touch0[0]);
      else if (D.end(), D.taps === 2 && (et = mn(et, this), Math.hypot(m[0] - et[0], m[1] - et[1]) < T)) {
        var ut = $e(this).on("dblclick.zoom");
        ut && ut.apply(this, arguments);
      }
    }
  }
  return N.wheelDelta = function(z) {
    return arguments.length ? (c = typeof z == "function" ? z : Hr(+z), N) : c;
  }, N.filter = function(z) {
    return arguments.length ? (l = typeof z == "function" ? z : Hr(!!z), N) : l;
  }, N.touchable = function(z) {
    return arguments.length ? (s = typeof z == "function" ? z : Hr(!!z), N) : s;
  }, N.extent = function(z) {
    return arguments.length ? (i = typeof z == "function" ? z : Hr([[+z[0][0], +z[0][1]], [+z[1][0], +z[1][1]]]), N) : i;
  }, N.scaleExtent = function(z) {
    return arguments.length ? (f[0] = +z[0], f[1] = +z[1], N) : [f[0], f[1]];
  }, N.translateExtent = function(z) {
    return arguments.length ? (d[0][0] = +z[0][0], d[1][0] = +z[1][0], d[0][1] = +z[0][1], d[1][1] = +z[1][1], N) : [[d[0][0], d[0][1]], [d[1][0], d[1][1]]];
  }, N.constrain = function(z) {
    return arguments.length ? (r = z, N) : r;
  }, N.duration = function(z) {
    return arguments.length ? (g = +z, N) : g;
  }, N.interpolate = function(z) {
    return arguments.length ? (x = z, N) : x;
  }, N.on = function() {
    var z = p.on.apply(p, arguments);
    return z === p ? N : z;
  }, N.clickDistance = function(z) {
    return arguments.length ? (A = (z = +z) * z, N) : Math.sqrt(A);
  }, N.tapDistance = function(z) {
    return arguments.length ? (T = +z, N) : T;
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
  error008: (l, { id: i, sourceHandle: r, targetHandle: c }) => `Couldn't create edge for ${l} handle id: "${l === "source" ? r : c}", edge id: ${i}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (l) => `Edge type "${l}" not found. Using fallback type "default".`,
  error012: (l) => `Node with id "${l}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (l = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${l}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
  error016: (l) => `Edge with id "${l}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, Uu = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], ep = ["Enter", " ", "Escape"], np = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: l, x: i, y: r }) => `Moved selected node ${l}. New position, x: ${i}, y: ${r}`,
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
var ju;
(function(l) {
  l.Partial = "partial", l.Full = "full";
})(ju || (ju = {}));
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
var Bl;
(function(l) {
  l.Bezier = "default", l.Straight = "straight", l.Step = "step", l.SmoothStep = "smoothstep", l.SimpleBezier = "simplebezier";
})(Bl || (Bl = {}));
var Wr;
(function(l) {
  l.Arrow = "arrow", l.ArrowClosed = "arrowclosed";
})(Wr || (Wr = {}));
var pt;
(function(l) {
  l.Left = "left", l.Top = "top", l.Right = "right", l.Bottom = "bottom";
})(pt || (pt = {}));
const My = {
  [pt.Left]: pt.Right,
  [pt.Right]: pt.Left,
  [pt.Top]: pt.Bottom,
  [pt.Bottom]: pt.Top
}, ap = (l) => !!l && typeof l == "object" && "id" in l && "source" in l && "target" in l, j2 = (l) => !!l && typeof l == "object" && "id" in l && "position" in l && !("source" in l) && !("target" in l), Bd = (l) => !!l && typeof l == "object" && "id" in l && "internals" in l && !("source" in l) && !("target" in l), Zu = (l, i = [0, 0]) => {
  const { width: r, height: c } = bn(l), s = l.origin ?? i, f = r * s[0], d = c * s[1];
  return {
    x: l.position.x - f,
    y: l.position.y - d
  };
}, B2 = (l, i = { nodeOrigin: [0, 0] }) => {
  if (l.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let r = !1;
  const c = l.reduce((s, f) => {
    const d = typeof f == "string";
    let g = !i.nodeLookup && !d ? f : void 0;
    return i.nodeLookup && (g = d ? i.nodeLookup.get(f) : Bd(f) ? f : i.nodeLookup.get(f.id)), g ? (r = !0, oc(s, Pr(g, i.nodeOrigin))) : s;
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return r ? rc(c) : { x: 0, y: 0, width: 0, height: 0 };
}, Gu = (l, i = {}) => {
  let r = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, c = !1;
  return l.forEach((s) => {
    (i.filter === void 0 || i.filter(s)) && (r = oc(r, Pr(s)), c = !0);
  }), c ? rc(r) : { x: 0, y: 0, width: 0, height: 0 };
}, Yd = (l, i, [r, c, s] = [0, 0, 1], f = !1, d = !1) => {
  const g = (i.x - r) / s, x = (i.y - c) / s, p = i.width / s, v = i.height / s, m = [];
  for (const y of l.values()) {
    const { measured: b, selectable: E = !0, hidden: A = !1 } = y;
    if (d && !E || A)
      continue;
    const T = b.width ?? y.width ?? y.initialWidth ?? 0, N = b.height ?? y.height ?? y.initialHeight ?? 0, { x: V, y: w } = y.internals.positionAbsolute, O = rp(g, x, p, v, V, w, T, N), Y = T * N, U = f && O > 0;
    (!y.internals.handleBounds || U || O >= Y || y.dragging) && m.push(y);
  }
  return m;
}, Y2 = (l, i) => {
  const r = /* @__PURE__ */ new Set();
  return l.forEach((c) => {
    r.add(c.id);
  }), i.filter((c) => r.has(c.source) || r.has(c.target));
};
function V2(l, i) {
  const r = /* @__PURE__ */ new Map(), c = i?.nodes ? new Set(i.nodes.map((s) => s.id)) : null;
  return l.forEach((s) => {
    let f;
    if (i?.includeHiddenNodes) {
      const { width: d, height: g } = bn(s);
      f = d > 0 && g > 0;
    } else
      f = !!(s.measured.width && s.measured.height && !s.hidden);
    f && (!c || c.has(s.id)) && r.set(s.id, s);
  }), r;
}
async function L2({ nodes: l, width: i, height: r, panZoom: c, minZoom: s, maxZoom: f }, d) {
  if (l.size === 0)
    return !0;
  const g = V2(l, d), x = Gu(g), p = Ld(x, i, r, d?.minZoom ?? s, d?.maxZoom ?? f, d?.padding ?? 0.1);
  return await c.setViewport(p, {
    duration: d?.duration,
    ease: d?.ease,
    interpolate: d?.interpolate
  }), !0;
}
function ip({ nodeId: l, nextPosition: i, nodeLookup: r, nodeOrigin: c = [0, 0], nodeExtent: s, onError: f }) {
  const d = r.get(l), g = d.parentId ? r.get(d.parentId) : void 0, { x, y: p } = g ? g.internals.positionAbsolute : { x: 0, y: 0 }, v = d.origin ?? c;
  let m = d.extent || s;
  if (d.extent === "parent" && !d.expandParent)
    if (!g)
      f?.("005", xn.error005());
    else {
      const { width: b, height: E } = bn(g);
      b && E && (m = [
        [x, p],
        [x + b, p + E]
      ]);
    }
  else g && xa(d.extent) && (m = [
    [d.extent[0][0] + x, d.extent[0][1] + p],
    [d.extent[1][0] + x, d.extent[1][1] + p]
  ]);
  const y = xa(m) ? pa(i, m, d.measured) : i;
  return (d.measured.width === void 0 || d.measured.height === void 0) && f?.("015", xn.error015()), {
    position: {
      x: y.x - x + (d.measured.width ?? 0) * v[0],
      y: y.y - p + (d.measured.height ?? 0) * v[1]
    },
    positionAbsolute: y
  };
}
async function q2({ nodesToRemove: l = [], edgesToRemove: i = [], nodes: r, edges: c, onBeforeDelete: s }) {
  const f = new Set(l.map((y) => y.id)), d = [];
  for (const y of r) {
    if (y.deletable === !1)
      continue;
    const b = f.has(y.id), E = !b && y.parentId && d.find((A) => A.id === y.parentId);
    (b || E) && d.push(y);
  }
  const g = new Set(i.map((y) => y.id)), x = c.filter((y) => y.deletable !== !1), v = Y2(d, x);
  for (const y of x)
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
const bi = (l, i = 0, r = 1) => Math.min(Math.max(l, i), r), pa = (l = { x: 0, y: 0 }, i, r) => ({
  x: bi(l.x, i[0][0], i[1][0] - (r?.width ?? 0)),
  y: bi(l.y, i[0][1], i[1][1] - (r?.height ?? 0))
});
function up(l, i, r) {
  const { width: c, height: s } = bn(r), { x: f, y: d } = r.internals.positionAbsolute;
  return pa(l, [
    [f, d],
    [f + c, d + s]
  ], i);
}
const Ay = (l, i, r) => l < i ? bi(Math.abs(l - i), 1, i) / i : l > r ? -bi(Math.abs(l - r), 1, i) / i : 0, Vd = (l, i, r = 15, c = 40) => {
  const s = Ay(l.x, c, i.width - c) * r, f = Ay(l.y, c, i.height - c) * r;
  return [s, f];
}, oc = (l, i) => ({
  x: Math.min(l.x, i.x),
  y: Math.min(l.y, i.y),
  x2: Math.max(l.x2, i.x2),
  y2: Math.max(l.y2, i.y2)
}), wd = ({ x: l, y: i, width: r, height: c }) => ({
  x: l,
  y: i,
  x2: l + r,
  y2: i + c
}), rc = ({ x: l, y: i, x2: r, y2: c }) => ({
  x: l,
  y: i,
  width: r - l,
  height: c - i
}), Bu = (l, i = [0, 0]) => {
  const { x: r, y: c } = Bd(l) ? l.internals.positionAbsolute : Zu(l, i);
  return {
    x: r,
    y: c,
    width: l.measured?.width ?? l.width ?? l.initialWidth ?? 0,
    height: l.measured?.height ?? l.height ?? l.initialHeight ?? 0
  };
}, Pr = (l, i = [0, 0]) => {
  const { x: r, y: c } = Bd(l) ? l.internals.positionAbsolute : Zu(l, i);
  return {
    x: r,
    y: c,
    x2: r + (l.measured?.width ?? l.width ?? l.initialWidth ?? 0),
    y2: c + (l.measured?.height ?? l.height ?? l.initialHeight ?? 0)
  };
}, op = (l, i) => rc(oc(wd(l), wd(i))), rp = (l, i, r, c, s, f, d, g) => {
  const x = Math.max(0, Math.min(l + r, s + d) - Math.max(l, s)), p = Math.max(0, Math.min(i + c, f + g) - Math.max(i, f));
  return Math.ceil(x * p);
}, tc = (l, i) => rp(l.x, l.y, l.width, l.height, i.x, i.y, i.width, i.height), Oy = (l) => vn(l.width) && vn(l.height) && vn(l.x) && vn(l.y), vn = (l) => !isNaN(l) && isFinite(l), cp = (l, i) => (r, c) => {
}, Qu = (l, i = [1, 1]) => ({
  x: i[0] * Math.round(l.x / i[0]),
  y: i[1] * Math.round(l.y / i[1])
}), Ku = ({ x: l, y: i }, [r, c, s], f = !1, d = [1, 1]) => {
  const g = {
    x: (l - r) / s,
    y: (i - c) / s
  };
  return f ? Qu(g, d) : g;
}, Ei = ({ x: l, y: i }, [r, c, s]) => ({
  x: l * s + r,
  y: i * s + c
});
function gi(l, i) {
  if (typeof l == "number")
    return Math.floor((i - i / (1 + l)) * 0.5);
  if (typeof l == "string" && l.endsWith("px")) {
    const r = parseFloat(l);
    if (!Number.isNaN(r))
      return Math.floor(r);
  }
  if (typeof l == "string" && l.endsWith("%")) {
    const r = parseFloat(l);
    if (!Number.isNaN(r))
      return Math.floor(i * r * 0.01);
  }
  return console.error(`The padding value "${l}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function X2(l, i, r) {
  if (typeof l == "string" || typeof l == "number") {
    const c = gi(l, r), s = gi(l, i);
    return {
      top: c,
      right: s,
      bottom: c,
      left: s,
      x: s * 2,
      y: c * 2
    };
  }
  if (typeof l == "object") {
    const c = gi(l.top ?? l.y ?? 0, r), s = gi(l.bottom ?? l.y ?? 0, r), f = gi(l.left ?? l.x ?? 0, i), d = gi(l.right ?? l.x ?? 0, i);
    return { top: c, right: d, bottom: s, left: f, x: f + d, y: c + s };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Z2(l, i, r, c, s, f) {
  const { x: d, y: g } = Ei(l, [i, r, c]), { x, y: p } = Ei({ x: l.x + l.width, y: l.y + l.height }, [i, r, c]), v = s - x, m = f - p;
  return {
    left: Math.floor(d),
    top: Math.floor(g),
    right: Math.floor(v),
    bottom: Math.floor(m)
  };
}
const Ld = (l, i, r, c, s, f) => {
  const d = X2(f, i, r), g = (i - d.x) / l.width, x = (r - d.y) / l.height, p = Math.min(g, x), v = bi(p, c, s), m = l.x + l.width / 2, y = l.y + l.height / 2, b = i / 2 - m * v, E = r / 2 - y * v, A = Z2(l, b, E, v, i, r), T = {
    left: Math.min(A.left - d.left, 0),
    top: Math.min(A.top - d.top, 0),
    right: Math.min(A.right - d.right, 0),
    bottom: Math.min(A.bottom - d.bottom, 0)
  };
  return {
    x: b - T.left + T.right,
    y: E - T.top + T.bottom,
    zoom: v
  };
}, Yu = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
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
function fp(l, i = { width: 0, height: 0 }, r, c, s) {
  const f = { ...l }, d = c.get(r);
  if (d) {
    const g = d.origin || s;
    f.x += d.internals.positionAbsolute.x - (i.width ?? 0) * g[0], f.y += d.internals.positionAbsolute.y - (i.height ?? 0) * g[1];
  }
  return f;
}
function Dy(l, i) {
  if (l.size !== i.size)
    return !1;
  for (const r of l)
    if (!i.has(r))
      return !1;
  return !0;
}
function G2() {
  let l, i;
  return { promise: new Promise((c, s) => {
    l = c, i = s;
  }), resolve: l, reject: i };
}
function Q2(l) {
  return { ...np, ...l || {} };
}
function dp(l) {
  return l === null ? null : l ? "valid" : "invalid";
}
function Au(l, { snapGrid: i = [0, 0], snapToGrid: r = !1, transform: c, containerBounds: s }) {
  const { x: f, y: d } = pn(l), g = Ku({ x: f - (s?.left ?? 0), y: d - (s?.top ?? 0) }, c), { x, y: p } = r ? Qu(g, i) : g;
  return {
    xSnapped: x,
    ySnapped: p,
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
  const r = mp(l), c = r ? l.clientX : l.touches?.[0].clientX, s = r ? l.clientY : l.touches?.[0].clientY;
  return {
    x: c - (i?.left ?? 0),
    y: s - (i?.top ?? 0)
  };
}, Ry = (l, i, r, c, s) => {
  const f = i.querySelectorAll(`.${l}`);
  return !f || !f.length ? null : Array.from(f).map((d) => {
    const g = d.getBoundingClientRect();
    return {
      id: d.getAttribute("data-handleid"),
      type: l,
      nodeId: s,
      position: d.getAttribute("data-handlepos"),
      x: (g.left - r.left) / c,
      y: (g.top - r.top) / c,
      ...qd(d)
    };
  });
};
function yp({ sourceX: l, sourceY: i, targetX: r, targetY: c, sourceControlX: s, sourceControlY: f, targetControlX: d, targetControlY: g }) {
  const x = l * 0.125 + s * 0.375 + d * 0.375 + r * 0.125, p = i * 0.125 + f * 0.375 + g * 0.375 + c * 0.125, v = Math.abs(x - l), m = Math.abs(p - i);
  return [x, p, v, m];
}
function Ur(l, i) {
  return l >= 0 ? 0.5 * l : i * 25 * Math.sqrt(-l);
}
function Hy({ pos: l, x1: i, y1: r, x2: c, y2: s, c: f }) {
  switch (l) {
    case pt.Left:
      return [i - Ur(i - c, f), r];
    case pt.Right:
      return [i + Ur(c - i, f), r];
    case pt.Top:
      return [i, r - Ur(r - s, f)];
    case pt.Bottom:
      return [i, r + Ur(s - r, f)];
  }
}
function Xd({ sourceX: l, sourceY: i, sourcePosition: r = pt.Bottom, targetX: c, targetY: s, targetPosition: f = pt.Top, curvature: d = 0.25 }) {
  const [g, x] = Hy({
    pos: r,
    x1: l,
    y1: i,
    x2: c,
    y2: s,
    c: d
  }), [p, v] = Hy({
    pos: f,
    x1: c,
    y1: s,
    x2: l,
    y2: i,
    c: d
  }), [m, y, b, E] = yp({
    sourceX: l,
    sourceY: i,
    targetX: c,
    targetY: s,
    sourceControlX: g,
    sourceControlY: x,
    targetControlX: p,
    targetControlY: v
  });
  return [
    `M${l},${i} C${g},${x} ${p},${v} ${c},${s}`,
    m,
    y,
    b,
    E
  ];
}
function vp({ sourceX: l, sourceY: i, targetX: r, targetY: c }) {
  const s = Math.abs(r - l) / 2, f = r < l ? r + s : r - s, d = Math.abs(c - i) / 2, g = c < i ? c + d : c - d;
  return [f, g, s, d];
}
function $2({ sourceNode: l, targetNode: i, selected: r = !1, zIndex: c = 0, elevateOnSelect: s = !1, zIndexMode: f = "basic" }) {
  if (f === "manual")
    return c;
  const d = s && r ? c + 1e3 : c, g = Math.max(l.parentId || s && l.selected ? l.internals.z : 0, i.parentId || s && i.selected ? i.internals.z : 0);
  return d + g;
}
function J2({ sourceNode: l, targetNode: i, width: r, height: c, transform: s }) {
  const f = oc(Pr(l), Pr(i));
  f.x === f.x2 && (f.x2 += 1), f.y === f.y2 && (f.y2 += 1);
  const d = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: r / s[2],
    height: c / s[2]
  };
  return tc(d, rc(f)) > 0;
}
const k2 = ({ source: l, sourceHandle: i, target: r, targetHandle: c }) => `xy-edge__${l}${i || ""}-${r}${c || ""}`, I2 = (l, i) => i.some((r) => r.source === l.source && r.target === l.target && (r.sourceHandle === l.sourceHandle || !r.sourceHandle && !l.sourceHandle) && (r.targetHandle === l.targetHandle || !r.targetHandle && !l.targetHandle)), F2 = (l, i, r = {}) => {
  if (!l.source || !l.target)
    return r.onError?.("006", xn.error006()), i;
  const c = r.getEdgeId || k2;
  let s;
  return ap(l) ? s = { ...l } : s = {
    ...l,
    id: c(l)
  }, I2(s, i) ? i : (s.sourceHandle === null && delete s.sourceHandle, s.targetHandle === null && delete s.targetHandle, i.concat(s));
};
function pp({ sourceX: l, sourceY: i, targetX: r, targetY: c }) {
  const [s, f, d, g] = vp({
    sourceX: l,
    sourceY: i,
    targetX: r,
    targetY: c
  });
  return [`M ${l},${i}L ${r},${c}`, s, f, d, g];
}
const Uy = {
  [pt.Left]: { x: -1, y: 0 },
  [pt.Right]: { x: 1, y: 0 },
  [pt.Top]: { x: 0, y: -1 },
  [pt.Bottom]: { x: 0, y: 1 }
}, W2 = ({ source: l, sourcePosition: i = pt.Bottom, target: r }) => i === pt.Left || i === pt.Right ? l.x < r.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : l.y < r.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, jy = (l, i) => Math.sqrt(Math.pow(i.x - l.x, 2) + Math.pow(i.y - l.y, 2));
function P2({ source: l, sourcePosition: i = pt.Bottom, target: r, targetPosition: c = pt.Top, center: s, offset: f, stepPosition: d }) {
  const g = Uy[i], x = Uy[c], p = { x: l.x + g.x * f, y: l.y + g.y * f }, v = { x: r.x + x.x * f, y: r.y + x.y * f }, m = W2({
    source: p,
    sourcePosition: i,
    target: v
  }), y = m.x !== 0 ? "x" : "y", b = m[y];
  let E = [], A, T;
  const N = { x: 0, y: 0 }, V = { x: 0, y: 0 }, [, , w, O] = vp({
    sourceX: l.x,
    sourceY: l.y,
    targetX: r.x,
    targetY: r.y
  });
  if (g[y] * x[y] === -1) {
    y === "x" ? (A = s.x ?? p.x + (v.x - p.x) * d, T = s.y ?? (p.y + v.y) / 2) : (A = s.x ?? (p.x + v.x) / 2, T = s.y ?? p.y + (v.y - p.y) * d);
    const Q = [
      { x: A, y: p.y },
      { x: A, y: v.y }
    ], I = [
      { x: p.x, y: T },
      { x: v.x, y: T }
    ];
    g[y] === b ? E = y === "x" ? Q : I : E = y === "x" ? I : Q;
  } else {
    const Q = [{ x: p.x, y: v.y }], I = [{ x: v.x, y: p.y }];
    if (y === "x" ? E = g.x === b ? I : Q : E = g.y === b ? Q : I, i === c) {
      const z = Math.abs(l[y] - r[y]);
      if (z <= f) {
        const L = Math.min(f - 1, f - z);
        g[y] === b ? N[y] = (p[y] > l[y] ? -1 : 1) * L : V[y] = (v[y] > r[y] ? -1 : 1) * L;
      }
    }
    if (i !== c) {
      const z = y === "x" ? "y" : "x", L = g[y] === x[z], D = p[z] > v[z], B = p[z] < v[z];
      (g[y] === 1 && (!L && D || L && B) || g[y] !== 1 && (!L && B || L && D)) && (E = y === "x" ? Q : I);
    }
    const ct = { x: p.x + N.x, y: p.y + N.y }, k = { x: v.x + V.x, y: v.y + V.y }, rt = Math.max(Math.abs(ct.x - E[0].x), Math.abs(k.x - E[0].x)), lt = Math.max(Math.abs(ct.y - E[0].y), Math.abs(k.y - E[0].y));
    rt >= lt ? (A = (ct.x + k.x) / 2, T = E[0].y) : (A = E[0].x, T = (ct.y + k.y) / 2);
  }
  const Y = { x: p.x + N.x, y: p.y + N.y }, U = { x: v.x + V.x, y: v.y + V.y };
  return [[
    l,
    // we only want to add the gapped source/target if they are different from the first/last point to avoid duplicates which can cause issues with the bends
    ...Y.x !== E[0].x || Y.y !== E[0].y ? [Y] : [],
    ...E,
    ...U.x !== E[E.length - 1].x || U.y !== E[E.length - 1].y ? [U] : [],
    r
  ], A, T, w, O];
}
function tw(l, i, r, c) {
  const s = Math.min(jy(l, i) / 2, jy(i, r) / 2, c), { x: f, y: d } = i;
  if (l.x === f && f === r.x || l.y === d && d === r.y)
    return `L${f} ${d}`;
  if (l.y === d) {
    const p = l.x < r.x ? -1 : 1, v = l.y < r.y ? 1 : -1;
    return `L ${f + s * p},${d}Q ${f},${d} ${f},${d + s * v}`;
  }
  const g = l.x < r.x ? 1 : -1, x = l.y < r.y ? -1 : 1;
  return `L ${f},${d + s * x}Q ${f},${d} ${f + s * g},${d}`;
}
function Nd({ sourceX: l, sourceY: i, sourcePosition: r = pt.Bottom, targetX: c, targetY: s, targetPosition: f = pt.Top, borderRadius: d = 5, centerX: g, centerY: x, offset: p = 20, stepPosition: v = 0.5 }) {
  const [m, y, b, E, A] = P2({
    source: { x: l, y: i },
    sourcePosition: r,
    target: { x: c, y: s },
    targetPosition: f,
    center: { x: g, y: x },
    offset: p,
    stepPosition: v
  });
  let T = `M${m[0].x} ${m[0].y}`;
  for (let N = 1; N < m.length - 1; N++)
    T += tw(m[N - 1], m[N], m[N + 1], d);
  return T += `L${m[m.length - 1].x} ${m[m.length - 1].y}`, [T, y, b, E, A];
}
function By(l) {
  return l && !!(l.internals.handleBounds || l.handles?.length) && !!(l.measured.width || l.width || l.initialWidth);
}
function ew(l) {
  const { sourceNode: i, targetNode: r } = l;
  if (!By(i) || !By(r))
    return null;
  const c = i.internals.handleBounds || Yy(i.handles), s = r.internals.handleBounds || Yy(r.handles), f = Vy(c?.source ?? [], l.sourceHandle), d = Vy(
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
  const g = f?.position || pt.Bottom, x = d?.position || pt.Top, p = Sa(i, f, g), v = Sa(r, d, x);
  return {
    sourceX: p.x,
    sourceY: p.y,
    targetX: v.x,
    targetY: v.y,
    sourcePosition: g,
    targetPosition: x
  };
}
function Yy(l) {
  if (!l)
    return null;
  const i = [], r = [];
  for (const c of l)
    c.width = c.width ?? 1, c.height = c.height ?? 1, c.type === "source" ? i.push(c) : c.type === "target" && r.push(c);
  return {
    source: i,
    target: r
  };
}
function Sa(l, i, r = pt.Left, c = !1) {
  const s = (i?.x ?? 0) + l.internals.positionAbsolute.x, f = (i?.y ?? 0) + l.internals.positionAbsolute.y, { width: d, height: g } = i ?? bn(l);
  if (c)
    return { x: s + d / 2, y: f + g / 2 };
  switch (i?.position ?? r) {
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
  return l && (i ? l.find((r) => r.id === i) : l[0]) || null;
}
function Td(l, i) {
  return l ? typeof l == "string" ? l : `${i ? `${i}__` : ""}${Object.keys(l).sort().map((c) => `${c}=${l[c]}`).join("&")}` : "";
}
function nw(l, { id: i, defaultColor: r, defaultMarkerStart: c, defaultMarkerEnd: s }) {
  const f = /* @__PURE__ */ new Set();
  return l.reduce((d, g) => ([g.markerStart || c, g.markerEnd || s].forEach((x) => {
    if (x && typeof x == "object") {
      const p = Td(x, i);
      f.has(p) || (d.push({ id: p, color: x.color || r, ...x }), f.add(p));
    }
  }), d), []).sort((d, g) => d.id.localeCompare(g.id));
}
const xp = 1e3, lw = 10, Zd = {
  nodeOrigin: [0, 0],
  nodeExtent: Uu,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, aw = {
  ...Zd,
  checkEquality: !0
};
function Gd(l, i) {
  const r = { ...l };
  for (const c in i)
    i[c] !== void 0 && (r[c] = i[c]);
  return r;
}
function iw(l, i, r) {
  const c = Gd(Zd, r);
  for (const s of l.values())
    if (s.parentId)
      Kd(s, l, i, c);
    else {
      const f = Zu(s, c.nodeOrigin), d = xa(s.extent) ? s.extent : c.nodeExtent, g = pa(f, d, bn(s));
      s.internals.positionAbsolute = g;
    }
}
function uw(l, i) {
  if (!l.handles)
    return l.measured ? i?.internals.handleBounds : void 0;
  const r = [], c = [];
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
    s.type === "source" ? r.push(f) : s.type === "target" && c.push(f);
  }
  return {
    source: r,
    target: c
  };
}
function Qd(l) {
  return l === "manual";
}
function Cd(l, i, r, c = {}) {
  const s = Gd(aw, c), f = { i: 0 }, d = new Map(i), g = s?.elevateNodesOnSelect && !Qd(s.zIndexMode) ? xp : 0;
  let x = l.length > 0, p = !1;
  i.clear(), r.clear();
  for (const v of l) {
    let m = d.get(v.id);
    if (s.checkEquality && v === m?.internals.userNode)
      i.set(v.id, m);
    else {
      const y = Zu(v, s.nodeOrigin), b = xa(v.extent) ? v.extent : s.nodeExtent, E = pa(y, b, bn(v));
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
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (x = !1), v.parentId && Kd(m, i, r, c, f), p ||= v.selected ?? !1;
  }
  return { nodesInitialized: x, hasSelectedNodes: p };
}
function ow(l, i) {
  if (!l.parentId)
    return;
  const r = i.get(l.parentId);
  r ? r.set(l.id, l) : i.set(l.parentId, /* @__PURE__ */ new Map([[l.id, l]]));
}
function Kd(l, i, r, c, s) {
  const { elevateNodesOnSelect: f, nodeOrigin: d, nodeExtent: g, zIndexMode: x } = Gd(Zd, c), p = l.parentId, v = i.get(p);
  if (!v) {
    console.warn(`Parent node ${p} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  ow(l, r), s && !v.parentId && v.internals.rootParentIndex === void 0 && x === "auto" && (v.internals.rootParentIndex = ++s.i, v.internals.z = v.internals.z + s.i * lw), s && v.internals.rootParentIndex !== void 0 && (s.i = v.internals.rootParentIndex);
  const m = f && !Qd(x) ? xp : 0, { x: y, y: b, z: E } = rw(l, v, d, g, m, x), { positionAbsolute: A } = l.internals, T = y !== A.x || b !== A.y;
  (T || E !== l.internals.z) && i.set(l.id, {
    ...l,
    internals: {
      ...l.internals,
      positionAbsolute: T ? { x: y, y: b } : A,
      z: E
    }
  });
}
function Sp(l, i, r) {
  const c = vn(l.zIndex) ? l.zIndex : 0;
  return Qd(r) ? c : c + (l.selected ? i : 0);
}
function rw(l, i, r, c, s, f) {
  const { x: d, y: g } = i.internals.positionAbsolute, x = bn(l), p = Zu(l, r), v = xa(l.extent) ? pa(p, l.extent, x) : p;
  let m = pa({ x: d + v.x, y: g + v.y }, c, x);
  l.extent === "parent" && (m = up(m, x, i));
  const y = Sp(l, s, f), b = i.internals.z ?? 0;
  return {
    x: m.x,
    y: m.y,
    z: b >= y ? b + 1 : y
  };
}
function $d(l, i, r, c = [0, 0]) {
  const s = [], f = /* @__PURE__ */ new Map();
  for (const d of l) {
    const g = i.get(d.parentId);
    if (!g)
      continue;
    const x = f.get(d.parentId)?.expandedRect ?? Bu(g), p = op(x, d.rect);
    f.set(d.parentId, { expandedRect: p, parent: g });
  }
  return f.size > 0 && f.forEach(({ expandedRect: d, parent: g }, x) => {
    const p = g.internals.positionAbsolute, v = bn(g), m = g.origin ?? c, y = d.x < p.x ? Math.round(Math.abs(p.x - d.x)) : 0, b = d.y < p.y ? Math.round(Math.abs(p.y - d.y)) : 0, E = Math.max(v.width, Math.round(d.width)), A = Math.max(v.height, Math.round(d.height)), T = (E - v.width) * m[0], N = (A - v.height) * m[1];
    (y > 0 || b > 0 || T || N) && (s.push({
      id: x,
      type: "position",
      position: {
        x: g.position.x - y + T,
        y: g.position.y - b + N
      }
    }), r.get(x)?.forEach((V) => {
      l.some((w) => w.id === V.id) || s.push({
        id: V.id,
        type: "position",
        position: {
          x: V.position.x + y,
          y: V.position.y + b
        }
      });
    })), (v.width < d.width || v.height < d.height || y || b) && s.push({
      id: x,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: E + (y ? m[0] * y - T : 0),
        height: A + (b ? m[1] * b - N : 0)
      }
    });
  }), s;
}
function cw(l, i, r, c, s, f, d) {
  const g = c?.querySelector(".xyflow__viewport");
  let x = !1;
  if (!g)
    return { changes: [], updatedInternals: x };
  const p = [], v = window.getComputedStyle(g), { m22: m } = new window.DOMMatrixReadOnly(v.transform), y = [];
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
      }), x = !0;
      continue;
    }
    const A = qd(b.nodeElement), T = E.measured.width !== A.width || E.measured.height !== A.height;
    if (!!(A.width && A.height && (T || !E.internals.handleBounds || b.force))) {
      const V = b.nodeElement.getBoundingClientRect(), w = xa(E.extent) ? E.extent : f;
      let { positionAbsolute: O } = E.internals;
      if (E.parentId && E.extent === "parent") {
        const U = i.get(E.parentId);
        U && (O = up(O, A, U));
      } else w && (O = pa(O, w, A));
      const Y = {
        ...E,
        measured: A,
        internals: {
          ...E.internals,
          positionAbsolute: O,
          handleBounds: {
            source: Ry("source", b.nodeElement, V, m, E.id),
            target: Ry("target", b.nodeElement, V, m, E.id)
          }
        }
      };
      i.set(E.id, Y), E.parentId && Kd(Y, i, r, { nodeOrigin: s, zIndexMode: d }), x = !0, T && (p.push({
        id: E.id,
        type: "dimensions",
        dimensions: A
      }), E.expandParent && E.parentId && y.push({
        id: E.id,
        parentId: E.parentId,
        rect: Bu(Y, s)
      }));
    }
  }
  if (y.length > 0) {
    const b = $d(y, i, r, s);
    p.push(...b);
  }
  return { changes: p, updatedInternals: x };
}
async function sw({ delta: l, panZoom: i, transform: r, translateExtent: c, width: s, height: f }) {
  if (!i || !l.x && !l.y)
    return !1;
  const d = await i.setViewportConstrained({
    x: r[0] + l.x,
    y: r[1] + l.y,
    zoom: r[2]
  }, [
    [0, 0],
    [s, f]
  ], c);
  return !!d && (d.x !== r[0] || d.y !== r[1] || d.k !== r[2]);
}
function Ly(l, i, r, c, s, f) {
  let d = s;
  const g = c.get(d) || /* @__PURE__ */ new Map();
  c.set(d, g.set(r, i)), d = `${s}-${l}`;
  const x = c.get(d) || /* @__PURE__ */ new Map();
  if (c.set(d, x.set(r, i)), f) {
    d = `${s}-${l}-${f}`;
    const p = c.get(d) || /* @__PURE__ */ new Map();
    c.set(d, p.set(r, i));
  }
}
function bp(l, i, r) {
  l.clear(), i.clear();
  for (const c of r) {
    const { source: s, target: f, sourceHandle: d = null, targetHandle: g = null } = c, x = { edgeId: c.id, source: s, target: f, sourceHandle: d, targetHandle: g }, p = `${s}-${d}--${f}-${g}`, v = `${f}-${g}--${s}-${d}`;
    Ly("source", x, v, l, s, d), Ly("target", x, p, l, f, g), i.set(c.id, c);
  }
}
function Ep(l, i) {
  if (!l.parentId)
    return !1;
  const r = i.get(l.parentId);
  return r ? r.selected ? !0 : Ep(r, i) : !1;
}
function qy(l, i, r) {
  let c = l;
  do {
    if (c?.matches?.(i))
      return !0;
    if (c === r)
      return !1;
    c = c?.parentElement;
  } while (c);
  return !1;
}
function fw(l, i, r, c) {
  const s = /* @__PURE__ */ new Map();
  for (const [f, d] of l)
    if ((d.selected || d.id === c) && (!d.parentId || !Ep(d, l)) && (d.draggable || i && typeof d.draggable > "u")) {
      const g = l.get(f);
      g && s.set(f, {
        id: f,
        position: g.position || { x: 0, y: 0 },
        distance: {
          x: r.x - g.internals.positionAbsolute.x,
          y: r.y - g.internals.positionAbsolute.y
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
function od({ nodeId: l, dragItems: i, nodeLookup: r, dragging: c = !0 }) {
  const s = [];
  for (const [d, g] of i) {
    const x = r.get(d)?.internals.userNode;
    x && s.push({
      ...x,
      position: g.position,
      dragging: c
    });
  }
  if (!l)
    return [s[0], s];
  const f = r.get(l)?.internals.userNode;
  return [
    f ? {
      ...f,
      position: i.get(l)?.position || f.position,
      dragging: c
    } : s[0],
    s
  ];
}
function dw({ dragItems: l, snapGrid: i, x: r, y: c }) {
  const s = l.values().next().value;
  if (!s)
    return null;
  const f = {
    x: r - s.distance.x,
    y: c - s.distance.y
  }, d = Qu(f, i);
  return {
    x: d.x - f.x,
    y: d.y - f.y
  };
}
function hw({ onNodeMouseDown: l, getStoreItems: i, onDragStart: r, onDrag: c, onDragStop: s }) {
  let f = { x: null, y: null }, d = 0, g = /* @__PURE__ */ new Map(), x = !1, p = { x: 0, y: 0 }, v = null, m = !1, y = null, b = !1, E = !1, A = null;
  function T({ noDragClassName: V, handleSelector: w, domNode: O, isSelectable: Y, nodeId: U, nodeClickDistance: j = 0 }) {
    y = $e(O);
    function Q({ x: rt, y: lt }) {
      const { nodeLookup: z, nodeExtent: L, snapGrid: D, snapToGrid: B, nodeOrigin: G, onNodeDrag: $, onSelectionDrag: et, onError: ut, updateNodePositions: R } = i();
      f = { x: rt, y: lt };
      let nt = !1;
      const _ = g.size > 1, F = _ && L ? wd(Gu(g)) : null, st = _ && B ? dw({
        dragItems: g,
        snapGrid: D,
        x: rt,
        y: lt
      }) : null;
      for (const [ot, P] of g) {
        if (!z.has(ot))
          continue;
        let ht = { x: rt - P.distance.x, y: lt - P.distance.y };
        B && (ht = st ? {
          x: Math.round(ht.x + st.x),
          y: Math.round(ht.y + st.y)
        } : Qu(ht, D));
        let mt = null;
        if (_ && L && !P.extent && F) {
          const { positionAbsolute: xt } = P.internals, wt = xt.x - F.x + L[0][0], _t = xt.x + P.measured.width - F.x2 + L[1][0], Ct = xt.y - F.y + L[0][1], Ht = xt.y + P.measured.height - F.y2 + L[1][1];
          mt = [
            [wt, Ct],
            [_t, Ht]
          ];
        }
        const { position: ft, positionAbsolute: dt } = ip({
          nodeId: ot,
          nextPosition: ht,
          nodeLookup: z,
          nodeExtent: mt || L,
          nodeOrigin: G,
          onError: ut
        });
        nt = nt || P.position.x !== ft.x || P.position.y !== ft.y, P.position = ft, P.internals.positionAbsolute = dt;
      }
      if (E = E || nt, !!nt && (R(g, !0), A && (c || $ || !U && et))) {
        const [ot, P] = od({
          nodeId: U,
          dragItems: g,
          nodeLookup: z
        });
        c?.(A, g, ot, P), $?.(A, ot, P), U || et?.(A, P);
      }
    }
    async function I() {
      if (!v)
        return;
      const { transform: rt, panBy: lt, autoPanSpeed: z, autoPanOnNodeDrag: L } = i();
      if (!L) {
        x = !1, cancelAnimationFrame(d);
        return;
      }
      const [D, B] = Vd(p, v, z);
      (D !== 0 || B !== 0) && (f.x = (f.x ?? 0) - D / rt[2], f.y = (f.y ?? 0) - B / rt[2], await lt({ x: D, y: B }) && Q(f)), d = requestAnimationFrame(I);
    }
    function ct(rt) {
      const { nodeLookup: lt, multiSelectionActive: z, nodesDraggable: L, transform: D, snapGrid: B, snapToGrid: G, selectNodesOnDrag: $, onNodeDragStart: et, onSelectionDragStart: ut, unselectNodesAndEdges: R } = i();
      m = !0, (!$ || !Y) && !z && U && (lt.get(U)?.selected || R()), Y && $ && U && l?.(U);
      const nt = Au(rt.sourceEvent, { transform: D, snapGrid: B, snapToGrid: G, containerBounds: v });
      if (f = nt, g = fw(lt, L, nt, U), g.size > 0 && (r || et || !U && ut)) {
        const [_, F] = od({
          nodeId: U,
          dragItems: g,
          nodeLookup: lt
        });
        r?.(rt.sourceEvent, g, _, F), et?.(rt.sourceEvent, _, F), U || ut?.(rt.sourceEvent, F);
      }
    }
    const k = Vv().clickDistance(j).on("start", (rt) => {
      const { domNode: lt, nodeDragThreshold: z, transform: L, snapGrid: D, snapToGrid: B } = i();
      v = lt?.getBoundingClientRect() || null, b = !1, E = !1, A = rt.sourceEvent, z === 0 && ct(rt), f = Au(rt.sourceEvent, { transform: L, snapGrid: D, snapToGrid: B, containerBounds: v }), p = pn(rt.sourceEvent, v);
    }).on("drag", (rt) => {
      const { autoPanOnNodeDrag: lt, transform: z, snapGrid: L, snapToGrid: D, nodeDragThreshold: B, nodeLookup: G } = i(), $ = Au(rt.sourceEvent, { transform: z, snapGrid: L, snapToGrid: D, containerBounds: v });
      if (A = rt.sourceEvent, (rt.sourceEvent.type === "touchmove" && rt.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      U && !G.has(U)) && (b = !0), !b) {
        if (!x && lt && m && (x = !0, I()), !m) {
          const et = pn(rt.sourceEvent, v), ut = et.x - p.x, R = et.y - p.y;
          Math.sqrt(ut * ut + R * R) > B && ct(rt);
        }
        (f.x !== $.xSnapped || f.y !== $.ySnapped) && g && m && (p = pn(rt.sourceEvent, v), Q($));
      }
    }).on("end", (rt) => {
      if (!m || b) {
        b && g.size > 0 && i().updateNodePositions(g, !1);
        return;
      }
      if (x = !1, m = !1, cancelAnimationFrame(d), g.size > 0) {
        const { nodeLookup: lt, updateNodePositions: z, onNodeDragStop: L, onSelectionDragStop: D } = i();
        if (E && (z(g, !1), E = !1), s || L || !U && D) {
          const [B, G] = od({
            nodeId: U,
            dragItems: g,
            nodeLookup: lt,
            dragging: !1
          });
          s?.(rt.sourceEvent, g, B, G), L?.(rt.sourceEvent, B, G), U || D?.(rt.sourceEvent, G);
        }
      }
    }).filter((rt) => {
      const lt = rt.target;
      return !rt.button && (!V || !qy(lt, `.${V}`, O)) && (!w || qy(lt, w, O));
    });
    y.call(k);
  }
  function N() {
    y?.on(".drag", null);
  }
  return {
    update: T,
    destroy: N
  };
}
function gw(l, i, r) {
  const c = [], s = {
    x: l.x - r,
    y: l.y - r,
    width: r * 2,
    height: r * 2
  };
  for (const f of i.values())
    tc(s, Bu(f)) > 0 && c.push(f);
  return c;
}
const mw = 250;
function yw(l, i, r, c) {
  let s = [], f = 1 / 0;
  const d = gw(l, r, i + mw);
  for (const g of d) {
    const x = [...g.internals.handleBounds?.source ?? [], ...g.internals.handleBounds?.target ?? []];
    for (const p of x) {
      if (c.nodeId === p.nodeId && c.type === p.type && c.id === p.id)
        continue;
      const { x: v, y: m } = Sa(g, p, p.position, !0), y = Math.sqrt(Math.pow(v - l.x, 2) + Math.pow(m - l.y, 2));
      y > i || (y < f ? (s = [{ ...p, x: v, y: m }], f = y) : y === f && s.push({ ...p, x: v, y: m }));
    }
  }
  if (!s.length)
    return null;
  if (s.length > 1) {
    const g = c.type === "source" ? "target" : "source";
    return s.find((x) => x.type === g) ?? s[0];
  }
  return s[0];
}
function _p(l, i, r, c, s, f = !1) {
  const d = c.get(l);
  if (!d)
    return null;
  const g = s === "strict" ? d.internals.handleBounds?.[i] : [...d.internals.handleBounds?.source ?? [], ...d.internals.handleBounds?.target ?? []], x = (r ? g?.find((p) => p.id === r) : g?.[0]) ?? null;
  return x && f ? { ...x, ...Sa(d, x, x.position, !0) } : x;
}
function wp(l, i) {
  return l || (i?.classList.contains("target") ? "target" : i?.classList.contains("source") ? "source" : null);
}
function vw(l, i) {
  let r = null;
  return i ? r = !0 : l && !i && (r = !1), r;
}
const Np = () => !0;
function pw(l, { connectionMode: i, connectionRadius: r, handleId: c, nodeId: s, edgeUpdaterType: f, isTarget: d, domNode: g, nodeLookup: x, lib: p, autoPanOnConnect: v, flowId: m, panBy: y, cancelConnection: b, onConnectStart: E, onConnect: A, onConnectEnd: T, isValidConnection: N = Np, onReconnectEnd: V, updateConnection: w, getTransform: O, getFromHandle: Y, autoPanSpeed: U, dragThreshold: j = 1, handleDomNode: Q }) {
  const I = hp(l.target);
  let ct = 0, k;
  const { x: rt, y: lt } = pn(l), z = wp(f, Q), L = g?.getBoundingClientRect();
  let D = !1;
  if (!L || !z)
    return;
  const B = _p(s, z, c, x, i);
  if (!B)
    return;
  let G = pn(l, L), $ = !1, et = null, ut = !1, R = null;
  function nt() {
    if (!v || !L)
      return;
    const [ft, dt] = Vd(G, L, U);
    y({ x: ft, y: dt }), ct = requestAnimationFrame(nt);
  }
  const _ = {
    ...B,
    nodeId: s,
    type: z,
    position: B.position
  }, F = x.get(s);
  let ot = {
    inProgress: !0,
    isValid: null,
    from: Sa(F, _, pt.Left, !0),
    fromHandle: _,
    fromPosition: _.position,
    fromNode: F,
    to: G,
    toHandle: null,
    toPosition: My[_.position],
    toNode: null,
    pointer: G
  };
  function P() {
    D = !0, w(ot), E?.(l, { nodeId: s, handleId: c, handleType: z });
  }
  j === 0 && P();
  function ht(ft) {
    if (!D) {
      const { x: Ht, y: Ot } = pn(ft), Pt = Ht - rt, xe = Ot - lt;
      if (!(Pt * Pt + xe * xe > j * j))
        return;
      P();
    }
    if (!Y() || !_) {
      mt(ft);
      return;
    }
    const dt = O();
    G = pn(ft, L), k = yw(Ku(G, dt, !1, [1, 1]), r, x, _), $ || (nt(), $ = !0);
    const xt = Tp(ft, {
      handle: k,
      connectionMode: i,
      fromNodeId: s,
      fromHandleId: c,
      fromType: d ? "target" : "source",
      isValidConnection: N,
      doc: I,
      lib: p,
      flowId: m,
      nodeLookup: x
    });
    R = xt.handleDomNode, et = xt.connection, ut = vw(!!k, xt.isValid);
    const wt = x.get(s), _t = wt ? Sa(wt, _, pt.Left, !0) : ot.from, Ct = {
      ...ot,
      from: _t,
      isValid: ut,
      to: xt.toHandle && ut ? Ei({ x: xt.toHandle.x, y: xt.toHandle.y }, dt) : G,
      toHandle: xt.toHandle,
      toPosition: ut && xt.toHandle ? xt.toHandle.position : My[_.position],
      toNode: xt.toHandle ? x.get(xt.toHandle.nodeId) : null,
      pointer: G
    };
    w(Ct), ot = Ct;
  }
  function mt(ft) {
    if (!("touches" in ft && ft.touches.length > 0)) {
      if (D) {
        (k || R) && et && ut && A?.(et);
        const { inProgress: dt, ...xt } = ot, wt = {
          ...xt,
          toPosition: ot.toHandle ? ot.toPosition : null
        };
        T?.(ft, wt), f && V?.(ft, wt);
      }
      b(), cancelAnimationFrame(ct), $ = !1, ut = !1, et = null, R = null, I.removeEventListener("mousemove", ht), I.removeEventListener("mouseup", mt), I.removeEventListener("touchmove", ht), I.removeEventListener("touchend", mt);
    }
  }
  I.addEventListener("mousemove", ht), I.addEventListener("mouseup", mt), I.addEventListener("touchmove", ht), I.addEventListener("touchend", mt);
}
function Tp(l, { handle: i, connectionMode: r, fromNodeId: c, fromHandleId: s, fromType: f, doc: d, lib: g, flowId: x, isValidConnection: p = Np, nodeLookup: v }) {
  const m = f === "target", y = i ? d.querySelector(`.${g}-flow__handle[data-id="${x}-${i?.nodeId}-${i?.id}-${i?.type}"]`) : null, { x: b, y: E } = pn(l), A = d.elementFromPoint(b, E), T = A?.classList.contains(`${g}-flow__handle`) ? A : y, N = {
    handleDomNode: T,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (T) {
    const V = wp(void 0, T), w = T.getAttribute("data-nodeid"), O = T.getAttribute("data-handleid"), Y = T.classList.contains("connectable"), U = T.classList.contains("connectableend");
    if (!w || !V)
      return N;
    const j = {
      source: m ? w : c,
      sourceHandle: m ? O : s,
      target: m ? c : w,
      targetHandle: m ? s : O
    };
    N.connection = j;
    const I = Y && U && (r === Si.Strict ? m && V === "source" || !m && V === "target" : w !== c || O !== s);
    N.isValid = I && p(j), N.toHandle = _p(w, V, O, v, r, !0);
  }
  return N;
}
const zd = {
  onPointerDown: pw,
  isValid: Tp
};
function xw({ domNode: l, panZoom: i, getTransform: r, getViewScale: c }) {
  const s = $e(l);
  function f({ translateExtent: g, width: x, height: p, zoomStep: v = 1, pannable: m = !0, zoomable: y = !0, inversePan: b = !1 }) {
    const E = (w) => {
      if (w.sourceEvent.type !== "wheel" || !i)
        return;
      const O = r(), Y = w.sourceEvent.ctrlKey && Yu() ? 10 : 1, U = -w.sourceEvent.deltaY * (w.sourceEvent.deltaMode === 1 ? 0.05 : w.sourceEvent.deltaMode ? 1 : 2e-3) * v, j = O[2] * Math.pow(2, U * Y);
      i.scaleTo(j);
    };
    let A = [0, 0];
    const T = (w) => {
      (w.sourceEvent.type === "mousedown" || w.sourceEvent.type === "touchstart") && (A = [
        w.sourceEvent.clientX ?? w.sourceEvent.touches[0].clientX,
        w.sourceEvent.clientY ?? w.sourceEvent.touches[0].clientY
      ]);
    }, N = (w) => {
      const O = r();
      if (w.sourceEvent.type !== "mousemove" && w.sourceEvent.type !== "touchmove" || !i)
        return;
      const Y = [
        w.sourceEvent.clientX ?? w.sourceEvent.touches[0].clientX,
        w.sourceEvent.clientY ?? w.sourceEvent.touches[0].clientY
      ], U = [Y[0] - A[0], Y[1] - A[1]];
      A = Y;
      const j = c() * Math.max(O[2], Math.log(O[2])) * (b ? -1 : 1), Q = {
        x: O[0] - U[0] * j,
        y: O[1] - U[1] * j
      }, I = [
        [0, 0],
        [x, p]
      ];
      i.setViewportConstrained({
        x: Q.x,
        y: Q.y,
        zoom: O[2]
      }, I, g);
    }, V = tp().on("start", T).on("zoom", m ? N : null).on("zoom.wheel", y ? E : null);
    s.call(V, {});
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
const cc = (l) => ({
  x: l.x,
  y: l.y,
  zoom: l.k
}), rd = ({ x: l, y: i, zoom: r }) => uc.translate(l, i).scale(r), jl = (l, i) => l.target.closest(`.${i}`), Cp = (l, i) => i === 2 && Array.isArray(l) && l.includes(2), Sw = (l) => ((l *= 2) <= 1 ? l * l * l : (l -= 2) * l * l + 2) / 2, cd = (l, i = 0, r = Sw, c = () => {
}) => {
  const s = typeof i == "number" && i > 0;
  return s || c(), s ? l.transition().duration(i).ease(r).on("end", c) : l;
}, zp = (l) => {
  const i = l.ctrlKey && Yu() ? 10 : 1;
  return -l.deltaY * (l.deltaMode === 1 ? 0.05 : l.deltaMode ? 1 : 2e-3) * i;
};
function bw({ zoomPanValues: l, noWheelClassName: i, d3Selection: r, d3Zoom: c, panOnScrollMode: s, panOnScrollSpeed: f, zoomOnPinch: d, onPanZoomStart: g, onPanZoom: x, onPanZoomEnd: p }) {
  return (v) => {
    if (jl(v, i))
      return v.ctrlKey && v.preventDefault(), !1;
    v.preventDefault(), v.stopImmediatePropagation();
    const m = r.property("__zoom").k || 1;
    if (v.ctrlKey && d) {
      const T = mn(v), N = zp(v), V = m * Math.pow(2, N);
      c.scaleTo(r, V, T, v);
      return;
    }
    const y = v.deltaMode === 1 ? 20 : 1;
    let b = s === ma.Vertical ? 0 : v.deltaX * y, E = s === ma.Horizontal ? 0 : v.deltaY * y;
    !Yu() && v.shiftKey && s !== ma.Vertical && (b = v.deltaY * y, E = 0), c.translateBy(
      r,
      -(b / m) * f,
      -(E / m) * f,
      // @ts-ignore
      { internal: !0 }
    );
    const A = cc(r.property("__zoom"));
    clearTimeout(l.panScrollTimeout), l.isPanScrolling ? x?.(v, A) : (l.isPanScrolling = !0, g?.(v, A)), l.panScrollTimeout = setTimeout(() => {
      p?.(v, A), l.isPanScrolling = !1;
    }, 150);
  };
}
function Ew({ noWheelClassName: l, preventScrolling: i, d3ZoomHandler: r }) {
  return function(c, s) {
    const f = c.type === "wheel", d = !i && f && !c.ctrlKey, g = jl(c, l);
    if (c.ctrlKey && f && g && c.preventDefault(), d || g)
      return null;
    c.preventDefault(), r.call(this, c, s);
  };
}
function _w({ zoomPanValues: l, onDraggingChange: i, onPanZoomStart: r }) {
  return (c) => {
    if (c.sourceEvent?.internal)
      return;
    const s = cc(c.transform);
    l.mouseButton = c.sourceEvent?.button || 0, l.isZoomingOrPanning = !0, l.prevViewport = s, c.sourceEvent?.type === "mousedown" && i(!0), r && r?.(c.sourceEvent, s);
  };
}
function ww({ zoomPanValues: l, panOnDrag: i, onPaneContextMenu: r, onTransformChange: c, onPanZoom: s }) {
  return (f) => {
    l.usedRightMouseButton = !!(r && Cp(i, l.mouseButton ?? 0)), f.sourceEvent?.sync || c([f.transform.x, f.transform.y, f.transform.k]), s && !f.sourceEvent?.internal && s?.(f.sourceEvent, cc(f.transform));
  };
}
function Nw({ zoomPanValues: l, panOnDrag: i, panOnScroll: r, onDraggingChange: c, onPanZoomEnd: s, onPaneContextMenu: f }) {
  return (d) => {
    if (!d.sourceEvent?.internal && (l.isZoomingOrPanning = !1, f && Cp(i, l.mouseButton ?? 0) && !l.usedRightMouseButton && d.sourceEvent && f(d.sourceEvent), l.usedRightMouseButton = !1, c(!1), s)) {
      const g = cc(d.transform);
      l.prevViewport = g, clearTimeout(l.timerId), l.timerId = setTimeout(
        () => {
          s?.(d.sourceEvent, g);
        },
        // we need a setTimeout for panOnScroll to suppress multiple end events fired during scroll
        r ? 150 : 0
      );
    }
  };
}
function Tw({ panActivationKeyPressed: l, zoomActivationKeyPressed: i, zoomOnScroll: r, zoomOnPinch: c, panOnDrag: s, panOnScroll: f, zoomOnDoubleClick: d, userSelectionActive: g, noWheelClassName: x, noPanClassName: p, lib: v, connectionInProgress: m }) {
  return (y) => {
    const b = i || r, E = c && y.ctrlKey, A = y.type === "wheel";
    if (y.button === 1 && y.type === "mousedown" && (jl(y, `${v}-flow__node`) || jl(y, `${v}-flow__edge`) || jl(y, `${v}-flow__selection`) || jl(y, `${v}-flow__nodesselection`)))
      return !0;
    if (!s && !b && !f && !d && !c || g || m && !A || jl(y, x) && A || jl(y, p) && (!A || f && A && !i) || !c && y.ctrlKey && A)
      return !1;
    if (!c && y.type === "touchstart" && y.touches?.length > 1)
      return y.preventDefault(), !1;
    if (!b && !f && !E && A || !s && (y.type === "mousedown" || y.type === "touchstart") || Array.isArray(s) && !s.includes(y.button) && y.type === "mousedown")
      return !1;
    const T = Array.isArray(s) && s.includes(y.button) || !y.button || y.button <= 1;
    return (!y.ctrlKey || A || l) && T;
  };
}
function Cw({ domNode: l, minZoom: i, maxZoom: r, translateExtent: c, viewport: s, onPanZoom: f, onPanZoomStart: d, onPanZoomEnd: g, onDraggingChange: x }) {
  const p = {
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
  (typeof ResizeObserver < "u" ? new ResizeObserver((lt) => {
    const z = lt[0];
    z && (m = [
      [0, 0],
      [z.contentRect.width, z.contentRect.height]
    ]);
  }) : null)?.observe(l);
  const b = tp().extent(() => m).scaleExtent([i, r]).translateExtent(c), E = $e(l).call(b);
  O({
    x: s.x,
    y: s.y,
    zoom: bi(s.zoom, i, r)
  }, [
    [0, 0],
    [v.width, v.height]
  ], c);
  const A = E.on("wheel.zoom"), T = E.on("dblclick.zoom");
  b.wheelDelta(zp);
  async function N(lt, z) {
    return E ? new Promise((L) => {
      b?.interpolate(z?.interpolate === "linear" ? Mu : qr).transform(cd(E, z?.duration, z?.ease, () => L(!0)), lt);
    }) : !1;
  }
  function V({ noWheelClassName: lt, noPanClassName: z, onPaneContextMenu: L, userSelectionActive: D, panOnScroll: B, panOnDrag: G, panOnScrollMode: $, panOnScrollSpeed: et, preventScrolling: ut, zoomOnPinch: R, zoomOnScroll: nt, zoomOnDoubleClick: _, panActivationKeyPressed: F = !1, zoomActivationKeyPressed: st, lib: ot, onTransformChange: P, connectionInProgress: ht, paneClickDistance: mt, selectionOnDrag: ft }) {
    D && !p.isZoomingOrPanning && w();
    const dt = B && !st && !D;
    b.clickDistance(ft ? 1 / 0 : !vn(mt) || mt < 0 ? 0 : mt);
    const xt = dt ? bw({
      zoomPanValues: p,
      noWheelClassName: lt,
      d3Selection: E,
      d3Zoom: b,
      panOnScrollMode: $,
      panOnScrollSpeed: et,
      zoomOnPinch: R,
      onPanZoomStart: d,
      onPanZoom: f,
      onPanZoomEnd: g
    }) : Ew({
      noWheelClassName: lt,
      preventScrolling: ut,
      d3ZoomHandler: A
    });
    E.on("wheel.zoom", xt, { passive: !1 });
    const wt = _w({
      zoomPanValues: p,
      onDraggingChange: x,
      onPanZoomStart: d
    });
    b.on("start", wt);
    const _t = ww({
      zoomPanValues: p,
      panOnDrag: G,
      onPaneContextMenu: !!L,
      onPanZoom: f,
      onTransformChange: P
    });
    b.on("zoom", _t);
    const Ct = Nw({
      zoomPanValues: p,
      panOnDrag: G,
      panOnScroll: B,
      onPaneContextMenu: L,
      onPanZoomEnd: g,
      onDraggingChange: x
    });
    b.on("end", Ct);
    const Ht = Tw({
      panActivationKeyPressed: F,
      zoomActivationKeyPressed: st,
      panOnDrag: G,
      zoomOnScroll: nt,
      panOnScroll: B,
      zoomOnDoubleClick: _,
      zoomOnPinch: R,
      userSelectionActive: D,
      noPanClassName: z,
      noWheelClassName: lt,
      lib: ot,
      connectionInProgress: ht
    });
    b.filter(Ht), _ ? E.on("dblclick.zoom", T) : E.on("dblclick.zoom", null);
  }
  function w() {
    b.on("zoom", null);
  }
  async function O(lt, z, L) {
    const D = rd(lt), B = b?.constrain()(D, z, L);
    return B && await N(B), B;
  }
  async function Y(lt, z) {
    const L = rd(lt);
    return await N(L, z), L;
  }
  function U(lt) {
    if (E) {
      const z = rd(lt), L = E.property("__zoom");
      (L.k !== lt.zoom || L.x !== lt.x || L.y !== lt.y) && b?.transform(E, z, null, { sync: !0 });
    }
  }
  function j() {
    const lt = E ? Pv(E.node()) : { x: 0, y: 0, k: 1 };
    return { x: lt.x, y: lt.y, zoom: lt.k };
  }
  async function Q(lt, z) {
    return E ? new Promise((L) => {
      b?.interpolate(z?.interpolate === "linear" ? Mu : qr).scaleTo(cd(E, z?.duration, z?.ease, () => L(!0)), lt);
    }) : !1;
  }
  async function I(lt, z) {
    return E ? new Promise((L) => {
      b?.interpolate(z?.interpolate === "linear" ? Mu : qr).scaleBy(cd(E, z?.duration, z?.ease, () => L(!0)), lt);
    }) : !1;
  }
  function ct(lt) {
    b?.scaleExtent(lt);
  }
  function k(lt) {
    b?.translateExtent(lt);
  }
  function rt(lt) {
    const z = !vn(lt) || lt < 0 ? 0 : lt;
    b?.clickDistance(z);
  }
  return {
    update: V,
    destroy: w,
    setViewport: Y,
    setViewportConstrained: O,
    getViewport: j,
    scaleTo: Q,
    scaleBy: I,
    setScaleExtent: ct,
    setTranslateExtent: k,
    syncViewport: U,
    setClickDistance: rt
  };
}
var _i;
(function(l) {
  l.Line = "line", l.Handle = "handle";
})(_i || (_i = {}));
function zw({ width: l, prevWidth: i, height: r, prevHeight: c, affectsX: s, affectsY: f }) {
  const d = l - i, g = r - c, x = [d > 0 ? 1 : d < 0 ? -1 : 0, g > 0 ? 1 : g < 0 ? -1 : 0];
  return d && s && (x[0] = x[0] * -1), g && f && (x[1] = x[1] * -1), x;
}
function Xy(l) {
  const i = l.includes("right") || l.includes("left"), r = l.includes("bottom") || l.includes("top"), c = l.includes("left"), s = l.includes("top");
  return {
    isHorizontal: i,
    isVertical: r,
    affectsX: c,
    affectsY: s
  };
}
function Hl(l, i) {
  return Math.max(0, i - l);
}
function Ul(l, i) {
  return Math.max(0, l - i);
}
function jr(l, i, r) {
  return Math.max(0, i - l, l - r);
}
function Zy(l, i) {
  return l ? !i : i;
}
function Mw(l, i, r, c, s, f, d, g) {
  let { affectsX: x, affectsY: p } = i;
  const { isHorizontal: v, isVertical: m } = i, y = v && m, { xSnapped: b, ySnapped: E } = r, { minWidth: A, maxWidth: T, minHeight: N, maxHeight: V } = c, { x: w, y: O, width: Y, height: U, aspectRatio: j } = l;
  let Q = Math.floor(v ? b - l.pointerX : 0), I = Math.floor(m ? E - l.pointerY : 0);
  const ct = Y + (x ? -Q : Q), k = U + (p ? -I : I), rt = -f[0] * Y, lt = -f[1] * U;
  let z = jr(ct, A, T), L = jr(k, N, V);
  if (d) {
    let G = 0, $ = 0;
    x && Q < 0 ? G = Hl(w + Q + rt, d[0][0]) : !x && Q > 0 && (G = Ul(w + ct + rt, d[1][0])), p && I < 0 ? $ = Hl(O + I + lt, d[0][1]) : !p && I > 0 && ($ = Ul(O + k + lt, d[1][1])), z = Math.max(z, G), L = Math.max(L, $);
  }
  if (g) {
    let G = 0, $ = 0;
    x && Q > 0 ? G = Ul(w + Q, g[0][0]) : !x && Q < 0 && (G = Hl(w + ct, g[1][0])), p && I > 0 ? $ = Ul(O + I, g[0][1]) : !p && I < 0 && ($ = Hl(O + k, g[1][1])), z = Math.max(z, G), L = Math.max(L, $);
  }
  if (s) {
    if (v) {
      const G = jr(ct / j, N, V) * j;
      if (z = Math.max(z, G), d) {
        let $ = 0;
        !x && !p || x && !p && y ? $ = Ul(O + lt + ct / j, d[1][1]) * j : $ = Hl(O + lt + (x ? Q : -Q) / j, d[0][1]) * j, z = Math.max(z, $);
      }
      if (g) {
        let $ = 0;
        !x && !p || x && !p && y ? $ = Hl(O + ct / j, g[1][1]) * j : $ = Ul(O + (x ? Q : -Q) / j, g[0][1]) * j, z = Math.max(z, $);
      }
    }
    if (m) {
      const G = jr(k * j, A, T) / j;
      if (L = Math.max(L, G), d) {
        let $ = 0;
        !x && !p || p && !x && y ? $ = Ul(w + k * j + rt, d[1][0]) / j : $ = Hl(w + (p ? I : -I) * j + rt, d[0][0]) / j, L = Math.max(L, $);
      }
      if (g) {
        let $ = 0;
        !x && !p || p && !x && y ? $ = Hl(w + k * j, g[1][0]) / j : $ = Ul(w + (p ? I : -I) * j, g[0][0]) / j, L = Math.max(L, $);
      }
    }
  }
  I = I + (I < 0 ? L : -L), Q = Q + (Q < 0 ? z : -z), s && (y ? ct > k * j ? I = (Zy(x, p) ? -Q : Q) / j : Q = (Zy(x, p) ? -I : I) * j : v ? (I = Q / j, p = x) : (Q = I * j, x = p));
  const D = x ? w + Q : w, B = p ? O + I : O;
  return {
    width: Y + (x ? -Q : Q),
    height: U + (p ? -I : I),
    x: f[0] * Q * (x ? -1 : 1) + D,
    y: f[1] * I * (p ? -1 : 1) + B
  };
}
const Mp = { width: 0, height: 0, x: 0, y: 0 }, Aw = {
  ...Mp,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Ow(l, i, r) {
  const c = i.position.x + l.position.x, s = i.position.y + l.position.y, f = l.measured.width ?? 0, d = l.measured.height ?? 0, g = r[0] * f, x = r[1] * d;
  return [
    [c - g, s - x],
    [c + f - g, s + d - x]
  ];
}
function Dw({ domNode: l, nodeId: i, getStoreItems: r, onChange: c, onEnd: s }) {
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
  function g({ controlPosition: p, boundaries: v, keepAspectRatio: m, resizeDirection: y, onResizeStart: b, onResize: E, onResizeEnd: A, shouldResize: T }) {
    let N = { ...Mp }, V = { ...Aw };
    d = {
      boundaries: v,
      resizeDirection: y,
      keepAspectRatio: m,
      controlDirection: Xy(p)
    };
    let w, O = null, Y = [], U, j, Q;
    const I = Vv().on("start", (ct) => {
      const { nodeLookup: k, transform: rt, snapGrid: lt, snapToGrid: z, nodeOrigin: L, paneDomNode: D } = r();
      if (w = k.get(i), !w)
        return;
      O = D?.getBoundingClientRect() ?? null;
      const { xSnapped: B, ySnapped: G } = Au(ct.sourceEvent, {
        transform: rt,
        snapGrid: lt,
        snapToGrid: z,
        containerBounds: O
      });
      N = {
        width: w.measured.width ?? 0,
        height: w.measured.height ?? 0,
        x: w.position.x ?? 0,
        y: w.position.y ?? 0
      }, V = {
        ...N,
        pointerX: B,
        pointerY: G,
        aspectRatio: N.width / N.height
      }, U = void 0, j = xa(w.extent) ? w.extent : void 0, w.parentId && (w.extent === "parent" || w.expandParent) && (U = k.get(w.parentId)), U && w.extent === "parent" && (j = [
        [0, 0],
        [U.measured.width, U.measured.height]
      ]), Y = [], Q = void 0;
      for (const [$, et] of k)
        if (et.parentId === i && (Y.push({
          id: $,
          position: { ...et.position },
          extent: et.extent
        }), et.extent === "parent" || et.expandParent)) {
          const ut = Ow(et, w, et.origin ?? L);
          Q ? Q = [
            [Math.min(ut[0][0], Q[0][0]), Math.min(ut[0][1], Q[0][1])],
            [Math.max(ut[1][0], Q[1][0]), Math.max(ut[1][1], Q[1][1])]
          ] : Q = ut;
        }
      b?.(ct, { ...N });
    }).on("drag", (ct) => {
      const { transform: k, snapGrid: rt, snapToGrid: lt, nodeOrigin: z } = r(), L = Au(ct.sourceEvent, {
        transform: k,
        snapGrid: rt,
        snapToGrid: lt,
        containerBounds: O
      }), D = [];
      if (!w)
        return;
      const { x: B, y: G, width: $, height: et } = N, ut = {}, R = w.origin ?? z, { width: nt, height: _, x: F, y: st } = Mw(V, d.controlDirection, L, d.boundaries, d.keepAspectRatio, R, j, Q), ot = nt !== $, P = _ !== et, ht = F !== B && ot, mt = st !== G && P;
      if (!ht && !mt && !ot && !P)
        return;
      const ft = {
        prevValues: { ...N },
        startX: V.x,
        startY: V.y,
        childNodes: Y.map((_t) => ({
          ..._t,
          position: { ..._t.position }
        }))
      };
      if ((ht || mt || R[0] === 1 || R[1] === 1) && (ut.x = ht ? F : N.x, ut.y = mt ? st : N.y, N.x = ut.x, N.y = ut.y, Y.length > 0)) {
        const _t = F - B, Ct = st - G;
        for (const Ht of Y)
          Ht.position = {
            x: Ht.position.x - _t + R[0] * (nt - $),
            y: Ht.position.y - Ct + R[1] * (_ - et)
          }, D.push(Ht);
      }
      if ((ot || P) && (ut.width = ot && (!d.resizeDirection || d.resizeDirection === "horizontal") ? nt : N.width, ut.height = P && (!d.resizeDirection || d.resizeDirection === "vertical") ? _ : N.height, N.width = ut.width, N.height = ut.height), U && w.expandParent) {
        const _t = R[0] * (ut.width ?? 0);
        ut.x && ut.x < _t && (N.x = _t, V.x = V.x - (ut.x - _t));
        const Ct = R[1] * (ut.height ?? 0);
        ut.y && ut.y < Ct && (N.y = Ct, V.y = V.y - (ut.y - Ct));
      }
      const dt = zw({
        width: N.width,
        prevWidth: $,
        height: N.height,
        prevHeight: et,
        affectsX: d.controlDirection.affectsX,
        affectsY: d.controlDirection.affectsY
      }), xt = { ...N, direction: dt };
      if (T?.(ct, xt) === !1) {
        N = ft.prevValues, V.x = ft.startX, V.y = ft.startY, Y.forEach((_t, Ct) => {
          _t.position = ft.childNodes[Ct].position;
        });
        return;
      }
      E?.(ct, xt), c(ut, D);
    }).on("end", (ct) => {
      A?.(ct, { ...N }), s?.({ ...N });
    });
    f.call(I);
  }
  function x() {
    f.on(".drag", null);
  }
  return {
    update: g,
    destroy: x
  };
}
var sd = { exports: {} }, fd = {}, dd = { exports: {} }, hd = {};
var Gy;
function Rw() {
  if (Gy) return hd;
  Gy = 1;
  var l = Lu();
  function i(m, y) {
    return m === y && (m !== 0 || 1 / m === 1 / y) || m !== m && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : i, c = l.useState, s = l.useEffect, f = l.useLayoutEffect, d = l.useDebugValue;
  function g(m, y) {
    var b = y(), E = c({ inst: { value: b, getSnapshot: y } }), A = E[0].inst, T = E[1];
    return f(
      function() {
        A.value = b, A.getSnapshot = y, x(A) && T({ inst: A });
      },
      [m, b, y]
    ), s(
      function() {
        return x(A) && T({ inst: A }), m(function() {
          x(A) && T({ inst: A });
        });
      },
      [m]
    ), d(b), b;
  }
  function x(m) {
    var y = m.getSnapshot;
    m = m.value;
    try {
      var b = y();
      return !r(m, b);
    } catch {
      return !0;
    }
  }
  function p(m, y) {
    return y();
  }
  var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : g;
  return hd.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : v, hd;
}
var Qy;
function Hw() {
  return Qy || (Qy = 1, dd.exports = Rw()), dd.exports;
}
var Ky;
function Uw() {
  if (Ky) return fd;
  Ky = 1;
  var l = Lu(), i = Hw();
  function r(p, v) {
    return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
  }
  var c = typeof Object.is == "function" ? Object.is : r, s = i.useSyncExternalStore, f = l.useRef, d = l.useEffect, g = l.useMemo, x = l.useDebugValue;
  return fd.useSyncExternalStoreWithSelector = function(p, v, m, y, b) {
    var E = f(null);
    if (E.current === null) {
      var A = { hasValue: !1, value: null };
      E.current = A;
    } else A = E.current;
    E = g(
      function() {
        function N(U) {
          if (!V) {
            if (V = !0, w = U, U = y(U), b !== void 0 && A.hasValue) {
              var j = A.value;
              if (b(j, U))
                return O = j;
            }
            return O = U;
          }
          if (j = O, c(w, U)) return j;
          var Q = y(U);
          return b !== void 0 && b(j, Q) ? (w = U, j) : (w = U, O = Q);
        }
        var V = !1, w, O, Y = m === void 0 ? null : m;
        return [
          function() {
            return N(v());
          },
          Y === null ? void 0 : function() {
            return N(Y());
          }
        ];
      },
      [v, m, y, b]
    );
    var T = s(p, E[0], E[1]);
    return d(
      function() {
        A.hasValue = !0, A.value = T;
      },
      [T]
    ), x(T), T;
  }, fd;
}
var $y;
function jw() {
  return $y || ($y = 1, sd.exports = Uw()), sd.exports;
}
var Bw = jw();
const Yw = /* @__PURE__ */ _v(Bw), Vw = {}, Jy = (l) => {
  let i;
  const r = /* @__PURE__ */ new Set(), c = (v, m) => {
    const y = typeof v == "function" ? v(i) : v;
    if (!Object.is(y, i)) {
      const b = i;
      i = m ?? (typeof y != "object" || y === null) ? y : Object.assign({}, i, y), r.forEach((E) => E(i, b));
    }
  }, s = () => i, x = { setState: c, getState: s, getInitialState: () => p, subscribe: (v) => (r.add(v), () => r.delete(v)), destroy: () => {
    (Vw ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, p = i = l(c, s, x);
  return x;
}, Lw = (l) => l ? Jy(l) : Jy, { useDebugValue: qw } = nb, { useSyncExternalStoreWithSelector: Xw } = Yw, Zw = (l) => l;
function Ap(l, i = Zw, r) {
  const c = Xw(
    l.subscribe,
    l.getState,
    l.getServerState || l.getInitialState,
    i,
    r
  );
  return qw(c), c;
}
const ky = (l, i) => {
  const r = Lw(l), c = (s, f = i) => Ap(r, s, f);
  return Object.assign(c, r), c;
}, Gw = (l, i) => l ? ky(l, i) : ky;
function It(l, i) {
  if (Object.is(l, i))
    return !0;
  if (typeof l != "object" || l === null || typeof i != "object" || i === null)
    return !1;
  if (l instanceof Map && i instanceof Map) {
    if (l.size !== i.size) return !1;
    for (const [c, s] of l)
      if (!Object.is(s, i.get(c)))
        return !1;
    return !0;
  }
  if (l instanceof Set && i instanceof Set) {
    if (l.size !== i.size) return !1;
    for (const c of l)
      if (!i.has(c))
        return !1;
    return !0;
  }
  const r = Object.keys(l);
  if (r.length !== Object.keys(i).length)
    return !1;
  for (const c of r)
    if (!Object.prototype.hasOwnProperty.call(i, c) || !Object.is(l[c], i[c]))
      return !1;
  return !0;
}
var Qw = wv();
const sc = tt.createContext(null), Kw = sc.Provider, Op = xn.error001("react");
function jt(l, i) {
  const r = tt.useContext(sc);
  if (r === null)
    throw new Error(Op);
  return Ap(r, l, i);
}
function $t() {
  const l = tt.useContext(sc);
  if (l === null)
    throw new Error(Op);
  return tt.useMemo(() => ({
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
  const i = jt(kw);
  return C.jsx("div", { id: `${Jw}-${l}`, "aria-live": "assertive", "aria-atomic": "true", style: $w, children: i });
}
function Ww({ rfId: l, disableKeyboardA11y: i }) {
  const r = jt(Iw);
  return C.jsxs(C.Fragment, { children: [C.jsx("div", { id: `${Dp}-${l}`, style: Iy, children: i ? r["node.a11yDescription.default"] : r["node.a11yDescription.keyboardDisabled"] }), C.jsx("div", { id: `${Rp}-${l}`, style: Iy, children: r["edge.a11yDescription.default"] }), !i && C.jsx(Fw, { rfId: l })] });
}
const fc = tt.forwardRef(({ position: l = "top-left", children: i, className: r, style: c, ...s }, f) => {
  const d = `${l}`.split("-");
  return C.jsx("div", { className: ue(["react-flow__panel", r, ...d]), style: c, ref: f, ...s, children: i });
});
fc.displayName = "Panel";
const Fy = "https://reactflow.dev?utm_source=attribution";
function Pw({ proOptions: l, position: i = "bottom-right" }) {
  return tt.useEffect(() => {
  }, []), l?.hideAttribution ? null : C.jsx(fc, { position: i, className: "react-flow__attribution", "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${Fy}`, children: C.jsx("a", { href: Fy, target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const tN = (l) => {
  const i = [], r = [];
  for (const [, c] of l.nodeLookup)
    c.selected && i.push(c.internals.userNode);
  for (const [, c] of l.edgeLookup)
    c.selected && r.push(c);
  return { selectedNodes: i, selectedEdges: r };
}, Br = (l) => l.id;
function eN(l, i) {
  return It(l.selectedNodes.map(Br), i.selectedNodes.map(Br)) && It(l.selectedEdges.map(Br), i.selectedEdges.map(Br));
}
function nN({ onSelectionChange: l }) {
  const i = $t(), { selectedNodes: r, selectedEdges: c } = jt(tN, eN);
  return tt.useEffect(() => {
    const s = { nodes: r, edges: c };
    l?.(s), i.getState().onSelectionChangeHandlers.forEach((f) => f(s));
  }, [r, c, l]), null;
}
const lN = (l) => !!l.onSelectionChangeHandlers;
function aN({ onSelectionChange: l }) {
  const i = jt(lN);
  return l || i ? C.jsx(nN, { onSelectionChange: l }) : null;
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
  translateExtent: Uu,
  nodeOrigin: Hp,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function rN(l) {
  const { setNodes: i, setEdges: r, setMinZoom: c, setMaxZoom: s, setTranslateExtent: f, setNodeExtent: d, reset: g, setDefaultNodesAndEdges: x } = jt(oN, It), p = $t();
  tt.useEffect(() => (x(l.defaultNodes, l.defaultEdges), () => {
    v.current = Py, g();
  }), []);
  const v = tt.useRef(Py);
  return tt.useEffect(
    () => {
      for (const m of Wy) {
        const y = l[m], b = v.current[m];
        y !== b && (typeof l[m] > "u" || (m === "nodes" ? i(y) : m === "edges" ? r(y) : m === "minZoom" ? c(y) : m === "maxZoom" ? s(y) : m === "translateExtent" ? f(y) : m === "nodeExtent" ? d(y) : m === "ariaLabelConfig" ? p.setState({ ariaLabelConfig: Q2(y) }) : m === "fitView" ? p.setState({ fitViewQueued: y }) : m === "fitViewOptions" ? p.setState({ fitViewOptions: y }) : p.setState({ [m]: y })));
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
function cN(l) {
  const [i, r] = tt.useState(l === "system" ? null : l);
  return tt.useEffect(() => {
    if (l !== "system") {
      r(l);
      return;
    }
    const c = tv(), s = () => r(c?.matches ? "dark" : "light");
    return s(), c?.addEventListener("change", s), () => {
      c?.removeEventListener("change", s);
    };
  }, [l]), i !== null ? i : tv()?.matches ? "dark" : "light";
}
const ev = typeof document < "u" ? document : null;
function Vu(l = null, i = { target: ev, actInsideInputWithModifier: !0 }) {
  const [r, c] = tt.useState(!1), s = tt.useRef(!1), f = tt.useRef(/* @__PURE__ */ new Set([])), [d, g] = tt.useMemo(() => {
    if (l !== null) {
      const p = (Array.isArray(l) ? l : [l]).filter((m) => typeof m == "string").map((m) => m.replace(/\+/g, `
`).replace(`

`, `
+`).split(`
`)), v = p.reduce((m, y) => m.concat(...y), []);
      return [p, v];
    }
    return [[], []];
  }, [l]);
  return tt.useEffect(() => {
    const x = i?.target ?? ev, p = i?.actInsideInputWithModifier ?? !0;
    if (l !== null) {
      const v = (b) => {
        if (s.current = b.ctrlKey || b.metaKey || b.shiftKey || b.altKey, (!s.current || s.current && !p) && gp(b))
          return !1;
        const A = lv(b.code, g);
        if (f.current.add(b[A]), nv(d, f.current, !1)) {
          const T = b.composedPath?.()?.[0] || b.target, N = T?.nodeName === "BUTTON" || T?.nodeName === "A";
          i.preventDefault !== !1 && (s.current || !N) && b.preventDefault(), c(!0);
        }
      }, m = (b) => {
        const E = lv(b.code, g);
        nv(d, f.current, !0) ? (c(!1), f.current.clear()) : f.current.delete(b[E]), b.key === "Meta" && f.current.clear(), s.current = !1;
      }, y = () => {
        f.current.clear(), c(!1);
      };
      return x?.addEventListener("keydown", v), x?.addEventListener("keyup", m), window.addEventListener("blur", y), window.addEventListener("contextmenu", y), () => {
        x?.removeEventListener("keydown", v), x?.removeEventListener("keyup", m), window.removeEventListener("blur", y), window.removeEventListener("contextmenu", y);
      };
    }
  }, [l, c]), r;
}
function nv(l, i, r) {
  return l.filter((c) => r || c.length === i.size).some((c) => c.every((s) => i.has(s)));
}
function lv(l, i) {
  return i.includes(l) ? "code" : "key";
}
const sN = () => {
  const l = $t();
  return tt.useMemo(() => ({
    zoomIn: async (i) => {
      const { panZoom: r } = l.getState();
      return r ? r.scaleBy(1.2, i) : !1;
    },
    zoomOut: async (i) => {
      const { panZoom: r } = l.getState();
      return r ? r.scaleBy(1 / 1.2, i) : !1;
    },
    zoomTo: async (i, r) => {
      const { panZoom: c } = l.getState();
      return c ? c.scaleTo(i, r) : !1;
    },
    getZoom: () => l.getState().transform[2],
    setViewport: async (i, r) => {
      const { transform: [c, s, f], panZoom: d } = l.getState();
      return d ? (await d.setViewport({
        x: i.x ?? c,
        y: i.y ?? s,
        zoom: i.zoom ?? f
      }, r), !0) : !1;
    },
    getViewport: () => {
      const [i, r, c] = l.getState().transform;
      return { x: i, y: r, zoom: c };
    },
    setCenter: async (i, r, c) => l.getState().setCenter(i, r, c),
    fitBounds: async (i, r) => {
      const { width: c, height: s, minZoom: f, maxZoom: d, panZoom: g } = l.getState(), x = Ld(i, c, s, f, d, r?.padding ?? 0.1);
      return g ? (await g.setViewport(x, {
        duration: r?.duration,
        ease: r?.ease,
        interpolate: r?.interpolate
      }), !0) : !1;
    },
    screenToFlowPosition: (i, r = {}) => {
      const { transform: c, snapGrid: s, snapToGrid: f, domNode: d } = l.getState();
      if (!d)
        return i;
      const { x: g, y: x } = d.getBoundingClientRect(), p = {
        x: i.x - g,
        y: i.y - x
      }, v = r.snapGrid ?? s, m = r.snapToGrid ?? f;
      return Ku(p, c, m, v);
    },
    flowToScreenPosition: (i) => {
      const { transform: r, domNode: c } = l.getState();
      if (!c)
        return i;
      const { x: s, y: f } = c.getBoundingClientRect(), d = Ei(i, r);
      return {
        x: d.x + s,
        y: d.y + f
      };
    }
  }), []);
};
function Up(l, i) {
  const r = [], c = /* @__PURE__ */ new Map(), s = [];
  for (const f of l)
    if (f.type === "add") {
      s.push(f);
      continue;
    } else if (f.type === "remove" || f.type === "replace")
      c.set(f.id, [f]);
    else {
      const d = c.get(f.id);
      d ? d.push(f) : c.set(f.id, [f]);
    }
  for (const f of i) {
    const d = c.get(f.id);
    if (!d) {
      r.push(f);
      continue;
    }
    if (d[0].type === "remove")
      continue;
    if (d[0].type === "replace") {
      r.push({ ...d[0].item });
      continue;
    }
    const g = { ...f };
    for (const x of d)
      fN(x, g);
    r.push(g);
  }
  return s.length && s.forEach((f) => {
    f.index !== void 0 ? r.splice(f.index, 0, { ...f.item }) : r.push({ ...f.item });
  }), r;
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
function jp(l, i) {
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
function mi(l, i = /* @__PURE__ */ new Set(), r = !1) {
  const c = [];
  for (const [s, f] of l) {
    const d = i.has(s);
    !(f.selected === void 0 && !d) && f.selected !== d && (r && (f.selected = d), c.push(da(f.id, d)));
  }
  return c;
}
function av({ items: l = [], lookup: i }) {
  const r = [], c = new Map(l.map((s) => [s.id, s]));
  for (const [s, f] of l.entries()) {
    const d = i.get(f.id), g = d?.internals?.userNode ?? d;
    g !== void 0 && g !== f && r.push({ id: f.id, item: f, type: "replace" }), g === void 0 && r.push({ item: f, type: "add", index: s });
  }
  for (const [s] of i)
    c.get(s) === void 0 && r.push({ id: s, type: "remove" });
  return r;
}
function iv(l) {
  return {
    id: l.id,
    type: "remove"
  };
}
const hN = cp();
function gN(l, i, r = {}) {
  return F2(l, i, {
    ...r,
    onError: r.onError ?? hN
  });
}
const uv = (l) => j2(l), mN = (l) => ap(l);
function Bp(l) {
  return tt.forwardRef(l);
}
const Yp = typeof window < "u" ? tt.useLayoutEffect : tt.useEffect;
function ov(l) {
  const [i, r] = tt.useState(BigInt(0)), [c] = tt.useState(() => yN(() => r((s) => s + BigInt(1))));
  return Yp(() => {
    const s = c.get();
    s.length && (l(s), c.reset());
  }, [i]), c;
}
function yN(l) {
  let i = [];
  return {
    get: () => i,
    reset: () => {
      i = [];
    },
    push: (r) => {
      i.push(r), l();
    }
  };
}
const Vp = tt.createContext(null);
function vN({ children: l }) {
  const i = $t(), r = tt.useCallback((g) => {
    const { nodes: x = [], setNodes: p, hasDefaultNodes: v, onNodesChange: m, nodeLookup: y, fitViewQueued: b, onNodesChangeMiddlewareMap: E } = i.getState();
    let A = x;
    for (const N of g)
      A = typeof N == "function" ? N(A) : N;
    let T = av({
      items: A,
      lookup: y
    });
    for (const N of E.values())
      T = N(T);
    v && p(A), T.length > 0 ? m?.(T) : b && window.requestAnimationFrame(() => {
      const { fitViewQueued: N, nodes: V, setNodes: w } = i.getState();
      N && w(V);
    });
  }, []), c = ov(r), s = tt.useCallback((g) => {
    const { edges: x = [], setEdges: p, hasDefaultEdges: v, onEdgesChange: m, edgeLookup: y } = i.getState();
    let b = x;
    for (const E of g)
      b = typeof E == "function" ? E(b) : E;
    v ? p(b) : m && m(av({
      items: b,
      lookup: y
    }));
  }, []), f = ov(s), d = tt.useMemo(() => ({ nodeQueue: c, edgeQueue: f }), []);
  return C.jsx(Vp.Provider, { value: d, children: l });
}
function pN() {
  const l = tt.useContext(Vp);
  if (!l)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return l;
}
const xN = (l) => !!l.panZoom;
function Jd() {
  const l = sN(), i = $t(), r = pN(), c = jt(xN), s = tt.useMemo(() => {
    const f = (m) => i.getState().nodeLookup.get(m), d = (m) => {
      r.nodeQueue.push(m);
    }, g = (m) => {
      r.edgeQueue.push(m);
    }, x = (m) => {
      const { nodeLookup: y, nodeOrigin: b } = i.getState(), E = uv(m) ? m : y.get(m.id), A = E.parentId ? fp(E.position, E.measured, E.parentId, y, b) : E.position, T = {
        ...E,
        position: A,
        width: E.measured?.width ?? E.width,
        height: E.measured?.height ?? E.height
      };
      return Bu(T);
    }, p = (m, y, b = { replace: !1 }) => {
      d((E) => E.map((A) => {
        if (A.id === m) {
          const T = typeof y == "function" ? y(A) : y;
          return b.replace && uv(T) ? T : { ...A, ...T };
        }
        return A;
      }));
    }, v = (m, y, b = { replace: !1 }) => {
      g((E) => E.map((A) => {
        if (A.id === m) {
          const T = typeof y == "function" ? y(A) : y;
          return b.replace && mN(T) ? T : { ...A, ...T };
        }
        return A;
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
        r.nodeQueue.push((b) => [...b, ...y]);
      },
      addEdges: (m) => {
        const y = Array.isArray(m) ? m : [m];
        r.edgeQueue.push((b) => [...b, ...y]);
      },
      toObject: () => {
        const { nodes: m = [], edges: y = [], transform: b } = i.getState(), [E, A, T] = b;
        return {
          nodes: m.map((N) => ({ ...N })),
          edges: y.map((N) => ({ ...N })),
          viewport: {
            x: E,
            y: A,
            zoom: T
          }
        };
      },
      deleteElements: async ({ nodes: m = [], edges: y = [] }) => {
        const { nodes: b, edges: E, onNodesDelete: A, onEdgesDelete: T, triggerNodeChanges: N, triggerEdgeChanges: V, onDelete: w, onBeforeDelete: O } = i.getState(), { nodes: Y, edges: U } = await q2({
          nodesToRemove: m,
          edgesToRemove: y,
          nodes: b,
          edges: E,
          onBeforeDelete: O
        }), j = U.length > 0, Q = Y.length > 0;
        if (j) {
          const I = U.map(iv);
          T?.(U), V(I);
        }
        if (Q) {
          const I = Y.map(iv);
          A?.(Y), N(I);
        }
        return (Q || j) && w?.({ nodes: Y, edges: U }), { deletedNodes: Y, deletedEdges: U };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (m, y = !0, b) => {
        const E = Oy(m), A = E ? m : x(m), T = b !== void 0;
        return A ? (b || i.getState().nodes).filter((N) => {
          const V = i.getState().nodeLookup.get(N.id);
          if (V && !E && (N.id === m.id || !V.internals.positionAbsolute))
            return !1;
          const w = Bu(T ? N : V), O = tc(w, A);
          return y && O > 0 || O >= w.width * w.height || O >= A.width * A.height;
        }) : [];
      },
      isNodeIntersecting: (m, y, b = !0) => {
        const A = Oy(m) ? m : x(m);
        if (!A)
          return !1;
        const T = tc(A, y);
        return b && T > 0 || T >= y.width * y.height || T >= A.width * A.height;
      },
      updateNode: p,
      updateNodeData: (m, y, b = { replace: !1 }) => {
        p(m, (E) => {
          const A = typeof y == "function" ? y(E) : y;
          return b.replace ? { ...E, data: A } : { ...E, data: { ...E.data, ...A } };
        }, b);
      },
      updateEdge: v,
      updateEdgeData: (m, y, b = { replace: !1 }) => {
        v(m, (E) => {
          const A = typeof y == "function" ? y(E) : y;
          return b.replace ? { ...E, data: A } : { ...E, data: { ...E.data, ...A } };
        }, b);
      },
      getNodesBounds: (m) => {
        const { nodeLookup: y, nodeOrigin: b } = i.getState();
        return B2(m, { nodeLookup: y, nodeOrigin: b });
      },
      getHandleConnections: ({ type: m, id: y, nodeId: b }) => Array.from(i.getState().connectionLookup.get(`${b}-${m}${y ? `-${y}` : ""}`)?.values() ?? []),
      getNodeConnections: ({ type: m, handleId: y, nodeId: b }) => Array.from(i.getState().connectionLookup.get(`${b}${m ? y ? `-${m}-${y}` : `-${m}` : ""}`)?.values() ?? []),
      fitView: async (m) => {
        const y = i.getState().fitViewResolver ?? G2();
        return i.setState({ fitViewQueued: !0, fitViewOptions: m, fitViewResolver: y }), r.nodeQueue.push((b) => [...b]), y.promise;
      }
    };
  }, []);
  return tt.useMemo(() => ({
    ...s,
    ...l,
    viewportInitialized: c
  }), [c]);
}
const rv = (l) => l.selected, SN = typeof window < "u" ? window : void 0;
function bN({ deleteKeyCode: l, multiSelectionKeyCode: i }) {
  const r = $t(), { deleteElements: c } = Jd(), s = Vu(l, { actInsideInputWithModifier: !1 }), f = Vu(i, { target: SN });
  tt.useEffect(() => {
    if (s) {
      const { edges: d, nodes: g } = r.getState();
      c({ nodes: g.filter(rv), edges: d.filter(rv) }), r.setState({ nodesSelectionActive: !1 });
    }
  }, [s]), tt.useEffect(() => {
    r.setState({ multiSelectionActive: f });
  }, [f]);
}
function EN(l) {
  const i = $t();
  tt.useEffect(() => {
    const r = () => {
      if (!l.current || !(l.current.checkVisibility?.() ?? !0))
        return !1;
      const c = qd(l.current);
      (c.height === 0 || c.width === 0) && i.getState().onError?.("004", xn.error004()), i.setState({ width: c.width || 500, height: c.height || 500 });
    };
    if (l.current) {
      r(), window.addEventListener("resize", r);
      const c = new ResizeObserver(() => r());
      return c.observe(l.current), () => {
        window.removeEventListener("resize", r), c && l.current && c.unobserve(l.current);
      };
    }
  }, []);
}
const dc = {
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
function wN({ onPaneContextMenu: l, zoomOnScroll: i = !0, zoomOnPinch: r = !0, panOnScroll: c = !1, panActivationKeyPressed: s, panOnScrollSpeed: f = 0.5, panOnScrollMode: d = ma.Free, zoomOnDoubleClick: g = !0, panOnDrag: x = !0, defaultViewport: p, translateExtent: v, minZoom: m, maxZoom: y, zoomActivationKeyCode: b, preventScrolling: E = !0, children: A, noWheelClassName: T, noPanClassName: N, onViewportChange: V, isControlledViewport: w, paneClickDistance: O, selectionOnDrag: Y }) {
  const U = $t(), j = tt.useRef(null), { userSelectionActive: Q, lib: I, connectionInProgress: ct } = jt(_N, It), k = Vu(b), rt = tt.useRef();
  EN(j);
  const lt = tt.useCallback((z) => {
    V?.({ x: z[0], y: z[1], zoom: z[2] }), w || U.setState({ transform: z });
  }, [V, w]);
  return tt.useEffect(() => {
    if (j.current) {
      rt.current = Cw({
        domNode: j.current,
        minZoom: m,
        maxZoom: y,
        translateExtent: v,
        viewport: p,
        onDraggingChange: (B) => U.setState((G) => G.paneDragging === B ? G : { paneDragging: B }),
        onPanZoomStart: (B, G) => {
          const { onViewportChangeStart: $, onMoveStart: et } = U.getState();
          et?.(B, G), $?.(G);
        },
        onPanZoom: (B, G) => {
          const { onViewportChange: $, onMove: et } = U.getState();
          et?.(B, G), $?.(G);
        },
        onPanZoomEnd: (B, G) => {
          const { onViewportChangeEnd: $, onMoveEnd: et } = U.getState();
          et?.(B, G), $?.(G);
        }
      });
      const { x: z, y: L, zoom: D } = rt.current.getViewport();
      return U.setState({
        panZoom: rt.current,
        transform: [z, L, D],
        domNode: j.current.closest(".react-flow")
      }), () => {
        rt.current?.destroy();
      };
    }
  }, []), tt.useEffect(() => {
    rt.current?.update({
      onPaneContextMenu: l,
      zoomOnScroll: i,
      zoomOnPinch: r,
      panOnScroll: c,
      panActivationKeyPressed: s,
      panOnScrollSpeed: f,
      panOnScrollMode: d,
      zoomOnDoubleClick: g,
      panOnDrag: x,
      zoomActivationKeyPressed: k,
      preventScrolling: E,
      noPanClassName: N,
      userSelectionActive: Q,
      noWheelClassName: T,
      lib: I,
      onTransformChange: lt,
      connectionInProgress: ct,
      selectionOnDrag: Y,
      paneClickDistance: O
    });
  }, [
    l,
    i,
    r,
    c,
    s,
    f,
    d,
    g,
    x,
    k,
    E,
    N,
    Q,
    T,
    I,
    lt,
    ct,
    Y,
    O
  ]), C.jsx("div", { className: "react-flow__renderer", ref: j, style: dc, children: A });
}
const NN = (l) => ({
  userSelectionActive: l.userSelectionActive,
  userSelectionRect: l.userSelectionRect
});
function TN() {
  const { userSelectionActive: l, userSelectionRect: i } = jt(NN, It);
  return l && i ? C.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: i.width,
    height: i.height,
    transform: `translate(${i.x}px, ${i.y}px)`
  } }) : null;
}
const gd = (l, i) => (r) => {
  r.target === i.current && l?.(r);
}, CN = (l) => ({
  userSelectionActive: l.userSelectionActive,
  elementsSelectable: l.elementsSelectable,
  dragging: l.paneDragging,
  panBy: l.panBy,
  autoPanSpeed: l.autoPanSpeed
});
function zN({ isSelecting: l, selectionKeyPressed: i, selectionMode: r = ju.Full, panOnDrag: c, autoPanOnSelection: s, paneClickDistance: f, selectionOnDrag: d, onSelectionStart: g, onSelectionEnd: x, onPaneClick: p, onPaneContextMenu: v, onPaneScroll: m, onPaneMouseEnter: y, onPaneMouseMove: b, onPaneMouseLeave: E, children: A }) {
  const T = tt.useRef(0), N = $t(), { userSelectionActive: V, elementsSelectable: w, dragging: O, panBy: Y, autoPanSpeed: U } = jt(CN, It), j = w && (l || V), Q = tt.useRef(null), I = tt.useRef(), ct = tt.useRef(/* @__PURE__ */ new Set()), k = tt.useRef(/* @__PURE__ */ new Set()), rt = tt.useRef(!1), lt = tt.useRef(!1), z = tt.useRef({ x: 0, y: 0 }), L = tt.useRef(!1), D = (P) => {
    if (lt.current || rt.current || N.getState().connection.inProgress) {
      lt.current = !1, rt.current = !1;
      return;
    }
    p?.(P), N.getState().resetSelectedElements(), N.setState({ nodesSelectionActive: !1 });
  }, B = (P) => {
    if (Array.isArray(c) && c?.includes(2)) {
      P.preventDefault();
      return;
    }
    v?.(P);
  }, G = m ? (P) => m(P) : void 0, $ = (P) => {
    lt.current && (P.stopPropagation(), lt.current = !1);
  }, et = (P) => {
    if (P.pointerType === "touch" && c !== !1 && !i)
      return;
    const { domNode: ht, transform: mt } = N.getState();
    if (I.current = ht?.getBoundingClientRect(), !I.current)
      return;
    const ft = P.target === Q.current;
    if (!ft && !!P.target.closest(".nokey") || !l || !(d && ft || i) || P.button !== 0 || !P.isPrimary)
      return;
    P.target?.setPointerCapture?.(P.pointerId), lt.current = !1;
    const { x: wt, y: _t } = pn(P.nativeEvent, I.current), Ct = Ku({ x: wt, y: _t }, mt);
    N.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: Ct.x,
        startY: Ct.y,
        x: wt,
        y: _t
      }
    }), ft || (P.stopPropagation(), P.preventDefault());
  };
  function ut(P, ht) {
    const { userSelectionRect: mt } = N.getState();
    if (!mt)
      return;
    const { transform: ft, nodeLookup: dt, edgeLookup: xt, connectionLookup: wt, triggerNodeChanges: _t, triggerEdgeChanges: Ct, defaultEdgeOptions: Ht } = N.getState(), Ot = { x: mt.startX, y: mt.startY }, { x: Pt, y: xe } = Ei(Ot, ft), ce = {
      startX: Ot.x,
      startY: Ot.y,
      x: P < Pt ? P : Pt,
      y: ht < xe ? ht : xe,
      width: Math.abs(P - Pt),
      height: Math.abs(ht - xe)
    }, En = ct.current, ke = k.current;
    ct.current = new Set(Yd(dt, ce, ft, r === ju.Partial, !0).map((Ee) => Ee.id)), k.current = /* @__PURE__ */ new Set();
    const Ae = Ht?.selectable ?? !0;
    for (const Ee of ct.current) {
      const Oe = wt.get(Ee);
      if (Oe)
        for (const { edgeId: Ye } of Oe.values()) {
          const _n = xt.get(Ye);
          _n && (_n.selectable ?? Ae) && k.current.add(Ye);
        }
    }
    if (!Dy(En, ct.current)) {
      const Ee = mi(dt, ct.current, !0);
      _t(Ee);
    }
    if (!Dy(ke, k.current)) {
      const Ee = mi(xt, k.current);
      Ct(Ee);
    }
    N.setState({
      userSelectionRect: ce,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }
  function R() {
    if (!s || !I.current)
      return;
    const [P, ht] = Vd(z.current, I.current, U);
    Y({ x: P, y: ht }).then((mt) => {
      if (!lt.current || !mt) {
        T.current = requestAnimationFrame(R);
        return;
      }
      const { x: ft, y: dt } = z.current;
      ut(ft, dt), T.current = requestAnimationFrame(R);
    });
  }
  const nt = () => {
    cancelAnimationFrame(T.current), T.current = 0, L.current = !1;
  };
  tt.useEffect(() => () => nt(), []);
  const _ = (P) => {
    const { userSelectionRect: ht, transform: mt, resetSelectedElements: ft } = N.getState();
    if (!I.current || !ht)
      return;
    const { x: dt, y: xt } = pn(P.nativeEvent, I.current);
    z.current = { x: dt, y: xt };
    const wt = Ei({ x: ht.startX, y: ht.startY }, mt);
    if (!lt.current) {
      const _t = i ? 0 : f;
      if (Math.hypot(dt - wt.x, xt - wt.y) <= _t)
        return;
      ft(), g?.(P);
    }
    lt.current = !0, L.current || (R(), L.current = !0), ut(dt, xt);
  }, F = (P) => {
    if (!j) {
      P.target === Q.current && N.getState().connection.inProgress && (rt.current = !0);
      return;
    }
    P.button === 0 && (P.target?.releasePointerCapture?.(P.pointerId), !V && P.target === Q.current && N.getState().userSelectionRect && D?.(P), N.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), lt.current && (x?.(P), N.setState({
      nodesSelectionActive: ct.current.size > 0
    })), nt());
  }, st = (P) => {
    P.target?.releasePointerCapture?.(P.pointerId), nt();
  }, ot = c === !0 || Array.isArray(c) && c.includes(0);
  return C.jsxs("div", { className: ue(["react-flow__pane", { draggable: ot, dragging: O, selection: l }]), onClick: j ? void 0 : gd(D, Q), onContextMenu: gd(B, Q), onWheel: gd(G, Q), onPointerEnter: j ? void 0 : y, onPointerMove: j ? _ : b, onPointerUp: F, onPointerCancel: j ? st : void 0, onPointerDownCapture: j ? et : void 0, onClickCapture: j ? $ : void 0, onPointerLeave: E, ref: Q, style: dc, children: [A, C.jsx(TN, {})] });
}
function Md({ id: l, store: i, unselect: r = !1, nodeRef: c }) {
  const { addSelectedNodes: s, unselectNodesAndEdges: f, multiSelectionActive: d, nodeLookup: g, onError: x } = i.getState(), p = g.get(l);
  if (!p) {
    x?.("012", xn.error012(l));
    return;
  }
  i.setState({ nodesSelectionActive: !1 }), p.selected ? (r || p.selected && d) && (f({ nodes: [p], edges: [] }), requestAnimationFrame(() => c?.current?.blur())) : s([l]);
}
function Lp({ nodeRef: l, disabled: i = !1, noDragClassName: r, handleSelector: c, nodeId: s, isSelectable: f, nodeClickDistance: d }) {
  const g = $t(), [x, p] = tt.useState(!1), v = tt.useRef();
  return tt.useEffect(() => {
    if (!i)
      return v.current = hw({
        getStoreItems: () => g.getState(),
        onNodeMouseDown: (m) => {
          Md({
            id: m,
            store: g,
            nodeRef: l
          });
        },
        onDragStart: () => {
          p(!0);
        },
        onDragStop: () => {
          p(!1);
        }
      }), () => {
        v.current?.destroy(), v.current = void 0;
      };
  }, [i, g, l]), tt.useEffect(() => {
    i || !l.current || !v.current || v.current.update({
      noDragClassName: r,
      handleSelector: c,
      domNode: l.current,
      isSelectable: f,
      nodeId: s,
      nodeClickDistance: d
    });
  }, [r, c, i, f, l, s, d]), x;
}
const MN = (l) => (i) => i.selected && (i.draggable || l && typeof i.draggable > "u");
function qp() {
  const l = $t();
  return tt.useCallback((r) => {
    const { nodeExtent: c, snapToGrid: s, snapGrid: f, nodesDraggable: d, onError: g, updateNodePositions: x, nodeLookup: p, nodeOrigin: v } = l.getState(), m = /* @__PURE__ */ new Map(), y = MN(d), b = s ? f[0] : 5, E = s ? f[1] : 5, A = r.direction.x * b * r.factor, T = r.direction.y * E * r.factor;
    for (const [, N] of p) {
      if (!y(N))
        continue;
      let V = {
        x: N.internals.positionAbsolute.x + A,
        y: N.internals.positionAbsolute.y + T
      };
      s && (V = Qu(V, f));
      const { position: w, positionAbsolute: O } = ip({
        nodeId: N.id,
        nextPosition: V,
        nodeLookup: p,
        nodeExtent: c,
        nodeOrigin: v,
        onError: g
      });
      N.position = w, N.internals.positionAbsolute = O, m.set(N.id, N);
    }
    x(m);
  }, []);
}
const kd = tt.createContext(null), AN = kd.Provider;
kd.Consumer;
const Xp = () => tt.useContext(kd), ON = (l) => ({
  connectOnClick: l.connectOnClick,
  noPanClassName: l.noPanClassName,
  rfId: l.rfId
}), Zp = tt.createContext(null);
function DN({ children: l }) {
  const i = jt(ON, It);
  return C.jsx(Zp.Provider, { value: i, children: l });
}
function RN() {
  const l = tt.useContext(Zp);
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
}, UN = (l, i, r) => (c) => {
  const { connectionClickStartHandle: s, connectionMode: f, connection: d } = c, { fromHandle: g, toHandle: x, isValid: p } = d;
  if (!g && !s)
    return HN;
  const v = x?.nodeId === l && x?.id === i && x?.type === r;
  return {
    connectingFrom: g?.nodeId === l && g?.id === i && g?.type === r,
    connectingTo: v,
    clickConnecting: s?.nodeId === l && s?.id === i && s?.type === r,
    isPossibleEndHandle: f === Si.Strict ? g?.type !== r : l !== g?.nodeId || i !== g?.id,
    connectionInProcess: !!g,
    clickConnectionInProcess: !!s,
    valid: v && p
  };
};
function jN({ type: l = "source", position: i = pt.Top, isValidConnection: r, isConnectable: c = !0, isConnectableStart: s = !0, isConnectableEnd: f = !0, id: d, onConnect: g, children: x, className: p, onMouseDown: v, onTouchStart: m, ...y }, b) {
  const E = d || null, A = l === "target", T = $t(), N = Xp(), { connectOnClick: V, noPanClassName: w, rfId: O } = RN(), { connectingFrom: Y, connectingTo: U, clickConnecting: j, isPossibleEndHandle: Q, connectionInProcess: I, clickConnectionInProcess: ct, valid: k } = jt(UN(N, E, l), It);
  N || T.getState().onError?.("010", xn.error010());
  const rt = (L) => {
    const { defaultEdgeOptions: D, onConnect: B, hasDefaultEdges: G } = T.getState(), $ = {
      ...D,
      ...L
    };
    if (G) {
      const { edges: et, setEdges: ut, onError: R } = T.getState();
      ut(gN($, et, { onError: R }));
    }
    B?.($), g?.($);
  }, lt = (L) => {
    if (!N)
      return;
    const D = mp(L.nativeEvent);
    if (s && (D && L.button === 0 || !D)) {
      const B = T.getState();
      zd.onPointerDown(L.nativeEvent, {
        handleDomNode: L.currentTarget,
        autoPanOnConnect: B.autoPanOnConnect,
        connectionMode: B.connectionMode,
        connectionRadius: B.connectionRadius,
        domNode: B.domNode,
        nodeLookup: B.nodeLookup,
        lib: B.lib,
        isTarget: A,
        handleId: E,
        nodeId: N,
        flowId: B.rfId,
        panBy: B.panBy,
        cancelConnection: B.cancelConnection,
        onConnectStart: B.onConnectStart,
        onConnectEnd: (...G) => T.getState().onConnectEnd?.(...G),
        updateConnection: B.updateConnection,
        onConnect: rt,
        isValidConnection: r || ((...G) => T.getState().isValidConnection?.(...G) ?? !0),
        getTransform: () => T.getState().transform,
        getFromHandle: () => T.getState().connection.fromHandle,
        autoPanSpeed: B.autoPanSpeed,
        dragThreshold: B.connectionDragThreshold
      });
    }
    D ? v?.(L) : m?.(L);
  }, z = (L) => {
    const { onClickConnectStart: D, onClickConnectEnd: B, connectionClickStartHandle: G, connectionMode: $, isValidConnection: et, lib: ut, rfId: R, nodeLookup: nt, connection: _ } = T.getState();
    if (!N || !G && !s)
      return;
    if (!G) {
      D?.(L.nativeEvent, { nodeId: N, handleId: E, handleType: l }), T.setState({ connectionClickStartHandle: { nodeId: N, type: l, id: E } });
      return;
    }
    const F = hp(L.target), st = r || et, { connection: ot, isValid: P } = zd.isValid(L.nativeEvent, {
      handle: {
        nodeId: N,
        id: E,
        type: l
      },
      connectionMode: $,
      fromNodeId: G.nodeId,
      fromHandleId: G.id || null,
      fromType: G.type,
      isValidConnection: st,
      flowId: R,
      doc: F,
      lib: ut,
      nodeLookup: nt
    });
    P && ot && rt(ot);
    const ht = structuredClone(_);
    delete ht.inProgress, ht.toPosition = ht.toHandle ? ht.toHandle.position : null, B?.(L, ht), T.setState({ connectionClickStartHandle: null });
  };
  return C.jsx("div", { "data-handleid": E, "data-nodeid": N, "data-handlepos": i, "data-id": `${O}-${N}-${E}-${l}`, className: ue([
    "react-flow__handle",
    `react-flow__handle-${i}`,
    "nodrag",
    w,
    p,
    {
      source: !A,
      target: A,
      connectable: c,
      connectablestart: s,
      connectableend: f,
      clickconnecting: j,
      connectingfrom: Y,
      connectingto: U,
      valid: k,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: c && (!I || Q) && (I || ct ? f : s)
    }
  ]), onMouseDown: lt, onTouchStart: lt, onClick: V ? z : void 0, ref: b, ...y, children: x });
}
const Yl = tt.memo(Bp(jN));
function BN({ data: l, isConnectable: i, sourcePosition: r = pt.Bottom }) {
  return C.jsxs(C.Fragment, { children: [l?.label, C.jsx(Yl, { type: "source", position: r, isConnectable: i })] });
}
function YN({ data: l, isConnectable: i, targetPosition: r = pt.Top, sourcePosition: c = pt.Bottom }) {
  return C.jsxs(C.Fragment, { children: [C.jsx(Yl, { type: "target", position: r, isConnectable: i }), l?.label, C.jsx(Yl, { type: "source", position: c, isConnectable: i })] });
}
function VN() {
  return null;
}
function LN({ data: l, isConnectable: i, targetPosition: r = pt.Top }) {
  return C.jsxs(C.Fragment, { children: [C.jsx(Yl, { type: "target", position: r, isConnectable: i }), l?.label] });
}
const ec = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, cv = {
  input: BN,
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
  const { width: i, height: r, x: c, y: s } = Gu(l.nodeLookup, {
    filter: (f) => !!f.selected
  });
  return {
    width: vn(i) ? i : null,
    height: vn(r) ? r : null,
    userSelectionActive: l.userSelectionActive,
    transformString: `translate(${l.transform[0]}px,${l.transform[1]}px) scale(${l.transform[2]}) translate(${c}px,${s}px)`
  };
};
function ZN({ onSelectionContextMenu: l, noPanClassName: i, disableKeyboardA11y: r }) {
  const c = $t(), { width: s, height: f, transformString: d, userSelectionActive: g } = jt(XN, It), x = qp(), p = tt.useRef(null);
  tt.useEffect(() => {
    r || p.current?.focus({
      preventScroll: !0
    });
  }, [r]);
  const v = !g && s !== null && f !== null;
  if (Lp({
    nodeRef: p,
    disabled: !v
  }), !v)
    return null;
  const m = l ? (b) => {
    const E = c.getState().nodes.filter((A) => A.selected);
    l(b, E);
  } : void 0, y = (b) => {
    Object.prototype.hasOwnProperty.call(ec, b.key) && (b.preventDefault(), x({
      direction: ec[b.key],
      factor: b.shiftKey ? 4 : 1
    }));
  };
  return C.jsx("div", { className: ue(["react-flow__nodesselection", "react-flow__container", i]), style: {
    transform: d
  }, children: C.jsx("div", { ref: p, className: "react-flow__nodesselection-rect", onContextMenu: m, tabIndex: r ? void 0 : -1, onKeyDown: r ? void 0 : y, style: {
    width: s,
    height: f
  } }) });
}
const sv = typeof window < "u" ? window : void 0, GN = (l) => ({ nodesSelectionActive: l.nodesSelectionActive, userSelectionActive: l.userSelectionActive });
function Gp({ children: l, onPaneClick: i, onPaneMouseEnter: r, onPaneMouseMove: c, onPaneMouseLeave: s, onPaneContextMenu: f, onPaneScroll: d, paneClickDistance: g, deleteKeyCode: x, selectionKeyCode: p, selectionOnDrag: v, selectionMode: m, onSelectionStart: y, onSelectionEnd: b, multiSelectionKeyCode: E, panActivationKeyCode: A, zoomActivationKeyCode: T, elementsSelectable: N, zoomOnScroll: V, zoomOnPinch: w, panOnScroll: O, panOnScrollSpeed: Y, panOnScrollMode: U, zoomOnDoubleClick: j, panOnDrag: Q, autoPanOnSelection: I, defaultViewport: ct, translateExtent: k, minZoom: rt, maxZoom: lt, preventScrolling: z, onSelectionContextMenu: L, noWheelClassName: D, noPanClassName: B, disableKeyboardA11y: G, onViewportChange: $, isControlledViewport: et }) {
  const { nodesSelectionActive: ut, userSelectionActive: R } = jt(GN, It), nt = Vu(p, { target: sv }), _ = Vu(A, { target: sv }), F = _ || Q, st = _ || O, ot = v && F !== !0, P = nt || R || ot;
  return bN({ deleteKeyCode: x, multiSelectionKeyCode: E }), C.jsx(wN, { onPaneContextMenu: f, elementsSelectable: N, zoomOnScroll: V, zoomOnPinch: w, panOnScroll: st, panActivationKeyPressed: _, panOnScrollSpeed: Y, panOnScrollMode: U, zoomOnDoubleClick: j, panOnDrag: !nt && F, defaultViewport: ct, translateExtent: k, minZoom: rt, maxZoom: lt, zoomActivationKeyCode: T, preventScrolling: z, noWheelClassName: D, noPanClassName: B, onViewportChange: $, isControlledViewport: et, paneClickDistance: g, selectionOnDrag: ot, children: C.jsxs(zN, { onSelectionStart: y, onSelectionEnd: b, onPaneClick: i, onPaneMouseEnter: r, onPaneMouseMove: c, onPaneMouseLeave: s, onPaneContextMenu: f, onPaneScroll: d, panOnDrag: F, autoPanOnSelection: I, isSelecting: !!P, selectionMode: m, selectionKeyPressed: nt, paneClickDistance: g, selectionOnDrag: ot, children: [l, ut && C.jsx(ZN, { onSelectionContextMenu: L, noPanClassName: B, disableKeyboardA11y: G })] }) });
}
Gp.displayName = "FlowRenderer";
const QN = tt.memo(Gp), KN = (l) => (i) => l ? Yd(i.nodeLookup, { x: 0, y: 0, width: i.width, height: i.height }, i.transform, !0).map((r) => r.id) : Array.from(i.nodeLookup.keys());
function $N(l) {
  return jt(tt.useCallback(KN(l), [l]), It);
}
const JN = (l) => l.updateNodeInternals;
function kN() {
  const l = jt(JN), [i] = tt.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((r) => {
    const c = /* @__PURE__ */ new Map();
    r.forEach((s) => {
      const f = s.target.getAttribute("data-id");
      c.set(f, {
        id: f,
        nodeElement: s.target,
        force: !0
      });
    }), l(c);
  }));
  return tt.useEffect(() => () => {
    i?.disconnect();
  }, [i]), i;
}
function IN({ node: l, nodeType: i, hasDimensions: r, resizeObserver: c }) {
  const s = $t(), f = tt.useRef(null), d = tt.useRef(null), g = tt.useRef(l.sourcePosition), x = tt.useRef(l.targetPosition), p = tt.useRef(i), v = r && !!l.internals.handleBounds;
  return tt.useEffect(() => {
    f.current && !l.hidden && (!v || d.current !== f.current) && (d.current && c?.unobserve(d.current), c?.observe(f.current), d.current = f.current);
  }, [v, l.hidden]), tt.useEffect(() => () => {
    d.current && (c?.unobserve(d.current), d.current = null);
  }, []), tt.useEffect(() => {
    if (f.current) {
      const m = p.current !== i, y = g.current !== l.sourcePosition, b = x.current !== l.targetPosition;
      (m || y || b) && (p.current = i, g.current = l.sourcePosition, x.current = l.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([[l.id, { id: l.id, nodeElement: f.current, force: !0 }]])));
    }
  }, [l.id, i, l.sourcePosition, l.targetPosition]), f;
}
function FN({ id: l, onClick: i, onMouseEnter: r, onMouseMove: c, onMouseLeave: s, onContextMenu: f, onDoubleClick: d, nodesDraggable: g, elementsSelectable: x, nodesConnectable: p, nodesFocusable: v, resizeObserver: m, noDragClassName: y, noPanClassName: b, disableKeyboardA11y: E, rfId: A, nodeTypes: T, nodeClickDistance: N, onError: V }) {
  const { node: w, internals: O, isParent: Y } = jt((P) => {
    const ht = P.nodeLookup.get(l), mt = P.parentLookup.has(l);
    return {
      node: ht,
      internals: ht.internals,
      isParent: mt
    };
  }, It);
  let U = w.type || "default", j = T?.[U] || cv[U];
  j === void 0 && (V?.("003", xn.error003(U)), U = "default", j = T?.default || cv.default);
  const Q = !!(w.draggable || g && typeof w.draggable > "u"), I = !!(w.selectable || x && typeof w.selectable > "u"), ct = !!(w.connectable || p && typeof w.connectable > "u"), k = !!(w.focusable || v && typeof w.focusable > "u"), rt = $t(), lt = sp(w), z = IN({ node: w, nodeType: U, hasDimensions: lt, resizeObserver: m }), L = Lp({
    nodeRef: z,
    disabled: w.hidden || !Q,
    noDragClassName: y,
    handleSelector: w.dragHandle,
    nodeId: l,
    isSelectable: I,
    nodeClickDistance: N
  }), D = qp();
  if (w.hidden)
    return null;
  const B = bn(w), G = qN(w), $ = I || Q || i || r || c || s, et = r ? (P) => r(P, { ...O.userNode }) : void 0, ut = c ? (P) => c(P, { ...O.userNode }) : void 0, R = s ? (P) => s(P, { ...O.userNode }) : void 0, nt = f ? (P) => f(P, { ...O.userNode }) : void 0, _ = d ? (P) => d(P, { ...O.userNode }) : void 0, F = (P) => {
    const { selectNodesOnDrag: ht, nodeDragThreshold: mt } = rt.getState();
    I && (!ht || !Q || mt > 0) && Md({
      id: l,
      store: rt,
      nodeRef: z
    }), i && i(P, { ...O.userNode });
  }, st = (P) => {
    if (!(gp(P.nativeEvent) || E)) {
      if (ep.includes(P.key) && I) {
        const ht = P.key === "Escape";
        Md({
          id: l,
          store: rt,
          unselect: ht,
          nodeRef: z
        });
      } else if (Q && w.selected && Object.prototype.hasOwnProperty.call(ec, P.key)) {
        P.preventDefault();
        const { ariaLabelConfig: ht } = rt.getState();
        rt.setState({
          ariaLiveMessage: ht["node.a11yDescription.ariaLiveMessage"]({
            direction: P.key.replace("Arrow", "").toLowerCase(),
            x: ~~O.positionAbsolute.x,
            y: ~~O.positionAbsolute.y
          })
        }), D({
          direction: ec[P.key],
          factor: P.shiftKey ? 4 : 1
        });
      }
    }
  }, ot = () => {
    if (E || !z.current?.matches(":focus-visible"))
      return;
    const { transform: P, width: ht, height: mt, autoPanOnNodeFocus: ft, setCenter: dt } = rt.getState();
    if (!ft)
      return;
    Yd(/* @__PURE__ */ new Map([[l, w]]), { x: 0, y: 0, width: ht, height: mt }, P, !0).length > 0 || dt(w.position.x + B.width / 2, w.position.y + B.height / 2, {
      zoom: P[2]
    });
  };
  return C.jsx("div", { className: ue([
    "react-flow__node",
    `react-flow__node-${U}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [b]: Q
    },
    w.className,
    {
      selected: w.selected,
      selectable: I,
      parent: Y,
      draggable: Q,
      dragging: L
    }
  ]), ref: z, style: {
    zIndex: O.z,
    transform: `translate(${O.positionAbsolute.x}px,${O.positionAbsolute.y}px)`,
    pointerEvents: $ ? "all" : "none",
    visibility: lt ? "visible" : "hidden",
    ...w.style,
    ...G
  }, "data-id": l, "data-testid": `rf__node-${l}`, onMouseEnter: et, onMouseMove: ut, onMouseLeave: R, onContextMenu: nt, onClick: F, onDoubleClick: _, onKeyDown: k ? st : void 0, tabIndex: k ? 0 : void 0, onFocus: k ? ot : void 0, role: w.ariaRole ?? (k ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${Dp}-${A}`, "aria-label": w.ariaLabel, ...w.domAttributes, children: C.jsx(AN, { value: l, children: C.jsx(j, { id: l, data: w.data, type: U, positionAbsoluteX: O.positionAbsolute.x, positionAbsoluteY: O.positionAbsolute.y, selected: w.selected ?? !1, selectable: I, draggable: Q, deletable: w.deletable ?? !0, isConnectable: ct, sourcePosition: w.sourcePosition, targetPosition: w.targetPosition, dragging: L, dragHandle: w.dragHandle, zIndex: O.z, parentId: w.parentId, ...B }) }) });
}
var WN = tt.memo(FN);
const PN = (l) => ({
  nodesConnectable: l.nodesConnectable,
  nodesFocusable: l.nodesFocusable,
  elementsSelectable: l.elementsSelectable,
  onError: l.onError
});
function Qp(l) {
  const { nodesConnectable: i, nodesFocusable: r, elementsSelectable: c, onError: s } = jt(PN, It), f = $N(l.onlyRenderVisibleElements), d = kN();
  return C.jsx("div", { className: "react-flow__nodes", style: dc, children: f.map((g) => (
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
    C.jsx(WN, { id: g, nodeTypes: l.nodeTypes, nodeExtent: l.nodeExtent, onClick: l.onNodeClick, onMouseEnter: l.onNodeMouseEnter, onMouseMove: l.onNodeMouseMove, onMouseLeave: l.onNodeMouseLeave, onContextMenu: l.onNodeContextMenu, onDoubleClick: l.onNodeDoubleClick, noDragClassName: l.noDragClassName, noPanClassName: l.noPanClassName, rfId: l.rfId, disableKeyboardA11y: l.disableKeyboardA11y, resizeObserver: d, nodesDraggable: l.nodesDraggable ?? !0, nodesConnectable: i, nodesFocusable: r, elementsSelectable: c, nodeClickDistance: l.nodeClickDistance, onError: s }, g)
  )) });
}
Qp.displayName = "NodeRenderer";
const t3 = tt.memo(Qp);
function e3(l) {
  return jt(tt.useCallback((r) => {
    if (!l)
      return r.edges.map((s) => s.id);
    const c = [];
    if (r.width && r.height)
      for (const s of r.edges) {
        const f = r.nodeLookup.get(s.source), d = r.nodeLookup.get(s.target);
        f && d && J2({
          sourceNode: f,
          targetNode: d,
          width: r.width,
          height: r.height,
          transform: r.transform
        }) && c.push(s.id);
      }
    return c;
  }, [l]), It);
}
const n3 = ({ color: l = "none", strokeWidth: i = 1 }) => {
  const r = {
    strokeWidth: i,
    ...l && { stroke: l }
  };
  return C.jsx("polyline", { className: "arrow", style: r, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, l3 = ({ color: l = "none", strokeWidth: i = 1 }) => {
  const r = {
    strokeWidth: i,
    ...l && { stroke: l, fill: l }
  };
  return C.jsx("polyline", { className: "arrowclosed", style: r, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, fv = {
  [Wr.Arrow]: n3,
  [Wr.ArrowClosed]: l3
};
function a3(l) {
  const i = $t();
  return tt.useMemo(() => Object.prototype.hasOwnProperty.call(fv, l) ? fv[l] : (i.getState().onError?.("009", xn.error009(l)), null), [l]);
}
const i3 = ({ id: l, type: i, color: r, width: c = 12.5, height: s = 12.5, markerUnits: f = "strokeWidth", strokeWidth: d, orient: g = "auto-start-reverse" }) => {
  const x = a3(i);
  return x ? C.jsx("marker", { className: "react-flow__arrowhead", id: l, markerWidth: `${c}`, markerHeight: `${s}`, viewBox: "-10 -10 20 20", markerUnits: f, orient: g, refX: "0", refY: "0", children: C.jsx(x, { color: r, strokeWidth: d }) }) : null;
}, Kp = ({ defaultColor: l, rfId: i }) => {
  const r = jt((f) => f.edges), c = jt((f) => f.defaultEdgeOptions), s = tt.useMemo(() => nw(r, {
    id: i,
    defaultColor: l,
    defaultMarkerStart: c?.markerStart,
    defaultMarkerEnd: c?.markerEnd
  }), [r, c, i, l]);
  return s.length ? C.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: C.jsx("defs", { children: s.map((f) => C.jsx(i3, { id: f.id, type: f.type, color: f.color, width: f.width, height: f.height, markerUnits: f.markerUnits, strokeWidth: f.strokeWidth, orient: f.orient }, f.id)) }) }) : null;
};
Kp.displayName = "MarkerDefinitions";
var u3 = tt.memo(Kp);
function $p({ x: l, y: i, label: r, labelStyle: c, labelShowBg: s = !0, labelBgStyle: f, labelBgPadding: d = [2, 4], labelBgBorderRadius: g = 2, children: x, className: p, ...v }) {
  const [m, y] = tt.useState({ x: 1, y: 0, width: 0, height: 0 }), b = ue(["react-flow__edge-textwrapper", p]), E = tt.useRef(null);
  return tt.useEffect(() => {
    if (E.current) {
      const A = E.current.getBBox();
      y({
        x: A.x,
        y: A.y,
        width: A.width,
        height: A.height
      });
    }
  }, [r]), r ? C.jsxs("g", { transform: `translate(${l - m.width / 2} ${i - m.height / 2})`, className: b, visibility: m.width ? "visible" : "hidden", ...v, children: [s && C.jsx("rect", { width: m.width + 2 * d[0], x: -d[0], y: -d[1], height: m.height + 2 * d[1], className: "react-flow__edge-textbg", style: f, rx: g, ry: g }), C.jsx("text", { className: "react-flow__edge-text", y: m.height / 2, dy: "0.3em", ref: E, style: c, children: r }), x] }) : null;
}
$p.displayName = "EdgeText";
const o3 = tt.memo($p);
function $u({ path: l, labelX: i, labelY: r, label: c, labelStyle: s, labelShowBg: f, labelBgStyle: d, labelBgPadding: g, labelBgBorderRadius: x, interactionWidth: p = 20, ...v }) {
  return C.jsxs(C.Fragment, { children: [C.jsx("path", { ...v, d: l, fill: "none", className: ue(["react-flow__edge-path", v.className]) }), p ? C.jsx("path", { d: l, fill: "none", strokeOpacity: 0, strokeWidth: p, className: "react-flow__edge-interaction" }) : null, c && vn(i) && vn(r) ? C.jsx(o3, { x: i, y: r, label: c, labelStyle: s, labelShowBg: f, labelBgStyle: d, labelBgPadding: g, labelBgBorderRadius: x }) : null] });
}
function dv({ pos: l, x1: i, y1: r, x2: c, y2: s }) {
  return l === pt.Left || l === pt.Right ? [0.5 * (i + c), r] : [i, 0.5 * (r + s)];
}
function Jp({ sourceX: l, sourceY: i, sourcePosition: r = pt.Bottom, targetX: c, targetY: s, targetPosition: f = pt.Top }) {
  const [d, g] = dv({
    pos: r,
    x1: l,
    y1: i,
    x2: c,
    y2: s
  }), [x, p] = dv({
    pos: f,
    x1: c,
    y1: s,
    x2: l,
    y2: i
  }), [v, m, y, b] = yp({
    sourceX: l,
    sourceY: i,
    targetX: c,
    targetY: s,
    sourceControlX: d,
    sourceControlY: g,
    targetControlX: x,
    targetControlY: p
  });
  return [
    `M${l},${i} C${d},${g} ${x},${p} ${c},${s}`,
    v,
    m,
    y,
    b
  ];
}
function kp(l) {
  return tt.memo(({ id: i, sourceX: r, sourceY: c, targetX: s, targetY: f, sourcePosition: d, targetPosition: g, label: x, labelStyle: p, labelShowBg: v, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: b, style: E, markerEnd: A, markerStart: T, interactionWidth: N }) => {
    const [V, w, O] = Jp({
      sourceX: r,
      sourceY: c,
      sourcePosition: d,
      targetX: s,
      targetY: f,
      targetPosition: g
    }), Y = l.isInternal ? void 0 : i;
    return C.jsx($u, { id: Y, path: V, labelX: w, labelY: O, label: x, labelStyle: p, labelShowBg: v, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: b, style: E, markerEnd: A, markerStart: T, interactionWidth: N });
  });
}
const r3 = kp({ isInternal: !1 }), Ip = kp({ isInternal: !0 });
r3.displayName = "SimpleBezierEdge";
Ip.displayName = "SimpleBezierEdgeInternal";
function Fp(l) {
  return tt.memo(({ id: i, sourceX: r, sourceY: c, targetX: s, targetY: f, label: d, labelStyle: g, labelShowBg: x, labelBgStyle: p, labelBgPadding: v, labelBgBorderRadius: m, style: y, sourcePosition: b = pt.Bottom, targetPosition: E = pt.Top, markerEnd: A, markerStart: T, pathOptions: N, interactionWidth: V }) => {
    const [w, O, Y] = Nd({
      sourceX: r,
      sourceY: c,
      sourcePosition: b,
      targetX: s,
      targetY: f,
      targetPosition: E,
      borderRadius: N?.borderRadius,
      offset: N?.offset,
      stepPosition: N?.stepPosition
    }), U = l.isInternal ? void 0 : i;
    return C.jsx($u, { id: U, path: w, labelX: O, labelY: Y, label: d, labelStyle: g, labelShowBg: x, labelBgStyle: p, labelBgPadding: v, labelBgBorderRadius: m, style: y, markerEnd: A, markerStart: T, interactionWidth: V });
  });
}
const Wp = Fp({ isInternal: !1 }), Pp = Fp({ isInternal: !0 });
Wp.displayName = "SmoothStepEdge";
Pp.displayName = "SmoothStepEdgeInternal";
function t1(l) {
  return tt.memo(({ id: i, ...r }) => {
    const c = l.isInternal ? void 0 : i;
    return C.jsx(Wp, { ...r, id: c, pathOptions: tt.useMemo(() => ({ borderRadius: 0, offset: r.pathOptions?.offset }), [r.pathOptions?.offset]) });
  });
}
const c3 = t1({ isInternal: !1 }), e1 = t1({ isInternal: !0 });
c3.displayName = "StepEdge";
e1.displayName = "StepEdgeInternal";
function n1(l) {
  return tt.memo(({ id: i, sourceX: r, sourceY: c, targetX: s, targetY: f, label: d, labelStyle: g, labelShowBg: x, labelBgStyle: p, labelBgPadding: v, labelBgBorderRadius: m, style: y, markerEnd: b, markerStart: E, interactionWidth: A }) => {
    const [T, N, V] = pp({ sourceX: r, sourceY: c, targetX: s, targetY: f }), w = l.isInternal ? void 0 : i;
    return C.jsx($u, { id: w, path: T, labelX: N, labelY: V, label: d, labelStyle: g, labelShowBg: x, labelBgStyle: p, labelBgPadding: v, labelBgBorderRadius: m, style: y, markerEnd: b, markerStart: E, interactionWidth: A });
  });
}
const s3 = n1({ isInternal: !1 }), l1 = n1({ isInternal: !0 });
s3.displayName = "StraightEdge";
l1.displayName = "StraightEdgeInternal";
function a1(l) {
  return tt.memo(({ id: i, sourceX: r, sourceY: c, targetX: s, targetY: f, sourcePosition: d = pt.Bottom, targetPosition: g = pt.Top, label: x, labelStyle: p, labelShowBg: v, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: b, style: E, markerEnd: A, markerStart: T, pathOptions: N, interactionWidth: V }) => {
    const [w, O, Y] = Xd({
      sourceX: r,
      sourceY: c,
      sourcePosition: d,
      targetX: s,
      targetY: f,
      targetPosition: g,
      curvature: N?.curvature
    }), U = l.isInternal ? void 0 : i;
    return C.jsx($u, { id: U, path: w, labelX: O, labelY: Y, label: x, labelStyle: p, labelShowBg: v, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: b, style: E, markerEnd: A, markerStart: T, interactionWidth: V });
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
}, d3 = (l, i, r) => r === pt.Left ? l - i : r === pt.Right ? l + i : l, h3 = (l, i, r) => r === pt.Top ? l - i : r === pt.Bottom ? l + i : l, mv = "react-flow__edgeupdater";
function yv({ position: l, centerX: i, centerY: r, radius: c = 10, onMouseDown: s, onMouseEnter: f, onMouseOut: d, type: g }) {
  return C.jsx("circle", { onMouseDown: s, onMouseEnter: f, onMouseOut: d, className: ue([mv, `${mv}-${g}`]), cx: d3(i, c, l), cy: h3(r, c, l), r: c, stroke: "transparent", fill: "transparent" });
}
function g3({ isReconnectable: l, reconnectRadius: i, edge: r, sourceX: c, sourceY: s, targetX: f, targetY: d, sourcePosition: g, targetPosition: x, onReconnect: p, onReconnectStart: v, onReconnectEnd: m, setReconnecting: y, setUpdateHover: b }) {
  const E = $t(), A = (O, Y) => {
    if (O.button !== 0)
      return;
    const { autoPanOnConnect: U, domNode: j, connectionMode: Q, connectionRadius: I, lib: ct, onConnectStart: k, cancelConnection: rt, nodeLookup: lt, rfId: z, panBy: L, updateConnection: D } = E.getState(), B = Y.type === "target", G = (ut, R) => {
      y(!1), m?.(ut, r, Y.type, R);
    }, $ = (ut) => p?.(r, ut), et = (ut, R) => {
      y(!0), v?.(O, r, Y.type), k?.(ut, R);
    };
    zd.onPointerDown(O.nativeEvent, {
      autoPanOnConnect: U,
      connectionMode: Q,
      connectionRadius: I,
      domNode: j,
      handleId: Y.id,
      nodeId: Y.nodeId,
      nodeLookup: lt,
      isTarget: B,
      edgeUpdaterType: Y.type,
      lib: ct,
      flowId: z,
      cancelConnection: rt,
      panBy: L,
      isValidConnection: (...ut) => E.getState().isValidConnection?.(...ut) ?? !0,
      onConnect: $,
      onConnectStart: et,
      onConnectEnd: (...ut) => E.getState().onConnectEnd?.(...ut),
      onReconnectEnd: G,
      updateConnection: D,
      getTransform: () => E.getState().transform,
      getFromHandle: () => E.getState().connection.fromHandle,
      dragThreshold: E.getState().connectionDragThreshold,
      handleDomNode: O.currentTarget
    });
  }, T = (O) => A(O, { nodeId: r.target, id: r.targetHandle ?? null, type: "target" }), N = (O) => A(O, { nodeId: r.source, id: r.sourceHandle ?? null, type: "source" }), V = () => b(!0), w = () => b(!1);
  return C.jsxs(C.Fragment, { children: [(l === !0 || l === "source") && C.jsx(yv, { position: g, centerX: c, centerY: s, radius: i, onMouseDown: T, onMouseEnter: V, onMouseOut: w, type: "source" }), (l === !0 || l === "target") && C.jsx(yv, { position: x, centerX: f, centerY: d, radius: i, onMouseDown: N, onMouseEnter: V, onMouseOut: w, type: "target" })] });
}
function m3({ id: l, edgesFocusable: i, edgesReconnectable: r, elementsSelectable: c, onClick: s, onDoubleClick: f, onContextMenu: d, onMouseEnter: g, onMouseMove: x, onMouseLeave: p, reconnectRadius: v, onReconnect: m, onReconnectStart: y, onReconnectEnd: b, rfId: E, edgeTypes: A, noPanClassName: T, onError: N, disableKeyboardA11y: V }) {
  let w = jt((dt) => dt.edgeLookup.get(l));
  const O = jt((dt) => dt.defaultEdgeOptions);
  w = O ? { ...O, ...w } : w;
  let Y = w.type || "default", U = A?.[Y] || hv[Y];
  U === void 0 && (N?.("011", xn.error011(Y)), Y = "default", U = A?.default || hv.default);
  const j = !!(w.focusable || i && typeof w.focusable > "u"), Q = typeof m < "u" && (w.reconnectable || r && typeof w.reconnectable > "u"), I = !!(w.selectable || c && typeof w.selectable > "u"), ct = tt.useRef(null), [k, rt] = tt.useState(!1), [lt, z] = tt.useState(!1), L = $t(), { zIndex: D = w.zIndex, sourceX: B, sourceY: G, targetX: $, targetY: et, sourcePosition: ut, targetPosition: R } = jt(tt.useCallback((dt) => {
    const xt = dt.nodeLookup.get(w.source), wt = dt.nodeLookup.get(w.target);
    if (!xt || !wt)
      return gv;
    const _t = ew({
      id: l,
      sourceNode: xt,
      targetNode: wt,
      sourceHandle: w.sourceHandle || null,
      targetHandle: w.targetHandle || null,
      connectionMode: dt.connectionMode,
      onError: N
    }), Ct = $2({
      selected: w.selected,
      zIndex: w.zIndex,
      sourceNode: xt,
      targetNode: wt,
      elevateOnSelect: dt.elevateEdgesOnSelect,
      zIndexMode: dt.zIndexMode
    });
    return {
      ..._t || gv,
      zIndex: Ct
    };
  }, [w.source, w.target, w.sourceHandle, w.targetHandle, w.selected, w.zIndex, N]), It), nt = tt.useMemo(() => w.markerStart ? `url('#${Td(w.markerStart, E)}')` : void 0, [w.markerStart, E]), _ = tt.useMemo(() => w.markerEnd ? `url('#${Td(w.markerEnd, E)}')` : void 0, [w.markerEnd, E]);
  if (w.hidden || B === null || G === null || $ === null || et === null)
    return null;
  const F = (dt) => {
    const { addSelectedEdges: xt, unselectNodesAndEdges: wt, multiSelectionActive: _t } = L.getState();
    I && (L.setState({ nodesSelectionActive: !1 }), w.selected && _t ? (wt({ nodes: [], edges: [w] }), ct.current?.blur()) : xt([l])), s && s(dt, w);
  }, st = f ? (dt) => {
    f(dt, { ...w });
  } : void 0, ot = d ? (dt) => {
    d(dt, { ...w });
  } : void 0, P = g ? (dt) => {
    g(dt, { ...w });
  } : void 0, ht = x ? (dt) => {
    x(dt, { ...w });
  } : void 0, mt = p ? (dt) => {
    p(dt, { ...w });
  } : void 0, ft = (dt) => {
    if (!V && ep.includes(dt.key) && I) {
      const { unselectNodesAndEdges: xt, addSelectedEdges: wt } = L.getState();
      dt.key === "Escape" ? (ct.current?.blur(), xt({ edges: [w] })) : wt([l]);
    }
  };
  return C.jsx("svg", { style: { zIndex: D }, children: C.jsxs("g", { className: ue([
    "react-flow__edge",
    `react-flow__edge-${Y}`,
    w.className,
    T,
    {
      selected: w.selected,
      animated: w.animated,
      inactive: !I && !s,
      updating: k,
      selectable: I
    }
  ]), onClick: F, onDoubleClick: st, onContextMenu: ot, onMouseEnter: P, onMouseMove: ht, onMouseLeave: mt, onKeyDown: j ? ft : void 0, tabIndex: j ? 0 : void 0, role: w.ariaRole ?? (j ? "group" : "img"), "aria-roledescription": "edge", "data-id": l, "data-testid": `rf__edge-${l}`, "aria-label": w.ariaLabel === null ? void 0 : w.ariaLabel || `Edge from ${w.source} to ${w.target}`, "aria-describedby": j ? `${Rp}-${E}` : void 0, ref: ct, ...w.domAttributes, children: [!lt && C.jsx(U, { id: l, source: w.source, target: w.target, type: w.type, selected: w.selected, animated: w.animated, selectable: I, deletable: w.deletable ?? !0, label: w.label, labelStyle: w.labelStyle, labelShowBg: w.labelShowBg, labelBgStyle: w.labelBgStyle, labelBgPadding: w.labelBgPadding, labelBgBorderRadius: w.labelBgBorderRadius, sourceX: B, sourceY: G, targetX: $, targetY: et, sourcePosition: ut, targetPosition: R, data: w.data, style: w.style, sourceHandleId: w.sourceHandle, targetHandleId: w.targetHandle, markerStart: nt, markerEnd: _, pathOptions: "pathOptions" in w ? w.pathOptions : void 0, interactionWidth: w.interactionWidth }), Q && C.jsx(g3, { edge: w, isReconnectable: Q, reconnectRadius: v, onReconnect: m, onReconnectStart: y, onReconnectEnd: b, sourceX: B, sourceY: G, targetX: $, targetY: et, sourcePosition: ut, targetPosition: R, setUpdateHover: rt, setReconnecting: z })] }) });
}
var y3 = tt.memo(m3);
const v3 = (l) => ({
  edgesFocusable: l.edgesFocusable,
  edgesReconnectable: l.edgesReconnectable,
  elementsSelectable: l.elementsSelectable,
  connectionMode: l.connectionMode,
  onError: l.onError
});
function u1({ defaultMarkerColor: l, onlyRenderVisibleElements: i, rfId: r, edgeTypes: c, noPanClassName: s, onReconnect: f, onEdgeContextMenu: d, onEdgeMouseEnter: g, onEdgeMouseMove: x, onEdgeMouseLeave: p, onEdgeClick: v, reconnectRadius: m, onEdgeDoubleClick: y, onReconnectStart: b, onReconnectEnd: E, disableKeyboardA11y: A }) {
  const { edgesFocusable: T, edgesReconnectable: N, elementsSelectable: V, onError: w } = jt(v3, It), O = e3(i);
  return C.jsxs("div", { className: "react-flow__edges", children: [C.jsx(u3, { defaultColor: l, rfId: r }), O.map((Y) => C.jsx(y3, { id: Y, edgesFocusable: T, edgesReconnectable: N, elementsSelectable: V, noPanClassName: s, onReconnect: f, onContextMenu: d, onMouseEnter: g, onMouseMove: x, onMouseLeave: p, onClick: v, reconnectRadius: m, onDoubleClick: y, onReconnectStart: b, onReconnectEnd: E, rfId: r, onError: w, edgeTypes: c, disableKeyboardA11y: A }, Y))] });
}
u1.displayName = "EdgeRenderer";
const p3 = tt.memo(u1), vv = (l) => `translate(${l[0]}px,${l[1]}px) scale(${l[2]})`;
function x3({ children: l }) {
  const i = $t(), r = tt.useRef(null), [c] = tt.useState(() => i.getState().transform);
  return Yp(() => {
    let s = null;
    const f = () => {
      const d = i.getState().transform;
      s && d[0] === s[0] && d[1] === s[1] && d[2] === s[2] || (s = d, r.current && (r.current.style.transform = vv(d)));
    };
    return f(), i.subscribe(f);
  }, [i]), C.jsx("div", { ref: r, className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: vv(c) }, children: l });
}
function S3(l) {
  const i = Jd(), r = tt.useRef(!1);
  tt.useEffect(() => {
    !r.current && i.viewportInitialized && l && (setTimeout(() => l(i), 1), r.current = !0);
  }, [l, i.viewportInitialized]);
}
const b3 = (l) => l.panZoom?.syncViewport;
function E3(l) {
  const i = jt(b3), r = $t();
  return tt.useEffect(() => {
    l && (i?.(l), r.setState({ transform: [l.x, l.y, l.zoom] }));
  }, [l, i]), null;
}
function _3(l) {
  return l.connection.inProgress ? { ...l.connection, to: Ku(l.connection.to, l.transform) } : { ...l.connection };
}
function w3(l) {
  return _3;
}
function N3(l) {
  const i = w3();
  return jt(i, It);
}
const T3 = (l) => ({
  nodesConnectable: l.nodesConnectable,
  isValid: l.connection.isValid,
  inProgress: l.connection.inProgress,
  width: l.width,
  height: l.height
});
function C3({ containerStyle: l, style: i, type: r, component: c }) {
  const { nodesConnectable: s, width: f, height: d, isValid: g, inProgress: x } = jt(T3, It);
  return !(f && s && x) ? null : C.jsx("svg", { style: l, width: f, height: d, className: "react-flow__connectionline react-flow__container", children: C.jsx("g", { className: ue(["react-flow__connection", dp(g)]), children: C.jsx(o1, { style: i, type: r, CustomComponent: c, isValid: g }) }) });
}
const o1 = ({ style: l, type: i = Bl.Bezier, CustomComponent: r, isValid: c }) => {
  const { inProgress: s, from: f, fromNode: d, fromHandle: g, fromPosition: x, to: p, toNode: v, toHandle: m, toPosition: y, pointer: b } = N3();
  if (!s)
    return;
  if (r)
    return C.jsx(r, { connectionLineType: i, connectionLineStyle: l, fromNode: d, fromHandle: g, fromX: f.x, fromY: f.y, toX: p.x, toY: p.y, fromPosition: x, toPosition: y, connectionStatus: dp(c), toNode: v, toHandle: m, pointer: b });
  let E = "";
  const A = {
    sourceX: f.x,
    sourceY: f.y,
    sourcePosition: x,
    targetX: p.x,
    targetY: p.y,
    targetPosition: y
  };
  switch (i) {
    case Bl.Bezier:
      [E] = Xd(A);
      break;
    case Bl.SimpleBezier:
      [E] = Jp(A);
      break;
    case Bl.Step:
      [E] = Nd({
        ...A,
        borderRadius: 0
      });
      break;
    case Bl.SmoothStep:
      [E] = Nd(A);
      break;
    default:
      [E] = pp(A);
  }
  return C.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: l });
};
o1.displayName = "ConnectionLine";
const z3 = {};
function pv(l = z3) {
  tt.useRef(l), $t(), tt.useEffect(() => {
  }, [l]);
}
function M3() {
  $t(), tt.useRef(!1), tt.useEffect(() => {
  }, []);
}
function r1({ nodeTypes: l, edgeTypes: i, onInit: r, onNodeClick: c, onEdgeClick: s, onNodeDoubleClick: f, onEdgeDoubleClick: d, onNodeMouseEnter: g, onNodeMouseMove: x, onNodeMouseLeave: p, onNodeContextMenu: v, onSelectionContextMenu: m, onSelectionStart: y, onSelectionEnd: b, connectionLineType: E, connectionLineStyle: A, connectionLineComponent: T, connectionLineContainerStyle: N, selectionKeyCode: V, selectionOnDrag: w, selectionMode: O, multiSelectionKeyCode: Y, panActivationKeyCode: U, zoomActivationKeyCode: j, deleteKeyCode: Q, onlyRenderVisibleElements: I, elementsSelectable: ct, defaultViewport: k, translateExtent: rt, minZoom: lt, maxZoom: z, preventScrolling: L, defaultMarkerColor: D, zoomOnScroll: B, zoomOnPinch: G, panOnScroll: $, panOnScrollSpeed: et, panOnScrollMode: ut, zoomOnDoubleClick: R, panOnDrag: nt, autoPanOnSelection: _, onPaneClick: F, onPaneMouseEnter: st, onPaneMouseMove: ot, onPaneMouseLeave: P, onPaneScroll: ht, onPaneContextMenu: mt, paneClickDistance: ft, nodeClickDistance: dt, onEdgeContextMenu: xt, onEdgeMouseEnter: wt, onEdgeMouseMove: _t, onEdgeMouseLeave: Ct, reconnectRadius: Ht, onReconnect: Ot, onReconnectStart: Pt, onReconnectEnd: xe, noDragClassName: ce, noWheelClassName: En, noPanClassName: ke, disableKeyboardA11y: Ae, nodeExtent: Ee, rfId: Oe, viewport: Ye, onViewportChange: _n, nodesDraggable: Ie }) {
  return pv(l), pv(i), M3(), S3(r), E3(Ye), C.jsx(QN, { onPaneClick: F, onPaneMouseEnter: st, onPaneMouseMove: ot, onPaneMouseLeave: P, onPaneContextMenu: mt, onPaneScroll: ht, paneClickDistance: ft, deleteKeyCode: Q, selectionKeyCode: V, selectionOnDrag: w, selectionMode: O, onSelectionStart: y, onSelectionEnd: b, multiSelectionKeyCode: Y, panActivationKeyCode: U, zoomActivationKeyCode: j, elementsSelectable: ct, zoomOnScroll: B, zoomOnPinch: G, zoomOnDoubleClick: R, panOnScroll: $, panOnScrollSpeed: et, panOnScrollMode: ut, panOnDrag: nt, autoPanOnSelection: _, defaultViewport: k, translateExtent: rt, minZoom: lt, maxZoom: z, onSelectionContextMenu: m, preventScrolling: L, noDragClassName: ce, noWheelClassName: En, noPanClassName: ke, disableKeyboardA11y: Ae, onViewportChange: _n, isControlledViewport: !!Ye, children: C.jsxs(x3, { children: [C.jsx(p3, { edgeTypes: i, onEdgeClick: s, onEdgeDoubleClick: d, onReconnect: Ot, onReconnectStart: Pt, onReconnectEnd: xe, onlyRenderVisibleElements: I, onEdgeContextMenu: xt, onEdgeMouseEnter: wt, onEdgeMouseMove: _t, onEdgeMouseLeave: Ct, reconnectRadius: Ht, defaultMarkerColor: D, noPanClassName: ke, disableKeyboardA11y: Ae, rfId: Oe }), C.jsx(C3, { style: A, type: E, component: T, containerStyle: N }), C.jsx("div", { className: "react-flow__edgelabel-renderer" }), C.jsx(t3, { nodeTypes: l, onNodeClick: c, onNodeDoubleClick: f, onNodeMouseEnter: g, onNodeMouseMove: x, onNodeMouseLeave: p, onNodeContextMenu: v, nodeClickDistance: dt, onlyRenderVisibleElements: I, noPanClassName: ke, noDragClassName: ce, disableKeyboardA11y: Ae, nodeExtent: Ee, rfId: Oe, nodesDraggable: Ie }), C.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
r1.displayName = "GraphView";
const A3 = tt.memo(r1), O3 = cp(), xv = ({ nodes: l, edges: i, defaultNodes: r, defaultEdges: c, width: s, height: f, fitView: d, fitViewOptions: g, minZoom: x = 0.5, maxZoom: p = 2, nodeOrigin: v, nodeExtent: m, zIndexMode: y = "basic" } = {}) => {
  const b = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), N = c ?? i ?? [], V = r ?? l ?? [], w = v ?? [0, 0], O = m ?? Uu;
  bp(A, T, N);
  const { nodesInitialized: Y } = Cd(V, b, E, {
    nodeOrigin: w,
    nodeExtent: O,
    zIndexMode: y
  });
  let U = [0, 0, 1];
  if (d && s && f) {
    const j = Gu(b, {
      filter: (k) => !!((k.width || k.initialWidth) && (k.height || k.initialHeight))
    }), { x: Q, y: I, zoom: ct } = Ld(j, s, f, x, p, g?.padding ?? 0.1);
    U = [Q, I, ct];
  }
  return {
    rfId: "1",
    width: s ?? 0,
    height: f ?? 0,
    transform: U,
    nodes: V,
    nodesInitialized: Y,
    nodeLookup: b,
    parentLookup: E,
    edges: N,
    edgeLookup: T,
    connectionLookup: A,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: r !== void 0,
    hasDefaultEdges: c !== void 0,
    panZoom: null,
    minZoom: x,
    maxZoom: p,
    translateExtent: Uu,
    nodeExtent: O,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: Si.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: w,
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
}, D3 = ({ nodes: l, edges: i, defaultNodes: r, defaultEdges: c, width: s, height: f, fitView: d, fitViewOptions: g, minZoom: x, maxZoom: p, nodeOrigin: v, nodeExtent: m, zIndexMode: y }) => Gw((b, E) => {
  async function A() {
    const { nodeLookup: T, panZoom: N, fitViewOptions: V, fitViewResolver: w, width: O, height: Y, minZoom: U, maxZoom: j } = E();
    N && (await L2({
      nodes: T,
      width: O,
      height: Y,
      panZoom: N,
      minZoom: U,
      maxZoom: j
    }, V), w?.resolve(!0), b({ fitViewResolver: null }));
  }
  return {
    ...xv({
      nodes: l,
      edges: i,
      width: s,
      height: f,
      fitView: d,
      fitViewOptions: g,
      minZoom: x,
      maxZoom: p,
      nodeOrigin: v,
      nodeExtent: m,
      defaultNodes: r,
      defaultEdges: c,
      zIndexMode: y
    }),
    setNodes: (T) => {
      const { nodeLookup: N, parentLookup: V, nodeOrigin: w, nodeExtent: O, elevateNodesOnSelect: Y, fitViewQueued: U, zIndexMode: j, nodesSelectionActive: Q } = E(), { nodesInitialized: I, hasSelectedNodes: ct } = Cd(T, N, V, {
        nodeOrigin: w,
        nodeExtent: O,
        elevateNodesOnSelect: Y,
        checkEquality: !0,
        zIndexMode: j
      }), k = Q && ct;
      U && I ? (A(), b({
        nodes: T,
        nodesInitialized: I,
        fitViewQueued: !1,
        fitViewOptions: void 0,
        nodesSelectionActive: k
      })) : b({ nodes: T, nodesInitialized: I, nodesSelectionActive: k });
    },
    setEdges: (T) => {
      const { connectionLookup: N, edgeLookup: V } = E();
      bp(N, V, T), b({ edges: T });
    },
    setDefaultNodesAndEdges: (T, N) => {
      if (T) {
        const { setNodes: V } = E();
        V(T), b({ hasDefaultNodes: !0 });
      }
      if (N) {
        const { setEdges: V } = E();
        V(N), b({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registered at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (T) => {
      const { triggerNodeChanges: N, nodeLookup: V, parentLookup: w, domNode: O, nodeOrigin: Y, nodeExtent: U, debug: j, fitViewQueued: Q, zIndexMode: I } = E(), { changes: ct, updatedInternals: k } = cw(T, V, w, O, Y, U, I);
      k && (iw(V, w, { nodeOrigin: Y, nodeExtent: U, zIndexMode: I }), Q ? (A(), b({ fitViewQueued: !1, fitViewOptions: void 0 })) : b({}), ct?.length > 0 && (j && console.log("React Flow: trigger node changes", ct), N?.(ct)));
    },
    updateNodePositions: (T, N = !1) => {
      const V = [];
      let w = [];
      const { nodeLookup: O, triggerNodeChanges: Y, connection: U, updateConnection: j, onNodesChangeMiddlewareMap: Q } = E();
      for (const [I, ct] of T) {
        const k = O.get(I), rt = !!(k?.expandParent && k?.parentId && ct?.position), lt = {
          id: I,
          type: "position",
          position: rt ? {
            x: Math.max(0, ct.position.x),
            y: Math.max(0, ct.position.y)
          } : ct.position,
          dragging: N
        };
        if (k && U.inProgress && U.fromNode.id === k.id) {
          const z = Sa(k, U.fromHandle, pt.Left, !0);
          j({ ...U, from: z });
        }
        rt && k.parentId && V.push({
          id: I,
          parentId: k.parentId,
          rect: {
            ...ct.internals.positionAbsolute,
            width: ct.measured.width ?? 0,
            height: ct.measured.height ?? 0
          }
        }), w.push(lt);
      }
      if (V.length > 0) {
        const { parentLookup: I, nodeOrigin: ct } = E(), k = $d(V, O, I, ct);
        w.push(...k);
      }
      for (const I of Q.values())
        w = I(w);
      Y(w);
    },
    triggerNodeChanges: (T) => {
      const { onNodesChange: N, setNodes: V, nodes: w, hasDefaultNodes: O, debug: Y } = E();
      if (T?.length) {
        if (O) {
          const U = jp(T, w);
          V(U);
        }
        Y && console.log("React Flow: trigger node changes", T), N?.(T);
      }
    },
    triggerEdgeChanges: (T) => {
      const { onEdgesChange: N, setEdges: V, edges: w, hasDefaultEdges: O, debug: Y } = E();
      if (T?.length) {
        if (O) {
          const U = dN(T, w);
          V(U);
        }
        Y && console.log("React Flow: trigger edge changes", T), N?.(T);
      }
    },
    addSelectedNodes: (T) => {
      const { multiSelectionActive: N, edgeLookup: V, nodeLookup: w, triggerNodeChanges: O, triggerEdgeChanges: Y } = E();
      if (N) {
        const U = T.map((j) => da(j, !0));
        O(U);
        return;
      }
      O(mi(w, /* @__PURE__ */ new Set([...T]), !0)), Y(mi(V));
    },
    addSelectedEdges: (T) => {
      const { multiSelectionActive: N, edgeLookup: V, nodeLookup: w, triggerNodeChanges: O, triggerEdgeChanges: Y } = E();
      if (N) {
        const U = T.map((j) => da(j, !0));
        Y(U);
        return;
      }
      Y(mi(V, /* @__PURE__ */ new Set([...T]))), O(mi(w, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: T, edges: N } = {}) => {
      const { edges: V, nodes: w, nodeLookup: O, triggerNodeChanges: Y, triggerEdgeChanges: U } = E(), j = T || w, Q = N || V, I = [];
      for (const k of j) {
        if (!k.selected)
          continue;
        const rt = O.get(k.id);
        rt && (rt.selected = !1), I.push(da(k.id, !1));
      }
      const ct = [];
      for (const k of Q)
        k.selected && ct.push(da(k.id, !1));
      Y(I), U(ct);
    },
    setMinZoom: (T) => {
      const { panZoom: N, maxZoom: V } = E();
      N?.setScaleExtent([T, V]), b({ minZoom: T });
    },
    setMaxZoom: (T) => {
      const { panZoom: N, minZoom: V } = E();
      N?.setScaleExtent([V, T]), b({ maxZoom: T });
    },
    setTranslateExtent: (T) => {
      E().panZoom?.setTranslateExtent(T), b({ translateExtent: T });
    },
    resetSelectedElements: () => {
      const { edges: T, nodes: N, triggerNodeChanges: V, triggerEdgeChanges: w, elementsSelectable: O } = E();
      if (!O)
        return;
      const Y = N.reduce((j, Q) => Q.selected ? [...j, da(Q.id, !1)] : j, []), U = T.reduce((j, Q) => Q.selected ? [...j, da(Q.id, !1)] : j, []);
      V(Y), w(U);
    },
    setNodeExtent: (T) => {
      const { nodes: N, nodeLookup: V, parentLookup: w, nodeOrigin: O, elevateNodesOnSelect: Y, nodeExtent: U, zIndexMode: j } = E();
      T[0][0] === U[0][0] && T[0][1] === U[0][1] && T[1][0] === U[1][0] && T[1][1] === U[1][1] || (Cd(N, V, w, {
        nodeOrigin: O,
        nodeExtent: T,
        elevateNodesOnSelect: Y,
        checkEquality: !1,
        zIndexMode: j
      }), b({ nodeExtent: T }));
    },
    panBy: (T) => {
      const { transform: N, width: V, height: w, panZoom: O, translateExtent: Y } = E();
      return sw({ delta: T, panZoom: O, transform: N, translateExtent: Y, width: V, height: w });
    },
    setCenter: async (T, N, V) => {
      const { width: w, height: O, maxZoom: Y, panZoom: U } = E();
      if (!U)
        return !1;
      const j = typeof V?.zoom < "u" ? V.zoom : Y;
      return await U.setViewport({
        x: w / 2 - T * j,
        y: O / 2 - N * j,
        zoom: j
      }, { duration: V?.duration, ease: V?.ease, interpolate: V?.interpolate }), !0;
    },
    cancelConnection: () => {
      b({
        connection: { ...lp }
      });
    },
    updateConnection: (T) => {
      b({ connection: T });
    },
    reset: () => b({ ...xv() })
  };
}, Object.is);
function R3({ initialNodes: l, initialEdges: i, defaultNodes: r, defaultEdges: c, initialWidth: s, initialHeight: f, initialMinZoom: d, initialMaxZoom: g, initialFitViewOptions: x, fitView: p, nodeOrigin: v, nodeExtent: m, zIndexMode: y, children: b }) {
  const [E] = tt.useState(() => D3({
    nodes: l,
    edges: i,
    defaultNodes: r,
    defaultEdges: c,
    width: s,
    height: f,
    fitView: p,
    minZoom: d,
    maxZoom: g,
    fitViewOptions: x,
    nodeOrigin: v,
    nodeExtent: m,
    zIndexMode: y
  }));
  return C.jsx(Kw, { value: E, children: C.jsx(vN, { children: C.jsx(DN, { children: b }) }) });
}
function H3({ children: l, nodes: i, edges: r, defaultNodes: c, defaultEdges: s, width: f, height: d, fitView: g, fitViewOptions: x, minZoom: p, maxZoom: v, nodeOrigin: m, nodeExtent: y, zIndexMode: b }) {
  return tt.useContext(sc) ? C.jsx(C.Fragment, { children: l }) : C.jsx(R3, { initialNodes: i, initialEdges: r, defaultNodes: c, defaultEdges: s, initialWidth: f, initialHeight: d, fitView: g, initialFitViewOptions: x, initialMinZoom: p, initialMaxZoom: v, nodeOrigin: m, nodeExtent: y, zIndexMode: b, children: l });
}
const U3 = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function j3({ nodes: l, edges: i, defaultNodes: r, defaultEdges: c, className: s, nodeTypes: f, edgeTypes: d, onNodeClick: g, onEdgeClick: x, onInit: p, onMove: v, onMoveStart: m, onMoveEnd: y, onConnect: b, onConnectStart: E, onConnectEnd: A, onClickConnectStart: T, onClickConnectEnd: N, onNodeMouseEnter: V, onNodeMouseMove: w, onNodeMouseLeave: O, onNodeContextMenu: Y, onNodeDoubleClick: U, onNodeDragStart: j, onNodeDrag: Q, onNodeDragStop: I, onNodesDelete: ct, onEdgesDelete: k, onDelete: rt, onSelectionChange: lt, onSelectionDragStart: z, onSelectionDrag: L, onSelectionDragStop: D, onSelectionContextMenu: B, onSelectionStart: G, onSelectionEnd: $, onBeforeDelete: et, connectionMode: ut, connectionLineType: R = Bl.Bezier, connectionLineStyle: nt, connectionLineComponent: _, connectionLineContainerStyle: F, deleteKeyCode: st = "Backspace", selectionKeyCode: ot = "Shift", selectionOnDrag: P = !1, selectionMode: ht = ju.Full, panActivationKeyCode: mt = "Space", multiSelectionKeyCode: ft = Yu() ? "Meta" : "Control", zoomActivationKeyCode: dt = Yu() ? "Meta" : "Control", snapToGrid: xt, snapGrid: wt, onlyRenderVisibleElements: _t = !1, selectNodesOnDrag: Ct, nodesDraggable: Ht, autoPanOnNodeFocus: Ot, nodesConnectable: Pt, nodesFocusable: xe, nodeOrigin: ce = Hp, edgesFocusable: En, edgesReconnectable: ke, elementsSelectable: Ae = !0, defaultViewport: Ee = iN, minZoom: Oe = 0.5, maxZoom: Ye = 2, translateExtent: _n = Uu, preventScrolling: Ie = !0, nodeExtent: Ll, defaultMarkerColor: wi = "#b1b1b7", zoomOnScroll: hc = !0, zoomOnPinch: Ju = !0, panOnScroll: Ni = !1, panOnScrollSpeed: Ti = 0.5, panOnScrollMode: Ci = ma.Free, zoomOnDoubleClick: gc = !0, panOnDrag: mc = !0, onPaneClick: _e, onPaneMouseEnter: yc, onPaneMouseMove: ku, onPaneMouseLeave: Iu, onPaneScroll: ba, onPaneContextMenu: vc, paneClickDistance: Fu = 1, nodeClickDistance: pc = 0, children: xc, onReconnect: ql, onReconnectStart: we, onReconnectEnd: wn, onEdgeContextMenu: Ne, onEdgeDoubleClick: Sc, onEdgeMouseEnter: bc, onEdgeMouseMove: Ec, onEdgeMouseLeave: Ea, reconnectRadius: _a = 10, onNodesChange: wa, onEdgesChange: Vn, noDragClassName: Na = "nodrag", noWheelClassName: Xl = "nowheel", noPanClassName: zi = "nopan", fitView: Wu, fitViewOptions: Mi, connectOnClick: Ai, attributionPosition: Zl, proOptions: _c, defaultEdgeOptions: Pu, elevateNodesOnSelect: to = !0, elevateEdgesOnSelect: eo = !1, disableKeyboardA11y: Ta = !1, autoPanOnConnect: Oi, autoPanOnNodeDrag: no, autoPanOnSelection: lo = !0, autoPanSpeed: on, connectionRadius: oe, isValidConnection: Se, onError: il, style: ao, id: io, nodeDragThreshold: wc, connectionDragThreshold: uo, viewport: Gl, onViewportChange: Ca, width: za, height: Ln, colorMode: ul = "light", debug: Ql, onScroll: qn, ariaLabelConfig: ee, zIndexMode: Di = "basic", ...oo }, ro) {
  const rn = io || "1", ol = cN(ul), Nc = tt.useCallback((Ri) => {
    Ri.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), qn?.(Ri);
  }, [qn]);
  return C.jsx("div", { "data-testid": "rf__wrapper", ...oo, onScroll: Nc, style: { ...ao, ...U3 }, ref: ro, className: ue(["react-flow", s, ol]), id: io, role: "application", children: C.jsxs(H3, { nodes: l, edges: i, width: za, height: Ln, fitView: Wu, fitViewOptions: Mi, minZoom: Oe, maxZoom: Ye, nodeOrigin: ce, nodeExtent: Ll, zIndexMode: Di, children: [C.jsx(rN, { nodes: l, edges: i, defaultNodes: r, defaultEdges: c, onConnect: b, onConnectStart: E, onConnectEnd: A, onClickConnectStart: T, onClickConnectEnd: N, nodesDraggable: Ht, autoPanOnNodeFocus: Ot, nodesConnectable: Pt, nodesFocusable: xe, edgesFocusable: En, edgesReconnectable: ke, elementsSelectable: Ae, elevateNodesOnSelect: to, elevateEdgesOnSelect: eo, minZoom: Oe, maxZoom: Ye, nodeExtent: Ll, onNodesChange: wa, onEdgesChange: Vn, snapToGrid: xt, snapGrid: wt, connectionMode: ut, translateExtent: _n, connectOnClick: Ai, defaultEdgeOptions: Pu, fitView: Wu, fitViewOptions: Mi, onNodesDelete: ct, onEdgesDelete: k, onDelete: rt, onNodeDragStart: j, onNodeDrag: Q, onNodeDragStop: I, onSelectionDrag: L, onSelectionDragStart: z, onSelectionDragStop: D, onMove: v, onMoveStart: m, onMoveEnd: y, noPanClassName: zi, nodeOrigin: ce, rfId: rn, autoPanOnConnect: Oi, autoPanOnNodeDrag: no, autoPanSpeed: on, onError: il, connectionRadius: oe, isValidConnection: Se, selectNodesOnDrag: Ct, nodeDragThreshold: wc, connectionDragThreshold: uo, onBeforeDelete: et, debug: Ql, ariaLabelConfig: ee, zIndexMode: Di }), C.jsx(A3, { onInit: p, onNodeClick: g, onEdgeClick: x, onNodeMouseEnter: V, onNodeMouseMove: w, onNodeMouseLeave: O, onNodeContextMenu: Y, onNodeDoubleClick: U, nodeTypes: f, edgeTypes: d, connectionLineType: R, connectionLineStyle: nt, connectionLineComponent: _, connectionLineContainerStyle: F, selectionKeyCode: ot, selectionOnDrag: P, selectionMode: ht, deleteKeyCode: st, multiSelectionKeyCode: ft, panActivationKeyCode: mt, zoomActivationKeyCode: dt, onlyRenderVisibleElements: _t, defaultViewport: Ee, translateExtent: _n, minZoom: Oe, maxZoom: Ye, preventScrolling: Ie, zoomOnScroll: hc, zoomOnPinch: Ju, zoomOnDoubleClick: gc, panOnScroll: Ni, panOnScrollSpeed: Ti, panOnScrollMode: Ci, panOnDrag: mc, autoPanOnSelection: lo, onPaneClick: _e, onPaneMouseEnter: yc, onPaneMouseMove: ku, onPaneMouseLeave: Iu, onPaneScroll: ba, onPaneContextMenu: vc, paneClickDistance: Fu, nodeClickDistance: pc, onSelectionContextMenu: B, onSelectionStart: G, onSelectionEnd: $, onReconnect: ql, onReconnectStart: we, onReconnectEnd: wn, onEdgeContextMenu: Ne, onEdgeDoubleClick: Sc, onEdgeMouseEnter: bc, onEdgeMouseMove: Ec, onEdgeMouseLeave: Ea, reconnectRadius: _a, defaultMarkerColor: wi, noDragClassName: Na, noWheelClassName: Xl, noPanClassName: zi, rfId: rn, disableKeyboardA11y: Ta, nodeExtent: Ll, viewport: Gl, onViewportChange: Ca, nodesDraggable: Ht }), C.jsx(aN, { onSelectionChange: lt }), xc, C.jsx(Pw, { proOptions: _c, position: Zl }), C.jsx(Ww, { rfId: rn, disableKeyboardA11y: Ta })] }) });
}
var B3 = Bp(j3);
const Y3 = (l) => l.domNode?.querySelector(".react-flow__edgelabel-renderer");
function V3({ children: l }) {
  const i = jt(Y3);
  return i ? Qw.createPortal(l, i) : null;
}
function L3({ dimensions: l, lineWidth: i, variant: r, className: c }) {
  return C.jsx("path", { strokeWidth: i, d: `M${l[0] / 2} 0 V${l[1]} M0 ${l[1] / 2} H${l[0]}`, className: ue(["react-flow__background-pattern", r, c]) });
}
function q3({ radius: l, className: i }) {
  return C.jsx("circle", { cx: l, cy: l, r: l, className: ue(["react-flow__background-pattern", "dots", i]) });
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
function c1({
  id: l,
  variant: i = Vl.Dots,
  // only used for dots and cross
  gap: r = 20,
  // only used for lines and cross
  size: c,
  lineWidth: s = 1,
  offset: f = 0,
  color: d,
  bgColor: g,
  style: x,
  className: p,
  patternClassName: v
}) {
  const m = tt.useRef(null), { transform: y, patternId: b } = jt(Z3, It), E = c || X3[i], A = i === Vl.Dots, T = i === Vl.Cross, N = Array.isArray(r) ? r : [r, r], V = [N[0] * y[2] || 1, N[1] * y[2] || 1], w = E * y[2], O = Array.isArray(f) ? f : [f, f], Y = T ? [w, w] : V, U = [
    O[0] * y[2] + Y[0] / 2,
    O[1] * y[2] + Y[1] / 2
  ], j = `${b}${l || ""}`;
  return C.jsxs("svg", { className: ue(["react-flow__background", p]), style: {
    ...x,
    ...dc,
    "--xy-background-color-props": g,
    "--xy-background-pattern-color-props": d
  }, ref: m, "data-testid": "rf__background", children: [C.jsx("pattern", { id: j, x: y[0] % V[0], y: y[1] % V[1], width: V[0], height: V[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${U[0]},-${U[1]})`, children: A ? C.jsx(q3, { radius: w / 2, className: v }) : C.jsx(L3, { dimensions: Y, lineWidth: s, variant: i, className: v }) }), C.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${j})` })] });
}
c1.displayName = "Background";
const G3 = tt.memo(c1);
function Q3() {
  return C.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: C.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function K3() {
  return C.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: C.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function $3() {
  return C.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: C.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function J3() {
  return C.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: C.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function k3() {
  return C.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: C.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Yr({ children: l, className: i, ...r }) {
  return C.jsx("button", { type: "button", className: ue(["react-flow__controls-button", i]), ...r, children: l });
}
const I3 = (l) => ({
  isInteractive: l.nodesDraggable || l.nodesConnectable || l.elementsSelectable,
  minZoomReached: l.transform[2] <= l.minZoom,
  maxZoomReached: l.transform[2] >= l.maxZoom,
  ariaLabelConfig: l.ariaLabelConfig
});
function s1({ style: l, showZoom: i = !0, showFitView: r = !0, showInteractive: c = !0, fitViewOptions: s, onZoomIn: f, onZoomOut: d, onFitView: g, onInteractiveChange: x, className: p, children: v, position: m = "bottom-left", orientation: y = "vertical", "aria-label": b }) {
  const E = $t(), { isInteractive: A, minZoomReached: T, maxZoomReached: N, ariaLabelConfig: V } = jt(I3, It), { zoomIn: w, zoomOut: O, fitView: Y } = Jd(), U = () => {
    w(), f?.();
  }, j = () => {
    O(), d?.();
  }, Q = () => {
    Y(s), g?.();
  }, I = () => {
    E.setState({
      nodesDraggable: !A,
      nodesConnectable: !A,
      elementsSelectable: !A
    }), x?.(!A);
  }, ct = y === "horizontal" ? "horizontal" : "vertical";
  return C.jsxs(fc, { className: ue(["react-flow__controls", ct, p]), position: m, style: l, "data-testid": "rf__controls", "aria-label": b ?? V["controls.ariaLabel"], children: [i && C.jsxs(C.Fragment, { children: [C.jsx(Yr, { onClick: U, className: "react-flow__controls-zoomin", title: V["controls.zoomIn.ariaLabel"], "aria-label": V["controls.zoomIn.ariaLabel"], disabled: N, children: C.jsx(Q3, {}) }), C.jsx(Yr, { onClick: j, className: "react-flow__controls-zoomout", title: V["controls.zoomOut.ariaLabel"], "aria-label": V["controls.zoomOut.ariaLabel"], disabled: T, children: C.jsx(K3, {}) })] }), r && C.jsx(Yr, { className: "react-flow__controls-fitview", onClick: Q, title: V["controls.fitView.ariaLabel"], "aria-label": V["controls.fitView.ariaLabel"], children: C.jsx($3, {}) }), c && C.jsx(Yr, { className: "react-flow__controls-interactive", onClick: I, title: V["controls.interactive.ariaLabel"], "aria-label": V["controls.interactive.ariaLabel"], children: A ? C.jsx(k3, {}) : C.jsx(J3, {}) }), v] });
}
s1.displayName = "Controls";
const F3 = tt.memo(s1);
function W3({ id: l, x: i, y: r, width: c, height: s, style: f, color: d, strokeColor: g, strokeWidth: x, className: p, borderRadius: v, shapeRendering: m, selected: y, onClick: b }) {
  const { background: E, backgroundColor: A } = f || {}, T = d || E || A;
  return C.jsx("rect", { className: ue(["react-flow__minimap-node", { selected: y }, p]), x: i, y: r, rx: v, ry: v, width: c, height: s, style: {
    fill: T,
    stroke: g,
    strokeWidth: x
  }, shapeRendering: m, onClick: b ? (N) => b(N, l) : void 0 });
}
const P3 = tt.memo(W3), tT = (l) => l.nodes.map((i) => i.id), md = (l) => l instanceof Function ? l : () => l;
function eT({
  nodeStrokeColor: l,
  nodeColor: i,
  nodeClassName: r = "",
  nodeBorderRadius: c = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: f = P3,
  onClick: d
}) {
  const g = jt(tT, It), x = md(i), p = md(l), v = md(r), m = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return C.jsx(C.Fragment, { children: g.map((y) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    C.jsx(lT, { id: y, nodeColorFunc: x, nodeStrokeColorFunc: p, nodeClassNameFunc: v, nodeBorderRadius: c, nodeStrokeWidth: s, NodeComponent: f, onClick: d, shapeRendering: m }, y)
  )) });
}
function nT({ id: l, nodeColorFunc: i, nodeStrokeColorFunc: r, nodeClassNameFunc: c, nodeBorderRadius: s, nodeStrokeWidth: f, shapeRendering: d, NodeComponent: g, onClick: x }) {
  const { node: p, x: v, y: m, width: y, height: b } = jt((E) => {
    const A = E.nodeLookup.get(l);
    if (!A)
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const T = A.internals.userNode, { x: N, y: V } = A.internals.positionAbsolute, { width: w, height: O } = bn(T);
    return {
      node: T,
      x: N,
      y: V,
      width: w,
      height: O
    };
  }, It);
  return !p || p.hidden || !sp(p) ? null : C.jsx(g, { x: v, y: m, width: y, height: b, style: p.style, selected: !!p.selected, className: c(p), color: i(p), borderRadius: s, strokeColor: r(p), strokeWidth: f, shapeRendering: d, onClick: x, id: p.id });
}
const lT = tt.memo(nT);
var aT = tt.memo(eT);
const iT = 200, uT = 150, oT = (l) => !l.hidden, rT = (l) => {
  const i = {
    x: -l.transform[0] / l.transform[2],
    y: -l.transform[1] / l.transform[2],
    width: l.width / l.transform[2],
    height: l.height / l.transform[2]
  };
  let r = !1;
  for (const c of l.nodeLookup.values())
    if (!c.hidden) {
      r = !0;
      break;
    }
  return {
    viewBB: i,
    boundingRect: r ? op(Gu(l.nodeLookup, { filter: oT }), i) : i,
    rfId: l.rfId,
    panZoom: l.panZoom,
    translateExtent: l.translateExtent,
    flowWidth: l.width,
    flowHeight: l.height,
    ariaLabelConfig: l.ariaLabelConfig
  };
}, Sv = (l, i) => l.x === i.x && l.y === i.y && l.width === i.width && l.height === i.height, cT = (l, i) => Sv(l.viewBB, i.viewBB) && Sv(l.boundingRect, i.boundingRect) && l.rfId === i.rfId && l.panZoom === i.panZoom && l.translateExtent === i.translateExtent && l.flowWidth === i.flowWidth && l.flowHeight === i.flowHeight && l.ariaLabelConfig === i.ariaLabelConfig, sT = "react-flow__minimap-desc";
function f1({
  style: l,
  className: i,
  nodeStrokeColor: r,
  nodeColor: c,
  nodeClassName: s = "",
  nodeBorderRadius: f = 5,
  nodeStrokeWidth: d,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: g,
  bgColor: x,
  maskColor: p,
  maskStrokeColor: v,
  maskStrokeWidth: m,
  position: y = "bottom-right",
  onClick: b,
  onNodeClick: E,
  pannable: A = !1,
  zoomable: T = !1,
  ariaLabel: N,
  inversePan: V,
  zoomStep: w = 1,
  offsetScale: O = 5
}) {
  const Y = $t(), U = tt.useRef(null), { boundingRect: j, panZoom: Q, viewBB: I, rfId: ct, translateExtent: k, flowWidth: rt, flowHeight: lt, ariaLabelConfig: z } = jt(rT, cT), L = l?.width ?? iT, D = l?.height ?? uT, B = j.width / L, G = j.height / D, $ = Math.max(B, G), et = $ * L, ut = $ * D, R = O * $, nt = j.x - (et - j.width) / 2 - R, _ = j.y - (ut - j.height) / 2 - R, F = et + R * 2, st = ut + R * 2, ot = `${sT}-${ct}`, P = tt.useRef(0), ht = tt.useRef();
  P.current = $, tt.useEffect(() => {
    const wt = Y.getState().panZoom;
    if (U.current && wt)
      return ht.current = xw({
        domNode: U.current,
        panZoom: wt,
        getTransform: () => Y.getState().transform,
        getViewScale: () => P.current
      }), () => {
        ht.current?.destroy();
      };
  }, [Q]), tt.useEffect(() => {
    ht.current?.update({
      translateExtent: k,
      width: rt,
      height: lt,
      inversePan: V,
      pannable: A,
      zoomStep: w,
      zoomable: T
    });
  }, [A, T, V, w, k, rt, lt]);
  const mt = b ? (wt) => {
    const [_t, Ct] = ht.current?.pointer(wt) || [0, 0];
    b(wt, { x: _t, y: Ct });
  } : void 0, ft = tt.useCallback((wt, _t) => {
    const Ct = Y.getState().nodeLookup.get(_t).internals.userNode;
    E?.(wt, Ct);
  }, [E]), dt = E ? ft : void 0, xt = N ?? z["minimap.ariaLabel"];
  return C.jsx(fc, { position: y, style: {
    ...l,
    "--xy-minimap-background-color-props": typeof x == "string" ? x : void 0,
    "--xy-minimap-mask-background-color-props": typeof p == "string" ? p : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof v == "string" ? v : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof m == "number" ? m * $ : void 0,
    "--xy-minimap-node-background-color-props": typeof c == "string" ? c : void 0,
    "--xy-minimap-node-stroke-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-width-props": typeof d == "number" ? d : void 0
  }, className: ue(["react-flow__minimap", i]), "data-testid": "rf__minimap", children: C.jsxs("svg", { width: L, height: D, viewBox: `${nt} ${_} ${F} ${st}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": ot, ref: U, onClick: mt, children: [xt && C.jsx("title", { id: ot, children: xt }), C.jsx(aT, { onClick: dt, nodeColor: c, nodeStrokeColor: r, nodeBorderRadius: f, nodeClassName: s, nodeStrokeWidth: d, nodeComponent: g }), C.jsx("path", { className: "react-flow__minimap-mask", d: `M${nt - R},${_ - R}h${F + R * 2}v${st + R * 2}h${-F - R * 2}z
        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
f1.displayName = "MiniMap";
const fT = tt.memo(f1), dT = (l) => (i) => l ? `${Math.max(1 / i.transform[2], 1)}` : void 0, hT = {
  [_i.Line]: "right",
  [_i.Handle]: "bottom-right"
};
function gT({ nodeId: l, position: i, variant: r = _i.Handle, className: c, style: s = void 0, children: f, color: d, minWidth: g = 10, minHeight: x = 10, maxWidth: p = Number.MAX_VALUE, maxHeight: v = Number.MAX_VALUE, keepAspectRatio: m = !1, resizeDirection: y, autoScale: b = !0, shouldResize: E, onResizeStart: A, onResize: T, onResizeEnd: N }) {
  const V = Xp(), w = typeof l == "string" ? l : V, O = $t(), Y = tt.useRef(null), U = r === _i.Handle, j = jt(tt.useCallback(dT(U && b), [U, b]), It), Q = tt.useRef(null), I = i ?? hT[r];
  tt.useEffect(() => {
    if (!(!Y.current || !w))
      return Q.current || (Q.current = Dw({
        domNode: Y.current,
        nodeId: w,
        getStoreItems: () => {
          const { nodeLookup: k, transform: rt, snapGrid: lt, snapToGrid: z, nodeOrigin: L, domNode: D } = O.getState();
          return {
            nodeLookup: k,
            transform: rt,
            snapGrid: lt,
            snapToGrid: z,
            nodeOrigin: L,
            paneDomNode: D
          };
        },
        onChange: (k, rt) => {
          const { triggerNodeChanges: lt, nodeLookup: z, parentLookup: L, nodeOrigin: D } = O.getState(), B = [], G = { x: k.x, y: k.y }, $ = z.get(w);
          if ($ && $.expandParent && $.parentId) {
            const et = $.origin ?? D, ut = k.width ?? $.measured.width ?? 0, R = k.height ?? $.measured.height ?? 0, nt = {
              id: $.id,
              parentId: $.parentId,
              rect: {
                width: ut,
                height: R,
                ...fp({
                  x: k.x ?? $.position.x,
                  y: k.y ?? $.position.y
                }, { width: ut, height: R }, $.parentId, z, et)
              }
            }, _ = $d([nt], z, L, D);
            B.push(..._), G.x = k.x ? Math.max(et[0] * ut, k.x) : void 0, G.y = k.y ? Math.max(et[1] * R, k.y) : void 0;
          }
          if (G.x !== void 0 && G.y !== void 0) {
            const et = {
              id: w,
              type: "position",
              position: { ...G }
            };
            B.push(et);
          }
          if (k.width !== void 0 && k.height !== void 0) {
            const ut = {
              id: w,
              type: "dimensions",
              resizing: !0,
              setAttributes: y ? y === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: k.width,
                height: k.height
              }
            };
            B.push(ut);
          }
          for (const et of rt) {
            const ut = {
              ...et,
              type: "position"
            };
            B.push(ut);
          }
          lt(B);
        },
        onEnd: ({ width: k, height: rt }) => {
          const lt = {
            id: w,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: k,
              height: rt
            }
          };
          O.getState().triggerNodeChanges([lt]);
        }
      })), Q.current.update({
        controlPosition: I,
        boundaries: {
          minWidth: g,
          minHeight: x,
          maxWidth: p,
          maxHeight: v
        },
        keepAspectRatio: m,
        resizeDirection: y,
        onResizeStart: A,
        onResize: T,
        onResizeEnd: N,
        shouldResize: E
      }), () => {
        Q.current?.destroy();
      };
  }, [
    I,
    g,
    x,
    p,
    v,
    m,
    A,
    T,
    N,
    E
  ]);
  const ct = I.split("-");
  return C.jsx("div", { className: ue(["react-flow__resize-control", "nodrag", ...ct, r, c]), ref: Y, style: {
    ...s,
    scale: j,
    ...d && { [U ? "backgroundColor" : "borderColor"]: d }
  }, children: f });
}
tt.memo(gT);
function mT(l) {
  const i = Math.max(1, Math.ceil(Math.sqrt(l.entities.length)));
  let r = 60;
  const c = [];
  for (let s = 0; s < l.entities.length; s += i) {
    const f = l.entities.slice(s, s + i);
    f.forEach(
      (d, g) => c.push({
        ...d,
        position: { x: 60 + g * 340, y: r }
      })
    ), r += Math.max(
      ...f.map(
        (d) => 140 + d.fields.length * 30 + (d.annotation ? 70 : 0)
      )
    ) + 80;
  }
  return { ...l, entities: c };
}
function bv(l, i, r = []) {
  const c = new Set(i), s = new Set(r);
  return {
    ...l,
    entities: l.entities.filter((f) => !c.has(f.id)),
    relationships: l.relationships.filter(
      (f) => !s.has(f.id) && !c.has(f.source) && !c.has(f.target)
    )
  };
}
function yT({ data: l }) {
  const i = l.entity;
  return /* @__PURE__ */ C.jsxs("div", { className: `erd-node erd-node-${i.role}`, children: [
    /* @__PURE__ */ C.jsx(Yl, { type: "target", position: pt.Left, id: "left" }),
    /* @__PURE__ */ C.jsx(Yl, { type: "source", position: pt.Right, id: "right" }),
    /* @__PURE__ */ C.jsx(Yl, { type: "target", position: pt.Top, id: "top" }),
    /* @__PURE__ */ C.jsx(Yl, { type: "source", position: pt.Bottom, id: "bottom" }),
    /* @__PURE__ */ C.jsxs("div", { className: "erd-node-heading", children: [
      /* @__PURE__ */ C.jsx("small", { children: i.role }),
      /* @__PURE__ */ C.jsx("strong", { children: i.name || "Untitled" })
    ] }),
    i.annotation && /* @__PURE__ */ C.jsx("div", { className: "erd-node-note", title: i.annotation, children: i.annotation }),
    !i.fields.length && /* @__PURE__ */ C.jsx("div", { className: "erd-node-empty", children: "Select to add fields" }),
    i.fields.map((r) => /* @__PURE__ */ C.jsxs("div", { className: "erd-node-field", children: [
      /* @__PURE__ */ C.jsxs("span", { children: [
        /* @__PURE__ */ C.jsx("span", { className: `erd-key ${r.pk || r.fk ? "erd-key-set" : ""}`, children: [r.pk && "PK", r.fk && "FK"].filter(Boolean).join(" ") || "·" }),
        r.name
      ] }),
      /* @__PURE__ */ C.jsx("small", { children: r.data_type })
    ] }, r.id))
  ] });
}
const Ev = (l, i) => l ? i === "many" ? "0..*" : "0..1" : i === "many" ? "1..*" : "1";
function vT(l) {
  const [i, r, c] = Xd(l), s = l.data?.relation;
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx(
      $u,
      {
        path: i,
        markerEnd: s?.target_cardinality === "many" ? "url(#erd-crowfoot)" : "url(#erd-one)",
        markerStart: s?.source_cardinality === "many" ? "url(#erd-crowfoot-start)" : "url(#erd-one-start)",
        style: {
          stroke: l.selected ? "#0b766e" : "#8597a5",
          strokeWidth: l.selected ? 3 : 1.6
        }
      }
    ),
    s && /* @__PURE__ */ C.jsx(V3, { children: /* @__PURE__ */ C.jsxs(
      "div",
      {
        className: `erd-edge-label ${l.selected ? "selected" : ""}`,
        style: {
          transform: `translate(-50%, -50%) translate(${r}px,${c}px)`
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
const pT = { entity: tt.memo(yT) }, xT = { relation: tt.memo(vT) }, zu = () => crypto.randomUUID(), ST = (l) => l === "conceptual_erd" ? "entity" : l === "star_schema" ? "dimension" : "table", bT = (l, i) => ({
  id: zu(),
  source: l,
  target: i,
  label: "",
  source_cardinality: "one",
  target_cardinality: "many",
  source_optional: !1,
  target_optional: !0
});
function ET({
  diagram: l,
  attemptId: i,
  kind: r,
  onSave: c
}) {
  const [s, f] = tt.useState(l), [d, g] = tt.useState(null), [x, p] = tt.useState(null), [v, m] = tt.useState([]), [y, b] = tt.useState(null), [E, A] = tt.useState(""), [T, N] = tt.useState(!1), [V, w] = tt.useState({ past: [], future: [] }), O = tt.useRef(0), Y = tt.useRef(s);
  tt.useEffect(() => {
    f(l), Y.current = l, g(null), p(null), w({ past: [], future: [] }), A("");
  }, [i]), tt.useEffect(() => {
    m((R) => {
      const nt = new Map(R.map((_) => [_.id, _]));
      return s.entities.map(
        (_) => nt.get(_.id)?.data.entity === _ && nt.get(_.id)?.selected === (d === _.id) ? nt.get(_.id) : {
          ...nt.get(_.id),
          id: _.id,
          type: "entity",
          selected: d === _.id,
          position: _.position,
          data: { entity: _ }
        }
      );
    });
  }, [s.entities, d]);
  const U = tt.useCallback(
    (R) => {
      const nt = Y.current, _ = Date.now(), F = nt.entities.length !== R.entities.length || nt.relationships.length !== R.relationships.length || nt.entities.some(
        (ot, P) => ot.fields.length !== R.entities[P]?.fields.length || ot.position !== R.entities[P]?.position
      ), st = _ - O.current > 600 || F;
      w((ot) => ({
        past: st || !ot.past.length ? [...ot.past.slice(-49), nt] : ot.past,
        future: []
      })), O.current = _, Y.current = R, f(R), c(R);
    },
    [c]
  ), j = (R) => {
    const nt = V[R];
    if (!nt.length) return;
    const _ = nt[nt.length - 1];
    w(
      R === "past" ? {
        past: nt.slice(0, -1),
        future: [...V.future, Y.current]
      } : {
        past: [...V.past, Y.current],
        future: nt.slice(0, -1)
      }
    ), Y.current = _, O.current = 0, f(_), c(_);
  }, Q = (R) => {
    g(R), p(null), y?.fitView({
      nodes: [{ id: R }],
      padding: 0.7,
      maxZoom: 1.1,
      duration: 250
    });
  }, I = (R, nt) => U({
    ...Y.current,
    entities: Y.current.entities.map(
      (_) => _.id === R ? { ..._, ...nt } : _
    )
  }), ct = (R, nt) => U({
    ...Y.current,
    relationships: Y.current.relationships.map(
      (_) => _.id === R ? { ..._, ...nt } : _
    )
  }), k = s.entities.find((R) => R.id === d), rt = tt.useMemo(
    () => new Map(s.entities.map((R) => [R.id, R.name])),
    [s.entities]
  ), lt = s.relationships.find((R) => R.id === x), z = tt.useMemo(
    () => s.relationships.map((R) => ({
      id: R.id,
      source: R.source,
      target: R.target,
      sourceHandle: R.source_handle ?? "right",
      targetHandle: R.target_handle ?? "left",
      selected: R.id === x,
      type: "relation",
      data: { relation: R }
    })),
    [s.relationships, x]
  ), L = tt.useCallback(
    (R) => {
      if (R.source && R.target && R.source !== R.target && Y.current.relationships.length < 300 && !Y.current.relationships.some(
        (nt) => nt.source === R.source && nt.target === R.target
      )) {
        const nt = {
          ...bT(R.source, R.target),
          source_handle: R.sourceHandle,
          target_handle: R.targetHandle
        };
        U({
          ...Y.current,
          relationships: [...Y.current.relationships, nt]
        }), p(nt.id), g(null);
      }
    },
    [U]
  ), D = () => {
    if (Y.current.entities.length >= 100) return;
    const R = {
      id: zu(),
      name: `${r === "star_schema" ? "dimension" : r === "conceptual_erd" ? "entity" : "table"}_${s.entities.length + 1}`,
      role: ST(r),
      annotation: "",
      position: {
        x: 80 + s.entities.length % 4 * 260,
        y: 80 + Math.floor(s.entities.length / 4) * 180
      },
      fields: []
    };
    U({ ...Y.current, entities: [...Y.current.entities, R] }), g(R.id), p(null), A(""), requestAnimationFrame(
      () => {
        y?.fitView({
          nodes: [{ id: R.id }],
          padding: 0.7,
          maxZoom: 1.1,
          duration: 250
        });
      }
    );
  }, B = () => {
    k && (U(bv(Y.current, [k.id])), g(null));
  }, G = () => {
    !k || k.fields.length >= 100 || I(k.id, {
      fields: [
        ...k.fields,
        { id: zu(), name: "new_field", data_type: "", pk: !1, fk: !1 }
      ]
    });
  }, $ = (R, nt) => {
    k && I(k.id, {
      fields: k.fields.map(
        (_) => _.id === R ? { ..._, ...nt } : _
      )
    });
  }, et = (R) => m((nt) => jp(R, nt)), ut = (R) => {
    for (const nt of R)
      nt.type === "select" && p(
        (_) => nt.selected ? nt.id : _ === nt.id ? null : _
      );
  };
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: `erd-editor ${T ? "erd-expanded" : ""}`,
      onKeyDown: (R) => {
        R.target.closest("input, textarea, select, [contenteditable=true]") || (R.ctrlKey || R.metaKey) && R.key.toLowerCase() === "z" && (R.preventDefault(), j(R.shiftKey ? "future" : "past"));
      },
      children: [
        /* @__PURE__ */ C.jsxs("div", { className: "erd-toolbar", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "erd-brand", children: [
            /* @__PURE__ */ C.jsx("span", { className: "erd-brand-icon", children: "▦" }),
            /* @__PURE__ */ C.jsxs("div", { children: [
              /* @__PURE__ */ C.jsx("strong", { children: "Schema studio" }),
              /* @__PURE__ */ C.jsx("small", { children: r.replaceAll("_", " ") })
            ] })
          ] }),
          /* @__PURE__ */ C.jsxs(
            "button",
            {
              className: "erd-primary",
              type: "button",
              disabled: s.entities.length >= 100,
              onClick: D,
              children: [
                "+ Add ",
                r === "conceptual_erd" ? "entity" : "table"
              ]
            }
          ),
          /* @__PURE__ */ C.jsxs("div", { className: "erd-toolbar-group", children: [
            /* @__PURE__ */ C.jsx(
              "button",
              {
                type: "button",
                title: "Undo (Ctrl/Cmd+Z outside text fields)",
                disabled: !V.past.length,
                onClick: () => j("past"),
                children: "↶ Undo"
              }
            ),
            /* @__PURE__ */ C.jsx(
              "button",
              {
                type: "button",
                title: "Redo (Ctrl/Cmd+Shift+Z)",
                disabled: !V.future.length,
                onClick: () => j("future"),
                children: "↷ Redo"
              }
            )
          ] }),
          /* @__PURE__ */ C.jsx(
            "button",
            {
              type: "button",
              disabled: !s.entities.length,
              onClick: () => {
                U(mT(Y.current)), requestAnimationFrame(
                  () => {
                    y?.fitView({ padding: 0.2, duration: 250 });
                  }
                );
              },
              children: "Tidy layout"
            }
          ),
          /* @__PURE__ */ C.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                y?.fitView({ padding: 0.2, duration: 250 });
              },
              children: "Fit view"
            }
          ),
          /* @__PURE__ */ C.jsx(
            "button",
            {
              type: "button",
              className: "erd-expand",
              "aria-pressed": T,
              onClick: () => N(!T),
              children: T ? "Compact view" : "Expand canvas"
            }
          )
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "erd-body", children: [
          /* @__PURE__ */ C.jsxs("aside", { className: "erd-panel", children: [
            /* @__PURE__ */ C.jsxs("div", { className: "erd-section-heading", children: [
              "Explorer",
              " ",
              /* @__PURE__ */ C.jsx("span", { className: "erd-count", children: s.entities.length })
            ] }),
            /* @__PURE__ */ C.jsx(
              "input",
              {
                className: "erd-search",
                "aria-label": "Find a table or field",
                placeholder: "Find a table or field…",
                value: E,
                onChange: (R) => A(R.target.value)
              }
            ),
            /* @__PURE__ */ C.jsx("div", { className: "erd-list", children: s.entities.filter(
              (R) => `${R.name} ${R.fields.map((nt) => nt.name).join(" ")}`.toLowerCase().includes(E.toLowerCase())
            ).map((R) => /* @__PURE__ */ C.jsxs(
              "button",
              {
                type: "button",
                className: d === R.id ? "active" : "",
                onClick: () => {
                  Q(R.id);
                },
                children: [
                  /* @__PURE__ */ C.jsx("span", { className: `erd-role-dot ${R.role}` }),
                  " ",
                  /* @__PURE__ */ C.jsx("span", { children: R.name || "Untitled" }),
                  /* @__PURE__ */ C.jsx("small", { children: R.fields.length })
                ]
              },
              R.id
            )) }),
            E && !s.entities.some(
              (R) => `${R.name} ${R.fields.map((nt) => nt.name).join(" ")}`.toLowerCase().includes(E.toLowerCase())
            ) && /* @__PURE__ */ C.jsx("p", { className: "erd-muted", children: "No matching tables or fields." }),
            k && /* @__PURE__ */ C.jsxs("div", { className: "erd-details", children: [
              /* @__PURE__ */ C.jsxs("div", { className: "erd-section-heading", children: [
                /* @__PURE__ */ C.jsx("h4", { children: "Properties" }),
                /* @__PURE__ */ C.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: s.entities.length >= 100,
                    onClick: () => {
                      const R = {
                        ...k,
                        id: zu(),
                        name: `${k.name.slice(0, 195)}_copy`,
                        fields: k.fields.map((nt) => ({ ...nt, id: zu() })),
                        position: {
                          x: k.position.x + 320,
                          y: k.position.y + 40
                        }
                      };
                      U({
                        ...Y.current,
                        entities: [...Y.current.entities, R]
                      }), g(R.id);
                    },
                    children: "Duplicate"
                  }
                )
              ] }),
              /* @__PURE__ */ C.jsxs("label", { children: [
                "Name",
                /* @__PURE__ */ C.jsx(
                  "input",
                  {
                    maxLength: 200,
                    "aria-label": "Entity name",
                    value: k.name,
                    onChange: (R) => I(k.id, { name: R.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ C.jsxs("label", { children: [
                "Role",
                /* @__PURE__ */ C.jsx(
                  "select",
                  {
                    "aria-label": "Entity role",
                    value: k.role,
                    onChange: (R) => I(k.id, {
                      role: R.target.value
                    }),
                    children: (r === "star_schema" ? ["fact", "dimension"] : r === "logical_erd" ? ["table"] : ["entity"]).map((R) => /* @__PURE__ */ C.jsx("option", { children: R }, R))
                  }
                )
              ] }),
              /* @__PURE__ */ C.jsxs("label", { children: [
                r === "star_schema" ? "Grain / annotation" : "Annotation",
                /* @__PURE__ */ C.jsx(
                  "textarea",
                  {
                    maxLength: 1e3,
                    "aria-label": "Entity annotation",
                    value: k.annotation,
                    onChange: (R) => I(k.id, { annotation: R.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ C.jsxs("label", { children: [
                "Connect to another table",
                /* @__PURE__ */ C.jsxs(
                  "select",
                  {
                    "aria-label": "Connect to another table",
                    value: "",
                    disabled: s.relationships.length >= 300,
                    onChange: (R) => {
                      R.target.value && L({
                        source: k.id,
                        target: R.target.value,
                        sourceHandle: "right",
                        targetHandle: "left"
                      });
                    },
                    children: [
                      /* @__PURE__ */ C.jsx("option", { value: "", children: "Choose a table…" }),
                      s.entities.filter(
                        (R) => R.id !== k.id && !s.relationships.some(
                          (nt) => nt.source === k.id && nt.target === R.id
                        )
                      ).map((R) => /* @__PURE__ */ C.jsx("option", { value: R.id, children: R.name }, R.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ C.jsxs("div", { className: "erd-section-heading", children: [
                "Fields",
                " ",
                /* @__PURE__ */ C.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: k.fields.length >= 100,
                    onClick: G,
                    children: "+ Field"
                  }
                )
              ] }),
              k.fields.map((R) => /* @__PURE__ */ C.jsxs("div", { className: "erd-field-edit", children: [
                /* @__PURE__ */ C.jsx(
                  "input",
                  {
                    maxLength: 200,
                    "aria-label": "Field name",
                    value: R.name,
                    onChange: (nt) => $(R.id, { name: nt.target.value })
                  }
                ),
                /* @__PURE__ */ C.jsx(
                  "input",
                  {
                    maxLength: 100,
                    "aria-label": "Field data type",
                    placeholder: "Type",
                    list: `erd-types-${i}`,
                    value: R.data_type,
                    onChange: (nt) => $(R.id, { data_type: nt.target.value })
                  }
                ),
                /* @__PURE__ */ C.jsxs("label", { children: [
                  /* @__PURE__ */ C.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: R.pk,
                      onChange: (nt) => $(R.id, { pk: nt.target.checked })
                    }
                  ),
                  " ",
                  "PK"
                ] }),
                /* @__PURE__ */ C.jsxs("label", { children: [
                  /* @__PURE__ */ C.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: R.fk,
                      onChange: (nt) => $(R.id, { fk: nt.target.checked })
                    }
                  ),
                  " ",
                  "FK"
                ] }),
                /* @__PURE__ */ C.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => I(k.id, {
                      fields: k.fields.filter((nt) => nt.id !== R.id)
                    }),
                    children: "Remove field"
                  }
                )
              ] }, R.id)),
              /* @__PURE__ */ C.jsx(
                "button",
                {
                  type: "button",
                  className: "erd-danger",
                  onClick: B,
                  children: "Delete entity"
                }
              )
            ] }),
            /* @__PURE__ */ C.jsx("strong", { children: "Relationships" }),
            /* @__PURE__ */ C.jsx("div", { className: "erd-list", children: s.relationships.map((R) => /* @__PURE__ */ C.jsxs(
              "button",
              {
                type: "button",
                className: x === R.id ? "active" : "",
                onClick: () => {
                  p(R.id), g(null);
                },
                children: [
                  rt.get(R.source),
                  " → ",
                  rt.get(R.target)
                ]
              },
              R.id
            )) }),
            !k && !lt && /* @__PURE__ */ C.jsxs("div", { className: "erd-inspector-hint", children: [
              /* @__PURE__ */ C.jsx("strong", { children: "Your model, one connection at a time." }),
              /* @__PURE__ */ C.jsx("p", { children: "Select a table to edit its fields. Drag a green connector to another table to add a relationship." }),
              /* @__PURE__ */ C.jsxs("small", { children: [
                "PK · Primary key",
                /* @__PURE__ */ C.jsx("br", {}),
                "FK · Foreign key",
                /* @__PURE__ */ C.jsx("br", {}),
                "0..* · Zero or many"
              ] })
            ] }),
            lt && /* @__PURE__ */ C.jsxs("div", { className: "erd-details", children: [
              /* @__PURE__ */ C.jsx("h4", { children: "Edit relationship" }),
              /* @__PURE__ */ C.jsxs("label", { children: [
                "Label",
                /* @__PURE__ */ C.jsx(
                  "input",
                  {
                    maxLength: 200,
                    "aria-label": "Relationship label",
                    value: lt.label,
                    onChange: (R) => ct(lt.id, { label: R.target.value })
                  }
                )
              ] }),
              ["source", "target"].map((R) => /* @__PURE__ */ C.jsxs("div", { children: [
                /* @__PURE__ */ C.jsx("strong", { children: R === "source" ? s.entities.find((nt) => nt.id === lt.source)?.name : s.entities.find((nt) => nt.id === lt.target)?.name }),
                /* @__PURE__ */ C.jsxs("label", { children: [
                  "Cardinality",
                  /* @__PURE__ */ C.jsxs(
                    "select",
                    {
                      "aria-label": `${R} cardinality`,
                      value: lt[`${R}_cardinality`],
                      onChange: (nt) => ct(lt.id, {
                        [`${R}_cardinality`]: nt.target.value
                      }),
                      children: [
                        /* @__PURE__ */ C.jsx("option", { value: "one", children: "One" }),
                        /* @__PURE__ */ C.jsx("option", { value: "many", children: "Many" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ C.jsxs("label", { children: [
                  /* @__PURE__ */ C.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: lt[`${R}_optional`],
                      onChange: (nt) => ct(lt.id, {
                        [`${R}_optional`]: nt.target.checked
                      })
                    }
                  ),
                  " ",
                  "Optional"
                ] })
              ] }, R)),
              /* @__PURE__ */ C.jsx(
                "button",
                {
                  type: "button",
                  className: "erd-danger",
                  onClick: () => {
                    U({
                      ...Y.current,
                      relationships: Y.current.relationships.filter(
                        (R) => R.id !== lt.id
                      )
                    }), p(null);
                  },
                  children: "Delete relationship"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ C.jsxs("div", { className: "erd-canvas", children: [
            !s.entities.length && /* @__PURE__ */ C.jsxs("div", { className: "erd-empty", children: [
              /* @__PURE__ */ C.jsx("span", { children: "▦" }),
              /* @__PURE__ */ C.jsx("h3", { children: "Give your data a structure" }),
              /* @__PURE__ */ C.jsxs("p", { children: [
                "Add your first ",
                r === "conceptual_erd" ? "entity" : "table",
                ", define its fields,",
                /* @__PURE__ */ C.jsx("br", {}),
                "then connect the relationships."
              ] }),
              /* @__PURE__ */ C.jsxs("button", { type: "button", onClick: D, children: [
                "+ Create your first",
                " ",
                r === "conceptual_erd" ? "entity" : "table"
              ] })
            ] }),
            /* @__PURE__ */ C.jsxs(
              B3,
              {
                onInit: b,
                onPaneClick: () => {
                  g(null), p(null);
                },
                minZoom: 0.1,
                maxZoom: 1.8,
                snapToGrid: !0,
                snapGrid: [20, 20],
                nodes: v,
                edges: z,
                nodeTypes: pT,
                edgeTypes: xT,
                onNodesChange: et,
                onEdgesChange: ut,
                onDelete: ({ nodes: R, edges: nt }) => U(
                  bv(
                    Y.current,
                    R.map((_) => _.id),
                    nt.map((_) => _.id)
                  )
                ),
                onConnect: L,
                onNodeClick: (R, nt) => {
                  g(nt.id), p(null);
                },
                onEdgeClick: (R, nt) => {
                  p(nt.id), g(null);
                },
                onNodeDragStop: (R, nt, _) => {
                  const F = new Map(
                    _.map((st) => [st.id, st.position])
                  );
                  F.set(nt.id, nt.position), U({
                    ...Y.current,
                    entities: Y.current.entities.map(
                      (st) => F.has(st.id) ? { ...st, position: F.get(st.id) } : st
                    )
                  });
                },
                fitView: !0,
                fitViewOptions: { padding: 0.25 },
                children: [
                  /* @__PURE__ */ C.jsx(G3, { gap: 20, size: 1, color: "#c9d6dc" }),
                  /* @__PURE__ */ C.jsx(F3, {}),
                  /* @__PURE__ */ C.jsx(
                    fT,
                    {
                      pannable: !0,
                      zoomable: !0,
                      nodeColor: (R) => R.data.entity.role === "fact" ? "#b59ee8" : "#85bcb5"
                    }
                  ),
                  /* @__PURE__ */ C.jsx("svg", { children: /* @__PURE__ */ C.jsxs("defs", { children: [
                    /* @__PURE__ */ C.jsx(
                      "marker",
                      {
                        id: "erd-crowfoot",
                        markerWidth: "12",
                        markerHeight: "12",
                        refX: "11",
                        refY: "6",
                        orient: "auto",
                        children: /* @__PURE__ */ C.jsx(
                          "path",
                          {
                            d: "M1 1 L11 6 L1 11 M1 6 L11 6",
                            stroke: "#607889",
                            fill: "none"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ C.jsx(
                      "marker",
                      {
                        id: "erd-crowfoot-start",
                        markerWidth: "12",
                        markerHeight: "12",
                        refX: "1",
                        refY: "6",
                        orient: "auto-start-reverse",
                        children: /* @__PURE__ */ C.jsx(
                          "path",
                          {
                            d: "M11 1 L1 6 L11 11 M11 6 L1 6",
                            stroke: "#607889",
                            fill: "none"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ C.jsx(
                      "marker",
                      {
                        id: "erd-one",
                        markerWidth: "8",
                        markerHeight: "12",
                        refX: "7",
                        refY: "6",
                        orient: "auto",
                        children: /* @__PURE__ */ C.jsx("path", { d: "M6 1 L6 11", stroke: "#607889", fill: "none" })
                      }
                    ),
                    /* @__PURE__ */ C.jsx(
                      "marker",
                      {
                        id: "erd-one-start",
                        markerWidth: "8",
                        markerHeight: "12",
                        refX: "1",
                        refY: "6",
                        orient: "auto-start-reverse",
                        children: /* @__PURE__ */ C.jsx("path", { d: "M2 1 L2 11", stroke: "#607889", fill: "none" })
                      }
                    )
                  ] }) })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "erd-status", children: [
          /* @__PURE__ */ C.jsxs("span", { children: [
            /* @__PURE__ */ C.jsx("i", {}),
            " ",
            s.entities.length,
            " tables / entities ·",
            " ",
            s.relationships.length,
            " relationships"
          ] }),
          /* @__PURE__ */ C.jsx("span", { children: "Drag to move · Connect from the handles · Scroll to zoom" })
        ] }),
        /* @__PURE__ */ C.jsx("datalist", { id: `erd-types-${i}`, children: [
          "INTEGER",
          "BIGINT",
          "VARCHAR",
          "BOOLEAN",
          "DATE",
          "TIMESTAMP",
          "DECIMAL(12,2)",
          "UUID"
        ].map((R) => /* @__PURE__ */ C.jsx("option", { value: R }, R)) })
      ]
    }
  );
}
const Vr = /* @__PURE__ */ new WeakMap(), _T = ({
  data: l,
  parentElement: i,
  setStateValue: r
}) => {
  const c = i.querySelector(".erd-root");
  if (!c) throw new Error("ERD mount element missing");
  let s = Vr.get(i);
  return s || (s = eb.createRoot(c), Vr.set(i, s)), s.render(
    /* @__PURE__ */ C.jsx(
      ET,
      {
        ...l,
        onSave: (f) => r("diagram", f)
      }
    )
  ), () => {
    Vr.get(i)?.unmount(), Vr.delete(i);
  };
};
export {
  _T as default
};
