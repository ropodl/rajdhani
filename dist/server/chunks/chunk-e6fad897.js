import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { VCard, VCardTitle } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VHover } from "vuetify/lib/components/VHover/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
import { VOverlay } from "vuetify/lib/components/VOverlay/index.mjs";
const _sfc_main = {
  __name: "photofeature",
  __ssrInlineRender: true,
  props: {
    photos: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-grey-darken-4 py-16" }, _attrs))}>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="font-rajdhani font-weight-bold text-h3"${_scopeId3}> फोटो फिचर </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "font-rajdhani font-weight-bold text-h3" }, " फोटो फिचर ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.photos, (photo, i) => {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VHover, null, {
                            default: withCtx(({ isHovering, props }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCard, mergeProps({
                                  href: "/news/" + photo["id"]
                                }, props), {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        cover: "",
                                        height: "500",
                                        src: photo["image"],
                                        class: isHovering ? "zoom" : ""
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VOverlay, {
                                              "model-value": true,
                                              contained: "",
                                              persistent: "",
                                              "no-click-animation": "",
                                              scrim: "black",
                                              class: "align-end"
                                            }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCardTitle, { class: "font-rajdhani text-h5 text-wrap font-weight-bold text-white" }, {
                                                    default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(photo["title"])}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(photo["title"]), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCardTitle, { class: "font-rajdhani text-h5 text-wrap font-weight-bold text-white" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(photo["title"]), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
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
                                                      createTextVNode(toDisplayString(photo["title"]), 1)
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          cover: "",
                                          height: "500",
                                          src: photo["image"],
                                          class: isHovering ? "zoom" : ""
                                        }, {
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
                                                    createTextVNode(toDisplayString(photo["title"]), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["src", "class"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCard, mergeProps({
                                    href: "/news/" + photo["id"]
                                  }, props), {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        cover: "",
                                        height: "500",
                                        src: photo["image"],
                                        class: isHovering ? "zoom" : ""
                                      }, {
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
                                                  createTextVNode(toDisplayString(photo["title"]), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["src", "class"])
                                    ]),
                                    _: 2
                                  }, 1040, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VHover, null, {
                              default: withCtx(({ isHovering, props }) => [
                                createVNode(VCard, mergeProps({
                                  href: "/news/" + photo["id"]
                                }, props), {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      cover: "",
                                      height: "500",
                                      src: photo["image"],
                                      class: isHovering ? "zoom" : ""
                                    }, {
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
                                                createTextVNode(toDisplayString(photo["title"]), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["src", "class"])
                                  ]),
                                  _: 2
                                }, 1040, ["href"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "font-rajdhani font-weight-bold text-h3" }, " फोटो फिचर ")
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.photos, (photo, i) => {
                      return openBlock(), createBlock(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VHover, null, {
                            default: withCtx(({ isHovering, props }) => [
                              createVNode(VCard, mergeProps({
                                href: "/news/" + photo["id"]
                              }, props), {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    cover: "",
                                    height: "500",
                                    src: photo["image"],
                                    class: isHovering ? "zoom" : ""
                                  }, {
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
                                              createTextVNode(toDisplayString(photo["title"]), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["src", "class"])
                                ]),
                                _: 2
                              }, 1040, ["href"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "font-rajdhani font-weight-bold text-h3" }, " फोटो फिचर ")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.photos, (photo, i) => {
                    return openBlock(), createBlock(VCol, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VHover, null, {
                          default: withCtx(({ isHovering, props }) => [
                            createVNode(VCard, mergeProps({
                              href: "/news/" + photo["id"]
                            }, props), {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  cover: "",
                                  height: "500",
                                  src: photo["image"],
                                  class: isHovering ? "zoom" : ""
                                }, {
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
                                            createTextVNode(toDisplayString(photo["title"]), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["src", "class"])
                              ]),
                              _: 2
                            }, 1040, ["href"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shared/home/photofeature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
