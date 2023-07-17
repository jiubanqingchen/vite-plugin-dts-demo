import { defineComponent as o, openBlock as c, createElementBlock as s } from "vue";
const p = ["data-type"], a = /* @__PURE__ */ o({
  name: "QcButton",
  __name: "index",
  props: {
    type: {}
  },
  setup(t) {
    const n = t;
    return (e, u) => (c(), s("button", {
      class: "qc-button",
      "data-type": n.type
    }, null, 8, p));
  }
}), r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  QcButton: a
}, Symbol.toStringTag, { value: "Module" })), l = (t) => {
  for (const [n, e] of Object.entries(r))
    t.component(e.name, e);
}, _ = {
  install: l
};
export {
  a as QcButton,
  _ as default
};
