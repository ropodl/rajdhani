import { withCtx, createTextVNode, toDisplayString, createVNode, mergeProps, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { VAvatar } from "vuetify/lib/components/VAvatar/index.mjs";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VHover } from "vuetify/lib/components/VHover/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
import { VListItem, VListItemTitle } from "vuetify/lib/components/VList/index.mjs";
const _sfc_main = {
  __name: "ThreeCol",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center"${_scopeId2}><span class="font-rajdhani text-h3 font-weight-bold"${_scopeId2}>${ssrInterpolate(__props.data["name"])}</span>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    rounded: "",
                    color: "primary",
                    variant: "tonal",
                    href: "/category/" + __props.data["slug"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` थप ${ssrInterpolate(__props.data["name"])} समाचार `);
                      } else {
                        return [
                          createTextVNode(" थप " + toDisplayString(__props.data["name"]) + " समाचार ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("span", { class: "font-rajdhani text-h3 font-weight-bold" }, toDisplayString(__props.data["name"]), 1),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        rounded: "",
                        color: "primary",
                        variant: "tonal",
                        href: "/category/" + __props.data["slug"]
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" थप " + toDisplayString(__props.data["name"]) + " समाचार ", 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(__props.data["news"], (item, index) => {
              _push2(`<!--[-->`);
              if (index < 9) {
                _push2(ssrRenderComponent(VCol, {
                  cols: "12",
                  sm: "6",
                  md: "6",
                  lg: "4",
                  class: "pb-0"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VHover, null, {
                        default: withCtx(({ isHovering, props }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VListItem, mergeProps({
                              href: "/news/" + item["id"]
                            }, props, { class: "py-0 pl-0 mb-3" }), {
                              prepend: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VAvatar, {
                                    rounded: "lg",
                                    size: "auto"
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VImg, {
                                          cover: "",
                                          width: "140",
                                          height: "133",
                                          class: isHovering ? "zoom" : "",
                                          src: item["image"],
                                          alt: item.media[0].file_name
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VImg, {
                                            cover: "",
                                            width: "140",
                                            height: "133",
                                            class: isHovering ? "zoom" : "",
                                            src: item["image"],
                                            alt: item.media[0].file_name
                                          }, null, 8, ["class", "src", "alt"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VAvatar, {
                                      rounded: "lg",
                                      size: "auto"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          cover: "",
                                          width: "140",
                                          height: "133",
                                          class: isHovering ? "zoom" : "",
                                          src: item["image"],
                                          alt: item.media[0].file_name
                                        }, null, 8, ["class", "src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VListItemTitle, {
                                    class: "text-h5 text-wrap line-clamp-3 font-weight-bold mb-3",
                                    style: { "line-height": "2rem", "white-space": "wrap" }
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item["title"])}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item["title"]), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VListItemTitle, {
                                      class: "text-h5 text-wrap line-clamp-3 font-weight-bold mb-3",
                                      style: { "line-height": "2rem", "white-space": "wrap" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item["title"]), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VListItem, mergeProps({
                                href: "/news/" + item["id"]
                              }, props, { class: "py-0 pl-0 mb-3" }), {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    rounded: "lg",
                                    size: "auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        cover: "",
                                        width: "140",
                                        height: "133",
                                        class: isHovering ? "zoom" : "",
                                        src: item["image"],
                                        alt: item.media[0].file_name
                                      }, null, 8, ["class", "src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, {
                                    class: "text-h5 text-wrap line-clamp-3 font-weight-bold mb-3",
                                    style: { "line-height": "2rem", "white-space": "wrap" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item["title"]), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1040, ["href"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VHover, null, {
                          default: withCtx(({ isHovering, props }) => [
                            createVNode(VListItem, mergeProps({
                              href: "/news/" + item["id"]
                            }, props, { class: "py-0 pl-0 mb-3" }), {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "lg",
                                  size: "auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      cover: "",
                                      width: "140",
                                      height: "133",
                                      class: isHovering ? "zoom" : "",
                                      src: item["image"],
                                      alt: item.media[0].file_name
                                    }, null, 8, ["class", "src", "alt"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, {
                                  class: "text-h5 text-wrap line-clamp-3 font-weight-bold mb-3",
                                  style: { "line-height": "2rem", "white-space": "wrap" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item["title"]), 1)
                                  ]),
                                  _: 2
                                }, 1024)
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
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode("span", { class: "font-rajdhani text-h3 font-weight-bold" }, toDisplayString(__props.data["name"]), 1),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      rounded: "",
                      color: "primary",
                      variant: "tonal",
                      href: "/category/" + __props.data["slug"]
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" थप " + toDisplayString(__props.data["name"]) + " समाचार ", 1)
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(__props.data["news"], (item, index) => {
                return openBlock(), createBlock(Fragment, null, [
                  index < 9 ? (openBlock(), createBlock(VCol, {
                    key: 0,
                    cols: "12",
                    sm: "6",
                    md: "6",
                    lg: "4",
                    class: "pb-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(VHover, null, {
                        default: withCtx(({ isHovering, props }) => [
                          createVNode(VListItem, mergeProps({
                            href: "/news/" + item["id"]
                          }, props, { class: "py-0 pl-0 mb-3" }), {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "lg",
                                size: "auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    cover: "",
                                    width: "140",
                                    height: "133",
                                    class: isHovering ? "zoom" : "",
                                    src: item["image"],
                                    alt: item.media[0].file_name
                                  }, null, 8, ["class", "src", "alt"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, {
                                class: "text-h5 text-wrap line-clamp-3 font-weight-bold mb-3",
                                style: { "line-height": "2rem", "white-space": "wrap" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item["title"]), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1040, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shared/home/layouts/ThreeCol.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
