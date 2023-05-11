import { mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useNow } from "@vueuse/core";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
const _sfc_main = {
  __name: "midbar",
  __ssrInlineRender: true,
  props: {
    date: String,
    ads: {
      type: [Boolean, Object],
      required: true
    }
  },
  setup(__props) {
    const now = useNow();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "pa-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          block: "",
                          color: "transparent",
                          variant: "text",
                          rounded: "0",
                          height: "100",
                          href: "/"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, {
                                width: "380",
                                height: "60",
                                src: "/frontend/img/logo.png"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VImg, {
                                  width: "380",
                                  height: "60",
                                  src: "/frontend/img/logo.png"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-caption text-center"${_scopeId3}>${ssrInterpolate(__props.date)} | ${ssrInterpolate(new Date(unref(now)).toLocaleString([], { hour12: true }))}</div>`);
                      } else {
                        return [
                          createVNode(VBtn, {
                            block: "",
                            color: "transparent",
                            variant: "text",
                            rounded: "0",
                            height: "100",
                            href: "/"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                width: "380",
                                height: "60",
                                src: "/frontend/img/logo.png"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-caption text-center" }, toDisplayString(__props.date) + " | " + toDisplayString(new Date(unref(now)).toLocaleString([], { hour12: true })), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.ads) {
                          _push4(`<div class="d-flex"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCard, {
                            flat: "",
                            class: "w-100 ml-auto rounded-0 bg-transparent",
                            "max-width": "728",
                            href: __props.ads["url"],
                            target: "_blank"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  height: "90",
                                  class: "w-100 h-100",
                                  src: __props.ads["image"]
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    height: "90",
                                    class: "w-100 h-100",
                                    src: __props.ads["image"]
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          __props.ads ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex"
                          }, [
                            createVNode(VCard, {
                              flat: "",
                              class: "w-100 ml-auto rounded-0 bg-transparent",
                              "max-width": "728",
                              href: __props.ads["url"],
                              target: "_blank"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  height: "90",
                                  class: "w-100 h-100",
                                  src: __props.ads["image"]
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          block: "",
                          color: "transparent",
                          variant: "text",
                          rounded: "0",
                          height: "100",
                          href: "/"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              width: "380",
                              height: "60",
                              src: "/frontend/img/logo.png"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-caption text-center" }, toDisplayString(__props.date) + " | " + toDisplayString(new Date(unref(now)).toLocaleString([], { hour12: true })), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VCol, {
                      cols: "12",
                      md: "8"
                    }, {
                      default: withCtx(() => [
                        __props.ads ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex"
                        }, [
                          createVNode(VCard, {
                            flat: "",
                            class: "w-100 ml-auto rounded-0 bg-transparent",
                            "max-width": "728",
                            href: __props.ads["url"],
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                height: "90",
                                class: "w-100 h-100",
                                src: __props.ads["image"]
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        block: "",
                        color: "transparent",
                        variant: "text",
                        rounded: "0",
                        height: "100",
                        href: "/"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            width: "380",
                            height: "60",
                            src: "/frontend/img/logo.png"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-caption text-center" }, toDisplayString(__props.date) + " | " + toDisplayString(new Date(unref(now)).toLocaleString([], { hour12: true })), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx(() => [
                      __props.ads ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "d-flex"
                      }, [
                        createVNode(VCard, {
                          flat: "",
                          class: "w-100 ml-auto rounded-0 bg-transparent",
                          "max-width": "728",
                          href: __props.ads["url"],
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              height: "90",
                              class: "w-100 h-100",
                              src: __props.ads["image"]
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/layout/midbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
