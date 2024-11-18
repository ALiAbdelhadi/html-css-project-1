/*! jQuery UI - v1.10.1 - 2013-02-18
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function (e, t) {
  function i(t, n) {
    var r,
      i,
      o,
      u = t.nodeName.toLowerCase();
    return "area" === u
      ? ((r = t.parentNode),
        (i = r.name),
        !t.href || !i || r.nodeName.toLowerCase() !== "map"
          ? !1
          : ((o = e("img[usemap=#" + i + "]")[0]), !!o && s(o)))
      : (/input|select|textarea|button|object/.test(u)
          ? !t.disabled
          : "a" === u
          ? t.href || n
          : n) && s(t);
  }
  function s(t) {
    return (
      e.expr.filters.visible(t) &&
      !e(t)
        .parents()
        .addBack()
        .filter(function () {
          return e.css(this, "visibility") === "hidden";
        }).length
    );
  }
  var n = 0,
    r = /^ui-id-\d+$/;
  e.ui = e.ui || {};
  if (e.ui.version) return;
  e.extend(e.ui, {
    version: "1.10.1",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    },
  }),
    e.fn.extend({
      _focus: e.fn.focus,
      focus: function (t, n) {
        return typeof t == "number"
          ? this.each(function () {
              var r = this;
              setTimeout(function () {
                e(r).focus(), n && n.call(r);
              }, t);
            })
          : this._focus.apply(this, arguments);
      },
      scrollParent: function () {
        var t;
        return (
          (e.ui.ie && /(static|relative)/.test(this.css("position"))) ||
          /absolute/.test(this.css("position"))
            ? (t = this.parents()
                .filter(function () {
                  return (
                    /(relative|absolute|fixed)/.test(e.css(this, "position")) &&
                    /(auto|scroll)/.test(
                      e.css(this, "overflow") +
                        e.css(this, "overflow-y") +
                        e.css(this, "overflow-x")
                    )
                  );
                })
                .eq(0))
            : (t = this.parents()
                .filter(function () {
                  return /(auto|scroll)/.test(
                    e.css(this, "overflow") +
                      e.css(this, "overflow-y") +
                      e.css(this, "overflow-x")
                  );
                })
                .eq(0)),
          /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        );
      },
      zIndex: function (n) {
        if (n !== t) return this.css("zIndex", n);
        if (this.length) {
          var r = e(this[0]),
            i,
            s;
          while (r.length && r[0] !== document) {
            i = r.css("position");
            if (i === "absolute" || i === "relative" || i === "fixed") {
              s = parseInt(r.css("zIndex"), 10);
              if (!isNaN(s) && s !== 0) return s;
            }
            r = r.parent();
          }
        }
        return 0;
      },
      uniqueId: function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++n);
        });
      },
      removeUniqueId: function () {
        return this.each(function () {
          r.test(this.id) && e(this).removeAttr("id");
        });
      },
    }),
    e.extend(e.expr[":"], {
      data: e.expr.createPseudo
        ? e.expr.createPseudo(function (t) {
            return function (n) {
              return !!e.data(n, t);
            };
          })
        : function (t, n, r) {
            return !!e.data(t, r[3]);
          },
      focusable: function (t) {
        return i(t, !isNaN(e.attr(t, "tabindex")));
      },
      tabbable: function (t) {
        var n = e.attr(t, "tabindex"),
          r = isNaN(n);
        return (r || n >= 0) && i(t, !r);
      },
    }),
    e("<a>").outerWidth(1).jquery ||
      e.each(["Width", "Height"], function (n, r) {
        function u(t, n, r, s) {
          return (
            e.each(i, function () {
              (n -= parseFloat(e.css(t, "padding" + this)) || 0),
                r &&
                  (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                s && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
            }),
            n
          );
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
          s = r.toLowerCase(),
          o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight,
          };
        (e.fn["inner" + r] = function (n) {
          return n === t
            ? o["inner" + r].call(this)
            : this.each(function () {
                e(this).css(s, u(this, n) + "px");
              });
        }),
          (e.fn["outer" + r] = function (t, n) {
            return typeof t != "number"
              ? o["outer" + r].call(this, t)
              : this.each(function () {
                  e(this).css(s, u(this, t, !0, n) + "px");
                });
          });
      }),
    e.fn.addBack ||
      (e.fn.addBack = function (e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      }),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
      (e.fn.removeData = (function (t) {
        return function (n) {
          return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this);
        };
      })(e.fn.removeData)),
    (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    (e.support.selectstart = "onselectstart" in document.createElement("div")),
    e.fn.extend({
      disableSelection: function () {
        return this.bind(
          (e.support.selectstart ? "selectstart" : "mousedown") +
            ".ui-disableSelection",
          function (e) {
            e.preventDefault();
          }
        );
      },
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
    }),
    e.extend(e.ui, {
      plugin: {
        add: function (t, n, r) {
          var i,
            s = e.ui[t].prototype;
          for (i in r)
            (s.plugins[i] = s.plugins[i] || []), s.plugins[i].push([n, r[i]]);
        },
        call: function (e, t, n) {
          var r,
            i = e.plugins[t];
          if (
            !i ||
            !e.element[0].parentNode ||
            e.element[0].parentNode.nodeType === 11
          )
            return;
          for (r = 0; r < i.length; r++)
            e.options[i[r][0]] && i[r][1].apply(e.element, n);
        },
      },
      hasScroll: function (t, n) {
        if (e(t).css("overflow") === "hidden") return !1;
        var r = n && n === "left" ? "scrollLeft" : "scrollTop",
          i = !1;
        return t[r] > 0 ? !0 : ((t[r] = 1), (i = t[r] > 0), (t[r] = 0), i);
      },
    });
})(jQuery);
(function (e, t) {
  var n = 0,
    r = Array.prototype.slice,
    i = e.cleanData;
  (e.cleanData = function (t) {
    for (var n = 0, r; (r = t[n]) != null; n++)
      try {
        e(r).triggerHandler("remove");
      } catch (s) {}
    i(t);
  }),
    (e.widget = function (t, n, r) {
      var i,
        s,
        o,
        u,
        a = {},
        f = t.split(".")[0];
      (t = t.split(".")[1]),
        (i = f + "-" + t),
        r || ((r = n), (n = e.Widget)),
        (e.expr[":"][i.toLowerCase()] = function (t) {
          return !!e.data(t, i);
        }),
        (e[f] = e[f] || {}),
        (s = e[f][t]),
        (o = e[f][t] =
          function (e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t);
          }),
        e.extend(o, s, {
          version: r.version,
          _proto: e.extend({}, r),
          _childConstructors: [],
        }),
        (u = new n()),
        (u.options = e.widget.extend({}, u.options)),
        e.each(r, function (t, r) {
          if (!e.isFunction(r)) {
            a[t] = r;
            return;
          }
          a[t] = (function () {
            var e = function () {
                return n.prototype[t].apply(this, arguments);
              },
              i = function (e) {
                return n.prototype[t].apply(this, e);
              };
            return function () {
              var t = this._super,
                n = this._superApply,
                s;
              return (
                (this._super = e),
                (this._superApply = i),
                (s = r.apply(this, arguments)),
                (this._super = t),
                (this._superApply = n),
                s
              );
            };
          })();
        }),
        (o.prototype = e.widget.extend(
          u,
          { widgetEventPrefix: s ? u.widgetEventPrefix : t },
          a,
          { constructor: o, namespace: f, widgetName: t, widgetFullName: i }
        )),
        s
          ? (e.each(s._childConstructors, function (t, n) {
              var r = n.prototype;
              e.widget(r.namespace + "." + r.widgetName, o, n._proto);
            }),
            delete s._childConstructors)
          : n._childConstructors.push(o),
        e.widget.bridge(t, o);
    }),
    (e.widget.extend = function (n) {
      var i = r.call(arguments, 1),
        s = 0,
        o = i.length,
        u,
        a;
      for (; s < o; s++)
        for (u in i[s])
          (a = i[s][u]),
            i[s].hasOwnProperty(u) &&
              a !== t &&
              (e.isPlainObject(a)
                ? (n[u] = e.isPlainObject(n[u])
                    ? e.widget.extend({}, n[u], a)
                    : e.widget.extend({}, a))
                : (n[u] = a));
      return n;
    }),
    (e.widget.bridge = function (n, i) {
      var s = i.prototype.widgetFullName || n;
      e.fn[n] = function (o) {
        var u = typeof o == "string",
          a = r.call(arguments, 1),
          f = this;
        return (
          (o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o),
          u
            ? this.each(function () {
                var r,
                  i = e.data(this, s);
                if (!i)
                  return e.error(
                    "cannot call methods on " +
                      n +
                      " prior to initialization; " +
                      "attempted to call method '" +
                      o +
                      "'"
                  );
                if (!e.isFunction(i[o]) || o.charAt(0) === "_")
                  return e.error(
                    "no such method '" + o + "' for " + n + " widget instance"
                  );
                r = i[o].apply(i, a);
                if (r !== i && r !== t)
                  return (f = r && r.jquery ? f.pushStack(r.get()) : r), !1;
              })
            : this.each(function () {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this));
              }),
          f
        );
      };
    }),
    (e.Widget = function () {}),
    (e.Widget._childConstructors = []),
    (e.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { disabled: !1, create: null },
      _createWidget: function (t, r) {
        (r = e(r || this.defaultElement || this)[0]),
          (this.element = e(r)),
          (this.uuid = n++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.options = e.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          (this.bindings = e()),
          (this.hoverable = e()),
          (this.focusable = e()),
          r !== this &&
            (e.data(r, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (e) {
                e.target === r && this.destroy();
              },
            }),
            (this.document = e(r.style ? r.ownerDocument : r.document || r)),
            (this.window = e(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: e.noop,
      _getCreateEventData: e.noop,
      _create: e.noop,
      _init: e.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetName)
            .removeData(this.widgetFullName)
            .removeData(e.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(
              this.widgetFullName + "-disabled " + "ui-state-disabled"
            ),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: e.noop,
      widget: function () {
        return this.element;
      },
      option: function (n, r) {
        var i = n,
          s,
          o,
          u;
        if (arguments.length === 0) return e.widget.extend({}, this.options);
        if (typeof n == "string") {
          (i = {}), (s = n.split(".")), (n = s.shift());
          if (s.length) {
            o = i[n] = e.widget.extend({}, this.options[n]);
            for (u = 0; u < s.length - 1; u++)
              (o[s[u]] = o[s[u]] || {}), (o = o[s[u]]);
            n = s.pop();
            if (r === t) return o[n] === t ? null : o[n];
            o[n] = r;
          } else {
            if (r === t) return this.options[n] === t ? null : this.options[n];
            i[n] = r;
          }
        }
        return this._setOptions(i), this;
      },
      _setOptions: function (e) {
        var t;
        for (t in e) this._setOption(t, e[t]);
        return this;
      },
      _setOption: function (e, t) {
        return (
          (this.options[e] = t),
          e === "disabled" &&
            (this.widget()
              .toggleClass(
                this.widgetFullName + "-disabled ui-state-disabled",
                !!t
              )
              .attr("aria-disabled", t),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
          this
        );
      },
      enable: function () {
        return this._setOption("disabled", !1);
      },
      disable: function () {
        return this._setOption("disabled", !0);
      },
      _on: function (t, n, r) {
        var i,
          s = this;
        typeof t != "boolean" && ((r = n), (n = t), (t = !1)),
          r
            ? ((n = i = e(n)), (this.bindings = this.bindings.add(n)))
            : ((r = n), (n = this.element), (i = this.widget())),
          e.each(r, function (r, o) {
            function u() {
              if (
                !t &&
                (s.options.disabled === !0 ||
                  e(this).hasClass("ui-state-disabled"))
              )
                return;
              return (typeof o == "string" ? s[o] : o).apply(s, arguments);
            }
            typeof o != "string" &&
              (u.guid = o.guid = o.guid || u.guid || e.guid++);
            var a = r.match(/^(\w+)\s*(.*)$/),
              f = a[1] + s.eventNamespace,
              l = a[2];
            l ? i.delegate(l, f, u) : n.bind(f, u);
          });
      },
      _off: function (e, t) {
        (t =
          (t || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          e.unbind(t).undelegate(t);
      },
      _delay: function (e, t) {
        function n() {
          return (typeof e == "string" ? r[e] : e).apply(r, arguments);
        }
        var r = this;
        return setTimeout(n, t || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              e(t.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (t) {
              e(t.currentTarget).removeClass("ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              e(t.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (t) {
              e(t.currentTarget).removeClass("ui-state-focus");
            },
          });
      },
      _trigger: function (t, n, r) {
        var i,
          s,
          o = this.options[t];
        (r = r || {}),
          (n = e.Event(n)),
          (n.type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (n.target = this.element[0]),
          (s = n.originalEvent);
        if (s) for (i in s) i in n || (n[i] = s[i]);
        return (
          this.element.trigger(n, r),
          !(
            (e.isFunction(o) &&
              o.apply(this.element[0], [n].concat(r)) === !1) ||
            n.isDefaultPrevented()
          )
        );
      },
    }),
    e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, n) {
      e.Widget.prototype["_" + t] = function (r, i, s) {
        typeof i == "string" && (i = { effect: i });
        var o,
          u = i ? (i === !0 || typeof i == "number" ? n : i.effect || n) : t;
        (i = i || {}),
          typeof i == "number" && (i = { duration: i }),
          (o = !e.isEmptyObject(i)),
          (i.complete = s),
          i.delay && r.delay(i.delay),
          o && e.effects && e.effects.effect[u]
            ? r[t](i)
            : u !== t && r[u]
            ? r[u](i.duration, i.easing, s)
            : r.queue(function (n) {
                e(this)[t](), s && s.call(r[0]), n();
              });
      };
    });
})(jQuery);
(function (e, t) {
  var n = !1;
  e(document).mouseup(function () {
    n = !1;
  }),
    e.widget("ui.mouse", {
      version: "1.10.1",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var t = this;
        this.element
          .bind("mousedown." + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .bind("click." + this.widgetName, function (n) {
            if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))
              return (
                e.removeData(n.target, t.widgetName + ".preventClickEvent"),
                n.stopImmediatePropagation(),
                !1
              );
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName),
          this._mouseMoveDelegate &&
            e(document)
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (t) {
        if (n) return;
        this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
        var r = this,
          i = t.which === 1,
          s =
            typeof this.options.cancel == "string" && t.target.nodeName
              ? e(t.target).closest(this.options.cancel).length
              : !1;
        if (!i || s || !this._mouseCapture(t)) return !0;
        (this.mouseDelayMet = !this.options.delay),
          this.mouseDelayMet ||
            (this._mouseDelayTimer = setTimeout(function () {
              r.mouseDelayMet = !0;
            }, this.options.delay));
        if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
          this._mouseStarted = this._mouseStart(t) !== !1;
          if (!this._mouseStarted) return t.preventDefault(), !0;
        }
        return (
          !0 === e.data(t.target, this.widgetName + ".preventClickEvent") &&
            e.removeData(t.target, this.widgetName + ".preventClickEvent"),
          (this._mouseMoveDelegate = function (e) {
            return r._mouseMove(e);
          }),
          (this._mouseUpDelegate = function (e) {
            return r._mouseUp(e);
          }),
          e(document)
            .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
          t.preventDefault(),
          (n = !0),
          !0
        );
      },
      _mouseMove: function (t) {
        return e.ui.ie &&
          (!document.documentMode || document.documentMode < 9) &&
          !t.button
          ? this._mouseUp(t)
          : this._mouseStarted
          ? (this._mouseDrag(t), t.preventDefault())
          : (this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted =
                this._mouseStart(this._mouseDownEvent, t) !== !1),
              this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted);
      },
      _mouseUp: function (t) {
        return (
          e(document)
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            t.target === this._mouseDownEvent.target &&
              e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
          !1
        );
      },
      _mouseDistanceMet: function (e) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - e.pageX),
            Math.abs(this._mouseDownEvent.pageY - e.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    });
})(jQuery);
(function (e, t) {
  function h(e, t, n) {
    return [
      parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1),
      parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1),
    ];
  }
  function p(t, n) {
    return parseInt(e.css(t, n), 10) || 0;
  }
  function d(t) {
    var n = t[0];
    return n.nodeType === 9
      ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } }
      : e.isWindow(n)
      ? {
          width: t.width(),
          height: t.height(),
          offset: { top: t.scrollTop(), left: t.scrollLeft() },
        }
      : n.preventDefault
      ? { width: 0, height: 0, offset: { top: n.pageY, left: n.pageX } }
      : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() };
  }
  e.ui = e.ui || {};
  var n,
    r = Math.max,
    i = Math.abs,
    s = Math.round,
    o = /left|center|right/,
    u = /top|center|bottom/,
    a = /[\+\-]\d+(\.[\d]+)?%?/,
    f = /^\w+/,
    l = /%$/,
    c = e.fn.position;
  (e.position = {
    scrollbarWidth: function () {
      if (n !== t) return n;
      var r,
        i,
        s = e(
          "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
        ),
        o = s.children()[0];
      return (
        e("body").append(s),
        (r = o.offsetWidth),
        s.css("overflow", "scroll"),
        (i = o.offsetWidth),
        r === i && (i = s[0].clientWidth),
        s.remove(),
        (n = r - i)
      );
    },
    getScrollInfo: function (t) {
      var n = t.isWindow ? "" : t.element.css("overflow-x"),
        r = t.isWindow ? "" : t.element.css("overflow-y"),
        i =
          n === "scroll" ||
          (n === "auto" && t.width < t.element[0].scrollWidth),
        s =
          r === "scroll" ||
          (r === "auto" && t.height < t.element[0].scrollHeight);
      return {
        width: i ? e.position.scrollbarWidth() : 0,
        height: s ? e.position.scrollbarWidth() : 0,
      };
    },
    getWithinInfo: function (t) {
      var n = e(t || window),
        r = e.isWindow(n[0]);
      return {
        element: n,
        isWindow: r,
        offset: n.offset() || { left: 0, top: 0 },
        scrollLeft: n.scrollLeft(),
        scrollTop: n.scrollTop(),
        width: r ? n.width() : n.outerWidth(),
        height: r ? n.height() : n.outerHeight(),
      };
    },
  }),
    (e.fn.position = function (t) {
      if (!t || !t.of) return c.apply(this, arguments);
      t = e.extend({}, t);
      var n,
        l,
        v,
        m,
        g,
        y,
        b = e(t.of),
        w = e.position.getWithinInfo(t.within),
        E = e.position.getScrollInfo(w),
        S = (t.collision || "flip").split(" "),
        x = {};
      return (
        (y = d(b)),
        b[0].preventDefault && (t.at = "left top"),
        (l = y.width),
        (v = y.height),
        (m = y.offset),
        (g = e.extend({}, m)),
        e.each(["my", "at"], function () {
          var e = (t[this] || "").split(" "),
            n,
            r;
          e.length === 1 &&
            (e = o.test(e[0])
              ? e.concat(["center"])
              : u.test(e[0])
              ? ["center"].concat(e)
              : ["center", "center"]),
            (e[0] = o.test(e[0]) ? e[0] : "center"),
            (e[1] = u.test(e[1]) ? e[1] : "center"),
            (n = a.exec(e[0])),
            (r = a.exec(e[1])),
            (x[this] = [n ? n[0] : 0, r ? r[0] : 0]),
            (t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]);
        }),
        S.length === 1 && (S[1] = S[0]),
        t.at[0] === "right"
          ? (g.left += l)
          : t.at[0] === "center" && (g.left += l / 2),
        t.at[1] === "bottom"
          ? (g.top += v)
          : t.at[1] === "center" && (g.top += v / 2),
        (n = h(x.at, l, v)),
        (g.left += n[0]),
        (g.top += n[1]),
        this.each(function () {
          var o,
            u,
            a = e(this),
            f = a.outerWidth(),
            c = a.outerHeight(),
            d = p(this, "marginLeft"),
            y = p(this, "marginTop"),
            T = f + d + p(this, "marginRight") + E.width,
            N = c + y + p(this, "marginBottom") + E.height,
            C = e.extend({}, g),
            k = h(x.my, a.outerWidth(), a.outerHeight());
          t.my[0] === "right"
            ? (C.left -= f)
            : t.my[0] === "center" && (C.left -= f / 2),
            t.my[1] === "bottom"
              ? (C.top -= c)
              : t.my[1] === "center" && (C.top -= c / 2),
            (C.left += k[0]),
            (C.top += k[1]),
            e.support.offsetFractions ||
              ((C.left = s(C.left)), (C.top = s(C.top))),
            (o = { marginLeft: d, marginTop: y }),
            e.each(["left", "top"], function (r, i) {
              e.ui.position[S[r]] &&
                e.ui.position[S[r]][i](C, {
                  targetWidth: l,
                  targetHeight: v,
                  elemWidth: f,
                  elemHeight: c,
                  collisionPosition: o,
                  collisionWidth: T,
                  collisionHeight: N,
                  offset: [n[0] + k[0], n[1] + k[1]],
                  my: t.my,
                  at: t.at,
                  within: w,
                  elem: a,
                });
            }),
            t.using &&
              (u = function (e) {
                var n = m.left - C.left,
                  s = n + l - f,
                  o = m.top - C.top,
                  u = o + v - c,
                  h = {
                    target: {
                      element: b,
                      left: m.left,
                      top: m.top,
                      width: l,
                      height: v,
                    },
                    element: {
                      element: a,
                      left: C.left,
                      top: C.top,
                      width: f,
                      height: c,
                    },
                    horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                    vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle",
                  };
                l < f && i(n + s) < l && (h.horizontal = "center"),
                  v < c && i(o + u) < v && (h.vertical = "middle"),
                  r(i(n), i(s)) > r(i(o), i(u))
                    ? (h.important = "horizontal")
                    : (h.important = "vertical"),
                  t.using.call(this, e, h);
              }),
            a.offset(e.extend(C, { using: u }));
        })
      );
    }),
    (e.ui.position = {
      fit: {
        left: function (e, t) {
          var n = t.within,
            i = n.isWindow ? n.scrollLeft : n.offset.left,
            s = n.width,
            o = e.left - t.collisionPosition.marginLeft,
            u = i - o,
            a = o + t.collisionWidth - s - i,
            f;
          t.collisionWidth > s
            ? u > 0 && a <= 0
              ? ((f = e.left + u + t.collisionWidth - s - i), (e.left += u - f))
              : a > 0 && u <= 0
              ? (e.left = i)
              : u > a
              ? (e.left = i + s - t.collisionWidth)
              : (e.left = i)
            : u > 0
            ? (e.left += u)
            : a > 0
            ? (e.left -= a)
            : (e.left = r(e.left - o, e.left));
        },
        top: function (e, t) {
          var n = t.within,
            i = n.isWindow ? n.scrollTop : n.offset.top,
            s = t.within.height,
            o = e.top - t.collisionPosition.marginTop,
            u = i - o,
            a = o + t.collisionHeight - s - i,
            f;
          t.collisionHeight > s
            ? u > 0 && a <= 0
              ? ((f = e.top + u + t.collisionHeight - s - i), (e.top += u - f))
              : a > 0 && u <= 0
              ? (e.top = i)
              : u > a
              ? (e.top = i + s - t.collisionHeight)
              : (e.top = i)
            : u > 0
            ? (e.top += u)
            : a > 0
            ? (e.top -= a)
            : (e.top = r(e.top - o, e.top));
        },
      },
      flip: {
        left: function (e, t) {
          var n = t.within,
            r = n.offset.left + n.scrollLeft,
            s = n.width,
            o = n.isWindow ? n.scrollLeft : n.offset.left,
            u = e.left - t.collisionPosition.marginLeft,
            a = u - o,
            f = u + t.collisionWidth - s - o,
            l =
              t.my[0] === "left"
                ? -t.elemWidth
                : t.my[0] === "right"
                ? t.elemWidth
                : 0,
            c =
              t.at[0] === "left"
                ? t.targetWidth
                : t.at[0] === "right"
                ? -t.targetWidth
                : 0,
            h = -2 * t.offset[0],
            p,
            d;
          if (a < 0) {
            p = e.left + l + c + h + t.collisionWidth - s - r;
            if (p < 0 || p < i(a)) e.left += l + c + h;
          } else if (f > 0) {
            d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
            if (d > 0 || i(d) < f) e.left += l + c + h;
          }
        },
        top: function (e, t) {
          var n = t.within,
            r = n.offset.top + n.scrollTop,
            s = n.height,
            o = n.isWindow ? n.scrollTop : n.offset.top,
            u = e.top - t.collisionPosition.marginTop,
            a = u - o,
            f = u + t.collisionHeight - s - o,
            l = t.my[1] === "top",
            c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
            h =
              t.at[1] === "top"
                ? t.targetHeight
                : t.at[1] === "bottom"
                ? -t.targetHeight
                : 0,
            p = -2 * t.offset[1],
            d,
            v;
          a < 0
            ? ((v = e.top + c + h + p + t.collisionHeight - s - r),
              e.top + c + h + p > a &&
                (v < 0 || v < i(a)) &&
                (e.top += c + h + p))
            : f > 0 &&
              ((d = e.top - t.collisionPosition.marginTop + c + h + p - o),
              e.top + c + h + p > f &&
                (d > 0 || i(d) < f) &&
                (e.top += c + h + p));
        },
      },
      flipfit: {
        left: function () {
          e.ui.position.flip.left.apply(this, arguments),
            e.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          e.ui.position.flip.top.apply(this, arguments),
            e.ui.position.fit.top.apply(this, arguments);
        },
      },
    }),
    (function () {
      var t,
        n,
        r,
        i,
        s,
        o = document.getElementsByTagName("body")[0],
        u = document.createElement("div");
      (t = document.createElement(o ? "div" : "body")),
        (r = {
          visibility: "hidden",
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: "none",
        }),
        o &&
          e.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px",
          });
      for (s in r) t.style[s] = r[s];
      t.appendChild(u),
        (n = o || document.documentElement),
        n.insertBefore(t, n.firstChild),
        (u.style.cssText = "position: absolute; left: 10.7432222px;"),
        (i = e(u).offset().left),
        (e.support.offsetFractions = i > 10 && i < 11),
        (t.innerHTML = ""),
        n.removeChild(t);
    })();
})(jQuery);
(function (e, t) {
  e.widget("ui.draggable", e.ui.mouse, {
    version: "1.10.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null,
    },
    _create: function () {
      this.options.helper === "original" &&
        !/^(?:r|a|f)/.test(this.element.css("position")) &&
        (this.element[0].style.position = "relative"),
        this.options.addClasses && this.element.addClass("ui-draggable"),
        this.options.disabled && this.element.addClass("ui-draggable-disabled"),
        this._mouseInit();
    },
    _destroy: function () {
      this.element.removeClass(
        "ui-draggable ui-draggable-dragging ui-draggable-disabled"
      ),
        this._mouseDestroy();
    },
    _mouseCapture: function (t) {
      var n = this.options;
      return this.helper ||
        n.disabled ||
        e(t.target).closest(".ui-resizable-handle").length > 0
        ? !1
        : ((this.handle = this._getHandle(t)),
          this.handle
            ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function () {
                e(
                  "<div class='ui-draggable-iframeFix' style='background: #fff;'></div>"
                )
                  .css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3,
                  })
                  .css(e(this).offset())
                  .appendTo("body");
              }),
              !0)
            : !1);
    },
    _mouseStart: function (t) {
      var n = this.options;
      return (
        (this.helper = this._createHelper(t)),
        this.helper.addClass("ui-draggable-dragging"),
        this._cacheHelperProportions(),
        e.ui.ddmanager && (e.ui.ddmanager.current = this),
        this._cacheMargins(),
        (this.cssPosition = this.helper.css("position")),
        (this.scrollParent = this.helper.scrollParent()),
        (this.offset = this.positionAbs = this.element.offset()),
        (this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left,
        }),
        e.extend(this.offset, {
          click: {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top,
          },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
        (this.originalPosition = this.position = this._generatePosition(t)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
        n.containment && this._setContainment(),
        this._trigger("start", t) === !1
          ? (this._clear(), !1)
          : (this._cacheHelperProportions(),
            e.ui.ddmanager &&
              !n.dropBehaviour &&
              e.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0)
      );
    },
    _mouseDrag: function (t, n) {
      (this.position = this._generatePosition(t)),
        (this.positionAbs = this._convertPositionTo("absolute"));
      if (!n) {
        var r = this._uiHash();
        if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
        this.position = r.position;
      }
      if (!this.options.axis || this.options.axis !== "y")
        this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis !== "x")
        this.helper[0].style.top = this.position.top + "px";
      return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
    },
    _mouseStop: function (t) {
      var n,
        r = this,
        i = !1,
        s = !1;
      e.ui.ddmanager &&
        !this.options.dropBehaviour &&
        (s = e.ui.ddmanager.drop(this, t)),
        this.dropped && ((s = this.dropped), (this.dropped = !1)),
        (n = this.element[0]);
      while (n && (n = n.parentNode)) n === document && (i = !0);
      return !i && this.options.helper === "original"
        ? !1
        : ((this.options.revert === "invalid" && !s) ||
          (this.options.revert === "valid" && s) ||
          this.options.revert === !0 ||
          (e.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, s))
            ? e(this.helper).animate(
                this.originalPosition,
                parseInt(this.options.revertDuration, 10),
                function () {
                  r._trigger("stop", t) !== !1 && r._clear();
                }
              )
            : this._trigger("stop", t) !== !1 && this._clear(),
          !1);
    },
    _mouseUp: function (t) {
      return (
        e("div.ui-draggable-iframeFix").each(function () {
          this.parentNode.removeChild(this);
        }),
        e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
        e.ui.mouse.prototype._mouseUp.call(this, t)
      );
    },
    cancel: function () {
      return (
        this.helper.is(".ui-draggable-dragging")
          ? this._mouseUp({})
          : this._clear(),
        this
      );
    },
    _getHandle: function (t) {
      var n =
        !this.options.handle || !e(this.options.handle, this.element).length
          ? !0
          : !1;
      return (
        e(this.options.handle, this.element)
          .find("*")
          .addBack()
          .each(function () {
            this === t.target && (n = !0);
          }),
        n
      );
    },
    _createHelper: function (t) {
      var n = this.options,
        r = e.isFunction(n.helper)
          ? e(n.helper.apply(this.element[0], [t]))
          : n.helper === "clone"
          ? this.element.clone().removeAttr("id")
          : this.element;
      return (
        r.parents("body").length ||
          r.appendTo(
            n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo
          ),
        r[0] !== this.element[0] &&
          !/(fixed|absolute)/.test(r.css("position")) &&
          r.css("position", "absolute"),
        r
      );
    },
    _adjustOffsetFromHelper: function (t) {
      typeof t == "string" && (t = t.split(" ")),
        e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
        "left" in t && (this.offset.click.left = t.left + this.margins.left),
        "right" in t &&
          (this.offset.click.left =
            this.helperProportions.width - t.right + this.margins.left),
        "top" in t && (this.offset.click.top = t.top + this.margins.top),
        "bottom" in t &&
          (this.offset.click.top =
            this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      this.cssPosition === "absolute" &&
        this.scrollParent[0] !== document &&
        e.contains(this.scrollParent[0], this.offsetParent[0]) &&
        ((t.left += this.scrollParent.scrollLeft()),
        (t.top += this.scrollParent.scrollTop()));
      if (
        this.offsetParent[0] === document.body ||
        (this.offsetParent[0].tagName &&
          this.offsetParent[0].tagName.toLowerCase() === "html" &&
          e.ui.ie)
      )
        t = { top: 0, left: 0 };
      return {
        top:
          t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:
          t.left +
          (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
      };
    },
    _getRelativeOffset: function () {
      if (this.cssPosition === "relative") {
        var e = this.element.position();
        return {
          top:
            e.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            e.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      }
      return { top: 0, left: 0 };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function () {
      var t,
        n,
        r,
        i = this.options;
      i.containment === "parent" && (i.containment = this.helper[0].parentNode);
      if (i.containment === "document" || i.containment === "window")
        this.containment = [
          i.containment === "document"
            ? 0
            : e(window).scrollLeft() -
              this.offset.relative.left -
              this.offset.parent.left,
          i.containment === "document"
            ? 0
            : e(window).scrollTop() -
              this.offset.relative.top -
              this.offset.parent.top,
          (i.containment === "document" ? 0 : e(window).scrollLeft()) +
            e(i.containment === "document" ? document : window).width() -
            this.helperProportions.width -
            this.margins.left,
          (i.containment === "document" ? 0 : e(window).scrollTop()) +
            (e(i.containment === "document" ? document : window).height() ||
              document.body.parentNode.scrollHeight) -
            this.helperProportions.height -
            this.margins.top,
        ];
      if (
        !/^(document|window|parent)$/.test(i.containment) &&
        i.containment.constructor !== Array
      ) {
        (n = e(i.containment)), (r = n[0]);
        if (!r) return;
        (t = e(r).css("overflow") !== "hidden"),
          (this.containment = [
            (parseInt(e(r).css("borderLeftWidth"), 10) || 0) +
              (parseInt(e(r).css("paddingLeft"), 10) || 0),
            (parseInt(e(r).css("borderTopWidth"), 10) || 0) +
              (parseInt(e(r).css("paddingTop"), 10) || 0),
            (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) -
              (parseInt(e(r).css("borderLeftWidth"), 10) || 0) -
              (parseInt(e(r).css("paddingRight"), 10) || 0) -
              this.helperProportions.width -
              this.margins.left -
              this.margins.right,
            (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) -
              (parseInt(e(r).css("borderTopWidth"), 10) || 0) -
              (parseInt(e(r).css("paddingBottom"), 10) || 0) -
              this.helperProportions.height -
              this.margins.top -
              this.margins.bottom,
          ]),
          (this.relative_container = n);
      } else
        i.containment.constructor === Array &&
          (this.containment = i.containment);
    },
    _convertPositionTo: function (t, n) {
      n || (n = this.position);
      var r = t === "absolute" ? 1 : -1,
        i =
          this.cssPosition !== "absolute" ||
          (this.scrollParent[0] !== document &&
            !!e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        s = /(html|body)/i.test(i[0].tagName);
      return {
        top:
          n.top +
          this.offset.relative.top * r +
          this.offset.parent.top * r -
          (this.cssPosition === "fixed"
            ? -this.scrollParent.scrollTop()
            : s
            ? 0
            : i.scrollTop()) *
            r,
        left:
          n.left +
          this.offset.relative.left * r +
          this.offset.parent.left * r -
          (this.cssPosition === "fixed"
            ? -this.scrollParent.scrollLeft()
            : s
            ? 0
            : i.scrollLeft()) *
            r,
      };
    },
    _generatePosition: function (t) {
      var n,
        r,
        i,
        s,
        o = this.options,
        u =
          this.cssPosition !== "absolute" ||
          (this.scrollParent[0] !== document &&
            !!e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        a = /(html|body)/i.test(u[0].tagName),
        f = t.pageX,
        l = t.pageY;
      return (
        this.originalPosition &&
          (this.containment &&
            (this.relative_container
              ? ((r = this.relative_container.offset()),
                (n = [
                  this.containment[0] + r.left,
                  this.containment[1] + r.top,
                  this.containment[2] + r.left,
                  this.containment[3] + r.top,
                ]))
              : (n = this.containment),
            t.pageX - this.offset.click.left < n[0] &&
              (f = n[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < n[1] &&
              (l = n[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > n[2] &&
              (f = n[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > n[3] &&
              (l = n[3] + this.offset.click.top)),
          o.grid &&
            ((i = o.grid[1]
              ? this.originalPageY +
                Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1]
              : this.originalPageY),
            (l = n
              ? i - this.offset.click.top >= n[1] ||
                i - this.offset.click.top > n[3]
                ? i
                : i - this.offset.click.top >= n[1]
                ? i - o.grid[1]
                : i + o.grid[1]
              : i),
            (s = o.grid[0]
              ? this.originalPageX +
                Math.round((f - this.originalPageX) / o.grid[0]) * o.grid[0]
              : this.originalPageX),
            (f = n
              ? s - this.offset.click.left >= n[0] ||
                s - this.offset.click.left > n[2]
                ? s
                : s - this.offset.click.left >= n[0]
                ? s - o.grid[0]
                : s + o.grid[0]
              : s))),
        {
          top:
            l -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            (this.cssPosition === "fixed"
              ? -this.scrollParent.scrollTop()
              : a
              ? 0
              : u.scrollTop()),
          left:
            f -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            (this.cssPosition === "fixed"
              ? -this.scrollParent.scrollLeft()
              : a
              ? 0
              : u.scrollLeft()),
        }
      );
    },
    _clear: function () {
      this.helper.removeClass("ui-draggable-dragging"),
        this.helper[0] !== this.element[0] &&
          !this.cancelHelperRemoval &&
          this.helper.remove(),
        (this.helper = null),
        (this.cancelHelperRemoval = !1);
    },
    _trigger: function (t, n, r) {
      return (
        (r = r || this._uiHash()),
        e.ui.plugin.call(this, t, [n, r]),
        t === "drag" &&
          (this.positionAbs = this._convertPositionTo("absolute")),
        e.Widget.prototype._trigger.call(this, t, n, r)
      );
    },
    plugins: {},
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs,
      };
    },
  }),
    e.ui.plugin.add("draggable", "connectToSortable", {
      start: function (t, n) {
        var r = e(this).data("ui-draggable"),
          i = r.options,
          s = e.extend({}, n, { item: r.element });
        (r.sortables = []),
          e(i.connectToSortable).each(function () {
            var n = e.data(this, "ui-sortable");
            n &&
              !n.options.disabled &&
              (r.sortables.push({
                instance: n,
                shouldRevert: n.options.revert,
              }),
              n.refreshPositions(),
              n._trigger("activate", t, s));
          });
      },
      stop: function (t, n) {
        var r = e(this).data("ui-draggable"),
          i = e.extend({}, n, { item: r.element });
        e.each(r.sortables, function () {
          this.instance.isOver
            ? ((this.instance.isOver = 0),
              (r.cancelHelperRemoval = !0),
              (this.instance.cancelHelperRemoval = !1),
              this.shouldRevert && (this.instance.options.revert = !0),
              this.instance._mouseStop(t),
              (this.instance.options.helper = this.instance.options._helper),
              r.options.helper === "original" &&
                this.instance.currentItem.css({ top: "auto", left: "auto" }))
            : ((this.instance.cancelHelperRemoval = !1),
              this.instance._trigger("deactivate", t, i));
        });
      },
      drag: function (t, n) {
        var r = e(this).data("ui-draggable"),
          i = this;
        e.each(r.sortables, function () {
          var s = !1,
            o = this;
          (this.instance.positionAbs = r.positionAbs),
            (this.instance.helperProportions = r.helperProportions),
            (this.instance.offset.click = r.offset.click),
            this.instance._intersectsWith(this.instance.containerCache) &&
              ((s = !0),
              e.each(r.sortables, function () {
                return (
                  (this.instance.positionAbs = r.positionAbs),
                  (this.instance.helperProportions = r.helperProportions),
                  (this.instance.offset.click = r.offset.click),
                  this !== o &&
                    this.instance._intersectsWith(
                      this.instance.containerCache
                    ) &&
                    e.contains(
                      o.instance.element[0],
                      this.instance.element[0]
                    ) &&
                    (s = !1),
                  s
                );
              })),
            s
              ? (this.instance.isOver ||
                  ((this.instance.isOver = 1),
                  (this.instance.currentItem = e(i)
                    .clone()
                    .removeAttr("id")
                    .appendTo(this.instance.element)
                    .data("ui-sortable-item", !0)),
                  (this.instance.options._helper =
                    this.instance.options.helper),
                  (this.instance.options.helper = function () {
                    return n.helper[0];
                  }),
                  (t.target = this.instance.currentItem[0]),
                  this.instance._mouseCapture(t, !0),
                  this.instance._mouseStart(t, !0, !0),
                  (this.instance.offset.click.top = r.offset.click.top),
                  (this.instance.offset.click.left = r.offset.click.left),
                  (this.instance.offset.parent.left -=
                    r.offset.parent.left - this.instance.offset.parent.left),
                  (this.instance.offset.parent.top -=
                    r.offset.parent.top - this.instance.offset.parent.top),
                  r._trigger("toSortable", t),
                  (r.dropped = this.instance.element),
                  (r.currentItem = r.element),
                  (this.instance.fromOutside = r)),
                this.instance.currentItem && this.instance._mouseDrag(t))
              : this.instance.isOver &&
                ((this.instance.isOver = 0),
                (this.instance.cancelHelperRemoval = !0),
                (this.instance.options.revert = !1),
                this.instance._trigger(
                  "out",
                  t,
                  this.instance._uiHash(this.instance)
                ),
                this.instance._mouseStop(t, !0),
                (this.instance.options.helper = this.instance.options._helper),
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                r._trigger("fromSortable", t),
                (r.dropped = !1));
        });
      },
    }),
    e.ui.plugin.add("draggable", "cursor", {
      start: function () {
        var t = e("body"),
          n = e(this).data("ui-draggable").options;
        t.css("cursor") && (n._cursor = t.css("cursor")),
          t.css("cursor", n.cursor);
      },
      stop: function () {
        var t = e(this).data("ui-draggable").options;
        t._cursor && e("body").css("cursor", t._cursor);
      },
    }),
    e.ui.plugin.add("draggable", "opacity", {
      start: function (t, n) {
        var r = e(n.helper),
          i = e(this).data("ui-draggable").options;
        r.css("opacity") && (i._opacity = r.css("opacity")),
          r.css("opacity", i.opacity);
      },
      stop: function (t, n) {
        var r = e(this).data("ui-draggable").options;
        r._opacity && e(n.helper).css("opacity", r._opacity);
      },
    }),
    e.ui.plugin.add("draggable", "scroll", {
      start: function () {
        var t = e(this).data("ui-draggable");
        t.scrollParent[0] !== document &&
          t.scrollParent[0].tagName !== "HTML" &&
          (t.overflowOffset = t.scrollParent.offset());
      },
      drag: function (t) {
        var n = e(this).data("ui-draggable"),
          r = n.options,
          i = !1;
        if (
          n.scrollParent[0] !== document &&
          n.scrollParent[0].tagName !== "HTML"
        ) {
          if (!r.axis || r.axis !== "x")
            n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY <
            r.scrollSensitivity
              ? (n.scrollParent[0].scrollTop = i =
                  n.scrollParent[0].scrollTop + r.scrollSpeed)
              : t.pageY - n.overflowOffset.top < r.scrollSensitivity &&
                (n.scrollParent[0].scrollTop = i =
                  n.scrollParent[0].scrollTop - r.scrollSpeed);
          if (!r.axis || r.axis !== "y")
            n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX <
            r.scrollSensitivity
              ? (n.scrollParent[0].scrollLeft = i =
                  n.scrollParent[0].scrollLeft + r.scrollSpeed)
              : t.pageX - n.overflowOffset.left < r.scrollSensitivity &&
                (n.scrollParent[0].scrollLeft = i =
                  n.scrollParent[0].scrollLeft - r.scrollSpeed);
        } else {
          if (!r.axis || r.axis !== "x")
            t.pageY - e(document).scrollTop() < r.scrollSensitivity
              ? (i = e(document).scrollTop(
                  e(document).scrollTop() - r.scrollSpeed
                ))
              : e(window).height() - (t.pageY - e(document).scrollTop()) <
                  r.scrollSensitivity &&
                (i = e(document).scrollTop(
                  e(document).scrollTop() + r.scrollSpeed
                ));
          if (!r.axis || r.axis !== "y")
            t.pageX - e(document).scrollLeft() < r.scrollSensitivity
              ? (i = e(document).scrollLeft(
                  e(document).scrollLeft() - r.scrollSpeed
                ))
              : e(window).width() - (t.pageX - e(document).scrollLeft()) <
                  r.scrollSensitivity &&
                (i = e(document).scrollLeft(
                  e(document).scrollLeft() + r.scrollSpeed
                ));
        }
        i !== !1 &&
          e.ui.ddmanager &&
          !r.dropBehaviour &&
          e.ui.ddmanager.prepareOffsets(n, t);
      },
    }),
    e.ui.plugin.add("draggable", "snap", {
      start: function () {
        var t = e(this).data("ui-draggable"),
          n = t.options;
        (t.snapElements = []),
          e(
            n.snap.constructor !== String
              ? n.snap.items || ":data(ui-draggable)"
              : n.snap
          ).each(function () {
            var n = e(this),
              r = n.offset();
            this !== t.element[0] &&
              t.snapElements.push({
                item: this,
                width: n.outerWidth(),
                height: n.outerHeight(),
                top: r.top,
                left: r.left,
              });
          });
      },
      drag: function (t, n) {
        var r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p = e(this).data("ui-draggable"),
          d = p.options,
          v = d.snapTolerance,
          m = n.offset.left,
          g = m + p.helperProportions.width,
          y = n.offset.top,
          b = y + p.helperProportions.height;
        for (c = p.snapElements.length - 1; c >= 0; c--) {
          (u = p.snapElements[c].left),
            (a = u + p.snapElements[c].width),
            (f = p.snapElements[c].top),
            (l = f + p.snapElements[c].height);
          if (
            !(
              (u - v < m && m < a + v && f - v < y && y < l + v) ||
              (u - v < m && m < a + v && f - v < b && b < l + v) ||
              (u - v < g && g < a + v && f - v < y && y < l + v) ||
              (u - v < g && g < a + v && f - v < b && b < l + v)
            )
          ) {
            p.snapElements[c].snapping &&
              p.options.snap.release &&
              p.options.snap.release.call(
                p.element,
                t,
                e.extend(p._uiHash(), { snapItem: p.snapElements[c].item })
              ),
              (p.snapElements[c].snapping = !1);
            continue;
          }
          d.snapMode !== "inner" &&
            ((r = Math.abs(f - b) <= v),
            (i = Math.abs(l - y) <= v),
            (s = Math.abs(u - g) <= v),
            (o = Math.abs(a - m) <= v),
            r &&
              (n.position.top =
                p._convertPositionTo("relative", {
                  top: f - p.helperProportions.height,
                  left: 0,
                }).top - p.margins.top),
            i &&
              (n.position.top =
                p._convertPositionTo("relative", { top: l, left: 0 }).top -
                p.margins.top),
            s &&
              (n.position.left =
                p._convertPositionTo("relative", {
                  top: 0,
                  left: u - p.helperProportions.width,
                }).left - p.margins.left),
            o &&
              (n.position.left =
                p._convertPositionTo("relative", { top: 0, left: a }).left -
                p.margins.left)),
            (h = r || i || s || o),
            d.snapMode !== "outer" &&
              ((r = Math.abs(f - y) <= v),
              (i = Math.abs(l - b) <= v),
              (s = Math.abs(u - m) <= v),
              (o = Math.abs(a - g) <= v),
              r &&
                (n.position.top =
                  p._convertPositionTo("relative", { top: f, left: 0 }).top -
                  p.margins.top),
              i &&
                (n.position.top =
                  p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0,
                  }).top - p.margins.top),
              s &&
                (n.position.left =
                  p._convertPositionTo("relative", { top: 0, left: u }).left -
                  p.margins.left),
              o &&
                (n.position.left =
                  p._convertPositionTo("relative", {
                    top: 0,
                    left: a - p.helperProportions.width,
                  }).left - p.margins.left)),
            !p.snapElements[c].snapping &&
              (r || i || s || o || h) &&
              p.options.snap.snap &&
              p.options.snap.snap.call(
                p.element,
                t,
                e.extend(p._uiHash(), { snapItem: p.snapElements[c].item })
              ),
            (p.snapElements[c].snapping = r || i || s || o || h);
        }
      },
    }),
    e.ui.plugin.add("draggable", "stack", {
      start: function () {
        var t,
          n = this.data("ui-draggable").options,
          r = e.makeArray(e(n.stack)).sort(function (t, n) {
            return (
              (parseInt(e(t).css("zIndex"), 10) || 0) -
              (parseInt(e(n).css("zIndex"), 10) || 0)
            );
          });
        if (!r.length) return;
        (t = parseInt(e(r[0]).css("zIndex"), 10) || 0),
          e(r).each(function (n) {
            e(this).css("zIndex", t + n);
          }),
          this.css("zIndex", t + r.length);
      },
    }),
    e.ui.plugin.add("draggable", "zIndex", {
      start: function (t, n) {
        var r = e(n.helper),
          i = e(this).data("ui-draggable").options;
        r.css("zIndex") && (i._zIndex = r.css("zIndex")),
          r.css("zIndex", i.zIndex);
      },
      stop: function (t, n) {
        var r = e(this).data("ui-draggable").options;
        r._zIndex && e(n.helper).css("zIndex", r._zIndex);
      },
    });
})(jQuery);
(function (e, t) {
  function n(e, t, n) {
    return e > t && e < t + n;
  }
  e.widget("ui.droppable", {
    version: "1.10.1",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null,
    },
    _create: function () {
      var t = this.options,
        n = t.accept;
      (this.isover = !1),
        (this.isout = !0),
        (this.accept = e.isFunction(n)
          ? n
          : function (e) {
              return e.is(n);
            }),
        (this.proportions = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight,
        }),
        (e.ui.ddmanager.droppables[t.scope] =
          e.ui.ddmanager.droppables[t.scope] || []),
        e.ui.ddmanager.droppables[t.scope].push(this),
        t.addClasses && this.element.addClass("ui-droppable");
    },
    _destroy: function () {
      var t = 0,
        n = e.ui.ddmanager.droppables[this.options.scope];
      for (; t < n.length; t++) n[t] === this && n.splice(t, 1);
      this.element.removeClass("ui-droppable ui-droppable-disabled");
    },
    _setOption: function (t, n) {
      t === "accept" &&
        (this.accept = e.isFunction(n)
          ? n
          : function (e) {
              return e.is(n);
            }),
        e.Widget.prototype._setOption.apply(this, arguments);
    },
    _activate: function (t) {
      var n = e.ui.ddmanager.current;
      this.options.activeClass &&
        this.element.addClass(this.options.activeClass),
        n && this._trigger("activate", t, this.ui(n));
    },
    _deactivate: function (t) {
      var n = e.ui.ddmanager.current;
      this.options.activeClass &&
        this.element.removeClass(this.options.activeClass),
        n && this._trigger("deactivate", t, this.ui(n));
    },
    _over: function (t) {
      var n = e.ui.ddmanager.current;
      if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;
      this.accept.call(this.element[0], n.currentItem || n.element) &&
        (this.options.hoverClass &&
          this.element.addClass(this.options.hoverClass),
        this._trigger("over", t, this.ui(n)));
    },
    _out: function (t) {
      var n = e.ui.ddmanager.current;
      if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;
      this.accept.call(this.element[0], n.currentItem || n.element) &&
        (this.options.hoverClass &&
          this.element.removeClass(this.options.hoverClass),
        this._trigger("out", t, this.ui(n)));
    },
    _drop: function (t, n) {
      var r = n || e.ui.ddmanager.current,
        i = !1;
      return !r || (r.currentItem || r.element)[0] === this.element[0]
        ? !1
        : (this.element
            .find(":data(ui-droppable)")
            .not(".ui-draggable-dragging")
            .each(function () {
              var t = e.data(this, "ui-droppable");
              if (
                t.options.greedy &&
                !t.options.disabled &&
                t.options.scope === r.options.scope &&
                t.accept.call(t.element[0], r.currentItem || r.element) &&
                e.ui.intersect(
                  r,
                  e.extend(t, { offset: t.element.offset() }),
                  t.options.tolerance
                )
              )
                return (i = !0), !1;
            }),
          i
            ? !1
            : this.accept.call(this.element[0], r.currentItem || r.element)
            ? (this.options.activeClass &&
                this.element.removeClass(this.options.activeClass),
              this.options.hoverClass &&
                this.element.removeClass(this.options.hoverClass),
              this._trigger("drop", t, this.ui(r)),
              this.element)
            : !1);
    },
    ui: function (e) {
      return {
        draggable: e.currentItem || e.element,
        helper: e.helper,
        position: e.position,
        offset: e.positionAbs,
      };
    },
  }),
    (e.ui.intersect = function (e, t, r) {
      if (!t.offset) return !1;
      var i,
        s,
        o = (e.positionAbs || e.position.absolute).left,
        u = o + e.helperProportions.width,
        a = (e.positionAbs || e.position.absolute).top,
        f = a + e.helperProportions.height,
        l = t.offset.left,
        c = l + t.proportions.width,
        h = t.offset.top,
        p = h + t.proportions.height;
      switch (r) {
        case "fit":
          return l <= o && u <= c && h <= a && f <= p;
        case "intersect":
          return (
            l < o + e.helperProportions.width / 2 &&
            u - e.helperProportions.width / 2 < c &&
            h < a + e.helperProportions.height / 2 &&
            f - e.helperProportions.height / 2 < p
          );
        case "pointer":
          return (
            (i =
              (e.positionAbs || e.position.absolute).left +
              (e.clickOffset || e.offset.click).left),
            (s =
              (e.positionAbs || e.position.absolute).top +
              (e.clickOffset || e.offset.click).top),
            n(s, h, t.proportions.height) && n(i, l, t.proportions.width)
          );
        case "touch":
          return (
            ((a >= h && a <= p) || (f >= h && f <= p) || (a < h && f > p)) &&
            ((o >= l && o <= c) || (u >= l && u <= c) || (o < l && u > c))
          );
        default:
          return !1;
      }
    }),
    (e.ui.ddmanager = {
      current: null,
      droppables: { default: [] },
      prepareOffsets: function (t, n) {
        var r,
          i,
          s = e.ui.ddmanager.droppables[t.options.scope] || [],
          o = n ? n.type : null,
          u = (t.currentItem || t.element)
            .find(":data(ui-droppable)")
            .addBack();
        e: for (r = 0; r < s.length; r++) {
          if (
            s[r].options.disabled ||
            (t &&
              !s[r].accept.call(s[r].element[0], t.currentItem || t.element))
          )
            continue;
          for (i = 0; i < u.length; i++)
            if (u[i] === s[r].element[0]) {
              s[r].proportions.height = 0;
              continue e;
            }
          s[r].visible = s[r].element.css("display") !== "none";
          if (!s[r].visible) continue;
          o === "mousedown" && s[r]._activate.call(s[r], n),
            (s[r].offset = s[r].element.offset()),
            (s[r].proportions = {
              width: s[r].element[0].offsetWidth,
              height: s[r].element[0].offsetHeight,
            });
        }
      },
      drop: function (t, n) {
        var r = !1;
        return (
          e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
            if (!this.options) return;
            !this.options.disabled &&
              this.visible &&
              e.ui.intersect(t, this, this.options.tolerance) &&
              (r = this._drop.call(this, n) || r),
              !this.options.disabled &&
                this.visible &&
                this.accept.call(this.element[0], t.currentItem || t.element) &&
                ((this.isout = !0),
                (this.isover = !1),
                this._deactivate.call(this, n));
          }),
          r
        );
      },
      dragStart: function (t, n) {
        t.element.parentsUntil("body").bind("scroll.droppable", function () {
          t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n);
        });
      },
      drag: function (t, n) {
        t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n),
          e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
            if (this.options.disabled || this.greedyChild || !this.visible)
              return;
            var r,
              i,
              s,
              o = e.ui.intersect(t, this, this.options.tolerance),
              u =
                !o && this.isover
                  ? "isout"
                  : o && !this.isover
                  ? "isover"
                  : null;
            if (!u) return;
            this.options.greedy &&
              ((i = this.options.scope),
              (s = this.element
                .parents(":data(ui-droppable)")
                .filter(function () {
                  return e.data(this, "ui-droppable").options.scope === i;
                })),
              s.length &&
                ((r = e.data(s[0], "ui-droppable")),
                (r.greedyChild = u === "isover"))),
              r &&
                u === "isover" &&
                ((r.isover = !1), (r.isout = !0), r._out.call(r, n)),
              (this[u] = !0),
              (this[u === "isout" ? "isover" : "isout"] = !1),
              this[u === "isover" ? "_over" : "_out"].call(this, n),
              r &&
                u === "isout" &&
                ((r.isout = !1), (r.isover = !0), r._over.call(r, n));
          });
      },
      dragStop: function (t, n) {
        t.element.parentsUntil("body").unbind("scroll.droppable"),
          t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n);
      },
    });
})(jQuery);
(function (e, t) {
  function n(e) {
    return parseInt(e, 10) || 0;
  }
  function r(e) {
    return !isNaN(parseInt(e, 10));
  }
  e.widget("ui.resizable", e.ui.mouse, {
    version: "1.10.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null,
    },
    _create: function () {
      var t,
        n,
        r,
        i,
        s,
        o = this,
        u = this.options;
      this.element.addClass("ui-resizable"),
        e.extend(this, {
          _aspectRatio: !!u.aspectRatio,
          aspectRatio: u.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper:
            u.helper || u.ghost || u.animate
              ? u.helper || "ui-resizable-helper"
              : null,
        }),
        this.element[0].nodeName.match(
          /canvas|textarea|input|select|button|img/i
        ) &&
          (this.element.wrap(
            e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
              position: this.element.css("position"),
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              top: this.element.css("top"),
              left: this.element.css("left"),
            })
          ),
          (this.element = this.element
            .parent()
            .data("ui-resizable", this.element.data("ui-resizable"))),
          (this.elementIsWrapper = !0),
          this.element.css({
            marginLeft: this.originalElement.css("marginLeft"),
            marginTop: this.originalElement.css("marginTop"),
            marginRight: this.originalElement.css("marginRight"),
            marginBottom: this.originalElement.css("marginBottom"),
          }),
          this.originalElement.css({
            marginLeft: 0,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
          }),
          (this.originalResizeStyle = this.originalElement.css("resize")),
          this.originalElement.css("resize", "none"),
          this._proportionallyResizeElements.push(
            this.originalElement.css({
              position: "static",
              zoom: 1,
              display: "block",
            })
          ),
          this.originalElement.css({
            margin: this.originalElement.css("margin"),
          }),
          this._proportionallyResize()),
        (this.handles =
          u.handles ||
          (e(".ui-resizable-handle", this.element).length
            ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw",
              }
            : "e,s,se"));
      if (this.handles.constructor === String) {
        this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"),
          (t = this.handles.split(",")),
          (this.handles = {});
        for (n = 0; n < t.length; n++)
          (r = e.trim(t[n])),
            (s = "ui-resizable-" + r),
            (i = e("<div class='ui-resizable-handle " + s + "'></div>")),
            i.css({ zIndex: u.zIndex }),
            "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
            (this.handles[r] = ".ui-resizable-" + r),
            this.element.append(i);
      }
      (this._renderAxis = function (t) {
        var n, r, i, s;
        t = t || this.element;
        for (n in this.handles) {
          this.handles[n].constructor === String &&
            (this.handles[n] = e(this.handles[n], this.element).show()),
            this.elementIsWrapper &&
              this.originalElement[0].nodeName.match(
                /textarea|input|select|button/i
              ) &&
              ((r = e(this.handles[n], this.element)),
              (s = /sw|ne|nw|se|n|s/.test(n)
                ? r.outerHeight()
                : r.outerWidth()),
              (i = [
                "padding",
                /ne|nw|n/.test(n)
                  ? "Top"
                  : /se|sw|s/.test(n)
                  ? "Bottom"
                  : /^e$/.test(n)
                  ? "Right"
                  : "Left",
              ].join("")),
              t.css(i, s),
              this._proportionallyResize());
          if (!e(this.handles[n]).length) continue;
        }
      }),
        this._renderAxis(this.element),
        (this._handles = e(
          ".ui-resizable-handle",
          this.element
        ).disableSelection()),
        this._handles.mouseover(function () {
          o.resizing ||
            (this.className &&
              (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
            (o.axis = i && i[1] ? i[1] : "se"));
        }),
        u.autoHide &&
          (this._handles.hide(),
          e(this.element)
            .addClass("ui-resizable-autohide")
            .mouseenter(function () {
              if (u.disabled) return;
              e(this).removeClass("ui-resizable-autohide"), o._handles.show();
            })
            .mouseleave(function () {
              if (u.disabled) return;
              o.resizing ||
                (e(this).addClass("ui-resizable-autohide"), o._handles.hide());
            })),
        this._mouseInit();
    },
    _destroy: function () {
      this._mouseDestroy();
      var t,
        n = function (t) {
          e(t)
            .removeClass(
              "ui-resizable ui-resizable-disabled ui-resizable-resizing"
            )
            .removeData("resizable")
            .removeData("ui-resizable")
            .unbind(".resizable")
            .find(".ui-resizable-handle")
            .remove();
        };
      return (
        this.elementIsWrapper &&
          (n(this.element),
          (t = this.element),
          this.originalElement
            .css({
              position: t.css("position"),
              width: t.outerWidth(),
              height: t.outerHeight(),
              top: t.css("top"),
              left: t.css("left"),
            })
            .insertAfter(t),
          t.remove()),
        this.originalElement.css("resize", this.originalResizeStyle),
        n(this.originalElement),
        this
      );
    },
    _mouseCapture: function (t) {
      var n,
        r,
        i = !1;
      for (n in this.handles) {
        r = e(this.handles[n])[0];
        if (r === t.target || e.contains(r, t.target)) i = !0;
      }
      return !this.options.disabled && i;
    },
    _mouseStart: function (t) {
      var r,
        i,
        s,
        o = this.options,
        u = this.element.position(),
        a = this.element;
      return (
        (this.resizing = !0),
        /absolute/.test(a.css("position"))
          ? a.css({
              position: "absolute",
              top: a.css("top"),
              left: a.css("left"),
            })
          : a.is(".ui-draggable") &&
            a.css({ position: "absolute", top: u.top, left: u.left }),
        this._renderProxy(),
        (r = n(this.helper.css("left"))),
        (i = n(this.helper.css("top"))),
        o.containment &&
          ((r += e(o.containment).scrollLeft() || 0),
          (i += e(o.containment).scrollTop() || 0)),
        (this.offset = this.helper.offset()),
        (this.position = { left: r, top: i }),
        (this.size = this._helper
          ? { width: a.outerWidth(), height: a.outerHeight() }
          : { width: a.width(), height: a.height() }),
        (this.originalSize = this._helper
          ? { width: a.outerWidth(), height: a.outerHeight() }
          : { width: a.width(), height: a.height() }),
        (this.originalPosition = { left: r, top: i }),
        (this.sizeDiff = {
          width: a.outerWidth() - a.width(),
          height: a.outerHeight() - a.height(),
        }),
        (this.originalMousePosition = { left: t.pageX, top: t.pageY }),
        (this.aspectRatio =
          typeof o.aspectRatio == "number"
            ? o.aspectRatio
            : this.originalSize.width / this.originalSize.height || 1),
        (s = e(".ui-resizable-" + this.axis).css("cursor")),
        e("body").css("cursor", s === "auto" ? this.axis + "-resize" : s),
        a.addClass("ui-resizable-resizing"),
        this._propagate("start", t),
        !0
      );
    },
    _mouseDrag: function (t) {
      var n,
        r = this.helper,
        i = {},
        s = this.originalMousePosition,
        o = this.axis,
        u = this.position.top,
        a = this.position.left,
        f = this.size.width,
        l = this.size.height,
        c = t.pageX - s.left || 0,
        h = t.pageY - s.top || 0,
        p = this._change[o];
      if (!p) return !1;
      (n = p.apply(this, [t, c, h])), this._updateVirtualBoundaries(t.shiftKey);
      if (this._aspectRatio || t.shiftKey) n = this._updateRatio(n, t);
      return (
        (n = this._respectSize(n, t)),
        this._updateCache(n),
        this._propagate("resize", t),
        this.position.top !== u && (i.top = this.position.top + "px"),
        this.position.left !== a && (i.left = this.position.left + "px"),
        this.size.width !== f && (i.width = this.size.width + "px"),
        this.size.height !== l && (i.height = this.size.height + "px"),
        r.css(i),
        !this._helper &&
          this._proportionallyResizeElements.length &&
          this._proportionallyResize(),
        e.isEmptyObject(i) || this._trigger("resize", t, this.ui()),
        !1
      );
    },
    _mouseStop: function (t) {
      this.resizing = !1;
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f = this.options,
        l = this;
      return (
        this._helper &&
          ((n = this._proportionallyResizeElements),
          (r = n.length && /textarea/i.test(n[0].nodeName)),
          (i = r && e.ui.hasScroll(n[0], "left") ? 0 : l.sizeDiff.height),
          (s = r ? 0 : l.sizeDiff.width),
          (o = { width: l.helper.width() - s, height: l.helper.height() - i }),
          (u =
            parseInt(l.element.css("left"), 10) +
              (l.position.left - l.originalPosition.left) || null),
          (a =
            parseInt(l.element.css("top"), 10) +
              (l.position.top - l.originalPosition.top) || null),
          f.animate || this.element.css(e.extend(o, { top: a, left: u })),
          l.helper.height(l.size.height),
          l.helper.width(l.size.width),
          this._helper && !f.animate && this._proportionallyResize()),
        e("body").css("cursor", "auto"),
        this.element.removeClass("ui-resizable-resizing"),
        this._propagate("stop", t),
        this._helper && this.helper.remove(),
        !1
      );
    },
    _updateVirtualBoundaries: function (e) {
      var t,
        n,
        i,
        s,
        o,
        u = this.options;
      o = {
        minWidth: r(u.minWidth) ? u.minWidth : 0,
        maxWidth: r(u.maxWidth) ? u.maxWidth : Infinity,
        minHeight: r(u.minHeight) ? u.minHeight : 0,
        maxHeight: r(u.maxHeight) ? u.maxHeight : Infinity,
      };
      if (this._aspectRatio || e)
        (t = o.minHeight * this.aspectRatio),
          (i = o.minWidth / this.aspectRatio),
          (n = o.maxHeight * this.aspectRatio),
          (s = o.maxWidth / this.aspectRatio),
          t > o.minWidth && (o.minWidth = t),
          i > o.minHeight && (o.minHeight = i),
          n < o.maxWidth && (o.maxWidth = n),
          s < o.maxHeight && (o.maxHeight = s);
      this._vBoundaries = o;
    },
    _updateCache: function (e) {
      (this.offset = this.helper.offset()),
        r(e.left) && (this.position.left = e.left),
        r(e.top) && (this.position.top = e.top),
        r(e.height) && (this.size.height = e.height),
        r(e.width) && (this.size.width = e.width);
    },
    _updateRatio: function (e) {
      var t = this.position,
        n = this.size,
        i = this.axis;
      return (
        r(e.height)
          ? (e.width = e.height * this.aspectRatio)
          : r(e.width) && (e.height = e.width / this.aspectRatio),
        i === "sw" && ((e.left = t.left + (n.width - e.width)), (e.top = null)),
        i === "nw" &&
          ((e.top = t.top + (n.height - e.height)),
          (e.left = t.left + (n.width - e.width))),
        e
      );
    },
    _respectSize: function (e) {
      var t = this._vBoundaries,
        n = this.axis,
        i = r(e.width) && t.maxWidth && t.maxWidth < e.width,
        s = r(e.height) && t.maxHeight && t.maxHeight < e.height,
        o = r(e.width) && t.minWidth && t.minWidth > e.width,
        u = r(e.height) && t.minHeight && t.minHeight > e.height,
        a = this.originalPosition.left + this.originalSize.width,
        f = this.position.top + this.size.height,
        l = /sw|nw|w/.test(n),
        c = /nw|ne|n/.test(n);
      return (
        o && (e.width = t.minWidth),
        u && (e.height = t.minHeight),
        i && (e.width = t.maxWidth),
        s && (e.height = t.maxHeight),
        o && l && (e.left = a - t.minWidth),
        i && l && (e.left = a - t.maxWidth),
        u && c && (e.top = f - t.minHeight),
        s && c && (e.top = f - t.maxHeight),
        !e.width && !e.height && !e.left && e.top
          ? (e.top = null)
          : !e.width && !e.height && !e.top && e.left && (e.left = null),
        e
      );
    },
    _proportionallyResize: function () {
      if (!this._proportionallyResizeElements.length) return;
      var e,
        t,
        n,
        r,
        i,
        s = this.helper || this.element;
      for (e = 0; e < this._proportionallyResizeElements.length; e++) {
        i = this._proportionallyResizeElements[e];
        if (!this.borderDif) {
          (this.borderDif = []),
            (n = [
              i.css("borderTopWidth"),
              i.css("borderRightWidth"),
              i.css("borderBottomWidth"),
              i.css("borderLeftWidth"),
            ]),
            (r = [
              i.css("paddingTop"),
              i.css("paddingRight"),
              i.css("paddingBottom"),
              i.css("paddingLeft"),
            ]);
          for (t = 0; t < n.length; t++)
            this.borderDif[t] =
              (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0);
        }
        i.css({
          height: s.height() - this.borderDif[0] - this.borderDif[2] || 0,
          width: s.width() - this.borderDif[1] - this.borderDif[3] || 0,
        });
      }
    },
    _renderProxy: function () {
      var t = this.element,
        n = this.options;
      (this.elementOffset = t.offset()),
        this._helper
          ? ((this.helper =
              this.helper || e("<div style='overflow:hidden;'></div>")),
            this.helper
              .addClass(this._helper)
              .css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++n.zIndex,
              }),
            this.helper.appendTo("body").disableSelection())
          : (this.helper = this.element);
    },
    _change: {
      e: function (e, t) {
        return { width: this.originalSize.width + t };
      },
      w: function (e, t) {
        var n = this.originalSize,
          r = this.originalPosition;
        return { left: r.left + t, width: n.width - t };
      },
      n: function (e, t, n) {
        var r = this.originalSize,
          i = this.originalPosition;
        return { top: i.top + n, height: r.height - n };
      },
      s: function (e, t, n) {
        return { height: this.originalSize.height + n };
      },
      se: function (t, n, r) {
        return e.extend(
          this._change.s.apply(this, arguments),
          this._change.e.apply(this, [t, n, r])
        );
      },
      sw: function (t, n, r) {
        return e.extend(
          this._change.s.apply(this, arguments),
          this._change.w.apply(this, [t, n, r])
        );
      },
      ne: function (t, n, r) {
        return e.extend(
          this._change.n.apply(this, arguments),
          this._change.e.apply(this, [t, n, r])
        );
      },
      nw: function (t, n, r) {
        return e.extend(
          this._change.n.apply(this, arguments),
          this._change.w.apply(this, [t, n, r])
        );
      },
    },
    _propagate: function (t, n) {
      e.ui.plugin.call(this, t, [n, this.ui()]),
        t !== "resize" && this._trigger(t, n, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition,
      };
    },
  }),
    e.ui.plugin.add("resizable", "animate", {
      stop: function (t) {
        var n = e(this).data("ui-resizable"),
          r = n.options,
          i = n._proportionallyResizeElements,
          s = i.length && /textarea/i.test(i[0].nodeName),
          o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
          u = s ? 0 : n.sizeDiff.width,
          a = { width: n.size.width - u, height: n.size.height - o },
          f =
            parseInt(n.element.css("left"), 10) +
              (n.position.left - n.originalPosition.left) || null,
          l =
            parseInt(n.element.css("top"), 10) +
              (n.position.top - n.originalPosition.top) || null;
        n.element.animate(e.extend(a, l && f ? { top: l, left: f } : {}), {
          duration: r.animateDuration,
          easing: r.animateEasing,
          step: function () {
            var r = {
              width: parseInt(n.element.css("width"), 10),
              height: parseInt(n.element.css("height"), 10),
              top: parseInt(n.element.css("top"), 10),
              left: parseInt(n.element.css("left"), 10),
            };
            i && i.length && e(i[0]).css({ width: r.width, height: r.height }),
              n._updateCache(r),
              n._propagate("resize", t);
          },
        });
      },
    }),
    e.ui.plugin.add("resizable", "containment", {
      start: function () {
        var t,
          r,
          i,
          s,
          o,
          u,
          a,
          f = e(this).data("ui-resizable"),
          l = f.options,
          c = f.element,
          h = l.containment,
          p =
            h instanceof e
              ? h.get(0)
              : /parent/.test(h)
              ? c.parent().get(0)
              : h;
        if (!p) return;
        (f.containerElement = e(p)),
          /document/.test(h) || h === document
            ? ((f.containerOffset = { left: 0, top: 0 }),
              (f.containerPosition = { left: 0, top: 0 }),
              (f.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height:
                  e(document).height() || document.body.parentNode.scrollHeight,
              }))
            : ((t = e(p)),
              (r = []),
              e(["Top", "Right", "Left", "Bottom"]).each(function (e, i) {
                r[e] = n(t.css("padding" + i));
              }),
              (f.containerOffset = t.offset()),
              (f.containerPosition = t.position()),
              (f.containerSize = {
                height: t.innerHeight() - r[3],
                width: t.innerWidth() - r[1],
              }),
              (i = f.containerOffset),
              (s = f.containerSize.height),
              (o = f.containerSize.width),
              (u = e.ui.hasScroll(p, "left") ? p.scrollWidth : o),
              (a = e.ui.hasScroll(p) ? p.scrollHeight : s),
              (f.parentData = {
                element: p,
                left: i.left,
                top: i.top,
                width: u,
                height: a,
              }));
      },
      resize: function (t) {
        var n,
          r,
          i,
          s,
          o = e(this).data("ui-resizable"),
          u = o.options,
          a = o.containerOffset,
          f = o.position,
          l = o._aspectRatio || t.shiftKey,
          c = { top: 0, left: 0 },
          h = o.containerElement;
        h[0] !== document && /static/.test(h.css("position")) && (c = a),
          f.left < (o._helper ? a.left : 0) &&
            ((o.size.width =
              o.size.width +
              (o._helper
                ? o.position.left - a.left
                : o.position.left - c.left)),
            l && (o.size.height = o.size.width / o.aspectRatio),
            (o.position.left = u.helper ? a.left : 0)),
          f.top < (o._helper ? a.top : 0) &&
            ((o.size.height =
              o.size.height +
              (o._helper ? o.position.top - a.top : o.position.top)),
            l && (o.size.width = o.size.height * o.aspectRatio),
            (o.position.top = o._helper ? a.top : 0)),
          (o.offset.left = o.parentData.left + o.position.left),
          (o.offset.top = o.parentData.top + o.position.top),
          (n = Math.abs(
            (o._helper ? o.offset.left - c.left : o.offset.left - c.left) +
              o.sizeDiff.width
          )),
          (r = Math.abs(
            (o._helper ? o.offset.top - c.top : o.offset.top - a.top) +
              o.sizeDiff.height
          )),
          (i = o.containerElement.get(0) === o.element.parent().get(0)),
          (s = /relative|absolute/.test(o.containerElement.css("position"))),
          i && s && (n -= o.parentData.left),
          n + o.size.width >= o.parentData.width &&
            ((o.size.width = o.parentData.width - n),
            l && (o.size.height = o.size.width / o.aspectRatio)),
          r + o.size.height >= o.parentData.height &&
            ((o.size.height = o.parentData.height - r),
            l && (o.size.width = o.size.height * o.aspectRatio));
      },
      stop: function () {
        var t = e(this).data("ui-resizable"),
          n = t.options,
          r = t.containerOffset,
          i = t.containerPosition,
          s = t.containerElement,
          o = e(t.helper),
          u = o.offset(),
          a = o.outerWidth() - t.sizeDiff.width,
          f = o.outerHeight() - t.sizeDiff.height;
        t._helper &&
          !n.animate &&
          /relative/.test(s.css("position")) &&
          e(this).css({ left: u.left - i.left - r.left, width: a, height: f }),
          t._helper &&
            !n.animate &&
            /static/.test(s.css("position")) &&
            e(this).css({
              left: u.left - i.left - r.left,
              width: a,
              height: f,
            });
      },
    }),
    e.ui.plugin.add("resizable", "alsoResize", {
      start: function () {
        var t = e(this).data("ui-resizable"),
          n = t.options,
          r = function (t) {
            e(t).each(function () {
              var t = e(this);
              t.data("ui-resizable-alsoresize", {
                width: parseInt(t.width(), 10),
                height: parseInt(t.height(), 10),
                left: parseInt(t.css("left"), 10),
                top: parseInt(t.css("top"), 10),
              });
            });
          };
        typeof n.alsoResize == "object" && !n.alsoResize.parentNode
          ? n.alsoResize.length
            ? ((n.alsoResize = n.alsoResize[0]), r(n.alsoResize))
            : e.each(n.alsoResize, function (e) {
                r(e);
              })
          : r(n.alsoResize);
      },
      resize: function (t, n) {
        var r = e(this).data("ui-resizable"),
          i = r.options,
          s = r.originalSize,
          o = r.originalPosition,
          u = {
            height: r.size.height - s.height || 0,
            width: r.size.width - s.width || 0,
            top: r.position.top - o.top || 0,
            left: r.position.left - o.left || 0,
          },
          a = function (t, r) {
            e(t).each(function () {
              var t = e(this),
                i = e(this).data("ui-resizable-alsoresize"),
                s = {},
                o =
                  r && r.length
                    ? r
                    : t.parents(n.originalElement[0]).length
                    ? ["width", "height"]
                    : ["width", "height", "top", "left"];
              e.each(o, function (e, t) {
                var n = (i[t] || 0) + (u[t] || 0);
                n && n >= 0 && (s[t] = n || null);
              }),
                t.css(s);
            });
          };
        typeof i.alsoResize == "object" && !i.alsoResize.nodeType
          ? e.each(i.alsoResize, function (e, t) {
              a(e, t);
            })
          : a(i.alsoResize);
      },
      stop: function () {
        e(this).removeData("resizable-alsoresize");
      },
    }),
    e.ui.plugin.add("resizable", "ghost", {
      start: function () {
        var t = e(this).data("ui-resizable"),
          n = t.options,
          r = t.size;
        (t.ghost = t.originalElement.clone()),
          t.ghost
            .css({
              opacity: 0.25,
              display: "block",
              position: "relative",
              height: r.height,
              width: r.width,
              margin: 0,
              left: 0,
              top: 0,
            })
            .addClass("ui-resizable-ghost")
            .addClass(typeof n.ghost == "string" ? n.ghost : ""),
          t.ghost.appendTo(t.helper);
      },
      resize: function () {
        var t = e(this).data("ui-resizable");
        t.ghost &&
          t.ghost.css({
            position: "relative",
            height: t.size.height,
            width: t.size.width,
          });
      },
      stop: function () {
        var t = e(this).data("ui-resizable");
        t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
      },
    }),
    e.ui.plugin.add("resizable", "grid", {
      resize: function () {
        var t = e(this).data("ui-resizable"),
          n = t.options,
          r = t.size,
          i = t.originalSize,
          s = t.originalPosition,
          o = t.axis,
          u = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid,
          a = u[0] || 1,
          f = u[1] || 1,
          l = Math.round((r.width - i.width) / a) * a,
          c = Math.round((r.height - i.height) / f) * f,
          h = i.width + l,
          p = i.height + c,
          d = n.maxWidth && n.maxWidth < h,
          v = n.maxHeight && n.maxHeight < p,
          m = n.minWidth && n.minWidth > h,
          g = n.minHeight && n.minHeight > p;
        (n.grid = u),
          m && (h += a),
          g && (p += f),
          d && (h -= a),
          v && (p -= f),
          /^(se|s|e)$/.test(o)
            ? ((t.size.width = h), (t.size.height = p))
            : /^(ne)$/.test(o)
            ? ((t.size.width = h),
              (t.size.height = p),
              (t.position.top = s.top - c))
            : /^(sw)$/.test(o)
            ? ((t.size.width = h),
              (t.size.height = p),
              (t.position.left = s.left - l))
            : ((t.size.width = h),
              (t.size.height = p),
              (t.position.top = s.top - c),
              (t.position.left = s.left - l));
      },
    });
})(jQuery);
(function (e, t) {
  e.widget("ui.selectable", e.ui.mouse, {
    version: "1.10.1",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null,
    },
    _create: function () {
      var t,
        n = this;
      this.element.addClass("ui-selectable"),
        (this.dragged = !1),
        (this.refresh = function () {
          (t = e(n.options.filter, n.element[0])),
            t.addClass("ui-selectee"),
            t.each(function () {
              var t = e(this),
                n = t.offset();
              e.data(this, "selectable-item", {
                element: this,
                $element: t,
                left: n.left,
                top: n.top,
                right: n.left + t.outerWidth(),
                bottom: n.top + t.outerHeight(),
                startselected: !1,
                selected: t.hasClass("ui-selected"),
                selecting: t.hasClass("ui-selecting"),
                unselecting: t.hasClass("ui-unselecting"),
              });
            });
        }),
        this.refresh(),
        (this.selectees = t.addClass("ui-selectee")),
        this._mouseInit(),
        (this.helper = e("<div class='ui-selectable-helper'></div>"));
    },
    _destroy: function () {
      this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
        this.element.removeClass("ui-selectable ui-selectable-disabled"),
        this._mouseDestroy();
    },
    _mouseStart: function (t) {
      var n = this,
        r = this.options;
      this.opos = [t.pageX, t.pageY];
      if (this.options.disabled) return;
      (this.selectees = e(r.filter, this.element[0])),
        this._trigger("start", t),
        e(r.appendTo).append(this.helper),
        this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }),
        r.autoRefresh && this.refresh(),
        this.selectees.filter(".ui-selected").each(function () {
          var r = e.data(this, "selectable-item");
          (r.startselected = !0),
            !t.metaKey &&
              !t.ctrlKey &&
              (r.$element.removeClass("ui-selected"),
              (r.selected = !1),
              r.$element.addClass("ui-unselecting"),
              (r.unselecting = !0),
              n._trigger("unselecting", t, { unselecting: r.element }));
        }),
        e(t.target)
          .parents()
          .addBack()
          .each(function () {
            var r,
              i = e.data(this, "selectable-item");
            if (i)
              return (
                (r =
                  (!t.metaKey && !t.ctrlKey) ||
                  !i.$element.hasClass("ui-selected")),
                i.$element
                  .removeClass(r ? "ui-unselecting" : "ui-selected")
                  .addClass(r ? "ui-selecting" : "ui-unselecting"),
                (i.unselecting = !r),
                (i.selecting = r),
                (i.selected = r),
                r
                  ? n._trigger("selecting", t, { selecting: i.element })
                  : n._trigger("unselecting", t, { unselecting: i.element }),
                !1
              );
          });
    },
    _mouseDrag: function (t) {
      this.dragged = !0;
      if (this.options.disabled) return;
      var n,
        r = this,
        i = this.options,
        s = this.opos[0],
        o = this.opos[1],
        u = t.pageX,
        a = t.pageY;
      return (
        s > u && ((n = u), (u = s), (s = n)),
        o > a && ((n = a), (a = o), (o = n)),
        this.helper.css({ left: s, top: o, width: u - s, height: a - o }),
        this.selectees.each(function () {
          var n = e.data(this, "selectable-item"),
            f = !1;
          if (!n || n.element === r.element[0]) return;
          i.tolerance === "touch"
            ? (f = !(n.left > u || n.right < s || n.top > a || n.bottom < o))
            : i.tolerance === "fit" &&
              (f = n.left > s && n.right < u && n.top > o && n.bottom < a),
            f
              ? (n.selected &&
                  (n.$element.removeClass("ui-selected"), (n.selected = !1)),
                n.unselecting &&
                  (n.$element.removeClass("ui-unselecting"),
                  (n.unselecting = !1)),
                n.selecting ||
                  (n.$element.addClass("ui-selecting"),
                  (n.selecting = !0),
                  r._trigger("selecting", t, { selecting: n.element })))
              : (n.selecting &&
                  ((t.metaKey || t.ctrlKey) && n.startselected
                    ? (n.$element.removeClass("ui-selecting"),
                      (n.selecting = !1),
                      n.$element.addClass("ui-selected"),
                      (n.selected = !0))
                    : (n.$element.removeClass("ui-selecting"),
                      (n.selecting = !1),
                      n.startselected &&
                        (n.$element.addClass("ui-unselecting"),
                        (n.unselecting = !0)),
                      r._trigger("unselecting", t, {
                        unselecting: n.element,
                      }))),
                n.selected &&
                  !t.metaKey &&
                  !t.ctrlKey &&
                  !n.startselected &&
                  (n.$element.removeClass("ui-selected"),
                  (n.selected = !1),
                  n.$element.addClass("ui-unselecting"),
                  (n.unselecting = !0),
                  r._trigger("unselecting", t, { unselecting: n.element })));
        }),
        !1
      );
    },
    _mouseStop: function (t) {
      var n = this;
      return (
        (this.dragged = !1),
        e(".ui-unselecting", this.element[0]).each(function () {
          var r = e.data(this, "selectable-item");
          r.$element.removeClass("ui-unselecting"),
            (r.unselecting = !1),
            (r.startselected = !1),
            n._trigger("unselected", t, { unselected: r.element });
        }),
        e(".ui-selecting", this.element[0]).each(function () {
          var r = e.data(this, "selectable-item");
          r.$element.removeClass("ui-selecting").addClass("ui-selected"),
            (r.selecting = !1),
            (r.selected = !0),
            (r.startselected = !0),
            n._trigger("selected", t, { selected: r.element });
        }),
        this._trigger("stop", t),
        this.helper.remove(),
        !1
      );
    },
  });
})(jQuery);
(function (e, t) {
  function n(e, t, n) {
    return e > t && e < t + n;
  }
  e.widget("ui.sortable", e.ui.mouse, {
    version: "1.10.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null,
    },
    _create: function () {
      var e = this.options;
      (this.containerCache = {}),
        this.element.addClass("ui-sortable"),
        this.refresh(),
        (this.floating = this.items.length
          ? e.axis === "x" ||
            /left|right/.test(this.items[0].item.css("float")) ||
            /inline|table-cell/.test(this.items[0].item.css("display"))
          : !1),
        (this.offset = this.element.offset()),
        this._mouseInit(),
        (this.ready = !0);
    },
    _destroy: function () {
      this.element.removeClass("ui-sortable ui-sortable-disabled"),
        this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--)
        this.items[e].item.removeData(this.widgetName + "-item");
      return this;
    },
    _setOption: function (t, n) {
      t === "disabled"
        ? ((this.options[t] = n),
          this.widget().toggleClass("ui-sortable-disabled", !!n))
        : e.Widget.prototype._setOption.apply(this, arguments);
    },
    _mouseCapture: function (t, n) {
      var r = null,
        i = !1,
        s = this;
      if (this.reverting) return !1;
      if (this.options.disabled || this.options.type === "static") return !1;
      this._refreshItems(t),
        e(t.target)
          .parents()
          .each(function () {
            if (e.data(this, s.widgetName + "-item") === s)
              return (r = e(this)), !1;
          }),
        e.data(t.target, s.widgetName + "-item") === s && (r = e(t.target));
      if (!r) return !1;
      if (this.options.handle && !n) {
        e(this.options.handle, r)
          .find("*")
          .addBack()
          .each(function () {
            this === t.target && (i = !0);
          });
        if (!i) return !1;
      }
      return (this.currentItem = r), this._removeCurrentsFromItems(), !0;
    },
    _mouseStart: function (t, n, r) {
      var i,
        s = this.options;
      (this.currentContainer = this),
        this.refreshPositions(),
        (this.helper = this._createHelper(t)),
        this._cacheHelperProportions(),
        this._cacheMargins(),
        (this.scrollParent = this.helper.scrollParent()),
        (this.offset = this.currentItem.offset()),
        (this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left,
        }),
        e.extend(this.offset, {
          click: {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top,
          },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
        this.helper.css("position", "absolute"),
        (this.cssPosition = this.helper.css("position")),
        (this.originalPosition = this._generatePosition(t)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt),
        (this.domPosition = {
          prev: this.currentItem.prev()[0],
          parent: this.currentItem.parent()[0],
        }),
        this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
        this._createPlaceholder(),
        s.containment && this._setContainment(),
        s.cursor &&
          (e("body").css("cursor") &&
            (this._storedCursor = e("body").css("cursor")),
          e("body").css("cursor", s.cursor)),
        s.opacity &&
          (this.helper.css("opacity") &&
            (this._storedOpacity = this.helper.css("opacity")),
          this.helper.css("opacity", s.opacity)),
        s.zIndex &&
          (this.helper.css("zIndex") &&
            (this._storedZIndex = this.helper.css("zIndex")),
          this.helper.css("zIndex", s.zIndex)),
        this.scrollParent[0] !== document &&
          this.scrollParent[0].tagName !== "HTML" &&
          (this.overflowOffset = this.scrollParent.offset()),
        this._trigger("start", t, this._uiHash()),
        this._preserveHelperProportions || this._cacheHelperProportions();
      if (!r)
        for (i = this.containers.length - 1; i >= 0; i--)
          this.containers[i]._trigger("activate", t, this._uiHash(this));
      return (
        e.ui.ddmanager && (e.ui.ddmanager.current = this),
        e.ui.ddmanager &&
          !s.dropBehaviour &&
          e.ui.ddmanager.prepareOffsets(this, t),
        (this.dragging = !0),
        this.helper.addClass("ui-sortable-helper"),
        this._mouseDrag(t),
        !0
      );
    },
    _mouseDrag: function (t) {
      var n,
        r,
        i,
        s,
        o = this.options,
        u = !1;
      (this.position = this._generatePosition(t)),
        (this.positionAbs = this._convertPositionTo("absolute")),
        this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
        this.options.scroll &&
          (this.scrollParent[0] !== document &&
          this.scrollParent[0].tagName !== "HTML"
            ? (this.overflowOffset.top +
                this.scrollParent[0].offsetHeight -
                t.pageY <
              o.scrollSensitivity
                ? (this.scrollParent[0].scrollTop = u =
                    this.scrollParent[0].scrollTop + o.scrollSpeed)
                : t.pageY - this.overflowOffset.top < o.scrollSensitivity &&
                  (this.scrollParent[0].scrollTop = u =
                    this.scrollParent[0].scrollTop - o.scrollSpeed),
              this.overflowOffset.left +
                this.scrollParent[0].offsetWidth -
                t.pageX <
              o.scrollSensitivity
                ? (this.scrollParent[0].scrollLeft = u =
                    this.scrollParent[0].scrollLeft + o.scrollSpeed)
                : t.pageX - this.overflowOffset.left < o.scrollSensitivity &&
                  (this.scrollParent[0].scrollLeft = u =
                    this.scrollParent[0].scrollLeft - o.scrollSpeed))
            : (t.pageY - e(document).scrollTop() < o.scrollSensitivity
                ? (u = e(document).scrollTop(
                    e(document).scrollTop() - o.scrollSpeed
                  ))
                : e(window).height() - (t.pageY - e(document).scrollTop()) <
                    o.scrollSensitivity &&
                  (u = e(document).scrollTop(
                    e(document).scrollTop() + o.scrollSpeed
                  )),
              t.pageX - e(document).scrollLeft() < o.scrollSensitivity
                ? (u = e(document).scrollLeft(
                    e(document).scrollLeft() - o.scrollSpeed
                  ))
                : e(window).width() - (t.pageX - e(document).scrollLeft()) <
                    o.scrollSensitivity &&
                  (u = e(document).scrollLeft(
                    e(document).scrollLeft() + o.scrollSpeed
                  ))),
          u !== !1 &&
            e.ui.ddmanager &&
            !o.dropBehaviour &&
            e.ui.ddmanager.prepareOffsets(this, t)),
        (this.positionAbs = this._convertPositionTo("absolute"));
      if (!this.options.axis || this.options.axis !== "y")
        this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis !== "x")
        this.helper[0].style.top = this.position.top + "px";
      for (n = this.items.length - 1; n >= 0; n--) {
        (r = this.items[n]),
          (i = r.item[0]),
          (s = this._intersectsWithPointer(r));
        if (!s) continue;
        if (r.instance !== this.currentContainer) continue;
        if (
          i !== this.currentItem[0] &&
          this.placeholder[s === 1 ? "next" : "prev"]()[0] !== i &&
          !e.contains(this.placeholder[0], i) &&
          (this.options.type === "semi-dynamic"
            ? !e.contains(this.element[0], i)
            : !0)
        ) {
          this.direction = s === 1 ? "down" : "up";
          if (
            this.options.tolerance !== "pointer" &&
            !this._intersectsWithSides(r)
          )
            break;
          this._rearrange(t, r), this._trigger("change", t, this._uiHash());
          break;
        }
      }
      return (
        this._contactContainers(t),
        e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
        this._trigger("sort", t, this._uiHash()),
        (this.lastPositionAbs = this.positionAbs),
        !1
      );
    },
    _mouseStop: function (t, n) {
      if (!t) return;
      e.ui.ddmanager &&
        !this.options.dropBehaviour &&
        e.ui.ddmanager.drop(this, t);
      if (this.options.revert) {
        var r = this,
          i = this.placeholder.offset();
        (this.reverting = !0),
          e(this.helper).animate(
            {
              left:
                i.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === document.body
                  ? 0
                  : this.offsetParent[0].scrollLeft),
              top:
                i.top -
                this.offset.parent.top -
                this.margins.top +
                (this.offsetParent[0] === document.body
                  ? 0
                  : this.offsetParent[0].scrollTop),
            },
            parseInt(this.options.revert, 10) || 500,
            function () {
              r._clear(t);
            }
          );
      } else this._clear(t, n);
      return !1;
    },
    cancel: function () {
      if (this.dragging) {
        this._mouseUp({ target: null }),
          this.options.helper === "original"
            ? this.currentItem
                .css(this._storedCSS)
                .removeClass("ui-sortable-helper")
            : this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--)
          this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
            this.containers[t].containerCache.over &&
              (this.containers[t]._trigger("out", null, this._uiHash(this)),
              (this.containers[t].containerCache.over = 0));
      }
      return (
        this.placeholder &&
          (this.placeholder[0].parentNode &&
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.options.helper !== "original" &&
            this.helper &&
            this.helper[0].parentNode &&
            this.helper.remove(),
          e.extend(this, {
            helper: null,
            dragging: !1,
            reverting: !1,
            _noFinalSort: null,
          }),
          this.domPosition.prev
            ? e(this.domPosition.prev).after(this.currentItem)
            : e(this.domPosition.parent).prepend(this.currentItem)),
        this
      );
    },
    serialize: function (t) {
      var n = this._getItemsAsjQuery(t && t.connected),
        r = [];
      return (
        (t = t || {}),
        e(n).each(function () {
          var n = (e(t.item || this).attr(t.attribute || "id") || "").match(
            t.expression || /(.+)[\-=_](.+)/
          );
          n &&
            r.push(
              (t.key || n[1] + "[]") +
                "=" +
                (t.key && t.expression ? n[1] : n[2])
            );
        }),
        !r.length && t.key && r.push(t.key + "="),
        r.join("&")
      );
    },
    toArray: function (t) {
      var n = this._getItemsAsjQuery(t && t.connected),
        r = [];
      return (
        (t = t || {}),
        n.each(function () {
          r.push(e(t.item || this).attr(t.attribute || "id") || "");
        }),
        r
      );
    },
    _intersectsWith: function (e) {
      var t = this.positionAbs.left,
        n = t + this.helperProportions.width,
        r = this.positionAbs.top,
        i = r + this.helperProportions.height,
        s = e.left,
        o = s + e.width,
        u = e.top,
        a = u + e.height,
        f = this.offset.click.top,
        l = this.offset.click.left,
        c = r + f > u && r + f < a && t + l > s && t + l < o;
      return this.options.tolerance === "pointer" ||
        this.options.forcePointerForContainers ||
        (this.options.tolerance !== "pointer" &&
          this.helperProportions[this.floating ? "width" : "height"] >
            e[this.floating ? "width" : "height"])
        ? c
        : s < t + this.helperProportions.width / 2 &&
            n - this.helperProportions.width / 2 < o &&
            u < r + this.helperProportions.height / 2 &&
            i - this.helperProportions.height / 2 < a;
    },
    _intersectsWithPointer: function (e) {
      var t =
          this.options.axis === "x" ||
          n(this.positionAbs.top + this.offset.click.top, e.top, e.height),
        r =
          this.options.axis === "y" ||
          n(this.positionAbs.left + this.offset.click.left, e.left, e.width),
        i = t && r,
        s = this._getDragVerticalDirection(),
        o = this._getDragHorizontalDirection();
      return i
        ? this.floating
          ? (o && o === "right") || s === "down"
            ? 2
            : 1
          : s && (s === "down" ? 2 : 1)
        : !1;
    },
    _intersectsWithSides: function (e) {
      var t = n(
          this.positionAbs.top + this.offset.click.top,
          e.top + e.height / 2,
          e.height
        ),
        r = n(
          this.positionAbs.left + this.offset.click.left,
          e.left + e.width / 2,
          e.width
        ),
        i = this._getDragVerticalDirection(),
        s = this._getDragHorizontalDirection();
      return this.floating && s
        ? (s === "right" && r) || (s === "left" && !r)
        : i && ((i === "down" && t) || (i === "up" && !t));
    },
    _getDragVerticalDirection: function () {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return e !== 0 && (e > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function () {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return e !== 0 && (e > 0 ? "right" : "left");
    },
    refresh: function (e) {
      return this._refreshItems(e), this.refreshPositions(), this;
    },
    _connectWith: function () {
      var e = this.options;
      return e.connectWith.constructor === String
        ? [e.connectWith]
        : e.connectWith;
    },
    _getItemsAsjQuery: function (t) {
      var n,
        r,
        i,
        s,
        o = [],
        u = [],
        a = this._connectWith();
      if (a && t)
        for (n = a.length - 1; n >= 0; n--) {
          i = e(a[n]);
          for (r = i.length - 1; r >= 0; r--)
            (s = e.data(i[r], this.widgetFullName)),
              s &&
                s !== this &&
                !s.options.disabled &&
                u.push([
                  e.isFunction(s.options.items)
                    ? s.options.items.call(s.element)
                    : e(s.options.items, s.element)
                        .not(".ui-sortable-helper")
                        .not(".ui-sortable-placeholder"),
                  s,
                ]);
        }
      u.push([
        e.isFunction(this.options.items)
          ? this.options.items.call(this.element, null, {
              options: this.options,
              item: this.currentItem,
            })
          : e(this.options.items, this.element)
              .not(".ui-sortable-helper")
              .not(".ui-sortable-placeholder"),
        this,
      ]);
      for (n = u.length - 1; n >= 0; n--)
        u[n][0].each(function () {
          o.push(this);
        });
      return e(o);
    },
    _removeCurrentsFromItems: function () {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = e.grep(this.items, function (e) {
        for (var n = 0; n < t.length; n++) if (t[n] === e.item[0]) return !1;
        return !0;
      });
    },
    _refreshItems: function (t) {
      (this.items = []), (this.containers = [this]);
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l = this.items,
        c = [
          [
            e.isFunction(this.options.items)
              ? this.options.items.call(this.element[0], t, {
                  item: this.currentItem,
                })
              : e(this.options.items, this.element),
            this,
          ],
        ],
        h = this._connectWith();
      if (h && this.ready)
        for (n = h.length - 1; n >= 0; n--) {
          i = e(h[n]);
          for (r = i.length - 1; r >= 0; r--)
            (s = e.data(i[r], this.widgetFullName)),
              s &&
                s !== this &&
                !s.options.disabled &&
                (c.push([
                  e.isFunction(s.options.items)
                    ? s.options.items.call(s.element[0], t, {
                        item: this.currentItem,
                      })
                    : e(s.options.items, s.element),
                  s,
                ]),
                this.containers.push(s));
        }
      for (n = c.length - 1; n >= 0; n--) {
        (o = c[n][1]), (u = c[n][0]);
        for (r = 0, f = u.length; r < f; r++)
          (a = e(u[r])),
            a.data(this.widgetName + "-item", o),
            l.push({
              item: a,
              instance: o,
              width: 0,
              height: 0,
              left: 0,
              top: 0,
            });
      }
    },
    refreshPositions: function (t) {
      this.offsetParent &&
        this.helper &&
        (this.offset.parent = this._getParentOffset());
      var n, r, i, s;
      for (n = this.items.length - 1; n >= 0; n--) {
        r = this.items[n];
        if (
          r.instance !== this.currentContainer &&
          this.currentContainer &&
          r.item[0] !== this.currentItem[0]
        )
          continue;
        (i = this.options.toleranceElement
          ? e(this.options.toleranceElement, r.item)
          : r.item),
          t || ((r.width = i.outerWidth()), (r.height = i.outerHeight())),
          (s = i.offset()),
          (r.left = s.left),
          (r.top = s.top);
      }
      if (this.options.custom && this.options.custom.refreshContainers)
        this.options.custom.refreshContainers.call(this);
      else
        for (n = this.containers.length - 1; n >= 0; n--)
          (s = this.containers[n].element.offset()),
            (this.containers[n].containerCache.left = s.left),
            (this.containers[n].containerCache.top = s.top),
            (this.containers[n].containerCache.width =
              this.containers[n].element.outerWidth()),
            (this.containers[n].containerCache.height =
              this.containers[n].element.outerHeight());
      return this;
    },
    _createPlaceholder: function (t) {
      t = t || this;
      var n,
        r = t.options;
      if (!r.placeholder || r.placeholder.constructor === String)
        (n = r.placeholder),
          (r.placeholder = {
            element: function () {
              var r = e(document.createElement(t.currentItem[0].nodeName))
                .addClass(
                  n || t.currentItem[0].className + " ui-sortable-placeholder"
                )
                .removeClass("ui-sortable-helper")[0];
              return n || (r.style.visibility = "hidden"), r;
            },
            update: function (e, i) {
              if (n && !r.forcePlaceholderSize) return;
              i.height() ||
                i.height(
                  t.currentItem.innerHeight() -
                    parseInt(t.currentItem.css("paddingTop") || 0, 10) -
                    parseInt(t.currentItem.css("paddingBottom") || 0, 10)
                ),
                i.width() ||
                  i.width(
                    t.currentItem.innerWidth() -
                      parseInt(t.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(t.currentItem.css("paddingRight") || 0, 10)
                  );
            },
          });
      (t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem))),
        t.currentItem.after(t.placeholder),
        r.placeholder.update(t, t.placeholder);
    },
    _contactContainers: function (t) {
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c = null,
        h = null;
      for (n = this.containers.length - 1; n >= 0; n--) {
        if (e.contains(this.currentItem[0], this.containers[n].element[0]))
          continue;
        if (this._intersectsWith(this.containers[n].containerCache)) {
          if (c && e.contains(this.containers[n].element[0], c.element[0]))
            continue;
          (c = this.containers[n]), (h = n);
        } else
          this.containers[n].containerCache.over &&
            (this.containers[n]._trigger("out", t, this._uiHash(this)),
            (this.containers[n].containerCache.over = 0));
      }
      if (!c) return;
      if (this.containers.length === 1)
        this.containers[h]._trigger("over", t, this._uiHash(this)),
          (this.containers[h].containerCache.over = 1);
      else {
        (i = 1e4),
          (s = null),
          (o = this.containers[h].floating ? "left" : "top"),
          (u = this.containers[h].floating ? "width" : "height"),
          (a = this.positionAbs[o] + this.offset.click[o]);
        for (r = this.items.length - 1; r >= 0; r--) {
          if (!e.contains(this.containers[h].element[0], this.items[r].item[0]))
            continue;
          if (this.items[r].item[0] === this.currentItem[0]) continue;
          (f = this.items[r].item.offset()[o]),
            (l = !1),
            Math.abs(f - a) > Math.abs(f + this.items[r][u] - a) &&
              ((l = !0), (f += this.items[r][u])),
            Math.abs(f - a) < i &&
              ((i = Math.abs(f - a)),
              (s = this.items[r]),
              (this.direction = l ? "up" : "down"));
        }
        if (!s && !this.options.dropOnEmpty) return;
        (this.currentContainer = this.containers[h]),
          s
            ? this._rearrange(t, s, null, !0)
            : this._rearrange(t, null, this.containers[h].element, !0),
          this._trigger("change", t, this._uiHash()),
          this.containers[h]._trigger("change", t, this._uiHash(this)),
          this.options.placeholder.update(
            this.currentContainer,
            this.placeholder
          ),
          this.containers[h]._trigger("over", t, this._uiHash(this)),
          (this.containers[h].containerCache.over = 1);
      }
    },
    _createHelper: function (t) {
      var n = this.options,
        r = e.isFunction(n.helper)
          ? e(n.helper.apply(this.element[0], [t, this.currentItem]))
          : n.helper === "clone"
          ? this.currentItem.clone()
          : this.currentItem;
      return (
        r.parents("body").length ||
          e(
            n.appendTo !== "parent"
              ? n.appendTo
              : this.currentItem[0].parentNode
          )[0].appendChild(r[0]),
        r[0] === this.currentItem[0] &&
          (this._storedCSS = {
            width: this.currentItem[0].style.width,
            height: this.currentItem[0].style.height,
            position: this.currentItem.css("position"),
            top: this.currentItem.css("top"),
            left: this.currentItem.css("left"),
          }),
        (!r[0].style.width || n.forceHelperSize) &&
          r.width(this.currentItem.width()),
        (!r[0].style.height || n.forceHelperSize) &&
          r.height(this.currentItem.height()),
        r
      );
    },
    _adjustOffsetFromHelper: function (t) {
      typeof t == "string" && (t = t.split(" ")),
        e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
        "left" in t && (this.offset.click.left = t.left + this.margins.left),
        "right" in t &&
          (this.offset.click.left =
            this.helperProportions.width - t.right + this.margins.left),
        "top" in t && (this.offset.click.top = t.top + this.margins.top),
        "bottom" in t &&
          (this.offset.click.top =
            this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      this.cssPosition === "absolute" &&
        this.scrollParent[0] !== document &&
        e.contains(this.scrollParent[0], this.offsetParent[0]) &&
        ((t.left += this.scrollParent.scrollLeft()),
        (t.top += this.scrollParent.scrollTop()));
      if (
        this.offsetParent[0] === document.body ||
        (this.offsetParent[0].tagName &&
          this.offsetParent[0].tagName.toLowerCase() === "html" &&
          e.ui.ie)
      )
        t = { top: 0, left: 0 };
      return {
        top:
          t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:
          t.left +
          (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
      };
    },
    _getRelativeOffset: function () {
      if (this.cssPosition === "relative") {
        var e = this.currentItem.position();
        return {
          top:
            e.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            e.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      }
      return { top: 0, left: 0 };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function () {
      var t,
        n,
        r,
        i = this.options;
      i.containment === "parent" && (i.containment = this.helper[0].parentNode);
      if (i.containment === "document" || i.containment === "window")
        this.containment = [
          0 - this.offset.relative.left - this.offset.parent.left,
          0 - this.offset.relative.top - this.offset.parent.top,
          e(i.containment === "document" ? document : window).width() -
            this.helperProportions.width -
            this.margins.left,
          (e(i.containment === "document" ? document : window).height() ||
            document.body.parentNode.scrollHeight) -
            this.helperProportions.height -
            this.margins.top,
        ];
      /^(document|window|parent)$/.test(i.containment) ||
        ((t = e(i.containment)[0]),
        (n = e(i.containment).offset()),
        (r = e(t).css("overflow") !== "hidden"),
        (this.containment = [
          n.left +
            (parseInt(e(t).css("borderLeftWidth"), 10) || 0) +
            (parseInt(e(t).css("paddingLeft"), 10) || 0) -
            this.margins.left,
          n.top +
            (parseInt(e(t).css("borderTopWidth"), 10) || 0) +
            (parseInt(e(t).css("paddingTop"), 10) || 0) -
            this.margins.top,
          n.left +
            (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
            (parseInt(e(t).css("borderLeftWidth"), 10) || 0) -
            (parseInt(e(t).css("paddingRight"), 10) || 0) -
            this.helperProportions.width -
            this.margins.left,
          n.top +
            (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) -
            (parseInt(e(t).css("borderTopWidth"), 10) || 0) -
            (parseInt(e(t).css("paddingBottom"), 10) || 0) -
            this.helperProportions.height -
            this.margins.top,
        ]));
    },
    _convertPositionTo: function (t, n) {
      n || (n = this.position);
      var r = t === "absolute" ? 1 : -1,
        i =
          this.cssPosition !== "absolute" ||
          (this.scrollParent[0] !== document &&
            !!e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        s = /(html|body)/i.test(i[0].tagName);
      return {
        top:
          n.top +
          this.offset.relative.top * r +
          this.offset.parent.top * r -
          (this.cssPosition === "fixed"
            ? -this.scrollParent.scrollTop()
            : s
            ? 0
            : i.scrollTop()) *
            r,
        left:
          n.left +
          this.offset.relative.left * r +
          this.offset.parent.left * r -
          (this.cssPosition === "fixed"
            ? -this.scrollParent.scrollLeft()
            : s
            ? 0
            : i.scrollLeft()) *
            r,
      };
    },
    _generatePosition: function (t) {
      var n,
        r,
        i = this.options,
        s = t.pageX,
        o = t.pageY,
        u =
          this.cssPosition !== "absolute" ||
          (this.scrollParent[0] !== document &&
            !!e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        a = /(html|body)/i.test(u[0].tagName);
      return (
        this.cssPosition === "relative" &&
          (this.scrollParent[0] === document ||
            this.scrollParent[0] === this.offsetParent[0]) &&
          (this.offset.relative = this._getRelativeOffset()),
        this.originalPosition &&
          (this.containment &&
            (t.pageX - this.offset.click.left < this.containment[0] &&
              (s = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] &&
              (o = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] &&
              (s = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] &&
              (o = this.containment[3] + this.offset.click.top)),
          i.grid &&
            ((n =
              this.originalPageY +
              Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1]),
            (o = this.containment
              ? n - this.offset.click.top >= this.containment[1] &&
                n - this.offset.click.top <= this.containment[3]
                ? n
                : n - this.offset.click.top >= this.containment[1]
                ? n - i.grid[1]
                : n + i.grid[1]
              : n),
            (r =
              this.originalPageX +
              Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0]),
            (s = this.containment
              ? r - this.offset.click.left >= this.containment[0] &&
                r - this.offset.click.left <= this.containment[2]
                ? r
                : r - this.offset.click.left >= this.containment[0]
                ? r - i.grid[0]
                : r + i.grid[0]
              : r))),
        {
          top:
            o -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            (this.cssPosition === "fixed"
              ? -this.scrollParent.scrollTop()
              : a
              ? 0
              : u.scrollTop()),
          left:
            s -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            (this.cssPosition === "fixed"
              ? -this.scrollParent.scrollLeft()
              : a
              ? 0
              : u.scrollLeft()),
        }
      );
    },
    _rearrange: function (e, t, n, r) {
      n
        ? n[0].appendChild(this.placeholder[0])
        : t.item[0].parentNode.insertBefore(
            this.placeholder[0],
            this.direction === "down" ? t.item[0] : t.item[0].nextSibling
          ),
        (this.counter = this.counter ? ++this.counter : 1);
      var i = this.counter;
      this._delay(function () {
        i === this.counter && this.refreshPositions(!r);
      });
    },
    _clear: function (t, n) {
      this.reverting = !1;
      var r,
        i = [];
      !this._noFinalSort &&
        this.currentItem.parent().length &&
        this.placeholder.before(this.currentItem),
        (this._noFinalSort = null);
      if (this.helper[0] === this.currentItem[0]) {
        for (r in this._storedCSS)
          if (this._storedCSS[r] === "auto" || this._storedCSS[r] === "static")
            this._storedCSS[r] = "";
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();
      this.fromOutside &&
        !n &&
        i.push(function (e) {
          this._trigger("receive", e, this._uiHash(this.fromOutside));
        }),
        (this.fromOutside ||
          this.domPosition.prev !==
            this.currentItem.prev().not(".ui-sortable-helper")[0] ||
          this.domPosition.parent !== this.currentItem.parent()[0]) &&
          !n &&
          i.push(function (e) {
            this._trigger("update", e, this._uiHash());
          }),
        this !== this.currentContainer &&
          (n ||
            (i.push(function (e) {
              this._trigger("remove", e, this._uiHash());
            }),
            i.push(
              function (e) {
                return function (t) {
                  e._trigger("receive", t, this._uiHash(this));
                };
              }.call(this, this.currentContainer)
            ),
            i.push(
              function (e) {
                return function (t) {
                  e._trigger("update", t, this._uiHash(this));
                };
              }.call(this, this.currentContainer)
            )));
      for (r = this.containers.length - 1; r >= 0; r--)
        n ||
          i.push(
            function (e) {
              return function (t) {
                e._trigger("deactivate", t, this._uiHash(this));
              };
            }.call(this, this.containers[r])
          ),
          this.containers[r].containerCache.over &&
            (i.push(
              function (e) {
                return function (t) {
                  e._trigger("out", t, this._uiHash(this));
                };
              }.call(this, this.containers[r])
            ),
            (this.containers[r].containerCache.over = 0));
      this._storedCursor && e("body").css("cursor", this._storedCursor),
        this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
        this._storedZIndex &&
          this.helper.css(
            "zIndex",
            this._storedZIndex === "auto" ? "" : this._storedZIndex
          ),
        (this.dragging = !1);
      if (this.cancelHelperRemoval) {
        if (!n) {
          this._trigger("beforeStop", t, this._uiHash());
          for (r = 0; r < i.length; r++) i[r].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return (this.fromOutside = !1), !1;
      }
      n || this._trigger("beforeStop", t, this._uiHash()),
        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
        this.helper[0] !== this.currentItem[0] && this.helper.remove(),
        (this.helper = null);
      if (!n) {
        for (r = 0; r < i.length; r++) i[r].call(this, t);
        this._trigger("stop", t, this._uiHash());
      }
      return (this.fromOutside = !1), !0;
    },
    _trigger: function () {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 &&
        this.cancel();
    },
    _uiHash: function (t) {
      var n = t || this;
      return {
        helper: n.helper,
        placeholder: n.placeholder || e([]),
        position: n.position,
        originalPosition: n.originalPosition,
        offset: n.positionAbs,
        item: n.currentItem,
        sender: t ? t.element : null,
      };
    },
  });
})(jQuery);
(function (e, t) {
  var n = 0,
    r = {},
    i = {};
  (r.height =
    r.paddingTop =
    r.paddingBottom =
    r.borderTopWidth =
    r.borderBottomWidth =
      "hide"),
    (i.height =
      i.paddingTop =
      i.paddingBottom =
      i.borderTopWidth =
      i.borderBottomWidth =
        "show"),
    e.widget("ui.accordion", {
      version: "1.10.1",
      options: {
        active: 0,
        animate: {},
        collapsible: !1,
        event: "click",
        header: "> li > :first-child,> :not(li):even",
        heightStyle: "auto",
        icons: {
          activeHeader: "ui-icon-triangle-1-s",
          header: "ui-icon-triangle-1-e",
        },
        activate: null,
        beforeActivate: null,
      },
      _create: function () {
        var t = this.options;
        (this.prevShow = this.prevHide = e()),
          this.element
            .addClass("ui-accordion ui-widget ui-helper-reset")
            .attr("role", "tablist"),
          !t.collapsible &&
            (t.active === !1 || t.active == null) &&
            (t.active = 0),
          this._processPanels(),
          t.active < 0 && (t.active += this.headers.length),
          this._refresh();
      },
      _getCreateEventData: function () {
        return {
          header: this.active,
          panel: this.active.length ? this.active.next() : e(),
          content: this.active.length ? this.active.next() : e(),
        };
      },
      _createIcons: function () {
        var t = this.options.icons;
        t &&
          (e("<span>")
            .addClass("ui-accordion-header-icon ui-icon " + t.header)
            .prependTo(this.headers),
          this.active
            .children(".ui-accordion-header-icon")
            .removeClass(t.header)
            .addClass(t.activeHeader),
          this.headers.addClass("ui-accordion-icons"));
      },
      _destroyIcons: function () {
        this.headers
          .removeClass("ui-accordion-icons")
          .children(".ui-accordion-header-icon")
          .remove();
      },
      _destroy: function () {
        var e;
        this.element
          .removeClass("ui-accordion ui-widget ui-helper-reset")
          .removeAttr("role"),
          this.headers
            .removeClass(
              "ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top"
            )
            .removeAttr("role")
            .removeAttr("aria-selected")
            .removeAttr("aria-controls")
            .removeAttr("tabIndex")
            .each(function () {
              /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }),
          this._destroyIcons(),
          (e = this.headers
            .next()
            .css("display", "")
            .removeAttr("role")
            .removeAttr("aria-expanded")
            .removeAttr("aria-hidden")
            .removeAttr("aria-labelledby")
            .removeClass(
              "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled"
            )
            .each(function () {
              /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            })),
          this.options.heightStyle !== "content" && e.css("height", "");
      },
      _setOption: function (e, t) {
        if (e === "active") {
          this._activate(t);
          return;
        }
        e === "event" &&
          (this.options.event && this._off(this.headers, this.options.event),
          this._setupEvents(t)),
          this._super(e, t),
          e === "collapsible" &&
            !t &&
            this.options.active === !1 &&
            this._activate(0),
          e === "icons" && (this._destroyIcons(), t && this._createIcons()),
          e === "disabled" &&
            this.headers
              .add(this.headers.next())
              .toggleClass("ui-state-disabled", !!t);
      },
      _keydown: function (t) {
        if (t.altKey || t.ctrlKey) return;
        var n = e.ui.keyCode,
          r = this.headers.length,
          i = this.headers.index(t.target),
          s = !1;
        switch (t.keyCode) {
          case n.RIGHT:
          case n.DOWN:
            s = this.headers[(i + 1) % r];
            break;
          case n.LEFT:
          case n.UP:
            s = this.headers[(i - 1 + r) % r];
            break;
          case n.SPACE:
          case n.ENTER:
            this._eventHandler(t);
            break;
          case n.HOME:
            s = this.headers[0];
            break;
          case n.END:
            s = this.headers[r - 1];
        }
        s &&
          (e(t.target).attr("tabIndex", -1),
          e(s).attr("tabIndex", 0),
          s.focus(),
          t.preventDefault());
      },
      _panelKeyDown: function (t) {
        t.keyCode === e.ui.keyCode.UP &&
          t.ctrlKey &&
          e(t.currentTarget).prev().focus();
      },
      refresh: function () {
        var t = this.options;
        this._processPanels();
        if ((t.active === !1 && t.collapsible === !0) || !this.headers.length)
          (t.active = !1), (this.active = e());
        t.active === !1
          ? this._activate(0)
          : this.active.length && !e.contains(this.element[0], this.active[0])
          ? this.headers.length ===
            this.headers.find(".ui-state-disabled").length
            ? ((t.active = !1), (this.active = e()))
            : this._activate(Math.max(0, t.active - 1))
          : (t.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh();
      },
      _processPanels: function () {
        (this.headers = this.element
          .find(this.options.header)
          .addClass(
            "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"
          )),
          this.headers
            .next()
            .addClass(
              "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
            )
            .filter(":not(.ui-accordion-content-active)")
            .hide();
      },
      _refresh: function () {
        var t,
          r = this.options,
          i = r.heightStyle,
          s = this.element.parent(),
          o = (this.accordionId =
            "ui-accordion-" + (this.element.attr("id") || ++n));
        (this.active = this._findActive(r.active)
          .addClass("ui-accordion-header-active ui-state-active ui-corner-top")
          .removeClass("ui-corner-all")),
          this.active.next().addClass("ui-accordion-content-active").show(),
          this.headers
            .attr("role", "tab")
            .each(function (t) {
              var n = e(this),
                r = n.attr("id"),
                i = n.next(),
                s = i.attr("id");
              r || ((r = o + "-header-" + t), n.attr("id", r)),
                s || ((s = o + "-panel-" + t), i.attr("id", s)),
                n.attr("aria-controls", s),
                i.attr("aria-labelledby", r);
            })
            .next()
            .attr("role", "tabpanel"),
          this.headers
            .not(this.active)
            .attr({ "aria-selected": "false", tabIndex: -1 })
            .next()
            .attr({ "aria-expanded": "false", "aria-hidden": "true" })
            .hide(),
          this.active.length
            ? this.active
                .attr({ "aria-selected": "true", tabIndex: 0 })
                .next()
                .attr({ "aria-expanded": "true", "aria-hidden": "false" })
            : this.headers.eq(0).attr("tabIndex", 0),
          this._createIcons(),
          this._setupEvents(r.event),
          i === "fill"
            ? ((t = s.height()),
              this.element.siblings(":visible").each(function () {
                var n = e(this),
                  r = n.css("position");
                if (r === "absolute" || r === "fixed") return;
                t -= n.outerHeight(!0);
              }),
              this.headers.each(function () {
                t -= e(this).outerHeight(!0);
              }),
              this.headers
                .next()
                .each(function () {
                  e(this).height(
                    Math.max(0, t - e(this).innerHeight() + e(this).height())
                  );
                })
                .css("overflow", "auto"))
            : i === "auto" &&
              ((t = 0),
              this.headers
                .next()
                .each(function () {
                  t = Math.max(t, e(this).css("height", "").height());
                })
                .height(t));
      },
      _activate: function (t) {
        var n = this._findActive(t)[0];
        if (n === this.active[0]) return;
        (n = n || this.active[0]),
          this._eventHandler({
            target: n,
            currentTarget: n,
            preventDefault: e.noop,
          });
      },
      _findActive: function (t) {
        return typeof t == "number" ? this.headers.eq(t) : e();
      },
      _setupEvents: function (t) {
        var n = { keydown: "_keydown" };
        t &&
          e.each(t.split(" "), function (e, t) {
            n[t] = "_eventHandler";
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, n),
          this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
          this._hoverable(this.headers),
          this._focusable(this.headers);
      },
      _eventHandler: function (t) {
        var n = this.options,
          r = this.active,
          i = e(t.currentTarget),
          s = i[0] === r[0],
          o = s && n.collapsible,
          u = o ? e() : i.next(),
          a = r.next(),
          f = {
            oldHeader: r,
            oldPanel: a,
            newHeader: o ? e() : i,
            newPanel: u,
          };
        t.preventDefault();
        if (
          (s && !n.collapsible) ||
          this._trigger("beforeActivate", t, f) === !1
        )
          return;
        (n.active = o ? !1 : this.headers.index(i)),
          (this.active = s ? e() : i),
          this._toggle(f),
          r.removeClass("ui-accordion-header-active ui-state-active"),
          n.icons &&
            r
              .children(".ui-accordion-header-icon")
              .removeClass(n.icons.activeHeader)
              .addClass(n.icons.header),
          s ||
            (i
              .removeClass("ui-corner-all")
              .addClass(
                "ui-accordion-header-active ui-state-active ui-corner-top"
              ),
            n.icons &&
              i
                .children(".ui-accordion-header-icon")
                .removeClass(n.icons.header)
                .addClass(n.icons.activeHeader),
            i.next().addClass("ui-accordion-content-active"));
      },
      _toggle: function (t) {
        var n = t.newPanel,
          r = this.prevShow.length ? this.prevShow : t.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = n),
          (this.prevHide = r),
          this.options.animate
            ? this._animate(n, r, t)
            : (r.hide(), n.show(), this._toggleComplete(t)),
          r.attr({ "aria-expanded": "false", "aria-hidden": "true" }),
          r.prev().attr("aria-selected", "false"),
          n.length && r.length
            ? r.prev().attr("tabIndex", -1)
            : n.length &&
              this.headers
                .filter(function () {
                  return e(this).attr("tabIndex") === 0;
                })
                .attr("tabIndex", -1),
          n
            .attr({ "aria-expanded": "true", "aria-hidden": "false" })
            .prev()
            .attr({ "aria-selected": "true", tabIndex: 0 });
      },
      _animate: function (e, t, n) {
        var s,
          o,
          u,
          a = this,
          f = 0,
          l = e.length && (!t.length || e.index() < t.index()),
          c = this.options.animate || {},
          h = (l && c.down) || c,
          p = function () {
            a._toggleComplete(n);
          };
        typeof h == "number" && (u = h),
          typeof h == "string" && (o = h),
          (o = o || h.easing || c.easing),
          (u = u || h.duration || c.duration);
        if (!t.length) return e.animate(i, u, o, p);
        if (!e.length) return t.animate(r, u, o, p);
        (s = e.show().outerHeight()),
          t.animate(r, {
            duration: u,
            easing: o,
            step: function (e, t) {
              t.now = Math.round(e);
            },
          }),
          e.hide().animate(i, {
            duration: u,
            easing: o,
            complete: p,
            step: function (e, n) {
              (n.now = Math.round(e)),
                n.prop !== "height"
                  ? (f += n.now)
                  : a.options.heightStyle !== "content" &&
                    ((n.now = Math.round(s - t.outerHeight() - f)), (f = 0));
            },
          });
      },
      _toggleComplete: function (e) {
        var t = e.oldPanel;
        t
          .removeClass("ui-accordion-content-active")
          .prev()
          .removeClass("ui-corner-top")
          .addClass("ui-corner-all"),
          t.length && (t.parent()[0].className = t.parent()[0].className),
          this._trigger("activate", null, e);
      },
    });
})(jQuery);
(function (e, t) {
  var n = 0;
  e.widget("ui.autocomplete", {
    version: "1.10.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: { my: "left top", at: "left bottom", collision: "none" },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null,
    },
    pending: 0,
    _create: function () {
      var t,
        n,
        r,
        i = this.element[0].nodeName.toLowerCase(),
        s = i === "textarea",
        o = i === "input";
      (this.isMultiLine = s
        ? !0
        : o
        ? !1
        : this.element.prop("isContentEditable")),
        (this.valueMethod = this.element[s || o ? "val" : "text"]),
        (this.isNewMenu = !0),
        this.element
          .addClass("ui-autocomplete-input")
          .attr("autocomplete", "off"),
        this._on(this.element, {
          keydown: function (i) {
            if (this.element.prop("readOnly")) {
              (t = !0), (r = !0), (n = !0);
              return;
            }
            (t = !1), (r = !1), (n = !1);
            var s = e.ui.keyCode;
            switch (i.keyCode) {
              case s.PAGE_UP:
                (t = !0), this._move("previousPage", i);
                break;
              case s.PAGE_DOWN:
                (t = !0), this._move("nextPage", i);
                break;
              case s.UP:
                (t = !0), this._keyEvent("previous", i);
                break;
              case s.DOWN:
                (t = !0), this._keyEvent("next", i);
                break;
              case s.ENTER:
              case s.NUMPAD_ENTER:
                this.menu.active &&
                  ((t = !0), i.preventDefault(), this.menu.select(i));
                break;
              case s.TAB:
                this.menu.active && this.menu.select(i);
                break;
              case s.ESCAPE:
                this.menu.element.is(":visible") &&
                  (this._value(this.term), this.close(i), i.preventDefault());
                break;
              default:
                (n = !0), this._searchTimeout(i);
            }
          },
          keypress: function (r) {
            if (t) {
              (t = !1), r.preventDefault();
              return;
            }
            if (n) return;
            var i = e.ui.keyCode;
            switch (r.keyCode) {
              case i.PAGE_UP:
                this._move("previousPage", r);
                break;
              case i.PAGE_DOWN:
                this._move("nextPage", r);
                break;
              case i.UP:
                this._keyEvent("previous", r);
                break;
              case i.DOWN:
                this._keyEvent("next", r);
            }
          },
          input: function (e) {
            if (r) {
              (r = !1), e.preventDefault();
              return;
            }
            this._searchTimeout(e);
          },
          focus: function () {
            (this.selectedItem = null), (this.previous = this._value());
          },
          blur: function (e) {
            if (this.cancelBlur) {
              delete this.cancelBlur;
              return;
            }
            clearTimeout(this.searching), this.close(e), this._change(e);
          },
        }),
        this._initSource(),
        (this.menu = e("<ul>")
          .addClass("ui-autocomplete ui-front")
          .appendTo(this._appendTo())
          .menu({ input: e(), role: null })
          .hide()
          .data("ui-menu")),
        this._on(this.menu.element, {
          mousedown: function (t) {
            t.preventDefault(),
              (this.cancelBlur = !0),
              this._delay(function () {
                delete this.cancelBlur;
              });
            var n = this.menu.element[0];
            e(t.target).closest(".ui-menu-item").length ||
              this._delay(function () {
                var t = this;
                this.document.one("mousedown", function (r) {
                  r.target !== t.element[0] &&
                    r.target !== n &&
                    !e.contains(n, r.target) &&
                    t.close();
                });
              });
          },
          menufocus: function (t, n) {
            if (this.isNewMenu) {
              this.isNewMenu = !1;
              if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                this.menu.blur(),
                  this.document.one("mousemove", function () {
                    e(t.target).trigger(t.originalEvent);
                  });
                return;
              }
            }
            var r = n.item.data("ui-autocomplete-item");
            !1 !== this._trigger("focus", t, { item: r })
              ? t.originalEvent &&
                /^key/.test(t.originalEvent.type) &&
                this._value(r.value)
              : this.liveRegion.text(r.value);
          },
          menuselect: function (e, t) {
            var n = t.item.data("ui-autocomplete-item"),
              r = this.previous;
            this.element[0] !== this.document[0].activeElement &&
              (this.element.focus(),
              (this.previous = r),
              this._delay(function () {
                (this.previous = r), (this.selectedItem = n);
              })),
              !1 !== this._trigger("select", e, { item: n }) &&
                this._value(n.value),
              (this.term = this._value()),
              this.close(e),
              (this.selectedItem = n);
          },
        }),
        (this.liveRegion = e("<span>", {
          role: "status",
          "aria-live": "polite",
        })
          .addClass("ui-helper-hidden-accessible")
          .insertAfter(this.element)),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _destroy: function () {
      clearTimeout(this.searching),
        this.element
          .removeClass("ui-autocomplete-input")
          .removeAttr("autocomplete"),
        this.menu.element.remove(),
        this.liveRegion.remove();
    },
    _setOption: function (e, t) {
      this._super(e, t),
        e === "source" && this._initSource(),
        e === "appendTo" && this.menu.element.appendTo(this._appendTo()),
        e === "disabled" && t && this.xhr && this.xhr.abort();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return (
        t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)),
        t || (t = this.element.closest(".ui-front")),
        t.length || (t = this.document[0].body),
        t
      );
    },
    _initSource: function () {
      var t,
        n,
        r = this;
      e.isArray(this.options.source)
        ? ((t = this.options.source),
          (this.source = function (n, r) {
            r(e.ui.autocomplete.filter(t, n.term));
          }))
        : typeof this.options.source == "string"
        ? ((n = this.options.source),
          (this.source = function (t, i) {
            r.xhr && r.xhr.abort(),
              (r.xhr = e.ajax({
                url: n,
                data: t,
                dataType: "json",
                success: function (e) {
                  i(e);
                },
                error: function () {
                  i([]);
                },
              }));
          }))
        : (this.source = this.options.source);
    },
    _searchTimeout: function (e) {
      clearTimeout(this.searching),
        (this.searching = this._delay(function () {
          this.term !== this._value() &&
            ((this.selectedItem = null), this.search(null, e));
        }, this.options.delay));
    },
    search: function (e, t) {
      (e = e != null ? e : this._value()), (this.term = this._value());
      if (e.length < this.options.minLength) return this.close(t);
      if (this._trigger("search", t) === !1) return;
      return this._search(e);
    },
    _search: function (e) {
      this.pending++,
        this.element.addClass("ui-autocomplete-loading"),
        (this.cancelSearch = !1),
        this.source({ term: e }, this._response());
    },
    _response: function () {
      var e = this,
        t = ++n;
      return function (r) {
        t === n && e.__response(r),
          e.pending--,
          e.pending || e.element.removeClass("ui-autocomplete-loading");
      };
    },
    __response: function (e) {
      e && (e = this._normalize(e)),
        this._trigger("response", null, { content: e }),
        !this.options.disabled && e && e.length && !this.cancelSearch
          ? (this._suggest(e), this._trigger("open"))
          : this._close();
    },
    close: function (e) {
      (this.cancelSearch = !0), this._close(e);
    },
    _close: function (e) {
      this.menu.element.is(":visible") &&
        (this.menu.element.hide(),
        this.menu.blur(),
        (this.isNewMenu = !0),
        this._trigger("close", e));
    },
    _change: function (e) {
      this.previous !== this._value() &&
        this._trigger("change", e, { item: this.selectedItem });
    },
    _normalize: function (t) {
      return t.length && t[0].label && t[0].value
        ? t
        : e.map(t, function (t) {
            return typeof t == "string"
              ? { label: t, value: t }
              : e.extend(
                  { label: t.label || t.value, value: t.value || t.label },
                  t
                );
          });
    },
    _suggest: function (t) {
      var n = this.menu.element.empty();
      this._renderMenu(n, t),
        this.menu.refresh(),
        n.show(),
        this._resizeMenu(),
        n.position(e.extend({ of: this.element }, this.options.position)),
        this.options.autoFocus && this.menu.next();
    },
    _resizeMenu: function () {
      var e = this.menu.element;
      e.outerWidth(
        Math.max(e.width("").outerWidth() + 1, this.element.outerWidth())
      );
    },
    _renderMenu: function (t, n) {
      var r = this;
      e.each(n, function (e, n) {
        r._renderItemData(t, n);
      });
    },
    _renderItemData: function (e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t);
    },
    _renderItem: function (t, n) {
      return e("<li>").append(e("<a>").text(n.label)).appendTo(t);
    },
    _move: function (e, t) {
      if (!this.menu.element.is(":visible")) {
        this.search(null, t);
        return;
      }
      if (
        (this.menu.isFirstItem() && /^previous/.test(e)) ||
        (this.menu.isLastItem() && /^next/.test(e))
      ) {
        this._value(this.term), this.menu.blur();
        return;
      }
      this.menu[e](t);
    },
    widget: function () {
      return this.menu.element;
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function (e, t) {
      if (!this.isMultiLine || this.menu.element.is(":visible"))
        this._move(e, t), t.preventDefault();
    },
  }),
    e.extend(e.ui.autocomplete, {
      escapeRegex: function (e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      },
      filter: function (t, n) {
        var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
        return e.grep(t, function (e) {
          return r.test(e.label || e.value || e);
        });
      },
    }),
    e.widget("ui.autocomplete", e.ui.autocomplete, {
      options: {
        messages: {
          noResults: "No search results.",
          results: function (e) {
            return (
              e +
              (e > 1 ? " results are" : " result is") +
              " available, use up and down arrow keys to navigate."
            );
          },
        },
      },
      __response: function (e) {
        var t;
        this._superApply(arguments);
        if (this.options.disabled || this.cancelSearch) return;
        e && e.length
          ? (t = this.options.messages.results(e.length))
          : (t = this.options.messages.noResults),
          this.liveRegion.text(t);
      },
    });
})(jQuery);
(function (e, t) {
  var n,
    r,
    i,
    s,
    o = "ui-button ui-widget ui-state-default ui-corner-all",
    u = "ui-state-hover ui-state-active ",
    a =
      "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    f = function () {
      var t = e(this).find(":ui-button");
      setTimeout(function () {
        t.button("refresh");
      }, 1);
    },
    l = function (t) {
      var n = t.name,
        r = t.form,
        i = e([]);
      return (
        n &&
          ((n = n.replace(/'/g, "\\'")),
          r
            ? (i = e(r).find("[name='" + n + "']"))
            : (i = e("[name='" + n + "']", t.ownerDocument).filter(function () {
                return !this.form;
              }))),
        i
      );
    };
  e.widget("ui.button", {
    version: "1.10.1",
    defaultElement: "<button>",
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: { primary: null, secondary: null },
    },
    _create: function () {
      this.element
        .closest("form")
        .unbind("reset" + this.eventNamespace)
        .bind("reset" + this.eventNamespace, f),
        typeof this.options.disabled != "boolean"
          ? (this.options.disabled = !!this.element.prop("disabled"))
          : this.element.prop("disabled", this.options.disabled),
        this._determineButtonType(),
        (this.hasTitle = !!this.buttonElement.attr("title"));
      var t = this,
        u = this.options,
        a = this.type === "checkbox" || this.type === "radio",
        c = a ? "" : "ui-state-active",
        h = "ui-state-focus";
      u.label === null &&
        (u.label =
          this.type === "input"
            ? this.buttonElement.val()
            : this.buttonElement.html()),
        this._hoverable(this.buttonElement),
        this.buttonElement
          .addClass(o)
          .attr("role", "button")
          .bind("mouseenter" + this.eventNamespace, function () {
            if (u.disabled) return;
            this === n && e(this).addClass("ui-state-active");
          })
          .bind("mouseleave" + this.eventNamespace, function () {
            if (u.disabled) return;
            e(this).removeClass(c);
          })
          .bind("click" + this.eventNamespace, function (e) {
            u.disabled && (e.preventDefault(), e.stopImmediatePropagation());
          }),
        this.element
          .bind("focus" + this.eventNamespace, function () {
            t.buttonElement.addClass(h);
          })
          .bind("blur" + this.eventNamespace, function () {
            t.buttonElement.removeClass(h);
          }),
        a &&
          (this.element.bind("change" + this.eventNamespace, function () {
            if (s) return;
            t.refresh();
          }),
          this.buttonElement
            .bind("mousedown" + this.eventNamespace, function (e) {
              if (u.disabled) return;
              (s = !1), (r = e.pageX), (i = e.pageY);
            })
            .bind("mouseup" + this.eventNamespace, function (e) {
              if (u.disabled) return;
              if (r !== e.pageX || i !== e.pageY) s = !0;
            })),
        this.type === "checkbox"
          ? this.buttonElement.bind("click" + this.eventNamespace, function () {
              if (u.disabled || s) return !1;
            })
          : this.type === "radio"
          ? this.buttonElement.bind("click" + this.eventNamespace, function () {
              if (u.disabled || s) return !1;
              e(this).addClass("ui-state-active"),
                t.buttonElement.attr("aria-pressed", "true");
              var n = t.element[0];
              l(n)
                .not(n)
                .map(function () {
                  return e(this).button("widget")[0];
                })
                .removeClass("ui-state-active")
                .attr("aria-pressed", "false");
            })
          : (this.buttonElement
              .bind("mousedown" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).addClass("ui-state-active"),
                  (n = this),
                  t.document.one("mouseup", function () {
                    n = null;
                  });
              })
              .bind("mouseup" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).removeClass("ui-state-active");
              })
              .bind("keydown" + this.eventNamespace, function (t) {
                if (u.disabled) return !1;
                (t.keyCode === e.ui.keyCode.SPACE ||
                  t.keyCode === e.ui.keyCode.ENTER) &&
                  e(this).addClass("ui-state-active");
              })
              .bind(
                "keyup" + this.eventNamespace + " blur" + this.eventNamespace,
                function () {
                  e(this).removeClass("ui-state-active");
                }
              ),
            this.buttonElement.is("a") &&
              this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click();
              })),
        this._setOption("disabled", u.disabled),
        this._resetButton();
    },
    _determineButtonType: function () {
      var e, t, n;
      this.element.is("[type=checkbox]")
        ? (this.type = "checkbox")
        : this.element.is("[type=radio]")
        ? (this.type = "radio")
        : this.element.is("input")
        ? (this.type = "input")
        : (this.type = "button"),
        this.type === "checkbox" || this.type === "radio"
          ? ((e = this.element.parents().last()),
            (t = "label[for='" + this.element.attr("id") + "']"),
            (this.buttonElement = e.find(t)),
            this.buttonElement.length ||
              ((e = e.length ? e.siblings() : this.element.siblings()),
              (this.buttonElement = e.filter(t)),
              this.buttonElement.length || (this.buttonElement = e.find(t))),
            this.element.addClass("ui-helper-hidden-accessible"),
            (n = this.element.is(":checked")),
            n && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.prop("aria-pressed", n))
          : (this.buttonElement = this.element);
    },
    widget: function () {
      return this.buttonElement;
    },
    _destroy: function () {
      this.element.removeClass("ui-helper-hidden-accessible"),
        this.buttonElement
          .removeClass(o + " " + u + " " + a)
          .removeAttr("role")
          .removeAttr("aria-pressed")
          .html(this.buttonElement.find(".ui-button-text").html()),
        this.hasTitle || this.buttonElement.removeAttr("title");
    },
    _setOption: function (e, t) {
      this._super(e, t);
      if (e === "disabled") {
        t
          ? this.element.prop("disabled", !0)
          : this.element.prop("disabled", !1);
        return;
      }
      this._resetButton();
    },
    refresh: function () {
      var t = this.element.is("input, button")
        ? this.element.is(":disabled")
        : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOption("disabled", t),
        this.type === "radio"
          ? l(this.element[0]).each(function () {
              e(this).is(":checked")
                ? e(this)
                    .button("widget")
                    .addClass("ui-state-active")
                    .attr("aria-pressed", "true")
                : e(this)
                    .button("widget")
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false");
            })
          : this.type === "checkbox" &&
            (this.element.is(":checked")
              ? this.buttonElement
                  .addClass("ui-state-active")
                  .attr("aria-pressed", "true")
              : this.buttonElement
                  .removeClass("ui-state-active")
                  .attr("aria-pressed", "false"));
    },
    _resetButton: function () {
      if (this.type === "input") {
        this.options.label && this.element.val(this.options.label);
        return;
      }
      var t = this.buttonElement.removeClass(a),
        n = e("<span></span>", this.document[0])
          .addClass("ui-button-text")
          .html(this.options.label)
          .appendTo(t.empty())
          .text(),
        r = this.options.icons,
        i = r.primary && r.secondary,
        s = [];
      r.primary || r.secondary
        ? (this.options.text &&
            s.push(
              "ui-button-text-icon" +
                (i ? "s" : r.primary ? "-primary" : "-secondary")
            ),
          r.primary &&
            t.prepend(
              "<span class='ui-button-icon-primary ui-icon " +
                r.primary +
                "'></span>"
            ),
          r.secondary &&
            t.append(
              "<span class='ui-button-icon-secondary ui-icon " +
                r.secondary +
                "'></span>"
            ),
          this.options.text ||
            (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"),
            this.hasTitle || t.attr("title", e.trim(n))))
        : s.push("ui-button-text-only"),
        t.addClass(s.join(" "));
    },
  }),
    e.widget("ui.buttonset", {
      version: "1.10.1",
      options: {
        items:
          "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)",
      },
      _create: function () {
        this.element.addClass("ui-buttonset");
      },
      _init: function () {
        this.refresh();
      },
      _setOption: function (e, t) {
        e === "disabled" && this.buttons.button("option", e, t),
          this._super(e, t);
      },
      refresh: function () {
        var t = this.element.css("direction") === "rtl";
        this.buttons = this.element
          .find(this.options.items)
          .filter(":ui-button")
          .button("refresh")
          .end()
          .not(":ui-button")
          .button()
          .end()
          .map(function () {
            return e(this).button("widget")[0];
          })
          .removeClass("ui-corner-all ui-corner-left ui-corner-right")
          .filter(":first")
          .addClass(t ? "ui-corner-right" : "ui-corner-left")
          .end()
          .filter(":last")
          .addClass(t ? "ui-corner-left" : "ui-corner-right")
          .end()
          .end();
      },
      _destroy: function () {
        this.element.removeClass("ui-buttonset"),
          this.buttons
            .map(function () {
              return e(this).button("widget")[0];
            })
            .removeClass("ui-corner-left ui-corner-right")
            .end()
            .button("destroy");
      },
    });
})(jQuery);
(function (e, t) {
  function s() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      e.extend(this._defaults, this.regional[""]),
      (this.dpDiv = o(
        e(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function o(t) {
    var n =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t
      .delegate(n, "mouseout", function () {
        e(this).removeClass("ui-state-hover"),
          this.className.indexOf("ui-datepicker-prev") !== -1 &&
            e(this).removeClass("ui-datepicker-prev-hover"),
          this.className.indexOf("ui-datepicker-next") !== -1 &&
            e(this).removeClass("ui-datepicker-next-hover");
      })
      .delegate(n, "mouseover", function () {
        e.datepicker._isDisabledDatepicker(
          i.inline ? t.parent()[0] : i.input[0]
        ) ||
          (e(this)
            .parents(".ui-datepicker-calendar")
            .find("a")
            .removeClass("ui-state-hover"),
          e(this).addClass("ui-state-hover"),
          this.className.indexOf("ui-datepicker-prev") !== -1 &&
            e(this).addClass("ui-datepicker-prev-hover"),
          this.className.indexOf("ui-datepicker-next") !== -1 &&
            e(this).addClass("ui-datepicker-next-hover"));
      });
  }
  function u(t, n) {
    e.extend(t, n);
    for (var r in n) n[r] == null && (t[r] = n[r]);
    return t;
  }
  e.extend(e.ui, { datepicker: { version: "1.10.1" } });
  var n = "datepicker",
    r = new Date().getTime(),
    i;
  e.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (e) {
      return u(this._defaults, e || {}), this;
    },
    _attachDatepicker: function (t, n) {
      var r, i, s;
      (r = t.nodeName.toLowerCase()),
        (i = r === "div" || r === "span"),
        t.id || ((this.uuid += 1), (t.id = "dp" + this.uuid)),
        (s = this._newInst(e(t), i)),
        (s.settings = e.extend({}, n || {})),
        r === "input"
          ? this._connectDatepicker(t, s)
          : i && this._inlineDatepicker(t, s);
    },
    _newInst: function (t, n) {
      var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: r,
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: n,
        dpDiv: n
          ? o(
              e(
                "<div class='" +
                  this._inlineClass +
                  " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
              )
            )
          : this.dpDiv,
      };
    },
    _connectDatepicker: function (t, r) {
      var i = e(t);
      (r.append = e([])), (r.trigger = e([]));
      if (i.hasClass(this.markerClassName)) return;
      this._attachments(i, r),
        i
          .addClass(this.markerClassName)
          .keydown(this._doKeyDown)
          .keypress(this._doKeyPress)
          .keyup(this._doKeyUp),
        this._autoSize(r),
        e.data(t, n, r),
        r.settings.disabled && this._disableDatepicker(t);
    },
    _attachments: function (t, n) {
      var r,
        i,
        s,
        o = this._get(n, "appendText"),
        u = this._get(n, "isRTL");
      n.append && n.append.remove(),
        o &&
          ((n.append = e(
            "<span class='" + this._appendClass + "'>" + o + "</span>"
          )),
          t[u ? "before" : "after"](n.append)),
        t.unbind("focus", this._showDatepicker),
        n.trigger && n.trigger.remove(),
        (r = this._get(n, "showOn")),
        (r === "focus" || r === "both") && t.focus(this._showDatepicker);
      if (r === "button" || r === "both")
        (i = this._get(n, "buttonText")),
          (s = this._get(n, "buttonImage")),
          (n.trigger = e(
            this._get(n, "buttonImageOnly")
              ? e("<img/>")
                  .addClass(this._triggerClass)
                  .attr({ src: s, alt: i, title: i })
              : e("<button type='button'></button>")
                  .addClass(this._triggerClass)
                  .html(s ? e("<img/>").attr({ src: s, alt: i, title: i }) : i)
          )),
          t[u ? "before" : "after"](n.trigger),
          n.trigger.click(function () {
            return (
              e.datepicker._datepickerShowing &&
              e.datepicker._lastInput === t[0]
                ? e.datepicker._hideDatepicker()
                : e.datepicker._datepickerShowing &&
                  e.datepicker._lastInput !== t[0]
                ? (e.datepicker._hideDatepicker(),
                  e.datepicker._showDatepicker(t[0]))
                : e.datepicker._showDatepicker(t[0]),
              !1
            );
          });
    },
    _autoSize: function (e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t,
          n,
          r,
          i,
          s = new Date(2009, 11, 20),
          o = this._get(e, "dateFormat");
        o.match(/[DM]/) &&
          ((t = function (e) {
            (n = 0), (r = 0);
            for (i = 0; i < e.length; i++)
              e[i].length > n && ((n = e[i].length), (r = i));
            return r;
          }),
          s.setMonth(
            t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))
          ),
          s.setDate(
            t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) +
              20 -
              s.getDay()
          )),
          e.input.attr("size", this._formatDate(e, s).length);
      }
    },
    _inlineDatepicker: function (t, r) {
      var i = e(t);
      if (i.hasClass(this.markerClassName)) return;
      i.addClass(this.markerClassName).append(r.dpDiv),
        e.data(t, n, r),
        this._setDate(r, this._getDefaultDate(r), !0),
        this._updateDatepicker(r),
        this._updateAlternate(r),
        r.settings.disabled && this._disableDatepicker(t),
        r.dpDiv.css("display", "block");
    },
    _dialogDatepicker: function (t, r, i, s, o) {
      var a,
        f,
        l,
        c,
        h,
        p = this._dialogInst;
      return (
        p ||
          ((this.uuid += 1),
          (a = "dp" + this.uuid),
          (this._dialogInput = e(
            "<input type='text' id='" +
              a +
              "' style='position: absolute; top: -100px; width: 0px;'/>"
          )),
          this._dialogInput.keydown(this._doKeyDown),
          e("body").append(this._dialogInput),
          (p = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (p.settings = {}),
          e.data(this._dialogInput[0], n, p)),
        u(p.settings, s || {}),
        (r = r && r.constructor === Date ? this._formatDate(p, r) : r),
        this._dialogInput.val(r),
        (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
        this._pos ||
          ((f = document.documentElement.clientWidth),
          (l = document.documentElement.clientHeight),
          (c = document.documentElement.scrollLeft || document.body.scrollLeft),
          (h = document.documentElement.scrollTop || document.body.scrollTop),
          (this._pos = [f / 2 - 100 + c, l / 2 - 150 + h])),
        this._dialogInput
          .css("left", this._pos[0] + 20 + "px")
          .css("top", this._pos[1] + "px"),
        (p.settings.onSelect = i),
        (this._inDialog = !0),
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        e.blockUI && e.blockUI(this.dpDiv),
        e.data(this._dialogInput[0], n, p),
        this
      );
    },
    _destroyDatepicker: function (t) {
      var r,
        i = e(t),
        s = e.data(t, n);
      if (!i.hasClass(this.markerClassName)) return;
      (r = t.nodeName.toLowerCase()),
        e.removeData(t, n),
        r === "input"
          ? (s.append.remove(),
            s.trigger.remove(),
            i
              .removeClass(this.markerClassName)
              .unbind("focus", this._showDatepicker)
              .unbind("keydown", this._doKeyDown)
              .unbind("keypress", this._doKeyPress)
              .unbind("keyup", this._doKeyUp))
          : (r === "div" || r === "span") &&
            i.removeClass(this.markerClassName).empty();
    },
    _enableDatepicker: function (t) {
      var r,
        i,
        s = e(t),
        o = e.data(t, n);
      if (!s.hasClass(this.markerClassName)) return;
      r = t.nodeName.toLowerCase();
      if (r === "input")
        (t.disabled = !1),
          o.trigger
            .filter("button")
            .each(function () {
              this.disabled = !1;
            })
            .end()
            .filter("img")
            .css({ opacity: "1.0", cursor: "" });
      else if (r === "div" || r === "span")
        (i = s.children("." + this._inlineClass)),
          i.children().removeClass("ui-state-disabled"),
          i
            .find("select.ui-datepicker-month, select.ui-datepicker-year")
            .prop("disabled", !1);
      this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      });
    },
    _disableDatepicker: function (t) {
      var r,
        i,
        s = e(t),
        o = e.data(t, n);
      if (!s.hasClass(this.markerClassName)) return;
      r = t.nodeName.toLowerCase();
      if (r === "input")
        (t.disabled = !0),
          o.trigger
            .filter("button")
            .each(function () {
              this.disabled = !0;
            })
            .end()
            .filter("img")
            .css({ opacity: "0.5", cursor: "default" });
      else if (r === "div" || r === "span")
        (i = s.children("." + this._inlineClass)),
          i.children().addClass("ui-state-disabled"),
          i
            .find("select.ui-datepicker-month, select.ui-datepicker-year")
            .prop("disabled", !0);
      (this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      })),
        (this._disabledInputs[this._disabledInputs.length] = t);
    },
    _isDisabledDatepicker: function (e) {
      if (!e) return !1;
      for (var t = 0; t < this._disabledInputs.length; t++)
        if (this._disabledInputs[t] === e) return !0;
      return !1;
    },
    _getInst: function (t) {
      try {
        return e.data(t, n);
      } catch (r) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function (n, r, i) {
      var s,
        o,
        a,
        f,
        l = this._getInst(n);
      if (arguments.length === 2 && typeof r == "string")
        return r === "defaults"
          ? e.extend({}, e.datepicker._defaults)
          : l
          ? r === "all"
            ? e.extend({}, l.settings)
            : this._get(l, r)
          : null;
      (s = r || {}),
        typeof r == "string" && ((s = {}), (s[r] = i)),
        l &&
          (this._curInst === l && this._hideDatepicker(),
          (o = this._getDateDatepicker(n, !0)),
          (a = this._getMinMaxDate(l, "min")),
          (f = this._getMinMaxDate(l, "max")),
          u(l.settings, s),
          a !== null &&
            s.dateFormat !== t &&
            s.minDate === t &&
            (l.settings.minDate = this._formatDate(l, a)),
          f !== null &&
            s.dateFormat !== t &&
            s.maxDate === t &&
            (l.settings.maxDate = this._formatDate(l, f)),
          "disabled" in s &&
            (s.disabled
              ? this._disableDatepicker(n)
              : this._enableDatepicker(n)),
          this._attachments(e(n), l),
          this._autoSize(l),
          this._setDate(l, o),
          this._updateAlternate(l),
          this._updateDatepicker(l));
    },
    _changeDatepicker: function (e, t, n) {
      this._optionDatepicker(e, t, n);
    },
    _refreshDatepicker: function (e) {
      var t = this._getInst(e);
      t && this._updateDatepicker(t);
    },
    _setDateDatepicker: function (e, t) {
      var n = this._getInst(e);
      n &&
        (this._setDate(n, t),
        this._updateDatepicker(n),
        this._updateAlternate(n));
    },
    _getDateDatepicker: function (e, t) {
      var n = this._getInst(e);
      return (
        n && !n.inline && this._setDateFromField(n, t),
        n ? this._getDate(n) : null
      );
    },
    _doKeyDown: function (t) {
      var n,
        r,
        i,
        s = e.datepicker._getInst(t.target),
        o = !0,
        u = s.dpDiv.is(".ui-datepicker-rtl");
      s._keyEvent = !0;
      if (e.datepicker._datepickerShowing)
        switch (t.keyCode) {
          case 9:
            e.datepicker._hideDatepicker(), (o = !1);
            break;
          case 13:
            return (
              (i = e(
                "td." +
                  e.datepicker._dayOverClass +
                  ":not(." +
                  e.datepicker._currentClass +
                  ")",
                s.dpDiv
              )),
              i[0] &&
                e.datepicker._selectDay(
                  t.target,
                  s.selectedMonth,
                  s.selectedYear,
                  i[0]
                ),
              (n = e.datepicker._get(s, "onSelect")),
              n
                ? ((r = e.datepicker._formatDate(s)),
                  n.apply(s.input ? s.input[0] : null, [r, s]))
                : e.datepicker._hideDatepicker(),
              !1
            );
          case 27:
            e.datepicker._hideDatepicker();
            break;
          case 33:
            e.datepicker._adjustDate(
              t.target,
              t.ctrlKey
                ? -e.datepicker._get(s, "stepBigMonths")
                : -e.datepicker._get(s, "stepMonths"),
              "M"
            );
            break;
          case 34:
            e.datepicker._adjustDate(
              t.target,
              t.ctrlKey
                ? +e.datepicker._get(s, "stepBigMonths")
                : +e.datepicker._get(s, "stepMonths"),
              "M"
            );
            break;
          case 35:
            (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
              (o = t.ctrlKey || t.metaKey);
            break;
          case 36:
            (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
              (o = t.ctrlKey || t.metaKey);
            break;
          case 37:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"),
              (o = t.ctrlKey || t.metaKey),
              t.originalEvent.altKey &&
                e.datepicker._adjustDate(
                  t.target,
                  t.ctrlKey
                    ? -e.datepicker._get(s, "stepBigMonths")
                    : -e.datepicker._get(s, "stepMonths"),
                  "M"
                );
            break;
          case 38:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, -7, "D"),
              (o = t.ctrlKey || t.metaKey);
            break;
          case 39:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"),
              (o = t.ctrlKey || t.metaKey),
              t.originalEvent.altKey &&
                e.datepicker._adjustDate(
                  t.target,
                  t.ctrlKey
                    ? +e.datepicker._get(s, "stepBigMonths")
                    : +e.datepicker._get(s, "stepMonths"),
                  "M"
                );
            break;
          case 40:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, 7, "D"),
              (o = t.ctrlKey || t.metaKey);
            break;
          default:
            o = !1;
        }
      else
        t.keyCode === 36 && t.ctrlKey
          ? e.datepicker._showDatepicker(this)
          : (o = !1);
      o && (t.preventDefault(), t.stopPropagation());
    },
    _doKeyPress: function (t) {
      var n,
        r,
        i = e.datepicker._getInst(t.target);
      if (e.datepicker._get(i, "constrainInput"))
        return (
          (n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat"))),
          (r = String.fromCharCode(
            t.charCode == null ? t.keyCode : t.charCode
          )),
          t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1
        );
    },
    _doKeyUp: function (t) {
      var n,
        r = e.datepicker._getInst(t.target);
      if (r.input.val() !== r.lastVal)
        try {
          (n = e.datepicker.parseDate(
            e.datepicker._get(r, "dateFormat"),
            r.input ? r.input.val() : null,
            e.datepicker._getFormatConfig(r)
          )),
            n &&
              (e.datepicker._setDateFromField(r),
              e.datepicker._updateAlternate(r),
              e.datepicker._updateDatepicker(r));
        } catch (i) {}
      return !0;
    },
    _showDatepicker: function (t) {
      (t = t.target || t),
        t.nodeName.toLowerCase() !== "input" &&
          (t = e("input", t.parentNode)[0]);
      if (
        e.datepicker._isDisabledDatepicker(t) ||
        e.datepicker._lastInput === t
      )
        return;
      var n, r, i, s, o, a, f;
      (n = e.datepicker._getInst(t)),
        e.datepicker._curInst &&
          e.datepicker._curInst !== n &&
          (e.datepicker._curInst.dpDiv.stop(!0, !0),
          n &&
            e.datepicker._datepickerShowing &&
            e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
        (r = e.datepicker._get(n, "beforeShow")),
        (i = r ? r.apply(t, [t, n]) : {});
      if (i === !1) return;
      u(n.settings, i),
        (n.lastVal = null),
        (e.datepicker._lastInput = t),
        e.datepicker._setDateFromField(n),
        e.datepicker._inDialog && (t.value = ""),
        e.datepicker._pos ||
          ((e.datepicker._pos = e.datepicker._findPos(t)),
          (e.datepicker._pos[1] += t.offsetHeight)),
        (s = !1),
        e(t)
          .parents()
          .each(function () {
            return (s |= e(this).css("position") === "fixed"), !s;
          }),
        (o = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }),
        (e.datepicker._pos = null),
        n.dpDiv.empty(),
        n.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }),
        e.datepicker._updateDatepicker(n),
        (o = e.datepicker._checkOffset(n, o, s)),
        n.dpDiv.css({
          position:
            e.datepicker._inDialog && e.blockUI
              ? "static"
              : s
              ? "fixed"
              : "absolute",
          display: "none",
          left: o.left + "px",
          top: o.top + "px",
        }),
        n.inline ||
          ((a = e.datepicker._get(n, "showAnim")),
          (f = e.datepicker._get(n, "duration")),
          n.dpDiv.zIndex(e(t).zIndex() + 1),
          (e.datepicker._datepickerShowing = !0),
          e.effects && e.effects.effect[a]
            ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f)
            : n.dpDiv[a || "show"](a ? f : null),
          n.input.is(":visible") && !n.input.is(":disabled") && n.input.focus(),
          (e.datepicker._curInst = n));
    },
    _updateDatepicker: function (t) {
      (this.maxRows = 4),
        (i = t),
        t.dpDiv.empty().append(this._generateHTML(t)),
        this._attachHandlers(t),
        t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
      var n,
        r = this._getNumberOfMonths(t),
        s = r[1],
        o = 17;
      t.dpDiv
        .removeClass(
          "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
        )
        .width(""),
        s > 1 &&
          t.dpDiv
            .addClass("ui-datepicker-multi-" + s)
            .css("width", o * s + "em"),
        t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"](
          "ui-datepicker-multi"
        ),
        t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"](
          "ui-datepicker-rtl"
        ),
        t === e.datepicker._curInst &&
          e.datepicker._datepickerShowing &&
          t.input &&
          t.input.is(":visible") &&
          !t.input.is(":disabled") &&
          t.input[0] !== document.activeElement &&
          t.input.focus(),
        t.yearshtml &&
          ((n = t.yearshtml),
          setTimeout(function () {
            n === t.yearshtml &&
              t.yearshtml &&
              t.dpDiv
                .find("select.ui-datepicker-year:first")
                .replaceWith(t.yearshtml),
              (n = t.yearshtml = null);
          }, 0));
    },
    _getBorders: function (e) {
      var t = function (e) {
        return { thin: 1, medium: 2, thick: 3 }[e] || e;
      };
      return [
        parseFloat(t(e.css("border-left-width"))),
        parseFloat(t(e.css("border-top-width"))),
      ];
    },
    _checkOffset: function (t, n, r) {
      var i = t.dpDiv.outerWidth(),
        s = t.dpDiv.outerHeight(),
        o = t.input ? t.input.outerWidth() : 0,
        u = t.input ? t.input.outerHeight() : 0,
        a =
          document.documentElement.clientWidth +
          (r ? 0 : e(document).scrollLeft()),
        f =
          document.documentElement.clientHeight +
          (r ? 0 : e(document).scrollTop());
      return (
        (n.left -= this._get(t, "isRTL") ? i - o : 0),
        (n.left -=
          r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0),
        (n.top -=
          r && n.top === t.input.offset().top + u
            ? e(document).scrollTop()
            : 0),
        (n.left -= Math.min(
          n.left,
          n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0
        )),
        (n.top -= Math.min(
          n.top,
          n.top + s > f && f > s ? Math.abs(s + u) : 0
        )),
        n
      );
    },
    _findPos: function (t) {
      var n,
        r = this._getInst(t),
        i = this._get(r, "isRTL");
      while (
        t &&
        (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))
      )
        t = t[i ? "previousSibling" : "nextSibling"];
      return (n = e(t).offset()), [n.left, n.top];
    },
    _hideDatepicker: function (t) {
      var r,
        i,
        s,
        o,
        u = this._curInst;
      if (!u || (t && u !== e.data(t, n))) return;
      this._datepickerShowing &&
        ((r = this._get(u, "showAnim")),
        (i = this._get(u, "duration")),
        (s = function () {
          e.datepicker._tidyDialog(u);
        }),
        e.effects && (e.effects.effect[r] || e.effects[r])
          ? u.dpDiv.hide(r, e.datepicker._get(u, "showOptions"), i, s)
          : u.dpDiv[
              r === "slideDown"
                ? "slideUp"
                : r === "fadeIn"
                ? "fadeOut"
                : "hide"
            ](r ? i : null, s),
        r || s(),
        (this._datepickerShowing = !1),
        (o = this._get(u, "onClose")),
        o &&
          o.apply(u.input ? u.input[0] : null, [
            u.input ? u.input.val() : "",
            u,
          ]),
        (this._lastInput = null),
        this._inDialog &&
          (this._dialogInput.css({
            position: "absolute",
            left: "0",
            top: "-100px",
          }),
          e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))),
        (this._inDialog = !1));
    },
    _tidyDialog: function (e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    },
    _checkExternalClick: function (t) {
      if (!e.datepicker._curInst) return;
      var n = e(t.target),
        r = e.datepicker._getInst(n[0]);
      ((n[0].id !== e.datepicker._mainDivId &&
        n.parents("#" + e.datepicker._mainDivId).length === 0 &&
        !n.hasClass(e.datepicker.markerClassName) &&
        !n.closest("." + e.datepicker._triggerClass).length &&
        e.datepicker._datepickerShowing &&
        (!e.datepicker._inDialog || !e.blockUI)) ||
        (n.hasClass(e.datepicker.markerClassName) &&
          e.datepicker._curInst !== r)) &&
        e.datepicker._hideDatepicker();
    },
    _adjustDate: function (t, n, r) {
      var i = e(t),
        s = this._getInst(i[0]);
      if (this._isDisabledDatepicker(i[0])) return;
      this._adjustInstDate(
        s,
        n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0),
        r
      ),
        this._updateDatepicker(s);
    },
    _gotoToday: function (t) {
      var n,
        r = e(t),
        i = this._getInst(r[0]);
      this._get(i, "gotoCurrent") && i.currentDay
        ? ((i.selectedDay = i.currentDay),
          (i.drawMonth = i.selectedMonth = i.currentMonth),
          (i.drawYear = i.selectedYear = i.currentYear))
        : ((n = new Date()),
          (i.selectedDay = n.getDate()),
          (i.drawMonth = i.selectedMonth = n.getMonth()),
          (i.drawYear = i.selectedYear = n.getFullYear())),
        this._notifyChange(i),
        this._adjustDate(r);
    },
    _selectMonthYear: function (t, n, r) {
      var i = e(t),
        s = this._getInst(i[0]);
      (s["selected" + (r === "M" ? "Month" : "Year")] = s[
        "draw" + (r === "M" ? "Month" : "Year")
      ] =
        parseInt(n.options[n.selectedIndex].value, 10)),
        this._notifyChange(s),
        this._adjustDate(i);
    },
    _selectDay: function (t, n, r, i) {
      var s,
        o = e(t);
      if (
        e(i).hasClass(this._unselectableClass) ||
        this._isDisabledDatepicker(o[0])
      )
        return;
      (s = this._getInst(o[0])),
        (s.selectedDay = s.currentDay = e("a", i).html()),
        (s.selectedMonth = s.currentMonth = n),
        (s.selectedYear = s.currentYear = r),
        this._selectDate(
          t,
          this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)
        );
    },
    _clearDate: function (t) {
      var n = e(t);
      this._selectDate(n, "");
    },
    _selectDate: function (t, n) {
      var r,
        i = e(t),
        s = this._getInst(i[0]);
      (n = n != null ? n : this._formatDate(s)),
        s.input && s.input.val(n),
        this._updateAlternate(s),
        (r = this._get(s, "onSelect")),
        r
          ? r.apply(s.input ? s.input[0] : null, [n, s])
          : s.input && s.input.trigger("change"),
        s.inline
          ? this._updateDatepicker(s)
          : (this._hideDatepicker(),
            (this._lastInput = s.input[0]),
            typeof s.input[0] != "object" && s.input.focus(),
            (this._lastInput = null));
    },
    _updateAlternate: function (t) {
      var n,
        r,
        i,
        s = this._get(t, "altField");
      s &&
        ((n = this._get(t, "altFormat") || this._get(t, "dateFormat")),
        (r = this._getDate(t)),
        (i = this.formatDate(n, r, this._getFormatConfig(t))),
        e(s).each(function () {
          e(this).val(i);
        }));
    },
    noWeekends: function (e) {
      var t = e.getDay();
      return [t > 0 && t < 6, ""];
    },
    iso8601Week: function (e) {
      var t,
        n = new Date(e.getTime());
      return (
        n.setDate(n.getDate() + 4 - (n.getDay() || 7)),
        (t = n.getTime()),
        n.setMonth(0),
        n.setDate(1),
        Math.floor(Math.round((t - n) / 864e5) / 7) + 1
      );
    },
    parseDate: function (t, n, r) {
      if (t == null || n == null) throw "Invalid arguments";
      n = typeof n == "object" ? n.toString() : n + "";
      if (n === "") return null;
      var i,
        s,
        o,
        u = 0,
        a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        f =
          typeof a != "string"
            ? a
            : (new Date().getFullYear() % 100) + parseInt(a, 10),
        l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
        c = (r ? r.dayNames : null) || this._defaults.dayNames,
        h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
        p = (r ? r.monthNames : null) || this._defaults.monthNames,
        d = -1,
        v = -1,
        m = -1,
        g = -1,
        y = !1,
        b,
        w = function (e) {
          var n = i + 1 < t.length && t.charAt(i + 1) === e;
          return n && i++, n;
        },
        E = function (e) {
          var t = w(e),
            r =
              e === "@"
                ? 14
                : e === "!"
                ? 20
                : e === "y" && t
                ? 4
                : e === "o"
                ? 3
                : 2,
            i = new RegExp("^\\d{1," + r + "}"),
            s = n.substring(u).match(i);
          if (!s) throw "Missing number at position " + u;
          return (u += s[0].length), parseInt(s[0], 10);
        },
        S = function (t, r, i) {
          var s = -1,
            o = e
              .map(w(t) ? i : r, function (e, t) {
                return [[t, e]];
              })
              .sort(function (e, t) {
                return -(e[1].length - t[1].length);
              });
          e.each(o, function (e, t) {
            var r = t[1];
            if (n.substr(u, r.length).toLowerCase() === r.toLowerCase())
              return (s = t[0]), (u += r.length), !1;
          });
          if (s !== -1) return s + 1;
          throw "Unknown name at position " + u;
        },
        x = function () {
          if (n.charAt(u) !== t.charAt(i))
            throw "Unexpected literal at position " + u;
          u++;
        };
      for (i = 0; i < t.length; i++)
        if (y) t.charAt(i) === "'" && !w("'") ? (y = !1) : x();
        else
          switch (t.charAt(i)) {
            case "d":
              m = E("d");
              break;
            case "D":
              S("D", l, c);
              break;
            case "o":
              g = E("o");
              break;
            case "m":
              v = E("m");
              break;
            case "M":
              v = S("M", h, p);
              break;
            case "y":
              d = E("y");
              break;
            case "@":
              (b = new Date(E("@"))),
                (d = b.getFullYear()),
                (v = b.getMonth() + 1),
                (m = b.getDate());
              break;
            case "!":
              (b = new Date((E("!") - this._ticksTo1970) / 1e4)),
                (d = b.getFullYear()),
                (v = b.getMonth() + 1),
                (m = b.getDate());
              break;
            case "'":
              w("'") ? x() : (y = !0);
              break;
            default:
              x();
          }
      if (u < n.length) {
        o = n.substr(u);
        if (!/^\s+/.test(o))
          throw "Extra/unparsed characters found in date: " + o;
      }
      d === -1
        ? (d = new Date().getFullYear())
        : d < 100 &&
          (d +=
            new Date().getFullYear() -
            (new Date().getFullYear() % 100) +
            (d <= f ? 0 : -100));
      if (g > -1) {
        (v = 1), (m = g);
        do {
          s = this._getDaysInMonth(d, v - 1);
          if (m <= s) break;
          v++, (m -= s);
        } while (!0);
      }
      b = this._daylightSavingAdjust(new Date(d, v - 1, m));
      if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m)
        throw "Invalid date";
      return b;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970:
      (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
      24 *
      60 *
      60 *
      1e7,
    formatDate: function (e, t, n) {
      if (!t) return "";
      var r,
        i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
        s = (n ? n.dayNames : null) || this._defaults.dayNames,
        o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
        u = (n ? n.monthNames : null) || this._defaults.monthNames,
        a = function (t) {
          var n = r + 1 < e.length && e.charAt(r + 1) === t;
          return n && r++, n;
        },
        f = function (e, t, n) {
          var r = "" + t;
          if (a(e)) while (r.length < n) r = "0" + r;
          return r;
        },
        l = function (e, t, n, r) {
          return a(e) ? r[t] : n[t];
        },
        c = "",
        h = !1;
      if (t)
        for (r = 0; r < e.length; r++)
          if (h) e.charAt(r) === "'" && !a("'") ? (h = !1) : (c += e.charAt(r));
          else
            switch (e.charAt(r)) {
              case "d":
                c += f("d", t.getDate(), 2);
                break;
              case "D":
                c += l("D", t.getDay(), i, s);
                break;
              case "o":
                c += f(
                  "o",
                  Math.round(
                    (new Date(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ).getTime() -
                      new Date(t.getFullYear(), 0, 0).getTime()) /
                      864e5
                  ),
                  3
                );
                break;
              case "m":
                c += f("m", t.getMonth() + 1, 2);
                break;
              case "M":
                c += l("M", t.getMonth(), o, u);
                break;
              case "y":
                c += a("y")
                  ? t.getFullYear()
                  : (t.getYear() % 100 < 10 ? "0" : "") + (t.getYear() % 100);
                break;
              case "@":
                c += t.getTime();
                break;
              case "!":
                c += t.getTime() * 1e4 + this._ticksTo1970;
                break;
              case "'":
                a("'") ? (c += "'") : (h = !0);
                break;
              default:
                c += e.charAt(r);
            }
      return c;
    },
    _possibleChars: function (e) {
      var t,
        n = "",
        r = !1,
        i = function (n) {
          var r = t + 1 < e.length && e.charAt(t + 1) === n;
          return r && t++, r;
        };
      for (t = 0; t < e.length; t++)
        if (r) e.charAt(t) === "'" && !i("'") ? (r = !1) : (n += e.charAt(t));
        else
          switch (e.charAt(t)) {
            case "d":
            case "m":
            case "y":
            case "@":
              n += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              i("'") ? (n += "'") : (r = !0);
              break;
            default:
              n += e.charAt(t);
          }
      return n;
    },
    _get: function (e, n) {
      return e.settings[n] !== t ? e.settings[n] : this._defaults[n];
    },
    _setDateFromField: function (e, t) {
      if (e.input.val() === e.lastVal) return;
      var n = this._get(e, "dateFormat"),
        r = (e.lastVal = e.input ? e.input.val() : null),
        i = this._getDefaultDate(e),
        s = i,
        o = this._getFormatConfig(e);
      try {
        s = this.parseDate(n, r, o) || i;
      } catch (u) {
        r = t ? "" : r;
      }
      (e.selectedDay = s.getDate()),
        (e.drawMonth = e.selectedMonth = s.getMonth()),
        (e.drawYear = e.selectedYear = s.getFullYear()),
        (e.currentDay = r ? s.getDate() : 0),
        (e.currentMonth = r ? s.getMonth() : 0),
        (e.currentYear = r ? s.getFullYear() : 0),
        this._adjustInstDate(e);
    },
    _getDefaultDate: function (e) {
      return this._restrictMinMax(
        e,
        this._determineDate(e, this._get(e, "defaultDate"), new Date())
      );
    },
    _determineDate: function (t, n, r) {
      var i = function (e) {
          var t = new Date();
          return t.setDate(t.getDate() + e), t;
        },
        s = function (n) {
          try {
            return e.datepicker.parseDate(
              e.datepicker._get(t, "dateFormat"),
              n,
              e.datepicker._getFormatConfig(t)
            );
          } catch (r) {}
          var i =
              (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) ||
              new Date(),
            s = i.getFullYear(),
            o = i.getMonth(),
            u = i.getDate(),
            a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
            f = a.exec(n);
          while (f) {
            switch (f[2] || "d") {
              case "d":
              case "D":
                u += parseInt(f[1], 10);
                break;
              case "w":
              case "W":
                u += parseInt(f[1], 10) * 7;
                break;
              case "m":
              case "M":
                (o += parseInt(f[1], 10)),
                  (u = Math.min(u, e.datepicker._getDaysInMonth(s, o)));
                break;
              case "y":
              case "Y":
                (s += parseInt(f[1], 10)),
                  (u = Math.min(u, e.datepicker._getDaysInMonth(s, o)));
            }
            f = a.exec(n);
          }
          return new Date(s, o, u);
        },
        o =
          n == null || n === ""
            ? r
            : typeof n == "string"
            ? s(n)
            : typeof n == "number"
            ? isNaN(n)
              ? r
              : i(n)
            : new Date(n.getTime());
      return (
        (o = o && o.toString() === "Invalid Date" ? r : o),
        o &&
          (o.setHours(0),
          o.setMinutes(0),
          o.setSeconds(0),
          o.setMilliseconds(0)),
        this._daylightSavingAdjust(o)
      );
    },
    _daylightSavingAdjust: function (e) {
      return e
        ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)
        : null;
    },
    _setDate: function (e, t, n) {
      var r = !t,
        i = e.selectedMonth,
        s = e.selectedYear,
        o = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
      (e.selectedDay = e.currentDay = o.getDate()),
        (e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth()),
        (e.drawYear = e.selectedYear = e.currentYear = o.getFullYear()),
        (i !== e.selectedMonth || s !== e.selectedYear) &&
          !n &&
          this._notifyChange(e),
        this._adjustInstDate(e),
        e.input && e.input.val(r ? "" : this._formatDate(e));
    },
    _getDate: function (e) {
      var t =
        !e.currentYear || (e.input && e.input.val() === "")
          ? null
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
      return t;
    },
    _attachHandlers: function (t) {
      var n = this._get(t, "stepMonths"),
        i = "#" + t.id.replace(/\\\\/g, "\\");
      t.dpDiv.find("[data-handler]").map(function () {
        var t = {
          prev: function () {
            window["DP_jQuery_" + r].datepicker._adjustDate(i, -n, "M");
          },
          next: function () {
            window["DP_jQuery_" + r].datepicker._adjustDate(i, +n, "M");
          },
          hide: function () {
            window["DP_jQuery_" + r].datepicker._hideDatepicker();
          },
          today: function () {
            window["DP_jQuery_" + r].datepicker._gotoToday(i);
          },
          selectDay: function () {
            return (
              window["DP_jQuery_" + r].datepicker._selectDay(
                i,
                +this.getAttribute("data-month"),
                +this.getAttribute("data-year"),
                this
              ),
              !1
            );
          },
          selectMonth: function () {
            return (
              window["DP_jQuery_" + r].datepicker._selectMonthYear(
                i,
                this,
                "M"
              ),
              !1
            );
          },
          selectYear: function () {
            return (
              window["DP_jQuery_" + r].datepicker._selectMonthYear(
                i,
                this,
                "Y"
              ),
              !1
            );
          },
        };
        e(this).bind(
          this.getAttribute("data-event"),
          t[this.getAttribute("data-handler")]
        );
      });
    },
    _generateHTML: function (e) {
      var t,
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x,
        T,
        N,
        C,
        k,
        L,
        A,
        O,
        M,
        _,
        D,
        P,
        H,
        B,
        j,
        F,
        I,
        q = new Date(),
        R = this._daylightSavingAdjust(
          new Date(q.getFullYear(), q.getMonth(), q.getDate())
        ),
        U = this._get(e, "isRTL"),
        z = this._get(e, "showButtonPanel"),
        W = this._get(e, "hideIfNoPrevNext"),
        X = this._get(e, "navigationAsDateFormat"),
        V = this._getNumberOfMonths(e),
        $ = this._get(e, "showCurrentAtPos"),
        J = this._get(e, "stepMonths"),
        K = V[0] !== 1 || V[1] !== 1,
        Q = this._daylightSavingAdjust(
          e.currentDay
            ? new Date(e.currentYear, e.currentMonth, e.currentDay)
            : new Date(9999, 9, 9)
        ),
        G = this._getMinMaxDate(e, "min"),
        Y = this._getMinMaxDate(e, "max"),
        Z = e.drawMonth - $,
        et = e.drawYear;
      Z < 0 && ((Z += 12), et--);
      if (Y) {
        (t = this._daylightSavingAdjust(
          new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())
        )),
          (t = G && t < G ? G : t);
        while (this._daylightSavingAdjust(new Date(et, Z, 1)) > t)
          Z--, Z < 0 && ((Z = 11), et--);
      }
      (e.drawMonth = Z),
        (e.drawYear = et),
        (n = this._get(e, "prevText")),
        (n = X
          ? this.formatDate(
              n,
              this._daylightSavingAdjust(new Date(et, Z - J, 1)),
              this._getFormatConfig(e)
            )
          : n),
        (r = this._canAdjustMonth(e, -1, et, Z)
          ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
            n +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (U ? "e" : "w") +
            "'>" +
            n +
            "</span></a>"
          : W
          ? ""
          : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
            n +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (U ? "e" : "w") +
            "'>" +
            n +
            "</span></a>"),
        (i = this._get(e, "nextText")),
        (i = X
          ? this.formatDate(
              i,
              this._daylightSavingAdjust(new Date(et, Z + J, 1)),
              this._getFormatConfig(e)
            )
          : i),
        (s = this._canAdjustMonth(e, 1, et, Z)
          ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
            i +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (U ? "w" : "e") +
            "'>" +
            i +
            "</span></a>"
          : W
          ? ""
          : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
            i +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (U ? "w" : "e") +
            "'>" +
            i +
            "</span></a>"),
        (o = this._get(e, "currentText")),
        (u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R),
        (o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o),
        (a = e.inline
          ? ""
          : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
            this._get(e, "closeText") +
            "</button>"),
        (f = z
          ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
            (U ? a : "") +
            (this._isInRange(e, u)
              ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                o +
                "</button>"
              : "") +
            (U ? "" : a) +
            "</div>"
          : ""),
        (l = parseInt(this._get(e, "firstDay"), 10)),
        (l = isNaN(l) ? 0 : l),
        (c = this._get(e, "showWeek")),
        (h = this._get(e, "dayNames")),
        (p = this._get(e, "dayNamesMin")),
        (d = this._get(e, "monthNames")),
        (v = this._get(e, "monthNamesShort")),
        (m = this._get(e, "beforeShowDay")),
        (g = this._get(e, "showOtherMonths")),
        (y = this._get(e, "selectOtherMonths")),
        (b = this._getDefaultDate(e)),
        (w = ""),
        E;
      for (S = 0; S < V[0]; S++) {
        (x = ""), (this.maxRows = 4);
        for (T = 0; T < V[1]; T++) {
          (N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay))),
            (C = " ui-corner-all"),
            (k = "");
          if (K) {
            k += "<div class='ui-datepicker-group";
            if (V[1] > 1)
              switch (T) {
                case 0:
                  (k += " ui-datepicker-group-first"),
                    (C = " ui-corner-" + (U ? "right" : "left"));
                  break;
                case V[1] - 1:
                  (k += " ui-datepicker-group-last"),
                    (C = " ui-corner-" + (U ? "left" : "right"));
                  break;
                default:
                  (k += " ui-datepicker-group-middle"), (C = "");
              }
            k += "'>";
          }
          (k +=
            "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
            C +
            "'>" +
            (/all|left/.test(C) && S === 0 ? (U ? s : r) : "") +
            (/all|right/.test(C) && S === 0 ? (U ? r : s) : "") +
            this._generateMonthYearHeader(
              e,
              Z,
              et,
              G,
              Y,
              S > 0 || T > 0,
              d,
              v
            ) +
            "</div><table class='ui-datepicker-calendar'><thead>" +
            "<tr>"),
            (L = c
              ? "<th class='ui-datepicker-week-col'>" +
                this._get(e, "weekHeader") +
                "</th>"
              : "");
          for (E = 0; E < 7; E++)
            (A = (E + l) % 7),
              (L +=
                "<th" +
                ((E + l + 6) % 7 >= 5
                  ? " class='ui-datepicker-week-end'"
                  : "") +
                ">" +
                "<span title='" +
                h[A] +
                "'>" +
                p[A] +
                "</span></th>");
          (k += L + "</tr></thead><tbody>"),
            (O = this._getDaysInMonth(et, Z)),
            et === e.selectedYear &&
              Z === e.selectedMonth &&
              (e.selectedDay = Math.min(e.selectedDay, O)),
            (M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7),
            (_ = Math.ceil((M + O) / 7)),
            (D = K ? (this.maxRows > _ ? this.maxRows : _) : _),
            (this.maxRows = D),
            (P = this._daylightSavingAdjust(new Date(et, Z, 1 - M)));
          for (H = 0; H < D; H++) {
            (k += "<tr>"),
              (B = c
                ? "<td class='ui-datepicker-week-col'>" +
                  this._get(e, "calculateWeek")(P) +
                  "</td>"
                : "");
            for (E = 0; E < 7; E++)
              (j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""]),
                (F = P.getMonth() !== Z),
                (I = (F && !y) || !j[0] || (G && P < G) || (Y && P > Y)),
                (B +=
                  "<td class='" +
                  ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                  (F ? " ui-datepicker-other-month" : "") +
                  ((P.getTime() === N.getTime() &&
                    Z === e.selectedMonth &&
                    e._keyEvent) ||
                  (b.getTime() === P.getTime() && b.getTime() === N.getTime())
                    ? " " + this._dayOverClass
                    : "") +
                  (I
                    ? " " + this._unselectableClass + " ui-state-disabled"
                    : "") +
                  (F && !g
                    ? ""
                    : " " +
                      j[1] +
                      (P.getTime() === Q.getTime()
                        ? " " + this._currentClass
                        : "") +
                      (P.getTime() === R.getTime()
                        ? " ui-datepicker-today"
                        : "")) +
                  "'" +
                  ((!F || g) && j[2]
                    ? " title='" + j[2].replace(/'/g, "&#39;") + "'"
                    : "") +
                  (I
                    ? ""
                    : " data-handler='selectDay' data-event='click' data-month='" +
                      P.getMonth() +
                      "' data-year='" +
                      P.getFullYear() +
                      "'") +
                  ">" +
                  (F && !g
                    ? "&#xa0;"
                    : I
                    ? "<span class='ui-state-default'>" +
                      P.getDate() +
                      "</span>"
                    : "<a class='ui-state-default" +
                      (P.getTime() === R.getTime()
                        ? " ui-state-highlight"
                        : "") +
                      (P.getTime() === Q.getTime() ? " ui-state-active" : "") +
                      (F ? " ui-priority-secondary" : "") +
                      "' href='#'>" +
                      P.getDate() +
                      "</a>") +
                  "</td>"),
                P.setDate(P.getDate() + 1),
                (P = this._daylightSavingAdjust(P));
            k += B + "</tr>";
          }
          Z++,
            Z > 11 && ((Z = 0), et++),
            (k +=
              "</tbody></table>" +
              (K
                ? "</div>" +
                  (V[0] > 0 && T === V[1] - 1
                    ? "<div class='ui-datepicker-row-break'></div>"
                    : "")
                : "")),
            (x += k);
        }
        w += x;
      }
      return (w += f), (e._keyEvent = !1), w;
    },
    _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
      var a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m = this._get(e, "changeMonth"),
        g = this._get(e, "changeYear"),
        y = this._get(e, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        w = "";
      if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
      else {
        (a = r && r.getFullYear() === n),
          (f = i && i.getFullYear() === n),
          (w +=
            "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>");
        for (l = 0; l < 12; l++)
          (!a || l >= r.getMonth()) &&
            (!f || l <= i.getMonth()) &&
            (w +=
              "<option value='" +
              l +
              "'" +
              (l === t ? " selected='selected'" : "") +
              ">" +
              u[l] +
              "</option>");
        w += "</select>";
      }
      y || (b += w + (s || !m || !g ? "&#xa0;" : ""));
      if (!e.yearshtml) {
        e.yearshtml = "";
        if (s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
        else {
          (c = this._get(e, "yearRange").split(":")),
            (h = new Date().getFullYear()),
            (p = function (e) {
              var t = e.match(/c[+\-].*/)
                ? n + parseInt(e.substring(1), 10)
                : e.match(/[+\-].*/)
                ? h + parseInt(e, 10)
                : parseInt(e, 10);
              return isNaN(t) ? h : t;
            }),
            (d = p(c[0])),
            (v = Math.max(d, p(c[1] || ""))),
            (d = r ? Math.max(d, r.getFullYear()) : d),
            (v = i ? Math.min(v, i.getFullYear()) : v),
            (e.yearshtml +=
              "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>");
          for (; d <= v; d++)
            e.yearshtml +=
              "<option value='" +
              d +
              "'" +
              (d === n ? " selected='selected'" : "") +
              ">" +
              d +
              "</option>";
          (e.yearshtml += "</select>"),
            (b += e.yearshtml),
            (e.yearshtml = null);
        }
      }
      return (
        (b += this._get(e, "yearSuffix")),
        y && (b += (s || !m || !g ? "&#xa0;" : "") + w),
        (b += "</div>"),
        b
      );
    },
    _adjustInstDate: function (e, t, n) {
      var r = e.drawYear + (n === "Y" ? t : 0),
        i = e.drawMonth + (n === "M" ? t : 0),
        s =
          Math.min(e.selectedDay, this._getDaysInMonth(r, i)) +
          (n === "D" ? t : 0),
        o = this._restrictMinMax(
          e,
          this._daylightSavingAdjust(new Date(r, i, s))
        );
      (e.selectedDay = o.getDate()),
        (e.drawMonth = e.selectedMonth = o.getMonth()),
        (e.drawYear = e.selectedYear = o.getFullYear()),
        (n === "M" || n === "Y") && this._notifyChange(e);
    },
    _restrictMinMax: function (e, t) {
      var n = this._getMinMaxDate(e, "min"),
        r = this._getMinMaxDate(e, "max"),
        i = n && t < n ? n : t;
      return r && i > r ? r : i;
    },
    _notifyChange: function (e) {
      var t = this._get(e, "onChangeMonthYear");
      t &&
        t.apply(e.input ? e.input[0] : null, [
          e.selectedYear,
          e.selectedMonth + 1,
          e,
        ]);
    },
    _getNumberOfMonths: function (e) {
      var t = this._get(e, "numberOfMonths");
      return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t;
    },
    _getMinMaxDate: function (e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null);
    },
    _getDaysInMonth: function (e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
    },
    _getFirstDayOfMonth: function (e, t) {
      return new Date(e, t, 1).getDay();
    },
    _canAdjustMonth: function (e, t, n, r) {
      var i = this._getNumberOfMonths(e),
        s = this._daylightSavingAdjust(
          new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1)
        );
      return (
        t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())),
        this._isInRange(e, s)
      );
    },
    _isInRange: function (e, t) {
      var n,
        r,
        i = this._getMinMaxDate(e, "min"),
        s = this._getMinMaxDate(e, "max"),
        o = null,
        u = null,
        a = this._get(e, "yearRange");
      return (
        a &&
          ((n = a.split(":")),
          (r = new Date().getFullYear()),
          (o = parseInt(n[0], 10)),
          (u = parseInt(n[1], 10)),
          n[0].match(/[+\-].*/) && (o += r),
          n[1].match(/[+\-].*/) && (u += r)),
        (!i || t.getTime() >= i.getTime()) &&
          (!s || t.getTime() <= s.getTime()) &&
          (!o || t.getFullYear() >= o) &&
          (!u || t.getFullYear() <= u)
      );
    },
    _getFormatConfig: function (e) {
      var t = this._get(e, "shortYearCutoff");
      return (
        (t =
          typeof t != "string"
            ? t
            : (new Date().getFullYear() % 100) + parseInt(t, 10)),
        {
          shortYearCutoff: t,
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames"),
        }
      );
    },
    _formatDate: function (e, t, n, r) {
      t ||
        ((e.currentDay = e.selectedDay),
        (e.currentMonth = e.selectedMonth),
        (e.currentYear = e.selectedYear));
      var i = t
        ? typeof t == "object"
          ? t
          : this._daylightSavingAdjust(new Date(r, n, t))
        : this._daylightSavingAdjust(
            new Date(e.currentYear, e.currentMonth, e.currentDay)
          );
      return this.formatDate(
        this._get(e, "dateFormat"),
        i,
        this._getFormatConfig(e)
      );
    },
  }),
    (e.fn.datepicker = function (t) {
      if (!this.length) return this;
      e.datepicker.initialized ||
        (e(document).mousedown(e.datepicker._checkExternalClick),
        (e.datepicker.initialized = !0)),
        e("#" + e.datepicker._mainDivId).length === 0 &&
          e("body").append(e.datepicker.dpDiv);
      var n = Array.prototype.slice.call(arguments, 1);
      return typeof t != "string" ||
        (t !== "isDisabled" && t !== "getDate" && t !== "widget")
        ? t === "option" &&
          arguments.length === 2 &&
          typeof arguments[1] == "string"
          ? e.datepicker["_" + t + "Datepicker"].apply(
              e.datepicker,
              [this[0]].concat(n)
            )
          : this.each(function () {
              typeof t == "string"
                ? e.datepicker["_" + t + "Datepicker"].apply(
                    e.datepicker,
                    [this].concat(n)
                  )
                : e.datepicker._attachDatepicker(this, t);
            })
        : e.datepicker["_" + t + "Datepicker"].apply(
            e.datepicker,
            [this[0]].concat(n)
          );
    }),
    (e.datepicker = new s()),
    (e.datepicker.initialized = !1),
    (e.datepicker.uuid = new Date().getTime()),
    (e.datepicker.version = "1.10.1"),
    (window["DP_jQuery_" + r] = e);
})(jQuery);
(function (e, t) {
  var n = {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0,
    },
    r = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 };
  e.widget("ui.dialog", {
    version: "1.10.1",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      closeOnEscape: !0,
      closeText: "close",
      dialogClass: "",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function (t) {
          var n = e(this).css(t).offset().top;
          n < 0 && e(this).css("top", t.top - n);
        },
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null,
    },
    _create: function () {
      (this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height,
      }),
        (this.originalPosition = {
          parent: this.element.parent(),
          index: this.element.parent().children().index(this.element),
        }),
        (this.originalTitle = this.element.attr("title")),
        (this.options.title = this.options.title || this.originalTitle),
        this._createWrapper(),
        this.element
          .show()
          .removeAttr("title")
          .addClass("ui-dialog-content ui-widget-content")
          .appendTo(this.uiDialog),
        this._createTitlebar(),
        this._createButtonPane(),
        this.options.draggable && e.fn.draggable && this._makeDraggable(),
        this.options.resizable && e.fn.resizable && this._makeResizable(),
        (this._isOpen = !1);
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t.jquery || t.nodeType)
        ? e(t)
        : this.document.find(t || "body").eq(0);
    },
    _destroy: function () {
      var e,
        t = this.originalPosition;
      this._destroyOverlay(),
        this.element
          .removeUniqueId()
          .removeClass("ui-dialog-content ui-widget-content")
          .css(this.originalCss)
          .detach(),
        this.uiDialog.stop(!0, !0).remove(),
        this.originalTitle && this.element.attr("title", this.originalTitle),
        (e = t.parent.children().eq(t.index)),
        e.length && e[0] !== this.element[0]
          ? e.before(this.element)
          : t.parent.append(this.element);
    },
    widget: function () {
      return this.uiDialog;
    },
    disable: e.noop,
    enable: e.noop,
    close: function (t) {
      var n = this;
      if (!this._isOpen || this._trigger("beforeClose", t) === !1) return;
      (this._isOpen = !1),
        this._destroyOverlay(),
        this.opener.filter(":focusable").focus().length ||
          e(this.document[0].activeElement).blur(),
        this._hide(this.uiDialog, this.options.hide, function () {
          n._trigger("close", t);
        });
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function () {
      this._moveToTop();
    },
    _moveToTop: function (e, t) {
      var n = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog)
        .length;
      return n && !t && this._trigger("focus", e), n;
    },
    open: function () {
      var t = this;
      if (this._isOpen) {
        this._moveToTop() && this._focusTabbable();
        return;
      }
      (this._isOpen = !0),
        (this.opener = e(this.document[0].activeElement)),
        this._size(),
        this._position(),
        this._createOverlay(),
        this._moveToTop(null, !0),
        this._show(this.uiDialog, this.options.show, function () {
          t._focusTabbable(), t._trigger("focus");
        }),
        this._trigger("open");
    },
    _focusTabbable: function () {
      var e = this.element.find("[autofocus]");
      e.length || (e = this.element.find(":tabbable")),
        e.length || (e = this.uiDialogButtonPane.find(":tabbable")),
        e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")),
        e.length || (e = this.uiDialog),
        e.eq(0).focus();
    },
    _keepFocus: function (t) {
      function n() {
        var t = this.document[0].activeElement,
          n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
        n || this._focusTabbable();
      }
      t.preventDefault(), n.call(this), this._delay(n);
    },
    _createWrapper: function () {
      (this.uiDialog = e("<div>")
        .addClass(
          "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
            this.options.dialogClass
        )
        .hide()
        .attr({ tabIndex: -1, role: "dialog" })
        .appendTo(this._appendTo())),
        this._on(this.uiDialog, {
          keydown: function (t) {
            if (
              this.options.closeOnEscape &&
              !t.isDefaultPrevented() &&
              t.keyCode &&
              t.keyCode === e.ui.keyCode.ESCAPE
            ) {
              t.preventDefault(), this.close(t);
              return;
            }
            if (t.keyCode !== e.ui.keyCode.TAB) return;
            var n = this.uiDialog.find(":tabbable"),
              r = n.filter(":first"),
              i = n.filter(":last");
            (t.target !== i[0] && t.target !== this.uiDialog[0]) || !!t.shiftKey
              ? (t.target === r[0] || t.target === this.uiDialog[0]) &&
                t.shiftKey &&
                (i.focus(1), t.preventDefault())
              : (r.focus(1), t.preventDefault());
          },
          mousedown: function (e) {
            this._moveToTop(e) && this._focusTabbable();
          },
        }),
        this.element.find("[aria-describedby]").length ||
          this.uiDialog.attr({
            "aria-describedby": this.element.uniqueId().attr("id"),
          });
    },
    _createTitlebar: function () {
      var t;
      (this.uiDialogTitlebar = e("<div>")
        .addClass(
          "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
        )
        .prependTo(this.uiDialog)),
        this._on(this.uiDialogTitlebar, {
          mousedown: function (t) {
            e(t.target).closest(".ui-dialog-titlebar-close") ||
              this.uiDialog.focus();
          },
        }),
        (this.uiDialogTitlebarClose = e("<button></button>")
          .button({
            label: this.options.closeText,
            icons: { primary: "ui-icon-closethick" },
            text: !1,
          })
          .addClass("ui-dialog-titlebar-close")
          .appendTo(this.uiDialogTitlebar)),
        this._on(this.uiDialogTitlebarClose, {
          click: function (e) {
            e.preventDefault(), this.close(e);
          },
        }),
        (t = e("<span>")
          .uniqueId()
          .addClass("ui-dialog-title")
          .prependTo(this.uiDialogTitlebar)),
        this._title(t),
        this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
    },
    _title: function (e) {
      this.options.title || e.html("&#160;"), e.text(this.options.title);
    },
    _createButtonPane: function () {
      (this.uiDialogButtonPane = e("<div>").addClass(
        "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
      )),
        (this.uiButtonSet = e("<div>")
          .addClass("ui-dialog-buttonset")
          .appendTo(this.uiDialogButtonPane)),
        this._createButtons();
    },
    _createButtons: function () {
      var t = this,
        n = this.options.buttons;
      this.uiDialogButtonPane.remove(), this.uiButtonSet.empty();
      if (e.isEmptyObject(n) || (e.isArray(n) && !n.length)) {
        this.uiDialog.removeClass("ui-dialog-buttons");
        return;
      }
      e.each(n, function (n, r) {
        var i, s;
        (r = e.isFunction(r) ? { click: r, text: n } : r),
          (r = e.extend({ type: "button" }, r)),
          (i = r.click),
          (r.click = function () {
            i.apply(t.element[0], arguments);
          }),
          (s = { icons: r.icons, text: r.showText }),
          delete r.icons,
          delete r.showText,
          e("<button></button>", r).button(s).appendTo(t.uiButtonSet);
      }),
        this.uiDialog.addClass("ui-dialog-buttons"),
        this.uiDialogButtonPane.appendTo(this.uiDialog);
    },
    _makeDraggable: function () {
      function r(e) {
        return { position: e.position, offset: e.offset };
      }
      var t = this,
        n = this.options;
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function (n, i) {
          e(this).addClass("ui-dialog-dragging"),
            t._blockFrames(),
            t._trigger("dragStart", n, r(i));
        },
        drag: function (e, n) {
          t._trigger("drag", e, r(n));
        },
        stop: function (i, s) {
          (n.position = [
            s.position.left - t.document.scrollLeft(),
            s.position.top - t.document.scrollTop(),
          ]),
            e(this).removeClass("ui-dialog-dragging"),
            t._unblockFrames(),
            t._trigger("dragStop", i, r(s));
        },
      });
    },
    _makeResizable: function () {
      function o(e) {
        return {
          originalPosition: e.originalPosition,
          originalSize: e.originalSize,
          position: e.position,
          size: e.size,
        };
      }
      var t = this,
        n = this.options,
        r = n.resizable,
        i = this.uiDialog.css("position"),
        s = typeof r == "string" ? r : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog
        .resizable({
          cancel: ".ui-dialog-content",
          containment: "document",
          alsoResize: this.element,
          maxWidth: n.maxWidth,
          maxHeight: n.maxHeight,
          minWidth: n.minWidth,
          minHeight: this._minHeight(),
          handles: s,
          start: function (n, r) {
            e(this).addClass("ui-dialog-resizing"),
              t._blockFrames(),
              t._trigger("resizeStart", n, o(r));
          },
          resize: function (e, n) {
            t._trigger("resize", e, o(n));
          },
          stop: function (r, i) {
            (n.height = e(this).height()),
              (n.width = e(this).width()),
              e(this).removeClass("ui-dialog-resizing"),
              t._unblockFrames(),
              t._trigger("resizeStop", r, o(i));
          },
        })
        .css("position", i);
    },
    _minHeight: function () {
      var e = this.options;
      return e.height === "auto"
        ? e.minHeight
        : Math.min(e.minHeight, e.height);
    },
    _position: function () {
      var e = this.uiDialog.is(":visible");
      e || this.uiDialog.show(),
        this.uiDialog.position(this.options.position),
        e || this.uiDialog.hide();
    },
    _setOptions: function (t) {
      var i = this,
        s = !1,
        o = {};
      e.each(t, function (e, t) {
        i._setOption(e, t), e in n && (s = !0), e in r && (o[e] = t);
      }),
        s && (this._size(), this._position()),
        this.uiDialog.is(":data(ui-resizable)") &&
          this.uiDialog.resizable("option", o);
    },
    _setOption: function (e, t) {
      var n,
        r,
        i = this.uiDialog;
      e === "dialogClass" &&
        i.removeClass(this.options.dialogClass).addClass(t);
      if (e === "disabled") return;
      this._super(e, t),
        e === "appendTo" && this.uiDialog.appendTo(this._appendTo()),
        e === "buttons" && this._createButtons(),
        e === "closeText" &&
          this.uiDialogTitlebarClose.button({ label: "" + t }),
        e === "draggable" &&
          ((n = i.is(":data(ui-draggable)")),
          n && !t && i.draggable("destroy"),
          !n && t && this._makeDraggable()),
        e === "position" && this._position(),
        e === "resizable" &&
          ((r = i.is(":data(ui-resizable)")),
          r && !t && i.resizable("destroy"),
          r && typeof t == "string" && i.resizable("option", "handles", t),
          !r && t !== !1 && this._makeResizable()),
        e === "title" &&
          this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
    },
    _size: function () {
      var e,
        t,
        n,
        r = this.options;
      this.element
        .show()
        .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
        r.minWidth > r.width && (r.width = r.minWidth),
        (e = this.uiDialog
          .css({ height: "auto", width: r.width })
          .outerHeight()),
        (t = Math.max(0, r.minHeight - e)),
        (n =
          typeof r.maxHeight == "number"
            ? Math.max(0, r.maxHeight - e)
            : "none"),
        r.height === "auto"
          ? this.element.css({ minHeight: t, maxHeight: n, height: "auto" })
          : this.element.height(Math.max(0, r.height - e)),
        this.uiDialog.is(":data(ui-resizable)") &&
          this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
    _blockFrames: function () {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var t = e(this);
        return e("<div>")
          .css({
            position: "absolute",
            width: t.outerWidth(),
            height: t.outerHeight(),
          })
          .appendTo(t.parent())
          .offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks &&
        (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _createOverlay: function () {
      if (!this.options.modal) return;
      e.ui.dialog.overlayInstances ||
        this._delay(function () {
          e.ui.dialog.overlayInstances &&
            this.document.bind("focusin.dialog", function (t) {
              !e(t.target).closest(".ui-dialog").length &&
                !e(t.target).closest(".ui-datepicker").length &&
                (t.preventDefault(),
                e(".ui-dialog:visible:last .ui-dialog-content")
                  .data("ui-dialog")
                  ._focusTabbable());
            });
        }),
        (this.overlay = e("<div>")
          .addClass("ui-widget-overlay ui-front")
          .appendTo(this._appendTo())),
        this._on(this.overlay, { mousedown: "_keepFocus" }),
        e.ui.dialog.overlayInstances++;
    },
    _destroyOverlay: function () {
      if (!this.options.modal) return;
      this.overlay &&
        (e.ui.dialog.overlayInstances--,
        e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"),
        this.overlay.remove(),
        (this.overlay = null));
    },
  }),
    (e.ui.dialog.overlayInstances = 0),
    e.uiBackCompat !== !1 &&
      e.widget("ui.dialog", e.ui.dialog, {
        _position: function () {
          var t = this.options.position,
            n = [],
            r = [0, 0],
            i;
          if (t) {
            if (typeof t == "string" || (typeof t == "object" && "0" in t))
              (n = t.split ? t.split(" ") : [t[0], t[1]]),
                n.length === 1 && (n[1] = n[0]),
                e.each(["left", "top"], function (e, t) {
                  +n[e] === n[e] && ((r[e] = n[e]), (n[e] = t));
                }),
                (t = {
                  my:
                    n[0] +
                    (r[0] < 0 ? r[0] : "+" + r[0]) +
                    " " +
                    n[1] +
                    (r[1] < 0 ? r[1] : "+" + r[1]),
                  at: n.join(" "),
                });
            t = e.extend({}, e.ui.dialog.prototype.options.position, t);
          } else t = e.ui.dialog.prototype.options.position;
          (i = this.uiDialog.is(":visible")),
            i || this.uiDialog.show(),
            this.uiDialog.position(t),
            i || this.uiDialog.hide();
        },
      });
})(jQuery);
(function (e, t) {
  e.widget("ui.menu", {
    version: "1.10.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: { submenu: "ui-icon-carat-1-e" },
      menus: "ul",
      position: { my: "left top", at: "right top" },
      role: "menu",
      blur: null,
      focus: null,
      select: null,
    },
    _create: function () {
      (this.activeMenu = this.element),
        (this.mouseHandled = !1),
        this.element
          .uniqueId()
          .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
          .toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length)
          .attr({ role: this.options.role, tabIndex: 0 })
          .bind(
            "click" + this.eventNamespace,
            e.proxy(function (e) {
              this.options.disabled && e.preventDefault();
            }, this)
          ),
        this.options.disabled &&
          this.element
            .addClass("ui-state-disabled")
            .attr("aria-disabled", "true"),
        this._on({
          "mousedown .ui-menu-item > a": function (e) {
            e.preventDefault();
          },
          "click .ui-state-disabled > a": function (e) {
            e.preventDefault();
          },
          "click .ui-menu-item:has(a)": function (t) {
            var n = e(t.target).closest(".ui-menu-item");
            !this.mouseHandled &&
              n.not(".ui-state-disabled").length &&
              ((this.mouseHandled = !0),
              this.select(t),
              n.has(".ui-menu").length
                ? this.expand(t)
                : this.element.is(":focus") ||
                  (this.element.trigger("focus", [!0]),
                  this.active &&
                    this.active.parents(".ui-menu").length === 1 &&
                    clearTimeout(this.timer)));
          },
          "mouseenter .ui-menu-item": function (t) {
            var n = e(t.currentTarget);
            n
              .siblings()
              .children(".ui-state-active")
              .removeClass("ui-state-active"),
              this.focus(t, n);
          },
          mouseleave: "collapseAll",
          "mouseleave .ui-menu": "collapseAll",
          focus: function (e, t) {
            var n = this.active || this.element.children(".ui-menu-item").eq(0);
            t || this.focus(e, n);
          },
          blur: function (t) {
            this._delay(function () {
              e.contains(this.element[0], this.document[0].activeElement) ||
                this.collapseAll(t);
            });
          },
          keydown: "_keydown",
        }),
        this.refresh(),
        this._on(this.document, {
          click: function (t) {
            e(t.target).closest(".ui-menu").length || this.collapseAll(t),
              (this.mouseHandled = !1);
          },
        });
    },
    _destroy: function () {
      this.element
        .removeAttr("aria-activedescendant")
        .find(".ui-menu")
        .addBack()
        .removeClass(
          "ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons"
        )
        .removeAttr("role")
        .removeAttr("tabIndex")
        .removeAttr("aria-labelledby")
        .removeAttr("aria-expanded")
        .removeAttr("aria-hidden")
        .removeAttr("aria-disabled")
        .removeUniqueId()
        .show(),
        this.element
          .find(".ui-menu-item")
          .removeClass("ui-menu-item")
          .removeAttr("role")
          .removeAttr("aria-disabled")
          .children("a")
          .removeUniqueId()
          .removeClass("ui-corner-all ui-state-hover")
          .removeAttr("tabIndex")
          .removeAttr("role")
          .removeAttr("aria-haspopup")
          .children()
          .each(function () {
            var t = e(this);
            t.data("ui-menu-submenu-carat") && t.remove();
          }),
        this.element
          .find(".ui-menu-divider")
          .removeClass("ui-menu-divider ui-widget-content");
    },
    _keydown: function (t) {
      function a(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      var n,
        r,
        i,
        s,
        o,
        u = !0;
      switch (t.keyCode) {
        case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);
          break;
        case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);
          break;
        case e.ui.keyCode.HOME:
          this._move("first", "first", t);
          break;
        case e.ui.keyCode.END:
          this._move("last", "last", t);
          break;
        case e.ui.keyCode.UP:
          this.previous(t);
          break;
        case e.ui.keyCode.DOWN:
          this.next(t);
          break;
        case e.ui.keyCode.LEFT:
          this.collapse(t);
          break;
        case e.ui.keyCode.RIGHT:
          this.active &&
            !this.active.is(".ui-state-disabled") &&
            this.expand(t);
          break;
        case e.ui.keyCode.ENTER:
        case e.ui.keyCode.SPACE:
          this._activate(t);
          break;
        case e.ui.keyCode.ESCAPE:
          this.collapse(t);
          break;
        default:
          (u = !1),
            (r = this.previousFilter || ""),
            (i = String.fromCharCode(t.keyCode)),
            (s = !1),
            clearTimeout(this.filterTimer),
            i === r ? (s = !0) : (i = r + i),
            (o = new RegExp("^" + a(i), "i")),
            (n = this.activeMenu.children(".ui-menu-item").filter(function () {
              return o.test(e(this).children("a").text());
            })),
            (n =
              s && n.index(this.active.next()) !== -1
                ? this.active.nextAll(".ui-menu-item")
                : n),
            n.length ||
              ((i = String.fromCharCode(t.keyCode)),
              (o = new RegExp("^" + a(i), "i")),
              (n = this.activeMenu
                .children(".ui-menu-item")
                .filter(function () {
                  return o.test(e(this).children("a").text());
                }))),
            n.length
              ? (this.focus(t, n),
                n.length > 1
                  ? ((this.previousFilter = i),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter)
              : delete this.previousFilter;
      }
      u && t.preventDefault();
    },
    _activate: function (e) {
      this.active.is(".ui-state-disabled") ||
        (this.active.children("a[aria-haspopup='true']").length
          ? this.expand(e)
          : this.select(e));
    },
    refresh: function () {
      var t,
        n = this.options.icons.submenu,
        r = this.element.find(this.options.menus);
      r
        .filter(":not(.ui-menu)")
        .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
        .hide()
        .attr({
          role: this.options.role,
          "aria-hidden": "true",
          "aria-expanded": "false",
        })
        .each(function () {
          var t = e(this),
            r = t.prev("a"),
            i = e("<span>")
              .addClass("ui-menu-icon ui-icon " + n)
              .data("ui-menu-submenu-carat", !0);
          r.attr("aria-haspopup", "true").prepend(i),
            t.attr("aria-labelledby", r.attr("id"));
        }),
        (t = r.add(this.element)),
        t
          .children(":not(.ui-menu-item):has(a)")
          .addClass("ui-menu-item")
          .attr("role", "presentation")
          .children("a")
          .uniqueId()
          .addClass("ui-corner-all")
          .attr({ tabIndex: -1, role: this._itemRole() }),
        t.children(":not(.ui-menu-item)").each(function () {
          var t = e(this);
          /[^\-\u2014\u2013\s]/.test(t.text()) ||
            t.addClass("ui-widget-content ui-menu-divider");
        }),
        t.children(".ui-state-disabled").attr("aria-disabled", "true"),
        this.active &&
          !e.contains(this.element[0], this.active[0]) &&
          this.blur();
    },
    _itemRole: function () {
      return { menu: "menuitem", listbox: "option" }[this.options.role];
    },
    _setOption: function (e, t) {
      e === "icons" &&
        this.element
          .find(".ui-menu-icon")
          .removeClass(this.options.icons.submenu)
          .addClass(t.submenu),
        this._super(e, t);
    },
    focus: function (e, t) {
      var n, r;
      this.blur(e, e && e.type === "focus"),
        this._scrollIntoView(t),
        (this.active = t.first()),
        (r = this.active.children("a").addClass("ui-state-focus")),
        this.options.role &&
          this.element.attr("aria-activedescendant", r.attr("id")),
        this.active
          .parent()
          .closest(".ui-menu-item")
          .children("a:first")
          .addClass("ui-state-active"),
        e && e.type === "keydown"
          ? this._close()
          : (this.timer = this._delay(function () {
              this._close();
            }, this.delay)),
        (n = t.children(".ui-menu")),
        n.length && /^mouse/.test(e.type) && this._startOpening(n),
        (this.activeMenu = t.parent()),
        this._trigger("focus", e, { item: t });
    },
    _scrollIntoView: function (t) {
      var n, r, i, s, o, u;
      this._hasScroll() &&
        ((n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0),
        (r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0),
        (i = t.offset().top - this.activeMenu.offset().top - n - r),
        (s = this.activeMenu.scrollTop()),
        (o = this.activeMenu.height()),
        (u = t.height()),
        i < 0
          ? this.activeMenu.scrollTop(s + i)
          : i + u > o && this.activeMenu.scrollTop(s + i - o + u));
    },
    blur: function (e, t) {
      t || clearTimeout(this.timer);
      if (!this.active) return;
      this.active.children("a").removeClass("ui-state-focus"),
        (this.active = null),
        this._trigger("blur", e, { item: this.active });
    },
    _startOpening: function (e) {
      clearTimeout(this.timer);
      if (e.attr("aria-hidden") !== "true") return;
      this.timer = this._delay(function () {
        this._close(), this._open(e);
      }, this.delay);
    },
    _open: function (t) {
      var n = e.extend({ of: this.active }, this.options.position);
      clearTimeout(this.timer),
        this.element
          .find(".ui-menu")
          .not(t.parents(".ui-menu"))
          .hide()
          .attr("aria-hidden", "true"),
        t
          .show()
          .removeAttr("aria-hidden")
          .attr("aria-expanded", "true")
          .position(n);
    },
    collapseAll: function (t, n) {
      clearTimeout(this.timer),
        (this.timer = this._delay(function () {
          var r = n
            ? this.element
            : e(t && t.target).closest(this.element.find(".ui-menu"));
          r.length || (r = this.element),
            this._close(r),
            this.blur(t),
            (this.activeMenu = r);
        }, this.delay));
    },
    _close: function (e) {
      e || (e = this.active ? this.active.parent() : this.element),
        e
          .find(".ui-menu")
          .hide()
          .attr("aria-hidden", "true")
          .attr("aria-expanded", "false")
          .end()
          .find("a.ui-state-active")
          .removeClass("ui-state-active");
    },
    collapse: function (e) {
      var t =
        this.active &&
        this.active.parent().closest(".ui-menu-item", this.element);
      t && t.length && (this._close(), this.focus(e, t));
    },
    expand: function (e) {
      var t =
        this.active &&
        this.active.children(".ui-menu ").children(".ui-menu-item").first();
      t &&
        t.length &&
        (this._open(t.parent()),
        this._delay(function () {
          this.focus(e, t);
        }));
    },
    next: function (e) {
      this._move("next", "first", e);
    },
    previous: function (e) {
      this._move("prev", "last", e);
    },
    isFirstItem: function () {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function () {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function (e, t, n) {
      var r;
      this.active &&
        (e === "first" || e === "last"
          ? (r =
              this.active[e === "first" ? "prevAll" : "nextAll"](
                ".ui-menu-item"
              ).eq(-1))
          : (r = this.active[e + "All"](".ui-menu-item").eq(0)));
      if (!r || !r.length || !this.active)
        r = this.activeMenu.children(".ui-menu-item")[t]();
      this.focus(n, r);
    },
    nextPage: function (t) {
      var n, r, i;
      if (!this.active) {
        this.next(t);
        return;
      }
      if (this.isLastItem()) return;
      this._hasScroll()
        ? ((r = this.active.offset().top),
          (i = this.element.height()),
          this.active.nextAll(".ui-menu-item").each(function () {
            return (n = e(this)), n.offset().top - r - i < 0;
          }),
          this.focus(t, n))
        : this.focus(
            t,
            this.activeMenu
              .children(".ui-menu-item")
              [this.active ? "last" : "first"]()
          );
    },
    previousPage: function (t) {
      var n, r, i;
      if (!this.active) {
        this.next(t);
        return;
      }
      if (this.isFirstItem()) return;
      this._hasScroll()
        ? ((r = this.active.offset().top),
          (i = this.element.height()),
          this.active.prevAll(".ui-menu-item").each(function () {
            return (n = e(this)), n.offset().top - r + i > 0;
          }),
          this.focus(t, n))
        : this.focus(t, this.activeMenu.children(".ui-menu-item").first());
    },
    _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function (t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");
      var n = { item: this.active };
      this.active.has(".ui-menu").length || this.collapseAll(t, !0),
        this._trigger("select", t, n);
    },
  });
})(jQuery);
(function (e, t) {
  e.widget("ui.progressbar", {
    version: "1.10.1",
    options: { max: 100, value: 0, change: null, complete: null },
    min: 0,
    _create: function () {
      (this.oldValue = this.options.value = this._constrainedValue()),
        this.element
          .addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
          .attr({ role: "progressbar", "aria-valuemin": this.min }),
        (this.valueDiv = e(
          "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
        ).appendTo(this.element)),
        this._refreshValue();
    },
    _destroy: function () {
      this.element
        .removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
        .removeAttr("role")
        .removeAttr("aria-valuemin")
        .removeAttr("aria-valuemax")
        .removeAttr("aria-valuenow"),
        this.valueDiv.remove();
    },
    value: function (e) {
      if (e === t) return this.options.value;
      (this.options.value = this._constrainedValue(e)), this._refreshValue();
    },
    _constrainedValue: function (e) {
      return (
        e === t && (e = this.options.value),
        (this.indeterminate = e === !1),
        typeof e != "number" && (e = 0),
        this.indeterminate
          ? !1
          : Math.min(this.options.max, Math.max(this.min, e))
      );
    },
    _setOptions: function (e) {
      var t = e.value;
      delete e.value,
        this._super(e),
        (this.options.value = this._constrainedValue(t)),
        this._refreshValue();
    },
    _setOption: function (e, t) {
      e === "max" && (t = Math.max(this.min, t)), this._super(e, t);
    },
    _percentage: function () {
      return this.indeterminate
        ? 100
        : (100 * (this.options.value - this.min)) /
            (this.options.max - this.min);
    },
    _refreshValue: function () {
      var t = this.options.value,
        n = this._percentage();
      this.valueDiv
        .toggle(this.indeterminate || t > this.min)
        .toggleClass("ui-corner-right", t === this.options.max)
        .width(n.toFixed(0) + "%"),
        this.element.toggleClass(
          "ui-progressbar-indeterminate",
          this.indeterminate
        ),
        this.indeterminate
          ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv ||
              (this.overlayDiv = e(
                "<div class='ui-progressbar-overlay'></div>"
              ).appendTo(this.valueDiv)))
          : (this.element.attr({
              "aria-valuemax": this.options.max,
              "aria-valuenow": t,
            }),
            this.overlayDiv &&
              (this.overlayDiv.remove(), (this.overlayDiv = null))),
        this.oldValue !== t && ((this.oldValue = t), this._trigger("change")),
        t === this.options.max && this._trigger("complete");
    },
  });
})(jQuery);
(function (e, t) {
  var n = 5;
  e.widget("ui.slider", e.ui.mouse, {
    version: "1.10.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null,
    },
    _create: function () {
      (this._keySliding = !1),
        (this._mouseSliding = !1),
        (this._animateOff = !0),
        (this._handleIndex = null),
        this._detectOrientation(),
        this._mouseInit(),
        this.element.addClass(
          "ui-slider ui-slider-" +
            this.orientation +
            " ui-widget" +
            " ui-widget-content" +
            " ui-corner-all"
        ),
        this._refresh(),
        this._setOption("disabled", this.options.disabled),
        (this._animateOff = !1);
    },
    _refresh: function () {
      this._createRange(),
        this._createHandles(),
        this._setupEvents(),
        this._refreshValue();
    },
    _createHandles: function () {
      var t,
        n,
        r = this.options,
        i = this.element
          .find(".ui-slider-handle")
          .addClass("ui-state-default ui-corner-all"),
        s =
          "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
        o = [];
      (n = (r.values && r.values.length) || 1),
        i.length > n && (i.slice(n).remove(), (i = i.slice(0, n)));
      for (t = i.length; t < n; t++) o.push(s);
      (this.handles = i.add(e(o.join("")).appendTo(this.element))),
        (this.handle = this.handles.eq(0)),
        this.handles.each(function (t) {
          e(this).data("ui-slider-handle-index", t);
        });
    },
    _createRange: function () {
      var t = this.options,
        n = "";
      t.range
        ? (t.range === !0 &&
            (t.values
              ? t.values.length && t.values.length !== 2
                ? (t.values = [t.values[0], t.values[0]])
                : e.isArray(t.values) && (t.values = t.values.slice(0))
              : (t.values = [this._valueMin(), this._valueMin()])),
          !this.range || !this.range.length
            ? ((this.range = e("<div></div>").appendTo(this.element)),
              (n = "ui-slider-range ui-widget-header ui-corner-all"))
            : this.range
                .removeClass("ui-slider-range-min ui-slider-range-max")
                .css({ left: "", bottom: "" }),
          this.range.addClass(
            n +
              (t.range === "min" || t.range === "max"
                ? " ui-slider-range-" + t.range
                : "")
          ))
        : (this.range = e([]));
    },
    _setupEvents: function () {
      var e = this.handles.add(this.range).filter("a");
      this._off(e),
        this._on(e, this._handleEvents),
        this._hoverable(e),
        this._focusable(e);
    },
    _destroy: function () {
      this.handles.remove(),
        this.range.remove(),
        this.element.removeClass(
          "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
        ),
        this._mouseDestroy();
    },
    _mouseCapture: function (t) {
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l = this,
        c = this.options;
      return c.disabled
        ? !1
        : ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (n = { x: t.pageX, y: t.pageY }),
          (r = this._normValueFromMouse(n)),
          (i = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (t) {
            var n = Math.abs(r - l.values(t));
            if (
              i > n ||
              (i === n && (t === l._lastChangedValue || l.values(t) === c.min))
            )
              (i = n), (s = e(this)), (o = t);
          }),
          (u = this._start(t, o)),
          u === !1
            ? !1
            : ((this._mouseSliding = !0),
              (this._handleIndex = o),
              s.addClass("ui-state-active").focus(),
              (a = s.offset()),
              (f = !e(t.target).parents().addBack().is(".ui-slider-handle")),
              (this._clickOffset = f
                ? { left: 0, top: 0 }
                : {
                    left: t.pageX - a.left - s.width() / 2,
                    top:
                      t.pageY -
                      a.top -
                      s.height() / 2 -
                      (parseInt(s.css("borderTopWidth"), 10) || 0) -
                      (parseInt(s.css("borderBottomWidth"), 10) || 0) +
                      (parseInt(s.css("marginTop"), 10) || 0),
                  }),
              this.handles.hasClass("ui-state-hover") || this._slide(t, o, r),
              (this._animateOff = !0),
              !0));
    },
    _mouseStart: function () {
      return !0;
    },
    _mouseDrag: function (e) {
      var t = { x: e.pageX, y: e.pageY },
        n = this._normValueFromMouse(t);
      return this._slide(e, this._handleIndex, n), !1;
    },
    _mouseStop: function (e) {
      return (
        this.handles.removeClass("ui-state-active"),
        (this._mouseSliding = !1),
        this._stop(e, this._handleIndex),
        this._change(e, this._handleIndex),
        (this._handleIndex = null),
        (this._clickOffset = null),
        (this._animateOff = !1),
        !1
      );
    },
    _detectOrientation: function () {
      this.orientation =
        this.options.orientation === "vertical" ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function (e) {
      var t, n, r, i, s;
      return (
        this.orientation === "horizontal"
          ? ((t = this.elementSize.width),
            (n =
              e.x -
              this.elementOffset.left -
              (this._clickOffset ? this._clickOffset.left : 0)))
          : ((t = this.elementSize.height),
            (n =
              e.y -
              this.elementOffset.top -
              (this._clickOffset ? this._clickOffset.top : 0))),
        (r = n / t),
        r > 1 && (r = 1),
        r < 0 && (r = 0),
        this.orientation === "vertical" && (r = 1 - r),
        (i = this._valueMax() - this._valueMin()),
        (s = this._valueMin() + r * i),
        this._trimAlignValue(s)
      );
    },
    _start: function (e, t) {
      var n = { handle: this.handles[t], value: this.value() };
      return (
        this.options.values &&
          this.options.values.length &&
          ((n.value = this.values(t)), (n.values = this.values())),
        this._trigger("start", e, n)
      );
    },
    _slide: function (e, t, n) {
      var r, i, s;
      this.options.values && this.options.values.length
        ? ((r = this.values(t ? 0 : 1)),
          this.options.values.length === 2 &&
            this.options.range === !0 &&
            ((t === 0 && n > r) || (t === 1 && n < r)) &&
            (n = r),
          n !== this.values(t) &&
            ((i = this.values()),
            (i[t] = n),
            (s = this._trigger("slide", e, {
              handle: this.handles[t],
              value: n,
              values: i,
            })),
            (r = this.values(t ? 0 : 1)),
            s !== !1 && this.values(t, n, !0)))
        : n !== this.value() &&
          ((s = this._trigger("slide", e, {
            handle: this.handles[t],
            value: n,
          })),
          s !== !1 && this.value(n));
    },
    _stop: function (e, t) {
      var n = { handle: this.handles[t], value: this.value() };
      this.options.values &&
        this.options.values.length &&
        ((n.value = this.values(t)), (n.values = this.values())),
        this._trigger("stop", e, n);
    },
    _change: function (e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var n = { handle: this.handles[t], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((n.value = this.values(t)), (n.values = this.values())),
          (this._lastChangedValue = t),
          this._trigger("change", e, n);
      }
    },
    value: function (e) {
      if (arguments.length) {
        (this.options.value = this._trimAlignValue(e)),
          this._refreshValue(),
          this._change(null, 0);
        return;
      }
      return this._value();
    },
    values: function (t, n) {
      var r, i, s;
      if (arguments.length > 1) {
        (this.options.values[t] = this._trimAlignValue(n)),
          this._refreshValue(),
          this._change(null, t);
        return;
      }
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0]))
        return this.options.values && this.options.values.length
          ? this._values(t)
          : this.value();
      (r = this.options.values), (i = arguments[0]);
      for (s = 0; s < r.length; s += 1)
        (r[s] = this._trimAlignValue(i[s])), this._change(null, s);
      this._refreshValue();
    },
    _setOption: function (t, n) {
      var r,
        i = 0;
      t === "range" &&
        this.options.range === !0 &&
        (n === "min"
          ? ((this.options.value = this._values(0)),
            (this.options.values = null))
          : n === "max" &&
            ((this.options.value = this._values(
              this.options.values.length - 1
            )),
            (this.options.values = null))),
        e.isArray(this.options.values) && (i = this.options.values.length),
        e.Widget.prototype._setOption.apply(this, arguments);
      switch (t) {
        case "orientation":
          this._detectOrientation(),
            this.element
              .removeClass("ui-slider-horizontal ui-slider-vertical")
              .addClass("ui-slider-" + this.orientation),
            this._refreshValue();
          break;
        case "value":
          (this._animateOff = !0),
            this._refreshValue(),
            this._change(null, 0),
            (this._animateOff = !1);
          break;
        case "values":
          (this._animateOff = !0), this._refreshValue();
          for (r = 0; r < i; r += 1) this._change(null, r);
          this._animateOff = !1;
          break;
        case "min":
        case "max":
          (this._animateOff = !0),
            this._refreshValue(),
            (this._animateOff = !1);
          break;
        case "range":
          (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
      }
    },
    _value: function () {
      var e = this.options.value;
      return (e = this._trimAlignValue(e)), e;
    },
    _values: function (e) {
      var t, n, r;
      if (arguments.length)
        return (t = this.options.values[e]), (t = this._trimAlignValue(t)), t;
      if (this.options.values && this.options.values.length) {
        n = this.options.values.slice();
        for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
        return n;
      }
      return [];
    },
    _trimAlignValue: function (e) {
      if (e <= this._valueMin()) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
        n = (e - this._valueMin()) % t,
        r = e - n;
      return (
        Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
      );
    },
    _valueMin: function () {
      return this.options.min;
    },
    _valueMax: function () {
      return this.options.max;
    },
    _refreshValue: function () {
      var t,
        n,
        r,
        i,
        s,
        o = this.options.range,
        u = this.options,
        a = this,
        f = this._animateOff ? !1 : u.animate,
        l = {};
      this.options.values && this.options.values.length
        ? this.handles.each(function (r) {
            (n =
              ((a.values(r) - a._valueMin()) /
                (a._valueMax() - a._valueMin())) *
              100),
              (l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%"),
              e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate),
              a.options.range === !0 &&
                (a.orientation === "horizontal"
                  ? (r === 0 &&
                      a.range
                        .stop(1, 1)
                        [f ? "animate" : "css"]({ left: n + "%" }, u.animate),
                    r === 1 &&
                      a.range[f ? "animate" : "css"](
                        { width: n - t + "%" },
                        { queue: !1, duration: u.animate }
                      ))
                  : (r === 0 &&
                      a.range
                        .stop(1, 1)
                        [f ? "animate" : "css"]({ bottom: n + "%" }, u.animate),
                    r === 1 &&
                      a.range[f ? "animate" : "css"](
                        { height: n - t + "%" },
                        { queue: !1, duration: u.animate }
                      ))),
              (t = n);
          })
        : ((r = this.value()),
          (i = this._valueMin()),
          (s = this._valueMax()),
          (n = s !== i ? ((r - i) / (s - i)) * 100 : 0),
          (l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%"),
          this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate),
          o === "min" &&
            this.orientation === "horizontal" &&
            this.range
              .stop(1, 1)
              [f ? "animate" : "css"]({ width: n + "%" }, u.animate),
          o === "max" &&
            this.orientation === "horizontal" &&
            this.range[f ? "animate" : "css"](
              { width: 100 - n + "%" },
              { queue: !1, duration: u.animate }
            ),
          o === "min" &&
            this.orientation === "vertical" &&
            this.range
              .stop(1, 1)
              [f ? "animate" : "css"]({ height: n + "%" }, u.animate),
          o === "max" &&
            this.orientation === "vertical" &&
            this.range[f ? "animate" : "css"](
              { height: 100 - n + "%" },
              { queue: !1, duration: u.animate }
            ));
    },
    _handleEvents: {
      keydown: function (t) {
        var r,
          i,
          s,
          o,
          u = e(t.target).data("ui-slider-handle-index");
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            t.preventDefault();
            if (!this._keySliding) {
              (this._keySliding = !0),
                e(t.target).addClass("ui-state-active"),
                (r = this._start(t, u));
              if (r === !1) return;
            }
        }
        (o = this.options.step),
          this.options.values && this.options.values.length
            ? (i = s = this.values(u))
            : (i = s = this.value());
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
            s = this._valueMin();
            break;
          case e.ui.keyCode.END:
            s = this._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            s = this._trimAlignValue(
              i + (this._valueMax() - this._valueMin()) / n
            );
            break;
          case e.ui.keyCode.PAGE_DOWN:
            s = this._trimAlignValue(
              i - (this._valueMax() - this._valueMin()) / n
            );
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (i === this._valueMax()) return;
            s = this._trimAlignValue(i + o);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (i === this._valueMin()) return;
            s = this._trimAlignValue(i - o);
        }
        this._slide(t, u, s);
      },
      click: function (e) {
        e.preventDefault();
      },
      keyup: function (t) {
        var n = e(t.target).data("ui-slider-handle-index");
        this._keySliding &&
          ((this._keySliding = !1),
          this._stop(t, n),
          this._change(t, n),
          e(t.target).removeClass("ui-state-active"));
      },
    },
  });
})(jQuery);
(function (e) {
  function t(e) {
    return function () {
      var t = this.element.val();
      e.apply(this, arguments),
        this._refresh(),
        t !== this.element.val() && this._trigger("change");
    };
  }
  e.widget("ui.spinner", {
    version: "1.10.1",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      culture: null,
      icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null,
    },
    _create: function () {
      this._setOption("max", this.options.max),
        this._setOption("min", this.options.min),
        this._setOption("step", this.options.step),
        this._value(this.element.val(), !0),
        this._draw(),
        this._on(this._events),
        this._refresh(),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _getCreateOptions: function () {
      var t = {},
        n = this.element;
      return (
        e.each(["min", "max", "step"], function (e, r) {
          var i = n.attr(r);
          i !== undefined && i.length && (t[r] = i);
        }),
        t
      );
    },
    _events: {
      keydown: function (e) {
        this._start(e) && this._keydown(e) && e.preventDefault();
      },
      keyup: "_stop",
      focus: function () {
        this.previous = this.element.val();
      },
      blur: function (e) {
        if (this.cancelBlur) {
          delete this.cancelBlur;
          return;
        }
        this._refresh(),
          this.previous !== this.element.val() && this._trigger("change", e);
      },
      mousewheel: function (e, t) {
        if (!t) return;
        if (!this.spinning && !this._start(e)) return !1;
        this._spin((t > 0 ? 1 : -1) * this.options.step, e),
          clearTimeout(this.mousewheelTimer),
          (this.mousewheelTimer = this._delay(function () {
            this.spinning && this._stop(e);
          }, 100)),
          e.preventDefault();
      },
      "mousedown .ui-spinner-button": function (t) {
        function r() {
          var e = this.element[0] === this.document[0].activeElement;
          e ||
            (this.element.focus(),
            (this.previous = n),
            this._delay(function () {
              this.previous = n;
            }));
        }
        var n;
        (n =
          this.element[0] === this.document[0].activeElement
            ? this.previous
            : this.element.val()),
          t.preventDefault(),
          r.call(this),
          (this.cancelBlur = !0),
          this._delay(function () {
            delete this.cancelBlur, r.call(this);
          });
        if (this._start(t) === !1) return;
        this._repeat(
          null,
          e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
          t
        );
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function (t) {
        if (!e(t.currentTarget).hasClass("ui-state-active")) return;
        if (this._start(t) === !1) return !1;
        this._repeat(
          null,
          e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
          t
        );
      },
      "mouseleave .ui-spinner-button": "_stop",
    },
    _draw: function () {
      var e = (this.uiSpinner = this.element
        .addClass("ui-spinner-input")
        .attr("autocomplete", "off")
        .wrap(this._uiSpinnerHtml())
        .parent()
        .append(this._buttonHtml()));
      this.element.attr("role", "spinbutton"),
        (this.buttons = e
          .find(".ui-spinner-button")
          .attr("tabIndex", -1)
          .button()
          .removeClass("ui-corner-all")),
        this.buttons.height() > Math.ceil(e.height() * 0.5) &&
          e.height() > 0 &&
          e.height(e.height()),
        this.options.disabled && this.disable();
    },
    _keydown: function (t) {
      var n = this.options,
        r = e.ui.keyCode;
      switch (t.keyCode) {
        case r.UP:
          return this._repeat(null, 1, t), !0;
        case r.DOWN:
          return this._repeat(null, -1, t), !0;
        case r.PAGE_UP:
          return this._repeat(null, n.page, t), !0;
        case r.PAGE_DOWN:
          return this._repeat(null, -n.page, t), !0;
      }
      return !1;
    },
    _uiSpinnerHtml: function () {
      return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
    },
    _buttonHtml: function () {
      return (
        "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
        this.options.icons.up +
        "'>&#9650;</span>" +
        "</a>" +
        "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
        "<span class='ui-icon " +
        this.options.icons.down +
        "'>&#9660;</span>" +
        "</a>"
      );
    },
    _start: function (e) {
      return !this.spinning && this._trigger("start", e) === !1
        ? !1
        : (this.counter || (this.counter = 1), (this.spinning = !0), !0);
    },
    _repeat: function (e, t, n) {
      (e = e || 500),
        clearTimeout(this.timer),
        (this.timer = this._delay(function () {
          this._repeat(40, t, n);
        }, e)),
        this._spin(t * this.options.step, n);
    },
    _spin: function (e, t) {
      var n = this.value() || 0;
      this.counter || (this.counter = 1),
        (n = this._adjustValue(n + e * this._increment(this.counter)));
      if (!this.spinning || this._trigger("spin", t, { value: n }) !== !1)
        this._value(n), this.counter++;
    },
    _increment: function (t) {
      var n = this.options.incremental;
      return n
        ? e.isFunction(n)
          ? n(t)
          : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)
        : 1;
    },
    _precision: function () {
      var e = this._precisionOf(this.options.step);
      return (
        this.options.min !== null &&
          (e = Math.max(e, this._precisionOf(this.options.min))),
        e
      );
    },
    _precisionOf: function (e) {
      var t = e.toString(),
        n = t.indexOf(".");
      return n === -1 ? 0 : t.length - n - 1;
    },
    _adjustValue: function (e) {
      var t,
        n,
        r = this.options;
      return (
        (t = r.min !== null ? r.min : 0),
        (n = e - t),
        (n = Math.round(n / r.step) * r.step),
        (e = t + n),
        (e = parseFloat(e.toFixed(this._precision()))),
        r.max !== null && e > r.max
          ? r.max
          : r.min !== null && e < r.min
          ? r.min
          : e
      );
    },
    _stop: function (e) {
      if (!this.spinning) return;
      clearTimeout(this.timer),
        clearTimeout(this.mousewheelTimer),
        (this.counter = 0),
        (this.spinning = !1),
        this._trigger("stop", e);
    },
    _setOption: function (e, t) {
      if (e === "culture" || e === "numberFormat") {
        var n = this._parse(this.element.val());
        (this.options[e] = t), this.element.val(this._format(n));
        return;
      }
      (e === "max" || e === "min" || e === "step") &&
        typeof t == "string" &&
        (t = this._parse(t)),
        e === "icons" &&
          (this.buttons
            .first()
            .find(".ui-icon")
            .removeClass(this.options.icons.up)
            .addClass(t.up),
          this.buttons
            .last()
            .find(".ui-icon")
            .removeClass(this.options.icons.down)
            .addClass(t.down)),
        this._super(e, t),
        e === "disabled" &&
          (t
            ? (this.element.prop("disabled", !0),
              this.buttons.button("disable"))
            : (this.element.prop("disabled", !1),
              this.buttons.button("enable")));
    },
    _setOptions: t(function (e) {
      this._super(e), this._value(this.element.val());
    }),
    _parse: function (e) {
      return (
        typeof e == "string" &&
          e !== "" &&
          (e =
            window.Globalize && this.options.numberFormat
              ? Globalize.parseFloat(e, 10, this.options.culture)
              : +e),
        e === "" || isNaN(e) ? null : e
      );
    },
    _format: function (e) {
      return e === ""
        ? ""
        : window.Globalize && this.options.numberFormat
        ? Globalize.format(e, this.options.numberFormat, this.options.culture)
        : e;
    },
    _refresh: function () {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val()),
      });
    },
    _value: function (e, t) {
      var n;
      e !== "" &&
        ((n = this._parse(e)),
        n !== null && (t || (n = this._adjustValue(n)), (e = this._format(n)))),
        this.element.val(e),
        this._refresh();
    },
    _destroy: function () {
      this.element
        .removeClass("ui-spinner-input")
        .prop("disabled", !1)
        .removeAttr("autocomplete")
        .removeAttr("role")
        .removeAttr("aria-valuemin")
        .removeAttr("aria-valuemax")
        .removeAttr("aria-valuenow"),
        this.uiSpinner.replaceWith(this.element);
    },
    stepUp: t(function (e) {
      this._stepUp(e);
    }),
    _stepUp: function (e) {
      this._start() && (this._spin((e || 1) * this.options.step), this._stop());
    },
    stepDown: t(function (e) {
      this._stepDown(e);
    }),
    _stepDown: function (e) {
      this._start() &&
        (this._spin((e || 1) * -this.options.step), this._stop());
    },
    pageUp: t(function (e) {
      this._stepUp((e || 1) * this.options.page);
    }),
    pageDown: t(function (e) {
      this._stepDown((e || 1) * this.options.page);
    }),
    value: function (e) {
      if (!arguments.length) return this._parse(this.element.val());
      t(this._value).call(this, e);
    },
    widget: function () {
      return this.uiSpinner;
    },
  });
})(jQuery);
(function (e, t) {
  function i() {
    return ++n;
  }
  function s(e) {
    return (
      e.hash.length > 1 &&
      decodeURIComponent(e.href.replace(r, "")) ===
        decodeURIComponent(location.href.replace(r, ""))
    );
  }
  var n = 0,
    r = /#.*$/;
  e.widget("ui.tabs", {
    version: "1.10.1",
    delay: 300,
    options: {
      active: null,
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null,
    },
    _create: function () {
      var t = this,
        n = this.options;
      (this.running = !1),
        this.element
          .addClass("ui-tabs ui-widget ui-widget-content ui-corner-all")
          .toggleClass("ui-tabs-collapsible", n.collapsible)
          .delegate(
            ".ui-tabs-nav > li",
            "mousedown" + this.eventNamespace,
            function (t) {
              e(this).is(".ui-state-disabled") && t.preventDefault();
            }
          )
          .delegate(
            ".ui-tabs-anchor",
            "focus" + this.eventNamespace,
            function () {
              e(this).closest("li").is(".ui-state-disabled") && this.blur();
            }
          ),
        this._processTabs(),
        (n.active = this._initialActive()),
        e.isArray(n.disabled) &&
          (n.disabled = e
            .unique(
              n.disabled.concat(
                e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                  return t.tabs.index(e);
                })
              )
            )
            .sort()),
        this.options.active !== !1 && this.anchors.length
          ? (this.active = this._findActive(n.active))
          : (this.active = e()),
        this._refresh(),
        this.active.length && this.load(n.active);
    },
    _initialActive: function () {
      var t = this.options.active,
        n = this.options.collapsible,
        r = location.hash.substring(1);
      if (t === null) {
        r &&
          this.tabs.each(function (n, i) {
            if (e(i).attr("aria-controls") === r) return (t = n), !1;
          }),
          t === null &&
            (t = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
        if (t === null || t === -1) t = this.tabs.length ? 0 : !1;
      }
      return (
        t !== !1 &&
          ((t = this.tabs.index(this.tabs.eq(t))),
          t === -1 && (t = n ? !1 : 0)),
        !n && t === !1 && this.anchors.length && (t = 0),
        t
      );
    },
    _getCreateEventData: function () {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : e(),
      };
    },
    _tabKeydown: function (t) {
      var n = e(this.document[0].activeElement).closest("li"),
        r = this.tabs.index(n),
        i = !0;
      if (this._handlePageNav(t)) return;
      switch (t.keyCode) {
        case e.ui.keyCode.RIGHT:
        case e.ui.keyCode.DOWN:
          r++;
          break;
        case e.ui.keyCode.UP:
        case e.ui.keyCode.LEFT:
          (i = !1), r--;
          break;
        case e.ui.keyCode.END:
          r = this.anchors.length - 1;
          break;
        case e.ui.keyCode.HOME:
          r = 0;
          break;
        case e.ui.keyCode.SPACE:
          t.preventDefault(), clearTimeout(this.activating), this._activate(r);
          return;
        case e.ui.keyCode.ENTER:
          t.preventDefault(),
            clearTimeout(this.activating),
            this._activate(r === this.options.active ? !1 : r);
          return;
        default:
          return;
      }
      t.preventDefault(),
        clearTimeout(this.activating),
        (r = this._focusNextTab(r, i)),
        t.ctrlKey ||
          (n.attr("aria-selected", "false"),
          this.tabs.eq(r).attr("aria-selected", "true"),
          (this.activating = this._delay(function () {
            this.option("active", r);
          }, this.delay)));
    },
    _panelKeydown: function (t) {
      if (this._handlePageNav(t)) return;
      t.ctrlKey &&
        t.keyCode === e.ui.keyCode.UP &&
        (t.preventDefault(), this.active.focus());
    },
    _handlePageNav: function (t) {
      if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP)
        return (
          this._activate(this._focusNextTab(this.options.active - 1, !1)), !0
        );
      if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN)
        return (
          this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
        );
    },
    _findNextTab: function (t, n) {
      function i() {
        return t > r && (t = 0), t < 0 && (t = r), t;
      }
      var r = this.tabs.length - 1;
      while (e.inArray(i(), this.options.disabled) !== -1)
        t = n ? t + 1 : t - 1;
      return t;
    },
    _focusNextTab: function (e, t) {
      return (e = this._findNextTab(e, t)), this.tabs.eq(e).focus(), e;
    },
    _setOption: function (e, t) {
      if (e === "active") {
        this._activate(t);
        return;
      }
      if (e === "disabled") {
        this._setupDisabled(t);
        return;
      }
      this._super(e, t),
        e === "collapsible" &&
          (this.element.toggleClass("ui-tabs-collapsible", t),
          !t && this.options.active === !1 && this._activate(0)),
        e === "event" && this._setupEvents(t),
        e === "heightStyle" && this._setupHeightStyle(t);
    },
    _tabId: function (e) {
      return e.attr("aria-controls") || "ui-tabs-" + i();
    },
    _sanitizeSelector: function (e) {
      return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function () {
      var t = this.options,
        n = this.tablist.children(":has(a[href])");
      (t.disabled = e.map(n.filter(".ui-state-disabled"), function (e) {
        return n.index(e);
      })),
        this._processTabs(),
        t.active === !1 || !this.anchors.length
          ? ((t.active = !1), (this.active = e()))
          : this.active.length && !e.contains(this.tablist[0], this.active[0])
          ? this.tabs.length === t.disabled.length
            ? ((t.active = !1), (this.active = e()))
            : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))
          : (t.active = this.tabs.index(this.active)),
        this._refresh();
    },
    _refresh: function () {
      this._setupDisabled(this.options.disabled),
        this._setupEvents(this.options.event),
        this._setupHeightStyle(this.options.heightStyle),
        this.tabs
          .not(this.active)
          .attr({ "aria-selected": "false", tabIndex: -1 }),
        this.panels
          .not(this._getPanelForTab(this.active))
          .hide()
          .attr({ "aria-expanded": "false", "aria-hidden": "true" }),
        this.active.length
          ? (this.active
              .addClass("ui-tabs-active ui-state-active")
              .attr({ "aria-selected": "true", tabIndex: 0 }),
            this._getPanelForTab(this.active)
              .show()
              .attr({ "aria-expanded": "true", "aria-hidden": "false" }))
          : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function () {
      var t = this;
      (this.tablist = this._getList()
        .addClass(
          "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
        )
        .attr("role", "tablist")),
        (this.tabs = this.tablist
          .find("> li:has(a[href])")
          .addClass("ui-state-default ui-corner-top")
          .attr({ role: "tab", tabIndex: -1 })),
        (this.anchors = this.tabs
          .map(function () {
            return e("a", this)[0];
          })
          .addClass("ui-tabs-anchor")
          .attr({ role: "presentation", tabIndex: -1 })),
        (this.panels = e()),
        this.anchors.each(function (n, r) {
          var i,
            o,
            u,
            a = e(r).uniqueId().attr("id"),
            f = e(r).closest("li"),
            l = f.attr("aria-controls");
          s(r)
            ? ((i = r.hash), (o = t.element.find(t._sanitizeSelector(i))))
            : ((u = t._tabId(f)),
              (i = "#" + u),
              (o = t.element.find(i)),
              o.length ||
                ((o = t._createPanel(u)),
                o.insertAfter(t.panels[n - 1] || t.tablist)),
              o.attr("aria-live", "polite")),
            o.length && (t.panels = t.panels.add(o)),
            l && f.data("ui-tabs-aria-controls", l),
            f.attr({ "aria-controls": i.substring(1), "aria-labelledby": a }),
            o.attr("aria-labelledby", a);
        }),
        this.panels
          .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
          .attr("role", "tabpanel");
    },
    _getList: function () {
      return this.element.find("ol,ul").eq(0);
    },
    _createPanel: function (t) {
      return e("<div>")
        .attr("id", t)
        .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
        .data("ui-tabs-destroy", !0);
    },
    _setupDisabled: function (t) {
      e.isArray(t) &&
        (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1));
      for (var n = 0, r; (r = this.tabs[n]); n++)
        t === !0 || e.inArray(n, t) !== -1
          ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true")
          : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
      this.options.disabled = t;
    },
    _setupEvents: function (t) {
      var n = {
        click: function (e) {
          e.preventDefault();
        },
      };
      t &&
        e.each(t.split(" "), function (e, t) {
          n[t] = "_eventHandler";
        }),
        this._off(this.anchors.add(this.tabs).add(this.panels)),
        this._on(this.anchors, n),
        this._on(this.tabs, { keydown: "_tabKeydown" }),
        this._on(this.panels, { keydown: "_panelKeydown" }),
        this._focusable(this.tabs),
        this._hoverable(this.tabs);
    },
    _setupHeightStyle: function (t) {
      var n,
        r = this.element.parent();
      t === "fill"
        ? ((n = r.height()),
          (n -= this.element.outerHeight() - this.element.height()),
          this.element.siblings(":visible").each(function () {
            var t = e(this),
              r = t.css("position");
            if (r === "absolute" || r === "fixed") return;
            n -= t.outerHeight(!0);
          }),
          this.element
            .children()
            .not(this.panels)
            .each(function () {
              n -= e(this).outerHeight(!0);
            }),
          this.panels
            .each(function () {
              e(this).height(
                Math.max(0, n - e(this).innerHeight() + e(this).height())
              );
            })
            .css("overflow", "auto"))
        : t === "auto" &&
          ((n = 0),
          this.panels
            .each(function () {
              n = Math.max(n, e(this).height("").height());
            })
            .height(n));
    },
    _eventHandler: function (t) {
      var n = this.options,
        r = this.active,
        i = e(t.currentTarget),
        s = i.closest("li"),
        o = s[0] === r[0],
        u = o && n.collapsible,
        a = u ? e() : this._getPanelForTab(s),
        f = r.length ? this._getPanelForTab(r) : e(),
        l = { oldTab: r, oldPanel: f, newTab: u ? e() : s, newPanel: a };
      t.preventDefault();
      if (
        s.hasClass("ui-state-disabled") ||
        s.hasClass("ui-tabs-loading") ||
        this.running ||
        (o && !n.collapsible) ||
        this._trigger("beforeActivate", t, l) === !1
      )
        return;
      (n.active = u ? !1 : this.tabs.index(s)),
        (this.active = o ? e() : s),
        this.xhr && this.xhr.abort(),
        !f.length &&
          !a.length &&
          e.error("jQuery UI Tabs: Mismatching fragment identifier."),
        a.length && this.load(this.tabs.index(s), t),
        this._toggle(t, l);
    },
    _toggle: function (t, n) {
      function o() {
        (r.running = !1), r._trigger("activate", t, n);
      }
      function u() {
        n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
          i.length && r.options.show
            ? r._show(i, r.options.show, o)
            : (i.show(), o());
      }
      var r = this,
        i = n.newPanel,
        s = n.oldPanel;
      (this.running = !0),
        s.length && this.options.hide
          ? this._hide(s, this.options.hide, function () {
              n.oldTab
                .closest("li")
                .removeClass("ui-tabs-active ui-state-active"),
                u();
            })
          : (n.oldTab
              .closest("li")
              .removeClass("ui-tabs-active ui-state-active"),
            s.hide(),
            u()),
        s.attr({ "aria-expanded": "false", "aria-hidden": "true" }),
        n.oldTab.attr("aria-selected", "false"),
        i.length && s.length
          ? n.oldTab.attr("tabIndex", -1)
          : i.length &&
            this.tabs
              .filter(function () {
                return e(this).attr("tabIndex") === 0;
              })
              .attr("tabIndex", -1),
        i.attr({ "aria-expanded": "true", "aria-hidden": "false" }),
        n.newTab.attr({ "aria-selected": "true", tabIndex: 0 });
    },
    _activate: function (t) {
      var n,
        r = this._findActive(t);
      if (r[0] === this.active[0]) return;
      r.length || (r = this.active),
        (n = r.find(".ui-tabs-anchor")[0]),
        this._eventHandler({
          target: n,
          currentTarget: n,
          preventDefault: e.noop,
        });
    },
    _findActive: function (t) {
      return t === !1 ? e() : this.tabs.eq(t);
    },
    _getIndex: function (e) {
      return (
        typeof e == "string" &&
          (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))),
        e
      );
    },
    _destroy: function () {
      this.xhr && this.xhr.abort(),
        this.element.removeClass(
          "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
        ),
        this.tablist
          .removeClass(
            "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
          )
          .removeAttr("role"),
        this.anchors
          .removeClass("ui-tabs-anchor")
          .removeAttr("role")
          .removeAttr("tabIndex")
          .removeUniqueId(),
        this.tabs.add(this.panels).each(function () {
          e.data(this, "ui-tabs-destroy")
            ? e(this).remove()
            : e(this)
                .removeClass(
                  "ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel"
                )
                .removeAttr("tabIndex")
                .removeAttr("aria-live")
                .removeAttr("aria-busy")
                .removeAttr("aria-selected")
                .removeAttr("aria-labelledby")
                .removeAttr("aria-hidden")
                .removeAttr("aria-expanded")
                .removeAttr("role");
        }),
        this.tabs.each(function () {
          var t = e(this),
            n = t.data("ui-tabs-aria-controls");
          n
            ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls")
            : t.removeAttr("aria-controls");
        }),
        this.panels.show(),
        this.options.heightStyle !== "content" && this.panels.css("height", "");
    },
    enable: function (n) {
      var r = this.options.disabled;
      if (r === !1) return;
      n === t
        ? (r = !1)
        : ((n = this._getIndex(n)),
          e.isArray(r)
            ? (r = e.map(r, function (e) {
                return e !== n ? e : null;
              }))
            : (r = e.map(this.tabs, function (e, t) {
                return t !== n ? t : null;
              }))),
        this._setupDisabled(r);
    },
    disable: function (n) {
      var r = this.options.disabled;
      if (r === !0) return;
      if (n === t) r = !0;
      else {
        n = this._getIndex(n);
        if (e.inArray(n, r) !== -1) return;
        e.isArray(r) ? (r = e.merge([n], r).sort()) : (r = [n]);
      }
      this._setupDisabled(r);
    },
    load: function (t, n) {
      t = this._getIndex(t);
      var r = this,
        i = this.tabs.eq(t),
        o = i.find(".ui-tabs-anchor"),
        u = this._getPanelForTab(i),
        a = { tab: i, panel: u };
      if (s(o[0])) return;
      (this.xhr = e.ajax(this._ajaxSettings(o, n, a))),
        this.xhr &&
          this.xhr.statusText !== "canceled" &&
          (i.addClass("ui-tabs-loading"),
          u.attr("aria-busy", "true"),
          this.xhr
            .success(function (e) {
              setTimeout(function () {
                u.html(e), r._trigger("load", n, a);
              }, 1);
            })
            .complete(function (e, t) {
              setTimeout(function () {
                t === "abort" && r.panels.stop(!1, !0),
                  i.removeClass("ui-tabs-loading"),
                  u.removeAttr("aria-busy"),
                  e === r.xhr && delete r.xhr;
              }, 1);
            }));
    },
    _ajaxSettings: function (t, n, r) {
      var i = this;
      return {
        url: t.attr("href"),
        beforeSend: function (t, s) {
          return i._trigger(
            "beforeLoad",
            n,
            e.extend({ jqXHR: t, ajaxSettings: s }, r)
          );
        },
      };
    },
    _getPanelForTab: function (t) {
      var n = e(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + n));
    },
  });
})(jQuery);
(function (e) {
  function n(t, n) {
    var r = (t.attr("aria-describedby") || "").split(/\s+/);
    r.push(n),
      t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")));
  }
  function r(t) {
    var n = t.data("ui-tooltip-id"),
      r = (t.attr("aria-describedby") || "").split(/\s+/),
      i = e.inArray(n, r);
    i !== -1 && r.splice(i, 1),
      t.removeData("ui-tooltip-id"),
      (r = e.trim(r.join(" "))),
      r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby");
  }
  var t = 0;
  e.widget("ui.tooltip", {
    version: "1.10.1",
    options: {
      content: function () {
        var t = e(this).attr("title") || "";
        return e("<a>").text(t).html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip",
      },
      show: !0,
      tooltipClass: null,
      track: !1,
      close: null,
      open: null,
    },
    _create: function () {
      this._on({ mouseover: "open", focusin: "open" }),
        (this.tooltips = {}),
        (this.parents = {}),
        this.options.disabled && this._disable();
    },
    _setOption: function (t, n) {
      var r = this;
      if (t === "disabled") {
        this[n ? "_disable" : "_enable"](), (this.options[t] = n);
        return;
      }
      this._super(t, n),
        t === "content" &&
          e.each(this.tooltips, function (e, t) {
            r._updateContent(t);
          });
    },
    _disable: function () {
      var t = this;
      e.each(this.tooltips, function (n, r) {
        var i = e.Event("blur");
        (i.target = i.currentTarget = r[0]), t.close(i, !0);
      }),
        this.element
          .find(this.options.items)
          .addBack()
          .each(function () {
            var t = e(this);
            t.is("[title]") &&
              t.data("ui-tooltip-title", t.attr("title")).attr("title", "");
          });
    },
    _enable: function () {
      this.element
        .find(this.options.items)
        .addBack()
        .each(function () {
          var t = e(this);
          t.data("ui-tooltip-title") &&
            t.attr("title", t.data("ui-tooltip-title"));
        });
    },
    open: function (t) {
      var n = this,
        r = e(t ? t.target : this.element).closest(this.options.items);
      if (!r.length || r.data("ui-tooltip-id")) return;
      r.attr("title") && r.data("ui-tooltip-title", r.attr("title")),
        r.data("ui-tooltip-open", !0),
        t &&
          t.type === "mouseover" &&
          r.parents().each(function () {
            var t = e(this),
              r;
            t.data("ui-tooltip-open") &&
              ((r = e.Event("blur")),
              (r.target = r.currentTarget = this),
              n.close(r, !0)),
              t.attr("title") &&
                (t.uniqueId(),
                (n.parents[this.id] = {
                  element: this,
                  title: t.attr("title"),
                }),
                t.attr("title", ""));
          }),
        this._updateContent(r, t);
    },
    _updateContent: function (e, t) {
      var n,
        r = this.options.content,
        i = this,
        s = t ? t.type : null;
      if (typeof r == "string") return this._open(t, e, r);
      (n = r.call(e[0], function (n) {
        if (!e.data("ui-tooltip-open")) return;
        i._delay(function () {
          t && (t.type = s), this._open(t, e, n);
        });
      })),
        n && this._open(t, e, n);
    },
    _open: function (t, r, i) {
      function f(e) {
        a.of = e;
        if (s.is(":hidden")) return;
        s.position(a);
      }
      var s,
        o,
        u,
        a = e.extend({}, this.options.position);
      if (!i) return;
      s = this._find(r);
      if (s.length) {
        s.find(".ui-tooltip-content").html(i);
        return;
      }
      r.is("[title]") &&
        (t && t.type === "mouseover"
          ? r.attr("title", "")
          : r.removeAttr("title")),
        (s = this._tooltip(r)),
        n(r, s.attr("id")),
        s.find(".ui-tooltip-content").html(i),
        this.options.track && t && /^mouse/.test(t.type)
          ? (this._on(this.document, { mousemove: f }), f(t))
          : s.position(e.extend({ of: r }, this.options.position)),
        s.hide(),
        this._show(s, this.options.show),
        this.options.show &&
          this.options.show.delay &&
          (u = this.delayedShow =
            setInterval(function () {
              s.is(":visible") && (f(a.of), clearInterval(u));
            }, e.fx.interval)),
        this._trigger("open", t, { tooltip: s }),
        (o = {
          keyup: function (t) {
            if (t.keyCode === e.ui.keyCode.ESCAPE) {
              var n = e.Event(t);
              (n.currentTarget = r[0]), this.close(n, !0);
            }
          },
          remove: function () {
            this._removeTooltip(s);
          },
        });
      if (!t || t.type === "mouseover") o.mouseleave = "close";
      if (!t || t.type === "focusin") o.focusout = "close";
      this._on(!0, r, o);
    },
    close: function (t) {
      var n = this,
        i = e(t ? t.currentTarget : this.element),
        s = this._find(i);
      if (this.closing) return;
      clearInterval(this.delayedShow),
        i.data("ui-tooltip-title") &&
          i.attr("title", i.data("ui-tooltip-title")),
        r(i),
        s.stop(!0),
        this._hide(s, this.options.hide, function () {
          n._removeTooltip(e(this));
        }),
        i.removeData("ui-tooltip-open"),
        this._off(i, "mouseleave focusout keyup"),
        i[0] !== this.element[0] && this._off(i, "remove"),
        this._off(this.document, "mousemove"),
        t &&
          t.type === "mouseleave" &&
          e.each(this.parents, function (t, r) {
            e(r.element).attr("title", r.title), delete n.parents[t];
          }),
        (this.closing = !0),
        this._trigger("close", t, { tooltip: s }),
        (this.closing = !1);
    },
    _tooltip: function (n) {
      var r = "ui-tooltip-" + t++,
        i = e("<div>")
          .attr({ id: r, role: "tooltip" })
          .addClass(
            "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
              (this.options.tooltipClass || "")
          );
      return (
        e("<div>").addClass("ui-tooltip-content").appendTo(i),
        i.appendTo(this.document[0].body),
        (this.tooltips[r] = n),
        i
      );
    },
    _find: function (t) {
      var n = t.data("ui-tooltip-id");
      return n ? e("#" + n) : e();
    },
    _removeTooltip: function (e) {
      e.remove(), delete this.tooltips[e.attr("id")];
    },
    _destroy: function () {
      var t = this;
      e.each(this.tooltips, function (n, r) {
        var i = e.Event("blur");
        (i.target = i.currentTarget = r[0]),
          t.close(i, !0),
          e("#" + n).remove(),
          r.data("ui-tooltip-title") &&
            (r.attr("title", r.data("ui-tooltip-title")),
            r.removeData("ui-tooltip-title"));
      });
    },
  });
})(jQuery);
jQuery.effects ||
  (function (e, t) {
    var n = "ui-effects-";
    (e.effects = { effect: {} }),
      (function (e, t) {
        function h(e, t, n) {
          var r = u[t.type] || {};
          return e == null
            ? n || !t.def
              ? null
              : t.def
            : ((e = r.floor ? ~~e : parseFloat(e)),
              isNaN(e)
                ? t.def
                : r.mod
                ? (e + r.mod) % r.mod
                : 0 > e
                ? 0
                : r.max < e
                ? r.max
                : e);
        }
        function p(t) {
          var n = s(),
            r = (n._rgba = []);
          return (
            (t = t.toLowerCase()),
            c(i, function (e, i) {
              var s,
                u = i.re.exec(t),
                a = u && i.parse(u),
                f = i.space || "rgba";
              if (a)
                return (
                  (s = n[f](a)),
                  (n[o[f].cache] = s[o[f].cache]),
                  (r = n._rgba = s._rgba),
                  !1
                );
            }),
            r.length
              ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent), n)
              : l[t]
          );
        }
        function d(e, t, n) {
          return (
            (n = (n + 1) % 1),
            n * 6 < 1
              ? e + (t - e) * n * 6
              : n * 2 < 1
              ? t
              : n * 3 < 2
              ? e + (t - e) * (2 / 3 - n) * 6
              : e
          );
        }
        var n =
            "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
          r = /^([\-+])=\s*(\d+\.?\d*)/,
          i = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (e) {
                return [e[1], e[2], e[3], e[4]];
              },
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (e) {
                return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]];
              },
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (e) {
                return [
                  parseInt(e[1], 16),
                  parseInt(e[2], 16),
                  parseInt(e[3], 16),
                ];
              },
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (e) {
                return [
                  parseInt(e[1] + e[1], 16),
                  parseInt(e[2] + e[2], 16),
                  parseInt(e[3] + e[3], 16),
                ];
              },
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: "hsla",
              parse: function (e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]];
              },
            },
          ],
          s = (e.Color = function (t, n, r, i) {
            return new e.Color.fn.parse(t, n, r, i);
          }),
          o = {
            rgba: {
              props: {
                red: { idx: 0, type: "byte" },
                green: { idx: 1, type: "byte" },
                blue: { idx: 2, type: "byte" },
              },
            },
            hsla: {
              props: {
                hue: { idx: 0, type: "degrees" },
                saturation: { idx: 1, type: "percent" },
                lightness: { idx: 2, type: "percent" },
              },
            },
          },
          u = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 },
          },
          a = (s.support = {}),
          f = e("<p>")[0],
          l,
          c = e.each;
        (f.style.cssText = "background-color:rgba(1,1,1,.5)"),
          (a.rgba = f.style.backgroundColor.indexOf("rgba") > -1),
          c(o, function (e, t) {
            (t.cache = "_" + e),
              (t.props.alpha = { idx: 3, type: "percent", def: 1 });
          }),
          (s.fn = e.extend(s.prototype, {
            parse: function (n, r, i, u) {
              if (n === t) return (this._rgba = [null, null, null, null]), this;
              if (n.jquery || n.nodeType) (n = e(n).css(r)), (r = t);
              var a = this,
                f = e.type(n),
                d = (this._rgba = []);
              r !== t && ((n = [n, r, i, u]), (f = "array"));
              if (f === "string") return this.parse(p(n) || l._default);
              if (f === "array")
                return (
                  c(o.rgba.props, function (e, t) {
                    d[t.idx] = h(n[t.idx], t);
                  }),
                  this
                );
              if (f === "object")
                return (
                  n instanceof s
                    ? c(o, function (e, t) {
                        n[t.cache] && (a[t.cache] = n[t.cache].slice());
                      })
                    : c(o, function (t, r) {
                        var i = r.cache;
                        c(r.props, function (e, t) {
                          if (!a[i] && r.to) {
                            if (e === "alpha" || n[e] == null) return;
                            a[i] = r.to(a._rgba);
                          }
                          a[i][t.idx] = h(n[e], t, !0);
                        }),
                          a[i] &&
                            e.inArray(null, a[i].slice(0, 3)) < 0 &&
                            ((a[i][3] = 1), r.from && (a._rgba = r.from(a[i])));
                      }),
                  this
                );
            },
            is: function (e) {
              var t = s(e),
                n = !0,
                r = this;
              return (
                c(o, function (e, i) {
                  var s,
                    o = t[i.cache];
                  return (
                    o &&
                      ((s = r[i.cache] || (i.to && i.to(r._rgba)) || []),
                      c(i.props, function (e, t) {
                        if (o[t.idx] != null)
                          return (n = o[t.idx] === s[t.idx]), n;
                      })),
                    n
                  );
                }),
                n
              );
            },
            _space: function () {
              var e = [],
                t = this;
              return (
                c(o, function (n, r) {
                  t[r.cache] && e.push(n);
                }),
                e.pop()
              );
            },
            transition: function (e, t) {
              var n = s(e),
                r = n._space(),
                i = o[r],
                a = this.alpha() === 0 ? s("transparent") : this,
                f = a[i.cache] || i.to(a._rgba),
                l = f.slice();
              return (
                (n = n[i.cache]),
                c(i.props, function (e, r) {
                  var i = r.idx,
                    s = f[i],
                    o = n[i],
                    a = u[r.type] || {};
                  if (o === null) return;
                  s === null
                    ? (l[i] = o)
                    : (a.mod &&
                        (o - s > a.mod / 2
                          ? (s += a.mod)
                          : s - o > a.mod / 2 && (s -= a.mod)),
                      (l[i] = h((o - s) * t + s, r)));
                }),
                this[r](l)
              );
            },
            blend: function (t) {
              if (this._rgba[3] === 1) return this;
              var n = this._rgba.slice(),
                r = n.pop(),
                i = s(t)._rgba;
              return s(
                e.map(n, function (e, t) {
                  return (1 - r) * i[t] + r * e;
                })
              );
            },
            toRgbaString: function () {
              var t = "rgba(",
                n = e.map(this._rgba, function (e, t) {
                  return e == null ? (t > 2 ? 1 : 0) : e;
                });
              return n[3] === 1 && (n.pop(), (t = "rgb(")), t + n.join() + ")";
            },
            toHslaString: function () {
              var t = "hsla(",
                n = e.map(this.hsla(), function (e, t) {
                  return (
                    e == null && (e = t > 2 ? 1 : 0),
                    t && t < 3 && (e = Math.round(e * 100) + "%"),
                    e
                  );
                });
              return n[3] === 1 && (n.pop(), (t = "hsl(")), t + n.join() + ")";
            },
            toHexString: function (t) {
              var n = this._rgba.slice(),
                r = n.pop();
              return (
                t && n.push(~~(r * 255)),
                "#" +
                  e
                    .map(n, function (e) {
                      return (
                        (e = (e || 0).toString(16)),
                        e.length === 1 ? "0" + e : e
                      );
                    })
                    .join("")
              );
            },
            toString: function () {
              return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
            },
          })),
          (s.fn.parse.prototype = s.fn),
          (o.hsla.to = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null)
              return [null, null, null, e[3]];
            var t = e[0] / 255,
              n = e[1] / 255,
              r = e[2] / 255,
              i = e[3],
              s = Math.max(t, n, r),
              o = Math.min(t, n, r),
              u = s - o,
              a = s + o,
              f = a * 0.5,
              l,
              c;
            return (
              o === s
                ? (l = 0)
                : t === s
                ? (l = (60 * (n - r)) / u + 360)
                : n === s
                ? (l = (60 * (r - t)) / u + 120)
                : (l = (60 * (t - n)) / u + 240),
              u === 0 ? (c = 0) : f <= 0.5 ? (c = u / a) : (c = u / (2 - a)),
              [Math.round(l) % 360, c, f, i == null ? 1 : i]
            );
          }),
          (o.hsla.from = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null)
              return [null, null, null, e[3]];
            var t = e[0] / 360,
              n = e[1],
              r = e[2],
              i = e[3],
              s = r <= 0.5 ? r * (1 + n) : r + n - r * n,
              o = 2 * r - s;
            return [
              Math.round(d(o, s, t + 1 / 3) * 255),
              Math.round(d(o, s, t) * 255),
              Math.round(d(o, s, t - 1 / 3) * 255),
              i,
            ];
          }),
          c(o, function (n, i) {
            var o = i.props,
              u = i.cache,
              a = i.to,
              f = i.from;
            (s.fn[n] = function (n) {
              a && !this[u] && (this[u] = a(this._rgba));
              if (n === t) return this[u].slice();
              var r,
                i = e.type(n),
                l = i === "array" || i === "object" ? n : arguments,
                p = this[u].slice();
              return (
                c(o, function (e, t) {
                  var n = l[i === "object" ? e : t.idx];
                  n == null && (n = p[t.idx]), (p[t.idx] = h(n, t));
                }),
                f ? ((r = s(f(p))), (r[u] = p), r) : s(p)
              );
            }),
              c(o, function (t, i) {
                if (s.fn[t]) return;
                s.fn[t] = function (s) {
                  var o = e.type(s),
                    u = t === "alpha" ? (this._hsla ? "hsla" : "rgba") : n,
                    a = this[u](),
                    f = a[i.idx],
                    l;
                  return o === "undefined"
                    ? f
                    : (o === "function" &&
                        ((s = s.call(this, f)), (o = e.type(s))),
                      s == null && i.empty
                        ? this
                        : (o === "string" &&
                            ((l = r.exec(s)),
                            l &&
                              (s =
                                f +
                                parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))),
                          (a[i.idx] = s),
                          this[u](a)));
                };
              });
          }),
          (s.hook = function (t) {
            var n = t.split(" ");
            c(n, function (t, n) {
              (e.cssHooks[n] = {
                set: function (t, r) {
                  var i,
                    o,
                    u = "";
                  if (
                    r !== "transparent" &&
                    (e.type(r) !== "string" || (i = p(r)))
                  ) {
                    r = s(i || r);
                    if (!a.rgba && r._rgba[3] !== 1) {
                      o = n === "backgroundColor" ? t.parentNode : t;
                      while ((u === "" || u === "transparent") && o && o.style)
                        try {
                          (u = e.css(o, "backgroundColor")), (o = o.parentNode);
                        } catch (f) {}
                      r = r.blend(u && u !== "transparent" ? u : "_default");
                    }
                    r = r.toRgbaString();
                  }
                  try {
                    t.style[n] = r;
                  } catch (f) {}
                },
              }),
                (e.fx.step[n] = function (t) {
                  t.colorInit ||
                    ((t.start = s(t.elem, n)),
                    (t.end = s(t.end)),
                    (t.colorInit = !0)),
                    e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos));
                });
            });
          }),
          s.hook(n),
          (e.cssHooks.borderColor = {
            expand: function (e) {
              var t = {};
              return (
                c(["Top", "Right", "Bottom", "Left"], function (n, r) {
                  t["border" + r + "Color"] = e;
                }),
                t
              );
            },
          }),
          (l = e.Color.names =
            {
              aqua: "#00ffff",
              black: "#000000",
              blue: "#0000ff",
              fuchsia: "#ff00ff",
              gray: "#808080",
              green: "#008000",
              lime: "#00ff00",
              maroon: "#800000",
              navy: "#000080",
              olive: "#808000",
              purple: "#800080",
              red: "#ff0000",
              silver: "#c0c0c0",
              teal: "#008080",
              white: "#ffffff",
              yellow: "#ffff00",
              transparent: [null, null, null, 0],
              _default: "#ffffff",
            });
      })(jQuery),
      (function () {
        function i(t) {
          var n,
            r,
            i = t.ownerDocument.defaultView
              ? t.ownerDocument.defaultView.getComputedStyle(t, null)
              : t.currentStyle,
            s = {};
          if (i && i.length && i[0] && i[i[0]]) {
            r = i.length;
            while (r--)
              (n = i[r]), typeof i[n] == "string" && (s[e.camelCase(n)] = i[n]);
          } else for (n in i) typeof i[n] == "string" && (s[n] = i[n]);
          return s;
        }
        function s(t, n) {
          var i = {},
            s,
            o;
          for (s in n)
            (o = n[s]),
              t[s] !== o &&
                !r[s] &&
                (e.fx.step[s] || !isNaN(parseFloat(o))) &&
                (i[s] = o);
          return i;
        }
        var n = ["add", "remove", "toggle"],
          r = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1,
          };
        e.each(
          [
            "borderLeftStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderTopStyle",
          ],
          function (t, n) {
            e.fx.step[n] = function (e) {
              if (
                (e.end !== "none" && !e.setAttr) ||
                (e.pos === 1 && !e.setAttr)
              )
                jQuery.style(e.elem, n, e.end), (e.setAttr = !0);
            };
          }
        ),
          e.fn.addBack ||
            (e.fn.addBack = function (e) {
              return this.add(
                e == null ? this.prevObject : this.prevObject.filter(e)
              );
            }),
          (e.effects.animateClass = function (t, r, o, u) {
            var a = e.speed(r, o, u);
            return this.queue(function () {
              var r = e(this),
                o = r.attr("class") || "",
                u,
                f = a.children ? r.find("*").addBack() : r;
              (f = f.map(function () {
                var t = e(this);
                return { el: t, start: i(this) };
              })),
                (u = function () {
                  e.each(n, function (e, n) {
                    t[n] && r[n + "Class"](t[n]);
                  });
                }),
                u(),
                (f = f.map(function () {
                  return (
                    (this.end = i(this.el[0])),
                    (this.diff = s(this.start, this.end)),
                    this
                  );
                })),
                r.attr("class", o),
                (f = f.map(function () {
                  var t = this,
                    n = e.Deferred(),
                    r = e.extend({}, a, {
                      queue: !1,
                      complete: function () {
                        n.resolve(t);
                      },
                    });
                  return this.el.animate(this.diff, r), n.promise();
                })),
                e.when.apply(e, f.get()).done(function () {
                  u(),
                    e.each(arguments, function () {
                      var t = this.el;
                      e.each(this.diff, function (e) {
                        t.css(e, "");
                      });
                    }),
                    a.complete.call(r[0]);
                });
            });
          }),
          e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function (t, n, r, i) {
              return n
                ? e.effects.animateClass.call(this, { add: t }, n, r, i)
                : this._addClass(t);
            },
            _removeClass: e.fn.removeClass,
            removeClass: function (t, n, r, i) {
              return arguments.length > 1
                ? e.effects.animateClass.call(this, { remove: t }, n, r, i)
                : this._removeClass.apply(this, arguments);
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function (n, r, i, s, o) {
              return typeof r == "boolean" || r === t
                ? i
                  ? e.effects.animateClass.call(
                      this,
                      r ? { add: n } : { remove: n },
                      i,
                      s,
                      o
                    )
                  : this._toggleClass(n, r)
                : e.effects.animateClass.call(this, { toggle: n }, r, i, s);
            },
            switchClass: function (t, n, r, i, s) {
              return e.effects.animateClass.call(
                this,
                { add: n, remove: t },
                r,
                i,
                s
              );
            },
          });
      })(),
      (function () {
        function r(t, n, r, i) {
          e.isPlainObject(t) && ((n = t), (t = t.effect)),
            (t = { effect: t }),
            n == null && (n = {}),
            e.isFunction(n) && ((i = n), (r = null), (n = {}));
          if (typeof n == "number" || e.fx.speeds[n])
            (i = r), (r = n), (n = {});
          return (
            e.isFunction(r) && ((i = r), (r = null)),
            n && e.extend(t, n),
            (r = r || n.duration),
            (t.duration = e.fx.off
              ? 0
              : typeof r == "number"
              ? r
              : r in e.fx.speeds
              ? e.fx.speeds[r]
              : e.fx.speeds._default),
            (t.complete = i || n.complete),
            t
          );
        }
        function i(t) {
          return !t || typeof t == "number" || e.fx.speeds[t]
            ? !0
            : typeof t == "string" && !e.effects.effect[t];
        }
        e.extend(e.effects, {
          version: "1.10.1",
          save: function (e, t) {
            for (var r = 0; r < t.length; r++)
              t[r] !== null && e.data(n + t[r], e[0].style[t[r]]);
          },
          restore: function (e, r) {
            var i, s;
            for (s = 0; s < r.length; s++)
              r[s] !== null &&
                ((i = e.data(n + r[s])), i === t && (i = ""), e.css(r[s], i));
          },
          setMode: function (e, t) {
            return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t;
          },
          getBaseline: function (e, t) {
            var n, r;
            switch (e[0]) {
              case "top":
                n = 0;
                break;
              case "middle":
                n = 0.5;
                break;
              case "bottom":
                n = 1;
                break;
              default:
                n = e[0] / t.height;
            }
            switch (e[1]) {
              case "left":
                r = 0;
                break;
              case "center":
                r = 0.5;
                break;
              case "right":
                r = 1;
                break;
              default:
                r = e[1] / t.width;
            }
            return { x: r, y: n };
          },
          createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var n = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                float: t.css("float"),
              },
              r = e("<div></div>")
                .addClass("ui-effects-wrapper")
                .css({
                  fontSize: "100%",
                  background: "transparent",
                  border: "none",
                  margin: 0,
                  padding: 0,
                }),
              i = { width: t.width(), height: t.height() },
              s = document.activeElement;
            try {
              s.id;
            } catch (o) {
              s = document.body;
            }
            return (
              t.wrap(r),
              (t[0] === s || e.contains(t[0], s)) && e(s).focus(),
              (r = t.parent()),
              t.css("position") === "static"
                ? (r.css({ position: "relative" }),
                  t.css({ position: "relative" }))
                : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index"),
                  }),
                  e.each(["top", "left", "bottom", "right"], function (e, r) {
                    (n[r] = t.css(r)),
                      isNaN(parseInt(n[r], 10)) && (n[r] = "auto");
                  }),
                  t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              t.css(i),
              r.css(n).show()
            );
          },
          removeWrapper: function (t) {
            var n = document.activeElement;
            return (
              t.parent().is(".ui-effects-wrapper") &&
                (t.parent().replaceWith(t),
                (t[0] === n || e.contains(t[0], n)) && e(n).focus()),
              t
            );
          },
          setTransition: function (t, n, r, i) {
            return (
              (i = i || {}),
              e.each(n, function (e, n) {
                var s = t.cssUnit(n);
                s[0] > 0 && (i[n] = s[0] * r + s[1]);
              }),
              i
            );
          },
        }),
          e.fn.extend({
            effect: function () {
              function o(n) {
                function u() {
                  e.isFunction(i) && i.call(r[0]), e.isFunction(n) && n();
                }
                var r = e(this),
                  i = t.complete,
                  o = t.mode;
                (r.is(":hidden") ? o === "hide" : o === "show")
                  ? u()
                  : s.call(r[0], t, u);
              }
              var t = r.apply(this, arguments),
                n = t.mode,
                i = t.queue,
                s = e.effects.effect[t.effect];
              return e.fx.off || !s
                ? n
                  ? this[n](t.duration, t.complete)
                  : this.each(function () {
                      t.complete && t.complete.call(this);
                    })
                : i === !1
                ? this.each(o)
                : this.queue(i || "fx", o);
            },
            _show: e.fn.show,
            show: function (e) {
              if (i(e)) return this._show.apply(this, arguments);
              var t = r.apply(this, arguments);
              return (t.mode = "show"), this.effect.call(this, t);
            },
            _hide: e.fn.hide,
            hide: function (e) {
              if (i(e)) return this._hide.apply(this, arguments);
              var t = r.apply(this, arguments);
              return (t.mode = "hide"), this.effect.call(this, t);
            },
            __toggle: e.fn.toggle,
            toggle: function (t) {
              if (i(t) || typeof t == "boolean" || e.isFunction(t))
                return this.__toggle.apply(this, arguments);
              var n = r.apply(this, arguments);
              return (n.mode = "toggle"), this.effect.call(this, n);
            },
            cssUnit: function (t) {
              var n = this.css(t),
                r = [];
              return (
                e.each(["em", "px", "%", "pt"], function (e, t) {
                  n.indexOf(t) > 0 && (r = [parseFloat(n), t]);
                }),
                r
              );
            },
          });
      })(),
      (function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
          t[n] = function (t) {
            return Math.pow(t, e + 2);
          };
        }),
          e.extend(t, {
            Sine: function (e) {
              return 1 - Math.cos((e * Math.PI) / 2);
            },
            Circ: function (e) {
              return 1 - Math.sqrt(1 - e * e);
            },
            Elastic: function (e) {
              return e === 0 || e === 1
                ? e
                : -Math.pow(2, 8 * (e - 1)) *
                    Math.sin((((e - 1) * 80 - 7.5) * Math.PI) / 15);
            },
            Back: function (e) {
              return e * e * (3 * e - 2);
            },
            Bounce: function (e) {
              var t,
                n = 4;
              while (e < ((t = Math.pow(2, --n)) - 1) / 11);
              return (
                1 / Math.pow(4, 3 - n) -
                7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
              );
            },
          }),
          e.each(t, function (t, n) {
            (e.easing["easeIn" + t] = n),
              (e.easing["easeOut" + t] = function (e) {
                return 1 - n(1 - e);
              }),
              (e.easing["easeInOut" + t] = function (e) {
                return e < 0.5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2;
              });
          });
      })();
  })(jQuery);
(function (e, t) {
  var n = /up|down|vertical/,
    r = /up|left|vertical|horizontal/;
  e.effects.effect.blind = function (t, i) {
    var s = e(this),
      o = ["position", "top", "bottom", "left", "right", "height", "width"],
      u = e.effects.setMode(s, t.mode || "hide"),
      a = t.direction || "up",
      f = n.test(a),
      l = f ? "height" : "width",
      c = f ? "top" : "left",
      h = r.test(a),
      p = {},
      d = u === "show",
      v,
      m,
      g;
    s.parent().is(".ui-effects-wrapper")
      ? e.effects.save(s.parent(), o)
      : e.effects.save(s, o),
      s.show(),
      (v = e.effects.createWrapper(s).css({ overflow: "hidden" })),
      (m = v[l]()),
      (g = parseFloat(v.css(c)) || 0),
      (p[l] = d ? m : 0),
      h ||
        (s
          .css(f ? "bottom" : "right", 0)
          .css(f ? "top" : "left", "auto")
          .css({ position: "absolute" }),
        (p[c] = d ? g : m + g)),
      d && (v.css(l, 0), h || v.css(c, g + m)),
      v.animate(p, {
        duration: t.duration,
        easing: t.easing,
        queue: !1,
        complete: function () {
          u === "hide" && s.hide(),
            e.effects.restore(s, o),
            e.effects.removeWrapper(s),
            i();
        },
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.bounce = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "effect"),
      o = s === "hide",
      u = s === "show",
      a = t.direction || "up",
      f = t.distance,
      l = t.times || 5,
      c = l * 2 + (u || o ? 1 : 0),
      h = t.duration / c,
      p = t.easing,
      d = a === "up" || a === "down" ? "top" : "left",
      v = a === "up" || a === "left",
      m,
      g,
      y,
      b = r.queue(),
      w = b.length;
    (u || o) && i.push("opacity"),
      e.effects.save(r, i),
      r.show(),
      e.effects.createWrapper(r),
      f || (f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3),
      u &&
        ((y = { opacity: 1 }),
        (y[d] = 0),
        r
          .css("opacity", 0)
          .css(d, v ? -f * 2 : f * 2)
          .animate(y, h, p)),
      o && (f /= Math.pow(2, l - 1)),
      (y = {}),
      (y[d] = 0);
    for (m = 0; m < l; m++)
      (g = {}),
        (g[d] = (v ? "-=" : "+=") + f),
        r.animate(g, h, p).animate(y, h, p),
        (f = o ? f * 2 : f / 2);
    o &&
      ((g = { opacity: 0 }),
      (g[d] = (v ? "-=" : "+=") + f),
      r.animate(g, h, p)),
      r.queue(function () {
        o && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
      }),
      w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1))),
      r.dequeue();
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.clip = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "hide"),
      o = s === "show",
      u = t.direction || "vertical",
      a = u === "vertical",
      f = a ? "height" : "width",
      l = a ? "top" : "left",
      c = {},
      h,
      p,
      d;
    e.effects.save(r, i),
      r.show(),
      (h = e.effects.createWrapper(r).css({ overflow: "hidden" })),
      (p = r[0].tagName === "IMG" ? h : r),
      (d = p[f]()),
      o && (p.css(f, 0), p.css(l, d / 2)),
      (c[f] = o ? d : 0),
      (c[l] = o ? 0 : d / 2),
      p.animate(c, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          o || r.hide(),
            e.effects.restore(r, i),
            e.effects.removeWrapper(r),
            n();
        },
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.drop = function (t, n) {
    var r = e(this),
      i = [
        "position",
        "top",
        "bottom",
        "left",
        "right",
        "opacity",
        "height",
        "width",
      ],
      s = e.effects.setMode(r, t.mode || "hide"),
      o = s === "show",
      u = t.direction || "left",
      a = u === "up" || u === "down" ? "top" : "left",
      f = u === "up" || u === "left" ? "pos" : "neg",
      l = { opacity: o ? 1 : 0 },
      c;
    e.effects.save(r, i),
      r.show(),
      e.effects.createWrapper(r),
      (c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2),
      o && r.css("opacity", 0).css(a, f === "pos" ? -c : c),
      (l[a] =
        (o ? (f === "pos" ? "+=" : "-=") : f === "pos" ? "-=" : "+=") + c),
      r.animate(l, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          s === "hide" && r.hide(),
            e.effects.restore(r, i),
            e.effects.removeWrapper(r),
            n();
        },
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.explode = function (t, n) {
    function y() {
      c.push(this), c.length === r * i && b();
    }
    function b() {
      s.css({ visibility: "visible" }), e(c).remove(), u || s.hide(), n();
    }
    var r = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
      i = r,
      s = e(this),
      o = e.effects.setMode(s, t.mode || "hide"),
      u = o === "show",
      a = s.show().css("visibility", "hidden").offset(),
      f = Math.ceil(s.outerWidth() / i),
      l = Math.ceil(s.outerHeight() / r),
      c = [],
      h,
      p,
      d,
      v,
      m,
      g;
    for (h = 0; h < r; h++) {
      (v = a.top + h * l), (g = h - (r - 1) / 2);
      for (p = 0; p < i; p++)
        (d = a.left + p * f),
          (m = p - (i - 1) / 2),
          s
            .clone()
            .appendTo("body")
            .wrap("<div></div>")
            .css({
              position: "absolute",
              visibility: "visible",
              left: -p * f,
              top: -h * l,
            })
            .parent()
            .addClass("ui-effects-explode")
            .css({
              position: "absolute",
              overflow: "hidden",
              width: f,
              height: l,
              left: d + (u ? m * f : 0),
              top: v + (u ? g * l : 0),
              opacity: u ? 0 : 1,
            })
            .animate(
              {
                left: d + (u ? 0 : m * f),
                top: v + (u ? 0 : g * l),
                opacity: u ? 1 : 0,
              },
              t.duration || 500,
              t.easing,
              y
            );
    }
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.fade = function (t, n) {
    var r = e(this),
      i = e.effects.setMode(r, t.mode || "toggle");
    r.animate(
      { opacity: i },
      { queue: !1, duration: t.duration, easing: t.easing, complete: n }
    );
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.fold = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "hide"),
      o = s === "show",
      u = s === "hide",
      a = t.size || 15,
      f = /([0-9]+)%/.exec(a),
      l = !!t.horizFirst,
      c = o !== l,
      h = c ? ["width", "height"] : ["height", "width"],
      p = t.duration / 2,
      d,
      v,
      m = {},
      g = {};
    e.effects.save(r, i),
      r.show(),
      (d = e.effects.createWrapper(r).css({ overflow: "hidden" })),
      (v = c ? [d.width(), d.height()] : [d.height(), d.width()]),
      f && (a = (parseInt(f[1], 10) / 100) * v[u ? 0 : 1]),
      o && d.css(l ? { height: 0, width: a } : { height: a, width: 0 }),
      (m[h[0]] = o ? v[0] : a),
      (g[h[1]] = o ? v[1] : 0),
      d.animate(m, p, t.easing).animate(g, p, t.easing, function () {
        u && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.highlight = function (t, n) {
    var r = e(this),
      i = ["backgroundImage", "backgroundColor", "opacity"],
      s = e.effects.setMode(r, t.mode || "show"),
      o = { backgroundColor: r.css("backgroundColor") };
    s === "hide" && (o.opacity = 0),
      e.effects.save(r, i),
      r
        .show()
        .css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" })
        .animate(o, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: function () {
            s === "hide" && r.hide(), e.effects.restore(r, i), n();
          },
        });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.pulsate = function (t, n) {
    var r = e(this),
      i = e.effects.setMode(r, t.mode || "show"),
      s = i === "show",
      o = i === "hide",
      u = s || i === "hide",
      a = (t.times || 5) * 2 + (u ? 1 : 0),
      f = t.duration / a,
      l = 0,
      c = r.queue(),
      h = c.length,
      p;
    if (s || !r.is(":visible")) r.css("opacity", 0).show(), (l = 1);
    for (p = 1; p < a; p++) r.animate({ opacity: l }, f, t.easing), (l = 1 - l);
    r.animate({ opacity: l }, f, t.easing),
      r.queue(function () {
        o && r.hide(), n();
      }),
      h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))),
      r.dequeue();
  };
})(jQuery);
(function (e, t) {
  (e.effects.effect.puff = function (t, n) {
    var r = e(this),
      i = e.effects.setMode(r, t.mode || "hide"),
      s = i === "hide",
      o = parseInt(t.percent, 10) || 150,
      u = o / 100,
      a = {
        height: r.height(),
        width: r.width(),
        outerHeight: r.outerHeight(),
        outerWidth: r.outerWidth(),
      };
    e.extend(t, {
      effect: "scale",
      queue: !1,
      fade: !0,
      mode: i,
      complete: n,
      percent: s ? o : 100,
      from: s
        ? a
        : {
            height: a.height * u,
            width: a.width * u,
            outerHeight: a.outerHeight * u,
            outerWidth: a.outerWidth * u,
          },
    }),
      r.effect(t);
  }),
    (e.effects.effect.scale = function (t, n) {
      var r = e(this),
        i = e.extend(!0, {}, t),
        s = e.effects.setMode(r, t.mode || "effect"),
        o =
          parseInt(t.percent, 10) ||
          (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100),
        u = t.direction || "both",
        a = t.origin,
        f = {
          height: r.height(),
          width: r.width(),
          outerHeight: r.outerHeight(),
          outerWidth: r.outerWidth(),
        },
        l = {
          y: u !== "horizontal" ? o / 100 : 1,
          x: u !== "vertical" ? o / 100 : 1,
        };
      (i.effect = "size"),
        (i.queue = !1),
        (i.complete = n),
        s !== "effect" &&
          ((i.origin = a || ["middle", "center"]), (i.restore = !0)),
        (i.from =
          t.from ||
          (s === "show"
            ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
            : f)),
        (i.to = {
          height: f.height * l.y,
          width: f.width * l.x,
          outerHeight: f.outerHeight * l.y,
          outerWidth: f.outerWidth * l.x,
        }),
        i.fade &&
          (s === "show" && ((i.from.opacity = 0), (i.to.opacity = 1)),
          s === "hide" && ((i.from.opacity = 1), (i.to.opacity = 0))),
        r.effect(i);
    }),
    (e.effects.effect.size = function (t, n) {
      var r,
        i,
        s,
        o = e(this),
        u = [
          "position",
          "top",
          "bottom",
          "left",
          "right",
          "width",
          "height",
          "overflow",
          "opacity",
        ],
        a = [
          "position",
          "top",
          "bottom",
          "left",
          "right",
          "overflow",
          "opacity",
        ],
        f = ["width", "height", "overflow"],
        l = ["fontSize"],
        c = [
          "borderTopWidth",
          "borderBottomWidth",
          "paddingTop",
          "paddingBottom",
        ],
        h = [
          "borderLeftWidth",
          "borderRightWidth",
          "paddingLeft",
          "paddingRight",
        ],
        p = e.effects.setMode(o, t.mode || "effect"),
        d = t.restore || p !== "effect",
        v = t.scale || "both",
        m = t.origin || ["middle", "center"],
        g = o.css("position"),
        y = d ? u : a,
        b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
      p === "show" && o.show(),
        (r = {
          height: o.height(),
          width: o.width(),
          outerHeight: o.outerHeight(),
          outerWidth: o.outerWidth(),
        }),
        t.mode === "toggle" && p === "show"
          ? ((o.from = t.to || b), (o.to = t.from || r))
          : ((o.from = t.from || (p === "show" ? b : r)),
            (o.to = t.to || (p === "hide" ? b : r))),
        (s = {
          from: { y: o.from.height / r.height, x: o.from.width / r.width },
          to: { y: o.to.height / r.height, x: o.to.width / r.width },
        });
      if (v === "box" || v === "both")
        s.from.y !== s.to.y &&
          ((y = y.concat(c)),
          (o.from = e.effects.setTransition(o, c, s.from.y, o.from)),
          (o.to = e.effects.setTransition(o, c, s.to.y, o.to))),
          s.from.x !== s.to.x &&
            ((y = y.concat(h)),
            (o.from = e.effects.setTransition(o, h, s.from.x, o.from)),
            (o.to = e.effects.setTransition(o, h, s.to.x, o.to)));
      (v === "content" || v === "both") &&
        s.from.y !== s.to.y &&
        ((y = y.concat(l).concat(f)),
        (o.from = e.effects.setTransition(o, l, s.from.y, o.from)),
        (o.to = e.effects.setTransition(o, l, s.to.y, o.to))),
        e.effects.save(o, y),
        o.show(),
        e.effects.createWrapper(o),
        o.css("overflow", "hidden").css(o.from),
        m &&
          ((i = e.effects.getBaseline(m, r)),
          (o.from.top = (r.outerHeight - o.outerHeight()) * i.y),
          (o.from.left = (r.outerWidth - o.outerWidth()) * i.x),
          (o.to.top = (r.outerHeight - o.to.outerHeight) * i.y),
          (o.to.left = (r.outerWidth - o.to.outerWidth) * i.x)),
        o.css(o.from);
      if (v === "content" || v === "both")
        (c = c.concat(["marginTop", "marginBottom"]).concat(l)),
          (h = h.concat(["marginLeft", "marginRight"])),
          (f = u.concat(c).concat(h)),
          o.find("*[width]").each(function () {
            var n = e(this),
              r = {
                height: n.height(),
                width: n.width(),
                outerHeight: n.outerHeight(),
                outerWidth: n.outerWidth(),
              };
            d && e.effects.save(n, f),
              (n.from = {
                height: r.height * s.from.y,
                width: r.width * s.from.x,
                outerHeight: r.outerHeight * s.from.y,
                outerWidth: r.outerWidth * s.from.x,
              }),
              (n.to = {
                height: r.height * s.to.y,
                width: r.width * s.to.x,
                outerHeight: r.height * s.to.y,
                outerWidth: r.width * s.to.x,
              }),
              s.from.y !== s.to.y &&
                ((n.from = e.effects.setTransition(n, c, s.from.y, n.from)),
                (n.to = e.effects.setTransition(n, c, s.to.y, n.to))),
              s.from.x !== s.to.x &&
                ((n.from = e.effects.setTransition(n, h, s.from.x, n.from)),
                (n.to = e.effects.setTransition(n, h, s.to.x, n.to))),
              n.css(n.from),
              n.animate(n.to, t.duration, t.easing, function () {
                d && e.effects.restore(n, f);
              });
          });
      o.animate(o.to, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          o.to.opacity === 0 && o.css("opacity", o.from.opacity),
            p === "hide" && o.hide(),
            e.effects.restore(o, y),
            d ||
              (g === "static"
                ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left,
                  })
                : e.each(["top", "left"], function (e, t) {
                    o.css(t, function (t, n) {
                      var r = parseInt(n, 10),
                        i = e ? o.to.left : o.to.top;
                      return n === "auto" ? i + "px" : r + i + "px";
                    });
                  })),
            e.effects.removeWrapper(o),
            n();
        },
      });
    });
})(jQuery);
(function (e, t) {
  e.effects.effect.shake = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "effect"),
      o = t.direction || "left",
      u = t.distance || 20,
      a = t.times || 3,
      f = a * 2 + 1,
      l = Math.round(t.duration / f),
      c = o === "up" || o === "down" ? "top" : "left",
      h = o === "up" || o === "left",
      p = {},
      d = {},
      v = {},
      m,
      g = r.queue(),
      y = g.length;
    e.effects.save(r, i),
      r.show(),
      e.effects.createWrapper(r),
      (p[c] = (h ? "-=" : "+=") + u),
      (d[c] = (h ? "+=" : "-=") + u * 2),
      (v[c] = (h ? "-=" : "+=") + u * 2),
      r.animate(p, l, t.easing);
    for (m = 1; m < a; m++) r.animate(d, l, t.easing).animate(v, l, t.easing);
    r
      .animate(d, l, t.easing)
      .animate(p, l / 2, t.easing)
      .queue(function () {
        s === "hide" && r.hide(),
          e.effects.restore(r, i),
          e.effects.removeWrapper(r),
          n();
      }),
      y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1))),
      r.dequeue();
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.slide = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "width", "height"],
      s = e.effects.setMode(r, t.mode || "show"),
      o = s === "show",
      u = t.direction || "left",
      a = u === "up" || u === "down" ? "top" : "left",
      f = u === "up" || u === "left",
      l,
      c = {};
    e.effects.save(r, i),
      r.show(),
      (l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0)),
      e.effects.createWrapper(r).css({ overflow: "hidden" }),
      o && r.css(a, f ? (isNaN(l) ? "-" + l : -l) : l),
      (c[a] = (o ? (f ? "+=" : "-=") : f ? "-=" : "+=") + l),
      r.animate(c, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          s === "hide" && r.hide(),
            e.effects.restore(r, i),
            e.effects.removeWrapper(r),
            n();
        },
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.transfer = function (t, n) {
    var r = e(this),
      i = e(t.to),
      s = i.css("position") === "fixed",
      o = e("body"),
      u = s ? o.scrollTop() : 0,
      a = s ? o.scrollLeft() : 0,
      f = i.offset(),
      l = {
        top: f.top - u,
        left: f.left - a,
        height: i.innerHeight(),
        width: i.innerWidth(),
      },
      c = r.offset(),
      h = e("<div class='ui-effects-transfer'></div>")
        .appendTo(document.body)
        .addClass(t.className)
        .css({
          top: c.top - u,
          left: c.left - a,
          height: r.innerHeight(),
          width: r.innerWidth(),
          position: s ? "fixed" : "absolute",
        })
        .animate(l, t.duration, t.easing, function () {
          h.remove(), n();
        });
  };
})(jQuery);
/*! jQuery UI - v1.10.1 - 2013-02-18
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function (e, t) {
  function i(t, n) {
    var r,
      i,
      o,
      u = t.nodeName.toLowerCase();
    return "area" === u
      ? ((r = t.parentNode),
        (i = r.name),
        !t.href || !i || r.nodeName.toLowerCase() !== "map"
          ? !1
          : ((o = e("img[usemap=#" + i + "]")[0]), !!o && s(o)))
      : (/input|select|textarea|button|object/.test(u)
          ? !t.disabled
          : "a" === u
          ? t.href || n
          : n) && s(t);
  }
  function s(t) {
    return (
      e.expr.filters.visible(t) &&
      !e(t)
        .parents()
        .addBack()
        .filter(function () {
          return e.css(this, "visibility") === "hidden";
        }).length
    );
  }
  var n = 0,
    r = /^ui-id-\d+$/;
  e.ui = e.ui || {};
  if (e.ui.version) return;
  e.extend(e.ui, {
    version: "1.10.1",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    },
  }),
    e.fn.extend({
      _focus: e.fn.focus,
      focus: function (t, n) {
        return typeof t == "number"
          ? this.each(function () {
              var r = this;
              setTimeout(function () {
                e(r).focus(), n && n.call(r);
              }, t);
            })
          : this._focus.apply(this, arguments);
      },
      scrollParent: function () {
        var t;
        return (
          (e.ui.ie && /(static|relative)/.test(this.css("position"))) ||
          /absolute/.test(this.css("position"))
            ? (t = this.parents()
                .filter(function () {
                  return (
                    /(relative|absolute|fixed)/.test(e.css(this, "position")) &&
                    /(auto|scroll)/.test(
                      e.css(this, "overflow") +
                        e.css(this, "overflow-y") +
                        e.css(this, "overflow-x")
                    )
                  );
                })
                .eq(0))
            : (t = this.parents()
                .filter(function () {
                  return /(auto|scroll)/.test(
                    e.css(this, "overflow") +
                      e.css(this, "overflow-y") +
                      e.css(this, "overflow-x")
                  );
                })
                .eq(0)),
          /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        );
      },
      zIndex: function (n) {
        if (n !== t) return this.css("zIndex", n);
        if (this.length) {
          var r = e(this[0]),
            i,
            s;
          while (r.length && r[0] !== document) {
            i = r.css("position");
            if (i === "absolute" || i === "relative" || i === "fixed") {
              s = parseInt(r.css("zIndex"), 10);
              if (!isNaN(s) && s !== 0) return s;
            }
            r = r.parent();
          }
        }
        return 0;
      },
      uniqueId: function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++n);
        });
      },
      removeUniqueId: function () {
        return this.each(function () {
          r.test(this.id) && e(this).removeAttr("id");
        });
      },
    }),
    e.extend(e.expr[":"], {
      data: e.expr.createPseudo
        ? e.expr.createPseudo(function (t) {
            return function (n) {
              return !!e.data(n, t);
            };
          })
        : function (t, n, r) {
            return !!e.data(t, r[3]);
          },
      focusable: function (t) {
        return i(t, !isNaN(e.attr(t, "tabindex")));
      },
      tabbable: function (t) {
        var n = e.attr(t, "tabindex"),
          r = isNaN(n);
        return (r || n >= 0) && i(t, !r);
      },
    }),
    e("<a>").outerWidth(1).jquery ||
      e.each(["Width", "Height"], function (n, r) {
        function u(t, n, r, s) {
          return (
            e.each(i, function () {
              (n -= parseFloat(e.css(t, "padding" + this)) || 0),
                r &&
                  (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                s && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
            }),
            n
          );
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
          s = r.toLowerCase(),
          o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight,
          };
        (e.fn["inner" + r] = function (n) {
          return n === t
            ? o["inner" + r].call(this)
            : this.each(function () {
                e(this).css(s, u(this, n) + "px");
              });
        }),
          (e.fn["outer" + r] = function (t, n) {
            return typeof t != "number"
              ? o["outer" + r].call(this, t)
              : this.each(function () {
                  e(this).css(s, u(this, t, !0, n) + "px");
                });
          });
      }),
    e.fn.addBack ||
      (e.fn.addBack = function (e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      }),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
      (e.fn.removeData = (function (t) {
        return function (n) {
          return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this);
        };
      })(e.fn.removeData)),
    (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    (e.support.selectstart = "onselectstart" in document.createElement("div")),
    e.fn.extend({
      disableSelection: function () {
        return this.bind(
          (e.support.selectstart ? "selectstart" : "mousedown") +
            ".ui-disableSelection",
          function (e) {
            e.preventDefault();
          }
        );
      },
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
    }),
    e.extend(e.ui, {
      plugin: {
        add: function (t, n, r) {
          var i,
            s = e.ui[t].prototype;
          for (i in r)
            (s.plugins[i] = s.plugins[i] || []), s.plugins[i].push([n, r[i]]);
        },
        call: function (e, t, n) {
          var r,
            i = e.plugins[t];
          if (
            !i ||
            !e.element[0].parentNode ||
            e.element[0].parentNode.nodeType === 11
          )
            return;
          for (r = 0; r < i.length; r++)
            e.options[i[r][0]] && i[r][1].apply(e.element, n);
        },
      },
      hasScroll: function (t, n) {
        if (e(t).css("overflow") === "hidden") return !1;
        var r = n && n === "left" ? "scrollLeft" : "scrollTop",
          i = !1;
        return t[r] > 0 ? !0 : ((t[r] = 1), (i = t[r] > 0), (t[r] = 0), i);
      },
    });
})(jQuery);
(function (e, t) {
  var n = 0,
    r = Array.prototype.slice,
    i = e.cleanData;
  (e.cleanData = function (t) {
    for (var n = 0, r; (r = t[n]) != null; n++)
      try {
        e(r).triggerHandler("remove");
      } catch (s) {}
    i(t);
  }),
    (e.widget = function (t, n, r) {
      var i,
        s,
        o,
        u,
        a = {},
        f = t.split(".")[0];
      (t = t.split(".")[1]),
        (i = f + "-" + t),
        r || ((r = n), (n = e.Widget)),
        (e.expr[":"][i.toLowerCase()] = function (t) {
          return !!e.data(t, i);
        }),
        (e[f] = e[f] || {}),
        (s = e[f][t]),
        (o = e[f][t] =
          function (e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t);
          }),
        e.extend(o, s, {
          version: r.version,
          _proto: e.extend({}, r),
          _childConstructors: [],
        }),
        (u = new n()),
        (u.options = e.widget.extend({}, u.options)),
        e.each(r, function (t, r) {
          if (!e.isFunction(r)) {
            a[t] = r;
            return;
          }
          a[t] = (function () {
            var e = function () {
                return n.prototype[t].apply(this, arguments);
              },
              i = function (e) {
                return n.prototype[t].apply(this, e);
              };
            return function () {
              var t = this._super,
                n = this._superApply,
                s;
              return (
                (this._super = e),
                (this._superApply = i),
                (s = r.apply(this, arguments)),
                (this._super = t),
                (this._superApply = n),
                s
              );
            };
          })();
        }),
        (o.prototype = e.widget.extend(
          u,
          { widgetEventPrefix: s ? u.widgetEventPrefix : t },
          a,
          { constructor: o, namespace: f, widgetName: t, widgetFullName: i }
        )),
        s
          ? (e.each(s._childConstructors, function (t, n) {
              var r = n.prototype;
              e.widget(r.namespace + "." + r.widgetName, o, n._proto);
            }),
            delete s._childConstructors)
          : n._childConstructors.push(o),
        e.widget.bridge(t, o);
    }),
    (e.widget.extend = function (n) {
      var i = r.call(arguments, 1),
        s = 0,
        o = i.length,
        u,
        a;
      for (; s < o; s++)
        for (u in i[s])
          (a = i[s][u]),
            i[s].hasOwnProperty(u) &&
              a !== t &&
              (e.isPlainObject(a)
                ? (n[u] = e.isPlainObject(n[u])
                    ? e.widget.extend({}, n[u], a)
                    : e.widget.extend({}, a))
                : (n[u] = a));
      return n;
    }),
    (e.widget.bridge = function (n, i) {
      var s = i.prototype.widgetFullName || n;
      e.fn[n] = function (o) {
        var u = typeof o == "string",
          a = r.call(arguments, 1),
          f = this;
        return (
          (o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o),
          u
            ? this.each(function () {
                var r,
                  i = e.data(this, s);
                if (!i)
                  return e.error(
                    "cannot call methods on " +
                      n +
                      " prior to initialization; " +
                      "attempted to call method '" +
                      o +
                      "'"
                  );
                if (!e.isFunction(i[o]) || o.charAt(0) === "_")
                  return e.error(
                    "no such method '" + o + "' for " + n + " widget instance"
                  );
                r = i[o].apply(i, a);
                if (r !== i && r !== t)
                  return (f = r && r.jquery ? f.pushStack(r.get()) : r), !1;
              })
            : this.each(function () {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this));
              }),
          f
        );
      };
    }),
    (e.Widget = function () {}),
    (e.Widget._childConstructors = []),
    (e.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { disabled: !1, create: null },
      _createWidget: function (t, r) {
        (r = e(r || this.defaultElement || this)[0]),
          (this.element = e(r)),
          (this.uuid = n++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.options = e.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          (this.bindings = e()),
          (this.hoverable = e()),
          (this.focusable = e()),
          r !== this &&
            (e.data(r, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (e) {
                e.target === r && this.destroy();
              },
            }),
            (this.document = e(r.style ? r.ownerDocument : r.document || r)),
            (this.window = e(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: e.noop,
      _getCreateEventData: e.noop,
      _create: e.noop,
      _init: e.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetName)
            .removeData(this.widgetFullName)
            .removeData(e.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(
              this.widgetFullName + "-disabled " + "ui-state-disabled"
            ),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: e.noop,
      widget: function () {
        return this.element;
      },
      option: function (n, r) {
        var i = n,
          s,
          o,
          u;
        if (arguments.length === 0) return e.widget.extend({}, this.options);
        if (typeof n == "string") {
          (i = {}), (s = n.split(".")), (n = s.shift());
          if (s.length) {
            o = i[n] = e.widget.extend({}, this.options[n]);
            for (u = 0; u < s.length - 1; u++)
              (o[s[u]] = o[s[u]] || {}), (o = o[s[u]]);
            n = s.pop();
            if (r === t) return o[n] === t ? null : o[n];
            o[n] = r;
          } else {
            if (r === t) return this.options[n] === t ? null : this.options[n];
            i[n] = r;
          }
        }
        return this._setOptions(i), this;
      },
      _setOptions: function (e) {
        var t;
        for (t in e) this._setOption(t, e[t]);
        return this;
      },
      _setOption: function (e, t) {
        return (
          (this.options[e] = t),
          e === "disabled" &&
            (this.widget()
              .toggleClass(
                this.widgetFullName + "-disabled ui-state-disabled",
                !!t
              )
              .attr("aria-disabled", t),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
          this
        );
      },
      enable: function () {
        return this._setOption("disabled", !1);
      },
      disable: function () {
        return this._setOption("disabled", !0);
      },
      _on: function (t, n, r) {
        var i,
          s = this;
        typeof t != "boolean" && ((r = n), (n = t), (t = !1)),
          r
            ? ((n = i = e(n)), (this.bindings = this.bindings.add(n)))
            : ((r = n), (n = this.element), (i = this.widget())),
          e.each(r, function (r, o) {
            function u() {
              if (
                !t &&
                (s.options.disabled === !0 ||
                  e(this).hasClass("ui-state-disabled"))
              )
                return;
              return (typeof o == "string" ? s[o] : o).apply(s, arguments);
            }
            typeof o != "string" &&
              (u.guid = o.guid = o.guid || u.guid || e.guid++);
            var a = r.match(/^(\w+)\s*(.*)$/),
              f = a[1] + s.eventNamespace,
              l = a[2];
            l ? i.delegate(l, f, u) : n.bind(f, u);
          });
      },
      _off: function (e, t) {
        (t =
          (t || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          e.unbind(t).undelegate(t);
      },
      _delay: function (e, t) {
        function n() {
          return (typeof e == "string" ? r[e] : e).apply(r, arguments);
        }
        var r = this;
        return setTimeout(n, t || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              e(t.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (t) {
              e(t.currentTarget).removeClass("ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              e(t.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (t) {
              e(t.currentTarget).removeClass("ui-state-focus");
            },
          });
      },
      _trigger: function (t, n, r) {
        var i,
          s,
          o = this.options[t];
        (r = r || {}),
          (n = e.Event(n)),
          (n.type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (n.target = this.element[0]),
          (s = n.originalEvent);
        if (s) for (i in s) i in n || (n[i] = s[i]);
        return (
          this.element.trigger(n, r),
          !(
            (e.isFunction(o) &&
              o.apply(this.element[0], [n].concat(r)) === !1) ||
            n.isDefaultPrevented()
          )
        );
      },
    }),
    e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, n) {
      e.Widget.prototype["_" + t] = function (r, i, s) {
        typeof i == "string" && (i = { effect: i });
        var o,
          u = i ? (i === !0 || typeof i == "number" ? n : i.effect || n) : t;
        (i = i || {}),
          typeof i == "number" && (i = { duration: i }),
          (o = !e.isEmptyObject(i)),
          (i.complete = s),
          i.delay && r.delay(i.delay),
          o && e.effects && e.effects.effect[u]
            ? r[t](i)
            : u !== t && r[u]
            ? r[u](i.duration, i.easing, s)
            : r.queue(function (n) {
                e(this)[t](), s && s.call(r[0]), n();
              });
      };
    });
})(jQuery);
(function (e, t) {
  var n = !1;
  e(document).mouseup(function () {
    n = !1;
  }),
    e.widget("ui.mouse", {
      version: "1.10.1",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var t = this;
        this.element
          .bind("mousedown." + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .bind("click." + this.widgetName, function (n) {
            if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))
              return (
                e.removeData(n.target, t.widgetName + ".preventClickEvent"),
                n.stopImmediatePropagation(),
                !1
              );
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName),
          this._mouseMoveDelegate &&
            e(document)
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (t) {
        if (n) return;
        this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
        var r = this,
          i = t.which === 1,
          s =
            typeof this.options.cancel == "string" && t.target.nodeName
              ? e(t.target).closest(this.options.cancel).length
              : !1;
        if (!i || s || !this._mouseCapture(t)) return !0;
        (this.mouseDelayMet = !this.options.delay),
          this.mouseDelayMet ||
            (this._mouseDelayTimer = setTimeout(function () {
              r.mouseDelayMet = !0;
            }, this.options.delay));
        if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
          this._mouseStarted = this._mouseStart(t) !== !1;
          if (!this._mouseStarted) return t.preventDefault(), !0;
        }
        return (
          !0 === e.data(t.target, this.widgetName + ".preventClickEvent") &&
            e.removeData(t.target, this.widgetName + ".preventClickEvent"),
          (this._mouseMoveDelegate = function (e) {
            return r._mouseMove(e);
          }),
          (this._mouseUpDelegate = function (e) {
            return r._mouseUp(e);
          }),
          e(document)
            .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
          t.preventDefault(),
          (n = !0),
          !0
        );
      },
      _mouseMove: function (t) {
        return e.ui.ie &&
          (!document.documentMode || document.documentMode < 9) &&
          !t.button
          ? this._mouseUp(t)
          : this._mouseStarted
          ? (this._mouseDrag(t), t.preventDefault())
          : (this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted =
                this._mouseStart(this._mouseDownEvent, t) !== !1),
              this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted);
      },
      _mouseUp: function (t) {
        return (
          e(document)
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            t.target === this._mouseDownEvent.target &&
              e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
          !1
        );
      },
      _mouseDistanceMet: function (e) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - e.pageX),
            Math.abs(this._mouseDownEvent.pageY - e.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    });
})(jQuery);
(function (e, t) {
  function h(e, t, n) {
    return [
      parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1),
      parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1),
    ];
  }
  function p(t, n) {
    return parseInt(e.css(t, n), 10) || 0;
  }
  function d(t) {
    var n = t[0];
    return n.nodeType === 9
      ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } }
      : e.isWindow(n)
      ? {
          width: t.width(),
          height: t.height(),
          offset: { top: t.scrollTop(), left: t.scrollLeft() },
        }
      : n.preventDefault
      ? { width: 0, height: 0, offset: { top: n.pageY, left: n.pageX } }
      : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() };
  }
  e.ui = e.ui || {};
  var n,
    r = Math.max,
    i = Math.abs,
    s = Math.round,
    o = /left|center|right/,
    u = /top|center|bottom/,
    a = /[\+\-]\d+(\.[\d]+)?%?/,
    f = /^\w+/,
    l = /%$/,
    c = e.fn.position;
  (e.position = {
    scrollbarWidth: function () {
      if (n !== t) return n;
      var r,
        i,
        s = e(
          "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
        ),
        o = s.children()[0];
      return (
        e("body").append(s),
        (r = o.offsetWidth),
        s.css("overflow", "scroll"),
        (i = o.offsetWidth),
        r === i && (i = s[0].clientWidth),
        s.remove(),
        (n = r - i)
      );
    },
    getScrollInfo: function (t) {
      var n = t.isWindow ? "" : t.element.css("overflow-x"),
        r = t.isWindow ? "" : t.element.css("overflow-y"),
        i =
          n === "scroll" ||
          (n === "auto" && t.width < t.element[0].scrollWidth),
        s =
          r === "scroll" ||
          (r === "auto" && t.height < t.element[0].scrollHeight);
      return {
        width: i ? e.position.scrollbarWidth() : 0,
        height: s ? e.position.scrollbarWidth() : 0,
      };
    },
    getWithinInfo: function (t) {
      var n = e(t || window),
        r = e.isWindow(n[0]);
      return {
        element: n,
        isWindow: r,
        offset: n.offset() || { left: 0, top: 0 },
        scrollLeft: n.scrollLeft(),
        scrollTop: n.scrollTop(),
        width: r ? n.width() : n.outerWidth(),
        height: r ? n.height() : n.outerHeight(),
      };
    },
  }),
    (e.fn.position = function (t) {
      if (!t || !t.of) return c.apply(this, arguments);
      t = e.extend({}, t);
      var n,
        l,
        v,
        m,
        g,
        y,
        b = e(t.of),
        w = e.position.getWithinInfo(t.within),
        E = e.position.getScrollInfo(w),
        S = (t.collision || "flip").split(" "),
        x = {};
      return (
        (y = d(b)),
        b[0].preventDefault && (t.at = "left top"),
        (l = y.width),
        (v = y.height),
        (m = y.offset),
        (g = e.extend({}, m)),
        e.each(["my", "at"], function () {
          var e = (t[this] || "").split(" "),
            n,
            r;
          e.length === 1 &&
            (e = o.test(e[0])
              ? e.concat(["center"])
              : u.test(e[0])
              ? ["center"].concat(e)
              : ["center", "center"]),
            (e[0] = o.test(e[0]) ? e[0] : "center"),
            (e[1] = u.test(e[1]) ? e[1] : "center"),
            (n = a.exec(e[0])),
            (r = a.exec(e[1])),
            (x[this] = [n ? n[0] : 0, r ? r[0] : 0]),
            (t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]);
        }),
        S.length === 1 && (S[1] = S[0]),
        t.at[0] === "right"
          ? (g.left += l)
          : t.at[0] === "center" && (g.left += l / 2),
        t.at[1] === "bottom"
          ? (g.top += v)
          : t.at[1] === "center" && (g.top += v / 2),
        (n = h(x.at, l, v)),
        (g.left += n[0]),
        (g.top += n[1]),
        this.each(function () {
          var o,
            u,
            a = e(this),
            f = a.outerWidth(),
            c = a.outerHeight(),
            d = p(this, "marginLeft"),
            y = p(this, "marginTop"),
            T = f + d + p(this, "marginRight") + E.width,
            N = c + y + p(this, "marginBottom") + E.height,
            C = e.extend({}, g),
            k = h(x.my, a.outerWidth(), a.outerHeight());
          t.my[0] === "right"
            ? (C.left -= f)
            : t.my[0] === "center" && (C.left -= f / 2),
            t.my[1] === "bottom"
              ? (C.top -= c)
              : t.my[1] === "center" && (C.top -= c / 2),
            (C.left += k[0]),
            (C.top += k[1]),
            e.support.offsetFractions ||
              ((C.left = s(C.left)), (C.top = s(C.top))),
            (o = { marginLeft: d, marginTop: y }),
            e.each(["left", "top"], function (r, i) {
              e.ui.position[S[r]] &&
                e.ui.position[S[r]][i](C, {
                  targetWidth: l,
                  targetHeight: v,
                  elemWidth: f,
                  elemHeight: c,
                  collisionPosition: o,
                  collisionWidth: T,
                  collisionHeight: N,
                  offset: [n[0] + k[0], n[1] + k[1]],
                  my: t.my,
                  at: t.at,
                  within: w,
                  elem: a,
                });
            }),
            t.using &&
              (u = function (e) {
                var n = m.left - C.left,
                  s = n + l - f,
                  o = m.top - C.top,
                  u = o + v - c,
                  h = {
                    target: {
                      element: b,
                      left: m.left,
                      top: m.top,
                      width: l,
                      height: v,
                    },
                    element: {
                      element: a,
                      left: C.left,
                      top: C.top,
                      width: f,
                      height: c,
                    },
                    horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                    vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle",
                  };
                l < f && i(n + s) < l && (h.horizontal = "center"),
                  v < c && i(o + u) < v && (h.vertical = "middle"),
                  r(i(n), i(s)) > r(i(o), i(u))
                    ? (h.important = "horizontal")
                    : (h.important = "vertical"),
                  t.using.call(this, e, h);
              }),
            a.offset(e.extend(C, { using: u }));
        })
      );
    }),
    (e.ui.position = {
      fit: {
        left: function (e, t) {
          var n = t.within,
            i = n.isWindow ? n.scrollLeft : n.offset.left,
            s = n.width,
            o = e.left - t.collisionPosition.marginLeft,
            u = i - o,
            a = o + t.collisionWidth - s - i,
            f;
          t.collisionWidth > s
            ? u > 0 && a <= 0
              ? ((f = e.left + u + t.collisionWidth - s - i), (e.left += u - f))
              : a > 0 && u <= 0
              ? (e.left = i)
              : u > a
              ? (e.left = i + s - t.collisionWidth)
              : (e.left = i)
            : u > 0
            ? (e.left += u)
            : a > 0
            ? (e.left -= a)
            : (e.left = r(e.left - o, e.left));
        },
        top: function (e, t) {
          var n = t.within,
            i = n.isWindow ? n.scrollTop : n.offset.top,
            s = t.within.height,
            o = e.top - t.collisionPosition.marginTop,
            u = i - o,
            a = o + t.collisionHeight - s - i,
            f;
          t.collisionHeight > s
            ? u > 0 && a <= 0
              ? ((f = e.top + u + t.collisionHeight - s - i), (e.top += u - f))
              : a > 0 && u <= 0
              ? (e.top = i)
              : u > a
              ? (e.top = i + s - t.collisionHeight)
              : (e.top = i)
            : u > 0
            ? (e.top += u)
            : a > 0
            ? (e.top -= a)
            : (e.top = r(e.top - o, e.top));
        },
      },
      flip: {
        left: function (e, t) {
          var n = t.within,
            r = n.offset.left + n.scrollLeft,
            s = n.width,
            o = n.isWindow ? n.scrollLeft : n.offset.left,
            u = e.left - t.collisionPosition.marginLeft,
            a = u - o,
            f = u + t.collisionWidth - s - o,
            l =
              t.my[0] === "left"
                ? -t.elemWidth
                : t.my[0] === "right"
                ? t.elemWidth
                : 0,
            c =
              t.at[0] === "left"
                ? t.targetWidth
                : t.at[0] === "right"
                ? -t.targetWidth
                : 0,
            h = -2 * t.offset[0],
            p,
            d;
          if (a < 0) {
            p = e.left + l + c + h + t.collisionWidth - s - r;
            if (p < 0 || p < i(a)) e.left += l + c + h;
          } else if (f > 0) {
            d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
            if (d > 0 || i(d) < f) e.left += l + c + h;
          }
        },
        top: function (e, t) {
          var n = t.within,
            r = n.offset.top + n.scrollTop,
            s = n.height,
            o = n.isWindow ? n.scrollTop : n.offset.top,
            u = e.top - t.collisionPosition.marginTop,
            a = u - o,
            f = u + t.collisionHeight - s - o,
            l = t.my[1] === "top",
            c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
            h =
              t.at[1] === "top"
                ? t.targetHeight
                : t.at[1] === "bottom"
                ? -t.targetHeight
                : 0,
            p = -2 * t.offset[1],
            d,
            v;
          a < 0
            ? ((v = e.top + c + h + p + t.collisionHeight - s - r),
              e.top + c + h + p > a &&
                (v < 0 || v < i(a)) &&
                (e.top += c + h + p))
            : f > 0 &&
              ((d = e.top - t.collisionPosition.marginTop + c + h + p - o),
              e.top + c + h + p > f &&
                (d > 0 || i(d) < f) &&
                (e.top += c + h + p));
        },
      },
      flipfit: {
        left: function () {
          e.ui.position.flip.left.apply(this, arguments),
            e.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          e.ui.position.flip.top.apply(this, arguments),
            e.ui.position.fit.top.apply(this, arguments);
        },
      },
    }),
    (function () {
      var t,
        n,
        r,
        i,
        s,
        o = document.getElementsByTagName("body")[0],
        u = document.createElement("div");
      (t = document.createElement(o ? "div" : "body")),
        (r = {
          visibility: "hidden",
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: "none",
        }),
        o &&
          e.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px",
          });
      for (s in r) t.style[s] = r[s];
      t.appendChild(u),
        (n = o || document.documentElement),
        n.insertBefore(t, n.firstChild),
        (u.style.cssText = "position: absolute; left: 10.7432222px;"),
        (i = e(u).offset().left),
        (e.support.offsetFractions = i > 10 && i < 11),
        (t.innerHTML = ""),
        n.removeChild(t);
    })();
})(jQuery);
(function (e, t) {
  e.widget("ui.draggable", e.ui.mouse, {
    version: "1.10.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null,
    },
    _create: function () {
      this.options.helper === "original" &&
        !/^(?:r|a|f)/.test(this.element.css("position")) &&
        (this.element[0].style.position = "relative"),
        this.options.addClasses && this.element.addClass("ui-draggable"),
        this.options.disabled && this.element.addClass("ui-draggable-disabled"),
        this._mouseInit();
    },
    _destroy: function () {
      this.element.removeClass(
        "ui-draggable ui-draggable-dragging ui-draggable-disabled"
      ),
        this._mouseDestroy();
    },
    _mouseCapture: function (t) {
      var n = this.options;
      return this.helper ||
        n.disabled ||
        e(t.target).closest(".ui-resizable-handle").length > 0
        ? !1
        : ((this.handle = this._getHandle(t)),
          this.handle
            ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function () {
                e(
                  "<div class='ui-draggable-iframeFix' style='background: #fff;'></div>"
                )
                  .css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3,
                  })
                  .css(e(this).offset())
                  .appendTo("body");
              }),
              !0)
            : !1);
    },
    _mouseStart: function (t) {
      var n = this.options;
      return (
        (this.helper = this._createHelper(t)),
        this.helper.addClass("ui-draggable-dragging"),
        this._cacheHelperProportions(),
        e.ui.ddmanager && (e.ui.ddmanager.current = this),
        this._cacheMargins(),
        (this.cssPosition = this.helper.css("position")),
        (this.scrollParent = this.helper.scrollParent()),
        (this.offset = this.positionAbs = this.element.offset()),
        (this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left,
        }),
        e.extend(this.offset, {
          click: {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top,
          },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
        (this.originalPosition = this.position = this._generatePosition(t)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
        n.containment && this._setContainment(),
        this._trigger("start", t) === !1
          ? (this._clear(), !1)
          : (this._cacheHelperProportions(),
            e.ui.ddmanager &&
              !n.dropBehaviour &&
              e.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0)
      );
    },
    _mouseDrag: function (t, n) {
      (this.position = this._generatePosition(t)),
        (this.positionAbs = this._convertPositionTo("absolute"));
      if (!n) {
        var r = this._uiHash();
        if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
        this.position = r.position;
      }
      if (!this.options.axis || this.options.axis !== "y")
        this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis !== "x")
        this.helper[0].style.top = this.position.top + "px";
      return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
    },
    _mouseStop: function (t) {
      var n,
        r = this,
        i = !1,
        s = !1;
      e.ui.ddmanager &&
        !this.options.dropBehaviour &&
        (s = e.ui.ddmanager.drop(this, t)),
        this.dropped && ((s = this.dropped), (this.dropped = !1)),
        (n = this.element[0]);
      while (n && (n = n.parentNode)) n === document && (i = !0);
      return !i && this.options.helper === "original"
        ? !1
        : ((this.options.revert === "invalid" && !s) ||
          (this.options.revert === "valid" && s) ||
          this.options.revert === !0 ||
          (e.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, s))
            ? e(this.helper).animate(
                this.originalPosition,
                parseInt(this.options.revertDuration, 10),
                function () {
                  r._trigger("stop", t) !== !1 && r._clear();
                }
              )
            : this._trigger("stop", t) !== !1 && this._clear(),
          !1);
    },
    _mouseUp: function (t) {
      return (
        e("div.ui-draggable-iframeFix").each(function () {
          this.parentNode.removeChild(this);
        }),
        e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
        e.ui.mouse.prototype._mouseUp.call(this, t)
      );
    },
    cancel: function () {
      return (
        this.helper.is(".ui-draggable-dragging")
          ? this._mouseUp({})
          : this._clear(),
        this
      );
    },
    _getHandle: function (t) {
      var n =
        !this.options.handle || !e(this.options.handle, this.element).length
          ? !0
          : !1;
      return (
        e(this.options.handle, this.element)
          .find("*")
          .addBack()
          .each(function () {
            this === t.target && (n = !0);
          }),
        n
      );
    },
    _createHelper: function (t) {
      var n = this.options,
        r = e.isFunction(n.helper)
          ? e(n.helper.apply(this.element[0], [t]))
          : n.helper === "clone"
          ? this.element.clone().removeAttr("id")
          : this.element;
      return (
        r.parents("body").length ||
          r.appendTo(
            n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo
          ),
        r[0] !== this.element[0] &&
          !/(fixed|absolute)/.test(r.css("position")) &&
          r.css("position", "absolute"),
        r
      );
    },
    _adjustOffsetFromHelper: function (t) {
      typeof t == "string" && (t = t.split(" ")),
        e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
        "left" in t && (this.offset.click.left = t.left + this.margins.left),
        "right" in t &&
          (this.offset.click.left =
            this.helperProportions.width - t.right + this.margins.left),
        "top" in t && (this.offset.click.top = t.top + this.margins.top),
        "bottom" in t &&
          (this.offset.click.top =
            this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      this.cssPosition === "absolute" &&
        this.scrollParent[0] !== document &&
        e.contains(this.scrollParent[0], this.offsetParent[0]) &&
        ((t.left += this.scrollParent.scrollLeft()),
        (t.top += this.scrollParent.scrollTop()));
      if (
        this.offsetParent[0] === document.body ||
        (this.offsetParent[0].tagName &&
          this.offsetParent[0].tagName.toLowerCase() === "html" &&
          e.ui.ie)
      )
        t = { top: 0, left: 0 };
      return {
        top:
          t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:
          t.left +
          (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
      };
    },
    _getRelativeOffset: function () {
      if (this.cssPosition === "relative") {
        var e = this.element.position();
        return {
          top:
            e.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            e.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      }
      return { top: 0, left: 0 };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function () {
      var t,
        n,
        r,
        i = this.options;
      i.containment === "parent" && (i.containment = this.helper[0].parentNode);
      if (i.containment === "document" || i.containment === "window")
        this.containment = [
          i.containment === "document"
            ? 0
            : e(window).scrollLeft() -
              this.offset.relative.left -
              this.offset.parent.left,
          i.containment === "document"
            ? 0
            : e(window).scrollTop() -
              this.offset.relative.top -
              this.offset.parent.top,
          (i.containment === "document" ? 0 : e(window).scrollLeft()) +
            e(i.containment === "document" ? document : window).width() -
            this.helperProportions.width -
            this.margins.left,
          (i.containment === "document" ? 0 : e(window).scrollTop()) +
            (e(i.containment === "document" ? document : window).height() ||
              document.body.parentNode.scrollHeight) -
            this.helperProportions.height -
            this.margins.top,
        ];
      if (
        !/^(document|window|parent)$/.test(i.containment) &&
        i.containment.constructor !== Array
      ) {
        (n = e(i.containment)), (r = n[0]);
        if (!r) return;
        (t = e(r).css("overflow") !== "hidden"),
          (this.containment = [
            (parseInt(e(r).css("borderLeftWidth"), 10) || 0) +
              (parseInt(e(r).css("paddingLeft"), 10) || 0),
            (parseInt(e(r).css("borderTopWidth"), 10) || 0) +
              (parseInt(e(r).css("paddingTop"), 10) || 0),
            (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) -
              (parseInt(e(r).css("borderLeftWidth"), 10) || 0) -
              (parseInt(e(r).css("paddingRight"), 10) || 0) -
              this.helperProportions.width -
              this.margins.left -
              this.margins.right,
            (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) -
              (parseInt(e(r).css("borderTopWidth"), 10) || 0) -
              (parseInt(e(r).css("paddingBottom"), 10) || 0) -
              this.helperProportions.height -
              this.margins.top -
              this.margins.bottom,
          ]),
          (this.relative_container = n);
      } else
        i.containment.constructor === Array &&
          (this.containment = i.containment);
    },
    _convertPositionTo: function (t, n) {
      n || (n = this.position);
      var r = t === "absolute" ? 1 : -1,
        i =
          this.cssPosition !== "absolute" ||
          (this.scrollParent[0] !== document &&
            !!e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        s = /(html|body)/i.test(i[0].tagName);
      return {
        top:
          n.top +
          this.offset.relative.top * r +
          this.offset.parent.top * r -
          (this.cssPosition === "fixed"
            ? -this.scrollParent.scrollTop()
            : s
            ? 0
            : i.scrollTop()) *
            r,
        left:
          n.left +
          this.offset.relative.left * r +
          this.offset.parent.left * r -
          (this.cssPosition === "fixed"
            ? -this.scrollParent.scrollLeft()
            : s
            ? 0
            : i.scrollLeft()) *
            r,
      };
    },
    _generatePosition: function (t) {
      var n,
        r,
        i,
        s,
        o = this.options,
        u =
          this.cssPosition !== "absolute" ||
          (this.scrollParent[0] !== document &&
            !!e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        a = /(html|body)/i.test(u[0].tagName),
        f = t.pageX,
        l = t.pageY;
      return (
        this.originalPosition &&
          (this.containment &&
            (this.relative_container
              ? ((r = this.relative_container.offset()),
                (n = [
                  this.containment[0] + r.left,
                  this.containment[1] + r.top,
                  this.containment[2] + r.left,
                  this.containment[3] + r.top,
                ]))
              : (n = this.containment),
            t.pageX - this.offset.click.left < n[0] &&
              (f = n[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < n[1] &&
              (l = n[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > n[2] &&
              (f = n[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > n[3] &&
              (l = n[3] + this.offset.click.top)),
          o.grid &&
            ((i = o.grid[1]
              ? this.originalPageY +
                Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1]
              : this.originalPageY),
            (l = n
              ? i - this.offset.click.top >= n[1] ||
                i - this.offset.click.top > n[3]
                ? i
                : i - this.offset.click.top >= n[1]
                ? i - o.grid[1]
                : i + o.grid[1]
              : i),
            (s = o.grid[0]
              ? this.originalPageX +
                Math.round((f - this.originalPageX) / o.grid[0]) * o.grid[0]
              : this.originalPageX),
            (f = n
              ? s - this.offset.click.left >= n[0] ||
                s - this.offset.click.left > n[2]
                ? s
                : s - this.offset.click.left >= n[0]
                ? s - o.grid[0]
                : s + o.grid[0]
              : s))),
        {
          top:
            l -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            (this.cssPosition === "fixed"
              ? -this.scrollParent.scrollTop()
              : a
              ? 0
              : u.scrollTop()),
          left:
            f -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            (this.cssPosition === "fixed"
              ? -this.scrollParent.scrollLeft()
              : a
              ? 0
              : u.scrollLeft()),
        }
      );
    },
    _clear: function () {
      this.helper.removeClass("ui-draggable-dragging"),
        this.helper[0] !== this.element[0] &&
          !this.cancelHelperRemoval &&
          this.helper.remove(),
        (this.helper = null),
        (this.cancelHelperRemoval = !1);
    },
    _trigger: function (t, n, r) {
      return (
        (r = r || this._uiHash()),
        e.ui.plugin.call(this, t, [n, r]),
        t === "drag" &&
          (this.positionAbs = this._convertPositionTo("absolute")),
        e.Widget.prototype._trigger.call(this, t, n, r)
      );
    },
    plugins: {},
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs,
      };
    },
  }),
    e.ui.plugin.add("draggable", "connectToSortable", {
      start: function (t, n) {
        var r = e(this).data("ui-draggable"),
          i = r.options,
          s = e.extend({}, n, { item: r.element });
        (r.sortables = []),
          e(i.connectToSortable).each(function () {
            var n = e.data(this, "ui-sortable");
            n &&
              !n.options.disabled &&
              (r.sortables.push({
                instance: n,
                shouldRevert: n.options.revert,
              }),
              n.refreshPositions(),
              n._trigger("activate", t, s));
          });
      },
      stop: function (t, n) {
        var r = e(this).data("ui-draggable"),
          i = e.extend({}, n, { item: r.element });
        e.each(r.sortables, function () {
          this.instance.isOver
            ? ((this.instance.isOver = 0),
              (r.cancelHelperRemoval = !0),
              (this.instance.cancelHelperRemoval = !1),
              this.shouldRevert && (this.instance.options.revert = !0),
              this.instance._mouseStop(t),
              (this.instance.options.helper = this.instance.options._helper),
              r.options.helper === "original" &&
                this.instance.currentItem.css({ top: "auto", left: "auto" }))
            : ((this.instance.cancelHelperRemoval = !1),
              this.instance._trigger("deactivate", t, i));
        });
      },
      drag: function (t, n) {
        var r = e(this).data("ui-draggable"),
          i = this;
        e.each(r.sortables, function () {
          var s = !1,
            o = this;
          (this.instance.positionAbs = r.positionAbs),
            (this.instance.helperProportions = r.helperProportions),
            (this.instance.offset.click = r.offset.click),
            this.instance._intersectsWith(this.instance.containerCache) &&
              ((s = !0),
              e.each(r.sortables, function () {
                return (
                  (this.instance.positionAbs = r.positionAbs),
                  (this.instance.helperProportions = r.helperProportions),
                  (this.instance.offset.click = r.offset.click),
                  this !== o &&
                    this.instance._intersectsWith(
                      this.instance.containerCache
                    ) &&
                    e.contains(
                      o.instance.element[0],
                      this.instance.element[0]
                    ) &&
                    (s = !1),
                  s
                );
              })),
            s
              ? (this.instance.isOver ||
                  ((this.instance.isOver = 1),
                  (this.instance.currentItem = e(i)
                    .clone()
                    .removeAttr("id")
                    .appendTo(this.instance.element)
                    .data("ui-sortable-item", !0)),
                  (this.instance.options._helper =
                    this.instance.options.helper),
                  (this.instance.options.helper = function () {
                    return n.helper[0];
                  }),
                  (t.target = this.instance.currentItem[0]),
                  this.instance._mouseCapture(t, !0),
                  this.instance._mouseStart(t, !0, !0),
                  (this.instance.offset.click.top = r.offset.click.top),
                  (this.instance.offset.click.left = r.offset.click.left),
                  (this.instance.offset.parent.left -=
                    r.offset.parent.left - this.instance.offset.parent.left),
                  (this.instance.offset.parent.top -=
                    r.offset.parent.top - this.instance.offset.parent.top),
                  r._trigger("toSortable", t),
                  (r.dropped = this.instance.element),
                  (r.currentItem = r.element),
                  (this.instance.fromOutside = r)),
                this.instance.currentItem && this.instance._mouseDrag(t))
              : this.instance.isOver &&
                ((this.instance.isOver = 0),
                (this.instance.cancelHelperRemoval = !0),
                (this.instance.options.revert = !1),
                this.instance._trigger(
                  "out",
                  t,
                  this.instance._uiHash(this.instance)
                ),
                this.instance._mouseStop(t, !0),
                (this.instance.options.helper = this.instance.options._helper),
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                r._trigger("fromSortable", t),
                (r.dropped = !1));
        });
      },
    }),
    e.ui.plugin.add("draggable", "cursor", {
      start: function () {
        var t = e("body"),
          n = e(this).data("ui-draggable").options;
        t.css("cursor") && (n._cursor = t.css("cursor")),
          t.css("cursor", n.cursor);
      },
      stop: function () {
        var t = e(this).data("ui-draggable").options;
        t._cursor && e("body").css("cursor", t._cursor);
      },
    }),
    e.ui.plugin.add("draggable", "opacity", {
      start: function (t, n) {
        var r = e(n.helper),
          i = e(this).data("ui-draggable").options;
        r.css("opacity") && (i._opacity = r.css("opacity")),
          r.css("opacity", i.opacity);
      },
      stop: function (t, n) {
        var r = e(this).data("ui-draggable").options;
        r._opacity && e(n.helper).css("opacity", r._opacity);
      },
    }),
    e.ui.plugin.add("draggable", "scroll", {
      start: function () {
        var t = e(this).data("ui-draggable");
        t.scrollParent[0] !== document &&
          t.scrollParent[0].tagName !== "HTML" &&
          (t.overflowOffset = t.scrollParent.offset());
      },
      drag: function (t) {
        var n = e(this).data("ui-draggable"),
          r = n.options,
          i = !1;
        if (
          n.scrollParent[0] !== document &&
          n.scrollParent[0].tagName !== "HTML"
        ) {
          if (!r.axis || r.axis !== "x")
            n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY <
            r.scrollSensitivity
              ? (n.scrollParent[0].scrollTop = i =
                  n.scrollParent[0].scrollTop + r.scrollSpeed)
              : t.pageY - n.overflowOffset.top < r.scrollSensitivity &&
                (n.scrollParent[0].scrollTop = i =
                  n.scrollParent[0].scrollTop - r.scrollSpeed);
          if (!r.axis || r.axis !== "y")
            n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX <
            r.scrollSensitivity
              ? (n.scrollParent[0].scrollLeft = i =
                  n.scrollParent[0].scrollLeft + r.scrollSpeed)
              : t.pageX - n.overflowOffset.left < r.scrollSensitivity &&
                (n.scrollParent[0].scrollLeft = i =
                  n.scrollParent[0].scrollLeft - r.scrollSpeed);
        } else {
          if (!r.axis || r.axis !== "x")
            t.pageY - e(document).scrollTop() < r.scrollSensitivity
              ? (i = e(document).scrollTop(
                  e(document).scrollTop() - r.scrollSpeed
                ))
              : e(window).height() - (t.pageY - e(document).scrollTop()) <
                  r.scrollSensitivity &&
                (i = e(document).scrollTop(
                  e(document).scrollTop() + r.scrollSpeed
                ));
          if (!r.axis || r.axis !== "y")
            t.pageX - e(document).scrollLeft() < r.scrollSensitivity
              ? (i = e(document).scrollLeft(
                  e(document).scrollLeft() - r.scrollSpeed
                ))
              : e(window).width() - (t.pageX - e(document).scrollLeft()) <
                  r.scrollSensitivity &&
                (i = e(document).scrollLeft(
                  e(document).scrollLeft() + r.scrollSpeed
                ));
        }
        i !== !1 &&
          e.ui.ddmanager &&
          !r.dropBehaviour &&
          e.ui.ddmanager.prepareOffsets(n, t);
      },
    }),
    e.ui.plugin.add("draggable", "snap", {
      start: function () {
        var t = e(this).data("ui-draggable"),
          n = t.options;
        (t.snapElements = []),
          e(
            n.snap.constructor !== String
              ? n.snap.items || ":data(ui-draggable)"
              : n.snap
          ).each(function () {
            var n = e(this),
              r = n.offset();
            this !== t.element[0] &&
              t.snapElements.push({
                item: this,
                width: n.outerWidth(),
                height: n.outerHeight(),
                top: r.top,
                left: r.left,
              });
          });
      },
      drag: function (t, n) {
        var r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p = e(this).data("ui-draggable"),
          d = p.options,
          v = d.snapTolerance,
          m = n.offset.left,
          g = m + p.helperProportions.width,
          y = n.offset.top,
          b = y + p.helperProportions.height;
        for (c = p.snapElements.length - 1; c >= 0; c--) {
          (u = p.snapElements[c].left),
            (a = u + p.snapElements[c].width),
            (f = p.snapElements[c].top),
            (l = f + p.snapElements[c].height);
          if (
            !(
              (u - v < m && m < a + v && f - v < y && y < l + v) ||
              (u - v < m && m < a + v && f - v < b && b < l + v) ||
              (u - v < g && g < a + v && f - v < y && y < l + v) ||
              (u - v < g && g < a + v && f - v < b && b < l + v)
            )
          ) {
            p.snapElements[c].snapping &&
              p.options.snap.release &&
              p.options.snap.release.call(
                p.element,
                t,
                e.extend(p._uiHash(), { snapItem: p.snapElements[c].item })
              ),
              (p.snapElements[c].snapping = !1);
            continue;
          }
          d.snapMode !== "inner" &&
            ((r = Math.abs(f - b) <= v),
            (i = Math.abs(l - y) <= v),
            (s = Math.abs(u - g) <= v),
            (o = Math.abs(a - m) <= v),
            r &&
              (n.position.top =
                p._convertPositionTo("relative", {
                  top: f - p.helperProportions.height,
                  left: 0,
                }).top - p.margins.top),
            i &&
              (n.position.top =
                p._convertPositionTo("relative", { top: l, left: 0 }).top -
                p.margins.top),
            s &&
              (n.position.left =
                p._convertPositionTo("relative", {
                  top: 0,
                  left: u - p.helperProportions.width,
                }).left - p.margins.left),
            o &&
              (n.position.left =
                p._convertPositionTo("relative", { top: 0, left: a }).left -
                p.margins.left)),
            (h = r || i || s || o),
            d.snapMode !== "outer" &&
              ((r = Math.abs(f - y) <= v),
              (i = Math.abs(l - b) <= v),
              (s = Math.abs(u - m) <= v),
              (o = Math.abs(a - g) <= v),
              r &&
                (n.position.top =
                  p._convertPositionTo("relative", { top: f, left: 0 }).top -
                  p.margins.top),
              i &&
                (n.position.top =
                  p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0,
                  }).top - p.margins.top),
              s &&
                (n.position.left =
                  p._convertPositionTo("relative", { top: 0, left: u }).left -
                  p.margins.left),
              o &&
                (n.position.left =
                  p._convertPositionTo("relative", {
                    top: 0,
                    left: a - p.helperProportions.width,
                  }).left - p.margins.left)),
            !p.snapElements[c].snapping &&
              (r || i || s || o || h) &&
              p.options.snap.snap &&
              p.options.snap.snap.call(
                p.element,
                t,
                e.extend(p._uiHash(), { snapItem: p.snapElements[c].item })
              ),
            (p.snapElements[c].snapping = r || i || s || o || h);
        }
      },
    }),
    e.ui.plugin.add("draggable", "stack", {
      start: function () {
        var t,
          n = this.data("ui-draggable").options,
          r = e.makeArray(e(n.stack)).sort(function (t, n) {
            return (
              (parseInt(e(t).css("zIndex"), 10) || 0) -
              (parseInt(e(n).css("zIndex"), 10) || 0)
            );
          });
        if (!r.length) return;
        (t = parseInt(e(r[0]).css("zIndex"), 10) || 0),
          e(r).each(function (n) {
            e(this).css("zIndex", t + n);
          }),
          this.css("zIndex", t + r.length);
      },
    }),
    e.ui.plugin.add("draggable", "zIndex", {
      start: function (t, n) {
        var r = e(n.helper),
          i = e(this).data("ui-draggable").options;
        r.css("zIndex") && (i._zIndex = r.css("zIndex")),
          r.css("zIndex", i.zIndex);
      },
      stop: function (t, n) {
        var r = e(this).data("ui-draggable").options;
        r._zIndex && e(n.helper).css("zIndex", r._zIndex);
      },
    });
})(jQuery);
(function (e, t) {
  function n(e, t, n) {
    return e > t && e < t + n;
  }
  e.widget("ui.droppable", {
    version: "1.10.1",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null,
    },
    _create: function () {
      var t = this.options,
        n = t.accept;
      (this.isover = !1),
        (this.isout = !0),
        (this.accept = e.isFunction(n)
          ? n
          : function (e) {
              return e.is(n);
            }),
        (this.proportions = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight,
        }),
        (e.ui.ddmanager.droppables[t.scope] =
          e.ui.ddmanager.droppables[t.scope] || []),
        e.ui.ddmanager.droppables[t.scope].push(this),
        t.addClasses && this.element.addClass("ui-droppable");
    },
    _destroy: function () {
      var t = 0,
        n = e.ui.ddmanager.droppables[this.options.scope];
      for (; t < n.length; t++) n[t] === this && n.splice(t, 1);
      this.element.removeClass("ui-droppable ui-droppable-disabled");
    },
    _setOption: function (t, n) {
      t === "accept" &&
        (this.accept = e.isFunction(n)
          ? n
          : function (e) {
              return e.is(n);
            }),
        e.Widget.prototype._setOption.apply(this, arguments);
    },
    _activate: function (t) {
      var n = e.ui.ddmanager.current;
      this.options.activeClass &&
        this.element.addClass(this.options.activeClass),
        n && this._trigger("activate", t, this.ui(n));
    },
    _deactivate: function (t) {
      var n = e.ui.ddmanager.current;
      this.options.activeClass &&
        this.element.removeClass(this.options.activeClass),
        n && this._trigger("deactivate", t, this.ui(n));
    },
    _over: function (t) {
      var n = e.ui.ddmanager.current;
      if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;
      this.accept.call(this.element[0], n.currentItem || n.element) &&
        (this.options.hoverClass &&
          this.element.addClass(this.options.hoverClass),
        this._trigger("over", t, this.ui(n)));
    },
    _out: function (t) {
      var n = e.ui.ddmanager.current;
      if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;
      this.accept.call(this.element[0], n.currentItem || n.element) &&
        (this.options.hoverClass &&
          this.element.removeClass(this.options.hoverClass),
        this._trigger("out", t, this.ui(n)));
    },
    _drop: function (t, n) {
      var r = n || e.ui.ddmanager.current,
        i = !1;
      return !r || (r.currentItem || r.element)[0] === this.element[0]
        ? !1
        : (this.element
            .find(":data(ui-droppable)")
            .not(".ui-draggable-dragging")
            .each(function () {
              var t = e.data(this, "ui-droppable");
              if (
                t.options.greedy &&
                !t.options.disabled &&
                t.options.scope === r.options.scope &&
                t.accept.call(t.element[0], r.currentItem || r.element) &&
                e.ui.intersect(
                  r,
                  e.extend(t, { offset: t.element.offset() }),
                  t.options.tolerance
                )
              )
                return (i = !0), !1;
            }),
          i
            ? !1
            : this.accept.call(this.element[0], r.currentItem || r.element)
            ? (this.options.activeClass &&
                this.element.removeClass(this.options.activeClass),
              this.options.hoverClass &&
                this.element.removeClass(this.options.hoverClass),
              this._trigger("drop", t, this.ui(r)),
              this.element)
            : !1);
    },
    ui: function (e) {
      return {
        draggable: e.currentItem || e.element,
        helper: e.helper,
        position: e.position,
        offset: e.positionAbs,
      };
    },
  }),
    (e.ui.intersect = function (e, t, r) {
      if (!t.offset) return !1;
      var i,
        s,
        o = (e.positionAbs || e.position.absolute).left,
        u = o + e.helperProportions.width,
        a = (e.positionAbs || e.position.absolute).top,
        f = a + e.helperProportions.height,
        l = t.offset.left,
        c = l + t.proportions.width,
        h = t.offset.top,
        p = h + t.proportions.height;
      switch (r) {
        case "fit":
          return l <= o && u <= c && h <= a && f <= p;
        case "intersect":
          return (
            l < o + e.helperProportions.width / 2 &&
            u - e.helperProportions.width / 2 < c &&
            h < a + e.helperProportions.height / 2 &&
            f - e.helperProportions.height / 2 < p
          );
        case "pointer":
          return (
            (i =
              (e.positionAbs || e.position.absolute).left +
              (e.clickOffset || e.offset.click).left),
            (s =
              (e.positionAbs || e.position.absolute).top +
              (e.clickOffset || e.offset.click).top),
            n(s, h, t.proportions.height) && n(i, l, t.proportions.width)
          );
        case "touch":
          return (
            ((a >= h && a <= p) || (f >= h && f <= p) || (a < h && f > p)) &&
            ((o >= l && o <= c) || (u >= l && u <= c) || (o < l && u > c))
          );
        default:
          return !1;
      }
    }),
    (e.ui.ddmanager = {
      current: null,
      droppables: { default: [] },
      prepareOffsets: function (t, n) {
        var r,
          i,
          s = e.ui.ddmanager.droppables[t.options.scope] || [],
          o = n ? n.type : null,
          u = (t.currentItem || t.element)
            .find(":data(ui-droppable)")
            .addBack();
        e: for (r = 0; r < s.length; r++) {
          if (
            s[r].options.disabled ||
            (t &&
              !s[r].accept.call(s[r].element[0], t.currentItem || t.element))
          )
            continue;
          for (i = 0; i < u.length; i++)
            if (u[i] === s[r].element[0]) {
              s[r].proportions.height = 0;
              continue e;
            }
          s[r].visible = s[r].element.css("display") !== "none";
          if (!s[r].visible) continue;
          o === "mousedown" && s[r]._activate.call(s[r], n),
            (s[r].offset = s[r].element.offset()),
            (s[r].proportions = {
              width: s[r].element[0].offsetWidth,
              height: s[r].element[0].offsetHeight,
            });
        }
      },
      drop: function (t, n) {
        var r = !1;
        return (
          e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
            if (!this.options) return;
            !this.options.disabled &&
              this.visible &&
              e.ui.intersect(t, this, this.options.tolerance) &&
              (r = this._drop.call(this, n) || r),
              !this.options.disabled &&
                this.visible &&
                this.accept.call(this.element[0], t.currentItem || t.element) &&
                ((this.isout = !0),
                (this.isover = !1),
                this._deactivate.call(this, n));
          }),
          r
        );
      },
      dragStart: function (t, n) {
        t.element.parentsUntil("body").bind("scroll.droppable", function () {
          t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n);
        });
      },
      drag: function (t, n) {
        t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n),
          e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
            if (this.options.disabled || this.greedyChild || !this.visible)
              return;
            var r,
              i,
              s,
              o = e.ui.intersect(t, this, this.options.tolerance),
              u =
                !o && this.isover
                  ? "isout"
                  : o && !this.isover
                  ? "isover"
                  : null;
            if (!u) return;
            this.options.greedy &&
              ((i = this.options.scope),
              (s = this.element
                .parents(":data(ui-droppable)")
                .filter(function () {
                  return e.data(this, "ui-droppable").options.scope === i;
                })),
              s.length &&
                ((r = e.data(s[0], "ui-droppable")),
                (r.greedyChild = u === "isover"))),
              r &&
                u === "isover" &&
                ((r.isover = !1), (r.isout = !0), r._out.call(r, n)),
              (this[u] = !0),
              (this[u === "isout" ? "isover" : "isout"] = !1),
              this[u === "isover" ? "_over" : "_out"].call(this, n),
              r &&
                u === "isout" &&
                ((r.isout = !1), (r.isover = !0), r._over.call(r, n));
          });
      },
      dragStop: function (t, n) {
        t.element.parentsUntil("body").unbind("scroll.droppable"),
          t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n);
      },
    });
})(jQuery);
(function (e, t) {
  function n(e) {
    return parseInt(e, 10) || 0;
  }
  function r(e) {
    return !isNaN(parseInt(e, 10));
  }
  e.widget("ui.resizable", e.ui.mouse, {
    version: "1.10.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null,
    },
    _create: function () {
      var t,
        n,
        r,
        i,
        s,
        o = this,
        u = this.options;
      this.element.addClass("ui-resizable"),
        e.extend(this, {
          _aspectRatio: !!u.aspectRatio,
          aspectRatio: u.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper:
            u.helper || u.ghost || u.animate
              ? u.helper || "ui-resizable-helper"
              : null,
        }),
        this.element[0].nodeName.match(
          /canvas|textarea|input|select|button|img/i
        ) &&
          (this.element.wrap(
            e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
              position: this.element.css("position"),
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              top: this.element.css("top"),
              left: this.element.css("left"),
            })
          ),
          (this.element = this.element
            .parent()
            .data("ui-resizable", this.element.data("ui-resizable"))),
          (this.elementIsWrapper = !0),
          this.element.css({
            marginLeft: this.originalElement.css("marginLeft"),
            marginTop: this.originalElement.css("marginTop"),
            marginRight: this.originalElement.css("marginRight"),
            marginBottom: this.originalElement.css("marginBottom"),
          }),
          this.originalElement.css({
            marginLeft: 0,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
          }),
          (this.originalResizeStyle = this.originalElement.css("resize")),
          this.originalElement.css("resize", "none"),
          this._proportionallyResizeElements.push(
            this.originalElement.css({
              position: "static",
              zoom: 1,
              display: "block",
            })
          ),
          this.originalElement.css({
            margin: this.originalElement.css("margin"),
          }),
          this._proportionallyResize()),
        (this.handles =
          u.handles ||
          (e(".ui-resizable-handle", this.element).length
            ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw",
              }
            : "e,s,se"));
      if (this.handles.constructor === String) {
        this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"),
          (t = this.handles.split(",")),
          (this.handles = {});
        for (n = 0; n < t.length; n++)
          (r = e.trim(t[n])),
            (s = "ui-resizable-" + r),
            (i = e("<div class='ui-resizable-handle " + s + "'></div>")),
            i.css({ zIndex: u.zIndex }),
            "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
            (this.handles[r] = ".ui-resizable-" + r),
            this.element.append(i);
      }
      (this._renderAxis = function (t) {
        var n, r, i, s;
        t = t || this.element;
        for (n in this.handles) {
          this.handles[n].constructor === String &&
            (this.handles[n] = e(this.handles[n], this.element).show()),
            this.elementIsWrapper &&
              this.originalElement[0].nodeName.match(
                /textarea|input|select|button/i
              ) &&
              ((r = e(this.handles[n], this.element)),
              (s = /sw|ne|nw|se|n|s/.test(n)
                ? r.outerHeight()
                : r.outerWidth()),
              (i = [
                "padding",
                /ne|nw|n/.test(n)
                  ? "Top"
                  : /se|sw|s/.test(n)
                  ? "Bottom"
                  : /^e$/.test(n)
                  ? "Right"
                  : "Left",
              ].join("")),
              t.css(i, s),
              this._proportionallyResize());
          if (!e(this.handles[n]).length) continue;
        }
      }),
        this._renderAxis(this.element),
        (this._handles = e(
          ".ui-resizable-handle",
          this.element
        ).disableSelection()),
        this._handles.mouseover(function () {
          o.resizing ||
            (this.className &&
              (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
            (o.axis = i && i[1] ? i[1] : "se"));
        }),
        u.autoHide &&
          (this._handles.hide(),
          e(this.element)
            .addClass("ui-resizable-autohide")
            .mouseenter(function () {
              if (u.disabled) return;
              e(this).removeClass("ui-resizable-autohide"), o._handles.show();
            })
            .mouseleave(function () {
              if (u.disabled) return;
              o.resizing ||
                (e(this).addClass("ui-resizable-autohide"), o._handles.hide());
            })),
        this._mouseInit();
    },
    _destroy: function () {
      this._mouseDestroy();
      var t,
        n = function (t) {
          e(t)
            .removeClass(
              "ui-resizable ui-resizable-disabled ui-resizable-resizing"
            )
            .removeData("resizable")
            .removeData("ui-resizable")
            .unbind(".resizable")
            .find(".ui-resizable-handle")
            .remove();
        };
      return (
        this.elementIsWrapper &&
          (n(this.element),
          (t = this.element),
          this.originalElement
            .css({
              position: t.css("position"),
              width: t.outerWidth(),
              height: t.outerHeight(),
              top: t.css("top"),
              left: t.css("left"),
            })
            .insertAfter(t),
          t.remove()),
        this.originalElement.css("resize", this.originalResizeStyle),
        n(this.originalElement),
        this
      );
    },
    _mouseCapture: function (t) {
      var n,
        r,
        i = !1;
      for (n in this.handles) {
        r = e(this.handles[n])[0];
        if (r === t.target || e.contains(r, t.target)) i = !0;
      }
      return !this.options.disabled && i;
    },
    _mouseStart: function (t) {
      var r,
        i,
        s,
        o = this.options,
        u = this.element.position(),
        a = this.element;
      return (
        (this.resizing = !0),
        /absolute/.test(a.css("position"))
          ? a.css({
              position: "absolute",
              top: a.css("top"),
              left: a.css("left"),
            })
          : a.is(".ui-draggable") &&
            a.css({ position: "absolute", top: u.top, left: u.left }),
        this._renderProxy(),
        (r = n(this.helper.css("left"))),
        (i = n(this.helper.css("top"))),
        o.containment &&
          ((r += e(o.containment).scrollLeft() || 0),
          (i += e(o.containment).scrollTop() || 0)),
        (this.offset = this.helper.offset()),
        (this.position = { left: r, top: i }),
        (this.size = this._helper
          ? { width: a.outerWidth(), height: a.outerHeight() }
          : { width: a.width(), height: a.height() }),
        (this.originalSize = this._helper
          ? { width: a.outerWidth(), height: a.outerHeight() }
          : { width: a.width(), height: a.height() }),
        (this.originalPosition = { left: r, top: i }),
        (this.sizeDiff = {
          width: a.outerWidth() - a.width(),
          height: a.outerHeight() - a.height(),
        }),
        (this.originalMousePosition = { left: t.pageX, top: t.pageY }),
        (this.aspectRatio =
          typeof o.aspectRatio == "number"
            ? o.aspectRatio
            : this.originalSize.width / this.originalSize.height || 1),
        (s = e(".ui-resizable-" + this.axis).css("cursor")),
        e("body").css("cursor", s === "auto" ? this.axis + "-resize" : s),
        a.addClass("ui-resizable-resizing"),
        this._propagate("start", t),
        !0
      );
    },
    _mouseDrag: function (t) {
      var n,
        r = this.helper,
        i = {},
        s = this.originalMousePosition,
        o = this.axis,
        u = this.position.top,
        a = this.position.left,
        f = this.size.width,
        l = this.size.height,
        c = t.pageX - s.left || 0,
        h = t.pageY - s.top || 0,
        p = this._change[o];
      if (!p) return !1;
      (n = p.apply(this, [t, c, h])), this._updateVirtualBoundaries(t.shiftKey);
      if (this._aspectRatio || t.shiftKey) n = this._updateRatio(n, t);
      return (
        (n = this._respectSize(n, t)),
        this._updateCache(n),
        this._propagate("resize", t),
        this.position.top !== u && (i.top = this.position.top + "px"),
        this.position.left !== a && (i.left = this.position.left + "px"),
        this.size.width !== f && (i.width = this.size.width + "px"),
        this.size.height !== l && (i.height = this.size.height + "px"),
        r.css(i),
        !this._helper &&
          this._proportionallyResizeElements.length &&
          this._proportionallyResize(),
        e.isEmptyObject(i) || this._trigger("resize", t, this.ui()),
        !1
      );
    },
    _mouseStop: function (t) {
      this.resizing = !1;
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f = this.options,
        l = this;
      return (
        this._helper &&
          ((n = this._proportionallyResizeElements),
          (r = n.length && /textarea/i.test(n[0].nodeName)),
          (i = r && e.ui.hasScroll(n[0], "left") ? 0 : l.sizeDiff.height),
          (s = r ? 0 : l.sizeDiff.width),
          (o = { width: l.helper.width() - s, height: l.helper.height() - i }),
          (u =
            parseInt(l.element.css("left"), 10) +
              (l.position.left - l.originalPosition.left) || null),
          (a =
            parseInt(l.element.css("top"), 10) +
              (l.position.top - l.originalPosition.top) || null),
          f.animate || this.element.css(e.extend(o, { top: a, left: u })),
          l.helper.height(l.size.height),
          l.helper.width(l.size.width),
          this._helper && !f.animate && this._proportionallyResize()),
        e("body").css("cursor", "auto"),
        this.element.removeClass("ui-resizable-resizing"),
        this._propagate("stop", t),
        this._helper && this.helper.remove(),
        !1
      );
    },
    _updateVirtualBoundaries: function (e) {
      var t,
        n,
        i,
        s,
        o,
        u = this.options;
      o = {
        minWidth: r(u.minWidth) ? u.minWidth : 0,
        maxWidth: r(u.maxWidth) ? u.maxWidth : Infinity,
        minHeight: r(u.minHeight) ? u.minHeight : 0,
        maxHeight: r(u.maxHeight) ? u.maxHeight : Infinity,
      };
      if (this._aspectRatio || e)
        (t = o.minHeight * this.aspectRatio),
          (i = o.minWidth / this.aspectRatio),
          (n = o.maxHeight * this.aspectRatio),
          (s = o.maxWidth / this.aspectRatio),
          t > o.minWidth && (o.minWidth = t),
          i > o.minHeight && (o.minHeight = i),
          n < o.maxWidth && (o.maxWidth = n),
          s < o.maxHeight && (o.maxHeight = s);
      this._vBoundaries = o;
    },
    _updateCache: function (e) {
      (this.offset = this.helper.offset()),
        r(e.left) && (this.position.left = e.left),
        r(e.top) && (this.position.top = e.top),
        r(e.height) && (this.size.height = e.height),
        r(e.width) && (this.size.width = e.width);
    },
    _updateRatio: function (e) {
      var t = this.position,
        n = this.size,
        i = this.axis;
      return (
        r(e.height)
          ? (e.width = e.height * this.aspectRatio)
          : r(e.width) && (e.height = e.width / this.aspectRatio),
        i === "sw" && ((e.left = t.left + (n.width - e.width)), (e.top = null)),
        i === "nw" &&
          ((e.top = t.top + (n.height - e.height)),
          (e.left = t.left + (n.width - e.width))),
        e
      );
    },
    _respectSize: function (e) {
      var t = this._vBoundaries,
        n = this.axis,
        i = r(e.width) && t.maxWidth && t.maxWidth < e.width,
        s = r(e.height) && t.maxHeight && t.maxHeight < e.height,
        o = r(e.width) && t.minWidth && t.minWidth > e.width,
        u = r(e.height) && t.minHeight && t.minHeight > e.height,
        a = this.originalPosition.left + this.originalSize.width,
        f = this.position.top + this.size.height,
        l = /sw|nw|w/.test(n),
        c = /nw|ne|n/.test(n);
      return (
        o && (e.width = t.minWidth),
        u && (e.height = t.minHeight),
        i && (e.width = t.maxWidth),
        s && (e.height = t.maxHeight),
        o && l && (e.left = a - t.minWidth),
        i && l && (e.left = a - t.maxWidth),
        u && c && (e.top = f - t.minHeight),
        s && c && (e.top = f - t.maxHeight),
        !e.width && !e.height && !e.left && e.top
          ? (e.top = null)
          : !e.width && !e.height && !e.top && e.left && (e.left = null),
        e
      );
    },
    _proportionallyResize: function () {
      if (!this._proportionallyResizeElements.length) return;
      var e,
        t,
        n,
        r,
        i,
        s = this.helper || this.element;
      for (e = 0; e < this._proportionallyResizeElements.length; e++) {
        i = this._proportionallyResizeElements[e];
        if (!this.borderDif) {
          (this.borderDif = []),
            (n = [
              i.css("borderTopWidth"),
              i.css("borderRightWidth"),
              i.css("borderBottomWidth"),
              i.css("borderLeftWidth"),
            ]),
            (r = [
              i.css("paddingTop"),
              i.css("paddingRight"),
              i.css("paddingBottom"),
              i.css("paddingLeft"),
            ]);
          for (t = 0; t < n.length; t++)
            this.borderDif[t] =
              (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0);
        }
        i.css({
          height: s.height() - this.borderDif[0] - this.borderDif[2] || 0,
          width: s.width() - this.borderDif[1] - this.borderDif[3] || 0,
        });
      }
    },
    _renderProxy: function () {
      var t = this.element,
        n = this.options;
      (this.elementOffset = t.offset()),
        this._helper
          ? ((this.helper =
              this.helper || e("<div style='overflow:hidden;'></div>")),
            this.helper
              .addClass(this._helper)
              .css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++n.zIndex,
              }),
            this.helper.appendTo("body").disableSelection())
          : (this.helper = this.element);
    },
    _change: {
      e: function (e, t) {
        return { width: this.originalSize.width + t };
      },
      w: function (e, t) {
        var n = this.originalSize,
          r = this.originalPosition;
        return { left: r.left + t, width: n.width - t };
      },
      n: function (e, t, n) {
        var r = this.originalSize,
          i = this.originalPosition;
        return { top: i.top + n, height: r.height - n };
      },
      s: function (e, t, n) {
        return { height: this.originalSize.height + n };
      },
      se: function (t, n, r) {
        return e.extend(
          this._change.s.apply(this, arguments),
          this._change.e.apply(this, [t, n, r])
        );
      },
      sw: function (t, n, r) {
        return e.extend(
          this._change.s.apply(this, arguments),
          this._change.w.apply(this, [t, n, r])
        );
      },
      ne: function (t, n, r) {
        return e.extend(
          this._change.n.apply(this, arguments),
          this._change.e.apply(this, [t, n, r])
        );
      },
      nw: function (t, n, r) {
        return e.extend(
          this._change.n.apply(this, arguments),
          this._change.w.apply(this, [t, n, r])
        );
      },
    },
    _propagate: function (t, n) {
      e.ui.plugin.call(this, t, [n, this.ui()]),
        t !== "resize" && this._trigger(t, n, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition,
      };
    },
  }),
    e.ui.plugin.add("resizable", "animate", {
      stop: function (t) {
        var n = e(this).data("ui-resizable"),
          r = n.options,
          i = n._proportionallyResizeElements,
          s = i.length && /textarea/i.test(i[0].nodeName),
          o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
          u = s ? 0 : n.sizeDiff.width,
          a = { width: n.size.width - u, height: n.size.height - o },
          f =
            parseInt(n.element.css("left"), 10) +
              (n.position.left - n.originalPosition.left) || null,
          l =
            parseInt(n.element.css("top"), 10) +
              (n.position.top - n.originalPosition.top) || null;
        n.element.animate(e.extend(a, l && f ? { top: l, left: f } : {}), {
          duration: r.animateDuration,
          easing: r.animateEasing,
          step: function () {
            var r = {
              width: parseInt(n.element.css("width"), 10),
              height: parseInt(n.element.css("height"), 10),
              top: parseInt(n.element.css("top"), 10),
              left: parseInt(n.element.css("left"), 10),
            };
            i && i.length && e(i[0]).css({ width: r.width, height: r.height }),
              n._updateCache(r),
              n._propagate("resize", t);
          },
        });
      },
    }),
    e.ui.plugin.add("resizable", "containment", {
      start: function () {
        var t,
          r,
          i,
          s,
          o,
          u,
          a,
          f = e(this).data("ui-resizable"),
          l = f.options,
          c = f.element,
          h = l.containment,
          p =
            h instanceof e
              ? h.get(0)
              : /parent/.test(h)
              ? c.parent().get(0)
              : h;
        if (!p) return;
        (f.containerElement = e(p)),
          /document/.test(h) || h === document
            ? ((f.containerOffset = { left: 0, top: 0 }),
              (f.containerPosition = { left: 0, top: 0 }),
              (f.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height:
                  e(document).height() || document.body.parentNode.scrollHeight,
              }))
            : ((t = e(p)),
              (r = []),
              e(["Top", "Right", "Left", "Bottom"]).each(function (e, i) {
                r[e] = n(t.css("padding" + i));
              }),
              (f.containerOffset = t.offset()),
              (f.containerPosition = t.position()),
              (f.containerSize = {
                height: t.innerHeight() - r[3],
                width: t.innerWidth() - r[1],
              }),
              (i = f.containerOffset),
              (s = f.containerSize.height),
              (o = f.containerSize.width),
              (u = e.ui.hasScroll(p, "left") ? p.scrollWidth : o),
              (a = e.ui.hasScroll(p) ? p.scrollHeight : s),
              (f.parentData = {
                element: p,
                left: i.left,
                top: i.top,
                width: u,
                height: a,
              }));
      },
      resize: function (t) {
        var n,
          r,
          i,
          s,
          o = e(this).data("ui-resizable"),
          u = o.options,
          a = o.containerOffset,
          f = o.position,
          l = o._aspectRatio || t.shiftKey,
          c = { top: 0, left: 0 },
          h = o.containerElement;
        h[0] !== document && /static/.test(h.css("position")) && (c = a),
          f.left < (o._helper ? a.left : 0) &&
            ((o.size.width =
              o.size.width +
              (o._helper
                ? o.position.left - a.left
                : o.position.left - c.left)),
            l && (o.size.height = o.size.width / o.aspectRatio),
            (o.position.left = u.helper ? a.left : 0)),
          f.top < (o._helper ? a.top : 0) &&
            ((o.size.height =
              o.size.height +
              (o._helper ? o.position.top - a.top : o.position.top)),
            l && (o.size.width = o.size.height * o.aspectRatio),
            (o.position.top = o._helper ? a.top : 0)),
          (o.offset.left = o.parentData.left + o.position.left),
          (o.offset.top = o.parentData.top + o.position.top),
          (n = Math.abs(
            (o._helper ? o.offset.left - c.left : o.offset.left - c.left) +
              o.sizeDiff.width
          )),
          (r = Math.abs(
            (o._helper ? o.offset.top - c.top : o.offset.top - a.top) +
              o.sizeDiff.height
          )),
          (i = o.containerElement.get(0) === o.element.parent().get(0)),
          (s = /relative|absolute/.test(o.containerElement.css("position"))),
          i && s && (n -= o.parentData.left),
          n + o.size.width >= o.parentData.width &&
            ((o.size.width = o.parentData.width - n),
            l && (o.size.height = o.size.width / o.aspectRatio)),
          r + o.size.height >= o.parentData.height &&
            ((o.size.height = o.parentData.height - r),
            l && (o.size.width = o.size.height * o.aspectRatio));
      },
      stop: function () {
        var t = e(this).data("ui-resizable"),
          n = t.options,
          r = t.containerOffset,
          i = t.containerPosition,
          s = t.containerElement,
          o = e(t.helper),
          u = o.offset(),
          a = o.outerWidth() - t.sizeDiff.width,
          f = o.outerHeight() - t.sizeDiff.height;
        t._helper &&
          !n.animate &&
          /relative/.test(s.css("position")) &&
          e(this).css({ left: u.left - i.left - r.left, width: a, height: f }),
          t._helper &&
            !n.animate &&
            /static/.test(s.css("position")) &&
            e(this).css({
              left: u.left - i.left - r.left,
              width: a,
              height: f,
            });
      },
    }),
    e.ui.plugin.add("resizable", "alsoResize", {
      start: function () {
        var t = e(this).data("ui-resizable"),
          n = t.options,
          r = function (t) {
            e(t).each(function () {
              var t = e(this);
              t.data("ui-resizable-alsoresize", {
                width: parseInt(t.width(), 10),
                height: parseInt(t.height(), 10),
                left: parseInt(t.css("left"), 10),
                top: parseInt(t.css("top"), 10),
              });
            });
          };
        typeof n.alsoResize == "object" && !n.alsoResize.parentNode
          ? n.alsoResize.length
            ? ((n.alsoResize = n.alsoResize[0]), r(n.alsoResize))
            : e.each(n.alsoResize, function (e) {
                r(e);
              })
          : r(n.alsoResize);
      },
      resize: function (t, n) {
        var r = e(this).data("ui-resizable"),
          i = r.options,
          s = r.originalSize,
          o = r.originalPosition,
          u = {
            height: r.size.height - s.height || 0,
            width: r.size.width - s.width || 0,
            top: r.position.top - o.top || 0,
            left: r.position.left - o.left || 0,
          },
          a = function (t, r) {
            e(t).each(function () {
              var t = e(this),
                i = e(this).data("ui-resizable-alsoresize"),
                s = {},
                o =
                  r && r.length
                    ? r
                    : t.parents(n.originalElement[0]).length
                    ? ["width", "height"]
                    : ["width", "height", "top", "left"];
              e.each(o, function (e, t) {
                var n = (i[t] || 0) + (u[t] || 0);
                n && n >= 0 && (s[t] = n || null);
              }),
                t.css(s);
            });
          };
        typeof i.alsoResize == "object" && !i.alsoResize.nodeType
          ? e.each(i.alsoResize, function (e, t) {
              a(e, t);
            })
          : a(i.alsoResize);
      },
      stop: function () {
        e(this).removeData("resizable-alsoresize");
      },
    }),
    e.ui.plugin.add("resizable", "ghost", {
      start: function () {
        var t = e(this).data("ui-resizable"),
          n = t.options,
          r = t.size;
        (t.ghost = t.originalElement.clone()),
          t.ghost
            .css({
              opacity: 0.25,
              display: "block",
              position: "relative",
              height: r.height,
              width: r.width,
              margin: 0,
              left: 0,
              top: 0,
            })
            .addClass("ui-resizable-ghost")
            .addClass(typeof n.ghost == "string" ? n.ghost : ""),
          t.ghost.appendTo(t.helper);
      },
      resize: function () {
        var t = e(this).data("ui-resizable");
        t.ghost &&
          t.ghost.css({
            position: "relative",
            height: t.size.height,
            width: t.size.width,
          });
      },
      stop: function () {
        var t = e(this).data("ui-resizable");
        t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
      },
    }),
    e.ui.plugin.add("resizable", "grid", {
      resize: function () {
        var t = e(this).data("ui-resizable"),
          n = t.options,
          r = t.size,
          i = t.originalSize,
          s = t.originalPosition,
          o = t.axis,
          u = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid,
          a = u[0] || 1,
          f = u[1] || 1,
          l = Math.round((r.width - i.width) / a) * a,
          c = Math.round((r.height - i.height) / f) * f,
          h = i.width + l,
          p = i.height + c,
          d = n.maxWidth && n.maxWidth < h,
          v = n.maxHeight && n.maxHeight < p,
          m = n.minWidth && n.minWidth > h,
          g = n.minHeight && n.minHeight > p;
        (n.grid = u),
          m && (h += a),
          g && (p += f),
          d && (h -= a),
          v && (p -= f),
          /^(se|s|e)$/.test(o)
            ? ((t.size.width = h), (t.size.height = p))
            : /^(ne)$/.test(o)
            ? ((t.size.width = h),
              (t.size.height = p),
              (t.position.top = s.top - c))
            : /^(sw)$/.test(o)
            ? ((t.size.width = h),
              (t.size.height = p),
              (t.position.left = s.left - l))
            : ((t.size.width = h),
              (t.size.height = p),
              (t.position.top = s.top - c),
              (t.position.left = s.left - l));
      },
    });
})(jQuery);
(function (e, t) {
  e.widget("ui.selectable", e.ui.mouse, {
    version: "1.10.1",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null,
    },
    _create: function () {
      var t,
        n = this;
      this.element.addClass("ui-selectable"),
        (this.dragged = !1),
        (this.refresh = function () {
          (t = e(n.options.filter, n.element[0])),
            t.addClass("ui-selectee"),
            t.each(function () {
              var t = e(this),
                n = t.offset();
              e.data(this, "selectable-item", {
                element: this,
                $element: t,
                left: n.left,
                top: n.top,
                right: n.left + t.outerWidth(),
                bottom: n.top + t.outerHeight(),
                startselected: !1,
                selected: t.hasClass("ui-selected"),
                selecting: t.hasClass("ui-selecting"),
                unselecting: t.hasClass("ui-unselecting"),
              });
            });
        }),
        this.refresh(),
        (this.selectees = t.addClass("ui-selectee")),
        this._mouseInit(),
        (this.helper = e("<div class='ui-selectable-helper'></div>"));
    },
    _destroy: function () {
      this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
        this.element.removeClass("ui-selectable ui-selectable-disabled"),
        this._mouseDestroy();
    },
    _mouseStart: function (t) {
      var n = this,
        r = this.options;
      this.opos = [t.pageX, t.pageY];
      if (this.options.disabled) return;
      (this.selectees = e(r.filter, this.element[0])),
        this._trigger("start", t),
        e(r.appendTo).append(this.helper),
        this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }),
        r.autoRefresh && this.refresh(),
        this.selectees.filter(".ui-selected").each(function () {
          var r = e.data(this, "selectable-item");
          (r.startselected = !0),
            !t.metaKey &&
              !t.ctrlKey &&
              (r.$element.removeClass("ui-selected"),
              (r.selected = !1),
              r.$element.addClass("ui-unselecting"),
              (r.unselecting = !0),
              n._trigger("unselecting", t, { unselecting: r.element }));
        }),
        e(t.target)
          .parents()
          .addBack()
          .each(function () {
            var r,
              i = e.data(this, "selectable-item");
            if (i)
              return (
                (r =
                  (!t.metaKey && !t.ctrlKey) ||
                  !i.$element.hasClass("ui-selected")),
                i.$element
                  .removeClass(r ? "ui-unselecting" : "ui-selected")
                  .addClass(r ? "ui-selecting" : "ui-unselecting"),
                (i.unselecting = !r),
                (i.selecting = r),
                (i.selected = r),
                r
                  ? n._trigger("selecting", t, { selecting: i.element })
                  : n._trigger("unselecting", t, { unselecting: i.element }),
                !1
              );
          });
    },
    _mouseDrag: function (t) {
      this.dragged = !0;
      if (this.options.disabled) return;
      var n,
        r = this,
        i = this.options,
        s = this.opos[0],
        o = this.opos[1],
        u = t.pageX,
        a = t.pageY;
      return (
        s > u && ((n = u), (u = s), (s = n)),
        o > a && ((n = a), (a = o), (o = n)),
        this.helper.css({ left: s, top: o, width: u - s, height: a - o }),
        this.selectees.each(function () {
          var n = e.data(this, "selectable-item"),
            f = !1;
          if (!n || n.element === r.element[0]) return;
          i.tolerance === "touch"
            ? (f = !(n.left > u || n.right < s || n.top > a || n.bottom < o))
            : i.tolerance === "fit" &&
              (f = n.left > s && n.right < u && n.top > o && n.bottom < a),
            f
              ? (n.selected &&
                  (n.$element.removeClass("ui-selected"), (n.selected = !1)),
                n.unselecting &&
                  (n.$element.removeClass("ui-unselecting"),
                  (n.unselecting = !1)),
                n.selecting ||
                  (n.$element.addClass("ui-selecting"),
                  (n.selecting = !0),
                  r._trigger("selecting", t, { selecting: n.element })))
              : (n.selecting &&
                  ((t.metaKey || t.ctrlKey) && n.startselected
                    ? (n.$element.removeClass("ui-selecting"),
                      (n.selecting = !1),
                      n.$element.addClass("ui-selected"),
                      (n.selected = !0))
                    : (n.$element.removeClass("ui-selecting"),
                      (n.selecting = !1),
                      n.startselected &&
                        (n.$element.addClass("ui-unselecting"),
                        (n.unselecting = !0)),
                      r._trigger("unselecting", t, {
                        unselecting: n.element,
                      }))),
                n.selected &&
                  !t.metaKey &&
                  !t.ctrlKey &&
                  !n.startselected &&
                  (n.$element.removeClass("ui-selected"),
                  (n.selected = !1),
                  n.$element.addClass("ui-unselecting"),
                  (n.unselecting = !0),
                  r._trigger("unselecting", t, { unselecting: n.element })));
        }),
        !1
      );
    },
    _mouseStop: function (t) {
      var n = this;
      return (
        (this.dragged = !1),
        e(".ui-unselecting", this.element[0]).each(function () {
          var r = e.data(this, "selectable-item");
          r.$element.removeClass("ui-unselecting"),
            (r.unselecting = !1),
            (r.startselected = !1),
            n._trigger("unselected", t, { unselected: r.element });
        }),
        e(".ui-selecting", this.element[0]).each(function () {
          var r = e.data(this, "selectable-item");
          r.$element.removeClass("ui-selecting").addClass("ui-selected"),
            (r.selecting = !1),
            (r.selected = !0),
            (r.startselected = !0),
            n._trigger("selected", t, { selected: r.element });
        }),
        this._trigger("stop", t),
        this.helper.remove(),
        !1
      );
    },
  });
})(jQuery);
(function (e, t) {
  function n(e, t, n) {
    return e > t && e < t + n;
  }
  e.widget("ui.sortable", e.ui.mouse, {
    version: "1.10.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null,
    },
    _create: function () {
      var e = this.options;
      (this.containerCache = {}),
        this.element.addClass("ui-sortable"),
        this.refresh(),
        (this.floating = this.items.length
          ? e.axis === "x" ||
            /left|right/.test(this.items[0].item.css("float")) ||
            /inline|table-cell/.test(this.items[0].item.css("display"))
          : !1),
        (this.offset = this.element.offset()),
        this._mouseInit(),
        (this.ready = !0);
    },
    _destroy: function () {
      this.element.removeClass("ui-sortable ui-sortable-disabled"),
        this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--)
        this.items[e].item.removeData(this.widgetName + "-item");
      return this;
    },
    _setOption: function (t, n) {
      t === "disabled"
        ? ((this.options[t] = n),
          this.widget().toggleClass("ui-sortable-disabled", !!n))
        : e.Widget.prototype._setOption.apply(this, arguments);
    },
    _mouseCapture: function (t, n) {
      var r = null,
        i = !1,
        s = this;
      if (this.reverting) return !1;
      if (this.options.disabled || this.options.type === "static") return !1;
      this._refreshItems(t),
        e(t.target)
          .parents()
          .each(function () {
            if (e.data(this, s.widgetName + "-item") === s)
              return (r = e(this)), !1;
          }),
        e.data(t.target, s.widgetName + "-item") === s && (r = e(t.target));
      if (!r) return !1;
      if (this.options.handle && !n) {
        e(this.options.handle, r)
          .find("*")
          .addBack()
          .each(function () {
            this === t.target && (i = !0);
          });
        if (!i) return !1;
      }
      return (this.currentItem = r), this._removeCurrentsFromItems(), !0;
    },
    _mouseStart: function (t, n, r) {
      var i,
        s = this.options;
      (this.currentContainer = this),
        this.refreshPositions(),
        (this.helper = this._createHelper(t)),
        this._cacheHelperProportions(),
        this._cacheMargins(),
        (this.scrollParent = this.helper.scrollParent()),
        (this.offset = this.currentItem.offset()),
        (this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left,
        }),
        e.extend(this.offset, {
          click: {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top,
          },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
        this.helper.css("position", "absolute"),
        (this.cssPosition = this.helper.css("position")),
        (this.originalPosition = this._generatePosition(t)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt),
        (this.domPosition = {
          prev: this.currentItem.prev()[0],
          parent: this.currentItem.parent()[0],
        }),
        this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
        this._createPlaceholder(),
        s.containment && this._setContainment(),
        s.cursor &&
          (e("body").css("cursor") &&
            (this._storedCursor = e("body").css("cursor")),
          e("body").css("cursor", s.cursor)),
        s.opacity &&
          (this.helper.css("opacity") &&
            (this._storedOpacity = this.helper.css("opacity")),
          this.helper.css("opacity", s.opacity)),
        s.zIndex &&
          (this.helper.css("zIndex") &&
            (this._storedZIndex = this.helper.css("zIndex")),
          this.helper.css("zIndex", s.zIndex)),
        this.scrollParent[0] !== document &&
          this.scrollParent[0].tagName !== "HTML" &&
          (this.overflowOffset = this.scrollParent.offset()),
        this._trigger("start", t, this._uiHash()),
        this._preserveHelperProportions || this._cacheHelperProportions();
      if (!r)
        for (i = this.containers.length - 1; i >= 0; i--)
          this.containers[i]._trigger("activate", t, this._uiHash(this));
      return (
        e.ui.ddmanager && (e.ui.ddmanager.current = this),
        e.ui.ddmanager &&
          !s.dropBehaviour &&
          e.ui.ddmanager.prepareOffsets(this, t),
        (this.dragging = !0),
        this.helper.addClass("ui-sortable-helper"),
        this._mouseDrag(t),
        !0
      );
    },
    _mouseDrag: function (t) {
      var n,
        r,
        i,
        s,
        o = this.options,
        u = !1;
      (this.position = this._generatePosition(t)),
        (this.positionAbs = this._convertPositionTo("absolute")),
        this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
        this.options.scroll &&
          (this.scrollParent[0] !== document &&
          this.scrollParent[0].tagName !== "HTML"
            ? (this.overflowOffset.top +
                this.scrollParent[0].offsetHeight -
                t.pageY <
              o.scrollSensitivity
                ? (this.scrollParent[0].scrollTop = u =
                    this.scrollParent[0].scrollTop + o.scrollSpeed)
                : t.pageY - this.overflowOffset.top < o.scrollSensitivity &&
                  (this.scrollParent[0].scrollTop = u =
                    this.scrollParent[0].scrollTop - o.scrollSpeed),
              this.overflowOffset.left +
                this.scrollParent[0].offsetWidth -
                t.pageX <
              o.scrollSensitivity
                ? (this.scrollParent[0].scrollLeft = u =
                    this.scrollParent[0].scrollLeft + o.scrollSpeed)
                : t.pageX - this.overflowOffset.left < o.scrollSensitivity &&
                  (this.scrollParent[0].scrollLeft = u =
                    this.scrollParent[0].scrollLeft - o.scrollSpeed))
            : (t.pageY - e(document).scrollTop() < o.scrollSensitivity
                ? (u = e(document).scrollTop(
                    e(document).scrollTop() - o.scrollSpeed
                  ))
                : e(window).height() - (t.pageY - e(document).scrollTop()) <
                    o.scrollSensitivity &&
                  (u = e(document).scrollTop(
                    e(document).scrollTop() + o.scrollSpeed
                  )),
              t.pageX - e(document).scrollLeft() < o.scrollSensitivity
                ? (u = e(document).scrollLeft(
                    e(document).scrollLeft() - o.scrollSpeed
                  ))
                : e(window).width() - (t.pageX - e(document).scrollLeft()) <
                    o.scrollSensitivity &&
                  (u = e(document).scrollLeft(
                    e(document).scrollLeft() + o.scrollSpeed
                  ))),
          u !== !1 &&
            e.ui.ddmanager &&
            !o.dropBehaviour &&
            e.ui.ddmanager.prepareOffsets(this, t)),
        (this.positionAbs = this._convertPositionTo("absolute"));
      if (!this.options.axis || this.options.axis !== "y")
        this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis !== "x")
        this.helper[0].style.top = this.position.top + "px";
      for (n = this.items.length - 1; n >= 0; n--) {
        (r = this.items[n]),
          (i = r.item[0]),
          (s = this._intersectsWithPointer(r));
        if (!s) continue;
        if (r.instance !== this.currentContainer) continue;
        if (
          i !== this.currentItem[0] &&
          this.placeholder[s === 1 ? "next" : "prev"]()[0] !== i &&
          !e.contains(this.placeholder[0], i) &&
          (this.options.type === "semi-dynamic"
            ? !e.contains(this.element[0], i)
            : !0)
        ) {
          this.direction = s === 1 ? "down" : "up";
          if (
            this.options.tolerance !== "pointer" &&
            !this._intersectsWithSides(r)
          )
            break;
          this._rearrange(t, r), this._trigger("change", t, this._uiHash());
          break;
        }
      }
      return (
        this._contactContainers(t),
        e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
        this._trigger("sort", t, this._uiHash()),
        (this.lastPositionAbs = this.positionAbs),
        !1
      );
    },
    _mouseStop: function (t, n) {
      if (!t) return;
      e.ui.ddmanager &&
        !this.options.dropBehaviour &&
        e.ui.ddmanager.drop(this, t);
      if (this.options.revert) {
        var r = this,
          i = this.placeholder.offset();
        (this.reverting = !0),
          e(this.helper).animate(
            {
              left:
                i.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === document.body
                  ? 0
                  : this.offsetParent[0].scrollLeft),
              top:
                i.top -
                this.offset.parent.top -
                this.margins.top +
                (this.offsetParent[0] === document.body
                  ? 0
                  : this.offsetParent[0].scrollTop),
            },
            parseInt(this.options.revert, 10) || 500,
            function () {
              r._clear(t);
            }
          );
      } else this._clear(t, n);
      return !1;
    },
    cancel: function () {
      if (this.dragging) {
        this._mouseUp({ target: null }),
          this.options.helper === "original"
            ? this.currentItem
                .css(this._storedCSS)
                .removeClass("ui-sortable-helper")
            : this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--)
          this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
            this.containers[t].containerCache.over &&
              (this.containers[t]._trigger("out", null, this._uiHash(this)),
              (this.containers[t].containerCache.over = 0));
      }
      return (
        this.placeholder &&
          (this.placeholder[0].parentNode &&
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.options.helper !== "original" &&
            this.helper &&
            this.helper[0].parentNode &&
            this.helper.remove(),
          e.extend(this, {
            helper: null,
            dragging: !1,
            reverting: !1,
            _noFinalSort: null,
          }),
          this.domPosition.prev
            ? e(this.domPosition.prev).after(this.currentItem)
            : e(this.domPosition.parent).prepend(this.currentItem)),
        this
      );
    },
    serialize: function (t) {
      var n = this._getItemsAsjQuery(t && t.connected),
        r = [];
      return (
        (t = t || {}),
        e(n).each(function () {
          var n = (e(t.item || this).attr(t.attribute || "id") || "").match(
            t.expression || /(.+)[\-=_](.+)/
          );
          n &&
            r.push(
              (t.key || n[1] + "[]") +
                "=" +
                (t.key && t.expression ? n[1] : n[2])
            );
        }),
        !r.length && t.key && r.push(t.key + "="),
        r.join("&")
      );
    },
    toArray: function (t) {
      var n = this._getItemsAsjQuery(t && t.connected),
        r = [];
      return (
        (t = t || {}),
        n.each(function () {
          r.push(e(t.item || this).attr(t.attribute || "id") || "");
        }),
        r
      );
    },
    _intersectsWith: function (e) {
      var t = this.positionAbs.left,
        n = t + this.helperProportions.width,
        r = this.positionAbs.top,
        i = r + this.helperProportions.height,
        s = e.left,
        o = s + e.width,
        u = e.top,
        a = u + e.height,
        f = this.offset.click.top,
        l = this.offset.click.left,
        c = r + f > u && r + f < a && t + l > s && t + l < o;
      return this.options.tolerance === "pointer" ||
        this.options.forcePointerForContainers ||
        (this.options.tolerance !== "pointer" &&
          this.helperProportions[this.floating ? "width" : "height"] >
            e[this.floating ? "width" : "height"])
        ? c
        : s < t + this.helperProportions.width / 2 &&
            n - this.helperProportions.width / 2 < o &&
            u < r + this.helperProportions.height / 2 &&
            i - this.helperProportions.height / 2 < a;
    },
    _intersectsWithPointer: function (e) {
      var t =
          this.options.axis === "x" ||
          n(this.positionAbs.top + this.offset.click.top, e.top, e.height),
        r =
          this.options.axis === "y" ||
          n(this.positionAbs.left + this.offset.click.left, e.left, e.width),
        i = t && r,
        s = this._getDragVerticalDirection(),
        o = this._getDragHorizontalDirection();
      return i
        ? this.floating
          ? (o && o === "right") || s === "down"
            ? 2
            : 1
          : s && (s === "down" ? 2 : 1)
        : !1;
    },
    _intersectsWithSides: function (e) {
      var t = n(
          this.positionAbs.top + this.offset.click.top,
          e.top + e.height / 2,
          e.height
        ),
        r = n(
          this.positionAbs.left + this.offset.click.left,
          e.left + e.width / 2,
          e.width
        ),
        i = this._getDragVerticalDirection(),
        s = this._getDragHorizontalDirection();
      return this.floating && s
        ? (s === "right" && r) || (s === "left" && !r)
        : i && ((i === "down" && t) || (i === "up" && !t));
    },
    _getDragVerticalDirection: function () {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return e !== 0 && (e > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function () {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return e !== 0 && (e > 0 ? "right" : "left");
    },
    refresh: function (e) {
      return this._refreshItems(e), this.refreshPositions(), this;
    },
    _connectWith: function () {
      var e = this.options;
      return e.connectWith.constructor === String
        ? [e.connectWith]
        : e.connectWith;
    },
    _getItemsAsjQuery: function (t) {
      var n,
        r,
        i,
        s,
        o = [],
        u = [],
        a = this._connectWith();
      if (a && t)
        for (n = a.length - 1; n >= 0; n--) {
          i = e(a[n]);
          for (r = i.length - 1; r >= 0; r--)
            (s = e.data(i[r], this.widgetFullName)),
              s &&
                s !== this &&
                !s.options.disabled &&
                u.push([
                  e.isFunction(s.options.items)
                    ? s.options.items.call(s.element)
                    : e(s.options.items, s.element)
                        .not(".ui-sortable-helper")
                        .not(".ui-sortable-placeholder"),
                  s,
                ]);
        }
      u.push([
        e.isFunction(this.options.items)
          ? this.options.items.call(this.element, null, {
              options: this.options,
              item: this.currentItem,
            })
          : e(this.options.items, this.element)
              .not(".ui-sortable-helper")
              .not(".ui-sortable-placeholder"),
        this,
      ]);
      for (n = u.length - 1; n >= 0; n--)
        u[n][0].each(function () {
          o.push(this);
        });
      return e(o);
    },
    _removeCurrentsFromItems: function () {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = e.grep(this.items, function (e) {
        for (var n = 0; n < t.length; n++) if (t[n] === e.item[0]) return !1;
        return !0;
      });
    },
    _refreshItems: function (t) {
      (this.items = []), (this.containers = [this]);
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l = this.items,
        c = [
          [
            e.isFunction(this.options.items)
              ? this.options.items.call(this.element[0], t, {
                  item: this.currentItem,
                })
              : e(this.options.items, this.element),
            this,
          ],
        ],
        h = this._connectWith();
      if (h && this.ready)
        for (n = h.length - 1; n >= 0; n--) {
          i = e(h[n]);
          for (r = i.length - 1; r >= 0; r--)
            (s = e.data(i[r], this.widgetFullName)),
              s &&
                s !== this &&
                !s.options.disabled &&
                (c.push([
                  e.isFunction(s.options.items)
                    ? s.options.items.call(s.element[0], t, {
                        item: this.currentItem,
                      })
                    : e(s.options.items, s.element),
                  s,
                ]),
                this.containers.push(s));
        }
      for (n = c.length - 1; n >= 0; n--) {
        (o = c[n][1]), (u = c[n][0]);
        for (r = 0, f = u.length; r < f; r++)
          (a = e(u[r])),
            a.data(this.widgetName + "-item", o),
            l.push({
              item: a,
              instance: o,
              width: 0,
              height: 0,
              left: 0,
              top: 0,
            });
      }
    },
    refreshPositions: function (t) {
      this.offsetParent &&
        this.helper &&
        (this.offset.parent = this._getParentOffset());
      var n, r, i, s;
      for (n = this.items.length - 1; n >= 0; n--) {
        r = this.items[n];
        if (
          r.instance !== this.currentContainer &&
          this.currentContainer &&
          r.item[0] !== this.currentItem[0]
        )
          continue;
        (i = this.options.toleranceElement
          ? e(this.options.toleranceElement, r.item)
          : r.item),
          t || ((r.width = i.outerWidth()), (r.height = i.outerHeight())),
          (s = i.offset()),
          (r.left = s.left),
          (r.top = s.top);
      }
      if (this.options.custom && this.options.custom.refreshContainers)
        this.options.custom.refreshContainers.call(this);
      else
        for (n = this.containers.length - 1; n >= 0; n--)
          (s = this.containers[n].element.offset()),
            (this.containers[n].containerCache.left = s.left),
            (this.containers[n].containerCache.top = s.top),
            (this.containers[n].containerCache.width =
              this.containers[n].element.outerWidth()),
            (this.containers[n].containerCache.height =
              this.containers[n].element.outerHeight());
      return this;
    },
    _createPlaceholder: function (t) {
      t = t || this;
      var n,
        r = t.options;
      if (!r.placeholder || r.placeholder.constructor === String)
        (n = r.placeholder),
          (r.placeholder = {
            element: function () {
              var r = e(document.createElement(t.currentItem[0].nodeName))
                .addClass(
                  n || t.currentItem[0].className + " ui-sortable-placeholder"
                )
                .removeClass("ui-sortable-helper")[0];
              return n || (r.style.visibility = "hidden"), r;
            },
            update: function (e, i) {
              if (n && !r.forcePlaceholderSize) return;
              i.height() ||
                i.height(
                  t.currentItem.innerHeight() -
                    parseInt(t.currentItem.css("paddingTop") || 0, 10) -
                    parseInt(t.currentItem.css("paddingBottom") || 0, 10)
                ),
                i.width() ||
                  i.width(
                    t.currentItem.innerWidth() -
                      parseInt(t.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(t.currentItem.css("paddingRight") || 0, 10)
                  );
            },
          });
      (t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem))),
        t.currentItem.after(t.placeholder),
        r.placeholder.update(t, t.placeholder);
    },
    _contactContainers: function (t) {
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c = null,
        h = null;
      for (n = this.containers.length - 1; n >= 0; n--) {
        if (e.contains(this.currentItem[0], this.containers[n].element[0]))
          continue;
        if (this._intersectsWith(this.containers[n].containerCache)) {
          if (c && e.contains(this.containers[n].element[0], c.element[0]))
            continue;
          (c = this.containers[n]), (h = n);
        } else
          this.containers[n].containerCache.over &&
            (this.containers[n]._trigger("out", t, this._uiHash(this)),
            (this.containers[n].containerCache.over = 0));
      }
      if (!c) return;
      if (this.containers.length === 1)
        this.containers[h]._trigger("over", t, this._uiHash(this)),
          (this.containers[h].containerCache.over = 1);
      else {
        (i = 1e4),
          (s = null),
          (o = this.containers[h].floating ? "left" : "top"),
          (u = this.containers[h].floating ? "width" : "height"),
          (a = this.positionAbs[o] + this.offset.click[o]);
        for (r = this.items.length - 1; r >= 0; r--) {
          if (!e.contains(this.containers[h].element[0], this.items[r].item[0]))
            continue;
          if (this.items[r].item[0] === this.currentItem[0]) continue;
          (f = this.items[r].item.offset()[o]),
            (l = !1),
            Math.abs(f - a) > Math.abs(f + this.items[r][u] - a) &&
              ((l = !0), (f += this.items[r][u])),
            Math.abs(f - a) < i &&
              ((i = Math.abs(f - a)),
              (s = this.items[r]),
              (this.direction = l ? "up" : "down"));
        }
        if (!s && !this.options.dropOnEmpty) return;
        (this.currentContainer = this.containers[h]),
          s
            ? this._rearrange(t, s, null, !0)
            : this._rearrange(t, null, this.containers[h].element, !0),
          this._trigger("change", t, this._uiHash()),
          this.containers[h]._trigger("change", t, this._uiHash(this)),
          this.options.placeholder.update(
            this.currentContainer,
            this.placeholder
          ),
          this.containers[h]._trigger("over", t, this._uiHash(this)),
          (this.containers[h].containerCache.over = 1);
      }
    },
    _createHelper: function (t) {
      var n = this.options,
        r = e.isFunction(n.helper)
          ? e(n.helper.apply(this.element[0], [t, this.currentItem]))
          : n.helper === "clone"
          ? this.currentItem.clone()
          : this.currentItem;
      return (
        r.parents("body").length ||
          e(
            n.appendTo !== "parent"
              ? n.appendTo
              : this.currentItem[0].parentNode
          )[0].appendChild(r[0]),
        r[0] === this.currentItem[0] &&
          (this._storedCSS = {
            width: this.currentItem[0].style.width,
            height: this.currentItem[0].style.height,
            position: this.currentItem.css("position"),
            top: this.currentItem.css("top"),
            left: this.currentItem.css("left"),
          }),
        (!r[0].style.width || n.forceHelperSize) &&
          r.width(this.currentItem.width()),
        (!r[0].style.height || n.forceHelperSize) &&
          r.height(this.currentItem.height()),
        r
      );
    },
    _adjustOffsetFromHelper: function (t) {
      typeof t == "string" && (t = t.split(" ")),
        e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
        "left" in t && (this.offset.click.left = t.left + this.margins.left),
        "right" in t &&
          (this.offset.click.left =
            this.helperProportions.width - t.right + this.margins.left),
        "top" in t && (this.offset.click.top = t.top + this.margins.top),
        "bottom" in t &&
          (this.offset.click.top =
            this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      this.cssPosition === "absolute" &&
        this.scrollParent[0] !== document &&
        e.contains(this.scrollParent[0], this.offsetParent[0]) &&
        ((t.left += this.scrollParent.scrollLeft()),
        (t.top += this.scrollParent.scrollTop()));
      if (
        this.offsetParent[0] === document.body ||
        (this.offsetParent[0].tagName &&
          this.offsetParent[0].tagName.toLowerCase() === "html" &&
          e.ui.ie)
      )
        t = { top: 0, left: 0 };
      return {
        top:
          t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:
          t.left +
          (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
      };
    },
    _getRelativeOffset: function () {
      if (this.cssPosition === "relative") {
        var e = this.currentItem.position();
        return {
          top:
            e.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            e.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      }
      return { top: 0, left: 0 };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function () {
      var t,
        n,
        r,
        i = this.options;
      i.containment === "parent" && (i.containment = this.helper[0].parentNode);
      if (i.containment === "document" || i.containment === "window")
        this.containment = [
          0 - this.offset.relative.left - this.offset.parent.left,
          0 - this.offset.relative.top - this.offset.parent.top,
          e(i.containment === "document" ? document : window).width() -
            this.helperProportions.width -
            this.margins.left,
          (e(i.containment === "document" ? document : window).height() ||
            document.body.parentNode.scrollHeight) -
            this.helperProportions.height -
            this.margins.top,
        ];
      /^(document|window|parent)$/.test(i.containment) ||
        ((t = e(i.containment)[0]),
        (n = e(i.containment).offset()),
        (r = e(t).css("overflow") !== "hidden"),
        (this.containment = [
          n.left +
            (parseInt(e(t).css("borderLeftWidth"), 10) || 0) +
            (parseInt(e(t).css("paddingLeft"), 10) || 0) -
            this.margins.left,
          n.top +
            (parseInt(e(t).css("borderTopWidth"), 10) || 0) +
            (parseInt(e(t).css("paddingTop"), 10) || 0) -
            this.margins.top,
          n.left +
            (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
            (parseInt(e(t).css("borderLeftWidth"), 10) || 0) -
            (parseInt(e(t).css("paddingRight"), 10) || 0) -
            this.helperProportions.width -
            this.margins.left,
          n.top +
            (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) -
            (parseInt(e(t).css("borderTopWidth"), 10) || 0) -
            (parseInt(e(t).css("paddingBottom"), 10) || 0) -
            this.helperProportions.height -
            this.margins.top,
        ]));
    },
    _convertPositionTo: function (t, n) {
      n || (n = this.position);
      var r = t === "absolute" ? 1 : -1,
        i =
          this.cssPosition !== "absolute" ||
          (this.scrollParent[0] !== document &&
            !!e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        s = /(html|body)/i.test(i[0].tagName);
      return {
        top:
          n.top +
          this.offset.relative.top * r +
          this.offset.parent.top * r -
          (this.cssPosition === "fixed"
            ? -this.scrollParent.scrollTop()
            : s
            ? 0
            : i.scrollTop()) *
            r,
        left:
          n.left +
          this.offset.relative.left * r +
          this.offset.parent.left * r -
          (this.cssPosition === "fixed"
            ? -this.scrollParent.scrollLeft()
            : s
            ? 0
            : i.scrollLeft()) *
            r,
      };
    },
    _generatePosition: function (t) {
      var n,
        r,
        i = this.options,
        s = t.pageX,
        o = t.pageY,
        u =
          this.cssPosition !== "absolute" ||
          (this.scrollParent[0] !== document &&
            !!e.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        a = /(html|body)/i.test(u[0].tagName);
      return (
        this.cssPosition === "relative" &&
          (this.scrollParent[0] === document ||
            this.scrollParent[0] === this.offsetParent[0]) &&
          (this.offset.relative = this._getRelativeOffset()),
        this.originalPosition &&
          (this.containment &&
            (t.pageX - this.offset.click.left < this.containment[0] &&
              (s = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] &&
              (o = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] &&
              (s = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] &&
              (o = this.containment[3] + this.offset.click.top)),
          i.grid &&
            ((n =
              this.originalPageY +
              Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1]),
            (o = this.containment
              ? n - this.offset.click.top >= this.containment[1] &&
                n - this.offset.click.top <= this.containment[3]
                ? n
                : n - this.offset.click.top >= this.containment[1]
                ? n - i.grid[1]
                : n + i.grid[1]
              : n),
            (r =
              this.originalPageX +
              Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0]),
            (s = this.containment
              ? r - this.offset.click.left >= this.containment[0] &&
                r - this.offset.click.left <= this.containment[2]
                ? r
                : r - this.offset.click.left >= this.containment[0]
                ? r - i.grid[0]
                : r + i.grid[0]
              : r))),
        {
          top:
            o -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            (this.cssPosition === "fixed"
              ? -this.scrollParent.scrollTop()
              : a
              ? 0
              : u.scrollTop()),
          left:
            s -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            (this.cssPosition === "fixed"
              ? -this.scrollParent.scrollLeft()
              : a
              ? 0
              : u.scrollLeft()),
        }
      );
    },
    _rearrange: function (e, t, n, r) {
      n
        ? n[0].appendChild(this.placeholder[0])
        : t.item[0].parentNode.insertBefore(
            this.placeholder[0],
            this.direction === "down" ? t.item[0] : t.item[0].nextSibling
          ),
        (this.counter = this.counter ? ++this.counter : 1);
      var i = this.counter;
      this._delay(function () {
        i === this.counter && this.refreshPositions(!r);
      });
    },
    _clear: function (t, n) {
      this.reverting = !1;
      var r,
        i = [];
      !this._noFinalSort &&
        this.currentItem.parent().length &&
        this.placeholder.before(this.currentItem),
        (this._noFinalSort = null);
      if (this.helper[0] === this.currentItem[0]) {
        for (r in this._storedCSS)
          if (this._storedCSS[r] === "auto" || this._storedCSS[r] === "static")
            this._storedCSS[r] = "";
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();
      this.fromOutside &&
        !n &&
        i.push(function (e) {
          this._trigger("receive", e, this._uiHash(this.fromOutside));
        }),
        (this.fromOutside ||
          this.domPosition.prev !==
            this.currentItem.prev().not(".ui-sortable-helper")[0] ||
          this.domPosition.parent !== this.currentItem.parent()[0]) &&
          !n &&
          i.push(function (e) {
            this._trigger("update", e, this._uiHash());
          }),
        this !== this.currentContainer &&
          (n ||
            (i.push(function (e) {
              this._trigger("remove", e, this._uiHash());
            }),
            i.push(
              function (e) {
                return function (t) {
                  e._trigger("receive", t, this._uiHash(this));
                };
              }.call(this, this.currentContainer)
            ),
            i.push(
              function (e) {
                return function (t) {
                  e._trigger("update", t, this._uiHash(this));
                };
              }.call(this, this.currentContainer)
            )));
      for (r = this.containers.length - 1; r >= 0; r--)
        n ||
          i.push(
            function (e) {
              return function (t) {
                e._trigger("deactivate", t, this._uiHash(this));
              };
            }.call(this, this.containers[r])
          ),
          this.containers[r].containerCache.over &&
            (i.push(
              function (e) {
                return function (t) {
                  e._trigger("out", t, this._uiHash(this));
                };
              }.call(this, this.containers[r])
            ),
            (this.containers[r].containerCache.over = 0));
      this._storedCursor && e("body").css("cursor", this._storedCursor),
        this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
        this._storedZIndex &&
          this.helper.css(
            "zIndex",
            this._storedZIndex === "auto" ? "" : this._storedZIndex
          ),
        (this.dragging = !1);
      if (this.cancelHelperRemoval) {
        if (!n) {
          this._trigger("beforeStop", t, this._uiHash());
          for (r = 0; r < i.length; r++) i[r].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return (this.fromOutside = !1), !1;
      }
      n || this._trigger("beforeStop", t, this._uiHash()),
        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
        this.helper[0] !== this.currentItem[0] && this.helper.remove(),
        (this.helper = null);
      if (!n) {
        for (r = 0; r < i.length; r++) i[r].call(this, t);
        this._trigger("stop", t, this._uiHash());
      }
      return (this.fromOutside = !1), !0;
    },
    _trigger: function () {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 &&
        this.cancel();
    },
    _uiHash: function (t) {
      var n = t || this;
      return {
        helper: n.helper,
        placeholder: n.placeholder || e([]),
        position: n.position,
        originalPosition: n.originalPosition,
        offset: n.positionAbs,
        item: n.currentItem,
        sender: t ? t.element : null,
      };
    },
  });
})(jQuery);
(function (e, t) {
  var n = 0,
    r = {},
    i = {};
  (r.height =
    r.paddingTop =
    r.paddingBottom =
    r.borderTopWidth =
    r.borderBottomWidth =
      "hide"),
    (i.height =
      i.paddingTop =
      i.paddingBottom =
      i.borderTopWidth =
      i.borderBottomWidth =
        "show"),
    e.widget("ui.accordion", {
      version: "1.10.1",
      options: {
        active: 0,
        animate: {},
        collapsible: !1,
        event: "click",
        header: "> li > :first-child,> :not(li):even",
        heightStyle: "auto",
        icons: {
          activeHeader: "ui-icon-triangle-1-s",
          header: "ui-icon-triangle-1-e",
        },
        activate: null,
        beforeActivate: null,
      },
      _create: function () {
        var t = this.options;
        (this.prevShow = this.prevHide = e()),
          this.element
            .addClass("ui-accordion ui-widget ui-helper-reset")
            .attr("role", "tablist"),
          !t.collapsible &&
            (t.active === !1 || t.active == null) &&
            (t.active = 0),
          this._processPanels(),
          t.active < 0 && (t.active += this.headers.length),
          this._refresh();
      },
      _getCreateEventData: function () {
        return {
          header: this.active,
          panel: this.active.length ? this.active.next() : e(),
          content: this.active.length ? this.active.next() : e(),
        };
      },
      _createIcons: function () {
        var t = this.options.icons;
        t &&
          (e("<span>")
            .addClass("ui-accordion-header-icon ui-icon " + t.header)
            .prependTo(this.headers),
          this.active
            .children(".ui-accordion-header-icon")
            .removeClass(t.header)
            .addClass(t.activeHeader),
          this.headers.addClass("ui-accordion-icons"));
      },
      _destroyIcons: function () {
        this.headers
          .removeClass("ui-accordion-icons")
          .children(".ui-accordion-header-icon")
          .remove();
      },
      _destroy: function () {
        var e;
        this.element
          .removeClass("ui-accordion ui-widget ui-helper-reset")
          .removeAttr("role"),
          this.headers
            .removeClass(
              "ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top"
            )
            .removeAttr("role")
            .removeAttr("aria-selected")
            .removeAttr("aria-controls")
            .removeAttr("tabIndex")
            .each(function () {
              /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }),
          this._destroyIcons(),
          (e = this.headers
            .next()
            .css("display", "")
            .removeAttr("role")
            .removeAttr("aria-expanded")
            .removeAttr("aria-hidden")
            .removeAttr("aria-labelledby")
            .removeClass(
              "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled"
            )
            .each(function () {
              /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            })),
          this.options.heightStyle !== "content" && e.css("height", "");
      },
      _setOption: function (e, t) {
        if (e === "active") {
          this._activate(t);
          return;
        }
        e === "event" &&
          (this.options.event && this._off(this.headers, this.options.event),
          this._setupEvents(t)),
          this._super(e, t),
          e === "collapsible" &&
            !t &&
            this.options.active === !1 &&
            this._activate(0),
          e === "icons" && (this._destroyIcons(), t && this._createIcons()),
          e === "disabled" &&
            this.headers
              .add(this.headers.next())
              .toggleClass("ui-state-disabled", !!t);
      },
      _keydown: function (t) {
        if (t.altKey || t.ctrlKey) return;
        var n = e.ui.keyCode,
          r = this.headers.length,
          i = this.headers.index(t.target),
          s = !1;
        switch (t.keyCode) {
          case n.RIGHT:
          case n.DOWN:
            s = this.headers[(i + 1) % r];
            break;
          case n.LEFT:
          case n.UP:
            s = this.headers[(i - 1 + r) % r];
            break;
          case n.SPACE:
          case n.ENTER:
            this._eventHandler(t);
            break;
          case n.HOME:
            s = this.headers[0];
            break;
          case n.END:
            s = this.headers[r - 1];
        }
        s &&
          (e(t.target).attr("tabIndex", -1),
          e(s).attr("tabIndex", 0),
          s.focus(),
          t.preventDefault());
      },
      _panelKeyDown: function (t) {
        t.keyCode === e.ui.keyCode.UP &&
          t.ctrlKey &&
          e(t.currentTarget).prev().focus();
      },
      refresh: function () {
        var t = this.options;
        this._processPanels();
        if ((t.active === !1 && t.collapsible === !0) || !this.headers.length)
          (t.active = !1), (this.active = e());
        t.active === !1
          ? this._activate(0)
          : this.active.length && !e.contains(this.element[0], this.active[0])
          ? this.headers.length ===
            this.headers.find(".ui-state-disabled").length
            ? ((t.active = !1), (this.active = e()))
            : this._activate(Math.max(0, t.active - 1))
          : (t.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh();
      },
      _processPanels: function () {
        (this.headers = this.element
          .find(this.options.header)
          .addClass(
            "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"
          )),
          this.headers
            .next()
            .addClass(
              "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
            )
            .filter(":not(.ui-accordion-content-active)")
            .hide();
      },
      _refresh: function () {
        var t,
          r = this.options,
          i = r.heightStyle,
          s = this.element.parent(),
          o = (this.accordionId =
            "ui-accordion-" + (this.element.attr("id") || ++n));
        (this.active = this._findActive(r.active)
          .addClass("ui-accordion-header-active ui-state-active ui-corner-top")
          .removeClass("ui-corner-all")),
          this.active.next().addClass("ui-accordion-content-active").show(),
          this.headers
            .attr("role", "tab")
            .each(function (t) {
              var n = e(this),
                r = n.attr("id"),
                i = n.next(),
                s = i.attr("id");
              r || ((r = o + "-header-" + t), n.attr("id", r)),
                s || ((s = o + "-panel-" + t), i.attr("id", s)),
                n.attr("aria-controls", s),
                i.attr("aria-labelledby", r);
            })
            .next()
            .attr("role", "tabpanel"),
          this.headers
            .not(this.active)
            .attr({ "aria-selected": "false", tabIndex: -1 })
            .next()
            .attr({ "aria-expanded": "false", "aria-hidden": "true" })
            .hide(),
          this.active.length
            ? this.active
                .attr({ "aria-selected": "true", tabIndex: 0 })
                .next()
                .attr({ "aria-expanded": "true", "aria-hidden": "false" })
            : this.headers.eq(0).attr("tabIndex", 0),
          this._createIcons(),
          this._setupEvents(r.event),
          i === "fill"
            ? ((t = s.height()),
              this.element.siblings(":visible").each(function () {
                var n = e(this),
                  r = n.css("position");
                if (r === "absolute" || r === "fixed") return;
                t -= n.outerHeight(!0);
              }),
              this.headers.each(function () {
                t -= e(this).outerHeight(!0);
              }),
              this.headers
                .next()
                .each(function () {
                  e(this).height(
                    Math.max(0, t - e(this).innerHeight() + e(this).height())
                  );
                })
                .css("overflow", "auto"))
            : i === "auto" &&
              ((t = 0),
              this.headers
                .next()
                .each(function () {
                  t = Math.max(t, e(this).css("height", "").height());
                })
                .height(t));
      },
      _activate: function (t) {
        var n = this._findActive(t)[0];
        if (n === this.active[0]) return;
        (n = n || this.active[0]),
          this._eventHandler({
            target: n,
            currentTarget: n,
            preventDefault: e.noop,
          });
      },
      _findActive: function (t) {
        return typeof t == "number" ? this.headers.eq(t) : e();
      },
      _setupEvents: function (t) {
        var n = { keydown: "_keydown" };
        t &&
          e.each(t.split(" "), function (e, t) {
            n[t] = "_eventHandler";
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, n),
          this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
          this._hoverable(this.headers),
          this._focusable(this.headers);
      },
      _eventHandler: function (t) {
        var n = this.options,
          r = this.active,
          i = e(t.currentTarget),
          s = i[0] === r[0],
          o = s && n.collapsible,
          u = o ? e() : i.next(),
          a = r.next(),
          f = {
            oldHeader: r,
            oldPanel: a,
            newHeader: o ? e() : i,
            newPanel: u,
          };
        t.preventDefault();
        if (
          (s && !n.collapsible) ||
          this._trigger("beforeActivate", t, f) === !1
        )
          return;
        (n.active = o ? !1 : this.headers.index(i)),
          (this.active = s ? e() : i),
          this._toggle(f),
          r.removeClass("ui-accordion-header-active ui-state-active"),
          n.icons &&
            r
              .children(".ui-accordion-header-icon")
              .removeClass(n.icons.activeHeader)
              .addClass(n.icons.header),
          s ||
            (i
              .removeClass("ui-corner-all")
              .addClass(
                "ui-accordion-header-active ui-state-active ui-corner-top"
              ),
            n.icons &&
              i
                .children(".ui-accordion-header-icon")
                .removeClass(n.icons.header)
                .addClass(n.icons.activeHeader),
            i.next().addClass("ui-accordion-content-active"));
      },
      _toggle: function (t) {
        var n = t.newPanel,
          r = this.prevShow.length ? this.prevShow : t.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = n),
          (this.prevHide = r),
          this.options.animate
            ? this._animate(n, r, t)
            : (r.hide(), n.show(), this._toggleComplete(t)),
          r.attr({ "aria-expanded": "false", "aria-hidden": "true" }),
          r.prev().attr("aria-selected", "false"),
          n.length && r.length
            ? r.prev().attr("tabIndex", -1)
            : n.length &&
              this.headers
                .filter(function () {
                  return e(this).attr("tabIndex") === 0;
                })
                .attr("tabIndex", -1),
          n
            .attr({ "aria-expanded": "true", "aria-hidden": "false" })
            .prev()
            .attr({ "aria-selected": "true", tabIndex: 0 });
      },
      _animate: function (e, t, n) {
        var s,
          o,
          u,
          a = this,
          f = 0,
          l = e.length && (!t.length || e.index() < t.index()),
          c = this.options.animate || {},
          h = (l && c.down) || c,
          p = function () {
            a._toggleComplete(n);
          };
        typeof h == "number" && (u = h),
          typeof h == "string" && (o = h),
          (o = o || h.easing || c.easing),
          (u = u || h.duration || c.duration);
        if (!t.length) return e.animate(i, u, o, p);
        if (!e.length) return t.animate(r, u, o, p);
        (s = e.show().outerHeight()),
          t.animate(r, {
            duration: u,
            easing: o,
            step: function (e, t) {
              t.now = Math.round(e);
            },
          }),
          e.hide().animate(i, {
            duration: u,
            easing: o,
            complete: p,
            step: function (e, n) {
              (n.now = Math.round(e)),
                n.prop !== "height"
                  ? (f += n.now)
                  : a.options.heightStyle !== "content" &&
                    ((n.now = Math.round(s - t.outerHeight() - f)), (f = 0));
            },
          });
      },
      _toggleComplete: function (e) {
        var t = e.oldPanel;
        t
          .removeClass("ui-accordion-content-active")
          .prev()
          .removeClass("ui-corner-top")
          .addClass("ui-corner-all"),
          t.length && (t.parent()[0].className = t.parent()[0].className),
          this._trigger("activate", null, e);
      },
    });
})(jQuery);
(function (e, t) {
  var n = 0;
  e.widget("ui.autocomplete", {
    version: "1.10.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: { my: "left top", at: "left bottom", collision: "none" },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null,
    },
    pending: 0,
    _create: function () {
      var t,
        n,
        r,
        i = this.element[0].nodeName.toLowerCase(),
        s = i === "textarea",
        o = i === "input";
      (this.isMultiLine = s
        ? !0
        : o
        ? !1
        : this.element.prop("isContentEditable")),
        (this.valueMethod = this.element[s || o ? "val" : "text"]),
        (this.isNewMenu = !0),
        this.element
          .addClass("ui-autocomplete-input")
          .attr("autocomplete", "off"),
        this._on(this.element, {
          keydown: function (i) {
            if (this.element.prop("readOnly")) {
              (t = !0), (r = !0), (n = !0);
              return;
            }
            (t = !1), (r = !1), (n = !1);
            var s = e.ui.keyCode;
            switch (i.keyCode) {
              case s.PAGE_UP:
                (t = !0), this._move("previousPage", i);
                break;
              case s.PAGE_DOWN:
                (t = !0), this._move("nextPage", i);
                break;
              case s.UP:
                (t = !0), this._keyEvent("previous", i);
                break;
              case s.DOWN:
                (t = !0), this._keyEvent("next", i);
                break;
              case s.ENTER:
              case s.NUMPAD_ENTER:
                this.menu.active &&
                  ((t = !0), i.preventDefault(), this.menu.select(i));
                break;
              case s.TAB:
                this.menu.active && this.menu.select(i);
                break;
              case s.ESCAPE:
                this.menu.element.is(":visible") &&
                  (this._value(this.term), this.close(i), i.preventDefault());
                break;
              default:
                (n = !0), this._searchTimeout(i);
            }
          },
          keypress: function (r) {
            if (t) {
              (t = !1), r.preventDefault();
              return;
            }
            if (n) return;
            var i = e.ui.keyCode;
            switch (r.keyCode) {
              case i.PAGE_UP:
                this._move("previousPage", r);
                break;
              case i.PAGE_DOWN:
                this._move("nextPage", r);
                break;
              case i.UP:
                this._keyEvent("previous", r);
                break;
              case i.DOWN:
                this._keyEvent("next", r);
            }
          },
          input: function (e) {
            if (r) {
              (r = !1), e.preventDefault();
              return;
            }
            this._searchTimeout(e);
          },
          focus: function () {
            (this.selectedItem = null), (this.previous = this._value());
          },
          blur: function (e) {
            if (this.cancelBlur) {
              delete this.cancelBlur;
              return;
            }
            clearTimeout(this.searching), this.close(e), this._change(e);
          },
        }),
        this._initSource(),
        (this.menu = e("<ul>")
          .addClass("ui-autocomplete ui-front")
          .appendTo(this._appendTo())
          .menu({ input: e(), role: null })
          .hide()
          .data("ui-menu")),
        this._on(this.menu.element, {
          mousedown: function (t) {
            t.preventDefault(),
              (this.cancelBlur = !0),
              this._delay(function () {
                delete this.cancelBlur;
              });
            var n = this.menu.element[0];
            e(t.target).closest(".ui-menu-item").length ||
              this._delay(function () {
                var t = this;
                this.document.one("mousedown", function (r) {
                  r.target !== t.element[0] &&
                    r.target !== n &&
                    !e.contains(n, r.target) &&
                    t.close();
                });
              });
          },
          menufocus: function (t, n) {
            if (this.isNewMenu) {
              this.isNewMenu = !1;
              if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                this.menu.blur(),
                  this.document.one("mousemove", function () {
                    e(t.target).trigger(t.originalEvent);
                  });
                return;
              }
            }
            var r = n.item.data("ui-autocomplete-item");
            !1 !== this._trigger("focus", t, { item: r })
              ? t.originalEvent &&
                /^key/.test(t.originalEvent.type) &&
                this._value(r.value)
              : this.liveRegion.text(r.value);
          },
          menuselect: function (e, t) {
            var n = t.item.data("ui-autocomplete-item"),
              r = this.previous;
            this.element[0] !== this.document[0].activeElement &&
              (this.element.focus(),
              (this.previous = r),
              this._delay(function () {
                (this.previous = r), (this.selectedItem = n);
              })),
              !1 !== this._trigger("select", e, { item: n }) &&
                this._value(n.value),
              (this.term = this._value()),
              this.close(e),
              (this.selectedItem = n);
          },
        }),
        (this.liveRegion = e("<span>", {
          role: "status",
          "aria-live": "polite",
        })
          .addClass("ui-helper-hidden-accessible")
          .insertAfter(this.element)),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _destroy: function () {
      clearTimeout(this.searching),
        this.element
          .removeClass("ui-autocomplete-input")
          .removeAttr("autocomplete"),
        this.menu.element.remove(),
        this.liveRegion.remove();
    },
    _setOption: function (e, t) {
      this._super(e, t),
        e === "source" && this._initSource(),
        e === "appendTo" && this.menu.element.appendTo(this._appendTo()),
        e === "disabled" && t && this.xhr && this.xhr.abort();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return (
        t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)),
        t || (t = this.element.closest(".ui-front")),
        t.length || (t = this.document[0].body),
        t
      );
    },
    _initSource: function () {
      var t,
        n,
        r = this;
      e.isArray(this.options.source)
        ? ((t = this.options.source),
          (this.source = function (n, r) {
            r(e.ui.autocomplete.filter(t, n.term));
          }))
        : typeof this.options.source == "string"
        ? ((n = this.options.source),
          (this.source = function (t, i) {
            r.xhr && r.xhr.abort(),
              (r.xhr = e.ajax({
                url: n,
                data: t,
                dataType: "json",
                success: function (e) {
                  i(e);
                },
                error: function () {
                  i([]);
                },
              }));
          }))
        : (this.source = this.options.source);
    },
    _searchTimeout: function (e) {
      clearTimeout(this.searching),
        (this.searching = this._delay(function () {
          this.term !== this._value() &&
            ((this.selectedItem = null), this.search(null, e));
        }, this.options.delay));
    },
    search: function (e, t) {
      (e = e != null ? e : this._value()), (this.term = this._value());
      if (e.length < this.options.minLength) return this.close(t);
      if (this._trigger("search", t) === !1) return;
      return this._search(e);
    },
    _search: function (e) {
      this.pending++,
        this.element.addClass("ui-autocomplete-loading"),
        (this.cancelSearch = !1),
        this.source({ term: e }, this._response());
    },
    _response: function () {
      var e = this,
        t = ++n;
      return function (r) {
        t === n && e.__response(r),
          e.pending--,
          e.pending || e.element.removeClass("ui-autocomplete-loading");
      };
    },
    __response: function (e) {
      e && (e = this._normalize(e)),
        this._trigger("response", null, { content: e }),
        !this.options.disabled && e && e.length && !this.cancelSearch
          ? (this._suggest(e), this._trigger("open"))
          : this._close();
    },
    close: function (e) {
      (this.cancelSearch = !0), this._close(e);
    },
    _close: function (e) {
      this.menu.element.is(":visible") &&
        (this.menu.element.hide(),
        this.menu.blur(),
        (this.isNewMenu = !0),
        this._trigger("close", e));
    },
    _change: function (e) {
      this.previous !== this._value() &&
        this._trigger("change", e, { item: this.selectedItem });
    },
    _normalize: function (t) {
      return t.length && t[0].label && t[0].value
        ? t
        : e.map(t, function (t) {
            return typeof t == "string"
              ? { label: t, value: t }
              : e.extend(
                  { label: t.label || t.value, value: t.value || t.label },
                  t
                );
          });
    },
    _suggest: function (t) {
      var n = this.menu.element.empty();
      this._renderMenu(n, t),
        this.menu.refresh(),
        n.show(),
        this._resizeMenu(),
        n.position(e.extend({ of: this.element }, this.options.position)),
        this.options.autoFocus && this.menu.next();
    },
    _resizeMenu: function () {
      var e = this.menu.element;
      e.outerWidth(
        Math.max(e.width("").outerWidth() + 1, this.element.outerWidth())
      );
    },
    _renderMenu: function (t, n) {
      var r = this;
      e.each(n, function (e, n) {
        r._renderItemData(t, n);
      });
    },
    _renderItemData: function (e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t);
    },
    _renderItem: function (t, n) {
      return e("<li>").append(e("<a>").text(n.label)).appendTo(t);
    },
    _move: function (e, t) {
      if (!this.menu.element.is(":visible")) {
        this.search(null, t);
        return;
      }
      if (
        (this.menu.isFirstItem() && /^previous/.test(e)) ||
        (this.menu.isLastItem() && /^next/.test(e))
      ) {
        this._value(this.term), this.menu.blur();
        return;
      }
      this.menu[e](t);
    },
    widget: function () {
      return this.menu.element;
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function (e, t) {
      if (!this.isMultiLine || this.menu.element.is(":visible"))
        this._move(e, t), t.preventDefault();
    },
  }),
    e.extend(e.ui.autocomplete, {
      escapeRegex: function (e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      },
      filter: function (t, n) {
        var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
        return e.grep(t, function (e) {
          return r.test(e.label || e.value || e);
        });
      },
    }),
    e.widget("ui.autocomplete", e.ui.autocomplete, {
      options: {
        messages: {
          noResults: "No search results.",
          results: function (e) {
            return (
              e +
              (e > 1 ? " results are" : " result is") +
              " available, use up and down arrow keys to navigate."
            );
          },
        },
      },
      __response: function (e) {
        var t;
        this._superApply(arguments);
        if (this.options.disabled || this.cancelSearch) return;
        e && e.length
          ? (t = this.options.messages.results(e.length))
          : (t = this.options.messages.noResults),
          this.liveRegion.text(t);
      },
    });
})(jQuery);
(function (e, t) {
  var n,
    r,
    i,
    s,
    o = "ui-button ui-widget ui-state-default ui-corner-all",
    u = "ui-state-hover ui-state-active ",
    a =
      "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    f = function () {
      var t = e(this).find(":ui-button");
      setTimeout(function () {
        t.button("refresh");
      }, 1);
    },
    l = function (t) {
      var n = t.name,
        r = t.form,
        i = e([]);
      return (
        n &&
          ((n = n.replace(/'/g, "\\'")),
          r
            ? (i = e(r).find("[name='" + n + "']"))
            : (i = e("[name='" + n + "']", t.ownerDocument).filter(function () {
                return !this.form;
              }))),
        i
      );
    };
  e.widget("ui.button", {
    version: "1.10.1",
    defaultElement: "<button>",
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: { primary: null, secondary: null },
    },
    _create: function () {
      this.element
        .closest("form")
        .unbind("reset" + this.eventNamespace)
        .bind("reset" + this.eventNamespace, f),
        typeof this.options.disabled != "boolean"
          ? (this.options.disabled = !!this.element.prop("disabled"))
          : this.element.prop("disabled", this.options.disabled),
        this._determineButtonType(),
        (this.hasTitle = !!this.buttonElement.attr("title"));
      var t = this,
        u = this.options,
        a = this.type === "checkbox" || this.type === "radio",
        c = a ? "" : "ui-state-active",
        h = "ui-state-focus";
      u.label === null &&
        (u.label =
          this.type === "input"
            ? this.buttonElement.val()
            : this.buttonElement.html()),
        this._hoverable(this.buttonElement),
        this.buttonElement
          .addClass(o)
          .attr("role", "button")
          .bind("mouseenter" + this.eventNamespace, function () {
            if (u.disabled) return;
            this === n && e(this).addClass("ui-state-active");
          })
          .bind("mouseleave" + this.eventNamespace, function () {
            if (u.disabled) return;
            e(this).removeClass(c);
          })
          .bind("click" + this.eventNamespace, function (e) {
            u.disabled && (e.preventDefault(), e.stopImmediatePropagation());
          }),
        this.element
          .bind("focus" + this.eventNamespace, function () {
            t.buttonElement.addClass(h);
          })
          .bind("blur" + this.eventNamespace, function () {
            t.buttonElement.removeClass(h);
          }),
        a &&
          (this.element.bind("change" + this.eventNamespace, function () {
            if (s) return;
            t.refresh();
          }),
          this.buttonElement
            .bind("mousedown" + this.eventNamespace, function (e) {
              if (u.disabled) return;
              (s = !1), (r = e.pageX), (i = e.pageY);
            })
            .bind("mouseup" + this.eventNamespace, function (e) {
              if (u.disabled) return;
              if (r !== e.pageX || i !== e.pageY) s = !0;
            })),
        this.type === "checkbox"
          ? this.buttonElement.bind("click" + this.eventNamespace, function () {
              if (u.disabled || s) return !1;
            })
          : this.type === "radio"
          ? this.buttonElement.bind("click" + this.eventNamespace, function () {
              if (u.disabled || s) return !1;
              e(this).addClass("ui-state-active"),
                t.buttonElement.attr("aria-pressed", "true");
              var n = t.element[0];
              l(n)
                .not(n)
                .map(function () {
                  return e(this).button("widget")[0];
                })
                .removeClass("ui-state-active")
                .attr("aria-pressed", "false");
            })
          : (this.buttonElement
              .bind("mousedown" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).addClass("ui-state-active"),
                  (n = this),
                  t.document.one("mouseup", function () {
                    n = null;
                  });
              })
              .bind("mouseup" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).removeClass("ui-state-active");
              })
              .bind("keydown" + this.eventNamespace, function (t) {
                if (u.disabled) return !1;
                (t.keyCode === e.ui.keyCode.SPACE ||
                  t.keyCode === e.ui.keyCode.ENTER) &&
                  e(this).addClass("ui-state-active");
              })
              .bind(
                "keyup" + this.eventNamespace + " blur" + this.eventNamespace,
                function () {
                  e(this).removeClass("ui-state-active");
                }
              ),
            this.buttonElement.is("a") &&
              this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click();
              })),
        this._setOption("disabled", u.disabled),
        this._resetButton();
    },
    _determineButtonType: function () {
      var e, t, n;
      this.element.is("[type=checkbox]")
        ? (this.type = "checkbox")
        : this.element.is("[type=radio]")
        ? (this.type = "radio")
        : this.element.is("input")
        ? (this.type = "input")
        : (this.type = "button"),
        this.type === "checkbox" || this.type === "radio"
          ? ((e = this.element.parents().last()),
            (t = "label[for='" + this.element.attr("id") + "']"),
            (this.buttonElement = e.find(t)),
            this.buttonElement.length ||
              ((e = e.length ? e.siblings() : this.element.siblings()),
              (this.buttonElement = e.filter(t)),
              this.buttonElement.length || (this.buttonElement = e.find(t))),
            this.element.addClass("ui-helper-hidden-accessible"),
            (n = this.element.is(":checked")),
            n && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.prop("aria-pressed", n))
          : (this.buttonElement = this.element);
    },
    widget: function () {
      return this.buttonElement;
    },
    _destroy: function () {
      this.element.removeClass("ui-helper-hidden-accessible"),
        this.buttonElement
          .removeClass(o + " " + u + " " + a)
          .removeAttr("role")
          .removeAttr("aria-pressed")
          .html(this.buttonElement.find(".ui-button-text").html()),
        this.hasTitle || this.buttonElement.removeAttr("title");
    },
    _setOption: function (e, t) {
      this._super(e, t);
      if (e === "disabled") {
        t
          ? this.element.prop("disabled", !0)
          : this.element.prop("disabled", !1);
        return;
      }
      this._resetButton();
    },
    refresh: function () {
      var t = this.element.is("input, button")
        ? this.element.is(":disabled")
        : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOption("disabled", t),
        this.type === "radio"
          ? l(this.element[0]).each(function () {
              e(this).is(":checked")
                ? e(this)
                    .button("widget")
                    .addClass("ui-state-active")
                    .attr("aria-pressed", "true")
                : e(this)
                    .button("widget")
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false");
            })
          : this.type === "checkbox" &&
            (this.element.is(":checked")
              ? this.buttonElement
                  .addClass("ui-state-active")
                  .attr("aria-pressed", "true")
              : this.buttonElement
                  .removeClass("ui-state-active")
                  .attr("aria-pressed", "false"));
    },
    _resetButton: function () {
      if (this.type === "input") {
        this.options.label && this.element.val(this.options.label);
        return;
      }
      var t = this.buttonElement.removeClass(a),
        n = e("<span></span>", this.document[0])
          .addClass("ui-button-text")
          .html(this.options.label)
          .appendTo(t.empty())
          .text(),
        r = this.options.icons,
        i = r.primary && r.secondary,
        s = [];
      r.primary || r.secondary
        ? (this.options.text &&
            s.push(
              "ui-button-text-icon" +
                (i ? "s" : r.primary ? "-primary" : "-secondary")
            ),
          r.primary &&
            t.prepend(
              "<span class='ui-button-icon-primary ui-icon " +
                r.primary +
                "'></span>"
            ),
          r.secondary &&
            t.append(
              "<span class='ui-button-icon-secondary ui-icon " +
                r.secondary +
                "'></span>"
            ),
          this.options.text ||
            (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"),
            this.hasTitle || t.attr("title", e.trim(n))))
        : s.push("ui-button-text-only"),
        t.addClass(s.join(" "));
    },
  }),
    e.widget("ui.buttonset", {
      version: "1.10.1",
      options: {
        items:
          "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)",
      },
      _create: function () {
        this.element.addClass("ui-buttonset");
      },
      _init: function () {
        this.refresh();
      },
      _setOption: function (e, t) {
        e === "disabled" && this.buttons.button("option", e, t),
          this._super(e, t);
      },
      refresh: function () {
        var t = this.element.css("direction") === "rtl";
        this.buttons = this.element
          .find(this.options.items)
          .filter(":ui-button")
          .button("refresh")
          .end()
          .not(":ui-button")
          .button()
          .end()
          .map(function () {
            return e(this).button("widget")[0];
          })
          .removeClass("ui-corner-all ui-corner-left ui-corner-right")
          .filter(":first")
          .addClass(t ? "ui-corner-right" : "ui-corner-left")
          .end()
          .filter(":last")
          .addClass(t ? "ui-corner-left" : "ui-corner-right")
          .end()
          .end();
      },
      _destroy: function () {
        this.element.removeClass("ui-buttonset"),
          this.buttons
            .map(function () {
              return e(this).button("widget")[0];
            })
            .removeClass("ui-corner-left ui-corner-right")
            .end()
            .button("destroy");
      },
    });
})(jQuery);
(function (e, t) {
  function s() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      e.extend(this._defaults, this.regional[""]),
      (this.dpDiv = o(
        e(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function o(t) {
    var n =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t
      .delegate(n, "mouseout", function () {
        e(this).removeClass("ui-state-hover"),
          this.className.indexOf("ui-datepicker-prev") !== -1 &&
            e(this).removeClass("ui-datepicker-prev-hover"),
          this.className.indexOf("ui-datepicker-next") !== -1 &&
            e(this).removeClass("ui-datepicker-next-hover");
      })
      .delegate(n, "mouseover", function () {
        e.datepicker._isDisabledDatepicker(
          i.inline ? t.parent()[0] : i.input[0]
        ) ||
          (e(this)
            .parents(".ui-datepicker-calendar")
            .find("a")
            .removeClass("ui-state-hover"),
          e(this).addClass("ui-state-hover"),
          this.className.indexOf("ui-datepicker-prev") !== -1 &&
            e(this).addClass("ui-datepicker-prev-hover"),
          this.className.indexOf("ui-datepicker-next") !== -1 &&
            e(this).addClass("ui-datepicker-next-hover"));
      });
  }
  function u(t, n) {
    e.extend(t, n);
    for (var r in n) n[r] == null && (t[r] = n[r]);
    return t;
  }
  e.extend(e.ui, { datepicker: { version: "1.10.1" } });
  var n = "datepicker",
    r = new Date().getTime(),
    i;
  e.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (e) {
      return u(this._defaults, e || {}), this;
    },
    _attachDatepicker: function (t, n) {
      var r, i, s;
      (r = t.nodeName.toLowerCase()),
        (i = r === "div" || r === "span"),
        t.id || ((this.uuid += 1), (t.id = "dp" + this.uuid)),
        (s = this._newInst(e(t), i)),
        (s.settings = e.extend({}, n || {})),
        r === "input"
          ? this._connectDatepicker(t, s)
          : i && this._inlineDatepicker(t, s);
    },
    _newInst: function (t, n) {
      var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: r,
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: n,
        dpDiv: n
          ? o(
              e(
                "<div class='" +
                  this._inlineClass +
                  " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
              )
            )
          : this.dpDiv,
      };
    },
    _connectDatepicker: function (t, r) {
      var i = e(t);
      (r.append = e([])), (r.trigger = e([]));
      if (i.hasClass(this.markerClassName)) return;
      this._attachments(i, r),
        i
          .addClass(this.markerClassName)
          .keydown(this._doKeyDown)
          .keypress(this._doKeyPress)
          .keyup(this._doKeyUp),
        this._autoSize(r),
        e.data(t, n, r),
        r.settings.disabled && this._disableDatepicker(t);
    },
    _attachments: function (t, n) {
      var r,
        i,
        s,
        o = this._get(n, "appendText"),
        u = this._get(n, "isRTL");
      n.append && n.append.remove(),
        o &&
          ((n.append = e(
            "<span class='" + this._appendClass + "'>" + o + "</span>"
          )),
          t[u ? "before" : "after"](n.append)),
        t.unbind("focus", this._showDatepicker),
        n.trigger && n.trigger.remove(),
        (r = this._get(n, "showOn")),
        (r === "focus" || r === "both") && t.focus(this._showDatepicker);
      if (r === "button" || r === "both")
        (i = this._get(n, "buttonText")),
          (s = this._get(n, "buttonImage")),
          (n.trigger = e(
            this._get(n, "buttonImageOnly")
              ? e("<img/>")
                  .addClass(this._triggerClass)
                  .attr({ src: s, alt: i, title: i })
              : e("<button type='button'></button>")
                  .addClass(this._triggerClass)
                  .html(s ? e("<img/>").attr({ src: s, alt: i, title: i }) : i)
          )),
          t[u ? "before" : "after"](n.trigger),
          n.trigger.click(function () {
            return (
              e.datepicker._datepickerShowing &&
              e.datepicker._lastInput === t[0]
                ? e.datepicker._hideDatepicker()
                : e.datepicker._datepickerShowing &&
                  e.datepicker._lastInput !== t[0]
                ? (e.datepicker._hideDatepicker(),
                  e.datepicker._showDatepicker(t[0]))
                : e.datepicker._showDatepicker(t[0]),
              !1
            );
          });
    },
    _autoSize: function (e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t,
          n,
          r,
          i,
          s = new Date(2009, 11, 20),
          o = this._get(e, "dateFormat");
        o.match(/[DM]/) &&
          ((t = function (e) {
            (n = 0), (r = 0);
            for (i = 0; i < e.length; i++)
              e[i].length > n && ((n = e[i].length), (r = i));
            return r;
          }),
          s.setMonth(
            t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))
          ),
          s.setDate(
            t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) +
              20 -
              s.getDay()
          )),
          e.input.attr("size", this._formatDate(e, s).length);
      }
    },
    _inlineDatepicker: function (t, r) {
      var i = e(t);
      if (i.hasClass(this.markerClassName)) return;
      i.addClass(this.markerClassName).append(r.dpDiv),
        e.data(t, n, r),
        this._setDate(r, this._getDefaultDate(r), !0),
        this._updateDatepicker(r),
        this._updateAlternate(r),
        r.settings.disabled && this._disableDatepicker(t),
        r.dpDiv.css("display", "block");
    },
    _dialogDatepicker: function (t, r, i, s, o) {
      var a,
        f,
        l,
        c,
        h,
        p = this._dialogInst;
      return (
        p ||
          ((this.uuid += 1),
          (a = "dp" + this.uuid),
          (this._dialogInput = e(
            "<input type='text' id='" +
              a +
              "' style='position: absolute; top: -100px; width: 0px;'/>"
          )),
          this._dialogInput.keydown(this._doKeyDown),
          e("body").append(this._dialogInput),
          (p = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (p.settings = {}),
          e.data(this._dialogInput[0], n, p)),
        u(p.settings, s || {}),
        (r = r && r.constructor === Date ? this._formatDate(p, r) : r),
        this._dialogInput.val(r),
        (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
        this._pos ||
          ((f = document.documentElement.clientWidth),
          (l = document.documentElement.clientHeight),
          (c = document.documentElement.scrollLeft || document.body.scrollLeft),
          (h = document.documentElement.scrollTop || document.body.scrollTop),
          (this._pos = [f / 2 - 100 + c, l / 2 - 150 + h])),
        this._dialogInput
          .css("left", this._pos[0] + 20 + "px")
          .css("top", this._pos[1] + "px"),
        (p.settings.onSelect = i),
        (this._inDialog = !0),
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        e.blockUI && e.blockUI(this.dpDiv),
        e.data(this._dialogInput[0], n, p),
        this
      );
    },
    _destroyDatepicker: function (t) {
      var r,
        i = e(t),
        s = e.data(t, n);
      if (!i.hasClass(this.markerClassName)) return;
      (r = t.nodeName.toLowerCase()),
        e.removeData(t, n),
        r === "input"
          ? (s.append.remove(),
            s.trigger.remove(),
            i
              .removeClass(this.markerClassName)
              .unbind("focus", this._showDatepicker)
              .unbind("keydown", this._doKeyDown)
              .unbind("keypress", this._doKeyPress)
              .unbind("keyup", this._doKeyUp))
          : (r === "div" || r === "span") &&
            i.removeClass(this.markerClassName).empty();
    },
    _enableDatepicker: function (t) {
      var r,
        i,
        s = e(t),
        o = e.data(t, n);
      if (!s.hasClass(this.markerClassName)) return;
      r = t.nodeName.toLowerCase();
      if (r === "input")
        (t.disabled = !1),
          o.trigger
            .filter("button")
            .each(function () {
              this.disabled = !1;
            })
            .end()
            .filter("img")
            .css({ opacity: "1.0", cursor: "" });
      else if (r === "div" || r === "span")
        (i = s.children("." + this._inlineClass)),
          i.children().removeClass("ui-state-disabled"),
          i
            .find("select.ui-datepicker-month, select.ui-datepicker-year")
            .prop("disabled", !1);
      this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      });
    },
    _disableDatepicker: function (t) {
      var r,
        i,
        s = e(t),
        o = e.data(t, n);
      if (!s.hasClass(this.markerClassName)) return;
      r = t.nodeName.toLowerCase();
      if (r === "input")
        (t.disabled = !0),
          o.trigger
            .filter("button")
            .each(function () {
              this.disabled = !0;
            })
            .end()
            .filter("img")
            .css({ opacity: "0.5", cursor: "default" });
      else if (r === "div" || r === "span")
        (i = s.children("." + this._inlineClass)),
          i.children().addClass("ui-state-disabled"),
          i
            .find("select.ui-datepicker-month, select.ui-datepicker-year")
            .prop("disabled", !0);
      (this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      })),
        (this._disabledInputs[this._disabledInputs.length] = t);
    },
    _isDisabledDatepicker: function (e) {
      if (!e) return !1;
      for (var t = 0; t < this._disabledInputs.length; t++)
        if (this._disabledInputs[t] === e) return !0;
      return !1;
    },
    _getInst: function (t) {
      try {
        return e.data(t, n);
      } catch (r) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function (n, r, i) {
      var s,
        o,
        a,
        f,
        l = this._getInst(n);
      if (arguments.length === 2 && typeof r == "string")
        return r === "defaults"
          ? e.extend({}, e.datepicker._defaults)
          : l
          ? r === "all"
            ? e.extend({}, l.settings)
            : this._get(l, r)
          : null;
      (s = r || {}),
        typeof r == "string" && ((s = {}), (s[r] = i)),
        l &&
          (this._curInst === l && this._hideDatepicker(),
          (o = this._getDateDatepicker(n, !0)),
          (a = this._getMinMaxDate(l, "min")),
          (f = this._getMinMaxDate(l, "max")),
          u(l.settings, s),
          a !== null &&
            s.dateFormat !== t &&
            s.minDate === t &&
            (l.settings.minDate = this._formatDate(l, a)),
          f !== null &&
            s.dateFormat !== t &&
            s.maxDate === t &&
            (l.settings.maxDate = this._formatDate(l, f)),
          "disabled" in s &&
            (s.disabled
              ? this._disableDatepicker(n)
              : this._enableDatepicker(n)),
          this._attachments(e(n), l),
          this._autoSize(l),
          this._setDate(l, o),
          this._updateAlternate(l),
          this._updateDatepicker(l));
    },
    _changeDatepicker: function (e, t, n) {
      this._optionDatepicker(e, t, n);
    },
    _refreshDatepicker: function (e) {
      var t = this._getInst(e);
      t && this._updateDatepicker(t);
    },
    _setDateDatepicker: function (e, t) {
      var n = this._getInst(e);
      n &&
        (this._setDate(n, t),
        this._updateDatepicker(n),
        this._updateAlternate(n));
    },
    _getDateDatepicker: function (e, t) {
      var n = this._getInst(e);
      return (
        n && !n.inline && this._setDateFromField(n, t),
        n ? this._getDate(n) : null
      );
    },
    _doKeyDown: function (t) {
      var n,
        r,
        i,
        s = e.datepicker._getInst(t.target),
        o = !0,
        u = s.dpDiv.is(".ui-datepicker-rtl");
      s._keyEvent = !0;
      if (e.datepicker._datepickerShowing)
        switch (t.keyCode) {
          case 9:
            e.datepicker._hideDatepicker(), (o = !1);
            break;
          case 13:
            return (
              (i = e(
                "td." +
                  e.datepicker._dayOverClass +
                  ":not(." +
                  e.datepicker._currentClass +
                  ")",
                s.dpDiv
              )),
              i[0] &&
                e.datepicker._selectDay(
                  t.target,
                  s.selectedMonth,
                  s.selectedYear,
                  i[0]
                ),
              (n = e.datepicker._get(s, "onSelect")),
              n
                ? ((r = e.datepicker._formatDate(s)),
                  n.apply(s.input ? s.input[0] : null, [r, s]))
                : e.datepicker._hideDatepicker(),
              !1
            );
          case 27:
            e.datepicker._hideDatepicker();
            break;
          case 33:
            e.datepicker._adjustDate(
              t.target,
              t.ctrlKey
                ? -e.datepicker._get(s, "stepBigMonths")
                : -e.datepicker._get(s, "stepMonths"),
              "M"
            );
            break;
          case 34:
            e.datepicker._adjustDate(
              t.target,
              t.ctrlKey
                ? +e.datepicker._get(s, "stepBigMonths")
                : +e.datepicker._get(s, "stepMonths"),
              "M"
            );
            break;
          case 35:
            (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
              (o = t.ctrlKey || t.metaKey);
            break;
          case 36:
            (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
              (o = t.ctrlKey || t.metaKey);
            break;
          case 37:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"),
              (o = t.ctrlKey || t.metaKey),
              t.originalEvent.altKey &&
                e.datepicker._adjustDate(
                  t.target,
                  t.ctrlKey
                    ? -e.datepicker._get(s, "stepBigMonths")
                    : -e.datepicker._get(s, "stepMonths"),
                  "M"
                );
            break;
          case 38:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, -7, "D"),
              (o = t.ctrlKey || t.metaKey);
            break;
          case 39:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"),
              (o = t.ctrlKey || t.metaKey),
              t.originalEvent.altKey &&
                e.datepicker._adjustDate(
                  t.target,
                  t.ctrlKey
                    ? +e.datepicker._get(s, "stepBigMonths")
                    : +e.datepicker._get(s, "stepMonths"),
                  "M"
                );
            break;
          case 40:
            (t.ctrlKey || t.metaKey) &&
              e.datepicker._adjustDate(t.target, 7, "D"),
              (o = t.ctrlKey || t.metaKey);
            break;
          default:
            o = !1;
        }
      else
        t.keyCode === 36 && t.ctrlKey
          ? e.datepicker._showDatepicker(this)
          : (o = !1);
      o && (t.preventDefault(), t.stopPropagation());
    },
    _doKeyPress: function (t) {
      var n,
        r,
        i = e.datepicker._getInst(t.target);
      if (e.datepicker._get(i, "constrainInput"))
        return (
          (n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat"))),
          (r = String.fromCharCode(
            t.charCode == null ? t.keyCode : t.charCode
          )),
          t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1
        );
    },
    _doKeyUp: function (t) {
      var n,
        r = e.datepicker._getInst(t.target);
      if (r.input.val() !== r.lastVal)
        try {
          (n = e.datepicker.parseDate(
            e.datepicker._get(r, "dateFormat"),
            r.input ? r.input.val() : null,
            e.datepicker._getFormatConfig(r)
          )),
            n &&
              (e.datepicker._setDateFromField(r),
              e.datepicker._updateAlternate(r),
              e.datepicker._updateDatepicker(r));
        } catch (i) {}
      return !0;
    },
    _showDatepicker: function (t) {
      (t = t.target || t),
        t.nodeName.toLowerCase() !== "input" &&
          (t = e("input", t.parentNode)[0]);
      if (
        e.datepicker._isDisabledDatepicker(t) ||
        e.datepicker._lastInput === t
      )
        return;
      var n, r, i, s, o, a, f;
      (n = e.datepicker._getInst(t)),
        e.datepicker._curInst &&
          e.datepicker._curInst !== n &&
          (e.datepicker._curInst.dpDiv.stop(!0, !0),
          n &&
            e.datepicker._datepickerShowing &&
            e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
        (r = e.datepicker._get(n, "beforeShow")),
        (i = r ? r.apply(t, [t, n]) : {});
      if (i === !1) return;
      u(n.settings, i),
        (n.lastVal = null),
        (e.datepicker._lastInput = t),
        e.datepicker._setDateFromField(n),
        e.datepicker._inDialog && (t.value = ""),
        e.datepicker._pos ||
          ((e.datepicker._pos = e.datepicker._findPos(t)),
          (e.datepicker._pos[1] += t.offsetHeight)),
        (s = !1),
        e(t)
          .parents()
          .each(function () {
            return (s |= e(this).css("position") === "fixed"), !s;
          }),
        (o = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }),
        (e.datepicker._pos = null),
        n.dpDiv.empty(),
        n.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }),
        e.datepicker._updateDatepicker(n),
        (o = e.datepicker._checkOffset(n, o, s)),
        n.dpDiv.css({
          position:
            e.datepicker._inDialog && e.blockUI
              ? "static"
              : s
              ? "fixed"
              : "absolute",
          display: "none",
          left: o.left + "px",
          top: o.top + "px",
        }),
        n.inline ||
          ((a = e.datepicker._get(n, "showAnim")),
          (f = e.datepicker._get(n, "duration")),
          n.dpDiv.zIndex(e(t).zIndex() + 1),
          (e.datepicker._datepickerShowing = !0),
          e.effects && e.effects.effect[a]
            ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f)
            : n.dpDiv[a || "show"](a ? f : null),
          n.input.is(":visible") && !n.input.is(":disabled") && n.input.focus(),
          (e.datepicker._curInst = n));
    },
    _updateDatepicker: function (t) {
      (this.maxRows = 4),
        (i = t),
        t.dpDiv.empty().append(this._generateHTML(t)),
        this._attachHandlers(t),
        t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
      var n,
        r = this._getNumberOfMonths(t),
        s = r[1],
        o = 17;
      t.dpDiv
        .removeClass(
          "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
        )
        .width(""),
        s > 1 &&
          t.dpDiv
            .addClass("ui-datepicker-multi-" + s)
            .css("width", o * s + "em"),
        t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"](
          "ui-datepicker-multi"
        ),
        t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"](
          "ui-datepicker-rtl"
        ),
        t === e.datepicker._curInst &&
          e.datepicker._datepickerShowing &&
          t.input &&
          t.input.is(":visible") &&
          !t.input.is(":disabled") &&
          t.input[0] !== document.activeElement &&
          t.input.focus(),
        t.yearshtml &&
          ((n = t.yearshtml),
          setTimeout(function () {
            n === t.yearshtml &&
              t.yearshtml &&
              t.dpDiv
                .find("select.ui-datepicker-year:first")
                .replaceWith(t.yearshtml),
              (n = t.yearshtml = null);
          }, 0));
    },
    _getBorders: function (e) {
      var t = function (e) {
        return { thin: 1, medium: 2, thick: 3 }[e] || e;
      };
      return [
        parseFloat(t(e.css("border-left-width"))),
        parseFloat(t(e.css("border-top-width"))),
      ];
    },
    _checkOffset: function (t, n, r) {
      var i = t.dpDiv.outerWidth(),
        s = t.dpDiv.outerHeight(),
        o = t.input ? t.input.outerWidth() : 0,
        u = t.input ? t.input.outerHeight() : 0,
        a =
          document.documentElement.clientWidth +
          (r ? 0 : e(document).scrollLeft()),
        f =
          document.documentElement.clientHeight +
          (r ? 0 : e(document).scrollTop());
      return (
        (n.left -= this._get(t, "isRTL") ? i - o : 0),
        (n.left -=
          r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0),
        (n.top -=
          r && n.top === t.input.offset().top + u
            ? e(document).scrollTop()
            : 0),
        (n.left -= Math.min(
          n.left,
          n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0
        )),
        (n.top -= Math.min(
          n.top,
          n.top + s > f && f > s ? Math.abs(s + u) : 0
        )),
        n
      );
    },
    _findPos: function (t) {
      var n,
        r = this._getInst(t),
        i = this._get(r, "isRTL");
      while (
        t &&
        (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))
      )
        t = t[i ? "previousSibling" : "nextSibling"];
      return (n = e(t).offset()), [n.left, n.top];
    },
    _hideDatepicker: function (t) {
      var r,
        i,
        s,
        o,
        u = this._curInst;
      if (!u || (t && u !== e.data(t, n))) return;
      this._datepickerShowing &&
        ((r = this._get(u, "showAnim")),
        (i = this._get(u, "duration")),
        (s = function () {
          e.datepicker._tidyDialog(u);
        }),
        e.effects && (e.effects.effect[r] || e.effects[r])
          ? u.dpDiv.hide(r, e.datepicker._get(u, "showOptions"), i, s)
          : u.dpDiv[
              r === "slideDown"
                ? "slideUp"
                : r === "fadeIn"
                ? "fadeOut"
                : "hide"
            ](r ? i : null, s),
        r || s(),
        (this._datepickerShowing = !1),
        (o = this._get(u, "onClose")),
        o &&
          o.apply(u.input ? u.input[0] : null, [
            u.input ? u.input.val() : "",
            u,
          ]),
        (this._lastInput = null),
        this._inDialog &&
          (this._dialogInput.css({
            position: "absolute",
            left: "0",
            top: "-100px",
          }),
          e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))),
        (this._inDialog = !1));
    },
    _tidyDialog: function (e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    },
    _checkExternalClick: function (t) {
      if (!e.datepicker._curInst) return;
      var n = e(t.target),
        r = e.datepicker._getInst(n[0]);
      ((n[0].id !== e.datepicker._mainDivId &&
        n.parents("#" + e.datepicker._mainDivId).length === 0 &&
        !n.hasClass(e.datepicker.markerClassName) &&
        !n.closest("." + e.datepicker._triggerClass).length &&
        e.datepicker._datepickerShowing &&
        (!e.datepicker._inDialog || !e.blockUI)) ||
        (n.hasClass(e.datepicker.markerClassName) &&
          e.datepicker._curInst !== r)) &&
        e.datepicker._hideDatepicker();
    },
    _adjustDate: function (t, n, r) {
      var i = e(t),
        s = this._getInst(i[0]);
      if (this._isDisabledDatepicker(i[0])) return;
      this._adjustInstDate(
        s,
        n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0),
        r
      ),
        this._updateDatepicker(s);
    },
    _gotoToday: function (t) {
      var n,
        r = e(t),
        i = this._getInst(r[0]);
      this._get(i, "gotoCurrent") && i.currentDay
        ? ((i.selectedDay = i.currentDay),
          (i.drawMonth = i.selectedMonth = i.currentMonth),
          (i.drawYear = i.selectedYear = i.currentYear))
        : ((n = new Date()),
          (i.selectedDay = n.getDate()),
          (i.drawMonth = i.selectedMonth = n.getMonth()),
          (i.drawYear = i.selectedYear = n.getFullYear())),
        this._notifyChange(i),
        this._adjustDate(r);
    },
    _selectMonthYear: function (t, n, r) {
      var i = e(t),
        s = this._getInst(i[0]);
      (s["selected" + (r === "M" ? "Month" : "Year")] = s[
        "draw" + (r === "M" ? "Month" : "Year")
      ] =
        parseInt(n.options[n.selectedIndex].value, 10)),
        this._notifyChange(s),
        this._adjustDate(i);
    },
    _selectDay: function (t, n, r, i) {
      var s,
        o = e(t);
      if (
        e(i).hasClass(this._unselectableClass) ||
        this._isDisabledDatepicker(o[0])
      )
        return;
      (s = this._getInst(o[0])),
        (s.selectedDay = s.currentDay = e("a", i).html()),
        (s.selectedMonth = s.currentMonth = n),
        (s.selectedYear = s.currentYear = r),
        this._selectDate(
          t,
          this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)
        );
    },
    _clearDate: function (t) {
      var n = e(t);
      this._selectDate(n, "");
    },
    _selectDate: function (t, n) {
      var r,
        i = e(t),
        s = this._getInst(i[0]);
      (n = n != null ? n : this._formatDate(s)),
        s.input && s.input.val(n),
        this._updateAlternate(s),
        (r = this._get(s, "onSelect")),
        r
          ? r.apply(s.input ? s.input[0] : null, [n, s])
          : s.input && s.input.trigger("change"),
        s.inline
          ? this._updateDatepicker(s)
          : (this._hideDatepicker(),
            (this._lastInput = s.input[0]),
            typeof s.input[0] != "object" && s.input.focus(),
            (this._lastInput = null));
    },
    _updateAlternate: function (t) {
      var n,
        r,
        i,
        s = this._get(t, "altField");
      s &&
        ((n = this._get(t, "altFormat") || this._get(t, "dateFormat")),
        (r = this._getDate(t)),
        (i = this.formatDate(n, r, this._getFormatConfig(t))),
        e(s).each(function () {
          e(this).val(i);
        }));
    },
    noWeekends: function (e) {
      var t = e.getDay();
      return [t > 0 && t < 6, ""];
    },
    iso8601Week: function (e) {
      var t,
        n = new Date(e.getTime());
      return (
        n.setDate(n.getDate() + 4 - (n.getDay() || 7)),
        (t = n.getTime()),
        n.setMonth(0),
        n.setDate(1),
        Math.floor(Math.round((t - n) / 864e5) / 7) + 1
      );
    },
    parseDate: function (t, n, r) {
      if (t == null || n == null) throw "Invalid arguments";
      n = typeof n == "object" ? n.toString() : n + "";
      if (n === "") return null;
      var i,
        s,
        o,
        u = 0,
        a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        f =
          typeof a != "string"
            ? a
            : (new Date().getFullYear() % 100) + parseInt(a, 10),
        l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
        c = (r ? r.dayNames : null) || this._defaults.dayNames,
        h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
        p = (r ? r.monthNames : null) || this._defaults.monthNames,
        d = -1,
        v = -1,
        m = -1,
        g = -1,
        y = !1,
        b,
        w = function (e) {
          var n = i + 1 < t.length && t.charAt(i + 1) === e;
          return n && i++, n;
        },
        E = function (e) {
          var t = w(e),
            r =
              e === "@"
                ? 14
                : e === "!"
                ? 20
                : e === "y" && t
                ? 4
                : e === "o"
                ? 3
                : 2,
            i = new RegExp("^\\d{1," + r + "}"),
            s = n.substring(u).match(i);
          if (!s) throw "Missing number at position " + u;
          return (u += s[0].length), parseInt(s[0], 10);
        },
        S = function (t, r, i) {
          var s = -1,
            o = e
              .map(w(t) ? i : r, function (e, t) {
                return [[t, e]];
              })
              .sort(function (e, t) {
                return -(e[1].length - t[1].length);
              });
          e.each(o, function (e, t) {
            var r = t[1];
            if (n.substr(u, r.length).toLowerCase() === r.toLowerCase())
              return (s = t[0]), (u += r.length), !1;
          });
          if (s !== -1) return s + 1;
          throw "Unknown name at position " + u;
        },
        x = function () {
          if (n.charAt(u) !== t.charAt(i))
            throw "Unexpected literal at position " + u;
          u++;
        };
      for (i = 0; i < t.length; i++)
        if (y) t.charAt(i) === "'" && !w("'") ? (y = !1) : x();
        else
          switch (t.charAt(i)) {
            case "d":
              m = E("d");
              break;
            case "D":
              S("D", l, c);
              break;
            case "o":
              g = E("o");
              break;
            case "m":
              v = E("m");
              break;
            case "M":
              v = S("M", h, p);
              break;
            case "y":
              d = E("y");
              break;
            case "@":
              (b = new Date(E("@"))),
                (d = b.getFullYear()),
                (v = b.getMonth() + 1),
                (m = b.getDate());
              break;
            case "!":
              (b = new Date((E("!") - this._ticksTo1970) / 1e4)),
                (d = b.getFullYear()),
                (v = b.getMonth() + 1),
                (m = b.getDate());
              break;
            case "'":
              w("'") ? x() : (y = !0);
              break;
            default:
              x();
          }
      if (u < n.length) {
        o = n.substr(u);
        if (!/^\s+/.test(o))
          throw "Extra/unparsed characters found in date: " + o;
      }
      d === -1
        ? (d = new Date().getFullYear())
        : d < 100 &&
          (d +=
            new Date().getFullYear() -
            (new Date().getFullYear() % 100) +
            (d <= f ? 0 : -100));
      if (g > -1) {
        (v = 1), (m = g);
        do {
          s = this._getDaysInMonth(d, v - 1);
          if (m <= s) break;
          v++, (m -= s);
        } while (!0);
      }
      b = this._daylightSavingAdjust(new Date(d, v - 1, m));
      if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m)
        throw "Invalid date";
      return b;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970:
      (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
      24 *
      60 *
      60 *
      1e7,
    formatDate: function (e, t, n) {
      if (!t) return "";
      var r,
        i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
        s = (n ? n.dayNames : null) || this._defaults.dayNames,
        o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
        u = (n ? n.monthNames : null) || this._defaults.monthNames,
        a = function (t) {
          var n = r + 1 < e.length && e.charAt(r + 1) === t;
          return n && r++, n;
        },
        f = function (e, t, n) {
          var r = "" + t;
          if (a(e)) while (r.length < n) r = "0" + r;
          return r;
        },
        l = function (e, t, n, r) {
          return a(e) ? r[t] : n[t];
        },
        c = "",
        h = !1;
      if (t)
        for (r = 0; r < e.length; r++)
          if (h) e.charAt(r) === "'" && !a("'") ? (h = !1) : (c += e.charAt(r));
          else
            switch (e.charAt(r)) {
              case "d":
                c += f("d", t.getDate(), 2);
                break;
              case "D":
                c += l("D", t.getDay(), i, s);
                break;
              case "o":
                c += f(
                  "o",
                  Math.round(
                    (new Date(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ).getTime() -
                      new Date(t.getFullYear(), 0, 0).getTime()) /
                      864e5
                  ),
                  3
                );
                break;
              case "m":
                c += f("m", t.getMonth() + 1, 2);
                break;
              case "M":
                c += l("M", t.getMonth(), o, u);
                break;
              case "y":
                c += a("y")
                  ? t.getFullYear()
                  : (t.getYear() % 100 < 10 ? "0" : "") + (t.getYear() % 100);
                break;
              case "@":
                c += t.getTime();
                break;
              case "!":
                c += t.getTime() * 1e4 + this._ticksTo1970;
                break;
              case "'":
                a("'") ? (c += "'") : (h = !0);
                break;
              default:
                c += e.charAt(r);
            }
      return c;
    },
    _possibleChars: function (e) {
      var t,
        n = "",
        r = !1,
        i = function (n) {
          var r = t + 1 < e.length && e.charAt(t + 1) === n;
          return r && t++, r;
        };
      for (t = 0; t < e.length; t++)
        if (r) e.charAt(t) === "'" && !i("'") ? (r = !1) : (n += e.charAt(t));
        else
          switch (e.charAt(t)) {
            case "d":
            case "m":
            case "y":
            case "@":
              n += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              i("'") ? (n += "'") : (r = !0);
              break;
            default:
              n += e.charAt(t);
          }
      return n;
    },
    _get: function (e, n) {
      return e.settings[n] !== t ? e.settings[n] : this._defaults[n];
    },
    _setDateFromField: function (e, t) {
      if (e.input.val() === e.lastVal) return;
      var n = this._get(e, "dateFormat"),
        r = (e.lastVal = e.input ? e.input.val() : null),
        i = this._getDefaultDate(e),
        s = i,
        o = this._getFormatConfig(e);
      try {
        s = this.parseDate(n, r, o) || i;
      } catch (u) {
        r = t ? "" : r;
      }
      (e.selectedDay = s.getDate()),
        (e.drawMonth = e.selectedMonth = s.getMonth()),
        (e.drawYear = e.selectedYear = s.getFullYear()),
        (e.currentDay = r ? s.getDate() : 0),
        (e.currentMonth = r ? s.getMonth() : 0),
        (e.currentYear = r ? s.getFullYear() : 0),
        this._adjustInstDate(e);
    },
    _getDefaultDate: function (e) {
      return this._restrictMinMax(
        e,
        this._determineDate(e, this._get(e, "defaultDate"), new Date())
      );
    },
    _determineDate: function (t, n, r) {
      var i = function (e) {
          var t = new Date();
          return t.setDate(t.getDate() + e), t;
        },
        s = function (n) {
          try {
            return e.datepicker.parseDate(
              e.datepicker._get(t, "dateFormat"),
              n,
              e.datepicker._getFormatConfig(t)
            );
          } catch (r) {}
          var i =
              (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) ||
              new Date(),
            s = i.getFullYear(),
            o = i.getMonth(),
            u = i.getDate(),
            a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
            f = a.exec(n);
          while (f) {
            switch (f[2] || "d") {
              case "d":
              case "D":
                u += parseInt(f[1], 10);
                break;
              case "w":
              case "W":
                u += parseInt(f[1], 10) * 7;
                break;
              case "m":
              case "M":
                (o += parseInt(f[1], 10)),
                  (u = Math.min(u, e.datepicker._getDaysInMonth(s, o)));
                break;
              case "y":
              case "Y":
                (s += parseInt(f[1], 10)),
                  (u = Math.min(u, e.datepicker._getDaysInMonth(s, o)));
            }
            f = a.exec(n);
          }
          return new Date(s, o, u);
        },
        o =
          n == null || n === ""
            ? r
            : typeof n == "string"
            ? s(n)
            : typeof n == "number"
            ? isNaN(n)
              ? r
              : i(n)
            : new Date(n.getTime());
      return (
        (o = o && o.toString() === "Invalid Date" ? r : o),
        o &&
          (o.setHours(0),
          o.setMinutes(0),
          o.setSeconds(0),
          o.setMilliseconds(0)),
        this._daylightSavingAdjust(o)
      );
    },
    _daylightSavingAdjust: function (e) {
      return e
        ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)
        : null;
    },
    _setDate: function (e, t, n) {
      var r = !t,
        i = e.selectedMonth,
        s = e.selectedYear,
        o = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
      (e.selectedDay = e.currentDay = o.getDate()),
        (e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth()),
        (e.drawYear = e.selectedYear = e.currentYear = o.getFullYear()),
        (i !== e.selectedMonth || s !== e.selectedYear) &&
          !n &&
          this._notifyChange(e),
        this._adjustInstDate(e),
        e.input && e.input.val(r ? "" : this._formatDate(e));
    },
    _getDate: function (e) {
      var t =
        !e.currentYear || (e.input && e.input.val() === "")
          ? null
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
      return t;
    },
    _attachHandlers: function (t) {
      var n = this._get(t, "stepMonths"),
        i = "#" + t.id.replace(/\\\\/g, "\\");
      t.dpDiv.find("[data-handler]").map(function () {
        var t = {
          prev: function () {
            window["DP_jQuery_" + r].datepicker._adjustDate(i, -n, "M");
          },
          next: function () {
            window["DP_jQuery_" + r].datepicker._adjustDate(i, +n, "M");
          },
          hide: function () {
            window["DP_jQuery_" + r].datepicker._hideDatepicker();
          },
          today: function () {
            window["DP_jQuery_" + r].datepicker._gotoToday(i);
          },
          selectDay: function () {
            return (
              window["DP_jQuery_" + r].datepicker._selectDay(
                i,
                +this.getAttribute("data-month"),
                +this.getAttribute("data-year"),
                this
              ),
              !1
            );
          },
          selectMonth: function () {
            return (
              window["DP_jQuery_" + r].datepicker._selectMonthYear(
                i,
                this,
                "M"
              ),
              !1
            );
          },
          selectYear: function () {
            return (
              window["DP_jQuery_" + r].datepicker._selectMonthYear(
                i,
                this,
                "Y"
              ),
              !1
            );
          },
        };
        e(this).bind(
          this.getAttribute("data-event"),
          t[this.getAttribute("data-handler")]
        );
      });
    },
    _generateHTML: function (e) {
      var t,
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x,
        T,
        N,
        C,
        k,
        L,
        A,
        O,
        M,
        _,
        D,
        P,
        H,
        B,
        j,
        F,
        I,
        q = new Date(),
        R = this._daylightSavingAdjust(
          new Date(q.getFullYear(), q.getMonth(), q.getDate())
        ),
        U = this._get(e, "isRTL"),
        z = this._get(e, "showButtonPanel"),
        W = this._get(e, "hideIfNoPrevNext"),
        X = this._get(e, "navigationAsDateFormat"),
        V = this._getNumberOfMonths(e),
        $ = this._get(e, "showCurrentAtPos"),
        J = this._get(e, "stepMonths"),
        K = V[0] !== 1 || V[1] !== 1,
        Q = this._daylightSavingAdjust(
          e.currentDay
            ? new Date(e.currentYear, e.currentMonth, e.currentDay)
            : new Date(9999, 9, 9)
        ),
        G = this._getMinMaxDate(e, "min"),
        Y = this._getMinMaxDate(e, "max"),
        Z = e.drawMonth - $,
        et = e.drawYear;
      Z < 0 && ((Z += 12), et--);
      if (Y) {
        (t = this._daylightSavingAdjust(
          new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())
        )),
          (t = G && t < G ? G : t);
        while (this._daylightSavingAdjust(new Date(et, Z, 1)) > t)
          Z--, Z < 0 && ((Z = 11), et--);
      }
      (e.drawMonth = Z),
        (e.drawYear = et),
        (n = this._get(e, "prevText")),
        (n = X
          ? this.formatDate(
              n,
              this._daylightSavingAdjust(new Date(et, Z - J, 1)),
              this._getFormatConfig(e)
            )
          : n),
        (r = this._canAdjustMonth(e, -1, et, Z)
          ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
            n +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (U ? "e" : "w") +
            "'>" +
            n +
            "</span></a>"
          : W
          ? ""
          : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
            n +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (U ? "e" : "w") +
            "'>" +
            n +
            "</span></a>"),
        (i = this._get(e, "nextText")),
        (i = X
          ? this.formatDate(
              i,
              this._daylightSavingAdjust(new Date(et, Z + J, 1)),
              this._getFormatConfig(e)
            )
          : i),
        (s = this._canAdjustMonth(e, 1, et, Z)
          ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
            i +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (U ? "w" : "e") +
            "'>" +
            i +
            "</span></a>"
          : W
          ? ""
          : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
            i +
            "'><span class='ui-icon ui-icon-circle-triangle-" +
            (U ? "w" : "e") +
            "'>" +
            i +
            "</span></a>"),
        (o = this._get(e, "currentText")),
        (u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R),
        (o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o),
        (a = e.inline
          ? ""
          : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
            this._get(e, "closeText") +
            "</button>"),
        (f = z
          ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
            (U ? a : "") +
            (this._isInRange(e, u)
              ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                o +
                "</button>"
              : "") +
            (U ? "" : a) +
            "</div>"
          : ""),
        (l = parseInt(this._get(e, "firstDay"), 10)),
        (l = isNaN(l) ? 0 : l),
        (c = this._get(e, "showWeek")),
        (h = this._get(e, "dayNames")),
        (p = this._get(e, "dayNamesMin")),
        (d = this._get(e, "monthNames")),
        (v = this._get(e, "monthNamesShort")),
        (m = this._get(e, "beforeShowDay")),
        (g = this._get(e, "showOtherMonths")),
        (y = this._get(e, "selectOtherMonths")),
        (b = this._getDefaultDate(e)),
        (w = ""),
        E;
      for (S = 0; S < V[0]; S++) {
        (x = ""), (this.maxRows = 4);
        for (T = 0; T < V[1]; T++) {
          (N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay))),
            (C = " ui-corner-all"),
            (k = "");
          if (K) {
            k += "<div class='ui-datepicker-group";
            if (V[1] > 1)
              switch (T) {
                case 0:
                  (k += " ui-datepicker-group-first"),
                    (C = " ui-corner-" + (U ? "right" : "left"));
                  break;
                case V[1] - 1:
                  (k += " ui-datepicker-group-last"),
                    (C = " ui-corner-" + (U ? "left" : "right"));
                  break;
                default:
                  (k += " ui-datepicker-group-middle"), (C = "");
              }
            k += "'>";
          }
          (k +=
            "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
            C +
            "'>" +
            (/all|left/.test(C) && S === 0 ? (U ? s : r) : "") +
            (/all|right/.test(C) && S === 0 ? (U ? r : s) : "") +
            this._generateMonthYearHeader(
              e,
              Z,
              et,
              G,
              Y,
              S > 0 || T > 0,
              d,
              v
            ) +
            "</div><table class='ui-datepicker-calendar'><thead>" +
            "<tr>"),
            (L = c
              ? "<th class='ui-datepicker-week-col'>" +
                this._get(e, "weekHeader") +
                "</th>"
              : "");
          for (E = 0; E < 7; E++)
            (A = (E + l) % 7),
              (L +=
                "<th" +
                ((E + l + 6) % 7 >= 5
                  ? " class='ui-datepicker-week-end'"
                  : "") +
                ">" +
                "<span title='" +
                h[A] +
                "'>" +
                p[A] +
                "</span></th>");
          (k += L + "</tr></thead><tbody>"),
            (O = this._getDaysInMonth(et, Z)),
            et === e.selectedYear &&
              Z === e.selectedMonth &&
              (e.selectedDay = Math.min(e.selectedDay, O)),
            (M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7),
            (_ = Math.ceil((M + O) / 7)),
            (D = K ? (this.maxRows > _ ? this.maxRows : _) : _),
            (this.maxRows = D),
            (P = this._daylightSavingAdjust(new Date(et, Z, 1 - M)));
          for (H = 0; H < D; H++) {
            (k += "<tr>"),
              (B = c
                ? "<td class='ui-datepicker-week-col'>" +
                  this._get(e, "calculateWeek")(P) +
                  "</td>"
                : "");
            for (E = 0; E < 7; E++)
              (j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""]),
                (F = P.getMonth() !== Z),
                (I = (F && !y) || !j[0] || (G && P < G) || (Y && P > Y)),
                (B +=
                  "<td class='" +
                  ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                  (F ? " ui-datepicker-other-month" : "") +
                  ((P.getTime() === N.getTime() &&
                    Z === e.selectedMonth &&
                    e._keyEvent) ||
                  (b.getTime() === P.getTime() && b.getTime() === N.getTime())
                    ? " " + this._dayOverClass
                    : "") +
                  (I
                    ? " " + this._unselectableClass + " ui-state-disabled"
                    : "") +
                  (F && !g
                    ? ""
                    : " " +
                      j[1] +
                      (P.getTime() === Q.getTime()
                        ? " " + this._currentClass
                        : "") +
                      (P.getTime() === R.getTime()
                        ? " ui-datepicker-today"
                        : "")) +
                  "'" +
                  ((!F || g) && j[2]
                    ? " title='" + j[2].replace(/'/g, "&#39;") + "'"
                    : "") +
                  (I
                    ? ""
                    : " data-handler='selectDay' data-event='click' data-month='" +
                      P.getMonth() +
                      "' data-year='" +
                      P.getFullYear() +
                      "'") +
                  ">" +
                  (F && !g
                    ? "&#xa0;"
                    : I
                    ? "<span class='ui-state-default'>" +
                      P.getDate() +
                      "</span>"
                    : "<a class='ui-state-default" +
                      (P.getTime() === R.getTime()
                        ? " ui-state-highlight"
                        : "") +
                      (P.getTime() === Q.getTime() ? " ui-state-active" : "") +
                      (F ? " ui-priority-secondary" : "") +
                      "' href='#'>" +
                      P.getDate() +
                      "</a>") +
                  "</td>"),
                P.setDate(P.getDate() + 1),
                (P = this._daylightSavingAdjust(P));
            k += B + "</tr>";
          }
          Z++,
            Z > 11 && ((Z = 0), et++),
            (k +=
              "</tbody></table>" +
              (K
                ? "</div>" +
                  (V[0] > 0 && T === V[1] - 1
                    ? "<div class='ui-datepicker-row-break'></div>"
                    : "")
                : "")),
            (x += k);
        }
        w += x;
      }
      return (w += f), (e._keyEvent = !1), w;
    },
    _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
      var a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m = this._get(e, "changeMonth"),
        g = this._get(e, "changeYear"),
        y = this._get(e, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        w = "";
      if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
      else {
        (a = r && r.getFullYear() === n),
          (f = i && i.getFullYear() === n),
          (w +=
            "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>");
        for (l = 0; l < 12; l++)
          (!a || l >= r.getMonth()) &&
            (!f || l <= i.getMonth()) &&
            (w +=
              "<option value='" +
              l +
              "'" +
              (l === t ? " selected='selected'" : "") +
              ">" +
              u[l] +
              "</option>");
        w += "</select>";
      }
      y || (b += w + (s || !m || !g ? "&#xa0;" : ""));
      if (!e.yearshtml) {
        e.yearshtml = "";
        if (s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
        else {
          (c = this._get(e, "yearRange").split(":")),
            (h = new Date().getFullYear()),
            (p = function (e) {
              var t = e.match(/c[+\-].*/)
                ? n + parseInt(e.substring(1), 10)
                : e.match(/[+\-].*/)
                ? h + parseInt(e, 10)
                : parseInt(e, 10);
              return isNaN(t) ? h : t;
            }),
            (d = p(c[0])),
            (v = Math.max(d, p(c[1] || ""))),
            (d = r ? Math.max(d, r.getFullYear()) : d),
            (v = i ? Math.min(v, i.getFullYear()) : v),
            (e.yearshtml +=
              "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>");
          for (; d <= v; d++)
            e.yearshtml +=
              "<option value='" +
              d +
              "'" +
              (d === n ? " selected='selected'" : "") +
              ">" +
              d +
              "</option>";
          (e.yearshtml += "</select>"),
            (b += e.yearshtml),
            (e.yearshtml = null);
        }
      }
      return (
        (b += this._get(e, "yearSuffix")),
        y && (b += (s || !m || !g ? "&#xa0;" : "") + w),
        (b += "</div>"),
        b
      );
    },
    _adjustInstDate: function (e, t, n) {
      var r = e.drawYear + (n === "Y" ? t : 0),
        i = e.drawMonth + (n === "M" ? t : 0),
        s =
          Math.min(e.selectedDay, this._getDaysInMonth(r, i)) +
          (n === "D" ? t : 0),
        o = this._restrictMinMax(
          e,
          this._daylightSavingAdjust(new Date(r, i, s))
        );
      (e.selectedDay = o.getDate()),
        (e.drawMonth = e.selectedMonth = o.getMonth()),
        (e.drawYear = e.selectedYear = o.getFullYear()),
        (n === "M" || n === "Y") && this._notifyChange(e);
    },
    _restrictMinMax: function (e, t) {
      var n = this._getMinMaxDate(e, "min"),
        r = this._getMinMaxDate(e, "max"),
        i = n && t < n ? n : t;
      return r && i > r ? r : i;
    },
    _notifyChange: function (e) {
      var t = this._get(e, "onChangeMonthYear");
      t &&
        t.apply(e.input ? e.input[0] : null, [
          e.selectedYear,
          e.selectedMonth + 1,
          e,
        ]);
    },
    _getNumberOfMonths: function (e) {
      var t = this._get(e, "numberOfMonths");
      return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t;
    },
    _getMinMaxDate: function (e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null);
    },
    _getDaysInMonth: function (e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
    },
    _getFirstDayOfMonth: function (e, t) {
      return new Date(e, t, 1).getDay();
    },
    _canAdjustMonth: function (e, t, n, r) {
      var i = this._getNumberOfMonths(e),
        s = this._daylightSavingAdjust(
          new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1)
        );
      return (
        t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())),
        this._isInRange(e, s)
      );
    },
    _isInRange: function (e, t) {
      var n,
        r,
        i = this._getMinMaxDate(e, "min"),
        s = this._getMinMaxDate(e, "max"),
        o = null,
        u = null,
        a = this._get(e, "yearRange");
      return (
        a &&
          ((n = a.split(":")),
          (r = new Date().getFullYear()),
          (o = parseInt(n[0], 10)),
          (u = parseInt(n[1], 10)),
          n[0].match(/[+\-].*/) && (o += r),
          n[1].match(/[+\-].*/) && (u += r)),
        (!i || t.getTime() >= i.getTime()) &&
          (!s || t.getTime() <= s.getTime()) &&
          (!o || t.getFullYear() >= o) &&
          (!u || t.getFullYear() <= u)
      );
    },
    _getFormatConfig: function (e) {
      var t = this._get(e, "shortYearCutoff");
      return (
        (t =
          typeof t != "string"
            ? t
            : (new Date().getFullYear() % 100) + parseInt(t, 10)),
        {
          shortYearCutoff: t,
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames"),
        }
      );
    },
    _formatDate: function (e, t, n, r) {
      t ||
        ((e.currentDay = e.selectedDay),
        (e.currentMonth = e.selectedMonth),
        (e.currentYear = e.selectedYear));
      var i = t
        ? typeof t == "object"
          ? t
          : this._daylightSavingAdjust(new Date(r, n, t))
        : this._daylightSavingAdjust(
            new Date(e.currentYear, e.currentMonth, e.currentDay)
          );
      return this.formatDate(
        this._get(e, "dateFormat"),
        i,
        this._getFormatConfig(e)
      );
    },
  }),
    (e.fn.datepicker = function (t) {
      if (!this.length) return this;
      e.datepicker.initialized ||
        (e(document).mousedown(e.datepicker._checkExternalClick),
        (e.datepicker.initialized = !0)),
        e("#" + e.datepicker._mainDivId).length === 0 &&
          e("body").append(e.datepicker.dpDiv);
      var n = Array.prototype.slice.call(arguments, 1);
      return typeof t != "string" ||
        (t !== "isDisabled" && t !== "getDate" && t !== "widget")
        ? t === "option" &&
          arguments.length === 2 &&
          typeof arguments[1] == "string"
          ? e.datepicker["_" + t + "Datepicker"].apply(
              e.datepicker,
              [this[0]].concat(n)
            )
          : this.each(function () {
              typeof t == "string"
                ? e.datepicker["_" + t + "Datepicker"].apply(
                    e.datepicker,
                    [this].concat(n)
                  )
                : e.datepicker._attachDatepicker(this, t);
            })
        : e.datepicker["_" + t + "Datepicker"].apply(
            e.datepicker,
            [this[0]].concat(n)
          );
    }),
    (e.datepicker = new s()),
    (e.datepicker.initialized = !1),
    (e.datepicker.uuid = new Date().getTime()),
    (e.datepicker.version = "1.10.1"),
    (window["DP_jQuery_" + r] = e);
})(jQuery);
(function (e, t) {
  var n = {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0,
    },
    r = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 };
  e.widget("ui.dialog", {
    version: "1.10.1",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      closeOnEscape: !0,
      closeText: "close",
      dialogClass: "",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function (t) {
          var n = e(this).css(t).offset().top;
          n < 0 && e(this).css("top", t.top - n);
        },
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null,
    },
    _create: function () {
      (this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height,
      }),
        (this.originalPosition = {
          parent: this.element.parent(),
          index: this.element.parent().children().index(this.element),
        }),
        (this.originalTitle = this.element.attr("title")),
        (this.options.title = this.options.title || this.originalTitle),
        this._createWrapper(),
        this.element
          .show()
          .removeAttr("title")
          .addClass("ui-dialog-content ui-widget-content")
          .appendTo(this.uiDialog),
        this._createTitlebar(),
        this._createButtonPane(),
        this.options.draggable && e.fn.draggable && this._makeDraggable(),
        this.options.resizable && e.fn.resizable && this._makeResizable(),
        (this._isOpen = !1);
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t.jquery || t.nodeType)
        ? e(t)
        : this.document.find(t || "body").eq(0);
    },
    _destroy: function () {
      var e,
        t = this.originalPosition;
      this._destroyOverlay(),
        this.element
          .removeUniqueId()
          .removeClass("ui-dialog-content ui-widget-content")
          .css(this.originalCss)
          .detach(),
        this.uiDialog.stop(!0, !0).remove(),
        this.originalTitle && this.element.attr("title", this.originalTitle),
        (e = t.parent.children().eq(t.index)),
        e.length && e[0] !== this.element[0]
          ? e.before(this.element)
          : t.parent.append(this.element);
    },
    widget: function () {
      return this.uiDialog;
    },
    disable: e.noop,
    enable: e.noop,
    close: function (t) {
      var n = this;
      if (!this._isOpen || this._trigger("beforeClose", t) === !1) return;
      (this._isOpen = !1),
        this._destroyOverlay(),
        this.opener.filter(":focusable").focus().length ||
          e(this.document[0].activeElement).blur(),
        this._hide(this.uiDialog, this.options.hide, function () {
          n._trigger("close", t);
        });
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function () {
      this._moveToTop();
    },
    _moveToTop: function (e, t) {
      var n = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog)
        .length;
      return n && !t && this._trigger("focus", e), n;
    },
    open: function () {
      var t = this;
      if (this._isOpen) {
        this._moveToTop() && this._focusTabbable();
        return;
      }
      (this._isOpen = !0),
        (this.opener = e(this.document[0].activeElement)),
        this._size(),
        this._position(),
        this._createOverlay(),
        this._moveToTop(null, !0),
        this._show(this.uiDialog, this.options.show, function () {
          t._focusTabbable(), t._trigger("focus");
        }),
        this._trigger("open");
    },
    _focusTabbable: function () {
      var e = this.element.find("[autofocus]");
      e.length || (e = this.element.find(":tabbable")),
        e.length || (e = this.uiDialogButtonPane.find(":tabbable")),
        e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")),
        e.length || (e = this.uiDialog),
        e.eq(0).focus();
    },
    _keepFocus: function (t) {
      function n() {
        var t = this.document[0].activeElement,
          n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
        n || this._focusTabbable();
      }
      t.preventDefault(), n.call(this), this._delay(n);
    },
    _createWrapper: function () {
      (this.uiDialog = e("<div>")
        .addClass(
          "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
            this.options.dialogClass
        )
        .hide()
        .attr({ tabIndex: -1, role: "dialog" })
        .appendTo(this._appendTo())),
        this._on(this.uiDialog, {
          keydown: function (t) {
            if (
              this.options.closeOnEscape &&
              !t.isDefaultPrevented() &&
              t.keyCode &&
              t.keyCode === e.ui.keyCode.ESCAPE
            ) {
              t.preventDefault(), this.close(t);
              return;
            }
            if (t.keyCode !== e.ui.keyCode.TAB) return;
            var n = this.uiDialog.find(":tabbable"),
              r = n.filter(":first"),
              i = n.filter(":last");
            (t.target !== i[0] && t.target !== this.uiDialog[0]) || !!t.shiftKey
              ? (t.target === r[0] || t.target === this.uiDialog[0]) &&
                t.shiftKey &&
                (i.focus(1), t.preventDefault())
              : (r.focus(1), t.preventDefault());
          },
          mousedown: function (e) {
            this._moveToTop(e) && this._focusTabbable();
          },
        }),
        this.element.find("[aria-describedby]").length ||
          this.uiDialog.attr({
            "aria-describedby": this.element.uniqueId().attr("id"),
          });
    },
    _createTitlebar: function () {
      var t;
      (this.uiDialogTitlebar = e("<div>")
        .addClass(
          "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
        )
        .prependTo(this.uiDialog)),
        this._on(this.uiDialogTitlebar, {
          mousedown: function (t) {
            e(t.target).closest(".ui-dialog-titlebar-close") ||
              this.uiDialog.focus();
          },
        }),
        (this.uiDialogTitlebarClose = e("<button></button>")
          .button({
            label: this.options.closeText,
            icons: { primary: "ui-icon-closethick" },
            text: !1,
          })
          .addClass("ui-dialog-titlebar-close")
          .appendTo(this.uiDialogTitlebar)),
        this._on(this.uiDialogTitlebarClose, {
          click: function (e) {
            e.preventDefault(), this.close(e);
          },
        }),
        (t = e("<span>")
          .uniqueId()
          .addClass("ui-dialog-title")
          .prependTo(this.uiDialogTitlebar)),
        this._title(t),
        this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
    },
    _title: function (e) {
      this.options.title || e.html("&#160;"), e.text(this.options.title);
    },
    _createButtonPane: function () {
      (this.uiDialogButtonPane = e("<div>").addClass(
        "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
      )),
        (this.uiButtonSet = e("<div>")
          .addClass("ui-dialog-buttonset")
          .appendTo(this.uiDialogButtonPane)),
        this._createButtons();
    },
    _createButtons: function () {
      var t = this,
        n = this.options.buttons;
      this.uiDialogButtonPane.remove(), this.uiButtonSet.empty();
      if (e.isEmptyObject(n) || (e.isArray(n) && !n.length)) {
        this.uiDialog.removeClass("ui-dialog-buttons");
        return;
      }
      e.each(n, function (n, r) {
        var i, s;
        (r = e.isFunction(r) ? { click: r, text: n } : r),
          (r = e.extend({ type: "button" }, r)),
          (i = r.click),
          (r.click = function () {
            i.apply(t.element[0], arguments);
          }),
          (s = { icons: r.icons, text: r.showText }),
          delete r.icons,
          delete r.showText,
          e("<button></button>", r).button(s).appendTo(t.uiButtonSet);
      }),
        this.uiDialog.addClass("ui-dialog-buttons"),
        this.uiDialogButtonPane.appendTo(this.uiDialog);
    },
    _makeDraggable: function () {
      function r(e) {
        return { position: e.position, offset: e.offset };
      }
      var t = this,
        n = this.options;
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function (n, i) {
          e(this).addClass("ui-dialog-dragging"),
            t._blockFrames(),
            t._trigger("dragStart", n, r(i));
        },
        drag: function (e, n) {
          t._trigger("drag", e, r(n));
        },
        stop: function (i, s) {
          (n.position = [
            s.position.left - t.document.scrollLeft(),
            s.position.top - t.document.scrollTop(),
          ]),
            e(this).removeClass("ui-dialog-dragging"),
            t._unblockFrames(),
            t._trigger("dragStop", i, r(s));
        },
      });
    },
    _makeResizable: function () {
      function o(e) {
        return {
          originalPosition: e.originalPosition,
          originalSize: e.originalSize,
          position: e.position,
          size: e.size,
        };
      }
      var t = this,
        n = this.options,
        r = n.resizable,
        i = this.uiDialog.css("position"),
        s = typeof r == "string" ? r : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog
        .resizable({
          cancel: ".ui-dialog-content",
          containment: "document",
          alsoResize: this.element,
          maxWidth: n.maxWidth,
          maxHeight: n.maxHeight,
          minWidth: n.minWidth,
          minHeight: this._minHeight(),
          handles: s,
          start: function (n, r) {
            e(this).addClass("ui-dialog-resizing"),
              t._blockFrames(),
              t._trigger("resizeStart", n, o(r));
          },
          resize: function (e, n) {
            t._trigger("resize", e, o(n));
          },
          stop: function (r, i) {
            (n.height = e(this).height()),
              (n.width = e(this).width()),
              e(this).removeClass("ui-dialog-resizing"),
              t._unblockFrames(),
              t._trigger("resizeStop", r, o(i));
          },
        })
        .css("position", i);
    },
    _minHeight: function () {
      var e = this.options;
      return e.height === "auto"
        ? e.minHeight
        : Math.min(e.minHeight, e.height);
    },
    _position: function () {
      var e = this.uiDialog.is(":visible");
      e || this.uiDialog.show(),
        this.uiDialog.position(this.options.position),
        e || this.uiDialog.hide();
    },
    _setOptions: function (t) {
      var i = this,
        s = !1,
        o = {};
      e.each(t, function (e, t) {
        i._setOption(e, t), e in n && (s = !0), e in r && (o[e] = t);
      }),
        s && (this._size(), this._position()),
        this.uiDialog.is(":data(ui-resizable)") &&
          this.uiDialog.resizable("option", o);
    },
    _setOption: function (e, t) {
      var n,
        r,
        i = this.uiDialog;
      e === "dialogClass" &&
        i.removeClass(this.options.dialogClass).addClass(t);
      if (e === "disabled") return;
      this._super(e, t),
        e === "appendTo" && this.uiDialog.appendTo(this._appendTo()),
        e === "buttons" && this._createButtons(),
        e === "closeText" &&
          this.uiDialogTitlebarClose.button({ label: "" + t }),
        e === "draggable" &&
          ((n = i.is(":data(ui-draggable)")),
          n && !t && i.draggable("destroy"),
          !n && t && this._makeDraggable()),
        e === "position" && this._position(),
        e === "resizable" &&
          ((r = i.is(":data(ui-resizable)")),
          r && !t && i.resizable("destroy"),
          r && typeof t == "string" && i.resizable("option", "handles", t),
          !r && t !== !1 && this._makeResizable()),
        e === "title" &&
          this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
    },
    _size: function () {
      var e,
        t,
        n,
        r = this.options;
      this.element
        .show()
        .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
        r.minWidth > r.width && (r.width = r.minWidth),
        (e = this.uiDialog
          .css({ height: "auto", width: r.width })
          .outerHeight()),
        (t = Math.max(0, r.minHeight - e)),
        (n =
          typeof r.maxHeight == "number"
            ? Math.max(0, r.maxHeight - e)
            : "none"),
        r.height === "auto"
          ? this.element.css({ minHeight: t, maxHeight: n, height: "auto" })
          : this.element.height(Math.max(0, r.height - e)),
        this.uiDialog.is(":data(ui-resizable)") &&
          this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
    _blockFrames: function () {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var t = e(this);
        return e("<div>")
          .css({
            position: "absolute",
            width: t.outerWidth(),
            height: t.outerHeight(),
          })
          .appendTo(t.parent())
          .offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks &&
        (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _createOverlay: function () {
      if (!this.options.modal) return;
      e.ui.dialog.overlayInstances ||
        this._delay(function () {
          e.ui.dialog.overlayInstances &&
            this.document.bind("focusin.dialog", function (t) {
              !e(t.target).closest(".ui-dialog").length &&
                !e(t.target).closest(".ui-datepicker").length &&
                (t.preventDefault(),
                e(".ui-dialog:visible:last .ui-dialog-content")
                  .data("ui-dialog")
                  ._focusTabbable());
            });
        }),
        (this.overlay = e("<div>")
          .addClass("ui-widget-overlay ui-front")
          .appendTo(this._appendTo())),
        this._on(this.overlay, { mousedown: "_keepFocus" }),
        e.ui.dialog.overlayInstances++;
    },
    _destroyOverlay: function () {
      if (!this.options.modal) return;
      this.overlay &&
        (e.ui.dialog.overlayInstances--,
        e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"),
        this.overlay.remove(),
        (this.overlay = null));
    },
  }),
    (e.ui.dialog.overlayInstances = 0),
    e.uiBackCompat !== !1 &&
      e.widget("ui.dialog", e.ui.dialog, {
        _position: function () {
          var t = this.options.position,
            n = [],
            r = [0, 0],
            i;
          if (t) {
            if (typeof t == "string" || (typeof t == "object" && "0" in t))
              (n = t.split ? t.split(" ") : [t[0], t[1]]),
                n.length === 1 && (n[1] = n[0]),
                e.each(["left", "top"], function (e, t) {
                  +n[e] === n[e] && ((r[e] = n[e]), (n[e] = t));
                }),
                (t = {
                  my:
                    n[0] +
                    (r[0] < 0 ? r[0] : "+" + r[0]) +
                    " " +
                    n[1] +
                    (r[1] < 0 ? r[1] : "+" + r[1]),
                  at: n.join(" "),
                });
            t = e.extend({}, e.ui.dialog.prototype.options.position, t);
          } else t = e.ui.dialog.prototype.options.position;
          (i = this.uiDialog.is(":visible")),
            i || this.uiDialog.show(),
            this.uiDialog.position(t),
            i || this.uiDialog.hide();
        },
      });
})(jQuery);
(function (e, t) {
  e.widget("ui.menu", {
    version: "1.10.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: { submenu: "ui-icon-carat-1-e" },
      menus: "ul",
      position: { my: "left top", at: "right top" },
      role: "menu",
      blur: null,
      focus: null,
      select: null,
    },
    _create: function () {
      (this.activeMenu = this.element),
        (this.mouseHandled = !1),
        this.element
          .uniqueId()
          .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
          .toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length)
          .attr({ role: this.options.role, tabIndex: 0 })
          .bind(
            "click" + this.eventNamespace,
            e.proxy(function (e) {
              this.options.disabled && e.preventDefault();
            }, this)
          ),
        this.options.disabled &&
          this.element
            .addClass("ui-state-disabled")
            .attr("aria-disabled", "true"),
        this._on({
          "mousedown .ui-menu-item > a": function (e) {
            e.preventDefault();
          },
          "click .ui-state-disabled > a": function (e) {
            e.preventDefault();
          },
          "click .ui-menu-item:has(a)": function (t) {
            var n = e(t.target).closest(".ui-menu-item");
            !this.mouseHandled &&
              n.not(".ui-state-disabled").length &&
              ((this.mouseHandled = !0),
              this.select(t),
              n.has(".ui-menu").length
                ? this.expand(t)
                : this.element.is(":focus") ||
                  (this.element.trigger("focus", [!0]),
                  this.active &&
                    this.active.parents(".ui-menu").length === 1 &&
                    clearTimeout(this.timer)));
          },
          "mouseenter .ui-menu-item": function (t) {
            var n = e(t.currentTarget);
            n
              .siblings()
              .children(".ui-state-active")
              .removeClass("ui-state-active"),
              this.focus(t, n);
          },
          mouseleave: "collapseAll",
          "mouseleave .ui-menu": "collapseAll",
          focus: function (e, t) {
            var n = this.active || this.element.children(".ui-menu-item").eq(0);
            t || this.focus(e, n);
          },
          blur: function (t) {
            this._delay(function () {
              e.contains(this.element[0], this.document[0].activeElement) ||
                this.collapseAll(t);
            });
          },
          keydown: "_keydown",
        }),
        this.refresh(),
        this._on(this.document, {
          click: function (t) {
            e(t.target).closest(".ui-menu").length || this.collapseAll(t),
              (this.mouseHandled = !1);
          },
        });
    },
    _destroy: function () {
      this.element
        .removeAttr("aria-activedescendant")
        .find(".ui-menu")
        .addBack()
        .removeClass(
          "ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons"
        )
        .removeAttr("role")
        .removeAttr("tabIndex")
        .removeAttr("aria-labelledby")
        .removeAttr("aria-expanded")
        .removeAttr("aria-hidden")
        .removeAttr("aria-disabled")
        .removeUniqueId()
        .show(),
        this.element
          .find(".ui-menu-item")
          .removeClass("ui-menu-item")
          .removeAttr("role")
          .removeAttr("aria-disabled")
          .children("a")
          .removeUniqueId()
          .removeClass("ui-corner-all ui-state-hover")
          .removeAttr("tabIndex")
          .removeAttr("role")
          .removeAttr("aria-haspopup")
          .children()
          .each(function () {
            var t = e(this);
            t.data("ui-menu-submenu-carat") && t.remove();
          }),
        this.element
          .find(".ui-menu-divider")
          .removeClass("ui-menu-divider ui-widget-content");
    },
    _keydown: function (t) {
      function a(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      var n,
        r,
        i,
        s,
        o,
        u = !0;
      switch (t.keyCode) {
        case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);
          break;
        case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);
          break;
        case e.ui.keyCode.HOME:
          this._move("first", "first", t);
          break;
        case e.ui.keyCode.END:
          this._move("last", "last", t);
          break;
        case e.ui.keyCode.UP:
          this.previous(t);
          break;
        case e.ui.keyCode.DOWN:
          this.next(t);
          break;
        case e.ui.keyCode.LEFT:
          this.collapse(t);
          break;
        case e.ui.keyCode.RIGHT:
          this.active &&
            !this.active.is(".ui-state-disabled") &&
            this.expand(t);
          break;
        case e.ui.keyCode.ENTER:
        case e.ui.keyCode.SPACE:
          this._activate(t);
          break;
        case e.ui.keyCode.ESCAPE:
          this.collapse(t);
          break;
        default:
          (u = !1),
            (r = this.previousFilter || ""),
            (i = String.fromCharCode(t.keyCode)),
            (s = !1),
            clearTimeout(this.filterTimer),
            i === r ? (s = !0) : (i = r + i),
            (o = new RegExp("^" + a(i), "i")),
            (n = this.activeMenu.children(".ui-menu-item").filter(function () {
              return o.test(e(this).children("a").text());
            })),
            (n =
              s && n.index(this.active.next()) !== -1
                ? this.active.nextAll(".ui-menu-item")
                : n),
            n.length ||
              ((i = String.fromCharCode(t.keyCode)),
              (o = new RegExp("^" + a(i), "i")),
              (n = this.activeMenu
                .children(".ui-menu-item")
                .filter(function () {
                  return o.test(e(this).children("a").text());
                }))),
            n.length
              ? (this.focus(t, n),
                n.length > 1
                  ? ((this.previousFilter = i),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter)
              : delete this.previousFilter;
      }
      u && t.preventDefault();
    },
    _activate: function (e) {
      this.active.is(".ui-state-disabled") ||
        (this.active.children("a[aria-haspopup='true']").length
          ? this.expand(e)
          : this.select(e));
    },
    refresh: function () {
      var t,
        n = this.options.icons.submenu,
        r = this.element.find(this.options.menus);
      r
        .filter(":not(.ui-menu)")
        .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
        .hide()
        .attr({
          role: this.options.role,
          "aria-hidden": "true",
          "aria-expanded": "false",
        })
        .each(function () {
          var t = e(this),
            r = t.prev("a"),
            i = e("<span>")
              .addClass("ui-menu-icon ui-icon " + n)
              .data("ui-menu-submenu-carat", !0);
          r.attr("aria-haspopup", "true").prepend(i),
            t.attr("aria-labelledby", r.attr("id"));
        }),
        (t = r.add(this.element)),
        t
          .children(":not(.ui-menu-item):has(a)")
          .addClass("ui-menu-item")
          .attr("role", "presentation")
          .children("a")
          .uniqueId()
          .addClass("ui-corner-all")
          .attr({ tabIndex: -1, role: this._itemRole() }),
        t.children(":not(.ui-menu-item)").each(function () {
          var t = e(this);
          /[^\-\u2014\u2013\s]/.test(t.text()) ||
            t.addClass("ui-widget-content ui-menu-divider");
        }),
        t.children(".ui-state-disabled").attr("aria-disabled", "true"),
        this.active &&
          !e.contains(this.element[0], this.active[0]) &&
          this.blur();
    },
    _itemRole: function () {
      return { menu: "menuitem", listbox: "option" }[this.options.role];
    },
    _setOption: function (e, t) {
      e === "icons" &&
        this.element
          .find(".ui-menu-icon")
          .removeClass(this.options.icons.submenu)
          .addClass(t.submenu),
        this._super(e, t);
    },
    focus: function (e, t) {
      var n, r;
      this.blur(e, e && e.type === "focus"),
        this._scrollIntoView(t),
        (this.active = t.first()),
        (r = this.active.children("a").addClass("ui-state-focus")),
        this.options.role &&
          this.element.attr("aria-activedescendant", r.attr("id")),
        this.active
          .parent()
          .closest(".ui-menu-item")
          .children("a:first")
          .addClass("ui-state-active"),
        e && e.type === "keydown"
          ? this._close()
          : (this.timer = this._delay(function () {
              this._close();
            }, this.delay)),
        (n = t.children(".ui-menu")),
        n.length && /^mouse/.test(e.type) && this._startOpening(n),
        (this.activeMenu = t.parent()),
        this._trigger("focus", e, { item: t });
    },
    _scrollIntoView: function (t) {
      var n, r, i, s, o, u;
      this._hasScroll() &&
        ((n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0),
        (r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0),
        (i = t.offset().top - this.activeMenu.offset().top - n - r),
        (s = this.activeMenu.scrollTop()),
        (o = this.activeMenu.height()),
        (u = t.height()),
        i < 0
          ? this.activeMenu.scrollTop(s + i)
          : i + u > o && this.activeMenu.scrollTop(s + i - o + u));
    },
    blur: function (e, t) {
      t || clearTimeout(this.timer);
      if (!this.active) return;
      this.active.children("a").removeClass("ui-state-focus"),
        (this.active = null),
        this._trigger("blur", e, { item: this.active });
    },
    _startOpening: function (e) {
      clearTimeout(this.timer);
      if (e.attr("aria-hidden") !== "true") return;
      this.timer = this._delay(function () {
        this._close(), this._open(e);
      }, this.delay);
    },
    _open: function (t) {
      var n = e.extend({ of: this.active }, this.options.position);
      clearTimeout(this.timer),
        this.element
          .find(".ui-menu")
          .not(t.parents(".ui-menu"))
          .hide()
          .attr("aria-hidden", "true"),
        t
          .show()
          .removeAttr("aria-hidden")
          .attr("aria-expanded", "true")
          .position(n);
    },
    collapseAll: function (t, n) {
      clearTimeout(this.timer),
        (this.timer = this._delay(function () {
          var r = n
            ? this.element
            : e(t && t.target).closest(this.element.find(".ui-menu"));
          r.length || (r = this.element),
            this._close(r),
            this.blur(t),
            (this.activeMenu = r);
        }, this.delay));
    },
    _close: function (e) {
      e || (e = this.active ? this.active.parent() : this.element),
        e
          .find(".ui-menu")
          .hide()
          .attr("aria-hidden", "true")
          .attr("aria-expanded", "false")
          .end()
          .find("a.ui-state-active")
          .removeClass("ui-state-active");
    },
    collapse: function (e) {
      var t =
        this.active &&
        this.active.parent().closest(".ui-menu-item", this.element);
      t && t.length && (this._close(), this.focus(e, t));
    },
    expand: function (e) {
      var t =
        this.active &&
        this.active.children(".ui-menu ").children(".ui-menu-item").first();
      t &&
        t.length &&
        (this._open(t.parent()),
        this._delay(function () {
          this.focus(e, t);
        }));
    },
    next: function (e) {
      this._move("next", "first", e);
    },
    previous: function (e) {
      this._move("prev", "last", e);
    },
    isFirstItem: function () {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function () {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function (e, t, n) {
      var r;
      this.active &&
        (e === "first" || e === "last"
          ? (r =
              this.active[e === "first" ? "prevAll" : "nextAll"](
                ".ui-menu-item"
              ).eq(-1))
          : (r = this.active[e + "All"](".ui-menu-item").eq(0)));
      if (!r || !r.length || !this.active)
        r = this.activeMenu.children(".ui-menu-item")[t]();
      this.focus(n, r);
    },
    nextPage: function (t) {
      var n, r, i;
      if (!this.active) {
        this.next(t);
        return;
      }
      if (this.isLastItem()) return;
      this._hasScroll()
        ? ((r = this.active.offset().top),
          (i = this.element.height()),
          this.active.nextAll(".ui-menu-item").each(function () {
            return (n = e(this)), n.offset().top - r - i < 0;
          }),
          this.focus(t, n))
        : this.focus(
            t,
            this.activeMenu
              .children(".ui-menu-item")
              [this.active ? "last" : "first"]()
          );
    },
    previousPage: function (t) {
      var n, r, i;
      if (!this.active) {
        this.next(t);
        return;
      }
      if (this.isFirstItem()) return;
      this._hasScroll()
        ? ((r = this.active.offset().top),
          (i = this.element.height()),
          this.active.prevAll(".ui-menu-item").each(function () {
            return (n = e(this)), n.offset().top - r + i > 0;
          }),
          this.focus(t, n))
        : this.focus(t, this.activeMenu.children(".ui-menu-item").first());
    },
    _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function (t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");
      var n = { item: this.active };
      this.active.has(".ui-menu").length || this.collapseAll(t, !0),
        this._trigger("select", t, n);
    },
  });
})(jQuery);
(function (e, t) {
  e.widget("ui.progressbar", {
    version: "1.10.1",
    options: { max: 100, value: 0, change: null, complete: null },
    min: 0,
    _create: function () {
      (this.oldValue = this.options.value = this._constrainedValue()),
        this.element
          .addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
          .attr({ role: "progressbar", "aria-valuemin": this.min }),
        (this.valueDiv = e(
          "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
        ).appendTo(this.element)),
        this._refreshValue();
    },
    _destroy: function () {
      this.element
        .removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
        .removeAttr("role")
        .removeAttr("aria-valuemin")
        .removeAttr("aria-valuemax")
        .removeAttr("aria-valuenow"),
        this.valueDiv.remove();
    },
    value: function (e) {
      if (e === t) return this.options.value;
      (this.options.value = this._constrainedValue(e)), this._refreshValue();
    },
    _constrainedValue: function (e) {
      return (
        e === t && (e = this.options.value),
        (this.indeterminate = e === !1),
        typeof e != "number" && (e = 0),
        this.indeterminate
          ? !1
          : Math.min(this.options.max, Math.max(this.min, e))
      );
    },
    _setOptions: function (e) {
      var t = e.value;
      delete e.value,
        this._super(e),
        (this.options.value = this._constrainedValue(t)),
        this._refreshValue();
    },
    _setOption: function (e, t) {
      e === "max" && (t = Math.max(this.min, t)), this._super(e, t);
    },
    _percentage: function () {
      return this.indeterminate
        ? 100
        : (100 * (this.options.value - this.min)) /
            (this.options.max - this.min);
    },
    _refreshValue: function () {
      var t = this.options.value,
        n = this._percentage();
      this.valueDiv
        .toggle(this.indeterminate || t > this.min)
        .toggleClass("ui-corner-right", t === this.options.max)
        .width(n.toFixed(0) + "%"),
        this.element.toggleClass(
          "ui-progressbar-indeterminate",
          this.indeterminate
        ),
        this.indeterminate
          ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv ||
              (this.overlayDiv = e(
                "<div class='ui-progressbar-overlay'></div>"
              ).appendTo(this.valueDiv)))
          : (this.element.attr({
              "aria-valuemax": this.options.max,
              "aria-valuenow": t,
            }),
            this.overlayDiv &&
              (this.overlayDiv.remove(), (this.overlayDiv = null))),
        this.oldValue !== t && ((this.oldValue = t), this._trigger("change")),
        t === this.options.max && this._trigger("complete");
    },
  });
})(jQuery);
(function (e, t) {
  var n = 5;
  e.widget("ui.slider", e.ui.mouse, {
    version: "1.10.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null,
    },
    _create: function () {
      (this._keySliding = !1),
        (this._mouseSliding = !1),
        (this._animateOff = !0),
        (this._handleIndex = null),
        this._detectOrientation(),
        this._mouseInit(),
        this.element.addClass(
          "ui-slider ui-slider-" +
            this.orientation +
            " ui-widget" +
            " ui-widget-content" +
            " ui-corner-all"
        ),
        this._refresh(),
        this._setOption("disabled", this.options.disabled),
        (this._animateOff = !1);
    },
    _refresh: function () {
      this._createRange(),
        this._createHandles(),
        this._setupEvents(),
        this._refreshValue();
    },
    _createHandles: function () {
      var t,
        n,
        r = this.options,
        i = this.element
          .find(".ui-slider-handle")
          .addClass("ui-state-default ui-corner-all"),
        s =
          "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
        o = [];
      (n = (r.values && r.values.length) || 1),
        i.length > n && (i.slice(n).remove(), (i = i.slice(0, n)));
      for (t = i.length; t < n; t++) o.push(s);
      (this.handles = i.add(e(o.join("")).appendTo(this.element))),
        (this.handle = this.handles.eq(0)),
        this.handles.each(function (t) {
          e(this).data("ui-slider-handle-index", t);
        });
    },
    _createRange: function () {
      var t = this.options,
        n = "";
      t.range
        ? (t.range === !0 &&
            (t.values
              ? t.values.length && t.values.length !== 2
                ? (t.values = [t.values[0], t.values[0]])
                : e.isArray(t.values) && (t.values = t.values.slice(0))
              : (t.values = [this._valueMin(), this._valueMin()])),
          !this.range || !this.range.length
            ? ((this.range = e("<div></div>").appendTo(this.element)),
              (n = "ui-slider-range ui-widget-header ui-corner-all"))
            : this.range
                .removeClass("ui-slider-range-min ui-slider-range-max")
                .css({ left: "", bottom: "" }),
          this.range.addClass(
            n +
              (t.range === "min" || t.range === "max"
                ? " ui-slider-range-" + t.range
                : "")
          ))
        : (this.range = e([]));
    },
    _setupEvents: function () {
      var e = this.handles.add(this.range).filter("a");
      this._off(e),
        this._on(e, this._handleEvents),
        this._hoverable(e),
        this._focusable(e);
    },
    _destroy: function () {
      this.handles.remove(),
        this.range.remove(),
        this.element.removeClass(
          "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
        ),
        this._mouseDestroy();
    },
    _mouseCapture: function (t) {
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l = this,
        c = this.options;
      return c.disabled
        ? !1
        : ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (n = { x: t.pageX, y: t.pageY }),
          (r = this._normValueFromMouse(n)),
          (i = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (t) {
            var n = Math.abs(r - l.values(t));
            if (
              i > n ||
              (i === n && (t === l._lastChangedValue || l.values(t) === c.min))
            )
              (i = n), (s = e(this)), (o = t);
          }),
          (u = this._start(t, o)),
          u === !1
            ? !1
            : ((this._mouseSliding = !0),
              (this._handleIndex = o),
              s.addClass("ui-state-active").focus(),
              (a = s.offset()),
              (f = !e(t.target).parents().addBack().is(".ui-slider-handle")),
              (this._clickOffset = f
                ? { left: 0, top: 0 }
                : {
                    left: t.pageX - a.left - s.width() / 2,
                    top:
                      t.pageY -
                      a.top -
                      s.height() / 2 -
                      (parseInt(s.css("borderTopWidth"), 10) || 0) -
                      (parseInt(s.css("borderBottomWidth"), 10) || 0) +
                      (parseInt(s.css("marginTop"), 10) || 0),
                  }),
              this.handles.hasClass("ui-state-hover") || this._slide(t, o, r),
              (this._animateOff = !0),
              !0));
    },
    _mouseStart: function () {
      return !0;
    },
    _mouseDrag: function (e) {
      var t = { x: e.pageX, y: e.pageY },
        n = this._normValueFromMouse(t);
      return this._slide(e, this._handleIndex, n), !1;
    },
    _mouseStop: function (e) {
      return (
        this.handles.removeClass("ui-state-active"),
        (this._mouseSliding = !1),
        this._stop(e, this._handleIndex),
        this._change(e, this._handleIndex),
        (this._handleIndex = null),
        (this._clickOffset = null),
        (this._animateOff = !1),
        !1
      );
    },
    _detectOrientation: function () {
      this.orientation =
        this.options.orientation === "vertical" ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function (e) {
      var t, n, r, i, s;
      return (
        this.orientation === "horizontal"
          ? ((t = this.elementSize.width),
            (n =
              e.x -
              this.elementOffset.left -
              (this._clickOffset ? this._clickOffset.left : 0)))
          : ((t = this.elementSize.height),
            (n =
              e.y -
              this.elementOffset.top -
              (this._clickOffset ? this._clickOffset.top : 0))),
        (r = n / t),
        r > 1 && (r = 1),
        r < 0 && (r = 0),
        this.orientation === "vertical" && (r = 1 - r),
        (i = this._valueMax() - this._valueMin()),
        (s = this._valueMin() + r * i),
        this._trimAlignValue(s)
      );
    },
    _start: function (e, t) {
      var n = { handle: this.handles[t], value: this.value() };
      return (
        this.options.values &&
          this.options.values.length &&
          ((n.value = this.values(t)), (n.values = this.values())),
        this._trigger("start", e, n)
      );
    },
    _slide: function (e, t, n) {
      var r, i, s;
      this.options.values && this.options.values.length
        ? ((r = this.values(t ? 0 : 1)),
          this.options.values.length === 2 &&
            this.options.range === !0 &&
            ((t === 0 && n > r) || (t === 1 && n < r)) &&
            (n = r),
          n !== this.values(t) &&
            ((i = this.values()),
            (i[t] = n),
            (s = this._trigger("slide", e, {
              handle: this.handles[t],
              value: n,
              values: i,
            })),
            (r = this.values(t ? 0 : 1)),
            s !== !1 && this.values(t, n, !0)))
        : n !== this.value() &&
          ((s = this._trigger("slide", e, {
            handle: this.handles[t],
            value: n,
          })),
          s !== !1 && this.value(n));
    },
    _stop: function (e, t) {
      var n = { handle: this.handles[t], value: this.value() };
      this.options.values &&
        this.options.values.length &&
        ((n.value = this.values(t)), (n.values = this.values())),
        this._trigger("stop", e, n);
    },
    _change: function (e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var n = { handle: this.handles[t], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((n.value = this.values(t)), (n.values = this.values())),
          (this._lastChangedValue = t),
          this._trigger("change", e, n);
      }
    },
    value: function (e) {
      if (arguments.length) {
        (this.options.value = this._trimAlignValue(e)),
          this._refreshValue(),
          this._change(null, 0);
        return;
      }
      return this._value();
    },
    values: function (t, n) {
      var r, i, s;
      if (arguments.length > 1) {
        (this.options.values[t] = this._trimAlignValue(n)),
          this._refreshValue(),
          this._change(null, t);
        return;
      }
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0]))
        return this.options.values && this.options.values.length
          ? this._values(t)
          : this.value();
      (r = this.options.values), (i = arguments[0]);
      for (s = 0; s < r.length; s += 1)
        (r[s] = this._trimAlignValue(i[s])), this._change(null, s);
      this._refreshValue();
    },
    _setOption: function (t, n) {
      var r,
        i = 0;
      t === "range" &&
        this.options.range === !0 &&
        (n === "min"
          ? ((this.options.value = this._values(0)),
            (this.options.values = null))
          : n === "max" &&
            ((this.options.value = this._values(
              this.options.values.length - 1
            )),
            (this.options.values = null))),
        e.isArray(this.options.values) && (i = this.options.values.length),
        e.Widget.prototype._setOption.apply(this, arguments);
      switch (t) {
        case "orientation":
          this._detectOrientation(),
            this.element
              .removeClass("ui-slider-horizontal ui-slider-vertical")
              .addClass("ui-slider-" + this.orientation),
            this._refreshValue();
          break;
        case "value":
          (this._animateOff = !0),
            this._refreshValue(),
            this._change(null, 0),
            (this._animateOff = !1);
          break;
        case "values":
          (this._animateOff = !0), this._refreshValue();
          for (r = 0; r < i; r += 1) this._change(null, r);
          this._animateOff = !1;
          break;
        case "min":
        case "max":
          (this._animateOff = !0),
            this._refreshValue(),
            (this._animateOff = !1);
          break;
        case "range":
          (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
      }
    },
    _value: function () {
      var e = this.options.value;
      return (e = this._trimAlignValue(e)), e;
    },
    _values: function (e) {
      var t, n, r;
      if (arguments.length)
        return (t = this.options.values[e]), (t = this._trimAlignValue(t)), t;
      if (this.options.values && this.options.values.length) {
        n = this.options.values.slice();
        for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
        return n;
      }
      return [];
    },
    _trimAlignValue: function (e) {
      if (e <= this._valueMin()) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
        n = (e - this._valueMin()) % t,
        r = e - n;
      return (
        Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
      );
    },
    _valueMin: function () {
      return this.options.min;
    },
    _valueMax: function () {
      return this.options.max;
    },
    _refreshValue: function () {
      var t,
        n,
        r,
        i,
        s,
        o = this.options.range,
        u = this.options,
        a = this,
        f = this._animateOff ? !1 : u.animate,
        l = {};
      this.options.values && this.options.values.length
        ? this.handles.each(function (r) {
            (n =
              ((a.values(r) - a._valueMin()) /
                (a._valueMax() - a._valueMin())) *
              100),
              (l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%"),
              e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate),
              a.options.range === !0 &&
                (a.orientation === "horizontal"
                  ? (r === 0 &&
                      a.range
                        .stop(1, 1)
                        [f ? "animate" : "css"]({ left: n + "%" }, u.animate),
                    r === 1 &&
                      a.range[f ? "animate" : "css"](
                        { width: n - t + "%" },
                        { queue: !1, duration: u.animate }
                      ))
                  : (r === 0 &&
                      a.range
                        .stop(1, 1)
                        [f ? "animate" : "css"]({ bottom: n + "%" }, u.animate),
                    r === 1 &&
                      a.range[f ? "animate" : "css"](
                        { height: n - t + "%" },
                        { queue: !1, duration: u.animate }
                      ))),
              (t = n);
          })
        : ((r = this.value()),
          (i = this._valueMin()),
          (s = this._valueMax()),
          (n = s !== i ? ((r - i) / (s - i)) * 100 : 0),
          (l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%"),
          this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate),
          o === "min" &&
            this.orientation === "horizontal" &&
            this.range
              .stop(1, 1)
              [f ? "animate" : "css"]({ width: n + "%" }, u.animate),
          o === "max" &&
            this.orientation === "horizontal" &&
            this.range[f ? "animate" : "css"](
              { width: 100 - n + "%" },
              { queue: !1, duration: u.animate }
            ),
          o === "min" &&
            this.orientation === "vertical" &&
            this.range
              .stop(1, 1)
              [f ? "animate" : "css"]({ height: n + "%" }, u.animate),
          o === "max" &&
            this.orientation === "vertical" &&
            this.range[f ? "animate" : "css"](
              { height: 100 - n + "%" },
              { queue: !1, duration: u.animate }
            ));
    },
    _handleEvents: {
      keydown: function (t) {
        var r,
          i,
          s,
          o,
          u = e(t.target).data("ui-slider-handle-index");
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            t.preventDefault();
            if (!this._keySliding) {
              (this._keySliding = !0),
                e(t.target).addClass("ui-state-active"),
                (r = this._start(t, u));
              if (r === !1) return;
            }
        }
        (o = this.options.step),
          this.options.values && this.options.values.length
            ? (i = s = this.values(u))
            : (i = s = this.value());
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
            s = this._valueMin();
            break;
          case e.ui.keyCode.END:
            s = this._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            s = this._trimAlignValue(
              i + (this._valueMax() - this._valueMin()) / n
            );
            break;
          case e.ui.keyCode.PAGE_DOWN:
            s = this._trimAlignValue(
              i - (this._valueMax() - this._valueMin()) / n
            );
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (i === this._valueMax()) return;
            s = this._trimAlignValue(i + o);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (i === this._valueMin()) return;
            s = this._trimAlignValue(i - o);
        }
        this._slide(t, u, s);
      },
      click: function (e) {
        e.preventDefault();
      },
      keyup: function (t) {
        var n = e(t.target).data("ui-slider-handle-index");
        this._keySliding &&
          ((this._keySliding = !1),
          this._stop(t, n),
          this._change(t, n),
          e(t.target).removeClass("ui-state-active"));
      },
    },
  });
})(jQuery);
(function (e) {
  function t(e) {
    return function () {
      var t = this.element.val();
      e.apply(this, arguments),
        this._refresh(),
        t !== this.element.val() && this._trigger("change");
    };
  }
  e.widget("ui.spinner", {
    version: "1.10.1",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      culture: null,
      icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null,
    },
    _create: function () {
      this._setOption("max", this.options.max),
        this._setOption("min", this.options.min),
        this._setOption("step", this.options.step),
        this._value(this.element.val(), !0),
        this._draw(),
        this._on(this._events),
        this._refresh(),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _getCreateOptions: function () {
      var t = {},
        n = this.element;
      return (
        e.each(["min", "max", "step"], function (e, r) {
          var i = n.attr(r);
          i !== undefined && i.length && (t[r] = i);
        }),
        t
      );
    },
    _events: {
      keydown: function (e) {
        this._start(e) && this._keydown(e) && e.preventDefault();
      },
      keyup: "_stop",
      focus: function () {
        this.previous = this.element.val();
      },
      blur: function (e) {
        if (this.cancelBlur) {
          delete this.cancelBlur;
          return;
        }
        this._refresh(),
          this.previous !== this.element.val() && this._trigger("change", e);
      },
      mousewheel: function (e, t) {
        if (!t) return;
        if (!this.spinning && !this._start(e)) return !1;
        this._spin((t > 0 ? 1 : -1) * this.options.step, e),
          clearTimeout(this.mousewheelTimer),
          (this.mousewheelTimer = this._delay(function () {
            this.spinning && this._stop(e);
          }, 100)),
          e.preventDefault();
      },
      "mousedown .ui-spinner-button": function (t) {
        function r() {
          var e = this.element[0] === this.document[0].activeElement;
          e ||
            (this.element.focus(),
            (this.previous = n),
            this._delay(function () {
              this.previous = n;
            }));
        }
        var n;
        (n =
          this.element[0] === this.document[0].activeElement
            ? this.previous
            : this.element.val()),
          t.preventDefault(),
          r.call(this),
          (this.cancelBlur = !0),
          this._delay(function () {
            delete this.cancelBlur, r.call(this);
          });
        if (this._start(t) === !1) return;
        this._repeat(
          null,
          e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
          t
        );
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function (t) {
        if (!e(t.currentTarget).hasClass("ui-state-active")) return;
        if (this._start(t) === !1) return !1;
        this._repeat(
          null,
          e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
          t
        );
      },
      "mouseleave .ui-spinner-button": "_stop",
    },
    _draw: function () {
      var e = (this.uiSpinner = this.element
        .addClass("ui-spinner-input")
        .attr("autocomplete", "off")
        .wrap(this._uiSpinnerHtml())
        .parent()
        .append(this._buttonHtml()));
      this.element.attr("role", "spinbutton"),
        (this.buttons = e
          .find(".ui-spinner-button")
          .attr("tabIndex", -1)
          .button()
          .removeClass("ui-corner-all")),
        this.buttons.height() > Math.ceil(e.height() * 0.5) &&
          e.height() > 0 &&
          e.height(e.height()),
        this.options.disabled && this.disable();
    },
    _keydown: function (t) {
      var n = this.options,
        r = e.ui.keyCode;
      switch (t.keyCode) {
        case r.UP:
          return this._repeat(null, 1, t), !0;
        case r.DOWN:
          return this._repeat(null, -1, t), !0;
        case r.PAGE_UP:
          return this._repeat(null, n.page, t), !0;
        case r.PAGE_DOWN:
          return this._repeat(null, -n.page, t), !0;
      }
      return !1;
    },
    _uiSpinnerHtml: function () {
      return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
    },
    _buttonHtml: function () {
      return (
        "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
        this.options.icons.up +
        "'>&#9650;</span>" +
        "</a>" +
        "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
        "<span class='ui-icon " +
        this.options.icons.down +
        "'>&#9660;</span>" +
        "</a>"
      );
    },
    _start: function (e) {
      return !this.spinning && this._trigger("start", e) === !1
        ? !1
        : (this.counter || (this.counter = 1), (this.spinning = !0), !0);
    },
    _repeat: function (e, t, n) {
      (e = e || 500),
        clearTimeout(this.timer),
        (this.timer = this._delay(function () {
          this._repeat(40, t, n);
        }, e)),
        this._spin(t * this.options.step, n);
    },
    _spin: function (e, t) {
      var n = this.value() || 0;
      this.counter || (this.counter = 1),
        (n = this._adjustValue(n + e * this._increment(this.counter)));
      if (!this.spinning || this._trigger("spin", t, { value: n }) !== !1)
        this._value(n), this.counter++;
    },
    _increment: function (t) {
      var n = this.options.incremental;
      return n
        ? e.isFunction(n)
          ? n(t)
          : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)
        : 1;
    },
    _precision: function () {
      var e = this._precisionOf(this.options.step);
      return (
        this.options.min !== null &&
          (e = Math.max(e, this._precisionOf(this.options.min))),
        e
      );
    },
    _precisionOf: function (e) {
      var t = e.toString(),
        n = t.indexOf(".");
      return n === -1 ? 0 : t.length - n - 1;
    },
    _adjustValue: function (e) {
      var t,
        n,
        r = this.options;
      return (
        (t = r.min !== null ? r.min : 0),
        (n = e - t),
        (n = Math.round(n / r.step) * r.step),
        (e = t + n),
        (e = parseFloat(e.toFixed(this._precision()))),
        r.max !== null && e > r.max
          ? r.max
          : r.min !== null && e < r.min
          ? r.min
          : e
      );
    },
    _stop: function (e) {
      if (!this.spinning) return;
      clearTimeout(this.timer),
        clearTimeout(this.mousewheelTimer),
        (this.counter = 0),
        (this.spinning = !1),
        this._trigger("stop", e);
    },
    _setOption: function (e, t) {
      if (e === "culture" || e === "numberFormat") {
        var n = this._parse(this.element.val());
        (this.options[e] = t), this.element.val(this._format(n));
        return;
      }
      (e === "max" || e === "min" || e === "step") &&
        typeof t == "string" &&
        (t = this._parse(t)),
        e === "icons" &&
          (this.buttons
            .first()
            .find(".ui-icon")
            .removeClass(this.options.icons.up)
            .addClass(t.up),
          this.buttons
            .last()
            .find(".ui-icon")
            .removeClass(this.options.icons.down)
            .addClass(t.down)),
        this._super(e, t),
        e === "disabled" &&
          (t
            ? (this.element.prop("disabled", !0),
              this.buttons.button("disable"))
            : (this.element.prop("disabled", !1),
              this.buttons.button("enable")));
    },
    _setOptions: t(function (e) {
      this._super(e), this._value(this.element.val());
    }),
    _parse: function (e) {
      return (
        typeof e == "string" &&
          e !== "" &&
          (e =
            window.Globalize && this.options.numberFormat
              ? Globalize.parseFloat(e, 10, this.options.culture)
              : +e),
        e === "" || isNaN(e) ? null : e
      );
    },
    _format: function (e) {
      return e === ""
        ? ""
        : window.Globalize && this.options.numberFormat
        ? Globalize.format(e, this.options.numberFormat, this.options.culture)
        : e;
    },
    _refresh: function () {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val()),
      });
    },
    _value: function (e, t) {
      var n;
      e !== "" &&
        ((n = this._parse(e)),
        n !== null && (t || (n = this._adjustValue(n)), (e = this._format(n)))),
        this.element.val(e),
        this._refresh();
    },
    _destroy: function () {
      this.element
        .removeClass("ui-spinner-input")
        .prop("disabled", !1)
        .removeAttr("autocomplete")
        .removeAttr("role")
        .removeAttr("aria-valuemin")
        .removeAttr("aria-valuemax")
        .removeAttr("aria-valuenow"),
        this.uiSpinner.replaceWith(this.element);
    },
    stepUp: t(function (e) {
      this._stepUp(e);
    }),
    _stepUp: function (e) {
      this._start() && (this._spin((e || 1) * this.options.step), this._stop());
    },
    stepDown: t(function (e) {
      this._stepDown(e);
    }),
    _stepDown: function (e) {
      this._start() &&
        (this._spin((e || 1) * -this.options.step), this._stop());
    },
    pageUp: t(function (e) {
      this._stepUp((e || 1) * this.options.page);
    }),
    pageDown: t(function (e) {
      this._stepDown((e || 1) * this.options.page);
    }),
    value: function (e) {
      if (!arguments.length) return this._parse(this.element.val());
      t(this._value).call(this, e);
    },
    widget: function () {
      return this.uiSpinner;
    },
  });
})(jQuery);
(function (e, t) {
  function i() {
    return ++n;
  }
  function s(e) {
    return (
      e.hash.length > 1 &&
      decodeURIComponent(e.href.replace(r, "")) ===
        decodeURIComponent(location.href.replace(r, ""))
    );
  }
  var n = 0,
    r = /#.*$/;
  e.widget("ui.tabs", {
    version: "1.10.1",
    delay: 300,
    options: {
      active: null,
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null,
    },
    _create: function () {
      var t = this,
        n = this.options;
      (this.running = !1),
        this.element
          .addClass("ui-tabs ui-widget ui-widget-content ui-corner-all")
          .toggleClass("ui-tabs-collapsible", n.collapsible)
          .delegate(
            ".ui-tabs-nav > li",
            "mousedown" + this.eventNamespace,
            function (t) {
              e(this).is(".ui-state-disabled") && t.preventDefault();
            }
          )
          .delegate(
            ".ui-tabs-anchor",
            "focus" + this.eventNamespace,
            function () {
              e(this).closest("li").is(".ui-state-disabled") && this.blur();
            }
          ),
        this._processTabs(),
        (n.active = this._initialActive()),
        e.isArray(n.disabled) &&
          (n.disabled = e
            .unique(
              n.disabled.concat(
                e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                  return t.tabs.index(e);
                })
              )
            )
            .sort()),
        this.options.active !== !1 && this.anchors.length
          ? (this.active = this._findActive(n.active))
          : (this.active = e()),
        this._refresh(),
        this.active.length && this.load(n.active);
    },
    _initialActive: function () {
      var t = this.options.active,
        n = this.options.collapsible,
        r = location.hash.substring(1);
      if (t === null) {
        r &&
          this.tabs.each(function (n, i) {
            if (e(i).attr("aria-controls") === r) return (t = n), !1;
          }),
          t === null &&
            (t = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
        if (t === null || t === -1) t = this.tabs.length ? 0 : !1;
      }
      return (
        t !== !1 &&
          ((t = this.tabs.index(this.tabs.eq(t))),
          t === -1 && (t = n ? !1 : 0)),
        !n && t === !1 && this.anchors.length && (t = 0),
        t
      );
    },
    _getCreateEventData: function () {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : e(),
      };
    },
    _tabKeydown: function (t) {
      var n = e(this.document[0].activeElement).closest("li"),
        r = this.tabs.index(n),
        i = !0;
      if (this._handlePageNav(t)) return;
      switch (t.keyCode) {
        case e.ui.keyCode.RIGHT:
        case e.ui.keyCode.DOWN:
          r++;
          break;
        case e.ui.keyCode.UP:
        case e.ui.keyCode.LEFT:
          (i = !1), r--;
          break;
        case e.ui.keyCode.END:
          r = this.anchors.length - 1;
          break;
        case e.ui.keyCode.HOME:
          r = 0;
          break;
        case e.ui.keyCode.SPACE:
          t.preventDefault(), clearTimeout(this.activating), this._activate(r);
          return;
        case e.ui.keyCode.ENTER:
          t.preventDefault(),
            clearTimeout(this.activating),
            this._activate(r === this.options.active ? !1 : r);
          return;
        default:
          return;
      }
      t.preventDefault(),
        clearTimeout(this.activating),
        (r = this._focusNextTab(r, i)),
        t.ctrlKey ||
          (n.attr("aria-selected", "false"),
          this.tabs.eq(r).attr("aria-selected", "true"),
          (this.activating = this._delay(function () {
            this.option("active", r);
          }, this.delay)));
    },
    _panelKeydown: function (t) {
      if (this._handlePageNav(t)) return;
      t.ctrlKey &&
        t.keyCode === e.ui.keyCode.UP &&
        (t.preventDefault(), this.active.focus());
    },
    _handlePageNav: function (t) {
      if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP)
        return (
          this._activate(this._focusNextTab(this.options.active - 1, !1)), !0
        );
      if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN)
        return (
          this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
        );
    },
    _findNextTab: function (t, n) {
      function i() {
        return t > r && (t = 0), t < 0 && (t = r), t;
      }
      var r = this.tabs.length - 1;
      while (e.inArray(i(), this.options.disabled) !== -1)
        t = n ? t + 1 : t - 1;
      return t;
    },
    _focusNextTab: function (e, t) {
      return (e = this._findNextTab(e, t)), this.tabs.eq(e).focus(), e;
    },
    _setOption: function (e, t) {
      if (e === "active") {
        this._activate(t);
        return;
      }
      if (e === "disabled") {
        this._setupDisabled(t);
        return;
      }
      this._super(e, t),
        e === "collapsible" &&
          (this.element.toggleClass("ui-tabs-collapsible", t),
          !t && this.options.active === !1 && this._activate(0)),
        e === "event" && this._setupEvents(t),
        e === "heightStyle" && this._setupHeightStyle(t);
    },
    _tabId: function (e) {
      return e.attr("aria-controls") || "ui-tabs-" + i();
    },
    _sanitizeSelector: function (e) {
      return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function () {
      var t = this.options,
        n = this.tablist.children(":has(a[href])");
      (t.disabled = e.map(n.filter(".ui-state-disabled"), function (e) {
        return n.index(e);
      })),
        this._processTabs(),
        t.active === !1 || !this.anchors.length
          ? ((t.active = !1), (this.active = e()))
          : this.active.length && !e.contains(this.tablist[0], this.active[0])
          ? this.tabs.length === t.disabled.length
            ? ((t.active = !1), (this.active = e()))
            : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))
          : (t.active = this.tabs.index(this.active)),
        this._refresh();
    },
    _refresh: function () {
      this._setupDisabled(this.options.disabled),
        this._setupEvents(this.options.event),
        this._setupHeightStyle(this.options.heightStyle),
        this.tabs
          .not(this.active)
          .attr({ "aria-selected": "false", tabIndex: -1 }),
        this.panels
          .not(this._getPanelForTab(this.active))
          .hide()
          .attr({ "aria-expanded": "false", "aria-hidden": "true" }),
        this.active.length
          ? (this.active
              .addClass("ui-tabs-active ui-state-active")
              .attr({ "aria-selected": "true", tabIndex: 0 }),
            this._getPanelForTab(this.active)
              .show()
              .attr({ "aria-expanded": "true", "aria-hidden": "false" }))
          : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function () {
      var t = this;
      (this.tablist = this._getList()
        .addClass(
          "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
        )
        .attr("role", "tablist")),
        (this.tabs = this.tablist
          .find("> li:has(a[href])")
          .addClass("ui-state-default ui-corner-top")
          .attr({ role: "tab", tabIndex: -1 })),
        (this.anchors = this.tabs
          .map(function () {
            return e("a", this)[0];
          })
          .addClass("ui-tabs-anchor")
          .attr({ role: "presentation", tabIndex: -1 })),
        (this.panels = e()),
        this.anchors.each(function (n, r) {
          var i,
            o,
            u,
            a = e(r).uniqueId().attr("id"),
            f = e(r).closest("li"),
            l = f.attr("aria-controls");
          s(r)
            ? ((i = r.hash), (o = t.element.find(t._sanitizeSelector(i))))
            : ((u = t._tabId(f)),
              (i = "#" + u),
              (o = t.element.find(i)),
              o.length ||
                ((o = t._createPanel(u)),
                o.insertAfter(t.panels[n - 1] || t.tablist)),
              o.attr("aria-live", "polite")),
            o.length && (t.panels = t.panels.add(o)),
            l && f.data("ui-tabs-aria-controls", l),
            f.attr({ "aria-controls": i.substring(1), "aria-labelledby": a }),
            o.attr("aria-labelledby", a);
        }),
        this.panels
          .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
          .attr("role", "tabpanel");
    },
    _getList: function () {
      return this.element.find("ol,ul").eq(0);
    },
    _createPanel: function (t) {
      return e("<div>")
        .attr("id", t)
        .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
        .data("ui-tabs-destroy", !0);
    },
    _setupDisabled: function (t) {
      e.isArray(t) &&
        (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1));
      for (var n = 0, r; (r = this.tabs[n]); n++)
        t === !0 || e.inArray(n, t) !== -1
          ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true")
          : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
      this.options.disabled = t;
    },
    _setupEvents: function (t) {
      var n = {
        click: function (e) {
          e.preventDefault();
        },
      };
      t &&
        e.each(t.split(" "), function (e, t) {
          n[t] = "_eventHandler";
        }),
        this._off(this.anchors.add(this.tabs).add(this.panels)),
        this._on(this.anchors, n),
        this._on(this.tabs, { keydown: "_tabKeydown" }),
        this._on(this.panels, { keydown: "_panelKeydown" }),
        this._focusable(this.tabs),
        this._hoverable(this.tabs);
    },
    _setupHeightStyle: function (t) {
      var n,
        r = this.element.parent();
      t === "fill"
        ? ((n = r.height()),
          (n -= this.element.outerHeight() - this.element.height()),
          this.element.siblings(":visible").each(function () {
            var t = e(this),
              r = t.css("position");
            if (r === "absolute" || r === "fixed") return;
            n -= t.outerHeight(!0);
          }),
          this.element
            .children()
            .not(this.panels)
            .each(function () {
              n -= e(this).outerHeight(!0);
            }),
          this.panels
            .each(function () {
              e(this).height(
                Math.max(0, n - e(this).innerHeight() + e(this).height())
              );
            })
            .css("overflow", "auto"))
        : t === "auto" &&
          ((n = 0),
          this.panels
            .each(function () {
              n = Math.max(n, e(this).height("").height());
            })
            .height(n));
    },
    _eventHandler: function (t) {
      var n = this.options,
        r = this.active,
        i = e(t.currentTarget),
        s = i.closest("li"),
        o = s[0] === r[0],
        u = o && n.collapsible,
        a = u ? e() : this._getPanelForTab(s),
        f = r.length ? this._getPanelForTab(r) : e(),
        l = { oldTab: r, oldPanel: f, newTab: u ? e() : s, newPanel: a };
      t.preventDefault();
      if (
        s.hasClass("ui-state-disabled") ||
        s.hasClass("ui-tabs-loading") ||
        this.running ||
        (o && !n.collapsible) ||
        this._trigger("beforeActivate", t, l) === !1
      )
        return;
      (n.active = u ? !1 : this.tabs.index(s)),
        (this.active = o ? e() : s),
        this.xhr && this.xhr.abort(),
        !f.length &&
          !a.length &&
          e.error("jQuery UI Tabs: Mismatching fragment identifier."),
        a.length && this.load(this.tabs.index(s), t),
        this._toggle(t, l);
    },
    _toggle: function (t, n) {
      function o() {
        (r.running = !1), r._trigger("activate", t, n);
      }
      function u() {
        n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
          i.length && r.options.show
            ? r._show(i, r.options.show, o)
            : (i.show(), o());
      }
      var r = this,
        i = n.newPanel,
        s = n.oldPanel;
      (this.running = !0),
        s.length && this.options.hide
          ? this._hide(s, this.options.hide, function () {
              n.oldTab
                .closest("li")
                .removeClass("ui-tabs-active ui-state-active"),
                u();
            })
          : (n.oldTab
              .closest("li")
              .removeClass("ui-tabs-active ui-state-active"),
            s.hide(),
            u()),
        s.attr({ "aria-expanded": "false", "aria-hidden": "true" }),
        n.oldTab.attr("aria-selected", "false"),
        i.length && s.length
          ? n.oldTab.attr("tabIndex", -1)
          : i.length &&
            this.tabs
              .filter(function () {
                return e(this).attr("tabIndex") === 0;
              })
              .attr("tabIndex", -1),
        i.attr({ "aria-expanded": "true", "aria-hidden": "false" }),
        n.newTab.attr({ "aria-selected": "true", tabIndex: 0 });
    },
    _activate: function (t) {
      var n,
        r = this._findActive(t);
      if (r[0] === this.active[0]) return;
      r.length || (r = this.active),
        (n = r.find(".ui-tabs-anchor")[0]),
        this._eventHandler({
          target: n,
          currentTarget: n,
          preventDefault: e.noop,
        });
    },
    _findActive: function (t) {
      return t === !1 ? e() : this.tabs.eq(t);
    },
    _getIndex: function (e) {
      return (
        typeof e == "string" &&
          (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))),
        e
      );
    },
    _destroy: function () {
      this.xhr && this.xhr.abort(),
        this.element.removeClass(
          "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
        ),
        this.tablist
          .removeClass(
            "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
          )
          .removeAttr("role"),
        this.anchors
          .removeClass("ui-tabs-anchor")
          .removeAttr("role")
          .removeAttr("tabIndex")
          .removeUniqueId(),
        this.tabs.add(this.panels).each(function () {
          e.data(this, "ui-tabs-destroy")
            ? e(this).remove()
            : e(this)
                .removeClass(
                  "ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel"
                )
                .removeAttr("tabIndex")
                .removeAttr("aria-live")
                .removeAttr("aria-busy")
                .removeAttr("aria-selected")
                .removeAttr("aria-labelledby")
                .removeAttr("aria-hidden")
                .removeAttr("aria-expanded")
                .removeAttr("role");
        }),
        this.tabs.each(function () {
          var t = e(this),
            n = t.data("ui-tabs-aria-controls");
          n
            ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls")
            : t.removeAttr("aria-controls");
        }),
        this.panels.show(),
        this.options.heightStyle !== "content" && this.panels.css("height", "");
    },
    enable: function (n) {
      var r = this.options.disabled;
      if (r === !1) return;
      n === t
        ? (r = !1)
        : ((n = this._getIndex(n)),
          e.isArray(r)
            ? (r = e.map(r, function (e) {
                return e !== n ? e : null;
              }))
            : (r = e.map(this.tabs, function (e, t) {
                return t !== n ? t : null;
              }))),
        this._setupDisabled(r);
    },
    disable: function (n) {
      var r = this.options.disabled;
      if (r === !0) return;
      if (n === t) r = !0;
      else {
        n = this._getIndex(n);
        if (e.inArray(n, r) !== -1) return;
        e.isArray(r) ? (r = e.merge([n], r).sort()) : (r = [n]);
      }
      this._setupDisabled(r);
    },
    load: function (t, n) {
      t = this._getIndex(t);
      var r = this,
        i = this.tabs.eq(t),
        o = i.find(".ui-tabs-anchor"),
        u = this._getPanelForTab(i),
        a = { tab: i, panel: u };
      if (s(o[0])) return;
      (this.xhr = e.ajax(this._ajaxSettings(o, n, a))),
        this.xhr &&
          this.xhr.statusText !== "canceled" &&
          (i.addClass("ui-tabs-loading"),
          u.attr("aria-busy", "true"),
          this.xhr
            .success(function (e) {
              setTimeout(function () {
                u.html(e), r._trigger("load", n, a);
              }, 1);
            })
            .complete(function (e, t) {
              setTimeout(function () {
                t === "abort" && r.panels.stop(!1, !0),
                  i.removeClass("ui-tabs-loading"),
                  u.removeAttr("aria-busy"),
                  e === r.xhr && delete r.xhr;
              }, 1);
            }));
    },
    _ajaxSettings: function (t, n, r) {
      var i = this;
      return {
        url: t.attr("href"),
        beforeSend: function (t, s) {
          return i._trigger(
            "beforeLoad",
            n,
            e.extend({ jqXHR: t, ajaxSettings: s }, r)
          );
        },
      };
    },
    _getPanelForTab: function (t) {
      var n = e(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + n));
    },
  });
})(jQuery);
(function (e) {
  function n(t, n) {
    var r = (t.attr("aria-describedby") || "").split(/\s+/);
    r.push(n),
      t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")));
  }
  function r(t) {
    var n = t.data("ui-tooltip-id"),
      r = (t.attr("aria-describedby") || "").split(/\s+/),
      i = e.inArray(n, r);
    i !== -1 && r.splice(i, 1),
      t.removeData("ui-tooltip-id"),
      (r = e.trim(r.join(" "))),
      r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby");
  }
  var t = 0;
  e.widget("ui.tooltip", {
    version: "1.10.1",
    options: {
      content: function () {
        var t = e(this).attr("title") || "";
        return e("<a>").text(t).html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip",
      },
      show: !0,
      tooltipClass: null,
      track: !1,
      close: null,
      open: null,
    },
    _create: function () {
      this._on({ mouseover: "open", focusin: "open" }),
        (this.tooltips = {}),
        (this.parents = {}),
        this.options.disabled && this._disable();
    },
    _setOption: function (t, n) {
      var r = this;
      if (t === "disabled") {
        this[n ? "_disable" : "_enable"](), (this.options[t] = n);
        return;
      }
      this._super(t, n),
        t === "content" &&
          e.each(this.tooltips, function (e, t) {
            r._updateContent(t);
          });
    },
    _disable: function () {
      var t = this;
      e.each(this.tooltips, function (n, r) {
        var i = e.Event("blur");
        (i.target = i.currentTarget = r[0]), t.close(i, !0);
      }),
        this.element
          .find(this.options.items)
          .addBack()
          .each(function () {
            var t = e(this);
            t.is("[title]") &&
              t.data("ui-tooltip-title", t.attr("title")).attr("title", "");
          });
    },
    _enable: function () {
      this.element
        .find(this.options.items)
        .addBack()
        .each(function () {
          var t = e(this);
          t.data("ui-tooltip-title") &&
            t.attr("title", t.data("ui-tooltip-title"));
        });
    },
    open: function (t) {
      var n = this,
        r = e(t ? t.target : this.element).closest(this.options.items);
      if (!r.length || r.data("ui-tooltip-id")) return;
      r.attr("title") && r.data("ui-tooltip-title", r.attr("title")),
        r.data("ui-tooltip-open", !0),
        t &&
          t.type === "mouseover" &&
          r.parents().each(function () {
            var t = e(this),
              r;
            t.data("ui-tooltip-open") &&
              ((r = e.Event("blur")),
              (r.target = r.currentTarget = this),
              n.close(r, !0)),
              t.attr("title") &&
                (t.uniqueId(),
                (n.parents[this.id] = {
                  element: this,
                  title: t.attr("title"),
                }),
                t.attr("title", ""));
          }),
        this._updateContent(r, t);
    },
    _updateContent: function (e, t) {
      var n,
        r = this.options.content,
        i = this,
        s = t ? t.type : null;
      if (typeof r == "string") return this._open(t, e, r);
      (n = r.call(e[0], function (n) {
        if (!e.data("ui-tooltip-open")) return;
        i._delay(function () {
          t && (t.type = s), this._open(t, e, n);
        });
      })),
        n && this._open(t, e, n);
    },
    _open: function (t, r, i) {
      function f(e) {
        a.of = e;
        if (s.is(":hidden")) return;
        s.position(a);
      }
      var s,
        o,
        u,
        a = e.extend({}, this.options.position);
      if (!i) return;
      s = this._find(r);
      if (s.length) {
        s.find(".ui-tooltip-content").html(i);
        return;
      }
      r.is("[title]") &&
        (t && t.type === "mouseover"
          ? r.attr("title", "")
          : r.removeAttr("title")),
        (s = this._tooltip(r)),
        n(r, s.attr("id")),
        s.find(".ui-tooltip-content").html(i),
        this.options.track && t && /^mouse/.test(t.type)
          ? (this._on(this.document, { mousemove: f }), f(t))
          : s.position(e.extend({ of: r }, this.options.position)),
        s.hide(),
        this._show(s, this.options.show),
        this.options.show &&
          this.options.show.delay &&
          (u = this.delayedShow =
            setInterval(function () {
              s.is(":visible") && (f(a.of), clearInterval(u));
            }, e.fx.interval)),
        this._trigger("open", t, { tooltip: s }),
        (o = {
          keyup: function (t) {
            if (t.keyCode === e.ui.keyCode.ESCAPE) {
              var n = e.Event(t);
              (n.currentTarget = r[0]), this.close(n, !0);
            }
          },
          remove: function () {
            this._removeTooltip(s);
          },
        });
      if (!t || t.type === "mouseover") o.mouseleave = "close";
      if (!t || t.type === "focusin") o.focusout = "close";
      this._on(!0, r, o);
    },
    close: function (t) {
      var n = this,
        i = e(t ? t.currentTarget : this.element),
        s = this._find(i);
      if (this.closing) return;
      clearInterval(this.delayedShow),
        i.data("ui-tooltip-title") &&
          i.attr("title", i.data("ui-tooltip-title")),
        r(i),
        s.stop(!0),
        this._hide(s, this.options.hide, function () {
          n._removeTooltip(e(this));
        }),
        i.removeData("ui-tooltip-open"),
        this._off(i, "mouseleave focusout keyup"),
        i[0] !== this.element[0] && this._off(i, "remove"),
        this._off(this.document, "mousemove"),
        t &&
          t.type === "mouseleave" &&
          e.each(this.parents, function (t, r) {
            e(r.element).attr("title", r.title), delete n.parents[t];
          }),
        (this.closing = !0),
        this._trigger("close", t, { tooltip: s }),
        (this.closing = !1);
    },
    _tooltip: function (n) {
      var r = "ui-tooltip-" + t++,
        i = e("<div>")
          .attr({ id: r, role: "tooltip" })
          .addClass(
            "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
              (this.options.tooltipClass || "")
          );
      return (
        e("<div>").addClass("ui-tooltip-content").appendTo(i),
        i.appendTo(this.document[0].body),
        (this.tooltips[r] = n),
        i
      );
    },
    _find: function (t) {
      var n = t.data("ui-tooltip-id");
      return n ? e("#" + n) : e();
    },
    _removeTooltip: function (e) {
      e.remove(), delete this.tooltips[e.attr("id")];
    },
    _destroy: function () {
      var t = this;
      e.each(this.tooltips, function (n, r) {
        var i = e.Event("blur");
        (i.target = i.currentTarget = r[0]),
          t.close(i, !0),
          e("#" + n).remove(),
          r.data("ui-tooltip-title") &&
            (r.attr("title", r.data("ui-tooltip-title")),
            r.removeData("ui-tooltip-title"));
      });
    },
  });
})(jQuery);
jQuery.effects ||
  (function (e, t) {
    var n = "ui-effects-";
    (e.effects = { effect: {} }),
      (function (e, t) {
        function h(e, t, n) {
          var r = u[t.type] || {};
          return e == null
            ? n || !t.def
              ? null
              : t.def
            : ((e = r.floor ? ~~e : parseFloat(e)),
              isNaN(e)
                ? t.def
                : r.mod
                ? (e + r.mod) % r.mod
                : 0 > e
                ? 0
                : r.max < e
                ? r.max
                : e);
        }
        function p(t) {
          var n = s(),
            r = (n._rgba = []);
          return (
            (t = t.toLowerCase()),
            c(i, function (e, i) {
              var s,
                u = i.re.exec(t),
                a = u && i.parse(u),
                f = i.space || "rgba";
              if (a)
                return (
                  (s = n[f](a)),
                  (n[o[f].cache] = s[o[f].cache]),
                  (r = n._rgba = s._rgba),
                  !1
                );
            }),
            r.length
              ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent), n)
              : l[t]
          );
        }
        function d(e, t, n) {
          return (
            (n = (n + 1) % 1),
            n * 6 < 1
              ? e + (t - e) * n * 6
              : n * 2 < 1
              ? t
              : n * 3 < 2
              ? e + (t - e) * (2 / 3 - n) * 6
              : e
          );
        }
        var n =
            "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
          r = /^([\-+])=\s*(\d+\.?\d*)/,
          i = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (e) {
                return [e[1], e[2], e[3], e[4]];
              },
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (e) {
                return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]];
              },
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (e) {
                return [
                  parseInt(e[1], 16),
                  parseInt(e[2], 16),
                  parseInt(e[3], 16),
                ];
              },
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (e) {
                return [
                  parseInt(e[1] + e[1], 16),
                  parseInt(e[2] + e[2], 16),
                  parseInt(e[3] + e[3], 16),
                ];
              },
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: "hsla",
              parse: function (e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]];
              },
            },
          ],
          s = (e.Color = function (t, n, r, i) {
            return new e.Color.fn.parse(t, n, r, i);
          }),
          o = {
            rgba: {
              props: {
                red: { idx: 0, type: "byte" },
                green: { idx: 1, type: "byte" },
                blue: { idx: 2, type: "byte" },
              },
            },
            hsla: {
              props: {
                hue: { idx: 0, type: "degrees" },
                saturation: { idx: 1, type: "percent" },
                lightness: { idx: 2, type: "percent" },
              },
            },
          },
          u = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 },
          },
          a = (s.support = {}),
          f = e("<p>")[0],
          l,
          c = e.each;
        (f.style.cssText = "background-color:rgba(1,1,1,.5)"),
          (a.rgba = f.style.backgroundColor.indexOf("rgba") > -1),
          c(o, function (e, t) {
            (t.cache = "_" + e),
              (t.props.alpha = { idx: 3, type: "percent", def: 1 });
          }),
          (s.fn = e.extend(s.prototype, {
            parse: function (n, r, i, u) {
              if (n === t) return (this._rgba = [null, null, null, null]), this;
              if (n.jquery || n.nodeType) (n = e(n).css(r)), (r = t);
              var a = this,
                f = e.type(n),
                d = (this._rgba = []);
              r !== t && ((n = [n, r, i, u]), (f = "array"));
              if (f === "string") return this.parse(p(n) || l._default);
              if (f === "array")
                return (
                  c(o.rgba.props, function (e, t) {
                    d[t.idx] = h(n[t.idx], t);
                  }),
                  this
                );
              if (f === "object")
                return (
                  n instanceof s
                    ? c(o, function (e, t) {
                        n[t.cache] && (a[t.cache] = n[t.cache].slice());
                      })
                    : c(o, function (t, r) {
                        var i = r.cache;
                        c(r.props, function (e, t) {
                          if (!a[i] && r.to) {
                            if (e === "alpha" || n[e] == null) return;
                            a[i] = r.to(a._rgba);
                          }
                          a[i][t.idx] = h(n[e], t, !0);
                        }),
                          a[i] &&
                            e.inArray(null, a[i].slice(0, 3)) < 0 &&
                            ((a[i][3] = 1), r.from && (a._rgba = r.from(a[i])));
                      }),
                  this
                );
            },
            is: function (e) {
              var t = s(e),
                n = !0,
                r = this;
              return (
                c(o, function (e, i) {
                  var s,
                    o = t[i.cache];
                  return (
                    o &&
                      ((s = r[i.cache] || (i.to && i.to(r._rgba)) || []),
                      c(i.props, function (e, t) {
                        if (o[t.idx] != null)
                          return (n = o[t.idx] === s[t.idx]), n;
                      })),
                    n
                  );
                }),
                n
              );
            },
            _space: function () {
              var e = [],
                t = this;
              return (
                c(o, function (n, r) {
                  t[r.cache] && e.push(n);
                }),
                e.pop()
              );
            },
            transition: function (e, t) {
              var n = s(e),
                r = n._space(),
                i = o[r],
                a = this.alpha() === 0 ? s("transparent") : this,
                f = a[i.cache] || i.to(a._rgba),
                l = f.slice();
              return (
                (n = n[i.cache]),
                c(i.props, function (e, r) {
                  var i = r.idx,
                    s = f[i],
                    o = n[i],
                    a = u[r.type] || {};
                  if (o === null) return;
                  s === null
                    ? (l[i] = o)
                    : (a.mod &&
                        (o - s > a.mod / 2
                          ? (s += a.mod)
                          : s - o > a.mod / 2 && (s -= a.mod)),
                      (l[i] = h((o - s) * t + s, r)));
                }),
                this[r](l)
              );
            },
            blend: function (t) {
              if (this._rgba[3] === 1) return this;
              var n = this._rgba.slice(),
                r = n.pop(),
                i = s(t)._rgba;
              return s(
                e.map(n, function (e, t) {
                  return (1 - r) * i[t] + r * e;
                })
              );
            },
            toRgbaString: function () {
              var t = "rgba(",
                n = e.map(this._rgba, function (e, t) {
                  return e == null ? (t > 2 ? 1 : 0) : e;
                });
              return n[3] === 1 && (n.pop(), (t = "rgb(")), t + n.join() + ")";
            },
            toHslaString: function () {
              var t = "hsla(",
                n = e.map(this.hsla(), function (e, t) {
                  return (
                    e == null && (e = t > 2 ? 1 : 0),
                    t && t < 3 && (e = Math.round(e * 100) + "%"),
                    e
                  );
                });
              return n[3] === 1 && (n.pop(), (t = "hsl(")), t + n.join() + ")";
            },
            toHexString: function (t) {
              var n = this._rgba.slice(),
                r = n.pop();
              return (
                t && n.push(~~(r * 255)),
                "#" +
                  e
                    .map(n, function (e) {
                      return (
                        (e = (e || 0).toString(16)),
                        e.length === 1 ? "0" + e : e
                      );
                    })
                    .join("")
              );
            },
            toString: function () {
              return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
            },
          })),
          (s.fn.parse.prototype = s.fn),
          (o.hsla.to = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null)
              return [null, null, null, e[3]];
            var t = e[0] / 255,
              n = e[1] / 255,
              r = e[2] / 255,
              i = e[3],
              s = Math.max(t, n, r),
              o = Math.min(t, n, r),
              u = s - o,
              a = s + o,
              f = a * 0.5,
              l,
              c;
            return (
              o === s
                ? (l = 0)
                : t === s
                ? (l = (60 * (n - r)) / u + 360)
                : n === s
                ? (l = (60 * (r - t)) / u + 120)
                : (l = (60 * (t - n)) / u + 240),
              u === 0 ? (c = 0) : f <= 0.5 ? (c = u / a) : (c = u / (2 - a)),
              [Math.round(l) % 360, c, f, i == null ? 1 : i]
            );
          }),
          (o.hsla.from = function (e) {
            if (e[0] == null || e[1] == null || e[2] == null)
              return [null, null, null, e[3]];
            var t = e[0] / 360,
              n = e[1],
              r = e[2],
              i = e[3],
              s = r <= 0.5 ? r * (1 + n) : r + n - r * n,
              o = 2 * r - s;
            return [
              Math.round(d(o, s, t + 1 / 3) * 255),
              Math.round(d(o, s, t) * 255),
              Math.round(d(o, s, t - 1 / 3) * 255),
              i,
            ];
          }),
          c(o, function (n, i) {
            var o = i.props,
              u = i.cache,
              a = i.to,
              f = i.from;
            (s.fn[n] = function (n) {
              a && !this[u] && (this[u] = a(this._rgba));
              if (n === t) return this[u].slice();
              var r,
                i = e.type(n),
                l = i === "array" || i === "object" ? n : arguments,
                p = this[u].slice();
              return (
                c(o, function (e, t) {
                  var n = l[i === "object" ? e : t.idx];
                  n == null && (n = p[t.idx]), (p[t.idx] = h(n, t));
                }),
                f ? ((r = s(f(p))), (r[u] = p), r) : s(p)
              );
            }),
              c(o, function (t, i) {
                if (s.fn[t]) return;
                s.fn[t] = function (s) {
                  var o = e.type(s),
                    u = t === "alpha" ? (this._hsla ? "hsla" : "rgba") : n,
                    a = this[u](),
                    f = a[i.idx],
                    l;
                  return o === "undefined"
                    ? f
                    : (o === "function" &&
                        ((s = s.call(this, f)), (o = e.type(s))),
                      s == null && i.empty
                        ? this
                        : (o === "string" &&
                            ((l = r.exec(s)),
                            l &&
                              (s =
                                f +
                                parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))),
                          (a[i.idx] = s),
                          this[u](a)));
                };
              });
          }),
          (s.hook = function (t) {
            var n = t.split(" ");
            c(n, function (t, n) {
              (e.cssHooks[n] = {
                set: function (t, r) {
                  var i,
                    o,
                    u = "";
                  if (
                    r !== "transparent" &&
                    (e.type(r) !== "string" || (i = p(r)))
                  ) {
                    r = s(i || r);
                    if (!a.rgba && r._rgba[3] !== 1) {
                      o = n === "backgroundColor" ? t.parentNode : t;
                      while ((u === "" || u === "transparent") && o && o.style)
                        try {
                          (u = e.css(o, "backgroundColor")), (o = o.parentNode);
                        } catch (f) {}
                      r = r.blend(u && u !== "transparent" ? u : "_default");
                    }
                    r = r.toRgbaString();
                  }
                  try {
                    t.style[n] = r;
                  } catch (f) {}
                },
              }),
                (e.fx.step[n] = function (t) {
                  t.colorInit ||
                    ((t.start = s(t.elem, n)),
                    (t.end = s(t.end)),
                    (t.colorInit = !0)),
                    e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos));
                });
            });
          }),
          s.hook(n),
          (e.cssHooks.borderColor = {
            expand: function (e) {
              var t = {};
              return (
                c(["Top", "Right", "Bottom", "Left"], function (n, r) {
                  t["border" + r + "Color"] = e;
                }),
                t
              );
            },
          }),
          (l = e.Color.names =
            {
              aqua: "#00ffff",
              black: "#000000",
              blue: "#0000ff",
              fuchsia: "#ff00ff",
              gray: "#808080",
              green: "#008000",
              lime: "#00ff00",
              maroon: "#800000",
              navy: "#000080",
              olive: "#808000",
              purple: "#800080",
              red: "#ff0000",
              silver: "#c0c0c0",
              teal: "#008080",
              white: "#ffffff",
              yellow: "#ffff00",
              transparent: [null, null, null, 0],
              _default: "#ffffff",
            });
      })(jQuery),
      (function () {
        function i(t) {
          var n,
            r,
            i = t.ownerDocument.defaultView
              ? t.ownerDocument.defaultView.getComputedStyle(t, null)
              : t.currentStyle,
            s = {};
          if (i && i.length && i[0] && i[i[0]]) {
            r = i.length;
            while (r--)
              (n = i[r]), typeof i[n] == "string" && (s[e.camelCase(n)] = i[n]);
          } else for (n in i) typeof i[n] == "string" && (s[n] = i[n]);
          return s;
        }
        function s(t, n) {
          var i = {},
            s,
            o;
          for (s in n)
            (o = n[s]),
              t[s] !== o &&
                !r[s] &&
                (e.fx.step[s] || !isNaN(parseFloat(o))) &&
                (i[s] = o);
          return i;
        }
        var n = ["add", "remove", "toggle"],
          r = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1,
          };
        e.each(
          [
            "borderLeftStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderTopStyle",
          ],
          function (t, n) {
            e.fx.step[n] = function (e) {
              if (
                (e.end !== "none" && !e.setAttr) ||
                (e.pos === 1 && !e.setAttr)
              )
                jQuery.style(e.elem, n, e.end), (e.setAttr = !0);
            };
          }
        ),
          e.fn.addBack ||
            (e.fn.addBack = function (e) {
              return this.add(
                e == null ? this.prevObject : this.prevObject.filter(e)
              );
            }),
          (e.effects.animateClass = function (t, r, o, u) {
            var a = e.speed(r, o, u);
            return this.queue(function () {
              var r = e(this),
                o = r.attr("class") || "",
                u,
                f = a.children ? r.find("*").addBack() : r;
              (f = f.map(function () {
                var t = e(this);
                return { el: t, start: i(this) };
              })),
                (u = function () {
                  e.each(n, function (e, n) {
                    t[n] && r[n + "Class"](t[n]);
                  });
                }),
                u(),
                (f = f.map(function () {
                  return (
                    (this.end = i(this.el[0])),
                    (this.diff = s(this.start, this.end)),
                    this
                  );
                })),
                r.attr("class", o),
                (f = f.map(function () {
                  var t = this,
                    n = e.Deferred(),
                    r = e.extend({}, a, {
                      queue: !1,
                      complete: function () {
                        n.resolve(t);
                      },
                    });
                  return this.el.animate(this.diff, r), n.promise();
                })),
                e.when.apply(e, f.get()).done(function () {
                  u(),
                    e.each(arguments, function () {
                      var t = this.el;
                      e.each(this.diff, function (e) {
                        t.css(e, "");
                      });
                    }),
                    a.complete.call(r[0]);
                });
            });
          }),
          e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function (t, n, r, i) {
              return n
                ? e.effects.animateClass.call(this, { add: t }, n, r, i)
                : this._addClass(t);
            },
            _removeClass: e.fn.removeClass,
            removeClass: function (t, n, r, i) {
              return arguments.length > 1
                ? e.effects.animateClass.call(this, { remove: t }, n, r, i)
                : this._removeClass.apply(this, arguments);
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function (n, r, i, s, o) {
              return typeof r == "boolean" || r === t
                ? i
                  ? e.effects.animateClass.call(
                      this,
                      r ? { add: n } : { remove: n },
                      i,
                      s,
                      o
                    )
                  : this._toggleClass(n, r)
                : e.effects.animateClass.call(this, { toggle: n }, r, i, s);
            },
            switchClass: function (t, n, r, i, s) {
              return e.effects.animateClass.call(
                this,
                { add: n, remove: t },
                r,
                i,
                s
              );
            },
          });
      })(),
      (function () {
        function r(t, n, r, i) {
          e.isPlainObject(t) && ((n = t), (t = t.effect)),
            (t = { effect: t }),
            n == null && (n = {}),
            e.isFunction(n) && ((i = n), (r = null), (n = {}));
          if (typeof n == "number" || e.fx.speeds[n])
            (i = r), (r = n), (n = {});
          return (
            e.isFunction(r) && ((i = r), (r = null)),
            n && e.extend(t, n),
            (r = r || n.duration),
            (t.duration = e.fx.off
              ? 0
              : typeof r == "number"
              ? r
              : r in e.fx.speeds
              ? e.fx.speeds[r]
              : e.fx.speeds._default),
            (t.complete = i || n.complete),
            t
          );
        }
        function i(t) {
          return !t || typeof t == "number" || e.fx.speeds[t]
            ? !0
            : typeof t == "string" && !e.effects.effect[t];
        }
        e.extend(e.effects, {
          version: "1.10.1",
          save: function (e, t) {
            for (var r = 0; r < t.length; r++)
              t[r] !== null && e.data(n + t[r], e[0].style[t[r]]);
          },
          restore: function (e, r) {
            var i, s;
            for (s = 0; s < r.length; s++)
              r[s] !== null &&
                ((i = e.data(n + r[s])), i === t && (i = ""), e.css(r[s], i));
          },
          setMode: function (e, t) {
            return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t;
          },
          getBaseline: function (e, t) {
            var n, r;
            switch (e[0]) {
              case "top":
                n = 0;
                break;
              case "middle":
                n = 0.5;
                break;
              case "bottom":
                n = 1;
                break;
              default:
                n = e[0] / t.height;
            }
            switch (e[1]) {
              case "left":
                r = 0;
                break;
              case "center":
                r = 0.5;
                break;
              case "right":
                r = 1;
                break;
              default:
                r = e[1] / t.width;
            }
            return { x: r, y: n };
          },
          createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var n = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                float: t.css("float"),
              },
              r = e("<div></div>")
                .addClass("ui-effects-wrapper")
                .css({
                  fontSize: "100%",
                  background: "transparent",
                  border: "none",
                  margin: 0,
                  padding: 0,
                }),
              i = { width: t.width(), height: t.height() },
              s = document.activeElement;
            try {
              s.id;
            } catch (o) {
              s = document.body;
            }
            return (
              t.wrap(r),
              (t[0] === s || e.contains(t[0], s)) && e(s).focus(),
              (r = t.parent()),
              t.css("position") === "static"
                ? (r.css({ position: "relative" }),
                  t.css({ position: "relative" }))
                : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index"),
                  }),
                  e.each(["top", "left", "bottom", "right"], function (e, r) {
                    (n[r] = t.css(r)),
                      isNaN(parseInt(n[r], 10)) && (n[r] = "auto");
                  }),
                  t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              t.css(i),
              r.css(n).show()
            );
          },
          removeWrapper: function (t) {
            var n = document.activeElement;
            return (
              t.parent().is(".ui-effects-wrapper") &&
                (t.parent().replaceWith(t),
                (t[0] === n || e.contains(t[0], n)) && e(n).focus()),
              t
            );
          },
          setTransition: function (t, n, r, i) {
            return (
              (i = i || {}),
              e.each(n, function (e, n) {
                var s = t.cssUnit(n);
                s[0] > 0 && (i[n] = s[0] * r + s[1]);
              }),
              i
            );
          },
        }),
          e.fn.extend({
            effect: function () {
              function o(n) {
                function u() {
                  e.isFunction(i) && i.call(r[0]), e.isFunction(n) && n();
                }
                var r = e(this),
                  i = t.complete,
                  o = t.mode;
                (r.is(":hidden") ? o === "hide" : o === "show")
                  ? u()
                  : s.call(r[0], t, u);
              }
              var t = r.apply(this, arguments),
                n = t.mode,
                i = t.queue,
                s = e.effects.effect[t.effect];
              return e.fx.off || !s
                ? n
                  ? this[n](t.duration, t.complete)
                  : this.each(function () {
                      t.complete && t.complete.call(this);
                    })
                : i === !1
                ? this.each(o)
                : this.queue(i || "fx", o);
            },
            _show: e.fn.show,
            show: function (e) {
              if (i(e)) return this._show.apply(this, arguments);
              var t = r.apply(this, arguments);
              return (t.mode = "show"), this.effect.call(this, t);
            },
            _hide: e.fn.hide,
            hide: function (e) {
              if (i(e)) return this._hide.apply(this, arguments);
              var t = r.apply(this, arguments);
              return (t.mode = "hide"), this.effect.call(this, t);
            },
            __toggle: e.fn.toggle,
            toggle: function (t) {
              if (i(t) || typeof t == "boolean" || e.isFunction(t))
                return this.__toggle.apply(this, arguments);
              var n = r.apply(this, arguments);
              return (n.mode = "toggle"), this.effect.call(this, n);
            },
            cssUnit: function (t) {
              var n = this.css(t),
                r = [];
              return (
                e.each(["em", "px", "%", "pt"], function (e, t) {
                  n.indexOf(t) > 0 && (r = [parseFloat(n), t]);
                }),
                r
              );
            },
          });
      })(),
      (function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
          t[n] = function (t) {
            return Math.pow(t, e + 2);
          };
        }),
          e.extend(t, {
            Sine: function (e) {
              return 1 - Math.cos((e * Math.PI) / 2);
            },
            Circ: function (e) {
              return 1 - Math.sqrt(1 - e * e);
            },
            Elastic: function (e) {
              return e === 0 || e === 1
                ? e
                : -Math.pow(2, 8 * (e - 1)) *
                    Math.sin((((e - 1) * 80 - 7.5) * Math.PI) / 15);
            },
            Back: function (e) {
              return e * e * (3 * e - 2);
            },
            Bounce: function (e) {
              var t,
                n = 4;
              while (e < ((t = Math.pow(2, --n)) - 1) / 11);
              return (
                1 / Math.pow(4, 3 - n) -
                7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
              );
            },
          }),
          e.each(t, function (t, n) {
            (e.easing["easeIn" + t] = n),
              (e.easing["easeOut" + t] = function (e) {
                return 1 - n(1 - e);
              }),
              (e.easing["easeInOut" + t] = function (e) {
                return e < 0.5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2;
              });
          });
      })();
  })(jQuery);
(function (e, t) {
  var n = /up|down|vertical/,
    r = /up|left|vertical|horizontal/;
  e.effects.effect.blind = function (t, i) {
    var s = e(this),
      o = ["position", "top", "bottom", "left", "right", "height", "width"],
      u = e.effects.setMode(s, t.mode || "hide"),
      a = t.direction || "up",
      f = n.test(a),
      l = f ? "height" : "width",
      c = f ? "top" : "left",
      h = r.test(a),
      p = {},
      d = u === "show",
      v,
      m,
      g;
    s.parent().is(".ui-effects-wrapper")
      ? e.effects.save(s.parent(), o)
      : e.effects.save(s, o),
      s.show(),
      (v = e.effects.createWrapper(s).css({ overflow: "hidden" })),
      (m = v[l]()),
      (g = parseFloat(v.css(c)) || 0),
      (p[l] = d ? m : 0),
      h ||
        (s
          .css(f ? "bottom" : "right", 0)
          .css(f ? "top" : "left", "auto")
          .css({ position: "absolute" }),
        (p[c] = d ? g : m + g)),
      d && (v.css(l, 0), h || v.css(c, g + m)),
      v.animate(p, {
        duration: t.duration,
        easing: t.easing,
        queue: !1,
        complete: function () {
          u === "hide" && s.hide(),
            e.effects.restore(s, o),
            e.effects.removeWrapper(s),
            i();
        },
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.bounce = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "effect"),
      o = s === "hide",
      u = s === "show",
      a = t.direction || "up",
      f = t.distance,
      l = t.times || 5,
      c = l * 2 + (u || o ? 1 : 0),
      h = t.duration / c,
      p = t.easing,
      d = a === "up" || a === "down" ? "top" : "left",
      v = a === "up" || a === "left",
      m,
      g,
      y,
      b = r.queue(),
      w = b.length;
    (u || o) && i.push("opacity"),
      e.effects.save(r, i),
      r.show(),
      e.effects.createWrapper(r),
      f || (f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3),
      u &&
        ((y = { opacity: 1 }),
        (y[d] = 0),
        r
          .css("opacity", 0)
          .css(d, v ? -f * 2 : f * 2)
          .animate(y, h, p)),
      o && (f /= Math.pow(2, l - 1)),
      (y = {}),
      (y[d] = 0);
    for (m = 0; m < l; m++)
      (g = {}),
        (g[d] = (v ? "-=" : "+=") + f),
        r.animate(g, h, p).animate(y, h, p),
        (f = o ? f * 2 : f / 2);
    o &&
      ((g = { opacity: 0 }),
      (g[d] = (v ? "-=" : "+=") + f),
      r.animate(g, h, p)),
      r.queue(function () {
        o && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
      }),
      w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1))),
      r.dequeue();
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.clip = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "hide"),
      o = s === "show",
      u = t.direction || "vertical",
      a = u === "vertical",
      f = a ? "height" : "width",
      l = a ? "top" : "left",
      c = {},
      h,
      p,
      d;
    e.effects.save(r, i),
      r.show(),
      (h = e.effects.createWrapper(r).css({ overflow: "hidden" })),
      (p = r[0].tagName === "IMG" ? h : r),
      (d = p[f]()),
      o && (p.css(f, 0), p.css(l, d / 2)),
      (c[f] = o ? d : 0),
      (c[l] = o ? 0 : d / 2),
      p.animate(c, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          o || r.hide(),
            e.effects.restore(r, i),
            e.effects.removeWrapper(r),
            n();
        },
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.drop = function (t, n) {
    var r = e(this),
      i = [
        "position",
        "top",
        "bottom",
        "left",
        "right",
        "opacity",
        "height",
        "width",
      ],
      s = e.effects.setMode(r, t.mode || "hide"),
      o = s === "show",
      u = t.direction || "left",
      a = u === "up" || u === "down" ? "top" : "left",
      f = u === "up" || u === "left" ? "pos" : "neg",
      l = { opacity: o ? 1 : 0 },
      c;
    e.effects.save(r, i),
      r.show(),
      e.effects.createWrapper(r),
      (c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2),
      o && r.css("opacity", 0).css(a, f === "pos" ? -c : c),
      (l[a] =
        (o ? (f === "pos" ? "+=" : "-=") : f === "pos" ? "-=" : "+=") + c),
      r.animate(l, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          s === "hide" && r.hide(),
            e.effects.restore(r, i),
            e.effects.removeWrapper(r),
            n();
        },
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.explode = function (t, n) {
    function y() {
      c.push(this), c.length === r * i && b();
    }
    function b() {
      s.css({ visibility: "visible" }), e(c).remove(), u || s.hide(), n();
    }
    var r = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
      i = r,
      s = e(this),
      o = e.effects.setMode(s, t.mode || "hide"),
      u = o === "show",
      a = s.show().css("visibility", "hidden").offset(),
      f = Math.ceil(s.outerWidth() / i),
      l = Math.ceil(s.outerHeight() / r),
      c = [],
      h,
      p,
      d,
      v,
      m,
      g;
    for (h = 0; h < r; h++) {
      (v = a.top + h * l), (g = h - (r - 1) / 2);
      for (p = 0; p < i; p++)
        (d = a.left + p * f),
          (m = p - (i - 1) / 2),
          s
            .clone()
            .appendTo("body")
            .wrap("<div></div>")
            .css({
              position: "absolute",
              visibility: "visible",
              left: -p * f,
              top: -h * l,
            })
            .parent()
            .addClass("ui-effects-explode")
            .css({
              position: "absolute",
              overflow: "hidden",
              width: f,
              height: l,
              left: d + (u ? m * f : 0),
              top: v + (u ? g * l : 0),
              opacity: u ? 0 : 1,
            })
            .animate(
              {
                left: d + (u ? 0 : m * f),
                top: v + (u ? 0 : g * l),
                opacity: u ? 1 : 0,
              },
              t.duration || 500,
              t.easing,
              y
            );
    }
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.fade = function (t, n) {
    var r = e(this),
      i = e.effects.setMode(r, t.mode || "toggle");
    r.animate(
      { opacity: i },
      { queue: !1, duration: t.duration, easing: t.easing, complete: n }
    );
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.fold = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "hide"),
      o = s === "show",
      u = s === "hide",
      a = t.size || 15,
      f = /([0-9]+)%/.exec(a),
      l = !!t.horizFirst,
      c = o !== l,
      h = c ? ["width", "height"] : ["height", "width"],
      p = t.duration / 2,
      d,
      v,
      m = {},
      g = {};
    e.effects.save(r, i),
      r.show(),
      (d = e.effects.createWrapper(r).css({ overflow: "hidden" })),
      (v = c ? [d.width(), d.height()] : [d.height(), d.width()]),
      f && (a = (parseInt(f[1], 10) / 100) * v[u ? 0 : 1]),
      o && d.css(l ? { height: 0, width: a } : { height: a, width: 0 }),
      (m[h[0]] = o ? v[0] : a),
      (g[h[1]] = o ? v[1] : 0),
      d.animate(m, p, t.easing).animate(g, p, t.easing, function () {
        u && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n();
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.highlight = function (t, n) {
    var r = e(this),
      i = ["backgroundImage", "backgroundColor", "opacity"],
      s = e.effects.setMode(r, t.mode || "show"),
      o = { backgroundColor: r.css("backgroundColor") };
    s === "hide" && (o.opacity = 0),
      e.effects.save(r, i),
      r
        .show()
        .css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" })
        .animate(o, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: function () {
            s === "hide" && r.hide(), e.effects.restore(r, i), n();
          },
        });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.pulsate = function (t, n) {
    var r = e(this),
      i = e.effects.setMode(r, t.mode || "show"),
      s = i === "show",
      o = i === "hide",
      u = s || i === "hide",
      a = (t.times || 5) * 2 + (u ? 1 : 0),
      f = t.duration / a,
      l = 0,
      c = r.queue(),
      h = c.length,
      p;
    if (s || !r.is(":visible")) r.css("opacity", 0).show(), (l = 1);
    for (p = 1; p < a; p++) r.animate({ opacity: l }, f, t.easing), (l = 1 - l);
    r.animate({ opacity: l }, f, t.easing),
      r.queue(function () {
        o && r.hide(), n();
      }),
      h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))),
      r.dequeue();
  };
})(jQuery);
(function (e, t) {
  (e.effects.effect.puff = function (t, n) {
    var r = e(this),
      i = e.effects.setMode(r, t.mode || "hide"),
      s = i === "hide",
      o = parseInt(t.percent, 10) || 150,
      u = o / 100,
      a = {
        height: r.height(),
        width: r.width(),
        outerHeight: r.outerHeight(),
        outerWidth: r.outerWidth(),
      };
    e.extend(t, {
      effect: "scale",
      queue: !1,
      fade: !0,
      mode: i,
      complete: n,
      percent: s ? o : 100,
      from: s
        ? a
        : {
            height: a.height * u,
            width: a.width * u,
            outerHeight: a.outerHeight * u,
            outerWidth: a.outerWidth * u,
          },
    }),
      r.effect(t);
  }),
    (e.effects.effect.scale = function (t, n) {
      var r = e(this),
        i = e.extend(!0, {}, t),
        s = e.effects.setMode(r, t.mode || "effect"),
        o =
          parseInt(t.percent, 10) ||
          (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100),
        u = t.direction || "both",
        a = t.origin,
        f = {
          height: r.height(),
          width: r.width(),
          outerHeight: r.outerHeight(),
          outerWidth: r.outerWidth(),
        },
        l = {
          y: u !== "horizontal" ? o / 100 : 1,
          x: u !== "vertical" ? o / 100 : 1,
        };
      (i.effect = "size"),
        (i.queue = !1),
        (i.complete = n),
        s !== "effect" &&
          ((i.origin = a || ["middle", "center"]), (i.restore = !0)),
        (i.from =
          t.from ||
          (s === "show"
            ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
            : f)),
        (i.to = {
          height: f.height * l.y,
          width: f.width * l.x,
          outerHeight: f.outerHeight * l.y,
          outerWidth: f.outerWidth * l.x,
        }),
        i.fade &&
          (s === "show" && ((i.from.opacity = 0), (i.to.opacity = 1)),
          s === "hide" && ((i.from.opacity = 1), (i.to.opacity = 0))),
        r.effect(i);
    }),
    (e.effects.effect.size = function (t, n) {
      var r,
        i,
        s,
        o = e(this),
        u = [
          "position",
          "top",
          "bottom",
          "left",
          "right",
          "width",
          "height",
          "overflow",
          "opacity",
        ],
        a = [
          "position",
          "top",
          "bottom",
          "left",
          "right",
          "overflow",
          "opacity",
        ],
        f = ["width", "height", "overflow"],
        l = ["fontSize"],
        c = [
          "borderTopWidth",
          "borderBottomWidth",
          "paddingTop",
          "paddingBottom",
        ],
        h = [
          "borderLeftWidth",
          "borderRightWidth",
          "paddingLeft",
          "paddingRight",
        ],
        p = e.effects.setMode(o, t.mode || "effect"),
        d = t.restore || p !== "effect",
        v = t.scale || "both",
        m = t.origin || ["middle", "center"],
        g = o.css("position"),
        y = d ? u : a,
        b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
      p === "show" && o.show(),
        (r = {
          height: o.height(),
          width: o.width(),
          outerHeight: o.outerHeight(),
          outerWidth: o.outerWidth(),
        }),
        t.mode === "toggle" && p === "show"
          ? ((o.from = t.to || b), (o.to = t.from || r))
          : ((o.from = t.from || (p === "show" ? b : r)),
            (o.to = t.to || (p === "hide" ? b : r))),
        (s = {
          from: { y: o.from.height / r.height, x: o.from.width / r.width },
          to: { y: o.to.height / r.height, x: o.to.width / r.width },
        });
      if (v === "box" || v === "both")
        s.from.y !== s.to.y &&
          ((y = y.concat(c)),
          (o.from = e.effects.setTransition(o, c, s.from.y, o.from)),
          (o.to = e.effects.setTransition(o, c, s.to.y, o.to))),
          s.from.x !== s.to.x &&
            ((y = y.concat(h)),
            (o.from = e.effects.setTransition(o, h, s.from.x, o.from)),
            (o.to = e.effects.setTransition(o, h, s.to.x, o.to)));
      (v === "content" || v === "both") &&
        s.from.y !== s.to.y &&
        ((y = y.concat(l).concat(f)),
        (o.from = e.effects.setTransition(o, l, s.from.y, o.from)),
        (o.to = e.effects.setTransition(o, l, s.to.y, o.to))),
        e.effects.save(o, y),
        o.show(),
        e.effects.createWrapper(o),
        o.css("overflow", "hidden").css(o.from),
        m &&
          ((i = e.effects.getBaseline(m, r)),
          (o.from.top = (r.outerHeight - o.outerHeight()) * i.y),
          (o.from.left = (r.outerWidth - o.outerWidth()) * i.x),
          (o.to.top = (r.outerHeight - o.to.outerHeight) * i.y),
          (o.to.left = (r.outerWidth - o.to.outerWidth) * i.x)),
        o.css(o.from);
      if (v === "content" || v === "both")
        (c = c.concat(["marginTop", "marginBottom"]).concat(l)),
          (h = h.concat(["marginLeft", "marginRight"])),
          (f = u.concat(c).concat(h)),
          o.find("*[width]").each(function () {
            var n = e(this),
              r = {
                height: n.height(),
                width: n.width(),
                outerHeight: n.outerHeight(),
                outerWidth: n.outerWidth(),
              };
            d && e.effects.save(n, f),
              (n.from = {
                height: r.height * s.from.y,
                width: r.width * s.from.x,
                outerHeight: r.outerHeight * s.from.y,
                outerWidth: r.outerWidth * s.from.x,
              }),
              (n.to = {
                height: r.height * s.to.y,
                width: r.width * s.to.x,
                outerHeight: r.height * s.to.y,
                outerWidth: r.width * s.to.x,
              }),
              s.from.y !== s.to.y &&
                ((n.from = e.effects.setTransition(n, c, s.from.y, n.from)),
                (n.to = e.effects.setTransition(n, c, s.to.y, n.to))),
              s.from.x !== s.to.x &&
                ((n.from = e.effects.setTransition(n, h, s.from.x, n.from)),
                (n.to = e.effects.setTransition(n, h, s.to.x, n.to))),
              n.css(n.from),
              n.animate(n.to, t.duration, t.easing, function () {
                d && e.effects.restore(n, f);
              });
          });
      o.animate(o.to, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          o.to.opacity === 0 && o.css("opacity", o.from.opacity),
            p === "hide" && o.hide(),
            e.effects.restore(o, y),
            d ||
              (g === "static"
                ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left,
                  })
                : e.each(["top", "left"], function (e, t) {
                    o.css(t, function (t, n) {
                      var r = parseInt(n, 10),
                        i = e ? o.to.left : o.to.top;
                      return n === "auto" ? i + "px" : r + i + "px";
                    });
                  })),
            e.effects.removeWrapper(o),
            n();
        },
      });
    });
})(jQuery);
(function (e, t) {
  e.effects.effect.shake = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "effect"),
      o = t.direction || "left",
      u = t.distance || 20,
      a = t.times || 3,
      f = a * 2 + 1,
      l = Math.round(t.duration / f),
      c = o === "up" || o === "down" ? "top" : "left",
      h = o === "up" || o === "left",
      p = {},
      d = {},
      v = {},
      m,
      g = r.queue(),
      y = g.length;
    e.effects.save(r, i),
      r.show(),
      e.effects.createWrapper(r),
      (p[c] = (h ? "-=" : "+=") + u),
      (d[c] = (h ? "+=" : "-=") + u * 2),
      (v[c] = (h ? "-=" : "+=") + u * 2),
      r.animate(p, l, t.easing);
    for (m = 1; m < a; m++) r.animate(d, l, t.easing).animate(v, l, t.easing);
    r
      .animate(d, l, t.easing)
      .animate(p, l / 2, t.easing)
      .queue(function () {
        s === "hide" && r.hide(),
          e.effects.restore(r, i),
          e.effects.removeWrapper(r),
          n();
      }),
      y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1))),
      r.dequeue();
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.slide = function (t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "width", "height"],
      s = e.effects.setMode(r, t.mode || "show"),
      o = s === "show",
      u = t.direction || "left",
      a = u === "up" || u === "down" ? "top" : "left",
      f = u === "up" || u === "left",
      l,
      c = {};
    e.effects.save(r, i),
      r.show(),
      (l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0)),
      e.effects.createWrapper(r).css({ overflow: "hidden" }),
      o && r.css(a, f ? (isNaN(l) ? "-" + l : -l) : l),
      (c[a] = (o ? (f ? "+=" : "-=") : f ? "-=" : "+=") + l),
      r.animate(c, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          s === "hide" && r.hide(),
            e.effects.restore(r, i),
            e.effects.removeWrapper(r),
            n();
        },
      });
  };
})(jQuery);
(function (e, t) {
  e.effects.effect.transfer = function (t, n) {
    var r = e(this),
      i = e(t.to),
      s = i.css("position") === "fixed",
      o = e("body"),
      u = s ? o.scrollTop() : 0,
      a = s ? o.scrollLeft() : 0,
      f = i.offset(),
      l = {
        top: f.top - u,
        left: f.left - a,
        height: i.innerHeight(),
        width: i.innerWidth(),
      },
      c = r.offset(),
      h = e("<div class='ui-effects-transfer'></div>")
        .appendTo(document.body)
        .addClass(t.className)
        .css({
          top: c.top - u,
          left: c.left - a,
          height: r.innerHeight(),
          width: r.innerWidth(),
          position: s ? "fixed" : "absolute",
        })
        .animate(l, t.duration, t.easing, function () {
          h.remove(), n();
        });
  };
})(jQuery);
