(this.webpackJsonpcriptoapp = this.webpackJsonpcriptoapp || []).push([
  [0],
  {
    42: function (e, t, c) {},
    43: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(2),
        r = c.n(n),
        a = c(14),
        s = c.n(a),
        i = c(4),
        o = c.n(i),
        d = c(15),
        j = c(5),
        u = c(16),
        l = c.n(u),
        b = c(0),
        p = function (e) {
          var t = e.coin,
            c = e.index;
          return Object(b.jsxs)("tr", {
            children: [
              Object(b.jsx)("td", { children: c }),
              Object(b.jsxs)("td", {
                children: [
                  Object(b.jsx)("img", {
                    src: t.image,
                    alt: t.name,
                    className: "imagen img-fluid me-2",
                  }),
                  Object(b.jsx)("span", { children: t.name }),
                  Object(b.jsx)("span", {
                    className: "ms-2 text-muted text-uppercase",
                    children: t.symbol,
                  }),
                ],
              }),
              Object(b.jsx)("td", { children: t.current_price }),
              Object(b.jsx)("td", {
                className:
                  t.price_change_percentage_24h > 0
                    ? "text-success"
                    : "text-danger",
                children: t.price_change_percentage_24h,
              }),
              Object(b.jsx)("td", { children: t.total_volume }),
            ],
          });
        },
        h = ["#", "Moneda", "Precio", "Cambio De Precio", "Volumen 24h"],
        m = function (e) {
          var t = e.coins,
            c = e.search,
            n = t.filter(function (e) {
              return (
                e.name.toLowerCase().includes(c.toLowerCase()) ||
                e.symbol.toLowerCase().includes(c.toLowerCase())
              );
            });
          return Object(b.jsxs)("table", {
            className: "table table-dark mt-4 table-hover font-size",
            children: [
              Object(b.jsx)("thead", {
                children: Object(b.jsx)("tr", {
                  children: h.map(function (e, t) {
                    return Object(b.jsx)("td", { children: e }, t);
                  }),
                }),
              }),
              Object(b.jsx)("tbody", {
                children: n.map(function (e, t) {
                  return Object(b.jsx)(p, { coin: e, index: t + 1 }, t);
                }),
              }),
            ],
          });
        },
        x = function () {
          var e = Object(n.useState)([]),
            t = Object(j.a)(e, 2),
            c = t[0],
            r = t[1],
            a = Object(n.useState)(""),
            s = Object(j.a)(a, 2),
            i = s[0],
            u = s[1];
          return (
            Object(n.useEffect)(function () {
              (function () {
                var e = Object(d.a)(
                  o.a.mark(function e() {
                    var t;
                    return o.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              l.a.get(
                                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
                              )
                            );
                          case 2:
                            (t = e.sent), r(t.data);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
            Object(b.jsx)("div", {
              className: "container",
              children: Object(b.jsxs)("div", {
                className: "row",
                children: [
                  Object(b.jsx)("h1", { children: "Mercado de monedas" }),
                  Object(b.jsx)("input", {
                    type: "text",
                    placeholder: "Busca una moneda",
                    className:
                      "form-control bg-dark text-light border-0 mt-4 text-center",
                    onChange: function (e) {
                      return u(e.target.value);
                    },
                  }),
                  Object(b.jsx)(m, { coins: c, search: i }),
                ],
              }),
            })
          );
        };
      c(41), c(42);
      s.a.render(
        Object(b.jsx)(r.a.StrictMode, { children: Object(b.jsx)(x, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[43, 1, 2]],
]);
//# sourceMappingURL=main.8d248425.chunk.js.map
