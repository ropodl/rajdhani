import { withCtx, mergeProps, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { VCard, VCardTitle } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VHover } from "vuetify/lib/components/VHover/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
const _sfc_main = {
  __name: "mainnews",
  __ssrInlineRender: true,
  props: {
    mainnews: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VHover, null, {
                          default: withCtx(({ isHovering, props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, mergeProps({
                                flat: "",
                                text: "",
                                ripple: false,
                                href: "/",
                                class: "bg-transparent"
                              }, props), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, {
                                      class: ["text-h2 text-center text-wrap font-weight-bold", [isHovering ? "text-primary" : ""]],
                                      style: { "line-height": "5rem" }
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` गोरखा अस्पताललाई हव अस्पतालका रुपमा सञ्चालन गर्ने तयारी `);
                                        } else {
                                          return [
                                            createTextVNode(" गोरखा अस्पताललाई हव अस्पतालका रुपमा सञ्चालन गर्ने तयारी ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VImg, {
                                      cover: "",
                                      height: "500",
                                      class: isHovering ? "zoom" : "",
                                      src: "http://127.0.0.1:8000/storage/44/Health-State-Minister-Bhawani-khapung.jpg"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, {
                                        class: ["text-h2 text-center text-wrap font-weight-bold", [isHovering ? "text-primary" : ""]],
                                        style: { "line-height": "5rem" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" गोरखा अस्पताललाई हव अस्पतालका रुपमा सञ्चालन गर्ने तयारी ")
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]),
                                      createVNode(VImg, {
                                        cover: "",
                                        height: "500",
                                        class: isHovering ? "zoom" : "",
                                        src: "http://127.0.0.1:8000/storage/44/Health-State-Minister-Bhawani-khapung.jpg"
                                      }, null, 8, ["class"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, mergeProps({
                                  flat: "",
                                  text: "",
                                  ripple: false,
                                  href: "/",
                                  class: "bg-transparent"
                                }, props), {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, {
                                      class: ["text-h2 text-center text-wrap font-weight-bold", [isHovering ? "text-primary" : ""]],
                                      style: { "line-height": "5rem" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" गोरखा अस्पताललाई हव अस्पतालका रुपमा सञ्चालन गर्ने तयारी ")
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]),
                                    createVNode(VImg, {
                                      cover: "",
                                      height: "500",
                                      class: isHovering ? "zoom" : "",
                                      src: "http://127.0.0.1:8000/storage/44/Health-State-Minister-Bhawani-khapung.jpg"
                                    }, null, 8, ["class"])
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VHover, null, {
                            default: withCtx(({ isHovering, props }) => [
                              createVNode(VCard, mergeProps({
                                flat: "",
                                text: "",
                                ripple: false,
                                href: "/",
                                class: "bg-transparent"
                              }, props), {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, {
                                    class: ["text-h2 text-center text-wrap font-weight-bold", [isHovering ? "text-primary" : ""]],
                                    style: { "line-height": "5rem" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" गोरखा अस्पताललाई हव अस्पतालका रुपमा सञ्चालन गर्ने तयारी ")
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]),
                                  createVNode(VImg, {
                                    cover: "",
                                    height: "500",
                                    class: isHovering ? "zoom" : "",
                                    src: "http://127.0.0.1:8000/storage/44/Health-State-Minister-Bhawani-khapung.jpg"
                                  }, null, 8, ["class"])
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(VHover, null, {
                          default: withCtx(({ isHovering, props }) => [
                            createVNode(VCard, mergeProps({
                              flat: "",
                              text: "",
                              ripple: false,
                              href: "/",
                              class: "bg-transparent"
                            }, props), {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: ["text-h2 text-center text-wrap font-weight-bold", [isHovering ? "text-primary" : ""]],
                                  style: { "line-height": "5rem" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" गोरखा अस्पताललाई हव अस्पतालका रुपमा सञ्चालन गर्ने तयारी ")
                                  ]),
                                  _: 2
                                }, 1032, ["class"]),
                                createVNode(VImg, {
                                  cover: "",
                                  height: "500",
                                  class: isHovering ? "zoom" : "",
                                  src: "http://127.0.0.1:8000/storage/44/Health-State-Minister-Bhawani-khapung.jpg"
                                }, null, 8, ["class"])
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          _: 1
                        })
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(VHover, null, {
                        default: withCtx(({ isHovering, props }) => [
                          createVNode(VCard, mergeProps({
                            flat: "",
                            text: "",
                            ripple: false,
                            href: "/",
                            class: "bg-transparent"
                          }, props), {
                            default: withCtx(() => [
                              createVNode(VCardTitle, {
                                class: ["text-h2 text-center text-wrap font-weight-bold", [isHovering ? "text-primary" : ""]],
                                style: { "line-height": "5rem" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" गोरखा अस्पताललाई हव अस्पतालका रुपमा सञ्चालन गर्ने तयारी ")
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              createVNode(VImg, {
                                cover: "",
                                height: "500",
                                class: isHovering ? "zoom" : "",
                                src: "http://127.0.0.1:8000/storage/44/Health-State-Minister-Bhawani-khapung.jpg"
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shared/home/mainnews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
