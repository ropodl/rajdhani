import { withCtx, createVNode, mergeProps, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { VCard, VCardTitle } from "vuetify/lib/components/VCard/index.mjs";
import { VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VHover } from "vuetify/lib/components/VHover/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
import { VOverlay } from "vuetify/lib/components/VOverlay/index.mjs";
const _sfc_main = {
  __name: "relatednews",
  __ssrInlineRender: true,
  props: {
    related: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h3 font-rajdhani text-primary font-weight-bold"${_scopeId2}> सम्बन्धित खबर </div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-h3 font-rajdhani text-primary font-weight-bold" }, " सम्बन्धित खबर ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(__props.related, (item, i) => {
              _push2(`<!--[-->`);
              if (i < 6) {
                _push2(ssrRenderComponent(VCol, {
                  cols: "12",
                  md: "4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VHover, null, {
                        default: withCtx(({ isHovering, props }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCard, {
                              href: "/news/" + item["id"]
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VImg, mergeProps({
                                    cover: "",
                                    height: "150",
                                    class: ["align-end", isHovering ? "zoom" : ""],
                                    src: item["image"]
                                  }, props), {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VOverlay, {
                                          "model-value": true,
                                          contained: "",
                                          persistent: "",
                                          "no-click-animation": "",
                                          scrim: "black",
                                          class: "align-end"
                                        }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VCardTitle, { class: "font-rajdhani text-h5 text-wrap font-weight-bold text-white" }, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(item["title"])}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(item["title"]), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VCardTitle, { class: "font-rajdhani text-h5 text-wrap font-weight-bold text-white" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item["title"]), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VOverlay, {
                                            "model-value": true,
                                            contained: "",
                                            persistent: "",
                                            "no-click-animation": "",
                                            scrim: "black",
                                            class: "align-end"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCardTitle, { class: "font-rajdhani text-h5 text-wrap font-weight-bold text-white" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item["title"]), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VImg, mergeProps({
                                      cover: "",
                                      height: "150",
                                      class: ["align-end", isHovering ? "zoom" : ""],
                                      src: item["image"]
                                    }, props), {
                                      default: withCtx(() => [
                                        createVNode(VOverlay, {
                                          "model-value": true,
                                          contained: "",
                                          persistent: "",
                                          "no-click-animation": "",
                                          scrim: "black",
                                          class: "align-end"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCardTitle, { class: "font-rajdhani text-h5 text-wrap font-weight-bold text-white" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item["title"]), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1040, ["class", "src"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VCard, {
                                href: "/news/" + item["id"]
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, mergeProps({
                                    cover: "",
                                    height: "150",
                                    class: ["align-end", isHovering ? "zoom" : ""],
                                    src: item["image"]
                                  }, props), {
                                    default: withCtx(() => [
                                      createVNode(VOverlay, {
                                        "model-value": true,
                                        contained: "",
                                        persistent: "",
                                        "no-click-animation": "",
                                        scrim: "black",
                                        class: "align-end"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "font-rajdhani text-h5 text-wrap font-weight-bold text-white" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item["title"]), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040, ["class", "src"])
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VHover, null, {
                          default: withCtx(({ isHovering, props }) => [
                            createVNode(VCard, {
                              href: "/news/" + item["id"]
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, mergeProps({
                                  cover: "",
                                  height: "150",
                                  class: ["align-end", isHovering ? "zoom" : ""],
                                  src: item["image"]
                                }, props), {
                                  default: withCtx(() => [
                                    createVNode(VOverlay, {
                                      "model-value": true,
                                      contained: "",
                                      persistent: "",
                                      "no-click-animation": "",
                                      scrim: "black",
                                      class: "align-end"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "font-rajdhani text-h5 text-wrap font-weight-bold text-white" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item["title"]), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1040, ["class", "src"])
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-h3 font-rajdhani text-primary font-weight-bold" }, " सम्बन्धित खबर ")
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(__props.related, (item, i) => {
                return openBlock(), createBlock(Fragment, null, [
                  i < 6 ? (openBlock(), createBlock(VCol, {
                    key: 0,
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VHover, null, {
                        default: withCtx(({ isHovering, props }) => [
                          createVNode(VCard, {
                            href: "/news/" + item["id"]
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, mergeProps({
                                cover: "",
                                height: "150",
                                class: ["align-end", isHovering ? "zoom" : ""],
                                src: item["image"]
                              }, props), {
                                default: withCtx(() => [
                                  createVNode(VOverlay, {
                                    "model-value": true,
                                    contained: "",
                                    persistent: "",
                                    "no-click-animation": "",
                                    scrim: "black",
                                    class: "align-end"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "font-rajdhani text-h5 text-wrap font-weight-bold text-white" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item["title"]), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1040, ["class", "src"])
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ], 64);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shared/relatednews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
