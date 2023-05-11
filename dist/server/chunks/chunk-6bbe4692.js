import { ref, mergeProps, withCtx, createVNode, unref, isRef, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VTabs, VTab } from "vuetify/lib/components/VTabs/index.mjs";
import { VWindow, VWindowItem } from "vuetify/lib/components/VWindow/index.mjs";
const _sfc_main = {
  __name: "videofeature",
  __ssrInlineRender: true,
  props: {
    videos: Object
  },
  setup(__props) {
    let tab = ref("0");
    const getWatchUrl = (link) => {
      return link.replace("watch?v=", "embed/");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-grey-darken-4 pt-16" }, _attrs))}>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="font-rajdhani font-weight-bold text-h3"${_scopeId3}> भिडियो </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "font-rajdhani font-weight-bold text-h3" }, " भिडियो ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTabs, {
                          modelValue: unref(tab),
                          "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event,
                          direction: "vertical",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.videos, (video, index) => {
                                _push5(ssrRenderComponent(VTab, {
                                  value: index,
                                  class: "text-capitalize"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Video ${ssrInterpolate(index + 1)}`);
                                    } else {
                                      return [
                                        createTextVNode(" Video " + toDisplayString(index + 1), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.videos, (video, index) => {
                                  return openBlock(), createBlock(VTab, {
                                    value: index,
                                    class: "text-capitalize"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Video " + toDisplayString(index + 1), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTabs, {
                            modelValue: unref(tab),
                            "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event,
                            direction: "vertical",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.videos, (video, index) => {
                                return openBlock(), createBlock(VTab, {
                                  value: index,
                                  class: "text-capitalize"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Video " + toDisplayString(index + 1), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindow, {
                          transition: "fade-transition",
                          modelValue: unref(tab),
                          "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.videos, (video, index) => {
                                _push5(ssrRenderComponent(VWindowItem, { value: index }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<iframe loading="lazy" width="100%" height="490"${ssrRenderAttr("src", getWatchUrl(video["iframe"]))} title="YouTube video player" frameborder="0" allowfullscreen${_scopeId5}></iframe>`);
                                    } else {
                                      return [
                                        createVNode("iframe", {
                                          loading: "lazy",
                                          width: "100%",
                                          height: "490",
                                          src: getWatchUrl(video["iframe"]),
                                          title: "YouTube video player",
                                          frameborder: "0",
                                          allowfullscreen: ""
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.videos, (video, index) => {
                                  return openBlock(), createBlock(VWindowItem, { value: index }, {
                                    default: withCtx(() => [
                                      createVNode("iframe", {
                                        loading: "lazy",
                                        width: "100%",
                                        height: "490",
                                        src: getWatchUrl(video["iframe"]),
                                        title: "YouTube video player",
                                        frameborder: "0",
                                        allowfullscreen: ""
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VWindow, {
                            transition: "fade-transition",
                            modelValue: unref(tab),
                            "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.videos, (video, index) => {
                                return openBlock(), createBlock(VWindowItem, { value: index }, {
                                  default: withCtx(() => [
                                    createVNode("iframe", {
                                      loading: "lazy",
                                      width: "100%",
                                      height: "490",
                                      src: getWatchUrl(video["iframe"]),
                                      title: "YouTube video player",
                                      frameborder: "0",
                                      allowfullscreen: ""
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "font-rajdhani font-weight-bold text-h3" }, " भिडियो ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTabs, {
                          modelValue: unref(tab),
                          "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event,
                          direction: "vertical",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.videos, (video, index) => {
                              return openBlock(), createBlock(VTab, {
                                value: index,
                                class: "text-capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Video " + toDisplayString(index + 1), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 256))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindow, {
                          transition: "fade-transition",
                          modelValue: unref(tab),
                          "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.videos, (video, index) => {
                              return openBlock(), createBlock(VWindowItem, { value: index }, {
                                default: withCtx(() => [
                                  createVNode("iframe", {
                                    loading: "lazy",
                                    width: "100%",
                                    height: "490",
                                    src: getWatchUrl(video["iframe"]),
                                    title: "YouTube video player",
                                    frameborder: "0",
                                    allowfullscreen: ""
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 256))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "font-rajdhani font-weight-bold text-h3" }, " भिडियो ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTabs, {
                        modelValue: unref(tab),
                        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event,
                        direction: "vertical",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.videos, (video, index) => {
                            return openBlock(), createBlock(VTab, {
                              value: index,
                              class: "text-capitalize"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Video " + toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindow, {
                        transition: "fade-transition",
                        modelValue: unref(tab),
                        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.videos, (video, index) => {
                            return openBlock(), createBlock(VWindowItem, { value: index }, {
                              default: withCtx(() => [
                                createVNode("iframe", {
                                  loading: "lazy",
                                  width: "100%",
                                  height: "490",
                                  src: getWatchUrl(video["iframe"]),
                                  title: "YouTube video player",
                                  frameborder: "0",
                                  allowfullscreen: ""
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shared/home/videofeature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
